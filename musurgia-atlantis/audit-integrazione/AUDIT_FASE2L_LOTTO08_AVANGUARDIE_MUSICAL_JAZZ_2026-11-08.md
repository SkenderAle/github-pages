# Musurgia Atlantis — Fase 2L · Lotto 08: avanguardie, musical e jazz

**Data:** 2026-11-08 · **Branch:** main · **Ambito:** solo `musurgia-atlantis/audit-integrazione/`. Nessuna modifica in produzione.

## Perimetro e risultato

**20 gruppi 141–160** di corrispondenza di estremi base↔specialistico controllati: **40/40 registrazioni originali conservate** (20 base, 20 specialistiche). **160/250** gruppi totali vagliati (**64%**); **90** rimanenti. **14/14 controlli strutturali superati**. Nessuna fusione, cancellazione, deduplicazione, sblocco dei gate o modifica delle interfacce pubbliche. Le frasi base generate dal JS restano in attesa del port fedele di `relationSentence` e delle tre ridefinizioni.

## Tabella delle classificazioni

| N. | Estremi normalizzati | Decisione preliminare |
|---:|---|---|
| 141 | `legacy:modernita-francese-primo-novecento|pers:erik-satie` | `independent_french_modernism` |
| 142 | `legacy:scuola-darmstadt|pers:pierre-boulez` | `darmstadt_courses_not_school_membership` |
| 143 | `legacy:gruppo-dei-sei|pers:poulenc` | `six_historical_membership` |
| 144 | `legacy:gruppo-dei-sei|pers:darius-milhaud` | `six_historical_membership` |
| 145 | `legacy:gruppo-dei-sei|pers:arthur-honegger` | `six_historical_membership` |
| 146 | `legacy:seconda-scuola-vienna|pers:schonberg` | `second_vienna_founder` |
| 147 | `legacy:seconda-scuola-vienna|pers:alban-berg` | `second_vienna_pupil_member` |
| 148 | `legacy:seconda-scuola-vienna|pers:anton-webern` | `second_vienna_pupil_member` |
| 149 | `legacy:generazione-1880-musica-italiana|pers:alfredo-casella` | `generation_1880_storiographic_source_warning` |
| 150 | `legacy:generazione-1880-musica-italiana|pers:gian-francesco-malipiero` | `generation_1880_storiographic` |
| 151 | `legacy:musica-del-rumore-futurista|pers:luigi-russolo` | `noise_art_1913_specific` |
| 152 | `legacy:avanguardia-italiana-secondo-novecento|pers:luigi-nono` | `italian_postwar_avantgarde_plural` |
| 153 | `legacy:avanguardia-italiana-secondo-novecento|pers:luciano-berio` | `italian_postwar_avantgarde_plural` |
| 154 | `legacy:avanguardia-italiana-secondo-novecento|pers:bruno-maderna` | `italian_postwar_avantgarde_plural` |
| 155 | `legacy:teatro-musicale-broadway|pers:george-gershwin` | `broadway_musical_documented_collaboration` |
| 156 | `legacy:rapsodia-jazz-e-sala-da-concerto|pers:george-gershwin` | `rhapsody_blue_original_orchestration` |
| 157 | `legacy:avanguardia-americana-indeterminazione|pers:cage` | `cage_indeterminacy_specific_performance` |
| 158 | `legacy:pianoforte-preparato-novecentesco|pers:cage` | `cage_prepared_piano_1940_source_guard` |
| 159 | `legacy:teatro-musicale-broadway|pers:bernstein` | `broadway_musical_credits_exact` |
| 160 | `legacy:jazz-orchestrale-big-band|pers:duke-ellington` | `ellington_bigband_composer_director` |

## Analisi caso per caso

### Gruppo 141 — legacy:modernita-francese-primo-novecento|pers:erik-satie

Satie incarna una traiettoria individuale della modernità musicale francese. La categoria non è una scuola unitaria e non prova rapporti diretti con Debussy o Ravel.

