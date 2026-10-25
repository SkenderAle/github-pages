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


## Maxi-lotto IV — Chiusura delle ultime quattro riserve Concerti

**25 ottobre 2026 · Pubblicato su `main`**. Il precedente paragrafo «Consolidamento delle 19 riserve residue» descrive lo stato intermedio (4 ancora aperte); questo addendum registra la chiusura effettiva a **zero**.

Le quattro voci residue erano tutte rimandi generici e non comprovati verso `concerti/index.html`. Decisione filologica, senza generare collegamenti sostitutivi:

| Nodo Atlante | Vecchia destinazione sospesa | Decisione e motivo |
| --- | --- | --- |
| `persona-marian-anderson` | `../concerti/#sorgenti-audioteca` | Rimando eliminato: nessuna opera di Marian Anderson in questa sezione documentata dalla scheda; non confondere con **Leroy Anderson**, autore di *The Typewriter*. |
| `persona-marian-anderson` | `../concerti/#percussioni` | Rimando eliminato per identica falsa associazione. Marian Anderson è una cantante contralto, non il compositore Leroy Anderson. |
| `persona-friedrich-wieck` | `../concerti/#percorso-pianoforte` | Rimando eliminato: rapporto biografico/pedagogico con Clara Wieck Schumann, non attribuzione del **Concerto op. 7** di Clara. Un collegamento biografico futuro richiederà un passaggio specifico distinto. |
| `compositore-rubin-goldmark` | `../concerti/#violino` | Rimando eliminato: il **Concerto op. 28** in catalogo è di **Karl Goldmark**. La precedente attribuzione attiva errata a Rubin era già stata rimossa nel consolidamento. |

**Controllo quantitativo finale:**

| Campo | Stato intermedio | Stato finale |
| --- | ---: | ---: |
| Nodi del registro | 791 | **791** |
| Link attivi complessivi | 459 | **459** |
| Link attivi verso Concerti | 162 | **162** |
| Riserve complessive | 111 | **107** |
| Riserve relative ai Concerti | 4 | **0** |

Il totale dichiarato in `validation.pending_review` è aggiornato a 107; anche `validation.concerti.reconciliation_20261025.remaining_generic` vale 0. Aggiornato `tools/check-site-link-registry.mjs` con quattro guardie per impedire il ripristino di questi specifici falsi rimandi, tanto come collegamenti attivi quanto come nuove riserve, e con confronto tra contatore dichiarato delle riserve Concerti e stato attuale.

**Ambito della certificazione:** chiusura della *quarantena editoriale dei collegamenti Concerti*. Non è la certificazione completa della qualità dei 162 link nel browser, dell'apertura di ogni `details`, della disponibilità dei video/audio esterni o della resa responsive. Tali collaudi restano nell'audit tecnico permanente. Nessun cambiamento all'HTML dei Concerti è stato richiesto per questa chiusura.

## Maxi-lotto V — Riconciliazione delle 107 riserve residue

**Data:** 25 ottobre 2026. **Branch:** `main`; nessun branch nuovo. **Audit archivistico:** `atlante3d/database/audit-risoluzioni-maxilotto-v-20261025.json`. La sezione precedente, «Maxi-lotto IV», descrive uno stato storico; i nuovi numeri in questa sezione sono lo stato **attuale** del registro.

### Ricognizione completa e metodo

Sono state esaminate le 107 riserve in 13 raggruppamenti (Rinascimento, Barocco, Melodramma, Classicismo, Romanticismo, Risorgimento, vecchio Postromanticismo, Parola e canto, Cinema, Medioevo, Musica da camera, Sinfonica, Percorsi storici). Per distinguere la semplice esistenza della destinazione dalla pertinenza filologica, per ogni riserva si è verificato se **lo stesso nodo** disponeva già di un link specifico nella stessa pagina e se l'ancora risultava effettivamente nel sorgente HTML o ricostruibile dal catalogo strutturato.

