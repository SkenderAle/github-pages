# MUSURGIA ATLANTIS — THREAD DI CONSEGNA PER AGENTE API
## Checkpoint 52D e successivi — 11 novembre 2026

**Stato:** documento operativo, non avvio automatico del lavoro. **Ultimo checkpoint concluso: 52C.** Il 52D NON è certificato.
**Repository:** `SkenderAle/github-pages` · **branch di riferimento:** `main`.
**Area di lavoro consentita:** `musurgia-atlantis/audit-integrazione/`; operare preferibilmente su branch tecnica con PR. **Non modificare** `musurgia-atlantis/grafo.json` né `musurgia-atlantis/index.html` pubblici senza espressa autorizzazione dell'utente dopo collaudo.
**Thread madre:** `audit-integrazione/THREAD_CONTINUITA_2026-11-08.md` (lettura obbligatoria in caso di dubbi su precedenti checkpoint).
**Preview:** `audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html`; verificare la HEAD prima di ogni esecuzione.
**Ultimo registro:** `audit-integrazione/AUDIT_INVENTARIO_FEDERATO_CHECKPOINT52C_2026-11-11.md`.

# A. PRINCIPI EDITORIALI VINCOLANTI — NODI, ARCHI E PERTINENZA

## A1. Grafo non ridotto
1. **Nessun arco documentato deve sparire dal dataset per ragioni di affollamento visuale.** Migliaia di archi sono accettabili. La visualizzazione si governa mediante filtri **espliciti e reversibili**, mai cancellando i dati.
2. Se i due estremi di una relazione ammessa sono visibili, mostrare l'arco relativo salvo filtro dichiarato; segnalare esplicitamente nell'interfaccia eventuali archi nascosti. Un nodo isolato non deve essere l'effetto silenzioso di un helper che ha dimenticato di disegnare l'arco.
3. Distinguere `assenza nel dato`, `arco presente ma non disegnato`, `arco nascosto da filtro`, `arco in HOLD`. Non trattare queste situazioni come equivalenti.
4. Non derivare influenze/relazioni personali fra due compositori dal fatto che entrambi abbiano scritto opere dello stesso genere. I link di repertorio sono indici, NON archi causali fra persone.

## A2. Ring autore–opera–genere (regola trasversale)
- Opera individuale: `autore —[ha_composto]→ opera —[ha_genere/ha_forma]→ genere o sottogenere`.
- Il medesimo compositore deve collegarsi anche al **genere macro**, tramite arco d'indice con provenienza dalle **sue** opere oppure attestazione legacy esplicita. Questo chiude un *ring* di navigazione `autore → opera → genere → autore` senza confondere le direzioni semantiche degli archi.
- Un'opera può appartenere a **più** generi/forme/sottocategorie, senza obbligo di scelta esclusiva. Gli archi attestati si conservano tutti.
- Vale per Concerto, Sonata, Quartetto, Opera/Singspiel, Cantata e altri generi. Il caso del titolo di raccolta non autorizza a trasferire automaticamente una classificazione di singolo brano a tutta la raccolta.
- **Parole canoniche al singolare:** `sonata`, `lied`, `concerto` ecc. Le varianti plurali sono alias di ricerca, non categorie concorrenti.

## A3. Tassonomia e raccolte
- `Concerto` deve includere realmente `Concerto solistico`, `Concerto di gruppo`, `Concerto grosso`, sottogeneri per organico (violino, pianoforte, più pianoforti, più solisti ecc.), autori attestati e **singoli concerti**. Non soltanto un elenco di compositori.
- `Concerto per violino → Concerto solistico → Concerto`; il parent deve essere visibile quando si seleziona la singola opera o il sottogenere. Un figlio non può apparire scollegato dal suo parent.
- `Concerto grosso` mantiene anche le relazioni documentate con `Concerto di gruppo` e `Concerto`. Non cancellare archi tassonomici nel dato per evitare la densità.
- I **6 Concerti brandeburghesi** (BWV 1046–1051) sono **6 opere individuali**; `Concerto brandeburghese` è il ramo editoriale richiesto in omaggio a J. S. Bach, non un genere universalmente indipendente né la fusione delle 6 opere. La raccolta rimane distinta dalle singole opere; ciascuno è attribuito a Bach e relazionato al proprio ramo.
- `Sonata per pianoforte` è una **categoria intermedia vera**, non una mera etichetta in un dettaglio. Percorso navigabile `Sonata → Sonata per pianoforte → sonata individuale`; per strumento e organico replicare solo dove documentato.
- `Quartetto` comprende `Quartetto per archi` e altri organici documentati, senza assimilazione impropria.
- `Opera` deve avere figli (opera comica, dramma giocoso, Singspiel ecc. quando applicabili) e le singole opere devono avere archi verso il proprio genere; esempio obbligatorio **Don Giovanni → Dramma giocoso → Opera**, con Mozart collegato all'opera. **Il flauto magico / Die Zauberflöte** deve mantenere Mozart ↔ opera ↔ Singspiel, e non mostrare due soli collegamenti isolati.
- `Le quattro stagioni`: il nodo `opera:quattro-stagioni` è una raccolta di 4 concerti individuali di Vivaldi, NON un quinto concerto: **La primavera RV 269 (Op.8 n.1), L'estate RV 315 (n.2), L'autunno RV 293 (n.3), L'inverno RV 297 (n.4)**. Collegare ogni opera direttamente a `pers:vivaldi`, alla raccolta, a `Concerto per violino`, quindi ai generi superiori. Conservare l'arco storico già presente **E0715** `pers:vivaldi→opera:quattro-stagioni`. I quattro concerti hanno guide individuali Flaminio. Non confondere la raccolta con l'intera **Op.8** (12 concerti).
- Collegamenti fra generi differenti solo se documentati a livello di opere/movimenti. Esempio: **BWV1048 Terzo Brandeburghese → BWV174**, riuso della sinfonia; non equiparare una cantata a un concerto.

