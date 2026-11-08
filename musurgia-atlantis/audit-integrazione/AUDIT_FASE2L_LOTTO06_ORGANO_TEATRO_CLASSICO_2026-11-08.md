# Musurgia Atlantis — Fase 2L · Lotto 06: organo, prassi barocche e teatro classico

**Data:** 8 novembre 2026 · **Branch:** `main` · **Ambito:** soltanto `musurgia-atlantis/audit-integrazione/`.

## Perimetro e risultati

Controllate una per una **20 sovrapposizioni** fra il grafo base e le relazioni specialistiche dell'Atlante 3D, nel Lotto 06 (**gruppi 101–120**). **40 registrazioni originali preservate** (20 base, 20 specialistiche), con payload, orientamento delle estremità, testo `forward`/`reverse` esplicito ove presente, note, fonti, metadati e identità provvisorie. Il contesto condiviso **non** autorizza fusione: una relazione può specializzare il genere, una professione, un repertorio, un'opera, un'istituzione o un evento preciso. Non si inferiscono nuovi archi persona–persona solo per categorie condivise.

**Esito cumulativo: 120/250 gruppi triagiati**; ne restano **130**. **11/11** controlli strutturali superati nel lotto. Questi controlli NON certificano ogni fatto storico, NON portano le frasi del renderer originale, NON collaudano il browser e NON modificano i grafi pubblici.

## Tabella integrale dei 20 gruppi

| Gruppo | Coppia riconciliata di estremi | Archi originali | Tipo di esito preliminare |
|---:|---|---:|---|
| 101 | `legacy:opera-veneziana-seicento|pers:francesco-cavalli` | 2 | `specific_repertoire_with_context` |
| 102 | `legacy:tradizioni-organistiche-tedesche|pers:dietrich-buxtehude` | 2 | `historical_regional_practice` |
| 103 | `legacy:abendmusiken-lubecca-marienkirche|pers:dietrich-buxtehude` | 2 | `documented_institutional_activity` |
| 104 | `legacy:tradizioni-organistiche-tedesche|pers:johann-pachelbel` | 2 | `historical_regional_practice` |
| 105 | `legacy:tradizioni-organistiche-tedesche|pers:johann-kuhnau` | 2 | `historical_regional_practice` |
| 106 | `legacy:clavicembalisti-francesi-barocchi|pers:couperin` | 2 | `repertoire_with_specific_technique` |
| 107 | `legacy:tradizione-viola-da-gamba-francese|pers:marin-marais` | 2 | `specific_instrumental_corpus` |
| 108 | `legacy:scuola-violinistica-francese|pers:jean-marie-leclair` | 2 | `regional_cross_training` |
| 109 | `legacy:teatro-inglese-restaurazione|pers:purcell` | 2 | `dramatic_repertoire_not_equivalence` |
| 110 | `legacy:teatro-inglese-restaurazione|pers:john-blow` | 2 | `specific_earlier_stage_work` |
| 111 | `legacy:scuola-contrappunto-viennese|pers:johann-georg-albrechtsberger` | 2 | `specific_treatise_and_teaching` |
| 112 | `legacy:riforma-operistica-gluck|pers:gluck` | 2 | `reform_collaboration_not_single_author` |
| 113 | `legacy:stile-galante-e-sensibile|pers:carl-philipp-emanuel-bach` | 2 | `galant_empfindsam_distinct` |
| 114 | `legacy:stile-galante-e-sensibile|pers:johann-christian-bach` | 2 | `galant_empfindsam_distinct` |
| 115 | `legacy:scuola-mannheim|pers:carl-stamitz` | 2 | `specific_orchestral_institution` |
| 116 | `legacy:scuola-mannheim|pers:johann-stamitz` | 2 | `specific_orchestral_institution` |
| 117 | `legacy:opera-seria|pers:rossini` | 2 | `repertoire_and_form_distinction` |
| 118 | `legacy:belcanto|pers:bellini` | 2 | `vocal_style_not_sole_genre` |
| 119 | `legacy:opera-buffa|pers:donizetti` | 2 | `same_person_distinct_genre` |
| 120 | `legacy:opera-seria|pers:donizetti` | 2 | `same_person_distinct_genre` |

## Analisi di ogni gruppo e fonti conservate

### Gruppo 101 — `legacy:opera-veneziana-seicento|pers:francesco-cavalli`

