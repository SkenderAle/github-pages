/* Musurgia Mundi–Atlantis, integrazione non distruttiva del lotto Flaminio 01.
 * I nodi documentari e gli archi in HOLD non vengono promossi a fatti musicali.
 * Dati originali sempre disponibili in .provenance[].payload e .original.
 * File generato: non modificare le basi di produzione.
 */
const pathRoot = new URL("../../", import.meta.url);
export const sourcePaths = [
  {
    "key": "mundi",
    "path": "atlante3d/database/grafo.json"
  },
  {
    "key": "mundi_specialist",
    "path": "atlante3d/database/relazioni.json"
  },
  {
    "key": "atlantis",
    "path": "musurgia-atlantis/grafo.json"
  },
  {
    "key": "flaminio_staging",
    "path": "musurgia-atlantis/audit-integrazione/STAGING_GRAFO_FEDERATO_LOTTO01_JSB06_V11_GATE04_COPIA_2026-11-15.json"
  }
];
export const registryPath = "musurgia-atlantis/audit-integrazione/DB_FEDERATO_LOTTO01_2026-11-15_REGISTRO_500.json";
const normName = s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[‘’´']/g,"").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ")
function categoryFor(layer,node) {
  const c=String(node.category||node.type||"").toLowerCase(), sub=String(node.subtype||"").toLowerCase(), tax=String(node.taxonomy?.class||"").toLowerCase(),id=String(node.id||"").toLowerCase();
  if(layer==="flaminio" && (/scheda_catalogo|rubrica_fonte|intestazione_autore|scheda_audit|riferimento_documentario|annotazione_organologica|fonte_manoscritta/.test(c)))return "documentazione";
  if(layer==="mundi"){
    if(c==="compositore"||c==="persona")return "persone";
    if(c==="geografia")return "luoghi";
    if(c==="periodo"||c==="ambito")return "reti_culturali";
    if(c==="corrente"){
      if(/genere|forma|sottogenere|famiglia_form/.test(tax)||/^(genere-|forma-)/.test(id))return "generi_forme";
      if(/istituzion|conservator|cappella|teatro/.test(tax)||/^(istituzione|conservatorio|cappella|teatro)-/.test(id))return "istituzioni";
      if(/scuola|corrente-storica|corrente-stilistica|tradizion/.test(tax)||/^(scuola-|corrente-)/.test(id))return "reti_culturali";
      return "concetti";
    }
  }
  if(layer==="atlantis"){
    if(c==="persona")return "persone";
    if(c==="opera"||c==="versione-opera"||c==="parte-di-opera")return "opere";
    if(c==="capitolo")return "capitoli";
    if(c==="luogo")return "luoghi";
    if(c==="strumento")return "strumenti";
    if(c==="rete-culturale")return "reti_culturali";
    if(/^(allestimento|produzione|evento-storico)$/.test(c))return "eventi";
    if(/documento/.test(c))return "documentazione";
    if(c==="nodo-di-senso"){
      if(/genere|forma|sottogenere/.test(sub))return "generi_forme";
      if(/istituzion/.test(sub)||/^istituzione:/.test(id))return "istituzioni";
      if(/scuola|tradizion|corrente|rete|ambiente/.test(sub)||/^rete:/.test(id))return "reti_culturali";
      return "concetti";
    }
  }
  if(layer==="flaminio"){
    if(/^persona(?:_|$)/.test(c))return "persone";
    if(/genere|forma/.test(c))return "generi_forme";
    if(/opera|cantata|raccolta|versione|variazione|parte_di|parte_di_oratorio|parte_di_raccolta|frammento_di_movimento|tema_musicale/.test(c))return "opere";
    if(/fonte|documentaria|riferimento|rubrica|scheda/.test(c))return "documentazione";
  }
  return "concetti";
}
function assembleFederation(data,registry) {
 const {mundi,atlantis,flaminio,special}=data;
 const nodes=[],links=[],byKey=new Map(),aliases=new Map(),g={mundi:new Map(),atlantis:new Map(),flaminio:new Map()};
 const collisions=[];
 const atByID=new Map(atlantis.nodes.map(x=>[x.id,x]));
 const pid=x=>/persona/.test(String(x.category||""));
 const sameExact=(x,y)=>pid(x)&&pid(y)&&normName(x.name)===normName(y.name);
 function insert(layer,n){
   const unify=(layer==="flaminio"&&atByID.has(n.id)&&sameExact(n,atByID.get(n.id)));
   const id=(unify?"atlantis":layer)+"::"+n.id;
   g[layer].set(n.id,id);
   const source={layer,original_id:n.id,payload:n};
   if(byKey.has(id)){
      const t=byKey.get(id);
      t.provenance.push(source);t.categories_by_layer[layer]=categoryFor(layer,n);
      collisions.push({id,source_id:n.id,mapping:"exact_shared_id_and_person_name",sources:["atlantis","flaminio"]});
      return;
   }
   const category=categoryFor(layer,n);
   const node={id, name:n.name||n.label||n.id,category,subtype:n.subtype||n.taxonomy?.class||n.type||null,
     layer,visibility:category==="documentazione"?"documentary":"musical",
     categories_by_layer:{[layer]:category},provenance:[source]};
   byKey.set(id,node);nodes.push(node);
 }
 mundi.nodes.forEach(n=>insert("mundi",n));
 atlantis.nodes.forEach(n=>insert("atlantis",n));
 flaminio.nodes.forEach(n=>insert("flaminio",n));
 const orphans=[];
 function appendEdge(layer,sourceId,targetId,payload,index,collection) {
   const sid=g[layer].get(sourceId),tid=g[layer].get(targetId);
   const id=`${layer}::${collection}::${payload.id||index}`;
   const edge={id,source:sid||null,target:tid||null,relation:payload.relation||payload.kind||"non_specificato",
      layer,collection, quality:payload.quality_gate||payload.status||payload.evidence_status||"non_certificato",
      original:payload,visibility:(layer==="flaminio"&&(String(sourceId).startsWith("flaminio:excel:")||String(targetId).startsWith("flaminio:excel:")||/^(intestazione_catalogo|rubrica_editoriale)/.test(payload.relation||"")))?"documentary":"musical"};
   links.push(edge);if(!sid||!tid)orphans.push({id,sourceId,targetId});
 }
 mundi.edges.forEach((e,i)=>appendEdge("mundi",e.source,e.target,e,i,"grafo"));
 special.relations.forEach((e,i)=>appendEdge("mundi",e.source,e.target,e,i,"relazioni-specialistiche"));
 atlantis.links.forEach((e,i)=>appendEdge("atlantis",typeof e.source==="object"?e.source.id:e.source,typeof e.target==="object"?e.target.id:e.target,e,i,"grafo"));
 flaminio.links.forEach((e,i)=>appendEdge("flaminio",typeof e.source==="object"?e.source.id:e.source,typeof e.target==="object"?e.target.id:e.target,e,i,"staging"));
 const aPerson=new Map();
 for(const n of atlantis.nodes.filter(pid)){const name=normName(n.name),l=aPerson.get(name)||[];l.push(n);aPerson.set(name,l);}
 const mappingCandidates=[];
 for(const n of mundi.nodes.filter(x=>["compositore","persona"].includes(x.type))){
   const matches=aPerson.get(normName(n.label))||[];
   if(matches.length===1)mappingCandidates.push({from:g.mundi.get(n.id),to:g.atlantis.get(matches[0].id),
     relation:"candidate_same_person",status:"MATCH_NOMINALE_UNIVOCO_NON_CERTIFICATO",automatic_merge:false});
 }
 const headings=flaminio.nodes.filter(n=>n.category==="intestazione_autore_flaminio");
 const headingNav=[];
 for(const n of headings){
   const p=String(n.name||"").split(",");const reorder=p.length===2?`${p[1].trim()} ${p[0].trim()}`:n.name;
   const matches=aPerson.get(normName(reorder))||[];
   headingNav.push({from:g.flaminio.get(n.id),targets:matches.map(x=>g.atlantis.get(x.id)),
      status:matches.length===1?"NAVIGAZIONE_AUTORE_NON_FUSIONE":"NO_UNIQUE_AUTHOR_MATCH",automatic_merge:false});
 }
 const sourceKeys=new Set(registry.records.map(x=>x.source_id));
 const sourcePresent=flaminio.nodes.filter(x=>x.category==="scheda_catalogo_flaminio").length;
 const sourceLinksById=new Map();
 flaminio.links.filter(x=>String(x.source).startsWith("flaminio:excel:") && !/^(intestazione_catalogo|rubrica_editoriale)/.test(x.relation||""))
  .forEach(e=>{let l=sourceLinksById.get(e.source)||[];l.push(e);sourceLinksById.set(e.source,l)});
 for(const record of registry.records){
    if(!g.flaminio.has(record.source_id)||!sourceLinksById.has(record.source_id))throw Error("Source record disconnected "+record.source_id);
 }
 const linkKeys=new Set(links.map(x=>x.id));
 const duplicates=links.length-linkKeys.size;
 return {schema:"musurgia-federated-graph-v1",status:"STAGING_NON_CANONICO", 
  counts:{nodes:nodes.length,links:links.length,source_records:registry.records.length,source_nodes_in_staging:sourcePresent,
    mundi_nodes:mundi.nodes.length,mundi_edges:mundi.edges.length,specialist_relations:special.relations.length,
    atlantis_nodes:atlantis.nodes.length,atlantis_links:atlantis.links.length,flaminio_nodes:flaminio.nodes.length,
    flaminio_links:flaminio.links.length,exact_shared_person_ids:collisions.length,
    nominal_crosswalk_candidates:mappingCandidates.length,orphan_edges:orphans.length,duplicate_edge_ids:duplicates},
  nodes,links,flaminio_records:registry.records,
  crosswalk:{shared_ids:collisions,mundi_atlantis_candidates:mappingCandidates,flaminio_heading_navigation:headingNav},
  diagnostics:{orphans},policy:{merges_only_exact_shared_id_name:true,unverified_nominal_matches_are_candidates:true,
    source_documentation_hidden_by_default:true,hold_not_promoted:true,not_production:true,
    preserve_raw_mundi:true,preserve_raw_atlantis:true,preserve_raw_flaminio:true}};
}
function projectForViewer(db,{rootId,depth=1,visibleCategories=["persone","opere","reti_culturali","generi_forme","strumenti","luoghi","istituzioni","concetti"],labelCategories=[],includeDocumentary=false}={}){
 const visibleSet=new Set(visibleCategories),labelSet=new Set(labelCategories);
 const nodeById=new Map(db.nodes.map(n=>[n.id,n]));
 if(!nodeById.has(rootId))throw Error("Unknown root "+rootId);
 const neighbors=new Map();
 const isSuspended = e=>/(HOLD|SOSPES|CONTESTAT)/i.test([e.quality,e.relation,e.original?.quality_gate,e.original?.status].filter(Boolean).join(" "));
 for(const e of db.links){
   if(!e.source||!e.target||isSuspended(e)||(!includeDocumentary&&e.visibility==="documentary"))continue;
   const x=neighbors.get(e.source)||[];x.push([e.target,e]);neighbors.set(e.source,x);
   const y=neighbors.get(e.target)||[];y.push([e.source,e]);neighbors.set(e.target,y);
 }
 const visited=new Set([rootId]),queue=[[rootId,0]];
 for(let head=0;head<queue.length;head++){
   const [current,d]=queue[head];if(d>=Math.max(1,Math.min(5,Number(depth)||1)))continue;
   const pivot=nodeById.get(current);
   if(d>0 && pivot.category!=="opere")continue; // no composer or genre fanout via intermediate hubs
   for(const [other,edge] of neighbors.get(current)||[]){
     if(d>0 && !/(rielabor|trascri|arrangi|version|moviment|contien|rius|elabor|corale|suite|partita|parte)/i.test(edge.relation))continue;
     if(!visited.has(other)){visited.add(other);queue.push([other,d+1])}
   }
 }
 const nodes=db.nodes.filter(n=>visited.has(n.id)&&(n.id===rootId||visibleSet.has(n.category))&&(includeDocumentary||n.visibility!=="documentary"));
 const kept=new Set(nodes.map(n=>n.id));
 const links=db.links.filter(e=>e.source&&e.target&&!isSuspended(e)&&kept.has(e.source)&&kept.has(e.target)&&(includeDocumentary||e.visibility!=="documentary"));
 return {nodes:nodes.map(n=>({...n,forceLabel:labelSet.has(n.category)})),links,rootId,depth,filter:visibleCategories,labelCategories};
}
export {assembleFederation as buildFederatedDatabase, projectForViewer, categoryFor};
export async function loadFederatedDatabase(options={}){
 const fetcher=options.fetcher||fetch;
 const wanted=[...sourcePaths,{key:"registry",path:registryPath}];
 const rows=await Promise.all(wanted.map(async q=>{
  const url=new URL(q.path,pathRoot),res=await fetcher(url);
  if(!res.ok)throw Error("Impossibile leggere "+q.key+" ("+res.status+")");
  return [q.key,await res.json()];
 }));
 const d=Object.fromEntries(rows);
 const db=assembleFederation({
  mundi:d.mundi,atlantis:d.atlantis,flaminio:d.flaminio_staging,special:d.mundi_specialist
 },d.registry);
 if(db.counts.source_records!==500||db.counts.orphan_edges>0)throw Error("Integrità del database federato fallita");
 return db;
}
