# Musurgia Atlantis — Fase 2L, Lotto 04: minimalismo, Risorgimento, teatro, musica concreta e Medioevo

**Data:** 8 novembre 2026 · **Branch:** `main` · **Cartella:** `musurgia-atlantis/audit-integrazione/`.

## Scopo e stato

Questo lotto valuta **61–80** dell'indice delle **250 coppie/gruppi di estremi condivisi fra archivi legacy**. Staging soltanto, nessuna fusione e nessuna modifica al grafo pubblico o ai 210 lotti storico-filologici. Il registro JSON che accompagna il verbale conserva tutti i payload, gli ID, gli archi in versi originali, note e fonti, oltre agli esiti preliminari e ai gate radicati.

**Risultato:** 20 gruppi esaminati nel lotto, **80/250** cumulativi, **170** rimanenti, **45** archi nativi preservati, di cui 20 base e 25 specialistici. **12 test strutturali superati.** Non è un collaudo filologico di tutti i fatti, né un test browser/touch.

## Quadro dei 20 gruppi

| N. | Coppia di estremi | Record sorgenti | Interpretazione |
|---:|---|---:|---|
| 61 | `legacy:minimalismo|pers:philip-glass` | 3 | `dual_specialist_predicates` |
| 62 | `legacy:minimalismo|pers:la-monte-young` | 2 | `historiographic_pioneer` |
| 63 | `legacy:minimalismo|pers:terry-riley` | 3 | `dual_specialist_predicates` |
| 64 | `legacy:minimalismo|pers:john-adams` | 2 | `postminimalist_reception` |
| 65 | `legacy:minimalismo|pers:michael-nyman` | 2 | `critical_terminology_vs_style` |
| 66 | `legacy:risorgimento|pers:verdi` | 2 | `specific_historical_work` |
| 67 | `legacy:risorgimento|pers:mameli` | 2 | `role_type_correction` |
| 68 | `legacy:risorgimento|pers:novaro` | 2 | `specific_historical_work` |
| 69 | `legacy:opera-buffa|legacy:opera-lirica` | 2 | `abstract_taxonomy_relation` |
| 70 | `legacy:grand-opera|legacy:opera-lirica` | 2 | `abstract_taxonomy_relation` |
| 71 | `legacy:intermezzo-comico|legacy:opera-buffa` | 2 | `abstract_taxonomy_relation` |
| 72 | `pers:antonin-dvorak|pers:josef-suk` | 3 | `distinct_personal_predicates` |
| 73 | `legacy:musica-concreta|pers:pierre-schaeffer` | 3 | `two_aspects_of_practice_foundation` |
| 74 | `legacy:musica-concreta|pers:pierre-henry` | 3 | `two_aspects_of_practice_collaboration` |
| 75 | `legacy:forma-nuevo-tango|pers:astor-piazzolla` | 2 | `form_innovation` |
| 76 | `legacy:monodia-sacra-medievale|pers:hildegard-von-bingen` | 2 | `historical_practice_context` |
| 77 | `legacy:scuola-notre-dame|pers:leonin` | 2 | `traditional_source_attribution` |
| 78 | `legacy:scuola-notre-dame|pers:perotin` | 2 | `traditional_source_attribution` |
| 79 | `legacy:ars-nova-francese|pers:machaut` | 2 | `historical_practice_context` |
| 80 | `legacy:tradizione-trovieri-francia|pers:adam-de-la-halle` | 2 | `historical_practice_context` |

## Giudizi motivati e particolarità

**61. `legacy:minimalismo|pers:philip-glass`** — Glass: distinguere ruolo storico nella prima generazione minimalista da scrittura a strutture ripetitive; non appiattire autodefinizione e classificazione esterna, né collegarlo automaticamente a Reich.

**62. `legacy:minimalismo|pers:la-monte-young`** — La Monte Young: la categoria 'minimalismo' descrive un orientamento estetico; bordone e lunga durata non coincidono con i processi di sfasamento propri di altri compositori.

**63. `legacy:minimalismo|pers:terry-riley`** — Terry Riley: In C (1964), cellule ripetute in forma aperta, è pratica specifica. Pioniere del minimalismo è un secondo predicato storiografico; i due specialistici vanno preservati.

**64. `legacy:minimalismo|pers:john-adams`** — John Adams recepisce e trasforma procedimenti minimalisti in costruzioni postminimaliste, teatrali e orchestrali; non identificarlo con la fase fondativa di Young/Riley.