**Cautele:** poetiche individuali; nessun ponte tra membri. **Originali:** `base2K:1471` e `special2K:cat-scuole-modernita-francese-primo-novecento-erik-satie`. **Predicato specialistico:** `ricerca-francese-non-uniforme`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Satie rappresentò un percorso eccentrico della modernità francese, con gesti antiretorici e sperimentazioni ripetitive.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/debussy-ravel-satie-la-musica-francese-del-primo-novecento_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>

### Gruppo 142 — legacy:scuola-darmstadt|pers:pierre-boulez

Boulez partecipò al confronto musicale dei Ferienkurse di Darmstadt; «scuola» è una comoda etichetta storiografica, non un istituto di appartenenza esclusiva. Nessuna relazione personale automaticamente dedotta dai corsi.

**Cautele:** specificare corso/funzione/anno ove documentato. **Originali:** `base2K:1474` e `special2K:scuola-darmstadt-pierre-boulez`. **Predicato specialistico:** `protagonista-dei-corsi`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Boulez è una delle figure più rappresentative dei Ferienkurse di Darmstadt, luogo di confronto sul serialismo e sulle possibilità di nuova organizzazione musicale.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/stockhausen-e-la-scuola-di-darmstadt-boulez_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>

### Gruppo 143 — legacy:gruppo-dei-sei|pers:poulenc

Poulenc fu membro del Gruppo dei Sei. La membership condivisa va registrata come fatto collettivo, non prova di uniformità stilistica o insegnamento reciproco.

**Cautele:** gruppo reale; relazioni interpersonali autonome. **Originali:** `base2K:1475` e `special2K:scuola-dei-sei-francis-poulenc`. **Predicato specialistico:** `membro-del-gruppo`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Francis Poulenc fu fra i Six e trasformò l'estetica di semplicità e ironia del dopoguerra attraverso teatro, canzone e musica sacra.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>

### Gruppo 144 — legacy:gruppo-dei-sei|pers:darius-milhaud

Milhaud fu membro del Gruppo dei Sei, con poetica distinta e interesse per jazz e politonalità. L'appartenenza non unifica attività né legami personali.

**Cautele:** gruppo reale; poetiche non equivalenti. **Originali:** `base2K:1477` e `special2K:scuola-dei-sei-darius-milhaud`. **Predicato specialistico:** `membro-del-gruppo`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Darius Milhaud fu fra i sei compositori nominati da Henri Collet nel 1920, portando nel sodalizio una poetica individuale aperta a jazz e politonalità.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>

### Gruppo 145 — legacy:gruppo-dei-sei|pers:arthur-honegger

Honegger fu membro del Gruppo dei Sei, pur con un idioma sinfonico e drammatico individuale. Evitare di inferire che tutti i Sei condividessero lo stesso programma estetico.

**Cautele:** gruppo reale; nessuna pedagogia implicita. **Originali:** `base2K:1478` e `special2K:scuola-dei-sei-arthur-honegger`. **Predicato specialistico:** `membro-del-gruppo`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Arthur Honegger era uno dei Six, pur coltivando una sensibilità sinfonica e drammatica diversa da quella degli altri compagni.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>

### Gruppo 146 — legacy:seconda-scuola-vienna|pers:schonberg

Schönberg figura come riferimento formativo della Seconda scuola di Vienna. La relazione fra persona e corrente non sostituisce i distinti fatti maestro→Berg e maestro→Webern.

**Cautele:** fatti personali richiedono archi e fonti propri. **Originali:** `base2K:1488` e `special2K:scuola-seconda-scuola-vienna-arnold-schonberg`. **Predicato specialistico:** `guida-della-scuola`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Schönberg è il fondatore del nucleo viennese che esplorò l'atonalità libera e in seguito il metodo dei dodici suoni.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/la-seconda-scuola-di-vienna-schonberg-berg-webern_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>

### Gruppo 147 — legacy:seconda-scuola-vienna|pers:alban-berg

