# Musurgia Mundi — Audit del repertorio minimo

**Checkpoint 8 ottobre 2026**, ramo `audit-produzione-correttivo-01`. Il ramo `main` non è stato modificato.

## Copertura del repertorio obbligatorio
- **332** figure minime distinte, comprese persone storiche e teorici non compositori.
- **258** individuate mediante nomi e alias riconciliati; **74** ancora da rintracciare o inserire.
- Grafo: **364 compositori**, **786 nodi**, **1418 relazioni**.
- La copertura anagrafica minima NON equivale all'esaustività dei repertori produttivi, delle genealogie o delle relazioni.

| Periodo | Individuati | Mancanti | Totale |
|---|---:|---:|---:|
| Medioevo | 22 | 0 | 22 |
| Rinascimento | 48 | 0 | 48 |
| Barocco | 61 | 0 | 61 |
| Classicismo | 32 | 0 | 32 |
| Romanticismo e tardo Romanticismo | 50 | 20 | 70 |
| Primo Novecento e avanguardie storiche | 31 | 20 | 51 |
| Secondo Novecento e contemporaneità | 22 | 36 | 58 |

## Lotti di inserimento già eseguiti
### Medioevo e Rinascimento
- Medioevo: 22/22 nomi identificati. Fra le 14 figure aggiunte, Gregorio Magno, Guido d'Arezzo e Franco di Colonia figurano come `persona`, senza false attribuzioni compositive. Guglielmo IX d'Aquitania e Philippe de Vitry mantengono attribuzioni produttive sospese.
- Rinascimento: 48/48; 11 compositori aggiunti con almeno una produzione inizialmente documentata.

### Barocco
- Barocco: 61/61. Le 24 lacune nominali sono state risolte tramite **23 nuovi compositori** e riconciliazione di Dieterich/Dietrich Buxtehude. I nuovi profili coprono primo melodramma, scuola napoletana, concerto, musica sacra e presenza delle compositrici. Non convertire ogni genere storico in una lente dell'interfaccia.

### Classicismo — ultimo lotto
- Classicismo: **32/32** dopo **10 nuove schede**: Wilhelm Friedemann Bach, Johann Joachim Quantz, Johann Adolf Hasse, Jan Ladislav Dussek, Antonio Sacchini, Vicente Martín y Soler, Maria Theresia von Paradis, Anna Bon di Venezia, Maddalena Laura Sirmen, Hélène de Montgeroult.
- Creati **10 archi produttivi documentati** e **13 archi di appartenenza**. Doppi inquadramenti barocco/classicismo nei tre casi pertinenti Bach, Quantz e Hasse, con una sola identità per autore.
- Distinzioni catalografiche importanti: Artaserse di Hasse ≠ Artaserse di Vinci (pur entrambi del 1730); la *Sicilienne* attribuita a Paradis è spuria e non viene usata come fonte del suo repertorio; i concerti di Maddalena Laura Sirmen ≠ quartetti di collaborazione con Lodovico Sirmen; la trattatistica per flauto di Quantz ≠ suo corpus concertistico; sonate di Anna Bon originali per flauto e basso continuo.
- Fonti per opere specifiche negli archi: IMSLP, cataloghi d'opera e riscontri storico-bibliografici; nessuna pretesa che la copertura di un genere renda esaustiva la produzione.
- Commit grafo: `7b4e70a4e115b1907f4b73e5bc565ff12f45eebf`.

## Ricognizione produttiva precedente
Audit 1–200: copertura iniziale documentata. Audit 201–300: 100 identità verificate, 97 con almeno una produzione documentata, tre sospese (Fritz Reiner, Johann Christoph Bach 1671–1721 e Walter Klein). Audit 301–331: 31 identità, 29 con produzione iniziale e due sospese (Guglielmo IX, Philippe de Vitry). Questo ciclo NON conclude l'audit di tutti i generi, maestri, allievi e influenze.

## Prossimi passaggi
- Romanticismo/tardo Romanticismo: **20** nomi minimi mancanti, alcuni condivisi col Novecento; in seguito completare le 20 lacune nominali del primo Novecento e le 36 del secondo Novecento, senza sommarle impropriamente come figure diverse.
- Prima di ogni nuovo inserimento: controllare omonimi, alias, epoche multiple, generi praticati, attribuzioni storiche e fonti specifiche.
- Rivedere le categorie solo **alla fine** del giro di audit. Non toccare le tre lenti, il visualizzatore e `main`.
- La prima coda `audit_minimi_prossimi100_staging_20261008.json` ha **53 nomi integrati** e **47 ancora sospesi**. Restano 27 elementi fuori dalla coda originale.
