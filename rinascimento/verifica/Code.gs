const SPREADSHEET_ID = '1E7yc-7bSttPKKd96w2BMPdmu77u05uSbp255FeX8zEk';
const TEST_ID = 'rinascimento-01';
const VERSIONE = '1.0';
const PUNTEGGIO_MAX = 30;
const DOMINIO_SCOLASTICO = '4icudine.edu.it';

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Missione Rinascimento · Verifica')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function registraRisultato(payload) {
  if (!payload || payload.testId !== TEST_ID) throw new Error('Test non riconosciuto.');

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName('Risultati');
  const an = ss.getSheetByName('Anagrafica');
  if (!sh) throw new Error('Foglio Risultati non trovato.');

  const activeEmail = String(Session.getActiveUser().getEmail() || '').trim().toLowerCase();
  const suppliedEmail = String(payload.email || '').trim().toLowerCase();
  const email = activeEmail || suppliedEmail;

  let nome = String(payload.nome || '').trim();
  let cognome = String(payload.cognome || '').trim();
  let classe = String(payload.classe || '').trim();
  let note = [];
  let tipoUtente = activeEmail && activeEmail.endsWith('@' + DOMINIO_SCOLASTICO)
    ? 'ACCOUNT_SCOLASTICO'
    : 'ESTERNO';

  if (activeEmail && activeEmail.endsWith('@' + DOMINIO_SCOLASTICO)) {
    note.push('Account scolastico riconosciuto');
    if (an && an.getLastRow() > 1) {
      const rows = an.getRange(2, 1, an.getLastRow() - 1, 6).getDisplayValues();
      const found = rows.find(r => String(r[0] || '').trim().toLowerCase() === activeEmail && String(r[4] || '').toLowerCase() !== 'no');
      if (found) {
        nome = found[1] || nome;
        cognome = found[2] || cognome;
        classe = found[3] || classe;
        note.push('anagrafica riconosciuta');
      } else {
        note.push('anagrafica non ancora compilata');
      }
    }
  } else {
    note.push('Modalità esterna');
  }

  if (!email && !(nome && cognome)) throw new Error('Identità non sufficiente.');
  if (!Array.isArray(payload.scores) || payload.scores.length !== 9) throw new Error('Risposte incomplete o non valide.');

  const already = firstOfficialAttempt_(sh, email, nome, cognome, TEST_ID);
  if (already) return { ok: true, already: true };

  const total = Number(payload.score);
  if (!isFinite(total) || total < 0 || total > PUNTEGGIO_MAX) throw new Error('Punteggio non valido.');

  const now = new Date();
  const attemptId = Utilities.getUuid();
  const sessionKey = digest_([email, nome, cognome, TEST_ID, attemptId].join('|'));
  const qMax = [5,4,3,4,3,2,4,4,1];
  const qCells = payload.scores.map((s,i) => String(Number(s)) + '/' + qMax[i]);

  sh.appendRow([
    now,
    attemptId,
    TEST_ID,
    VERSIONE,
    tipoUtente,
    sessionKey,
    email,
    nome,
    cognome,
    classe,
    total,
    PUNTEGGIO_MAX,
    total / PUNTEGGIO_MAX,
    Number(payload.duration || 0),
    safeDate_(payload.startedAt),
    safeDate_(payload.submittedAt) || now,
    ...qCells,
    note.join('; ')
  ]);

  return { ok: true, already: false, attemptId: attemptId };
}

function firstOfficialAttempt_(sh, email, nome, cognome, testId) {
  const last = sh.getLastRow();
  if (last < 2) return false;
  const values = sh.getRange(2, 1, last - 1, 26).getDisplayValues();
  const e = String(email || '').trim().toLowerCase();
  const n = String(nome || '').trim().toLowerCase();
  const c = String(cognome || '').trim().toLowerCase();

  return values.some(r => {
    if (String(r[2] || '') !== testId) return false;
    const rowEmail = String(r[6] || '').trim().toLowerCase();
    const rowNome = String(r[7] || '').trim().toLowerCase();
    const rowCognome = String(r[8] || '').trim().toLowerCase();
    if (e && rowEmail) return e === rowEmail;
    return n && c && n === rowNome && c === rowCognome;
  });
}

function digest_(text) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, text, Utilities.Charset.UTF_8);
  return Utilities.base64Encode(bytes);
}

function safeDate_(value) {
  if (!value) return '';
  const d = new Date(value);
  return isNaN(d.getTime()) ? '' : d;
}