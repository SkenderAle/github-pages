const progress=document.getElementById('progress');
const scrolltop=document.getElementById('scrolltop');
const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];

function onScroll(){
  const h=document.documentElement.scrollHeight-innerHeight;
  if(progress)progress.style.width=(h?scrollY/h*100:0)+'%';
  if(scrolltop)scrolltop.classList.toggle('show',scrollY>900);
  let current='';
  document.querySelectorAll('main section[id]').forEach(sec=>{
    const top=sec.getBoundingClientRect().top;
    if(top<150)current=sec.id;
  });
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(scrolltop)scrolltop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

document.querySelectorAll('[data-cameo]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const dlg=document.getElementById('dlg-'+btn.dataset.cameo);
    if(dlg&&typeof dlg.showModal==='function')dlg.showModal();
  });
});
document.querySelectorAll('.codex-dialog').forEach(dlg=>{
  dlg.addEventListener('click',e=>{
    const r=dlg.getBoundingClientRect();
    const outside=e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;
    if(outside)dlg.close();
  });
});

const gestureBtn=document.getElementById('gestureBtn');
const gesture=document.getElementById('gestureDemo');
const gestureResult=document.getElementById('gestureResult');
if(gestureBtn&&gesture){
  let gt;
  gestureBtn.addEventListener('click',()=>{
    gesture.classList.remove('play');
    if(gestureResult)gestureResult.classList.remove('show');
    void gesture.offsetWidth;
    gesture.classList.add('play');
    gestureBtn.textContent='↻ Ripeti il gesto';
    clearTimeout(gt);
    gt=setTimeout(()=>gestureResult&&gestureResult.classList.add('show'),3900);
  });
}

const whisperBtn=document.getElementById('whisperBtn');
const whisperResult=document.getElementById('whisperResult');
const mouths=[...document.querySelectorAll('.whisper-chain span')];
const chain=[
  '«Gloria in excelsis Deo»',
  '«Gloria in excelsis Deo» · l’accento cambia',
  '«Gloria in excelsis…» · una parola si perde',
  '«Gloria… Deo» · il profilo si accorcia',
  'La comunità riconosce ancora la formula, ma qualcosa è cambiato.'
];
let wi=0;
if(whisperBtn&&whisperResult){
  whisperBtn.addEventListener('click',()=>{
    wi=(wi+1)%chain.length;
    mouths.forEach((m,i)=>m.classList.toggle('on',i<=wi));
    whisperResult.textContent=chain[wi];
    whisperBtn.textContent=wi===chain.length-1?'Ricomincia ↺':'Passa ancora →';
  });
}

const neumePlay=document.getElementById('neumePlay');
const neumeStage=document.getElementById('neumeStage');
const neumeMarks=[...document.querySelectorAll('.neume-mark')];
const neumeConclusion=document.getElementById('neumeConclusion');
if(neumePlay&&neumeStage){
  let ntimers=[];
  const clearNeumeTimers=()=>{ntimers.forEach(clearTimeout);ntimers=[]};
  neumePlay.addEventListener('click',()=>{
    clearNeumeTimers();
    neumeStage.classList.remove('playing');
    neumeMarks.forEach(n=>n.classList.remove('on'));
    if(neumeConclusion)neumeConclusion.classList.remove('show');
    void neumeStage.offsetWidth;
    neumeStage.classList.add('playing');
    neumePlay.textContent='↻ Ripeti';
    neumeMarks.forEach((n,i)=>{
      ntimers.push(setTimeout(()=>n.classList.add('on'),350+i*470));
    });
    ntimers.push(setTimeout(()=>{if(neumeConclusion)neumeConclusion.classList.add('show')},5200));
  });
}
