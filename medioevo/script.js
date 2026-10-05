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
const neumeSpeed=document.getElementById('neumeSpeed');
const neumeSpeedValue=document.getElementById('neumeSpeedValue');
const neumeButtons=[...document.querySelectorAll('[data-neume-index]')];

const neumeData=[
  {name:'Pes / podatus',short:'Pes',desc:'Due suoni in salita. Il gesto tende verso l’alto.',instruction:'Disegna il movimento del <em>pes</em> con l’indice: parti più in basso e lascia che il gesto salga.',d:'M92 158 Q132 154 148 124 Q166 88 210 67',notes:[130.81,164.81],noteNames:['DO','MI'],thresholds:[0,.50]},
  {name:'Clivis',short:'Clivis',desc:'Due suoni in discesa. La voce piega verso il basso.',instruction:'Segui la <em>clivis</em> come una piccola discesa: il secondo suono si colloca più in basso del primo.',d:'M92 67 Q136 78 153 109 Q171 143 210 158',notes:[164.81,130.81],noteNames:['MI','DO'],thresholds:[0,.50]},
  {name:'Torculus',short:'Torculus',desc:'Tre suoni: sale e poi scende. Il gesto forma un arco.',instruction:'Con il <em>torculus</em> senti tre momenti: partenza, salita, ritorno verso il basso.',d:'M72 154 Q112 150 137 104 Q162 58 188 103 Q207 136 229 151',notes:[130.81,146.83,130.81],noteNames:['DO','RE','DO'],thresholds:[0,.34,.68]},
  {name:'Porrectus',short:'Porrectus',desc:'Tre suoni: scende e poi risale. Il gesto cambia direzione al centro.',instruction:'Nel <em>porrectus</em> lascia scendere la mano e poi falla risalire senza spezzare il gesto.',d:'M73 69 Q112 83 140 145 Q161 117 184 83 Q203 59 230 70',notes:[196.00,164.81,196.00],noteNames:['SOL','MI','SOL'],thresholds:[0,.40,.69]},
  {name:'Scandicus',short:'Scandicus',desc:'Una piccola successione ascendente. Ogni passo porta più in alto.',instruction:'Lo <em>scandicus</em> si costruisce per gradini: immagina una salita progressiva, non un salto unico.',d:'M67 164 Q96 158 111 139 Q129 119 144 105 Q163 85 181 71 Q201 55 232 48',notes:[130.81,146.83,164.81],noteNames:['DO','RE','MI'],thresholds:[0,.34,.67]},
  {name:'Climacus',short:'Climacus',desc:'Una piccola successione discendente. Il gesto procede per gradi verso il basso.',instruction:'Il <em>climacus</em> è una discesa articolata: segui i gradini uno dopo l’altro.',d:'M68 48 Q98 55 117 72 Q136 88 151 106 Q171 125 188 141 Q207 158 233 165',notes:[164.81,146.83,130.81],noteNames:['MI','RE','DO'],thresholds:[0,.34,.67]},
  {name:'Virga',short:'Virga',desc:'Una nota singola relativamente più elevata rispetto a un punctum o a una nota vicina. La relazione è più importante dell’altezza assoluta.',instruction:'Ripassa la <em>virga</em> con un gesto netto verso l’alto: pensa a un suono singolo collocato relativamente più in alto rispetto al contesto, non a una nota assoluta già determinata.',d:'M118 166 Q135 128 151 91 Q164 64 181 45',notes:[196.00],noteNames:['SOL'],thresholds:[0]},
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
let neumeDuration=3300;

function updateNeumeSpeed(value){
  neumeDuration=Number(value)||3300;
  if(neumeSpeedValue)neumeSpeedValue.textContent=(neumeDuration/1000).toFixed(1).replace('.',',')+' s';
}
if(neumeSpeed){
  updateNeumeSpeed(neumeSpeed.value);
  neumeSpeed.addEventListener('input',()=>updateNeumeSpeed(neumeSpeed.value));
}

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
const principalPath=document.getElementById('principalPath');
const organalPath=document.getElementById('organalPath');
const principalCursor=document.getElementById('principalCursor');
const organalCursor=document.getElementById('organalCursor');
let voiceRaf=null;

function animateVoiceCursor(path,cursor,start,duration){
  if(!path||!cursor)return;
  const length=path.getTotalLength();
  function step(now){
    const t=Math.max(0,Math.min(1,(now-start)/duration));
    const eased=.5-.5*Math.cos(Math.PI*t);
    const p=path.getPointAtLength(length*eased);
    cursor.setAttribute('cx',p.x);
    cursor.setAttribute('cy',p.y);
    if(t<1)voiceRaf=requestAnimationFrame(step);
  }
  voiceRaf=requestAnimationFrame(step);
}

if(voiceDemo&&voicePlay){
  voicePlay.addEventListener('click',()=>{
    if(voiceRaf)cancelAnimationFrame(voiceRaf);
    voiceDemo.classList.remove('play');void voiceDemo.offsetWidth;voiceDemo.classList.add('play');
    voicePlay.textContent='↻ Ripeti';
    if(voiceText)voiceText.innerHTML='La <strong>vox principalis</strong> comincia da sola. Poco dopo entra la <strong>vox organalis</strong>: da questo momento le due linee devono coordinare direzione, consonanze e arrivi.';
    const now=performance.now();
    animateVoiceCursor(principalPath,principalCursor,now,5200);
    setTimeout(()=>animateVoiceCursor(organalPath,organalCursor,performance.now(),4400),800);
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

// Incipit sonori delle parti della Messa
const massSampleButtons=[...document.querySelectorAll('.mass-sample')];
const massSampleStatus=document.getElementById('massSampleStatus');
const massSampleAudio=new Audio();
massSampleAudio.preload='none';
let activeMassSample=null;
let massSampleStopTimer=null;
let massSampleFadeTimer=null;
let massSampleEndTimer=null;

function clearMassSampleTimers(){
  if(massSampleStopTimer)clearTimeout(massSampleStopTimer);
  if(massSampleFadeTimer)clearInterval(massSampleFadeTimer);
  if(massSampleEndTimer)clearTimeout(massSampleEndTimer);
  massSampleStopTimer=null;
  massSampleFadeTimer=null;
  massSampleEndTimer=null;
}

function resetMassSampleUI(){
  if(activeMassSample){
    activeMassSample.classList.remove('playing','loading');
    activeMassSample.closest('.mass-step')?.classList.remove('playing');
    activeMassSample.textContent=activeMassSample.dataset.originalLabel||'▶ 18 s';
  }
  activeMassSample=null;
}

function stopMassSample(message=''){
  clearMassSampleTimers();
  try{
    massSampleAudio.pause();
    massSampleAudio.currentTime=0;
    massSampleAudio.volume=1;
  }catch(e){}
  resetMassSampleUI();
  if(message&&massSampleStatus){
    massSampleStatus.classList.remove('is-playing');
    massSampleStatus.innerHTML=message;
  }
}

function beginMassSampleFade(total=18,fade=4){
  const fadeStart=Math.max(1,total-fade);
  massSampleStopTimer=setTimeout(()=>{
    const steps=24;
    let n=0;
    massSampleFadeTimer=setInterval(()=>{
      n++;
      massSampleAudio.volume=Math.max(0,1-(n/steps));
      if(n>=steps){
        clearInterval(massSampleFadeTimer);
        massSampleFadeTimer=null;
      }
    },(fade*1000)/steps);
  },fadeStart*1000);

  massSampleEndTimer=setTimeout(()=>{
    if(activeMassSample){
      const title=activeMassSample.dataset.title||'incipit';
      stopMassSample('<strong>Fine dell’incipit.</strong> '+title+'. Scegli un’altra casella per continuare il percorso.');
    }
  },total*1000+120);
}

massSampleButtons.forEach(btn=>{
  btn.dataset.originalLabel=btn.textContent;
  btn.addEventListener('click',async e=>{
    e.preventDefault();
    e.stopPropagation();

    if(activeMassSample===btn&&!massSampleAudio.paused){
      stopMassSample('<strong>Ascolto fermato.</strong> Scegli una casella per ripartire.');
      return;
    }

    stopMassSample();
    activeMassSample=btn;
    btn.classList.add('loading');
    btn.closest('.mass-step')?.classList.add('playing');
    btn.textContent='… carico';

    try{
      massSampleAudio.src=btn.dataset.audio;
      massSampleAudio.volume=1;
      massSampleAudio.currentTime=0;
      await massSampleAudio.play();

      btn.classList.remove('loading');
      btn.classList.add('playing');
      btn.textContent='■ Ferma';
      if(massSampleStatus){
        massSampleStatus.classList.add('is-playing');
        massSampleStatus.innerHTML='<strong>'+btn.dataset.title+'</strong> · '+(btn.dataset.source||'fonte verificata')+' · incipit di circa 18 secondi.';
      }
      beginMassSampleFade(18,4);
    }catch(err){
      clearMassSampleTimers();
      resetMassSampleUI();
      try{massSampleAudio.src='';}catch(e){}
      if(massSampleStatus){
        massSampleStatus.classList.remove('is-playing');
        massSampleStatus.innerHTML='<strong>Questo campione non è partito.</strong> La fonte esterna potrebbe bloccare temporaneamente la riproduzione sul browser.';
      }
    }
  });
});

massSampleAudio.addEventListener('ended',()=>{
  if(activeMassSample){
    const title=activeMassSample.dataset.title||'incipit';
    stopMassSample('<strong>Fine dell’incipit.</strong> '+title+'.');
  }
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


// Mano guidoniana interattiva
const guidonianData=[
  {n:1,name:'Γ ut',modern:'Sol grave',x:12,y:50,f:98.00},
  {n:2,name:'A re',modern:'La grave',x:17,y:62,f:110.00},
  {n:3,name:'B mi',modern:'Si grave',x:22,y:72,f:123.47},
  {n:4,name:'C fa ut',modern:'Do',x:34,y:51,f:130.81},
  {n:5,name:'D sol re',modern:'Re',x:51,y:50,f:146.83},
  {n:6,name:'E la mi',modern:'Mi',x:67,y:50,f:164.81},
  {n:7,name:'F fa ut',modern:'Fa',x:81,y:51,f:174.61},
  {n:8,name:'G sol re ut',modern:'Sol',x:82,y:44,f:196.00},
  {n:9,name:'a la mi re',modern:'La',x:81,y:37,f:220.00},
  {n:10,name:'b fa / ♮ mi',modern:'Si♭ / Si♮',x:80,y:29,f:246.94},
  {n:11,name:'c sol fa ut',modern:'Do',x:68,y:17,f:261.63},
  {n:12,name:'d la sol re',modern:'Re',x:52,y:11,f:293.66},
  {n:13,name:'e la mi',modern:'Mi',x:34,y:19,f:329.63},
  {n:14,name:'f fa ut',modern:'Fa',x:34,y:29,f:349.23},
  {n:15,name:'g sol re ut',modern:'Sol',x:34,y:39,f:392.00},
  {n:16,name:'aa la mi re',modern:'La',x:51,y:39,f:440.00},
  {n:17,name:'bb fa / ♮♮ mi',modern:'Si♭ / Si♮',x:66,y:39,f:493.88},
  {n:18,name:'cc sol fa',modern:'Do',x:66,y:29,f:523.25},
  {n:19,name:'dd la sol',modern:'Re',x:52,y:27,f:587.33},
  {n:20,name:'ee la',modern:'Mi acuto',x:52,y:5.5,f:659.25}
];

const guidonianStage=document.getElementById('guidonianStage');
const guidonianHotspots=document.getElementById('guidonianHotspots');
const guidonianPointer=document.getElementById('guidonianPointer');
const guidonianSound=document.getElementById('guidonianSound');
const guidonianDemo=document.getElementById('guidonianDemo');
const guidonianCounter=document.getElementById('guidonianCounter');
const guidonianNote=document.getElementById('guidonianNote');
const guidonianModern=document.getElementById('guidonianModern');
const guidonianMeaning=document.getElementById('guidonianMeaning');
const guidonianAudioState=document.getElementById('guidonianAudioState');

let guidonianAudioOn=false;
let guidonianDemoTimer=null;
let guidonianDemoIndex=0;
let guidonianMuteTimer=null;

// Dedicated synth for the hand. It is created and started synchronously by a real
// tap/click, which is much more reliable on Android/iOS than starting a new
// oscillator after an awaited AudioContext.resume().
let guidonianCtx=null;
let guidonianGain=null;
let guidonianOscs=[];

function createGuidonianSynth(freq=98){
  if(guidonianCtx&&guidonianOscs.length)return true;
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx)return false;

  try{
    guidonianCtx=new AudioCtx();

    const master=guidonianCtx.createGain();
    master.gain.value=.72;

    const comp=guidonianCtx.createDynamicsCompressor();
    comp.threshold.value=-24;
    comp.knee.value=20;
    comp.ratio.value=3;
    comp.attack.value=.008;
    comp.release.value=.22;

    guidonianGain=guidonianCtx.createGain();
    guidonianGain.gain.setValueAtTime(.0001,guidonianCtx.currentTime);

    const body=guidonianCtx.createBiquadFilter();
    body.type='lowpass';
    body.frequency.value=900;
    body.Q.value=.45;

    const warm=guidonianCtx.createBiquadFilter();
    warm.type='peaking';
    warm.frequency.value=520;
    warm.Q.value=1.2;
    warm.gain.value=5;

    guidonianGain.connect(body);
    body.connect(warm);
    warm.connect(master);
    master.connect(comp);
    comp.connect(guidonianCtx.destination);

    const detunes=[-6,0,5];
    guidonianOscs=detunes.map((det,i)=>{
      const osc=guidonianCtx.createOscillator();
      osc.type=i===1?'sawtooth':'triangle';
      osc.frequency.setValueAtTime(freq,guidonianCtx.currentTime);
      osc.detune.value=det;
      const og=guidonianCtx.createGain();
      og.gain.value=i===1?.16:.24;
      osc.connect(og);
      og.connect(guidonianGain);
      osc.start();
      return osc;
    });

    // resume is intentionally invoked here, in the same synchronous user gesture.
    if(guidonianCtx.state==='suspended'){
      const promise=guidonianCtx.resume();
      if(promise&&typeof promise.catch==='function')promise.catch(()=>{});
    }
    return true;
  }catch(e){
    guidonianCtx=null;
    guidonianGain=null;
    guidonianOscs=[];
    return false;
  }
}

function guidonianFadeOut(delay=700){
  if(guidonianMuteTimer)clearTimeout(guidonianMuteTimer);
  guidonianMuteTimer=setTimeout(()=>{
    if(!guidonianCtx||!guidonianGain)return;
    const now=guidonianCtx.currentTime;
    try{
      guidonianGain.gain.cancelScheduledValues(now);
      guidonianGain.gain.setValueAtTime(Math.max(.0001,guidonianGain.gain.value),now);
      guidonianGain.gain.exponentialRampToValueAtTime(.0001,now+.16);
    }catch(e){}
  },delay);
}

function guidonianGlide(freq,hold=720){
  if(!guidonianAudioOn||!guidonianCtx||!guidonianGain||!guidonianOscs.length)return;
  const now=guidonianCtx.currentTime;

  guidonianOscs.forEach(osc=>{
    try{
      osc.frequency.cancelScheduledValues(now);
      osc.frequency.setValueAtTime(Math.max(20,osc.frequency.value),now);
      osc.frequency.exponentialRampToValueAtTime(Math.max(20,freq),now+.16);
    }catch(e){}
  });

  try{
    guidonianGain.gain.cancelScheduledValues(now);
    guidonianGain.gain.setValueAtTime(Math.max(.0001,guidonianGain.gain.value),now);
    guidonianGain.gain.exponentialRampToValueAtTime(.30,now+.045);
  }catch(e){}
  guidonianFadeOut(hold);
}

function enableGuidonianAudio(item=guidonianData[0]){
  const ok=createGuidonianSynth(item.f);
  guidonianAudioOn=ok;
  if(ok){
    if(guidonianCtx&&guidonianCtx.state==='suspended'){
      const promise=guidonianCtx.resume();
      if(promise&&typeof promise.catch==='function')promise.catch(()=>{});
    }
    if(guidonianSound)guidonianSound.textContent='♪ Suono attivo';
    if(guidonianAudioState){
      guidonianAudioState.textContent='Audio attivo: tocca i punti. La voce glissa da un’altezza all’altra.';
      guidonianAudioState.classList.add('on');
    }
    // Immediate audible confirmation while still inside the user's tap.
    guidonianGlide(item.f,850);
  }else{
    if(guidonianSound)guidonianSound.textContent='♪ Audio non disponibile';
    if(guidonianAudioState)guidonianAudioState.textContent='Questo browser non ha reso disponibile il motore audio.';
  }
  return ok;
}

function guidonianMeaningFor(item){
  const meanings={
    1:'Il percorso comincia sulla punta del pollice. «Ut» è la sillaba di solmisazione associata a questa altezza nel gamut.',
    4:'C può essere «fa» in un esacordo e «ut» in un altro: la mano visualizza anche le possibili funzioni della stessa altezza.',
    8:'Tre sillabe sulla stessa altezza: qui più esacordi si sovrappongono.',
    10:'Qui compare l’alternativa fra b molle e b durum. Il suono sintetico usa una scelta didattica moderna.',
    20:'Il gamut raggiunge ee la, il limite acuto del percorso tradizionale.'
  };
  return meanings[item.n]||'La lettera indica l’altezza del gamut, mentre le sillabe mostrano le possibili funzioni di solmisazione nei diversi esacordi.';
}

function showGuidonian(item,play=true){
  if(!item)return;
  if(guidonianPointer){
    guidonianPointer.style.left=item.x+'%';
    guidonianPointer.style.top=item.y+'%';
  }
  if(guidonianCounter)guidonianCounter.textContent=String(item.n).padStart(2,'0')+' / 20';
  if(guidonianNote)guidonianNote.textContent=item.name;
  if(guidonianModern)guidonianModern.textContent=item.modern+' · riferimento moderno approssimativo';
  if(guidonianMeaning)guidonianMeaning.textContent=guidonianMeaningFor(item);
  document.querySelectorAll('.guidonian-hotspot').forEach(b=>b.classList.toggle('active',Number(b.dataset.n)===item.n));
  if(play&&guidonianAudioOn)guidonianGlide(item.f);
}

function stopGuidonianDemo(){
  if(guidonianDemoTimer)clearTimeout(guidonianDemoTimer);
  guidonianDemoTimer=null;
  guidonianDemoIndex=0;
  guidonianFadeOut(0);
  if(guidonianDemo)guidonianDemo.textContent='▶ Percorri il gamut';
}

function startGuidonianDemo(){
  if(guidonianDemoTimer){stopGuidonianDemo();return;}
  const first=guidonianData[0];
  if(!guidonianAudioOn&&!enableGuidonianAudio(first))return;
  guidonianDemoIndex=0;
  if(guidonianDemo)guidonianDemo.textContent='■ Ferma';

  function step(){
    const item=guidonianData[guidonianDemoIndex++];
    if(!item){stopGuidonianDemo();return;}
    showGuidonian(item,true);
    if(guidonianDemoIndex<guidonianData.length){
      guidonianDemoTimer=setTimeout(step,600);
    }else{
      guidonianDemoTimer=setTimeout(stopGuidonianDemo,760);
    }
  }
  step();
}

if(guidonianHotspots){
  guidonianHotspots.innerHTML='';
  guidonianData.forEach(item=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='guidonian-hotspot';
    b.dataset.n=item.n;
    b.style.left=item.x+'%';
    b.style.top=item.y+'%';
    b.textContent=item.n;
    b.setAttribute('aria-label',item.n+'. '+item.name+', '+item.modern);
    b.addEventListener('pointerenter',()=>showGuidonian(item,true));
    b.addEventListener('focus',()=>showGuidonian(item,true));
    b.addEventListener('pointerdown',e=>{
      e.preventDefault();
      if(!guidonianAudioOn)enableGuidonianAudio(item);
      else showGuidonian(item,true);
    });
    b.addEventListener('click',e=>{
      e.preventDefault();
      showGuidonian(item,true);
    });
    guidonianHotspots.appendChild(b);
  });
  showGuidonian(guidonianData[0],false);
}

if(guidonianSound){
  guidonianSound.addEventListener('pointerdown',e=>{
    e.preventDefault();
    const active=document.querySelector('.guidonian-hotspot.active');
    const item=active?guidonianData.find(x=>x.n===Number(active.dataset.n)):guidonianData[0];
    enableGuidonianAudio(item||guidonianData[0]);
  });
}
if(guidonianDemo){
  guidonianDemo.addEventListener('pointerdown',e=>{
    e.preventDefault();
    startGuidonianDemo();
  });
}

if(guidonianStage){
  guidonianStage.addEventListener('pointerleave',()=>{
    if(!guidonianDemoTimer&&guidonianAudioOn)guidonianFadeOut(0);
  });
}


// Galleria di iconografia musicale medievale
const medievalGalleryTrack=document.getElementById('medievalGalleryTrack');
const medievalGalleryCards=[...document.querySelectorAll('.medieval-gallery-card')];
const medievalGalleryPrev=document.getElementById('medievalGalleryPrev');
const medievalGalleryNext=document.getElementById('medievalGalleryNext');
const medievalGalleryCount=document.getElementById('medievalGalleryCount');
const medievalGalleryDots=[...document.querySelectorAll('[data-gallery-go]')];
const medievalGalleryDialog=document.getElementById('medievalGalleryDialog');
const medievalGalleryClose=document.getElementById('medievalGalleryClose');
const medievalGalleryDialogImage=document.getElementById('medievalGalleryDialogImage');
const medievalGalleryDialogTitle=document.getElementById('medievalGalleryDialogTitle');
const medievalGalleryDialogCaption=document.getElementById('medievalGalleryDialogCaption');
const medievalGalleryDialogIndex=document.getElementById('medievalGalleryDialogIndex');
const medievalDialogPrev=document.getElementById('medievalDialogPrev');
const medievalDialogNext=document.getElementById('medievalDialogNext');
let medievalGalleryIndex=0;
let medievalGalleryScrollTimer=null;

function medievalGalleryLabel(i){
  return String(i+1).padStart(2,'0')+' / '+String(medievalGalleryCards.length).padStart(2,'0');
}
function updateMedievalGalleryUI(i){
  medievalGalleryIndex=Math.max(0,Math.min(medievalGalleryCards.length-1,i));
  if(medievalGalleryCount)medievalGalleryCount.textContent=medievalGalleryLabel(medievalGalleryIndex);
  medievalGalleryDots.forEach((d,k)=>d.classList.toggle('active',k===medievalGalleryIndex));
}
function goMedievalGallery(i){
  if(typeof stopGallerySound==='function')stopGallerySound();
  if(!medievalGalleryCards.length)return;
  i=(i+medievalGalleryCards.length)%medievalGalleryCards.length;
  updateMedievalGalleryUI(i);
  medievalGalleryCards[i].scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});
}
function openMedievalGalleryDialog(i){
  const card=medievalGalleryCards[i];
  if(!card||!medievalGalleryDialog)return;
  medievalGalleryIndex=i;
  if(medievalGalleryDialogImage){
    medievalGalleryDialogImage.src=card.dataset.large||card.querySelector('img')?.src||'';
    medievalGalleryDialogImage.alt=card.querySelector('img')?.alt||'';
  }
  if(medievalGalleryDialogTitle)medievalGalleryDialogTitle.textContent=card.dataset.title||'';
  if(medievalGalleryDialogCaption)medievalGalleryDialogCaption.textContent=card.dataset.caption||'';
  if(medievalGalleryDialogIndex)medievalGalleryDialogIndex.textContent=medievalGalleryLabel(i);
  if(typeof medievalGalleryDialog.showModal==='function')medievalGalleryDialog.showModal();
}
function moveMedievalDialog(delta){
  let i=(medievalGalleryIndex+delta+medievalGalleryCards.length)%medievalGalleryCards.length;
  openMedievalGalleryDialog(i);
}

if(medievalGalleryPrev)medievalGalleryPrev.addEventListener('click',()=>goMedievalGallery(medievalGalleryIndex-1));
if(medievalGalleryNext)medievalGalleryNext.addEventListener('click',()=>goMedievalGallery(medievalGalleryIndex+1));
medievalGalleryDots.forEach((d,i)=>d.addEventListener('click',()=>goMedievalGallery(i)));
medievalGalleryCards.forEach((card,i)=>{
  const opener=card.querySelector('.medieval-gallery-image');
  if(opener)opener.addEventListener('click',()=>openMedievalGalleryDialog(i));
});
if(medievalGalleryTrack){
  medievalGalleryTrack.addEventListener('scroll',()=>{
    if(medievalGalleryScrollTimer)clearTimeout(medievalGalleryScrollTimer);
    medievalGalleryScrollTimer=setTimeout(()=>{
      const w=medievalGalleryTrack.clientWidth||1;
      updateMedievalGalleryUI(Math.round(medievalGalleryTrack.scrollLeft/w));
    },80);
  },{passive:true});
}
if(medievalGalleryClose)medievalGalleryClose.addEventListener('click',()=>medievalGalleryDialog?.close());
if(medievalDialogPrev)medievalDialogPrev.addEventListener('click',()=>moveMedievalDialog(-1));
if(medievalDialogNext)medievalDialogNext.addEventListener('click',()=>moveMedievalDialog(1));
if(medievalGalleryDialog){
  medievalGalleryDialog.addEventListener('click',e=>{
    if(e.target===medievalGalleryDialog)medievalGalleryDialog.close();
  });
  medievalGalleryDialog.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'){e.preventDefault();moveMedievalDialog(-1);}
    if(e.key==='ArrowRight'){e.preventDefault();moveMedievalDialog(1);}
  });
}


