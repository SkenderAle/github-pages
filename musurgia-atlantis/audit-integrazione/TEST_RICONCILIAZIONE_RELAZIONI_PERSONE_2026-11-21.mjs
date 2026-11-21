// Audit riproducibile sulle 17 sorgenti reali e sul visualizzatore HTML.
// Eseguire dalla radice della copia locale del repository:
// node musurgia-atlantis/audit-integrazione/TEST_RICONCILIAZIONE_RELAZIONI_PERSONE_2026-11-21.mjs
// Con --write salva il registro in audit-integrazione. Senza --write stampa soltanto il riepilogo.
// Non modifica mai i database pubblici, né la vista HTML.
import assert from "node:assert/strict";
import {readFileSync,writeFileSync} from "node:fs";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {sourcePaths,buildUnifiedDatabase} from "./DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs";

const here=dirname(fileURLToPath(import.meta.url));
const rootDir=resolve(here,"../..");
assert.equal(sourcePaths.length,17,"Numero inatteso di sorgenti");
const inputs=Object.fromEntries(sourcePaths.map(({key,path})=>[
 key,JSON.parse(readFileSync(resolve(rootDir,path),"utf8"))
]));
const db=buildUnifiedDatabase(inputs);
assert.equal(db.counts.nodes,2897,"Nodi diversi dal gate del 20 novembre");
assert.equal(db.counts.links,8743,"Archi diversi dal gate del 20 novembre");
assert.equal(db.counts.flaminio_source_records,500);
assert.equal(db.counts.orphan_links,0);
assert.equal(db.counts.duplicate_link_ids,0);
const html=readFileSync(resolve(here,"VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html"),"utf8");
const start=html.indexOf("function sonataScopedProjection(");
const end=html.indexOf("function recordNodePosition(",start);
assert.ok(start>=0&&end>start,"Proiezioni HTML non individuate");
const archiveStart=html.indexOf("function hiddenOriginalRelations(");
const archiveEnd=html.indexOf("function showArchivedEdge(",archiveStart);
assert.ok(archiveStart>=0&&archiveEnd>archiveStart,"Archivio originale non individuato");
const state={
 root:null,focus:null,trail:[],trailEdges:[],depth:5,
 cats:new Set(db.nodes.map(n=>n.category)),
 lenses:new Set(["musica","trasmissioni","genealogie","collaborazioni"]),
 comparison:null
};
// Equivalente del bucket Mundi attivo sul test: le quattro lenti sono tutte accese.
const lensBucket=e=>["mundi","mundi_extension"].includes(e.layer)?"musica":null;
const project=new Function("state","lensBucket","comparisonProjection",
 html.slice(start,end)+"\nreturn rootedProjection;")(state,lensBucket,()=>null);
const hiddenOriginalRelations=new Function(
 html.slice(archiveStart,archiveEnd)+"\nreturn hiddenOriginalRelations;")();
const canonical=JSON.parse(readFileSync(resolve(here,
 "REGISTRO_RICONCILIAZIONE_382_ARCHI_MUNDI_ATLANTIS_2026-11-21.json"),"utf8"));
