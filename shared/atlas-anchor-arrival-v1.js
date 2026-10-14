/* Musurgia Mundi · allineamento delle ancore raggiunte da un'altra pagina.
   Non modifica href, menu o scorrimento dei clic interni. */
(()=>{"use strict";
 if(!window.location.hash || window.location.hash.length<2)return;
 let id;try{id=decodeURIComponent(window.location.hash.slice(1))}catch{return}
 let interrupted=false,attempt=0;
 const stop=()=>{interrupted=true};
 ["wheel","touchstart","pointerdown","keydown"].forEach(name=>window.addEventListener(name,stop,{once:true,passive:true}));
 function align(){
  if(interrupted||location.hash.slice(1)!==encodeURIComponent(id)&&decodeURIComponent(location.hash.slice(1))!==id)return;
  const el=document.getElementById(id);if(!el)return;
  const nav=document.querySelector(".atlas-autonav, .nav-wrap, nav.main, nav.site-nav, nav[aria-label='Navigazione']");
  let offset=16;
  if(nav){
   const style=getComputedStyle(nav);
   if(style.position==="sticky"||style.position==="fixed"){
    const rect=nav.getBoundingClientRect();
    if(rect.top<12)offset+=Math.max(0,rect.height);
   }
  }
  const pos=Math.max(0,window.scrollY+el.getBoundingClientRect().top-offset);
  if(Math.abs(window.scrollY-pos)>3)window.scrollTo({top:pos,behavior:"instant"});
 }
 // Layout, immagini e font possono spostare le sezioni dopo il primo salto nativo.
 function schedule(){if(interrupted)return;requestAnimationFrame(()=>requestAnimationFrame(align))}
 schedule();
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",schedule,{once:true});
 if(document.readyState!=="complete")window.addEventListener("load",schedule,{once:true});
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
 window.addEventListener("pageshow",schedule,{once:true});
})();
