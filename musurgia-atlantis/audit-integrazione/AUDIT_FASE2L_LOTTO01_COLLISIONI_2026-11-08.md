# Musurgia Atlantis — Fase 2L · Lotto 01

**Data:** 8 novembre 2026 · **Branch:** `main` · **Ambito:** esclusivamente `audit-integrazione/`.

## Risultato effettivo

Confrontati individualmente **20/20** record legacy con estremi già presenti in Atlantis (**16 coppie di estremi**); classificati **12** come coincidenza della stessa *faccetta storica* (senza autorizzazione alla fusione), **6** come relazioni realmente differenti e **2** con necessità di riscontro documentale più specifico. Nessuna cancellazione, nessun arco trasferito o convalidato automaticamente, nessuna modifica di `grafo.json` e interfaccia.

Esaminati in aggiunta i **primi 20/250** gruppi di sovrapposizione fra archivi legacy: scuola/corrente ↔ persona, con distinzione fra appartenenza generale e caratterizzazione specifica. In nessuno dei 20 casi una scuola può fare da ponte di attraversamento I–V verso altri appartenenti.

## Le 20 coincidenze con Atlantis

| N. | Arco legacy | Arco Atlantis | Esito preliminare |
|---:|---|---|---|
| 1 | `form-haydn-beethoven` | `L145-A01` | Coincidenza della faccetta |
| 2 | `coll-wagner-liszt` | `L147-A02` | Coincidenza della faccetta |
| 3 | `coll-clara-robert` | `L08-A012` | Coincidenza della faccetta |
| 4 | `form-messiaen-boulez` | `L180-A01` | Coincidenza della faccetta |
| 5 | `form-schonberg-berg` | `L154-A01` | Coincidenza della faccetta |
| 6 | `form-schonberg-webern` | `L179-A01` | Coincidenza della faccetta |
| 7 | `coll-schumann-brahms` | `L146-A01` | Coincidenza della faccetta |
| 8 | `coll-clara-brahms` | `L146-A02` | Predicato distinto |
| 9 | `coll-brahms-dvorak` | `L152-A01` | Coincidenza della faccetta |
| 10 | `infl-brahms-dvorak` | `L152-A01` | Predicato distinto |
| 11 | `form-willaert-zarlino` | `L163-A01` | Coincidenza della faccetta |
| 12 | `form-andrea-giovanni-gabrieli` | `L08-A010` | Coincidenza della faccetta |
| 13 | `lotto05-tallis-byrd` | `L164-A03` | Prova specifica pendente |
| 14 | `lotto05-tallis-byrd-cantiones` | `L164-A03` | Predicato distinto |
| 15 | `lotto05-alessandro-domenico` | `L08-A011` | Prova specifica pendente |
| 16 | `lotto07-messiaen-boulez-oiseaux` | `L180-A01` | Predicato distinto |
| 17 | `audit8d-gershwin-ira` | `L08-A013` | Coincidenza della faccetta |
| 18 | `audit11-chopin-liszt-chants-polonais-s480` | `L147-A01` | Predicato distinto |
| 19 | `audit21-mozart-clementi-gara-vienna-1781` | `L144-A03` | Coincidenza della faccetta |
| 20 | `audit26-clara-brahms-influenza-critica` | `L146-A02` | Predicato distinto |

### Decisioni e cautele caso per caso

