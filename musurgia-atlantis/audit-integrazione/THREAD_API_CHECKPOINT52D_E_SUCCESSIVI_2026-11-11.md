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


## C2. Catalogo Concerti, Sonata e Quartetti: Checkpoint 40 e Lotti 41–44

### CHECKPOINT40_CONCERTO_SOTTOGENERI_15_OPERE_2026-11-10.json — 44 voci in manifesto

**Rami di genere:** `atlas:gf:concerto-per-violino` (audit:gf25:concerto-solistico); `atlas:gf:concerto-per-pianoforte` (audit:gf25:concerto-solistico); `atlas:gf:concerto-per-tre-solisti` (audit:gf25:concerto-di-gruppo); `atlas:gf:concerto-brandeburghese` (legacy:gf:genere-concerto); `atlas:gf:concerto-per-piu-pianoforti` (audit:gf25:concerto-di-gruppo).

- `fl:cert35:mozart-k207` · **K 207** · atlas:gf:concerto-per-violino · XLSX 34764
- `fl:cert35:mozart-k211` · **K 211** · atlas:gf:concerto-per-violino · XLSX 34765
- `fl:cert35:mozart-k216` · **K 216** · atlas:gf:concerto-per-violino · XLSX 34766
- `fl:cert35:mozart-k218` · **K 218** · atlas:gf:concerto-per-violino · XLSX 34767
- `fl:cert35:mozart-k219` · **K 219** · atlas:gf:concerto-per-violino · XLSX 34768
- `fl:cert35:bartok-sz36` · **Sz 36** · atlas:gf:concerto-per-violino · XLSX 4298
- `fl:cert35:bartok-sz112` · **Sz 112** · atlas:gf:concerto-per-violino · XLSX 4299
- `fl:cert35:barber-op14` · **op. 14** · atlas:gf:concerto-per-violino · XLSX 4182
- `fl:cert35:beethoven-op61` · **op. 61** · atlas:gf:concerto-per-violino · XLSX 4853
- `fl38:beethoven:op-15` · **Op. 15** · atlas:gf:concerto-per-pianoforte · XLSX 4846
- `fl38:beethoven:op-19` · **Op. 19** · atlas:gf:concerto-per-pianoforte · XLSX 4848
- `fl38:beethoven:op-37` · **Op. 37** · atlas:gf:concerto-per-pianoforte · XLSX 4849
- `fl38:beethoven:op-58` · **Op. 58** · atlas:gf:concerto-per-pianoforte · XLSX 4850
- `fl38:beethoven:op-73` · **Op. 73** · atlas:gf:concerto-per-pianoforte · XLSX 4851
- `fl38:beethoven:op-56` · **Op. 56** · atlas:gf:concerto-per-tre-solisti · XLSX 4852
- `audit:flaminio:bach:bwv1046` · **BWV 1046** · atlas:gf:concerto-brandeburghese · XLSX 3081
- `audit:flaminio:bach:bwv1047` · **BWV 1047** · atlas:gf:concerto-brandeburghese · XLSX 3082
- `audit:flaminio:bach:bwv1048` · **BWV 1048** · atlas:gf:concerto-brandeburghese · XLSX 3083
- `audit:flaminio:bach:bwv1049` · **BWV 1049** · atlas:gf:concerto-brandeburghese · XLSX 3084
- `audit:flaminio:bach:bwv1050` · **BWV 1050** · atlas:gf:concerto-brandeburghese · XLSX 3085
- `audit:flaminio:bach:bwv1051` · **BWV 1051** · atlas:gf:concerto-brandeburghese · XLSX 3086
- `fl41:mozart:piano-concerto-5` · **K 175** · atlas:gf:concerto-per-pianoforte · XLSX 34810
- `fl41:mozart:piano-concerto-6` · **K 238** · atlas:gf:concerto-per-pianoforte · XLSX 34811
- `fl41:mozart:piano-concerto-7` · **K 242** · atlas:gf:concerto-per-piu-pianoforti · XLSX 34814
- `fl41:mozart:piano-concerto-8` · **K 246** · atlas:gf:concerto-per-pianoforte · XLSX 34812
- `fl41:mozart:piano-concerto-9` · **K 271** · atlas:gf:concerto-per-pianoforte · XLSX 34813
- `fl41:mozart:piano-concerto-10` · **K 365** · atlas:gf:concerto-per-piu-pianoforti · XLSX 34788
- `fl41:mozart:piano-concerto-11` · **K 413** · atlas:gf:concerto-per-pianoforte · XLSX 34790
- `fl41:mozart:piano-concerto-12` · **K 414** · atlas:gf:concerto-per-pianoforte · XLSX 34791
- `fl41:mozart:piano-concerto-13` · **K 415** · atlas:gf:concerto-per-pianoforte · XLSX 34792
- `fl41:mozart:piano-concerto-14` · **K 449** · atlas:gf:concerto-per-pianoforte · XLSX 34793
- `fl41:mozart:piano-concerto-15` · **K 450** · atlas:gf:concerto-per-pianoforte · XLSX 34794
- `fl41:mozart:piano-concerto-16` · **K 451** · atlas:gf:concerto-per-pianoforte · XLSX 34795
- `fl41:mozart:piano-concerto-17` · **K 453** · atlas:gf:concerto-per-pianoforte · XLSX 34796
- `fl41:mozart:piano-concerto-18` · **K 456** · atlas:gf:concerto-per-pianoforte · XLSX 34797
- `fl41:mozart:piano-concerto-19` · **K 459** · atlas:gf:concerto-per-pianoforte · XLSX 34798
- `fl41:mozart:piano-concerto-20` · **K 466** · atlas:gf:concerto-per-pianoforte · XLSX 34800
- `fl41:mozart:piano-concerto-21` · **K 467** · atlas:gf:concerto-per-pianoforte · XLSX 34801
- `fl41:mozart:piano-concerto-22` · **K 482** · atlas:gf:concerto-per-pianoforte · XLSX 34802
- `fl41:mozart:piano-concerto-23` · **K 488** · atlas:gf:concerto-per-pianoforte · XLSX 34803
- `fl41:mozart:piano-concerto-24` · **K 491** · atlas:gf:concerto-per-pianoforte · XLSX 34804
- `fl41:mozart:piano-concerto-25` · **K 503** · atlas:gf:concerto-per-pianoforte · XLSX 34805
- `fl41:mozart:piano-concerto-26` · **K 537** · atlas:gf:concerto-per-pianoforte · XLSX 34806
- `fl41:mozart:piano-concerto-27` · **K 595** · atlas:gf:concerto-per-pianoforte · XLSX 34807

### LOTTO41_55_OPERE_TASTIERA_CONCORDANZA_2026-11-10.json — 55 voci in manifesto

- `fl41:beethoven:piano-sonata-1` — Sonata per pianoforte n. 1 in fa minore · **Op. 2 n. 1** · sonata_per_pianoforte · XLSX 4958 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-2` — Sonata per pianoforte n. 2 in la maggiore · **Op. 2 n. 2** · sonata_per_pianoforte · XLSX 4969 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-3` — Sonata per pianoforte n. 3 in do maggiore · **Op. 2 n. 3** · sonata_per_pianoforte · XLSX 4980 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-4` — Sonata per pianoforte n. 4 in mi bemolle maggiore · **Op. 7** · sonata_per_pianoforte · XLSX 4984 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-5` — Sonata per pianoforte n. 5 in do minore · **Op. 10 n. 1** · sonata_per_pianoforte · XLSX 4985 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-6` — Sonata per pianoforte n. 6 in fa maggiore · **Op. 10 n. 2** · sonata_per_pianoforte · XLSX 4986 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-7` — Sonata per pianoforte n. 7 in re maggiore · **Op. 10 n. 3** · sonata_per_pianoforte · XLSX 4987 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-8` — Sonata per pianoforte n. 8 in do minore («Patetica») · **Op. 13** · sonata_per_pianoforte · XLSX 4954 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-9` — Sonata per pianoforte n. 9 in mi maggiore · **Op. 14 n. 1** · sonata_per_pianoforte · XLSX 4988 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-10` — Sonata per pianoforte n. 10 in sol maggiore · **Op. 14 n. 2** · sonata_per_pianoforte · XLSX 4959 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-11` — Sonata per pianoforte n. 11 in si bemolle maggiore · **Op. 22** · sonata_per_pianoforte · XLSX 4960 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-12` — Sonata per pianoforte n. 12 in la bemolle maggiore («Marcia funebre») · **Op. 26** · sonata_per_pianoforte · XLSX 4961 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-13` — Sonata per pianoforte n. 13 in mi bemolle maggiore («Sonata quasi una fantasia») · **Op. 27 n. 1** · sonata_per_pianoforte · XLSX 4962 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-14` — Sonata per pianoforte n. 14 in do diesis minore («Al chiaro di luna») · **Op. 27 n. 2** · sonata_per_pianoforte · XLSX 4963 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-15` — Sonata per pianoforte n. 15 in re maggiore («Pastorale») · **Op. 28** · sonata_per_pianoforte · XLSX 4964 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-16` — Sonata per pianoforte n. 16 in sol maggiore · **Op. 31 n. 1** · sonata_per_pianoforte · XLSX 4965 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-17` — Sonata per pianoforte n. 17 in re minore («La tempesta») · **Op. 31 n. 2** · sonata_per_pianoforte · XLSX 4966 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-18` — Sonata per pianoforte n. 18 in mi bemolle maggiore («La caccia») · **Op. 31 n. 3** · sonata_per_pianoforte · XLSX 4967 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-19` — Sonata per pianoforte n. 19 in sol minore · **Op. 49 n. 1** · sonata_per_pianoforte · XLSX 4968 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-20` — Sonata per pianoforte n. 20 in sol maggiore · **Op. 49 n. 2** · sonata_per_pianoforte · XLSX 4970 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-21` — Sonata per pianoforte n. 21 in do maggiore («Waldstein») · **Op. 53** · sonata_per_pianoforte · XLSX 4971 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-22` — Sonata per pianoforte n. 22 in fa maggiore · **Op. 54** · sonata_per_pianoforte · XLSX 4972 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-23` — Sonata per pianoforte n. 23 in fa minore («Appassionata») · **Op. 57** · sonata_per_pianoforte · XLSX 4973 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-24` — Sonata per pianoforte n. 24 in fa diesis maggiore («À Thérèse») · **Op. 78** · sonata_per_pianoforte · XLSX 4974 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-25` — Sonata per pianoforte n. 25 in sol maggiore · **Op. 79** · sonata_per_pianoforte · XLSX 4975 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-26` — Sonata per pianoforte n. 26 in mi bemolle maggiore («Gli addii») · **Op. 81a** · sonata_per_pianoforte · XLSX 4976 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-27` — Sonata per pianoforte n. 27 in mi minore · **Op. 90** · sonata_per_pianoforte · XLSX 4977 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-28` — Sonata per pianoforte n. 28 in la maggiore · **Op. 101** · sonata_per_pianoforte · XLSX 4978 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-29` — Sonata per pianoforte n. 29 in si bemolle maggiore («Hammerklavier») · **Op. 106** · sonata_per_pianoforte · XLSX 4979 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-30` — Sonata per pianoforte n. 30 in mi maggiore · **Op. 109** · sonata_per_pianoforte · XLSX 4981 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-31` — Sonata per pianoforte n. 31 in la bemolle maggiore · **Op. 110** · sonata_per_pianoforte · XLSX 4982 · stato: `catalogue_concordance_work_specific`
- `fl41:beethoven:piano-sonata-32` — Sonata per pianoforte n. 32 in do minore · **Op. 111** · sonata_per_pianoforte · XLSX 4983 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-5` — Concerto per pianoforte n. 5 in re maggiore · **K 175** · concerto_per_pianoforte · XLSX 34810 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-6` — Concerto per pianoforte n. 6 in si bemolle maggiore · **K 238** · concerto_per_pianoforte · XLSX 34811 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-7` — Concerto per tre pianoforti n. 7 in fa maggiore · **K 242** · concerto_per_piu_pianoforti · XLSX 34814 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-8` — Concerto per pianoforte n. 8 in do maggiore («Lützow») · **K 246** · concerto_per_pianoforte · XLSX 34812 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-9` — Concerto per pianoforte n. 9 in mi bemolle maggiore («Jeunehomme») · **K 271** · concerto_per_pianoforte · XLSX 34813 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-10` — Concerto per due pianoforti n. 10 in mi bemolle maggiore · **K 365** · concerto_per_piu_pianoforti · XLSX 34788 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-11` — Concerto per pianoforte n. 11 in fa maggiore · **K 413** · concerto_per_pianoforte · XLSX 34790 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-12` — Concerto per pianoforte n. 12 in la maggiore · **K 414** · concerto_per_pianoforte · XLSX 34791 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-13` — Concerto per pianoforte n. 13 in do maggiore · **K 415** · concerto_per_pianoforte · XLSX 34792 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-14` — Concerto per pianoforte n. 14 in mi bemolle maggiore · **K 449** · concerto_per_pianoforte · XLSX 34793 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-15` — Concerto per pianoforte n. 15 in si bemolle maggiore · **K 450** · concerto_per_pianoforte · XLSX 34794 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-16` — Concerto per pianoforte n. 16 in re maggiore · **K 451** · concerto_per_pianoforte · XLSX 34795 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-17` — Concerto per pianoforte n. 17 in sol maggiore · **K 453** · concerto_per_pianoforte · XLSX 34796 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-18` — Concerto per pianoforte n. 18 in si bemolle maggiore · **K 456** · concerto_per_pianoforte · XLSX 34797 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-19` — Concerto per pianoforte n. 19 in fa maggiore («Kronungs-Konzert n. 2 (denominazione Flaminio)») · **K 459** · concerto_per_pianoforte · XLSX 34798 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-20` — Concerto per pianoforte n. 20 in re minore · **K 466** · concerto_per_pianoforte · XLSX 34800 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-21` — Concerto per pianoforte n. 21 in do maggiore · **K 467** · concerto_per_pianoforte · XLSX 34801 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-22` — Concerto per pianoforte n. 22 in mi bemolle maggiore · **K 482** · concerto_per_pianoforte · XLSX 34802 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-23` — Concerto per pianoforte n. 23 in la maggiore · **K 488** · concerto_per_pianoforte · XLSX 34803 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-24` — Concerto per pianoforte n. 24 in do minore · **K 491** · concerto_per_pianoforte · XLSX 34804 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-25` — Concerto per pianoforte n. 25 in do maggiore · **K 503** · concerto_per_pianoforte · XLSX 34805 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-26` — Concerto per pianoforte n. 26 in re maggiore («Krönungs-Konzert») · **K 537** · concerto_per_pianoforte · XLSX 34806 · stato: `catalogue_concordance_work_specific`
- `fl41:mozart:piano-concerto-27` — Concerto per pianoforte n. 27 in si bemolle maggiore · **K 595** · concerto_per_pianoforte · XLSX 34807 · stato: `catalogue_concordance_work_specific`

