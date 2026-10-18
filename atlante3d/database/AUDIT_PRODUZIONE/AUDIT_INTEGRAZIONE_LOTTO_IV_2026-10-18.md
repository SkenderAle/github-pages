# MUSURGIA MUNDI — Audit integrato IV · residui dei cataloghi e ponti jazz / musical
**Data:** 18 ottobre 2026 · **Branch:** main · **Base:** 4fd19247166b13844254e50f893d6459e1fb322d

## Criterio
Incrociati gli autori strutturati di `concerti/`, `musica-da-camera/`, `dalla-sinfonia-alla-rapsodia/` e `parola-e-canto/` con i nodi già censiti. Distinte omonimie e abbreviazioni (Bach, Boieldieu, Leclair). Per le narrazioni ispezionati i paragrafi di `post-romanticismo/` e `dal-musical-al-film/`.

## Audit di copertura
Ingresso di **7 persone**, di cui **5 compositori** e **2 interpreti blues di tipo persona**: François-Adrien Boieldieu, Leroy Anderson, Ma Rainey, Bessie Smith, Louis Armstrong, Mary Lou Williams e Jeanine Tesori. Le due cantanti non sono riclassificate come compositrici sulla sola base della presenza nel capitolo. Tutti i nuovi ingressi ricevono un collegamento a un contesto storico e a un contesto geografico indicativo, non una geolocalizzazione biografica puntuale.

Aggiornati inoltre gli alias catalografici di **Carl Philipp Emanuel Bach** (C. P. E. Bach), **Johann Sebastian Bach** (J. S. Bach) e **Jean-Marie Leclair** (J.-M. Leclair) senza duplicare nodi.

Nuovo stato atteso: **382 compositori**, **91 persone**, **785 nodi**, **1081 archi generali**. Il numero di relazioni documentate passa da **1.310 a 1.319**.

## Audit degli archi
Aggiunte **9 relazioni**: Ma Rainey e Bessie Smith (rapporto artistico, non insegnamento certificato); Bessie Smith e Louis Armstrong (registrazione del 1925); Mary Lou Williams e l'orchestra di Duke Ellington (arrangiamento del 1946); quattro associazioni al contesto della musica afroamericana del Novecento; Jeanine Tesori al musical di Broadway; Boieldieu alla tradizione operistica francese. Ogni relazione include versi `forward`/`reverse`, nota e URL della fonte. Nessun nesso diretto è stato desunto dalla sola contemporaneità.

**Fonti principali:** NMAAHC/Smithsonian per il blues; Smithsonian Music per Mary Lou Williams; materiali didattici discografici Smithsonian per Armstrong e Bessie Smith; English National Opera per Tesori; Treccani per Boieldieu. Leroy Anderson ha il proprio archivio ufficiale e nessun rapporto personale inventato.

## Connessioni sito ⇄ grafo
Aggiornati `indice-autori.json`, `collegamenti-sito.json` e `consultazione.json`. Collegamenti con link diretti nel paragrafo jazz (`post-romanticismo/#blues-jazz`) e nel paragrafo Broadway (`dal-musical-al-film/#musical`), senza modificare le altre pagine né i lettori.
Per Boieldieu puntamento all'introduzione sull'arpa in `concerti/#percorso-altri-strumenti`; per Anderson alla scheda documentaria `concerti/#intro-anderson-typewriter` (non simulare registrazioni).
La consultazione specifica privilegia link di fonte realmente identificati; Grove rimane un portale potenzialmente ad abbonamento e la Garzantina un riferimento bibliografico.

## Controlli e residui
Verificare ID univoci, integrità di ogni arco, formato delle lenti, riconciliazione dell'indice e delle URL interne, ed eventuale comparsa di marcatori duplicati nel testo. Non dichiarare un collaudo desktop/mobile senza un browser effettivo.

**Resta aperto** il censimento del corpo testuale complessivo, degli interpreti citati nelle audioteche, dei lessici non biografici e dei collegamenti a singole opere; l'audit è estensivo ma non concluso.
