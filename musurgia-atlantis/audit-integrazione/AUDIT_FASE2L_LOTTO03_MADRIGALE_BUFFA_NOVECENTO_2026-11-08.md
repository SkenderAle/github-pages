# Musurgia Atlantis — Fase 2L, Lotto 03: madrigale, teatro buffo, Novecento

**Data:** 8 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main`.

## Ambito, conteggi e metodo

Audit semantico strutturale dei **20 gruppi 41–60 su 250** presenti nell'indice `CANDIDATI_COLLISIONI_ARCHI_FASE2K_2026-11-08.json`. Dopo questo lotto risultano **60/250 gruppi triagiati**, **190** ancora da esaminare. Si contano **41 registrazioni originali**: **20** dal grafo base e **21** dall'archivio specialistico, perché il gruppo 60 *Steve Reich / minimalismo* comprende **due** archi specialistici oltre a quello base. Non va chiamato «20 coppie» nel senso di 40 righe.

Esito: **12** casi di repertorio/contesto generale e sua specificazione; **1** identità/attribuzione discussa; **6** casi di ruolo diverso in movimento o tecnica compositiva; **1** gruppo con doppi predicati specialistici. **10/10 controlli di integrità sullo staging superati**, non certificazione filologica generale. Tutte le `forward/reverse` specialistiche, note, fonti, ID originali, payload integrali e mappe provvisorie sono conservati. Le frasi dei 20 archi base restano da generare con il renderer JS originale, e NON vengono inventate qui.

## Registro per gruppo

| N. | Nodo persona | Categoria | Esito preliminare | Relazioni sorgente |
|---:|---|---|---|---:|
| 41 | `pers:cipriano-de-rore` | `legacy:madrigale` | Contesto e repertorio specifico | 2 |
| 42 | `pers:maddalena-casulana` | `legacy:madrigale` | Contesto e repertorio specifico | 2 |
| 43 | `pers:vittoria-aleotti` | `legacy:madrigale` | Attribuzione/identità da sospendere | 2 |
| 44 | `pers:pergolesi` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 45 | `pers:paisiello` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 46 | `pers:cimarosa` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 47 | `pers:niccolo-piccinni` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 48 | `pers:mozart` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 49 | `pers:rossini` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 50 | `pers:baldassare-galuppi` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 51 | `pers:nicola-logroscino` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 52 | `pers:leonardo-leo` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 53 | `pers:pietro-alessandro-guglielmi` | `legacy:opera-buffa` | Contesto e repertorio specifico | 2 |
| 54 | `pers:stravinskij` | `legacy:neoclassicismo` | Ruolo in corrente o tecnica | 2 |
| 55 | `pers:luigi-russolo` | `legacy:futurismo` | Ruolo in corrente o tecnica | 2 |
| 56 | `pers:schonberg` | `legacy:dodecafonia` | Ruolo in corrente o tecnica | 2 |
| 57 | `pers:alban-berg` | `legacy:dodecafonia` | Ruolo in corrente o tecnica | 2 |
| 58 | `pers:anton-webern` | `legacy:dodecafonia` | Ruolo in corrente o tecnica | 2 |
| 59 | `pers:luigi-dallapiccola` | `legacy:dodecafonia` | Ruolo in corrente o tecnica | 2 |
| 60 | `pers:reich` | `legacy:minimalismo` | Due predicati specialistici diversi | 3 |

## Note semantiche e cautele

**41. legacy:madrigale|pers:cipriano-de-rore** — Cipriano de Rore: repertorio madrigalistico e sperimentazione cromatica/espressiva, non rapporto personale con ogni madrigalista.

**42. legacy:madrigale|pers:maddalena-casulana** — Maddalena Casulana: distinguere brani in antologie Il Desiderio (1566–1567) dal Primo libro a 4 voci del 1568, pubblicato a proprio nome.

Riscontro mirato: <https://cenhtor-msh-lorraine.cnrs.fr/s/digital_casulana/page/primo_libro_sources_en>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**43. legacy:madrigale|pers:vittoria-aleotti** — Vittoria Aleotti: madrigali del 1593. Non decidere automaticamente l'identità con Raffaella Aleotti, questione musicologica discussa; conservare la distinzione di attribuzioni.

Riscontro mirato: <https://scholarwolf.unr.edu/bitstreams/15363844-81ae-4ed8-b7d8-e478a92f8615/download>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**44. legacy:opera-buffa|pers:pergolesi** — Pergolesi: La serva padrona (1733) è un intermezzo tra gli atti de Il prigioniero superbo, influente nella storia dell'opera buffa, non un'opera buffa intera.

Riscontro mirato: <https://www.treccani.it/enciclopedia/la-serva-padrona/>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**45. legacy:opera-buffa|pers:paisiello** — Paisiello: trattare i drammi giocosi e le opere comiche come repertorio specifico, non come identità assoluta del genere. Il Barbiere del 1782 non implica rapporto personale con Rossini.

Riscontro mirato: <https://corago.unibo.it/opera/Z000002526>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**46. legacy:opera-buffa|pers:cimarosa** — Cimarosa: teatro comico e Il matrimonio segreto (1792), caso specifico di repertorio, non un legame automatico con altri operisti buffi.

**47. legacy:opera-buffa|pers:niccolo-piccinni** — Piccinni: La buona figliuola / La Cecchina (1760, su Goldoni) segna anche il filone sentimentale, da distinguere dalla pura comicità.

Riscontro mirato: <https://www.sapere.it/sapere/strumenti/studiafacile/musica/L-et--del-classicismo-e-Mozart/Transizione-e-rinnovamento/Dall-opera-buffa-all--op-ra-comique-.html>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**48. legacy:opera-buffa|pers:mozart** — Mozart: distinguere buffa, dramma giocoso e altri generi sulle singole opere; Le nozze di Figaro, Don Giovanni e Così fan tutte non autorizzano attraversamento via etichetta comune.

**49. legacy:opera-buffa|pers:rossini** — Rossini: farse e opere come Il barbiere di Siviglia costituiscono contributi concreti al genere, non prova di influenza su tutti i compositori collegati alla categoria.

**50. legacy:opera-buffa|pers:baldassare-galuppi** — Galuppi: coltivò il teatro comico, ma l'adiacenza a opera buffa non certifica collaborazioni con ogni librettista o compositore del genere.

**51. legacy:opera-buffa|pers:nicola-logroscino** — Logroscino: concertati nelle commedie per musica, ma Treccani esclude che lo si definisca inventore dei finali concertati.

Riscontro mirato: <https://www.treccani.it/enciclopedia/nicola-logroscino_%28Dizionario-Biografico%29/>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**52. legacy:opera-buffa|pers:leonardo-leo** — Leonardo Leo: Amor vuol sofferenza è una commedia per musica specifica, senza attribuire all'autore l'invenzione del teatro buffo.

**53. legacy:opera-buffa|pers:pietro-alessandro-guglielmi** — Pietro Alessandro Guglielmi: produzione operistica buffa ampia da registrare con opere/fonti, non con inferenze di scuola o discepolato.

**54. legacy:neoclassicismo|pers:stravinskij** — Stravinskij: Pulcinella (1920) e rielaborazione neoclassica sono una fase/stile documentabile; non estendere il predicato a tutte le sue opere.

**55. legacy:futurismo|pers:luigi-russolo** — Russolo: ruolo nell'estetica futurista del rumore e degli intonarumori, distinto dall'essere sinonimo del Futurismo intero.

**56. legacy:dodecafonia|pers:schonberg** — Schönberg: ideazione della tecnica dei dodici suoni intorno al 1923; non confondere ideazione, utilizzo personale e serialismo integrale del dopoguerra.

**57. legacy:dodecafonia|pers:alban-berg** — Berg: applicazione espressiva personale della dodecafonia, che non autorizza ad attribuire la tecnica a tutta la sua musica.

**58. legacy:dodecafonia|pers:anton-webern** — Webern: tecnica dodecafonica, simmetrie e contrappunto; distinguere tale pratica dal successivo serialismo integrale.

Riscontro mirato: <https://resources.ircam.fr/en/composer/anton-webern/workcourse>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

**59. legacy:dodecafonia|pers:luigi-dallapiccola** — Dallapiccola: adozione personale della dodecafonia in opere specifiche, non legame istituzionale indifferenziato con Schönberg e Webern.

**60. legacy:minimalismo|pers:reich** — Steve Reich: uno specialista descrive processi graduali e sfasamento, l'altro lo qualifica pioniere del minimalismo. Due predicati diversi con gli stessi estremi, NON duplicati da eliminare.

Riscontro mirato: <https://stevereich.com/biography/>. La fonte sostiene il punto circoscritto indicato, non certifica ogni arco nel gruppo.

## Evidenze da non appiattire

1. **Casulana, 1566–1568.** I contributi antologici di Maddalena Casulana nel 1566–67 e il *Primo libro* a quattro voci del 1568 hanno natura editoriale distinta. Il progetto [Digital Casulana del CNRS](https://cenhtor-msh-lorraine.cnrs.fr/s/digital_casulana/page/primo_libro_sources_en) conferma le edizioni della raccolta (1568, ristampa 1583).
2. **Vittoria e Raffaella Aleotti.** La `Ghirlanda de madrigali a quattro voci` (1593) resta attribuita a Vittoria. L'identità biografica di Vittoria e Raffaella è controversa nella letteratura: NON fondere i nomi automaticamente, senza trasformare una scelta conservativa di dati in un fatto certo. Vedi [RILM, Vittoria Aleotti](https://rme.rilm.org/articles/iew10131/1.0/iew10131) e [KVAST, Aleotti](https://eng.kvast.org/aleotti-vittoria/), che trattano la questione con impostazioni non coincidenti.
3. **Pergolesi.** [Treccani](https://www.treccani.it/enciclopedia/la-serva-padrona/) indica esplicitamente *La serva padrona* (1733) come intermezzo rappresentato fra gli atti de *Il prigioniero superbo*. La storia dell'opera buffa lo comprende come antecedente rilevante, non come identità tassonomica assoluta fra i due generi.
4. **Paisiello / Mozart / Rossini.** La categoria opera buffa conserva distinzioni fra intermezzo, commedia per musica, dramma giocoso e specifiche opere. [Corago - Università di Bologna](https://corago.unibo.it/opera/Z000002526) classifica il *Barbiere di Siviglia* di Paisiello come «dramma giocoso per musica», non genera un arco diretto Paisiello→Rossini o un percorso Mozart→genere→tutti.
5. **Logroscino.** [DBI Treccani](https://www.treccani.it/enciclopedia/nicola-logroscino_%28Dizionario-Biografico%29/) rifiuta l'attribuzione dell'«invenzione» esclusiva del finale concertato. Il `kind` dello specialista è più preciso del semplice collegamento alla categoria.
6. **Dodecafonia.** Schönberg è collegato all'elaborazione del metodo, Berg e Webern alle applicazioni differenti, Dallapiccola alla ricezione personale italiana. Gli archi non creano relazioni dirette di insegnamento o di allievo per semplice tecnica condivisa. Per Webern [IRCAM](https://resources.ircam.fr/en/composer/anton-webern/workcourse) ne descrive la scrittura dodecafonica e la sua particolare struttura.
7. **Reich — tripla registrazione.** Condividono la stessa coppia di estremi `pers:reich|legacy:minimalismo` il base `relazione-storico-musicale` e gli specialistici `processi-graduali-e-ripetizione` e `generazione-fondativa`. Descrivono tecnica e collocazione storico-generazionale: conservarli tutti, senza collassarli in un solo fatto.

## Controlli eseguiti

- **PASS** — exactly groups 41–60.
- **PASS** — exactly 41 source records (20 base, 21 specialist).
- **PASS** — Reich group 60 contains three original records.
- **PASS** — all payloads preserved.
- **PASS** — all specialist original forward/reverse retained.
- **PASS** — base source phrase generation not falsely claimed.
- **PASS** — normalized endpoints match all indexed pairs.
- **PASS** — no data released or merged.
- **PASS** — no genre or technique becomes automatic bridge.
- **PASS** — Vittoria/Raffaella unresolved.

## Limiti e vincoli di release

La classificazione è di **compatibilità semantica preliminare**, NON equivale a validazione storica indipendente di tutti gli archi. Nessuna fusione eseguita, nessuna traversata dei generi/correnti/tecniche resa possibile, nessuna modifica ai **3.856 archi legacy** o ai **1.718 Atlantis**, nessuna modifica del database o dell'interfaccia pubblica e nessuna alterazione dei **210 lotti** storico-filologici.

Restano da portare le tre ridefinizioni di `relationSentence` con controllo della **frase effettiva finale in entrambi i versi**, note, fonti, hover desktop e tap Android. Non è stato eseguito un test browser nel presente lotto.

## Prossima ripresa — Lotto 04

Gruppi **61–80**, più adapter isolato di fedeltà al renderer originario. Verificare la pertinenza radicata I–V su relazioni specifiche, senza attraversamento automatico di categorie condivise e mantenendo i capitoli solo nella vista editoriale. Preparare test di parità della resa originale prima di aggiornare l'interfaccia pubblica.
