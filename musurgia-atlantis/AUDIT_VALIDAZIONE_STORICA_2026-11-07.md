# Musurgia Atlantis — Registro della validazione storico-filologica
**Data:** 7 novembre 2026  
**Branch:** `main`  
**Dataset:** `musurgia-atlantis/grafo.json` (608 nodi, 1.520 relazioni)

## Metodo
- Si controlla il **significato esatto dell'arco**, non soltanto la presenza di due nomi nella stessa pagina.
- Per l'attribuzione delle opere si preferiscono cataloghi, libretti originali, edizioni critiche e istituzioni musicologiche. I rimandi interni a Musurgia Mundi non bastano come verifica storica indipendente.
- Un arco validato riceve `historical_verified_independently: true`, `quality_gate: riscontro_storico_indipendente`, `verified_at`, una nota di verifica e URL delle fonti. Si conserva `previous_quality_gate`.
- Non si convertono in rapporti diretti le affinità di soggetto o l'appartenenza alla medesima epoca. Tali archi conservano descrizioni circostanziate.
- Non si modificano i nodi né si aggiungono connessioni non documentate.

## Lotto 01 — 23 relazioni convalidate
| Gruppo | ID verificati | Riscontro |
| --- | --- | --- |
| Vivaldi | E0712, E0715, E1066 | *Scanderbeg* RV 732 (1718; musica in gran parte perduta), quattro concerti delle *Stagioni* nell'op. 8 (1725), composizione per violino |
| Mozart e Da Ponte | E0732, E0736, E0739, E0873, E0874 | Libretti e cataloghi di *Figaro*, *Don Giovanni* e *Flauto magico*; testo di Da Ponte distinto dalla musica di Mozart |
| Gluck | E0728, L02-A10, L02-A11, L02-A12, L02-A13 | *Orfeo ed Euridice* (Vienna 1762), *Alceste* (Vienna 1767), *Paride ed Elena* (1770), libretti di Calzabigi |
| Gluck e Angiolini | L02-A01, L02-A02, L02-A03, L02-A04 | *Don Juan* (1761): musica, coreografia, ballet-pantomime e soggetto teatrale distinti |
| Don Giovanni e la tradizione | L02-A05, L02-A06 | Soggetto del Convitato di pietra; `dramma giocoso` attestato nel libretto originale del 1787 |
| Noverre e Mozart | L02-A21, L02-A22, L02-A23, L02-A24 | Trattato del 1760 e balletto *Les Petits Riens* (1778), musica attribuita solo in parte a Mozart |

## Collegamento duplicato — sospeso
`L02-A07` (Da Ponte → *Don Giovanni*) contiene un'attribuzione corretta ma duplica `E0873`. È registrato come `duplicato_di_relazione_confermata`, conserva le prove e non compare fra gli archi attivi.

## Fonti principali
- Stiftung Mozarteum, catalogo dei libretti: https://dme.mozarteum.at/DME/libretti-catalog/liste.php?r=-1&t=0
- Stiftung Mozarteum, *Die Zauberflöte* KV 620: https://dme.mozarteum.at/libretti-edition/synopse.php?end=8&idwnma=7137&line=0&v1=420&v2=421
- Gluck-Gesamtausgabe, opere teatrali: https://www.gluck-gesamtausgabe.de/baende/musikdramen.html
- Berliner Philharmoniker, *Don Juan* (1761): https://www.berliner-philharmoniker.de/en/programme-notes/christoph-willibald-gluck-don-juan-ballet/
- Centre national de la danse, *Les Petits Riens*: https://mediatheque.cnd.fr/spip.php?id_article=1182&page=les-petits-riens-article
- Bibliothèque nationale de France, manoscritto dei *Petits Riens*: https://catalogue.bnf.fr/ark:/12148/cb43999746q
- Treccani, Jean-Georges Noverre e il nuovo balletto: https://www.treccani.it/enciclopedia/jean-georges-noverre-e-il-nuovo-balletto_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- Università di Siena, Giulia Giovani (2025), *Scanderbeg* RV 732: https://usiena-air.unisi.it/handle/11365/1308834
- IMSLP, *Il cimento dell'armonia e dell'inventione*, op. 8: https://imslp.org/wiki/Il_cimento_dell%27armonia_e_dell%27inventione%2C_Op.8_%28Vivaldi%2C_Antonio%29

## Stato dopo il lotto
- Relazioni storicamente convalidate in questo lotto: **23**.
- Relazioni provvisorie nei quattro gruppi principali: **815** (363 proposte editoriali, 394 candidati, 53 da verificare, 5 non riscontrate).
- Nodi e archi complessivi invariati: **608 / 1.520**.
- Testato il grafo con Mozart ai livelli I–V: niente connessioni inferite automaticamente attraverso la semplice appartenenza ai capitoli. Restano i percorsi specifici fino al livello V.
- Le relazioni storico-tematiche non equivalgono a rapporti di influenza diretta. Per esempio il balletto di Gluck del 1761 e il *Don Giovanni* mozartiano del 1787 condividono la tradizione del soggetto, non l'identità musicale.

