# MUSURGIA MUNDI — Chiusura della copertura minima del repertorio storico

Data: 8 ottobre 2026 · Branch: `audit-produzione-correttivo-01` · **Non pubblicato in main**.

## Risultato raggiunto
- **332 figure storiche essenziali su 332 presenti per identità**, considerando le sovrapposizioni delle epoche e gli alias già riconciliati. Questo è un traguardo di copertura anagrafica, **NON** una certificazione di esaustività storico-musicale.
- **438 nodi di tipo compositore**, **860 nodi totali** e **1.573 archi generali** nel checkpoint del grafo `2167552cc3f644e25c9fd49458c3c7310fbabf85`.
- **493 archi di tipo `produzione`** al checkpoint, con spiegazione, URL e stato registrati secondo gli audit di integrazione. L'esistenza dei campi non equivale al controllo manuale dell'accessibilità di tutti gli URL.
- Coda iniziale di cento nominativi: **100/100 individuati** e gli ulteriori 27 fuori coda anch'essi inseriti; si veda `audit_minimi_prossimi100_staging_20261008.json`.
- Il repertorio obbligatorio include anche **persone non classificabili come compositori** (es. Gregorio Magno, Guido d'Arezzo, Franco di Colonia): tipizzazione separata per evitare attribuzioni inesistenti.

## Copertura per periodo (righe sovrapposte, non sommabili)
| Periodo | Individuati | Richiesti | Assenti |
|---|---:|---:|---:|
| Medioevo | 22 | 22 | 0 |
| Rinascimento | 48 | 48 | 0 |
| Barocco | 61 | 61 | 0 |
| Classicismo | 32 | 32 | 0 |
| Romanticismo e tardo Romanticismo | 70 | 70 | 0 |
| Primo Novecento e avanguardie storiche | 51 | 51 | 0 |
| Secondo Novecento e contemporaneità | 58 | 58 | 0 |

## Ultimi macroblocchi del secondo Novecento
- **Blocco A (18 autori)**, commit `48eb5c7dd1e9db935ba3d45916a85a507c2a7694`: Henri Pousseur, Herbert Eimert, François Bayle, Éliane Radigue, Pauline Oliveros, Daphne Oram, Delia Derbyshire, Jean-Claude Risset, Barry Truax, Morton Feldman, Earle Brown, Christian Wolff, Conlon Nancarrow, Harry Partch, George Crumb, Meredith Monk, Sofia Gubaidulina, Alfred Schnittke. Aggiunti 18 nodi e 36 collegamenti di appartenenza e produzione.
- **Blocco B (18 autori)**, commit `2167552cc3f644e25c9fd49458c3c7310fbabf85`: Arvo Pärt, Gérard Grisey, Tristan Murail, Hugues Dufourt, Kaija Saariaho, Brian Ferneyhough, Helmut Lachenmann, Salvatore Sciarrino, Wolfgang Rihm, Harrison Birtwistle, Unsuk Chin, Thomas Adès, George Benjamin, Olga Neuwirth, Caroline Shaw, Anna Thorvaldsdottir, Jennifer Higdon, Gabriela Ortiz. Aggiunti 18 nodi e 36 collegamenti.
- Per ogni autore è registrata almeno un'opera rappresentativa concreta con un URL editoriale, scientifico o istituzionale. L'Atlante conserva generi aggregati provvisori, da rivedere SOLO dopo l'intero ciclo di audit: le tre lenti visuali restano invarianti.

## Problemi storiografici da conservare
1. **Paternità e mezzo**: Klangstudie II di Eimert è coattribuita a Robert Beyer; il tema di Doctor Who non fu composto da Delia Derbyshire, che ne realizzò una versione elettronica; il pianoforte meccanico di Nancarrow non è un sintetizzatore elettronico.
2. **Musica concreta strumentale ≠ concreta su nastro**: Lachenmann, Pression, usa il violoncello acustico con gesti e suoni estesi; Grisey e Murail possono sviluppare spettralismo tramite strumenti.
3. **Tipologie teatrali**: Alice in Wonderland (Chin), L'amour de loin (Saariaho), The Tempest (Adès), Written on Skin (Benjamin) e Lohengrin (Sciarrino) possono condividere il nodo tecnico di «Opera/teatro musicale» solo con spiegazione delle distinzioni. Il titolo Lohengrin non identifica l'opera di Wagner.
4. **Titolo non implica liturgia**: blue cathedral di Higdon è pagina per orchestra; Partita for 8 Voices di Caroline Shaw è lavoro vocale a cappella; Offertorium di Gubaidulina è concerto per violino.
5. **Cronologia delle opere**: Some works extend beyond 2000, in particolare nel capitolo contemporaneo; l'etichetta Novecento è un contenitore iniziale e non una datazione biografica esclusiva.

## Audit precedenti e eccezioni
- Gruppo 1–200: almeno una relazione produttiva per ogni compositore al momento delle relative chiusure. Non prova completezza di catalogo.
- Gruppo 201–300: **97/100** con produzione rappresentativa documentata; tre casi sospesi: Fritz Reiner, Johann Christoph Bach (1671–1721), Walter Klein.
- Gruppo 301–331: **29/31** con produzione rappresentativa documentata; due sospesi: Philippe de Vitry e Guglielmo IX d'Aquitania.
- Le sospensioni sono scelte di prudenza filologica, non assenze da colmare a tutti i costi.

## Fasi NON ancora concluse
**A.** Densificazione dei generi effettivi di produzione per ciascun compositore: più di un genere dove esiste documentazione, come nel caso Vivaldi.

**B.** Ricostruzione e verifica di maestri, allievi, influenze, eredità, scuole e tradizioni storicamente fondate, incluse le fonti dell'archivio specialistico `relazioni.json`.

**C.** Revisione filologica di attribuzioni condivise, varianti dei titoli, trascrizioni, luoghi, cronologie e attendibilità delle fonti.

**D.** Validazione tecnica finale degli archi e prova del visualizzatore dopo eventuale integrazione in `main`, solo previa autorizzazione.

**E.** Al termine del ciclo, e NON prima, riflessione su categorie da unire, separare o riordinare e conseguenze sull'interfaccia, preservando per ora tre lenti.

## Regola di transizione
Passare agli audit di profondità. Non generare finti archi per coprire statistiche; mantenere visibili i casi `da_verificare` e le assenze documentali. Anche tradizioni popolari, jazz, extraeuropee, popular e musica per cinema richiederanno ulteriori minimi trasversali, senza considerare questo elenco occidentale esaustivo.
