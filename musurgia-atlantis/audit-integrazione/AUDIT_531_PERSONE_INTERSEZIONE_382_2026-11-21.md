# Gate reale: 531 relazioni persona e intersezione con i 382 archi originali Mundi
## Musurgia Mundi / Atlantis / Flaminio — 21 novembre 2026

**Ambito:** staging `musurgia-atlantis/audit-integrazione/` su `main`. Grafi pubblici e frontend di produzione **non modificati**; Lotto 2 Flaminio **BLOCCATO**.

### Metodo — esecuzione effettiva, non sola previsione
Sono state recuperate **tutte le 17 sorgenti JSON reali** di `main`, riassemblate in memoria, passate al `buildUnifiedDatabase` effettivo di `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` e analizzate con il codice effettivamente estratto dalla vista HTML `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html`: `rootedProjection` e `hiddenOriginalRelations`. La prova si è svolta in **JavaScript V8 con I/O dal connettore GitHub**; non equivale a un lancio CLI Node del file `TEST_*.mjs`, né a un collaudo browser/DOM/Canvas/WebGL o Android.

Sono state considerate tutte le radici dotate di proiezione specializzata nell'HTML corrente, con **profondità 5**, tutte le categorie e tutte le lenti Mundi abilitate. La ricerca degli archi originali esclusi è identica alla funzione dell'HTML: conserva per consultazione i collegamenti originali diretti non documentari e non HOLD ma non li immette nel grafo visibile. I record sono tracciati da **coppia `root_id|link_id`** e confrontati per ID canonico con il registro Mundi del giorno 20.

### Integrità del builder reale

| Misura | Risultato |
|---|---:|
| Sorgenti vere caricate | **17** |
| Nodi unificati | **2.897** |
| Archi unificati | **8.743** |
| Schede Flaminio Lotto 1 | **500** |
| Archi orfani | **0** |
| ID arco duplicati | **0** |

### Confronto puntuale 382 ↔ 531

| Misura | Esito |
|---|---:|
| Radici con proiezione specializzata nell'HTML corrente | **169** |
| Occorrenze radice–arco originali fuori dalla vista | **704** |
| Di queste, occorrenze verso persone | **531** |
| Archi del precedente censimento Mundi presenti fra le 531 | **382/382** |
| Archi del precedente censimento Mundi non ritrovati tra quelli nascosti | **0** |
| Occorrenze verso persone **fuori** dalle 382 già inventariate | **149** |
| ID arco distinti fra le 531 occorrenze persona | **531** |

**Il gate centrale è superato:** i 382 archi Mundi erano tutti inclusi nelle 531 relazioni persona escluse dalla navigazione specializzata, pur restando accessibili tramite archivio. Pertanto **531 − 382 = 149** è ora una sottrazione *legittima fra insiemi verificati*, non una deduzione dai soli numeri del thread.

Dei **149** casi residui, **106** provengono dal layer Mundi (comprese relazioni specialistiche e accessi derivati), **43** da Atlantis. Nessuna fonte è stata nuovamente verificata esternamente in questa sessione.

### Preclassificazione operativa delle 149 relazioni residue

| Natura prevalente | Occorrenze |
|---|---:|
| Pratica o repertorio di genere | **89** |
| Attribuzione di composizione/opera specifica attestata nel record, da confermare nel percorso | **16** |
| Ruolo scenico, storico, produzione o occasione | **15** |
| Relazione storica Mundi specifica, senza opera inferita | **13** |
| Testo poetico, libretto o altro ruolo letterario | **8** |
| Navigazione derivata, non prova diretta | **8** |
| **Totale** | **149** |

Queste sono **categorie preliminari di audit**, non certificazioni musicologiche né cambi del predicato originale. Il prospetto integrale delle **531** relazioni contiene 471 pratiche/repertori, 16 casi di autorialità opera-specifica, 15 ruoli/occasioni sceniche o storiche, 13 relazioni storiche, 8 letterarie e 8 di navigazione derivata.

**Esempi delle differenze semantiche da preservare:**
- Beethoven `compone_ciclo_di_lieder` *An die ferne Geliebte*, che non diventa un Lied singolo.
- Ravel `compone` *Boléro* (1928), che non equivale alla produzione/coreografia.
- Gasparo Angiolini `crea_coreografia_di` *Don Juan*; Gluck `compone_musica_per` lo spettacolo. Sono ruoli differenti.
- Maria d'Austria è destinataria dell'`Officium defunctorum` per le esequie: `composto_per_esequie_imperatrice_1603` **non significa che l'imperatrice abbia composto l'opera**.
- Lully `compone_musiche_per_la_comedie_ballet` e Rameau `compone_nel_genere_opera_ballet`: attestano prassi di genere, **non l'identità di una singola opera**.
- Otto collegamenti `accesso_indiretto_alla_famiglia` sono convenzioni di navigazione, non nuove fonti storiche.

I **16 casi opera-specifici** conservano tutti in Atlantis il livello `riscontro_storico_indipendente`, ma il recupero automatico nel visualizzatore richiede un gate dedicato su ID, predicato e natura del ruolo, senza ereditare composizioni dai generi.

### Perché 704 oggi, invece di 713 nell'audit storico?
Il rapporto del 20 novembre esaminava **159 nodi candidati, 137 radici specializzate**, in una fase precedente del visualizzatore. La prova attuale enumera **tutte le 169 radici specializzate** dell'HTML dopo le correzioni. Non è quindi una riproduzione dello stesso *perimetro storico*.

Per categoria, le occorrenze attuali sono **531 persone, 49 capitoli, 44 reti culturali, 39 concetti, 33 generi/forme, 4 opere e 4 eventi** (totale 704). Nell'audit precedente erano **531, 49, 44, 39, 32, 13 e 5** (713). La differenza è coerente con le correzioni successive di visibilità di opere, parti, suite e produzioni sceniche, ma senza una prova accoppiata sul vecchio commit **non si attribuisce ogni variazione a un commit specifico**.

### Articoli di audit salvati
- [Registro integrale 704 occorrenze, 531 persone e corrispondenza 382](REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json), con ID canonici e preclassificazione.
- [Harness Node aggiornato e dotato di gate numerici](TEST_RICONCILIAZIONE_RELAZIONI_PERSONE_2026-11-21.mjs). Il corpo di classificazione ha superato quattro prove sintattico-logiche puntuali, ma l'harness intero **non è ancora stato eseguito in CLI Node**.

### Decisione e gate successivo
**PASS V8 sui 17 dati reali e sul codice HTML** per ricostruire le relazioni originali nascoste e verificare il match **382/382**. **OPEN**: esecuzione della batteria Node CLI; prova browser/DOM/WebGL/Canvas/Android; verifica fonte per fonte e decisione UI sui **16** archi opera→autore documentati, rigorosamente dalla radice dell'opera.

Non promuovere in blocco gli altri **133** collegamenti residui; non trasformare i rapporti poeta/librettista/coreografo/committente in autorialità musicale. **Lotto 1 OPEN, Lotto 2 BLOCKED, produzione immutata.**
