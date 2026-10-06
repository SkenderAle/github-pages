# Musurgia Mundi · Lenti di esplorazione
**Stato:** quattro lenti esplorative con protocollo di ricerca AI e banche dati esterne, 6 ottobre 2026. Il catalogo è in ampliamento e necessita di controllo bibliografico continuativo.

## Riferimento metodologico: Musicmap
Riferimento pubblico: https://musicmap.info/ (consultato per metodo, non per il codice o la grafica).

Musicmap distingue macrofamiglie e generi, opera una riduzione editoriale per mantenere la leggibilità e usa diversi tipi di relazioni fra generi (ascendenze principali, influssi secondari, reazioni). L'impianto integra livelli di dettaglio, descrizioni storiche e ascolti esemplari. Si tratta di una **fonte d'ispirazione progettuale**, non di un dataset da copiare. Le visualizzazioni, il codice, i colori e la struttura di Musurgia Mundi restano originali.

La scelta per Musurgia Mundi: **una sola rete di persone e oggetti musicali, molte lenti di lettura**, con fonti consultabili per ogni rapporto di natura biografica o interpretativa.

## Quattro lenti per il visitatore, cinque gruppi semantici in archivio

- **Storia musicale e scuole** (`musica`): mostra congiuntamente le connessioni storiche del grafo generale e le relazioni documentate del gruppo `scuole`. Comprende scuole storiche, cerchie, istituzioni, trasmissioni e tradizioni senza pretendere che una scuola sia sempre un'organizzazione formalizzata.
- **Maestri, allievi e influenze** (`trasmissioni`): unisce nella visualizzazione i rapporti didattici `formazione` e le influenze `influenze`, senza fonderli nel database. Un insegnante documentato non è lo stesso tipo di relazione di un modello stilistico.
- **Genealogie dei generi** (`genealogie`): ascendenze, contaminazioni, reazioni e rielaborazioni fra forme, generi, compositori e pratiche musicali.
- **Incontri e collaborazioni** (`collaborazioni`): sostegno artistico, lavoro congiunto e scambio musicale. Un incontro non è, da solo, prova di influenza.

**Il database conserva cinque gruppi specialistici**, `scuole`, `formazione`, `influenze`, `genealogie` e `collaborazioni`, e le connessioni del grafo generale. È soltanto l'interfaccia a comporli in quattro lenti: la qualità delle descrizioni e delle fonti non viene sacrificata. La parentela biologica e matrimoniale non è oggetto di nessuna lente.

Le lenti sono filtri espliciti, non una somma indiscriminata. Cambiando lente cambia la domanda posta alla medesima rete.

## Scuole compositive: significato del collegamento

**Una scuola non è una famiglia.** Nel database sono distinte, nella chiave `kind`, l'appartenenza documentata a un sodalizio, l'attività in una cappella o in un centro didattico, il riconoscimento di una tradizione retrospettiva e la trasmissione di un modello attraverso un'opera.

La domanda «Perché sono collegati?» è obbligatoria sia per **scuola → compositore** sia per **scuola → scuola** e **scuola → pratica o genere**. Il database contiene esempi di questi ultimi, come il passaggio della tradizione franco-fiamminga a Venezia, la ricezione policorale in ambito luterano tramite Schütz e il passaggio dal serialismo viennese alla discussione postbellica di Darmstadt.

**Esempi di distinzioni storiche indispensabili:** Peri fu legato soprattutto al successivo ambiente di Jacopo Corsi, mentre Caccini conobbe anche la prima Camerata di Bardi. La dicitura «classicismo viennese» è una categoria storiografica, non un corso frequentato congiuntamente da Haydn, Mozart e Beethoven. Il minimalismo raccoglie ricerche condivise ma anche poetiche differenti. «Scuola di Darmstadt» è una rete di incontri, non un'accademia di compositori che lavoravano all'unisono.

**Copertura del rilascio:** nove nuovi nodi per le scuole e i sodalizi non già rappresentati, quattro nuovi compositori necessari a completare Gruppo dei Cinque e Les Six, più relazioni fra scuole, protagonisti, tecniche e generi. Il fatto che un elemento sia presente in `grafo.json` non lo rende automaticamente membro di una scuola: i rapporti delle lenti devono essere espliciti.

## Dati della lente
Separati in `relazioni.json`, così non alterano l'originaria organizzazione in `grafo.json`.

Ogni `relation` richiede:
| Campo | Significato |
|---|---|
| `id` | Identificatore univoco |
| `group` | Lente di appartenenza |
| `source`, `target` | Due ID validi in `grafo.json`, con orientamento dichiarato |
| `kind` | Natura specifica del rapporto |
| `forward`, `reverse` | Formula verbale letta dai due estremi |
| `note` | **Perché sono collegati?** Testo esplicativo, non frasi generiche |
| `sources` | Indirizzi delle fonti consultabili, almeno uno |
| `status` | Stato della verifica (`documentato`, `in-revisione`) |

