# Musurgia Mundi — Consolidamento cumulativo Audit 13–17

**Data:** 8 ottobre 2026  
**Repository:** SkenderAle/github-pages  
**Ramo esclusivo:** audit-produzione-correttivo-01  
**Parent:** `2a441e56905a7327898645bb66e0b2c505585c40`

## Perimetro

Consolidati i cinque rapporti degli Audit 13, 14, 15, 16 e 17 e i rispettivi registri JSON. L'accumulo comprende **250 record distinti** del primo macroblocco: 35 formazione, 74 influenze, 76 collaborazioni, 57 genealogie e 8 scuole. Le altre 49 relazioni formative erano state già trattate dagli audit precedenti. **Una ricognizione non è sempre una conferma documentaria definitiva.**

Il registro dell'Audit 16, assente fra i file locali originali, è stato **ricostruito dal rapporto integrale**, preservando i 50 ID, l'ordine, le classificazioni T/H/P/R/Q e i riferimenti alle proposte. Il rapporto integrale resta la fonte autorevole dei dettagli.

## Rettifiche applicate a relazioni.json

Selezionate **13 modifiche fondate su riscontri specifici**. Non sono stati creati, cancellati o riordinati archi; restano **1280 relazioni** con tutti gli ID persistenti, gruppi, source e target invariati. Gli URL già presenti sono conservati. Nelle altre proposte non si interviene sui dati senza ulteriore riscontro o revisione della tassonomia.

| ID | Risultato |
|---|---|
| `lotto07-dindy-honegger` | Disciplina rettificata da orchestrazione a **direzione d'orchestra**, con fonte biografica ufficiale. |
| `audit26-torelli-vivaldi-influenza` | Declassato a `documentato-con-cautela`: lezioni ipotetiche nel DBI. |
| `audit15-wagner-debussy-bayreuth` | Bayreuth **1888–1889**, non 1889–1890, con fonti istituzionali e precedente Treccani conservato. |
| `audit8g-merulo-toccata-organo` | Distinta la curatela del 1594 dalla stampa del primo libro di toccate nel **1598**. |
| `audit8h-bartok-mikrokosmos` | Cronologia estesa al **1926–1939 circa**, corpus 153 pezzi. |
| `audit13-telemann-cpebach-hamburg` | Designazione/successione del 1767 distinta dall'insediamento del 1768. |
| `audit13-cpebach-beethoven-ricezione` | Riclassificata come prova di interesse per il repertorio, non automatica adozione dello stile. |
| `audit8f-gesualdo-stravinskij-monumentum` | Esplicitati i tre madrigali e aggiunte fonti specialistiche. |
| `lotto07-maderna-nono-vierbriefe` | Rafforzata bibliografia specialistica. |
| `infl-wagner-schoenberg` | Aggiunta testimonianza autobiografica. |
| `infl-webern-boulez` | Aggiunta fonte mirata sulla ricezione post-weberniana. |
| `scuola-romana-costanzo-festa` | Aggiunta fonte biografica specifica su Festa. |
| `audit15-berg-dallapiccola-prigioniero` | Declassato a `documentato-con-cautela`: nesso analitico specifico con *Lulu* da dimostrare. |

## Proposte differite e limiti

Le **57 proposte editoriali** formulate nei cinque audit restano storicizzate nei file di accumulo originali; il presente documento costituisce il riferimento per distinguere le 13 rettifiche effettivamente applicate dalle proposte ancora aperte. Evitare di mutare in blocco `group` e `kind` per sole esigenze grafiche. Restano da completare la ricognizione delle 78 scuole non ancora esaminate e la valutazione probatoria deduplicata delle relazioni formative già trattate.

## Integrità verificata prima del commit

- 1280 relazioni in `relazioni.json` sia prima sia dopo.
- Nessuna variazione a `id`, `source`, `target` o `group`.
- Nessun ID duplicato.
- Nessuna modifica a `atlante3d/database/grafo.json`, motore, interfaccia, lenti o `main`.
- Nessuna fusione distruttiva di record semanticamente duplicati.

*Rapporti storici e accumuli rispecchiano lo stato al momento dei rispettivi audit e possono contenere la dicitura «proposta non applicata»: fare riferimento a questo consolidamento per il bilancio successivo.*
