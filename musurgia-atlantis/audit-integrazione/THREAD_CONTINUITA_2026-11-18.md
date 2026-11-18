# THREAD DI CONTINUITÀ — Musurgia Mundi / Atlantis / Flaminio
## Checkpoint operativo del 18 novembre 2026

**Repository:** `SkenderAle/github-pages` — branch `main`.  
**Ultimo commit verificato prima di questo checkpoint:** `07c6e067975284012c90610a757f5be4e22d39f3`.  
**Documento storico da conservare:** [THREAD_CONTINUITA_2026-11-08.md](THREAD_CONTINUITA_2026-11-08.md) (615 kB circa; non sostituire o riscrivere i 210 lotti documentati).

### Decisioni irrinunciabili

1. Unificare **Musurgia Mundi, Musurgia Atlantis e il primo lotto Flaminio**, non giustapporre tre archivi. Conservare ogni record e arco con provenienza originale. Identità duplicate solo se controllate; in caso contrario, relazione qualificata oppure HOLD.
2. **Lotto 2 Flaminio BLOCCATO**. Il Lotto 1 contiene **500 schede fonte**: documento/catalogo ≠ composizione certificata. Non creare opere per somiglianza di titolo.
3. **Non modificare la produzione**: `atlante3d/database/grafo.json`, `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`. Lavorare nel solo `musurgia-atlantis/audit-integrazione/`.
4. Navigazione **a pertinenza radicata**, non espansione indiscriminata: un compositore non eredita tutte le opere di un genere o i vicini di un parente. I capitoli sono risorse editoriali distinte dalle epoche storiche. Archi spiegati e direzionali, note, fonti, hover e tap da preservare.
5. Tenere separati **genere, forma, funzione, organico, singola opera, movimento, ciclo/raccolta, versione, adattamento e produzione scenica**. Relazioni tra lemmi ammesse, fusioni nominali no.

### Stato sul ramo main al 18 novembre

**Moduli di staging:**
- `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs`: builder del database unificato.
- `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`: visualizzatore di prova separato.
- `REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json`: registro aggiornato delle famiglie.

**Ultima previsione del registro (NON una certificazione sui dati reali):** **17 sorgenti, 2.897 nodi, 8.725 archi, 500 schede Flaminio**. Gli overlay operativi aggiungono cumulativamente **91 nodi e 219 archi di staging** rispetto al builder di partenza. L'ultimo gate segnala espressamente `EXPECTED_17_SOURCES_PENDING_REAL_DATA_AND_BROWSER_TEST`.

**Progressione degli overlay operativi:**
- Sonata e musica da camera: `SONATA_CAMERA_RACCORDI_OPERATIVI_2026-11-16.json`; opere fonte `SONATA_OPERE_RACCORDI_FONTE_LOTTO01_2026-11-16.json`. Delle 33 schede Sonata vagliate, 29 classificate e 4 HOLD. I test storici registrano una prova dati reali sulla fase iniziale, non sul builder corrente.
- Suite / repertorio sinfonico: `SUITE_SINFONICO_RACCORDI_OPERATIVI_2026-11-16.json`; **Partita per strumento solo** in Suite; Suite sinfonica e Rapsodia sinfonica nel repertorio sinfonico; Sinfonia concertante in quello concertante e sinfonico. Nessuna falsa dipendenza Sonata→Repertorio sinfonico.
- Strutture, cicli e raccolte: `STRUTTURE_COMPOSIZIONI_RACCOLTE_OPERATIVO_2026-11-16.json`: opera unitaria, opera plurimovimentale, ciclo, raccolta editoriale e insieme di opere autonome non sono sinonimi.
- Contrappunto / variazioni: `CONTRAPPUNTO_VARIAZIONI_RACCORDI_OPERATIVI_2026-11-16.json`: distinguere Fuga, Ricercare, variazione e corale.
- Danze strumentali: `DANZE_STRUMENTALI_RACCORDI_OPERATIVI_2026-11-17.json`, commit `2b582f71dc2f07d772a4b3d376a2a0daa6d956db`. **10 nodi, 10 archi**; danza come possibile movimento di suite, non opera inventata. Valzer/Tango e classificazioni ancora in sospeso.
- Forme brevi: `FORME_BREVI_RACCORDI_OPERATIVI_2026-11-18.json`, commit `92e062d8b13a8e1b81f463e3a8245c08fce64721`. **9 nodi, 14 archi**, **5 forme Mundi riutilizzate**. Famiglia di accesso analitico, non limite universale di durata. Ballata vocale diversa da ballata strumentale; Intermezzo comico diverso da strumentale.
- Scena e danza: `SCENA_DANZA_RACCORDI_OPERATIVI_2026-11-18.json`, commit `ed41aa4c57b63d22577686a019ce9fb1a91fd423`. **15 nodi, 38 archi**, **7 identità fonte riutilizzate**. `mundi::genere-balletto` e `atlantis::senso:balletto` **NON fusi** (HOLD); non confondere *La Valse* 1920 con allestimento 1929, le due coreografie della *Sagra*, balletto integrale con suite da concerto, né produzione con opera.
- Vocale sacro / profano: `VOCALE_SACRO_PROFANO_RACCORDI_OPERATIVI_2026-11-18.json`, commit `07c6e067975284012c90610a757f5be4e22d39f3`. **20 nodi, 49 archi**; **3 radici Mundi riutilizzate e 4 redirect di identità Mundi–Atlantis** (Cantata, Oratorio, Lied, Madrigale). Funzione sacra/profana distinta da genere e organico. Requiem/Messa non equivalenti per ogni opera, ciclo di Lieder ≠ singolo Lied, preludio corale per organo non è corale vocale. **15 proposte e nodo Magnificat HOLD**.

