// A21 non-destructive review application; pinned A17 overlays stay untouched.
export function applyReviewA21(original,review){
 const overlays=structuredClone(original);
 const decisions=new Map(review.decisions.map(d=>[d.source_id,d]));
 if(decisions.size!==7||review.decisions.length!==7)throw Error("Unexpected A21 coverage");
 const seen=new Set(),edgeCounts=new Map();
 for(const o of overlays.slice(3)){
  for(const n of o.nodes){
   const p=n.provenance?.[0],d=decisions.get(p?.original_id);
   if(!d)continue;
   if(seen.has(p.original_id)||n.id!==d.id||n.category!=="opere"||!d.independent_evidence?.length||!n.metadata.quality.includes("PENDING_INDEPENDENT_REVIEW"))throw Error("A21 identity mismatch "+n.id);
   seen.add(p.original_id);
   n.aliases=[...new Set([...(n.aliases||[]),...d.aliases])];
   n.metadata={...n.metadata,quality:"STAGING_EXTERNAL_CATALOGUE_CORROBORATED",evidence_urls:[...new Set([...(n.metadata.evidence_urls||[]),...d.independent_evidence])],review_a21:{previous_quality:n.metadata.quality,note:d.note}};
  }
  for(const e of o.links){
   const d=decisions.get(e.original?.source_id);if(!d||!e.quality.includes("PENDING_INDEPENDENT_REVIEW"))continue;
   if(!["compone","appartiene_al_genere_o_forma"].includes(e.relation))throw Error("A21 relation requires separate review "+e.id);
   e.quality="STAGING_EXTERNAL_CATALOGUE_CORROBORATED";
   e.original={...e.original,quality_gate:e.quality,evidence_urls:[...new Set([...e.original.evidence_urls,...d.independent_evidence])]};
   edgeCounts.set(d.source_id,(edgeCounts.get(d.source_id)||0)+1);
  }
 }
 if(seen.size!==7||[...seen].some(id=>!edgeCounts.has(id)))throw Error("A21 incomplete application");
 const patch=review.taxonomy_patch;
 if(patch.relation!=="has_instrumentation_subtype"||patch.source!=="flaminio_lot02::tax:a10:quintetto"||patch.target!=="flaminio_lot02::tax:a15:quintetto-chitarra-archi")throw Error("Unexpected A21 taxonomy");
 overlays[overlays.length-1].links.push(structuredClone(patch));
 return overlays;
}
