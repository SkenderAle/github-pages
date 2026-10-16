# Musurgia Mundi — Audit anteprime e player audiovisivi

Data: 16 ottobre 2026. Branch: `main`.

## Obiettivo

Sostituire i grandi riquadri vuoti con anteprime riconoscibili e non precaricare i 35 iframe statici di Barocco e Medioevo. Il lettore si prepara soltanto su richiesta; la riproduzione richiede comunque un clic su Play. Non modificare crediti e cataloghi.

## Ambito del lotto

I file `shared/atlas-video-preview-v1.css` e `shared/atlas-video-preview-v1.js` vengono inclusi in 11 percorsi principali: Barocco, Classicismo, Concerti, Dalla sinfonia alla rapsodia, Medioevo, Melodramma, Musica da camera, La parola e il canto, Rinascimento, Risorgimento e Romanticismo.

Conversioni dirette: 21 iframe statici in Barocco e 14 in Medioevo. Copertine aggiunte dinamicamente ai riquadri di ascolto compatibili del Romanticismo e dell'audioteca sinfonica. I percorsi che già aprono il player a richiesta in modale o card mantengono tale modalità; la sola inclusione del componente non equivale a una riscrittura dell'interfaccia.

## Requisiti

- Nessun `autoplay=1` introdotto.
- Nessun URL, ID e frammento modificato intenzionalmente.
- Un iframe statico aperto per volta nella singola pagina; chiusura degli iframe statici sulla navigazione e chiusura dei `details` di appartenenza.
- Anteprima accessibile da tastiera, con nome accessibile e supporto a movimento ridotto.
- I video preesistenti a caricamento manuale continuano a utilizzare il controller originale.

## Non ancora collaudato

Browser Android, iOS e desktop reali; disponibilità delle miniature e delle registrazioni; pulsanti e layout dei moduli specializzati (mappa musicale, schede avanzate, confronti); arresto di media non YouTube; interazioni fra player specializzati e componenti condivisi. Audit di completezza delle altre pagine con sistemi audiovisivi differenti.

Lo stato dell'audit è **in corso**, non «sito completamente collaudato».

## Rifinitura dei controlli

La copertina diventa l'unico controllo visibile di preparazione quando è disponibile una miniatura YouTube valida; il pulsante originario rimane nel DOM e continua a gestire la creazione del lettore, senza duplicare visivamente «Prepara». Sistemato il posizionamento dell'anteprima per il lettore della Nona. Resta da verificare in browser reale l'effettiva resa e la chiusura dei lettori.

## Intervento di coordinamento dei lettori — 16 ottobre 2026

- I 35 lettori YouTube convertiti in Barocco e Medioevo hanno ora il controllo **«Ferma e chiudi»** accessibile da tastiera, oltre all'anteprima. Alla chiusura l'iframe perde il `src` e torna visibile la copertina.
- Un gestore in fase di cattura intercetta l'apertura di un nuovo video e invoca i controlli di chiusura già presenti per gli estratti del Romanticismo, l'audioteca sinfonica e alcuni confronti specializzati. L'azione non forza Play; il parametro `autoplay` rimane disabilitato.
- Gli iframe statici vengono inoltre chiusi quando la pagina passa in background.
- **Limite:** i player che non espongono uno dei controlli riconosciuti (o non sono YouTube) richiedono audit e prova specifici. Questo lotto non dichiara una gestione universale di ogni media né collaudo su Android.
