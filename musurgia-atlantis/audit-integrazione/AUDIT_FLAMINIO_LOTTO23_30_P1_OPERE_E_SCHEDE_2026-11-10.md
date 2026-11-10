# Musurgia Atlantis — Lotto 23: audit documentale dei 30 gruppi Flaminio P1 superstiti

**Data:** 10 novembre 2026 · **Repository:** `SkenderAle/github-pages` · **Branch:** `main` · **Ambito:** `audit-integrazione/`, senza mutazioni a grafo pubblico, GUI, pagina narrative o 210 lotti storici.

## Obiettivo e metodo

Ripresa del Lotto22: tutti i **30 gruppi P1** ancora ripetuti dopo aver cessato di utilizzare `casefold` come identificazione d'opera. Rilette le righe integrali e le URL Flaminio nel JSON di staging; per **26** gruppi presenti verifiche dirette di pagine o riscontri già documentati, **4** restano basati soltanto sulle righe sorgente. Il giudizio su una pagina indica documentazione, non autenticità musicale di tutta l'opera. **Nessun nuovo nodo o arco pubblicato e nessun merge autorizzato.**

## Classificazione complessiva (30/30)

| Categoria | Gruppi | Intervento necessario |
|---|---:|---|
| `collection_members` | 7 | Riconciliare fonte, opera, membri o versione |
| `unresolved_catalogue` | 2 | Verificare da catalogo indipendente |
| `wrong_document_link` | 10 | Riconciliare fonte, opera, membri o versione |
| `overture_or_part` | 7 | Riconciliare fonte, opera, membri o versione |
| `same_bare_number_different_namespace` | 1 | Riconciliare fonte, opera, membri o versione |
| `unresolved_version` | 1 | Verificare da catalogo indipendente |
| `wrong_catalogue_number` | 1 | Riconciliare fonte, opera, membri o versione |
| `unresolved_local_numbering` | 1 | Verificare da catalogo indipendente |

Particolarmente importante: i numeri ripetuti non significano che le righe ripetute siano opere duplicate. Fra gli errori evidenti vi sono **associazioni URL all'opera sbagliata**, **numeri di catalogo falsamente condivisi**, e **schede di parte vs opera completa**.

## Schede analitiche complete

#### 01. BEETHOVEN, Ludwig van — `Op. 108`

**Classe:** `collection_members` · **Evidenza:** `source_pages_checked` · **Excel:** 4632, 4633, 4634, 4635.

Op.108 è raccolta di 25 canti; quattro righe sono guide alla raccolta o a canti individuali, non quattro copie della stessa opera. **Decisione proposta:** collection_and_individual_member_descriptions. **Cautela:** Preservare numero del Lied e identificativo della raccolta.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Dim108-6.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Schottische108.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Sweetest108-5.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Willy108-11.html> · <https://www.beethoven.de/en/work/view/5444611451387904/25%2BScottish%2BSongs%2Bfor%2Bvoice%252C%2Bviolin%252C%2Bvioloncello%2Band%2Bpiano%2Bop.%2B108>.

#### 02. BEETHOVEN, Ludwig van — `WoO 155`

**Classe:** `collection_members` · **Evidenza:** `source_pages_sample_checked` · **Excel:** 4637, 4638, 4639, 4640.

WoO 155 comprende 26 canti gallesi; le quattro guide rimandano a numeri specifici (9,17,15,7). **Decisione proposta:** collection_and_individual_member_descriptions. **Cautela:** Non dedurre da quattro righe quattro raccolte.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-AeolianO155-9.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-HouseO155-17.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-MortalsO155-15.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-NightO155-7.html>.

#### 03. CHOPIN, Fryderyk — `15`

**Classe:** `collection_members` · **Evidenza:** `prior_lotto21_independent_review` · **Excel:** 12650, 12651, 12652.

Tre notturni op.15: tre pezzi n.2, n.3, n.1; ordine delle righe diverso dall'ordine musicale, link Notturno55 descrive op.15 n.1. **Decisione proposta:** collection_with_3_individual_works. **Cautela:** Conservare sorgente, numero brano ed errata interpretazione dello slug.

Riferimenti: <https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno15-2.html> · <https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno15-3.html> · <https://www.flaminioonline.it/Guide/Chopin/Chopin-Notturno55.html>.

