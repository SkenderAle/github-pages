# Musurgia Atlantis — Lotto 05: triage di 200 intestazioni composite Flaminio

**Data:** 10 novembre 2026 · **Ramo:** main · **Perimetro:** staging e rapporto d'audit, non grafo pubblico.

## Corpus e continuità

Fonte effettiva: `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.json`, costruito dal file `compositori_flaminio.xlsx`. Dalle **635** intestazioni classificate nel Lotto 03 come `intestazione_o_percorso_con_lemmi` o `composita_da_esaminare`, sono state riordinate per **frequenza decrescente** e, in caso di parità, per denominazione. Il confronto con `ATLANTIS_FLAMINIO_LOTTO04_TOP50.json` conferma lo stesso *insieme* di 50 denominazioni; alcune parità interne cambiano posto per criterio alfabetico. Escluso completamente il primo blocco, così non si duplicano record.

**Questo lotto:** posizioni **51–250**, esattamente **200 intestazioni distinte**, per **10.707 righe catalografiche**. I primi 50 già registrati coprivano **15.838 righe**: totale cumulato **250/635 intestazioni** e **26.545 righe catalografiche** (non opere uniche); **385 intestazioni** composite ancora da affrontare.

## Metodologia — trasparenza di stato
- **40** casi ricevono interpretazione editoriale mirata (scelta tipologica e specifica cautela).
- **160** sono *preclassificazioni a regole* sui segnali linguistici dell'intestazione, con lemma candidato dal Lotto 03.
- Tutti i **200** conservano originale letterale, frequenza, foglia catalografica, segnali rilevati, lemma eventualmente candidato, motivazione, metodo, `merge_autorizzato=false` e `record_opera_esaminati=false`.
- Le 160 classificazioni a regole **non sono 160 convalide storico-musicologiche** e non devono essere eseguite come merge. Non sono stati esaminati individualmente tutti i 10.707 record sottostanti.

Distribuzioni indicative: **54** `organico_destinazione`, **16** `sezione_catalografica_con_generi`, **14** `generi_multipli`, **13** `genere_organico`, **11** `ambito_repertoriale`, **11** `genere_o_forma_candidata`, **26** `intestazione_ambigua`, oltre a ulteriori tipologie specialistiche. Le categorie sono proposte mutually exclusive per l'analisi, ma gli attributi semantici di un record reale potranno essere molteplici.

## Decisioni e cautele mirate
1. Pos. 54, `Pianoforte solo > Parafrasi, trascrizioni da opere, ecc.`: trattamento derivativo; non autore automaticamente dell'opera di origine.
2. Pos. 60, `Gruppo XXII: Messe (supplementi di dubbia attribuzione)`: **Messa** e **attribuzione dubbia** sono faccette diverse.
3. Pos. 90, `Composizioni perdute, solo progettate o terminate da altri compositori`: tre condizioni documentarie diverse.
4. Pos. 102, `Gruppo VI - Libretti > A. Drammi per musica e intermezzi`: libro/libretto e musica sono entità distinte; testo non equivale a composizione.
5. Pos. 106, `Preludi, Toccate, Fughe, Fantasie, Passacaglie`: intestazione multi-forma; non assegnare tutte le forme a ogni opera.
6. Pos. 117, `Opere buffe, farse, intermezzi, commedie musicali`: tipologie teatrali differenti.
7. Pos. 119, `Composizioni erroneamente attribuite`: non trasformare un'attribuzione errata in arco autore certificato.
8. Pos. 121, `Contrafacta spirituali a stampa di composizioni profane`: conservare relazione di derivazione e nuova funzione, non duplicare ciecamente.
9. Pos. 133, `Preludi corali, partite e variazioni sui corali`: **Preludio corale** è una locuzione, non un Preludio + un Corale trattati come due opere.
10. Pos. 164, `Trio sonate`: forma storicamente riconducibile alla **Sonata a tre**; non sinonimo generale del repertorio per trio.
11. Pos. 169, `Pezzi vari per opere non identificate`: opere madri non identificate, vietato inventare il nodo di provenienza.
12. Pos. 170, `Songs > Songs, A - E`: ordinamento alfabetico, non sottogenere.
13. Pos. 173, `Gruppo 5: Opere`: possibile intestazione catalografica; `Opere` non autorizza automaticamente Opera lirica.
14. Pos. 194, `Sinfonie e concerti`: **Sinfonia** e **Concerto** distinti.
15. Pos. 197, `Trii, quartetti, quintetti, sestetti`: classificare ogni singola composizione, non creare super-genere improprio.
16. Pos. 210, `Gruppo XIX: Brani per Flötenuhr`: strumento/orologio musicale, non genere.
17. Pos. 211 e 247, `Musica per il balletto` / `Musica per i balletti`: destinazione scenica, non sempre un balletto integrale.
18. Pos. 225, `Opere perdute, dubbie, spurie, ecc.`: distinguere esistenza, conservazione e certezza attributiva.
19. Pos. 231, `Gruppo 12: Ouvertures, Cassazioni, Serenate, Divertimenti per orchestra`: forme multiple, organico orchestra a parte.
20. Pos. 241, `Opere per le quali Mayr ha composto arie ecc.`: la paternità di singole arie non trasferisce a Mayr l'intera opera.

## Allegati prodotti in conversazione
- `ATLANTIS_FLAMINIO_LOTTO05_200.csv` — 200 righe consultabili con classificazioni e cautele;
- `ATLANTIS_FLAMINIO_LOTTO05_200.json` — stessi dati strutturati, tracciabilità e conteggi.

**Importante:** gli allegati completi sono stati creati nel contesto della chat e non sono stati caricati in GitHub in questo commit; il repository riceve questo rapporto.

## Prossima ripresa
- **Lotto 06:** intestazioni 251–450, altre **200**; poi Lotto 07: le **185** residue per terminare le 635 composite.
- Rivedere le classificazioni provvisorie contro la tassonomia *completa* di Musurgia Mundi, non soltanto i 50 nodi del Checkpoint 11. Separare genere/forma, organico, ambito, funzione, raccolta, stato dell'opera, testo e fonte.
- Continuare le verifiche dei singoli brani e la deduplicazione, in particolare raccolte come i sei Brandeburghesi e contribuzioni a opere altrui.
- Riprendere a parte Checkpoint24 storico-filologico persona↔persona fermo a **74/233**, prossimo lotto da 50.

Nessun grafo storico di produzione, HTML pubblico o atlante originale modificato; 210 lotti storici tutelati.
