# Musurgia Atlantis — Lotto 47 | BWV 51–80 (11 novembre 2026)

**Perimetro:** confronto catalografico Flaminio / altre fonti, integrazione **solo nella preview di audit** di Musurgia Atlantis, nessuna fusione in `grafo.json` e nessuna modifica a `index.html` di produzione.

## Fonti verificate

- Flaminio, catalogo principale J. S. Bach, BWV 1–200: https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html
- Indice delle guide Flaminio: https://www.flaminioonline.it/Guide/Bach-Guide.html
- Bach.de, indice delle opere vocali: https://www.bach.de/werk/vokalwerke.html
- IMSLP, voce della BWV53 attribuita a Georg Melchior Hoffmann: https://imslp.org/wiki/Schlage_doch%2C_gew%C3%BCnschte_Stunde_%28Hoffmann%2C_Melchior%29
- IMSLP, serenata profana BWV66a: https://imslp.org/wiki/Der_Himmel_dacht_auf_Anhalts_Ruhm_und_Gl%C3%BCck%2C_BWV_66a_%28Bach%2C_Johann_Sebastian%29
- Bach.de, cantata BWV78: https://www.bach.de/werk/bwv/78.html
- Bach Choir of Bethlehem, BWV80 e corale luterano: https://bach.org/education/cantata-bwv-80/

## Identità: 35 schede di fonte, 34 nodi ammessi nello staging

- **30** voci con numero intero **51–80**.
- **5** voci con suffisso: **66a, 69a, 70a, 80a, 80b**.
- **1 HOLD spuria:** **BWV 53**, *Schlage doch, gewünschte Stunde*. Flaminio stesso segnala «Attribuzione errata, composizione di Georg Melchior Hofmann»; IMSLP la attribuisce a Melchior Hoffmann con cautela. **Nessun nodo Bach JS→BWV53**, nessun genere o falsa catena d'autore. La scheda HOLD permane nel JSON audit per la successiva risoluzione della persona Hoffmann.
- **33 opere** collegate direttamente a J. S. Bach; **1 versione** `versione-opera`, **BWV 80b**, radicata nella singola opera BWV80 e non assimilata a una cantata indipendente completa.
- Le **33 opere** comprendono **32 cantate sacre** e **1 serenata profana BWV66a**. È la funzione storica dell'opera, non la rubrica editoriale della pagina di Flaminio, a determinare il sottogenere.
- **3 classificazioni aggiuntive** `Cantata corale`: **BWV 62, 78, 80**, tutte anche `Cantata sacra`. I sottoinsiemi 45–47 hanno ora **7** cantate corali con identificativi espliciti.
- BWV 57, 58 e 60: osservati come esempi pertinenti alla cantata-dialogo, ma il nuovo sottogenere resta in *review_queue*, senza generare una categoria sulla base di tre casi di prova.
- BWV 61 e 62 condividono l'incipit ma sono cantate distinte, non due versioni di un'opera. Idem BWV59/74 e BWV20/60; si collegano per riuso **solo** i lavori con specifiche concordanze di materiale musicale.

## Sette relazioni di repertorio documentate (non transitive)

1. **BWV 66a → 66**: serenata per il compleanno di Leopoldo di Anhalt-Köthen / adattamento sacro pasquale.
2. **BWV 69a → 69**: composizione liturgica / rielaborazione per il consiglio cittadino.
3. **BWV 70a → 70**: modello avventizio weimariano / ampliamento lipsiense.
4. **BWV 59 → 74**: riutilizzazione di due movimenti, non identità d'opera.
5. **BWV 80a → 80**: materiale di Weimar riadattato per la Riforma.
6. **BWV 80b → 80**: relazione **di versione** rispetto all'opera BWV80; non etichetta di composizione ex novo.
7. **BWV 12 (Lotto45) → 69a (Lotto47)**: ripresa documentata del corale conclusivo BWV12 come BWV69a/6; legame interlotto specifico, non relazione generica fra cantate.