#### 04. CHOPIN, Fryderyk — `68`

**Classe:** `collection_members` · **Evidenza:** `source_pages_sample_checked` · **Excel:** 12624, 12625, 12626.

Op.68 è raccolta di quattro mazurche: qui tre schede di brani n.2, n.3, n.4. **Decisione proposta:** collection_with_3_sampled_individual_works. **Cautela:** Non inventare la scheda del n.1 da questi record.

Riferimenti: <https://www.flaminioonline.it/Guide/Chopin/Chopin-Mazurca68-2.html> · <https://www.flaminioonline.it/Guide/Chopin/Chopin-Mazurca68-3.html> · <https://www.flaminioonline.it/Guide/Chopin/Chopin-Mazurca68-4.html>.

#### 05. LISZT, Franz — `242`

**Classe:** `unresolved_catalogue` · **Evidenza:** `source_rows_only` · **Excel:** 25382, 25391, 25392.

Il numero non qualificato 242 compare in tre denominazioni Liszt; incerta identità di serie, numerazione, rielaborazioni e rapporti con un eventuale catalogo S/R. **Decisione proposta:** hold_work_identity. **Cautela:** Necessaria collazione con Searle/Raabe e titoli individuali.

Riferimenti: solo righe originali Flaminio, senza URL specifici.

#### 06. BACH, Johann Sebastian — `968`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 3942, 3943.

Due record BWV 968 (Adagio in sol) ma una URL rimanda alla sonata per organo BWV 527, lavoro diverso. La guida BWV968 collega l'Adagio al primo tempo di BWV1005 come trascrizione di attribuzione incerta. **Decisione proposta:** correct_source_link_candidate; arrangement_relation_historical_gate. **Cautela:** La relazione arrangiamento BWV1005→BWV968 richiede flag attributivo; non confondere BWV527.

Riferimenti: <https://www.flaminioonline.it/Guide/Bach/Bach-Adagio968.html> · <https://www.flaminioonline.it/Guide/Bach/Bach-Sonata527.html>.

#### 07. BEETHOVEN, Ludwig van — `Op. 52`

**Classe:** `collection_members` · **Evidenza:** `source_pages_checked` · **Excel:** 4696, 4697.

Op.52 raccoglie otto Lieder; le due schede documentano n.8 Das Blümchen Wunderhold e n.4 Maigesang. **Decisione proposta:** collection_with_2_sampled_individual_works. **Cautela:** Non fondere i due Lieder perché condividono opus.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Blumchen.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Maigesang.html>.

#### 08. BEETHOVEN, Ludwig van — `Op. 72`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 4915, 4916.

Op.72 Fidelio: una guida all'ouverture (composta per la versione 1814) e una all'opera completa, con storia redazionale da distinguere. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** La guida all'ouverture non è una seconda opera lirica.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Fidelio-ouverture.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Fidelio.html>.

#### 09. BEETHOVEN, Ludwig van — `Op. 83`

**Classe:** `collection_members` · **Evidenza:** `source_pages_checked` · **Excel:** 4691, 4692.

Op.83 comprende tre Lieder: due schede di n.2 Sehnsucht e n.1 Wonne der Wehmut. **Decisione proposta:** collection_with_2_sampled_individual_works. **Cautela:** Numero individuale essenziale.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Sehnsucht.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Wonne.html>.

#### 10. BEETHOVEN, Ludwig van — `Op. 84`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 4906, 4907.

Egmont op.84 è musica di scena con apertura autonoma eseguibile; guide a ouverture e complesso delle musiche. **Decisione proposta:** incidental_music_work_plus_overture_part. **Cautela:** Classificare come musica di scena, non opera lirica.

Riferimenti: <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Egmont-ouverture.html> · <https://www.flaminioonline.it/Guide/Beethoven/Beethoven-Egmont.html>.

#### 11. BONONCINI, Giovanni — `663`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 6344, 6345.

Sì che costante è n.663; la prima riga punta a Se talor cangio desire n.662 e la seconda alla guida n.663. **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Non fondere con l'aria n.662.

Riferimenti: <https://www.flaminioonline.it/Guide/Bononcini/Bononcini-Aria662.html> · <https://www.flaminioonline.it/Guide/Bononcini/Bononcini-Aria663.html> · <https://flaminioonline.it/Biografie/Bononcini-catalogo-pagina2.html>.

