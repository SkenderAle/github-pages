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
