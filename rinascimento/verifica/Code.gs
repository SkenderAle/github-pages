const CONFIG = Object.freeze({
  SPREADSHEET_ID: '1E7yc-7bSttPKKd96w2BMPdmu77u05uSbp255FeX8zEk',
  RESULTS_SHEET: 'Risultati',
  ROSTER_SHEET: 'Anagrafica',
  SCHOOL_DOMAIN: '4icudine.edu.it',
  STUDY_URL: 'https://skenderale.github.io/github-pages/risorgimento/',
  TEST_ID: 'inno-risorgimento-01',
  VERSION: '1.0',
  TEACHER_PREVIEW_EMAILS: [
    'alessandro.zilli@4icudine.edu.it',
    'secondaria.fermi@4icudine.edu.it'
  ]
});

const RIN_CONFIG = Object.freeze({
  SPREADSHEET_ID: CONFIG.SPREADSHEET_ID,
  RESULTS_SHEET: CONFIG.RESULTS_SHEET,
  ROSTER_SHEET: CONFIG.ROSTER_SHEET,
  SCHOOL_DOMAIN: CONFIG.SCHOOL_DOMAIN,
  STUDY_URL: 'https://skenderale.github.io/github-pages/rinascimento/',
  TEST_ID: 'rinascimento-01',
  VERSION: '1.0',
  MAX_SCORE: 30,
  QUESTION_MAX: [5,4,3,4,3,2,4,4,1],
  TEACHER_PREVIEW_EMAILS: CONFIG.TEACHER_PREVIEW_EMAILS
});

// La chiave delle risposte del Risorgimento rimane SOLO lato server.
const ANSWER_KEY = Object.freeze({
  i01:'q1_mameli', i02:'q1_novaro', i03:'q1_bertoldi', i04:'q1_rossi', i05:'q1_verdi',
  i06:'q2_1847', i07:'q2_1847', i08:'q2_1847', i09:'q2_after',
  i10:'q3_noi', i11:'q3_divisi', i12:'q3_coorte',
  i13:'q4_good', i14:'q4_bad', i15:'q4_good', i16:'q4_bad',
  i17:'q5_orig', i18:'q5_today', i19:'q5_later',
  i20:'q6_work', i21:'q6_theme',
  i22:'q7_coccarda', i23:'q7_coccarda', i24:'q7_canto', i25:'q7_canto',
  i26:'q8_manzoni', i27:'q8_verdi', i28:'q8_bande', i29:'q8_statuto',
  i30:'q9_center'
});

const QUESTION_GROUPS = Object.freeze([
  {title:'Nomi e ruoli', items:['i01','i02','i03','i04','i05']},
  {title:'1847', items:['i06','i07','i08','i09']},
  {title:'Versi chiave', items:['i10','i11','i12']},
  {title:'Novaro e Verdi', items:['i13','i14','i15','i16']},
  {title:'Suono originale', items:['i17','i18','i19']},
  {title:'Verdi 1862', items:['i20','i21']},
  {title:'Coccarda e Canto', items:['i22','i23','i24','i25']},
  {title:'Fare gli italiani', items:['i26','i27','i28','i29']},
  {title:'Tesi finale', items:['i30']}
]);

/**
 * ROUTER DELLA WEB APP.
 * Senza parametro continua ad aprire ESATTAMENTE il quiz del Risorgimento.
 * Con ?test=rinascimento apre Rinascimento.html.
 */
