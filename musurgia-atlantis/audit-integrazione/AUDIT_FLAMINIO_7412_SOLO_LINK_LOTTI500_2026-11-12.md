# Musurgia Atlantis — nuova priorità vincolante Flaminio: 7.412 schede con link e lotti da 500

**Data:** 12 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main`.

## Decisione editoriale, immediatamente operativa

**Trattare SOLO le 7.412 righe del catalogo Flaminio con `Link spiegazione` non vuoto.** Differire le altre **44.738 righe** fino alla chiusura di tutti i lotti prioritari. Un record sorgente non equivale necessariamente a un'opera autonoma: la sua identità dipende da compositore, sistema di numerazione, opera, raccolta, parte/versione e documentazione. I **7.137 URL distinti** non sono 7.137 record: si mantengono **7.412 identificativi di riga**, anche quando URL o titoli sono condivisi.

**Lavorare sequenzialmente in 15 lotti:** 14 da 500 e uno da 412. **NON APRIRE il lotto seguente finché quello corrente non è certificato e verificato nella visualizzazione grafica**, senza eccezioni di comodità operativa.

Ogni lotto ha due lavori inseparabili:
1. **Dati**: importare nel database federato le identità senza doppioni e le relazioni storicamente sostenute (autori, opere, forme, generi, parentela opera/raccolta, versioni, movimenti, riusi, fonti), preservando titolo, catalogo e URL originali; trattenere HOLD per attribuzioni non risolte senza inventare archi.
2. **Grafo**: testare che **500/500 record sorgente** abbiano un collegamento consultabile alla scheda sorgente dal nodo corretto o da una scheda di HOLD esplicitamente reperibile; controllare autore–opera–genere e sottogeneri dove attestati, almeno ricerca radice, visibilità dell'arco, spiegazione e fonte. Eseguire un collaudo vero dell'applicazione grafica, oltre ai test JSON. Se un caso è anomalo, correggere o marcare HOLD prima di dichiarare chiuso il lotto.

Questo **sostituisce la sospensione generale GUI del Checkpoint53A**: non si tornerà a sviluppare filtri o migliorie estetiche indipendenti, **ma il controllo grafico è ora obbligatorio alla chiusura di ogni lotto**. Nessun test Android/desktop ridondante come attività autonoma: i test visuali servono solo alla certificazione dei record realmente importati.

## Prova di selezione dal file originale

Riaperto con lettura diretta `compositori_flaminio.xlsx` (`Sheet1!A1:H52151`, file 4.741.411 byte, SHA-256 `10dce565f52d94518ed4ae2df4f1b1707245e1592e1bac6f4a4b6d5e5374fba0`).
Verificati **52.150 record** in A:H, **7.412** con link non vuoto nella colonna H, **7.137** stringhe URL diverse, **0 URL fuori dal dominio flaminioonline.it**, **15 lotti**.
Il filtro è ordinato per **numero della riga Excel crescente**; i 500 di un lotto sono le successive 500 righe *con link*, NON 500 righe contigue nel workbook.

### Partizione permanente

| Lotto | Posizioni filtrate | Record | URL distinti | Righe Excel estremali |
|---|---:|---:|---:|---:|
| 01 | 1–500 | 500 | 494 | 78–4743 |
| 02 | 501–1000 | 500 | 496 | 4747–6789 |
| 03 | 1001–1500 | 500 | 441 | 6792–8823 |
| 04 | 1501–2000 | 500 | 498 | 8824–13353 |
| 05 | 2001–2500 | 500 | 381 | 13361–15887 |
| 06 | 2501–3000 | 500 | 497 | 15888–22484 |
| 07 | 3001–3500 | 500 | 472 | 22487–27096 |
| 08 | 3501–4000 | 500 | 499 | 27106–28495 |
| 09 | 4001–4500 | 500 | 490 | 28496–34373 |
| 10 | 4501–5000 | 500 | 500 | 34374–36981 |
| 11 | 5001–5500 | 500 | 496 | 36990–39601 |
| 12 | 5501–6000 | 500 | 500 | 39603–44713 |
| 13 | 6001–6500 | 500 | 492 | 44715–45887 |
| 14 | 6501–7000 | 500 | 478 | 45888–48272 |
| 15 | 7001–7412 | 412 | 408 | 48274–52115 |

## Lotto 01 — 500 schede di fonte estratte, NON ancora chiuse

**File integrale raw pubblicato in GitHub:** `FLAMINIO_LINKATI_LOTTO01_500_RECORD_RAW_2026-11-12.csv`, commit `3ed82372913abfa489f113df40b07b7cbf6dd826`: sono incluse **esattamente le posizioni 1–500** con le otto colonne originali, `riga_excel`, `posizione_linkati`, `id_sorgente` `flaminio:excel:<riga>`, numero lotto e stato **`SORGENTE_ESTRATTA_DA_VERIFICARE`**. Nessun record senza URL. Le righe source iniziale/finale sono **78 e 4743**.

Il lotto tocca **10 compositori**: Bach JS 312; Bartók 43; Alfano 41; Beethoven 41; CPE Bach 22; Albinoni 20; Barber 12; Amy Beach 5; Albéniz 3; JCF Bach 1. Include **500 schede, 494 URL distinti e 6 URL ciascuno condiviso da due schede**: non eliminare schede duplicate solo perché condividono URL. Inoltre **4** righe non hanno numero catalografico, **26** non hanno anno, **498** non hanno campo `Parte` (campo assente non prova che non vi siano movimenti nelle note). Le chiavi autore+numero+titolo si ripetono in taluni casi per brani o guide di raccolte, in particolare Beethoven `op. 108`, `WoO 155`, `op. 83`, `op. 52`, e Bach `968`; distinguere parti, studi e varianti.

**IMPORTANTE:** la pubblicazione del CSV **non è un'integrazione nel DB definitivo** e non supera il gate visivo. `Lotto 01 = APERTO`, `0/15 lotti chiusi`, `0/7.412 record certificati da questa nuova procedura`. Non modificato `grafo.json` né `index.html` pubblico, nessun record dichiarato verificato solo perché estratto.

## Gate di chiusura del lotto

Ogni riga del lotto deve avere record fonte preservato, URL controllato con esito specifico (valido/mismatched/irraggiungibile), `source_row → opera/raccolta/parte/versione`, alias e codici documentati, relazioni fondate e fonti, collegamenti alla visualizzazione da ricerca/radice. Le eccezioni attributive/filologiche possono restare **HOLD espliciti con nota fonte** e visualizzazione distinta, mai come falsa paternità.

Ogni chiusura deve avere:
- manifest dei **500/500 record** e loro status, dei link e dei grafi federati modificati;
- **regressione completa** (nessun ID duplicato, arco orfano, attribuzione indebita, perdita di note o collegamenti preesistenti);
- prova grafica con **500/500 record consultabili**, relazione storica visualizzata corretta o HOLD evidente, **test realmente eseguito nel browser** su un campione rappresentativo delle categorie;
- hash/commit GitHub della versione certificata e report delle anomalie risolte.

Fino a quel momento il lotto resta **APERTO** e non si passa al numero 02. Lo stato tecnico ufficiale è in `PROTOCOLLO_FLAMINIO_7412_LINKATI_LOTTI500_2026-11-12.json` (commit `d1c6257114a9ab44aaf2bdb303deca1f41a7a375`).

### Vincoli permanenti

Il progetto preesistente con i suoi lotti e fonti storiche **resta interamente conservato**; la regola "solo 7.412" restringe l'attività **sulle righe Flaminio**, non permette di rimuovere persone/opere/archi di Musurgia Mundi e Atlantis. Il Checkpoint53A BWV201–250 è solo precedente materiale di riferimento: elaborare ora esclusivamente gli eventuali record BWV **che compaiono nel filtro con URL**. Gli altri record BWV vanno differiti. Non costruire relazioni fra compositori attraverso generi o epoche condivisi; la completezza va verificata sui dati, non ottenuta con collegamenti ipotetici.
