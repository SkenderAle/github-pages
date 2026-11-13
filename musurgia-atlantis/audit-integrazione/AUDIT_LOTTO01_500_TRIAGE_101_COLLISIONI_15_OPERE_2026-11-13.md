# Musurgia Atlantis — Lotto Flaminio 01/15: 500 righe triagiate, 101 blocchi di fusione e 15 opere Albinoni/Albéniz

**Data:** 13 novembre 2026 — Repository `SkenderAle/github-pages`, branch `main`. **Ambito esclusivamente staging `musurgia-atlantis/audit-integrazione/`; Lotto01 OPEN, 0/15 chiusi.**

## 1. Avanzamento e denominatori corretti

- Il sottoinsieme prioritario contiene **7.412 URL Flaminio associati ad opere**, da suddividere in 15 lotti da 500 (ultimo 412); i rimanenti 44.738 record dell'Excel totale (52.150 righe) restano in fase successiva, non cancellati.
- Il Lotto01 comprende **500 righe** sorgente, con 10 intestazioni d'autore, 64 rubriche. Le **500 righe sono ora classificate nel registro**, ma **NON equivalgono a 500 opere certificate**.
- Righe con referenze ad identità d'opera candidate **133/500**: **92** già match esatto a documenti precedenti, **15** con overlay critico, **12** Beethoven, **15** nuove Albinoni/Albéniz, meno **1 sovrapposizione** (BWV53). **367** restano senza una corrispondenza rigorosa agli ID d'opera nello staging corrente.
- Le 17 schede d'audit delle attribuzioni non sono nuove composizioni: **150/500** righe hanno almeno evidenza d'identità candidata o scheda documentaria di attribuzione; **350/500** non hanno ancora neppure questi riscontri specifici.
- **101/500** righe presentano collisioni omografiche su un numero abbreviato nella vecchia matrice, di cui **20** non erano già abbinate al registro dei 92 match rigorosi. La loro funzione è **bloccare fusioni per omonimia numerica**, non affermare che siano opere prive di identità.

### Riepilogo per autore

| Intestazione Flaminio | Righe | Con identità candidata | Da identificare rigorosamente |
|---|---:|---:|---:|
| ALBINONI, Tomaso | 20 | 20 | 0 |
| ALBÉNIZ, Isaac | 3 | 3 | 0 |
| ALFANO, Franco | 41 | 0 | 41 |
| BACH, Carl Philipp Emanuel | 22 | 0 | 22 |
| BACH, Johann Christoph Friedrich | 1 | 0 | 1 |
| BACH, Johann Sebastian | 312 | 95 | 217 |
| BARBER, Samuel | 12 | 1 | 11 |
| BARTÓK, Béla | 43 | 2 | 41 |
| BEACH, Amy | 5 | 0 | 5 |
| BEETHOVEN, Ludwig van | 41 | 12 | 29 |

**Attenzione al conteggio:** le 20 righe Albinoni corrispondono a **16 opere**, non 20. Delle quattro doppie intestazioni con stessa URL e stesso titolo, otto righe sono già ricondotte a quattro nodi storici del primo overlay critico, senza generare copie. Le nuove 12 schede coprono tutte le altre 12 opere. Albéniz: tre righe e tre opere distinte, più un nodo di raccolta per `Chants d'Espagne` op.232.

## 2. Divieto di fusione per numero uguale

Il documento `BLOCCHI_FUSIONE_LOTTO01_101_COLLISIONI_NUMERO_2026-11-13.json` registra **101** casi in cui il vecchio registro `STAGING_FLAMINIO_LOTTO21_IDENTITA_584_GRUPPI_2026-11-10.json` usa un medesimo numero letterale per titoli **differenti in rubriche differenti**. Questi numeri non sono chiavi di identità d'opera in assenza di prefisso BWV/opus e quadro catalografico specifico. Ogni caso conserva la riga del Lotto01, il numero/titolo/rubrica/URL originali, la riga di confronto spesso esterna al Lotto01, e il vincolo `BLOCK_AUTOMATIC_MERGE_ON_SAME_PRINTED_NUMBER`.

Le 20 righe senza precedente match stretto, ora protette dal vincolo, sono: 2660, 2665, 2672, 2868, 2875, 2876, 2890, 2911, 2917, 2918, 2937, 2938, 2955, 2990, 2991, 3006, 3029, 3032, 3036, 3831.

Il caso **3831** è specifico: Excel riporta **467** mentre la guida `Bach-Preludio567.html` identifica BWV **567**, opera oggi riferita a **Johann Ludwig Krebs (Krebs-WV 401)**; non unificare per la numerazione errata alla diversa riga 467. Il vincolo anti-fusione non nega eventuali altri rapporti storici, semplicemente impedisce una *fusione per numero abbreviato*.

