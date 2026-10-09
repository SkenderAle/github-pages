# MUSURGIA MUNDI — AUDIT 23 · Primo lotto di 50 relazioni produttive

**Data:** 9 ottobre 2026 · **Ramo:** `audit-produzione-correttivo-01` · **Base:** `52f6ee7aa67511aff53c624c7bab3dcde53d8729`

## Rettifica del conto ereditato

La matrice congelata contiene **218** relazioni produttive incidenti nel primo macroblocco di 100 compositori. Fra queste, **33 avevano già un controllo individuale registrato**: 8 del primo audit di qualità, 15 della revisione 02 e 10 della revisione 02b. Non erano dunque tutte da includere nei «210 rimanenti» della prima fotografia: la versione finale della matrice elenca **185** relazioni ancora non verificate individualmente.

L'audit 23 prende le **prime 50 di quelle 185**, nell'ordine stabile della matrice, registrandole con la coppia `source|target`; non ripete i 33 controlli precedenti. La nuova area non revisionata della matrice scende da 185 a **135**, fermo restando che **due del lotto richiedono ancora un ulteriore riscontro** per la fonte non riaperta o inaccessibile. Riesame bibliografico non equivale a certificazione archivistica.

## Sintesi dell'intervento

- **50** archi produttivi confrontati col database corrente e sottoposti a una ricognizione storico-documentaria individualizzata (differenziando forza e accessibilità della fonte).
- **23** note e/o repertori di fonti aggiornati nel `grafo.json`; **27** relazioni del lotto conservate senza modifiche.
- Nessun nodo o arco aggiunto, eliminato o riorientato. Rimangono **860 nodi e 1.670 archi**.
- Non modificati `id` logici, `source`, `target`, `kind`, `status`, `weight`, `audit_batch` e nessun URL storico cancellato.
- Zero promozioni automatiche a «documentato» (i rapporti avevano già i loro stati editoriali).

## Progressi storicamente significativi

1. **Vivaldi**: il concerto ora è ancorato a *L'estro armonico* op. 3 (1711), la sonata alle *12 Suonate da camera a tre* op. 1 (1705), la musica sacra alle edizioni critiche Ricordi e l'oratorio a *Juditha triumphans* RV 644 nella edizione Fondazione Giorgio Cini. Si distinguono generi musicali diversi, non un'unica aura biografica.
2. **Barbara Strozzi**: riferimento concreto all'op. 7 *Diporti di Euterpe* (1659), 15 cantate/ariette per voce e continuo.
3. **Andrea Gabrieli**: repertori sacri autonomi di messe, mottetti e salmi; la raccolta postuma *Concerti* (1587) curata da Giovanni non è «concerto per solista».
4. **Adam de la Halle**: 36 chansons monodiche in studio scientifico Brill; preservata la distinta produzione di rondeaux, mottetti e teatro.
5. **Monteverdi**: otto libri di madrigali pubblicati in vita, non nove; nono postumo del 1651.
6. **Benedetto Marcello**: gli otto tomi originali dell'*Estro poetico-armonico* (1724–26) sono descritti nel catalogo storico Gaspari di Bologna; cinquanta parafrasi italiane, non salmi latini liturgici tout court.
7. **Antonio Caldara**: manoscritto **DD.226** del Museo della Musica di Bologna con cantate autografe datate 1712, non dedurre che il servizio alla corte imperiale sia già iniziato in quell'anno.
8. **Dittersdorf**: identificato corpus sinfonico sulle *Metamorfosi* di Ovidio Kr. 73–84, distinguendo sei opere incomplete/trasmesse solo in parte.
9. **Gluck**: *Orfeo ed Euridice*, Calzabigi, Vienna 1762, punto di ancoraggio per l'attività operistica.
10. **C. P. E. Bach**: serie Wq 48–49 nella edizione critica delle sonate per tastiera; prova produttiva separata dalla ricezione da parte di Haydn.
11. **Zemlinsky**: *Eine florentinische Tragödie*, composizione 1915–16, prima 1917.
12. **Honegger**: terza sinfonia H.186 *Liturgique* (1945–46), lavori sinfonici e non musica per celebrazione liturgica.
13. **Maderna**: *Musica su due dimensioni* **1952** (flauto, piatto, nastro) distinta dal lavoro omonimo **1958** (flauto, nastro), fonti analitiche *Music Theory Online* e festival Warszawska Jesień.
14. **Bartók**: *Concerto per orchestra* composto 1943 e revisionato 1945, un concerto per intera orchestra e non per solista.
15. **Aaron Copland**: *Appalachian Spring* originale per 13 strumenti e balletto di Martha Graham (1944), distinto dalla suite per orchestra del 1945.
16. **Orff**: *Carmina Burana* cantata scenica profana, composta 1935–36 e presentata 1937.
17. **Gounod**: la BnF distingue la prima versione di *Faust* del 1859 con dialoghi parlati dalle successive integrazioni con recitativi e balletto.
18. **Neefe**: sei sonate e variazioni per tastiera, stampa 1774, organico originario **clavicordo**.

## Rischi e questioni residue

- **Webern, Bagatelle op. 9**: URL originale IMSLP non accessibile al nuovo controllo. L'arco rimane, ma il riscontro individuale non è dichiarato completato.
- **Schönberg, Pierrot lunaire op. 21**: schede precedenti pertinenti, ma non riaperte integralmente; non assumere falsa certificazione.
- Alcuni riferimenti generici restano validi per il **genere** ma non per una **specifica opera**: futuri passaggi potranno sostituirli con cataloghi di opere o edizioni critiche senza creare nuovi archi.
- I cataloghi delle opere, gli indici e le riproduzioni di frontespizi non sono la stessa cosa di una collazione integrale della partitura. La prova raccolta va classificata per tipo, non dichiarata omogenea.

## Registro e continuità

Il file `audit23_produzione50_20261009_verifiche.json` elenca esattamente i 50 collegamenti, l'indice nella matrice, la fonte consultata, l'eventuale modifica al grafo, lo stato di accessibilità e i differimenti. La matrice originaria del 2026-10-08 rimane **congelata e non riscritta**. Il prossimo Audit 24 potrà prendere i **successivi 50** dei 135 non ancora riesaminati.

