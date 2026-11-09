/* Musurgia Atlantis: AUDIT CHECKPOINT 08 copy for hover/selection/double click. Public compat graph is UNCHANGED.
   Canvas 3D compatibility view, independent of third-party CDNs.
   Used when the WebGL ForceGraph3D engine cannot load. Creative Commons-free original code. */
(function(){'use strict';
function makeGraph(host){
  const canvas=document.createElement('canvas');canvas.setAttribute('aria-label','Vista tridimensionale di compatibilità della costellazione');canvas.style.cssText='width:100%;height:100%;display:block;touch-action:none;cursor:grab';host.appendChild(canvas);
  const ctx=canvas.getContext('2d',{alpha:false});
  let W=innerWidth,H=innerHeight,pxRatio=1,rotY=-0.42,rotX=0.17,zoom=1,shiftX=0,shiftY=0,selected=null,hovered=null,drag=null,active=true,last=0;
  let current={nodes:[],links:[]},points=[],linkObjects=[],projected=[],nodeColors=n=>'#8bd9ce',linkColors=e=>'#719ca8',onNode=()=>{},onDoubleNode=()=>{},onLink=()=>{},onHover=()=>{},onBackground=()=>{},nodeSize=n=>3;
  const options={linkOpacity:.3};
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
  function alphaAt(p){return p.n._focus?1:.19+.81*frontness(p);}
  function drawCaption(p,r,occupied){
    const n=p.n,root=!!n._focus;
    if(!root){
      if(!n._label && n.id!==hovered && n.id!==selected)return;
      if(frontness(p)<.68 && n.id!==hovered && n.id!==selected)return; // Hover and selection always reveal label, even in the far hemisphere.
    }
    const label=n.name.length>42?n.name.slice(0,40)+'…':n.name;
    const size=root?13:n._depth===1?11.5:11;
    ctx.font=(root||n._depth===1?'600 ':'500 ')+size+'px system-ui';
    const labelWidth=Math.ceil(ctx.measureText(label).width+13);
    const width=Math.min(W-12,labelWidth),height=root?24:21;
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
      if(y<100||y+height>H-72)continue;
      const candidate={x,y,w:width,h:height};
      if(n.id!==hovered && n.id!==selected && occupied.some(b=>x<b.x+b.w+5&&x+width>b.x-5&&y<b.y+b.h+4&&y+height>b.y-4))continue;
      rect=candidate;break;
    }
    if(!rect && (n.id===hovered||n.id===selected)){
      // Fall back near the pointer: never suppress a requested hover/selected label.
      rect={x:Math.max(6,Math.min(W-width-6,p.x-width/2)),y:Math.max(8,Math.min(H-height-8,p.y-r-height-10)),w:width,h:height};
    }
    if(!rect)return;
    occupied.push(rect);
    ctx.globalAlpha=1;
    ctx.fillStyle=root?'rgba(24,43,49,.94)':'rgba(4,19,30,.88)';
    ctx.fillRect(rect.x,rect.y,rect.w,rect.h);
    ctx.fillStyle=root?'#ffe1a1':n._depth===1?'#ecf8f3':'#d7e6e3';
    ctx.textAlign='left';ctx.textBaseline='middle';
    ctx.fillText(label,rect.x+6,rect.y+rect.h/2,Math.max(10,rect.w-12));
    ctx.textBaseline='alphabetic';
  }
  function frame(time){
    if(!active)return;
    requestAnimationFrame(frame);
    if(time-last<30)return;
    last=time;
    ctx.fillStyle='#061522';ctx.fillRect(0,0,W,H);
    const grd=ctx.createRadialGradient(W*.51,H*.53,20,W*.5,H*.5,Math.max(W,H)*.68);
    grd.addColorStop(0,'#123648');grd.addColorStop(.55,'#071724');grd.addColorStop(1,'#020b14');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    for(let i=0;i<125;i++){
      const x=rnd('stars',i)*W,y=rnd('far',i)*H,r=.3+rnd('radius',i)*1.1;
      ctx.fillStyle='rgba(197,220,236,'+(.10+rnd('alpha',i)*.3)+')';ctx.fillRect(x,y,r,r);
    }
    projected=points.map(project);
    const map=new Map(projected.map(p=>[p.n.id,p]));
    ctx.lineWidth=.8;
    for(const o of linkObjects){
      const a=map.get(o.a.id),b=map.get(o.b.id);if(!a||!b)continue;
      const near=Math.max(frontness(a),frontness(b));
      const direct=o.a._depth===0||o.b._depth===0;
      ctx.strokeStyle=colorRgba(linkColors(o.e),(direct?.48:options.linkOpacity*.65)*(.30+.70*near));
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
    }
    projected.sort((a,b)=>b.z-a.z);
    for(const p of projected){
      const n=p.n,chapter=n.category==='capitolo',root=!!n._focus;
      const active=root||n.id===selected;
      const base=n.id===selected?"#fff0b1":nodeColors(n);
      const r=(active?9.5:chapter?6.8:Math.min(4.5,2+Math.sqrt(Math.max(1,nodeSize(n)))*.3))*Math.max(.52,Math.min(2.4,p.scale*Math.sqrt(zoom)));
      p.r=r;
      if(p.x<-40||p.y<-30||p.x>W+40||p.y>H+40)continue;
      ctx.globalAlpha=alphaAt(p);ctx.fillStyle=base;
      ctx.shadowBlur=active?23:frontness(p)>.68?chapter?15:8:2;
      ctx.shadowColor=colorRgba(base,.55);
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,2*Math.PI);ctx.fill();
      ctx.shadowBlur=0;ctx.globalAlpha=1;
    }
    // Draw labels in one foreground-only pass; keep the center first and avoid
    // collisions. Rotating naturally reveals captions hidden behind the nebula.
    const occupied=[];
    const captions=projected.filter(p=>p.n._focus||p.n._label||p.n.id===hovered||p.n.id===selected)
      .sort((a,b)=>(b.n._focus?1:0)-(a.n._focus?1:0)
        ||(a.n._depth===1?0:1)-(b.n._depth===1?0:1)
        ||a.z-b.z);
    for(const p of captions)drawCaption(p,p.r||4,occupied);
    if(!drag&&pointers.size===0){rotY+=.00037;rotX+=.000085;if(rotX>Math.PI)rotX-=2*Math.PI;}
  }
  function coordinates(evt){const b=canvas.getBoundingClientRect();return {x:evt.clientX-b.left,y:evt.clientY-b.top};}
  const pointers=new Map();let pinch=null,ignoreTap=false,lastTap=null;
  const isNear=(a,b,threshold=26)=>Math.hypot(a.x-b.x,a.y-b.y)<threshold;
  const hitTest=(p,max=19)=>projected.reduce((best,q)=>{
    const dist=Math.hypot(q.x-p.x,q.y-p.y);
    return dist<max&&(!best||dist<best.d)?{d:dist,n:q.n}:best;
  },null);
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
  canvas.addEventListener('pointerdown',ev=>{
    ev.preventDefault();
    const p=coordinates(ev);pointers.set(ev.pointerId,p);
    try{canvas.setPointerCapture(ev.pointerId)}catch(_){}
    if(pointers.size===1){drag={...p,rotY,rotX,moved:false};ignoreTap=false}
    else{drag=null;ignoreTap=true;lastTap=null;pinch=pinchPose()}
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
        const dx=p.x-drag.x,dy=p.y-drag.y;if(Math.abs(dx)+Math.abs(dy)>4){drag.moved=true;lastTap=null;}
        rotY=drag.rotY+dx*.006;rotX=Math.max(-1.15,Math.min(1.15,drag.rotX+dy*.005));return;
      }
    }
    if(ev.pointerType==="touch")return; // Hover is a mouse/pen concept; touch uses selection.
    const near=hitTest(p,17);
    const id=near?.n.id||null;
    if(hovered!==id){hovered=id;onHover(near?.n||null,{x:p.x,y:p.y});canvas.style.cursor=id?'pointer':'grab'}
  });
  canvas.addEventListener('pointerup',ev=>{
    const was=drag,multi=ignoreTap||pointers.size>1;
    pointers.delete(ev.pointerId);
    if(pointers.size===1){
      const p=[...pointers.values()][0];drag={...p,rotY,rotX,moved:true};pinch=null;ignoreTap=true;return;
    }
    if(pointers.size>1){pinch=pinchPose();return}
    drag=null;pinch=null;ignoreTap=false;canvas.style.cursor='grab';
    if(!was||was.moved||multi){lastTap=null;return}
    const p=coordinates(ev),near=hitTest(p,ev.pointerType==="touch"?28:20);
    if(!near){lastTap=null;onBackground();return}
    const now=Date.now(),same=lastTap&&lastTap.id===near.n.id&&lastTap.type===ev.pointerType&&
      now-lastTap.time<=360&&isNear(p,lastTap.pos,ev.pointerType==="touch"?34:24);
    const alreadySelected=selected===near.n.id;
    selected=near.n.id;
    if(same||(ev.pointerType==="touch"&&alreadySelected)){
      lastTap=null;
      onDoubleNode(near.n);
    }else{
      lastTap={id:near.n.id,time:now,pos:p,type:ev.pointerType};
      onNode(near.n);
    }
  });
  canvas.addEventListener('pointercancel',ev=>{pointers.delete(ev.pointerId);drag=null;pinch=null;ignoreTap=true;lastTap=null;canvas.style.cursor='grab'});
  canvas.addEventListener('wheel',ev=>{ev.preventDefault();const p=coordinates(ev);zoomAt(zoom*Math.exp(-ev.deltaY*.001),p.x,p.y)},{passive:false});
  canvas.addEventListener('dblclick',ev=>{ev.preventDefault()}); // Double click changes the root; NEVER apply zoom here.
  let api={isFallback:true,destroy(){active=false;canvas.remove()},graphData(v){if(v===undefined)return current;current=v;layout();return api},
    zoomToFit(){
      zoom=1;shiftX=0;shiftY=0;selected=null;
      const focus=points.find(n=>n._focus);
      if(!focus){zoom=.95;return api}
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
    onNodeClick(fn){onNode=fn;return api},onNodeDoubleClick(fn){onDoubleNode=fn;return api},onLinkClick(fn){onLink=fn;return api},onNodeHover(fn){onHover=fn;return api},onBackgroundClick(fn){onBackground=fn;return api},
    nodeColor(fn){if(fn===undefined)return nodeColors;nodeColors=fn;return api},linkColor(fn){if(fn===undefined)return linkColors;linkColors=fn;return api},nodeVal(fn){nodeSize=fn;return api},linkOpacity(n){options.linkOpacity=n;return api}
  };
  for(const prop of ['backgroundColor','showNavInfo','nodeRelSize','nodeResolution','nodeLabel','linkWidth','linkDirectionalArrowLength','warmupTicks','cooldownTicks'])api[prop]=()=>api;
  resize();requestAnimationFrame(frame);return api;
}
window.AtlantisAuditCompatGraph=makeGraph;
})();
