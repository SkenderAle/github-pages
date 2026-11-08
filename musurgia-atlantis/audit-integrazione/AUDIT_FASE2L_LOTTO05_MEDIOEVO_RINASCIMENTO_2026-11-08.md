# Musurgia Atlantis — Fase 2L, Lotto 05: ars nova, musica vocale rinascimentale e prime forme del melodramma

**Data:** 8 novembre 2026 · **Branch:** `main` · **Cartella:** `musurgia-atlantis/audit-integrazione/`.

## Scopo e stato

Questo lotto valuta **81–100** dell'indice delle **250 coppie/gruppi di estremi condivisi fra archivi legacy**. Staging soltanto, nessuna fusione e nessuna modifica al grafo pubblico o ai 210 lotti storico-filologici. Il registro JSON che accompagna il verbale conserva tutti i payload, gli ID, gli archi in versi originali, note e fonti, oltre agli esiti preliminari e ai gate radicati.

**Risultato:** 20 gruppi esaminati nel lotto, **100/250** cumulativi, **150** rimanenti, **41** archi nativi preservati, di cui 20 base e 21 specialistici. **12 test strutturali superati.** Non è un collaudo filologico di tutti i fatti, né un test browser/touch.

## Quadro dei 20 gruppi

| N. | Coppia di estremi | Record sorgenti | Interpretazione |
|---:|---|---:|---|
| 81 | `legacy:ars-nova-italiana|pers:landini` | 2 | `historical_practice_context` |
| 82 | `legacy:madrigale-ars-nova-primo-trecento|pers:jacopo-da-bologna` | 2 | `homonym_genre_guard` |
| 83 | `legacy:caccia-italiana-trecento|pers:gherardello-da-firenze` | 2 | `specific_work_example` |
| 84 | `legacy:madrigale-ars-nova-primo-trecento|pers:giovanni-da-cascia` | 2 | `specific_repertory_not_personal` |
| 85 | `legacy:madrigalismo-cinquecentesco|pers:luca-marenzio` | 2 | `historical_practice_context` |
| 86 | `legacy:madrigalismo-cinquecentesco|pers:carlo-gesualdo` | 2 | `historical_practice_context` |
| 87 | `legacy:tastiere-italiane-primo-seicento|pers:frescobaldi` | 2 | `historical_practice_context` |
| 88 | `legacy:frottola-corti-italiane|pers:bartolomeo-tromboncino` | 2 | `historical_practice_context` |
| 89 | `legacy:frottola-corti-italiane|pers:marchetto-cara` | 2 | `historical_practice_context` |
| 90 | `legacy:tradizione-inglese-elisabettiana|pers:thomas-tallis` | 2 | `chronological_scope_warning` |
| 91 | `legacy:tradizione-inglese-elisabettiana|pers:william-byrd` | 2 | `specific_published_collaboration` |
| 92 | `legacy:song-ayre-liuto-inglese|pers:john-dowland` | 2 | `specific_work_example` |
| 93 | `legacy:tradizione-inglese-elisabettiana|pers:orlando-gibbons` | 2 | `chronological_scope_warning` |
| 94 | `legacy:polifonia-sacra-spagnola|pers:tomas-luis-de-victoria` | 2 | `historical_practice_context` |
| 95 | `legacy:polifonia-sacra-spagnola|pers:cristobal-de-morales` | 2 | `historical_practice_context` |
| 96 | `legacy:polifonia-sacra-spagnola|pers:francisco-guerrero` | 2 | `source_specificity_warning` |
| 97 | `legacy:villancico-rinascimentale-iberico|pers:juan-del-encina` | 3 | `multiple_specialist_predicates` |
| 98 | `legacy:scuola-napoletana|pers:alessandro-scarlatti` | 2 | `historical_practice_context` |
| 99 | `legacy:musica-corte-medicea-seicento|pers:francesca-caccini` | 2 | `metadata_mismatch_warning` |
| 100 | `legacy:camerata-fiorentina|pers:giulio-caccini` | 2 | `historical_circle_distinction` |

## Giudizi motivati e particolarità

**81. `legacy:ars-nova-italiana|pers:landini`** — Landini è protagonista della ballata polifonica italiana del Trecento. L'ars nova comprende anche altre forme: non attribuirle automaticamente tutte a Landini senza controllare opere concrete.