## A4. Espansione radicata, filtri e GUI
- Quando si cerca **Mozart**, non espandere indiscriminatamente i figli di `Teatro classico` / `Classicismo` senza una loro parentela *specifica* con Mozart; epoche/capitoli restano contesto diretto, non hub automaticamente transitivi.
- Clic e doppio clic su nodo, ricerca, livello 1–5, pertinenza, profondità distinta per categorie e nodo, etichette e visibilità delle categorie devono funzionare senza rompere la connettività delle relazioni consentite.
- Categorie e ordine: **Persone; Opere; Reti culturali; Generi e forme; Strumenti; Luoghi; Istituzioni; Concetti** (preservare altre categorie storiche esistenti). All'avvio attive: Persone, Opere, Reti culturali, Generi e forme. Etichette di I livello/primo piano prioritarie; nessun sovraccarico inutile.
- Filtri da implementare/provare: profondità, pertinenza, tipo di relazione, forma/organico, autore, opera, epoca, livello di prova (`specific_work`, `legacy_catalogue`, `derived_index`), presenza di guide, stato di audit. Riduzione visiva reversibile, mai eliminazione di relazioni vere.
- Verificare fenomeni segnalati: Mozart con nodo `Opera` senza figli; Don Giovanni scollegato da `Dramma giocoso`; Singspiel senza Mozart; Leopold Mozart assente nonostante import dall'Atlante 3D; **Clementi** presente quando tutti i filtri etichette/pertinenza dovrebbero nasconderlo; `Le Petit Riens` classificato erroneamente come persona anziché opera. Questi sono **casi da ricontrollare, non bug già certificati come risolti**.
- Conservare pienamente i link/ancore delle pagine Musurgia Mundi, le guide Flaminio, i link a risorse audio/video/IMSLP e le spiegazioni bidirezionali già presenti.

## A5. Filologia, qualità e fonti
- Non assimilare autori, strumenti o identità di opere per sola omonimia. Distinguerli tramite catalogo (BWV, RV, K/KV, opus), orchestrazioni, versioni e occasioni.
- Tutte le attribuzioni in **HOLD** restano documentate nel manifesto ma non producono automaticamente un arco `Bach→opera`: tra le problematiche già individuate **BWV15, BWV53, BWV141, 142, 143, 150, 160, 189, 203**; motivazioni filologiche differenti, non chiamarle tutte spurie. `BWV200` è un **frammento/aria superstite**, non una cantata integrale; `BWV118` è un mottetto.
- Le riutilizzazioni `opera A→opera B` sono specifiche, non transitive, e necessitano di evidenza per il movimento. Distinguere autore originale da arrangiatore/trascrittore.
- Non inventare URL Flaminio o numeri di riga Excel. `source_excel_row:null` e `guide_url:null` sono possibili stati onesti. Conservare ogni `source_status` e `review_queue`. Le attribuzioni sospese non devono sparire dai registri.

# B. CHECKPOINT 52D — ESECUZIONE OBBLIGATORIA

