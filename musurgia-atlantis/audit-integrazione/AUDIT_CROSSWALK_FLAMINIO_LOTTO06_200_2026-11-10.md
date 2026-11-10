# Musurgia Atlantis — Lotto 06: 200 intestazioni Flaminio, posizioni 251–450

**Data:** 10 novembre 2026 · **Branch:** main · **Ambito:** audit-integrazione; nessuna modifica al grafo pubblico.

## Perimetro verificato
Ripresa da `CROSSWALK_FLAMINIO_SINGOLARE_LOTTO03_2026-11-10.json` (635 intestazioni composite) e controllo dell'insieme delle posizioni 51–250 registrate in `ATLANTIS_FLAMINIO_LOTTO05_200.json`.

Selezione non sovrapposta delle **200** denominazioni alle posizioni **251–450**, ordinamento per frequenza decrescente e denominazione alfabetica a parità di frequenza. Somma delle frequenze delle 200 intestazioni: **3.081** righe del catalogo, NON opere uniche. Cumulato **450/635**, rimangono **185** intestazioni composite.

## Qualità della classificazione
- **46** interpretazioni editoriali mirate su casi chiaramente discriminanti.
- **154** classificazioni euristiche a regole con `revisione_necessaria_prima_di_importare_opere`.
- Per **200/200** l'originale Flaminio, la posizione, la frequenza, la foglia del percorso e la motivazione restano conservati; `merge_autorizzato=false`, `record_opera_esaminati=false`.
- Le euristiche non sono convalide storiche, semantiche o attributive. Le **3.081** righe sottostanti non sono state revisionate una per una.

## Risultati tipologici
Tra le tipologie più frequenti: **51** `organico_destinazione`, **37** `intestazione_ambigua`, **12** `genere_organico`, **10** `ambito_repertoriale`, **9** `generi_multipli`, **9** `sezione_catalografica_con_generi`, **8** `sezione_catalografica`, **8** `genere_o_forma_candidata` e **6** `rielaborazione_trascrizione`. Le restanti sono tipologie più specifiche, registrate individualmente.

## Sentinelle con interpretazione editoriale
1. **Pos. 252**, Sonate per due violini e basso continuo: *Sonata* + organico. La definizione moderna di sonata a tre non va applicata automaticamente senza verificare contesto storico.
2. **Pos. 263**, duetti per *baryton*: strumento a corde, non voce baritonale.
3. **Pos. 278**, Ouvertures/Sinfonie/Suites: tre forme distinte, senza assegnazione indiscriminata ai singoli brani.
4. **Pos. 290**, Piccolo libro di Anna Magdalena Bach: raccolta documentaria, più pezzi e attribuzioni differenziate.
5. **Pos. 295**, Concerti/Sinfonie/Balletti/Sonate: percorso misto; la categoria non convalida tutti e quattro i generi per ogni composizione.
6. **Pos. 307**, Opere liriche incompiute, distrutte o perdute: tre stati documentari da conservare separati.
7. **Pos. 310**, Arie da concerto: non necessariamente estratti di opere liriche.
8. **Pos. 313**, Sonate da chiesa: tipologia storica specifica.
9. **Pos. 330**, Arrangiamenti di canti popolari: relazione con il repertorio preesistente, non autore originale automatico.
10. **Pos. 345**, Frammenti/opere incompiute/perdute/libretti non musicati: distinguere conservazione, completamento e tipo testuale.
11. **Pos. 365**, Opere teatrali su libretto di Wagner: attribuzione delle musiche distinta dall'autore del libretto.
12. **Pos. 366**, Sinfonie d'opera: introduzione teatrale distinta dalla sinfonia da concerto.
13. **Pos. 378**, Concerti senza orchestra: genere Concerto senza imporre l'organico orchestrale moderno.
14. **Pos. 395**, Opere pasticcio: possibili molteplici autori, non attribuzione in blocco.
15. **Pos. 413**, Ouvertures da opere liriche: collegamento `estratto_da` o `parte_di` con un'opera madre verificata.
16. **Pos. 414**, Variazioni su corali: Variazione + tema corale; non necessariamente due generi per il brano.
17. **Pos. 449**, Messa e sezioni di Messa: opera completa e singoli movimenti liturgici distinti attraverso `parte_di`.

## Artefatti
Creati nell'ambiente di lavoro della conversazione:
- `ATLANTIS_FLAMINIO_LOTTO06_200.csv`, le 200 intestazioni, frequenze, classi e motivazioni;
- `ATLANTIS_FLAMINIO_LOTTO06_200.json`, record strutturati e riepilogo, inclusi i gate di sicurezza.

**I 200 record non sono ancora stati importati nel grafo pubblico e gli artefatti CSV/JSON restano nel contesto della conversazione.**

## Prossimi passi
Lotto 07: le ultime **185** intestazioni composite, posizioni **451–635**. Seguirà revisione della tassonomia sull'intero corpus, inclusi i **265** casi senza lemma riconosciuto nel Lotto03 e confronto con i vocabolari Mundi completi, non solo i 50 termini della preview. Poi il crosswalk opere→forme e la deduplicazione dell'importazione, con generi al singolare e raccolte separate dalle opere.

Audit storico indipendente Checkpoint24 resta **74/233** archi persona↔persona esaminati, prossimo lotto 50 separato. I 210 lotti storici restano salvaguardati; `musurgia-atlantis/grafo.json`, `atlante3d/` e GUI pubblica invariati.
