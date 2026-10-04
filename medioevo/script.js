const progress=document.getElementById('progress');
const navLinks=[...document.querySelectorAll('nav a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll(){
  const doc=document.documentElement;
  const max=doc.scrollHeight-innerHeight;
  if(progress)progress.style.width=(max>0?(scrollY/max)*100:0)+'%';
  let current='';
  for(const s of sections){if(s.getBoundingClientRect().top<160)current='#'+s.id}
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===current));
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

const stage=document.getElementById('gestureStage');
const play=document.getElementById('gesturePlay');
const neumes=[...document.querySelectorAll('.neume-strip span')];
const result=document.getElementById('gestureResult');
let timers=[];
if(stage&&play){
  play.addEventListener('click',()=>{
    timers.forEach(clearTimeout);timers=[];
    stage.classList.remove('play');
    neumes.forEach(n=>n.classList.remove('on'));
    if(result)result.classList.remove('show');
    void stage.offsetWidth;
    stage.classList.add('play');
    play.textContent='↻ Ripeti il gesto';
    neumes.forEach((n,i)=>timers.push(setTimeout(()=>n.classList.add('on'),350+i*520)));
    timers.push(setTimeout(()=>result&&result.classList.add('show'),5900));
  });
}

const voiceDemo=document.getElementById('voiceDemo');
const voicePlay=document.getElementById('voicePlay');
const voiceText=document.getElementById('voiceText');
if(voiceDemo&&voicePlay){
  voicePlay.addEventListener('click',()=>{
    voiceDemo.classList.remove('play');void voiceDemo.offsetWidth;voiceDemo.classList.add('play');
    voicePlay.textContent='↻ Ripeti';
    if(voiceText)voiceText.textContent='La seconda voce non cancella la prima: deve imparare a coordinarsi con essa.';
  });
}
