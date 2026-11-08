# Musurgia Atlantis — Fase 2L · Lotto 02

**8 novembre 2026 · `main` · esclusivamente staging di audit, senza modifiche alla produzione.**

## Contabilità

- Esaminate le **20 sovrapposizioni 21–40** dell'indice originario fra gli archivi base e specialistico: **40/250** gruppi ora triagiati (Lotto 01: 1–20, Lotto 02: 21–40), **210** da esaminare.
- **16/20** contestualizzazioni generali affiancate a uno specifico ruolo individuale o contributo al genere; **3/20** processi di trasmissione fra scuole con specificazione dei mediatori; **1/20** stesso rapporto personale documentato: Giovanni Gabrieli → Heinrich Schütz.
- Preservati entrambi i payload originali per gruppo, tutti i frammenti `forward/reverse` dello specialista, note, fonti, direzioni originali e identità provvisorie; le 20 frasi dei link base **non sono state ricostruite** finché non è portato il renderer originale.
- **8/8 controlli strutturali superati** sul lotto. Non significano validazione filologica completa né collaudo browser/touch. **0 archi cancellati, fusi, promossi, resi attraversabili o pubblicati.**

## Tabella di riconciliazione

| Gruppo | Coppia di estremi | Predicati | Classificazione |
|---:|---|---|---|
| 21 | `legacy:scuola-fiamminga|pers:dufay` | `appartenenza-storica` / `tradizione-fondativa` | Contesto generale + ruolo specifico |
| 22 | `legacy:scuola-fiamminga|pers:josquin` | `appartenenza-storica` / `trasformazione-stilistica` | Contesto generale + ruolo specifico |
| 23 | `legacy:scuola-fiamminga|pers:orlando-di-lasso` | `appartenenza-storica` / `diffusione-internazionale` | Contesto generale + ruolo specifico |
| 24 | `legacy:scuola-fiamminga|pers:adriano-willaert` | `appartenenza-storica` / `trasferimento-di-tecniche` | Contesto generale + ruolo specifico |
| 25 | `legacy:scuola-veneziana|pers:adriano-willaert` | `appartenenza-storica` / `guida-di-san-marco` | Contesto generale + ruolo specifico |
| 26 | `legacy:scuola-veneziana|pers:andrea-gabrieli` | `appartenenza-storica` / `organista-e-policoralita` | Contesto generale + ruolo specifico |
| 27 | `legacy:scuola-veneziana|pers:giovanni-gabrieli` | `appartenenza-storica` / `dialogo-di-cori-e-strumenti` | Contesto generale + ruolo specifico |
| 28 | `legacy:scuola-veneziana|pers:monteverdi` | `contesto-o-eredita` / `rinnovamento-seicentesco` | Contesto generale + ruolo specifico |
| 29 | `legacy:scuola-luterana|pers:heinrich-schutz` | `appartenenza-storica` / `ricezione-veneziana` | Contesto generale + ruolo specifico |
| 30 | `legacy:scuola-luterana|pers:bach` | `appartenenza-storica` / `erede-plurale` | Contesto generale + ruolo specifico |
| 31 | `legacy:scuola-fiamminga|legacy:scuola-romana` | `trasmissione-tecniche` / `rielaborazione-del-contrappunto` | Processo di trasmissione fra tradizioni |
| 32 | `legacy:scuola-fiamminga|legacy:scuola-veneziana` | `trasmissione-tecniche` / `trasferimento-di-tecniche` | Processo di trasmissione fra tradizioni |
| 33 | `legacy:scuola-luterana|legacy:scuola-veneziana` | `influenza-musicale` / `trasferimento-transnazionale` | Processo di trasmissione fra tradizioni |
| 34 | `legacy:scuola-veneziana|pers:heinrich-schutz` | `formazione-e-influenza` / `formazione-esterna` | Contesto generale + ruolo specifico |
| 35 | `pers:giovanni-gabrieli|pers:heinrich-schutz` | `maestro-allievo` / `insegnamento-documentato` | Stesso rapporto personale specifico |
| 36 | `legacy:madrigale|pers:luca-marenzio` | `relazione-storico-musicale` / `perfezionamento-madrigale-polifonico` | Contesto generale + ruolo specifico |
| 37 | `legacy:madrigale|pers:carlo-gesualdo` | `relazione-storico-musicale` / `cromatismo-madrigalistico-tardo-cinquecento` | Contesto generale + ruolo specifico |
| 38 | `legacy:madrigale|pers:monteverdi` | `relazione-storico-musicale` / `trasformazione-madrigale-tra-cinque-e-seicento` | Contesto generale + ruolo specifico |
| 39 | `legacy:madrigale|pers:adriano-willaert` | `relazione-storico-musicale` / `musica-nova-e-madrigale-colto` | Contesto generale + ruolo specifico |
| 40 | `legacy:madrigale|pers:orlando-di-lasso` | `relazione-storico-musicale` / `madrigale-europeo-del-cinquecento` | Contesto generale + ruolo specifico |