Berg fu allievo di Schönberg e protagonista della Seconda scuola viennese: insegnamento diretto e appartenenza storiografica sono predicati diversi, non un solo collegamento transitivo.

**Cautele:** distinguere formazione e corrente. **Originali:** `base2K:1489` e `special2K:scuola-seconda-scuola-vienna-alban-berg`. **Predicato specialistico:** `allievo-e-protagonista`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Berg fu allievo di Schönberg e uno dei principali autori della Seconda scuola di Vienna, con una scrittura che accolse anche forti elementi espressivi e drammatici.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/la-seconda-scuola-di-vienna-schonberg-berg-webern_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>

### Gruppo 148 — legacy:seconda-scuola-vienna|pers:anton-webern

Webern fu allievo di Schönberg e protagonista della Seconda scuola viennese. Non usarne la categoria comune per inventare passaggi fra allievi.

**Cautele:** distinguere formazione e corrente. **Originali:** `base2K:1491` e `special2K:scuola-seconda-scuola-vienna-anton-webern`. **Predicato specialistico:** `allievo-e-protagonista`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Webern studiò con Schönberg e sviluppò una scrittura concentrata, contribuendo all'eredità della Seconda scuola di Vienna nel Novecento.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/la-seconda-scuola-di-vienna-schonberg-berg-webern_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>

### Gruppo 149 — legacy:generazione-1880-musica-italiana|pers:alfredo-casella

Casella appartiene alla cosiddetta generazione dell'Ottanta; categoria storiografica, non sodalizio chiuso. La fonte specialistica registrata rinvia però alla scheda di Malipiero e va sostituita/affiancata con fonte pertinente prima di convalida della singola relazione.

**Cautele:** ALLERTA fonte fuori soggetto: Casella→scheda Malipiero. **Originali:** `base2K:1496` e `special2K:cat-scuole-generazione-1880-musica-italiana-alfredo-casella`. **Predicato specialistico:** `rinnovamento-strumentale-italiano`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Casella favorì la circolazione europea dei linguaggi novecenteschi e il rilancio della musica strumentale in Italia.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/gian-francesco-malipiero/>

### Gruppo 150 — legacy:generazione-1880-musica-italiana|pers:gian-francesco-malipiero

Malipiero appartiene alla generazione dell'Ottanta; la sua rilettura della tradizione italiana non va equiparata all'attività di Casella né fatta diventare un rapporto di maestro-allievo.

**Cautele:** categoria storiografica; biografie individuali. **Originali:** `base2K:1497` e `special2K:cat-scuole-generazione-1880-musica-italiana-gian-francesco-malipiero`. **Predicato specialistico:** `rinnovamento-strumentale-italiano`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Malipiero reinterpretò la musica italiana dei secoli precedenti in una ricerca antiromantica di forme e linguaggi nuovi.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/gian-francesco-malipiero/>

### Gruppo 151 — legacy:musica-del-rumore-futurista|pers:luigi-russolo

Russolo: manifesto L'arte dei rumori e intonarumori del 1913. Legame con una pratica e strumenti determinati; non implica continuità diretta documentata con ogni successiva musica elettronica.

**Cautele:** fatto tecnologico e manifesto distinti. **Originali:** `base2K:1498` e `special2K:audit8g-russolo-rumorismo`. **Predicato specialistico:** `arte-dei-rumori-intonarumori-1913`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Russolo scrisse L’arte dei rumori (1913) e inventò famiglie di intonarumori per una pratica musicale fondata sull’organizzazione dei rumori; il collegamento è storico-tecnologico e non mera somiglianza con musica elettronica successiva.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/luigi-carlo-filippo-russolo_%28Dizionario-Biografico%29/> · <https://www.treccani.it/enciclopedia/intonarumori/>

### Gruppo 152 — legacy:avanguardia-italiana-secondo-novecento|pers:luigi-nono

Nono: ricerca seriale, attenzione politica e sviluppo successivo dell'ascolto/elettroacustica. L'avanguardia italiana è un contenitore plurale, non un'organizzazione e non un ponte fra tutti i suoi autori.

