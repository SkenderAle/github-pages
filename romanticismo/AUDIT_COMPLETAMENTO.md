# Musurgia Mundi — Romanticismo
## Registro di completamento e collaudo

**Verifica:** 16 ottobre 2026  
**Repository:** `SkenderAle/github-pages` — branch `main` soltanto  
**Pagina:** `romanticismo/index.html`  
**Stato complessivo: INCOMPLETO — struttura completa, contenuti e collaudo ancora aperti**

> Questo registro separa rigorosamente la **presenza di una sezione**, la sua **maturità editoriale**, la **verifica delle fonti** e il **collaudo nel browser**. Non equipara mai il numero dei video al completamento del Romanticismo. Aggiornarlo dopo ogni lotto sostanziale sul percorso.

### Obiettivo editoriale non negoziabile

Il protagonista è il **Romanticismo come periodo storico e culturale**, nei suoi rapporti con letteratura, arti visive, filosofia, città, economia della musica, pubblico, nazionalismi, linguaggi e forme musicali. Non una galleria di biografie e nemmeno un sito che assuma un tono esclusivamente scolastico.

Dalle radici settecentesche (Sturm und Drang, Classicismo, Beethoven) al rapporto con Post-romanticismo e Novecento; sinfonismo, Lied, pianoforte, virtuosismo, melodramma, scuole nazionali, musica a programma, tecnologie e forme della socialità.

**Regole di produzione:** prosa adulta e argomentata; nessuna banalizzazione; esercizi soltanto dentro contenitori facoltativi «Per iniziare»; fonti e versioni dichiarate; nessun autoplay; nessun collegamento a destinazioni inventate o approssimative; unicamente `main`; commit per lotti sostanziosi.

### Quadro dei capitoli

| N. | Capitolo (ID) | Valutazione editoriale provvisoria | Verifiche necessarie |
|---|---|---|---|
| 1 | Una rivoluzione che viene da lontano (`rivoluzione`) | Sviluppato | Controllo della proporzione fra prologo storico, Beethoven, testimonianze e confronti |
| 2 | L’artista, la città, il pubblico (`artista-citta`) | **Da approfondire** | Città, circuiti concertistici, impresari, editoria, pianoforte domestico, donne musiciste; nessi sociali più documentati |
| 3 | La voce e l’intimità: il Lied (`lied`) | Impostato, da approfondire | Poesia, Lied, Schubert, Schumann, rapporto con il ciclo e con l'audioteca «La parola e il canto» |
| 4 | Chopin e il pianoforte (`pianoforte`) | Impostato, da riequilibrare | Generi, forma breve, mazurca, studio, notturno, memoria della danza; evitarne l'identificazione con un solo compositore |
| 5 | Paganini, Liszt, virtuosismo (`virtuosismo`) | Impostato, da approfondire | Celebrità, tecnica, trascrizione, istituzioni, differenze fra concerto e studio; correggere nota su `Mazeppa` ormai documentato al capitolo 7 |
| 6 | Tavolozza orchestrale e camera (`orchestra`) | Sviluppato in parte | Ampliare ascolti sulla strumentazione/direzione e verificare equilibrio fra sinfonia, camera, repertorio e rimandi autonomi |
| 7 | Berlioz e Liszt, forme a programma (`racconta`) | **Avanzato** | Controllo musicologico e ascolti reali di `idée fixe`, trasformazione tematica, poema e distinzione programma/evocazione |
| 8 | Teatro romantico (`teatro`) | Da approfondire | Weber, Rossini, Bellini, Donizetti, Verdi, Wagner, scuole teatrali, rapporto col Risorgimento; riferimento a `opera-lirica/` ancora segnaposto |
| 9 | Scuole nazionali (`nazioni`) | **Molto avanzato**, non concluso | Audit di fonti, aree, egemonie e popoli, ritmi/modalità, crediti delle registrazioni e distinzioni fra composizione e documenti etnomusicali |
| 10 | Nuovo Mondo di Dvořák (`nuovo-mondo`) | Sviluppato | Validazione musicale, fonti e comportamento del lettore; interpretazione culturale del tema del «Nuovo Mondo» |
| 11 | Quadri di Musorgskij (`quadri`) | Molto sviluppato | Fonti iconografiche, opere perdute, partitura pianistica vs orchestrazione Ravel, prove d'interazione |
| 12 | Vienna, valzer e archi (`vienna`) | **LACUNA PRIORITARIA** | Ampliare storia urbana e multilinguismo imperiale, Lanner/Strauss, valzer da sala e da concerto, operetta viennese, serenate d'archi; registrazioni verificate |
| 13 | Offenbach e città-spettacolo (`offenbach`) | **LACUNA PRIORITARIA** | Ampliare operetta/Secondo Impero, ricezione del can-can, `Galop infernal` vs `Tortues`, documenti Toulouse-Lautrec e cronologia; ascolti verificati |
| 14 | Belle Époque e registrazione (`belle-epoque`) | Impostato | Approfondire cultura urbana e tecnica; verificare incisioni Caruso per anno, matrice, accompagnamento e riproducibilità |

La qualifica «sviluppato» **non** significa «approvato o concluso».

### Verifica tecnica effettuata il 16 ottobre 2026

