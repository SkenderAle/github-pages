# MUSURGIA MUNDI — Audit correttivo Nielsen e rimandi concertistici
Data: 18 ottobre 2026. Branch: `main`. HEAD iniziale: `7f607a2bc39e34d230d7b804d6a88140dcebd92e`.

## Problema riscontrato
I collegamenti verso `concerti/` indirizzavano a sezioni generali (ad es. `#percorso-fiati`, `#violino`, `#clarinetto`) in cui il nome dell'autore poteva trovarsi nel testo, senza identificare una sua opera. Inoltre, i rimandi spesso avevano tutti etichetta «concerti»; la carta Nielsen indicava inizialmente un solo legame personale e collegamenti da audioteca generici.

## Correzione dell'indice
- 162 vecchi rimandi a `concerti/` isolati da `byNode` e conservati integralmente in `pendingReview` per controlli futuri. Il dato non è stato cancellato senza traccia.
- 188 rimandi precedentemente classificati `surname-unique` (in tutte le pagine) isolati dalla navigazione perché la sola corrispondenza del cognome non garantisce una destinazione pertinente; possono sovrapporsi ai conteggi dei concerti.
- 370 intestazioni `article.record > h3` nel catalogo concertistico esaminate; 81 compositori con schede d'opera intestate in modo univoco, 218 collegamenti nuovi ad ancoraggi d'opera `#id` esistenti.
- Un'ancora non specifica `#catalogo` / `#audioteca` non è più usata come collegamento editoriale aggiuntivo automatico nel pannello del grafo.
- Sotto «Ascolti e video» ora si trovano le opere, con titoli distinti; nessun nuovo media, player o autoplay creato.
- Esempio Nielsen: **Concerto per violino op. 33** `#ascolto-nielsen`, **Concerto per flauto (1926)** `#fiati-flauto-nielsen`, **Concerto per clarinetto op. 57** `#fiati-clarinetto-nielsen`, oltre alla **Sinfonia n. 4** `#nielsen-088` dell'audioteca sinfonica.
- Le ancore `#mm-opera-...` delle audioteche cameristica e vocale non sono state toccate.

## Relazioni Nielsen: 9 relazioni storiche
Due nuovi compositori (Niels W. Gade, Orla Rosenhoff) con contesto romantico danese e posizione biografica a Copenaghen.
- **Formazione:** Gade riceveva le composizioni giovanili; Rosenhoff insegnò teoria e contrappunto (anche privatamente).
- **Incontri documentati e corrispondenza:** Brahms (diario, Vienna 1894), Grieg (lettera gennaio 1905), Strauss (visita, Monaco 1894), Busoni (conoscenza dal 1890); conserva Nielsen–Sibelius già documentato.
- **Riferimenti stilistici:** Beethoven e Dvořák sulla base di uno studio musicologico, senza inventare incontri personali.

Fonti documentarie:
- https://www.carlnielsen.dk/gb/bio/
- https://barndomshjem.carlnielsen.org/en/timeline
- https://tidsskrift.dk/carlnielsenstudies/article/view/27743
- https://carlnielsencorrespondence.dk/en/letters/1/510
- https://carlnielsencorrespondence.dk/en/letters/2/415
- https://carlnielsencorrespondence.dk/en/letters/1/preface
- https://tidsskrift.dk/carlnielsenstudies/article/view/122256

## Controlli automatizzati
Sintassi JS corretta; JSON generati coerenti, ogni nuovo arco punta a nodi reali, ogni nuovo rimando concertistico usa un `id` esistente nella pagina, nuove schede con titoli distinti. Nessuna modifica al catalogo o ai lettori di concerti, nessun branch nuovo.

**Limiti:** analisi delle intestazioni del catalogo, non verifica musicologica di ogni registrazione. I vecchi rimandi generali sono ancora disponibili in `pendingReview` per un audit filologico; le pagine non concertistiche con metadati `full` non hanno subito una verifica semantica completa. Nessun collaudo visuale mobile/desktop eseguito in questo lotto.
