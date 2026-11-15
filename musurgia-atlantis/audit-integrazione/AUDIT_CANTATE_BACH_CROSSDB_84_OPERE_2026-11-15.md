# Musurgia Mundi–Atlantis–Flaminio — cantate di J. S. Bach
**15 novembre 2026 · Lotto 1 · STAGING / IN_REVIEW · produzione invariata**

## Risultato del primo passaggio operativo
Dalle schede già pubblicate nei lotti 45–51 e dal censimento dei record effettivamente caricati nel database federato sono state identificate **84 composizioni** con una classificazione preesistente e non sospesa come cantata:
- **80 cantate sacre**
- **4 cantate profane**

Sono state aggiunte **83 relazioni genere → opera** al crosswalk operativo; l'84ª relazione (Cantata sacra → BWV 120) era già stata introdotta nel passaggio precedente e non è stata duplicata. Totale attuale di relazioni semantiche curate del crosswalk: **119**. Il builder è stato aggiornato coerentemente.

## Gerarchia
- Cantata (genere principale; identità di navigazione Mundi `genere-cantata` e Atlantis `senso:cantata` già collegata mediante crosswalk)
- Cantata sacra (sottogenere)
- Cantata profana (sottogenere)
- Singole composizioni collegate attraverso `opera_appartiene_al_sottogenere_cantata`; paternità di Bach mantenuta separata

Ogni cantata rimane **UNA composizione** anche se in più movimenti. Le redazioni e le versioni delle cantate non si sommano alle composizioni: le tre redazioni BWV 82 sono versioni, non tre nuove cantate. Le coppie di BWV intero/suffisso non vanno fuse sulla sola somiglianza di titolo.

## Fonte e gate
Le classificazioni provengono da `LOTTO45_25_SCHEDE_CANTATE_BACH_2026-11-11.json` e successivi `LOTTO46`–`LOTTO51`, esclusivamente quando il relativo ID esiste nel `CENSIMENTO_TASSONOMICO_TUTTI_RECORD_2026-11-15.jsonl`. Conservo nelle 83 nuove relazioni: identificativo del lotto, motivazione, fonti web già registrate, stato reversibile.

Le altre voci dei sette lotti non sono state promosse come nuove opere solo perché presenti negli inventari: molte non compaiono nella vista federata corrente. Gli **status HOLD**, le attribuzioni spurie o discusse e i brani differenti dalla cantata (per es. BWV 11 come Oratorio dell'Ascensione e BWV 118 come mottetto) sono rimasti esclusi da questo aggiornamento.

Attenzione: un'opera sacra può essere destinata a una **cerimonia civico-religiosa**: BWV 120 è classificata come cantata sacra, con destinazione Ratswahl, senza attribuirla automaticamente a una normale domenica liturgica. Il criterio generale sacro/profano non assorbe altre sottocategorie (cantata corale, cantata solistica, occasionale), che sono classificazioni trasversali e richiedono audit specifico.

## Verifiche eseguite e non eseguite
- **Eseguito:** identificativi univoci delle 119 relazioni curate; nessuna duplicazione di tripla fonte-destinazione-predicato; sintassi JS del builder; adeguamento del gate numerico.
- **Da verificare:** caricamento integrale e visualizzazione browser del grafo unificato, corrispondenza reale degli archi di staging preesistenti (possibile ridondanza grafica), presenza e leggibilità dell'intera catena Bach → Cantata → Sacra/Profana → singola BWV per tutti gli 84 record; completezza delle altre cantate dei lotti 45–51; audit delle BWV 201–250 e dei casi critici.

**Nessun Lotto 2 Flaminio importato. Nessun grafo pubblico modificato.**
