# MUSURGIA MUNDI — Audit correttivo · Fase 1 di consolidamento

Data: 8 ottobre 2026 · Ramo: `audit-produzione-correttivo-01`.

## Risultato effettivamente osservato nel grafo
- 753 nodi complessivi, 331 compositori, 1222 archi.
- 259 archi `produzione`: tutti hanno `status: documentato`, una nota esplicativa e almeno una fonte in `sources`. **È un controllo strutturale e non un riscontro bibliografico autonomo di ciascuna fonte.**
- Corrispondenza estremi source/target: 0 errori; coppie duplicate con stesso source-target-kind: 0.
- Archivio `relazioni.json`: 1280 collegamenti specialistici conservati invariati. La loro presenza non equivale a collegamento `produzione` verificato nel grafo generale.

## Copertura produttiva per ordine persistente dei nodi compositore

| Gruppo | Autori | Con almeno 1 arco produzione | Senza alcun arco produzione | Archi produzione |
|---|---:|---:|---:|---:|
| 1–100 | 100 | 100 | 0 | 106 |
| 101–200 | 100 | 100 | 0 | 142 |
| 201–300 | 100 | 0 | 100 | 0 |
| 301–331 | 31 | 11 | 20 | 11 |

## Interpretazione
- 1–200: copertura produttiva minima archiviata, NON repertorio di generi esaustivo, né prova di una verifica bibliografica fresca di tutti gli archi.
- 201–300: i cento nodi sono presenti, ma **nessuno** è collegato a un genere con arco di produzione nel grafo generale. Gli audit 05, 06 e 07 hanno qui fornito *proposte* e rilievi genealogici, non patch documentali.
- 301–331: 11 con relazione produttiva (i nuovi rinascimentali), 20 senza relazione; audit correttivo successivo.
- Repertorio minimo storico: 224/332 individuati per nome o alias, 108 ancora da ricercare.

## Priorità strutturali
1. Lotto 201–300: controllo individuale e integrazione di relazioni opera–genere documentate, con opere rappresentative. Evitare nodi misti per genere, tecnica, poetica o mezzo.
2. Le figure con ruolo prevalente di insegnante/direttore (es. Reiner, Hambitzer) non ricevono un arco `produzione` per deduzione.
3. Controllare omonimie prima di attribuzioni: Johann Christoph Bach, Josef Suk; consultare fonti per Walter Klein e Giacinto Sallustio.
4. Evitare associazioni troppo vaste fra opera, operetta, musical, concerto, sinfonia, musica concreta, mezzi elettronici: usare `note` per le specificazioni in attesa di una revisione della tassonomia.
5. Continuare senza modificare `main`, `relazioni.json`, le tre lenti o il motore grafico.

## Regola per la chiusura delle fasi
Uno schema di copertura segnala la presenza di un legame documentato. La chiusura storico-musicologica richiede verifica della bibliografia, repertorio plurimo, differenze tra sedi/periodi della carriera, influenze e traiettorie di trasmissione; non si sostituisce con un solo arco.