// Ascolti strumentali nella galleria iconografica
const gallerySoundButtons=[...document.querySelectorAll('.gallery-sound')];
const gallerySoundStatus=document.getElementById('gallerySoundStatus');
const galleryAudio=new Audio();
galleryAudio.preload='none';
let activeGallerySoundButton=null;

function resetGallerySoundButton(){
  if(activeGallerySoundButton){
    activeGallerySoundButton.classList.remove('playing','loading');
    activeGallerySoundButton.textContent=activeGallerySoundButton.dataset.originalLabel||activeGallerySoundButton.textContent.replace(/^■\s*/, '▶ ');
  }
  activeGallerySoundButton=null;
}

function stopGallerySound(){
  try{
    galleryAudio.pause();
    galleryAudio.currentTime=0;
  }catch(e){}
  resetGallerySoundButton();
}

gallerySoundButtons.forEach(btn=>{
  btn.dataset.originalLabel=btn.textContent;
  btn.addEventListener('click',async()=>{
    const src=btn.dataset.audio;
    const label=btn.dataset.sound||'strumento';
    const note=btn.dataset.note||'';
    if(!src)return;

    if(activeGallerySoundButton===btn&&!galleryAudio.paused){
      stopGallerySound();
      if(gallerySoundStatus)gallerySoundStatus.textContent='Ascolto fermato.';
      return;
    }

    stopGallerySound();
    activeGallerySoundButton=btn;
    btn.classList.add('loading');
    btn.textContent='… carico '+label;

    try{
      galleryAudio.src=src;
      galleryAudio.currentTime=0;
      await galleryAudio.play();
      btn.classList.remove('loading');
      btn.classList.add('playing');
      btn.textContent='■ Ferma '+label;
      if(gallerySoundStatus)gallerySoundStatus.innerHTML='<strong>'+label+'</strong> · '+note;
    }catch(e){
      btn.classList.remove('loading','playing');
      btn.textContent=btn.dataset.originalLabel;
      activeGallerySoundButton=null;
      if(gallerySoundStatus)gallerySoundStatus.textContent='Il browser non è riuscito ad avviare questo ascolto. Puoi aprire la scheda della fonte accanto al pulsante.';
    }
  });
});

