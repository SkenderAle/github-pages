# MUSURGIA ATLANTIS — PROTOCOLLO DB-FIRST
## Decisione del 12 novembre 2026: completare e verificare il corpus prima del collaudo GUI

**Decisione esplicita dell'utente:** sospendere la sequenza di checkpoint incentrati su browser, Canvas, WebGL e Android. La priorità assoluta è costruire un patrimonio di record e relazioni quanto più possibile completo e verificato nel corpus dichiarato. I test dell'interfaccia torneranno **dopo** i gate catalografici, non a ogni nuovo lotto.

**Effetto operativo immediato:** il precedentemente previsto `52M — browser/Android` viene **rinviato senza data** e sostituito da `52M — ricognizione lacune DB-first`. Conservare i correttivi GUI dei checkpoint 52K–52L nello staging, senza ulteriori cicli di collaudo ordinari. Non toccare `musurgia-atlantis/grafo.json` o `index.html` pubblici durante la verifica delle identità.

## 1. Definizione rigorosa del corpus
La completezza è misurabile **rispetto alle fonti acquisite** e ai loro record, non rispetto a tutta la storia della musica.

Per ogni fonte, distinguere:
- **riga/testimone di catalogo** (record documentario originale, sempre conservato);
- **persona** (identità con alias e opere attribuite/contestate);
- **opera unitaria** (identificativo canonico, NON uguale automaticamente alla riga fonte);
- **raccolta/ciclo**, **parte/movimento**, **versione/trascrizione** (entità diverse se documentate);
- **genere, forma, sottogenere, organico, funzione** (faccette non necessariamente mutuamente esclusive);
- **relazione** con direzione, tipo, fonte, spiegazione, attendibilità e stato.

Fonti di lavoro: Flaminio e `compositori_flaminio.xlsx`, Atlante 3D Musurgia Mundi con archivio relazioni/fonte, Atlantis storico-filologico e i manifesti di staging; conservare i 210 lotti di audit storico.

## 2. Regole di identità e tassonomia
- Chiave di identità candidata: compositore/attribuzione + **namespace del catalogo** + numero (maiuscole/minuscole significative ove pertinenti) + titolo/incipit + parte/numero interno + versione + fonte. **Mai** `compositore+numero` o `titolo` da soli.
- I plurali delle forme si normalizzano al **singolare** (Concerto, Sonata, Lied, Quartetto). Conservare inalterate le diciture originali come alias/source labels.
- Usare gerarchie intermedie **reali**: Sonata → Sonata per pianoforte → composizione; Concerto → sottogenere attestato → concerto singolo, quando pertinente. Il gruppo di opere dei sei Brandeburghesi non equivale a sei record fusi; `Concerto brandeburghese` è il sottogenere specifico deliberato.
- Un'opera può appartenere a **più** generi e forme, se esistono prove per ciascuno. Non sostituire il collegamento all'opera con una mera etichetta nel pannello.
- Il ciclo **autore → opera → genere → autore** deve essere verificabile; l'eventuale arco riassuntivo autore↔genere è una relazione derivata dichiarata e tracciabile a opere specifiche, **non** una licenza per inferire conoscenze fra due compositori o attraversare indiscriminatamente le tassonomie.
- Le classificazioni di genere non propagano automaticamente una paternità o un'attribuzione. I capitoli editoriali restano separati dai nodi storico-musicali.

## 3. Stato di ogni evidenza
Ogni record/arco conserva `source_id`, `source_row`/URL, payload raw, riferimenti incrociati, data/revisione e `status`:
- `raw_unreviewed`: acquisito, non ancora valutato;
- `identity_candidate`: corrispondenza proposta, ancora aperta;
- `source_attested`: presente in una fonte catalografica, ma non indipendentemente certificato;
- `independently_verified`: identificazione e relazione specifica verificate con riscontro indipendente adeguato;
- `hold`: identità, attribuzione, forma o legame controverso/non risolto;
- `not_applicable_or_editorial`: rubrica, titolo redazionale o voce non assimilabile a opera.

