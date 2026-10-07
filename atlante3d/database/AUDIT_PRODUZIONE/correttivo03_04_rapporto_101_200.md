# Audit produzione — ciclo 101–200 · rapporto di avanzamento

Data: 2026-10-08. Ramo: `audit-produzione-correttivo-01`. Nessuna modifica a `main`.

## Consistenza effettivamente controllata
- Per i compositori 101–150 sono stati letti e ricontrollati a livello strutturale i 50 archi `produzione` già presenti con `audit_batch: correttivo03`.
- Di questi, 48 restano `da_verificare` e 2 sono `documentato`: questa etichetta è lo stato presente, non una nuova validazione bibliografica.
- Il file `correttivo03_macroblocco50_staging.json` resta una bozza. Gli archi già presenti nel grafo non vanno conteggiati come nuove integrazioni di questa sessione.
- Per i compositori 151–200 è stato creato `correttivo04_macroblocco50_staging.json`, contenente 50 candidati da confrontare con cataloghi di opere.
- Due candidati sono stati respinti già in preparazione: Heinrich Isaac (Lied non trasformabile in mottetto) e Giovanni Croce (opera teorica di Zarlino non attribuibile come composizione vocale di Croce). In particolare correggere il candidato 35: per Croce ricercare invece le sue canzonette, madrigali o mottetti con una fonte adeguata.
- Le fonti associate alle relazioni preesistenti non provano automaticamente le opere proposte. Nessuno dei 50 candidati del macroblocco 04 è pubblicato come relazione documentata.

## Anomalie bibliografiche note del macroblocco 03
- Berlioz / Symphonie fantastique punta a una pagina generica sull'opera.
- Camille Saint-Saëns / Sinfonia n. 3 punta a una pagina generica sull'opera.
- Georges Bizet / Carmen usa una pagina generica sul genere, non un catalogo di Bizet.
- Luciano Berio / Visage punta alla biografia di Steve Reich.
- Darius Milhaud / Christophe Colomb punta alla biografia di Steve Reich.
- Carl Maria von Weber / Der Freischütz punta a una pagina su Wagner.
- Debussy / Pelléas et Mélisande punta a una pagina su Stravinskij.
- Molte altre fonti sono relazioni contestuali, non verifiche puntuali della produzione.

## Stato delle modifiche di questa sessione
- 100 compositori nell'ambito dei due macroblocchi, ma NON 100 profili bibliograficamente conclusi.
- 50 archi preesistenti ricogniti nel macroblocco 03.
- 50 candidati nuovi nello staging del macroblocco 04, di cui 2 esplicitamente respinti.
- Nuovi archi operativi: 0. Nuovi nodi produttivi: 0.
- `grafo.json` e `relazioni.json` non modificati, perché sarebbe scorretto promuovere i candidati non verificati.
- Passaggio successivo: verificare cataloghi d'opera per entrambi i blocchi, correggere gli archi del 03, poi integrare quelli del 04 documentati con note e fonti direttamente pertinenti.

L'architettura delle lenti resta invariata. Il repertorio storico esterno resta rinviato alla conclusione del ciclo correttivo.

## Aggiornamento correttivo — 8 ottobre 2026
Commit operativo: `3407a607bc88f8b70401ceb8b71aadab700c5606`.

Quattro collegamenti produttivi del macroblocco 03 hanno ricevuto una sostituzione della fonte incongrua o generica con un documento direttamente pertinente, aggiornando la nota e lo stato a `documentato`:
- Bizet → opera, *Carmen*: Metropolitan Opera.
- Carl Maria von Weber → opera, *Der Freischütz*: Metropolitan Opera.
- Claude Debussy → opera, *Pelléas et Mélisande*: Teatro alla Scala.
- Camille Saint-Saëns → sinfonia, Sinfonia n. 3 op. 78: Berliner Philharmoniker.

Tre nuove relazioni di produzione del macroblocco 04 sono state inserite come documentate:
- George Gershwin → opera, *Porgy and Bess*: Metropolitan Opera.
- Philip Glass → opera, *Einstein on the Beach*: catalogo ufficiale del compositore.
- Béla Bartók → concerto, *Concerto per orchestra* Sz 116: Berliner Philharmoniker.

Esito del controllo strutturale al momento del commit: 1089 archi generali, nessun estremo mancante fra gli archi del grafo. Nessuna modifica al ramo pubblico `main`.

Rimangono da verificare gli altri rapporti opera/genere e le fonti solo contestuali, senza considerarli approvati per analogia.
