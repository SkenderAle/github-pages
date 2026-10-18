# Musurgia Mundi — Continuazione audit globale · Cinque profili prioritari

**18 ottobre 2026 · branch main · base `de8e0b2a70f9fbdfd90f22932b4181de4488c3b3`**

## Metodo
Il primo audit globale ha già censito 787 nodi e sospeso i rimandi dedotti da cognomi o destinati a categorie generiche. Questo lotto esamina cinque voci ad alta priorità senza collegamenti specifici né relazioni documentate: Ottaviano Petrucci (classificato persona, non compositore), Jerome Kern, Richard Rodgers, Scott Joplin, Georges Méliès (persona, non compositore).

## Interventi
- Cinque profili redazionali brevi con rimando a una voce Treccani **individuale**, non a una ricerca generale. Méliès disponeva già della voce e viene completato con una scheda redazionale.
- Cinque ancoraggi `mm-autore-...` collocati in paragrafi dedicati nelle pagine Rinascimento, Dal musical al film, Verso le avanguardie, con link «✧ Musurgia» di ritorno al nodo. Nuovo tipo `author-text-anchor` ammesso dal pannello.
- Luoghi di attività controllati e marcati distintamente dai luoghi di nascita (Venezia per Petrucci, New York per Kern e Rodgers, Sedalia per Joplin, Parigi per Méliès).
- Quattro relazioni, con testo `forward`/`reverse`, nota, tipologia e fonti: Kern e Hammerstein II per `Show Boat` (1927); Rodgers e Hammerstein II per `Oklahoma!` (1943); Petrucci editore di messe di Josquin des Prez (dal 1502) e Jacob Obrecht (1503).
- Il rapporto editoriale non viene confuso con una collaborazione o un incontro personale. Non viene attribuita a Joplin o Méliès una relazione diretta non verificata.

## Fonti
- Treccani DBI Petrucci: https://www.treccani.it/enciclopedia/ottaviano-petrucci_%28Dizionario-Biografico%29/
- Treccani Kern: https://www.treccani.it/enciclopedia/jerome-david-kern/
- Treccani Rodgers: https://www.treccani.it/enciclopedia/richard-charles-rodgers/
- Treccani Joplin: https://www.treccani.it/enciclopedia/scott-joplin/
- Treccani Méliès: https://www.treccani.it/enciclopedia/georges-melies_%28Enciclopedia-del-Cinema%29/
- Credits Show Boat: https://rodgersandhammerstein.com/show/show-boat/

## Verifiche e limiti
- Controllate cinque ancore univoche in HTML, cinque link di ritorno, sintassi JS e corrispondenza con gli ID del grafo.
- Nessuna modifica a cataloghi e player, nessun autoplay e nessun branch aggiuntivo.
- **Lotto non esaustivo:** le lacune degli altri nodi sono ancora registrate nell'audit globale. Le fonti Treccani non vengono copiate integralmente ma sintetizzate con attribuzione.
- **Collaudo browser desktop e Android non eseguito**: non dichiararlo completato senza provarlo.