## Questioni non risolte e priorità successive
1. Controllo dei 53 `da_verificare`: spesso sono riscontri **editoriali** su una pagina, da verificare sul testo effettivo e non solo attraverso repertori esterni.
2. Audit delle 394 relazioni `candidato_non_fuso` e delle 363 `proposta_editoriale_revisionata`, per famiglie omogenee.
3. `L02-A25` (*Les Petits Riens* → ballet d'action): da precisare tassonomicamente; la definizione di ballet-pantomime non implica automaticamente l'identità con la forma tragico-narrativa.
4. Riesaminare i legami fra periodi, strumenti, luoghi e generi come **contesti** e non come vie automatiche per dedurre rapporti personali.
5. Non convalidare in blocco i collegamenti senza riscontri indipendenti specifici.

---

## Lotto 02 — 8 novembre 2026: chiusura delle 53 relazioni `da_verificare`

**Metodo:** verifica diretta del corpo dei file HTML nel branch `main`, distinguendo presenza editoriale, trattazione tematica, riscontro esterno, assenza di riferimento specifico e ponti generici. Le citazioni di nomi non diventano influenze storiche.

### Esito quantitativo

| Esito | Archi | IDs |
| --- | ---: | --- |
| Menzioni o trattazioni editoriali verificate sul testo | 24 | E0091, E0094, E0095, E0127, E0137, E0139, E0157, E0222, E0260, E0262, E0300, E0326, E0336, E0369, E0394, E0439, E0462, E0464, E0545, E0565, E0580, E0631, E0675, E0757 |
| Raccordo editoriale di contesto (non trattazione specifica) | 1 | E0572 |
| Relazioni storiche con fonte esterna e formulazione circoscritta | 3 | E0922, E0923, E0951 |
| Ponti intercapitolari generici sospesi | 14 | E0884, E0887, E0898, E0900, E0909, E0911, E0912, E0913, E0914, E0916, E0917, E0918, E0919, E0921 |
| Riferimenti specifici non trovati nel capitolo | 5 | E0727, E0740, E0747, E0751, E0793 |
| Formulazioni tematiche troppo ampie, sospese | 2 | E0450, E0582 |
| Altri collegamenti generici non sufficientemente motivati, sospesi | 4 | E0470, E0473, E0477, E0944 |
| **Totale** | **53** | Nessun `da_verificare` residuo |

### Precisazioni editoriali
- Barocco cita Gluck, Mozart e Beethoven per confronto, **non** come figure appartenenti storicamente all'epoca.
- Romanticismo menziona Ravel, Debussy, Bartók e i Ballets Russes per anticipazione o confronto; Nabucco è discusso come caso di ricezione politico-patriottica, ma Fidelio non è stato trovato nella stessa pagina.
- Risorgimento utilizza Beethoven come confronto, senza una trattazione riconoscibile della Sinfonia n. 9; il nodo Sinfonia n. 9 non viene promosso per semplice associazione.
- Musica nell'audiovisivo cita Verdi nel caso del Valzer brillante orchestrato da Rota per Il Gattopardo, e Beethoven nel contesto di Fantasia; non è stato trovato un riferimento specifico a Tristan und Isolde.
- Il balletto discute Verdi e Wagner, ma il titolo Orfeo ed Euridice non compare nella trattazione esaminata.
- Le relazioni fra capitoli etichettate `condivide_un_nodo_di_senso` restano sospese come **ponti storici** finché non sono dimostrati nodi intermedi motivati.

### Correzioni storico-semantiche con fonti indipendenti
- **E0922**, Monodia accompagnata → Recitar cantando: la monodia accompagnata favorisce lo stile declamato e rappresentativo, ma non è causa esclusiva della nascita dell'opera. Fonte: Anna Tedesco, «La Camerata de' Bardi», Treccani (2014); VIVIT, «Nasce il melodramma».
- **E0923**, Madrigale → Recitar cantando: sostituito il rapporto ingenuo `convive_e_si_trasforma_in` con `interagisce_con_nell_emergere_dello_stile_rappresentativo`. Il madrigale non si trasforma linearmente in recitativo.
- **E0951**, Danza moderna → Indeterminazione: delimitato ai lavori di John Cage e Merce Cunningham, senza identificare tutta la danza moderna o il teatrodanza con l'alea. Fonte: Merce Cunningham Trust, biografia e scritti sull'indipendenza fra musica e danza.
- **E0572**, Barocco → Danza nell'opera/divertissement: la pagina tratta balletto di corte e forme sceniche francesi ma non usa il termine specifico. Il termine è documentato da Treccani e Larousse; l'arco resta soltanto un raccordo editoriale.

Fonti: 
- https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.viv-it.org/schede/1-nasce-melodramma?page=0%2C0
- https://www.mercecunningham.org/about/biography/
- https://www.mercecunningham.org/the-work/writings/four-events-that-have-led-to-large-discoveries/
- https://www.treccani.it/enciclopedia/divertissement/
- https://www.larousse.fr/encyclopedie/musdico/divertissement/167254

### Situazione attuale del dataset dopo Lotto 02
- **608 nodi, 1.520 archi**, conteggi invariati.
- **0** relazioni ancora con `quality_gate = da_verificare`.
- **363** `proposta_editoriale_revisionata` e **394** `candidato_non_fuso`: sono i due insiemi principali da auditare successivamente, **757** in totale.
- **10** `non_riscontrato` e **38** `sospeso`: non sono convalide; il codice le esclude dalla navigazione ordinaria.
- Le 24 presenze editoriali verificate **non** sono state attribuite come verifiche storiche indipendenti.
- Mozart: rete dal I al V livello ancora raggiungibile, senza i falsi collegamenti tramite semplici co-citazioni.
- Vivaldi: la rete non è stata estesa inventando collegamenti non presenti.

### Prossimo lotto consigliato
Riesaminare le `proposta_editoriale_revisionata` e `candidato_non_fuso`, partendo da attribuzioni di opere e ruoli (compositore, librettista, coreografo, arrangiatore), poi forme e generi storici, poi reti di luoghi e appartenenze. Dare priorità alle relazioni che creano percorsi fra nodi di persone e capitoli. In nessun caso convalidare un gruppo solo perché condivide una fonte editoriale.

---

## Lotto 03 — 8 novembre 2026: attribuzioni di compositori, librettisti e opere

**Ambito:** origini del melodramma, *Fidelio* e teatro di Beethoven, teatro verdiano. **30 archi aggiornati**, 28 promossi per la prima volta alla verifica storico-filologica indipendente e 2 (E0771, E0875) già contrassegnati `historical_verified_independently=true` ma ancora dotati del gate provvisorio; i due stati sono stati normalizzati e nuovamente documentati.

### Relazioni e fonti

| Corpus | Archi | Fonte principale e precisazione |
| --- | --- | --- |
| Prime opere fiorentine | L01-A08, L01-A09 | Corago: *Dafne* di Rinuccini. Per la musica Jacopo Corsi e Peri sono entrambi registrati; **non** attribuzione esclusiva a Peri |
| *Euridice* di Peri e di Caccini | L01-A10, L01-A11, L01-A12, L01-A13 | Morgan Library, Corago e *Journal of Seventeenth-Century Music*: due partiture distinte sul medesimo libretto di Rinuccini; nel 1600 furono eseguiti anche brani di Caccini, la sua partitura completa fu rappresentata nel 1602 |
| L'*Orfeo* | E0704, L01-A15 | Corago, libretto originale 1607: musica di Monteverdi, testo di Alessandro Striggio il giovane |
| *La liberazione di Ruggiero* | L01-A16, L01-A17 | Uffizi e Treccani: musica di Francesca Caccini, libretto di Ferdinando Saracinelli (1625) |
| *Le creature di Prometeo* | E0743, L03-A01 | Beethoven-Haus: musica op. 43 di Beethoven e progetto coreografico di Salvatore Viganò; l'originale coreografico è perduto |
| *Fidelio/Leonore* | E0748, L03-A20, L03-A22 | Lettera di Beethoven a Treitschke e scheda Beethoven-Haus: Sonnleithner prima versione 1805, Treitschke revisione 1814, intervento del compositore nelle tre principali redazioni |
| Nona sinfonia | E0752, L03-A36 | Beethoven-Haus: op. 125 di Beethoven; finale con testi adattati dall'ode *An die Freude* di Friedrich Schiller, non scritta appositamente per la sinfonia |
| *Nabucco* | E0758, L04-A13 | Corago, libretto originale 1842: musica di Verdi, libretto di Temistocle Solera |
| *La traviata* | E0762, L04-A25 | Corago, prima alla Fenice del 1853: Verdi e Francesco Maria Piave |
| *Rigoletto* | E0765, L04-A27 | Corago, libretto originale 1851: Verdi e Piave. L'anno **1851**, non il refuso **1951** comparso in una scheda archivistica secondaria |
| *Aida* | E0768 | Corago: Verdi compositore, versi di Antonio Ghislanzoni, contributo di Auguste Mariette alla concezione del soggetto |
| *Otello* verdiano | E0771, E0875 | Corago: opera del 1887 di Verdi con libretto di Arrigo Boito, distinta dall'omonima opera di Rossini (1816) |
| *Falstaff* | E0773, L04-A32 | Corago, prima 1893: musica di Verdi e libretto di Boito |
| *La battaglia di Legnano* | L04-A09, L04-A10 | Corago, libretto a stampa 1849: musica di Verdi, testo di Salvatore Cammarano |

Fonti principali:
- Corago, *Dafne*: https://corago.unibo.it/opera/7AN0002699
- The Morgan Library, Peri *Euridice*: https://www.themorgan.org/music-manuscripts-and-printed-music/70669
- Journal of Seventeenth-Century Music, confronto Peri/Caccini: https://sscm-jscm.org/v9/no1/harness.html
- Corago, *Orfeo*: https://corago.unibo.it/libretto/DRT0017741
- Uffizi, *Liberazione di Ruggiero*: https://www.uffizi.it/opere/acquaforte3-ruggiero
- Beethoven-Haus, *Prometeo*: https://www.beethoven.de/en/work/view/4528720714924032/
- Beethoven-Haus, lettera a Treitschke: https://www.beethoven.de/en/media/view/6265659545616384/
- Beethoven-Haus, Nona: https://www.beethoven.de/en/work/view/5556714292117504/
- Corago, *Nabucco*: https://corago.unibo.it/libretto/DMBM21847
- Corago, prima de *La traviata*: https://corago.unibo.it/evento/Z000028201
- Corago, primo libretto di *Rigoletto*: https://corago.unibo.it/libretto/0000699377
- Corago, *Aida*: https://corago.unibo.it/opera/Z000008692
- Corago, *Otello*: https://corago.unibo.it/opera/Z000082306
- Corago, *Falstaff*: https://corago.unibo.it/libretto/0001084252
- Corago, *La battaglia di Legnano*: https://corago.unibo.it/libretto/0000908216

### Stato e controlli di integrità

- Le 30 relazioni riportano `quality_gate = riscontro_storico_indipendente`, note e fonti, mantenendo `previous_quality_gate` e le prove già presenti. Due erano già marcate storicamente verificate e sono state normalizzate.
- **0 nodi e 0 archi aggiunti o rimossi**: ancora **608 nodi e 1.520 archi**.
- Restano **352** `proposta_editoriale_revisionata` e **375** `candidato_non_fuso`: **727** in tutto. La restante coda riguarda forme, attribuzioni non ancora catalogate, produzioni/coreografie, luoghi, e relazioni tematiche, e non va promossa indiscriminatamente.
- Verificata la sintassi della pagina e il calcolo dei livelli I, II, IV, V per Mozart, Vivaldi, Beethoven, Verdi. Il filtro contro le co-citazioni indebite resta attivo.
- Le relazioni verso capitoli e generi non devono diventare prova di influenze biografiche. *Dafne*/*Euridice* mostrano inoltre che le attribuzioni d'autore devono rispettare collaborazioni e versioni storiche.

### Lotto successivo consigliato
Consolidare le attribuzioni operistiche ancora provvisorie (Weber, Rossini, Bellini, Wagner, Bizet e Puccini) e, separatamente, distinguere le coreografie storiche da musica e scenografie (*Swan Lake*, *Sacre*, Ravel, Ballets Russes). Verificare le fonti una per una, senza trattare come automaticamente convalidati tutti gli archi di un personaggio.

---

## Lotto 04 — 8 novembre 2026: attribuzioni operistiche Weber–Puccini

**Perimetro:** 10 archi compositore → opera, tutti inizialmente `proposta_editoriale_revisionata`. La validazione riguarda l'attribuzione della **musica**, non la convalida automatica delle altre relazioni editoriali, tematiche e di ricezione. Nessun nodo o arco è stato aggiunto o rimosso.

| Opera | Arco | Musica e libretto | Prima assoluta e fonte/adattamento |
| --- | --- | --- | --- |
| *Der Freischütz* | E0776 | Carl Maria von Weber; Friedrich Kind | Berlino, Schauspielhaus, 18 giugno 1821. Materiale narrativo dal *Gespensterbuch* (Apel/Laun) |
| *Il barbiere di Siviglia* (originariamente *Almaviva*) | E0780 | Gioachino Rossini; Cesare Sterbini | Roma, Teatro Argentina, 20 febbraio 1816. Da Beaumarchais; distinto da Paisiello |
| *Norma* | E0783 | Vincenzo Bellini; Felice Romani | Milano, Teatro alla Scala, 26 dicembre 1831. Dalla tragedia di Alexandre Soumet |
| *Guillaume Tell* | E0786 | Gioachino Rossini; Étienne de Jouy e Hippolyte Bis | Parigi, Académie royale de musique, 3 agosto 1829. Dal *Wilhelm Tell* di Schiller |
| *Tannhäuser* | E0790 | Richard Wagner, autore sia della musica sia del libretto | Dresda, teatro di corte, 19 ottobre 1845. Tradizioni e leggende medievali; versione parigina rivista del 1861 |
| *Tristan und Isolde* | E0794 | Richard Wagner, autore sia della musica sia del libretto | Monaco di Baviera, 10 giugno 1865. Ciclo medievale di Tristano e Isotta |
| *Carmen* | E0797 | Georges Bizet; Henri Meilhac e Ludovic Halévy | Parigi, Opéra-Comique, 3 marzo 1875. Da Mérimée; originale con dialoghi parlati |
| *La bohème* | E0800 | Giacomo Puccini; Luigi Illica e Giuseppe Giacosa | Torino, Teatro Regio, 1 febbraio 1896. Dal materiale narrativo e teatrale di Henri Murger |
| *Le Villi* | E0803 | Giacomo Puccini; Ferdinando Fontana | Milano, Teatro Dal Verme, 31 maggio 1884. Leggenda delle Willi attraverso Heine; revisioni successive |
| *Turandot* | E0806 | Giacomo Puccini; Giuseppe Adami e Renato Simoni | Milano, Teatro alla Scala, 25 aprile 1926. Da Gozzi (anche attraverso Schiller/Maffei); incompiuta nel 1924 |

### Distinzioni filologiche da preservare
- `Der Freischütz`: il rifacimento francese dell'Opéra con recitativi di Berlioz (1841) è una fase diversa dall'originale berlinese con dialoghi.
- `Il barbiere`: *Almaviva, ossia L'inutile precauzione* è il titolo originario rossiniano; Paisiello (1782) è opera distinta sul medesimo soggetto.
- `Guillaume Tell`: la coreografia della produzione parigina è di Jean-Louis Aumer; non promuovere il rapporto con il balletto a identità di genere né ad attribuzione compositiva.
- `Tannhäuser`: prima Dresda 1845; riadattamento per Parigi 1861, con ampliamento della scena del Venusberg e differenti mediazioni linguistiche/teatrali.
- `Tristan`: il libretto è di Wagner; la tradizione letteraria medievale non implica partecipazione diretta degli autori medievali alla creazione operistica.
- `Carmen`: i recitativi di Guiraud per Vienna 1875 sono un rifacimento postumo e non appartengono alla versione presentata il 3 marzo 1875.
- `La bohème`: il soggetto di Murger è condiviso con l'opera di Leoncavallo; le due partiture sono autonome.
- `Le Villi`: opera-ballo, non balletto autonomo; successione della versione originale 1884, versione in due atti 1884 e successive revisioni 1885/1889.
- `Turandot`: la prima rappresentazione del 25 aprile 1926 terminò dopo la morte di Liù, **senza** il finale di Alfano. Le diverse conclusioni di Alfano e Berio restano attribuite ai rispettivi autori.

### Fonti catalografiche e istituzionali per gli archi modificati
- **E0776:** BnF https://catalogue.bnf.fr/ark:/12148/cb139138786 ; Staatsoper Berlin https://www.staatsoper-berlin.de/en/veranstaltungen/der-freischuetz.2745/
- **E0780:** Rossini Opera Festival https://www.rossinioperafestival.it/soggetti/almaviva-ossia-linutile-precauzione/ ; BnF https://catalogue.bnf.fr/ark:/12148/cb13918009c
- **E0783:** Corago https://corago.unibo.it/opera/Z000001048 ; Opera di Roma https://archiviostorico.operaroma.it/opera/norma/
- **E0786:** BnF, libretto https://catalogue.bnf.fr/ark:/12148/cb41887191r ; BnF, spettacolo https://catalogue.bnf.fr/ark:/12148/cb396843363
- **E0790:** BnF, catalogo WWV 70 https://catalogue.bnf.fr/ark:/12148/cb13920776q ; BnF, versione parigina https://catalogue.bnf.fr/ark:/12148/cb396844758
- **E0794:** BnF, catalogo WWV 90 https://catalogue.bnf.fr/ark:/12148/cb13920779r.public ; BnF, parti https://catalogue.bnf.fr/ark:/12148/cb43534813w
- **E0797:** BnF, catalogo GB 9 https://catalogue.bnf.fr/ark:/12148/cb12241834c ; BnF, prima https://catalogue.bnf.fr/ark:/12148/cb42224395t
- **E0800:** catalogo Puccini https://catalog.puccini.it/works/la-boheme ; note https://catalog.puccini.it/works/la-boheme/notes ; archivio Opera di Roma https://archiviostorico.operaroma.it/opera/la-boheme/
- **E0803:** catalogo Puccini https://catalog.puccini.it/works/60-le-villi ; note https://catalog.puccini.it/works/60-le-villi/notes ; Corago, libretto https://corago.unibo.it/libretto/0000198123
- **E0806:** catalogo Puccini https://catalog.puccini.it/works/turandot ; note critiche https://catalog.puccini.it/works/turandot/notes ; edizioni e completamenti https://catalog.puccini.it/works/turandot/sources/91.D.7

### Stato e integrità dopo il Lotto 4
- **10 relazioni storiche convalidate**: E0776, E0780, E0783, E0786, E0790, E0794, E0797, E0800, E0803, E0806.
- Per ciascuna: `quality_gate = riscontro_storico_indipendente`, `historical_verified_independently = true`, `verification_status`, `verified_at`, `verification_note`, `evidence_urls`, `previous_quality_gate`, `previous_description`.
- Rimangono **342** proposte editoriali revisionate e **375** candidati non fusi, in totale **717** provvisorie. **0** `da_verificare`.
- Nodi e archi immutati: **608 / 1.520**. ID degli archi univoci, estremi presenti nel set dei nodi, serializzazione JSON valida.
- Nessun arco `analizza_o_richiama` viene convalidato per il solo fatto che l'opera o il compositore sia ben documentato; tutte le attribuzioni librettistiche non già presenti come archi rimangono documentate nel registro e nelle note, non introdotte automaticamente.

### Questioni aperte
1. **Discrepanza cronologica da non risolvere per congettura:** la cronologia critica Puccini data la prima della versione in due atti delle *Villi* al **27 dicembre 1884**, mentre una scheda Corago del libretto torinese riporta **26 dicembre 1884**. Per il Lotto 4 è validata soltanto la prima assoluta del **31 maggio 1884**; l'evento della revisione resta da collazionare.
2. Conservare separati i rapporti di versioni e completamenti dai dieci archi compositivi: le fonti danno informazioni ulteriori, ma non impongono archi mancanti.
3. Prossimi lotti: librettisti e fonti letterarie rappresentati come nodi; successivamente coreografie e relazioni storico-estetiche, senza promozione massiva.

### Pubblicazione
- Commit dataset su `main`: **5ac70cad6abdcb06e9cd9f96372be6618c036d7d**
- Commit registro su `main`: coincide con il commit di aggiornamento di questo documento, consultabile dalla cronologia del file.


### Verifica percorsi 1–5 sul dataset pubblicato
Test effettuato sull'ultima versione remota di `grafo.json` mediante riproduzione della logica di espansione di `buildVisible()` da `index.html`: filtri predefiniti `trattazione` + `menzione`, nessuna attraversata indiretta tramite capitoli e blocco delle relazioni editoriali generiche oltre il primo livello. Non è un collaudo visivo sul browser.

| Nodo iniziale | I | II | III | IV | V | Profondità massima |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Mozart | 13 | 4 | 2 | 3 | 3 | 5 |
| Vivaldi | 6 | 0 | 0 | 0 | 0 | 1 |
| Weber | 2 | 0 | 0 | 0 | 0 | 1 |
| Rossini | 8 | 2 | 3 | 6 | 3 | 5 |
| Bellini | 4 | 0 | 0 | 0 | 0 | 1 |
| Wagner | 8 | 0 | 0 | 0 | 0 | 1 |
| Bizet | 3 | 1 | 1 | 0 | 0 | 3 |
| Puccini | 9 | 3 | 2 | 0 | 0 | 3 |

Gli archi compositivi E0776, E0780, E0783, E0786, E0790, E0794, E0797, E0800, E0803, E0806 sono tutti classificati dall'interfaccia come `trattazione` e quindi accettati dal filtro iniziale. I percorsi di Mozart e Rossini raggiungono ancora il quinto livello.

**Limite da correggere editorialmente in seguito, non con falsi archi:** per Vivaldi, Weber, Bellini e Wagner non emergono attualmente catene specifiche di secondo livello con i filtri standard. La profondità massima selezionabile (5) non implica la presenza di un percorso effettivo di quella lunghezza per ogni compositore. L'arricchimento della rete richiederà legami storici specifici con librettisti, fonti, opere o altre persone, confermati uno per uno.

**Verifiche remote:** commit del dataset `5ac70cad6abdcb06e9cd9f96372be6618c036d7d`; il file remoto è JSON valido con 608 nodi, 1.520 link, ID degli archi univoci, nessun estremo orfano; 342 proposte, 375 candidati, 0 `da_verificare`. I file `index.html` e `compat-graph.js` sono stati letti per controllo, non modificati.


---

## Lotto 05 — 8 novembre 2026: librettisti, fonti letterarie e adattamenti

**Obiettivo:** collegamenti specifici tra autore del testo, opera musicale, fonte letteraria e redazione. La convalida non deve scambiare una fonte di soggetto con l'autore del libretto, né moltiplicare archi equivalenti.

**Esito:** 17 relazioni con riscontro storico indipendente; 2 duplicati sostanziali riconosciuti e sospesi. Nessun nodo o arco aggiunto/rimosso.

| Nucleo | Arco | Esito e distinzione |
| --- | --- | --- |
| Gluck, *Orfeo* 1762 | E0876 | Calzabigi è il librettista della versione originale italiana viennese |
| Gluck, *Orphée* 1774 | L02-A19 | Pierre-Louis Moline è l'adattatore del libretto francese parigino; redazione distinta |
| Antecedente di *Fidelio* | L03-A18 | Bouilly firma *Léonore, ou l'amour conjugal* (1798), testo già musicato da Gaveaux. Precisato il verbo `scrive_libretto_originale_di` |
| *Fidelio* e Bouilly | L03-A19 | Il soggetto di *Fidelio* deriva dall'opera francese; non implica collaborazione biografica Bouilly–Beethoven |
| *Leonore* 1806 | L03-A21 | Stephan von Breuning rivede il libretto della seconda redazione |
| *Egmont* | L03-A26, L03-A27 | Goethe autore del dramma; Beethoven delle musiche di scena op.84 (1809–1810), distinte |
| *An die ferne Geliebte* | L03-A41 | I testi poetici sono di Alois Jeitteles; i testimoni originari e l'eventuale revisione di Beethoven richiedono cautela |
| *La traviata* | L04-A26 | Alexandre Dumas figlio è l'autore della fonte letteraria; il libretto operistico è di Francesco Maria Piave |
| *Don Carlos* francese 1867 | L04-A55, L04-A56 | Joseph Méry e Camille du Locle coautori del testo francese, da Schiller |
| *Don Carlo* italiano | L04-A57, L04-A58 | Achille de Lauzières traduce il francese; Angelo Zanardini rivede l'italiano per la redazione scaligera 1884 |
| *Show Boat* (1927) | E0877 | Oscar Hammerstein II, book e lyrics; musica di Jerome Kern; soggetto dal romanzo di Edna Ferber |
| *Oklahoma!* (1943) | E0878 | Oscar Hammerstein II, book e lyrics; musica di Richard Rodgers; fonte *Green Grow the Lilacs* di Lynn Riggs |
| *West Side Story* (1957) | L06-A036, L06-A037 | Stephen Sondheim firma le lyrics, Arthur Laurents il book; Bernstein la musica, Robbins l'ideazione e la coreografia |

### Duplicati individuati e sospesi

- **L06-A028** (Hammerstein II → *Show Boat*, `scrive_book_e_lyrics_di`): duplica l'arco canonico e verificato **E0877**, già attributivo dello stesso book e lyrics.
- **L06-A032** (Hammerstein II → *Oklahoma!*, `scrive_book_e_lyrics_di`): duplica l'arco canonico e verificato **E0878**.

Entrambi ricevono `quality_gate=sospeso`, `verification_status=duplicato_di_relazione_confermata`, `duplicate_of`, `previous_quality_gate` e `previous_description`. **Le prove e gli ID originari sono conservati**, ma gli archi non entrano più nei percorsi attivi.

### Fonti indipendenti consultate (per arco)

- E0876 — Gluck-Gesamtausgabe, GluckWV 1.30, originali viennesi e poeta: https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html
- L02-A19 — Gluck-Gesamtausgabe, *Orphée et Eurydice* Parigi 1774, frontespizio della partitura con parole di Moline: https://www.gluck-gesamtausgabe.de/en/gwv/werkregister/eintrag/work-65.html
- L03-A18 — Beethoven-Haus, libretto di Bouilly: https://www.beethoven.de/en/media/view/4614156506365952?page=0 ; storico musicale https://www.lvbeethoven.org/hess109/
- L03-A19, L03-A21 — Beethoven-Haus, cronologia dell'op.72: https://www.beethoven.de/en/work/view/4984496705241088/ ; Metropolitan Opera, fasi 1805/1806/1814: https://www.metopera.org/discover/education/educator-guides/fidelio/composer-timeline/
- L03-A26, L03-A27 — Beethoven-Haus, *Egmont* op.84: https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICA7Of6jwsM/ ; Berliner Philharmoniker: https://www.berliner-philharmoniker.de/en/programme-notes/ludwig-van-beethoven-incidental-music-to-goethes-egmont-op-84/
- L03-A41 — Beethoven-Haus, autografo e problemi della tradizione testuale: https://www.beethoven.de/en/media/view/6507161798574080/Ludwig%2Bvan%2BBeethoven%2C%2B%26quot%3BAn%2Bdie%2Bferne%2BGeliebte%26quot%3B%2C%2BLiederkreis%2Bf%C3%BCr%2BSingstimme%2Bund%2BKlavier%2Bop.%2B98%2C%2BAutograph?fromWork=5564103917568000
- L04-A26 — Teatro La Fenice: https://www.teatrolafenice.it/event/giuseppe-verdi-la-traviata/ ; BnF, opera e soggetto: https://catalogue.bnf.fr/ark:/12148/cb13920589h
- L04-A55–L04-A58 — Royal Opera House Collections, 1867 e 1884: https://rohcollections.org.uk/Work.aspx?work=12939 ; https://rohcollections.org.uk/work.aspx?work=516 ; Morgan Library, libretto a stampa del 1884: https://www.themorgan.org/music-manuscripts-and-printed-music/70134
- E0877 — Catalogo ufficiale Rodgers & Hammerstein, *Show Boat*: https://rodgersandhammerstein.com/show/show-boat/
- E0878 — Catalogo ufficiale Rodgers & Hammerstein, *Oklahoma!*: https://rodgersandhammerstein.com/show/oklahoma/
- L06-A036, L06-A037 — Library of Congress, *West Side Story: Birth of a Classic*: https://www.loc.gov/exhibits/westsidestory/westsidestory-overview.html ; catalogo partiture: https://guides.loc.gov/leonard-bernstein/published-scores

### Principali cautele filologiche
1. *Orfeo* italiano (1762) e *Orphée* francese (1774) non hanno lo stesso libretto in senso testuale: Calzabigi e Moline ricoprono incarichi diversi.
2. La vicenda di Bouilly era già stata musicata da Gaveaux nel 1798. Beethoven riprese il soggetto con collaboratori tedeschi successivi.
3. *Don Carlos*: la lingua francese dell'originale non viene annullata dalle traduzioni italiane. Il lavoro di Zanardini riguarda la redazione del 1884, non l'atto fondativo del 1867.
4. *La traviata*: l'adattamento della pièce di Dumas da parte di Piave costituisce mediazione drammaturgica reale; fonte letteraria ≠ librettista.
5. *Show Boat*, *Oklahoma!*, *West Side Story*: book, lyrics e musica devono rimanere attribuzioni distinte.

### Stato dopo il Lotto 5
- Convalide indipendenti introdotte **17**; archi duplicati sospesi **2**.
- `riscontro_storico_indipendente` **83** (il totale dei flag booleani storici resta distinto); `proposta_editoriale_revisionata` **339**; `candidato_non_fuso` **359**; somma provvisori **698**; `da_verificare` **0**.
- Dataset invariato quanto a dimensione: **608 nodi, 1.520 archi**. Nessun nodo orfano, ID univoci. Integrità del JSON verificata prima del commit.
- Verificare dopo la pubblicazione i percorsi ai livelli I–V, in particolare la presenza di raccordi *Fidelio → Bouilly*, *Gluck → Orphée/Calzabigi*, *Verdi → Don Carlos* e *Hammerstein → Show Boat/Oklahoma!* senza duplicazioni.

### Questioni aperte
- I collegamenti *Don Carlos* di natura editoriale o storiografica vanno trattati con maggiore granularità: redazioni, traduzioni e versione 1886 non sono intercambiabili.
- Verificare se i nodi delle fonti letterarie richiedano una classificazione distinta da «opera» e se i ponti possano essere percorsi dal motore di ricerca senza attraversare capitoli.
- Proseguire sui librettisti e collaboratori ancora candidati per il teatro del primo Novecento, il balletto e la scena audiovisiva; nessuna convalida massiva.

### Commit
- Dataset: `9f7b46f0a7e573163e067db0b3986c3bada00027`.
- Registro: aggiornato nel commit di questa sezione.


### Regressione livelli post-Lotto 5 (dataset remoto, filtri standard)

Verifica effettuata dopo i commit sul dataset remoto con riproduzione dell'espansione in `musurgia-atlantis/index.html`. Attivi `trattazione` e `menzione`; gli stati `sospeso` e i candidati restano esclusi. **Si tratta di test della logica sui dati, non di collaudo visivo nel browser.**

| Nodo | Livelli I–V prima del Lotto 5 | Livelli I–V dopo il Lotto 5 |
| --- | --- | --- |
| Gluck | 10 / 8 / 5 / 3 / 3 | 10 / 8 / 6 / 3 / 3 |
| Beethoven | 11 / 6 / 5 / 0 / 0 | 11 / 7 / 6 / 0 / 0 |
| Verdi | 13 / 5 / 1 / 2 / 1 | 13 / 6 / 1 / 2 / 1 |
| Hammerstein II | 2 / 0 / 0 / 0 / 0 | 4 / 0 / 0 / 0 / 0 |
| Calzabigi | 4 / 1 / 2 / 7 / 5 | 5 / 5 / 5 / 3 / 2 |
| Wagner | 8 / 0 / 0 / 0 / 0 | 8 / 0 / 0 / 0 / 0 |
| Rossini | 8 / 2 / 3 / 6 / 3 | 8 / 2 / 3 / 6 / 4 |

La modifica non elimina i percorsi di quinto livello di Gluck, Calzabigi, Verdi e Rossini; Beethoven si ferma al terzo e Wagner al primo, a causa della rete attualmente documentata, non per un'eccezione costruita ad hoc.

**Problema strutturale aperto:** gli archi `L03-A18`, `L03-A19`, `L03-A26`, `L03-A27` collegano correttamente testi e persone, ma i loro nodi letterari sono classificati come `documento-storico`. La funzione `atlasMayBridge()` dell'interfaccia, oggi, consente l'attraversamento indiretto soltanto da `persona`, `opera` e `nodo-di-senso`. Di conseguenza un documento storico è visibile come estremo ma non può ancora fare da ponte in profondità; inoltre la categorizzazione `grp()` può mostrarlo come `altro`. Questa limitazione **non è stata corretta nel presente lotto**, dedicato al dataset e al registro. Prima di estendere il rendering, definire un trattamento coerente per fonti letterarie e documenti storici, evitando che i documenti generici diventino scorciatoie fra compositori.

**Controllo d'integrità remoto:** 608 nodi; 1.520 relazioni; ID univoci; nessun estremo mancante. `riscontro_storico_indipendente=83`, flag `historical_verified_independently=true` su 118 archi (non equivalenti per lo storico degli audit); 339 proposte editoriali e 359 candidati non fusi, 698 provvisorie. I due doppioni sospesi `L06-A028` e `L06-A032` sono classificati correttamente come `sospeso` dalla funzione `tier()` e non sono attivi nel rendering standard.


---

## Lotto 06 — 8 novembre 2026: prime coreografiche, Ballets Russes e autorialità collettiva

**Perimetro:** 37 candidati sottoposti a riscontro storico indipendente e promossi a `riscontro_storico_indipendente`; una relazione generica sospesa con rinvio motivato a una versione specifica. Nessun nodo o arco aggiunto o eliminato. Nessuna modifica ad altre pagine o ai menu.

### Nuclei e identificativi verificati

| Nucleo | Archi aggiornati | Distinzione accertata |
| --- | --- | --- |
| Debussy / Mallarmé / *Faune* (1894 / 1912) | L05-A013, L05-A014, L05-A015, L05-A016 | Poema di Mallarmé → partitura concertistica di Debussy del 1894 → coreografia di Nižinskij 29 maggio 1912; nessuna commissione retroattiva della musica per il balletto |
| *Jeux* (1913) | L05-A019, L05-A020, L05-A021, L05-A022 | Debussy musica, Nižinskij soggetto e coreografia, Diaghilev commissione, Bakst scene e costumi; prima 15 maggio 1913 al Théâtre des Champs-Élysées |
| *L'uccello di fuoco* (1910) | L05-A024, L05-A025, L05-A026 | Stravinskij musica, Fokine soggetto/coreografia, Diaghilev commissione/produzione; prima 25 giugno 1910 all'Opéra di Parigi |
| *Petrushka* (1911) | L05-A027, L05-A028, L05-A029 | Stravinskij musica e soggetto con Benois, Fokine coreografia, Benois scene e costumi; prima 13 giugno 1911 |
| *La sagra della primavera* (1913) | L05-A030, L05-A031, L05-A032, L05-A033, L05-A034, L05-A035 | Stravinskij musica, Nižinskij coreografia, Roerich scene/costumi e collaborazione al soggetto, Rambert assistente/testimone, Diaghilev produttore, Monteux direttore; prima 29 maggio 1913 |
| *La sagra della primavera* di Pina Bausch (1975) | L05-A036, L05-A037, L05-A038 | Nuova coreografia di Bausch sulla stessa partitura di Stravinskij, non ripresa integrale dei passi originali del 1913; prima 3 dicembre 1975, Wuppertal |
| *Fantasia* (1940) | L05-A039 | Riutilizzo audiovisivo della musica della *Sagra*, non la stessa produzione coreografica |
| *Daphnis et Chloé* (1912) | L05-A040, L05-A041, L05-A042, L05-A043, L05-A044 | Ravel musica, Fokine coreografia e collaborazione al soggetto, Diaghilev commissione, Monteux direzione, Bakst apparati visivi; prima 8 giugno 1912 al Théâtre du Châtelet |
| *Boléro* (1928) | L05-A047, L05-A048, L05-A049, L05-A050 | Ravel composizione, Ida Rubinstein commissione e interpretazione, Bronislava Nižinskaja coreografia; prima all'Opéra di Parigi il 22 novembre 1928 |
| *Parade* (1917) | L05-A058, L05-A059, L05-A060, L05-A061 | Satie musica, Cocteau soggetto, Picasso costumi/scenografia/sipario, Massine coreografia; prima 18 maggio 1917 al Théâtre du Châtelet |

### Arco sospeso senza cancellazione

- `E0879` (Nižinskij → *La sagra della primavera*; `coreografa_la_versione_del_1913`) aveva `proposta_editoriale_revisionata`. L'attribuzione è **vera nel contenuto**, ma il nodo di arrivo era l'opera-base e non la prima coreografia specifica. Il medesimo rapporto è ora convalidato e rappresentato più precisamente dall'arco `L05-A031` (Nižinskij → prima coreografia del 1913). `E0879` riceve `quality_gate=sospeso`, `verification_status=ridondanza_della_versione_coreografica_specifica`, `more_specific_edge=L05-A031`; conserva `previous_quality_gate`, `previous_description`, evidenze e motivo della sospensione. Non è un duplicato con gli stessi estremi.

### Riscontri indipendenti principali

- Conservatoire de Paris, rapporto fra poema di Mallarmé, partitura del 1894 e balletto del 1912: https://www.conservatoiredeparis.fr/fr/enquete-autour-du-prelude-lapres-midi-dun-faune-de-debussy
- Metropolitan Museum, coreografia del Fauno del 1912: https://www.metmuseum.org/art/collection/search/285965
- Philharmonie de Paris, *Jeux*, coreografia/commissione/costumi/prima: https://pad.philharmoniedeparis.fr/0769157-jeux-de-claude-debussy.aspx?_lg=fr-FR
- BnF, scheda di spettacolo di *Jeux*, 15 maggio 1913: https://catalogue.bnf.fr/ark:/12148/cb40175015b
- Library of Congress, *The Firebird*: https://www.loc.gov/collections/ballets-russes-de-serge-diaghilev/articles-and-essays/works-listing-by-title/f/
- Library of Congress, *Petrouchka*: https://www.loc.gov/collections/bronislava-nijinska/articles-and-essays/petrouchka/
- Library of Congress, *Le Sacre* e note di Marie Rambert: https://www.loc.gov/collections/bronislava-nijinska/articles-and-essays/le-sacre-du-printemps/
- Philharmonie de Paris, *Le Sacre*, ruoli, cronologia, direzione Monteux: https://pad.philharmoniedeparis.fr/0743340-le-sacre-du-printemps-de-igor-stravinski.aspx?_lg=fr-FR
- Archivio ufficiale Pina Bausch, *The Rite of Spring*: https://www.pinabausch.org/work/sacr ; stagione https://www.pinabausch.org/season/season1975_76
- Library of Congress, *Fantasia* (1940): https://www.loc.gov/exhibits/music-and-animation/fantasia-1940.html
- IRCAM, *Daphnis et Chloé*, commissione, libretto, data, direzione, apparati: https://resources.ircam.fr/en/work/daphnis-et-chloe-1
- BnF, catalogo Boléro O 81, prima coreografica: https://catalogue.bnf.fr/ark:/12148/cb13917708q
- Philharmonie de Paris, *Boléro*, prima e ruoli: https://pad.philharmoniedeparis.fr/0824129-bolero-de-maurice-ravel.aspx?_lg=fr-FR
- Library of Congress, *Parade* nel catalogo Ballets Russes: https://www.loc.gov/collections/ballets-russes-de-serge-diaghilev/articles-and-essays/works-listing-by-title/p/
- Library of Congress, programma storico di *Parade* con responsabilità: https://tile.loc.gov/storage-services/public/music/musihas-200181871/musihas-200181871.pdf

### Discordanze, cautele e lavori ancora aperti

1. **Data di *Le Sacre du printemps*:** la pagina dedicata nella collezione LOC e la Philharmonie de Paris danno **29 maggio 1913**; una didascalia del materiale espositivo LOC presenta **28 maggio 1913**. Si adotta il 29 maggio come data documentata maggiormente coerente e si conserva la discordanza per futuro controllo sui programmi originali. Nessun arco prova la recuperabilità perfetta della coreografia.
2. **Data di *Boléro*:** la BnF conferma la prima scenica all'Opéra di Parigi il 22 novembre 1928, distinta dalle esecuzioni concertistiche successive. Una scheda sintetica IRCAM colloca ambiguamente «concerts Lamoureux» in corrispondenza del campo della prima; non utilizzare tale ambiguità per trasformare la prima teatrale in concerto.
3. Non sono stati esaminati in questo lotto il sistema storico 1877/1895 del *Lago dei cigni*, *La bella addormentata*, *Lo schiaccianoci*, le suites di *Daphnis*, *La Valse* e *Il mandarino meraviglioso*. Rimangono candidati; nessuna convalida presunta.
4. *La Valse* reca nel dataset una nota che menziona un allestimento ad Anversa nel 1926, mentre Bru Zane presenta come primo allestimento scenico quello parigino del 1929. La discordanza richiede collazione dei materiali, dunque L05-A053–L05-A055 restano **non convalidati**.
5. La categoria editoriale «lavoro collettivo» non autorizza relazioni di collaborazione diretta fra tutti i soggetti della produzione: ogni rapporto deve essere rappresentato attraverso il lavoro specifico.

### Controlli prima della pubblicazione

- Dataset JSON serializzato e riparsato; nodi **608**, archi **1.520**, ID degli archi univoci, nessun estremo mancante.
- Le 37 nuove relazioni recano `previous_quality_gate`, `previous_description`, `verification_note`, `evidence_urls`, `verification_status`, `verified_at` e `historical_verified_independently=true`.
- `riscontro_storico_indipendente` **120**; `proposta_editoriale_revisionata` **338**; `candidato_non_fuso` **322**; somma provvisori **660**; `da_verificare` **0**.
- I conteggi del flag `historical_verified_independently=true` restano distinti da quelli di `quality_gate`.
- Integrità dei livelli, comportamento browser e simulazione esplorativa: da verificare sul remoto dopo i commit.

### Pubblicazione
- Dataset su main: `93f32c00086c5965dcc351da5a7361d9ad977848`.
- Registro: commit di aggiornamento della presente sezione, consultabile dalla cronologia del file.


### Regressione livelli post-Lotto 6 (dataset remoto)

Verifica effettuata mediante simulazione della logica di esplorazione di `musurgia-atlantis/index.html` sui dati prima e dopo il Lotto 6. Filtri standard: `trattazione` e `menzione`; candidati e archi sospesi esclusi. Le relazioni editoriali generiche e i capitoli non fungono da ponti dal livello II in poi. **È un test dei percorsi sui dati, non un collaudo visuale del renderer nel browser.**

| Nodo iniziale | Prima I / II / III / IV / V | Dopo I / II / III / IV / V | Massimo dopo |
| --- | --- | --- | --- |
| Igor Stravinskij | 4 / 0 / 0 / 0 / 0 | 6 / 3 / 4 / 7 / 4 | V |
| Claude Debussy | 4 / 0 / 0 / 0 / 0 | 6 / 5 / 4 / 6 / 3 | V |
| Maurice Ravel | 4 / 1 / 1 / 0 / 0 | 5 / 3 / 2 / 0 / 0 | III |
| Vaclav Nižinskij | 1 / 0 / 0 / 0 / 0 | 4 / 8 / 6 / 3 / 1 | V |
| Sergej Diaghilev | 1 / 0 / 0 / 0 / 0 | 5 / 10 / 5 / 3 / 0 | IV |
| Pablo Picasso | 0 / 0 / 0 / 0 / 0 | 1 / 3 / 0 / 0 / 0 | II |
| Pina Bausch | 1 / 0 / 0 / 0 / 0 | 2 / 1 / 2 / 5 / 5 | V |
| Pierre Monteux | 0 / 0 / 0 / 0 / 0 | 2 / 8 / 6 / 5 / 1 | V |
| Bronislava Nižinskaja | 1 / 0 / 0 / 0 / 0 | 2 / 1 / 2 / 1 / 1 | V |

Le nuove profondità documentano percorsi attraverso produzioni e opere specifiche, non un'autorizzazione a inferire influenze personali dirette fra i collaboratori. Il collegamento generico `E0879` rimane sospeso nel filtro predefinito; quello specifico `L05-A031` è attivo.

**Controllo remoto:** `main` dopo il commit del registro Lotto 6; 608 nodi, 1.520 archi, ID univoci, nessun estremo orfano. 120 nello stato `riscontro_storico_indipendente`, 155 con flag booleano storico, 338 proposte e 322 candidati (660 in tutto). Restano 0 `da_verificare`.


---

## Lotto 07 — 8 novembre 2026: Čajkovskij, suites di Daphnis, versioni di La Valse

**Perimetro:** 19 archi candidati verificati singolarmente e passati a `riscontro_storico_indipendente`. Nessun nodo o arco eliminato o aggiunto. Prima, consultato il branch remoto `main` al commit `bbe937ddd0a4a0c7fad6c7808550b80076f39e3e`. Nessuna modifica a capitoli, mappe o menu esterni ad Atlantis.

### Relazioni verificate

| Gruppo | ID | Precisazione musicologica |
| --- | --- | --- |
| Lago dei cigni, Mosca 1877 | L05-A001, L05-A002, L05-A003 | Reisinger coreografia, Čajkovskij musica, prima al Bol'šoj 20 febbraio OS / 4 marzo NS 1877 |
| Lago dei cigni, San Pietroburgo 1895 | L05-A004, L05-A005, L05-A006, L05-A007, L05-A008 | Ripresa Petipa (atti I, III), Ivanov (atti II, IV), rielaborazione musicale e direzione Drigo; prima 15 gennaio OS / 27 gennaio NS 1895 |
| La bella addormentata | L05-A009, L05-A010 | Čajkovskij musica, Petipa coreografia; libretto/scenario Vsevoložskij e Petipa da Perrault; prima 3 gennaio OS / 15 gennaio NS 1890 |
| Lo schiaccianoci | L05-A011, L05-A012 | Ivanov coreografo prevalente della prima 1892 (6 dicembre OS / 18 dicembre NS); Petipa predispone scenario e piano coreografico. Evitare di attribuire con sicurezza ogni singolo passo a Ivanov |
| Daphnis et Chloé, suites | L05-A045, L05-A046 | La Suite n. 1 (O 57a) fu eseguita in concerto già il 2 aprile 1911, prima del balletto integrale; la Suite n. 2 (O 57b), pubblicata nel 1913, deriva dalla parte conclusiva. Sono opere estratte, non repliche sceniche |
| La Valse, composizione e rifiuto | L05-A051, L05-A052 | Ravel compone l'opera orchestrale nel 1919–1920, presentata in concerto il 12 dicembre 1920; Diaghilev incoraggia/commissiona ma rifiuta la produzione teatrale |
| La Valse, versione Nižinskaja–Rubinstein | L05-A053, L05-A054, L05-A055 | Coreografia di Bronislava Nižinskaja per la compagnia di Ida Rubinstein nel 1929, spettacolo parigino del 23 maggio (BnF). L'allestimento non coincide con la prima coreografia ad Anversa del 1926 di Sonia Korty |

**Campi:** ogni arco convalidato conserva `previous_quality_gate`, `previous_description`, `verification_note`, `evidence_urls`, `verified_at`, `verification_status` e `historical_verified_independently=true`. Dove il verbo storico era troppo generico, è conservato `previous_relation`: L05-A011 (coreografia prevalente di Ivanov), L05-A012 (scenario/piano coreografico di Petipa), L05-A045 e L05-A046 (suite orchestrale estratta).

### Fonti principali

- Teatro Mariinskij, versioni del Lago 1877 e 1895: https://www.mariinsky.ru/en/playbill/playbill/2019/3/30/2_1900/
- Petipa Society, première nei calendari giuliano/gregoriano: https://petipasociety.com/swan-lake/
- Tchaikovsky Research, storia del Lago e revisioni musicali: https://en.tchaikovsky-research.net/pages/Swan_Lake ; https://en.tchaikovsky-research.net/pages/Riccardo_Drigo
- Royal Ballet and Opera, Lev Ivanov, atti coreografici: https://www.rbo.org.uk/people/lev-ivanov
- Teatro Mariinskij, Bella addormentata 1890: https://site.mariinsky.ru/en/playbill/repertoire/ballet/spkras1/
- Tchaikovsky Research, Bella addormentata: https://en.tchaikovsky-research.net/pages/The_Sleeping_Beauty
- Royal Ballet Collections, Schiaccianoci, sceneggiatura Petipa e coreografia Ivanov: https://www.rohcollections.org.uk/work.aspx?work=1180
- Tchaikovsky Research, manoscritto del piano Petipa: https://en.tchaikovsky-research.net/pages/The_Nutcracker
- BnF, balletto Daphnis e suites O57a/O57b: https://catalogue.bnf.fr/ark:/12148/cb139177228 ; https://catalogue.bnf.fr/ark:/12148/cb13917723m ; https://catalogue.bnf.fr/ark:/12148/cb13917724z
- Philharmonie de Paris, suites Daphnis: https://pad.philharmoniedeparis.fr/CIMU/ermes/player.aspx?id=0933899
- Breitkopf & Härtel, edizione critica delle suites: https://www.breitkopf.com/en/work/20425/daphnis-et-chloe
- Bru Zane, Ravel La Valse, commissione 1920 e 1929: https://www.bruzanemediabase.com/it/esplorazione/opere/valse-maurice-ravel
- Repertorio raveliano con bibliografia Nichols (2011) / Baeck (2011), Anversa 1926: https://maurice-ravel.net/valse.htm
- BnF, spettacolo La Valse a Parigi 23 maggio 1929: https://catalogue.bnf.fr/ark:/12148/cb47523610d
- Festival Diaghilev (programma 2024, pp. 24–25), 1926 Anversa e gennaio 1929 Monte-Carlo: https://diaghilevfest.ru/upload/iblock/345/3450520d3d885d865448183e661c7ab9.pdf

### Precisazioni e questioni aperte

1. **Date del Lago dei cigni:** il Mariinskij riporta 20 febbraio 1877 e 15 gennaio 1895 in calendario giuliano. Le date gregoriane sono rispettivamente **4 marzo 1877** e **27 gennaio 1895**. La differenza non indica due prime differenti.
2. **Schiaccianoci:** distinzione tra paternità dello scenario, piano delle danze e coreografia effettivamente eseguita. La distribuzione di tutti i singoli numeri tra Petipa e Ivanov non è pacifica. Verbi raffinati in L05-A011 e L05-A012 senza attribuzioni assolute improprie.
3. **Daphnis, Suite n. 2:** la *prima esecuzione* è discordante: Berliner Philharmoniker indica **29 marzo 1914**, Philharmonie de Paris ipotizza **30 aprile 1914** e il programma del Festival Diaghilev menziona **22 giugno 1913** sotto Oscar Fried. La BnF ne certifica la composizione/pubblicazione nel 1913 e la derivazione dal balletto. La convalida riguarda esclusivamente questa derivazione, **non** la cronologia non riconciliata della prima esecuzione.
4. **La Valse:** corretto il testo preesistente che tendeva a far coincidere prima coreografia con 1929: un allestimento di **Sonia Korty ad Anversa (2 ottobre 1926)** è attestato dal repertorio raveliano e da un programma del Festival Diaghilev; Bronislava Nižinskaja crea una differente produzione nel 1929 per Ida Rubinstein. La BnF cataloga la prima all'Opéra di Parigi **23 maggio 1929**. Un documento del Festival segnala presentazione a Monte-Carlo nel gennaio 1929: collazionare la data esatta (varie cronologie riportano giorni differenti). Non sono stati creati nuovi nodi per Anversa perché ciò richiede audit separato dei dati di produzione.
5. **La Valse 1929:** la scheda BnF attribuisce ad Alexandre Benois la scenografia, a Dimitri Bouchène i costumi, a Gustave Cloez la direzione; questi ruoli non diventano archi nuovi nel presente lotto.
6. Restano candidati del lotto scenico A056–A057 (Lengyel e suite del Mandarino meraviglioso) e altri rapporti non esaminati. Nessuna convalida per contiguità.

### Dati e verifica prima del commit

- 608 nodi, 1.520 archi, ID degli archi univoci, endpoint tutti presenti, JSON parsabile e riparsato.
- `riscontro_storico_indipendente`: **139**; `candidato_non_fuso`: **303**; `proposta_editoriale_revisionata`: **338**; provvisori **641**; `da_verificare`: **0**.
- Il totale booleano `historical_verified_independently` resta distinto da `quality_gate`; non usare il primo come conteggio delle relazioni promosse al secondo.
- Test dei percorsi I–V e lettura dei file pubblicati: da effettuare dopo il commit.

### Pubblicazione
- Dataset: `15b5087e8872efb96f8fea33985cb14a2b34dc2d`
- Registro: cronologia del presente documento su `main`.
