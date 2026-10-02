// ============================================================
// PATCH MULTI-VERIFICA
// Non cancellare le altre funzioni già presenti in Code.gs.
// 1) Sostituisci SOLO la vecchia funzione doGet(e) con questa.
// 2) Incolla poi tutto il blocco registraRisultatoRinascimento
//    e le funzioni rin_* in fondo a Code.gs.
// 3) Aggiungi nel progetto un nuovo file HTML chiamato:
//    Rinascimento
//    copiandovi il contenuto di Rinascimento.html.
// ============================================================

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
    : 'Verifica degli apprendimenti';

  return HtmlService
    .createTemplateFromFile(fileName)
    .evaluate()
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


// ============================================================
// BACKEND RINASCIMENTO
// Usa lo STESSO spreadsheet del quiz sul Risorgimento.
// Non modifica registraRisultato() o altre funzioni già esistenti.
// ============================================================

function registraRisultatoRinascimento(payload) {
  const SPREADSHEET_ID_RIN = '1E7yc-7bSttPKKd96w2BMPdmu77u05uSbp255FeX8zEk';
  const TEST_ID_RIN = 'rinascimento-01';
  const VERSIONE_RIN = '1.0';
  const PUNTEGGIO_MAX_RIN = 30;
  const DOMINIO_RIN = '4icudine.edu.it';

  if (!payload || payload.testId !== TEST_ID_RIN) {
    throw new Error('Test Rinascimento non riconosciuto.');
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID_RIN);
  const sh = ss.getSheetByName('Risultati');
  const an = ss.getSheetByName('Anagrafica');

  if (!sh) {
    throw new Error('Foglio Risultati non trovato.');
  }

  const activeEmail = String(
    Session.getActiveUser().getEmail() || ''
  ).trim().toLowerCase();

  const suppliedEmail = String(
    payload.email || ''
  ).trim().toLowerCase();

  const email = activeEmail || suppliedEmail;

  let nome = String(payload.nome || '').trim();
  let cognome = String(payload.cognome || '').trim();
  let classe = String(payload.classe || '').trim();

  const note = [];

  let tipoUtente =
    activeEmail && activeEmail.endsWith('@' + DOMINIO_RIN)
      ? 'ACCOUNT_SCOLASTICO'
      : 'ESTERNO';

  if (activeEmail && activeEmail.endsWith('@' + DOMINIO_RIN)) {
    note.push('Account scolastico riconosciuto');

    if (an && an.getLastRow() > 1) {
      const rows = an
        .getRange(2, 1, an.getLastRow() - 1, 6)
        .getDisplayValues();

      const found = rows.find(function(r) {
        return (
          String(r[0] || '').trim().toLowerCase() === activeEmail &&
          String(r[4] || '').trim().toLowerCase() !== 'no'
        );
      });

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

  if (!email && !(nome && cognome)) {
    throw new Error('Identità non sufficiente.');
  }

  if (!Array.isArray(payload.scores) || payload.scores.length !== 9) {
    throw new Error('Risposte incomplete o non valide.');
  }

  const already = rin_firstOfficialAttempt_(
    sh,
    email,
    nome,
    cognome,
    TEST_ID_RIN
  );

  if (already) {
    return {
      ok: true,
      already: true
    };
  }

  const total = Number(payload.score);

  if (
    !isFinite(total) ||
    total < 0 ||
    total > PUNTEGGIO_MAX_RIN
  ) {
    throw new Error('Punteggio non valido.');
  }

  const now = new Date();
  const attemptId = Utilities.getUuid();

  const sessionKey = rin_digest_(
    [email, nome, cognome, TEST_ID_RIN, attemptId].join('|')
  );

  const qMax = [5, 4, 3, 4, 3, 2, 4, 4, 1];

  const qCells = payload.scores.map(function(s, i) {
    return String(Number(s)) + '/' + qMax[i];
  });

  sh.appendRow([
    now,
    attemptId,
    TEST_ID_RIN,
    VERSIONE_RIN,
    tipoUtente,
    sessionKey,
    email,
    nome,
    cognome,
    classe,
    total,
    PUNTEGGIO_MAX_RIN,
    total / PUNTEGGIO_MAX_RIN,
    Number(payload.duration || 0),
    rin_safeDate_(payload.startedAt),
    rin_safeDate_(payload.submittedAt) || now,
    qCells[0],
    qCells[1],
    qCells[2],
    qCells[3],
    qCells[4],
    qCells[5],
    qCells[6],
    qCells[7],
    qCells[8],
    note.join('; ')
  ]);

  return {
    ok: true,
    already: false,
    attemptId: attemptId
  };
}


function rin_firstOfficialAttempt_(sh, email, nome, cognome, testId) {
  const last = sh.getLastRow();

  if (last < 2) {
    return false;
  }

  const values = sh
    .getRange(2, 1, last - 1, 26)
    .getDisplayValues();

  const e = String(email || '').trim().toLowerCase();
  const n = String(nome || '').trim().toLowerCase();
  const c = String(cognome || '').trim().toLowerCase();

  return values.some(function(r) {
    if (String(r[2] || '') !== testId) {
      return false;
    }

    const rowEmail = String(r[6] || '').trim().toLowerCase();
    const rowNome = String(r[7] || '').trim().toLowerCase();
    const rowCognome = String(r[8] || '').trim().toLowerCase();

    if (e && rowEmail) {
      return e === rowEmail;
    }

    return (
      n &&
      c &&
      n === rowNome &&
      c === rowCognome
    );
  });
}


function rin_digest_(text) {
  const bytes = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    text,
    Utilities.Charset.UTF_8
  );

  return Utilities.base64Encode(bytes);
}


function rin_safeDate_(value) {
  if (!value) {
    return '';
  }

  const d = new Date(value);

  return isNaN(d.getTime()) ? '' : d;
}
