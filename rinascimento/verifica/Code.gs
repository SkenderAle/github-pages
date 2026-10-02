const SPREADSHEET_ID = '1E7yc-7bSttPKKd96w2BMPdmu77u05uSbp255FeX8zEk';
const DOMINIO_SCOLASTICO = '4icudine.edu.it';

const TESTS = {
  RISORGIMENTO: {
    id: 'inno-risorgimento-01',
    versione: '1.0',
    max: 30,
    qMax: [5, 4, 3, 4, 3, 2, 4, 4, 1]
  },
  RINASCIMENTO: {
    id: 'rinascimento-01',
    versione: '1.0',
    max: 30,
    qMax: [5, 4, 3, 4, 3, 2, 4, 4, 1]
  }
};


/**
 * WEB APP
 *
 * URL base:
 *   .../exec
 *     -> quiz Risorgimento, file Index.html
 *
 *   .../exec?test=rinascimento
 *     -> quiz Rinascimento, file Rinascimento.html
 */
function doGet(e) {
  const test = String(
    e && e.parameter && e.parameter.test
      ? e.parameter.test
      : ''
  ).trim().toLowerCase();

  const isRinascimento =
    test === 'rinascimento' ||
    test === 'rinascimento-01';

  const fileName = isRinascimento
    ? 'Rinascimento'
    : 'Index';

  const title = isRinascimento
    ? 'Missione Rinascimento · Verifica'
    : 'Verifica degli apprendimenti · Risorgimento';

  return HtmlService
    .createTemplateFromFile(fileName)
    .evaluate()
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/**
 * QUIZ RISORGIMENTO
 *
 * Mantiene il nome della funzione usato dal quiz di ieri.
 * Anche se il vecchio Index.html non invia testId,
 * il server sa che questa funzione appartiene al Risorgimento.
 */
function registraRisultato(payload) {
  return salvaRisultato_(
    payload || {},
    TESTS.RISORGIMENTO
  );
}


/**
 * QUIZ RINASCIMENTO
 */
function registraRisultatoRinascimento(payload) {
  return salvaRisultato_(
    payload || {},
    TESTS.RINASCIMENTO
  );
}


/**
 * Alias facoltativo.
 * Se in futuro un quiz invierà testId esplicitamente,
 * questa funzione instrada automaticamente la consegna.
 */
function salvaRisultato(payload) {
  payload = payload || {};

  const testId = String(
    payload.testId || payload.test || ''
  ).trim();

  if (testId === TESTS.RINASCIMENTO.id) {
    return salvaRisultato_(
      payload,
      TESTS.RINASCIMENTO
    );
  }

  return salvaRisultato_(
    payload,
    TESTS.RISORGIMENTO
  );
}


/**
 * MOTORE COMUNE DI REGISTRAZIONE
 */
function salvaRisultato_(payload, testCfg) {
  const ss = SpreadsheetApp.openById(
    SPREADSHEET_ID
  );

  const sh = ss.getSheetByName('Risultati');
  const an = ss.getSheetByName('Anagrafica');

  if (!sh) {
    throw new Error(
      'Foglio "Risultati" non trovato.'
    );
  }

  if (
    payload.testId &&
    String(payload.testId).trim() !== testCfg.id
  ) {
    throw new Error(
      'Identificativo del test non coerente.'
    );
  }

  const activeEmail = String(
    Session.getActiveUser().getEmail() || ''
  ).trim().toLowerCase();

  const suppliedEmail = String(
    payload.email || ''
  ).trim().toLowerCase();

  const email =
    activeEmail ||
    suppliedEmail;

  let nome = String(
    payload.nome || payload.name || ''
  ).trim();

  let cognome = String(
    payload.cognome || payload.surname || ''
  ).trim();

  let classe = String(
    payload.classe || payload.className || ''
  ).trim();

  const schoolAccount =
    !!activeEmail &&
    activeEmail.endsWith(
      '@' + DOMINIO_SCOLASTICO
    );

  const teacherTest =
    activeEmail ===
    'alessandro.zilli@4icudine.edu.it';

  let tipoUtente = teacherTest
    ? 'DOCENTE_PROVA'
    : schoolAccount
      ? 'ACCOUNT_SCOLASTICO'
      : 'ESTERNO';

  const note = [];

  if (schoolAccount) {
    note.push(
      'Account scolastico riconosciuto'
    );

    const profilo =
      trovaInAnagrafica_(
        an,
        activeEmail
      );

    if (profilo) {
      nome =
        profilo.nome ||
        nome;

      cognome =
        profilo.cognome ||
        cognome;

      classe =
        profilo.classe ||
        classe;

      note.push(
        'anagrafica riconosciuta'
      );
    } else {
      note.push(
        'anagrafica non ancora compilata'
      );
    }
  } else {
    note.push('Modalità esterna');
  }

  if (!email && !(nome && cognome)) {
    throw new Error(
      'Identità non sufficiente.'
    );
  }

  const scores =
    normalizzaPunteggi_(
      payload,
      testCfg
    );

  const totalPayload =
    numeroValido_(
      payload.score,
      payload.punteggio,
      payload.total
    );

  const totalCalcolato =
    somma_(scores);

  const total =
    totalPayload !== null
      ? totalPayload
      : totalCalcolato;

  if (
    !isFinite(total) ||
    total < 0 ||
    total > testCfg.max + 0.001
  ) {
    throw new Error(
      'Punteggio non valido.'
    );
  }

  /*
   * Per gli studenti si registra soltanto
   * il primo tentativo ufficiale dello stesso test.
   * Il docente può invece fare prove tecniche ripetute.
   */
  if (!teacherTest) {
    const already =
      primoTentativoGiaRegistrato_(
        sh,
        email,
        nome,
        cognome,
        testCfg.id
      );

    if (already) {
      return {
        ok: true,
        already: true,
        testId: testCfg.id
      };
    }
  }

  const now = new Date();

  const attemptId =
    Utilities.getUuid();

  const sessionKey =
    digest_(
      [
        email,
        nome,
        cognome,
        classe,
        testCfg.id,
        attemptId
      ].join('|')
    );

  const duration =
    Math.max(
      0,
      Math.round(
        Number(
          payload.duration ||
          payload.durata ||
          payload.durationSeconds ||
          0
        )
      )
    );

  const startedAt =
    safeDate_(
      payload.startedAt ||
      payload.inizio ||
      payload.start
    );

  const submittedAt =
    safeDate_(
      payload.submittedAt ||
      payload.consegna ||
      payload.end
    ) || now;

  const qCells =
    scores.map(
      function(score, i) {
        return formatScore_(
          score
        ) +
        '/' +
        formatScore_(
          testCfg.qMax[i]
        );
      }
    );

  const row = [
    now,
    attemptId,
    testCfg.id,
    testCfg.versione,
    tipoUtente,
    sessionKey,
    email,
    nome,
    cognome,
    classe,
    total,
    testCfg.max,
    total / testCfg.max,
    duration,
    startedAt,
    submittedAt
  ];

  while (qCells.length < 9) {
    qCells.push('');
  }

  row.push.apply(
    row,
    qCells.slice(0, 9)
  );

  row.push(
    note.join('; ')
  );

  sh.appendRow(row);

  return {
    ok: true,
    already: false,
    attemptId: attemptId,
    testId: testCfg.id,
    score: total,
    max: testCfg.max
  };
}


/**
 * Legge l'eventuale anagrafica collegata
 * all'account scolastico.
 *
 * Colonne:
 * A Email scolastica
 * B Nome
 * C Cognome
 * D Classe
 * E Attivo
 * F Note
 */
function trovaInAnagrafica_(sheet, email) {
  if (
    !sheet ||
    !email ||
    sheet.getLastRow() < 2
  ) {
    return null;
  }

  const rows =
    sheet
      .getRange(
        2,
        1,
        sheet.getLastRow() - 1,
        6
      )
      .getDisplayValues();

  const key =
    String(email)
      .trim()
      .toLowerCase();

  for (
    let i = 0;
    i < rows.length;
    i++
  ) {
    const row = rows[i];

    const rowEmail =
      String(row[0] || '')
        .trim()
        .toLowerCase();

    const attivo =
      String(row[4] || '')
        .trim()
        .toLowerCase();

    if (
      rowEmail === key &&
      attivo !== 'no' &&
      attivo !== 'false' &&
      attivo !== '0'
    ) {
      return {
        email: rowEmail,
        nome:
          String(row[1] || '')
            .trim(),
        cognome:
          String(row[2] || '')
            .trim(),
        classe:
          String(row[3] || '')
            .trim()
      };
    }
  }

  return null;
}


/**
 * Impedisce che uno studente
 * registri due primi tentativi
 * per lo stesso test.
 */
function primoTentativoGiaRegistrato_(
  sheet,
  email,
  nome,
  cognome,
  testId
) {
  const last =
    sheet.getLastRow();

  if (last < 2) {
    return false;
  }

  const values =
    sheet
      .getRange(
        2,
        1,
        last - 1,
        26
      )
      .getDisplayValues();

  const e =
    String(email || '')
      .trim()
      .toLowerCase();

  const n =
    String(nome || '')
      .trim()
      .toLowerCase();

  const c =
    String(cognome || '')
      .trim()
      .toLowerCase();

  return values.some(
    function(r) {
      if (
        String(r[2] || '')
          .trim() !== testId
      ) {
        return false;
      }

      const rowEmail =
        String(r[6] || '')
          .trim()
          .toLowerCase();

      const rowNome =
        String(r[7] || '')
          .trim()
          .toLowerCase();

      const rowCognome =
        String(r[8] || '')
          .trim()
          .toLowerCase();

      if (e && rowEmail) {
        return e === rowEmail;
      }

      return (
        !!n &&
        !!c &&
        n === rowNome &&
        c === rowCognome
      );
    }
  );
}


/**
 * Accetta:
 * - payload.scores = [5,4,3,...]
 * - payload.qScores = [...]
 * - payload.Q1 ... payload.Q9
 */
function normalizzaPunteggi_(
  payload,
  testCfg
) {
  let raw = [];

  if (
    Array.isArray(payload.scores)
  ) {
    raw = payload.scores.slice();
  } else if (
    Array.isArray(payload.qScores)
  ) {
    raw = payload.qScores.slice();
  } else {
    for (let i = 1; i <= 9; i++) {
      const value =
        payload['Q' + i] !== undefined
          ? payload['Q' + i]
          : payload['q' + i];

      raw.push(
        parseScoreValue_(value)
      );
    }
  }

  if (raw.length !== 9) {
    throw new Error(
      'La prova deve contenere 9 punteggi.'
    );
  }

  return raw.map(
    function(value, i) {
      const n =
        parseScoreValue_(value);

      if (
        !isFinite(n) ||
        n < 0 ||
        n > testCfg.qMax[i] + 0.001
      ) {
        throw new Error(
          'Punteggio Q' +
          (i + 1) +
          ' non valido.'
        );
      }

      return Math.round(
        n * 100
      ) / 100;
    }
  );
}


/**
 * Legge sia numeri puri
 * sia stringhe del tipo "4/5".
 */
function parseScoreValue_(value) {
  if (
    typeof value === 'number'
  ) {
    return value;
  }

  const text =
    String(
      value === undefined ||
      value === null
        ? ''
        : value
    ).trim();

  if (!text) {
    return 0;
  }

  const first =
    text.split('/')[0]
      .replace(',', '.');

  const n =
    Number(first);

  return isFinite(n)
    ? n
    : 0;
}


/**
 * Restituisce il primo numero
 * utilizzabile fra gli argomenti.
 */
function numeroValido_() {
  for (
    let i = 0;
    i < arguments.length;
    i++
  ) {
    const value =
      arguments[i];

    if (
      value === undefined ||
      value === null ||
      value === ''
    ) {
      continue;
    }

    const n =
      Number(
        String(value)
          .replace(',', '.')
      );

    if (isFinite(n)) {
      return n;
    }
  }

  return null;
}


function somma_(values) {
  return values.reduce(
    function(acc, value) {
      return acc + Number(value || 0);
    },
    0
  );
}


function formatScore_(value) {
  const n =
    Number(value);

  if (
    Math.abs(
      n - Math.round(n)
    ) < 0.00001
  ) {
    return String(
      Math.round(n)
    );
  }

  return String(
    Math.round(n * 100) / 100
  );
}


function digest_(text) {
  const bytes =
    Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      String(text),
      Utilities.Charset.UTF_8
    );

  return Utilities.base64Encode(
    bytes
  );
}


