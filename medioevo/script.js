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
const result=document.getElementById('gestureResult');
let timers=[];
if(stage&&play){
  play.addEventListener('click',()=>{
    timers.forEach(clearTimeout);timers=[];
    stage.classList.remove('play');
    if(result)result.classList.remove('show');
    void stage.offsetWidth;
    stage.classList.add('play');
    play.textContent='↻ Ripeti il gesto';
    timers.push(setTimeout(()=>result&&result.classList.add('show'),5900));
  });
}

const neumeStage=document.querySelector('.neume-player-stage');
const neumeTrace=document.getElementById('neumeTracePath');
const neumeGhost=document.getElementById('neumeGhostPath');
const neumeCursor=document.getElementById('neumeCursor');
const neumeTitle=document.getElementById('neumeTraceTitle');
const neumeDescA11y=document.getElementById('neumeTraceDesc');
const neumeName=document.getElementById('neumeName');
const neumeDescription=document.getElementById('neumeDescription');
const neumeCounter=document.getElementById('neumeCounter');
const neumeInstruction=document.getElementById('neumeInstruction');
const neumeAudioLabel=document.getElementById('neumeAudioLabel');
const neumePlay=document.getElementById('neumePlay');
const neumeReplay=document.getElementById('neumeReplay');
const neumeButtons=[...document.querySelectorAll('[data-neume-index]')];

const neumeData=[
  {name:'Pes / podatus',short:'Pes',desc:'Due suoni in salita. Il gesto tende verso l’alto.',instruction:'Disegna il movimento del <em>pes</em> con l’indice: parti più in basso e lascia che il gesto salga.',d:'M92 158 Q132 154 148 124 Q166 88 210 67',notes:[130.81,164.81],noteNames:['DO','MI'],thresholds:[0,.50]},
  {name:'Clivis',short:'Clivis',desc:'Due suoni in discesa. La voce piega verso il basso.',instruction:'Segui la <em>clivis</em> come una piccola discesa: il secondo suono si colloca più in basso del primo.',d:'M92 67 Q136 78 153 109 Q171 143 210 158',notes:[164.81,130.81],noteNames:['MI','DO'],thresholds:[0,.50]},
  {name:'Torculus',short:'Torculus',desc:'Tre suoni: sale e poi scende. Il gesto forma un arco.',instruction:'Con il <em>torculus</em> senti tre momenti: partenza, salita, ritorno verso il basso.',d:'M72 154 Q112 150 137 104 Q162 58 188 103 Q207 136 229 151',notes:[130.81,146.83,130.81],noteNames:['DO','RE','DO'],thresholds:[0,.34,.68]},
  {name:'Porrectus',short:'Porrectus',desc:'Tre suoni: scende e poi risale. Il gesto cambia direzione al centro.',instruction:'Nel <em>porrectus</em> lascia scendere la mano e poi falla risalire senza spezzare il gesto.',d:'M73 69 Q112 83 140 145 Q161 117 184 83 Q203 59 230 70',notes:[196.00,164.81,196.00],noteNames:['SOL','MI','SOL'],thresholds:[0,.40,.69]},
  {name:'Scandicus',short:'Scandicus',desc:'Una piccola successione ascendente. Ogni passo porta più in alto.',instruction:'Lo <em>scandicus</em> si costruisce per gradini: immagina una salita progressiva, non un salto unico.',d:'M67 164 Q96 158 111 139 Q129 119 144 105 Q163 85 181 71 Q201 55 232 48',notes:[130.81,146.83,164.81],noteNames:['DO','RE','MI'],thresholds:[0,.34,.67]},
  {name:'Climacus',short:'Climacus',desc:'Una piccola successione discendente. Il gesto procede per gradi verso il basso.',instruction:'Il <em>climacus</em> è una discesa articolata: segui i gradini uno dopo l’altro.',d:'M68 48 Q98 55 117 72 Q136 88 151 106 Q171 125 188 141 Q207 158 233 165',notes:[164.81,146.83,130.81],noteNames:['MI','RE','DO'],thresholds:[0,.34,.67]},
  {name:'Virga',short:'Virga',desc:'Un segno semplice e slanciato. La grafia punta con decisione verso l’alto.',instruction:'Ripassa la <em>virga</em> con un gesto netto e verticale: una traccia semplice, non ancora una “nota” moderna.',d:'M118 166 Q135 128 151 91 Q164 64 181 45',notes:[196.00],noteNames:['SOL'],thresholds:[0]},
  {name:'Punctum',short:'Punctum',desc:'Un segno elementare e raccolto. Il gesto si concentra in uno spazio minimo.',instruction:'Con il <em>punctum</em> il movimento quasi si raccoglie in un punto: osserva quanto poco spazio basta per lasciare memoria.',d:'M124 111 Q145 105 176 111',notes:[130.81],noteNames:['DO'],thresholds:[0]}
];

