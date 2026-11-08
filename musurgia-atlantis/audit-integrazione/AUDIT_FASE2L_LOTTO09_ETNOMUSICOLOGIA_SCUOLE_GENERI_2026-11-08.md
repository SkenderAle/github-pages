# Musurgia Atlantis — Fase 2L · Lotto 09: ricerca sul campo, scuole e generi (161–180)

**8 novembre 2026 · branch `main` · soltanto `musurgia-atlantis/audit-integrazione/`**

## Risultato e cautele

Esaminate le **20 collisioni 161–180**, conservando i **41 record** originali (20 base e 21 specialistici: Duni ha due record specialistici). Situazione cumulativa: **180/250 gruppi classificati (72%)**, 70 ancora da analizzare. **15/15** controlli strutturali PASS. Nessuna fusione, nessuna deduplicazione, nessun sblocco del filtro radicato o modifica dei grafi e della UI pubblica. Le fonti sotto sono citazioni originali dello staging, non prove storiche controllate individualmente salvo dove esplicitamente indicato.

## Indice del lotto

| N. | Coppia di nodi | Tipologia del confronto | Fonti originali |
|---:|---|---|---:|
| 161 | `legacy:etnomusicologia-campo-ungheria-bartok-kodaly|pers:bartok` | `ethnomusicology_specific_fieldwork` | 3 |
| 162 | `legacy:etnomusicologia-campo-ungheria-bartok-kodaly|pers:zoltan-kodaly` | `ethnomusicology_specific_publication` | 3 |
| 163 | `legacy:aleatorismo-controllato-lutoslawski|pers:witold-lutos-awski` | `controlled_aleatorism_rhythm_vs_pitch` | 2 |
| 164 | `legacy:sonorismo-cluster-penderecki|pers:krzysztof-penderecki` | `sonorism_52_strings_title_correction` | 2 |
| 165 | `legacy:gunther-schule-monaco|pers:carl-orff` | `gunther_school_cofounders` | 3 |
| 166 | `legacy:gebrauchsmusik-hindemith|pers:paul-hindemith` | `gebrauchsmusik_usage_distinct` | 2 |
| 167 | `legacy:scuola-darmstadt|pers:stockhausen` | `darmstadt_actual_participation` | 2 |
| 168 | `legacy:chanson-borgognona-quattrocento|pers:gilles-binchois` | `burgundian_chanson_court` | 2 |
| 169 | `legacy:souterliedekens-olandesi-cinquecento|pers:jacob-clemens-non-papa` | `souterliedekens_psalms_vernacular` | 2 |
| 170 | `legacy:lauda-musicale-oratorio-filippino|pers:giovanni-animuccia` | `animuccia_laudi_not_oratorio_genre` | 2 |
| 171 | `legacy:madrigale|pers:costanzo-festa` | `madrigal_early_festa_not_inventor` | 2 |
| 172 | `legacy:scuola-napoletana|pers:leonardo-vinci` | `neapolitan_seria_vinci_specific` | 2 |
| 173 | `legacy:scuola-napoletana|pers:leonardo-leo` | `neapolitan_sacred_opera_leo` | 2 |
| 174 | `legacy:opera-comique|pers:egidio-duni` | `opera_comique_duni_two_specialist_facts` | 4 |
| 175 | `legacy:scuola-napoletana|pers:nicola-porpora` | `porpora_vocal_training_not_individual_pupil` | 2 |
| 176 | `legacy:scuola-mannheim|pers:franz-xaver-richter` | `richter_mannheim_generation` | 2 |
| 177 | `legacy:scuola-mannheim|pers:christian-cannabich` | `cannabich_official_chronology_distinction` | 2 |
| 178 | `legacy:scuola-darmstadt|pers:ligeti` | `ligeti_darmstadt_documented_course` | 3 |
| 179 | `legacy:grand-opera|pers:meyerbeer` | `meyerbeer_grand_opera_repertoire` | 2 |
| 180 | `legacy:grand-opera|pers:daniel-francois-esprit-auber` | `auber_muette_de_portici_historical_context` | 2 |

