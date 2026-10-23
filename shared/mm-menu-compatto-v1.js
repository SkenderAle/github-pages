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
 document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  const opened=[...document.querySelectorAll('#indice-menu[open],#menu[open],.mm-index-details[open]')];
  for(const item of opened){item.open=false;item.querySelector(':scope > summary')?.focus();}
 });
})();
