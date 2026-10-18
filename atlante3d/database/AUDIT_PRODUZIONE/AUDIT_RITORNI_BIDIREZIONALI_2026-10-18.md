# Audit di consolidamento — ritorni, percorsi e fonti · 18 ottobre 2026

## Perimetro e versione
Branch: `main`. Base prima di questo lotto: `8f2c0f942c1f90b294bd368a8e3ca41b85db44b2` (include il ritorno al paragrafo «Vivaldi prima delle Stagioni», `#vivaldi`). Unico audit attivo: consolidamento strutturale e relazionale.

## A — Link individuali e direzione inversa
- Il controllo originario (`dd2c8398`) comprendeva **84** rimandi puntuali in 13 pagine: 62 ancore in intestazioni, 21 rimandi testuali espliciti, 1 raccordo narrativo (Astor Piazzolla).
- Dopo la correzione Vivaldi (`8f2c0f9`): **85** rimandi individuali su 13 pagine. Destinazioni HTML individuate **85/85**; pagine con caricamento dello script `shared/atlas-anchor-arrival-v1.js`: **13/13**.
- **62** ancore `span#mm-autore-...` in effettive intestazioni H1–H6, prive di ritorno statico duplicato: lo script le intercetta e aggiunge `Nell’Atlante ↗` verso `?n=ID`. Verificato il percorso **nel codice**, non il DOM eseguito nel browser.
- **21** ancore testuali `a#mm-autore-...` o `p#mm-autore-...`: ritorno esplicito a `../atlante3d/?n=ID` nella pagina. Non applicare loro lo script delle intestazioni: creerebbe doppioni.
- **Astor Piazzolla**: `div#mm-autore-compositore-astor-piazzolla`, con rimando a Musurgia nel testo; normalizzato il campo `page` al percorso tecnico `post-romanticismo` (etichetta divulgativa già fornita da `title`).
- **Antonio Vivaldi**: `section#vivaldi`, con badge di rinvio a Musurgia nel titolo tramite ponte editoriale già operante. Da Musurgia ora il link `../barocco/#vivaldi` ritorna al punto corretto. Resta anche il diverso raccordo sulle *Quattro stagioni*.
- Nessuna delle 85 ancore individuali esaminate è assente; nessun ID duplicato rilevato nelle rispettive pagine.
- **Limite della verifica**: non è stato possibile eseguire uno smoke test reale del browser pubblico, né su desktop né su mobile; verificare dopo la pubblicazione script asincroni, focus da tastiera, scroll sotto menu sticky, doppioni creati al runtime e tasto Indietro.

## Allargamento: 498 link editoriali complessivi
- **498** rimandi in `collegamenti-sito.json`, nessun URL ripetuto all'interno della stessa scheda.
- **303** destinazioni con ID statico presente nell'HTML.
- **195** destinazioni con ancora costruita via JavaScript: **56** schede dell'audioteca sinfonica (`article.id = w.id`), **75** opere di musica da camera e **64** opere vocali (slug stabili calcolati dal ponte condiviso).
- Questi 195 casi **non sono da dichiarare mancanti** solo perché l'ID non compare nell'HTML iniziale: occorre testare il DOM dopo il rendering, i filtri di catalogo e il salto diretto a un hash caricato dall'esterno.

## B — Fonti delle relazioni
- `relazioni.json`: **1.360** record, di cui **1.349** con stato esatto `documentato`, **7** con stati documentati ma qualificati e **4** `pendingReview`.
- Tutti i 1.360 record hanno almeno un URL in `sources`; **1.685** citazioni complessive, **1.048** indirizzi distinti. Verifica formale: **0** URL malformati e **0** URL non HTTPS. Questo **non significa** che siano stati collaudati tutti gli HTTP.
- L'interfaccia mostra nelle lenti solo le relazioni con `status === "documentato"`, estremi esistenti e fonti presenti: i quattro `pendingReview` non vengono promossi a relazioni certe; le sette formulazioni caute non sono visualizzate come definitive.
- Il lemma generico Treccani `/enciclopedia/opera/` è riutilizzato in **21** relazioni. La pagina tratta diversi nomi e correnti, ma va ancora verificata **relazione per relazione** la portata della prova, privilegiando dove necessario voci individuali.
- Controlli campionari esterni: `treccani.it/enciclopedia/opera/`, `museoricordi.it/en/`, `treccani.it/enciclopedia/wilhelm-richard-wagner/` accessibili; la pagina Museo Ricordi contiene effettivamente il riferimento alla mediazione Ricordi–Verdi–Boito e al sostegno a Puccini, pur essendo una pagina generale.
- `https://www.bruckner-online.at/?page_id=451`: il servizio di consultazione esterno ha restituito **redirect loop**; verificare manualmente prima di sostituire. Non dichiarato definitivamente rotto.
- Nessun collegamento esterno è stato sostituito sulla base di una semplice supposizione.

