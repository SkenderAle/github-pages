/* Musurgia Mundi — menu compatto dei saggi collegati ai grandi percorsi. */
(()=>{'use strict';
const make=(tag,cls,txt)=>{
 const el=document.createElement(tag);if(cls)el.className=cls;
 if(txt!==undefined)el.textContent=txt;return el;
};
const navs=[...document.querySelectorAll('nav.anchor-nav,nav.site-nav[aria-label="Navigazione dell\'approfondimento"]')];
for(const nav of navs){
 if(nav.classList.contains('mm-dossier-menu'))continue;
 const dossier=nav.classList.contains('anchor-nav');
 const holder=dossier?nav:nav.querySelector('.nav-items');
 if(!holder)continue;
 const links=[...holder.querySelectorAll(':scope > a[href^="#"]')];
 if(!links.length)continue;
 nav.classList.add('mm-dossier-menu');
 if(dossier){
  const header=nav.parentElement?.querySelector(':scope > header.top');
  if(header)header.insertAdjacentElement('beforebegin',nav);
  const home=make('a','mm-dossier-home','⌂ Home');
  home.href='../../';home.title='Torna a Musurgia Mundi';
  nav.prepend(home);
 }
 const menu=make('details','mm-dossier-index');
 const toggle=make('summary',null,'☰ Indice completo');menu.append(toggle);
 const panel=make('div','mm-dossier-panel');
 panel.setAttribute('aria-label','Capitoli e paragrafi dell’approfondimento');
 panel.append(make('strong','mm-dossier-title',document.title.split(' · ')[0]));
 links.forEach((a,i)=>{
  const id=(a.getAttribute('href')||'').slice(1);
  const section=document.getElementById(id);
  const chapter=make('details','mm-dossier-chapter');
  chapter.append(make('summary',null,a.textContent.trim()));
  a.classList.add('mm-dossier-go');a.textContent='Vai alla sezione ↗';chapter.append(a);
  if(section){
   let n=0;
   const heads=[...section.querySelectorAll('h3,h4')];
   for(const heading of heads){
    if(heading.closest('nav,aside,details,[hidden]')||heading.textContent.trim().length<5||n>=22)continue;
    const j=++n;
    if(!heading.id){
      let generated='mm-dossier-par-'+id+'-'+j;
      while(document.getElementById(generated))generated+='-x';
      heading.id=generated;
    }
    const link=make('a','mm-dossier-sub',j+' · '+heading.textContent.trim().replace(/\s+/g,' ').slice(0,110));
    link.href='#'+heading.id;chapter.append(link);
   }
  }
  panel.append(chapter);
 });
 menu.append(panel);
 holder.replaceChildren();
 holder.append(menu);
 panel.addEventListener('click',event=>{
  const a=event.target.closest('a[href]');if(a)menu.open=false;
 });
 document.addEventListener('pointerdown',event=>{
  if(menu.open&&!menu.contains(event.target))menu.open=false;
 });
 document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&menu.open){
   menu.open=false;toggle.focus();
  }
 });
}
})();