# Fase 1 — Esecuzione reale del builder e prime verifiche post-correzioni
## 24 novembre 2026 — Musurgia Mundi / Atlantis / Flaminio

**Repository:** `SkenderAle/github-pages`, branch `main`. **Lotto 2 Flaminio BLOCKED; grafi pubblici invariati.**

## Metodo realmente eseguito
Il builder originale `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` è stato caricato dalla versione corrente di `main`; tutte e 17 le sorgenti JSON sono state recuperate come blob GitHub usando i rispettivi SHA, interpretate in memoria e passate alla funzione originale `buildUnifiedDatabase`. Il corpo della proiezione `rootedProjection` è stato estratto dall'HTML corrente `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` ed eseguito in JavaScript V8 con stato simulato ma dataset reale. È stato rimosso solamente il wrapper sintattico `export` dal codice modulo per l'esecuzione in memoria e virtualizzato `import.meta.url` nella sezione loader non invocata. Nessun file sorgente è stato scritto o alterato.

**Non è una prova Node CLI della batteria `TEST_*`, né un browser reale DOM/WebGL/Canvas/Android.**

## Integrità strutturale realmente ricalcolata
| Misura | Esito |
|---|---:|
| JSON sorgenti caricati | **17** |
| Nodi | **2.897** |
| Archi | **8.743** |
| Schede Flaminio | **500** |
| Schede fonte mancanti | **0** |
| Archi orfani | **0** |
| ID arco duplicati | **0** |
| Identità personali integrate | **162** |
| Identità tassonomiche integrate | **21** |

## Proiezioni effettive esercitate, con tutte le categorie e le lenti attive, profondità 5
| Radice | Estremo controllato | ID arco atteso | Visibile con arco | Profondità 0 | Filtro Persone |
|---|---|---|---|---|---|
| Sonata strumentale tardocinquecentesca | Sonata pian e forte | `L07-A050` | PASS | Opera esclusa | Non applicabile |
| Ballet d'action | Franz Anton Hilverding | `L02-A20` | PASS | Escluso | Escluso |
| Comédie-ballet | Molière | `L02-A31` | PASS | Escluso | Escluso |
| Comédie-ballet | Lully | `L02-A30` | PASS | Escluso | Escluso |
| Opéra-ballet | Rameau | `L02-A34` | PASS | Escluso | Escluso |
| Ricercare | Frescobaldi | `L07-A071` | PASS | Escluso | Escluso |
| Ricercare | Bach | `L07-A072` | PASS | Escluso | Escluso |
| Bach | Telemann | `lotto02-infl-telemann-bach-concerto` | PASS | Escluso | Escluso |
| Madrigale | Barbara Strozzi | `audit8f-madrigale-barbara-strozzi` | PASS | Escluso | Escluso |
| War Requiem | Wilfred Owen | `L205-A02` | PASS | Escluso | Escluso |

In questo campione tutti i dieci archi originari sono stati trovati come link grafici della vista effettiva, non solo nella lista `db.links`. I test sono stati eseguiti sulla proiezione reale estratta dall'HTML corrente. **Non dichiarare ancora PASS di tutti gli harness `TEST_*`.**

## Osservazione da verificare
La proiezione radicata su Bach con profondità 5 e tutte le lenti/categorie attive ha restituito **469 nodi e 470 archi**. Questo conteggio, preso da solo, non dimostra una regressione, ma richiede un controllo del perimetro e della non-propagazione, tenendo distinta la vista di Bach dal focus sul suo arco con Telemann. Sono da confrontare i risultati della suite storica prima della chiusura del gate.

## Questioni aperte
1. Eseguire la batteria Node CLI `TEST_*` completa e le regressioni di tutte le radici specializzate.
2. Ricalcolare l'archivio di relazioni ancora non navigabili sulle 169 radici: i conteggi storici 515/688 non sono più il certificato dello staging aggiornato.
3. Collaudare browser, WebGL, Canvas, hover, click/focus, filtri, prestazioni e Android.
4. Verificare la semantica e la tracciabilità delle relazioni di genere non ancora ricertificate; nessuna promozione indiscriminata.

**Stato:** builder reale PASS strutturale; 10 percorsi di controllo PASS logico V8; gate completo OPEN; Lotto 2 BLOCKED.
