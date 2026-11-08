# Musurgia Atlantis — Fase 2M · Lotto 02
## Audit del processo `prepare`, delle etichette e della visibilità degli archi

**8 novembre 2026 · branch `main` · perimetro: `musurgia-atlantis/audit-integrazione/` soltanto.**

### Ambito e prova eseguita
Esaminato il codice operativo del renderer legacy `atlante3d/app-livelli.js` (blob `b7644154af527666d7b15bca8e31fe4f13924547`), mantenuto invariato. Sono state **eseguite 14 asserzioni diagnostiche in un V8 isolato** invocando porzioni letterali delle funzioni originarie `prepare`, `integrateGenreExtension`, `nodeEligibleForDepth` e `selectedDepths` su fixture sintetiche: **14/14 PASS**. I test confermano il comportamento del software, comprese le anomalie segnalate, ma **non equivalgono a test sul database completo**.

Pubblicato il runner ripetibile:
`musurgia-atlantis/audit-integrazione/TEST_PREPARE_VISIBILITA_FASE2M_LOTTO02_2026-11-08.cjs`.

Da un checkout del repository:
```sh
node musurgia-atlantis/audit-integrazione/TEST_PREPARE_VISIBILITA_FASE2M_LOTTO02_2026-11-08.cjs
node musurgia-atlantis/audit-integrazione/TEST_PREPARE_VISIBILITA_FASE2M_LOTTO02_2026-11-08.cjs --live
```
La prima forma esegue le fixture. La seconda, **non ancora eseguita in un processo Node sul checkout**, legge i tre database originali e stampa i conteggi effettivi di preparazione e la lista esemplificativa degli archi base occultati dalla prevalenza specialistica. Non scrive file.

### Esito tecnico: quattro regole distinte

1. **Preparazione nodi e etichette** (`app-livelli.js`, righe 991–1013). `prepare` esclude dal set visualizzato i nodi `type=ambito` e `visible=0`; alcuni registi classificati `compositore` diventano `persona` **solo nell'oggetto di visualizzazione**, senza mutare il file sorgente. Il nome in UI continua a dipendere da `label`/`name` e dai riferimenti `byId`. L'adapter del Lotto 01 ha garantito la parità su **883 etichette di staging**, non la parità della DOM effettiva, del browser o delle etichette di un grafo fuso.

2. **Gate delle relazioni specialistiche** (righe 1015–1025). Una relazione passa nel set `lensEdges` quando `status` comincia con `documentato`, entrambi gli estremi sono preparati e `sources` è un array non vuoto. Il gate **non verifica autonomamente** la pertinenza di una fonte o la verità del rapporto, e non equivale al gate storico-filologico Atlantis. L'eventuale URL non valido sarà rifiutato più avanti dal pannello, benché la relazione possa essere visibile.

3. **Prevalenza di scuola ≠ cancellazione / deduplica** (righe 1026–1030). `schoolPairs` contiene le coppie non orientate delle relazioni specialistiche `group=scuole`. `historySchoolEdges` occulta **tutti** gli archi base con quella coppia, persino quelli di natura differente; aggiunge poi gli archi specialistici. `edges`, invece, conserva gli archi base filtrati per estremi visibili. Il successivo `dedupeEdges` (riga 354) opera per `id` o per chiave `source|target|group|kind`: **non** replica la sostituzione semantica della coppia della scuola. Il test di due archi base con significato diverso e una scuola specialistica documenta questa differenza. **Per Atlantis: ogni record e ogni predicato rimangono distinti; la precedenza è attributo di resa, non identità d'arco.**

4. **Estensione operetta/musical** (righe 951–990). `integrateGenreExtension` costruisce un `seen` sulle sole coppie non orientate di estremi, e può quindi **non aggiungere** un nuovo arco specialistico con `forward/reverse` differente. Aggiorna anche `url` e, se assente, `taxonomy` di un nodo esistente *nella copia in memoria*. La fixture conferma che una seconda relazione distinta con gli stessi estremi non entra nel set visibile. Lo staging di **30 relazioni dichiarate** dell'estensione è già conservato; non applicare tale deduplica ai record da migrare.

### Diagnosi della profondità e pertinenza
- `readingDepth()` (riga 51) restituisce solo **1, 2, 3**, mentre Atlantis dovrà consentire **I–V** con filtro radicato.
- `nodeEligibleForDepth` (righe 1054–1067) esclude dai passi di espansione i nodi `geografia` e `periodo`; `prepare` mantiene tuttavia i periodi fra i nodi storici. Distinguere quindi presenza del nodo e attraversabilità.
- `selectedDepths` (righe 1068–1104) usa una visita a frontiere successiva: solo nel primo salto impone `readingAllowed`; dopo il primo livello può attraversare una `corrente` per raggiungere un altro compositore, senza una prova autonoma pertinente alla radice. Fixture: **Mozart → dramma giocoso → autore estraneo** appare al livello II; **Mozart → Classicismo → Haydn** è bloccato dall'esclusione di `periodo`. La prima traiettoria resta *contraria* al contratto Atlantis. Un limite numerico (`budget`) non sostituisce il gate storico radicato.
- Restano confermate le **sette collisioni capitolo/periodo keep_distinct**; i capitoli di Musurgia Mundi non sono mai ponti nel grafo storico-musicale.

### Presentazione e interazione: collaudi ancora mancanti
- La frase da hover desktop compare in `pointermove`/tooltip (righe 2086–2092).
- Il tap/click di una linea attiva `showRelation` da `pointerup`/release se non vi è trascinamento (righe 2081–2108). `showRelation` mostra frase, nota e link delle fonti (righe 1142–1158).
- Sono **solo percorsi osservati nel codice**, non prove di effettiva usabilità su Android o browser, né di etichette chiaramente leggibili dopo la fusione.
- **Verifica di etichette live da completare** confrontando `byId` preparato, 509 persone + 374 concetti degli staging, alias, e prospettiva di ogni arco sovrapposto. Non dichiarare «parità browser» per il solo confronto 7.712/7.712 del Lotto 01.

### Vincoli di integrazione e prossima ripresa
1. Eseguire il runner `--live` nel checkout, registrare conteggi, coppie scuola sovrapposte e conflitti effettivi. Distinguere **archi nascosti** da **archi scartati in fase di integrazione in memoria** e da **record preservati**.
2. Stabilire ID/versioni per record relazionali originali e predicati multipli; tutte le frasi `forward/reverse`, note, fonti e provenance sono da preservare.
3. Confrontare etichette live e staging in entrambi i versi; correggere eventuali difetti grammaticali in un patchset editoriale **separato**, senza alterare l'adapter letterale.
4. Implementare **soltanto in staging** un gate radicato di pertinenza I–V con casi sentinella Mozart–Leopold, scuole, generi, periodi, opere e risorse editoriali. Test su grafi e fonti, poi hover desktop/tap Android.
5. Solo dopo i gate: piano di merge reversibile e checklist di rilascio.

**Nessuna modifica eseguita** a `musurgia-atlantis/grafo.json`, `atlante3d/database/*`, `atlante3d/app-livelli.js`, interfacce o pagine pubbliche. Restano conservati **3.856 archi legacy**, **1.718 Atlantis**, e i **210 lotti storico-filologici**. La Fase 2L resta **250/250**, senza equiparare il triage alla certificazione dei singoli rapporti.
