# MUSURGIA MUNDI — Audit qualità 02b, controllo di 10 fonti produttive

Data 8 ottobre 2026, ramo `audit-produzione-correttivo-01`, parent `c3e0f2dcedf54986b36b16c70c0ecca2f5f72155`.

## Esito
Riesaminate 10 fonti su **10 relazioni produttive esistenti** del macroblocco di 100 autori. Nove pagine di catalogo e/o partiture relative a opere singole e un elenco di composizioni (Sivori). Gli URL consultati risolvono alle opere/corpora attesi. **Non** implica aver letto e collazionato tutte le partiture integrali.

| # | Compositore | Opera | Tipo di prova | URL di riferimento |
|---:|---|---|---|---|
| 1 | Carl Philipp Emanuel Bach | Concerto Wq 23 | edizione_critica | [Pagina verificata](https://www.cpebach.org/parts/III-9-7) |
| 2 | Carl Friedrich Zelter | Concerto per viola in mi bemolle | parti_e_catalogo | [Pagina verificata](https://imslp.org/wiki/Viola_Concerto_in_E-flat_major_(Zelter,_Carl_Friedrich)) |
| 3 | Carl Friedrich Zelter | Sonata per tastiera in fa maggiore | partitura_e_catalogo | [Pagina verificata](https://imslp.org/wiki/Keyboard_Sonata_in_F_major_(Zelter,_Carl_Friedrich)) |
| 4 | Amilcare Ponchielli | Il Convegno op.76 | partitura_e_catalogo | [Pagina verificata](https://imslp.org/wiki/Il_Convegno,_Op.76_(Ponchielli,_Amilcare)) |
| 5 | Antonio Soler | Sei concerti per due organi | partitura_e_catalogo | [Pagina verificata](https://imslp.org/wiki/6_Concertos_for_Two_Organs_(Soler,_Antonio)) |
| 6 | Daniel-François-Esprit Auber | Concerto per violino AWV 165 | partitura_e_catalogo | [Pagina verificata](https://imslp.org/wiki/Violin_Concerto_in_D_major_(Auber,_Daniel_Fran%C3%A7ois_Esprit)) |
| 7 | Christian Cannabich | Concerto per violino ex Hob. VIIa:B2 | attribuzione_critica_e_partitura | [Pagina verificata](https://imslp.org/wiki/Violin_Concerto_in_B-flat_major_(Cannabich,_Christian)) |
| 8 | Costanzo Festa | Missa Se congie pris | edizione_scientifica_e_partitura | [Pagina verificata](https://imslp.org/wiki/Missa_Se_congie_pris_%28Festa%2C_Costanzo%29) |
| 9 | Camillo Sivori | Concerti violinistici n.1 e n.2 | indice_non_partitura | [Pagina verificata](https://imslp.org/wiki/List_of_works_by_Camillo_Sivori) |
| 10 | Bedřich Smetana | Má vlast JB 1:112 | partitura_e_catalogo | [Pagina verificata](https://imslp.org/wiki/M%C3%A1_Vlast_%28Smetana%2C_Bed%C5%99ich%29) |

### Decisioni e cautele
- **C. P. E. Bach**: il materiale del concerto Wq 23 è effettivamente presente nel volume III/9.7, il cui [indice critico](https://www.cpebach.org/toc/III-9-7) dà l'inizio del concerto a p. 184; la nota del grafo è stata precisata senza alterare il genere.
- **Zelter**: il concerto per viola documentato da parti per orchestra non è la sonata tastieristica in fa maggiore. Distinguere il differente organico e la documentazione.
- **Soler**: «concertos» per due organi, senza orchestra; un nodo di genere esistente può comprendere denominazioni storiche differenti.
- **Cannabich**: il concerto è stato erroneamente riferito a Haydn (Hob.VIIa:B2), ma resta collegato a Cannabich.
- **Sivori**: il censimento enumera due concerti violinistici, ma l'indice manuale segnala necessità di normalizzazione e non mostra gli spartiti; lo stato rimane prova catalografica, **non verifica della partitura**.
- **Festa**: la *Missa Se congie pris* si trova in un'edizione scientifica dell'Opera Omnia, vol. 1.

La matrice di audit indica distintamente i 10 controlli. Non sono stati creati né rimossi archi. Continuano a essere aperti gli altri riferimenti, le attribuzioni dubbie e gli audit completi di tutti i 100 cataloghi. Non sono stati toccati `main`, `relazioni.json`, lenti o motore.