**Cautele:** una poetica non equivale all'altra. **Originali:** `base2K:1499` e `special2K:cat-scuole-avanguardia-italiana-secondo-novecento-luigi-nono`. **Predicato specialistico:** `ricerca-musicale-del-dopoguerra`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Nono trasformò il linguaggio seriale e la ricerca elettroacustica in un percorso personale con forte attenzione alla storia e all'ascolto.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/italia/>

### Gruppo 153 — legacy:avanguardia-italiana-secondo-novecento|pers:luciano-berio

Berio: sperimentazione della voce, studio dei linguaggi ed elettronica. Distinguere appartenenza al contesto da fatti collaborativi particolari (come lo Studio di fonologia RAI), da documentare con archi propri.

**Cautele:** attenzione a collaborazione documentata con Maderna. **Originali:** `base2K:1500` e `special2K:cat-scuole-avanguardia-italiana-secondo-novecento-luciano-berio`. **Predicato specialistico:** `ricerca-musicale-del-dopoguerra`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Berio sviluppò la ricerca elettronica e una scrittura aperta all'esplorazione della voce e alla relazione fra suoni, parole e gesti.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/italia/>

### Gruppo 154 — legacy:avanguardia-italiana-secondo-novecento|pers:bruno-maderna

Maderna: composizione e direzione oltre alla ricerca elettronica. La fondazione dello Studio di fonologia RAI con Berio è un fatto interpersonale/istituzionale separato dal generico nodo «avanguardia».

**Cautele:** fonte specialistica generale troppo ampia per fatto specifico. **Originali:** `base2K:1501` e `special2K:cat-scuole-avanguardia-italiana-secondo-novecento-bruno-maderna`. **Predicato specialistico:** `ricerca-musicale-del-dopoguerra`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Maderna fu fra i principali compositori italiani del dopoguerra e fondò con Berio lo Studio di fonologia musicale della RAI a Milano.
**Fonti registrate:** <https://www.treccani.it/enciclopedia/italia/>

### Gruppo 155 — legacy:teatro-musicale-broadway|pers:george-gershwin

George Gershwin compose musical per Broadway con Ira autore di testi: la Library of Congress attesta quindici musical in collaborazione, a partire da Lady, Be Good! (1924). Ira resta persona distinta, non fusione di identità.

