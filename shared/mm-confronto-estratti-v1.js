/* Musurgia Mundi — miniatura YouTube: un clic riproduce, nessun iframe prima del clic. */
(()=>{'use strict';
const panels=[...document.querySelectorAll('[data-mm-clips]')];
if(!panels.length)return;
const validId=id=>/^[A-Za-z0-9_-]{11}$/.test(id);
function details(trigger){
 if(!trigger)return null;
 const id=trigger.dataset.mmClipVideo||trigger.dataset.video||'';
 const start=Number(trigger.dataset.start),end=Number(trigger.dataset.end);
 if(!validId(id)||!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<=start)return null;
 return {id,start,end,title:trigger.dataset.title||'Estratto musicale'};
}
function preview(card){
 const trigger=card.querySelector('[data-mm-clip-load]');
 const stage=card.querySelector('[data-mm-clip-stage]');
 const info=details(trigger);
 if(!info||!stage)return;
 const button=document.createElement('button');
 button.type='button';button.className='mm-compare-preview';
 button.setAttribute('aria-label','Riproduci: '+info.title);
 button.title='Clicca per avviare: '+info.title;
 const thumbnail=document.createElement('img');
 thumbnail.src='https://i.ytimg.com/vi/'+info.id+'/hqdefault.jpg';
 thumbnail.alt='';thumbnail.loading='lazy';thumbnail.decoding='async';thumbnail.referrerPolicy='no-referrer';
 thumbnail.addEventListener('error',()=>{button.classList.add('mm-compare-preview--fallback');thumbnail.remove();});
 const play=document.createElement('span');
 play.className='mm-compare-preview-play';play.setAttribute('aria-hidden','true');play.textContent='▶';
 const label=document.createElement('span');
 label.className='mm-compare-preview-label';label.setAttribute('aria-hidden','true');label.textContent='Riproduci video';
 button.append(thumbnail,play,label);
 button.addEventListener('click',()=>playClip(trigger));
 stage.replaceChildren(button);
 trigger.hidden=true; // Il pulsante originale resta come riserva nel markup, senza mostrare un secondo comando.
}
function stop(panel,message){
 panel.querySelectorAll('.mm-compare-track').forEach(card=>{
  preview(card);
  const stopButton=card.querySelector('[data-mm-clip-stop]');
  if(stopButton)stopButton.hidden=true;
 });
 const status=panel.querySelector('.mm-compare-state');
 if(status&&message)status.textContent=message;
}
function stopAll(){
 panels.forEach(panel=>stop(panel,'Nessun video in riproduzione. Clicca una miniatura per ascoltare.'));
}
function playClip(trigger){
 const info=details(trigger),card=trigger?.closest('.mm-compare-track');
 const stage=card?.querySelector('[data-mm-clip-stage]');
 if(!info||!stage)return;
 const panel=trigger.closest('[data-mm-clips]');
 stopAll();
 const nativeStop=document.querySelector('#player:not([hidden]) #stop');
 if(nativeStop)nativeStop.click();
 const frame=document.createElement('iframe');
 frame.src='https://www.youtube-nocookie.com/embed/'+info.id+'?rel=0&playsinline=1&controls=1&autoplay=1&start='+info.start+'&end='+info.end;
 frame.title=info.title+' · riproduzione richiesta dal lettore';
 frame.referrerPolicy='strict-origin-when-cross-origin';
 frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
 frame.allowFullscreen=true;
 stage.replaceChildren(frame);
 const stopButton=card.querySelector('[data-mm-clip-stop]');
 if(stopButton)stopButton.hidden=false;
 const status=panel?.querySelector('.mm-compare-state');
 if(status)status.textContent='Riproduzione avviata: '+info.title+'. Puoi fermarla con «Ferma» o scegliere un altro video.';
}
panels.forEach(panel=>{
 panel.querySelectorAll('.mm-compare-track').forEach(preview);
 panel.querySelectorAll('[data-mm-clip-load]').forEach(button=>button.addEventListener('click',()=>playClip(button)));
 panel.querySelectorAll('[data-mm-clip-stop]').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('.mm-compare-track');
  stop(panel,'Ascolto fermato. Clicca una miniatura per ricominciare.');
  card?.querySelector('.mm-compare-preview')?.focus();
 }));
});
document.addEventListener('click',event=>{
 if(event.target instanceof Element&&event.target.closest('button[data-video]'))stopAll();
},true);
window.addEventListener('pagehide',stopAll);
})();