function doGet(e) {
  const test = String(
    e && e.parameter && e.parameter.test ? e.parameter.test : ''
  ).trim().toLowerCase();

  const isRinascimento =
    test === 'rinascimento' ||
    test === 'rinascimento-01';

  const fileName = isRinascimento ? 'Rinascimento' : 'Index';
  const title = isRinascimento
    ? 'Missione Rinascimento · Verifica'
    : 'La prova dell’officina · Verifica';

  return HtmlService.createHtmlOutputFromFile(fileName)
    .setTitle(title)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Dati iniziali RISORGIMENTO.
 * Questa funzione è lasciata con lo STESSO nome usato da Index.html.
 */
function getBootstrapData() {
  return getBootstrapDataFor_(CONFIG);
}

/**
 * Dati iniziali RINASCIMENTO.
 * Rinascimento.html chiama questa funzione all'avvio.
 */
function getBootstrapDataRinascimento() {
  return getBootstrapDataFor_(RIN_CONFIG);
}

function getBootstrapDataFor_(cfg) {
  const email = normalizeEmail_(Session.getActiveUser().getEmail());
  const isSchoolUser = !!email && email.endsWith('@' + cfg.SCHOOL_DOMAIN);
  const isTeacherPreview = cfg.TEACHER_PREVIEW_EMAILS.includes(email);
  const roster = isSchoolUser ? lookupRosterWithConfig_(email, cfg) : null;

  return {
    email,
    isSchoolUser,
    isTeacherPreview,
    rosterFound: !!roster,
    name: roster ? roster.name : '',
    surname: roster ? roster.surname : '',
    className: roster ? roster.className : '',
    studyUrl: cfg.STUDY_URL,
    testId: cfg.TEST_ID,
    version: cfg.VERSION
  };
}

/**
 * RISORGIMENTO: funzione originale, preservata.
 */
function submitQuiz(payload) {
  payload = payload || {};
  const answers = payload.answers || {};
  validateAnswers_(answers);

  const serverEmail = normalizeEmail_(Session.getActiveUser().getEmail());
  const isSchoolUser = isSchoolEmail_(serverEmail);
  const isTeacherPreview = CONFIG.TEACHER_PREVIEW_EMAILS.includes(serverEmail);
  const roster = isSchoolUser ? lookupRoster_(serverEmail) : null;

  let userType, email, name, surname, className;

  if (isSchoolUser) {
    userType = isTeacherPreview ? 'DOCENTE_PROVA' : 'STUDENTE_SCUOLA';
    email = serverEmail;
    name = roster ? roster.name : '';
    surname = roster ? roster.surname : '';
    className = roster && roster.className ? roster.className : cleanClass_(payload.schoolClass);
  } else {
    const ext = payload.external || {};
    name = cleanText_(ext.name, 80);
    surname = cleanText_(ext.surname, 80);
    email = normalizeEmail_(ext.email);
    className = '';
    userType = 'ESTERNO';
    if (!name || !surname || !isValidEmail_(email)) {
      throw new Error('Per la prova libera servono nome, cognome e un indirizzo email valido.');
    }
  }

  const correctness = {};
  let score = 0;
  Object.keys(ANSWER_KEY).forEach(itemId => {
    const ok = answers[itemId] === ANSWER_KEY[itemId];
    correctness[itemId] = ok;
    if (ok) score++;
  });

  const breakdown = QUESTION_GROUPS.map(group => {
    const good = group.items.reduce((n, id) => n + (correctness[id] ? 1 : 0), 0);
    return {title: group.title, good, all: group.items.length};
  });

  const now = new Date();
  const start = parseDate_(payload.startedAt) || now;
  const durationSec = Math.max(0, Math.min(4 * 60 * 60, Math.round((now.getTime() - start.getTime()) / 1000)));
  const attemptId = cleanAttemptId_(payload.attemptId);
  const temporaryKey = Session.getTemporaryActiveUserKey() || '';

  const row = [
    now,
    attemptId,
    CONFIG.TEST_ID,
    CONFIG.VERSION,
    userType,
    temporaryKey,
    email,
    name,
    surname,
    className,
    score,
    Object.keys(ANSWER_KEY).length,
    score / Object.keys(ANSWER_KEY).length,
    durationSec,
    start,
    now,
    ...breakdown.map(x => `${x.good}/${x.all}`),
    roster ? 'Identità presente in Anagrafica' : (isSchoolUser ? 'Account scolastico riconosciuto; anagrafica non ancora compilata' : 'Prova libera')
  ];

  appendResult_(row, attemptId);

  return {
    ok: true,
    attemptId,
    score,
    maxScore: Object.keys(ANSWER_KEY).length,
    correctness,
    breakdown,
    userType,
    identity: {email, name, surname, className}
  };
}

/**
 * RINASCIMENTO: registra nello stesso foglio Risultati.
 * Il client invia i 9 punteggi di sezione. Il server li valida e ricalcola il totale.
 */
function registraRisultatoRinascimento(payload) {
  payload = payload || {};

  const scores = Array.isArray(payload.scores) ? payload.scores.slice() : [];
  if (scores.length !== 9) {
    throw new Error('La verifica non è completa: servono i punteggi delle 9 prove.');
  }

  const normalizedScores = scores.map((value, i) => {
    const n = Number(value);
    const max = RIN_CONFIG.QUESTION_MAX[i];
    if (!isFinite(n) || n < 0 || n > max + 0.001) {
      throw new Error('Punteggio non valido nella prova Q' + (i + 1) + '.');
    }
    return Math.round(n * 100) / 100;
  });

  const score = Math.round(
    normalizedScores.reduce((sum, n) => sum + n, 0) * 100
  ) / 100;

  if (score < 0 || score > RIN_CONFIG.MAX_SCORE + 0.001) {
    throw new Error('Punteggio totale non valido.');
  }

  const serverEmail = normalizeEmail_(Session.getActiveUser().getEmail());
  const isSchoolUser = !!serverEmail && serverEmail.endsWith('@' + RIN_CONFIG.SCHOOL_DOMAIN);
  const isTeacherPreview = RIN_CONFIG.TEACHER_PREVIEW_EMAILS.includes(serverEmail);
  const roster = isSchoolUser ? lookupRosterWithConfig_(serverEmail, RIN_CONFIG) : null;

  let userType, email, name, surname, className;

  if (isSchoolUser) {
    userType = isTeacherPreview ? 'DOCENTE_PROVA' : 'STUDENTE_SCUOLA';
    email = serverEmail;
    name = roster ? roster.name : cleanText_(payload.nome, 80);
    surname = roster ? roster.surname : cleanText_(payload.cognome, 80);
    className = roster && roster.className
      ? roster.className
      : cleanClass_(payload.classe);
  } else {
    name = cleanText_(payload.nome, 80);
    surname = cleanText_(payload.cognome, 80);
    email = normalizeEmail_(payload.email);
    className = cleanClass_(payload.classe);
    userType = 'ESTERNO';

    if (!name || !surname || !isValidEmail_(email)) {
      throw new Error('Per la prova libera servono nome, cognome e un indirizzo email valido.');
    }
  }

  const now = new Date();
  const start = parseDate_(payload.startedAt) || now;
  const durationSec = Math.max(
    0,
    Math.min(
      4 * 60 * 60,
      Number(payload.duration) || Math.round((now.getTime() - start.getTime()) / 1000)
    )
  );
  const attemptId = cleanAttemptId_(payload.attemptId);
  const temporaryKey = Session.getTemporaryActiveUserKey() || '';

  const breakdown = normalizedScores.map((n, i) => `${n}/${RIN_CONFIG.QUESTION_MAX[i]}`);

  const row = [
    now,
    attemptId,
    RIN_CONFIG.TEST_ID,
    RIN_CONFIG.VERSION,
    userType,
    temporaryKey,
    email,
    name,
    surname,
    className,
    score,
    RIN_CONFIG.MAX_SCORE,
    score / RIN_CONFIG.MAX_SCORE,
    Math.round(durationSec),
    start,
    now,
    ...breakdown,
    roster
      ? 'Identità presente in Anagrafica'
      : (isSchoolUser
          ? 'Account scolastico riconosciuto; anagrafica non ancora compilata'
          : 'Prova libera')
  ];

  appendResult_(row, attemptId);

  return {
    ok: true,
    attemptId,
    score,
    maxScore: RIN_CONFIG.MAX_SCORE,
    breakdown: normalizedScores.map((n, i) => ({
      title: 'Q' + (i + 1),
      good: n,
      all: RIN_CONFIG.QUESTION_MAX[i]
    })),
    userType,
    identity: {email, name, surname, className}
  };
}

function appendResult_(row, attemptId) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    const sheet = ss.getSheetByName(CONFIG.RESULTS_SHEET);
    if (!sheet) throw new Error('Foglio Risultati non trovato.');

    // Protezione dai doppi invii accidentali dello stesso click/tentativo.
    if (sheet.getLastRow() > 1) {
      const existing = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1)
        .createTextFinder(attemptId)
        .matchEntireCell(true)
        .findNext();
      if (existing) throw new Error('Questo tentativo risulta già registrato.');
    }
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
}

