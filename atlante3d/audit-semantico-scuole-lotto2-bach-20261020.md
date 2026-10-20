# Musurgia Mundi — Bach e concerto grosso · Audit semantico delle scuole, secondo lotto

**Data:** 20 ottobre 2026. **Branch:** `main`, senza branch ulteriori. **Commit di partenza:** `893ddba5aaec474ebe7792bdae77636742134557`.

## 1. Johann Sebastian Bach e il concerto grosso: convalida senza duplicazione

Il collegamento già esistente `compositore-johann-sebastian-bach → forma-concerto-grosso` è convalidato come appartenenza **storica e sperimentale**, senza attribuire omogeneità al ciclo. I `Six concerts avec plusieurs instruments` furono dedicati il 24 marzo 1721. Il nome `Concerti brandeburghesi` è posteriore.

| Numero | Catalogo | Caratteristica |
|---|---|---|
| I | BWV 1046 | Complesso organico a fiati e archi; forma concertante e conclusione di danze. |
| II | BWV 1047 | Concertino di tromba, flauto dolce, oboe e violino, opposto agli archi. |
| III | BWV 1048 | Tre violini, tre viole e tre violoncelli; divisione in gruppi e confini flessibili tra solista e tutti. |
| IV | BWV 1049 | Violino e due flauti dolci; il violino emerge con forte virtuosismo. |
| V | BWV 1050 | Flauto traverso, violino e clavicembalo; il cembalo diviene solista, con lunga cadenza. Versione precoce BWV 1050a. |
| VI | BWV 1051 | Due viole, due viole da gamba, violoncello, violone e continuo; niente violini, solismo distribuito e contrasto non rigidamente corelliano. |

Fonti: [Netherlands Bach Society, I](https://www.bachvereniging.nl/en/bwv/bwv-1046), [V](https://www.bachvereniging.nl/en/bwv/bwv-1050), [VI](https://www.bachvereniging.nl/en/bwv/bwv-1051); [American Bach Soloists, note ai sei concerti](https://americanbach.org/recordings/Bach-Brandenburgs/); [repertorio BWV.info](https://bwv.info/en/bwv/1046-1051/); [Cesare Galla, discussione di Bukofzer e Basso](https://www.doppiozero.com/bach-e-i-trecento-anni-dei-concerti-brandeburghesi).

Il rapporto `concerto grosso` è appropriato alla rete storica, **non** un'attribuzione morfologica esclusiva. Il n. 2 presenta un'opposizione concertino/ripieno particolarmente nitida; anche IV e V presentano concertino, con un violino e un cembalo via via più protagonisti; I è misto e III–VI evidenziano configurazioni peculiari. Il nuovo stato dell'arco è `opera-verificata-con-qualificazione-tipologica`; i vecchi dati sono conservati in `catalogue_review`.

## 2. Secondo lotto: 64 relazioni precisate nelle scuole e istituzioni

Le modifiche riguardano esclusivamente la spiegazione bidirezionale `forward`/`reverse` e la qualificazione `natura_semantica`. Sono conservati `source`, `target`, `kind`, `note`, `status`, `sources` originali e le vecchie formule nel campo `semantic_review`.

| Ambito | Numero | Distinzione |
|---|---:|---|
| Scuola franco-fiamminga | 10 | Tradizione polifonica storiografica, non scuola didattica unica. |
| Scuola romana | 8 | Polifonia liturgica e maestri legati alle cappelle, non indistinta discendenza da Palestrina. |
| Scuola veneziana | 9 | Incarichi professionali a San Marco e sviluppo della scrittura concertata. |
| Scuola operistica napoletana | 11 | Composizione teatrale e didattica vocale, non semplice origine geografica. |
| Tradizioni inglesi elisabettiane | 5 | Chapel Royal, madrigale, virginale e liuto con ruoli distinti. |
| Polifonia sacra spagnola | 3 | Tradizione stilistica sacra, esperienze istituzionali differenti. |
| Cappelle, conservatori, corti, Collegium musicum, ambienti accademici | 18 | Fondazione, direzione, servizio, formazione, patronato, insegnamento: rapporto dichiarato in modo puntuale. |
| **Totale** | **64** | **Nessuna nuova relazione e nessun arco eliminato**. |

Riscontri mirati: [Treccani, Zarlino e San Marco](https://www.treccani.it/enciclopedia/gioseffo-zarlino/); [Treccani, Croce](https://www.treccani.it/enciclopedia/giovanni-croce_%28Dizionario-Biografico%29/); [Treccani, Leonardo Leo e conservatori napoletani](https://www.treccani.it/enciclopedia/leonardo-leo_%28Enciclopedia-Italiana%29/); [Treccani, Porpora](https://www.treccani.it/enciclopedia/nicola-antonio-porpora/). Gli altri collegamenti riutilizzano le proprie fonti originali: questa è una **verifica e precisazione semantica**, non la certificazione bibliografica integrale di ogni rapporto.

## 3. Integrità e prosecuzione

- Nodi **843**, compositori **393**, archi **1969** (immutati).
- Relazioni delle lenti **1388**, nella lente `scuole` **392** (immutate).
- Secondo lotto scolastico: **64** formulazioni precisate, cumulato dei due lotti **96**.
- Bach: un arco già esistente con stato filologico aggiornato; **0** nuove associazioni.
- Resta da controllare nel dettaglio il resto della lente scuole (**296 relazioni non rilette in questi due lotti**), nonché l'interfaccia visuale e la navigazione.