**88 riserve generaliste archiviate come superate**: almeno un collegamento specifico e verificato era già attivo per lo stesso nodo nella stessa pagina. Nessuna di queste è stata trasformata in una seconda copia del collegamento. Le vecchie richieste sono preservate individualmente, con la destinazione che le ha sostituite, nel JSON dell'audit. Il controllo comprende **15** collegamenti storici via `post-romanticismo/`, il cui redirect conserva i frammenti e conduce agli ID presenti in `verso-le-avanguardie/`, senza modificare quest'ultima pagina. Comprende altresì opere vocali, cameristiche e sinfoniche i cui ID sono costruiti da JavaScript a partire da cataloghi: una verifica del sorgente semplice non sarebbe stata sufficiente.

### Quattro nuovi rimandi bidirezionali, pubblicati

| Nodo dell'Atlante | Nuovo rimando specifico | Passaggio verificato |
| --- | --- | --- |
| Jean-Philippe Rameau | `../classicismo/#mm-autore-compositore-jean-philippe-rameau` | Il modello francese del teatro settecentesco, eredità di Lully e ruolo dell'orchestra/danza |
| Niccolò Paganini | `../romanticismo/#mm-autore-compositore-niccolo-paganini` | La figura pubblica del virtuoso e il confronto con Liszt |
| Franz Liszt | `../romanticismo/#mm-autore-compositore-franz-liszt` | La trasfigurazione pianistica del virtuosismo violinistico |
| Erich Wolfgang Korngold | `../dal-musical-al-film/#mm-autore-compositore-erich-wolfgang-korngold` | La scrittura sinfonica fra Vienna e Hollywood (*The Adventures of Robin Hood*) |

Le tre pagine sono state modificate introducendo **ancore HTML esatte** e link di ritorno contestuali ai rispettivi nodi dell'Atlante. La nuova entrata in `byNode` per ciascun autore è unica. Nessun contenuto di `verso-le-avanguardie` è stato cambiato.

### Sei falsi riferimenti eliminati con motivazione

- **Gherardello da Firenze**, cinque riserve verso Rinascimento (1) e Melodramma (4). Le pagine non trattano Gherardello e l'associazione deriva da un riferimento non qualificante alla città di Firenze. Non sono stati inventati collegamenti generici al centro fiorentino.
- **Eugène Ysaÿe**, una riserva in Musica da camera: la menzione riguarda il *Quartetto Ysaÿe* come interprete del quartetto di Debussy, non una composizione di Eugène Ysaÿe presente in questa audioteca. L'omonimia dell'intitolazione di un ensemble non prova l'esistenza di un'opera pertinente.

### Bilancio e lavoro ancora aperto

| Grandezza | Inizio Maxi-lotto V | Stato dopo il lotto |
| --- | ---: | ---: |
| Nodi censiti | 791 | **791** |
| Collegamenti attivi | 459 | **463** |
| Riserve in `pendingReview` | 107 | **9** |
| Collegamenti duplicati inseriti | 0 | **0** |
| Modifiche alla bozza Verso le avanguardie | 0 | **0** |

Le **9 riserve residue** sono intenzionali, non un errore di contabilità:

- **6** verso il redirect del Postromanticismo/bozza Avanguardie: Maurice Ravel e Anton Webern richiedono un'ancora individuale, e Ma Rainey, Bessie Smith, Louis Armstrong, Mary Lou Williams richiedono un rimando narrativo puntuale nella trattazione del blues/jazz. La loro presenza nel testo non autorizza un collegamento indiscriminato al capitolo intero; non modificare la bozza senza richiesta.
- **3** etichettate `percorsi-storici`: Joachim Raff, Gustav Holst, Emmanuel Chabrier. Tutti e tre hanno già opere individuate nell'Audioteca sinfonica, ma ciò non sostituisce una **trattazione narrativa storica con collegamento reciproco**. Mantenerle sospese finché non sia identificato un passaggio appropriato.

