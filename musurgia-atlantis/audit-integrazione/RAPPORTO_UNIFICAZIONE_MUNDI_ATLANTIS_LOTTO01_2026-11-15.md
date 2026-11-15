# Musurgia Mundi–Atlantis — Unificazione strutturale prima del Lotto02 Flaminio

**Data:** 15 novembre 2026. **Repository:** `SkenderAle/github-pages`, `main`. **Stato:** unificazione tecnica e navigabile in **staging**; canonizzazione filologica e browser reali ancora da completare. **Lotto02 Flaminio BLOCCATO**.

## Risultato eseguito sui dati reali

Il modulo `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` applica il crosswalk storico di persone *prima* di aggiungere lo staging Flaminio; conserva tutti i nodi originali nella proprietà `provenance` e tutti gli archi originali nella proprietà `original`. Il viewer isolato `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` carica ora questo modulo, non l'adattatore non unificante precedente.

| Elemento | Numero |
| --- | ---: |
| Mundi: nodi di base | 869 |
| Mundi: record estensione operetta/musical | 15 (14 nuovi, uno già presente) |
| Atlantis: nodi base | 754 |
| Flaminio: nodi staging | 1.365 |
| Identità Mundi–Atlantis riunite nella vista tramite crosswalk preesistente | 162 |
| Identità persona Atlantis–Flaminio tecnicamente condivise | 5 |
| Nodi della vista unificata | **2.835** |
| Archi originali conservati (Mundi base, speciali, estensione, Atlantis, Flaminio) | **8.354** |
| Ponti editoriali, NON fusioni di identità | 10 |
| Archi totali della vista | **8.364** |
| Record Flaminio originari conservati e collegati | **500/500** |
| Archi orfani e ID arco duplicati | **0/0** |

Le **162 identità di navigazione** provengono da `CROSSWALK_GLOBALE_PERSONE_CHECKPOINT21_2026-11-10.json` (155 forme nominali + 7 varianti/alias). Si tratta di riuso di una riconciliazione editoriale precedente, **non di nuova certificazione indipendente contro omonimi**. Ogni record originario rimane reversibile e ispezionabile.