function safeDate_(value) {
  if (!value) {
    return '';
  }

  if (
    Object.prototype.toString.call(value) ===
    '[object Date]' &&
    !isNaN(value.getTime())
  ) {
    return value;
  }

  const d =
    new Date(value);

  return isNaN(d.getTime())
    ? ''
    : d;
}


/**
 * CONTENUTO UTENTE
 *
 * Queste funzioni sono innocue se non vengono usate.
 * Servono anche da compatibilità nel caso
 * Index.html chieda al server i dati dell'utente.
 */
function getUserContext() {
  return contestoUtente_();
}


function getUserInfo() {
  return contestoUtente_();
}


function getBootstrap() {
  return contestoUtente_();
}


function contestoUtente_() {
  const email =
    String(
      Session
        .getActiveUser()
        .getEmail() || ''
    )
      .trim()
      .toLowerCase();

  const schoolAccount =
    !!email &&
    email.endsWith(
      '@' + DOMINIO_SCOLASTICO
    );

  let profilo = null;

  if (schoolAccount) {
    const ss =
      SpreadsheetApp.openById(
        SPREADSHEET_ID
      );

    profilo =
      trovaInAnagrafica_(
        ss.getSheetByName(
          'Anagrafica'
        ),
        email
      );
  }

  return {
    email: email,
    schoolAccount:
      schoolAccount,
    nome:
      profilo
        ? profilo.nome
        : '',
    cognome:
      profilo
        ? profilo.cognome
        : '',
    classe:
      profilo
        ? profilo.classe
        : ''
  };
}