I file `atlante3d/database/collegamenti-sito.json` e `tools/check-site-link-registry.mjs` sono stati aggiornati: `validation.pending_review` e `validation.maxilotto_v_20261025.remaining_pending` valgono entrambi 9; il test controlla il saldo delle decisioni (88+4+6+9=107) e segnala se compaiono nuove riserve fuori dai due ambiti rimasti.

**Ambito dei controlli:** verifica statica degli ID e dei dati JSON, integrità dei link e della tassonomia editoriale. Non certifica il caricamento dinamico in browser, gli embed YouTube, la resa desktop/mobile, l'accessibilità reale né l'esito delle GitHub Actions del nuovo commit. Queste prove rimangono nell'audit permanente.

## Maxi-lotto VI — Tre itinerari storici e sei riserve protette

**Data:** 25 ottobre 2026 · **Branch:** `main` · **Ambito:** chiusura documentata delle tre riserve `percorsi-storici` lasciate aperte dal Lotto V. Registro decisionale: `atlante3d/database/audit-risoluzioni-maxilotto-vi-20261025.json`.

### Modifica pubblicata alla pagina sinfonica

In `dalla-sinfonia-alla-rapsodia/index.html`, subito dopo l'introduzione alle diverse forme, è stato inserito un capitolo storico di confronto intitolato **«La sinfonia può narrare; la suite e la rapsodia seguono altre strade»**. Non si tratta di tre bottoni per saltare al catalogo, bensì di tre brevi letture, ciascuna con un problema musicale, una domanda d'ascolto, due/una opera specifica, fonti editoriali e link bidirezionale al nodo.

1. **Joachim Raff** — le sinfonie n. 3 `Im Walde` op. 153 (1869) e n. 5 `Lenore` op. 177 (1872), con distinzione fra immaginario naturale e origine nella ballata di Gottfried August Bürger. Fonti: `raff.org/catalogue/catalogue_orchestral.html` e Naxos `8.555541`. Lo storico dei video resta qualificato: registrazioni documentate, caricamenti indipendenti da verificare.
2. **Gustav Holst** — `The Planets` op. 32 (1914–1916), sette movimenti legati a caratteri **astrologici**, non una sinfonia né un programma di astronomia. Fonti: Gustav Holst Website e Wise Music Classical. Messa in evidenza la differenza fra ostinato di `Mars` e dissoluzione di `Neptune`.
3. **Emmanuel Chabrier** — `España` (1883), rapsodia per orchestra dopo il viaggio spagnolo; riferimenti alle danze e alla loro rielaborazione orchestrale. Fonti: programma LA Phil/Hollywood Bowl e partitura IMSLP. Nessuna pretesa di ricostruzione etnografica letterale.

Le nuove destinazioni, tutte con link di ritorno all'Atlante, sono:

- `../dalla-sinfonia-alla-rapsodia/#mm-autore-compositore-joachim-raff`
- `../dalla-sinfonia-alla-rapsodia/#mm-autore-compositore-gustav-holst`
- `../dalla-sinfonia-alla-rapsodia/#mm-autore-compositore-emmanuel-chabrier`

I filtri del catalogo si aprono anche attraverso parametri `?autore=...&opera=...#catalogo`; il testo non aggiunge, simula o avvia video.

### Registro delle relazioni

In `atlante3d/database/collegamenti-sito.json` sono stati aggiunti i tre nuovi collegamenti `author-narrative-anchor` e sono state archiviate tre riserve `percorsi-storici`, conservandone l'evidenza nel file audit VI.

| Indicatore | Dopo Lotto V | Dopo Lotto VI |
| --- | ---: | ---: |
| Nodi censiti | 791 | **791** |
| Rimandi attivi | 463 | **466** |
| Riserve totali | 9 | **6** |
| Riserve narrativo-storiche | 3 | **0** |
| Riserve nel redirect della bozza Avanguardie | 6 | **6** |

