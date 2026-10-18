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
style.textContent=".musurgia-bridge-strip{display:flex;justify-content:flex-end;align-items:center;padding:.55rem clamp(14px,3vw,36px);background:#242c37;color:#f4e5c9;font:700 .76rem/1.45 system-ui,sans-serif}.musurgia-bridge-strip a{color:#f4d79c!important;text-decoration:underline!important;text-underline-offset:3px}.musurgia-author-link{display:inline-flex;vertical-align:middle;margin-left:.42em;padding:.12em .4em;border:1px solid #8b8f95;border-radius:5px;color:#fff!important;background:#38516a;text-decoration:none!important;font:700 .62rem/1.4 system-ui,sans-serif;letter-spacing:0;white-space:nowrap}.musurgia-author-link:focus-visible,.musurgia-bridge-strip a:focus-visible{outline:3px solid #ceac6c;outline-offset:2px}";
document.head.appendChild(style);
var periodGroups={medioevo:["medioevo"],rinascimento:["rinascimento","medioevo"],barocco:["barocco","rinascimento"],classicismo:["classicismo","barocco","romanticismo"],romanticismo:["romanticismo","post-romanticismo","classicismo"],risorgimento:["romanticismo","classicismo"],"post-romanticismo":["post-romanticismo","novecento","romanticismo"],"dal-musical-al-film":["novecento","post-romanticismo"]};
function normalize(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/['’]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim();}
fetch(index.href,{cache:"force-cache"}).then(function(r){if(!r.ok)throw new Error("Indice autori");return r.json()}).then(function(data){
var authors=(data.people||[]).filter(function(p){return p.id&&p.label&&Array.isArray(p.keys)});
document.querySelectorAll("main h2,main h3,.content h2,.content h3").forEach(function(heading){
 if(heading.closest("nav,.catalogue,.works,.menu-panel"))return;
 var title=normalize(heading.textContent),padded=" "+title+" ";if(!title||title.length>190)return;
 var matches=[];
 for(var i=0;i<authors.length;i++){
  var person=authors[i],full=normalize(person.label),exact=padded.indexOf(" "+full+" ")!==-1;
  var partial=!exact&&person.keys.some(function(k){return k.length>=5&&padded.indexOf(" "+k+" ")!==-1});
  if(!exact&&!partial)continue;
  var permitted=periodGroups[slug];
  if(!exact&&permitted&&!(person.periods||[]).some(function(p){return permitted.indexOf(p)!==-1}))continue;
  matches.push(person);if(matches.length>=2)break;
 }
 matches.forEach(function(person){
  var a=document.createElement("a"),url=new URL(graph.href);url.searchParams.set("n",person.id);
  a.href=url.href;a.className="musurgia-author-link";a.textContent="✧ Musurgia";
  a.title="Apri "+person.label+" nella costellazione";
  a.setAttribute("aria-label","Esplora "+person.label+" in Musurgia Mundi");
  heading.appendChild(document.createTextNode(" "));heading.appendChild(a);
 });
});
}).catch(function(){/* Il percorso rimane leggibile anche senza indice. */});
})();
