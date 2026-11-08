# Musurgia Atlantis — Fase 2L · Lotto 10: sodalizi, cinema, teatro e repertori (181–200)

**8 novembre 2026 · branch `main` · soltanto `musurgia-atlantis/audit-integrazione/`**

## Risultato e perimetro

Esaminate **20 collisioni 181–200**, conservando **40/40** originali (20 base, 20 specialistici). La Fase 2L raggiunge **200/250 gruppi analizzati (80%)**, con **50 restanti**. **16/16** controlli strutturali PASS. Nessuna fusione, deduplicazione, attestazione storica automatica, sblocco del gate radicato, o modifica ai grafi/interfaccia pubblici. Tutti i testi originali, payload, fonti e i frammenti bidirezionali specialistici sono preservati nel JSON: le frasi base generate dal JS devono ancora essere portate.

## Indice completo

| N. | Coppia normalizzata | Risultato del triage |
|---:|---|---|
| 181 | `legacy:gruppo-dei-cinque|pers:cezar-cui` | `russian_five_member_and_critic` |
| 182 | `legacy:gruppo-dei-sei|pers:georges-auric` | `six_french_auric_member` |
| 183 | `legacy:gruppo-dei-sei|pers:louis-durey` | `six_french_durey_member` |
| 184 | `legacy:gruppo-dei-sei|pers:germaine-tailleferre` | `six_french_tailleferre_member` |
| 185 | `legacy:scuola-napoletana|pers:gennaro-manna` | `manna_neapolitan_institution_specific` |
| 186 | `legacy:grand-opera|pers:halevy` | `grand_opera_halevy_specific_work` |
| 187 | `legacy:musica-per-film-novecento|pers:morricone` | `morricone_film_music_not_direct_tutorship` |
| 188 | `legacy:camerata-fiorentina|pers:vincenzo-galilei` | `galilei_bardi_distinct_from_corsi` |
| 189 | `legacy:tradizione-trovatori-occitani|pers:bernart-de-ventadorn` | `occitan_troubadour_ventadorn` |
| 190 | `legacy:tradizione-trovatori-occitani|pers:comtessa-de-dia` | `trobairitz_countess_dia_identity_guard` |
| 191 | `legacy:musica-per-film-novecento|pers:steiner` | `steiner_hollywood_symphonic_score` |
| 192 | `legacy:musica-per-film-novecento|pers:korngold` | `korngold_opera_film_transfer` |
| 193 | `legacy:musica-per-film-novecento|pers:john-williams` | `williams_contemporary_film_symbiosis` |
| 194 | `legacy:teatro-musicale-broadway|pers:jeanine-tesori` | `tesori_musical_composer_not_all_roles` |
| 195 | `legacy:opera-semiseria|pers:rossini` | `rossini_semiseria_specific_operas` |
| 196 | `legacy:opera-semiseria|pers:bellini` | `bellini_sonnambula_subgenre_interpretive` |
| 197 | `legacy:opera-semiseria|pers:donizetti` | `donizetti_linda_semiseria_documented` |
| 198 | `legacy:dramma-giocoso|pers:mozart` | `mozart_don_giovanni_dramma_giocoso_specific` |
| 199 | `legacy:intermezzo-comico|pers:pergolesi` | `pergolesi_serva_intermezzo_not_buffa_full` |
| 200 | `legacy:belcanto|pers:rossini` | `rossini_belcanto_vocal_style_not_genre` |

## Analisi di ogni collisione

### 181 — legacy:gruppo-dei-cinque|pers:cezar-cui

Cezar' Cui fu membro storico del Gruppo dei Cinque, insieme compositore e critico. La sua appartenenza al sodalizio non implica omogeneità stilistica o che ogni controversia critica equivalga a collaborazione personale.

