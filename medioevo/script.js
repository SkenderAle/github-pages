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


// Incipit sonori delle parti della Messa: 18 secondi con fade-out.
const massIncipitButtons=[...document.querySelectorAll('.mass-incipit')];
const massIncipitStatus=document.getElementById('massIncipitStatus');
const massIncipitAudio=new Audio();
massIncipitAudio.preload='none';
let activeMassIncipit=null;
let massIncipitStopTimer=null;
let massIncipitFadeTimer=null;

function clearMassIncipitTimers(){
  if(massIncipitStopTimer)clearTimeout(massIncipitStopTimer);
  if(massIncipitFadeTimer)clearInterval(massIncipitFadeTimer);
  massIncipitStopTimer=null;
  massIncipitFadeTimer=null;
}
function resetMassIncipit(){
  clearMassIncipitTimers();
  try{massIncipitAudio.pause();massIncipitAudio.currentTime=0;massIncipitAudio.volume=1;}catch(e){}
  if(activeMassIncipit){
    activeMassIncipit.classList.remove('playing','loading');
    activeMassIncipit.textContent='▶ 18″';
  }
  activeMassIncipit=null;
}
function fadeMassIncipit(){
  const startVol=massIncipitAudio.volume;
  const steps=20;
  let n=0;
  if(massIncipitFadeTimer)clearInterval(massIncipitFadeTimer);
  massIncipitFadeTimer=setInterval(()=>{
    n++;
    massIncipitAudio.volume=Math.max(0,startVol*(1-n/steps));
    if(n>=steps){
      clearInterval(massIncipitFadeTimer);
      massIncipitFadeTimer=null;
    }
  },200);
}
massIncipitButtons.forEach(btn=>{
  btn.addEventListener('click',async()=>{
    if(activeMassIncipit===btn&&!massIncipitAudio.paused){
      resetMassIncipit();
      if(massIncipitStatus)massIncipitStatus.textContent='Ascolto fermato.';
      return;
    }
    resetMassIncipit();
    activeMassIncipit=btn;
    btn.classList.add('loading');
    btn.textContent='…';
    try{
      massIncipitAudio.src=btn.dataset.massAudio;
      massIncipitAudio.volume=1;
      await massIncipitAudio.play();
      btn.classList.remove('loading');
      btn.classList.add('playing');
      btn.textContent='■';
      if(massIncipitStatus)massIncipitStatus.innerHTML='<strong>'+btn.dataset.massLabel+'</strong> · incipit di 18 secondi, con dissolvenza negli ultimi 4.';
      massIncipitStopTimer=setTimeout(fadeMassIncipit,14000);
      setTimeout(()=>{
        if(activeMassIncipit===btn){
          resetMassIncipit();
          if(massIncipitStatus)massIncipitStatus.innerHTML='<strong>'+btn.dataset.massLabel+'</strong> · fine dell’incipit.';
        }
      },18250);
    }catch(e){
      btn.classList.remove('loading','playing');
      btn.textContent='▶ 18″';
      activeMassIncipit=null;
      if(massIncipitStatus)massIncipitStatus.textContent='Questa fonte audio non è stata avviata dal browser. Riprova oppure ricarica la pagina.';
    }
  });
});
massIncipitAudio.addEventListener('error',()=>{
  if(activeMassIncipit){
    activeMassIncipit.classList.remove('loading','playing');
    activeMassIncipit.textContent='▶ 18″';
  }
  activeMassIncipit=null;
  if(massIncipitStatus)massIncipitStatus.textContent='Fonte audio temporaneamente non disponibile.';
});