#### 12. CAJKOVSKIJ, Petr Ilic — `29`

**Classe:** `same_bare_number_different_namespace` · **Evidenza:** `prior_lotto21_independent_review` · **Excel:** 9502, 9504.

N.29 identifica Sinfonia n.3 op.29 e Sinfonia n.5 TH29/op.64: opere differenti. **Decisione proposta:** two_distinct_works. **Cautela:** Namespace Op. contro TH obbligatorio.

Riferimenti: <https://www.flaminioonline.it/Guide/Cajkovskij/Cajkovskij-Sinfonia3.html> · <https://www.flaminioonline.it/Guide/Cajkovskij/Cajkovskij-Sinfonia5.html> · <https://en.tchaikovsky-research.net/pages/Symphonies> · <https://en.tchaikovsky-research.net/pages/Symphony_No._5>.

#### 13. CHERUBINI, Luigi — `123`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 12574, 12575.

Médée di Cherubini: guida all'ouverture e guida all'opera completa. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** Conservare differenze editoriali di versione e genere.

Riferimenti: <https://www.flaminioonline.it/Guide/Cherubini/Cherubini-Medee123-ouverture.html> · <https://www.flaminioonline.it/Guide/Cherubini/Cherubini-Medee123.html>.

#### 14. CHOPIN, Fryderyk — `CI 146 BI 51`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 12631, 12632.

Czary BI51/CI146 è Lied di Chopin; una URL porta invece al Valzer in mi minore. Non attribuire al Lied il testo della pagina del Valzer. **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Pagina Czary annota pubblicazione op.74 n.18 ma fuori dalla raccolta.

Riferimenti: <https://www.flaminioonline.it/Guide/Chopin/Chopin-Czary51.html> · <https://www.flaminioonline.it/Guide/Chopin/Chopin-Valzer56.html>.

#### 15. FRESCOBALDI, Girolamo — `8.25b`

**Classe:** `unresolved_version` · **Evidenza:** `source_rows_only` · **Excel:** 16025, 16031.

Le due Canzon di Frescobaldi condividono codice 8.25b ma titolazione e organico variano (due canti/due bassi vs tre voci). **Decisione proposta:** hold_version_or_identity. **Cautela:** Confrontare catalogo e stampa musicale prima del tipo variante/versione.

Riferimenti: solo righe originali Flaminio, senza URL specifici.

#### 16. HAYDN, Franz Joseph — `Hob:XI:2`

**Classe:** `unresolved_catalogue` · **Evidenza:** `source_rows_only` · **Excel:** 19669, 19682.

Haydn Hob:XI:2 è associato a due trii per baryton con tonalità do e la maggiore. Può essere un errore del codice in una riga. **Decisione proposta:** hold_possible_wrong_catalogue_number. **Cautela:** Non fondere, confrontare Hoboken e catalogo dei trii per baryton.

Riferimenti: solo righe originali Flaminio, senza URL specifici.

#### 17. HÄNDEL, Georg Friedrich — `6`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 24016, 24017.

Agrippina HWV6: guida all'ouverture e guida al dramma musicale completo. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** Una sola opera teatrale e un'ouverture correlata.

Riferimenti: <https://www.flaminioonline.it/Guide/Handel/Handel-Agrippina6-ouverture.html> · <https://www.flaminioonline.it/Guide/Handel/Handel-Agrippina6.html>.

#### 18. MENDELSSOHN-BARTOLDY, Felix — `Op. 62 n. 6`

**Classe:** `wrong_catalogue_number` · **Evidenza:** `externally_corroborated` · **Excel:** 31439, 31450.

Lied ohne Worte n.30 in la maggiore=Op.62 n.6; n.43 in mi minore=Op.102 n.1 MWV U162. Secondo numero originale errato. **Decisione proposta:** two_distinct_works_source_number_correction. **Cautela:** Conservare originale erroneo come provenienza, aggiungere riferimento corretto con fonti.

Riferimenti: <https://imslp.org/wiki/Songs_without_Words%2C_Op.102_%28Mendelssohn%2C_Felix%29> · <https://www.sonyclassical.de/alben/releases-details/mendelssohn-lieder-ohne-worte-2>.

#### 19. MONTEVERDI, Claudio — `249`

