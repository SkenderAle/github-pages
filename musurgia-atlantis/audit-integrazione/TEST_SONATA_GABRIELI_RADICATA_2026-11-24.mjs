// Regression gate for historical example L07-A050, staging only.
// Run at repository root:
// node musurgia-atlantis/audit-integrazione/TEST_SONATA_GABRIELI_RADICATA_2026-11-24.mjs
// This does not verify browser/Android rendering.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase}
  from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))
]));
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);

const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("// Una navigazione radicata per Suite",begin);
assert.ok(begin>=0&&end>begin,"Sonata scope not found");
const implementation=html.slice(begin,end);
const genreId="atlantis::senso:sonata-strumentale-1590";
const workId="atlantis::opera:sonata-pian-e-forte-1597";
const edgeId="L07-A050";
const index=new Map(db.nodes.map(n=>[n.id,n]));
const root=index.get(genreId);
const work=index.get(workId);
assert.ok(root&&root.category==="generi_forme","Historical sonata genre missing");
assert.ok(work&&work.category==="opere","Gabrieli work missing");
const attested=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id===edgeId);
assert.equal(attested.length,1,"Historical edge missing or duplicated");
const edge=attested[0];
assert.deepEqual(new Set([edge.source,edge.target]),new Set([genreId,workId]));
assert.equal(edge.relation,"esemplifica_sonata_strumentale_tardocinquecentesca");
assert.equal(edge.quality,"riscontro_storico_indipendente");

let assertions=10;
function project({depth=1,cats=new Set(["generi_forme","opere"]),edges=db.links}={}){
 const state={focus:null,trail:[genreId],trailEdges:[],depth,cats};
 const fn=new Function("state",implementation+"\nreturn sonataScopedProjection;")(state);
 return fn(db,edges,index,root);
}
let view=project();
assert.equal(view.scope,"sonata");assertions++;
assert.ok(view.nodes.some(n=>n.id===workId));assertions++;
assert.equal(view.links.filter(e=>e.id===edge.id).length,1);assertions++;
view=project({cats:new Set(["generi_forme"])});
assert.ok(!view.nodes.some(n=>n.id===workId));assertions++;
assert.ok(!view.links.some(e=>e.id===edge.id));assertions++;
view=project({depth:0});
assert.ok(!view.nodes.some(n=>n.id===workId));assertions++;
view=project({edges:db.links.filter(e=>e.id!==edge.id)});
assert.ok(!view.links.some(e=>e.id===edge.id));assertions++;
assert.ok(!view.nodes.some(n=>n.id===workId),"Work reappeared through a non-attested relation");assertions++;
console.log("PASS SONATA GABRIELI: "+assertions+" structural/view assertions");
