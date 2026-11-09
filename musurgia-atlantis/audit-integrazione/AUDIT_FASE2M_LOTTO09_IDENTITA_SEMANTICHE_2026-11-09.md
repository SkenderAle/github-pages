# Musurgia Atlantis — Fase 2M, Lotto 09
## Revisione storico-semantica campionata del crosswalk, blocco delle false identità

**9 novembre 2026 · Repository `SkenderAle/github-pages`, branch `main` · esclusivamente staging `audit-integrazione/`.**

### Perimetro REALMENTE eseguito
Letti i JSON completi dei grafi attraverso i blob reali GitHub (`atlante3d/database/grafo.json`: 869 nodi e 2437 archi; `musurgia-atlantis/grafo.json`: 754 nodi e 1718 link), e il crosswalk integrale del Lotto 08 (344 righe). Sono state esaminate **27 coppie concrete**, appartenenti a **22 concetti legacy diversi**: 322 concetti legacy **non ancora oggetto di una nuova revisione individuale in questo lotto**. Il controllo del Lotto 08 su tutti i 344 non viene presentato come audit semantico manuale completo.

Il risultato principale è la correzione, **nella matrice di giudizio separata e NON nei grafi di produzione**, di falsi positivi che nel crosswalk lessicale del Lotto 08 erano ancora elencati come `category_compatible_pending_evidence`: **San Petronio ≠ San Marco**, **Lutosławski, Jeux vénitiens (1961) ≠ Debussy, Jeux (1913)**. La compatibilità di tipo dei nodi non costituisce prova di identità.

