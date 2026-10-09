# Musurgia Mundi — Audit 20: consolidamento delle proposte 18–19

Data: 9 ottobre 2026. Ramo: `audit-produzione-correttivo-01`.
Base verificata: `291f779847422b215403ec5a92c8bc289d1c455a`.

Sono state esaminate le 28 proposte residue degli audit 18–19 e riconciliati con il database corrente i loro 78 record distinti della lente Scuole, posizioni 9–86 della matrice congelata. Questo consolidamento corregge note, natura delle relazioni e pertinenza delle fonti; non costituisce una nuova certificazione integrale dei 78 record.

| Esito delle proposte | Numero | Effetto sul database |
| --- | ---: | --- |
| Correzione conclusa nel perimetro della proposta | 19 | Record aggiornato |
| Correzione prudenziale con quesito storico ancora aperto | 4 | Record aggiornato; divergenza esplicitata |
| Distinzione già presente nel record | 4 | Nessuna modifica |
| Sovrapposizione semantica ancora aperta | 1 | Nessuna fusione o cancellazione |
| Totale | 28 | 23 record aggiornati |

Le proposte editoriali chiuse sono 23, contando le 19 correzioni concluse e i quattro casi già adeguati. I quesiti ancora aperti sono cinque. Il numero dei record aggiornati coincide con quello delle proposte chiuse, ma misura un risultato diverso.

Gli interventi rendono più specifiche le prove per Scarlatti, Maderna, Monteverdi, Saint-Saëns, Casella, Bartók, Marcello, Clara Schumann, Rubinstein e Festa. Per C. P. E. Bach si distingue l'Empfindsamkeit dal galante; per Franck si descrive il magistero; per Soler la probabilità del discepolato viene separata dalla tradizione tastieristica. Sono precisati i ruoli collaborativi della Günther-Schule e i limiti della prova istituzionale su Ives a Yale.

Galuppi e la ricezione napoletana, Dittersdorf nel contesto viennese, Czerny e la didattica tecnica, Neefe e Bonn erano già formulati in modo adeguato alla rispettiva proposta. Per Dittersdorf il controllo è semantico: nessuna nuova certificazione delle fonti biografiche.

## Questioni conservate aperte

| Record | Verifica da completare |
| --- | --- |
| `lotto01-scuola-caldara-vienna` | Decorrenza della carica: confronto dei documenti amministrativi, distinguendo trasferimento e nomina |
| `lotto02-sc-galuppi-ospedali` | Inizio dell'incarico agli Incurabili: confronto archivistico delle cronologie divergenti |
| `audit6-scriabin-mosca` | Termine della docenza: le due schede istituzionali differiscono; non provata la distinzione fra durata amministrativa e attività effettiva |
| `audit8-koechlin-smi` | Separare genesi costitutiva, manifesto pubblico e avvio dei concerti; le fonti non sono tutte consultabili integralmente |
| `audit8h-boito-scapigliatura` | Confronto tassonomico con `audit5-boito-scapigliatura`; conservati i due nodi e le due relazioni |

Le fonti effettivamente lette, i riferimenti puntuali, gli esiti per ID e le impronte dei record sono in [audit20_ripresa78_scuole_20261009_verifiche.json](audit20_ripresa78_scuole_20261009_verifiche.json). Le schede IMSLP sono state controllate nei metadati, senza collazione integrale delle partiture. La prova Yale è una ricostruzione istituzionale, non una consultazione dei registri originali d'esame.

## Integrità e controlli

Conservati 860 nodi, 1.670 archi nel grafo, 438 compositori e 1.280 relazioni specialistiche. `grafo.json` è identico alla base; nessuna relazione aggiunta o eliminata. Identificativi, ordine, estremità, gruppi, status e URL precedenti sono preservati. Tutti i record fuori dalle 28 proposte sono identici alla base.

I tre verificatori del repository terminano con codice 0. `verifica-relazioni.mjs` conferma l'integrità strutturale e conserva i 14 avvisi preesistenti sulle relazioni da verificare e i quattro sulle persone senza lente. `verifica-nomi.mjs` rileva zero errori e 249 schede ancora da verificare. `verifica-copertura.mjs` mantiene 384 relazioni Scuole, 141 compositori senza Scuole e 129 isolati nelle lenti: sono lacune pregresse, non esiti certificati di questo audit.

Il lavoro è consolidato sul ramo degli audit. `main` osservato a `07c436faf10ff22dff10d42f73337dc910aa7fa6` non è oggetto di modifica o integrazione.

## Checkpoint per la ripresa

Gli staging e il manifest del 8 ottobre restano fotografie storiche delle proposte allora non applicate. Per gli audit 18–19, questo rapporto e il registro Audit 20 descrivono l'esito successivo. I gradi P/B/C/Q dei 78 record sono riportati senza promozioni automatiche.

Restano il bilancio deduplicato delle proposte 13–17, le 49 relazioni formative anteriori al 13, le cinque questioni qui elencate e la verifica qualitativa delle 218 relazioni produttive della matrice congelata. La ricognizione 377/377 del primo macroblocco non equivale a certificazione storica completa.
