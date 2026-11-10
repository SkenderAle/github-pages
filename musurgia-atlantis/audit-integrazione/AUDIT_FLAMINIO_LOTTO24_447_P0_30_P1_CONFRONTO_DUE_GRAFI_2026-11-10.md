# Musurgia Atlantis — Lotto 24: audit integrale dei 447 P0 e crosswalk dei 30 P1 sui grafi reali

**Data:** 10 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Stato:** registri e audit soltanto, **produzione invariata**.

## Perimetro effettivamente lavorato

Il Lotto 24 NON è un altro campione di 30–50 voci: comprende **tutti i 447 gruppi P0** ancora bloccati dal Lotto 22, con **997 righe sorgente Flaminio originali**, più **30/30 gruppi P1** del Lotto 23 confrontati direttamente con entrambi i grafi JSON (Atlantis: **754 nodi / 1.718 archi**; Atlante 3D originale: **869 nodi / 2.437 archi**). Dati del corpus e fonti preservati. Nessuna creazione/fusione pubblica.

## Primo risultato: chiave catalografica contestuale

Il numero isolato non identifica un'opera. Per ciascuno dei 447 gruppi sono state costruite partizioni per `compositore_originale + rubrica_Flaminio_originale + numero_originale` (case-preserving). Queste chiavi servono a **distinguere le righe sorgente**, NON a certificare identità storiche delle composizioni.

| Misura | Risultato |
|---|---:|
| Gruppi P0 esaminati | **447/447** |
| Righe originali conservate | **997/997** |
| Rubriche/partizioni sorgente | **902** |
| Gruppi senza ripetizioni del numero entro la stessa rubrica | **435** |
| Gruppi ancora con ripetizioni anche nella stessa rubrica | **12** |
| Partizioni con più righe e stesso numero | **17** |
| Righe coinvolte nelle 17 partizioni ancora ripetute | **112** |
| Singole partizioni da una riga | **885** |
| URL Flaminio originali conservati nel gruppo P0 | **180** |

**Interpretazione:** la distinzione per rubrica scioglie **435 collisioni strutturali**, ma ciò non equivale a convalidare 435 opere né ad autorizzare 435 importazioni. Occorre sempre l'unità compositiva con autore, numero e *namespace*, titolo specifico, identificazione di raccolta/movimento/versione, provenienza e riscontri. Le 17 partizioni con stessa rubrica e stesso numero restano sospese.

### Distribuzione delle collisioni P0

- **419** gruppi: `NUMERO_BREVE_RIUSATO_IN_SEZIONI_DIVERSE`.
- **25** gruppi: `NUMERO_CONDIVISO_TRA_RUBRICHE`.
- **3** gruppi: `SEGNAPOSTO_NON_IDENTIFICANTE` (`s. n.`, `s.n.`, `-`).

Concentrazione: **212** gruppi in Bach, **132** in Vivaldi, **29** in Schönberg, **25** in Monteverdi, **21** in Leonardo Leo. Bach+Vivaldi = **344/447** gruppi: numeri localmente ricorrenti in rubriche differenti, non 344 opere duplicate accertate.

## I dodici P0 ancora ambigui dopo la rubrica

| Autore | Numero sorgente | Ripetizioni entro rubrica |
|---|---|---|
| CASTELNUOVO-TEDESCO, Mario | `s. n.` | 23 in Liriche per voce e pianoforte; 13 in Musica corale; 5 in Musica da camera; 16 in Musica per pianoforte; 3 in Musica per voce e orchestra |
| MONTEVERDI, Claudio | `1` | 8 in Contrafacta spirituali a stampa di composizioni profane |
| CASELLA, Alfredo | `s.n.` | 2 in Composizioni per canto e pianoforte; 4 in Pianoforte solo |
| SGAMBATI, Giovanni | `-` | 7 in Trascrizioni di opere da altri compositori |
| MONTEVERDI, Claudio | `2` | 6 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `3` | 6 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `4` | 4 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `5` | 4 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `6` | 3 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `7` | 3 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `8` | 3 in Contrafacta spirituali a stampa di composizioni profane |
| MONTEVERDI, Claudio | `9` | 2 in Contrafacta spirituali a stampa di composizioni profane |

**Monteverdi (n. 1–9):** la rubrica *Contrafacta spirituali a stampa di composizioni profane* comprende più titoli per lo stesso numero locale; non postulare che siano la stessa opera. Eventuali relazioni di contrafactum con la versione profana richiedono prova testuale/stampa e devono essere tipizzate. **Castelnuovo-Tedesco, Casella e Sgambati:** numeri segnaposto non identificanti, anche entro una medesima rubrica; gli altri elementi catalografici devono sostenere l'eventuale identificazione.

## Secondo risultato: crosswalk dei trenta P1 con due dataset reali

