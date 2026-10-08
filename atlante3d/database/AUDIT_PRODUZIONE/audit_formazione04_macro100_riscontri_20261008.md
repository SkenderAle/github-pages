# MUSURGIA MUNDI — Audit formazione 04 · tre verifiche e cautele bibliografiche

Data: 8 ottobre 2026. Ramo `audit-produzione-correttivo-01`. Base `415d5a04a7c0478f027cbb0d969992f787196a46`. Commit di aggiornamento database `ecfdce8dbcad268c9f173680d042388fc90baeec`.

## Esito
Tre record del gruppo `formazione` aggiornati, conservando identificativo, source, target, group e l'intero pregresso delle fonti. Nessuna creazione o rimozione di relazioni; `relazioni.json` resta a 1280 record. Nessuna modifica a grafo o interfaccia, nessun intervento su `main`.

### 1. `lotto05-gasparini-marcello`
Il rapporto è attestato in più fonti. La sintesi Treccani definisce Gasparini insegnante di violino, mentre la voce di Benedetto Marcello nel Dizionario Biografico degli Italiani mette in evidenza Gasparini quale guida della formazione musicale e compositiva. La specificazione esclusiva dello strumento è pertanto trattata come variante bibliografica da approfondire, non come dato unanimemente acquisito. `status` conservato.
- https://www.treccani.it/enciclopedia/benedetto-marcello/
- https://www.treccani.it/enciclopedia/benedetto-giacomo-marcello_%28Dizionario-Biografico%29/

### 2. `lotto05-lotti-marcello`
Treccani, sintesi, riferisce la formazione compositiva con Lotti, mentre la voce DBI di Marcello non la esplicita e la ricostruzione DMI segnala dubbi circa questo rapporto. Cambiato `status` da `documentato` a `documentato-con-cautela`. Il pamphlet critico di Marcello rivolto a Lotti circa 1716 non consente da solo di decidere circa la docenza precedente. Sono preservate le fonti in origine associate al record.
- https://www.treccani.it/enciclopedia/benedetto-marcello/
- https://www.treccani.it/enciclopedia/benedetto-giacomo-marcello_%28Dizionario-Biografico%29/
- https://www.dmi.it/dizionario/pagine/000316_Marcello_Benedetto.html

### 3. `audit26-jommelli-cannabich-formazione`
La biografia Artaria Editions attesta specificamente un periodo di lezioni presso Jommelli a Roma a partire dall'autunno 1750, con prosecuzione nel contesto di Stoccarda. L'evidenza chiarisce la precedente incertezza fra soggiorno concomitante e insegnamento. `status` conservato `documentato`; rimane aperta la ricerca dei registri/epistolari e dei dettagli disciplinari.
- https://www.artaria.com/pages/cannabich-christian-1731-1798
- https://www.allmusic.com/artist/mn0001208387

## Criteri
Una fonte biografica generale non prova ogni dettaglio di un rapporto, e l'assenza di un nome in una biografia non è una confutazione. Le denominazioni divergenti sono esplicitate anziché appiattite. Non sommare questo lotto a quelli precedenti come se gli archi esaminati fossero necessariamente tutti nuovi.

## Coda
Proseguire il controllo delle restanti relazioni di formazione incidenti sul macro100, prioritariamente quelle documentate soltanto da fonte biografica generica o che mescolano didattica, parentela, influenza e ruolo istituzionale. Dopo la formazione, esaminare sistematicamente influenze, collaborazioni, genealogie e scuole.
