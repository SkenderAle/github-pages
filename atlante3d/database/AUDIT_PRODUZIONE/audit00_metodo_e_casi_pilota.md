# Musurgia Mundi · Audit produzione e semplificazione lenti — fase pilota

Data: 7 ottobre 2026. Audit indipendente dalle integrazioni delle relazioni. **Documento preliminare, non ancora patch ai grafi.**

## Principi
- Conservare integralmente i cinque gruppi specialistici e tutte le note/fonti.
- Ridurre la presentazione a tre lenti: **Musica e produzione**, **Relazioni e influenze**, **Evoluzione musicale**.
- Le lenti sono combinabili e non determinano ciò che esiste nel database.
- Conservare colori, direzione delle frecce, formule «da/a», tooltip e spiegazione nella colonna laterale.
- All'apertura di un compositore mostrare la rete pertinente completa, consentendo di restringerla.
- Distinguere concettualmente epoca, macroambito produttivo, genere/forma, scuola/istituzione e ruolo storico.
- Non reinterpretare automaticamente tutti gli attuali nodi `corrente`; aggiungere progressivamente `semantic_type` quando la classificazione sia verificata.
- Non creare archi privi di fonte, né fare diventare una fonte di un legame una prova di un altro.

## Fotografia del grafo esaminato
HEAD osservato: `dd60bc6ec8cbf54a0449cdf66eba6d1e982f5a69`.
`grafo.json`: 699 nodi (309 compositori, 285 correnti, 5 ambiti, altri tipi), 930 archi.
`relazioni.json`: 1.280 relazioni specialistiche.

## Quattro casi pilota — verifica iniziale

### Antonio Vivaldi
Grafo generale: Barocco, Italia, Melodramma barocco. Nessun arco generale con concerto, sonata, musica sacra.
Relazioni specialistiche: concerto violinistico italiano e Ospedali veneziani già documentati, oltre a legami con Corelli e Bach.
**Lacuna grave.** Produzione da rappresentare: concerti solistici, per più strumenti, ripieni e da camera (sintetizzati gerarchicamente nel «Concerto»), sonate/musica da camera, teatro musicale, musica vocale sacra e profana. Il ruolo nello sviluppo del concerto non va confuso con la semplice produzione.
Fonte: https://www.treccani.it/enciclopedia/antonio-vivaldi/

### Arcangelo Corelli
Grafo generale: solo periodo e geografia, nessun genere produttivo.
**Lacuna grave.** Integrare, previa validazione schema, sonata (solistica e a tre) e concerto grosso; conservare separatamente il ruolo storico nello sviluppo del concerto grosso.
Fonte da approfondire: Treccani/Britannica e catalogo delle opere; proposta ancora da validare bibliograficamente.

### Giuseppe Torelli
Grafo generale: solo periodo e geografia.
**Lacuna grave.** Inserire concerto, sonata e sinfonia barocca, valorizzando il ruolo nell'evoluzione del rapporto solo-tutti e la produzione con trombe. Non creare una categoria generale separata per ogni organico.
Fonte: https://www.treccani.it/enciclopedia/giuseppe-torelli_%28Dizionario-Biografico%29/

### Domenico Scarlatti
Grafo generale: solo periodo e geografia.
**Lacuna grave potenziale.** Verificare e rappresentare le sonate per tastiera e gli altri settori effettivamente significativi (anche teatro e musica vocale sacra) con fonti puntuali prima dell'integrazione.
Verifica bibliografica puntuale ancora da completare.

## Prossima lavorazione
1. Definire gli identificativi condivisi del vocabolario produttivo senza duplicare nodi attuali.
2. Campione di 20–30 compositori con fonti per ogni aggiunta.
3. Accumulare lotti e validare offline schema, referenze degli archi, assenza duplicati e resa delle tre lenti.
4. Applicare modifiche ai file condivisi solo dopo rilettura del nuovo HEAD e controllo delle modifiche parallele.

**Nessuna aggiunta ai file `grafo.json`, `relazioni.json`, `app.js` è autorizzata da questo documento: è un audit pilota, non un cambio silenzioso della UI.**
