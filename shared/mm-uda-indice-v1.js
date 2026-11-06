/* Musurgia Mundi — UDA in coda all'indice, prima di Verifica e SOS. */
(()=>{'use strict';
const isSpecial=a=>{
 const t=(a.textContent||'').trim();
 const href=(a.getAttribute('href')||'').toLowerCase();
 return a.classList.contains('nav-verifica')||a.classList.contains('nav-sos')||
  /^(?:✦\s*)?verifica\b/i.test(t)||/^sos\b/i.test(t)||href==='#verifica';
};
const isUda=a=>/^#uda-(?:percorsi|av-|film-|atlante-)/.test(a.getAttribute('href')||'');
function makeLink(href,label,cls){
 const a=document.createElement('a');
 a.setAttribute('href',href);a.textContent=label;a.className=cls;
 a.addEventListener('click',()=>{
  const d=a.closest('details');
  if(d)d.open=false;
  const bar=a.closest('.nav-wrap');
  if(bar){
   bar.classList.remove('open','is-open');
   const b=bar.querySelector('.atlas-menu-toggle');
   if(b)b.setAttribute('aria-expanded','false');
  }
 });
 return a;
}
function setup(){
 const units=[...document.querySelectorAll('details.mm-uda[id]')];
 if(!units.length)return;
 const root=document.getElementById('uda-percorsi');
 const links=root?
  [{href:'#uda-percorsi',label:'UDA · Percorsi didattici'}]:
  units.map((u,i)=>({href:'#'+u.id,label:'UDA · '+(u.querySelector('.mm-uda-title')?.textContent||('Percorso '+(i+1))).trim()}));
 const av=document.querySelector('#av-indice > .av-panel');
 const romantic=document.querySelector('#indice-menu > .menu-panel');
 const classic=document.querySelector('.classico-menu-panel');
 const anatomy=document.querySelector('.anatomia-menu-panel');
 const inner=document.querySelector('#menu > .panel');
 const generic=document.querySelector('.atlas-autonav > nav, .atlas-autonav nav, nav#atlasNavigation, nav#nav, nav.navin, nav.site-nav, nav.anchor-nav, nav[aria-label="Esplora le sezioni"], nav[aria-label="Navigazione"], nav.main, nav.nav');
 const nav=av||romantic||classic||anatomy||inner||generic;
 if(!nav)return; // Gli strumenti senza indice non ricevono nuovi comandi.
 let dest=nav,cls='mm-nav-uda';
 if(av){cls='av-chapter-link mm-nav-uda'}
 else if(romantic){dest=romantic.querySelector('.menu-group.menu-outro')||romantic;cls='menu-chapter-main mm-nav-uda'}
 else if(classic){cls='classico-cross mm-nav-uda'}
 else if(anatomy){cls='anatomia-cross mm-nav-uda'}
 else if(inner){cls='mm-nav-uda'}
 else{
  const groups=nav.querySelectorAll('.mm-compact-column .mm-compact-group, :scope > .atlas-group, :scope > .nav-row, .nav-items');
  if(groups.length)dest=groups[groups.length-1];
  else if(nav.classList.contains('main')&&nav.firstElementChild?.tagName==='DIV')dest=nav.firstElementChild;
 }
 // Le vecchie collocazioni nei capitoli interni vengono rimosse senza duplicare i link.
 for(const a of [...nav.querySelectorAll('a[href]')].filter(isUda))a.remove();
 // L'unica eccezione alla posizione finale delle UDA è Verifica e SOS.
 const specials=[...nav.querySelectorAll('a[href]')].filter(isSpecial);
 for(const a of specials)a.remove();
 const verify=specials.filter(a=>!/^sos\b/i.test((a.textContent||'').trim())&&!a.classList.contains('nav-sos'));
 const sos=specials.filter(a=>/^sos\b/i.test((a.textContent||'').trim())||a.classList.contains('nav-sos'));
 for(const l of links)dest.appendChild(makeLink(l.href,l.label,cls));
 for(const a of [...verify,...sos])dest.appendChild(a);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});
else setup();
})();