**82. `legacy:madrigale-ars-nova-primo-trecento|pers:jacopo-da-bologna`** — Jacopo da Bologna: madrigale polifonico trecentesco, distinto dal madrigale cinquecentesco nonostante l'omonimia; nessun attraversamento fra i due generi per identità di etichetta.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/jacopo-da-bologna_%28Dizionario-Biografico%29/>.

**83. `legacy:caccia-italiana-trecento|pers:gherardello-da-firenze`** — Gherardello da Firenze: Tosto che l'alba rappresenta un esempio concreto di caccia polifonica; distinzione tra forma trecentesca e significato generico della parola.

**84. `legacy:madrigale-ars-nova-primo-trecento|pers:giovanni-da-cascia`** — Giovanni da Cascia: madrigale trecentesco e ambiente scaligero non dimostrano rapporti didattici diretti con Jacopo da Bologna.

**85. `legacy:madrigalismo-cinquecentesco|pers:luca-marenzio`** — Marenzio: madrigalismo cinquecentesco e relazione espressiva parola-musica, senza inferire legami personali con gli altri madrigalisti.

**86. `legacy:madrigalismo-cinquecentesco|pers:carlo-gesualdo`** — Gesualdo: cromatismo e tensioni armoniche delle ultime raccolte, senza inferire discepolato o contatti diretti con Marenzio.

**87. `legacy:tastiere-italiane-primo-seicento|pers:frescobaldi`** — Frescobaldi: musica per organo e tastiera nel primo Seicento, non inventore esclusivo di forme strumentali né per forza maestro di ogni autore della corrente.

**88. `legacy:frottola-corti-italiane|pers:bartolomeo-tromboncino`** — Tromboncino: repertorio di frottola cortigiana a Mantova; distinguere canto, testi e patronato e non inferire rapporti personali automatici.

**89. `legacy:frottola-corti-italiane|pers:marchetto-cara`** — Marchetto Cara: frottola alla corte di Mantova e sua trasmissione a stampa. La presenza nelle edizioni Petrucci non prova automaticamente collaborazione diretta.

**90. `legacy:tradizione-inglese-elisabettiana|pers:thomas-tallis`** — Tallis ebbe lunga carriera di musica sacra Tudor, sotto sovrani di confessioni diverse, non soltanto durante Elisabetta I: la tradizione inglese elisabettiana è categoria storica imperfetta.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/la-pratica-inglese_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**91. `legacy:tradizione-inglese-elisabettiana|pers:william-byrd`** — Byrd e Tallis ottennero privilegio editoriale congiunto nel 1575; relazione distinta dalla vicinanza repertoriale o dalla non documentata formazione diretta di Byrd con Tallis.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/la-pratica-inglese_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**92. `legacy:song-ayre-liuto-inglese|pers:john-dowland`** — Dowland: First Booke of Songes or Ayres (1597) include canto e intavolatura per liuto, con possibilità di differenti organici, non esclusivamente musica solistica strumentale.

**93. `legacy:tradizione-inglese-elisabettiana|pers:orlando-gibbons`** — Gibbons: Chapel Royal sotto Giacomo I; organista dal 1604 al 1625. L'ambito elisabettiano è eredità storico-stilistica e NON collocazione della carica sotto Elisabetta.

Fonti indipendenti consultate per il punto specifico: <https://www.westminster-abbey.org/abbey-commemorations/commemorations/orlando-and-christopher-gibbons>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/i-virginalisti-inglesi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/> · <https://www.westminster-abbey.org/abbey-commemorations/commemorations/orlando-and-christopher-gibbons>.

**94. `legacy:polifonia-sacra-spagnola|pers:tomas-luis-de-victoria`** — Victoria: polifonia sacra spagnola con esperienza formativa e lavorativa romana, senza automatico rapporto maestro-allievo con Palestrina.

**95. `legacy:polifonia-sacra-spagnola|pers:cristobal-de-morales`** — Morales: messe, mottetti e repertorio sacro spagnolo; l'appartenenza a un'area stilistica non prova genealogia didattica di tutti i suoi autori.

**96. `legacy:polifonia-sacra-spagnola|pers:francisco-guerrero`** — Guerrero è documentato come polifonista iberico, ma la fonte specialistica conservata è una voce su Cristóbal de Morales, non su Francisco Guerrero. Segnalare per futura rettifica con fonte specifica, senza propagare fonti alla produzione.

