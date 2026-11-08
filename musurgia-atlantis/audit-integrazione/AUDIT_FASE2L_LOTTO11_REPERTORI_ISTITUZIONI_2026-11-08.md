# Musurgia Atlantis — Fase 2L · Lotto 11, gruppi 201–220

**8 novembre 2026 · branch main · solo staging d'audit.**

## Perimetro
**20 gruppi**, **40 originali** (20 base, 20 specialistici, 0 d'estensione). **16/16 test di coerenza e integrità strutturale PASS.** Raggiunti **220/250** gruppi; **30** da analizzare. Le decisioni sono triage semantico senza deduplicazioni né apertura dei gate. Non equivalgono alla certificazione filologica completa.

## Analisi integrale dei gruppi
### 201 — `legacy:belcanto|pers:donizetti`

Donizetti e Lucia di Lammermoor (1835): belcanto come scrittura e pratica vocale, non genere d'opera esclusivo.

**Base:** `base2K:1935`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Lucia di Lammermoor (1835). Relazione musicologica: tradizione vocale del belcanto romantico; pratica stilistica, non sodalizio. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:gen-belcanto-gaetano-donizetti`, tipo `repertorio-e-trasformazione`. **Forward:** `fu praticato o trasformato da` · **Reverse:** `coltivò o trasformò il genere di`. **Nota:** Donizetti rielaborò il canto italiano verso una drammaturgia fortemente patetica..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/gaetano-donizetti_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 202 — `legacy:grand-opera|pers:rossini`

Rossini e Guillaume Tell (1829), opera francese in quattro atti: antecedente importante del grand opéra, non equivalente a tutti i lavori rossiniani.

**Base:** `base2K:1936`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Guillaume Tell (1829). Relazione musicologica: grand opéra francese; distinto dalle sue precedenti opere italiane. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:gen-grand-opera-gioachino-rossini`, tipo `repertorio-e-trasformazione`. **Forward:** `fu praticato o trasformato da` · **Reverse:** `coltivò o trasformò il genere di`. **Nota:** Guillaume Tell è uno dei primi grandi modelli di grand opéra francese..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontro esterno limitato:** Prima di Guillaume Tell, 3 agosto 1829 (<https://www.rossinioperafestival.it/soggetti/guillaume-tell/>).

### 203 — `legacy:grand-opera|pers:verdi`

Verdi: Les vêpres siciliennes (1855) e Don Carlos (1867) per Parigi; Aida recepisce convenzioni spettacolari ma non si identifica senza distinzione con le due opere francesi.

**Base:** `base2K:1937`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Les vêpres siciliennes (1855), Don Carlos (1867). Relazione musicologica: grands opéras per Parigi; Aida ne riprende modelli ma non si equipara senza distinzione. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:gen-grand-opera-giuseppe-verdi`, tipo `repertorio-e-trasformazione`. **Forward:** `fu praticato o trasformato da` · **Reverse:** `coltivò o trasformò il genere di`. **Nota:** Verdi affrontò il repertorio teatrale francese con opere concepite per grandi scene storiche e corali..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/opera/>.

### 204 — `legacy:grand-opera|pers:donizetti`

Donizetti: La Favorite (1840) nella tradizione del grand opéra francese; distinguere opera, versione, istituzione e categoria storiografica.

**Base:** `base2K:1938`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: La Favorite (1840). Relazione musicologica: grand opéra francese in quattro atti rappresentato all'Opéra di Parigi. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:gen-grand-opera-gaetano-donizetti`, tipo `repertorio-e-trasformazione`. **Forward:** `fu praticato o trasformato da` · **Reverse:** `coltivò o trasformò il genere di`. **Nota:** Donizetti lavorò anche al teatro francese e a opere destinate al grande repertorio parigino..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/opera/>.

### 205 — `legacy:opera-comique|pers:daniel-francois-esprit-auber`

Auber: Fra Diavolo (1830), opéra-comique con dialoghi; 'comique' non significa necessariamente trama farsesca e non è sinonimo di opera buffa italiana.

**Base:** `base2K:1939`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Fra Diavolo (1830). Relazione musicologica: opéra-comique francese, con dialoghi parlati. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:gen-opera-comique-daniel-francois-esprit-auber`, tipo `repertorio-e-trasformazione`. **Forward:** `fu praticato o trasformato da` · **Reverse:** `coltivò o trasformò il genere di`. **Nota:** Auber fu un maestro dell'opéra-comique francese, accanto al contributo di Rossini al suo gusto teatrale..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/daniel-francois-esprit-auber_%28Enciclopedia-Italiana%29/>.

### 206 — `legacy:opera-comique|pers:bizet`

Bizet: Carmen (1875), opéra-comique originale con dialoghi e soggetto tragico; non confondere con versioni successive a recitativi.

**Base:** `base2K:1940`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Carmen (1875). Relazione musicologica: opéra-comique originale con dialoghi parlati; non equivale a commedia leggera. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:audit8f-opera-comique-bizet`, tipo `carmen-1875-opera-comique-serio`. **Forward:** `fu trasformato nel repertorio drammatico di` · **Reverse:** `compose Carmen come opéra-comique nel`. **Nota:** Carmen di Bizet debuttò alla Salle Favart il 3 marzo 1875 come opéra-comique con dialoghi, pur con un soggetto tragico. L’opera mostra che il termine non coincide con opera comica nel senso di vicenda allegra..
**Fonti originali specialist:** <https://www.opera-comique.com/fr/spectacles/carmen-0>.

### 207 — `legacy:opera-comique|pers:ambroise-thomas`

Ambroise Thomas: Mignon (1866), opéra-comique sentimentale; l'etichetta condivisa con Carmen non implica identica struttura né rapporto personale.

**Base:** `base2K:1942`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Mignon (1866). Relazione musicologica: opéra-comique in tre atti, attestata dal teatro storico di riferimento. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:audit8f-opera-comique-thomas`, tipo `mignon-1866-opera-comique`. **Forward:** `annoverò il successo di Mignon di` · **Reverse:** `scrisse Mignon per il contesto di`. **Nota:** Mignon fu creata all’Opéra-Comique il 17 novembre 1866. La storia teatrale istituzionale la documenta come opéra-comique in tre atti, cardine dell’ampliamento sentimentale e serio del genere..
**Fonti originali specialist:** <https://www.opera-comique.com/fr/spectacles/mignon>.

### 208 — `legacy:opera-comique|pers:offenbach`

Offenbach: record base Fantasio (1872), specialistico Les Contes d'Hoffmann (1881): DUE OPERE DISTINTE; la versione postuma di Contes fu completata da Guiraud.

**Base:** `base2K:1943`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Fantasio (1872). Relazione musicologica: opéra-comique in tre atti, da non confondere con opérette o con Les contes d'Hoffmann. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:audit8f-opera-comique-offenbach`, tipo `contes-hoffmann-1881-opera-comique`. **Forward:** `accolse l’opera postuma preparata per i propri dialoghi da` · **Reverse:** `preparò Les Contes d’Hoffmann per il`. **Nota:** Offenbach adattò Les Contes d’Hoffmann all’Opéra-Comique, dove fu rappresentata postuma il 10 febbraio 1881. La documentazione distingue l’opera fantastica dalla più consueta opéra-bouffe e ricorda gli interventi di adattamento ai dialoghi..
**Fonti originali specialist:** <https://www.opera-comique.com/fr/actualites/a-lire-avant-le-spectacle-les-contes-d-hoffmann> · <https://www.opera-comique.com/fr/spectacles/les-contes-d-hoffmann>.
**Riscontro esterno limitato:** Partitura e completamento di Contes d'Hoffmann con Guiraud (<https://catalogue.bnf.fr/ark:/12148/cb44000242h>).

### 209 — `legacy:tragedie-en-musique-francese|pers:elisabeth-jacquet-de-la-guerre`

Élisabeth Jacquet de La Guerre: Céphale et Procris (1694), tragédie en musique documentata da BnF; non attribuire composizione a Lully.

**Base:** `base2K:1944`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Céphale et Procris (1694). Relazione musicologica: tragédie lyrique in un prologo e cinque atti; BnF conserva il catalogo dell'opera. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:audit8g-jacquet-tragedie-cephale`, tipo `cephale-et-procris-1694`. **Forward:** `comprende l’opera del 1694 di` · **Reverse:** `compose Céphale et Procris nella forma della`. **Nota:** La BnF cataloga la partitura del 1694 della tragédie en musique Céphale et Procris di Élisabeth Jacquet de La Guerre; non si attribuisce a Lully la composizione o la direzione dell’opera..
**Fonti originali specialist:** <https://catalogue.bnf.fr/rechercher.do?index=TOUS3&numNotice=12192446&typeNotice=u>.
**Riscontro esterno limitato:** Stampe BnF di Céphale et Procris 1694 (<https://catalogue.bnf.fr/rechercher.do?index=TOUS3&numNotice=12192446&typeNotice=u>).

### 210 — `legacy:polifonia-corale-luterana-cinquecento|pers:johann-walter`

Johann Walter: Geystliche gesangk Buchleyn (1524), raccolta polifonica di inni e testi protestanti; distinguere composizione, compilazione e scritti di Lutero.

**Base:** `base2K:1946`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Geistliches Gesangbüchlein (1524). Relazione musicologica: primo repertorio di corali polifonici luterani; distinguere compilazione ed edizione dalla singola composizione. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:audit8g-walter-corale-gesangbuch`, tipo `geistliches-gesangbuchlein-1524`. **Forward:** `ebbe una delle prime raccolte a stampa curate da` · **Reverse:** `pubblicò il Geistliches Gesangbüchlein nella`. **Nota:** Nel 1524 Walter pubblicò una raccolta polifonica di canti per la liturgia evangelica; la fonte Treccani evidenzia il ruolo nella formazione del repertorio corale della Riforma..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/la-musica-religiosa-protestante_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontro esterno limitato:** Fonte bibliografica diretta della stampa del 1524 (<https://www.digitale-sammlungen.de/de/details/bsb00027050>).

### 211 — `legacy:musica-elettronica|pers:iannis-xenakis`

Xenakis: Diamorphoses (1957), Orient-Occident (1960) e materiali su nastro; non appiattire ricerca elettroacustica, musica concreta ed elettronica di sintesi.

**Base:** `base2K:1948`, tipo `repertorio-o-pratica-documentata`. Nota: Opera/repertorio: Diamorphoses (1957) e Orient-Occident (1960). Relazione musicologica: ricerca elettroacustica su supporto; non semplicemente elettrificazione di musica strumentale. Fonte puntuale sul titolo o sul repertorio; non va dedotta un'appartenenza istituzionale o personale..
**specialist:** `special2K:daily01-xenakis-electronic`, tipo `tradizione-documentata`. **Forward:** `comprende anche la sperimentazione di masse sonore e processi elettroacustici di` · **Reverse:** `sviluppò tecniche elettroacustiche e formali nel repertorio della`. **Nota:** IRCAM descrive l'integrazione in Xenakis di matematica, architettura, masse sonore e ricerca elettroacustica, elementi centrali della sua posizione nelle avanguardie del secondo Novecento..
**Fonti originali specialist:** <https://ressources.ircam.fr/fr/composer/iannis-xenakis/workcourse>.

### 212 — `legacy:teatro-epico-brechtiano|pers:hanns-eisler`

Hanns Eisler collaborò direttamente con Brecht per Die Maßnahme e Die Mutter; evento collaborativo specifico, non appartenenza a una 'scuola brechtiana' formale.

**Base:** `base2K:1952`, tipo `pratica-teatrale-documentata`. Nota: Die Maßnahme e Die Mutter, collaborazione effettiva con Brecht; non è affiliazione a una scuola di composizione..
**specialist:** `special2K:audit-eisler-brecht-tradizione`, tipo `partecipazione-diretta-a-repertorio`. **Forward:** `comprende la collaborazione diretta con Brecht di` · **Reverse:** `compose musica per i lavori teatrali di Brecht nell'ambito del`. **Nota:** Eisler collaborò direttamente con Brecht: tradizione drammaturgica, non scuola compositiva formalizzata..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/hanns-eisler/> · <https://ressources.ircam.fr/en/composer/hanns-eisler/workcourse>.

### 213 — `legacy:vienna-fin-de-siecle-musicale|pers:alexander-von-zemlinsky`

Zemlinsky nella Vienna fin de siècle come compositore e didatta; il suo insegnamento a Schönberg è diverso dall'appartenenza al contesto urbano.

**Base:** `base2K:1972`, tipo `relazione-storico-musicale`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Attività compositiva e didattica di Zemlinsky nel contesto viennese..
**specialist:** `special2K:audit8-zemlinsky-vienna-fin-de-siecle`, tipo `protagonista-ambiente-storico-musicale`. **Forward:** `ebbe fra i compositori e didatti di maggiore rilievo` · **Reverse:** `si formò e svolse attività compositiva e didattica nell'`. **Nota:** Zemlinsky si formò e lavorò nella Vienna musicale fra tardo Ottocento e primo Novecento; insegnò composizione a Schönberg e partecipò da protagonista al passaggio dal tardoromanticismo alla modernità. Il nodo indica ambiente storico verificato, non appartenenza formale alla Seconda scuola di Vienna..
**Fonti originali specialist:** <https://www.zemlinsky.at/en> · <https://www.treccani.it/enciclopedia/alexander-von-zemlinsky/>.

### 214 — `legacy:vereinigung-schaffender-tonkuenstler-1904|pers:alexander-von-zemlinsky`

Zemlinsky e Schönberg fondarono nel 1904 la Vereinigung schaffender Tonkünstler; Mahler presidente onorario. Associazione specifica, non corrente stilistica.

**Base:** `base2K:1973`, tipo `partecipazione-istituzionale-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Fondazione dell'associazione viennese nel 1904..
**specialist:** `special2K:audit8-zemlinsky-vereinigung`, tipo `cofondazione-associazione-1904`. **Forward:** `fu cofondata nel 1904 con Schönberg da` · **Reverse:** `fondò nel 1904 con Schönberg la`. **Nota:** Nel 1904 Zemlinsky fondò con Schönberg la Vereinigung schaffender Tonkünstler; la società di breve durata intendeva promuovere musica nuova e annoverò Mahler come presidente onorario. Relazione di sodalizio storico verificabile, distinta dall’appartenenza a una scuola compositiva retrospettiva..
**Fonti originali specialist:** <https://www.zemlinsky.at/en/biography/vienna-1895%E2%80%931911>.
**Riscontro esterno limitato:** Zemlinsky fondatore con Schönberg 1904 (<https://www.zemlinsky.at/de/biographie/wien-1895-1911>) · Schönberg fondatore; Mahler presidente onorario (<https://schoenberg.at/en/schoenberg/timeline>).

### 215 — `legacy:dramma-musicale-allegorico-medievale|pers:hildegard-von-bingen`

Ordo virtutum di Ildegarda è dramma allegorico sacro medievale, non melodramma secentesco e non prova di discendenza diretta.

**Base:** `base2K:1976`, tipo `forma-o-pratica-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Ordo virtutum è testimonianza di teatro sacro allegorico medievale..
**specialist:** `special2K:audit8g-hildegard-ordo-virtutum`, tipo `composizione-dramma-liturgico`. **Forward:** `è attestato nell’opera di` · **Reverse:** `compose Ordo virtutum come`. **Nota:** Ildegarda compose Ordo virtutum, dramma liturgico allegorico pervenuto con testo e musica. Non si deduce una filiazione diretta con il melodramma nato secoli dopo..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/musica-e-spiritualita-femminile-ildegarda-di-bingen_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 216 — `legacy:formes-fixes-francesi-trecento|pers:machaut`

Machaut sviluppò ballades, rondeaux e virelais delle formes fixes francesi; il rapporto al genere non è rapporto personale con autori successivi.

**Base:** `base2K:1977`, tipo `forma-o-pratica-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Ballade, rondeau e virelai nel repertorio di Machaut..
**specialist:** `special2K:audit8g-machaut-formes-fixes`, tipo `ballade-rondeau-virelai`. **Forward:** `furono coltivate e ampliate da` · **Reverse:** `compose ballades, rondeaux e virelais nelle`. **Nota:** Machaut unì testi poetici e strutture musicali delle forme fisse francesi, oltre al mottetto e alla messa; non equivale a un collegamento con autori successivi in assenza di documenti..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/l-ars-nova-francese-e-guillaume-de-machaut_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 217 — `legacy:ballata-italiana-trecento|pers:landini`

Per Landini Treccani distingue 141 ballate e 144 intonazioni dello stesso autore nel codice Squarcialupi: due conteggi NON equivalenti.

**Base:** `base2K:1978`, tipo `forma-o-pratica-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Produzione di ballate italiane trecentesche..
**specialist:** `special2K:audit8g-landini-ballata-trecento`, tipo `corpus-ballate-polifoniche`. **Forward:** `ebbe come autore principale` · **Reverse:** `compose un vasto repertorio di`. **Nota:** Per Landini sono attestate 141 ballate a due e tre voci, conservate in vari manoscritti fra cui il codice Squarcialupi; non si presume che tutte le ballate abbiano un unico stile..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/francesco-landini_%28Dizionario-Biografico%29/>.
**Riscontro esterno limitato:** 141 ballate contro le 144 intonazioni nello Squarcialupi (<https://www.treccani.it/enciclopedia/francesco-landini_%28Dizionario-Biografico%29/>).

### 218 — `legacy:ballata-italiana-trecento|pers:gherardello-da-firenze`

Gherardello da Firenze lasciò ballate monodiche, accanto a madrigali e caccia; la comune categoria ballata non implica apprendistato da Landini.

**Base:** `base2K:1979`, tipo `forma-o-pratica-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Testimonianze di ballata nell'Ars nova italiana..
**specialist:** `special2K:audit8g-gherardello-ballata-trecento`, tipo `ballate-monodiche-trecento`. **Forward:** `è attestata anche nella produzione di` · **Reverse:** `lasciò ballate fra le testimonianze della`. **Nota:** Le fonti conservano cinque ballate a una voce di Gherardello, accanto ai madrigali e alla caccia; registrata pratica di genere, non apprendistato da Landini..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/gherardello-da-firenze_%28Dizionario-Biografico%29/>.

### 219 — `legacy:corte-musicale-medicea-firenze-quattrocento|pers:heinrich-isaac`

Isaac e la corte medicea di Firenze: servizio e repertorio profano storicamente specifici, non un collegamento di tutte le opere a tutte le figure di corte.

**Base:** `base2K:1980`, tipo `contesto-di-attivita-musicale`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Attività alla corte medicea fiorentina..
**specialist:** `special2K:audit8g-isaac-medici-corte`, tipo `attivita-musicale-corte-medicea`. **Forward:** `ospitò la pratica musicale di corte e il repertorio profano di` · **Reverse:** `lavorò nella cerchia musicale dei Medici nell'`. **Nota:** Isaac fu attivo a Firenze dal 1485 e nella cerchia di Lorenzo de’ Medici: partecipò alla vita musicale medicea e ai canti carnascialeschi, senza attribuirgli l’intera tradizione di corte..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/i-canti-carnascialeschi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 220 — `legacy:toccata-organistica-rinascimentale|pers:claudio-merulo`

Merulo: la breve voce Treccani cita Verovio nel 1594, il catalogo Gaspari dei libri di toccate riporta 1598 e 1604. ALERT BIBLIOGRAFICO: non fondere edizioni.

**Base:** `base2K:1981`, tipo `forma-o-pratica-documentata`. Nota: Pertinenza repertoriale o storica, non rapporto maestro–allievo. Esempi di toccata organistica cinquecentesca..
**specialist:** `special2K:audit8g-merulo-toccata-organo`, tipo `toccate-organistiche-stampate`. **Forward:** `fu sviluppata nelle raccolte di` · **Reverse:** `sviluppò e pubblicò importanti`. **Nota:** Le toccate per organo di Merulo furono pubblicate anche con l’edizione Verovio del 1594; specifica prassi strumentale e editoriale, non influenza personale inferita su Frescobaldi..
**Fonti originali specialist:** <https://www.treccani.it/enciclopedia/claudio-merulo/>.
**Riscontro esterno limitato:** Riferimento editoriale 1594 (<https://www.treccani.it/enciclopedia/claudio-merulo/>) · Libri di Toccate 1598 e 1604 (<https://www.bibliotecamusica.it/cmbm/scripts/gaspari/libri.asp?idm=21>).

## Cautele di interpretazione e consegna
- I capitoli di Musurgia Mundi sono SOLO risorse editoriali, non nodi storici attraversabili. Genere, periodo, forma, tecnica e istituzione non collegano indiscriminatamente tutti gli autori.
- Stessi estremi in più archivi NON significano che i predicati siano identici. Conservare testi direzionali e note degli originali, con provenienza.
- La funzione originale `relationSentence`, con tre ridefinizioni, non è stata portata o collaudata; su desktop/Android i tooltip e il tap rimangono da provare.
- I 3.856 archi legacy, i 1.718 archi Atlantis e i 210 lotti filologici restano intatti. Nessuna modifica ai grafi o alla UI pubblica.

## Esiti test strutturali
- PASS — Twenty exact consecutive groups
- PASS — Forty full original records
- PASS — Twenty base rows
- PASS — Twenty secondary rows
- PASS — No duplicate stage IDs
- PASS — Endpoint IDs and kind unchanged
- PASS — Normalized pairs intact
- PASS — All nonbase forward/reverse preserved
- PASS — Notes preserved including nulls
- PASS — Original sources preserved
- PASS — Payloads remain separate
- PASS — No historical claims automatically certified
- PASS — No BFS shortcuts through generic categories
- PASS — Exact JS renderer port explicitly pending
- PASS — All 40 original payloads immutable within staging snapshots
- PASS — No production paths targeted

## Prossima ripresa
Lotto 12, gruppi 221–240.
