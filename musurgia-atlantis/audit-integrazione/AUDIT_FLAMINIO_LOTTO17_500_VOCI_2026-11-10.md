# Musurgia Atlantis — Lotto 17: 500 nuove voci Flaminio con confronto autore–opera

**Data:** 10 novembre 2026 · **Branch:** main · **Stato:** staging non distruttivo, produzione invariata.

## Scansione ed estrazione
Riletto `compositori_flaminio.xlsx` (Sheet1) in streaming: **52.150** righe sorgente attraversate. Escluse esattamente le **523** righe già sottoposte a Lotto15 (23) e Lotto16 (500). Estratte **500 nuove voci** distinte, distribuite per interpolazione uniforme lungo il catalogo di **30 compositori**, evitando di ripetere coppie numero di catalogo e titolo all'interno del lotto. **1.023 righe distinte** coperte cumulativamente nei tre lotti di composizioni. Non equiparare righe/record a opere musicali autonome.

## Numeri per il Lotto 17
- **500** voci con numero Excel, compositore, intestazione originale, eventuale numero d'opera, titolo, data, campo parte, dettagli, link, candidato di genere e stato del controllo.
- **118** lemmi singolari candidati dal titolo individuale; **382** non classificabili in sicurezza dal solo titolo.
- Distribuzione fra i 118: **Sonata 35, Concerto 21, Sinfonia 15, Messa 10, Fuga 10, Trio 8, Quartetto 6, Preludio 4, Salmo 4, Aria 1, Studio 1, Mottetto 1, Scherzo 1, Variazione 1**.
- **18** voci senza numero di catalogo, **11** con segnali di versione/trascrizione/rielaborazione, **2** con segnali di attribuzione o stato documentario incerto, **49** con URL esplicativo Flaminio.

## Differenza importante dal Lotto16: confronto reale con le relazioni Atlantis
Recuperato e letto il grafo integrale `musurgia-atlantis/grafo.json` allo SHA `4863b3fe263154387de3388c0b813b5f94546f12` (**754 nodi / 1.718 relazioni**). Per i **30** compositori del campione sono stati cercati corrispondenti nodi persona per nome/cognome, senza risolvere gli omonimi arbitrariamente: **17/30** hanno un candidato persona univoco riconoscibile dai nomi; gli altri 13 restano aperti per mancata corrispondenza o ambiguità.

La procedura per un match opera richiede simultaneamente:
1. candidato autore nel grafo;
2. **arco autore–opera già presente** nello snapshot;
3. corrispondenza sostanziale di titolo normalizzato e/o numero di catalogo, senza scegliere tra opere omonime.

**Esito:** **0** corrispondenze di opere sufficientemente forti proposte da questa procedura conservativa sui 500 record. **Non** interpretare zero come 500 opere nuove o assenti: 13 compositori non hanno identità persona risolta e la copertura Atlantis non è esaustiva, inoltre titoli e cataloghi sono spesso presentati in modo differente. Il controllo per alias, trascrizioni, opere senza archi autore e versioni alternative è ancora da svolgere. Il file staging conserva per ogni riga `match_status=no_strong_composer_linked_match_in_this_snapshot` e `public_node_approved=false`.

## Pubblicazione dei dati COMPLETI sul repository
**Diversamente dal Lotto16, in questo lotto sono stati pubblicati anche i 500 record analitici, non solo il rapporto:**
- `ATLANTIS_FLAMINIO_LOTTO17_500_VOCI_2026-11-10.csv` — tutte le 500 righe sorgente e gli indicatori di cautela; commit `3654e05657f6dbd64e9f13b70113abcf88d705ec`.
- `STAGING_FLAMINIO_LOTTO17_500_VOCI_CONFRONTO_ATLANTIS_2026-11-10.json` — tutti i 500 record con status di riconciliazione autore–opera, mapping di 30 compositori e SHA del grafo confrontato; commit `b76dd1cf0826962bac4dc3adcb81eedecddd7b5a`.
- Artefatti scaricabili in conversazione `ATLANTIS_FLAMINIO_LOTTO17_500_VOCI.csv` e `.json` con dati originari e segnali.

## Qualità e prossimi interventi
Le etichette di genere sono solo *candidati lessicali dal titolo*, non verifica storica di opere. Le voci multigenere, con indicazione di parte, di raccolta o di attribuzione dubbia non diventano automaticamente nuove opere o archi validati. La deduplicazione va estesa:
- Confronto degli alias d'autore e cataloghi (specialmente Haydn, C. P. E. Bach, Mayr, Salieri e omonimi), non solo nomi di nodi.
- Utilizzo dei record e link del database Mundi, e della documentazione Flaminio, per riconoscere opere anche quando Atlantis non contiene ancora l'arco autore→opera.
- Identificazione `opera` vs `parte` vs `versione` vs `raccolta`; controllo delle fonti per i sottogeneri.
- Nuovi blocchi da 500 o superiori senza sovrapporre righe, con documentazione completa.
- Verifica di pertinenza radicata: persone e opere documentate sì, **non ponti impliciti fra compositori tramite lo stesso genere**.

Checkpoint24 storico persona↔persona resta sospeso a **74/233** archi per un lotto indipendente. I 210 lotti filologici preesistenti, i grafi pubblici e la GUI non sono stati modificati.
