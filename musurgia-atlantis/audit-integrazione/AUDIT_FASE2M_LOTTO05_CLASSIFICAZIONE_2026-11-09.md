# Musurgia Atlantis — Fase 2M, Lotto 05
## Prima classificazione ontologica trasversale, senza migrazione

**9 novembre 2026 · branch `main` · audit in staging.**

### Perimetro e limite della conclusione
È stato **esaminato l'inventario completo** del Lotto 04: **344 concetti**, inclusi **38 principali** e **306 altri**. Il risultato è una **classificazione semantica preliminare**, non una certificazione storico-documentale di **344 identità, generi o attribuzioni**. Fra i **210** privi di `taxonomy.class` nell'originale, la classe di destinazione è proposta da titolo e contesto lessicale oppure lasciata a esame manuale; le **96** classi esistenti fra i 306 secondari restano riportate per intero e ricondotte a una macroclasse provvisoria.

Il file JSON companion `CLASSIFICAZIONE_SEMANTICA_FASE2M_LOTTO05_2026-11-09.json` contiene **una riga per ciascuno dei 344 ID**, senza alterare i record sorgenti, con classe originale, proposta, metodo, grado di revisione, contatori degli archi e candidati Atlantis. Gli archi e i loro puntatori originali rimangono nella matrice del Lotto 04: **non sono stati ricreati o sommati**.

### Risultato principale: `corrente` non è una categoria ontologica uniforme
Il tipo legacy `corrente` mescola generi e forme, scuole e tradizioni, tecniche e pratiche, istituzioni e cappelle, **composizioni identificabili**, raccolte, documenti ed eventi. Esempi:
- `missa-papae-marcelli-palestrina`: una composizione, non il genere astratto «Messa».
- `cappella-san-marco-venezia`: istituzione/ambiente, non genere.
- `trattato-morley-plaine-easie-1597`: fonte/trattato, non corrente stilistica.
- `sinfonia-leningrado-1942-esecuzione`: evento esecutivo, distinto dalla composizione.
- `mathis-der-maler-sinfonia-1934`: **caso ibrido** che rimanda a sinfonia e opera, senza fonderle.
Una semplice conversione `corrente → nodo-di-senso` impoverirebbe la tipologia storica e produrrebbe attraversamenti impropri.

### Distribuzione delle 344 classificazioni **proposte**
| Macrotipo di staging | Record | Fra i 210 privi di classe originale |
|---|---:|---:|
| tradizione_movimento | 87 | 55 |
| istituzione_ambiente | 58 | 54 |
| genere_forma | 50 | 13 |
| opera_specifica | 48 | 45 |
| tecnica_prassi | 29 | 7 |
| raccolta_documento | 28 | 26 |
| teatro_danza | 24 | 1 |
| ambito_repertoriale | 10 | 2 |
| evento_produzione | 6 | 6 |
| valutazione_manuale | 3 | 0 |
| caso_studio_ibrido | 1 | 1 |
**Avvertenza:** i numeri rappresentano *destinazioni semantiche suggerite*, non entità importate né generi certificati. Le classificazioni da etichetta non consentono fusione, aggiornamento del grafo o creazione di rapporti autore↔genere. **3** restano senza macroclasse giudicata affidabile e vanno verificati manualmente.

### Verifica specifica dei 38 principali
| Concetto | Proposta ontologica | Crosswalk precedente | Candidato Atlantis |
|---|---|---|---|
| Madrigale | `genere_forma` | candidate | senso:madrigale |
| Polifonia | `tecnica_prassi` | candidate | senso:polifonia |
| Musica elettronica ed elettroacustica | `ambito_repertoriale` | partial | senso:musica-concreta |
| Frottola | `genere_forma` | candidate | senso:frottola |
| Villancico | `genere_forma` | no_corresponding_node_identified | — |
| Poema sinfonico | `genere_forma` | candidate | senso:poema-sinfonico |
| Musica per il cinema | `ambito_repertoriale` | partial | senso:colonna-sonora |
| Concerto | `genere_forma` | candidate | senso:concerto |
| Sonata | `genere_forma` | candidate | senso:sonata |
| Sinfonia | `genere_forma` | candidate | senso:sinfonia |
| Suite | `genere_forma` | no_corresponding_node_identified | — |
| Musica da camera | `ambito_repertoriale` | candidate | senso:musica-camera |
| Quartetto d’archi | `genere_forma` | candidate | senso:quartetto |
| Cantata | `genere_forma` | candidate | senso:cantata |
| Oratorio | `genere_forma` | candidate | senso:oratorio |
| Messa | `genere_forma` | no_corresponding_node_identified | — |
| Lied | `genere_forma` | candidate | senso:lied |
| Opera | `genere_forma` | candidate | senso:opera |
| Mottetto | `genere_forma` | partial | senso:motetto-rinascimentale |
| Fuga | `tecnica_prassi` | candidate | senso:fuga |
| Variazioni | `genere_forma` | no_corresponding_node_identified | — |
| Ricercare | `genere_forma` | candidate | senso:ricercare |
| Fantasia | `genere_forma` | no_corresponding_node_identified | — |
| Balletto | `teatro_danza` | candidate | senso:balletto |
| Ouverture | `genere_forma` | no_corresponding_node_identified | — |
| Toccata | `genere_forma` | no_corresponding_node_identified | — |
| Preludio | `genere_forma` | no_corresponding_node_identified | — |
| Rapsodia | `genere_forma` | no_corresponding_node_identified | — |
| Chanson | `genere_forma` | no_corresponding_node_identified | — |
| Ballata | `genere_forma` | no_corresponding_node_identified | — |
| Lauda | `genere_forma` | candidate | senso:lauda |
| Jazz | `tradizione_movimento` | candidate | senso:jazz |
| Musical | `teatro_danza` | candidate | senso:musical |
| Ragtime | `tradizione_movimento` | candidate | senso:ragtime |
| Notturno | `genere_forma` | no_corresponding_node_identified | — |
| Mélodie francese | `genere_forma` | no_corresponding_node_identified | — |
| Minnesang | `tradizione_movimento` | partial | senso:canto-cortese |
| Operetta | `teatro_danza` | da valutare | — |

