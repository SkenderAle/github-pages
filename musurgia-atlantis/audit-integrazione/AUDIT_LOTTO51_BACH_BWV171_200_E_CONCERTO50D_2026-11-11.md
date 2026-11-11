# Musurgia Atlantis — Lotto 51 e correttivo Concerto 50D

**Data:** 11 novembre 2026  
**Branch:** `main`  
**Perimetro modificato:** `musurgia-atlantis/audit-integrazione/` soltanto.  
**Non modificati:** `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html`.

## A. Correttivo della GUI — Concerto grosso

Nelle schermate segnalate dall'utente la famiglia `Concerto` perdeva archi evidenti e la radice `Concerto per violino` mostrava il macrogenere scollegato. Il precedente correttivo **50C** ripristinava il collegamento `Concerto per violino → Concerto solistico → Concerto` e la rete completa documentata dei compositori, ma restava da verificare il caso **`Concerto grosso`** quando selezionato direttamente.

La radice `Concerto grosso` era intercettata da `getRootedPreview39()` e `attachConcertoFamily()`, ma la successiva `attachConcerto40()` non riconosceva il tipo *sottogenere legacy autonomo*. La conseguenza era la visualizzazione parziale dei suoi compositori, anche quando i 5 archi nel repertorio legacy esistevano.

**Correzione pubblicata:** `attachConcerto40()` riconosce ora anche i nodi `legacy:gf:forma-concerto-*` registrati nella tassonomia esistente. Mostra entrambi i legami parentali consentiti dal database:
- `Concerto grosso → Concerto` (`audit:gf25:tax:01`);
- `Concerto grosso → Concerto di gruppo` (`audit:gf25:tax:09`);
- `Concerto di gruppo → Concerto` (`audit:gf25:tax:02`).

Conserva gli archi ai compositori **Corelli, Vivaldi, Händel, Alessandro Scarlatti e J. S. Bach**, tutti attestati dal vecchio overlay di generi-forme. Non sono inferiti rapporti personali fra i cinque autori. Altre forme legacy ricevono lo stesso trattamento dei genitori, senza trasformare l'intera categoria in un ponte causale.

**Esito reale di test** sul `grafo.json` (754 nodi/1.718 archi), i 50 nodi/271 archi legacy e gli overlay Concerto autentici:
- `Concerto`: **78 nodi, 179 archi**, 20 autori, 44 opere catalogate;
- `Concerto per violino`: **16 nodi, 40 archi**, catena con macrogenere connessa;
- `Concerto grosso`: **9 nodi, 16 archi**, **5 autori** e tutti e tre gli archi parentali;
- `Concerto solistico`: **43 nodi, 121 archi**.
Nessun arco senza estremi nelle radici verificate; filtro `Persone=0` rispettato. **Questa è una prova del codice su dati reali, non un clic in browser WebGL.**

**Commit correttivo Concerto 50D:** `54556436e128b85dfbdce78a00b099e1a3c9d102`.

## B. Lotto 51 — corpus BWV 171–200

### Fonte catalografica

