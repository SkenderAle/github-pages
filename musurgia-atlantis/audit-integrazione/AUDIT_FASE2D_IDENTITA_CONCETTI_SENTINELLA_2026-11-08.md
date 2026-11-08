# Musurgia Atlantis — Fase 2D: controllo documentale delle identità e collaudo sentinella preparatorio
**Data:** 8 novembre 2026 · **Branch:** `main` · **Ambito:** esclusivamente `audit-integrazione/`. **NON sono stati modificati grafo o interfaccia pubblici.**

## 1. Verifica dei 155 abbinamenti nominali
Il registro `CONVALIDA_IDENTITA_FASE2D_155_2026-11-08.json` copre **155/155** coppie con nomi normalizzati identici e bersaglio Atlantis `category=persona`. A ogni coppia associa identità del file origine, identificativo Atlantis, ruoli, stato della vecchia verifica, fonti e una determinazione conservativa.

**21 coppie** hanno ora un riscontro biografico individuale o istituzionale consultato (la stessa persona storica indicata dal nome e dai ruoli della coppia). **134** restano da verificare prima dell'unione effettiva. Non si tratta di un controllo degli archi, né dell'equivalenza automatica dei metadati.

Le 21 persone: Ottaviano Petrucci, Giovanni Battista Pergolesi, Alessandro Scarlatti, Jean-Baptiste Lully, Giovanni Croce, Ottavio Rinuccini, Orazio Vecchi, Adriano Banchieri, Georges Méliès, Ennio Morricone, Paul Dukas, Jerome Kern, Richard Rodgers, Scott Joplin, Agnes de Mille, Goffredo Mameli, Arthur Sullivan, Victor Herbert, Hervé (Florimond Ronger), Fromental Halévy, Jacopo Corsi.

### Copertura documentale e limiti, senza duplicazioni
| Esito nel registro | Numero |
|---|---:|
| Riscontro biografico individuale consultato (nuovo audit) | **21** |
| Nessun URL citato nella sorgente | **87** |
| URL dedicati alla sola traslitterazione | **5** |
| Fonti esterne potenzialmente utili, da verificare puntualmente | **11** |
| Rinvii contestuali o indiretti, non prova sufficiente di identità | **21** |
| Rinvii soltanto a capitoli editoriali | **10** |
| **Totale** | **155** |

**Nota critica:** `verificato` nel campo `name_review.status` non è sinonimo di biografia indipendentemente certificata. Per cinque nomi russi la fonte https://roberge.mus.ulaval.ca/gdrm/01-trans.htm è una guida alle traslitterazioni: valida per le forme del nome, non per la completezza della biografia.

### Rettifiche/cautela da NON nascondere
- **Ottaviano Petrucci:** il DBI Treccani più recente documenta la morte nell'autunno **1538**, a fronte della data **1539** riportata dalla tradizione più vecchia. Fonte: https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Dizionario-Biografico%29/ ; voce precedente: https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Enciclopedia-Italiana%29/. Non sovrascrivere silenziosamente i campi; registrare la controversia.
- **Jacopo/Iacopo Corsi:** notizie cronologiche discordanti nelle voci Treccani più vecchie, morte indicata circa 1602 / forse all'inizio del 1604; fonte della forma completa: https://www.treccani.it/enciclopedia/iacopo-corsi_%28Enciclopedia-Italiana%29/ ; riassunto: https://www.treccani.it/enciclopedia/iacopo-corsi/. Richiede convalida cronologica distinta dall'identità.
- **Goffredo Mameli:** il prefisso legacy `compositore-` non muta il ruolo `persona/poeta`; `Fratelli d'Italia` ebbe musica di Michele Novaro. Fonte: https://www.treccani.it/enciclopedia/goffredo-mameli_%28L%27Unificazione%29/.
- **Adriano Banchieri:** nome monastico, battezzato Tommaso. Conservare la variante in alias e fonti, non creare due nodi: https://www.treccani.it/enciclopedia/adriano-banchieri_%28Dizionario-Biografico%29/.
- **Hervé:** pseudonimo di Louis-Auguste-Florimond Ronger; evitare duplicazione autore/pseudonimo: https://www.bruzanemediabase.com/en/exploration/artists/herve.

## 2. Quattro concetti/forme riconciliati semanticamente, senza fondere il grafo
File: `CROSSWALK_CONCETTI_FASE2D_2026-11-08.json`.

