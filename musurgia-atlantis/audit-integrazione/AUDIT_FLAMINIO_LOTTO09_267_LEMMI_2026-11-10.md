# Musurgia Atlantis — Lotto 09: 267 candidate di genere e forma

**Data:** 10 novembre 2026 · **Stato:** analisi lessicale e semantica preliminare; nessuna fusione né modifica alla produzione.

## Metodo
Dal file di lavoro `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.json` sono stati selezionati esattamente i **267** record con `stato=candidato_forma_singolare_non_validato`. Frequenze complessive: **12.821** righe di catalogo Flaminio, non opere deduplicate. Confronto effettuato contro i **50** nodi del file GitHub `GENERI_FORME_LEGACY_PREVIEW_CHECKPOINT11_2026-11-09.json`, consultato nuovamente su `main`. Il confronto **NON copre ancora tutti gli alberi storici di Musurgia Mundi** e non prova che un lemma sia nuovo nell'intera federazione.

## Risultati
- 267 intestazioni analizzate, **42 lemmi distinti** candidati.
- **19 lemmi** hanno un identificativo esatto nella selezione dei 50 nodi; **23 lemmi** non vi compaiono.
- **117 intestazioni**: candidato lessicale con ID di categoria già presente, senza segnali critici rilevati dalle regole (non convalida storico-musicologica).
- **96 intestazioni**: richiedono disambiguazione sulle opere individuali, perché coinvolgono forma/organico, raccolta, contesto liturgico, attribuzione, versioni, categorie miste o rapporti con un'opera madre.
- **54 intestazioni**: il lemma proposto non ha ID nella selezione dei 50 ed è privo dei segnali critici individuati; non dedurre per questo l'assenza dal vocabolario completo.
- **0** nuovi generi creati, **0** associazioni opera→genere pubblicate, **0** modifiche al grafo o all'interfaccia.

I 23 lemmi mancanti dalla *selezione* dei 50 sono: Antifona, Aria, Canzone, Corale, Duetto, Graduale, Inno, Intermezzo, Marcia, Mazurca, Offertorio, Poema sinfonico, Polacca, Quartetto, Quintetto, Romanza, Rondò, Salmo, Scherzo, Sestetto, Studio, Trio, Valzer.

## Casi di controllo
- `Lieder` → lemma canonico **Lied**, con l'originale invariato.
- `Cantate religiose (TVWV 1)` → **Cantata** + funzione sacra + riferimento catalografico; il TVWV non è un nuovo genere.
- `Sonate per strumento a tastiera` → **Sonata** + organico.
- `Concerti grossi e concerti per orchestra`: **Concerto** sì come famiglia; concerto grosso e concerto per orchestra non sono automaticamente sinonimi e i lavori sottostanti vanno esaminati.
- `Musica corale` / `Corali per organo`: corale come *forma/testo/tradizione* vs scrittura per coro; vietato confondere i due significati.
- `Quartetti vocali`: **Quartetto** è tipo/formazione; NON equivale all'unico nodo ristretto `Quartetto d'archi`.
- `Trio sonate` o `Sonate a tre`: **Sonata a tre** va conservata come concetto storico distinto da `Trio` generico.
- `Messe e sezioni di Messa`: la Messa completa e le singole sezioni sono entità musicali distinte, con rapporto `parte_di` quando documentato.
- `Intermezzi e musica di scena`: le due tipologie non devono essere applicate simultaneamente a tutti i singoli brani.
- `Balletti incompiuti`: il genere è Balletto, ma l'incompiutezza è uno stato documentario indipendente.
- `Cantate incompiute, perdute o riutilizzate`: non un unico stato; individuare per ciascuna opera se incompiuta, perduta o riutilizzata.

## Vincoli dell'importazione
1. Lemma canonico al singolare; conservazione rigorosa dell'intestazione letterale e della provenienza di riga.
2. Un'opera può appartenere a più generi/forme documentati, ma una categoria composita **non** conferisce tutti i suoi lemmi a ogni brano.
3. Organico, funzione, periodo, stato documentario, testo liturgico, raccolta e versione sono faccette distinte dalla classificazione di forma.
4. Non confondere raccolta con opere individuali: sei Brandeburghesi ≠ unico concerto; lavori estratti o riscritti conservano relazioni alla propria fonte.
5. Nessun passaggio compositore→genere→compositore estraneo nel grafo radicato.
6. I candidati di identità tassonomica non equivalgono a un riscontro filologico dell'opera.

## Prossima fase
Riconciliare i **42 lemmi** contro l'intero patrimonio tassonomico Mundi e Atlantis (non soltanto i 50 selezionati), includendo gli alberi preparati dall'utente; risolvere 23 presunte assenze, omonimie e sottotipi, poi testare le associazioni **singola opera→forma**. In seguito prevedere un crosswalk globale delle **1.167** denominazioni e audit per campione dei record di composizioni. Audit storico persona↔persona Checkpoint24 resta separato a **74/233**.

**Output completo**: `ATLANTIS_FLAMINIO_LOTTO09_267.csv` e `.json` forniti nella conversazione; report su GitHub. I 210 lotti storico-filologici preesistenti sono preservati.
