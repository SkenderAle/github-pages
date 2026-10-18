/* Ponte redazionale Musurgia Mundi: link discreti, nessun autoplay. */
(function(){
"use strict";
var hero=document.querySelector("header.hero, header.masthead");
if(!hero||!document.currentScript)return;
var graph=new URL("../atlante3d/",document.currentScript.src);
var index=new URL("database/indice-autori.json",graph);
var slug=location.pathname.replace(/\/+$/,"").split("/").pop()||"home";
var pageNode={medioevo:"medioevo",rinascimento:"rinascimento",barocco:"barocco",classicismo:"classicismo",romanticismo:"romanticismo","post-romanticismo":"post-romanticismo",melodramma:"melodramma",risorgimento:"risorgimento"}[slug];
var root=new URL(graph.href);if(pageNode)root.searchParams.set("n",pageNode);
var strip=document.createElement("div");strip.className="musurgia-bridge-strip";
var link=document.createElement("a");link.href=root.href;link.textContent="✧ Musurgia Mundi · Esplora la costellazione";
strip.appendChild(link);hero.insertAdjacentElement("afterend",strip);
var style=document.createElement("style");
style.textContent=".musurgia-bridge-strip{display:flex;justify-content:flex-end;align-items:center;padding:.55rem clamp(14px,3vw,36px);background:#242c37;color:#f4e5c9;font:700 .76rem/1.45 system-ui,sans-serif}.musurgia-bridge-strip a{color:#f4d79c!important;text-decoration:underline!important;text-underline-offset:3px}.musurgia-author-link{display:inline-flex;vertical-align:middle;margin-left:.42em;padding:.12em .4em;border:1px solid #8b8f95;border-radius:5px;color:#fff!important;background:#38516a;text-decoration:none!important;font:700 .62rem/1.4 system-ui,sans-serif;letter-spacing:0;white-space:nowrap}.musurgia-work-link{margin:.26rem 0 .45rem .32rem;max-width:max-content}article.work[id^='mm-opera-']{scroll-margin-top:6rem}.musurgia-work-link:focus-visible,.musurgia-author-link:focus-visible,.musurgia-bridge-strip a:focus-visible{outline:3px solid #ceac6c;outline-offset:2px}";
document.head.appendChild(style);
var periodGroups={medioevo:["medioevo"],rinascimento:["rinascimento","medioevo"],barocco:["barocco","rinascimento"],classicismo:["classicismo","barocco","romanticismo"],romanticismo:["romanticismo","post-romanticismo","classicismo"],risorgimento:["romanticismo","classicismo"],"post-romanticismo":["post-romanticismo","novecento","romanticismo"],"dal-musical-al-film":["novecento","post-romanticismo"]};
function normalize(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/['’]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim();}
fetch(index.href,{cache:"force-cache"}).then(function(r){if(!r.ok)throw new Error("Indice autori");return r.json()}).then(function(data){
var authors=(data.people||[]).filter(function(p){return p.id&&p.label&&Array.isArray(p.keys)});
var permittedByPage={"medioevo":["medioevo"],"rinascimento":["rinascimento","medioevo"],"barocco":["barocco","rinascimento"],"classicismo":["classicismo","barocco","romanticismo"],"risorgimento":["romanticismo","classicismo"],"romanticismo":["romanticismo","post-romanticismo","classicismo"],"melodramma":["rinascimento","barocco","classicismo","romanticismo"],"post-romanticismo":["post-romanticismo","novecento","romanticismo"],"dal-musical-al-film":["novecento","post-romanticismo"],"parola-e-canto":["medioevo","rinascimento","barocco","classicismo","romanticismo","post-romanticismo","novecento"]};
var bannedLeadingNames=new Set(["firenze","roma","parigi","venezia","milano","napoli","bologna","vienna","londra","berlino","praga","monaco","torino","canto","musica","francia","italia","europa"]);
var ownersByLastName=new Map();
authors.forEach(function(p){var key=normalize(p.label).split(' ').pop(),list=ownersByLastName.get(key)||[];list.push(p);ownersByLastName.set(key,list);});
document.querySelectorAll('main h2,main h3,.content h2,.content h3').forEach(function(heading){
 if(heading.closest('nav,.catalogue,.works,.menu-panel'))return;
 var title=normalize(heading.textContent),first=title.split(' ')[0]||'';if(!title||title.length>190)return;
 var matches=authors.filter(function(p){var name=normalize(p.label);return name.length>=7&&(' '+title+' ').includes(' '+name+' ')});
 var person=null;
 if(matches.length===1)person=matches[0];
 else if(matches.length===0&&first.length>=5&&!bannedLeadingNames.has(first)){
  var candidates=ownersByLastName.get(first)||[],allowed=permittedByPage[slug]||[];
  if(candidates.length===1&&(candidates[0].periods||[]).some(function(x){return allowed.includes(x)}))person=candidates[0];
 }
 if(!person||heading.querySelector('.musurgia-author-link'))return;
 var a=document.createElement('a'),url=new URL(graph.href);url.searchParams.set('n',person.id);
 a.href=url.href;a.className='musurgia-author-link';a.textContent='✧ Musurgia';
 a.title='Apri '+person.label+' nella costellazione';
 a.setAttribute('aria-label','Esplora '+person.label+' in Musurgia Mundi');
 heading.appendChild(document.createTextNode(' '));heading.appendChild(a);
});
/* Lotto V: rimandi dalle singole opere, non soltanto dai titoli h2/h3.
   Attribuzione esatta attraverso chiavi univoche: nessuna risoluzione automatica
   di Bach, Mozart, Schumann o altri cognomi condivisi. */
var catalogueSelectors={
 "concerti":"#audioteca",
 "musica-da-camera":"#catalogo",
 "dalla-sinfonia-alla-rapsodia":"#works",
 "parola-e-canto":"#works"
};
var catalogue=document.querySelector(catalogueSelectors[slug]||"#musurgia-no-catalogue");
if(catalogue){
 var identityMap=new Map();
 authors.forEach(function(person){
  [person.label].concat(person.keys).forEach(function(alias){
   var key=normalize(alias);if(!key)return;
   var ids=identityMap.get(key)||new Set();ids.add(person.id);identityMap.set(key,ids);
  });
 });
 var byPerson=new Map(authors.map(function(p){return [p.id,p]}));
 // ID permanenti derivati dall'opera, indipendenti da ordine, filtri e lettori.
 // Le attuali 255 opere cameristiche e 97 vocali hanno chiavi tutte distinte.
 function workSlug(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,125)}
 function stableWorkId(work){
  if(slug==="musica-da-camera"){
   var title=work.querySelector("h3")?.textContent||"";
   return title?"mm-opera-camera-"+workSlug(title):"";
  }
  if(slug==="parola-e-canto"){
   var author=work.querySelector(".eyebrow")?.textContent||"";
   var title=work.querySelector("h3")?.textContent||"";
   return author&&title?"mm-opera-canto-"+workSlug(author)+"-"+workSlug(title):"";
  }
  return "";
 }
 var workHash="";try{workHash=decodeURIComponent(location.hash.slice(1))}catch(e){}
 var workScrolled=false;
 function attachWorkAnchor(work){
  var id=stableWorkId(work);if(!id)return;
  if(!work.id)work.id=id;
  if(!workScrolled&&id===workHash){
   workScrolled=true;
   requestAnimationFrame(function(){requestAnimationFrame(function(){work.scrollIntoView({block:"start",behavior:"instant"})})});
  }
 }

 function authorOf(work){
  if(slug==="concerti")return work.dataset.composerName||"";
  if(slug==="musica-da-camera")return (work.querySelector("h3")?.textContent||"").split(" · ")[0].trim();
  if(slug==="dalla-sinfonia-alla-rapsodia")return work.querySelector(".composer")?.textContent||"";
  if(slug==="parola-e-canto")return work.querySelector(".eyebrow")?.textContent||"";
  return "";
 }
 function wireWorks(){
  catalogue.querySelectorAll("article.work:not([data-musurgia-link-checked])").forEach(function(work){
   attachWorkAnchor(work);
   work.dataset.musurgiaLinkChecked="1";
   var ids=identityMap.get(normalize(authorOf(work)));
   if(!ids||ids.size!==1)return;
   var person=byPerson.get(ids.values().next().value);if(!person)return;
   var anchor=slug==="concerti"?work.querySelector("h4"):
              slug==="musica-da-camera"?work.querySelector("h3"):
              slug==="dalla-sinfonia-alla-rapsodia"?work.querySelector(".composer"):
              work.querySelector(".eyebrow");
   if(!anchor)return;
   var a=document.createElement("a"),url=new URL(graph.href);url.searchParams.set("n",person.id);
   a.href=url.href;a.className="musurgia-author-link musurgia-work-link";
   a.textContent="✧ Musurgia";a.title="Esplora "+person.label+" nella costellazione";
   a.setAttribute("aria-label","Apri il nodo di "+person.label+" in Musurgia Mundi");
   anchor.insertAdjacentElement("afterend",a);
  });
 }
 wireWorks();
 var scheduled=false;
 var watcher=new MutationObserver(function(){
  if(scheduled)return;scheduled=true;
  requestAnimationFrame(function(){scheduled=false;wireWorks()});
 });
 watcher.observe(catalogue,{childList:true,subtree:true});
}
}).catch(function(){/* Il percorso rimane leggibile anche senza indice. */});
})();
