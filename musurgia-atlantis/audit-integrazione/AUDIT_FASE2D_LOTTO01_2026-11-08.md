# Musurgia Atlantis — Fase 2D, Lotto 01: convalida storico-documentale delle identità omonime
**8 novembre 2026** · `main` · Solo audit, grafo pubblico invariato.

## Risultato
Confrontate fonti storico-biografiche autorevoli con le identità già proposte fra Atlante 3D e Atlantis. **11** coppie identitarie nominali risultano ora documentate autonomamente, e sono registrate in `CONVALIDA_STORICA_NOMI_FASE2D_LOTTO01_2026-11-08.json`. Le **144** coppie nominali rimanenti sono ancora in attesa di audit storico. A queste si aggiungono **5** alias documentati nelle Fasi 2B–2C. **Totale documentato per identità: 16**, su 509 persone sorgenti. Restano 349 non abbinate a un'identità Atlantis documentata, salvo ulteriori varianti.

### Gruppi esaminati
1. Andrea Gabrieli / Giovanni Gabrieli: compositori distinti, zio e nipote, con relazione didattica in archivio (`form-andrea-giovanni-gabrieli`). Fonte Treccani: https://www.treccani.it/enciclopedia/andrea-gabrieli_%28Dizionario-Biografico%29/
2. Alessandro Scarlatti / Domenico Scarlatti: compositori distinti, padre e figlio (`lotto05-alessandro-domenico`). Fonte Treccani: https://www.treccani.it/enciclopedia/alessandro-scarlatti_%28Dizionario-Biografico%29/
3. Giulio Caccini / Francesca Caccini: padre e figlia, entrambi musicisti; Francesca è compositrice e cantante, non soltanto "compositore" generico (`lotto01-maestro-giulio-francesca`). Fonte Treccani: https://www.treccani.it/enciclopedia/francesca-caccini/
4. Robert Schumann / Clara Schumann: coniugi e compositori; Clara è anche pianista e interprete (`coll-clara-robert`). Fonte Schumann-Haus Leipzig: https://www.schumannhaus.de/en/history-of-the-house/
5. George Gershwin / Ira Gershwin: fratelli distinti e collaboratori; George compositore, Ira paroliere (`audit8d-gershwin-ira`). Fonte Cambridge University Press: https://assets.cambridge.org/97811084/23533/excerpt/9781108423533_excerpt.pdf
6. Wolfgang Amadeus Mozart: identità nominale in Atlantis `pers:mozart` corroborata dalla Mozarteum Foundation; Leopold è **un'altra** persona, padre e maestro, e non risulta fra le corrispondenze Atlas–Atlantis già accettate. La relazione `form-leopold-wolfgang` è conservata come **test storico e direzionale distinto**. Fonte Mozarteum: https://mozarteum.at/en/wolfgang-amade-mozart

### Qualità dei payload
- Tutti gli 11 nodi Atlantis di destinazione esistono; i ruoli specializzati (compositrice/cantante, compositrice-pianista, paroliere) sono da preservare senza appiattimento.
- **9 delle 11 schede di origine esaminate presentano soltanto la descrizione provvisoria** «Inquadramento orientativo da verificare e integrare con fonti»: la verifica dell'identità **non sana automaticamente la scheda biografica**. Importare quel testo come se fosse una biografia certificata sarebbe un errore.
- Le sei relazioni di archivio sono conservate con `forward`, `reverse`, `kind`, nota e fonti originali ove presenti; la convalida delle **persone** non significa convalida storica integrale della **relazione**. I rispettivi archi dovranno passare per quality gate indipendente prima della produzione.

## Divieti invariati
Nessuna fusione padre/figlio, zio/nipote, marito/moglie o fratelli. Nessun arco si valida solo perché l'identità delle estremità è certa. Nessun attraversamento indiscriminato dei vicini di Leopold quando la radice è Wolfgang. Capitoli **solo editoriali**, periodi come categorie storiche, mai confusi fra loro. Nessuna modifica a `musurgia-atlantis/grafo.json`, `index.html`, `compat-graph.js`, o all'Atlante originale.

## Prossima ripresa
Proseguire dal **Lotto 02** delle 144 identità nominali ancora in audit; privilegiare omonimie, nomi multipli e ruoli differenti. Poi verificare gli alias dei 349 senza corrispondenza e le quattro equivalenze concettuali. Dopo convalida predisporre unione reversibile e migrazione dei 3.856 archi Atlante e 1.718 Atlantis con spiegazioni mouse-over e tap, direzione, note e fonti, test Mozart–Leopold e pertinenza radicata.
