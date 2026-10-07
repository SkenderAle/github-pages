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

## Secondo aggiornamento correttivo — 8 ottobre 2026
Commit grafo: `2b4bfc61770e099c09c9796713f2adc23a295f2a`. Commit staging: `8e924f828db51140e23457b177979874b72c6cb6`.

Sono stati aggiunti sette collegamenti `produzione` corredati di note e URL verificabili: Sammartini–sinfonia (Treccani), Animuccia–musica sacra (Treccani), Merulo–musica per organo (Treccani), Galuppi–opera (Treccani), Felice Anerio–messa (Treccani), Gregorio Allegri–musica sacra (Treccani), Steve Reich–musica vocale (catalogo ufficiale dell'autore: `Music for 18 Musicians`, organico misto, non un brano puramente vocale).

Totale archi generali dopo questa integrazione: 1.096. Verifica integrità dei riferimenti `source`/`target`: nessun estremo inesistente. Il numero di nuove relazioni del ciclo in queste due riprese sale a 10 (3 nel primo aggiornamento e 7 nel secondo).

Correzioni nello staging: il rigetto dei mottetti di Giovanni Croce era improprio e viene sostituito da un candidato in attesa di identificazione bibliografica. Per Gioseffo Zarlino viene esclusa *Le istitutioni harmoniche* dalle opere vocali poiché è un trattato, e si conserva un candidato mottettistico non ancora validato. La voce di Heinrich Isaac (*Innsbruck, ich muss dich lassen*) resta esclusa dal genere mottetto perché è un Lied. Le proposte ancora non documentate rimangono in staging.

## Terzo aggiornamento — Copland e Isaac
- Aaron Copland → `genere-balletto`: *Appalachian Spring* (1944), commissione, prima e materiale musicale documentati dalla Library of Congress. Fonti: https://wwws.loc.gov/exhibits/treasures/tr33a.html e https://www.loc.gov/collections/aaron-copland/about-this-collection/
- Heinrich Isaac → `genere-lied`: *Innsbruck, ich muss dich lassen*, Lied polifonico tedesco, non mottetto. Fonti: https://imslp.org/wiki/Innsbruck_ich_muss_dich_lassen_(Isaac,_Heinrich) e https://germanhistorydocs.org/de/von-den-reformationen-bis-zum-dreissigjaehrigen-krieg-1500-1648/heinrich-isaac-innsbruck-ich-muss-dich-lassen-16th-century
- Commit del grafo: `f00c40ac1b60c30c69c87c7f75cf4ebd4f087d3a`; commit staging: `ff7108bf4b21b2ebc1420039fc918e44b66dc116`.
- Totale nuovi archi produttivi delle riprese successive al rapporto iniziale: 12 (3 + 7 + 2). Totale archi generali: 1.098. Nessun riferimento a nodi inesistenti. Nessuna modifica a `main`.

## Quarto aggiornamento correttivo — 8 ottobre 2026
Commit del grafo: `1d8b9d7609e55088a77b5fc84e85cc6d575680ec`.

Quattro nuove relazioni `produzione` direttamente sostenute da editori di partiture:
1. Paul Hindemith → opera, *Mathis der Maler* (1934–35): Schott, https://www.schott-music.com/en/mathis-der-maler-no34862.html
2. Paul Hindemith → sinfonia, *Symphonie Mathis der Maler* (1934): Schott, https://www.schott-music.com/en/symphonie-mathis-der-maler-no152686.html
3. Carl Orff → cantata, *Carmina Burana* (1936), specificamente cantata scenica: Schott, https://www.schott-music.com/en/carmina-burana-noc742736.html
4. Witold Lutosławski → concerto, *Concerto per orchestra* (1954), genere da distinguere dal concerto con solista: Wise Music Classical, https://www.wisemusicclassical.com/work/7702/

Archi generali: 1.102. Nuove relazioni di produzione nell'attuale serie di riprese: 16 (3+7+2+4). Controllo strutturale: nessun estremo di arco privo di nodo. I collegamenti non ancora verificati restano sospesi; nessuna modifica al ramo `main`.

## Quinto aggiornamento correttivo — 8 ottobre 2026
- Samuel Scheidt → musica per organo: *Tabulatura nova* (1624), edizione Schott, https://www.schott-music.com/en/tabulatura-nova-noc324558.html.
- Henryk Mikołaj Górecki → sinfonia: Sinfonia n. 3 op. 36 per soprano e orchestra, catalogo Boosey & Hawkes, https://www.boosey.com/cr/music/Henryk-Mikolaj-Gorecki-Symphony-No-3-Symphony-of-Sorrowful-Songs/5629.
- Nuovi archi operativi di questa sessione: 2. Nuovi archi nelle riprese successive alla prima ricognizione: 18. Totale archi generali: 1.104. Nessun estremo di arco inesistente. Ramo `main` invariato.
- Commit grafo: `2b9f65116b00a376259d3f047847757c784aeb4c`; commit staging: `96ad5606550031141ed63b181a51bf94c757e3ec`.