**65. `legacy:minimalismo|pers:michael-nyman`** — Michael Nyman: il suo ruolo di critico nella diffusione del termine 'minimal music' va distinto dalla produzione compositiva ripetitiva. L'attribuzione puntuale al 1968 è spesso riportata ma va conservata con cautela documentale.

Fonti indipendenti consultate per il punto specifico: <https://www.cambridge.org/core/books/abs/stage-works-of-philip-glass/terminology-and-stages-of-minimalism/42024499AFCBCAA75D24B37FBFC2170C> · <https://www.treccani.it/enciclopedia/minimal-music_%28Enciclopedia-Italiana%29/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://medias.ircam.fr/en/composer/michael-nyman/biography>.

**66. `legacy:risorgimento|pers:verdi`** — Verdi: nel Risorgimento l'Inno popolare/Inno militare su testo di Mameli (1848) è una relazione specifica, diversa dalla lettura patriottica generica delle opere teatrali. Tenere distinta la sua composizione dal Canto degli Italiani di Novaro.

Fonti indipendenti consultate per il punto specifico: <https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/goffredo-mameli_%28L%27Unificazione%29/>.

**67. `legacy:risorgimento|pers:mameli`** — Goffredo Mameli è poeta/patriota autore dei versi, NON compositore della musica. L'ID legacy 'compositore-goffredo-mameli' è un identificativo storico improprio, ma il record tipo persona va mantenuto senza migrazione di ruolo falsa.

Fonti indipendenti consultate per il punto specifico: <https://www.treccani.it/enciclopedia/goffredo-mameli/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/goffredo-mameli_%28L%27Unificazione%29/>.

**68. `legacy:risorgimento|pers:novaro`** — Michele Novaro compose nel 1847 la musica del Canto degli Italiani, distinta dall'Inno militare musicato da Giuseppe Verdi; entrambi i brani hanno testo di Mameli.

Fonti indipendenti consultate per il punto specifico: <https://www.treccani.it/enciclopedia/goffredo-mameli_%28Dizionario-Biografico%29/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/michele-novaro_%28Dizionario-Biografico%29/>.

**69. `legacy:opera-buffa|legacy:opera-lirica`** — Opera buffa e opera lirica: non sono due persone né due capitoli editoriali; l'eredità storica è rapporto concettuale e non ponte attraverso cui espandere indiscriminatamente tutti gli operisti; verificare nel crosswalk il nodo genere distinto da cap:opera-lirica.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/gioachino-rossini_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**70. `legacy:grand-opera|legacy:opera-lirica`** — Grand opéra è una specificazione del teatro lirico francese ottocentesco, non una tradizione separata che produce legami personali; il verso base e specialistico è invertito, ma i frammenti non sono frazioni simmetriche intercambiabili.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**71. `legacy:intermezzo-comico|legacy:opera-buffa`** — Intermezzo comico è una delle matrici dell'opera buffa, non l'unica origine. Mantenere 'contribuì alla nascita' senza equivalenza classificatoria intermezzo=opera buffa.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/dall-intermezzo-all-opera-buffa_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**72. `pers:antonin-dvorak|pers:josef-suk`** — Dvořák→Josef Suk: rapporto didattico 1891–92 e influenza del linguaggio giovanile sono due relazioni diverse. Il successivo matrimonio di Suk con Otilie Dvořák (1898) è terzo fatto biografico, non implicato dagli archi legacy.

Fonti indipendenti consultate per il punto specifico: <https://www.antonin-dvorak.cz/en/index-of-names/suk-josef-1874-1935/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.antonin-dvorak.cz/en/index-of-names/suk-josef-1874-1935/>.

**73. `legacy:musica-concreta|pers:pierre-schaeffer`** — Pierre Schaeffer: nascita del nome e della prassi di musica concreta nel 1948 e realizzazione dei primi studi sono faccette complementari ma non automaticamente la stessa opera.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/musica-concreta/> · <https://www.larousse.fr/encyclopedie/musdico/musique_concr%C3%A8te/166944> · <https://ressources.ircam.fr/fr/pierre-schaeffer>.

**74. `legacy:musica-concreta|pers:pierre-henry`** — Pierre Henry: sviluppo della musica concreta e collaborazione con Schaeffer sono distinti; la Symphonie pour un homme seul è documentata come composta fra 1949 e 1950, prima esecuzione 18 marzo 1950 (BnF/IRCAM). Lo staging che la fa nascere nel 1949 va letto come avvio, non data univoca dell'opera conclusa.

