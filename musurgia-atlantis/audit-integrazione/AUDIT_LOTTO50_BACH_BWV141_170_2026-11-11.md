# Musurgia Atlantis — Lotto 50: BWV 141–170, attribuzioni e identità distinte

**Data:** 11 novembre 2026. **Branch:** `main`. **Ambito:** solo `musurgia-atlantis/audit-integrazione/`, senza fusione dei file di produzione.

## 1. Fonti verificate

- Flaminio, catalogo Johann Sebastian Bach [BWV 1–200](https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html), voci dal 141 al 170 e `147a`.
- [Bach.de, elenco BWV](https://www.bach.de/werk/bwv.html): repertorio sacro, esclusione di 141 e 160 dall'elenco Bach e schedatura BWV 147a.
- [Flaminio, indice guide](https://www.flaminioonline.it/Guide/Bach-Guide.html): dieci guide individuali associate ai BWV 148,149,151,153,155,156,161,162,163,170. Numeri non presenti lasciati `null`; nessuna URL generata per interpolazione è dichiarata esistente se non compare nell'indice.
- [Breitkopf & Härtel, TWV 1:877](https://www.breitkopf.com/work/6570/ich-weiss-dass-mein-erloeser-lebt-twv-1-877): BWV 160 di Telemann, erroneamente attribuita a J. S. Bach.
- [IMSLP, BWV 142](https://imslp.org/wiki/Uns_ist_ein_Kind_geboren_%28Kuhnau%2C_Johann%29): tradizione attributiva Johann Kuhnau, non definitivamente certa.
- [Bach-Cantatas, BWV 141](https://www.bach-cantatas.com/~bachcant/BWV141.htm): conferma Telemann TWV1:183.
- [Peter Lang, D. Smithers 2015 su BWV 143](https://www.peterlang.com/document/1049362) e [overview moderna di Bach-Cantatas](https://www.bach-cantatas.com/Articles/Cantata-Composition-Genesis.htm): posizioni **favorevoli all'autenticità** contro dubbi precedenti. La scheda è controversa, NON giudicata spuria.
- [Schulenberg, discussione storica della BWV 150](https://iopn.library.illinois.edu/scalar/bachcantatas/schulze-2010): autenticità storicamente dibattuta; il fatto che la NBA l'abbia pubblicata non significa che il vecchio dubbio sia irrilevante.

**Origine Excel:** `compositori_flaminio.xlsx` non disponibile in lettura nella sessione; **nessuna** riga XLSX inventata. Le schede hanno `source_excel_row:null`; riconciliazione obbligatoria prima della fusione.

## 2. Catalogazione, attribuzioni e HOLD

**31 schede di audit**: 30 numeri interi BWV **141–170** e la composizione suffissata **BWV 147a**.

**26 identità d'opera ammesse nella preview**, tutte cantate sacre specificamente collegate a `pers:bach` e `atlas:gf:cantata-sacra`. **Nessuna nuova versione** non documentata da un identificatore sicuro.

**Cinque schede sospese, registrate nel manifesto ma NON trasformate in nodi Bach:**

| BWV | Titolo | Stato e motivazione |
|---|---|---|
| **141** | Das ist je gewisslich wahr | Spuria per Bach, Telemann **TWV 1:183** |
| **142** | Uns ist ein Kind geboren | Spuria per Bach; attribuzione tradizionale a **Johann Kuhnau**, ma non definitiva |
| **143** | Lobe den Herrn, meine Seele | Autenticità **discussa**: dubbi storici e ricerche più recenti favorevoli. HOLD di riconciliazione, non dichiarata falsa |
| **150** | Nach dir, Herr, verlanget mich | Autenticità **discussa**: la NBA la accoglie ma esistono riserve sulle fonti. HOLD prudenziale, non dichiarata falsa |
| **160** | Ich weiß, dass mein Erlöser lebt | Spuria per Bach, Telemann **TWV 1:877** |

Il medesimo numero BWV può sopravvivere nella storia catalografica anche se l'autore corretto è diverso. In futuro Telemann e Kuhnau potranno avere nodi nell'archivio generale solo con attribuzione e fonte appropriata, senza ricollegare l'opera a Bach.

**BWV 147 e BWV 147a:** identificate come due cantate storicamente e liturgicamente distinte, la seconda **precedente e parzialmente perduta**, ricomposta/rielaborata nella prima. Condividono l'incipit *Herz und Mund und Tat und Leben* ma l'algoritmo non ne effettua la fusione. A differenza di BWV 80b, qui la BWV147a è una distinta composizione per l'Avvento di Weimar, non un nodo `versione-opera` del catalogo 47.

**BWV 145:** la cantata canonica è ammessa, ma la fonte Flaminio segnala un movimento di provenienza probabilmente telemanniana: l'arco Bach→opera NON viene trasferito automaticamente a ciascun movimento.

**BWV 161 e 162:** revisioni o destinazioni successive annotate senza costruire nuove versioni prive di identificativo documentario.

**BWV 166:** parte violinistica perduta/ricostruita; non introdurre una partitura originale inesistente né un ascolto virtuale.

**Cantata corale:** in BWV141–170 **zero** nuove classificazioni automatiche; la presenza di un corale o più corali nei movimenti non basta a collocare una cantata nel sottogenere specifico.

## 3. Due riusi catalografici specifici

1. **BWV147a → BWV147**: materiale da singoli numeri dell'opera d'Avvento ripreso nell'elaborazione lipsiense, mentre la fonte 147a rimane composizione autonoma.
2. **BWV132 → BWV164**: ripresa specifica del corale finale secondo Flaminio; relazione opera↔opera limitata al materiale attestato.

**Sospeso:** Flaminio segnala anche una concordanza di corale fra **BWV77 e BWV153**. La sua formulazione sulla direzione del riuso confligge con la cronologia dei due lavori; si conserva nell'audit come rapporto da verificare **senza arco causale**. Sono inoltre da risolvere i rimandi ai concerti **BWV1052** (→BWV146), **BWV1056** (→BWV156), **BWV1053** (→BWV169) e alla cantata profana **BWV208** (→BWV149); non sono stati creati archi verso ID non ancora collazionati. La sola somiglianza di titoli, testi o melodie non basta a creare una parodia.

## 4. File e commit

- Registro `LOTTO50_31_SCHEDE_BACH_BWV141_170_2026-11-11.json`, commit di creazione `9e0db5a3b1bed6a54fa5a4c595331a51d173b676`, correttivo di prudenza BWV77/153 `c61c597f1474e8f5bdf5964e0dee1fb3474f4f79`.
- Preview `PREVIEW_RADICATA_CHECKPOINT06.html`, commit di integrazione `854533cfbc8b14bce1141d4ca2c91193d5424d0b`, correttivo `de982a3f0b37f603093237007fc75521dc18e3e9`.
- Regressione riproducibile `REGRESSIONE_LOTTO50_BACH_2026-11-11.json`, commit `1bdc05768187b9990bbd3cfe25c3e2e03b8e2eae`.
- `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` **non modificati**.

## 5. Test realmente eseguiti

È stato eseguito il **codice di preparazione e radicamento pubblicato nella preview GitHub** con i veri manifesti Lotti 45–50, il vero overlay dei generi legacy (**50 nodi/271 archi**) e un **nodo Bach sintetico** per il sottografo di prova.

**Risultato Lotto50:** +**26 nodi opera**, +**54 archi** (52 compositore/genre per opera e 2 archi specifici di riuso), **0 duplicati** ID nodo e di arco nuovo, **0 archi nuovi orfani**. Le 5 schede HOLD non sono mai inserite nei nodi JS; radici su quei cinque ID risultano inesistenti. Nessuna categoria nuova «Cantata corale» inventata.

**25 radici controllate**, comprese tutte le HOLD, BWV144, 145, 146, 147, 147a, 149, 153, 156, 161, 164, 169, 170, BWV132, BWV77, BWV82 e BWV118. Nessun arco visualizzato senza entrambi gli estremi. Profondità `Persone=0` rispetta il filtro.

**Paginazione per genere**, 24 opere a pagina: **168 sacre**, 7 pagine complete 24×7; **10 profane**, 1 pagina; **38 cantate corali**, 2 pagine 24+14; **1 mottetto**, 1 pagina. Copertura integrale degli ID senza duplicati/archi orfani. I selettori 12,24,48,Tutte rimangono nel codice della preview.

**Cumulativo Lotti45–50:** **180 opere/frammenti** (168 Cantata sacra, 10 Cantata profana, 1 Oratorio BWV11, 1 Mottetto BWV118) + **5 versioni distinte**. Le 38 cantate corali sono **già comprese** nelle 168 sacre: NON sommarle al totale.

**Limiti verificati:** test di sintassi JavaScript e funzioni pure, **NON** test end-to-end dell'intero `grafo.json` più tutti gli overlay, **NON** collaudo grafico/browser/WebGL, **NON** verifica HTTP esaustiva delle guide, **NON** collazione XLSX originale. La pubblicazione GitHub non basta da sola a confermare che la preview abbia completato un deploy live. Nessuna promozione al grafo di produzione.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate50-20261111

## 6. Prossima ripresa

**Lotto 51: BWV 171–200**, con controllo spuri, frammenti e opere reimpiegate, segnalando BWV 200 come frammento e distinguendo BWV 173/173a, 184/184a, 186/186a, 197/197a, 194/194a quando documentate. Prima di aumentare ulteriormente il fan-out radicato, serve collaudare in browser reale la preview WebGL e la regressione completa su tutte le categorie; riconciliare il workbook originale.
