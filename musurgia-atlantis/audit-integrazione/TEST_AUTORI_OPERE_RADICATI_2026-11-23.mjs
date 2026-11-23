// Regressione riproducibile: soltanto 16 rapporti originali autore->opera
// verificati, e solo dalla radice dell'opera in staging.
// Eseguire dalla radice del repository:
// node musurgia-atlantis/audit-integrazione/TEST_AUTORI_OPERE_RADICATI_2026-11-23.mjs
// Non modifica alcun file; non e' un test DOM/WebGL/Android.
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase}
  from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17);
const data=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))
]));
const db=buildUnifiedDatabase(data);
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
assert.equal(db.counts.flaminio_source_records,500);

const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const begin=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",begin);
assert.ok(begin>=0&&end>begin,"Proiezioni HTML non trovate");
const archBegin=html.indexOf("function hiddenOriginalRelations(");
const archEnd=html.indexOf("function showArchivedEdge(",archBegin);
assert.ok(archBegin>=0&&archEnd>archBegin,"Archivio HTML non trovato");
const state={
 root:null,focus:null,trail:[],trailEdges:[],depth:5,comparison:null,
 cats:new Set(db.nodes.map(n=>n.category)),
 lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"])
};
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
const {rootedProjection,verifiedRootWorkComposerRules}=
 new Function("state","lensBucket","comparisonProjection",
 html.slice(begin,end)+"\nreturn {rootedProjection,verifiedRootWorkComposerRules};")
 (state,lensBucket,()=>null);
const hiddenOriginalRelations=new Function(
 html.slice(archBegin,archEnd)+"\nreturn hiddenOriginalRelations;")();