**Guardrail:** membro reale distinto dagli altri quattro; non generare archi Cui→tutti tramite il gruppo.
**Record intatti:** `base2K:1583` (base, `forma-o-pratica-documentata`) · `special2K:scuola-dei-cinque-cezar-cui` (specialist, `critico-e-compositore-del-gruppo`).
**Testi specialistici originali:** `forward = annoverò fra i membri e critici`, `reverse = fu membro e critico musicale del`. Nota: Cezar Cui, compositore e critico musicale, era il quinto membro del sodalizio; le sue posizioni pubbliche e il suo stile non coincidono esattamente con quelli degli altri..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gruppo-dei-cinque/>.

### 182 — legacy:gruppo-dei-sei|pers:georges-auric

Georges Auric fu uno dei Sei, e lavorò anche per cinema e teatro; la partecipazione a un gruppo non autorizza a far confluire tutte le colonne sonore dei membri nella stessa «scuola» musicale.

**Guardrail:** separare appartenenza ai Six e attività cinematografica.
**Record intatti:** `base2K:1586` (base, `forma-o-pratica-documentata`) · `special2K:scuola-dei-sei-georges-auric` (specialist, `membro-del-gruppo`).
**Testi specialistici originali:** `forward = annoverò tra i propri membri`, `reverse = fece parte del gruppo`. Nota: Georges Auric era fra i sei autori francesi indicati da Collet; collaborò anche alla modernità teatrale e cinematografica..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>.

### 183 — legacy:gruppo-dei-sei|pers:louis-durey

Louis Durey fu uno dei Sei ma mantenne percorsi e interessi autonomi. Non retrodatare o prolungare una collaborazione continuativa sulla base dell'etichetta collettiva.

**Guardrail:** il gruppo non equivale a un sodalizio permanente con relazioni personali universali.
**Record intatti:** `base2K:1588` (base, `forma-o-pratica-documentata`) · `special2K:scuola-dei-sei-louis-durey` (specialist, `membro-del-gruppo`).
**Testi specialistici originali:** `forward = annoverò tra i propri membri`, `reverse = fece parte del gruppo`. Nota: Louis Durey fu uno dei sei compositori del gruppo, pur proseguendo una traiettoria personale nell'attività critica e nella musica vocale..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>.

### 184 — legacy:gruppo-dei-sei|pers:germaine-tailleferre

Germaine Tailleferre fu l'unica donna del Gruppo dei Sei, compositrice con identità autonoma. Evitare marginalizzazione e trattare le opere in modo non derivativo dagli altri membri.

**Guardrail:** identità e produzione individuale; nessuna falsa fusione con colleghi.
**Record intatti:** `base2K:1589` (base, `forma-o-pratica-documentata`) · `special2K:scuola-dei-sei-germaine-tailleferre` (specialist, `membro-del-gruppo`).
**Testi specialistici originali:** `forward = annoverò tra i propri membri`, `reverse = fece parte del gruppo`. Nota: Germaine Tailleferre era l'unica donna del Gruppo dei Sei e partecipò ai suoi esperimenti negli anni del primo dopoguerra..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gruppo-dei-sei/>.

### 185 — legacy:scuola-napoletana|pers:gennaro-manna

Gennaro Manna operò nell'opera seria napoletana e in istituzioni formative; dal 1755 alla Santa Maria di Loreto risulta un incarico in collaborazione con Pietro Antonio Gallo. Non fondere genericamente i ruoli di conservatorio e teatro.