### Verifiche ESEGUITE vs NON ESEGUITE

**Eseguite fino al commit `07c6e06`:**
- Parsing/sintassi JS dei moduli modificati e test di navigazione sintetica V8 delle famiglie aggiunte.
- Controllo dei commit in `main` e delle liste file modificate, tutti confinati alla directory di audit.
- Nessuna scrittura ai tre file pubblici sopra elencati.

**NON eseguite sul builder finale a 17 sorgenti:**
- Lancio integrale del builder con tutti i JSON veri; conferma numerica 2.897/8.725; verifica sistematica orfani, duplicati e integrità di ogni record.
- Esecuzione locale dell'intera batteria dei test `TEST_*_RUNTIME_2026-11-*.mjs`. Questi harness sono stati preparati e aggiornati nei commit, **non** equivalgono a PASS reali.
- Collaudo DOM/browser/WebGL/Canvas, filtri, etichette e navigazione su Android e desktop.
- Audit identità/versioni delle singole opere Flaminio oltre alle classificazioni già esplicitamente verificate.

### Prossima ripresa — gate prioritario

**Non aprire nuove famiglie né Lotto 2 come prima azione.** Ordine suggerito:
1. Recuperare/eseguire localmente o in ambiente autorizzato le **17 sorgenti complete**, il builder `DB_UNIFICATO...` e tutti i `TEST_*_RUNTIME_*.mjs`; registrare un file di regressione con log, conteggi reali, eventuali eccezioni ed errori. Se vi sono regressioni, correggere prima il builder o gli harness, sempre nello staging.
2. Controllare l'effettivo **percorso autore → opera → genere/forma**, in particolare Bach, Mozart, Sonata, Concerto, Suite, Opera e forme vocali. Distinguere etichette delle rubriche bibliografiche Flaminio dalle persone canoniche.
3. Verificare esattamente **nodi orfani, duplicati semantici, HOLD/attribuzioni/versioni**, opere composite, movimenti e cicli; nessuna propagazione incontrollata tramite genere, epoca o capitolo.
4. Aprire `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` nel browser desktop e Android; verificare filtri, ricerca, tooltip/tap, leggibilità, etichette on-hover e navigazione radicata 1–5. Registrare i risultati *reali*, non solo simulati.
5. Solo dopo i gate verificati decidere l'eventuale pubblicazione nel frontend Atlantis e la **successiva** apertura del Lotto 2; non sbloccarli per semplice completamento degli overlay.

### Link di ripresa
- [Thread storico](THREAD_CONTINUITA_2026-11-08.md)
- [Registro overlay](REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json)
- [Builder unificato](DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs)
- [Viewer di prova](VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html)
- [Ultimo commit verificato](https://github.com/SkenderAle/github-pages/commit/07c6e067975284012c90610a757f5be4e22d39f3)

**Stato finale checkpoint:** Lotto 1 **OPEN / audit e collaudo in corso**; Lotto 2 **BLOCKED**; grafi pubblici invariati. Non equiparare la preparazione dei test alla loro esecuzione.