function lookupRoster_(email) {
  return lookupRosterWithConfig_(email, CONFIG);
}

function lookupRosterWithConfig_(email, cfg) {
  if (!email) return null;
  const ss = SpreadsheetApp.openById(cfg.SPREADSHEET_ID);
  const sheet = ss.getSheetByName(cfg.ROSTER_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return null;

  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, 6).getDisplayValues();
  const target = email.toLowerCase();
  for (let i = 0; i < rows.length; i++) {
    const rowEmail = normalizeEmail_(rows[i][0]);
    if (rowEmail !== target) continue;
    const activeRaw = String(rows[i][4] || '').trim().toLowerCase();
    const active = !['no','false','0','disattivo'].includes(activeRaw);
    if (!active) return null;
    return {
      name: cleanText_(rows[i][1], 80),
      surname: cleanText_(rows[i][2], 80),
      className: cleanClass_(rows[i][3])
    };
  }
  return null;
}

function validateAnswers_(answers) {
  const required = Object.keys(ANSWER_KEY);
  if (Object.keys(answers).length !== required.length) {
    throw new Error('La verifica non è completa: devono essere sistemate tutte le tessere.');
  }
  const legalZones = new Set(Object.values(ANSWER_KEY));
  required.forEach(itemId => {
    if (!Object.prototype.hasOwnProperty.call(answers, itemId)) {
      throw new Error('Manca una risposta della verifica.');
    }
    if (!legalZones.has(String(answers[itemId]))) {
      throw new Error('È stata ricevuta una risposta non valida. Ricarica la pagina e riprova.');
    }
  });
}

function normalizeEmail_(value) {
  return String(value || '').trim().toLowerCase().slice(0, 160);
}

function isSchoolEmail_(email) {
  return !!email && email.endsWith('@' + CONFIG.SCHOOL_DOMAIN);
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

function cleanText_(value, maxLen) {
  return String(value || '').trim().replace(/[\u0000-\u001F\u007F]/g, '').slice(0, maxLen || 100);
}

function cleanClass_(value) {
  return cleanText_(value, 4).toUpperCase().replace(/\s+/g, '');
}

function cleanAttemptId_(value) {
  const v = String(value || '').trim();
  if (!/^[A-Za-z0-9._-]{8,80}$/.test(v)) {
    return Utilities.getUuid();
  }
  return v;
}

function parseDate_(value) {
  if (!value) return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}
