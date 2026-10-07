# Musurgia Mundi — Audit produzione, macroblocco correttivo 02

**Ramo:** audit-produzione-correttivo-01
**Data:** 8 ottobre 2026
**Commit operativo:** 5b0ef9ef96d2289ce2d79da10d7a7945a2dc5f3a

## Risultato operativo

- 50 ulteriori compositori (posizioni 51–100 nell'elenco corrente dei nodi `compositore`).
- 50 archi `produzione` inseriti realmente in `grafo.json`, con note e URL di fonti.
- 6 nuovi nodi produttivi riutilizzabili.
- Grafo del ramo: 720 nodi, 1036 archi.
- Controllo automatico: 50/50 compositori coperti; nessun estremo di arco mancante; URL presenti negli archi aggiunti.

**Limiti del controllo:** si tratta della **prima relazione produttiva per ciascun compositore**; non rappresenta l'audit esaustivo dei suoi generi e cataloghi. Una fonte già presente nelle relazioni specialistiche può documentare il contesto ma non necessariamente la specifica attribuzione compositiva: sono obbligatori approfondimenti filologici prima della fusione in `main`. Non si è verificato il comportamento del visualizzatore e non è stata rivista l'architettura delle lenti.

| # | Compositore | Generi collegati in questo macroblocco | N. collegamenti produttivi |
|---:|---|---|---:|
| 51 | Francesco Cavalli | Opera / teatro musicale | 1 |
| 52 | Antonio Caldara | Cantata | 1 |
| 53 | Maria Teresa Agnesi | Opera / teatro musicale | 1 |
| 54 | Johann Sebastian Bach | Cantata | 1 |
| 55 | Georg Friedrich Händel | Oratorio | 1 |
| 56 | Georg Philipp Telemann | Cantata | 1 |
| 57 | Heinrich Schütz | Musica sacra | 1 |
| 58 | Dietrich Buxtehude | Musica per organo | 1 |
| 59 | Johann Pachelbel | Musica per organo | 1 |
| 60 | Johann Kuhnau | Sonata | 1 |
| 61 | François Couperin | Musica per tastiera | 1 |
| 62 | Jean-Philippe Rameau | Opera / teatro musicale | 1 |
| 63 | Jean-Baptiste Lully | Opera / teatro musicale | 1 |
| 64 | Élisabeth Jacquet de La Guerre | Opera / teatro musicale | 1 |
| 65 | Marin Marais | Musica per viola da gamba | 1 |
| 66 | Jean-Marie Leclair | Sonata | 1 |
| 67 | Henry Purcell | Opera / teatro musicale | 1 |
| 68 | John Blow | Opera / teatro musicale | 1 |
| 69 | Joseph Haydn | Sinfonia | 1 |
| 70 | Wolfgang Amadeus Mozart | Quartetto | 1 |
| 71 | Franz Schubert | Lied | 1 |
| 72 | Marianna Martines | Cantata | 1 |
| 73 | Carl Ditters von Dittersdorf | Sinfonia | 1 |
| 74 | Johann Georg Albrechtsberger | Musica sacra | 1 |
| 75 | Ludwig van Beethoven | Sinfonia | 1 |
| 76 | Christoph Willibald Gluck | Opera / teatro musicale | 1 |
| 77 | Carl Philipp Emanuel Bach | Sonata | 1 |
| 78 | Johann Christian Bach | Sonata | 1 |
| 79 | Carl Stamitz | Sinfonia | 1 |
| 80 | Johann Stamitz | Sinfonia | 1 |
| 81 | Luigi Boccherini | Quartetto | 1 |
| 82 | Giovanni Paisiello | Opera / teatro musicale | 1 |
| 83 | Domenico Cimarosa | Opera / teatro musicale | 1 |
| 84 | Antonio Salieri | Opera / teatro musicale | 1 |
| 85 | Luigi Cherubini | Opera / teatro musicale | 1 |
| 86 | Niccolò Piccinni | Opera / teatro musicale | 1 |
| 87 | Gioachino Rossini | Opera / teatro musicale | 1 |
| 88 | Vincenzo Bellini | Opera / teatro musicale | 1 |
| 89 | Gaetano Donizetti | Opera / teatro musicale | 1 |
| 90 | Giuseppe Verdi | Opera / teatro musicale | 1 |
| 91 | Niccolò Paganini | Concerto | 1 |
| 92 | Michele Novaro | Inno patriottico | 1 |
| 93 | Luigi Felice Rossi | Inno patriottico | 1 |
| 94 | Giacomo Puccini | Opera / teatro musicale | 1 |
| 95 | Pietro Mascagni | Opera / teatro musicale | 1 |
| 96 | Ruggero Leoncavallo | Opera / teatro musicale | 1 |
| 97 | Arrigo Boito | Opera / teatro musicale | 1 |
| 98 | Felix Mendelssohn | Sinfonia | 1 |
| 99 | Fanny Hensel | Lied | 1 |
| 100 | Robert Schumann | Lied | 1 |

## Prossimi interventi

1. Audit qualitativo mirato su correttezza dei documenti collegati, e su ogni eventuale fonte indiretta o troppo generica.
2. Seconda passata per aggiungere generi importanti ancora assenti (sacro, strumentale, teatro, camera) e la graduazione della loro importanza.
3. Proseguire con macroblocchi da almeno 50, senza anticipare la ristrutturazione delle lenti e degli agglomerati.
