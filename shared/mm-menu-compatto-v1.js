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
   // Le pagine che dichiarano parti tematiche possono mostrarle nell'indice compatto.
   if(group.dataset.mmGroupTitle)fragment.append(make('strong','mm-compact-heading mm-compact-part',group.dataset.mmGroupTitle));
   for(const node of [...group.children]){
    if(node.matches('a[href^="#"]')&&!node.classList.contains('atlas-home-link')){
     const after=node.nextElementSibling;
     const children=after&&after.classList.contains('atlas-subindex')?[...after.querySelectorAll(':scope > a[href]')]:[];
     if(children.length){
      const details=make('details','mm-compact-chapter');
      details.append(make('summary',null,node.textContent.trim()));
      node.classList.add('mm-compact-go');node.textContent='Vai alla sezione ↗';details.append(node);
      for(const a of children){a.classList.add('mm-compact-sub');details.append(a);}
      after.remove();fragment.append(details);
     }else{
      // Senza figli, il titolo è un collegamento diretto: nessuna freccina.
      node.classList.add('mm-compact-leaf');fragment.append(node);
      if(after&&after.classList.contains('atlas-subindex'))after.remove();
     }
     count++;
    }else if(node.matches('a[href],button')){
     node.classList.add('mm-compact-extra');fragment.append(node);
    }
   }
  }
  // Rinascimento e Medioevo: gruppi verticali non spezzati, su due colonne.
  // La conversione compatta e gli href restano invariati nelle altre pagine.
  if(count&&(bar.dataset.atlasPage==='rinascimento'||bar.dataset.atlasPage==='medioevo')){
   const children=[...fragment.childNodes];
   const title=children.shift();
   const columns=[make('div','mm-compact-column'),make('div','mm-compact-column')];
   const leftGroups=bar.dataset.atlasPage==='rinascimento'?3:2;
   let groupIndex=-1,container=columns[0];
   for(const child of children){
    if(child.nodeType===1&&child.classList.contains('mm-compact-part')){
     groupIndex++;
     container=make('div','mm-compact-group');
     columns[groupIndex<leftGroups?0:1].append(container);
    }
    container.append(child);
   }
   fragment.append(title,...columns);
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
   const sub=chapter.querySelector(':scope > .index-subsections');
   const children=sub?[...sub.querySelectorAll('.menu-sub-links a[href]')]:[];
   if(!children.length){
    link.classList.add('mm-compact-leaf');chapter.replaceWith(link);continue;
   }
   const details=make('details','mm-compact-chapter');
   details.append(make('summary',null,link.textContent.trim()));
   link.textContent='Vai alla sezione ↗';link.classList.add('mm-compact-go');details.append(link);
   for(const a of children){a.classList.add('mm-compact-sub');details.append(a);}
   chapter.replaceWith(details);
  }
  // Anche il Prologo ha veri figli: il titolo apre gli otto paragrafi,
  // senza la riga separata "8 paragrafi del prologo".
  const preface=romantic.querySelector('.menu-group.menu-preface');
  if(preface){
   const prologue=preface.querySelector('a[href="#musica-assoluta"]');
   const oldIndex=prologue?.nextElementSibling;
   if(prologue&&oldIndex?.matches('details.index-subsections')){
    const chapter=make('details','mm-compact-chapter mm-compact-prologue');
    chapter.append(make('summary',null,prologue.textContent.trim()));
    prologue.classList.add('mm-compact-go');
    prologue.textContent='Vai alla sezione ↗';
    chapter.append(prologue);
    for(const child of [...oldIndex.querySelectorAll('.menu-sub-links a[href]')]){
     child.classList.add('mm-compact-sub');
     chapter.append(child);
    }
    oldIndex.replaceWith(chapter);
   }
  }
  const outro=romantic.querySelector('.menu-group.menu-outro');
  if(outro){
   const details=make('details','mm-compact-chapter mm-compact-outro');
   details.append(make('summary',null,'Approfondimenti, documenti e conclusione'));
   for(const a of [...outro.querySelectorAll('a[href]')])details.append(a);
   outro.replaceWith(details);
  }
 }
 // Avanguardie: tre macro-parti autonome, ciascuna con i propri capitoli.
 // Si impagina il gruppo, mai i singoli capitoli distribuiti a scacchiera.
 const av=document.querySelector('#av-indice > .av-panel');
 if(av&&!av.classList.contains('mm-compact-ready')){
  const links=[...av.querySelectorAll(':scope > a[href^="#"]')];
  if(links.length){
   av.classList.add('mm-compact-ready','mm-av-direct-links','mm-av-grouped');
   const title=av.querySelector(':scope > strong')||make('strong',null,'Verso le avanguardie · Indice');
   const fragment=document.createDocumentFragment();
   fragment.append(title);
   const groups=make('div','mm-av-group-grid');
   fragment.append(groups);
   let currentGroup=null,idx=0;
   for(const [position,link] of links.entries()){
    if(link.classList.contains('av-part-link')){
     currentGroup=make('section','mm-av-part-group');
     const heading=make('h2','mm-av-part-heading');
     const label=link.textContent.trim();
     const match=label.match(/^([IVX]+)\s*·\s*(.+)$/);
     if(match){
      link.textContent='';
      link.append(make('span','mm-av-part-number',match[1]));
      link.append(make('span','mm-av-part-name',match[2]));
      link.setAttribute('aria-label',label);
     }
     link.classList.add('mm-av-part-anchor');
     heading.append(link);
     currentGroup.append(heading);
     groups.append(currentGroup);
     continue;
    }
    if(!currentGroup){
     currentGroup=make('section','mm-av-part-group');
     groups.append(currentGroup);
    }
    const id=link.getAttribute('href').slice(1);
    const target=document.getElementById(id);
    const next=links.slice(position+1).map(a=>document.getElementById(a.getAttribute('href').slice(1))).find(Boolean);
    const item=make('div','mm-compact-chapter mm-av-chapter');
    const originalTitle=link.textContent.trim();
    const root=target?.closest('section')||target;
    const children=[];
    if(root&&target){
     let n=0;
     for(const h of root.querySelectorAll('h3,h4')){
      // Le tre sezioni editoriali Brecht–Weill sono in un aside, ma hanno ancore proprie.
      const isWeillEditorial=/^brecht-weill-(?:teatro|mahagonny|alabama)$/.test(h.id)&&!!h.closest('aside.late-context');
      if(h===target||h.closest('nav,details,[hidden],.av-modern-listen,.av-afro-listen,.av-listen-guide')||(h.closest('aside')&&!isWeillEditorial)||(h.closest('.cards')&&!h.id))continue;
      if(!(target.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_FOLLOWING))continue;
      if(next&&!(h.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING))continue;
      if(h.textContent.trim().length<5||n>=25)continue;
      n++;
      if(!h.id)h.id='mm-av-par-'+idx+'-'+n;
      const a=make('a','mm-compact-sub',n+' · '+h.textContent.trim().slice(0,110));
      a.href='#'+h.id;children.push(a);
     }
    }
    if(children.length){
     const sub=make('details','mm-av-sublist');
     const summary=make('summary');
     summary.setAttribute('aria-label','Espandi o richiudi i paragrafi di: '+originalTitle);
     link.classList.add('mm-av-chapter-link');
     link.textContent=originalTitle;
     link.setAttribute('aria-label','Leggi il capitolo: '+originalTitle);
     sub.append(summary,...children);
     item.append(link,sub);
    }else{
     link.classList.add('mm-compact-go','mm-compact-leaf');
     item.append(link);
    }
    currentGroup.append(item);idx++;
   }
   av.replaceChildren(fragment);
   av.addEventListener('click',event=>{
    if(event.target.closest('a[href]')){
     for(const submenu of av.querySelectorAll('details[open]'))submenu.open=false;
     const owner=av.closest('details');
     if(owner)owner.open=false;
    }
   });
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
    const root=target?.closest('section[id]')||target;
    const children=[];
    if(root){
     let n=0;
     for(const heading of root.querySelectorAll('h2,h3')){
      if(heading.closest('nav,aside,details,[hidden],.audio-card,.catalog-card'))continue;
      if(heading===target||heading===root.querySelector('h2')||heading.textContent.trim().length<5)continue;
      if(n>=35)break;
      n++;
      if(!heading.id)heading.id='mm-concerti-'+id+'-'+n;
      const a=make('a','mm-compact-sub',n+' · '+heading.textContent.trim().replace(/\s+/g,' ').slice(0,105));
      a.href='#'+heading.id;children.push(a);
     }
    }
    const go=link.classList.contains('audio')?link.cloneNode(true):link;
    if(!children.length){go.classList.add('mm-compact-leaf');panel.append(go);continue;}
    const chapter=make('details','mm-compact-chapter');
    chapter.append(make('summary',null,link.textContent.trim()));
    go.classList.add('mm-compact-go');go.textContent='Vai alla sezione ↗';
    chapter.append(go,...children);panel.append(chapter);
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