**Cautele:** compositore e paroliere due ruoli distinti. **Originali:** `base2K:1506` e `special2K:audit8-gershwin-broadway`. **Predicato specialistico:** `produzione-musical-broadway`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** La Library of Congress documenta quindici musical di Broadway scritti da George Gershwin con Ira Gershwin, a partire da Lady, Be Good! (1924), oltre alle opere da concerto e al successivo Porgy and Bess. Si tratta di produzione teatrale verificata.
**Fonti registrate:** <https://www.loc.gov/collections/george-and-ira-gershwin-treasures/about-this-collection/>
**Controllo mirato aggiuntivo:** 15 Broadway musicals with Ira, Lady Be Good! 1924 (<https://www.loc.gov/collections/george-and-ira-gershwin-treasures/about-this-collection/>).

### Gruppo 156 — legacy:rapsodia-jazz-e-sala-da-concerto|pers:george-gershwin

Rhapsody in Blue, prima 12 febbraio 1924, musica di George Gershwin, orchestrazione della prima versione per l'ensemble di Whiteman realizzata da Ferde Grofé. Non attribuire a Grofé la composizione né confondere arrangiamenti successivi.

**Cautele:** distinzione composizione/orchestrazione e versioni. **Originali:** `base2K:1507` e `special2K:audit8e-rhapsody-jazz-gershwin`. **Predicato specialistico:** `ibridazione-jazz-concerto-1924`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Rhapsody in Blue rese udibile nel 1924 un dialogo tra linguaggi jazz, pianoforte solista e una grande forma concertistica, con orchestrazione di Ferde Grofé; la Library of Congress documenta l’ibridazione e la sua influenza successiva.
**Fonti registrate:** <https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/>
**Controllo mirato aggiuntivo:** 12 February 1924; Gershwin piano/music; Grofé original orchestration (<https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/>).

### Gruppo 157 — legacy:avanguardia-americana-indeterminazione|pers:cage

Cage: pratiche aleatorie/indeterminate e Reunion (1968). Il dispositivo scacchistico con Lowell Cross attivava musiche di autori diversi; non attribuire a Cage tutte le composizioni eseguite, né dedurre relazioni personali da «avanguardia americana».

**Cautele:** separare evento, meccanismo, compositori delle musiche. **Originali:** `base2K:1509` e `special2K:audit6-cage-indeterminazione`. **Predicato specialistico:** `ricerca-sperimentale-indeterminazione`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** John Cage elaborò musica fondata su operazioni casuali e indeterminazione esecutiva: il progetto Reunion del 1968 impiega una partita a scacchi come struttura aperta per la distribuzione sonora. L'arco riguarda una specifica pratica compositiva e il suo contributo storico, non la cittadinanza americana.
**Fonti registrate:** <https://johncage.org/reunion> · <https://johncage.org/cage-autobiographical-statement>
**Controllo mirato aggiuntivo:** 1968 Reunion, Lowell Cross chessboard, separate compositions (<https://johncage.org/reunion>).

### Gruppo 158 — legacy:pianoforte-preparato-novecentesco|pers:cage

Bacchanale (1940) e il pianoforte preparato sono documentati dal John Cage Trust. Il URL Library of Congress registrato nel record specialistico sembra identificare un'altra opera, Wonderful Widow of Eighteen Springs: richiede fonte mirata per l'affermazione su Bacchanale.

**Cautele:** ALLERTA fonte di attribuzione non pertinente al titolo. **Originali:** `base2K:1510` e `special2K:audit8e-cage-pianoforte-preparato`. **Predicato specialistico:** `sperimentazione-pianistica-1940`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** La Library of Congress documenta le sperimentazioni sul pianoforte preparato già con Bacchanale (1940), dalle quali Cage derivò nuove possibilità timbriche e ritmiche.
**Fonti registrate:** <https://www.loc.gov/collections/moldenhauer-archives/articles-and-essays/guide-to-archives/wonderful-widow-of-eighteen-springs/>
**Controllo mirato aggiuntivo:** Bacchanale 1940 and prepared piano documented by Trust; legacy LOC URL likely title mismatch (<https://johncage.org/>).

### Gruppo 159 — legacy:teatro-musicale-broadway|pers:bernstein

Bernstein compose le musiche di West Side Story, debutto Broadway 26 settembre 1957; book di Arthur Laurents, lyrics di Stephen Sondheim, ideazione/coreografia/regia di Jerome Robbins. Non confondere le responsabilità e non assimilare automaticamente al cinema del 1961.

**Cautele:** precisare ruoli teatrali e distinzione versione film. **Originali:** `base2K:1512` e `special2K:audit8-bernstein-broadway`. **Predicato specialistico:** `composizione-musical-broadway`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Bernstein compose West Side Story, debuttato a Broadway il 26 settembre 1957 con libretto di Arthur Laurents, testi di Stephen Sondheim e coreografia di Jerome Robbins. Il teatro musicale è un’attività documentata accanto alla direzione e alla composizione sinfonica.
**Fonti registrate:** <https://leonardbernstein.com/works/view/9/west-side-story> · <https://www.loc.gov/collections/leonard-bernstein/about-this-collection/>
**Controllo mirato aggiuntivo:** 26 September 1957 Broadway premiere, creative credits (<https://leonardbernstein.com/works/view/9/west-side-story>).

### Gruppo 160 — legacy:jazz-orchestrale-big-band|pers:duke-ellington

Duke Ellington dirigeva e componeva per la propria orchestra: scrittura calibrata sui musicisti e colori strumentali. Big band è una pratica/organico, non prova di relazione personale con ogni altro jazzista.

**Cautele:** distinguere direzione/composizione da puro stile. **Originali:** `base2K:1516` e `special2K:audit8-ellington-bigband`. **Predicato specialistico:** `composizione-e-direzione-big-band`. Entrambi i frammenti `forward/reverse` sono conservati esattamente nel JSON; il rendering della frase completa è ancora da testare.
**Nota originale specialistica:** Ellington diresse una delle principali big band jazz e compose sfruttando consapevolmente i timbri e le peculiarità dei suoi solisti. Lo Smithsonian conserva documentazione orchestrale e partiture della sua attività.
**Fonti registrate:** <https://music.si.edu/story/duke-ellington-smithsonian> · <https://amhistory.si.edu/documentsgallery/exhibitions/ellington_strayhorn_2.html>

## Allarmi documentali e di modellazione

1. **Gruppo 149, Casella:** il record specialistico attribuito a Casella cita in `sources` una scheda Treccani su **Gian Francesco Malipiero**; l'ID rimane integro per audit ma la fonte non prova direttamente quel rapporto. Non propagare come citazione già convalidata.
2. **Gruppo 158, Cage:** il link Library of Congress registrato riguarda `wonderful-widow-of-eighteen-springs` e non offre di per sé una prova specifica del **Bacchanale** 1940; il John Cage Trust fornisce la verifica mirata. Annotare differenza prima di un eventuale rilascio.
3. **Gruppo 157, Reunion:** il progetto è di Cage con apparato di **Lowell Cross** e performance che attiva musica di altri compositori. Non trasformare Cage nell'autore esclusivo di ogni musica dell'evento.
4. **Gruppo 156, Gershwin:** **Grofé orchestratore** della versione 1924 per Paul Whiteman, **Gershwin compositore**; non scambiare la versione originaria con le successive orchestrazioni sinfoniche. Documento Library of Congress: <https://www.loc.gov/collections/songs-of-america/articles-and-essays/articles-about-songs/rhapsody-in-blue/>.
5. **Gruppi 146–148:** un vero rapporto formativo Schönberg→Berg/Webern va rappresentato da fatti interpersonali documentati, mai da un tragitto «persona→Seconda scuola→persona». Lo stesso vale per i Sei e per Darmstadt.
6. **Gruppi 152–154:** l'etichetta avanguardia italiana accomuna poetiche differenti; la scheda specialistica di Maderna usa una fonte generica per la notizia specifica dello Studio di fonologia. Cercare riscontro puntuale prima di autorizzare un arco personale Berio↔Maderna.

## Controlli eseguiti

- PASS — Exactly 20 numbered groups 141–160
- PASS — 250 source groups maintained
- PASS — 40 records exactly 20 base + 20 specialist
- PASS — All source stage IDs resolved
- PASS — Original endpoints and kinds identical to index
- PASS — All 20 mapped unordered endpoint pairs agree
- PASS — Original raw payloads all preserved
- PASS — Specialist forward and reverse all retained
- PASS — All original notes and sources preserved
- PASS — Base JS renderer port remains outstanding
- PASS — No automatic dedup or unlocking of historical traversal
- PASS — Casella 149 and Cage 158 source mismatch cautions flagged
- PASS — Genres and movements never give person-to-person BFS shortcuts
- PASS — No production file is target of the write operation

## Limiti espliciti

- Il triage preserva dati e distingue relazioni; non è certificazione storico-filologica individuale di ciascuno dei 40 archi.
- La funzione finale `relationSentence`, incluse le tre ridefinizioni, non è stata portata né confrontata letteralmente in entrambe le direzioni.
- Hover desktop, tap Android, pertinenza radicata I–V sull'intero grafo e merge reversibile restano da collaudare.
- I 3.856 archi legacy e 1.718 Atlantis, i 210 lotti storici e tutti i file pubblici restano intatti.

**Prossima ripresa:** Lotto 09, gruppi **161–180**; priorità parallela: adapter testabile fedele delle spiegazioni e filtro di pertinenza radicata.
