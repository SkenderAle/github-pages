// Audit riproducibile sulle 17 sorgenti reali e sul visualizzatore HTML.
// Eseguire dalla radice della copia locale del repository:
// node musurgia-atlantis/audit-integrazione/TEST_RICONCILIAZIONE_RELAZIONI_PERSONE_2026-11-21.mjs
// Con --write salva il registro in audit-integrazione. Senza --write stampa soltanto il riepilogo.
// Aggiornato 23/11/2026 per l'integrazione delle 16 relazioni autore–opera.
// Non modifica mai i database pubblici, né la vista HTML. Il vecchio report del 21/11 resta storico.
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
  const pred=String(edge.relation||"").toLowerCase();
  let semanticClass;
  if(other.category==="persone"){
   if(edge.layer==="mundi"){
     if(pred==="accesso_indiretto_alla_famiglia")
       semanticClass="NAVIGAZIONE_DERIVATA_NON_ATTESTAZIONE";
     else if(["forma-o-pratica-documentata","repertorio-formale-documentato",
       "repertorio-storico-documentato","repertorio-vocale-documentato",
       "musica-per-spettacolo-coreografico","relazione-storico-musicale",
       "pratica-di-genere"].includes(pred))
       semanticClass="PRATICA_O_REPERTORIO_GENERE";
     else semanticClass="RELAZIONE_STORICA_SPECIFICA_NON_OPERA_INFERITA";
   }else if(edge.layer==="atlantis"){
     if(["compone_musiche_per_la_comedie_ballet","compone_nel_genere_opera_ballet",
       "compone_e_pubblica_ricercari","compone_ricercari_nell_offerta_musicale"].includes(pred))
       semanticClass="PRATICA_O_REPERTORIO_GENERE";
     else if(/firma_coreografia|crea_coreografia|commissiona|produce|dirige|cura_scene|assiste_documenta_coreografia|riforme_del_balletto|commemora|destinata_inizialmente|composto_per_esequie/.test(pred))
       semanticClass="RUOLO_SCENICO_STORICO_O_OCCASIONE";
     else if(/scrive|autore_|compila_libretto|cura_libretto/.test(pred))
       semanticClass="RUOLO_LETTERARIO_LIBRETTISTICO";
     else if(/compone|composto_per|compone_la_musica/.test(pred))
       semanticClass="ATTRIBUZIONE_COMPOSIZIONE_FONTE_DA_VERIFICARE";
     else semanticClass="RELAZIONE_STORICA_ATLANTIS";
   }else semanticClass="ALTRA_RELAZIONE_PERSONA_DA_RIVEDERE";
  }else if(/sviluppa_o_illumina|condivide_partitura_ma_non_coreografia|confronto_non_causale/.test(pred))
    semanticClass="CONFRONTO_NON_CLASSIFICANTE";
  else if(other.category==="opere")
    semanticClass="OPERA_DOCUMENTATA_O_ESEMPIO_DA_VERIFICARE";
  else semanticClass="ALTRO_CONTESTO_O_RIMANDO_NON_AUTOMATICO";
  const key=root.id+"|"+edge.id;
  records.push({
   root_id:root.id,root_name:root.name,root_category:root.category,scope:view.scope,
   original_link_id:edge.id,original_layer:edge.layer,original_predicate:edge.relation,
   original_quality:edge.quality,other_id:otherID,other_name:other.name,other_category:other.category,
   preclassification:semanticClass,
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
assert.equal(specialized.length,169,"Numero radici specializzate differente: verificare i gate UI");
assert.equal(records.length,688,"Numero di occorrenze dopo il recupero dei 16 archi autore–opera");
assert.equal(actualPersonCount,515,"Le relazioni persone residue devono essere 515 dopo il recupero dei 16 archi");
assert.equal(direct382Hits,382,"Non tutti i 382 archi Mundi rimangono nell’archivio");

const matched382Set=new Set(records.filter(r=>r.in_382_mundi_register).map(r=>r.root_id+"|"+r.original_link_id));
const original382NotFound=canonical.records
 .filter(r=>!matched382Set.has(r.canonical_genre_id+"|"+r.source_edge_id))
 .map(r=>({root:r.canonical_genre_id,edge:r.source_edge_id,composer:r.canonical_composer_id}));
const historicalReference={
 from:"AUDIT_ARCHIVIO_RELAZIONI_ORIGINALI_2026-11-20.md",
 original_candidate_roots:159,specialized_roots:137,
 hidden_direct_occurrences:713,hidden_person_occurrences:531,
 intermediate_gate_2026_11_21:{specialized_roots:169,hidden_direct_occurrences:704,hidden_person_occurrences:531},
 comparability_note:"La scansione attuale include TUTTE le radici specializzate, non solo il campione originale di 159 candidati."
};
const result={
 schema:"musurgia-people-hidden-original-relations-v2",date:"2026-11-23",
 status:"RUNTIME_RESULT_NOT_BROWSER",
 source_count:sourcePaths.length,counts:db.counts,
 current_scope:{all_specialized_roots: specialized.length,all_hidden_direct_occurrences:records.length,
  hidden_person_occurrences:actualPersonCount,in_382_mundi_register:direct382Hits,
  original_382_not_in_hidden_scope:original382NotFound.length,
  hidden_person_occurrences_outside_382:actualPersonCount-direct382Hits},
 historical_reference:historicalReference,
 matches_current_counts:{
  specialized_roots:specialized.length===169,
  hidden_occurrences:records.length===688,
  hidden_person_occurrences:actualPersonCount===515,
  original_mundi_382_preserved:direct382Hits===382
 },
 hidden_by_category:perOtherCategory,hidden_by_origin:perOriginalLayer,
 hidden_by_scope:perScope,person_predicates:personPredicates,
 specialized_roots:specialized,canonical_382_not_hidden:original382NotFound,
 records
};
if(process.argv.includes("--write")){
 const out=resolve(here,"REGRESSIONE_PERSONE_POST_AUTORI_2026-11-23.json");
 writeFileSync(out,JSON.stringify(result,null,2)+"\n","utf8");
 console.log("Registro scritto:",out);
}
console.log(JSON.stringify({
 counts:result.current_scope,
 comparison:result.matches_current_counts,
 by_category:result.hidden_by_category,
 matched_382:direct382Hits,
 note:"Esecuzione logica; il risultato non implica test browser o verifica musicologica esterna."
},null,2));
