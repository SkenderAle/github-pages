import {candidateQ7BSource} from "./Q7B_CORRETTIVO_TASSONOMIA_A440.mjs";
// A420: isolated evaluation of the actual Q7B rootedProjection, not a browser/rendering test.
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {runInNewContext} from "node:vm";
export function auditQ7B(db,preview,variant='original'){
 const raw=readFileSync(new URL("../VISTA_DB_FEDERATO_Q7B_CANDIDATO_2026-11-28.html",import.meta.url));
 const sha=createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
 if(sha!=="0ab95474072f8abb16be2a5e68d5b1c328df5f23")throw Error("Q7B source changed: "+sha);
 const html=raw.toString("utf8"),start=html.indexOf("const $=id=>document.getElementById(id);"),end=html.indexOf('$("searchEntity").addEventListener("input",showEntityResults);');
 if(start<0||end<=start)throw Error("Q7B boundaries");
 const sandbox={db,preview,console,URL};
 const project=runInNewContext((variant==='A440'?candidateQ7BSource(html.slice(start,end)):html.slice(start,end))+`\n(root,depth,focus=null,trail=[],trailEdges=[],lenses=true)=>{state.db=db;state.root=root;state.depth=depth;state.focus=focus;state.trail=trail;state.trailEdges=trailEdges;state.comparison=null;state.cats=new Set(catList.filter(c=>c[0]!=="documentazione").map(c=>c[0]));state.lenses=new Set(lenses?["musica","trasmissioni","genealogie","collaborazioni"]:[]);return rootedProjection(db);}`,sandbox,{timeout:15000});
 const checks=[],nodes=new Map(db.nodes.map(n=>[n.id,n])),edges=db.links.filter(e=>e.id.startsWith("flaminio_lot03::"));
 const check=(name,fn)=>{try{const detail=fn();checks.push({name,pass:true,detail});}catch(e){checks.push({name,pass:false,detail:String(e.message||e)});}};
 const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
 const ids=v=>new Set(v.nodes.map(n=>n.id));
 const edgeIds=v=>new Set(v.links.map(e=>e.id));
 const roles=edges.filter(e=>["compone","elabora_melodia_tradizionale"].includes(e.relation));
 for(const root of new Set(roles.map(e=>e.source))){
  check("author direct "+root,()=>{const v=project(root,1),i=ids(v),l=edgeIds(v),expected=roles.filter(e=>e.source===root),missing=expected.filter(e=>!i.has(e.target)||!l.has(e.id));assert(!missing.length,"missing "+missing.length+"/"+expected.length+" "+missing.slice(0,5).map(e=>e.id).join(","));return expected.length;});
  for(let d=1;d<=5;d++)check("author integrity "+root+" "+d,()=>{const v=project(root,d),i=ids(v);assert(i.has(root)&&v.nodes.every(n=>n.visibility!=="documentary")&&v.links.every(e=>i.has(e.source)&&i.has(e.target)),"invalid projection");return {nodes:i.size,links:v.links.length};});
  check("lenses off "+root,()=>{const v=project(root,5,null,[],[],false);assert(v.nodes.length===1&&v.links.length===0,"lenses off leaks");});
 }
 for(const n of preview.taxonomy_node_proposals)check("taxonomy "+n.id,()=>{const v=project(n.id,2),i=ids(v),direct=edges.filter(e=>e.relation==="appartiene_al_genere_o_forma"&&e.target===n.id),children=edges.filter(e=>e.relation==="genere_contiene_sottogenere"&&e.source===n.id).map(e=>e.target),expected=[...direct,...edges.filter(e=>e.relation==="appartiene_al_genere_o_forma"&&children.includes(e.target))];assert(expected.every(e=>i.has(e.source)),"missing vocal works "+expected.filter(e=>!i.has(e.source)).map(e=>e.source).join(","));return expected.length;});
 const collections=edges.filter(e=>e.relation==="parte_di_raccolta");
 for(const c of new Set(collections.map(e=>e.target))){
  check("collection direct "+c,()=>{const v=project(c,1),i=ids(v),expected=collections.filter(e=>e.target===c);assert(expected.every(e=>i.has(e.source)),"missing members "+expected.filter(e=>!i.has(e.source)).length);return expected.length;});
 }
 // Inspect author->collection->member traversal only when that collection is actually attached to an author.
 const chains=roles.filter(e=>collections.some(p=>p.target===e.target));
 const authorCollections=new Map();for(const a of roles){for(const p of collections.filter(p=>p.source===a.target)){if(!authorCollections.has(a.source))authorCollections.set(a.source,new Set());authorCollections.get(a.source).add(p.target);}}
 for(const [author,expected] of authorCollections)check("author member collection traversal "+author,()=>{const i=ids(project(author,2)),missing=[...expected].filter(id=>!i.has(id));assert(!missing.length,"missing "+missing.length+"/"+expected.size+" collections "+missing.slice(0,6).join(","));return expected.size;});
 for(const [author,expected] of authorCollections)check("author member collection focused traversal "+author,()=>{const a=roles.find(a=>a.source===author&&collections.some(p=>p.source===a.target));const i=ids(project(author,1,a.target,[author,a.target],[a.id])),needed=collections.filter(p=>p.source===a.target).map(p=>p.target);assert(needed.every(id=>i.has(id)),"missing focused collection");return needed.length;});
 for(const a of chains)check("author collection recursion "+a.id,()=>{const i=ids(project(a.source,2)),expected=collections.filter(e=>e.target===a.target);assert(expected.every(e=>i.has(e.source)),"missing recursive members "+expected.filter(e=>!i.has(e.source)).length);return expected.length;});
 const tax=edges.filter(e=>e.relation==="appartiene_al_genere_o_forma");
 for(const root of new Set(tax.map(e=>e.target)))check("canonical taxonomy direct "+root,()=>{const i=ids(project(root,1)),expected=tax.filter(e=>e.target===root),missing=expected.filter(e=>!i.has(e.source));assert(!missing.length,"missing "+missing.length+"/"+expected.length);return expected.length;});
 return {schema:"lot03-q7b-audit-v1",source_blob:sha,scope:"real Q7B logic in VM; no DOM, no GUI deployment",variant,checks,pass:checks.filter(c=>c.pass).length,fail:checks.filter(c=>!c.pass).length};
}
