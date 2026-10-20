# Musurgia Mundi — Audit semantico delle scuole, lotto V e chiusura della seconda lettura

**20 ottobre 2026 · `SkenderAle/github-pages` · branch `main`**. Parent: `01cdd1f9073c3c382dd34071a5a63e6790f1466e`.

## Bilancio

Sono state riesaminate editorialmente e qualificate in entrambe le direzioni le **74 relazioni residue** della lente `scuole`.

**Risultato cumulativo: 392 / 392 relazioni attive sottoposte a seconda lettura semantica.** Questa conclusione NON significa che siano state verificate ex novo le fonti di ogni singolo record: si tratta di tracciabilità, intelligibilità delle formule e corretta distinzione tipologica sulla base delle prove già archiviate.

### Ultimi nuclei

- Musica medievale e rinascimentale: Ildegarda, trovieri, cembalismo Frescobaldi/Froberger, madrigalismo, villancico e corti.
- Età barocca e classica: Händel e oratorio londinese, Telemann e musica luterana, Marais e viola da gamba, Somis/Leclair e tradizioni violinistiche, Martines e Vienna, Albrechtsberger e contrappunto, Boccherini e musica cameristica.
- Memorie istituzionali: corti scaligere, San Marco, San Petronio, cappelle pontificie, Opera of the Nobility, Marktkirche a Halle, Abendmusiken e festival di Venezia.
- Pratiche e ambienti novecenteschi: studi del folklore con Bartók e Kodály, musica elettronica, jazz orchestrale, blues, swing e bebop, composizione cinematografica e Broadway.
- Differenze semantiche vincolanti: **riferimento storiografico ≠ iscrizione**, **esecuzione ≠ direzione**, **composizione cinematografica ≠ appartenenza a una scuola**, **partecipazione a movimento culturale ≠ rapporto didattico diretto**, **composizione di testi ≠ composizione musicale**, **ricezione stilistica ≠ collaborazione personale**.

## Architettura dei dati

La seconda lettura ha mantenuto inalterati `id`, `source`, `target`, `group`, `kind`, `status`, `note`, `sources` per ogni relazione. Ogni record presenta ora `natura_semantica` e un oggetto `semantic_review` che conserva le precedenti formule `forward`/`reverse` e le classifica per lotto.

I tre collegamenti impropri ritirati dal primo lotto rimangono archiviati integralmente nel campo `semantic_school_audit_20261020`; non sono cancellati dalla memoria storica del progetto.

| Indicatore | Stato |
|---|---:|
| Compositori | 393 |
| Nodi | 843 |
| Archi principali | 1969 |
| Relazioni specialistiche | 1388 |
| Relazioni attive nella lente scuole | 392 |
| Scuole con seconda lettura semantica | **392** |
| Relazioni scolastiche ancora senza seconda lettura | **0** |

## Limiti da non occultare

La chiusura riguarda **solo** l'audit semantico-editoriale della lente `scuole`: non estende automaticamente la garanzia di attendibilità alle altre lenti `formazione`, `influenze`, `genealogie`, `collaborazioni`, alla qualità bibliografica delle singole note, né alla prova d'uso reale del browser.

Le letture devono essere convalidate anche nell'interfaccia: la visualizzazione potrebbe riprodurre formule ancora poco eleganti e il difetto del doppio clic sulle bolle rosa non è dichiarato risolto. Il prossimo ciclo dovrebbe includere controllo grammaticale automatizzato con campionamento umano delle frasi generate e audit indipendente dei dati filologici.
