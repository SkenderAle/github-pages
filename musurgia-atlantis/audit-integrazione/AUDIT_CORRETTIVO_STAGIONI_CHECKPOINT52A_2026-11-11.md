# Checkpoint 52A — Vivaldi, Le quattro stagioni (11 novembre 2026)

## Segnalazione e riscontro
Schermate dell'utente: il nodo storico `opera:quattro-stagioni` compare separato dalla gerarchia `Concerto`/`Concerto solistico` e in una vista anche dall'autore.
Nel grafo pubblico originario `grafo.json` (blob `4863b3fe263154387de3388c0b813b5f94546f12`) esistono già `pers:vivaldi`, `opera:quattro-stagioni` e **l'arco di paternità E0715** `pers:vivaldi → opera:quattro-stagioni`, relazione `compone_la_musica_di`. Il disallineamento è anche nella costruzione della vista: non cancellare né ricreare E0715.

## Fonti Flaminio
Catalogo dei dodici concerti Op. 8: https://www.flaminioonline.it/Biografie/Vivaldi-catalogo-opus.html
Guida dell'indice Vivaldi: https://www.flaminioonline.it/Guide/Vivaldi-Guide.html
Quattro concerti individuali e guide:
- Op. 8 n. 1, RV269, **La primavera**, mi maggiore, https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto269.html
- Op. 8 n. 2, RV315, **L'estate**, sol minore, https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto315.html
- Op. 8 n. 3, RV293, **L'autunno**, fa maggiore, https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto293.html
- Op. 8 n. 4, RV297, **L'inverno**, fa minore, https://www.flaminioonline.it/Guide/Vivaldi/Vivaldi-Concerto297.html
Organico: violino solista, archi, basso continuo. La raccolta di quattro opere non costituisce un quinto concerto. La raccolta editoriale Op.8 completa comprende dodici concerti; `Le quattro stagioni` sono il sottoinsieme di quattro.

## Codice pubblicato su main, *solo staging*
File: `musurgia-atlantis/audit-integrazione/PREVIEW_RADICATA_CHECKPOINT06.html`, commit `b2f7b5ee79b4c910c956d8c4ac7b8c1337592b4f`.
- `prepareSeasons52()` inserisce quattro identità individuali (`atlas:vivaldi-rv269-op8-1`, `atlas:vivaldi-rv315-op8-2`, `atlas:vivaldi-rv293-op8-3`, `atlas:vivaldi-rv297-op8-4`), con quattro guide Flaminio.
- 12 archi nuovi: per ciascuna opera **autore→concerto**, **raccolta→concerto** e **concerto→Concerto per violino**. La tassonomia preesistente `Concerto per violino→Concerto solistico→Concerto` non è duplicata.
- `attachSeasons52()` collega gli estremi visibili e consente di partire dalla raccolta, da Vivaldi, dal singolo concerto o dal genere. In ogni vista i limiti di profondità e categoria continuano a governare quanto è visibile, non la conservazione dei dati.
- Wrapper `getRootedPreviewCore` → `getRootedPreview`, per non rifare tutte le diramazioni dei checkpoint precedenti.

## Verifiche e limiti
- File di staging riletto da GitHub: quattro RV canonici, hook di caricamento e wrapper presenti.
- **Parser JavaScript:** tutti e tre gli script inline della preview passano `new Function(...)` senza errori di sintassi.
- NON eseguiti: collaudo grafico WebGL/browser dei diversi filtri, simulazione completa di tutti gli overlay, certificazione di tutti i click e link su smartphone.
- **Produzione invariata:** non modificare `musurgia-atlantis/grafo.json` né `musurgia-atlantis/index.html` prima dei collaudi.
- Verificare in browser: radice Vivaldi, raccolta, ogni RV, Concerto per violino, Concerto solistico, Concerto; controllare archi, profondità, etichette attive e collegamenti alle guide. Nessuna deduzione di relazione fra compositori attraverso i generi.

## Ripresa
Testare i sette casi radice e correggere eventuale perdita di archi; poi validazione federata. Il Lotto 52 BWV201–250 è un filone catalografico distinto e non deve sovrascrivere questo Checkpoint52A.
