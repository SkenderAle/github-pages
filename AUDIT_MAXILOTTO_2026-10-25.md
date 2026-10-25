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


## Maxi-lotto III — persone, cinema, libretto e poesia (25 ottobre)

**Base ripresa:** `92da72b`. Tutti gli interventi sono sul branch `main`; non sono stati creati altri branch e non è stato riscritto il testo della bozza `verso-le-avanguardie`.

### Nuovi collegamenti documentati e reciprocità

**Tredici** rimandi puntuali attivati dopo avere collocato un'ancora sulla menzione effettiva e verificato un collegamento di ritorno dalla pagina all'Atlante.

- `dal-musical-al-film/index.html`: **Alfred Hitchcock** nel paragrafo su Herrmann e la regia; **Federico Fellini** nel paragrafo su Nino Rota; **Max Steiner** nell'orchestrazione cinematografica; **Leonard Bernstein** nel musical; **Jeanine Tesori** nella discussione sul musical contemporaneo (qui esisteva già il ritorno).
- `melodramma/index.html`: **Ottavio Rinuccini**, poeta teatrale nel contesto di Peri e Jacopo Corsi.
- `parola-e-canto/index.html`: quattro voci poetiche distinte e contestualizzate: **Wilhelm Müller** (`Die schöne Müllerin`, `Winterreise`), **Heinrich Heine** (`Dichterliebe`), **Eduard Mörike** (Wolf, `Verborgenheit`), **Paul Verlaine** (Debussy, `Ariettes oubliées`). Per Verlaine l'ancora è nella sezione della *mélodie* europea, senza confondere la cronologia.
- `barocco/index.html`: **Jean-Baptiste Lully** nella rete dinastica e cortigiana francese.
- `romanticismo/index.html`: **John Field** nella storia del notturno e **Pablo de Sarasate** nella discussione sul virtuosismo violinistico.

Il nuovo rimando per **John Field** sostituisce una riserva evidentemente incongrua verso le radici afroamericane. La collocazione nell'attuale pagina romantica è coerente con la storia del notturno; nessun passaggio della bozza Avanguardie è stato toccato.

### Filologia delle riserve

Nel registro `atlante3d/database/collegamenti-sito.json` sono stati aggiunti **13 collegamenti specifici** e riconciliati **17 elementi `pendingReview`**: tredici collegati a questi nomi più quattro vecchie voci generiche/ridondanti o già coperte da un'ancora esatta. Le altre riserve restano in quarantena e non vengono promosse per una semplice somiglianza di cognome o vicinanza tematica.

**Stato dopo gli interventi:** **516 collegamenti attivi** e **268 sospesi** per 791 nodi censiti nel file. Le 268 riserve sono ripartite in: 69 attribuzioni per cognome non verificate; 161 rimandi a categorie/generalità anziché a un'opera; 35 macro-capitoli o destinazioni non specifiche; 3 casi che attendono un rimando puntuale con ritorno. Il contatore `validation.pending_review` corrisponde a 268.

**Controllo conclusivo sul codice:** **318** URL trovano l'ID direttamente nel sorgente HTML, compresi i 23 vecchi rimandi attraverso il redirect post-romanticismo; **198** rimandano a schede dinamiche e hanno corrispondenza ricostruita dal catalogo; nessun duplicato per coppia nodo/URL e nessuna sovrapposizione fra `byNode` e `pendingReview` nelle verifiche statiche.

### Interfaccia e anti-regressione

`atlante3d/app-livelli.js`: per **Hitchcock, Fellini e Méliès**, quando classificati correttamente `persona`, la preparazione della vista dichiara anche `music_relevance` perché il sito documenta un rapporto concreto con il cinema e la sua musica. Restano **personaggi, non compositori**. Questo corregge la condizione di esclusione preventiva della categoria nelle lenti musicali; la visualizzazione effettiva, gli eventuali archi del grafo e le interazioni su smartphone richiedono prova nel browser.

Nuovo controllo `tools/check-site-link-registry.mjs`: verifica che il contatore dei sospesi coincida con l'array, che i collegamenti attivi e sospesi siano univoci, che non si sovrappongano e che i nodi sospesi esistano nel registro. Aggiunto al workflow `.github/workflows/musurgia-site-links.yml`, insieme alle precedenti verifiche delle ancore. **Il test è predisposto su GitHub, ma non è stata osservata in questa sessione un'esecuzione di GitHub Actions conclusa con esito positivo.**

### Riserve ancora aperte

