#!/usr/bin/env node
/**
 * Musurgia Mundi — audit statico e ripetibile dell'Audioteca del melodramma.
 * Esecuzione dalla radice del repository:
 *   node scripts/audit-melodramma-audioteca.mjs
 *   node scripts/audit-melodramma-audioteca.mjs --json
 *
 * Nessuna richiesta di rete: NON certifica disponibilita, embeddability o crediti.
 */
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../melodramma/audioteca/index.html',import.meta.url),'utf8');
const allowReuse=new Set(['G1YS61pu8Rc','mkZrbA6np5s']);
const errors=[],warnings=[],rows=[],seen=new Map();
const cards=[...html.matchAll(/<article class="mm-compare-track"[^>]*>([\s\S]*?)<\/article>/g)];
function attr(text,name){return (text.match(new RegExp('\\b'+name+'="([^"]*)"'))||[])[1]??null;}
function issue(dest,index,code,message){dest.push({card:index,code,message});}
cards.forEach(([all,body],i)=>{
 const index=i+1;
 const title=(body.match(/<h4[^>]*>([\s\S]*?)<\/h4>/)||[])[1]?.replace(/<[^>]*>/g,'').trim()||'';
 const trigger=body.match(/<button[^>]*data-mm-clip-load[^>]*>/)?.[0]||'';
 const id=attr(trigger,'data-mm-clip-video');
 const start=attr(trigger,'data-start');
 const end=attr(trigger,'data-end');
 const link='https://www.youtube.com/watch?v='+id;
 const hasSourceLink=!!(id&&body.includes(link));
 const hasStage=body.includes('data-mm-clip-stage');
 const hasStop=body.includes('data-mm-clip-stop');
 const isFull=/opera integrale|opera completa|integrale|esecuzione integrale/i.test(title+' '+body.match(/<div class="mm-compare-label">([^<]+)/)?.[1]);
 const numStart=start===null?0:Number(start);
 const numEnd=end===null?null:Number(end);
 if(!/^[A-Za-z0-9_-]{11}$/.test(id||''))issue(errors,index,'youtube_id','ID non valido: '+id);
 if(!title)issue(errors,index,'title','Titolo mancante');
 if(!hasStage)issue(errors,index,'stage','Stage per la miniatura mancante');
 if(!hasStop)issue(errors,index,'stop','Pulsante Ferma mancante');
 if(!hasSourceLink)issue(errors,index,'source','Collegamento diretto alla fonte assente');
 if(!Number.isInteger(numStart)||numStart<0||(numEnd!==null&&(!Number.isInteger(numEnd)||numEnd<=numStart)))issue(errors,index,'range','Intervallo inizio-fine non valido');
 if(isFull&&numEnd!==null)issue(warnings,index,'full_limited','Opera integrale con taglio di fine impostato');
 if(numEnd!==null&&numEnd-numStart<=120)issue(warnings,index,'short_clip','Estratto didattico di massimo due minuti, intenzionale o da rivedere');
 if(id){
  if(seen.has(id)){
   const message='Video gia presente alla scheda '+seen.get(id);
   issue(allowReuse.has(id)?warnings:errors,index,allowReuse.has(id)?'reuse_planned':'duplicate_video',message);
  }else seen.set(id,index);
 }
 rows.push({index,title,id,start:numStart,end:numEnd,hasSourceLink,hasStage,isFull});
});
const sources=[...html.matchAll(/<article class="mm-external-card">([\s\S]*?)<\/article>/g)];
sources.forEach(([all,body],i)=>{
 const idx=i+1;
 if(!body.includes('href="https://'))issue(errors,'external-'+idx,'external_link','Fonte esterna priva di URL HTTPS');
});
const script=html.match(/<script src="([^"]*mm-confronto-estratti-v1\.js[^"]*)"/)?.[1]||'';
if(!script)issue(errors,0,'player_script','Componente video condiviso non caricato');
const summary={date:'2026-10-24',cards:rows.length,uniqueVideos:seen.size,externalSources:sources.length,timedClips:rows.filter(x=>x.end!==null).length,errors,warnings,playerScript:script};
if(process.argv.includes('--json'))console.log(JSON.stringify({...summary,rows},null,2));
else{
 console.log('Musurgia Mundi / Audioteca del melodramma — AUDIT STATICO');
 console.log('Schede:',summary.cards,'Video distinti:',summary.uniqueVideos,'Fonti esterne:',summary.externalSources);
 console.log('Estratti temporizzati:',summary.timedClips,'Errori:',errors.length,'Avvisi:',warnings.length);
 for(const item of errors)console.error('ERRORE',item.card,item.code,item.message);
 console.log('Limite: NON prova se un video YouTube e visibile o incorporabile.');
}
if(errors.length)process.exitCode=1;
