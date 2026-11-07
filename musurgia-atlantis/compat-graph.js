/* Musurgia Atlantis: canvas 3D compatibility view, independent of third-party CDNs.
   Used when the WebGL ForceGraph3D engine cannot load. Creative Commons-free original code. */
(function(){'use strict';
function makeGraph(host){
  const canvas=document.createElement('canvas');canvas.setAttribute('aria-label','Vista tridimensionale di compatibilità della costellazione');canvas.style.cssText='width:100%;height:100%;display:block;touch-action:none;cursor:grab';host.appendChild(canvas);
  const ctx=canvas.getContext('2d',{alpha:false});
  let W=innerWidth,H=innerHeight,pxRatio=1,rotY=-0.42,rotX=0.17,zoom=1,shiftX=0,shiftY=0,selected=null,hovered=null,drag=null,active=true,last=0;
  let current={nodes:[],links:[]},points=[],linkObjects=[],projected=[],nodeColors=n=>'#8bd9ce',linkColors=e=>'#719ca8',onNode=()=>{},onLink=()=>{},onHover=()=>{},onBackground=()=>{},nodeSize=n=>3;
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
  function frame(time){if(!active)return;requestAnimationFrame(frame);if(time-last<30)return;last=time;
    ctx.fillStyle='#061522';ctx.fillRect(0,0,W,H);
    const grd=ctx.createRadialGradient(W*.51,H*.53,20,W*.5,H*.5,Math.max(W,H)*.68);grd.addColorStop(0,'#123648');grd.addColorStop(.55,'#071724');grd.addColorStop(1,'#020b14');ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    for(let i=0;i<125;i++){let x=rnd('stars',i)*W,y=rnd('far',i)*H,r=.3+rnd('radius',i)*1.1;ctx.fillStyle=`rgba(197,220,236,${.10+rnd('alpha',i)*.3})`;ctx.fillRect(x,y,r,r)}
    projected=points.map(project);const map=new Map(projected.map(p=>[p.n.id,p]));
    ctx.lineWidth=.7;for(const o of linkObjects){const a=map.get(o.a.id),b=map.get(o.b.id);if(!a||!b)continue;
      const col=linkColors(o.e),direct=o.a._depth===0||o.b._depth===0;const atmospheric=Math.max(.38,Math.min(1.0,1-(a.z+b.z)/2200));ctx.strokeStyle=colorRgba(col,(direct?.69:options.linkOpacity*.92)*atmospheric);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    projected.sort((a,b)=>b.z-a.z);
    for(const p of projected){const n=p.n;const chapter=n.category==='capitolo',root=!!n._focus;const base=nodeColors(n),r=(root?9.5:chapter?6.8:Math.min(4.5,2+Math.sqrt(Math.max(1,nodeSize(n)))*.3))*Math.max(.52,Math.min(2.4,p.scale*Math.sqrt(zoom)));
      if(p.x<-40||p.y<-30||p.x>W+40||p.y>H+40)continue;
      ctx.globalAlpha=root?1:Math.max(.55,Math.min(1,1-p.z/1450));ctx.fillStyle=base;ctx.shadowBlur=root?23:chapter?16:7;ctx.shadowColor=colorRgba(base,.55);ctx.beginPath();ctx.arc(p.x,p.y,r,0,2*Math.PI);ctx.fill();ctx.shadowBlur=0;ctx.globalAlpha=1;
      if(n._label||n.id===hovered||n.id===selected){
        const important=root||n._depth===1;
        const size=important?12:11;
        ctx.font=(important?'600 ':'500 ')+size+'px system-ui';
        ctx.textAlign='center';ctx.lineWidth=4;ctx.strokeStyle='#061521';
        ctx.fillStyle=root?'#ffe2a3':chapter?'#f5dfba':'#e8f7f1';
        const label=n.name.length>42?n.name.slice(0,40)+'…':n.name;
        const y=p.y-r-8;
        ctx.strokeText(label,p.x,y);ctx.fillText(label,p.x,y);
      }
    }
    if(!drag&&pointers.size===0){rotY+=.00037;rotX+=.000085;if(rotX>Math.PI)rotX-=2*Math.PI;}
  }
  function coordinates(evt){const b=canvas.getBoundingClientRect();return {x:evt.clientX-b.left,y:evt.clientY-b.top};}
  const pointers=new Map();let pinch=null,ignoreTap=false;
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
        const dx=p.x-drag.x,dy=p.y-drag.y;if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;
        rotY=drag.rotY+dx*.006;rotX=Math.max(-1.15,Math.min(1.15,drag.rotX+dy*.005));return;
      }
    }
    const near=projected.reduce((best,q)=>{const d=Math.hypot(q.x-p.x,q.y-p.y);return d<15&&(!best||d<best.d)?{d,id:q.n.id}:best},null);
    const id=near?.id||null;
    if(hovered!==id){hovered=id;onHover(id?points.find(n=>n.id===id):null);canvas.style.cursor=id?'pointer':'grab'}
  });
  canvas.addEventListener('pointerup',ev=>{
    const was=drag,multi=ignoreTap||pointers.size>1;
    pointers.delete(ev.pointerId);
    if(pointers.size===1){
      const p=[...pointers.values()][0];drag={...p,rotY,rotX,moved:true};pinch=null;ignoreTap=true;return;
    }
    if(pointers.size>1){pinch=pinchPose();return}
    drag=null;pinch=null;ignoreTap=false;canvas.style.cursor='grab';
    if(!was||was.moved||multi)return;
    const p=coordinates(ev);
    const near=projected.reduce((best,q)=>{const d=Math.hypot(q.x-p.x,q.y-p.y);return d<19&&(!best||d<best.d)?{d,n:q.n}:best},null);
    if(near){selected=near.n.id;onNode(near.n)}else onBackground();
  });
  canvas.addEventListener('pointercancel',ev=>{pointers.delete(ev.pointerId);drag=null;pinch=null;ignoreTap=true;canvas.style.cursor='grab'});
  canvas.addEventListener('wheel',ev=>{ev.preventDefault();const p=coordinates(ev);zoomAt(zoom*Math.exp(-ev.deltaY*.001),p.x,p.y)},{passive:false});
  canvas.addEventListener('dblclick',ev=>{ev.preventDefault();const p=coordinates(ev);zoomAt(zoom*1.6,p.x,p.y)});
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
    onNodeClick(fn){onNode=fn;return api},onLinkClick(fn){onLink=fn;return api},onNodeHover(fn){onHover=fn;return api},onBackgroundClick(fn){onBackground=fn;return api},
    nodeColor(fn){if(fn===undefined)return nodeColors;nodeColors=fn;return api},linkColor(fn){if(fn===undefined)return linkColors;linkColors=fn;return api},nodeVal(fn){nodeSize=fn;return api},linkOpacity(n){options.linkOpacity=n;return api}
  };
  for(const prop of ['backgroundColor','showNavInfo','nodeRelSize','nodeResolution','nodeLabel','linkWidth','linkDirectionalArrowLength','warmupTicks','cooldownTicks'])api[prop]=()=>api;
  resize();requestAnimationFrame(frame);return api;
}
window.AtlantisCompatGraph=makeGraph;
})();
