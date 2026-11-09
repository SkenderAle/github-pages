# Musurgia Atlantis — Proposta tassonomica trasversale: camera, sinfonica, sacra
**Data:** 9 novembre 2026
**Stato:** staging editoriale e piano di normalizzazione; non è un merge di dati, né un certificato filologico.

## Origine e perimetro
L'utente ha fornito tre schemi strutturati: **Musica da camera occidentale dal XVI secolo**, **Musica sinfonica e orchestrale dal XVII secolo**, **Musica sacra occidentale dal VI secolo**. I contenuti vanno conservati come input per l'audit e non riversati direttamente come archi del grafo pubblico. La gerarchia è una proposta editoriale, non una genealogia causale e non una verifica indipendente di ogni esempio.

## Vincolo UI già approvato
All'avvio soltanto Persone, Opere, Reti culturali, Generi e forme attive, in quest'ordine. Tutte le altre categorie esistenti spente di default. I capitoli di Musurgia Mundi rimangono risorse editoriali, mai nodi storici attraversabili. La pertinenza radicata I–V esclude attraversamenti indiscriminati attraverso periodi, generi, confessioni e scuole.

## Nodi già esistenti nel Checkpoint 11: RIUSARE
- `genere-musica-da-camera` Musica da camera
- `genere-quartetto-archi` Quartetto d'archi
- `genere-sonata` Sonata
- `genere-sinfonia` Sinfonia
- `genere-concerto` Concerto
- `genere-suite` Suite
- `forma-ouverture` Ouverture
- `forma-ricercare` Ricercare
- `genere-lied` Lied
- `forma-fuga` Fuga
- `genere-rapsodia` Rapsodia
- `genere-messa` Messa
- `genere-mottetto` Mottetto
- `genere-oratorio` Oratorio
- `genere-cantata` Cantata

Questi 15 ID sono presenti nei 50 nodi dell'overlay Checkpoint 11, non necessariamente costituiscono da soli tutta la tassonomia legacy. Deduplicare per identità concettuale, non per stringa.

