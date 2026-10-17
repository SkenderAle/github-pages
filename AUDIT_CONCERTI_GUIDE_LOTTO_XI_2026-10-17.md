# Musurgia Mundi — Audioteca dei concerti · Lotto XI

**Data:** 17 ottobre 2026 · **Branch:** `main` · **Base verificata:** `ff69f7d733bce89ba2b01bfd871dadf55af23454`

## Diagnosi degli 11 riquadri fuori modello

Sono **sette** le schede con un collegamento interno alla guida documentaria già presente nella pagina: Carl Stamitz (viola), Jolivet (fagotto), Glière (corno), Nino Rota (trombone), Dittersdorf (contrabbasso), Creston e Lars-Erik Larsson (sassofoni). Tutte e sette le ancore esistono una sola volta, e il codice di inizializzazione dell'audioteca associa dinamicamente la guida alla rispettiva opera. Non è necessario duplicarle: ciò genererebbe schede ridondanti.

Restavano **quattro** schede senza guida né ascolto verificato: Spohr op. 47, Bruch op. 58, Martinů H. 337 e Händel op. 4 n. 1 / HWV 289. Per queste sono state aggiunte brevi guide documentarie apribili, senza player o collegamenti che fingano ascolti gratuiti.

## Fonti discografiche collegate
1. **Spohr, Concerto n. 8 op. 47** — Hyperion CDA66840: Elizabeth Wallfisch, The Brandenburg Consort, Roy Goodman; registrato 1995. https://www.hyperion-records.co.uk/dw.asp?dc=W1531_66840
2. **Bruch, Concerto n. 3 op. 58** — Philips / Universal, <i>The Complete Violin Concertos</i>: Salvatore Accardo, Gewandhausorchester, Kurt Masur. https://www.universalmusic.it/musica-classica/album/bruch-the-complete-violin-concertos_20012648150/
3. **Martinů, Rhapsody-Concerto H. 337** — Chandos CHAN 10885: Mikhail Zemtsov, Estonian National Symphony Orchestra, Neeme Järvi; registrazione 2015. https://www.chandos.net/products/catalogue/CHAN%2010885
4. **Händel, concerto per organo HWV 289** — Decca / Universal, English Concert, Simon Preston, Trevor Pinnock. https://www.universalmusic.it/musica-classica/album/handel-complete-orchestral-recordings_30794654811/

L'attendibilità del catalogo discografico **non dimostra** accesso libero a un integrale audiovisivo. Le guide dichiarano il limite e si distinguono visivamente e funzionalmente dalle schede con player.

## Miglioramenti funzionali
- Aggiunte quattro schede `details.source-only` in stile neutro, senza classificarle come guide dotate di registrazione.
- Aggiornate quattro presentazioni brevi e i rispettivi `data-search`.
- Corretto un commento obsoleto nel codice JS: le opere senza player restano visibili nel catalogo; non sono nascoste automaticamente.
- Il contatore di risultati espone separatamente il numero di schede con fonti discografiche e senza player.
- Confermato il comportamento dinamico delle sette ancore esistenti; nessuna guida duplicata.

## Verifiche statiche
- `article.work`: **225**, invariati.
- ID HTML: **428**, nell'identico ordine.
- `data-video`: **243**, invariati; nessun ascolto inserito o rimosso.
- `details`: **216 → 220**, quattro nuove schede di sole fonti; `details.source-only`: **4**.
- Link esistenti conservati; nessuna ancora interna mancante.
- Occorrenze di autoplay invariate. Nessuna modifica a `romanticismo/`, `dalla-sinfonia-alla-rapsodia/` o pagine del Novecento.

## Restano aperti
- Verifica reale di riproducibilità, diritti di incorporamento e disponibilità territoriale delle registrazioni.
- Test mobile/desktop dei filtri, dell'atterraggio con apertura della guida e della visibilità delle schede senza player.
- Ulteriori controlli delle cadenze, dell'edizione orchestrale e dei capitoli per registrazioni specifiche.
