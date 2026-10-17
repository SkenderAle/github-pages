# Musurgia Mundi — Musiciste dentro forme e istituzioni · Lotto II
**17 ottobre 2026 · branch main**. Continua il primo lotto di ricollocazione documentato in `AUDIT_MUSICISTE_RICOLLOCAMENTO_2026-10-17.md`.

## Obiettivo e metodo
Approfondire le opere già integrate, correggere descrizioni generiche, aggiungere fonti musicali controllabili. Non sono stati creati capitoli «donne» o altre rubriche compensative, né nuove pagine tematiche. Le fonti editoriali e catalografiche sostengono fatti verificabili; le osservazioni formali sono criteri di ascolto, non pretesa di ricostruzione delle esecuzioni originali.

| Percorso | Modifica | Verifica |
|---|---|---|
| Classicismo · quartetti | Sirmen, Quartetto n. 6 op. 3: due movimenti; episodio di minuetto nel Con brio; comparazione con i quartetti della seconda metà del XVIII secolo. Aggiunta la pubblicazione londinese dei concerti per violino del 1772–73 | RISM; Edition Silvertrust |
| Classicismo · sinfonia | Martines, Sinfonia in do maggiore: schema tripartito, titoli dei movimenti, organico e relazione con sinfonia/ouverture senza attribuire un primato | A-Level Music; Hollitzer |
| Romanticismo · pianoforte | Das Jahr di Fanny Hensel: dodici mesi e Nachspiel, rapporto fra forma musicale, vignette e manoscritti del 1841–42 | Mendelssohn-Haus Leipzig; IMSLP |
| Romanticismo · Lied / mélodie | Viardot, 12 Mélodies sur des poésies russes: catalogo dei poeti, data editoriale 1866, voce/pianoforte, eccezione con violino | IMSLP; Deutsche Biographie |
| Romanticismo · poema sinfonico | Holmès, Irlande: poema in un movimento, organico, ritorno celebrativo, Pologne e Ode triomphale separati per destinazione e forze | IMSLP; Dictionary of Irish Biography; RCM |
| Romanticismo · sinfonismo transatlantico | Amy Beach: quattro movimenti della Gaelic Symphony, materiali irlandesi e recupero del Lied Dark is the Night | IMSLP; catalogo Amy Beach |
| Audioteca da camera | Tolte tre descrizioni identiche per Farrenc op. 33/34/46; specificate rispettivamente struttura in quattro movimenti, tema con variazioni centrale, sonata a tre movimenti. Riscritta nota sul Trio op. 17 di Clara in termini di forme e contrappunto; eliminata etichetta «una voce da riscoprire» | IMSLP partiture op. 33/34/46 e Clara op. 17; nessuna modifica ai lettori |
| Audioteca sinfonica | Mayer: nota di ascolto orientata a motivi e organico, distinta dall'asserzione di ricostruzione HIP autentica | Nessuna alterazione di interpreti, video o data della registrazione |

## Fonti primarie, cataloghi, studi
- RISM Sirmen: https://rism.info/new_publications/2015/11/26/the-musical-couple-maddalena-lombardini-and.html
- Sirmen op. 3 n. 6, edizione/analisi: https://www.editionsilvertrust.com/sirmen-string-quartet-6.htm
- Martines, movimenti e organico: https://alevelmusic.com/resources/development-of-the-symphony/1770-martines-sinfonia-in-c/
- Mendelssohn-Haus, Das Jahr: https://www.mendelssohn-stiftung.de/de/fannyjahr
- IMSLP, Das Jahr: https://imslp.org/wiki/Das_Jahr%2C_H.385_%28Hensel%2C_Fanny%29
- IMSLP, Clara Schumann op. 17: https://imslp.org/wiki/Piano_Trio_in_G_minor%2C_Op.17_%28Schumann%2C_Clara%29
- IMSLP, Farrenc op. 33 e 34: https://imslp.org/wiki/Piano_Trio_No.1%2C_Op.33_%28Farrenc%2C_Louise%29 ; https://imslp.org/wiki/Piano_Trio_No.2%2C_Op.34_%28Farrenc%2C_Louise%29
- IMSLP, Farrenc op. 46: https://imslp.org/wiki/Cello_Sonata%2C_Op.46_%28Farrenc%2C_Louise%29
- IMSLP, Viardot 12 Mélodies: https://imslp.org/wiki/12_M%C3%A9lodies_sur_des_po%C3%A9sies_russes_%28Viardot%2C_Pauline%29
- IMSLP, Holmès Irlande: https://imslp.org/wiki/Irlande_%28Holm%C3%A8s%2C_Augusta_Mary_Anne%29
- Dictionary of Irish Biography, Holmès: https://www.dib.ie/biography/holmes-augusta-mary-anne-a4065
- Royal College of Music, Holmès: https://www.rcm.ac.uk/research/archivedprojects/augustaholmes/
- IMSLP, Beach op. 32: https://imslp.org/wiki/Symphony_in_E_minor%2C_Op.32_%27Gaelic%27_%28Beach%2C_Amy_Marcy%29
- Catalogo Beach: https://www.amybeach.org/music/works-list/orchestral-works-and-works-with-orchestra/

## Controlli statici
- `classicismo/index.html`: +1471 caratteri; 107 ID invariati; invariati script, iframe, data-video, identificativi YouTube, riferimenti ad autoplay e nessun nuovo frammento locale irrisolto.
- `romanticismo/index.html`: +2848 caratteri; 206 ID invariati; invariati script, iframe, data-video, identificativi YouTube, riferimenti ad autoplay e nessun nuovo frammento locale irrisolto.
- `musica-da-camera/index.html`: +511 caratteri; 25 ID invariati; invariati script, iframe, data-video, identificativi YouTube, riferimenti ad autoplay e nessun nuovo frammento locale irrisolto.
- `dalla-sinfonia-alla-rapsodia/index.html`: +151 caratteri; 14 ID invariati; invariati script, iframe, data-video, identificativi YouTube, riferimenti ad autoplay e nessun nuovo frammento locale irrisolto.

## Riserve
Non è stata eseguita riproduzione nel browser su più dispositivi; nessun audio è stato aggiunto o riassegnato. Le fonti secondarie sui quartetti Sirmen discutono differenti ipotesi di autorialità: il frontespizio congiunto resta il dato certo. La documentazione su Beach presenta una divergenza fra il catalogo biografico che riporta il 31 ottobre e le cronologie di prima esecuzione/partitura che indicano il 30 ottobre; il lotto mantiene il 30 riportato in più cataloghi e segnala la divergenza per audit archivistico. Le indicazioni d'ascolto non sostituiscono la lettura integrale delle partiture.
