# Audit opere teatrali interautore — Lotto 1
## Musurgia Mundi / Atlantis / Flaminio · 19 novembre 2026

**Ambito:** solo `musurgia-atlantis/audit-integrazione/`. Produzione pubblica esclusa. Lotto 2 Flaminio BLOCCATO.

### Criterio dell'audit
Il campo storico Atlantis `category: opera` include **193 nodi**, ma non significa automaticamente «opera lirica»: vi compaiono anche balletto, film, brani strumentali, movimenti, raccolte e produzioni. Di conseguenza non si deve collegare in massa l'intera categoria al genere musicale Opera.

Sono state selezionate **otto opere teatrali già identificate** mediante relazioni compositore→opera attestate nei dati originali. Per ciascuna è stato verificato che mancasse un arco diretto all'entità canonica `atlantis::senso:opera`. Tre ricevono anche un raccordo opera-specifico a un sottogenere distinto; un raccordo ulteriore connette Beethoven al genere Opera, motivato esclusivamente dall'opera attestata *Fidelio*.

| Compositore | Opera esistente | Nuovi raccordi | Fonte principale |
|---|---|---|---|
| Claudio Monteverdi | *L'Orfeo* (1607) | Opera (favola in musica originaria) | [Corago, libretto](https://corago.unibo.it/libretto/DRT0017741) |
| Jean-Philippe Rameau | *Les Indes galantes* | Opera (opéra-ballet già classificata in Atlantis) | [Philharmonie de Paris](https://collectionsdumusee.philharmoniedeparis.fr/0751016-les-indes-galantes-de-jean-philippe-rameau.aspx?_lg=fr-FR) |
| Ludwig van Beethoven | *Fidelio* | Opera; Beethoven→Opera attestato da Fidelio | [Beethoven-Haus](https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICAnPmr7QgM/) |
| Gioachino Rossini | *Il barbiere di Siviglia* (1816) | Opera; Opera buffa | [Rossini Opera Festival](https://www.rossinioperafestival.it/soggetti/almaviva-ossia-linutile-precauzione/) |
| Georges Bizet | *Carmen* (1875) | Opera; Opéra-comique | [Opéra-Comique, Parigi](https://www.opera-comique.com/fr/spectacles/carmen-0) |
| Carl Maria von Weber | *Der Freischütz* (1821) | Opera; Opera romantica | [Staatsoper Berlin](https://www.staatsoper-berlin.de/de/veranstaltungen/der-freischuetz.2745/) |
| Giuseppe Verdi | *Aida* | Opera | [Corago](https://corago.unibo.it/opera/Z000008692) |
| Giacomo Puccini | *La bohème* | Opera | [Catalogo Puccini](https://catalog.puccini.it/works/la-boheme) |

### Verifica eseguita in V8 con 17 sorgenti reali
Le 17 sorgenti JSON effettive del repository sono state caricate e passate alla funzione originale `buildUnifiedDatabase`. È stata richiamata la logica `rootedProjection` estratta dall'HTML effettivo di staging, non una proiezione fittizia.

| Indicatore | Prima | Dopo |
|---|---:|---:|
| Sorgenti | 17 | 17 |
| Nodi | 2.897 | **2.897** |
| Archi | 8.731 | **8.743** |
| Schede Flaminio | 500 | **500** |
| Archi orfani | 0 | **0** |
| ID arco duplicati | 0 | **0** |
| Otto opere di nuovi autori nel focus Opera | Non tutte visibili | **8/8 visibili** |

Le proiezioni musicali rispettano le classificazioni:
- **Opera buffa**: *Le nozze di Figaro* e *Il barbiere di Siviglia* di Rossini; non l'omonimo *Barbiere* di Paisiello, rimasto distinto.
- **Opéra-comique**: *Carmen*, nonostante la vicenda tragica.
- **Opera romantica**: *Der Freischütz*.
- **Singspiel**: *Il flauto magico*, invariato.
- I focus Rossini→Opera buffa, Bizet→Opera, Weber→Opera, Beethoven→Opera, Verdi→Opera e Puccini→Opera mostrano soltanto la singola composizione pertinente verificata nel gate. Mozart→Opera conserva le quattro opere del checkpoint precedente.

**Non si è dedotto alcun sottogenere da un'etichetta dell'autore o da una somiglianza di titolo.** L'arco Beethoven→Opera è dichiarato «repertorio attestato da Fidelio», non classificazione delle altre opere di Beethoven.

### Verifiche residue e anomalia da seguire
- La vista radicata per il nodo `atlantis::senso:opera-ballet` non espone ancora *Les Indes galantes* attraverso l'arco originale `L02-A35`, pur presente e verificato in Atlantis. La classificazione è conservata, ma **la visualizzazione di tale relazione è un gate aperto**: richiede ispezione della logica di specializzazione e test browser.
- Alcuni record Flaminio del Lotto 1 sono già collegati al genere Opera: la presenza di un arco non equivale all'audit definitivo della scheda fonte, dell'identità compositiva e delle versioni.
- L'aggiornamento delle aspettative nei nove test Node non ne costituisce l'esecuzione integrale via CLI. Rimangono aperti i collaudi DOM/WebGL/Canvas e Android.
- *Die Entführung aus dem Serail* non è stato introdotto: occorrono prima una scheda fonte identificata e un gate di identità/versione.

**Stato:** `PASS_REAL_DATA_V8_WORK_SPECIFIC_CROSSAUTHOR`; `OPEN_ALL_NODE_RUNTIME_AND_BROWSER_TESTS`; `LOTTO2_BLOCKED`. Produzione invariata.
