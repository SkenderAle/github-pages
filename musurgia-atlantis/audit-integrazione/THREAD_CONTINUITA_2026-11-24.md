# THREAD DI CONTINUITÀ — Musurgia Mundi / Atlantis / Flaminio
## Checkpoint operativo del 24 novembre 2026

Repository: `SkenderAle/github-pages`, branch `main`.
Ultimo commit individuato prima di questo checkpoint: [51d845c](https://github.com/SkenderAle/github-pages/commit/51d845c3449e39a2d5075d189095da38fb0c5d2f).

**FASE 1 OPEN — LOTTO 2 FLAMINIO BLOCKED — PRODUZIONE INVARIATA.**

### Continuità e vincoli
- Leggere il [thread precedente del 18–23 novembre](THREAD_CONTINUITA_2026-11-18.md) e conservare il [thread storico dell'8 novembre](THREAD_CONTINUITA_2026-11-08.md), inclusi i 210 lotti documentati. Questo checkpoint li integra, non li sostituisce.
- Unificare Mundi, Atlantis e Flaminio preservando ogni origine; non fondere per somiglianza nominale. 500 schede fonte non equivalgono a 500 opere certificate.
- Lavorare esclusivamente in audit-integrazione; non modificare atlante3d/database/grafo.json, musurgia-atlantis/grafo.json, musurgia-atlantis/index.html.
- Navigazione radicata, no ereditarietà indiscriminata del repertorio; preservare predicati, direzione, provenienza, qualità, filtri, profondità e breadcrumb.
- Distinguere genere, forma, funzione, organico, opera, movimento, raccolta, versione, adattamento, produzione e documento. HOLD non equivale a errore.

### Stato verificato nei rapporti del repository
Il gate del 24/11 documenta esecuzione in V8 con I/O virtualizzato del builder e della proiezione reale su 17 JSON: 2.897 nodi, 8.743 archi, 500 schede Flaminio, 162 identità personali e 21 tassonomiche, zero archi orfani, zero ID arco duplicati, zero schede fonte mancanti. 169 radici, zero errori di proiezione. Non equivale a Node CLI o browser reale.
Rispetto al registro 21/11: 704 → 647 occorrenze radice–arco archiviate; persone 531 → 475; opere 4 → 3; zero nuove esclusioni. 57 recuperi: 16 autorialità, 8 ruoli letterari, 15 scenici/storici (inclusi Hilverding e Molière), 13 storici Mundi, 4 prassi Atlantis, 1 opera-esempio Gabrieli. Residui: 475 persone, 33 generi/forme, 49 capitoli, 4 eventi, 39 concetti, 3 opere, 44 reti culturali.
Le 475 persone comprendono 382 rapporti Mundi storici, 85 dei 89 rapporti autore–genere e 8 accessi editoriali deliberatamente archiviati. Non promuovere in blocco i 647.

### Interventi 24/11 e documenti
- [Inventario 133 persone e 4 opere](AUDIT_RESIDUI_133_PERSONE_4_OPERE_2026-11-24.md).
- [Gabrieli](AUDIT_SONATA_GABRIELI_CORREZIONE_2026-11-24.md), f41ebca: L07-A050 recuperato come esempio storico. Tre confronti non causali restano archivistici.
- [21 ruoli contestuali](AUDIT_RUOLI_CONTESTUALI_2026-11-24.md), b7d11ba: poeta, librettista, coreografo, committente, direttore, ecc. non compositore.
- [13 relazioni storiche](AUDIT_RELAZIONI_STORICHE_13_2026-11-24.md), faaf0ee: Bach–Telemann/Kuhnau, dieci persone del Madrigale, Merulo–Toccata.
- [89 rapporti autore–genere](AUDIT_89_AUTORI_GENERI_2026-11-24.md): 83 coppie, sei coppie con doppia attestazione distinta; nessuna fusione automatica.
- [Quattro rapporti recuperati](AUDIT_4_RAPPORTI_AUTORE_GENERE_2026-11-24.md), 4fa2900: Lully–Comédie-ballet, Rameau–Opéra-ballet, Frescobaldi e Bach–Ricercare. Restano 85 da valutare, di cui 7 con qualità opera-verificata-in-catalogo e 78 ulteriori.
- [Otto accessi derivati e due ruoli di genere](AUDIT_8_ACCESSI_DERIVATI_2_RUOLI_GENERE_2026-11-24.md), e1258a6: otto archiviati per scelta; Hilverding e Molière navigabili con predicato storico.
- [Regressione reale 17 sorgenti](REGRESSIONE_17_SORGENTI_POST_CORREZIONI_2026-11-24.md): dieci percorsi campione PASS V8.
- [Riconciliazione finale 169 radici](AUDIT_169_RADICI_RICONCILIAZIONE_FINALE_2026-11-24.md): corretta la categoria eventi per le produzioni, e12af30; test e34ec18; otto ruoli di produzione recuperati. Gate reale 647/475/3.
- [Audit Bach](AUDIT_BACH_355_OPERE_E_DOCUMENTI_2026-11-24.md) e [registro 355 percorsi](AUDIT_BACH_355_PERCORSI_FONTE_2026-11-24.json): 469 nodi a profondità 5, 355 categoria opere (269 attribuzioni dirette, 2 azioni non autoriali, 84 percorsi indiretti, di cui 72 documentari/raccolte/versioni e 12 da interpretare). Zero attribuzioni compositive esplicite ad altri autori rilevate; non certifica tutte le paternità né 355 opere autonome.

### Ripresa operativa — ordine raccomandato
1. Verificare HEAD e diff rispetto al checkpoint; non ripetere i recuperi già eseguiti. Primo nodo di lavoro: distinguere nella vista Bach opere candidate/attestate, parti/versioni, raccolte, riusi/trascrizioni e riferimenti documentari, esaminando i 12 percorsi indiretti ancora da interpretare. Mantenere la provenienza e nessuna promozione automatica.
2. Eseguire realmente la suite Node CLI storica e nuova sulle 17 sorgenti (in particolare TEST_BACH_355_PERCORSI_FONTE_2026-11-24.mjs, TEST_169_RADICI_POST_CORREZIONI_2026-11-24.mjs, test ruoli, relazioni storiche, Gabrieli, quattro rapporti e due ruoli genere). Aggiornare aspettative obsolete solo dopo confronto motivato dei risultati; registrare log, ambiente, commit e regressioni. Se ambiente indisponibile, dichiararlo.
3. Valutare gli 85 rapporti autore–genere residui e le sei coppie ripetute conservando attestazioni e predicati, quindi le altre famiglie archiviate. Ricertificazione esterna distinta dalla lettura delle qualità già registrate.
4. Collaudo desktop e Android DOM/WebGL/Canvas: filtri, lenti, profondità, hover/tap, click/focus, etichette e prestazioni. Ripetere gate strutturali e 169 radici dopo ogni modifica pertinente.
5. Solo dopo verifica complessiva e decisione esplicita dell'utente valutare produzione e Lotto 2. Non importare altri 500 file ora.

### File operativi
- [Builder](DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs)
- [Viewer staging](VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html)
- [Registro overlay](REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json)

### Protocollo obbligatorio di continuità
Aggiornare il thread di continuità dopo OGNI lotto concluso, anche quando il messaggio dell'utente è soltanto «avanti». Registrare commit, file, esiti realmente eseguiti, limiti, conteggi e prossimo passo. Non dichiarare PASS di test semplicemente predisposti. Restituire sempre il link stabile a questo thread nella risposta; se un nuovo checkpoint viene creato, aggiornare anche il link stabile. Questo checkpoint è una ricostruzione documentale dei rapporti GitHub, non una nuova esecuzione dei test.

**Fase 1 OPEN; Lotto 2 BLOCKED; nessuna pubblicazione.**


### Avanzamento 25 novembre — tipologie delle opere nello staging
Commit [35d034a](https://github.com/SkenderAle/github-pages/commit/35d034afcb1a03853ed89973131988847749ed1e): modificato esclusivamente `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`. Classificazione di presentazione da categorie originali e predicati incidenti: opera/riferimento, raccolta, versione/redazione, frammento/parte, trascrizione/rielaborazione, riferimento documentario; qualità non canonica esplicitata. Colore e tooltip, dettagli ed elenco dei nodi; conteggio categoria opere non equivalente a composizioni autonome. Nessuna modifica di builder, archi o traversal. Controllo sintattico PASS in wrapper async V8 senza import; test mirato PASS su fixture ricostruita dai 12 record reali del registro: 3 versioni, 5 corali rielaborati, 1 opera BWV 137, 2 frammenti, 1 riferimento BWV 1044; tutti non canonici. La fixture usa direzione di percorso, non sostituisce gli archi reali; il primo tentativo classificava erroneamente BWV 137 come trascrizione, corretto prima del commit. Non eseguiti builder completo, Node CLI, DOM/WebGL/Canvas o Android. Prossimo gate: test classificatore sui nodi e archi reali delle 17 sorgenti, controllo qualità e precedenze delle categorie, verificare colori/tooltip nei due renderer, aggiungere legenda effettiva e ripetere 169 radici. Fase 1 OPEN, Lotto 2 BLOCKED, produzione invariata.


### Avanzamento 25 novembre — gate reale post classificazione
Rieseguito in V8 il builder del commit d57b1b549c151e7eab930c0851be0e7bb09ad3d5 con tutti i 17 JSON acquisiti integralmente per SHA blob GitHub. 2897 nodi, 8743 archi, 500 schede fonte univoche, 0 mancanti, 0 orfani, 0 ID arco duplicati. Classificatore effettivo del viewer applicato a tutti gli 837 nodi categoria opere: 696 opera/riferimento, 17 versione, 45 raccolta, 72 riferimento documentario, 5 trascrizione, 2 frammento. I 12 casi Bach classificati correttamente sui nodi e archi effettivi, tutti non canonici. Gate radici rieseguito in V8 con proiezione reale estratta dal viewer, stesso stub delle lenti della suite storica: 169 radici, 57 recuperi, 647 occorrenze archiviate (475 persone, 33 generi/forme, 49 capitoli, 4 eventi, 39 concetti, 3 opere, 44 reti culturali), 0 nuove esclusioni, 8/8 ruoli di produzione visibili. Bach 469 nodi/470 archi. Nessun test browser o Node CLI eseguito; classificazione globale automatica, non validazione musicologica individuale. Nessuna modifica al viewer o ai dati in questo passaggio. Prossimo: legenda effettiva, audit dei tipi di fonte (incluse categorie parte-di-opera), test DOM/WebGL/Canvas e Android, poi 85 rapporti autore-genere residui. Fase 1 OPEN, Lotto 2 BLOCKED.


### Avanzamento 25 novembre — legenda e correzione tipologie
Commit [038d204](https://github.com/SkenderAle/github-pages/commit/038d204b26f7dd92354382c5a223d55f762419ae), solo viewer staging. Legenda espandibile con sette tipologie; 73 riclassificazioni derivate dalle categorie fonte e cinque segnalazioni di attribuzione sospesa/dubbia. Sintassi wrapper async PASS; 14 casi mirati PASS. Rieseguito realmente builder V8 con 17 JSON originali via blob SHA: 2897 nodi, 8743 archi. Classificatore su 837 nodi opere: 673 opera/riferimento, 21 versioni, 61 parti/frammenti/variazioni, 42 raccolte, 12 trascrizioni/rielaborazioni, 26 riferimenti documentari, 2 temi musicali. Cinque attribuzioni segnalate: BWV 968, BWV 1070, già BWV 53, Non sa che sia dolore, Aria in fa maggiore. Regressione 169 radici: 57 recuperi, 647 archiviate, 0 nuove esclusioni, Bach 469/470. Nessun nuovo giudizio musicologico esterno; DOM/WebGL/Canvas, Android e Node CLI non collaudati. Prossimo: verificare resa effettiva della legenda e dei tooltip nei renderer, poi audit 85 rapporti autore-genere residui. Fase 1 OPEN, Lotto 2 BLOCKED, produzione invariata.
