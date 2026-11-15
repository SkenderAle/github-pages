# Musurgia Mundi–Atlantis–Flaminio — Checkpoint della cascata cross-DB
**Data:** 15 novembre 2026 — staging reversibile; Flaminio Lotto 2 BLOCCATO; produzione invariata.

## Obiettivo
Ogni nodo deve essere (a) riconciliato con un'identità esplicitamente attestata in un altro archivio, **oppure** (b) collegato tramite un arco semanticamente tipizzato e documentato, **oppure** (c) inserito in un registro di lacune/HOLD con motivazione e fonte da verificare. L'assenza di un duplicato **non** autorizza un arco inventato. Il grafo deve supportare la **cascata di diramazioni** da persone, opere, generi, periodi, strumenti, luoghi e istituzioni, attraverso filtri categoria ed etichetta indipendenti.

## Diagnosi precedente al checkpoint
Ho letto direttamente tutti i nodi e gli archi dei file originali:
- Mundi 869 nodi e 2.437 archi (**164 nodi con grado zero nel solo grafo base**).
- Atlantis 754 nodi e 1.718 archi (**3 nodi con grado zero nel solo grafo base**).
- Staging Flaminio Lotto 1 1.365 nodi e 2.780 archi (**nessun grado zero, ma 6 componenti indipendenti**).
- Altre relazioni Mundi: 1.389 relazioni specialistiche e 30 relazioni dell'estensione operetta/musical.
- Con le 162 identità preesistenti di persona, 12 coppie tassonomiche, 10 rinvii Flaminio legacy, 5 identità persona Atlantis/Flaminio e 4 nodi Vivaldi curati, **prima** di questo commit: **2.817 nodi, 8.379 archi** (ponti editoriali automatici esclusi dal conteggio di questa diagnosi); nessun endpoint invalido. **7 componenti integrali**, massima 2.757 nodi, 60 fuori; **2 assolutamente isolati**: Festspielhaus Bayreuth e Ballet de cour.
- Escludendo documentazione e HOLD, **14 nodi musicali senza archi visibili** e **659 nodi documentari** correttamente esclusi dalla vista musicale; la sola presenza di collegamenti documentari non è ancora un legame musicale attestato.

**Attenzione alle metriche:** il modulo unificato può aggiungere ponti editoriali automatici di puro supporto alla navigazione. I conteggi della diagnosi manuale sopra **non** comprendono quei ponti e non sostituiscono l'audit dinamico del modulo distribuito. Le cardinalità post-checkpoint vanno lette dalla nuova pagina di audit (non presunte).

## Riconciliazioni eseguite
Sono state curate **9 identità tassonomiche aggiuntive**:
- Sinfonia, Cantata, Oratorio, Lied, Operetta, Musical, Madrigale, Lauda e Ricercare (forma).
- Sinfonia e il suo nodo Atlantis convergono finalmente in un'unica identità di navigazione. Le opere restano individuali e gli archi originari non sono scartati.
- **Samuel Barber** e **Amy Beach**: i riferimenti personali Flaminio recano ID `legacy:gf:compositore-...`, stessa etichetta e `origin = atlante3d/database/grafo.json`. Aggiunti **2 redirect di identità esplicita Flaminio→Mundi**; gli archi delle rispettive opere così raggiungono il patrimonio Mundi senza inventare attribuzioni. Non sono fusioni fra omonimi basate sul solo testo.

