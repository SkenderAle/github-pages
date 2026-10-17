# Musurgia Mundi — Audit di ricollocamento delle musiciste
**Data:** 17 ottobre 2026 · **Branch:** `main` · **Continuità:** `8c435783b17e`, `833ba53244ac`, `cc7a535f17cf`.

## Principio
Le opere, le professioni e le istituzioni delle musiciste appartengono alla storia generale della musica. Non si eliminano i limiti storici all'accesso: li si documenta in rapporto a luoghi, reti, repertori e strutture professionali.

## Mappa degli interventi
| Luogo precedente | Criticità | Integrazione |
| --- | --- | --- |
| `medioevo/index.html`: «Le trobairitz» | Rubrica autonoma dopo i generi lirici | Comtessa de Dia e *A chantar* nella trattazione della *canso*, accostata a Bernart de Ventadorn; manoscritto W e cautela sulle *vidas* |
| `melodramma/index.html`: Serpina/Mirandolina e improvvisa digressione su Ospedali | Parallelismo non fondato fra personaggio di commedia e interprete storica | La formazione delle *figlie di coro* e le soliste Anna Maria e Chiara al capitolo `barocco/#vivaldi`; nel teatro solo un rimando |
| `melodramma/index.html`: bibliografia «Donne, professione musicale…» | Categoria separata, Glixon duplicato | Anna Renzi, Cusick e Treccani Caccini nel gruppo dedicato a Firenze/Monteverdi/Venezia; gruppi rimanenti rinumerati |
| `romanticismo/index.html`: Terza sinfonia di Farrenc | Invocata ma poco analizzata | Introduzione, Allegro, tempo lento, Scherzo/Trio, Finale e orchestrazione, con guida d'ascolto |
| `dalla-sinfonia-alla-rapsodia/index.html`: introduzione dell'audioteca | Farrenc, Mayer e Beach presenti fra le opere ma assenti nella sintesi | Inserite con i loro contemporanei nel repertorio sinfonico |
| `classicismo/verifica/index.html`: «Donne: talento o accesso?» | Domanda formulata come categoria separata | Riformulata su reti, accessi e condizioni concrete della professionalizzazione, conservando i vincoli differenziati |

## Fonti verificate
- Vanessa Tonelli, «Musical Daughters of Venice» (Cambridge, 2026): https://www.cambridge.org/core/books/abs/barbara-strozzi-in-context/musical-daughters-of-venice/A1925D000644608F338C1BDBEBF7ED1D
- Fondazione Levi / Istituto Italiano Antonio Vivaldi, Anna Maria, Chiara e Pisendel (2025): https://www.fondazionelevi.it/eventi/vivaldi-e-lornamentazione-tra-la-pieta-veneziana-e-la-dresda-di-pisendel/
- Indiana University Press, *Historical Anthology of Music by Women*: https://publish.iupress.indiana.edu/read/historical-anthology-of-music-by-women/section/cd6c5a37-1c86-4079-89c0-d2f0093df29f
- Universidad de Cádiz, «La música y las trobairitz: el testimonio de la Comtessa de Dia»: https://produccioncientifica.uca.es/documentos/5febd9d75ef7446310f9a5a0?lang=ca
- Orquesta Filarmónica de la Ciudad de México, Sinfonia n. 3 di Farrenc: https://ofcm.cultura.cdmx.gob.mx/node/1224
- Jillian C. Rogers, *Journal of the Royal Musical Association* (2025), lettere 1849–50 e parità salariale Farrenc documentata entro 1855: https://www.cambridge.org/core/journals/journal-of-the-royal-musical-association/article/louise-farrenc-and-nineteenthcentury-french-feminist-musical-praxis/54ED4C5BDB42B10F17CB1FD58E176F4B

## Censimento e controlli
Esaminati staticamente **27 file HTML di indice**, compresi percorsi tematici, pagine embrionali, verifiche e sezioni pedagogiche. Le voci `#donne` o `id="donne"` non risultavano più presenti dopo i tre commit precedenti. L'unica intestazione ancora formulata come categoria «Donne» tra le pagine didattiche era la verifica del Classicismo; ora è stata riscritta. Una canzone intitolata «Donne, venete al ballo» nel Rinascimento resta correttamente intatta, come pure l'espressione storica «primedonne» riferita al teatro.
- `medioevo/index.html`: modifica -214 caratteri; 137 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.
- `barocco/index.html`: modifica +1548 caratteri; 130 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.
- `melodramma/index.html`: modifica -3251 caratteri; 48 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.
- `romanticismo/index.html`: modifica +580 caratteri; 206 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.
- `dalla-sinfonia-alla-rapsodia/index.html`: modifica +23 caratteri; 14 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.
- `classicismo/verifica/index.html`: modifica +82 caratteri; 53 identificativi invariati; script, iframe e ID YouTube invariati; nessun nuovo ancoraggio locale irrisolto.

## Limiti e prossimo passo
Test statici, non rendering reale su smartphone né prova dell'incorporamento dei video. Non sono state aggiunte registrazioni o crediti d'esecuzione senza verifica. Il futuro percorso dell'opera lirica conserva il proprio spazio. Proseguire con esame delle fonti primarie e della struttura degli ascolti, evitando elenchi compensativi.
