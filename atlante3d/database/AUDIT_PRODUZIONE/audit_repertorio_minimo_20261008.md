# Musurgia Mundi — Audit del repertorio minimo

**Checkpoint aggiornato 8 ottobre 2026**, ramo `audit-produzione-correttivo-01` (nessun merge in `main`).

## Situazione reale
- Repertorio obbligatorio: **332 identità distinte**. Includono alcuni teorici/figure storiche come `persona` anziché `compositore`.
- **248 identità** individuate nel grafo e **84 non individuate** in base al confronto con le varianti controllate.
- Database: **354 nodi compositore, 776 nodi complessivi, 1395 archi**.
- **Attenzione**: presenza nominale non significa repertorio di generi esaustivo né che tutte le genealogie e fonti siano concluse.

| Periodo | Presenti | Da verificare/inserire | Totale richiesto |
|---|---:|---:|---:|
| Medioevo | 22 | 0 | 22 |
| Rinascimento | 48 | 0 | 48 |
| Barocco | 61 | 0 | 61 |
| Classicismo | 22 | 10 | 32 |
| Romanticismo e tardo Romanticismo | 50 | 20 | 70 |
| Primo Novecento e avanguardie storiche | 31 | 20 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

## Copertura anagrafica per epoca
**Medioevo — 22/22**: integrate 14 figure, incluse le 3 figure non compositrici Gregorio Magno, Guido d'Arezzo, Franco di Colonia. Seguente audit del repertorio medievale ha inserito nove produzioni e mantenuto sospese due attribuzioni, Philippe de Vitry e Guglielmo IX d'Aquitania.

**Rinascimento — 48/48**: integrate 11 figure, tutte dotate di almeno una produzione documentata, tenendo distinti liuto e vihuela, e la transizione al primo Seicento.

**Barocco — 61/61**: riconciliate 24 voci nominalmente mancanti: 23 **nuovi compositori** e 1 variante di nome (*Dieterich Buxtehude* è il già presente *Dietrich Buxtehude*, senza duplicazione). Nuovi 23 nodi e 56 archi, dei quali **33 archi produttivi** e 23 appartenenze. Il primo gruppo comprende Cavalieri, Gagliano, Landi, Luigi Rossi, Cesti, Sarro, Feo, Locatelli, Geminiani, Isabella Leonarda, Antonia Bembo e Maria Margherita Grimani; il secondo comprende Sartorio, Carlo Pallavicino, Giuseppe Maria Jacchini, Giuseppe Valentini, Bernardo Pasquini, Louis Couperin, Heinichen, Charpentier, Delalande, Boyce e Arne. La produzione specifica cita i lavori e le fonti direttamente negli archi.

## Chiusura del ciclo strutturale 1–331 precedente all'allargamento barocco
Audit 201–300: **100 identità verificate, 97 produzioni minime documentate, 3 eccezioni** (Fritz Reiner, Johann Christoph Bach 1671–1721, Walter Klein). Audit 301–331: **31 verificati, 29 con produzione minima documentata e 2 eccezioni** (Philippe de Vitry, Guglielmo IX).
I due rapporti finali sono `correttivo05_lotto201_300_rapporto.md` e `correttivo06_lotto301_331_rapporto.md`. Non sostituiscono la densificazione plurigenere e genealogica.

## Coda successiva
`audit_minimi_prossimi100_staging_20261008.json` contiene i 100 nomi originari, con **43 riconciliati** e **57 ancora non individuati**; gli altri 27 sono fuori dal primo campione.
Passare al **Classicismo** (10 nominativi mancanti), al Romanticismo, al primo e secondo Novecento. In seguito rivedere tutte le relazioni di produzione plurima, scuola, formazione, influenze e istituzioni.
Le categorie, gli ambiti aggregati e le tre lenti NON sono stati modificati.
