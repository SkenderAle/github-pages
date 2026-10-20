# Musurgia Mundi — Audit semantico scuole, lotto III

**20 ottobre 2026 · branch unico main.** Commit iniziale: `30c086eae19092047fd178407e428a89d6a4dbc2`.

### Bilancio

**111 relazioni scolastiche riesaminate** fra le 296 ancora prive di una seconda lettura semantica. Con le 96 già corrette: **207 reviste, 185 restanti**.

Sono stati conservati `id`, `source`, `target`, `kind`, `status`, `note`, `sources` e l'orientamento degli archi. Le precedenti formulazioni direzionali sono in `semantic_review`; la qualificazione ontologica è in `natura_semantica`. Non sono stati aggiunti, spostati o cancellati autori e collegamenti.

### Nuclei trattati

| Nuclei | Relazioni |
|---|---:|
| Notre-Dame e scuola luterana | 8 |
| Ospedali veneziani e concerto violinistico | 7 |
| Ars nova, madrigale, frottola, opera veneziana, clavicembalo francese, organisti tedeschi, gusto galante, Sammartini | 26 |
| Scuole nazionali, opera italiana e francese, Lied, sinfonismo, modernità francese, generazione italiana del 1880, etnomusicologia ungherese e avanguardie italiane | 40 |
| Accademia degli Unisoni, cembalismo iberico, teatro inglese, Gluck, virtuosismo, Franck, mélodie, Brecht, neobarocco, dodecafonia italiana, Risorgimento, ulteriori generi vocali/strumentali | 30 |
| **Totale** | **111** |

### Distinzioni da non perdere

- *Ars nova* francese e italiana: due tradizioni differenti, con scambi. [Treccani](https://www.treccani.it/enciclopedia/ars-nova/).
- L'opera italiana comprende evoluzioni da Rossini a Puccini, Mascagni e Leoncavallo, ma l'appartenenza al repertorio operistico italiano **non** prova di per sé adesione al verismo. [Treccani, Puccini e il teatro italiano del primo Novecento](https://www.treccani.it/enciclopedia/puccini-e-l-opera-italiana-del-primo-novecento_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/).
- Liederistica, musica tastieristica, polifonia sacra, scuola nazionale boema, scuola nazionale ungherese e tardo sinfonismo sono tradizioni o categorie storiografiche: non necessariamente sodalizi con iscritti.
- Johann Walter e la musica luterana non sono la stessa istituzione della chiesa di Amburgo di Telemann o dei successivi uffici di Bach; si distingue la tradizione confessionale dall'impiego.
- I rapporti di collaborazione con Brecht restano distinti dall'insegnamento o dall'appartenenza a una scuola.
- Il Risorgimento distingue poeta, autore delle musiche e produzione civico-patriottica.

Il lavoro di questo lotto consiste in una **revisione semantico-editoriale fondata sulle note e fonti già archiviate**, non in 111 nuove verifiche bibliografiche indipendenti. Le differenze di repertorio già registrate nelle note rimangono esplicite; non viene fatto alcun trasferimento automatico fra categorie.

### Controlli

| Indicatore | Invariato / Stato |
|---|---:|
| Nodi | 843 |
| Compositori | 393 |
| Archi principali | 1969 |
| Relazioni specialistiche | 1388 |
| Relazioni nella lente Scuole | 392 |
| Cumulato delle revisioni semantiche | 207 |
| Ancora da rivedere | 185 |

Il validatore `database/verifica-audit-semantico-scuole.mjs` controlla anche la presenza e la tracciabilità del lotto III. La verifica strutturale è distinta dal collaudo del browser.
