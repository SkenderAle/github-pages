"use strict";
(() => {
const canvas=document.getElementById("sky"),ctx=canvas.getContext("2d",{alpha:false});
const panel=document.getElementById("panel"),tab=document.getElementById("panelTab"),status=document.getElementById("status");
const search=document.getElementById("search"),filter=document.getElementById("filter"),reset=document.getElementById("reset"),labels=document.getElementById("labels");
const COLORS={compositore:"#f3bd74",periodo:"#7ec3d4",ambito:"#c8a2e5",corrente:"#e49ca4",geografia:"#8bc5a1"};
let nodes=[],edges=[],byId=new Map(),videos=[],videoLinks=[],camera={x:0,y:0,z:0},focus=null,zoom=1,rotY=.15,rotX=-.12,w=0,h=0,dpr=1;
let selected=null,drag=null,screen=[],showAllLabels=false,frame=0,hover=null,searchText="",typeFilter="tutti";
const rnd=(()=>{let x=94327;return ()=>((x=(Math.imul(x,1664525)+1013904223)>>>0)/4294967296)})();
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
function resize(){w=canvas.clientWidth;h=canvas.clientHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
function sxworld(node){let x=node.x-camera.x,y=node.y-camera.y,z=node.z-camera.z;const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),si=Math.sin(rotX);const rx=x*cy-z*sy,rz=x*sy+z*cy,ry=y*cx-rz*si,depth=y*si+rz*cx;const k=9/(16+depth),scale=Math.min(w,h)*.53*zoom*k;return {x:w/2+rx*scale,y:h/2+ry*scale,scale,depth};}
function unproject(px,py,depth){let scale=Math.min(w,h)*.53*zoom*9/(16+depth);const rx=(px-w/2)/scale,ry=(py-h/2)/scale;const cx=Math.cos(rotX),si=Math.sin(rotX),cy=Math.cos(rotY),sy=Math.sin(rotY);const yy=ry*cx+depth*si,rz=-ry*si+depth*cx;return {x:camera.x+rx*cy+rz*sy,y:camera.y+yy,z:camera.z-rx*sy+rz*cy};}
function prepare(db){if(!Array.isArray(db.nodes)||!Array.isArray(db.edges))throw Error("Schema non valido");
 const all=db.nodes.filter(n=>n.visible!==0&&n.visible!=="0");
 const anchors=new Map();let i=0;
 for(const n of all){let a=i++*2.399963,rad=8*Math.sqrt((i+.5)/all.length),offset=n.type==="periodo"?6:n.type==="ambito"?5:rad;
  const item={...n,x:Math.cos(a)*offset+(rnd()-.5)*2,y:Math.sin(a)*offset+(rnd()-.5)*2,z:(rnd()-.5)*9,vx:0,vy:0,vz:0,radius:n.type==="compositore"?5:n.type==="geografia"?8:11};
  nodes.push(item);byId.set(item.id,item);if(item.type==="periodo")anchors.set(item.id,item);}
 for(const n of nodes){if(n.type!=="compositore")continue;const period=db.edges.find(e=>e.source===n.id&&byId.get(e.target)?.type==="periodo");if(period){const a=anchors.get(period.target);if(a){n.x=a.x+(rnd()-.5)*5;n.y=a.y+(rnd()-.5)*5;n.z=a.z+(rnd()-.5)*5;}}}
 edges=db.edges.filter(e=>byId.has(e.source)&&byId.has(e.target)).map(e=>({...e,a:byId.get(e.source),b:byId.get(e.target)}));
 videos=db.videos||[];videoLinks=db.video_nodes||[];status.textContent=nodes.length+" nodi · "+edges.length+" relazioni · scegli una bolla";resize();
}
function physics(){if(!nodes.length)return;for(const n of nodes){n.vx+=-n.x*.00021;n.vy+=-n.y*.00021;n.vz+=-n.z*.00021;}
 for(const e of edges){const a=e.a,b=e.b;let dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,d=Math.hypot(dx,dy,dz)||.001,preferred=(a.type==="compositore"&&b.type==="compositore")?2.8:3.6;let f=clamp((d-preferred)*.0025*(e.weight||1),-.035,.035)/d;dx*=f;dy*=f;dz*=f;a.vx+=dx;a.vy+=dy;a.vz+=dz;b.vx-=dx;b.vy-=dy;b.vz-=dz;}
 // Repulsione locale: l'algoritmo evita che centinaia di bolle si sovrappongano.
 for(let i=0;i<nodes.length;i++){let a=nodes[i];for(let j=i+1;j<nodes.length;j++){let b=nodes[j],dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,d2=dx*dx+dy*dy+dz*dz;if(d2>5.5||d2<.00001)continue;let f=.008/(d2+.2);a.vx-=dx*f;a.vy-=dy*f;a.vz-=dz*f;b.vx+=dx*f;b.vy+=dy*f;b.vz+=dz*f;}}
 for(const n of nodes){if(drag&&drag.node===n){n.vx=n.vy=n.vz=0;continue;}n.vx=clamp(n.vx*.89,-.12,.12);n.vy=clamp(n.vy*.89,-.12,.12);n.vz=clamp(n.vz*.89,-.12,.12);n.x+=n.vx;n.y+=n.vy;n.z+=n.vz;}}
function visibleNode(n){return typeFilter==="tutti"||n.type===typeFilter||n===selected}
function draw(){frame++;physics();if(focus){camera.x+=(focus.x-camera.x)*.085;camera.y+=(focus.y-camera.y)*.085;camera.z+=(focus.z-camera.z)*.085;}
 ctx.fillStyle="#0c121e";ctx.fillRect(0,0,w,h);
 const ambient=ctx.createRadialGradient(w*.5,h*.5,10,w*.5,h*.5,Math.max(w,h)*.7);ambient.addColorStop(0,"#22334a");ambient.addColorStop(1,"#080c15");ctx.fillStyle=ambient;ctx.fillRect(0,0,w,h);
 screen=nodes.map(n=>{let p=sxworld(n);p.node=n;p.r=clamp(n.radius*p.scale*.38,2,23)*(n===selected?1.5:1);if(drag?.node===n){p.x=drag.x;p.y=drag.y;}return p;});
 const map=new Map(screen.map(p=>[p.node.id,p]));ctx.lineWidth=.8;
 for(const e of edges){let a=map.get(e.source),b=map.get(e.target);if(!a||!b||a.depth< -14||b.depth< -14)continue;if(!visibleNode(a.node)||!visibleNode(b.node))continue;
  const highlight=selected&&(e.source===selected.id||e.target===selected.id),dim=selected&&!highlight;ctx.globalAlpha=dim?.08:highlight?.68:.18;ctx.strokeStyle=highlight?"#edd4a0":"#8bb0cd";ctx.lineWidth=highlight?1.25:.7;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
 ctx.globalAlpha=1;
 let drawable=screen.filter(p=>p.depth>-14&&visibleNode(p.node)).sort((a,b)=>b.depth-a.depth);
 for(const p of drawable){let n=p.node,highlight=n===selected||n===hover||n.label.toLowerCase().includes(searchText)&&searchText.length>1;
  const connected=selected&&edges.some(e=>(e.source===selected.id&&e.target===n.id)||(e.target===selected.id&&e.source===n.id));
  ctx.globalAlpha=selected&&!highlight&&!connected?.43:1;const rad=highlight?p.r*1.18:p.r;
  if(highlight){ctx.beginPath();ctx.arc(p.x,p.y,rad+8,0,Math.PI*2);ctx.fillStyle="#f3cb8e24";ctx.fill();}
  ctx.beginPath();ctx.arc(p.x,p.y,rad,0,Math.PI*2);ctx.fillStyle=COLORS[n.type]||"#aaa";ctx.fill();ctx.strokeStyle=highlight?"#fff0ce":"#e2e5ee70";ctx.lineWidth=highlight?1.8:.7;ctx.stroke();
  let isLabel=showAllLabels||highlight||connected&&Math.abs(p.x-w/2)<w*.36&&Math.abs(p.y-h/2)<h*.38&&p.scale>.28||n.type==="periodo"&&p.scale>.4;
  if(isLabel){ctx.font=(highlight?"bold 13px":"11px")+" system-ui";ctx.textAlign="center";ctx.textBaseline="bottom";ctx.lineWidth=3;ctx.strokeStyle="#0b1420";ctx.strokeText(n.label,p.x,p.y-rad-9);ctx.fillStyle="#f5f0e8";ctx.fillText(n.label,p.x,p.y-rad-9);}
 }
 ctx.globalAlpha=1;requestAnimationFrame(draw);}
function linked(n){return edges.filter(e=>e.source===n.id||e.target===n.id).map(e=>({e,n:e.a===n?e.b:e.a})).sort((a,b)=>(b.e.weight||1)-(a.e.weight||1));}
function focusOn(n,openPanel=true){selected=n;focus=n;status.textContent=n.label+" · "+linked(n).length+" connessioni";populate(n);if(openPanel)setPanel(true);}
function setPanel(open){document.body.classList.toggle("panel-open",open);tab.textContent=open?"▶ Chiudi":"◀ Scheda e video";tab.setAttribute("aria-expanded",String(open));}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function populate(n){document.getElementById("panelTitle").textContent=n.label;document.getElementById("panelSub").textContent=n.description||({compositore:"Compositore",periodo:"Periodo storico",corrente:"Corrente artistica",ambito:"Ambito trasversale",geografia:"Area geografica"}[n.type]||"");
 const dst=document.getElementById("panelContent");dst.textContent="";
 if(n.url){const a=document.createElement("a");a.className="card";a.href=n.url;a.textContent="↗ Apri il percorso nell'Atlante";dst.append(a);}
 const title=document.createElement("h3");title.textContent="Connessioni";dst.append(title);
 const conn=linked(n),ul=document.createElement("ul");for(const row of conn.slice(0,26)){const li=document.createElement("li"),button=document.createElement("button");button.textContent=row.n.label;button.onclick=()=>focusOn(row.n,false);li.append(button);ul.append(li);}dst.append(ul);
 if(conn.length>26){const p=document.createElement("p");p.className="small";p.textContent="Altre "+(conn.length-26)+" connessioni nel grafo.";dst.append(p);}
 const h=document.createElement("h3");h.textContent="Video e ascolti";dst.append(h);
 const attached=videoLinks.filter(v=>v.node_id===n.id||v.node===n.id).map(link=>videos.find(v=>v.id===(link.video_id||link.video))).filter(Boolean);
 if(!attached.length){const p=document.createElement("p");p.className="small";p.textContent="Nessun video ancora catalogato per questa voce. Le risorse compariranno qui quando il webmaster le collegherà nel database.";dst.append(p);}
 for(const video of attached){const box=document.createElement("div");box.className="video";const title=document.createElement("strong");title.textContent=video.title||"Video";box.append(title);
 if(video.youtube_id&&/^[a-zA-Z0-9_-]{11}$/.test(video.youtube_id)){const img=document.createElement("img");img.src="https://i.ytimg.com/vi/"+video.youtube_id+"/hqdefault.jpg";img.alt="Anteprima video";img.loading="lazy";box.append(img);}
 const a=document.createElement("a");a.href=video.url||("https://www.youtube.com/watch?v="+video.youtube_id);a.target="_blank";a.rel="noopener noreferrer";a.textContent="Apri video ↗";box.append(a);dst.append(box);}
}
function pointer(e){const r=canvas.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};}
function hit(pt){return screen.filter(p=>visibleNode(p.node)&&p.depth>-14&&Math.hypot(p.x-pt.x,p.y-pt.y)<Math.max(p.r+9,13)).sort((a,b)=>Math.hypot(a.x-pt.x,a.y-pt.y)-Math.hypot(b.x-pt.x,b.y-pt.y))[0];}
canvas.addEventListener("pointerdown",e=>{if(e.button!==0)return;let pt=pointer(e),p=hit(pt);drag={node:p?.node||null,x:pt.x,y:pt.y,depth:p?.depth||0,lastX:pt.x,lastY:pt.y,offsetX:p?p.x-pt.x:0,offsetY:p?p.y-pt.y:0,moved:false};canvas.setPointerCapture(e.pointerId);canvas.classList.add("dragging");});
canvas.addEventListener("pointermove",e=>{const pt=pointer(e);if(!drag){hover=hit(pt)?.node||null;canvas.style.cursor=hover?"pointer":"grab";return;}
 const dx=pt.x-drag.lastX,dy=pt.y-drag.lastY;if(Math.abs(dx)+Math.abs(dy)>0){if(Math.hypot(pt.x-drag.x,pt.y-drag.y)>4)drag.moved=true;}
 drag.lastX=pt.x;drag.lastY=pt.y;
 if(drag.node){const x=pt.x+drag.offsetX,y=pt.y+drag.offsetY;const pos=unproject(x,y,drag.depth);Object.assign(drag.node,pos);drag.node.vx=drag.node.vy=drag.node.vz=0;drag.x=x;drag.y=y;}
 else{rotY+=dx*.005;rotX=clamp(rotX+dy*.005,-1.4,1.4);}
});
function release(){if(!drag)return;const d=drag;drag=null;canvas.classList.remove("dragging");if(d.node)focusOn(d.node,!d.moved);}
canvas.addEventListener("pointerup",release);canvas.addEventListener("pointercancel",release);
canvas.addEventListener("wheel",e=>{e.preventDefault();zoom=clamp(zoom*Math.exp(-e.deltaY*.001),.45,3.5);},{passive:false});
tab.addEventListener("click",()=>setPanel(!document.body.classList.contains("panel-open")));
search.addEventListener("input",()=>{searchText=search.value.trim().toLowerCase();if(searchText){const results=nodes.filter(n=>n.label.toLowerCase().includes(searchText));status.textContent=results.length+" corrispondenze · Invio per centrare la prima";}});
search.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const n=nodes.find(n=>n.label.toLowerCase().includes(searchText));if(n){focusOn(n);search.blur();}});
filter.addEventListener("change",()=>{typeFilter=filter.value;});
labels.addEventListener("click",()=>{showAllLabels=!showAllLabels;labels.textContent=showAllLabels?"Etichette: tutte":"Etichette: vicine";});
reset.addEventListener("click",()=>{selected=null;focus=null;camera={x:0,y:0,z:0};rotX=-.12;rotY=.15;zoom=1;search.value="";searchText="";filter.value="tutti";typeFilter="tutti";setPanel(false);status.textContent=nodes.length+" nodi · "+edges.length+" relazioni";});
window.addEventListener("resize",resize);
fetch("database/grafo.json",{cache:"no-cache"}).then(r=>{if(!r.ok)throw Error("HTTP "+r.status);return r.json()}).then(db=>{prepare(db);requestAnimationFrame(draw);}).catch(e=>{document.body.classList.add("error");status.textContent="Errore caricamento: "+e.message;console.error(e);});
})();