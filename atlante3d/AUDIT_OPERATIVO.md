# Musurgia Mundi — Stato operativo dell'audit relazionale

**Repository:** `SkenderAle/github-pages` · **branch unico di scrittura:** `main`
**Data di consolidamento:** 19 ottobre 2026
**Fonte di verità:** contenuto aggiornato di `atlante3d/database/grafo.json` su `main`.
Questo è uno *snapshot*, non un dato permanentemente valido: dopo ogni commit ricalcolare le statistiche.

## 1. Stato verificato

Il grafo dopo il consolidamento `793531bfaeb001e2a26441462b6481ff28ff9f25` contiene:

- **843 nodi**, dei quali **393 compositori** e **321 categorie** (`type: corrente`).
- **1.969 archi**, tutti con estremi esistenti al controllo effettuato.
- **52 schede d'opera** (`work_archive`) e **21 schede documentarie** (`document_archive`).
- Nessun duplicato compositore–categoria rilevato nella scansione del grafo.

I vecchi numeri **842 / 392 / 1.751** appartengono a una fase precedente. L'autore aggiunto in seguito è **Hanns Eisler**.

## 2. Interventi già realizzati: NON ripeterli

1. Audit iniziale di tutti gli autori, prima 392, poi 393 con Eisler: **prima copertura**, non completezza di genere.
2. Audit inverso iniziale dei sei generi `Opera`, `Concerto`, `Sinfonia`, `Musica da camera`, `Sonata` e `Lied`: già eseguito; [rapporto](audit-inverso-sei-generi-20261019.md).
3. Audit inverso di **Messa, Cantata, Oratorio, Mottetto, Quartetto d'archi, Suite, Fuga, Variazioni, Balletto**: **già eseguito** e pubblicato con 130 aggiunte e una correzione rispetto allo stato iniziale; [rapporto](audit-inverso-forme-generi-20261019.md).
4. Audit inverso di Ricercare, Fantasia, Ouverture e Concerto grosso: [rapporto](audit-inverso-forme-strumentali-lotto3-20261019.md).
5. Audit di teatro musicale, tecniche, scuole e tradizioni: [rapporto](audit-inverso-generi-tecniche-lotto5-20261019.md), [copertura](audit-inverso-scuole-autori-lotto6-20261019.md).
6. Unificazione delle fonti, opere, trattati e raccolte in schede ricercabili, senza perdita dei dati.

**Regola:** un rapporto datato documenta il lotto al momento della sua pubblicazione. NON può sostituire il conteggio attuale del grafo.

## 3. Consolidamento documentato del 19 ottobre

Sei lacune residue aggiunte al grafo, su fonti specifiche:

| Compositore | Genere | Evidenza |
|---|---|---|
| Giacomo Antonio Perti | Messa | Messe a otto e dodici voci, 1682–1687 |
| Giacomo Antonio Perti | Cantata | Produzione accademica e da camera documentata |
| Giacomo Antonio Perti | Oratorio | *Abramo vincitor de' propri affetti*, 1683 |
| Giacomo Antonio Perti | Mottetto | Mottetti per la corte medicea, tra cui *Gaudeamus omnes* |
| Giacomo Antonio Perti | Opera | *Marzio Coriolano*, Venezia 1683 |
| Horatio W. Parker | Oratorio | *Hora novissima*, New York 1893 |