galleryAudio.addEventListener('ended',()=>{
  const label=activeGallerySoundButton?.dataset.sound||'';
  resetGallerySoundButton();
  if(gallerySoundStatus)gallerySoundStatus.textContent=label?'Fine dell’ascolto: '+label+'.':'Fine dell’ascolto.';
});
galleryAudio.addEventListener('error',()=>{
  resetGallerySoundButton();
  if(gallerySoundStatus)gallerySoundStatus.textContent='La fonte audio esterna non è disponibile in questo momento.';
});


// Prologo 00: tre porte sonore e paesaggio didattico del Tempio
const rootsAudioButtons=[...document.querySelectorAll('.roots-audio')];
const rootsAudioStatus=document.getElementById('rootsAudioStatus');
const rootsMediaAudio=new Audio();
rootsMediaAudio.preload='none';
let activeRootsButton=null;
let rootsStopTimer=null;
let rootsFadeTimer=null;
let rootsTempleCtx=null;
let rootsTempleNodes=null;
let rootsTempleScheduler=null;
let rootsTempleSources=[];

const templeMixer=document.getElementById('templeMixer');
const templeMixerPower=document.getElementById('templeMixerPower');
const templeMixerState=document.getElementById('templeMixerState');
const templeMixerSliders=[...document.querySelectorAll('[data-temple-channel]')];
const templeMixerPresets=[...document.querySelectorAll('[data-temple-preset]')];

