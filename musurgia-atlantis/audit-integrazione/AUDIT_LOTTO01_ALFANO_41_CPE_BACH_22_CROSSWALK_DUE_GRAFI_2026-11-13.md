# Lotto Flaminio 01 — Crosswalk dei due grafi, Alfano 41 e C. P. E. Bach 22

**Data:** 13 novembre 2026 · **Ambito:** solo staging `musurgia-atlantis/audit-integrazione/`, branch `main`.

## Esito misurabile

- Due grafi originali interrogati: `musurgia-atlantis/grafo.json` **754 nodi / 1.718 archi**; `atlante3d/database/grafo.json` **869 nodi / 2.437 archi**.
- Raffronto con le evidenze di **23 manifesti** ricapitolate nei tre `CROSSWALK_LOTTO01_500_OVERLAY_SHARD0*.json`: nessuna delle **63 righe Excel** ha un riscontro rigoroso di stessa riga o URL nei 23 testimoni. Non è una prova di assenza da staging disgiunti non federati.
- `Franco Alfano` riusa il nodo Atlantis `pers:franco-alfano` (già collegato alle due versioni del completamento di *Turandot*). `C. P. E. Bach` riusa il nodo dell'Atlante Mundi `compositore-carl-philipp-emanuel-bach`, alias federato `legacy:gf:compositore-carl-philipp-emanuel-bach`.
- **63 identità candidate di opera o ciclo** (62 opere/estratti/versioni + la raccolta *Nuove liriche tagoriane* n.57), **11 raccolte contestuali aggiuntive**, **11 riferimenti documentari esterni**, **211 archi candidati**.
- Nelle 211 relazioni: **63** fonte→opera, **63** autore→opera/raccolta, **29** raccolta→brano, **27** opera→genere/forma, **5** autore→genere motivati da opere. I restanti archi descrivono raccolte, estratti, trascrizioni e versioni senza trasformare i riferimenti documentari in opere promosse.
- Merge logico del dataset delle 500 fonti e dei quattro overlay preesistenti: **649 nodi / 1.137 archi**. Con il nuovo layer e i suoi riferimenti documentari: **734 nodi / 1.348 archi**. Tutti i nuovi endpoint risolti nella federazione dei due grafi; **0 nuovi ID duplicati, 0 archi orfani**. Ciò è un test dati, NON test browser.
- **13/13 invarianti di regressione PASS_STAGING_DATA_ONLY**. Sono esplicitamente **0** i merge canonici autorizzati, **0** i collaudi Canvas/WebGL reali, **0** le modifiche a `musurgia-atlantis/grafo.json` / `index.html`.

## Legami e limiti filologici

### Alfano

- L'identità di Alfano **non** è una delle 41 opere: `pers:franco-alfano` esiste già e conserva i legami con *Turandot*; non creare un secondo compositore.
- La numerazione Alfano delle guide Flaminio è **redazionale**, non un catalogo tematico ufficiale. I nuovi ID `audit:fl01:alf-cpe:work:excelN` sono **soltanto provvisori** e basati sulla riga sorgente.
- Per le raccolte vocali n.30, 32, 42, 61, 66, 70, 73 e 75 sono presenti **otto nodi padre contestuali**, con collegamenti ai soli membri che hanno guida in questo lotto. Il n.57 (*Nuove liriche tagoriane*, 1935) è invece una delle 63 righe sorgente e costituisce un nodo raccolta, senza duplicato padre.
- Il ciclo del 1935 n.57 è **distinto** dal ciclo del 1948 n.73. Il riferimento all'orchestrazione del 1936 del primo è soltanto documentario, non una seconda composizione importata.
- *Danza e finale da Sakuntala* (Excel 575) è **estratto** dall'originale del 1921; *Sakuntala* (681) è versione del 1951, prima del 1952. Entrambi i rapporti puntano a un **riferimento documentario** all'opera 1921, non a un nodo canonico inventato.
- *Due intermezzi* e le partiture quartettistiche, la *Prima Sinfonia* e la *Sinfonia Classica* (1953), *Giorno per giorno* vocale e arrangiamento del 1941 sono tenuti distinti mediante archi tipizzati e HOLD sulla promozione.
- Rimanenti incongruenze di fonte da non cancellare: `Dormiveglia`/`I tuoi occhi` nell'HTML title; `Scrivimi amor mio`/`Antica ninna-nanna partenopea` nell'intestazione del testo; date 1907/1909 per la suite e 1948/1950 per *Una danza*.

