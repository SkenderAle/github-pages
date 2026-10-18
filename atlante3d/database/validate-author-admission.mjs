#!/usr/bin/env node
/** Audit strutturale delle nuove voci Musurgia Mundi. Eseguire: node ... --new-id compositore-... */
import {readFileSync,existsSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {dirname,resolve} from "node:path";
const dir=dirname(fileURLToPath(import.meta.url)),root=resolve(dir,"../..");
const load=p=>JSON.parse(readFileSync(resolve(dir,p),"utf8"));
const g=load("grafo.json"),r=load("relazioni.json"),links=load("collegamenti-sito.json");
const all=new Map(g.nodes.map(n=>[n.id,n]));
const flag=process.argv.indexOf("--new-id"),specified=flag>=0?process.argv[flag+1]:null;
if(flag>=0&&(!specified||!all.has(specified))){console.error("ID autore inesistente o mancante");process.exit(2);}
const people=g.nodes.filter(n=>["compositore","persona"].includes(n.type)&&(!specified||n.id===specified));
const adjoining=id=>g.edges.filter(e=>e.source===id||e.target===id).map(e=>({...e,other:all.get(e.source===id?e.target:e.source)}));
let incomplete=0;
for(const n of people){
 const e=adjoining(n.id);
 const period=e.some(x=>x.other?.type==="periodo");
 const geography=Boolean(n.country&&n.geo_focus&&Number.isFinite(n.geo_focus.lat)&&Number.isFinite(n.geo_focus.lon)&&e.some(x=>x.other?.type==="geografia"));
 const form=e.some(x=>x.other?.id.startsWith("forma-"));
 const personal=r.relations.filter(x=>(x.source===n.id||x.target===n.id)&&x.status==="documentato"&&Array.isArray(x.sources)&&x.sources.length&&x.forward&&x.reverse);
 const refs=(links.byNode[n.id]||[]).filter(x=>x.title&&x.url&&x.url.includes("#")&&x.match!=="surname-unique");
 const returns=refs.filter(x=>{
   const path=x.url.replace(/^\.\.\//,"").split("#")[0]+"index.html";
   const file=resolve(root,path);if(!existsSync(file))return false;
   const html=readFileSync(file,"utf8"),anchor=x.url.split("#")[1];
   return html.includes('id="'+anchor+'"')&&html.includes("?n="+n.id);
 });
 const issues=[];
 if(!geography)issues.push("geografia (paese + coordinate + nodo geografico)");
 if(!period)issues.push("periodo");
 if(!form)issues.push("forma/genere specifico o giustificazione di non pertinenza");
 if(!refs.length)issues.push("riferimento editoriale puntuale");
 if(refs.length&&!returns.length)issues.push("ritorno bidirezionale");
 if(!personal.length)issues.push("relazioni personali da investigare (non bloccante)");
 const blocking=issues.filter(x=>!x.startsWith("relazioni personali")).length;
 if(blocking)incomplete++;
 if(specified)console.log(JSON.stringify({id:n.id,label:n.label,blocking,personal:personal.length,refs:refs.length,returns:returns.length,issues},null,2));
}
if(!specified)console.log("Nodi di persona/compositore:",people.length,"; non pronti:",incomplete,"; usare --new-id per controlli obbligatori. Le vecchie voci sono solo diagnosticate.");
if(specified&&incomplete)process.exit(1);
