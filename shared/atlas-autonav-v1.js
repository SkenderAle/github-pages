/* Menu condiviso: presentazione allineata al Romanticismo; href originali invariati. */
(()=>{"use strict";
 const bars=document.querySelectorAll(".atlas-autonav");
 for(let i=0;i<bars.length;i++){
  const bar=bars[i];
  const button=bar.querySelector(":scope > .atlas-menu-toggle");
  const nav=bar.querySelector(":scope > nav");
  if(!button||!nav)continue;
  const parts=location.pathname.split("/").filter(Boolean);
  const page=parts.length<=1?"home":(parts[parts.length-1]==="index.html"?parts[parts.length-2]||"home":parts[parts.length-1]||"home");
  bar.dataset.atlasPage=page;
  const home=nav.querySelector(".nav-home")||document.createElement("a");
  if(!home.isConnected){home.href="#inizio";home.textContent="⌂ Home";}
  home.classList.add("atlas-home-link");
  bar.insertBefore(home,button);
  const allGroups=Array.from(nav.querySelectorAll(":scope > .nav-row"));
  if(allGroups.length){
   allGroups.forEach((group,index)=>{
    group.classList.add("atlas-group");
    const label=document.createElement("strong");
    label.className="atlas-group-title";
    label.textContent="Indice · "+["I","II","III","IV"][index%4];
    group.prepend(label);
   });
  }else{
   const nodes=Array.from(nav.children).filter(node=>node!==home);
   const breakAt=nodes.findIndex(node=>node.classList&&node.classList.contains("nav-break"));
   nav.replaceChildren();
   let items=nodes.filter(node=>!(node.classList&&node.classList.contains("nav-break")));
   const chunks=[];
   if(page==="home"&&breakAt>=0){
    const before=nodes.slice(0,breakAt).filter(node=>node.matches&&node.matches("a,button"));
    const after=nodes.slice(breakAt+1).filter(node=>node.matches&&node.matches("a,button"));
    chunks.push(before);
    while(after.length)chunks.push(after.splice(0,7));
   }else{
    items=items.filter(node=>node.matches&&node.matches("a,button"));
    while(items.length)chunks.push(items.splice(0,8));
   }
   chunks.forEach((entries,index)=>{
    const group=document.createElement("div");
    group.className="atlas-group";
    const label=document.createElement("strong");
    label.className="atlas-group-title";
    label.textContent=page==="home"?(index===0?"Il progetto":"Percorsi · "+["I","II","III"][index-1]):"Indice · "+["I","II","III","IV"][index%4];
    group.append(label,...entries);
    nav.append(group);
   });
  }
  const count=nav.querySelectorAll('a[href^="#"]').length;
  button.replaceChildren(document.createTextNode(page==="home"?"Esplora l’Atlante":"Esplora "+count+" sezioni"),(()=>{
   const arrow=document.createElement("span");arrow.className="atlas-menu-arrow";arrow.setAttribute("aria-hidden","true");arrow.textContent="▾";return arrow;
  })());
  const context=document.createElement("span");
  context.className="atlas-menu-context";
  context.textContent=page==="home"?"La musica non sta in fila":"Percorsi di storia della musica";
  bar.append(context);
  if(!nav.id)nav.id="atlasNavigationShared"+i;
  button.setAttribute("aria-controls",nav.id);
  button.setAttribute("aria-haspopup","true");
  button.setAttribute("aria-expanded","false");
  function toggle(open){
   bar.classList.toggle("atlas-menu-open",open);
   button.setAttribute("aria-expanded",String(open));
  }
  button.addEventListener("click",()=>toggle(!bar.classList.contains("atlas-menu-open")));
  nav.addEventListener("click",event=>{if(event.target.closest("a[href],button.nav-stop"))toggle(false)});
  document.addEventListener("pointerdown",event=>{if(!bar.contains(event.target))toggle(false)});
  document.addEventListener("keydown",event=>{
   if(event.key==="Escape"&&bar.classList.contains("atlas-menu-open")){toggle(false);button.focus()}
  });
 }
})();
