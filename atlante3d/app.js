"use strict";
(() => {
const canvas=document.getElementById("sky"),ctx=canvas.getContext("2d",{alpha:true});
const panel=document.getElementById("panel"),tab=document.getElementById("panelTab"),status=document.getElementById("status");
const search=document.getElementById("search"),centerSearch=document.getElementById("centerSearch"),reset=document.getElementById("reset"),labels=document.getElementById("labels"),lensChoices=document.getElementById("lensChoices"),categoryChoices=document.getElementById("categoryChoices"),lensHelp=document.getElementById("lensHelp"),relationTooltip=document.getElementById("relationTooltip");
const moreControls=document.getElementById("moreControls"),explodeBtn=document.getElementById("explode");
const zoomIn=document.getElementById("zoomIn"),zoomOut=document.getElementById("zoomOut"),zoomSlider=document.getElementById("zoomSlider"),zoomValue=document.getElementById("zoomValue");
const earthMap=document.getElementById("earthMap"),followGeo=document.getElementById("followGeo"),geoLabel=document.getElementById("geoLabel"),periodContext=document.getElementById("periodContext");
const COLORS={compositore:"#f3bd74",persona:"#f1c1d5",periodo:"#7ec3d4",ambito:"#c8a2e5",corrente:"#e49ca4",geografia:"#8bc5a1"};
let nodes=[],edges=[],byId=new Map(),videos=[],videoLinks=[],camera={x:0,y:0,z:0},focus=null,zoom=1,geoZoomPct=0,geoAutoSpan=360,rotY=.15,rotX=-.12,w=0,h=0,dpr=1;
let selected=null,drag=null,screen=[],hitOrder=[],lineHits=[],showAllLabels=false,frame=0,hover=null,searchText="",lensEdges=[],lensGroups=[],historySchoolEdges=[],freeNodes=[],freeEdges=[],explodeActive=false;
const geoCache=new Map();
let activeEdgesCacheKey="",activeEdgesCache=[],selectedNeighborCacheKey="",selectedNeighborCache=new Set(),selectedDepthCacheKey="",selectedDepthCache=new Map(),lastDrawTime=0;
const activeLenses=new Set(["musica"]);
const activeCategories=new Set(["compositore"]);
const EXPLORATION_LENSES=[
 {id:"musica",label:"Storia e appartenenze",description:"Epoche, contesti storici, scuole compositive e tradizioni documentate.",color:"#9fc7d9"},
 {id:"trasmissioni",label:"Maestri, allievi e influenze",description:"Rapporti didattici e influenze documentate. La freccia indica sempre la direzione storica.",color:"#63c7ff"},
 {id:"genealogie",label:"Altri autori correlati",description:"Autori collegati da ricezioni, rielaborazioni, citazioni, trascrizioni o altri rapporti musicali documentati.",color:"#c892ff"},
 {id:"collaborazioni",label:"Incontri e collaborazioni",description:"Rapporti artistici e professionali documentati. Linea bidirezionale, senza freccia.",color:"#77d7a6"}
];
const EXPLORATION_GROUPS={musica:["scuole"],trasmissioni:["formazione","influenze"],genealogie:["genealogie"],collaborazioni:["collaborazioni"]};
const lensMeta=id=>EXPLORATION_LENSES.find(l=>l.id===id);
const lensActive=id=>activeLenses.has(id);
const hasNonMusicLens=()=>[...activeLenses].some(id=>id!=="musica");
const activeLensLabel=()=>EXPLORATION_LENSES.filter(l=>activeLenses.has(l.id)).map(l=>l.label).join(" + ")||"nessuna lente";
function displayRelations(id){return lensEdges.filter(e=>(EXPLORATION_GROUPS[id]||[]).includes(e.group));}
const RELATION_STYLE={
 formazione:{from:"#53bfff",to:"#b8edff",arrow:true,label:"maestro → allievo"},
 influenze:{from:"#ffd166",to:"#ff8b5c",arrow:true,label:"influenza → ricezione"},
 genealogie:{from:"#b98cff",to:"#f39bff",arrow:true,label:"genealogia → sviluppo"},
 scuole:{from:"#73d7c4",to:"#d1f3d8",arrow:true,label:"tradizione → autore"},
 collaborazioni:{from:"#72dea2",to:"#72dea2",arrow:false,label:"collaborazione ↔"},
 storia:{from:"#9db7ca",to:"#d7e1e8",arrow:false,label:"relazione storica"}
};
function relationStyle(e){return RELATION_STYLE[e.group]||RELATION_STYLE.storia;}
function relationVerb(e){return e.forward||e.kind||"relazione documentata";}
function dedupeEdges(list){const seen=new Set();return list.filter(e=>{const k=e.id||[e.source,e.target,e.group||"",e.kind||""].join("|");if(seen.has(k))return false;seen.add(k);return true;});}
const rnd=(()=>{let x=94327;return ()=>((x=(Math.imul(x,1664525)+1013904223)>>>0)/4294967296)})();
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const normSearch=t=>String(t||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/ł/g,"l").replace(/ß/g,"ss").replace(/æ/g,"ae").replace(/œ/g,"oe").replace(/[ʹʺ'’ʼ`´]/g,"").replace(/[‐‑‒–—]/g,"-").replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim();
function searchNames(n){return [n.label,...(n.aliases||[])];}
function matchesSearch(n,q){return !!q&&searchNames(n).some(name=>normSearch(name).includes(q));}
function searchRank(n,q){const variants=searchNames(n).map(normSearch);if(variants.some(v=>v===q))return 0;if(variants.some(v=>v.split(" ").includes(q)))return 1;if(variants.some(v=>v.startsWith(q)))return 2;return 3;}
function findSearchResults(q){return nodes.filter(n=>n.type!=="geografia"&&matchesSearch(n,q)&&(n.type!=="persona"||n.music_relevance||hasNonMusicLens())).sort((a,b)=>searchRank(a,q)-searchRank(b,q)||a.label.localeCompare(b.label,"it"));}
function resize(){w=canvas.clientWidth;h=canvas.clientHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}

const geoState={lat:20,lon:0,span:360,targetLat:20,targetLon:0,targetSpan:360,enabled:true};

const COUNTRY_AREAS={
 "Italia":[42.6,12.5,4.8,5.2],"Francia":[46.4,2.2,3.8,4.2],"Germania":[51.0,10.1,3.2,4.4],
 "Austria":[47.7,14.1,2.2,3.2],"Russia":[56.0,38.0,10.0,20.0],"Cechia":[49.8,15.5,2.0,2.6],
 "Stati Uniti":[39.0,-98.0,12.0,24.0],"Ungheria":[47.1,19.2,2.0,2.8],"Polonia":[52.0,19.1,3.2,4.0],
 "Inghilterra":[52.7,-1.6,2.8,3.0],"Regno Unito":[54.0,-2.0,4.0,4.0],"Spagna":[40.2,-3.7,4.0,4.8],
 "Paesi Bassi":[52.2,5.3,1.5,1.8],"Belgio":[50.7,4.6,1.2,1.4],"Croazia":[45.2,15.5,2.3,3.0],
 "Slovenia":[46.1,14.9,1.2,1.5],"Romania":[45.9,24.9,3.0,4.0],"Grecia":[39.0,22.0,3.0,4.0],
 "Albania":[41.1,20.0,1.4,1.2],"Svezia":[62.0,15.0,5.0,5.5],"Norvegia":[62.0,10.0,6.0,4.0],
 "Finlandia":[64.0,26.0,5.0,5.0],"Danimarca":[56.0,10.0,2.0,2.2],"Portogallo":[39.6,-8.0,2.3,1.8],
 "Brasile":[-14.2,-51.9,12.0,15.0],"Argentina":[-34.0,-64.0,11.0,8.0],"Messico":[23.6,-102.5,8.0,10.0],
 "Canada":[56.1,-106.3,14.0,25.0],"Giappone":[36.2,138.3,4.0,4.5],"Cina":[35.9,104.2,10.0,14.0],
 "Australia":[-25.3,133.8,9.0,12.0]
};
const MUSICIAN_GEO_OVERRIDES={
 "compositore-antonio-vivaldi":[45.4408,12.3155,"Venezia"],
 "compositore-ludwig-van-beethoven":[50.7374,7.0982,"Bonn"],
 "compositore-leonard-bernstein":[40.7128,-74.0060,"New York"],
 "compositore-johann-sebastian-bach":[51.3397,12.3731,"Lipsia"],
 "compositore-georg-friedrich-handel":[51.4828,11.9698,"Halle"],
 "compositore-wolfgang-amadeus-mozart":[47.8095,13.0550,"Salisburgo"],
 "compositore-joseph-haydn":[47.8457,16.5233,"Eisenstadt"],
 "compositore-claudio-monteverdi":[45.4408,12.3155,"Venezia"],
 "compositore-giovanni-pierluigi-da-palestrina":[41.9028,12.4964,"Roma"],
 "compositore-arcangelo-corelli":[41.9028,12.4964,"Roma"],
 "compositore-gioachino-rossini":[43.9102,12.9133,"Pesaro"],
 "compositore-niccolo-paganini":[44.4056,8.9463,"Genova"],
 "compositore-antonio-salieri":[48.2082,16.3738,"Vienna"],
 "compositore-giuseppe-verdi":[45.0527,9.6966,"Busseto"],
 "compositore-giacomo-puccini":[43.8430,10.5079,"Lucca"],
 "compositore-hector-berlioz":[48.8566,2.3522,"Parigi"],
 "compositore-claude-debussy":[48.8566,2.3522,"Parigi"],
 "compositore-maurice-ravel":[48.8566,2.3522,"Parigi"],
 "compositore-gabriel-faure":[48.8566,2.3522,"Parigi"],
 "compositore-camille-saint-saens":[48.8566,2.3522,"Parigi"],
 "compositore-erik-satie":[48.8566,2.3522,"Parigi"],
 "compositore-olivier-messiaen":[48.8566,2.3522,"Parigi"],
 "compositore-pierre-boulez":[48.8566,2.3522,"Parigi"],
 "compositore-frederic-chopin":[52.2297,21.0122,"Varsavia"],
 "compositore-franz-liszt":[50.9795,11.3235,"Weimar"],
 "compositore-richard-wagner":[49.9456,11.5713,"Bayreuth"],
 "compositore-johannes-brahms":[48.2082,16.3738,"Vienna"],
 "compositore-gustav-mahler":[48.2082,16.3738,"Vienna"],
 "compositore-arnold-schonberg":[48.2082,16.3738,"Vienna"],
 "compositore-anton-webern":[48.2082,16.3738,"Vienna"],
 "compositore-alban-berg":[48.2082,16.3738,"Vienna"],
 "compositore-petr-il-ic-cajkovskij":[55.7558,37.6173,"Mosca"],
 "compositore-nikolaj-rimskij-korsakov":[59.9311,30.3609,"San Pietroburgo"],
 "compositore-modest-musorgskij":[59.9311,30.3609,"San Pietroburgo"],
 "compositore-dmitrij-sostakovic":[59.9311,30.3609,"San Pietroburgo"],
 "compositore-sergej-prokofev":[55.7558,37.6173,"Mosca"],
 "compositore-sergej-rachmaninov":[55.7558,37.6173,"Mosca"],
 "compositore-bela-bartok":[47.4979,19.0402,"Budapest"],
 "compositore-zoltan-kodaly":[47.4979,19.0402,"Budapest"],
 "compositore-bedrich-smetana":[50.0755,14.4378,"Praga"],
 "compositore-antonin-dvorak":[50.0755,14.4378,"Praga"],
 "compositore-leos-janacek":[49.1951,16.6068,"Brno"],
 "compositore-john-cage":[40.7128,-74.0060,"New York"],
 "compositore-charles-ives":[41.0534,-73.5387,"Connecticut"],
 "compositore-george-gershwin":[40.7128,-74.0060,"New York"],
 "compositore-duke-ellington":[38.9072,-77.0369,"Washington"],
 "compositore-billy-strayhorn":[40.7128,-74.0060,"New York"],
 "compositore-margaret-bonds":[41.8781,-87.6298,"Chicago"]
};
function stableHash(s){let h=2166136261;for(const ch of String(s)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function fallbackCountryGeo(n){
 const area=COUNTRY_AREAS[n?.country];if(!area)return null;
 const h=stableHash(n.id),u=((h&65535)/65535)-.5,v=(((h>>>16)&65535)/65535)-.5;
 return {lat:area[0]+u*area[2],lon:area[1]+v*area[3],span:50,precision:"country-distributed",place:n.country};
}
function baseGeo(n){
 if(!n)return null;
 const ov=MUSICIAN_GEO_OVERRIDES[n.id];if(ov)return {lat:ov[0],lon:ov[1],span:32,precision:"city-override",place:ov[2]};
 if(n.type==="geografia"){
  const cc=({"geografia-francia":[46.6,2.3],"geografia-italia":[42.8,12.5],"geografia-inghilterra":[53,-1.5],"geografia-spagna":[40,-4],"geografia-germania":[51,10],"geografia-austria":[47.6,14.1],"geografia-russia":[56,37.6],"geografia-cechia":[49.8,15.5],"geografia-stati-uniti":[39,-98],"geografia-ungheria":[47.2,19.4],"geografia-polonia":[52,19.1],"geografia-paesi-bassi":[52.2,5.3]})[n.id];
  return cc?{lat:cc[0],lon:cc[1],span:70,precision:"country"}:null;
 }
 if(n.geo_focus&&Number.isFinite(n.geo_focus.lat)&&Number.isFinite(n.geo_focus.lon)&&n.geo_focus.precision!=="country-approximation")return {...n.geo_focus};
 return fallbackCountryGeo(n)||(n.geo_focus&&Number.isFinite(n.geo_focus.lat)&&Number.isFinite(n.geo_focus.lon)?{...n.geo_focus}:null);
}
function circularMeanLon(values){
 if(!values.length)return 0;let x=0,y=0;
 for(const lon of values){const r=lon*Math.PI/180;x+=Math.cos(r);y+=Math.sin(r);}
 return Math.atan2(y,x)*180/Math.PI;
}
function geoFromNode(n){
 if(!n)return null;
 if(geoCache.has(n.id))return geoCache.get(n.id);
 const own=baseGeo(n);if(own){geoCache.set(n.id,own);return own;}
 // Una corrente, un ambito o un personaggio senza coordinate proprie non è un luogo:
 // niente baricentri artificiali nell'Atlantico.
 if(n.type==="corrente"||n.type==="ambito"||n.type==="persona"){
  geoCache.set(n.id,null);return null;
 }
 const pool=dedupeEdges([...edges,...lensEdges]);
 const linked=pool.filter(e=>e.source===n.id||e.target===n.id)
  .map(e=>baseGeo(byId.get(e.source===n.id?e.target:e.source))).filter(Boolean);
 const out=linked.length?{lat:linked.reduce((s,p)=>s+p.lat,0)/linked.length,lon:circularMeanLon(linked.map(p=>p.lon)),span:80,precision:"network-centroid",place:"baricentro della rete"}:null;
 geoCache.set(n.id,out);return out;
}
const lonDelta=(a,b)=>((a-b+540)%360)-180;
const mapBase=()=>Math.max(320,Math.min(w,2*h));
function rawGeoPoint(n){
 const point=geoFromNode(n);if(!point)return null;
 const g=geoState,world=mapBase()*360/Math.max(6,g.span),height=world/2;
 return {x:w/2+lonDelta(point.lon,g.lon)/360*world,y:h/2+(g.lat-point.lat)/180*height,point,world,height};
}
function geoScreenPoint(n,withManual=true){
 const raw=rawGeoPoint(n);if(!raw)return null;
 const manual=withManual?(n.manualDx||0):0,manualY=withManual?(n.manualDy||0):0;
 const auto=withManual&&!n.manualPinned?(n.autoDx||0):0,autoY=withManual&&!n.manualPinned?(n.autoDy||0):0;
 const ex=withManual?(n.explodeDx||0):0,ey=withManual?(n.explodeDy||0):0;
 return {x:raw.x+manual+auto+ex,y:raw.y+manualY+autoY+ey,depth:0,scale:1,r:15,geo:true,point:raw.point};
}
function contextRawPoint(n){
 if(!selected||n===selected||geoFromNode(n))return null;
 if(!(n.type==="corrente"||n.type==="ambito"||n.type==="persona"))return null;
 const depths=selectedDepths(3),depth=depths?.get(n.id);
 if(depth==null||depth<1||depth>3)return null;
 const center=rawGeoPoint(selected);if(!center)return null;
 const h=stableHash(n.id),angle=((h%100000)/100000)*Math.PI*2;
 const ring=76+depth*54+((h>>>8)%27);
 return {x:center.x+Math.cos(angle)*ring,y:center.y+Math.sin(angle)*ring,depth:0,scale:1,r:15,geo:false,context:true};
}
function contextScreenPoint(n,withManual=true){
 const raw=contextRawPoint(n);if(!raw)return null;
 const manual=withManual?(n.manualDx||0):0,manualY=withManual?(n.manualDy||0):0;
 const ex=withManual?(n.explodeDx||0):0,ey=withManual?(n.explodeDy||0):0;
 return {...raw,x:raw.x+manual+ex,y:raw.y+manualY+ey};
}
function resetAutoLayout(){
 for(const n of nodes){if(!n.manualPinned){n.autoDx=0;n.autoDy=0;}}
}
function clearExplodeLayout(){
 explodeActive=false;
 for(const n of nodes){n.explodeDx=0;n.explodeDy=0;}
 if(explodeBtn){explodeBtn.disabled=!selected;explodeBtn.textContent="✦ Esplodi";}
}
function shuffleNodes(list){
 const out=[...list];
 for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
 return out;
}
function explodeNetwork(){
 if(!selected)return;
 clearExplodeLayout();resetAutoLayout();
 const center=rawGeoPoint(selected)||contextRawPoint(selected);if(!center)return;
 const depths=selectedDepths(3);if(!depths)return;
 const rotation=Math.random()*Math.PI*2;
 let moved=0;
 for(let depth=1;depth<=3;depth++){
  const ringNodes=shuffleNodes(nodes.filter(n=>n!==selected&&depths.get(n.id)===depth&&visibleNode(n)));
  const count=ringNodes.length;if(!count)continue;
  // Una corona per livello: il fuoco resta sempre il nodo selezionato.
  const rx=depth===1?125:depth===2?235:345;
  const ry=depth===1?95:depth===2?178:260;
  const phase=rotation+(depth-1)*.43;
  for(let i=0;i<count;i++){
   const n=ringNodes[i];
   const raw=rawGeoPoint(n)||contextRawPoint(n);if(!raw)continue;
   const angle=phase+(Math.PI*2*i/count);
   const targetX=center.x+Math.cos(angle)*rx,targetY=center.y+Math.sin(angle)*ry;
   const manualX=n.manualDx||0,manualY=n.manualDy||0;
   n.explodeDx=targetX-(raw.x+manualX);
   n.explodeDy=targetY-(raw.y+manualY);
   moved++;
  }
 }
 if(!moved)return;
 explodeActive=true;
 if(explodeBtn){explodeBtn.disabled=false;explodeBtn.textContent="✦ Rimescola";}
 status.textContent=selected.label+" · raggiera esplosa · "+moved+" nodi su 3 livelli";
}
function categoryVisible(n){return n===selected||activeCategories.has(n.type);}
function networkNodesForFocus(n){
 if(!n)return [];
 const out=[n],seen=new Set([n.id]);
 for(const e of currentEdges()){
  let other=null;if(e.source===n.id)other=byId.get(e.target);else if(e.target===n.id)other=byId.get(e.source);
  if(!other||other.type==="geografia"||!categoryVisible(other)||seen.has(other.id))continue;
  seen.add(other.id);out.push(other);
 }
 return out;
}
function fitGeoNetwork(n,tight=false){
 if(!geoState.enabled)return;
 if(!n){geoState.targetLat=20;geoState.targetLon=0;geoState.targetSpan=360;geoLabel.textContent="Mondo · panoramica";return;}
 const center=geoFromNode(n);
 if(!center){geoLabel.textContent=n.label+" · geografia non ancora catalogata";return;}
 const pts=networkNodesForFocus(n).map(geoFromNode).filter(Boolean);
 let maxLon=0,maxLat=0;
 for(const p of pts){maxLon=Math.max(maxLon,Math.abs(lonDelta(p.lon,center.lon)));maxLat=Math.max(maxLat,Math.abs(p.lat-center.lat));}
 const verticalFactor=Math.max(.65,w/Math.max(320,h)),padding=tight?1.78:2.12,minSpan=tight?10:14;
 const span=Math.min(360,Math.max(minSpan,maxLon*padding,maxLat*padding*verticalFactor,center.span&&pts.length<=1?Math.min(center.span,tight?18:28):0));
 geoState.targetLat=center.lat;geoState.targetLon=center.lon;geoState.targetSpan=span;
 geoAutoSpan=span;geoZoomPct=50;syncZoomControls();
 geoLabel.textContent=n.label+" · "+(center.place||"centro geografico")+" · rete "+pts.length+" nodi";
}
function moveGeo(n,tight=false){fitGeoNetwork(n,tight);}
function paintGeo(dt=16.7){
 if(!earthMap)return;
 const g=geoState,moveK=1-Math.exp(-dt/92),zoomK=1-Math.exp(-dt/112);
 const dl=lonDelta(g.targetLon,g.lon);
 g.lon+=dl*moveK;g.lat+=(g.targetLat-g.lat)*moveK;g.span+=(g.targetSpan-g.span)*zoomK;
 if(Math.abs(dl)<.0005)g.lon=g.targetLon;if(Math.abs(g.targetLat-g.lat)<.0005)g.lat=g.targetLat;if(Math.abs(g.targetSpan-g.span)<.001)g.span=g.targetSpan;
 const world=mapBase()*360/Math.max(6,g.span),height=world/2;
 const centerX=(g.lon+180)/360*world,centerY=(90-g.lat)/180*height;
 earthMap.style.backgroundSize=world.toFixed(1)+"px "+height.toFixed(1)+"px";
 earthMap.style.backgroundPosition=(w/2-centerX).toFixed(1)+"px "+(h/2-centerY).toFixed(1)+"px";
}
followGeo?.addEventListener("change",()=>{geoState.enabled=followGeo.checked;if(geoState.enabled)fitGeoNetwork(selected);});
function resolveScreenCollisions(points){
 const visible=points.filter(p=>p.node.type!=="geografia"&&visibleNode(p.node));
 if(visible.length<2)return;
 // In una vista continentale o mondiale la geografia prevale:
 // nessuna "esplosione" grafica dei nodi lontano dalla loro città.
 if(geoState.span>70){resetAutoLayout();return;}
 const cellSize=48;
 const world=mapBase()*360/Math.max(6,geoState.span),height=world/2;
 // Scostamento massimo espresso in gradi, poi convertito in pixel.
 // Serve solo a distinguere nodi quasi coincidenti senza falsarne la posizione.
 const maxAutoX=clamp(world*(.45/360),2,18);
 const maxAutoY=clamp(height*(.35/180),2,16);
 const push=(p,dx,dy)=>{
  if(p.node.manualPinned||p.node===selected)return;
  const oldX=p.node.autoDx||0,oldY=p.node.autoDy||0;
  const nextX=clamp(oldX+dx,-maxAutoX,maxAutoX);
  const nextY=clamp(oldY+dy,-maxAutoY,maxAutoY);
  p.node.autoDx=nextX;p.node.autoDy=nextY;
  // Applica solo la parte consentita: il limite vale anche sul fotogramma corrente.
  p.x+=nextX-oldX;p.y+=nextY-oldY;
 };
 for(let pass=0;pass<2;pass++){
  const grid=new Map();
  for(const a of visible){
   const gx=Math.floor(a.x/cellSize),gy=Math.floor(a.y/cellSize);
   for(let ox=-1;ox<=1;ox++)for(let oy=-1;oy<=1;oy++){
    const bucket=grid.get((gx+ox)+","+(gy+oy));if(!bucket)continue;
    for(const b of bucket){
     let dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy),min=(a.r||12)+(b.r||12)+7;
     if(d>=min)continue;
     if(d<.01){dx=(stableHash(a.node.id+b.node.id)%2?1:-1);dy=.3;d=Math.hypot(dx,dy);}
     const k=Math.min(7,(min-d)*.42)/d,nx=dx*k,ny=dy*k;
     const aFixed=a.node===selected||a.node.manualPinned,bFixed=b.node===selected||b.node.manualPinned;
     if(aFixed&&bFixed)continue;
     if(aFixed)push(b,-2*nx,-2*ny);
     else if(bFixed)push(a,2*nx,2*ny);
     else{push(a,nx,ny);push(b,-nx,-ny);}
    }
   }
   const key=gx+","+gy;if(!grid.has(key))grid.set(key,[]);grid.get(key).push(a);
  }
 }
}
// Lo spazio effettivo del grafo non coincide con tutto lo schermo:
// testata, lenti, strumenti e scheda devono restare fuori dal suo centro.
function graphStage(){
 const mobile=w<=700;
 const rightPanel=!mobile&&document.body.classList.contains("panel-open")?Math.min(315,w*.85):0;
 const top=mobile?Math.min(211,h*.32):Math.min(232,h*.32);
 const bottomRoom=mobile?(document.body.classList.contains("controls-open")?Math.min(218,h*.29):Math.min(118,h*.20)):Math.min(92,h*.14);
 const left=mobile?17:32,right=Math.max(left+130,w-rightPanel-(mobile?17:32));
 const bottom=Math.max(top+135,h-bottomRoom);
 const cx=(left+right)/2,cy=(top+bottom)/2;
 const base=Math.max(9,Math.min((right-left)*.106,(bottom-top)*.109));
 return {left,right,top,bottom,cx,cy,base};
}
function sxworld(node){
 const g=graphStage();
 let x=node.x-camera.x,y=node.y-camera.y,z=node.z-camera.z;
 const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),si=Math.sin(rotX);
 const rx=x*cy-z*sy,rz=x*sy+z*cy,ry=y*cx-rz*si,depth=y*si+rz*cx;
 const k=9/(16+depth),scale=g.base*zoom*k;
 return {x:g.cx+rx*scale,y:g.cy+ry*scale,scale,depth};
}
function unproject(px,py,depth){
 const g=graphStage(),scale=g.base*zoom*9/(16+depth);
 const rx=(px-g.cx)/scale,ry=(py-g.cy)/scale;
 const cx=Math.cos(rotX),si=Math.sin(rotX),cy=Math.cos(rotY),sy=Math.sin(rotY);
 const yy=ry*cx+depth*si,rz=-ry*si+depth*cx;
 return {x:camera.x+rx*cy+rz*sy,y:camera.y+yy,z:camera.z-rx*sy+rz*cy};
}
function prepare(db){if(!Array.isArray(db.nodes)||!Array.isArray(db.edges))throw Error("Schema non valido");
 const all=db.nodes.filter(n=>n.visible!==0&&n.visible!=="0");
 const anchors=new Map();let i=0;
 for(const n of all){let a=i++*2.399963,rad=8*Math.sqrt((i+.5)/all.length),offset=n.type==="periodo"?6:n.type==="ambito"?5:rad;
  const item={...n,x:Math.cos(a)*offset+(rnd()-.5)*2,y:Math.sin(a)*offset+(rnd()-.5)*2,z:(rnd()-.5)*9,vx:0,vy:0,vz:0,autoDx:0,autoDy:0,explodeDx:0,explodeDy:0,radius:n.type==="compositore"||n.type==="persona"?5:n.type==="geografia"?8:11};
  nodes.push(item);byId.set(item.id,item);if(item.type==="periodo")anchors.set(item.id,item);}
 for(const n of nodes){if(n.type!=="compositore"&&!(n.type==="persona"&&n.music_relevance))continue;const period=db.edges.find(e=>e.source===n.id&&byId.get(e.target)?.type==="periodo");if(period){const a=anchors.get(period.target);if(a){n.x=a.x+(rnd()-.5)*5;n.y=a.y+(rnd()-.5)*5;n.z=a.z+(rnd()-.5)*5;}}}
 edges=db.edges.filter(e=>byId.has(e.source)&&byId.has(e.target)).map(e=>({...e,a:byId.get(e.source),b:byId.get(e.target)}));
 videos=db.videos||[];videoLinks=db.video_nodes||[];
 const lenses=db.lenses||{};lensGroups=lenses.groups||[];
 lensEdges=(lenses.relations||[]).filter(e=>byId.has(e.source)&&byId.has(e.target)&&e.sources?.length).map(e=>({...e,weight:2,a:byId.get(e.source),b:byId.get(e.target)}));
  historySchoolEdges=[...edges,...lensEdges.filter(e=>e.group==="scuole")];
 geoCache.clear();activeEdgesCacheKey="";activeEdgesCache=[];selectedNeighborCacheKey="";selectedNeighborCache=new Set();selectedDepthCacheKey="";selectedDepthCache=new Map();
 freeNodes=nodes.filter(n=>!geoFromNode(n));const freeIds=new Set(freeNodes.map(n=>n.id));freeEdges=edges.filter(e=>freeIds.has(e.source)&&freeIds.has(e.target));
 const composerCount=nodes.filter(n=>n.type==="compositore").length;
 status.textContent=composerCount+" compositori · "+edges.length+" relazioni musicali · doppio clic per esplorare";
 zoom=1;geoZoomPct=0;geoAutoSpan=360;geoState.lat=20;geoState.lon=0;geoState.span=360;geoState.targetLat=20;geoState.targetLon=0;geoState.targetSpan=360;
 resize();syncLensControls();syncCategoryControls();syncZoomControls();
}
function physics(){
 if(!freeNodes.length)return;
 for(const n of freeNodes){n.vx+=-n.x*.00021;n.vy+=-n.y*.00021;n.vz+=-n.z*.00021;}
 for(const e of freeEdges){const a=e.a,b=e.b;let dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,d=Math.hypot(dx,dy,dz)||.001,preferred=(a.type==="compositore"&&b.type==="compositore")?2.8:3.6;let f=clamp((d-preferred)*.0025*(e.weight||1),-.035,.035)/d;dx*=f;dy*=f;dz*=f;a.vx+=dx;a.vy+=dy;a.vz+=dz;b.vx-=dx;b.vy-=dy;b.vz-=dz;}
 for(let i=0;i<freeNodes.length;i++){let a=freeNodes[i];for(let j=i+1;j<freeNodes.length;j++){let b=freeNodes[j],dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,d2=dx*dx+dy*dy+dz*dz;if(d2>5.5||d2<.00001)continue;let f=.008/(d2+.2);a.vx-=dx*f;a.vy-=dy*f;a.vz-=dz*f;b.vx+=dx*f;b.vy+=dy*f;b.vz+=dz*f;}}
 for(const n of freeNodes){if((drag&&drag.node===n)||n.manualPinned){n.vx=n.vy=n.vz=0;continue;}n.vx=clamp(n.vx*.89,-.12,.12);n.vy=clamp(n.vy*.89,-.12,.12);n.vz=clamp(n.vz*.89,-.12,.12);n.x+=n.vx;n.y+=n.vy;n.z+=n.vz;}
}
function activeLensKey(){return [...activeLenses].sort().join("|");}
function currentEdges(){
 const key=activeLensKey();if(key===activeEdgesCacheKey)return activeEdgesCache;
 const all=[];if(activeLenses.has("musica"))all.push(...historySchoolEdges);
 for(const id of activeLenses)if(id!=="musica")all.push(...displayRelations(id));
 activeEdgesCacheKey=key;activeEdgesCache=dedupeEdges(all);selectedNeighborCacheKey="";selectedDepthCacheKey="";return activeEdgesCache;
}
function nodeEligibleForDepth(n){
 if(!n||n.type==="geografia"||n.type==="periodo")return false;
 if(!categoryVisible(n))return false;
 if(n.type==="persona"&&!n.music_relevance&&!hasNonMusicLens()&&n!==selected)return false;
 return true;
}
function selectedDepths(maxDepth=4){
 if(!selected)return null;
 const key=selected.id+"|"+activeLensKey()+"|"+[...activeCategories].sort().join(",")+"|"+maxDepth;
 if(key===selectedDepthCacheKey)return selectedDepthCache;
 const adj=new Map();
 for(const e of currentEdges()){
  if(!adj.has(e.source))adj.set(e.source,[]);
  if(!adj.has(e.target))adj.set(e.target,[]);
  adj.get(e.source).push(e.target);adj.get(e.target).push(e.source);
 }
 const depth=new Map([[selected.id,0]]),queue=[selected.id];
 for(let qi=0;qi<queue.length;qi++){
  const id=queue[qi],d=depth.get(id);
  if(d>=maxDepth)continue;
  for(const next of adj.get(id)||[]){
   if(depth.has(next))continue;
   const n=byId.get(next);if(!nodeEligibleForDepth(n))continue;
   depth.set(next,d+1);queue.push(next);
  }
 }
 selectedDepthCacheKey=key;selectedDepthCache=depth;return depth;
}
function selectedNeighborIds(){
 if(!selected)return null;
 const key=selected.id+"|"+activeLensKey();if(key===selectedNeighborCacheKey)return selectedNeighborCache;
 const depth=selectedDepths(3),out=new Set();
 for(const [id,d] of depth)if(d<=1)out.add(id);
 selectedNeighborCacheKey=key;selectedNeighborCache=out;return out;
}
function visibleNode(n){
 if(!nodeEligibleForDepth(n))return false;
 if(selected)return selectedDepths(3).has(n.id);
 if((n.type==="corrente"||n.type==="ambito"||n.type==="persona")&&!geoFromNode(n))return false;
 return true;
}
function nodeDepth(n){
 if(!selected)return 0;
 return selectedDepths(3).get(n.id)??99;
}
function lineHit(pt){
 let hit=null,best=12;
 for(const e of lineHits){for(let i=0;i<=16;i++){
  const t=i/16,q=1-t,x=q*q*e.x1+2*q*t*e.cx+t*t*e.x2,y=q*q*e.y1+2*q*t*e.cy+t*t*e.y2;
  const dist=Math.hypot(pt.x-x,pt.y-y);if(dist<best){best=dist;hit=e.edge;}
 }}return hit;
}
function showRelation(e){
 if(!selected){selected=e.a;focus=e.a;moveGeo(e.a);}
 populate(selected);
 const dst=document.getElementById("panelContent"),box=document.createElement("section");
 box.className="lens-explanation";
 const h=document.createElement("h3");h.textContent="Perché sono collegati?";
 const names=document.createElement("strong");{const s=relationStyle(e);names.textContent=e.a.label+(s.arrow?" → ":" ↔ ")+e.b.label+" · "+relationVerb(e);}
 const p=document.createElement("p");p.textContent=e.note||"Relazione da approfondire.";
 box.append(h,names,p);
 const foot=document.createElement("div");foot.className="lens-sources";
 for(const [i,url] of (e.sources||[]).entries()){if(!/^https:\/\//.test(url))continue;
  const link=document.createElement("a");link.href=url;link.target="_blank";link.rel="noopener noreferrer";link.textContent="Fonte "+(i+1)+" ↗";foot.append(link);
 }
 if(foot.childElementCount)box.append(foot);
 else{const note=document.createElement("p");note.textContent="Fonti in revisione.";box.append(note);}
 dst.prepend(box);setPanel(true);
}

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

function draw(ts=performance.now()){const dt=lastDrawTime?Math.min(60,Math.max(4,ts-lastDrawTime)):16.7;lastDrawTime=ts;frame++;physics();
 ctx.clearRect(0,0,w,h);paintGeo(dt);
 const spanForSize=Math.max(6,geoState.span);
 const composerBase=spanForSize>=260?4.2:spanForSize>=150?5.2:spanForSize>=80?6.8:spanForSize>=35?8.8:11;
 const contextBase=spanForSize>=260?5.2:spanForSize>=150?6.2:spanForSize>=80?8:spanForSize>=35?10.5:14;
 screen=nodes.map(n=>{
  let p=geoScreenPoint(n,true)||contextScreenPoint(n,true)||sxworld(n);p.node=n;
  const base=(n.type==="compositore"||n.type==="persona")?composerBase:contextBase;
  p.r=clamp(base*(n===selected?1.55:1),3.8,25);
  return p;
 });
 resolveScreenCollisions(screen);
 const map=new Map(screen.map(p=>[p.node.id,p]));
 const neighbors=new Set(),activeEdges=currentEdges(),lensFocus=selected||hover,lineHits=[];
 const depths=selected?selectedDepths(3):null;
 if(lensFocus){neighbors.add(lensFocus.id);for(const e of activeEdges){if(e.source===lensFocus.id)neighbors.add(e.target);if(e.target===lensFocus.id)neighbors.add(e.source);}}
 for(const e of activeEdges){
  const a=map.get(e.source),b=map.get(e.target);
  if(!a||!b||!visibleNode(a.node)||!visibleNode(b.node))continue;
  let edgeDepth=1,direct=false;
  if(selected){
   const da=depths.get(e.source),db=depths.get(e.target);
   if(da==null||db==null)continue;
   edgeDepth=Math.max(da,db);
   if(Math.abs(da-db)>1||edgeDepth>3)continue;
   direct=da===0||db===0;
  }else{
   if(!lensFocus)continue;
   direct=e.source===lensFocus.id||e.target===lensFocus.id;
   if(!direct)continue;
  }
  const style=relationStyle(e);
  const edgeAlpha=selected?({1:.94,2:.55,3:.20}[edgeDepth]||0):.94;
  ctx.globalAlpha=edgeAlpha;ctx.lineWidth=selected?({1:2.7,2:1.8,3:1.05}[edgeDepth]||.8):2.7;
  const path=ctx.createLinearGradient(a.x,a.y,b.x,b.y);
  path.addColorStop(0,style.from);path.addColorStop(1,style.to);ctx.strokeStyle=path;
  const bend=Math.min(34,Math.hypot(b.x-a.x,b.y-a.y)*.075);
  const cx=(a.x+b.x)*.5+bend*.32,cy=(a.y+b.y)*.5-bend;
  ctx.beginPath();ctx.moveTo(a.x,a.y);
  if(e.group==="influenze"&&/^(eredita|affinita|antecedente|tradizione)/.test(e.kind||""))ctx.setLineDash([6,5]);
  ctx.quadraticCurveTo(cx,cy,b.x,b.y);ctx.stroke();ctx.setLineDash([]);
  if(!selected||edgeDepth<=1)lineHits.push({edge:e,x1:a.x,y1:a.y,x2:b.x,y2:b.y,cx,cy});
  if(style.arrow&&(!selected||edgeDepth<=3)){
   const t=.77,q=1-t,px=q*q*a.x+2*q*t*cx+t*t*b.x,py=q*q*a.y+2*q*t*cy+t*t*b.y;
   const dx=2*q*(cx-a.x)+2*t*(b.x-cx),dy=2*q*(cy-a.y)+2*t*(b.y-cy),ang=Math.atan2(dy,dx);
   ctx.save();ctx.globalAlpha=selected?Math.min(.92,edgeAlpha*1.15):.98;ctx.fillStyle=style.to;ctx.beginPath();
   ctx.moveTo(px+8*Math.cos(ang),py+8*Math.sin(ang));
   ctx.lineTo(px-6*Math.cos(ang-.5),py-6*Math.sin(ang-.5));
   ctx.lineTo(px-6*Math.cos(ang+.5),py-6*Math.sin(ang+.5));ctx.closePath();ctx.fill();ctx.restore();
  }
 }
 ctx.globalAlpha=1;
 const drawable=screen.filter(p=>p.depth>-14&&visibleNode(p.node)).sort((a,b)=>{
  if(a.node===selected)return 1;if(b.node===selected)return -1;
  const ac=selected&&neighbors.has(a.node.id)?1:0,bc=selected&&neighbors.has(b.node.id)?1:0;
  return ac-bc||b.depth-a.depth;
 });
 hitOrder=drawable;
 for(const p of drawable){
  const n=p.node,depth=nodeDepth(n),related=selected&&depth<=1;
  const highlight=n===selected||(n===hover)||(searchText.length>1&&matchesSearch(n,searchText));
  const depthAlpha=!selected?1:({0:1,1:1,2:.55,3:.20}[depth]||0);
  ctx.globalAlpha=highlight?1:depthAlpha;
  const rad=highlight?Math.max(p.r*1.2,n===selected?13:p.r):p.r;
  p.hitRadius=Math.max(8,rad);
  drawSphere(p.x,p.y,rad,COLORS[n.type]||"#aaaaaa",Boolean(highlight),Boolean(related&&n!==selected));
  const isLabel=Boolean(
   selected
    ? (showAllLabels||n===selected||n===hover||(searchText.length>1&&matchesSearch(n,searchText)))
    : (showAllLabels||highlight||n.type==="periodo")
  );
  if(isLabel){
   ctx.font=(highlight?"bold 13px":"11px")+" system-ui";
   ctx.textAlign="center";ctx.textBaseline="bottom";ctx.lineWidth=3;
   ctx.strokeStyle="#071321";ctx.strokeText(n.label,p.x,p.y-rad-9);
   const labelAlpha=selected?Math.max(.32,depthAlpha):1;
   ctx.fillStyle=highlight?"#fff4d9":"rgba(240,242,247,"+labelAlpha.toFixed(2)+")";
   ctx.fillText(n.label,p.x,p.y-rad-9);
  }
 }

 ctx.globalAlpha=1;requestAnimationFrame(draw);}
function linked(n){return currentEdges().filter(e=>e.source===n.id||e.target===n.id).map(e=>({e,n:e.a===n?e.b:e.a})).sort((a,b)=>(b.e.weight||1)-(a.e.weight||1));}
function periodsFor(n){
 if(!n)return [];
 if(n.type==="periodo")return [{node:n,weight:99,kind:"periodo"}];
 const rows=[];
 for(const e of edges){
  if(e.source!==n.id&&e.target!==n.id)continue;
  const other=byId.get(e.source===n.id?e.target:e.source);
  if(other?.type!=="periodo")continue;
  rows.push({node:other,weight:Number(e.weight)||1,kind:e.kind||""});
 }
 return rows.sort((a,b)=>{
  const pa=/^appartenenza$/.test(a.kind)?2:/appartenenza/.test(a.kind)?1:0;
  const pb=/^appartenenza$/.test(b.kind)?2:/appartenenza/.test(b.kind)?1:0;
  return pb-pa||b.weight-a.weight||a.node.label.localeCompare(b.node.label,"it");
 });
}
function updatePeriodContext(n){
 if(!periodContext)return;
 const periods=periodsFor(n);
 if(!periods.length){periodContext.textContent="";periodContext.hidden=true;return;}
 periodContext.textContent=periods[0].node.label.toUpperCase();
 periodContext.hidden=false;
 periodContext.title=periods.length>1?"Altri contesti: "+periods.slice(1).map(x=>x.node.label).join(" · "):periods[0].node.label;
}
function focusOn(n,openPanel=true,tight=false){
 clearExplodeLayout();
 if(selected!==n){search.value="";searchText="";centerSearch.disabled=true;resetAutoLayout();}
 selected=n;selectedNeighborCacheKey="";selectedDepthCacheKey="";n.manualDx=0;n.manualDy=0;n.manualPinned=false;n.autoDx=0;n.autoDy=0;
 if(explodeBtn)explodeBtn.disabled=false;
 updatePeriodContext(n);
 const gp=geoFromNode(n);focus=gp?null:n;moveGeo(n,tight);
 status.textContent=n.label+" · "+linked(n).length+" connessioni · "+activeLensLabel();
 populate(n);if(openPanel)setPanel(true);
}
function setPanel(open){document.body.classList.toggle("panel-open",open);tab.textContent=open?"▶ Chiudi":"◀ Esplora";tab.setAttribute("aria-expanded",String(open));}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function populate(n){
 document.getElementById("panelTitle").textContent=n.label;
 document.getElementById("panelSub").textContent=n.description||({compositore:"Compositore",periodo:"Periodo storico",corrente:"Corrente artistica",ambito:"Ambito trasversale",geografia:"Area geografica",persona:"Figura storica"}[n.type]||"");
 const dst=document.getElementById("panelContent");dst.replaceChildren();
 if(n.aliases?.length){
  const names=document.createElement("details");names.className="name-variants";
  const title=document.createElement("summary");title.textContent="Altri nomi e grafie · "+n.aliases.length;names.append(title);
  const variants=document.createElement("p");variants.className="small";variants.textContent=n.aliases.join(" · ");names.append(variants);
  if(n.name_review?.status==="verificato"&&n.name_review.sources?.length){
   const source=document.createElement("a");source.href=n.name_review.sources[0];source.target="_blank";source.rel="noopener noreferrer";source.textContent="Fonte sulle grafie ↗";names.append(source);
  }else{const note=document.createElement("p");note.className="small";note.textContent="Varianti in revisione bibliografica.";names.append(note);}
  dst.append(names);
 }
 const conn=linked(n);
 const lensIntro=document.createElement("section");lensIntro.className="lens-panel-intro";
 const lensTitle=document.createElement("strong");lensTitle.textContent="Lenti attive: "+activeLensLabel();
 const lensP=document.createElement("p");lensP.textContent="Puoi combinare più lenti: colori e frecce mantengono distinto il significato dei rapporti.";
 lensIntro.append(lensTitle,lensP);dst.append(lensIntro);
 const shortcuts=document.createElement("nav");shortcuts.className="lens-shortcuts";shortcuts.setAttribute("aria-label","Lenti disponibili per "+n.label);
 for(const g of EXPLORATION_LENSES){
  const count=(g.id==="musica"?historySchoolEdges:displayRelations(g.id)).filter(e=>e.source===n.id||e.target===n.id).length;
  const button=document.createElement("button");button.type="button";button.classList.toggle("is-active",activeLenses.has(g.id));
  button.setAttribute("aria-pressed",String(activeLenses.has(g.id)));button.textContent=g.label+" · ";
  const number=document.createElement("span");number.className="num";number.textContent=count;button.append(number);
  button.addEventListener("click",()=>toggleLens(g.id));shortcuts.append(button);
 }
 dst.append(shortcuts);
 const box=document.createElement("section");box.className="lens-relations";
 const head=document.createElement("h3");head.textContent="Relazioni nelle lenti attive · "+conn.length;box.append(head);
 if(!conn.length){const p=document.createElement("p");p.className="small";p.textContent="Nessun legame documentato con i filtri attuali: non significa che non esistesse.";box.append(p);}
 for(const {e,n:other} of conn){
  const item=document.createElement("article");item.className="lens-relation-item";
  const b=document.createElement("button");b.type="button";b.textContent=other.label+" ↗";b.title="Segui il collegamento";b.addEventListener("click",()=>focusOn(other,true));
  const kind=document.createElement("span");kind.className="lens-relation-kind";kind.textContent=(n.id===e.source?e.forward:e.reverse)||e.kind||"relazione";
  const p=document.createElement("p");p.textContent=e.note||"Relazione documentata.";item.append(b,kind,p);
  const why=document.createElement("button");why.type="button";why.className="lens-why";why.textContent="Perché sono collegati? · fonti ↗";why.addEventListener("click",()=>showRelation(e));item.append(why);box.append(item);
 }dst.append(box);
 const relatedMedia=[...new Map(videoLinks.filter(v=>v.node_id===n.id||v.node===n.id).map(link=>videos.find(v=>v.id===(link.video_id||link.video))).filter(Boolean).map(v=>[v.id,v])).values()];
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
   const original=media.source_bookmarks||{};
   const entries=Object.entries(original);
   if(entries.length){
    const references=document.createElement("div");references.className="source-bookmarks";
    for(const [slug,url] of entries){
      const toPage=document.createElement("a");toPage.href=url;toPage.className="source-bookmark";
      toPage.textContent="↳ Vai alla pagina "+slug.charAt(0).toUpperCase()+slug.slice(1);
      toPage.title="Vai alla pagina "+slug+" nel punto dedicato a questo ascolto";
      references.append(toPage);
    }box.append(references);
   }
   dst.append(box);
 }
 const group=document.createElement("details");group.className="related-list";group.open=!relatedMedia.length;
 const summary=document.createElement("summary");summary.textContent="Connessioni visibili · "+conn.length;group.append(summary);
 const ul=document.createElement("ul");for(const row of conn.slice(0,45)){const li=document.createElement("li"),button=document.createElement("button");button.textContent=row.n.label;button.onclick=()=>focusOn(row.n,false);li.append(button);ul.append(li);}group.append(ul);
 if(conn.length>45){const p=document.createElement("p");p.className="small";p.textContent="Altre "+(conn.length-45)+" connessioni esplorabili nella rete.";group.append(p);}
 dst.append(group);
}
function pointer(e){const r=canvas.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};}
function hit(pt){
 for(let i=hitOrder.length-1;i>=0;i--){const p=hitOrder[i];if(!visibleNode(p.node))continue;if(Math.hypot(p.x-pt.x,p.y-pt.y)<=p.hitRadius)return p;}return null;
}
canvas.addEventListener("pointerleave",()=>{
 if(!drag){hover=null;canvas.style.cursor="grab";if(relationTooltip)relationTooltip.hidden=true;}
});
canvas.addEventListener("pointerdown",e=>{
 if(e.button!==0)return;const pt=pointer(e),p=hit(pt);
 drag={node:p?.node||null,relation:p?null:lineHit(pt),x:pt.x,y:pt.y,lastX:pt.x,lastY:pt.y,moved:false};
 canvas.setPointerCapture(e.pointerId);canvas.classList.add("dragging");
});
canvas.addEventListener("pointermove",e=>{
 const pt=pointer(e);
 if(!drag){
  hover=hit(pt)?.node||null;const edge=!hover?lineHit(pt):null;canvas.style.cursor=hover||edge?"pointer":"grab";
  if(relationTooltip){relationTooltip.hidden=!edge;if(edge){const s=relationStyle(edge);relationTooltip.textContent=edge.a.label+(s.arrow?" → ":" ↔ ")+edge.b.label+" · "+relationVerb(edge);relationTooltip.style.left=Math.max(0,Math.min(pt.x+16,w-285))+"px";relationTooltip.style.top=Math.max(0,Math.min(pt.y+16,h-65))+"px";}}
  return;
 }
 const dx=pt.x-drag.lastX,dy=pt.y-drag.lastY;if(Math.hypot(pt.x-drag.x,pt.y-drag.y)>4)drag.moved=true;
 drag.lastX=pt.x;drag.lastY=pt.y;
 if(drag.node){
  const base=geoScreenPoint(drag.node,false)||contextScreenPoint(drag.node,false);
  if(base){drag.node.manualDx=pt.x-base.x;drag.node.manualDy=pt.y-base.y;drag.node.manualPinned=true;}
  else{const current=screen.find(p=>p.node===drag.node),pos=unproject(pt.x,pt.y,current?.depth||0);Object.assign(drag.node,pos);drag.node.manualPinned=true;}
  drag.node.vx=drag.node.vy=drag.node.vz=0;
 }else if(!drag.relation){
  const world=mapBase()*360/Math.max(6,geoState.span);
  geoState.lon-=dx/world*360;geoState.lat+=dy/world*360;geoState.lat=clamp(geoState.lat,-80,80);
  geoState.targetLon=geoState.lon;geoState.targetLat=geoState.lat;
 }
});
function release(){if(!drag)return;const d=drag;drag=null;canvas.classList.remove("dragging");if(d.relation&&!d.moved)showRelation(d.relation);}
canvas.addEventListener("pointerup",release);canvas.addEventListener("pointercancel",release);
canvas.addEventListener("dblclick",e=>{const p=hit(pointer(e));if(p){e.preventDefault();focusOn(p.node,true);}});
function syncZoomControls(){
 const pct=Math.round(geoZoomPct);
 zoomSlider.value=String(pct);zoomValue.textContent=pct+"%";
 zoomSlider.setAttribute("aria-valuetext",pct+" per cento");
 zoomSlider.disabled=false;
 zoomIn.disabled=pct>=100;zoomOut.disabled=pct<=0;
}
function setZoomPct(next){
 geoZoomPct=clamp(Number(next)||0,0,100);
 clearExplodeLayout();resetAutoLayout();
 if(selected){
  const anchor=geoFromNode(selected);
  if(anchor){
   if(geoZoomPct<=50){
    const t=geoZoomPct/50;
    geoState.targetLat=20+(anchor.lat-20)*t;
    geoState.targetLon=lonDelta(anchor.lon,0)*t;
    geoState.targetSpan=360+(geoAutoSpan-360)*t;
   }else{
    const t=(geoZoomPct-50)/50;
    geoState.targetLat=anchor.lat;geoState.targetLon=anchor.lon;
    geoState.targetSpan=geoAutoSpan+(6-geoAutoSpan)*t;
   }
  }
 }else{
  const t=geoZoomPct/100;
  geoState.targetLat=geoState.lat;geoState.targetLon=geoState.lon;
  geoState.targetSpan=360+(30-360)*t;
 }
 syncZoomControls();
}
zoomIn.addEventListener("click",e=>{e.preventDefault();setZoomPct(geoZoomPct+10);});
zoomOut.addEventListener("click",e=>{e.preventDefault();setZoomPct(geoZoomPct-10);});
zoomSlider.addEventListener("input",()=>setZoomPct(Number(zoomSlider.value)));
syncZoomControls();
canvas.addEventListener("wheel",e=>{
 e.preventDefault();setZoomPct(geoZoomPct-e.deltaY*.035);
},{passive:false});

tab.addEventListener("click",()=>setPanel(!document.body.classList.contains("panel-open")));
function centerFirstSearchResult(){
 searchText=normSearch(search.value);
 const n=findSearchResults(searchText)[0];
 if(!n){centerSearch.disabled=true;status.textContent="Nessuna corrispondenza da centrare";return;}
 focusOn(n,true,true);search.blur();
 centerSearch.disabled=!findSearchResults(normSearch(search.value)).length;
}
search.addEventListener("input",()=>{
 searchText=normSearch(search.value);
 const results=findSearchResults(searchText);
 centerSearch.disabled=!results.length;
 if(searchText)status.textContent=results.length+" corrispondenze · "+(results[0]?results[0].label+" · tocca ◎ Centra oppure premi Invio":"nessuna corrispondenza");
});
search.addEventListener("keydown",e=>{if(e.key!=="Enter")return;e.preventDefault();centerFirstSearchResult();});
centerSearch.addEventListener("click",centerFirstSearchResult);
function syncCategoryControls(){categoryChoices?.querySelectorAll("input[data-category]").forEach(i=>{i.checked=activeCategories.has(i.value);});}
function syncLensControls(){lensChoices?.querySelectorAll("input[data-lens]").forEach(i=>{i.checked=activeLenses.has(i.value);});}
function setLensState(id,enabled){
 if(enabled)activeLenses.add(id);else activeLenses.delete(id);
 activeEdgesCacheKey="";selectedNeighborCacheKey="";selectedDepthCacheKey="";clearExplodeLayout();resetAutoLayout();
 syncLensControls();if(relationTooltip)relationTooltip.hidden=true;if(selected){fitGeoNetwork(selected);populate(selected);}
 status.textContent=(selected?selected.label+" · "+linked(selected).length+" relazioni · ":"")+"Lenti: "+activeLensLabel();
}
function toggleLens(id){setLensState(id,!activeLenses.has(id));}
lensChoices?.addEventListener("change",e=>{
 const input=e.target.closest("input[data-lens]");if(!input)return;
 setLensState(input.value,input.checked);
});
categoryChoices?.addEventListener("change",e=>{const input=e.target.closest("input[data-category]");if(!input)return;if(input.checked)activeCategories.add(input.value);else activeCategories.delete(input.value);if(!activeCategories.size){activeCategories.add("compositore");syncCategoryControls();}selectedNeighborCacheKey="";selectedDepthCacheKey="";clearExplodeLayout();resetAutoLayout();if(selected)fitGeoNetwork(selected);});
moreControls?.addEventListener("click",()=>{
 const open=document.body.classList.toggle("controls-open");
 moreControls.setAttribute("aria-expanded",String(open));
 moreControls.textContent=open?"− Meno":"☷ Opzioni";
});

explodeBtn?.addEventListener("click",()=>explodeNetwork());
labels.addEventListener("click",()=>{showAllLabels=!showAllLabels;labels.textContent=showAllLabels?"Etichette: tutte":"Etichette: vicine";});
reset.addEventListener("click",()=>{
 selected=null;focus=null;camera={x:0,y:0,z:0};rotX=-.12;rotY=.15;geoAutoSpan=360;geoZoomPct=0;zoom=1;syncZoomControls();
 geoState.targetLat=20;geoState.targetLon=0;geoState.targetSpan=360;geoLabel.textContent="Mondo · panoramica";if(periodContext){periodContext.textContent="";periodContext.hidden=true;}
 search.value="";searchText="";activeLenses.clear();activeLenses.add("musica");
 activeCategories.clear();activeCategories.add("compositore");
 syncLensControls();syncCategoryControls();
 for(const n of nodes){n.manualDx=0;n.manualDy=0;n.manualPinned=false;n.autoDx=0;n.autoDy=0;n.explodeDx=0;n.explodeDy=0;}
 explodeActive=false;if(explodeBtn){explodeBtn.disabled=true;explodeBtn.textContent="✦ Esplodi";}
 document.body.classList.remove("controls-open");if(moreControls){moreControls.setAttribute("aria-expanded","false");moreControls.textContent="☷ Opzioni";}
 if(lensHelp)lensHelp.textContent="Puoi attivare più lenti contemporaneamente. Doppio clic su un nodo per centrarlo.";
 if(relationTooltip)relationTooltip.hidden=true;setPanel(false);status.textContent=nodes.filter(n=>n.type==="compositore").length+" compositori · doppio clic per esplorare";
});
window.addEventListener("resize",resize);
window.addEventListener("pageshow",()=>{
 if(!selected){
  zoom=1;geoZoomPct=0;geoAutoSpan=360;
  geoState.lat=20;geoState.lon=0;geoState.span=360;
  geoState.targetLat=20;geoState.targetLon=0;geoState.targetSpan=360;
  syncZoomControls();
 }
});
Promise.all([fetch("database/grafo.json",{cache:"no-cache"}),fetch("database/video.json",{cache:"no-cache"}),fetch("database/relazioni.json",{cache:"no-cache"})]).then(async responses=>{if(!responses[0].ok)throw Error("HTTP database "+responses[0].status);const db=await responses[0].json();const media=responses[1].ok?await responses[1].json():{videos:[],video_nodes:[]};db.videos=media.videos||[];db.video_nodes=media.video_nodes||[];if(!responses[2].ok)throw Error("HTTP lenti "+responses[2].status);db.lenses=await responses[2].json();return db;}).then(db=>{prepare(db);requestAnimationFrame(draw);}).catch(e=>{document.body.classList.add("error");status.textContent="Errore caricamento: "+e.message;console.error(e);});
})();