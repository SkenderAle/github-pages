/* Musurgia Mundi — audit strutturale dei percorsi (Node.js, sola lettura).
   Esecuzione dalla radice: node atlante3d/database/AUDIT_PRODUZIONE/verifica-ancore-cataloghi.mjs
   Verifica gli URL editoriali e gli ID delle 455 opere generate dai cataloghi.
   NON sostituisce un collaudo nel browser (DOM, scroll, focus, sticky nav). */
import { readFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../..');
const read=p=>readFileSync(join(root,p),'utf8');
const html={
  'parola-e-canto':read('parola-e-canto/index.html'),
  'musica-da-camera':read('musica-da-camera/index.html'),
  'dalla-sinfonia-alla-rapsodia':read('dalla-sinfonia-alla-rapsodia/index.html')
};
const errors=[];
function balancedArray(source,marker){
 const markerPos=source.indexOf(marker);
 if(markerPos<0)throw Error('Non trovato '+marker);
 let at=markerPos+marker.length;
 while(/\s/.test(source[at]))at++;
 const start=at;
 if(source[at]!=='[')throw Error('Non inizia un array: '+marker);
 let quote=null,escape=false,depth=0;
 for(;at<source.length;at++){
  const char=source[at];
  if(quote){
   if(escape)escape=false;
   else if(char==='\\')escape=true;
   else if(char===quote)quote=null;
  }else if(char==='"'||char==="'"){
   quote=char;
  }else if(char==='['){
   depth++;
  }else if(char===']'&&!--depth){
   return JSON.parse(source.slice(start,at+1));
  }
 }
 throw Error('Array non chiuso: '+marker);
}
const voice=balancedArray(html['parola-e-canto'],'const repertoire=');
const chamber=balancedArray(html['musica-da-camera'],'const works=');
const symMatch=html['dalla-sinfonia-alla-rapsodia'].match(/<script[^>]*\bid=["']catalog-data["'][^>]*>([\s\S]*?)<\/script>/);
if(!symMatch)throw Error('Catalogo sinfonico non trovato');
const symphonic=JSON.parse(symMatch[1]).works;
const slug=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'')
 .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,125);
const workIds={
 'parola-e-canto':voice.map(w=>'mm-opera-canto-'+slug(w[1])+'-'+slug(w[2])),
 'musica-da-camera':chamber.map(w=>'mm-opera-camera-'+slug(w[3])),
 'dalla-sinfonia-alla-rapsodia':symphonic.map(w=>w.id)
};
const workIdSets={};
for(const [page,ids] of Object.entries(workIds)){
 workIdSets[page]=new Set(ids);
 if(workIdSets[page].size!==ids.length){
  const seen=new Set();
  for(const id of ids){if(seen.has(id))errors.push('ID opera duplicato: '+page+' #'+id);seen.add(id);}
 }
}
const db=JSON.parse(read('atlante3d/database/collegamenti-sito.json'));
const pages=new Map(),seenLinks=new Set();
const counts={total:0,static:0,dynamic:0,byPage:{}};
for(const [node,refs] of Object.entries(db.byNode)){
 const urls=new Set();
 for(const ref of refs){
  counts.total++;
  if(urls.has(ref.url))errors.push('Collegamento duplicato per '+node+': '+ref.url);
  urls.add(ref.url);
  const match=/^\.\.\/([a-z0-9-]+)\/#([^?#]+)$/.exec(ref.url||'');
  if(!match){errors.push('Percorso non interpretabile: '+node+' / '+ref.url);continue;}
  const [,page,rawId]=match;
  const id=decodeURIComponent(rawId);
  if(!pages.has(page)){
   try{
    const content=html[page]||read(page+'/index.html');
    const attrIds=new Map();
    for(const m of content.matchAll(/\bid\s*=\s*(["'])(.*?)\1/g)){
     attrIds.set(m[2],(attrIds.get(m[2])||0)+1);
    }
    pages.set(page,{source:content,ids:attrIds});
   }catch(error){errors.push('Pagina non leggibile: '+page+' / '+error.message);pages.set(page,null);}
  }
  const data=pages.get(page);
  if(!data)continue;
  const eligibleDynamic=(page==='parola-e-canto'&&ref.match==='opera-strutturata')||
    (page==='musica-da-camera'&&ref.match==='opera-strutturata')||
    (page==='dalla-sinfonia-alla-rapsodia'&&ref.match==='catalogue-work-anchor');
  const dynamic=eligibleDynamic&&workIdSets[page].has(id);
  if(dynamic)counts.dynamic++;
  else if(data.ids.has(id)&&data.ids.get(id)===1)counts.static++;
  else errors.push('Ancora mancante o duplicata: '+node+' -> '+ref.url+
    (data.ids.get(id)?' (ripetuta '+data.ids.get(id)+' volte)':''));
  const stat=counts.byPage[page]||(counts.byPage[page]={total:0,static:0,dynamic:0});
  stat.total++;stat[dynamic?'dynamic':'static']++;
  seenLinks.add(ref.url);
 }
}
for(const [page,data] of pages){
 if(data&&!data.source.includes('atlas-anchor-arrival-v1.js'))
  errors.push('Script comune non caricato nella pagina '+page);
}
console.log(JSON.stringify({
 status:errors.length?'FAIL':'OK',
 files:pages.size,links:counts.total,static:counts.static,dynamic:counts.dynamic,
 works:{canto:voice.length,camera:chamber.length,sinfonica:symphonic.length},
 uniqueUrls:seenLinks.size,issues:errors.length,byPage:counts.byPage
},null,2));
if(errors.length){for(const error of errors)console.error(error);process.exitCode=1;}
