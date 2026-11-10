# Musurgia Atlantis — Lotto 27: confronto delle attribuzioni alternative

**10 novembre 2026** · Branch `main` · Audit non distruttivo.

## Cosa è stato verificato realmente

Riletto lo staging Lotto 26: **137** campi `source_attribution_statement` ricavati dalle note originali, dei quali **10** contengono «autore ignoto» (non un nome d'autore) e **3** presentano alternative «o». La precedente denominazione «137 indicazioni nominative» era quindi troppo ampia: sono 137 *asserzioni testuali estratte*, non 137 persone identificate.

**12** record hanno ricevuto in questo lotto un confronto esterno puntuale; **125** sono ancora da confrontare individualmente. I controlli sono documentati riga per riga nel JSON e NON convalidano identità dei nodi già presenti né autorizzano il merge.

### Confronti prioritari e loro esito

- Righe **3696 e 3698**: i due minuetti di Anna Magdalena Bach, BWV Anh.114–115, attribuiti a **Christian Petzold** nella documentazione della Nederlandse Bachvereniging. Due opere separate, non una.
- Righe **51342, 51344, 51343, 51351, 51353, 51347**: le sei sonate dell'**op.13 Il pastor fido** appartengono alla raccolta di **Nicolas Chédeville**; la fonte cataloga sei sonate, ma per prudenza la corrispondenza esatta di numero RV e singola sonata rimane in verifica.
- Riga **50437**: il concerto in re minore collegato alla trascrizione BWV 979, già classificato come Torelli dalla fonte Flaminio, è identificato nell'edizione critica **Ricordi 2019, Federico Maria Sardelli** come **Vivaldi RV 813**. Non propagare la precedente attribuzione senza considerare la revisione critica.
- Riga **2887**: *Das ist je gewisslich wahr*, precedentemente BWV 141, trova riscontro archivistico come **Telemann TWV 1:183** nella collezione dell'Università di Francoforte.
- Riga **2976**: *Ich weiss, dass mein Erlöser lebt*, già BWV 160, attribuita a **Telemann**, con concordanza TWV 1:877 nelle fonti consultate; controllare in seguito le varianti catalografiche.
- Riga **2839**: *Gesegnet ist die Zuversicht* è il caso metodologicamente più delicato. La cantata BWV Anh.1 attribuita in passato a Bach è perduta; il riferimento a Telemann TWV 1:617 potrebbe rappresentare una confusione storica fra opere omonime. Non trattare la coppia come identità certificata.

### Fonte, prova, stato

Il campo `source_claim_raw` non viene corretto. I riferimenti documentali esterni sono conservati separatamente in `authority_assessment`, con decisione, catalogo e cautele. **125** dichiarazioni non hanno ancora riscontro esterno individuale; tutti i **137** record hanno `production_merge_allowed=false` e `work_id=null`.

I 132 casi Vivaldi senza rubrica e le 199 cantate bachiane restano nel Lotto 26, senza trasformazioni automatiche di numeri locali in RV/BWV. I 112 casi eccezionali del Lotto 25 restano intatti.

**PROSSIMO:** estendere i confronti esterni con priorità a Wilhelm Friedemann Bach, C. P. E. Bach, Johann Christian Bach e i gruppi Telemann; verificare le concordanze Chédeville RV 54–59 e la casistica RV 813; affrontare 132 rubriche vuote e 199 cantate con controllo di incipit/catalogo, senza attribuzioni automatiche. Nessun grafo/GUI pubblico modificato.