1. **form-haydn-beethoven** — Lezione di composizione Haydn→Beethoven: medesimo evento; l'arco Atlantis specifica periodo e luogo. Conservare entrambi i testi e le fonti. Fonte(i) legacy: <https://www.britannica.com/biography/Ludwig-van-Beethoven>. **Decisione:** `identical_specific_relation` (non esecutiva).
2. **coll-wagner-liszt** — Il sostegno di Liszt a Wagner coincide come faccetta specifica; l'arco Atlantis accorpa anche la parentela acquisita, da preservare come predicato distinto. Fonte(i) legacy: <https://www.richard-wagner.org/rwvi/en/about-wagner/the-man/>, <https://www.bayreuth-tourismus.de/en/places-of-interest/stage-set-for-richard-wagner/franz-liszt/>. **Decisione:** `identical_specific_relation` (non esecutiva).
3. **coll-clara-robert** — L'attività di Clara come interprete e promotrice delle opere di Robert rientra nella collaborazione artistica documentata; conservare l'autonomia di Clara e la specificità interpretativa. Fonte(i) legacy: <https://www.britannica.com/biography/Clara-Schumann>. **Decisione:** `identical_specific_relation` (non esecutiva).
4. **form-messiaen-boulez** — Insegnamento Messiaen→Boulez: medesimo rapporto didattico; Atlantis specifica la classe di armonia dal 1944. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/pierre-boulez/>. **Decisione:** `identical_specific_relation` (non esecutiva).
5. **form-schonberg-berg** — Insegnamento Schönberg→Berg: stesso rapporto didattico; il dettaglio temporale 1904–1910 non deve trasformarsi in asserzione aggiuntiva non controllata. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/alban-berg_%28Enciclopedia-dei-ragazzi%29/>. **Decisione:** `identical_specific_relation` (non esecutiva).
6. **form-schonberg-webern** — Insegnamento Schönberg→Webern: stesso rapporto didattico; manteniamo due descrizioni e fonti differenti. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/anton-von-webern_%28Enciclopedia-Italiana%29/>. **Decisione:** `identical_specific_relation` (non esecutiva).
7. **coll-schumann-brahms** — Promozione di Brahms da parte di Robert Schumann nel 1853: coincidenza specifica; non inferire insegnamento. Fonte(i) legacy: <https://musiclib-exhibits.library.yale.edu/exhibits/schumann/neue_zeitschrift.html>. **Decisione:** `identical_specific_relation` (non esecutiva).
8. **coll-clara-brahms** — Dialogo personale e critica reciproca Clara–Brahms è distinto dall'esecuzione/promozione pubblica delle musiche di Brahms; conservare entrambi. Fonte(i) legacy: <https://musiclib-exhibits.library.yale.edu/exhibits/schumann/neue_zeitschrift.html>. **Decisione:** `related_distinct_predicate` (non esecutiva).
9. **coll-brahms-dvorak** — Sostegno editoriale di Brahms a Dvořák tramite Simrock: stessa faccetta documentata; non implica rapporto maestro–allievo. Fonte(i) legacy: <https://www.berliner-philharmoniker.de/en/stories/dvoraks-path-to-fame/>, <https://www.antonin-dvorak.cz/en/index-of-names/brahms-johannes-1833-1897/>. **Decisione:** `identical_specific_relation` (non esecutiva).
10. **infl-brahms-dvorak** — Ripresa del modello sinfonico (Terza di Brahms e Settima di Dvořák) è fatto diverso dal sostegno editoriale a Simrock; richiede prova autonoma per l'arco d'influenza. Fonte(i) legacy: <https://www.berliner-philharmoniker.de/en/stories/dvoraks-path-to-fame/>. **Decisione:** `related_distinct_predicate` (non esecutiva).
11. **form-willaert-zarlino** — Rapporto didattico Willaert→Zarlino, a Venezia dal 1541, semanticamente coincidente; non rendere equivalenti le teorie. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/gioseffo-zarlino/>. **Decisione:** `identical_specific_relation` (non esecutiva).
12. **form-andrea-giovanni-gabrieli** — Formazione di Giovanni presso lo zio Andrea Gabrieli: coincide la faccetta didattica, ma parentela e patronato artistico rimangono separabili. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/giovanni-gabrieli/>. **Decisione:** `identical_specific_relation` (non esecutiva).
13. **lotto05-tallis-byrd** — Il privilegio di stampa congiunto del 1575 non prova che Tallis fosse il maestro diretto di Byrd. Conservare la relazione legacy chiusa alla navigazione storica finché non verificata con una fonte specifica. Fonte(i) legacy: <https://en.wikisource.org/wiki/Dictionary_of_National_Biography,_1885-1900/Tallis,_Thomas>. **Decisione:** `pending_authority` (non esecutiva).
14. **lotto05-tallis-byrd-cantiones** — Pubblicazione congiunta dei Cantiones sacrae e privilegio regio di stampa 1575 sono collegati ma non sinonimi; preservare eventi e fonti distinti. Fonte(i) legacy: <https://en.wikisource.org/wiki/Dictionary_of_National_Biography,_1885-1900/Tallis,_Thomas>. **Decisione:** `related_distinct_predicate` (non esecutiva).
15. **lotto05-alessandro-domenico** — La documentazione Atlantis conferma il ruolo del padre Alessandro nella formazione/carriera di Domenico, ma avverte che non sono certe le singole lezioni dirette. Non convalidare «maestro-allievo» letteralmente. Fonte(i) legacy: <https://www.treccani.it/enciclopedia/domenico-scarlatti_%28Enciclopedia-dei-ragazzi%29/>. **Decisione:** `pending_authority` (non esecutiva).
16. **lotto07-messiaen-boulez-oiseaux** — Commissione Boulez→Messiaen di Oiseaux exotiques (1955–56) distinta dall'insegnamento Messiaen→Boulez (1944); conferma esterna IRCAM del committente. Fonte(i) legacy: <https://resources.ircam.fr/fr/work/oiseaux-exotiques>. **Decisione:** `related_distinct_predicate` (non esecutiva).
17. **audit8d-gershwin-ira** — Collaborazione George Gershwin compositore / Ira Gershwin paroliere: stesso rapporto professionale; distinguere ruolo creativo e parentela. Fonte(i) legacy: <https://www.loc.gov/collections/george-and-ira-gershwin-treasures/about-this-collection/>. **Decisione:** `identical_specific_relation` (non esecutiva).
18. **audit11-chopin-liszt-chants-polonais-s480** — Liszt trascrive Six Chants polonais di Chopin op. 74 (S.480), fatto indipendente dalla biografia di Chopin scritta da Liszt. Fonte(i) legacy: <https://imslp.org/wiki/6_Polish_Songs%2C_S.480_%28Liszt%2C_Franz%29>. **Decisione:** `related_distinct_predicate` (non esecutiva).
19. **audit21-mozart-clementi-gara-vienna-1781** — Il confronto pianistico di Mozart e Clementi il 24 dicembre 1781 è lo stesso evento; non generalizzare in rivalità stilistica. Fonte(i) legacy: <https://internet.beethoven.de/pdf-sonderausstellung/Wo-man-Ihre-Composition-allen-andern-vorzieht-Brief-Guide.pdf>. **Decisione:** `identical_specific_relation` (non esecutiva).
20. **audit26-clara-brahms-influenza-critica** — Il giudizio critico di Clara sulle composizioni di Brahms non coincide con esecuzione e promozione pubblica: mantenere due predicati verificabili. Fonte(i) legacy: <https://blogs.loc.gov/nls-music-notes/2015/04/remembering-the-ladies/>. **Decisione:** `related_distinct_predicate` (non esecutiva).

