/* Musurgia Mundi — posizione di lettura in capitoli/paragrafi, senza toccare lo scroll. */
(()=>{'use strict';
function init(){
 // Lo stesso criterio vale per tutti i modelli di indice che usano questo script.
 // Con un solo link ("Vai alla sezione") e nessun figlio, niente <details> e niente freccina.
 const menuPanels='.av-panel,.classico-menu-panel,.anatomia-menu-panel,.mm-audio-panel,.mm-dossier-panel,.mm-index-panel,.mm-concerti-panel,.mm-compact-romantic,#menu > .panel,.atlas-autonav nav.mm-compact-ready,.mm-index-panel,.classico-menu-panel';
 for(const panel of document.querySelectorAll(menuPanels)){
  for(const entry of [...panel.querySelectorAll('details')]){
   if(!entry.isConnected||!entry.querySelector(':scope > summary'))continue;
   const allLinks=[...entry.querySelectorAll('a[href]')];
   const direct=entry.querySelector(':scope > a[href]');
   if(!direct||allLinks.length!==1)continue;
   // Converti solo il link introduttivo del capitolo, non l'unico vero figlio.
   if(!/Vai alla sezione/i.test(direct.textContent)&&!direct.classList.contains('mm-compact-go')&&!direct.classList.contains('mm-dossier-go'))continue;
   const label=entry.querySelector(':scope > summary')?.textContent.trim();
   if(!label||/^☰|^Indice completo/i.test(label))continue;
   direct.textContent=label;direct.classList.add('mm-menu-leaf');
   entry.replaceWith(direct);
  }
 }
 // La selezione di un collegamento terminale chiude SEMPRE il menu esterno,
 // anche quando l'ancora non avvia una navigazione a un'altra pagina.
 const menuPanelSelector='.av-panel,.classico-menu-panel,.anatomia-menu-panel,.mm-audio-panel,.mm-dossier-panel,.mm-index-panel,.mm-concerti-panel,.mm-compact-romantic,#menu > .panel,.atlas-autonav nav.mm-compact-ready';
 document.addEventListener('click',event=>{
  const a=event.target.closest('a[href]');
  const panel=a?.closest(menuPanelSelector);
  if(!panel)return;
  const owner=panel.closest('details');
  if(owner){
   owner.querySelectorAll('details[open]').forEach(d=>d.open=false);
   owner.open=false;
  }
  const bar=panel.closest('.atlas-autonav');
  if(bar){bar.classList.remove('atlas-menu-open');bar.querySelector('.atlas-menu-toggle')?.setAttribute('aria-expanded','false');}
 });
 // Evidenziazione e gestione dei pannelli: anche i menu dedicati restano richiusibili.
 const selectors='.atlas-autonav nav.mm-compact-ready:not(.mm-compact-home),.menu-panel.mm-compact-romantic,.mm-index-panel,.mm-concerti-panel,.av-panel,#menu > .panel,.classico-menu-panel,.anatomia-menu-panel,.mm-audio-panel,.menu-panel';
 const panels=[...document.querySelectorAll(selectors)];
 const links=[];
 for(const panel of panels)for(const a of panel.querySelectorAll('a[href^="#"]')){
  let id;try{id=decodeURIComponent(a.getAttribute('href').slice(1))}catch{continue}
  const target=document.getElementById(id);
  if(!target||panel.contains(target))continue;
  const parent=a.closest('.mm-av-chapter,.mm-menu-leaf,.mm-compact-leaf,details.mm-compact-chapter,details.mm-chapter,details.pc-chapter,details.classico-chapter,details.anatomia-chapter,.menu-chapter,details');
  if(!parent||parent===panel.closest('details'))continue;
  links.push({a,id,target,parent,panel});
 }
 if(!links.length)return;
 const unique=[...new Map(links.map(x=>[x.a,x])).values()];
 const order=unique.slice().sort((a,b)=>{const p=a.target.compareDocumentPosition(b.target);return p&Node.DOCUMENT_POSITION_FOLLOWING?-1:p&Node.DOCUMENT_POSITION_PRECEDING?1:0});
 
 let active=null,scheduled=false;

 // Gli stili di evidenziazione sono nel CSS condiviso, non creati qui a runtime.
 function position(){
  scheduled=false;const y=window.scrollY+Math.min(105,Math.max(65,innerHeight*.11));
  let candidate=null;
  for(const entry of order){const top=entry.target.getBoundingClientRect().top+scrollY;if(top<=y)candidate=entry;else break}
  if(candidate===active)return;
  for(const x of unique){x.a.classList.remove('mm-reading-paragraph');x.a.removeAttribute('aria-current');x.parent.classList.remove('mm-reading-chapter')}
  active=candidate;if(!candidate)return;
  for(const x of unique)if(x.id===candidate.id||x.parent===candidate.parent){x.parent.classList.add('mm-reading-chapter')}
  candidate.a.classList.add('mm-reading-paragraph');candidate.a.setAttribute('aria-current','location');
 }
 function queue(){if(!scheduled){scheduled=true;requestAnimationFrame(position)}}
 // I sottoindici si aprono esclusivamente per volontà dell'utente.
 // Alla chiusura del menu principale ogni capitolo torna richiuso.
 const outerMenus=[...new Set([...panels].map(p=>p.closest('details')).concat([...document.querySelectorAll('#indice-menu,#menu,#av-indice,.mm-index-details,.mm-concerti-index,.classico-menu,.anatomia-menu,.mm-audio-index,.mm-dossier-index')]).filter(Boolean))];
 for(const menu of outerMenus){
  menu.addEventListener('toggle',()=>{
   if(!menu.open){menu.querySelectorAll('details').forEach(d=>d.open=false);return;}
   position();
  });
  menu.addEventListener('click',event=>{
   if(event.target.closest('a[href^="#"]')){
    menu.querySelectorAll('details').forEach(d=>d.open=false);
   }
  });
 }
 // I menu atlas-autonav sono controllati da un pulsante, non da un <details>.
 // Alla chiusura (clic, Escape, clic fuori) non devono conservare capitoli aperti.
 for(const bar of document.querySelectorAll('.atlas-autonav')){
  const nav=bar.querySelector('nav.mm-compact-ready:not(.mm-compact-home)');
  if(!nav)continue;
  const reset=()=>nav.querySelectorAll('details[open]').forEach(d=>d.open=false);
  new MutationObserver(()=>{
   if(!bar.classList.contains('atlas-menu-open'))reset();
  }).observe(bar,{attributes:true,attributeFilter:['class']});
  nav.addEventListener('click',event=>{
   if(event.target.closest('a[href]'))reset();
  });
 }
 document.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});
 position();requestAnimationFrame(position);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();
