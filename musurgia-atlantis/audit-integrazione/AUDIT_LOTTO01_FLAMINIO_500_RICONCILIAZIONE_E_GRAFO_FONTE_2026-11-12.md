# Musurgia Atlantis — Lotto Flaminio 01/15: 500 record con guida, audit di riconciliazione e grafo di fonte

**Data:** 12 novembre 2026. **Ambito:** le **prime 500 righe dotate di URL di spiegazione** nell'ordine originale `compositori_flaminio.xlsx` (posizioni 1–500 della popolazione selezionata di 7.412), corrispondenti alle righe Excel 78–4743. **Stato:** `APERTO — GRAFO DI FONTE PRONTO, GRAFO STORICO NON CERTIFICATO`.

## 1. Cosa è stato realmente eseguito

- Riletto il CSV originale **500/500** già committato `FLAMINIO_LINKATI_LOTTO01_500_RECORD_RAW_2026-11-12.csv` e preservati ID `flaminio:excel:<riga>`, autore fonte, rubrica letterale, numero, anno, brano, parte, descrizione completa, URL guida e posizione.
- **494 URL distinti** per le 500 schede; **6 URL** condivisi da due record ciascuno (**12 righe**). Non fonderli solo perché condividono la guida: potrebbe essere uno stesso ciclo, raccolta o guida multiopera.
- Esaminati **23 manifesti/overlay** caricati dalla preview federata; riscontri **esatti** via riga Excel o URL guida su **92/500** record. Conservati i testimoni per file in tre shard `CROSSWALK_LOTTO01_500_OVERLAY_SHARD01/02/03_2026-11-12.json`. **408/500** senza match esatto in questi manifesti: non sono 408 opere assenti, né 408 opere nuove.
- Letto il grafo Atlantis originale `grafo.json` SHA `4863b3fe263154387de3388c0b813b5f94546f12` (754 nodi, 1.718 archi) per il solo confronto esatto dei nomi d'autore. **5 intestazioni su 10** si riconciliano nominalmente in modo univoco con ID persona esistenti: Bach J.S., Bartók, Beethoven, Albéniz, Alfano. Non attribuire automaticamente le altre 5 persone in base a cognomi simili o fonti non verificate.
- Creato `AUDIT_IDENTITA_LOTTO01_500_RECORD_FEDERAZIONE_2026-11-12.json`: **500 schede individuali** con riferimenti allo staging, segnali editoriali e gate storici espliciti.

## 2. Distinzioni d'identità che impediscono deduplicazioni cieche

- **12 righe** condividono la stessa guida: sei coppie, non sei opere accertate.
- **89 righe** appartengono a gruppi con uguale autore, numero e titolo normalizzati, spesso raccolte con più schede. È un flag di controllo, **non** una quantità di record doppi. Esempi nel lotto: Beethoven op.108 (quattro righe), WoO155 (quattro), BWV968 *Adagio in sol maggiore* (due).
- **4 record** non hanno un numero originario di catalogo; non usare la riga Excel come numero d'opera.
- **Correttivo semantico importante:** un primo filtro lessicale aveva segnalato 71 presunti problemi di attribuzione; **36 erano falsi positivi**, perché la formula `Testo: autore ignoto` riguarda l'autore del **testo poetico/libretto**, non la musica. Il filtro è stato corretto in entrambi i registri e nella rappresentazione grafica; **35 schede** mantengono un richiamo da verificare su effettiva attribuzione musicale (fra gli esempi BWV189, BWV53, BWV209, BWV230, alcune opere organistiche e cameristiche). Nessuna di queste 35 schede è stata promossa automaticamente come composizione certa del nome sotto cui appare nel catalogo.

## 3. Grafo sorgente aggiuntivo, distinto dalla rete storica

Creato `GRAFO_FONTE_FLAMINIO_LOTTO01_500_2026-11-12.json`: **574 nodi** (500 schede, 10 intestazioni autore, 64 rubriche originali) e **1.000 archi puramente documentari**:
- 500 archi `intestazione_catalogo_indica_autore`;
- 500 archi `rubrica_editoriale_flaminio`.

Questi archi dimostrano esclusivamente **cosa dice l'Excel**, non che l'autore sia autentico o la rubrica sia un genere storico canonico. Non sono stati creati 500 nodi `opera` e non si è inventata alcuna appartenenza musicale per la sola rubrica; i riferimenti agli overlay esistenti restano proprietà dei record, senza merge automatico.