## C — Consultazione enciclopedica
- Prima del lotto: **40/478** persone/compositori con voce in `consultazione.entries`. La presenza eventuale di altre fonti nei nodi o nelle relazioni è distinta da questo indicatore.
- Aggiunte **21** schede individuali Treccani verificate, fra cui Vivaldi (Michael Talbot, Dizionario Biografico), Corelli, Palestrina, Mozart, Haydn, Beethoven, Schubert, Chopin, Liszt, Brahms, Verdi, Wagner, Puccini, Čajkovskij, Debussy, Mahler, Bruckner, Dvořák, Stravinskij, Bartók e Ravel.
- Copertura di `consultazione.entries` dopo il lotto: **61/478**. Non sono stati creati collegamenti a homepage o risultati di ricerca.
- **Non** è stata aggiunta alcuna relazione storica, ascolto o biografia fittizia.

## D — Integrità del grafo
- **811** nodi: 385 compositori, 93 altre persone, 333 nodi categoriali; **1.142** archi del grafo di base.
- Gli estremi di tutte le **1.360** relazioni specialistiche esistono fra gli 811 nodi: **0** ID orfani.
- **26** compositori/persone non hanno ancora relazioni specialistiche visibili confermate; **123** persone/compositori non hanno archi nel solo grafo **di base** (il grafo di base è distinto dalle lenti specialistiche). Non forzare nuove relazioni per eliminare i nodi isolati.
- Le navigazioni editoriali non equivalgono a legami storici. La precedente copertura di fallback **478/478** non viene scambiata per una copertura biografica né per un grafo relazionale completo.

## Prossimo lotto prioritario
1. Smoke test vero del DOM e dei 195 hash creati dinamicamente, soprattutto al caricamento diretto, con tastiera e menu sticky su mobile.
2. Verifica HTTP e pertinenza delle fonti per un blocco ad alta priorità, comprendente il redirect di Bruckner e gli usi del lemma generale «opera».
3. Continuare per altri gruppi la consultazione individuale, senza aggiungere URL non trovati o non pertinenti.
4. Cercare relazioni reali documentate per i 26 autori privi di legami specialistici confermati; conservare `pendingReview` finché non emerge una prova.

*Audit riproducibile da dati e sorgenti; la prova HTTP universale e il collaudo browser restano aperti, non spacciati per completati.*

## Lotto successivo — integrità delle 195 ancore dinamiche e nuove relazioni
- Cross-check automatico sulla stessa funzione di generazione degli slug del sito: **75/75** rimandi a schede da camera presenti fra **255** opere, **64/64** rimandi vocali presenti fra **97** opere, **56/56** rimandi sinfonici presenti fra **103** opere; **nessun duplicato di ID** nei rispettivi tre cataloghi. Totale **195/195** corrispondenze fra database e sorgenti. Questo non certifica ancora lo scroll in un browser dopo il rendering.
- Controllo puntuale del link `#mm-opera-canto-francesca-caccini-chi-desia-di-saper-che-cosa-e-amore`: corretto; l'URL incollato con finale `-amor` era inesatto. Nessuna modifica alla pagina necessaria per questo caso.
- Ricontrollate tramite fonti online tutte le **21** pagine individuali Treccani del lotto precedente: titoli e contenuti corrispondono ai compositori. Le **1.685** citazioni relazionali del censimento precedente restano da verificare filologicamente una per una; non sono state promosse automaticamente.
- Aggiunte **5** nuove voci biografiche individuali: Bottesini (Pironti, DBI), Veracini, Biber, Locatelli e Reichardt. Scott Joplin e Georges Méliès risultavano **già presenti** nel registro di consultazione, quindi nessun doppione. Nuovo indicatore `consultazione.entries`: **66/478**.
- Aggiunte **2 relazioni specialistiche documentate**, distinte per natura: **Verdi ↔ Bottesini** (amicizia, corrispondenza, prima di *Aida* al Cairo e sostegno alla nomina di Parma, DBI di A. Pironti); **Šostakovič ↔ Gubaidulina** (incoraggiamento professionale attestato nel 1959, senza affermare che fossero maestro e allieva). Totale relazioni: **1362**; i quattro `pendingReview` restano inalterati.
- **Locatelli e Corelli**: fonti enciclopediche tradizionali scrivono che Locatelli studiò con Corelli, ma altre ricostruzioni considerano non sicura la frequenza diretta: nessun nuovo arco maestro–allievo finché non sia sciolto il problema documentale.
- Limiti: nessun test browser eseguito; HTML generato e navigazione mobile restano da verificare sul runtime reale. Non confondere validità sintattica, presenza dell'ancora e verifica di navigazione.
