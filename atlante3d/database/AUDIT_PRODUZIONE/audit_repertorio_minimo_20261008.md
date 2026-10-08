# Audit repertorio minimo — checkpoint 8 ottobre 2026

## Esito del confronto anagrafico
- 332 nominativi unici richiesti dal report storico dell'utente.
- 205 nominativi individuati per nome/alias; 127 non individuati, prima di ulteriori disambiguazioni.
- Database operativo sul ramo di audit: 313 nodi `compositore`, 734 nodi totali, 1186 archi.
- ATTENZIONE: i nomi obbligatori includono figure storiche e teorici. Gregorio Magno e Guido d'Arezzo sono stati modellati come `persona` e non come autori fittizi del repertorio.
- Uno stesso nome può comparire in più epoche; le righe seguenti non sono additive.

| Periodo | Individuati | Da verificare/inserire | Totale richiesti |
|---|---:|---:|---:|
| Medioevo | 14 | 8 | 22 |
| Rinascimento | 37 | 11 | 48 |
| Barocco | 37 | 24 | 61 |
| Classicismo | 22 | 10 | 32 |
| Romanticismo e tardo Romanticismo | 50 | 20 | 70 |
| Primo Novecento e avanguardie storiche | 31 | 20 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

## Prime integrazioni verificabili
Sono stati aggiunti sei nodi alla rete, con otto relazioni documentate: Gregorio Magno (`persona`), Guido d'Arezzo (`persona`), Notker Balbulus, Bernart de Ventadorn, Philippe de Vitry e Johannes Ciconia (`compositore`). Le schede distinguono tradizione e attribuzione, teoria e composizione, appartenenza storica e produzione, e conservano URL di Treccani direttamente pertinenti. Commit: `1226ec056aa930dc525f719b442b8fb4f8459060`.

## Prossimo macroblocco
La coda `audit_minimi_prossimi100_staging_20261008.json` contiene 100 assenze candidate, ordinate seguendo la prima comparsa nelle epoche; restano 27 nomi fuori dalla coda. **Nessuno dei candidati in coda è da considerarsi validato o già aggiunto**. Per ogni candidato sono necessari almeno fonte, disambiguazione e verifica dei collegamenti, senza promuovere alla cieca appartenenze e influenze.

## Regole invarianti
- Le tre grandi lenti e la struttura attuale del visualizzatore non sono da modificare in questo ciclo.
- Il repertorio minimo non introduce automaticamente nuovi filtri UI.
- La produzione di un musicista non si esaurisce in un solo genere; occorre verificare gli ambiti pertinenti, come insegnato dal caso Vivaldi.
- Ogni arco ha senso storico motivato, fonte e stato esplicito.
- `main` non va modificato fino a revisione concordata.
