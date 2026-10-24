# Musurgia Mundi — Audit trasversale, maxi-lotto del 25 ottobre 2026

**Repository:** `SkenderAle/github-pages`. **Branch:** `main` (nessun branch creato). **Base esaminata:** `a29e65710f019bce28516d8cff899bf572ca596a` (24 ottobre 2026).

## Ambito e metodo

Ricognizione del tree GitHub (314 elementi, 267 file), lettura di circa **25 pagine HTML** fra percorsi storici, Home, approfondimenti e audioteche. Verifiche lessicali dei tag `img` e degli attributi `alt`, percorsi statici in `href/src`, duplicazioni di ID, corrispondenza di ancore statiche, disponibilità dei CSS/JS condivisi e rimandi in `atlante3d/database/collegamenti-sito.json`. I template JavaScript con `${...}` e gli ID aggiunti al DOM in esecuzione non vanno segnalati automaticamente come collegamenti rotti.

**Limitazione essenziale:** questi controlli riguardano il codice nel repository; non equivalgono a collaudo visuale mobile/desktop, caricamento effettivo delle miniature esterne o validazione della riproduzione YouTube. I due archivi principali dell'Atlante (`grafo.json` e `relazioni.json`) superano la dimensione recuperabile in questa sessione dal connettore e non sono stati analizzati integralmente.

## Correzioni effettivamente pubblicate su main

1. **Classicismo**, `classicismo/index.html` — commit `47e221e`: cinque figure storiche corredate di `alt`, didascalia, link alla fonte e disposizione `mm-prose-figure` nel testo: palazzo elettorale di Mannheim; sezione teatrale di Alexander Galli Bibiena (Metropolitan Museum); Haydn ritratto da Guttenbrunn; Großer Redoutensaal della Hofburg; frontespizio manoscritto dell'`Eroica` di Beethoven. Immagini statiche della pagina: **5 → 10**.
2. **Musica da camera**, `musica-da-camera/index.html` — commit `4d1e656`: due documenti inseriti accanto a paragrafi nuovi di lettura delle fonti: frontespizio delle sonate a tre di Corelli, op. 1 (1681), e autografo dell'Ottetto D. 803 di Schubert. Immagini statiche: **2 → 4**.
3. **Melodramma classico**, `melodramma-classico/index.html` — commit `00b12b6`: Gluck alla spinetta, dipinto da Joseph-Siffred Duplessis (1775), e ritratto inciso di Lorenzo Da Ponte (circa 1822). Immagini statiche: **8 → 10**.
4. **Anatomia del melodramma**, `anatomia-del-melodramma/index.html` — commit `07a03db`: ritratto di Pietro Metastasio (incisione conservata al Rijksmuseum) nel capitolo IX dedicato al libretto; aggiunto il CSS condiviso delle immagini incorniciate. Immagini statiche: **5 → 6**.

**Totale:** **10 figure nuove su quattro pagine**, con sorgenti Commons e rimando alla rispettiva scheda; nessun video, testo preesistente o menu riscritto. I file Commons sono esterni, pertanto il loro caricamento in GitHub Pages resta da verificare nel browser.

## Audit navigazione

Il file `shared/mm-menu-compatto-v1.css` contiene già il layout a **due colonne da 821 px** e **una colonna sui dispositivi stretti**: nessun intervento ripetitivo. `shared/mm-menu-compatto-v1.js` gestisce pannelli richiudibili e chiusura da tastiera. Sono presenti anche `tools/check-menu-anchor-scroll.mjs` per impedire la «frenata» sui salti interni e `tools/check-no-autoplay.mjs` per i player. Questi strumenti sono stati letti, non eseguiti in un clone locale in questa sessione.

Gli `href="#..."` statici delle principali pagine esaminate hanno trovato i rispettivi ID, con sei eccezioni nella **Musica da camera** chiarite nel codice: gli ID `guida-...` sono creati da JavaScript con `article.id='guida-'+id` e i record corrispondenti sono presenti; non sono quindi errori statici confermati.

## Rimandi dall'Atlante ai siti

Il database `collegamenti-sito.json`, aggiornato al 24 ottobre 2026, contiene **791 chiavi di nodo**, **503 collegamenti** di dettaglio e **285 voci in pendingReview**. Le 503 URL sono univoche e nessuna presenta un percorso relativo evidentemente malformato.

Controllo contro gli ID HTML:
- **282** link trovano un'ancora direttamente nel sorgente della pagina di destinazione.
- **23** link puntano a `post-romanticismo/#...`, indirizzo che conserva query/hash con redirect verso `verso-le-avanguardie/`: tutti e 23 gli ID corrispondenti esistono nell'HTML di destinazione. Nessuna revisione editoriale alla bozza.
- **198** link si riferiscono a ID generati a esecuzione: 64 in `parola-e-canto`, 75 in `musica-da-camera`, 59 in `dalla-sinfonia-alla-rapsodia`. Richiedono test DOM/browser, non sono stati dichiarati né validi né rotti sulla sola base HTML.