### C. P. E. Bach

- Riusa il nodo Mundi già collegato a **Sonata, Concerto, Fantasia**. Per le opere nuove si usano i nodi di genere esistenti `legacy:gf:genere-concerto`, `genere-sonata`, `forma-fantasia`, `genere-sinfonia`, `forma-variazioni`; nessuna propagazione transitiva automatica.
- **H 417 = Wq 14** (Excel 1133): l'intestazione Flaminio con Wq13 è registrata come errore di fonte, non assunta come classificazione.
- **H 438 / Wq 168** (flauto) e **H 439 / Wq 172** (violoncello) derivano da **H 437 / Wq 29**; ulteriori rapporti documentati H 432/Wq170 da H 430/Wq26; H 436/Wq171 da H 434/Wq28; H 445/Wq169 da H 444/Wq34. Gli originali citati sono riferimenti documentari fuori lotto.
- **H 484.1/Wq22 ↔ H 425/Wq22**: `versione_correlata_direzione_sospesa`, **nessuna** cronologia di derivazione imposta senza scioglimento del contrasto fra guida ed edizione critica.
- **H 657 / Wq 182/1** e **H 666 / Wq 183/4** sono due sinfonie distinte benché entrambe in sol maggiore. Usare genitore di raccolta specifico; non deduplicare per tonalità.
- **H 284 e H 300** sono fantasie, **H 263** variazioni, **H 563** sonata per arpa, **H 449** sonatina (non promossa arbitrariamente a sonata). Le liriche italiane di Alfano non sono automaticamente collegate al Lied tedesco.

## Censimento univoco dei record del nuovo layer