### Sei URL condivise nell'Excel sorgente

- **Quattro URL Albinoni**: righe **78/401, 87/345, 95/389, 98/399**. Stessa opera in due rubriche, non otto opere. Riconciliazione precedente conservata.
- **Due URL Bach errate:** **3596/3600** condividono il link `Bach-Ouverture1069.html` ma la riga 3596 è BWV1070 (guida corretta `Bach-Ouverture1070.html`, attribuzione in HOLD); **3940/3943** condividono `Bach-Sonata527.html` ma la 3943 riguarda l'Adagio BWV968, guida corretta `Bach-Adagio968.html`, autore della trascrizione ancora in HOLD. Non fonderle per uguaglianza URL.

## 3. Nuovo crosswalk: 12 opere Albinoni + 3 opere Albéniz

Le 15 guide sono state cercate/aperte e lette con la ricerca web, usando dati che possono derivare da cache del servizio; **non equivale a verifica HTTP autonoma dei 15 link nel browser reale**. Conserviamo tutti gli URL esatti originali.

| Excel | Autore | Identità d'opera | Tipologia | Vincolo |
|---:|---|---|---|---|
| 152 | Albinoni | Bel fantasma tu fosti | cantata profana | Guida specifica |
| 153 | Albinoni | Bella perché tu fosti | cantata profana | Guida specifica |
| 161 | Albinoni | Dove sei che fai cor mio | cantata profana | Guida specifica |
| 170 | Albinoni | Io che per colpa sol del fato rio | cantata profana | Guida specifica |
| 228 | Albinoni | Sinfonia in sol minore, op. 2 n. 11 | sinfonia per archi | Guida specifica |
| 238 | Albinoni | Sinfonia in la maggiore, op. 2 n. 5 | sinfonia per archi | Guida specifica |
| 267 | Albinoni | Concerto a cinque in si bemolle maggiore, op. 5 n. 1 | concerto a cinque archi | Non presumere solista |
| 300 | Albinoni | Concerto in do maggiore per due oboi, op. 9 n. 9 | concerto doppio per due oboi | Guida specifica |
| 352 | Albinoni | Diomede punito da Alcide | opera dramma per musica partitura perduta | Musica perduta; libretto |
| 369 | Albinoni | Il prodigio dell’innocenza | opera dramma per musica partitura perduta | Musica perduta; libretto |
| 372 | Albinoni | Il trionfo di Armida | opera dramma per musica partitura perduta | Musica perduta; libretto |
| 381 | Albinoni | Laodice | opera dramma per musica partitura perduta | Musica perduta; libretto |
| 409 | Albéniz | Henry Clifford | opera in tre atti | Guida specifica |
| 436 | Albéniz | Córdoba | pezzo per pianoforte numero di raccolta | N. 4 di Chants d'Espagne |
| 468 | Albéniz | Navarra | pezzo per pianoforte completamento postumo | Completata da Sévérac |

### Decisioni filologiche

- **Cantate di Albinoni** (152,153,161,170): mantengono separati il credito musicale ad Albinoni e l'eventuale **anonimato del poeta/librettista**. In particolare, per `Dove sei che fai cor mio` Flaminio segnala il **testo di autore ignoto**, non la musica di compositore ignoto.
- **Op. 2 n. 5 e 11** (228,238) sono due sinfonie singole della stessa raccolta, non copie della raccolta. **Op. 5 n. 1** (267) si descrive come *Concerto a cinque* per archi e continuo: la rubrica letterale della fonte suggerisce `concerto per uno strumento solista`, ma la guida indica 3 violini, 2 viole, violoncello e continuo **senza designare un violino solista**. Vietata la classificazione automatica come concerto solistico. **Op. 9 n. 9** (300) è concerto per **due oboi solisti**, richiede specializzazione di sottogenere una volta riconciliato l'albero globale.
- **Drammi Albinoni** (352,369,372,381): le fonti attestano rispettivamente i librettisti **Aurelio Aureli, Fulgenzio Maria Gualazzi, Girolamo Colatelli e Angelo Schietti**. **Le musiche sono perdute**; il libretto sopravvissuto documenta l'identità dell'opera ma non deve abilitare falsi link di partitura, ascolto o video della musica perduta. In `Il trionfo di Armida`, Tasso è la fonte letteraria del soggetto, non il librettista operistico.
- **Henry Clifford** (409) è opera teatrale di Albéniz su libretto di **Francis Burdett Money-Coutts**: separazione dei ruoli musicista/poeta, edizione 1895. Fonti indipendenti IMSLP e Centro Virtual Cervantes oltre Flaminio.
- **Córdoba** (436): l'Excel ha **numero vuoto**; la guida identifica **Op. 232 n. 4**, appartenente alla raccolta **Chants d'Espagne**. Nuovo nodo di raccolta con un solo membro qui documentato, non importare i quattro restanti per inferenza.
- **Navarra** (468): opera per pianoforte lasciata incompiuta da Albéniz nel 1908; la versione postuma del 1912 è **completata da Déodat de Sévérac**, come attestano l'archivio SGAE, la Sibley Music Library, IMSLP e lo studio Indiana University Press. Una vecchia nota riprodotta da Flaminio menziona anche Granados: è una divergenza redazionale da non convertire in credito di completamento per questa edizione. **Granados** completò invece *Azulejos*, opera distinta.