**Review queue:** 4 posizioni nel JSON originale, non promosse automaticamente.

### LOTTO42_39_QUARTETTI_BEETHOVEN_MOZART_2026-11-10.json — 39 voci in manifesto

- `fl42:beethoven:quartetto-1` — Quartetto per archi n. 1 in fa maggiore · Op. 18 n. 1 · XLSX 4876
- `fl42:beethoven:quartetto-2` — Quartetto per archi n. 2 in sol maggiore · Op. 18 n. 2 · XLSX 4885
- `fl42:beethoven:quartetto-3` — Quartetto per archi n. 3 in re maggiore · Op. 18 n. 3 · XLSX 4886
- `fl42:beethoven:quartetto-4` — Quartetto per archi n. 4 in do minore · Op. 18 n. 4 · XLSX 4887
- `fl42:beethoven:quartetto-5` — Quartetto per archi n. 5 in la maggiore · Op. 18 n. 5 · XLSX 4888
- `fl42:beethoven:quartetto-6` — Quartetto per archi n. 6 in si bemolle maggiore · Op. 18 n. 6 · XLSX 4889
- `fl42:beethoven:quartetto-7` — Quartetto per archi n. 7 in fa maggiore "Razumowsky" · Op. 59 n. 1 · XLSX 4890
- `fl42:beethoven:quartetto-8` — Quartetto per archi n. 8 in mi minore "Razumowsky" · Op. 59 n. 2 · XLSX 4891
- `fl42:beethoven:quartetto-9` — Quartetto per archi n. 9 in do maggiore "Razumowsky" · Op. 59 n. 3 · XLSX 4892
- `fl42:beethoven:quartetto-10` — Quartetto per archi n. 10 in mi bemolle maggiore "Delle arpe" · Op. 74 · XLSX 4878
- `fl42:beethoven:quartetto-11` — Quartetto per archi n. 11 in fa minore "Serioso" · Op. 95 · XLSX 4879
- `fl42:beethoven:quartetto-12` — Quartetto per archi n. 12 in mi bemolle maggiore · Op. 127 · XLSX 4880
- `opera:quartetto-op130` — Quartetto per archi n. 13 in si bemolle maggiore · Op. 130 · XLSX 4881
- `fl42:beethoven:quartetto-14` — Quartetto per archi n. 14 in do diesis minore · Op. 131 · XLSX 4882
- `fl42:beethoven:quartetto-15` — Quartetto per archi n. 15 in la minore · Op. 132 · XLSX 4883
- `fl42:beethoven:quartetto-16` — Quartetto per archi n. 16 in fa maggiore · Op. 135 · XLSX 4884
- `fl42:mozart:quartetto-k80` — Quartetto per archi n. 1 in sol maggiore · K 80 · XLSX 34928
- `fl42:mozart:quartetto-k155` — Quartetto per archi n. 2 in re maggiore · K 155 · XLSX 34939
- `fl42:mozart:quartetto-k156` — Quartetto per archi n. 3 in sol maggiore · K 156 · XLSX 34944
- `fl42:mozart:quartetto-k157` — Quartetto per archi n. 4 in do maggiore · K 157 · XLSX 34945
- `fl42:mozart:quartetto-k158` — Quartetto per archi n. 5 in fa maggiore · K 158 · XLSX 34946
- `fl42:mozart:quartetto-k159` — Quartetto per archi n. 6 in si bemolle maggiore · K 159 · XLSX 34947
- `fl42:mozart:quartetto-k160` — Quartetto per archi n. 7 in mi bemolle maggiore · K 160 · XLSX 34948
- `fl42:mozart:quartetto-k168` — Quartetto per archi n. 8 in fa maggiore · K 168 · XLSX 34949
- `fl42:mozart:quartetto-k169` — Quartetto per archi n. 9 in la maggiore · K 169 · XLSX 34950
- `fl42:mozart:quartetto-k170` — Quartetto per archi n. 10 in do maggiore · K 170 · XLSX 34929
- `fl42:mozart:quartetto-k171` — Quartetto per archi n. 11 in mi bemolle maggiore · K 171 · XLSX 34930
- `fl42:mozart:quartetto-k172` — Quartetto per archi n. 12 in si bemolle maggiore · K 172 · XLSX 34931
- `fl42:mozart:quartetto-k173` — Quartetto per archi n. 13 in re minore · K 173 · XLSX 34932
- `fl42:mozart:quartetto-k387` — Quartetto per archi n. 14 in sol maggiore "Frühlings-Quartett" · K 387 · XLSX 34933
- `fl42:mozart:quartetto-k421` — Quartetto per archi n. 15 in re minore · K 421 · XLSX 34934
- `fl42:mozart:quartetto-k428` — Quartetto per archi n. 16 in mi bemolle maggiore · K 428 · XLSX 34935
- `fl42:mozart:quartetto-k458` — Quartetto per archi n. 17 in si bemolle maggiore "Jagd" (Della caccia) · K 458 · XLSX 34936
- `fl42:mozart:quartetto-k464` — Quartetto per archi n. 18 in la maggiore · K 464 · XLSX 34937
- `fl42:mozart:quartetto-k465` — Quartetto per archi n. 19 in do maggiore "Delle Dissonanze" · K 465 · XLSX 34938
- `fl42:mozart:quartetto-k499` — Quartetto per archi n. 20 in re maggiore "Hoffmeister" · K 499 · XLSX 34940
- `fl42:mozart:quartetto-k575` — Quartetto per archi n. 21 in re maggiore "Prussiano 1" · K 575 · XLSX 34941
- `fl42:mozart:quartetto-k589` — Quartetto per archi n. 22 in si bemolle maggiore "Prussiano n. 2" · K 589 · XLSX 34942
- `fl42:mozart:quartetto-k590` — Quartetto per archi n. 23 in fa maggiore "Prussiano n. 3" · K 590 · XLSX 34943

### LOTTO43_25_QUARTETTI_ORGANICI_VARI_2026-11-11.json — 25 voci in manifesto

**Rami di genere:** `atlas:gf:quartetto-con-pianoforte` (atlas:gf:quartetto); `atlas:gf:quartetto-per-flauto-e-archi` (atlas:gf:quartetto); `atlas:gf:quartetto-per-oboe-e-archi` (atlas:gf:quartetto).

- `fl43:mozart:quartetto-k-285` — Quartetto per flauto ed archi n. 1 in re maggiore · K 285 · **K 285** · XLSX 34875
- `fl43:mozart:quartetto-k-285a` — Quartetto per flauto ed archi n. 2 in sol maggiore · K 285a · **K 285a** · XLSX 34876
- `fl43:mozart:quartetto-k-298` — Quartetto per flauto n. 4 in la maggiore · K 298 · **K 298** · XLSX 34878
- `fl43:mozart:quartetto-k-370` — Quartetto per oboe in fa maggiore · K 370 · **K 370** · XLSX 34879
- `fl43:mozart:quartetto-k-478` — Quartetto per pianoforte n. 1 in sol minore · K 478 · **K 478** · XLSX 34982
- `fl43:mozart:quartetto-k-493` — Quartetto per pianoforte n. 2 in mi bemolle maggiore · K 493 · **K 493** · XLSX 34983
- `fl43:beethoven:quartetto-woo-36-n-1` — Quartetto per pianoforte n. 1 in mi bemolle maggiore · WoO 36 n. 1 · **WoO 36 n. 1** · XLSX 4763
- `fl43:beethoven:quartetto-woo-36-n-2` — Quartetto per pianoforte n. 2 in re maggiore · WoO 36 n. 2 · **WoO 36 n. 2** · XLSX 4764
- `fl43:beethoven:quartetto-woo-36-n-3` — Quartetto per pianoforte n. 3 in do maggiore · WoO 36 n. 3 · **WoO 36 n. 3** · XLSX 4765
- `fl43:brahms:quartetto-op-60` — Quartetto n. 3 in do minore per pianoforte e archi · Op. 60 · **Op. 60** · XLSX 7872
- `fl43:brahms:quartetto-op-25` — Quartetto per pianoforte n. 1 in sol minore · Op. 25 · **Op. 25** · XLSX 7877
- `fl43:brahms:quartetto-op-26` — Quartetto per pianoforte n. 2 in la maggiore · Op. 26 · **Op. 26** · XLSX 7878
- `fl43:dvorak:quartetto-op-23-b-53` — Klavírní kvartet č.1 D dur (Quartetto per pianoforte n. 1 in re maggiore) · Op. 23 · B. 53 · **Op. 23 · B. 53** · XLSX 15099
- `fl43:dvorak:quartetto-op-87-b-162` — Klavírní kvartet č.2 Es dur (Quartetto per pianoforte n. 2 in mi bemolle maggiore) · Op. 87 · B. 162 · **Op. 87 · B. 162** · XLSX 15100
- `fl43:faure:quartetto-op-15` — Quartetto per pianoforte n. 1 in do minore · Op. 15 · **Op. 15** · XLSX 15661
- `fl43:faure:quartetto-op-45` — Quartetto per pianoforte n. 2 in sol minore · Op. 45 · **Op. 45** · XLSX 15662
- `fl43:mendelssohn:quartetto-op-1-mwv-q-11` — Quartetto per pianoforte n. 1 in do minore · Op. 1 · MWV Q 11 · **Op. 1 · MWV Q 11** · XLSX 31747
- `fl43:mendelssohn:quartetto-op-2-mwv-q-13` — Quartetto per pianoforte n. 2 in fa minore · Op. 2 · MWV Q 13 · **Op. 2 · MWV Q 13** · XLSX 31748
- `fl43:mendelssohn:quartetto-op-3-mwv-q-17` — Quartetto per pianoforte n. 3 in si minore · Op. 3 · MWV Q 17 · **Op. 3 · MWV Q 17** · XLSX 31749
- `fl43:schumann:quartetto-op-47` — Quartetto per pianoforte in mi bemolle maggiore · Op. 47 · **Op. 47** · XLSX 45801
- `fl43:strauss:quartetto-op-13-trv-137` — Quartetto per pianoforte in do minore · Op. 13 · TrV 137 · **Op. 13 · TrV 137** · XLSX 47721
- `fl43:martinu:quartetto-h-287` — Quartetto con pianoforte n. 1 · H. 287 · **H. 287** · XLSX 28641
- `fl43:enescu:quartetto-op-16` — Quartetto con pianoforte n. 1 in re maggiore · Op. 16 · **Op. 16** · XLSX 15492
- `fl43:enescu:quartetto-op-30` — Quartetto con pianoforte n. 2 in re minore · Op. 30 · **Op. 30** · XLSX 15493
- `fl43:chausson:quartetto-op-30` — Quartetto in la maggiore con pianoforte · Op. 30 · **Op. 30** · XLSX 12343