## Decisioni storico-semantiche, una per gruppo

**21. scuola-fiamminga-guillaume-dufay** — Dufay non è membro di una scuola istituzionale unica: il gruppo franco-fiammingo è una categoria storiografica, mentre la sintesi borgognona è una caratterizzazione individuale; nessun collegamento automatico ad altri autori.

**22. scuola-fiamminga-josquin-des-prez** — Josquin appartiene alla tradizione franco-fiamminga in senso storiografico; la scrittura imitativa e l'attenzione al testo sono attributi da documentare, non ponte a tutti i compositori della medesima tradizione.

**23. scuola-fiamminga-orlando-di-lasso** — Per Orlando di Lasso: tradizione franco-fiamminga di origine e diffusione sovraregionale nell'attività concreta (anche Monaco); non creare collegamenti personali per sola vicinanza di scuola.

**24. scuola-fiamminga-adriano-willaert** — Willaert possiede formazione franco-fiamminga, mentre il trasferimento di tecniche e la direzione di San Marco inquadrano una relazione storica più specifica: le due scuole non sono due persone e non permettono transito libero.

**25. scuola-veneziana-adriano-willaert** — La generica associazione alla scuola veneziana è precisata dalla carica di maestro di cappella di San Marco assunta nel 1527. Conservare fatto istituzionale e contesto stilistico separati.

