# Musurgia Atlantis — Lotto 08: 265 intestazioni senza lemma riconosciuto

**Data:** 10 novembre 2026 · **Stato:** triage non distruttivo · **Branch:** main.

## Fonte e conteggi verificati
Fonte locale: `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.json`, derivato dall'Excel `compositori_flaminio.xlsx`. Filtrate esattamente le **265** denominazioni con `stato=no_forma_riconosciuta`, in ordine di frequenza decrescente e, a parità, denominazione alfabetica. Le voci rappresentano **8.608** righe catalografiche, NON 8.608 composizioni autonome.

- **265/265** intestazioni esaminate nel triage;
- **20** interpretazioni editoriali puntuali;
- **245** preclassificazioni basate su regole da verificare;
- **61** intestazioni con almeno un lemma musicale candidato;
- **204** senza lemma assegnabile con queste regole. Queste 204 non sono necessariamente nuovi generi.
- **88** richiedono ulteriori ricerche perché non sono classificate dalle regole in modo informativo.

Dopo un controllo qualitativo, eliminate due equivalenze non sicure: `Cantici` non viene automaticamente ridotto a `Canto` e `Melodie` in italiano non viene automaticamente equiparato alla forma storicamente definita `Mélodie francese`. `Songs` rimane un termine inglese da disambiguare, non diventa automaticamente `Canzone`. Preservare il letterale di ogni fonte.

## Esempi decisivi
| Intestazione Flaminio | Interpretazione provvisoria | Cautela |
|---|---|---|
| Liriche per voce e pianoforte | repertorio vocale + organico | non attribuire Lied o Mélodie a tutte le opere |
| Musica sacra | ambito funzionale | non forma canonica |
| Musica profana a stampa | ambito + caratteristica editoriale | due faccette indipendenti |
| Péchés de vieillesse | raccolta/ciclo rossiniano | non genere |
| Gloria | testo liturgico / sezione / opera autonoma | controllare opera individuale |
| Canoni | Canone | tecnica o composizione |
| Villanelle | Villanella | lemma singolare da associare a brani specifici |
| Miserere | testo e composizioni che lo musicano | non unica opera |
| Magnificat | testo e tradizione di composizioni | distinguere testo e realizzazione |
| Triosonate | Sonata a tre | non equivalere genericamente al Trio |
| Anthems | Anthem | tradizione inglese, non generico Inno |
| Catches | Catch | non automaticamente qualunque Canone |
| Musica di scena | destinazione/uso teatrale | non sempre genere Opera |
| Commedie per musica | possibile genere storico teatrale | non fondere automaticamente con Opera buffa |
| Opere dubbie/perdute | stato documentario | attribuzione ed esistenza distinte |

## Artefatti della conversazione
- `ATLANTIS_FLAMINIO_LOTTO08_265.csv`: 265 intestazioni con frequenze, categoria proposta, lemmi candidati, segnali, metodo e cautele;
- `ATLANTIS_FLAMINIO_LOTTO08_265.json`: medesimi record strutturati con riepilogo.

Gli artefatti non sono stati inseriti nel repository da questo documento; per ulteriore elaborazione occorre utilizzare i file della conversazione o materializzarli esplicitamente. Il presente rapporto è la persistenza dell'analisi e dei vincoli.

## Stato complessivo, senza sovrastimare le convalide
Le 635 intestazioni composite precedentemente individuate sono state tutte **triagiate nei Lotti 04–07**, non tutte convalidate musicologicamente; il Lotto08 esamina le 265 senza lemma, gruppo distinto. Restano **267** voci `candidato_forma_singolare_non_validato` da sottoporre a verifica tassonomica trasversale. I gruppi del Lotto03 (599 + 36 + 265 + 267) sommano 1.167, e le 635 composite sono 599 + 36: non si devono sommare nuovamente i 265 come sottogruppo delle 635.

## Prossima ripresa
1. Audit delle **267** candidate di genere/forma al singolare, confrontandole con il vocabolario completo di Mundi e Atlantis.
2. Caricare/leggere il corpus completo degli alberi musicologici, non soltanto i 50 nodi Checkpoint11; distinguere sinonimo, sottogenere, organico, testo, medium e raccolta.
3. Da lì proporre un crosswalk versionato e multiappartenenza: nessuna importazione di archi da etichetta sola; validare opere individuali, deduplicazioni e provenienza.
4. Separatamente riprendere Checkpoint24 storico-filologico persona-persona a **74/233**, prossimo lotto 50, senza confondere relazioni storiche con tassonomia.

**Nessuna modifica a** `musurgia-atlantis/grafo.json`, `atlante3d/` o GUI pubblica. I 210 lotti di audit storico restano tutelati.