function templeValue(name){
  const slider=templeMixerSliders.find(el=>el.dataset.templeChannel===name);
  return slider?Math.max(0,Math.min(100,Number(slider.value)||0)):0;
}
function templeGainCurve(name){
  const v=templeValue(name)/100;
  if(name==='master')return .72*Math.pow(v,1.35);
  if(name==='space')return .82*Math.pow(v,1.2);
  return Math.pow(v,1.55);
}
function refreshTempleMixerUI(){
  templeMixerSliders.forEach(slider=>{
    const out=slider.closest('label')?.querySelector('output');
    if(out)out.value=slider.value;
  });
  if(!rootsTempleCtx&&templeMixerState)templeMixerState.textContent='Generatore fermo.';
}
function updateTempleMixerGains(){
  if(!rootsTempleNodes)return;
  const now=rootsTempleCtx?.currentTime||0;
  const smooth=(node,value)=>{
    if(!node)return;
    try{
      node.gain.cancelScheduledValues(now);
      node.gain.setTargetAtTime(value,now,.045);
    }catch(e){node.gain.value=value;}
  };
  smooth(rootsTempleNodes.trumpets,.72*templeGainCurve('trumpets'));
  smooth(rootsTempleNodes.strings,.62*templeGainCurve('strings'));
  smooth(rootsTempleNodes.cymbals,.52*templeGainCurve('cymbals'));
  smooth(rootsTempleNodes.assembly,.19*templeGainCurve('assembly'));
  smooth(rootsTempleNodes.wet,.48*templeGainCurve('space'));
  smooth(rootsTempleNodes.master,templeGainCurve('master'));
}