**Classe:** `unresolved_local_numbering` · **Evidenza:** `source_rows_only` · **Excel:** 34314, 34338.

Le due righe Monteverdi con numero non qualificato 249 e titoli 4 / 6 paiono numerazioni editoriali locali; una sola guida visibile. **Decisione proposta:** hold_local_item_identifier. **Cautela:** Non inferire la stessa composizione né 249 come catalogo univoco.

Riferimenti: <https://www.flaminioonline.it/Guide/Monteverdi/Monteverdi-Dolci249.html>.

#### 20. MOZART, Wolfgang Amedeus — `K 527 (K 527)`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 35267, 35268.

Don Giovanni K527: ouverture e opera completa; categoria dell'opera dramma giocoso in due atti. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** Creare in futuro arco opera→dramma giocoso, se validato, mai due opere Don Giovanni.

Riferimenti: <https://www.flaminioonline.it/Guide/Mozart/Mozart-Dongiovanni-ouverture.html> · <https://www.flaminioonline.it/Guide/Mozart/Mozart-Dongiovanni.html>.

#### 21. PALESTRINA, Giovanni Pierluigi da — `625`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 37684, 37685.

Benedicite gentes: due righe identiche con URL rispettivamente al mottetto 625 (corretto) e alla guida 626 che descrive Ascendit Deus (errato). **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Doppia scheda di catalogo non duplicato musicale.

Riferimenti: <https://www.flaminioonline.it/Guide/Palestrina/Palestrina-Mottetto625.html> · <https://www.flaminioonline.it/Guide/Palestrina/Palestrina-Mottetto626.html>.

#### 22. PALESTRINA, Giovanni Pierluigi da — `626`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 37679, 37680.

Ascendit Deus: URL alla guida 625 Benedicite gentes (errata) e alla guida 626 Ascendit Deus (corretta). **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Non fondere Ascendit Deus con Benedicite gentes.

Riferimenti: <https://www.flaminioonline.it/Guide/Palestrina/Palestrina-Mottetto625.html> · <https://www.flaminioonline.it/Guide/Palestrina/Palestrina-Mottetto626.html>.

#### 23. POULENC, Francis — `15a n. 5`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 38350, 38351.

L'écrevisse FP15a n.5: prima guida punta alla n.3 La sauterelle, seconda alla n.5 corretta. **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Recuperare il membro n.5 nella raccolta; escludere attribuzione alla n.3.

Riferimenti: <https://www.flaminioonline.it/Guide/Poulenc/Poulenc-Canzone15a3.html> · <https://www.flaminioonline.it/Guide/Poulenc/Poulenc-Canzone15a5.html>.

#### 24. PROKOFIEV, Sergej — `44`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 38607, 38608.

Sinfonia n.3 in do minore op.44: prima URL alla Seconda sinfonia op.40, seconda corretta alla Terza. **Decisione proposta:** same_work_with_one_wrong_page_reference. **Cautela:** Non fondere Sinfonia n.2 e n.3; relazione con L'angelo di fuoco da valutare separatamente.

Riferimenti: <https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sinfonia2.html> · <https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sinfonia3.html>.

#### 25. SCHUBERT, Franz — `911`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 45237, 45238.

Winterreise D911 è ciclo di 24 Lieder: una URL rinvia erroneamente al Lied An die Laute D905; altra URL al ciclo corretto. **Decisione proposta:** single_cycle_with_one_wrong_page_reference. **Cautela:** Modellare ciclo→24 lieder solo con fonti e senza inventare 24 record sorgente.

Riferimenti: <https://www.flaminioonline.it/Guide/Schubert/Schubert-Laute905.html> · <https://www.flaminioonline.it/Guide/Schubert/Schubert-Winterreise.html> · <https://schubert-digital.acdh-dev.oeaw.ac.at/W-00967.html>.

#### 26. SIBELIUS, Jean — `op. 22`

**Classe:** `collection_members` · **Evidenza:** `source_pages_checked` · **Excel:** 46518, 46519.

Lemminkäinen Suite op.22: guida alla suite in quattro pezzi e guida al n.3 Il cigno di Tuonela; presenti revisioni distinte. **Decisione proposta:** suite_plus_component_and_version_metadata. **Cautela:** Non identificare il singolo poema con la suite intera.

