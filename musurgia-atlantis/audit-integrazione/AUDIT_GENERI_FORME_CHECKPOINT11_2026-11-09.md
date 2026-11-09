# Musurgia Atlantis — Checkpoint 11
## Ripristino dei «Generi e forme» dal vecchio Atlante 3D, senza fusione dei grafi

**Data:** 9 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Scritture:** soltanto `musurgia-atlantis/audit-integrazione/`.

### Problema e scelta editoriale
La categoria autonoma «Generi e forme», presente nell'Atlante 3D di Musurgia Mundi, mancava nell'anteprima di Musurgia Atlantis. Il grafo pubblico Atlantis comprende 176 `nodo-di-senso`, alcuni dei quali hanno `subtype=genere` o `forma`, ma NON coincide con la tassonomia originale né con le sue centinaia di relazioni compositore–genere. Ridurre automaticamente ogni `nodo-di-senso` a genere sarebbe scorretto (vi sono istituzioni, scuole, ricezioni, tecniche, contesti, ecc.).

La richiesta non è fare ora un audit nuovo per tutti i generi e compositori, bensì **riprendere le connessioni legacy già censite**, conservando esattamente descrizioni, note, fonti e status e dichiarando gli abbinamenti non ancora certificati.

### Dataset consultati effettivamente
- Atlantis pubblico: `musurgia-atlantis/grafo.json`, blob `4863b3fe263154387de3388c0b813b5f94546f12`: **754 nodi / 1.718 archi**, 297 persone.
- Musurgia Mundi originale: `atlante3d/database/grafo.json`, blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8`: **869 nodi / 2.437 archi**, di cui 400 compositori e 339 correnti/ambiti specialistici.
- Le 1.389 relazioni direzionali specialistiche di `atlante3d/database/relazioni.json` (blob `b25f0487d05bdab261d2e0df9044fff5aaf98e47`) e le estensioni restano **separate**: non assumere che archi omonimi siano uno stesso fatto.

### Metodo di importazione NON distruttiva
1. Estratti **50 nodi** legacy il cui ID distingue un genere o una forma (`genere-*`, `forma-*`, e cinque categorie storiche esplicite come `madrigale`, `opera-buffa`, `dramma-giocoso`). La selezione è editoriale dichiarata, non una deduzione arbitraria dal nome.
2. Abbinamento provvisorio di persone basato su **uguaglianza univoca di nomi completi normalizzati**: **117** corrispondenze fra le 297 persone Atlantis e i 400 compositori del vecchio Atlante. **Queste non sono tutte identità storiche certificate** e non sovrascrivono alcun ID pubblico. Rimangono 180 persone Atlantis senza tale abbinamento automatico: si potranno riconciliare più avanti usando le registrazioni di staging.
3. Conservati **271 archi compositore–genere/forma** da `atlante3d/database/grafo.json` per **93 compositori** già riconosciuti in modo univoco. Ogni arco conserva l'intero record fonte `original_legacy_record`, gli eventuali `sources`, la `note` originale, l'ID/indice del record, il `kind` e i riferimenti delle due basi.
4. I 50 nuovi nodi hanno prefisso `legacy:gf:` e categoria virtuale `genere-forma`. I 271 archi mantengono `historical_verified_independently:false` e `quality_gate=legacy_staging_no_atlantis_historical_gate`: sono **visibili come collegamenti catalogati, NON come prove indipendenti adottate da Atlantis**. L'UI distingue questo livello con colore dedicato e testo esplicito di provenienza.
5. Non si deducono collegamenti da semplici somiglianze testuali, non si attraversano automaticamente altri compositori tramite lo stesso genere, non si riattiva una navigazione globale non pertinente. La radice compositore mostra i suoi generi **diretti**; la radice genere mostra i soli compositori **già associati in modo esplicito** nella porzione recuperata.

**Archivio:** `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`, commit `737464b62de7c4511cf6759d9e28eaba7788eda6`, file autonomo caricato in lettura dalla pagina di prova. Non modifica `grafo.json`.

### Configurazione nuova dell'anteprima
`PREVIEW_RADICATA_CHECKPOINT06.html` ha ora i primi quattro controlli nell'ordine **Persone, Opere, Reti culturali, Generi e forme**, tutti selezionati all'apertura; le rimanenti categorie sono nell'elenco ordinato alfabeticamente ma **non selezionate** di default. Anche per `genere-forma` restano indipendenti `Nodi` e `Etichette`, con etichettatura permanente opzionale. Il conteggio è vista/catalogo, ad esempio `Generi e forme (12/50)`.

L'avvio legge Atlantis pubblico, registro delle prove storico-radicate ed archivio legacy addizionale (tre `fetch` distinti). Il motore storico `createRootedExplorer` continua ad applicarsi **soltanto** al vero JSON Atlantis; per il layer legacy esiste un adattatore separato `getRootedPreview` che mostra le associazioni direttamente catalogate senza farle diventare ponti storici automatici. Il selettore «Generi e forme» non ha subito effetti sui grafi ufficiali.

Sono mantenuti: hover della singola etichetta, clic per le note/fonti, doppio clic/tocco per nuova radice senza zoom, lenti +/−, filtri per categorie/profondità/pertinenza, nessuna animazione o movimento del layout al semplice toggle di etichette.

### Prove concrete
**Smoke test V8** della vera pagina HTML e del vero modulo browser, con DOM e grafica simulati, usando **il JSON Atlantis integrale** e **il nuovo archivio legacy integrale**:
- 3 `fetch` completati, nessun errore di inizializzazione: PASS.
- Ordine dei primi quattro controlli esattamente come richiesto, **solo questi quattro** selezionati, tutti i selettori `Etichette` inizialmente spenti: PASS.
- Radice Mozart: **24 nodi / 26 archi** nella vista predefinita: **12 generi e forme**, incluse Sinfonia, Concerto, Opera, Messa, Quartetto, Fantasia, Ouverture, Fuga, Variazioni, Musica da camera, Opera buffa, Dramma giocoso. Tutte sono relazioni già presenti nella fonte legacy e **12** archi sono distintamente `legacy_catalogue`. PASS.
- Toggle «Etichette» sulla categoria: accende tutte le 12 didascalie di genere presenti e non quella delle persone, **senza richiamare `graphData` né `zoomToFit`**. PASS.
- Cercando `Messa` come nuova radice, appaiono **16 compositori abbinati** e 16 relazioni originali nella porzione recuperata, senza attraversamenti arbitrari e senza falsi collegamenti fra compositori. PASS.
- Il ritorno a Mozart ripristina le 12 relazioni legacy. PASS.
- Catalogo senza relazione Mozart→Sonata nell'insieme selezionato: **non aggiungerla per semplice familiarità storica**. Un audit futuro potrà integrarla con fonte e provenienza specifica.

**Test Node di regressione** `TEST_GENERI_FORME_CHECKPOINT11.cjs` pubblicato (15 controlli su nodi, integrità, abbinamenti e mancati rapporti) e verificato sintatticamente; **non eseguito su clone completo in Node** perché l'ambiente locale di questo audit non dispone del repository clonato. Il collaudo effettivo del DOM/canvas su Chrome e Android va ancora svolto.

### Completamento e limiti
Questo Checkpoint 11 **non è** la fusione globale delle 3.856 relazioni legacy, delle 509 persone in staging, dei media o delle ancore. È una prima integrazione navigabile estesa a 93 compositori, con archivi e stato di prova separati e replicabile per ulteriori riconciliazioni.

Nel JSON legacy originale esistono più tipi di relazione, più persone e 1.389 relazioni specialistiche autonome: non sono state sovrapposte o deduplicate. L'estensione successiva riguarda il matching delle identità ancora prive di corrispondenza univoca e la validazione storica, non il rifacimento manuale di tutti i nodi. Le scadenze reali dipendono da quante identità e relazioni richiedono riscontro; non è fondata una stima precisa ora.

### Modifiche e link
- `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`: commit `737464b62de7c4511cf6759d9e28eaba7788eda6`.
- `PREVIEW_RADICATA_CHECKPOINT06.html`: import read-only e selettori prioritari, commit `184a6d68efa0e315d91e242a860599963c6aae4e`; segnalazione del diverso livello delle prove, commit `4690d781f80b92241aee521fe18b7199216b4c44`; schede senza doppia nota, commit `7baa3c226febfc6121672db6416c94cc0f47e4ad`.
- `compat-graph-checkpoint08.js`: etichetta di categoria `Genere o forma` su hover, commit `8fe10efcb5dbbf8c95b4e3a9fe8fba591f984352`.
- `TEST_GENERI_FORME_CHECKPOINT11.cjs`: commit `7c68d416bd14f03b9385a50909e77c81fd5b6a8f`.

**Anteprima con parametro anticache:**
https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=generiforme11-20261109

**Produzione intatta:** `musurgia-atlantis/index.html`, `musurgia-atlantis/grafo.json`, `musurgia-atlantis/compat-graph.js`, `atlante3d/database/grafo.json`, `atlante3d/database/relazioni.json` e i capitoli narrativi NON sono stati modificati.

**Prossima ripresa:** visualizzare la pagina con dati reali e verificare browser/Android, completare gli abbinamenti identitari con i 162 match e altri candidati documentati nello staging, raffinare con gli archi specialistici senza confondere relazioni equivalenti/parallele, quindi progettare un gate per la fusione ufficiale.
