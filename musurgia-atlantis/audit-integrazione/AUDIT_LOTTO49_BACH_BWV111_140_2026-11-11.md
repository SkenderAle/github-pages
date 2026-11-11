# Musurgia Atlantis — Lotto 49: BWV 111–140, mottetto BWV 118 e paginazione

**Data:** 11 novembre 2026. **Branch:** `main`. **Ambito:** esclusivamente `musurgia-atlantis/audit-integrazione/` (staging, non produzione).

## Fonti consultate e criterio

- Flaminio, [Catalogo Bach BWV 1–200](https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html), esame delle voci BWV 111–140, 118a, 120a, 120b e 134a.
- Flaminio, [indice guide all'ascolto](https://www.flaminioonline.it/Guide/Bach-Guide.html), con link per BWV 114, 115, 118, 119, 120, 122, 125, 126, 127, 129, 130, 132, 139, 140. Non inventare link per i mancanti; non è stato eseguito un test HTTP esaustivo di ciascun URL.
- [bach.de, repertorio vocale](https://www.bach.de/werk/vokalwerke.html), fonte indipendente per BWV118 come mottetto.
- [bwv.info, catalogo per numero BWV](https://bwv.info/en/bwv/), distinzione fra 118, 118b e lavori con suffisso.
- [Bach-Cantatas, secondo ciclo lipsiense e aggiunte](https://www.bach-cantatas.com/Topics/Leipzig-Cantata-Cycles-1%262.htm); [Bach Chorale Listing](https://imslp.org/wiki/Bach%20Chorale%20Listing).
- [Bach Choir of Bethlehem, BWV 140](https://bach.org/education/cantata-bwv-140/), carattere di cantata corale tarda (1731).

Il foglio `compositori_flaminio.xlsx` non è stato accessibile direttamente; perciò `source_excel_row=null` e l'audit non certifica la concordanza delle righe XLSX.

## Inventario e distinzione storica

**34 schede di fonte:** **30 numeri interi BWV 111–140** e quattro numeri suffissati **118a, 120a, 120b, 134a**.

**33 opere registrate:** 31 cantate sacre (29 numeri interi diversi da 118, più 120a e 120b), 1 cantata profana (134a) e **1 mottetto funebre** (BWV118). **1 nodo di versione**: BWV118a, seconda orchestrazione dell'unico mottetto BWV118.

Il mottetto `O Jesu Christ, meins Lebens Licht` **BWV118** rimane nel nodo legacy **Mottetto** `legacy:gf:genere-mottetto`, senza passare da Cantata. Flaminio elenca la seconda orchestrazione come **118a**, mentre bwv.info riporta **118b**: trattare la diversità dei suffissi come **alias catalografico da riconciliare**, senza aggiungere una versione duplicata. Fonte Flaminio: versione iniziale per coro, litui, cornetto e tromboni; seconda orchestrazione con oboi, oboe da caccia, fagotto, archi e continuo.

**BWV120a**, cantata sacra nuziale, e **BWV120b**, cantata commemorativa della Confessione di Augusta, sono trattate come opere distinte e non versioni editoriali di BWV120; **BWV120b conserva movimenti perduti**, quindi non si devono creare ascolti inesistenti o movimenti ricostruiti senza attestazione.

**BWV134a**, cantata celebrativa profana del 1719 a Köthen, non è riclassificata erroneamente come sacra per la posizione nella pagina del catalogo. **BWV131a**, fuga organistica (non cantata vocale), è esclusa dal lotto.

**21 classificazioni secondarie come cantata corale**: BWV **111, 112, 113, 114, 115, 116, 117, 121, 122, 123, 124, 125, 126, 127, 129, 130, 133, 135, 137, 139, 140**. Conservare la distinzione fra:
- gruppo del secondo ciclo lipsiense 1724–25;
- aggiunte posteriori, quali **112, 117, 129, 137 e 140**.
La BWV138, pur con trattamento significativo del corale nel primo ciclo (1723), resta oggetto di verifica per una classificazione più precisa; non è stata inclusa automaticamente nel sottogenere.

## Quattro archi di riuso individuale

1. **BWV120 → BWV120a**, adattamento di materiale per la cantata nuziale.
2. **BWV120 → BWV120b**, adattamento per il giubileo della Confessione augustana.
3. **BWV134a → BWV134**, ripresa di brani di una cantata profana nella cantata pasquale.
4. **BWV137 → BWV120a**, riutilizzazione attestata del corale.

Questi sono collegamenti fra **specifiche opere identificate**, non passaggi attraverso il macrogenere Cantata, non equivalenze fra opere, non collegamenti causali fra compositori.

**HOLD di crosswalk:** il *Et expecto* della Messa BWV232 riutilizza materiale di BWV120/2; la trascrizione organistica BWV645 nasce dal corale BWV140/4. Senza identità canoniche delle composizioni e dei movimenti in Atlantis, sono annotazioni per futuro collegamento, **non** archi fittizi.

## Commit e file

- Manifesto: `LOTTO49_34_SCHEDE_BACH_BWV111_140_2026-11-11.json` — commit `1c3c09059729a6a9888ba55c48f60fc6a29caa7c`.
- Preview: `PREVIEW_RADICATA_CHECKPOINT06.html` — commit `e7dad58fc02e9b1fb353937d991c062f3d039cd3` (dati), `4f7d553f91e5475e2211baa67d8fc287895822dd` (cardinalità), `ece97525b565f6d13ab82cb13a21e462e464c47e` (paginazione reale).
- Regressione: `REGRESSIONE_LOTTO49_BACH_BWV111_140_2026-11-11.json` — commit `65bfc83f42ac3daf78e06a90b87aeda227b90036`.

I file `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` di produzione **non sono stati modificati**.

## Paginazione navigabile: completata nel codice, da collaudare in browser

La precedente limitazione della preview (solo «prime N opere») è stata sostituita con:
- scelta della **famiglia** Cantata sacra / profana / corale / Mottetto;
- quantità **12, 24 (predefinita), 48, Tutte**;
- pulsanti **«← Precedente» / «Successiva →»**, disabilitati alle estremità;
- numero pagina, conteggio opere visibili su totale e **posizione indipendente per ciascun genere**;
- ordinamento **BWV numerico**, con suffissi dopo il numero base.

La ricerca diretta per BWV continua a trovare ogni opera, indipendentemente dalla pagina. `Tutte` ripristina il ramo integrale senza cancellare i dati. Questa è **paginazione del sottoinsieme di grafo visibile**, non una paginazione dei risultati del repository.

## Regressione strutturale realmente eseguita

Estratto ed eseguito il modulo JS **effettivamente pubblicato** insieme ai manifesti Lotti45–49, all'overlay autentico generi legacy (50 nodi / 271 archi) e a un nodo autore Bach sintetico nel banco di prova. Sono stati controllati **17 radicamenti** inclusi BWV118, 118a, 120, 120a, 120b, 134, 134a, 137, 140, BWV82 e BWV80, con profondità categoria 5.

**Esito:** Lotto49 +**34 nodi** (33 opere, 1 versione), +**93 archi** (66 autore/genere, 21 corali, 2 versione, 4 riusi), **0 ID duplicati** di nodo/arco, **0 archi nuovi orfani**. Nessun arco orfano nelle radici e nelle pagine verificate, controllo categoria Persone=0 rispettato.

**Cumulativo Lotti45–49:** **154 identità d'opera o frammento**, oltre a **5 versioni**. Ripartizione non duplicata: **142 cantate sacre**, **10 profane**, **1 oratorio** e **1 mottetto**. Le **38 cantate corali** sono sottoinsieme delle 142 sacre, non categoria da aggiungere al totale. Le versioni, incluse BWV118a, non aumentano il numero delle opere.

**Copertura integrale della paginazione, limite 24:**
- Sacre: **142**, distribuite in 6 pagine **24+24+24+24+24+22**.
- Profane: **10**, in 1 pagina.
- Corali: **38**, distribuite in 2 pagine **24+14**.
- Mottetto: **1**, in 1 pagina.

Verificato che l'unione delle pagine restituisce *tutti* gli identificativi di ciascun ramo e che `Tutte` li rende simultaneamente visibili. Non è stato eseguito un browser grafico WebGL per verificare il posizionamento dei nodi, i click sul Canvas o la reattività su Android: **i test sul motore e sulla sintassi non sostituiscono il collaudo visuale o il test dell'intera federazione `grafo.json`**.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate49-20261111

## Prossimo audit

**Lotto50: BWV 141–170**. Prima verifica attribuzioni storiche (BWV141 e BWV142 spuri attribuiti a Telemann o autore ignoto) e versioni; continuare il trattamento rigoroso dei generi e della paternità. Priorità parallela: collaudo browser WebGL e verifica incrociata su corpus Atlantis completo, inclusa regressione Singspiel/Mozart, Sonata, Concerto/Brandeburghesi, Quartetto, Cantata/Mottetto.