function clearRootsTimers(){
  if(rootsStopTimer)clearTimeout(rootsStopTimer);
  if(rootsFadeTimer)clearInterval(rootsFadeTimer);
  rootsStopTimer=null;
  rootsFadeTimer=null;
}
function resetRootsButton(){
  if(activeRootsButton){
    activeRootsButton.classList.remove('playing','loading');
    activeRootsButton.textContent=activeRootsButton.dataset.originalLabel||activeRootsButton.textContent;
  }
  activeRootsButton=null;
}
function stopTempleSound(){
  if(rootsTempleScheduler){
    clearInterval(rootsTempleScheduler);
    rootsTempleScheduler=null;
  }

  const ctx=rootsTempleCtx;
  const nodes=rootsTempleNodes;
  const sources=[...rootsTempleSources];

  rootsTempleCtx=null;
  rootsTempleNodes=null;
  rootsTempleSources=[];

  if(nodes?.master&&ctx){
    const now=ctx.currentTime;
    try{
      nodes.master.gain.cancelScheduledValues(now);
      nodes.master.gain.setValueAtTime(Math.max(.0001,nodes.master.gain.value||.0001),now);
      nodes.master.gain.exponentialRampToValueAtTime(.0001,now+.32);
    }catch(e){}
  }

  setTimeout(()=>{
    sources.forEach(item=>{
      const audio=item?.audio||item;
      try{audio.pause?.();}catch(e){}
      try{audio.currentTime=0;}catch(e){}
    });
    if(ctx){
      try{ctx.close();}catch(e){}
    }
  },350);

  if(templeMixerPower){
    templeMixerPower.classList.remove('playing');
    templeMixerPower.textContent='▶ Avvia';
  }
  if(templeMixerState)templeMixerState.textContent='Generatore fermo.';
}
function stopRootsAudio(message=''){
  clearRootsTimers();
  try{rootsMediaAudio.pause();rootsMediaAudio.currentTime=0;rootsMediaAudio.volume=1;}catch(e){}
  stopTempleSound();
  resetRootsButton();
  if(message&&rootsAudioStatus)rootsAudioStatus.innerHTML=message;
}
function fadeRootsAudio(seconds=4){
  let step=0;
  const steps=20;
  if(rootsFadeTimer)clearInterval(rootsFadeTimer);
  rootsFadeTimer=setInterval(()=>{
    step++;
    rootsMediaAudio.volume=Math.max(0,1-step/steps);
    if(step>=steps){clearInterval(rootsFadeTimer);rootsFadeTimer=null;}
  },seconds*1000/steps);
}

async function playTempleSound(btn){
  stopRootsAudio();

  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx){
    if(rootsAudioStatus)rootsAudioStatus.textContent='Questo browser non rende disponibile il motore audio.';
    if(templeMixerState)templeMixerState.textContent='Motore audio non disponibile in questo browser.';
    return;
  }

  const ctx=new AudioCtx();
  rootsTempleCtx=ctx;
  try{ctx.resume();}catch(e){}

  activeRootsButton=btn;
  btn.classList.add('loading');
  btn.textContent='… carico i campioni';
  if(templeMixerPower){
    templeMixerPower.classList.add('playing');
    templeMixerPower.textContent='■ Ferma';
  }

  const master=ctx.createGain();
  const sceneBus=ctx.createGain();
  const dry=ctx.createGain();
  const wet=ctx.createGain();
  const convolver=ctx.createConvolver();

  const trumpetGain=ctx.createGain();
  const stringsGain=ctx.createGain();
  const cymbalGain=ctx.createGain();
  const assemblyGain=ctx.createGain();

  trumpetGain.connect(sceneBus);
  stringsGain.connect(sceneBus);
  cymbalGain.connect(sceneBus);
  assemblyGain.connect(sceneBus);
  sceneBus.connect(dry);
  sceneBus.connect(convolver);
  convolver.connect(wet);
  dry.connect(master);
  wet.connect(master);
  master.connect(ctx.destination);

  dry.gain.value=.9;

  const irSeconds=3.2;
  const ir=ctx.createBuffer(2,Math.floor(ctx.sampleRate*irSeconds),ctx.sampleRate);
  for(let ch=0;ch<2;ch++){
    const data=ir.getChannelData(ch);
    for(let i=0;i<data.length;i++){
      const x=i/data.length;
      data[i]=(Math.random()*2-1)*Math.pow(1-x,2.7);
    }
  }
  convolver.buffer=ir;

  rootsTempleNodes={
    master,
    wet,
    trumpets:trumpetGain,
    strings:stringsGain,
    cymbals:cymbalGain,
    assembly:assemblyGain
  };

  const files={
    trumpets:'https://upload.wikimedia.org/wikipedia/commons/6/6e/The_National_Library_of_Israel_-_Shofar_Prayer%2C_Ashkenazi_version_-_1785188_SHOFAR78.ogg',
    strings:'https://upload.wikimedia.org/wikipedia/commons/7/7f/Gliss.ogg',
    cymbals:'https://upload.wikimedia.org/wikipedia/commons/e/ee/More_cymbal_sounds.ogg',
    assembly:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Restaurant_ambience.ogg'
  };

  function makeLoop(name,url,targetGain,filterSetup){
    const audio=new Audio();
    audio.crossOrigin='anonymous';
    audio.preload='auto';
    audio.loop=true;
    audio.src=url;
    audio.volume=1;

    const media=ctx.createMediaElementSource(audio);
    let tail=media;

    if(filterSetup){
      const hp=ctx.createBiquadFilter();
      const lp=ctx.createBiquadFilter();
      hp.type='highpass';
      lp.type='lowpass';
      hp.frequency.value=filterSetup.hp;
      lp.frequency.value=filterSetup.lp;
      tail.connect(hp);
      hp.connect(lp);
      tail=lp;
    }

    tail.connect(targetGain);
    rootsTempleSources.push({name,audio,media});
    return audio;
  }

  const loops=[
    makeLoop('trumpets',files.trumpets,trumpetGain,{hp:90,lp:4700}),
    makeLoop('strings',files.strings,stringsGain,{hp:80,lp:4200}),
    makeLoop('cymbals',files.cymbals,cymbalGain,{hp:800,lp:9800}),
    makeLoop('assembly',files.assembly,assemblyGain,{hp:120,lp:1150})
  ];

  updateTempleMixerGains();

  const targetMaster=templeGainCurve('master');
  const now=ctx.currentTime;
  try{
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(.0001,now);
    master.gain.exponentialRampToValueAtTime(Math.max(.0001,targetMaster),now+.38);
  }catch(e){
    master.gain.value=targetMaster;
  }

  let failures=0;
  await Promise.all(loops.map(async audio=>{
    try{
      await audio.play();
    }catch(e){
      failures++;
    }
  }));

  if(rootsTempleCtx!==ctx)return;

  btn.classList.remove('loading');
  btn.classList.add('playing');
  btn.textContent='■ Ferma · mixer';

  if(failures===loops.length){
    stopTempleSound();
    resetRootsButton();
    if(templeMixerState)templeMixerState.textContent='I campioni audio non sono stati caricati.';
    if(rootsAudioStatus)rootsAudioStatus.innerHTML='<strong>Il mixer non è partito.</strong> Il browser ha bloccato i campioni esterni.';
    return;
  }

  if(templeMixerState){
    templeMixerState.textContent=failures
      ? 'Generatore attivo · alcuni campioni non sono disponibili.'
      : 'Generatore attivo · tutti i campioni sono in loop.';
  }
  if(rootsAudioStatus)rootsAudioStatus.innerHTML='<strong>Tempio · mixer con registrazioni reali.</strong> Shofar, arpa, cimbali e ambiente umano scorrono in loop e vengono fusi da un rapido fade iniziale. I campioni sono moderni e servono come riferimenti timbrici, non come ricostruzione storica.';
}