- I file `grafo.json` e `relazioni.json` dell'Atlante superano il contenuto recuperabile in un'unica lettura del connettore e non sono stati sottoposti a audit filologico integrale in questo lotto.
- Il controllo HTML/JSON degli identificativi non equivale a riproduzione di una pagina caricata realmente, né attesta YouTube, scroll, comportamento delle categorie e compatibilità mobile.
- Le restanti **268 riserve** non vanno promosse per analogia, cognome o sola presenza in un indice: occorre una citazione specifica o un'opera, un'ancora e una ragione editoriale.


## Maxi-lotto IV — Audit Concerti: 161 riserve generiche e 95 arrivi in archivio nascosto

**Eseguito su `main`, senza nuovi branch e senza modifiche a `verso-le-avanguardie`.**

### A. Confronto filologico delle destinazioni generiche

All'avvio risultavano **161 voci `pendingReview` relative ai Concerti**, tutte derivate da associazioni poco specifiche a categorie, famiglie strumentali o macrosezioni. L'analisi ha distinto l'archivio HTML nascosto dalle schede pubbliche dell'audioteca.

Matrice di controllo `atlante3d/database/audit-candidati-concerti-20261025.json` e registro documentario `atlante3d/database/audit-risoluzioni-concerti-20261025.json`:

- **68 compositori** associati a **125 ancore di scheda visibili**, con nome e opera controllati nelle intestazioni H3.
- **97** ancore erano già state pubblicate nello storico Atlante; **27** ulteriori ancore puntavano a una copia/variante di opera già documentata. Queste **non sono state replicate** nel grafo.
- **Una** opera non ancora collegata come voce autonoma: **Robert Schumann, Concerto per violoncello in la minore op. 129**, inserito con destinazione `../concerti/#audit-lotto30-17`.
- **142 riserve generaliste** sostituite/rifiutate come ridondanti, con i loro dati originali conservati nel file di audit; **19** restano sospese per mancanza di una corrispondenza puntuale dimostrata. Nessuna promozione sulla sola somiglianza di cognome.
- Casi esplicitamente esclusi: **Marian Anderson ≠ Leroy Anderson**, **Rubin Goldmark ≠ Karl Goldmark**; distinti i concerti di Robert e Clara Schumann e la Rapsodia *su tema di Paganini* di Rachmaninov.

**Correzione di lettura del registro:** nel vecchio file attivo l'attributo `page` per i Concerti non era sempre `concerti`, ma una lunga etichetta `Concerti · [titolo]`. Un filtro precedente sul solo `page=="concerti"` sottocontava gravemente i collegamenti: all'inizio di questo maxi-lotto **erano già attivi 219 URL `../concerti/#...`**, non uno. Per questo l'audit è stato rifatto basandosi sulle URL effettive e non sulla convenzione del campo `page`. I dati storici non sono stati gonfiati da doppioni.

### B. Correzione effettiva della navigazione nascosta

Dei 219 URL attivi nei Concerti, ben **95** puntavano a ID all'interno di `<div id="archivio-schede-sorgente" hidden aria-hidden="true">`. L'ID esisteva ma il contenuto era invisibile. Non basta considerare `getElementById` o un match statico come prova che il lettore raggiunga la scheda.

Sono stati corretti **tutti i 95 arrivi** in due blocchi documentati:
- `atlante3d/database/audit-migrazione-ancore-nascoste-concerti-20261025.json`: **80** casi, di cui **27** URL spostati sulla scheda visibile della stessa opera e **53** collegamenti duplicati rimossi perché l'opera aveva già un suo rimando visibile.
- `atlante3d/database/audit-ultime-15-ancore-concerti-20261025.json`: gli ultimi **15**, risolti con **11** migrazioni e **4** doppioni rimossi. In `concerti/index.html` sono state aggiunte nove ancore pubbliche per opere/personaggi privi di un identificativo stabile visibile: Händel (concerto per arpa), Nino Rota (trombone), Carl Stamitz (viola), Dittersdorf (contrabbasso), Jolivet (fagotto), Lars-Erik Larsson (sassofono), Creston (sassofono), Sergej Taneev (contestualizzazione delle elaborazioni del terzo concerto di Čajkovskij), e Glière (concerto per corno).
- Per **Glière, Concerto per corno op. 91**, è stata pubblicata una vera scheda nel catalogo visibile con il riferimento discografico Chandos già documentato nell'archivio; **nessun player inventato**. Il contatore del catalogo Corno è stato adeguato.
- Il contenitore dell'archivio storico rimane nascosto: non è stato esposto indiscriminatamente né cancellato.

**Verifica finale sul sorgente:** **163** collegamenti attivi ai Concerti, tutti con ID esistente e **nessuno** dentro l'archivio storico; nessun ID duplicato nel documento. La riduzione dei link complessivi riflette l'eliminazione di doppioni invisibili, non la perdita di opere visibili.

