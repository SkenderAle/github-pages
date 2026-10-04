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

const silentPlay=document.getElementById('silentPlay');
const canticoDialog=document.getElementById('canticoDialog');
const canticoClose=document.getElementById('canticoClose');
if(silentPlay&&canticoDialog){
  silentPlay.addEventListener('click',()=>canticoDialog.showModal());
}
if(canticoClose&&canticoDialog){
  canticoClose.addEventListener('click',()=>canticoDialog.close());
  canticoDialog.addEventListener('click',e=>{
    const r=canticoDialog.getBoundingClientRect();
    const outside=e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom;
    if(outside)canticoDialog.close();
  });
}

const ratioButtons=[...document.querySelectorAll('[data-ratio]')];
const stringLine=document.getElementById('stringLine');
const ratioNote=document.getElementById('ratioNote');
const ratioLabels={
  '1':'1:1 · unisono',
  '0.75':'4:3 · quarta',
  '0.667':'3:2 · quinta',
  '0.5':'2:1 · ottava'
};
ratioButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    ratioButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const v=Number(btn.dataset.ratio);
    if(stringLine)stringLine.style.transform='scaleX('+v+')';
    if(ratioNote)ratioNote.textContent=ratioLabels[btn.dataset.ratio]+' · la lunghezza della corda cambia secondo un rapporto semplice.';
  });
});

const isorythmLab=document.getElementById('isorythmLab');
const isorythmPlay=document.getElementById('isorythmPlay');
const isorythmText=document.getElementById('isorythmText');
if(isorythmLab&&isorythmPlay){
  isorythmPlay.addEventListener('click',()=>{
    isorythmLab.classList.toggle('play');
    isorythmPlay.textContent=isorythmLab.classList.contains('play')?'■ Ferma':'▶ Fai scorrere i cicli';
    if(isorythmText)isorythmText.textContent=isorythmLab.classList.contains('play')
      ?'I due cicli ritornano con periodicità differenti: la relazione cambia mentre ciascuno conserva la propria identità.'
      :'La struttura può essere perfettamente organizzata anche quando non è evidente al primo ascolto.';
  });
}

const chaseLab=document.getElementById('chaseLab');
const chasePlay=document.getElementById('chasePlay');
const chaseText=document.getElementById('chaseText');
if(chaseLab&&chasePlay){
  chasePlay.addEventListener('click',()=>{
    chaseLab.classList.remove('play'); void chaseLab.offsetWidth; chaseLab.classList.add('play');
    chasePlay.textContent='↻ Ripeti';
    if(chaseText) setTimeout(()=>chaseText.innerHTML='La seconda voce riprende la prima dopo un intervallo: <strong>questo procedimento si chiama canone</strong>.',4600);
  });
}

const wordStage=document.getElementById('wordStage');
document.querySelectorAll('[data-word]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const w=btn.dataset.word;
    if(!wordStage)return;
    wordStage.className='word-stage';
    const map={
      salire:['ascend','Una linea potrebbe salire. È una possibilità, non una traduzione obbligatoria.'],
      fermarsi:['stop','Una pausa o un arresto può rendere percepibile il significato di “fermarsi”.'],
      correre:['run','Figure più rapide possono suggerire movimento e concitazione.'],
      piangere:['cry','Una linea discendente, un rallentamento, una dissonanza, un melisma: le possibilità sono molte.']
    };
    const [cls,txt]=map[w]||['',''];
    if(cls)wordStage.classList.add(cls);
    wordStage.textContent=txt;
  });
});