Gli ID pubblici sono stati letti **direttamente**, non ricostruiti dai nomi delle opere. Il controllo ha utilizzato:
- `musurgia-atlantis/grafo.json` blob `4863b3fe263154387de3388c0b813b5f94546f12` (**754 nodi, 1.718 archi**).
- `atlante3d/database/grafo.json` blob `57c65e209628b0fe43d0d5040bd27deb7e1624c8` (**869 nodi, 2.437 archi**).

Su **30 gruppi P1 / 20 denominazioni d'autore**, **28** gruppi hanno un candidato persona presente in Atlantis, **29** un candidato persona nel grafo originale. A livello di autori distinti: in Atlantis mancano ancora fra questi candidati Giovanni Bononcini e Luigi Cherubini; nell'Atlante originale manca Giovanni Bononcini. Sono stati risolti come candidati di identità nominale (non ancora merge) quattro alias/varianti dei nomi sorgente: **Franz Joseph/Joseph Haydn**, **Amedeus/Amadeus Mozart**, **Mendelssohn-Bartoldy/Felix Mendelssohn** e **Prokofiev/Prokof'ev**.

### Tre gruppi già rappresentati esplicitamente da quattro nodi d'opera

1. **Mozart — `Don Giovanni` K 527, righe Flaminio 35267/35268.** Esiste `opera:Don-giovanni`, autore `pers:mozart`; arco `E0736` `compone_la_musica_di` convalidato e arco `L02-A06` `opera:Don-giovanni` → `senso:dramma-giocoso` `e_designato_come`, con flag `historical_verified_independently=true`. **Non creare duplicati d'opera o di genere**; se la GUI non mostra il rapporto, collaudare filtro di pertinenza e rendering dell'arco. La scheda ouverture va riferita come documentazione della parte, non come altra opera completa.
2. **Beethoven — `Fidelio` op. 72, righe 4915/4916.** Esistono `opera:fidelio` e `opera:fidelio-ouverture-1814`; nel grafo anche tre versioni sceniche `opera:fidelio-1805`, `opera:fidelio-1806`, `opera:fidelio-1814`. Archi `E0748` e `L03-A11/A12/A13/A17` attestati; distinguere rappresentazioni, redazioni e ouverture.
3. **Beethoven — `Egmont` op. 84, righe 4906/4907.** Esiste `opera:egmont-op84` con `L03-A28` (Beethoven→musiche di scena), `L03-A29` (classificazione musica di scena); manca qui una corrispondenza esplicitamente convalidata a un nodo individuale dell'ouverture. Mantenere la guida dell'ouverture come parte/documento da risolvere, senza trasformare Egmont in opera lirica.

**Il crosswalk registra 9 archi storicamente verificati già presenti** fra questi quattro nodi e il loro contesto. Per **27/30 gruppi P1** non è stata autorizzata una corrispondenza diretta a un nodo d'opera: **ciò non dimostra che l'opera sia assente**, perché nomi alternativi, versioni e dati non ancora federati possono celare un match. Nessun automatismo di creazione.

## Dati analitici pubblicati — tutti su `main` dentro `audit-integrazione/`

- `STAGING_FLAMINIO_LOTTO24_P0_1_200_2026-11-10.json`: prime **200** collisioni con tutte le righe e rubriche.
- `STAGING_FLAMINIO_LOTTO24_P0_201_400_2026-11-10.json`: successive **200**.
- `STAGING_FLAMINIO_LOTTO24_P0_401_447_2026-11-10.json`: ultime **47**.
- `INDICE_FLAMINIO_LOTTO24_P0_447_GRUPPI_997_RIGHE_2026-11-10.json`: indice generale verificabile con 447 ID, righe, metriche e 12 HOLD.
- `CROSSWALK_FLAMINIO_LOTTO24_P1_30_VS_DUE_GRAFI_2026-11-10.json`: 30 riscontri P1, 20 autori, candidati persona, esatti ID opera, archi/flag e gate.

## Prossimo avanzamento, per blocchi grandi

**Lotto 25:** partire dalle **885 partizioni univoche come righe sorgente** e cercare identità d'opera per catalogo/parti, non interpretarle come 885 opere. Parallelamente documentare i **12 P0 rimasti con numeri ripetuti nella stessa rubrica** e consolidare i **30 P1** nel crosswalk opere→generi/forme, evitando i link URL erronei segnalati nel Lotto23. È possibile suddividere il lavoro in **blocchi da 200–500 record** e conservare tutti gli originali, senza campioni casuali che restino irrisolti.

**Vincoli irrinunciabili:** tutti i 210 lotti storici intatti; nessuna modifica a `musurgia-atlantis/grafo.json`, `atlante3d/` o GUI pubblica prima dei test; capitoli editoriali non attraversabili; pertinenza radicata I–V; `work_id`, `document_id`, `version_id` e `collection_id` distinti; no `casefold` per identità d'opera; genere e forma al singolare con multiappartenenza documentata.
