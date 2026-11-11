# Musurgia Atlantis — Checkpoint 52F
## Mozart, Don Giovanni, Flauto magico, Singspiel e gerarchia Opera

**Data:** 11 novembre 2026.
**Stato:** PASS su test mirati. **Regressione end-to-end 24 JSON e WebGL NON certificata.**
**Produzione:** `musurgia-atlantis/grafo.json` e `index.html` invariati.

### Difetto riscontrato
La preview conteneva già le relazioni `E0736: Mozart→Don Giovanni`, `E0739: Mozart→Il flauto magico` e i termini `Dramma giocoso`, `Singspiel`, `Opera`. Partendo da Mozart o dalla singola opera il percorso era ricostruito; partendo dalla **radice Opera**, invece, erano indicizzate le opere ma non veniva ripristinato il sottogenere intermedio `Dramma giocoso`, pur essendo nella tassonomia del Checkpoint19. L'ordine dei passaggi dell'helper si limitava a risalire la gerarchia e non completava l'albero discendente per le sole opere già autorizzate.

### Correzione pubblicata
**Commit:** `e13814bb2468ca66a3ea664fdcc9254307b579f6`.
Nel file di staging `PREVIEW_RADICATA_CHECKPOINT06.html` la funzione `attachMozartTaxonomy`, quando la radice è precisamente `legacy:gf:genere-opera` e la pertinenza è almeno 2, attraversa le sottocategorie tassonomiche documentate e recupera le classificazioni **solo delle opere di Mozart già presenti nella vista**. Non apre autori né opere estranei. Nessun nuovo arco inventato: usa quelli esistenti nell'overlay.

### Test svolti
**Registro macchina:** `REGRESSIONE_MOZART_OPERA_CHECKPOINT52F_2026-11-11.json`; commit `6dfb2f043a4ce1ca3d2c59a9733cac67216a35be`.

Esecuzione del codice estratto dalla preview pubblicata, usando il blob del grafo reale `4863b3fe263154387de3388c0b813b5f94546f12`, gli overlay reali `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`, `OVERLAY_TASSONOMIA_MOZART_CHECKPOINT19_2026-11-09.json` e gli helper Singspiel/52E.

**Sette radici:** Mozart (7 nodi/12 archi), Don Giovanni (5/7), Flauto magico (4/6), Opera (10/20), Dramma giocoso (5/6), Singspiel (4/6), Clementi (1/0). **Zero archi orfani e zero ID di arco duplicati**. Su Opera ora risultano completi entrambi i percorsi:
- Mozart→Don Giovanni→Dramma giocoso→Opera comica italiana (categoria editoriale provvisoria)→Opera.
- Mozart→Il flauto magico→Singspiel→Opera.

Clementi come radice isolata di prova non eredita opere di Mozart. Non significa che Clementi non possa possedere collegamenti propri nell'Atlantis reale; il test controlla soltanto il comportamento dell'helper specializzato.

### Limiti e prossime verifiche
Questo test mirato ha usato un set di nodi iniziali noto e gli overlay pertinenti, non il caricamento simultaneo dei 24 JSON e non il renderer 3D reale. Restano da certificare la pertinenza delle opere presenti nella radice Opera, i filtri di categoria, le etichette, la compatibilità browser/mobile, il recupero di Leopold Mozart dall'Atlante 3D, la classificazione di *Le Petit Riens* e i grafi Sonata/Quartetto/Cantata. La categoria provvisoria `Opera comica italiana` **non** deve essere trattata come identità storica conclusiva di Singspiel o dramma giocoso.

Nessun merge in produzione prima della certificazione finale.
