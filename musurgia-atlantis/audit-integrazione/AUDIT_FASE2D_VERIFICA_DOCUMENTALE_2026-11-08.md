# Musurgia Atlantis — Fase 2D, prima tranche di verifica documentale
**Data:** 8 novembre 2026 · **Branch:** main · **Ambito:** audit non distruttivo, senza modifiche a grafo o interfaccia pubblici.

## Oggetto e metodo
Si parte dai **155** candidati con nome coincidente nel confronto Fase 2C. Il controllo integra le informazioni già raccolte sul ruolo e riferimenti storici esterni; la concordanza di nome e funzione da sola non basta. Il registro analitico `VERIFICA_DOCUMENTALE_NOMI_FASE2D_2026-11-08.json` copre **155/155** candidati, senza omissioni.

## Esito della tranche
- **16** candidati nominali con riscontro esterno autorevole per identificazione e ruolo: stato `authority_supported_no_merge`.
- **139** candidati nominali rimangono in `pending_independent_historical_review`; nessuna identificazione certificata per automatismo.
- **5** alias già documentati in precedenza rimangono separati da questi conteggi; **349** identità sorgente restano prive di corrispondenza attestata.
- **0 fusioni**. Ogni associazione rimane una proposta di crosswalk non distruttiva.

## Casi particolarmente istruttivi
1. **Ottaviano Petrucci**: è stampatore/editore; il suo ID storico con prefisso `compositore-` non è prova di quel mestiere. Il Dizionario Biografico Treccani colloca la morte nel **1538**, diversamente da alcune sintesi precedenti che riportano 1539; non importare una data certa da una fonte meno aggiornata. Fonte: https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Dizionario-Biografico%29/
2. **Goffredo Mameli**: poeta e patriota, autore del testo di *Fratelli d'Italia*, musicato da **Michele Novaro**. Non promuovere a compositore. Fonte: https://www.treccani.it/enciclopedia/goffredo-mameli/
3. **Giulio e Francesca Caccini**: due persone distinte, collegate storicamente da paternità e insegnamento; Francesca è compositrice e cantante. Non sostituire una relazione padre/figlia con fusione. Fonti: https://www.treccani.it/enciclopedia/caccini-giulio-detto-giulio-romano/ ; https://www.treccani.it/enciclopedia/francesca-caccini/
4. **Johann Strauss figlio**: equivale a Johann Strauss II (**1825–1899**), non a Johann Strauss padre (**1804–1849**). Le qualifiche figlio/II vanno conservate. Fonte: https://www.treccani.it/enciclopedia/johann-iunior-strauss/
5. **Hervé**: nome d'arte di **Louis Auguste Joseph Florimond Ronger**; la BnF ne attesta le varianti. Proporre il nome anagrafico completo come alias, non fare un nodo nuovo. Fonte: https://catalogue.bnf.fr/ark:/12148/cb13517695h
6. **Stephen Sondheim, Leonard Bernstein, Arthur Laurents e Jerome Robbins**: il primo è paroliere di *West Side Story*, il secondo compositore della musica, il terzo librettista, il quarto ideatore/regista/coreografo. Un ruolo generale di compositore attribuito a Sondheim non consente di attribuirgli la musica di quest'opera. Fonte: https://wwws.loc.gov/exhibits/westsidestory/westsidestory-overview.html
7. **George e Ira Gershwin**: compositore e paroliere, fratelli e persone distinte. Fonte: https://findingaids.loc.gov/repositories/15/resources/6841
8. **Gioseffo Zarlino**: il sottotipo `teorico` in Atlantis e `compositore` nella fonte non si contraddicono, perché fu entrambe le cose. Fonte: https://www.treccani.it/enciclopedia/gioseffo-zarlino/
9. **Giovanni Croce, Ottavio Rinuccini e Giovanni Pierluigi da Palestrina**: rispettivamente compositore veneziano, poeta/librettista e compositore romano; per ciascuno il registro conserva riferimento di autorità senza autorizzare fusione degli archi. Fonti: https://www.treccani.it/enciclopedia/giovanni-croce/ ; https://www.treccani.it/enciclopedia/ottavio-rinuccini/ ; https://www.treccani.it/enciclopedia/giovanni-pierluigi-da-palestrina/

## Quattro identità concettuali: NON convalidate per sola etichetta
- `dramma-giocoso` ↔ `senso:dramma-giocoso` — candidato di genere, da verificare sugli archi.
- `opera-buffa` ↔ `senso:opera-buffa` — candidato di genere, da verificare sugli archi.
- `opera-seria` ↔ `senso:opera-seria` — candidato di genere, da verificare sugli archi.
- `genere-quartetto-archi` ↔ `senso:quartetto` — **polisemia**: quartetto come formazione/organico, come repertorio e come genere; necessario distinguere i significati prima dell'unione.

Tutte le sette omonimie periodo/ambito ↔ capitolo rimangono `keep_distinct`. I capitoli sono solo risorse editoriali e non possono diventare ponti di esplorazione storico-musicale.

## Passaggio di consegne
Continuare la verifica dei **139** nominativi ancora pendenti in sotto-lotti documentali, iniziando dai casi ambigui e dagli omonimi; parallelamente confrontare i **349** nuovi candidati tramite forme d'autorità. Solo dopo la convalida delle identità e dei concetti si progettano mapping reversibile, consolidamento e spiegazioni `forward/reverse` di tutti gli archi, poi collaudo di pertinenza radicata Mozart–Leopold. **Nessun JSON pubblico modificato in questa tranche.**
