# Audit produzione — ciclo 101–200 · rapporto di avanzamento

Data: 2026-10-08. Ramo: `audit-produzione-correttivo-01`. Nessuna modifica a `main`.

## Consistenza effettivamente controllata
- Per i compositori 101–150 sono stati letti e ricontrollati a livello strutturale i 50 archi `produzione` già presenti con `audit_batch: correttivo03`.
- Di questi, 48 restano `da_verificare` e 2 sono `documentato`: questa etichetta è lo stato presente, non una nuova validazione bibliografica.
- Il file `correttivo03_macroblocco50_staging.json` resta una bozza. Gli archi già presenti nel grafo non vanno conteggiati come nuove integrazioni di questa sessione.
- Per i compositori 151–200 è stato creato `correttivo04_macroblocco50_staging.json`, contenente 50 candidati da confrontare con cataloghi di opere.
- Due candidati sono stati respinti già in preparazione: Heinrich Isaac (Lied non trasformabile in mottetto) e Giovanni Croce (opera teorica di Zarlino non attribuibile come composizione vocale di Croce). In particolare correggere il candidato 35: per Croce ricercare invece le sue canzonette, madrigali o mottetti con una fonte adeguata.
- Le fonti associate alle relazioni preesistenti non provano automaticamente le opere proposte. Nessuno dei 50 candidati del macroblocco 04 è pubblicato come relazione documentata.

## Anomalie bibliografiche note del macroblocco 03
- Berlioz / Symphonie fantastique punta a una pagina generica sull'opera.
- Camille Saint-Saëns / Sinfonia n. 3 punta a una pagina generica sull'opera.
- Georges Bizet / Carmen usa una pagina generica sul genere, non un catalogo di Bizet.
- Luciano Berio / Visage punta alla biografia di Steve Reich.
- Darius Milhaud / Christophe Colomb punta alla biografia di Steve Reich.
- Carl Maria von Weber / Der Freischütz punta a una pagina su Wagner.
- Debussy / Pelléas et Mélisande punta a una pagina su Stravinskij.
- Molte altre fonti sono relazioni contestuali, non verifiche puntuali della produzione.

## Stato delle modifiche di questa sessione
- 100 compositori nell'ambito dei due macroblocchi, ma NON 100 profili bibliograficamente conclusi.
- 50 archi preesistenti ricogniti nel macroblocco 03.
- 50 candidati nuovi nello staging del macroblocco 04, di cui 2 esplicitamente respinti.
- Nuovi archi operativi: 0. Nuovi nodi produttivi: 0.
- `grafo.json` e `relazioni.json` non modificati, perché sarebbe scorretto promuovere i candidati non verificati.
- Passaggio successivo: verificare cataloghi d'opera per entrambi i blocchi, correggere gli archi del 03, poi integrare quelli del 04 documentati con note e fonti direttamente pertinenti.

L'architettura delle lenti resta invariata. Il repertorio storico esterno resta rinviato alla conclusione del ciclo correttivo.

## Aggiornamento correttivo — 8 ottobre 2026
Commit operativo: `3407a607bc88f8b70401ceb8b71aadab700c5606`.

Quattro collegamenti produttivi del macroblocco 03 hanno ricevuto una sostituzione della fonte incongrua o generica con un documento direttamente pertinente, aggiornando la nota e lo stato a `documentato`:
- Bizet → opera, *Carmen*: Metropolitan Opera.
- Carl Maria von Weber → opera, *Der Freischütz*: Metropolitan Opera.
- Claude Debussy → opera, *Pelléas et Mélisande*: Teatro alla Scala.
- Camille Saint-Saëns → sinfonia, Sinfonia n. 3 op. 78: Berliner Philharmoniker.

Tre nuove relazioni di produzione del macroblocco 04 sono state inserite come documentate:
- George Gershwin → opera, *Porgy and Bess*: Metropolitan Opera.
- Philip Glass → opera, *Einstein on the Beach*: catalogo ufficiale del compositore.
- Béla Bartók → concerto, *Concerto per orchestra* Sz 116: Berliner Philharmoniker.