Cavalli sviluppò il repertorio d'opera nei teatri pubblici veneziani. Il riferimento a teatro pubblico non equivale alla definizione di tutti i compositori dell'epoca come suoi collaboratori.

**Specialistico originale:** `special2K:cat-scuole-opera-veneziana-seicento-francesco-cavalli` · predicato `teatro-pubblico-seicentesco`. Direzione `opera-veneziana-seicento` → `compositore-francesco-cavalli`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Cavalli fu uno degli artefici della fortuna commerciale dei teatri operistici veneziani nel Seicento e contribuì a diffonderne i modelli.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/opera_%28Enciclopedia-Italiana%29/>.

### Gruppo 102 — `legacy:tradizioni-organistiche-tedesche|pers:dietrich-buxtehude`

Buxtehude, organista a Lubecca nella tradizione settentrionale, è diverso da Pachelbel e Kuhnau per repertorio e contesto; un comune nodo 'tradizioni organistiche tedesche' non produce legami diretti.

**Specialistico originale:** `special2K:cat-scuole-tradizioni-organistiche-tedesche-dietrich-buxtehude` · predicato `tradizione-organistica-e-contrappuntistica`. Direzione `tradizioni-organistiche-tedesche` → `compositore-dietrich-buxtehude`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Buxtehude operò a Lubecca e rappresentò il modello organistico della Germania settentrionale che il giovane Bach volle ascoltare personalmente.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/johann-sebastian-bach_%28Enciclopedia-Italiana%29/>.

### Gruppo 103 — `legacy:abendmusiken-lubecca-marienkirche|pers:dietrich-buxtehude`

Buxtehude ampliò le Abendmusiken di San Marien a Lubecca dopo il 1668; la chiesa ne indica l'origine incerta e il possibile promotore precedente Franz Tunder: NON attribuire a Buxtehude l'invenzione assoluta della serie.

**Specialistico originale:** `special2K:audit8h-buxtehude-abendmusiken` · predicato `organizzazione-concerti-serali-lubecca`. Direzione `abendmusiken-lubecca-marienkirche` → `compositore-dietrich-buxtehude`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Buxtehude sviluppò dal 1668 e rese celebri le Abendmusiken alla Marienkirche di Lubecca, con concerti sacri in occasione dell’Avvento; non gli si attribuisce l’invenzione assoluta della tradizione.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/dietrich-buxtehude_%28Enciclopedia-Italiana%29/>.

**Riscontri esterni circoscritti:** Origine incerta della tradizione attribuita come possibilità a Tunder; Buxtehude la sviluppò e la collocò al mutamento dell'anno ecclesiastico. (<https://www.st-marien-luebeck.de/en/music/evening-music>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 104 — `legacy:tradizioni-organistiche-tedesche|pers:johann-pachelbel`

Pachelbel rappresenta l'organismo contrappuntistico e il repertorio del corale dell'area medio/meridionale tedesca; non è stesso ramo istituzionale di Buxtehude.

**Specialistico originale:** `special2K:cat-scuole-tradizioni-organistiche-tedesche-johann-pachelbel` · predicato `tradizione-organistica-e-contrappuntistica`. Direzione `tradizioni-organistiche-tedesche` → `compositore-johann-pachelbel`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Pachelbel fu una figura decisiva della tradizione organistica della Turingia e contribuì al repertorio sul corale, distinto dalla scuola settentrionale.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/johann-pachelbel_%28Enciclopedia-Italiana%29/>.

### Gruppo 105 — `legacy:tradizioni-organistiche-tedesche|pers:johann-kuhnau`

Kuhnau fu precedente di Bach a Lipsia come Thomaskantor e autore di sonate per tastiera; successione alla carica non equivale a rapporto didattico diretto.

**Specialistico originale:** `special2K:cat-scuole-tradizioni-organistiche-tedesche-johann-kuhnau` · predicato `tradizione-organistica-e-contrappuntistica`. Direzione `tradizioni-organistiche-tedesche` → `compositore-johann-kuhnau`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Kuhnau fu organista e Kantor a Lipsia prima di Bach, e compose importanti raccolte di sonate per tastiera oltre a cantate sacre.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/johann-kuhnau_%28Enciclopedia-Italiana%29/>.

### Gruppo 106 — `legacy:clavicembalisti-francesi-barocchi|pers:couperin`

François Couperin: pièces de clavecin e ordres, scuola francese del clavicembalo. Non confondere il musicista con altri Couperin della stessa famiglia.

