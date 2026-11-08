# Musurgia Atlantis — Fase 2L · Lotto 07: romanticismo, opera, sodalizi e sinfonia

**Data:** 8 novembre 2026 · **Branch:** `main` · **Ambito:** soltanto `musurgia-atlantis/audit-integrazione/`.

## Perimetro e risultati

Controllate una per una **20 sovrapposizioni** fra il grafo base e le relazioni specialistiche dell'Atlante 3D, nel Lotto 07 (**gruppi 121–140**). **40 registrazioni originali preservate** (20 base, 20 specialistiche), con payload, orientamento delle estremità, testo `forward`/`reverse` esplicito ove presente, note, fonti, metadati e identità provvisorie. Il contesto condiviso **non** autorizza fusione: una relazione può specializzare il genere, una professione, un repertorio, un'opera, un'istituzione o un evento preciso. Non si inferiscono nuovi archi persona–persona solo per categorie condivise.

**Esito cumulativo: 140/250 gruppi triagiati**; ne restano **110**. **13/13** controlli strutturali superati nel lotto. Questi controlli NON certificano ogni fatto storico, NON portano le frasi del renderer originale, NON collaudano il browser e NON modificano i grafi pubblici.

## Tabella integrale dei 20 gruppi

| Gruppo | Coppia riconciliata di estremi | Archi originali | Tipo di esito preliminare |
|---:|---|---:|---|
| 121 | `legacy:tradizione-operistica-italiana-ottocento|pers:verdi` | 2 | `historical_theatre_context` |
| 122 | `legacy:virtuosismo-strumentale-romantico|pers:paganini` | 2 | `virtuoso_reception_not_school` |
| 123 | `legacy:tradizione-operistica-italiana-ottocento|pers:puccini` | 2 | `century_scope_warning` |
| 124 | `legacy:opera-verista-italiana-fine-ottocento|pers:mascagni` | 2 | `specific_work_not_generic_verismo` |
| 125 | `legacy:opera-verista-italiana-fine-ottocento|pers:leoncavallo` | 2 | `specific_work_not_generic_verismo` |
| 126 | `legacy:scapigliatura-milanese|pers:boito` | 2 | `historical_movement_member` |
| 127 | `legacy:virtuosismo-strumentale-romantico|pers:liszt` | 2 | `specific_virtuoso_technique` |
| 128 | `legacy:opera-romantica-tedesca|pers:weber` | 2 | `specific_operatic_work` |
| 129 | `legacy:pianismo-romantico-europeo|pers:chopin` | 2 | `solo_piano_repertoire` |
| 130 | `legacy:tradizione-operistica-francese-ottocento|pers:bizet` | 2 | `opera_comique_genre_guard` |
| 131 | `legacy:tradizione-melodie-francese|pers:gabriel-faure` | 2 | `vocal_repertoire_specific` |
| 132 | `legacy:tradizione-melodie-francese|pers:pauline-viardot` | 2 | `vocal_roles_independent` |
| 133 | `legacy:gruppo-dei-cinque|pers:musorgskij` | 2 | `actual_collective_membership` |
| 134 | `legacy:gruppo-dei-cinque|pers:nikolaj-rimskij-korsakov` | 2 | `actual_collective_membership` |
| 135 | `legacy:gruppo-dei-cinque|pers:aleksandr-borodin` | 2 | `actual_collective_membership` |
| 136 | `legacy:gruppo-dei-cinque|pers:milij-balakirev` | 2 | `actual_collective_leadership` |
| 137 | `legacy:scuola-nazionale-boema|pers:bedrich-smetana` | 2 | `historical_national_school` |
| 138 | `legacy:poema-sinfonico-ottocentesco|pers:bedrich-smetana` | 2 | `specific_symphonic_cycle` |
| 139 | `legacy:sinfonismo-tardoromantico|pers:mahler` | 2 | `individual_symphonic_language` |
| 140 | `legacy:sinfonismo-tardoromantico|pers:bruckner` | 2 | `individual_symphonic_language` |

## Analisi di ogni gruppo e fonti conservate

### Gruppo 121 — `legacy:tradizione-operistica-italiana-ottocento|pers:verdi`

Verdi sviluppa la tradizione del melodramma italiano ottocentesco, con opere e fasi specifiche: la categoria non costituisce un 'albero' didattico di tutti gli operisti.

**Specialistico originale:** `special2K:cat-scuole-tradizione-operistica-italiana-ottocento-giuseppe-verdi` · predicato `tradizione-teatrale-trasformata`. Direzione `tradizione-operistica-italiana-ottocento` → `compositore-giuseppe-verdi`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Verdi trasformò il melodramma romantico italiano, accentuando unità drammatica e rapporto fra parola, musica e azione teatrale.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/opera/>.

