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


const guidonianData=[
  {n:1,name:'Γ ut',modern:'Sol grave',x:12,y:50,f:98.00,meaning:'Il percorso comincia sulla punta del pollice. «Ut» è la sillaba di solmisazione associata a questa altezza nel gamut.'},
  {n:2,name:'A re',modern:'La grave',x:17,y:62,f:110.00,meaning:'Seconda posizione: la lettera indica l\'altezza alfabetica, «re» la voce di solmisazione.'},
  {n:3,name:'B mi',modern:'Si grave',x:22,y:72,f:123.47,meaning:'Alla base del pollice troviamo B mi. Nel sistema guidoniano la sillaba chiarisce la funzione dentro l\'esacordo.'},
  {n:4,name:'C fa ut',modern:'Do',x:34,y:51,f:130.81,meaning:'Il percorso entra nella base dell\'indice. C può essere «fa» in un esacordo e «ut» in un altro.'},
  {n:5,name:'D sol re',modern:'Re',x:51,y:50,f:146.83,meaning:'Una stessa altezza può ricevere più sillabe: qui D può essere sol oppure re secondo l\'esacordo attivo.'},
  {n:6,name:'E la mi',modern:'Mi',x:67,y:50,f:164.81,meaning:'E la mi mostra già perché questi nomi composti sono una mappa delle possibili funzioni.'},
  {n:7,name:'F fa ut',modern:'Fa',x:81,y:51,f:174.61,meaning:'Alla base del mignolo F può essere fa oppure ut, secondo il percorso esacordale.'},
  {n:8,name:'G sol re ut',modern:'Sol',x:82,y:44,f:196.00,meaning:'Tre sillabe sulla stessa altezza: G è uno dei punti nei quali più esacordi si sovrappongono.'},
  {n:9,name:'a la mi re',modern:'La',x:81,y:37,f:220.00,meaning:'La posizione a la mi re rende visibile la sovrapposizione fra più esacordi e prepara il concetto di mutazione.'},
  {n:10,name:'b fa / ♮ mi',modern:'Si♭ / Si♮',x:80,y:29,f:246.94,meaning:'Qui il sistema distingue la proprietà molle e quella dura. Nel demo sonoro usiamo convenzionalmente il Si naturale per mantenere il percorso ascendente.'},
  {n:11,name:'c sol fa ut',modern:'Do',x:68,y:17,f:261.63,meaning:'Il percorso passa dalla punta del mignolo verso le altre dita: c può assumere tre sillabe diverse.'},
  {n:12,name:'d la sol re',modern:'Re',x:52,y:11,f:293.66,meaning:'Sulla punta del medio la stessa altezza può essere la, sol oppure re.'},
  {n:13,name:'e la mi',modern:'Mi',x:34,y:19,f:329.63,meaning:'Il cammino raggiunge la punta dell\'indice: e può essere cantato come la oppure mi.'},
  {n:14,name:'f fa ut',modern:'Fa',x:34,y:29,f:349.23,meaning:'Scendendo lungo l\'indice ricompare la coppia fa-ut, ora nell\'ottava superiore.'},
  {n:15,name:'g sol re ut',modern:'Sol',x:34,y:39,f:392.00,meaning:'g sol re ut ripete, un\'ottava più in alto, la triplice possibilità già incontrata su G.'},
  {n:16,name:'aa la mi re',modern:'La',x:51,y:39,f:440.00,meaning:'Il percorso torna verso il centro della mano: la-mi-re sono tre funzioni possibili della stessa clavis.'},
  {n:17,name:'bb fa / ♮♮ mi',modern:'Si♭ / Si♮',x:66,y:39,f:493.88,meaning:'Anche nell\'ottava alta ritorna l\'alternativa fra b molle e b durum. Il demo usa convenzionalmente il Si naturale.'},
  {n:18,name:'cc sol fa',modern:'Do',x:66,y:29,f:523.25,meaning:'Nella regione acuta diminuiscono le sillabe disponibili: cc porta sol e fa.'},
  {n:19,name:'dd la sol',modern:'Re',x:52,y:27,f:587.33,meaning:'dd la sol è la penultima posizione del percorso principale sulla faccia della mano.'},
  {n:20,name:'ee la',modern:'Mi acuto',x:52,y:5.5,f:659.25,meaning:'Il gamut raggiunge ee la. Nelle descrizioni tradizionali l\'ultima posizione può essere indicata sul dorso del medio.'}
];

