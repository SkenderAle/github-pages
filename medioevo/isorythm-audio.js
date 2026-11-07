/* Musurgia Mundi · Medioevo · Laboratorio autonomo Talea/Color.
   Talea: impulsi di rumore filtrato, senza oscillatori.
   Color: successione melodica Do/Sol, con sinusoide. */
(() => {
  'use strict';
  const lab = document.getElementById('isorythmLab');
  const play = document.getElementById('isorythmPlay');
  const status = document.getElementById('isorythmText');
  const buttons = {
    talea: document.getElementById('isorythmMuteTalea'),
    color: document.getElementById('isorythmMuteColor')
  };
  if (!lab || !play || !buttons.talea || !buttons.color) return;
  const cells = {
    talea: [...lab.querySelectorAll('.cycle.talea span')],
    color: [...lab.querySelectorAll('.cycle.color span')]
  };
  const AudioClass = window.AudioContext || window.webkitAudioContext;
  const muted = {talea: false, color: false};
  const stepSeconds = 0.5;
  let context = null, noise = null, master = null, buses = null;
  let running = false, pending = false, generation = 0;
  let timer = null, frame = null, watchdog = null;
  let firstAt = 0, nextAt = 0, step = 0, lastVisual = -1;

  const say = message => { if (status) status.textContent = message; };
  function setButtonState() {
    play.textContent = running ? '■ Ferma' : pending ? '… Attivo audio' : '▶ Ascolta i due cicli';
    play.setAttribute('aria-pressed', running ? 'true' : 'false');
    lab.classList.toggle('play', running);
  }
  function muteUI(which) {
    const button = buttons[which];
    button.textContent = muted[which] ? 'Riattiva' : 'Muto';
    button.setAttribute('aria-pressed', muted[which] ? 'true' : 'false');
    button.setAttribute('aria-label', (muted[which] ? 'Riattiva' : 'Silenzia') +
      (which === 'talea' ? ' gli impulsi percussivi della talea' : ' la melodia del color'));
    lab.classList.toggle(which + '-muted', muted[which]);
    if (running && context && buses) {
      buses[which].gain.setTargetAtTime(muted[which] ? 0 : 1, context.currentTime, 0.012);
    }
  }
  function highlight(n) {
    for (const which of ['talea', 'color']) {
      const length = cells[which].length;
      cells[which].forEach((cell, i) => cell.classList.toggle('current', n >= 0 && i === n % length));
    }
  }
  function makeNoise(ctx) {
    const count = Math.ceil(ctx.sampleRate * 0.09);
    const buffer = ctx.createBuffer(1, count, ctx.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let i = 0; i < count; i++) {
      channel[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.013));
    }
    return buffer;
  }
  function percussion(when, n) {
    const source = context.createBufferSource();
    source.buffer = noise;
    const filter = context.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 720;
    const amp = context.createGain();
    const accent = [0.37, 0.18, 0.29, 0.19][n % 4];
    amp.gain.setValueAtTime(0, when);
    amp.gain.linearRampToValueAtTime(accent, when + 0.003);
    amp.gain.exponentialRampToValueAtTime(0.0001, when + 0.075);
    source.connect(filter);
    filter.connect(amp);
    amp.connect(buses.talea);
    source.start(when);
    source.stop(when + 0.08);
  }
  function melody(when, n) {
    const source = context.createOscillator();
    source.type = 'sine';
    source.frequency.setValueAtTime(n % 2 ? 391.995436 : 261.625565, when);
    const amp = context.createGain();
    const level = n % 6 === 0 ? 0.27 : 0.21;
    amp.gain.setValueAtTime(0, when);
    amp.gain.linearRampToValueAtTime(level, when + 0.015);
    amp.gain.setValueAtTime(level, when + 0.32);
    amp.gain.exponentialRampToValueAtTime(0.0001, when + 0.45);
    source.connect(amp);
    amp.connect(buses.color);
    source.start(when);
    source.stop(when + 0.47);
  }
  function schedule() {
    if (!running || !context || context.state !== 'running') return;
    let scheduled = 0;
    while (nextAt < context.currentTime + 0.16 && scheduled++ < 8) {
      percussion(nextAt, step);
      melody(nextAt, step);
      nextAt += stepSeconds;
      step++;
    }
  }
  function draw() {
    if (!running) return;
    const current = Math.floor((context.currentTime - firstAt) / stepSeconds);
    if (current !== lastVisual) {
      lastVisual = current;
      highlight(current);
      if (current === 0) {
        say('In ascolto: gli impulsi della talea seguono quattro caselle; la melodia Do–Sol del color ne percorre sei. Usa Muto per isolare una voce.');
      } else if (current > 0 && current % 12 === 0) {
        say('Dopo 12 pulsazioni talea e color ricominciano insieme: tre cicli ritmici e due melodici.');
      }
    }
    frame = requestAnimationFrame(draw);
  }
  function stop(message) {
    generation++;
    running = false;
    pending = false;
    if (timer !== null) clearInterval(timer);
    if (frame !== null) cancelAnimationFrame(frame);
    if (watchdog !== null) clearTimeout(watchdog);
    timer = frame = watchdog = null;
    highlight(-1);
    setButtonState();
    if (master && context) {
      const oldMaster = master;
      const now = context.currentTime;
      oldMaster.gain.cancelScheduledValues(now);
      oldMaster.gain.setTargetAtTime(0, now, 0.012);
      setTimeout(() => { try { oldMaster.disconnect(); } catch (_) {} }, 150);
    }
    master = buses = null;
    if (message) say(message);
  }
  async function start() {
    if (running || pending) return;
    if (!AudioClass) {
      say('Questo browser non supporta il laboratorio sonoro.');
      return;
    }
    pending = true;
    const attempt = ++generation;
    setButtonState();
    say('Attivazione dell’audio…');
    try {
      context = context && context.state !== 'closed' ? context : new AudioClass();
      // Il gesto diretto dell'utente sblocca il contesto anche sui browser mobili.
      const resumed = context.resume();
      // Una sorgente iniziale silenziosa aiuta l'attivazione su WebKit/iOS.
      const unlock = context.createBufferSource();
      unlock.buffer = context.createBuffer(1, 1, context.sampleRate);
      unlock.connect(context.destination);
      unlock.start(0);
      watchdog = setTimeout(() => {
        if (attempt === generation && pending) {
          stop('Il browser non ha attivato l’audio. Apri la pagina in Chrome o Safari e riprova.');
        }
      }, 3500);
      await resumed;
      if (attempt !== generation) return;
      if (context.state !== 'running') throw new Error('AudioContext not running');
      if (watchdog !== null) clearTimeout(watchdog);
      watchdog = null;
      noise = noise || makeNoise(context);
      master = context.createGain();
      master.gain.value = 0.78;
      master.connect(context.destination);
      buses = {talea: context.createGain(), color: context.createGain()};
      for (const which of ['talea', 'color']) {
        buses[which].gain.value = muted[which] ? 0 : 1;
        buses[which].connect(master);
      }
      firstAt = context.currentTime + 0.075;
      nextAt = firstAt;
      step = 0;
      lastVisual = -1;
      pending = false;
      running = true;
      setButtonState();
      schedule();
      timer = setInterval(schedule, 35);
      frame = requestAnimationFrame(draw);
    } catch (error) {
      if (attempt === generation) stop('Impossibile avviare l’audio. Verifica il volume e prova dal browser, non dall’anteprima di un’app.');
    }
  }
  play.addEventListener('click', () => {
    if (running || pending) stop('Ascolto interrotto. Premi Play per ricominciare dalla prima casella.');
    else start();
  });
  for (const which of ['talea', 'color']) {
    buttons[which].addEventListener('click', () => {
      muted[which] = !muted[which];
      muteUI(which);
    });
    muteUI(which);
  }
  setButtonState();
  window.MMIsorythmStop = stop;
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && (running || pending)) stop('Ascolto interrotto: la pagina non è più visibile.');
  });
  window.addEventListener('pagehide', () => { if (running || pending) stop(); });
})();