| Excel | Autore | Guida Flaminio: titolo sorgente | ID candidato | Riferimento al padre | Genere/forma |
|---:|---|---|---|---|---|
| 575 | Alfano | [Danza e finale da Sakuntala](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sakuntala35.html) | `audit:fl01:alf-cpe:work:excel575` | — | — |
| 576 | Alfano | [Divertimento per orchestra ridotta e pianoforte obbligato](https://www.flaminioonline.it/Guide/Alfano/Alfano-Divertimento56.html) | `audit:fl01:alf-cpe:work:excel576` | — | — |
| 577 | Alfano | [Due Intermezzi per archi](https://www.flaminioonline.it/Guide/Alfano/Alfano-Intermezzi47.html) | `audit:fl01:alf-cpe:work:excel577` | — | — |
| 579 | Alfano | [Prima Sinfonia in mi maggiore in quattro tempi](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sinfonia25.html) | `audit:fl01:alf-cpe:work:excel579` | — | genere-sinfonia |
| 581 | Alfano | [Seconda Sinfonia in do maggiore](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sinfonia49.html) | `audit:fl01:alf-cpe:work:excel581` | — | genere-sinfonia |
| 584 | Alfano | [Suite romantica (Poema italico)](https://www.flaminioonline.it/Guide/Alfano/Alfano-Suite23.html) | `audit:fl01:alf-cpe:work:excel584` | — | genere-suite |
| 585 | Alfano | [Una danza per orchestra](https://www.flaminioonline.it/Guide/Alfano/Alfano-Danza72.html) | `audit:fl01:alf-cpe:work:excel585` | — | — |
| 606 | Alfano | [Dormiveglia](https://www.flaminioonline.it/Guide/Alfano/Alfano-Dormiveglia32-1.html) | `audit:fl01:alf-cpe:work:excel606` | alfano:editorial32 | — |
| 608 | Alfano | [Lungo la via del mare...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Lungo661.html) | `audit:fl01:alf-cpe:work:excel608` | alfano:editorial66 | — |
| 609 | Alfano | [Mamma, il giovine principe](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mamma301.html) | `audit:fl01:alf-cpe:work:excel609` | alfano:editorial30 | — |
| 612 | Alfano | [Perché allo spuntar del giorno...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Giorno421.html) | `audit:fl01:alf-cpe:work:excel612` | alfano:editorial42 | — |
| 614 | Alfano | [Si addensano le nubi...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Addensano701.html) | `audit:fl01:alf-cpe:work:excel614` | alfano:editorial70 | — |
| 616 | Alfano | [Sì, lo so...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Siloso73-1.html) | `audit:fl01:alf-cpe:work:excel616` | alfano:editorial73 | — |
| 618 | Alfano | [Cogli, prendi questo fiorellino](https://www.flaminioonline.it/Guide/Alfano/Alfano-Cogli73-2.html) | `audit:fl01:alf-cpe:work:excel618` | alfano:editorial73 | — |
| 619 | Alfano | [Egli mormorò: amor mio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mormoro30-2.html) | `audit:fl01:alf-cpe:work:excel619` | alfano:editorial30 | — |
| 620 | Alfano | [Finisci l'ultimo canto...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Finisci422.html) | `audit:fl01:alf-cpe:work:excel620` | alfano:editorial42 | — |
| 621 | Alfano | [I miei piedi son stanchi...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Piedi662.html) | `audit:fl01:alf-cpe:work:excel621` | alfano:editorial66 | — |
| 622 | Alfano | [I tuoi occhi](https://www.flaminioonline.it/Guide/Alfano/Alfano-Occhi32-2.html) | `audit:fl01:alf-cpe:work:excel622` | alfano:editorial32 | — |
| 623 | Alfano | [Il giorno non è più](https://www.flaminioonline.it/Guide/Alfano/Alfano-Preludio75-2.html) | `audit:fl01:alf-cpe:work:excel623` | alfano:editorial75 | — |
| 627 | Alfano | [Venne e mi sedette accanto...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Venne702.html) | `audit:fl01:alf-cpe:work:excel627` | alfano:editorial70 | — |
| 628 | Alfano | [Al chiarore della mattina...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Mattina323.html) | `audit:fl01:alf-cpe:work:excel628` | alfano:editorial32 | — |
| 629 | Alfano | [Giorno per giorno...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Giorno42-3.html) | `audit:fl01:alf-cpe:work:excel629` | alfano:editorial42 | — |
| 630 | Alfano | [Parlami, amor mio](https://www.flaminioonline.it/Guide/Alfano/Alfano-Parlami30-3.html) | `audit:fl01:alf-cpe:work:excel630` | alfano:editorial30 | — |
| 631 | Alfano | [Preghiera alla Madonna](https://www.flaminioonline.it/Guide/Alfano/Alfano-Madonna613.html) | `audit:fl01:alf-cpe:work:excel631` | alfano:editorial61 | — |
| 633 | Alfano | [Scendesti dal tuo trono...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Scendesti703.html) | `audit:fl01:alf-cpe:work:excel633` | alfano:editorial70 | — |
| 634 | Alfano | [Scrivimi, amor mio...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Scrivimi663.html) | `audit:fl01:alf-cpe:work:excel634` | alfano:editorial66 | — |
| 636 | Alfano | [Colsi il tuo fiore, o mondo!](https://www.flaminioonline.it/Guide/Alfano/Alfano-Colsi73-4.html) | `audit:fl01:alf-cpe:work:excel636` | alfano:editorial73 | — |
| 638 | Alfano | [Perché piangi?](https://www.flaminioonline.it/Guide/Alfano/Alfano-Piangi324.html) | `audit:fl01:alf-cpe:work:excel638` | alfano:editorial32 | — |
| 639 | Alfano | [Se taci...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Taci704.html) | `audit:fl01:alf-cpe:work:excel639` | alfano:editorial70 | — |
| 642 | Alfano | [Non so...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Nonso705.html) | `audit:fl01:alf-cpe:work:excel642` | alfano:editorial70 | — |
| 645 | Alfano | [Non partire, amor mio...](https://www.flaminioonline.it/Guide/Alfano/Alfano-Partire326.html) | `audit:fl01:alf-cpe:work:excel645` | alfano:editorial32 | — |
| 647 | Alfano | [Antica ninna-nanna partenopea](https://www.flaminioonline.it/Guide/Alfano/Alfano-Antica58.html) | `audit:fl01:alf-cpe:work:excel647` | — | — |
| 653 | Alfano | [Felicità](https://www.flaminioonline.it/Guide/Alfano/Alfano-Felicita27.html) | `audit:fl01:alf-cpe:work:excel653` | — | — |
| 654 | Alfano | [Luce](https://www.flaminioonline.it/Guide/Alfano/Alfano-Luce74.html) | `audit:fl01:alf-cpe:work:excel654` | — | — |
| 656 | Alfano | [Nuove liriche tagoriane](https://www.flaminioonline.it/Guide/Alfano/Alfano-Liriche57.html) | `audit:fl01:alf-cpe:work:excel656` | — | — |
| 667 | Alfano | [È giunto il nostro ultimo autunno](https://www.flaminioonline.it/Guide/Alfano/Alfano-Autunno65.html) | `audit:fl01:alf-cpe:work:excel667` | — | — |
| 668 | Alfano | [Cyrano de Bergerac](https://www.flaminioonline.it/Guide/Alfano/Alfano-Cyrano55.html) | `audit:fl01:alf-cpe:work:excel668` | — | genere-opera |
| 673 | Alfano | [Il principe Zilah](https://www.flaminioonline.it/Guide/Alfano/Alfano-Zilah22.html) | `audit:fl01:alf-cpe:work:excel673` | — | genere-opera |
| 678 | Alfano | [Madonna Imperia](https://www.flaminioonline.it/Guide/Alfano/Alfano-Imperia39.html) | `audit:fl01:alf-cpe:work:excel678` | — | genere-opera |
| 680 | Alfano | [Risurrezione](https://www.flaminioonline.it/Guide/Alfano/Alfano-Risurrezione21.html) | `audit:fl01:alf-cpe:work:excel680` | — | genere-opera |
| 681 | Alfano | [Sakuntala](https://www.flaminioonline.it/Guide/Alfano/Alfano-Sakuntala77.html) | `audit:fl01:alf-cpe:work:excel681` | — | genere-opera |
| 894 | C. P. E. Bach | [Duetto in mi minore](https://www.flaminioonline.it/Guide/BachC/Bachc-Duetto598.html) | `audit:fl01:alf-cpe:work:excel894` | — | — |
| 1097 | C. P. E. Bach | [Concerto in do maggiore per clavicembalo e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto423.html) | `audit:fl01:alf-cpe:work:excel1097` | — | genere-concerto |
| 1117 | C. P. E. Bach | [Concerto in la maggiore per flauto traverso e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto438.html) | `audit:fl01:alf-cpe:work:excel1117` | — | genere-concerto |
| 1118 | C. P. E. Bach | [Concerto in la maggiore per violoncello e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto439.html) | `audit:fl01:alf-cpe:work:excel1118` | — | genere-concerto |
| 1124 | C. P. E. Bach | [Concerto in la minore per violoncello e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto432.html) | `audit:fl01:alf-cpe:work:excel1124` | — | genere-concerto |
| 1133 | C. P. E. Bach | [Concerto in mi maggiore per clavicembalo e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto417.html) | `audit:fl01:alf-cpe:work:excel1133` | — | genere-concerto |
| 1143 | C. P. E. Bach | [Concerto in re maggiore per clavicembalo e orchestra](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto472.html) | `audit:fl01:alf-cpe:work:excel1143` | cpe:wq43 | genere-concerto |
| 1149 | C. P. E. Bach | [Concerto in re minore per clavicembalo e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto427.html) | `audit:fl01:alf-cpe:work:excel1149` | — | genere-concerto |
| 1152 | C. P. E. Bach | [Concerto in re minore per flauto traverso e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto4841.html) | `audit:fl01:alf-cpe:work:excel1152` | — | genere-concerto |
| 1167 | C. P. E. Bach | [Concerto in si bemolle maggiore per violoncello e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto436.html) | `audit:fl01:alf-cpe:work:excel1167` | — | genere-concerto |
| 1178 | C. P. E. Bach | [Concerto in sol maggiore per flauto traverso e archi](https://www.flaminioonline.it/Guide/BachC/Bachc-Concerto445.html) | `audit:fl01:alf-cpe:work:excel1178` | — | genere-concerto |
| 1197 | C. P. E. Bach | [Sonatina in re maggiore per clavicembalo e orchestra](https://www.flaminioonline.it/Guide/BachC/Bachc-Sonatina449.html) | `audit:fl01:alf-cpe:work:excel1197` | — | — |
| 1219 | C. P. E. Bach | [Magnificat in re maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Magnificat772.html) | `audit:fl01:alf-cpe:work:excel1219` | — | — |
| 1306 | C. P. E. Bach | [Fantasia in do maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Fantasia284.html) | `audit:fl01:alf-cpe:work:excel1306` | — | forma-fantasia |
| 1309 | C. P. E. Bach | [Fantasia in fa diesis minore](https://www.flaminioonline.it/Guide/BachC/Bachc-Fantasia300.html) | `audit:fl01:alf-cpe:work:excel1309` | — | forma-fantasia |
| 1651 | C. P. E. Bach | [Variazioni in re minore su "Les folies d'Espagne"](https://www.flaminioonline.it/Guide/BachC/Bachc-Espagne263.html) | `audit:fl01:alf-cpe:work:excel1651` | — | forma-variazioni |
| 1996 | C. P. E. Bach | [Sinfonia in mi minore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia652.html) | `audit:fl01:alf-cpe:work:excel1996` | — | genere-sinfonia |
| 2000 | C. P. E. Bach | [Sinfonia in si bemolle maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia658.html) | `audit:fl01:alf-cpe:work:excel2000` | cpe:wq182 | genere-sinfonia |
| 2001 | C. P. E. Bach | [Sinfonia in si minore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia661.html) | `audit:fl01:alf-cpe:work:excel2001` | cpe:wq182 | genere-sinfonia |
| 2004 | C. P. E. Bach | [Sinfonia in sol maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia657.html) | `audit:fl01:alf-cpe:work:excel2004` | cpe:wq182 | genere-sinfonia |
| 2005 | C. P. E. Bach | [Sinfonia in sol maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sinfonia666.html) | `audit:fl01:alf-cpe:work:excel2005` | cpe:wq183 | genere-sinfonia |
| 2024 | C. P. E. Bach | [Sonata in sol maggiore](https://www.flaminioonline.it/Guide/BachC/Bachc-Sonata563.html) | `audit:fl01:alf-cpe:work:excel2024` | — | genere-sonata |

## Prossimi gate prima di promuovere un'identità

1. Confrontare per titolo completo, **autore, H e Wq** (per Bach), opus, versione, movimento e strumentazione con *tutti* gli staging disgiunti oltre ai 23 registri del manifest; gli ID basati sulla riga Excel sono provvisori.
2. Passare dal riferimento documentario al nodo musicale per originali/parti/versioni **solo** con verifica indipendente e conservando gli URL originali.
3. Visualizzare i 734 nodi dello staging in un browser reale, controllando filtri, pertinenza radicata, categorie, anelli autore–genere–opera, touch Android, limiti di profondità, nodi senza duplicati.
4. Ricalcolare le 500 righe di Lotto01 (attualmente **133** righe con precedenti identità candidate) solo dopo crosswalk globale; non sommare 133+63 come opere certificate.
5. Nessun file di produzione è stato modificato; **Lotto01 OPEN**, **Lotto02 BLOCKED**.