Una relazione può essere visibile da entrambi i nodi, ma **la direzione non è invertita**: il figlio non diventa padre, l'allievo non diventa maestro, l'influenzato non diventa influenzatore. Un rapporto interpretativo richiede un commento storico, non soltanto la linea.

## Rilevanza dei nodi
Due nodi catalogati esclusivamente per relazioni familiari, Cosima Wagner e Maria Anna Mozart, sono stati ritirati dall'Atlante musicale; nessuna relazione parentale biologica o matrimoniale entra nelle lenti. Musicisti come Carl Philipp Emanuel Bach, Johann Christian Bach, Leopold Mozart o Siegfried Wagner restano perché hanno una produzione musicale propria, **mai perché sono figli o padri di qualcuno**. Il tipo `persona` resta ammesso per figure artisticamente pertinenti, come Angelo Tesei quale docente di Rossini.

## Percorso di esplorazione
1. Scegli una sfera e, se lo desideri, una lente.
2. Vedi soltanto i legami diretti del tipo scelto. Gli altri restano attenuati.
3. Puoi fare clic su una linea o su «Perché sono collegati?» per consultare nota e fonti.
4. Selezionando una persona collegata il centro della rete cambia, ma la lente rimane attiva.
5. Tornando a «Storia musicale e scuole» si recupera la rete originaria insieme alle scuole documentate.
6. Il pulsante «Etichette: tutte» continua a interessare soprattutto la vista musicale.

## Fonti e riscontri per le scuole
- Treccani, Ars antiqua e Notre-Dame: https://www.treccani.it/enciclopedia/l-ars-antiqua_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- Treccani, le scuole franco-fiamminghe: https://www.treccani.it/enciclopedia/fiammingo/
- Treccani, le cappelle e le scuole veneziane: https://www.treccani.it/enciclopedia/musica-e-musicisti_%28Storia-di-Venezia%29/
- Treccani, Animuccia e scuola romana: https://www.treccani.it/enciclopedia/giovanni-animuccia_%28Enciclopedia-Italiana%29/
- Treccani, la Camerata e il successivo cenacolo di Corsi: https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- Treccani, scuola di Mannheim: https://www.treccani.it/enciclopedia/mannheim/
- Treccani, Gruppo dei Cinque e Les Six: https://www.treccani.it/enciclopedia/gruppo-dei-cinque/ e https://www.treccani.it/enciclopedia/gruppo-dei-sei/
- Treccani, Seconda scuola di Vienna e Darmstadt: https://www.treccani.it/enciclopedia/la-seconda-scuola-di-vienna-schonberg-berg-webern_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/ e https://www.treccani.it/enciclopedia/stockhausen-e-la-scuola-di-darmstadt-boulez_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- Fonti puntuali associate alle singole relazioni in `sources`.


## Genealogie, categorie e direzioni: criteri redazionali

La nozione di «parentela influenzale» è **trasversale alle persone e ai generi**, ma non annulla la differenza storica fra oggetti di natura diversa. Sono ammissibili, quando motivati e documentati:

- Compositore → compositore: insegnamento, influenza diretta, ricezione, reazione estetica, sostegno professionale. Lo stesso rapporto può comparire in più lenti **soltanto quando rappresenta fatti distinti e ciascuno è spiegato**. Nessun arco biografico è inserito per semplice parentela anagrafica.
- Genere → genere: nascita, derivazione, contaminazione, confronto, convergenza tecnologica. Non trasformare analogie o successioni in genealogie certe.
- Genere/pratica → compositore: repertorio, coltivazione, trasformazione, introduzione o codificazione. Il verso indica **la lettura editoriale specificata da `forward`/`reverse`**, non una semplice causalità biologica.
- In futuro, opera ↔ genere ↔ tecnica ↔ compositore: l'opera sarà un nodo autonomo se è il tramite documentabile della relazione.

**Ontologia da affinare:** `corrente` è per ora un contenitore grafico che ospita oggetti distinti. Opera buffa e grand opéra sono generi teatrali; belcanto è anzitutto pratica vocale e tradizione stilistica; dodecafonia è una tecnica di composizione; minimalismo designa un insieme di orientamenti; musica concreta è pratica compositiva basata su suoni registrati. **Non sono categorie intercambiabili.** In via incrementale i nuovi nodi possono precisare `semantic_type`, senza cambiare il campo `type` su cui si basa la visualizzazione.

**Direzionalità visiva:** nelle lenti Scuole, Maestri, Influenze e Genealogie le frecce seguono `source → target`. Le linee tratteggiate segnalano, nei casi tipizzati, rapporti non lineari come affinità o tradizioni mediate e contaminazioni o convergenze fra pratiche. La linea continua non certifica, da sola, un nesso causale: bisogna leggere la scheda «Perché sono collegati?».