Fonti indipendenti consultate per il punto specifico: <https://catalogue.bnf.fr/ark:/12148/cb14488152h> · <https://medias.ircam.fr/en/work/symphonie-pour-un-homme-seul> · <https://mediatheque.philharmoniedeparis.fr/mediatheque/doc/ALOES/0079929/mix-02-1-symphonie-pour-un-seul-homme-1949-1950-pierre-henry-pierre-schaeffer-composition?_lg=fr-FR>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/musica-concreta/> · <https://www.larousse.fr/encyclopedie/musdico/musique_concr%C3%A8te/166944> · <https://ressources.ircam.fr/fr/composer/pierre-henry/biography>.

**75. `legacy:forma-nuevo-tango|pers:astor-piazzolla`** — Piazzolla: nuevo tango è linguaggio e repertorio trasformato, non relazione personale con ogni autore di tango; distinguere forma di genere e autore.

**76. `legacy:monodia-sacra-medievale|pers:hildegard-von-bingen`** — Ildegarda: la Symphonia contiene liriche sacre monodiche, mentre Ordo virtutum è un dramma liturgico/morale. La relazione alla monodia medievale non identifica tutte le forme né un'appartenenza scolastica istituzionale.

**77. `legacy:scuola-notre-dame|pers:leonin`** — Léonin e Notre-Dame: testimonianza dell'Anonimo IV, attribuzioni tradizionali del Magnus liber organi; non inventare rapporto diretto maestro-allievo con Pérotin dalla medesima categoria.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/l-ars-antiqua_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**78. `legacy:scuola-notre-dame|pers:perotin`** — Pérotin e Notre-Dame: testimonianza dell'Anonimo IV e sviluppo polifonico; non trattare l'etichetta 'scuola' come certificazione di rapporti diretti con tutti gli altri maestri.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/l-ars-antiqua_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**79. `legacy:ars-nova-francese|pers:machaut`** — Machaut e ars nova francese: fonti di polifonia sacra e profana, notazione e forme; non ridurre la Messe de Nostre Dame a 'polifonia profana' solo perché il frammento specialistico parla di quest'ultima.

**80. `legacy:tradizione-trovieri-francia|pers:adam-de-la-halle`** — Adam de la Halle: tradizione dei trovieri di Arras, formes fixes, jeux-partis e teatro; il rapporto è repertoriale e urbano, non discepolato presso tutti gli altri trovieri.


## Controlli eseguiti nel lotto

- **PASS** — 20 consecutive groups 61–80.
- **PASS** — 45 underlying records total.
- **PASS** — source record layer count 20 base 25 specialist.
- **PASS** — all identity endpoints match cross-layer group.
- **PASS** — no missing original source payload.
- **PASS** — explicit specialist direction text retained.
- **PASS** — no base generated phrase falsely asserted.
- **PASS** — no automatic merge or traversal.
- **PASS** — Mameli correct role noted.
- **PASS** — Suk dual predicates not conflated.
- **PASS** — Henry composition years flagged.
- **PASS** — opera-lirica chapter distinction retained.

## Principi d'integrazione non derogabili

- **Grafo storico e piano editoriale distinti**: i capitoli di Musurgia Mundi sono risorse di consultazione, non nodi attraversabili. Un concetto chiamato `opera-lirica` o `risorgimento` non si confonde con `cap:opera-lirica` o con la pagina del Risorgimento.
- **Pertinenza radicata I–V**: le scuole, i periodi, i generi e le tecniche NON sono scorciatoie che rendono automaticamente visibili tutti i relativi autori. Gli archi fra persone/opere con fatti specifici potranno essere attraversati dopo valutazione singola, se pertinenti alla radice.
- **Nessuna fusione cieca**: predicati parzialmente coincidenti, direzioni invertite o stessa coppia di estremi non autorizzano cancellazioni. Conservare `forward`, `reverse`, `note`, `sources` e tutte le proprietà originali.
- **UI originale ancora da collaudare**: i link base non contengono `forward/reverse` espliciti. Il porting letterale di `relationSentence` e delle tre ridefinizioni, con test hover/tap, è indispensabile prima di un rilascio.

## Prossimi passi

Riprendere Lotto 05, gruppi 81–100, senza cambiare i dati pubblici. Mantenere le anomalie che emergono in un elenco di verifica prima del merge.