## Schema semantico necessario
Un soggetto può avere molte *faccette*:
- `genre_subtype_of` = sottogenere di (es. dramma giocoso → opera);
- `instrumentation` = organico (es. ottetto d'archi);
- `historical_variant_of` = declinazione storica (es. sinfonia romantica);
- `technique_or_form` = forma/tecnica (es. forma-sonata, isoritmia, policoralità, dodecafonia);
- `liturgical_function` = funzione liturgica (es. ordinarium, proprium, ufficio, requiem);
- `religious_tradition` = contesto confessionale o rituale (latino/cattolico, luterano, anglicano, ortodosso ecc.);
- `specific_work_is_a` = opera individuale → genere/sottogenere, con fonte;
- `work_uses_technique` = opera individuale → procedimento, con fonte;
- `documented_repertoire` = compositore → genere se esiste documentazione; NON prova automaticamente la classificazione di tutte le sue opere.
Una composizione può appartenere a più ambiti (ad es. *Missa solemnis* può essere messa, musica sacra e produzione sinfonico-corale). Non imporre albero unico; nessun genere come ponte causale fra autori.

## Macroarea 1 — Musica da camera
Rispettare le sei fasce proposte: (1) consort, danze/intavolature, continuo e prima sonata; (2) sonata da chiesa/da camera, triosonata, suite, forme contrappuntistiche; (3) quartetti, trii, quintetti e altre formazioni classiche, Harmoniemusik; (4) espansioni romantiche, lirica da camera, miniatura; (5) impressionismo, seconda scuola di Vienna, neoclassicismo, Bartók; (6) elettroacustica, tecniche estese, minimalismo e ibridi.
**Cautele:** musica da camera non coincide con ogni brano per strumento solo; le sonate di Bach per strumento e cembalo obbligato non sono ordinariamente etichettate `strumento obbligato e basso continuo`: distinguere scrittura a parti obbligate e basso continuo. `Sonata da chiesa` e `sonata da camera` non sono formati rigidamente esclusivi o invariabili. Consort omogeneo non significa esclusivamente la stessa specie strumentale in tutta Europa. `Klangfarbenmelodie` è procedimento tecnico, non genere cameristico. `Pierrot lunaire` è melologo/ciclo di melodrammi con voce recitante (Sprechstimme) ed ensemble, non genericamente `Lieder` in senso ordinario. Ortografia: modernismo, obbligato; Morton Feldman (non Feldmann). Il frammento corrotto `T组` va trattato come testo da correggere, non come nome di organico.

## Macroarea 2 — Musica sinfonica e orchestrale
Rispettare tre macrosezioni proposte: (1) sinfonia autonoma ed evoluzioni dal Settecento a oggi; (2) musica concertante; (3) musica a programma e forme orchestrali non concertanti.
**Cautele:** `sinfonia avanti l'opera` è antecedente storico importante, ma non identificare automaticamente l'ouverture con ogni sinfonia autonoma. La scuola di Mannheim ha contribuito al linguaggio sinfonico e all'orchestrazione, ma il modello in quattro movimenti e il clarinetto non sono attribuibili alla sola scuola come inventori univoci. `Sinfonia a programma` e `poema sinfonico` sono forme sovrapponibili per poetica, non identiche per impianto; Liszt non va citato indistintamente come autore di sinfonia a programma nello stesso senso di Berlioz senza precisazioni. `Concerto grosso` è anche il nome del ripieno/tutti nel lessico storico, ma in tassonomia distinguere titolo di genere e contrasto concertino/ripieno. `Concerto per orchestra` non richiede solista esterno; `Sinfonia concertante` va distinta dal concerto solistico. `Tondichtung` è grafia inesatta rispetto a `Tondichtung`? Forma ordinaria: `Tondichtung` (plurale `Tondichtungen`); conservare denominazione come termine tedesco ma non fare nodo separato dal poema sinfonico senza evidenza concettuale. `Suite extratratrale` è refuso: preferire `suite tratta da musica teatrale o di scena`; *Scheherazade* è comunemente definita suite sinfonica di carattere programmatico, non esempio indifferenziato di raccolta di danze. `Sinfonia` di Berio (1968–69) non è semplicemente una sinfonia in senso classico.

## Macroarea 3 — Musica sacra occidentale
Cinque archi cronologici in input: (1) monodia liturgica medievale, proprio/ordinario, ufficio, canti regionali, tropi, sequenze, dramma liturgico; (2) polifonia dal IX al XVI secolo, organum, clausula, mottetto, messa, stile concertato/policorale; (3) forme e tradizioni cattoliche/protestanti barocche; (4) classicismo-romanticismo, requiem, messa, oratorio, cecilianesimo, ortodossia; (5) modernismi e contemporaneo.
**Cautele musicologiche da sottoporre a fonti:**
- `Proprium Missae` e `Ordinarium Missae` sono componenti liturgiche, NON generi equivalenti alla messa polifonica. Il termine `romano antico` non è sinonimo di gregoriano; la storia carolingia è più complessa di un semplice unico processo di codificazione.
- Le forme del dramma liturgico e le opere di Hildegard non vanno fuse indistintamente: *Ordo virtutum* è opera morale in canto, con discussioni sulla sua etichettatura e collocazione liturgica.
- Sequenze: l'origine non si riduce in modo univoco allo jubilus, e la cronologia delle attribuzioni di `Dies irae` a Tommaso da Celano richiede cautela; Jacopone da Todi va distinto dalle attribuzioni incerte dello *Stabat mater*.
- *Messe de Nostre Dame* di Machaut: prima grande messa polifonica ciclica attribuibile a un autore unico tra quelle sopravvissute, evitare assoluto `prima Messa d'autore unitaria` senza qualificazione.
- `Messa parodia` è denominazione storiografica (messa d'imitazione), distinguere dalla parafrasi e dal cantus firmus; mottetto rinascimentale non solo testi `extracanonici` nel senso generico.
- `Polifonia della Controriforma` non implica rigido dogma di omoritmia o unica causalità di Palestrina; cori spezzati e concertato sono tecnica/prassi, non sottogenere della messa.
- `Oratorio`, `cantata`, `passione`, `grand motet`, `corale` sono forme e funzioni diverse, non un albero di sola appartenenza confessionale.
- Evitare `Requiem romantico laico` per il *Deutsches Requiem* di Brahms: non è la messa latina dei defunti ma composizione su testi biblici tedeschi; usare classificazione contestuale autonoma.
- La *Missa solemnis* di Beethoven op. 123 appartiene alla maturità romantica/1823, non usarla come esempio del classicismo 1750–1820; Mozart e Haydn non producono sempre `messa sinfonico-corale` in un unico senso.
- La **tradizione ortodossa** orientale non coincide automaticamente con `Occidentale`: decidere se dichiarare estensione comparativa o rinominare macroarea `Musica sacra nelle tradizioni europee`. *Vespri* di Rachmaninov, op. 37, più precisamente *Veglia di tutta la notte*, non semplicemente la Divina Liturgia.
- *Sinfonia di Salmi* di Stravinskij non è una messa o un mottetto; la *Passione secondo Luca* di Penderecki non è un Requiem; distinguere funzione rituale, testo e titolo.
- `Holy Minimalism` è etichetta critica discutibile e non confessione/forma; `Musica neotemporale` non è etichetta standard sicura. Correggere frammento `T structure/Tavener` in John Tavener, da distinguere dal rinascimentale John Taverner.
- Verificare l'uso di `sacra` per repertori da concerto senza funzione liturgica: rapporto con testo sacro e destinazione sono attributi diversi.

## Migrazione operativa — senza commit di produzione
1. Conservare come tre macroaree di consultazione, **non** tre supernodi che funzionano da ponti storici.
2. Inventariare nomi/ID preesistenti e sinonimi su TUTTO il corpus legacy + Atlantis; catalogare nuova entità solo quando l'identità concettuale è realmente assente.
3. Separare dai nodi le etichette di periodo, tecnica, strumentazione, confessione e destinazione; dare predicati diversi.
4. Per ogni specifica composizione verificare legame alla forma e, dove presente, collegamento al sottogenere e al genere, con fonti, note, verso inverso e quality gate.
5. Test regressivi multi-radice: Mozart/*Don Giovanni*/Opera; Bach/messa e cantata; Machaut/*Messe de Nostre Dame*; Beethoven/*Missa solemnis*; Berio/*Sinfonia*; Brahms/*Ein deutsches Requiem*; senza attraversamento automatico di categorie verso tutti gli autori.
6. Pubblicare solo overlay reversibile e collaudato. Nessuna modifica al grafo produzione, ai 210 lotti storico-filologici, ai capitoli o all'Atlante sorgente fino a certificazione.

## Attività svolta
Controllata direttamente la lista dei 50 nodi dell'overlay Checkpoint 11 su `main`; non ancora confrontati per questa tranche i grafi JSON completi o le relazioni specialistiche. Questo audit registra le proposte e i punti da accertare, non pretende di aver collaudato le tre tassonomie né ogni attribuzione.
