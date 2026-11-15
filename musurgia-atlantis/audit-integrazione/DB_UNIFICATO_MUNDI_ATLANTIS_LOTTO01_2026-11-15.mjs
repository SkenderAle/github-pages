/* Musurgia Mundi + Atlantis + primo lotto Flaminio.
 * Staging reversibile. Le 162 equivalenze sono quelle del crosswalk storico
 * e producono identita' di navigazione condivise, NON nuove prove biografiche.
 * I nodi e gli archi originali restano integralmente in provenance/original.
 * Nessun file di produzione viene modificato da questo modulo.
 */
export const sourcePaths=[
  {key:"mundi",path:"atlante3d/database/grafo.json"},
  {key:"extension",path:"atlante3d/database/integrazione-operetta-musical.json"},
  {key:"special",path:"atlante3d/database/relazioni.json"},
  {key:"atlantis",path:"musurgia-atlantis/grafo.json"},
  {key:"staging",path:"musurgia-atlantis/audit-integrazione/STAGING_GRAFO_FEDERATO_LOTTO01_JSB06_V11_GATE04_COPIA_2026-11-15.json"},
  {key:"registry",path:"musurgia-atlantis/audit-integrazione/DB_FEDERATO_LOTTO01_2026-11-15_REGISTRO_500.json"},
  {key:"crosswalk",path:"musurgia-atlantis/audit-integrazione/CROSSWALK_GLOBALE_PERSONE_CHECKPOINT21_2026-11-10.json"},
  {key:"curated",path:"musurgia-atlantis/audit-integrazione/CROSSWALK_TASSONOMICO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json"}
];
const norm=x=>String(x||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[‘’´']/g,"").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");
function categoryFor(layer,n){
 const c=String(n.category||n.type||"").toLowerCase(),s=String(n.subtype||"").toLowerCase(),t=String(n.taxonomy?.class||"").toLowerCase(),id=String(n.id||"").toLowerCase();
 if(layer==="flaminio"){
   if(/scheda_catalogo|rubrica_fonte|intestazione_autore|scheda_audit|riferimento_documentario|annotazione_organologica|fonte_manoscritta|documento/.test(c))return "documentazione";
   if(/^persona(?:_|$)/.test(c))return "persone";
   if(/opera|cantata|raccolta|versione|variazione|parte_di|frammento_di_movimento|tema_musicale/.test(c))return "opere";
   if(/genere|forma/.test(c))return "generi_forme";
   if(/strumento/.test(c))return "strumenti";
   return "concetti";
 }
 if(layer==="atlantis"){
   if(c==="persona")return "persone";
   if(c==="opera"||c==="versione-opera"||c==="parte-di-opera")return "opere";
   if(c==="capitolo")return "capitoli";
   if(c==="luogo")return "luoghi";
   if(c==="strumento")return "strumenti";
   if(c==="rete-culturale")return "reti_culturali";
   if(/allestimento|produzione|evento-storico/.test(c))return "eventi";
   if(/documento/.test(c))return "documentazione";
   if(c==="nodo-di-senso"){
     if(/genere|forma|sottogenere/.test(s))return "generi_forme";
     if(/istituzion/.test(s))return "istituzioni";
     if(/scuola|tradizion|corrente|rete|ambiente/.test(s))return "reti_culturali";
   }
   return "concetti";
 }
 if(c==="compositore"||c==="persona")return "persone";
 if(c==="periodo"||c==="ambito")return "reti_culturali";
 if(c==="geografia")return "luoghi";
 if(c==="corrente"){
   if(/genere|forma|sottogenere|famiglia-form|tipologia-concerto/.test(t)||/^(genere-|forma-)/.test(id))return "generi_forme";
   if(/istituzion|conservator|cappella|teatro/.test(t))return "istituzioni";
   if(/tradizione|corrente-storica|corrente-stilistica|scuola|ambiente-storico/.test(t)||/^(scuola-|corrente-)/.test(id))return "reti_culturali";
   if(/opera-specifica/.test(t))return "opere";
 }
 return "concetti";
}
export function buildUnifiedDatabase(d){
 const {mundi,extension,special,atlantis,staging,registry,crosswalk,curated}=d;
 const nodes=[],links=[],byID=new Map(),maps={mundi:new Map(),mundi_extension:new Map(),atlantis:new Map(),flaminio:new Map()};
 const atID=new Map(atlantis.nodes.map(n=>[n.id,n]));
 const baseID=new Map(mundi.nodes.map(n=>[n.id,n]));
 const allM=new Map([...mundi.nodes,...extension.nodes].map(n=>[n.id,n]));
 const identity=[],ignored=[],redirect=new Map(),usedA=new Set(),usedM=new Set(),sharedFlaminio=[];
 const taxonomyIdentity=[],legacyReferences=[],taxSeen=new Set();
 for(const x of curated.mundi_atlantis){
   const from=allM.get(x.mundi_id),to=atID.get(x.atlantis_id),tax=String(from?.taxonomy?.class||"").toLowerCase(),sub=String(to?.subtype||"").toLowerCase();
   const compatible=(x.kind==="genere"||x.kind==="forma")
     ?from?.type==="corrente"&&to?.category==="nodo-di-senso"&&
       (x.kind==="genere"?/genere|sottogenere/.test(tax)&&/genere/.test(sub):/forma/.test(tax)&&/forma/.test(sub))
     :x.kind==="tradizione"&&from?.type==="corrente"&&/tradizione/.test(tax)&&to?.category==="nodo-di-senso"&&/tradizione/.test(sub);
   if(!compatible||!x.canonical_label||taxSeen.has(x.mundi_id)||taxSeen.has(x.atlantis_id))throw Error("Crosswalk tassonomico non accettato: "+JSON.stringify(x));
   taxSeen.add(x.mundi_id);taxSeen.add(x.atlantis_id);
   redirect.set(x.mundi_id,"atlantis::"+x.atlantis_id);
   taxonomyIdentity.push({from:"mundi::"+x.mundi_id,to:"atlantis::"+x.atlantis_id,kind:x.kind,canonical_label:x.canonical_label,
     rationale:x.rationale,status:"EXPLICIT_CURATED_TAXONOMIC_IDENTITY_STAGING"});
 }

 for(const x of crosswalk.records){
   if(x.identity_class!=="documented_nominal"&&x.identity_class!=="documented_alias")continue;
   const from=allM.get(x.legacy_id),to=atID.get(x.target_id);
   if(!x.target_is_public||!from||!to||!["compositore","persona"].includes(from.type)||to.category!=="persona"||usedA.has(x.target_id)||usedM.has(x.legacy_id)||
     (x.identity_class==="documented_nominal"&&norm(from.label)!==norm(to.name))){
     ignored.push({from:x.legacy_id,to:x.target_id,reason:"EQUIVALENCE_NOT_ACCEPTED"});continue;
   }
   usedA.add(x.target_id);usedM.add(x.legacy_id);
   redirect.set(x.legacy_id,"atlantis::"+x.target_id);
   identity.push({from:"mundi::"+x.legacy_id,to:"atlantis::"+x.target_id,legacy_name:from.label,canonical_name:to.name,
     source_class:x.identity_class,source_path:x.source_path,status:"IDENTITY_VIEW_FROM_EXISTING_CROSSWALK_PENDING_EXTERNAL_AUTHORITY"});
 }
 function insert(layer,n,id){
   const key=id||(layer==="mundi_extension"?"mundi":layer)+"::"+n.id;
   maps[layer].set(n.id,key);
   const src={layer,original_id:n.id,payload:n};
   if(byID.has(key)){
     const target=byID.get(key);
     target.provenance.push(src);
     target.categories_by_layer[layer]=categoryFor(layer==="mundi_extension"?"mundi":layer,n);
     if(n.label&&n.label!==target.name&&!target.aliases.includes(n.label))target.aliases.push(n.label);
     return key;
   }
   const cat=categoryFor(layer==="mundi_extension"?"mundi":layer,n);
   const obj={id:key,name:n.name||n.label||n.id,category:cat,subtype:n.subtype||n.taxonomy?.class||n.type||null,
     layer:layer==="mundi_extension"?"mundi":layer,visibility:cat==="documentazione"?"documentary":"musical",
     categories_by_layer:{[layer]:cat},aliases:[],provenance:[src]};
   byID.set(key,obj);nodes.push(obj);return key;
 }
 atlantis.nodes.forEach(n=>insert("atlantis",n));
 mundi.nodes.forEach(n=>insert("mundi",n,redirect.get(n.id)));
 extension.nodes.forEach(n=>insert("mundi_extension",n,maps.mundi.get(n.id)||redirect.get(n.id)||"mundi::"+n.id));
 for(const x of curated.mundi_atlantis){
   const node=byID.get(maps.atlantis.get(x.atlantis_id));
   if(!node||node.provenance.length<2)throw Error("Unione tassonomica senza entrambe le fonti: "+x.atlantis_id);
   if(node.name!==x.canonical_label){
     if(!node.aliases.includes(node.name))node.aliases.push(node.name);
     node.name=x.canonical_label;
   }
 }
 const legacyById=new Map(curated.flaminio_legacy_mundi.map(x=>[x.flaminio_id,x]));
 if(legacyById.size!==curated.flaminio_legacy_mundi.length)throw Error("ID legacy ripetuti nel registro");
 staging.nodes.forEach(n=>{
   const a=atID.get(n.id);
   const share=a&&a.category==="persona"&&/persona/.test(String(n.category||""))&&norm(a.name)===norm(n.name);
   const legacy=legacyById.get(n.id);
   let mergedLegacy=null;
   if(legacy){
     const from=allM.get(legacy.mundi_id),tax=String(from?.taxonomy?.class||"");
     const rightType=legacy.kind==="persona"
       ?["persona","compositore"].includes(from?.type)&&(n.category==="persona"||(n.category==="persona_riferimento_esterno"&&n.origin==="atlante3d/database/grafo.json"&&n.staging_reference_only===true&&n.id==="legacy:gf:"+legacy.mundi_id))
       :from?.type==="corrente"&&/genere|forma/.test(tax)&&/genere|forma/.test(n.category||"");
     if(!rightType||norm(from?.label)!==norm(n.name)||share)throw Error("Riferimento Flaminio legacy incompatibile: "+n.id);
     mergedLegacy=maps.mundi.get(legacy.mundi_id)||maps.mundi_extension.get(legacy.mundi_id);
     if(!mergedLegacy)throw Error("ID Mundi assente nel registro legacy: "+legacy.mundi_id);
     legacyReferences.push({from:"flaminio::"+n.id,to:mergedLegacy,kind:legacy.kind,status:"EXPLICIT_LEGACY_ID_AND_NAME_MATCH"});
   }
   if(share)sharedFlaminio.push({source:n.id,target:a.id});
   insert("flaminio",n,share?"atlantis::"+a.id:mergedLegacy);
 });
 if(legacyReferences.length!==curated.flaminio_legacy_mundi.length)throw Error("Riferimenti legacy non completamente consumati");
 const curatedMusicNodes=[];
 for(const n of curated.musicological_nodes||[]){
   if(!n.id.startsWith("curated::")||byID.has(n.id)||n.category!=="opere"||!n.source_urls?.length)
     throw Error("Nuovo nodo musicologico non ammesso: "+n.id);
   const obj={id:n.id,name:n.name,category:"opere",subtype:n.subtype||"concerto-per-violino",layer:"curated",visibility:"musical",
     categories_by_layer:{curated:"opere"},aliases:[],provenance:[{layer:"curated",original_id:n.id,payload:n}]};
   byID.set(n.id,obj);nodes.push(obj);curatedMusicNodes.push(n.id);
 }
 for(const x of curated.node_annotations||[]){
   const n=byID.get(x.id);
   if(!n||!x.subtype)throw Error("Annotazione senza nodo: "+x.id);
   n.subtype=x.subtype;
   n.curated_annotation={rationale:x.rationale,source:"staging_only_original_payload_unchanged"};
 }
 const orphans=[],dupes=[];
 function append(layer,collection,e,i){
   const sid=typeof e.source==="object"?e.source?.id:e.source,tid=typeof e.target==="object"?e.target?.id:e.target;
   const source=maps[layer].get(sid),target=maps[layer].get(tid),id=layer+"::"+collection+"::"+(e.id||i);
   if(!source||!target){orphans.push({id,source:sid,target:tid});return;}
   const relation=e.relation||e.kind||"non_specificato",quality=e.quality_gate||e.status||e.evidence_status||"non_certificato";
   const doc=byID.get(source)?.visibility==="documentary"||byID.get(target)?.visibility==="documentary";
   links.push({id,source,target,relation,quality,layer,collection,visibility:doc?"documentary":"musical",original:e});
 }
 atlantis.links.forEach((e,i)=>append("atlantis","grafo",e,i));
 mundi.edges.forEach((e,i)=>append("mundi","grafo",e,i));
 // In Mundi le lenti sono una SECONDA famiglia di archi storici, distinta
 // dagli edges di base. Il visualizzatore originale le include in currentEdges.
 // Solo relazioni documentate, con fonte e estremi esistenti, come in app-livelli.js.
 const mundiLensRelations=(mundi.lenses?.relations||[]).filter(e=>
   typeof e.status==="string"&&e.status.startsWith("documentato")&&
   Array.isArray(e.sources)&&e.sources.length>0&&
   (maps.mundi.has(e.source)||maps.mundi_extension.has(e.source))&&
   (maps.mundi.has(e.target)||maps.mundi_extension.has(e.target)));
 mundiLensRelations.forEach((e,i)=>{
   const source=maps.mundi.get(e.source)||maps.mundi_extension.get(e.source);
   const target=maps.mundi.get(e.target)||maps.mundi_extension.get(e.target);
   links.push({id:"mundi::lenti::"+(e.id||i),source,target,
     relation:e.kind||e.group||"relazione_documentata",group:e.group||null,
     forward:e.forward||null,reverse:e.reverse||null,
     quality:e.status,layer:"mundi",collection:"lenti-originali",
     visibility:"musical",original:e});
 });
 // Mundi mostra anche raccordi tassonomici di navigazione CALCOLATI
 // (app-livelli.js: compileDerivedGenreEdges). Non sono archi documentari
 // diretti: etichetta esplicita e percorso tramite la specializzazione.
 const genreContextNotInherited=new Set(["impresa-teatrale-storica","riforma-storico-teatrale","ambiente-storico-musicale",
   "ambiente-di-corte","contesto-teatrale-vocale","teoria-acustica","tecnologia-di-diffusione",
   "caso-tecnico-biografico","ricerca-etnomusicologica"]);
 function mainGenreAncestor(n){
   if(!n||n.type!=="corrente"||n.taxonomy?.presentation==="scheda"||n.work_archive||n.document_archive)return null;
   const seen=new Set([n.id]);let here=n;
   while(here?.taxonomy?.parent){
     if(genreContextNotInherited.has(here.taxonomy.class))return null;
     const parent=allM.get(here.taxonomy.parent);
     if(!parent||seen.has(parent.id))return null;
     if(parent.type==="corrente"&&parent.taxonomy?.visibility==="principale")return parent;
     seen.add(parent.id);here=parent;
   }
   return null;
 }
 const derivedGenreMap=new Map(),directGenre=new Set();
 for(const e of mundi.edges){
   const a=allM.get(e.source),b=allM.get(e.target);
   const author=a?.type==="compositore"?a:b?.type==="compositore"?b:null;
   const other=author&&(author.id===e.source?b:a);
   if(author&&other?.type==="corrente"&&other.taxonomy?.visibility==="principale")
     directGenre.add(author.id+"|"+other.id);
 }
 for(const e of mundi.edges){
   const a=allM.get(e.source),b=allM.get(e.target);
   const author=a?.type==="compositore"?a:b?.type==="compositore"?b:null;
   const child=author&&(author.id===e.source?b:a),parent=mainGenreAncestor(child);
   if(!parent||directGenre.has(author.id+"|"+parent.id))continue;
   const source=maps.mundi.get(author.id)||maps.mundi_extension.get(author.id);
   const target=maps.mundi.get(parent.id)||maps.mundi_extension.get(parent.id);
   if(!source||!target)continue;
   const key=author.id+"|"+parent.id;
   if(!derivedGenreMap.has(key))derivedGenreMap.set(key,{source,target,via:new Set(),sources:new Set()});
   const row=derivedGenreMap.get(key);row.via.add(child.label||child.id);
   for(const url of e.sources||[])if(typeof url==="string"&&url.startsWith("https://"))row.sources.add(url);
 }
 const derivedGenreRelations=[...derivedGenreMap].map(([key,row],i)=>({
   id:"mundi::raccordo-tassonomico::"+i,source:row.source,target:row.target,
   relation:"accesso_indiretto_alla_famiglia",group:"tassonomia",layer:"mundi",
   collection:"raccordi-derivati-originali",quality:"DERIVED_NAVIGATION_NOT_DIRECT",
   visibility:"musical",original:{taxonomyDerived:true,via_labels:[...row.via],
     sources:[...row.sources],note:"Risalita attraverso specializzazioni esplicite: "+[...row.via].join(", ")+
       ". NON è una seconda relazione storica diretta.",mundi_key:key}}));
 links.push(...derivedGenreRelations);
 special.relations.forEach((e,i)=>append("mundi","relazioni-specialistiche",e,i));
 extension.relations.forEach((e,i)=>{
   const source=maps.mundi_extension.get(e.source)||maps.mundi.get(e.source);
   const target=maps.mundi_extension.get(e.target)||maps.mundi.get(e.target);
   const id="mundi_extension::relazioni::"+(e.id||i);
   if(!source||!target){orphans.push({id,source:e.source,target:e.target});return}
   links.push({id,source,target,relation:e.kind||"non_specificato",layer:"mundi",collection:"estensione-operetta-musical",
     quality:e.status||"fonte_originale_non_ricertificata",visibility:"musical",original:e});
 });
 staging.links.forEach((e,i)=>append("flaminio","staging",e,i));
 const bridges=[],concepts=new Map();
 for(const n of atlantis.nodes){const k=norm(n.name);if(!concepts.has(k))concepts.set(k,[]);concepts.get(k).push(n);}
 for(const n of allM.values()){
   if(n.type!=="periodo"&&n.type!=="corrente")continue;
   const candidates=(concepts.get(norm(n.label))||[]).filter(a=>n.type==="periodo"?a.category==="capitolo":a.category==="nodo-di-senso");
   if(candidates.length!==1)continue;
   const a=candidates[0],period=n.type==="periodo";
   if(!period){
     const tax=String(n.taxonomy?.class||"").toLowerCase(),sub=String(a.subtype||"").toLowerCase();
     if(!((/genere|forma|sottogenere/.test(tax)&&/genere|forma/.test(sub))||(/tradizion/.test(tax)&&/tradizion/.test(sub))))continue;
   }
   const source=maps.mundi.get(n.id)||maps.mundi_extension.get(n.id),target=maps.atlantis.get(a.id);
   if(!source||!target||source===target)continue;
   const relation=period?"capitolo_tratta_periodo":"stesso_tema_editoriale_non_identita";
   const record={id:"crosswalk::editorial::"+(bridges.length+1),source,target,relation,layer:"crosswalk",
     collection:"ponti-editoriali",quality:"navigazione_non_storica",visibility:"musical",
     original:{mundi_id:n.id,atlantis_id:a.id,identity_merge:false,
       note:period?"Il capitolo riguarda il periodo, ma non è lo stesso ente.":"Rubrica affine, non identità musicologica o fusione."}};
   links.push(record);bridges.push({source,target,relation});
 }
 const semanticCurated=[];
 for(const x of curated.semantic_edges){
   if(!byID.has(x.source)||!byID.has(x.target))throw Error("Arco curato senza estremi: "+x.id);
   const e={id:"crosswalk::semantic::"+x.id,source:x.source,target:x.target,relation:x.relation,layer:"crosswalk",
     collection:"archi-musicologici-curati",quality:x.quality||"CURATED_STAGING",visibility:"musical",original:x};
   links.push(e);semanticCurated.push({id:e.id,source:e.source,target:e.target,relation:e.relation});
 }
 const seen=new Set();for(const e of links){if(seen.has(e.id))dupes.push(e.id);seen.add(e.id);}
 const idRecords=new Set(registry.records.map(r=>r.source_id));
 const stageRecords=new Set(staging.nodes.filter(n=>n.category==="scheda_catalogo_flaminio").map(n=>n.id));
 const connectedRecords=new Set(staging.links.flatMap(e=>[typeof e.source==="object"?e.source?.id:e.source,typeof e.target==="object"?e.target?.id:e.target]));
 const missing=registry.records.filter(r=>!stageRecords.has(r.source_id)||!connectedRecords.has(r.source_id)).map(r=>r.source_id);
 const originalEdges=atlantis.links.length+mundi.edges.length+special.relations.length+extension.relations.length+staging.links.length+mundiLensRelations.length;
 const expectedNodes=mundi.nodes.length+extension.nodes.filter(n=>!baseID.has(n.id)).length+atlantis.nodes.length+staging.nodes.length-identity.length-sharedFlaminio.length-taxonomyIdentity.length-legacyReferences.length+curatedMusicNodes.length;
 const counts={mundi_nodes:mundi.nodes.length,mundi_extension_records:extension.nodes.length,mundi_extension_new_nodes:extension.nodes.filter(n=>!baseID.has(n.id)).length,
   atlantis_nodes:atlantis.nodes.length,flaminio_nodes:staging.nodes.length,mundi_edges:mundi.edges.length,mundi_lens_relations:mundiLensRelations.length,mundi_derived_taxonomy_bridges:derivedGenreRelations.length,
   mundi_special_relations:special.relations.length,mundi_extension_relations:extension.relations.length,
   atlantis_links:atlantis.links.length,flaminio_links:staging.links.length,original_source_edges:originalEdges,
   integrated_people:identity.length,shared_flaminio_people:sharedFlaminio.length,
   integrated_taxonomy:taxonomyIdentity.length,flaminio_legacy_reconciled:legacyReferences.length,
   editorial_bridges:bridges.length,semantic_curated_links:semanticCurated.length,curated_musicological_nodes:curatedMusicNodes.length,nodes:nodes.length,links:links.length,
   flaminio_source_records:registry.records.length,unique_flaminio_source_records:idRecords.size,
   flaminio_source_nodes:stageRecords.size,missing_source_rows:missing.length,
   orphan_links:orphans.length,duplicate_link_ids:dupes.length};
 if(identity.length!==162||taxonomyIdentity.length!==21||legacyReferences.length!==12||curatedMusicNodes.length!==4||semanticCurated.length!==31||counts.nodes!==expectedNodes||counts.links!==originalEdges+bridges.length+semanticCurated.length+derivedGenreRelations.length||
    counts.orphan_links||counts.duplicate_link_ids||counts.flaminio_source_records!==500||
    counts.unique_flaminio_source_records!==500||counts.flaminio_source_nodes!==500||counts.missing_source_rows){
   throw Error("Gate integrita' NON superato: "+JSON.stringify({counts,expectedNodes,orphans:orphans.slice(0,5),duplicateIDs:dupes.slice(0,5),missing:missing.slice(0,5)}));
 }
 return {schema:"musurgia-unified-mundi-atlantis-flaminio-lot01-v1",
   status:"STAGING_UNIFICATO_NAVIGABILE_IDENTITA_STORICHE_NON_TUTTE_CERTIFICATE",
   counts,nodes,links,flaminio_records:registry.records,
   crosswalk:{mundi_atlantis:identity,mundi_atlantis_taxonomy:taxonomyIdentity,flaminio_atlantis:sharedFlaminio,flaminio_legacy_mundi:legacyReferences,
     editorial_bridges:bridges,semantic_curated_links:semanticCurated,curated_music_nodes:curatedMusicNodes,excluded:ignored,curated_pending:curated.excluded_or_pending},
   policy:{preserve_all_source_nodes_and_relations:true,merge_person_pairs_and_explicit_curated_taxonomy_pairs:true,legacy_reference_id_redirects:true,curated_vivaldi_works_are_distinct_from_collection:true,
     homonyms_require_external_review:true,chapters_are_not_periods:true,genres_not_merged_by_name:true,
     hold_excluded_by_default:true,production_graphs_unchanged:true}};
}
export function projectForViewer(db,{rootId,depth=1,visibleCategories=["persone","opere","reti_culturali","generi_forme","strumenti","luoghi","istituzioni","concetti","capitoli","eventi"],labelCategories=["persone","generi_forme"],includeDocumentary=false}={}){
 const index=new Map(db.nodes.map(n=>[n.id,n]));
 if(!index.has(rootId))throw Error("Radice sconosciuta: "+rootId);
 const show=new Set(visibleCategories),labels=new Set(labelCategories);
 const isHold=e=>/(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test([e.quality,e.original?.quality_gate,e.original?.status,e.original?.verification_status].filter(Boolean).join(" "));
 const adj=new Map();
 for(const e of db.links){
   if(isHold(e)||(!includeDocumentary&&e.visibility==="documentary"))continue;
   if(!adj.has(e.source))adj.set(e.source,[]);if(!adj.has(e.target))adj.set(e.target,[]);
   adj.get(e.source).push(e.target);adj.get(e.target).push(e.source);
 }
 const depthLimit=Math.max(1,Math.min(5,Number(depth)||1)),visited=new Set([rootId]),queue=[[rootId,0]];
 // A taxonomy-rooted journey must traverse nested genre/forma nodes. For an
 // author-rooted view they remain terminal to avoid flooding with unrelated
 // compositions from a shared genre (rooted expansion policy).
 const expandTaxonomy=index.get(rootId)?.category==="generi_forme";
 for(let i=0;i<queue.length;i++){
   const [id,d]=queue[i],n=index.get(id);if(!n||d>=depthLimit)continue;
   if(d>0&&!["opere","concetti","strumenti","eventi"].includes(n.category)&&!(expandTaxonomy&&n.category==="generi_forme"))continue;
   for(const other of adj.get(id)||[])if(!visited.has(other)){visited.add(other);queue.push([other,d+1]);}
 }
 const nodes=db.nodes.filter(n=>visited.has(n.id)&&(n.id===rootId||show.has(n.category))&&(includeDocumentary||n.visibility!=="documentary"));
 const ids=new Set(nodes.map(n=>n.id));
 const links=db.links.filter(e=>ids.has(e.source)&&ids.has(e.target)&&!isHold(e)&&(includeDocumentary||e.visibility!=="documentary"));
 return {nodes:nodes.map(n=>({...n,forceLabel:labels.has(n.category)})),links,rootId,depth:depthLimit,filter:visibleCategories,labelCategories};
}
export async function loadFederatedDatabase(options={}){
 const fetcher=options.fetcher||fetch,root=new URL("../../",import.meta.url);
 const pairs=await Promise.all(sourcePaths.map(async entry=>{
   const res=await fetcher(new URL(entry.path,root),{cache:"no-store"});
   if(!res.ok)throw Error("Caricamento "+entry.key+": HTTP "+res.status);
   return [entry.key,await res.json()];
 }));
 return buildUnifiedDatabase(Object.fromEntries(pairs));
}
