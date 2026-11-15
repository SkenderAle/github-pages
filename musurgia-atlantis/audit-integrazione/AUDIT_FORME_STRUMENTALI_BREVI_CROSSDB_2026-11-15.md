# Audit cross-database — Forme strumentali brevi e pezzi caratteristici
**15 novembre 2026 · IN_REVIEW · Produzione invariata · Flaminio Lotto 2 BLOCCATO**

## Provenienza e perimetro
Checkpoint precedente: commit `57c6348`. Censimento: `CENSIMENTO_TASSONOMICO_TUTTI_RECORD_2026-11-15.jsonl`, 2.988 record sorgente (Mundi 869, Atlantis 754, Flaminio Lotto 1 1.365). La ricerca *nel solo nome* con termini Preludio/Toccata/Fantasia/Capriccio/Notturno/Studio/Improvviso/Ballata/Scherzo/Intermezzo/Elegia/Rapsodia/Romanza e varianti ha restituito **153 candidati nominali** (Mundi **17**, Atlantis **7**, Flaminio **129**). Non è una ricognizione esaustiva delle opere né un elenco verificato: archi e alias possono introdurre altri candidati, e vari record sono falsi positivi.

## Output
`OVERLAY_TASSONOMICO_FORME_BREVI_2026-11-15.json`: **14 nodi analitici proposti** (1 famiglia di accesso + 13 forme/funzioni), **21 relazioni proposte** (13 membership analitiche + 8 allineamenti/specializzazioni/disambiguazioni verso ID reali Mundi), **153 riferimenti di provenienza candidati nominali**. Tutti gli endpoint delle 21 relazioni sono nodi dichiarati nel nuovo overlay oppure record già presenti nel censimento Mundi. Il builder di staging e il grafo pubblico non consumano automaticamente il nuovo overlay.

## Distinzioni musicologiche vincolanti
1. La famiglia «forme strumentali brevi» è **accesso analitico**, non una super-forma esclusiva: una fantasia o rapsodia può avere grandi dimensioni; un intermezzo può essere un movimento, un brano autonomo o parte di spettacolo.
2. **Preludio**: autonomo, introduttivo, parte di coppia formale (preludio e fuga), o parte di raccolta. Non spezzare un'opera composita in due opere indipendenti solo in base alle sezioni. `mundi::forma-preludio` costituisce un allineamento di ruolo candidato.
3. **Toccata**: `mundi::forma-toccata` forma ampia; `mundi::toccata-organistica-rinascimentale` particolare storico, non sinonimo. Le Toccate e fughe richiedono identificazione di opera, movimenti e versioni.
4. **Fantasia**: `mundi::forma-fantasia` non va confusa con `atlantis::opera:fantasia`, film animato del 1940. Una Fantasia e fuga resta identificazione compositiva da verificare, non due duplicati per forma.
5. **Capriccio, Notturno, Improvviso, Elegia, Romanza strumentale**: distinguere un pezzo autonomo da movimenti, raccolte, titoli descrittivi, forme vocali omonime; verificare organico e data.
6. **Studio**: funzione didattica e genere da concerto possono coesistere, senza duplicare il singolo studio; non collegare istituti/studi biografici e studi di registrazione sulla sola parola «studio».
7. **Ballata strumentale**: non fondere con `mundi::ballata-italiana-trecento` né con `atlantis::opera:dufay-se-la-face-ay-pale-ballade`, entrambe realtà vocali medievali; `mundi::genere-ballata` è nodo trasversale da disambiguare.
8. **Scherzo**: può essere movimento di sonata/sinfonia oppure opera autonoma. Distinguere `part_of` e `has_form`.
9. **Intermezzo strumentale** non è `mundi::intermezzo-comico` né `atlantis::senso:intermezzo`: entrambi afferiscono alla storia teatrale, con rapporto storico eventuale, non identità canonica.
10. **Rapsodia**: `mundi::genere-rapsodia` generale e `mundi::forma-rapsodia-orchestrale` storico-orchestrale; eventuale rapsodia sinfonica comporta multiappartenenza a Rapsodia e Repertorio sinfonico.

## Sentinelle dall'inventario
- `flaminio:excel:3674`: «Preludio, fuga e Allegro in mi bemolle maggiore per liuto» — confrontare la scheda opera con eventuali parti, senza duplicare.
- `flaminio:excel:3838`: «Toccata, adagio e fuga in do maggiore» — composizione a sezioni, catalogo e attribuzione da accertare.
- `flaminio:excel:3888`: «Fantasia cromatica e fuga in re minore» — due procedure/formazioni nella stessa composizione documentata.
- `flaminio:excel:3981`: «Capriccio sopra la lontananza del fratello dilettissimo in si bemolle maggiore» — brano programmatico, non ogni «capriccio» ha carattere puramente virtuosistico.
- `flaminio:excel:4211`: «Rapsodia per violino e pianoforte n. 1» — rapsodia cameristica, non repertorio sinfonico.
- `atlantis::opera:prelude-faune-debussy`: *Prélude à l’après-midi d’un faune* è opera orchestrale; il titolo non basta per classificarla nello stesso sottogenere dei preludi pianistici.

Questi ID Flaminio `flaminio:excel:...` sono **record documentari**: verificare il nodo opera di staging e l'identità catalografica prima di promuovere relazioni; niente nuove «opere» create automaticamente.

## Gate di completamento
1. Per tutti i 153 candidati nominali: verificare tipo, identificazione, rapporto con generi, raccolte e compositori, alias, attribuzione e fonti; registrare i falsi positivi.
2. Riesaminare **tutti** i record del Lotto 1 per connessioni non nominali tramite archi, forme/organici e registri specialistici; non equiparare 153 a copertura completa.
3. Recuperare crosswalk di identità, overlay precedenti, varianti catalografiche, parti di opere e rac­colte.
4. Testare ricerca radicata (autore → opera → forma e viceversa) con filtro Persone/Opere/Generi e livelli I–V; nessuna propagazione indiscriminata alle opere di altri compositori.
5. Generare matrice risolti/sospesi/solo fonte; solo dopo prove complete autorizzare `FAMILY_VALIDATED`.

**Esito: IN_REVIEW. Nessun aggiornamento della produzione, nessuna importazione Flaminio Lotto 2.**