const referencePairs=new Set(canonical.records.map(x=>x.canonical_genre_id+"|"+x.source_edge_id));
const byID=new Map(db.nodes.map(n=>[n.id,n]));
const records=[],specialized=[],perScope={};
for(const root of db.nodes){
 if(root.visibility==="documentary")continue;
 state.root=root.id;state.focus=null;state.trail=[root.id];state.trailEdges=[];
 const view=project(db);
 if(!view.scope)continue;
 specialized.push({root_id:root.id,root_name:root.name,scope:view.scope});
 const hidden=hiddenOriginalRelations(db,root.id,view.links);
 for(const edge of hidden){
  const otherID=edge.source===root.id?edge.target:edge.source;
  const other=byID.get(otherID);
  assert.ok(other,"Arco verso nodo inesistente: "+edge.id);
  let semanticClass="RELATION_OR_CONTEXT_REQUIRES_REVIEW";
  const pred=String(edge.relation||"");
  if(/tratta|menziona|rimanda|citazione|richiamo|documenta/i.test(pred))
   semanticClass="MENZIONE_O_CONTESTO";
  else if(/confront|illumina|parallel|analogia|influenza/i.test(pred))
   semanticClass="CONFRONTO_O_INFLUENZA";
  else if(/forma|pratica|repertorio|genere|attivita|storico.musicale/i.test(pred))
   semanticClass="PRATICA_O_REPERTORIO_DI_GENERE";
  else if(other.category==="persone"&&root.category==="opere"&&/compone|scrive|trascrive/i.test(pred))
   semanticClass="RELAZIONE_OPERA_PERSONA_DA_VERIFICARE";
  const key=root.id+"|"+edge.id;
  records.push({
   root_id:root.id,root_name:root.name,root_category:root.category,scope:view.scope,
   original_link_id:edge.id,original_layer:edge.layer,original_predicate:edge.relation,
   original_quality:edge.quality,other_id:otherID,other_name:other.name,other_category:other.category,
   semantic_preclassification:semanticClass,
   in_382_mundi_register:referencePairs.has(key),
   original_source_id:edge.original?.id||null,
   action:"ARCHIVE_ONLY_NO_AUTOMATIC_PROMOTION"
  });
  perScope[view.scope]=(perScope[view.scope]||0)+1;
 }
}
const perOtherCategory={},perOriginalLayer={},personPredicates={};
for(const r of records){
 perOtherCategory[r.other_category]=(perOtherCategory[r.other_category]||0)+1;
 perOriginalLayer[r.original_layer]=(perOriginalLayer[r.original_layer]||0)+1;
 if(r.other_category==="persone")personPredicates[r.original_predicate]=(personPredicates[r.original_predicate]||0)+1;
}
const actualPersonCount=perOtherCategory.persone||0;
const direct382Hits=records.filter(r=>r.in_382_mundi_register).length;
const matched382Set=new Set(records.filter(r=>r.in_382_mundi_register).map(r=>r.root_id+"|"+r.original_link_id));
const original382NotFound=canonical.records
 .filter(r=>!matched382Set.has(r.canonical_genre_id+"|"+r.source_edge_id))
 .map(r=>({root:r.canonical_genre_id,edge:r.source_edge_id,composer:r.canonical_composer_id}));
const historicalReference={
 from:"AUDIT_ARCHIVIO_RELAZIONI_ORIGINALI_2026-11-20.md",
 original_candidate_roots:159,specialized_roots:137,
 hidden_direct_occurrences:713,hidden_person_occurrences:531,
 comparability_note:"La scansione attuale include TUTTE le radici specializzate, non solo il campione originale di 159 candidati."
};
const result={
 schema:"musurgia-people-hidden-original-relations-v1",date:"2026-11-21",
 status:"RUNTIME_RESULT_IF_EXECUTED_LOCAL_NODE",
 source_count:sourcePaths.length,counts:db.counts,
 current_scope:{all_specialized_roots: specialized.length,all_hidden_direct_occurrences:records.length,
  hidden_person_occurrences:actualPersonCount,in_382_mundi_register:direct382Hits,
  original_382_not_in_hidden_scope:original382NotFound.length},
 historical_reference:historicalReference,
 matches_historical_counts:{
  specialized_roots:specialized.length===137,
  hidden_occurrences:records.length===713,
  hidden_person_occurrences:actualPersonCount===531
 },
 hidden_by_category:perOtherCategory,hidden_by_origin:perOriginalLayer,
 hidden_by_scope:perScope,person_predicates:personPredicates,
 specialized_roots:specialized,canonical_382_not_hidden:original382NotFound,
 records
};
if(process.argv.includes("--write")){
 const out=resolve(here,"REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json");
 writeFileSync(out,JSON.stringify(result,null,2)+"\n","utf8");
 console.log("Registro scritto:",out);
}
console.log(JSON.stringify({
 counts:result.current_scope,
 comparison:result.matches_historical_counts,
 by_category:result.hidden_by_category,
 matched_382:direct382Hits,
 note:"PASS esecutivo soltanto dopo esecuzione in Node CLI: non implica test browser o verifica musicologica."
},null,2));
