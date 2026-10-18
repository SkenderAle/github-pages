# MUSURGIA MUNDI — Audit integrato II: copertura e connessioni documentate
**Data:** 18 ottobre 2026 · **Branch:** `main` · **Base verificata:** `a2488ad39c203a364e3ba42ac7f3648c01c9d890`

## Mandato
Proseguire il censimento degli autori presenti in pagine e audioteche ma assenti dal grafo, ampliare i loro ponti storici e migliorare la navigazione verso i percorsi e le fonti. Non introdurre relazioni personali inventate.

## Stato prima e dopo il Lotto II

| Metrica | Prima | Dopo | Variazione |
|---|---:|---:|---:|
| Compositori | 344 | 377 | +33 |
| Nodi totali | 736 | 769 | +33 |
| Archi generali di contesto | 992 | 1049 | +57 |
| Relazioni direzionali documentate | 1290 | 1301 | +11 |
| Autori e altre persone indicizzate | 423 | 456 | +33 |
| Nodi con rinvii nell'inventario del sito | 104 | 137 | +33 |
| Nodi con URL enciclopedici specifici | 10 | 22 | +12 |

## Audit A · Autori integrati

**Violino e grandi forme ottocentesche:** Henri Vieuxtemps; Édouard Lalo; Carl Reinecke; Pablo de Sarasate; Eugène Ysaÿe; Giovanni Bottesini; Mauro Giuliani; Emmanuel Chabrier.

**Barocco e Classicismo strumentale:** Francesco Maria Veracini; Pietro Antonio Locatelli; Heinrich Ignaz Franz von Biber; Francesco Geminiani; Johann Baptist Vanhal; Franz Anton Hoffmeister.

**Percorsi novecenteschi e concerti:** Jacques Ibert; André Jolivet; Alberto Ginastera; Joaquín Rodrigo; Heitor Villa-Lobos; Mario Castelnuovo-Tedesco; Ney Rosauro; Lars-Erik Larsson; Bohuslav Martinů; Alfred Schnittke; Sergej Kusevickij; Reinhold Glière; Henri Tomasi; Alexander Arutjunjan; Launy Grøndahl; Paul Creston.

**Soglie fra Otto e Novecento:** Max Reger; Scott Joplin; Mel Bonis.

Sono stati utilizzati i nomi già identificati nei repertori `concerti/`, `musica-da-camera/`, `dalla-sinfonia-alla-rapsodia/`, `post-romanticismo/` e `romanticismo/`. Non sono stati duplicati autori già registrati sotto altre grafie. Nuovi autori ricevono il link al percorso realmente esistente; la collocazione geografica resta approssimativa e non viene fabbricata dove mancano i nodi geografici adatti.

## Audit B · Relazioni con fonti

**Undici nuove relazioni:**
1. Louis Spohr → Ferdinand David: formazione violinistica. Fonte: https://www.treccani.it/enciclopedia/ferdinand-david/
2. Henri Vieuxtemps → Eugène Ysaÿe: insegnamento. Fonte: https://www.treccani.it/enciclopedia/eugene-auguste-ysaye/
3. Henryk Wieniawski → Eugène Ysaÿe: insegnamento. Stessa fonte Treccani.
4. Henri Vieuxtemps → Henryk Wieniawski: successione nella classe di violino a Bruxelles, **non** rapporto maestro–allievo. Fonte: https://www.conservatoire.be/en/the-conservatoire/history/
5. Édouard Lalo → Pablo de Sarasate: *Symphonie espagnole* composta per il violinista. Fonte: https://www.treccani.it/enciclopedia/sarasate-y-navascues-pablo-de/
6. Max Bruch → Pablo de Sarasate: *Scottish Fantasy* scritta per il violinista. Stessa fonte.
7. Mario Castelnuovo-Tedesco → John Williams: studio privato della composizione. Fonte: https://www.treccani.it/enciclopedia/john-williams/
8. Edgard Varèse → André Jolivet: rapporto di formazione. Fonte: https://www.treccani.it/enciclopedia/andre-jolivet/
9. Paul Dukas → Joaquín Rodrigo: studio a Parigi. Fonte: https://www.treccani.it/enciclopedia/joaquin-rodrigo/
10. Gabriel Fauré → Jacques Ibert: formazione. Fonte: https://www.treccani.it/enciclopedia/jacques-ibert_%28Enciclopedia-Italiana%29/
11. La Jeune France → André Jolivet: fondazione e appartenenza al gruppo nel 1936. Fonte: https://www.treccani.it/enciclopedia/andre-jolivet/

Ogni nuova relazione dispone di `forward`, `reverse`, nota, `sources` e `status=documentato`. Sono distinte *formazione*, *genealogia istituzionale*, *collaborazione/committenza* e *appartenenza storico-artistica*. Il semplice inserimento in uno stesso repertorio non è prova di influenza.

## Audit C · Ponte ai percorsi
Aggiornato `indice-autori.json` con 33 nomi e varianti ricercabili. Aggiornato `collegamenti-sito.json` con 33 riferimenti editoriali a pagine reali, mantenendo il link permanente alla scheda grafica `atlante3d/?n=<id>`. Corretto il collegamento di Scott Joplin verso `post-romanticismo/#blues-jazz`, poiché `#jazz` non è un'ancora valida.

Questi collegamenti a una sezione dell'audioteca sono *rimandi al repertorio*, non collegamenti a una scheda biografica, né certificazioni di una registrazione audio specifica.

## Audit D · Consultazione enciclopedica
Aggiunte voci Treccani specifiche per Vieuxtemps, Lalo, Ibert, Jolivet, Rodrigo, Villa-Lobos, Castelnuovo-Tedesco, Reger, Sarasate e Ysaÿe; ampliate le schede di Spohr, David e Williams ove opportuno. Ora 22 nodi dispongono di URL specifici. Grove Music Online rimane un portale musicologico di riferimento con possibile accesso istituzionale; la Garzantina della musica rimane un riferimento bibliografico finché non si accerta una scheda digitale accessibile.

## Controlli automatici
- Identificativi dei nodi univoci: superato.
- Estremità di tutti gli archi del grafo generale risolte: superato.
- Estremità delle relazioni documentate risolte e ID non duplicati: superato.
- Nuove relazioni complete di verso, nota e fonti: superato.
- Indice di autori e inventario dei rimandi coerenti con gli ID dei nodi: superato.
- Collegamenti interni dei nuovi autori: verifica delle ancore dei percorsi principali; corretta `#blues-jazz`.
- **Non ancora eseguito** collaudo visivo su desktop e smartphone; non attribuirgli esito positivo.

## Residui e Lotto III
Non è terminato il censimento dell'intero sito: occorre controllare i nomi in testi narrativi, schede ascolto generate, pagine secondarie, teatro musicale e tradizioni locali, e non soltanto i cataloghi principali. Oltre ai compositori verificare interpreti, editori, liutai, teorici, mecenati, librettisti e poeti: quando appropriato creare nodi `persona`, non classificarli impropriamente come compositori.

Ampliare poi, con fonti, le relazioni artistiche e professionali per i 33 nuovi autori; sviluppare collegamenti puntuali alle singole opere, evitando l'effetto «tutti al catalogo»; incrementare progressivamente le voci Grove/Treccani documentate. Verificare in browser caricamento, `?n=`, navigazione indietro, hover e mobile.

**Regola editoriale:** il grafo collega, il sito racconta, le fonti permettono di controllare. Niente numeri gonfiati, nessun arco inventato.
