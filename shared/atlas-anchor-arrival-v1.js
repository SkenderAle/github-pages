/* Musurgia Mundi — ancore esatte: clic locali e arrivo da altre pagine.
   Non modifica gli href. Evita i menu che gestiscono già il salto diretto. */
(()=>{"use strict";
 const barSelector=".atlas-autonav, .nav-wrap, nav.main, nav.site-nav, nav[aria-label='Navigazione']";

 // Menu narrativo: sempre prima della testata figurativa.
 function setupTopNavigation(){
  const hero=document.querySelector("header.hero, header.masthead");if(!hero)return;
  const bar=document.querySelector(".atlas-autonav");
  const wrap=document.querySelector(".nav-wrap");
  const detail=Array.from(document.querySelectorAll("div.nav")).find(el=>el.querySelector("nav"));
  const plain=document.querySelector("nav.main, nav.nav, nav[aria-label='Navigazione'], nav[aria-label='Navigazione audioteca'], nav[aria-label='Esplora le sezioni']");
  const original=bar||wrap||detail||plain;
  if(!original||original.contains(hero))return;
  if(original.classList.contains("atlas-autonav")||original.querySelector("details")){
   hero.parentNode.insertBefore(original,hero);return;
  }
  const nav=original.matches("nav")?original:original.querySelector("nav");if(!nav)return;
  const links=Array.from(nav.querySelectorAll("a[href]"));if(!links.length)return;
  const css=document.createElement("link");css.rel="stylesheet";
  css.href=new URL("atlas-autonav-v1.css",document.currentScript.src).href;
  if(!document.querySelector('link[href*="atlas-autonav-v1.css"]'))document.head.appendChild(css);
  const top=document.createElement("div");top.className="atlas-autonav atlas-topmenu";
  const path=location.pathname.split("/").filter(Boolean),last=path[path.length-1]||"home";
  top.dataset.atlasPage=last==="index.html"?(path[path.length-2]||"home"):last;
  const home=links.find(a=>["../","../../","./"].includes(a.getAttribute("href")));
  if(home){home.classList.add("atlas-home-link");top.appendChild(home)}
  else{const a=document.createElement("a");a.className="atlas-home-link";a.href="../";a.textContent="⌂ Home";top.appendChild(a)}
  const exclude=new Set(["fonti","bibliografia","catalogo","metodo","crediti"]);
  const chapters=links.filter(a=>(a.getAttribute("href")||"").startsWith("#")&&!exclude.has(a.getAttribute("href").slice(1))).length;
  const button=document.createElement("button");button.type="button";button.className="atlas-menu-toggle";
  button.appendChild(document.createTextNode(chapters?"Esplora "+chapters+" capitoli":"Esplora le sezioni"));
  const arrow=document.createElement("span");arrow.className="atlas-menu-arrow";arrow.setAttribute("aria-hidden","true");arrow.textContent="▾";
  button.appendChild(arrow);top.appendChild(button);
  const panel=document.createElement("nav");panel.id="atlasTopNavigation";panel.setAttribute("aria-label","Indice del percorso");
  button.setAttribute("aria-controls",panel.id);button.setAttribute("aria-haspopup","true");button.setAttribute("aria-expanded","false");
  const other=links.filter(a=>a!==home),half=Math.ceil(other.length/2);
  [other.slice(0,half),other.slice(half)].filter(items=>items.length).forEach((items,i)=>{
   const group=document.createElement("div");group.className="atlas-group";
   const label=document.createElement("strong");label.className="atlas-group-title";label.textContent="Indice · "+(i?"II":"I");
   group.append(label,...items);panel.appendChild(group);
  });
  top.appendChild(panel);
  const context=document.createElement("span");context.className="atlas-menu-context";
  context.textContent="Percorsi di storia della musica";top.appendChild(context);
  original.remove();hero.parentNode.insertBefore(top,hero);
  const toggle=open=>{top.classList.toggle("atlas-menu-open",open);button.setAttribute("aria-expanded",String(open))};
  button.addEventListener("click",()=>toggle(!top.classList.contains("atlas-menu-open")));
  panel.addEventListener("click",event=>{
   const a=event.target.closest("a[href]");if(!a)return;
   toggle(false);const href=a.getAttribute("href")||"";
   if(!href.startsWith("#")||href.length<2)return;
   let id;try{id=decodeURIComponent(href.slice(1))}catch{return}
   if(!document.getElementById(id))return;
   event.preventDefault();event.stopPropagation();history.pushState(null,"",href);
   requestAnimationFrame(()=>requestAnimationFrame(()=>{position(id);requestAnimationFrame(()=>position(id))}));
  });
  document.addEventListener("pointerdown",event=>{if(!top.contains(event.target))toggle(false)});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&top.classList.contains("atlas-menu-open")){toggle(false);button.focus()}});
 }
 setupTopNavigation();
 function offset(){
   const candidates=[...document.querySelectorAll(barSelector)];
   let height=0;
   candidates.forEach(nav=>{
     const cs=getComputedStyle(nav),rect=nav.getBoundingClientRect();
     if((cs.position==="sticky"||cs.position==="fixed")&&rect.top>=-8&&rect.top<15)
       height=Math.max(height,rect.bottom);
   });
   return Math.max(0,height)+18;
 }
 function position(id){
   const el=document.getElementById(id);if(!el)return false;
   const top=Math.max(0,scrollY+el.getBoundingClientRect().top-offset());
   window.scrollTo({top,behavior:"instant"});
   return true;
 }
 function settle(id){
   position(id);
   requestAnimationFrame(()=>requestAnimationFrame(()=>position(id)));
 }
 document.addEventListener("click",event=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const a=event.target.closest('a[href^="#"]');
   if(!a||a.getAttribute("href").length<2||a.hasAttribute("download")||a.getAttribute("role")==="tab")return;
   // Il menu condiviso e quello del Romanticismo calcolano già autonomamente la posizione.
   if(a.closest(".atlas-autonav, .details-menu, #indice .index-grid"))return;
   let id;try{id=decodeURIComponent(a.getAttribute("href").slice(1))}catch{return}
   if(!document.getElementById(id))return;
   event.preventDefault();
   event.stopPropagation();
   history.pushState(null,"","#"+encodeURIComponent(id));
   settle(id);
 },true);
 if(!location.hash||location.hash.length<2)return;
 let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
 let interrupted=false;
 const stop=()=>{interrupted=true};
 ["wheel","touchstart","pointerdown","keydown"].forEach(name=>window.addEventListener(name,stop,{once:true,passive:true}));
 function align(){
   if(interrupted)return;
   let current;try{current=decodeURIComponent(location.hash.slice(1))}catch{return}
   if(current!==id)return;
   position(id);
 }
 function schedule(){if(!interrupted)requestAnimationFrame(()=>requestAnimationFrame(align))}
 schedule();
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",schedule,{once:true});
 if(document.readyState!=="complete")window.addEventListener("load",schedule,{once:true});
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
 window.addEventListener("pageshow",schedule,{once:true});
})();
