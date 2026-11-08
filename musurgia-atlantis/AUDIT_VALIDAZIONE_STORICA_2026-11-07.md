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


### Regressione livelli post-Lotto 7 (dataset remoto)

Test riprodotto sulla logica di esplorazione I–V con i filtri standard `trattazione` e `menzione`, esclusi `candidato_non_fuso`, `proposta_editoriale_revisionata` e `sospeso`. Dal livello II sono attraversabili soltanto relazioni specifiche e nodi intermedi `persona`, `opera`, `nodo-di-senso`, con `allestimento` e `produzione` trattati come opere. **Simulazione della logica sui dati, non collaudo grafico nel browser.**

| Nodo | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Čajkovskij | 4 / 0 / 0 / 0 / 0 | 6 / 4 / 3 / 0 / 0 |
| Petipa | 1 / 0 / 0 / 0 / 0 | 4 / 5 / 1 / 0 / 0 |
| Lev Ivanov | 0 / 0 / 0 / 0 / 0 | 2 / 4 / 3 / 0 / 0 |
| Riccardo Drigo | 0 / 0 / 0 / 0 / 0 | 1 / 4 / 4 / 0 / 0 |
| Ravel | 5 / 3 / 2 / 0 / 0 | 6 / 5 / 6 / 12 / 5 |
| Ida Rubinstein | 1 / 2 / 2 / 1 / 1 | 2 / 4 / 2 / 5 / 13 |
| Bronislava Nižinskaja | 2 / 1 / 2 / 1 / 1 | 3 / 3 / 2 / 5 / 13 |

I livelli non sono obbligatori: Čajkovskij, Petipa, Ivanov e Drigo arrivano al massimo al III con i soli legami attualmente documentati. La rete di Ravel raggiunge il V senza attraversare capitoli come ponti.

**Integrità confermata sul remoto:** 608 nodi, 1.520 archi, ID univoci, nessun estremo mancante; 139 archi `riscontro_storico_indipendente` e 641 ancora provvisori.

**Nota sulla *Valse*:** Anversa 2 ottobre 1926 e allestimento Nižinskaja–Rubinstein 1929 sono produzioni distinte; nel database manca ancora un nodo specifico per Anversa. Il registro distingue il 15 gennaio 1929 a Monte-Carlo riportato dal programma del Festival Diaghilev e la data del 23 maggio 1929 documentata dalla BnF per Parigi. Non creare un nuovo arco di «prima assoluta» senza modellare le due sedi.


---

## Lotto 08 — 8 novembre 2026: Bartók, Lengyel e *Il mandarino meraviglioso*

**Preflight remoto:** branch `main`, HEAD `c654ccc62868409d084b5d992aaca73d052d0da1`. Ambito: due candidati L05-A056, L05-A057 e la proposta E0826, verificati individualmente. Non modificati capitoli, menu, mappe, interfaccia o protocollo.

### Archi convalidati

| ID | Stato e relazione | Riscontro storico |
| --- | --- | --- |
| `L05-A056` | `candidato_non_fuso` → `riscontro_storico_indipendente`; `scrive_soggetto_letterario_di` | Menyhért (Melchior) Lengyel è autore del soggetto della pantomima grottesca, pubblicato il 1° gennaio 1917 su *Nyugat*. Non è opera originale di Bartók. |
| `L05-A057` | `candidato_non_fuso` → `riscontro_storico_indipendente`; `rielabora_in_suite_orchestrale` | Bartók estrae e rielabora circa due terzi della musica scenica, preparando la suite nel febbraio 1927 con finale concertistico e senza il coro della pantomima integrale; prima della suite a Budapest il 15 ottobre 1928, Ernő Dohnányi. |
| `E0826` | `proposta_editoriale_revisionata` → `riscontro_storico_indipendente`; `compone_la_musica_di` | Bartók compone la pantomima da Lengyel: stesura 1918–1919, completamento orchestrazione 1924; prima scenica il 27 novembre 1926 a Colonia, con Jenő Szenkár. |

**Precisazione di genere:** il lavoro è una pantomima drammatica in un atto, non un balletto classico a numeri. La fonte musicologica di László Vikárius documenta la consapevole distinzione di Bartók tra pantomima e balletto; alcuni allestimenti sono classificati dalle istituzioni come *balletto*, ma ciò non annulla la definizione originaria. La suite concertistica del 1927 non è la medesima entità scenica.

**Cronologia:** pubblicazione di Lengyel il 1° gennaio 1917; prima stesura di Bartók ottobre 1918–maggio 1919; orchestrazione avviata o ripresa nel 1923 e completata entro novembre 1924; estratti a quattro mani alla radio di Budapest l'8 aprile 1926; debutto scenico il 27 novembre 1926 a Colonia, seguito dalle proteste e dal divieto delle repliche; suite definita nel febbraio 1927; prima della suite il 15 ottobre 1928 a Budapest. L'opera integrale mantiene sezioni ed esigenze esecutive non presenti nella suite. Le varie versioni del finale e i progetti scenici successivi meritano audit separato.

### Fonti indipendenti

- Archivio Bartók, HUN-REN, inventario dei manoscritti BB 82 e dei finali alternativi: https://zti.abtk.hu/en/ba/bartok-compositions/manuscripts
- Opera di Stato ungherese, storia del soggetto, composizione, prima e controversie: https://www.opera.hu/en/programme/2026-2027/the-miraculous-mandarin-bluebeards-castle/
- Catalogo Boosey & Hawkes / Universal Edition, pantomima op. 19: https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=2185
- Berliner Philharmoniker, suite e distinzione delle prime: https://www.berliner-philharmoniker.de/en/programme-notes/bela-bartok-the-miraculous-mandarin-suite-sz-73/
- Boston Symphony Orchestra, suite, durata, organico, cronologia: https://www.bso.org/works/suite-from-the-miraculous-mandarin
- Biblioteca Musicale di Grecia, Bartók Weissmann Archive: https://mmb.org.gr/en/acquisition/csodalatos-mandarin
- László Vikárius, *Transfigurations of The Miraculous Mandarin*, *Studia Musicologica* 60 (2019), DOI: https://doi.org/10.1556/6.2019.00003

### Sospensioni e cautela filologica

1. `E0824` (capitolo Balletto → Mandarino) resta proposta editoriale revisionata: l'attestazione dell'opera non comprova automaticamente l'ampiezza della trattazione nella pagina.
2. `E0825` (capitolo Avanguardie → Mandarino) resta sospeso, poiché la presenza di Bartók nella pagina non implica un'analisi specifica della pantomima.
3. `L05-A062` e `L05-A063` restano candidati: «lavoro collettivo» e «frizione musica/coreografia» sono rapporti concettuali da valutare separatamente, non nuove genealogie causali.
4. Non creati archi Bartók–Stravinskij, Bartók–Diaghilev o Bartók–Avanguardie: affinità artistiche, stile espressionistico e eventuali progetti riferiti indirettamente a Diaghilev non attestano da soli influenze o collaborazioni dirette.
5. Per la suite si registra il 15 ottobre 1928, indicato concordemente da Berliner Philharmoniker e Boston Symphony Orchestra. Eventuali date alternative nelle note secondarie devono essere vagliate sui documenti d'epoca, senza compromettere il rapporto di derivazione.

### Validazione del dato e dei livelli

- Dopo modifica: **608 nodi, 1.520 archi**, ID univoci, **0 estremi mancanti**; JSON serializzato e riparsato.
- `riscontro_storico_indipendente`: **142**; `candidato_non_fuso`: **301**; `proposta_editoriale_revisionata`: **337**; provvisori: **638**.
- Flag `historical_verified_independently=true`: **177**, conteggio distinto dai quality gate.
- Simulazione della logica dei livelli I–V, con soli livelli `trattazione` e `menzione` selezionati e senza trattare capitoli e relazioni generiche come ponti (ogni cifra conta nuovi nodi al livello indicato):

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Béla Bartók | 3 / 0 / 0 / 0 / 0 | 4 / 2 / 0 / 0 / 0 |
| Menyhért Lengyel | 0 / 0 / 0 / 0 / 0 | 1 / 2 / 0 / 0 / 0 |
| Il mandarino meraviglioso | 0 / 0 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 |
| Il mandarino meraviglioso · Suite da concerto (1927) | 0 / 0 / 0 / 0 / 0 | 1 / 2 / 0 / 0 / 0 |

Per confronto, con il filtro esteso che include anche `navigazione` e `ipotesi`, il numero di nodi raggiungibili risulta:
- `pers:bartok`: 4 / 2 / 0 / 0 / 0 (I–V).
- `pers:menyhert-lengyel`: 1 / 2 / 0 / 0 / 0 (I–V).
- `opera:mandarino`: 4 / 0 / 0 / 0 / 0 (I–V).
- `opera:mandarino-suite-1927`: 1 / 2 / 0 / 0 / 0 (I–V).

**Limite del test:** regressione algoritmica sui dati. Non equivale a collaudo visuale effettivo WebGL/Canvas nel browser.

### Lotto successivo

**Lotto 09:** valutare separatamente `L05-A062` (Daphnis → lavoro collettivo), `L05-A063` (Fauno → frizione musica/coreografia) e altri candidati ancora non verificati nel teatro coreografico; classificare le relazioni concettuali senza trasformarle in causazioni storiche.


---

## Lotto 09 — 8 novembre 2026: Daphnis e Fauno, revisione degli archi concettuali

**Preflight**: branch `main` al commit `fe6089fbeee2103d92d333003cbef295dafac607`. Non si creano nodi né archi e non si interviene fuori da dataset e registro.

| ID | Decisione | Motivo |
| --- | --- | --- |
| `L05-A062` | `candidato_non_fuso` → `confronto_non_causale`; relazione `sviluppa_o_illumina` | La prima produzione di *Daphnis et Chloé* (8 giugno 1912) è un caso didattico di collaborazione fra responsabilità distinte, non prova di coautorialità universale. Il rapporto con il nodo metodologico `senso:produzione-coreografica` è **editoriale**, non un nesso storico causale. |
| `L05-A063` | `candidato_non_fuso` → `sospeso`; relazione originaria conservata | Attribuire la «frizione musica/coreografia» direttamente al *Prélude* del 1894 rischia di anticipare un problema interpretativo posto dall'allestimento di Nižinskij del 1912. La fonte del Conservatoire riguarda il confronto fra linguaggi, non una proprietà causale intrinseca del brano. Vedere L05-A017, più preciso. |

### Riscontri e distinzioni

- *Daphnis et Chloé*, «symphonie chorégraphique» in tre quadri: commissione di Diaghilev, musica di Ravel, argomento/scenario di Fokine e Ravel da Longo, coreografia di Fokine, scene e costumi di Bakst, direzione della prima di Monteux. Il programma catalogato dalla BnF conferma la prima del **8 giugno 1912** a Parigi; il nodo metodologico non è un autore né un ente committente.
- *Prélude à l'après-midi d'un faune*: il brano orchestrale di Debussy viene eseguito in concerto il 22 dicembre 1894; Nižinskij crea sul suo materiale musicale la propria coreografia il **29 maggio 1912**. La BnF ha una scheda dello spettacolo ricavata dal programma originale, coerente con Conservatoire e British Library. Una diversa scheda BnF riporta «19 maggio»: difformità catalografica da non riportare come prima alternativa senza collazione.
- Ogni collegamento editoriale attivato in questo lotto ha `historical_verified_independently=false`; non deve trasformarsi in un ponte al II–V livello. `sviluppa_o_illumina` è già escluso da `atlasIsSpecific` nel renderer attuale; nessun intervento a interfaccia.

### Fonti

- BnF, spettacolo di *Daphnis* e responsabilità artistiche: https://catalogue.bnf.fr/ark:/12148/cb39684188s
- BnF, scheda dell'opera di Ravel: https://catalogue.bnf.fr/ark:/12148/cb139177228
- IRCAM, catalogo *Daphnis*: https://resources.ircam.fr/en/work/daphnis-et-chloe-1
- Conservatoire de Paris, Claude Abromont, analisi del *Faune*: https://www.conservatoiredeparis.fr/fr/enquete-autour-du-prelude-lapres-midi-dun-faune-de-debussy
- BnF, *Prélude* orchestrale 1894: https://catalogue.bnf.fr/ark:/12148/cb13911386z.public
- BnF, programma prima coreografica 29 maggio 1912: https://catalogue.bnf.fr/ark:/12148/cb396842224
- British Library, autografo coreografico di Nižinskij: https://searcharchives.bl.uk/catalog/032-002103433

### Integrità prima del commit

- 608 nodi, 1.520 archi, 0 ID duplicati, 0 estremi inesistenti; JSON riparsato.
- Quality gate: 142 `riscontro_storico_indipendente`, 299 `candidato_non_fuso`, 337 `proposta_editoriale_revisionata`.
- Nessun aumento artificiale di attestazioni storiche. Regressione dei percorsi e lettura dal remoto previste dopo pubblicazione.


---

## Lotto 10 — 8 novembre 2026: Fauno, riuso orchestrale e attribuzioni a Ravel

**Preflight**: `main` al commit `1bfe28499c03fb6c998998c1ba1222a80d58ff2d` dopo Lotto 9. Perimetro: `L05-A017`, `L05-A018`, `L05-A023`, `E0823`. Niente capitoli, menu, motore 3D o protocollo.

| Arco | Decisione | Precisa attestazione |
| --- | --- | --- |
| `L05-A017` | candidato → **confronto_non_causale**, `sviluppa_o_illumina` | La *produzione* del *Fauno* di Nižinskij del 1912 è un caso storico pertinente al confronto fra drammaturgia musicale e coreografia. Il nesso col nodo «frizione musica/coreografia» è una lettura musicologica, non una filiazione storica. |
| `L05-A018` | candidato → **confronto_non_causale**, `sviluppa_o_illumina` | Il *Prélude* orchestrale del 1894 è usato nel balletto del 1912; il collegamento all'idea del «riuso» è un esempio editoriale. Resta distinto dal rapporto documentato opera → *specifica produzione*, già validato come `L05-A015`. |
| `L05-A023` | candidato → **riscontro_storico_indipendente** | Ravel compone *Jeux d'eau* per pianoforte solo il **11 novembre 1901** (catalogo BnF), dedicandolo a Fauré; prima con Ricardo Viñes il **5 aprile 1902**. Nessuna assimilazione con il balletto *Jeux* di Debussy. |
| `E0823` | proposta editoriale → **riscontro_storico_indipendente** | Ravel compone la partitura di *Daphnis et Chloé* fra il 1909 e il 5 aprile 1912, su commissione di Diaghilev; argomento anche di Fokine, che ne cura la coreografia; prima il **8 giugno 1912**. |

### Fonti indipendenti

- Conservatoire de Paris, Claude Abromont, analisi del *Prélude* e della sua interpretazione scenica: https://www.conservatoiredeparis.fr/fr/enquete-autour-du-prelude-lapres-midi-dun-faune-de-debussy
- BnF, composizione e prima del *Prélude*: https://catalogue.bnf.fr/ark:/12148/cb13911386z.public
- BnF, programma della prima coreografica del *Fauno* il 29 maggio 1912: https://catalogue.bnf.fr/ark:/12148/cb396842224
- British Library, partitura coreografica autografa di Nižinskij: https://searcharchives.bl.uk/catalog/032-002103433
- BnF, catalogo di *Jeux d'eau* (Ravel, O 30), composizione 1901 e prima Viñes 1902: https://catalogue.bnf.fr/ark:/12148/cb139177379
- IRCAM, *Jeux d'eau*, genere pianistico e interprete della prima: https://ressources.ircam.fr/fr/work/jeux-d%27eau
- BnF, *Daphnis et Chloé*, catalogo opera e attribuzione Ravel–Fokine: https://catalogue.bnf.fr/ark:/12148/cb139177228
- BnF, scheda della prima produzione 8 giugno 1912: https://catalogue.bnf.fr/ark:/12148/cb39684188s
- IRCAM, *Daphnis et Chloé*, organico e ruoli: https://resources.ircam.fr/en/work/daphnis-et-chloe-1

### Regole preservate

- Tutti gli archi `confronto_non_causale` conservano `historical_verified_independently=false` e non aumentano i conteggi dei riscontri storici.
- La relazione `sviluppa_o_illumina` è già riconosciuta nel renderer come rapporto **generico da non attraversare oltre il I livello**. I nodi concettuali possono essere visti direttamente, ma non trasformarsi in ponti che uniscano tutte le opere di un'epoca.
- I nuovi rapporti di composizione sono specifici: identità compositore–opera attestata da due fonti indipendenti; non si inferiscono relazioni personali tra Ravel e Nižinskij.
- Il `L05-A063` sospeso nel Lotto 9 resta sospeso. Nessun arco cancella la provenienza originale di uno precedente.

### Integrità e test I–V prima della pubblicazione

- JSON serializzato e riparsato; **608 nodi, 1.520 relazioni**; zero ID duplicati, zero estremi inesistenti.
- `riscontro_storico_indipendente`: **144**; `candidato_non_fuso`: **296**; `proposta_editoriale_revisionata`: **336**; `confronto_non_causale`: **27**.
- Booleano `historical_verified_independently=true`: **179**, non da confondere con quality_gate.
- Simulazione con soli filtri `trattazione` e `menzione` e logica rooted/BFS di Atlantis, nuovi nodi raggiunti per profondità:

| Radice | Prima Lotto 10 I/II/III/IV/V | Dopo Lotto 10 I/II/III/IV/V |
| --- | --- | --- |
| Maurice Ravel | 6 / 4 / 5 / 12 / 5 | 8 / 7 / 7 / 7 / 5 |
| Daphnis et Chloé | 5 / 7 / 9 / 9 / 3 | 6 / 10 / 10 / 6 / 2 |
| Prélude à l’après-midi d’un faune (1894) | 3 / 2 / 3 / 8 / 8 | 4 / 2 / 3 / 8 / 8 |
| L’Après-midi d’un faune · balletto di Nižinskij (1912) | 2 / 4 / 6 / 6 / 7 | 3 / 4 / 6 / 6 / 7 |
| Jeux d’eau (Ravel, 1901) | 0 / 0 / 0 / 0 / 0 | 1 / 4 / 7 / 7 / 7 |

I controlli descritti sono **test algoritmici dei dati**, non collaudo grafico WebGL/Canvas nel browser. Verifica remota dei file dopo pubblicazione.

### Prossimo lotto indicato

**Lotto 11:** ricognizione delle restanti candidature fuori da L05, soprattutto attribuzioni specifiche autore–opera e produzione, distinti dai rimandi editoriali, prima di ogni nuova fusione con l'Atlante 3D.

 
---

## Lotto 11 — 8 novembre 2026: cinque attribuzioni storico-musicali dal Rinascimento al Barocco

**Preflight:** `main` @ `f803a48e92900c8e43af4622bd839f8c00f1b15d`; modifica selettiva di cinque archi preesistenti, senza nuovi nodi o archi. Non sono stati modificati i capitoli né gli altri componenti del sito.

| ID | Compositore → opera | Decisione e cautela |
| --- | --- | --- |
| `E0706` | Palestrina → *Missa Papae Marcelli* | Convalidato. Data precisa di composizione incerta, stampa 1567; la leggenda della «salvezza della polifonia» non è una prova storica del rapporto col Concilio di Trento. |
| `E0709` | Pergolesi → *Stabat mater* | Convalidato. Gestazione 1735–1736, autografo a Montecassino; separata la documentazione dalla narrazione romantica del «letto di morte». |
| `E0717` | Bach → *Matthäus-Passion*, BWV 244 | Convalidato. Versioni iniziali 1727/1729 e redazione 1736 non vengono confuse. Picander è autore dei testi poetici, non della musica. |
| `E0720` | Rameau → *Les Indes galantes*, RCT 44 | Convalidato. Prima 23 agosto 1735 con due entrées; versioni accresciute 1735/1736. Libretto di Fuzelier. |
| `E0723` | Lully → *Le Bourgeois gentilhomme*, LWV 43 | Convalidato. Musica di Lully, testo di Molière; prima Chambord 14 ottobre 1670. |

**Regola filologica:** la promozione riguarda soltanto la paternità musicale. Non istituisce legami causali fra i compositori, le loro opere, i librettisti o istituzioni senza archi e fonti specifici.

### Fonti indipendenti consultate

- `E0706`: https://iris.unipv.it/handle/11571/1510580 ; https://www.treccani.it/enciclopedia/pierluigi-da-palestrina-giovanni-detto-anche-il-palestrina_%28Dizionario-Biografico%29/ ; https://www.duomomilano.it/cappella-musicale-la-missa-papae-marcelli-di-giovanni-pierluigi-da-palestrina-per-la-celebrazione-eucaristica-capitolare-nella-solennita-di-cristo-re-delluniverso/
- `E0709`: https://www.ricordi.com/it-IT/Critical-Editions/Pergolesi-Giovanni-Battista-Critical-Editions/Pergolesi-Stabat-mater.aspx ; https://www.treccani.it/enciclopedia/giovanni-battista-pergolesi_%28Dizionario-Biografico%29/
- `E0717`: https://www.bachvereniging.nl/en/bwv/bwv-244 ; https://www.bach.de/werk/bwv/244.html ; https://www.bachvereniging.nl/en/st-matthew-passion-2021
- `E0720`: https://catalogue.bnf.fr/ark:/12148/cb139176805 ; https://collectionsdumusee.philharmoniedeparis.fr/0751016-les-indes-galantes-de-jean-philippe-rameau.aspx?_lg=fr-FR
- `E0723`: https://catalogue.bnf.fr/ark:/12148/cb139157501 ; https://philidor.cmbv.fr/Publications/Catalogues-de-genre/Pierre-I-Ballard-et-Robert-III-Ballard-Imprimeurs-du-roy-pour-la-musique-1599-1673/Oeuvres/LULLY-Jean-Baptiste-1632-1687-LE-BOURGEOIS-GENTILHOMME2

### Validazione e residui

- Campi `previous_quality_gate`, `previous_description`, `verification_note`, `evidence_urls`, `verification_status`, `verified_at` conservati/aggiunti su ogni arco.
- **608 nodi**, **1.520 archi**, ID unici, estremi presenti, JSON parsabile; **149** quality-gate `riscontro_storico_indipendente`, **331** `proposta_editoriale_revisionata`, **296** `candidato_non_fuso`; **184** booleani `historical_verified_independently=true`.
- Simulazione dei percorsi I–V e verifica della pubblicazione da eseguire sul remoto; non equivale a un collaudo visivo del renderer.


---

## Lotto 12 — 8 novembre 2026: otto attribuzioni dall'operetta a Broadway, un duplicato sospeso

**Preflight:** `main` @ `a30c69403ae625248f61e3b2d43a5ad5456ac9a6` dopo Lotto 11. Ambito: soltanto otto relazioni già esistenti autore–opera e un candidato ridondante. Nessun nuovo nodo o arco; nessuna modifica a menu, capitoli, mappe o renderer.

### Promozioni individuali

| ID | Compositore → opera | Precisazione verificata |
| --- | --- | --- |
| `E0837` | Offenbach → *Orphée aux enfers* | Opéra-bouffon, prima 21 ottobre 1858 ai Bouffes-Parisiens; revisione ampliata e distinta del 1874 al Théâtre de la Gaîté. Libretto di Crémieux/Halévy. |
| `E0840` | Johann Strauss II → *Die Fledermaus* | Operetta in tre atti, prima Theater an der Wien il 5 aprile 1874; libretto di Haffner/Genée. Non Johann Strauss I. |
| `E0843` | Lehár → *Die lustige Witwe* | Operetta, prima al Theater an der Wien il 30 dicembre 1905. Testo di Victor Léon e Leo Stein. |
| `E0845` | Sullivan → *The Mikado* | Prima al Savoy di Londra il 14 marzo 1885; testo di W. S. Gilbert. |
| `E0848` | Eubie Blake → *Shuffle Along* | Musica e canzoni insieme a Noble Sissle, libro di Miller e Lyles; prima a Broadway il 23 maggio 1921; **non attribuire a Blake la paternità esclusiva**. |
| `E0851` | Kern → *Show Boat* | Musical teatrale originale 1927, Hammerstein II per libretto e testi, dal romanzo di Edna Ferber. Film del 1936 distinto. |
| `E0854` | Rodgers → *Oklahoma!* | Musical teatrale 1943, Hammerstein II autore di libretto e testi, Agnes de Mille coreografa. Film 1955 distinto. |
| `E0857` | Bernstein → *West Side Story* | Musical teatrale, Broadway 26 settembre 1957; Laurents libretto, Sondheim testi, Robbins concezione/regia/coreografia. Film 1961 distinto. |

Tutti e otto gli archi passano da `proposta_editoriale_revisionata` a `riscontro_storico_indipendente`, con `historical_verified_independently=true` e metadati precedenti conservati.

### Duplicato non attivato

`L06-A021` (Offenbach → *Orphée aux enfers*, `compone`) presenta gli stessi estremi di `E0837`: è **vero nel contenuto ma ridondante**. Passa da `candidato_non_fuso` a `sospeso`, `verification_status=ridondanza_di_arco_specifico` e `more_specific_edge=E0837`. La provenienza editoriale e il vecchio stato restano leggibili; non si crea una seconda relazione attiva per lo stesso fatto.

### Fonti storiche

- `E0837`: https://catalogue.bnf.fr/ark:/12148/cb13916735c ; https://collectionsdumusee.philharmoniedeparis.fr/0780615-orphee-aux-enfers-de-jacques-offenbach.aspx?_lg=fr-FR
- `E0840`: https://www.wiener-staatsoper.at/kalender/detail/die-fledermaus/ ; https://www.staatsoper.de/en/productions/die-fledermaus ; https://marionetten.at/shows/die-fledermaus
- `E0843`: https://archiviostorico.operaroma.it/operetta/la-vedova-allegra-die-lustige-witwe/ ; https://www.rohcollections.org.uk/work.aspx?work=1324
- `E0845`: https://www.themorgan.org/music-manuscripts-and-printed-music/69133 ; https://www.doylycarte.org.uk/operas/the-mikado
- `E0848`: https://nmaahc.si.edu/explore/stories/remembering-milestone-entertainment-history ; https://www.si.edu/object/love-will-find-way%3Anmaahc_2013.118.288
- `E0851`: https://rodgersandhammerstein.com/show/show-boat/ ; https://www.ibdb.com/broadway-show/show-boat-7970
- `E0854`: https://www.pbs.org/wnet/broadway/shows/oklahoma/ ; https://rodgersandhammerstein.com/song/oklahoma/oklahoma/
- `E0857`: https://www.loc.gov/exhibits/westsidestory/westsidestory-overview.html ; https://leonardbernstein.com/works/view/9/west-side-story ; https://www.ibdb.com/broadway-production/west-side-story-2639

### Integrità, navigazione e limiti

- **608 nodi**, **1.520 relazioni**, nessun ID duplicato, nessun estremo orfano, JSON serializzato e riparsato.
- `riscontro_storico_indipendente` = **157**, `candidato_non_fuso` = **295**, `proposta_editoriale_revisionata` = **323**, `sospeso` = **43**.
- Totale booleano distinto `historical_verified_independently=true` = **192**.
- Simulazione rooted-BFS su dati con soli `trattazione` e `menzione`; dalla profondità II esclusi ponti per capitoli e relazioni generiche; numeri = nuovi nodi raggiunti a I–V:

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Jacques Offenbach | 4 / 0 / 0 / 0 / 0 | 5 / 0 / 0 / 0 / 0 |
| Johann Strauss figlio | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Eubie Blake | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Jerome Kern | 2 / 0 / 0 / 0 / 0 | 3 / 1 / 1 / 1 / 0 |
| Richard Rodgers | 2 / 0 / 0 / 0 / 0 | 3 / 1 / 1 / 1 / 0 |
| Leonard Bernstein | 3 / 0 / 0 / 0 / 0 | 4 / 2 / 0 / 0 / 0 |

- I test di percorribilità sui dati **non** costituiscono collaudo visivo tridimensionale WebGL/Canvas.

### Lotto successivo

**Lotto 13:** proseguire con attribuzioni musica/teatro e cinema (`Psycho`, `Star Wars`, Morricone, Disney) e riesaminare i restanti rapporti storici duplicati o editoriali senza inferire genealogie per contiguità stilistica.


---

## Lotto 13 — 8 novembre 2026: musiche originali cinematografiche (Herrmann, Williams, Morricone)

**Preflight:** `main` @ `91c2a12ecbbe80ab9c18de034e52414f5f15ae8f`. Perimetro selettivo di tre archi autore–film già presenti nel JSON; nessuna modifica a nodi, capitoli, menu, interfaccia, protocollo o sincronizzazione automatica.

| ID | Decisione | Fatto storico documentato |
| --- | --- | --- |
| `E0865` | `proposta_editoriale_revisionata` → `riscontro_storico_indipendente` | Bernard Herrmann compone la musica originale di *Psycho* (1960), diretto e prodotto da Hitchcock; attribuzione della partitura, non degli effetti sonori o del montaggio. |
| `E0868` | `proposta_editoriale_revisionata` → `riscontro_storico_indipendente` | John Williams compone la partitura di *Star Wars* (1977), di George Lucas, interpretata dalla London Symphony Orchestra. Non equiparare temi ricorrenti e prova automatica di una filiazione diretta da Wagner. |
| `E0871` | `proposta_editoriale_revisionata` → `riscontro_storico_indipendente` | Ennio Morricone compone e dirige le musiche originali di *C'era una volta in America* (1984) di Sergio Leone, che utilizza anche musica preesistente; film, score e canzoni sono entità distinte. |

I tre archi conservano `previous_quality_gate`, `previous_description`, URL precedenti, e aggiungono `verification_note`, `verification_status`, `verified_at`, `historical_verified_independently=true`. Non si introducono archi di influenza diretta fra Wagner, Herrmann, Williams, Morricone o i rispettivi registi.

### Fonti indipendenti

- `E0865`: https://www.afi.com/afis-100-years-of-film-scores/ ; https://silver.afi.com/movies/detail/0100002685/ ; https://www.bfi.org.uk/film/18313136-53d5-53d4-a89b-1d19d24a30f2/psycho
- `E0868`: https://catalog.afi.com/Catalog/MovieDetails/55187 ; https://www.loc.gov/item/prn-05-087/librarian-names-50-recordings-to-the-2004-registry/2005-04-05/ ; https://blogs.loc.gov/now-see-hear/2022/05/happy-star-wars-day-john-williams-and-the-making-of-a-musical-masterpiece/ ; https://www.oscars.org/oscars/ceremonies/1978/R
- `E0871`: https://catalog.afi.com/Film/57162-ONCE-UPONATIMEINAMERICA ; https://www.fondazionemorricone.it/colonne-sonore/ ; https://www.fondazionemorricone.it/la-biografia/

### Controlli pre-pubblicazione

- 608 nodi, 1.520 archi; nessun ID duplicato o estremi mancanti; JSON riparsato.
- `riscontro_storico_indipendente`: **160**; `proposta_editoriale_revisionata`: **320**; `candidato_non_fuso`: **295**.
- Flag storico booleano: **195** (diverso dai quality gate).
- Navigazione I–V e lettura del remoto da controllare dopo pubblicazione; verifica dei dati non equivale a test browser 3D.


---

## Lotto 14 — 8 novembre 2026: Disney, Hitchcock, Fantasia e Steamboat Willie

**Preflight:** `main` al commit `0ca393cd27d4dec3b9dbd48a63d159ef08f68dc8` dopo Lotto 13. Modificati solo gli archi sottoelencati in `musurgia-atlantis/grafo.json` e questo registro, senza nuovi nodi o archi e senza intervenire su sito, menu, visualizzatore o sincronizzazione.

### Otto relazioni storicamente convalidate

| ID | Relazione | Decisione e delimitazione |
| --- | --- | --- |
| `E0881` | Walt Disney → *Fantasia* (1940) | `produce`; Disney è produttore e promotore, non autore delle musiche o unico regista. Ben Sharpsteen supervisiona la produzione; Stokowski dirige l'orchestra. |
| `E0882` | Walt Disney → *Steamboat Willie* (1928) | `dirige_e_cura_la_produzione_di`; MoMA documenta la regia; Ub Iwerks realizza principalmente disegni e animazione. |
| `E0883` | Alfred Hitchcock → *Psycho* (1960) | Regia del film distinta dalla composizione di Herrmann, dallo script di Stefano e dal romanzo di Bloch. |
| `L06-A056` | Ub Iwerks → *Steamboat Willie* | `realizza_l_animazione_principale_di`; non attribuire l'intera produzione o la regia a Iwerks. |
| `L06-A063` | Leopold Stokowski → *Fantasia* | Direzione musicale della Philadelphia Orchestra, collaboratore di Disney e arrangiatore di alcuni brani; non compositore delle opere del programma. |
| `L06-A064` | Deems Taylor → *Fantasia* | Presentatore/narratore, non compositore delle musiche. |
| `L06-A065` | *Fantasia* → Fantasound | Uso nel 1940 di tecnologia stereofonica speciale, diversa dal sonoro del corto del 1928; non equivale al colore. |
| `L06-A067` | Dukas, *L'Apprenti sorcier* → *Fantasia* | Musica preesistente del 1897, rielaborata visivamente nel film del 1940; non composta per Disney. |

### Due nessi concettuali e un duplicato

- `L06-A057` (*Steamboat Willie* → Mickey Mousing) passa a `confronto_non_causale`, con verbo `sviluppa_o_illumina`: la sincronizzazione dei gesti, della musica e degli effetti sonori è documentata, ma il film non è dimostrato essere il primo cartone sonoro in senso assoluto né l'inventore esclusivo della tecnica.
- `L06-A068` (*Fantasia* → musica preesistente) passa a `confronto_non_causale`, `sviluppa_o_illumina`: documenta un caso didattico, non consente di saltare automaticamente a tutte le opere e agli autori dei repertori.
- `L06-A055` (Disney → *Steamboat Willie*, `dirige_e_produce`) è un **duplicato** di `E0882` già promosso e più precisamente documentato: passa a `sospeso`, con `more_specific_edge=E0882` e conserva precedente stato, note e provenienza.

### Fonti indipendenti

- MoMA, *Steamboat Willie* (1928), Walt Disney e Ub Iwerks: https://www.moma.org/collection/works/302797
- MoMA, analisi della sincronizzazione sonora: https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/walt-disney-ub-iwerks-steamboat-willie-1928/
- Library of Congress / Copyright Office, contesto storico del cortometraggio: https://blogs.loc.gov/copyright/2024/01/lifecycle-of-copyright-1928-works-in-the-public-domain/
- British Film Institute, crediti di *Psycho*: https://www.bfi.org.uk/film/18313136-53d5-53d4-a89b-1d19d24a30f2/psycho
- British Film Institute, *Fantasia*, credito di produttore e registi: https://www.bfi.org.uk/film/283b7796-aac5-5b3a-8396-a50cf4f05707/fantasia
- Library of Congress, esposizione *Fantasia*, Stokowski, Taylor e Fantasound: https://www.loc.gov/exhibits/music-and-animation/fantasia-1940.html
- Library of Congress, catalogo film e supervisione Ben Sharpsteen: https://www.loc.gov/item/96517622/
- Walt Disney Family Museum, collaborazione Disney–Stokowski: https://www.waltdisney.org/education/films/fantasia-1940
- Disney D23, segmenti, orchestra e data della première: https://d23.com/a-to-z/fantasia-film/
- Morgan Library & Museum, prima edizione *L'Apprenti sorcier* (1897): https://www.themorgan.org/music-manuscripts-and-printed-music/135830

**Cautele filologiche:** *Steamboat Willie* è un fenomeno industriale e artistico di sincronizzazione, non il primo esperimento audio-animato in assoluto. Non sono attribuiti automaticamente a Disney la colonna sonora, il disegno animato o tutte le responsabilità dei suoi collaboratori. *Fantasia* contiene partiture preesistenti; Fantasound è un sistema di riproduzione, non un genere musicale. La prima americana del film del 1940 non deve essere confusa con altre date di distribuzione indicate dalle schede Disney.

### Verifica del grafo e navigazione

- JSON serializzato e riparsato; **608 nodi**, **1.520 archi**; 0 ID duplicati e 0 estremi inesistenti.
- Quality gate: **168** `riscontro_storico_indipendente`, **287** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **29** `confronto_non_causale`, **44** `sospeso`.
- Flag separato `historical_verified_independently=true`: **203**.
- Simulazione dei livelli I–V con soli filtri `trattazione` e `menzione`; oltre il I livello, capitoli e relazioni generiche non vengono usati come ponti. La tabella riporta nuovi nodi per livello e non una profondità obbligatoria.

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Walt Disney | 2 / 0 / 0 / 0 / 0 | 4 / 6 / 2 / 6 / 6 |
| Ub Iwerks | 0 / 0 / 0 / 0 / 0 | 1 / 1 / 1 / 5 / 2 |
| Leopold Stokowski | 0 / 0 / 0 / 0 / 0 | 1 / 5 / 3 / 7 / 6 |
| Deems Taylor | 0 / 0 / 0 / 0 / 0 | 1 / 5 / 3 / 7 / 6 |
| Alfred Hitchcock | 1 / 0 / 0 / 0 / 0 | 2 / 1 / 0 / 0 / 0 |
| Steamboat Willie | 0 / 0 / 0 / 0 / 0 | 3 / 1 / 5 / 2 / 6 |
| Fantasia (1940) | 1 / 2 / 6 / 6 / 9 | 7 / 3 / 7 / 6 / 9 |
| Psycho | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Dukas, L’apprendista stregone (1897) | 0 / 0 / 0 / 0 / 0 | 1 / 5 / 3 / 7 / 6 |

I due nessi classificati `confronto_non_causale` hanno verbo `sviluppa_o_illumina`, già escluso come ponte specifico nel renderer attuale. La prova dei percorsi sui dati non costituisce collaudo visivo tridimensionale nel browser.

### Lotto 15 suggerito

Verificare per gruppi separati gli altri candidati audiovisivi rimasti, le responsabilità musicali dei cortometraggi e i rapporti tra opera originale, riutilizzo cinematografico e materiali storici, senza creare archi causali tra repertori solo per somiglianza stilistica.


---

## Lotto 15 — 8 novembre 2026: cinema muto, partiture, cue sheets e Vitaphone

**Preflight**: `main` al commit `6bb5fb10c75b63bd63e209c9fdc346109ed99782`; esaminati singolarmente `L06-A045`–`L06-A054`. Nessun nodo o arco aggiunto/rimosso. Solo dataset e questo registro.

| ID | Decisione | Motivazione |
| --- | --- | --- |
| `L06-A045` | **confronto_non_causale** | Il cinema muto si accompagnava spesso con musica dal vivo, eseguita da pianisti, organisti, ensemble e grandi orchestre a seconda della sala e dell'epoca; il nesso è contestuale, non documenta una pratica obbligatoria e identica per ogni singola proiezione. |
| `L06-A046` | **confronto_non_causale** | Gli accompagnamenti dal vivo potevano usare cue sheets con suggerimenti di pezzi e punti di attacco, senza imporre a ogni esecuzione una partitura obbligatoria. Le indicazioni cambiavano fra film, sale e musicisti. |
| `L06-A047` | **confronto_non_causale** | L'Assassinat du duc de Guise (1908) esemplifica la presenza precoce di partiture originali composte per film: musica di Saint-Saëns. Non è dimostrata con quest'arco una prima assoluta mondiale. |
| `L06-A048` | **riscontro_storico_indipendente** | Camille Saint-Saëns scrive la musica originale per L'Assassinat du duc de Guise (1908), film del Film d'Art; la partitura, op. 128, è distinta dalla regia cinematografica e dal testo di Lavedan. È un caso precoce documentato, senza primato universale presunto. |
| `L06-A049` | **riscontro_storico_indipendente** | Charles Le Bargy co-dirige con André Calmettes L'Assassinat du duc de Guise (1908) e vi recita; non compose la musica del film. |
| `L06-A050` | **riscontro_storico_indipendente** | André Calmettes co-dirige con Charles Le Bargy L'Assassinat du duc de Guise (1908), con musica di Saint-Saëns e soggetto sceneggiato da Henri Lavedan. |
| `L06-A051` | **riscontro_storico_indipendente** | Il Vitaphone viene utilizzato in Don Juan (Warner Bros., 1926) per musica orchestrale di William Axt ed effetti sonori sincronizzati su disco. Il lungometraggio non contiene dialoghi parlati come The Jazz Singer. |
| `L06-A052` | **riscontro_storico_indipendente** | In The Jazz Singer (1927), il Vitaphone sincronizza numeri cantati di Al Jolson e alcune brevi sequenze dialogate; la maggior parte del film impiega ancora didascalie. Non è il primo film interamente parlato. |
| `L06-A053` | **riscontro_storico_indipendente** | Al Jolson è il protagonista e interprete vocale di numeri cantati in The Jazz Singer (1927), con alcuni segmenti dialogati; il ruolo non significa che compose l'intera colonna sonora. |
| `L06-A054` | **confronto_non_causale** | Don Juan (1926) e The Jazz Singer (1927) condividono l'uso del Vitaphone, ma la forma sonora differisce: partitura ed effetti nel primo, canzoni e alcuni dialoghi nel secondo. È un confronto storico non causale, non una derivazione di soggetto o di partitura. |

**Metodo:** gli archi storici attestano compositore/registi del film 1908, l'uso specifico del sistema Vitaphone e il ruolo interpretativo di Jolson. Gli archi generali e il paragone fra due titoli sono didattico-interpretativi e ricevono il verbo generico `sviluppa_o_illumina`, già escluso dai ponti oltre il I livello. Il 1908 non è proclamato «primo film con colonna sonora assoluta» e The Jazz Singer non è trattato come film interamente parlato.

### Fonti indipendenti

- loc: https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/
- cues: https://guides.loc.gov/music-for-silent-film/scores
- blog: https://blogs.loc.gov/music/2025/04/by-the-people-transcribing-cue-sheets-for-silent-film/
- fr: https://www.cinematheque.fr/film/47211.html
- ch: https://cinematheque.ch/actualites/toutes-les-actualites/lassassinat-du-duc-de-guise-et-lempreinte-ou-la-main-rouge
- afi: https://catalog.afi.com/Film/3803-DON-JUAN
- score: https://www.loc.gov/item/2020561117/
- jazz: https://www.loc.gov/static/programs/national-film-preservation-board/documents/jazz_singer.pdf
- registry: https://www.loc.gov/programs/national-film-preservation-board/film-registry/descriptions-and-essays/

### Integrità prima del commit

- JSON riparsato, **608 nodi**, **1.520 archi**, nessun ID duplicato o estremo inesistente.
- `riscontro_storico_indipendente`: **174**; `candidato_non_fuso`: **277**; `proposta_editoriale_revisionata`: **317**; `confronto_non_causale`: **33**.
- `historical_verified_independently=true`: **209**, campo distinto.
- Verifiche dei percorsi I–V e lettura sul remoto dopo pubblicazione; non sostituiscono collaudo WebGL.


---

## Lotto 16 — 8 novembre 2026: Carl Stalling, The Skeleton Dance, Grieg e Dukas

**Preflight:** `main` al commit `eb2a8584f8f0bb92f32dc30400595ccc5ea6bbd9`, dopo Lotto 15. Singolarmente verificati 8 archi `L06-A058`, `L06-A059`, `L06-A060`, `L06-A061`, `L06-A062`, `L06-A066`, `L06-A069`, `L06-A070`; senza aggiungere o eliminare nodi e senza modificare sito, mappe e interfaccia.

### Decisioni

| ID | Quality gate | Precisazione storico-filologica |
| --- | --- | --- |
| `L06-A058` | **riscontro_storico_indipendente** | Carl Stalling compose le musiche originali di The Skeleton Dance (1929), primo corto della serie Silly Symphonies, incorporando anche una rielaborazione della Marcia dei nani di Edvard Grieg. Il materiale di Saint-Saëns non viene suonato nel film. |
| `L06-A059` | **riscontro_storico_indipendente** | Ub Iwerks realizza gran parte dell'animazione di The Skeleton Dance (1929). Les Clark e Wilfred Jackson partecipano ad alcune sequenze, quindi non si attribuisce a Iwerks il disegno esclusivo di ogni fotogramma né la regia dello spettacolo. |
| `L06-A060` | **riscontro_storico_indipendente** | La Danse macabre op. 40 di Camille Saint-Saëns ispira l'idea originaria di The Skeleton Dance (1929), proposta da Carl Stalling; tuttavia la partitura di Saint-Saëns non è usata nella colonna sonora definitiva del cartone. Il rapporto è di ispirazione progettuale, non di impiego musicale. |
| `L06-A061` | **riscontro_storico_indipendente** | La Marcia dei nani (Marche des nains / March of the Dwarfs), dai Pezzi lirici op. 54 n. 3 di Edvard Grieg, è rielaborata e inserita da Carl Stalling nella partitura di The Skeleton Dance (1929) insieme a materiale composto appositamente. Non confonderla con la Danse macabre di Saint-Saëns. |
| `L06-A062` | **confronto_non_causale** | The Skeleton Dance (1929) illustra la differenza metodologica tra ispirazione di un progetto, uso effettivo di una composizione preesistente e creazione di una partitura originale: il primo riguarda Saint-Saëns, il secondo Grieg e il terzo Carl Stalling. |
| `L06-A066` | **riscontro_storico_indipendente** | Paul Dukas compone lo scherzo sinfonico L'Apprenti sorcier, ispirato alla ballata Der Zauberlehrling di Goethe e datato 1897; la partitura orchestrale preesiste di decenni alla sequenza animata di Fantasia (1940). |
| `L06-A069` | **confronto_non_causale** | Biancaneve e i sette nani (1937) è un lungometraggio d'animazione con canzoni integrate nella narrazione; è pertinente come esempio di cinema musicale animato, senza dichiararne identità con il musical teatrale né attribuire la musica a un unico autore. |
| `L06-A070` | **confronto_non_causale** | Flowers and Trees (1932), diretto da Burt Gillett, è un esempio importante dell'impiego del Technicolor a tre matrici nella serie Silly Symphonies, distinto dalla sincronizzazione del suono e dalla nascita dell'animazione stessa; vince l'Oscar per il corto animato. |

**Distinzione chiave:** *The Skeleton Dance* (1929) nasce da un progetto ispirato alla *Danse macabre* di Saint-Saëns; **la partitura di Saint-Saëns non viene usata nel corto**. Carl Stalling scrive la musica e integra la *Marcia dei nani* di Edvard Grieg. L'ispirazione progettuale, il riuso effettivo e la composizione originale sono tre relazioni differenti. Ub Iwerks è responsabile della parte prevalente dell'animazione, con altri collaboratori presenti; non viene definito unico animatore.

Dukas è autore di *L'Apprenti sorcier* (1897) e non della colonna sonora originale di *Fantasia* (1940), che ne riusa la partitura. *Biancaneve* (1937) e *Flowers and Trees* (1932) sono esempi didattici di tipologie filmiche e novità tecniche; la classificazione non autorizza genealogie generiche.

### Fonti istituzionali e musicologiche

- care: https://www.waltdisney.org/blog/composing-walt-disneys-silly-symphonies-historian-ross-care-stalling-after-mickey
- skeleton: https://www.waltdisney.org/blog/skeleton-idea
- eastman: https://www.eastman.org/event/film-screenings/nitrate-shorts-nitrate-picture-show
- afi: https://catalog.afi.com/Film/70418-THE-SKELETON-DANCE
- moma: https://www.moma.org/calendar/events/5825
- bnf: https://catalogue.bnf.fr/resultats-autorite-avancee.do?index=OEUV3&numNotice=13893486&pageRech=rat
- imslp: https://imslp.org/wiki/L%27Apprenti_sorcier_(Dukas%2C_Paul)
- disney: https://movies.disney.com/snow-white-and-the-seven-dwarfs
- snow: https://www.waltdisney.org/blog/fairest-one-all
- academy: https://awardsdatabase.oscars.org/Search/GetResults?query=%7B%22Nominee%22%3A%22Walt+Disney%22%2C%22Sort%22%3A%221-Nominee-Alpha%22%2C%22Search%22%3A%22Basic%22%7D
- flowers: https://www.waltdisney.org/blog/flowers-and-trees-first-color-movie
- osc: https://awardsdatabase.oscars.org/Search/GetResults?query=%7B%22AwardCategory%22%3A%5B%2220%22%5D%2C%22Sort%22%3A%223-Award+Category-Chron%22%2C%22Search%22%3A%22Basic%22%7D

### Integrità e regressione I–V

- JSON serializzato/riparsato; **608 nodi**, **1.520 archi**, 0 ID duplicati, 0 estremi mancanti.
- `riscontro_storico_indipendente`: **179**; `candidato_non_fuso`: **269**; `proposta_editoriale_revisionata`: **317**; `confronto_non_causale`: **36**.
- Flag booleano storico `historical_verified_independently=true`: **214**.
- Test rooted-BFS I–V riprodotto con filtri `trattazione` e `menzione`; capitoli e relazioni generiche non fungono da ponti dopo il primo livello. Ogni cifra = nuovi nodi raggiunti.

| Nodo di partenza | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Carl W. Stalling | 0 / 0 / 0 / 0 / 0 | 1 / 3 / 1 / 1 / 1 |
| Ub Iwerks | 1 / 1 / 1 / 5 / 2 | 2 / 4 / 1 / 5 / 3 |
| The Skeleton Dance (1929) | 0 / 0 / 0 / 0 / 0 | 5 / 1 / 1 / 1 / 5 |
| Saint-Saëns, Danse macabre op. 40 | 0 / 0 / 0 / 0 / 0 | 1 / 3 / 1 / 1 / 1 |
| Grieg, Marcia dei nani (Trolltog), op. 54 n. 3 | 0 / 0 / 0 / 0 / 0 | 1 / 3 / 1 / 1 / 1 |
| Paul Dukas | 0 / 0 / 0 / 0 / 0 | 1 / 1 / 5 / 3 / 7 |
| Biancaneve e i sette nani (film 1937) | 0 / 0 / 0 / 0 / 0 | 1 / 0 / 0 / 0 / 0 |
| Flowers and Trees (1932) | 0 / 0 / 0 / 0 / 0 | 1 / 0 / 0 / 0 / 0 |

**Limite del test:** simulazione algoritmica sul dataset, non collaudo WebGL/Canvas nel browser. Restano da verificare i successivi candidati L06, in particolare le versioni teatrali e cinematografiche di *Show Boat*, *Oklahoma!* e *West Side Story*.


---

## Lotto 17 — 8 novembre 2026: Show Boat e Oklahoma!, opera teatrale e produzione storica

**Preflight:** `main` al commit `a0f725c737841fd94cbeb0c1f296d42974d22311`. Modificati esclusivamente i sei archi preesistenti `L06-A029`–`L06-A031` e `L06-A033`–`L06-A035`; nessun nodo o relazione introdotto, nessun capitolo/menu/rendering modificato.

| ID | Decisione | Precisazione |
| --- | --- | --- |
| `L06-A029` | **riscontro_storico_indipendente** | Il musical teatrale Show Boat, creato da Jerome Kern e Oscar Hammerstein II e inaugurato a Broadway il 27 dicembre 1927, è una delle fonti del film Show Boat di James Whale (Universal, 1936), insieme al romanzo di Edna Ferber del 1926. Il film è una produzione distinta, con interpreti, montaggio e musica di repertorio propri. |
| `L06-A030` | **riscontro_storico_indipendente** | James Whale dirige il film Show Boat (Universal, 1936), distinto dal musical teatrale del 1927 e dagli altri adattamenti dell'opera. Il suo credito registico non lo rende autore delle musiche di Kern né del romanzo di Edna Ferber. |
| `L06-A031` | **riscontro_storico_indipendente** | Paul Robeson interpreta il personaggio Joe e canta Ol' Man River nel film Show Boat (1936) di James Whale. Robeson non faceva parte del cast originale del 1927 a Broadway: interpretò Joe nella produzione londinese del 1928 e nel revival di Broadway del 1932. Non assimilare la registrazione cinematografica alla prima del 1927. |
| `L06-A033` | **riscontro_storico_indipendente** | Il musical teatrale Oklahoma! di Richard Rodgers (musiche) e Oscar Hammerstein II (libretto e lyrics) debutta a Broadway il 31 marzo 1943 allo St. James Theatre, diretto da Rouben Mamoulian e coreografato da Agnes de Mille. È la prima produzione teatrale, non l'adattamento cinematografico omonimo del 1955. |
| `L06-A034` | **riscontro_storico_indipendente** | Agnes de Mille crea le coreografie per la produzione originale di Oklahoma! (Broadway, 31 marzo 1943), con il dream ballet che esplora i desideri e i conflitti psicologici dei personaggi. Non è l'autrice della partitura di Rodgers né del libretto di Hammerstein. |
| `L06-A035` | **confronto_non_causale** | La produzione Broadway di Oklahoma! (1943), con il dream ballet di Agnes de Mille, è un caso emblematico del musical integrato, in cui danza, canzone, racconto e psicologia dei personaggi partecipano all'azione. Si tratta di una qualificazione storico-critica, non dell'origine assoluta dell'uso della danza narrativa. |

**Distinzione importante:** *Show Boat* di Broadway (1927), il film (1936) diretto da Whale e l'interpretazione filmica di Robeson sono oggetti storici differenti; Robeson non fu nella prima compagnia newyorkese del 1927. L'opera teatrale è derivata dal romanzo di Edna Ferber e il film del 1936 usa anche fonti letterarie e musicali; la genealogia è di adattamento, non identità assoluta fra copioni. *Oklahoma!* (1943) integra la danza nella narrazione, ma le categorie del «musical integrato» e del «dream ballet» non hanno un'unica data di invenzione incontestabile. I due casi non vengono uniti per generica affinità di genere.

**Fonti:**
- afiShow: https://catalog.afi.com/Film/1033-SHOW-BOAT
- afiRobeson: https://www.afi.com/robert-detail/1033-SHOWBOAT/
- ibdbShow: https://www.ibdb.com/broadway-production/show-boat-10538
- ibdbOklahoma: https://www.ibdb.com/broadway-production/oklahoma-1285
- pbsOklahoma: https://www.pbs.org/wnet/broadway/shows/oklahoma/
- rhOklahoma: https://rodgersandhammerstein.com/production/oklahoma/1943-original-broadway-production/
- locAgnes: https://guides.loc.gov/agnes-de-mille

**Audit dei campi:** `previous_quality_gate` e `previous_description` preservano i valori iniziali; a tutti i link sono aggiunti `verification_note`, `evidence_urls` e data; gli archi storici hanno `historical_verified_independently=true`. `L06-A035` è relazione concettuale `confronto_non_causale`, con `historical_verified_independently=false` e verbo `sviluppa_o_illumina`, escluso dai ponti automatici oltre il primo livello.

**Integrità prima del commit:** 608 nodi, 1.520 archi, nessun ID duplicato, nessun estremo mancante, JSON parsabile; `riscontro_storico_indipendente` = **184**, `candidato_non_fuso` = **263**, `proposta_editoriale_revisionata` = **317**, `confronto_non_causale` = **37**, booleani verificati = **219**. Test I–V sul remoto dopo pubblicazione; non equivalgono a controllo grafico WebGL.


---

## Lotto 18 — 8 novembre 2026: West Side Story, musical del 1957 e adattamenti del 1961 e 2021

**Preflight:** `main` al commit `7d167d43859295a597053cb05fc9bd650a699a4a` dopo il Lotto 17; modificati esclusivamente i sette archi preesistenti da `L06-A038` a `L06-A044`. Nessun nuovo nodo, arco o intervento su pagine, menu, renderer e protocollo.

| ID | Esito | Relazione storica |
| --- | --- | --- |
| `L06-A038` | **riscontro_storico_indipendente** | Jerome Robbins concepisce il progetto del musical West Side Story (1957), ne dirige e coreografa la prima produzione di Broadway. Le coreografie vedono anche il contributo accreditato di Peter Gennaro. Leonard Bernstein compone la musica, Arthur Laurents il book, Stephen Sondheim le lyrics; la concezione di Robbins non ne fa l'unico autore. |
| `L06-A039` | **riscontro_storico_indipendente** | West Side Story esordisce a Broadway al Winter Garden Theatre il 26 settembre 1957 nella produzione originale diretta e coreografata da Jerome Robbins, con Robert E. Griffith e Harold S. Prince produttori, musica di Bernstein, libretto di Laurents e testi di Sondheim. La prova generale a Washington il 20 agosto 1957 non è la première di Broadway. |
| `L06-A040` | **riscontro_storico_indipendente** | Il musical teatrale West Side Story (prima a Broadway nel 1957) viene adattato come film nel 1961, diretto congiuntamente da Robert Wise e Jerome Robbins, con sceneggiatura cinematografica di Ernest Lehman. Questa produzione cinematografica non coincide con l'originale teatrale né con il film del 2021. |
| `L06-A041` | **riscontro_storico_indipendente** | Il musical originale West Side Story del 1957 è nuovamente adattato per il cinema da Steven Spielberg nel film del 2021, con sceneggiatura di Tony Kushner e coreografie nuove di Justin Peck. È una nuova trasposizione dell'opera scenica, non la rimasterizzazione e neppure una copia delle scene del film del 1961. |
| `L06-A042` | **riscontro_storico_indipendente** | Robert Wise co-dirige con Jerome Robbins il film West Side Story (1961), del quale è anche produttore. Il credito cinematografico è distinto dalla regia della prima versione teatrale di Broadway, affidata a Robbins nel 1957. |
| `L06-A043` | **riscontro_storico_indipendente** | Jerome Robbins co-dirige insieme a Robert Wise il film West Side Story (1961). La sua responsabilità cinematografica è distinta dal ruolo di ideatore, regista e coreografo della prima produzione teatrale del 1957; il film ha sceneggiatura di Ernest Lehman. |
| `L06-A044` | **riscontro_storico_indipendente** | Steven Spielberg dirige e produce il nuovo film West Side Story (2021), sceneggiato da Tony Kushner e basato sul musical teatrale originale del 1957. La coreografia cinematografica è di Justin Peck e la direzione musicale di Gustavo Dudamel; Spielberg non è compositore delle melodie di Bernstein né regista del film precedente del 1961. |

### Distinzioni editoriali da preservare

- L'opera teatrale *West Side Story* (concepita da Robbins, musica Bernstein, book Laurents, testi Sondheim) esiste come entità distinta dalla **prima produzione Broadway del 26 settembre 1957** e da altre rappresentazioni. Peter Gennaro è co-coreografo della prima produzione, non va ignorato.
- Il **film del 1961** è un adattamento con sceneggiatura di Ernest Lehman, direzione congiunta Robert Wise e Jerome Robbins. Il ruolo di Robbins nel film è documentato autonomamente rispetto al suo ruolo teatrale.
- Il **film del 2021**, diretto/prodotto da Spielberg e sceneggiato da Tony Kushner, è un nuovo adattamento del musical del 1957. Non deriva come rimasterizzazione della pellicola del 1961; dispone di nuove coreografie di Justin Peck, arrangiamenti di David Newman e direzione musicale Gustavo Dudamel.
- Nessuna di queste relazioni attesta che Spielberg, Wise, Robbins o i due registi cinematografici abbiano composto la musica di Bernstein.

### Fonti istituzionali e catalografiche

- ibdb: https://www.ibdb.com/broadway-production/west-side-story-2639
- loc: https://www.loc.gov/exhibits/westsidestory/westsidestory-overview.html
- pbs: https://www.pbs.org/wnet/broadway/shows/west-side-story/
- afi: https://catalog.afi.com/Catalog/moviedetails/23857
- originalFilm: https://www.westsidestory.com/1961-film
- timeline: https://www.westsidestory.com/timeline
- film2021: https://www.20thcenturystudios.com/movies/west-side-story
- studio: https://thewaltdisneycompany.com/news/steven-spielberg-and-tony-kushners-fresh-take-on-west-side-story/
- filmSite: https://www.westsidestory.com/2021-film

### Integrità e test I–V

- JSON serializzato e riparsato, **608 nodi e 1.520 archi**, nessun ID duplicato o estremo inesistente.
- Quality gate: **191** `riscontro_storico_indipendente`, **256** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **37** `confronto_non_causale`, **44** `sospeso`.
- Flag distinto `historical_verified_independently=true`: **226**.
- Simulazione su dati con filtri `trattazione` e `menzione`; profondità I–V, esclusi i capitoli e i rapporti generici come ponti oltre il primo livello:

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Show Boat | 3 / 3 / 2 / 1 / 0 | 3 / 3 / 2 / 1 / 0 |
| Show Boat, film 1936 | 3 / 2 / 1 / 2 / 1 | 3 / 2 / 1 / 2 / 1 |
| Oklahoma! | 3 / 2 / 2 / 2 / 0 | 3 / 2 / 2 / 2 / 0 |
| Oklahoma!, produzione Broadway 1943 | 3 / 2 / 1 / 2 / 2 | 3 / 2 / 1 / 2 / 2 |
| West Side Story | 3 / 0 / 0 / 0 / 0 | 7 / 2 / 0 / 0 / 0 |
| Jerome Robbins | 0 / 0 / 0 / 0 / 0 | 2 / 6 / 1 / 0 / 0 |
| West Side Story, film 1961 | 0 / 0 / 0 / 0 / 0 | 3 / 5 / 1 / 0 / 0 |
| West Side Story, film 2021 | 0 / 0 / 0 / 0 / 0 | 2 / 6 / 1 / 0 / 0 |
| Steven Spielberg | 0 / 0 / 0 / 0 / 0 | 1 / 1 / 6 / 1 / 0 |

**Limite dichiarato:** test algoritmico dei percorsi sul dataset, non collaudo grafico 3D in browser.

### Prossima ricognizione

Rimangono archi di contenuto a *Shuffle Along* e ai collaboratori storici del musical, da esaminare separatamente dai nodi concettuali e dai semplici rimandi ai capitoli.


---

## Lotto 19 — 8 novembre 2026: Shuffle Along (1921), responsabilità e prima produzione

**Preflight:** `main` al commit `f297b577969ba60c2878f3f243c7d494a2de3596`. Modificati esclusivamente gli archi esistenti `L06-A022`–`L06-A027`; nessuna aggiunta/eliminazione di nodi e nessun intervento ai capitoli, alla grafica, al protocollo o all'indice.

| ID | Quality gate | Esito della verifica |
| --- | --- | --- |
| `L06-A022` | **riscontro_storico_indipendente** | Noble Sissle è il paroliere delle canzoni del musical Shuffle Along (1921), con musica composta da Eubie Blake. I contributi di Sissle riguardano le lyrics; libro/libretto firmato da Flournoy Miller e Aubrey Lyles. Evitare di attribuire a un solo autore tutti gli elementi musicali e drammatici dello spettacolo. |
| `L06-A023` | **riscontro_storico_indipendente** | Flournoy E. Miller è coautore con Aubrey Lyles del libretto teatrale (book) di Shuffle Along, presentato a Broadway il 23 maggio 1921. La loro precedente scena comica The Mayor of Jimtown / The Mayor of Dixie costituisce un antecedente dello spettacolo, distinto dalla musica di Eubie Blake e dai testi cantati di Noble Sissle. |
| `L06-A024` | **riscontro_storico_indipendente** | Aubrey Lyles è coautore con Flournoy Miller del libretto teatrale (book) di Shuffle Along (1921); non è autore esclusivo delle canzoni composte musicalmente da Eubie Blake e scritte da Noble Sissle. Il musical adatta un loro precedente numero di vaudeville. |
| `L06-A025` | **riscontro_storico_indipendente** | Il musical Shuffle Along (book Miller e Lyles, musica Blake, lyrics Sissle) debuttò nella prima produzione di Broadway il 23 maggio 1921 al 63rd Street Music Hall, con regia di Walter Brooks e produzione della Nikko Producing Company. La produzione originale resta distinta dalle riprese del 1932, del 1952 e dal nuovo spettacolo del 2016. |
| `L06-A026` | **confronto_non_causale** | Shuffle Along (1921), prodotto e interpretato da artisti afroamericani, è un caso storicamente importante per lo sviluppo della commedia musicale afroamericana a Broadway, ma il nesso tra una tradizione teatrale complessa e un singolo titolo è un inquadramento editoriale, non la prova che il teatro musicale afroamericano abbia avuto origine nel 1921. |
| `L06-A027` | **riscontro_storico_indipendente** | Will (Bill) Vodery è accreditato per gli arrangiamenti musicali della prima produzione di Broadway di Shuffle Along (1921), non come compositore esclusivo dello score di Eubie Blake. La produzione originale del 1921 è distinta dal revival del 1932, per il quale Vodery è accreditato anche come orchestratore e autore degli arrangiamenti corali. |

**Note di metodo:** i ruoli sono distinti: Eubie Blake **musica**, Noble Sissle **lyrics**, Flournoy Miller e Aubrey Lyles **book**, Will Vodery **arrangiamenti** per la produzione 1921. Le attribuzioni per l'originale 1921 non si applicano senza verifica alle riprese 1932/1952 o alla rivisitazione 2016. Gli archivi IBDB attestano che Josephine Baker **non** era nella prima compagnia Broadway 1921, ma entrò nella tournée del 1922; il rapporto contestuale con la tradizione afroamericana non pretende che questa cominci nel 1921. Nessun rapporto interpretativo diventa un ponte generico oltre il I livello.

### Fonti indipendenti

- ibdb: https://www.ibdb.com/broadway-production/shuffle-along-9073
- ibdbshow: https://www.ibdb.com/broadway-show/shuffle-along-9656
- ibdbvodery: https://www.ibdb.com/broadway-cast-staff/bill-vodery-115069
- playbill: https://playbill.com/production/shuffle-along-1921-63rd-street-music-hall-vault-0000000521
- nmaahc: https://nmaahc.si.edu/explore/stories/remembering-milestone-entertainment-history
- loc: https://www.loc.gov/item/n87116909/noble-sissle/
- ibdb1932: https://www.ibdb.com/broadway-production/shuffle-along-11549

### Controllo dati prima della pubblicazione

- JSON serializzato e riparsato; 608 nodi, 1.520 archi, nessun ID duplicato né estremo inesistente.
- Quality gate: **196** `riscontro_storico_indipendente`, **250** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **38** `confronto_non_causale`, **44** `sospeso`.
- Flag booleano distinto `historical_verified_independently=true`: **231**.
- Restano necessari controllo sul remoto e regressione dei percorsi I–V. Non è stato effettuato un test browser 3D.


---

## Lotto 20 — 8 novembre 2026: quattro rapporti documentati fra musicisti

**Preflight:** `main` @ `da3c786b9a8eaa4fc76045df5d8621eb11518e99`, dopo Lotto 19. Soltanto i quattro archi `L08-A010`–`L08-A013` vengono aggiornati: nessuna creazione di nodi o relazioni, nessuna modifica a pagine, menu, protocolli, sincronizzazione o grafica.

| ID | Decisione | Relazione specifica verificata |
| --- | --- | --- |
| `L08-A010` | **riscontro_storico_indipendente** | Andrea Gabrieli, organista della basilica di San Marco, è zio e maestro di Giovanni Gabrieli. Il rapporto comprende formazione e trasmissione della prassi compositiva veneziana; Giovanni fu attivo anche presso la corte bavarese ed elaborò poi una propria opera autonoma. Non deriva da questo arco un'invenzione individuale di tutta la policoralità. |
| `L08-A011` | **riscontro_storico_indipendente** | Alessandro Scarlatti, padre di Domenico, ne orienta le prime scelte professionali e formative: dopo la fase napoletana lo conduce verso Roma e nel 1705 lo invia a Venezia, affidandolo al maestro Francesco Gasparini. Sebbene Domenico sia tradizionalmente definito allievo del padre, non è documentalmente certo chi abbia impartito tutte le sue prime lezioni. Non si convalida un arco di insegnamento diretto continuativo. |
| `L08-A012` | **riscontro_storico_indipendente** | Robert Schumann e Clara Wieck Schumann sviluppano un rapporto artistico di confronto e collaborazione, oltre al matrimonio. Clara è pianista, compositrice autonoma e interprete di opere di Robert; produce anche trascrizioni e, dopo la morte del marito nel 1856, cura la pubblicazione delle sue opere con l'aiuto di altri musicisti, tra cui Brahms. Non attribuire a Robert le composizioni originali di Clara né fare di Clara una semplice mediatrice passiva. |
| `L08-A013` | **riscontro_storico_indipendente** | George Gershwin e Ira Gershwin collaborano professionalmente come compositore delle musiche e autore dei testi delle canzoni, rispettivamente; Lady, Be Good! (1924) è il loro primo musical completo scritto insieme. La coppia scrive repertori teatrali, canzoni e lavori per il cinema, ma ciascun fratello collaborò anche con altri autori e le singole opere richiedono attributi propri. |

### Cautela storiografica essenziale

L'arco **Alessandro Scarlatti → Domenico Scarlatti** non è mantenuto sotto la formula preesistente «insegnamento_documentato»: Treccani e gli studi documentano il rapporto di padre/figlio, il percorso di carriera organizzato da Alessandro e il trasferimento formativo a Francesco Gasparini nel 1705, ma non dimostrano ogni fase del suo insegnamento diretto iniziale. La relazione diventa `orienta_formazione_e_carriera_di`, **riscontro storico circoscritto e testabile**, senza inventare lezioni dirette continuative.

Anche il rapporto Robert–Clara Schumann è formulato con precisione cronologica: si distinguono collaborazione artistica durante la vita di Robert, interpretazioni pianistiche autonome di Clara, sue composizioni proprie e l'edizione delle opere di Robert curata **dopo la morte** del marito (1856). Andrea–Giovanni Gabrieli è invece un rapporto maestro–allievo documentato, e George–Ira Gershwin è una collaborazione professionale compositore–paroliere, non una genealogia familiare generica.

### Fonti di verifica

- oxGab: https://academic.oup.com/reference/62400/reference-article-abstract/571523757
- treGab: https://www.treccani.it/enciclopedia/giovanni-gabrieli/
- treDomenico: https://www.treccani.it/enciclopedia/domenico-scarlatti/
- treHistory: https://www.treccani.it/enciclopedia/domenico-scarlatti_%28Enciclopedia-Italiana%29/
- oxDomenico: https://academic.oup.com/reference/62400/reference-article-abstract/555402496?login=false
- locClara: https://guides.loc.gov/clara-schumann
- locClaraScores: https://guides.loc.gov/clara-schumann/published-scores
- camClara: https://www.cambridge.org/core/books/abs/clara-and-robert-schumann-in-context/editing-and-publishing/D244E51C1DF116496D8DF2446560136F
- lincolnClara: https://chambermusicsociety.org/about-the-music/composers/clara-schumann
- locGershwin: https://www.loc.gov/collections/george-and-ira-gershwin-treasures/about-this-collection/
- gershwinOfficial: https://gershwin.com/the-gershwin-brothers/
- locGershwinArchive: https://findingaids.loc.gov/repositories/15/resources/6841

### Invarianti e prova I–V

- 608 nodi, 1.520 archi; JSON serializzato/riparsato, ID unici, nessun estremo orfano.
- `riscontro_storico_indipendente`: **200**; `candidato_non_fuso`: **246**; `proposta_editoriale_revisionata`: **317**; `confronto_non_causale`: **38**; `sospeso`: **44**.
- Booleano storico `historical_verified_independently=true`: **235**; diverso da quality gate.
- Simulazione data-driven dei livelli I–V con soli filtri `trattazione`/`menzione` e parentela radicata, evitando i ponti capitolo/relazione generica oltre I livello. I numeri sono **nuovi nodi**, non somma cumulativa.

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Andrea Gabrieli | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Giovanni Gabrieli | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Alessandro Scarlatti | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Domenico Scarlatti | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Robert Schumann | 2 / 0 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 |
| Clara Schumann | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| George Gershwin | 2 / 0 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 |
| Ira Gershwin | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Shuffle Along | 6 / 1 / 0 / 0 / 0 | 6 / 1 / 0 / 0 / 0 |
| Shuffle Along, prima produzione Broadway 1921 | 2 / 4 / 0 / 0 / 0 | 2 / 4 / 0 / 0 / 0 |

**Limite:** test sui dati; collaudo visuale 3D nel browser ancora da svolgere. Lo stato del remoto e il registro vanno riverificati dopo il commit.

### Lotti successivi

Procedere per gruppi di relazioni tra tradizioni dell'operetta e figure documentate, o di trasmissione e prassi dalla notazione medievale alla policoralità rinascimentale, senza fondere generi o epoche per analogia.


---

## Lotto 21 — 8 novembre 2026: quattro tradizioni dell'operetta, dieci autori e l'opéra-bouffe

**Preflight:** `main` al commit `bfd9ff32e8cc3e3100c53c3953e3599e6305761d`, dopo Lotto 20. Esaminate 15 candidature preesistenti, precisamente `L06-A001`–`L06-A014` e `L06-A020`. Nessun nodo o arco aggiunto/rimosso; nessun file del motore 3D o dei capitoli modificato.

### Scelta importante: documentare le tradizioni senza farne ponti genealogici

Sono fondate storicamente l'esistenza delle quattro tradizioni e l'attività degli autori loro associati, ma il rapporto da un nodo aggregato **tradizione** a un nodo **compositore** non è un legame diretto fra due agenti storici. L'arco viene pertanto classificato `confronto_non_causale`, `relation=sviluppa_o_illumina`, `historical_verified_independently=false` (l'ultimo campo qualifica la *natura dell'arco*, non nega l'esistenza dell'autore). In questo modo una ricerca su Strauss II non si espande automaticamente verso Suppé, Lehár, Offenbach o Gilbert per la sola appartenenza a un genere. Ugualmente le quattro tradizioni, pur comprese nel contesto dell'operetta, non diventano scorciatoie fra reti non direttamente documentate.

| Arco | Risultato editoriale filologicamente documentato |
| --- | --- |
| `L06-A001` | L'operetta francese dell'Ottocento è una tradizione scenica storicamente riconoscibile, con Hervé, Offenbach, Lecocq e altri. È parte dell'ampia famiglia dei teatri musicali leggeri, ma non coincide con tutte le pratiche del genere «operetta», né ne implica un'invenzione esclusiva. |
| `L06-A002` | L'operetta viennese sviluppa una tradizione propria nella seconda metà dell'Ottocento, con Suppé e Johann Strauss II, poi Lehár, Kálmán e altri, caratterizzata anche da valzer e ritmi di danza. Non è un sottoinsieme identico all'operetta francese o britannica. |
| `L06-A003` | L'operetta britannica comprende opere comiche e comic operas di Gilbert e Sullivan, sviluppatesi con istituzioni, impresari e pubblico propri nella Londra vittoriana; «comic opera» e «operetta» sono categorie affini, non sinonimi universali. |
| `L06-A004` | L'operetta statunitense fra fine Ottocento e prima metà Novecento è una tradizione teatrale ibrida, con Herbert, Friml, Romberg e altri, in dialogo con modelli europei, Broadway, ragtime e musical comedy; non è un unico passaggio diretto dall'Europa al musical. |
| `L06-A005` | Jacques Offenbach è un esponente eminente dell'operetta/opéra-bouffe parigina, autore di Orphée aux enfers (1858) e di altri spettacoli satirici. La relazione con la tradizione francese è un'appartenenza storico-editoriale, non un legame maestro–allievo con ogni suo esponente. |
| `L06-A006` | Hervé (Florimond Ronger) è autore e organizzatore di teatro musicale comico parigino, vicino alle origini dell'operetta francese e dell'opéra-bouffe. La tradizione comprende indipendentemente anche Offenbach; la loro comune appartenenza non documenta un rapporto personale diretto. |
| `L06-A007` | Johann Strauss II è autore di operette viennesi, fra cui Die Fledermaus (1874). L'associazione alla tradizione è storicamente documentata, ma non genera relazioni d'insegnamento o collaborazione con tutti gli autori del genere. |
| `L06-A008` | Franz von Suppé è un compositore fondamentale della prima operetta viennese; lavori come Das Pensionat (1860) e Boccaccio (1879) fanno parte del suo repertorio. L'appartenenza alla tradizione non documenta relazioni personali dirette con Strauss o Lehár. |
| `L06-A009` | Franz Lehár è autore della Die lustige Witwe (1905), uno dei vertici dell'operetta viennese del primo Novecento. Il legame con la tradizione viennese non implica che l'opera sia stata composta in collaborazione con Strauss II o Suppé. |
| `L06-A010` | W. S. Gilbert è il librettista e drammaturgo delle Savoy Operas realizzate con Arthur Sullivan; il suo ruolo fa parte della tradizione britannica del teatro musicale comico, ma non è quello di compositore delle musiche. |
| `L06-A011` | Arthur Sullivan è il compositore della musica delle Savoy Operas scritte con W. S. Gilbert, tra cui The Mikado (1885); tale attività è rappresentativa dell'operetta/opera comica britannica. Non attribuire automaticamente a Sullivan i testi di Gilbert. |
| `L06-A012` | Victor Herbert, compositore irlandese naturalizzato statunitense, è figura fondamentale della tradizione operettistica di Broadway e del primo musical americano. La sua esperienza europea e la carriera statunitense non lo rendono fondatore esclusivo dell'intero musical. |
| `L06-A013` | Rudolf Friml, nato a Praga ed emigrato negli Stati Uniti nel 1906, è tra i maggiori compositori di operetta di Broadway, con The Firefly (1912) e Rose-Marie (1924). Non tutte le sue opere vanno classificate automaticamente come 'musical' nello stesso senso dei titoli successivi. |
| `L06-A014` | Sigmund Romberg, compositore originario dell'Europa centro-orientale e attivo a Broadway dal 1909, contribuisce in modo decisivo all'operetta americana con The Student Prince (1924), The Desert Song (1926) e The New Moon (1928). L'appartenenza a una tradizione comune non significa diretta collaborazione con Herbert o Friml. |
| `L06-A020` | L'opéra-bouffe francese è un genere storico centrale nella formazione dell'operetta parigina, ma non coincide universalmente con opéra-comique, comic opera britannica o con l'intera produzione di Offenbach. L'arco concettuale fra genere e tradizione francese è un rimando comparativo, non una genealogia causale unica. |

**Distinzioni:** opéra-bouffe, opéra-comique, comic opera britannica e musical comedy non sono termini automaticamente equivalenti. La tradizione statunitense include diversi apporti europei e afroamericani; né l'operetta americana né Victor Herbert costituiscono una spiegazione monocausale della nascita del musical. Le fonti sostengono classificazioni, non ascendenze personali fra tutti gli autori.

**Fonti indipendenti:** 
- tre: https://www.treccani.it/enciclopedia/operetta/
- treHistory: https://www.treccani.it/enciclopedia/operetta_%28Enciclopedia-Italiana%29/
- treHistory2: https://www.treccani.it/enciclopedia/offenbach-e-l-opera-comique_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- ox: https://academic.oup.com/reference/62400/reference-article-abstract/555394666?login=false
- cam: https://www.cambridge.org/core/books/abs/cambridge-companion-to-operetta/camping-along-the-american-operetta-divide-on-the-road-to-the-musical-play/1D329E26E98557B4B7C58CCFAF3BF7D3
- camCh: https://www.cambridge.org/core/books/german-operetta-on-broadway-and-in-the-west-end-19001940/music-of-operetta/CA584339A619B08BB924DACBF57983A8
- loc: https://www.loc.gov/exhibits/musical-worlds-of-victor-herbert/overview.html
- pbs: https://www.pbs.org/wnet/broadway/essays/operetta/
- brit: https://www.larousse.fr/encyclopedie/divers/op%C3%A9rette/75001
- yale: https://academic.oup.com/yale-scholarship-online/book/19771
- camHistory: https://www.cambridge.org/core/books/abs/cambridge-companion-to-operetta/camping-along-the-american-operetta-divide-on-the-road-to-the-musical-play/1D329E26E98557B4B7C58CCFAF3BF7D3
- eno: https://www.eno.org/discover-opera/articles/the-beginners-guide-to-operetta/

### Regole di integrità

- Preservati ID, estremi, `previous_quality_gate`, `previous_relation`, `previous_description`, URL precedenti, `verification_note`, `verification_status` e `editorial_verified_at`.
- JSON serializzato/riparsato, **608 nodi**, **1.520 relazioni**, zero ID duplicati, zero estremi orfani.
- Quality gate: **200** `riscontro_storico_indipendente`, **231** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **53** `confronto_non_causale`, **44** `sospeso`. Booleano `historical_verified_independently=true` = **235**.
- Le 15 relazioni hanno `sviluppa_o_illumina`, verbo escluso dall'espansione automatica dal livello II. Il nesso di genere può essere visualizzato al I livello con il filtro `menzione`, ma non deve diventare un hub di secondo grado.
- Test dei percorsi I–V sul remoto e controllo finale del commit richiesti; la simulazione non sostituisce collaudo WebGL nel browser.


---

## Lotto 22 — 8 novembre 2026: neumi, rigo guidoniano, mensuralismo, modi e isoritmia

**Preflight:** `main` al commit `9f5b7f26108cd2ccc4278dc71eb1bfae8cceead5` dopo Lotto 21. Revisionati esattamente 12 candidati `L07-A001`–`L07-A012`; soltanto dataset e questo audit. Non è stato modificato alcun capitolo, menu, renderer o protocollo.

| ID | Quality gate | Motivazione puntuale |
| --- | --- | --- |
| `L07-A001` | **confronto_non_causale** | La notazione neumatica medievale comprende scritture assai diverse: i neumi più antichi ricordano il profilo del canto trasmesso oralmente, mentre le forme diastematiche successive indicano le altezze con maggiore precisione. Collegare genericamente «neumi» e «notazione» è una classificazione didattica, non una genealogia univoca. |
| `L07-A002` | **confronto_non_causale** | Il sistema di rigo associato a Guido d'Arezzo è una tappa fondamentale della notazione delle altezze, formatasi gradualmente nel X e XI secolo. Il nesso con la nozione generalissima di «notazione» è classificatorio, non afferma un'invenzione individuale dal nulla. |
| `L07-A003` | **riscontro_storico_indipendente** | Guido d'Arezzo, nella prima metà dell'XI secolo, sistematizza e diffonde tecniche per scrivere e insegnare le altezze mediante linee e spazi, nel percorso verso la notazione tetragrammata; è uno specifico contributo tecnico-didattico, non l'invenzione esclusiva di tutti i segni neumici o delle linee preesistenti. |
| `L07-A004` | **confronto_non_causale** | La notazione mensurale introdusse indicazioni più articolate delle durate, con forme delle figure e rapporti quantitativi, sviluppandosi soprattutto fra la seconda metà del XIII e il XV secolo. Il legame col nodo generale «notazione» descrive una classificazione storica, non una discendenza personale. |
| `L07-A005` | **confronto_non_causale** | Nella polifonia parigina di Notre-Dame (fra XII e XIII secolo) i modi ritmici strutturavano temporalmente parti del repertorio di organum e discanto. Non tutti gli esempi storici di organum impiegano questa notazione o gli stessi schemi. |
| `L07-A006` | **sospeso** | L'arco negativo «non equivale a» viene sospeso: i modi ritmici della polifonia indicano combinazioni di durate, mentre i modi ecclesiastici designano organizzazioni melodiche e d'ambito del canto. La distinzione resta documentata nella nota, senza creare un passaggio navigabile fra concetti non equivalenti. |
| `L07-A007` | **sospeso** | L'arco dai modi ecclesiastici al nodo generico «modo e tonalità» è sospeso: non consente di inferire un'identità fra finalis, ambitus e modi gregoriani da un lato e tonalità funzionale maggiore-minore dell'età moderna dall'altro. Un rapporto evolutivo richiederebbe fonti e casi storici più precisi. |
| `L07-A008` | **confronto_non_causale** | Le tecniche mensurali permisero l'articolazione del ritmo di molte composizioni dell'Ars nova, ma il mensuralismo non è proprietà esclusiva del Trecento francese; il nesso fra i due insiemi è di contestualizzazione tecnico-storica. |
| `L07-A009` | **confronto_non_causale** | La tecnica oggi spesso definita «isoritmia» compare in specifici mottetti dell'Ars nova, ma non caratterizza ogni composizione del periodo; inoltre il termine musicologico moderno va applicato con precisione alle ripetizioni ritmiche realmente constatabili. |
| `L07-A010` | **riscontro_storico_indipendente** | La talea, nell'analisi dei mottetti tardomedievali, è un segmento riconoscibile di durate ritmiche reiterate, frequentemente nel tenor delle strutture dette isoritmiche. Non designa una singola voce musicale né coincide necessariamente per lunghezza con il color. |
| `L07-A011` | **riscontro_storico_indipendente** | Nel modello analitico comunemente usato per il mottetto isoritmico, il color è il segmento di melodia del tenor, che può ricorrere indipendentemente dalla talea ritmica. Il color non è il colore timbrico; la musicologia recente segnala tuttavia usi storici dei termini color e talea meno rigidi dell'opposizione «sole altezze/sole durate». |
| `L07-A012` | **confronto_non_causale** | L'isoritmia, nel senso musicologico circoscritto di organizzazione di ripetizioni ritmiche, compare in alcuni mottetti medievali e trecenteschi; non tutti i mottetti medievali sono isoritmici, né il genere si definisce unicamente mediante questa tecnica. |

### Precisazioni storico-filologiche

- **Guido:** ruolo confermato nella sistematizzazione della notazione delle altezze e delle tecniche didattiche sul rigo. John Haines (Oxford), Open University e Met ricordano che l'evoluzione della notazione non inizia dal nulla con Guido e la leggenda dell'inventore unico è da correggere.
- **«Modi»:** i modi ritmici delle pratiche polifoniche e i modi ecclesiastici del canto sono ambiti distinti, mentre modalità medievale e tonalità maggiore/minore non sono identiche. `L07-A006` e `L07-A007` conservano documentazione e provenienza, ma passano a `sospeso` per impedire falsi passaggi concettuali.
- **Talea/color:** nel modello didattico dell'isoritmia la talea è un disegno di durate ritmiche, il color un segmento melodico del tenor. L'opposizione è metodologicamente utile, ma non va assolutizzata in tutte le fonti e in tutti i mottetti: Margaret Bent (*What is Isorhythm?*, 2023) e Anna Zayaruznaya (*Upper-Voice Structures and Compositional Process in the Ars Nova Motet*, 2018) documentano maggior varietà terminologica e costruttiva.
- **Ars nova/mottetto:** le relazioni fra categorie generali restano `confronto_non_causale`, con `relation=sviluppa_o_illumina`, anziché diventare discendenze generali attraversabili ai livelli II–V.

### Riferimenti indipendenti

- Siena: https://www.corimu.unisi.it/public/pagine/introduzioni/idintroduzioni/2
- BaselStaff: https://tales.nmc.unibas.ch/en/from-ink-to-sound-32/from-sound-to-ink-early-forms-of-musical-notation-188/lines-and-staff-949
- Haines: https://academic.oup.com/mq/article-abstract/91/3-4/327/1061299?login=false
- OpenU: https://www.open.edu/openlearn/mod/oucontent/view.php?id=26857&section=2.3
- Met: https://www.metmuseum.org/pt/perspectives/musical-bodies-guidonian-hand
- Modal: https://tales.nmc.unibas.ch/en/from-ink-to-sound-32/coordination-in-rhythm-modal-notation-189/encoding-musical-rhythm-954
- Mensural: https://tales.nmc.unibas.ch/en/from-ink-to-sound-32/early-mensural-notation-190/the-notational-system-of-mensural-music-965
- Cambridge: https://www.cambridge.org/core/books/abs/cambridge-history-of-western-music-theory/evolution-of-rhythmic-notation/FCDC004AB5A57E00A088E379263018C3
- Treccani: https://www.treccani.it/enciclopedia/l-ars-nova-francese-e-guillaume-de-machaut_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- Bent: https://academic.oup.com/book/55812/chapter-abstract/435424405
- Zayaruznaya: https://www.routledge.com/Upper-Voice-Structures-and-Compositional-Process-in-the-Ars-Nova-Motet/Zayaruznaya/p/book/9780203730867
- Nebraska: https://pressbooks.nebraska.edu/openmusictheory/chapter/diatonic-modes/

### Integrità e regressione algoritmica

- 608 nodi, 1.520 archi, 0 ID duplicati, 0 estremi mancanti; JSON serializzato e riparsato.
- **203** `riscontro_storico_indipendente`, **219** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **60** `confronto_non_causale`, **46** `sospeso`. Flag distinto `historical_verified_independently=true`: **238**.
- Simulazione dei vicini I–V sul dataset, esclusi i ponti genericamente classificatori dopo il livello I, con soli filtri `trattazione` e `menzione`. Le cifre sono nuovi nodi raggiunti per profondità:

| Radice | Prima I / II / III / IV / V | Dopo I / II / III / IV / V |
| --- | --- | --- |
| Guido d’Arezzo | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Rigo diatonico e solmisazione guidoniana | 0 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Neumi e memoria del gesto | 0 / 0 / 0 / 0 / 0 | 1 / 0 / 0 / 0 / 0 |
| Modi ritmici della polifonia medievale | 0 / 0 / 0 / 0 / 0 | 1 / 0 / 0 / 0 / 0 |
| Notazione mensurale e rapporti di durata | 0 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Isoritmia del mottetto trecentesco | 0 / 0 / 0 / 0 / 0 | 4 / 0 / 0 / 0 / 0 |
| Talea: serie ritmica ricorrente | 0 / 0 / 0 / 0 / 0 | 1 / 1 / 0 / 0 / 0 |
| Color: successione melodica ricorrente | 0 / 0 / 0 / 0 / 0 | 1 / 1 / 0 / 0 / 0 |
| Jacques Offenbach | 6 / 0 / 0 / 0 / 0 | 6 / 0 / 0 / 0 / 0 |
| Johann Strauss figlio | 3 / 0 / 0 / 0 / 0 | 3 / 0 / 0 / 0 / 0 |
| Franz Lehár | 4 / 0 / 0 / 0 / 0 | 4 / 0 / 0 / 0 / 0 |
| Operetta francese / opéra-bouffe | 4 / 1 / 0 / 0 / 0 | 4 / 1 / 0 / 0 / 0 |

- Verifica anti-regressione: i 15 archi dell'operetta del Lotto 21 rimangono rapporti `confronto_non_causale` e i livelli II–V di Offenbach, Strauss II e Lehár non si allargano per effetto di questo lotto.
- **Limite:** la simulazione sui dati non costituisce collaudo visivo WebGL in browser.

### Prosecuzione indicata

Verificare specifici lavori/manoscritti, eventi e relazioni documentali della scuola di Notre-Dame e Ars nova, tenendo separati repertori, pratiche e categorie teoriche.

---

## Lotto 23 — 8 novembre 2026: Machaut, Vitry e polifonia di Notre-Dame

**Ambito:** sette archi dal `L07-A013` al `L07-A019`. Verifica di repertori, testimonianze, tradizioni e genealogie compositive. Nessuna integrazione editoriale nelle pagine.

| ID | Esito | Riscontro puntuale |
| --- | --- | --- |
| `L07-A013` | **riscontro_storico_indipendente** | Machaut: 23 mottetti documentati dal manoscritto BnF Français 1584; la *Messe de Nostre Dame* è un'opera distinta. |
| `L07-A014` | **riscontro_storico_indipendente** | Philippe de Vitry: contributo alla teoria ars nova attestato, ma tradizione trattatistica frammentaria e attribuzioni discusse; non presupporre un testo integralmente autografo e stabile del 1322. |
| `L07-A015` | **riscontro_storico_indipendente** | Notre-Dame è il luogo centrale della tradizione polifonica parigina; la «scuola» è un costrutto storico-musicale e non un'accademia moderna. |
| `L07-A016` | **riscontro_storico_indipendente** | Léonin associato al *Magnus liber organi* da Anonimo IV; non attribuire automaticamente ogni brano anonimo a Léonin. |
| `L07-A017` | **riscontro_storico_indipendente** | Pérotin associato dal medesimo testimone a revisioni, clausulae e alcune composizioni a più voci, senza estendere la paternità a tutto il corpus. |
| `L07-A018` | **riscontro_storico_indipendente** | Rete di Notre-Dame quale centro rilevante per organum, discanto e clausulae fra XII e XIII secolo, senza escludere altri centri. |
| `L07-A019` | **confronto_non_causale** | Clausula e mottetto condividono materiali; la priorità cronologica della clausula non vale in tutte le trasmissioni manoscritte. Esclusa una derivazione automatica. |

**Fonti indipendenti e fonti riutilizzabili nei capitoli:**
- DIAMM, Français 1584, elenco dei 23 mottetti di Machaut: https://www.diamm.ac.uk/sources/89/
- Oxford Bibliographies, *The Notre Dame School and the Music of the Magnus liber organi*: https://academic.oup.com/reference/62384/reference-article-abstract/555063369?login=false
- Notre-Dame de Paris, *Polyphony and Motets*: https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/
- Berkeley, studio sulla trasmissione del repertorio di Notre-Dame: https://escholarship.org/uc/item/10v1x47m
- *Music & Letters*, discussione recente della ricostruzione dei testi di Vitry: https://academic.oup.com/ml/article/103/4/772/6748880
- Treccani, *L'ars nova francese e Guillaume de Machaut*: https://www.treccani.it/enciclopedia/l-ars-nova-francese-e-guillaume-de-machaut_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- Cambridge, *Origins and Interactions: Clausula, Motet, Conductus*: https://www.cambridge.org/core/books/abs/critical-companion-to-medieval-motets/origins-and-interactions-clausula-motet-conductus/5470776C538E8317F26335BDE055C7B8
- Università di Glasgow, *Musical reuse in the Notre Dame repertory*: https://theses.gla.ac.uk/85172/

**Nota storico-filologica da conservare:** la distanza cronologica del testimone Anonimo IV impone cautela nelle attribuzioni nominali. La disputa sulla cronologia clausula–mottetto deve rimanere visibile nelle future integrazioni della pagina *Medioevo*. Lo studio più recente della tradizione teorica di Vitry non consente né la certezza ingenua di un unico testo del 1322 né l'assoluta negazione della trasmissione scritta.

---

## Lotto 24 — 8 novembre 2026: continuità di generi, cantus firmus, monocordo, Squarcialupi e madrigale

**Ambito:** nove archi `L07-A020`–`L07-A028`. Due riscontri storici specifici, sei confronti storico-editoriali non causali, una relazione negativa sospesa. Nodi e archi non sono stati aggiunti o cancellati.

| ID | Esito | Riscontro puntuale |
| --- | --- | --- |
| `L07-A020` | **confronto_non_causale** | Mottetto medievale e rinascimentale: permanenza del termine, profonda differenziazione del repertorio; no discendenza lineare automatica. |
| `L07-A021` | **confronto_non_causale** | La pratica mottettistica nel primo Seicento coesiste con concerti sacri e basso continuo; esempi di Dering, Raval e Viadana, non passaggio unico valido per ogni tradizione. |
| `L07-A022` | **confronto_non_causale** | Il cantus firmus è una tecnica di uso di materiali preesistenti, distinta dall'imitazione polifonica in senso generale. |
| `L07-A023` | **confronto_non_causale** | I cantus firmi possono attingere al canto liturgico ma anche a melodie profane. |
| `L07-A024` | **riscontro_storico_indipendente** | Il monocordo esemplifica rapporti di lunghezza delle corde e consonanze (2:1, 3:2, 4:3) nel quadro matematico del quadrivium. |
| `L07-A025` | **sospeso** | Arco negativo monocordo → «modalità, tonalità e teoria armonica» non tradotto in un percorso attivo; teoria delle proporzioni e tonalità funzionale non sono sinonimi. |
| `L07-A026` | **riscontro_storico_indipendente** | Il Codice Squarcialupi, manoscritto quattrocentesco con repertorio trecentesco, conserva opere di Francesco Landini nei fogli 121v–171r. |
| `L07-A027` | **confronto_non_causale** | Squarcialupi documenta il Trecento musicale italiano: non va confuso senza precisazioni con il corpus francese dell'Ars nova. |
| `L07-A028` | **confronto_non_causale** | Madrigale trecentesco e cinquecentesco: omonimia e tradizioni diverse, non evoluzione necessaria dell'uno nell'altro. |

**Fonti indipendenti e occasioni editoriali future:**
- Oxford Bibliographies, storia dei mottetti: https://academic.oup.com/reference/62400/reference-article-abstract/555408575?login=false
- Oxford, generi e tecniche rinascimentali: https://academic.oup.com/book/44835/chapter-abstract/384399545
- *Music & Letters*, mottetti concertati di Richard Dering: https://doi.org/10.1093/ml/gcm131
- Studi su Raval e le raccolte di Viadana: https://novaresearch.unl.pt/en/publications/still-another-book-of-small-scale-motets-sebasti%C3%A1n-ravals-motecta/
- Oxford Bibliographies, *Cantus Firmus*: https://academic.oup.com/reference/62400/reference-article-abstract/555393534
- Whipple Museum, Cambridge, *Monochord*: https://www.whipplemuseum.cam.ac.uk/explore-whipple-collections/acoustics/monochord
- Treccani, Boezio, matematica della musica e quadrivium: https://www.treccani.it/enciclopedia/boezio-e-la-scienza-della-musica_%28Storia-della-civilta-Europea%29/
- DIAMM, Codice Squarcialupi (MS Mediceo Palatino 87): https://www.diamm.ac.uk/sources/671/
- Treccani, *Ars nova*: https://www.treccani.it/enciclopedia/ars-nova/
- Treccani, *Madrigale*: https://www.treccani.it/enciclopedia/madrigale/
- Treccani, madrigale cinquecentesco e contesti poetici: https://www.treccani.it/enciclopedia/il-madrigale_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/

**Precisazione utile per una futura revisione del capitolo *Rinascimento*:** il Codice Squarcialupi **non è un manoscritto del Trecento**, ma un manoscritto del Quattrocento che conserva musica del Trecento. La fonte DIAMM registra una datazione controversa all'interno del XV secolo. Il madrigale cinquecentesco si colloca in una tradizione nuova, che attinge anche alla frottola e alle tecniche contrappuntistiche franco-fiamminghe.

### Integrità e verifiche sui due lotti
- **608 nodi, 1.520 relazioni**; nessun ID duplicato o estremo mancante, JSON ricodificato/riparsato in formato originale.
- Archi riesaminati: **16** (Lotto 23: 7; Lotto 24: 9).
- Esiti: **8 riscontri storici indipendenti**, **7 confronti non causali**, **1 sospeso**.
- Quality gate al termine: **211** `riscontro_storico_indipendente`, **203** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **67** `confronto_non_causale`, **47** `sospeso`.
- Flag autonomo `historical_verified_independently=true`: **246**. La differenza rispetto ai 211 quality gate confermati è stata preservata, non appianata artificialmente.
- Le sette relazioni di confronto impiegano `sviluppa_o_illumina`, verbo già escluso dall'espansione automatica dal II livello nel Lotto 21, per evitare nuovi hub genealogici nei percorsi.
- Nessuna modifica a interfaccia, menu, capitoli o automatismi; i test sul dato non sostituiscono il collaudo grafico WebGL.

### Prossima verifica consigliata
Lotto 25: `L07-A029` e successivi, verificando il madrigale fra Cinquecento e primo Seicento, Monteverdi e Ottaviano Petrucci. Per le opere a stampa controllare la data dell'edizione specifica e distinguere la prima edizione dalle copie superstiti. Conservare l'origine documentaria delle correzioni per eventuali integrazioni editoriali future.

---

## Lotto 25 — 8 novembre 2026: Monteverdi, madrigale, Petrucci e Odhecaton

**Ambito:** L07-A029–L07-A036, 8 relazioni; controllo storico-filologico indipendente e distinzione fra attribuzione documentata e confronto contestuale. Non sono state cambiate pagine, menu o interfaccia.

| ID | Quality gate | Motivo documentato e limiti della relazione |
| --- | --- | --- |
| `L07-A029` | **confronto_non_causale** | Il madrigale a più voci del Cinquecento non cessa alla soglia del 1600: coesiste, nel primo Seicento, con madrigali concertati, organici ridotti, basso continuo e scrittura espressiva sempre più differenziata. È una storia plurale, non l'evoluzione necessaria dell'intero genere in monodia. |
| `L07-A030` | **riscontro_storico_indipendente** | Claudio Monteverdi pubblicò il primo libro dei madrigali a cinque voci nel 1587, il settimo nel 1619 e l'ottavo, Madrigali guerrieri et amorosi, nel 1638. Le raccolte documentano il passaggio da scritture polifoniche a prassi concertate e rappresentative, non l'abbandono universale della polifonia. |
| `L07-A031` | **confronto_non_causale** | Nel tardo Cinquecento madrigale polifonico, sperimentazioni espressive sul testo e nuove scritture monodiche sono repertori in relazione, ma il recitar cantando fiorentino non è l'esito meccanico del madrigale. Confronto fra pratiche della parola musicale, non discendenza univoca del teatro musicale. |
| `L07-A032` | **riscontro_storico_indipendente** | Ottaviano Petrucci pubblicò a Venezia la prima edizione dell'Harmonice musices Odhecaton A nel 1501. La copia digitalizzata dalla Library of Congress è una terza edizione del 1504, non l'esemplare originale del 1501; il primo esemplare superstite dell'edizione del 1501 è incompleto. |
| `L07-A033` | **riscontro_storico_indipendente** | L'Odhecaton A (Venezia, 1501) è una delle prime grandi raccolte di polifonia prodotte a stampa con caratteri mobili e impresa decisiva nella storia dell'editoria musicale. Non fu la prima comparsa di note musicali a stampa in assoluto, né ogni esemplare oggi consultabile risale alla princeps. |
| `L07-A034` | **confronto_non_causale** | L'Odhecaton raccoglie soprattutto chansons polifoniche a tre o quattro voci provenienti da più autori; documenta la circolazione di pratiche contrappuntistiche, ma non ogni brano è definibile mediante imitazione sistematica, né il libro coincide con tutta la polifonia rinascimentale. |
| `L07-A035` | **confronto_non_causale** | La stampa di musica polifonica favorì progressivamente la disponibilità e la circolazione di repertori vocali fra centri europei, pur con costi, accesso selettivo e sopravvivenza della trasmissione manoscritta. Non equivale all'invenzione della diffusione della musica o all'immediata democratizzazione dell'accesso. |
| `L07-A036` | **confronto_non_causale** | L'Odhecaton è un'antologia a stampa di musiche vocali polifoniche di tradizione quattrocentesca, soprattutto chansons, non una raccolta di madrigali italiani del Cinquecento. È un caso documentato della prima editoria musicale, non il modello unico di tutta la sua produzione vocale. |

### Fonti esterne controllate
- https://sscm-jscm.org/jscm-issues/volume-18-no-1/claudio-monteverdi-a-chronology/
- https://www.treccani.it/enciclopedia/claudio-gian-antonio-monteverdi_%28Dizionario-Biografico%29/
- https://www.treccani.it/enciclopedia/il-madrigale_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.fondazionemonteverdi.it/catalogo-pubblicazioni/art/madrigali-guerrieri-e-amorosi-libro-ottavo-1638
- https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Dizionario-Biografico%29/
- https://www.loc.gov/resource/music.musihas-200154768/?st=text
- https://old-digitalcollections.nypl.org/items/3ccb04c0-67ff-0130-e14f-58d385a7bbd0
- https://guides.loc.gov/music-anthologies/how-to-search
- https://www.metmuseum.org/fr/essays/music-in-the-renaissance
- https://catalogue.bnf.fr/ark:/12148/cb432000723

### Questioni storico-editoriali da conservare
- **Monteverdi:** la continuità dei libri di madrigali fino al 1638 (ottavo libro) non prova l'abbandono generale della polifonia a vantaggio del recitar cantando.
- **Petrucci:** l'editore non è l'autore delle composizioni stampate. La princeps dell'Odhecaton è del 1501; Library of Congress e NYPL conservano copie della terza edizione del 1504.
- **Stampa:** non asserire che Petrucci abbia stampato in assoluto le prime note musicali; l'innovazione riguarda la produzione sistematica di polifonia a caratteri mobili. L'Odhecaton contiene in prevalenza chansons e non madrigali cinquecenteschi.
- Le categorie di lunga durata non aprono automaticamente percorsi genealogici ai livelli successivi.

---

## Lotto 26 — 8 novembre 2026: trattatistica, Franco-Fiamminghi, Roma e San Marco

**Ambito:** L07-A037–L07-A046, 10 relazioni; controllo storico-filologico indipendente e distinzione fra attribuzione documentata e confronto contestuale. Non sono state cambiate pagine, menu o interfaccia.

| ID | Quality gate | Motivo documentato e limiti della relazione |
| --- | --- | --- |
| `L07-A037` | **confronto_non_causale** | I trattati strumentali cinquecenteschi circolarono anche a stampa: la Fontegara di Silvestro Ganassi (Venezia, 1535) e il Tratado de glosas di Diego Ortiz (Roma, 1553) sono esempi specifici di trasmissione scritta di tecniche e diminuzioni. Non tutte le pratiche erano codificate né ogni trattato ebbe medesima diffusione. |
| `L07-A038` | **confronto_non_causale** | Le fonti didattiche del XVI secolo, come Ganassi e Ortiz, sono documenti primari per ricostruire tecniche, ornamentazione e prassi dell'epoca, e oggi informano scelte interpretative HIP. Un trattato descrive tuttavia una pratica situata; non prescrive un'unica soluzione esecutiva 'autentica' per tutti gli autori e i luoghi. |
| `L07-A039` | **confronto_non_causale** | Le diverse tradizioni franco-fiamminghe fra Quattrocento e Cinquecento contribuirono alla circolazione europea di repertori, tecniche contrappuntistiche e scrittura imitativa. Non costituirono un'unica scuola con programma immutabile, né ogni componimento appartenente a questi repertori è imitativo. |
| `L07-A040` | **confronto_non_causale** | Musicisti e repertori dell'area franco-fiamminga operarono in reti europee di corti, cappelle e istituzioni ecclesiastiche. I casi di Josquin a Milano, Roma e nell'orbita estense mostrano la mobilità, senza ridurre tutte le carriere a una stessa filiera di mecenatismo. |
| `L07-A041` | **riscontro_storico_indipendente** | Josquin des Prez è figura centrale della tradizione compositiva franco-fiamminga fra tardo Quattrocento e primo Cinquecento, attiva su scala europea. La sua biografia attraversa ambienti di cappella e corti; cronologie e attribuzioni di singoli incarichi sono state oggetto di revisioni musicologiche, quindi non vanno irrigidite in un itinerario senza riserve. |
| `L07-A042` | **riscontro_storico_indipendente** | Giovanni Pierluigi da Palestrina fu nominato cantore della cappella pontificia nel 1555; il 30 luglio dello stesso anno fu allontanato, insieme ad altri, durante la riforma di Paolo IV. Non va confuso questo breve servizio nella Cappella Sistina con le sue cariche più estese alla Cappella Giulia di San Pietro e presso altre basiliche romane. |
| `L07-A043` | **confronto_non_causale** | Il repertorio della cappella pontificia romana contribuì alla lunga ricezione di un ideale di polifonia sacra associato anche a Palestrina, che nelle teorie e prassi successive viene letto come stile antico. Questa etichetta retrospettiva non coincide con l'intera produzione dei cantori della Cappella Sistina né esaurisce la musica a Roma. |
| `L07-A044` | **riscontro_storico_indipendente** | La Cappella musicale di San Marco opera storicamente presso la Basilica di San Marco a Venezia, quale istituzione musicale distinta dall'edificio e dalla sua funzione liturgica; la tradizione istituzionale viene documentata fin dagli inizi del XIV secolo. |
| `L07-A045` | **riscontro_storico_indipendente** | Nella Cappella musicale di San Marco, soprattutto nel XVI secolo, si sviluppò un'importante tradizione di cori spezzati e policoralità, legata a musicisti come Willaert e i Gabrieli, alla pratica vocale e strumentale e alle occasioni cerimoniali. Il fenomeno non fu creato automaticamente dall'architettura né appartenne solo a Venezia. |
| `L07-A046` | **riscontro_storico_indipendente** | Giovanni Gabrieli fu organista presso la cappella ducale di San Marco dal 1585 fino alla morte, nel 1612. È una relazione professionale specifica; non implica che ricoprisse stabilmente l'ufficio di maestro di cappella. |

### Fonti esterne controllate
- https://www.treccani.it/enciclopedia/silvestro-di-ganassi_%28Dizionario-Biografico%29/
- https://www.bne.es/es/colecciones/partituras/partituras-compilaciones/primo-secondo-libro-diego-ortiz-tolletano
- https://limateneo.com/index.php/Recercare/article/view/76
- https://www.metmuseum.org/fr/essays/music-in-the-renaissance
- https://www.treccani.it/enciclopedia/despres-josse-detto-josquin/
- https://www.treccani.it/enciclopedia/pierluigi-da-palestrina-giovanni-detto-anche-il-palestrina_%28Dizionario-Biografico%29/
- https://www.basilicasanmarco.it/basilica/tradizione-musicale/
- https://academic.oup.com/reference/62400/reference-article-abstract/571523757
- https://www.treccani.it/enciclopedia/giovanni-gabrieli/

### Questioni storico-editoriali da conservare
- **Ganassi e Ortiz:** Fontegara (Venezia 1535), Tratado de glosas (Roma 1553) descrivono tecniche esecutive situate; sono fonti per HIP ma non manuali normativi universali.
- **Josquin:** appartenenza franco-fiamminga e attività italiana non devono ridursi a una singola scuola o itinerario professionale rigidamente accertato.
- **Palestrina:** servizio alla cappella pontificia soltanto nel 1555, terminato il 30 luglio; da distinguere dalla Cappella Giulia e dalle altre istituzioni romane.
- **Giovanni Gabrieli:** organista di San Marco dal 1585 al 1612, non automaticamente maestro di cappella. Policoralità veneziana non deriva meccanicamente dalla sola architettura.

---

## Lotto 27 — 8 novembre 2026: Giovanni Gabrieli, Sonata pian e forte e sonata strumentale

**Ambito:** L07-A047–L07-A055, 9 relazioni; controllo storico-filologico indipendente e distinzione fra attribuzione documentata e confronto contestuale. Non sono state cambiate pagine, menu o interfaccia.

| ID | Quality gate | Motivo documentato e limiti della relazione |
| --- | --- | --- |
| `L07-A047` | **confronto_non_causale** | La policoralità sviluppata a San Marco è un caso eminente di disposizione e dialogo fra gruppi sonori, nell'orizzonte dei 'cori spezzati'. La pratica non coincide esclusivamente con l'acustica della basilica, né ogni musica veneziana o ogni brano di Gabrieli deve essere descritto come policorale. |
| `L07-A048` | **riscontro_storico_indipendente** | La raccolta a stampa Sacrae symphoniae, libro I (Venezia, 1597) include la Sonata pian e forte a otto parti di Giovanni Gabrieli (catalogo Ch. 175). La data è quella della pubblicazione, non una prova della prima esecuzione nel 1597. |
| `L07-A049` | **riscontro_storico_indipendente** | Giovanni Gabrieli è il compositore della Sonata pian e forte a otto parti, pubblicata nel primo libro delle Sacrae symphoniae (1597). Il brano non è una forma-sonata classica e non autorizza affermazioni sull'invenzione delle indicazioni dinamiche in assoluto. |
| `L07-A050` | **riscontro_storico_indipendente** | La Sonata pian e forte (1597) esemplifica l'uso tardocinquecentesco di 'sonata' come brano strumentale, qui per otto parti in due cori. Il titolo non implica né movimenti in forma-sonata né un'orchestrazione ottocentesca. |
| `L07-A051` | **riscontro_storico_indipendente** | La Sonata pian e forte prevede nel primo dei due gruppi strumentali un cornetto e tre tromboni storici (sackbuts); il cornetto è un aerofono a bocchino distinto dalla moderna cornetta a pistoni. Non si deve sostituire nell'informazione del grafo con una tromba moderna. |
| `L07-A052` | **riscontro_storico_indipendente** | La Sonata pian e forte dispone complessivamente sei parti di trombone storico, tre per ciascuno dei due cori. Il termine sackbut indica la famiglia storica del trombone a coulisse, non un moderno organico omogeneo di ottoni. |
| `L07-A053` | **riscontro_storico_indipendente** | La Sonata pian e forte (1597) dispone otto parti in due cori strumentali: il primo con cornetto e tre tromboni, il secondo con uno strumento ad arco della famiglia della viola/violino e tre tromboni. Prevede alternanze, sovrapposizioni e indicazioni piano/forte; è un esempio della policoralità strumentale veneziana, senza prova che la prima esecuzione sia avvenuta dentro San Marco. |
| `L07-A054` | **confronto_non_causale** | L'uso di 'sonata' nel tardo Cinquecento per musica strumentale appartiene alla storia, molto differenziata, del termine sonata. La sonata barocca e poi classica sviluppano organici e articolazioni mutevoli: il nome comune non prova una forma musicale immutata. |
| `L07-A055` | **sospeso** | Il termine cinquecentesco 'sonata' designa una composizione da suonare e non il principio formale classicistico di esposizione-sviluppo-ripresa. L'arco negativo verso 'forma-sonata e processi tematici' è sospeso: serve a evitare un errore terminologico, non a generare un percorso navigabile fra generi storicamente distinti. |

### Fonti esterne controllate
- https://www.basilicasanmarco.it/basilica/tradizione-musicale/
- https://academic.oup.com/reference/62400/reference-article-abstract/571523757
- https://imslp.org/wiki/Sonata_pian_e_forte%2C_Ch.175_%28Gabrieli%2C_Giovanni%29
- https://www.treccani.it/enciclopedia/giovanni-gabrieli/
- https://natlib.govt.nz/records/22112668
- https://www.allmusic.com/composition/sacrae-symphoniae-no-6-sonata-pian-e-forte-for-8-parts-c-175-mc0002477790
- https://www.treccani.it/enciclopedia/sonata/
- https://www.treccani.it/enciclopedia/sonata_%28Enciclopedia-dei-ragazzi%29/
- https://www.treccani.it/enciclopedia/sonata_%28Enciclopedia-Italiana%29/

### Questioni storico-editoriali da conservare
- **Sonata pian e forte:** stampata nelle Sacrae symphoniae I (1597). Non dare per certa una prima esecuzione nel 1597 o una prima esecuzione nella Basilica di San Marco.
- **Organico originale:** primo coro cornetto + 3 tromboni; secondo coro viola/violino + 3 tromboni. Alcune partiture novecentesche sostituiscono gli strumenti con ottoni moderni: non retroproiettare le trascrizioni nell'originale.
- **Indicazioni dinamiche:** piano/forte sono esplicite e storicamente notevoli, ma non attribuire a Gabrieli il primo uso assoluto di indicazioni dinamiche.
- **Forma-sonata:** l'identità del termine 'sonata' in epoche diverse non autorizza l'identità con la forma-sonata classica; l'arco di negazione è sospeso.

### Controlli di integrità e stato dopo Lotto 27

- Lotti 25–27: **27** relazioni esaminate, **14** convalidate con riscontro indipendente, **12** classificate confronti non causali, **1** sospesa.
- Dataset invariato nelle dimensioni: **608 nodi**, **1.520 relazioni**; nessun ID duplicato, estremità di tutti gli archi esistenti.
- Gate aggiornati: **225** `riscontro_storico_indipendente`, **176** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **79** `confronto_non_causale`, **48** `sospeso`.
- Flag autonomo `historical_verified_independently=true`: **260**; non forzare la sua uguaglianza con il gate storico (esistono altre relazioni già confermate con gate specifici).
- Tutti i collegamenti contestuali sono stati riformulati con `sviluppa_o_illumina`, già escluso dalla propagazione automatica dopo il primo livello secondo la regola del Lotto 21. Il collegamento avversativo `L07-A055` resta sospeso.
- Fonti, motivazioni, ID precedenti, `previous_quality_gate`, `previous_description`, eventuale `previous_relation` preservati. Nessuna nuova entità, nessun nuovo collegamento, nessuna nuova voce di menu.
- I controlli del grafo serializzato non equivalgono a collaudo del rendering 3D/WebGL su smartphone o desktop.

**Prossimo gruppo proposto, Lotto 28:** `L07-A056` in avanti: consort, viola da gamba, viola/lira da braccio, violino, ribeca, organistrum/ghironda e violone storico. Distinguere famiglie organologiche, termini storici, filiazioni documentate e semplici analogie.

---

## Lotto 28 — 8 novembre 2026: Consort, viole, ribeca, ghironda, violone e strumenti d'insieme

**Preflight e metodo:** riletti i file remoti `main` dopo il Lotto 27; soli `grafo.json` e questo registro modificati. Dieci relazioni candidate verificate `L07-A056`–`L07-A065`. Verificate indipendentemente le proposizioni storiche specifiche e differenziate le classificazioni e i raccordi metodologici. `confronto_non_causale` non equivale a `riscontro_storico_indipendente`.

| ID | Nuovo gate | Relazione e motivazione |
| --- | --- | --- |
| `L07-A056` | **confronto_non_causale** | Le viole da gamba di differenti taglie (soprano, tenore, basso e varianti) furono impiegate in consort, soprattutto nelle pratiche domestiche e di corte tra Rinascimento ed età barocca. «Consort» non significa necessariamente solo ensemble di viole da gamba, né un organico immutato nel tempo. |
| `L07-A057` | **confronto_non_causale** | Viola da gamba e violoncello sono cordofoni ad arco di famiglie organologiche storicamente distinte, che per alcuni secoli convissero. Differiscono di norma per tastatura, accordatura e costruzione; il violoncello appartiene alla famiglia del violino. La viola da gamba non è la «madre» diretta del violoncello. |
| `L07-A058` | **confronto_non_causale** | Il violino cinquecentesco emerse nell'Italia settentrionale dalla combinazione di caratteristiche di diversi strumenti ad arco: ribeca, fiddle/vielle e lira da braccio. La lira da braccio offre un precedente morfologico, ma non è possibile ricondurre il violino a una semplice discendenza da tutta la famiglia delle «viole da braccio». |
| `L07-A059` | **sospeso** | Il generico collegamento negativo tra «viola/lira da braccio» e «viola da gamba» non costituisce un rapporto storico traversabile. Le denominazioni sono in parte sovrapposte e le prassi/costruzioni differiscono, ma non si deduce un arco genealogico o un'autentica opposizione di tutte le famiglie. |
| `L07-A060` | **riscontro_storico_indipendente** | La ribeca è uno degli antecedenti documentati della famiglia del violino; in particolare la sua accordatura a quinte contribuì al profilo dei primi violini cinquecenteschi, insieme agli apporti della vielle/fiddle e della lira da braccio. Non rappresenta un unico «antenato» esclusivo. |
| `L07-A061` | **confronto_non_causale** | Organistrum medievale, symphonia e ghironda/vielle à roue sono varianti storicamente collegate di cordofoni nei quali una ruota azionata a manovella sfrega le corde, mentre tasti o tangenti regolano la melodia. L'organistrum più antico poteva richiedere due suonatori, diversamente da modelli posteriori più piccoli; non ogni denominazione identifica il medesimo strumento. |
| `L07-A062` | **confronto_non_causale** | Nel XVI–XVIII secolo «violone» non indica un oggetto univoco: la terminologia può riferirsi a bassi ad arco differenti, in registri da 8' o 16' e in famiglie strumentali diverse, a seconda di regione e repertorio. Il termine «violoncello» si stabilizza in epoca successiva: non ogni violone è un violoncello, ma esistono intersezioni terminologiche. |
| `L07-A063` | **riscontro_storico_indipendente** | Cornetto (aerofono a bocchino con fori digitali) e trombone rinascimentale/barocco furono spesso accostati in complessi strumentali e musica sacra tra XVI e XVII secolo. La loro associazione esecutiva è documentata, ma essi non appartengono alla stessa linea organologica. |
| `L07-A064` | **confronto_non_causale** | La prassi esecutiva storicamente informata moderna studia trattati, strumenti superstiti e repertori per ricostruire la tecnica del cornetto, il suo impasto con le voci e l'associazione ai tromboni. È una ricerca contemporanea, non la prova di continuità orchestrale ininterrotta del cornetto storico. |
| `L07-A065` | **confronto_non_causale** | Gli ensemble di musica antica moderni ricostruiscono tipologie di consort e scelte di organico sulla base di documenti e strumenti storici, distinguendo consort omogenei e misti. Le ricostruzioni differiscono fra interpreti e non restituiscono automaticamente un originale sonoro incontrovertibile. |

### Fonti di riscontro
- https://www.metmuseum.org/de/essays/the-viol
- https://www.vdgsa.org/about-the-viol
- https://academic.oup.com/book/62684/chapter-abstract/561965421
- https://www.metmuseum.org/pt/essays/renaissance-violins
- https://caslabs.case.edu/medren/medieval-instruments/hurdy-gurdy-medieval/
- https://scholarship.claremont.edu/ppr/vol9/iss1/7/
- https://www.cambridge.org/core/journals/eighteenth-century-music/article/abs/sixteenfoot-violone-in-concerted-music-of-the-seventeenth-and-eighteenth-centuries-issues-of-terminology-and-function/0F79CC23F21585D183801F943EDD9C23
- https://academic.oup.com/em/article-abstract/46/2/343/4996924
- https://americanarchive.org/catalog/cpb-aacip-2189aee4ff5

### Precisazioni da conservare per i capitoli
- *Ribeca e violino*: antecedente multiplo, accordatura e forma non sono attribuibili a un solo cordofono. Le viole da gamba restano distinta famiglia.
- *Violone*: designazione storica mutevole; controllare funzione, registro (8'/16'), località e cronologia prima di dedurre il contrabbasso o il violoncello.
- *Organistrum*: famiglia storica dei cordofoni a ruota. Non confondere nome medievale, ghironda moderna e organo a canne.
- *Cornetto e trombone*: frequente compresenza di organico, non parentela fra strumenti. Il cornetto storico non è la moderna cornetta a pistoni.
- *HIP*: confronto moderno con fonti antiche, senza certificare una ricostruzione sonora unica.

---

## Lotto 29 — 8 novembre 2026: Lutero, corale, ricercare, Bach e temperamenti

**Preflight e metodo:** riletti i file remoti `main` dopo il Lotto 27; soli `grafo.json` e questo registro modificati. Dieci relazioni candidate verificate `L07-A066`–`L07-A075`. Verificate indipendentemente le proposizioni storiche specifiche e differenziate le classificazioni e i raccordi metodologici. `confronto_non_causale` non equivale a `riscontro_storico_indipendente`.

| ID | Nuovo gate | Relazione e motivazione |
| --- | --- | --- |
| `L07-A066` | **riscontro_storico_indipendente** | Martin Lutero fu protagonista della Riforma nel XVI secolo e attribuì alla musica funzioni liturgiche, educative e comunitarie, favorendo lo sviluppo di particolari tradizioni luterane. Non gli si può attribuire da solo la totalità dei repertori protestanti, che variarono fra regioni e confessioni. |
| `L07-A067` | **riscontro_storico_indipendente** | Lutero considerò utile e desiderabile il canto dei fedeli e contribuì alla tradizione del corale luterano in lingua tedesca; non abolì il canto corale liturgico né impose dappertutto una messa integralmente congregazionale. A Wittenberg il rito corale in latino persistette durante la sua vita. |
| `L07-A068` | **confronto_non_causale** | Il corale luterano compare come melodia, testo e principio strutturante in numerose cantate sacre di Bach e dei suoi contemporanei, ma corale e cantata non sono lo stesso genere; il teatro spirituale raccoglie repertori ancora diversi. Non ogni cantata presenta lo stesso rapporto con un Kirchenlied. |
| `L07-A069` | **confronto_non_causale** | Le pratiche contrappuntistiche del cosiddetto stile antico, legate anche alla ricezione di modelli polifonici rinascimentali, furono studiate e riutilizzate in età barocca. La fuga dei secoli XVII–XVIII non coincide però semplicemente con tutta la polifonia del Cinquecento né deriva da una sola scuola. |
| `L07-A070` | **confronto_non_causale** | Il ricercare strumentale tra Cinque e Seicento sviluppa spesso imitazione e contrappunto tematico, in un panorama che comprende canzona, fantasia e altri generi. Alcune pratiche confluiscono nel linguaggio della fuga, ma ricercare e fuga non sono generi equivalenti e non vi è un unico percorso di origine. |
| `L07-A071` | **riscontro_storico_indipendente** | Girolamo Frescobaldi pubblicò a Roma nel 1615 i Recercari et canzoni franzese fatte sopra diversi oblighi in partitura: dieci ricercari e cinque canzoni per strumento a tastiera. L'opera attesta l'impiego specialistico del ricercare senza farne il creatore esclusivo del genere. |
| `L07-A072` | **riscontro_storico_indipendente** | Johann Sebastian Bach intitolò Ricercar a 3 e Ricercar a 6 due elaborazioni del tema regio comprese nell'Offerta musicale BWV 1079 (1747). Il ricercare a sei voci non va identificato con l'improvvisazione a tre voci eseguita a Potsdam: è una rielaborazione scritta successiva. |
| `L07-A073` | **riscontro_storico_indipendente** | J. S. Bach compose i due libri del Wohltemperierte Clavier (il primo datato 1722, il secondo completato negli anni Quaranta del Settecento), esplorando tutti i 24 toni maggiori e minori. Il titolo rinvia alla possibilità pratica di utilizzare tutte le tonalità con un temperamento appropriato; non documenta l'adozione di un unico preciso schema né impone il temperamento equabile moderno. |
| `L07-A074` | **sospeso** | «Wohltemperiert» indica storicamente temperamenti che rendono praticabili le diverse tonalità, non una prova di uguaglianza esatta dei dodici semitoni. Il collegamento negativo con il temperamento equabile è sospeso: non è una relazione storica navigabile e non si deve sostituire a una discussione documentata delle pratiche di accordatura. |
| `L07-A075` | **confronto_non_causale** | Temperamenti mesotonici e diversi temperamenti ben temperati furono soluzioni storiche differenti alle limitazioni degli intervalli sulle tastiere. La loro diffusione e coesistenza variarono per luogo, periodo e repertorio: non si trattò di una sostituzione uniforme e improvvisa del mesotonico. |

### Fonti di riscontro
- https://www.cambridge.org/core/journals/church-history/article/abs/why-do-lutherans-sing-lutherans-music-and-the-gospel-in-the-first-century-of-the-reformation/A0B2A809E3EE5DAF47A9A7FCE5C07C24
- https://academic.oup.com/book/12682
- https://academic.oup.com/book/12682/chapter-abstract/162693855
- https://digital.pitts.emory.edu/s/digital-collections/item/13151
- https://imslp.org/wiki/Recercari_et_canzoni_%28Frescobaldi%2C_Girolamo%29
- https://www.chambermusicsociety.org/about-the-music/compositions/bach-musical-offering
- https://frederick.mml.ox.ac.uk/item11
- https://girolamofrescobaldi.com/catalog-2/
- https://www.tandfonline.com/doi/full/10.1080/09298215.2024.2375552
- https://pubmed.ncbi.nlm.nih.gov/15532672/

### Precisazioni da conservare per i capitoli
- Lutero favorisce il canto dei fedeli senza estinguere immediatamente il coro o la Messa latina; non associare a lui ogni forma di musica protestante.
- Nel linguaggio delle cantate bachiane il corale è un elemento documentato, non sinonimo dell'intera forma cantata.
- Frescobaldi pubblica dieci ricercari e cinque canzoni per tastiera nel 1615; Bach usa il nome *Ricercar* nei due brani dell'Offerta musicale del 1747. Non dedurre un prestito diretto specifico senza ulteriori fonti.
- *Wohltemperiert*: non coincide per definizione con equabile a dodici semitoni identici; la ricerca non identifica univocamente il temperamento concreto di Bach. Il collegamento negativo resta sospeso.

---

## Lotto 30 — 8 novembre 2026: Solesmes, paleografia gregoriana e ricezione bachiana nell'Ottocento

**Preflight e metodo:** riletti i file remoti `main` dopo il Lotto 27; soli `grafo.json` e questo registro modificati. Dieci relazioni candidate verificate `L07-A076`–`L07-A085`. Verificate indipendentemente le proposizioni storiche specifiche e differenziate le classificazioni e i raccordi metodologici. `confronto_non_causale` non equivale a `riscontro_storico_indipendente`.

| ID | Nuovo gate | Relazione e motivazione |
| --- | --- | --- |
| `L07-A076` | **riscontro_storico_indipendente** | I neumi medievali furono oggetto di trascrizione, confronto e interpretazione nella rinascita degli studi gregoriani nel XIX secolo, in particolare a Solesmes. I manoscritti sono fonti per le melodie e, con problemi specifici, per l'interpretazione ritmica; il restauro non replica automaticamente il suono medievale. |
| `L07-A077` | **riscontro_storico_indipendente** | L'abbazia di Solesmes promosse dalla metà dell'Ottocento lo studio comparato dei manoscritti del canto gregoriano sotto impulso di Dom Guéranger, con Paul Jausions e Joseph Pothier; pubblicò il Graduale nel 1883 e avviò con Dom André Mocquereau la Paléographie musicale nel 1889. Le ricostruzioni sono ipotesi filologico-liturgiche storicamente situate. |
| `L07-A078` | **confronto_non_causale** | Il restauro gregoriano ottocentesco rilegge testi e melodie dei repertori liturgici medievali secondo metodi di comparazione manoscritta, e ne plasma la ricezione e la stampa moderne. Non può identificarsi senza residui né con ogni pratica locale medievale né con l'intera storia della salmodia cristiana. |
| `L07-A079` | **riscontro_storico_indipendente** | Felix Mendelssohn diresse l'11 marzo 1829 alla Sing-Akademie di Berlino una ripresa della Passione secondo Matteo di J. S. Bach, dopo averne preparato una versione abbreviata con tagli e adattamenti. Non fu una presentazione filologicamente identica all'esecuzione di Bach. |
| `L07-A080` | **riscontro_storico_indipendente** | La Sing-Akademie zu Berlin fu l'istituzione corale in cui l'11 marzo 1829 Mendelssohn diresse la ripresa della Passione secondo Matteo. Era già un centro di studio e pratica del repertorio sacro, fondato nel 1791 da C. F. C. Fasch, dunque non creato per quell'evento. |
| `L07-A081` | **riscontro_storico_indipendente** | Carl Friedrich Zelter succedette a C. F. C. Fasch nella direzione della Sing-Akademie dopo il 1800 e curò la trasmissione del repertorio bachiano, anche come insegnante di Felix e Fanny Mendelssohn. Il suo ruolo precede la ripresa del 1829. |
| `L07-A082` | **riscontro_storico_indipendente** | L'evento berlinese dell'11 marzo 1829 fu una ripresa pubblica della Passione secondo Matteo di Bach, realizzata da Mendelssohn in forma ridotta e modificata. È corretto riconoscere l'identità dell'opera eseguita e contemporaneamente distinguere l'identità testuale e performativa della versione del 1829. |
| `L07-A083` | **confronto_non_causale** | La ripresa berlinese del 1829 fu un momento simbolicamente determinante nella ricezione ottocentesca di Bach, specialmente per la Passione secondo Matteo. Non è l'origine assoluta del «ritorno» di Bach: la musica era già conservata, studiata e coltivata in circoli familiari e istituzionali, anche a Berlino. |
| `L07-A084` | **riscontro_storico_indipendente** | Zelter contribuì alla ricezione e trasmissione della musica di J. S. Bach nell'ambiente berlinese: guidò la Sing-Akademie, mantenne il rapporto con il repertorio corale sacro e insegnò ai Mendelssohn. La ripresa del 1829 non fu un'iniziativa concepita nel vuoto culturale. |
| `L07-A085` | **confronto_non_causale** | La ripresa di Bach da parte di Mendelssohn nel 1829 è un fenomeno di ricezione ottocentesca, con tagli e mediazioni per il pubblico del suo tempo. La moderna HIP può studiarlo come episodio storico, ma non deve considerare quella realizzazione una ricostruzione filologicamente fedele della prassi bachiana. |

### Fonti di riscontro
- https://www.solesmes.com/musical-palaeography-workshop
- https://www.abbayedesolesmes.fr/notre-monastere/latelier-de-paleographie/
- https://archives-en.centreculturelirlandais.com/digitized-collections/online-exhibitions/finding-the-source
- https://www.loc.gov/collections/felix-mendelssohn/articles-and-essays/felix-mendelssohn-reviving-the-works-of-bach/

### Precisazioni da conservare per i capitoli
- *Solesmes*: studi paleografici avviati da Guéranger, Jausions e Pothier; nel 1883 Graduale, nel 1889 avvio *Paléographie musicale* con Mocquereau. Distinguere edizione/ricostruzione moderna da effettiva prassi medievale.
- *Sing-Akademie*: fondata nel 1791 da Fasch, poi diretta da Zelter; non fu istituita per Mendelssohn.
- *11 marzo 1829*: la Passione secondo Matteo fu diretta da Mendelssohn in una versione con tagli e adattamenti; la ricezione anteriore di Bach, compresa quella di Sarah Itzig Levy e Zelter, ne smentisce il mito della riscoperta ex nihilo.
- *HIP e Romanticismo*: l'esecuzione del 1829 è un oggetto storico di studio, non automaticamente un modello filologico.

### Integrità, filtri e prossima verifica dopo Lotto 30

- **608 nodi, 1.520 archi** invariati; identificativi delle relazioni univoci, zero nodi orfani, struttura JSON serializzata nel formato originario.
- **30 archi esaminati** fra `L07-A056` e `L07-A085`: **14** riscontri storici indipendenti, **14** confronti non causali, **2** sospesi.
- Stati `quality_gate`: **239** `riscontro_storico_indipendente`; **146** `candidato_non_fuso`; **317** `proposta_editoriale_revisionata`; **93** `confronto_non_causale`; **50** `sospeso`.
- Flag distinto `historical_verified_independently=true`: **274**. Non equiparare il valore al solo conteggio del gate `riscontro_storico_indipendente`.
- Tutti i 14 archi di confronto sono `sviluppa_o_illumina`, classificazione esclusa dall'espansione automatica oltre il I livello secondo le regole verificate nel Lotto 21. Gli archi negativi `L07-A059` e `L07-A074` sono `sospeso`, non devono diventare scorciatoie di navigazione.
- Preservati `previous_quality_gate`, `previous_description`, `previous_relation` quando modificata, fonti pregresse; annotate fonti indipendenti, note, esiti e date.
- Nessuna modifica a capitoli, menu, renderer WebGL o protocollo. Validazione del JSON e tracciamento dei metadati non equivalgono al collaudo grafico su un browser reale.

**Lotto 31 suggerito:** `L07-A086`–`L07-A092` (Grisey, *Talea*, color e analogie isoritmiche con *Liturgie de cristal* di Messiaen), poi esame di altri candidati residui del grafo; evitare ponti storici non documentati verso il capitolo del Novecento.

---

## Lotto 31 — 8 novembre 2026: Grisey, Talea, color medievale e Liturgie de cristal

**Metodo:** verifica dell'esatto significato dei rapporti sui cataloghi musicologici, risorse accademiche e, per le sole menzioni editoriali, sul file di pagina effettivo del branch `main`. 7 relazioni revisionate. Non sono stati introdotti nodi o archi e nessuna pagina, menu o interfaccia è stata modificata.

| ID | Gate conclusivo | Riscontro e precisazioni |
| --- | --- | --- |
| `L07-A086` | **riscontro_storico_indipendente** | Gérard Grisey compose Talea, ou la machine et les herbes folles fra 1985 e 1986 per flauto, clarinetto, violino, violoncello e pianoforte, su commissione di Radio France. La prima esecuzione avvenne il 13 gennaio 1987 alla Maison de Radio France, non nel 1986. |
| `L07-A087` | **riscontro_storico_indipendente** | Nella nota d'autore di Talea Grisey richiama esplicitamente la talea medievale come schema ritmico ricorrente e la dissociazione fra durate e altezze. Il riferimento è cosciente e dichiarato, ma non costituisce ripresa letterale di uno specifico mottetto trecentesco. |
| `L07-A088` | **riscontro_storico_indipendente** | Grisey scrive nella nota alla sua Talea che la parte seconda del quintetto potrebbe chiamarsi «color», richiamando così consapevolmente il rapporto medievale fra disegno ritmico e configurazione delle altezze. Non è la citazione di un color melodico documentato in un manoscritto particolare. |
| `L07-A089` | **confronto_non_causale** | Il titolo Talea e la nota d'autore di Grisey dialogano con la distinzione talea/color propria di talune strutture isoritmiche del tardo Medioevo, compresa la tradizione dell'Ars nova. Il nodo «Ars nova e mensuralismo» è però assai più ampio: il quintetto moderno non discende dall'intero periodo o dalla sua notazione mensurale. |
| `L07-A090` | **sospeso** | Il capitolo Verso le avanguardie e il Novecento tratta Gérard Grisey e lo spettralismo, ma nel corpo HTML del branch main esaminato l'opera Talea non è menzionata. Rimane proposta editoriale futura: non renderla visibile come relazione di trattazione già presente. |
| `L07-A091` | **riscontro_storico_indipendente** | Olivier Messiaen è autore di Liturgie de cristal, primo movimento del Quatuor pour la fin du temps, composto nel 1940 e presentato integralmente il 15 gennaio 1941 a Görlitz nello Stalag VIII A. Il «1941» nel titolo del nodo si riferisce al contesto della prima esecuzione, non alla data di composizione indicata dall'IRCAM. |
| `L07-A092` | **confronto_non_causale** | Nel primo movimento del Quatuor, Messiaen sovrappone al pianoforte un ciclo di 17 valori ritmici a una successione di 29 accordi, mentre altri strumenti mantengono cicli indipendenti. La dissociazione è comparabile a taluni principi dell'isoritmia medievale, ma non prova da sola il prestito consapevole da un determinato mottetto dell'Ars nova. |

### Fonti indipendenti e pagine controllate
- https://ressources.ircam.fr/fr/work/talea
- https://ressources.ircam.fr/en/composer/gerard-grisey/workcourse
- https://www.cambridge.org/core/books/abs/life-and-music-of-gerard-grisey/absolute-love-198688/369607EA5A20E6D9B0B76B481BB24DA0
- https://resources.ircam.fr/en/work/quatuor-pour-la-fin-du-temps
- https://www.chambermusicsociety.org/about-the-music/compositions/messiaen-quartet-for-the-end-of-time

### Precisazioni da conservare per l'eventuale integrazione editoriale
- La nota *autografa/autoriale trascritta* nel catalogo IRCAM di *Talea* esplicita tanto «talea» quanto «color», ma il riferimento a tutto il repertorio dell'Ars nova è comparativo e non afferma una citazione di un mottetto particolare.
- *Talea*: composizione 1985–86, prima 13 gennaio 1987 (Paris, Maison de Radio France), non prima del 1986.
- *Quatuor pour la fin du temps*: composizione catalogata nel 1940 e prima nel 1941; il nodo corrente «Liturgie de cristal (…1941)» va interpretato con tale distinzione, senza rinomina durante l'audit.
- *Liturgie de cristal*: 17 durate ritmiche e 29 accordi al pianoforte forniscono un'analogia strutturale, non una filiazione attestata dall'isoritmia medievale.
- Il file remoto `verso-le-avanguardie/index.html` menziona Grisey e lo spettralismo ma non «Talea»: `L07-A090` sospeso. Da considerare per futura integrazione autorizzata, senza modificarne ora il capitolo.

---

## Lotto 32 — 8 novembre 2026: due Camerate fiorentine, Peri e le diverse Euridici

**Metodo:** verifica dell'esatto significato dei rapporti sui cataloghi musicologici, risorse accademiche e, per le sole menzioni editoriali, sul file di pagina effettivo del branch `main`. 8 relazioni revisionate. Non sono stati introdotti nodi o archi e nessuna pagina, menu o interfaccia è stata modificata.

| ID | Gate conclusivo | Riscontro e precisazioni |
| --- | --- | --- |
| `L01-A01` | **riscontro_storico_indipendente** | Giovanni de' Bardi fu il riferimento e l'ospite della prima Camerata fiorentina, i cui membri si riunivano nella sua casa all'incirca fra 1573 e 1587. Non è corretto attribuire a quell'unico cenacolo, come invenzione collettiva diretta, tutte le successive opere teatrali fiorentine. |
| `L01-A02` | **riscontro_storico_indipendente** | Jacopo Corsi promosse nel tardo Cinquecento un diverso ambiente fiorentino di sperimentazione teatrale e musicale; sostenne i lavori di Peri e Rinuccini che portarono a Dafne e all'Euridice del 1600. Il circolo non va fuso istituzionalmente con la precedente Camerata di Bardi. |
| `L01-A03` | **riscontro_storico_indipendente** | La Camerata riunita intorno a Bardi (attiva circa 1573–1587) e la cerchia di Jacopo Corsi, documentata in particolare negli anni Novanta, furono ambienti storicamente distinti con contatti fra alcuni partecipanti. La denominazione generale «Camerata fiorentina» ha favorito la fusione retrospettiva delle loro attività. |
| `L01-A04` | **riscontro_storico_indipendente** | Giulio Caccini frequentò il primo ambiente della Camerata de' Bardi, dedicato fra gli altri temi alla discussione del rapporto fra parola, declamazione e musica. La sua presenza in questo cenacolo non autorizza a collocare in quella fase la prima dell'Euridice (1600). |
| `L01-A05` | **riscontro_storico_indipendente** | Giulio Caccini fu attivo anche nella successiva cerchia di Jacopo Corsi; contribuì con musica propria alla rappresentazione dell'Euridice del 6 ottobre 1600, pur senza esserne l'unico compositore. La sua opera completa sul libretto di Rinuccini fu rappresentata nel 1602. |
| `L01-A06` | **riscontro_storico_indipendente** | Jacopo Peri collaborò nell'ambiente protetto da Jacopo Corsi agli esperimenti di dramma musicale, fra cui la Dafne con testo di Ottavio Rinuccini e l'Euridice del 1600. Il ruolo di Peri non deve essere trasformato nell'attribuzione esclusiva della musica di Dafne o dell'esecuzione composita dell'Euridice. |
| `L01-A07` | **riscontro_storico_indipendente** | Ottavio Rinuccini fu collaboratore dell'ambiente di Jacopo Corsi e librettista di Dafne e dell'Euridice rappresentata nel 1600. Il testo drammatico di Rinuccini è distinto dalle diverse partiture musicali approntate da Peri e da Caccini. |
| `L01-A14` | **riscontro_storico_indipendente** | Le Euridici di Jacopo Peri e Giulio Caccini utilizzano il medesimo libretto di Ottavio Rinuccini ma hanno partiture distinte. La prima del 6 ottobre 1600 impiegò musica di entrambi; la completa realizzazione musicale di Caccini fu eseguita nel 1602. Non bisogna confondere i due testi musicali con le diverse configurazioni dell'esecuzione del 1600. |

### Fonti indipendenti e pagine controllate
- https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://sscm-jscm.org/v9/no1/harness.html
- https://corago.unibo.it/libretto/DRT0016963
- https://mam-e.it/euridice/

### Precisazioni da conservare per l'eventuale integrazione editoriale
- I due gruppi di Bardi e Corsi non sono equivalenti: primo documentato circa 1573–1587, secondo specialmente negli anni Novanta; l'appellativo «Camerata fiorentina» spesso li confonde.
- Caccini opera in entrambi gli ambienti. Peri e Rinuccini sono documentati in quello di Corsi; patronato, libretto e composizione non sono interscambiabili.
- Nel 1600 esiste la partitura di Peri e una rappresentazione con inserti di Caccini; la completa partitura di Caccini sul medesimo libretto fu eseguita nel 1602. La distinzione in tre situazioni musicali è utile per l'audit di *Melodramma barocco*.

---

## Lotto 33 — 8 novembre 2026: Goldoni, Metastasio, balletto pantomimico e teatro musicale francese

**Metodo:** verifica dell'esatto significato dei rapporti sui cataloghi musicologici, risorse accademiche e, per le sole menzioni editoriali, sul file di pagina effettivo del branch `main`. 14 relazioni revisionate. Non sono stati introdotti nodi o archi e nessuna pagina, menu o interfaccia è stata modificata.

| ID | Gate conclusivo | Riscontro e precisazioni |
| --- | --- | --- |
| `L02-A08` | **riscontro_storico_indipendente** | Carlo Goldoni scrisse oltre cinquanta drammi giocosi e altri testi per musica: fra i titoli Il mondo della luna (1750), La favola de' tre gobbi (1749) e L'Arcadia in Brenta (1749). Il genere precede Mozart e Da Ponte e non è sinonimo perfetto di ogni opera buffa. |
| `L02-A09` | **riscontro_storico_indipendente** | Pietro Metastasio elaborò libretti centrali per il dramma per musica serio settecentesco, come Didone abbandonata (1724), successivamente musicati in molteplici partiture di autori diversi. L'opera seria non consiste in un repertorio con una sola musica per libretto. |
| `L02-A20` | **riscontro_storico_indipendente** | Franz Anton Hilverding fu una figura importante della riforma pantomimica della danza scenica, attivo nei teatri imperiali viennesi prima di Gasparo Angiolini. Non deve essere presentato come l'inventore unico del ballet d'action, né come autore di tutte le innovazioni di Angiolini e Noverre. |
| `L02-A25` | **confronto_non_causale** | Les Petits Riens, creato a Parigi l'11 giugno 1778 con coreografia di Jean-Georges Noverre e musica solo parzialmente di Mozart, è documentato come ballet-pantomime. Si colloca nella costellazione delle riforme narrative della danza, ma le sue scene episodiche non equivalgono alla forma del balletto d'azione tragico di Don Juan (1761). |
| `L02-A26` | **riscontro_storico_indipendente** | Giacomo Pier Francesco Durazzo organizzò la vita spettacolare della corte viennese negli anni della riforma di Gluck e promosse l'integrazione fra musica, testo, balletto e pantomima, favorendo la collaborazione di Gluck, Calzabigi e Angiolini. Non fu compositore delle musiche della riforma. |
| `L02-A27` | **riscontro_storico_indipendente** | Gasparo Angiolini operò alla corte viennese come maestro di ballo e coreografo e, con la collaborazione di Gluck, realizzò il balletto pantomimico Don Juan (1761). La sua ricerca proseguì la riforma avviata da Hilverding senza coincidervi integralmente. |
| `L02-A28` | **riscontro_storico_indipendente** | Christoph Willibald Gluck lavorò nel contesto dei teatri di corte viennesi, collaborando con Angiolini a Don Juan (1761) e con Calzabigi a Orfeo ed Euridice (1762). Sono progetti distinti fra balletto e opera, collegati dal contesto di riforma e dalla direzione teatrale di Durazzo. |
| `L02-A29` | **riscontro_storico_indipendente** | Ranieri de' Calzabigi fu attivo nel contesto teatrale viennese dei primi anni Sessanta e scrisse il libretto dell'Orfeo ed Euridice di Gluck (prima il 5 ottobre 1762). La sua riforma drammaturgica coinvolse l'azione, il coro e la scena senza renderlo autore della coreografia di Angiolini. |
| `L02-A30` | **riscontro_storico_indipendente** | Jean-Baptiste Lully compose musiche per diverse comédies-ballets legate alla collaborazione con Molière. Le Bourgeois gentilhomme (1670) documenta l'integrazione di prosa, musica e danza: il testo drammatico è di Molière, la musica di Lully. |
| `L02-A31` | **riscontro_storico_indipendente** | Molière (Jean-Baptiste Poquelin) scrisse commedie che integravano intermezzi musicali e danza, fra cui Le Bourgeois gentilhomme (1670), in collaborazione con Lully e coreografi come Pierre Beauchamp. Il genere non equivale a una tragédie en musique o a un balletto autonomo. |
| `L02-A32` | **riscontro_storico_indipendente** | Le Bourgeois gentilhomme, rappresentato a Chambord il 14 ottobre 1670, è esplicitamente documentato come comédie-ballet di Molière e Lully, con coreografie di Pierre Beauchamp. La definizione di genere attiene alla forma complessiva, non al solo contenuto degli intermezzi musicali. |
| `L02-A33` | **riscontro_storico_indipendente** | Jean-Baptiste Lully, in collaborazione con il librettista Philippe Quinault, contribuì a codificare la tragédie en musique francese, inaugurata con Cadmus et Hermione (1673). Il genere comprende prologo e cinque atti e integra recitazione cantata, cori e danza, ma non equivale a balletto autonomo. |
| `L02-A34` | **riscontro_storico_indipendente** | Jean-Philippe Rameau compose nel genere dell'opéra-ballet: Les Indes galantes (1735; aggiunte nel 1736) ne è un esempio catalogato. Il genere dell'opéra-ballet non va confuso con ogni divertissement danzato presente nell'opera. |
| `L02-A35` | **riscontro_storico_indipendente** | Les Indes galantes di Rameau, su libretto di Louis Fuzelier, è un opéra-ballet. La prima del 23 agosto 1735 comprendeva prologo e due entrées; una terza entrata seguì il 28 agosto e la quarta (Les Sauvages) fu aggiunta nel marzo 1736. Non retrodatare l'assetto a quattro entrées alla prima del 1735. |

### Fonti indipendenti e pagine controllate
- https://www.treccani.it/enciclopedia/carlo-goldoni_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/pietro-metastasio_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/giacomo-pier-francesco-durazzo_%28Dizionario-Biografico%29/
- https://www.treccani.it/enciclopedia/gasparo-angiolini_%28Dizionario-Biografico%29/
- https://mediatheque.cnd.fr/spip.php?id_article=1182&page=les-petits-riens-article
- https://mediatheque.cnd.fr/dossier/les-petits-riens-2006-de-marie-genevieve-masse-23
- https://viv-it.org/schede/3-riforma-dell-opera-italiana-vienna
- https://philidor.cmbv.fr/Publications/Catalogues-de-genre/Pierre-I-Ballard-et-Robert-III-Ballard-Imprimeurs-du-roy-pour-la-musique-1599-1673/Oeuvres/LULLY-Jean-Baptiste-1632-1687-LE-BOURGEOIS-GENTILHOMME2
- https://collectionsdumusee.philharmoniedeparis.fr/0732491-le-bourgeois-gentilhomme-de-lully.aspx?_lg=fr-FR
- https://www.operadeparis.fr/apropos/histoire/lopera-au-xviie-siecle
- https://catalogue.bnf.fr/ark:/12148/cb139176805.public
- https://collectionsdumusee.philharmoniedeparis.fr/0751016-les-indes-galantes-de-jean-philippe-rameau.aspx?_lg=fr-FR
- https://catalogue.bnf.fr/ark:/12148/cb42357282q

### Precisazioni da conservare per l'eventuale integrazione editoriale
- Goldoni: più di cinquanta libretti di drammi giocosi; Metastasio: drammi seri messi in musica da autori differenti. Non confondere genere e singola versione musicale.
- Hilverding, Angiolini, Durazzo, Gluck e Calzabigi ricoprono ruoli distinti nelle riforme di Vienna: non trasformare l'appartenenza alla corte in collaborazione diretta su ogni titolo.
- *Les Petits Riens* (1778) è attestato come ballet-pantomime episodico; l'arco verso il contenitore «ballet d'action e pantomima» resta comparativo, non un'identità col balletto tragico.
- *Le Bourgeois gentilhomme* (1670): Molière testo, Lully musica, Beauchamp coreografia; la comédie-ballet resta distinta dalla tragédie en musique di Quinault e Lully (Cadmus et Hermione, 1673).
- *Les Indes galantes* (Rameau/Fuzelier): 23 agosto 1735 prologo e 2 entrées, 28 agosto 1735 aggiunta della terza, 10 marzo 1736 della quarta; non trattare la versione finale come identica alla prima.

### Controlli di integrità dopo Lotto 33
- **608 nodi, 1.520 archi**, invariati, JSON serializzato e riparsato, nessun identificativo di arco duplicato e nessun estremo orfano.
- **29 archi revisionati**: **25** riscontri storici indipendenti, **3** confronti non causali, **1** sospeso.
- Quality gate: **264** `riscontro_storico_indipendente`, **117** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **96** `confronto_non_causale`, **51** `sospeso`.
- Flag storico distinto: `historical_verified_independently=true` su **299** relazioni. Non equipararlo al conteggio del singolo gate, perché permangono quality gate specifici da lotti precedenti.
- Confronti genericamente classificatori `L07-A089`, `L07-A092` e `L02-A25` portano il verbo `sviluppa_o_illumina`, già escluso dall'espansione automatica dopo il livello I; `L07-A090` è sospeso e non navigabile in default.
- Preservati identificativi, metadati anteriori, URL e gate precedenti. Le annotazioni di riuso editoriale sono nel registro, non nelle pagine.
- Validazione del dataset non equivale al collaudo reale dell'interfaccia WebGL su browser e smartphone. Nessuna modifica ai capitoli o ai menu.

**Prossimi lotti suggeriti:** riprendere da `L02-A36` in avanti (rapporti fra generi e danza), e continuare sugli insiemi `L03-*` e sulle `proposta_editoriale_revisionata`. Prima di promuovere archi di pagina controllare le sezioni effettive e le ancore.

---

## Lotto 34 — 8 novembre 2026: generi teatrali francesi, danza e rimandi ai capitoli

**Metodo:** verifica distinta della tassonomia storica mediante riscontri indipendenti e della effettiva trattazione editoriale nei file HTML di `main`. Revisionati otto archi, senza introdurre né eliminare entità; nessun intervento sulle pagine, sui menu o sull'interfaccia.

| ID | Gate conclusivo | Riscontro e precisazioni |
| --- | --- | --- |
| `L02-A36` | **confronto_non_causale** | L’*opéra-ballet* è un genere drammatico-coreografico specifico, con *entrées* tematicamente collegate, non un sottotipo del generico «ballo inserito in un'opera». Confrontare genere e dispositivo senza fonderli. |
| `L02-A37` | **confronto_non_causale** | La *comédie-ballet* fonde dialogo teatrale parlato, musica e danza (Molière e Lully, con Beauchamp); non coincide con una tragédie lyrique o con un semplice divertissement operistico. |
| `L02-A38` | **confronto_non_causale** | La *tragédie en musique* francese incorpora scene danzate e divertissements nell'opera in prologo e cinque atti, ma non diventa per ciò stesso un balletto autonomo. |
| `L02-A39` | **sospeso** | Il *Teatro del Classicismo* menziona Angiolini e la pantomima nella riforma viennese, ma non nomina *Don Juan* (1761): rapporto con quella singola opera non documentato nel testo corrente. |
| `L02-A40` | **trattazione_diretta_con_ancora_verificata** | La pagina *Balletto* (#cap-4) dedica testo specifico a *Don Juan ou Le Festin de pierre* (Gluck/Angiolini, Vienna, 17 ottobre 1761), e distingue il balletto dal *Don Giovanni* di Mozart. |
| `L02-A41` | **trattazione_diretta_con_ancora_verificata** | La pagina *Balletto* (#cap-4) esamina *Les Petits Riens* (1778), Noverre e la partitura solo parzialmente mozartiana. Non spaccia per originaria un'esecuzione coreografica successiva. |
| `L02-A42` | **trattazione_riscontrata** | Il *Teatro del Classicismo* (#generi) contiene una sezione esplicita sul dramma giocoso, collegata a Goldoni e Galuppi. |
| `L02-A43` | **trattazione_riscontrata** | *Classicismo* (#teatro) spiega il dramma giocoso nel contesto della maturazione teatrale mozartiana, con funzione sintetica anziché monografica. |

### Fonti indipendenti e riscontri testuali
- https://www.operadeparis.fr/visites/expositions/un-air-ditalie-lopera-de-paris-de-louis-xiv-a-la-revolution/3-au-temps-de-lopera-ballet
- https://www.operadeparis.fr/visites/expositions/moliere-en-musiques/invention-comedie-ballet-17e-siecle
- https://www.operadeparis.fr/apropos/histoire/lopera-au-xviie-siecle
- https://pad.philharmoniedeparis.fr/la-musique-de-ballet-de-la-renaissance-au-xviiie-siecle.aspx?_lg=fr-FR
- https://www.berliner-philharmoniker.de/en/programme-notes/christoph-willibald-gluck-don-juan-ballet/
- https://mediatheque.cnd.fr/spip.php?id_article=1182&page=les-petits-riens-article
- https://catalogue.bnf.fr/ark:/12148/cb43999746q
- https://corago.unibo.it/libretto/DRT0018679
- File `balletto/index.html` (sezione `#cap-4`), `teatro-classico/index.html` (sezioni `#gluck`, `#generi`) e `classicismo/index.html` (sezione `#teatro`) letti nel branch `main`.

### Precisazioni riutilizzabili nelle future revisioni editoriali
- Distinguere *opéra-ballet* (successione di entrées), *comédie-ballet* (parola parlata con danza), *tragédie en musique* (opera cantata con divertissements), *ballet-pantomime* (azione affidata al gesto). La presenza di scene danzate non definisce da sola il genere complessivo.
- **Da integrare, non ora:** nel *Teatro del Classicismo* la menzione generale di Angiolini potrebbe essere completata con un riferimento esplicito a *Don Juan* (1761) e un rinvio alla pagina *Balletto*. Fino ad allora l'arco mirato resta sospeso.
- *Don Juan* Gluck/Angiolini: prima viennese 17 ottobre 1761, distinta da *Don Giovanni* Mozart/Da Ponte 1787; la parentela del soggetto non implica identità di opera o genere.
- *Les Petits Riens*: coreografia originale non conservata; differenziare le attribuzioni mozartiane dalla musica d'altro autore, come attestato da CND e BnF.
- Il dramma giocoso è trattato in modo specifico nel *Teatro del Classicismo* e contestualizzato in *Classicismo*; evitare due descrizioni pretendendole equivalenti per ampiezza.

### Controlli di integrità dopo Lotto 34
- **608 nodi, 1520 archi**: invariati. JSON serializzato, riparsato; 0 ID di arco duplicati; 0 estremi orfani; 0 ID di nodo duplicati.
- **Otto archi revisionati:** 3 confronti non causali, 1 sospeso, 2 trattazioni dirette con riscontro storico indipendente, 2 trattazioni editoriali riscontrate.
- Gate principali: **264** `riscontro_storico_indipendente`, **109** `candidato_non_fuso`, **317** `proposta_editoriale_revisionata`, **99** `confronto_non_causale`, **52** `sospeso`, **4** `trattazione_diretta_con_ancora_verificata`; flag storico indipendente su **301** relazioni.
- I tre confronti classificatori usano `sviluppa_o_illumina` (non propagato automaticamente oltre il livello I dal filtro esistente). Il collegamento al *Don Juan* nel *Teatro del Classicismo* è sospeso.
- 0 gruppi di tripletta esatta fonte–destinazione–relazione ripetute nell'insieme (non sono stati aggiunti archi; verificare separatamente gli eventuali duplicati semantici preesistenti, senza dedurne automaticamente una fusione).
- Conservati `previous_quality_gate`, `previous_relation` dove modificata, `previous_description`, fonti, note e data; nessuna modifica ai capitoli o al protocollo. Il controllo strutturale del grafo non sostituisce un collaudo grafico in browser.

**Lotto 35 suggerito:** continuare sui candidati residui `L03-*` e sui nessi beethoveniani, separando opere, rielaborazioni, collaborazioni, affinità formalistiche e richiami editoriali.

---

## Lotto 35 — 8 novembre 2026: Prometeo, Variazioni op. 35, Eroica e riuso tematico

**Metodo:** verifica distinta fra bibliografia indipendente (attribuzioni, opere, cronologia, ricezioni) e controllo del testo HTML delle pagine di Musurgia Mundi su `main`. Revisione di 9 archi candidati, senza introdurre o eliminare nodi o archi e senza modificare pagine, menu o renderer.

| ID | Gate conclusivo | Riscontro storico-filologico o editoriale |
| --- | --- | --- |
| `L03-A02` | **riscontro_storico_indipendente** | Le creature di Prometeo op. 43 (1800–1801), balletto di Beethoven per Salvatore Viganò, comprende il n. 16 Finale; il tema di quel numero è poi riutilizzato in altri lavori beethoveniani. Distinguere la composizione del balletto dalla successiva rielaborazione del materiale. |
| `L03-A03` | **riscontro_storico_indipendente** | Il Finale n. 16 del Prometeo fornisce materiale tematico per la contredanse WoO 14 n. 7, le Variazioni op. 35 e il movimento conclusivo dell'Eroica. La relazione conserva l'identità del materiale, non l'identità di forma o funzione delle diverse opere. |
| `L03-A04` | **riscontro_storico_indipendente** | Le Variazioni e fuga op. 35 (1802), per pianoforte, lavorano sul materiale del finale del balletto Prometeo; la trasformazione usa in modo autonomo basso e tema, con quindici variazioni e fuga finale. Non sono la trascrizione del balletto. |
| `L03-A05` | **riscontro_storico_indipendente** | Nel quarto movimento della Sinfonia n. 3 op. 55 Beethoven rielabora il materiale tematico già impiegato in Prometeo e nell'op. 35, trasformandolo in un finale sinfonico in forma di variazioni. L'arco riguarda il finale, non l'intero impianto eroico della sinfonia. |
| `L03-A06` | **riscontro_storico_indipendente** | Ludwig van Beethoven compose la Terza Sinfonia in mi bemolle maggiore op. 55, detta Eroica, elaborata soprattutto nel 1803–1804. La storia della dedica e la ricezione politica non autorizzano un unico programma descrittivo per tutti i movimenti. |
| `L03-A07` | **riscontro_storico_indipendente** | Beethoven compose le quindici variazioni e fuga in mi bemolle maggiore op. 35 per pianoforte nel 1802, su materiale già utilizzato nel finale del Prometeo. Il soprannome Variazioni Eroica è posteriore e va distinto dal titolo originale. |
| `L03-A08` | **trattazione_diretta_con_ancora_verificata** | Il capitolo Classicismo, sezione #beethoven, esamina l'Eroica come soglia narrativa del linguaggio classico, non come data di fine ufficiale del periodo. La sinfonia è nominata più volte nel testo e nella cronologia. |
| `L03-A09` | **trattazione_diretta_con_ancora_verificata** | Romanticismo discute direttamente l'Eroica nelle premesse e nella riflessione sul sinfonismo, con proporzioni formali e ideale eroico non ridotti a una trama storica obbligatoria. |
| `L03-A10` | **trattazione_diretta_con_ancora_verificata** | Balletto, sezione #cap-4, richiama il finale del Prometeo e il suo riuso nell'op. 35 e nel finale della Terza Sinfonia. La pagina colloca questo ponte in una riflessione sul passaggio dal gesto alla musica strumentale. |

### Fonti e riscontri del lotto
- https://www.lvbeethoven.org/opus043/
- https://www.cambridge.org/core/books/abs/new-beethoven/prometheus-theme-and-beethovens-shift-from-avoidance-to-embrace-of-possibilities/D1D0D760DA713A8C5BC27F32C6CC4AC5
- https://www.cambridge.org/core/books/abs/cambridge-companion-to-the-eroica-symphony/after-invention-traces-and-materials-in-the-eroica-finale/5B64B7D6F1144C83F1F62B754C744624
- https://imslp.org/wiki/Eroica_Variations_Op.35_%28Beethoven%2C_Ludwig_van%29
- https://www.cambridge.org/core/books/abs/cambridge-companion-to-the-eroica-symphony/who-is-the-hero-the-early-reception-of-the-eroica/5757BA9AAFE043901574FDEF2E8DE87B
- https://musurgiamundi.com/classicismo/#beethoven
- https://musurgiamundi.com/romanticismo/#beethoven-caparezza-wellington
- https://musurgiamundi.com/balletto/#cap-4

### Precisazioni da conservare per future integrazioni editoriali
- Il materiale tematico del finale di Le creature di Prometeo (1801) riappare nella contredanse WoO 14 n. 7, nelle Variazioni op. 35 (1802) e nel finale dell'Eroica. La bass-line è parte essenziale della trasformazione: non ridurre il rapporto alla mera copia della melodia.
- Le tre manifestazioni appartengono a contesti diversi: balletto, variazioni pianistiche e sinfonia; l'origine condivisa non rende equivalenti le opere.

**Esiti lotto 35:** L03-A02, L03-A03, L03-A04, L03-A05, L03-A06, L03-A07, L03-A08, L03-A09, L03-A10. 0 archi sospesi; 6 riscontri storici indipendenti; 0 confronti non causali. Conservati i metadati anteriori.

---

## Lotto 36 — 8 novembre 2026: Fidelio, Rettungsoper ed Egmont

**Metodo:** verifica distinta fra bibliografia indipendente (attribuzioni, opere, cronologia, ricezioni) e controllo del testo HTML delle pagine di Musurgia Mundi su `main`. Revisione di 6 archi candidati, senza introdurre o eliminare nodi o archi e senza modificare pagine, menu o renderer.

| ID | Gate conclusivo | Riscontro storico-filologico o editoriale |
| --- | --- | --- |
| `L03-A23` | **riscontro_storico_indipendente** | Fidelio appartiene al filone drammatico del salvataggio di un innocente incarcerato, radicato anche nel teatro francese rivoluzionario; Rettungsoper/rescue opera è però un'etichetta storiografica formulata retrospettivamente, non un genere d'epoca con identità istituzionale univoca. |
| `L03-A24` | **trattazione_diretta_con_ancora_verificata** | Opera lirica, sezione #1-la-nascita-dell-opera-romantica, presenta le redazioni del 1805, 1806 e del 1814 di Fidelio, con la versione del 23 maggio 1814 al Kärntnertortheater quale forma stabilmente entrata in repertorio. |
| `L03-A25` | **trattazione_diretta_con_ancora_verificata** | Teatro del Classicismo, #beethoven, chiama esplicitamente Fidelio opera di salvataggio o Rettungsoper, trattando liberazione, carcerazione e teatro francese. L'etichetta è storiografica, non prova di un programma politico univoco dell'opera. |
| `L03-A28` | **riscontro_storico_indipendente** | Beethoven compose nel 1809–1810 le musiche di scena op. 84 per l'Egmont di Goethe, presentate a Vienna il 15 giugno 1810. L'opera teatrale è di Goethe, non un libretto d'opera autonoma di Beethoven. |
| `L03-A29` | **riscontro_storico_indipendente** | Egmont op. 84 è musica di scena per il dramma parlato di Goethe, con ouverture, intermezzi, canti di Clärchen, melologo e conclusione strumentale; il genere non coincide con un melodramma interamente cantato. |
| `L03-A30` | **trattazione_diretta_con_ancora_verificata** | Opera lirica tratta espressamente Egmont fra le musiche di scena di Beethoven, in una sezione che ne confronta la funzione teatrale con Fidelio e altre forme destinate al teatro parlato. |

### Fonti e riscontri del lotto
- https://www.cambridge.org/core/books/abs/rossini-and-postnapoleonic-europe/rossini-beethoven-and-rescue-opera-fidelio-and-la-gazza-ladra/9B6A6901CA649D94F4891543C78E0026
- https://www.cambridge.org/core/books/abs/cambridge-companion-to-beethoven/beethovens-essay-in-opera-historical-textcritical-and-interpretative-issues-in-fidelio/BBBF0100EDDC63749D046644B941F4C7
- https://www.metopera.org/discover/education/educator-guides/fidelio/composer-timeline/
- https://musurgiamundi.com/opera-lirica/#1-la-nascita-dell-opera-romantica
- https://musurgiamundi.com/teatro-classico/#beethoven
- https://www.berliner-philharmoniker.de/en/programme-notes/ludwig-van-beethoven-incidental-music-to-goethes-egmont-op-84/
- https://www.filharmonikusok.hu/en/muvek/egmont-kiserozene-op-84/

### Precisazioni da conservare per future integrazioni editoriali
- La classificazione di Fidelio come rescue opera/Rettungsoper è storiografica retrospettiva: secondo David Charlton, citato in un volume Cambridge, l'etichetta non è un genere contemporaneo autentico come opera buffa. Distinguere convenzione moderna, modello teatrale francese e versioni 1805, 1806, 1814.
- Egmont (1809–10) è musica di scena per Goethe con ouverture, entr'actes, canzoni, melologo e sinfonia conclusiva; non una seconda opera lirica di Beethoven. Il progetto di teatro di parola/teatro cantato è fertile per una futura integrazione editoriale.

**Esiti lotto 36:** L03-A23, L03-A24, L03-A25, L03-A28, L03-A29, L03-A30. 0 archi sospesi; 3 riscontri storici indipendenti; 0 confronti non causali. Conservati i metadati anteriori.

---

## Lotto 37 — 8 novembre 2026: Pastorale, pittura sonora ed espressione soggettiva

**Metodo:** verifica distinta fra bibliografia indipendente (attribuzioni, opere, cronologia, ricezioni) e controllo del testo HTML delle pagine di Musurgia Mundi su `main`. Revisione di 4 archi candidati, senza introdurre o eliminare nodi o archi e senza modificare pagine, menu o renderer.

| ID | Gate conclusivo | Riscontro storico-filologico o editoriale |
| --- | --- | --- |
| `L03-A31` | **riscontro_storico_indipendente** | Beethoven compose la Sesta Sinfonia in fa maggiore op. 68, Pastorale, presentata a Vienna il 22 dicembre 1808 al Theater an der Wien. I cinque movimenti hanno intestazioni descrittive collegate a situazioni naturali. |
| `L03-A32` | **riscontro_storico_indipendente** | La Pastorale op. 68 presenta cinque quadri con titoli programmatici, ma Beethoven la definì principalmente espressione del sentimento piuttosto che pittura sonora. L'arco è un esempio qualificato di programma espressivo, non una trascrizione mimetica completa di eventi. |
| `L03-A33` | **trattazione_diretta_con_ancora_verificata** | Romanticismo discute esplicitamente la Pastorale, la relazione fra descrizione, evocazione e sentimento e i cinque contesti nominati dal compositore, nel quadro del rapporto fra musica strumentale e interpretazione. |
| `L03-A34` | **trattazione_diretta_con_ancora_verificata** | Classicismo, sezione #beethoven, dedica un passaggio espresso alla Pastorale, intesa come trasformazione sinfonica legata a continuità e percezione più che al solo conflitto eroico. |

### Fonti e riscontri del lotto
- https://www.berliner-philharmoniker.de/en/programme-notes/ludwig-van-beethoven-symphony-no-6-in-f-major-op-68-pastoral/
- https://www.esm.rochester.edu/beethoven/symphony-no-6/
- https://musurgiamundi.com/romanticismo/#beethoven-caparezza-wellington
- https://musurgiamundi.com/classicismo/#beethoven

### Precisazioni da conservare per future integrazioni editoriali
- La Sesta Sinfonia op. 68 debuttò il 22 dicembre 1808 al Theater an der Wien, insieme alla Quinta; comprende cinque movimenti con indicazioni di contesto naturale. Il compositore privilegia «più espressione del sentimento che pittura», non una cronaca sonora obbligatoria.
- Classicismo e Romanticismo la discutono in modi diversi ma reali: la presenza in entrambi i capitoli è testuale, non una dichiarazione che l'opera appartenga a due scuole istituzionali.

**Esiti lotto 37:** L03-A31, L03-A32, L03-A33, L03-A34. 0 archi sospesi; 2 riscontri storici indipendenti; 0 confronti non causali. Conservati i metadati anteriori.

---

## Lotto 38 — 8 novembre 2026: Nona, ricezione dell'Inno alla gioia e ciclo di Lied

**Metodo:** verifica distinta fra bibliografia indipendente (attribuzioni, opere, cronologia, ricezioni) e controllo del testo HTML delle pagine di Musurgia Mundi su `main`. Revisione di 8 archi candidati, senza introdurre o eliminare nodi o archi e senza modificare pagine, menu o renderer.

| ID | Gate conclusivo | Riscontro storico-filologico o editoriale |
| --- | --- | --- |
| `L03-A35` | **riscontro_storico_indipendente** | La Nona Sinfonia op. 125, presentata a Vienna il 7 maggio 1824, include nel quarto movimento voci soliste e coro con il testo di Schiller An die Freude; i tre movimenti iniziali sono strumentali. Distinguere tipologia con finale corale da opera lirica. |
| `L03-A37` | **trattazione_diretta_con_ancora_verificata** | Romanticismo affronta la Nona e l'ingresso del testo di Schiller nel finale, con una specifica guida all'ascolto delle voci e del coro. È una trattazione concreta, non soltanto un riferimento generico al genere sinfonico. |
| `L03-A38` | **confronto_non_causale** | Una sinfonia può integrare la voce, come dimostra la Nona beethoveniana, ma la categoria sinfonia con intervento corale descrive una variante del genere, non un'altra specie di brano storicamente discendente dal nodo astratto Sinfonia. Il collegamento classificatorio non abilita propagazione storica automatica. |
| `L03-A39` | **confronto_non_causale** | La melodia del finale della Nona ha ricezione istituzionale come inno europeo: Consiglio d'Europa dal 1972, Comunità europee dal 1985, in versione senza parole. Non fu concepita come inno del Risorgimento né come inno istituzionale europeo nel 1824; il target generale Inno politico e canto civico resta un confronto di ricezioni. |
| `L03-A40` | **riscontro_storico_indipendente** | Beethoven compose An die ferne Geliebte op. 98 per voce e pianoforte nell'aprile 1816 su sei testi di Alois Jeitteles, pubblicati come Liederkreis: la continuità pianistica e tematica lega i sei Lieder in un'unità organica. |
| `L03-A42` | **riscontro_storico_indipendente** | An die ferne Geliebte op. 98 è un Liederkreis di sei canti su testi di Alois Jeitteles, pubblicato nel 1816 per voce e pianoforte. Il valore pionieristico per il ciclo liederistico non significa che Beethoven abbia inventato da zero il Lied o qualsiasi forma di raccolta poetica. |
| `L03-A43` | **trattazione_diretta_con_ancora_verificata** | Classicismo, sezione #lied, tratta An die ferne Geliebte op. 98 per nome, data, poeta, sei Lieder, collegamenti pianistici e natura ciclica; l'opera è analizzata come soglia del futuro ciclo romantico, non come invenzione del Lied. |
| `L03-A44` | **sospeso** | Romanticismo discute il Lied e i cicli dell'Ottocento, ma nel file romanticismo/index.html corrente non compare An die ferne Geliebte né la corrispondente op. 98 beethoveniana. Il ponte alla singola opera resta proposta futura, non trattazione presente. |

### Fonti e riscontri del lotto
- https://www.esm.rochester.edu/beethoven/symphony-no-9/
- https://www.metopera.org/discover/education/educator-guides/fidelio/composer-timeline/
- https://musurgiamundi.com/romanticismo/#beethoven-caparezza-wellington
- https://european-union.europa.eu/principles-countries-history/symbols/european-anthem_en
- https://katalog.beethoven.de/cgi-bin/biblio/hans_en.pl?reccheck=1337&t_show=x
- https://www.lvbeethoven.it/opus098/
- https://www.schubertsong.uk/collection/song-cycles-putative-cycles-groups-and-collections/
- https://musurgiamundi.com/classicismo/#lied
- https://musurgiamundi.com/romanticismo/#intrecci

### Precisazioni da conservare per future integrazioni editoriali
- La Nona (7 maggio 1824) è sinfonia con solisti e coro solo nel finale, su Schiller. Il suo tema è adottato come inno europeo nel 1972 dal Consiglio d'Europa e nel 1985 dalle Comunità europee, in versione senza parole; l'adozione non va retroproiettata come intenzione istituzionale di Beethoven.
- An die ferne Geliebte op. 98 (1816) forma una corona organica di sei Lieder sui versi di Alois Jeitteles; è spesso indicato come primo ciclo liederistico, ma l'etichetta non deve negare precedenti di raccolte strutturate. In Classicismo è trattato esplicitamente, in Romanticismo l'op. 98 non è nominata.

**Esiti lotto 38:** L03-A35, L03-A37, L03-A38, L03-A39, L03-A40, L03-A42, L03-A43, L03-A44. 1 archi sospesi; 3 riscontri storici indipendenti; 2 confronti non causali. Conservati i metadati anteriori.

---

## Lotto 39 — 8 novembre 2026: Quartetto op. 130, Große Fuge, ricezione e canone

**Metodo:** verifica distinta fra bibliografia indipendente (attribuzioni, opere, cronologia, ricezioni) e controllo del testo HTML delle pagine di Musurgia Mundi su `main`. Revisione di 6 archi candidati, senza introdurre o eliminare nodi o archi e senza modificare pagine, menu o renderer.

| ID | Gate conclusivo | Riscontro storico-filologico o editoriale |
| --- | --- | --- |
| `L03-A45` | **riscontro_storico_indipendente** | Beethoven compose il Quartetto in si bemolle maggiore op. 130 nel 1825, fra i quartetti commissionati da Nikolaj Galitzin. La prima esecuzione con il finale fugato ebbe luogo il 21 marzo 1826. |
| `L03-A46` | **riscontro_storico_indipendente** | La Große Fuge fu composta come sesto e ultimo movimento del Quartetto op. 130 ed eseguita in tale posizione il 21 marzo 1826; Beethoven compose poi un finale sostitutivo nell'autunno 1826 e la fuga venne pubblicata separatamente come op. 133 nel 1827. La pressione dell'editore come causa univoca è dibattuta. |
| `L03-A47` | **riscontro_storico_indipendente** | La Große Fuge op. 133 è musica per quartetto d'archi, originariamente il finale dell'op. 130. La versione per pianoforte a quattro mani è un adattamento successivo distinto, op. 134, e non va scambiata con il testo originario per quattro archi. |
| `L03-A48` | **sospeso** | Classicismo, sezione #quartetto, discute i quartetti tardi di Beethoven e cita esplicitamente op. 131, ma non il Quartetto op. 130. Non promuovere il rinvio a questa singola opera finché non sia realmente integrata nel testo. |
| `L03-A49` | **richiamo_contestuale** | Romanticismo presenta Beethoven come riferimento fondamentale per lo sviluppo successivo della forma e dei generi, con rimandi a Schubert, Mendelssohn, Brahms, Bruckner e Mahler; non elabora tuttavia in modo specifico la storia istituzionale del canone beethoveniano. |
| `L03-A50` | **trattazione_riscontrata** | Classicismo, sezione #classico, esplicita che la canonizzazione di Haydn, Mozart e Beethoven si consolida soprattutto nell'Ottocento e cita la lettura romantica della Quinta da parte di E. T. A. Hoffmann nel 1810; è una trattazione di ricezione storica, non un dato di appartenenza istituzionale contemporanea. |

### Fonti e riscontri del lotto
- https://www.chambermusicsociety.org/about-the-music/compositions/beethoven-op-130-133
- https://www.beethoven.de/de/work/view/4922660014260224
- https://beethovens-werkstatt.de/publications/vergleich-133-134/
- https://musurgiamundi.com/classicismo/#quartetto
- https://musurgiamundi.com/romanticismo/#musica-assoluta
- https://academic.oup.com/book/49279/chapter-abstract/422032618
- https://musurgiamundi.com/classicismo/#classico

### Precisazioni da conservare per future integrazioni editoriali
- Il Quartetto op. 130 (1825) ebbe come finale originario la fuga poi edita separatamente come op. 133; il nuovo finale fu scritto nell'autunno 1826. È certa la sostituzione, discussa l'interpretazione delle pressioni dell'editore Artaria; conservare le due letture documentarie senza scioglierle come dato univoco.
- Classicismo cita come esempio di tardo quartetto soprattutto l'op. 131, non l'op. 130: il ponte specifico all'op. 130 va sospeso. La canonizzazione ottocentesca di Haydn, Mozart e Beethoven è invece effettivamente discussa in Classicismo; Romanticismo riprende l'eredità di Beethoven senza trattare il canone come oggetto esclusivo.

**Esiti lotto 39:** L03-A45, L03-A46, L03-A47, L03-A48, L03-A49, L03-A50. 1 archi sospesi; 3 riscontri storici indipendenti; 0 confronti non causali. Conservati i metadati anteriori.

---

### Controlli complessivi dopo il Lotto 39
- Dataset: **608 nodi**, **1520 archi**, invariati. JSON serializzato e riparsato; nessun ID duplicato; nessun estremo orfano; 0 doppioni di tripletta esatta fonte–destinazione–verbo.
- Revisionati nei lotti 35–39 **33** archi candidati: 17 con gate indipendente, 10 trattazioni dirette, 1 trattazioni riscontrate, 1 richiami contestuali, 2 confronti non causali, 2 sospensioni.
- Gate: 281 riscontri indipendenti; 76 candidati non fusi; 317 proposte editoriali; 101 confronti non causali; 54 sospensioni. Flag `historical_verified_independently=true`: **318** (diverso dal gate).
- I collegamenti `sospeso` restano nascosti nei filtri predefiniti. Per i confronti di categoria e i rimandi vaghi il verbo generico `sviluppa_o_illumina` impedisce di usarli come ponti storici oltre il livello I, secondo il filtro già presente nel renderer.
- Nessuna pagina, menu o interfaccia è stata modificata. Il controllo strutturale non equivale al collaudo grafico in browser.

**Lotto 40 suggerito:** esaminare i candidati residui `L04-*` per primo, preservando le distinzioni opera/versione, tradizioni e trattazioni effettive delle pagine.


### Verifica supplementare dei percorsi multilivello e del diff — Lotti 35–39

- Confronto file `grafo.json` prima/dopo i cinque lotti: **33 relazioni effettivamente modificate**, esattamente `L03-A02`…`L03-A50` secondo l'elenco puntuale dei cinque lotti; nessun nodo modificato, creato o eliminato.
- Ricontrollate su blob remoto la sintassi, le cardinalità (**608 nodi, 1.520 archi**), l'unicità degli ID e l'assenza di estremi orfani.
- Simulazione a cinque livelli dell'algoritmo attualmente in `musurgia-atlantis/index.html`, con filtri predefiniti «trattazione» e «menzione»: partendo da **Beethoven** i nodi per profondità passano da **11 / 7 / 6 / 0 / 0** a **17 / 17 / 7 / 0 / 0**, in ragione dei nuovi collegamenti espliciti alla sua opera.
- **Mozart:** **13 / 4 / 3 / 3 / 5**, invariati; **Gluck:** **11 / 8 / 7 / 3 / 4**, invariati; **Rameau:** **7 / 0 / 0 / 0 / 0**, invariati.
- Le sospensioni `L03-A44` e `L03-A48` non sono presenti nel filtro di default. Gli archi `L03-A38` e `L03-A39` sono confronti classificatori con verbo generico e non fungono da ponte oltre il livello I.
- La navigazione può raggiungere altre opere dello stesso autore per il collegamento storico documentato attraverso la persona (es. Nona → Beethoven → Eroica). **Questo non è attestazione di influenza fra le due opere:** nel pannello occorre leggere il cammino effettivo e non interpretare qualunque vicinanza grafica come rapporto causale.
- Rimane distinta la verifica del runtime 3D/WebGL e del fallback mobile su dispositivi reali, che non è stata effettuata durante i lotti.

**Nuovo HEAD da controllare prima del Lotto 40:** riportare l'ultimo commit del registro presente su `main`; non ripetere le revisioni dei Lotti 35–39.

---

## Lotto 40 — 8 novembre 2026: Mameli, Verdi e Mazzini — Inno popolare del 1848 e teoria civile

**Metodo:** confronto fra documentazione storica indipendente (Treccani, cataloghi di teatro, edizioni critiche, ricerca musicologica) e controllo delle sezioni effettive in `main`. Non sono stati introdotti nodi o archi, né modificati capitoli, menu o renderer.

| ID | Gate conclusivo | Precisazione |
| --- | --- | --- |
| `L04-A01` | **riscontro_storico_indipendente** | Goffredo Mameli scrisse nel 1848 i versi del canto patriottico Suona la tromba, denominato anche Inno popolare o militare, successivamente musicati da Giuseppe Verdi su sollecitazione di Mazzini. Non è Il Canto degli Italiani del 1847. |
| `L04-A02` | **riscontro_storico_indipendente** | Verdi compose nell'autunno 1848 la musica di Suona la tromba sui versi di Mameli, inviandola a Mazzini il 18 ottobre. La partitura è diversa da quella di Michele Novaro per Il Canto degli Italiani. |
| `L04-A03` | **riscontro_storico_indipendente** | Giuseppe Mazzini sollecitò Verdi a scrivere un inno politico nel 1848, impiegando il testo di Mameli; è promotore della commissione informale, non compositore della musica. |
| `L04-A04` | **riscontro_storico_indipendente** | Suona la tromba (1848) è una composizione di canto civile e patriottico, indicata nelle fonti come Inno popolare o Inno militare, sul testo di Mameli e musica di Verdi. Non è l'attuale inno nazionale italiano. |
| `L04-A05` | **confronto_non_causale** | Il Canto degli Italiani (Mameli–Novaro, 1847) e Suona la tromba (Mameli–Verdi, 1848) condividono l'autore dei versi ma hanno testo, musica, occasione e funzione storico-politica distinti. Il confronto non autorizza a fonderli né ad attribuire la musica del primo a Verdi. |
| `L04-A06` | **riscontro_storico_indipendente** | Mazzini pubblicò nel 1836 il saggio Filosofia della musica, dedicato alle potenzialità civili e sociali dell'arte e al rapporto fra culture musicali italiana e tedesca. |
| `L04-A07` | **riscontro_storico_indipendente** | In Filosofia della musica (1836) Mazzini propone che il teatro musicale concorra a una coscienza civile collettiva; auspica un'opera corale e una musica europea capace di superare l'individualismo. È argomento mazziniano, non libretto né prescrizione obbligatoria a Verdi. |
| `L04-A08` | **riscontro_storico_indipendente** | Verdi conobbe Mazzini durante il soggiorno londinese del 1847 e lo incontrò a Milano il 5 aprile 1848; nello stesso anno Mazzini sollecitò il canto popolare su versi di Mameli. Non va inferita una collaborazione sulla librettistica delle opere di Verdi. |

### Fonti consultate
- https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/
- https://it.wikisource.org/wiki/Suona_la_tromba
- https://musurgiamundi.com/risorgimento/#verdi
- https://www.treccani.it/enciclopedia/giuseppe-mazzini_%28Dizionario-Biografico%29/
- https://www.treccani.it/enciclopedia/musica-e-teatro_%28L%27Unificazione%29/

### Informazioni da conservare per le revisioni dei capitoli
- Il Canto degli Italiani (Mameli–Novaro, 1847) e Suona la tromba (Mameli–Verdi, 1848) sono due composizioni autonome; la condivisione del poeta non implica uguaglianza delle musiche.
- Verdi conobbe Mazzini a Londra nel 1847 e lo incontrò a Milano nel 1848; su sua sollecitazione musicò l'Inno popolare, inviato il 18 ottobre 1848. La sequenza è utile nel capitolo Risorgimento.
- Filosofia della musica di Mazzini (1836) riflette su funzione civile, pubblico e aspirazione a una musica europea; il titolo è assente dal capitolo Risorgimento attuale e va valutato come integrazione futura, non come presenza dichiarata.

**Controllo Lotto 40:** 8 relazioni revisionate; `previous_quality_gate`, descrizioni, verbi pregressi e fonti conservati. Le analogie critiche ricevono `sviluppa_o_illumina`, non percorribile come nesso storico oltre il livello I.


---

## Lotto 41 — 8 novembre 2026: Verdi, Va pensiero e costruzione della memoria risorgimentale

**Metodo:** confronto fra documentazione storica indipendente (Treccani, cataloghi di teatro, edizioni critiche, ricerca musicologica) e controllo delle sezioni effettive in `main`. Non sono stati introdotti nodi o archi, né modificati capitoli, menu o renderer.

| ID | Gate conclusivo | Precisazione |
| --- | --- | --- |
| `L04-A11` | **riscontro_storico_indipendente** | La battaglia di Legnano, opera di Verdi su libretto di Salvatore Cammarano, debuttò il 27 gennaio 1849 al Teatro Argentina di Roma nel clima dell'agitazione patriottica. In questo caso l'investimento politico originario è molto più esplicito che nei primi cori di Nabucco. |
| `L04-A12` | **riscontro_storico_indipendente** | Verdi compose Va, pensiero, coro della parte III del Nabucco (Milano, 1842) su testo di Temistocle Solera. È un numero di un'opera teatrale, non un inno statale autonomo. |
| `L04-A14` | **riscontro_storico_indipendente** | Va, pensiero è il coro degli Ebrei della parte III di Nabucco di Verdi (prima alla Scala il 9 marzo 1842). Il nodo dell'estratto va collegato all'opera senza creare una seconda composizione indipendente. |
| `L04-A15` | **riscontro_storico_indipendente** | Va, pensiero acquisì una forte ricezione patriottica e identitaria, in particolare attraverso la mitizzazione tardo-ottocentesca e postunitaria. Non è documentato come manifesto esplicito scritto per l'Unità nel 1842, né si può attribuire un solo significato a tutte le ricezioni. |
| `L04-A16` | **confronto_non_causale** | La ricezione politica di opere e cori di Verdi ha contribuito, soprattutto dopo l'Unità, alla costruzione dell'immagine di «cantore del Risorgimento». Il processo memoriale non coincide con tutte le intenzioni dell'autore o con una lettura pubblica uniformemente patriottica già nel 1842. |
| `L04-A17` | **riscontro_storico_indipendente** | La scritta Viva V.E.R.D.I. è documentata nella primavera del 1859 come allusione a Vittorio Emanuele Re d'Italia. È un uso politico pubblico del nome del compositore, indipendente dalla specifica ricezione della singola partitura. |
| `L04-A18` | **riscontro_storico_indipendente** | L'acronimo Viva V.E.R.D.I. sfruttò nel 1859 il cognome già celebre di Giuseppe Verdi per indicare il sostegno politico a Vittorio Emanuele. Nessuna fonte qui esaminata ne documenta l'invenzione da parte del musicista. |
| `L04-A19` | **riscontro_storico_indipendente** | La partecipazione politica di Verdi agli ideali risorgimentali è documentata da lettere e prese di posizione, fra cui quella a Piave del 21 aprile 1848 sull'Italia libera e repubblicana. Le sue idee personali vanno mantenute distinte dall'interpretazione di ogni singola opera. |

### Fonti consultate
- https://archiviostorico.operaroma.it/opera/la-battaglia-di-legnano/
- https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/
- https://www.tandfonline.com/doi/full/10.1080/1354571X.2012.690581
- https://www.treccani.it/enciclopedia/giuseppe-verdi/
- https://www.tandfonline.com/doi/abs/10.1080/1354571X.2012.753009

### Informazioni da conservare per le revisioni dei capitoli
- La battaglia di Legnano (Roma, Teatro Argentina, 27 gennaio 1849) ha una pertinenza patriottica originaria documentabile. La lettura patriottica dell'intero corpus verdiano, soprattutto retrodatata al 1842, non è altrettanto documentata.
- Va, pensiero è il coro del Nabucco (1842), non un inno di Stato composto come tale; la fortuna politica del coro comprende ricezioni e riappropriazioni posteriori.
- La scritta Viva V.E.R.D.I. come acronimo Vittorio Emanuele Re D'Italia è attestata nel 1859, ma non viene attribuita come invenzione personale del compositore; identità storica, impegno e uso pubblico sono livelli distinti.

**Controllo Lotto 41:** 8 relazioni revisionate; `previous_quality_gate`, descrizioni, verbi pregressi e fonti conservati. Le analogie critiche ricevono `sviluppa_o_illumina`, non percorribile come nesso storico oltre il livello I.


---

## Lotto 42 — 8 novembre 2026: Ricezione politica, intenzione autoriale e sezioni dei capitoli

**Metodo:** confronto fra documentazione storica indipendente (Treccani, cataloghi di teatro, edizioni critiche, ricerca musicologica) e controllo delle sezioni effettive in `main`. Non sono stati introdotti nodi o archi, né modificati capitoli, menu o renderer.

| ID | Gate conclusivo | Precisazione |
| --- | --- | --- |
| `L04-A20` | **trattazione_diretta_con_ancora_verificata** | La pagina Risorgimento, sezione #verdi, affronta direttamente il mito retrospettivo di Verdi «cantore del Risorgimento», le canzoni patriottiche, Viva VERDI e la ricezione del coro di Nabucco. La presenza in pagina è verificata e non costituisce prova autonoma delle intenzioni di composizione. |
| `L04-A21` | **trattazione_riscontrata** | Romanticismo presenta esplicitamente l'uso politico posteriore del Va, pensiero di Nabucco e mette in guardia da narrazioni patriottiche apocrife; distingue inoltre scuole musicali nazionali, nazionalismo e pubblici differenti. |
| `L04-A22` | **trattazione_riscontrata** | Opera lirica menziona Nabucco e il Va pensiero come casi di ricezione identitaria italiana e rimanda al capitolo Risorgimento per l'approfondimento politico; distingue l'analisi musicale dall'uso pubblico successivo. |
| `L04-A23` | **confronto_non_causale** | L'impegno politico verificabile di un autore e la ricezione pubblica della sua musica sono categorie analitiche distinte. Nel caso di Verdi, né le lettere politiche provano il programma di ogni opera né la mitizzazione postunitaria ricostruisce automaticamente l'intenzione originaria. |
| `L04-A24` | **riscontro_storico_indipendente** | I Lombardi alla prima crociata (1843) conobbe interpretazioni patriottiche nel corso della ricezione, ma la stampa prossima alla prima ne registrò più frequentemente caratteri drammatici e musicali che espliciti programmi nazionali. Evitare aneddoti non documentati e automatismi dal solo testo corale. |

### Fonti consultate
- https://musurgiamundi.com/risorgimento/#verdi
- https://www.tandfonline.com/doi/full/10.1080/1354571X.2012.690581
- https://musurgiamundi.com/romanticismo/#forme-orchestrali
- https://www.tandfonline.com/doi/abs/10.1080/1354571X.2012.753009
- https://musurgiamundi.com/opera-lirica/#4-il-dramma-musicale-wagner-e-verdi
- https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/

### Informazioni da conservare per le revisioni dei capitoli
- Risorgimento tratta il mito di Verdi come cantore nazionale, mentre Romanticismo tratta anche la ricezione del Va pensiero. Opera lirica rinvia a Risorgimento per la fortuna politica del coro.
- La letteratura specialistica segnala che Nabucco e I Lombardi ricevettero recensioni del 1842–43 meno patriottiche di quanto suggerisca il mito postunitario: evitare l'asserzione che ogni coro fosse recepito sin dall'origine come proclama nazionale.
- Scelte politiche documentate di Verdi e ricezione pubblica delle opere non coincidono automaticamente: conservare le due categorie disgiunte.

**Controllo Lotto 42:** 5 relazioni revisionate; `previous_quality_gate`, descrizioni, verbi pregressi e fonti conservati. Le analogie critiche ricevono `sviluppa_o_illumina`, non percorribile come nesso storico oltre il livello I.


---

## Lotto 43 — 8 novembre 2026: Parola scenica, mediazione di Ricordi e revisione di Simon Boccanegra

**Metodo:** confronto fra documentazione storica indipendente (Treccani, cataloghi di teatro, edizioni critiche, ricerca musicologica) e controllo delle sezioni effettive in `main`. Non sono stati introdotti nodi o archi, né modificati capitoli, menu o renderer.

| ID | Gate conclusivo | Precisazione |
| --- | --- | --- |
| `L04-A28` | **confronto_non_causale** | La traviata (1853) offre un caso di efficacia della parola, della situazione e del tempo scenico nella poetica verdiana; il termine «parola scenica» fu tuttavia articolato più esplicitamente nella riflessione di Verdi degli anni successivi, specie in relazione ad Aida. Non retroproiettare una sua autoclassificazione terminologica al 1853. |
| `L04-A29` | **riscontro_storico_indipendente** | Giulio Ricordi favorì nel 1879, insieme a Franco Faccio, il riavvicinamento fra Verdi e Arrigo Boito sul progetto operistico Otello. Mediazione editoriale e interpersonale documentata, non autorìa del libretto. |
| `L04-A30` | **riscontro_storico_indipendente** | Boito revisionò e integrò il libretto originario di Simon Boccanegra, di Francesco Maria Piave, per la seconda versione rappresentata alla Scala il 24 marzo 1881. Il lavoro drammaturgico di Boito non cancella l'autore del 1857. |
| `L04-A31` | **riscontro_storico_indipendente** | Verdi compose Simon Boccanegra per Venezia nel 1857 e lo sottopose a una revisione profonda per Milano nel 1881, sulla base di interventi di Boito al testo originale di Piave. Sono redazioni storicamente distinte della medesima opera. |

### Fonti consultate
- https://www.treccani.it/enciclopedia/giuseppe-verdi/
- https://musurgiamundi.com/opera-lirica/#4-il-dramma-musicale-wagner-e-verdi
- https://www.teatroallascala.org/it/media/la-scala-rivista-del-teatro/otello-una-storia-scaligera.html
- https://www.metopera.org/globalassets/discover/education/educator-guides/otello/otello.15-16.guide.pdf
- https://academic.oup.com/book/49368/chapter-abstract/422380202
- https://www.arrigoboito.it/node/190
- https://www.ricordi.com/it-IT/Critical-Editions/Verdi-Giuseppe-Critical-Editions/Verdi-Giuseppe-Other-Works/Verdi-Simon-Boccanegra.aspx

### Informazioni da conservare per le revisioni dei capitoli
- La locuzione tecnica «parola scenica» viene formulata esplicitamente nella maturità verdiana, soprattutto negli anni di Aida: non retroproiettarla in modo letterale su La traviata del 1853.
- Giulio Ricordi e Franco Faccio svolsero un ruolo nella ripresa della collaborazione Verdi–Boito sul progetto di Otello. Il nome Ricordi non equivale a un ruolo di librettista.
- Simon Boccanegra ebbe una prima redazione veneziana nel 1857, poi una revisione testuale di Boito e musicale di Verdi presentata alla Scala il 24 marzo 1881. Piave rimane autore del libretto originario.

**Controllo Lotto 43:** 4 relazioni revisionate; `previous_quality_gate`, descrizioni, verbi pregressi e fonti conservati. Le analogie critiche ricevono `sviluppa_o_illumina`, non percorribile come nesso storico oltre il livello I.


---

## Lotto 44 — 8 novembre 2026: Otello, Falstaff e differenza fra drammaturgia verdiana e wagnerismo

**Metodo:** confronto fra documentazione storica indipendente (Treccani, cataloghi di teatro, edizioni critiche, ricerca musicologica) e controllo delle sezioni effettive in `main`. Non sono stati introdotti nodi o archi, né modificati capitoli, menu o renderer.

| ID | Gate conclusivo | Precisazione |
| --- | --- | --- |
| `L04-A33` | **riscontro_storico_indipendente** | L'Otello di Verdi (Scala, 1887), su libretto di Boito da Shakespeare, sviluppa una continuità drammatica fatta di declamazione, orchestre e relazioni sceniche. Il rapporto con l'idea verdiana di necessità della parola in scena non deve essere trasformato in prova di imitazione di Wagner. |
| `L04-A34` | **riscontro_storico_indipendente** | Falstaff (1893), opera di Verdi su libretto di Arrigo Boito ricavato da Shakespeare, articola un intreccio comico serrato tramite dialogo musicale, contrappunto e rapidi mutamenti di scena. Il legame con la poetica della parola scenica è critico e analitico, non attribuzione del testo al compositore. |
| `L04-A35` | **confronto_non_causale** | La poetica verdiana della parola scenica e il dibattito intorno al wagnerismo possono essere messi a confronto sul rapporto fra testo, voce, orchestra e continuità drammatica, ma non sono termini storicamente equivalenti né prova di una derivazione necessaria. |
| `L04-A36` | **riscontro_storico_indipendente** | Verdi sviluppò la nozione di parola scenica quale condensazione espressiva capace di chiarire la situazione drammatica, esplicitata soprattutto nella fase matura della sua riflessione sull'opera. Le forme chiuse precedenti non sono per questo prive di efficacia scenica. |

### Fonti consultate
- https://www.teatroallascala.org/it/media/la-scala-rivista-del-teatro/otello-una-storia-scaligera.html
- https://www.metopera.org/globalassets/discover/education/educator-guides/otello/otello.15-16.guide.pdf
- https://musurgiamundi.com/opera-lirica/#4-il-dramma-musicale-wagner-e-verdi
- https://www.metopera.org/Discover/Education/Educator-Guides-Archive/Falstaff/
- https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/
- https://www.treccani.it/enciclopedia/giuseppe-verdi/

### Informazioni da conservare per le revisioni dei capitoli
- Otello (1887) e Falstaff (1893) mostrano sviluppi della continuità drammatica verdiana senza prova di una filiazione indistinta da Wagner.
- La parola scenica è un concetto della poetica di Verdi: pertinenza storica accertabile; il rapporto con la ricezione del wagnerismo rimane confronto critico, non causalità automatica.
- Il testo di Falstaff è di Boito e adatta più materiali shakespeariani; distinzione fra libretto e musica indispensabile.

**Controllo Lotto 44:** 4 relazioni revisionate; `previous_quality_gate`, descrizioni, verbi pregressi e fonti conservati. Le analogie critiche ricevono `sviluppa_o_illumina`, non percorribile come nesso storico oltre il livello I.

---

### QA intermedio dopo Lotto 44
- 608 nodi, 1520 relazioni: invariati, sintassi JSON valida; 0 ID duplicati, 0 estremi orfani, 0 duplicati esatti di tripletta orientata fonte–destinazione–verbo.
- 29 relazioni revisionate in Lotti 40–44. Gate indipendenti: 302; candidati: 47; confronti non causali: 106; sospensioni: 54; flag indipendente: 339.
- `L04-A05`, `L04-A16`, `L04-A23`, `L04-A28`, `L04-A35` sono confronti non causali; non promuovono un nesso genealogico diretto. La navigazione va interpretata per cammino dichiarato, non per prossimità grafica.
- Prossimi Lotti 45–49: esaminare da `L04-A37` fino a `L04-A70` includendo anche `L04-A41` e saltando i soli ID già convalidati `L04-A55`–`L04-A58`.

---

## Lotto 45 — 8 novembre 2026: Wagner, motivi di reminiscenza, Wolzogen e ricezione ideologica

**Metodo:** fonti indipendenti (edizioni critiche, documenti storici, teatri e musicologia), confrontate con i testi reali dei capitoli `main` per gli archi editoriali. Nessuna modifica ai capitoli, menu, renderer o protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L04-A37` | **riscontro_storico_indipendente** | Wagner sviluppò una rete di motivi ricorrenti trasformati all'interno dei propri drammi musicali, specie nel Ring, mediante variazioni e riconoscimenti tematici. Le pratiche di reminiscenza precedenti esistono: l'arco non attribuisce a Wagner l'invenzione assoluta di qualsiasi motivo ricorrente. |
| `L04-A38` | **riscontro_storico_indipendente** | Hans von Wolzogen sistematizzò e denominò molti motivi del Ring nei suoi Leitfäden, attestati nel 1876. Il termine Leitmotiv circolava già nel 1871 in altri contesti (Jähns e Weber), mentre Wolzogen contribuì alla sua adozione nell'esegesi wagneriana; non fu necessariamente l'inventore unico del vocabolo. |
| `L04-A39` | **confronto_non_causale** | I motivi di reminiscenza delle tradizioni operistiche precedenti e il Leitmotiv wagneriano condividono la ricorrenza e memoria tematica, ma non sono identici per organizzazione, trasformazione o funzione drammatica. Il richiamo è analitico e genealogico in senso ampio, non un arco di filiazione univoca. |
| `L04-A40` | **riscontro_storico_indipendente** | Richard Wagner partecipò all'insurrezione di Dresda del maggio 1849, fu ricercato dalle autorità e fuggì in esilio, inizialmente in Svizzera. L'evento è distinto dagli avvenimenti rivoluzionari del Risorgimento italiano. |
| `L04-A41` | **riscontro_storico_indipendente** | L'insurrezione di Dresda del maggio 1849, cui Wagner prese parte, documenta l'impegno politico diretto di un compositore senza confonderlo con il Risorgimento italiano né con una relazione automatica verso ogni sua opera. |
| `L04-A42` | **riscontro_storico_indipendente** | Wagner pubblicò l'opuscolo antisemita Das Judenthum in der Musik nella Neue Zeitschrift für Musik nel 1850 con pseudonimo K. Freigedenk, ripubblicandolo in versione ampliata nel 1869 a proprio nome. Il dato documenta ideologia scritta e polemica pubblica, non definisce di per sé ogni procedura della sua musica. |
| `L04-A43` | **riscontro_storico_indipendente** | Il teatro e la teoria musicale di Wagner suscitarono una vasta ricezione interpretativa, controversa e non uniforme, alimentata anche da commentatori come Hans von Wolzogen. Il wagnerismo designa pluralità di letture e scuole, non una linea di discepoli diretti. |
| `L04-A44` | **confronto_non_causale** | Verdi fu posto nel confronto storiografico e critico con il wagnerismo per soluzioni di dramma musicale, continuità e orchestrazione, ma ciò non documenta un rapporto maestro-allievo né un prestito necessariamente diretto. L'originalità di ciascuno va conservata. |
| `L04-A45` | **sospeso** | Rimando inverso semanticamente equivalente al confronto già conservato in L04-A35 (parola scenica ↔ ricezione del wagnerismo). Non è un fatto storico ulteriore: sospeso come probabile duplicato non fuso, con ID e fonti conservati per una futura deduplicazione ragionata. |

### Fonti indipendenti e pagine controllate
- https://www.dhm.de/lemo/biografie/richard-wagner
- https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/ghdi%3Adocument-1786
- https://www.treccani.it/enciclopedia/leitmotiv/
- https://www.dhm.de/lemo/biografie/richard-wagner
- https://hanslick-online.github.io/hsl-app/c__1876.08.20.html?lang=de
- https://books.google.com/books/about/Thematischer_Leitfaden_durch_die_Musik_z.html?id=-yHOJ_ldCkMC
- https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/ghdi%3Adocument-1786
- https://germanhistorydocs.org/en/forging-an-empire-bismarckian-germany-1866-1890/ghdi%3Adocument-5072
- https://www.treccani.it/magazine/lingua_italiana/speciali/Verdi/Bonomi.html
- https://musurgiamundi.com/opera-lirica/#4-il-dramma-musicale-wagner-e-verdi

### Precisazioni da conservare per il riuso editoriale futuro
- Il termine Leitmotiv ha storia terminologica articolata: Treccani segnala l'uso di Jähns nel 1871 per Weber e l'applicazione wagneriana di Wolzogen; un Leitfaden di Wolzogen per il Ring è documentato già nel 1876. Non attribuire a Wagner le etichette analitiche della posteriore manualistica.
- Wagner partecipò all'insurrezione di Dresda del maggio 1849 e pubblicò l'opuscolo antisemita Das Judenthum in der Musik nel 1850 (pseudonimo), ampliandolo nel 1869 (nome proprio). Distinguere biografia politica, idee scritte, poetica e ricezione.
- L04-A35 e L04-A45 esprimono in direzioni inverse la stessa relazione comparativa fra parola scenica e wagnerismo. L04-A45 è sospeso come possibile duplicato semantico, preservandone l'ID.

**QA lotto 45:** 9 archi revisionati, con `previous_quality_gate`, `previous_description` e `previous_relation` quando sostituita. 1 sospesi; nessuna fusione effettuata.


---

## Lotto 46 — 8 novembre 2026: Grand opéra francese, Meyerbeer, Halévy e Don Carlos

**Metodo:** fonti indipendenti (edizioni critiche, documenti storici, teatri e musicologia), confrontate con i testi reali dei capitoli `main` per gli archi editoriali. Nessuna modifica ai capitoli, menu, renderer o protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L04-A46` | **trattazione_diretta_con_ancora_verificata** | Opera lirica, sezione #3-il-grande-teatro-europeo, presenta esplicitamente il grand opéra parigino come sistema di grandi quadri storici, cori, danza, scenotecnica e collaborazione teatrale; cita Meyerbeer, Halévy e il contesto di Don Carlos. |
| `L04-A47` | **riscontro_storico_indipendente** | Giacomo Meyerbeer fu protagonista della codificazione del grand opéra parigino: Robert le Diable (1831) e Les Huguenots (1836) rappresentano modelli di teatro storico spettacolare con grandi cori, scene collettive e apparato scenico. |
| `L04-A48` | **riscontro_storico_indipendente** | Fromental Halévy, con La Juive (Opéra di Parigi, 23 febbraio 1835), fu uno dei protagonisti del grand opéra storico francese, al pari ma non come semplice sinonimo di Meyerbeer. L'opera indaga intolleranza religiosa, conflitto e spettacolarità. |
| `L04-A49` | **riscontro_storico_indipendente** | Don Carlos di Verdi fu concepito per l'Opéra di Parigi su libretto francese, debuttando l'11 marzo 1867 in cinque atti con apparato coreografico. Appartiene al contesto del grand opéra, benché scritto da un compositore italiano e poi tradotto. |

### Fonti indipendenti e pagine controllate
- https://musurgiamundi.com/opera-lirica/#3-il-grande-teatro-europeo
- https://www.operadeparis.fr/en/season-18-19/opera/les-huguenots
- https://www.operadeparis.fr/en/visits/exhibitions/grand-opera-1828-1867-history-made-spectacular/meyerbeer-the-triumphs-of-grand-opera
- https://www.degruyterbrill.com/document/doi/10.1515/semi.2011.026/html
- https://www.rohcollections.org.uk/work.aspx?work=12939
- https://www.operadeparis.fr/en/season-17-18/opera/don-carlos
- https://www.opera.mc/en/seasons/23-24/don-carlo

### Precisazioni da conservare per il riuso editoriale futuro
- Robert le Diable (Meyerbeer, 1831), La Juive (Halévy, 1835), Les Huguenots (Meyerbeer, 1836) illustrano istituzioni e tipologie del grand opéra; dramma storico, grandi scene corali, macchine teatrali e balletto sono tratti frequenti, non una checklist identica per ogni lavoro.
- Don Carlos, commissionato da Parigi e composto su libretto originale francese, nasce nella tradizione del grand opéra; la sua identità non si riduce al cognome italiano del compositore.
- Il capitolo Opera lirica contiene una trattazione diretta del grand opéra; le versioni dettagliate di Don Carlos (1867, 1884, 1886) non vi sono ancora ricostruite analiticamente.

**QA lotto 46:** 4 archi revisionati, con `previous_quality_gate`, `previous_description` e `previous_relation` quando sostituita. 0 sospesi; nessuna fusione effettuata.


---

## Lotto 47 — 8 novembre 2026: Don Carlos — distinguere originale francese e revisioni 1884/1886

**Metodo:** fonti indipendenti (edizioni critiche, documenti storici, teatri e musicologia), confrontate con i testi reali dei capitoli `main` per gli archi editoriali. Nessuna modifica ai capitoli, menu, renderer o protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L04-A50` | **riscontro_storico_indipendente** | Il nodo identitario Don Carlos / Don Carlo comprende come redazione storica la versione francese rappresentata all'Opéra l'11 marzo 1867 in cinque atti; distinguere il testo rappresentato dalle sezioni composte in precedenza e tagliate già in prova. |
| `L04-A51` | **riscontro_storico_indipendente** | La revisione di Verdi presentata alla Scala il 10 gennaio 1884, in italiano, riduce Don Carlo a quattro atti eliminando Fontainebleau e il balletto e include nuove rielaborazioni musicali sostanziali. Non è una semplice ristampa del libretto francese del 1867. |
| `L04-A52` | **riscontro_storico_indipendente** | La configurazione presentata a Modena nel dicembre 1886 ripristina l'atto di Fontainebleau entro la revisione di Don Carlo del 1884, tornando a cinque atti ma senza reintegrare il balletto originale. Non coincide integralmente con la redazione parigina 1867. |
| `L04-A53` | **riscontro_storico_indipendente** | Don Carlos in lingua francese ebbe prima rappresentazione pubblica all'Opéra di Parigi, Salle Le Peletier, l'11 marzo 1867. L'esecuzione d'esordio subì tagli rispetto alla partitura concepita originariamente; non confondere data di prima e data di composizione delle sezioni. |
| `L04-A54` | **riscontro_storico_indipendente** | Giuseppe Verdi compose Don Carlos per Parigi (1867) e partecipò alle sue principali revisioni, culminate nella redazione in quattro atti del 1884 e nella configurazione di Modena 1886. Il nodo generale raccoglie redazioni collegate della stessa opera, senza fonderne la musica. |

### Fonti indipendenti e pagine controllate
- https://www.rohcollections.org.uk/work.aspx?work=12939
- https://www.operadeparis.fr/en/season-17-18/opera/don-carlos
- https://www.opera.mc/en/seasons/23-24/don-carlo
- https://www.rohcollections.org.uk/work.aspx?work=516
- https://www.sfopera.com/blog/2015/03/did-you-know-verdis-don-carlo/

### Precisazioni da conservare per il riuso editoriale futuro
- La prima di Don Carlos: Opéra di Parigi, 11 marzo 1867, libretto francese Méry–du Locle da Schiller, cinque atti. Lo spartito fu ridotto prima e dopo la prima rispetto al progetto integrale delle prove.
- Scala 10 gennaio 1884: Don Carlo italiano in quattro atti, con Fontainebleau soppresso e riscritture sostanziali, non mera traduzione. Nel 1886 a Modena si reintroduce Fontainebleau nel testo quattrocentesco rivisto, senza ricostituire l'identità integrale del 1867.
- Le diverse redazioni dovrebbero avere un futuro approfondimento nel capitolo Opera lirica; il grafo le distingue già senza fonderle.

**QA lotto 47:** 5 archi revisionati, con `previous_quality_gate`, `previous_description` e `previous_relation` quando sostituita. 0 sospesi; nessuna fusione effettuata.


---

## Lotto 48 — 8 novembre 2026: Versioni, lingua, editoria e censura nel teatro ottocentesco

**Metodo:** fonti indipendenti (edizioni critiche, documenti storici, teatri e musicologia), confrontate con i testi reali dei capitoli `main` per gli archi editoriali. Nessuna modifica ai capitoli, menu, renderer o protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L04-A59` | **confronto_non_causale** | La pluralità delle versioni di Don Carlos / Don Carlo è un caso di studio di revisione d'opera, taglio, reinserimento, modifica musicale e traduzione; la categoria generale «versioni, revisioni e traduzioni» non è un'opera o un agente causale da cui derivino redazioni concrete. |
| `L04-A60` | **riscontro_storico_indipendente** | Il Don Carlos del 1867 fu composto su un libretto originale francese, benché Verdi fosse italiano; una traduzione in italiano di Achille de Lauzières circolò già nel 1867, poi riveduta per altre redazioni. Distinguere lingua di composizione e successivo repertorio tradotto. |
| `L04-A61` | **confronto_non_causale** | Il grand opéra è legato alle istituzioni parigine e spesso alla lingua francese, ma la pratica produttiva è transnazionale per compositori, librettisti e versioni. Il genere non attribuisce automaticamente nazionalità o ideologia politica univoca agli autori. |
| `L04-A62` | **riscontro_storico_indipendente** | Giulio Ricordi fu editore e imprenditore del teatro musicale italiano ottocentesco, con un ruolo documentato nella mediazione artistica ed editoriale della collaborazione Verdi–Boito e nelle strategie di produzione e diffusione. |
| `L04-A63` | **confronto_non_causale** | Censura teatrale ed editoria/impresa teatrale interagirono nelle negoziazioni su libretto, azione, allestimento e autorizzazione delle rappresentazioni. Sono istituzioni e processi distinti: la relazione concettuale non prova dipendenza causale fra le due categorie astratte. |

### Fonti indipendenti e pagine controllate
- https://www.rohcollections.org.uk/work.aspx?work=12939
- https://www.rohcollections.org.uk/work.aspx?work=516
- https://www.opera.mc/en/seasons/23-24/don-carlo
- https://www.operadeparis.fr/en/season-17-18/opera/don-carlos
- https://www.operadeparis.fr/en/season-18-19/opera/les-huguenots
- https://musurgiamundi.com/opera-lirica/#3-il-grande-teatro-europeo
- https://academic.oup.com/book/4538/chapter-abstract/146629472
- https://www.treccani.it/magazine/lingua_italiana/speciali/Verdi/Bonomi.html
- https://www.metopera.org/discover/education/educator-guides/rigoletto/dodging-the-censors-pen/
- https://doi.org/10.1017/S0954586700005061

### Precisazioni da conservare per il riuso editoriale futuro
- Tradurre un'opera e revisionarne partitura, atti o struttura scenica sono interventi distinti. Don Carlos è un caso cruciale: compito futuro spiegare redazioni in francese e allestimenti in italiano separatamente.
- Giulio Ricordi opera nell'industria editoriale e teatrale della seconda metà dell'Ottocento, che può mediare commissioni, revisione e circolazione del repertorio.
- Censura, editoria e imprese teatrali partecipano allo stesso sistema di negoziazione ma non coincidono istituzionalmente né costituiscono un rapporto di derivazione automatica.

**QA lotto 48:** 5 archi revisionati, con `previous_quality_gate`, `previous_description` e `previous_relation` quando sostituita. 0 sospesi; nessuna fusione effettuata.


---

## Lotto 49 — 8 novembre 2026: Coro collettivo, identità linguistica e rimandi editoriali

**Metodo:** fonti indipendenti (edizioni critiche, documenti storici, teatri e musicologia), confrontate con i testi reali dei capitoli `main` per gli archi editoriali. Nessuna modifica ai capitoli, menu, renderer o protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L04-A64` | **confronto_non_causale** | Le grandi scene corali sono caratteristiche di molti grand opéras parigini, fra cui esempi di Meyerbeer e Halévy, ma il coro come massa teatrale può avere funzioni assai diverse da un inno patriottico; l'arco descrive un dispositivo scenico, non una filiazione causale di categorie. |
| `L04-A65` | **confronto_non_causale** | Un coro nato come voce collettiva di un dramma può ricevere impieghi politici e commemorativi successivi, come nel caso della ricezione del Va pensiero di Nabucco. Tuttavia, non ogni coro teatrale diventa un simbolo pubblico né mantiene un solo significato. |
| `L04-A66` | **confronto_non_causale** | Lingua scenica, genere teatrale, cittadinanza del compositore e identità o nazionalismo politico sono dimensioni non coincidenti. Don Carlos, scritto in francese da Verdi e tradotto in italiano, dimostra l'utilità della distinzione senza instaurare un rapporto causale fra categorie. |
| `L04-A67` | **sospeso** | I due nodi «Coro come personaggio collettivo» e «Coro operistico come soggetto collettivo» sembrano parzialmente equivalenti dal punto di vista semantico. Il nesso viene sospeso come candidato di sovrapposizione tassonomica, senza fusione o cancellazione; occorre comparare estensione storica e funzioni dei nodi prima della deduplicazione. |
| `L04-A68` | **richiamo_contestuale** | Romanticismo discute lingue, identità culturali, scuole nazionali, imperi plurali e migrazioni; il capitolo però non sviluppa in modo sistematico la lingua nel teatro musicale per singola opera. Il ponte è contestuale, non una trattazione operistica specifica. |
| `L04-A69` | **sospeso** | Risorgimento affronta lingua dei canti civili e identità nazionale, ma non svolge una trattazione autonoma della categoria «lingua e identità del teatro musicale». Il rapporto richiesto dall'arco è troppo specifico rispetto al testo attuale e rimane proposta di integrazione futura. |
| `L04-A70` | **trattazione_riscontrata** | Opera lirica esamina versioni e revisioni di Fidelio, Rossini, Simon Boccanegra e altre opere, collegandole a traduzioni e circostanze produttive. Per Don Carlos, tuttavia, la pagina cita il 1867 e il grand opéra senza ricostruire sistematicamente 1884 e 1886: quest'ultima integrazione resta distinta. |

### Fonti indipendenti e pagine controllate
- https://www.operadeparis.fr/en/season-18-19/opera/les-huguenots
- https://www.degruyterbrill.com/document/doi/10.1515/semi.2011.026/html
- https://www.treccani.it/enciclopedia/musica-e-teatro_%28L%27Unificazione%29/
- https://www.treccani.it/enciclopedia/giuseppe-fortunino-francesco-verdi_%28Dizionario-Biografico%29/
- https://www.rohcollections.org.uk/work.aspx?work=12939
- https://www.operadeparis.fr/en/season-17-18/opera/don-carlos
- https://musurgiamundi.com/opera-lirica/#5-le-tradizioni-nazionali-lingue-memorie-invenzioni
- https://musurgiamundi.com/anatomia-del-melodramma/#orchestra
- https://musurgiamundi.com/romanticismo/#scuole-fonti
- https://musurgiamundi.com/risorgimento/#musica
- https://musurgiamundi.com/opera-lirica/#3-il-grande-teatro-europeo
- https://musurgiamundi.com/opera-lirica/#4-il-dramma-musicale-wagner-e-verdi
- https://www.rohcollections.org.uk/work.aspx?work=516

### Precisazioni da conservare per il riuso editoriale futuro
- Il grand opéra può impiegare grandi scene corali, ma il coro non è per ciò stesso un inno politico. La ricezione pubblica di alcuni cori verdiani è un percorso storico distinto dalla loro funzione nel dramma.
- I due nodi «Coro come personaggio collettivo» e «Coro operistico come soggetto collettivo» appaiono semanticamente sovrapposti: L04-A67 resta sospeso come candidato di fusione da esaminare, senza cancellare la tracciabilità o unire oggi i nodi.
- Romanticismo analizza identità nazionali e lingue in senso ampio. Risorgimento tratta testi e canti civili, ma non analizza autonomamente la lingua del teatro musicale come categoria: L04-A69 sospeso. Opera lirica tratta numerose revisioni, ma le varianti di Don Carlos sono ancora da sistematizzare nella pagina.

**QA lotto 49:** 7 archi revisionati, con `previous_quality_gate`, `previous_description` e `previous_relation` quando sostituita. 2 sospesi; nessuna fusione effettuata.

---

### Controlli complessivi dopo il Lotto 49
- JSON serializzato e riparsato, **608 nodi, 1520 archi** invariati; 0 ID duplicati, 0 nodi orfani, 0 duplicati di tripletta orientata esatta fonte–destinazione–verbo.
- **59** relazioni esaminate nei Lotti 40–49 (29 nei Lotti 40–44 e 30 nei Lotti 45–49). Rimangono 17 candidati non fusi nel grafo.
- Gate principali: 318 riscontri indipendenti, 317 proposte editoriali, 114 confronti non causali, 57 sospensioni; flag `historical_verified_independently` su **355** archi.
- Sospesi L04-A45 come rimando inverso probabilmente duplicato di L04-A35; L04-A67 come sovrapposizione tassonomica dei due nodi sul coro; L04-A69 per assenza di trattazione specifica della lingua del teatro musicale nel capitolo Risorgimento.
- I confronti tipologici e classificatori sono espressi col verbo generico `sviluppa_o_illumina`, che il filtro attuale esclude dalla propagazione oltre il livello I. Il QA strutturale non equivale a prova reale dei renderer WebGL/Canvas su desktop e mobile.
- **Nota editoriale futura:** nel capitolo Opera lirica la storia delle revisioni di Don Carlos/Don Carlo (1867, 1884, 1886) richiede un paragrafo specifico, senza modifiche in questa fase; inoltre Wagner e Verdi non vanno ridotti a derivazioni automatiche.
- **Lotti successivi suggeriti:** risolvere i candidati rimasti fra `L01-*`, `L06-*` e l'eventuale blocco di proposte editoriali, controllando `main` prima di ogni scrittura.


### QA supplementare — revisione trasversale Lotti 40–49

**Confronto del diff rispetto all'HEAD dopo Lotto 39:** esattamente **59 archi modificati**, tutti identificati come `L04-*` ancora candidati; nessuna modifica ai 608 nodi, nessun ID nuovo o rimosso. Sono rimaste intatte le 11 relazioni `L04-*` già convalidate nei lotti precedenti.

**Integrità dati e navigazione:** 608 ID di nodo e 1.520 ID di arco distinti, 0 estremi orfani. Simulato l'algoritmo a cinque livelli presente in `musurgia-atlantis/index.html` con i filtri di default («trattazione» e «menzione»).

| Nodo iniziale | Prima: livelli I–V | Dopo: livelli I–V |
| --- | --- | --- |
| Giuseppe Verdi | 13 / 6 / 1 / 2 / 1 | 22 / 16 / 15 / 3 / 1 |
| Richard Wagner | 8 / 0 / 0 / 0 / 0 | 12 / 0 / 0 / 0 / 0 |
| Goffredo Mameli | 1 / 0 / 0 / 0 / 0 | 2 / 3 / 14 / 12 / 11 |
| Giuseppe Mazzini | 0 / 0 / 0 / 0 / 0 | 3 / 15 / 12 / 11 / 3 |
| Grand opéra francese | 0 / 0 / 0 / 0 / 0 | 6 / 4 / 19 / 11 / 3 |
| Don Carlos / Don Carlo (identità) | 0 / 0 / 0 / 0 / 0 | 6 / 22 / 11 / 3 / 3 |
| Mozart | 13 / 4 / 3 / 3 / 5 | 13 / 4 / 3 / 3 / 5 |
| Beethoven | 17 / 17 / 7 / 0 / 0 | 17 / 17 / 7 / 0 / 0 |

I confronti non causali `L04-A05`, `A16`, `A23`, `A28`, `A35`, `A39`, `A44`, `A59`, `A61`, `A63`, `A64`, `A65`, `A66` sono già **non espandibili oltre il livello I** grazie al verbo generico `sviluppa_o_illumina`; i sospesi `A45`, `A67`, `A69` non entrano nella vista di default.

**Criterio interpretativo:** due opere raggiunte passando dal medesimo compositore non sono per questo legate da una trasmissione tematica. Per esempio `Don Carlos → Verdi → La traviata` indica la paternità comune, non un prestito diretto fra le opere.

**Limite:** questo test riproduce la logica dei percorsi sui dati JSON, non equivale all'esecuzione visuale del sito in browser reale su desktop e smartphone. Nessuna modifica a `musurgia-atlantis/index.html`, `compat-graph.js`, capitoli, menu o `PROTOCOLLO_AGGIORNAMENTI.json`.

**Prossimo lotto da proporre (50):** ripartire dai **17** `candidato_non_fuso` rimasti nei blocchi `L01` e `L06`, senza rivedere gli archi L04 già chiusi; successivamente affrontare le 317 proposte editoriali ancora da verificare.


### Errata cronologica editoriale rilevata nel Lotto 41 — da correggere nel capitolo Risorgimento (non modificato)

- **Capitolo:** `risorgimento/index.html`, sezione `#verdi`. Il file HTML remoto contiene la frase «La battaglia di Legnano, rappresentata nella Roma repubblicana».
- **Correzione storica:** la prima assoluta avvenne a Roma, Teatro Argentina, il **27 gennaio 1849**; il decreto di proclamazione della Repubblica Romana reca la data **9 febbraio 1849**. La prima precede pertanto di tredici giorni la proclamazione ufficiale della Repubblica.
- **Formula suggerita per una successiva revisione autorizzata:** «La battaglia di Legnano, rappresentata a Roma il 27 gennaio 1849, nei giorni che precedono la proclamazione della Repubblica Romana, è l'opera verdiana più dichiaratamente patriottica».
- **Riscontri:** https://archiviostorico.operaroma.it/opera/la-battaglia-di-legnano/ ; https://www.treccani.it/enciclopedia/roma_%28Dizionario-di-Storia%29/ ; https://it.wikisource.org/wiki/Bollettino_delle_leggi_e_disposizioni_della_Repubblica_Romana/Bollettino_N._1
- **Riuso editoriale:** `da_correggere`. Nessuna modifica alla pagina è stata eseguita in questo audit.

### Rettifica inventariale del Lotto 45 (8 novembre 2026)
- La riconciliazione completa dei candidati `L04-*` ha individuato `L04-A41`, inizialmente saltato in un elenco intermedio e poi verificato storicamente: insurrezione di Dresda (maggio 1849) come documentazione della partecipazione politica di Richard Wagner. Convalidato da Deutsches Historisches Museum e German History in Documents and Images.
- Il Lotto 45 comprende **9 archi**, la serie 40–49 **59 archi** e rimangono **17 candidati non fusi**, tutti nei blocchi `L01-*` e `L06-*`. I metadati originali dell'arco sono preservati.
- Diff ricalcolato rispetto al commit conclusivo del Lotto 39: 59 identificativi univoci `L04-*`. Le 11 relazioni precedentemente convalidate nel blocco L04 sono rimaste inalterate.

---
## Lotto 50 — 8 novembre 2026: rimandi fiorentini e radici plurali del musical

**Metodo:** verifica di quattro sezioni HTML effettive su `main` e confronto con fonti indipendenti (Treccani, Corago, Library of Congress, IBDB) per cinque relazioni storico-culturali. Nessuna modifica ai capitoli, ai menu, alla UI o al protocollo.

| ID | Gate conclusivo | Verifica e precisazione |
| --- | --- | --- |
| `L01-A18` | **trattazione_riscontrata** | Rinascimento #firenze: Camerata di Bardi e monodia come contesto della nascita del teatro in musica, non invenzione esclusiva. |
| `L01-A19` | **trattazione_riscontrata** | Melodramma #camerata: Bardi e Jacopo Corsi sono esplicitamente distinti come circoli storici. |
| `L01-A23` | **trattazione_riscontrata** | Melodramma #euridice: versione di Peri del 1600 distinta dalla partitura di Caccini sul medesimo testo. |
| `L01-A24` | **trattazione_riscontrata** | Dafne: corretta l'ancora da #camerata a #euridice; partitura frammentaria e coinvolgimento di Corsi accanto a Peri. |
| `L06-A015` | **riscontro_storico_indipendente** | Il vaudeville è una delle radici plurali del musical; Shuffle Along deriva anche da uno sketch vaudevillistico. |
| `L06-A016` | **riscontro_storico_indipendente** | Ragtime e sincopazione appartengono al contesto del primo teatro musicale americano, senza coincidere con jazz e musical. |
| `L06-A017` | **riscontro_storico_indipendente** | Jazz tap e teatro musicale: Shuffle Along (1921) è un caso documentato, non prova di origine esclusiva. |
| `L06-A018` | **riscontro_storico_indipendente** | Il teatro afroamericano contribuisce autonomamente al musical di Broadway; Shuffle Along è una produzione storicamente identificata. |
| `L06-A019` | **confronto_non_causale** | Blackface e minstrelsy: contesto conflittuale di stereotipi e resistenze, non filiazione artistica positiva. Verbo generico per impedire propagazione oltre livello I. |

### Fonti e sezioni
- https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/jacopo-peri_%28Dizionario-Biografico%29/
- https://corago.unibo.it/opera/7AN0002699
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/
- https://guides.loc.gov/music-theater-dance-illustrated-guide/music-of-african-americans
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/tap-dance/
- https://www.ibdb.com/broadway-production/shuffle-along-9073
- https://musurgiamundi.com/rinascimento/#firenze
- https://musurgiamundi.com/melodramma/#camerata
- https://musurgiamundi.com/melodramma/#euridice
- https://musurgiamundi.com/dall-operetta-a-broadway/#altre-radici

### Precisazioni per il futuro riuso editoriale
- Camerata de' Bardi e ambiente di Jacopo Corsi non costituiscono un cenacolo unico; distinguere la ricerca teorica e le realizzazioni di Dafne ed Euridice. Per Dafne non confondere testo, autori delle musiche e frammenti conservati.
- Nel musical americano non vi è una sola genealogia europea: vaudeville, ragtime, jazz e teatro afroamericano compongono storie plurali e intrecciate.
- *Shuffle Along* debuttò a Broadway il 23 maggio 1921: musiche Eubie Blake, testi cantati Noble Sissle, libretto Flournoy Miller e Aubrey Lyles. Distinguere il contesto razzista del blackface dalle risposte artistiche afroamericane; The Creole Show (1890) e il rifiuto di Sissle e Blake (1919) sono casi da preservare per futura revisione dei capitoli.
- Il gate «trattazione_riscontrata» per gli archi L01 prova la presenza del tema nelle sezioni attuali, non la convalida indipendente dell'intera pagina.

### Controlli complessivi dopo Lotto 50
- Sono stati modificati esattamente **9 archi** (4 rimandi di pagina, 4 relazioni con riscontro indipendente, 1 confronto non causale), conservando previous_quality_gate e previous_relation/previous_description quando necessario.
- JSON serializzato e riparsato: **608 nodi, 1520 archi**; 0 nodi duplicati, 0 ID di arco duplicati, 0 estremi orfani, 0 triplette orientate duplicate.
- Gate indipendenti **322**, flag indipendenti **359**, confronti non causali **115**, sospensioni **57**, proposte editoriali **317**, candidati non fusi **8**.
- Residui per Lotto 51: `L06-A071`–`L06-A078` (playback/diegesi, Foley/Mickey Mousing, rimandi fra cinema e capitoli).
- QA strutturale, non prova visiva su desktop/mobile. Interfaccia e renderer invariati.

---
## Lotto 51 — 8 novembre 2026: cinema, sincronizzazione, diegesi e ultimi candidati

**Metodo:** confronto del testo effettivo dei capitoli su `main` con fonti esterne (Walt Disney Family Museum, AFI, Library of Congress, Bru Zane, IMSLP, IBDB, documentazione filmologica). Nessuna modifica all'HTML, ai menu, al renderer o al protocollo.

| ID | Gate | Verifica e precisazione |
| --- | --- | --- |
| `L06-A071` | **confronto_non_causale** | Playback = metodo di produzione; diegesi = statuto narrativo del suono, indipendente dall'esecuzione dal vivo. |
| `L06-A072` | **confronto_non_causale** | Foley = effetti materialmente ricreati; Mickey Mousing = correlazione espressiva e spesso musicale fra gesto e suono. |
| `L06-A073` | **sospeso** | La pagina #radici-afroamericane tratta blues/jazz, non specificamente istituzioni e repertori del teatro afroamericano. Il collegamento resta tracciato ma non propagabile. |
| `L06-A074` | **trattazione_riscontrata** | The Skeleton Dance 1929: ispirazione Saint-Saëns, ma colonna sonora Stalling con Grieg (Marcia dei nani), non Danse macabre. |
| `L06-A075` | **trattazione_riscontrata** | L’Assassinat du duc de Guise del 1908: partitura originale di Saint-Saëns, op. 128. Le fonti differiscono sulla data della prima (17/18 novembre). |
| `L06-A076` | **trattazione_riscontrata** | Steamboat Willie (1928): suono sincronizzato con azione e effetti, senza primato storico assoluto. |
| `L06-A077` | **trattazione_riscontrata** | West Side Story: teatro 1957 distinto dal film 1961, entrambi documentati nella pagina. |
| `L06-A078` | **trattazione_riscontrata** | Le cue sheets fornivano indicazioni di accompagnamento nel cinema muto, spesso su musiche preesistenti, non partiture obbligatorie. |

### Fonti e ancore controllate
- https://musurgiamundi.com/musica-e-film/#diegesi-esecuzione
- https://musurgiamundi.com/musica-e-film/#mickey-foley
- https://musurgiamundi.com/musica-e-film/#mickey-silly
- https://musurgiamundi.com/verso-le-avanguardie/#radici-afroamericane
- https://musurgiamundi.com/dal-musical-al-film/#saint-saens-cinema
- https://musurgiamundi.com/dal-musical-al-film/#west-side-story
- https://musurgiamundi.com/dal-musical-al-film/#muto-partiture
- https://www.waltdisney.org/blog/composing-walt-disneys-silly-symphonies-historian-ross-care-stalling-after-mickey
- https://catalog.afi.com/Film/70418-THE-SKELETON-DANCE
- https://silentfilm.org/wp-content/uploads/2020/06/2006_WinterEvent_Book.pdf
- https://www.bruzanemediabase.com/en/exploration/works/assassinat-duc-guise-op-128-camille-saint-saens
- https://imslp.org/wiki/L%27assassinat_du_duc_de_Guise%2C_Op.128_%28Saint-Sa%C3%ABns%2C_Camille%29
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/photoplay-albums-for-silent-film-scores/
- https://guides.loc.gov/music-for-silent-film/scores
- https://blogs.loc.gov/music/2025/04/by-the-people-transcribing-cue-sheets-for-silent-film/
- https://www.ibdb.com/broadway-production/west-side-story-2639
- https://catalog.afi.com/Film/23857-west-sidestory
- https://pressbooks.pub/reframingcinema/chapter/sound/
- https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26552573/synchronisation-extreme
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/

### Dati utili alla revisione editoriale futura
- *The Skeleton Dance* (1929): **ispirazione** dalla Danse macabre di Saint-Saëns; **nessun impiego** del poema sinfonico nella colonna sonora; Stalling integra musica originale e la Marcia dei nani di Grieg. La distinzione è confermata dal Walt Disney Family Museum.
- *L’Assassinat du duc de Guise*: op. 128 di Saint-Saëns, musica per film del 1908. Per la prima proiezione Bru Zane indica 18 novembre 1908; IMSLP 17 novembre, altre testimonianze riferiscono 16. Prima di pubblicare una data univoca approfondire luogo, anteprima e proiezioni.
- *West Side Story*: il musical teatrale del 1957 e il film del 1961 sono due realizzazioni da mantenere concettualmente distinte.
- Il capitolo Verso le avanguardie ricostruisce con ampiezza le origini afroamericane del blues e del jazz, ma il teatro afroamericano come forma scenica specifica non è sufficientemente trattato: il potenziale collegamento da `trad:teatro-afroamericano` è sospeso senza cancellazione.
- Non confondere la sorgente narrativa di un suono (diegesi) con il modo in cui viene prodotto o registrato (playback), né scambiare un effetto Foley per una figura musicale di Mickey Mousing.

### Controlli dopo Lotto 51
- Archi modificati **8**: due confronti non causali, un sospeso, cinque trattazioni effettive. Campi pregressi conservati, compresi previous_quality_gate e previous_relation/previous_description dove applicabile.
- **608 nodi, 1520 archi**; candidati non fusi **0**; proposte editoriali **317**; sospesi **58**; confronti non causali **117**; riscontri indipendenti **322**, flag indipendenti **359**.
- **0** duplicati ID di nodo, **0** duplicati ID di arco, **0** estremi orfani, **0** triplette orientate duplicate.
- Regole UI verificate in `musurgia-atlantis/index.html`: il filtro esclude i sospesi dalla vista ordinaria e le relazioni generiche `sviluppa_o_illumina`, `analizzata_in` e `tratta_in_modo_specifico` non diventano ponti storici multilivello. Test strutturale del codice, non resa WebGL/Canvas in browser reale.
- **Prima fase di validazione dei candidati conclusa:** restano **317** `proposta_editoriale_revisionata`, che costituiscono un distinto insieme editoriale e non devono essere promosse in blocco a relazioni storiche. I 58 sospesi non sono stati cancellati.

### QA supplementare — percorsi multilivello dopo i Lotti 50–51

Il controllo riproduce la logica di `musurgia-atlantis/index.html` per la vista focalizzata, con i filtri iniziali «trattazione» e «menzione». Sono confrontati il blob remoto conclusivo del Lotto 49 (`23cc1f8020804a348e4b07f110682c32923dc016`) e quello conclusivo del Lotto 51 (`08ddffe7c798ba143233f9e10049419020bf73f9`). Si applicano le regole del codice: gli archi genericamente descrittivi non propagano oltre livello I; i capitoli non sono nodi intermedi; dal livello II il ponte richiede persona, opera o nodo di senso.

| Nodo focale | Dopo Lotto 49, livelli I–V | Dopo Lotto 51, livelli I–V |
| --- | --- | --- |
| Mozart | 13 / 4 / 3 / 3 / 5 | 13 / 4 / 3 / 3 / 5 |
| Beethoven | 17 / 17 / 7 / 0 / 0 | 17 / 17 / 7 / 0 / 0 |
| Giuseppe Verdi | 22 / 16 / 15 / 3 / 1 | 22 / 16 / 15 / 3 / 1 |
| The Skeleton Dance (1929) | 5 / 1 / 1 / 1 / 5 | 6 / 1 / 1 / 1 / 5 |
| Steamboat Willie | 3 / 2 / 8 / 3 / 6 | 4 / 2 / 8 / 3 / 6 |
| West Side Story | 7 / 2 / 0 / 0 / 0 | 8 / 2 / 0 / 0 / 0 |
| Teatro musicale afroamericano | 1 / 5 / 1 / 0 / 0 | 3 / 8 / 1 / 0 / 0 |
| Camerata de' Bardi | 3 / 1 / 2 / 2 / 0 | 4 / 1 / 2 / 2 / 0 |

**Esito:** le nuove trattazioni rendono più reperibili i relativi nodi al livello I; Mozart, Beethoven e Verdi mantengono invariati i percorsi già verificati. Il nesso del teatro afroamericano è un percorso a più relazioni nominate: non va letto come una filiazione causale di ciascun nodo raggiunto. Resta non verificata l'effettiva resa su schermo dei renderer WebGL e Canvas.

**Frontiera di lavoro:** 0 candidati non fusi nel dataset; restano 317 proposte editoriali revisionate e 58 sospensioni da conservare e vagliare per categoria, senza promozione indiscriminata a nessi storici.

---
## Lotto 52 — 2026-11-08: Canto liturgico e notazione fra Medioevo e Barocco

**Metodo:** lettura dei capitoli effettivi del branch `main`, confronto con riscontri indipendenti e distinzione fra trattazione specifica, richiamo storico e assenza documentale. Tutti gli archi sono fra capitoli e concetti: non costituiscono filiazioni causali, anche se il contenuto storico illustrato è verificabile. Il verbo `sviluppa_o_illumina` resta generico e non traversabile oltre livello I.

| ID | Gate | Precisazione sul contenuto effettivo |
| --- | --- | --- |
| `E0338` | **trattazione_riscontrata** | Medioevo ricostruisce canto liturgico, salmodia e trasmissione monodica con contesto comunitario e tradizione orale. Il canto non è una forma senza storia né una categoria esclusivamente medievale. |
| `E0339` | **richiamo_contestuale** | Rinascimento menziona la permanenza del canto liturgico/gregoriano come fondamento della pratica ecclesiastica e della polifonia; non sviluppa una storia autonoma della salmodia nel Quattro-Cinquecento. |
| `E0340` | **trattazione_riscontrata** | Medioevo tratta notazione neumatica adiastematica, rigo e Guido d'Arezzo, con problemi di ritmo scritto. Il nodo aggregato cita anche il mensuralismo, che non va identificato con i neumi o con il tetragramma. |
| `E0341` | **trattazione_riscontrata** | Rinascimento discute segni e canoni mensurali, sottoposizione del testo, tactus e trascrizione delle fonti polifoniche. Il riscontro riguarda la componente mensurale del nodo, non una trattazione estesa dei neumi altomedievali. |
| `E0342` | **sospeso** | Barocco mostra manoscritti, intavolature e stampe, ma non presenta una trattazione storica specifica del complesso neumi–notazione mensurale. L'arco aggregato è troppo ampio: resta sospeso senza equiparare l'uso barocco della scrittura a sistemi medievali. |

### Fonti di confronto indipendente
- https://www.treccani.it/enciclopedia/guido-d-arezzo-e-la-nuova-pedagogia-musicale_%28Storia-della-civilta-Europea%29/
- https://www.loc.gov/exhibits/vatican/music.html
- https://www.metmuseum.org/pt/essays/music-in-the-renaissance

**QA Lotto 52:** 5 archi revisionati: 3 trattazioni, 1 richiami contestuali, 1 sospensioni. Conservati `previous_quality_gate` e `previous_description`. Nessuna fusione di nodi o variazione del numero di archi.

**Riuso futuro:** il nodo «Notazione musicale, neumi e mensuralismo» accorpa tecniche diverse per cronologia e funzione. Valutare in una revisione tassonomica futura una distinzione fra neumi e diastemazia, notazione mensurale e forme di trascrizione/edizione, senza dividere ora il nodo.

---
## Lotto 53 — 2026-11-08: Organum, polifonia e Ars nova: la cronologia dei linguaggi

**Metodo:** lettura dei capitoli effettivi del branch `main`, confronto con riscontri indipendenti e distinzione fra trattazione specifica, richiamo storico e assenza documentale. Tutti gli archi sono fra capitoli e concetti: non costituiscono filiazioni causali, anche se il contenuto storico illustrato è verificabile. Il verbo `sviluppa_o_illumina` resta generico e non traversabile oltre livello I.

| ID | Gate | Precisazione sul contenuto effettivo |
| --- | --- | --- |
| `E0343` | **trattazione_riscontrata** | Medioevo analizza organum, diaphonia e discanto e propone laboratori sulle relazioni fra le voci. Discantus non è sinonimo di moto contrario; distinguere la coordinazione ritmica dall'andamento delle linee. |
| `E0344` | **richiamo_contestuale** | Nel Rinascimento l'organum medievale e Notre-Dame sono citati come antecedenti nella storia della polifonia liturgica; la pagina non attribuisce al Rinascimento una pratica autonoma dell'organum notredamense. |
| `E0345` | **trattazione_riscontrata** | Medioevo tratta l'emergere e le trasformazioni della polifonia dal canto preesistente agli organismi plurivocali. Non va però sovrapposta l'imitazione sistematica di Josquin alle tecniche di Notre-Dame. |
| `E0346` | **trattazione_riscontrata** | Rinascimento dedica ampio spazio alla polifonia franco-fiamminga e al contrappunto imitativo, con canon e canoni mensurali, Ockeghem e Josquin: relazione diretta con il nodo. |
| `E0347` | **trattazione_riscontrata** | Barocco affronta il contrappunto e la polifonia, la convivenza di scrittura imitativa e concerto e le fughe, specialmente in Bach; non si tratta di una semplice replica dello stile di Josquin. |
| `E0348` | **trattazione_riscontrata** | Medioevo colloca l'Ars nova nel Trecento, con Machaut, ritmi e notazione più articolati; categoria cronologicamente e tecnicamente diversa dalle pratiche del Cinquecento. |
| `E0349` | **richiamo_contestuale** | Rinascimento richiama l'Ars nova trecentesca nel prologo, fra i precedenti della musica in volgare e della polifonia. Non è corretto trattarla come movimento rinascimentale. |

### Fonti di confronto indipendente
- https://www.treccani.it/enciclopedia/guido-d-arezzo-e-la-nuova-pedagogia-musicale_%28Storia-della-civilta-Europea%29/
- https://www.notredamedeparis.fr/en/understand/music/ars-antiqua-and-renaissance/
- https://www.sapere.it/enciclopedia/Ars%2Bnova.html
- https://www.metmuseum.org/pt/essays/music-in-the-renaissance

**QA Lotto 53:** 7 archi revisionati: 5 trattazioni, 2 richiami contestuali, 0 sospensioni. Conservati `previous_quality_gate` e `previous_description`. Nessuna fusione di nodi o variazione del numero di archi.

**Riuso futuro:** non proiettare tecniche notredamensi sul Rinascimento né attribuire a tutta la polifonia l'imitazione cinquecentesca; l'Ars nova trecentesca può fungere da precedente, non da categoria rinascimentale.

---
## Lotto 54 — 2026-11-08: Lauda, poesia cortese e quadrivium: continuità senza identità

**Metodo:** lettura dei capitoli effettivi del branch `main`, confronto con riscontri indipendenti e distinzione fra trattazione specifica, richiamo storico e assenza documentale. Tutti gli archi sono fra capitoli e concetti: non costituiscono filiazioni causali, anche se il contenuto storico illustrato è verificabile. Il verbo `sviluppa_o_illumina` resta generico e non traversabile oltre livello I.

| ID | Gate | Precisazione sul contenuto effettivo |
| --- | --- | --- |
| `E0350` | **trattazione_riscontrata** | Medioevo tratta la lauda come canto devozionale in volgare legato a confraternite, processioni e religiosità urbana, distinta dal canto liturgico latino ufficiale. |
| `E0351` | **richiamo_contestuale** | Rinascimento cita le laude nel prologo come forme di parola e canto devozionale che consentono il dialogo, senza offrire una storia specifica delle nuove prassi laudistiche fra Quattro e Cinquecento. |
| `E0352` | **trattazione_riscontrata** | Medioevo dedica spazio a trovatori, trovieri e Minnesänger, distinguendone lingue e tradizioni cortesi: non sono tutti una singola istituzione né meri discendenti dei chierici vaganti. |
| `E0353` | **richiamo_contestuale** | Rinascimento menziona trovatori e trovieri come precedente medievale della parola cantata; la poesia cortese medievale non coincide con la vita musicale delle corti cinquecentesche. |
| `E0355` | **trattazione_riscontrata** | Medioevo espone Boezio, quadrivium, musica come proporzione e dimostrazione sul monocordo. La teoria dei rapporti non va confusa con l'intera esperienza sonora e sociale della musica medievale. |
| `E0356` | **sospeso** | Rinascimento non contiene una trattazione espressa del quadrivium né di Boezio. Un'eventuale continuità filosofica non autorizza ad attribuire al capitolo una sezione inesistente: proposta di integrazione futura, senza collegamento riscontrato. |

### Fonti di confronto indipendente
- https://www.treccani.it/enciclopedia/la-lauda-spirituale_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/la-nova-musica-monodia-sacra-non-liturgica-e-monodia-profana_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/trovieri-e-minnesanger_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.cambridge.org/core/books/abs/cambridge-companion-to-medieval-music/theory-and-notation/D22C4F460CEC09F427D0A19117DB3CFE
- https://academic.oup.com/ml/article-abstract/90/2/177/1027958

**QA Lotto 54:** 6 archi revisionati: 3 trattazioni, 2 richiami contestuali, 1 sospensioni. Conservati `previous_quality_gate` e `previous_description`. Nessuna fusione di nodi o variazione del numero di archi.

**Riuso futuro:** Treccani documenta che la lauda persiste e si trasforma anche nei secoli XV–XVII. Il prologo rinascimentale però la richiama storicamente, senza trattarne la storia autonoma. Lo stesso vale per trovatori e trovieri. Il quadrivium nel capitolo Rinascimento non è riscontrato: sospensione tracciabile.

---
## Lotto 55 — 2026-11-08: Mecenatismo, corti, istituzioni e pubblici

**Metodo:** lettura dei capitoli effettivi del branch `main`, confronto con riscontri indipendenti e distinzione fra trattazione specifica, richiamo storico e assenza documentale. Tutti gli archi sono fra capitoli e concetti: non costituiscono filiazioni causali, anche se il contenuto storico illustrato è verificabile. Il verbo `sviluppa_o_illumina` resta generico e non traversabile oltre livello I.

| ID | Gate | Precisazione sul contenuto effettivo |
| --- | --- | --- |
| `E0357` | **trattazione_riscontrata** | Rinascimento sviluppa il mecenatismo di corte, le cappelle e lo spettacolo come prestigio, diplomazia e lavoro per musicisti; sistemi civici, religiosi e signorili restano differenziati. |
| `E0358` | **trattazione_riscontrata** | Barocco documenta la funzione di mecenati quali Cristina di Svezia, Maria Casimira Sobieska e Maria Barbara di Braganza, e circuiti di dedicatari, cappelle e corti, senza ridurre il sistema al teatro pubblico. |
| `E0359` | **trattazione_riscontrata** | Classicismo confronta le corti, fra cui gli Esterházy, con l'emergere del concerto pubblico, dell'editoria e degli imprenditori come Salomon. Il mercato non sostituisce improvvisamente la committenza aristocratica. |
| `E0360` | **trattazione_riscontrata** | Melodramma barocco descrive le corti medicea e gonzaghesca, il sostegno di Corsi e le nozze del 1600; distingue l'opera di corte dai successivi meccanismi dei teatri pubblici. |
| `E0361` | **trattazione_riscontrata** | Balletto ricostruisce feste di corte italiane, trasferimenti alla Francia e professionalizzazione sotto Luigi XIV. Académie royale de danse 1661 non equivale alla successiva scuola professionale del 1713. |

### Fonti di confronto indipendente
- https://www.metmuseum.org/pt/essays/music-in-the-renaissance
- https://www.cambridge.org/core/books/abs/cambridge-history-of-musical-performance/performance-in-the-long-eighteenth-century-an-overview/C1BA895F69C674CCA78290B326DF3D78
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/opera/
- https://www.operadeparis.fr/en/about/history/the-17th-century
- https://www.operadeparis.fr/artistes/ecole-de-danse/histoire

**QA Lotto 55:** 5 archi revisionati: 5 trattazioni, 0 richiami contestuali, 0 sospensioni. Conservati `previous_quality_gate` e `previous_description`. Nessuna fusione di nodi o variazione del numero di archi.

**Riuso futuro:** evitare la narrativa lineare «mecenatismo → mercato»; nel Settecento corti, editoria e concerti pubblici convivono. Non identificare la fondazione dell'Académie royale de danse (1661) con la successiva istituzionalizzazione della scuola dell'Opéra (1713).

---
## Lotto 56 — 2026-11-08: Stampa musicale, circolazione delle fonti e madrigale

**Metodo:** lettura dei capitoli effettivi del branch `main`, confronto con riscontri indipendenti e distinzione fra trattazione specifica, richiamo storico e assenza documentale. Tutti gli archi sono fra capitoli e concetti: non costituiscono filiazioni causali, anche se il contenuto storico illustrato è verificabile. Il verbo `sviluppa_o_illumina` resta generico e non traversabile oltre livello I.

| ID | Gate | Precisazione sul contenuto effettivo |
| --- | --- | --- |
| `E0362` | **trattazione_riscontrata** | Rinascimento tratta Petrucci e la stampa musicale veneziana, la circolazione delle parti e l'Odhecaton (1501), distinguendo tecniche di stampa, commercio e pratiche di lettura. |
| `E0363` | **trattazione_riscontrata** | Barocco presenta casi di stampa e trasmissione: Orfeo rappresentato nel 1607 e stampato nel 1609, Corelli e la circolazione europea, Vivaldi e l'op. 8 del 1725. Date di scena e pubblicazione non coincidono necessariamente. |
| `E0364` | **trattazione_riscontrata** | Classicismo tratta editoria, circolazione commerciale delle partiture, editori come Artaria e l'attività di Clementi: processo storico distinto dalla stampa rinascimentale di Petrucci. |
| `E0365` | **trattazione_riscontrata** | Romanticismo spiega editoria, stampa, riduzioni pianistiche e trascrizioni come fattori di circolazione domestica e internazionale delle opere. Una riduzione non è la stessa cosa della partitura orchestrale né di una registrazione. |
| `E0366` | **trattazione_riscontrata** | Risorgimento documenta editori, tipografi, raccolte di canti, partiture e circolazione di repertori patriottici come l'album Viva l'Italia! di Novaro. È una trattazione dell'uso politico e sociale delle stampe, non un'analisi tecnica generale della tipografia musicale. |
| `E0367` | **trattazione_riscontrata** | Rinascimento tratta direttamente il madrigale polifonico cinquecentesco e il rapporto fra poesia e composizione vocale; non lo identifica con il diverso madrigale trecentesco dell'Ars nova. |
| `E0368` | **trattazione_riscontrata** | Barocco tratta Monteverdi, la coesistenza della polifonia e della seconda prattica e l'evoluzione concertata del madrigale. Il genere non resta immutato fra Cinquecento e Seicento. |

### Fonti di confronto indipendente
- https://www.bl.uk/stories/blogs/posts/the-paul-hirsch-music-collection
- https://www.metmuseum.org/pt/essays/music-in-the-renaissance
- https://opentext.uoregon.edu/payforplay/chapter/chapter-3-a-brief-history-of-music-printing-and-publishing/
- https://www.treccani.it/enciclopedia/claudio-monteverdi_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/vocabolario/madrigale/

**QA Lotto 56:** 7 archi revisionati: 7 trattazioni, 0 richiami contestuali, 0 sospensioni. Conservati `previous_quality_gate` e `previous_description`. Nessuna fusione di nodi o variazione del numero di archi.

**Riuso futuro:** Petrucci non inventa ex nihilo la stampa musicale; il primato e la diffusione dell'Odhecaton vanno contestualizzati. Il madrigale trecentesco, quello polifonico cinquecentesco e il madrigale concertato del Seicento sono nozioni storicamente distinte, benché condividano il nome.

---
### Bilancio complessivo dopo i Lotti 52–56

- Verificati **30 archi**, in cinque lotti tematici: Lotto 52 (5), Lotto 53 (7), Lotto 54 (6), Lotto 55 (5), Lotto 56 (7).
- **608 nodi e 1520 archi** invariati; duplicati ID nodo **0**, duplicati ID arco **0**, nodi orfani **0**, triplette orientate esatte duplicate **0**.
- Proposte editoriali residue **287**; sospensioni **60**; richiami contestuali **11**; trattazioni riscontrate **53**.
- Riscontri indipendenti storici con gate esplicito **322**; flag `historical_verified_independently` **359** (immutati: in questi cinque lotti sono stati auditati rimandi editoriali di capitolo, non nuove influenze storiche).
- Nessuna modifica ai capitoli di Musurgia Mundi, a menu, a renderer, a interfaccia Atlantis o al protocollo.
- Prossimo ambito consigliato: continuare dalle proposte restanti dopo `E0368`, evitando promozioni in blocco e preservando i gate dei lotti chiusi.

### QA supplementare — simulazione della navigazione multilivello dopo i Lotti 52–56

Verifica effettuata confrontando i blob del dataset precedenti e successivi: `08ddffe7c798ba143233f9e10049419020bf73f9` e `bcc0cf41f24c777cec136ab3774beff716265217`. È stata riprodotta la logica di `musurgia-atlantis/index.html` con filtri predefiniti «trattazione» e «menzione», cinque livelli e regola di non attraversabilità oltre il livello I per la relazione generica `sviluppa_o_illumina`.

| Nodo focale | Prima, livelli I–V | Dopo, livelli I–V |
| --- | --- | --- |
| Wolfgang Amadeus Mozart | 13 / 4 / 3 / 3 / 5 | 13 / 4 / 3 / 3 / 5 |
| Ludwig van Beethoven | 17 / 17 / 7 / 0 / 0 | 17 / 17 / 7 / 0 / 0 |
| Giuseppe Verdi | 22 / 16 / 15 / 3 / 1 | 22 / 16 / 15 / 3 / 1 |
| Medioevo | 10 / 4 / 2 / 0 / 0 | 18 / 6 / 1 / 0 / 0 |
| Rinascimento | 25 / 11 / 10 / 2 / 0 | 35 / 14 / 13 / 2 / 0 |
| Quadrivium: musica, numero e proporzione | 1 / 0 / 0 / 0 / 0 | 2 / 0 / 0 / 0 / 0 |
| Madrigale e rapporto parola-musica | 2 / 1 / 0 / 0 / 0 | 4 / 1 / 0 / 0 / 0 |
| Il balletto | 60 / 63 / 47 / 26 / 21 | 61 / 63 / 47 / 26 / 21 |

**Interpretazione rigorosa:** tutte le 30 relazioni modificate conservano il verbo `sviluppa_o_illumina`; quindi non diventano direttamente ponti oltre livello I. Tuttavia un nodo concettuale raggiunto al livello I può poi essere attraversato mediante **altri archi storici specifici già presenti**. I cambiamenti osservati nei livelli II–III di Medioevo e Rinascimento sono perciò possibili e non vanno confusi con relazioni causali fra gli interi periodi o fra tutti i soggetti contenuti nei capitoli. Nessuna prova visiva reale del renderer desktop/mobile è stata eseguita.

**Ambito dei dati:** esattamente 30 archi `E0338`–`E0368` con esclusione degli ID non candidati già presenti nell'intervallo, 0 modifiche ai nodi, 0 ID aggiunti o eliminati, 0 errori d'integrità. Tutti i cambiamenti sono entro `musurgia-atlantis/grafo.json`; il registro contiene la tracciabilità delle decisioni.

**Stato verso il Lotto 57:** restano 287 `proposta_editoriale_revisionata`, 60 `sospeso`; continuare dal primo blocco successivo a `E0368` senza riaprire i Lotti 52–56.

---
## Lotto 57 — 8 novembre 2026: Frottola, policoralità veneziana e confessioni

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0370` | **trattazione_riscontrata** | Rinascimento dedica un percorso alla frottola di corte fra Quattro e Cinquecento, con le sue pratiche vocali e strumentali. La frottola non va identificata automaticamente con il madrigale cinquecentesco, né con una canzone popolare indifferenziata. |
| `E0372` | **trattazione_riscontrata** | Rinascimento sviluppa San Marco, Willaert, i Gabrieli e i cori spezzati: gruppi vocali/strumentali nello spazio e prassi veneziana documentata. San Marco è un centro importante, non il luogo in cui sarebbe nata da zero ogni policoralità. |
| `E0373` | **richiamo_contestuale** | Barocco richiama i cori spezzati veneziani e la scrittura policorale come antecedente e confronto timbrico, ma non ricostruisce autonomamente la storia della policoralità seicentesca. La persistenza storica non equivale a trattazione articolata nella pagina. |
| `E0374` | **trattazione_riscontrata** | Rinascimento distingue Riforma luterana, corali in lingua tedesca, passione e polifonia, senza ridurre tutte le tradizioni protestanti a una sola pratica liturgica. |
| `E0375` | **trattazione_riscontrata** | Barocco tratta la cantata luterana, il corale e la loro presenza nel repertorio sacro di Bach: non va confuso il corale congregazionale con ogni pagina vocale della cantata. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/frottola/
- https://www.treccani.it/enciclopedia/andrea-e-giovanni-gabrieli_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.basilicasanmarco.it/basilica/tradizione-musicale/
- https://www.treccani.it/enciclopedia/corale/

**QA Lotto 57:** 5 archi revisionati (4 trattazioni, 1 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 58 — 8 novembre 2026: Consort, monodia e recitar cantando

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0376` | **trattazione_riscontrata** | Rinascimento presenta consort di viole e voci, strumenti affini e prassi d'insieme storiche. Consort non è sinonimo di quartetto d'archi classico e non presuppone una sola combinazione timbrica. |
| `E0377` | **richiamo_contestuale** | Barocco richiama in particolare la tradizione inglese del consort nel contesto di Purcell, senza costruire una storia sistematica delle famiglie strumentali consort seicentesche. |
| `E0378` | **trattazione_riscontrata** | Rinascimento tratta gli esperimenti fiorentini di fine Cinquecento sulla monodia accompagnata: sono un passaggio storico specifico, non l'invenzione assoluta del canto a una voce. |
| `E0379` | **trattazione_riscontrata** | Barocco esamina monodia e basso continuo nel Seicento accanto a scritture polifoniche persistenti. La novità stilistica non cancella il contrappunto. |
| `E0380` | **trattazione_riscontrata** | Melodramma barocco distingue i circoli fiorentini e il ruolo della monodia accompagnata nel teatro nascente, senza fare della monodia l'unica risorsa formale dell'opera. |
| `E0381` | **trattazione_riscontrata** | Rinascimento sviluppa il recitar cantando fra le nuove soluzioni per accento, testo e personaggio; il nodo è trattato come soglia fra tardo Cinquecento e primo Seicento. |
| `E0382` | **trattazione_riscontrata** | Melodramma barocco analizza il recitar cantando e il passaggio alla forma scenica, con differenze rispetto al successivo recitativo secco e accompagnato. |
| `E0383` | **trattazione_riscontrata** | Anatomia del melodramma spiega espressamente il recitar cantando e le diverse configurazioni storiche del recitativo: un procedimento di declamazione, non uno schema settecentesco già compiuto. |
| `E0384` | **richiamo_contestuale** | Teatro del Classicismo richiama il recitar cantando nel quadro introduttivo e ne discute l'eredità attraverso recitativo e aria, ma la nascita della pratica resta un antecedente e non il centro della pagina. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/monodia_%28Enciclopedia-Italiana%29/
- https://www.treccani.it/enciclopedia/andrea-e-giovanni-gabrieli_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/basso_%28Enciclopedia-Italiana%29/

**QA Lotto 58:** 9 archi revisionati (7 trattazioni, 2 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 59 — 8 novembre 2026: Basso continuo e differenziazione degli organici

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0385` | **trattazione_riscontrata** | Barocco dedica una trattazione esplicita al continuo, alla realizzazione della linea grave e alle differenze fra strumenti armonici e bassi melodici. |
| `E0386` | **trattazione_riscontrata** | Melodramma barocco presenta il continuo nell'accompagnamento dei primi drammi in musica e nella prassi del recitativo secco, distinguendolo da impieghi più ricchi dell'orchestra. |
| `E0387` | **trattazione_riscontrata** | Classicismo tratta il declino graduale del continuo e l'emergere di altre forme di scrittura e sostegno armonico: il mutamento non fu uniforme nei generi e nelle città. |
| `E0388` | **richiamo_contestuale** | Anatomia del melodramma spiega il continuo nel contesto specifico dei recitativi, ma non offre un'esposizione organologica e storica autonoma del basso continuo. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/basso_%28Enciclopedia-Italiana%29/
- https://www.treccani.it/enciclopedia/monodia_%28Enciclopedia-Italiana%29/

**QA Lotto 59:** 4 archi revisionati (3 trattazioni, 1 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 60 — 8 novembre 2026: Modi, temperamenti, tonalità e linguaggi armonici

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0395` | **richiamo_contestuale** | Rinascimento affronta accordature, temperamenti e limiti di una lettura già pienamente tonale dei sistemi cinquecenteschi, senza offrire un quadro autonomo sistematico dei modi ecclesiastici. La relazione è contestuale. |
| `E0396` | **trattazione_riscontrata** | Barocco dedica una sezione specifica alla trasformazione dei centri armonici, alle cadenze, alla modulazione e a Rameau: il passaggio dalla modalità alla tonalità è graduale. |
| `E0397` | **trattazione_riscontrata** | Classicismo tratta i contrasti tonali, le cadenze e l'organizzazione formale in sistemi maggiore-minore; non si deduce che ogni composizione classica usi identicamente il medesimo schema. |
| `E0398` | **sospeso** | Romanticismo contiene osservazioni locali sulle tonalità di brani e sull'armonia ma non una trattazione storica autonoma del passaggio modalità–tonalità–teoria armonica. Il nodo aggregato è troppo ampio per promuovere l'arco. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/tonalita/

**QA Lotto 60:** 4 archi revisionati (2 trattazioni, 1 richiami, 1 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 61 — 8 novembre 2026: Sonata, forma-sonata e ricezione della fuga

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0399` | **trattazione_riscontrata** | Barocco illustra la sonata strumentale fra Gabrieli e Corelli, sonata a tre, da chiesa e da camera; non equivale alla successiva forma-sonata classica. |
| `E0400` | **trattazione_riscontrata** | Classicismo tratta il genere sonata e la relativa grammatica formale senza identificarli: la forma-sonata compare anche nei quartetti, nelle sinfonie e nei concerti. |
| `E0401` | **trattazione_riscontrata** | Romanticismo tratta la tradizione sonatistica e le sue trasformazioni in organici e contesti differenti, senza supporre una continuità formale rigida. |
| `E0405` | **trattazione_riscontrata** | Barocco presenta ricercare, contrappunto, fuga e Bach, distinguendo soggetto, imitazione e procedimenti dall'idea di una forma immutabile. |
| `E0406` | **richiamo_contestuale** | Classicismo richiama tecniche contrappuntistiche, Mozart e distinzioni rispetto alla fuga europea; non dedica una trattazione autonoma sufficientemente ampia alla storia o alla tecnica della fuga. |
| `E0407` | **trattazione_riscontrata** | Romanticismo sviluppa il contrappunto anche attraverso il Quartetto di Verdi del 1873 e il finale fugato, in un contesto diverso dalla fuga bachiana. |
| `E0408` | **richiamo_contestuale** | Verso le avanguardie tratta il recupero del contrappunto e delle tecniche storiche nei neoclassicismi, fra cui Hindemith; non ricostruisce però in modo specifico la fuga come forma novecentesca. Richiamo tecnico, non trattazione completa. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/sonata/
- https://academic.oup.com/reference/62400/reference-article-abstract/555407423
- https://chambermusicsociety.org/about-the-music/appreciation/sonata-form
- https://www.treccani.it/enciclopedia/fuga_%28Enciclopedia-Italiana%29/

**QA Lotto 61:** 7 archi revisionati (5 trattazioni, 2 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 62 — 8 novembre 2026: Corale luterano, cantata e differenti tradizioni sacre

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0414` | **trattazione_riscontrata** | Rinascimento tratta la Riforma, il corale tedesco, il rapporto tra partecipazione comunitaria e scrittura polifonica, senza ridurre la musica delle Chiese riformate al solo modello luterano. |
| `E0415` | **trattazione_riscontrata** | Barocco colloca il corale e la cantata liturgica luterana nelle pratiche sacre del Seicento-Settecento, con riferimento a Bach e all'intreccio di coro, aria e recitativo. |
| `E0416` | **sospeso** | Classicismo discute inni, cori e repertori sacri, inclusa la tradizione americana di William Billings, ma non tratta autonomamente la categoria specifica del corale luterano. Un coro di carattere solenne non prova appartenenza a quella tradizione. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/corale/
- https://www.treccani.it/enciclopedia/cantata/

**QA Lotto 62:** 3 archi revisionati (2 trattazioni, 0 richiami, 1 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 63 — 8 novembre 2026: Orchestra, timbri e trasformazioni dei fiati

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0419` | **trattazione_riscontrata** | Romanticismo ricostruisce l'ampliamento dell'orchestra e la differenziazione timbrica fra concerto, sinfonia e teatro, senza assumere una sola orchestra romantica standard. |
| `E0421` | **trattazione_riscontrata** | Balletto tratta il ruolo dell'orchestra nei diversi repertori scenici e distingue partitura orchestrale, scelta esecutiva e realizzazione coreografica. |
| `E0422` | **richiamo_contestuale** | Dal musical al film discute orchestra e partitura per cinema come risorsa drammaturgica, ma non descrive sistematicamente l'organizzazione storica delle famiglie e sezioni orchestrali. |
| `E0423` | **trattazione_riscontrata** | Rinascimento dedica un approfondimento organologico a cornetti, cromorni, bombarde, tromboni e strumenti affini, distinguendo prassi storiche ed evoluzioni moderne non sempre dirette. |
| `E0424` | **trattazione_riscontrata** | Barocco tratta l'impiego di flauti, oboi, trombe, corni e altre famiglie negli organici teatrali, sacri e strumentali; la scelta varia con il luogo e l'opera. |
| `E0425` | **trattazione_riscontrata** | Classicismo ricostruisce Mannheim, l'assestamento dell'orchestra e l'evoluzione dei fiati, compresa la crescente integrazione del clarinetto. Nessun organico è fissato in modo universale. |
| `E0426` | **trattazione_riscontrata** | Romanticismo discute amplificazione, nuovi colori e nuove combinazioni dei fiati nel tessuto orchestrale e nei linguaggi di Berlioz, Wagner e altri autori. |
| `E0427` | **richiamo_contestuale** | Opera lirica valorizza parti dei fiati e richiami timbrici nella drammaturgia di Weber e Rossini, ma non offre una ricostruzione organologica autonoma dei mutamenti storici delle famiglie a fiato. |

### Fonti indipendenti usate per contestualizzare
- https://www.treccani.it/enciclopedia/orchestra/
- https://www.treccani.it/enciclopedia/clarinetto/

**QA Lotto 63:** 8 archi revisionati (6 trattazioni, 2 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 64 — 8 novembre 2026: Sociabilità cameristica e quartetto d’archi

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0428` | **trattazione_riscontrata** | Classicismo tratta i contesti domestici e pubblici della musica da camera, e distingue duo, trio, quartetto e altri organici come forme di dialogo fra interpreti. |
| `E0429` | **trattazione_riscontrata** | Romanticismo discute musica da camera, circolazione domestica, trascrizioni e repertori concertistici, con particolare attenzione anche al Quartetto di Verdi. |
| `E0430` | **trattazione_riscontrata** | Barocco tratta sonata da camera e da chiesa e gli organici della musica strumentale dell'epoca, ma non li identifica con la musica da camera ottocentesca. |
| `E0431` | **trattazione_riscontrata** | Classicismo dedica un approfondimento al quartetto d'archi come genere e forma di dialogo fra quattro parti, soprattutto in Haydn, Mozart e Beethoven. Non è una sinfonia ridotta. |
| `E0432` | **trattazione_riscontrata** | Romanticismo presenta la ricezione e le trasformazioni del quartetto, includendo il caso verdiano (completato nel 1873, pubblicato nel 1876), distinto dal teatro lirico. |

### Fonti indipendenti usate per contestualizzare
- https://www.chambermusicsociety.org/about-the-music/appreciation/the-string-quartet
- https://academic.oup.com/reference/62400/reference-article-abstract/555395436
- https://academic.oup.com/reference/62400/reference-article-abstract/555407423

**QA Lotto 64:** 5 archi revisionati (5 trattazioni, 0 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 65 — 8 novembre 2026: Forma-sonata, sinfonia e immaginario orchestrale

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0434` | **trattazione_riscontrata** | Classicismo sviluppa forma-sonata, processi tematici, frase, cadenza e sviluppo: modello analitico storicamente variabile, non forma universale di ogni pezzo beethoveniano. |
| `E0435` | **trattazione_riscontrata** | Romanticismo affronta motivi, elaborazione formale e trasformazioni della forma-sonata, senza presentare una rottura assoluta con il Classicismo. |
| `E0437` | **trattazione_riscontrata** | Classicismo dedica un percorso alla sinfonia fra Mannheim, Haydn, Mozart e Beethoven e alla costruzione di grandi forme orchestrali. |
| `E0438` | **trattazione_riscontrata** | Romanticismo sviluppa pluralità del sinfonismo, musica a programma e architetture differenti: la storia non consiste nella derivazione obbligata da una singola sinfonia di Beethoven. |
| `E0440` | **richiamo_contestuale** | Dal musical al film richiama la scrittura sinfonica e il ruolo dell'orchestra per la colonna sonora, ma non studia il genere sinfonia come forma concertistica autonoma. |

### Fonti indipendenti usate per contestualizzare
- https://chambermusicsociety.org/about-the-music/appreciation/sonata-form
- https://academic.oup.com/reference/62400/reference-article-abstract/555407423
- https://www.treccani.it/enciclopedia/orchestra/
- https://academic.oup.com/reference/62400/reference-article-abstract/555395436

**QA Lotto 65:** 5 archi revisionati (4 trattazioni, 1 richiami, 0 sospensioni, 0 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
## Lotto 66 — 8 novembre 2026: Lied, virtuosismo, musica assoluta e programma verso il cinema

**Metodo:** confronto degli effettivi paragrafi pubblicati su `main` con le fonti indipendenti indicate. Gli archi fra capitoli e nodi concettuali descrivono trattazione, richiamo o sospensione, non filiazione storica. Nessuna modifica alle pagine, ai menu, all'interfaccia, ai renderer o al protocollo.

| Arco | Gate conclusivo | Riscontro, limite e possibile riuso editoriale |
| --- | --- | --- |
| `E0441` | **trattazione_riscontrata** | Classicismo dedica spazio alla storia e agli esempi del Lied prima di Schubert: il genere per voce e strumenti possiede pratiche precedenti al Romanticismo. |
| `E0442` | **trattazione_riscontrata** | Romanticismo sviluppa il Lied, Schubert e Schumann, poesia, pianoforte e ciclo di Lieder, includendo il Winterreise come esempio di percorso interiore. |
| `E0448` | **confronto_non_causale** | Balletto problematizza il virtuosismo del danzatore attraverso Angiolini e Noverre: è un confronto tipologico con il virtuosismo strumentale, non identità di tecnica, organico o genealogia. Il verbo generico non è espandibile oltre livello I. |
| `E0449` | **trattazione_riscontrata** | Romanticismo affronta la nozione storica ed estetica di musica assoluta, dibattuta e retrospettiva; non è un'etichetta dichiarata da Beethoven come programma d'autore. |
| `E0453` | **trattazione_riscontrata** | Romanticismo esamina la Pastorale e il rapporto fra descrizione, programma ed espressione di sentimenti. Non va assimilato ogni tratto descrittivo a un prestito dalla musica per immagini. |
| `E0455` | **richiamo_contestuale** | Dal musical al film riprende modelli strumentali e musica a programma come possibili risorse narrative per il cinema, ma non offre una storia autonoma del genere ottocentesco. |
| `E0456` | **trattazione_riscontrata** | Musica nell'audiovisivo sviluppa il legame fra musica a programma, poema sinfonico e immaginazione visiva fino a Fantasia, distinguendo ispirazione, impiego di musica preesistente e composizione cinematografica. |
| `E0459` | **richiamo_contestuale** | Musica nell'audiovisivo richiama il poema sinfonico come precedente concettuale per le associazioni di immagini e musica, ma non ne offre una trattazione indipendente della storia compositiva ottocentesca. |
| `E0460` | **richiamo_contestuale** | Dal musical al film descrive il poema sinfonico e la scrittura strumentale europea come una delle risorse per il cinema, senza derivarne deterministicamente la colonna sonora o il musical. |

### Fonti indipendenti usate per contestualizzare
- https://academic.oup.com/reference/62400/reference-article-abstract/555407423
- https://www.treccani.it/enciclopedia/fuga_%28Enciclopedia-Italiana%29/
- https://www.treccani.it/enciclopedia/forme-musicali_%28Enciclopedia-dei-ragazzi%29/
- https://www.chambermusicsociety.org/about-the-music/appreciation/the-string-quartet

**QA Lotto 66:** 9 archi revisionati (5 trattazioni, 3 richiami, 0 sospensioni, 1 confronti non causali), tutti identificati e tracciati con `previous_quality_gate` e `previous_description` dove presente. Gli URL di capitolo originari sono conservati.

---
### Bilancio e continuità dopo i Lotti 57–66

- **59 relazioni revisionate** in 10 lotti tematici; ripartizione 57: 5, 58: 9, 59: 4, 60: 4, 61: 7, 62: 3, 63: 8, 64: 5, 65: 5, 66: 9.
- Nodi **608**, archi **1520** invariati; 0 duplicati di nodi, 0 duplicati di archi, 0 estremi orfani, 0 triplette orientate fonte–destinazione–verbo duplicate.
- Proposte editoriali rimanenti **228**; sospensioni complessive **62**; richiami contestuali complessivi **24**; trattazioni riscontrate complessive **96**; confronti non causali complessivi **118**; candidati non fusi **0**.
- Gate `riscontro_storico_indipendente` **322** e flag `historical_verified_independently` **359** invariati: questi lotti verificano rimandi capitolo-concetto, non nuovi archi causali fra persone, opere o istituzioni.
- **Punti da preservare per il futuro:** il rapporto sonata/forma-sonata; distinzione fra corale luterano e inni genericamente corali; sistemi modali, temperamenti e tonalità non equivalenti; confronto fra virtuosismo del ballerino e strumentista; poesia musicale e trasposizione audiovisiva non sono prova di una filiazione unica.
- Le relazioni `sviluppa_o_illumina` restano generiche. I gate sospesi sono fuori dalla vista ordinaria; trattazioni e richiami eventualmente visibili sono **solo connessioni di primo livello** e non attestano dipendenze storiche indirette.
- **Da Lotto 67:** riprendere dalle proposte successive a `E0460`, comprese lingua e identità nazionale, canto civico, bande e teatro; non riesaminare gli archi già conclusi.

### QA supplementare — percorsi a cinque livelli dopo i Lotti 57–66

**Ambito e tecnica:** confrontati i blob remoti `bcc0cf41f24c777cec136ab3774beff716265217` (dopo Lotto 56) e `3684a1453b7a901d4d936fba3ec0c20873618f6d` (dopo Lotto 66). Riprodotto l'algoritmo della vista focalizzata di `musurgia-atlantis/index.html`, filtri iniziali «trattazione» e «menzione», profondità I–V. Dopo il livello I sono attraversabili solo relazioni non generiche, con ponti intermedi costituiti da persone, opere o nodi di senso. I nodi capitolo restano terminali.

| Nodo focale | Prima I–V | Dopo I–V |
| --- | --- | --- |
| Mozart | 13 / 4 / 3 / 3 / 5 | 13 / 4 / 3 / 3 / 5 |
| Beethoven | 17 / 17 / 7 / 0 / 0 | 17 / 17 / 7 / 0 / 0 |
| Giuseppe Verdi | 22 / 16 / 15 / 3 / 1 | 22 / 16 / 15 / 3 / 1 |
| Rinascimento | 35 / 14 / 13 / 2 / 0 | 44 / 14 / 12 / 2 / 0 |
| Barocco | 55 / 37 / 35 / 17 / 1 | 66 / 38 / 34 / 17 / 1 |
| Classicismo | 39 / 32 / 30 / 29 / 13 | 49 / 32 / 29 / 28 / 13 |
| Romanticismo | 84 / 65 / 57 / 29 / 15 | 95 / 65 / 55 / 28 / 15 |
| Musica nell'audiovisivo | 18 / 51 / 52 / 31 / 13 | 20 / 51 / 51 / 31 / 13 |
| Dal musical al film | 26 / 24 / 16 / 13 / 15 | 30 / 25 / 17 / 21 / 31 |
| Il balletto | 61 / 63 / 47 / 26 / 21 | 63 / 63 / 47 / 26 / 21 |

**Controllo semantico supplementare:** la rete di Dal musical al film amplia fortemente i livelli IV–V. Un cammino campione è `Dal musical al film — E0455 (richiamo contestuale) → Musica a programma → Sinfonia Pastorale → Beethoven → Fidelio → Leonore 1805/1806/Fidelio 1814`. Si tratta di una successione di collegamenti documentati, ma **non è una relazione di influenza diretta fra la pagina sul film e le versioni di Fidelio**. Lo stesso vale per le diramazioni verso *Egmont*, *Prometeo* e altre opere beethoveniane: la paternità comune non prova trasmissioni specifiche al cinema.

**Criticità UI da preservare senza interventi in questa fase:** il renderer permette a un nodo concettuale raggiunto con un richiamo generico al livello I di diventare a sua volta un ponte attraverso altri archi specifici ai livelli successivi. La regola `sviluppa_o_illumina` non espandibile oltre livello I non basta, da sola, a garantire la **pertinenza semantica dell'intero percorso**. In futuro valutare una restrizione sui nodi raggiunti attraverso richiami contestuali, o l'esplicitazione dei cammini con relativi verbi e gate. Nessuna modifica a `index.html` o `compat-graph.js` ora.

**Integrità confermata:** 59 archi modificati, tutti `E0370`–`E0460` ancora proposti nel blocco previsto (salti numerici conservati). 608 nodi e 1.520 archi invariati, nessun ID duplicato, nessun estremo orfano, nessuna tripletta orientata identica fonte–destinazione–verbo duplicata. Le 228 proposte editoriali rimanenti e le 62 sospensioni devono essere mantenute distinguendo trattazioni da causalità storiche.

**Limite della verifica:** QA dati e simulazione della logica dei livelli, non test grafico in browser desktop o su Android. La criticità documentata non autorizza in questo audit una modifica dell'interfaccia.

---
## Lotto 67 — 8 novembre 2026: Identità, inni, banda e poesia politica

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0461` | **trattazione_riscontrata** | Romanticismo tratta direttamente scuole nazionali, lingue, imperi, culture civiche e repertori di appartenenza. Una scuola musicale non coincide automaticamente con un programma nazionalista unitario. |
| `E0463` | **trattazione_riscontrata** | Opera lirica confronta esplicitamente tradizioni russe, boeme e altre scene europee, lingue e circolazioni transnazionali. Nazionalità del compositore, lingua del libretto e luogo della prima non sono sinonimi. |
| `E0466` | **trattazione_riscontrata** | Risorgimento ricostruisce gli inni del 1847–1849 e gli usi di Il Canto degli Italiani, dal contesto preunitario al riconoscimento repubblicano. La stessa composizione può acquisire funzioni politiche storicamente diverse. |
| `E0467` | **trattazione_riscontrata** | Romanticismo confronta canti civici e comunitari tra contesti politici differenti, incluso Mameli–Novaro e la successiva funzione nazionale; non tutti gli inni sono partiture statali coeve alla loro nascita. |
| `E0469` | **trattazione_riscontrata** | Risorgimento sviluppa gli impieghi delle bande e le trascrizioni dei canti politici; l'organico bandistico e la redazione originale per voce e pianoforte non sono la stessa partitura. Esistono elaborazioni successive documentate. |
| `E0471` | **trattazione_riscontrata** | Risorgimento analizza espressamente la poesia di mobilitazione di Mameli, la costruzione del 'noi' e la diffusione della canzone politica tramite stampa e performance; non riduce il testo a lirica privata. |
| `E0472` | **richiamo_contestuale** | Romanticismo collega lingua, immaginario politico e formazione delle identità culturali, ma non offre l'analisi specifica dei testi di poesia di mobilitazione politica propria del capitolo Risorgimento. |

### Fonti di riscontro esterne
- https://presidenza.governo.it/ufficio_cerimoniale/cerimoniale/inno.html
- https://new.quirinale.it/page/inno
- https://www.bibliotecauniversitaria.ge.it/collezioni/raccolte/materiali-del-risorgimento/inni-musicali.html
- https://opac.bibliotecabraidense.org/opac_braidense/opac/braidense/scheda_sim.jsp?bid=MIL0930462&pager.offset=8&sim_bid=MIL0832567

**Bilancio Lotto 67:** 7 archi; 6 trattazioni riscontrate, 1 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 68 — 8 novembre 2026: Musica di scena, melodramma e funzioni del suono filmico

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0475` | **richiamo_contestuale** | Teatro del Classicismo tratta Fidelio e la drammaturgia operistica, ma non dedica una sezione autonoma alla musica di scena non operistica: rimando sul problema teatrale, non trattazione della musica per prosa. |
| `E0476` | **trattazione_riscontrata** | Opera lirica dedica un approfondimento esplicito alla musica di scena, distinguendo Egmont op. 84 per la tragedia parlata di Goethe da Fidelio e dalle altre forme di teatro musicato di Beethoven. |
| `E0478` | **richiamo_contestuale** | Dal musical al film richiama il teatro musicale e la partitura strumentale come precedenti del cinema; non si sostituisce a una storia autonoma della musica di scena teatrale. |
| `E0479` | **trattazione_riscontrata** | Musica nell'audiovisivo apre con il passaggio dal teatro d'opera e dalla musica di scena alla drammaturgia cinematografica; individua analogie funzionali, non una derivazione diretta e automatica fra tutte le opere e i film. |

### Fonti di riscontro esterne
- https://www.jstor.org/stable/10.7312/chio19888
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://www.treccani.it/enciclopedia/opera-comique/

**Bilancio Lotto 68:** 4 archi; 2 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 69 — 8 novembre 2026: Opéra-comique, collaborazione drammaturgica e coro collettivo

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0502` | **richiamo_contestuale** | Dall'operetta a Broadway distingue brevemente opéra-comique, opéra-bouffe e opera buffa nel discorso sui generi; la distinzione corretta è richiamata, non affrontata come trattazione storico-formale autonoma. |
| `E0512` | **richiamo_contestuale** | Dall'operetta a Broadway menziona collaborazioni fra autori di musica, versi e libretto, incluse Young e la squadra di Shuffle Along; non sviluppa una teoria autonoma della scrittura librettistica. |
| `E0525` | **trattazione_riscontrata** | Teatro del Classicismo confronta Gluck e Beethoven, attribuendo al coro funzioni drammatiche differenti: comunità che supplica, resiste o celebra, e coro dei prigionieri di Fidelio. |
| `E0526` | **trattazione_riscontrata** | Opera lirica documenta il coro dei prigionieri di Fidelio come espressione collettiva della speranza e della libertà, distinto dalla funzione di altri cori del repertorio ottocentesco. |
| `E0527` | **trattazione_riscontrata** | Anatomia del melodramma ha un paragrafo specifico 'Il coro può essere un personaggio collettivo' e confronta Furie gluckiane, prigionieri di Fidelio e Va, pensiero: uso scenico diverso nei vari contesti. |

### Fonti di riscontro esterne
- https://www.treccani.it/enciclopedia/opera-comique/
- https://www.treccani.it/enciclopedia/operetta/
- https://www.larousse.fr/encyclopedie/musdico/divertissement/167254

**Bilancio Lotto 69:** 5 archi; 3 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 70 — 8 novembre 2026: Leitmotiv e operetta fra teatro e cinema

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0542` | **trattazione_riscontrata** | Opera lirica affronta direttamente la tecnica dei motivi conduttori nel teatro di Wagner. Distinguere motivi musicali effettivi da nomi e schemi catalografici spesso attribuiti dalla ricezione posteriore. |
| `E0543` | **richiamo_contestuale** | Romanticismo confronta idée fixe, ritorno tematico e trasformazione motivica, ma il semplice ritorno di un tema non equivale sempre al sistema di Leitmotive wagneriano. |
| `E0544` | **trattazione_riscontrata** | Musica nell'audiovisivo dedica una sezione al leitmotiv nel cinema; l'associazione ricorrente fra suono e personaggio può trasformarsi con le immagini senza replicare necessariamente la tecnica di Wagner. |
| `E0557` | **trattazione_riscontrata** | Dall'operetta a Broadway discute operetta francese e viennese, Offenbach, Strauss, Gilbert e Sullivan e i rapporti fra satira, dialogo, danza e scena, senza trattarli come un solo genere. |
| `E0558` | **richiamo_contestuale** | Dal musical al film colloca l'operetta fra le origini plurali del musical e rimanda all'apposito capitolo storico; non sostituisce una trattazione autonoma del teatro satirico ottocentesco. |

### Fonti di riscontro esterne
- https://www.treccani.it/enciclopedia/leitmotiv/
- https://www.treccani.it/enciclopedia/operetta/
- https://www.jstor.org/stable/10.7312/chio19888

**Bilancio Lotto 70:** 5 archi; 3 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 71 — 8 novembre 2026: Valzer e nascita non lineare della danza teatrale

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0559` | **trattazione_riscontrata** | Romanticismo dedica un capitolo specifico a Vienna, al valzer, alla danza cittadina e all'operetta di Johann Strauss. Distinguere ballo sociale, pagina da concerto e funzione scenica. |
| `E0560` | **trattazione_riscontrata** | Dall'operetta a Broadway presenta il valzer viennese in relazione a Strauss, alla cultura di Vienna e alla scrittura dell'operetta, non come unica forma di danza della modernità. |
| `E0561` | **richiamo_contestuale** | Balletto impiega il valzer come numero coreografico, fra cui Coppélia; non costruisce una storia della diffusione urbana del valzer indipendente dal repertorio scenico. |
| `E0562` | **trattazione_riscontrata** | Rinascimento tratta danza di corte, pavana e gagliarda, balletto vocale e intermedi scenici. Non va però retroproiettata su queste forme la tecnica del balletto accademico romantico. |
| `E0563` | **trattazione_riscontrata** | Barocco dedica una sezione alle suite e alle danze teatrali, integrando esempi di teatro francese e pratiche sceniche; non vi è un'identità automatica con il ballet d'action. |
| `E0564` | **richiamo_contestuale** | Teatro del Classicismo richiama la danza e le esperienze di Angiolini nella riforma teatrale di Gluck, ma il percorso storico autonomo del balletto è nella pagina dedicata. |

### Fonti di riscontro esterne
- https://www.treccani.it/enciclopedia/operetta/
- https://www.treccani.it/enciclopedia/balletto/
- https://www.larousse.fr/encyclopedie/musdico/divertissement/167254

**Bilancio Lotto 71:** 6 archi; 4 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 72 — 8 novembre 2026: Balletto, pantomima, divertissement e riforme della scena

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0567` | **trattazione_riscontrata** | Il balletto è la pagina specialistica che segue genealogie coreutiche, spettacoli, coreografi, partiture e rapporti fra musica e scena. La categoria non è sovrapponibile alla totalità delle danze sociali. |
| `E0568` | **trattazione_riscontrata** | Verso le avanguardie documenta le musiche per i Ballets Russes e il ruolo dello spettacolo nei modernismi, con esempi di Stravinskij, Satie, Massine e Picasso; una compagnia non è un genere musicale. |
| `E0569` | **richiamo_contestuale** | Teatro del Classicismo menziona Angiolini e il balletto pantomimo come contesto della riforma gluckiana; non analizza autonomamente la tecnica e la storia del ballet d'action. |
| `E0570` | **trattazione_riscontrata** | Balletto dedica un capitolo al passaggio dal decoro alla narrazione attraverso Hilverding, Angiolini e Noverre, valorizzando la pantomima come azione senza parola. |
| `E0571` | **sospeso** | Classicismo parla di danza teatrale francese ma non tratta in modo identificabile il ballet d'action, Noverre, Angiolini o la pantomima. Il collegamento specifico resta sospeso anziché essere promosso da un riferimento generico al balletto. |
| `E0573` | **richiamo_contestuale** | Teatro del Classicismo menziona il balletto e la danza delle tradizioni francesi accanto alla riforma di Gluck, ma non ricostruisce in modo specifico il divertissement quale forma scenica autonoma. |
| `E0575` | **trattazione_riscontrata** | Balletto tratta il ballet de cour, l'opéra-ballet e il divertissement delle tradizioni francesi, distinguendoli dal successivo balletto d'azione. Il divertissement può interrompere o incorniciare l'azione. |

### Fonti di riscontro esterne
- https://www.treccani.it/enciclopedia/balletto/
- https://www.treccani.it/enciclopedia/jean-georges-noverre-e-il-nuovo-balletto_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.larousse.fr/encyclopedie/musdico/divertissement/167254
- https://www.loc.gov/exhibits/ballets-russes/overview.html

**Bilancio Lotto 72:** 7 archi; 4 trattazioni riscontrate, 2 richiami contestuali, 1 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 73 — 8 novembre 2026: Ballets Russes, teatrodanza e apporti afroamericani

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0578` | **trattazione_riscontrata** | Balletto dedica una sezione a Diaghilev e ai Ballets Russes: compagnia e rete produttiva fra coreografi, compositori, scenografi e danzatori, con sperimentazioni non omogenee per stile. |
| `E0579` | **trattazione_riscontrata** | Verso le avanguardie colloca Stravinskij, Parade e collaborazioni dei Ballets Russes nel contesto dei modernismi del Novecento. Lo spettacolo è il risultato di agenti artistici diversi. |
| `E0581` | **trattazione_riscontrata** | Balletto approfondisce Bausch, danza moderna e teatrodanza e confronta coreografie diverse della Sagra: il titolo musicale non determina una sola realizzazione scenica. |
| `E0584` | **richiamo_contestuale** | Dall'operetta a Broadway inserisce jazz e tradizioni afroamericane fra le radici autonome del musical, ma non sviluppa una storia tecnica dell'improvvisazione jazz. |
| `E0585` | **trattazione_riscontrata** | Dal musical al film dedica una sezione a jazz e musical nel teatro e nel cinema, distinguendo contesti produttivi e forme sonore; il jazz non nasce dall'operetta. |
| `E0587` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta ragtime e teatro prodotto da artisti afroamericani, con il caso documentato Shuffle Along (1921); non riduce il repertorio alla genealogia dell'operetta europea. |
| `E0588` | **richiamo_contestuale** | Dal musical al film menziona ragtime e apporti del teatro afroamericano come antecedenti del musical, ma la storia specialistica delle produzioni afroamericane è maggiormente sviluppata nella pagina Dall'operetta a Broadway. |

### Fonti di riscontro esterne
- https://www.loc.gov/exhibits/ballets-russes/overview.html
- https://www.loc.gov/exhibits/ballets-russes/exhibition-items.html
- https://nmaahc.si.edu/explore/stories/remembering-milestone-entertainment-history
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/

**Bilancio Lotto 73:** 7 archi; 5 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 74 — 8 novembre 2026: Vaudeville, musical integrato e drammaturgia del numero

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0589` | **trattazione_riscontrata** | Dall'operetta a Broadway discute vaudeville, rivista e spettacoli popolari americani come contributi distinti alla formazione del musical, senza identificarli con l'opéra-comique francese. |
| `E0590` | **richiamo_contestuale** | Dal musical al film cita il vaudeville e il varietà tra le radici del musical, ma non ne ricostruisce la storia istituzionale o repertoriale in modo autonomo. |
| `E0591` | **trattazione_riscontrata** | Dall'operetta a Broadway spiega la convergenza di numero musicale, personaggio, libro e canzone, con antecedenti multipli e casi quali Show Boat e Shuffle Along. |
| `E0592` | **trattazione_riscontrata** | Dal musical al film presenta Show Boat, Oklahoma! e l'integrazione delle canzoni con l'azione, mettendo in relazione teatro e adattamento cinematografico senza identificarli. |
| `E0593` | **richiamo_contestuale** | Musica nell'audiovisivo menziona film musicali e funzioni delle canzoni nel racconto, ma non offre una storia del musical come genere teatrale. |
| `E0594` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Show Boat come passaggio importante ma non invenzione ex nihilo del musical integrato; il modello si trasforma ulteriormente con Oklahoma!. |
| `E0595` | **trattazione_riscontrata** | Dal musical al film analizza la crescente integrazione di numeri, personaggi e vicenda in Show Boat (1927) e Oklahoma! (1943), distinguendo la nascita scenica del modello dalle versioni sullo schermo. |

### Fonti di riscontro esterne
- https://nmaahc.si.edu/explore/stories/remembering-milestone-entertainment-history
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://loc.gov/exhibits/art-of-theatrical-design/american-variety-and-musical-stage.html
- https://www.treccani.it/enciclopedia/operetta/

**Bilancio Lotto 74:** 7 archi; 5 trattazioni riscontrate, 2 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 75 — 8 novembre 2026: Cinema muto, film musicale, sonoro e animazione

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0596` | **trattazione_riscontrata** | Dal musical al film ricostruisce accompagnamenti dal vivo, partiture specifiche, cue sheets e riusi di repertorio per film muti: il film muto non è per definizione proiezione priva di musica. |
| `E0597` | **richiamo_contestuale** | Musica nell'audiovisivo richiama il cinema muto nel passaggio alla progettazione sonora del film, ma rimanda al capitolo storico per le prassi di sala, gli organici e le partiture. |
| `E0599` | **trattazione_riscontrata** | Dal musical al film sviluppa cinema musicale, danza sullo schermo e trasformazione del musical teatrale in numeri pensati per il montaggio e per la cinepresa. |
| `E0600` | **richiamo_contestuale** | Musica nell'audiovisivo affronta funzioni narrative di musica e canzoni e cita film musicali, ma non distingue sistematicamente la storia del film musicale da quella di ogni film dotato di partitura. |
| `E0601` | **trattazione_riscontrata** | Dal musical al film tratta la diffusione del sonoro registrato e sincronizzato come passaggio graduale, distinto dalla storia del colore e dalla persistenza di pratiche senza dialoghi. |
| `E0602` | **richiamo_contestuale** | Musica nell'audiovisivo assume il sonoro sincronizzato come contesto dei linguaggi filmici e della diegesi, senza proporre una cronologia tecnica autonoma dei diversi sistemi di registrazione. |
| `E0603` | **trattazione_riscontrata** | Dal musical al film sviluppa Disney, Silly Symphonies e Fantasia come modelli diversi di rapporto fra partitura, immagine e animazione; Fantasia non coincide con il musical di scena. |
| `E0604` | **trattazione_riscontrata** | Musica nell'audiovisivo dedica una trattazione alla sincronizzazione animata e al Mickey Mousing, incluso Steamboat Willie e la differenza tra gesto scandito e sincronizzazione di sequenze più lunghe. |

### Fonti di riscontro esterne
- https://guides.loc.gov/music-for-silent-film/scores
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/photoplay-albums-for-silent-film-scores/
- https://loc.gov/exhibits/music-and-animation/about.html
- https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/walt-disney-ub-iwerks-steamboat-willie-1928/

**Bilancio Lotto 75:** 8 archi; 5 trattazioni riscontrate, 3 richiami contestuali, 0 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
## Lotto 76 — 8 novembre 2026: Mickey Mousing, composizione cinematografica e analisi del suono

**Metodo:** riscontro dei contenuti effettivi delle pagine pubblicate in `main`, distinzione fra trattazione, richiamo contestuale e collegamento sospeso, controllo storico su fonti indipendenti. Gli archi sono rimandi da capitolo a concetto, non relazioni di discendenza. Non toccati capitoli, Atlante 3D, interfaccia Atlantis o protocollo.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0605` | **trattazione_riscontrata** | Musica nell'audiovisivo dedica un capitolo al Mickey Mousing e spiega la corrispondenza puntuale fra gesto, musica e rumori; la sincronizzazione non si riduce all'intera storia della colonna sonora. |
| `E0606` | **richiamo_contestuale** | Dal musical al film definisce e illustra il Mickey Mousing nel percorso Disney, ma rimanda alla pagina audiovisiva per l'analisi delle tecniche e delle funzioni del suono. |
| `E0607` | **trattazione_riscontrata** | Dal musical al film affronta la composizione per immagini, dalle partiture per il muto alla colonna sonora orchestrale, distinguendo riuso di musica preesistente e musica originale. |
| `E0608` | **trattazione_riscontrata** | Musica nell'audiovisivo analizza la composizione originale, il ruolo del compositore, i cue, la registrazione e il missaggio; la colonna sonora comprende anche voci e rumori, non solo partitura. |
| `E0610` | **trattazione_riscontrata** | Musica nell'audiovisivo distingue diegetico/extradiegetico e in/off/over, precisando che off è spesso diegetico fuori campo e non sinonimo di musica extradiegetica. |
| `E0611` | **sospeso** | Dal musical al film contiene riferimenti a sorgenti sonore, montaggio e scena ma non introduce né distingue sistematicamente diegesi, extradiegesi, in, off e over: il rimando tecnico specifico va sospeso. |
| `E0612` | **trattazione_riscontrata** | Musica nell'audiovisivo confronta empatia, contrappunto e anempatia secondo Chion, spiegando che la musica apparentemente indifferente può intensificare l'effetto drammatico. |
| `E0614` | **trattazione_riscontrata** | Musica nell'audiovisivo dedica una sezione alla distinzione fra musica composta per il film e preesistente, indipendente dalla distinzione fra suono diegetico ed extradiegetico. |
| `E0615` | **richiamo_contestuale** | Dal musical al film discute il riuso di repertori preesistenti e i casi di Fantasia e del cinema muto, ma non sviluppa una tassonomia completa della musica originale e preesistente. |
| `E0617` | **trattazione_riscontrata** | Musica nell'audiovisivo tratta il Foley come ricostruzione sincronizzata di rumori di passi, oggetti e gesti, distinta dal Mickey Mousing che usa eventi musicali per il movimento. |
| `E0619` | **trattazione_riscontrata** | Musica nell'audiovisivo tratta esplicitamente il ruolo di montaggio, sonorizzazione, cue, missaggio e riorganizzazione delle sorgenti sonore nel racconto cinematografico. |
| `E0620` | **richiamo_contestuale** | Dal musical al film discute montaggio, sincronizzazione e scelta della partitura in rapporto alle scene, ma la storia del suono montato come pratica audiovisiva autonoma resta nella pagina specialistica. |

### Fonti di riscontro esterne
- https://loc.gov/exhibits/music-and-animation/about.html
- https://www.moma.org/momaorg/shared/flattened_pages/moma_learning/walt-disney-ub-iwerks-steamboat-willie-1928/
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/
- https://www.acmi.net.au/education/school-program-and-resources/foley-sound/
- https://www.jstor.org/stable/10.7312/chio19888
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/

**Bilancio Lotto 76:** 12 archi; 8 trattazioni riscontrate, 3 richiami contestuali, 1 sospensioni. Conservati gli URL precedenti e gli attributi `previous_quality_gate` e `previous_description`.

---
### Bilancio dopo i Lotti 67–76

- Revisionati **68 archi** distribuiti in dieci lotti tematici. Ripartizione: 67: 7, 68: 4, 69: 5, 70: 5, 71: 6, 72: 7, 73: 7, 74: 7, 75: 8, 76: 12.
- **608 nodi** e **1520 archi** invariati; duplicati ID nodo: **0**; duplicati ID arco: **0**; orfani: **0**; triplette duplicate: **0**.
- Proposte editoriali residue: **160**. Sospensioni: **64**. Richiami contestuali: **45**. Trattazioni riscontrate: **141**.
- Verifiche indipendenti preesistenti: **359** flag e **322** gate espliciti, invariati; questi lotti non attribuiscono riscontri causali autonomi ai rimandi editoriali.
- Nota filologica sul Canto degli Italiani: fonti istituzionali offrono cronologie non del tutto coincidenti per la prima intonazione o il momento della messa in musica di Novaro; il registro evita di fissare una data di composizione esatta non risolta senza confronto degli autografi. La prima diffusione risorgimentale e l'adozione provvisoria (1946) sono distinte dal riconoscimento legislativo (2017).
- Le forme di opera francese, operetta e musical vanno tenute distinte; Show Boat, Shuffle Along e Oklahoma! non costituiscono un'unica genealogia lineare.
- La differenza fra accompagnamento del cinema muto, sincronizzazione dei cartoon, Foley e teoria della diegesi è mantenuta sia nei gate sia nelle descrizioni.
- Rimane da verificare nei successivi lotti la pertinenza multilivello dei nodi che vengono raggiunti a livello I tramite richiami contestuali: un percorso computabile non è sempre una filiazione storica.
- **Ripresa dal Lotto 77:** prime proposte ancora aperte dopo `E0620`, conservando tutte le verifiche già concluse.

### QA supplementare — simulazione dei percorsi dopo i Lotti 67–76

**Metodo:** confronto degli archi del blob `3684a1453b7a901d4d936fba3ec0c20873618f6d` (prima) con `abf97a977a23550e41a38695dc974895d78f89d7` (dopo). Riprodotte le regole predefinite della vista focalizzata di Atlantis: gate visibili «trattazione» e «menzione», livelli I–V, nessuna espansione del verbo `sviluppa_o_illumina` oltre il primo livello; oltre I non si attraversano come ponti i capitoli o gli archi generici.

| Nodo focale | Prima: I / II / III / IV / V | Dopo: I / II / III / IV / V |
| --- | --- | --- |
| Mozart | 13 / 4 / 3 / 3 / 5 | 13 / 4 / 3 / 3 / 5 |
| Beethoven | 17 / 17 / 7 / 0 / 0 | 17 / 17 / 7 / 0 / 0 |
| Giuseppe Verdi | 22 / 16 / 15 / 3 / 1 | 22 / 16 / 15 / 3 / 1 |
| Risorgimento | 15 / 25 / 32 / 18 / 3 | 18 / 25 / 31 / 18 / 3 |
| Romanticismo | 95 / 65 / 55 / 28 / 15 | 100 / 66 / 54 / 28 / 15 |
| Opera lirica — da Fidelio a Turandot | 96 / 58 / 46 / 29 / 20 | 100 / 58 / 46 / 29 / 20 |
| Teatro del Classicismo | 44 / 34 / 29 / 20 / 15 | 49 / 36 / 27 / 18 / 15 |
| Il balletto | 63 / 63 / 47 / 26 / 21 | 69 / 62 / 46 / 26 / 21 |
| Dall’operetta a Broadway | 25 / 9 / 7 / 5 / 0 | 34 / 10 / 7 / 5 / 0 |
| Dal musical al film | 30 / 25 / 17 / 21 / 31 | 45 / 27 / 18 / 20 / 29 |
| Musica nell’audiovisivo | 20 / 51 / 51 / 31 / 13 | 34 / 56 / 50 / 31 / 13 |

**Interpretazione:** i capitoli sulle forme teatrali e cinematografiche acquisiscono nodi pertinenti di primo livello. Le variazioni dei livelli successivi sono effetti di percorsi già esistenti attraversati dopo il nuovo primo passo, non riscontri automatici di influenza storica fra tutte le opere coinvolte. Confermata la precauzione dei Lotti 57–66 sulla possibile propagazione semantica attraverso nodi di senso raggiunti via relazioni editoriali generiche. Nessuna modifica al renderer.

**Integrità:** 608 nodi, 1.520 archi, esattamente 68 archi modificati fra Lotti 67 e 76, zero duplicati di ID nodo/arco, zero estremi orfani, zero triple fonte–destinazione–verbo duplicate. Residui: 160 proposte editoriali, 64 sospensioni; 359 flag di riscontro indipendente invariati.

**Punti aperti documentati:** `E0571` (Classicismo → ballet d'action) e `E0611` (Dal musical al film → diegesi e off/over) sono sospesi perché manca l'approfondimento specifico nei rispettivi capitoli; un riferimento generico alla danza o al suono non basta a promuoverli. I gate potranno essere rivalutati dopo aggiornamenti editoriali verificabili.

**Limite del QA:** si tratta di simulazione dati della navigazione e confronto remoti dei file, non di prova visuale/operativa su browser desktop o dispositivo Android.

**Continuazione:** dal Lotto 77, proposte in ordine successivo a `E0620`, salvaguardando separatamente nodi geografici, istituzioni e arredi storici per evitare l'errata espansione dei contenitori generici.

---
## Lotto 77 — 2026-11-08: Sperimentazione, atonalità e serialismo: non ogni novità è avanguardia

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0621` | **trattazione_riscontrata** | Verso le avanguardie confronta futurismo, espressionismo, nuovi timbri, ritmo e poetiche del Novecento: «sperimentazione» è un crocevia di fenomeni, non la denominazione di una scuola unitaria. |
| `E0622` | **richiamo_contestuale** | Romanticismo esamina sperimentazioni della forma e della scrittura ottocentesca, ma non offre una storia autonoma delle avanguardie novecentesche. Il ponte è solo prospettico. |
| `E0623` | **trattazione_riscontrata** | Balletto esamina le ricerche sceniche dei Ballets Russes e le successive trasformazioni del linguaggio coreutico. Innovazione coreografica, musicale e scenografica vanno distinte. |
| `E0624` | **richiamo_contestuale** | Musica nell'audiovisivo affronta trasformazioni del linguaggio sonoro e cinematografico, ma non sviluppa una storia delle avanguardie musicali come categoria storiografica. |
| `E0625` | **trattazione_riscontrata** | Verso le avanguardie distingue la fase atonale libera di Schönberg dal metodo dodecafonico elaborato nel primo dopoguerra: atonalità e tecnica dei dodici suoni non sono sinonimi. |
| `E0626` | **sospeso** | Opera lirica non sviluppa un paragrafo tecnico riconoscibile sull'atonalità; l'appartenenza cronologica di alcune opere al primo Novecento non basta a provare questo nesso specifico. |
| `E0627` | **trattazione_riscontrata** | Verso le avanguardie dedica sezioni alla dodecafonia e alle trasformazioni del serialismo, senza trasformare tutta la produzione novecentesca in musica seriale. |

### Fonti di riscontro esterne
- https://schoenberg.at/en/schoenberg/timeline

**Bilancio Lotto 77:** 7 archi; 4 trattazioni, 2 richiami contestuali, 1 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 78 — 2026-11-08: Musica concreta, indeterminazione, minimalismo e neoclassicismi

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0628` | **trattazione_riscontrata** | Verso le avanguardie discute Pierre Schaeffer, suoni registrati e montaggio nella musica concreta; distingue queste pratiche dalla sintesi del suono elettronico. |
| `E0629` | **sospeso** | Musica nell'audiovisivo esamina registrazione e postproduzione per immagini, non la musica concreta di Schaeffer come genere storico; l'analogia tecnica non autorizza il collegamento. |
| `E0630` | **trattazione_riscontrata** | Verso le avanguardie affronta Cage, casualità e indeterminazione, distinguendo scelte compositive, autonomia dell'esecutore ed eventi acustici non progettati. |
| `E0631` | **trattazione_riscontrata** | Balletto menziona esplicitamente Merce Cunningham e la collaborazione con John Cage, esaminando la rinegoziazione del rapporto fra musica e danza: non ogni danza libera è indeterminata. |
| `E0632` | **trattazione_riscontrata** | Verso le avanguardie tratta Riley, Reich e Glass, distinguendo ripetizione, processo, pulsazione e differenti poetiche minimaliste. |
| `E0633` | **sospeso** | Musica nell'audiovisivo non contiene una trattazione del minimalismo musicale come corrente: la semplice presenza di tecniche iterative nella musica per immagini non basta. |
| `E0634` | **trattazione_riscontrata** | Verso le avanguardie colloca il neoclassicismo fra linguaggi plurali del Novecento; il recupero di modelli storici non coincide con una mera restaurazione stilistica. |
| `E0635` | **trattazione_riscontrata** | Balletto esamina il neoclassicismo coreutico e Balanchine nei contesti della modernità teatrale; non va assimilato in modo meccanico al neoclassicismo compositivo di Stravinskij. |
| `E0636` | **sospeso** | Romanticismo non tratta il neoclassicismo novecentesco quale corrente distinta; anticipazioni e confronti fra epoche non equivalgono a una trattazione presente. |

### Fonti di riscontro esterne
- https://brahms.ircam.fr/en/composer/pierre-schaeffer/biography
- https://www.treccani.it/enciclopedia/musica-concreta/

**Bilancio Lotto 78:** 9 archi; 6 trattazioni, 0 richiami contestuali, 3 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 79 — 2026-11-08: Registrazione, trascrizione e riuso: distinguere tecniche e mezzi

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0637` | **trattazione_riscontrata** | Romanticismo riflette sulla nascita della registrazione sonora e sul mutamento dell'ascolto, in dialogo con il virtuosismo e con la cultura musicale di fine Ottocento. |
| `E0638` | **trattazione_riscontrata** | Verso le avanguardie distingue registrazione come documento, tecnica di riproduzione e materiale creativo per lo studio elettroacustico; un player d'ascolto moderno non documenta una pratica storica. |
| `E0639` | **richiamo_contestuale** | Dal musical al film presenta le trasformazioni tecnologiche del sonoro sincronizzato e l'uso di registrazioni, ma non offre una ricostruzione autonoma di tutti i supporti di registrazione. |
| `E0640` | **trattazione_riscontrata** | Musica nell'audiovisivo affronta registrazione, montaggio, Foley e missaggio come fasi di costruzione della traccia sonora; la registrazione del sonoro non è sempre diegetica. |
| `E0641` | **trattazione_riscontrata** | Barocco discute le trascrizioni bachiane di concerti italiani per tastiera; distinguere trascrizione creativa d'epoca, adattamento strumentale ed edizione moderna. |
| `E0642` | **richiamo_contestuale** | Classicismo usa «trascrizioni» nel contesto di copie, edizioni e fonti digitalizzate: non sviluppa una trattazione della trascrizione creativa paragonabile ai capitoli dedicati. |
| `E0643` | **trattazione_riscontrata** | Romanticismo dedica una parte al virtuosismo e alla trascrizione pianistica, mostrando come la rielaborazione modifichi funzione e destinazione del materiale musicale. |
| `E0644` | **trattazione_riscontrata** | Verso le avanguardie tratta anche il caso dell'orchestrazione dei Quadri di Musorgskij da parte di Ravel, distinguendo trascrizione, orchestrazione e riuso di repertorio. |
| `E0645` | **richiamo_contestuale** | Dal musical al film menziona trascrizioni e raccolte di musiche preesistenti per il cinema muto e le cue sheets; è un uso funzionale al film, non una storia generale della trascrizione. |

### Fonti di riscontro esterne
- https://brahms.ircam.fr/en/composer/pierre-schaeffer/biography
- https://www.treccani.it/enciclopedia/musica-concreta/

**Bilancio Lotto 79:** 9 archi; 6 trattazioni, 3 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 80 — 2026-11-08: Firenze e Venezia: corti, spettacoli e istituzioni, non contenitori equivalenti

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0646` | **trattazione_riscontrata** | Rinascimento tratta Firenze, Lorenzo de' Medici, la committenza e il rapporto fra vita di corte e produzione musicale; la città non identifica una sola scuola. |
| `E0647` | **trattazione_riscontrata** | Melodramma sviluppa il contesto fiorentino delle camerate e dei primi esperimenti di teatro musicale intorno a Peri, Caccini e Rinuccini; il 1600 non è un'invenzione improvvisa dell'opera. |
| `E0648` | **trattazione_riscontrata** | Barocco presenta Firenze e le feste medicee del 1600 come soglia tra pratiche precedenti e nuova drammaturgia musicale, senza far coincidere matrimonio ed origine unica dell'opera. |
| `E0649` | **sospeso** | Balletto segue le corti italiane e Caterina de' Medici alla corte francese, ma non attribuisce esplicitamente a Firenze una trattazione della propria storia coreutica. |
| `E0650` | **trattazione_riscontrata** | Rinascimento tratta Venezia, San Marco, la stampa musicale e la policoralità: sono fenomeni legati a istituzioni distinte, non alla sola identità urbana. |
| `E0651` | **trattazione_riscontrata** | Barocco tratta Venezia, il circuito delle istituzioni musicali, Vivaldi e la Pietà; occorre distinguere sede dell'attività, pubblico, generi e prime rappresentazioni. |
| `E0652` | **trattazione_riscontrata** | Melodramma esamina la nascita dell'impresa operistica veneziana e il modello dei teatri a pagamento, da San Cassiano (1637), distinto dalle feste delle corti fiorentine. |
| `E0653` | **richiamo_contestuale** | Opera lirica richiama Venezia attraverso le prime rossiniane del 1813, fra cui Tancredi e L'italiana in Algeri; sono eventi produttivi concreti, non una storia generale della città. |

### Fonti di riscontro esterne
- https://www.cambridge.org/core/books/abs/cambridge-history-of-italian-literature/opera/2ED07033FD29BE67912A6D5D7D687127
- https://publishing.cdlib.org/ucpressebooks/public/book/opera-in-seventeenth-century-venice-the-creation-of-a-genre.html
- https://www.basilicasanmarco.it/basilica/tradizione-musicale/

**Bilancio Lotto 80:** 8 archi; 6 trattazioni, 1 richiami contestuali, 1 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 81 — 2026-11-08: Roma e Napoli: patronage, conservatori, circuiti teatrali

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0654` | **trattazione_riscontrata** | Rinascimento tratta Roma e la cultura polifonica delle cappelle e delle istituzioni religiose; una sede comune non stabilisce relazioni maestro-allievo fra compositori. |
| `E0655` | **trattazione_riscontrata** | Barocco descrive il patronage romano, Corelli e ambienti accademici; Roma è contesto di più istituzioni e non etichetta stilistica unica. |
| `E0656` | **trattazione_riscontrata** | Melodramma distingue la Roma antica evocata nel teatro dalla Roma barocca di Barberini, Landi e spettacoli di corte; sono piani storici diversi dello stesso luogo. |
| `E0657` | **richiamo_contestuale** | Barocco richiama Napoli in biografie e circuiti di Domenico Scarlatti, ma non dedica una ricostruzione autonoma ai quattro conservatori napoletani. |
| `E0658` | **trattazione_riscontrata** | Melodramma ricostruisce la pluralità dei quattro conservatori napoletani, delle pratiche formative e dei teatri; «scuola napoletana» non indica uniformità di stile. |
| `E0659` | **trattazione_riscontrata** | Opera lirica analizza il periodo napoletano di Rossini e il ruolo di Barbaja e del San Carlo nel circuito delle prime; localizzazione produttiva non significa provenienza nazionale. |

### Fonti di riscontro esterne
- https://www.treccani.it/enciclopedia/stefano-landi_%28Dizionario-Biografico%29/
- https://www.rossinioperafestival.it/fondazione/la-fondazione/gioachino-rossini/
- https://siusa-archivi.cultura.gov.it/cgi-bin/pagina.pl?Chiave=59012&TipoPag=prodente

**Bilancio Lotto 81:** 6 archi; 5 trattazioni, 1 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 82 — 2026-11-08: Parigi: tradizioni operistiche, danza, operetta, Ballets Russes

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0660` | **trattazione_riscontrata** | Melodramma affronta i passaggi fra teatro italiano, scena francese e riforma gluckiana a Parigi; va specificato il periodo per ogni collegamento. |
| `E0661` | **trattazione_riscontrata** | Teatro del Classicismo distingue Parigi della riforma di Gluck, opéra-comique e sistemi istituzionali del teatro francese; non unificare sale e repertori distinti. |
| `E0662` | **trattazione_riscontrata** | Opera lirica sviluppa l'attività parigina di Rossini e la circolazione fra grand opéra, Opéra-Comique e altri circuiti; lingua, luogo e versione di un'opera non sono sinonimi. |
| `E0663` | **trattazione_riscontrata** | Romanticismo tratta l'operetta parigina, Offenbach e le culture urbane della Belle Époque, considerando produzione e ricezione come piani distinti. |
| `E0664` | **trattazione_riscontrata** | Dall'operetta a Broadway dedica una sezione all'operetta parigina di Offenbach e ne distingue le linee da Vienna, Londra e musical statunitense. |
| `E0665` | **trattazione_riscontrata** | Balletto segue Parigi come sede di codificazione professionale, compagnie, istituzioni e produzioni dei Ballets Russes; la storia della danza non si esaurisce nella capitale. |
| `E0666` | **trattazione_riscontrata** | Verso le avanguardie segue il modernismo musicale e scenico dei Ballets Russes, con prime e collaborazioni a Parigi; non attribuire a tutti gli artisti della compagnia la stessa poetica. |

### Fonti di riscontro esterne
- https://www.operadeparis.fr/apropos/histoire/lopera-au-xviie-siecle
- https://www.operadeparis.fr/artistes/ecole-de-danse/histoire
- https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html

**Bilancio Lotto 82:** 7 archi; 7 trattazioni, 0 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 83 — 2026-11-08: Vienna e Mannheim: epoche, generi e istituzioni distinti

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0667` | **richiamo_contestuale** | Barocco cita Vienna nel riferimento all'Alceste di Gluck del 1767, ma non costruisce una storia autonoma della vita musicale viennese: il nesso è circoscritto. |
| `E0668` | **trattazione_riscontrata** | Classicismo approfondisce Vienna nel quadro asburgico e nelle pratiche musicali di Haydn, Mozart e Beethoven, separando corte, teatri e altri circuiti. |
| `E0669` | **trattazione_riscontrata** | Teatro del Classicismo approfondisce la Vienna di Gluck, Calzabigi e Mozart; Orfeo ed Euridice del 1762 non è la stessa redazione di Orphée et Euridice parigino del 1774. |
| `E0670` | **trattazione_riscontrata** | Romanticismo tratta Vienna come centro di valzer, operetta e cultura pubblica ottocentesca; la Vienna di Strauss non coincide con quella del Classicismo viennese. |
| `E0671` | **trattazione_riscontrata** | Dall'operetta a Broadway ricostruisce l'operetta viennese di Suppé, Johann Strauss figlio e Lehár come percorso differenziato da quello francese. |
| `E0672` | **trattazione_riscontrata** | Balletto richiama l'ambiente viennese e il balletto pantomimo di Gluck e Angiolini, incluso Don Juan (1761): non confonderlo con Don Giovanni (1787) di Mozart. |
| `E0673` | **trattazione_riscontrata** | Classicismo dedica una sezione alla Hofkapelle di Mannheim e a innovazioni di scrittura ed esecuzione orchestrale; non attribuire retroattivamente ogni crescendo al solo ambiente di Mannheim. |

### Fonti di riscontro esterne
- https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html
- https://www.berliner-philharmoniker.de/en/programme-notes/christoph-willibald-gluck-don-juan-ballet/
- https://www.treccani.it/enciclopedia/jan-vaclav-antonin-stamitz/

**Bilancio Lotto 83:** 7 archi; 6 trattazioni, 1 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 84 — 2026-11-08: San Pietroburgo e Torino: verificare opere ed eventi, non città astratte

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0674` | **trattazione_riscontrata** | Balletto tratta San Pietroburgo e i teatri imperiali, distinguendo il debutto moscovita del Lago dei cigni (1877) dalla successiva ripresa Petipa–Ivanov a San Pietroburgo (1895). |
| `E0675` | **richiamo_contestuale** | Romanticismo menziona San Pietroburgo fra i diversi contesti russi e operistici, ma la città non costituisce una trattazione autonoma del balletto imperiale. |
| `E0676` | **richiamo_contestuale** | Opera lirica tratta La forza del destino di Verdi nella prima di San Pietroburgo (1862), distinguendola dalla revisione milanese del 1869; è un evento documentato, non una panoramica cittadina. |
| `E0677` | **trattazione_riscontrata** | Risorgimento tratta Torino nella circolazione dei canti patriottici e nel lavoro di Novaro sul Canto degli Italiani, senza cristallizzare una cronologia autografa controversa. |
| `E0678` | **richiamo_contestuale** | Romanticismo menziona Torino come sede della messa in musica del Canto degli Italiani da parte di Novaro; il capitolo non offre una storia autonoma dei circoli musicali torinesi. |

### Fonti di riscontro esterne
- https://www.mariinsky.ru/en/playbill/playbill/2016/6/2/1_1900/
- https://www.rossinioperafestival.it/fondazione/la-fondazione/gioachino-rossini/

**Bilancio Lotto 84:** 5 archi; 2 trattazioni, 3 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 85 — 2026-11-08: Broadway e Hollywood: contesti produttivi distinti

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0679` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Broadway e New York come teatro dell'incontro fra operetta, vaudeville, ragtime, jazz e musical integrato; non ridurre tutto a una filiazione europea. |
| `E0680` | **trattazione_riscontrata** | Dal musical al film sviluppa Broadway come circuito teatrale da distinguere dagli adattamenti cinematografici; un titolo condiviso non coincide con la medesima produzione. |
| `E0681` | **trattazione_riscontrata** | Dal musical al film esamina Hollywood, il passaggio al sonoro e le forme del musical cinematografico, compresa la messa in scena pensata per cinepresa e montaggio. |
| `E0682` | **trattazione_riscontrata** | Musica nell'audiovisivo analizza il sinfonismo hollywoodiano e l'uso drammaturgico dei temi nel cinema; Hollywood è qui una realtà produttiva, non una scuola stilistica omogenea. |

### Fonti di riscontro esterne
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://rodgersandhammerstein.com/production/show-boat/1927-original-broadway/

**Bilancio Lotto 85:** 4 archi; 4 trattazioni, 0 richiami contestuali, 0 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

## Lotto 86 — 2026-11-08: Notre-Dame, Medici, San Marco e corti italiane: disambiguazione istituzionale

**Metodo:** riscontro dei capitoli HTML pubblicati su `main`, classificazione fra trattazione, richiamo e sospensione, confronto con fonti storico-istituzionali. Non sono introdotte influenze causali o parentela mediante contenitori geografici.

| ID | Gate aggiornato | Nota storico-filologica |
| --- | --- | --- |
| `E0683` | **trattazione_riscontrata** | Medioevo dedica una sezione alla scuola polifonica di Notre-Dame e a Parigi fra XII e XIII secolo; una cattedrale non «inventa» da sola la polifonia. |
| `E0684` | **trattazione_riscontrata** | Rinascimento affronta le corti e Lorenzo de' Medici a Firenze come luogo di committenza e attività culturali; distinguere corte, dinastia e città. |
| `E0685` | **trattazione_riscontrata** | Melodramma tratta le committenze medicee fiorentine e le feste del 1600 in rapporto a Peri e Caccini; non fondere la corte fiorentina con quella francese. |
| `E0686` | **sospeso** | Balletto cita Caterina de' Medici nel contesto della corte di Francia, ma non documenta un approfondimento sulla corte medicea fiorentina: rapporto diretto sospeso. |
| `E0687` | **trattazione_riscontrata** | Rinascimento dedica spazio alla Cappella di San Marco e alla scuola veneziana, distinguendo istituzione, pratica dei cori spezzati e città di Venezia. |
| `E0688` | **sospeso** | Barocco non tratta specificamente San Marco di Venezia nel testo controllato; l'importanza storica della cappella e il passaggio fra epoche non legittimano un arco di pagina diretto. |
| `E0689` | **trattazione_riscontrata** | Rinascimento descrive la pluralità delle corti italiane e i loro scambi transalpini: non esiste un'unica istituzione denominata «corti italiane». |
| `E0690` | **trattazione_riscontrata** | Balletto ripercorre le tradizioni della danza nelle corti italiane e il successivo consolidamento in Francia, evitando una genealogia lineare senza mediazioni. |
| `E0691` | **trattazione_riscontrata** | Melodramma discute Medici, Gonzaga ed Este come differenti ambienti di patronage dell'opera nascente, senza ridurli a una corte unica. |

### Fonti di riscontro esterne
- https://www.notredamedeparis.fr/en/understand/music/polyphony-and-motets/
- https://www.cambridge.org/core/books/abs/cambridge-history-of-italian-literature/opera/2ED07033FD29BE67912A6D5D7D687127
- https://www.basilicasanmarco.it/basilica/tradizione-musicale/

**Bilancio Lotto 86:** 9 archi; 7 trattazioni, 0 richiami contestuali, 2 sospensioni. Conservate le prove e le qualità precedenti dove mutate.

---

### Bilancio dopo i Lotti 77–86

- **Archi revisionati:** 71 su 10 lotti, ID da `E0621` a `E0691` (tutti coperti). **53 trattazioni**, **11 richiami contestuali**, **7 sospensioni**.
- **Integrità strutturale:** 608 nodi e 1520 archi; ID nodo e arco duplicati: 0; estremi orfani: 0; triplette fonte–destinazione–verbo duplicate: 0.
- **Proposte editoriali residue:** 136. **Sospensioni totali:** 68. **Trattazioni riscontrate:** 192. **Richiami contestuali:** 56.
- **Flag storici indipendenti:** 359, invariati. I collegamenti `sviluppa_o_illumina` e `si_svolge_anche_a` convalidano la presenza nel capitolo, non causalità, influenza personale o discendenza geografica.
- **Verifica orientativa dei collegamenti di primo livello** (archi diretti con gate di trattazione, menzione o richiamo; non è un test browser né una simulazione dei cinque livelli):

| Capitolo | Prima | Dopo |
| --- | ---: | ---: |
| Verso le avanguardie e il Novecento | 28 | 38 |
| Il balletto | 48 | 54 |
| Rinascimento | 40 | 46 |
| Barocco | 37 | 43 |
| Melodramma barocco | 24 | 31 |
| Romanticismo | 66 | 71 |
| Opera lirica — da Fidelio a Turandot | 54 | 58 |
| Musica nell’audiovisivo | 32 | 35 |
| Dal musical al film | 40 | 44 |
| Dall’operetta a Broadway | 32 | 35 |
| Medioevo | 18 | 19 |
| Teatro del Classicismo | 24 | 26 |
| Classicismo | 29 | 32 |
| Risorgimento | 13 | 14 |

**Punti sospesi:** `E0626`, `E0629`, `E0633`, `E0636`, `E0649`, `E0686`, `E0688`. La sospensione è un limite del riscontro testuale, non una negazione universale dell'affinità storica.

**Nota filologica:** l'uso di luogo, corte o istituzione come nodo condiviso non autorizza l'inferenza di rapporti fra tutte le persone/opere raggiungibili attraverso quel nodo. Distinte la prima moscovita del *Lago dei cigni* (1877) e la ripresa pietroburghese (1895), le versioni viennese e parigina di *Orfeo ed Euridice*, la corte medicea di Firenze e quella francese di Caterina de' Medici.

**QA:** sintassi JSON, preservazione di ID, provenienze e qualità precedenti, identificazione degli archi esaminati e nessuna variazione agli altri 1.449 archi. Non è stato eseguito un collaudo visuale browser su Android/desktop. Il renderer e le pagine del sito restano invariati. La simulazione multilivello 1–5 resta una verifica separata.

**Continuazione:** Lotto 87 da `E0692`, controllando per ogni arco successivo persone, opere, versioni, editori e provenienze prima di eventuali modifiche.

---
## Lotto 87 — 2026-11-08: Pergolesi, Strauss, Eubie Blake e le due identità Halévy

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0692` | **trattazione_riscontrata** | Melodramma affronta Pergolesi nella trasformazione del teatro comico settecentesco, soprattutto tramite La serva padrona; l'arco documenta la trattazione, non una discendenza stilistica universale. |
| `E0693` | **richiamo_contestuale** | Opera lirica cita Pergolesi e La serva padrona quale precedente dell'intermezzo settecentesco; il percorso principale della pagina inizia nel 1805, non è una biografia di Pergolesi. |
| `E0694` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Johann Strauss figlio nel contesto dell'operetta viennese, accanto a Suppé e Lehár; non confonderlo con Johann Strauss padre né ridurre la sua produzione al solo valzer. |
| `E0695` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Eubie Blake, autore delle musiche di Shuffle Along (1921), distinguendo musica, testi di Noble Sissle e libretto di Miller e Lyles. |
| `E0696` | **richiamo_contestuale** | Romanticismo nomina Fromental Halévy attraverso La Juive nel contesto del grand opéra. Non confondere il compositore con Ludovic Halévy, librettista di Carmen. |
| `E0697` | **richiamo_contestuale** | Opera lirica richiama Fromental Halévy per La Juive e, separatamente, Ludovic Halévy quale librettista di Carmen; l'omonimia parziale non genera un arco autore-opera fra persone diverse. |

### Fonti storiche di confronto
- https://www.operadeparis.fr/apropos/histoire/lopera-au-18e-siecle
- https://nmaahc.si.edu/explore/stories/remembering-milestone-entertainment-history

**Bilancio Lotto 87:** 6 archi esaminati, 3 trattazioni, 3 richiami, 0 sospensioni, 0 riscontri storici nuovi, 0 riscontri indipendenti precedenti conservati.

---

## Lotto 88 — 2026-11-08: Machaut, Monteverdi e Palestrina: opere, attribuzioni, cronologia

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0698` | **trattazione_riscontrata** | Medioevo usa il Kyrie della Messe de Nostre Dame nel laboratorio a quattro voci dell'Ars nova: riscontro esplicito di analisi pratica, non di semplice menzione. |
| `E0699` | **riscontro_storico_indipendente** | La Bibliothèque nationale de France attribuisce la Messe de Notre Dame a Guillaume de Machaut. La denominazione francese «Messe de Nostre Dame» è una variante storica del titolo, non un'opera differente. |
| `E0700` | **richiamo_contestuale** | Rinascimento cita esplicitamente l'Orfeo di Monteverdi del 1607 nel passaggio dal madrigale alla monodia; è confronto di soglia, non trattazione estesa dell'opera mantovana. |
| `E0701` | **trattazione_riscontrata** | Barocco tratta L'Orfeo del 1607, il contesto mantovano e l'edizione a stampa del 1609; titolo e mito non coincidono con l'Orfeo gluckiano. |
| `E0702` | **trattazione_riscontrata** | Melodramma analizza L'Orfeo di Monteverdi e le pratiche sceniche della corte dei Gonzaga; una delle prime opere mature non coincide con l'invenzione istantanea dell'intero genere. |
| `E0703` | **richiamo_contestuale** | Teatro del Classicismo richiama L'Orfeo (1607), anche attraverso un ascolto di Gardiner, per confrontarlo con la riforma di Gluck. La sede primaria dell'analisi storica resta Melodramma/Barocco. |
| `E0704` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente dell'attribuzione della musica de L'Orfeo a Claudio Monteverdi, distinta dal libretto di Alessandro Striggio. |
| `E0705` | **trattazione_riscontrata** | Rinascimento analizza la Missa Papae Marcelli nel rapporto fra intelligibilità del testo e contrappunto polifonico. L'uso del Kyrie come ascolto non prova la leggenda del salvataggio della polifonia. |
| `E0706` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della composizione della Missa Papae Marcelli da parte di Palestrina e della stampa del 1567; la leggenda tridentina resta criticamente distinta. |

### Fonti storiche di confronto
- https://catalogue.bnf.fr/ark:/12148/cb38368252z
- https://catalogue.bnf.fr/resultats-autorite-avancee.do?index=OEUV3&numNotice=13898203&pageRech=rat

**Bilancio Lotto 88:** 9 archi esaminati, 4 trattazioni, 2 richiami, 0 sospensioni, 1 riscontri storici nuovi, 2 riscontri indipendenti precedenti conservati.

---

## Lotto 89 — 2026-11-08: Pergolesi e Vivaldi: Stabat Mater, Scanderbeg e Quattro stagioni

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0707` | **trattazione_riscontrata** | Barocco tratta lo Stabat Mater di Pergolesi come scrittura sacra per due voci soliste e archi; non trasformarlo retroattivamente in oratorio corale. |
| `E0708` | **sospeso** | Melodramma nomina Pergolesi ma non analizza lo Stabat Mater in quanto opera: il collegamento specifico alla composizione resta sospeso. |
| `E0709` | **riscontro indipendente preesistente, conservato** | Conservata la relazione Pergolesi→Stabat Mater già verificata indipendentemente, con attribuzione dell'opera distinta dal suo contesto di committenza. |
| `E0710` | **trattazione_riscontrata** | Barocco dedica un dossier a Scanderbeg (RV 732) di Vivaldi, ai frammenti conservati e alle ricostruzioni moderne; il 1718 non documenta l'integrità di una partitura sopravvissuta. |
| `E0711` | **richiamo_contestuale** | Melodramma cita Scanderbeg come caso breve di fonti frammentarie e rielaborazione moderna; il percorso documentario principale si trova in Barocco. |
| `E0712` | **riscontro indipendente preesistente, conservato** | Conservata l'attribuzione storica di Scanderbeg a Vivaldi, senza considerare la reinvenzione scenica moderna come originale del 1718. |
| `E0713` | **trattazione_riscontrata** | Barocco tratta le Quattro stagioni come primi quattro concerti dell'op. 8, con programmi poetici, stagioni distinte e documenti musicali specifici. |
| `E0714` | **sospeso** | Romanticismo non nomina Le quattro stagioni come opera: la presenza di Vivaldi o di esempi di musica a programma non prova una trattazione diretta. |
| `E0715` | **riscontro indipendente preesistente, conservato** | Conservata la relazione Vivaldi→quattro concerti dell'op. 8, distinguendo il ciclo dal singolo concerto La primavera. |

### Fonti storiche di confronto
- https://www.operadeparis.fr/apropos/histoire/lopera-au-18e-siecle

**Bilancio Lotto 89:** 9 archi esaminati, 3 trattazioni, 1 richiami, 2 sospensioni, 0 riscontri storici nuovi, 3 riscontri indipendenti precedenti conservati.

---

## Lotto 90 — 2026-11-08: Passione secondo Matteo, Rameau e comédie-ballet di Lully

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0716` | **trattazione_riscontrata** | Barocco tratta la Matthäus-Passion BWV 244 nella sua costruzione drammatica, con narratore, cori, arie e testimonianze autografe; la Passione non è un'opera lirica messa in scena. |
| `E0717` | **riscontro indipendente preesistente, conservato** | Conservata l'attribuzione della Passione secondo Matteo a Bach e la distinzione tra i materiali poetici di Picander, il Vangelo e le diverse redazioni musicali. |
| `E0718` | **richiamo_contestuale** | Barocco cita la suite e alcuni ascolti da Les Indes galantes nel dossier su Rameau, rimandando all'audioteca specialistica; il riferimento non equivale ad analisi integrale dell'opéra-ballet. |
| `E0719` | **trattazione_riscontrata** | Balletto analizza Les Indes galantes come opéra-ballet di Rameau e confronta allestimenti moderni con il repertorio del Settecento. La coreografia di Cogitore/Dembélé non è testimonianza diretta della danza del 1735. |
| `E0720` | **riscontro indipendente preesistente, conservato** | Conservata l'attribuzione indipendente della musica di Les Indes galantes a Rameau, distinta dal libretto di Louis Fuzelier. |
| `E0721` | **sospeso** | Barocco mostra soltanto un link a materiali IMSLP di Le Bourgeois gentilhomme, senza trattare il ruolo della comédie-ballet di Lully e Molière; link non è analisi. |
| `E0722` | **trattazione_riscontrata** | Balletto esamina Le Bourgeois gentilhomme (1670), la cerimonia turca e l'integrazione di danza, testo e parodia sociale nel teatro di Molière e Lully. |
| `E0723` | **riscontro indipendente preesistente, conservato** | Conservato il riscontro indipendente della musica composta da Lully per Le Bourgeois gentilhomme e della collaborazione drammaturgica con Molière. |

### Fonti storiche di confronto
- https://www.operadeparis.fr/apropos/histoire/lopera-au-18e-siecle
- https://www.operadeparis.fr/saison-19-20/opera/les-indes-galantes
- https://www.chateauversailles-spectacles.fr/app/uploads/sites/2/2024/01/PROG12-BOURGEOIS-Juin2022-32pages-BD.pdf

**Bilancio Lotto 90:** 8 archi esaminati, 3 trattazioni, 1 richiami, 1 sospensioni, 0 riscontri storici nuovi, 3 riscontri indipendenti precedenti conservati.

---

## Lotto 91 — 2026-11-08: Orfeo ed Euridice di Gluck: redazioni e non-equivalenza delle versioni

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0724` | **trattazione_riscontrata** | Melodramma affronta la riforma di Gluck e Calzabigi attraverso Orfeo ed Euridice (Vienna 1762), distinguendola dalle precedenti opere sullo stesso mito. |
| `E0725` | **trattazione_riscontrata** | Teatro del Classicismo analizza Orfeo ed Euridice, la vocalità, le Furie, il coro e la riforma teatrale; la redazione viennese del 1762 non è identica alla parigina del 1774. |
| `E0726` | **richiamo_contestuale** | Classicismo cita e usa in confronti musicali Orfeo ed Euridice di Gluck, ma non ricostruisce nel dettaglio l'intera vicenda delle redazioni e allestimenti. |
| `E0727` | **sospeso** | Balletto discute Gluck, Angiolini e Don Juan, ma non analizza espressamente Orfeo ed Euridice (1762); relazione specifica alla composizione sospesa. |
| `E0728` | **riscontro indipendente preesistente, conservato** | Conservato il riscontro indipendente della musica di Gluck per la versione originale viennese del 1762. La Gluck-Gesamtausgabe documenta anche Parma 1769 e la distinta versione parigina 1774. |

### Fonti storiche di confronto
- https://www.gluck-gesamtausgabe.de/gwv/werkregister/eintrag/work-60.html

**Bilancio Lotto 91:** 5 archi esaminati, 2 trattazioni, 1 richiami, 1 sospensioni, 0 riscontri storici nuovi, 1 riscontri indipendenti precedenti conservati.

---

## Lotto 92 — 2026-11-08: Mozart–Da Ponte: Nozze di Figaro e Don Giovanni

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0729` | **trattazione_riscontrata** | Teatro del Classicismo analizza Le nozze di Figaro di Mozart nel contesto dell'opera buffa, del concertato e dell'azione simultanea; non si confonde con il Barbiere di Rossini o Paisiello. |
| `E0730` | **richiamo_contestuale** | Classicismo richiama Le nozze di Figaro soprattutto in rapporto al recitativo e alla collaborazione Mozart–Da Ponte, senza una trattazione completa dell'opera. |
| `E0731` | **trattazione_riscontrata** | Anatomia del melodramma usa il finale del secondo atto delle Nozze di Figaro per mostrare come l'ingresso dei personaggi trasformi un numero d'insieme. |
| `E0732` | **riscontro indipendente preesistente, conservato** | Conservata la relazione storica Mozart→musica delle Nozze di Figaro (KV 492, 1786), distinta dal libretto di Lorenzo Da Ponte. |
| `E0733` | **trattazione_riscontrata** | Teatro del Classicismo dedica a Don Giovanni un'analisi centrale del dramma giocoso e della pluralità dei registri; non attribuire la drammaturgia della tradizione di Don Juan al solo Mozart. |
| `E0734` | **richiamo_contestuale** | Classicismo menziona Don Giovanni per il recitativo e la scrittura mozartiana, ma rimanda implicitamente alla pagina specialistica per trama e scena. |
| `E0735` | **trattazione_riscontrata** | Anatomia del melodramma analizza il finale di Don Giovanni e la statua del Commendatore, distinguendo l'episodio dall'insieme delle tradizioni letterarie sul personaggio. |
| `E0736` | **riscontro indipendente preesistente, conservato** | Conservato il riscontro storico della musica di Mozart per Don Giovanni (KV 527, 1787), con libretto distinto di Lorenzo Da Ponte. |

### Fonti storiche di confronto
- Riscontri indipendenti dei rapporti compositore–opera già conservati nel dataset e fonti primarie/secondarie interne ai capitoli.

**Bilancio Lotto 92:** 8 archi esaminati, 4 trattazioni, 2 richiami, 0 sospensioni, 0 riscontri storici nuovi, 2 riscontri indipendenti precedenti conservati.

---

## Lotto 93 — 2026-11-08: Flauto magico e Creature di Prometeo: Singspiel e balletto non sono opera equivalente

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0737` | **trattazione_riscontrata** | Teatro del Classicismo tratta Il flauto magico / Die Zauberflöte (1791) come Singspiel, con dialoghi parlati, prove iniziatiche e tipi vocali; non appartiene alla trilogia con Da Ponte. |
| `E0738` | **richiamo_contestuale** | Classicismo cita la Zauberflöte nel contesto culturale e massonico di Mozart, dichiarando che il percorso teatrale approfondito appartiene al capitolo specialistico. |
| `E0739` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente dell'attribuzione del Flauto magico a Mozart, distinta dal libretto di Emanuel Schikaneder. |
| `E0740` | **sospeso** | Teatro del Classicismo non nomina Le creature di Prometeo nel testo esaminato: il ponte genericamente teatrale non basta a documentare il balletto. |
| `E0741` | **trattazione_riscontrata** | Balletto tratta Le creature di Prometeo (1801) di Beethoven e Salvatore Viganò, e il riuso del tema finale nelle Variazioni Eroica e nella Terza Sinfonia. |
| `E0742` | **sospeso** | Classicismo generale non nomina Le creature di Prometeo né Prometeo come balletto: rimandare al capitolo Balletto anziché costruire una trattazione assente. |
| `E0743` | **riscontro indipendente preesistente, conservato** | Conservata l'attribuzione a Beethoven della partitura op. 43 per il balletto coreografato da Salvatore Viganò: non equivale alla paternità della coreografia. |

### Fonti storiche di confronto
- https://www.beethoven.de/en/media/view/6199185397252096/scan/0

**Bilancio Lotto 93:** 7 archi esaminati, 2 trattazioni, 1 richiami, 2 sospensioni, 0 riscontri storici nuovi, 2 riscontri indipendenti precedenti conservati.

---

## Lotto 94 — 2026-11-08: Fidelio e Nona Sinfonia: versioni operistiche e forma sinfonico-vocale

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0744` | **trattazione_riscontrata** | Teatro del Classicismo discute Beethoven e Fidelio come soglia fra convenzioni settecentesche e teatro del riscatto politico, rinviando alla storia più ampia dell'opera lirica. |
| `E0745` | **trattazione_riscontrata** | Opera lirica approfondisce Fidelio come unico lavoro operistico compiuto di Beethoven nelle redazioni del 1805, 1806 e 1814; le ouverture Leonore I–III e Fidelio non sono un solo oggetto. |
| `E0746` | **sospeso** | Classicismo generale non nomina Fidelio né Leonore nel testo pubblicato: non attribuirgli la trattazione di quest'opera per semplice vicinanza a Beethoven. |
| `E0747` | **sospeso** | Romanticismo non contiene una trattazione specifica di Fidelio o Leonore: l'opera è illustrata nei capitoli Teatro del Classicismo e Opera lirica. |
| `E0748` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della composizione di Fidelio/Leonore da parte di Beethoven, con versioni distinte del 1805, 1806 e 1814. |
| `E0749` | **trattazione_riscontrata** | Classicismo approfondisce la Nona sinfonia di Beethoven, la compresenza di voci e orchestra e il contesto della prima del 1824; non identificare il finale corale con un semplice inno. |
| `E0750` | **trattazione_riscontrata** | Romanticismo analizza il finale della Nona, i recitativi strumentali e la funzione della poesia di Schiller; distingue anche la Nona op. 95 di Dvořák, che è opera differente. |
| `E0751` | **sospeso** | Risorgimento non tratta la Nona sinfonia di Beethoven: l'uso europeo novecentesco dell'Ode alla gioia non prova un ruolo nella mobilitazione patriottica italiana dell'Ottocento. |
| `E0752` | **riscontro indipendente preesistente, conservato** | Conservata l'attribuzione della Sinfonia n. 9 op. 125 a Beethoven e la provenienza schilleriana, adattata, del testo del finale. |

### Fonti storiche di confronto
- https://www.metopera.org/discover/education/educator-guides/fidelio/composer-timeline/
- https://www.beethoven.de/en/media/view/5839902524571648/Ludwig%2Bvan%2BBeethoven%2C%2BFidelio%2Bop.%2B72%2C%2B3.%2BFassung%2B1814%2C%2BFinale%2Bdes%2B1.%2BAktes%2C%2BPartitur%2C%2B%C3%9Cberpr%C3%BCfte%2BAbschrift

**Bilancio Lotto 94:** 9 archi esaminati, 4 trattazioni, 0 richiami, 3 sospensioni, 0 riscontri storici nuovi, 2 riscontri indipendenti precedenti conservati.

---

## Lotto 95 — 2026-11-08: Canto degli Italiani e Nabucco: paternità e ricezione risorgimentale

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0753` | **trattazione_riscontrata** | Risorgimento studia Il Canto degli Italiani come poesia di Goffredo Mameli messa in musica da Michele Novaro nel 1847, distinta da Suona la tromba (Mameli–Verdi, 1848). |
| `E0754` | **riscontro_storico_indipendente** | Il Quirinale attribuisce esplicitamente a Michele Novaro la musica del Canto degli Italiani, composto su versi di Goffredo Mameli, a Torino nel 1847. La fonte istituzionale non impone un giorno esatto di composizione autografa. |
| `E0755` | **trattazione_riscontrata** | Opera lirica tratta Nabucco (1842) nel percorso verdiano, comprendendo il coro Va', pensiero e la sua ricezione: il personaggio biblico e l'inno patriottico retrospettivo non coincidono. |
| `E0756` | **trattazione_riscontrata** | Risorgimento analizza Nabucco e il coro Va', pensiero distinguendo il testo teatrale del 1842, la ricezione politica e la costruzione successiva del mito nazionale. |
| `E0757` | **trattazione_riscontrata** | Romanticismo tratta Nabucco e il coro nell'analisi di libertà, memoria e mito patriottico: non attribuisce al Va', pensiero una funzione politica univoca già nel 1842. |
| `E0758` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della musica composta da Giuseppe Verdi per Nabucco, distinto dal libretto di Temistocle Solera. |

### Fonti storiche di confronto
- https://new.quirinale.it/page/inno
- https://www.treccani.it/enciclopedia/giuseppe-verdi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/giuseppe-verdi_%28L%27Unificazione%29/

**Bilancio Lotto 95:** 6 archi esaminati, 4 trattazioni, 0 richiami, 0 sospensioni, 1 riscontri storici nuovi, 1 riscontri indipendenti precedenti conservati.

---

## Lotto 96 — 2026-11-08: Traviata, Rigoletto, Aida: scrittura, fonti letterarie e sedi d'analisi

**Metodo:** confronto diretto dei capitoli HTML pubblicati su `main`, distinzione fra analisi, richiamo e collegamento non attestato; riscontri storici autonomi solo per attribuzioni di composizione. Le fonti indipendenti già convalidate non vengono invalidate o riscritte.

| Arco | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0759` | **trattazione_riscontrata** | Opera lirica tratta La traviata come dramma verdiano, con Violetta, le forme vocali e la tensione fra società e desiderio; non ridurla a un'unica aria. |
| `E0760` | **trattazione_riscontrata** | Anatomia del melodramma analizza la scena di Violetta fra «Ah, fors'è lui» e «Sempre libera» per distinguere cantabile, cabaletta e funzione drammatica. |
| `E0761` | **richiamo_contestuale** | Romanticismo richiama La traviata nel confronto con Dumas figlio, convenzione sociale e drammaturgia ottocentesca, ma non ne ricostruisce sistematicamente musica e struttura. |
| `E0762` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della composizione musicale di La traviata (1853) da parte di Verdi, con libretto distinto di Francesco Maria Piave. |
| `E0763` | **trattazione_riscontrata** | Opera lirica analizza Rigoletto, i rapporti fra personaggi e il quartetto vocale, distinto dal quartetto d'archi composto da Verdi nel 1873. |
| `E0764` | **richiamo_contestuale** | Romanticismo cita Rigoletto per il riadattamento di Victor Hugo e il ruolo della censura, senza sviluppare l'analisi musicale dell'opera. |
| `E0765` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della musica composta da Verdi per Rigoletto, su libretto di Piave, con prima veneziana del 1851. |
| `E0766` | **trattazione_riscontrata** | Opera lirica tratta Aida, il contesto di produzione, l'orchestrazione e la particolare scrittura delle trombe. Ambientazione egizia e sedi di prima non definiscono la nazionalità dell'autore. |
| `E0767` | **sospeso** | Balletto discute le danze operistiche e la grand opéra ma non nomina direttamente Aida: il collegamento alla specifica opera verdiana resta sospeso. |
| `E0768` | **riscontro indipendente preesistente, conservato** | Conservata la verifica indipendente della musica composta da Verdi per Aida (1871), distinta dal libretto di Antonio Ghislanzoni e dai contributi al soggetto. |

### Fonti storiche di confronto
- https://www.treccani.it/enciclopedia/giuseppe-verdi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/
- https://www.treccani.it/enciclopedia/giuseppe-verdi_%28L%27Unificazione%29/

**Bilancio Lotto 96:** 10 archi esaminati, 4 trattazioni, 2 richiami, 1 sospensioni, 0 riscontri storici nuovi, 3 riscontri indipendenti precedenti conservati.

---
### Bilancio dopo i Lotti 87–96

- **77 archi esaminati** (`E0692`–`E0768`), dei quali **58 aggiornati** e **19 rapporti compositore–opera già verificati conservati senza riscriverli**.
- Esiti: **33 trattazioni riscontrate**, **13 richiami contestuali**, **10 sospensioni**, **2 nuove verifiche indipendenti**, **19 verifiche indipendenti conservate**.
- Le due attribuzioni indipendenti appena promosse sono `E0699` (Machaut → Messe de Nostre Dame, BnF) e `E0754` (Michele Novaro → Il Canto degli Italiani, Quirinale). Nessuna data autografa esatta viene desunta per Novaro.
- **Integrità:** 608 nodi, 1520 archi. Zero duplicati di ID nodo, duplicati di ID arco, estremi orfani e triplette (fonte, destinazione, verbo).
- **Proposte editoriali residue:** 115; **sospensioni totali:** 78; **trattazioni riscontrate:** 221; **richiami contestuali:** 69.
- **Flag storici indipendenti:** 361, da 359; **gate `riscontro_storico_indipendente`:** 324.
- **Sospensioni esplicite di questa serie:** `E0708`, `E0714`, `E0721`, `E0727`, `E0740`, `E0742`, `E0746`, `E0747`, `E0751`, `E0767`.

### Verifica dati dei collegamenti diretti visibili in Atlantis

La tabella riproduce il criterio di visibilità **trattazione + menzione** della funzione `tier()` di `index.html`, contato su tutte le relazioni incidenti al nodo (non sui livelli successivi e non su un browser reale).

| Nodo focale | Prima | Dopo |
| --- | ---: | ---: |
| Medioevo | 19 | 20 |
| Rinascimento | 51 | 53 |
| Barocco | 67 | 68 |
| Il balletto | 72 | 74 |
| Teatro del Classicismo | 49 | 52 |
| Classicismo | 50 | 53 |
| Opera lirica — da Fidelio a Turandot | 100 | 102 |
| Romanticismo | 102 | 103 |
| Risorgimento | 19 | 21 |

**Distinzioni fondamentali da preservare:** Fromental e Ludovic Halévy sono persone diverse; la *Messe de Nostre Dame* non è omonima rispetto alla grafia modernizzata *Notre Dame*; `Orfeo` di Monteverdi (1607) e `Orfeo ed Euridice` di Gluck (1762) non sono la stessa opera; la redazione parigina di Gluck (1774) è diversa dalla viennese; `Le creature di Prometeo` è un balletto; quattro concerti compongono `Le quattro stagioni`. Il titolo *Nona Sinfonia* deve essere disambiguato per compositore.

**Questioni editoriali riutilizzabili:** se si vuole rendere attiva la relazione `Classicismo → Prometeo` occorre aggiungere un richiamo effettivo al capitolo in un intervento separato; lo stesso vale per `Romanticismo → Fidelio`, `Romanticismo → Le quattro stagioni`, `Balletto → Aida` e `Melodramma → Stabat Mater`. Nessuno di questi capitoli è stato modificato.

**Limiti QA:** effettuati controllo dei dati e verifica dei collegamenti di primo livello secondo il filtro effettivo di `index.html`; non eseguita la prova grafica del renderer su Android/desktop e non dichiarato un collaudo interattivo completo dal livello I al V. L'interfaccia Atlantis e il protocollo non sono stati toccati.

**Continuazione:** Lotto 97, a partire da `E0769`; alcuni numeri ID possono essere assenti per precedenti migrazioni, quindi utilizzare gli ID realmente presenti e non creare duplicati.

---
## Lotto 97 — 2026-11-08: Otello e Falstaff: identità dei titoli verdiani

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0769` | **trattazione_riscontrata** | Opera lirica sviluppa Otello di Verdi (1887) nel teatro tardo-ottocentesco, distinguendolo dall'Otello di Rossini (1816) che compare nella stessa pagina. |
| `E0771` | **riscontro indipendente già convalidato (conservato)** | Verdi compose Otello (1887), su libretto di Arrigo Boito ispirato alla tragedia di Shakespeare; non confondere con l'Otello di Rossini (1816). |
| `E0772` | **trattazione_riscontrata** | Opera lirica tratta Falstaff di Verdi (1893) nella drammaturgia degli insiemi, distinguendo libretto di Boito e fonti teatrali di Shakespeare. |
| `E0773` | **riscontro indipendente già convalidato (conservato)** | Verdi compose Falstaff (1893) su libretto di Arrigo Boito, ispirato soprattutto alle Merry Wives of Windsor e all'Henry IV di Shakespeare. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 97:** 4 archi: 2 trattazioni, 0 richiami, 0 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 98 — 2026-11-08: Freischütz, Barbiere di Rossini e Barbiere di Paisiello

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0774` | **trattazione_riscontrata** | Opera lirica dedica una sezione a Der Freischütz (1821) di Weber, dialoghi parlati, scena tedesca e soprannaturale. |
| `E0775` | **richiamo_contestuale** | Romanticismo richiama Der Freischütz per la foresta, il soprannaturale e la scena tedesca. Approfondimento analitico situato soprattutto in Opera lirica. |
| `E0776` | **riscontro indipendente già convalidato (conservato)** | Carl Maria von Weber compose Der Freischütz (J 277), opera romantica in tre atti su libretto di Friedrich Kind; prima al Schauspielhaus di Berlino il 18 giugno 1821. |
| `E0777` | **trattazione_riscontrata** | Opera lirica tratta Il barbiere di Siviglia di Rossini (1816), inizialmente Almaviva, e lo distingue esplicitamente dalla precedente opera di Paisiello (1782). |
| `E0778` | **trattazione_riscontrata** | Anatomia del melodramma tratta Largo al factotum e Una voce poco fa dal Barbiere rossiniano, come esempi di numeri specifici. |
| `E0779` | **trattazione_riscontrata** | Teatro del Classicismo tratta Il barbiere di Siviglia di Paisiello (1782), distinto dall'opera del 1816 di Rossini. |
| `E0780` | **riscontro indipendente già convalidato (conservato)** | Rossini compone Almaviva, ossia L'inutile precauzione, in seguito Il barbiere di Siviglia: libretto di Cesare Sterbini da Beaumarchais; prima Roma, Teatro Argentina, 20 febbraio 1816. Opera distinta dal Barbiere di Paisiello. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 98:** 7 archi: 4 trattazioni, 1 richiami, 0 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 99 — 2026-11-08: Norma e Guillaume Tell: arie e teatro integrale

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0781` | **trattazione_riscontrata** | Opera lirica analizza Norma di Bellini (1831) e la collocazione drammaturgica di Casta diva: l'aria non è l'intera scena. |
| `E0782` | **trattazione_riscontrata** | Anatomia del melodramma usa Casta diva come esempio di aria inserita in una scena più ampia; riscontro circoscritto. |
| `E0783` | **riscontro indipendente già convalidato (conservato)** | Bellini compone Norma, tragedia lirica su libretto di Felice Romani derivato dalla tragedia di Alexandre Soumet; prima al Teatro alla Scala di Milano, 26 dicembre 1831. |
| `E0784` | **trattazione_riscontrata** | Opera lirica analizza Guillaume Tell di Rossini (1829), il teatro storico francese e il contesto parigino. |
| `E0785` | **richiamo_contestuale** | Balletto cita Guillaume Tell per le danze e la festa pastorale interne all'opera, non come balletto autonomo. |
| `E0786` | **riscontro indipendente già convalidato (conservato)** | Rossini compone Guillaume Tell, grand opéra in quattro atti su libretto francese di Étienne de Jouy e Hippolyte Bis, da Schiller; prima a Parigi, Académie royale de musique, 3 agosto 1829. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 99:** 6 archi: 3 trattazioni, 1 richiami, 0 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 100 — 2026-11-08: Tannhäuser e Tristan: versioni, ricezione, limiti dei rimandi

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0787` | **richiamo_contestuale** | Opera lirica cita Tannhäuser nel percorso wagneriano ma non ricostruisce le redazioni con la stessa specificità del capitolo Balletto. |
| `E0788` | **trattazione_riscontrata** | Balletto sviluppa l'ampliamento del Venusberg di Tannhäuser per Parigi (1861), distinguendolo dalla versione di Dresda (1845). |
| `E0789` | **sospeso** | Romanticismo non nomina Tannhäuser: la presenza di Wagner o del dramma romantico non costituisce attestazione dell'opera. |
| `E0790` | **riscontro indipendente già convalidato (conservato)** | Richard Wagner compone la musica e scrive il libretto di Tannhäuser (WWV 70), rappresentato a Dresda il 19 ottobre 1845; la rielaborazione parigina del 1861 comprende modifiche al Venusberg. |
| `E0791` | **trattazione_riscontrata** | Opera lirica analizza il preludio di Tristan und Isolde, il cromatismo e la dilatazione del tempo scenico. |
| `E0792` | **sospeso** | Romanticismo non nomina Tristan und Isolde: riferimenti generali alla scrittura wagneriana non provano l'analisi di quest'opera. |
| `E0793` | **sospeso** | Musica nell'audiovisivo non nomina Tristan und Isolde, né documenta una discendenza necessaria delle partiture cinematografiche dal suo linguaggio. |
| `E0794` | **riscontro indipendente già convalidato (conservato)** | Richard Wagner compone musica e libretto di Tristan und Isolde (WWV 90), su rielaborazione del ciclo medievale di Tristano e Isotta; prima a Monaco di Baviera il 10 giugno 1865. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 100:** 8 archi: 2 trattazioni, 1 richiami, 3 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 101 — 2026-11-08: Carmen e La bohème: dialoghi, libretti, opere

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0795` | **trattazione_riscontrata** | Opera lirica analizza Carmen di Bizet (1875), nata con dialoghi parlati; i recitativi di Guiraud sono una rielaborazione posteriore. |
| `E0796` | **richiamo_contestuale** | Romanticismo menziona Carmen nel confronto fra opéra-comique, dialoghi parlati e recitativi successivi, senza analisi completa. |
| `E0797` | **riscontro indipendente già convalidato (conservato)** | Georges Bizet compone Carmen, opéra-comique su libretto di Henri Meilhac e Ludovic Halévy dalla novella di Prosper Mérimée; prima a Parigi, Opéra-Comique, 3 marzo 1875, con dialoghi parlati. |
| `E0798` | **trattazione_riscontrata** | Opera lirica tratta La bohème di Puccini, distinguendo l'opera da Illica/Giacosa e il suo antecedente letterario in Murger. |
| `E0799` | **sospeso** | Romanticismo non nomina La bohème; la pertinenza cronologica non è trattazione documentata. |
| `E0800` | **riscontro indipendente già convalidato (conservato)** | Puccini compone La bohème, quattro quadri su libretto di Luigi Illica e Giuseppe Giacosa da Scènes de la vie de bohème di Henri Murger; prima al Teatro Regio di Torino il 1 febbraio 1896. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 101:** 6 archi: 2 trattazioni, 1 richiami, 1 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 102 — 2026-11-08: Le Villi e Turandot: confronto teatrale e partitura incompiuta

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0801` | **richiamo_contestuale** | Opera lirica cita Le Villi (1884) quale esordio pucciniano e lo confronta con Giselle, senza una trattazione analitica estesa. |
| `E0802` | **trattazione_riscontrata** | Balletto confronta la vicenda delle villi in Giselle con Le Villi pucciniane, distinguendo balletto e opera-ballo. |
| `E0803` | **riscontro indipendente già convalidato (conservato)** | Puccini compone Le Villi, opera-ballo su libretto di Ferdinando Fontana ispirato alla leggenda delle Willi tramite Heine; prima Milano, Teatro Dal Verme, 31 maggio 1884. Seguono revisioni in più atti. |
| `E0804` | **trattazione_riscontrata** | Opera lirica approfondisce l'incompiuta Turandot di Puccini (1924), il completamento di Alfano e la prima del 1926. |
| `E0805` | **richiamo_contestuale** | Verso le avanguardie cita Turandot nel percorso di Puccini e della sperimentazione timbrica, senza ricostruirne i completamenti. |
| `E0806` | **riscontro indipendente già convalidato (conservato)** | Puccini compone la musica superstite di Turandot, dramma lirico su libretto di Giuseppe Adami e Renato Simoni dalla fiaba teatrale di Carlo Gozzi, mediata anche da Schiller/Maffei; opera incompiuta nel 1924, prima alla Scala il 25 aprile 1926 senza finale di Alfano. |

### Fonti esterne
- Fonti indipendenti già registrate negli archi compositore–opera e pagine HTML del progetto per i rimandi editoriali.

**Bilancio Lotto 102:** 6 archi: 2 trattazioni, 2 richiami, 0 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 103 — 2026-11-08: La Sylphide, Giselle e Lago dei cigni: versioni coreografiche

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0807` | **trattazione_riscontrata** | Balletto dedica uno spazio a La Sylphide, a Marie Taglioni e alla coreografia del 1832 di Filippo Taglioni; le versioni vanno distinte. |
| `E0808` | **sospeso** | Romanticismo non nomina La Sylphide: il solo periodo non basta a convalidare il collegamento specifico. |
| `E0809` | **trattazione_riscontrata** | Balletto tratta Giselle (1841), la storia delle villi e la costruzione drammaturgica in due mondi, non identificandola con Le Villi. |
| `E0810` | **sospeso** | Romanticismo non nomina Giselle; resta un riferimento legittimo nella pagina specialistica Balletto, non una trattazione nella pagina d'epoca. |
| `E0811` | **richiamo_contestuale** | Opera lirica cita Giselle come confronto narrativo con Le Villi di Puccini, non come opera lirica. |
| `E0812` | **trattazione_riscontrata** | Balletto distingue la prima del Lago dei cigni a Mosca (1877) dalla produzione Petipa–Ivanov a San Pietroburgo (1895). |
| `E0813` | **sospeso** | Romanticismo non nomina Il lago dei cigni, anche se esamina Čajkovskij: compositore e specifico titolo non sono equivalenti. |
| `E0814` | **riscontro_storico_indipendente** | La Boston Symphony Orchestra attribuisce la musica del Lago dei cigni op. 20 a Čajkovskij. Reisinger (1877) e Petipa–Ivanov (1895) firmarono allestimenti coreografici distinti. |

### Fonti esterne
- https://www.bso.org/works/tchaikovsky-swan-lake

**Bilancio Lotto 103:** 8 archi: 3 trattazioni, 1 richiami, 3 sospensioni, 1 passaggi al gate storico, 0 verifiche precedenti conservate.

---

## Lotto 104 — 2026-11-08: Schiaccianoci e Sagra della primavera: musica e danza

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0815` | **trattazione_riscontrata** | Balletto tratta Lo schiaccianoci (1892) e la partitura di Čajkovskij, distinguendo musicista e autori della coreografia. |
| `E0816` | **sospeso** | Romanticismo non nomina Lo schiaccianoci: non dedurre la trattazione dal solo nome Čajkovskij. |
| `E0817` | **riscontro_storico_indipendente** | Royal Ballet & Opera Collections attribuisce la musica dello Schiaccianoci op. 71 a Čajkovskij, lo scenario a Petipa e la coreografia a Lev Ivanov (1892). |
| `E0818` | **trattazione_riscontrata** | Balletto confronta La sagra della primavera nella coreografia di Nižinskij (1913) e nella nuova lettura di Pina Bausch (1975). |
| `E0819` | **trattazione_riscontrata** | Verso le avanguardie tratta La sagra della primavera, la prima parigina del 1913 e la scrittura ritmica di Stravinskij. |
| `E0820` | **riscontro_storico_indipendente** | Il catalogo Boosey & Hawkes attribuisce La sagra della primavera a Stravinskij (1911–1913) e la coreografia della prima a Nižinskij, 29 maggio 1913. |

### Fonti esterne
- https://www.rohcollections.org.uk/Work.aspx?work=1180
- https://www.boosey.com/pages/cr/catalogue/cat_detail?musicid=5253
- https://www.pinabausch.org/fr/work/sacr

**Bilancio Lotto 104:** 6 archi: 3 trattazioni, 0 richiami, 1 sospensioni, 2 passaggi al gate storico, 0 verifiche precedenti conservate.

---

## Lotto 105 — 2026-11-08: Daphnis et Chloé e Mandarino meraviglioso: specificità delle partiture

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0821` | **trattazione_riscontrata** | Balletto tratta Daphnis et Chloé di Ravel (1912) e il lavoro scenico di Fokine per i Ballets Russes; le suite sono versioni distinte. |
| `E0822` | **sospeso** | Verso le avanguardie non nomina Daphnis et Chloé, pur trattando Ravel e i Ballets Russes. |
| `E0823` | **riscontro indipendente già convalidato (conservato)** | Ravel compone la partitura della «symphonie chorégraphique» Daphnis et Chloé tra giugno 1909 e 5 aprile 1912 su commissione di Diaghilev; argomento di Fokine e Ravel da Longo, coreografia originale di Fokine, scene e costumi di Bakst; prima a Parigi il 8 giugno 1912 diretta da Pierre Monteux. |
| `E0824` | **trattazione_riscontrata** | Balletto tratta Il mandarino meraviglioso di Bartók come pantomima danzata, con partitura precedente alla prima del 1926. |
| `E0825` | **sospeso** | Verso le avanguardie discute Bartók, ma non menziona Il mandarino meraviglioso. |
| `E0826` | **riscontro indipendente già convalidato (conservato)** | Béla Bartók compone la musica per la pantomima drammatica in un atto di Lengyel: stesura 1918–1919, ripresa dell'orchestrazione nel 1923 e completamento nel 1924; prima rappresentazione scenica a Colonia il 27 novembre 1926, direttore Jenő Szenkár. La suite del 1927 è una diversa redazione da concerto. |

### Fonti esterne
- https://catalogue.bnf.fr/ark:/12148/cb139177228
- https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=2185
- https://mmb.org.gr/en/acquisition/csodalatos-mandarin

**Bilancio Lotto 105:** 6 archi: 2 trattazioni, 0 richiami, 2 sospensioni, 0 passaggi al gate storico, 2 verifiche precedenti conservate.

---

## Lotto 106 — 2026-11-08: Quadri di un'esposizione e Symphonie fantastique: originali e mediazioni

**Metodo:** verifica dei capitoli su `main`; fonti indipendenti per promuovere relazioni compositore–opera. Le relazioni a carattere editoriale non attestano causalità storica e i metadati di validazione precedenti restano disponibili.

| Arco | Gate | Nota storico-filologica |
| --- | --- | --- |
| `E0827` | **trattazione_riscontrata** | Romanticismo analizza i Quadri di un'esposizione originali per pianoforte di Musorgskij (1874), la Promenade e il rapporto con Hartmann. |
| `E0828` | **richiamo_contestuale** | Verso le avanguardie richiama la versione orchestrale di Ravel dei Quadri (1922), senza analizzare l'intera opera movimento per movimento. |
| `E0829` | **riscontro_storico_indipendente** | Musorgskij compose l'originale pianistico dei Quadri di un'esposizione nel 1874; Ravel ne fece l'orchestrazione del 1922. LA Phil e IMSLP confermano; il flag indipendente era già presente e il gate viene allineato. |
| `E0830` | **trattazione_riscontrata** | Romanticismo analizza la Symphonie fantastique di Berlioz (1830), l'idée fixe e la struttura del racconto programmatico. |
| `E0831` | **sospeso** | Verso le avanguardie non nomina la Symphonie fantastique: l'affinità con la musica a programma è solo comparativa. |
| `E0832` | **sospeso** | Musica nell'audiovisivo non tratta la Symphonie fantastique quale composizione; non inferire un nesso diretto dal solo uso della musica a programma. |
| `E0833` | **riscontro_storico_indipendente** | IMSLP documenta la Symphonie fantastique, H 48, op. 14, composta da Hector Berlioz nel 1830, con partitura autografa conservata. |

### Fonti esterne
- https://www.laphil.com/works/pictures-at-an-exhibition-modest-mussorgsky-zs2phpn9
- https://imslp.org/wiki/Pictures_at_an_Exhibition_%28Mussorgsky%2C_Modest%29
- https://imslp.org/wiki/Symphonie_fantastique%2C_H_48_%28Berlioz%2C_Hector%29

**Bilancio Lotto 106:** 7 archi: 2 trattazioni, 1 richiami, 2 sospensioni, 2 passaggi al gate storico, 0 verifiche precedenti conservate.

---
### Bilancio dopo i Lotti 97–106

- **64 archi esaminati** da `E0769` a `E0833` (l'ID `E0770` non è presente nel dataset e non è stato creato). **50 archi aggiornati**, **14 rapporti compositore–opera precedentemente verificati lasciati immutati**.
- Esiti: **25 trattazioni**, **8 richiami contestuali**, **12 sospensioni**, **5 gate storici promossi**, **14 gate indipendenti conservati**.
- Cinque archi al gate indipendente: `E0814` Lago dei cigni (Boston Symphony), `E0817` Schiaccianoci (Royal Ballet and Opera), `E0820` Sagra (Boosey & Hawkes), `E0829` Quadri (LA Phil, IMSLP), `E0833` Symphonie fantastique (IMSLP).
- **Quattro nuovi flag storici indipendenti:** 361 → **365**. `E0829` disponeva già di flag storico positivo e soltanto il gate è stato riallineato. Il totale dei gate `riscontro_storico_indipendente` è ora **329**.
- **Integrità:** 608 nodi e 1520 archi; duplicati ID nodi 0, duplicati ID archi 0, orfani 0, tripletta fonte–destinazione–verbo duplicata 0.
- **Residui:** proposte editoriali 99; sospensioni 83; trattazioni 246; richiami 77.
- **Sospensioni di questi lotti:** `E0789`, `E0792`, `E0793`, `E0799`, `E0808`, `E0810`, `E0813`, `E0816`, `E0822`, `E0825`, `E0831`, `E0832`.

### QA collegamenti diretti visibili secondo il filtro Atlantis

Confrontate le adiacenze con gate `trattazione` e `menzione` secondo `tier()` del renderer corrente; il test riguarda i dati, non la visualizzazione su dispositivi e non la propagazione completa ai livelli I–V.

| Nodo | Prima | Dopo |
| --- | ---: | ---: |
| Opera lirica — da Fidelio a Turandot | 102 | 104 |
| Il balletto | 74 | 81 |
| Verso le avanguardie e il Novecento | 48 | 49 |

**Nota metodologica sui flag preesistenti:** i collegamenti editoriali `E0769`, `E0779`, `E0827`, `E0828` erano già marcati con `historical_verified_independently=true`, pur essendo collegamenti fra capitoli e opere. Per non distruggere metadati e riscontri precedenti, i flag sono stati conservati; andranno verificati separatamente, senza presumere causalità storica dalla sola presenza del flag. La classificazione editoriale `quality_gate` è stata resa più specifica.

**Distinzioni essenziali:** Otello di Rossini 1816 e di Verdi 1887 sono opere diverse; così il Barbiere di Paisiello 1782 e Rossini 1816. Le redazioni del Tannhäuser del 1845 e 1861 non vanno fuse. Il Lago dei cigni nasce musicalmente da Čajkovskij e ha più versioni coreografiche. La Sagra usa la musica di Stravinskij ma la coreografia di Nižinskij (1913) non coincide con quella di Pina Bausch (1975). I Quadri di Musorgskij per pianoforte (1874) non sono la stessa versione dell'orchestrazione di Ravel (1922).

**Limiti:** non eseguito test visuale del renderer su Android o desktop né simulazione completa livelli I–V. Nessuna modifica a pagine, menu o interfaccia di Atlantis; intervento circoscritto a grafo e registro.

**Ripresa:** Lotto 107 da `E0834`, su operetta, musical e cinema, con distinzione fra opere teatrali, adattamenti filmici, musicisti, librettisti e produttori.

---
## Lotto 107 — 2026-11-08: Offenbach, Strauss, Lehár e Gilbert–Sullivan: opere e contesti distinti

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0834` | **trattazione_riscontrata** | Opera lirica dedica una sezione alla satira di Offenbach e a Orphée aux enfers (1858), rovesciamento ironico del mito; non si tratta delle opere di Monteverdi o Gluck. |
| `E0835` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Orphée aux enfers (1858) come opéra-bouffe del teatro parigino, distinta dalla successiva revisione ampliata del 1874. |
| `E0836` | **trattazione_riscontrata** | Romanticismo analizza Orphée aux enfers nel contesto della satira del Secondo Impero, con data della prima del 1858 e riflessione sulla sua ricezione visiva posteriore. |
| `E0837` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Jacques Offenbach compose la musica di *Orphée aux enfers*, opéra-bouffon/opéra-bouffe in due atti, prima ai Bouffes-Parisiens di Parigi il 21 ottobre 1858; nel 1874 realizza una revisione ampliata in opéra-féerie (prima Théâtre de la Gaîté il 7 febbraio 1874). Libretti di Hector Crémieux e Ludovic Halévy: non attribuire a Offenbach testo, film o produzioni successive. |
| `E0838` | **trattazione_riscontrata** | Dall'operetta a Broadway dedica spazio a Die Fledermaus (1874), con travestimento e maschere sociali, oltre all'ascolto dell'ouverture. |
| `E0839` | **trattazione_riscontrata** | Romanticismo tratta Die Fledermaus (1874) come commedia teatrale sostenuta dalla musica di danza, non semplice raccolta di valzer. |
| `E0840` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Johann Strauss II compose la musica dell'operetta *Die Fledermaus* in tre atti, su libretto di Karl Haffner e Richard Genée dalla commedia francese *Le Réveillon*. Prima mondiale a Vienna, Theater an der Wien, 5 aprile 1874. Non confondere il compositore con Johann Strauss I. |
| `E0841` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Die lustige Witwe / La vedova allegra di Lehár (1905), distinguendo valzer e funzione drammatica. |
| `E0842` | **sospeso** | Romanticismo non nomina Die lustige Witwe né La vedova allegra nel testo: Vienna e l'operetta, da sole, non attestano il titolo specifico. |
| `E0843` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Franz Lehár compose la musica dell'operetta in tre atti *Die lustige Witwe* (*La vedova allegra*), su libretto di Victor Léon e Leo Stein, da Henri Meilhac. Prima assoluta al Theater an der Wien il 30 dicembre 1905. Non attribuire al compositore il testo del libretto. |
| `E0844` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta The Mikado (1885) della coppia Gilbert–Sullivan e il Giappone immaginario della sua satira, distinto dalle realtà giapponesi. |
| `E0845` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Arthur Sullivan compone la musica dell'opera comica *The Mikado* (*The Town of Titipu*); libretto di W. S. Gilbert. Prima a Londra, Savoy Theatre, 14 marzo 1885, sotto l'egida D'Oyly Carte. Distinguere autore della musica, autore del testo e produzione. |

### Fonti
- https://www.treccani.it/enciclopedia/operetta/

**Bilancio Lotto 107:** 12 archi; T=7, S=1, K=4.

---

## Lotto 108 — 2026-11-08: Shuffle Along, Show Boat, Oklahoma!: genealogie convergenti del musical

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0846` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Shuffle Along (1921), con musica di Eubie Blake, testi di Noble Sissle e libretto di Miller e Lyles, come produzione afroamericana autonoma. |
| `E0847` | **trattazione_riscontrata** | Dal musical al film discute esplicitamente Shuffle Along (1921) quale precedente teatrale afroamericano; non lo presenta come un film del 1921. |
| `E0848` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Eubie Blake partecipa con Noble Sissle alla musica e alle canzoni di *Shuffle Along* (1921); libro di Flournoy Miller e Aubrey Lyles. Prima a Broadway il 23 maggio 1921 (63rd Street Music Hall). Il rapporto di Blake non attribuisce a lui in esclusiva musica, testi o libretto. |
| `E0849` | **trattazione_riscontrata** | Dall'operetta a Broadway analizza Show Boat (1927) e il processo di integrazione drammatica delle canzoni; non è l'invenzione improvvisa del musical. |
| `E0850` | **trattazione_riscontrata** | Dal musical al film tratta Show Boat come spettacolo nato a teatro nel 1927 e discute la distinzione dagli adattamenti cinematografici successivi. |
| `E0851` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Jerome Kern compone la musica del musical teatrale *Show Boat* (prima a Broadway il 27 dicembre 1927), su libretto e testi delle canzoni di Oscar Hammerstein II, tratto dal romanzo di Edna Ferber. Le versioni cinematografiche successive, fra cui il film del 1936, restano entità diverse. |
| `E0852` | **trattazione_riscontrata** | Dall'operetta a Broadway tratta Oklahoma! (1943), sottolineando l'integrazione di canzoni, danza e narrazione e il contributo coreografico di Agnes de Mille. |
| `E0853` | **trattazione_riscontrata** | Dal musical al film ricostruisce Oklahoma! (1943) come spettacolo teatrale di Rodgers e Hammerstein, senza confonderlo con il film del 1955. |
| `E0854` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Richard Rodgers compone la musica del musical teatrale *Oklahoma!* (prima St. James Theatre a Broadway il 31 marzo 1943), con libro e testi delle canzoni di Oscar Hammerstein II e coreografie di Agnes de Mille. L'omonimo film del 1955 è una distinta trasposizione cinematografica. |

### Fonti
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://loc.gov/exhibits/african-american-odyssey/world-war-i-and-postwar-society.html

**Bilancio Lotto 108:** 9 archi; T=6, K=3.

---

## Lotto 109 — 2026-11-08: West Side Story, Steamboat Willie e Fantasia: teatro, animazione, cinema

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0855` | **trattazione_riscontrata** | Dal musical al film tratta West Side Story (1957) come musical teatrale con musiche di Bernstein, lyrics di Sondheim e coreografia di Robbins, distinguendo il film del 1961. |
| `E0856` | **sospeso** | Verso le avanguardie nomina Bernstein in diversi contesti, ma non West Side Story quale opera; il compositore non equivale alla presenza del titolo. |
| `E0857` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Leonard Bernstein compone la musica per il musical teatrale *West Side Story*, prima a Broadway il 26 settembre 1957 al Winter Garden Theatre; concezione, regia e coreografia di Jerome Robbins, libretto di Arthur Laurents, testi delle canzoni di Stephen Sondheim. Il film del 1961 è una successiva versione distinta. |
| `E0858` | **trattazione_riscontrata** | Dal musical al film tratta Steamboat Willie (1928) come decisivo successo della sincronizzazione sonora dei cartoon, non come primo cartone sonoro in assoluto. |
| `E0859` | **trattazione_riscontrata** | Musica nell'audiovisivo usa Steamboat Willie nel dossier sul Mickey Mousing e distingue l'efficacia della sincronizzazione dalla sua pretesa invenzione assoluta. |
| `E0860` | **trattazione_riscontrata** | Dal musical al film dedica una sezione a Fantasia (1940) come visualizzazione animata di musica preesistente, non come trasposizione di un musical teatrale. |
| `E0861` | **trattazione_riscontrata** | Musica nell'audiovisivo sviluppa Fantasia in relazione a Disney, Stokowski, repertorio preesistente e tecniche di corrispondenza fra gesto e musica. |
| `E0862` | **sospeso** | Verso le avanguardie menziona la Fantasia contrappuntistica di Busoni, non Fantasia di Walt Disney (1940). L'omonimia non giustifica un arco. |

### Fonti
- https://www.loc.gov/exhibits/music-and-animation/about.html

**Bilancio Lotto 109:** 8 archi; T=5, S=2, K=1.

---

## Lotto 110 — 2026-11-08: Psycho, Star Wars e Morricone: composizione, titoli e presenza nelle pagine

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0863` | **richiamo_contestuale** | Dal musical al film menziona Psycho (1960) come esempio circoscritto della scrittura per archi di Herrmann nel cinema di Hitchcock, senza trattare integralmente il film. |
| `E0864` | **sospeso** | Musica nell'audiovisivo cita Herrmann (per altri film) ma non Psycho nel corpo della pagina: sospendere l'arco al titolo specifico. |
| `E0865` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Bernard Herrmann compose la partitura originale per Psycho (1960), film diretto e prodotto da Alfred Hitchcock. La musica, celebre per la scrittura per archi, costituisce uno specifico contributo compositivo; effetti sonori, montaggio e regia rimangono responsabilità distinte. |
| `E0866` | **richiamo_contestuale** | Dal musical al film richiama Star Wars (1977) per temi ricorrenti e organizzazione motivica nella colonna sonora di John Williams, senza analisi estesa del film. |
| `E0867` | **trattazione_riscontrata** | Musica nell'audiovisivo approfondisce Star Wars e il ritorno dei motivi attraverso la saga, confrontando funzioni drammatiche senza attribuire una dipendenza totale da Wagner. |
| `E0868` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: John Williams compose la partitura musicale originale di Star Wars (1977), film scritto e diretto da George Lucas, interpretata dalla London Symphony Orchestra. L'uso dei temi ricorrenti si inserisce nella tradizione del sinfonismo cinematografico, senza istituire da solo una filiazione causale diretta da Wagner. |
| `E0869` | **sospeso** | Dal musical al film tratta Morricone, ma non menziona C'era una volta in America; la presenza del compositore non certifica l'analisi di questo film. |
| `E0870` | **sospeso** | Musica nell'audiovisivo nomina C'era una volta il West, non C'era una volta in America; i due film di Leone con musiche di Morricone sono opere diverse. |
| `E0871` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Ennio Morricone compose e dirige le musiche originali del film C'era una volta in America (1984) di Sergio Leone. Il montaggio sonoro del film contiene anche musiche preesistenti di altri autori; attribuire la partitura originale a Morricone non equivale ad attribuirgli tutti i brani ascoltati. |

### Fonti
- https://www.loc.gov/exhibits/music-and-animation/about.html

**Bilancio Lotto 110:** 9 archi; T=1, R=2, S=3, K=3.

---

## Lotto 111 — 2026-11-08: Autorialità: Mameli, librettisti, Nižinskij, Bausch, Disney, Hitchcock

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0872` | **riscontro_storico_indipendente** | Il Quirinale attribuisce a Goffredo Mameli la scrittura del testo del Canto degli Italiani nell'autunno 1847; Michele Novaro ne compone la musica poco dopo a Torino. |
| `E0873` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Lorenzo Da Ponte scrisse il libretto del Don Giovanni (1787) di Mozart. |
| `E0874` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Lorenzo Da Ponte scrisse il libretto di Le nozze di Figaro (1786), tratto da Beaumarchais. |
| `E0875` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Arrigo Boito scrisse il libretto dell'Otello di Verdi (1887), adattando Shakespeare; opera distinta dall'Otello rossiniano. |
| `E0876` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Ranieri de’ Calzabigi scrive il libretto italiano dell'Orfeo ed Euridice di Gluck, azione teatrale rappresentata al Burgtheater di Vienna il 5 ottobre 1762. La rielaborazione francese del 1774 è un testo distinto, affidato a Pierre-Louis Moline. |
| `E0877` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Oscar Hammerstein II scrive il book e i testi cantati (lyrics) di Show Boat (1927), con musica di Jerome Kern e soggetto dal romanzo di Edna Ferber. Il ruolo di librettista e paroliere è distinto da quello di compositore. |
| `E0878` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Oscar Hammerstein II scrive book e lyrics di Oklahoma! (1943), con musica di Richard Rodgers e soggetto derivato da Green Grow the Lilacs di Lynn Riggs; Agnes de Mille è responsabile della coreografia originale. |
| `E0879` | **riscontro_storico_indipendente** | La Library of Congress attribuisce a Vaclav (Vaslav) Nižinskij la coreografia della Sagra della primavera rappresentata dai Ballets Russes nel 1913; ciò non significa possedere una ricostruzione integrale e sicura dei passi. |
| `E0880` | **riscontro_storico_indipendente** | L'archivio della Fondazione Pina Bausch documenta la sua coreografia autonoma della Sagra della primavera, presentata a Wuppertal il 3 dicembre 1975, con musica preesistente di Stravinskij. |
| `E0881` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Walt Disney promuove e produce Fantasia (1940) come lungometraggio dello studio Disney basato sulla visualizzazione di musiche preesistenti; Leopold Stokowski cura la direzione orchestrale con la Philadelphia Orchestra. Ben Sharpsteen svolge la supervisione di produzione e più registi firmano i singoli episodi: Disney non è il compositore delle musiche né l'unico regista. |
| `E0882` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Walt Disney dirige e cura la produzione del cortometraggio sonoro Steamboat Willie, presentato il 18 novembre 1928 al Colony Theatre di New York. Ub Iwerks è il principale animatore e ideatore grafico della versione iniziale di Mickey Mouse; la regia di Disney non equivale alla realizzazione personale di ogni disegno o della partitura musicale. |
| `E0883` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: Alfred Hitchcock dirige e produce Psycho (1960), da una sceneggiatura di Joseph Stefano basata sul romanzo di Robert Bloch, con musica originale di Bernard Herrmann. La regia non comporta l'attribuzione a Hitchcock della composizione della partitura. |

### Fonti
- https://www.quirinale.it/it/pagine/simboli-repubblica-inno-nazionale
- https://www.loc.gov/loc/lcib/09078/rite.html
- https://www.pinabausch.org/work/sacr

**Bilancio Lotto 111:** 12 archi; H=3, K=9.

---

## Lotto 112 — 2026-11-08: Confronti intercapitolari I: Medioevo, Rinascimento, Barocco, Classicismo

**Metodo:** L'analisi del renderer in `musurgia-atlantis/index.html` mostra che `buildVisible()` espande indiscriminatamente gli archi ammessi. I confronti fra capitoli non vanno trattati come relazioni di discendenza; i link generici attivi vengono sospesi, quelli già sospesi non vengono modificati.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0884` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Medioevo e Rinascimento condividono notazione, polifonia, lauda e fonti, ma i rapporti vanno mediati da singoli oggetti storici. |
| `E0885` | **sospeso (ex confronto non causale)** | Fra capitoli il ponte è già esprimibile tramite monodia/madrigale; in 3D non duplicare ogni percorso. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (monodia e madrigale). |
| `E0886` | **sospeso (ex confronto non causale)** | Fra capitoli privilegiare i mediatori semantici, non il solo arco diretto. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (recitar cantando e teatro delle corti). |
| `E0887` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Arco intercapitolare generico: mostrare i nodi intermedi (fonti, pratiche, persone) e nascondere il ponte generico nella vista storica. |
| `E0888` | **sospeso (ex confronto non causale)** | Barocco e melodramma sono percorsi paralleli con frequenti intersezioni, non una periodizzazione rigida. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (canto, recitativo e teatro barocco). |
| `E0889` | **sospeso (ex confronto non causale)** | Barocco e Classicismo condividono tradizioni ma un arco generico è derivabile dai nodi Metastasio, opera seria, orchestra. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (orchestra, concerto e opera seria). |
| `E0890` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (danza nell'opera e forme francesi). |
| `E0891` | **sospeso (ex confronto non causale)** | Classicismo/Teatro classico si connettono attraverso Mozart, Gluck, opera seria e scena viennese. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Gluck, Mozart, istituzioni viennesi). |
| `E0892` | **sospeso (ex confronto non causale)** | Non serve un arco storico diretto duplicato: Classicismo e Romanticismo risultano già connessi tramite opere e problemi specifici. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (forme sinfoniche, Beethoven e rapporti estetici). |

### Fonti
- Codice di navigazione `musurgia-atlantis/index.html` e capitoli già verificati; nessun riscontro di influenza diretta viene postulato.

**Bilancio Lotto 112:** 9 archi; Q=7, U=2.

---

## Lotto 113 — 2026-11-08: Confronti intercapitolari II: Classicismo, Romanticismo, Risorgimento

**Metodo:** L'analisi del renderer in `musurgia-atlantis/index.html` mostra che `buildVisible()` espande indiscriminatamente gli archi ammessi. I confronti fra capitoli non vanno trattati come relazioni di discendenza; i link generici attivi vengono sospesi, quelli già sospesi non vengono modificati.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0893` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Fidelio e riforme del teatro). |
| `E0894` | **sospeso (ex confronto non causale)** | Un collegamento fra due capitoli è derivabile dagli archi via Gluck, Angiolini e ballet d’action. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Gluck, Angiolini e ballet d'action). |
| `E0895` | **sospeso (ex confronto non causale)** | Romanticismo e Opera lirica si incontrano in compositori e categorie, non nell’appartenenza di una stessa opera a generi diversi. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Verdi, Wagner e generi teatrali). |
| `E0896` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (canti patriottici, Verdi e ricezioni). |
| `E0897` | **sospeso (ex confronto non causale)** | Il confronto Romanticismo ↔ Balletto è preferibile tramite autori, coreografie e generi, non arco generico. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (balletti, Čajkovskij e coreografie). |
| `E0898` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0899` | **sospeso (ex confronto non causale)** | Romanticismo e avanguardie si incontrano in temi di continuità e reazione: evitare un arco di influenza impersonale. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (timbro, forma e reazioni novecentesche). |
| `E0900` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0901` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Nabucco, Va' pensiero e ricezione patriottica). |
| `E0902` | **sospeso (ex confronto non causale)** | È il verso speculare di E0896. Tenere entrambi nel registro storico, ma visualizzare un solo collegamento non direzionale. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Risorgimento, Romanticismo e Verdi (doppione inverso di E0896)). |

### Fonti
- Codice di navigazione `musurgia-atlantis/index.html` e capitoli già verificati; nessun riscontro di influenza diretta viene postulato.

**Bilancio Lotto 113:** 10 archi; Q=8, U=2.

---

## Lotto 114 — 2026-11-08: Confronti intercapitolari III: melodramma, teatro, avanguardie e balletto

**Metodo:** L'analisi del renderer in `musurgia-atlantis/index.html` mostra che `buildVisible()` espande indiscriminatamente gli archi ammessi. I confronti fra capitoli non vanno trattati come relazioni di discendenza; i link generici attivi vengono sospesi, quelli già sospesi non vengono modificati.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0903` | **sospeso (ex confronto non causale)** | La connessione Melodramma/Teatro classico si costruisce con forme e protagonisti, non con la sola somiglianza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Gluck, riforma operistica e recitativo). |
| `E0904` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (atti, scene, numeri e forme). |
| `E0905` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Mozart, concertato e finale d'atto). |
| `E0906` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Verdi, cavatina e concertato). |
| `E0907` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Puccini, Wagner e mutamento armonico). |
| `E0908` | **sospeso (ex confronto non causale)** | Opera e balletto condividono produttori/luoghi/repertori, non necessariamente identiche forme. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (danza teatrale, grand opéra e balletto). |
| `E0909` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0910` | **sospeso (ex confronto non causale)** | Balletto e Novecento comunicano attraverso Stravinskij, Debussy, Ravel, Diaghilev e opere specifiche. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (Stravinskij, Ravel e Diaghilev). |
| `E0911` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0912` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |

### Fonti
- Codice di navigazione `musurgia-atlantis/index.html` e capitoli già verificati; nessun riscontro di influenza diretta viene postulato.

**Bilancio Lotto 114:** 10 archi; Q=7, U=3.

---

## Lotto 115 — 2026-11-08: Confronti intercapitolari IV: musical, cinema e collegamenti ombrello

**Metodo:** L'analisi del renderer in `musurgia-atlantis/index.html` mostra che `buildVisible()` espande indiscriminatamente gli archi ammessi. I confronti fra capitoli non vanno trattati come relazioni di discendenza; i link generici attivi vengono sospesi, quelli già sospesi non vengono modificati.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0913` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0914` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0915` | **sospeso (ex confronto non causale)** | Un balletto che compare nel cinema non identifica i due linguaggi; servono opere e produzioni di riferimento. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (balletto sullo schermo e tradizioni coreografiche). |
| `E0916` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0917` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0918` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0919` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Due percorsi condividono temi, ma il confronto fra interi capitoli va sostituito da un itinerario che identifichi persone, opere e forme. |
| `E0920` | **sospeso (ex confronto non causale)** | Condivide un problema di senso con altra pagina; va reso come confronto, non come freccia di influenza. Confronto intercapitolare conservato come traccia editoriale, ma non attraversabile nella mappa storica: servono i nodi mediatori (orchestra, forme e ricezione ottocentesca). |
| `E0921` | **sospensione già presente, confermata** | Ponte fra interi capitoli già sospeso: Il collegamento diretto Medioevo→Barocco deve passare attraverso specifici meccanismi (canto liturgico, notazione, contrappunto, ricezioni). |

### Fonti
- Codice di navigazione `musurgia-atlantis/index.html` e capitoli già verificati; nessun riscontro di influenza diretta viene postulato.

**Bilancio Lotto 115:** 9 archi; Q=2, U=7.

---

## Lotto 116 — 2026-11-08: Mediazioni storiche fra nodi di senso: riscontri e otto proposte aperte

**Metodo:** Distinzione fra contenuti dei capitoli, riscontro indipendente di autori e ruoli, e rimandi non documentati. Le attribuzioni già storicamente confermate sono preservate.

| ID | Esito | Nota storico-filologica |
| --- | --- | --- |
| `E0922` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: La monodia accompagnata favorisce lo stile rappresentativo e il recitar cantando nella nascita del melodramma; non è causa unica né equivale a ogni forma di monodia. |
| `E0923` | **riscontro indipendente conservato** | Attribuzione specifica conservata da precedenti riscontri indipendenti: La tradizione madrigalistica interagisce con la monodia accompagnata e lo stile rappresentativo alle origini dell'opera: non si trasforma automaticamente e linearmente nel recitar cantando. |
| `E0924` | **proposta mantenuta aperta** | La relazione polifonia–madrigale è plausibile ma deve distinguere generi e tessiture non contrappuntistiche; nessuna influenza persona–persona va dedotta automaticamente. |
| `E0925` | **proposta mantenuta aperta** | La policoralità usa spazio e risposta antifonale, ma non è genealogia unica dell'orchestra moderna: mantenere la proposta in attesa di fonti specifiche. |
| `E0926` | **proposta mantenuta aperta** | Quadrivium e teoria armonica appartengono a concezioni storiche differenti; accostamento non sinonimico, nessun attraversamento automatico. |
| `E0927` | **proposta mantenuta aperta** | Il basso continuo può sostenere declamazione solistica, ma lo stile recitativo non si riduce al basso continuo. Necessarie fonti specifiche. |
| `E0928` | **proposta mantenuta aperta** | Sonata come genere strumentale e forma-sonata come modello analitico posteriore non sono equivalenti terminologicamente; proposta non promossa. |
| `E0929` | **proposta mantenuta aperta** | Il concerto mette in rapporto solisti, insieme e timbro, ma la sua storia non coincide con quella dell'orchestra: relazione da precisare. |
| `E0930` | **proposta mantenuta aperta** | Il contrappunto e la fuga appartengono a pratiche polifoniche stratificate, non a un'unica scuola invariata tra epoche: proposta non promossa. |
| `E0931` | **proposta mantenuta aperta** | Il dibattito su musica assoluta e autonomia delle forme investe anche il sinfonismo, ma una singola freccia astorica è insufficiente. |

### Fonti
- Fonti indipendenti preesistenti nei singoli archi o analisi di proposte, da mantenere aperte senza nuova promozione.

**Bilancio Lotto 116:** 10 archi; K=2, P=8.

---
### Bilancio dopo i Lotti 107–116

- **98 archi esaminati** da `E0834` a `E0931`. **54 archi aggiornati**; 22 riscontri storici già convalidati, 14 sospensioni preesistenti e 8 proposte semantiche conservati senza modifiche.
- Esiti di questa serie: 19 trattazioni riscontrate, 2 richiami contestuali, 6 nuove sospensioni per titoli non attestati, 3 nuove verifiche autoriali, 24 confronti generici di capitoli sospesi perché attraversabili come ponti, 14 sospensioni preesistenti confermate, 8 proposte semantiche non ancora promosse.
- **Riscontri indipendenti promossi:** `E0872` Mameli → testo del *Canto degli Italiani* (Quirinale); `E0879` Nižinskij → coreografia della *Sagra* del 1913 (Library of Congress); `E0880` Pina Bausch → nuova coreografia della *Sagra* nel 1975 (archivio della Fondazione Pina Bausch). 1913: le fonti istituzionali non sono perfettamente uniformi nel riportare il giorno della prima; la verifica qui riguarda l'attribuzione coreografica e l'anno.
- **Integrità:** 608 nodi, 1520 archi; duplicati ID nodo/arco 0/0; orfani 0; triplette duplicate 0.
- **Residui totali:** proposte editoriali **76**; sospensioni **112**; trattazioni **263**; richiami contestuali **79**.
- **Verifiche storiche indipendenti:** 365 → **368** flag; gate `riscontro_storico_indipendente` **332**.

### QA strutturale — ponti intercapitolari nel renderer attuale

La vista focalizzata di `index.html` usa `buildVisible()` con espansione per livelli senza distinzione fra ponti di capitolo e relazioni specifiche. Il filtro predefinito include `trattazione` e `menzione`; `confronto_non_causale` rientra in `menzione`. Dunque 24 archi di confronto fra interi capitoli (qui `E0884`–`E0921`) erano attraversabili: tutti ora passano a `sospeso`, restando recuperabili nel registro e tramite `previous_quality_gate`; altri 14 erano già sospesi. Sono stati scelti i mediatori concettuali individuati nel testo del registro, senza creare nuove filiazioni.

**Simulazione dati della vista focalizzata:** conteggio dei nodi raggiunti eseguendo cinque cicli d'espansione secondo il codice corrente, con filtri predefiniti; i dati di livello non costituiscono prova di parentela storica. Il renderer non è stato modificato.

| Nodo focale | Nodi raggiunti prima, entro V | Dopo, entro V |
| --- | ---: | ---: |
| Wolfgang Amadeus Mozart | 586 | 579 |
| Ludwig van Beethoven | 583 | 579 |
| Giuseppe Verdi | 580 | 565 |
| Romanticismo | 586 | 587 |
| Barocco | 586 | 587 |
| Teatro del Classicismo | 586 | 586 |
| Dall’operetta a Broadway | 577 | 568 |
| Dal musical al film | 587 | 586 |
| Musica nell’audiovisivo | 578 | 570 |
| Verso le avanguardie e il Novecento | 585 | 586 |

**QA storico-editoriale supplementare:** `E0862` è un'omonimia fra *Fantasia* Disney e *Fantasia contrappuntistica* di Busoni; `E0869`–`E0870` confondevano il titolo *C'era una volta in America* con riferimenti più generali a Morricone o a *C'era una volta il West*; non vi è trattazione verificabile del film specifico. La nuova classificazione impedisce che queste corrispondenze spurie siano usate automaticamente nella rete.

**Archi sospesi per assenza del titolo:** `E0842`, `E0856`, `E0862`, `E0864`, `E0869`, `E0870`.

**Punti aperti:** i nodi concettuali `E0924`–`E0931` rimangono proposte editoriali, senza promozione storica indifferenziata. Un eventuale intervento sul renderer per impedire espansioni improprie o per etichettare diversamente i confronti resta un lavoro distinto e non è stato applicato. Nessun capitolo, menu o protocollo è stato modificato.

**Limitazione:** simulazione dati del codice `buildVisible()`; non è un collaudo visivo su Android/desktop. Sospendere i ponti generici in `quality_gate` mitiga la propagazione, ma altri percorsi possono restare raggiungibili attraverso nodi di senso condivisi.

**Ripresa:** **Lotto 117**, da `E0932`, con i rapporti fra forme musicali, linguaggi teatrali, musica per immagini e collegamenti semantici; mantenere il gate storico indipendente solo dove sussistano fonti specifiche.

---
## Lotto 117 — 2026-11-08: Sinfonia, programma, recitativo e Gluck

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0932` | **proposta non promossa** | Sinfonia e musica a programma possono convivere (Pastorale di Beethoven, Fantastique di Berlioz), ma non tutte le sinfonie sono programmatiche: non inferire una discendenza. |
| `E0933` | **verifica indipendente** | Il poema sinfonico lisztiano costituisce una via storicamente attestata della musica a programma; le radici sinfoniche precedenti non coincidono con il genere definito nell'Ottocento (Royal Holloway). |
| `E0934` | **sospeso** | L'analogia fra musica a programma e colonna sonora non prova una trasmissione storica diretta: ponte fra macroconcetti sospeso per evitare propagazione impropria. |
| `E0935` | **proposta non promossa** | Il recitativo è una tecnica documentata nel melodramma, ma non ogni titolo o epoca lo impiega nello stesso modo; relazione generica da esemplificare. |
| `E0936` | **proposta non promossa** | Aria, cavatina, romanza e cantabile appartengono a grammatiche vocali diverse: non sono equivalenti né obbligatorie in ogni opera. |
| `E0937` | **proposta non promossa** | Recitativo e aria possono svolgere funzioni differenti nel tempo scenico; il Met documenta la convenzione barocca, non una legge universale del teatro musicale. |
| `E0938` | **verifica indipendente** | Gluck e Calzabigi riformulano convenzioni dell'opera seria: ornamentazione, separazione recitativo–aria e rapporto parola/azione; riscontro storico Metropolitan Opera. |
| `E0939` | **proposta non promossa** | La scrittura del libretto organizza parole e azioni, influenzando la declamazione: verificare su libretti e compositori specifici prima di promuovere un rapporto generale. |
| `E0940` | **sospeso** | Il concertato di solisti e il coro come soggetto collettivo sono categorie differenti: il verbo 'distingue' non indica filiazione storica. Ponte sospeso. |
| `E0941` | **proposta non promossa** | Cantabile, tempo di mezzo, cabaletta e stretta costituiscono una grammatica situata del teatro italiano ottocentesco, non l'intero belcanto. |

### Fonti esterne per nuove verifiche
- https://www.royalholloway.ac.uk/research-and-education/subjects/music/about-us/teacherhubmusic/franz-liszt-symphonic-poems/
- https://www.metopera.org/user-information/nightly-met-opera-streams/week-34/opera-history-tour-guide/

**Bilancio Lotto 117:** 10 archi, S=2, H=2, P=6.

---

## Lotto 118 — 2026-11-08: Leitmotiv, canti civici, opera e danza

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0942` | **proposta non promossa** | Il ritorno dei motivi può costruire memoria drammatica; non ogni opera romantica o fantastica adotta il leitmotiv in senso wagneriano. |
| `E0943` | **proposta non promossa** | Il cinema rielabora temi ricorrenti (per esempio Williams) con proprie funzioni: da evitare la tesi di un trasferimento uniforme dal teatro wagneriano. |
| `E0944` | **sospensione precedente conservata** | Il nesso astratto fra nazionalità e mobilitazione politica rimane sospeso; servono esempi documentati come Mameli e Novaro. |
| `E0945` | **proposta non promossa** | Inno politico e poesia civile si intersecano in episodi precisi, tra cui Il Canto degli Italiani: non inferire che ogni inno sia poesia politica mobilitante. |
| `E0946` | **proposta non promossa** | Gli inni hanno pratiche per canto, banda, orchestra e cerimoniale, che non coincidono con una partitura originale; servono casi circoscritti. |
| `E0947` | **proposta non promossa** | L'opera può accogliere danza e divertissement, per esempio Guillaume Tell, ma genere teatrale e spettacolo coreografico non sono sovrapponibili. |
| `E0948` | **sospeso** | La danza interna all'opera e il balletto autonomo non coincidono: relazione di differenza e non discendenza, sospesa nel grafo storico. |
| `E0949` | **proposta non promossa** | Il ballet d'action e la pantomima del Settecento ripensano la narrazione coreografica, senza costituire tutta la storia del balletto. |
| `E0950` | **proposta non promossa** | I Ballets Russes intrecciano partiture, scene, costumi e coreografie differenti; non ridurre le avanguardie a una sola genealogia. |
| `E0951` | **verifica precedente conservata** | Resta conservata la verifica indipendente su Cage e Cunningham: autonomia della composizione coreografica e musicale, non semplice sinonimia. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 118:** 10 archi, S=1, P=7, K=1, U=1.

---

## Lotto 119 — 2026-11-08: Dall'operetta al musical e al cinema sonoro

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0952` | **proposta non promossa** | L'operetta può parodiare convenzioni dell'opera e mitologie, come Offenbach, senza coincidere con l'intero genere operistico. |
| `E0953` | **proposta non promossa** | Operetta, vaudeville, varietà e rivista convivono in sistemi produttivi ma sono forme distinte: rapporto editoriale da precisare. |
| `E0954` | **verifica indipendente** | La Library of Congress annovera l'operetta fra le diverse matrici del musical statunitense, insieme a music hall, vaudeville e tradizioni afroamericane; nessuna origine esclusiva. |
| `E0955` | **verifica indipendente** | La Library of Congress documenta il ruolo di ragtime, tap e teatro afroamericano nell'evoluzione del musical, specialmente Shuffle Along (1921); contributo autonomo e non derivativo. |
| `E0956` | **proposta non promossa** | Il jazz contribuisce al musical in modi diversi, ma l'improvvisazione non è caratteristica obbligatoria delle partiture teatrali. |
| `E0957` | **verifica indipendente** | La Library of Congress include il vaudeville fra le radici del musical americano, in convergenza con tradizioni diverse; non si tratta di una genealogia unica. |
| `E0958` | **proposta non promossa** | Passaggio dal musical scenico al film musicale: montaggio, riprese e coreografia si trasformano; il film musicale non è solo teatro filmato. |
| `E0959` | **verifica indipendente** | La Library of Congress documenta il passaggio graduale dall'accompagnamento dal vivo al cinema con sonoro sincronizzato, tra pratiche coesistenti negli anni Venti. |
| `E0960` | **proposta non promossa** | Sincronizzazione e cinema sonoro trasformano il lavoro sul suono, ma la composizione specifica per il film precede i talkies. |
| `E0961` | **proposta non promossa** | L'animazione può ricorrere al Mickey Mousing; non ogni cartone sincronizza ogni gesto e il metodo non coincide con tutta la musica d'animazione. |

### Fonti esterne per nuove verifiche
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/musicals/
- https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/parlor-and-concert-stage/tap-dance/
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/photoplay-albums-for-silent-film-scores/

**Bilancio Lotto 119:** 10 archi, H=4, P=6.

---

## Lotto 120 — 2026-11-08: Diegesi, Foley, registrazione e sperimentazioni

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0962` | **sospeso** | Mickey Mousing coordina musica e gesto, Foley produce effetti e rumori: confronto didattico, non discendenza storica; arco sospeso. |
| `E0963` | **proposta non promossa** | Diegesi ed extradiegesi descrivono la collocazione narrativa del suono, non la paternità della musica; casi da verificare su scene particolari. |
| `E0964` | **proposta non promossa** | Empatia e anempatia sono categorie d'interpretazione di musica e immagine, non generi genealogicamente connessi all'intera colonna sonora. |
| `E0965` | **proposta non promossa** | Una colonna sonora può usare musica composta per il film o repertorio preesistente: distinguere gli autori e le fonti di ciascun brano. |
| `E0966` | **sospeso** | Diegesi riguarda il mondo narrativo del suono; Foley il processo di produzione dei rumori. Piani analitici diversi: arco sospeso. |
| `E0967` | **proposta non promossa** | Fonografia e ascolto riproducibile incidono sulla storia del cinema sonoro, ma non equivalgono alle specifiche tecnologie audiovisive di sincronizzazione. |
| `E0968` | **proposta non promossa** | Trascrizione, arrangiamento, registrazione e riuso producono oggetti distinti: l'uno non causa obbligatoriamente l'altro. |
| `E0969` | **sospeso** | Atonalità, dodecafonia e serialismo dei parametri non sono sinonimi né fasi obbligate di una stessa traiettoria; rapporto generico sospeso. |
| `E0970` | **sospeso** | Musica concreta ed elettroacustica possono incontrare il cinema in casi documentati, ma il ponte globale a ogni colonna sonora non è provato: sospeso. |
| `E0971` | **sospeso** | Minimalismo e musica cinematografica possono incontrarsi in opere specifiche, ma senza esempi attestati non è corretto attivare il ponte generale: sospeso. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 120:** 10 archi, S=5, P=5.

---

## Lotto 121 — 2026-11-08: Boezio, polifonia medievale e stampa

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0972` | **trattazione** | Boezio: quadrivium e teoria dei rapporti numerici; non è una biografia completa. |
| `E0973` | **trattazione** | Guido d'Arezzo: didattica del canto e sviluppo della notazione, con cautela verso i racconti leggendari. |
| `E0974` | **trattazione** | Léonin e Notre-Dame: fonti e attribuzioni tramandate da Anonimo IV. |
| `E0975` | **trattazione** | Pérotin, organa a più voci e testimonianza tarda di Anonimo IV. |
| `E0976` | **trattazione** | Francesco d'Assisi, Cantico e cultura della lauda; non è l'autore di tutte le laudi. |
| `E0977` | **richiamo** | Walther von der Vogelweide come esempio di Minnesang e cultura manoscritta. |
| `E0978` | **richiamo** | Bernart de Ventadorn nel contesto della fin'amor e della canso, non diaristica autobiografica. |
| `E0979` | **trattazione** | Ottaviano Petrucci, privilegi veneziani e stampa musicale del primo Cinquecento. |
| `E0980` | **trattazione** | Lorenzo de' Medici, mecenatismo fiorentino e canti carnascialeschi, distinto da Caterina. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 121:** 9 archi, T=7, R=2.

---

## Lotto 122 — 2026-11-08: Compositori e polifonie rinascimentali

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0981` | **trattazione** | Orazio Vecchi e L'Amfiparnaso (1597), teatro madrigalistico non coincidente con l'opera lirica. |
| `E0982` | **trattazione** | Adriano Banchieri, Festino e caricatura del contrappunto nella commedia polifonica. |
| `E0983` | **trattazione** | Giovanni Croce, Mascarate piacevoli e Triaca musicale. |
| `E0984` | **trattazione** | Gioseffo Zarlino, Istitutioni harmoniche (1558) e prassi veneziana. |
| `E0985` | **trattazione** | Giovanni Gabrieli: policoralità veneziana, timbri e spazio di San Marco. |
| `E0986` | **richiamo** | Orlando di Lasso e cappella bavarese, senza una monografia autonoma. |
| `E0987` | **richiamo** | Tomás Luis de Victoria e Officium defunctorum nel contesto della polifonia spagnola. |
| `E0988` | **richiamo** | Thomas Tallis nella musica inglese delle trasformazioni confessionali. |
| `E0989` | **trattazione** | William Byrd, repertori cattolici e anglicani nella polifonia inglese. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 122:** 9 archi, T=6, R=3.

---

## Lotto 123 — 2026-11-08: Romanticismo, opera lirica e scuole nazionali

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E0990` | **trattazione** | Dvořák nel Romanticismo: Danze slave e scuole nazionali dalla Boemia all'America. |
| `E0991` | **trattazione** | Dvořák in Opera lirica: Rusalka (1901) e il suo teatro musicale ceco. |
| `E0992` | **trattazione** | Smetana nel Romanticismo: Má vlast e Vltava nel quadro della memoria boema. |
| `E0993` | **trattazione** | Smetana nell'Opera lirica: La sposa venduta, lingua, scena e danza. |
| `E0994` | **trattazione** | Rimskij-Korsakov in Romanticismo: Shéhérazade come suite, non sinfonia a programma. |
| `E0995` | **trattazione** | Rimskij-Korsakov nell'Opera lirica: Sneguročka, Sadko e teatro russo. |
| `E0996` | **trattazione** | Grieg nel Romanticismo: identità norvegese e confronto con altre scuole nordiche. |
| `E0997` | **richiamo** | Grieg citato in Opera lirica per Peer Gynt come musica di scena, non come opera lirica. |
| `E0998` | **richiamo** | Albéniz richiamato nella cultura pianistica spagnola, senza studio analitico esteso. |
| `E0999` | **richiamo** | Granados richiamato accanto ad Albéniz nella scrittura spagnola di fine Ottocento. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 123:** 10 archi, T=7, R=3.

---

## Lotto 124 — 2026-11-08: Autrici, Risorgimento e operetta

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1000` | **trattazione** | Clara Schumann: ruolo di autrice, interprete e testimone di fonti, non soltanto riferimento coniugale. |
| `E1001` | **trattazione** | Saint-Saëns: Carnevale degli animali e Société nationale de musique. |
| `E1002` | **trattazione** | Glinka e il problema del teatro nazionale russo; non confonderlo con il Gruppo dei Cinque. |
| `E1003` | **trattazione** | Glinka nell'Opera lirica: Una vita per lo zar e Ruslan e Ljudmila. |
| `E1004` | **trattazione** | Dall'Ongaro, poeta e collaboratore di Novaro nel repertorio politico del Risorgimento. |
| `E1005` | **trattazione** | Alessandro Botti e la sua versione musicale del Canto degli Italiani, distinta da quella di Novaro. |
| `E1006` | **richiamo** | Massimo d'Azeglio citato per le memorie sulla formazione nazionale, non come compositore. |
| `E1007` | **richiamo** | Hervé/Florimond Ronger nella satira dell'operetta francese, senza un profilo monografico. |
| `E1008` | **richiamo** | Franz von Suppé citato con Die schöne Galathée e Boccaccio. |
| `E1009` | **richiamo** | Emmerich Kálmán citato per Die Csárdásfürstin del 1915. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 124:** 10 archi, T=6, R=4.

---

## Lotto 125 — 2026-11-08: Autori di Shuffle Along e il balletto di corte

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1010` | **richiamo** | Noble Sissle paroliere di Shuffle Along, distinto dal compositore Eubie Blake. |
| `E1011` | **richiamo** | Flournoy Miller librettista di Shuffle Along insieme ad Aubrey Lyles. |
| `E1012` | **richiamo** | Aubrey Lyles coautore del libretto di Shuffle Along insieme a Miller. |
| `E1013` | **richiamo** | George M. Cohan fra canzone urbana e Broadway, senza analisi biografica. |
| `E1014` | **richiamo** | Irving Berlin citato nella trasformazione della canzone urbana in teatro musicale. |
| `E1015` | **trattazione** | Caterina de' Medici nel Balletto: spettacoli di corte e passaggio culturale Italia–Francia, non invenzione solitaria del balletto. |
| `E1016` | **sospeso** | In Rinascimento compare Lorenzo de' Medici, non Caterina de' Medici: persone distinte; falso richiamo sospeso. |
| `E1017` | **trattazione** | Luigi XIV, balletto di corte e Académie royale de danse, tra pratica e istituzionalizzazione. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 125:** 8 archi, T=2, R=5, S=1.

---

## Lotto 126 — 2026-11-08: Coreografi dal Settecento al Novecento

**Protocollo:** audit storico-filologico dei capitoli HTML e delle fonti indipendenti. Non si inferiscono influenze dirette da analogie fra generi, co-occorrenze o appartenenze generiche.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1018` | **trattazione** | Pierre Beauchamp e codificazione tecnica, senza attribuzione esclusiva delle cinque posizioni. |
| `E1019` | **trattazione** | Salvatore Viganò coreografo delle Creature di Prometeo, distinto da Beethoven autore della musica. |
| `E1020` | **trattazione** | Isadora Duncan e danza moderna in contrasto con i codici accademici. |
| `E1021` | **trattazione** | Bronislava Nižinskaja e le coreografie di Les Noces e Les Biches, distinta dal fratello Vaclav. |
| `E1022` | **trattazione** | Maurice Béjart e repertorio coreografico rituale e collettivo, distinto da Pina Bausch. |
| `E1023` | **richiamo** | Agnes de Mille citata in Dall'operetta a Broadway per Oklahoma! (1943). |
| `E1024` | **sospeso** | Agnes de Mille non compare nel testo della pagina Balletto verificata; il riferimento è nell'altra pagina. Sospeso. |

### Fonti esterne per nuove verifiche
- Nessuna nuova verifica indipendente: confronto dei capitoli, oppure qualificazione/sospensione motivata delle proposte.

**Bilancio Lotto 126:** 7 archi, T=5, R=1, S=1.

---
### Bilancio dopo i Lotti 117–126

- **93 archi esaminati**, `E0932`–`E1024`; **91 aggiornati**, due preesistenti conservati (`E0944` sospeso, `E0951` indipendente).
- Esiti: **33 trattazioni riscontrate**, **18 richiami**, **10 sospensioni nuove**, **6 nuovi riscontri indipendenti**, **24 proposte semantiche riconsiderate ma non promosse**, un sospeso e un verificato già presenti e conservati.
- Sei nuove verifiche: `E0933` poema sinfonico/musica a programma (Royal Holloway), `E0938` opera seria/riforma Gluck–Calzabigi (Metropolitan Opera), `E0954` operetta fra le matrici del musical (Library of Congress), `E0955` ragtime e teatro afroamericano (Library of Congress), `E0957` vaudeville (Library of Congress), `E0959` compresenza cinema muto con musica dal vivo/cinema sonoro nella transizione (Library of Congress). I verbi specifici sono attestati; non sono genealogie universali.
- Integrità: **608 nodi e 1520 archi**; duplicati ID nodo 0, duplicati ID arco 0, orfani 0, triplette duplicate 0.
- **Residui:** proposte editoriali 62; sospensioni 122; trattazioni 296; richiami contestuali 97; flag indipendenti 368 → **374**; gate `riscontro_storico_indipendente` 338.

### Falsi collegamenti capitolo–persona

- `E1016`: Rinascimento cita Lorenzo de' Medici, non Caterina de' Medici, trattata invece in Balletto. Sospeso per assenza nel capitolo di partenza.
- `E1024`: Balletto non cita Agnes de Mille; l'autrice è invece presente in Dall'operetta a Broadway in relazione a *Oklahoma!* (1943). Sospeso.

### Controllo di propagazione I–V secondo il filtro predefinito

Simulazione dei cinque cicli in `buildVisible()`, considerando le sole categorie `trattazione` e `menzione`. Conteggi cumulativi; i cinque livelli di navigazione del grafo non dimostrano influenza storica fra ogni coppia raggiungibile.

| Nodo focale | Prima I–V | Dopo I–V |
| --- | --- | --- |
| Wolfgang Amadeus Mozart | 14 / 284 / 417 / 554 / 579 | 14 / 283 / 415 / 553 / 579 |
| Ludwig van Beethoven | 18 / 262 / 411 / 549 / 579 | 18 / 262 / 410 / 548 / 579 |
| Giuseppe Verdi | 23 / 267 / 388 / 527 / 565 | 23 / 266 / 386 / 526 / 565 |
| Medioevo | 21 / 39 / 155 / 220 / 471 | 21 / 39 / 154 / 220 / 471 |
| Rinascimento | 52 / 94 / 407 / 525 / 583 | 51 / 93 / 406 / 524 / 583 |
| Romanticismo | 97 / 190 / 466 / 551 / 587 | 97 / 191 / 467 / 552 / 587 |
| Il balletto | 76 / 156 / 455 / 545 / 586 | 75 / 155 / 454 / 545 / 586 |
| Dall’operetta a Broadway | 45 / 65 / 351 / 473 / 568 | 45 / 65 / 351 / 473 / 568 |
| Musica nell’audiovisivo | 40 / 118 / 411 / 501 / 570 | 40 / 119 / 415 / 502 / 570 |

**Le otto sospensioni concettuali:** `E0934`, `E0940`, `E0948`, `E0962`, `E0966`, `E0969`, `E0970`, `E0971`. Non fanno più da ponti attivabili di default; restano consultabili tramite descrizioni e `previous_quality_gate`.

**Riutilizzo editoriale:** i capitoli potranno integrare, in un intervento separato, la distinzione fra polifonia e madrigale, autore e fonte scenica, fra musica a programma e colonna sonora, fra tecnologie del sonoro e accompagnamento dal vivo, e i due nomi falsamente riscontrati. Non è stata applicata alcuna modifica alle pagine.

**Limiti QA:** controllata integrità, simulazione dati e filtro di default, non una sessione grafica reale su Android/desktop; nessun test delle etichette, rotazione, zoom e fallback canvas dal vivo. Atlantis mantiene il dataset statico e non si sincronizza automaticamente coi capitoli.

**Continuazione:** dal **Lotto 127** e dall'arco `E1025`, organologia, strumenti, tradizioni esecutive e relazioni con i capitoli. Distinguere impiego, trasformazione organologica e semplice menzione.

---

## Lotto 127 — 2026-11-08: Organo nei quattro capitoli, fra polifonia e pratica liturgica

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1025` | **trattazione verificata nel capitolo** | Medioevo tratta l'organo portativo, con il ritratto di Landini nel Codice Squarcialupi; organum è anche una pratica polifonica, non lo strumento. |
| `E1026` | **trattazione verificata nel capitolo** | Rinascimento affronta l'organo nell'alternanza con canto e polifonia e nei contesti di cappella: impiego, non origine dello strumento. |
| `E1027` | **trattazione verificata nel capitolo** | Barocco distingue organo come realizzatore possibile del basso continuo e come strumento solistico/liturgico, con Frescobaldi; continuo non equivale a organo. |
| `E1028` | **richiamo circoscritto** | Classicismo menziona l'organo nel repertorio sacro e nella realizzazione del continuo; non è una monografia sull'evoluzione dell'organo. |

### Fonti e controlli
- Capitoli HTML del sito presenti su `main` (URL già conservati negli archi); nessuna nuova verifica indipendente per i rapporti capitolo–strumento.

**Bilancio Lotto 127:** 4 archi; 3 trattazioni, 1 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 128 — 2026-11-08: Organistrum, ghironda e ribeca: iconografia e genealogie non lineari

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1029` | **trattazione verificata nel capitolo** | Medioevo documenta l'organistrum con iconografia medievale e ne descrive la ruota a manovella; distinguere la sua forma storica dalle successive ghironde. |
| `E1030` | **sospensione conservata** | Rinascimento non attesta l'organistrum: resta la sospensione preesistente, senza trasferire per semplice analogia la trattazione medievale. |
| `E1031` | **trattazione verificata nel capitolo** | Medioevo presenta la ribeca tramite immagini e considerazioni organologiche: uno strumento ad arco che non coincide col violino moderno. |
| `E1032` | **richiamo circoscritto** | Rinascimento richiama la ribeca fra gli strumenti ad arco nell'emergere della famiglia del violino: vicinanza storica, non discendenza esclusiva. |

### Fonti e controlli
- Capitoli HTML del sito presenti su `main` (URL già conservati negli archi); nessuna nuova verifica indipendente per i rapporti capitolo–strumento.

**Bilancio Lotto 128:** 4 archi; 2 trattazioni, 1 richiami, 1 sospensioni, 0 riscontri indipendenti.

---

## Lotto 129 — 2026-11-08: Famiglie degli archi: viola da gamba e violino nei diversi repertori

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1033` | **trattazione verificata nel capitolo** | Rinascimento distingue viola da gamba e famiglia da braccio per struttura, corde, tastatura, postura e repertorio; non sono lo stesso strumento. |
| `E1034` | **trattazione verificata nel capitolo** | Barocco include la viola da gamba fra gli strumenti solistici e di basso: può partecipare alla pratica del continuo ma non coincide col violoncello. |
| `E1035` | **trattazione verificata nel capitolo** | Rinascimento colloca la definizione progressiva del violino nel contesto della lira da braccio e di altri strumenti, senza una genealogia meccanica unica. |
| `E1036` | **trattazione verificata nel capitolo** | Barocco tratta la scrittura per violino da Biber e Corelli a Vivaldi; la centralità repertoriale non implica invenzione barocca dello strumento. |
| `E1037` | **trattazione verificata nel capitolo** | Classicismo tratta il violino nel quartetto, nel concerto e nell'orchestra; l'arco riguarda prassi e ruoli musicali, non solo trasformazioni costruttive. |
| `E1038` | **trattazione verificata nel capitolo** | Romanticismo richiama e sviluppa il violino nel virtuosismo e nella musica da camera/orchestrale; non proietta un solo assetto tecnico su tutto l'Ottocento. |
| `E1039` | **sospeso** | Balletto parla dell'orchestra come organico ma nel testo controllato non menziona il violino come oggetto specifico: falso ponte strumentale da sospendere. |

### Fonti e controlli
- https://www.metmuseum.org/it/perspectives/viola-da-gamba (distinzione fra viole e famiglia del violino)

**Bilancio Lotto 129:** 7 archi; 6 trattazioni, 0 richiami, 1 sospensioni, 0 riscontri indipendenti.

---

## Lotto 130 — 2026-11-08: Clavicembalo e fortepiano: uso, sovrapposizioni e mutamento

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1040` | **trattazione verificata nel capitolo** | Rinascimento distingue clavicembalo, spinetta e virginale fra gli strumenti a corde pizzicate: non sono pianoforti rudimentali. |
| `E1041` | **trattazione verificata nel capitolo** | Barocco distingue clavicembalo e funzione del basso continuo, che può essere realizzata anche da organo, liuto, tiorba o arpa. |
| `E1042` | **trattazione verificata nel capitolo** | Classicismo colloca clavicembalo e fortepiano in pratiche anche sovrapposte; la sostituzione non avviene immediatamente. |
| `E1043` | **trattazione verificata nel capitolo** | Classicismo presenta il fortepiano in Haydn, Clementi e Mozart, con dinamica, meccanica e prassi di tocco proprie; non è uno Steinway incompleto. |
| `E1044` | **richiamo circoscritto** | Romanticismo richiama il fortepiano come riferimento storico per confrontare pratiche e timbri col pianoforte più tardo, non come strumento dominante del secolo. |

### Fonti e controlli
- Capitoli HTML del sito presenti su `main` (URL già conservati negli archi); nessuna nuova verifica indipendente per i rapporti capitolo–strumento.

**Bilancio Lotto 130:** 5 archi; 4 trattazioni, 1 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 131 — 2026-11-08: Il pianoforte dal Settecento al Novecento

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1045` | **trattazione verificata nel capitolo** | Classicismo collega la meccanica a martelletti di Cristofori e le pratiche di Mozart e Beethoven; distinguere l'innovazione tecnica dall'uso repertoriale. |
| `E1046` | **trattazione verificata nel capitolo** | Romanticismo dedica spazio al pianoforte nei salotti, nel concerto, nella didattica e nel virtuosismo ottocentesco. |
| `E1047` | **trattazione verificata nel capitolo** | Verso le avanguardie affronta le poetiche pianistiche di Rachmaninov, Debussy, Ravel e Cage; pianoforte preparato significa intervento sul timbro, non nuovo strumento universale. |

### Fonti e controlli
- Capitoli HTML del sito presenti su `main` (URL già conservati negli archi); nessuna nuova verifica indipendente per i rapporti capitolo–strumento.

**Bilancio Lotto 131:** 3 archi; 3 trattazioni, 0 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 132 — 2026-11-08: Cornetto, trombone e serpentone: tra prassi e falsa presenza

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1048` | **trattazione verificata nel capitolo** | Rinascimento tratta il cornetto a bocchino e fori digitali in rapporto alla policoralità; non è il moderno corno a valvole. |
| `E1049` | **sospeso** | Barocco presenta 'Cornetts' solo nel nome dell'ensemble del video su Gabrieli, non in una trattazione autonoma del cornetto: il collegamento di capitolo è sospeso. |
| `E1050` | **trattazione verificata nel capitolo** | Rinascimento presenta tromboni storici/sackbut con cornetti nella pratica veneziana; confrontare organico attestato e prassi moderna senza identità retroattiva. |
| `E1051` | **sospeso** | Nel testo di Barocco su main non compare una trattazione o menzione autonoma di trombone/tromboni: collegamento sospeso. |
| `E1052` | **trattazione verificata nel capitolo** | Romanticismo tratta l'uso del trombone, incluso il problema del registro grave e del trombone contrabbasso in Verdi. |
| `E1053` | **trattazione verificata nel capitolo** | Opera lirica analizza il trombone contrabbasso nella ricerca timbrica verdiana dopo Aida; si tratta di un caso specifico, non dell'intera evoluzione dei tromboni. |
| `E1054` | **trattazione verificata nel capitolo** | Rinascimento contestualizza il serpentone dalla fine del Cinquecento in Francia: presenza nel capitolo non equivale a un uso generalizzato in ogni musica rinascimentale. |

### Fonti e controlli
- https://www.metmuseum.org/art/collection/search/504257 (storia d'uso e transizione serpentone/oficleide)

**Bilancio Lotto 132:** 7 archi; 5 trattazioni, 0 richiami, 2 sospensioni, 0 riscontri indipendenti.

---

## Lotto 133 — 2026-11-08: Serpentone e flauti: trasformazioni e sopravvivenze

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1055` | **trattazione verificata nel capitolo** | Romanticismo confronta serpentone, oficleide e tuba nel basso strumentale: succedono usi e costruzioni differenti, senza equivalenza timbrica o sviluppo universale lineare. |
| `E1056` | **trattazione verificata nel capitolo** | Rinascimento tratta la famiglia del flauto dolce e i consort di taglie diverse: non coincide con l'evoluzione del traversiere. |
| `E1057` | **trattazione verificata nel capitolo** | Barocco presenta il flauto dolce in organici concertanti insieme a oboe, tromba e violino; la sua presenza non definisce da sola l'intero stile. |
| `E1058` | **richiamo circoscritto** | Romanticismo nomina il flauto dolce per distinguerlo dal traversiere e dalle trasformazioni di Boehm: menzione contrastiva, non centralità orchestrale. |

### Fonti e controlli
- https://www.metmuseum.org/art/collection/search/504257 (storia d'uso e transizione serpentone/oficleide)

**Bilancio Lotto 133:** 4 archi; 3 trattazioni, 1 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 134 — 2026-11-08: Corno naturale e corno a valvole: continuità non sostituzione improvvisa

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1059` | **richiamo circoscritto** | Barocco cita i corni naturali tra gli strumenti degli organici storicamente informati, senza analisi sistematica della tecnica. |
| `E1060` | **trattazione verificata nel capitolo** | Classicismo presenta il corno naturale, ritorte e tecnica della mano; variazione delle altezze e limiti della serie armonica sono decisivi. |
| `E1061` | **trattazione verificata nel capitolo** | Romanticismo descrive la convivenza di corno naturale e corno a valvole durante l'Ottocento; non una sostituzione repentina. |

### Fonti e controlli
- https://www.bate.ox.ac.uk/horns (corni naturali, ritorte e valvole)

**Bilancio Lotto 134:** 3 archi; 2 trattazioni, 1 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 135 — 2026-11-08: Violoncello dal continuo all'orchestra e alla musica da camera

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1062` | **trattazione verificata nel capitolo** | Barocco documenta violoncello e varianti a cinque corde nella scrittura per archi e nella pratica del basso continuo; non confonderlo con la viola da gamba. |
| `E1063` | **trattazione verificata nel capitolo** | Classicismo tratta il violoncello come parte degli archi orchestrali e delle formazioni cameristiche, distinto dal solo basso armonico. |
| `E1064` | **trattazione verificata nel capitolo** | Romanticismo considera il violoncello come voce dell'orchestra e della scrittura cameristica; il legame col capitolo è repertoriale, non genealogia organologica. |

### Fonti e controlli
- Capitoli HTML del sito presenti su `main` (URL già conservati negli archi); nessuna nuova verifica indipendente per i rapporti capitolo–strumento.

**Bilancio Lotto 135:** 3 archi; 3 trattazioni, 0 richiami, 0 sospensioni, 0 riscontri indipendenti.

---

## Lotto 136 — 2026-11-08: Interpreti e compositori: il verbo documentato, non una vicinanza generica

**Protocollo:** distinzione fra impiego documentato, trasformazioni organologiche, confronto, semplice richiamo e ruolo di interprete/compositore. Presenza nella pagina non prova automaticamente genealogia o influenza.

| Arco | Esito | Precisazione recuperabile editorialmente |
| --- | --- | --- |
| `E1065` | **riscontro indipendente** | Paganini fu violinista virtuoso e compositore: i 24 Capricci e i concerti documentano sia la pratica esecutiva sia la scrittura per violino. |
| `E1066` | **riscontro indipendente conservato** | Vivaldi: resta la precedente verifica indipendente dei concerti per violino dell'op. 8; non riaprire la convalida né ampliare il verbo a prassi non documentate. |
| `E1067` | **riscontro indipendente** | Corelli fu violinista e compose per violino, tra l'altro le sonate op. 5 (1700); distinguere la sua attività d'interprete dalle opere destinate allo strumento. |
| `E1068` | **riscontro indipendente** | Boccherini fu violoncellista e compose numerose sonate, concerti e quintetti con violoncello; una parte del catalogo esplora il proprio strumento. |
| `E1069` | **riscontro indipendente** | Chopin fu pianista e compositore di repertorio soprattutto pianistico; non significa che ogni suo lavoro sia per pianoforte solo. |
| `E1070` | **riscontro indipendente** | Liszt fu pianista virtuoso e compositore per pianoforte, con trascrizioni e studi; il nesso riguarda lavoro esecutivo e creativo, non tutta la sua produzione. |

### Fonti e controlli
- https://www.treccani.it/enciclopedia/niccolo-paganini/
- https://www.treccani.it/enciclopedia/arcangelo-corelli/
- https://chambermusicsociety.org/about-the-music/composers/luigi-boccherini
- https://www.treccani.it/enciclopedia/fryderyk-franciszek-chopin/
- https://www.loc.gov/item/n79079048/franz-liszt/

**Bilancio Lotto 136:** 6 archi; 0 trattazioni, 0 richiami, 0 sospensioni, 6 riscontri indipendenti.

---

### Bilancio dopo i Lotti 127–136

- **46 archi esaminati**, `E1025`–`E1070`: **44 aggiornati**, **2 conservati** (`E1030` sospeso, `E1066` verificato indipendentemente).
- Esiti di lotto: **31 trattazioni di strumenti riscontrate in pagina**, **5 richiami circoscritti**, **3 nuove sospensioni**, **5 nuove verifiche storiche esterne**, con una sospensione e un riscontro indipendente preesistenti conservati.
- Verifiche indipendenti nuove: `E1065` Paganini/violino (Treccani), `E1067` Corelli/violino (Treccani), `E1068` Boccherini/violoncello (Chamber Music Society), `E1069` Chopin/pianoforte (Treccani), `E1070` Liszt/pianoforte (Library of Congress). La verifica certifica insieme l'attività d'interprete e la produzione attestata, non l'esclusività del repertorio.
- I falsi ponti verso i capitoli comprendono `E1039` (Balletto/violino), `E1049` (Barocco/cornetto: solo nome dell'ensemble nell'ascolto) e `E1051` (Barocco/trombone). `E1030` resta sospeso per l'organistrum non attestato in Rinascimento.
- Precisazioni da riutilizzare in interventi **separati**: organum ≠ organo; organistrum ≠ ogni forma successiva di ghironda; ribeca ≠ violino; viola da gamba ≠ violoncello; basso continuo ≠ clavicembalo; fortepiano e pianoforte non si sostituiscono immediatamente; corno naturale e corno a valvole convivono; serpentone/oficleide/tuba non sono equivalenti timbrici.
- **Integrità:** 608 nodi, 1520 archi, duplicati nodi 0, archi 0, triplette 0, orfani 0. Flag di verifica indipendente 379; gate `riscontro_storico_indipendente` 343. Proposte editoriali residue 32; sospensioni 125; trattazioni strumentali 31; richiami 102.
- **QA:** verificati struttura del JSON, copertura consecutiva degli ID e assenza di nodi orfani o triplette duplicate; nessun collaudo grafico reale su Android/desktop. L'interfaccia, i capitoli e il protocollo non sono stati modificati. Non è stata implementata sincronizzazione automatica.
- **Continuazione:** la serie numerica storica `E` termina a `E1070`. Prima di assegnare un successivo lotto occorre scegliere un nuovo gruppo **reale** di archi preesistenti da verificare o un intervento distinto di revisione dei percorsi; non inventare `E1071`.

---

## Lotto 137 — 2026-11-08: Polifonia, teoria, forme e sinfonismo: confronti senza discendenze presunte

**Seconda passata:** ogni rapporto è stato riclassificato come **H** (riscontro esterno circoscritto) o **C** (confronto editoriale non causale). I confronti restano accessibili al primo livello ma non diventano trampolini storici nei livelli II–V.

| Arco | Esito | Giudizio storico-filologico |
| --- | --- | --- |
| `E0924` | **C — confronto non causale** | Polifonia e madrigale hanno repertori connessi ma nessuna equivalenza di genere. |
| `E0925` | **C — confronto non causale** | La policoralità veneziana usa la distribuzione spaziale, non inventa tutte le tecniche orchestrali successive. |
| `E0926` | **C — confronto non causale** | Quadrivium e storia della tonalità richiedono comparazione delle teorie, non un unico schema. |
| `E0927` | **C — confronto non causale** | Il continuo può sostenere il recitar cantando; non è condizione universale dell'espressione scenica. |
| `E0928` | **C — confronto non causale** | La sonata come genere e la forma-sonata come principio analitico hanno storie e funzioni distinte. |
| `E0929` | **C — confronto non causale** | Concerto, concertino e insieme orchestrale sono termini e pratiche contestuali. |
| `E0930` | **C — confronto non causale** | Fuga e imitazione sono pratiche contrappuntistiche; evitare una definizione atemporale. |
| `E0931` | **C — confronto non causale** | Il dibattito sulla musica assoluta è successivo a molte pratiche sinfoniche. |
| `E0932` | **C — confronto non causale** | Sinfonia programmatica e musica a programma si intersecano in opere circoscritte. |

### Fonti per gli archi H
- Non applicabile: in questo lotto soltanto confronti dichiaratamente editoriali.

**Bilancio:** 9 archi; 0 riscontri indipendenti circoscritti; 9 confronti non causali.

---

## Lotto 138 — 2026-11-08: Recitativo, aria, belcanto, leitmotiv e politica del teatro

**Seconda passata:** ogni rapporto è stato riclassificato come **H** (riscontro esterno circoscritto) o **C** (confronto editoriale non causale). I confronti restano accessibili al primo livello ma non diventano trampolini storici nei livelli II–V.

| Arco | Esito | Giudizio storico-filologico |
| --- | --- | --- |
| `E0935` | **H — riscontro indipendente** | L'opera impiega il recitativo in repertori storicamente documentati per declamare e far procedere l'azione, con accompagnamenti diversi; non è obbligatorio in ogni opera. |
| `E0936` | **H — riscontro indipendente** | Arie solistiche compaiono in molti repertori operistici; cavatina, cabaletta, cantabile e romanza non designano un'unica forma universale. |
| `E0937` | **H — riscontro indipendente** | Recitativo e aria possono articolare rispettivamente avanzamento della narrazione e sosta espressiva: prassi documentata in opere storiche, non schema valido per tutta l'opera. |
| `E0939` | **C — confronto non causale** | Parola di libretto e declamazione sono comparabili ma occorre analisi d'opera. |
| `E0941` | **C — confronto non causale** | La solita forma non descrive tutto il belcanto. |
| `E0942` | **C — confronto non causale** | Non ogni opera fantastica adotta il motivo conduttore wagneriano. |
| `E0943` | **C — confronto non causale** | La ricorrenza tematica filmica non implica un'unica derivazione da Wagner. |
| `E0945` | **C — confronto non causale** | Poesia civile e canto politico si incontrano in inni specifici. |
| `E0946` | **C — confronto non causale** | Pratiche civiche vocali e bandistiche variano per organico e circostanza. |
| `E0947` | **C — confronto non causale** | Danza e opera convivono in alcuni allestimenti senza equivalere come generi. |

### Fonti per gli archi H
- https://www.metopera.org/discover/education/educator-guides/agrippina/10-essential-musical-terms/
- https://www.metopera.org/discover/education/educator-guides/medea/10-essential-opera-terms/

**Bilancio:** 10 archi; 3 riscontri indipendenti circoscritti; 7 confronti non causali.

---

## Lotto 139 — 2026-11-08: Balletto, operetta, musical, animazione e cinema sonoro

**Seconda passata:** ogni rapporto è stato riclassificato come **H** (riscontro esterno circoscritto) o **C** (confronto editoriale non causale). I confronti restano accessibili al primo livello ma non diventano trampolini storici nei livelli II–V.

| Arco | Esito | Giudizio storico-filologico |
| --- | --- | --- |
| `E0949` | **H — riscontro indipendente** | Noverre e la riforma settecentesca del ballet d'action sviluppano pantomima e azione scenica autonoma; un episodio fondamentale, non l'origine unica del balletto. |
| `E0950` | **C — confronto non causale** | I Ballets Russes sono caso di collaborazione artistica, non la fonte unica dell'avanguardia. |
| `E0952` | **C — confronto non causale** | L'operetta può parodiare l'opera, senza diventare opera in ogni manifestazione. |
| `E0953` | **C — confronto non causale** | Operetta e varietà condividono contesti ma hanno grammatiche distinte. |
| `E0956` | **C — confronto non causale** | Il jazz contribuisce alla storia dei musical senza renderli necessariamente improvvisati. |
| `E0958` | **H — riscontro indipendente** | Nel musical cinematografico coreografia, inquadrature e montaggio possono produrre figure impossibili sul palcoscenico, come nei numeri di Busby Berkeley; non tutti i film musicali derivano da spettacoli teatrali. |
| `E0960` | **H — riscontro indipendente** | Le tecnologie del cinema sonoro rendono riproducibile e montabile la sincronizzazione registrata fra musica e immagini, senza inventare la composizione per film, già attestata nell'epoca muta. |
| `E0961` | **H — riscontro indipendente** | Il Mickey Mousing designa la corrispondenza puntuale fra gesto animato ed evento musicale o sonoro, attestata dalla Library of Congress; è una tecnica possibile, non sinonimo di animazione. |

### Fonti per gli archi H
- https://www.operadeparis.fr/en/about/history/jean-georges-noverre-1727-1810
- https://www.bfi.org.uk/sight-and-sound/features/all-that-glitters-restless-art-movie-musical
- https://www.bfi.org.uk/features/all-about-film-sound-how-we-restore-it
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/
- https://loc.gov/exhibits/music-and-animation/about.html

**Bilancio:** 8 archi; 4 riscontri indipendenti circoscritti; 4 confronti non causali.

---

## Lotto 140 — 2026-11-08: Musica cinematografica, diegesi, registrazione e riuso

**Seconda passata:** ogni rapporto è stato riclassificato come **H** (riscontro esterno circoscritto) o **C** (confronto editoriale non causale). I confronti restano accessibili al primo livello ma non diventano trampolini storici nei livelli II–V.

| Arco | Esito | Giudizio storico-filologico |
| --- | --- | --- |
| `E0963` | **C — confronto non causale** | Diegesi e extradiegesi sono categorie della collocazione narrativa del suono. |
| `E0964` | **C — confronto non causale** | Empatia e anempatia sono modi analitici d'interpretare un film, non generi musicali. |
| `E0965` | **H — riscontro indipendente** | L'accompagnamento cinematografico ha documentati impieghi sia di musiche originali sia di repertori preesistenti: distinguere singole partiture, arrangiamenti, interpretazioni e colonne sonore. |
| `E0967` | **H — riscontro indipendente** | La registrazione e la riproduzione sonora contribuirono alla sincronizzazione fra pellicola e suono registrato; il cinema sonoro ha però tecnologie e pratiche proprie, non coincide con il fonografo. |
| `E0968` | **C — confronto non causale** | Trascrizione, registrazione e riuso non sono fasi obbligate di un processo. |

### Fonti per gli archi H
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/a-warming-flame/
- https://www.loc.gov/collections/silent-film-scores-and-arrangements/articles-and-essays/photoplay-albums-for-silent-film-scores/
- https://www.bfi.org.uk/features/all-about-film-sound-how-we-restore-it

**Bilancio:** 5 archi; 2 riscontri indipendenti circoscritti; 3 confronti non causali.

---

### Bilancio seconda passata e correzione della propagazione II–V

- **32 proposte originali riesaminate** in quattro lotti: **9 verifiche indipendenti circoscritte**, **23 confronti editoriali dichiaratamente non causali**, **0 proposte editoriali revisionate senza decisione** in questa specifica serie. I 23 confronti NON sono verifiche storiche indipendenti.
- **Sospensioni confermate senza alterazioni: 125**. Classificazione dei loro estremi: capitolo 101; altri 23; capitolo_dest 1. Con filtri ordinari non entrano nella navigazione. Le sospensioni non sono state arbitrariamente promosse.
- **Correzione interfaccia:** lo stato iniziale e il reset dell'esploratore attivano solo `trattazione` e `menzione`, conformemente ai controlli visibili; `ipotesi`, `navigazione` e `sospeso` sono disattivati finché l'utente non li seleziona.
- **Correzione della transitività:** ai livelli II–V un collegamento può espandersi solo se di classe `trattazione` e se il nodo intermedio è una persona o un'opera/produzione concreta. I nodi di senso concettuali non fanno da ponti fra loro. Confronti, proposte, sospensioni e rimandi editoriali rimangono visibili al I livello se il filtro è acceso, ma non propagano vicinanze storiche.
- **Cautela interpretativa:** un percorso di più archi non equivale automaticamente a una relazione storica diretta tra i suoi estremi; il visualizzatore mostra catene documentate, non una prova di influenza transitiva.
- **Integrità JSON:** 608 nodi, 1520 archi, ID duplicati 0, orfani 0, triplette duplicate 0. Flag indipendenti 388; gate `riscontro_storico_indipendente` 352; sospensioni 125.
- **Limiti QA:** test statici del codice e del JSON; il comportamento visivo reale deve ancora essere provato manualmente su desktop/Android. Nessuna modifica ai capitoli e nessuna sincronizzazione automatica aggiunta.
- **Passo successivo:** prova visiva della rete focalizzata su Mozart, Beethoven, Verdi e capitoli-ponte; eventualmente terza passata delle sospensioni più rilevanti con riscontri di pagina e fonti puntuali, non riattivazione massiva.

---

## Lotto 141 — 2026-11-08: Mozart e Da Ponte: Così fan tutte, opera assente nel grafo

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L141-A01` | **H — verifica indipendente** | Mozart compone la musica di Così fan tutte, rappresentata il 26 gennaio 1790 a Vienna; il titolo è distinto da Figaro e Don Giovanni. |
| `L141-A02` | **H — verifica indipendente** | Lorenzo Da Ponte scrive il libretto originale di Così fan tutte: terza collaborazione operistica completa con Mozart. |

### Fonti indipendenti
- https://corago.unibo.it/opera/Z000003863

**Bilancio:** 2 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 142 — 2026-11-08: Il flauto magico: il ruolo distinto di Schikaneder

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L142-A01` | **H — verifica indipendente** | Emanuel Schikaneder scrive il libretto tedesco del Flauto magico (1791), distinto dalla musica di Mozart. |
| `L142-A02` | **H — verifica indipendente** | Schikaneder interpreta Papageno nella prima produzione viennese del 1791; libretto e interpretazione sono due responsabilità diverse. |

### Fonti indipendenti
- https://www.metopera.org/discover/education/educator-guides/the-magic-flute/the-operas-plot-and-creation/
- https://www.metopera.org/discover/synopses/the-magic-flute/

**Bilancio:** 2 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 143 — 2026-11-08: I quartetti di Mozart e la dedica a Haydn

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L143-A01` | **H — verifica indipendente** | Mozart compone i sei quartetti K. 387, 421, 428, 458, 464 e 465, pubblicati insieme nel 1785. |
| `L143-A02` | **H — verifica indipendente** | L'edizione Artaria del 1785 dedica esplicitamente i sei quartetti a Joseph Haydn: omaggio documentato, non rapporto didattico Mozart–Haydn. |

### Fonti indipendenti
- https://kv.mozarteum.at/en/work/quartet-in-c-5528
- https://searcharchives.bl.uk/catalog/040-002054175

**Bilancio:** 2 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 144 — 2026-11-08: Mozart e Clementi: confronto pianistico attestato nel 1781

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L144-A01` | **H — verifica indipendente** | Mozart partecipa all'esibizione pianistica con Clementi alla corte di Giuseppe II il 24 dicembre 1781; i resoconti sulla 'vittoria' sono da distinguere dalle testimonianze contemporanee. |
| `L144-A02` | **H — verifica indipendente** | Clementi si esibisce nella medesima occasione a Vienna; non si deduce da questo incontro una relazione maestro–allievo. |
| `L144-A03` | **H — verifica indipendente** | Mozart e Clementi sono documentati nello stesso confronto musicale del 24 dicembre 1781: contatto effettivo, non genealogia musicale. |

### Fonti indipendenti
- https://www.mozartdocuments.org/documents/24-december-1781/

**Bilancio:** 3 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 145 — 2026-11-08: Beethoven e Haydn: insegnamento e dedica delle Sonate op. 2

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L145-A01` | **H — verifica indipendente** | Haydn impartisce lezioni di composizione a Beethoven a Vienna dalla fine del 1792 all'inizio del 1794; il rapporto pedagogico non implica identità stilistica. |
| `L145-A02` | **H — verifica indipendente** | Beethoven compone le tre sonate per pianoforte op. 2 nel 1794–1795, pubblicate nel 1796. |
| `L145-A03` | **H — verifica indipendente** | Le tre Sonate op. 2 di Beethoven sono dedicate a Haydn, suo maestro negli anni precedenti. |

### Fonti indipendenti
- https://www.beethoven.de/en/media/view/5294665553149952
- https://www.beethoven.de/en/work/view/6583658152460288/Drei%2BSonaten%2Bf%C3%BCr%2BKlavier%2B%26%23040%3Bf-Moll%2C%2BA-Dur%2C%2BC-Dur%26%23041%3B%2Bop.%2B2

**Bilancio:** 3 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 146 — 2026-11-08: Robert e Clara Schumann con Brahms: sostegno professionale documentato

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L146-A01` | **H — verifica indipendente** | Robert Schumann conosce Brahms nel 1853 e ne promuove pubblicamente il talento; il rapporto è documentato, non un'influenza stilistica estesa per presunzione. |
| `L146-A02` | **H — verifica indipendente** | Clara Schumann esegue e sostiene pubblicamente musiche di Brahms, mantenendo con lui un lungo confronto professionale documentato. |

### Fonti indipendenti
- https://www.cambridge.org/core/books/abs/clara-and-robert-schumann-in-context/johannes-brahms/0ABDC367E5F3F2A0F4F5EAF634CDCF87
- https://www.cambridge.org/core/books/abs/brahms-in-context/germany/B24973028403FF41A630A80AE2F61C60

**Bilancio:** 2 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 147 — 2026-11-08: Liszt, Chopin, Wagner e Brahms: incontri e testimonianze precise

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L147-A01` | **H — verifica indipendente** | Liszt e Chopin si conoscono nella Parigi degli anni Trenta; Liszt pubblica un libro su Chopin dopo la sua morte. Non erano necessariamente amici intimi. |
| `L147-A02` | **H — verifica indipendente** | Liszt è amico e sostenitore di Wagner; Cosima, figlia di Liszt, sposa Wagner nel 1870. L'arco registra rapporto personale, non coincidenza artistica. |
| `L147-A03` | **H — verifica indipendente** | Nel viaggio del 1853 Brahms presenta sue composizioni anche a Liszt; l'incontro attestato non dimostra adesione alla poetica lisztiana. |

### Fonti indipendenti
- https://musiclib-exhibits.library.yale.edu/exhibits/chopin/liszt_life_of_chopin.html
- https://www.metopera.org/discover/education/educator-guides/der-fliegende-hollander/the-operas-plot-creation
- https://www.cambridge.org/core/books/abs/brahms-in-context/germany/B24973028403FF41A630A80AE2F61C60

**Bilancio:** 3 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 148 — 2026-11-08: Berlioz–Liszt–Schumann: la trascrizione della Symphonie fantastique

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L148-A01` | **H — verifica indipendente** | Liszt trascrive per pianoforte la Symphonie fantastique di Berlioz; prima edizione Schlesinger del 1834, distinto dall'originale orchestrale. |
| `L148-A02` | **H — verifica indipendente** | La versione pianistica di Liszt rielabora una composizione di Berlioz del 1830, non è una seconda sinfonia autonoma. |
| `L148-A03` | **H — verifica indipendente** | Schumann utilizza la trascrizione di Liszt nello studio della Symphonie fantastique per la propria recensione: ruolo della circolazione pianistica. |

### Fonti indipendenti
- https://catalogue.bnf.fr/ark%3A/12148/cb42847439s
- https://guides.library.yale.edu/c.php?g=1091796&p=7962377

**Bilancio:** 3 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 149 — 2026-11-08: Les Sylphides: Chopin preesistente, Fokine e Ballets Russes

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L149-A01` | **H — verifica indipendente** | Michel Fokine firma la coreografia di Les Sylphides nella versione presentata dai Ballets Russes a Parigi nel 1909. |
| `L149-A02` | **H — verifica indipendente** | Les Sylphides utilizza brani per pianoforte di Chopin orchestrati e adattati successivamente; Chopin non compose il balletto del 1909. |
| `L149-A03` | **H — verifica indipendente** | I Ballets Russes di Diaghilev presentano Les Sylphides al Théâtre du Châtelet nel giugno 1909. |
| `L149-A04` | **H — verifica indipendente** | Stravinskij è fra gli orchestratori di brani chopiniani impiegati nella produzione; non ne compose la musica originale né orchestrò tutto il balletto. |

### Fonti indipendenti
- https://www.loc.gov/collections/ballets-russes-de-serge-diaghilev/articles-and-essays/works-listing-by-title/l/
- https://catalogue.bnf.fr/ark%3A/12148/cb396845777

**Bilancio:** 4 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

## Lotto 150 — 2026-11-08: Cinema: tre casi di attribuzione musica-regia senza ponti generici

**Metodo:** aggiunte soltanto relazioni concrete e verificabili. Persone, opere, versioni ed eventi hanno identità separate. Le affinità stilistiche non vengono scambiate per genealogie; gli archi di competizione ed esecuzione sono distinti da quelli di composizione.

| Arco | Riscontro | Precisazione storica |
| --- | --- | --- |
| `L150-A01` | **H — verifica indipendente** | Max Steiner compone la partitura originale di King Kong (1933), distinta dagli effetti sonori e dai materiali musicali eventualmente riusati. |
| `L150-A02` | **H — verifica indipendente** | Nino Rota firma le musiche del film La strada (1954), come documentato nei crediti. |
| `L150-A03` | **H — verifica indipendente** | Federico Fellini dirige La strada (1954), con musiche di Nino Rota: ruoli distinti. |
| `L150-A04` | **H — verifica indipendente** | John Williams compone la colonna sonora originale di Jaws (Lo squalo, 1975). |
| `L150-A05` | **H — verifica indipendente** | Steven Spielberg dirige Jaws (1975); la collaborazione regista–compositore è rappresentata tramite questo film concreto. |

### Fonti indipendenti
- https://www.loc.gov/item/89716156/
- https://catalog.afi.com/Film/4005-KING-KONG?cxt=filmography
- https://www.cinematografo.it/film/la-strada-lfxaouri
- https://catalog.afi.com/Catalog/moviedetails/55193
- https://www.afi.com/news/jaws-afi-movie-club/

**Bilancio:** 5 nuovi archi con fonte esplicita; tutti verificati su identità e verbo della relazione, non su analogie tematiche.

---

### Bilancio della ripresa 141–150

- **10 nuovi nodi e 29 nuovi archi, tutti con almeno una fonte esterna identificata**; nessuna sostituzione o modifica ai 1.520 archi precedenti.
- **Integrità:** nodi 618, archi 1549, duplicati nodo 0, duplicati arco 0, triplette duplicate 0, orfani 0. Relazioni sospese 125; flag di riscontro storico indipendente 417; gate indipendenti 381.
- **Casi fondamentali:** Così fan tutte: Mozart compone, Da Ponte scrive. Flauto magico: Schikaneder scrive e interpreta Papageno. Mozart/Clementi: documentato confronto di corte, non maestro-allievo. Haydn/Beethoven: insegnamento accertato. Les Sylphides: Chopin musiche preesistenti, Fokine coreografia, Stravinskij orchestrazione parziale. Film: attribuzioni a partiture originali e regie specifiche.
- **Controllo BFS dati I–V (filtro predefinito, non sessione grafica reale):**

| Nodo focale | Prima I–V | Dopo I–V |
| --- | --- | --- |
| Wolfgang Amadeus Mozart | 13 / 17 / 18 / 18 / 18 | 17 / 23 / 26 / 35 / 52 |
| Ludwig van Beethoven | 17 / 34 / 41 / 41 / 41 | 19 / 37 / 45 / 52 / 57 |
| Giuseppe Verdi | 22 / 36 / 45 / 49 / 50 | 22 / 36 / 45 / 49 / 50 |
| Johannes Brahms | 1 / 1 / 1 / 1 / 1 | 4 / 8 / 16 / 20 / 29 |
| Fryderyk Chopin | 2 / 2 / 2 / 2 / 2 | 4 / 10 / 27 / 42 / 55 |
| Franz Liszt | 4 / 4 / 4 / 4 / 4 | 8 / 18 / 22 / 31 / 46 |
| Rinascimento | 59 / 69 / 74 / 76 / 76 | 59 / 69 / 74 / 76 / 76 |
| Romanticismo | 99 / 162 / 210 / 239 / 255 | 99 / 169 / 220 / 249 / 264 |
| Il balletto | 74 / 136 / 182 / 214 / 225 | 74 / 142 / 195 / 230 / 240 |
| Dall’operetta a Broadway | 44 / 48 / 56 / 58 / 58 | 44 / 48 / 56 / 58 / 59 |

- **Limite metodologico:** il percorso di profondità V indica raggiungibilità all'interno delle sole relazioni consentite, non influenza transitiva. I nuovi nodi d'opera possono rendere documentabili percorsi composti, ma non promuovono automaticamente nodi concettuali o capitoli a mediatori storici.
- **Non modificati:** capitoli didattici, index.html dell'esploratore, protocollo, mappe di fine capitolo. Nessuna sincronizzazione automatica introdotta.
- **Da verificare con browser reale:** rotazione ed etichette in 3D e fallback canvas Android; qui test solo strutturali e simulazione semantica del percorso.
- **Prossimo controllo:** cercare archi sospesi per falso negativo solo quando il capitolo o la fonte primaria attesta davvero la relazione; non riattivare per estensione tematica.
