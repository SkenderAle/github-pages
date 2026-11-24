# Fase 1 — 169 proiezioni reali, ricalcolo archivio e correzione delle produzioni
## 24 novembre 2026 · Mundi–Atlantis–Flaminio · staging

**Repository:** `SkenderAle/github-pages`, ramo `main`, interventi solo in `musurgia-atlantis/audit-integrazione/`. **Lotto 2 Flaminio BLOCKED; grafi pubblici e builder sorgente non modificati.**

## Prova effettivamente eseguita
Sono stati recuperati i 17 JSON originali del Lotto 1 tramite blob GitHub, eseguito in memoria il `buildUnifiedDatabase` originale e valutata la funzione effettiva `rootedProjection` estratta dall'HTML di staging aggiornato. Sono state iterate esattamente le **169 radici del registro** `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json`, con profondità 5, tutte le lenti e categorie abilitate. La classificazione degli archi originali esclusi ripete il criterio `hiddenOriginalRelations` dell'HTML (layer originali Mundi/Mundi Extension/Atlantis; esclusione documentary e HOLD). I confronti sono per `root_id|edge_id`, non per semplice conteggio.

**Ambiente:** JavaScript V8, I/O GitHub virtualizzato; non Node CLI locale e non DOM/WebGL/Canvas/Android. Non sono stati rieseguiti tutti gli harness `TEST_*`.

## Integrità invariata
| Conteggio | Esito ricalcolato |
|---|---:|
| JSON caricati | 17 |
| Nodi unificati | **2.897** |
| Archi unificati | **8.743** |
| Schede Flaminio Lotto 1 | **500** |
| Schede fonte mancanti | **0** |
| Archi orfani | **0** |
| ID di arco duplicati | **0** |
| Proiezioni di radice con errore | **0/169** |

## Evoluzione della visibilità
| Misura | Registro 21/11 | Staging aggiornato 24/11 |
|---|---:|---:|
| Occorrenze radice–arco originali fuori dalle proiezioni | 704 | **647** |
| Verso persone fuori dalle proiezioni | 531 | **475** |
| Verso opere fuori dalle proiezioni | 4 | **3** |
| Nuove relazioni escluse rispetto al registro storico | — | **0** |
| Relazioni prima escluse e ora visibili | — | **57** |

Dettaglio delle **57 relazioni recuperate**: **16** di composizione originale specifica, **8** letterarie/librettistiche, **15** sceniche/storiche/occasioni, **13** storiche Mundi, **4** prassi di genere Atlantis, **1** opera-esempio (Gabrieli `L07-A050`). Tutti gli **8** rapporti da radici `atlantis::produzione:*` presenti nel registro sono oggi visibili.

Distribuzione esatta delle **647** ancora archiviate: persone 475, generi/forme 33, capitoli 49, eventi 4, concetti 39, opere 3, reti culturali 44.

### Difetto rilevato e corretto
Una prima esecuzione sul corpus completo dopo i recuperi precedenti aveva restituito **655** archiviate e **483** verso persone: mancavano otto collegamenti di ruoli scenici perché le produzioni `atlantis::produzione:*` sono di **categoria `eventi`**, non `opere`. La funzione `withVerifiedRootContextRoles` impediva quindi il loro recupero. È stato ristretto e corretto il gate: oltre alle opere, ammette esclusivamente gli eventi con ID di produzione esplicitamente già censiti. La validazione è legata agli stessi ID, predicati e evidenze originarie, senza estensione ai generici eventi o alle opere della persona.

Commit della correzione: [`e12af30`](https://github.com/SkenderAle/github-pages/commit/e12af30330abdf1dfa1a83ba55356e58693510c8).

È stato corretto anche il test dei 21 ruoli contestuali affinché riconosca come `eventi` gli allestimenti: [`e34ec18`](https://github.com/SkenderAle/github-pages/commit/e34ec187636a05e8cf41a59e35d6709bd747e084).

### Bach: monitoraggio separato
Nella vista radicata `atlantis::pers:bach` con tutte le categorie e lenti abilitate i nodi per profondità 1–5 sono rispettivamente **356, 464, 466, 468, 469**; le composizioni presenti a profondità 5 sono **355** su 469 nodi. L'ampiezza è già marcata al primo livello (271 opere). Questa osservazione non certifica da sola che ogni opera sia correttamente attribuita, né prova una fuga di traversal: verificare in modo mirato provenienza delle composizioni e restrizioni agli altri autori prima della chiusura.

## Gate riproducibile preparato
`TEST_169_RADICI_POST_CORREZIONI_2026-11-24.mjs` legge davvero i 17 JSON dal filesystem, richiama il builder reale, misura le 169 radici e verifica 57 recuperi/647 archi archivistici, inclusi gli otto ruoli di produzione. **Il test CLI è stato creato, non ancora eseguito in Node.**

## Residui e decisione
Le **647 relazioni archiviate** non costituiscono automaticamente 647 errori: includono 382 relazioni storiche Mundi già conosciute, accessi editoriali derivati, relazioni non ricertificate, rimandi contestuali e altre famiglie. Resta da verificare la classificazione e la funzionalità concreta delle singole sezioni, senza promuoverle indiscriminatamente. Devono seguire le regressioni storiche Node CLI, il controllo della vista Bach e il collaudo grafico browser/Android.

**Fase 1 OPEN. Lotto 2 Flaminio BLOCKED. Nessuna pubblicazione.**
