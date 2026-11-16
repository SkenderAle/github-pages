# Preflight di integrazione — Suite, repertorio sinfonico e nodo Opera (16 novembre 2026)

**Ambito:** Musurgia Mundi + Atlantis + Flaminio Lotto 1, branch `main`. **Stato:** audit statico del codice e delle proposte; nessuna promozione in produzione, nessuna nuova attribuzione. Lotto 2 Flaminio **BLOCCATO**.

## Punto di partenza verificato

- Il registro `REGISTRO_INTEGRAZIONE_OVERLAY_TASSONOMICI_2026-11-16.json` censisce otto overlay, dei quali soltanto Sonata dispone di un caricamento operativo esplicito nel builder.
- Il collaudo logico Sonata registrato in `REGRESSIONE_PROIEZIONE_RADICATA_SONATA_2026-11-16.json` attesta 2.819 nodi, 8.544 archi, zero orfani, 500 schede; NON costituisce collaudo reale del browser, di WebGL o Android.
- `OVERLAY_TASSONOMICO_SUITE_SINFONICO_OPERA_2026-11-15.json` contiene **9 nuovi nodi proposti e 25 relazioni proposte**, tutte con stato non produttivo. Questi conteggi NON sono aggiunte al DB corrente.
- In `VISTA_DB_FEDERATO_LOTTO01_2026-11-15.html` la funzione `sonataScopedProjection` governa Sonata e Bach; `rootedProjection` usa ancora una BFS generale per gli altri nuclei. Il controllo anti-propagazione collaudato su Sonata NON si estende automaticamente alla Suite, al Repertorio sinfonico e all'Opera. Nessuna verifica browser dei nuovi nuclei è stata compiuta in questo audit.

## Separazioni ontologiche da conservare

1. **Suite** è la forma generale, con radice Mundi `mundi::genere-suite`; **Suite orchestrale** è una articolazione d'organico; **Suite sinfonica** è una qualificazione di repertorio. Ogni opera resta un nodo unico, con relazioni a forma e repertorio, non viene replicata nei rami.
2. **Partita per strumento solo** può dipendere da Suite quando indica successione di danze. **Partita su corale** va nel ramo Variazioni su corale; non deriva automaticamente da Suite. Anche un titolo «partita» non autorizza la fusione di tutte le tipologie.
3. **Repertorio sinfonico** è una famiglia trasversale, non un sinonimo di Sinfonia. Può raccogliere Sinfonia, Poema sinfonico, Rapsodia sinfonica, Ouverture da concerto, Suite sinfonica/orchestrale e altre forme, con predicati qualificati.
4. **Sinfonia concertante** mantiene la doppia appartenenza repertoriale (sinfonico e concertante) e la relazione alla Sinfonia; non coincide con «Concerto grosso» né con «Concerto per più solisti».
5. **Suite estratta** (ad es. da musica scenica) resta distinta dalla composizione d'origine e dai movimenti. Un titolo d'opera non basta per creare l'arco di estrazione.
6. **Opera semiseria** (raccordo `tax20261115:e025`) appartiene all'audit della famiglia Opera/melodramma, pur essendo presente nell'overlay Suite/Sinfonico/Opera. Non trascinarla nella gerarchia sinfonica.

## Gate sui 25 raccordi proposti

- **Struttura tassonomica da verificare con direzione esplicita:** e001–e005, e017–e018, e020–e024. I predicati `has_subtype` (dal genitore al figlio) e `member_of_repertoire` (dal membro alla famiglia) hanno direzioni diverse; il motore di navigazione non deve trattarli entrambi come espansione indiscriminata in entrambi i versi.
- **Raccordi Flaminio / originali da riconciliare sui nodi esistenti:** e006–e012; controllare l'effettiva identità delle opere e gli archi già presenti prima di creare nodi o archi aggiuntivi. In particolare e007 è denominato `has_subtype_qualified`, ma parte dal genere Flaminio più specifico verso la tipologia proposta più generale: verificare e uniformare la direzione semantica.
- **Classificazioni di opere individuali:** e013–e014 (Shéhérazade, Peer Gynt) richiedono attestazione della relazione opera→forma, e per Peer Gynt anche la corretta derivazione scenica. Non trasformare la suite in un genere «autore» né aprire altre opere mediante passaggio attraverso gli autori.
- **Arco fuori nucleo:** e025 deve essere esaminato nel filone Opera; non deve abilitare propagazione dal Repertorio sinfonico.
- **Casi non equivalenti o contestuali:** e019 (`historically_related_not_identity`) non autorizza fusione fra Rapsodia orchestrale e Rapsodia sinfonica; e020 (`related_form_to`) non costituisce gerarchia di identità.

Il presente preflight **non certifica** la presenza e la compatibilità di tutti gli estremi nei file JSON completi; richiede tale controllo al momento della promozione nel builder. Nessuno dei 25 archi viene promosso qui.

## Test che bloccano la promozione

1. Costruzione DB da **tutte le 10 sorgenti correnti**, poi registro delta nodi/archi, unicità ID, zero archi orfani, 500/500 righe Flaminio e assenza di HOLD promossi.
2. Suite → Partita strumento solo → opere accertate; le Partite su corale non entrano automaticamente nel ramo Suite.
3. Suite → Suite orchestrale → Suite sinfonica; stessa opera riutilizzata se associata a più famiglie. Suite sinfonica → Repertorio sinfonico come relazione di repertorio, senza espandere automaticamente ogni autore e l'intero catalogo.
4. Repertorio sinfonico → Poema sinfonico / Rapsodia sinfonica / Sinfonia / Ouverture da concerto, evitando di includere Ouverture operistiche per sola denominazione.
5. Sinfonia concertante → Repertorio sinfonico + Repertorio concertante, senza duplicare il nodo.
6. Opera (melodramma) → Opera semiseria, isolando il ramo teatrale.
7. Regresso sui casi Sonata, Bach, BWV 525–530, BWV 1001/1003/1005 e quattro HOLD, più modalità **Collega due lemmi**, su profondità 1–5. Le etichette devono apparire al passaggio del mouse anche se disattivate nelle categorie.
8. Prova browser desktop, rendering Canvas/WebGL e Android prima di dichiarare `FAMILY_VALIDATED`. Senza questa prova lo stato rimane `IN_REVIEW`.

## Decisione di checkpoint

**SUITE_SINFONICO_OPERA = PREFLIGHT_REVIEW_ONLY / NOT_LOADED.** Si prosegue con riconciliazione degli estremi, direzione dei predicati, raccordi effettivi alle opere e collaudo di una proiezione radicata generalizzabile alle altre famiglie. Il grafo pubblico resta invariato; Lotto 2 Flaminio bloccato.