## Anomalie aperte e ordine consigliato

1. Collaudo vero di immagini Commons, figure float, hero e leggibilità dei menu alle larghezze desktop/tablet/smartphone.
2. Validazione di **198 ancore dinamiche** dopo l'esecuzione del JavaScript; controllare anche ritorno indietro, focus e salti da URL con hash preesistente.
3. Verifica YouTube: disponibilità, embeddabilità, start/end corretti, differenza fra registrazioni complete ed estratti, nessun autoplay.
4. Audit integrale tassonomico/filologico dei file `grafo.json` e `relazioni.json` con accesso non troncato; riprendere le **285 segnalazioni `pendingReview`** senza promuovere relazioni deboli.
5. Controlli sulle fonti/diritti/didascalie delle immagini già esistenti, non soltanto degli ultimi inserimenti. La ricognizione statica non verifica la pertinenza di tutte le illustrazioni.
6. Non lavorare editorialmente su `verso-le-avanguardie` finché resta bozza, fatta salva una richiesta esplicita.

**Regola permanente:** distinguere sempre `letto`, `corretto in GitHub`, `pubblicato su main`, `collaudato nel browser`. Per i prossimi cicli partire dalle ultime modifiche su `main` e non replicare interventi già fatti.


## Maxi-lotto II — incroci dinamici, deep link e regressioni automatiche (25 ottobre)

**Ancore dinamiche effettivamente ricostruite dai dati dei cataloghi:**
- `parola-e-canto`: 97 opere nel catalogo; **64/64** rimandi con hash generato da autore + titolo.
- `musica-da-camera`: 255 voci di catalogo; **75/75** hash editoriali generabili dai titoli.
- `dalla-sinfonia-alla-rapsodia`: 105 schede musicali; **59/59** ID di scheda presenti nel JSON incorporato.
- Totale: **198/198** rimandi con ancoraggio dinamico ricostruibile; nessun ID duplicato nel rispettivo catalogo. I dodici rimandi aggiuntivi a intestazioni d'autore delle stesse pagine erano già presenti come ID statici (7 + 1 + 4).

**Audit dei deep link interni fra sezioni:** letti gli `href` con frammento di 16 pagine principali (**838 riferimenti**), con riscontro nell'HTML della destinazione per **831** casi e nel catalogo delle guide create da JavaScript per gli altri **7** casi; controllate inoltre le destinazioni fuori dalle sedici pagine principali. **Nessuna ancora mancante accertata nel codice.** Fra questi controlli sono compresi il redirect da `post-romanticismo/` a `verso-le-avanguardie/` che conserva `location.hash` e `location.search`; la bozza `verso-le-avanguardie` non è stata modificata.

**Controlli ripetibili aggiunti a `main`:**
- `tools/check-atlante-site-links.mjs` — controllo dei 503 rimandi attivi, incluse le 198 ancore generate dai cataloghi.
- `tools/check-page-deeplinks.mjs` — controllo dei deep link nei 16 principali percorsi e delle guide generate.
- `.github/workflows/musurgia-site-links.yml` — GitHub Actions configurata per eseguire entrambi i controlli a ogni modifica pertinente e su richiesta. La configurazione è pubblicata nel repository; **non è documentato in questa sessione un esito verde del runner GitHub Actions**, distinto dalla verifica manuale dei dati.

**Correzione dei metadati:** il registro `atlante3d/database/collegamenti-sito.json` conteneva **285** elementi nell'array `pendingReview` ma riportava ancora **236** in `validation.pending_review`; metadato riallineato a 285 nel commit `9a16d7a`. Non è stato promosso o cancellato nessuno dei collegamenti sospesi. Classificazione degli attuali 285: 162 destinazioni generaliste in Concerti, 74 assegnazioni per cognome non confermate, 37 macro-capitoli non specifici, 9 ruoli narrativi documentati ma ancora sospesi e 3 casi senza scheda o passaggio puntuale. Nessun duplicato per coppia nodo/URL.

**Verifica documentaria immagini del lotto I:** i 10 nomi di file Wikimedia Commons impiegati nelle quattro pagine modificate risultano presenti nelle rispettive schede, con attribuzioni compatibili con le didascalie. È ancora necessario verificare la risposta delle URL `Special:FilePath` e le dimensioni/impaginazione sui dispositivi reali.

**Riserve importanti:** test browser e collaudo dei player non completati; i file più grandi dell'Atlante (`grafo.json`, `relazioni.json`) non sono stati acquisiti integralmente tramite connettore. Non presentare questo audit come validazione dei collegamenti esterni o di tutte le relazioni filologiche.
