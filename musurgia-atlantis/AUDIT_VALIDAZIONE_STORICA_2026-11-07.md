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
