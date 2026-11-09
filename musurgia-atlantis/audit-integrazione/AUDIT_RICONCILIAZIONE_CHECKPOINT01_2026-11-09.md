# Musurgia Atlantis — Riconciliazione · checkpoint 01

**Data: 9 novembre 2026. Lotti 15–35 chiusi come catalogazione 210/210; inizio verifiche tecniche effettive sullo staging.**

## Origine dati
- `STAGING_TEST_MOZART_LEOPOLD_FASE2D_2026-11-08.json`
- `CROSSWALK_CONCETTI_FASE2D_2026-11-08.json`

Entrambi acquisiti integralmente dal repository via connettore GitHub; 14 controlli booleani effettivamente calcolati su record JSON, non controlli inventati o semplici checklist.

## Esito
**14/14 PASS.**
- PASS ROOT_01: Root Mozart e candidato Leopold separati
- PASS PRED_02: Predicati padre-figlio e maestro-allievo distinti
- PASS DIRECTION_03: Testi forward/reverse presenti
- PASS PROVENANCE_04: Fonti esplicite per le due relazioni
- PASS ROOT_FILTER_05: Due relazioni di Leopold escluse dal pivot Mozart nello staging
- PASS ROOT_REVERSE_06: Direzione Leopold verso Wolfgang
- PASS CROSS_07: Quattro target distinti
- PASS EDITORIAL_08: Partizione storica/editoriale coerente
- PASS NO_MERGE_09: Nessun merge registrato
- PASS PARALLEL_POLICY_10: Preservazione dei predicati e dei capitoli editoriali
- PASS SUM_11: Totale 91 incidenze sorgente
- PASS SUM_12: Totale 18 incidenze Atlantis
- PASS SUM_13: Totale 13 editoriali
- PASS SUM_14: Totale 5 non editoriali

## Conseguenze
- Nel caso Mozart–Leopold, mantenere padre-figlio e maestro-allievo come due archi paralleli con testi in due versi. La cappella salisburghese e il trattato violinistico non diventano vicini di Wolfgang per sola transitività attraverso Leopold.
- I quattro concetti (`dramma-giocoso`, `opera-buffa`, `opera-seria`, `genere-quartetto-archi`) conservano crosswalk semanticamente distinti. 91 incidenze di archi originali contro 18 Atlantis: 13 editoriali e 5 non editoriali. Queste sono **incidenze**, non archi globali distinti.
- Capitoli editoriali fuori dal grafo storico; nessun dedupe soltanto per coppia di estremi.

## Limiti e blocchi
Il test usa documenti di staging, NON legge né confronta integralmente `atlante3d/database/grafo.json`, `atlante3d/database/relazioni.json`, `musurgia-atlantis/grafo.json`. Non prova l'assenza di archi, la verità di tutti gli archi, né il comportamento effettivo della UI. Test `prepare`, `byId`, radice/livelli I–V, Node `--live`, browser hover e Android tap ancora aperti. Nessuna modifica ai grafi pubblici.

## Prossima ripresa
Sbloccare la lettura integrale dei grafi di produzione per confronto verificabile di `source`/`target`/`kind`/direzione/fonti e collisioni; implementare e lanciare test su runtime reale in staging isolato, senza merge finché tutti i gate non siano superati.
