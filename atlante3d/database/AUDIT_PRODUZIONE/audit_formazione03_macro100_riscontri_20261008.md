# MUSURGIA MUNDI — Audit formazione 03, riscontri mirati

8 ottobre 2026. Ramo esclusivo `audit-produzione-correttivo-01`. Base iniziale `4ad56edac67975e6caa0140777696ae3571b76f6`.

## Campo e prudenza quantitativa
Dalle 84 relazioni del gruppo formazione incidenti sul macroblocco congelato di 100 compositori sono stati individuati e confrontati i seguenti casi, usando documentazione specifica. Questo NON costituisce la validazione delle 84 relazioni. È stata modificata una sola relazione specialistica; non sono stati creati o soppressi record. I numeri del database non cambiano.

| ID o coppia | Esito | Fonte | Azione |
|---|---|---|---|
| `audit19-monteverdi-cavalli-formazione` | **Da precisare**: servizio sotto la direzione di Monteverdi a San Marco documentato, lezioni personali non dimostrate | https://www.folger.edu/blogs/folger-spotlight/monteverdis-legacy-program-notes/ | Modificati `kind`, `status`, `note`, `forward`, `reverse`; preservati ID, direzione, gruppo e fonte precedente |
| `form-johann-stamitz-cannabich` | Confermato insegnamento strumentale e compositivo | https://www.deutsche-biographie.de/sfz80961.html | Nessuna modifica |
| `form-johann-stamitz-carl-stamitz` | Confermata formazione paterna iniziale | https://www.deutsche-biographie.de/gnd119000008.html | Nessuna modifica |
| `form-cannabich-carl-stamitz` | Confermata prosecuzione della formazione con Cannabich | https://weber-gesamtausgabe.de/de/A009726.html | Nessuna modifica |
| `audit24-richter-carl-stamitz-formazione` | Confermato ruolo di Richter accanto a Cannabich e Holzbauer, non esclusivo | https://www.deutsche-biographie.de/gnd119000008.html | Nessuna modifica |
| `lotto08-milhaud-glass` | Confermato studio ad Aspen con Milhaud nella biografia ufficiale di Glass | https://philipglass.com/biography/ | Nessuna modifica |
| `audit20-bartok-reiner-formazione` | Confermato insegnamento pianistico presso l'Accademia Liszt dalla documentazione archivistica della Northwestern University | https://findingaids.library.northwestern.edu/agents/people/2287 | Nessuna modifica |
| `form-milhaud-reich` | Confermato fra gli allievi di Milhaud dalla fondazione dedicata al compositore; mantenere separata la verifica di sedi e date | https://dariusmilhaud.org/biography/ | Nessuna modifica |
| `audit26-jommelli-cannabich-formazione` | La biografia conferma un soggiorno romano insieme a Jommelli, ma non dà qui prova diretta di lezioni formali: richiede ulteriore riscontro puntuale | https://www.deutsche-biographie.de/118668218.html | Nessuna modifica, da riesaminare |

## Questione Monteverdi–Cavalli
La fonte Folger distingue la permanenza venticinquennale nell'ambiente diretto da Monteverdi dalla prova di insegnamento personale. L'etichetta originale `fu maestro e direttore musicale di` attribuiva troppo: ora l'arco rappresenta solo la direzione della cappella di San Marco, e lo stato diventa `documentato-con-cautela` per il profilo pedagogico. Il campo `group=formazione` resta invariato per retrocompatibilità, ma va esaminato in futuro sul piano della classificazione; non si è intervenuti nel visualizzatore.

## Limiti e prossime priorità
Le fonti di biografia e archivio provano le singole affermazioni sopra riportate nei limiti esplicitati; non sono stati esaminati carteggi o registri scolastici completi. La matrice qualità 01 non è stata ricontabilizzata né chiusa. Il caso Jommelli–Cannabich richiede di distinguere soggiorno nello stesso ambiente, discepolanza e docenza formale. Proseguire con il restante insieme delle 84 relazioni formative, poi con le altre categorie. Non toccare `main`.