rootsAudioButtons.forEach(btn=>{
  btn.dataset.originalLabel=btn.textContent;
  btn.addEventListener('click',async()=>{
    if(activeRootsButton===btn){
      stopRootsAudio('<strong>Ascolto fermato.</strong>');
      return;
    }
    if(btn.dataset.rootSynth==='temple'){
      playTempleSound(btn);
      return;
    }

    stopRootsAudio();
    activeRootsButton=btn;
    btn.classList.add('loading');
    btn.textContent='… carico';
    try{
      rootsMediaAudio.src=btn.dataset.rootAudio;
      rootsMediaAudio.volume=1;
      await rootsMediaAudio.play();
      btn.classList.remove('loading');
      btn.classList.add('playing');
      btn.textContent='■ Ferma';
      if(rootsAudioStatus)rootsAudioStatus.innerHTML='<strong>'+btn.dataset.rootTitle+'</strong> · '+(btn.dataset.rootNote||'');
      rootsStopTimer=setTimeout(()=>fadeRootsAudio(4),16000);
      setTimeout(()=>{
        if(activeRootsButton===btn){
          stopRootsAudio('<strong>Fine dell’ascolto.</strong> '+btn.dataset.rootTitle+'.');
        }
      },20250);
    }catch(e){
      btn.classList.remove('loading','playing');
      btn.textContent=btn.dataset.originalLabel;
      activeRootsButton=null;
      if(rootsAudioStatus)rootsAudioStatus.innerHTML='<strong>Il campione non è partito.</strong> La fonte esterna potrebbe essere momentaneamente bloccata dal browser.';
    }
  });
});
rootsMediaAudio.addEventListener('ended',()=>{
  if(activeRootsButton){
    const title=activeRootsButton.dataset.rootTitle||'ascolto';
    stopRootsAudio('<strong>Fine dell’ascolto.</strong> '+title+'.');
  }
});

templeMixerSliders.forEach(slider=>{
  slider.addEventListener('input',()=>{
    refreshTempleMixerUI();
    updateTempleMixerGains();
  });
});
templeMixerPresets.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const presets={
      balanced:{trumpets:14,strings:41,cymbals:13,assembly:100,space:100,master:72},
      priests:{trumpets:92,strings:26,cymbals:42,assembly:12,space:58,master:70},
      levites:{trumpets:24,strings:88,cymbals:48,assembly:24,space:54,master:72},
      quiet:{trumpets:12,strings:18,cymbals:5,assembly:10,space:66,master:50}
    };
    const p=presets[btn.dataset.templePreset]||presets.balanced;
    templeMixerSliders.forEach(slider=>{
      const key=slider.dataset.templeChannel;
      if(Object.prototype.hasOwnProperty.call(p,key))slider.value=p[key];
    });
    refreshTempleMixerUI();
    updateTempleMixerGains();
    templeMixerPresets.forEach(x=>x.classList.toggle('active',x===btn));
  });
});
if(templeMixerPower){
  templeMixerPower.addEventListener('click',()=>{
    const trigger=document.querySelector('[data-root-synth="temple"]');
    if(rootsTempleCtx){
      stopRootsAudio('<strong>Tempio fermato.</strong> Puoi riavviare il mixer quando vuoi.');
    }else if(trigger){
      playTempleSound(trigger);
    }
  });
}
refreshTempleMixerUI();

// Prologo 00: lightbox delle fonti figurative ebraiche
const jewishIconButtons=[...document.querySelectorAll('.jewish-icon-image')];
const jewishIconDialog=document.getElementById('jewishIconDialog');
const jewishIconClose=document.getElementById('jewishIconClose');
const jewishIconDialogImage=document.getElementById('jewishIconDialogImage');
const jewishIconDialogTitle=document.getElementById('jewishIconDialogTitle');
const jewishIconDialogCaption=document.getElementById('jewishIconDialogCaption');

jewishIconButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(!jewishIconDialog)return;
    if(jewishIconDialogImage){
      jewishIconDialogImage.src=btn.dataset.jewishLarge||btn.querySelector('img')?.src||'';
      jewishIconDialogImage.alt=btn.querySelector('img')?.alt||'';
    }
    if(jewishIconDialogTitle)jewishIconDialogTitle.textContent=btn.dataset.jewishTitle||'';
    if(jewishIconDialogCaption)jewishIconDialogCaption.textContent=btn.dataset.jewishCaption||'';
    if(typeof jewishIconDialog.showModal==='function')jewishIconDialog.showModal();
  });
});
if(jewishIconClose)jewishIconClose.addEventListener('click',()=>jewishIconDialog?.close());
if(jewishIconDialog){
  jewishIconDialog.addEventListener('click',e=>{if(e.target===jewishIconDialog)jewishIconDialog.close();});
}