1. **Recupera la HEAD**, registra SHA e versione software; leggi questo thread, il thread madre e `PROTOCOLLO_AGGIORNAMENTI.json` prima di scrivere.
2. Recupera gli URL `fetch(...json)` direttamente dalla preview: al 52C erano **24 percorsi distinti** (grafo pubblico, registro e 22 overlay). Non assumere che restino 24 in futuro.
3. Esegui tutta la sequenza **reale** `prepare*` dell'`init()` nello stesso runtime Node/browser usando **tutti** i file e senza stub dei passaggi catalografici. Registra nodi/archi prima e dopo ciascuno.
4. Verifica a livello **federato** ID nodo/arco univoci, nessun arco orfano, nessuna duplicazione d'autore/opera, nessun crosswalk ambiguo, quarantena HOLD. Preserva la provenienza degli archi.
5. Radici almeno: **Vivaldi**, raccolta Stagioni, quattro RV, **Concerto**, Concerto per violino, solistico, di gruppo, grosso, brandeburghese, **Bach**, BWV174, BWV200, **Mozart**, Don Giovanni, Flauto magico, **Singspiel**, **Sonata**, Sonata per pianoforte, **Quartetto**, Quartetto per archi, **Cantata sacra/profana/corale**, Mottetto. Risolvi ogni ID *dal dataset reale* quando non specificato.
6. Matrice di filtri con Persone=0/attive, Opere=0/attive, genere attivo/spento, profondità 1–5, pertinenza e clic sul singolo nodo. Conta gli archi validi di cui entrambi gli estremi sono visibili ma che la GUI non disegna.
7. Esegui collaudo in **browser WebGL reale** via HTTP, desktop e mobile o emulazione dichiarata. La validità del parser JavaScript non basta. Nessuna promessa di completamento senza evidenze.
8. Qualsiasi correzione SOLO in `audit-integrazione/`, con test automatici riproducibili e commit/PR verificabili; nessuna promozione in pubblico senza approvazione.
9. Ogni checkpoint produce **manifesto di regressione JSON**, **audit MD**, **commit SHA** e aggiornamento di **questo thread** più breve rimando al thread madre; indicare PASS/FAIL/HOLD e test *non eseguiti*. Non continuare automaticamente alla produzione se FAIL.
10. Proseguire successivamente con il catalogo Bach **BWV 201–250**, ma solo come lotto distinto: dal BWV201 iniziano opere non classificabili indiscriminatamente come cantate sacre. Nessuna numerazione artificiale e nessun record già processato reimportato.

# C. INVENTARIO FLAMINIO — REGOLE DI LETTURA

**Questo inventario è la lista esaustiva dei record esplicitamente contenuti nei manifesti già elaborati qui indicati, NON una dichiarazione che tutta Flaminio sia stata importata né che ogni record sia già nel grafo pubblico.** Alcuni lotti ripetono identità già censite e alcuni contengono versioni o HOLD. È indispensabile effettuare un crosswalk per ID e non sommare ingenuamente i conteggi come opere distinte.

Nelle righe: `ID` è il codice del manifesto o ID editoriale; `catalogo` è RV/BWV/K/op. laddove presente; `riga XLSX` è indicata solo se il dato è esplicito; `stato` distingue ammesso a staging, review, versione o HOLD. Fonte e data sono definite dal relativo file JSON, richiamato in intestazione. I file JSON restano **fonte di verità integrale** per guide, prove, link e note: questo thread è l'indice di passaggio leggibile da API.


## C1. Record di partenza e opere individuali, Checkpoint 17–Lotto 38

### OVERLAY_OPERE_GENERI_FLAMINIO_CHECKPOINT17_2026-11-09.json — 112 record elencati

**Nota:** comprende anche nodi genere/versione, non soltanto opere Flaminio; ogni categoria è indicata. Le 202 relazioni sono nel JSON originale.

