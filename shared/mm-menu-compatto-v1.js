/* Musurgia Mundi — indice compatto unificato: il contenuto e gli href esistenti non vengono riscritti. */
(()=>{'use strict';
 const isHash=a=>(a.getAttribute('href')||'').startsWith('#');
 const make=(tag,cls,txt)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;};
 // Le pagine storiche usano il generatore atlas-autonav, eseguito prima di questo adattamento.
 document.querySelectorAll('.atlas-autonav').forEach(bar=>{
  const nav=bar.querySelector(':scope > nav');if(!nav||nav.classList.contains('mm-compact-ready'))return;
  nav.classList.add('mm-compact-ready');
  if(bar.dataset.atlasPage==='home'){
   nav.classList.add('mm-compact-home');
   return; // L'Atlante conserva le proprie quattro famiglie di percorsi.
  }
  const groups=[...nav.querySelectorAll(':scope > .atlas-group')];
  if(!groups.length)return;
  const fragment=document.createDocumentFragment();
  fragment.append(make('strong','mm-compact-heading','Indice completo · Capitoli e paragrafi'));
  let count=0;
  for(const group of groups){
   for(const node of [...group.children]){
    if(node.matches('a[href^="#"]')&&!node.classList.contains('atlas-home-link')){
     const details=make('details','mm-compact-chapter');
     const title=node.textContent.trim();
     const summary=make('summary',null,title);details.append(summary);
     const after=node.nextElementSibling; // Prima di trasferire il link nel capitolo.
     node.classList.add('mm-compact-go');node.textContent='Vai alla sezione ↗';details.append(node);
     // Il sottoindice viene preparato dal componente originale: qui è visibile
     // con un solo clic sul capitolo anziché aprire un secondo sottomenu.
     if(after&&after.classList.contains('atlas-subindex')){
      for(const a of [...after.querySelectorAll(':scope > a[href]')]){a.classList.add('mm-compact-sub');details.append(a);}
      after.remove();
     }
     fragment.append(details);count++;
    }else if(node.matches('a[href],button')){
     node.classList.add('mm-compact-extra');fragment.append(node);
    }
   }
  }
  if(count){nav.replaceChildren(fragment);nav.dataset.mmChapterCount=String(count);}
 });
 // Romanticismo: riutilizza gli ancoraggi e gli ascolti, ma elimina il doppio passaggio
 // fra link di capitolo e ulteriore dettaglio dei paragrafi.
 const romantic=document.querySelector('#indice-menu > .menu-panel');
 if(romantic&&!romantic.classList.contains('mm-compact-ready')){
  romantic.classList.add('mm-compact-ready','mm-compact-romantic');
  for(const chapter of romantic.querySelectorAll('.menu-chapter')){
   const link=chapter.querySelector(':scope > a.menu-chapter-main');
   if(!link)continue;
   const details=make('details','mm-compact-chapter');
   details.append(make('summary',null,link.textContent.trim()));
   link.textContent='Vai alla sezione ↗';link.classList.add('mm-compact-go');details.append(link);
   const sub=chapter.querySelector(':scope > .index-subsections');
   if(sub)for(const a of [...sub.querySelectorAll('.menu-sub-links a[href]')]){
    a.classList.add('mm-compact-sub');details.append(a);
   }
   chapter.replaceWith(details);
  }
  const outro=romantic.querySelector('.menu-group.menu-outro');
  if(outro){
   const details=make('details','mm-compact-chapter mm-compact-outro');
   details.append(make('summary',null,'Approfondimenti, documenti e conclusione'));
   for(const a of [...outro.querySelectorAll('a[href]')])details.append(a);
   outro.replaceWith(details);
  }
 }
 // Le avanguardie sono ancora un cantiere editoriale: cambia solo il menu,
 // non il testo della bozza né gli ancoraggi dei suoi compositori.
 const av=document.querySelector('#av-indice > .av-panel');
 if(av&&!av.classList.contains('mm-compact-ready')){
  const links=[...av.querySelectorAll(':scope > a[href^="#"]')];
  if(links.length){
   av.classList.add('mm-compact-ready');
   const title=av.querySelector(':scope > strong')||make('strong',null,'Verso le avanguardie · Indice');
   const fragment=document.createDocumentFragment();fragment.append(title);
   let idx=0;
   for(const link of links){
    const target=document.getElementById(link.getAttribute('href').slice(1));
    const next=links.slice(idx+1).map(a=>document.getElementById(a.getAttribute('href').slice(1))).find(Boolean);
    const details=make('details','mm-compact-chapter');
    details.append(make('summary',null,link.textContent.trim()));
    link.classList.add('mm-compact-go');link.textContent='Vai alla sezione ↗';details.append(link);
    const root=target?.closest('section')||target;
    if(root&&target){
     let n=0;
     for(const h of root.querySelectorAll('h3,h4')){
      if(h===target||h.closest('nav,aside,details,[hidden]'))continue;
      if(!(target.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_FOLLOWING))continue;
      if(next&&!(h.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING))continue;
      if(h.textContent.trim().length<5||++n>25)continue;
      if(!h.id)h.id='mm-av-par-'+idx+'-'+n;
      const a=make('a','mm-compact-sub',n+' · '+h.textContent.trim().slice(0,110));
      a.href='#'+h.id;details.append(a);
     }
    }
    fragment.append(details);idx++;
   }
   av.replaceChildren(fragment);
  }
 }
 // La pagina dei concerti conserva un collegamento immediato all'Audioteca,
 // accanto a un indice richiudibile per il racconto, il repertorio e le fonti.
 const concerti=document.querySelector('nav.main[aria-label="Navigazione principale"] > div');
 if(concerti&&!concerti.querySelector('.mm-concerti-index')){
  const links=[...concerti.querySelectorAll(':scope > a[href^="#"]')];
  const home=concerti.querySelector(':scope > a[href="../"]');
  if(home&&links.length>=2){
   const details=make('details','mm-concerti-index');
   const sum=make('summary',null,'☰ Indice completo');
   const panel=make('div','mm-concerti-panel');
   panel.append(make('strong','mm-compact-heading','Concerti · Capitoli e ascolti'));
   for(const link of links){
    const id=(link.getAttribute('href')||'').slice(1);
    const target=document.getElementById(id);
    const chapter=make('details','mm-compact-chapter');
    chapter.append(make('summary',null,link.textContent.trim()));
    const go=link.classList.contains('audio')?link.cloneNode(true):link;
    go.classList.add('mm-compact-go');go.textContent='Vai alla sezione ↗';chapter.append(go);
    const root=target?.closest('section[id]')||target;
    if(root){
     let n=0;
     for(const heading of root.querySelectorAll('h2,h3')){
      if(heading.closest('nav,aside,details,[hidden],.audio-card,.catalog-card'))continue;
      if(heading===target||heading===root.querySelector('h2')||heading.textContent.trim().length<5)continue;
      if(++n>35)break;
      if(!heading.id)heading.id='mm-concerti-'+id+'-'+n;
      const a=make('a','mm-compact-sub',n+' · '+heading.textContent.trim().replace(/\s+/g,' ').slice(0,105));
      a.href='#'+heading.id;chapter.append(a);
     }
    }
    panel.append(chapter);
   }
   details.append(sum,panel);
   home.insertAdjacentElement('afterend',details);
   panel.addEventListener('click',e=>{if(e.target.closest('a[href]'))details.open=false;});
   document.addEventListener('pointerdown',e=>{if(details.open&&!details.contains(e.target))details.open=false;});
  }
 }
 // I restanti indici già gerarchici conservano il loro meccanismo di navigazione.
 document.querySelectorAll('.mm-index-panel,#menu > .panel').forEach(panel=>panel.classList.add('mm-compact-ready'));
 // Il collegamento in un indice chiude il menu, come nel Melodramma classico.
 document.querySelectorAll('.mm-compact-romantic,.mm-index-panel,#menu > .panel').forEach(panel=>{
  panel.addEventListener('click',e=>{
   const a=e.target.closest('a[href^="#"]');if(!a)return;
   const owner=panel.closest('details');
   if(owner)owner.open=false;
  });
 });
 // Chiude i pannelli lasciati aperti quando il lettore torna alla pagina.
 // Non interferisce con il clic sui summary o sui link interni al pannello.
 document.addEventListener('pointerdown',event=>{
  for(const menu of document.querySelectorAll('#indice-menu[open],#menu[open],.mm-index-details[open],#av-indice[open],.mm-concerti-index[open]')){
   if(!menu.contains(event.target))menu.open=false;
  }
 });
 document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  const opened=[...document.querySelectorAll('#indice-menu[open],#menu[open],.mm-index-details[open],#av-indice[open],.mm-concerti-index[open]')];
  for(const item of opened){item.open=false;item.querySelector(':scope > summary')?.focus();}
 });
})();
