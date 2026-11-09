# Checkpoint 26 — Estensione non distruttiva della tassonomia generi e forme

**Data:** 10 novembre 2026 · **Branch:** main · **Ambito:** esclusivamente `audit-integrazione/`.

## Riscontro reale sui dati
Riletto integralmente `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`, composto da 50 nodi legacy e 271 relazioni descrittive con compositori. Fra le 50 voci, 16 hanno `original_legacy_record.taxonomy.parent`: 15 genitori corrispondono a nodi effettivamente inclusi nel vocabolario Checkpoint11; un genitore, `polifonia`, non è in tale overlay. Questo è un problema di copertura della selezione dei 50 termini, non prova dell'inesistenza del concetto nel database originario.

Sei dei 15 rapporti erano già modellati nel Checkpoint25 (famiglia Concerto); i restanti **nove** sono ora archiviati, senza duplicarli, in `OVERLAY_TASSONOMIA_GLOBALE_CHECKPOINT26_2026-11-10.json`.

## Nuovi rapporti espliciti (nove)
- Opera → Opera buffa; Opera seria; Opera semiseria; Dramma giocoso.
- Tango argentino → Nuevo tango (nodo storico più specifico).
- Sonata → Sonata per viola nel Novecento.
- Suite → Suite orchestrale novecentesca.
- Musica da camera → Musica da camera novecentesca (ambito storico, non forma rigorosamente equivalente).
- Rapsodia → Rapsodia orchestrale ottocentesca.

Ogni record conserva identificativi legacy di figlio e padre, denominazioni, provenienza puntuale da `taxonomy.parent` e ambito di attraversamento limitato alla radice tassonomica.

## Eccezione non risolta
`forma-contrappunto-organistico-tardoottocento` indica `taxonomy.parent = polifonia`, ma `polifonia` non figura nei 50 nodi selezionati al Checkpoint11. Non creare arbitrariamente un nuovo ID né forzare l'aggregazione a un altro genere: controllare il grafo sorgente integrale e le altre partizioni della federazione.

## Stato e limiti
- Il JSON è **staging**, **non** ancora caricato dalla preview: non dichiarare che la navigazione delle nuove gerarchie sia già attiva.
- Nessuna opera è stata inventata o classificata: questo lotto registra esclusivamente archi *classe→classe*.
- Relazioni di tassonomia non diventano automaticamente contatti storici: selezionando Mozart non si possono mostrare altri compositori attraverso `Opera`, `Sonata` o altre categorie comuni.
- Tutti i capitoli sono risorse editoriali, non nodi della rete storico-musicale.
- Checkpoint24 rimane a **74/233** archi persona↔persona esaminati; prossimo lotto da 50 distinto da questo.
- Nessun file `musurgia-atlantis/grafo.json`, `atlante3d/` o HTML pubblico modificato; 210 lotti storico-filologici salvaguardati.

## Prossimi passi
1. Confrontare il patrimonio integrale di generi e forme, non soltanto i 50 nodi selezionati al Checkpoint11: riconciliare il genitore `polifonia` e gli altri rami mancanti.
2. Integrare l'overlay nel renderer di **sola preview**, combinandolo con Checkpoint25 e deduplicando per coppia e predicato; testare radici Opera, Dramma giocoso, Concerto, Sonata, Suite.
3. Agganciare opere concrete con fonti a compositore e forme, mantenendo molteplici classificazioni, versioni, estratti, trascrizioni e provenienza. Non dedurre un'opera dal solo legame autore↔genere.
4. Verificare effettivamente browser desktop, hover, etichette spente e tap Android prima di ogni promozione.
