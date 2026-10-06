#!/usr/bin/env node
/**
 * MUSURGIA MUNDI - revisione di copertura del catalogo.
 *   node atlante3d/database/verifica-copertura.mjs
 *   node atlante3d/database/verifica-copertura.mjs --markdown
 *   node atlante3d/database/verifica-copertura.mjs --json
 *   node atlante3d/database/verifica-copertura.mjs --strict
 *
 * Copertura quantitativa ≠ esame musicologico delle fonti.
 * L'assenza di un collegamento non prova l'assenza storica di una relazione.
 */
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';

const root=dirname(fileURLToPath(import.meta.url));
const graph=JSON.parse(readFileSync(join(root,'grafo.json'),'utf8'));
const lens=JSON.parse(readFileSync(join(root,'relazioni.json'),'utf8'));
const identities=JSON.parse(readFileSync(join(root,'identita-esterne.json'),'utf8'));
const identitiesById=new Map(identities.items.map(r=>[r.id,r]));
const args=new Set(process.argv.slice(2));
const types=['scuole','formazione','influenze','collaborazioni','genealogie'];
const periods=['medioevo','rinascimento','barocco','classicismo','romanticismo','post-romanticismo','novecento'];
const byID=new Map(graph.nodes.map(n=>[n.id,n]));
const allRelations=lens.relations||[];
const rows=graph.nodes.filter(n=>n.type==='compositore').map(n=>{
 const matches=allRelations.filter(r=>r.source===n.id||r.target===n.id);
 const stats=Object.fromEntries(types.map(t=>[t,matches.filter(r=>r.group===t).length]));
 const period=periods.find(p=>graph.edges.some(e=>e.source===n.id&&e.target===p))||'non-classificato';
 const schoolIds=matches.filter(r=>r.group==='scuole').map(r=>r.source===n.id?r.target:r.source);
 const schools=[...new Set(schoolIds)].map(id=>byID.get(id)?.label||id).sort((a,b)=>a.localeCompare(b,'it'));
 return {id:n.id,label:n.label,period,stats,schools,total:matches.length,scuole:stats.scuole,sourceUrls:matches.flatMap(x=>x.sources||[]).length,firstPassReviewed:Boolean(identitiesById.get(n.id)?.musicological_audit?.reviewed_on),reviewBatch:identitiesById.get(n.id)?.musicological_audit?.batch||null,reviewStatus:identitiesById.get(n.id)?.musicological_audit?.status||null,externalIdentityVerified:Boolean(identitiesById.get(n.id)?.wikidata_id)};
}).sort((a,b)=>periods.indexOf(a.period)-periods.indexOf(b.period)||a.label.localeCompare(b.label,'it'));
const nonMusicRoles=graph.nodes.filter(n=>n.type==='persona'&&n.music_relevance).map(n=>({id:n.id,label:n.label,role:n.semantic_type||'persona'}));
const missing=rows.filter(row=>row.scuole===0);
const withoutAnything=rows.filter(row=>row.total===0);
const byPeriod=Object.fromEntries([...periods,'non-classificato'].map(period=>[period,{total:rows.filter(r=>r.period===period).length,missing:missing.filter(r=>r.period===period).length}]));
const report={generated:new Date().toISOString(),composerCount:rows.length,withoutSchool:missing.length,withoutAnySpecialist:withoutAnything.length,schoolRelations:allRelations.filter(r=>r.group==='scuole').length,totalRelations:allRelations.length,firstPassReviewed:rows.filter(r=>r.firstPassReviewed).length,externalVerified:rows.filter(r=>r.externalIdentityVerified).length,schoolCoveragePercentage:rows.length?Math.round((rows.length-missing.length)/rows.length*1000)/10:0,byPeriod,nonMusicRoles,rows};
if(args.has('--json'))console.log(JSON.stringify(report,null,2));
else if(args.has('--markdown')){
 const esc=s=>String(s??'').replace(/\|/g,'\\|').replace(/\r?\n/g,' ');
 const lines=[
 '# Musurgia Mundi · Copertura delle scuole e delle genealogie',
 '',
 '**Snapshot generata automaticamente dal database:** '+report.generated.slice(0,10)+'.',
 '',
 '> Il numero di relazioni è un indicatore di copertura del catalogo, non una certificazione bibliografica. Lo zero significa «rapporto non ancora catalogato», non «relazione storica inesistente». Ogni voce va verificata con fonti riferite a quel preciso rapporto.',
 '',
 '- Compositori censiti: **'+rows.length+'**.',
 '- Senza legami di scuola o tradizione: **'+missing.length+'**.',
 '- Senza relazioni specialistiche di alcun tipo: **'+withoutAnything.length+'**.',
 '- Relazioni nella lente Scuole e tradizioni: **'+report.schoolRelations+'**.',
 '- Prime ricognizioni musicologiche per nome: **'+report.firstPassReviewed+'** su '+rows.length+' (non equivalgono alla revisione bibliografica definitiva).',
 '- Nel quinto lotto: **'+rows.filter(r=>r.reviewBatch==='quinto-lotto-40').length+'** schede con almeno una fonte nominativa, di cui **'+rows.filter(r=>r.reviewBatch==='quinto-lotto-40'&&r.reviewStatus?.startsWith('ricognizione-mirata')).length+'** con nuova verifica di relazioni e **'+rows.filter(r=>r.reviewBatch==='quinto-lotto-40'&&r.reviewStatus?.startsWith('prima-ricognizione-biografica')).length+'** con ricerca biografica iniziale (ulteriori indagini relazionali necessarie).',
 '- Sesto lotto: **'+rows.filter(r=>r.reviewBatch==='sesto-lotto-40').length+'** biografie censite con almeno una fonte, di cui **'+rows.filter(r=>r.reviewBatch==='sesto-lotto-40'&&r.reviewStatus?.includes('relazionale')).length+'** con nuove relazioni e **'+rows.filter(r=>r.reviewBatch==='sesto-lotto-40'&&!r.reviewStatus?.includes('relazionale')).length+'** con prima verifica biografica ma relazioni da approfondire.',
 '- Settimo lotto: **'+rows.filter(r=>r.reviewBatch==='settimo-lotto-40').length+'** ricognizioni nominative, di cui **'+rows.filter(r=>r.reviewBatch==='settimo-lotto-40'&&r.reviewStatus?.includes('con-relazioni')).length+'** con nuovi collegamenti documentati e **'+rows.filter(r=>r.reviewBatch==='settimo-lotto-40'&&!r.reviewStatus?.includes('con-relazioni')).length+'** senza nuovi archi accertati (ricerca ancora aperta).',
 '- Identità Wikidata riconciliate: **'+report.externalVerified+'** su '+rows.length+'.',
 '',
 '## Copertura per epoca','',
 '| Epoca | Compositori | Da verificare nella lente Scuole |','|---|---:|---:|',
 ...Object.entries(byPeriod).filter(p=>p[1].total).map(([p,v])=>'| '+p+' | '+v.total+' | '+v.missing+' |'),
 '',
 '## Audit di tutti i compositori', '',
 'Legenda: Sc=Scuole, Ma=Maestri, In=Influenze, Co=Incontri, Ge=Genealogie. La sigla **RICERCA** segnala un compositore senza relazioni Scuole, anche se possiede relazioni in altre lenti.', '',
 '| Epoca | Compositore | Sc | Ma | In | Co | Ge | Scuole e tradizioni collegate | Stato | Prima ricognizione |',
 '|---|---|---:|---:|---:|---:|---:|---|---|---|',
 ...rows.map(row=>'| '+esc(row.period)+' | '+esc(row.label)+' | '+row.stats.scuole+' | '+row.stats.formazione+' | '+row.stats.influenze+' | '+row.stats.collaborazioni+' | '+row.stats.genealogie+' | '+esc(row.schools.join(' · ')||'—')+' | '+(row.scuole?'catalogato':'**RICERCA**')+' | '+(row.firstPassReviewed?'**'+({ 'primo-lotto-10':'Lotto 1','secondo-lotto-10':'Lotto 2','terzo-lotto-10':'Lotto 3','quarto-lotto-10':'Lotto 4','quinto-lotto-40':'Lotto 5','sesto-lotto-40':'Lotto 6','settimo-lotto-40':'Lotto 7' }[row.reviewBatch]||'Ricognizione')+'**':'da avviare')+' |'),
 '',
 '## Figure culturali non classificate come compositori', '',
 ...nonMusicRoles.map(n=>'- **'+n.label+'**: '+n.role.replace(/-/g,' ')+'.'),
 '',
 '## Procedura per completare i nodi RICERCA', '',
 '1. Ricostruire la formazione del musicista mediante fonti biografiche attendibili, senza dedurre insegnamenti da semplici incontri.',
 '2. Individuare scuola, istituzione, tradizione musicale, tecnica o movimento realmente pertinente, creando un nodo nuovo quando quelli esistenti non rappresentano correttamente il fenomeno.',
 '3. Collegare con una frase che spieghi la relazione, una categoria specifica e almeno una fonte verificabile, evitando appartenenze assegnate in base alla sola nazionalità o allo stesso secolo.',
 '4. Integrare, se documentate, trasmissioni fra scuole, insegnanti, opere e tradizioni, senza confondere analogia stilistica e influenza causale.',
 '5. Rigenerare questa fotografia del catalogo e riesaminare periodicamente la qualità delle fonti.',
 '',
 'Rigenerazione: node atlante3d/database/verifica-copertura.mjs --markdown > atlante3d/database/COPERTURA_SCUOLE.md',
 ''
 ];
 console.log(lines.join('\n'));
}else{
 console.log('Musurgia Mundi: '+rows.length+' compositori, '+report.schoolRelations+' relazioni Scuole, '+missing.length+' senza Scuole ('+report.schoolCoveragePercentage+'% copertura), '+withoutAnything.length+' totalmente isolati nelle lenti; prima ricerca su '+report.firstPassReviewed+' nomi, '+report.externalVerified+' QID verificati.');
 console.log('Senza Scuole per epoca: '+Object.entries(byPeriod).filter(p=>p[1].missing).map(p=>p[0]+'='+p[1].missing).join(' | '));
 for(const r of missing)console.log('RICERCA '+r.period+' / '+r.label+' ('+r.id+')');
}
if(args.has('--strict')&&missing.length)process.exitCode=2;
