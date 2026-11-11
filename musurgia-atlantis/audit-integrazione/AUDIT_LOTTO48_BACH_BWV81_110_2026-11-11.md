# Musurgia Atlantis — audit Lotto 48: BWV 81–110, versioni BWV 82 e scala del grafo

**Data:** 11 novembre 2026 · **Branch:** `main` · **Ambito:** esclusivamente `musurgia-atlantis/audit-integrazione/`.

## 1. Fonti e metodo

- Flaminio, catalogo J. S. Bach, BWV 1–200: https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina1.html
- Flaminio, indice delle guide con link alla singola cantata: https://www.flaminioonline.it/Guide/Bach-Guide.html
- Bach.de, catalogo indipendente dei lavori vocali: https://www.bach.de/werk/vokalwerke.html
- Flaminio, guida BWV 82: https://www.flaminioonline.it/Guide/Bach/Bach-Cantata82.html
- Bach-Cantatas, concordanza delle versioni BWV 82: https://www.bach-cantatas.com/BWV82.htm
- IMSLP, BWV 82 e materiali di fonte: https://imslp.org/wiki/Ich_habe_genug%2C_BWV_82_%28Bach%2C_Johann_Sebastian%29
- Netherlands Bach Society, BWV 100 e riusi da BWV99/75: https://www.bachvereniging.nl/en/bwv/bwv-100
- Bachipedia, BWV 97 (testo integrale del corale): https://bachipedia.org/werke/bwv-97-in-allen-meinen-taten/
- Bachipedia, BWV 107 (cantata corale): https://bachipedia.org/werke/bwv-107-was-willst-du-dich-betrueben/

**Limite di provenienza:** `compositori_flaminio.xlsx` non era leggibile in questa sessione, quindi `source_excel_row` resta **null**. I titoli sono incipit verificati direttamente in due indici pubblici, non righe XLSX inventate. Dodici link individuali a guide Flaminio sono presenti nell'indice (BWV 82, 86, 90, 91, 93, 101–106, 110); alcuni sono stati aperti individualmente, senza affermare di aver fatto un controllo HTTP su ogni guida.

## 2. Inventario catalografico

**30 nuove cantate** BWV 81–110, senza spuri individuati in questo lotto; ognuna ha identità `fl48:jsbach:bwvNUMERO` e legame specifico con `pers:bach`, `Cantata sacra` e, dove pertinente, `Cantata corale`.

**10 classificazioni aggiuntive `Cantata corale`:** BWV **91, 92, 93, 94, 96, 97, 99, 100, 101, 107**. Le prime e quelle del secondo ciclo si distinguono dalle composizioni su inno integrale successive: **BWV97** (1734, destinazione non certa) e **BWV100** (circa 1732–35, destinazione non certa) sono cantate corali fuori dall'annata 1724–25, non erroneamente fatte passare per opere dello stesso ciclo.

**BWV82 — `Ich habe genug`: un'unica opera con tre versioni catalografiche:**
1. `fl48:jsbach:bwv82-1`: **BWV 82.1 / BC A 169a**, versione per basso, 1727.
2. `fl48:jsbach:bwv82-2`: **BWV 82.2 / BC A 169b**, versione per soprano, circa 1731, incompleta; anche indicata in alcuni repertori come *BWV 82a*. Non ne deriva una seconda composizione.
3. `fl48:jsbach:bwv82-3`: **BWV 82.3 / BC A 169c**, redazione del 1735. **Caveat:** Flaminio indica mezzosoprano, mentre le sintesi Bach-Cantatas/IMSLP differiscono nelle etichette alto/soprano e nell'organico della revisione; lo staging conserva il conflitto testuale senza fissare una tessitura univoca prima della collazione con le fonti originali.

Le esecuzioni/riprese del 1746–48 citate dalle fonti non generano nuove composizioni o versioni senza differenza di fonte specifica.

**BWV106 — `Gottes Zeit ist die allerbeste Zeit`**, *Actus tragicus*: conservata come singola cantata sacra a carattere funebre, senza reclassificarla come oratorio. **BWV98, 99, 100:** incipit omonimo *Was Gott tut, das ist wohlgetan*, ma tre lavori differenti. Un algoritmo di deduplica per titolo non deve mai fonderli.

## 3. Due riusi musicali documentati e circoscritti

- **BWV99 → BWV100:** il coro introduttivo della cantata corale BWV99 è riadattato nella BWV100.
- **BWV75 → BWV100:** riutilizzato il corale conclusivo, con ulteriore differenziazione strumentale.

Questi due archi sono documenti su **materiale di movimenti** riciclato fra opere identificate, non equivalenza fra i tre numeri BWV né una rete indiscriminata fra tutti i compositori di cantate.

## 4. File, commit e integrazione

