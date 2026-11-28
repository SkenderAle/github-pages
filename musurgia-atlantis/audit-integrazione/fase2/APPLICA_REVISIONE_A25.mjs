// A25: independent authority-index identity corroboration, not full score certification.
export function applyReviewA25(original,review){
 const overlays=structuredClone(original);
 const ds=new Map(review.rows.filter(r=>r.status==="IDENTITY_INDEX_CORROBORATED_PENDING_APPLICATION").map(r=>[r.source_id,r]));
 if(ds.size!==80||review.rows.length!==83)throw Error("A25 coverage");
 const seen=new Set(),edges=new Set(),patch=review.parent_patch;let parents=0;const changed=new Set();
 for(const o of overlays.slice(3)){
  for(const n of o.nodes){
   if(n.id===patch.id){if(n.metadata.year!==1692||n.provenance?.length)throw Error("A25 parent prior");n.id=patch.replacement_id;n.name=patch.name;n.metadata={...n.metadata,year:1693,previous_context_id:patch.id,evidence_urls:[...new Set([...n.metadata.evidence_urls,...patch.evidence])]};parents++;}
   const d=ds.get(n.provenance?.[0]?.original_id);if(!d)continue;
   if(seen.has(d.source_id)||n.id!==d.id||n.category!=="opere"||!n.metadata.quality.includes("PENDING_INDEPENDENT_REVIEW"))throw Error("A25 node "+n.id);
   seen.add(d.source_id);n.metadata={...n.metadata,quality:"STAGING_EXTERNAL_CATALOGUE_CORROBORATED",evidence_urls:[...new Set([...(n.metadata.evidence_urls||[]),...d.evidence])],review_a25:{previous_quality:n.metadata.quality,scope:d.evidence_scope}};
  }
  for(const e of o.links){
   const d=ds.get(e.original?.source_id);
   if(d){
    if(!d.edge_ids.includes(e.id)||!["compone","appartiene_al_genere_o_forma","parte_di"].includes(e.relation)||!e.quality.includes("PENDING_INDEPENDENT_REVIEW"))throw Error("A25 edge "+e.id);
    if(e.relation==="parte_di"&&e.target!==d.parent)throw Error("A25 parent edge "+e.id);
    if(e.relation==="compone"&&e.source!=="flaminio_lot02::person:giovanni-bononcini-1670-1747")throw Error("A25 author edge "+e.id);
    edges.add(e.id);e.quality="STAGING_EXTERNAL_CATALOGUE_CORROBORATED";e.original={...e.original,quality_gate:e.quality,evidence_urls:[...new Set([...(e.original.evidence_urls||[]),...d.evidence])]};
   }
   if(e.source===patch.id||e.target===patch.id){
    if(!patch.affected_edges.includes(e.id))throw Error("A25 unexpected parent edge "+e.id);
    if(e.source===patch.id)e.source=patch.replacement_id;if(e.target===patch.id)e.target=patch.replacement_id;
    changed.add(e.id);e.original={...e.original,evidence_urls:[...new Set([...(e.original.evidence_urls||[]),...patch.evidence])]};
   }
  }
 }
 if(seen.size!==80||[...ds.values()].some(d=>!d.edge_ids.every(id=>edges.has(id)))||parents!==1||changed.size!==12)throw Error("A25 incomplete");
 return overlays;
}
