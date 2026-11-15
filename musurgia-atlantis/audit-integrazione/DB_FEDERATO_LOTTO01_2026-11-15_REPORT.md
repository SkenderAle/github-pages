# Musurgia Mundi–Atlantis — Database federato del primo lotto Flaminio
**Data:** 15 novembre 2026. **Stato:** staging non distruttivo; nessun grafo di produzione modificato.

## Decisione editoriale
Tutte le 500 righe originali Flaminio del lotto 01 entrano in un registro di fonti unificato e sono collegabili ai dati musicali esistenti. Il database federato usa un singolo punto di ingresso software ma legge gli archivi originali senza copiarli distruttivamente. `atlante3d/database/grafo.json`, `musurgia-atlantis/grafo.json` e lo staging V11 rimangono intatti.

## Componenti
- `DB_FEDERATO_LOTTO01_2026-11-15_MANIFEST.json`: elenco delle fonti originarie, SHA e policy di identità.
- `DB_FEDERATO_LOTTO01_2026-11-15_REGISTRO_500.json`: 500 record integrali con tutti i campi del CSV, nodi fonte e archi verso candidati musicali/audit.
- `DB_FEDERATO_LOTTO01_2026-11-15.mjs`: `loadFederatedDatabase()`, `buildFederatedDatabase()`, `projectForViewer()`; unifica logicalmente i grafi, mantiene livelli di provenienza e classifica le entità secondo filtri comuni.
- `DB_FEDERATO_LOTTO01_2026-11-15_REGRESSIONE.json`: controlli strutturali sui dati effettivi.

## Numeri dell'integrazione
- Grafo Mundi: **869 nodi, 2.437 archi**.
- Relazioni specialistiche Mundi: **1.389 archi**, distinte dalle relazioni del grafo.
- Atlantis pubblico: **754 nodi, 1.718 archi**.
- Staging Flaminio: **1.365 nodi, 2.780 archi**.
- Fusioni tecniche di identità da ID e nome coincidenti: **5 persone**.
- Chiavi federate: **2983 nodi**; relazioni sorgente mantenute: **8324**.
- Schede Flaminio: **500/500 con riga originaria e almeno un arco di riconciliazione**; **517** riferimenti a entità/audit; **17** con audit attributivo associato.
- Corrispondenze nominali Mundi↔Atlantis proposte: **146**, NON automaticamente fuse.

## Regole irrinunciabili
1. Nessuna riga Flaminio diventa automaticamente un'opera: le righe sono evidenze documentarie, le opere entità distinte.
2. Nessuna omonimia o titolo simile crea una fusione canonica. Le cinque persone con identità tecnica condivisa mantengono i record originari nei rispettivi provenance.
3. I generi editoriali Flaminio non sostituiscono la tassonomia Mundi. `categoryFor` produce una **categoria per l'interfaccia**, non un giudizio musicologico canonico.
4. Gli archi Mundi, Atlantis e Flaminio mantengono predicato, note, stato, direzione e testimonianza originale. Le 1.389 relazioni specialistiche restano una collezione distinta.
5. Fonte/rubrica/intestazione sono nel livello **documentazione**, normalmente escluso dalla rete di navigazione musicale; accessibili per audit.
6. Gli abbinamenti per nome fra i grafi sono candidati non attivi; qualità e attribuzioni dubbie non vengono promosse.
7. Il modulo implementa una proiezione con categorie e etichette indipendenti, ma **non è ancora collegato** al renderer pubblico. `projectForViewer` impedisce un fan-out indiscriminato oltre il primo livello attraverso autori e generi.

## Da completare
- Collaudo reale browser e Android, anche con Bach e compositori meno documentati.
- Riconciliazione filologica Mundi–Atlantis dei candidati per nome, distinzione di opere/versioni/raccolte.
- Gestione UI completa e filtri categoria + etichetta per la rete federata.
- Validazione del corpus esteso oltre le prime 500 righe Flaminio.

**Il lotto 01 è materializzato integralmente come fonte federata, ma le 500 identità storico-musicali non vengono dichiarate tutte certificate.**