- Orchestra Flaminio, [Catalogo Bach: BWV 1–200](https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html), collazione delle voci **171–200** e dei suffissi **173a, 184a, 186a, 190a, 193a, 194a, 197a**;
- [Bach-Cantatas, catalogo delle fonti 151–200](https://www.bach-cantatas.com/Ref/IndexRef4.htm), confronto per l'identificazione di versioni, fonti e lavori incompleti.

**Workbook `compositori_flaminio.xlsx` non disponibile** in questa sessione: i record espongono `source_excel_row:null`. Non sono stati creati URL individuali a guide d'ascolto per numero non confermato; `individual_guide_url:null` è intenzionale. Il link al catalogo originale rimane su ogni scheda.

### Distinzione opere, frammenti e attribuzioni

**37 schede di catalogo** = 30 numeri BWV interi 171–200 e 7 sigle con suffisso. **36 nodi attivi di opere o frammenti**; **1 HOLD attributivo**.

**BWV 189 — `Meine Seele rühmt und preist`:** Flaminio annota «attribuzione incerta, forse composizione di Georg Melchior Hofmann». È sospesa nel manifesto, **senza** arco Johann Sebastian Bach→BWV 189 e senza inventare un'autorialità certa di Hoffmann. Deve essere riconciliata con Bach Digital/NBA prima dell'inserimento nel grafo.

**BWV 200 — `Bekennen will ich seinen Namen`:** superstite **una sola aria** per contralto, due violini e continuo. È un *frammento di cantata perduta*, mai una cantata completa, né un ricostruito padre fittizio.

**BWV 198 — `Lass, Fürstin, lass noch einen Strahl`:** *Trauerode* per Christiane Eberhardine, cantata profana cerimoniale funebre e **non liturgica**. Nonostante testi funebri e luogo di esecuzione, non va appiattita sul ramo delle cantate sacre.

**BWV 191 — `Gloria in excelsis Deo`:** cantata natalizia latina, lavoro sacro distinto dalla Messa BWV 232, della quale impiega materiale musicale.

**BWV 192 — `Nun danket alle Gott`:** cantata corale, ma incompleta. Il sottogenere *Cantata corale* è secondario, non sostituisce `Cantata sacra`.

**Sottogenere aggiuntivo `Cantata corale`:** BWV **177, 178, 180, 192**, sulla base della struttura e del testo dell'inno; nessuna deduzione automatica dalla presenza di un singolo corale.

**Sette sigle suffissate** distinte per funzione:
- **Profane:** BWV **173a**, serenata per il principe Leopold; **184a**, composizione celebrativa perduta; **193a**, *Dramma per musica* per l'onomastico di Augusto; **194a**, cantata celebrativa di Köthen, in gran parte perduta.
- **Sacre:** BWV **186a**, cantata d'Avvento weimariana; **190a**, cantata commemorativa del giubileo della Confessione di Augusta, parzialmente perduta; **197a**, cantata natalizia, frammentaria.

Le due categorie di identità non si confondono né mediante l'incipit né mediante i riusi; la musica persa non genera ascolti fittizi.

### Undici relazioni specifiche, non transitive

**Otto coppie nel Lotto51:**
1. `173a → 173`: parodia dalla serenata profana alla cantata sacra di Pentecoste;
2. `173a → 175`: rielaborazione documentata di un'aria;
3. `184a → 184`: dalla composizione celebrativa perduta alla cantata di Pentecoste;
4. `186a → 186`: cantata d'Avvento di Weimar e successivo ampliamento lipsiense;
5. `190 → 190a`: riutilizzo per il giubileo confessionale; entrambi i materiali incompleti non sono trattati come partiture integralmente superstiti;
6. `193a → 193`: da celebrazione profana a cantata cerimoniale del consiglio;
7. `194a → 194`: dalla musica celebrativa di Köthen alla consacrazione della chiesa di Störmthal;
8. `197a → 197`: due arie natalizie riutilizzate in cantata nuziale.

**Tre riusi fra lotti/generi:**
9. `BWV205 → BWV171` (aria 205/9 riutilizzata come BWV171/4; source `fl45:jsbach:bwv205`);
10. `BWV41 → BWV171` (corale 41/6 nella BWV171/6; source `fl46:jsbach:bwv41`);
11. `Terzo Concerto brandeburghese BWV1048 → BWV174` (primo movimento come sinfonia; source `audit:flaminio:bach:bwv1048`).

Quest'ultimo arco mette concretamente in rapporto **repertorio strumentale e vocale**, secondo il principio di Musurgia Atlantis, senza trasformare il concerto strumentale in una cantata o confondere l'identità dei due lavori.

Altri rapporti (BWV191→Gloria/Messa BWV232, BWV198→Markus-Passion BWV247, BWV188→BWV1052, versioni di BWV182/195/199) sono **in coda di crosswalk**, non automaticamente inseriti come archi di lavoro senza verifica dei movimenti e dei nodi canonici.

## C. Implementazione e test

**Manifesto:** `LOTTO51_37_SCHEDE_BACH_BWV171_200_2026-11-11.json`, commit `cfc1d1081c5d28230f165ad0f84129237ded9a99`.

**Preview:** `PREVIEW_RADICATA_CHECKPOINT06.html`, commit `9cbc704aa3884b053034e5d91fb58b0ec6be0b75`. L'interfaccia carica il manifesto con `fetch` non-cache e lo integra dopo il Lotto50. I lavori mantengono un legame persona→opera e uno opera→genere; i quattro casi corali ricevono un secondo arco di classificazione. Le undici derivazioni sono aggiunte come archi specifici fra lavori e sono mostrate nel dettaglio della radice delle opere. BWV189 non entra in `dataset.nodes`.

**Regressione:** `REGRESSIONE_CORRETTIVO50D_LOTTO51_2026-11-11.json` commit `c29836235c12a8d279abdb5902ae5fb7601a888d`.

Eseguiti i moduli JS **effettivamente presenti nella preview pubblicata** con:
- l'intero `musurgia-atlantis/grafo.json` remoto recuperato come blob, 754 nodi e 1.718 archi;
- l'overlay dei generi Musurgia Mundi;
- i sei manifesti autentici Lotti45–50, e il manifesto Lotto51;
- i sei nodi dei Concerti brandeburghesi della preview, necessari per l'arco di BWV174.

**Esiti Lotto51:** +**36 nodi**, +**87 archi** (72 autore/genere, 4 corali, 11 riusi), **zero nodi duplicati**, **zero archi nuovi orfani**, **zero archi nuovi duplicati**. **26 radici provate**, fra cui BWV171, 173/173a, 174 e terzo Brandeburghese, 184/184a, 186/186a, 189 HOLD, 190/190a, 191, 192, 193/193a, 194/194a, 197/197a, 198, 200, BWV205 e BWV41: nessun arco visualizzato senza estremi. `Persona=0` non introduce Bach. Le due fonti della BWV171 e la fonte strumentale della BWV174 compaiono dalla radice della cantata.

**Cumulativo Lotti45–51: 216 opere e frammenti** (199 `Cantata sacra`, incl. BWV200; 15 `Cantata profana`, incl. Trauerode BWV198; 1 Oratorio BWV11; 1 Mottetto BWV118) e **5 nodi versione** già censiti, non duplicati. **42 cantate corali** sono **comprese nelle 199 sacre**; non sommarle due volte.

**Paginazione realmente esercitata nel JS:** `Cantata sacra` **199 opere su 9 pagine** con cap 24 (otto pagine complete e una finale da 7); `Cantata profana` **15 su 1 pagina**; `Cantata corale` **42 su 2 pagine**; `Mottetto` **1 su 1**. Unione delle pagine completa, zero archi orfani.

**Limitazioni esplicite:** il test ha caricato il **vero grafo di produzione**, ma non ha caricato contemporaneamente **tutti** gli overlay indipendenti (Sonata, Singspiel, Quartetto e gli altri); i due collaudi di grafi concertistici e vocali usano gli overlay rispettivamente pertinenti. Non è un test del browser WebGL effettivo, né una conferma di deploy DNS/CDN. Il workbook Flaminio originale e la raggiungibilità HTTP di ogni guida individuale non sono stati verificati.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=checkpoint51-concerto50d-20261111

## D. Ripresa

Il segmento **BWV 1–200** è catalogato **per i lotti di audit disponibili**, comprese le relative sospensioni, non ancora certificato come patrimonio production-ready. Restano l'audit delle attribuzioni e delle categorie nelle *Aggiunte* e negli altri segmenti BWV, l'unione effettiva dei cataloghi Musurgia Mundi/Atlantis, il collaudo WebGL, la riconciliazione del foglio Excel e la definizione dei filtri estesi di pertinenza.

**Prossima tranche coerente:** rivedere **i collegamenti fra genere Concerto, Sinfonia, Sonata e Cantata** con un test federato di tutte le tassonomie; a seguire procedere con il catalogo Bach BWV201–250, distinguendo serenate profane, drammi musicali, passioni, messe e altri generi senza forzarli nel ramo Cantata.