**Casi in coda:** BWV52 sinfonia da BWV1046 (Brandeburghese n.1); BWV68 contiene riusi da BWV208; BWV79 riutilizzato in Messe successive; sul **Crucifixus BWV232** la pagina Flaminio sembra attribuire erroneamente a BWV78 la provenienza che appartiene notoriamente a BWV12. Il Lotto47 *non* crea questi archi trasversali senza risoluzione di identità, sezione/movimento e fonte. Distinguere per BWV80 l'orchestrazione tardiva con trombe e timpani di **Wilhelm Friedemann Bach** dalle parti originali.

## Conservazione del patrimonio

Le pagine principali del catalogo Flaminio sono collegate a ciascuna scheda, senza importare interi testi esterni. **14** link individuali presenti nell'indice guide Flaminio sono stati aperti e verificati come risorse effettive: BWV 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 70, 78, 79. Il link di BWV53 è conservato **solo** nella scheda HOLD, pertanto **13 URL guida** sono assegnati a nodi pubblicati; gli altri sono `null` e **non inventati**. Il workbook `compositori_flaminio.xlsx` non è stato accessibile direttamente in questa sessione: `source_excel_row=null` finché non si riconciliano i dati originali.

## File pubblicati

- `LOTTO47_35_SCHEDE_BACH_BWV51_80_2026-11-11.json` — commit `aa57cfe79850b3d4552a08bc109180e1ca3bef72`.
- `PREVIEW_RADICATA_CHECKPOINT06.html` — commit `d239896a96f14176ead633a1d9bd27da4a36a7f0`.

## Regressione *eseguita* sul codice di staging pubblicato

È stato estratto il codice JS *realmente presente* nella preview GitHub e eseguito senza browser sul registro autentico legacy dei generi (`50 nodi / 271 archi`), sul nodo `pers:bach` necessario per il test isolato e sui tre manifesti reali Lotti45, 46, 47.

**Esito:** +**34 nodi** (33 opere, 1 versione), +**77 archi** nel Lotto47; **0 duplicati** di nodo, **0 duplicati** di ID arco nuovo, **0 orfani**. `BWV53` esclusa dai nodi, visibile solo come registro HOLD. Sintassi della preview JavaScript verificata prima del commit.

**22 radici provate**, profondità 4: Johann Sebastian Bach, Cantata, Cantata sacra, Cantata profana, Cantata corale; BWV51, 53 (assente), 59, 62, 66, 66a, 69, 69a, 70, 70a, 74, 78, 80, 80a, 80b, 12 e 30 (regressione di lotti precedenti). Tutti gli archi visibili hanno estremi presenti; i circuiti interopera e la versione 80b si ritrovano da radici specifiche. Filtro persone=0 da versione BWV80b: l'autore non viene forzato.

**Cumulativo dei Lotti45–47:** **91** lavori o frammenti censiti con identità d'opera, oltre a **1 versione** (`BWV80b`); **81** lavori nel ramo sacro (compreso l'oratorio separato? **No**: 81 sotto `Cantata sacra`, più **1 Oratorio BWV11** in ramo autonomo), **9** nel ramo profano; **7** cantate corali sono comprese nel ramo sacro e non vanno contate due volte. **Nota:** 81 + 9 + 1 = 91; le versioni non entrano nel denominatore delle opere.

**Limiti della verifica:** NON effettuato il test browser/WebGL, NON effettuato un collaudo della catena completa di fetch/loader di tutti gli overlay contro `grafo.json` pubblico. Non è una certificazione visuale o di produzione; non si possono promettere buone prestazioni con 90+ nodi d'opera nella stessa radice senza ottimizzare i filtri. Il lettore web disponibile non ha permesso di collaudare la preview live; la presenza del commit nel repository non dimostra il deploy.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate47-20261111

## Prossima ripresa

**Lotto48:** BWV 81–110, controllando versioni di BWV82 e BWV106, opere dubbie e matrice delle cantate corali. Prima di scalare ulteriormente la rete di Bach, introdurre **limite di fan-out / paginazione dei singoli lavori per sottogenere** nella GUI (ora la radice Bach a profondità 4 espone 98 nodi in test, 210 archi: strutturalmente corretti ma potenzialmente pesanti), senza eliminare identità né nascondere arbitrariamente opere. Testare anche da browser reale la correzione Singspiel e la regressione generale di Sonata/Concerto/Quartetto.
