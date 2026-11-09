# Musurgia Atlantis — Fase 2M, Lotto 12
**9 novembre 2026 · Solo audit-integrazione · Produzione e grafi pubblici invariati**

## Metodo e copertura
Verificati sul JSON sorgente reale **269** concetti senza candidato lessicale nel registro del Lotto 11, incrociandoli con i **754 nodi / 1718 archi** Atlantis; nessun concetto è stato dichiarato assente solo perché non si trova un nome identico. Sono state proposte **27 coppie non precedentemente censite**, relative a **25 concetti**, con target Atlantis esistenti e provenienze. Restano **244 concetti senza nuovo candidato in questo lotto**, che non significa assenti: il controllo è un primo screening, non un audit storico concluso. I **75** concetti con candidati precedenti non vengono ripetuti.

## Scoperte e distinzioni
1. **Tre corrispondenze di ID non colte dalla sola etichetta**: `verismo` ↔ `senso:verismo`, `neoclassicismo` ↔ `senso:neoclassicismo`, `belcanto` ↔ `senso:belcanto`. Sono **candidati di perimetro semantico**, non merge automatici. Il target verismo parla anche di *giovane scuola*, categoria non necessariamente sinonima di repertorio verista. Cambridge discute le distinzioni: https://www.cambridge.org/core/books/abs/puccini-in-context/contemporaries-and-competitors/4364996F0D076B88B997CFBA4A8DFBF2 . Per belcanto: Treccani https://www.treccani.it/enciclopedia/bel-canto/ .
2. **Scuola veneziana ≠ Cappella musicale di San Marco ≠ policoralità**: sono tre entità da collegare con predicati specifici, non da fondere. Il grafo Atlantis contiene già collegamenti indipendentemente verificati per l'istituzione con Willaert, Zarlino, Giovanni Gabrieli e la policoralità, che valgono **per quei rapporti**, non per l'identità della scuola. Fonte istituzionale: https://www.basilicasanmarco.it/basilica/tradizione-musicale/ .
3. **Scuola romana e Cappella pontificia**, **tradizioni franco-fiamminghe**, **corale e tradizione luterana**, **Camerata fiorentina e recitar cantando**: vicinanza storica, possibile ampliamento controllato del crosswalk, nessun ponte generico da un autore all'altro. Treccani distingue Camerata Bardi e successivo ambiente Corsi: https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/ .
4. **Tecnica e fonte**: stampa musicale rinascimentale ↔ stampa come pratica; *Harmonice musices Odhecaton A* 1501 come documento concreto; non convertire il documento in tecnica.
5. **Contesto e luogo**: Scuola di Mannheim ≠ Mannheim; ospedali veneziani ≠ Venezia; tradizione napoletana ≠ città di Napoli. Il luogo è contesto terminale, non nodo-ponte storico universale.
6. **Tradizione e genere/tecnica**: seconda scuola di Vienna ≠ atonalità; Darmstadt ≠ serialismo; neobarocco ≠ fuga; madrigalismo ≠ madrigale; i trovieri sono un ramo specifico delle tradizioni cortesi.

## Integrità e limiti
Le **27 coppie** riportano sorgente e target effettivamente esistenti, conteggi incidenti, gli eventuali archi Atlas già marcati con verifica indipendente e l'intersezione nominale di persone fra grafi, ove individuata. Tale intersezione è un aiuto alla ricerca, **non** validazione d'identità o prova dell'arco nuovo. Gli archi storicamente verificati nel grafo Atlantis **non certificano** automaticamente una nuova relazione da un concetto legacy.

**Controlli eseguiti 11/11:**
- PASS `scan_all_269_prior_nonmatches`
- PASS `all_source_nodes_exist`
- PASS `all_candidate_targets_exist`
- PASS `id_suffix_exact_candidates_included`
- PASS `no_duplicate_pairs`
- PASS `no_crosswalk_overlap_with_prior`
- PASS `conserve_344_legacy_source_catalogue`
- PASS `all_source_cardinalities_preserved`
- PASS `no_public_merge_or_edges`
- PASS `node_name_crosswalk_context_not_identity`
- PASS `legacy_person_name_index_only_is_not_biographical_certification`

Questi controlli sono **strutturali** sul grafo e sulle matrici originali. Non sono un test Node `--live`, browser, WebGL o Android. Il porting letterale `relationSentence` (tre override, 7.712 stringhe confrontate in V8) resta **già completato nel Lotto 01**.

## Cosa resta e prossima ripresa
Nel **Lotto 13**, verificare le definizioni e i metadati dei tre candidati con ID-suffix esatto; affrontare per gruppi i **244** concetti senza nuovo candidato, analizzando prima le categorie più ricche di archi, ma distinguendo l'assenza di target dall'assenza di una verifica. Testare il filtro radicato su dati reali con le risorse dell'adapter già conservato, senza passare da epoca/scuola/genere/luogo a tutti i loro vicini. Poi Node `--live`, etichette dopo `prepare` e collaudo WebGL/Android quando eseguibili.

**Nessun merge o modifica dei grafi pubblici; 210 lotti filologici, 3.856 archi legacy, 1.718 Atlantis, testi bidirezionali, fonti, 115 media/207 associazioni e 537 ancore rimangono da preservare integralmente.**