**Review queue:** 4 posizioni nel JSON originale, non promosse automaticamente.

### LOTTO44_12_QUARTETTI_JCF_BACH_2026-11-11.json — 12 voci in manifesto

- `fl44:jcf-bach:quartetto-b37` — Quartetto n. 1 in re maggiore · BR-JCFB B 37 · **BR-JCFB B 37** · XLSX 2292
- `fl44:jcf-bach:quartetto-b38` — Quartetto n. 2 in sol maggiore · BR-JCFB B 38 · **BR-JCFB B 38** · XLSX 2302
- `fl44:jcf-bach:quartetto-b39` — Quartetto n. 3 in do maggiore · BR-JCFB B 39 · **BR-JCFB B 39** · XLSX 2294
- `fl44:jcf-bach:quartetto-b40` — Quartetto n. 4 in la maggiore · BR-JCFB B 40 · **BR-JCFB B 40** · XLSX 2296
- `fl44:jcf-bach:quartetto-b41` — Quartetto n. 5 in fa maggiore · BR-JCFB B 41 · **BR-JCFB B 41** · XLSX 2298
- `fl44:jcf-bach:quartetto-b42` — Quartetto n. 6 in si bemolle maggiore · BR-JCFB B 42 · **BR-JCFB B 42** · XLSX 2301
- `fl44:jcf-bach:quartetto-b43` — Quartetto n. 1 in mi bemolle maggiore · BR-JCFB B 43 · **BR-JCFB B 43** · XLSX 2291
- `fl44:jcf-bach:quartetto-b44` — Quartetto n. 2 in si bemolle maggiore · BR-JCFB B 44 · **BR-JCFB B 44** · XLSX 2293
- `fl44:jcf-bach:quartetto-b45` — Quartetto n. 3 in la maggiore · BR-JCFB B 45 · **BR-JCFB B 45** · XLSX 2295
- `fl44:jcf-bach:quartetto-b46` — Quartetto n. 4 in re maggiore · BR-JCFB B 46 · **BR-JCFB B 46** · XLSX 2297
- `fl44:jcf-bach:quartetto-b47` — Quartetto n. 5 in sol maggiore · BR-JCFB B 47 · **BR-JCFB B 47** · XLSX 2299
- `fl44:jcf-bach:quartetto-b48` — Quartetto n. 6 in fa maggiore · BR-JCFB B 48 · **BR-JCFB B 48** · XLSX 2300

**Review queue:** 1 posizioni nel JSON originale, non promosse automaticamente.


## C3. Bach, repertorio vocale: Lotti 45–48 (schede individuali e versioni)

### LOTTO45_25_SCHEDE_CANTATE_BACH_2026-11-11.json — 25 schede primarie

- `fl45:jsbach:bwv1` · BWV 1 — Wie schön leuchtet der Morgenstern · BWV 1 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata1.html
- `fl45:jsbach:bwv2` · BWV 2 — Ach Gott, von Himmel sieh darein · BWV 2 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata2.html
- `fl45:jsbach:bwv3` · BWV 3 — Ach Gott, wie manches Herzeleid · BWV 3 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata3.html
- `fl45:jsbach:bwv4` · BWV 4 — Christ lag in Todesbanden · BWV 4 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata4.html
- `fl45:jsbach:bwv5` · BWV 5 — Wo soll ich fliehen hin · BWV 5 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata5.html
- `fl45:jsbach:bwv6` · BWV 6 — Bleib bei uns, denn es will Abend werden · BWV 6 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata6.html
- `fl45:jsbach:bwv7` · BWV 7 — Christ unser Herr zum Jordan kam · BWV 7 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata7.html
- `fl45:jsbach:bwv8` · BWV 8 — Liebster Gott, wenn werd ich sterben? · BWV 8 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata8.html
- `fl45:jsbach:bwv9` · BWV 9 — Es ist das Heil uns kommen her · BWV 9 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata9.html
- `fl45:jsbach:bwv10` · BWV 10 — Meine Seel erhebt den Herren · BWV 10 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata10.html
- `fl45:jsbach:bwv11` · BWV 11 — Lobet Gott in seinen Reichen (Oratorio dell’Ascensione) · BWV 11 · oratorio · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata11.html
- `fl45:jsbach:bwv12` · BWV 12 — Weinen, Klagen, Sorgen, Zagen · BWV 12 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata12.html
- `fl45:jsbach:bwv13` · BWV 13 — Meine Seufzer, meine Tränen · BWV 13 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata13.html
- `fl45:jsbach:bwv14` · BWV 14 — Wär Gott nicht mit uns diese Zeit · BWV 14 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata14.html
- `fl45:jsbach:bwv15` · BWV 15 — Denn du wirst meine Seele nicht in der Hölle lassen · BWV 15 · hold_wrong_author · stato: `hold_do_not_publish`
- `fl45:jsbach:bwv16` · BWV 16 — Herr Gott, dich loben wir · BWV 16 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata16.html
- `fl45:jsbach:bwv17` · BWV 17 — Wer Dank opfert, der preiset mich · BWV 17 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata17.html
- `fl45:jsbach:bwv18` · BWV 18 — Gleichwie der Regen und Schnee vom Himmel fällt · BWV 18 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata18.html
- `fl45:jsbach:bwv19` · BWV 19 — Es erhub sich ein Streit · BWV 19 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata19.html
- `fl45:jsbach:bwv20` · BWV 20 — O Ewigkeit, du Donnerwort · BWV 20 · sacra · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata20.html
- `fl45:jsbach:bwv201` · BWV 201 — Geschwinde, ihr wirbelnden Winde (Der Streit zwischen Phoebus und Pan) · BWV 201 · profana · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata201.html
- `fl45:jsbach:bwv202` · BWV 202 — Weichet nur, betrübte Schatten · BWV 202 · profana · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata202.html
- `fl45:jsbach:bwv203` · BWV 203 — Amore traditore · BWV 203 · hold_uncertain · stato: `hold_do_not_publish`
- `fl45:jsbach:bwv204` · BWV 204 — Ich bin in mir vergnügt · BWV 204 · profana · stato: `catalogue_supported_staging_only`
- `fl45:jsbach:bwv205` · BWV 205 — Zerreißet, zersprenget, zertrümmert die Gruft (Der zufriedengestellte Äolus) · BWV 205 · profana · stato: `catalogue_supported_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata205.html

**holds (non da promuovere senza riscontro):**
- `fl45:jsbach:bwv15`
- `fl45:jsbach:bwv203`

### LOTTO46_35_SCHEDE_BACH_BWV21_50_2026-11-11.json — 35 schede primarie

- `fl46:jsbach:bwv21` · BWV 21 — Ich hatte viel Bekümmernis · BWV 21 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata21.html
- `fl46:jsbach:bwv22` · BWV 22 — Jesus nahm zu sich die Zwölfe · BWV 22 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata22.html
- `fl46:jsbach:bwv23` · BWV 23 — Du wahrer Gott und Davids Sohn · BWV 23 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata23.html
- `fl46:jsbach:bwv24` · BWV 24 — Ein ungefärbt Gemüte · BWV 24 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata24.html
- `fl46:jsbach:bwv25` · BWV 25 — Es ist nichts Gesundes an meinem Leibe · BWV 25 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv26` · BWV 26 — Ach wie flüchtig, ach wie nichtig · BWV 26 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv27` · BWV 27 — Wer weiß, wie nahe mir mein Ende · BWV 27 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv28` · BWV 28 — Gottlob! Nun geht das Jahr zu Ende · BWV 28 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv29` · BWV 29 — Wir danken dir, Gott, wir danken dir · BWV 29 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv30` · BWV 30 — Freue dich, erlöste Schar · BWV 30 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv31` · BWV 31 — Der Himmel lacht! Die Erde jubilieret · BWV 31 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv32` · BWV 32 — Liebster Jesu, mein Verlangen · BWV 32 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv33` · BWV 33 — Allein zu dir, Herr Jesu Christ · BWV 33 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata33.html
- `fl46:jsbach:bwv34` · BWV 34 — O ewiges Feuer, o Ursprung der Liebe · BWV 34 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv35` · BWV 35 — Geist und Seele wird verwirret · BWV 35 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv36` · BWV 36 — Schwingt freudig euch empor · BWV 36 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata36.html
- `fl46:jsbach:bwv37` · BWV 37 — Wer da gläubet und getauft wird · BWV 37 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv38` · BWV 38 — Aus tiefer Not schrei ich zu dir · BWV 38 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv39` · BWV 39 — Brich dem Hungrigen dein Brot · BWV 39 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv40` · BWV 40 — Dazu ist erschienen der Sohn Gottes · BWV 40 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata40.html
- `fl46:jsbach:bwv41` · BWV 41 — Jesu, nun sei gepreiset · BWV 41 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv42` · BWV 42 — Am Abend aber desselbigen Sabbats · BWV 42 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv43` · BWV 43 — Gott fähret auf mit Jauchzen · BWV 43 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv44` · BWV 44 — Sie werden euch in den Bann tun · BWV 44 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata44.html
- `fl46:jsbach:bwv45` · BWV 45 — Es ist dir gesagt, Mensch, was gut ist · BWV 45 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv46` · BWV 46 — Schauet doch und sehet, ob irgend ein Schmerz sei · BWV 46 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv47` · BWV 47 — Wer sich selbst erhöhet, der soll erniedriget werden · BWV 47 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv48` · BWV 48 — Ich elender Mensch, wer wird mich erlösen · BWV 48 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue`
- `fl46:jsbach:bwv49` · BWV 49 — Ich geh und suche mit Verlangen · BWV 49 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata49.html
- `fl46:jsbach:bwv50` · BWV 50 — Nun ist das Heil und die Kraft · BWV 50 · fragment · generi: `atlas:gf:cantata-sacra` · stato: `fragment_separate_not_full_cantata` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata50.html
- `fl46:jsbach:bwv30a` · BWV 30a — Angenehmes Wiederau · BWV 30a · profana · generi: `atlas:gf:cantata-profana` · stato: `work_level_crosschecked_catalogue_with_survival_caution`
- `fl46:jsbach:bwv34a` · BWV 34a — O ewiges Feuer, o Ursprung der Liebe · BWV 34a · sacra · generi: `atlas:gf:cantata-sacra` · stato: `work_level_crosschecked_catalogue_with_survival_caution`
- `fl46:jsbach:bwv36a` · BWV 36a — Steigt freudig in die Luft · BWV 36a · profana · generi: `atlas:gf:cantata-profana` · stato: `work_level_crosschecked_catalogue_with_survival_caution`
- `fl46:jsbach:bwv36b` · BWV 36b — Die Freude reget sich · BWV 36b · profana · generi: `atlas:gf:cantata-profana` · stato: `work_level_crosschecked_catalogue_with_survival_caution`
- `fl46:jsbach:bwv36c` · BWV 36c — Schwingt freudig euch empor · BWV 36c · profana · generi: `atlas:gf:cantata-profana` · stato: `work_level_crosschecked_catalogue_with_survival_caution` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata36c.html

**suspensions (non da promuovere senza riscontro):**
- `BWV 36d` · BWV 36d · stato: `hold_no_flaminio_catalogue_entry_in_checked_page`

### LOTTO47_35_SCHEDE_BACH_BWV51_80_2026-11-11.json — 35 schede primarie

- `fl47:jsbach:bwv51` · BWV 51 — Jauchzet Gott in allen Landen · BWV 51 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata51.html
- `fl47:jsbach:bwv52` · BWV 52 — Falsche Welt, dir trau' ich nicht · BWV 52 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata52.html
- `fl47:jsbach:bwv53` · BWV 53 — Schlage doch, gewünschte Stunde · BWV 53 · hold_wrong_attribution · stato: `hold_spurious_author` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata53.html
- `fl47:jsbach:bwv54` · BWV 54 — Widerstehe doch der Sünde · BWV 54 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata54.html
- `fl47:jsbach:bwv55` · BWV 55 — Ich armer Mensch, ich Sündenknecht · BWV 55 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata55.html
- `fl47:jsbach:bwv56` · BWV 56 — Ich will den Kreuzstab gerne tragen · BWV 56 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata56.html
- `fl47:jsbach:bwv57` · BWV 57 — Selig ist der Mann · BWV 57 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv58` · BWV 58 — Ach Gott, wie manches Herzeleid · BWV 58 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata58.html
- `fl47:jsbach:bwv59` · BWV 59 — Wer mich liebet, der wird mein Wort halten · BWV 59 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata59.html
- `fl47:jsbach:bwv60` · BWV 60 — O Ewigkeit, du Donnerwort · BWV 60 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata60.html
- `fl47:jsbach:bwv61` · BWV 61 — Nun komm, der Heiden Heiland · BWV 61 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata61.html
- `fl47:jsbach:bwv62` · BWV 62 — Nun komm, der Heiden Heiland · BWV 62 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata62.html
- `fl47:jsbach:bwv63` · BWV 63 — Christen, ätzet diesen Tag · BWV 63 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv64` · BWV 64 — Sehet, welch eine Liebe hat uns der Vater erzeiget · BWV 64 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv65` · BWV 65 — Sie werden aus Saba alle kommen · BWV 65 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv66` · BWV 66 — Erfreut euch, ihr Herzen · BWV 66 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv67` · BWV 67 — Halt im Gedächtnis Jesum Christ · BWV 67 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv68` · BWV 68 — Also hat Gott die Welt geliebt · BWV 68 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv69` · BWV 69 — Lobe den Herrn, meine Seele · BWV 69 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv70` · BWV 70 — Wachet! betet! betet! wachet! · BWV 70 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata70.html
- `fl47:jsbach:bwv71` · BWV 71 — Gott ist mein König · BWV 71 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv72` · BWV 72 — Alles nur nach Gottes Willen · BWV 72 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv73` · BWV 73 — Herr, wie du willt, so schicks mit mir · BWV 73 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv74` · BWV 74 — Wer mich liebet, der wird mein Wort halten · BWV 74 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv75` · BWV 75 — Die Elenden sollen essen · BWV 75 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv76` · BWV 76 — Die Himmel erzählen die Ehre Gottes · BWV 76 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv77` · BWV 77 — Du sollst Gott, deinem Herren, lieben · BWV 77 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv78` · BWV 78 — Jesu, der du meine Seele · BWV 78 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata78.html
- `fl47:jsbach:bwv79` · BWV 79 — Gott, der Herr, ist Sonn' und Schild · BWV 79 · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata79.html
- `fl47:jsbach:bwv80` · BWV 80 — Ein' feste Burg ist unser Gott · BWV 80 · sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv66a` · BWV 66a — Der Himmel dacht auf Anhalts Ruhm und Glück · BWV 66a · profana · generi: `atlas:gf:cantata-profana` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv69a` · BWV 69a — Lobe den Herrn, meine Seele · BWV 69a · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv70a` · BWV 70a — Wachet, betet, seid bereit allezeit · BWV 70a · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv80a` · BWV 80a — Alles, was von Gott geboren · BWV 80a · sacra · generi: `atlas:gf:cantata-sacra` · stato: `source_attested_staging_only`
- `fl47:jsbach:bwv80b` · BWV 80b — Ein feste Burg ist unser Gott · BWV 80b · versione_sacra · stato: `source_attested_staging_only`