## Primi 20 gruppi legacy↔legacy

- **01 — `legacy:scuola-fiamminga|pers:ockeghem`**: base `appartenenza-storica` / specialist `maestro-di-tradizione`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **02 — `legacy:scuola-fiamminga|pers:jacob-obrecht`**: base `appartenenza-storica` / specialist `contrappunto-e-messa`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **03 — `legacy:scuola-fiamminga|pers:gilles-binchois`**: base `appartenenza-storica` / specialist `tradizione-borgognona`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **04 — `legacy:scuola-fiamminga|pers:heinrich-isaac`**: base `appartenenza-storica` / specialist `diffusione-internazionale`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **05 — `legacy:scuola-fiamminga|pers:jacob-clemens-non-papa`**: base `appartenenza-storica` / specialist `polifonia-neerlandese`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **06 — `legacy:scuola-romana|pers:giovanni-animuccia`**: base `appartenenza-storica` / specialist `tradizione-liturgica`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **07 — `legacy:scuola-romana|pers:giovanni-maria-nanino`**: base `appartenenza-storica` / specialist `erede-e-didatta`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **08 — `legacy:scuola-romana|pers:felice-anerio`**: base `appartenenza-storica` / specialist `erede-palestriniano`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **09 — `legacy:scuola-romana|pers:giovanni-francesco-anerio`**: base `appartenenza-storica` / specialist `tradizione-e-rinnovamento`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **10 — `legacy:scuola-romana|pers:francesco-soriano`**: base `appartenenza-storica` / specialist `trasmissione-didattica`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **11 — `legacy:scuola-romana|pers:costanzo-festa`**: base `appartenenza-storica` / specialist `precedente-stilistico`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **12 — `legacy:scuola-romana|pers:gregorio-allegri`**: base `eredita-stilistica` / specialist `erede-cappella-romana`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **13 — `legacy:scuola-veneziana|pers:claudio-merulo`**: base `appartenenza-storica` / specialist `organista-e-innovatore`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **14 — `legacy:scuola-veneziana|pers:giovanni-croce`**: base `appartenenza-storica` / specialist `maestro-di-cappella`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **15 — `legacy:scuola-veneziana|pers:gioseffo-zarlino`**: base `attivita-e-insegnamento` / specialist `teorico-e-maestro-di-cappella`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **16 — `legacy:scuola-luterana|pers:johann-walter`**: base `appartenenza-storica` / specialist `corale-della-riforma`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **17 — `legacy:scuola-luterana|pers:michael-praetorius`**: base `appartenenza-storica` / specialist `polifonia-del-corale`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **18 — `legacy:scuola-luterana|pers:johann-hermann-schein`**: base `appartenenza-storica` / specialist `sintesi-tedesco-italiana`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **19 — `legacy:scuola-luterana|pers:samuel-scheidt`**: base `appartenenza-storica` / specialist `tastiere-e-corale`. Triage strutturale: non duplicati per semplice co-occorrenza.
- **20 — `legacy:scuola-romana|pers:palestrina`**: base `appartenenza-storica` / specialist `centro-della-tradizione`. Triage strutturale: non duplicati per semplice co-occorrenza.

