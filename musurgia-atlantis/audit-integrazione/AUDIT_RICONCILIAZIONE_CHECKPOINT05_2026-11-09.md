# Musurgia Atlantis — Checkpoint 05: prototipo di pertinenza radicata
**9 novembre 2026** · `main` · Solo staging in `audit-integrazione/`; **produzione invariata**.

## Obiettivo e confine
Questo checkpoint converte in codice di prova la **pertinenza radicata** decisa dall'utente: una ricerca di Mozart non può ereditare indistintamente i vicini di Leopold, né attraversare capitoli, periodi, generi o luoghi come hub automatici. I capitoli rimangono esclusivamente un patrimonio editoriale, mai nodi dello storico.

## File pubblicati
- `ROOTED_RELEVANCE_CHECKPOINT05.cjs`: prototipo CommonJS senza dipendenze esterne; funzione `rootedExplore(graph, rootId, options)` e `relationDetail(edge,perspectiveId)`.
- `TEST_ROOTED_RELEVANCE_CHECKPOINT05.cjs`: test Node da eseguire in un clone integro con `node musurgia-atlantis/audit-integrazione/TEST_ROOTED_RELEVANCE_CHECKPOINT05.cjs`.
- `CHECKPOINT_RICONCILIAZIONE_05_PILOTA_2026-11-09.json`: risultati e limiti del collaudo effettivo V8 sul blob reale.

## Contratto dell'algoritmo pilota
1. **Ingresso rigoroso:** `nodes` e `links` di Atlantis; ID duplicati rifiutati. Tutti gli archi attraversabili devono avere `historical_verified_independently: true` **e** `quality_gate: riscontro_storico_indipendente`. Questa è una scelta conservativa per il pilota, non una classificazione definitiva di tutte le relazioni di produzione.
2. **Capitoli:** qualsiasi nodo categoria `capitolo` o ID `cap:...` è escluso categoricamente, anche in caso di gate erroneamente positivo.
3. **Livello I:** soltanto relazioni verificate incidenti alla radice; per più predicati fra le stesse persone conservare ogni ID senza deduplicare per coppia.
4. **Livello II:** attraversamento automatico soltanto attraverso la medesima **opera, versione, evento o produzione specifica**, con due archi verificati. Esempio positivo `pers:mozart` → `opera:figaro` → `pers:da-ponte`. Non applicare la stessa operazione ai vicini-persone o ai nodi di senso.
5. **Livelli III–V:** richiedono un testimone esplicito riferito alla *radice originale*, predicato e arco specifici, motivazione e almeno un URL; non sono autorizzati dal semplice fatto che una relazione sia vera di un vicino. I testimoni non sono creati automaticamente dall'algoritmo. **Il prototipo si fida del registro `rootWitnesses` passato dal chiamante**: prima dell'utilizzo reale occorre un registro revisionato, versionato e protetto, con controllo su fonti e motivazioni.
6. **Profondità per tipologia:** `depthByCategory` permette un massimo distinto per categoria senza ridurre automaticamente gli altri livelli; `maxDepth` resta un massimo globale I–V.
7. **Contesti:** `nodo-di-senso`, luoghi, strumenti e reti culturali sono visibili se direttamente verificati, ma sono foglie: non diventano ponti generici. La categoria `nodo-di-senso` è ontologicamente eterogenea e richiederà sottotipizzazione prima dell'integrazione.
8. **Pivot esplicito:** selezionare un vicino e chiedere di esplorarlo deve avviare una **nuova** `rootedExplore` da quel nodo. Non bisogna reinserire i risultati nella rete di Mozart senza nuova prova di pertinenza.
9. **Spiegazioni:** `relationDetail` restituisce direzione, `forward/reverse` se presenti, nota, fonti e l'intero payload dell'arco; quando Atlantis dispone solo di `description`, **non inventa** una falsa frase inversa.

## Risultati eseguiti (non simulati) contro il blob pubblico integrale
Accesso GitHub per SHA `4863b3fe263154387de3388c0b813b5f94546f12`: **754 nodi, 1.718 archi, 586 con flag indipendente**. Lo stesso algoritmo è stato eseguito in V8 sui dati reali e su una fixture dichiaratamente sintetica:
- **18/18 asserzioni PASS**; Mozart: **8 relazioni dirette** storicamente verificate ammesse, **15 nodi / 18 archi** nel sottoinsieme radicato, profondità massima raggiunta **II**.
- `E0732` Mozart→*Le nozze di Figaro* e `E0874` Da Ponte→*Figaro* presenti; Da Ponte compare al **II livello**.
- Nessun capitolo fra i risultati storico-musicali.
- Messiaen→Boulez `L180-A01` (insegnamento verificato in Atlantis) presente nella ricerca diretta.

## Fixture sintetica: test di struttura, **non prove storiche**
La fixture usa marcatori `https://example.org/fixture`, non record certificati del corpus. Esamina due archi indipendenti padre/maestro verso Leopold, il blocco di cappella e trattato quando la radice è Wolfgang, il blocco delle transizioni attraverso un periodo, il pivot Leopold, la conservazione dei due predicati insegnamento/commissione Messiaen–Boulez, le frasi inverse e il caso di un terzo livello autorizzato soltanto tramite testimone esplicito. **La simulazione non certifica nessuno degli archi legacy sottostanti.**

## Limiti e prossimo gate
**Non eseguiti:** comando Node su clone completo (ambiente di esecuzione senza rete verso GitHub), collegamento al `prepare`/`byId` pubblico, interazione grafica con pivot, tooltip e schede, test desktop, test touch/Android. Il test Node è **pubblicato ma non ancora eseguito**. Il prototipo non importa ancora i 509 record persone, né le 3.856 relazioni legacy; tutte rimangono conservate nello staging esistente, con i loro gate di attraversamento chiusi.

**Prossimo Checkpoint 06:** esecuzione Node su clone completo e verifica di parità V8/Node; ontologia precisa dei nodi-contesto; registro delle prove radicate con review indipendente; integrazione read-only nel renderer di prova; test vero di `prepare`/`byId`, selezione per tipo, pivot, hover e tap Android. Solo dopo certificazione si può pensare alla fusione; mai modificarla implicitamente.

**Invarianti:** 210 lotti storico-filologici; 3.856 relazioni legacy; 1.718 Atlantis; 509 persone; 115 video e 207 associazioni; 537 URL con ancora; descrizioni `forward/reverse`; capitoli editoriali separati.