**Guardrail:** distinguere conservatorio Sant'Onofrio, Santa Maria di Loreto, teatri e date delle cariche; fonte DBI.
**Record intatti:** `base2K:1612` (base, `forma-o-pratica-documentata`) · `special2K:audit7-manna-napoli` (specialist, `pratica-operistica-e-magistero-napoletano`).
**Testi specialistici originali:** `forward = ebbe fra i suoi maestri di teatro e composizione`, `reverse = si formò e contribuì al repertorio operistico della`. Nota: Gennaro Manna si formò nel Conservatorio di Sant'Onofrio a Napoli e fu compositore di opere serie, tra cui Tito Manlio (1742) e Achille in Sciro per il San Carlo (1745). Insegnò inoltre a Santa Maria di Loreto dopo Francesco Durante. L'arco riguarda la tradizione operistica napoletana, senza confonderla con il distinto nodo sul partimento..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/manna_%28Dizionario-Biografico%29/>.
**Riscontri indipendenti mirati:** Gennaro Manna, Loreto interim maestro 1755 and later secondary role; distinction of institutions (<https://www.treccani.it/enciclopedia/manna_%28Dizionario-Biografico%29/>). Non estendere la verifica a fatti non documentati.

### 186 — legacy:grand-opera|pers:halevy

Halévy e La Juive (1835) sono un episodio specifico del grand opéra francese. Non trasformare il suo rapporto con il genere in una relazione diretta implicita con Auber e Meyerbeer.

**Guardrail:** La Juive: autore, titolo, data e funzione; genere non è ponte fra compositori.
**Record intatti:** `base2K:1614` (base, `forma-o-pratica-documentata`) · `special2K:audit3-grandopera-halevy` (specialist, `esponente-del-genere`).
**Testi specialistici originali:** `forward = ebbe fra i principali interpreti`, `reverse = contribuì al genere con La Juive (1835)`. Nota: La Juive (1835) di Halévy è una delle opere emblematiche del grand opéra francese, genere di grande dimensione spettacolare e impiego esteso di orchestra, cori e balletto; Treccani annovera Halévy fra i maggiori esponenti..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/grand-opera/> · <https://www.treccani.it/enciclopedia/il-grand-opera_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/>.

### 187 — legacy:musica-per-film-novecento|pers:morricone

Morricone compose per il cinema italiano e internazionale con poetiche e tecniche articolate; il nodo cinema non prova rapporti di influenza, amicizia o insegnamento diretti con gli altri compositori di colonne sonore.

**Guardrail:** nessun shortcut Steiner→Morricone→Williams attraverso «musica per film».
**Record intatti:** `base2K:1620` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-cinema-morricone` (specialist, `musica-per-cinema`).
**Testi specialistici originali:** `forward = comprende la scrittura per il cinema italiano e internazionale di`, `reverse = compose colonne sonore e sperimentò timbri originali nel contesto della`. Nota: L'opera di Morricone attraversa il cinema italiano e internazionale; questa affiliazione non sostiene un rapporto diretto di insegnamento con gli altri compositori della categoria..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/musica-e-cinema_%28Enciclopedia-Italiana%29/>.

### 188 — legacy:camerata-fiorentina|pers:vincenzo-galilei

Vincenzo Galilei è figura centrale nei dibattiti della Camerata de' Bardi e nella riscoperta della declamazione monodica. La cerchia Bardi non coincide con l'ambiente di Jacopo Corsi successivo: non attribuire alla sola Camerata la nascita dell'opera.

**Guardrail:** Bardi e Corsi due reti distinte, non un identico nodo.
**Record intatti:** `base2K:1628` (base, `forma-o-pratica-documentata`) · `special2K:audit23-camerata-vincenzo-galilei` (specialist, `ideologo-e-praticante-monodia-camerata`).
**Testi specialistici originali:** `forward = annoverarono fra i teorici della prima cerchia legata a Bardi`, `reverse = partecipò come teorico alla cerchia di Bardi, distinta dal successivo ambiente di Corsi nella voce`. Nota: Treccani presenta Vincenzo Galilei come principale ideologo della Camerata fiorentina, autore di scritti e sperimentazioni monodiche che tradussero in pratica le discussioni sul rapporto fra parola e musica..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/la-camerata-de-bardi_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 189 — legacy:tradizione-trovatori-occitani|pers:bernart-de-ventadorn

Bernart de Ventadorn è autore della tradizione poetico-musicale dei trovatori in lingua d'oc, in particolare della canso. Una comune lingua/tradizione non comprova un incontro con la Comtessa de Dia.

**Guardrail:** tradizione occitana ≠ filiazione diretta o contemporaneità verificata.
**Record intatti:** `base2K:1631` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-trovatori-bernart` (specialist, `canso-occitana`).
**Testi specialistici originali:** `forward = comprende le canzoni in lingua d'oc tramandate per`, `reverse = compose canso nell'ambito della`. Nota: Bernart de Ventadorn è documentato come trovatore provenzale; il nodo segnala appartenenza culturale, non una filiazione pedagogica..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/bernardo-di-ventadorn/> · <https://www.treccani.it/enciclopedia/trovatore/>.

### 190 — legacy:tradizione-trovatori-occitani|pers:comtessa-de-dia

La Comtessa de Dia è una trobairitz; Treccani documenta che l'identificazione biografica è incerta e che si conserva musica per un solo canto, A chantar m'er de so qu'eu no volria. Non attribuire automaticamente un'identità aristocratica univoca né altre melodie.

**Guardrail:** IDENTITÀ INCERTA; testimonianze poetico-musicali non sono genealogie personali.
**Record intatti:** `base2K:1632` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-trovatori-dia` (specialist, `trobairitz-occitana`).
**Testi specialistici originali:** `forward = comprende le canso della trobairitz ricordata come`, `reverse = compose canzoni d'amore in lingua d'oc nell'ambito della`. Nota: La Comtessa de Dia è rappresentata nel repertorio della canso occitana; la categoria distingue la tradizione trobadorica da quella dei trovieri..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/trovatore/>.
**Riscontri indipendenti mirati:** Comtessa de Dia identity disputed; A chantar m'er is only surviving melody (<https://www.treccani.it/enciclopedia/musica-e-spiritualita-femminile-ildegarda-di-bingen_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>). Non estendere la verifica a fatti non documentati.

### 191 — legacy:musica-per-film-novecento|pers:steiner

Max Steiner contribuisce al modello orchestrale sinfonico del cinema sonoro di Hollywood. La categoria riguarda linguaggi, opere e attività, non un legame diretto con Korngold o Williams.

**Guardrail:** documentare eventuali rapporti personali su altra evidenza, non sull'etichetta film.
**Record intatti:** `base2K:1643` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-cinema-steiner` (specialist, `sinfonismo-hollywood-classico`).
**Testi specialistici originali:** `forward = ebbe fra i principali artefici del sinfonismo hollywoodiano`, `reverse = sviluppò una prassi sinfonica per il film sonoro nella`. Nota: Max Steiner fu fra i principali artefici della prassi sinfonica del cinema hollywoodiano sonoro..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/compositore_%28Enciclopedia-del-Cinema%29/>.

### 192 — legacy:musica-per-film-novecento|pers:korngold

Erich Wolfgang Korngold portò nel cinema americano un'esperienza compositiva teatrale e orchestrale europea. Distinguere i ruoli e non sostenere che tutti i compositori del cinema condividessero una medesima scuola.

**Guardrail:** opera teatrale e scoring cinematografico richiedono repertori distinti.
**Record intatti:** `base2K:1645` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-cinema-korngold` (specialist, `teatro-e-cinema`).
**Testi specialistici originali:** `forward = comprende il trasferimento di tecniche operistiche alle colonne sonore di`, `reverse = portò nell'orchestrazione cinematografica esperienze operistiche e concertistiche per la`. Nota: Korngold portò nel cinema statunitense competenze ed esperienze maturate nell'ambito teatrale e orchestrale mitteleuropeo..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/compositore_%28Enciclopedia-del-Cinema%29/>.

### 193 — legacy:musica-per-film-novecento|pers:john-williams

John Williams è esponente del sinfonismo cinematografico contemporaneo, con partiture di ampia articolazione orchestrale. Collegamenti specifici con film/registi vanno modellati per singole opere o collaborazioni documentate.

**Guardrail:** non inferire rapporti con Steiner/Korngold solo per affinità stilistica.
**Record intatti:** `base2K:1646` (base, `forma-o-pratica-documentata`) · `special2K:integr20261018-cinema-williams` (specialist, `sinfonismo-cinema`).
**Testi specialistici originali:** `forward = comprende la scrittura sinfonica cinematografica di`, `reverse = compose grandi partiture sinfoniche nel contesto della`. Nota: John Williams è tra gli autori centrali del sinfonismo cinematografico contemporaneo; Treccani ne documenta l'attività filmica..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/john-williams_%28Enciclopedia-del-Cinema%29/> · <https://www.treccani.it/enciclopedia/musica-e-cinema_%28Enciclopedia-Italiana%29/>.

### 194 — legacy:teatro-musicale-broadway|pers:jeanine-tesori

Jeanine Tesori compose musica per il teatro musicale contemporaneo e l'opera; le relazioni con librettisti e produzioni richiedono credito puntuale. Non equiparare Broadway a un'unica tradizione immobile né inferire che tutti i musical abbiano identico formato.

**Guardrail:** compositore musicale distinto da librettista e paroliere; ruolo editoriale per opere specifiche.
**Record intatti:** `base2K:1700` (base, `forma-o-pratica-documentata`) · `special2K:integr4-broadway-tesori` (specialist, `musical-contemporaneo`).
**Testi specialistici originali:** `forward = comprende i musical contemporanei composti da`, `reverse = compose musical contemporanei nel contesto del`. Nota: La English National Opera ricorda l'attività di Tesori nel musical e nell'opera contemporanea..
**Fonti originarie:** <https://www.eno.org/people/jeanine-tesori/>.

### 195 — legacy:opera-semiseria|pers:rossini

Rossini partecipò al repertorio semiserio con La gazza ladra (1817) e Torvaldo e Dorliska. L'arco punta a titoli specifici; non implica che l'intero catalogo rossiniano appartenga allo stesso genere.

**Guardrail:** opera semiseria separata da buffa e seria; titoli specifici conservati.
**Record intatti:** `base2K:1924` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-opera-semiseria-gioachino-rossini` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: La gazza ladra e Torvaldo e Dorliska attestano l'attività rossiniana nel genere semiserio..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gioachino-rossini_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.

### 196 — legacy:opera-semiseria|pers:bellini

La sonnambula (1831) è spesso classificata in area semiseria per soggetto e trattamento; l'Archivio del Teatro dell'Opera di Roma la presenta però come «melodramma in due atti». Conservare la classificazione interpretativa ma NON convertire automaticamente in forma ufficiale esclusiva.

**Guardrail:** ALLERTA etichetta: catalogazione primaria «melodramma», semiseria è inquadramento storiografico da motivare.
**Record intatti:** `base2K:1925` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-opera-semiseria-vincenzo-bellini` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: La sonnambula di Bellini appartiene alla tradizione dell'opera semiseria..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/vincenzo-bellini_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontri indipendenti mirati:** Archive labels La sonnambula «melodramma in due atti», premiere 6 March 1831 (<https://archiviostorico.operaroma.it/opera/la-sonnambula/>). Non estendere la verifica a fatti non documentati.

### 197 — legacy:opera-semiseria|pers:donizetti

Linda di Chamounix di Donizetti è descritta come «melodramma semiserio in tre atti», prima Vienna 19 maggio 1842, su libretto di Gaetano Rossi. Trattare il titolo specifico, non una vaga appartenenza a un'unica scuola con Rossini e Bellini.

**Guardrail:** melodramma semiserio documentato puntualmente dall'Archivio Opera Roma.
**Record intatti:** `base2K:1926` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-opera-semiseria-gaetano-donizetti` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: Donizetti praticò il repertorio semiserio accanto all'opera seria e buffa..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/gaetano-donizetti_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontri indipendenti mirati:** Linda di Chamounix melodramma semiserio in three acts; 19 May 1842 Vienna (<https://archiviostorico.operaroma.it/opera/linda-di-chamounix/>). Non estendere la verifica a fatti non documentati.

### 198 — legacy:dramma-giocoso|pers:mozart

Il dissoluto punito ossia Don Giovanni (1787) di Mozart, libretto di Lorenzo Da Ponte, è «dramma giocoso in due atti». Questa etichetta teatrale non deve fare entrare capitoli editoriali nel grafo storico né produrre ponti fra tutti gli operisti.

**Guardrail:** SENTINELLA: Mozart→dramma giocoso non abilita Mozart→tutti gli autori del genere.
**Record intatti:** `base2K:1927` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-dramma-giocoso-wolfgang-amadeus-mozart` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: Mozart contribuì in modo fondamentale al dramma giocoso, soprattutto attraverso il suo teatro italiano..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/dall-intermezzo-all-opera-buffa_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontri indipendenti mirati:** Don Giovanni dramma giocoso in two acts, Da Ponte, first 29 October 1787 Prague (<https://archiviostorico.operaroma.it/opera/don-giovanni/>). Non estendere la verifica a fatti non documentati.

### 199 — legacy:intermezzo-comico|pers:pergolesi

La serva padrona (1733) di Pergolesi è un intermezzo in due parti associato a Il prigionier superbo; non va trasformato senza cautela in «opera buffa integrale». I cataloghi offrono giorni differenti per la prima: non alterare l'originale, che specifica solo l'anno.

**Guardrail:** ALLERTA cronologia: Corago 5 settembre 1733, Braidense 28 agosto 1733. Intermezzo ≠ opera buffa integrale.
**Record intatti:** `base2K:1930` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-intermezzo-comico-giovanni-battista-pergolesi` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: La serva padrona è un intermezzo comico di Pergolesi, poi divenuto riferimento della fortuna del genere..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/dall-intermezzo-all-opera-buffa_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/>.
**Riscontri indipendenti mirati:** Corago first 5 September 1733 as intermezzo (<https://corago.unibo.it/opera/Z000005324>) · Braidense first 28 August 1733 (<https://opac.bibliotecabraidense.org/opac_braidense/opac/braidense/scheda_sim.jsp?bid=MUS0286572&pager.offset=0&sim_bid=MUS0001528>) · 1733 printed libretto includes Il prigionier superbo and La serva padrona as intermezzo (<https://corago.unibo.it/libretto/DD00309789>). Non estendere la verifica a fatti non documentati.

### 200 — legacy:belcanto|pers:rossini

Rossini è figura centrale di una tradizione vocale belcantistica, ma «belcanto» è soprattutto categoria di prassi e scrittura vocale, non un genere teatrale esclusivo al pari di opera seria/semiseria.

**Guardrail:** non instradare Barbiere di Siviglia→tutti i cantanti e compositori via belcanto.
**Record intatti:** `base2K:1934` (base, `repertorio-o-pratica-documentata`) · `special2K:gen-belcanto-gioachino-rossini` (specialist, `repertorio-e-trasformazione`).
**Testi specialistici originali:** `forward = fu praticato o trasformato da`, `reverse = coltivò o trasformò il genere di`. Nota: Rossini riformulò la tradizione belcantistica settecentesca tramite una scrittura vocale virtuosistica di grande inventiva..
**Fonti originarie:** <https://www.treccani.it/enciclopedia/opera/>.

## Criticità documentali e filologiche

1. **Gruppo 190 — Comtessa de Dia.** Biografia e identificazione storica non sicure, opera vocale con una melodia conservata: evitare persona biografica artificiosamente univoca e qualsiasi filiazione personale per mera appartenenza alla tradizione occitana. Fonte Treccani: <https://www.treccani.it/enciclopedia/musica-e-spiritualita-femminile-ildegarda-di-bingen_%28Storia-della-civilta-europea-a-cura-di-Umberto-Eco%29/>.
2. **Gruppo 196 — Bellini, La sonnambula.** L'etichetta «semiseria» è un inquadramento storiografico, mentre l'Archivio Opera Roma elenca «melodramma in due atti»: mantenere entrambe le descrizioni nel confronto senza reificare la prima come titolo ufficiale della fonte. <https://archiviostorico.operaroma.it/opera/la-sonnambula/>.
3. **Gruppo 197 — Donizetti.** *Linda di Chamounix* è documentata «melodramma semiserio in tre atti» e prima 19 maggio 1842. <https://archiviostorico.operaroma.it/opera/linda-di-chamounix/>.
4. **Gruppo 198 — Mozart.** *Don Giovanni* (1787) è «dramma giocoso in due atti» con libretto di Lorenzo Da Ponte. Non trasformare l'indice editoriale in nodo storico e non rendere il genere un'autostrada verso altri compositori. <https://archiviostorico.operaroma.it/opera/don-giovanni/>.
5. **Gruppo 199 — Pergolesi.** *La serva padrona* è un **intermezzo** associato a *Il prigionier superbo*, non un'opera buffa integrale. Le datazioni di prima non concordano: Corago/Università di Bologna **5 settembre 1733** (<https://corago.unibo.it/opera/Z000005324>); Braidense **28 agosto 1733** (<https://opac.bibliotecabraidense.org/opac_braidense/opac/braidense/scheda_sim.jsp?bid=MUS0286572&pager.offset=0&sim_bid=MUS0001528>). Non forzare uno dei giorni in produzione.
6. **Gruppo 200 — Rossini e belcanto.** Non equiparare «belcanto» a un singolo genere di opera teatrale. Richiede una tassonomia di prassi, vocalità e stile più raffinata del mero arco repertoriale.
7. **Gruppi 181–184.** Gruppo dei Cinque e Gruppo dei Sei: l'appartenenza è un fatto storico reale, non un arco maestro-allievo né attestazione di stile uniforme; valorizzare la specificità di Cui, Auric, Durey, Tailleferre.
8. **Gruppi 187, 191–194.** Musica per film e musical: Morricone, Steiner, Korngold, Williams e Tesori non diventano vicini biografici per un'appartenenza di repertorio; opere, ruoli e collaboratori sono unità autonome.
9. **Gruppo 188 — Camerata.** Le cerchie di Bardi e Corsi sono contesti diversi; Galilei appartiene alla prima e non va usato per appiattire l'invenzione del melodramma su un solo gruppo.

## Controlli di staging

- PASS — 20 groups cover 181..200
- PASS — 40 originals 20 base 20 specialist
- PASS — Every group has 1 base and 1 specialist
- PASS — Every original source ID uniquely retained
- PASS — All endpoints normalized correctly
- PASS — All 20 specialist forward reverse fragments retained
- PASS — All original notes remain exact
- PASS — All original sources lists remain exact
- PASS — Every source kind original and canonical identity unchanged
- PASS — Comtessa de Dia biographical identity uncertainty preserved
- PASS — Sonnambula genre discrepancy preserved
- PASS — Serva padrona source date discrepancy preserved
- PASS — No category-as-bridge in rooted traversal
- PASS — No historical edge automatically approved
- PASS — Tooltip JS final renderer remains untested
- PASS — No public/production writes planned

## Stato cumulativo e lavori non eseguiti

**200/250 gruppi**, 50 da classificare. I due lotti 09 e 10 insieme conservano 81 originali. I 3.856 archi legacy e i 1.718 Atlantis non sono stati modificati, né i 210 lotti filologici. Il renderer storico `relationSentence` (tre ridefinizioni), il confronto letterale forward/reverse, l'interfaccia hover/tap Android e il filtro di pertinenza radicata I–V sul grafo unificato restano da collaudare. Le regole di separazione capitoli editoriali/periodi storici restano vincolanti.

**Prossima ripresa:** Lotto 11, gruppi **201–220**, successivamente 221–250.