Fonti: [Perti, Dizionario Biografico degli Italiani](https://www.treccani.it/enciclopedia/giacomo-antonio-perti_%28Dizionario-Biografico%29/); [Parker, Yale University Library](https://onlineexhibits.library.yale.edu/s/stoeckel/page/hp).

Commit dati: [793531b](https://github.com/SkenderAle/github-pages/commit/793531bfaeb001e2a26441462b6481ff28ff9f25).

## 4. Stato attuale delle nove categorie

Numeri di **compositori direttamente collegati** (non opere, non link indiretti):

| Categoria | Compositori |
|---|---:|
| Messa | 27 |
| Cantata | 14 |
| Oratorio | 15 |
| Mottetto | 22 |
| Quartetto d'archi | 27 |
| Suite | 17 |
| Fuga | 15 |
| Variazioni | 22 |
| Balletto | 20 |

I valori sono **soglie minime anti-regressione**, non una dichiarazione di completezza del repertorio.

## 5. Controlli eseguibili

Da una copia aggiornata del repository:

```bash
node atlante3d/database/verifica-audit-relazionale.mjs
```

Script: [`database/verifica-audit-relazionale.mjs`](database/verifica-audit-relazionale.mjs).

Il controllo verifica:
- unicità degli ID e presenza di estremi validi;
- assenza di duplicati fra compositore e categoria;
- nove categorie e soglie minime di copertura;
- correttezza strutturale di autori di opere archiviate e rimandi documentari;
- coerenza fra *opera archivistica associata a un genere* e *compositore* per le nove categorie;
- presenza di fonti e note per gli archi del consolidamento;
- **divieto** di riclassificare `Messe pour le temps présent` di Pierre Henry come messa liturgica;
- permanenza dell'accesso all'oratorio di Parker e al repertorio oratoriale di Perti.

**Automazione:** [`.github/workflows/musurgia-audit-relazionale.yml`](../.github/workflows/musurgia-audit-relazionale.yml), configurata su push a `main` e pull request quando cambiano i file controllati, oltre che in esecuzione manuale. Il solo inserimento del workflow non costituisce prova di un run CI riuscito; verificare il risultato nella scheda Actions.

## 6. Regole filologiche non negoziabili

- Collegare compositore e genere per composizioni realmente documentate, non per somiglianza di parole o periodo storico.
- Messa, cantata sacra, oratorio e mottetto sono forme distinte. **Pierre Henry**, *Messe pour le temps présent*, è collegato al **balletto**, non alla messa.
- Non convertire `opera` nel senso di "opere" in teatro lirico; non attribuire a un compositore sinfonie solo perché le ha eseguite.
- Non confondere quartetto d'archi con musica da camera in generale; né fuga con lo studio del contrappunto.
- L'inclusione documentaria di un manoscritto non comporta proprietà, paternità, collaborazione o rapporto personale.
- Conservare fonti, descrizioni, ascolti, schede, ID storici e la navigazione bidirezionale.
- Le modifiche numeriche devono essere **ricalcolate dopo i commit**, indicando chiaramente archi aggiunti, rimossi, e corrette fonti.
- Il validatore certifica **integrità strutturale**, non accuratezza filologica di tutti gli archi: per questi serve verifica titolo per titolo.

## 7. Coda di lavoro effettivamente aperta

1. **Seconda passata filologica** sugli archi già introdotti: verifica delle opere campione in cataloghi tematici ed edizioni critiche, soprattutto dove le note riportano formule generiche.
2. **Controllo semantico** dei collegamenti alle scuole e tradizioni: appartenenza, influenza, frequentazione e istituzione non devono essere equivalenti.
3. **Verifica di copertura navigabile**: categorie, schede d'opera, schede d'autore, opere ascoltabili, pagine e ritorni bidirezionali.
4. **Collaudo visuale nel browser** di click, doppio click, filtri e profondità: le bolle non devono sparire senza recupero.
5. Verifica mirata di generi sottorappresentati e dei musicisti che svolsero soprattutto attività didattica, editoriale o esecutiva. **Nessun arco artificiale** per eliminare gli avvisi.

### Protocollo per ogni lotto futuro

1. Rileggere `main`, prendere SHA e conteggio iniziali, verificare se il lotto esiste già.
2. Redigere lista candidati e dati repertoriali. Separare i casi incerti.
3. Applicare soltanto modifiche sostenute da fonti.
4. Eseguire il validatore e, quando disponibile, controllare la CI.
5. Rileggere il file dopo il commit; riferire numeri effettivi, commit e limiti.