- Registro: `LOTTO48_30_CANTATE_BWV81_110_TRE_VERSIONI_BWV82_2026-11-11.json`, commit `8e69723e53b9df0837736bf1e594288abda92c95`.
- Preview aggiornata: `PREVIEW_RADICATA_CHECKPOINT06.html`, commit `98df5f505afe9a2308e93aedbd4f441ce41a03af`, revisione descrizione e conteggi `e72744b8c0536e89be8022bcbdc5b5599da7e7c2`.
- Regressione riproducibile dei dati e radici: `REGRESSIONE_LOTTO48_BACH_2026-11-11.json`, commit `daba33553351b8e7cdb44b0a6cdbcfb2abf1ea5f`.

**Il grafo `musurgia-atlantis/grafo.json` e l'interfaccia principale `musurgia-atlantis/index.html` non sono stati alterati.**

La preview utilizza i generi già presenti nei Lotti45–47, senza nuovi macrogeneri. Gli archi di versione hanno categoria `versione-opera` e si arrestano al genitore specifico BWV82; solo le classificazioni corali documentate aggiungono un secondo arco opera→genere.

## 5. Prestazioni e fan-out: controllo introdotto

Nella barra di controllo della preview è stato aggiunto un vero selettore **«Cantate per ramo visualizzate»**:
- 12
- 24 (**default**)
- 48
- **Tutte**

Il selettore modifica **solo il sottoinsieme visibile** delle singole opere quando la radice è Bach o un sottogenere di Cantata. **Non elimina né modifica alcun dato**, e la ricerca diretta di una BWV resta sempre possibile. I nodi di relazione del lavoro cercato, le redazioni e i riusi musicali vengono ancora mostrati come relazioni pertinenti.

Attenzione: questo è un controllo di **dimensione/fan-out**, non ancora un sistema di pagine avanti/indietro. A default 24, per una lista di 111 cantate sacre viene visualizzata la **prima tranche di 24** in ordine di importazione; le altre restano raggiungibili dalla ricerca e con «Tutte». Per la GUI finale è preferibile la paginazione per ramo, con ordinamento alfabetico/BWV e contatori di opere non visualizzate. Non sostenere che la paginazione sia già pronta.

## 6. Regressione realmente eseguita

Codice JavaScript **recuperato dal commit GitHub e rieseguito** in ambiente isolato insieme a:
- dati autentici dell'overlay dei generi legacy: **50 nodi / 271 archi**;
- registri effettivi dei Lotti45, 46, 47, 48;
- nodo `pers:bach` sintetico, necessario alla prova isolata; **nessun grafo pubblico completo nell'esecuzione di questo test**.

**Risultati Lotto48:** **33 nuovi nodi** (30 opere + 3 versioni), **78 nuovi archi**, **nessun duplicato** di ID nodo o di ID arco nuovo, **nessun arco nuovo orfano**.

**23 radici testate**, inclusi Bach, i quattro sottogeneri rilevanti, BWV81, 82, tre versioni 82.1/82.2/82.3, 91, 93, 97, 98, 99, 100, 101, 106, 107, 110 e regressioni BWV75, 80, 30. Tutti gli archi visualizzati hanno entrambi gli estremi; BWV82 mostra esattamente tre nodi versione; BWV100 mostra BWV99 e BWV75; BWV98 rimane distinta; filtro `persona:0` rispettato.

**Cumulativo dei quattro lotti 45–48:** 121 opere/frammenti, oltre a 4 nodi versione (BWV80b + tre BWV82). Delle 121 opere, 111 sono collegate a `Cantata sacra`, 9 a `Cantata profana`, 1 a `Oratorio`; le 17 `Cantata corale` sono **sottoinsieme** delle 111 sacre, non un quarto addendo.

**Fan-out testato:** nella prova isolata a profondità 4, radice Bach con limite 24: **40 nodi/79 archi**, con «Tutte» **131 nodi/288 archi**. Le informazioni restano disponibili: nel test la radice Cantata sacra con «Tutte» restituisce tutte le **111** opere catalogate nel suo ramo.

**Limiti:** NON è stato eseguito un collaudo grafico WebGL reale e NON è stata caricata l'intera federazione/produzione `grafo.json` con tutti gli overlay. La prova strutturale non certifica che la preview pubblica si visualizzi correttamente in Android o desktop. Resta aperto il test HTTP individuale di tutte le sorgenti e la verifica delle righe XLSX.

**Preview anticache:** https://musurgiamundi.com/musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html?v=cantate48-20261111

## 7. Prossima fase

**Lotto49: BWV111–140** (cantate corali, spuri, versioni, riscontri e legami di riuso solo dopo analisi di fonte). Contestualmente, consolidare la GUI con paginazione vera per sottogenere in modo che **Tutte** non sia l'unico modo di raggiungere visivamente le opere successive. Prima della promozione in produzione, browser/WebGL e regressione d'interoperabilità Singspiel, Mozart, Sonata, Concerto, Quartetto e Cantata sull'intero grafo.
