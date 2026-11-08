# Musurgia Atlantis — Fase 2M · Lotto 01: port letterale di relationSentence

**8 novembre 2026 · branch main · solo staging in audit-integrazione.**

## Verifica del codice originario

La sezione di **277 righe, 47.796 caratteri**, contenente `relationSentenceBase`, `relationSentence` e le sue **tre ridefinizioni successive**, è **identica carattere per carattere** nello script originale `atlante3d/app-livelli.js` (blob `b7644154af527666d7b15bca8e31fe4f13924547`) e nello snapshot del 8 novembre (blob `d6ad7e194e70877b8d45b86575b322b280337c12`). È stata copiata senza riscritture in `ADAPTER_RELATIONSENTENCE_FASE2M_2026-11-08.cjs`, incapsulata con la sola dipendenza `byId` e senza alcuna modifica allo script pubblico.

## Test di parità sull'intero staging

| Provenienza | Record | Parità forward + reverse | Errori | 
|---|---:|---:|---:|
| Grafo base, 5 parti | 2437 | 2437 | 0 |
| Relazioni specialistiche, 5 parti | 1389 | 1389 | 0 |
| Estensione operetta/musical | 30 | 30 | 0 |
| **Totale** | **3856** | **3856** | **0** |

Ogni relazione è stata valutata da entrambe le estremità, con nomi derivati dagli staging originali di **509 persone** e **374 nodi non personali**; `reference` esegue il blocco letterale, `candidate` la sua versione isolata CommonJS. **7712 confronti direzionali risultano identici**; nessuna stringa vuota. I checksum FNV-1a ordinati sono inclusi nel JSON dei risultati.

**Golden regression:** `FIXTURE_RELATIONSENTENCE_FASE2M_2026-11-08.json` include **131 casi** selezionati fra base, specialistici, estensione e casi sintetici: scuole, legami didattici, formulazioni generiche, filtri grammaticali, patch del 2026 e casi tassonomici. Il runner `TEST_RELATIONSENTENCE_FASE2M_2026-11-08.cjs` usa Node.js `node TEST_RELATIONSENTENCE_FASE2M_2026-11-08.cjs` nella cartella di audit ed esegue forward, reverse e default, confrontando gli output a testi attesi fissati.

## Limiti dichiarati

- Questo collaudo prova la **riproduzione fedele delle frasi prodotte** dal codice conservato sui payload sorgenti; non è una seconda verifica indipendente della verità delle fonti storiche.
- Non prova ancora la parità dei nomi/etichette della **UI reale**, la visualizzazione desktop, l'hover, il tap Android o gli eventuali filtri di visualizzazione delle lenti.
- Nessun grafo pubblico aggiornato: **3.856** archi legacy e **1.718** Atlantis invariati. Il triage 250/250 è concluso ma non è un merge.
- Tutte le eccezioni originali, comprese eventuali costruzioni grammaticali da migliorare, sono preservate intenzionalmente. Correzioni linguistiche andranno marcate come nuove versioni e testate separatamente.
- I capitoli di Musurgia Mundi restano sul piano **editoriale** e non diventano scorciatoie nella navigazione storica.

**Prossima fase 2M Lotto 02:** verificare le etichette e la visualizzazione nella UI effettiva, poi le condizioni di pertinenza radicata I–V e i gate del singolo arco. L'integrazione potrà essere solo successiva e reversibile.
