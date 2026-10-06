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

/* Costellazione v3: cartografia notturna prerenderizzata e cinque sfere vetrose.
   Le sprite sono generate una sola volta per colore, non a ogni fotogramma. */
let cartography=null;
const sphereCache=new Map();
const sphereHEX=hex=>{
 const n=parseInt(hex.replace("#",""),16);
 return [n>>16&255,n>>8&255,n&255];
};
function sphereColor(hex,factor){
 const c=sphereHEX(hex);
 return "rgb("+c.map(v=>Math.max(0,Math.min(255,Math.round(v*factor)))).join(",")+")";
}
function makeSphereSprite(color){
 if(sphereCache.has(color))return sphereCache.get(color);
 const out=document.createElement("canvas"),size=256;
 out.width=out.height=size;
 const g=out.getContext("2d"),x=128,y=119,r=100;
 // L'ombra è interna allo sprite, mai disegnata con asset di terze parti.
 let shadow=g.createRadialGradient(x+8,y+94,5,x+8,y+94,85);
 shadow.addColorStop(0,"rgba(0,0,0,.44)");shadow.addColorStop(1,"rgba(0,0,0,0)");
 g.fillStyle=shadow;g.beginPath();g.ellipse(x+8,y+99,93,42,-.10,0,Math.PI*2);g.fill();
 g.save();g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.clip();
 // Smalto colorato con volume: illuminazione obliqua alto-destra.
 let body=g.createRadialGradient(x+36,y-54,2,x-24,y+24,r*1.66);
 body.addColorStop(0,sphereColor(color,1.34));
 body.addColorStop(.35,sphereColor(color,1.08));
 body.addColorStop(.68,color);
 body.addColorStop(.87,sphereColor(color,.76));
 body.addColorStop(1,sphereColor(color,.37));
 g.fillStyle=body;g.fillRect(x-r,y-r,2*r,2*r);
 const shade=g.createLinearGradient(x-r,y-r,x+r,y+r);
 shade.addColorStop(0,"rgba(255,255,255,.04)");
 shade.addColorStop(.42,"rgba(255,255,255,.02)");
 shade.addColorStop(.73,"rgba(0,24,54,.11)");
 shade.addColorStop(1,"rgba(0,11,30,.42)");
 g.fillStyle=shade;g.fillRect(x-r,y-r,2*r,2*r);
 // Riflesso ampio e curvo, ispirato alle sfere vetrose degli atlanti illustrati.
 g.beginPath();g.moveTo(x+5,y-87);
 g.bezierCurveTo(x+60,y-97,x+89,y-62,x+91,y-3);
 g.bezierCurveTo(x+91,y+13,x+86,y+32,x+80,y+39);
 g.lineTo(x+32,y+31);
 g.bezierCurveTo(x+30,y-14,x+21,y-54,x+5,y-87);
 g.closePath();
 let glint=g.createLinearGradient(x+28,y-92,x+83,y+40);
 glint.addColorStop(0,"rgba(255,255,255,.35)");
 glint.addColorStop(.7,"rgba(255,255,255,.19)");
 glint.addColorStop(1,"rgba(255,255,255,.04)");
 g.fillStyle=glint;g.fill();
 // Una seconda incisione di luce corre lungo l'arco superiore.
 g.beginPath();g.moveTo(x+26,y-96);
 g.bezierCurveTo(x+64,y-99,x+93,y-69,x+97,y-28);
 g.lineTo(x+89,y-28);
 g.bezierCurveTo(x+84,y-65,x+62,y-83,x+39,y-88);
 g.closePath();g.fillStyle="rgba(246,255,255,.67)";g.fill();
 // Lunetta azzurrata sul bordo sinistro e riverbero nella parte bassa.
 g.beginPath();g.arc(x,y,94,Math.PI*.57,Math.PI*1.30);
 g.lineWidth=8;g.strokeStyle="rgba(255,255,255,.14)";g.stroke();
 g.beginPath();g.arc(x,y,93,Math.PI*.16,Math.PI*.78);
 g.lineWidth=5;g.strokeStyle="rgba(10,31,69,.20)";g.stroke();
 g.restore();
 g.beginPath();g.arc(x,y,r-.5,0,Math.PI*2);g.strokeStyle=sphereColor(color,.77);g.lineWidth=2.3;g.stroke();
 g.beginPath();g.arc(x,y,r-6,Math.PI*.97,Math.PI*1.76);g.lineWidth=1.8;g.strokeStyle="rgba(243,253,255,.22)";g.stroke();
 const image={canvas:out,cx:x/size,cy:y/size,baseRadius:r/size};sphereCache.set(color,image);return image;
}
function drawSphere(x,y,r,color,active,related){
 if(r<1.5)return;
 if(active||related){
  const glow=ctx.createRadialGradient(x,y,r*.65,x,y,r*(active?2.7:2));
  glow.addColorStop(0,active?"rgba(255,227,170,.32)":"rgba(180,226,255,.15)");
  glow.addColorStop(1,"rgba(0,0,0,0)");
  ctx.fillStyle=glow;ctx.beginPath();ctx.arc(x,y,r*(active?2.7:2),0,Math.PI*2);ctx.fill();
 }
 const sp=makeSphereSprite(color),scale=r/(sp.canvas.width*sp.baseRadius);
 ctx.drawImage(sp.canvas,x-sp.cx*sp.canvas.width*scale,y-sp.cy*sp.canvas.height*scale,sp.canvas.width*scale,sp.canvas.height*scale);
 if(active){ctx.strokeStyle="rgba(255,242,213,.90)";ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(x,y,r+1,0,Math.PI*2);ctx.stroke();}
}
function drawNightAtlas(){
 const bg=document.createElement("canvas");bg.width=Math.max(1,Math.round(w));bg.height=Math.max(1,Math.round(h));
 const g=bg.getContext("2d"),W=bg.width,H=bg.height;
 const sea=g.createRadialGradient(W*.46,H*.40,0,W*.50,H*.55,Math.max(W,H)*.90);
 sea.addColorStop(0,"#243b52");sea.addColorStop(.4,"#11283e");sea.addColorStop(1,"#07101d");
 g.fillStyle=sea;g.fillRect(0,0,W,H);
 // Curve di livello nautiche, non una griglia rettangolare.
 g.lineWidth=.8;g.strokeStyle="rgba(154,195,212,.17)";
 for(let t=1;t<12;t++){const X=t*W/12;g.beginPath();g.moveTo(X,0);g.bezierCurveTo(X-W*.043,H*.25,X+W*.053,H*.77,X,H);g.stroke();}
 for(let t=1;t<10;t++){const Y=t*H/10;g.beginPath();g.moveTo(0,Y);g.bezierCurveTo(W*.24,Y-H*.037,W*.73,Y+H*.035,W,Y);g.stroke();}
 const polys=[
 [[-.06,.08],[.09,.04],[.21,.12],[.27,.21],[.33,.20],[.33,.34],[.27,.41],[.21,.53],[.11,.46],[.03,.49],[-.06,.35]],
 [[.55,-.08],[.74,-.04],[.85,.08],[1.07,.12],[1.05,.29],[.96,.35],[.83,.29],[.73,.43],[.65,.38],[.58,.28],[.49,.17]],
 [[.20,.60],[.33,.53],[.47,.56],[.53,.66],[.48,.78],[.42,.91],[.31,.96],[.24,.84],[.16,.73]],
 [[.70,.61],[.82,.55],[.94,.59],[1.06,.70],[1.02,.91],[.91,.98],[.80,.87],[.75,.79]],
 [[.47,.37],[.54,.38],[.57,.48],[.51,.52],[.44,.48]],
 [[.11,.83],[.15,.79],[.19,.84],[.17,.91],[.12,.92]]
 ];
 const rand=(()=>{let k=72617;return ()=>((k=(Math.imul(k,1664525)+1013904223)>>>0)/4294967296)})();
 polys.forEach((poly,n)=>{
  const pts=[];
  for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];
    for(let j=0;j<10;j++){const t=j/10,wig=Math.sin(Math.PI*t)*(rand()-.5)*.021;pts.push([(a[0]+(b[0]-a[0])*t+wig)*W,(a[1]+(b[1]-a[1])*t+wig)*H]);}}
  g.beginPath();pts.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();
  g.fillStyle=n%2?"rgba(88,120,111,.55)":"rgba(74,110,104,.64)";g.fill();
  g.shadowColor="rgba(145,211,188,.40)";g.shadowBlur=15;g.strokeStyle="rgba(169,221,196,.53)";g.lineWidth=1.7;g.stroke();g.shadowBlur=0;
  // Rilievi, linee sinuose interne e luci urbane ritagliate sulle terre.
  g.save();g.clip();
  const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
  for(let j=0;j<85;j++){const X=x0+rand()*(x1-x0),Y=y0+rand()*(y1-y0);if(j%4===0){
    g.beginPath();g.arc(X,Y,1.4+rand()*1.7,0,Math.PI*2);g.fillStyle="rgba(255,210,137,.59)";g.shadowColor="#f9bd76";g.shadowBlur=9;g.fill();g.shadowBlur=0;
  }else{g.beginPath();g.ellipse(X,Y,9+rand()*15,2+rand()*4,-.35,0,Math.PI*2);g.strokeStyle="rgba(171,208,180,.11)";g.lineWidth=.8;g.stroke();}}
  g.restore();
 });
 // Rotte tracciate sul mare, piccoli fari e toponomastica immaginaria.
 const paths=[[.06,.62,.43,.47,.91,.58],[.28,.20,.45,.66,.76,.37],[.15,.80,.54,.91,.88,.73]];
 g.setLineDash([3,10]);g.strokeStyle="rgba(241,198,129,.32)";g.lineWidth=1;
 paths.forEach(p=>{g.beginPath();g.moveTo(W*p[0],H*p[1]);g.quadraticCurveTo(W*p[2],H*p[3],W*p[4],H*p[5]);g.stroke()});g.setLineDash([]);
 const labels=[["MARE DELLE VOCI",.37,.19],["OCCIDENTE",.09,.24],["TERRE DELL'ECO",.32,.73],["LEVANTE",.76,.19],["ARCIPELAGO DEL TEMPO",.73,.53]];
 g.font=Math.max(10,Math.min(17,W/90))+"px Georgia,serif";g.textAlign="center";
 labels.forEach(([str,x,y])=>{g.fillStyle="rgba(225,228,218,.34)";g.fillText(str,W*x,H*y)});
 // Atmosfera e bordi scuri conservano il contrasto con le sfere.
 const vignette=g.createRadialGradient(W*.5,H*.49,Math.min(W,H)*.24,W*.5,H*.5,Math.max(W,H)*.84);
 vignette.addColorStop(0,"rgba(2,9,15,0)");vignette.addColorStop(1,"rgba(1,5,12,.52)");
 g.fillStyle=vignette;g.fillRect(0,0,W,H);
 cartography=bg;
}

function draw(){frame++;physics();if(focus){camera.x+=(focus.x-camera.x)*.085;camera.y+=(focus.y-camera.y)*.085;camera.z+=(focus.z-camera.z)*.085;}
 if(cartography)ctx.drawImage(cartography,0,0,w,h);
 screen=nodes.map(n=>{let p=sxworld(n);p.node=n;p.r=clamp(n.radius*2.25*zoom*9/Math.max(5,16+p.depth),4.5,32)*(n===selected?1.6:1);if(drag?.node===n){p.x=drag.x;p.y=drag.y;}return p;});
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