Le coppie `dramma-giocoso ↔ senso:dramma-giocoso`, `opera-buffa ↔ senso:opera-buffa`, `opera-seria ↔ senso:opera-seria` e `genere-quartetto-archi ↔ senso:quartetto` denotano, nel contesto delle due basi, rispettivamente lo stesso genere/sottogenere (quartetto **d'archi**, non qualsiasi ensemble di quattro persone). È una **riconciliazione semantica** fondata sugli schemi e sugli esempi nel corpus, non una convalida storica di ogni arco.

Nei quattro nodi ci sono **91 incidenze di arco Atlante** (5 + 25 + 12 + 49) e **18 Atlantis** (4 + 4 + 6 + 4); **13** delle 18 Atlantis sono collegamenti di capitoli editoriali, **5** hanno estremi non editoriali. Le incidenze non sono archi unici globali né costituiscono un numero da sommare ai totali dei grafi.

**Regole:** i capitoli non entrano MAI nella rete storica; opera buffa ≠ dramma giocoso; l'identità semantica di un nodo-genere NON conferisce permesso di attraversare liberamente tutti i vicini in una ricerca radicata su un compositore.

Le **7 omonimie capitolo/epoca** sono ancora `keep_distinct`, come precedentemente deciso.

## 3. Test sentinella Mozart/Leopold: mancanza reale identificata
File: `STAGING_TEST_MOZART_LEOPOLD_FASE2D_2026-11-08.json`.

Controllando l'attuale `musurgia-atlantis/grafo.json` è stato rilevato che **Leopold Mozart non esiste tra i 297 nodi `persona` di Atlantis**, mentre il record completo `compositore-leopold-mozart` esiste e si conserva nello staging delle 509 persone. Invece `pers:mozart` è presente. **Di conseguenza il collaudo nella UI pubblica su Mozart→Leopold non può ancora avere esito positivo.**

In `atlante3d/database/relazioni.json` sono presenti:
- `form-leopold-wolfgang` (maestro/allievo, testi `forward` e `reverse`, nota e fonte);
- `audit8-leopold-cappella-salisburgo` (rapporto professionale di Leopold);
- `audit09-leopold-violinschule` (trattato violinistico del 1756, con cautela di riconvalida URL).
Queste ultime due **non sono ramificazioni automatiche pertinenti a Wolfgang** soltanto perché passano per suo padre.

La Stiftung Mozarteum documenta sia il rapporto familiare sia quello pedagogico fra Leopold e Wolfgang: https://mozarteum.at/en/wolfgang-amade-mozart. Nello staging si propone quindi un nodo `pers:leopold-mozart` e **due predicati distinti** con Wolfgang: `padre-figlio` e `maestro-allievo`, ciascuno corredato di una frase discorsiva per ogni verso, fonti e provenienza. Nessuna nuova relazione è stata pubblicata.

Sono stati formalizzati **cinque test di regressione**, ancora `PENDING`: esibizione Leopold al livello I di Wolfgang; esclusione di rapporti non pertinenti al II; capitoli non attraversabili al III; rete autonoma di Leopold quando è la radice; spiegazioni hover/tap corrette nei due versi.

## 4. Quadro di avanzamento
- **509/509** persone sorgente conservate.
- **21/155** identità nominali con riscontro biografico consultato; 134 nominali ancora da controllare.
- **5** identità tramite alias già convalidate nelle Fasi 2B/2C; sommate alle 21 fanno **26** coppie supportate, non 26 unioni realmente eseguite.
- **349** record sorgente senza abbinamento già attestato con Atlantis; comprende Leopold Mozart, da importare.
- **4** concetti riconciliati semanticamente senza fusione, 7 collisioni editoriali già separate.
- **3.856** relazioni Atlante complessive, contro **1.718** di Atlantis, ancora da riconciliare senza perdita di frasi, note e fonti.
- **Nessun JSON di produzione, JS dell'interfaccia o file Atlante originale modificato.**

## 5. Ripresa successiva
1. Verificare criticamente il prossimo gruppo dei **134** abbinamenti nominali, priorità a famiglie omonime (Bach, Scarlatti, Strauss, Caccini), nomi sovrapposti e persone senza fonti.
2. Preparare in staging le **349 importazioni** prive di target, con **Leopold Mozart priorità alta** e namespace non confliggente, conservando i dati originari.
3. Riprodurre la generazione definitiva delle spiegazioni e confrontare ogni stringa bidirezionale con il JS originale, anche con i suoi override, senza convertire testo generato in prova storica.
4. Realizzare un motore di pertinenza radicata verificabile (non BFS indiscriminata), testare Mozart/Leopold e i blocchi per genere/periodo, poi solo dopo certificazione decidere il rilascio. Non attivare nessuna navigazione da capitoli nel grafo storico.

**Documento di passaggio:** `THREAD_CONTINUITA_2026-11-08.md`.