/* Menu condiviso: presentazione allineata al Romanticismo; href originali invariati. */
(()=>{"use strict";
 const bars=document.querySelectorAll(".atlas-autonav");
 for(let i=0;i<bars.length;i++){
  const bar=bars[i];
  const button=bar.querySelector(":scope > .atlas-menu-toggle");
  const nav=bar.querySelector(":scope > nav");
  if(!button||!nav)continue;
  const parts=location.pathname.split("/").filter(Boolean);
  const isHome=parts.length<=1||(nav.id==="atlasNavigation"&&Boolean(nav.querySelector(".nav-break"))&&Boolean(nav.querySelector('a[href="./atlante3d/"]')));
  const page=isHome?"home":(parts[parts.length-1]==="index.html"?parts[parts.length-2]||"home":parts[parts.length-1]||"home");
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
    // Gruppi editoriali stabili: non dividere i percorsi ogni sette voci.
    // Percorsi III: esclusivamente audioteche effettive.
    // I percorsi storici sul melodramma e sull'opera lirica restano in Percorsi II.
    const order=[
      "melodramma/audioteca/",
      "musica-da-camera/",
      "dalla-sinfonia-alla-rapsodia/"
    ];
    const inAudio=a=>order.some(slug=>(a.getAttribute("href")||"").includes(slug));
    const unique=new Set();
    const audio=after.filter(a=>{
      if(!inAudio(a))return false;
      const href=a.getAttribute("href")||"";
      if(unique.has(href))return false;
      unique.add(href);return true;
    }).sort((a,b)=>{
      const rank=a=>order.findIndex(slug=>(a.getAttribute("href")||"").includes(slug));
      return rank(a)-rank(b);
    });
    const narrative=after.filter(a=>!inAudio(a));
    // Percorsi I: dal Medioevo alla musica da camera; II: percorsi trasversali, compreso il cinema.
    const boundary=narrative.findIndex(a=>(a.getAttribute("href")||"").includes("parola-e-canto/"));
    const first=boundary>=0?narrative.slice(0,boundary):narrative.slice(0,7);
    const second=boundary>=0?narrative.slice(boundary):narrative.slice(7);
    chunks.push(first,second,audio);
   }else{
    items=items.filter(node=>node.matches&&node.matches("a,button"));
    while(items.length)chunks.push(items.splice(0,8));
   }
   chunks.forEach((entries,index)=>{
    const group=document.createElement("div");
    group.className="atlas-group";
    const label=document.createElement("strong");
    label.className="atlas-group-title";
    label.textContent=page==="home"?(index===0?"Il progetto":index===3?"Percorsi · III · Audioteche":"Percorsi · "+["I","II"][index-1]):"Indice · "+["I","II","III","IV"][index%4];
    group.append(label,...entries);
    nav.append(group);
   });
  }
  // Sottoindice gerarchico: sotto ogni collegamento di capitolo, i titoli dei paragrafi interni.
  const indexLinks=[...nav.querySelectorAll('a[href^="#"]')];
  for(const link of indexLinks){
   const id=decodeURIComponent(link.getAttribute('href').slice(1));
   const target=document.getElementById(id);
   if(!target||link.classList.contains('nav-home'))continue;
   const root=target.closest('section,article')||target;
   let candidates=[...root.querySelectorAll('h3,h4')].filter(h=>h!==target&&!h.closest('nav,[hidden],details,aside')&&!(page==='rinascimento'&&h.closest('button,a,.rin-compare,.bridge-final')));
   if(!candidates.length){
    const start=target.closest('section,article')||target;
    let node=start.nextElementSibling;
    while(node&&!node.matches('section,article')){candidates.push(...(node.matches('h3,h4')?[node]:[...node.querySelectorAll('h3,h4')]));node=node.nextElementSibling;}
   }
   if(!candidates.length)continue;
   const details=document.createElement('details');details.className='atlas-subindex';
   const summary=document.createElement('summary');summary.textContent=candidates.length+' paragrafi · apri elenco';details.appendChild(summary);
   let n=0;for(const h of candidates){if(n++>=45)break;let hid=h.id||h.querySelector('[id]')?.id;
    if(!hid){hid='atlas-sub-'+page+'-'+indexLinks.indexOf(link)+'-'+n;h.id=hid;}
    const a=document.createElement('a');a.href='#'+hid;a.textContent=n+' · '+h.textContent.trim().replace(/\s+/g,' ').slice(0,125);details.appendChild(a);
   }
   link.insertAdjacentElement('afterend',details);
  }
  // Le voci principali sono sezioni editoriali, NON capitoli numerati automaticamente.
  // Si conserva la numerazione originale e si evita di trasformare ogni paragrafo in un capitolo.
  const primaryEntries=[...nav.querySelectorAll(':scope > .atlas-group > a[href^="#"]')].filter(a=>!a.classList.contains('nav-sos')&&!a.classList.contains('nav-verifica'));
  button.replaceChildren(document.createTextNode(page==="home"?"Esplora l’Atlante":"Indice · "+primaryEntries.length+" sezioni"),(()=>{
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
  nav.addEventListener("click",event=>{
   const link=event.target.closest("a[href]");
   if(!link){if(event.target.closest("button.nav-stop"))toggle(false);return;}
   const href=link.getAttribute("href")||"";
   if(!href.startsWith("#")||href.length<2){toggle(false);return;}
   const target=document.getElementById(decodeURIComponent(href.slice(1)));
   if(!target){toggle(false);return;}
   event.preventDefault();
   // Il salto nativo con scroll fluido puo' fermarsi prima della sezione,
   // specialmente quando il pannello del menu si chiude durante lo scorrimento.
   toggle(false);
   const go=()=>{
    const offset=bar.getBoundingClientRect().height+18;
    const top=Math.max(0,window.scrollY+target.getBoundingClientRect().top-offset);
    window.scrollTo({top,behavior:"instant"});
   };
   history.pushState(null,"",href);
   requestAnimationFrame(()=>requestAnimationFrame(()=>{
    go();
    // Compensa eventuali riassestamenti del layout nel frame successivo.
    requestAnimationFrame(go);
   }));
  });
  document.addEventListener("pointerdown",event=>{if(!bar.contains(event.target))toggle(false)});
  document.addEventListener("keydown",event=>{
   if(event.key==="Escape"&&bar.classList.contains("atlas-menu-open")){toggle(false);button.focus()}
  });
 }
})();
