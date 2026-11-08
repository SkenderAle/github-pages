# Musurgia Atlantis — Fase 2M, Lotto 03
## Verifica sul corpus reale e inventario conservativo delle risorse

**8 novembre 2026 · branch `main` · solo cartella `audit-integrazione/`.**

### Esecuzione e limiti
Eseguita in **V8 in memoria sui JSON reali** una riproduzione letterale delle funzioni `integrateGenreExtension(db, extension)` e `prepare(db)` estratte dall'effettivo `atlante3d/app-livelli.js` corrente. Sono stati caricati i database completi dal repository remoto. **Non** è stata avviata una shell Node nel checkout e **non** è stato effettuato un test browser/Android: il runner `TEST_PREPARE_VISIBILITA_FASE2M_LOTTO02_2026-11-08.cjs --live` rimane disponibile per replica locale.

### Risultato del renderer su dati veri
| Passaggio | Quantità |
|---|---:|
| Base, nodi / archi | 869 / 2.437 |
| Specialistiche, relazioni originali | 1.389 |
| Estensione operetta/musical, nodi / relazioni dichiarati | 15 / 30 |
| Dopo integrazione in memoria, nodi / archi base | **883 / 2.463** |
| `prepare`, nodi visibili / archi base con estremi visibili | **878 / 2.354** |
| Specialistiche ammesse dal renderer | **1.381** |
| Archi base non disegnati nella vista con prevalenza `scuole` | **156** |
| Archi resi da `historySchoolEdges` | **2.585** |

Il numero 2.585 discende da 2.354 archi base preparati, meno 156 sovrapposti alle coppie specialistiche di scuola, più 387 relazioni `scuole` ammesse. Le **156 occorrenze non sono cancellazioni**: il renderer sceglie quale arco mostrare. Atlantis non deve usare la preferenza visiva come regola di deduplica o di esclusione dal dataset.

L'estensione definisce **15** nodi ma ne aggiunge **14**: `genere-musical` è già nel grafo. Delle **30** relazioni ne aggiunge **26**; le altre quattro vengono saltate perché coincide la coppia non orientata, **sebbene abbiano `kind`, `forward`, `reverse` e fonti differenti** rispetto agli archi già esistenti. Tutti e quattro i casi riguardano `genere-musical` con Richard Rodgers, Leonard Bernstein, Stephen Sondheim e George Gershwin. Vanno conservati come record distinti con provenienza separata; solo una successiva analisi semantica può decidere come presentarli.

Le **8** relazioni specialistiche non ammesse riguardano estremi `type=ambito` deliberatamente non visualizzati, **non** nodi assenti dal JSON né fonti mancanti: `opera-lirica` (3), `melodramma` (1), `avanguardie` (1), `risorgimento` (3). Le categorie editoriali non devono essere promosse automaticamente a nodi storici per recuperare le linee: occorre ricollocare ogni risorsa nel piano corretto, conservando la relazione originale in staging.

### Registro di preservazione link e fonti
È stato generato `REGISTRO_RISORSE_FASE2M_LOTTO03_2026-11-08.json` come **manifest non distruttivo**, con nomi e SHA Git dei file sorgenti, inventario per ID legacy, tutti i riferimenti URL delle pagine, schede di ogni audio/video con le associazioni originali, e indici dei profili di consultazione. I file sorgenti restano l'autorità completa per tutti gli altri campi e payload. **Non è un merge e non altera i file di produzione.**

| Patrimonio | Esito reale |
|---|---|
| `collegamenti-sito.json` | **799** chiavi `byNode`, di cui **249** con rimandi e **550** vuote; **537** URL distinti, **tutti 537 con ancora `#`**; **101** nodi con più rimandi |
| `video.json` | **115** risorse, **207** associazioni, **115** bookmark di pagina registrati in totale, senza ID video sconosciuti |
| `consultazione.json` | **388** gruppi `entries`, **492** profili, **106** `otherSources`; nessun ID di gruppo/profilo orfano rispetto a base + estensione |
| Integrità archi | **0** estremi mancanti nei 2.437 archi base, nelle 1.389 specialistiche e nelle 30 relazioni dell'estensione |

**Anomalia conservata, non corretta automaticamente:** `video_nodes` collega l'ascolto `youtube-S5wXKVeY7Nc` (Diego Ortiz, *Recercada segunda*) a `compositore-diego-ortiz`, ID **non presente** né nei nodi base né nell'estensione. Non cancellare l'ascolto: identificare o importare la persona con crosswalk verificato.

**Nota sui bookmark:** il totale di 115 comprende un video con **due bookmark** (Monteverdi, `youtube-SyPUJwGEUgA`) e uno senza bookmark (Ensemble Tramontana, `youtube-dCFaD7xjbOs`). Quest'ultimo non è un URL mancante: conserva URL e associazioni. Non assumere che vi sia sempre un bookmark per ciascun media.

### Implicazioni per la fusione
1. Conservare **tutti i 3.856 record relazionali originali** (2.437 base + 1.389 specialistici + 30 estensione), senza deduplica per sola coppia; i 1.718 archi Atlantis restano indipendenti fino a crosswalk storico certificato.
2. Ricollocare senza perdere le 8 relazioni attualmente invisibili a causa di `ambito` e preservare separatamente le 4 relazioni aggiuntive sul Musical.
3. Il registro è un controllo d'integrità del patrimonio editoriale; **gli URL, i bookmark e i media non sono archi attraversabili**. Non trasformare `cap:*`, le epoche o le nazioni in ponti universali.
4. Usare gli SHA originali e gli ID legacy per riconciliare successivamente le risorse con i nodi Atlantis, preservando **più rimandi per autore** e conservando un record di attribuzione non risolta per Diego Ortiz.
5. Prossimo collaudo verticale: `Messa` e `Mozart`, con tipologie terminali `periodo`, gate di pertinenza radicata, pivot I–III e verifica indipendente di Gabrieli e delle opere.

### Confine operativo
**Non modificati:** `musurgia-atlantis/grafo.json`, `musurgia-atlantis/index.html`, `atlante3d/database/*`, `atlante3d/app-livelli.js`, le pagine pubbliche, né i 210 lotti storico-filologici. L'operazione riguarda soltanto l'audit. Non chiamare i risultati «verifica storico-filologica» né «collaudo Android».
