// Test del database reale e della proiezione radicata per Danze strumentali.
// Eseguire dalla root: node musurgia-atlantis/audit-integrazione/TEST_DANZE_STRUMENTALI_RUNTIME_2026-11-17.mjs
// Non costituisce collaudo DOM/WebGL/Android; da eseguire su clone completo.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,"../..");
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>[key,JSON.parse(readFileSync(resolve(root,path),"utf8"))]));
assert.equal(sourcePaths.length,17);
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8729);
assert.equal(db.counts.dance_staging_nodes,10);
assert.equal(db.counts.dance_staging_links,10);
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.nodes.filter(n=>n.layer==="dance_staging"&&n.category==="opere").length,0);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function suiteScopedProjection(");
const end=html.indexOf("\n\n\n // Struttura dell'opera:",start);
assert.ok(start>0&&end>start);
const fn=new Function("state",html.slice(start,end)+"\nreturn suiteScopedProjection;");
const index=new Map(db.nodes.map(n=>[n.id,n]));
const cats=new Set(db.nodes.map(n=>n.category));
const edges=db.links.filter(e=>e.visibility!=="documentary"&&!/(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test(e.quality||""));
function project(id){const state={root:id,focus:null,trail:[id],trailEdges:[],depth:5,cats};
 return fn(state)(db,edges,index,index.get(id))}
const family="tax20261115danze::suite-dances";
const suite=project("mundi::genere-suite"),f=project(family),a=project("tax20261115danze::allemanda");
const has=(r,id)=>r.nodes.some(n=>n.id===id);
assert.equal(suite.scope,"suite_sinfonico");
assert.ok(has(suite,family)&&has(suite,"tax20261115danze::allemanda"));
assert.ok(has(f,"tax20261115danze::gagliarda")&&has(f,"mundi::genere-suite"));
assert.ok(has(a,family)&&has(a,"mundi::genere-suite"));
assert.ok(!has(a,"tax20261115danze::giga")&&!has(a,"tax20261115danze::corrente"));
assert.ok(!a.nodes.some(n=>n.category==="opere"));
assert.ok(!f.nodes.some(n=>n.name==="Aida"||n.name==="Don Giovanni"));
assert.equal(db.nodes.filter(n=>n.id==="tax20261115cf::form:ciaccona").length,1);
assert.equal(db.nodes.filter(n=>n.id==="tax20261115cf::form:passacaglia").length,1);
console.log(JSON.stringify({status:"PASS_REAL_DATA_LOGICAL_NOT_BROWSER",counts:db.counts,
 tests:{suite_to_dance:true,dance_to_suite:true,no_sibling_leak:true,no_new_works_from_movement:true,no_counterpoint_duplication:true}},null,2));