Le sei riserve ancora sospese sono **Maurice Ravel, Anton Webern, Ma Rainey, Bessie Smith, Louis Armstrong e Mary Lou Williams**. Appartengono a `post-romanticismo`, redirect storico verso la bozza `verso-le-avanguardie`: non sono state promosse con rimandi a sezioni generiche. Il file della bozza non è stato modificato.

### Anti-regressione e limiti

Il file `tools/check-site-link-registry.mjs` è stato aggiornato in modo che il saldo del Lotto V rimanga *storico* e il Lotto VI diventi il riferimento per il totale corrente: 9 iniziali − 3 nuovi rimandi narrativi = 6 in quarantena. Sono controllate le tre nuove URL storiche e la provenienza delle sei riserve. Restano in vigore i controlli di duplicazione, page/URL, Goldmark e chiusura dei falsi collegamenti ai Concerti.

**Verifiche richieste:** corrispondenza HTML/JSON, ancore generate dai cataloghi, integrità dei collegamenti e controllo che il redirect conservi i frammenti. **Non equivalgono** al collaudo reale su smartphone/desktop, del filtro aperto via URL, dei player, dell'accessibilità o dei media di terzi. Gli esiti del workflow GitHub Actions vanno verificati separatamente.

## Maxi-lotto VII — Audit navigazione, deep link, player e responsive

**Data:** 25 ottobre 2026 · **Branch:** `main` (nessun branch aggiuntivo) · **Nessuna modifica intenzionale alla bozza** `verso-le-avanguardie/index.html`. All'avvio del controllo il branch corrente conteneva già altri commit successivi al Lotto VI, soprattutto su menu e Romanticismo: i file sono stati riletti dal `main` aggiornato prima delle correzioni.

### 1. Audit statico dei collegamenti

Ricognizione sui percorsi principali, inclusi home, Medioevo, Rinascimento, Barocco, Classicismo, Romanticismo, Melodramma, Melodramma classico, Anatomia, le tre audioteche Concerti/Camera/Sinfonica, Parola e canto, Risorgimento, Cinema, Opera lirica e i raccordi editoriali. **881 deep link interni** riscontrati su 18 pagine della prima scansione; non sono state trovate ancore mancanti per le destinazioni incluse. Sette rimandi puntavano a due sottopagine esterne all'elenco iniziale, entrambe poi ispezionate: `melodramma/audioteca/` e `romanticismo/destino-provvidenza/`, con hash esistenti. In un controllo ulteriore sugli identificativi HTML dei 18 documenti della lista allargata, **zero ID statici duplicati**.

Il test `tools/check-page-deeplinks.mjs` ora include quelle due sottopagine anche come **sorgenti**, non soltanto come possibili destinazioni: 18 pagine di ingresso della suite statica anziché 16. I conteggi di apertura si riferiscono alle scansioni del sorgente; l'esito della nuova esecuzione in CI non va presunto.

**Ricontrollo conclusivo della nuova selezione di 18 pagine sorgenti** contro 20 documenti considerati anche come destinazione (comprese la bozza e la pagina redirect, senza modificarle): **862** riferimenti con hash verificati, di cui **855** verso identificativi HTML e **7** verso ancore dinamiche delle guide; **3** passano dal redirect storico. **0 destinazioni mancanti, 0 destinazioni fuori dal perimetro e 0 documenti con ID HTML duplicati**. Questo totale (862) è distinto dagli 881 della ricognizione iniziale perché cambia l'insieme delle pagine sorgenti. Sono dati ottenuti dall'analisi programmatica dei sorgenti remoti correnti, non dai risultati della CI Chromium.

### 2. Due difetti reali nella produzione delle etichette