Sono stati aggiunti **6 archi musicali motivati**:
1. Festspielhaus di Bayreuth → Richard Wagner (sede voluta per il progetto teatrale wagneriano). [Fonte ufficiale Bayreuther Festspiele](https://www.bayreuther-festspiele.de/en/festival/history/).
2. Ballet de cour → Balletto (relazione storica, non identità con balletto moderno). [Opéra national de Paris](https://www.operadeparis.fr/en/visits/exhibitions/a-certain-air-of-italy-the-paris-opera-from-louis-xiv-to-the-revolution/11-how-it-all-started-court-ballets).
3. *The Jazz Singer* (1927) → Cinema sonoro (caso storico di uso del sonoro sincronizzato, non primo film integralmente sonoro). [Library of Congress](https://www.loc.gov/static/programs/national-film-preservation-board/documents/jazz_singer.pdf).
4. Sinfonia in si bemolle maggiore di J. C. F. Bach (identità di opera candidata Flaminio) → Sinfonia. [Guida Flaminio](https://www.flaminioonline.it/Guide/BachF/Bachf-Sinfonia28.html).
5. Variazioni attribuite a Nicolaus Vetter (già BWV 771) → Variazioni, preservando l'attribuzione corretta. [IMSLP](https://imslp.org/wiki/Allein_Gott_in_der_H%C3%B6h_sei_Ehr_%28Vetter%2C_Nicolaus%29).
6. Jean-Nicolas Bouilly → Fidelio, quale autore del dramma originale fonte del soggetto (non autore del libretto tedesco dell'opera). [Beethoven-Haus](https://www.beethoven.de/en/work/view/ag9iZWV0aG92ZW4tdml1cjNyEQsSBHdvcmsYgICAnPmr7QgM/).

## Cardinalità del crosswalk aggiornato
- 12 → **21** identità tassonomiche esplicite Mundi–Atlantis.
- 10 → **12** riferimenti Flaminio di identità canonica Mundi.
- 25 → **31** archi musicologici curati (comprendono i collegamenti Opera/Singspiel eseguiti nei precedenti checkpoint).
- 162 identità storiche persona Mundi–Atlantis e 5 corrispondenze persona Atlantis–Flaminio rimangono invariate.
- Tutte le 500 schede del lotto 1 sono mantenute.

## Corrispondenze volutamente NON fuse
- Balletto Mundi come `teatro-danza` e balletto Atlantis come `genere`: definire tassonomia coerente prima del redirect.
- Jazz e Ragtime, classi "genere" in Mundi e "tradizione" in Atlantis, non automaticamente identiche.
- Poema sinfonico ottocentesco Mundi vs concetto di poema sinfonico più ampio in Atlantis.
- Fuga come forma specifica vs nodo Atlantis "Contrappunto e fuga".
- Frottola in Mundi come repertorio di corti italiane vs voce Atlantis con approccio potenzialmente più ampio.

## Diagnostica riutilizzabile
- `AUDIT_CASCATA_CROSSDB_2026-11-15.mjs`: calcola **ogni nodo**, grado totale e grado musicale, documentazione e HOLD, identità multifonte, componenti della rete integrale e della rete visibile, con registro completo dei casi aperti. Mantiene separato il valore "connesso" dal valore "dimostrato musicalmente".
- `VISTA_AUDIT_CASCATA_CROSSDB_2026-11-15.html`: pagina consultabile dal sito che importa il database unificato reale, mostra i conteggi in tempo di esecuzione, consente filtro per nome, categoria e stato e scarica l'audit completo JSON.
- Il modulo `DB_UNIFICATO_MUNDI_ATLANTIS_LOTTO01_2026-11-15.mjs` ha gate aggiornati a 21/12/31 e permette il redirect di persone Flaminio *persona_riferimento_esterno* **solo** con ID `legacy:gf:`, `origin` esplicitamente Mundi, flag `staging_reference_only`, etichetta coincidente e tipo Mundi `compositore/persona`.

## Controlli successivi obbligatori
1. Caricamento effettivo JavaScript e dati nel browser, controllo dei nuovi conteggi, assenza di archi orfani, conservazione 500/500 fonti, zero conflitti di ID.
2. Ricerca radicata su Sinfonia, Opera, Concerto, Sonata, Bach, Barber, Beach, Wagner, Ballet de cour e Cinema sonoro ai livelli 1–5, con filtri indipendenti e senza espansione indebita a opere di altri autori.
3. Non trasformare automaticamente in opere musicali attive i record bibliografici `parte_di_oratorio_documentaria`, i casi con attribuzione in HOLD e altri nodi esclusivamente documentari.
4. Per ogni altro nodo senza arco musicale, distinguere fonti mancanti, errore di categoria e assenza vera di relazione; non colmare il vuoto con collegamenti generici a «Musica».

**Stato:** integrazione dei checkpoint svolta e analizzatore predisposto; interazione reale desktop/Android ancora da collaudare. Non è certificata una riconciliazione semantica completa di tutti i nodi. Il lotto 2 resta bloccato.
