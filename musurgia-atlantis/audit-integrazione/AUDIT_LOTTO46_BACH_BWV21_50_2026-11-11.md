# Musurgia Atlantis — Audit Lotto 46: Bach BWV 21–50, redazioni e cantata corale

**Data:** 11 novembre 2026  
**Ambito di pubblicazione:** soltanto `musurgia-atlantis/audit-integrazione/` su `main`.  
**Stato:** staging catalografico, **non** promozione nel grafo pubblico.

## 1. Corpus e riscontri

Fonti direttamente confrontate:
- Flaminio, catalogo completo J. S. Bach, *Pagina 1* (BWV 1–200): https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html
- Bach.de, *Vokalwerke* (per incipit, funzioni, varianti e indicazione BWV 36d): https://www.bach.de/werk/vokalwerke.html
- Bach.de, *Geistliche Kantaten*: https://bach.de/werk/kantaten.html
- Catalogo generale IMSLP: https://imslp.org/wiki/List_of_works_by_Johann_Sebastian_Bach
- Bachvereniging, BWV 50: https://www.bachvereniging.nl/nl/bwv/bwv-50
- Bachfest Leipzig, cantata corale BWV 33: https://www.bachfestleipzig.de/sites/default/files/files/BA_2024_48.pdf
- Bach-cantatas.com, schemi di cantate corali: https://www.bach-cantatas.com/Topics/Cycle-2.htm

Sono stati aperti i link effettivi alle guide Flaminio associate nel catalogo ai BWV **21, 22, 23, 24, 33, 36, 36c, 40, 44, 49, 50**. **11 URL** individuali espliciti; per gli altri `flaminio_explanation_url=null` anziché URL dedotti dal numero.

**Origine di foglio XLSX:** il workbook `compositori_flaminio.xlsx` non era disponibile per lettura in questa sessione; `source_excel_row=null` per le 35 voci. La collazione con le righe Excel originali resta un passaggio obbligato prima della fusione.

## 2. Inventario rigoroso

- **30** schede con numero BWV intero da **21 a 50**.
- **5** schede specifiche con suffisso nel catalogo: **BWV 30a, 34a, 36a, 36b, 36c**.
- **35** identità catalografiche distinte: **34 opere** (incluse opere perdute o incomplete, quando attestate) + **1 frammento superstite** (`BWV 50`).
- Nella classificazione di Flaminio: **30** opere del ramo `Cantata sacra` (le 29 BWV 21–49 e la 34a nuziale, che va riconosciuta come caso cerimoniale proprio), **4** cantate profane/celebrative (30a, 36a, 36b, 36c) e **1** frammento di probabile cantata sacra (BWV 50), espressamente escluso dal conteggio delle opere complete.
- **4** classificazioni ulteriori `Cantata corale`: BWV **26, 33, 38, 41**, mantenendo per ciascuna anche l'appartenenza a `Cantata sacra`. *Cantata con un corale* e *cantata corale del ciclo* non sono sinonimi universali.
- BWV 32 e 49: conservati come **cantate-dialogo** (metadato specifico), non riclassificati come opera teatrale.

## 3. Lavori legati da riuso, ma non fusi

Archi da opera a opera, tutti specifici e non transitivi:
1. **BWV 30a → BWV 30**: cantata celebrativa profana riadattata in cantata liturgica.
2. **BWV 34a → BWV 34**: materiale della cantata nuziale rielaborato per Pentecoste.
3. **BWV 36c → BWV 36**: repertorio celebrativo rielaborato per l'Avvento.
4. **BWV 36c → BWV 36a**: riutilizzazione documentata, con **musica della 36a perduta**.
5. **BWV 36c → BWV 36b**: ulteriore riutilizzazione celebrativa; la BWV 36b è incompleta.

Non collegare indistintamente le cantate semplicemente perché condividono un genere o hanno lo stesso incipit. **BWV 36d**, attestata nella classificazione bach.de ma non nella pagina Flaminio esaminata, resta in **HOLD di riconciliazione**, senza nuovo nodo inventato. Le revisioni di BWV 23, 31, 36 e 44 sono annotazioni per un futuro audit delle versioni, non opere doppie nel database.