let choirCtx=null;
let choirMaster=null;
let choirDry=null;
let choirWet=null;
let choirReverb=null;
let activeChoir=null;

function ensureChoirAudio(){
  if(choirCtx)return choirCtx;
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return null;
  choirCtx=new AudioCtx();

  choirMaster=choirCtx.createGain();
  choirMaster.gain.value=.34;

  const compressor=choirCtx.createDynamicsCompressor();
  compressor.threshold.value=-22;
  compressor.knee.value=18;
  compressor.ratio.value=4;
  compressor.attack.value=.01;
  compressor.release.value=.3;

  choirDry=choirCtx.createGain();
  choirDry.gain.value=.72;
  choirWet=choirCtx.createGain();
  choirWet.gain.value=.22;

  choirReverb=choirCtx.createConvolver();
  const seconds=1.35;
  const rate=choirCtx.sampleRate;
  const impulse=choirCtx.createBuffer(2,Math.floor(rate*seconds),rate);
  for(let ch=0;ch<2;ch++){
    const data=impulse.getChannelData(ch);
    for(let i=0;i<data.length;i++){
      const decay=Math.pow(1-i/data.length,2.7);
      data[i]=(Math.random()*2-1)*decay;
    }
  }
  choirReverb.buffer=impulse;

  choirDry.connect(choirMaster);
  choirReverb.connect(choirWet);
  choirWet.connect(choirMaster);
  choirMaster.connect(compressor);
  compressor.connect(choirCtx.destination);
  return choirCtx;
}

function stopChoir(immediate=false){
  if(!activeChoir||!choirCtx)return;
  const now=choirCtx.currentTime;
  const release=immediate?.025:.14;
  try{
    activeChoir.out.gain.cancelScheduledValues(now);
    activeChoir.out.gain.setValueAtTime(Math.max(.0001,activeChoir.out.gain.value),now);
    activeChoir.out.gain.exponentialRampToValueAtTime(.0001,now+release);
    activeChoir.oscs.forEach(o=>o.stop(now+release+.04));
  }catch(e){}
  activeChoir=null;
}

function startChoir(freq){
  const ctx=ensureChoirAudio();
  if(!ctx)return;
  if(ctx.state==='suspended')ctx.resume();
  stopChoir(true);

  const input=ctx.createGain();
  input.gain.value=.22;
  const out=ctx.createGain();
  out.gain.setValueAtTime(.0001,ctx.currentTime);
  out.gain.exponentialRampToValueAtTime(.42,ctx.currentTime+.13);

  const dryBody=ctx.createBiquadFilter();
  dryBody.type='lowpass';
  dryBody.frequency.value=620;
  dryBody.Q.value=.35;
  input.connect(dryBody);
  dryBody.connect(out);

  const formants=[
    {f:700,q:8,g:.46},
    {f:1100,q:10,g:.24},
    {f:2450,q:12,g:.08}
  ];
  formants.forEach(spec=>{
    const filter=ctx.createBiquadFilter();
    filter.type='bandpass';
    filter.frequency.value=spec.f;
    filter.Q.value=spec.q;
    const g=ctx.createGain();
    g.gain.value=spec.g;
    input.connect(filter);
    filter.connect(g);
    g.connect(out);
  });

  const detunes=[-7,0,6];
  const oscs=detunes.map((det,i)=>{
    const osc=ctx.createOscillator();
    osc.type=i===1?'sawtooth':'triangle';
    osc.frequency.setValueAtTime(freq,ctx.currentTime);
    osc.detune.value=det;
    osc.connect(input);
    osc.start();
    return osc;
  });

  out.connect(choirDry);
  out.connect(choirReverb);
  activeChoir={oscs,out};
}

function glideChoir(freq){
  if(!activeChoir||!choirCtx){
    startChoir(freq);
    return;
  }
  const now=choirCtx.currentTime;
  activeChoir.oscs.forEach(osc=>{
    osc.frequency.cancelScheduledValues(now);
    osc.frequency.setValueAtTime(osc.frequency.value,now);
    osc.frequency.linearRampToValueAtTime(freq,now+.10);
  });
}

let neumeIndex=0;
let neumeRaf=null;
let neumeTimer=null;
let neumePlaying=false;
const neumeDuration=3300;

function stopNeumeAnimation(){
  stopChoir();
  if(neumeRaf)cancelAnimationFrame(neumeRaf);
  neumeRaf=null;
  if(neumeTimer)clearTimeout(neumeTimer);
  neumeTimer=null;
  neumeStage&&neumeStage.classList.remove('tracing');
}

