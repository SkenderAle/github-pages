# Fase 1 — Recupero mirato di 13 relazioni storico-musicali
## 24 novembre 2026 — staging Mundi / Atlantis / Flaminio

**Perimetro:** `SkenderAle/github-pages`, ramo `main`, esclusivamente `musurgia-atlantis/audit-integrazione/`. **Lotto 2 Flaminio BLOCKED.** Grafi pubblici e database originale invariati.

## Censimento verificato sul registro precedente
La lettura di `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json` (blob `1c59051f0097e50c2eb670d8d39d39fae7eb5be2`) restituisce 13 record `RELAZIONE_STORICA_SPECIFICA_NON_OPERA_INFERITA`:
- **2** da Johann Sebastian Bach verso Telemann (ricezione di composizione copiata) e Kuhnau (precedente al Thomaskantorat, contesto della cantata lipsiense);
- **10** da Madrigale verso Willaert, Barbara Strozzi, Gesualdo, de Rore, Monteverdi, Festa, Marenzio, Casulana, Orlando di Lasso e Vittoria Aleotti; ciascuno conserva il predicato storico specifico;
- **1** da Toccata organistica del secondo Cinquecento verso Claudio Merulo (toccate organistiche stampate).

Sono **relazioni storiche**, non attestazioni di singole composizioni, non identità fuse e non nuovi nodi compositivi.

## Modifica nello staging
Nel viewer `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` è stata introdotta una mappa chiusa `verifiedRootHistoricalRelations` e la proiezione `withVerifiedRootHistoricalRelations`, applicata alle sette proiezioni specializzate tramite `withVerifiedRootRelations`.

La visibilità è condizionata a: ID completo dell'arco, layer originale Mundi, `quality=documentato`, predicato e coppia esatta root–persona, categoria Persone e lente attiva, profondità almeno 1. Un eventuale focus mantiene solo il breadcrumb root→persona originale. Le descrizioni degli archi continuano a utilizzare il predicato di fonte. Nessuna espansione delle opere della persona o del repertorio attraverso il genere.

Commit [`faaf0ee`](https://github.com/SkenderAle/github-pages/commit/faaf0eed478e3937442615ef405648c66d5d0954).

## Verifiche realmente eseguite
- **PASS V8 isolato**, su una relazione sintetica: esibizione della coppia esatta, rispetto del blocco lenti, profondità 0 e permanenza del breadcrumb di focus.
- **NON ESEGUITO** il test `TEST_RELAZIONI_STORICHE_RADICATE_2026-11-24.mjs` sulle 17 sorgenti reali. Il file è stato predisposto per verificare tutti i 13 casi con ID/qualità/predicato/estremi e comportamento dei filtri.
- **NON ESEGUITI** la batteria CLI Node completa né il collaudo UI desktop/Android/WebGL/Canvas.
- **NON ricalcolati** tutti i conteggi globali delle relazioni archiviate dopo le modifiche del 24/11. I precedenti 515/688 rimangono valori storici, non certificazioni dello stato corrente.

## Passaggi successivi
1. Eseguire i gate Node CLI sulle 17 sorgenti e correggere eventuali differenze riscontrate.
2. Verificare in browser le radici Bach, Madrigale, Toccata organistica, nonché i 21 ruoli contestuali e l'esempio Gabrieli.
3. Passare al vaglio delle **89 relazioni di pratica/repertorio di genere**: identificare coppie duplicate, evidenze dirette e legami non certificati. Non convertire l'appartenenza a un genere in paternità di composizioni.
4. Conservare separati gli **8 accessi derivati** e le **2 relazioni generali** Hilverding/Molière, ancora documentarie.

**Fase 1 OPEN. Lotto 2 BLOCKED. Non pubblicare staging finché non passa il collaudo.**