Riferimenti: <https://www.flaminioonline.it/Guide/Sibelius/Sibelius-Lemminkainen22.html> · <https://www.flaminioonline.it/Guide/Sibelius/Sibelius-Tuonela.html>.

#### 27. STRAUSS, Richard — `227c`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 47745, 47746.

L'introduzione e prima serie di valzer dal Rosenkavalier (lavoro 1944) ha una guida propria; la prima URL del gruppo conduce alla suite orchestrale successiva. **Decisione proposta:** separate_arrangements_wrong_document_association. **Cautela:** Conservare la distinzione con la suite del 1945 e non fondere i due arrangiamenti.

Riferimenti: <https://www.flaminioonline.it/Guide/Strauss/Strauss-Cavaliere-suite.html> · <https://www.flaminioonline.it/Guide/Strauss/Strauss-Cavaliere-valzer1.html>.

#### 28. STRAUSS, Richard — `227d`

**Classe:** `wrong_document_link` · **Evidenza:** `source_pages_checked` · **Excel:** 47770, 47771.

La suite orchestrale dal Rosenkavalier (1945) ha guida propria; l'altra URL rimanda alla prima serie di valzer (1944). **Decisione proposta:** separate_arrangements_wrong_document_association. **Cautela:** Non fondere due lavori derivati dall'opera originale; controllare numeri editoriali.

Riferimenti: <https://www.flaminioonline.it/Guide/Strauss/Strauss-Cavaliere-suite.html> · <https://www.flaminioonline.it/Guide/Strauss/Strauss-Cavaliere-valzer1.html>.

#### 29. WEBER, Carl Maria von — `291`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 51774, 51775.

Euryanthe di Weber: ouverture e opera completa, op.81; le due righe Flaminio condividono numero sorgente 291. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** Da verificare il namespace del numero 291.

Riferimenti: <https://www.flaminioonline.it/Guide/Weber/Weber-Euryanthe-ouverture.html> · <https://www.flaminioonline.it/Guide/Weber/Weber-Euryanthe.html>.

#### 30. WEBER, Carl Maria von — `306`

**Classe:** `overture_or_part` · **Evidenza:** `source_pages_checked` · **Excel:** 51776, 51777.

Oberon di Weber: ouverture e opera completa; le due righe Flaminio condividono numero sorgente 306. **Decisione proposta:** same_parent_work_part_level_documentation. **Cautela:** Da verificare il namespace del numero 306.

Riferimenti: <https://www.flaminioonline.it/Guide/Weber/Weber-Oberon-ouverture.html> · <https://www.flaminioonline.it/Guide/Weber/Weber-Oberon.html>.


## Vincoli per la fase successiva

1. I record di fonte originali e le URL rimangono immutati, con proposte di `corrected_document_url` solo in campo derivato con prova.
2. Un'unica composizione può avere più guide; una raccolta può avere più composizioni. **`source_row_id` ≠ `work_id` ≠ `document_id`**.
3. Opera teatrale ↔ ouverture = `parte_di`, senza duplicare l'opera; per cantate, cicli, raccolte e suite identificare i membri numerati.
4. Versioni, arrangiamenti, trascrizioni e attribuzioni dubbie sono relazioni tipizzate, NON fusioni lessicali. Esempio BWV968 (trascrizione di attribuzione controversa) e due arrangiamenti dal `Rosenkavalier`.
5. Generi e forme al singolare; multidestinazione consentita se dimostrabile. `Don Giovanni` → opera e dramma giocoso; `Egmont` → musica di scena, non opera lirica.
6. Capitoli editoriali rimangono fuori dal grafo storico I–V; rispettare la pertinenza radicata, con Mozart→Leopold e nessun ponte generico via capitolo/periodo.
7. I **447 P0** ancora ripetuti vanno sottoposti al criterio `namespace + numero originale + rubrica + titolo/parte/versione`. Dei 30 P1 esaminati, quelli con livello `source_rows_only` mantengono HOLD esplicito; i restanti necessitano ancora della fase di riconciliazione con gli identificativi Atlantis prima di qualunque produzione.

**Nessun dato pubblico modificato.** Audit persona↔persona Checkpoint24 rimane **74/233**, separato. Prossimo Lotto24 Flaminio: crosswalk dei record documentali corretti verso gli ID Atlantis/Atlante 3D, conservando tutte le fonti e senza merge cieco.
