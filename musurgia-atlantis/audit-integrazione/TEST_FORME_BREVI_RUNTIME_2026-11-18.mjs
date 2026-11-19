// Test sul corpus reale per Forme brevi. Non sostituisce DOM/WebGL/Android.
// Eseguire: node musurgia-atlantis/audit-integrazione/TEST_FORME_BREVI_RUNTIME_2026-11-18.mjs
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const d=Object.fromEntries(sourcePaths.map(({key,path})=>[key,JSON.parse(readFileSync(resolve(root,path),"utf8"))]));
assert.equal(sourcePaths.length,17);
const db=buildUnifiedDatabase(d);
assert.equal(db.counts.nodes,2897);assert.equal(db.counts.links,8731);
assert.equal(db.counts.short_staging_nodes,9);assert.equal(db.counts.short_staging_links,14);
assert.equal(db.counts.orphan_links,0);assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);
for(const name of ["Preludio","Toccata","Fantasia","Notturno","Rapsodia"])
 assert.ok(!db.nodes.some(n=>n.layer==="short_staging"&&n.name===name),"Forma preesistente duplicata "+name);
assert.equal(db.nodes.filter(n=>n.layer==="short_staging"&&n.category==="opere").length,0);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function shortFormScopedProjection("),end=html.indexOf("function rootedProjection(",begin);
assert.ok(begin>0&&end>begin);
const fn=new Function("state",html.slice(begin,end)+"\nreturn shortFormScopedProjection;");
const index=new Map(db.nodes.map(n=>[n.id,n])),cats=new Set(db.nodes.map(n=>n.category));
const edges=db.links.filter(e=>e.visibility!=="documentary"&&!/(HOLD|SOSPES|REJECTED)/i.test(e.quality||""));
function project(root){return fn({root,focus:null,trail:[root],trailEdges:[],depth:5,cats})(db,edges,index,index.get(root))}
const family=project("tax20261115brevi::family"),prelude=project("mundi::forma-preludio");
assert.equal(family.nodes.length,14);assert.equal(family.links.length,13);
assert.equal(prelude.nodes.length,2);assert.equal(prelude.links.length,1);
assert.ok(!prelude.nodes.some(n=>n.name==="Studio musicale"));
assert.ok(!family.nodes.some(n=>n.category==="opere"||n.visibility==="documentary"));
console.log(JSON.stringify({status:"PASS_REAL_DATA_LOGICAL_NOT_BROWSER",counts:db.counts,
 checks:{no_duplicate_forms:true,no_sibling_spill:true,no_documentary_works:true}},null,2));