Fonti indipendenti consultate per il punto specifico: <https://www.treccani.it/enciclopedia/francisco-guerrero/> · <https://www.centrodedocumentacionmusicaldeandalucia.es/-/aniversario-de-la-incorporacion-de-francisco-guerrero-a-la-catedral-de-sevilla-como-maestro-de-capilla>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/cristobal-morales_%28Enciclopedia-Italiana%29/>.

**97. `legacy:villancico-rinascimentale-iberico|pers:juan-del-encina`** — Juan del Encina: uno specialista descrive villancico e teatro musicale, un altro attesta lo specifico Ay triste que vengo nel cancionero. Due predicati distinti, non un doppione da cancellare.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/juan-del-encina/> · <https://www.treccani.it/enciclopedia/villancico/> · <https://poemas.uned.es/poema/ay-triste-que-vengo-juan-del-encina/>.

**98. `legacy:scuola-napoletana|pers:alessandro-scarlatti`** — Alessandro Scarlatti protagonista dell'opera napoletana e della cantata; scuola napoletana è aggregato storico, non prova di tutti i discepoli né equivalenza di generi.

**99. `legacy:musica-corte-medicea-seicento|pers:francesca-caccini`** — Francesca Caccini servì la corte dei Medici e compose La liberazione di Ruggiero (1625). Metadato specialistico 'servizio-corte-estense-e-medicea' menziona Estense senza riscontro nelle fonti allegate: conservarlo come originale ma bloccare nuova inferenza verso gli Este.

Fonti indipendenti consultate per il punto specifico: <https://www.lib.uchicago.edu/efts/IWW/BIOS/A0083.html> · <https://francescacaccinimusic.com/a-brief-history/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/caccini-francesca-detta-la-cecchina_%28Dizionario-Biografico%29/> · <https://www.uffizi.it/opere/acquaforte1-ruggiero>.

**100. `legacy:camerata-fiorentina|pers:giulio-caccini`** — Giulio Caccini partecipò sia alla Camerata di Bardi sia all'ambiente successivo di Jacopo Corsi, due cerchie distinte; 'camerata fiorentina' è raggruppamento storiografico, non un'unica istituzione.

Fonti indipendenti consultate per il punto specifico: <https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/>. La verifica puntuale NON certifica tutte le relazioni del gruppo.

Fonti originali specialistiche conservate: <https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.


## Controlli eseguiti nel lotto

- **PASS** — 20 groups exactly 81–100.
- **PASS** — 41 total originals, 20 base and 21 specialists.
- **PASS** — one triple group Juan del Encina (97).
- **PASS** — every original source payload preserved.
- **PASS** — all specialist forward/reverse explicit.
- **PASS** — base original renderer port remains pending.
- **PASS** — all crosswalk mapped IDs match pair indexes.
- **PASS** — no public changes or false historical gate.
- **PASS** — Guerrero reference mismatch flagged.
- **PASS** — Francesca Caccini meta mismatch flagged.
- **PASS** — Gibbons chronological boundary noted.
- **PASS** — Bardi vs Corsi two circles distinguished.

## Principi d'integrazione non derogabili

- **Grafo storico e piano editoriale distinti**: i capitoli di Musurgia Mundi sono risorse di consultazione, non nodi attraversabili. Un concetto chiamato `opera-lirica` o `risorgimento` non si confonde con `cap:opera-lirica` o con la pagina del Risorgimento.
- **Pertinenza radicata I–V**: le scuole, i periodi, i generi e le tecniche NON sono scorciatoie che rendono automaticamente visibili tutti i relativi autori. Gli archi fra persone/opere con fatti specifici potranno essere attraversati dopo valutazione singola, se pertinenti alla radice.
- **Nessuna fusione cieca**: predicati parzialmente coincidenti, direzioni invertite o stessa coppia di estremi non autorizzano cancellazioni. Conservare `forward`, `reverse`, `note`, `sources` e tutte le proprietà originali.
- **UI originale ancora da collaudare**: i link base non contengono `forward/reverse` espliciti. Il porting letterale di `relationSentence` e delle tre ridefinizioni, con test hover/tap, è indispensabile prima di un rilascio.

## Prossimi passi

Le 100 prime collisioni sono triagiate. Prossimi gruppi 101–120 e porting del renderer legacy in adapter isolato, con collaudo bidirezionale in entrambi i versi e successivamente test di UI desktop/Android. Prima di rilasciare correggere le attribuzioni/source mismatch specificamente segnalati.