Non convertire `Musica elettronica` in `Musica concreta`, `Musica per il cinema` in `Colonna sonora`, né `Minnesang` nell'intero canto cortese. `Quartetto d'archi` è polisemo (organico, formazione, forma/repertorio); `Balletto`, `Musical` e `Operetta` necessitano distinzione storico-editoriale. L'eventuale equivalenza semantica non prova l'equivalenza degli archi e delle fonti.

### Confronto con le entità Atlantis
Il confronto **esatto di etichette normalizzate**, limitato a nodi Atlantis né `persona` né `capitolo`, produce **5 candidati**: `opera-buffa` ↔ `senso:opera-buffa`; `opera-seria` ↔ `senso:opera-seria`; `dramma-giocoso` ↔ `senso:dramma-giocoso`; `genere-quartetto-archi` ↔ `senso:quartetto`; `tradizione-operetta-viennese` ↔ `trad:operetta-viennese`. Sono soltanto candidati, **zero fusioni**. Gli altri crosswalk proposti in precedenza restano candidati indipendenti; non dichiararli inesistenti per l'assenza di coincidenza letterale.

### Le 21 segnalazioni lessicali sulle biografie
Ricontrollate **21/21** come indizi da tenere fuori dall'importazione automatica. I testi biografici **non documentano da soli** un'attribuzione compositiva:
- Luzzaschi, `Concerto delle dame`: nome di un ambiente/ensemble, non attestazione di composizione di concerti.
- Cambini, «messa in discussione»: locuzione, non attestazione di messe.
- Margaret Bonds, concerto **di Florence Price**: partecipazione esecutiva non equivale ad autorialità.
- Mauro Giuliani, sinfonia **di Beethoven**: citazione di opera altrui.
- Walther von der Vogelweide, «parola cantata»: non prova il genere *cantata*.
- Filippo Manfredi, *Quartetto toscano*: riferimento a complesso/contesto, non catalogo certificato di quartetti composti.
Le citazioni di un titolo specifico (Barber, Lalo, Boieldieu) sono indizi migliori, **ma richiedono verifica catalografica indipendente** prima di aggiungere un nuovo arco. Nessuno dei 21 genera nuovi rapporti nel corpus.

### Regole operative conseguenti
1. **Mappa di ricerca:** il genere radice mostra i compositori direttamente documentati, non associa fra loro persone che praticano lo stesso genere; un genere non-radice non è un ponte automatico.
2. **Epoche e geografie:** restano nodi storici distinti dai capitoli, terminali per default, senza espansione degli altri loro appartenenti. Le **7 epoche** e le **18 nazioni** legacy non equivalgono ai capitoli e città di Atlantis.
3. **Profondità:** conservare il controllo di visibilità per tipo, raggio I–V per tipo e pivot/raggio derivato I–III per **singolo** nodo, non espandere l'intera categoria.
4. **Documentazione:** mantenere pluralità di link, ancore, fonti, relazioni `forward/reverse`, **115 media/207 associazioni**, `consultazione`, eccezioni on-hover/on-tap e anomalia Diego Ortiz. Le risorse non sono archi storici.
5. **Rilascio:** nessun import di persone, periodi, luoghi, opere, generi o archi in produzione prima di verifica filologica e collaudo `prepare`/Node/browser/Android.

### Verifiche meccaniche sul dataset prodotto
- PASS: `unique_344`
- PASS: `priority_38`
- PASS: `secondary_306`
- PASS: `missing_taxonomy_210`
- PASS: `row_order_preserved`
- PASS: `all_source_pointer_counts_preserved`
- PASS: `no_merges`
- PASS: `lexical_flags_21`
- PASS: `no_editorial_crosswalks`
- PASS: `source_relation_reference_errors_zero`

Sono test di **integrità della proposta**, non certificazioni storiche né prove di interfaccia. Il campo `method` consente di separare priorità esaminate, classe originale ed etichetta euristica. Le schede per cui è indispensabile ulteriore revisione semantica sono:
- `formes-fixes-francesi-trecento` — Ballade, rondeau e virelai del Trecento francese
- `tecnica-tastiera-lugo-rossini-1802` — Rossini a Lugo · studi di tastiera e basso continuo
- `famiglia-ciaccona-passacaglia` — Ciaccona e passacaglia

### Prossima ripresa — Fase 2M Lotto 06
Audit storico-semanticamente fondato sulle classi incerte e sui **210** campi tassonomici mancanti: verificare cataloghi per le 21 bandiere, distinguere i casi di opere/raccolte/istituzioni che non possono diventare generici `nodo-di-senso`, affrontare le collisioni semantiche fra crosswalk. Preparare test interrogativi per **tutti** i 344 ID e i 409 compositori, non solo gli esempi Messa/Mozart, poi collaudare pivot per singolo nodo e conservazione delle risorse. Ripetere in ambiente Node `--live` quando disponibile. **Non pubblicare alcun merge.**

**File pubblici non modificati**, archivio dei 210 lotti storico-filologici preservato.
