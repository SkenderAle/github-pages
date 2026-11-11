# Musurgia Atlantis — Checkpoint 52G (fase 1)
## Sonata per pianoforte: recupero di Alban Berg op. 1 dal manifest Flaminio17

**Data:** 11 novembre 2026. **Ambiente:** staging `musurgia-atlantis/audit-integrazione/` su `main`.
**Stato:** PATCH STAGING e TEST MIRATO PASS; **24 JSON end-to-end e WebGL NON certificati**.
**Nessuna modifica:** `musurgia-atlantis/grafo.json` e `musurgia-atlantis/index.html` di produzione.

### Lacuna verificata
La preview prima del 52G costruiva il gruppo navigabile `atlas:gf:sonata-per-pianoforte` solo da record di Mozart e Beethoven filtrati da `prepareGenreRings`. Quel raggruppamento non prendeva in carico le opere dell'overlay Flaminio Checkpoint17, perché `genreRingEligible` selezionava le famiglie di ID dei Lotti35/36/37/38/41 e Brandeburghesi, non `audit:fl15`.

Nel manifest reale `OVERLAY_OPERE_GENERI_FLAMINIO_CHECKPOINT17_2026-11-09.json` era già presente **Alban Berg, Sonata in si minore per pianoforte op. 1**, nodo `audit:fl15:l06:w01`, con i due archi attestati:
- `audit:fl15:e0033`: `pers:alban-berg` → `audit:fl15:l06:w01` (`ha_composto`);
- `audit:fl15:e0034`: `audit:fl15:l06:w01` → `legacy:gf:genere-sonata` (`ha_genere`).

La fonte registra inoltre due faccette distinte: `sonata` per il genere/forma e `pianoforte solo` per l'organico. Identità e genere sono **source_attested_not_independently_certified**, non validazione filologica finale.

### Correttivo implementato
**Preview commit:** `bdf3e72c52edc09407c02ba9d7490a91d4303093`.

`prepareSonata39()` legge i record `work_registry` dell'overlay Flaminio17 e ammette nel sottogenere *Sonata per pianoforte* **soltanto** opere dotate contemporaneamente di:
1. faccetta genere/forma `legacy:gf:genere-sonata`;
2. faccetta organico esattamente `pianoforte solo`;
3. arco di attribuzione `autore→opera` presente nel manifest;
4. arco di classificazione `opera→Sonata` presente nel manifest.

I record selezionati vengono uniti a quelli catalogati da `genreRings` senza rimuovere gli archi originari. Per Berg il sottogenere riceve le due **relazioni di indice derivato**:
- `atlas:sonata39:author:pers:alban-berg:atlas:gf:sonata-per-pianoforte`, Berg→Sonata per pianoforte;
- `atlas:sonata39:work:audit:fl15:l06:w01`, opera→Sonata per pianoforte.

Entrambi i nuovi indici riportano `preview_only:true`, `review_status:source_attested_not_independently_certified`, `quality_gate:Flaminio17_catalogue_staging` e fonte `https://www.flaminioonline.it/Biografie/Berg-catalogo.html`. Non si introducono né un secondo Berg né una seconda opera; i collegamenti sono **non transitivi** e non autorizzano attraversamento Berg→Mozart/Beethoven tramite Sonata.

### Prove realmente eseguite
- **PASS sintassi**: compilazione degli script inline della preview modificata mediante parser JavaScript.
- **PASS helper mirato**: esecuzione di `prepareSonata39` estratto dal codice modificato, con il nodo e gli archi Berg realmente letti dall'overlay Flaminio17, più due *fixture* di controllo per Mozart e Beethoven (non il runtime federato completo).
- **PASS struttura**: il nodo Berg op.1 entra nel gruppo `atlas:gf:sonata-per-pianoforte`; vengono creati i due indici attesi con provenienza esplicita; nessun arco orfano, nessun ID duplicato nella prova circoscritta.

**NON eseguito:** avvio reale di tutti i 24 JSON in browser, esecuzione/esportazione della suite `REGRESSIONE_FEDERATA_CHECKPOINT52D.html`, prova di rendering WebGL, test mobile o regressione completa sulle famiglie di generi.

### Prossimi passi del 52G
- Verificare nel runtime federato le radici `Sonata`, `Sonata per pianoforte`, Berg e la sua op.1, Mozart, Beethoven, con filtri Persone/Opere/pertinenza, evitando il ritorno dei raggi diretti nel raggruppamento grafico quando non desiderati.
- Controllare `Quartetto` e i sottogeneri reali dei Lotti42/43/44, senza confondere quattro esecutori con un organico sempre identico: B37–42 di J. C. F. Bach hanno basso continuo, non automaticamente violoncello solo; conservare HOLD K285b e frammenti.
- Controllare `Cantata` e sottogeneri dei Lotti45–51, inclusi BWV189 HOLD, BWV200 frammento e BWV174 derivato dal Terzo Brandeburghese; nessuna attribuzione Bach automatica.
- Eseguire la suite federata 52D nel browser, archiviare JSON, collaudare WebGL e soltanto dopo esaminare la promozione della preview in produzione.

**Regola permanente:** tutti gli archi documentati restano nei dati; densità governata con filtri espliciti, pertinenza radicata e quality gate, non con cancellazioni automatiche.