Pagina di ispezione `VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_500_2026-11-12.html`, con renderer Canvas 2D a proiezione tridimensionale già presente nello staging, ricerca per riga/titolo/numero, filtro autore, selezione nodo e arco, scheda fonte con link guida, hook read-only per controlli futuri. URL destinato a GitHub Pages: https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_500_2026-11-12.html .

**Non dichiarare la pagina già certificata in browser:** il suo codice JavaScript è stato parsato dal motore V8; nessun browser desktop o Android reale è stato eseguito sul file distribuito e nessuna verifica pixel/leggibilità o selezione fisica 500/500 è stata effettuata. L'anteprima di fonte è una preparazione al collaudo, **non la promozione nel grafo Atlantis**.

## 4. Esiti regressione eseguita

`REGRESSIONE_LOTTO01_500_INTEGRITA_FONTE_2026-11-12.json` (ultimo commit `60e1f8a6489eed6f2e406a70337d71492b9b2902`) segnala `PASS_SOURCE_INTEGRITY_ONLY`:
- 500 record e 500 nodi di fonte coerenti con le schede;
- 0 ID nodo ripetuti, 0 ID arco ripetuti, 0 archi orfani;
- 92 record con evidenze esatte in overlay, 408 senza evidenza esatta;
- 500/500 flag di scheda coerenti fra JSON di audit e grafo;
- parsing della sintassi JavaScript della pagina: PASS;
- grafo di produzione `musurgia-atlantis/grafo.json` e `index.html` non modificati.

**Non superati perché non eseguiti:** verifica sostanziale online di ogni guida Flaminio, identificazione opera/movimento/raccolta/versione per 500 schede, fonte critica indipendente per 35 attribuzioni, relazione canonica autore-opera-genere, controllo grafico in browser del grafo federato, regressione del database finale. Nessun lotto è dunque chiuso.

## 5. Ordine di avanzamento obbligatorio, senza aprire il Lotto 02

1. Esaminare prima i **35** casi attributivi veri, le **6 coppie** di URL condiviso e gli **89 record** coinvolti nelle identità titolo/numero ripetute, distinguendo testo, musica, opera, parte e versione.
2. Per tutte le 500 righe, associare una sola entità storica esistente o crearla solo dopo riscontri; mantenere `HOLD` giustificati ispezionabili quando occorre. Ricercare anche nei repertori federati prima di creare duplicati.
3. Certificare **autore–opera, opera–genere/forma e legami specifici fra opere** con fonti direzionali e tassonomia al singolare; non trasformare le rubriche Flaminio in ontologia senza audit.
4. Integrare nel grafo persistente di prova senza cancellare nodi, archi, ancore, note, fonti e attributi dei 210 lotti storici.
5. Eseguire collaudo del grafo storico effettivamente pubblicato, **500/500 record rintracciabili** nella visualizzazione e zero regressioni; chiudere `Lotto 01` solo a questo punto. Il precedente collaudo della sola sorgente non è sufficiente.

**Regola utente vincolante:** lavorare soltanto su 7.412 record con guida, in 14 lotti da 500 e uno da 412; rimandare i 44.738 senza guida. **Lotti conclusi: 0/15.**

### Addendum — test funzionale del codice della vista, ambiente simulato

È stato **eseguito il codice JavaScript effettivamente pubblicato nella pagina di staging**, con un DOM simulato, `fetch` alimentato dal grafo JSON originale pubblicato e motore grafico compatibile simulato. Risultato `PASS_SIMULATED_DOM_ONLY`: **500/500 schede richiamate per la loro riga Excel e scheda dettagli aperta**, **10/10 filtri autore**, 5 ricerche campione e 10 callback di scheda arco, tutti senza errori. Rapporto `REGRESSIONE_LOGICA_VISTA_LOTTO01_500_2026-11-12.json`, commit `7553f577fd0aa1774c472624dc147ef446101a1e`.

**Qualifica rigorosa:** non è stato avviato il browser Chromium reale sulla pagina pubblicata; il renderer grafico e le sue geometrie di disegno sono simulati. Quindi la selezionabilità logica 500/500 NON certifica la leggibilità delle etichette, le interazioni reali, la rete, il pinch Android o l'integrazione delle 500 identità nella vista storica Atlantis. Il lotto resta `APERTO`.
