/* Musurgia — audit dinamico della cascata cross-DB (staging, non modifica il database).
 * Calcola copertura di OGNI nodo, componenti integrali e componenti della sola vista musicale.
 * Un nodo di fonte può avere collegamenti documentari ma non apparire con i filtri musicali.
 */
export function auditCascade(db){
  if(!Array.isArray(db?.nodes)||!Array.isArray(db?.links))throw Error("Database unificato non valido");
  const byId=new Map(db.nodes.map(n=>[n.id,n]));
  const full=new Map(db.nodes.map(n=>[n.id,[]])),musical=new Map(db.nodes.map(n=>[n.id,[]]));
  const deg=new Map(db.nodes.map(n=>[n.id,{total:0,musical:0,documentary:0,hold:0,crossSource:0}]));
  const layerSet=n=>new Set((n.provenance||[]).map(p=>p.layer==="mundi_extension"?"mundi":p.layer==="staging"?"flaminio":p.layer));
  const isHold=e=>/(HOLD|SOSPES|CONTESTAT|REJECTED)/i.test([e.quality,e.original?.quality_gate,e.original?.status,e.original?.verification_status].filter(Boolean).join(" "));
  let discarded=0,activeLinks=0;
  for(const e of db.links){
    const a=byId.get(e.source),b=byId.get(e.target);if(!a||!b){discarded++;continue}
    full.get(e.source).push(e.target);full.get(e.target).push(e.source);
    const da=deg.get(e.source),dbb=deg.get(e.target);da.total++;dbb.total++;
    const documentary=e.visibility==="documentary"||a.visibility==="documentary"||b.visibility==="documentary",hold=isHold(e);
    if(documentary){da.documentary++;dbb.documentary++}
    if(hold){da.hold++;dbb.hold++}
    const sa=layerSet(a),sb=layerSet(b);const hasCross=[...sa].some(k=>!sb.has(k))||[...sb].some(k=>!sa.has(k));
    if(hasCross){da.crossSource++;dbb.crossSource++}
    if(!documentary&&!hold){
      musical.get(e.source).push(e.target);musical.get(e.target).push(e.source);
      da.musical++;dbb.musical++;activeLinks++;
    }
  }
  function components(adj){
    const membership=new Map(),groups=[];let seq=0;
    for(const n of db.nodes){
      if(membership.has(n.id))continue;
      const id="c"+(++seq),list=[n.id],layers=new Set();
      membership.set(n.id,id);
      for(let i=0;i<list.length;i++){
        const cur=list[i];for(const l of layerSet(byId.get(cur)))layers.add(l);
        for(const next of adj.get(cur)){if(membership.has(next))continue;membership.set(next,id);list.push(next);}
      }
      groups.push({id,size:list.length,layers:[...layers].sort(),example_ids:list.slice(0,5)});
    }
    groups.sort((a,b)=>b.size-a.size);
    return {groups,membership};
  }
  const a=components(full),v=components(musical),fullBySize=new Map(a.groups.map(g=>[g.id,g])),visBySize=new Map(v.groups.map(g=>[g.id,g]));
  const categories={};const statuses={};const records=db.nodes.map(n=>{
    const d=deg.get(n.id),sources=layerSet(n),fullGroup=fullBySize.get(a.membership.get(n.id)),activeGroup=visBySize.get(v.membership.get(n.id));
    const status=d.total===0?"ISOLATO_ASSOLUTO":d.musical===0?(n.visibility==="documentary"?"SOLO_DOCUMENTAZIONE":d.hold>0?"SOSPESO_O_DOCUMENTARIO":"SENZA_ARCO_MUSICALE"):activeGroup.layers.includes("mundi")&&activeGroup.layers.includes("atlantis")&&activeGroup.layers.includes("flaminio")?"CONNESSO_TRE_ARCHIVI":activeGroup.layers.length>1?"CONNESSO_PIU_ARCHIVI":"CONNESSO_ISOLATO_DAL_RESTO";
    statuses[status]=(statuses[status]||0)+1;const cat=n.category||"non_classificato";categories[cat]=(categories[cat]||0)+1;
    return {id:n.id,name:n.name,category:cat,status,layers:[...sources].sort(),source_node_ids:(n.provenance||[]).map(p=>p.layer+":"+p.original_id),identity_shared:sources.size>1,
      degree_total:d.total,degree_musical:d.musical,degree_documentary:d.documentary,degree_hold:d.hold,degree_cross_source:d.crossSource,
      full_component:fullGroup.id,full_component_size:fullGroup.size,musical_component:activeGroup.id,musical_component_size:activeGroup.size};
  });
  const unresolved=records.filter(n=>!["CONNESSO_TRE_ARCHIVI","SOLO_DOCUMENTAZIONE"].includes(n.status));
  return {schema:"musurgia-cascade-audit-v1",generated_from:"staging-unified-live-data",counts:{nodes:records.length,links_total:db.links.length,links_musical:activeLinks,invalid_endpoints:discarded,components_full:a.groups.length,components_musical:v.groups.length,largest_full:a.groups[0]?.size||0,largest_musical:v.groups[0]?.size||0,shared_identity_nodes:records.filter(n=>n.identity_shared).length,remaining_review:unresolved.length},
    statuses,categories,full_components:a.groups,musical_components:v.groups,records,unresolved,policy:{documentary_not_deleted:true,hold_excluded_from_musical:true,connectivity_undirected_not_musicological_proof:true,source_provenance_preserved:true,production_unchanged:true}};
}
