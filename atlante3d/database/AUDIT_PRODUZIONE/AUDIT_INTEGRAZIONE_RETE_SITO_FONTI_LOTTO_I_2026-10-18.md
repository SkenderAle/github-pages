# MUSURGIA MUNDI — Audit integrato I: autori, relazioni, attraversamenti e consultazione
**Data:** 18 ottobre 2026 · **Branch:** main · **Prima base:** 4ba728cfe4ecedfc17a88f959199480cc9dee029

## Principi
1. Il grafo non è un dizionario biografico parallelo: orienta nella rete di autori, opere, periodi e rapporti documentati.
2. I percorsi di Musurgia Mundi conservano l'analisi storica e gli ascolti; i link alle enciclopedie servono per l'approfondimento biografico e musicologico.
3. La presenza in un catalogo non dimostra da sola un rapporto maestro-allievo, collaborazione o influenza. Nel primo passaggio si aggiungono soltanto archi di appartenenza contestuale; i rapporti direzionali hanno fonti specifiche.
4. Non inferire autori da cognomi ambigui e non produrre URL di schede enciclopediche non verificati.

## Audit A · Copertura
Stato iniziale: **309** nodi `compositore`, **699** nodi totali; **930** archi del grafo generale.

Lotto implementato: **35 nuovi compositori** comparsi nei percorsi e nelle audioteche, oltre a **2 nodi di contesto**. Il database raggiunge **344 compositori, 736 nodi e 992 archi** del grafo generale. Le nuove presenze sono integrate nel periodo e, ove opportuno, nel contesto geografico moderno; la cronologia e la biografia completa rimangono un lavoro redazionale successivo.

**Musica e poesia medievale, Rinascimento:** Bernart de Ventadorn; Comtessa de Dia; Walther von der Vogelweide; Claudin de Sermisy.
**Fra Settecento e Romanticismo:** Johann Friedrich Reichardt; Emilie Mayer; Max Bruch; Henryk Wieniawski; Ferdinand David; Edvard Grieg; Louis Spohr; Joachim Raff.
**Tardo Ottocento e primo Novecento:** Alma Mahler; Amy Beach; Dora Pejačević; Jean Sibelius; Carl Nielsen; Edward Elgar; Alexander Glazunov; Reynaldo Hahn; Gustav Holst.
**Novecento e musica da camera:** Lili Boulanger; Rebecca Clarke; Leoš Janáček; Samuel Barber; Sofia Gubaidulina; George Crumb; William Walton.
**Cinema e musical:** Nino Rota; Bernard Herrmann; Max Steiner; Erich Wolfgang Korngold; John Williams; Jerome Kern; Richard Rodgers.

**Da verificare nei lotti seguenti** (esempi già presenti nei repertori ma non integrati nel lotto): Henri Vieuxtemps, Édouard Lalo, Carl Reinecke, Jacques Ibert, André Jolivet, Alberto Ginastera, Joaquín Rodrigo, Heitor Villa-Lobos, Mario Castelnuovo-Tedesco, Ney Rosauro, Lars-Erik Larsson, e i professionisti del cinema e del teatro diversi dai compositori. È necessario anche un audit dei casi in cui il sito usa soltanto cognomi o sigle: non trasformarli automaticamente in nuove persone.

## Audit B · Ponti, archi e senso storico
Le relazioni documentate (lenti) passano da **1.280 a 1.290**: +10, con `forward`, `reverse`, nota esplicativa e fonte. Nuovi contesti:
- `tradizione-trovatori-occitani` distinto dai trovieri francesi, con Bernart e la Comtessa de Dia;
- `musica-per-film-novecento` come spazio di pratiche differenti, senza postulare una scuola unitaria, con Rota, Herrmann, Steiner, Korngold, Williams e Morricone.
Altre relazioni documentate: Amy Beach e Second New England School (Indiana University Press); Nino Rota allievo di Alfredo Casella (Treccani, DBI).
**Non sono stati fabbricati rapporti diretti fra i nuovi compositori sulla sola base dell'appartenenza alla stessa epoca.** Restano da indagare in lotti successivi gli archi biografici, formativi, collaborativi e ricettivi dei singoli nuovi ingressi.

## Audit C · Percorsi ⇄ costellazione
Nuovo URL permanente `atlante3d/?n=<id-nodo>` (selezione del nodo con apertura della scheda). Le pagine che usano lo script comune dell'Atlante ricevono una barra discreta di accesso alla costellazione sotto l'hero, e i titoli h2/h3 che nominano autori identificabili ricevono un link al nodo: gli omonimi e i cognomi ambigui non vanno collegati.

Sono stati inoltre riparati **9 URL interni preesistenti** che puntavano a cartelle non pubblicate come `novecento/` e `avanguardie/`, reindirizzandoli a sezioni esistenti di `post-romanticismo/` (es. futurismo, dodecafonia, musica elettronica).\n\nInventario di collegamenti costruito con scansione controllata di titoli h2/h3 e filtri cronologici: **104 nodi**, **233 rimandi** a capitoli o pagine. Sono soltanto associazioni editoriali di consultazione, non nuove relazioni storiche. I nuovi 35 compositori hanno anche un URL diretto a uno dei repertori o capitoli dove compaiono; i restanti autori richiederanno ulteriori rimandi, soprattutto nelle audioteche a schede generate e nelle pagine prive di titoli per singolo autore.

## Audit D · Consultazione enciclopedica
La scheda del grafo contiene una sezione **Consultazione enciclopedica**. Offre:
- **Grove Music Online (Oxford University Press):** collegamento al portale, non falsa promessa di un articolo specifico, possibile autenticazione bibliotecaria o istituzionale.
- **Treccani:** portale generale e collegamenti direttamente alla voce soltanto quando verificati.
- **Enciclopedia della musica, Le Garzantine (Garzanti):** indicazione bibliografica trasparente, senza inventare schede digitali. Per ricerche fisiche rivolgersi a un catalogo bibliotecario.
- Alcune fonti specifiche non italiane autorevoli (Oxford Song, lessico biografico croato, Indiana University Press) dove pertinente.

La prima raccolta di URL diretti verificati comprende dieci nodi; ampliare per l'intero repertorio in seguito, distinguendo schede biografiche, lemmi e bibliografie.

## Collaudi e residui
- Controlli di struttura, integrità di ID/URL e coerenza gruppi/versi richiesti prima della pubblicazione.
- Collegamenti di pagina: preferire ancore effettive; l'ancora per un'opera in un catalogo non deve essere confusa con una scheda biografica.
- Accertare in browser desktop e Android: caricamento JSON, selezione `?n=`, visibilità delle nuove schede, contrasto dei link e restituzione corretta alla pagina. Non dichiarare un collaudo visivo prima che sia stato effettuato.
- I singoli lemmi d'uso musicale non sono esauriti dal primo audit. La copertura di editori, interpreti, poeti, librettisti, mecenati e ambienti storici richiede successivi controlli specifici, senza privilegiare indiscriminatamente i soli compositori.
- Il collegamento automatico riguarda i percorsi con hero e script condiviso. Applicazioni autonome (Atlante 3D stesso, laboratori, quiz) richiedono interventi mirati se appropriati.

**Principio editoriale:** la musica non sta in fila. Il grafo collega; il sito racconta; le fonti permettono di controllare.
