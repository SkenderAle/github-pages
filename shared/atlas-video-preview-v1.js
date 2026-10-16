/* Musurgia Mundi · anteprime video, v1. Nessuna riproduzione automatica. */
(function(){
'use strict';
var YT=/^[A-Za-z0-9_-]{11}$/;
var THUMB='https://i.ytimg.com/vi/';
var staticPlayers=[];
var staticStopping=false;
var focusBackStage=null;
function youtubeId(url){
 try{
  var u=new URL(url,document.baseURI);
  if((u.hostname==='youtube.com'||u.hostname==='www.youtube.com'||u.hostname==='m.youtube.com')&&u.pathname==='/watch'){
   var v=u.searchParams.get('v');return YT.test(v||'')?v:null;
  }
  if((u.hostname==='youtube-nocookie.com'||u.hostname==='www.youtube-nocookie.com'||u.hostname==='www.youtube.com'||u.hostname==='youtube.com')&&u.pathname.indexOf('/embed/')===0){
   var id=u.pathname.split('/')[2];return YT.test(id||'')?id:null;
  }
  if(u.hostname==='youtu.be'){var short=u.pathname.split('/')[1];return YT.test(short||'')?short:null;}
 }catch(e){}
 return null;
}
function makePreview(id,label,onClick,standalone){
 var btn=document.createElement('button');btn.type='button';
 btn.className='mm-site-preview'+(standalone?' mm-site-preview--standalone':'');
 btn.setAttribute('aria-label','Apri il lettore per '+(label||'questa registrazione')+'. La riproduzione parte solo premendo Play.');
 var img=document.createElement('img');img.src=THUMB+id+'/hqdefault.jpg';img.alt='';img.loading='lazy';img.decoding='async';
 img.addEventListener('error',function(){img.remove();},{once:true});
 var shade=document.createElement('span');shade.className='mm-site-preview__shade';shade.setAttribute('aria-hidden','true');
 var circle=document.createElement('span');circle.className='mm-site-preview__circle';circle.textContent='▶';circle.setAttribute('aria-hidden','true');
 var caption=document.createElement('span');caption.className='mm-site-preview__caption';
 var title=document.createElement('span');title.textContent='Apri il lettore';
 var hint=document.createElement('small');hint.textContent='Avvio manuale · nessun autoplay';
 caption.append(title,hint);btn.append(img,shade,circle,caption);
 btn.addEventListener('click',onClick);
 return btn;
}
function initStatic(){
 document.querySelectorAll('iframe[data-mm-preview-src]').forEach(function(frame){
  if(frame.dataset.mmSiteBound)return;
  var original=frame.getAttribute('data-mm-preview-src')||'';
  var id=youtubeId(original);if(!id)return;
  frame.dataset.mmSiteBound='1';frame.classList.add('mm-site-static-iframe');
  var poster=makePreview(id,frame.title||'questa registrazione',function(){
   stopStatic();
   var url=new URL(original,document.baseURI);
   url.searchParams.set('autoplay','0');url.searchParams.set('playsinline','1');
   frame.src=url.toString();
   frame.classList.add('mm-site-static-active');poster.hidden=true;closer.hidden=false;
  },true);
  var closer=document.createElement('button');
  closer.type='button';closer.className='mm-site-preview-stop';closer.textContent='■ Ferma e chiudi';
  closer.setAttribute('aria-label','Ferma e chiudi il lettore: '+(frame.title||'registrazione'));
  closer.hidden=true;closer.addEventListener('click',function(){stopStatic();poster.focus({preventScroll:true});});
  if(getComputedStyle(frame.parentElement).position==='static')frame.parentElement.style.position='relative';
  frame.before(poster);frame.after(closer);
  staticPlayers.push({iframe:frame,poster:poster,closer:closer});
 });
}
function stopStatic(root){
 if(staticStopping)return;staticStopping=true;
 staticPlayers.forEach(function(p){
  if(root&&!root.contains(p.iframe))return;
  if(p.iframe.hasAttribute('src'))p.iframe.removeAttribute('src');
  p.iframe.classList.remove('mm-site-static-active');p.poster.hidden=false;p.closer.hidden=true;
 });
 staticStopping=false;
}
function matchingButton(attr,id){
 var nodes=document.querySelectorAll('button['+attr+']');
 for(var k=0;k<nodes.length;k++)if(nodes[k].getAttribute(attr)===id)return nodes[k];
 return null;
}
function ensureStage(stage,id,button,title){
 if(!YT.test(id||'')||!button||stage.querySelector('iframe'))return;
 if(stage.querySelector(':scope > .mm-site-preview'))return;
 var poster=makePreview(id,title,function(){stopStatic();button.click();},false);
 stage.classList.add('mm-site-preview-ready');stage.append(poster);
 button.hidden=true;
 if(focusBackStage===stage){focusBackStage=null;poster.focus({preventScroll:true});} // L'anteprima sostituisce il vecchio pulsante «Prepara»; il controller rimane attivo.
}
function refresh(){
 document.querySelectorAll('[data-mm-stage]').forEach(function(stage){
  var button=matchingButton('data-mm-load',stage.dataset.mmStage||'');
  if(button&&button.dataset.mmProvider!=='soundcloud')ensureStage(stage,button.dataset.mmVideo,button,button.dataset.mmTitle||'questa registrazione');
 });
 document.querySelectorAll('.stage[data-stage]').forEach(function(stage){
  var card=stage.closest('.work');if(!card)return;
  var button=card.querySelector('button[data-load]');if(!button)return;
  var links=card.querySelectorAll('a[href*="youtube.com/watch"],a[href*="youtu.be/"]');
  var id=null;for(var i=0;i<links.length&&!id;i++)id=youtubeId(links[i].href);
  ensureStage(stage,id,button,card.querySelector('h3')?.textContent||'questa registrazione');
 });
 var mozart={levin:'fd6SkdJEPnw',uchida:'uDmbJGRr08w'};
 document.querySelectorAll('[data-mozart-stage]').forEach(function(stage){
  var key=stage.dataset.mozartStage,button=matchingButton('data-mozart-load',key);
  ensureStage(stage,mozart[key],button,'Mozart · concerto K. 466, confronto fra pianoforti');
 });
 var nona=document.getElementById('nona-video-stage');
 if(nona)ensureStage(nona,'fx827bYPBNw',document.querySelector('[data-nona-load]'),'Beethoven · Nona sinfonia, finale');
}
function stopRelatedPlayers(){
 // Mantieni un solo lettore audiovisivo preparato per pagina.
 // Invoca i controlli di arresto propri di ogni pagina, senza cambiare i cataloghi.
 var selectors=[
  'button[data-mm-stop]:not([hidden])',
  'button[data-nona-stop]:not([hidden])',
  'button[data-mozart-stop]:not([hidden])',
  '.work button[data-stop]:not([hidden])',
  '#quadri-video-close:not([hidden])',
  '#nm-video-stop:not([hidden])'
 ];
 selectors.forEach(function(selector){
  document.querySelectorAll(selector).forEach(function(control){
   if(control.isConnected&&!control.hidden)control.click();
  });
 });
}
// Ripristina il focus sulla copertina dopo la chiusura esplicita di un video.
document.addEventListener('click',function(event){
 if(!event.isTrusted||!(event.target instanceof Element))return;
 var stop=event.target.closest('button[data-mm-stop],button[data-stop],button[data-mozart-stop],button[data-nona-stop]');
 if(!stop)return;
 var stage=null;
 if(stop.hasAttribute('data-mm-stop')){
  var key=stop.dataset.mmStop,nodes=document.querySelectorAll('[data-mm-stage]');
  for(var i=0;i<nodes.length;i++)if(nodes[i].dataset.mmStage===key){stage=nodes[i];break}
 }else if(stop.hasAttribute('data-mozart-stop')){
  var mk=stop.dataset.mozartStop,moz=document.querySelectorAll('[data-mozart-stage]');
  for(var k=0;k<moz.length;k++)if(moz[k].dataset.mozartStage===mk){stage=moz[k];break}
 }else if(stop.hasAttribute('data-nona-stop'))stage=document.getElementById('nona-video-stage');
 else if(stop.hasAttribute('data-stop'))stage=stop.closest('.work')?.querySelector('.stage[data-stage]')||null;
 if(stage)focusBackStage=stage;
},true);
var playbackTrigger='.mm-site-preview,[data-mm-load],[data-load],[data-mozart-load],[data-nona-load],#nm-video-load,#quadri-video-load,#quadri-video-kvam,[data-video],[data-compare-video],.playlist-video';
document.addEventListener('click',function(event){
 var hit=event.target instanceof Element&&event.target.closest(playbackTrigger);
 if(!hit||hit.closest('[hidden]')&&!hit.matches('[data-mm-load],[data-load],[data-mozart-load],[data-nona-load]'))return;
 focusBackStage=null;
 stopStatic();stopRelatedPlayers();
},true);
initStatic();refresh();
var pending=false;
var observer=new MutationObserver(function(mutations){
 if(pending)return;
 for(var i=0;i<mutations.length;i++){
  if(mutations[i].addedNodes.length||mutations[i].removedNodes.length){
   pending=true;
   queueMicrotask(function(){pending=false;refresh();});
   break;
  }
 }
});
observer.observe(document.body,{childList:true,subtree:true});
document.addEventListener('toggle',function(event){
 if(event.target instanceof HTMLDetailsElement&&!event.target.open)stopStatic(event.target);
},true);
window.addEventListener('pagehide',function(){stopStatic();});
document.addEventListener('visibilitychange',function(){if(document.hidden)stopStatic();});
})();