### Fonti fondamentali

- Indice Flaminio delle 16 guide Albinoni: https://www.flaminioonline.it/Guide/Albinoni-Guide.html
- Concerto Albinoni op.5 n.1: https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Concerto5-1.html
- Opera Albinoni con partitura perduta: https://www.flaminioonline.it/Guide/Albinoni/Albinoni-Diomede618.html
- Albéniz Córdoba e Chants d'Espagne: https://www.flaminioonline.it/Guide/Albeniz/Albeniz-Cordoba1014.html
- Henry Clifford, partitura/catalogo: https://imslp.org/wiki/Henry_Clifford_%28Alb%C3%A9niz%2C_Isaac%29
- Navarra, scheda archivistica della versione Sévérac: https://archivo.sgae.es/heritageobject/navarra--oeuvre-posthume-terminee-par-d-de-severac--piano-seul--i-albeniz/
- Studio sulla distinzione Navarra vs Azulejos: https://publish.iupress.indiana.edu/read/a-history-of-spanish-piano-music/section/1aa92a32-391b-4d18-9b6f-31ea78bdaaa2

## 4. Materiali scritti e verifica della preview

1. `BLOCCHI_FUSIONE_LOTTO01_101_COLLISIONI_NUMERO_2026-11-13.json`: 101 blocchi (20 appena non coperti da precedenti match), commit `7b067246cdf161b33e411fda54784c051d6b3d86`.
2. `REGISTRO_RICONCILIAZIONE_500_RIGHE_LOTTO01_2026-11-13.json`: **registro 500/500 delle righe sorgente**, non 500/500 identità certificate; stato ora 133 candidate e 367 da esaminare. Primo commit `ae6089e2e789a1f175d510565b03fb5a14d2a8e7`, aggiornamento `2b4c5fffb382681b69493c95c093579add395a49`.
3. `CROSSWALK_LOTTO01_ALBINONI_12_ALBENIZ_3_2026-11-13.json`: 15 identità con fonte specifica e caveat, commit `10b2591d730544cfc9c431b049250df43f090404`.
4. `OVERLAY_LOTTO01_ALBINONI_12_ALBENIZ_3_2026-11-13.json`: **16 nuovi nodi candidati** (15 opere + la raccolta Chants d'Espagne), **5 ancore con ID riusati** (Albéniz + quattro generi), **45 archi tipizzati**, commit `7c51e4fd49c822c46405af356365ef6685a033d5`.
5. `VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_133_IDENTITA_2026-11-13.html`: preview separata dei **cinque layer** di audit (fonte 500, critico, Beethoven, 17 audit, 15 nuove opere), commit `2d6893c4cc48203ae927533957027c1a8f3d3ead`.
6. `REGRESSIONE_LOTTO01_133_IDENTITA_ALBINONI_ALBENIZ_2026-11-13.json`: **PASS_LOGICAL_STRUCTURAL_JS_PARSE_ONLY**, **649 nodi, 1.137 archi**, 0 ID duplicati, 0 archi orfani, 15/15 riga→opera e URL coerenti, filtri Albinoni=12 nuove+4 pregresse, Albéniz=3 nuove e Chants d'Espagne, Beethoven 15 precedenti intatti. Commit test `9d3d55c1b93e384c2d7dd2dbce1ff7c5fa90ccfc`, correzione mera metrica descrittiva `f18c249a58f69bcfdd3b85f8719c828ced001e84`.

**Gate NON superati:** nessun browser Canvas/WebGL/Android reale, live deployment non verificabile via apertura web; nessuna fusione o aggiornamento di `musurgia-atlantis/grafo.json` e `index.html`; deduplicazione globale non certificata, 367 righe senza ID d'opera rigoroso, audit attributivi ancora con HOLD.

## 5. Ripresa consigliata

Procedere con le **41 schede Franco Alfano**, le **22 di Carl Philipp Emanuel Bach** (dove una ha audit attribuzioni H484.1), poi Bartók/Barber/Beach, e infine i residui Bach e Beethoven per completare le 500; sempre con controllo di livello opera/raccolta/parte/versione, fonti specifiche, nomi singolari di generi e mappa radicata. Non aprire Lotto02 prima della certificazione finale e della prova grafica reale.
