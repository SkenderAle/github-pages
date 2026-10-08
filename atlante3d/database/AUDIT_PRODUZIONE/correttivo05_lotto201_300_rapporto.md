# MUSURGIA MUNDI — Audit correttivo 201–300, chiusura della ricognizione documentale

**Data:** 8 ottobre 2026 · **Ramo:** `audit-produzione-correttivo-01` · Nessuna modifica a `main`.

## Esito

- **100/100 identità controllate**, **97/100 con almeno una relazione di produzione documentata** e **3 eccezioni esplicite, verificate sul piano biografico ma prive di opera originale nominativamente attestata**.
- Nuovi archi di tipo produzione: **99**, tutti con stato, nota e URL; non si dichiarano esaustivi i repertori individuali.
- Complessivo del grafo in questo checkpoint: **753 nodi**, **1321 archi**, dei quali **358 di produzione**.
- `relazioni.json` non toccato: le genealogie e l'insegnamento già verificati restano consultabili nel loro archivio specialistico.

## Eccezioni che NON devono essere mascherate

### 256 — Fritz Reiner
La Treccani registra anche musica vocale-strumentale e strumentale di Fritz Reiner, ma il controllo corrente non ha identificato una partitura autografa o un titolo originale univoco sul quale fondare l'arco produzione. Preservare gli archi documentati di direzione, didattica e attività esecutiva. Non usare gli album diretti da Reiner come opere di sua composizione.
**Stato:** `attribuzione_generale_attestata_opera_specifica_da_individuare`. Fonti e note analitiche conservate nel nodo `grafo.json`.

### 268 — Johann Christoph Bach (1671–1721)
Johann Christoph Bach (1671–1721), fratello e maestro di Johann Sebastian, è documentato come organista, didatta e copista di opere altrui. IMSLP distingue il suo ruolo 'As Copyist' da una non documentata produzione autoriale. Non attribuirgli le composizioni presenti nell'Andreas-Bach-Buch, nel Möller Manuscript o nelle copie di BWV. Valutare il passaggio del nodo a tipo persona dopo la revisione degli indici e del motore.
**Stato:** `copista_maestro_autorialita_compositiva_non_dimostrata`. Fonti e note analitiche conservate nel nodo `grafo.json`.

### 287 — Walter Klein
Walter (Walther) Klein è identificato come insegnante viennese di tecnica dodecafonica di Giacinto Scelsi nel 1935–1936, con studi nel circolo di Schönberg. Non è stata verificata una partitura singola di Klein, perciò il suo ruolo di compositore non è tradotto automaticamente in un arco produzione. La revisione specialistica dell'identità e del corpus resta aperta.
**Stato:** `docenza_documentata_catalogo_compositivo_da_reperire`. Fonti e note analitiche conservate nel nodo `grafo.json`.

## Esempi di bonifica
- Jean Bretel: chanson e jeux-partis nel repertorio medievale; la paternità melodica va separata dalla sopravvivenza del testo.
- Wojciech Żywny: composizioni proprie e Polacca in do maggiore, distinta dalla Polacca di Chopin a lui dedicata.
- Weinlig: musica sacra attestata; distinto dallo zio Christian Ehregott Weinlig.
- Hambitzer: inventario autografo della Library of Congress, non semplice maestro di Gershwin.
- Marxsen: variazioni pianistiche dedicate a Brahms; composizione distinta dal ruolo pedagogico.
- Kitzler: Trauermusik in memoria di Bruckner con paternità condivisa/da precisare.
- Leibowitz: Quartetto op. 3 documentato da manoscritto nell'archivio Schönberg.
- Sallustio: opera L'ultima rosa distinta dall'attività di docente di Scelsi.

## Esito metodologico
Una ricognizione può dirsi completata anche quando alcuni autori conservano lo stato «opera da verificare», purché le tre eccezioni siano visibili e non trasformate in false produzioni. La densificazione plurigenere e la filologia puntuale di tutti i cataloghi rimangono attività successive. Il blocco successivo è 301–331, nel quale nove autori precedenti e undici medievali sono ancora da collegare a un genere, mentre undici rinascimentali hanno già una produzione iniziale. Le categorie e le tre lenti non sono state cambiate.
