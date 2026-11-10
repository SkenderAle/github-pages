# Musurgia Atlantis — Lotto 16: campione ampio di 500 voci individuali del catalogo Flaminio

**Data:** 10 novembre 2026 · **Branch:** `main` · **Perimetro:** solo audit. **Nessun merge o modifica al grafo pubblico.**

## Dimensione e procedura verificata
È stato letto il file dell'utente `compositori_flaminio.xlsx` (Sheet1, colonne A–H) attraversando in streaming **52.150 righe** di dati. È stato creato un campione **sistematico stratificato di 500 voci di catalogo candidate a composizioni**, distribuito su **30 compositori** con maggior numero di righe nel catalogo: 17 voci distinte per ciascuno dei primi 29 autori e 7 per il trentesimo. All'interno di ciascun compositore le voci sono distribuite lungo il catalogo, non limitate alle prime intestazioni. Sono state escluse le **23 righe già trattate nel Lotto15** e, nel lotto corrente, non si ripetono coppie `numero_di_catalogo + titolo` per uno stesso compositore.

**Importante:** 500 voci candidate e distinte per chiave editoriale non equivalgono ancora a 500 opere autonome con identità certificate. Eventuali raccolte, parti, arie, versioni e singoli movimenti saranno risolti con un audit successivo.

## Statistiche di triage per voce
| Voce | Conteggio |
|---|---:|
| Righe Flaminio lette in scansione | 52.150 |
| Voci selezionate e registrate | **500** |
| Compositori coperti | **30** |
| Con un lemma singolare esplicito ricavabile dal titolo individuale | **119** |
| Senza un lemma sufficientemente sicuro dal solo titolo | **381** |
| Con URL individuale Flaminio | **50** |
| Senza numero di catalogo | **16** |
| Con indicazione lessicale di versione/trascrizione o rielaborazione | **10** |
| Con segnali di attribuzione o stato documentario da verificare | **3** |

Genere singolare candidato dedotto dal titolo del singolo brano, **non** dall'intestazione generale: Sonata 34, Concerto 22, Sinfonia 16, Messa 10, Trio 10, Fuga 10, Quartetto 6, Preludio 4, Salmo 4, Cantata 1, Mottetto 1, Variazione 1. **Non determinato**: 381.

Questi 119 abbinamenti sono **candidati lessicali**, non archi opera→genere già approvati. Esempio: una *Sinfonia concertante* va ulteriormente distinta per sottotipo; *Trio* può essere organico, sezione o forma storica; *Salmo* può essere il testo musicato e non necessariamente una forma univoca.

## Tracciabilità conservata per ciascuna delle 500 voci
`excel_row`, compositore e titolo letterali, intestazione `Genere/Forma` originale, `Opus/Numero`, anno scritto in fonte, colonna `Parte`, dettagli, URL di spiegazione ove presente, candidato singolare se attestato nel titolo, livello di evidenza, flag, stato di deduplicazione e due gate bloccati (creazione di nodi e archi pubblici).

### Allegati completi nell'ambiente della conversazione
- `ATLANTIS_FLAMINIO_LOTTO16_500_VOCI.csv`, 500 righe e intestazione, pronto per consultazione/tabella.
- `ATLANTIS_FLAMINIO_LOTTO16_500_VOCI.json`, 500 record strutturati, regole e statistiche.
- Script riproducibile `build_lotto16.py` nel runtime della conversazione.

**Limite di pubblicazione:** i file completi CSV/JSON sono consegnati come allegati scaricabili nella conversazione, ma **non ancora caricati integralmente nel repository**. Questo report GitHub documenta la metodologia, lo stato e i numeri. Non spacciare la registrazione del report per importazione dei 500 record nel database GitHub.

## Audit che resta da fare prima della fusione
1. Confronto automatico dei **500 titoli + compositori + numeri di catalogo** con **tutti gli ID/alias delle opere** di `musurgia-atlantis/grafo.json` e `atlante3d/database/grafo.json`. Il Lotto16 **non** certifica questa deduplicazione globale: per ogni riga il campo `dedup_against_existing_atlantis=pending_global_match`.
2. Distinzione opera completa / raccolta / movimento / numero d'opera / testo liturgico / trascrizione / versione, prima di classificare.
3. Revisione delle 381 denominazioni senza forma esplicita attraverso le intestazioni normalizzate del crosswalk dei 1.167 generi e la documentazione della specifica opera, senza applicare indiscriminatamente tutte le forme di una categoria editoriale.
4. Validazione storica indipendente dei 119 lemmi candidati e delle tre attribuzioni/stati da approfondire.
5. Test radicati: un compositore deve condurre alle sue opere e forme, non a tutti i compositori che condividono le stesse forme.

Il Checkpoint27 continua a custodire i sei Brandeburghesi come sei lavori distinti. L'audit storico persona↔persona Checkpoint24 resta separatamente a **74/233** archi. I 210 lotti storici e i due grafi pubblici restano invariati.