### LOTTO48_30_CANTATE_BWV81_110_TRE_VERSIONI_BWV82_2026-11-11.json — 30 schede primarie

- `fl48:jsbach:bwv81` · BWV 81 — Jesus schläft, was soll ich hoffen · BWV 81 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv82` · BWV 82 — Ich habe genug · BWV 82 · cantata solistica · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata82.html
- `fl48:jsbach:bwv83` · BWV 83 — Erfreute Zeit im neuen Bunde · BWV 83 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv84` · BWV 84 — Ich bin vergnügt mit meinem Glücke · BWV 84 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv85` · BWV 85 — Ich bin ein guter Hirt · BWV 85 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv86` · BWV 86 — Wahrlich, wahrlich, ich sage euch · BWV 86 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata86.html
- `fl48:jsbach:bwv87` · BWV 87 — Bisher habt ihr nichts gebeten in meinem Namen · BWV 87 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv88` · BWV 88 — Siehe, ich will viel Fischer aussenden · BWV 88 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv89` · BWV 89 — Was soll ich aus dir machen, Ephraim · BWV 89 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv90` · BWV 90 — Es reißet euch ein schrecklich Ende · BWV 90 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata90.html
- `fl48:jsbach:bwv91` · BWV 91 — Gelobet seist du, Jesu Christ · BWV 91 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata91.html
- `fl48:jsbach:bwv92` · BWV 92 — Ich hab in Gottes Herz und Sinn · BWV 92 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv93` · BWV 93 — Wer nur den lieben Gott lässt walten · BWV 93 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata93.html
- `fl48:jsbach:bwv94` · BWV 94 — Was frag ich nach der Welt · BWV 94 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv95` · BWV 95 — Christus, der ist mein Leben · BWV 95 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv96` · BWV 96 — Herr Christ, der einge Gottessohn · BWV 96 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv97` · BWV 97 — In allen meinen Taten · BWV 97 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv98` · BWV 98 — Was Gott tut, das ist wohlgetan · BWV 98 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv99` · BWV 99 — Was Gott tut, das ist wohlgetan · BWV 99 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv100` · BWV 100 — Was Gott tut, das ist wohlgetan · BWV 100 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv101` · BWV 101 — Nimm von uns, Herr, du treuer Gott · BWV 101 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata101.html
- `fl48:jsbach:bwv102` · BWV 102 — Herr, deine Augen sehen nach dem Glauben · BWV 102 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata102.html
- `fl48:jsbach:bwv103` · BWV 103 — Ihr werdet weinen und heulen · BWV 103 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata103.html
- `fl48:jsbach:bwv104` · BWV 104 — Du Hirte Israel, höre · BWV 104 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata104.html
- `fl48:jsbach:bwv105` · BWV 105 — Herr, gehe nicht ins Gericht · BWV 105 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata105.html
- `fl48:jsbach:bwv106` · BWV 106 — Gottes Zeit ist die allerbeste Zeit · BWV 106 · cantata funebre (Actus tragicus) · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata106.html
- `fl48:jsbach:bwv107` · BWV 107 — Was willst du dich betrüben · BWV 107 · cantata sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv108` · BWV 108 — Es ist euch gut, dass ich hingehe · BWV 108 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv109` · BWV 109 — Ich glaube, lieber Herr, hilf meinem Unglauben · BWV 109 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only`
- `fl48:jsbach:bwv110` · BWV 110 — Unser Mund sei voll Lachens · BWV 110 · cantata sacra · generi: `atlas:gf:cantata-sacra` · stato: `cross_checked_flaminio_bachde_staging_only` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata110.html

**Versioni storiche distinte:**
- `fl48:jsbach:bwv82-1` · BWV 82.1 · BC A 169a — BWV 82.1 — versione per basso, 1727 · stato: `surviving_source` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata82.html · opera madre: `fl48:jsbach:bwv82`
- `fl48:jsbach:bwv82-2` · BWV 82.2 · BC A 169b — BWV 82.2 — versione per soprano, 1731 · stato: `incomplete_source` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata82.html · opera madre: `fl48:jsbach:bwv82`
- `fl48:jsbach:bwv82-3` · BWV 82.3 · BC A 169c — BWV 82.3 — redazione 1735 · stato: `voice_source_discrepancy` · guida: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata82.html · opera madre: `fl48:jsbach:bwv82`


## C4. Bach, repertorio vocale: Lotti 49–51, versioni, riusi e attribuzioni sospese

### LOTTO49_34_SCHEDE_BACH_BWV111_140_2026-11-11.json — 30 record in entries

- `fl49:jsbach:bwv111` · BWV 111 — Was mein Gott will, das g'scheh allzeit · BWV 111 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv112` · BWV 112 — Der Herr ist mein getreuer Hirt · BWV 112 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv113` · BWV 113 — Herr Jesu Christ, du höchstes Gut · BWV 113 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv114` · BWV 114 — Ach, lieben Christen, seid getrost · BWV 114 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv115` · BWV 115 — Mache dich, mein Geist, bereit · BWV 115 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv116` · BWV 116 — Du Friedefürst, Herr Jesu Christ · BWV 116 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv117` · BWV 117 — Sei Lob und Ehr dem höchsten Gut · BWV 117 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv118` · BWV 118 — O Jesu Christ, meins Lebens Licht · BWV 118 · mottetto_funebre · generi: `legacy:gf:genere-mottetto` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv119` · BWV 119 — Preise, Jerusalem, den Herrn · BWV 119 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv120` · BWV 120 — Gott, man lobet dich in der Stille · BWV 120 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv121` · BWV 121 — Christum wir sollen loben schon · BWV 121 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv122` · BWV 122 — Das neugeborne Kindelein · BWV 122 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv123` · BWV 123 — Liebster Immanuel, Herzog der Frommen · BWV 123 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv124` · BWV 124 — Meinen Jesum lass ich nicht · BWV 124 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv125` · BWV 125 — Mit Fried und Freud ich fahr dahin · BWV 125 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv126` · BWV 126 — Erhalt uns, Herr, bei deinem Wort · BWV 126 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv127` · BWV 127 — Herr Jesu Christ, wahr' Mensch und Gott · BWV 127 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv128` · BWV 128 — Auf Christi Himmelfahrt allein · BWV 128 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv129` · BWV 129 — Gelobet sei der Herr, mein Gott · BWV 129 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv130` · BWV 130 — Herr Gott, dich loben alle wir · BWV 130 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv131` · BWV 131 — Aus der Tiefen rufe ich, Herr, zu dir · BWV 131 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv132` · BWV 132 — Bereitet die Wege, bereitet die Bahn · BWV 132 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv133` · BWV 133 — Ich freue mich in dir · BWV 133 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv134` · BWV 134 — Ein Herz, das seinen Jesum lebend weiß · BWV 134 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv135` · BWV 135 — Ach Herr, mich armen Sünder · BWV 135 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv136` · BWV 136 — Erforsche mich, Gott, und erfahre mein Herz · BWV 136 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv137` · BWV 137 — Lobe den Herren, den mächtigen König der Ehren · BWV 137 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv138` · BWV 138 — Warum betrübst du dich, mein Herz · BWV 138 · cantata_sacra · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv139` · BWV 139 — Wohl dem, der sich auf seinen Gott · BWV 139 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`
- `fl49:jsbach:bwv140` · BWV 140 — Wachet auf, ruft uns die Stimme · BWV 140 · cantata_sacra · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `flaminio_bachde_bwvinfo_staging`

**Schede supplementari e versioni (NON comprese nelle righe primarie):**
- `fl49:jsbach:bwv118a` · BWV 118a — O Jesu Christ, meins Lebens Licht · BWV 118a · versione · stato: `flaminio_catalogue_specific_staging` · madre: `fl49:jsbach:bwv118`
- `fl49:jsbach:bwv120a` · BWV 120a — Herr Gott, Beherrscher aller Dinge · BWV 120a · cantata_sacra_nuziale · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_catalogue_specific_staging`
- `fl49:jsbach:bwv120b` · BWV 120b — Gott, man lobet dich in der Stille · BWV 120b · cantata_sacra_commemorativa · generi: `atlas:gf:cantata-sacra` · stato: `flaminio_catalogue_specific_staging`
- `fl49:jsbach:bwv134a` · BWV 134a — Die Zeit, die Tag und Jahre macht · BWV 134a · cantata_profana · generi: `atlas:gf:cantata-profana` · stato: `flaminio_catalogue_specific_staging`

