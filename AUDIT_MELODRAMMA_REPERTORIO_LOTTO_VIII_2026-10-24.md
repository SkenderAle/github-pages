# MUSURGIA MUNDI — Audit melodramma, Lotto VIII
Data: 24 ottobre 2026. Branch: `main`. File modificato: `melodramma/audioteca/index.html`.

## Risultato del lotto
- 14 nuove schede con player YouTube differito, in 3 nuclei storico-musicali.
- 6 schede aggiuntive di documentazione sonora esterna in un quarto nucleo, distinte dai player.
- Totale audioteca: 131 schede con video YouTube e 129 ID YouTube distinti; 6 schede di accesso esterno.
- Verifica statica ID: 0 malformati; 2 ID ripetuti in confronti già esistenti, elencati: G1YS61pu8Rc, mkZrbA6np5s.
- Ricerca: indicizzazione integrata di player, schede archivistiche, compositori e sezioni. La ricerca non richiede servizi di rete, funziona in locale.
- Riproduzione manuale: componente condiviso `shared/mm-confronto-estratti-v1.js` con miniatura e iframe creato solo dopo clic; parametro `autoplay=0`.
- **Nota importante:** l'accessibilità reale dei video incorporati, compresi eventuali blocchi territoriali italiani, non è stata verificata in browser.

## Nuovi ascolti con miniatura e player
### 1. Salieri oltre Mozart: teatro, politica e metateatro
- Antonio Salieri · Les Danaïdes: ouverture — https://www.youtube.com/watch?v=hBZZFEAyyiA
- Antonio Salieri · Prima la musica e poi le parole — https://www.youtube.com/watch?v=zWUDvmkI1go
- Antonio Salieri · Prima la musica e poi le parole (Dubrovnik, 1973) — https://www.youtube.com/watch?v=_cR9A7vFjJY

### 2. La commedia settecentesca: Piccinni, Paisiello e Cimarosa
- Niccolò Piccinni · La buona figliuola: Furie di donna irata — https://www.youtube.com/watch?v=ZStrYjiEWWU
- Giovanni Paisiello · Il barbiere di Siviglia — https://www.youtube.com/watch?v=GzlrkidYS58
- Giovanni Paisiello · Il barbiere di Siviglia: atto I (Taranto 2017) — https://www.youtube.com/watch?v=iQjqRDdR_O8
- Giovanni Paisiello · Nina: Il mio ben quando verrà (Bartoli) — https://www.youtube.com/watch?v=cmIczcxXOX4
- Giovanni Paisiello · Nina: Il mio ben quando verrà (Berganza) — https://www.youtube.com/watch?v=gdA_MLil2Gg
- Domenico Cimarosa · Il matrimonio segreto (Schwetzingen 1986) — https://www.youtube.com/watch?v=WrFa7mTK0KE

### 3. La scuola seria tra Napoli, Roma e San Pietroburgo
- Giovanni Battista Pergolesi · L'Olimpiade: atto I — https://www.youtube.com/watch?v=ksodL-PjtFc
- Giovanni Battista Pergolesi · L'Olimpiade: introduzione — https://www.youtube.com/watch?v=2QUXka3FYiU
- Tommaso Traetta · Antigona: Finito è il tormento — https://www.youtube.com/watch?v=IfsFUJ18_BQ
- Tommaso Traetta · Antigona: D'una misera famiglia — https://www.youtube.com/watch?v=-lBcjQsVs3Y
- Nicola Porpora · Germanico in Germania — https://www.youtube.com/watch?v=-friX9ZNNTE

## Fonti esterne documentate — link e descrizioni, NON video Youtube incorporati
- Charpentier — Médée (produzione 2024): https://play.operadeparis.fr/en/p/medee-2024
- Salieri — Tarare (Christophe Rousset): https://www.lestalenslyriques.com/discographie/tarare/
- Salieri — Les Danaïdes (Christophe Rousset): https://classical.music.apple.com/us/album/1572079131
- Duni — Le peintre amoureux de son modèle: https://www.operacd.gr/7E244CA6.en.aspx
- Sarti — Fra i due litiganti il terzo gode: https://www.operaonvideo.com/fra-i-due-litiganti-il-terzo-gode-sarti-berlin-2015-universitat-der-kunste-udk/
- Cimarosa — Il matrimonio segreto (OperaVision): https://operavision.eu/performance/il-matrimonio-segreto

## Evidenze e scelte editoriali
1. Salieri: `Prima la musica e poi le parole` in due esecuzioni documentate (Mosca 2015, Dubrovnik 1973); confronto di messa in scena e prassi. La `Grotta di Trofonio` in versione Harmoniemusik NON è stata aggiunta come opera integrale.
2. Paisiello: `Barbiere di Siviglia` (Atene 2010, Taranto 2017), `Nina` in interpretazioni Bartoli/Berganza. Il `Barbiere` di Paisiello non va confuso con l'opera di Rossini.
3. Cimarosa: filmato `Il matrimonio segreto` del 1986 pubblicato sul canale EuroArts; verificato l'allineamento di cast e produzione con scheda ufficiale EuroArts.
4. Piccinni: `Furie di donna irata` dalla `Buona figliuola` con Shira Patchornik, video del canale CHAARTS pubblicato nel 2026.
5. Traetta: due arie dell'`Antigona` con María Bayo, Accentus e Les Talens Lyriques diretti da Christophe Rousset; i due caricamenti sono di fonte indipendente.
6. Pergolesi: atto I dell'`Olimpiade` diretto da Alessandro De Marchi (caricamento non ufficiale con cronologia); sinfonia dalla stessa registrazione distribuita da Sony/Deutsche Harmonia Mundi. Non sono due opere differenti.
7. Porpora: antologia di `Germanico in Germania` con Capella Cracoviensis e Jan Tomasz Adamus. Non classificare come opera integrale.
8. Charpentier: `Médée` 2024 e Salieri `Tarare` sono disponibili su piattaforme esterne con condizioni specifiche: sono schede di fonti, non si simula un player YouTube.
9. La stessa aria `Il mio ben quando verrà` in due versioni è un confronto interpretativo intenzionale, non un doppione involontario.

## Problemi da verificare
- Eseguire test reali delle 14 nuove miniature, caricamento e riproduzione, accessibilità geografica, errori embed 101/150/153.
- Ricontrollare nel tempo i caricamenti privati dei video di Paisiello, Traetta, Salieri e Porpora.
- Normalizzare i nomi dei compositori nello strumento di ricerca: compaiono ancora alcune varianti come abbreviazioni ed epiteti.
- Validare continuità della pagina su smartphone e desktop con numerose schede.
- In un lotto successivo reperire arie e scene di Salieri `Les Danaïdes` e `Tarare` in versioni realmente incorporabili; non riciclare registrazioni strumentali come surrogati di opere complete.
- Ampliare Egidio Duni, Piccinni, Sarti e altri autori in modo cronologico e senza sacrificare il rigore delle attribuzioni.
