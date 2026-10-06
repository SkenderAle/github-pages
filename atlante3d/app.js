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
function resize(){w=canvas.clientWidth;h=canvas.clientHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);drawNightAtlas();}
function sxworld(node){let x=node.x-camera.x,y=node.y-camera.y,z=node.z-camera.z;const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),si=Math.sin(rotX);const rx=x*cy-z*sy,rz=x*sy+z*cy,ry=y*cx-rz*si,depth=y*si+rz*cx;const k=9/(16+depth),scale=Math.min(w,h)*.095*zoom*k;return {x:w/2+rx*scale,y:h/2+ry*scale,scale,depth};}
function unproject(px,py,depth){let scale=Math.min(w,h)*.095*zoom*9/(16+depth);const rx=(px-w/2)/scale,ry=(py-h/2)/scale;const cx=Math.cos(rotX),si=Math.sin(rotX),cy=Math.cos(rotY),sy=Math.sin(rotY);const yy=ry*cx+depth*si,rz=-ry*si+depth*cx;return {x:camera.x+rx*cy+rz*sy,y:camera.y+yy,z:camera.z-rx*sy+rz*cy};}
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

/* Paesaggio immaginario: viene dipinto solo al ridimensionamento, non a ogni frame. */
let cartography=null;
function drawNightAtlas(){
 const bg=document.createElement("canvas");bg.width=Math.max(1,Math.round(w));bg.height=Math.max(1,Math.round(h));const g=bg.getContext("2d");const W=bg.width,H=bg.height;
 g.fillStyle="#07101d";g.fillRect(0,0,W,H);
 let sea=g.createRadialGradient(W*.49,H*.48,20,W*.49,H*.48,Math.max(W,H)*.86);
 sea.addColorStop(0,"#263b51");sea.addColorStop(.46,"#122739");sea.addColorStop(1,"#060c17");g.fillStyle=sea;g.fillRect(0,0,W,H);
 // Reticolo curvo ispirato alle carte nautiche, appena visibile sotto la rete musicale.
 g.strokeStyle="rgba(177,206,219,.095)";g.lineWidth=.7;
 for(let i=1;i<12;i++){const X=W*i/12;g.beginPath();g.moveTo(X,0);g.bezierCurveTo(X-W*.045,H*.29,X+W*.045,H*.71,X,H);g.stroke();}
 for(let i=1;i<9;i++){const Y=H*i/9;g.beginPath();g.moveTo(0,Y);g.bezierCurveTo(W*.32,Y-H*.024,W*.68,Y+H*.024,W,Y);g.stroke();}
 const coasts=[
  [[-.08,.10],[.12,.07],[.19,.15],[.29,.17],[.33,.28],[.26,.37],[.22,.47],[.13,.48],[.07,.40],[-.06,.43]],
  [[.54,-.12],[.72,.02],[.82,.10],[.94,.10],[1.06,.21],[.96,.34],[.86,.32],[.80,.39],[.69,.40],[.62,.34],[.58,.19],[.49,.13]],
  [[.22,.61],[.36,.55],[.47,.57],[.53,.66],[.48,.73],[.45,.84],[.35,.92],[.28,.86],[.26,.77],[.17,.72]],
  [[.72,.62],[.81,.57],[.94,.62],[1.06,.72],[1.03,.91],[.89,.93],[.81,.84],[.74,.79]],
  [[.47,.36],[.50,.35],[.53,.40],[.52,.46],[.48,.47],[.45,.42]],
  [[.09,.76],[.13,.73],[.16,.79],[.14,.86],[.10,.85]]
 ];
 const rand=(()=>{let v=73405;return ()=>((v=(Math.imul(1664525,v)+1013904223)>>>0)/4294967296)})();
 coasts.forEach((poly,j)=>{
   const verts=[];for(let k=0;k<poly.length;k++){const a=poly[k],b=poly[(k+1)%poly.length];const count=9;for(let t=0;t<count;t++){const f=t/count;const wiggle=Math.sin(Math.PI*f)*(rand()-.5)*.016;verts.push([(a[0]+(b[0]-a[0])*f+wiggle)*W,(a[1]+(b[1]-a[1])*f+wiggle)*H]);}}
   g.beginPath();verts.forEach((p,k)=>k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();
   g.fillStyle=j%2?"rgba(65,88,90,.35)":"rgba(54,83,79,.40)";g.fill();
   g.strokeStyle="rgba(165,206,194,.30)";g.lineWidth=1.1;g.shadowColor="rgba(116,178,174,.23)";g.shadowBlur=10;g.stroke();g.shadowBlur=0;
   // Rilievi e luci distribuite all'interno dei continenti, non nel mare.
   const bbox={minX:Math.min(...verts.map(p=>p[0])),maxX:Math.max(...verts.map(p=>p[0])),minY:Math.min(...verts.map(p=>p[1])),maxY:Math.max(...verts.map(p=>p[1]))};
   g.save();g.clip();
   for(let q=0;q<95;q++){
      const X=bbox.minX+rand()*(bbox.maxX-bbox.minX),Y=bbox.minY+rand()*(bbox.maxY-bbox.minY);
      const R=2+rand()*12;const halo=g.createRadialGradient(X,Y,0,X,Y,R);
      halo.addColorStop(0,q%4===0?"rgba(248,196,116,.30)":"rgba(93,133,125,.19)");halo.addColorStop(1,"rgba(0,0,0,0)");
      g.fillStyle=halo;g.beginPath();g.arc(X,Y,R,0,Math.PI*2);g.fill();
   }g.restore();
 });
 // Arcipelaghi e costellazioni di luci diffuse, deterministiche.
 for(let i=0;i<85;i++){const X=rand()*W,Y=rand()*H,R=rand()*1.3+.3;g.fillStyle="rgba(201,217,219,"+(.055+rand()*.16)+")";g.beginPath();g.arc(X,Y,R,0,Math.PI*2);g.fill();}
 g.strokeStyle="rgba(221,195,143,.19)";g.setLineDash([3,8]);g.lineWidth=1;
 g.beginPath();g.moveTo(W*.08,H*.55);g.bezierCurveTo(W*.36,H*.43,W*.66,H*.62,W*.91,H*.45);g.stroke();g.setLineDash([]);
 g.fillStyle="rgba(215,219,210,.22)";g.font="italic "+Math.max(12,Math.min(19,W/74))+"px Georgia,serif";
 g.fillText("Mare delle voci",W*.10,H*.56);g.fillText("Terre d'Occidente",W*.13,H*.24);g.fillText("Arcipelago del Levante",W*.67,H*.18);
 // Vignettatura scura per lasciare il contrasto alle sfere in primo piano.
 const vignette=g.createRadialGradient(W*.5,H*.48,Math.min(W,H)*.17,W*.5,H*.48,Math.max(W,H)*.75);
 vignette.addColorStop(0,"rgba(3,9,15,0)");vignette.addColorStop(1,"rgba(3,7,15,.69)");
 g.fillStyle=vignette;g.fillRect(0,0,W,H);cartography=bg;
}
function drawSphere(x,y,r,color,active,related){
 if(r<1)return;
 if(active||related){const aura=ctx.createRadialGradient(x,y,r*.3,x,y,r*(active?2.9:2.1));
 aura.addColorStop(0,active?"rgba(255,210,149,.25)":"rgba(196,215,249,.12)");
 aura.addColorStop(1,"rgba(255,230,160,0)");ctx.fillStyle=aura;ctx.beginPath();ctx.arc(x,y,r*(active?2.9:2.1),0,Math.PI*2);ctx.fill();}
 ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.clip();
 // Un'unica superficie sferica: volume dato da luce radente, tonalita' e ombra.
 const light=ctx.createRadialGradient(x-r*.39,y-r*.47,Math.max(.1,r*.035),x+r*.23,y+r*.25,r*1.43);
 light.addColorStop(0,"#ffffff");light.addColorStop(.14,color);light.addColorStop(.53,color);
 light.addColorStop(.79,"#243747");light.addColorStop(1,"#080e19");
 ctx.fillStyle=light;ctx.fillRect(x-r,y-r,r*2,r*2);
 const glaze=ctx.createLinearGradient(x-r,y-r,x+r,y+r);
 glaze.addColorStop(0,"rgba(255,255,255,.35)");glaze.addColorStop(.32,"rgba(255,255,255,.07)");
 glaze.addColorStop(.72,"rgba(0,0,0,.16)");glaze.addColorStop(1,"rgba(0,0,0,.46)");
 ctx.fillStyle=glaze;ctx.fillRect(x-r,y-r,r*2,r*2);
 ctx.beginPath();ctx.ellipse(x-r*.29,y-r*.38,r*.25,r*.13,-.65,0,Math.PI*2);
 ctx.fillStyle="rgba(255,255,255,.50)";ctx.fill();
 ctx.restore();
 ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
 ctx.strokeStyle=active?"rgba(255,240,213,.94)":"rgba(228,240,244,.40)";
 ctx.lineWidth=active?1.65:.8;ctx.stroke();
}

function draw(){frame++;physics();if(focus){camera.x+=(focus.x-camera.x)*.085;camera.y+=(focus.y-camera.y)*.085;camera.z+=(focus.z-camera.z)*.085;}
 if(cartography)ctx.drawImage(cartography,0,0,w,h);
 screen=nodes.map(n=>{let p=sxworld(n);p.node=n;p.r=clamp(n.radius*1.75*zoom*9/(16+p.depth),3.2,24)*(n===selected?1.8:1);if(drag?.node===n){p.x=drag.x;p.y=drag.y;}return p;});
 const map=new Map(screen.map(p=>[p.node.id,p]));ctx.lineWidth=.8;
 for(const e of edges){let a=map.get(e.source),b=map.get(e.target);if(!a||!b||a.depth< -14||b.depth< -14)continue;if(!visibleNode(a.node)||!visibleNode(b.node))continue;
  const highlight=selected&&(e.source===selected.id||e.target===selected.id),dim=selected&&!highlight;
  ctx.globalAlpha=dim?.07:highlight?.72:.15;ctx.lineWidth=highlight?1.45:.7;
  if(highlight){const path=ctx.createLinearGradient(a.x,a.y,b.x,b.y);path.addColorStop(0,"#ffe5a5");path.addColorStop(.52,"#a1dbec");path.addColorStop(1,"#dcacd9");ctx.strokeStyle=path;}
  else ctx.strokeStyle="#90bbd0";
  const bend=Math.min(38,Math.hypot(b.x-a.x,b.y-a.y)*.09);
  ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo((a.x+b.x)*.5+bend*.35,(a.y+b.y)*.5-bend,b.x,b.y);ctx.stroke();
}
 ctx.globalAlpha=1;
 // Bussola luminosa discreta e profondità atmosferica della carta notturna.
 ctx.globalAlpha=.28;ctx.strokeStyle="#b9d2d7";ctx.lineWidth=.8;
 const cx=w*.93,cy=h*.14;
 if(w>650){ctx.beginPath();ctx.arc(cx,cy,29,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,cy-36);ctx.lineTo(cx,cy+36);ctx.moveTo(cx-36,cy);ctx.lineTo(cx+36,cy);ctx.stroke();ctx.font="12px Georgia,serif";ctx.fillStyle="#e8d6ac";ctx.fillText("N",cx-4,cy-40);}
 ctx.globalAlpha=1;
 let drawable=screen.filter(p=>p.depth>-14&&visibleNode(p.node)).sort((a,b)=>b.depth-a.depth);
 for(const p of drawable){let n=p.node,highlight=n===selected||n===hover||n.label.toLowerCase().includes(searchText)&&searchText.length>1;
  const connected=selected&&edges.some(e=>(e.source===selected.id&&e.target===n.id)||(e.target===selected.id&&e.source===n.id));
  ctx.globalAlpha=selected&&!highlight&&!connected?.43:1;const rad=highlight?Math.max(p.r*1.18,selected===n?12:p.r):p.r;
  if(highlight){ctx.beginPath();ctx.arc(p.x,p.y,rad+8,0,Math.PI*2);ctx.fillStyle="#f3cb8e24";ctx.fill();}
  drawSphere(p.x,p.y,rad,COLORS[n.type]||"#aaaaaa",Boolean(highlight),Boolean(connected));
  let isLabel=showAllLabels||highlight||connected&&Math.abs(p.x-w/2)<w*.36&&Math.abs(p.y-h/2)<h*.38&&p.scale>.28||n.type==="periodo"&&p.scale>.4;
  if(isLabel){ctx.font=(highlight?"bold 13px":"11px")+" system-ui";ctx.textAlign="center";ctx.textBaseline="bottom";ctx.lineWidth=3;ctx.strokeStyle="#0b1420";ctx.strokeText(n.label,p.x,p.y-rad-9);ctx.fillStyle=highlight?"#fff5e5":"rgba(240,241,236,.93)";ctx.fillText(n.label,p.x,p.y-rad-9);}
 }
 ctx.globalAlpha=1;requestAnimationFrame(draw);}
function linked(n){return edges.filter(e=>e.source===n.id||e.target===n.id).map(e=>({e,n:e.a===n?e.b:e.a})).sort((a,b)=>(b.e.weight||1)-(a.e.weight||1));}
function focusOn(n,openPanel=true){selected=n;focus=n;status.textContent=n.label+" · "+linked(n).length+" connessioni";populate(n);if(openPanel)setPanel(true);}
function setPanel(open){document.body.classList.toggle("panel-open",open);tab.textContent=open?"▶ Chiudi":"◀ Scheda e video";tab.setAttribute("aria-expanded",String(open));}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function populate(n){
 document.getElementById("panelTitle").textContent=n.label;
 document.getElementById("panelSub").textContent=n.description||({compositore:"Compositore",periodo:"Periodo storico",corrente:"Corrente artistica",ambito:"Ambito trasversale",geografia:"Area geografica"}[n.type]||"");
 const dst=document.getElementById("panelContent");dst.replaceChildren();
 const conn=linked(n),relatedMedia=[...new Map(videoLinks.filter(v=>v.node_id===n.id||v.node===n.id).map(link=>videos.find(v=>v.id===(link.video_id||link.video))).filter(Boolean).map(v=>[v.id,v])).values()];
 if(n.url){const a=document.createElement("a");a.className="card";a.href=n.url;a.textContent="↗ Apri il percorso nell'Atlante";dst.append(a);}
 const mediaHead=document.createElement("div");mediaHead.className="panel-section-header";
 const h=document.createElement("h3");h.textContent="Ascolti e video";mediaHead.append(h);
 const total=document.createElement("span");total.className="media-count";total.textContent=relatedMedia.length+" risorse";mediaHead.append(total);dst.append(mediaHead);
 if(!relatedMedia.length){const p=document.createElement("p");p.className="small";p.textContent="Nessun ascolto catalogato per questa voce. La raccolta cresce con i capitoli dell’Atlante.";dst.append(p);}
 for(const media of relatedMedia){
   const box=document.createElement("article");box.className="video";
   if(media.youtube_id&&/^[a-zA-Z0-9_-]{11}$/.test(media.youtube_id)){
      const link=document.createElement("a");link.href=media.url;link.target="_blank";link.rel="noopener noreferrer";link.className="media-image";
      const img=document.createElement("img");img.src="https://i.ytimg.com/vi/"+media.youtube_id+"/hqdefault.jpg";img.alt="Anteprima dell'ascolto";img.loading="lazy";
      const play=document.createElement("span");play.className="play-glyph";play.textContent="▶";link.append(img,play);box.append(link);
   }
   const t=document.createElement("strong");t.className="media-title";t.textContent=media.title||"Ascolto";box.append(t);
   if(media.kind==="audio"&&/^https:/.test(media.url||"")){
     const audio=document.createElement("audio");audio.controls=true;audio.preload="none";audio.src=media.url;audio.setAttribute("aria-label",media.title||"Ascolto audio");box.append(audio);
   }
   const link=document.createElement("a");link.className="media-link";link.href=media.url||("#");link.target="_blank";link.rel="noopener noreferrer";link.textContent=media.kind==="audio"?"Fonte audio ↗":"Ascolta su YouTube ↗";box.append(link);
   dst.append(box);
 }
 const group=document.createElement("details");group.className="related-list";group.open=!relatedMedia.length;
 const summary=document.createElement("summary");summary.textContent="Connessioni · "+conn.length;group.append(summary);
 const ul=document.createElement("ul");for(const row of conn.slice(0,45)){const li=document.createElement("li"),button=document.createElement("button");button.textContent=row.n.label;button.onclick=()=>focusOn(row.n,false);li.append(button);ul.append(li);}group.append(ul);
 if(conn.length>45){const p=document.createElement("p");p.className="small";p.textContent="Altre "+(conn.length-45)+" connessioni esplorabili nella rete.";group.append(p);}
 dst.append(group);
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
Promise.all([fetch("database/grafo.json",{cache:"no-cache"}),fetch("database/video.json",{cache:"no-cache"})]).then(async responses=>{if(!responses[0].ok)throw Error("HTTP database "+responses[0].status);const db=await responses[0].json();const media=responses[1].ok?await responses[1].json():{videos:[],video_nodes:[]};db.videos=media.videos||[];db.video_nodes=media.video_nodes||[];return db;}).then(db=>{prepare(db);requestAnimationFrame(draw);}).catch(e=>{document.body.classList.add("error");status.textContent="Errore caricamento: "+e.message;console.error(e);});
})();