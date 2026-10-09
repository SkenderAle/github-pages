# MUSURGIA MUNDI — checkpoint di passaggio dalla chat «Audit di 100 compositori»

## Aggiornamento di ripresa — 2026-10-09

Il riferimento corrente per le proposte degli audit 18–19 è [Audit 20](audit20_ripresa78_scuole_20261009.md), con [registro delle verifiche per ID](audit20_ripresa78_scuole_20261009_verifiche.json).

- Riconciliati 78 record Scuole e valutate 28 proposte: 23 record aggiornati, quattro già adeguati, una sovrapposizione semantica conservata aperta.
- Delle 23 modifiche, quattro esplicitano divergenze cronologiche ancora da risolvere. In totale restano cinque quesiti aperti.
- Database corrente: 860 nodi, 1670 archi nel grafo, 438 compositori, 1280 relazioni specialistiche. Nessun nuovo arco o nodo in questo consolidamento.
- Verificatori relazioni, nomi e copertura completati con codice 0; avvisi e lacune pregresse riportati nel rapporto.
- Gli staging e il manifest del 8 ottobre documentano lo stato storico precedente all'applicazione. Non usare il loro conteggio di 28 proposte non applicate come stato corrente.
- Rimangono il bilancio delle proposte 13–17 e delle 49 relazioni formative anteriori al 13, i cinque quesiti Audit 20 e la verifica qualitativa delle 218 relazioni produttive della matrice congelata.

## Checkpoint storico — 2026-10-08

Data: 2026-10-08.
Repository: SkenderAle/github-pages.
Ramo di lavoro: audit-produzione-correttivo-01.
IMPORTANTE: NON integrare automaticamente in main. Il sito pubblico resta invariato.

## Stato verificato al checkpoint storico
- `atlante3d/database/grafo.json`: 728 nodi, 1178 archi.
- Audit di produzione dei compositori 101–200: copertura 100/100 con almeno una relazione produttiva marcata `documentato`.
- Densificazione di questo gruppo: 41 archi aggiuntivi; il rapporto cumulativo dichiara la chiusura documentale di tutti e 41, anche con precisazioni d'autorialità.
- Ultimo commit di validazione del rapporto precedente: `0dead5842151c67cae945bd8ac2d48744ffa5174` (Leonardo Leo, Carl Orff, Sergej Rachmaninov); il report è `atlante3d/database/AUDIT_PRODUZIONE/correttivo03_04_rapporto_101_200.md`.
- Il report distingue correttamente «copertura minima di una relazione documentata» da «catalogazione esaustiva di tutti i generi».
- Il branch di lavoro è separato da `main`, e i relativi commit non devono essere pubblicati senza revisione.

## Principi editoriali e di modellazione da conservare
1. Ogni compositore va ricercato attraverso tutte le attività produttive documentate (opera, sinfonia, concerto, musica sacra, da camera, pianistica ecc.), NON soltanto una categoria esemplificativa. Il caso Vivaldi è l'esempio del rischio da evitare.
2. Nessun arco arbitrario: attribuzione, opera concreta, data e/o organico ove pertinenti, genere adeguato, URL di catalogo o fonte direttamente pertinente e nota di disambiguazione.
3. Le connessioni storiche sono da distinguere dalle pure appartenenze. Ricercare anche maestri, allievi, influenze effettive, scuole, tradizioni e relazioni genealogiche musicali.
4. Non alterare in questo giro l'impostazione visuale delle tre grandi lenti dell'Atlante. Le sottocategorie produttive sono struttura dei dati e possibili criteri di ricerca, NON nuove lenti automaticamente visibili. La riorganizzazione/agglomerazione delle categorie va discussa a fine ciclo.
5. Macroblocchi di audit preferibilmente di 100 compositori, evitando resoconti frammentati; salvare checkpoint comprensibili e commit con integrità verificata.
6. Tenere distinguibili stato `documentato`, `da_verificare`, candidati scartati e attribuzioni che necessitano disambiguazione. I dati provvisori non sono automaticamente pubblicabili.

## Ripresa operativa
- Prima di nuovi inserimenti leggere `grafo.json` e il rapporto cumulativo 101–200 sul branch per evitare duplicati e rispettare i tipi di nodi/arco esistenti.
- Il lavoro 101–200 non va ripetuto da zero. Una futura densificazione *esaustiva* resta possibile, poiché 100/100 e 41 archi integrati NON equivalgono all'inventario integrale delle opere.
- Prossima scelta ragionevole: audit 201–300 se gli identificativi sono presenti; in parallelo identificare lacune qualitativamente importanti negli autori già censiti. Non inventare liste ordinali che non esistono negli artefatti.
- Verificare l'integrità delle estremità source/target, eventuali coppie duplicate, congruenza fra genere e opera e corrispondenza diretta delle fonti. Prima del commit confrontare il ramo remoto aggiornato.
- Separare analisi e staging dalle sole relazioni storicamente convalidate.

## Nota sul passaggio di chat
Questa nota conserva i dati e i vincoli operativi necessari a continuare l'audit senza dipendere dalla precedente conversazione. Non certifica che eventuale testo generato ma non committato nell'altra chat sia recuperato.