**BWV 50:** coro superstite di una cantata perduta. L'originale a cinque voci è ipotizzato; la redazione a doppio coro di otto voci è controversa. Non sono stati creati né un genitore immaginario né nodi di versioni speculative, né si tratta il frammento come una cantata completa.

## 4. Pubblicazione

- Registro `LOTTO46_35_SCHEDE_BACH_BWV21_50_2026-11-11.json` — commit `c5034850fbfb70d5b8f9c5dd152d77d3d8225e16`.
- Preview `PREVIEW_RADICATA_CHECKPOINT06.html` — commit `2025b2a28181b293c4b8b3c7e709349ea48f1b00`.
- Architettura: il Lotto46 prolunga il registro `cantata45` senza reimportarne le opere. È creato il solo nuovo sottogenere `atlas:gf:cantata-corale`, figlio di `atlas:gf:cantata-sacra`. Le altre tassonomie riutilizzano nodi e archi di Lotto45. I cinque riusi restano archi tra opere; le relazioni persona→opera e opera→genere sono esplicite.

## 5. Regressione effettivamente eseguita

È stato recuperato dalla pubblicazione GitHub il **codice di preparazione ed esplorazione** dei Lotti45–46 e rieseguito con:
- overlay originale dei generi `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json` (**50 nodi / 271 archi**);
- nodo autore `pers:bach` sintetico per la prova isolata;
- manifesti reali dei Lotti45 e 46.

**Risultati:** 36 nuovi nodi (35 catalografici + Cantata corale); **81 nuovi archi** nel Lotto46 (35 attribuzioni, 39 archi di genere di cui 4 aggiuntivi corali, 1 arco tassonomico, 1 indice autore→corale, 5 riusi). **Zero** ID nodo duplicati, **zero** ID arco nuovo duplicati, **zero** archi nuovi orfani.

La preparazione congiunta conserva **58 opere o frammenti catalografici** dei due lotti (23+35), oltre alle tre famiglie di genere; **49** records appartengono a Cantata sacra (18 precedenti + 30 opere + frammento), **8** a Cantata profana (4+4), **1** a Oratorio (BWV11), **4** in classificazione multipla Cantata corale.

**Radici testate:** Bach, Cantata, Cantata sacra, Cantata profana, Cantata corale, BWV 21, 26, 30, 30a, 34, 34a, 36, 36a, 36b, 36c, 50 e 11 (**17 prove**, profondità 4). Per Bach nel sottoinsieme di test: 64 nodi, 133 archi, 58 opere/frammenti; tutti gli archi visibili hanno estremi presenti. Per BWV 30 è visibile la BWV 30a, per BWV 36c tre rielaborazioni. Nessuna BWV36d non certificata, nessun HOLD del Lotto45. Persone a profondità zero non forza il nodo Bach. Sintassi JS completa della preview superata.

**Limiti dichiarati:** non è stato collaudato il rendering WebGL nel browser, né l'intero `grafo.json` originale con tutti gli overlay. Il lettore web non riesce a recuperare la pagina pubblica anticache: non costituisce una conferma di deploy o corretto funzionamento live. Il workbook Excel originale e la raggiungibilità HTTP individuale di ogni sorgente non sono stati collaudati. Nessuna affermazione di certificazione globale della fusione.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate46-20261111

## 6. Prossima ripresa

**Lotto47:** BWV **51–80**, includendo altre varianti e lacune con gate storici, separando cantate complete, frammenti e versioni. Applicare filtri contro l'esplosione dei rami di Bach prima di procedere all'intero corpus BWV 1–200. Poi test end-to-end browser e riconciliazione della cartella di lavoro `compositori_flaminio.xlsx`. Nessuna modifica al `musurgia-atlantis/grafo.json` e all'`index.html` di produzione senza certificazione.
