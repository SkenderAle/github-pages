# Audit della vista Bach: 355 nodi classificati come opere
## Fase 1, 24 novembre 2026 — Mundi / Atlantis / Flaminio

**Repository** `SkenderAle/github-pages`, branch `main`; nessun cambiamento ai grafi pubblici e nessuno sblocco del Lotto 2.

## Verifica realmente eseguita sulle 17 sorgenti
Sono stati recuperati i 17 JSON via blob GitHub, costruito il database unificato usando `buildUnifiedDatabase` del repository e proiettata la radice `atlantis::pers:bach` con il codice reale `rootedProjection` estratto dall'HTML di staging. Profondità 5, tutte le lenti e categorie attive.

**Il risultato di 355 «opere» è una conta di nodi categorizzati `opere`, NON una conta musicologica di 355 composizioni autonome.** Il catalogo contiene riferimenti a opere non ancora importate o non certificate, raccolte, parti, movimenti, versioni e variazioni registrate come entità di tipo `opere` nel builder.

| Percorso che rende il nodo visibile | Conteggio |
|---|---:|
| Direttamente da Bach, con predicato di attribuzione | **269** |
| Direttamente da Bach, con azione documentata non autoriale | **2** |
| Indirettamente tramite altri nodi opera/raccolta/parte | **84** |
| **Totale categoria `opere`** | **355** |

I due casi non autoriali sono il rapporto `trascrive_per_organo_bwv593` (BWV 593; riferimento a Vivaldi) e `presenta_sei_concerti_in_manoscritto_1721` (dedica del manoscritto dei Concerti brandeburghesi). Non possono essere interpretati come due nuove composizioni attribuite a Bach.

Delle 84 relazioni indirette, **72** hanno una categoria di provenienza esplicitamente documentaria/raccolta/versione e **12** sono passaggi ad altre voci `opere` o parti che richiedono interpretazione caso per caso. La profondità della vista conferma 271 voci al primo livello e 84 in successione (79 al secondo, due al terzo, due al quarto, una al quinto).

### Tipologia dei record alla fonte
Tra le etichette di provenienza compaiono: `opera_candidata` (186 occorrenze di categoria), `riferimento_a_opera_gia_nello_staging` (78), `variazione_documentaria_non_opera` (40), `opera_documentaria_fuori_sottolotto_non_certificata` (10), versioni della Johannespassion e raccolte non equivalenti a composizioni autonome. Queste etichette **non** equivalgono tutte a una verifica esterna della paternità. Non va trasformato `composizione_attribuita_a_bach` in «attribuzione storicamente certificata» solo perché l'arco è percorribile.

Il controllo delle relazioni incidenti ai 355 nodi non ha rilevato **archi di attribuzione compositiva esplicita verso persone diverse da Bach**. Questo è un risultato limitato alla logica dei predicati presenti e ai nodi attuali; non dimostra da solo la correttezza storico-filologica di ogni scheda e non esclude omonimie o altre attribuzioni controverse non codificate.

Il registro integrale, con i **355 ID, i percorsi di ingresso, i predicati, le qualità e la provenienza**, è in `AUDIT_BACH_355_PERCORSI_FONTE_2026-11-24.json`.

## Conclusioni ontologiche
1. **Opera autonoma** diversa da **movimento o variazione**; **edizione/versione** diversa da nuova opera; **raccolta** diversa da ogni elemento contenuto.
2. Il riuso o la trascrizione non implicano automaticamente la paternità della composizione originale.
3. Un record `opera_candidata` o una scheda `fuori sottolotto` mantiene il proprio gate documentario; nessuna promozione automatica solo per visibilità nella rete.
4. La vista Bach andrebbe distinta in strati: *composizioni candidate/attestate*, *versioni e parti*, *raccolte*, *riusi e trascrizioni*, *riferimenti documentari*. Questa è una proposta per il prossimo gate, non una modifica già eseguita.

## Test di regressione
Creato `TEST_BACH_355_PERCORSI_FONTE_2026-11-24.mjs`: carica le 17 sorgenti dal filesystem, riproduce la vista Bach reale, verifica conteggi 269/2/84, il percorso degli indiretti e l'assenza di attribuzioni esplicite ad altri compositori. **L'harness Node CLI è predisposto ma non eseguito in Node.** L'esecuzione del builder e della proiezione V8 in memoria è stata invece svolta con i 17 dati reali.

## Stato
- **PASS strutturale V8 con dati veri:** 355 nodi categoria opere, suddivisione 269/2/84, 0 attribuzioni autoriali esplicite verso persone differenti da Bach.
- **OPEN:** controllo musicologico su record candidati, distinguere sullo schermo entità documentarie da opere autonome, test CLI e browser/Android; ricalcolo delle viste dopo eventuali modifiche.
- **Fase 1 OPEN; Lotto 2 BLOCKED; produzione invariata.**
