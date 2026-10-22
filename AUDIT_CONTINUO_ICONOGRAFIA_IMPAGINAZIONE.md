# Musurgia Mundi — audit continuo delle immagini e degli inserti editoriali

## Protocollo permanente
Questo documento registra cicli, non una presunta chiusura definitiva. Ogni ciclo deve indicare il commit di `main` preso come riferimento, le pagine effettivamente lette, le correzioni committate, i controlli ancora aperti e le verifiche da ripetere dopo nuove modifiche.

### Verifiche da ripetere
- Coerenza fra immagine, didascalia e paragrafo; fonti primarie o istituzionali, attribuzioni, diritto d'uso e collegamento alla scheda specifica.
- Immagini incorniciate dal testo dove editorialmente pertinente: non inserire immagini decorative non connesse alla narrazione.
- Griglie documentarie a due/tre colonne soltanto per documenti effettivamente complementari; controllo su telefono, tablet e desktop; nessuna colonna stretta e nessuno scroll orizzontale involontario.
- Disponibilità effettiva dei file e dei lettori incorporati; fallback alla fonte documentata se piattaforme esterne negano l'embed.
- Alternative testuali, misure dell'immagine, caricamento differito salvo hero prioritari, contrasto, attenzione alle miniature verticali e ai titoli.
- Conservare il registro delle anomalie; rivalutare anche elementi già certificati perché CSS e pagine cambiano nel tempo.

## Ciclo del 22 ottobre 2026
**Repository:** SkenderAle/github-pages. **Branch:** `main`. **Versione letta dopo la correzione:** `2c154adecf43760ddafc5f7d2b06afcbc59e382d`.

**Copertura della ricognizione statica:** 25 pagine HTML principali o di approfondimento, di cui `verso-le-avanguardie/index.html` considerata soltanto nel censimento ed esclusa dalle priorità di rifinitura perché ancora bozza. Nelle altre 24 pagine sono stati identificati **236 elementi `<img>`** statici: nessuno senza attributo `alt` nella verifica lessicale. Sono stati individuati **27 figure `mm-prose-figure`** e **14 griglie `mm-doc-grid`**. Questi sono conteggi di codice, **non** verifiche visive o attestazioni di correttezza filologica, raggiungibilità dei file, pertinenza delle immagini o qualità degli alt.

**Layout condiviso verificato nel codice:** `shared/mm-prose-figure-v1.css` prevede float destro/sinistro per il testo che incornicia la figura, con disattivazione su schermi sotto 700 px. `shared/mm-documenti-griglia-v1.css` gestisce due/tre colonne e riduce le colonne secondo la larghezza del contenitore. Rimane da collaudare con viewport e contenuti reali, specialmente nei percorsi con indici laterali.

**Correzione pubblicata in questo ciclo:** `melodramma-classico/index.html`, commit `2c154ad`. L'hero che dipendeva da un vecchio indirizzo esterno generico della Scala è stato sostituito da una testata con scena di Leporello e Donna Elvira tratta dal frontespizio di una riduzione praghese per pianoforte a quattro mani del `Don Giovanni` (1831), Wikimedia Commons, pubblico dominio, con credito e collegamento alla fonte. Il layout distingue testo e immagine, senza tagliare indiscriminatamente il soggetto e con adattamento mobile. Le diciture «Estratto non caricato» sono state sostituite con istruzioni chiare per l'utente; aggiornata la nota sulle incorporazioni YouTube a richiesta.

**Riserve aperte:** il caricamento reale del nuovo hero su GitHub Pages e la resa a diverse larghezze **non sono ancora stati collaudati in browser**; resta una dipendenza dalla miniatura Wikimedia esterna. Occorre verificare i sei video YouTube del Melodramma classico (ID: `-xQvuCZ7glE`, `D2EoqOcIuuM`, `mkZrbA6np5s`, `F1jc-d4zygk`, `I3MyO74ysCk`, `vLmJ_sHzyMk`) per raggiungibilità, identificazione dell'esecuzione e autorizzazione all'incorporamento; controllare le risorse `background-image` CSS e le immagini create da JavaScript, escluse dal conteggio `<img>`; continuare la verifica delle fonti/crediti di ciascuna figura e scheda documentaria.

**Prossimo ciclo:** confrontare i nuovi commit con questa base, verificare prima i punti aperti e poi ampliare le verifiche iconografiche e responsive per blocchi di pagine, senza intervenire sulla bozza Verso le avanguardie salvo richieste specifiche.
