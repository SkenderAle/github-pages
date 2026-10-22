/* Musurgia Mundi: incorpora i video soltanto dopo un clic e interrompe il confronto precedente. */
(()=>{'use strict';
const panels=[...document.querySelectorAll('[data-mm-clips]')];if(!panels.length)return;
function stop(panel,message){
 panel.querySelectorAll('[data-mm-clip-stage]').forEach(stage=>{let el=document.createElement('div');el.className='mm-compare-placeholder';el.textContent='Estratto chiuso. Premi «Prepara», poi Play.';stage.replaceChildren(el);});
 panel.querySelectorAll('[data-mm-clip-stop]').forEach(b=>b.hidden=true);
 if(message){const status=panel.querySelector('.mm-compare-state');if(status)status.textContent=message;}
}
function stopAll(){panels.forEach(p=>stop(p,''));}
panels.forEach(panel=>{
 panel.querySelectorAll('[data-mm-clip-load]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.dataset.mmClipVideo||button.dataset.video||'',start=Number(button.dataset.start),end=Number(button.dataset.end);
  if(!/^[A-Za-z0-9_-]{11}$/.test(id)||!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<=start)return;
  const card=button.closest('.mm-compare-track'),stage=card?.querySelector('[data-mm-clip-stage]');if(!stage)return;
  stopAll();
  const nativeStop=document.querySelector('#player:not([hidden]) #stop');if(nativeStop)nativeStop.click();
  const frame=document.createElement('iframe');
  frame.src='https://www.youtube-nocookie.com/embed/'+id+'?rel=0&playsinline=1&controls=1&autoplay=0&start='+start+'&end='+end;
  frame.title=(button.dataset.title||'Estratto musicale')+' · avvio manuale';
  frame.referrerPolicy='strict-origin-when-cross-origin';frame.allow='encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;
  stage.replaceChildren(frame);card.querySelector('[data-mm-clip-stop]').hidden=false;
  const status=panel.querySelector('.mm-compare-state');if(status)status.textContent='Pronto: '+button.dataset.title+'. Premi Play. Il suono non parte automaticamente.';
 }));
 panel.querySelectorAll('[data-mm-clip-stop]').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('.mm-compare-track');stop(panel,'Ascolto fermato. Nessun video attivo.');card?.querySelector('[data-mm-clip-load]')?.focus();
 }));
});
document.addEventListener('click',e=>{if(e.target instanceof Element&&e.target.closest('button[data-video]'))stopAll();},true);
window.addEventListener('pagehide',stopAll);
})();
