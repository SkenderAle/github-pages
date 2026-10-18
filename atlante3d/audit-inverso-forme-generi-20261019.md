# Musurgia Mundi — Audit inverso delle forme vocali, strumentali e coreografiche
Data: 19 ottobre 2026 · Repository `SkenderAle/github-pages` · branch `main`.

## Risultato strutturale del lotto
Il lotto si riferisce a **nove categorie**, controllate dopo gli interventi sui primi sei generi. Il grafo è passato da 1751 a **1880 archi** (+129 netti) a parità di **842 nodi**: **130 nuovi archi, 1 arco erroneo rimosso**. Le nuove relazioni hanno estremi presenti nel database e non ci sono ripetizioni dirette fra compositore e categoria per le nove categorie.

| Categoria | Compositori collegati direttamente dopo l'intervento |
|---|---:|
| Messa | 26 |
| Cantata | 13 |
| Oratorio | 13 |
| Mottetto | 21 |
| Quartetto d’archi | 27 |
| Suite | 17 |
| Fuga | 15 |
| Variazioni | 22 |
| Balletto | 20 |

### Incrementi documentati
- Messa: 19 nuovi collegamenti.
- Cantata: 3.
- Oratorio: 7.
- Mottetto: 18.
- Quartetto d’archi: 21.
- Suite: 14.
- Fuga: 12.
- Variazioni: 22.
- Balletto: 14, inclusa la rettifica relativa a Pierre Henry.
- Rimosso l'arco `compositore-pierre-henry` → `genere-messa`: `Messe pour le temps présent` (1967) è musica per un balletto di Maurice Béjart; controllo su fonti del Festival di Avignone e su IRCAM.

## Protocollo conservativo
1. Creare solo relazioni riferite a repertori identificabili: Messa, Oratorio e Mottetto non sono sinonimi di «musica sacra».
2. Per gli strumenti, distinguere il *quartetto d’archi* dall'indicazione generica «musica da camera», la *suite* dalla generica successione di pezzi, la *fuga* dall'uso del contrappunto.
3. Conservare nell'arco il titolo di un esempio d'opera o un riferimento al repertorio. Le fonti biografiche catalogate sono un **primo riferimento**, ma non certificano necessariamente il titolo particolare: occorre controllo successivo nel catalogo delle opere per le relazioni non documentate esplicitamente nella biografia.
4. Per il balletto distinguere balletto di corte, opéra-ballet, balletto di repertorio e musica realizzata per uno spettacolo coreografico.
5. Non duplicare autori, opere, ascolti e archi esistenti.

## Commit
- `6b2ef9479b5397e3899885d45cf7bdb2793c5b7b`: Messa, Cantata, Oratorio, Mottetto, correzione Pierre Henry.
- `4a3cb8b04be0adf15ef8ccd72a32ce8fdf3332a8`: Quartetto d’archi e Suite.
- `1c48ed1fcca63a091a53742adfd6efe0fe6273f5`: Fuga e Variazioni.
- `1296c75521eeaa2100c4a849c077f76efd1d23c5`: Balletto.
- `a5c72d94010a01f3c186ea4dbd70d95a8abca750`: Fonte IRCAM integrativa.

## Controlli ancora aperti
- Verifica sistematica delle opere campione nei cataloghi tematici e nelle edizioni autorevoli, soprattutto quando la biografia associata non cita l'opera scelta.
- Audit inverso di scuole, tradizioni e tecniche, distinguendo appartenenza effettiva, repertorio e influenza.
- Collegamenti bidirezionali fra categorie, schede delle opere e audioteche del sito.
- Collaudo nel browser della navigazione reale e dei filtri grafici.