Esito del controllo strutturale al momento del commit: 1089 archi generali, nessun estremo mancante fra gli archi del grafo. Nessuna modifica al ramo pubblico `main`.

Rimangono da verificare gli altri rapporti opera/genere e le fonti solo contestuali, senza considerarli approvati per analogia.

## Secondo aggiornamento correttivo — 8 ottobre 2026
Commit grafo: `2b4bfc61770e099c09c9796713f2adc23a295f2a`. Commit staging: `8e924f828db51140e23457b177979874b72c6cb6`.

Sono stati aggiunti sette collegamenti `produzione` corredati di note e URL verificabili: Sammartini–sinfonia (Treccani), Animuccia–musica sacra (Treccani), Merulo–musica per organo (Treccani), Galuppi–opera (Treccani), Felice Anerio–messa (Treccani), Gregorio Allegri–musica sacra (Treccani), Steve Reich–musica vocale (catalogo ufficiale dell'autore: `Music for 18 Musicians`, organico misto, non un brano puramente vocale).

Totale archi generali dopo questa integrazione: 1.096. Verifica integrità dei riferimenti `source`/`target`: nessun estremo inesistente. Il numero di nuove relazioni del ciclo in queste due riprese sale a 10 (3 nel primo aggiornamento e 7 nel secondo).

Correzioni nello staging: il rigetto dei mottetti di Giovanni Croce era improprio e viene sostituito da un candidato in attesa di identificazione bibliografica. Per Gioseffo Zarlino viene esclusa *Le istitutioni harmoniche* dalle opere vocali poiché è un trattato, e si conserva un candidato mottettistico non ancora validato. La voce di Heinrich Isaac (*Innsbruck, ich muss dich lassen*) resta esclusa dal genere mottetto perché è un Lied. Le proposte ancora non documentate rimangono in staging.

## Terzo aggiornamento — Copland e Isaac
- Aaron Copland → `genere-balletto`: *Appalachian Spring* (1944), commissione, prima e materiale musicale documentati dalla Library of Congress. Fonti: https://wwws.loc.gov/exhibits/treasures/tr33a.html e https://www.loc.gov/collections/aaron-copland/about-this-collection/
- Heinrich Isaac → `genere-lied`: *Innsbruck, ich muss dich lassen*, Lied polifonico tedesco, non mottetto. Fonti: https://imslp.org/wiki/Innsbruck_ich_muss_dich_lassen_(Isaac,_Heinrich) e https://germanhistorydocs.org/de/von-den-reformationen-bis-zum-dreissigjaehrigen-krieg-1500-1648/heinrich-isaac-innsbruck-ich-muss-dich-lassen-16th-century
- Commit del grafo: `f00c40ac1b60c30c69c87c7f75cf4ebd4f087d3a`; commit staging: `ff7108bf4b21b2ebc1420039fc918e44b66dc116`.
- Totale nuovi archi produttivi delle riprese successive al rapporto iniziale: 12 (3 + 7 + 2). Totale archi generali: 1.098. Nessun riferimento a nodi inesistenti. Nessuna modifica a `main`.

## Quarto aggiornamento correttivo — 8 ottobre 2026
Commit del grafo: `1d8b9d7609e55088a77b5fc84e85cc6d575680ec`.

Quattro nuove relazioni `produzione` direttamente sostenute da editori di partiture:
1. Paul Hindemith → opera, *Mathis der Maler* (1934–35): Schott, https://www.schott-music.com/en/mathis-der-maler-no34862.html
2. Paul Hindemith → sinfonia, *Symphonie Mathis der Maler* (1934): Schott, https://www.schott-music.com/en/symphonie-mathis-der-maler-no152686.html
3. Carl Orff → cantata, *Carmina Burana* (1936), specificamente cantata scenica: Schott, https://www.schott-music.com/en/carmina-burana-noc742736.html
4. Witold Lutosławski → concerto, *Concerto per orchestra* (1954), genere da distinguere dal concerto con solista: Wise Music Classical, https://www.wisemusicclassical.com/work/7702/

Archi generali: 1.102. Nuove relazioni di produzione nell'attuale serie di riprese: 16 (3+7+2+4). Controllo strutturale: nessun estremo di arco privo di nodo. I collegamenti non ancora verificati restano sospesi; nessuna modifica al ramo `main`.

## Quinto aggiornamento correttivo — 8 ottobre 2026
- Samuel Scheidt → musica per organo: *Tabulatura nova* (1624), edizione Schott, https://www.schott-music.com/en/tabulatura-nova-noc324558.html.
- Henryk Mikołaj Górecki → sinfonia: Sinfonia n. 3 op. 36 per soprano e orchestra, catalogo Boosey & Hawkes, https://www.boosey.com/cr/music/Henryk-Mikolaj-Gorecki-Symphony-No-3-Symphony-of-Sorrowful-Songs/5629.
- Nuovi archi operativi di questa sessione: 2. Nuovi archi nelle riprese successive alla prima ricognizione: 18. Totale archi generali: 1.104. Nessun estremo di arco inesistente. Ramo `main` invariato.
- Commit grafo: `2b9f65116b00a376259d3f047847757c784aeb4c`; commit staging: `96ad5606550031141ed63b181a51bf94c757e3ec`.

## Sesto aggiornamento correttivo — 8 ottobre 2026
Sono state aggiunte 8 relazioni produttive documentate: Duni–opera (*Le peintre amoureux de son modèle*), Vinci–opera (*Artaserse*), Porpora–opera (*Polifemo*), Cannabich–sinfonia, Praetorius–musica strumentale (*Terpsichore*, antologia collettiva), Logroscino–opera (*Il governatore*), Cage–musica per pianoforte (*Sonatas and Interludes*, pianoforte preparato), Bernstein–opera (*Trouble in Tahiti*). Fonti specifiche conservate negli archi e nello staging.

Distinzioni: *West Side Story* è un musical, non prova sufficiente per catalogare Bernstein nell'opera; la raccolta *Terpsichore* comprende musiche di diversi autori; il pianoforte preparato di Cage non è uno strumento elettronico; a Logroscino non va assegnata l'invenzione del finale d'opera.

Archi generali: 1112. Nuovi archi produttivi delle riprese: 26. Commit grafo: `d689912bfdff02ddfd1677fe66223a46000b2be8`. Commit staging: `b01fd418159c3ca74acb51d62a02754782817262`. Nessuna modifica al ramo main.

## Settimo aggiornamento correttivo — 8 ottobre 2026
Nuovi archi produttivi: 13. Autori: giacinto-scelsi, charles-ives, gyorgy-ligeti, gyorgy-kurtag, hans-werner-henze, johannes-ockeghem, jacob-obrecht, gilles-binchois, franz-xaver-richter, gioseffo-zarlino, giovanni-maria-nanino, costanzo-festa, krzysztof-penderecki. Ogni collegamento contiene nota e URL specifico. Archi complessivi: 1125. Nuove integrazioni delle riprese: 39. Restano 12 autori senza archi produttivi nel blocco 151–200: Florence Price, Duke Ellington, Zoltán Kodály, Karlheinz Stockhausen, Jacob Clemens non Papa, Giovanni Francesco Anerio, Francesco Soriano, Giovanni Croce, Johann Walter, Johann Hermann Schein, Leonardo Leo, Pietro Alessandro Guglielmi. Commit grafo: ced2ea8d4fb86189d9ac60931eba89bd8d86f456. Commit staging: 300aee9585ca9697e3cff16fe452f921f12e39fe. Ramo main invariato.

## Ottavo aggiornamento — 8 ottobre 2026
Nuove relazioni: duke-ellington, pietro-alessandro-guglielmi, giovanni-croce. Stato del grafo: 1128 archi. Restano senza relazione produttiva questi 9 autori del gruppo 151–200: Florence Price, Zoltán Kodály, Karlheinz Stockhausen, Jacob Clemens non Papa, Giovanni Francesco Anerio, Francesco Soriano, Johann Walter, Johann Hermann Schein, Leonardo Leo. Non sono stati inseriti archi privi di riscontro. Il blocco presenta ancora lacune qualitative: una relazione non equivale a un profilo produttivo esaustivo. Commit: 18c0554615712f2b93756a23a9aacbcef3c9f38a. Staging: 7d12c6d039bd6324ce52b6fc8687597caae8b4fe. Main invariato.

## Nono aggiornamento: chiusura copertura iniziale 151–200
Nuovi collegamenti: 9 (florence-price, zoltan-kodaly, karlheinz-stockhausen, jacob-clemens-non-papa, giovanni-francesco-anerio, francesco-soriano, johann-walter, johann-hermann-schein, leonardo-leo). Totale archi grafo: 1137. Compositori 151–200 privi di qualunque relazione produttiva: 0 (). Tutti i 50 hanno ora almeno una relazione, ma non sono profili esaustivi. Restano verifiche aggiuntive dei generi e degli archi del lotto 101–150.
Commit grafo: dc333b92309654580698df876adc6e5cdbe5e152; staging: 3eae307cb967c8d468d83f28c43f75375be8af6b. Main non modificato.

## Decimo aggiornamento correttivo — 8 ottobre 2026
Sette relazioni preesistenti ricondotte a fonti d'opera direttamente pertinenti e promosse da `da_verificare` a `documentato`: compositore-hector-berlioz, compositore-richard-wagner, compositore-richard-strauss, compositore-anton-bruckner, compositore-igor-stravinskij, compositore-luciano-berio, compositore-luigi-nono. Fonti e note sono contenute in `grafo.json`. Nessun nuovo arco, nessun nuovo nodo. Archi totali: 1137. Altri 37 compositori del lotto 101–150 non dispongono ancora di un arco di produzione con stato documentato; la copertura minima non vale come audit storico esaustivo. Controllo integrità estremo source/target superato. Commit: 4b83977fef68dc367428bed70dce283d97a6a3b2. `main` invariato.

## Undicesimo aggiornamento — 8 ottobre 2026
Due attribuzioni precedentemente in verifica sono state validate mediante schede bibliografiche specifiche: Maurice Ravel → balletto (*Daphnis et Chloé*), Bibliothèque nationale de France, https://catalogue.bnf.fr/ark:/12148/cb139177228 ; Goffredo Petrassi → concerto (otto *Concerti per orchestra*), Dizionario Biografico degli Italiani, https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/ .
Nessun nuovo arco (totale 1137). Ancora 35 autori del lotto 101–150 senza arco produttivo documentato. Commit grafo: 4ccd57284ac3c723fc7e87581015f2b015109129. `main` invariato.

## Dodicesimo aggiornamento correttivo — 8 ottobre 2026
Verificati e promossi due archi preesistenti, senza aggiungerne: Olivier Messiaen → musica per organo (*Livre du Saint Sacrement*, fonti IRCAM e BnF); Arnold Schönberg → musica da camera vocale e strumentale (*Pierrot lunaire* op. 21, fonti Arnold Schönberg Center e Belmont Music Publishers). Specificata l'importanza della voce recitante e dei raddoppi strumentali di Pierrot. Restano 33 compositori senza un arco produttivo documentato nel lotto 101–150. Il grafo mantiene 1137 archi. Commit 5cbc27bc560c208d129c5f8d8ba4256e6a399bed. Main invariato.

## Tredicesimo aggiornamento correttivo — 8 ottobre 2026
Sono state validate 4 relazioni preesistenti senza creare nuovi archi: Clara Schumann → concerto (Piano Concerto op. 7, IMSLP); Hugo Wolf → Lied (Mörike-Lieder, IMSLP); Frédéric Chopin → sonata (Sonata op. 35, IMSLP); Gabriel Fauré → musica sacra (Requiem op. 48, catalogo BnF). Sono stati aggiornati notes, sources e status a `documentato` per i quattro casi. Residui con nessun arco produttivo documentato nel gruppo 101–150: 29. Archi totali 1137. Commit: 98d0503d718d2fa481ed01567b4499e23e38db18. Ramo main invariato.

## Quattordicesimo aggiornamento — 8 ottobre 2026
Cinque relazioni preesistenti validate con cataloghi di opera: compositore-cesar-franck, compositore-antonin-dvorak, compositore-petr-il-ic-cajkovskij, compositore-milij-balakirev, compositore-ottorino-respighi. Le fonti specifiche e le note aggiornate sono presenti negli archi. Totale archi invariato (1137); residui da verificare senza alcuna relazione documentata nel blocco 101–150: 24. La copertura produttiva non equivale ancora a profilo completo. Commit grafo `619cce1dda5549d2e28ceb4f91d14d77d8bb233f`. Main invariato.

## Verifica cumulativa — 8 ottobre 2026
Aggiornate 12 relazioni produttive preesistenti con note opera-genere e fonti di catalogo: modest-musorgskij, nikolaj-rimskij-korsakov, aleksandr-borodin, bedrich-smetana, arthur-honegger, sergej-prokof-ev, dmitrij-sostakovic, alfredo-casella, luigi-russolo, anton-webern, sergej-rachmaninov, alban-berg. Non aggiunti archi; totale grafo 1137. In particolare: Boris Godunov e Principe Igor hanno distinte storie di revisioni; la Terza di Honegger detta Liturgique non è liturgia; Risveglio di una città è documentata come composizione perduta e gli intonarumori non sono elettronici. Restano 12 autori senza arco produttivo documentato nel gruppo 101–150: Pauline Viardot, Louise Farrenc, Gustav Mahler, Alexander von Zemlinsky, Erik Satie, Pierre Boulez, Francis Poulenc, Darius Milhaud, Aleksandr Skrjabin, Ferruccio Busoni, Gian Francesco Malipiero, Bruno Maderna. Commit: a3a869fa040b038ba7ef808bd23fa13346985250. Main invariato.

## Verifica cumulativa successiva — 8 ottobre 2026
Validati sette archi esistenti: pauline-viardot, alexander-von-zemlinsky, erik-satie, pierre-boulez, francis-poulenc, aleksandr-skrjabin, ferruccio-busoni. Classificazioni qualificate: Viardot opérette fantastique; Boulez Répons, elettronica dal vivo e genere concertante; Busoni Doktor Faust completamento Jarnach; Poulenc Gloria non messa completa. Fonti specifiche conservate negli archi. Restano 5 autori da validare: Louise Farrenc, Gustav Mahler, Darius Milhaud, Gian Francesco Malipiero, Bruno Maderna. Totale archi 1137. Commit 1cee9809742d18831775af69dc94d4ac70fef86e. Ramo main invariato.

## Chiusura delle 24 attribuzioni sospese — 8 ottobre 2026
Confrontate le 24 attribuzioni che restavano da verificare nel gruppo 101–150. In tre passaggi cumulativi sono stati aggiornati 12+7+5 archi già presenti con descrizione precisa e fonte specifica. Ultime cinque validazioni: louise-farrenc, gustav-mahler, darius-milhaud, gian-francesco-malipiero, bruno-maderna. Tutti i 100 compositori 101–200 dispongono ora di almeno una relazione produttiva con stato `documentato`: 100/100. Archi totali 1137 (nessun nuovo arco in questa bonifica). Verifica source-target: nessun estremo inesistente. Attenzione: validazione minima ≠ profilo completo di tutti i generi. Commit finale: 75265d044225324bb8bfc3e42c60f60ee28b5e3e. Ramo main invariato.

## Densificazione della produzione 101–200 — 8 ottobre 2026
Sono stati aggiunti 41 archi di produzione, **tutti con status da_verificare**: le opere citate sono candidate ragionevoli alla documentazione del genere, ma la pertinenza puntuale e accessibilità del singolo URL non sono state verificate integralmente. Il controllo storico-filologico successivo dovrà promuovere solo relazioni dimostrate da repertori, editori o cataloghi specifici. Non attribuire questi archi al novero delle relazioni documentate.

Candidati: johannes-brahms → concerto; johannes-brahms → sonata; johannes-brahms → musica-da-camera; johannes-brahms → quartetto; clara-schumann → lied; clara-schumann → musica-per-pianoforte; franz-liszt → poema-sinfonico; franz-liszt → musica-per-pianoforte; richard-strauss → poema-sinfonico; richard-strauss → lied; hector-berlioz → opera; frederic-chopin → musica-per-pianoforte; camille-saint-saens → concerto; gabriel-faure → musica-da-camera; cesar-franck → musica-per-organo; louise-farrenc → musica-da-camera; petr-il-ic-cajkovskij → balletto; petr-il-ic-cajkovskij → concerto; antonin-dvorak → musica-da-camera; antonin-dvorak → concerto; gustav-mahler → lied; claude-debussy → musica-per-pianoforte; maurice-ravel → musica-per-pianoforte; olivier-messiaen → musica-per-pianoforte; francis-poulenc → concerto; sergej-prokof-ev → balletto; dmitrij-sostakovic → quartetto; sergej-rachmaninov → musica-per-pianoforte; alban-berg → concerto; ferruccio-busoni → musica-per-pianoforte; ottorino-respighi → musica-da-camera; igor-stravinskij → opera; george-gershwin → concerto; aaron-copland → musica-strumentale; bela-bartok → quartetto; paul-hindemith → musica-da-camera; karlheinz-stockhausen → musica-sperimentale; carl-orff → opera; michael-praetorius → musica-sacra; leonardo-leo → opera; nicola-porpora → musica-sacra.

Casi saltati (per nodo inesistente o altro): [{"slug":"ig or-stravinskij","genre":"opera","why":"missing node"}]. Grafo: 1178 archi. Commit: f84d85d93e7bd3243e7a2ce1c432447856294413. Il ramo main non è stato modificato.

### Verifiche puntuali della densificazione
Quattro candidati hanno riscontro su scheda dell'opera e sono stati promossi a `documentato`: johannes-brahms → concerto; petr-il-ic-cajkovskij → balletto; petr-il-ic-cajkovskij → concerto; antonin-dvorak → musica-da-camera. Brahms op.15 (IMSLP); Čajkovskij Lago dei cigni e Concerto per violino (Tchaikovsky Research); Dvořák quartetto Americano op.96 (catalogo ufficiale Dvořák). I restanti candidati di densificazione restano `da_verificare` senza presumerne l'approvazione. Grafo 1178 archi. Commit 8ce09e562dec8a747aad6b8048b1e25ba58a30f6.

## Densificazione: verifica documentale di 18 relazioni — 8 ottobre 2026
Confrontati i candidati con pagine bibliografiche individuali delle opere in IMSLP, distinguendo l'organico originale dalle trascrizioni. Promosse a documentato 18 relazioni: johannes-brahms → sonata; johannes-brahms → musica-da-camera; johannes-brahms → quartetto; clara-schumann → musica-per-pianoforte; franz-liszt → poema-sinfonico; franz-liszt → musica-per-pianoforte; richard-strauss → poema-sinfonico; hector-berlioz → opera; frederic-chopin → musica-per-pianoforte; camille-saint-saens → concerto; gabriel-faure → musica-da-camera; cesar-franck → musica-per-organo; louise-farrenc → musica-da-camera; claude-debussy → musica-per-pianoforte; maurice-ravel → musica-per-pianoforte; sergej-prokof-ev → balletto; alban-berg → concerto; ferruccio-busoni → musica-per-pianoforte. Rimangono 19 candidate della densificazione in stato da_verificare. Totale archi immutato 1178. Commit grafo: 645a47bf20225d73390829a3bb78a9fee4518143. Ramo main invariato. La verifica è riferita a opera e genere rappresentativi, non all'esaustività dell'intero catalogo dell'autore.

## Secondo riscontro puntuale della densificazione — 8 ottobre 2026
Convalidate 3 ulteriori relazioni: Clara Schumann–Lied op.12 (anche distinzione dai Lieder di Robert Schumann), Mahler–Kindertotenlieder per voce e orchestra, Gershwin–Concerto in fa per pianoforte e orchestra. Fonti individuali IMSLP negli archi. Restano 16 relazioni di densificazione da verificare. Totale archi 1178. Commit 64d1894f6696bd041536f0f5c2330ca5e48a554c. Main invariato.
