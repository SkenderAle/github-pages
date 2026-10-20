# Musurgia Mundi — Audit semantico delle scuole, lotto IV

**Data: 20 ottobre 2026** · repository `SkenderAle/github-pages`, branch `main`. HEAD iniziale `41797e7e0922d7110529668fb9f150c6901ddacb`.

## Esito

**111 relazioni della lente Scuole e tradizioni** sottoposte a riformulazione bidirezionale; le revisioni cumulative salgono **207 → 318**; restano **74** relazioni della lente prive della seconda lettura semantica.

Il lotto tratta **11 ponti tra scuole, generi e tradizioni**, seguiti da **100 rapporti** fra conservatori, cappelle, teatri, accademie, centri di sperimentazione e movimenti moderni. Le precedenti formule `forward` e `reverse` sono archiviate all'interno di `semantic_review`; `natura_semantica` identifica la funzione storica del rapporto.

Nessuna modifica agli ID, agli estremi, al gruppo, alla tipologia storica, ai campi di stato, alle note né agli URL già presenti. Non sono stati introdotti archi di apprendistato, collaborazione o appartenenza basati soltanto su data, città o influenza stilistica.

## Ambiti principali

- **Trasferimenti storici**: franco-fiamminga → veneziana/romana; Venezia → musica luterana attraverso Schütz; Mannheim → Classicismo viennese senza genealogia unica; seconda Vienna → Darmstadt e dodecafonia; Camerata → melodramma; Napoli → opera seria e buffa.
- **Istituzioni di formazione**: Pietroburgo e Pietrogrado; Mosca, Parigi, Boston, Fontainebleau, Yale, Varsavia, Vienna, Juilliard; il ruolo indicato distingue fondazione, frequenza, insegnamento, direzione.
- **Cappelle e ambienti professionali**: San Marco, Cappella Giulia, Cappella pontificia, cappelle di Salisburgo, Saint-Donatien, Cappella regia francese, Chapel Royal, San Petronio, cori e ospedali veneziani.
- **Novecento storico**: musica concreta, Darmstadt, minimalismo/postminimalismo, Gruppo di Improvvisazione Nuova Consonanza, Nuova Consonanza come associazione, Black Chicago Renaissance, Jazz orchestrale, Broadway, nuova musica polacca e festival.
- **Rapporti da non omologare**: partecipazione ai corsi di Darmstadt ≠ adesione estetica; collaborazione con un'associazione ≠ sua fondazione; ruolo nel conservatorio ≠ insegnamento di un compositore a un altro; gruppo storiografico ≠ associazione di iscritti.

## Fonti e livello della verifica

Il lotto si basa principalmente sulle **note e fonti originarie** dei record. Alcuni casi sono stati incrociati esternamente, fra cui la biografia della [Fondazione Hans Werner Henze](https://www.hans-werner-henze-stiftung.de/en/hans-werner-henze/life), che conferma la partecipazione di Henze a Darmstadt nel 1948 e nel 1955, e [Treccani, Gioseffo Zarlino](https://www.treccani.it/enciclopedia/gioseffo-zarlino_%28Dizionario-Biografico%29/), utile come controllo della storia istituzionale di San Marco.

**Importante:** le 111 relazioni revisionate sono da intendersi come *seconda lettura semantico-editoriale*, non 111 nuovi accertamenti filologici indipendenti. Le note e le fonti sono recuperabili integralmente.

## Risultati

| Elemento | Prima | Dopo |
|---|---:|---:|
| Nodi | 843 | 843 |
| Compositori | 393 | 393 |
| Archi grafo | 1969 | 1969 |
| Relazioni specialistiche | 1388 | 1388 |
| Relazioni Scuole | 392 | 392 |
| Relazioni scuola revisionate cumulative | 207 | 318 |
| Restanti da riesaminare | 185 | 74 |

Verificatore di integrità e anti-regressione aggiornato: `atlante3d/database/verifica-audit-semantico-scuole.mjs`. Il workflow esistente ne prevede l'esecuzione ma il suo esito è da accertare attraverso le GitHub Actions. Il comportamento effettivo dei nodi rosa nell'interfaccia web resta da collaudare.