I record HOLD **non** devono essere cancellati, né trasformati in archi certificati. Una correzione di attribuzione non elimina la testimonianza errata originaria. Distinguere rigorosamente `verificato`, `attestato`, `candidato`, `sospeso`, `mancante`.

## 4. Audit operativo a blocchi sostanziosi
**Fase A — Copertura e provenienza.** Inventario di tutti i record sorgente (inclusi i 52.150 Flaminio) e dei lotti già elaborati: ID fonte stabili, copertura per autore, rubrica, opera, raccolta/versione, URL e checksum. Ricostruire una sola coda delle righe NON risolte, deduplicando il lavoro svolto.

**Fase B — Identità.** Crosswalk Flaminio↔Atlantis↔Musurgia Mundi, con sospensioni per omonimie, numerazioni ambigue, varianti, raccolte e parti. Non creare doppioni di opere già presenti.

**Fase C — Certificazione storica e tassonomica.** Fonti autorevoli e livello delle prove per compositori, attribuzioni e singole opere. Completare gerarchie, multiappartenenze e organici e fissare il predicato preciso di ogni arco. Non ricavare la forma solo dalla presenza di una parola nel titolo.

**Fase D — Integrità dell'intero grafo dati.** Conteggio globale per entità, indici duplicati, archi orfani, versioni e movimenti, ring autore–opera–forma e gerarchie, relazioni di riuso, evidenze forward/reverse e fonti. I filtri di visualizzazione non entrano in questa fase. Audit sui record indipendente dalla rappresentazione grafica.

**Fase E — Congelamento dello snapshot dati.** Pubblicare report riproducibile: totale righe fonte, record normalizzati, identità risolte, opere singole, versioni, HOLD motivati, categorie mappate, archi verificati, archi derivati, fonti mancanti, scarti documentati e perimetro residuo. La certificazione deve dichiarare i limiti, non inventare completezza universale.

**Solo successivamente:** tornare alla GUI per filtri, resa desktop/Android, accessibilità e prestazioni. Non fare un collaudo a ogni inserimento.

## 5. Priorità catalografiche note al 52M
1. Ricostruire il crosswalk di copertura delle **52.150 righe Flaminio / 149 etichette autore**, distinguendo le **46.205 candidate documentarie** dalle **5.945 segnalate per riesame** (primo filtro automatico: nessuno di questi conteggi certifica identità d'opera). Le 11 partizioni locali complete non erano tutte state caricate su GitHub al Checkpoint31; ricontrollare la disponibilità dei bytes prima di proclamare importazione integrale.
2. Recuperare senza duplicazioni quanto già trattato nei Lotti15–51 e Checkpoint52A–52L. Non scambiare `1.390 nodi / 3.391 archi` della federazione staging con il catalogo Flaminio completo.
3. Proseguire il corpus **Bach BWV201–250**, sapendo che non sono tutte cantate; controllare versioni/riusi e il nodo genere dell'opera individuale. Persistono attribuzioni HOLD dei precedenti lotti (non promuovere BWV189 a Bach).
4. Revisione sistematica delle **132 righe Vivaldi con rubrica originariamente vuota**, delle **112 righe eccezionali** del Lotto25 e delle collisioni d'identità già rilevate nell'audit Lotto21/22. Non contare questi insiemi come disgiunti senza dedup.
5. Terminare l'audit storico persona↔persona con gate indipendente dal lavoro Flaminio; il thread ricorda uno stato storico di **74/233** al Checkpoint24, da verificare contro interventi successivi prima di assumere sia ancora attuale.

## 6. Contratto di ogni prossimo lotto
Ogni lotto successivo deve pubblicare **record reali esaminati per ID**, delta fonte→identità→archi, controlli anti-duplicato, identificativi e ragioni degli HOLD, fonti riscontrate e manifest JSON/rapporto MD. Evitare checkpoint che si limitino a modificare la visualizzazione. Aggiornare entrambi i thread di continuità, con risultato effettivo e limiti.

**Decisione vincolante:** `DB_FIRST_ACTIVE`; `GUI_TESTS_DEFERRED_UNTIL_DATA_GATE`; `NO_BLIND_MERGE`; `PRESERVE_ALL_ATTESTED_EDGES`.
