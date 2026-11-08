# Musurgia Atlantis — Verbale di chiusura e collaudo logico

**Data:** 8 novembre 2026  
**Branch:** `main`  
**Commit storico di riferimento:** `12578a0726873af6c6c315d0e8c1089c363224fd`  
**Decisione:** audit storico-filologico **CHIUSO al Lotto 210**. Il collaudo automatico strutturale e della navigazione simulata è **POSITIVO**. Il collaudo grafico su dispositivo reale resta **APERTO**.

## Bilancio certificato del dataset

| Indicatore | Valore |
| --- | ---: |
| Nodi | 754 |
| Archi | 1.718 |
| Flag indipendenti | 586 |
| Gate di riscontro storico indipendente | 550 |
| Gate esplicitamente sospesi | 125 |

Flag e gate sono metriche diverse, da non sommare. La sospensione è una scelta filologica, non un debito da eliminare artificialmente.

## Controlli statici

| Prova | Esito |
| --- | --- |
| ID dei nodi unici | PASS |
| ID degli archi unici | PASS |
| Triplette relazionali uniche | PASS |
| Nessun arco orfano | PASS |
| Nessun autoanello | PASS |
| Nomi dei nodi presenti | PASS |
| Fonti per ogni arco con flag indipendente | PASS |
| Il sito carica grafo.json | PASS |
| I livelli I–V sono previsti | PASS |
| I capitoli non fungono da ponti | PASS |
| Le relazioni generiche sono escluse dopo I | PASS |
| Le etichette I livello sono previste | PASS |
| Esiste il renderer Canvas | PASS |
| Il Canvas dispone i nodi nel volume | PASS |
| Il fallback include gestione gesti | PASS |

Tutti i 15 controlli statici superati. L'esistenza di codice per etichette, filtri e gesture non costituisce da sola prova della loro resa visiva.

## Test funzionali su BFS I–V

Sono stati simulati i percorsi con i filtri ordinari. Al secondo livello e successivi, solo archi specifici fra persone/opere possono fare da ponti; i capitoli non possono collegare indirettamente gli autori. Il raggiungimento di un nodo non dimostra influenza diretta.

| Radice | I | II | III | IV | V |
| --- | ---: | ---: | ---: | ---: | ---: |
| Mozart | 17 | 23 | 27 | 39 | 56 |
| Bach | 12 | 15 | 16 | 19 | 19 |
| Vivaldi | 7 | 8 | 9 | 13 | 15 |
| Beethoven | 21 | 40 | 49 | 56 | 61 |
| Wagner | 14 | 19 | 24 | 29 | 41 |
| Mahler | 4 | 6 | 10 | 14 | 25 |
| Messiaen | 4 | 9 | 11 | 11 | 11 |
| Luciano Berio | 3 | 8 | 13 | 23 | 26 |

**Esito:** nessuna violazione delle regole di attraversamento nei percorsi campione. Le colonne indicano nodi cumulativamente raggiungibili entro ciascun livello, non nuovi nodi per livello.

## Anomalie e verifiche pendenti

- **Nodo isolato:** `luogo:bayreuth-festspielhaus` — Festspielhaus di Bayreuth.
- **Nodo isolato:** `pers:georges-melies` — Georges Méliès.
- **Nodo isolato:** `senso:ballet-de-cour` — Ballet de cour.

Nella panoramica «Tutta la rete» gli isolati non compaiono perché i nodi vengono ricavati dagli estremi degli archi; rimangono ricercabili e focalizzabili. Non creare archi fittizi per nasconderne l'isolamento.

**Collaudo visivo e gestuale non certificato:** visualizzazione reale su desktop e Android, prestazioni WebGL/Canvas, rotazione, zoom, leggibilità e corretta occlusione delle etichette anteriori/posteriori, accessibilità e risposta dei filtri al tocco. L'ambiente usato non ha consentito di aprire e usare il sito pubblico tramite browser interattivo; non si interpreta questo limite come guasto del sito.

**Sequenza consigliata di verifica manuale:** aprire https://musurgiamundi.com/musurgia-atlantis/, cercare Mozart, verificare i nomi di I livello, aumentare progressivamente fino a V, ruotare la nebulosa e controllare che i nomi posteriori non coprano quelli anteriori. Ripetere con Messiaen e Luciano Berio. Provare su smartphone rotazione e zoom con uno/due dita, schede nodo, pulsanti e filtri.

## Decisione finale

**Revisione storica: CHIUSA.** I lotti successivi al 210 non fanno parte di questo ciclo. **Collaudo logico e strutturale: SUPERATO. Collaudo grafico e gestuale: IN ATTESA DI PROVA REALE.** Nessuna modifica a `grafo.json`, all'interfaccia, ai menu, alle mappe, ai capitoli o al protocollo.