## Caso-sentinella di direzionalità

- **Messiaen → Boulez** (insegnamento, dal 1944) e **Boulez → Messiaen** (commissione di *Oiseaux exotiques*, 1955–56) sono fatti distinti: inverso verso, diversa causa e diverso tempo. La scheda IRCAM dell'opera menziona espressamente la commissione da Pierre Boulez: <https://brahms.ircam.fr/fr/work/oiseaux-exotiques>.
- **Tallis–Byrd**: il privilegio congiunto di stampa del 1575 non basta a provare formazione diretta; la voce legacy `lotto05-tallis-byrd` resta sospesa in attesa di autorità riferita proprio all'insegnamento.
- **Alessandro–Domenico Scarlatti**: distinguere il ruolo paterno e l'orientamento professionale da singole lezioni direttamente documentate; l'arco legacy resta sospeso nella sua formulazione letterale.
- **Le sovrapposizioni apparentemente identiche** preservano la duplicazione documentaria, le formulazioni e i versi originali. Soltanto una successiva riconciliazione verificata potrà decidere l'eventuale rappresentazione condivisa.

## Criteri e controlli

Il registro JSON associato conserva per tutti i 20 record ID origine, estremi originali e normalizzati, `forward`, `reverse`, nota, fonti, stato legacy, ID e descrizione dell'arco Atlantis, esito e gate. Lo stesso registro conserva per i primi 20 gruppi legacy↔legacy tutte le singole registrazioni di collisione. **12 coincide** significa *lo stesso fatto sotto una faccetta definita*, NON uguale formulazione, uguale fonte, prova indipendente definitiva o autorizzazione a sopprimere l'altra scheda.

**Stato effettivo del lavoro:** 20/20 coppie legacy–Atlantis triagiate e 20/250 gruppi legacy–legacy analizzati strutturalmente; restano 230 gruppi. Le 3.856 relazioni legacy, le 1.718 Atlantis e i 210 lotti storici non sono stati modificati. Il sistema di tooltip `relationSentence` con override non è ancora portato né collaudato, come non lo è la UI Android tap / desktop hover. I test precedenti Mozart–Leopold (8/8 su dati) non equivalgono a collaudo globale.

## Prossimo Lotto 02

Esaminare i gruppi legacy↔legacy **21–40**, distinguendo appartenenza, ruolo, trasferimento tecnico e trasmissione storica; poi affrontare le collisioni persona↔persona più delicate. Avviare adapter isolato e test di equivalenza testuale `relationSentence` dopo aver ricostruito integralmente l'ordine delle tre ridefinizioni: testo nelle due prospettive, note, fonti e gestione touch. Non modificare nessuna risorsa pubblica prima di certificazione.
