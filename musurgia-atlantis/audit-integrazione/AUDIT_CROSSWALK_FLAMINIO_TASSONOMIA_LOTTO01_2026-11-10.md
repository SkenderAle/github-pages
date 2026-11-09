# Audit integrato Flaminio–Atlantis — Lotto 01: denominazioni di genere e forma

**Data:** 10 novembre 2026 · **Branch:** main · **Scope:** sola documentazione audit, nessun grafo di produzione modificato.

## Fonte e metodologia
Lettura diretta del file Excel `compositori_flaminio.xlsx` ricevuto dall'utente, foglio `Sheet1`, 52.150 righe di dati. Estratte le frequenze delle **1.167** stringhe non vuote distinte della colonna `Genere/Forma`; 322 righe hanno la colonna vuota. Confronto lessicale preliminare con termini rappresentativi dell'overlay di 50 nodi `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`. Il matching conservativo non include ancora normalizzazione plurali/sinonimi: **NON** è un crosswalk semantico completo e non misura le effettive equivalenze storiche.

I 1.167 termini sono preservati senza perdita nel file CSV/JSON creato come allegato di lavoro in conversazione; **i dati grezzi del catalogo e le 52.150 righe non sono stati pubblicati su GitHub**.

## Risultati automatici — denominazioni, non opere
| Indicatore potenzialmente sovrapponibile | Denominazioni |
|---|---:|
| Contengono dettagli di organico/destinazione | 474 |
| Presentano prefissi classificatori | 210 |
| Presentano percorsi `>` | 133 |
| Indicano trascrizione/arrangiamento/versione/variazione | 58 |
| Presentano contesto storico, sacro/profano | 46 |
| Riportano segnali di catalogo/attribuzione | 39 |

Indicazioni **preliminari** ottenute per espressioni regolari; richiedono campionamento e validazione manuale. Alcune voci sono contemporaneamente *genere*, *organico* e *ambito*.

## Esito del primo matching volutamente restrittivo
- 4 denominazioni a coincidenza lessicale esatta con il piccolo vocabolario di riferimento, **1.847 righe**;
- 52 denominazioni con candidato per sottostringa, **1.260 righe**;
- 1.111 senza corrispondenza lessicale in questa procedura, **48.721 righe**.

**Non interpretare le 1.111 come nuove categorie né come assenze reali:** `Lied` ≠ `Lieder`, `Sonata` ≠ `Sonate`, `Cantata` ≠ `Cantate` per un algoritmo letterale, ma possono essere equivalenze flessionali; inoltre la selezione Checkpoint11 non è tutto il vocabolario Mundi. Non autorizzare merge in base a questi numeri.

## Campioni significativi reali
- `Cantate religiose (TVWV 1)`: contiene genere, funzione sacra e indicazione catalografica Telemann.
- `Composizioni per strumento solista, archi e basso continuo > Concerti per violino`: gerarchia originale più organico e genere.
- `Gruppo XXXI: Arrangiamenti di canti popolari > Gruppo XXXIa: 273 canti scozzesi`: intestazione catalografica e trattamento, non nuova forma storico-musicale `Gruppo XXXIa`.
- `Sonate per strumento a tastiera`: genere+organico; non rinominare come un sottogenere esclusivo, senza decidere l'uso didattico.
- `Opere teatrali`: categoria di repertorio, non necessariamente sinonimo ontologico di `Opera`.
- `Lieder per voce e pianoforte`: variante plurale di Lied più organico.
- `Musica da camera`: coincidono le parole, ma va distinta classe generale da formazioni e singoli generi.

## Contratto di modellazione raccomandato
Ogni record Flaminio conserva `genere_forma_originale`, `catalogue_path`, `row_provenance`. Un *crosswalk molti-a-molti*, revisionabile e versionato, associa se dimostrato una o più classi Musurgia con `predicate` distinto: `exact_label`, `lexical_variant`, `broader_than`, `narrower_than`, `has_instrumentation`, `historical_context`, `catalogue_heading_only`, `ambiguous`. Etichettare `review_status` e `evidence`. I predicati `has_instrumentation` e `historical_context` NON sono rapporti tassonomici `subclass_of` né archi interpersonali. Da una radice compositore sono attraversabili solo opere documentate dell'autore.

## Seguito obbligato
1. Estendere l'elenco di riferimento a TUTTI gli alberi storiografici preparati per Musurgia Mundi, non soltanto ai 50 nodi già pubblicati nella preview.
2. Normalizzare plurali, sinonimi, lingue, date e cataloghi mantenendo sempre il letterale, e classificare le 1.167 denominazioni in gruppi con verifica campionata.
3. Distinguere gerarchie effettive, solo raggruppamenti editoriali e organici; escludere nuovi sottogeneri fittizi.
4. Solo dopo: importazione opera-per-opera, confronto duplicati, classificazioni molteplici e test della ricerca radicata.
5. Riprendere separatamente Checkpoint24 (74/233 verifiche archi persona/persona, prossimo lotto 50).

**Produzione:** invariata; Checkpoint25–26 non promossi al grafo storico o alla UI pubblica; 210 lotti storici tutelati.
