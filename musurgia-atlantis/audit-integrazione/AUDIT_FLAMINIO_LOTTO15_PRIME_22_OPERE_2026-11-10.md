# Musurgia Atlantis — Lotto 15: prime 22 composizioni individuali Flaminio

**Data:** 10 novembre 2026 · **Branch:** main · **Destinazione:** sola area `audit-integrazione/`, nessuna mutazione del grafo pubblico.

## Metodo e corpus
La sorgente utente `compositori_flaminio.xlsx` è stata letta nelle colonne A–H (Compositore, Genere/Forma, Opus/Numero, Anno, Brano, Parte, Dettagli, Link spiegazione). La scansione in streaming ha attraversato **52.150** righe di dati e 149 compositori di origine. Per questo lotto sono state selezionate **23 righe** che si riferiscono a **22 candidate identità di opera individuale**, con fonte di riga e scheda Flaminio quando disponibile. È un **campione controllato**, non la classificazione dell'intero catalogo.

## Opere e famiglie presenti nel campione
- Johann Sebastian Bach: **sei Concerti brandeburghesi** BWV 1046–1051, uno per lavoro, righe 3081–3086; già disponibili come staging in Checkpoint27. Raccolta Atlantis: `opera:bach-sei-concerti-brandeburghesi-1721`. Evitare la creazione di un duplicato della raccolta o il raggruppamento dei sei in un'unica opera.
- Samuel Barber: concerto per pianoforte (riga 4181) e violino (4182), denominazione Flaminio originale sotto «Musica per strumento solista e orchestra». Il nome della sezione **non** dimostra di per sé «Concerto»; qui il lemma deriva dai titoli individuali.
- Béla Bartók: due concerti per violino (righe 4298–4299), cataloghi Flaminio 48a e 117, senza dedurne automaticamente versioni o identità da cataloghi di altri sistemi.
- Beethoven: Concerto per violino op. 61 (riga 4853); `Missa solemnis` op. 123 (4919).
- Mozart: concerti per violino K 207, K 211, K 216, K 218, K 219 (righe 34764–34768), il cosiddetto n. 7 K 271i/K 271a (riga 34769) da porre in **HOLD attributivo**, Messa K 427 (riga 34912), `Die Zauberflöte` K 620 (35266), `Don Giovanni` K 527 (35267–35268) e `Le nozze di Figaro` K 492 (35279).

## Deduplicazione effettiva
- Le due righe 35267/35268 portano entrambe **Mozart K 527, Don Giovanni**, ma la prima punta a una scheda Flaminio dell'**ouverture**, la seconda reca «opera» nella colonna Parte e punta alla scheda generale. **Una sola opera K 527**; l'ouverture può richiedere un nodo `parte_di`, da verificare, e non va contabilizzata come un duplicato dell'opera.
- Corrispondenze **candidate con identificativi già presenti nella fotografia Atlantis 754 nodi**:
  - `Mozart K 527` → `opera:Don-giovanni`
  - `Mozart K 492` → `opera:figaro`
  - `Beethoven op. 123` → `opera:beethoven-missa-solemnis-op123`
- I sei Concerti brandeburghesi **non** compaiono come opere individuali identificabili per titolo nel grafo campionato; è presente invece il nodo della raccolta, denominato pubblicamente «Six concerts avec plusieurs instruments (Bach, dedica 1721)».
- In assenza di una corrispondenza testuale nell'indice attuale, **non certificare assenza assoluta** né creare il nodo senza un ulteriore controllo di alias e metadati.

## Collegamenti di classificazione previsti, NON ancora pubblicati
- Opera individuale → **Concerto**, **Messa** oppure **Opera** in base al titolo e al catalogo di ciascun brano, non in base alla categoria editoriale collettiva.
- Sottogeneri per gli esempi teatrali: Don Giovanni → **Dramma giocoso**; Die Zauberflöte → **Singspiel**; Le nozze di Figaro → **Opera buffa**. Questi rapporti sono candidati da confrontare con la documentazione storica e con gli ID tassonomici prima del merge, **non archi certificati in questo lotto**.
- `Mozart K 271i`: possibile controversia attributiva, quindi nessun arco `Mozart ha_composto` con stato certificato.
- Almeno tre faccette ulteriori distinte: organico, appartenenza alla raccolta e documentazione/scheda; date riportate come nel catalogo, non uniformate indiscriminatamente.

## Artefatti
- `STAGING_FLAMINIO_LOTTO15_22_OPERE_2026-11-10.json`: **22 identità candidate** con le 23 righe sorgente, il genere canonico candidato, eventuale ID Atlantis, raccolta, e gate.
- `ATLANTIS_FLAMINIO_LOTTO15_OPERE_CAMPIONE.json`, `.csv`: consegnati come artefatti della conversazione, conservano anche titoli originali completi, intestazioni, anni, URL e fonti in forma più dettagliata, **non ancora caricati nel repository**.

## Prossima fase
Espandere il controllo per blocchi di composizioni individuali non già trattate, deduplicando compositore+numero di catalogo+titolo+versione, segnalando senza rimuoverle righe di movimenti, arie, trascrizioni e attribuzioni dubbie. Analizzare separatamente le schede delle singole opere (non solo le intestazioni), associare forme multiple con fonti e affidabilità, e testare la pertinenza radicata senza che un genere colleghi tutti i compositori tra loro. Poi preview reversibile; **nessun merge di produzione senza certificazione**.

L'audit storico Checkpoint24 resta separato a **74/233** archi, prossimi 50; 210 lotti storici tutelati. Grafo pubblico, atlante legacy e UI invariati.
