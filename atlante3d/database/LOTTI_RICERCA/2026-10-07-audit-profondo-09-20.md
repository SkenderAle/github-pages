# Musurgia Mundi · Audit approfonditi 09–20 · pubblicazione cumulativa · 7 ottobre 2026

**Base:** `180bb96262899ad9ddf697c0d8bb678da462f66a` · **Stato pubblicato:** 681 nodi, 297 compositori, 1192 relazioni specialistiche, 375 relazioni di scuola, 906 archi generali.

Sono stati fusi **72 nodi** e **328 relazioni** preparate negli audit 09–20. Contestualmente è stato aggiunto il nodo strutturale `musica-afroamericana-novecento`, già richiesto da una relazione presente nel main; sono stati eliminati due duplicati semantici `daily01`.

Tre rapporti fra compositori sono stati riclassificati dalla lente `scuole` a `formazione` o `influenze`, conservando esplicitamente i margini di incertezza storiografica.

## Bilancio per audit

| Audit | Compositori riesaminati | Relazioni aggiunte | Nodi aggiunti |
|---:|---:|---:|---:|
| 09 | — | — | — |
| 10 | 40 | — | — |
| 11 | 42 | — | — |
| 12 | 40 | — | — |
| 13 | 46 | 31 | 0 |
| 14 | 45 | 28 | 0 |
| 15 | 40 | 29 | 0 |
| 16 | 40 | 31 | 0 |
| 17 | 40 | 19 | 0 |
| 18 | 40 | 16 | 0 |
| 19 | 40 | 13 | 0 |
| 20 | 40 | 11 | 0 |

## Controlli eseguiti

- unicità degli ID di nodi e relazioni
- esistenza di tutti gli endpoint source/target
- validità delle lenti e della direzionalità
- note descrittive e almeno una fonte HTTPS per relazione
- sorgente `corrente`/`ambito` per ogni relazione della lente Scuole
- schema onomastico dei compositori
- sincronizzazione dei conteggi nel registro delle identità
- rigenerazione della copertura quantitativa

## Correzioni contestuali

- aggiunto `musica-afroamericana-novecento` per chiudere il riferimento di Margaret Bonds
- rimossi `daily01-bridge-britten-confirm` e `daily01-bernstein-sondheim-confirm` perché duplicavano relazioni già pubblicate
- Willaert→Rore: `scuole` → `formazione` con cautela esplicita
- Ockeghem→Isaac: `scuole` → `influenze`/continuità documentata
- Richter→Stamitz: `scuole` → `formazione` con probabilità esplicita

## Stato finale

Il database pubblicato contiene **1192 relazioni specialistiche** e **681 nodi**. Gli archi storici generali restano **906**: nessuna relazione specialistica viene promossa automaticamente nel grafo generale.