const expected=[
 ["L03-A40","atlantis::opera:an-die-ferne-geliebte-op98","atlantis::pers:beethoven","compone_ciclo_di_lieder"],
 ["L05-A048","atlantis::opera:bolero-ravel-1928","atlantis::pers:ravel","compone"],
 ["L02-A01","atlantis::opera:don-juan-gluck-angiolini-1761","atlantis::pers:gluck","compone_musica_per"],
 ["L03-A28","atlantis::opera:egmont-op84","atlantis::pers:beethoven","compone_musiche_per"],
 ["E0754","atlantis::opera:inno-italiani","atlantis::pers:novaro","compone_la_musica_di"],
 ["L05-A051","atlantis::opera:la-valse-ravel-1920","atlantis::pers:ravel","compone"],
 ["E0699","atlantis::opera:messe-notre-dame","atlantis::pers:machaut","compone_la_musica_di"],
 ["E0706","atlantis::opera:missa-papae-marcelli","atlantis::pers:palestrina","compone_la_musica_di"],
 ["E0717","atlantis::opera:passione-matteo","atlantis::pers:bach","compone_la_musica_di"],
 ["L165-A01","atlantis::opera:isaac-quis-dabit-capiti-meo-1492","atlantis::pers:heinrich-isaac","compone_mottetto_funebre_nel_1492"],
 ["L169-A01","atlantis::opera:handel-messiah-hwv56","atlantis::pers:handel","compone_oratorio_nel_1741"],
 ["L174-A01","atlantis::opera:victoria-officium-defunctorum-1605","atlantis::pers:tomas-luis-de-victoria","compone_e_pubblica_officium_1605"],
 ["L181-A01","atlantis::opera:haydn-die-schoepfung-1798","atlantis::pers:haydn","compone_oratorio_die_schoepfung"],
 ["L182-A01","atlantis::opera:beethoven-missa-solemnis-op123","atlantis::pers:beethoven","compone_missa_solemnis_1819_1823"],
 ["L183-A01","atlantis::opera:schubert-erlkoenig-d328","atlantis::pers:schubert","compone_lied_erlkoenig_d328"],
 ["L205-A01","atlantis::opera:britten-war-requiem-op66-1962","atlantis::pers:britten","compone_war_requiem_op66_per_coventry"]
];
assert.equal(verifiedRootWorkComposerRules.size,16);
const byID=new Map(db.nodes.map(n=>[n.id,n]));
for(const [sourceId,workId,personId,relation] of expected){
 const rule=verifiedRootWorkComposerRules.get(sourceId);
 assert.deepEqual(rule,{work:workId,person:personId,relation},
  sourceId+": identificativi canonici variati");
 const hits=db.links.filter(e=>e.layer==="atlantis"&&e.original?.id===sourceId);
 assert.equal(hits.length,1,sourceId+": arco fonte assente o duplicato");
 const edge=hits[0];
 assert.equal(edge.source,personId);assert.equal(edge.target,workId);
 assert.equal(edge.relation,relation);
 assert.equal(edge.original?.historical_verified_independently,true);
 assert.match(edge.original?.verification_status||"",/^confermato_da_/);
 assert.ok(edge.original?.evidence_urls?.length,sourceId+": fonte assente");
 assert.equal(byID.get(workId)?.category,"opere");
 assert.equal(byID.get(personId)?.category,"persone");

 state.root=workId;state.focus=null;state.trail=[workId];state.trailEdges=[];
 const view=rootedProjection(db);
 assert.ok(view.scope,sourceId+": radice non specializzata");
 assert.equal(view.links.filter(e=>e.id===edge.id).length,1,sourceId+": arco non visibile una sola volta");
 assert.ok(view.nodes.some(n=>n.id===personId),sourceId+": persona non visibile");
 assert.equal(view.parents.get(personId)?.edge?.id,edge.id);
 assert.equal(view.distance.get(personId),1);
 assert.ok(!hiddenOriginalRelations(db,workId,view.links).some(e=>e.id===edge.id),
  sourceId+": arco ancora mostrato in archivio");

 // Il click sull'autore mantiene il percorso originale opera->autore,
 // senza adottare il repertorio degli altri generi o compositori.
 state.focus=personId;state.trail=[workId,personId];state.trailEdges=[edge.id];
 const focused=rootedProjection(db);
 assert.ok(focused.links.some(e=>e.id===edge.id),sourceId+": focus perde l'arco");
 assert.equal(focused.distance.get(personId),0);

 state.focus=null;state.trail=[workId];state.trailEdges=[];
 state.cats.delete("persone");
 const filtered=rootedProjection(db);
 assert.ok(!filtered.links.some(e=>e.id===edge.id),sourceId+": filtro Persone non rispettato");
 state.cats.add("persone");
}
// Niente falso autore per contributi di altre persone.
for(const [rootId,sourceId] of [
 ["atlantis::opera:an-die-ferne-geliebte-op98","L03-A41"], // Jeitteles: poeta
 ["atlantis::opera:don-juan-gluck-angiolini-1761","L02-A02"], // Angiolini: coreografia
 ["atlantis::opera:bolero-ravel-1928","L05-A049"], // Rubinstein: commissione
 ["atlantis::opera:inno-italiani","E0872"], // Mameli: testo
 ["atlantis::opera:victoria-officium-defunctorum-1605","L174-A02"] // imperatrice: occasione
]){
 state.root=rootId;state.focus=null;state.trail=[rootId];state.trailEdges=[];
 const projected=rootedProjection(db);
 assert.ok(!projected.links.some(e=>e.original?.id===sourceId),
  sourceId+": ruolo non musicale promosso indebitamente");
}
state.root="atlantis::senso:opera";state.trail=[state.root];
const opera=rootedProjection(db);
assert.ok(opera.scope===undefined||opera.scope!=="composer_rooted_work");
assert.equal(db.counts.nodes,2897);
assert.equal(db.counts.links,8743);
console.log(JSON.stringify({
 status:"PASS_AUTORI_OPERE_RADICATI_RUNTIME",
 source_count:17,verified_composer_links:expected.length,
 original_nodes:db.counts.nodes,original_links:db.counts.links,
 tested_negative_roles:5,browser_tested:false,production_changed:false
},null,2));