### C. Anti-regressione e stato finale

- Nuovo `tools/check-concert-visible-targets.mjs` verifica che ogni URL `../concerti/#...` del registro punti a un ID unico **fuori** dall'archivio nascosto. Collegato a `.github/workflows/musurgia-site-links.yml` insieme ai test per 198 ancore dinamiche, collegamenti interni e quarantena.
- **Rimandi Atlante attivi: 460**. **Riserve: 126** (di cui **19** ai Concerti; le altre 107 relative ad altre sezioni). Sono state archiviate le motivazioni delle eliminazioni.
- **Limiti del collaudo:** il controllo strutturale dei sorgenti HTML/JSON è verificato; un'esecuzione GitHub Actions conclusa con successo non è ancora stata osservata tramite connettore. Rimangono da provare in browser le rotte, le finestre `details`, le registrazioni e la resa responsive. Non è stato eseguito audit filologico integrale dei file grandi `grafo.json` e `relazioni.json`.

**Nessuna attribuzione ambigua ai cosiddetti falsi amici è stata pubblicata.**

## Maxi-lotto IV — Consolidamento delle 19 riserve residue (25 ottobre 2026)

**Interventi realmente pubblicati sul branch `main`:**

1. In `atlante3d/database/collegamenti-sito.json` sono state archiviate **15 riserve generaliste** dei Concerti per le quali il medesimo nodo aveva già almeno un rimando attivo a una **scheda puntuale**. I relativi autori sono Nino Rota, Benjamin Britten, Sergej Prokof'ev, Carl Stamitz, Carl Ditters von Dittersdorf, Louis Spohr, Édouard Lalo, André Jolivet, Lars-Erik Larsson, Francesco Maria Veracini e Paul Creston. Non sono stati creati collegamenti duplicati né nuovi player. Le riserve originali restano documentate nel precedente `audit-risoluzioni-concerti-20261025.json`.
2. Corretta un'attribuzione attiva **erronea**: `compositore-rubin-goldmark → ../concerti/#lotto4-documentato-1` attribuiva a Rubin Goldmark il *Concerto per violino in la minore op. 28*, che è di **Karl (Carl) Goldmark**. La relazione è stata rimossa, mantenendo in quarantena la richiesta di un rimando autentico a Rubin. Prova: partitura catalogata su [IMSLP](https://imslp.org/wiki/Violin_Concerto%2C_Op.28_%28Goldmark%2C_Karl%29) e [catalogo Naxos](https://www.naxos.com/CatalogueDetail/?id=Gramola98986). L'Atlante attuale non censisce un nodo autonomo Karl Goldmark nel registro dei collegamenti: non ne è stato inventato uno.
3. In `concerti/index.html` la scheda dell'op. 28 reca ora la dicitura **Karl Goldmark** nell'intestazione, nella ricerca interna e nell'attributo del player; è stato aggiunto un collegamento alla partitura, senza alterare la registrazione esistente.
4. In `tools/check-site-link-registry.mjs` è stato aggiunto un controllo esplicito anti-regressione per questa falsa attribuzione.

**Risultato del consolidamento del registro:**

| Stato | Prima | Dopo |
| --- | ---: | ---: |
| Rimandi attivi complessivi | 460 | **459** |
| Rimandi attivi ai Concerti | 163 | **162** |
| Riserve complessive | 126 | **111** |
| Riserve Concerti | 19 | **4** |
| Nodi censiti nel registro | 791 | **791** |

Le **quattro riserve** ancora in quarantena riguardano **tre persone distinte**: Marian Anderson (due richieste; non va confusa con Leroy Anderson), Friedrich Wieck (non confondere con Clara Wieck Schumann) e Rubin Goldmark (non confondere con Karl Goldmark). Non è stata individuata per questi soggetti un'opera propria pertinente da collegare alle schede visibili dei Concerti. Non promuovere un collegamento per semplice omonimia, relazione parentale o riferimento indiretto.

**Verifica della modifica:** confronto programmatico della struttura JSON prima della pubblicazione: nessun duplicato attivo, nessuna sovrapposizione attivo/sospeso, contatore `pending_review` aggiornato; il numero dei rimandi ai Concerti e delle riserve coincide con il registro. **Non è ancora un collaudo end-to-end in browser**: restano da verificare l'apertura delle schede, i player, l'interfaccia mobile e l'esito della CI sul commit corrente. I precedenti risultati del maxi-lotto rimangono documentazione storica, non lo stato corrente di queste quantità.
