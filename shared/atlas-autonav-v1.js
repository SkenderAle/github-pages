/* Apertura accessibile al tocco / tastiera del menu condiviso dell'Atlante. */
(()=>{"use strict";
 for(const bar of document.querySelectorAll(".atlas-autonav")){
  const button=bar.querySelector(":scope > .atlas-menu-toggle");
  const nav=bar.querySelector(":scope > nav");
  if(!button||!nav)continue;
  button.setAttribute("aria-controls",nav.id);
  function toggle(open){
   bar.classList.toggle("atlas-menu-open",open);
   button.setAttribute("aria-expanded",String(open));
  }
  button.addEventListener("click",()=>toggle(!bar.classList.contains("atlas-menu-open")));
  nav.addEventListener("click",e=>{
   if(e.target.closest("a[href]"))toggle(false);
  });
  bar.addEventListener("mouseleave",()=>toggle(false));
  bar.addEventListener("focusout",e=>{
   if(!bar.contains(e.relatedTarget))toggle(false);
  });
  document.addEventListener("keydown",e=>{
   if(e.key==="Escape"&&bar.classList.contains("atlas-menu-open")){
    toggle(false);button.focus();
   }
  });
  document.addEventListener("pointerdown",e=>{
   if(!bar.contains(e.target))toggle(false);
  });
 }
})();