// Laboratorio polifonia: mixer multitraccia Cantoría
(()=>{
  const root=document.getElementById('polyMixer');
  if(!root)return;

  const playBtn=document.getElementById('polyPlay');
  const stopBtn=document.getElementById('polyStop');
  const recBtn=document.getElementById('polyRec');
  const recPlayBtn=document.getElementById('polyRecPlay');
  const downloadBtn=document.getElementById('polyDownload');
  const resetBtn=document.getElementById('polyReset');
  const seek=document.getElementById('polySeek');
  const timeEl=document.getElementById('polyTime');
  const status=document.getElementById('polyStatus');
  const reverb=document.getElementById('polyReverb');
  const reverbOut=document.getElementById('polyReverbOut');
  const master=document.getElementById('polyMaster');
  const masterOut=document.getElementById('polyMasterOut');
  const low=document.getElementById('polyLow');
  const mid=document.getElementById('polyMid');
  const high=document.getElementById('polyHigh');

  const voiceIds=['T','B','A','S'];
  const voiceLabels={T:'Tenor',B:'Contratenor',A:'Motetus',S:'Triplum'};
  const gainInputs=Object.fromEntries(voiceIds.map(id=>[id,root.querySelector('[data-poly-gain="'+id+'"]')]));
  const gainOutputs=Object.fromEntries(voiceIds.map(id=>[id,root.querySelector('[data-poly-output="'+id+'"]')]));
  const muteBtns=Object.fromEntries(voiceIds.map(id=>[id,root.querySelector('[data-poly-mute="'+id+'"]')]));
  const soloBtns=Object.fromEntries(voiceIds.map(id=>[id,root.querySelector('[data-poly-solo="'+id+'"]')]));
  const meterBars=Object.fromEntries(voiceIds.map(id=>[id,root.querySelector('[data-poly-voice="'+id+'"] .poly-meter i')]));

  const LOCAL_STEMS={
    T:'polyphony/tenor.mp3',
    B:'polyphony/contratenor.mp3',
    A:'polyphony/motetus.mp3',
    S:'polyphony/triplum.mp3'
  };

  // Stato interno del mixer. Deve essere dichiarato prima dell'inizializzazione
  // dell'interfaccia: senza queste variabili il primo Play genera un ReferenceError.
  let ctx=null;
  let graph=null;
  let buffers={};
  let loadPromise=null;
  let duration=0;
  let sources={};
  let offset=0;
  let startedAt=0;
  let playing=false;
  let stoppingSources=false;
  let raf=null;
  const meterData={};
  const state=Object.fromEntries(voiceIds.map(id=>[id,{mute:false,solo:false}]));
  let recorder=null;
  let recChunks=[];
  let recordedBlob=null;
  let recordedUrl='';
  let recordedAudio=null;

  function fmt(seconds){
    const total=Math.max(0,Math.floor(Number(seconds)||0));
    const minutes=Math.floor(total/60);
    const secs=String(total%60).padStart(2,'0');
    return minutes+':'+secs;
  }

  function setStatus(html,mode=''){
    if(!status)return;
    status.classList.remove('error','recording');
    if(mode==='error'||mode==='recording')status.classList.add(mode);
    status.innerHTML=html;
  }

  function ensureContext(){
    if(ctx)return ctx;
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)throw new Error('Web Audio non disponibile in questo browser.');
    ctx=new AudioCtx();

    const voiceSum=ctx.createGain();
    const lowEQ=ctx.createBiquadFilter();
    const midEQ=ctx.createBiquadFilter();
    const highEQ=ctx.createBiquadFilter();
    const dry=ctx.createGain();
    const reverbSend=ctx.createGain();
    const convolver=ctx.createConvolver();
    const wet=ctx.createGain();
    const masterGain=ctx.createGain();
    const compressor=ctx.createDynamicsCompressor();
    const recDest=ctx.createMediaStreamDestination();

    lowEQ.type='lowshelf'; lowEQ.frequency.value=140;
    midEQ.type='peaking'; midEQ.frequency.value=1100; midEQ.Q.value=.9;
    highEQ.type='highshelf'; highEQ.frequency.value=5200;

    compressor.threshold.value=-16;
    compressor.knee.value=16;
    compressor.ratio.value=2.5;
    compressor.attack.value=.006;
    compressor.release.value=.20;

    const irSeconds=2.8;
    const ir=ctx.createBuffer(2,Math.floor(ctx.sampleRate*irSeconds),ctx.sampleRate);
    for(let ch=0;ch<2;ch++){
      const data=ir.getChannelData(ch);
      for(let i=0;i<data.length;i++){
        const x=i/data.length;
        data[i]=(Math.random()*2-1)*Math.pow(1-x,2.8)*(1-.08*Math.sin(i*.017+ch));
      }
    }
    convolver.buffer=ir;

    voiceSum.connect(lowEQ);
    lowEQ.connect(midEQ);
    midEQ.connect(highEQ);
    highEQ.connect(dry);
    highEQ.connect(reverbSend);
    reverbSend.connect(convolver);
    convolver.connect(wet);
    dry.connect(masterGain);
    wet.connect(masterGain);
    masterGain.connect(compressor);
    compressor.connect(ctx.destination);
    compressor.connect(recDest);

    const channels={};
    voiceIds.forEach(id=>{
      const gain=ctx.createGain();
      const analyser=ctx.createAnalyser();
      analyser.fftSize=256;
      analyser.smoothingTimeConstant=.72;
      gain.connect(analyser);
      analyser.connect(voiceSum);
      channels[id]={gain,analyser};
      meterData[id]=new Uint8Array(analyser.fftSize);
    });

    graph={voiceSum,lowEQ,midEQ,highEQ,dry,reverbSend,convolver,wet,masterGain,compressor,recDest,channels};
    applyAllControls(true);
    return ctx;
  }

  async function ensureLoaded(){
    if(Object.keys(buffers).length===4)return;
    if(loadPromise)return loadPromise;
    loadPromise=(async()=>{
      const ac=ensureContext();
      setStatus('<strong>Caricamento multitraccia…</strong> Le quattro voci arrivano direttamente dal nostro sito.');
      const decoded={};
      for(let i=0;i<voiceIds.length;i++){
        const id=voiceIds[i];
        setStatus('<strong>Carico '+(i+1)+'/4 · '+voiceLabels[id]+'</strong> dal repository locale.');
        const res=await fetch(LOCAL_STEMS[id],{cache:'force-cache'});
        if(!res.ok)throw new Error('La traccia '+voiceLabels[id]+' non è disponibile ('+res.status+').');
        const ab=await res.arrayBuffer();
        decoded[id]=await ac.decodeAudioData(ab);
      }
      buffers=decoded;
      duration=Math.min(...voiceIds.map(id=>buffers[id].duration));
      seek.disabled=false;
      timeEl.textContent='0:00 / '+fmt(duration);
      setStatus('<strong>Multitraccia pronta.</strong> Le quattro voci sono state caricate dal repository. Muovi i fader, usa M e S per mute e solo, oppure premi REC e costruisci il tuo mix.');
    })().catch(err=>{
      loadPromise=null;
      setStatus('<strong>Non riesco a caricare le quattro tracce locali.</strong> '+err.message,'error');
      throw err;
    });
    return loadPromise;
  }

  function voiceBaseGain(id){
    const v=Math.max(0,Math.min(100,Number(gainInputs[id]?.value)||0))/100;
    return Math.pow(v,1.45);
  }

  function applyVoiceGains(immediate=false){
    if(!graph||!ctx)return;
    const anySolo=voiceIds.some(id=>state[id].solo);
    const now=ctx.currentTime;
    voiceIds.forEach(id=>{
      const inaudible=state[id].mute||(anySolo&&!state[id].solo);
      const value=inaudible?0:voiceBaseGain(id);
      const g=graph.channels[id].gain.gain;
      try{
        g.cancelScheduledValues(now);
        if(immediate)g.setValueAtTime(value,now);
        else g.setTargetAtTime(value,now,.035);
      }catch(e){g.value=value;}
      muteBtns[id]?.classList.toggle('active',state[id].mute);
      soloBtns[id]?.classList.toggle('active',state[id].solo);
    });
  }

  function applyAllControls(immediate=false){
    voiceIds.forEach(id=>{
      if(gainOutputs[id])gainOutputs[id].value=gainInputs[id]?.value||0;
    });
    if(reverbOut)reverbOut.value=reverb?.value||0;
    if(masterOut)masterOut.value=master?.value||0;
    if(!graph||!ctx){
      updateKnobs();
      return;
    }

    applyVoiceGains(immediate);
    const now=ctx.currentTime;
    const setParam=(param,value)=>{
      try{
        param.cancelScheduledValues(now);
        if(immediate)param.setValueAtTime(value,now);
        else param.setTargetAtTime(value,now,.04);
      }catch(e){param.value=value;}
    };
    const rv=Math.max(0,Math.min(100,Number(reverb?.value)||0))/100;
    const mv=Math.max(0,Math.min(100,Number(master?.value)||0))/100;
    setParam(graph.reverbSend.gain,.72*Math.pow(rv,1.35));
    setParam(graph.wet.gain,.62*Math.pow(rv,1.15));
    setParam(graph.masterGain.gain,.92*Math.pow(mv,1.3));
    setParam(graph.lowEQ.gain,Number(low?.value)||0);
    setParam(graph.midEQ.gain,Number(mid?.value)||0);
    setParam(graph.highEQ.gain,Number(high?.value)||0);
    updateKnobs();
  }

  function updateKnobs(){
    [low,mid,high].forEach(input=>{
      if(!input)return;
      const label=input.closest('[data-poly-knob]');
      const out=label?.querySelector('output');
      const face=label?.querySelector('.poly-knob-face');
      const value=Number(input.value)||0;
      if(out)out.value=(value>0?'+':'')+value;
      const angle=-135+((value+12)/24)*270;
      if(face)face.style.setProperty('--knob-angle',angle+'deg');
    });
  }

  function currentPosition(){
    if(!ctx)return offset;
    if(!playing)return offset;
    return Math.max(0,Math.min(duration,ctx.currentTime-startedAt));
  }

  function stopSourcesOnly(){
    stoppingSources=true;
    Object.values(sources).forEach(src=>{
      try{src.onended=null;src.stop();}catch(e){}
      try{src.disconnect();}catch(e){}
    });
    sources={};
    stoppingSources=false;
  }

  function startSources(at=offset){
    if(!ctx||Object.keys(buffers).length!==4)return;
    stopSourcesOnly();
    offset=Math.max(0,Math.min(Math.max(0,duration-.01),Number(at)||0));
    const when=ctx.currentTime+.035;
    voiceIds.forEach(id=>{
      const src=ctx.createBufferSource();
      src.buffer=buffers[id];
      src.connect(graph.channels[id].gain);
      sources[id]=src;
      src.start(when,offset);
    });
    startedAt=when-offset;
    playing=true;
    playBtn.classList.add('playing');
    playBtn.textContent='Ⅱ';
    sources.T.onended=()=>{
      if(stoppingSources||!playing)return;
      if(currentPosition()>=duration-.12)stopPlayback(true);
    };
    startUiLoop();
  }

  function pausePlayback(){
    if(!playing)return;
    offset=currentPosition();
    playing=false;
    stopSourcesOnly();
    playBtn.classList.remove('playing');
    playBtn.textContent='▶';
    updateTransport();
  }

  function stopPlayback(reset=true){
    if(playing)offset=currentPosition();
    playing=false;
    stopSourcesOnly();
    if(reset)offset=0;
    playBtn.classList.remove('playing','loading');
    playBtn.textContent='▶';
    updateTransport();
  }

  function updateTransport(){
    const pos=currentPosition();
    timeEl.textContent=fmt(pos)+' / '+(duration?fmt(duration):'—');
    if(duration&&document.activeElement!==seek)seek.value=Math.round((pos/duration)*1000);
  }

  function updateMeters(){
    if(!graph)return;
    voiceIds.forEach(id=>{
      const analyser=graph.channels[id].analyser;
      const data=meterData[id];
      analyser.getByteTimeDomainData(data);
      let sum=0;
      for(let i=0;i<data.length;i++){
        const x=(data[i]-128)/128;
        sum+=x*x;
      }
      const rms=Math.sqrt(sum/data.length);
      const pct=Math.max(0,Math.min(100,Math.pow(rms*3.1,.72)*100));
      if(meterBars[id])meterBars[id].style.height=pct.toFixed(1)+'%';
    });
  }

  function startUiLoop(){
    if(raf)return;
    const frame=()=>{
      raf=null;
      updateTransport();
      updateMeters();
      if(playing||recorder?.state==='recording')raf=requestAnimationFrame(frame);
      else voiceIds.forEach(id=>{if(meterBars[id])meterBars[id].style.height='0%';});
    };
    raf=requestAnimationFrame(frame);
  }

  async function togglePlay(){
    try{
      ensureContext();
      if(ctx.state==='suspended')ctx.resume();
      if(Object.keys(buffers).length!==4){
        playBtn.classList.add('loading');
        playBtn.textContent='…';
        await ensureLoaded();
        playBtn.classList.remove('loading');
        if(!playing)playBtn.textContent='▶';
      }
      if(playing)pausePlayback();
      else{
        if(offset>=duration-.05)offset=0;
        startSources(offset);
      }
    }catch(e){
      playBtn.classList.remove('loading','playing');
      playBtn.textContent='▶';
      setStatus('<strong>Riproduzione non avviata.</strong> '+(e?.message||'Errore inatteso del mixer.'),'error');
    }
  }

  function supportedMime(){
    if(typeof MediaRecorder==='undefined')return '';
    const types=[
      'audio/webm;codecs=opus',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/webm'
    ];
    return types.find(t=>MediaRecorder.isTypeSupported?.(t))||'';
  }

  function recordingExtension(type){
    if(type.includes('ogg'))return 'ogg';
    if(type.includes('mp4'))return 'm4a';
    return 'webm';
  }

  async function startRecording(){
    try{
      const ac=ensureContext();
      if(ac.state==='suspended')ac.resume();
      await ensureLoaded();
      if(typeof MediaRecorder==='undefined'){
        setStatus('<strong>Registrazione non disponibile.</strong> Questo browser non espone MediaRecorder. Il mixer resta comunque utilizzabile.','error');
        return;
      }
      if(recorder?.state==='recording')return;

      if(recordedUrl){
        URL.revokeObjectURL(recordedUrl);
        recordedUrl='';
      }
      recordedBlob=null;
      recPlayBtn.disabled=true;
      downloadBtn.disabled=true;
      recChunks=[];

      const mime=supportedMime();
      recorder=mime?new MediaRecorder(graph.recDest.stream,{mimeType:mime}):new MediaRecorder(graph.recDest.stream);
      recorder.ondataavailable=e=>{if(e.data&&e.data.size)recChunks.push(e.data);};
      recorder.onerror=()=>{
        setStatus('<strong>Errore di registrazione.</strong> Il browser ha interrotto il recorder.','error');
      };
      recorder.onstop=()=>{
        if(!recChunks.length){
          setStatus('<strong>Nessun file registrato.</strong> Riprova avviando REC durante la riproduzione.','error');
          recBtn.classList.remove('recording');
          recBtn.textContent='● REC';
          return;
        }
        const type=recorder.mimeType||recChunks[0]?.type||'audio/webm';
        recordedBlob=new Blob(recChunks,{type});
        recordedUrl=URL.createObjectURL(recordedBlob);
        recPlayBtn.disabled=false;
        downloadBtn.disabled=false;
        recBtn.classList.remove('recording');
        recBtn.textContent='● REC';
        setStatus('<strong>Mix registrato.</strong> Puoi ascoltarlo con ▶ REC oppure scaricare il file. Le modifiche fatte durante la registrazione sono dentro il mix.');
      };

      recorder.start(250);
      recBtn.classList.add('recording');
      recBtn.textContent='● REC…';
      if(!playing){
        if(offset>=duration-.05)offset=0;
        startSources(offset);
      }
      setStatus('<strong>REC attivo.</strong> Sto registrando in tempo reale l’uscita del mixer. Muovi fader, mute, solo, EQ e riverbero: tutto finirà nel file.','recording');
      startUiLoop();
    }catch(e){
      recBtn.classList.remove('recording');
      recBtn.textContent='● REC';
      setStatus('<strong>Registrazione non avviata.</strong> '+e.message,'error');
    }
  }

  function stopAll(){
    stopPlayback(true);
    if(recorder?.state==='recording'){
      try{recorder.stop();}catch(e){}
    }else{
      setStatus('<strong>Stop.</strong> Riproduzione riportata all’inizio.');
    }
  }

  function playRecorded(){
    if(!recordedUrl)return;
    if(recordedAudio&&!recordedAudio.paused){
      recordedAudio.pause();
      recPlayBtn.textContent='▶ REC';
      return;
    }
    if(recordedAudio){
      try{recordedAudio.pause();}catch(e){}
    }
    recordedAudio=new Audio(recordedUrl);
    recordedAudio.onended=()=>{recPlayBtn.textContent='▶ REC';};
    recordedAudio.play().then(()=>{recPlayBtn.textContent='Ⅱ REC';}).catch(()=>{
      setStatus('<strong>Il file registrato non parte.</strong> Il browser non riesce a riprodurre il formato appena creato.','error');
    });
  }

  function downloadRecorded(){
    if(!recordedBlob||!recordedUrl)return;
    const type=recordedBlob.type||'audio/webm';
    const a=document.createElement('a');
    a.href=recordedUrl;
    a.download='Virgen_bendita_mix.'+recordingExtension(type);
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function resetMix(){
    const defaults={T:78,B:76,A:74,S:72};
    voiceIds.forEach(id=>{
      gainInputs[id].value=defaults[id];
      state[id].mute=false;
      state[id].solo=false;
    });
    reverb.value=22;
    master.value=78;
    low.value=0;
    mid.value=0;
    high.value=0;
    applyAllControls();
    setStatus('<strong>Mix ripristinato.</strong> Tutte le voci sono aperte con una leggera quantità di riverbero.');
  }

  playBtn.addEventListener('click',togglePlay);
  stopBtn.addEventListener('click',stopAll);
  recBtn.addEventListener('click',startRecording);
  recPlayBtn.addEventListener('click',playRecorded);
  downloadBtn.addEventListener('click',downloadRecorded);
  resetBtn.addEventListener('click',resetMix);

  seek.addEventListener('input',()=>{
    if(!duration)return;
    const target=(Number(seek.value)/1000)*duration;
    if(playing)startSources(target);
    else{
      offset=target;
      updateTransport();
    }
  });

  voiceIds.forEach(id=>{
    gainInputs[id].addEventListener('input',()=>applyAllControls());
    muteBtns[id].addEventListener('click',()=>{
      state[id].mute=!state[id].mute;
      applyVoiceGains();
    });
    soloBtns[id].addEventListener('click',()=>{
      state[id].solo=!state[id].solo;
      applyVoiceGains();
    });
  });

  [reverb,master,low,mid,high].forEach(input=>input?.addEventListener('input',()=>applyAllControls()));

  if(typeof MediaRecorder==='undefined'){
    recBtn.disabled=true;
    recBtn.title='Registrazione non disponibile in questo browser';
  }

  updateKnobs();
  applyAllControls();
  updateTransport();

  window.addEventListener('pagehide',()=>{
    try{stopPlayback(false);}catch(e){}
    try{if(recorder?.state==='recording')recorder.stop();}catch(e){}
    try{recordedAudio?.pause();}catch(e){}
    if(recordedUrl)URL.revokeObjectURL(recordedUrl);
    try{ctx?.close();}catch(e){}
  },{once:true});
})();
