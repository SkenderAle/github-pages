# Audit preliminare delle relazioni persona → genere e forma (12 radici Mundi)
## Musurgia Mundi / Atlantis / Flaminio — 20 novembre 2026

**Ambito:** soltanto `musurgia-atlantis/audit-integrazione/` sul ramo `main`. Non sono stati modificati i grafi pubblici o il frontend di produzione. **Lotto 2 Flaminio BLOCCATO**.

### Perché questo nuovo censimento
Il checkpoint ha segnalato **531 occorrenze radice–arco verso persone** fra le 137 viste specializzate del database unificato. Prima di promuovere relazioni a navigazione ordinaria, occorre separare quattro fenomeni: pratica di una forma o genere, prova di un catalogo/repertorio, attribuzione a una singola composizione, menzione o confronto editoriale.

Questa è **una ricognizione preliminare distinta**, non la chiusura del gate sulle 531 occorrenze. Ha un perimetro riproducibile: le dodici radici di genere/forma della **fonte Mundi originale** più presenti nel censimento, e i loro archi diretti verso nodi di tipo `compositore`. Non include i link Mundi di lente derivata, gli altri nodi Mundi, le equivalenze di Atlantis, il dataset Flaminio né la differenza fra archi presenti nel DB e archi effettivamente nascosti dalle proiezioni.

**Fonte:** `atlante3d/database/grafo.json`, blob SHA `57c65e209628b0fe43d0d5040bd27deb7e1624c8`. Identificazione dei record tramite `mundi::grafo::<indice>` (indice dell'array `edges`, 0-based); il sorgente non è stato modificato.

### Risultati verificati direttamente sulla sorgente originale

| Famiglia (radice) | Archi verso compositori |
|---|---:|
| Sinfonia | 71 |
| Messa | 40 |
| Madrigale | 22 |
| Variazioni | 34 |
| Mottetto | 34 |
| Oratorio | 26 |
| Cantata | 30 |
| Suite | 25 |
| Ouverture | 29 |
| Balletto | 26 |
| Fantasia | 25 |
| Lied | 20 |
| **Totale** | **382** |

- **382 archi diretti distinti** verso **216 ID compositore** distinti.
- **382/382** includono almeno un URL nel campo `sources` e una `note`.
- **176/382** includono un valore non vuoto nel campo `evidence_status`; **206/382** non lo includono. L'assenza del campo **non equivale** a mancanza di fonte o a smentita musicologica.
- Distribuzione per predicato: `forma-o-pratica-documentata` **229**, `repertorio-formale-documentato` **119**, `musica-per-spettacolo-coreografico` **14**, `relazione-storico-musicale` **13**, `repertorio-storico-documentato` **6**, `repertorio-vocale-documentato` **1**.
- Gli URL sono stati **inventariati dai metadata del JSON**, non visitati nuovamente per una verifica esterna delle singole asserzioni.

### Lettura musicologica e regole operative
1. Un arco **compositore → forma/genere** con nota e fonte, anche se cita un lavoro riconoscibile, **non è automaticamente** un arco **compositore → singola opera canonica**. Per quest'ultimo occorre identificativo d'opera specifico e verifica di titolo, versione, attribuzione e natura della fonte.
2. Nel nodo **Madrigale** coesistono repertori medievali/trecenteschi e cinquecenteschi. Per esempio la nota di Mundi relativa a Francesco Landini specifica che il madrigale trecentesco non è il madrigale del Cinquecento. Non fonderne senza riserva i significati.
3. I **14** archi `musica-per-spettacolo-coreografico` nel Balletto non definiscono automaticamente la paternità della coreografia, produzione scenica o specifico allestimento.
4. La distinzione **Lied singolo / ciclo di Lieder** deve restare invariata. Una fonte relativa a un ciclo non crea automaticamente ogni Lied individuale.
5. Le schede bibliografiche Flaminio **non sono opere certificate**. Non usare la somiglianza di etichette per materializzare nodi mancanti.
6. Nel visualizzatore radicato, la relazione generale autore–genere può restare consultabile nell'**Archivio delle relazioni originali**; l'inserimento nel percorso corrente deve essere valutato in base al predicato, alla qualità e alla pertinenza della radice.

### Tracciato macchina per successive regressioni
Il file [`REGISTRO_PERSONE_GENERI_MUNDI_12_FAMIGLIE_2026-11-20.json`](REGISTRO_PERSONE_GENERI_MUNDI_12_FAMIGLIE_2026-11-20.json) conserva per **tutti i 382 archi**: indice della sorgente, ID e nome di radice e compositore, predicato, evidenza strutturata quando presente, categoria di audit, note e URL originali. Il campo `classification` segnala solo che si tratta di **relazioni genere/pratica/storia non equivalenti a identità di singola opera**. Non attribuisce una nuova qualifica di verità musicale alla fonte.

### Gate e prossime verifiche
- **PASS limitato:** censimento sorgente riproducibile, copertura completa dei 382 archi selezionati, note e URL presenti, classificazione formale dei predicati.
- **OPEN:** riconciliazione di questi record con le **531 occorrenze** effettivamente oscurate nel DB unificato (differente livello di identità, sovrapposizioni, proiezioni e origini), valutazione fonte per fonte, identificazione di opere canoniche già esistenti ed eventuali HOLD.
- **OPEN:** test Node CLI integrali, browser/DOM/WebGL/Canvas e Android. Non dichiarare PASS sui gate non eseguiti.
- **Nessuna modifica:** nodi, archi, crosswalk, viewer, grafo pubblico, status delle 500 schede Flaminio, apertura Lotto 2.

**Decisione:** passare dal censimento Mundi al confronto *per ID* con le 531 occorrenze della proiezione unificata, assegnando a ciascuna `GENERE_PRATICA`, `OPERA_SPECIFICA_VERIFICATA`, `MENZIONE_CONTESTO`, `CONFRONTO` oppure `HOLD`; promuovere eventualmente solo collegamenti giustificati, senza propagazione attraverso il genere.