### Gruppo 122 — `legacy:virtuosismo-strumentale-romantico|pers:paganini`

Paganini fu violinista e compositore e modello di virtuosismo; le sue opere suscitarono rielaborazioni pianistiche, ma il nodo 'virtuosismo romantico' non dimostra contatti personali con Liszt o altri autori. Un eventuale influsso Paganini→Liszt va documentato per fatto specifico.

**Specialistico originale:** `special2K:catalogo-virtuosismo-strumentale-romantico-niccolo-paganini` · predicato `modello-virtuosistico`. Direzione `virtuosismo-strumentale-romantico` → `compositore-niccolo-paganini`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Il violinista e compositore Paganini innovò il concerto solistico e i Capricci, ispirando numerose successive elaborazioni pianistiche. Non fondò una vera scuola didattica stabile.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/niccolo-paganini_%28Dizionario-Biografico%29/>.

### Gruppo 123 — `legacy:tradizione-operistica-italiana-ottocento|pers:puccini`

La categoria «tradizione operistica italiana ottocento» inquadra solo una parte della carriera di Puccini: Turandot fu composta negli anni 1920–24 e presentata nel 1926 dopo la sua morte. Cronologia di prima 25/26 aprile 1926 discrepante fra Centro Studi/catalogo Puccini e Puccini Museum: non fissare un giorno in produzione senza sciogliere il conflitto.

**Specialistico originale:** `special2K:cat-scuole-tradizione-operistica-italiana-ottocento-giacomo-puccini` · predicato `tradizione-teatrale-trasformata`. Direzione `tradizione-operistica-italiana-ottocento` → `compositore-giacomo-puccini`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Puccini proseguì la grande tradizione operistica italiana a cavallo del Novecento con una nuova concezione del continuum scenico.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/italia/>.

