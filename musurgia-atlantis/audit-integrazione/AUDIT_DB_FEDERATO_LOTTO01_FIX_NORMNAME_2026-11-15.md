# Musurgia Mundi–Atlantis · Lotto Flaminio 01 · verifica adattatore federato

Data: 15 novembre 2026. Repository: `SkenderAle/github-pages`, branch `main`.

## Scopo

Rendere utilizzabile l'ingresso federato *già presente* per tutte le 500 schede Flaminio. Non sostituire i database originali, non dichiarare approvate identità musicali ancora candidate e non modificare l'atlante di produzione.

## Inventario preesistente controllato

- `DB_FEDERATO_LOTTO01_2026-11-15_MANIFEST.json`: 869 nodi Mundi, 754 Atlantis, 1.365 staging Flaminio; 2.983 entità federate (5 persone tecnicamente condivise), 8.324 archi incluse 1.389 relazioni specialistiche.
- `DB_FEDERATO_LOTTO01_2026-11-15_REGISTRO_500.json`: tutte le 500 righe originali documentate.
- 499/500 righe con riferimento musicale o raccolta di qualità variabile; una riga (Excel 3635, *Weihnachts Oratorium*) con solo riferimento documentario; 17 audit attributivi.
- 146 abbinamenti nominali Mundi/Atlantis restano candidati, non fusi.
- Queste cifre sono quelle del rapporto/regressione del database federato precedentemente registrati, **non ricalcolate da un nuovo runtime in questa verifica**.

## Difetto corretto

Il file `DB_FEDERATO_LOTTO01_2026-11-15.mjs` conteneva, subito dopo `registryPath`, un'espressione arrow autonoma `s=>String(s||"").normalize("NFD")...`, senza assegnazione a `normName`. La successiva chiamata a `normName` nelle funzioni di riconciliazione avrebbe causato `ReferenceError` all'esecuzione.

La riga è stata trasformata in `const normName = s=>String(s||"").normalize("NFD")...` con commit `f24189ac9fcf39116caf256cf398cfac2e76108f`, lasciando inalterato il resto del modulo.

## Esito della verifica successiva al commit

È stato riletto il file aggiornato: dichiarazione presente; vecchia espressione autonoma assente; funzioni `assembleFederation`, `projectForViewer`, `loadFederatedDatabase`, `categoryFor` presenti; quattro sorgenti grafiche previste; registro 500 utilizzato e guardia 500 presente. Verifiche **statiche PASS**.

## Limiti

Questa attività non include esecuzione del modulo su tutti i file, prove nel browser, Android, Canvas/WebGL, audit filologico di tutte le identità, certificazione degli archi oppure verifica visiva dei filtri. Non è stata modificata alcuna fonte dati, né `atlante3d/database/grafo.json`, né `musurgia-atlantis/grafo.json`, né `musurgia-atlantis/index.html`.

## Successiva condizione di rilascio

Eseguire il modulo reale e una regressione che certifichi 500/500 schede rintracciabili, 0 archi orfani, categorie Nodi/Etichette autonome per tutte le classi, nessun HOLD attivo di default, nessuna perdita di fonti, link, note o ancore; poi collegare il viewer a questa federazione e collaudare su Android. Conservare la distinzione tra completamento del **registro fonte** e approvazione **delle identità musicali**.
