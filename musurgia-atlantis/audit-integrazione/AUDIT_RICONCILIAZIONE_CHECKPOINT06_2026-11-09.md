# Musurgia Atlantis — Checkpoint 06
## Audit del renderer esistente, filtro radicato corretto e anteprima isolata

**Data:** 9 novembre 2026 · **Branch:** `main` · **Ambito di scrittura:** esclusivamente `musurgia-atlantis/audit-integrazione/`.

### 1. Scoperta nel codice HTML di produzione (sola lettura)
Nel file `musurgia-atlantis/index.html` (blob letto `1a1ab0372a0aad0408cdbe94e0e8f4f182bd8d7a`) la funzione `buildVisible` mantiene la vecchia ricerca per livelli. Dopo il I livello la condizione `atlasMayBridge` consente il passaggio attraverso **persone oppure opere**, quando `atlasIsSpecific` ammette l'arco. L'insieme `tiers` deriva da qualità editoriali `trattazione/menzione`, non da una prova autonoma della pertinenza al nodo radice. La funzione protegge correttamente i capitoli come non attraversabili nella modalità vicinanze, ma questo non basta a impedire le genealogie spurie di profondità superiore.

Esempio verificato: partendo da Mozart, si può passare attraverso un'opera e Haydn e giungere a Beethoven al III livello. **I singoli fatti possono essere corretti; la catena non conferisce automaticamente evidenza pertinente a Mozart.** Nessuna modifica al file HTML originale.

### 2. Confronto effettivo sul medesimo JSON pubblico (non browser)
Entrambe le selezioni sono state calcolate in V8 leggendo il blob pubblico completo di `musurgia-atlantis/grafo.json`, SHA `4863b3fe263154387de3388c0b813b5f94546f12` (**754 nodi / 1.718 archi**). La colonna "attuale" riproduce la funzione di ricerca nel sorgente HTML e i filtri iniziali `trattazione` + `menzione`; **non** è un'osservazione del rendering visivo in un browser.

| Radice | Logica HTML esistente: nodi / archi | Pilota radicato 06: nodi / archi |
|---|---:|---:|
| Mozart | **48 / 55** | **15 / 18** |
| Messiaen | 11 / 12 | 7 / 8 |
| Beethoven | 54 / 61 | 31 / 33 |
| Vivaldi | 13 / 12 | 6 / 5 |
| J. S. Bach | 13 / 12 | 9 / 8 |

I nodi rimossi dalla singola **vista radicata** non sono cancellati dal patrimonio: possono emergere come radici autonome, tramite altra opera specifica, o con testimone documentale riferito esplicitamente alla radice.

### 3. Gate storici: evitata la perdita delle varianti verificate
Su **586 archi** con `historical_verified_independently:true` nel JSON Atlantis:
- **7** hanno almeno un estremo editoriale e devono restare soltanto patrimonio del sito;
- **577** sono rapporti storici specifici, inclusi gli archi con gate di certificazione specializzati;
- **2** sono confronti verificati, ma **non causali** (due opere diverse costruite su uno stesso soggetto).

Il prototipo Checkpoint 05 ammetteva solo `quality_gate=riscontro_storico_indipendente`, perdendo dalla vista altre **29** relazioni non editoriali con riscontro già registrato. Il Checkpoint 06 conserva questi casi senza cancellare o alterare alcun record: le versioni di *Orfeo ed Euridice*, le redazioni e ouverture di *Fidelio*, le ricostruzioni/verifiche relative a Rossini, Paisiello, Ravel e i completamenti postumi. I **2 confronti non causali** sono mostrati soltanto come contesto e non autorizzano percorsi automatici.

Il **corpo ammesso al pilota** è di **579** archi (577 specifici + 2 confronti). Gli altri **1.139** archi Atlantis non sono distrutti: restano disponibili nella base originale, ma sono fuori dal filtro storico radicato, inclusi materiali editoriali, non attestati o con gate ancora non adatto.

### 4. Regressione scoperta e corretta nel Checkpoint 06
Il primo motore del Checkpoint 06 aveva ancora una falla: la relazione verificata fra l'*Otello* di Rossini e l'*Otello* di Verdi, pur classificata come confronto non causale, introduceva l'opera di Verdi al livello I e consentiva attraverso di essa l'accesso automatico al compositore Verdi e al librettista Boito al livello II. **Questo era illecito per pertinenza radicata, pur non inventando i fatti singoli.**

