/* Musurgia Mundi — ancore esatte: clic locali e arrivo da altre pagine.
   Non modifica gli href. Evita i menu che gestiscono già il salto diretto. */
(()=>{"use strict";
 const barSelector=".atlas-autonav, .nav-wrap, nav.main, nav.site-nav, nav[aria-label='Navigazione']";
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
