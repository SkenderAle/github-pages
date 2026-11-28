// A24: immutable A23 decisions, restricted to independently verified source IDs and pinned edge identities.
export function applyReviewA24(original,review){
 const overlays=structuredClone(original);
 const ds=new Map(review.rows.filter(r=>r.status==="IDENTITY_AND_SCOPE_CORROBORATED_PENDING_CI").map(r=>[r.source_id,r]));
 if(ds.size!==43||review.rows.length!==46)throw Error("A24 coverage");
 const seen=new Set(),edges=new Set();
 for(const o of overlays.slice(3)){
  for(const n of o.nodes){
   const d=ds.get(n.provenance?.[0]?.original_id);if(!d)continue;
   if(seen.has(d.source_id)||n.id!==d.id||n.category!=="opere"||!n.metadata.quality.includes("PENDING_INDEPENDENT_REVIEW"))throw Error("A24 node mismatch "+n.id);
   seen.add(d.source_id);
   n.metadata={...n.metadata,quality:"STAGING_EXTERNAL_CATALOGUE_CORROBORATED",evidence_urls:[...new Set([...(n.metadata.evidence_urls||[]),d.independent_record])],review_a24:{previous_quality:n.metadata.quality,note:d.note}};
  }
  for(const e of o.links){
   const d=ds.get(e.original?.source_id);if(!d)continue;
   if(!d.edge_ids.includes(e.id)||!["compone","appartiene_al_genere_o_forma","parte_di"].includes(e.relation))throw Error("A24 edge mismatch "+e.id);
   if(e.relation==="parte_di"&&e.target!==d.expected_parent)throw Error("A24 parent mismatch "+e.id);
   if(e.relation==="compone"&&e.source!=="flaminio_lot02::person:giovanni-bononcini-1670-1747")throw Error("A24 author mismatch "+e.id);
   if(!e.quality.includes("PENDING_INDEPENDENT_REVIEW"))throw Error("A24 prior quality "+e.id);
   edges.add(e.id);e.quality="STAGING_EXTERNAL_CATALOGUE_CORROBORATED";e.original={...e.original,quality_gate:e.quality,evidence_urls:[...new Set([...(e.original.evidence_urls||[]),d.independent_record])]};
  }
 }
 if(seen.size!==43||[...ds.values()].some(d=>!d.edge_ids.every(id=>edges.has(id))))throw Error("A24 incomplete");
 return overlays;
}
