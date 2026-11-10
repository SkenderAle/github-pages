# Musurgia Atlantis — Lotto 28 | 50 attribuzioni Bach e Telemann

**Data:** 10 novembre 2026 · **Ambito:** esclusivamente staging filologico, nessuna modifica al grafo di produzione.

## Copertura reale

Analizzate tutte le **50** asserzioni del Lotto27 ancora aperte che contengono «Bach» o «Telemann», senza campionamento. Su di esse **45** hanno ricevuto un confronto con cataloghi/fonti esterne mirati (con gradi di evidenza eterogenei, alcuni soltanto a livello di raccolta o di catalogo terziario), **5** non hanno una concordanza esterna specifica sufficiente. **75** delle 125 asserzioni residue del Lotto27 non fanno parte di questo lotto; non dichiararle verificate. Per ogni riga il JSON riporta ID, asserzione legacy, catalogo consultato, tipo di unità, divergenze, fonti e stato. **Zero merge autorizzati**.

## Correzioni storiche e di catalogo

**1. Anna Magdalena (BWV Anh.122–125, quattro schede)** — Le quattro miniature sono di **Carl Philipp Emanuel Bach**, H.1/1–4, NON di Johann Christian per le tre righe 3706/3690/3707. BWV Anh.129 (`Solo per il cembalo`) è pure di C.P.E., concordanza Wq 65/7–H.16. BWV Anh.131 è attribuito a Johann Christian (W.A22), ma la tradizione della paternità non è priva di riserve.

**2. Musica per orologio (18 schede)** — BWV Anh.133–150 appartengono alla raccolta di 18 brani per orologio musicale associata a **Wilhelm Friedemann Bach**, F.207 / BR-WFB A63–80. Sono 18 pezzi della stessa raccolta: non creare automaticamente 18 composizioni indipendenti e 18 rapporti con il padre. Le denominazioni `Il fine della Caccia` ecc. sono parti del ciclo.

**3. Il mottetto BWV Anh.159** — `Ich lasse dich nicht, du segnest mich denn` non va trasferito come opera di Johann Christoph Bach: Carus documenta la rivalutazione come **Johann Sebastian Bach**, nuova sigla **BWV 1165**. Conservare la precedente storia attributiva e il grado di certezza delle fonti.

**4. Il mottetto BWV Anh.160** — `Jauchzet dem Herrn, alle Welt` è un complesso di materiali/rielaborazioni di **Telemann e Bach**, con una parte aggiunta più tardi. La scheda non ammette un unico arco semplice `Telemann compone tutto`: distinguere l'opera assemblata, il modello di Telemann TWV 8:10, l'elaborazione bachiana e il materiale da BWV 28.

**5. BWV Anh.21, Kleines Magnificat** — Rettifica importante rispetto a Flaminio (Telemann): secondo Andreas Glöckner, *Bach-Jahrbuch* 68 (1982), pubblicazione online 2018, l'autore è **Melchior Hoffmann**. Fonte scientifica: https://bjb.publia.org/bjb/article/view/1734 .

**6. Messe dubbie** — BWV Anh.166 (mi minore): Johann Ludwig Bach, JLB 38, rispetto alla precedente indicazione Johann Nicolaus. BWV Anh.167 (sol maggiore): fonte legacy «Johann Ludwig o Lotti» insufficiente a chiudere l'attribuzione; letteratura discute anche Bernhard/Krieger/Pohle. Restare HOLD.

**7. Altri gruppi** — Chaconne BWV Anh.82–84 a Johann Bernhard Bach (tre opere distinte); Kyrie BWV Anh.168 di W.F. Bach F.100; BWV Anh.188, F.10 di W.F. Bach, da non trattare a priori come concerto orchestrale; BWV Anh.189 concerto per clavicembalo di C.P.E. Bach Wq1/H403; BWV Anh.185–186 di C.P.E. Bach; `Unser Wandel ist im Himmel`, BWV Anh.165, è legato a BWV 222 di Johann Ernst, non un nuovo brano totalmente indipendente; `Merk auf, mein Herz` BWV Anh.163 ha candidature attributive non uniformi e resta dubbio.

**8. Due cantate** — BWV Anh.156 = Telemann TWV 1:732. BWV Anh.157 attribuito a Telemann, ma segnalati indici TWV 1:835 e 1:836 discordanti: identificazione di catalogo ancora sospesa. `Herr Jesu Christ, dich zu uns wend` BWV Anh.56 è un brano organistico di Telemann TWV 31:8, **non** la cantata TWV 1:755 con identico incipit.

**9. BWV Anh.187** — La scheda Flaminio parla di re minore e organico flauto/fagotto/viola, mentre il catalogo secondario confrontato riporta fa maggiore e strumenti non coincidenti. **Non fondere** solo perché è associato al nome di C.P.E. Bach.

## Regole e prossima ripresa

Il suffisso `Anh.` **non** viene derivato meccanicamente da qualsiasi numero Flaminio senza concordanza di titolo/contesto; nei gruppi sopra è stato confrontato con cataloghi esterni. I dettagli grezzi non sono sovrascritti; gli stati `catalogue_attribution_supported` e `scholarly_revised_attribution` rappresentano evidenza esterna, **non certificazione d'identità dei nodi Atlantis**, e rimangono `production_merge_allowed=false`.

**Lotto29:** affrontare le ulteriori **75** asserzioni fuori dall'attuale blocco, inclusi autori non Bach/Telemann, poi riprendere 132 rubriche Vivaldi e 199 cantate Bach. Conservare l'eccezione dei 112 record multi-riga del Lotto25 e verificare i conflitti caso per caso prima del rilascio.
