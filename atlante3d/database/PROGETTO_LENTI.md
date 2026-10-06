# Musurgia Mundi · Lenti di esplorazione
**Stato:** primo rilascio sperimentale, 6 ottobre 2026.

## Riferimento metodologico: Musicmap
Riferimento pubblico: https://musicmap.info/ (consultato per metodo, non per il codice o la grafica).

Musicmap distingue macrofamiglie e generi, opera una riduzione editoriale per mantenere la leggibilità e usa diversi tipi di relazioni fra generi (ascendenze principali, influssi secondari, reazioni). L'impianto integra livelli di dettaglio, descrizioni storiche e ascolti esemplari. Si tratta di una **fonte d'ispirazione progettuale**, non di un dataset da copiare. Le visualizzazioni, il codice, i colori e la struttura di Musurgia Mundi restano originali.

La scelta per Musurgia Mundi: **una sola rete di persone e oggetti musicali, molte lenti di lettura**, con fonti consultabili per ogni rapporto di natura biografica o interpretativa.

## Lenti
- **Storia musicale**: tutte le relazioni della rete storica in `grafo.json`; è la modalità iniziale e continua a mostrare i luoghi sempre disponibili come marcatori.
- **Parentele**: soltanto rapporti documentati fra persone (filiazione, fratelli, affinità acquisita, matrimonio). Non dedurre parentele da cognomi o epoche.
- **Maestri e allievi**: formazione didattica formalmente riconoscibile. La freccia va dal maestro all'allievo.
- **Influenze**: rapporto stilistico documentato, con direzione; distingue influenza e eredità. Non equivale alla presenza nello stesso periodo.
- **Incontri e collaborazioni**: sostegno artistico, lavoro congiunto e scambio musicale. La relazione non va confusa con una parentela.

Le lenti sono **filtri espliciti**, non una somma indiscriminata. Quando si passa da una all'altra il contenuto dell'Atlante non cambia: cambia la domanda che si pone alla rete.

## Dati della lente
Separati in `relazioni.json`, così non alterano l'originaria organizzazione in `grafo.json`.

Ogni `relation` richiede:
| Campo | Significato |
|---|---|
| `id` | Identificatore univoco |
| `group` | Lente di appartenenza |
| `source`, `target` | Due ID validi in `grafo.json`, con orientamento dichiarato |
| `kind` | Natura specifica del rapporto |
| `forward`, `reverse` | Formula verbale letta dai due estremi |
| `note` | **Perché sono collegati?** Testo esplicativo, non frasi generiche |
| `sources` | Indirizzi delle fonti consultabili, almeno uno |
| `status` | Stato della verifica (`documentato`, `in-revisione`) |

Una relazione può essere visibile da entrambi i nodi, ma **la direzione non è invertita**: il figlio non diventa padre, l'allievo non diventa maestro, l'influenzato non diventa influenzatore. Un rapporto interpretativo richiede un commento storico, non soltanto la linea.

## Persone che non sono compositori
Il tipo `persona` consente a Cosima Wagner e Maria Anna Mozart di esistere come figure storiche senza essere forzate nella categoria “compositore”. Questi nodi non affollano la costellazione musicale ordinaria e vengono resi disponibili dalle lenti pertinenti. Siegfried Wagner e Leopold Mozart, che sono compositori, mantengono il tipo `compositore`.

## Percorso di esplorazione
1. Scegli una sfera e, se lo desideri, una lente.
2. Vedi soltanto i legami diretti del tipo scelto. Gli altri restano attenuati.
3. Puoi fare clic su una linea o su «Perché sono collegati?» per consultare nota e fonti.
4. Selezionando una persona collegata il centro della rete cambia, ma la lente rimane attiva.
5. Tornando a «Storia musicale» si recupera la rete originaria.
6. Il pulsante «Etichette: tutte» continua a interessare soprattutto la vista musicale.

## Fonti e riscontri per il primo campione
- Treccani, Cosima Wagner: https://www.treccani.it/enciclopedia/cosima-wagner/
- Treccani, Siegfried Wagner: https://www.treccani.it/enciclopedia/siegfried-wagner/
- Richard Wagner International, biografia: https://www.richard-wagner.org/rwvi/en/about-wagner/the-man/
- Bayreuth Tourism, Franz Liszt: https://www.bayreuth-tourismus.de/en/places-of-interest/stage-set-for-richard-wagner/franz-liszt/
- Treccani, vita della famiglia Mozart: https://www.treccani.it/enciclopedia/mozart_%28Il-Libro-dell%27Anno%29/
- Encyclopaedia Britannica 1911 (archivio), famiglia Bach: https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Bach%2C_Johann_Sebastian
- Treccani, Richard Wagner: https://www.treccani.it/enciclopedia/wilhelm-richard-wagner/
- Altre fonti associate alle singole relazioni nella chiave `sources`.

## Limiti dichiarati e sviluppi
Questo primo rilascio **non è una genealogia esaustiva**. L'assenza di una parentela significa soltanto che la relazione non è ancora catalogata. Alcune fonti relative alle influenze sono generaliste e andranno sostituite da studi musicologici di maggiore dettaglio. Prima di ampliare la rete: controllare i nodi esistenti, le grafie onomastiche, la direzione della relazione, l'epoca, la fonte e gli eventuali casi contestati.

Sviluppi previsti: cronologia a livelli, filtro delle opere e delle pratiche compositive, dinamica fra società e tecnologia, luoghi biografici distinti dalla cittadinanza moderna, intensità/certezza dei rapporti, percorsi guidati di cinque tappe con confronto fra ascolti.

## Controlli per la pubblicazione
Lo script `verifica-relazioni.mjs` controlla: identificativi esistenti, unicità delle relazioni, categorie di lente riconosciute, etichette nei due versi e almeno una URL HTTPS per relazione documentata.
