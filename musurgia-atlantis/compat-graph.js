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
    const chapters=current.nodes.filter(n=>n.category==='capitolo').sort((a,b)=>a.name.localeCompare(b.name,'it')); const centers=new Map();
    chapters.forEach((n,i)=>{const a=i*2*Math.PI/Math.max(chapters.length,1)-Math.PI/2;
      centers.set(n.id,{x:Math.cos(a)*300,y:Math.sin(a)*220,z:Math.sin(a*2.1)*115});});
    const memberships=new Map();for(const e of current.links){const a=typeof e.source==='object'?e.source.id:e.source,b=typeof e.target==='object'?e.target.id:e.target;
      if(a.startsWith('cap:')&&!b.startsWith('cap:')){if(!memberships.has(b))memberships.set(b,[]);memberships.get(b).push(a)}
      if(b.startsWith('cap:')&&!a.startsWith('cap:')){if(!memberships.has(a))memberships.set(a,[]);memberships.get(a).push(b)}}
    const rest=current.nodes.filter(n=>n.category!=='capitolo');
    rest.forEach((n,i)=>{let seeds=(memberships.get(n.id)||[]).filter(x=>centers.has(x));let x=0,y=0,z=0;
      if(seeds.length){for(const s of seeds){const p=centers.get(s);x+=p.x;y+=p.y;z+=p.z}x/=seeds.length;y/=seeds.length;z/=seeds.length}
      else{const phi=rnd(n.id,4)*6.283; x=Math.cos(phi)*150;y=Math.sin(phi)*150;z=(rnd(n.id,5)-.5)*130;}
      const spread=seeds.length>1?80:128;
      n.x=x+(rnd(n.id,0)-.5)*spread*2;n.y=y+(rnd(n.id,1)-.5)*spread*1.5;n.z=z+(rnd(n.id,2)-.5)*spread*2;});
    chapters.forEach(n=>Object.assign(n,centers.get(n.id)));
    points=current.nodes;const byId=new Map(points.map(n=>[n.id,n]));
    linkObjects=current.links.map(e=>({e,a:byId.get(typeof e.source==='object'?e.source.id:e.source),b:byId.get(typeof e.target==='object'?e.target.id:e.target)})).filter(x=>x.a&&x.b);
    if(selected&&!byId.has(selected))selected=null;
  }
  function resize(){pxRatio=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.round(W*pxRatio);canvas.height=Math.round(H*pxRatio);canvas.style.width=W+'px';canvas.style.height=H+'px';ctx.setTransform(pxRatio,0,0,pxRatio,0,0);}
  function colorRgba(hex,alpha){if(!/^#[0-9a-f]{6}$/i.test(hex))return 'rgba(160,197,197,'+alpha+')';let h=hex.slice(1);return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${alpha})`}
  function project(n){const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),sx=Math.sin(rotX);
    const x=n.x*cy-n.z*sy, z=n.x*sy+n.z*cy, y=n.y*cx-z*sx, depth=n.y*sx+z*cx;
    const k=820/(820+depth), s=Math.min(W,H)/890*zoom*k;
    return {x:W/2+shiftX+x*s,y:H/2+shiftY+y*s,z:depth,s,scale:k,n};
  }
  function frame(time){if(!active)return;requestAnimationFrame(frame);if(time-last<30)return;last=time;
    ctx.fillStyle='#061522';ctx.fillRect(0,0,W,H);
    const grd=ctx.createRadialGradient(W*.51,H*.53,20,W*.5,H*.5,Math.max(W,H)*.68);grd.addColorStop(0,'#123648');grd.addColorStop(.55,'#071724');grd.addColorStop(1,'#020b14');ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    for(let i=0;i<125;i++){let x=rnd('stars',i)*W,y=rnd('far',i)*H,r=.3+rnd('radius',i)*1.1;ctx.fillStyle=`rgba(197,220,236,${.10+rnd('alpha',i)*.3})`;ctx.fillRect(x,y,r,r)}
    projected=points.map(project);const map=new Map(projected.map(p=>[p.n.id,p]));
    ctx.lineWidth=.7;for(const o of linkObjects){const a=map.get(o.a.id),b=map.get(o.b.id);if(!a||!b)continue;
      const col=linkColors(o.e);ctx.strokeStyle=colorRgba(col,options.linkOpacity*.8);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
    projected.sort((a,b)=>b.z-a.z);
    for(const p of projected){const n=p.n;const chapter=n.category==='capitolo';const base=nodeColors(n),r=(chapter?6.8:Math.min(4.0,2+Math.sqrt(Math.max(1,nodeSize(n)))*.3))*Math.max(.6,Math.min(2.2,p.s*1.35));
      if(p.x<-40||p.y<-30||p.x>W+40||p.y>H+40)continue;
      ctx.fillStyle=base;ctx.shadowBlur=chapter?16:7;ctx.shadowColor=colorRgba(base,.55);ctx.beginPath();ctx.arc(p.x,p.y,r,0,2*Math.PI);ctx.fill();ctx.shadowBlur=0;
      if(chapter||n.id===hovered||n.id===selected){ctx.font=chapter?'600 12px system-ui':'11px system-ui';ctx.fillStyle=chapter?'#f5dfba':'#e8f7f1';ctx.textAlign='center';ctx.lineWidth=3.5;ctx.strokeStyle='#061827';const label=n.name.length>31?n.name.slice(0,29)+'…':n.name;ctx.strokeText(label,p.x,p.y-r-7);ctx.fillText(label,p.x,p.y-r-7);}
    }
    if(!drag)rotY+=.00037;
  }
  function coordinates(evt){const b=canvas.getBoundingClientRect();return {x:evt.clientX-b.left,y:evt.clientY-b.top};}
  canvas.addEventListener('pointerdown',ev=>{drag={...coordinates(ev),x0:ev.clientX,y0:ev.clientY,rotY,rotX,moved:false};canvas.setPointerCapture(ev.pointerId);canvas.style.cursor='grabbing'});
  canvas.addEventListener('pointermove',ev=>{
    const p=coordinates(ev);if(drag){const dx=p.x-drag.x,dy=p.y-drag.y;if(Math.abs(dx)+Math.abs(dy)>4)drag.moved=true;rotY=drag.rotY+dx*.006;rotX=Math.max(-1.15,Math.min(1.15,drag.rotX+dy*.005));return;}
    const near=projected.reduce((best,q)=>{const d=Math.hypot(q.x-p.x,q.y-p.y);return d<15&&(!best||d<best.d)?{d,id:q.n.id}:best},null);const id=near?.id||null;if(hovered!==id){hovered=id;onHover(id?points.find(n=>n.id===id):null);canvas.style.cursor=id?'pointer':'grab';}
  });
  canvas.addEventListener('pointerup',ev=>{const was=drag;drag=null;canvas.style.cursor='grab';if(!was||was.moved)return;
    const p=coordinates(ev);const near=projected.reduce((best,q)=>{const d=Math.hypot(q.x-p.x,q.y-p.y);return d<19&&(!best||d<best.d)?{d,n:q.n}:best},null);if(near){selected=near.n.id;onNode(near.n)}else onBackground();});
  canvas.addEventListener('pointercancel',()=>{drag=null});
  canvas.addEventListener('wheel',ev=>{ev.preventDefault();zoom=Math.max(.35,Math.min(5,zoom*Math.exp(-ev.deltaY*.001)) )},{passive:false});
  let api={isFallback:true,destroy(){active=false;canvas.remove()},graphData(v){if(v===undefined)return current;current=v;layout();return api},
    zoomToFit(){zoom=.95;shiftX=0;shiftY=0;selected=null;return api},
    cameraPosition(_pos,lookAt){if(lookAt&&Number.isFinite(lookAt.x)){const p=project(lookAt);shiftX+=W/2-p.x;shiftY+=H/2-p.y;zoom=Math.max(zoom,1.35)}return api},
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
