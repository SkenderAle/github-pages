/* Musurgia Mundi — posizione di lettura in capitoli/paragrafi, senza toccare lo scroll. */
(()=>{'use strict';
function init(){
 const selectors='.atlas-autonav nav.mm-compact-ready:not(.mm-compact-home),.menu-panel.mm-compact-romantic,.mm-index-panel,.mm-concerti-panel,.av-panel,#menu > .panel,.classico-menu-panel,.anatomia-menu-panel,.menu-panel';
 const panels=[...document.querySelectorAll(selectors)];
 const links=[];
 for(const panel of panels)for(const a of panel.querySelectorAll('a[href^="#"]')){
  const id=decodeURIComponent(a.getAttribute('href').slice(1));const target=document.getElementById(id);
  if(!target||panel.contains(target))continue;
  const parent=a.closest('details.mm-compact-chapter,details.mm-chapter,details.pc-chapter,details.classico-chapter,details.anatomia-chapter,.menu-chapter,details');
  if(!parent||parent===panel.closest('details'))continue;
  links.push({a,id,target,parent,panel});
 }
 if(!links.length)return;
 const unique=[...new Map(links.map(x=>[x.a,x])).values()];
 const order=unique.slice().sort((a,b)=>{const p=a.target.compareDocumentPosition(b.target);return p&Node.DOCUMENT_POSITION_FOLLOWING?-1:p&Node.DOCUMENT_POSITION_PRECEDING?1:0});
 const roots=[...new Set(unique.map(x=>x.panel.closest('details')||x.panel))];
 let active=null,scheduled=false;
 const style=document.createElement('style');style.textContent=`
 .atlas-menu-context-local,.classico-context,.anatomia-context{margin-left:auto!important;text-align:right!important}\n @media(max-width:950px){.atlas-menu-context-local{display:block!important;font-size:.62rem!important;white-space:normal!important;line-height:1.2!important;max-width:125px!important}}\n @media(max-width:440px){.atlas-menu-context-local{font-size:.56rem!important;max-width:95px!important}.classico-context,.anatomia-context{font-size:.56rem!important;max-width:105px!important}}\n .mm-reading-chapter{border-left:4px solid #7b4b77!important}
 .mm-reading-chapter>summary{background:#dfcfe3!important;color:#331e39!important;box-shadow:inset 0 0 0 1px #976c9b!important}
 a.mm-reading-paragraph{background:#e5d5ec!important;color:#2c1539!important;font-weight:800!important;border-left:4px solid #795385!important;padding-left:.45rem!important}
 .mm-reading-chapter>summary::after{content:" · in lettura";font-size:.72em;font-weight:650;opacity:.76}
 `;document.head.append(style);
 function position(){
  scheduled=false;const y=window.scrollY+Math.min(180,Math.max(85,innerHeight*.20));
  let candidate=null;
  for(const entry of order){const top=entry.target.getBoundingClientRect().top+scrollY;if(top<=y)candidate=entry;else break}
  if(candidate===active)return;
  for(const x of unique){x.a.classList.remove('mm-reading-paragraph');x.a.removeAttribute('aria-current');x.parent.classList.remove('mm-reading-chapter')}
  active=candidate;if(!candidate)return;
  for(const x of unique)if(x.id===candidate.id||x.parent===candidate.parent){x.parent.classList.add('mm-reading-chapter')}
  candidate.a.classList.add('mm-reading-paragraph');candidate.a.setAttribute('aria-current','location');
 }
 function queue(){if(!scheduled){scheduled=true;requestAnimationFrame(position)}}
 for(const root of roots){const menu=root.matches('details')?root:root.closest('details');
  if(!menu)continue;
  menu.addEventListener('toggle',()=>{if(!menu.open)return;position();
   const match=active&&unique.find(x=>x.panel===root||x.panel===menu||menu.contains(x.panel)&&x.parent===active.parent);
   if(match){match.parent.open=true;const panel=match.panel;const anchor=match.a;requestAnimationFrame(()=>{const top=anchor.offsetTop;const scrollBox=[panel,menu].find(el=>el.scrollHeight>el.clientHeight+10);if(scrollBox)scrollBox.scrollTop=Math.max(0,top-scrollBox.clientHeight*.35)})}
  });
 }
 document.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});
 position();requestAnimationFrame(position);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0),{once:true});else setTimeout(init,0);
})();
