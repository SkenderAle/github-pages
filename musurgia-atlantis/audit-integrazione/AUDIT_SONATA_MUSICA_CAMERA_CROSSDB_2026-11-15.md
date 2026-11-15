# Audit tassonomico — Sonata e musica da camera
**Data** 15 novembre 2026 · **Branch** main · **Lotto 2 Flaminio BLOCCATO** · **Solo audit/staging, nessuna modifica grafo pubblico**.

## Ricognizione dei tre archivi
- Mundi: **869 nodi / 2.437 archi**. Candidati individuati fra gli altri: `genere-sonata`, `genere-musica-da-camera`, `genere-quartetto-archi`, `forma-sonata-viola-novecento`, `sonate-a-tre-albinoni-op1-1694`, `nonetto-farrenc-musica-da-camera`.
- Atlantis: **754 nodi / 1.718 archi**. `senso:sonata`, `senso:forma-sonata`, `senso:sonata-strumentale-1590`, `senso:musica-camera`, `senso:quartetto` e singole opere/raccolte.
- Flaminio Lotto 1: **1.365 nodi / 2.780 archi**. Tipologie di sonata per violino, flauto, viola da gamba, tastiera e organo; quartetti per archi, sonate e relative raccolte. Molte voci sono `opera_candidata` e richiedono verifica prima di promozione.
- Scansione testuale esplorativa: 23 occorrenze Mundi, 19 Atlantis, 189 Flaminio (100 escluse le rubriche/record fonte in un primo filtro). **Questi numeri non sono conteggi esaustivi di opere cameristiche**: la ricerca lessicale include falsi positivi e non recupera tutti i repertori per organico. Il censimento completo dei 2.988 record resta il registro di copertura generale.

## Decisioni tassonomiche
1. **Sonata (genere)** diversa da **forma-sonata (principio formale)**. Una sonata del Cinquecento non implica struttura bipartita/espositiva-ripresa sette-ottocentesca. Mundi `genere-sonata` ↔ Atlantis `senso:sonata` già nel crosswalk curato: non duplicare l'identità.
2. **Repertorio per strumento solo** e **Musica da camera** come famiglie di accesso, non come forme. La Sonata può ricadere in entrambe in base all'organico. `genere-musica-da-camera` Mundi e `senso:musica-camera` Atlantis si candidano alla riconciliazione, ma quest'ultimo comprende anche la sociabilità, da preservare come storia culturale.
3. **Sonata a tre / trio sonata**: due parti melodiche più basso continuo, in cui l'organico performativo può eccedere tre musicisti. **Sonata in trio per organo**: organo solo, tre parti, pertanto non automaticamente musica da camera. Attestazioni Flaminio BWV 525–530.
4. **Sonata da chiesa** / **Sonata da camera**: designazioni storiche da confrontare con la partitura e il contesto, non trasformare in sottotipi universali delle sonate moderne.
5. **Quartetto d'archi**: identità Mundi `genere-quartetto-archi` e Atlantis `senso:quartetto` già riconciliata. Collegare alla famiglia Musica da camera; distinguere famiglia di organico, singolo quartetto, serie/raccolta e ensemble esecutivo.
6. **Trio, Quintetto, Sestetto, Settimino, Ottetto, Nonetto**: famiglie cameristiche per organico con possibili sottogeneri strumentali; non tutti i titoli che contengono il termine indicano un gruppo cameristico. Per esempio `Trio for Strings` è una composizione specifica, mentre un `trio super` organistico può essere scrittura a tre voci.
7. **Pianoforte solo** non appartiene automaticamente alla musica da camera sulla base dell'etichetta della rubrica Flaminio. Organico effettivo e prassi documentaria separati.
8. **Musica da camera vocale** e forme con canto/ensemble da trattare in seconda passata, senza assimilare tutto il Lied al genere cameristico.

## Opere e raccolte sentinella
- Atlantis `opera:sonate-beethoven-op2-1796`: tre sonate per pianoforte, una **raccolta**, non un'unica sonata.
- Atlantis `opera:sei-quartetti-haydn-mozart-1785`: sei quartetti, **raccolta**; occorrono membri singoli quando documentati.
- Atlantis `opera:quartetto-op130`, `opera:schubert-quartetto-d810`: opere individuali da collegare a quartetto d'archi.
- Atlantis `opera:sonata-pian-e-forte-1597`: appartenenza alla sonata strumentale storica, non alla forma-sonata.
- Flaminio `audit:fl01:jsb04:genre:sonata-camera`, `audit:fl01:jsb04:genre:sonata-violino-clavicembalo`, `audit:fl01:jsb05:genre:sonata-violino-solo`, `audit:fl01:jsb06:genre:sonata-trio-organo`: controllare le rispettive opere senza trasferire automaticamente stati di attestazione.

## Risultato tecnico
È stato creato `OVERLAY_TASSONOMICO_SONATA_MUSICA_CAMERA_2026-11-15.json` con **15 nodi progettati** e **34 relazioni proposte/di distinzione**, che puntano a identificativi verificati nei tre grafi. Il file **non è attualmente caricato dal builder unificato e non modifica l'interfaccia pubblica**.

## Gate ancora aperti
1. Rilettura di **tutte le relazioni** pertinenti nei tre grafi, negli archivi specialistici e nei checkpoint storici; confronto contro il registro completo dei 2.988 record.
2. Identificazione ed eventuale ricomposizione delle opere e raccolte duplicate Mundi/Atlantis/Flaminio, mai per sola denominazione.
3. Classificazione musicologica per organico/forma di tutte le opere candidate, con fonti; controllo dei casi incompleti o dubbi.
4. Test di visibilità filtrata fino a livello V: Bach → Sonata per violino solo → BWV 1001/1003/1005; Bach → Sonata in trio per organo → BWV 525–530, **senza** ponte erroneo alla musica da camera; Mozart → sei quartetti Haydn come raccolta, con i membri soltanto se esistono e sono convalidati.
5. Riconciliazione dei nodi sensibili di Mozart senza importazione anticipata del suo catalogo Flaminio: richiesta utente di rimandarla.
6. Solo dopo i test applicare il gate `FAMILY_VALIDATED`. Al momento: **IN_REVIEW**.

**Regola permanente:** ogni decisione presente o futura deve essere propagata a tutti i record pertinenti nei tre archivi, tenendo distinti il censimento automatico, la proposta tassonomica, la validazione delle identità e il collaudo della navigazione.