- Presenti **14 capitoli**.
- **181 ID HTML** rilevati, **nessun duplicato**.
- **138 collegamenti locali `#...`**, tutti con ID presenti nel documento.
- **Tutte le destinazioni relative interne a Musurgia Mundi censite nella pagina** risultano file esistenti su `main`; per quelle con frammento, l'ID di destinazione è presente.
- **42 occorrenze di pulsanti per video YouTube** nel sistema `data-mm-video` (non equivalgono a 42 video o 42 lettori distinti); **2 pulsanti SoundCloud**. Esistono anche lettori specializzati esterni a questo conteggio.
- Nessun `<iframe>` statico nel sorgente e nessun parametro positivo `autoplay=1` / `auto_play=true` nel codice esaminato.
- Script JavaScript già validato sintatticamente durante l'ultimo lotto.
- **Non verificati nel browser reale**: l'atterraggio senza scorrimento involontario, l'incorporabilità e riproduzione dei filmati, l'arresto fra player differenti, il comportamento su Android, l'accessibilità operativa dei controlli.
- Collegamenti a `../opera-lirica/` e futuro `../post-romanticismo/`: gli indirizzi esistono ma le pagine sono attualmente **segnaposto «Lavori in corso»**, non percorsi completati.

### Questioni musicologiche da tenere in vista

1. La **sinfonia a programma** non va confusa con la sinfonia dal carattere evocativo: `Eroica` / `Pastorale` / `Fantastica` sono casi diversi.
2. Sinfonia, poema sinfonico, suite, ouverture da concerto, rapsodia e variazioni mantengono identità formali distinte; la relazione con una narrazione è un'altra dimensione.
3. Scuole nazionali: la storia politica e sociale **non** è una scala o un ritmo automaticamente attribuibile a una nazione; distinguere autori, interpreti, fonti raccolte, orchestrazioni, tradizioni e appropriazioni.
4. Distinguere in ogni scheda **opera, versione, interpretazione, registrazione, ripresa audiovisiva e fonte della pubblicazione**.
5. Mettere in luce compositrici e interpreti come protagoniste di una storia musicale condivisa, non come appendice separata.
6. Il rapporto con il Risorgimento resta contestuale e bidirezionale, **senza copiare** la pagina dedicata.
7. La nuova audioteca **`dalla-sinfonia-alla-rapsodia/`** è complementare: il Romanticismo **spiega** il mutamento delle forme; l'audioteca **permette di ascoltare** il repertorio. Non aumentare il catalogo a scapito della maturità dei capitoli storici.

### Ordine dei prossimi lotti

**Lotto A — Priorità immediata: completamento storico dei capitoli 12 e 13.**
- Ampliare entrambi con prosa argomentata, fonti e relazioni interdisciplinari; senza trasformarli in schede biografiche.
- Per Vienna, accostare valzer da ballo, versione concertistica e scrittura per archi con esempi identificati.
- Per Offenbach, costruire il confronto reale `Galop infernal` / `Tortues`, documentare nascita, riusi e iconografia con cronologia corretta.
- Gli ascolti e gli esercizi rimangono **facoltativi**, dentro `Per iniziare`.

**Lotto B — Revisione di completezza dei capitoli 2–6 e 8.**
- Ampliare gli aspetti culturali e musicali insufficientemente articolati, integrare le compositrici nella storia e correggere stati superati (es. `Mazeppa`).
- Controllare rapporti e collegamenti con Lied, cameristica, concerto, opera e Risorgimento.

**Lotto C — Audit scientifico e audiovisivo dell'intero percorso.**
- Verificare tutte le opere citate e gli autori, la corrispondenza fra video/partitura/versione e interpreti, gli accessi temporali e le fonti primarie.
- Non chiamare «funzionante» un video che ha soltanto un ID sintatticamente valido. Riportare separatamente esito documentale e prova reale.

**Lotto D — Audit d'interfaccia e navigazione.**
- Prova effettiva su desktop e Android, scroll involontari, salti ai segnalibri, ritorni dall'audioteca, lettori che continuano a suonare, menù «Esplora sezioni» numerati coerentemente e dicitura «Percorsi di storia della musica».
- Preservare `../shared/atlas-anchor-arrival-v1.js`, salvo correzione controllata e motivata.

**Lotto E — Revisione conclusiva.**
- Lettura editoriale di tutti e 14 i capitoli, revisione delle fonti, eliminazione delle note obsolete, controllo delle dipendenze da pagine-segnaposto, controllo d'accessibilità e collaudo mobile.
- Solo dopo il Lotto E è lecito cambiare lo stato di questo documento in «Romanticismo completo».

### Regola operativa di coordinamento

**Non spostare in automatico il lavoro alla nuova audioteca dopo ogni commit.** Fino alla conclusione del Lotto A e della parte prioritaria del Lotto B, il **Romanticismo è la linea principale** e i nuovi cataloghi sono soltanto supporti. Ad ogni lotto annotare qui: capitoli toccati, fonti controllate, registrazioni veramente collaudate, link verificati, problemi aperti e commit.

### Ultima verifica

- [x] Struttura dei 14 capitoli presente
- [x] Ancore HTML e collegamenti locali controllati staticamente
- [x] Raccordo pubblicato con l'audioteca autonoma
- [ ] Capitoli 12 e 13 maturi editorialmente
- [ ] Revisione di completezza dei capitoli 2–6 e 8
- [ ] Audit documentale di tutti gli ascolti
- [ ] Collaudo browser e Android senza autoplay e scroll indesiderati
- [ ] Menu, fonti e collegamenti cross-page collaudati
- [ ] Revisione finale di tutti i capitoli

**Conclusione al 16 ottobre 2026: Romanticismo non terminato.**