- `audit:fl:mus:salambo` — Salambô (Musorgskij, incompiuta) · opera
- `audit:fl:mus:matrimonio` — Il matrimonio (Musorgskij, incompiuta) · opera
- `audit:fl:mus:boris` — Boris Godunov (Musorgskij) · opera
- `audit:fl:mus:khovan` — Chovanščina / Kovanshcina (Musorgskij) · opera
- `audit:fl:mus:fiera` — La fiera di Soročincy (Musorgskij) · opera
- `audit:fl:mus:notte` — La notte sul Monte Calvo (Musorgskij) · opera
- `audit:fl:mus:camera` — La camera dei bambini (Musorgskij) · opera
- `audit:fl:mus:morte` — Canti e danze della morte (Musorgskij) · opera
- `audit:fl:mus:boris-v1869` — Boris Godunov — versione 1869 · versione-opera
- `audit:fl:mus:boris-v1872` — Boris Godunov — versione 1872 · versione-opera
- `audit:fl:brit:turn` — The Turn of the Screw, op. 54 · opera
- `audit:fl:brit:death` — Death in Venice, op. 88 · opera
- `audit:fl:brit:simple` — Simple Symphony, op. 4 · opera
- `audit:fl:brit:boy` — A Boy was Born, op. 3 · opera
- `audit:fl:brit:seas` — Four Sea Interludes, op. 33a · opera
- `audit:fl:brit:curlew` — Curlew River, op. 71 · opera
- `audit:fl:brit:furnace` — The Burning Fiery Furnace, op. 77 · opera
- `audit:gf:parabola-chiesa` — Parabola per chiesa · genere-forma
- `audit:gf15:opera-comique` — Opéra-comique · genere-forma
- `audit:gf15:tragedia-lirica` — Tragedia lirica · genere-forma
- `audit:gf15:opera-da-camera` — Opera da camera · genere-forma
- `audit:gf15:operetta` — Operetta · genere-forma
- `audit:gf15:ciclo-vocale` — Ciclo vocale · genere-forma
- `audit:gf15:romanza-vocale` — Romanza vocale · genere-forma
- `audit:gf15:te-deum` — Te Deum · genere-forma
- `audit:gf15:sinfonietta` — Sinfonietta · genere-forma
- `audit:gf15:poema-sinfonico` — Poema sinfonico · genere-forma
- `audit:gf15:quintetto` — Quintetto strumentale · genere-forma
- `audit:gf15:pot-pourri` — Pot-pourri concertante · genere-forma
- `audit:fl15:pers:barber` — Samuel Barber · persona
- `audit:fl15:pers:auber` — Daniel-François-Esprit Auber · persona
- `audit:fl15:l06:w01` — Sonata in si minore per pianoforte · op. 1 · opera
- `audit:fl15:l06:w02` — Quattro Lieder · op. 2 · opera
- `audit:fl15:l06:w03` — Quartetto per archi · op. 3 · opera
- `audit:fl15:l06:w04` — Fünf Orchesterlieder nach Ansichtskarten · op. 4 · opera
- `audit:fl15:l06:w05` — Quattro pezzi per clarinetto e pianoforte · op. 5 · opera
- `audit:fl15:l06:w06` — Drei Orchesterstücke · op. 6 · opera
- `audit:fl15:l06:w08` — Adelson e Salvini · catalogue local n. 1 · opera
- `audit:fl15:l06:w09` — Bianca e Gernando · catalogue local n. 2 · opera
- `audit:fl15:l06:w10` — Il pirata · catalogue local n. 3 · opera
- `audit:fl15:l06:w11` — Bianca e Fernando · catalogue local n. 4 · versione-opera
- `audit:fl15:l06:w12` — Sadness · Heyman B. 1 · opera
- `audit:fl15:l06:w13` — Sometime · Heyman B. 2 · opera
- `audit:fl15:l07:w01` — La straniera · opera
- `audit:fl15:l07:w02` — Zaira · opera
- `audit:fl15:l07:w03` — I Capuleti e i Montecchi · opera
- `audit:fl15:l07:w04` — La sonnambula · opera
- `audit:fl15:l07:w06` — Quartetto per archi (riduzione per pianoforte a quattro mani) · versione-opera
- `audit:fl15:l07:w07` — Drei Bruchstücke aus Wozzeck · opera
- `audit:fl15:l07:w08` — Es ist ein Reis entsprungen · opera
- `audit:fl15:l07:w09` — Schliesse mir die Augen beide · opera
- `audit:fl15:l07:w10` — Heiliger Himmel · opera
- `audit:fl15:l07:w11` — Melody in F · opera
- `audit:fl15:l07:w12` — Why Not? · opera
- `audit:fl15:l07:w13` — Largo · opera
- `audit:fl15:l07:w14` — War Song · opera
- `audit:fl15:l07:w15` — In the Firelight · opera
- `audit:fl15:l07:w16` — Isabel · opera
- `audit:fl15:l07:w17` — At Twilight · opera
- `audit:fl15:l07:w18` — Lullaby · opera
- `audit:fl15:l07:w19` — Thy Will be Done · opera
- `audit:fl15:l07:w20` — Nursery Songs (Mother Goose Rhymes Set to Music) · opera
- `audit:fl15:l07:w21` — The Rose Tree · opera
- `audit:fl15:l07:w22` — Gypsy Dance · opera
- `audit:fl15:l07:w23` — Prayer · opera
- `audit:fl15:l08:w01` — Julie ou L'Erreur d'un moment · AWV 1 · opera
- `audit:fl15:l08:w02` — Jean de Chimay · AWV 2 · opera
- `audit:fl15:l08:w03` — Le séjour militaire · AWV 3 · opera
- `audit:fl15:l08:w04` — Le testament et les billets doux · AWV 4 · opera
- `audit:fl15:l08:w05` — La Bergère châtelaine · AWV 5 · opera
- `audit:fl15:l08:w06` — Emma, ou La promesse imprudente · AWV 6 · opera
- `audit:fl15:l08:w07` — La maison du docteur · WD 1 · opera
- `audit:fl15:l08:w08` — Le Docteur Miracle · WD 2 · opera
- `audit:fl15:l08:w09` — Sinfonia in do maggiore · WD 32 · opera
- `audit:fl15:l08:w10` — Ouverture in la minore-maggiore · WD 31 · opera
- `audit:fl15:l08:w11` — Fuga a quattro voci in la minore · WD 62 · opera
- `audit:fl15:l08:w12` — Sinfonia in re maggiore di Gounod (trascrizione) · senza WD · opera
- `audit:fl15:l08:w13` — Pot-pourri concertant sur des thèmes italiens · H 1 · opera
- `audit:fl15:l08:w14` — Quintet pour flûte, cor et cordes · H 2 · opera
- `audit:fl15:l08:w15` — Le dépit de la bergère · H 7 · opera
- `audit:fl15:l08:w16` — Recueil de romances · H 8 · opera
- `audit:fl15:l12:w01` — Sinfonietta · op. 1 · opera
- `audit:fl15:l12:w02` — Phantasy Quartet · op. 2 · opera
- `audit:fl15:l12:w05` — Les Illuminations · op. 18 · opera
- `audit:fl15:l12:w06` — Festival Te Deum · op. 32 · opera
- `audit:gf16:pezzi-orchestrali` — Pezzi orchestrali · genere-forma
- `audit:gf16:lirica-voce-pianoforte` — Lirica per voce e pianoforte · genere-forma
- `audit:gf16:estratti-operistici` — Estratti da opera · genere-forma
- `audit:gf16:musica-corale` — Musica corale · genere-forma
- `audit:gf16:solo-vocale-sacro` — Canto sacro solistico · genere-forma
- `audit:gf17:passacaglia` — Passacaglia · genere-forma
- `audit:gf17:raccolta-lieder` — Raccolta di Lieder · genere-forma
- `audit:gf17:bagatella` — Bagatella · genere-forma
- `audit:gf17:pezzi-da-camera` — Raccolta di pezzi cameristici · genere-forma
- `audit:fl17:webern:op2` — Entflieht auf leichten Kähnen · opera
- `audit:fl17:webern:op3` — Fünf Lieder op. 3 · opera
- `audit:fl17:webern:op4` — Fünf Lieder op. 4 · opera
- `audit:fl17:webern:op5` — Fünf Sätze für Streichquartett (Cinque pezzi) · opera
- `audit:fl17:webern:op6` — Sechs Stücke für Orchester (Sei pezzi) · opera
- `audit:fl17:webern:op7` — Vier Stücke für Violine und Klavier (Quattro pezzi) · opera
- `audit:fl17:webern:op8` — Zwei Lieder (Due Lieder) · opera
- `audit:fl17:webern:op9` — Sechs Bagatellen für Streichquartett (Sei bagatelle) · opera
- `audit:fl17:webern:op10` — Fünf Stücke für Orchester (Cinque pezzi) · opera
- `audit:fl17:webern:op11` — Drei kleine Stücke (Tre piccoli pezzi) · opera
- `audit:fl17:webern:op12` — Vier Lieder (Quattro lieder) · opera
- `audit:fl17:webern:op1a` — Webern op. 1a — riduzione per due pianoforti a sei mani · versione-opera · stato: `perduta`
- `audit:fl17:webern:op2a` — Webern op. 2a — versione per coro e cinque strumenti · versione-opera · stato: `conservata`
- `audit:fl17:webern:op5a` — Webern op. 5a — versione per orchestra d'archi · versione-opera · stato: `conservata`
- `audit:fl17:webern:op6a` — Webern op. 6a — versione ridotta per ensemble · versione-opera · stato: `conservata`
- `audit:fl17:webern:op6b` — Webern op. 6b — seconda versione per orchestra · versione-opera · stato: `conservata`
- `audit:fl17:webern:op8a` — Webern op. 8a — versione per soprano e pianoforte · versione-opera · stato: `inedita`
- `audit:fl17:webern:op10a` — Webern op. 10a — seconda versione per cinque strumenti · versione-opera · stato: `inedita`

