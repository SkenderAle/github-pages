# PREFLIGHT STATICO — Overlay del database unificato, 18 novembre 2026

**Repository:** `SkenderAle/github-pages`, branch `main`.
**Checkpoint di partenza:** `ff35a4b13bb87bfcfedb5c05abb3faa1941611bf` (thread di continuità del 18 novembre).
**Ambito:** verifica non distruttiva dei nove JSON operativi caricati dal builder `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs`.
**Stato:** `STATIC_PREFLIGHT_ONLY` — **NON** equivale a `FULL_RUNTIME_PASS` o `BROWSER_PASS`.

## Risultati riproducibili sugli overlay
I nove file operativi sono stati letti dal branch `main`, interpretati come JSON e confrontati per identificativi.

| Overlay operativo | Nodi | Archi | Excluded/pending |
|---|---:|---:|---:|
| SONATA_CAMERA_RACCORDI_OPERATIVI_2026-11-16.json | 7 | 11 | 23 |
| SONATA_OPERE_RACCORDI_FONTE_LOTTO01_2026-11-16.json | 6 | 27 | 4 |
| SUITE_SINFONICO_RACCORDI_OPERATIVI_2026-11-16.json | 8 | 21 | 4 |
| STRUTTURE_COMPOSIZIONI_RACCOLTE_OPERATIVO_2026-11-16.json | 5 | 13 | 10 |
| CONTRAPPUNTO_VARIAZIONI_RACCORDI_OPERATIVI_2026-11-16.json | 11 | 36 | 6 |
| DANZE_STRUMENTALI_RACCORDI_OPERATIVI_2026-11-17.json | 10 | 10 | 6 |
| FORME_BREVI_RACCORDI_OPERATIVI_2026-11-18.json | 9 | 14 | 7 |
| SCENA_DANZA_RACCORDI_OPERATIVI_2026-11-18.json | 15 | 38 | 14 |
| VOCALE_SACRO_PROFANO_RACCORDI_OPERATIVI_2026-11-18.json | 20 | 49 | 15 |
| **Totale** | **91** | **219** | **89** |

Controlli statici:
- **PASS**: nessun ID nodo duplicato fra i nove overlay (91 ID distinti).
- **PASS**: nessun ID arco duplicato fra i nove overlay (219 ID distinti).
- **PASS**: nessun nodo operativo senza `id` o `name`, nessun arco senza `id`, `source` o `target`.
- **PASS limitato**: ciascuno dei 91 nodi operativi è referenziato da almeno un estremo di arco nei nove overlay.
- **NON VERIFICATO**: 115 ulteriori ID di estremi di arco sono esterni ai nove overlay (normali riferimenti ai tre patrimoni, da risolvere sul database completo). Non si può affermare che siano orfani, né che siano tutti risolti, senza caricare le sorgenti reali.
- Le 89 voci `excluded_or_pending` sommano stati differenti: **non** sono tutte automaticamente HOLD.

## Anomalia di gate da verificare, senza promuovere la proposta

Nel file `CONTRAPPUNTO_VARIAZIONI_RACCORDI_OPERATIVI_2026-11-16.json` gli archi:
1. `cf20261115:030`: `flaminio::audit:fl01:jsb06:work:excel3797` → `tax20261115cf::form:passacaglia`;
2. `cf20261115:031`: `flaminio::audit:fl01:jsb06:work:excel3977` → `tax20261115cf::form:tema-variazioni`;

hanno `status = STAGING_CANDIDATE_FORM_LINK_NOT_IDENTITY`, `production_gate = CLOSED`, `no_identity_merge = true`.

Il builder li ammette espressamente tra i 36 archi del Contrappunto, assegna `quality = e.status`, e li considera `visibility = musical` se gli estremi non sono documentari. Il predicato di esclusione `isHold` di `projectForViewer` filtra `HOLD|SOSPES|CONTESTAT|REJECTED`, **non** `CANDIDATE`. La vista HTML adotta un filtro analogo. Di conseguenza i due archi candidati sono *ammissibili nella navigazione* anziché essere confinati esplicitamente alla revisione: questo è un **rischio di presentazione/semantica** da controllare, non prova che l'attribuzione sia falsa.

**Azione proposta:** distinguere un raccordo candidato opera–forma da uno già verificato nell'output navigabile (esclusione di default o etichetta/opt-in inequivocabili), mantenendo invariati i JSON fonte e senza interpretare genericamente `production_gate=CLOSED` come motivo per eliminare tutti gli archi staging.

## Gate ancora aperti

- **NON ESEGUITO:** builder integrale sulle **17 sorgenti reali**; per alcuni JSON molto grandi il collegamento disponibile restituisce il blob SHA ma non il contenuto; il runtime locale non ha accesso diretto alla rete GitHub. Nessun `FULL_RUNTIME_PASS`.
- **NON ESEGUITO:** batteria di `TEST_*_RUNTIME_*.mjs` sul builder finale. Non inferire un esito dai test sintetici precedenti.
- **NON ESEGUITO:** browser/DOM/WebGL/Canvas, filtri, etichette hover/tap, Android e desktop.
- **NON ESEGUITO:** verifica completa di tutte le 500 schede Flaminio, integrità di autori/opere/forme, versioni, cicli e nodi orfani.

## Ripresa operativa

1. Ottenere un ambiente con le 17 sorgenti integrali e avviare il builder corrente; salvare log, `counts`, archi orfani, ID duplicati, eccezioni.
2. Eseguire gli harness reali e distinguere **PASS / FAIL / NOT RUN** per ciascuno.
3. Verificare autore → opera → genere/forma per Bach, Mozart, Concerto, Sonata, Suite, Opera e vocale, senza propagare opere attraverso un genere comune.
4. Chiarire il comportamento dei due archi candidati e dei rapporti `HOLD`.
5. Soltanto dopo verifiche dati reali e browser, valutare il frontend pubblico. **Lotto 2 Flaminio resta BLOCCATO; grafi pubblici invariati.**

Questo documento registra **soltanto** il preflight statico eseguito, senza certificare il builder finale.