function renderNeume(index){
  neumeIndex=(index+neumeData.length)%neumeData.length;
  const item=neumeData[neumeIndex];
  if(neumeTrace)neumeTrace.setAttribute('d',item.d);
  if(neumeGhost)neumeGhost.setAttribute('d',item.d);
  if(neumeName)neumeName.textContent=item.name;
  if(neumeDescription)neumeDescription.textContent=item.desc;
  if(neumeCounter)neumeCounter.textContent=String(neumeIndex+1).padStart(2,'0')+' / '+String(neumeData.length).padStart(2,'0');
  if(neumeInstruction)neumeInstruction.innerHTML='<b>Prova ora.</b> '+item.instruction;
  if(neumeAudioLabel)neumeAudioLabel.innerHTML='<span>voce sintetica</span><b>'+item.noteNames.join(' → ')+'</b>';
  if(neumeTitle)neumeTitle.textContent=item.name;
  if(neumeDescA11y)neumeDescA11y.textContent=item.desc;
  neumeButtons.forEach((b,i)=>b.classList.toggle('active',i===neumeIndex));

  if(neumeTrace){
    const length=neumeTrace.getTotalLength();
    neumeTrace.style.strokeDasharray=length;
    neumeTrace.style.strokeDashoffset=length;
  }
  if(neumeCursor&&neumeTrace){
    const p=neumeTrace.getPointAtLength(0);
    neumeCursor.setAttribute('cx',p.x);
    neumeCursor.setAttribute('cy',p.y);
  }
}

function traceCurrentNeume(after){
  if(!neumeTrace||!neumeCursor)return;
  stopNeumeAnimation();
  const length=neumeTrace.getTotalLength();
  const start=performance.now();
  const item=neumeData[neumeIndex];
  let soundingNote=0;
  if(item&&item.notes&&item.notes.length)startChoir(item.notes[0]);
  neumeStage&&neumeStage.classList.add('tracing');

  function frame(now){
    const t=Math.min(1,(now-start)/neumeDuration);
    const eased=0.5-0.5*Math.cos(Math.PI*t);
    if(item&&item.notes&&item.thresholds){
      let nextIndex=soundingNote;
      for(let i=0;i<item.thresholds.length;i++){
        if(eased>=item.thresholds[i])nextIndex=i;
      }
      if(nextIndex!==soundingNote){
        soundingNote=nextIndex;
        glideChoir(item.notes[soundingNote]);
      }
    }
    neumeTrace.style.strokeDashoffset=length*(1-eased);
    const p=neumeTrace.getPointAtLength(length*eased);
    neumeCursor.setAttribute('cx',p.x);
    neumeCursor.setAttribute('cy',p.y);
    if(t<1){
      neumeRaf=requestAnimationFrame(frame);
    }else{
      neumeRaf=null;
      stopChoir();
      neumeStage&&neumeStage.classList.remove('tracing');
      if(after)neumeTimer=setTimeout(after,650);
    }
  }
  neumeRaf=requestAnimationFrame(frame);
}

function playNeumeSequence(){
  neumePlaying=true;
  if(neumePlay)neumePlay.textContent='■ Ferma';
  traceCurrentNeume(()=>{
    if(!neumePlaying)return;
    renderNeume((neumeIndex+1)%neumeData.length);
    playNeumeSequence();
  });
}

if(neumePlay){
  neumePlay.addEventListener('click',()=>{
    if(neumePlaying){
      neumePlaying=false;
      stopNeumeAnimation();
      neumePlay.textContent='▶ Segui i neumi';
    }else{
      playNeumeSequence();
    }
  });
}
if(neumeReplay){
  neumeReplay.addEventListener('click',()=>{
    neumePlaying=false;
    if(neumePlay)neumePlay.textContent='▶ Segui i neumi';
    traceCurrentNeume();
  });
}
neumeButtons.forEach((btn,i)=>{
  btn.addEventListener('click',()=>{
    neumePlaying=false;
    stopNeumeAnimation();
    if(neumePlay)neumePlay.textContent='▶ Segui i neumi';
    renderNeume(i);
    traceCurrentNeume();
  });
});
if(neumeTrace)renderNeume(0);

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

const massFrame=document.getElementById('massFrame');
const massButtons=[...document.querySelectorAll('[data-mass-start]')];
const massNow=document.getElementById('massNow');
const massNames={1671:'Kyrie',1771:'Gloria',1989:'Credo',2270:'Sanctus',2375:'Agnus Dei'};
if(massFrame&&massButtons.length){
  massButtons[0].classList.add('active');
  massButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const start=btn.dataset.massStart;
      massFrame.src='https://www.youtube-nocookie.com/embed/6iQD0Vuy-W8?start='+start+'&autoplay=1';
      massButtons.forEach(b=>b.classList.toggle('active',b===btn));
      if(massNow)massNow.textContent='Selezionato: '+massNames[start]+'.';
    });
  });
}
