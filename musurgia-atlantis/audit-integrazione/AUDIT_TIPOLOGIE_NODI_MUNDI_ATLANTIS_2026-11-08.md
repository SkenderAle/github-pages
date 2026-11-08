# MUSURGIA ATLANTIS — Audit delle tipologie e dei nodi principali dell'Atlante 3D
**8 novembre 2026 · `main` · soltanto audit, senza modifiche ai grafi o all'interfaccia pubblica.**

## Risultato principale
**No: le tipologie importanti dell'Atlante 3D di Musurgia Mundi non sono tutte presenti come nodi storici autonomi in Atlantis.** In particolare le **7 epoche** e le **18 geografie nazionali** dell'Atlante originale non sono rappresentate dall'ontologia di Atlantis. Cinque nomi di periodi coincidono con nodi `capitolo`, ma un capitolo editoriale **non è** un periodo storico; le altre due epoche («Post-romanticismo» e «Novecento») non hanno nemmeno coincidenza letterale con un capitolo. I 18 `luogo` di Atlantis sono prevalentemente città, sedi e centri storici, NON le 18 nazioni dell'Atlante.

### Inventario dei nodi
| Mundi, vecchia tipologia | Record | Atlantis, tipologia correlata | Record | Esito |
|---|---:|---|---:|---|
| `periodo` | 7 | Nessuna categoria storica `periodo` | 0 | **Assenti come nodi storici**, 5 omonimie di capitolo da tenere distinte |
| `geografia` (Paesi) | 18 | `luogo` (principalmente città/sedi) | 18 | **Ontologie differenti**, nessuno dei Paesi si identifica con i luoghi |
| `corrente` (genere, forma, tradizione, scuola, tecnica, istituzione ecc.) | 339 | `nodo-di-senso` | 176 | **Copertura soltanto parziale**, non esiste mappatura globale verificata |
| `compositore` | 400 | `persona` (tutte le professioni) | 297 | **Importazione incompleta**, patrimonio sorgente in staging |
| `persona` | 100 | stesso `persona` aggregato | incluso nei 297 | **Importazione incompleta**, richiede riconciliazione identità |
| `ambito` (contesti/editoriale, non mostrati nella vista classica) | 5 | capitoli/concetti | vari | **Non trasferire ciecamente** come nodi storici |

Estensione operetta/musical: ulteriori **9 compositori** sorgente, per un totale storico-personale da preservare di **509 record**. Il registro di staging ne propone **347** come nuove persone dopo le riconciliazioni preliminari, senza unirle alla produzione.

Atlantis possiede inoltre contenuti propri che **non vanno persi**: 193 `opera`, 14 `versione-opera`, 1 `parte-di-opera`, 8 `allestimento`, 7 `produzione` (223 complessivamente), 14 `strumento`, 4 `rete-culturale`, 18 `luogo`, 7 documenti e eventi e 15 capitoli editoriali.

## I sette periodi storici
| ID nell'Atlante originale | Nodo originale | Situazione in Atlantis |
|---|---|---|
| `medioevo` | Medioevo | Coincide solo con il **titolo di un capitolo** |
| `rinascimento` | Rinascimento | Coincide solo con il **titolo di un capitolo** |
| `barocco` | Barocco | Coincide solo con il **titolo di un capitolo** |
| `classicismo` | Classicismo | Coincide solo con il **titolo di un capitolo** |
| `romanticismo` | Romanticismo | Coincide solo con il **titolo di un capitolo** |
| `post-romanticismo` | Post-romanticismo | Nessun nodo storico corrispondente identificato |
| `novecento` | Novecento | Nessun nodo storico corrispondente identificato |

**Decisione di modello:** importare 7 entità storiche autonome, in un namespace distinto da `cap:*`, con selettore dedicato «Epoche». Le epoche sono informazioni storiche, **non** ponti verso tutti i compositori che condividono l'epoca.

## Le 18 geografie dell'Atlante storico
`Francia · Italia · Inghilterra · Spagna · Germania · Austria · Russia · Cechia · Stati Uniti · Ungheria · Polonia · Paesi Bassi · Irlanda · Brasile · Argentina · Svizzera · Svezia · Venezuela`.