**Riscontri esterni circoscritti:** Catalogo delle opere di Puccini: elaborazione luglio 1920–ottobre 1924, prima alla Scala 25 aprile 1926. (<https://catalog.puccini.it/works/turandot>) Puccini Museum riporta 26 aprile 1926, discordanza di data da non risolvere senza confronto degli atti. (<https://www.puccinimuseum.org/giacomo-puccini/le-opere/turandot/>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 124 — `legacy:opera-verista-italiana-fine-ottocento|pers:mascagni`

Mascagni: Cavalleria rusticana, concorso Sonzogno e prima al Teatro Costanzi di Roma il 17 maggio 1890; attribuzione di opera specifica. Evitare inferenze di apprendistato con Leoncavallo via 'verismo'.

**Specialistico originale:** `special2K:audit8h-mascagni-verismo` · predicato `cavalleria-rusticana-1890`. Direzione `opera-verista-italiana-fine-ottocento` → `compositore-pietro-mascagni`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Cavalleria rusticana vinse il concorso Sonzogno e debuttò a Roma nel 1890: l’adattamento del dramma di Verga è un episodio centrale nell’affermazione del teatro musicale verista.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/pietro-mascagni_%28Dizionario-Biografico%29/>.

**Riscontri esterni circoscritti:** Cavalleria rusticana, prima assoluta 17 maggio 1890, Roma Teatro Costanzi. (<https://archiviostorico.operaroma.it/opera/cavalleria-rusticana/>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 125 — `legacy:opera-verista-italiana-fine-ottocento|pers:leoncavallo`

Leoncavallo: Pagliacci (testo e musica dell'autore), prima Milano Teatro Dal Verme 21 maggio 1892; non confondere con Cavalleria rusticana né trasformare appartenenza al verismo in relazione personale con Mascagni.

**Specialistico originale:** `special2K:audit8h-leoncavallo-verismo` · predicato `pagliacci-1892`. Direzione `opera-verista-italiana-fine-ottocento` → `compositore-ruggero-leoncavallo`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Leoncavallo compose testo e musica dei Pagliacci, presentati nel 1892; nel Prologo tematizzò la poetica del teatro verista senza trasformare tale affinità in un rapporto di allievo con Mascagni.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/ruggero-leoncavallo_%28Enciclopedia-Italiana%29/>.

**Riscontri esterni circoscritti:** Pagliacci, prima Milano Teatro Dal Verme 21 maggio 1892. (<https://www.metopera.org/learn/education/learning-library/educator-guides/cavalleria-rusticana-pagliacci/>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 126 — `legacy:scapigliatura-milanese|pers:boito`

Boito fu partecipante della Scapigliatura milanese; questa è un'appartenenza artistico-letteraria documentata, ma non significa ogni membro collaboratore con tutti gli altri.

**Specialistico originale:** `special2K:audit5-boito-scapigliatura` · predicato `partecipazione-movimento-artistico`. Direzione `scapigliatura-milanese` → `compositore-arrigo-boito`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Al ritorno dai viaggi europei del 1862 Boito entrò nel movimento della Scapigliatura milanese, condividendo polemiche e ricerca di nuovi rapporti tra letteratura, critica e teatro musicale. Il movimento è documentato come partecipazione attiva, non dedotto dalla città di residenza.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/arrigo-boito_%28L%27Unificazione%29/> · <https://www.treccani.it/enciclopedia/arrigo-boito/>.

### Gruppo 127 — `legacy:virtuosismo-strumentale-romantico|pers:liszt`

Liszt sviluppò innovazioni pianistiche anche in risposta all'esempio virtuosistico di Paganini; il loro rapporto di influenza specifica va certificato separatamente, non dedotto dalla comune categoria.

**Specialistico originale:** `special2K:catalogo-virtuosismo-strumentale-romantico-franz-liszt` · predicato `innovazione-pianistica`. Direzione `virtuosismo-strumentale-romantico` → `compositore-franz-liszt`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Liszt fu profondamente colpito dalle esecuzioni di Paganini a Parigi e ne traspose i procedimenti virtuosistici sul pianoforte, rinnovando lo studio e il concerto solistico.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/franz-liszt_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 128 — `legacy:opera-romantica-tedesca|pers:weber`

Weber: Der Freischütz (1821) è opera centrale della nascita dell'opera romantica tedesca; genere e composizione non equivalgono a una rete personale di autori coevi.

**Specialistico originale:** `special2K:audit4-weber-opera-romantica` · predicato `fondazione-operistica`. Direzione `opera-romantica-tedesca` → `compositore-carl-maria-von-weber`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Der Freischütz (1821), con ambientazione popolare e fantastica, è considerato un modello fondativo dell'opera romantica tedesca; il collegamento è di produzione e innovazione teatrale documentata.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/carl-maria-von-weber/> · <https://www.treccani.it/enciclopedia/opera/>.

### Gruppo 129 — `legacy:pianismo-romantico-europeo|pers:chopin`

Chopin e pianismo romantico: forma, timbro, scrittura pianistica e generi brevi; la categoria è editoriale/stilistica, NON rapporto diretto con altri pianisti.

**Specialistico originale:** `special2K:audit5-chopin-pianismo-romantico` · predicato `trasformazione-linguaggio-pianistico`. Direzione `pianismo-romantico-europeo` → `compositore-frederic-chopin`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: La produzione di Chopin, concentrata sul pianoforte, trasformò la tecnica, il colore sonoro e le forme brevi del romanticismo pianistico, anche attraverso la rielaborazione artistica di danza popolare polacca e repertorio da salotto. La tradizione è una storia di linguaggi strumentali, non un'associazione formale.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/fryderyk-chopin_%28Enciclopedia-dei-ragazzi%29/>.

### Gruppo 130 — `legacy:tradizione-operistica-francese-ottocento|pers:bizet`

Bizet in Carmen (1875) combina cornice di opéra-comique e drammaturgia realistica. L'etichetta 'tradizione operistica francese' non autorizza a chiamare Carmen grand opéra o a inferire contatti fra tutti gli autori della stessa tradizione.

**Specialistico originale:** `special2K:cat-scuole-tradizione-operistica-francese-ottocento-georges-bizet` · predicato `teatro-francese-diversi-generi`. Direzione `tradizione-operistica-francese-ottocento` → `compositore-georges-bizet`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Bizet affrontò il teatro musicale francese nell'Ottocento e in Carmen unì elementi dell'opéra-comique a un forte realismo drammatico.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/opera/>.

### Gruppo 131 — `legacy:tradizione-melodie-francese|pers:gabriel-faure`

Fauré: produzione di mélodies e canto/pianoforte; evitare di trasformare la tradizione della mélodie in identità con chanson, romance o opera teatrale.

**Specialistico originale:** `special2K:catalogo-tradizione-melodie-francese-gabriel-faure` · predicato `ricerca-vocale`. Direzione `tradizione-melodie-francese` → `compositore-gabriel-faure`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Fauré è fra i maggiori protagonisti della mélodie francese, attraverso una vasta produzione per canto e pianoforte caratterizzata da una personale scrittura armonica.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gabriel-faure/>.

### Gruppo 132 — `legacy:tradizione-melodie-francese|pers:pauline-viardot`

Pauline Viardot cantante, compositrice di musica vocale e animatrice culturale, non mera interprete passiva; le sue relazioni al repertorio e ai salotti sono distinte da collaborazioni personali documentate.

**Specialistico originale:** `special2K:catalogo-tradizione-melodie-francese-pauline-viardot` · predicato `repertorio-vocale-europeo`. Direzione `tradizione-melodie-francese` → `compositore-pauline-viardot`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Pauline Viardot fu una figura determinante nella cultura vocale francese dell'Ottocento, come cantante, compositrice di romanze e promotrice della musica da salotto.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/pauline-viardot/>.

### Gruppo 133 — `legacy:gruppo-dei-cinque|pers:musorgskij`

Musorgskij fu membro effettivo del Gruppo dei Cinque; un sodalizio storico è più concreto di una 'scuola' storiografica, ma questo solo arco di membership NON documenta ogni singolo rapporto biografico con altri membri.

**Specialistico originale:** `special2K:scuola-dei-cinque-modest-musorgskij` · predicato `membro-del-sodalizio`. Direzione `gruppo-dei-cinque` → `compositore-modest-musorgskij`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Musorgskij sviluppò all'interno del Gruppo dei Cinque un linguaggio originale legato alle inflessioni del parlato e al teatro russo.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gruppo-dei-cinque/>.

### Gruppo 134 — `legacy:gruppo-dei-cinque|pers:nikolaj-rimskij-korsakov`

Rimskij-Korsakov fu membro effettivo del Gruppo dei Cinque; la successiva attività didattica e revisione di opere di altri richiedono archi specifici, non transito automatico fra i membri.

**Specialistico originale:** `special2K:scuola-dei-cinque-nikolaj-rimskij-korsakov` · predicato `membro-del-sodalizio`. Direzione `gruppo-dei-cinque` → `compositore-nikolaj-rimskij-korsakov`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Rimskij-Korsakov appartenne al Gruppo dei Cinque e contribuì alla sua eredità soprattutto con il lavoro di orchestrazione e insegnamento.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gruppo-dei-cinque/>.

### Gruppo 135 — `legacy:gruppo-dei-cinque|pers:aleksandr-borodin`

Borodin fu membro effettivo del Gruppo dei Cinque e autore di musica orchestrale e teatrale; membership non dimostra legami specifici con tutti gli altri membri.

**Specialistico originale:** `special2K:scuola-dei-cinque-aleksandr-borodin` · predicato `membro-del-sodalizio`. Direzione `gruppo-dei-cinque` → `compositore-aleksandr-borodin`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Borodin apparteneva al Gruppo dei Cinque e contribuì alla costruzione di un linguaggio musicale nazionale attraverso opere e musica sinfonica.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gruppo-dei-cinque/>.

### Gruppo 136 — `legacy:gruppo-dei-cinque|pers:milij-balakirev`

Balakirev fu promotore e figura di riferimento del Gruppo dei Cinque. A differenza di generica affinità nazionale è ruolo nel sodalizio, ma la leadership non implica automaticamente insegnamento individuale di ogni membro.

**Specialistico originale:** `special2K:scuola-dei-cinque-milij-balakirev` · predicato `guida-del-sodalizio`. Direzione `gruppo-dei-cinque` → `compositore-milij-balakirev`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Balakirev fu il principale promotore e punto di riferimento del Gruppo dei Cinque, che cercò un linguaggio russo riconoscibile nella musica ottocentesca.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gruppo-dei-cinque/>.

### Gruppo 137 — `legacy:scuola-nazionale-boema|pers:bedrich-smetana`

Smetana collegato alla tradizione nazionale ceca e al teatro musicale boemo; categoria storiografica, non organizzazione formalmente iscrivibile che faccia da ponte verso Dvořák o altri compositori.

**Specialistico originale:** `special2K:cat-scuole-scuola-nazionale-boema-bedrich-smetana` · predicato `tradizione-compositiva-nazionale`. Direzione `scuola-nazionale-boema` → `compositore-bedrich-smetana`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Smetana contribuì a formulare un teatro nazionale ceco, anche attraverso La sposa venduta e le opere in lingua boema.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/le-scuole-nazionali_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 138 — `legacy:poema-sinfonico-ottocentesco|pers:bedrich-smetana`

Smetana: Má vlast è ciclo di SEI poemi sinfonici, composti individualmente nel 1874–1879 secondo catalogo autografo, in contesto progettuale più ampio dal 1872. L'unità artistica va distinta da qualsiasi collegamento personale a Liszt o agli altri autori del poema sinfonico.

**Specialistico originale:** `special2K:audit8g-smetana-poema-ma-vlast` · predicato `sei-poemi-sinfonici-ma-vlast`. Direzione `poema-sinfonico-ottocentesco` → `compositore-bedrich-smetana`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Smetana compose i sei poemi sinfonici di Má vlast (1874–1879), fra cui Vltava: specifica sintesi di paesaggio, cultura nazionale e forma orchestrale.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/bedrich-smetana/>.

**Riscontri esterni circoscritti:** Catalogo del Museo Smetana documenta le sei parti e date di completamento 1874–1879. (<https://bedrichsmetana.nm.cz/cs/dilo/detail/ma-vlast/133>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 139 — `legacy:sinfonismo-tardoromantico|pers:mahler`

Mahler trasformò la sinfonia anche mediante impiego di voce e canto; non rendere Mahler e Bruckner biograficamente collegati soltanto per appartenere al 'sinfonismo tardoromantico'.

**Specialistico originale:** `special2K:cat-scuole-sinfonismo-tardoromantico-gustav-mahler` · predicato `continuita-e-trasformazione-della-sinfonia`. Direzione `sinfonismo-tardoromantico` → `compositore-gustav-mahler`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Mahler dilatò la forma sinfonica fino a includere canti, voci e contrasti esistenziali di grandi proporzioni.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/storia-della-musica/>.

### Gruppo 140 — `legacy:sinfonismo-tardoromantico|pers:bruckner`

Bruckner sviluppò architetture sinfoniche monumentali e processi tematici distinti da quelli di Mahler; stessa categoria generale non autorizza a fonderne linguaggio o biografia.

**Specialistico originale:** `special2K:cat-scuole-sinfonismo-tardoromantico-anton-bruckner` · predicato `continuita-e-trasformazione-della-sinfonia`. Direzione `sinfonismo-tardoromantico` → `compositore-anton-bruckner`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Bruckner trasformò la sinfonia attraverso grandi architetture tematiche e un linguaggio orchestrale monumentale.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/storia-della-musica/>.

## Test eseguiti

- **PASS** — Groups 121–140 exactly.
- **PASS** — All 40 records retained (20 base + 20 specialist).
- **PASS** — No orphaned staging records.
- **PASS** — Exact mapped pairs preserved.
- **PASS** — Bidirectional specialist phrases retained.
- **PASS** — Base JS explanation port explicitly outstanding.
- **PASS** — No merge/public publication or traversal unlocked.
- **PASS** — Paganini and Liszt separated despite shared hub.
- **PASS** — Collective membership not automatically person-to-person.
- **PASS** — Puccini 20th c issue flagged.
- **PASS** — Turandot 25/26 April external conflict explicitly preserved.
- **PASS** — Smetana cycle six parts, completion span confirmed.
- **PASS** — Mahler and Bruckner not conflated.

## Gate, limiti e principi conservati

1. **Nessuna fusione o perdita:** non sono stati cancellati, sommati o riformulati gli archi base e specialistici. I gruppi sono sovrapposizioni di estremi, non prove di duplicazione storica.
2. **Modalità storico-musicale ≠ editoriale:** un capitolo di Musurgia Mundi, inclusi `cap:opera-lirica` e i capitoli delle epoche, è un rinvio di consultazione, non un nodo attraversabile nella rete storico-musicale. Generi, scuole, periodi, metodi e movimenti non sono ponti automatici nella profondità I–V.
3. **Renderer non ancora convertito:** gli archi base non contengono stringhe bidirezionali originali esplicite; la frase era generata da `relationSentence` con **tre ridefinizioni** nell'app originale. Il JSON preserva `status: requires_exact_renderer_port`, e non sostituisce questa mancanza con frasi ipotetiche. Non eseguiti i test hover desktop/tap Android.
4. **Controllo storico a due livelli:** una fonte d'identità, una fonte di categoria, o una fonte che attesta un'opera non convalida automaticamente tutti i rapporti specifici, le date e gli archi contigui. I controlli di questo lotto sono strutturali e di triage semantico con riscontri mirati.
5. **Nessuna modifica al grafo pubblico:** i 3.856 archi legacy restano nello staging integrale; i 1.718 archi Atlantis e i 210 lotti storico-filologici rimangono invariati.

## Prosecuzione

Riprendere dalla **Fase 2L, Lotto 08 — gruppi 141–160**. Prima del rilascio pubblico occorrono adapter isolato `relationSentence`, test di equivalenza dei due versi e delle tre eccezioni successive, gate radicati e collaudo di hover/tap su dispositivi reali.