Correzione committata nel motore `ROOTED_RELEVANCE_CHECKPOINT06.cjs` (commit `705866c274258409597f816b1cb8a34e4d3d17dc`):
- il nodo raggiunto tramite `direct_comparison` è **foglia visibile**, non ponte;
- radice Rossini `opera:otello-rossini-1816`: **tre nodi** (*Otello* Rossini, Rossini, *Otello* Verdi) e **due archi**; **non** compaiono Verdi persona né Boito;
- dopo un **pivot esplicito** sull'*Otello* di Verdi, il suo nuovo I livello mostra invece Verdi e gli altri collegamenti specifici;
- regressione Mozart invariata: **15 nodi / 18 archi**, profondità massima II.

### 5. Registro prove radicate
Creato `REGISTRO_PROVE_RADICATE_CHECKPOINT06_2026-11-09.json`, con schema `root-evidence-v1` e **zero** testimoni approvati. Non si deducono prove dai nomi, dagli ID o dalla presenza di vicini; la simulazione del testimone approvato richiede radice, percorso completo, ID dell'arco, dichiarazione specifica della radice, URL e due revisori distinti. La doppia revisione è un **contratto di staging, non una certificazione storica già avvenuta**. Il file deve essere gestito editorialmente e non generato dall'UI. Parametri `rootWitnesses` inviati dall'interfaccia non sono letti dal nuovo motore.

Profondità totale da 0 a 5, limiti per tipo, pivot e possibilità di attenuare le categorie senza cancellare i ponti del percorso sono disponibili nel motore pilota. La profondità effettiva resta al II livello finché il registro è vuoto.

### 6. Prove e materiali pubblicati
- `ROOTED_RELEVANCE_CHECKPOINT06.cjs`: libreria Node con categorie separate, verifica ID duplicati, archi e fonti, gate storico, pivot e registro.
- `ROOTED_RELEVANCE_CHECKPOINT06.browser.js`: stessa logica con esportazione browser, file `.js` per evitare blocchi MIME del `.cjs`.
- `CHECKPOINT_RICONCILIAZIONE_06_GATE_V8_2026-11-09.json`: **24/24 asserzioni V8 iniziali**, cui si aggiungono **3 controlli mirati post-correzione** sul caso *Otello* e sulla stabilità Mozart. Non confondere un conteggio cumulativo con un'esecuzione unica di tutti i test dopo il patch.
- `TEST_ROOTED_RELEVANCE_CHECKPOINT06.cjs`: test Node ripetibile sul clone completo, pubblicato e validato sintatticamente, **non ancora eseguito in Node su quel clone**.
- `PREVIEW_RADICATA_CHECKPOINT06.html`: pagina di prova isolata, non collegata all'Atlante pubblico; carica `../grafo.json`, il registro e il renderer Canvas 3D `../compat-graph.js`; selezione della radice, livelli per tipologia, schede dei rapporti con fonti e pivot esplicito.

**Anteprima GitHub Pages (accessibilità non ancora confermata dal browser automatico):**
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html

**Attenzione:** la pagina di prova mostra *soltanto i 754 nodi già pubblici*; Leopold Mozart non vi appare finché i record delle 509 persone in staging non saranno migrati e certificati.

### 7. Limiti residui e prossimo Checkpoint 07
- Il runtime locale dispone di Node.js 22, ma **non può risolvere `github.com`**: `git ls-remote` ha restituito `Could not resolve host: github.com`. Non è stato possibile acquisire un clone e lanciare qui il test Node sull'intero JSON.
- **Nessun test browser/Android effettivo** sull'anteprima: sono stati controllati i blocchi JavaScript sintatticamente, non WebGL/Canvas, gesture, hover/tap o caching GitHub Pages.
- Le 3.856 relazioni legacy e i 509 record-persona restano nello staging già documentato; non sono fusi; il registro delle 20 sovrapposizioni e le cautele Tallis–Byrd e Scarlatti non cambiano.
- La completezza della `relationDetail` in entrambi i versi va verificata sull'import legacy, perché alcuni archi Atlantis pubblici possiedono soltanto `description`; **nessuna frase inversa viene inventata**.

**Prossima ripresa:** eseguire lo script Node in una sessione con clone completo, verificare la pagina di prova su desktop e Android, confrontare compatibilità con `prepare/byId` e i filtri per tipologia, poi preparare un ponte di migrazione delle spiegazioni legacy `forward/reverse`, mantenendo intatti i 210 lotti, 3.856 relazioni, 1.718 archi Atlantis, 509 persone, 115 video, 207 associazioni e 537 URL con ancora.

**Produzione:** `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`, `atlante3d/` e le pagine editoriali non modificati in questo checkpoint.