Il modulo aggiunge 5 ponti **capitolo tratta periodo** (Medioevo, Rinascimento, Barocco, Classicismo, Romanticismo) e 5 ponti **stesso tema editoriale, non stessa identità** (Opera buffa, Opera seria, Dramma giocoso, Quartetto d'archi, Operetta viennese). Non si uniscono per omonimia generi, opere, raccolte o versioni.

## Regres­sione reale dei dati

Il registro `REGRESSIONE_UNIFICAZIONE_MUNDI_ATLANTIS_LOTTO01_2026-11-15.json` documenta **18/18 PASS**, usando l'esecuzione effettiva del modulo JavaScript su tutti i JSON di input, più il controllo di sintassi della pagina HTML: 0 righe Flaminio mancanti; 0 archi orfani o ID doppi; ogni provenienza e relazione originale mantenuta; i 15 nodi di estensione preservati; filtri per categorie funzionalmente coerenti; nessun HOLD visualizzato nel test predefinito.

Esempi di radici: **Bach** conserva archi Atlantis + Mundi + Flaminio; **Beethoven** idem; **Mozart** e **Chopin** conservano i due patrimoni originali. Bach filtro solo generi: 39 nodi/44 archi; filtro solo opere: 308 nodi/333 archi, sempre nella proiezione runtime, **non test Android**.

## Differenza tra unificazione e certificazione

L'unificazione **tecnica** è avvenuta per le identità documentate nel registro, e le reti sono ora attraversabili tramite nodi comuni; **non è una deduplicazione indiscriminata**. Tutte le persone fuori crosswalk e le categorie di opere/forme omonime mantengono la propria identità fino a revisione. Rimangono piccoli componenti isolati da valutare, inclusi alcuni nodi musicali che non hanno collegamenti navigabili approvati.

Il pubblico `musurgia-atlantis/index.html`, `musurgia-atlantis/grafo.json` e `atlante3d/database/grafo.json` non sono modificati. `atlante3d/database/collegamenti-sito.json`, `consultazione.json`, `identita-esterne.json` e `video.json` restano archivi specialistici sorgente, non scartati.

## Gate che devono chiudersi PRIMA del Lotto02

1. Collaudo reale dell'anteprima in browser desktop e Android (apertura/ricerca/etichette/filtri/gesti fluidi), incluso campione di compositori diversi da Bach.
2. Verifica documentale del crosswalk di identità, soprattutto omonimi e 7 alias; schema reversibile dei casi dubbi.
3. Riconciliazione controllata di opere, raccolte, versioni e generi/formati comuni, senza derivare identità da soli titoli simili.
4. Revisione dei componenti rimasti isolati e delle relazioni storiche semanticamente diverse; nessuna conflazione di archi Mundi e Atlantis con direzione o significati differenti.
5. Conferma che tutte le 500 schede sono ricercabili dal viewer e che HOLD/attribuzioni dubbie rimangono documentate ma non promosse.
6. Solo dopo collaudo positivo e report filologico, decidere promozione del database di produzione; il Lotto02 rimane fermo fino ad allora.

**Commit rilevanti:** modulo `762c2e5a88ee59ad39f3fcbf04f79c9494d9b5a1`; viewer collegato `3a600ece7efcfee3c69c63ec4cf6bf6176082aca` (poi ricerca alias `f793219370ddb52eff8fd18db0319ddb4d7d38d8`); regressione `aca40103851a398586a05a4bbff8ed1dfc4844d0`.

**Decisione operativa:** NON iniziare Lotto02 finché l'unificazione Mundi–Atlantis non sia verificata sostanzialmente e sul dispositivo.

## Addendum: correzione viewer prima del collaudo, 15 novembre 2026

**Commit:** `a4ffdb8ebca6783a6f67ec54703d5ecb4e3357b5`.

La regressione strutturale 18/18 era relativa al modulo dati e alla sintassi del viewer, non dimostrava l'avvio nel browser. Nell'HTML è stato individuato un controllo errato `db.counts.orphan_edges!==0`: il database unificato espone `orphan_links`, dunque il test originale rifiutava anche un grafo integro. La guardia è stata sostituita con `db.counts.orphan_links!==0`.

Corrette inoltre le proprietà necessarie al renderer Canvas di compatibilità: `_focus` per la radice, `_depth` per i livelli, `_label` per le etichette filtrate; introdotte dimensioni del canvas coerenti con il contenitore e ridimensionamento responsivo. Il contatore dei risultati usa ora `db.counts.nodes` anziché la precedente cifra federata di 2.983.

**Verifica post-commit:** rilettura remota dell'HTML e 7 verifiche statiche sulle modifiche: PASS. **Non ancora eseguiti:** avvio reale del viewer in un browser con dati remoti, confronto visivo dei filtri su Android, verifica filologica indipendente di tutte le corrispondenze. I 18 test strutturali del modulo restano documentati nel file di regressione precedente, senza attribuire loro un collaudo browser. `musurgia-atlantis/grafo.json`, `atlante3d/database/grafo.json` e le pagine pubbliche non sono stati modificati. **Lotto02 Flaminio BLOCCATO.**

## Addendum: navigazione radicata dei generi, 15 novembre 2026

**Commit:** `1ee39b7608b47a7987d452721eb7ea700918a5b3`.

È stata corretta la proiezione `projectForViewer`: con una radice appartenente a `generi_forme`, i sottogeneri intermedi possono ora espandersi sino alle opere già collegate da archi nel database. Partendo invece da una persona (ad esempio Bach), una forma ombrello non espande indiscriminatamente l'intero repertorio di altri compositori. I filtri di visibilità continuano ad applicarsi alla proiezione senza alterare dati o identità.

**Prova isolata della funzione, eseguita su un grafo sintetico:** 3 verifiche funzionali PASS: (1) radice Concerto → sottogenere → opere; (2) radice autore senza espansione estranea dal genere; (3) filtro solo opere mantenendo la radice. Una quarta verifica conferma la conservazione dell'intestazione originale del modulo. I test sintetici non sono un certificato di completezza musicologica delle fonti effettive.

**Contesto concorrente rilevato sul ramo main:** al momento dell'intervento risultavano già integrati il crosswalk curato di 8 tassonomie Mundi–Atlantis, 10 riferimenti legacy Flaminio, 4 opere RV 269/315/293/297 e 18 archi semantici. Non sono stati duplicati né alterati. Le metriche della precedente regressione 18/18 appartengono alla revisione precedente del modulo e non devono essere considerate un test runtime della revisione più recente. **Collaudo reale browser/Android ancora aperto. Lotto02 Flaminio BLOCCATO.**
