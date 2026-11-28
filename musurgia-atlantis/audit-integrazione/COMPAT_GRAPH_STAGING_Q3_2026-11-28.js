/* Musurgia Atlantis: canvas 3D compatibility view, independent of third-party CDNs.
   Used when the WebGL ForceGraph3D engine cannot load. Creative Commons-free original code. */
(function(){'use strict';
function makeGraph(host){
  const canvas=document.createElement('canvas');canvas.setAttribute('aria-label','Vista tridimensionale di compatibilità della costellazione');canvas.dataset.atlantisTransparent="true";canvas.style.cssText='width:100%;height:100%;display:block;touch-action:none;cursor:grab';host.appendChild(canvas);
  const ctx=canvas.getContext('2d',{alpha:true});
  // Tooltip HTML indipendente dal disegno nel canvas: nome leggibile anche
  // quando il nodo si muove, collide con un'etichetta o ruota nello spazio.
  const hoverLabel=document.createElement('div');
  hoverLabel.style.cssText='position:absolute;left:0;top:0;z-index:4;pointer-events:none;display:none;white-space:nowrap;max-width:65%;overflow:hidden;text-overflow:ellipsis;padding:4px 8px;border:1px solid rgba(231,196,126,.55);border-radius:5px;background:rgba(5,22,33,.96);color:#ffe4aa;font:600 12px system-ui;box-shadow:0 2px 12px rgba(0,0,0,.45)';
  host.appendChild(hoverLabel);
  let W=innerWidth,H=innerHeight,pxRatio=1,rotY=-0.42,rotX=0.17,zoom=1,shiftX=0,shiftY=0,selected=null,hovered=null,hoveredEdge=null,drag=null,active=true,last=0;
  let current={nodes:[],links:[]},points=[],linkObjects=[],projected=[],nodeColors=n=>'#8bd9ce',linkColors=e=>'#719ca8',onNode=()=>{},onNodeDblClick=()=>{},onLink=()=>{},onHover=()=>{},onLinkHover=()=>{},onBackground=()=>{},onDragEnd=()=>{},nodeSize=n=>3;
  const options={linkOpacity:.3,disableDoubleClickZoom:false,cosmicBackground:false};
  const hashed=str=>{let h=2166136261;for(let i=0;i<str.length;i++)h=Math.imul(h^str.charCodeAt(i),16777619);return h>>>0};
  const rnd=(str,k)=>((hashed(str+'-'+k)%100003)/100003);
  function layout(){
    const focus=current.nodes.find(n=>n._focus);
    if(focus){
      // True volumetric layout: each graph-distance level occupies a 3D spherical
      // cloud/shell, never a flat XY ring. The label tier does not alter 3D depth.
      focus.x=0;focus.y=0;focus.z=0;
      const groups=new Map();
      for(const n of current.nodes){
        if(n.id===focus.id)continue;
        const depth=Math.max(1,n._depth||1);
        if(!groups.has(depth))groups.set(depth,[]);
        groups.get(depth).push(n);
      }
      const goldenAngle=Math.PI*(3-Math.sqrt(5));
      for(const [depth,nodes] of groups){
        nodes.sort((a,b)=>a.id.localeCompare(b.id));
        const shellRadius=145+(depth-1)*124;
        nodes.forEach((n,i)=>{
          // Fibonacci-sphere distribution prevents planar rings and polar clumping.
          const latitude=1-2*(i+.5)/nodes.length;
          const radial=Math.sqrt(Math.max(0,1-latitude*latitude));
          const longitude=goldenAngle*i+depth*1.27+.32;
          // Small, deterministic 3-axis drift makes each shell a diffuse nebula.
          const variation=depth===1?.94+rnd(n.id,8)*.12:.79+rnd(n.id,8)*.39;
          const r=shellRadius*variation;
          n.x=r*radial*Math.cos(longitude)+(rnd(n.id,10)-.5)*shellRadius*.075;
          n.y=r*latitude+(rnd(n.id,11)-.5)*shellRadius*.075;
          n.z=r*radial*Math.sin(longitude)+(rnd(n.id,12)-.5)*shellRadius*.075;
        });
      }
      rotY=-.52;rotX=.33;shiftX=0;shiftY=0;
    }else if(current.nodes.some(n=>n._compareEndpoint)){
      // Confronto paritario: nessuno dei due lemmi costituisce il centro.
      // I due estremi occupano posizioni speculari; i nodi intermedi
      // seguono le distanze documentate da entrambi.
      const first=current.nodes.find(n=>n._compareStart);
      const second=current.nodes.find(n=>n._compareEnd);
      if(first)Object.assign(first,{x:-170,y:0,z:0});
      if(second)Object.assign(second,{x:170,y:0,z:0});
      const common=current.nodes.filter(n=>!n._compareEndpoint).sort((a,b)=>a.id.localeCompare(b.id));
      const golden=Math.PI*(3-Math.sqrt(5));
      for(let i=0;i<common.length;i++){
        const n=common[i],a=Number(n._compareDistA),b=Number(n._compareDistB);
        const fraction=Number.isFinite(a)&&Number.isFinite(b)&&a+b>0?a/(a+b):.5;
        const angle=golden*i,ring=Math.sqrt(i+1)*11;
        n.x=(fraction-.5)*310+(rnd(n.id,9)-.5)*28;
        n.y=Math.cos(angle)*ring;
        n.z=Math.sin(angle)*ring;
      }
      rotY=-.22;rotX=.11;shiftX=0;shiftY=0;
    }else if(current.nodes.some(n=>n._overview)){
      // Forma sferica organica, come la costellazione delle prime versioni:
      // non più un insieme di satelliti ordinati per categoria.
      // L'ordine stabile conserva la riconoscibilità fra i ricaricamenti.
      const cloud=[...current.nodes].sort((a,b)=>a.id.localeCompare(b.id));
      const N=Math.max(1,cloud.length),golden=Math.PI*(3-Math.sqrt(5));
      for(let i=0;i<cloud.length;i++){
        const n=cloud[i];
        const latitude=1-2*(i+.5)/N;
        const ring=Math.sqrt(Math.max(0,1-latitude*latitude));
        const phi=golden*i;
        // Circa il 7% dei nodi è distribuito in una corona esterna
        // irregolare; un piccolo gruppo si allontana ancora di più.
        // Nessun nodo/legame è aggiunto o cancellato.
        const scatter=rnd(n.id,22);
        const halo=!n._featuredOverview&&scatter<.07;
        const distant=halo&&scatter<.014;
        const radial=halo
          ?(distant?790+rnd(n.id,23)*380:425+rnd(n.id,24)*350)
          :160+Math.cbrt((i+.5)/N)*215+(rnd(n.id,6)-.5)*60;
        const offset=halo?(rnd(n.id,25)-.5)*.36:0;
        n.x=radial*ring*Math.cos(phi+offset);
        n.y=radial*latitude*(halo?1:.84);
        n.z=radial*ring*Math.sin(phi+offset);
        n._haloStar=halo;
      }
      rotY=-.42;rotX=.17;shiftX=0;shiftY=0;
    }else{
      const chapters=current.nodes.filter(n=>n.category==='capitolo').sort((a,b)=>a.name.localeCompare(b.name,'it'));
      const centers=new Map();
      chapters.forEach((n,i)=>{const angle=i*2*Math.PI/Math.max(chapters.length,1)-Math.PI/2;
        centers.set(n.id,{x:Math.cos(angle)*300,y:Math.sin(angle)*220,z:Math.sin(angle*2.1)*115});
      });
      const memberships=new Map();
      for(const e of current.links){
        const a=typeof e.source==='object'?e.source.id:e.source,b=typeof e.target==='object'?e.target.id:e.target;
        if(a.startsWith('cap:')&&!b.startsWith('cap:')){if(!memberships.has(b))memberships.set(b,[]);memberships.get(b).push(a)}
        if(b.startsWith('cap:')&&!a.startsWith('cap:')){if(!memberships.has(a))memberships.set(a,[]);memberships.get(a).push(b)}
      }
      current.nodes.filter(n=>n.category!=='capitolo').forEach(n=>{
        const seeds=(memberships.get(n.id)||[]).filter(x=>centers.has(x));let x=0,y=0,z=0;
        if(seeds.length){for(const k of seeds){const p=centers.get(k);x+=p.x;y+=p.y;z+=p.z}x/=seeds.length;y/=seeds.length;z/=seeds.length}
        else{const angle=rnd(n.id,4)*6.283;x=Math.cos(angle)*150;y=Math.sin(angle)*150;z=(rnd(n.id,5)-.5)*130}
        const spread=seeds.length>1?80:128;
        n.x=x+(rnd(n.id,0)-.5)*spread*2;
        n.y=y+(rnd(n.id,1)-.5)*spread*1.5;
        n.z=z+(rnd(n.id,2)-.5)*spread*2;
      });
      chapters.forEach(n=>Object.assign(n,centers.get(n.id)));
    }
    // Le posizioni manuali prevalgono sul layout finché il nodo resta visibile.
    for(const n of current.nodes)if(n._manualPos){
      n.x=n._manualPos.x;n.y=n._manualPos.y;n.z=n._manualPos.z;
    }
    points=current.nodes;
    const byId=new Map(points.map(n=>[n.id,n]));
    linkObjects=current.links.map(e=>({e,a:byId.get(typeof e.source==='object'?e.source.id:e.source),b:byId.get(typeof e.target==='object'?e.target.id:e.target)})).filter(e=>e.a&&e.b);
    if(selected&&!byId.has(selected))selected=null;
  }
  function resize(){pxRatio=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.round(W*pxRatio);canvas.height=Math.round(H*pxRatio);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(pxRatio,0,0,pxRatio,0,0);}
  function colorRgba(hex,alpha){if(!/^#[0-9a-f]{6}$/i.test(hex))return 'rgba(160,197,197,'+alpha+')';let h=hex.slice(1);return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${alpha})`}
  function project(n){const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),sx=Math.sin(rotX);
    const x=n.x*cy-n.z*sy, z=n.x*sy+n.z*cy, y=n.y*cx-z*sx, depth=n.y*sx+z*cx;
    const k=Math.max(.40,Math.min(2.15,820/(820+depth))), s=Math.min(W,H)/890*zoom*k;
    return {x:W/2+shiftX+x*s,y:H/2+shiftY+y*s,z:depth,s,scale:k,n};
  }
  // Negative camera depth is toward the viewer. Far-side nodes remain visible
  // as translucent points, but their captions appear only when rotated forward.
  function frontness(p){return Math.max(0,Math.min(1,.5-p.z/125));}
  function alphaAt(p){return p.n._focus||p.n._compareEndpoint?1:.19+.81*frontness(p);}
  function drawCaption(p,r,occupied){
    const n=p.n,root=!!n._focus,endpoint=!!n._compareEndpoint;
    // Nella nebulosa generale valgono le vecchie regole: nessuna
    // etichetta imposta e rispetto della profondità prospettica.
    // La scelta delle etichette prevale su selezione, hover, numero nodi
    // e categorie persone: nessuna categoria selezionata = zero nomi.
    if(!n.name||!n._label)return;
    if(n._overview&&!n._featuredOverview&&n.id!==hovered&&frontness(p)<.68)return;
    const label=n.name.length>42?n.name.slice(0,40)+'…':n.name;
    const author=n.category==='persone';
    const size=root||endpoint?13:author?12:n._depth===1?11.5:11;
    ctx.font=(root||endpoint||author||n._depth===1?'600 ':'500 ')+size+'px system-ui';
    const labelWidth=Math.ceil(ctx.measureText(label).width+13);
    const width=Math.min(W-12,labelWidth),height=root||endpoint||author?24:21;
    const shift=r+9;
    const candidates=[
      [p.x-width/2,p.y-shift-height],
      [p.x+shift,p.y-height/2],
      [p.x-shift-width,p.y-height/2],
      [p.x-width/2,p.y+shift],
      [p.x-width/2,p.y-shift-height-24],
      [p.x-width/2,p.y+shift+24],
      [p.x+shift,p.y-shift-height],
      [p.x-shift-width,p.y+shift]
    ];
    let rect=null;
    for(const [rawX,rawY] of candidates){
      const x=Math.max(6,Math.min(W-width-6,rawX)),y=rawY;
      // Evitare le barre sovrapposte in alto, ma non nascondere le etichette
      // nell'ampia area libera della visualizzazione.
      if(y<54||y+height>H-14)continue;
      const candidate={x,y,w:width,h:height};
      if(occupied.some(b=>x<b.x+b.w+5&&x+width>b.x-5&&y<b.y+b.h+4&&y+height>b.y-4))continue;
      rect=candidate;break;
    }
    if(!rect)return;
    occupied.push(rect);
    ctx.globalAlpha=1;
    ctx.fillStyle=endpoint?'rgba(70,55,16,.96)':root?'rgba(24,43,49,.94)':author?'rgba(35,35,25,.94)':'rgba(4,19,30,.88)';
    ctx.fillRect(rect.x,rect.y,rect.w,rect.h);
    ctx.fillStyle=endpoint?'#fff0b2':root?'#ffe1a1':author?'#ffe2a4':n._depth===1?'#ecf8f3':'#d7e6e3';
    ctx.textAlign='left';ctx.textBaseline='middle';
    ctx.fillText(label,rect.x+6,rect.y+rect.h/2,Math.max(10,rect.w-12));
    ctx.textBaseline='alphabetic';
  }
  function frame(time){
    if(!active)return;
    requestAnimationFrame(frame);
    if(time-last<30)return;
    last=time;
    ctx.clearRect(0,0,W,H);
    // Con fondale cosmico, il canvas resta trasparente e gli archi sono
    // disegnati sopra il paesaggio. In modalità classica torna il cielo.
    if(!options.cosmicBackground){
      ctx.fillStyle='#061522';ctx.fillRect(0,0,W,H);
      const grd=ctx.createRadialGradient(W*.51,H*.53,20,W*.5,H*.5,Math.max(W,H)*.68);
      grd.addColorStop(0,'#123648');grd.addColorStop(.55,'#071724');grd.addColorStop(1,'#020b14');
      ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
      for(let i=0;i<125;i++){
        const x=rnd('stars',i)*W,y=rnd('far',i)*H,r=.3+rnd('radius',i)*1.1;
        ctx.fillStyle='rgba(197,220,236,'+(.10+rnd('alpha',i)*.3)+')';ctx.fillRect(x,y,r,r);
      }
    }
    // Un lieve moto orbitale fa mescolare la nube senza mai alterare gli
    // archi: ogni arco segue le coordinate dei propri nodi.
    // Viene applicato soltanto alla vista complessiva.
    const overview=points.some(n=>n._overview);
    if(overview&&!drag&&pointers.size===0){
      const clock=time*.00018;
      for(const n of points){
        if(n._manualPos)continue;
        const ox=n._orbitBaseX??n.x,oy=n._orbitBaseY??n.y,oz=n._orbitBaseZ??n.z;
        if(n._orbitBaseX===undefined){
          n._orbitBaseX=ox;n._orbitBaseY=oy;n._orbitBaseZ=oz;
        }
        const phase=rnd(n.id,19)*6.2831853;
        n.x=ox+Math.sin(clock+phase)*7;
        n.y=oy+Math.cos(clock*.83+phase)*5;
        n.z=oz+Math.sin(clock*.61+phase)*7;
      }
    }
    projected=points.map(project);
    if(pointerPosition)updateHoverAt(pointerPosition);
    const map=new Map(projected.map(p=>[p.n.id,p]));
    ctx.lineWidth=overview?.18:.65;
    for(const o of linkObjects){
      const a=map.get(o.a.id),b=map.get(o.b.id);if(!a||!b)continue;
      const near=Math.max(frontness(a),frontness(b));
      const direct=o.a._depth===0||o.b._depth===0;
      ctx.strokeStyle=colorRgba(linkColors(o.e),
        (overview?.017:direct?.33:options.linkOpacity*.48)*(.30+.70*near));
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
    }
    projected.sort((a,b)=>b.z-a.z);
    for(const p of projected){
      const n=p.n,chapter=n.category==='capitolo',root=!!n._focus,endpoint=!!n._compareEndpoint;
      const base=nodeColors(n);
      const r=(endpoint?11:root?9.5:chapter?6.8:Math.min(4.5,2+Math.sqrt(Math.max(1,nodeSize(n)))*.3))*Math.max(.52,Math.min(2.4,p.scale*Math.sqrt(zoom)));
      p.r=r;
      if(p.x<-40||p.y<-30||p.x>W+40||p.y>H+40)continue;
      ctx.globalAlpha=alphaAt(p);ctx.fillStyle=base;
      ctx.shadowBlur=endpoint?28:root?23:frontness(p)>.68?chapter?15:8:2;
      ctx.shadowColor=colorRgba(base,.55);
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,2*Math.PI);ctx.fill();
      ctx.shadowBlur=0;ctx.globalAlpha=1;
      if(n.category==='persone'&&!n._overview){
        // Due anelli ellittici, leggermente inclinati, sempre ancorati al nodo:
        // identità astronomica delle persone, senza cambiare i dati musicali.
        const orbit=(r*1.8)+3;
        ctx.save();ctx.translate(p.x,p.y);
        ctx.rotate(-.33+rotY*.16);
        ctx.globalAlpha=n._compareEndpoint||n._focus?1:Math.max(.65,alphaAt(p));
        ctx.strokeStyle='rgba(255,219,142,.95)';
        ctx.lineWidth=Math.max(1.15,r*.14);
        ctx.beginPath();ctx.ellipse(0,0,orbit,Math.max(3,r*.72),0,0,2*Math.PI);ctx.stroke();
        ctx.rotate(.44);
        ctx.strokeStyle='rgba(255,244,208,.55)';
        ctx.lineWidth=Math.max(.8,r*.08);
        ctx.beginPath();ctx.ellipse(0,0,orbit*1.13,Math.max(3,r*.52),0,0,2*Math.PI);ctx.stroke();
        ctx.restore();
      }
    }
    // I filtri delle etichette sono indipendenti dai filtri dei nodi.
    // Fra le sole etichette autorizzate, priorità a estremi e autori;
    // il controllo dei rettangoli evita sovrapposizioni.
    const occupied=[];
    const priority=p=>p.n._overview&&p.n.id===hovered?120:p.n._featuredOverview?110:p.n._compareEndpoint?100:p.n._focus?95:
      p.n.category==='persone'?85:p.n._depth===1?55:40;
    const captions=projected
      .filter(p=>p.n._label&&
        p.x>=-12&&p.x<=W+12&&p.y>=40&&p.y<=H+12)
      .sort((a,b)=>priority(b)-priority(a)||a.z-b.z);
    for(const p of captions)drawCaption(p,p.r||4,occupied);
    if(!drag&&pointers.size===0){
      if(overview){
        // Rotazione più vivace ma non monotona: accelerazioni dolci
        // e variazione degli assi, non uno scatto casuale per fotogramma.
        rotY+=.00115+.00045*Math.sin(time*.00024);
        rotX+=.00022*Math.sin(time*.00017)+.00007*Math.cos(time*.00029);
        rotX=Math.max(-.87,Math.min(.87,rotX));
      }else{
        rotY+=.00037;rotX+=.000085;if(rotX>Math.PI)rotX-=2*Math.PI;
      }
    }
  }
  function pickLink(p,threshold=8){
    const byId=new Map(projected.map(q=>[q.n.id,q]));
    let nearest=null;
    for(const o of linkObjects){
      const a=byId.get(o.a.id),b=byId.get(o.b.id);if(!a||!b)continue;
      const dx=b.x-a.x,dy=b.y-a.y,len2=dx*dx+dy*dy;
      if(len2<1)continue;
      const t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/len2));
      if(t<.06||t>.94)continue;
      const distance=Math.hypot(p.x-(a.x+t*dx),p.y-(a.y+t*dy));
      if(distance<threshold&&(!nearest||distance<nearest.distance))nearest={distance,edge:o.e};
    }
    return nearest?.edge||null;
  }
  function coordinates(evt){const b=canvas.getBoundingClientRect();return {x:evt.clientX-b.left,y:evt.clientY-b.top};}
  function hitNode(p,radius=20){
    return projected.reduce((best,q)=>{
      const d=Math.hypot(q.x-p.x,q.y-p.y);
      return d<Math.max(radius,q.r||0)&&(!best||d<best.d)?{d,node:q.n}:best;
    },null)?.node||null;
  }
  const pointers=new Map();let pinch=null,ignoreTap=false,lastTap=null,pendingTap=null;
  let pointerPosition=null;
  function updateHoverAt(p){
    if(!p||pointers.size>0)return;
    // La nube ruota anche sotto un puntatore fermo: ricalcolare ogni frame.
    // Raggio in pixel sufficiente per afferrare un punto molto piccolo.
    const near=projected.reduce((best,q)=>{
      const d=Math.hypot(q.x-p.x,q.y-p.y);
      const radius=q.n._overview?21:Math.max(15,q.r||0);
      return d<radius&&(!best||d<best.d)?{d,node:q.n}:best;
    },null);
    const n=near?.node||null,id=n?.id||null;
    if(hovered!==id){hovered=id;onHover(n)}
    if(n){
      // Nome SEMPRE disponibile su ogni nodo, indipendentemente da
      // ricerca, confronto, filtri delle etichette e profondità.
      hoverLabel.textContent=n.name||n.id;
      hoverLabel.style.display='block';
      // Misura il testo per non tagliarlo contro il bordo del riquadro.
      const width=hoverLabel.offsetWidth||200;
      const height=hoverLabel.offsetHeight||24;
      hoverLabel.style.left=Math.max(6,Math.min(W-width-6,p.x+17))+'px';
      hoverLabel.style.top=Math.max(6,Math.min(H-height-6,p.y+17))+'px';
    }else hoverLabel.style.display='none';
    const edge=id?null:pickLink(p,5);
    if(hoveredEdge!==edge){hoveredEdge=edge;onLinkHover(edge)}
    canvas.style.cursor=id?'pointer':edge?'help':'grab';
  }
  function zoomAt(value,anchorX=W/2,anchorY=H/2){
    const next=Math.max(.3,Math.min(10,Number(value)||zoom)),ratio=next/zoom;
    shiftX=anchorX-W/2-(anchorX-W/2-shiftX)*ratio;
    shiftY=anchorY-H/2-(anchorY-H/2-shiftY)*ratio;
    zoom=next;
  }
  function pinchPose(){
    const pair=[...pointers.values()];if(pair.length<2)return null;
    return {distance:Math.max(1,Math.hypot(pair[0].x-pair[1].x,pair[0].y-pair[1].y)),x:(pair[0].x+pair[1].x)/2,y:(pair[0].y+pair[1].y)/2};
  }
  canvas.addEventListener('pointerleave',()=>{
    pointerPosition=null;hovered=null;hoverLabel.style.display='none';onHover(null);
  });
  canvas.addEventListener('pointerdown',ev=>{
    ev.preventDefault();
    const p=coordinates(ev);pointers.set(ev.pointerId,p);
    try{canvas.setPointerCapture(ev.pointerId)}catch(_){}
    if(pointers.size===1){
      const node=hitNode(p);
      const proj=node?project(node):null;
      drag={...p,rotY,rotX,moved:false,node:node||null,
        position:node?{x:node.x,y:node.y,z:node.z}:null,
        scale:proj?Math.max(.0001,proj.s):1};
      ignoreTap=false;
    }
    else{drag=null;ignoreTap=true;pinch=pinchPose()}
    canvas.style.cursor='grabbing';
  });
  canvas.addEventListener('pointermove',ev=>{
    const p=coordinates(ev);
    if(pointers.has(ev.pointerId)){
      pointers.set(ev.pointerId,p);
      if(pointers.size>=2){
        const now=pinchPose();
        if(pinch){zoomAt(zoom*now.distance/pinch.distance,pinch.x,pinch.y);shiftX+=now.x-pinch.x;shiftY+=now.y-pinch.y}
        pinch=now;return;
      }
      if(drag){
        const dx=p.x-drag.x,dy=p.y-drag.y;
        if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;
        if(drag.node){
          // Deproiezione del movimento sul piano della camera: gli archi
          // seguono il nodo perché ne condividono l'oggetto nella scena.
          const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),sx=Math.sin(rotX);
          const right=dx/drag.scale,up=dy/drag.scale;
          drag.node.x=drag.position.x+right*cy-up*sy*sx;
          drag.node.y=drag.position.y+up*cx;
          drag.node.z=drag.position.z-right*sy-up*cy*sx;
          canvas.style.cursor='grabbing';
        }else{
          rotY=drag.rotY+dx*.006;
          rotX=Math.max(-1.15,Math.min(1.15,drag.rotX+dy*.005));
        }
        return;
      }
    }
    pointerPosition=p;updateHoverAt(p);
  });
  canvas.addEventListener('pointerup',ev=>{
    const was=drag,multi=ignoreTap||pointers.size>1;
    pointers.delete(ev.pointerId);
    if(pointers.size===1){
      const p=[...pointers.values()][0];drag={...p,rotY,rotX,moved:true};pinch=null;ignoreTap=true;return;
    }
    if(pointers.size>1){pinch=pinchPose();return}
    drag=null;pinch=null;ignoreTap=false;canvas.style.cursor='grab';
    if(was?.node&&was.moved&&!multi)onDragEnd(was.node);
    if(!was||was.moved||multi)return;
    const p=coordinates(ev);
    const near=projected.reduce((best,q)=>{const d=Math.hypot(q.x-p.x,q.y-p.y);return d<19&&(!best||d<best.d)?{d,n:q.n}:best},null);
    if(near){
      selected=near.n.id;
      const now=Date.now();
      if(lastTap&&lastTap.id===near.n.id&&now-lastTap.when<370&&
        Math.hypot(lastTap.x-p.x,lastTap.y-p.y)<25){
        if(pendingTap!==null)clearTimeout(pendingTap);
        pendingTap=null;lastTap=null;onNodeDblClick(near.n);
      }else{
        if(pendingTap!==null){clearTimeout(pendingTap);pendingTap=null;lastTap=null}
        lastTap={id:near.n.id,when:now,x:p.x,y:p.y};
        pendingTap=setTimeout(()=>{
          pendingTap=null;const tap=lastTap;lastTap=null;
          if(tap)onNode(points.find(n=>n.id===tap.id)||near.n);
        },385);
      }
    }else {const edge=pickLink(p);if(edge)onLink(edge);else onBackground()}
  });
  canvas.addEventListener('pointercancel',ev=>{pointers.delete(ev.pointerId);drag=null;pinch=null;ignoreTap=true;canvas.style.cursor='grab'});
  canvas.addEventListener('wheel',ev=>{ev.preventDefault();const p=coordinates(ev);zoomAt(zoom*Math.exp(-ev.deltaY*.001),p.x,p.y)},{passive:false});
  canvas.addEventListener('dblclick',ev=>{ev.preventDefault();if(!options.disableDoubleClickZoom){const p=coordinates(ev);zoomAt(zoom*1.6,p.x,p.y)}});
  let api={isFallback:true,destroy(){active=false;if(pendingTap!==null)clearTimeout(pendingTap);hoverLabel.remove();canvas.remove()},graphData(v){if(v===undefined)return current;if(pendingTap!==null)clearTimeout(pendingTap);pendingTap=null;lastTap=null;current=v;layout();return api},
    zoomToFit(){
      zoom=1;shiftX=0;shiftY=0;selected=null;
      const focus=points.find(n=>n._focus);
      if(!focus){
        if(points.some(n=>n._overview)){
          // Calibrare sul corpo della nebulosa, non sui pochi punti lontani:
          // gli outlier possono uscire dal quadro senza rimpicciolire il nucleo.
          const core=points.filter(n=>!n._haloStar);
          const p=(core.length?core:points).map(project);
          const dx=Math.max(35,...p.map(q=>Math.abs(q.x-W/2)));
          const dy=Math.max(35,...p.map(q=>Math.abs(q.y-H/2)));
          zoom=Math.max(.18,Math.min(1.2,(W-110)/(dx*2),(H-170)/(dy*2)));
        }else zoom=.95;
        return api;
      }
      const p=points.map(project);
      const dx=Math.max(35,...p.map(q=>Math.abs(q.x-W/2)));
      const dy=Math.max(35,...p.map(q=>Math.abs(q.y-H/2)));
      const farthest=Math.max(1,...points.map(n=>n._depth||1));
      zoom=Math.max(.35,Math.min(2.35/Math.sqrt(farthest), (W-75)/(dx*2),(H-165)/(dy*2)));
      return api;
    },
    zoom(value){if(value===undefined)return zoom;const node=selected?points.find(n=>n.id===selected):null;const p=node?project(node):{x:W/2,y:H/2};zoomAt(value,p.x,p.y);return api},
    cameraPosition(_pos,lookAt){if(lookAt&&Number.isFinite(lookAt.x)){const p=project(lookAt);shiftX+=W/2-p.x;shiftY+=H/2-p.y;selected=lookAt.id||null;zoomAt(Math.max(zoom,1.7),W/2,H/2)}return api},
    d3Force(){return {strength(){return this}}},
    width(v){if(v===undefined)return W;W=v;resize();return api},height(v){if(v===undefined)return H;H=v;resize();return api},
    disableDoubleClickZoom(value){options.disableDoubleClickZoom=!!value;return api},
    cosmicBackground(value){options.cosmicBackground=!!value;return api},
    onNodeClick(fn){onNode=fn;return api},onNodeDblClick(fn){onNodeDblClick=fn;return api},onNodeDragEnd(fn){onDragEnd=fn;return api},onLinkClick(fn){onLink=fn;return api},onNodeHover(fn){onHover=fn;return api},onLinkHover(fn){onLinkHover=fn;return api},onBackgroundClick(fn){onBackground=fn;return api},
    nodeColor(fn){if(fn===undefined)return nodeColors;nodeColors=fn;return api},linkColor(fn){if(fn===undefined)return linkColors;linkColors=fn;return api},nodeVal(fn){nodeSize=fn;return api},linkOpacity(n){options.linkOpacity=n;return api}
  };
  for(const prop of ['backgroundColor','showNavInfo','nodeRelSize','nodeResolution','nodeLabel','linkWidth','linkDirectionalArrowLength','warmupTicks','cooldownTicks'])api[prop]=()=>api;
  resize();requestAnimationFrame(frame);return api;
}
window.AtlantisCompatGraph=makeGraph;
})();
