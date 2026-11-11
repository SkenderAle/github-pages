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