**Esempi già catalogati:** Haydn → Mozart è modello quartettistico, **non** rapporto di insegnamento; Beethoven → Brahms è confronto sinfonico, mentre Schumann → Brahms rappresenta sostegno critico; Brahms → Dvořák è documentato separatamente come sostegno editoriale e come modello per una scelta compositiva; Schönberg, Berg e Webern incrociano la dodecafonia, e Schaeffer e Henry la musica concreta. Quest'ultima va distinta dalla produzione di suoni mediante oscillatori, benché le tradizioni siano confluite nella ricerca elettroacustica.

## Fonti aggiunte nella revisione del 6 ottobre 2026

- Beethoven-Haus Bonn, insegnanti di Beethoven: https://internet.beethoven.de/en/exhibition/beethoven-on-postage-stamps/
- Fondazione Mozarteum, quartetti dedicati a Haydn: https://kv.mozarteum.at/en/work/sechs-quartette-8671
- Biblioteca musicale di Yale, Schumann e «Neue Bahnen»: https://musiclib-exhibits.library.yale.edu/exhibits/schumann/neue_zeitschrift.html
- Berliner Philharmoniker, Brahms, Beethoven e Dvořák: https://www.berliner-philharmoniker.de/en/stories/dvoraks-path-to-fame/
- Antonín Dvořák, archivio biografico su Josef Suk: https://www.antonin-dvorak.cz/en/index-of-names/suk-josef-1874-1935/
- Arnold Schönberg Center, metodo dei dodici suoni: https://schoenberg.at/en/exhibitions/past-exhibitions/composition-with-twelve-tones
- IRCAM, schede monografiche su Berg, Webern, Stravinskij, Glass: https://ressources.ircam.fr/
- Treccani, musica concreta: https://www.treccani.it/enciclopedia/musica-concreta/
- Biografia ufficiale di Steve Reich: https://stevereich.com/biography/
- Biografia ufficiale di Philip Glass: https://philipglass.com/biography/

La presenza di un link nella scheda prova soltanto che è **stata indicata una fonte**: ogni rapporto controverso richiede confronto con il passo pertinente e verifica periodica dell'indirizzo. Il validatore locale garantisce l'integrità strutturale, non la verità delle relazioni storiche né la disponibilità in tempo reale di siti terzi.

## Limiti dichiarati e sviluppi
Questo rilascio **non è una genealogia esaustiva**. L'assenza di una relazione musicologica significa soltanto che il rapporto non è ancora catalogato. Alcune fonti relative alle influenze sono generaliste e andranno sostituite da studi musicologici di maggiore dettaglio. Prima di ampliare la rete: controllare i nodi esistenti, le grafie onomastiche, la direzione della relazione, l'epoca, la fonte e gli eventuali casi contestati.

Sviluppi previsti: cronologia a livelli, filtro delle opere e delle pratiche compositive, dinamica fra società e tecnologia, luoghi biografici distinti dalla cittadinanza moderna, intensità/certezza dei rapporti, percorsi guidati di cinque tappe con confronto fra ascolti.

## Controlli per la pubblicazione
Lo script `verifica-relazioni.mjs` controlla: identificativi esistenti, unicità delle relazioni, categorie di lente riconosciute, etichette nei due versi e almeno una URL HTTPS per relazione documentata.


## Banche dati come motore della ricerca

Ogni nuovo compositore presente in `grafo.json` deve essere riconciliato mediante `identita-esterne.json` con Wikidata (QID) e, quando disponibile, MusicBrainz (MBID). L'estrattore `ricerca-fonti.mjs` usa P1066, P802 e P737 di Wikidata e i rapporti docente-allievo di MusicBrainz per produrre **candidati**, non relazioni pubblicate. Ogni candidato mantiene il verso, il predicato originale e il collegamento alla sorgente, in modo che il webmaster o l'AI possano effettuare il confronto con Treccani, fonti archivistiche o studi specialistici.

Regole operative, struttura di un candidato e criteri di verifica sono in `PROTOCOLLO_RICERCA_AI.json`. Il registro di tutti i nomi si trova in `identita-esterne.json`; il funzionamento tecnico e il percorso di lavoro sono illustrati in `LEGGIMI_RICERCA_AI.md`.

L'esperimento iniziale Christian Gottlob Neefe → Ludwig van Beethoven mostra il metodo: identificazione Wikidata, riscontro del rapporto di insegnamento presso il Beethoven-Haus Bonn, aggiunta del compositore e inserimento della relazione di formazione con le fonti. L'estrazione dei candidati e l'esecuzione remota GitHub Actions vanno ulteriormente collaudate su rete.
