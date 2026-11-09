# Audit preliminare — Excel Flaminio fornito dall'utente
**Data:** 10 novembre 2026 · **Fase:** inventario sorgente, nessuna importazione · **Repository:** SkenderAle/github-pages

## Origine e campo
File locale ricevuto in chat: `compositori_flaminio.xlsx`. Un foglio `Sheet1`, intervallo `A1:H52151` (intestazione + **52.150** record). Questo verbale registra solo statistiche e criteri; **il contenuto integrale dell'Excel non è stato caricato sul repository**.

## Colonne
`Compositore`, `Genere/Forma`, `Opus/Numero`, `Anno`, `Brano`, `Parte`, `Dettagli`, `Link spiegazione`.

## Conteggi osservati
| Campo | Righe valorizzate | Distinti non vuoti |
|---|---:|---:|
| Compositore | 52.150 | 149 |
| Genere/Forma | 51.828 | 1.167 |
| Opus/Numero | 49.870 | 16.631 |
| Anno | 35.840 | 1.602 |
| Brano | 52.150 | 39.924 |
| Parte | 20 | 5 |
| Dettagli | 50.952 | 44.940 |
| Link spiegazione | 7.412 | 7.137 |

**Limiti:** un record Excel non equivale necessariamente a un'opera autonoma. Le 1.167 stringhe di `Genere/Forma` contengono classificazioni bibliografiche specifiche, prefissi numerici, percorsi annidati, organici, accorpamenti e ambiti storici: non sono 1.167 categorie tassonomiche validate. 322 righe non hanno `Genere/Forma`; 44.738 non hanno `Link spiegazione`.

## Esempi di copertura
- Haydn Franz Joseph: 2.207 righe, 89 denominazioni di genere e 165 link.
- Bach Johann Sebastian: 1.425 righe, 42 denominazioni e 312 link.
- Vivaldi Antonio: 976 righe, 40 denominazioni e 226 link.
- Mozart Wolfgang Amedeus: 854 righe, 30 denominazioni e 328 link.
- Corelli Arcangelo: 214 righe, 4 denominazioni e zero link.

## Problemi da risolvere prima della migrazione
1. Normalizzazione d'identità senza collisioni: `MOZART, Wolfgang Amedeus` va ricondotto con fonte al Mozart Atlantis, ma conservando esattamente la grafia di provenienza, senza considerare nomi identici prova sufficiente.
2. Record → composizione → movimento/parte → versione/trascrizione: identificare tipi distinti senza presumere unicità da titolo solo.
3. Conservare `Genere/Forma` **letterale** più un crosswalk **molti-a-molti** su classi normalizzate, marcando conflitti e casi non assegnabili.
4. `Opus/Numero` può essere numerazione interna di catalogo Flaminio, non sempre numero d'opera storico; non creare identificatori d'opera canonici direttamente da tale campo.
5. `Link spiegazione` è una risorsa editoriale puntuale con provenienza, non una prova automatica di ogni arco storico.
6. Deduplicare prima contro l'attuale grafo Atlantis e l'Atlante 3D, non sommare meccanicamente 52.150 nodi. Conservare ogni record sorgente e indirizzi di riga nello staging privato.
7. Nessun web scraping addizionale, nessuna pubblicazione delle 52.150 righe, nessun merge o modifica della UI da questo inventario.

## Audit sospesi
- Checkpoint 26: collegare alla **sola preview** le nove nuove relazioni tassonomiche e verificarle; controllare il genitore non risolto `polifonia` e quindi estendere a tutto il vocabolario.
- Checkpoint 24 storico-filologico: **74/233** archi persona↔persona esaminati, prossimo blocco **50**, tenuto separato dai nuovi dati Excel.
- Recuperare e preservare spiegazioni direzionali hover/tap, pertinenza radicata I–V, 210 lotti storici e separazione assoluta dei capitoli editoriali dal grafo storico.
