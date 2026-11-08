# Musurgia Atlantis — Fase 2B: triage delle identità e convalida degli alias
**Data:** 8 novembre 2026 · **Ambito:** solo audit/staging, branch `main` · **Produzione:** invariata.

## Esito del controllo meccanico completo
File: `VERIFICA_FORMALE_IDENTITA_2026-11-08.json`.
- 509/509 record sorgente analizzati: 409 compositori, 100 altre persone.
- 155 candidati con etichetta normalizzata coincidente; **non equivalgono ancora a identità biografiche certificate**.
- 3 candidati tramite alias esplicito; esaminati in una verifica separata con fonti d'autorità.
- 351 privi di corrispondenza preliminare: **da importare tutti**, previa ricerca di ulteriori alias; nessuna esclusione.
- Zero duplicati negli ID sorgente, zero duplicati di nomi sorgente normalizzati, zero collisioni sul medesimo target Atlantis nella mappatura preliminare.
- Zero incongruenze fra i 155 match di nome e le etichette normalizzate; zero alias privi di dichiarazione nel payload originale.
- Due ID legacy con prefisso `compositore-` hanno tipo effettivo `persona`: `compositore-ottaviano-petrucci` e `compositore-goffredo-mameli`. Il tipo semantico prevale sempre sul prefisso.

**Limite dell'esito:** queste sono prove d'integrità di staging e di matching testuale, NON prove storiche dell'identità. Nessuna delle 155 coppie nominali è promossa automaticamente a identità certificata.

## Convalida storica delle tre varianti
File: `CONVALIDA_ALIAS_2026-11-08.json`. Le seguenti **tre coppie di nomi** sono supportate da fonti pubbliche e autorevoli; non sono ancora stati fusi i relativi nodi.

1. `compositore-guillaume-dufay` = `pers:dufay`. Varianti Guillaume Dufay / Guillaume Du Fay. Fonte d'autorità GND tramite Klassik Stiftung Weimar: https://goethe.klassik-stiftung.de/de/objekt/gnd/118527924/ ; biografia Cambridge: https://www.cambridge.org/core/books/guillaume-du-fay/C1FA92429F59A808EE02AE69BC1D76AE
2. `compositore-frederic-chopin` = `pers:chopin`. Varianti Frédéric / Fryderyk Chopin. Staatsoper biografia: https://www.staatsoper.de/en/biographies/chopin-frederic ; Narodowy Instytut Fryderyka Chopina: https://chopin.nifc.pl/en/chopin/osoba/1_chopin_fryderyk
3. `compositore-sergej-kusevickij` = `pers:serge-koussevitzky`. Varianti Sergej Kusevickij / Serge Koussevitzky. Brockhaus esplicita l'equivalenza: https://brockhaus.de/ecs/julex/article/koussevitzky-serge-alexandrowitsch ; Treccani: https://www.treccani.it/enciclopedia/sergej-aleksandrovic-kusevickij/ ; Library of Congress: https://www.loc.gov/collections/serge-koussevitzky-archive/about-this-collection/

Le tre decisioni certificano **corrispondenza d'identità**, non autorizzano l'unione automatica dei record né la promozione a verificati degli archi associati. Provenienze, ruoli, metadati e relazioni restano separati fino al merge controllato.

## Quadro attuale
- 3 coppie alias convalidate; **155** candidati nominali da verificare storicamente; **351** nuovi possibili inserimenti da verificare rispetto al corpus completo.
- 7 collisioni `capitolo ↔ epoca/ambito` risolte con `keep_distinct`.
- 4 corrispondenze di concetti ancora da valutare: dramma giocoso, opera buffa, opera seria, quartetto d'archi.
- Restano da convalidare le equivalenze semantiche e gli eventuali conflitti biografici rispetto al payload completo di `musurgia-atlantis/grafo.json` prima di autorizzare qualsiasi fusione.

## Vincoli e prossimi passaggi
1. Trattare il file di triage come snapshot meccanico, e `CONVALIDA_ALIAS` come overlay di decisioni storiche successivo. Nessuna fusione per similarità di stringhe.
2. Confrontare le 155 coppie nominali con i metadati delle **due** basi (alias, varianti, cronologia, ruolo, opere, fonti); registrare eventuali discordanti o omonimi.
3. Cercare varianti aggiuntive per i 351 record senza candidato e catalogare tutte le nuove entità.
4. Preservare 2.437 archi sorgente, 1.389 relazioni specialistiche direzionali e 30 dell'estensione, confrontandoli con i 1.718 Atlantis; **non** sommare senza deduplicazione e non interpretare come verifica storica le frasi automatiche.
5. Generare in staging le frasi `forward`/`reverse` finali comprensive delle eccezioni di `relationSentence`; testare Mozart→Leopold, la pertinenza radicata I–V, le spiegazioni mouse-over e le schede tap.
6. Tenere **tutti i capitoli esclusivamente nell'interfaccia editoriale**, mai come nodi attraversabili del grafo storico-musicale.

**File pubblici di produzione non modificati:** `musurgia-atlantis/grafo.json`, `index.html`, `compat-graph.js`, e l'Atlante originale.
