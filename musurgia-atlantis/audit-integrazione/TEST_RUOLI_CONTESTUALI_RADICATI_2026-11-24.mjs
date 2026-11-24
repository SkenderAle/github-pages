// Check 21 exact role links in the 17-source real staging database.
// Run from repository root with Node. NOT a browser/Android test.
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
const begin=html.indexOf("const verifiedRootContextRoleRules=");
const end=html.indexOf("function rootedProjection(db){",begin);
assert.ok(begin>=0&&end>begin);
const excerpt=html.slice(begin,end);
const expected=[
 ["atlantis::opera:an-die-ferne-geliebte-op98","atlantis::pers:alois-jeitteles","L03-A41","scrive_testi_poetici"],
 ["atlantis::opera:bolero-ravel-1928","atlantis::pers:ida-rubinstein","L05-A049","commissiona"],
 ["atlantis::opera:don-juan-gluck-angiolini-1761","atlantis::pers:angiolini","L02-A02","crea_coreografia_di"],
 ["atlantis::opera:inno-italiani","atlantis::pers:mameli","E0872","scrive_il_testo_di"],
 ["atlantis::opera:la-valse-ravel-1920","atlantis::pers:diaghilev","L05-A052","commissiona_ma_non_mette_in_scena"],
 ["atlantis::produzione:la-valse-rubinstein-nizinska-1929","atlantis::pers:bronislava-nizinskaja","L05-A055","firma_coreografia"],
 ["atlantis::produzione:la-valse-rubinstein-nizinska-1929","atlantis::pers:ida-rubinstein","L05-A054","produce"],
 ["atlantis::produzione:sagra-bausch-1975","atlantis::pers:bausch","L05-A037","firma_coreografia"],
 ["atlantis::produzione:sagra-nizinskij-1913","atlantis::pers:marie-rambert","L05-A033","assiste_documenta_coreografia"],
 ["atlantis::produzione:sagra-nizinskij-1913","atlantis::pers:nikolaj-roerich","L05-A032","cura_scene_e_costumi"],
 ["atlantis::produzione:sagra-nizinskij-1913","atlantis::pers:pierre-monteux","L05-A035","dirige_prima"],
 ["atlantis::produzione:sagra-nizinskij-1913","atlantis::pers:diaghilev","L05-A034","produce"],
 ["atlantis::produzione:sagra-nizinskij-1913","atlantis::pers:nizinskij","L05-A031","firma_coreografia"],
 ["atlantis::opera:isaac-quis-dabit-capiti-meo-1492","atlantis::pers:angelo-poliziano","L165-A02","scrive_testo_poetico_per"],
 ["atlantis::opera:isaac-quis-dabit-capiti-meo-1492","atlantis::pers:lorenzo-il-magnifico","L165-A03","commemora_morte_del_1492"],
 ["atlantis::opera:handel-messiah-hwv56","atlantis::pers:charles-jennens","L169-A02","compila_libretto_biblico"],
 ["atlantis::opera:victoria-officium-defunctorum-1605","atlantis::pers:maria-d-austria-imperatrice","L174-A02","composto_per_esequie_imperatrice_1603"],
 ["atlantis::opera:haydn-die-schoepfung-1798","atlantis::pers:gottfried-van-swieten","L181-A02","cura_libretto_bilingue_e_sua_revisione"],
 ["atlantis::opera:beethoven-missa-solemnis-op123","atlantis::pers:rudolfo-arciduca-austria","L182-A02","destinata_inizialmente_a_insediamento_1820"],
 ["atlantis::opera:schubert-erlkoenig-d328","atlantis::pers:johann-wolfgang-goethe","L183-A02","autore_della_ballata_poetica_messa_in_musica"],
 ["atlantis::opera:britten-war-requiem-op66-1962","atlantis::pers:wilfred-owen","L205-A02","autore_poesie_inserite_accanto_testo_liturgico"]
];
assert.equal(expected.length,21);
let checks=0;
function check(value,description){assert.ok(value,description);checks++}
const index=new Map(db.nodes.map(n=>[n.id,n]));
for(const [rootId,personId,originalId,relation] of expected){
 const root=index.get(rootId),person=index.get(personId);
 check(root?.category==="opere","Work or production root absent: "+rootId);
 check(person?.category==="persone","Person missing: "+personId);
 const links=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id===originalId);
 check(links.length===1,"Missing/duplicate original edge "+originalId);
 const edge=links[0];
 check(new Set([edge.source,edge.target]).size===2&&
   [edge.source,edge.target].includes(rootId)&&
   [edge.source,edge.target].includes(personId),"Endpoints mismatch "+originalId);
 check(edge.relation===relation,"Predicate mismatch "+originalId);
 check(edge.original?.historical_verified_independently===true,
   "Historical flag missing "+originalId);
 check(/^confermato_da_/.test(edge.original?.verification_status||""),
   "Verification status missing "+originalId);
 check(Array.isArray(edge.original?.evidence_urls)&&edge.original.evidence_urls.length>0,
   "No sources "+originalId);
 const state={focus:null,trail:[rootId],trailEdges:[],depth:1,
   cats:new Set(["opere","persone"]),lenses:new Set(["musica"])};
 const fn=new Function("state","withVerifiedRootWorkComposers",excerpt+
   "\nreturn withVerifiedRootContextRoles;")(state,(_db,_edges,_index,_root,view)=>view);
 const base={nodes:[root],links:[],parents:new Map(),distance:new Map([[rootId,0]])};
 const project=()=>fn(db,db.links,index,root,base);
 let view=project();
 check(view.nodes.some(n=>n.id===personId),"Person not shown "+originalId);
 check(view.links.filter(e=>e.id===edge.id).length===1,"Edge duplicated/hidden "+originalId);
 state.cats.delete("persone");view=project();
 check(!view.nodes.some(n=>n.id===personId),"Person filter failed "+originalId);
 state.cats.add("persone");state.lenses.clear();view=project();
 check(!view.nodes.some(n=>n.id===personId),"Lens filter failed "+originalId);
 state.lenses.add("musica");state.focus=personId;
 state.trail=[rootId,personId];state.trailEdges=[edge.id];view=project();
 check(view.nodes.some(n=>n.id===personId)&&view.links.some(e=>e.id===edge.id),
   "Focused trail lost "+originalId);
 state.focus=null;state.trail=[rootId];state.trailEdges=[];state.depth=0;view=project();
 check(!view.nodes.some(n=>n.id===personId),"Depth filter failed "+originalId);
}
const sourceIDs=new Set(expected.map(x=>x[2]));
check(!sourceIDs.has("L02-A20")&&!sourceIDs.has("L02-A31"),
  "Generic-genre contextual roles must not become work-specific.");
console.log("PASS role relationships: "+checks+" checks, "+expected.length+" source edges");