**Relazioni documentate interopera (non transitive):**
- `fl49:reuse:1`: `fl49:jsbach:bwv120` → `fl49:jsbach:bwv120a` · specific_movement_parody_for_wedding 
- `fl49:reuse:2`: `fl49:jsbach:bwv120` → `fl49:jsbach:bwv120b` · specific_movement_parody_for_confession_jubilee 
- `fl49:reuse:3`: `fl49:jsbach:bwv134a` → `fl49:jsbach:bwv134` · secular_to_sacred_specific_parody 
- `fl49:reuse:4`: `fl49:jsbach:bwv137` → `fl49:jsbach:bwv120a` · specific_chorale_movement_reused 

### LOTTO50_31_SCHEDE_BACH_BWV141_170_2026-11-11.json — 31 record in entries

- `fl50:jsbach:bwv141` · BWV 141 — Das ist je gewisslich wahr · BWV 141 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_confirmed, possibile/reale autore Georg Philipp Telemann
- `fl50:jsbach:bwv142` · BWV 142 — Uns ist ein Kind geboren · BWV 142 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_to_bach_author_unsettled, possibile/reale autore Johann Kuhnau (probabile, non definitivo)
- `fl50:jsbach:bwv143` · BWV 143 — Lobe den Herrn, meine Seele · BWV 143 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: disputed_authenticity, possibile/reale autore Johann Sebastian Bach (discusso)
- `fl50:jsbach:bwv144` · BWV 144 — Nimm, was dein ist, und gehe hin · BWV 144 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv145` · BWV 145 — Ich lebe, mein Herze, zu deinem Ergötzen · BWV 145 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv146` · BWV 146 — Wir müssen durch viel Trübsal · BWV 146 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv147` · BWV 147 — Herz und Mund und Tat und Leben · BWV 147 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv148` · BWV 148 — Bringet dem Herrn Ehre seines Namens · BWV 148 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv149` · BWV 149 — Man singet mit Freuden vom Sieg · BWV 149 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv150` · BWV 150 — Nach dir, Herr, verlanget mich · BWV 150 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: disputed_authenticity, possibile/reale autore Johann Sebastian Bach (discusso)
- `fl50:jsbach:bwv151` · BWV 151 — Süßer Trost, mein Jesus kömmt · BWV 151 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv152` · BWV 152 — Tritt auf die Glaubensbahn · BWV 152 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv153` · BWV 153 — Schau, lieber Gott, wie meine Feind · BWV 153 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv154` · BWV 154 — Mein liebster Jesus ist verloren · BWV 154 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv155` · BWV 155 — Mein Gott, wie lang, ach lange · BWV 155 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv156` · BWV 156 — Ich steh mit einem Fuß im Grabe · BWV 156 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv157` · BWV 157 — Ich lasse dich nicht, du segnest mich denn · BWV 157 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv158` · BWV 158 — Der Friede sei mit dir · BWV 158 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv159` · BWV 159 — Sehet, wir gehn hinauf gen Jerusalem · BWV 159 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv160` · BWV 160 — Ich weiß, dass mein Erlöser lebt · BWV 160 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_confirmed, possibile/reale autore Georg Philipp Telemann
- `fl50:jsbach:bwv161` · BWV 161 — Komm, du süße Todesstunde · BWV 161 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv162` · BWV 162 — Ach! ich sehe, itzt, da ich zur Hochzeit gehe · BWV 162 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv163` · BWV 163 — Nur jedem das Seine · BWV 163 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv164` · BWV 164 — Ihr, die ihr euch von Christo nennet · BWV 164 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv165` · BWV 165 — O heilges Geist- und Wasserbad · BWV 165 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv166` · BWV 166 — Wo gehest du hin · BWV 166 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv167` · BWV 167 — Ihr Menschen, rühmet Gottes Liebe · BWV 167 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv168` · BWV 168 — Tüe Rechnung! Donnerwort · BWV 168 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv169` · BWV 169 — Gott soll allein mein Herze haben · BWV 169 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv170` · BWV 170 — Vergnügte Ruh, beliebte Seelenlust · BWV 170 · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`
- `fl50:jsbach:bwv147a` · BWV 147a — Herz und Mund und Tat und Leben · BWV 147a · generi: `atlas:gf:cantata-sacra` · stato: `documented_work_staging`

**Sospensioni (anche quando già presenti nell'elenco entries):**
- `fl50:jsbach:bwv141` · BWV 141 — Das ist je gewisslich wahr · BWV 141 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_confirmed, possibile/reale autore Georg Philipp Telemann
- `fl50:jsbach:bwv142` · BWV 142 — Uns ist ein Kind geboren · BWV 142 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_to_bach_author_unsettled, possibile/reale autore Johann Kuhnau (probabile, non definitivo)
- `fl50:jsbach:bwv143` · BWV 143 — Lobe den Herrn, meine Seele · BWV 143 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: disputed_authenticity, possibile/reale autore Johann Sebastian Bach (discusso)
- `fl50:jsbach:bwv150` · BWV 150 — Nach dir, Herr, verlanget mich · BWV 150 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: disputed_authenticity, possibile/reale autore Johann Sebastian Bach (discusso)
- `fl50:jsbach:bwv160` · BWV 160 — Ich weiß, dass mein Erlöser lebt · BWV 160 · stato: `hold_do_not_publish_as_Bach` · **HOLD attribuzione**: spurious_confirmed, possibile/reale autore Georg Philipp Telemann

**Relazioni documentate interopera (non transitive):**
- `fl50:reuse:1`: `fl50:jsbach:bwv147a` → `fl50:jsbach:bwv147` · specific_revised_cantata_material 
- `fl50:reuse:3`: `fl49:jsbach:bwv132` → `fl50:jsbach:bwv164` · specific_chorale_movement_reuse 

### LOTTO51_37_SCHEDE_BACH_BWV171_200_2026-11-11.json — 37 record in entries

- `fl51:jsbach:bwv171` · BWV 171 — Gott, wie dein Name, so ist auch dein Ruhm · BWV 171 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv172` · BWV 172 — Erschallet, ihr Lieder · BWV 172 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv173` · BWV 173 — Erhöhtes Fleisch und Blut · BWV 173 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv174` · BWV 174 — Ich liebe den Höchsten von ganzem Gemüte · BWV 174 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv175` · BWV 175 — Er rufet seinen Schafen mit Namen · BWV 175 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv176` · BWV 176 — Es ist ein trotzig und verzagt Ding · BWV 176 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv177` · BWV 177 — Ich ruf zu dir, Herr Jesu Christ · BWV 177 · sacred_cantata · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv178` · BWV 178 — Wo Gott der Herr nicht bei uns hält · BWV 178 · sacred_cantata · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv179` · BWV 179 — Siehe zu, dass deine Gottesfurcht nicht Heuchelei sei · BWV 179 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv180` · BWV 180 — Schmücke dich, o liebe Seele · BWV 180 · sacred_cantata · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv181` · BWV 181 — Leichtgesinnte Flattergeister · BWV 181 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv182` · BWV 182 — Himmelskönig, sei willkommen · BWV 182 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv183` · BWV 183 — Sie werden euch in den Bann tun · BWV 183 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv184` · BWV 184 — Erwünschtes Freudenlicht · BWV 184 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv185` · BWV 185 — Barmherziges Herze der ewigen Liebe · BWV 185 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv186` · BWV 186 — Ärgere dich, o Seele, nicht · BWV 186 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv187` · BWV 187 — Es wartet alles auf dich · BWV 187 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv188` · BWV 188 — Ich habe meine Zuversicht · BWV 188 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv189` · BWV 189 — Meine Seele rühmt und preist · BWV 189 · uncertain_author · stato: `hold_author_attribution`
- `fl51:jsbach:bwv190` · BWV 190 — Singet dem Herrn ein neues Lied · BWV 190 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv191` · BWV 191 — Gloria in excelsis Deo · BWV 191 · latin_Christmas_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv192` · BWV 192 — Nun danket alle Gott · BWV 192 · sacred_cantata · generi: `atlas:gf:cantata-sacra, atlas:gf:cantata-corale` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv193` · BWV 193 — Ihr Tore zu Zion · BWV 193 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv194` · BWV 194 — Höchsterwünschtes Freudenfest · BWV 194 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv195` · BWV 195 — Dem Gerechten muss das Licht · BWV 195 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv196` · BWV 196 — Der Herr denket an uns · BWV 196 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv197` · BWV 197 — Gott ist unsre Zuversicht · BWV 197 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv198` · BWV 198 — Lass, Fürstin, lass noch einen Strahl · BWV 198 · funeral_secular_ode · generi: `atlas:gf:cantata-profana` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv199` · BWV 199 — Mein Herze schwimmt im Blut · BWV 199 · sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv200` · BWV 200 — Bekennen will ich seinen Namen · BWV 200 · fragment_of_lost_sacred_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv173a` · BWV 173a — Durchlauchtster Leopold · BWV 173a · secular_birthday_serenata · generi: `atlas:gf:cantata-profana` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv184a` · BWV 184a — Erwünschtes Freudenlicht · BWV 184a · secular_new_year_celebration · generi: `atlas:gf:cantata-profana` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv186a` · BWV 186a — Ärgere dich, o Seele, nicht · BWV 186a · Weimar_Advent_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv190a` · BWV 190a — Singet dem Herrn ein neues Lied · BWV 190a · Augsburg_confession_jubilee_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv193a` · BWV 193a — Ihr Häuser des Himmels, ihr scheinenden Lichter · BWV 193a · Dramma_per_musica_for_ruler_name_day · generi: `atlas:gf:cantata-profana` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv194a` · BWV 194a — Höchsterwünschtes Freudenfest · BWV 194a · Kothen_secular_celebration · generi: `atlas:gf:cantata-profana` · stato: `catalogued_staging_only`
- `fl51:jsbach:bwv197a` · BWV 197a — Ehre sei Gott in der Höhe · BWV 197a · Christmas_cantata · generi: `atlas:gf:cantata-sacra` · stato: `catalogued_staging_only`

**Relazioni documentate interopera (non transitive):**
- `fl51:reuse:1`: `fl51:jsbach:bwv173a` → `fl51:jsbach:bwv173` · secular_original_to_Pentecost_sacred 
- `fl51:reuse:2`: `fl51:jsbach:bwv173a` → `fl51:jsbach:bwv175` · secular_aria_material_reused 
- `fl51:reuse:3`: `fl51:jsbach:bwv184a` → `fl51:jsbach:bwv184` · secular_original_to_Pentecost_sacred 
- `fl51:reuse:4`: `fl51:jsbach:bwv186a` → `fl51:jsbach:bwv186` · Weimar_Advent_to_Leipzig_version 
- `fl51:reuse:5`: `fl51:jsbach:bwv190` → `fl51:jsbach:bwv190a` · New_Year_cantata_to_Augsburg_anniversary 
- `fl51:reuse:6`: `fl51:jsbach:bwv193a` → `fl51:jsbach:bwv193` · secular_ceremonial_to_sacred_civic 
- `fl51:reuse:7`: `fl51:jsbach:bwv194a` → `fl51:jsbach:bwv194` · secular_Kothen_to_church_consecration 
- `fl51:reuse:8`: `fl51:jsbach:bwv197a` → `fl51:jsbach:bwv197` · Christmas_material_to_wedding_cantata 
- `fl51:reuse:9`: `fl45:jsbach:bwv205` → `fl51:jsbach:bwv171` · secular_aria_reused_in_sacred_171_4 
- `fl51:reuse:10`: `fl46:jsbach:bwv41` → `fl51:jsbach:bwv171` · chorale_41_6_reused_in_171_6 
- `fl51:reuse:11`: `audit:flaminio:bach:bwv1048` → `fl51:jsbach:bwv174` · Brandenburg_no3_first_movement_as_cantata_sinfonia 

## C5. Correttivo Vivaldi — Checkpoint 52A–52B (non parte dei lotti Bach)

- `atlas:vivaldi-rv269-op8-1` — **La primavera**, RV 269, Op. 8 n. 1, mi maggiore; autore `pers:vivaldi`; raccolta `opera:quattro-stagioni`; sottogenere `atlas:gf:concerto-per-violino`; guida Flaminio `https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto269.html`.
- `atlas:vivaldi-rv315-op8-2` — **L'estate**, RV 315, Op. 8 n. 2, sol minore; autore `pers:vivaldi`; raccolta `opera:quattro-stagioni`; sottogenere `atlas:gf:concerto-per-violino`; guida Flaminio `https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto315.html`.
- `atlas:vivaldi-rv293-op8-3` — **L'autunno**, RV 293, Op. 8 n. 3, fa maggiore; autore `pers:vivaldi`; raccolta `opera:quattro-stagioni`; sottogenere `atlas:gf:concerto-per-violino`; guida Flaminio `https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto293.html`.
- `atlas:vivaldi-rv297-op8-4` — **L'inverno**, RV 297, Op. 8 n. 4, fa minore; autore `pers:vivaldi`; raccolta `opera:quattro-stagioni`; sottogenere `atlas:gf:concerto-per-violino`; guida Flaminio `https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto297.html`.

**Relazioni per concerto:** autore→opera, raccolta→opera, opera→sottogenere (12 archi nuovi). **Identità storica conservata:** `E0715`. Non introdurre un quinto concerto. La fonte canonica è nel codice `prepareSeasons52()` della preview, non in un manifesto JSON autonomo. Le prove 52B comprendono 10 radici, ma **non** l'intero rendering browser.


# D. CONSEGNA, COPERTURA E CONTINUITÀ AUTOMATIZZATA

## D1. Copertura esatta dell'inventario allegato
Il thread incorpora gli elenchi per **18 file di provenienza**: overlay Flaminio Checkpoint17, Brandeburghesi Checkpoint27, Lotti35–38, Checkpoint40, Lotti41–51, più **4 identità di Stagioni** nel Checkpoint52A. Contiene anche le liste specifiche dei `specials`, delle `versions` e degli `holds` dove presenti. Le voci dei gruppi editoriali e le righe nei manifesti con sovrapposizioni non costituiscono automaticamente composizioni indipendenti. Le relazioni presenti nei JSON (tra cui i riusi) vanno sempre lette alla fonte originale oltre all'indice.

**IMPORTANTE:** non interpretare il numero delle righe di questo documento come opere uniche; qualche ID ricompare intenzionalmente in diversi lotti o in liste HOLD, il catalogo 17 contiene anche `genere-forma` e `versione-opera`, e il checkpoint 40 è un **crosswalk di 44 opere già censite** nei lotti precedenti. Il lotto 49 ha 30 entries base più 4 specials; il lotto 50 presenta HOLD anche all'interno delle sue 31 entries; il lotto 51 contiene 37 schede con un HOLD. Le guide sono presenti come URL nei manifesti quando documentate; quelle assenti restano null. Gli eventuali record documentati fuori da questi manifesti (ad esempio fonti legacy non ancora catalogate in un batch Flaminio) richiedono audit autonomo.

## D2. Regola per le future importazioni
1. Ricostruire prima l'**insieme degli ID canonici** della federazione e una tabella `source_file → source_record_id → canonical_work_id → author_id → genres[] → status → evidence_urls[] → guide_urls[]`.
2. **Deduplicare per identità storica documentata, non per stringa del titolo.** Un titolo omonimo non basta; una versione non è per forza un'opera nuova.
3. Confrontare la nuova fonte Flaminio con tutte le righe dei 18 gruppi elencati sopra. Se la riga è già stata elaborata, aggiornare soltanto fonti/classificazioni mancanti e registrare differenze; non inventare un nuovo nodo.
4. Validare l'**arco diretto di autore** per ogni opera individuale ammessa (salvo attribuzione dubbia/HOLD), l'arco di classificazione e l'eventuale arco di raccolta, con provenienza e identificativi espliciti.
5. Prima di scrivere, generare rapporto di differenze tra stato iniziale e finale; in caso di errori non fare merge nella produzione.
6. Dopo ogni lotto aggiornare questo thread **aggiungendo** una sezione nuova e la tabella dei record toccati, data/ora, commit, PASS/FAIL/HOLD, cause e test non eseguiti. Conservare il thread madre come memoria storica, con rinvio a questo file.

## D3. Criteri di chiusura 52D e successivi
**52D = PASS** soltanto con caricamento effettivo simultaneo di tutti i file e pipeline eseguita, inventario globale degli ID senza collisioni inspiegate e archi senza estremi mancanti, regressione delle radici obbligatorie e test di isolamento autore. Documentare separatamente l'esito del rendering WebGL (**PASS**, **FAIL** o **NON ESEGUITO**) e dei filtri: non trasformare un esito parziale in una certificazione totale. Se la pipeline fallisce, produrre comunque un report utile, patch nello staging e test della patch.

**Formato minimo della chiusura:**
```json
{
  "checkpoint": "52D",
  "base_commit": "<SHA letto prima dei test>",
  "result_commit": "<SHA effettivamente pubblicato oppure null>",
  "files_loaded": 0,
  "pipeline_executed": false,
  "global_node_count": null,
  "global_edge_count": null,
  "duplicate_node_ids": null,
  "duplicate_edge_ids": null,
  "orphan_edges": null,
  "root_tests": [],
  "browser_webgl": "NOT_RUN",
  "production_modified": false,
  "result": "PASS|FAIL|HOLD",
  "open_issues": [],
  "evidence_files": []
}
```

**Stato al momento della creazione:** handoff pubblicato; nessun agente API attivato, nessuna credenziale fornita, 52D non ancora eseguito.


## E. RIPRESA REALE — CHECKPOINT 52D (11 novembre 2026)

**Stato: BANCO DI PROVA DISPONIBILE; esecuzione end-to-end e collaudo WebGL NON ancora certificati.** Non trattare l'esito come PASS finché non esiste il report JSON effettivamente generato dal browser.

- **Pagina di regressione**: `audit-integrazione/REGRESSIONE_FEDERATA_CHECKPOINT52D.html`, commit `a70427e160deda089d2852098a1463b24c173a23`, https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/REGRESSIONE_FEDERATA_CHECKPOINT52D.html
- **Hook sulla preview**: `window.AtlantisCheckpoint52D.status()/run()`, commit `ba8a445599dfc23814f658e681d3125ba0593d3a`; diagnostica aggiuntiva di archi non disegnati e filtri profondità zero, commit `ae65d314c36b62f0700a498caf7eb25c28e9beac`.
- **Verbale**: `AUDIT_BANCO_REGRESSIONE_CHECKPOINT52D_2026-11-11.md`, commit `e7aa242beba480d7dcd0f5e8e6b1814527f098f3`.
- La pagina carica la preview reale, che attiva la pipeline dei 24 JSON nel browser, ed esporta il risultato su file JSON dell'operatore. La suite controlla identità globali, orfani, radici dei generi, Bach/Vivaldi, raccolte, tassonomia Concerto e filtri zero. **Non certifica la resa WebGL visiva.** La lista `undrawn_edges_between_visible_nodes` è diagnostica e richiede revisione, non è automaticamente una violazione.
- **Prossimo esatto passo:** eseguire la pagina sul browser con tutti i file disponibili, salvare il JSON nel repository e correggere soltanto gli errori dimostrati; poi collaudo WebGL e compatibilità smartphone. NON modificare `musurgia-atlantis/grafo.json` né `index.html` pubblici.


### Checkpoint 52E — Completa gli archi fra nodi visibili, senza promuovere HOLD (11 novembre 2026)

- **Correzione reale nello staging** `PREVIEW_RADICATA_CHECKPOINT06.html`: `704cb46f5c44af14ee47e7b01a426ebd192c6133` introduce `completeVisibleEvidence52E()` dopo la ricostruzione radicata. Rende visibili tutti gli archi già presenti nel dataset i cui due nodi sono già nella vista e che gli helper non hanno emesso; **non aggiunge nodi, non inventa archi, non apre altri autori tramite il genere**.
- **Salvaguardia filologica** `8af6fe3758b07836675b3c27e820f6f775609f7c`: sospensioni, link non riscontrati e negazioni esplicite restano nel database, ma non sono riproposti automaticamente come legami certificati. I controlli attuali non costituiscono audit completo di tutti i quality gate.
- **Prova su 10 radici**, grafo reale più i tre overlay pertinenti: nessun duplicato/arco orfano, nessun arco ammesso mancante prima del filtro HOLD; 6 viste (Vivaldi, raccolta e quattro RV) recuperano un arco che i precedenti helper non disegnavano. **Prova successiva sul filtro HOLD:** arco sospeso `E0342` preservato nel dataset ma non disegnato; paternità `E0715` preservata e disegnata. JS 3/3 sintassi valida. Non rivendicare test end-to-end 24 file né WebGL.
- **Evidenze GitHub**: `REGRESSIONE_CORRETTIVO_ARCHI_CHECKPOINT52E_2026-11-11.json` commit `26e56ed4c1a7d886452f8757a3272e76d956d42c`; `AUDIT_CORRETTIVO_ARCHI_CHECKPOINT52E_2026-11-11.md` commit `40287d64dd59d6a35775594bdb2d17c983c40774`.
- **Prossimo**: run integrato dei 24 JSON e test delle famiglie Sonata, Quartetto, Opera/Singspiel, Cantata/Brandeburghese con filtri di pertinenza. Nessuna modifica alla produzione.


### Checkpoint 52F — Mozart, Don Giovanni, Flauto magico, Singspiel e Opera (11 novembre 2026)

**Riscontro reale:** gli archi `E0736` Mozart→Don Giovanni e `E0739` Mozart→Flauto magico sono nel grafo pubblico; l'overlay Checkpoint19 contiene i sottogeneri `Dramma giocoso` e `Singspiel` e la loro gerarchia teatrale. In preview il percorso radicato in Mozart o nell'opera era completo, **ma partendo da Opera mancava la ricostruzione di Dramma giocoso fra un'opera già mostrata e la categoria madre**.

**Correttivo SOLO staging:** `PREVIEW_RADICATA_CHECKPOINT06.html` commit `e13814bb2468ca66a3ea664fdcc9254307b579f6`. `attachMozartTaxonomy()` ora ricostruisce da `Opera`, con pertinenza ≥2, i sottogeneri documentati delle sole opere Mozart già visualizzate, senza esplorare altri compositori o inventare archi.

**Test mirato su codice reale e grafo originale + overlay legacy/Checkpoint19:** 7 radici (Mozart, Don Giovanni, Flauto magico, Opera, Dramma giocoso, Singspiel, Clementi), 0 archi orfani, 0 ID arco duplicati. **Opera 10 nodi/20 archi** nella prova, con entrambi i percorsi:
Mozart→Don Giovanni→Dramma giocoso→Opera comica italiana (categoria provvisoria)→Opera;
Mozart→Flauto magico→Singspiel→Opera.
`pers:clementi` come test isolato non importa opere Mozart.

**Evidenze GitHub:** `REGRESSIONE_MOZART_OPERA_CHECKPOINT52F_2026-11-11.json` commit `6dfb2f043a4ce1ca3d2c59a9733cac67216a35be`; `AUDIT_MOZART_OPERA_CHECKPOINT52F_2026-11-11.md` commit `415008275bc546da56cb822a8c37b42739530526`.

**Limiti:** test helper-level, non completa federazione dei 24 file né WebGL/browser. Production `grafo.json`/`index.html` invariata. Prossimo: Sonata/Quartetto/Cantata, allineamento filtri e correzioni ulteriori delle identità musicali sospette.

## Ripresa 52G fase 1 — Sonata per pianoforte / Berg op. 1

**11 novembre 2026.** Sul branch `main`, solo staging, è stato corretto `prepareSonata39` affinché la Sonata op.1 di Alban Berg (`audit:fl15:l06:w01`) entri nella famiglia navigabile `Sonata per pianoforte` quando il manifest Flaminio17 documenta faccette `sonata` e `pianoforte solo` e gli archi fonte `audit:fl15:e0033` (Berg→opera) e `audit:fl15:e0034` (opera→Sonata). Non inventare attribuzioni, collegamenti autore-autore o prove indipendenti. I due nuovi archi derivati di indice verso il sottogenere conservano `preview_only`, `source_attested_not_independently_certified` e provenienza Flaminio. Non confondere i sottogeneri con opere o raccolte. Non cancellare archi documentati per alleggerire la visualizzazione.

**Commit preview:** `bdf3e72c52edc09407c02ba9d7490a91d4303093`. **Audit:** `AUDIT_SONATA_FLAMINIO_CHECKPOINT52G_2026-11-11.md`, commit `9d5c9df26a9da819e2db31012b81e54a0f29ef9d`. **Thread madre:** aggiornato al commit `4b75d59d198ce3bb326a64a057f6a40c81b005f1`. Test: sintassi JS inline PASS, helper mirato su fonte Berg + fixture PASS (nessun orfano/duplicato); **non** end-to-end 24 JSON, **non** WebGL/browser. File di produzione invariati.

**Da fare al prossimo agente:** regressione federata per Sonata / Quartetto / Cantata nel runtime reale, controllo dei quality gate e HOLD, esecuzione della suite `REGRESSIONE_FEDERATA_CHECKPOINT52D.html` con esportazione report e prova mobile WebGL. Il 52G è **aperto**, non dichiararlo certificato PASS.


### Checkpoint 52H — Quartetto/Cantata: controlli federati e fonti originali (11 novembre 2026)

**Nota di continuità:** prima di questo intervento il 52G era già stato pubblicato (Sonata op.1 di Berg, commit `bdf3e72c52edc09407c02ba9d7490a91d4303093`), quindi non viene ripetuto o sovrascritto.

**Nuovo intervento:** `PREVIEW_RADICATA_CHECKPOINT06.html` commit `00d1cf4b6614731ceebdbe9c23bf441855b46908`. Il runner `AtlantisCheckpoint52D.run()` ora comprende 6 asserzioni `catalogue_invariants_52h` e conta ogni fallimento: quartetti J. C. F. Bach B37–42 con basso continuo, Mozart K285b in HOLD, BWV189 senza arco Bach, BWV200 frammento, BWV1048→BWV174 arco specifico di riuso, gerarchia Quartetto→Quartetto per archi.

**Prova completata sui manifesti reali** Lotti42/43/44/51: **8/8 PASS**, incluso il riparto del Lotto43 (21 quartetti con pianoforte, 3 per flauto, 1 per oboe), il frammento JCF Bach I4 escluso e il K285b controverso non promosso. Registro `REGRESSIONE_QUARTETTO_CANTATA_CHECKPOINT52H_2026-11-11.json` commit `1d4fbb46e071a747c28f090c5587de0742d7d613`; audit `AUDIT_QUARTETTO_CANTATA_CHECKPOINT52H_2026-11-11.md` commit `503bcb355711c6e3aec474b8554ccbffe4136f8d`.

**Limiti:** prove sui quattro manifesti, **non** esecuzione federata end-to-end di tutti i 24 file, **non** collaudo browser/WebGL/mobile. Suite federata arricchita ma ancora da lanciare. Nessun cambiamento ai dati di produzione. Prossima ripresa: eseguire test 52D/52H insieme, analizzare eventuali FAIL di radici Quartetto/Cantata e correggere soltanto anomalie reali.


### Checkpoint 52I — Regressione reale della federazione in V8, correttivo radici Vivaldi (11 novembre 2026)

**Non ripetere questa operazione.** I 24 JSON **reali** della preview sono stati caricati simultaneamente tramite l'accesso GitHub (il grafo originario recuperato dal blob perché troppo grande per la normale fetch). Sono state eseguite le funzioni originali `prepare*`, `ROOTED_RELEVANCE_CHECKPOINT06.browser.js` e `AtlantisCheckpoint52D.run()` in un isolate JavaScript V8. DOM e motore grafico sono stati sostituiti da stub: esito **`PASS_DATA_ONLY`**, NON browser reale, NON WebGL, NON Android.

**Baseline FAIL:** quattro opere singole delle Quattro stagioni (RV269, RV315, RV293, RV297) non navigabili come radice autonoma (`Unknown root` nel motore base); il dataset comunque le conteneva. **Patch:** inizializzare una radice staging quando `seasons52.ids.has(currentRoot)` prima di `attachSeasons52` e completamento archi 52E; nessuna fusione o arco storico inventato. Corretto anche il cercatore di `BWV174` e `BWV200` per usare il nome **o** l'identificativo: ora entrambe le radici sono incluse.

**Post-patch:** 24/24 JSON, **1.390 nodi**, **3.391 archi**, **27/27 radici PASS**, **4/4 controlli filtri zero PASS**, **6/6 invarianti 52H PASS**, nessun duplicato ID nodo/arco, nessun arco orfano e nessun errore `ha_composto` fra persone. Mantengono HOLD e classificazioni BWV189, BWV200, K285b; non alterare il dataset per ridurre la densità di archi.

**File e commit main, tutti soltanto in `audit-integrazione/`:** preview `1e2aa3e9893e0b51431b87f4017f770181cc755f`; report JSON `REGRESSIONE_FEDERATA_CHECKPOINT52I_V8_2026-11-11.json` commit `1a09d44d5fc141808673577966938118d884ac7a`; audit `AUDIT_REGRESSIONE_FEDERATA_CHECKPOINT52I_2026-11-11.md` commit `713fe45f90fce933de81c1b3842d9fc8d158018d`. Thread madre aggiornato commit `a7f4179491895252d070323156804e8ce0789828`.

**Next gate:** lanciare `REGRESSIONE_FEDERATA_CHECKPOINT52D.html` da browser desktop, esportare il JSON generato sul campo, verificare grafica/etichette/filtri e comportamento Android. Registrare separatamente runtime dati e grafica, non riportare `webgl_renderer_constructed:true` dal test V8 con stub. Trattare `undrawn_edges_between_visible_nodes` come diagnostica, distinguere arco filtrato intenzionalmente da arco perso. Produzione `grafo.json` e `index.html` invariata.


### Checkpoint 52J — Test 24 JSON, 27 radici, duplicate witness e Canvas 2D (12 novembre 2026)

**Completato; non ripetere.** La suite dati è stata rieseguita sul codice sorgente reale della preview con tutti i 24 JSON in runtime V8 isolato, motore radicato reale, DOM/graphics stub. Esito `PASS_DATA_ONLY`: **1.390 nodi, 3.391 archi, 27/27 radici PASS, 4/4 filtri zero PASS, 6/6 invarianti 52H PASS, zero duplicati ID e zero orfani**. **Non** è stata eseguita la grafica in browser o su Android.

**Diagnostica diretta:** la vecchia lista `undrawn_edges_between_visible_nodes` contava 2 occorrenze ma **un solo ID** `L02-A07` nelle viste Mozart e Don Giovanni. Il record è `quality_gate:sospeso`, `historical_verified_independently:false`, `duplicate_of:E0873`. L'arco storico canonico `E0873` (Da Ponte autore del libretto di Don Giovanni) è certificato e disegnato. Aggiornata la preview con `excludedEvidenceReason52J()` e `duplicateEvidenceWitness52J()`: rapporta distintamente archi sospesi, duplicati risolti e **archi ammissibili assenti**; fallisce se un ammissibile è omesso o se il canonical witness è incoerente. **0 omissioni ammissibili** nelle 27 viste testate. Non eliminare il record duplicato originale né fonderlo con un nuovo arco.

**Tecnologia:** il file `compat-graph-checkpoint08.js` usa **CanvasRenderingContext2D**, con calcolo di coordinate 3D; non è un renderer WebGL. La preview e il runner hanno ora metadati corretti `renderer_technology:canvas_2d_3d_projection` e `webgl_renderer_constructed:false`. È scorretto dire «WebGL PASS». `REGRESSIONE_FEDERATA_CHECKPOINT52D.html` ora espone il riepilogo omessi/sospesi e istruzioni di test visivo. Sintassi JS dei due HTML PASS.

**Commit/registri main** (esclusivamente `audit-integrazione/`): preview `5d745330889a87e201ad96ae31e6dfa233b2e35e`; JSON `REGRESSIONE_ARCHI_VISIBILI_CHECKPOINT52J_2026-11-12.json` commit `451c8783c63a5ec98a8870dc1864e4190b1a75d5`; runner `f035602fce0ee8d0de2c51036d74491683082f7d`; audit `AUDIT_CHECKPOINT52J_ARCHI_VISIBILI_2026-11-12.md` commit `76c810375c05cde7451ad00672e678c59d2cef4e`; thread madre aggiornato `dfa7d2496953f211e01dbad65ac4c599cc2c4279`. Produzione `grafo.json` e `index.html` invariati.

**Prossimo checkpoint 52K:** esecuzione nel browser reale della pagina di prova, export del JSON, controllo manuale Canvas 2D su desktop e mobile (Mozart/Da Ponte/Don Giovanni, Vivaldi/Stagioni, Sonata/Quartetto/Cantata, zoom, etichette, filtri). Distinguere le osservazioni visive umane dai PASS dati. Non promuovere alla produzione senza collaudo.


### Checkpoint 52K — Browser acceptance scaffold + test logico Canvas (12 novembre 2026)

**Stato:** TEST BROWSER PREDISPOSTO, **NON ESEGUITO QUI**; test isolato del renderer **PASS_SIMULATED_RENDERER_LOGIC**. Recuperati sorgenti GitHub della preview/renderer; l'ambiente Chromium disponibile non aveva accesso di rete al sito pubblico, quindi non è stato possibile generare un report autentico della pagina e non si certifica la resa visiva o Android.

**File nuovi:** `COLLAUDO_BROWSER_CHECKPOINT52K_2026-11-12.html`, che incorpora la preview completa e può lanciare 8 prove nel browser e salvare JSON/PNG, e `REGRESSIONE_RENDERER_LOGICO_CHECKPOINT52K_2026-11-12.json`, 7/7 asserzioni logiche in isolate V8 sul sorgente renderer con Canvas e pointer sintetici simulati. **Prova sintetica non equivale a rendering del Canvas in un browser reale né a touch Android**. Schema di report browser `musurgia-atlantis-checkpoint52k-browser-acceptance-v1`.

**Modifiche staging:** `compat-graph-checkpoint08.js` ora ha `auditView()` read-only con nodi proiettati, dimensioni, zoom, etichette e selezione; `PREVIEW_RADICATA_CHECKPOINT06.html` ora ha `AtlantisCheckpoint52K.status()` per recuperare queste misure e i conteggi di opere visibili/etichette, più nuovo query param anticache JS. Nessun mutamento al dataset storico o alla regola di pertinenza.

**Rilievo funzionale preciso per 52L:** in `compat-graph-checkpoint08.js` il metodo `onLinkClick(fn)` registra il callback ma nessun percorso degli eventi invoca `onLink`: l'hit testing gestisce soltanto i nodi, e la selezione diretta delle linee non è implementata. Nel pannello del nodo sono comunque presenti gli archi e le fonti. Se si implementa l'hit-test degli archi, distinguere tap su nodi e tap su linee, aprire la scheda della relazione specifica preservando testi forward/reverse/fonti, non ricostruire archi inesistenti e non cambiare semantica delle radici.

**Commit effettivi main:** renderer `eca86239af9d84541b96f3c45a3adb4782d078a2`, `76609ec258624e268a6bc2cf95fad3df943b81f3`; preview `83099d91f6de39afa20d8dcdb8e73b19d3632427`, `754437eedb717fafa5e8ecff5ac451b9e1b51e89`, `a81df41fb4d8f032e2c5554eacc0e44acdd9b594`; banco 52K `8b9142f1db4d57867d0765aadfe5f750a714d795`; test isolato `30428271bdeb3753b29ab44c80b78eca451d9b61`; audit `AUDIT_CHECKPOINT52K_COLLAUDO_CANVAS_2026-11-12.md` `585104c42098765ea21fdb967973c11e5a4a72aa`; thread madre aggiornato `dd123746a421a55c3a8f150dc41b53959f669478`.

**Prossimo:** 52L, test e correzione interazione diretta con archi, poi lanciare da browser live `COLLAUDO_BROWSER_CHECKPOINT52K_2026-11-12.html`, esportare il JSON eseguito sul dispositivo e certificare separatamente l'esperienza Android. Non promuovere la produzione prima di verifica.

### Checkpoint 52L — Relazioni cliccabili nel Canvas e scheda fonti (12 novembre 2026)

**Implementato, solo staging.** Il renderer `compat-graph-checkpoint08.js` ora rileva il tratto proiettato degli **archi già disegnati**: `hitTestLink`, precedenza al centro del nodo, tolleranza touch, click non attivato dal drag, evidenziazione e annullamento della selezione dopo filtri. Callback `onLinkClick` finalmente invocata. Commit `e1defd17ff51d60d9422055e647bdae5441b3058`. Nella preview `PREVIEW_RADICATA_CHECKPOINT06.html` la scheda direzionale legge soltanto l'arco realmente visibile con `renderer.relationDetail`, visualizza frase, descrizione, note, tipo, qualità/provenienza e fonti HTTPS; non effettua traversal, non promuove HOLD. Commit `0285f9dd0f52b9d4843107dcc3cb64803f4c60a3` e hook read-only `66bed87b8a20b7a39f401f1e045c7fdb2b7e1f04`.

**Evidenze**: `REGRESSIONE_INTERAZIONE_ARCHI_CHECKPOINT52L_2026-11-12.json`: **15/15 PASS** di logica su Canvas/DOM simulati (`PASS_SIMULATED_INTERACTION_ONLY`, commit `8bb31e1e98a9d0bfdb887e084a4566d5f200d527`). **Non** provato il rendering browser reale o il touch hardware Android; **non** rieseguita l'intera federazione 24 JSON dopo la patch UI. Audit `AUDIT_CHECKPOINT52L_ARCHI_CLICCABILI_2026-11-12.md` commit `9e2b0d880ac43dc86d80a4e363e5a202ed95216f`.

**Nuovo banco live da eseguire**: `COLLAUDO_BROWSER_CHECKPOINT52L_2026-11-12.html`, commit `8f694e7029029a471a2ec36d3dbf317a6de81c80`, 9 controlli incluso un tocco sintetico su un arco con comparsa della scheda. URL: https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/COLLAUDO_BROWSER_CHECKPOINT52L_2026-11-12.html . Prossimo **52M**: esportare JSON realmente eseguito in browser con rete, controllare filtri, fonti, linee sovrapposte e collaudo manuale Android. No promozione di `grafo.json`/`index.html` pubblici.

Thread madre aggiornato al 52L commit `0edcdef784d66a2c75fb88a69fa850547f226b30`.

### Checkpoint 52M — Cambio di priorità: DB-first, stop collaudi GUI (12 novembre 2026)
**La decisione utente annulla la priorità 52M browser/Android indicata al 52L.** Non ripetere test desktop/mobile finché non sia sostanzialmente completata la verifica dei record e degli archi nel corpus acquisito. Conservare gli interventi GUI già eseguiti, senza promuoverli in produzione; evitare altri checkpoint di pura visualizzazione.

**Nuovo protocollo vincolante:** `PROTOCOLLO_DB_FIRST_2026-11-12.md`, commit `8970efc5140397599f8f5237a02241672d0a97b2`. Lotti futuri devono includere ID fonte e identità, differenza opera/raccolta/versione/parte, genere al singolare (anche multi-valore), archi ring tracciati ad almeno una opera, attribuzioni e qualità filologica, controllo interlotto, HOLD e provenienza senza perdere link originali. Completamento e freeze dei dati **prima** di progettazione/validazione GUI.

**Prima verifica strutturale** 37 record del Lotto51, 11/11 test PASS, 3/3 ID di endpoint di riuso interlotto verificati nei manifesti Lotto45, Lotto46 e Brandeburghesi Lotto27; nessuna riga Excel originale e nessuna guida individuale mappata nelle 37 schede. JSON evidenza `CHECKPOINT52M_DB_FIRST_PRIMA_RICOGNIZIONE_2026-11-12.json`, commit `ae2739dc03741827516de71ef0f5a6eb2cdf1feb`. **Questo non certifica 52.150 righe, né le attribuzioni storiche in blocco.** Il manifest 31 distingue 52.150 righe fonte, 46.205 candidate documentarie e 5.945 da riesaminare: tutti numeri di audit/filtraggio, non opere validate. Gli archi di produzione restano invariati.

**Prossimo agente:** non avviare il banco `COLLAUDO_BROWSER_CHECKPOINT52L` come attività prioritaria; costruire un inventario cumulativo senza duplicati di tutti i record già elaborati e delle righe scoperte, poi riprendere verifiche catalografiche in lotti significativi; aggiornare questo thread e il thread madre.

### Checkpoint 53A — Sospensione GUI e ritorno alla certificazione dei record (12 novembre 2026)

**Cambio vincolante richiesto dall'utente:** sospendere il previsto 52M browser/Android e gli ulteriori lavori sulla GUI. **Priorità ora a importazione integrale, identità, fonti, classificazione, verifica delle paternità e relazioni fra le opere**; le prove visive e i filtri verranno solo dopo la certificazione del database. Non eliminare la preview 52L già pubblicata, non toccare `grafo.json` o `index.html` di produzione e non creare archi per semplice appartenenza al genere.

**Lotto 53A pubblicato in `main` solo nello staging audit:** `CHECKPOINT53A_BACH_BWV201_250_INVENTARIO_CONSERVATIVO_2026-11-12.json` (50 voci BWV numeriche + 14 suffissi + 13 testimoni di relazione; commit `141442ebbfc6455ba64cf125cf31a05e2ad2ccf5`). Stati distinti per opere catalogate, perdute/frammentarie, versioni, false attribuzioni, paternità disputata e arrangiamenti. Riscontri work-specific secondari per BWV203,222,241,246; nessun gate di creazione o attribuzione aperto. Non considerare `BWV218/219/222/246` opere composte da J. S. Bach, e mantenere sospeso `BWV231`. `REGRESSIONE_INVENTARIO_CHECKPOINT53A_2026-11-12.json` `b3196a5512e8bc0ff082995c9e3cb186ae951005` = PASS di sola integrità strutturale, non di autografia.

**Crosswalk effettivo** col grafo pubblico originale 754/1718, 193 nodi opera: `CROSSWALK_CHECKPOINT53A_BWV201_250_VS_ATLANTIS_2026-11-12.json` commit `1b5e3ce2817a3fe7d1633884f0b0652ebd2bbf65`; unico match restrittivo `BWV244 ↔ opera:passione-matteo` con paternità `E0717`. Le altre 49 posizioni non abbinate non devono essere conteggiate come opere mancanti fino al confronto con il grafo federato, alias e sorgente Excel originale.

**Relazione completa** `AUDIT_CHECKPOINT53A_RITORNO_DATABASE_BWV201_250_2026-11-12.md`, commit finale `1d8e650973adc12d366828bae90e9355ba855d04`.

**53B prossimo, solo catalogo:** reperire le righe precise del file `compositori_flaminio.xlsx`, confrontare tutte le identità presenti nel primo giro 52.150/149 e gli overlay 24 JSON, distinguere fonte/cataloga/compone/copia/arrangia/riusa. Ricordare che l'ultimo stato del triage, non quello iniziale del Lotto21, segnala **12 gruppi ancora ambigui, 17 partizioni, 112 righe** nel Lotto24–25, con 30 P1 triagiati nel Lotto23. **Nessun collaudo GUI necessario finché il patrimonio record non è certificato.**

Thread madre portato a 53A: commit `0c2fd9d3fac379b8e321857815e15aafdccb6108`.


### Checkpoint 53B — SOLO 7.412 Flaminio con guida, chiusura progressiva in blocchi di 500 (12 novembre 2026)

**Nuova istruzione dell'utente, priorità superiore al 53A:** trattare ora **ESCLUSIVAMENTE le 7.412 righe Flaminio con campo `Link spiegazione` non vuoto**, differendo le **44.738** prive di link fino alla conclusione dei record prioritari. L'obiettivo non è ridurre il grafo storico, ma circoscrivere l'importazione/validazione Flaminio. Lavorare in **15 lotti sequenziali** (14×500 + 412): **ogni lotto deve essere definitivamente integrato, documentato e VERIFICATO ANCHE NELLA VISUALIZZAZIONE GRAFICA prima di aprire il successivo**. Pertanto la sospensione totale dei test GUI del 53A è superata: **NO redesign GUI autonomo**, **SÌ collaudo grafico obbligatorio per ogni lotto**. Nessun conteggio di una semplice simulazione come browser eseguito, nessun Android richiesto a ogni passo in modo rituale.

**Sorgente originale recuperata e letta integralmente:** `compositori_flaminio.xlsx` Sheet1 A1:H52151, SHA256 `10dce565f52d94518ed4ae2df4f1b1707245e1592e1bac6f4a4b6d5e5374fba0`. 52.150 record, **7.412 con URL**, **7.137 URL distinti**, URL tutti al dominio Flaminio, selezione in ordine crescente di riga Excel. In GitHub `PROTOCOLLO_FLAMINIO_7412_LINKATI_LOTTI500_2026-11-12.json` commit `d1c6257114a9ab44aaf2bdb303deca1f41a7a375`: delimitazioni dei 15 lotti, regole record→identità, gestione HOLD, gate di test grafo 500/500, controllo browser autentico, chiusura e priorità.

**Lotto 01 PREPARATO MA NON CERTIFICATO:** le **prime 500 righe con link**, posizioni filtrate 1–500, righe originali **78–4743**, **494 URL distinti**, distribuite su 10 compositori (J.S. Bach 312, Bartók 43, Alfano 41, Beethoven 41, C.P.E. Bach 22, Albinoni 20, Barber 12, Amy Beach 5, Albéniz 3, J.C.F. Bach 1). **Il CSV delle 500 righe integrali e dei rispettivi identificativi sorgente è stato COMMITTATO** in `FLAMINIO_LINKATI_LOTTO01_500_RECORD_RAW_2026-11-12.csv`, commit `3ed82372913abfa489f113df40b07b7cbf6dd826`. 6 guide condivise da 2 record ciascuna; preservare entrambe le identità sorgente. Stato di ogni riga `SORGENTE_ESTRATTA_DA_VERIFICARE`, non confondere con `DATA_CERTIFIED`: nessun arco storico nuovo promosso e nessuna prova grafica eseguita per questi 500. **Lotti chiusi 0/15.**

**Audit formale e tabella completa dei lotti:** `AUDIT_FLAMINIO_7412_SOLO_LINK_LOTTI500_2026-11-12.md`, commit `bcf0623edc1bacc5f07a212c5fe936a6b871cd4c`. **Prossimo avanzamento**: lavorare soltanto sul Lotto01 già estratto, risolvere la corrispondenza delle 500 schede contro tutti gli overlay/grafi e le guide, collegare autore/opera/genere con fonte e HOLD qualificato, committare il database fedele alle prove, eseguire regressione completa **e accettazione grafica 500/500**. Se anche una delle condizioni manca, mantenere Lotto01 `APERTO`, **non partire con Lotto02**. Nessuna modifica al database o interfaccia di produzione fino a prova sufficiente.

Thread madre aggiornato contestualmente.