La categoria `luogo` di Atlantis descrive per esempio Venezia, Mannheim, Parigi e il Festspielhaus di Bayreuth: nessuno di essi è equivalente alla nazione «Germania» o «Italia». Si raccomanda la separazione di **Paesi/regioni** da **città/sedi**, entrambi ricercabili nella categoria geografica senza trasformarli in ponti genealogici.

## I 37 nodi `corrente` di visibilità principale (priorità assoluta)
Sono stati confrontati individualmente per label, ID e campo `taxonomy.visibility="principale"` con i 754 nodi pubblici Atlantis. Stato:
- **20 candidati semantici plausibili**: un nodo Atlantis correlato esiste e può essere studiato per allineamento, ma nessuna identità o fusione è certificata;
- **4 coperture soltanto parziali**: no sostituzioni automatiche (per esempio «Mottetto» generale versus mottetto rinascimentale);
- **13 senza nodo corrispondente identificato**: priorità di possibile importazione autonoma, salvo verifica di sinonimie non documentate.

### Matrice completa (non eseguire merge)
| Tipo Mundi | Candidato Atlantis | Stato |
|---|---|---|
| `madrigale` — Madrigale | `senso:madrigale` — Madrigale e rapporto parola-musica | Candidato da validare |
| `polifonia` — Polifonia | `senso:polifonia` — Polifonia e imitazione | Candidato da validare |
| `musica-elettronica` — Musica elettronica ed elettroacustica | `senso:musica-concreta` — Musica concreta ed elettroacustica | Copertura parziale |
| `frottola-corti-italiane` — Frottola | `senso:frottola` — Frottola e musica profana di corte | Candidato da validare |
| `villancico-rinascimentale-iberico` — Villancico | — | Non identificato |
| `poema-sinfonico-ottocentesco` — Poema sinfonico | `senso:poema-sinfonico` — Poema sinfonico e immaginazione musicale | Candidato da validare |
| `musica-per-film-novecento` — Musica per il cinema | `senso:colonna-sonora` — Colonna sonora e composizione per immagine | Copertura parziale |
| `genere-concerto` — Concerto | `senso:concerto` — Concerto, concerto grosso e solista | Candidato da validare |
| `genere-sonata` — Sonata | `senso:sonata` — Sonata e linguaggi strumentali | Candidato da validare |
| `genere-sinfonia` — Sinfonia | `senso:sinfonia` — Sinfonia, sinfonismo e forme orchestrali | Candidato da validare |
| `genere-suite` — Suite | — | Non identificato |
| `genere-musica-da-camera` — Musica da camera | `senso:musica-camera` — Musica da camera e sociabilità | Candidato da validare |
| `genere-quartetto-archi` — Quartetto d’archi | `senso:quartetto` — Quartetto d'archi | Candidato da validare |
| `genere-cantata` — Cantata | `senso:cantata` — Cantata e teatro spirituale | Candidato da validare |
| `genere-oratorio` — Oratorio | `senso:oratorio` — Oratorio e narrazione fuori scena | Candidato da validare |
| `genere-messa` — Messa | — | Non identificato |
| `genere-lied` — Lied | `senso:lied` — Lied e poesia per voce e strumenti | Candidato da validare |
| `genere-opera` — Opera | `senso:opera` — Opera e dramma per musica | Candidato da validare |
| `genere-mottetto` — Mottetto | `senso:motetto-rinascimentale` — Mottetto polifonico rinascimentale | Copertura parziale |
| `forma-fuga` — Fuga | `senso:fuga` — Contrappunto e fuga | Candidato da validare |
| `forma-variazioni` — Variazioni | — | Non identificato |
| `forma-ricercare` — Ricercare | `senso:ricercare` — Ricercare strumentale | Candidato da validare |
| `forma-fantasia` — Fantasia | — | Non identificato |
| `genere-balletto` — Balletto | `senso:balletto` — Balletto e danza teatrale | Candidato da validare |
| `forma-ouverture` — Ouverture | — | Non identificato |
| `forma-toccata` — Toccata | — | Non identificato |
| `forma-preludio` — Preludio | — | Non identificato |
| `genere-rapsodia` — Rapsodia | — | Non identificato |
| `genere-chanson` — Chanson | — | Non identificato |
| `genere-ballata` — Ballata | — | Non identificato |
| `genere-lauda` — Lauda | `senso:lauda` — Lauda e canto devozionale | Candidato da validare |
| `genere-jazz` — Jazz | `senso:jazz` — Jazz e improvvisazione | Candidato da validare |
| `genere-musical` — Musical | `senso:musical` — Musical e drammaturgia delle canzoni | Candidato da validare |
| `genere-ragtime` — Ragtime | `senso:ragtime` — Ragtime e teatro musicale afroamericano | Candidato da validare |
| `forma-notturno` — Notturno | — | Non identificato |
| `genere-melodie-francese` — Mélodie francese | — | Non identificato |
| `genere-minnesang` — Minnesang | `senso:canto-cortese` — Trovatori, trovieri, Minnesänger | Copertura parziale |