### STAGING_BACH_BRANDEBURGHESI_CHECKPOINT27_2026-11-10.json — 6 record elencati

- `audit:flaminio:bach:bwv1046` — Concerto brandeburghese n. 1 in fa maggiore · XLSX 3081 · stato: `staging_candidate_not_public`
- `audit:flaminio:bach:bwv1047` — Concerto brandeburghese n. 2 in fa maggiore · XLSX 3082 · stato: `staging_candidate_not_public`
- `audit:flaminio:bach:bwv1048` — Concerto brandeburghese n. 3 in sol maggiore · XLSX 3083 · stato: `staging_candidate_not_public`
- `audit:flaminio:bach:bwv1049` — Concerto brandeburghese n. 4 in sol maggiore · XLSX 3084 · stato: `staging_candidate_not_public`
- `audit:flaminio:bach:bwv1050` — Concerto brandeburghese n. 5 in re maggiore · XLSX 3085 · stato: `staging_candidate_not_public`
- `audit:flaminio:bach:bwv1051` — Concerto brandeburghese n. 6 in si bemolle maggiore · XLSX 3086 · stato: `staging_candidate_not_public`

### LOTTO35_OPERE_CERTIFICATE_2026-11-10.json — 10 record elencati

- `fl:cert35:mozart-k207` — Concerto per violino n. 1 in si bemolle maggiore · K 207 · **K 207** · Concerto · XLSX 34764 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:mozart-k211` — Concerto per violino n. 2 in re maggiore · K 211 · **K 211** · Concerto · XLSX 34765 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:mozart-k216` — Concerto per violino n. 3 in sol maggiore · K 216 · **K 216** · Concerto · XLSX 34766 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:mozart-k218` — Concerto per violino n. 4 in re maggiore · K 218 · **K 218** · Concerto · XLSX 34767 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:mozart-k219` — Concerto per violino n. 5 in la maggiore · K 219 · **K 219** · Concerto · XLSX 34768 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:bartok-sz36` — Concerto per violino n. 1 · Sz 36 · **Sz 36** · Concerto · XLSX 4298 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:bartok-sz112` — Concerto per violino n. 2 · Sz 112 · **Sz 112** · Concerto · XLSX 4299 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:barber-op14` — Concerto per violino · op. 14 · **op. 14** · Concerto · XLSX 4182 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:mozart-k427` — Grande Messa in do minore · K 427 (incompiuta) · **K 427** · Messa · XLSX 34912 · stato: `eligible_for_rooted_staging_integration`
- `fl:cert35:beethoven-op61` — Concerto per violino in re maggiore · op. 61 · **op. 61** · Concerto · XLSX 4853 · stato: `eligible_for_rooted_staging_integration`