**Specialistico originale:** `special2K:cat-scuole-clavicembalisti-francesi-barocchi-francois-couperin` · predicato `scrittura-per-clavicembalo`. Direzione `clavicembalisti-francesi-barocchi` → `compositore-francois-couperin`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Couperin sviluppò raccolte di pièces de clavecin e un linguaggio di danza e carattere di grande influenza sulla tastiera barocca francese.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/clavicembalisti-e-clavicordisti_%28Enciclopedia-Italiana%29/>.

### Gruppo 107 — `legacy:tradizione-viola-da-gamba-francese|pers:marin-marais`

Marin Marais pubblicò cinque libri di Pièces de viole; la tradizione francese della viola da gamba non autorizza da sola relazioni con ogni esecutore né riduce la sua attività esclusivamente alla gamba.

**Specialistico originale:** `special2K:lotto02-sc-marais-gamba` · predicato `massimo-esponente-viola-da-gamba`. Direzione `tradizione-viola-da-gamba-francese` → `compositore-marin-marais`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Marin Marais sviluppò in cinque libri di Pièces de viole un repertorio per viola da gamba e continuo che rielabora la tradizione di Sainte-Colombe con una voce strumentale propria.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/marin-marais_%28Enciclopedia-Italiana%29/>.

### Gruppo 108 — `legacy:scuola-violinistica-francese|pers:jean-marie-leclair`

Jean-Marie Leclair: formazione a Torino con Giovanni Battista Somis (allievo di Corelli) e carriera francese, con accostamento di pratiche italiane e francesi. L'arco documentato Leclair–Somis è distinto da categoria scuola violinistica francese.

**Specialistico originale:** `special2K:lotto02-sc-leclair-france` · predicato `sviluppo-scuola-francese-violino`. Direzione `scuola-violinistica-francese` → `compositore-jean-marie-leclair`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Leclair è uno dei principali esponenti della scuola violinistica francese del Settecento; la sua produzione congiunge formazione torinese e gusto compositivo francese.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/jean-marie-leclair/> · <https://www.treccani.it/enciclopedia/somis_%28Dizionario-Biografico%29/>.