### Decisioni e cautele ontologiche
- **Cinque coincidenze esatte di etichetta** (opera buffa, opera seria, dramma giocoso, quartetto d'archi, operetta viennese) sono **candidati di concetto delimitato**, non fusioni approvate: servono confronto del significato e riconciliazione individuale dei rapporti.
- **Madrigale**: il legacy è un termine ombrello per il Trecento e il Cinquecento, mentre i due nodi Atlantis corrispondono a tradizioni differenti; **un collegamento generale-verso-specifico non implica equivalenza**. Fonte: https://www.treccani.it/vocabolario/madrigale/
- **Dodecafonia** non coincide con tutta l'**atonalità**; **Ars nova** non coincide con il **mottetto medievale**; il titolo combinato «Musica concreta ed elettroacustica» richiede un confine esplicito. Fonti: https://open.lib.umn.edu/musiccomposition/chapter/dodecaphony-12-tone-technique/ e https://www.treccani.it/enciclopedia/ars-nova/
- **La Valse**: l'allestimento Nijinska/Rubinstein del **23 maggio 1929** è distinto dalla composizione di Ravel del **1919–20**. L'identificazione con il nodo `produzione:...` resta una **proposta di stesso evento** da precisare; il collegamento col nodo opera può esprimere `allestimento_di`. Fonte BnF https://catalogue.bnf.fr/ark:/12148/cb47523610d
- **War Requiem**: partitura e prima esecuzione nella Cattedrale di Coventry, **30 maggio 1962**, devono poter convivere come entità collegate ma distinte. Fonte Britten Pears Arts: https://www.brittenpearsarts.org/news/work-of-the-week-special-war-requiem
- **Il Canto degli Italiani**, **Missa Papae Marcelli** e il caso **recitar cantando / Euridice** richiedono separazione fra opera e scheda contestuale o editoriale. L'assenza di equivalenza diretta non equivale all'assenza di un legame documentabile.
- **Genere Sinfonia ≠ una singola sinfonia**, **forma Fantasia ≠ film Fantasia (1940)**. Il crosswalk non può usare archi di generi, periodi, luoghi, capitoli o istituzioni come scorciatoie universali.

### Matrice delle coppie sottoposte a giudizio (27)
| Sorgente legacy | Candidato Atlantis | Esito | Motivazione / limitazione |
|---|---|---|---|
| `opera-buffa` | `senso:opera-buffa` | CANDIDATO (NO MERGE) | Stesso nome e tipo di sottogenere teatrale; va confrontata l'estensione delle definizioni e ogni arco. |
| `opera-seria` | `senso:opera-seria` | CANDIDATO (NO MERGE) | Stesso nome di tradizione/sottogenere teatrale; non trasferire automaticamente periodi o autori. |
| `dramma-giocoso` | `senso:dramma-giocoso` | CANDIDATO (NO MERGE) | Stesso nome della denominazione teatrale, distinta da opera buffa come nodo anche se con rapporti storici. |
| `genere-quartetto-archi` | `senso:quartetto` | CANDIDATO (NO MERGE) | Il legacy definisce il genere cameristico; conservare la distinzione organico / formazione / composizione / genere prima della fusione. |
| `tradizione-operetta-viennese` | `trad:operetta-viennese` | CANDIDATO (NO MERGE) | Nodi concordanti sulla tradizione storica; un'opera specifica o un autore non diventano sinonimi della tradizione. |
| `cappella-san-marco-venezia` | `istituzione:cappella-san-marco` | CANDIDATO (NO MERGE) | Denominazione e ubicazione corrispondono alla Cappella musicale della basilica veneziana; la scuola veneziana è distinta. |
| `cappella-san-petronio-bologna` | `istituzione:cappella-san-marco` | RESPINTO | Bologna, fondata 1436, e Venezia, Cappella di San Marco, sono istituzioni differenti. |
| `jeux-venitiens-lutoslawski-1961` | `opera:jeux-debussy-1913` | RESPINTO | Jeux vénitiens (Lutosławski, 1961, orchestra da camera) è diverso da Jeux (Debussy, 1913, balletto). |
| `madrigale` | `senso:madrigale-cinquecentesco` | DISTINTO/CONTESTUALE | Il nodo legacy comprende Trecento e Cinquecento; non coincide solo con il madrigale rinascimentale. |
| `madrigale` | `senso:madrigale-trecentesco` | DISTINTO/CONTESTUALE | Il legacy comprende Trecento e Cinquecento; la forma trecentesca non esaurisce il genere storico generico. |
| `ars-nova` | `senso:ars-nova` | DISTINTO/CONTESTUALE | Atlantis aggrega Ars nova e mensuralismo, legacy denomina solo Ars nova: confrontare definizioni prima di qualunque identificazione. |
| `ars-nova` | `senso:motetto-medievale` | DISTINTO/CONTESTUALE | Un genere sviluppato nel contesto dell'Ars nova non è identico alla corrente storica. |
| `dodecafonia` | `senso:atonalita` | DISTINTO/CONTESTUALE | La tecnica dei dodici suoni non coincide con l'intera atonalità; la scheda Atlantis combina entrambe. |
| `musica-concreta` | `senso:musica-concreta` | DISTINTO/CONTESTUALE | Il target estende il titolo all'elettroacustica; distinguere musica concreta da categoria elettroacustica generale prima del crosswalk. |
| `la-valse-ravel-balletto-1929` | `opera:la-valse-ravel-1920` | DISTINTO/CONTESTUALE | L'allestimento coreografico del 23 maggio 1929 è distinto dalla partitura composta nel 1919–1920. |
| `la-valse-ravel-balletto-1929` | `produzione:la-valse-rubinstein-nizinska-1929` | CANDIDATO (NO MERGE) | La scheda BnF documenta coreografia Nijinska, interprete Rubinstein e 23 maggio 1929; verificare la granularità dell'evento della prima. |
| `genere-sinfonia` | `opera:sinfonia-nona` | RESPINTO | Sinfonia come genere non è la Sinfonia n. 9 come composizione specifica. |
| `genere-sinfonia` | `opera:berio-sinfonia-1968-69` | RESPINTO | Sinfonia di Berio è un'opera specifica, non il genere sinfonico. |
| `forma-fantasia` | `opera:fantasia` | RESPINTO | Forma musicale fantasia ≠ Fantasia (1940), film identificato in Atlantis. |
| `war-requiem-coventry-1962` | `opera:britten-war-requiem-op66-1962` | DISTINTO/CONTESTUALE | L'opera e la prima a Coventry il 30 maggio 1962 sono aspetti distinti della scheda legacy; identificare l'opera, mantenere l'evento separato. |
| `inno-patriottico-canto-italiani-1847` | `opera:inno-italiani` | DISTINTO/CONTESTUALE | L'inno musicale/poetico è distinto da status istituzionale, usi e tradizione patriottica evocati nel nodo legacy. |
| `missa-papae-marcelli-palestrina` | `opera:missa-papae-marcelli` | DISTINTO/CONTESTUALE | La composizione non coincide con il contesto interpretativo e con la leggenda tridentina inclusi nella scheda legacy. |
| `opera-comique` | `senso:opera-comique` | DISTINTO/CONTESTUALE | Il target accosta la denominazione storica al dialogo parlato: verificare variazioni cronologiche della definizione. |
| `recitar-cantando-peri-euridice` | `senso:recitar-cantando` | DISTINTO/CONTESTUALE | Il caso legacy aggrega una prassi storica alla singola opera Euridice; la prassi non è identica al caso. |
| `recitar-cantando-peri-euridice` | `opera:euridice-peri` | DISTINTO/CONTESTUALE | Euridice (1600) è un'opera specifica; il contenitore didattico legacy la associa al recitar cantando ma non va fuso come opera. |
| `sinfonia-leningrado-1942-esecuzione` | `opera:sinfonia-nona` | RESPINTO | Il legacy riguarda la Settima sinfonia di Šostakovič e la sua esecuzione a Leningrado nel 1942; Sinfonia n. 9 non è lo stesso lavoro. |
| `genere-opera` | `senso:opera-buffa` | DISTINTO/CONTESTUALE | Opera è il macrogenere; opera buffa è un sottogenere distinto, non la medesima entità. |

Per ogni riga sono disponibili nel JSON parallelo il predicato eventuale, la fonte esterna quando presente e i tre blocchi espliciti: `identity_certified=false`, `merge_authorized=false`, `independent_historical_edge_certified=false`. La fonte sostiene soltanto il fatto preciso citato, non certifica l'intero arco.

### Test di integrità
**13/13 PASS**, controllati sui JSON reali: cardinalità di partenza, esistenza dei source/target, appartenenza delle coppie alla matrice, assenza di duplicati, separazione dei madrigali, blocco delle due false identità più pericolose, **zero merge** e **zero archi nuovi certificati**.

**NON eseguito**: Node `--live` in checkout locale; browser, WebGL, Android; navigazione radicata I–V; traduzione completa delle **3.856** relazioni legacy con `forward/reverse`, note e fonti; test su 115 media, 207 associazioni e 537 URL con ancora. Non modificati i dati pubblici. Questi sono controlli strutturali e semantici **di un campione**, non certificazione integrale.

### Prossima ripresa — Lotto 10
1. Estendere il giudizio ai candidati lessicali rimanenti del crosswalk 344↔410, rivedendo **anche i casi marcati erroneamente `category_compatible_pending_evidence`**; riconsiderare le proposte precedenti con ID conservati separatamente.
2. Preparare lo schema reversibile di **opera/evento/istituzione/genere**, conservando sotto-entità e collegamenti documentati (non identificazioni per titolo).
3. Avviare conversione dimostrativa **senza perdita** di spiegazioni `forward/reverse` e fonti per un campione di archi, mantenendo il testo originario e il verso.
4. Eseguire quando tecnicamente praticabile **Node `--live`**, quindi browser/Android; test di pertinenza radicata, profondità per tipologia e pivot individuale. Non passare alla produzione prima della certificazione.

**Regola permanente:** grafi, interfacce e pagine pubbliche NON sono stati modificati da questo lotto; i 210 lotti di audit storico-filologico rimangono tutelati.