const guidonianLab=document.getElementById('guidonianLab');
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

function showGuidonian(item,play=true){
  if(!item)return;
  if(guidonianPointer){
    guidonianPointer.style.left=item.x+'%';
    guidonianPointer.style.top=item.y+'%';
  }
  if(guidonianCounter)guidonianCounter.textContent=String(item.n).padStart(2,'0')+' / 20';
  if(guidonianNote)guidonianNote.textContent=item.name;
  if(guidonianModern)guidonianModern.textContent=item.modern+' · riferimento moderno approssimativo';
  if(guidonianMeaning)guidonianMeaning.textContent=item.meaning;
  document.querySelectorAll('.guidonian-hotspot').forEach(b=>b.classList.toggle('active',Number(b.dataset.n)===item.n));
  if(play&&guidonianAudioOn)glideChoir(item.f);
}

function enableGuidonianAudio(){
  const ctx=ensureChoirAudio();
  if(!ctx)return false;
  guidonianAudioOn=true;
  if(ctx.state==='suspended')ctx.resume();
  if(guidonianSound)guidonianSound.textContent='♪ Suono attivo';
  if(guidonianAudioState){
    guidonianAudioState.textContent='Audio attivo: passando da una falange all’altra la voce glissa verso la nuova altezza.';
    guidonianAudioState.classList.add('on');
  }
  return true;
}

function stopGuidonianDemo(){
  if(guidonianDemoTimer)clearTimeout(guidonianDemoTimer);
  guidonianDemoTimer=null;
  guidonianDemoIndex=0;
  if(guidonianDemo)guidonianDemo.textContent='▶ Percorri il gamut';
}

function stepGuidonianDemo(){
  if(guidonianDemoIndex>=guidonianData.length){
    stopGuidonianDemo();
    stopChoir();
    return;
  }
  const item=guidonianData[guidonianDemoIndex++];
  showGuidonian(item,true);
  guidonianDemoTimer=setTimeout(stepGuidonianDemo,650);
}

if(guidonianHotspots){
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
    b.addEventListener('click',()=>{
      if(!guidonianAudioOn)enableGuidonianAudio();
      showGuidonian(item,true);
    });
    guidonianHotspots.appendChild(b);
  });
  showGuidonian(guidonianData[0],false);
}

if(guidonianSound){
  guidonianSound.addEventListener('click',()=>{
    if(!guidonianAudioOn){
      if(enableGuidonianAudio()){
        const current=guidonianData.find(x=>x.n===Number(document.querySelector('.guidonian-hotspot.active')?.dataset.n))||guidonianData[0];
        startChoir(current.f);
      }
    }else{
      guidonianAudioOn=false;
      stopChoir();
      guidonianSound.textContent='♪ Attiva il suono';
      if(guidonianAudioState){
        guidonianAudioState.textContent='Audio disattivato. Il cursore continua a seguire il mouse.';
        guidonianAudioState.classList.remove('on');
      }
    }
  });
}

if(guidonianDemo){
  guidonianDemo.addEventListener('click',()=>{
    if(guidonianDemoTimer){
      stopGuidonianDemo();
      stopChoir();
      return;
    }
    enableGuidonianAudio();
    guidonianDemoIndex=0;
    guidonianDemo.textContent='■ Ferma';
    startChoir(guidonianData[0].f);
    stepGuidonianDemo();
  });
}

if(guidonianStage){
  guidonianStage.addEventListener('pointerleave',()=>{
    if(!guidonianDemoTimer&&guidonianAudioOn)stopChoir();
  });
  guidonianStage.addEventListener('pointerenter',()=>{
    const active=document.querySelector('.guidonian-hotspot.active');
    const item=active?guidonianData.find(x=>x.n===Number(active.dataset.n)):guidonianData[0];
    if(item&&guidonianAudioOn)startChoir(item.f);
  });
}