**Attenzioni:** «Messa» è un genere liturgico e non va ricostruita automaticamente a partire da opere che sono messe specifiche. «Sonata» come genere non è automaticamente equivalente a «forma-sonata». «Mottetto» generale non equivale a ciascuna declinazione periodale. «Musica elettronica» ≠ «musica concreta», anche se gli ambiti si intrecciano. Un ponte tassonomico non dimostra un legame tra compositori.

## Altre scuole, tecniche, contesti
I **339 `corrente`** Mundi raccolgono non soltanto generi e forme principali, ma anche scuole/istituzioni/contesti, forme specifiche, tecniche e schede di approfondimento. In particolare, **78** hanno `taxonomy.presentation="approfondimento"`, **19** hanno `"scheda"` e altri sono raccordi o percorsi. Non tutte devono diventare bolle predefinite: **preservare però ciascun record e la propria genealogia di collegamenti**, rendendo selezionabili le schede dove opportuno. Alcune nozioni sono presenti con nomi diversi (per esempio `scuola-notre-dame` e `istituzione:scuola-notre-dame`), ma la semplice corrispondenza lessicale non dimostra identità di scuola storica e istituzione.

## Situazione attuale dei selettori
In `musurgia-atlantis/index.html` sono visibili sette filtri generali: **Capitoli, Persone, Opere e versioni, Generi e idee, Luoghi, Strumenti, Altri nodi**. Il filtro «Altri nodi» raggruppa senza distinguere molte categorie (eventi, reti, documenti); manca un filtro specifico per **Epoche**, **Scuole/tradizioni** e **Tecniche/prassi**.

### Proposta di tassonomia dei selettori
Nella **vista storica** proporre: **Persone**, **Epoche**, **Generi e forme**, **Scuole, tradizioni e movimenti**, **Tecniche e prassi**, **Opere e versioni**, **Strumenti**, **Geografia (Paesi / Luoghi)**, **Istituzioni e reti**, **Fonti, documenti ed eventi**. Le tipologie possono essere selezionate indipendentemente e ogni **singolo nodo** deve essere espandibile/restringibile (profondità derivata I–III), con la radice storica mantenuta. **Capitoli** soltanto nel livello editoriale separato.

### Regole di non perdita e prossimi passi
1. Importare in staging i 7 periodi e i 18 Paesi come categorie semantiche proprie, senza riusare ID `cap:*` e senza collegare automaticamente tutte le persone dello stesso periodo o Paese.
2. Convalidare i 37 nodi «principali» con la matrice; successivamente rivedere gli altri 302 `corrente`, distinguendo nodi principali, nodi subordinati, schede e figure contestuali.
3. Completare la migrazione delle 509 persone e la riconciliazione di tutti gli archi. Registrare `provenance`, `forward/reverse`, note e fonti. Non aprire gate storici per sola somiglianza di nome.
4. Costruire i filtri derivati da tipologia **e** i selettori su ogni nodo (non solo slider I–V), preservando il filtro di pertinenza radicata e pivot I–III, e collaudare browser/Android.

**Limiti dell'audit:** questo inventario confronta i due grafi pubblici e 37 allineamenti semantici proposti; non verifica la singola verità storica degli archi né pretende che ogni concetto nominato dentro una descrizione sia assente dalla trattazione. Nessuna modifica ai JSON/UI pubblici.