**Riscontri esterni circoscritti:** Leclair studiò a Torino con Somis, allievo di Corelli. (<https://www.treccani.it/enciclopedia/jean-marie-leclair/>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 109 — `legacy:teatro-inglese-restaurazione|pers:purcell`

Henry Purcell: dramatic/semi-operas e teatro inglese della Restaurazione, diversi dall'opera integralmente cantata. Non convertire automaticamente tutte le dramatic operas in opera lirica italiana.

**Specialistico originale:** `special2K:catalogo-teatro-inglese-restaurazione-henry-purcell` · predicato `sintesi-nazionale`. Direzione `teatro-inglese-restaurazione` → `compositore-henry-purcell`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Purcell elaborò nelle dramatic operas una sintesi inglese di contrappunto, modelli francesi, monodia italiana e basso ostinato.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/henry-purcell-e-la-rinascita-musicale-inglese_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 110 — `legacy:teatro-inglese-restaurazione|pers:john-blow`

John Blow: Venus and Adonis è un precedente del teatro musicale inglese. La cronologia e il rapporto con Purcell richiedono una relazione storica propria, non un attraversamento tramite genere.

**Specialistico originale:** `special2K:catalogo-teatro-inglese-restaurazione-john-blow` · predicato `antecedente-drammatico`. Direzione `teatro-inglese-restaurazione` → `compositore-john-blow`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: John Blow scrisse Venus and Adonis, uno dei precedenti del teatro musicale inglese che anticipano il lavoro drammaturgico di Purcell.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/henry-purcell-e-la-rinascita-musicale-inglese_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 111 — `legacy:scuola-contrappunto-viennese|pers:johann-georg-albrechtsberger`

Albrechtsberger: Gründliche Anweisung zur Composition (1790) come documento didattico; l'insegnamento a Beethoven è un secondo rapporto biografico da ancorare a evidenze specifiche.

**Specialistico originale:** `special2K:lotto02-sc-albrechts-counter` · predicato `trattato-contrappunto-1790`. Direzione `scuola-contrappunto-viennese` → `compositore-johann-georg-albrechtsberger`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Albrechtsberger sistematizzò l'insegnamento del contrappunto nel trattato Gründliche Anweisung zur Composition del 1790, pratica trasmessa anche a Beethoven durante il suo apprendistato viennese.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/johann-georg-albrechtsberger/> · <https://www.treccani.it/enciclopedia/contrappunto_%28Enciclopedia-Italiana%29/>.

### Gruppo 112 — `legacy:riforma-operistica-gluck|pers:gluck`

Gluck rielabora il teatro d'opera collaborando con Ranieri de' Calzabigi; Orfeo ed Euridice prima rappresentazione a Vienna il 5 ottobre 1762. La riforma non è una persona né impone fusione di opere e autori.

**Specialistico originale:** `special2K:catalogo-riforma-operistica-gluck-christoph-willibald-gluck` · predicato `iniziatore-della-riforma`. Direzione `riforma-operistica-gluck` → `compositore-christoph-willibald-gluck`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: In collaborazione con Ranieri de' Calzabigi, Gluck promosse l'equilibrio fra parola, dramma, canto e orchestra nelle opere riformate.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/christoph-willibald-gluck_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

**Riscontri esterni circoscritti:** Orfeo ed Euridice, Gluck, libretto Calzabigi, debutto Vienna 5 ottobre 1762. (<https://corago.unibo.it/opera/Z000002696>) Questi riscontri non convalidano automaticamente gli archi confinanti.

### Gruppo 113 — `legacy:stile-galante-e-sensibile|pers:carl-philipp-emanuel-bach`

Carl Philipp Emanuel Bach esponente dell'Empfindsamer Stil; il campo legacy unisce galante e sensibile, ma lo specialista distingue l'espressività sensibile dalle tendenze galanti.

**Specialistico originale:** `special2K:cat-scuole-stile-galante-e-sensibile-carl-philipp-emanuel-bach` · predicato `tradizione-stilistica-di-meta-settecento`. Direzione `stile-galante-e-sensibile` → `compositore-carl-philipp-emanuel-bach`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Carl Philipp Emanuel Bach è un protagonista dello stile sensibile, con un linguaggio tastieristico capace di contrasti improvvisi e gesti espressivi.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/carl-philipp-emanuel-bach_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 114 — `legacy:stile-galante-e-sensibile|pers:johann-christian-bach`

Johann Christian Bach legato allo stile galante internazionale di Milano e Londra; distinto da C. P. E. Bach (fratellastro) e da J. S. Bach. Non è corretto estendere automaticamente a lui l'Empfindsamer Stil di C. P. E.

**Specialistico originale:** `special2K:cat-scuole-stile-galante-e-sensibile-johann-christian-bach` · predicato `tradizione-stilistica-di-meta-settecento`. Direzione `stile-galante-e-sensibile` → `compositore-johann-christian-bach`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Johann Christian Bach è fra i principali esponenti tedeschi dello stile galante, soprattutto nell'ambiente internazionale di Milano e Londra.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/johann-christian-bach/>.

### Gruppo 115 — `legacy:scuola-mannheim|pers:carl-stamitz`

Carl Stamitz si formò nell'orchestra di Mannheim; l'appartenenza alla tradizione non certifica ogni tecnica orchestrale come sua invenzione. Johann Stamitz è padre distinto, non stesso nodo.

**Specialistico originale:** `special2K:scuola-mannheim-carl-stamitz` · predicato `tradizione-orchestrale`. Direzione `scuola-mannheim` → `compositore-carl-stamitz`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Carl Stamitz si formò nella tradizione della scuola di Mannheim, lavorò nell'orchestra di corte e ne diffuse la pratica sinfonico-concertante in Europa.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/karel-filip-stamitz/>.

### Gruppo 116 — `legacy:scuola-mannheim|pers:johann-stamitz`

Johann Stamitz contribuì alla disciplina e reputazione dell'orchestra di Mannheim; il rapporto padre-figlio con Carl è biografico, non ricavato transitivamente da 'scuola Mannheim'.

**Specialistico originale:** `special2K:scuola-mannheim-johann-stamitz` · predicato `direzione-e-formazione-orchestra`. Direzione `scuola-mannheim` → `compositore-johann-stamitz`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Johann Stamitz fu uno degli iniziatori della scuola di Mannheim e della reputazione internazionale della sua orchestra di corte.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/mannheim/>.

### Gruppo 117 — `legacy:opera-seria|pers:rossini`

Rossini autore anche di opera seria, soprattutto nel periodo napoletano; distinguere tale repertorio dalla propria produzione buffa, non trasformare 'opera seria' in scuola di allievi.

**Specialistico originale:** `special2K:gen-opera-seria-gioachino-rossini` · predicato `repertorio-e-trasformazione`. Direzione `opera-seria` → `compositore-gioachino-rossini`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Rossini rimodellò profondamente le convenzioni dell'opera seria, specialmente nei lavori napoletani.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gioachino-rossini_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 118 — `legacy:belcanto|pers:bellini`

Bellini associato al belcanto e all'ampiezza del fraseggio; belcanto è tradizione tecnico-esecutiva e categoria storiografica, non un singolo genere teatrale o persona.

**Specialistico originale:** `special2K:gen-belcanto-vincenzo-bellini` · predicato `repertorio-e-trasformazione`. Direzione `belcanto` → `compositore-vincenzo-bellini`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Bellini privilegiò l'ampiezza del fraseggio e la tenuta della melodia rispetto alla pura coloratura.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/vincenzo-bellini_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 119 — `legacy:opera-buffa|pers:donizetti`

Donizetti realizzò opera buffa e opere comiche/sentimentali; questo rapporto non va fuso con il parallelo gruppo 120 legato al teatro serio.

**Specialistico originale:** `special2K:gen-opera-buffa-gaetano-donizetti` · predicato `repertorio-e-trasformazione`. Direzione `opera-buffa` → `compositore-gaetano-donizetti`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Donizetti continuò a scrivere opere comiche e sentimentali, anche durante l'affermazione del teatro romantico.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gaetano-donizetti_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### Gruppo 120 — `legacy:opera-seria|pers:donizetti`

Donizetti realizzò anche repertorio serio e drammatico; il nodo opera seria ha predicato distinto dal gruppo 119. Una stessa persona può possedere entrambi gli archi senza contraddizione.

**Specialistico originale:** `special2K:gen-opera-seria-gaetano-donizetti` · predicato `repertorio-e-trasformazione`. Direzione `opera-seria` → `compositore-gaetano-donizetti`. Frammenti direzionali `forward` e `reverse` preservati nel registro JSON. Nota: Donizetti trasformò il repertorio serio sviluppando nuove possibilità drammatiche e patetiche.. Fonte/i originale/i: <https://www.treccani.it/enciclopedia/gaetano-donizetti_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

## Test eseguiti

- **PASS** — Twenty consecutive groups 101–120.
- **PASS** — Forty source records (20 base and 20 specialist).
- **PASS** — All original payloads preserved.
- **PASS** — Each pair has exact mapped endpoints.
- **PASS** — Specialist forward/reverse fragments preserved.
- **PASS** — Base JS relationSentence not falsely ported.
- **PASS** — No merges and traversals enabled.
- **PASS** — Buxtehude prior Tunder caution.
- **PASS** — C. P. E. and J. C. Bach roles distinguished.
- **PASS** — Donizetti buffa and seria not collapsed.
- **PASS** — Gluck and Calzabigi recognized separately.

## Gate, limiti e principi conservati

1. **Nessuna fusione o perdita:** non sono stati cancellati, sommati o riformulati gli archi base e specialistici. I gruppi sono sovrapposizioni di estremi, non prove di duplicazione storica.
2. **Modalità storico-musicale ≠ editoriale:** un capitolo di Musurgia Mundi, inclusi `cap:opera-lirica` e i capitoli delle epoche, è un rinvio di consultazione, non un nodo attraversabile nella rete storico-musicale. Generi, scuole, periodi, metodi e movimenti non sono ponti automatici nella profondità I–V.
3. **Renderer non ancora convertito:** gli archi base non contengono stringhe bidirezionali originali esplicite; la frase era generata da `relationSentence` con **tre ridefinizioni** nell'app originale. Il JSON preserva `status: requires_exact_renderer_port`, e non sostituisce questa mancanza con frasi ipotetiche. Non eseguiti i test hover desktop/tap Android.
4. **Controllo storico a due livelli:** una fonte d'identità, una fonte di categoria, o una fonte che attesta un'opera non convalida automaticamente tutti i rapporti specifici, le date e gli archi contigui. I controlli di questo lotto sono strutturali e di triage semantico con riscontri mirati.
5. **Nessuna modifica al grafo pubblico:** i 3.856 archi legacy restano nello staging integrale; i 1.718 archi Atlantis e i 210 lotti storico-filologici rimangono invariati.

## Prosecuzione

Proseguire con il Lotto 07, gruppi 121–140. Segnalare categorie secolari non esaustive, ruoli e fonti non specifiche senza propagare correzioni al pubblico.