## Verifica per singolo gruppo

### 161 — legacy:etnomusicologia-campo-ungheria-bartok-kodaly|pers:bartok

Bartók raccolse e analizzò melodie tradizionali con strumenti di ricerca etnomusicologica: non è soltanto un impiego compositivo di materiali popolari. La collaborazione con Kodály è un fatto interpersonale distinto da ricostruire separatamente.

**Guardrail:** non confondere ricerca sul campo, uso compositivo e relazione Bartók–Kodály.
**Originali:** `base2K:1517` (`forma-o-pratica-documentata`, base) · `special2K:audit8h-bartok-ricerca-popolar-ungherese` (`ricerca-raccolta-analisi-melodie`, specialist).
**Specialistico `special2K:audit8h-bartok-ricerca-popolar-ungherese`:** forward `comprende il lavoro di raccolta, classificazione e analisi di melodie di` · reverse `raccolse e analizzò il repertorio musicale popolare nel quadro della`. Nota: Bartók raccolse, classificò e analizzò canti tradizionali fin dal 1905, insieme a Kodály; l’arco descrive metodo di ricerca documentato, non semplice citazione di melodie folcloriche..
Fonti nel payload: <https://www.treccani.it/enciclopedia/bela-bartok/> · <https://www.treccani.it/enciclopedia/etnomusicologia_%28Enciclopedia-Italiana%29/>.

### 162 — legacy:etnomusicologia-campo-ungheria-bartok-kodaly|pers:zoltan-kodaly

Kodály svolse ricerca scientifica sul folclore musicale ungherese anche in rapporto con Bartók. L'organizzazione delle raccolte e la pubblicazione del corpus sono attività più specifiche del solo richiamo a uno stile nazionale.

**Guardrail:** legame Bartók–Kodály da documentare come arco autonomo, non tramite il nodo etnomusicologia.
**Originali:** `base2K:1519` (`forma-o-pratica-documentata`, base) · `special2K:audit8h-kodaly-ricerca-popolar-ungherese` (`raccolta-folclore-scientifica`, specialist).
**Specialistico `special2K:audit8h-kodaly-ricerca-popolar-ungherese`:** forward `comprende il lavoro scientifico sul repertorio tradizionale ungherese di` · reverse `studiò e contribuì a pubblicare i canti tradizionali nel quadro della`. Nota: Kodály svolse con Bartók ricerche sulla musica popolare magiara e coordinò anche la pubblicazione scientifica del Corpus musicae popularis hungaricae: collaborazione documentata distinta dall’adesione a una scuola nazionale generica..
Fonti nel payload: <https://www.treccani.it/enciclopedia/zoltan-kodaly/> · <https://www.treccani.it/enciclopedia/etnomusicologia_%28Enciclopedia-Italiana%29/>.

### 163 — legacy:aleatorismo-controllato-lutoslawski|pers:witold-lutos-awski

In Jeux vénitiens (1961) Lutosławski introdusse aleatorietà controllata nella coordinazione ritmica mantenendo definite le altezze. Non equiparare la tecnica all'indeterminazione di Cage, che risponde a presupposti differenti.

