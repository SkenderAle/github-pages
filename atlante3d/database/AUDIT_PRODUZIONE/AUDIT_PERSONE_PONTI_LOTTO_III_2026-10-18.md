# MUSURGIA MUNDI — Audit III · Persone e nessi oltre i compositori
**18 ottobre 2026 · branch `main` · base verificata `8e12cbfca8d3f87db0ce084cdc75b13f84e75d07`**

## Metodo
I repertori e le pagine narrative non nominano soltanto compositori: registi, promotori, poeti e librettisti partecipano alla vita musicale senza essere trasformati in compositori per esigenze della visualizzazione. I nuovi nodi sono `persona`, con `music_relevance=true` e `semantic_type` esplicito. La freccia non equivale a incontro personale: per i testi musicati descrive un rapporto fra poesia e composizione. Le fonti rimangono collegate alle schede e alle singole relazioni.

## Incrementi rispetto al Lotto II
| Indicatore | Lotto II | Lotto III |
|---|---:|---:|
| Compositori | 377 | 377 |
| Altre persone | 80 | 89 |
| Nodi complessivi | 769 | 778 |
| Archi generali | 1049 | 1067 |
| Relazioni documentate | 1301 | 1310 |
| Voci nell'indice autori e persone | 456 | 465 |
| Nodi con rimandi dal grafo al sito | 137 | 146 |
| Nodi con fonti enciclopediche o specialistiche | 22 | 31 |

## Nove persone integrate
- **Cinema:** Federico Fellini, Alfred Hitchcock, Georges Méliès.
- **Sorgenti del melodramma:** Jacopo Corsi, Ottavio Rinuccini.
- **Poesia e musica:** Wilhelm Müller, Heinrich Heine, Paul Verlaine, Eduard Mörike.

Gli archi generali aggiunti (+18) sono collegamenti di **inquadramento storico** e di **riferimento geografico moderno**, non ipotesi di influenza. Georges Méliès ha collegamenti contestuali, ma non una falsa collaborazione con compositori.

## Nove relazioni documentate
1. **Fellini – Nino Rota:** regia e colonne sonore, documentate dal BFI.
2. **Hitchcock – Bernard Herrmann:** collaborazione documentata da Oxford University Press.
3. **Jacopo Corsi – Jacopo Peri:** promozione delle sperimentazioni fiorentine (Treccani, Camerata).
4. **Rinuccini – Peri:** libretti della `Dafne` e dell'`Euridice` musicati da Peri (Treccani DBI).
5. **Rinuccini – Monteverdi:** libretto dell'`Arianna` musicata da Monteverdi (Treccani DBI).
6. **Wilhelm Müller – Franz Schubert:** poesie della `Winterreise` (Oxford Song).
7. **Heinrich Heine – Robert Schumann:** testi del `Dichterliebe` (Oxford Song).
8. **Paul Verlaine – Claude Debussy:** testi delle `Ariettes oubliées` (Oxford Song).
9. **Eduard Mörike – Hugo Wolf:** poesie musicate nei Lieder (Treccani).

Tutte e nove hanno `forward`, `reverse`, nota esplicativa, collegamento alla fonte e `status=documentato`; nessun rapporto testo-compositore implica incontro o insegnamento personale.

## Collegamenti fra grafo, pagine e fonti
Aggiornati `grafo.json`, `relazioni.json`, `indice-autori.json`, `collegamenti-sito.json`, `consultazione.json`. Le nove nuove persone hanno un URL a una sezione esistente di `dal-musical-al-film/`, `melodramma/` o `parola-e-canto/` e link di consultazione specifica a BFI, Oxford, Treccani o Oxford Song. Le pagine provviste dello script condiviso riconoscono i nomi nell'indice senza richiedere nuove schede biografiche.

## Verifiche e limiti
- Unicità degli ID, risoluzione delle estremità degli archi, indice/autori e fonti complete: controlli strutturali superati.
- Le nove ancore di destinazione sono presenti nei relativi HTML.
- Non è ancora stato svolto un collaudo visivo del grafo su desktop o Android.
- L'audit non esaurisce tutti i poeti, librettisti, editori, interpreti, registi e mecenati menzionati nel corpus.
- Restano da verificare in modo più puntuale gli archi di trasmissione, la distinzione fra incarico e formazione e i collegamenti alle schede ascolto dinamiche.
- Il precedente riferimento a `Grove` va inteso come **Grove Music Online**, con accesso eventualmente bibliotecario; non attribuire una voce specifica senza URL verificato.

**Principio:** La musica non sta in fila. Anche chi scrive i versi, sostiene un teatro o costruisce immagini partecipa alla storia, con un ruolo documentato e non inventato.
