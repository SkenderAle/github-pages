# Audit repertorio minimo — checkpoint aggiornato, 8 ottobre 2026

## Presenze verificabili e lacune
- Repertorio obbligatorio unico: **332 figure** (molte ricorrono in più epoche).
- Figure individuate nel grafo per nome/alias: **213**.
- Figure non ancora individuate: **119** (assenza secondo confronto anagrafico, da approfondire per pseudonimi e grafie minoritarie).
- Grafo nel ramo di audit: **320 compositori**, **742 nodi totali**, **1197 relazioni totali**.

| Periodo | Individuati | Non individuati | Richiesti |
|---|---:|---:|---:|
| Medioevo | 22 | 0 | 22 |
| Rinascimento | 37 | 11 | 48 |
| Barocco | 37 | 24 | 61 |
| Classicismo | 22 | 10 | 32 |
| Romanticismo e tardo Romanticismo | 50 | 20 | 70 |
| Primo Novecento e avanguardie storiche | 31 | 20 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

## Primo macroblocco medievale chiuso: 14 su 14 figure inizialmente assenti
- **Figure storiche / teorici, NON inserite come compositori**: Gregorio Magno (tradizione gregoriana, non paternità del repertorio), Guido d'Arezzo (notazione e teoria), Franco di Colonia (notazione mensurale).
- **Compositori e poeti-musicisti**: Notker Balbulus, Bernart de Ventadorn, Philippe de Vitry, Johannes Ciconia, Guglielmo IX d'Aquitania, Raimbaut de Vaqueiras, Comtessa de Dia, Walther von der Vogelweide, Lorenzo da Firenze, Antonio Zacara da Teramo, John Dunstaple.
- Nuovi nodi: **14** (11 tipo `compositore`, 3 tipo `persona`); nuovi archi: **19**.
- Fonti nominate all'interno di ogni nodo e arco (principalmente Treccani e BnF). Gli archi introdotti documentano soltanto ruoli di epoca o appartenenze storicamente fondate; opere e genealogie ulteriori sono da approfondire singolarmente.
- Ricordare che nel repertorio medievale l'anonimato, l'incertezza delle paternità e il rapporto fra testo poetico e notazione non consentono di generalizzare una singola prova a un intero corpus.
- Commit: `1226ec056aa930dc525f719b442b8fb4f8459060` e `ff0ae29f3e92f0051dbfdaa076001388e2dae4bb`.

## Coda di lavoro
- Il file `audit_minimi_prossimi100_staging_20261008.json` mantiene i 100 nomi iniziali da ricontrollare: **8 già integrati, 92 ancora da esaminare**.
- I restanti 27 nominativi fuori dalla prima coda non sono scartati.
- Proseguire in epoche successive (Rinascimento, Barocco ecc.) su profili e produzione; non dichiarare concluso un profilo solo per l'esistenza di un nodo.
- Produzione, pedagogia, genealogie e collaborazioni restano audit indipendenti ma collegati; distinguere collegamenti documentati, provvisori, confutati.
- Le tre lenti e l'interfaccia NON vengono modificate: categorie e agglomerazioni saranno valutate al termine del giro di audit.
- `main` NON modificato.
