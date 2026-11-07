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
  // Dodici note del color in quattro secondi: 180 BPM, due note per casella.
  // La talea interviene ogni tre note: quattro impulsi in quattro secondi, 60 BPM.
  const noteSeconds = 60 / 180;
  const notesPerTaleaPulse = 3;
  const notesPerColorCell = 2;
  const colorCycleNotes = 12;
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
  function highlight(note) {
    const taleaIndex = note >= 0 ? Math.floor(note / notesPerTaleaPulse) % cells.talea.length : -1;
    const colorIndex = note >= 0 ? Math.floor(note / notesPerColorCell) % cells.color.length : -1;
    const colorHalf = note >= 0 ? note % notesPerColorCell : -1;
    cells.talea.forEach((cell, i) => cell.classList.toggle('current', i === taleaIndex));
    cells.color.forEach((cell, i) => {
      cell.classList.toggle('current', i === colorIndex);
      [...cell.querySelectorAll('i')].forEach((half, j) =>
        half.classList.toggle('note-on', i === colorIndex && j === colorHalf));
    });
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
    const level = n % colorCycleNotes === 0 ? 0.27 : 0.21;
    amp.gain.setValueAtTime(0, when);
    amp.gain.linearRampToValueAtTime(level, when + 0.015);
    amp.gain.setValueAtTime(level, when + 0.235);
    amp.gain.exponentialRampToValueAtTime(0.0001, when + 0.305);
    source.connect(amp);
    amp.connect(buses.color);
    source.start(when);
    source.stop(when + 0.32);
  }
  function schedule() {
    if (!running || !context || context.state !== 'running') return;
    let scheduled = 0;
    while (nextAt < context.currentTime + 0.16 && scheduled++ < 8) {
      if (step % notesPerTaleaPulse === 0) percussion(nextAt, Math.floor(step / notesPerTaleaPulse));
      melody(nextAt, step);
      nextAt += noteSeconds;
      step++;
    }
  }
  function draw() {
    if (!running) return;
    const current = Math.floor((context.currentTime - firstAt) / noteSeconds);
    if (current !== lastVisual) {
      lastVisual = current;
      highlight(current);
      if (current === 0) {
        say('Talea: 60 impulsi al minuto. Color: 180 note al minuto, due per ciascuna delle sei celle. Un impulso per ogni tre note; usa Muto per isolare la voce.');
      } else if (current > 0 && current % colorCycleNotes === 0) {
        say('Dopo quattro secondi tornano insieme: quattro impulsi della talea e dodici note del color (sei celle di due note).');
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