Riscontri aggiuntivi mirati: [fonte](https://www.treccani.it/enciclopedia/adrian-willaert_%28Dizionario-Biografico%29/) (Willaert nominato maestro di cappella di San Marco il 12 dicembre 1527.). 

**26. scuola-veneziana-andrea-gabrieli** — Andrea Gabrieli: l'attività come organista di San Marco e la policoralità precisano il contesto veneziano. Non attribuire a una persona l'invenzione esclusiva della policoralità.

**27. scuola-veneziana-giovanni-gabrieli** — Giovanni Gabrieli: ruolo marciano e scrittura policorale/concertata precisano la tradizione veneziana. Segnalare discrepanza cronologica: staging specialistico 'organista dal 1584', Treccani 'dal 1585'; non pubblicare data rigida senza riscontro.

Riscontri aggiuntivi mirati: [fonte](https://www.treccani.it/enciclopedia/giovanni-gabrieli/) (Fonte Treccani online riporta organista di S. Marco dal 1585, mentre scheda specialistica conserva 1584.). 

**28. scuola-veneziana-claudio-monteverdi** — Monteverdi: maestro di cappella a San Marco dal 1613, ma non semplicemente esponente della scuola veneziana cinquecentesca. La collocazione seicentesca è una continuazione/trasformazione, non appartenenza indistinta.

**29. scuola-luterana-heinrich-schutz** — Schütz: rappresenta musica sacra protestante tedesca che integra pratiche veneziane. Il predicato scuola-luterana non significa che fu allievo di ogni compositore del repertorio luterano.

**30. scuola-luterana-johann-sebastian-bach** — Bach: rielabora la tradizione luterana del corale e della cantata. Non dedurne un rapporto diretto con Schütz o con altri autori attraverso una categoria confessionale.

**31. ponte-fiamminghi-romana** — Franco-fiamminga→Romana: il trasferimento di modelli contrappuntistici è un processo storico, non singolo evento e non incontro fra persone. Evitare che due entità-scuola divengano ponte I–V.

**32. ponte-fiamminghi-veneziana** — Franco-fiamminga→Veneziana: la trasmissione viene mediata da figure specifiche come Willaert e de Rore; un arco fra scuole è solo una rappresentazione della sintesi editoriale, non scorciatoia verso tutti i membri.

**33. ponte-veneziana-luterana** — Veneziana→Luterana: processi mediati da Schütz e da composizioni documentabili; l'arco macro non dimostra contatto diretto fra chiunque afferisca alle due tradizioni.

**34. ponte-veneziana-schutz** — Schütz si formò a Venezia con Giovanni Gabrieli, ma NON è un membro istituzionale della scuola veneziana. Conservare l'arco scuola/persona come contesto e l'arco personale col maestro come fatto specifico indipendente.

**35. form-giovanni-gabrieli-schutz** — Giovanni Gabrieli fu maestro di Heinrich Schütz a Venezia dal 1609 al 1612: base e specialistico raccontano lo stesso rapporto didattico, con note e fonti differenti. La coerenza non autorizza eliminazione di una testimonianza.

Riscontri aggiuntivi mirati: [fonte](https://www.treccani.it/enciclopedia/heinrich-schutz_%28Enciclopedia-Italiana%29/) (Schütz fu allievo di Giovanni Gabrieli a Venezia dal 1609 al 1612.); [fonte](https://www.treccani.it/enciclopedia/giovanni-gabrieli_%28Enciclopedia-Italiana%29/) (Giovanni Gabrieli ebbe come allievo Schütz nel 1609.). 

**36. audit8f-madrigale-marenzio** — Luca Marenzio: pratica del madrigale e specifico lavoro sulla relazione parola-musica; un genere non è un compositore e non crea relazioni dirette con altri madrigalisti.

**37. audit8f-madrigale-gesualdo** — Gesualdo: cromatismo e dissonanze nei madrigali più tardi sono specificazioni del contributo al genere, non prova di rapporto diretto con Marenzio o Monteverdi.

**38. audit8f-madrigale-monteverdi** — Monteverdi: sviluppa il madrigale polifonico e quello concertato, con speciale rilievo della parola. Non confondere automaticamente madrigale con opera lirica o inventare genealogie personali.

**39. audit8f-madrigale-willaert** — Willaert: i madrigali di Musica nova (pubblicata 1559, insieme a mottetti) esemplificano la scrittura polifonica colta; la sua attività sacra e istituzionale resta distinta.

Riscontri aggiuntivi mirati: [fonte](https://www.treccani.it/enciclopedia/il-madrigale_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/) (Musica nova di Willaert pubblicata nel 1559 e importante per trattamento poetico.). 

**40. audit8f-madrigale-lasso** — Orlando di Lasso: documentata attività madrigalistica in un catalogo di generi più ampio; la comune pratica del madrigale non basta a provare contatti o influenze personali con gli altri.

Riscontri aggiuntivi mirati: [fonte](https://www.treccani.it/enciclopedia/madrigale/) (Orlando di Lasso incluso tra gli autori noti del madrigale rinascimentale.). 

## Differenze delicate

**Dufay e la cosiddetta scuola fiamminga.** Il raggruppamento è una costruzione storiografica che non giustifica un rapporto di appartenenza amministrativa, né un maestro comune a ogni autore. Il rapporto specifico con la tradizione borgognona e franco-fiamminga rimane una faccetta da spiegare. Lo stesso vale, con sfumature differenti, per Josquin, Orlando di Lasso e Willaert.

**Willaert e le due tradizioni.** La stessa persona figura sia presso la tradizione franco-fiamminga sia in quella veneziana; le due relazioni non la sdoppiano, ma neanche collegano automaticamente tutti gli autori dell'una con quelli dell'altra. La nomina a maestro di cappella di San Marco nel 1527 è un fatto distinto da una categoria stilistica.

**Giovanni Gabrieli: 1584 / 1585.** La scheda specialistica dice «organista di San Marco dal 1584», mentre [Treccani](https://www.treccani.it/enciclopedia/giovanni-gabrieli/) indica dal 1585. Annotata la discrepanza; nessuna data è stata sovrascritta nel grafo.

**Schütz non diventa 'veneziano'.** La sua formazione con Giovanni Gabrieli a Venezia (1609–1612) è personale e documentata, mentre il rapporto scuola veneziana–Schütz resta un contesto formativo non attraversabile verso tutti gli altri musicisti veneziani. Fonti: [Treccani, Gabrieli](https://www.treccani.it/enciclopedia/giovanni-gabrieli_%28Enciclopedia-Italiana%29/); [Treccani, Schütz](https://www.treccani.it/enciclopedia/heinrich-schutz_%28Enciclopedia-Italiana%29/).

**Le tre connessioni scuola–scuola** (31–33) sono schemi della circolazione stilistica, **non eventi atomici**: per l'espansione radicata, se un rapporto personale è necessario si passa soltanto da persone/opere e fatti autonomamente riscontrati, mai da una scuola come ponte indiscriminato.

**Madrigale: genere, non parentela artistica presunta.** Marenzio, Gesualdo, Monteverdi, Willaert e Lasso possono tutti essere esplorati in rapporto al madrigale, ma la relazione al medesimo genere non consente di inferire influenze o rapporti reciproci. In particolare `Musica nova` di Willaert (1559) comprende madrigali **e** mottetti e non lo riduce al solo genere. Fonte: [Treccani, Il madrigale](https://www.treccani.it/enciclopedia/il-madrigale_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).

## Esito del collaudo dati del Lotto 02

- PASS — all requested overlap groups 21-40 present.
- PASS — each group has two source snapshots.
- PASS — bidirectional specialist fragments preserved.
- PASS — base requires renderer port (not invented).
- PASS — source and target identity pair match.
- PASS — no edge publicly released by staging.
- PASS — all school and genre pairs closed for generic traversal.
- PASS — exact one person-person didactic exception.

Il test non esegue la resa finale `relationSentence` né controlli reali desktop/Android. Gli **8/8 test** precedenti sul caso Mozart→Leopold rimangono specifici del dataset temporaneo, non certificano la UI. Non è stato modificato alcun file del grafo storico pubblico di Atlantis o Atlante 3D né i 210 lotti filologici.

## Prossimo Lotto 03

Verificare i **gruppi 41–60** dell'indice collisioni e preparare l'adapter di compatibilità dell'ultima versione effettiva di `relationSentence`, rispettando l'ordine delle tre ridefinizioni, le due direzioni e le eccezioni. Niente rilascio o nuove traversate finché non ci sono test puntuali e verifiche su browser e Android.
