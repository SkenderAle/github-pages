// A400 audit-only projection. Never imported by public GUI.
export function applyLot03A400(base, mode, doc, preview, ledger) {
 if(mode==="off") return base;
 if(mode!=="isolated-audit-preview") throw Error("Unknown Lot03 mode");
 const clone=x=>JSON.parse(JSON.stringify(x));
 const original=clone(base), nodes=new Map(original.nodes.map(n=>[n.id,n])), edgeIds=new Set(original.links.map(e=>e.id));
 if(nodes.size!==original.nodes.length||edgeIds.size!==original.links.length) throw Error("Invalid base IDs");
 const records=new Map(), ledgerMap=new Map(ledger.rows.map(r=>[r.source_id,r]));
 if(ledgerMap.size!==500||doc.nodes.length!==500||doc.links.length!==0) throw Error("Lot03 perimeter");
 const appendNode=n=>{if(nodes.has(n.id)) throw Error("Node collision "+n.id); nodes.set(n.id,n);};
 for(const n0 of doc.nodes){const n=clone(n0),p=n.provenance?.[0];if(n.visibility!=="documentary"||n.category!=="documentazione"||n.provenance.length!==1||!p||records.has(p.original_id)||JSON.stringify(p.payload)!==JSON.stringify(ledgerMap.get(p.original_id)?.provenance))throw Error("Documentary payload "+n.id);records.set(p.original_id,n);appendNode(n);}
 const candidateIds=new Set();
 for(const n0 of preview.nodes){const n=clone(n0);if(n.category!=="opere"||n.visibility!=="preview_only") throw Error("Preview node "+n.id);
 if(n.id.includes(":work:")){const p=n.provenance?.[0];if(!p||ledgerMap.get(p.original_id)?.disposition!=="IDENTITY_CANDIDATE"||candidateIds.has(p.original_id)||JSON.stringify(p.payload)!==JSON.stringify(records.get(p.original_id)?.provenance[0].payload))throw Error("Work payload "+n.id);candidateIds.add(p.original_id);}
 else if(!n.id.includes(":collection:"))throw Error("Unexpected collection "+n.id);
 appendNode({...n,visibility:"musical",quality:"AUDIT_PREVIEW_NOT_CERTIFIED"});}
 if(candidateIds.size!==489||preview.nodes.length!==541)throw Error("Candidate coverage");
 for(const n of preview.taxonomy_node_proposals){if(n.category!=="generi_forme"||n.visibility!=="preview_only")throw Error("Taxonomy");appendNode({...clone(n),visibility:"musical",quality:"AUDIT_PREVIEW_NOT_CERTIFIED"});}
 for(const n of preview.authority_proposals){if(n.visibility!=="preview_only")throw Error("Authority");appendNode({...clone(n),category:"persone",visibility:"musical",quality:"AUDIT_PREVIEW_NOT_CERTIFIED"});}
 const rules={compone:["persone","opere"],elabora_melodia_tradizionale:["persone","opere"],appartiene_al_genere_o_forma:["opere","generi_forme"],parte_di_raccolta:["opere","opere"],genere_contiene_sottogenere:["generi_forme","generi_forme"]};
 const redirect=id=>base.semantic_a7?.redirect?.[id]||id, extra=[], redirected=[];
 const appendEdge=e=>{if(edgeIds.has(e.id)||!nodes.has(e.source)||!nodes.has(e.target)||e.source===e.target)throw Error("Edge "+e.id);edgeIds.add(e.id);extra.push(e);};
 for(const e0 of [...preview.links,...preview.external_edge_proposals,...preview.taxonomy_hierarchy_proposals]){const e=clone(e0),s=redirect(e.source),t=redirect(e.target),rule=rules[e.relation];if(e.status!=="PROPOSED_NOT_ACTIVE"||!rule||nodes.get(s)?.category!==rule[0]||nodes.get(t)?.category!==rule[1])throw Error("Edge rule "+e.id+" "+s+" "+t);if(s!==e.source||t!==e.target)redirected.push({id:e.id,old:[e.source,e.target],new:[s,t]});appendEdge({...e,source:s,target:t,visibility:"musical",quality:"AUDIT_PREVIEW_NOT_CERTIFIED"});}
 for(const r of preview.documentary_reuse_proposals){const d=records.get(r.source_id),t=redirect(r.target_id);if(!d||ledgerMap.get(r.source_id)?.disposition!=="REUSE_CANDIDATE"||candidateIds.has(r.source_id)||nodes.get(t)?.category!=="opere"||JSON.stringify(r.provenance)!==JSON.stringify(d.provenance[0].payload))throw Error("Reuse "+r.source_id);appendEdge({id:"flaminio_lot03::preview:documentary:"+r.source_id.split(":").pop(),source:d.id,target:t,relation:"riferimento_documentario",visibility:"documentary",quality:"AUDIT_PREVIEW_NOT_CERTIFIED"});}
 if(preview.documentary_reuse_proposals.length!==6||ledger.rows.filter(r=>r.disposition==="HOLD").some(r=>candidateIds.has(r.source_id)))throw Error("HOLD/reuse");
 const links=[...original.links,...extra];return {...original,nodes:[...nodes.values()],links,counts:{...original.counts,nodes:nodes.size,links:links.length},lot03_a400:{mode,status:"AUDIT_ONLY_NOT_CERTIFIED",source_records:500,work_candidates:489,collections:52,taxonomy_candidates:3,authority_candidates:1,reuses:6,holds:5,added_edges:extra.length,redirected}};
}
