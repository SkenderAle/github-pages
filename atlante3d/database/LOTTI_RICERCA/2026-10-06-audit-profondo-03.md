# Musurgia Mundi · Seconda fase · Audit approfondito 03 · 6 ottobre 2026

Audit incrementale dei compositori senza collegamenti nella lente «Storia musicale e scuole». Lettura del branch main: 430 nodi, 906 archi storici generali, 578 relazioni specialistiche prima dell'intervento.

## Rapporti inseriti

- **audit3-martini-bologna** (scuole): Padre Martini, maestro di cappella a San Francesco e autore dell'Esemplare ossia Saggio fondamentale di contrappunto (1774–1775), è esplicitamente descritto da Treccani come uno dei principali rappresentanti della scuola bolognese, caratterizzata da contrappunto, rigore formale ed eclettismo. Fonti: [documento](https://www.treccani.it/enciclopedia/giambattista-martini/).
- **audit3-ponchielli-opera-italiana** (scuole): La Gioconda (1876) e la successiva produzione scaligera collocano Ponchielli nella storia del melodramma italiano ottocentesco; i tratti spettacolari del grand opéra francese furono rielaborati entro il contesto operistico italiano. Il rapporto indica pratica compositiva, non appartenenza a un'associazione formale. Fonti: [documento](https://www.treccani.it/enciclopedia/amilcare-giuseppe-ponchielli_%28Dizionario-Biografico%29/).
- **audit3-halevy-conservatoire** (scuole): Halévy studiò composizione con Cherubini al Conservatorio di Parigi e vi insegnò armonia dal 1827, in seguito contrappunto e composizione. La connessione identifica un ruolo formativo istituzionale accertato, non una presunta appartenenza estetica univoca. Fonti: [documento](https://www.treccani.it/enciclopedia/jacques-fromental-elie-halevy_%28Enciclopedia-Italiana%29/), [documento](https://catalogue.bnf.fr/ark:/12148/cb12463116r).
- **audit3-grandopera-halevy** (genealogie): La Juive (1835) di Halévy è una delle opere emblematiche del grand opéra francese, genere di grande dimensione spettacolare e impiego esteso di orchestra, cori e balletto; Treccani annovera Halévy fra i maggiori esponenti. Fonti: [documento](https://www.treccani.it/enciclopedia/grand-opera/), [documento](https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/).

## Distinzioni e sospensioni

- Francesco Durante: Treccani ne attesta il ruolo centrale nella **scuola napoletana del partimento**, ma l'unico nodo napoletano preesistente riguarda specificamente la **scuola operistica napoletana**. Non è stato forzato un arco improprio: per catalogare la tradizione didattica del partimento occorre un nodo autonomo e un'analisi dedicata.
- Martini: scuola contrappuntistica, non semplice cittadinanza bolognese.
- Ponchielli: tradizione teatrale verificata, non adesione formale a un sodalizio.
- Halévy: ruolo istituzionale al Conservatoire distinto dalla genealogia del genere grand opéra. Le fonti danno cronologie parzialmente diverse per la cattedra di composizione: l'arco non fissa un anno controverso.
- Nessuna appartenenza dedotta dalla sola origine geografica.

## Copertura incrementale

- Relazioni specialistiche: **578 → 582**.
- Collegamenti di scuola: **259 → 262**.
- Compositori senza arco di scuola: **83 → 80**.
- Compositori senza relazioni specialistiche: **0**, invariato.
- Nodi: **430**, invariato.

## Controlli

Controllo in memoria su identità dei nodi, direzione, gruppo, campi obbligatori e duplicazioni effettuato prima della scrittura. I validatori Node.js del repository e il collaudo visuale in browser **non sono stati eseguiti**, perciò non vanno dichiarati superati. La ricognizione completa degli altri 80 compositori rimane aperta.
