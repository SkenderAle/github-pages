# Lotto 03 — Singolare canonico per generi e forme Flaminio

**Data:** 10 novembre 2026 · **Perimetro:** audit non distruttivo · **Produzione:** invariata.

## Decisione dell'utente
Il lemma canonico di ogni genere/forma deve essere al singolare (Sonate→Sonata; Lieder→Lied; Concerti→Concerto; analogamente gli altri plurali linguisticamente verificati), perché la classificazione riguarda **il brano individuale** e non genericamente una sezione editoriale. Titoli propri, raccolte editoriali e percorsi di catalogo rimangono come oggetti documentari separati e mantengono letteralmente il nome originale.

## Lavoro effettuato
Elaborato l'intero crosswalk del Lotto02 su **1.167** denominazioni uniche della colonna `Genere/Forma` di Flaminio, rappresentative di **51.828** righe con intestazione (altre **322** senza). Applicato un dizionario di **43** varianti plurali esplicite e un vocabolario preliminare di lemmi musicali. Vietata ogni regola generica che sostituisca le desinenze finali `-i/-e` indipendentemente dal senso, poiché altererebbe organici, titoli, nomi propri e sezioni editoriali.

**Conteggi automatici (indicatori sovrapposti, non opere deduplicate):**
- **443** denominazioni contengono almeno una variante plurale riconosciuta, per un totale di **20.689** righe Flaminio;
- **466** denominazioni contengono almeno un lemma musicale candidato nel segmento finale;
- **635** denominazioni classificate in prima approssimazione come intestazioni/percorsi o categorie composite da distinguere; non sono 635 nuovi generi;
- per la copertura del crosswalk: 599 intestazioni/percorsi con lemmi, 36 categorie composite, 267 candidati forma singolare, 265 senza lemma riconosciuto.

**Lemmi esemplari, denominazioni/righe catalografiche coinvolte** (un record può contare in più classi):
| Lemma | Denominazioni | Righe |
|---|---:|---:|
| Lied | 22 | 3.383 |
| Cantata | 46 | 3.064 |
| Aria | 37 | 2.158 |
| Sonata | 44 | 2.035 |
| Mottetto | 27 | 1.470 |
| Corale | 26 | 1.452 |
| Concerto | 62 | 1.422 |
| Sinfonia | 18 | 870 |
| Messa | 17 | 697 |
| Quartetto | 20 | 602 |
| Madrigale | 6 | 495 |

## Cautele semantiche
- `Opere teatrali` è un'intestazione collettiva, non prova del genere `Opera`: non convertirla automaticamente a Opera.
- `Concerti brandeburghesi` è un nome collettivo; BWV 1046–1051 sono sei opere autonome; il lemma generico per ciascuna è `Concerto`.
- `Concerti per violino` mantiene testo originario e organico, ma la forma candidata è `Concerto`.
- `Lieder per voce e pianoforte` mantiene la voce originale e l'organico; lemma `Lied`.
- `Messe` suggerisce `Messa`, ma `Messe di ...` potrebbe indicare raccolta o intestazione, e l'oggetto catalogato va controllato.
- Il riconoscimento lessicale non certifica né l'attribuzione delle opere né l'esistenza di un arco storico; un'opera può avere **più** classificazioni senza coincidere ontologicamente con una raccolta.

## Artefatti locali prodotti (non pubblicati integralmente sul repository)
`CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.csv` e `.json`, 1.167 righe con denominazione originale, frequenza, lemmi candidati, varianti plurali, indicatori di raccolta/percorso e stato della revisione. Il file non è una lista di equivalenze storicamente validate. Il presente documento è il registro di audit pubblicabile.

## Prossimo lotto
1. Verificare i **635** casi di intestazione catalografica o categoria composita, prima dando priorità alle più frequenti.
2. Confrontare tutti i lemmi con l'insieme completo dei vocabolari Mundi/Atlantis, oltre ai 50 termini Checkpoint11; correggere omonimie genere/organico/forma/periodo.
3. Conciliare i casi in cui un lemma compare come componente di un titolo o come nome di raccolta, anziché come vera forma.
4. Dopo revisione, importare opere distinte con ID canonici, atti di provenienza e collegamenti editoriali, mantenendo test di pertinenza radicata.
5. Separatamente: Checkpoint24 archi persona↔persona fermo a 74/233, prossimo blocco da 50.

**Garanzie:** nessuna modifica a `musurgia-atlantis/grafo.json`, `atlante3d/` o interfaccia pubblica. Restano tutelati i 210 lotti storici.
