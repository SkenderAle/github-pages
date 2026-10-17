# Musurgia Mundi — Audit degli hero figurativi · Lotto I

**Data:** 17 ottobre 2026 · **Branch:** main · **HEAD iniziale:** `9aceb11754e18415c13a202459a36f424610fb83`.

## Criterio
Hero con immagine tratta da opera figurativa documentata. Non un abbellimento indifferenziato: ogni scelta dichiara artista, soggetto, epoca e archivio/museo, con collegamento alla scheda Wikimedia Commons. Riproduzioni di pubblico dominio o CC0, sfondi CSS ridimensionati (per il bozzetto di Méliès il file originale è di 810 pixel). Gradiente per il contrasto dei testi; ritaglio e posizionamento responsive, credit line esplicita.

## Sei integrazioni
- **`medioevo/`**: Cantigas de Santa María, Codice dei musicisti, f. 39v (ca. 1280). Motivazione: Manoscritto coevo; miniatura diversa da quella già impiegata nella home. Licenza: Pubblico dominio. Fonte: https://commons.wikimedia.org/wiki/File:Cantigas_de_Santa_Maria,_Musician%27s_Codex,_page_Bl-2_039V.jpg
- **`musica-da-camera/`**: Gerrit van Honthorst, Il concerto (1623). Motivazione: Musica d'insieme e socialità; la costellazione puramente grafica viene nascosta nell'hero. Licenza: CC0. Fonte: https://commons.wikimedia.org/wiki/File:Gerrit_van_Honthorst%2C_The_Concert%2C_1623%2C_NGA_163184.jpg
- **`dalla-sinfonia-alla-rapsodia/`**: Edgar Degas, L'Orchestre de l'Opéra (circa 1870). Motivazione: L'orchestra del teatro, non un concerto sinfonico: rappresenta i musicisti e non una specifica forma. Licenza: Pubblico dominio. Fonte: https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_The_Orchestra_at_the_Opera_-_Google_Art_Project.jpg
- **`parola-e-canto/`**: Caravaggio, Suonatore di liuto (circa 1595). Motivazione: Partitura, voce e strumenti all'interno di una stessa rappresentazione. Licenza: Pubblico dominio. Fonte: https://commons.wikimedia.org/wiki/File:The_Lute_Player-Caravaggio_%28Hermitage%29.jpg
- **`post-romanticismo/`**: Umberto Boccioni, La città che sale (1910). Motivazione: Un'immagine per la frattura delle avanguardie, senza farne l'unico stile del Novecento. Licenza: Pubblico dominio. Fonte: https://commons.wikimedia.org/wiki/File:The_City_Rises_by_Umberto_Boccioni_1910.jpg
- **`dal-musical-al-film/`**: Georges Méliès, bozzetto per Le Voyage dans la Lune (1902). Motivazione: Arte grafica del cinema delle origini, non una locandina definitiva di Broadway. Licenza: Pubblico dominio. Fonte: https://commons.wikimedia.org/wiki/File:Voyage_dans_la_Lune_affiche.jpg

## Pagine già dotate di immagini
Rinascimento, Barocco, Classicismo, Risorgimento, Romanticismo, Melodramma e Concerti non sono stati modificati. Anche Opera lirica e Teatro classico, segnaposto editoriali, restano inalterati.

## Salvaguardie e limiti
- Mantenuti ID HTML, ancore, script, iframe, player audio/video e collegamenti esistenti. Nessun autoplay aggiunto.
- Le credit line sono visibili e cliccabili anche sui dispositivi piccoli; il loro collegamento porta alla pagina con licenza e provenienza dell'opera.
- Per le due pagine di modernità, CSS comune aggiornato con versione anti-cache. Per Medioevo, CSS della pagina aggiornato con versione anti-cache.
- Verifica statica delle modifiche effettuata per entrambe le tranche di file prima di generare i blob Git.
- Collaudo visivo nel browser reale, contrasto su mobile e disponibilità delle risorse Wikimedia CDN da verificare sul sito distribuito dopo il deploy. Alcune richieste alle varianti thumbnail tramite strumento di ricerca non hanno restituito una risposta, quindi non si dichiara la disponibilità live delle sei immagini come provata.
