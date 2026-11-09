'use strict';
/**
 * Musurgia Atlantis — Riconciliazione 02.
 * Test RIPETIBILE, sola lettura dei dati di staging.
 * Run from repository root:
 * node musurgia-atlantis/audit-integrazione/TEST_RICONCILIAZIONE_02_STAGING.cjs
 * Non legge il grafo Atlantis pubblico né certifica l'attendibilità di singoli archi.
 */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const here = __dirname;
const read = name => JSON.parse(fs.readFileSync(path.join(here,name),'utf8'));
const prefix = (type,n) => 'STAGING_ARCHI_'+type+'_FASE2K_PARTE'+String(n).padStart(2,'0')+'_2026-11-08.json';
const baseParts=[1,2,3,4,5].map(n=>read(prefix('BASE',n)));
const specParts=[1,2,3,4,5].map(n=>read(prefix('SPECIALISTICI',n)));
const base=baseParts.flatMap(x=>x.records);
const spec=specParts.flatMap(x=>x.records);
const ext=read('STAGING_ARCHI_ESTENSIONE_FASE2K_30_2026-11-08.json').records;
const imported=read('STAGING_IMPORT_PERSONE_2026-11-08.json').records;
const newPeople=read('STAGING_NUOVE_PERSONE_FASE2K_347_2026-11-08.json');
const nonpersons=read('STAGING_NODI_NON_PERSONE_FASE2K_374_2026-11-08.json').nonperson_nodes;
const fixture=read('STAGING_TEST_MOZART_LEOPOLD_FASE2D_2026-11-08.json');
const yes=(description,value)=>{assert.ok(value,description);process.stdout.write('PASS '+description+'\n');};
const continuous=(parts,total)=>parts.every((x,i)=>x.start_index_0based===(i?parts[i-1].end_index_exclusive:0)&&x.end_index_exclusive-x.start_index_0based===x.records.length)&&parts.at(-1).end_index_exclusive===total;
const uniqueIDs=records=>new Set(records.map(x=>x.stage_id)).size===records.length;
yes('2437 base, 1389 specialisti, 30 estensione',base.length===2437&&spec.length===1389&&ext.length===30);
yes('3856 relazioni senza cancellazioni',base.length+spec.length+ext.length===3856);
yes('Intervalli delle 5 parti base continui',continuous(baseParts,2437));
yes('Intervalli delle 5 parti specialistiche continui',continuous(specParts,1389));
yes('ID staging univoci in ciascuna partizione',uniqueIDs(base)&&uniqueIDs(spec)&&uniqueIDs(ext));
yes('Payload di origine conservati',base.every(x=>x.raw)&&spec.every(x=>x.original_payload)&&ext.every(x=>x.original_payload));
yes('Tutti i gate originari di attraversamento sono chiusi',base.every(x=>x.rooted_traversal_gate==='closed')&&spec.every(x=>x.rooted_historical_traversal_gate==='closed_until_independent_relation_review')&&ext.every(x=>x.rooted_traversal_gate==='closed_until_root_evidence'));
const originalIds = new Set([...imported.map(x=>x.source_id),...nonpersons.map(x=>x.legacy_id)]);
const all=[...base,...spec,...ext];
yes('Tutti i source/target originari presenti nel registro sorgente',all.every(x=>originalIds.has(x.source)&&originalIds.has(x.target)));
const mappedIds = new Set([...newPeople.new_person_candidates.map(x=>x.proposed_atlantis_id),...imported.flatMap(x=>(x.atlantis_candidates||[]).map(y=>y.id)),...newPeople.new_authority_equivalences.map(x=>x.target_id),...nonpersons.map(x=>x.stage_id)]);
const unresolved=[...new Set(all.flatMap(x=>[x.stage_source,x.stage_target]).filter(x=>!mappedIds.has(x)))];
const recognizedAliases = [
 ['pers:diaghilev','persona-sergej-diaghilev'],
 ['pers:bronislava-nizinskaja','persona-bronislava-nijinska']
];
yes('Sole due eccezioni alias precedenti non presenti nei candidate-ID',unresolved.length===2&&recognizedAliases.every(([target,source])=>unresolved.includes(target)&&newPeople.previous_alias_ids_excluded.includes(source)));
const collision=nonpersons.filter(x=>x.collision_requires_semantic_review);
yes('Collisione genere-musical conservata con due versioni',collision.length===1&&collision[0].legacy_id==='genere-musical'&&collision[0].record_variants.length===2);
const root='pers:mozart',leopold='pers:leopold-mozart';
const first=spec.filter(x=>x.stage_source===root||x.stage_target===root);
const neighbours=new Set(first.map(x=>x.stage_source===root?x.stage_target:x.stage_source));
const second=spec.filter(x=>neighbours.has(x.stage_source)||neighbours.has(x.stage_target));
const leo=spec.filter(x=>x.stage_source===leopold||x.stage_target===leopold);
const excludedIDs=new Set(fixture.leopold_adjacent_but_not_automatically_pertinent.map(x=>x.source_relation_id));
yes('Mozart: 30 record diretti, 27 vicini',first.length===30&&neighbours.size===27);
yes('BFS specialistico ingenuo: 249 archi a due passi',second.length===249);
yes('Leopold: 3 archi specialistici distinti',leo.length===3);
yes('Cappella e trattato di Leopold non automaticamente pertinenti',leo.filter(x=>excludedIDs.has(x.original_payload.id)).length===2);
yes('Paternità proposta ma non inventata negli archi storici originali',spec.every(x=>x.original_payload.id!=='staging:leopold-wolfgang-parentela'));
process.stdout.write('OK: staging integro; NON è un test del renderer pubblico, di browser/Android o una certificazione del merge.\n');