La stringa JavaScript `/\\s+/g` interpretava una sequenza *backslash + s*, non gli spazi fra parole. È stata sostituita con la regex corretta `/\s+/g` in:
- `assets/atlante-menu-gerarchico-pagine.js`, per i titoli dei paragrafi dei menu delle pagine narrative;
- `shared/atlas-autonav-v1.js`, per le etichette dei sottoindici generati nel menu condiviso.

**Effetto:** le intestazioni vengono abbreviate dopo la normale riduzione di spazi, a capo e tabulazioni; non sono stati alterati href, numerazione o contenuto editoriale.

### 3. Chiusura dei capitoli al ritorno nel menu

In `shared/mm-menu-posizione-v1.js` è stata aggiunta una protezione per i menu `.atlas-autonav` governati da un **pulsante** invece che da un elemento `details`. Alla chiusura del menu principale, un osservatore dello stato `atlas-menu-open` richiude anche gli `<details>` dei capitoli: non devono restare aperti alla visita successiva, inclusi i casi di clic esterno, chiusura tramite pulsante e `Escape`. Un hash malformato non deve più interrompere l'inizializzazione del tracker di lettura. Non è stato reintrodotto alcun meccanismo che apra automaticamente i capitoli durante lo scroll: l'evidenziazione resta visiva.

### 4. Nuova suite Chromium PC + smartphone

Creato `tools/browser-smoke.mjs` e integrato nel workflow esistente `.github/workflows/musurgia-site-links.yml`, nel job separato **Browser Chromium · PC e smartphone**. La suite è predisposta per:
- **16 percorsi** alle larghezze **390** e **1280 px** (32 aperture della pagina);
- verifica di meta viewport, titolo, assenza di autoplay nei player già presenti all'apertura e segnalazione di overflow orizzontale mobile;
- menu del Barocco: apertura e chiusura del capitolo, ritorno all'indice con il capitolo richiuso, `Escape` anche in versione smartphone; screenshot dell'indice aperto a 390 px;
- verifiche browser di **tre hash dinamici**: una scheda da camera (Biber), una vocale (Schönberg) e una sinfonica (Chabrier);
- verifica del lettore sinfonico di Chabrier: nessun iframe prima del clic, caricamento soltanto su richiesta con `autoplay=0`, corretta rimozione del video al comando **Ferma**;
- pubblicazione di screenshot e `report.json` come artefatti diagnostici GitHub Actions, anche in caso di test non superati.

L'esecuzione si svolge su un server locale di repository con **risorse esterne disabilitate volontariamente** per rendere il test riproducibile: controlla interfaccia, struttura DOM e gestione del player, **non** disponibilità reale degli embed o qualità delle registrazioni. GitHub Actions esegue installazione Playwright/Chromium; le modifiche a `shared/atlas-autonav-v1.js`, `shared/mm-menu-posizione-v1.js`, `shared/mm-menu-compatto-v1.js`, `assets/atlante-menu-gerarchico-pagine.js` e allo script di test stesso attivano il workflow.

### 5. Stato editoriale e limiti di verifica

Il Lotto VII **non modifica** `atlante3d/database/collegamenti-sito.json`: rimangono i **466** collegamenti attivi e le **6** riserve editoriali della bozza censite al termine del Lotto VI. Il report del Lotto VI resta la fonte per la riconciliazione degli ID statici e dinamici dell'Atlante.

**Non certificato in questa sessione:** test Playwright concluso con successo, screenshot visuali effettivi, riproduzione dei player YouTube presso terzi, tempi di caricamento su rete reale, accessibilità assistiva e disponibilità HTTP di GitHub Pages. L'accesso web ordinario alle pagine pubbliche non ha reso possibile una verifica visiva attendibile, e gli strumenti GitHub disponibili non hanno restituito uno stato del workflow push concluso. Il nuovo job è **pubblicato e configurato**, non dichiarato passato. Gli eventuali difetti evidenziati dagli artefatti richiederanno un successivo lotto correttivo, sempre su `main`.
