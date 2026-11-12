# Musurgia Atlantis — Checkpoint 53A
## Cambio di priorità: prima la catalogazione, poi l'interfaccia

**Data:** 12 novembre 2026 · **Repository:** `SkenderAle/github-pages`, branch `main` · **Ambito:** solo `audit-integrazione/`.

### Mandato editoriale aggiornato

Su richiesta esplicita dell'utente, **sospendere i checkpoint GUI, Android, Canvas e WebGL**: tutte le verifiche del browser 52M e l'eventuale promozione dell'interfaccia sono differite. Il nuovo ordine vincolante è (1) inventario integrale di fonti/record; (2) identità univoche e versioni/parti/collezioni; (3) tassonomia dei generi e forme al singolare; (4) relazioni autore–opera–genere–sottogenere e trasmissioni/riusi, con fonte e gate; (5) controllo complessivo dei due database e Flaminio; **solo dopo** riprendere GUI e filtri.

Questo criterio supera, per priorità di sviluppo, l'orientamento del Checkpoint30 che chiedeva un'anteprima esplorabile prima della conclusione degli audit. **Non rimuovere la preview esistente**: semplicemente non dedicarle nuovi checkpoint, non farne l'arbitro della completezza dei record e non promuoverla in produzione in anticipo. Conservare i 210 lotti storici e tutte le annotazioni di fonte.

### Lotto BWV 201–250: verifica sorgenti e inventario

Sono stati letti i cataloghi [Flaminio, seconda pagina](https://www.flaminioonline.it/Biografie/Bach-catalogo-pagina2.html) e [bach.de, indice BWV](https://www.bach.de/werk/bwv.html). Risultato conservativo pubblicato in `CHECKPOINT53A_BACH_BWV201_250_INVENTARIO_CONSERVATIVO_2026-11-12.json`:

- **50 posizioni numeriche 201–250**, 14 record con suffisso (fra cui 205a, 207a, 208a, 210a, 216a, 233a, 243a, 244a/244b, 245a/b/c, 249a/b), 5 riferimenti a sezioni o derivazioni che non autorizzano cinque nuove opere; **13 possibili relazioni documentarie ancora NON pubblicabili**.
- Gli stati delle 50 posizioni non sono tutti equivalenti: **31** semplicemente catalogate, **5** di attribuzione discussa, **7** indicate come erroneamente attribuite a J. S. Bach, **1** frammento con autore discusso, **1** arrangiamento di altro autore, **1** arrangiamento bachiano di opera altrui, **1** integrazione compositiva su materiale altrui, **1** opera perduta, **1** opera incompleta, **1** frammento perduto con residuo. Queste categorie descrivono il **controllo delle schede**, non opere certificate e conteggiate da aggiungere.
- I numeri **BWV 218 e BWV 219** sono attribuiti da Flaminio a Telemann; **BWV 222** è attribuito a Johann Ernst Bach; **BWV 217, 220, 221** non autorizzano archi a J. S. Bach. **BWV 203/209, 224, 230, 231, 240** restano in verifica attributiva. **BWV 246** (Lukaspassion) non deve creare arco `Bach compone l'intera Passione`: Bach è documentato come copista/esecutore, con eventuale contributo circoscritto. **BWV 241** è un arrangiamento del Sanctus della *Missa superba* di Johann Caspar Kerll.
- Tre esempi di relazioni distinte, non di identità dell'opera: **BWV 205→205a** (rifacimento), **BWV 213/214→248** (materiali riutilizzati nell'Oratorio di Natale), **BWV 243a→243** (versione precedente→successiva). I 13 testimoni relazionali richiedono collaudo su movimenti e direzione; il solo testo della scheda non autorizza archi produttivi. La *Passione secondo Marco* BWV247 è perduta, non ricreare il suo testo musicale originale da una ricostruzione editoriale.

**Confronti puntuali di seconda fonte**, senza certificazione critica integrale: BWV203 (Nederlandse Bachvereniging: attribuzione discussa), BWV222 (IMSLP: Johann Ernst Bach), BWV241 (Bach-Cantatas: arrangiamento Kerll), BWV246 (Orchestra of St. Luke’s: copia/esecuzione non equivalgono a composizione). I restanti record devono ancora ricevere riscontri autonomi work-specific.

### Confronto col grafo di produzione originale

Letto il blob autentico `musurgia-atlantis/grafo.json` SHA `4863b3fe263154387de3388c0b813b5f94546f12`: **754 nodi, 1.718 archi, di cui 193 nodi `opera`**. Crosswalk strettissimo per numero BWV nell'ID/titolo o titolo normalizzato esatto: **1 possibile corrispondenza specifica** delle 50 posizioni, **BWV 244 → `opera:passione-matteo`**, con arco originale `E0717` da `pers:bach`; **49 senza match stretto**. Non interpretare quei 49 come mancanza di 49 opere nel complesso: questo è SOLO il grafo pubblico originario, **non** il grafo federato dei 24 JSON né tutte le identità con alias e versioni. La corrispondenza della Passione richiede ulteriore normalizzazione del titolo e metadati, senza duplicare il nodo.

Crosswalk salvato in `CROSSWALK_CHECKPOINT53A_BWV201_250_VS_ATLANTIS_2026-11-12.json`. Verifica meccanica conservata in `REGRESSIONE_INVENTARIO_CHECKPOINT53A_2026-11-12.json`: **PASS_INTERNAL_SOURCE_INVENTORY**, 50 numeri continui, nessun ID interno ripetuto, gate di creazione e fusione tutti chiusi; **non** è una certificazione delle 50 opere.

### Progressione obbligatoria dal prossimo checkpoint 53B

1. Recuperare **davvero** il sorgente `compositori_flaminio.xlsx` (52.150 righe e 149 etichette autore nell'ultimo inventario), o la sua rappresentazione integra. Reperire per ciascuna scheda di BWV 201–250 le **righe esatte** e non inventare `source_excel_row`. Lo stesso vale per gli altri 149 repertori.
2. Crosswalk `riga Flaminio → compositore certo → namespace di catalogo → opera / raccolta / parte / versione / frammento` su **entrambi** i grafi e sugli overlay; riaprire i 448 gruppi P0 e 136 P1 solo con prove puntuali già censiti nei Lotti21–22, senza ri-eseguire il triage da zero.
3. Sottoporre a verifiche filologiche specifiche i HOLD, registrando per ogni arco la frase direzionale, fonte, qualificazione della prova e stato. I generi e forme sono un albero di dati, non scorciatoie per inferire relazioni fra compositori.
4. Pubblicare manifesti di record completi nello staging, poi audit globale di duplicati, archi orfani, paternità improprie e perdita di metadati prima del database consolidato. L'eventuale GUI si riprende solo dopo la certificazione catalografica.

### Stato di scrittura

Nuovi file sotto `musurgia-atlantis/audit-integrazione/` soltanto. **Nessuna mutazione** di `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`, renderer o preview. Nessuna promozione di archi o opere speculative.
