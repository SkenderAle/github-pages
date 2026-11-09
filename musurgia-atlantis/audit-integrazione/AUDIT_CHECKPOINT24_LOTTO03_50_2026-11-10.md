# Checkpoint 24 — Lotto 03: 50 archi persona↔persona analizzati in blocco

**Data:** 10 novembre 2026 · **Branch:** main · **Solo staging**

## Stato numerico
Nel pool originale di **233** relazioni fra persone con ID riconciliati, il Lotto01 contava 12 archi, il Lotto02 altri 12, il presente Lotto03 **50**: **74/233 analizzati**, **159 restanti**. Sono state conservate tutte le formulazioni originali e nessun arco è entrato nella GUI.

Il file `CONVALIDA_ARCHI_FASE24_LOTTO03_50_2026-11-10.json` (commit `9e1d1b8ff2f24460e2f148218d646ec0751620c8`) contiene per ogni arco: ID, estremi originali/riconciliati, predicato, `forward` e `reverse`, note, fonti, stato pregresso, indici di provenienza, modello semantico provvisorio ed eventuali criticità.

| Classe di verifica semantica | Archi |
|---|---:|
| Rapporto personale/professionale dichiarato | 15 |
| Ricezione o trasformazione mediata da opera/evento | 29 |
| Rapporti compositi da separare in fatti specifici | 6 |
| **Totale** | **50** |

**Questa tranche svolge 50 controlli sui dati e sul significato dichiarato dei collegamenti, NON 50 certificazioni storiche indipendenti.** Sono stati corroborati esternamente due elementi specifici e **48** archi richiedono ancora confronto documentale indipendente. I gate di attraversamento radicato restano tutti chiusi.

## Sentinelle filologiche
- `fd:ms:527` Debussy→Satie: la BnF conferma che Debussy orchestrò le **Gymnopédies 1 e 3** nel 1896; è una rielaborazione di due composizioni di Satie, non l'attribuzione della musica a Debussy. Fonte: https://catalogue.bnf.fr/ark:/12148/cb39609787n
- `fd:ms:1056` Pergolesi→Stravinskij, **Pulcinella**: parte della musica era **attribuita a Pergolesi all'epoca**, ma proviene da altri autori. Non collegare genericamente tutte le sezioni del balletto a Pergolesi come autore autentico. Fonte: https://www.sco.org.uk/news/pulcinella-and-the-dangers-of-misattribution/
- Tallis→Byrd (`fd:ms:451`): tradizione didattica da valutare; collaborazione e stampa congiunta non sono prove automatiche di insegnamento diretto.
- Alessandro→Domenico Scarlatti (`fd:ms:455`): separare parentela certa e contenuto pedagogico specifico.
- Palestrina→Victoria (`fd:ms:1010`): prossimità romana e influsso stilistico NON certificano lezioni personali.
- Couperin→Ravel (`fd:ms:1057`): *Le Tombeau de Couperin* è riferimento alla tradizione, non trascrizione letterale di una composizione specifica.
- Stockhausen→Ligeti (`fd:ms:1055`): lavoro nello studio WDR non equivale da solo a rapporto maestro-allievo.
- Mahler→Schönberg (`fd:ms:1032`): distinguere sostegno personale e ricezione estetica, senza collassare due predicati.

Altri casi di catalogazione specifica conservati: Paganini/Brahms e Schumann; Frescobaldi/Bach; Debussy/Ravel; Weber/Berlioz; Händel/Beethoven; Bach/Brahms/Liszt; Mozart/Chopin; Musorgskij/Ravel (già lotto precedente) distinto da nuove rielaborazioni.

## Integrità
Dopo pubblicazione il file è stato riletto direttamente da GitHub: **10/10 test strutturali superati**, compresi 50 ID distinti, assenza di ripetizioni rispetto ai precedenti 24, tutte le due frasi/note/fonti originali presenti, gate chiusi, conteggi coerenti e riferimenti ai record della federazione. Nessun collaudo grafico/browser/Android effettuato.

## Prossimo lotto
**Lotto04 — altri 50 archi**, selezionati dai **159** ancora in sospeso. Distinguere sempre audit di integrità, corrispondenza semantica e verifica storica indipendente. Non fondere le identità, non aprire i gate e non pubblicare il grafo prima della certificazione e del collaudo.

**Produzione e 210 lotti storico-filologici immutati.**