### LOTTO36_MOZART_25_SINFONIE_2026-11-10.json — 25 record elencati

- `fl:mozart:sym:kv128` — Sinfonia n. 16 · K 128 · **K 128** · Sinfonia · XLSX 34610 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv129` — Sinfonia n. 17 · K 129 · **K 129** · Sinfonia · XLSX 34611 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv130` — Sinfonia n. 18 · K 130 · **K 130** · Sinfonia · XLSX 34612 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv132` — Sinfonia n. 19 · K 132 · **K 132** · Sinfonia · XLSX 34613 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv133` — Sinfonia n. 20 · K 133 · **K 133** · Sinfonia · XLSX 34615 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv134` — Sinfonia n. 21 · K 134 · **K 134** · Sinfonia · XLSX 34616 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv162` — Sinfonia n. 22 · K 162 · **K 162** · Sinfonia · XLSX 34617 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv181` — Sinfonia n. 23 · K 181 · **K 181** · Sinfonia · XLSX 34618 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv182` — Sinfonia n. 24 · K 182 · **K 182** · Sinfonia · XLSX 34619 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv183` — Sinfonia n. 25 · K 183 · **K 183** · Sinfonia · XLSX 34620 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv184` — Sinfonia n. 26 · K 184 · **K 184** · Sinfonia · XLSX 34621 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv199` — Sinfonia n. 27 · K 199 · **K 199** · Sinfonia · XLSX 34622 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv200` — Sinfonia n. 28 · K 200 · **K 200** · Sinfonia · XLSX 34623 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv201` — Sinfonia n. 29 · K 201 · **K 201** · Sinfonia · XLSX 34624 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv202` — Sinfonia n. 30 · K 202 · **K 202** · Sinfonia · XLSX 34626 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv297` — Sinfonia n. 31 · K 297 · **K 297** · Sinfonia · XLSX 34627 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv318` — Sinfonia n. 32 · K 318 · **K 318** · Sinfonia · XLSX 34628 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv319` — Sinfonia n. 33 · K 319 · **K 319** · Sinfonia · XLSX 34629 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv338` — Sinfonia n. 34 · K 338 · **K 338** · Sinfonia · XLSX 34630 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv385` — Sinfonia n. 35 · K 385 · **K 385** · Sinfonia · XLSX 34631 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv425` — Sinfonia n. 36 · K 425 · **K 425** · Sinfonia · XLSX 34632 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv504` — Sinfonia n. 38 · K 504 · **K 504** · Sinfonia · XLSX 34634 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv543` — Sinfonia n. 39 · K 543 · **K 543** · Sinfonia · XLSX 34635 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv550` — Sinfonia n. 40 · K 550 · **K 550** · Sinfonia · XLSX 34637 · stato: `NMA_work_catalogue_index_supported`
- `fl:mozart:sym:kv551` — Sinfonia n. 41 · K 551 · **K 551** · Sinfonia · XLSX 34638 · stato: `NMA_work_catalogue_index_supported`

### LOTTO37_MOZART_30_OPERE_2026-11-10.json — 30 record elencati

- `fl:mozart:sym:kv16` — Sinfonia n. 1 in mi bemolle maggiore · K 16 · **K 16** · sinfonia · XLSX 34603
- `fl:mozart:sym:kv19` — Sinfonia n. 4 in re maggiore · K 19 · **K 19** · sinfonia · XLSX 34636
- `fl:mozart:sym:kv22` — Sinfonia n. 5 in si bemolle maggiore · K 22 · **K 22** · sinfonia · XLSX 34642
- `fl:mozart:sym:kv43` — Sinfonia n. 6 in fa maggiore · K 43 · **K 43** · sinfonia · XLSX 34643
- `fl:mozart:sym:kv45` — Sinfonia n. 7 in re maggiore · K 45 · **K 45** · sinfonia · XLSX 34644
- `fl:mozart:sym:kv48` — Sinfonia n. 8 in re maggiore · K 48 · **K 48** · sinfonia · XLSX 34645
- `fl:mozart:sym:kv73` — Sinfonia n. 9 in do maggiore · K 73 · **K 73** · sinfonia · XLSX 34646
- `fl:mozart:sym:kv74` — Sinfonia n. 10 in sol maggiore · K 74 · **K 74** · sinfonia · XLSX 34604
- `fl:mozart:sym:kv110` — Sinfonia n. 12 in sol maggiore · K 110 · **K 110** · sinfonia · XLSX 34606
- `fl:mozart:sym:kv112` — Sinfonia n. 13 in fa maggiore · K 112 · **K 112** · sinfonia · XLSX 34607
- `fl:mozart:sym:kv114` — Sinfonia n. 14 in la maggiore · K 114 · **K 114** · sinfonia · XLSX 34608
- `fl:mozart:sym:kv124` — Sinfonia n. 15 in sol maggiore · K 124 · **K 124** · sinfonia · XLSX 34609
- `fl:mozart:piano:kv279` — Sonata per pianoforte n. 1 in do maggiore · K 279 · **K 279** · sonata_per_pianoforte · XLSX 35077
- `fl:mozart:piano:kv280` — Sonata per pianoforte n. 2 in fa maggiore · K 280 · **K 280** · sonata_per_pianoforte · XLSX 35087
- `fl:mozart:piano:kv281` — Sonata per pianoforte n. 3 in si bemolle maggiore · K 281 · **K 281** · sonata_per_pianoforte · XLSX 35088
- `fl:mozart:piano:kv282` — Sonata per pianoforte n. 4 in mi bemolle maggiore · K 282 · **K 282** · sonata_per_pianoforte · XLSX 35089
- `fl:mozart:piano:kv283` — Sonata per pianoforte n. 5 in sol maggiore · K 283 · **K 283** · sonata_per_pianoforte · XLSX 35090
- `fl:mozart:piano:kv284` — Sonata per pianoforte n. 6 in re maggiore · K 284 · **K 284** · sonata_per_pianoforte · XLSX 35091
- `fl:mozart:piano:kv309` — Sonata per pianoforte n. 7 in do maggiore · K 309 · **K 309** · sonata_per_pianoforte · XLSX 35092
- `fl:mozart:piano:kv310` — Sonata per pianoforte n. 8 in la minore · K 310 · **K 310** · sonata_per_pianoforte · XLSX 35093
- `fl:mozart:piano:kv311` — Sonata per pianoforte n. 9 in re maggiore · K 311 · **K 311** · sonata_per_pianoforte · XLSX 35094
- `fl:mozart:piano:kv330` — Sonata per pianoforte n. 10 in do maggiore · K 330 · **K 330** · sonata_per_pianoforte · XLSX 35078
- `fl:mozart:piano:kv331` — Sonata per pianoforte n. 11 in la maggiore · K 331 · **K 331** · sonata_per_pianoforte · XLSX 35079
- `fl:mozart:piano:kv332` — Sonata per pianoforte n. 12 in fa maggiore · K 332 · **K 332** · sonata_per_pianoforte · XLSX 35080
- `fl:mozart:piano:kv333` — Sonata per pianoforte n. 13 in si bemolle maggiore · K 333 · **K 333** · sonata_per_pianoforte · XLSX 35081
- `fl:mozart:piano:kv457` — Sonata per pianoforte n. 14 in do minore · K 457 · **K 457** · sonata_per_pianoforte · XLSX 35082
- `fl:mozart:piano:kv533` — Sonata per pianoforte n. 15 in fa maggiore · K 533/494 · **K 533/494** · sonata_per_pianoforte · XLSX 35083
- `fl:mozart:piano:kv545` — Sonata per pianoforte n. 16 in do maggiore · K 545 · **K 545** · sonata_per_pianoforte · XLSX 35084
- `fl:mozart:piano:kv570` — Sonata per pianoforte n. 17 in si bemolle maggiore · K 570 · **K 570** · sonata_per_pianoforte · XLSX 35085
- `fl:mozart:piano:kv576` — Sonata per pianoforte n. 18 in re maggiore · K 576 · **K 576** · sonata_per_pianoforte · XLSX 35086

### LOTTO38_BEETHOVEN_24_OPERE_2026-11-10.json — 24 record elencati

- `fl38:beethoven:op-12-n-1` — Sonata per violino e pianoforte n. 1 in re maggiore · **Op. 12 n. 1** · Sonata · XLSX 4771 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-12-n-2` — Sonata per violino e pianoforte n. 2 in la maggiore · **Op. 12 n. 2** · Sonata · XLSX 4772 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-12-n-3` — Sonata per violino e pianoforte n. 3 in mi bemolle maggiore · **Op. 12 n. 3** · Sonata · XLSX 4773 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-23` — Sonata per violino e pianoforte n. 4 in la minore · **Op. 23** · Sonata · XLSX 4774 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-24` — Sonata per violino e pianoforte n. 5 in fa maggiore "La Primavera" · **Op. 24** · Sonata · XLSX 4775 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-30-n-1` — Sonata per violino e pianoforte n. 6 in la maggiore · **Op. 30 n. 1** · Sonata · XLSX 4776 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-30-n-2` — Sonata per violino e pianoforte n. 7 in do minore · **Op. 30 n. 2** · Sonata · XLSX 4777 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-30-n-3` — Sonata per violino e pianoforte n. 8 in sol maggiore · **Op. 30 n. 3** · Sonata · XLSX 4778 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-47` — Sonata per violino e pianoforte n. 9 in la maggiore "Kreutzer" · **Op. 47** · Sonata · XLSX 4779 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-21` — Sinfonia n. 1 in do maggiore · **Op. 21** · Sinfonia · XLSX 4824 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-36` — Sinfonia n. 2 in re maggiore · **Op. 36** · Sinfonia · XLSX 4825 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-55` — Sinfonia n. 3 in mi bemolle maggiore "Eroica" · **Op. 55** · Sinfonia · XLSX 4826 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-60` — Sinfonia n. 4 in si bemolle maggiore · **Op. 60** · Sinfonia · XLSX 4827 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-67` — Sinfonia n. 5 in do minore · **Op. 67** · Sinfonia · XLSX 4828 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-68` — Sinfonia n. 6 in fa maggiore "Pastorale" · **Op. 68** · Sinfonia · XLSX 4829 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-92` — Sinfonia n. 7 in la maggiore · **Op. 92** · Sinfonia · XLSX 4830 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-93` — Sinfonia n. 8 in fa maggiore · **Op. 93** · Sinfonia · XLSX 4831 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-125` — Sinfonia n. 9 in re minore "Corale" · **Op. 125** · Sinfonia · XLSX 4832 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-15` — Concerto per pianoforte n. 1 in do maggiore · **Op. 15** · Concerto · XLSX 4846 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-19` — Concerto per pianoforte n. 2 in si bemolle maggiore · **Op. 19** · Concerto · XLSX 4848 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-37` — Concerto per pianoforte n. 3 in do minore · **Op. 37** · Concerto · XLSX 4849 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-58` — Concerto per pianoforte n. 4 in sol maggiore · **Op. 58** · Concerto · XLSX 4850 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-73` — Concerto per pianoforte n. 5 in mi bemolle maggiore "Imperatore" · **Op. 73** · Concerto · XLSX 4851 · stato: `source_row_and_catalogue_correlated`
- `fl38:beethoven:op-56` — Concerto per pianoforte, violino e violoncello in do maggiore "Triplo concerto" · **Op. 56** · Concerto · XLSX 4852 · stato: `source_row_and_catalogue_correlated`