**Guardrail:** differenziare tecnica ritmica controllata da indeterminazione più ampia.
**Originali:** `base2K:1521` (`forma-o-pratica-documentata`, base) · `special2K:audit8h-lutoslawski-jeux-venitiens` (`aleatorismo-ritmico-controllato`, specialist).
**Specialistico `special2K:audit8h-lutoslawski-jeux-venitiens`:** forward `documenta attraverso opere e prassi di` · reverse `contribuì concretamente alla storia di`. Nota: In Jeux vénitiens (1961) Lutosławski introdusse margini di autonomia degli esecutori nel coordinamento ritmico, mantenendo controllata l’organizzazione delle altezze..
Fonti nel payload: <https://polmic.pl/en/encyclopedia/subject-entries/l/lutoslawski-witold-en>.
**Riscontri esterni mirati:** Venetian Games (1961), aleatorism controlled in rhythm with fixed pitch (<https://polmic.pl/en/encyclopedia/subject-entries/l/lutoslawski-witold-en>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 164 — legacy:sonorismo-cluster-penderecki|pers:krzysztof-penderecki

Penderecki, Threnody/Trenodia per le vittime di Hiroshima (1960), per 52 strumenti ad arco: cluster, glissandi e nuove notazioni. L'originale si chiamava 8′37″; la nota legacy scrive «Il Treno per le vittime di Hiroshima», falso amico da correggere editorialmente senza alterare il payload.

**Guardrail:** ALLERTA testuale: «Il Treno» va sostituito, in pubblicazione futura, con «Trenodia» o titolo ufficiale.
**Originali:** `base2K:1522` (`forma-o-pratica-documentata`, base) · `special2K:audit8h-penderecki-threnody-sonorismo` (`scrittura-cluster-52-archi`, specialist).
**Specialistico `special2K:audit8h-penderecki-threnody-sonorismo`:** forward `documenta attraverso opere e prassi di` · reverse `contribuì concretamente alla storia di`. Nota: Il Treno per le vittime di Hiroshima impiega 52 strumenti ad arco, cluster per quarti di tono, glissandi e altri effetti, documentando un percorso sonoristico originale..
Fonti nel payload: <https://polishmusic.usc.edu/2021/03/25/pciny-presents-krzysztof-penderecki-in-memoriam-worldwide/>.
**Riscontri esterni mirati:** Threnody 1960, 52 strings, initially titled 8′37″ (<https://www.deutschegrammophon.com/en/composers/krzysztof-penderecki>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 165 — legacy:gunther-schule-monaco|pers:carl-orff

La Günther-Schule di Monaco fu fondata nel 1924 da Carl Orff INSIEME a Dorothee Günther. Formazione in ginnastica, ritmica, musica e danza; non trasformarla in istituzione esclusivamente compositiva o attribuirla a Orff soltanto.

**Guardrail:** cofondazione con Dorothee Günther; metodo Schulwerk distinto dall'istituzione.
**Originali:** `base2K:1525` (`forma-o-pratica-documentata`, base) · `special2K:audit8-orff-gunther-schule` (`cofondazione-laboratorio-pedagogico`, specialist).
**Specialistico `special2K:audit8-orff-gunther-schule`:** forward `fu cofondata nel 1924 insieme a Dorothee Günther da` · reverse `fondò con Dorothee Günther il laboratorio pedagogico della`. Nota: Carl Orff e Dorothee Günther fondarono nel 1924 la Günther-Schule a Monaco, laboratorio di musica elementare, movimento e danza da cui nacque l'Orff-Schulwerk; questa relazione non attribuisce a Orff la fondazione esclusiva e non presenta il metodo come scuola di composizione..
Fonti nel payload: <https://www.orff-zentrum.de/orff/biografie/langversion/index.html> · <https://www.orff-zentrum.de/orff/werke/paedagogisch/index.html>.
**Riscontri esterni mirati:** Dorothee Günther and Carl Orff founded Günther-Schule in 1924 (<https://www.orff-zentrum.de/orff/biografie/langversion/>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 166 — legacy:gebrauchsmusik-hindemith|pers:paul-hindemith

La Gebrauchsmusik associata a Hindemith designa una fase e un orientamento di musica funzionale, comunitaria e pedagogica. Non tutta la sua produzione rientra in questa categoria e non crea vicinanze personali per affinità di funzione.

**Guardrail:** categoria estetico-funzionale circoscritta, non affiliazione biografica totalizzante.
**Originali:** `base2K:1526` (`forma-o-pratica-documentata`, base) · `special2K:audit8h-hindemith-gebrauchsmusik` (`musica-duso-comunitario`, specialist).
**Specialistico `special2K:audit8h-hindemith-gebrauchsmusik`:** forward `documenta attraverso opere e prassi di` · reverse `contribuì concretamente alla storia di`. Nota: Hindemith coltivò il modello della Gebrauchsmusik, legato alla pratica del fare musica con funzione anche educativa: la fonte distingue tale fase dagli sviluppi successivi..
Fonti nel payload: <https://www.treccani.it/enciclopedia/paul-hindemith/>.

### 167 — legacy:scuola-darmstadt|pers:stockhausen

Stockhausen fu protagonista dei Ferienkurse di Darmstadt e della sperimentazione seriale ed elettronica; il fatto concreto è la partecipazione ai corsi e alle discussioni, non appartenenza a un corpo unico di docenti/compositori omogenei.

**Guardrail:** non attraversare il nodo Darmstadt per collegare automaticamente Stockhausen, Boulez, Ligeti.
**Originali:** `base2K:1528` (`forma-o-pratica-documentata`, base) · `special2K:scuola-darmstadt-karlheinz-stockhausen` (`protagonista-dei-corsi`, specialist).
**Specialistico `special2K:scuola-darmstadt-karlheinz-stockhausen`:** forward `videro tra i protagonisti` · reverse `fu fra i protagonisti dei corsi di`. Nota: Stockhausen fu fra i protagonisti di Darmstadt e vi contribuì allo sviluppo delle discussioni sul serialismo e sulle tecnologie elettroniche..
Fonti nel payload: <https://www.treccani.it/enciclopedia/stockhausen-e-la-scuola-di-darmstadt-boulez_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 168 — legacy:chanson-borgognona-quattrocento|pers:gilles-binchois

Binchois operò in ambiente ducale borgognone e compose chansons, soprattutto rondeaux. Distinguere attività di corte, repertorio e «scuola franco-fiamminga», che è etichetta storiografica differente.

**Guardrail:** nessun insegnamento deducibile automaticamente da corte o chanson.
**Originali:** `base2K:1533` (`forma-o-pratica-documentata`, base) · `special2K:audit8g-binchois-chanson-borgognona` (`chanson-cortigiana-ducale`, specialist).
**Specialistico `special2K:audit8g-binchois-chanson-borgognona`:** forward `fu coltivata alla corte ducale da` · reverse `compose chanson e operò al servizio della`. Nota: Gilles Binchois fu musicista di Filippo il Buono e autore di chansons, soprattutto in forma di rondeau; è un legame storico con il repertorio e la committenza borgognona..
Fonti nel payload: <https://www.larousse.fr/encyclopedie/musdico/Gilles_Binchois/166271>.

### 169 — legacy:souterliedekens-olandesi-cinquecento|pers:jacob-clemens-non-papa

I Souterliedekens sono salmi in lingua olandese associati alla produzione polifonica di Clemens non Papa e alle edizioni di Susato; il dato editoriale e il trattamento polifonico vanno separati dall'etichetta confessionale.

**Guardrail:** non attribuire automaticamente adesione religiosa dalla lingua dei salmi.
**Originali:** `base2K:1535` (`forma-o-pratica-documentata`, base) · `special2K:audit8g-clemens-souterliedekens` (`polifonia-salmi-vernacolari`, specialist).
**Specialistico `special2K:audit8g-clemens-souterliedekens`:** forward `furono pubblicati in raccolte musicali di` · reverse `musicò i salmi dei`. Nota: Clemens compose i Souterliedekens, salmi olandesi trattati polifonicamente su melodie diffuse e pubblicati in quattro libri da Susato; non è una generica associazione confessionale..
Fonti nel payload: <https://www.larousse.fr/encyclopedie/musdico/Jacques_Cl%C3%A9ment_ou_Jacob_Clemens_dit_Clemens_Non_Papa/166857>.

### 170 — legacy:lauda-musicale-oratorio-filippino|pers:giovanni-animuccia

Animuccia pubblicò raccolte di laudi per le pratiche spirituali dell'Oratorio filippino. La lauda e l'istituzione dell'Oratorio non corrispondono, senza altre prove, all'oratorio drammatico posteriore come genere codificato.

**Guardrail:** non proiettare il genere secentesco sull'intera pratica delle laudi.
**Originali:** `base2K:1536` (`forma-o-pratica-documentata`, base) · `special2K:audit8g-animuccia-lauda-filippina` (`libri-laudi-oratorio-filippo-neri`, specialist).
**Specialistico `special2K:audit8g-animuccia-lauda-filippina`:** forward `fu trasformata da raccolte composte da` · reverse `compose laudi spirituali per l’`. Nota: Animuccia pubblicò libri di laudi per le riunioni dell’Oratorio di Filippo Neri, con attenzione alla comprensione del testo e alla partecipazione dei fedeli..
Fonti nel payload: <https://www.treccani.it/enciclopedia/l-oratorio-musicale_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 171 — legacy:madrigale|pers:costanzo-festa

Festa è uno dei protagonisti della prima stagione del madrigale cinquecentesco, con raccolta del 1537; il precedente madrigale trecentesco e la formazione plurale del nuovo genere restano distinti.

**Guardrail:** evitare paternità esclusiva e confusione con madrigale del Trecento.
**Originali:** `base2K:1541` (`forma-o-pratica-documentata`, base) · `special2K:audit8g-festa-madrigale-primo-cinquecento` (`madrigali-cinquecenteschi-prima-generazione`, specialist).
**Specialistico `special2K:audit8g-festa-madrigale-primo-cinquecento`:** forward `fu coltivato nelle prime raccolte da` · reverse `pubblicò madrigali fra i primi esempi italiani del`. Nota: Festa pubblicò un libro di madrigali a tre voci nel 1537 e contribuì alla diffusione della scrittura madrigalistica italiana; non si asserisce che abbia inventato da solo il genere..
Fonti nel payload: <https://www.treccani.it/enciclopedia/costanzo-festa_%28Enciclopedia-Italiana%29/>.

### 172 — legacy:scuola-napoletana|pers:leonardo-vinci

Leonardo Vinci è legato all'opera seria e all'ambiente dei teatri napoletani del Settecento; la «scuola napoletana» è insieme tradizione e contesto istituzionale, non un certificato automatico di maestro→allievo.

**Guardrail:** non fondere con Leonardo Leo; scheda Napoli è fonte di contesto, non prova puntuale di ogni qualifica.
**Originali:** `base2K:1548` (`forma-o-pratica-documentata`, base) · `special2K:scuola-napoletana-leonardo-vinci` (`opera-seria`, specialist).
**Specialistico `special2K:scuola-napoletana-leonardo-vinci`:** forward `annovera nella propria storia musicale come operista del teatro San Bartolomeo e dell'opera seria` · reverse `è riconosciuto come operista del teatro San Bartolomeo e dell'opera seria nella`. Nota: Leonardo Vinci appartenne al gruppo di operisti napoletani attivi al teatro San Bartolomeo, rappresentando un'importante fase dell'opera seria settecentesca..
Fonti nel payload: <https://www.treccani.it/enciclopedia/napoli_%28Enciclopedia-Italiana%29/>.

### 173 — legacy:scuola-napoletana|pers:leonardo-leo

Leonardo Leo ebbe attività autonoma in teatro e musica sacra a Napoli; il suo profilo non è intercambiabile con quello di Leonardo Vinci né deve essere ridotto a una sola categoria operistica.

**Guardrail:** non confondere Leonardo Leo con Leonardo Vinci, né teatro con musica sacra.
**Originali:** `base2K:1549` (`forma-o-pratica-documentata`, base) · `special2K:scuola-napoletana-leonardo-leo` (`opera-seria-e-sacra`, specialist).
**Specialistico `special2K:scuola-napoletana-leonardo-leo`:** forward `annovera nella propria storia musicale come operista e compositore di musica sacra nella Napoli settecentesca` · reverse `è riconosciuto come operista e compositore di musica sacra nella Napoli settecentesca nella`. Nota: Leonardo Leo è fra i maestri settecenteschi della scuola napoletana, attivo in teatro e nei repertori vocali sacri..
Fonti nel payload: <https://www.treccani.it/enciclopedia/napoli_%28Enciclopedia-Italiana%29/>.

### 174 — legacy:opera-comique|pers:egidio-duni

Egidio Duni partecipò alla trasformazione dell'opéra-comique con Le peintre amoureux de son modèle (prima 26 luglio 1757; libretto di Louis Anseaume). Due archi specialistici dello stesso gruppo descrivono il medesimo contesto a differente granularità: conservarli entrambi, senza eliminazione per estremi.

**Guardrail:** TRIPLA COLLISIONE: 1 base + 2 specialistici; Duni non fondatore esclusivo; Anseaume librettista distinto.
**Originali:** `base2K:1551` (`forma-o-pratica-documentata`, base) · `special2K:gen-opera-comique-egidio-duni` (`repertorio-e-trasformazione`, specialist) · `special2K:audit7-duni-opera-comique` (`sviluppo-storico-genere`, specialist).
**Specialistico `special2K:gen-opera-comique-egidio-duni`:** forward `fu praticato o trasformato da` · reverse `coltivò o trasformò il genere di`. Nota: Duni contribuì al consolidamento dell'opéra-comique tramite arie e accompagnamenti scritti appositamente..
Fonti nel payload: <https://www.treccani.it/enciclopedia/dall-intermezzo-all-opera-buffa_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Specialistico `special2K:audit7-duni-opera-comique`:** forward `fu sviluppata in Francia anche attraverso le opere di` · reverse `contribuì al repertorio dell'`. Nota: Egidio Duni contribuì allo sviluppo dell'opéra-comique francese con Le peintre amoureux de son modèle (1757) e altre opere che adattavano l'esperienza buffa italiana alla prosodia e al teatro parlato francesi. L'importanza dei librettisti e la natura collettiva del genere non permettono di attribuirne a lui la fondazione esclusiva..
Fonti nel payload: <https://www.treccani.it/enciclopedia/egidio-romualdo-duni_%28Dizionario-Biografico%29/> · <https://www.larousse.fr/encyclopedie/musdico/Duni/167354>.
**Riscontri esterni mirati:** BnF original score catalog, Duni music Anseaume libretto, first performed 26 July 1757 (<https://catalogue.bnf.fr/ark:/12148/cb456435186>) · opéra-comique historical adaptation, details and chronology (<https://www.treccani.it/enciclopedia/egidio-romualdo-duni_%28Dizionario-Biografico%29/>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 175 — legacy:scuola-napoletana|pers:nicola-porpora

Porpora è compositore d'opera e maestro di canto nella cultura musicale napoletana; un arco verso la «scuola» non prova automaticamente rapporti diretti con tutti i cantanti o compositori del contesto.

**Guardrail:** separare didattica vocale da appartenenza alla tradizione teatrale.
**Originali:** `base2K:1554` (`forma-o-pratica-documentata`, base) · `special2K:scuola-napoletana-nicola-porpora` (`didattica-vocale-e-opera`, specialist).
**Specialistico `special2K:scuola-napoletana-nicola-porpora`:** forward `annovera nella propria storia musicale come maestro di canto e compositore d'opera` · reverse `è riconosciuto come maestro di canto e compositore d'opera nella`. Nota: Nicola Porpora apparteneva all'ambiente dell'opera napoletana e fu anche un importante didatta vocale, collegando pratica teatrale e formazione dei cantanti..
Fonti nel payload: <https://www.treccani.it/enciclopedia/napoli_%28Enciclopedia-Italiana%29/>.

### 176 — legacy:scuola-mannheim|pers:franz-xaver-richter

Richter fu figura della prima generazione dell'ambiente di Mannheim; contributi al contrappunto e alla musica strumentale. La categoria non attribuisce legami di maestro-allievo con tutti i musicisti della stessa orchestra.

**Guardrail:** prima generazione, non rapporto personale universalizzato.
**Originali:** `base2K:1556` (`forma-o-pratica-documentata`, base) · `special2K:scuola-mannheim-franz-xaver-richter` (`iniziatore-e-contrappunto`, specialist).
**Specialistico `special2K:scuola-mannheim-franz-xaver-richter`:** forward `annovera tra gli iniziatori della propria tradizione` · reverse `fu uno degli iniziatori della`. Nota: Franz Xaver Richter è annoverato con Johann Stamitz fra gli iniziatori della scuola di Mannheim, contribuendo alla scrittura strumentale del Settecento..
Fonti nel payload: <https://www.treccani.it/enciclopedia/mannheim/>.

### 177 — legacy:scuola-mannheim|pers:christian-cannabich

Christian Cannabich, formato da Johann Stamitz, ne proseguì la guida orchestrale. Le cronologie per maestro concertatore dopo 1757 e direttore della musica strumentale (1773/1774 a seconda della fonte) non vanno assimilate in un'unica data.

**Guardrail:** ALLERTA cronologia/titoli: Treccani 1757 per successione; Deutsche Biographie 1774 per direzione; ricostruzione Heidelberg 1773–1778.
**Originali:** `base2K:1558` (`forma-o-pratica-documentata`, base) · `special2K:scuola-mannheim-christian-cannabich` (`direzione-e-rinnovamento`, specialist).
**Specialistico `special2K:scuola-mannheim-christian-cannabich`:** forward `ebbe come direttore e rinnovatore dell'orchestra di corte` · reverse `fu direttore della compagine orchestrale della`. Nota: Christian Cannabich succedette a Stamitz nella direzione della musica di corte e fu protagonista della stagione matura dell'orchestra di Mannheim..
Fonti nel payload: <https://www.treccani.it/enciclopedia/christian-cannabich_%28Enciclopedia-Italiana%29/>.
**Riscontri esterni mirati:** 1757 succession as concertmaster/direction of court music (<https://www.treccani.it/enciclopedia/christian-cannabich_%28Enciclopedia-Italiana%29/>) · 1774 director of instrumental music; role distinguished from earlier concertmaster (<https://www.deutsche-biographie.de/sfz7844.html>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 178 — legacy:scuola-darmstadt|pers:ligeti

Ligeti partecipò ai Ferienkurse e nel programma 1972 dell'IMD figura come docente/presentatore di conferenze di composizione. È un rapporto verificabile con l'istituzione, non adesione indefettibile al serialismo integrale.

**Guardrail:** fonte primaria IMD conferma programma 1972; non dedurre relazioni personali per comune presenza.
**Originali:** `base2K:1560` (`rapporto-con-ambiente-d-avanguardia`, base) · `special2K:audit2-darmstadt-ligeti` (`partecipazione-ai-corsi-e-docenza`, specialist).
**Specialistico `special2K:audit2-darmstadt-ligeti`:** forward `accolsero fra i partecipanti e docenti` · reverse `frequentò e tenne corsi nell'ambito di`. Nota: Ligeti frequentò ripetutamente i Ferienkurse di Darmstadt tra 1959 e 1972, tenendo anche corsi di composizione documentati dal programma 1972. Il rapporto attesta partecipazione istituzionale e non implica adesione a un'unica ortodossia seriale..
Fonti nel payload: <https://brahms.ircam.fr/en/composer/gyorgy-ligeti/biography> · <https://internationales-musikinstitut.de/de/chronik/ferienkurse-1972/>.
**Riscontri esterni mirati:** Ligeti listed among composition faculty and lectures 1972 (<https://internationales-musikinstitut.de/de/chronik/ferienkurse-1972/>). Questi riscontri **non** certificano automaticamente il resto dei metadati.

### 179 — legacy:grand-opera|pers:meyerbeer

Meyerbeer è protagonista dell'affermazione del grand opéra francese per opere monumentali e grandi conflitti storici. Il genere non equivale a scuola personale o singola istituzione e non dimostra un rapporto con Auber.

**Guardrail:** archi su opere specifiche da tenere distinti dalla categoria genere.
**Originali:** `base2K:1561` (`forma-o-pratica-documentata`, base) · `special2K:gen-grand-opera-giacomo-meyerbeer` (`repertorio-e-trasformazione`, specialist).
**Specialistico `special2K:gen-grand-opera-giacomo-meyerbeer`:** forward `fu praticato o trasformato da` · reverse `coltivò o trasformò il genere di`. Nota: Meyerbeer sviluppò il grand opéra come teatro di imponenti conflitti storici e religiosi..
Fonti nel payload: <https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 180 — legacy:grand-opera|pers:daniel-francois-esprit-auber

Auber, La muette de Portici (1828): modello decisivo delle forme del grand opéra. Non attribuirgli la creazione esclusiva dell'intero genere né trasformare condivisione con Meyerbeer in collaborazione diretta.

**Guardrail:** opera del 1828; ruolo pionieristico, non esclusivo inventore.
**Originali:** `base2K:1578` (`forma-o-pratica-documentata`, base) · `special2K:gen-grand-opera-daniel-francois-esprit-auber` (`repertorio-e-trasformazione`, specialist).
**Specialistico `special2K:gen-grand-opera-daniel-francois-esprit-auber`:** forward `fu praticato o trasformato da` · reverse `coltivò o trasformò il genere di`. Nota: La muette de Portici è convenzionalmente considerato uno dei primi grand opéra..
Fonti nel payload: <https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

## Alert da conservare prima di qualunque pubblicazione

- **164 Penderecki:** refuso semantico nella nota specialistica «Il Treno per le vittime di Hiroshima». È la *Trenodia per le vittime di Hiroshima* (*Threnody to the Victims of Hiroshima*, 1960), per 52 archi, già *8′37″*. L'originale rimane nel JSON di audit senza sovrascrittura. Riscontro <https://www.deutschegrammophon.com/en/composers/krzysztof-penderecki>.
- **165 Orff:** preservare Dorothee Günther quale cofondatrice, con Orff, della Günther-Schule nel 1924; non confondere l'istituto con la successiva codificazione dello Schulwerk. Riscontro <https://www.orff-zentrum.de/orff/biografie/langversion/>.
- **174 Duni:** collisione tripla, non due duplicati; BnF attesta spartito, autore delle musiche Duni, librettista Anseaume, prima del 26 luglio 1757. Mantenere i predicati distinti <https://catalogue.bnf.fr/ark:/12148/cb456435186>.
- **177 Cannabich:** Treccani descrive successione allo Stamitz nel 1757; Deutsche Biographie direttore della musica strumentale dal 1774. Sono due gradi/cariche e una cronologia documentale da modellare senza sovrapposizioni <https://www.deutsche-biographie.de/sfz7844.html>.
- **178 Ligeti:** il programma IMD 1972 lo registra fra i docenti di composizione e gli interventi; non equivale a un'appartenenza a uno stile seriale unificato <https://internationales-musikinstitut.de/de/chronik/ferienkurse-1972/>.
- **168–171:** non confondere chansons borgognone con scuola franco-fiamminga, salmi olandesi con confessione religiosa, laudi filippine con l'oratorio drammatico maturo, madrigale cinquecentesco con quello trecentesco.
- **179–180:** Meyerbeer e Auber sono collegati al grand opéra attraverso opere proprie; non attraverso un presunto legame interpersonale o una paternità esclusiva del genere.

## Test di integrità

- PASS — 20 groups cover 161..180
- PASS — 41 originals including Duni's third arc
- PASS — Every group has base and specialist records
- PASS — No original record missing from staging
- PASS — Normalized pairs agree for every source edge
- PASS — All specialist directional texts preserved
- PASS — All source notes exactly retained
- PASS — All source lists exactly retained
- PASS — Source kind and original endpoints intact
- PASS — Duni 174 has 3 distinct source objects
- PASS — Historical edge certification never inferred from identity/category
- PASS — Period/school/genre rooted gates all closed
- PASS — JS base renderer remains explicitly unported
- PASS — Explicit title, chronologies and source warnings
- PASS — No public file targets in planned writes

## Limiti e prossima ripresa

I controlli certificano la **conservazione dello staging**, non la verità filologica esaustiva. Port JS `relationSentence` (tre ridefinizioni), testi bidirezionali completi, hover/tap e filtro di pertinenza radicata I–V ancora non collaudati. Capitoli editoriali sempre fuori dal grafo storico. Nessun grafo pubblico o interfaccia modificati.

**Prossimo Lotto 10:** gruppi **181–200**, quindi 201–250.
