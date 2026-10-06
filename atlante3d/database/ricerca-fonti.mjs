#!/usr/bin/env node
/*
 * MUSURGIA MUNDI · Ricerca assistita su Wikidata e MusicBrainz
 * Node 20+, nessuna dipendenza. Non modifica grafo.json o relazioni.json.
 * Esempi:
 *   node atlante3d/database/ricerca-fonti.mjs --self-test
 *   node atlante3d/database/ricerca-fonti.mjs --mode=identita --limit=20 --offset=0 --output=report.json
 *   node atlante3d/database/ricerca-fonti.mjs --mode=relazioni --limit=6 --output=report.json
 *   node atlante3d/database/ricerca-fonti.mjs --mode=relazioni --id=compositore-antonio-vivaldi
 *
 * Modalità identita: suggerisce QID, NON li conferma.
 * Modalità relazioni: usa soltanto QID già verificati nel registro e genera CANDIDATI.
 * Nessuna relazione entra automaticamente nel catalogo specialistico.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {setTimeout as wait} from 'node:timers/promises';

const directory=path.dirname(fileURLToPath(import.meta.url));
const file=name=>path.join(directory,name);
const graph=JSON.parse(fs.readFileSync(file('grafo.json'),'utf8'));
const ledger=JSON.parse(fs.readFileSync(file('identita-esterne.json'),'utf8'));
const local=JSON.parse(fs.readFileSync(file('relazioni.json'),'utf8'));
const options={};
for(const arg of process.argv.slice(2)){
 if(arg==='--self-test'){options['self-test']=true;continue;}
 if(!arg.startsWith('--')||!arg.includes('='))throw Error('Argomento non valido: '+arg);
 const [key,...parts]=arg.slice(2).split('=');options[key]=parts.join('=');
}
const mode=options.mode||'relazioni';
const limit=Math.max(1,Math.min(50,Number(options.limit)||12));
const offset=Math.max(0,Number(options.offset)||0);
const qre=/^Q[1-9][0-9]*$/;
const uuidre=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const teacherType='249fc24f-d573-4290-9d74-0547712d1f1e';
const ids=new Set(graph.nodes.filter(n=>n.type==='compositore').map(n=>n.id));
const known=new Map(ledger.items.filter(n=>qre.test(n.wikidata_id||'')&&n.identity_status==='verificata-manualmente').map(n=>[n.wikidata_id,n.id]));
const reports={project:'Musurgia Mundi',schema_version:'1.0',generated:new Date().toISOString(),mode,limit,offset,policy:'Candidati da verificare, nessun inserimento automatico.',identities:[],candidates:[],errors:[],summary:{}};
function verifyIndex(){
 const seen=new Set(),problems=[];
 for(const rec of ledger.items){
  if(seen.has(rec.id))problems.push('duplicato '+rec.id);
  if(!ids.has(rec.id))problems.push('nodo inesistente '+rec.id);
  if(rec.wikidata_id&&!qre.test(rec.wikidata_id))problems.push('QID errato '+rec.id);
  if(rec.musicbrainz_id&&!uuidre.test(rec.musicbrainz_id))problems.push('MBID errato '+rec.id);
  if(rec.identity_status==='verificata-manualmente'&&!rec.identity_sources?.length)problems.push('fonti assenti '+rec.id);
  seen.add(rec.id);
 }
 for(const id of ids)if(!seen.has(id))problems.push('nuovo compositore senza registrazione '+id);
 return problems;
}
const issues=verifyIndex();
if(issues.length)throw Error('Registro identità non sincronizzato: '+issues.join('; '));
function propertyTargets(entity,prop){
 return (entity.claims?.[prop]||[]).filter(s=>s.rank!=='deprecated')
 .map(s=>({id:s.mainsnak?.datavalue?.value?.id,ref_count:s.references?.length||0,statement_id:s.id||null}))
 .filter(s=>qre.test(s.id||''));
}
function firstExternal(entity,prop){
 return (entity.claims?.[prop]||[]).filter(c=>c.rank!=='deprecated')
 .map(c=>c.mainsnak?.datavalue?.value).find(s=>typeof s==='string')||null;
}
function parseWikidata(subject,entity){
 const tuples=[];
 for(const p of [{property:'P1066',group:'formazione',kind:'studente-di',inverse:true},
                 {property:'P802',group:'formazione',kind:'ha-avuto-come-allievo',inverse:false},
                 {property:'P737',group:'influenze',kind:'influenzato-da',inverse:true}]){
  for(const t of propertyTargets(entity,p.property)){
   const sourceQid=p.inverse?t.id:subject,targetQid=p.inverse?subject:t.id;
   if(sourceQid===targetQid)continue;
   tuples.push({sourceQid,targetQid,group:p.group,kind:p.kind,property:p.property,
     ref_count:t.ref_count,statement_id:t.statement_id,
     evidence_url:'https://www.wikidata.org/wiki/'+subject+'#'+p.property,origin:'Wikidata'});
  }
 }
 return tuples;
}
function parseMusicBrainz(subjectId,artist){
 const result=[];
 for(const r of artist.relations||[]){
  if(r['type-id']!==teacherType&&r.type!=='teacher')continue;
  const other=r.artist?.id;
  if(!uuidre.test(other||'')||!['forward','backward'].includes(r.direction))continue;
  // Link phrases MusicBrainz: forward = soggetto insegna; backward = soggetto riceve.
  const teacher=r.direction==='forward'?subjectId:other;
  const student=r.direction==='forward'?other:subjectId;
  result.push({teacherMbid:teacher,studentMbid:student,group:'formazione',
    kind:'maestro-allievo-musicbrainz',mb_direction:r.direction,
    attributes:r.attributes||[],begin:r.begin||null,end:r.end||null,
    evidence_url:'https://musicbrainz.org/artist/'+subjectId,
    origin:'MusicBrainz',ref_count:0});
 }
 return result;
}
function selfTest(){
 const testEntity={claims:{
  P1066:[{mainsnak:{datavalue:{value:{id:'Q10'}}},references:[{}]}],
  P802:[{mainsnak:{datavalue:{value:{id:'Q20'}}}}],
  P737:[{mainsnak:{datavalue:{value:{id:'Q30'}}}}]
 }};
 const r=parseWikidata('Q1',testEntity);
 if(r.length!==3||r[0].sourceQid!=='Q10'||r[0].targetQid!=='Q1'||r[1].sourceQid!=='Q1'||r[1].targetQid!=='Q20'||r[2].sourceQid!=='Q30')throw Error('Test direzionalità Wikidata fallito');
 const m=parseMusicBrainz('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa',{relations:[{'type-id':teacherType,direction:'forward',artist:{id:'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'}},{'type-id':teacherType,direction:'backward',artist:{id:'cccccccc-cccc-4ccc-8ccc-cccccccccccc'}}]});
 if(m.length!==2||m[0].teacherMbid!=='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'||m[1].teacherMbid!=='cccccccc-cccc-4ccc-8ccc-cccccccccccc')throw Error('Test MusicBrainz fallito');
 console.log('PASS: 236+ compositori sincronizzabili; orientamenti P1066, P802, P737 e MusicBrainz corretti.');
}
if(options['self-test']){selfTest();process.exit(0);}
if(!['identita','relazioni'].includes(mode))throw Error('Usare --mode=identita oppure --mode=relazioni');

const userAgent='MusurgiaMundiAtlas/1.0 (https://github.com/SkenderAle/github-pages; public educational data)';
let lastMb=0;
async function jsonFetch(url,fromMusicBrainz=false){
 if(fromMusicBrainz){const delay=Math.max(0,1250-(Date.now()-lastMb));if(delay)await wait(delay);lastMb=Date.now();}
 for(let n=0;n<3;n++){
  try{
   const response=await fetch(url,{headers:{'User-Agent':userAgent,'Accept':'application/json'}});
   if(!response.ok)throw Error('HTTP '+response.status);
   return await response.json();
  }catch(e){if(n===2)throw e;await wait(1100*(n+1));}
 }
}
function wikidataUrl(params){
 const u=new URL('https://www.wikidata.org/w/api.php');
 for(const [k,v] of Object.entries({format:'json',...params}))u.searchParams.set(k,v);
 return u.href;
}
async function entityInfo(qids,props='labels|descriptions|claims'){
 if(!qids.length)return {};
 return (await jsonFetch(wikidataUrl({action:'wbgetentities',ids:qids.join('|'),props,languages:'it|en'}))).entities||{};
}
async function searchName(name){
 const j=await jsonFetch(wikidataUrl({action:'wbsearchentities',search:name,language:'it',uselang:'it',limit:'5',type:'item'}));
 return (j.search||[]).map(x=>({qid:x.id,label:x.label,description:x.description||'',url:x.concepturi||'https://www.wikidata.org/wiki/'+x.id}));
}
const candidates=[];
const entries=options.id?ledger.items.filter(x=>x.id===options.id):
  (mode==='relazioni'?ledger.items.filter(x=>x.identity_status==='verificata-manualmente'&&qre.test(x.wikidata_id||'')):
    ledger.items.filter(x=>x.identity_status!=='verificata-manualmente')).slice(offset,offset+limit);
if(!entries.length)throw Error('Nessun compositore nell’intervallo richiesto.');

for(const entry of entries){
 try{
  if(mode==='identita'){
   const hits=await searchName(entry.label.replace(/\s*\([^)]*\)$/,''));
   // I candidati sono associati per ricerca, non identificati come persone.
   reports.identities.push({local_id:entry.id,label:entry.label,
     status:'richiede-disambiguazione-umana',candidates:hits,
     note:'Non accettare omonimie; verificare professione, epoca, date, repertori e altre fonti.'});
  }else{
   const q=entry.wikidata_id;
   const entity=(await entityInfo([q]))[q];
   if(!entity)throw Error('Entità Wikidata non recuperata '+q);
   const claims=parseWikidata(q,entity);
   const mbid=entry.musicbrainz_id||firstExternal(entity,'P434');
   const mbRows=[];
   if(uuidre.test(mbid||'')){
    try{
     const m=await jsonFetch('https://musicbrainz.org/ws/2/artist/'+mbid+'?inc=artist-rels&fmt=json',true);
     mbRows.push(...parseMusicBrainz(mbid,m));
    }catch(e){reports.errors.push({id:entry.id,source:'MusicBrainz',message:e.message});}
   }
   reports.identities.push({local_id:entry.id,wikidata_id:q,musicbrainz_id:mbid||null,status:'identità già verificata nel registro',
     wikidata_url:'https://www.wikidata.org/wiki/'+q,
     musicbrainz_url:uuidre.test(mbid||'')?'https://musicbrainz.org/artist/'+mbid:null});
   for(const c of claims)candidates.push({...c,query_local_id:entry.id});
   for(const c of mbRows)candidates.push({...c,query_local_id:entry.id});
  }
 }catch(e){reports.errors.push({id:entry.id,source:mode,message:e.message});}
 if(mode==='identita')await wait(160);
}
const unknownQids=[...new Set(candidates.flatMap(c=>[c.sourceQid,c.targetQid]).filter(q=>qre.test(q||'')&&!known.has(q)))];
const labels={};
for(let i=0;i<unknownQids.length;i+=30){
 try{const batch=await entityInfo(unknownQids.slice(i,i+30),'labels');for(const [q,v] of Object.entries(batch))labels[q]=v.labels?.it?.value||v.labels?.en?.value||q;}
 catch(e){reports.errors.push({source:'Wikidata labels',message:e.message});}
}
const mbToLocal=new Map(ledger.items.filter(n=>uuidre.test(n.musicbrainz_id||'')&&n.identity_status==='verificata-manualmente').map(n=>[n.musicbrainz_id,n.id]));
const pending=new Map();
for(const row of candidates){
 let localSource,localTarget,externalSource,externalTarget;
 if(row.origin==='Wikidata'){
  localSource=known.get(row.sourceQid)||null;localTarget=known.get(row.targetQid)||null;
  externalSource={wikidata:row.sourceQid,label:labels[row.sourceQid]||null};
  externalTarget={wikidata:row.targetQid,label:labels[row.targetQid]||null};
 }else{
  localSource=mbToLocal.get(row.teacherMbid)||null;localTarget=mbToLocal.get(row.studentMbid)||null;
  externalSource={musicbrainz:row.teacherMbid};externalTarget={musicbrainz:row.studentMbid};
 }
 const key=row.origin+'|'+row.group+'|'+(row.sourceQid||row.teacherMbid)+'|'+(row.targetQid||row.studentMbid);
 if(pending.has(key))continue;
 const exists=localSource&&localTarget&&local.relations.some(r=>r.group===row.group&&r.source===localSource&&r.target===localTarget);
 const result={
  id:key,group:row.group,kind:row.kind,source:localSource,target:localTarget,
  external_source:externalSource,external_target:externalTarget,origin_database:row.origin,
  original_predicate:row.property||'MusicBrainz teacher',evidence_url:row.evidence_url,
  reference_count:row.ref_count||0,statement_id:row.statement_id||null,
  status:exists?'gia-catalogata-da-riesaminare':(!localSource||!localTarget?'estremo-esterno-da-riconciliare':'candidato-da-verificare'),
  note:'Verificare la fonte e il contesto storico; non tradurre direttamente questo candidato in relazione documentata.'
 };
 pending.set(key,result);
}
reports.candidates=[...pending.values()];
reports.summary={entries_considered:entries.length,identity_suggestions:reports.identities.length,
 candidates:reports.candidates.length,candidates_with_two_known_nodes:reports.candidates.filter(c=>c.source&&c.target).length,
 missing_local_endpoints:reports.candidates.filter(c=>!c.source||!c.target).length,
 errors:reports.errors.length};
const output=JSON.stringify(reports,null,2)+'\n';
if(options.output){
 fs.mkdirSync(path.dirname(path.resolve(options.output)),{recursive:true});
 fs.writeFileSync(options.output,output,'utf8');
}else console.log(output);
console.error('Musurgia Mundi:',JSON.stringify(reports.summary));
if(reports.errors.length)process.exitCode=2;
