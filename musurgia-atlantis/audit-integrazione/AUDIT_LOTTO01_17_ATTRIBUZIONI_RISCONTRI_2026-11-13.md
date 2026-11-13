# Musurgia Atlantis — Lotto Flaminio 01 · revisione delle 17 attribuzioni aperte

**13 novembre 2026** · `SkenderAle/github-pages`, branch `main`. **Solo staging `musurgia-atlantis/audit-integrazione/`; Lotto01 OPEN, 0/15 chiusi.**

## Perimetro

Riprese **17/17 schede** precedentemente segnalate come `SOURCE_TEXT_ALERT_INDEPENDENT_VERIFICATION_REQUIRED` nell'audit delle 28 attribuzioni musicali del Lotto01 (500 schede estratte dalle 7.412 con guida). Le restanti 11 delle 28 erano già riscontrate o sospese motivatamente e non vengono rifatte. I **17 casi ora hanno ciascuno fonti esterne e gate specifici**; questo non significa 17 composizioni verificate né 17 attribuzioni definitivamente chiuse. Nello staging preservate le denominazioni originali e gli URL di Flaminio, con conclusioni separate da ciò che la fonte storica afferma.

| Riga Excel | Sigla | Esito conservativo | Anomalia della pagina sorgente |
|---:|---|---|---|
| 1152 | 484.1 | CPE_FLUTE_VERSION_SUPPORTED_CRITICAL_EDITION | — |
| 2660 | 209 | JSB_AUTHORSHIP_DEBATED | — |
| 2854 | 587 | COUPERIN_SOURCE_COMPOSITION_CONFIRMED_ARRANGER_UNCERTAIN | — |
| 3097 | 597 | ORGAN_ARRANGEMENT_OF_UNKNOWN_CONCERTO | — |
| 3384 | 713a | BWV713A_DISTINCT_VARIANT_WITH_UNCERTAIN_AUTHENTICITY | — |
| 3450 | 763 | BWV763_ORGAN_CHORALE_AUTHORSHIP_UNCERTAIN | — |
| 3593 | 230 | BWV230_JSB_ATTRIBUTION_DISFAVORED_NOT_OTHER_COMPOSER_CERTIFIED | — |
| 3667 | 1027a | BWV1027A_IS_ARRANGEMENT_OF_BWV1027_MOVEMENT_IV | ⚠ FLAMINIO_MOVEMENT_NAME_AND_POSITION_INCONSISTENT |
| 3712 | 921 | BWV921_SOURCE_AUTHENTICITY_DOUBTED | — |
| 3713 | 922 | BWV922_CONFLICTING_SOURCE_ASSESSMENTS | — |
| 3778 | 561 | BWV561_JSB_AUTHORSHIP_DOUBTED_COMPOSER_UNKNOWN | ⚠ FLAMINIO_HTML_TITLE_SAYS_BWV583_BUT_H1_BWV561 |
| 3783 | 571 | BWV571_ATTRIBUTION_UNRESOLVED | — |
| 3791 | 576 | BWV576_JSB_ATTRIBUTION_SPURIOUS_COMPOSER_UNKNOWN | — |
| 3798 | 553 | BWV553_MEMBER_EIGHT_SHORT_PRELUDES_NON_JSB_PROBABLE | — |
| 3799 | 556 | BWV556_MEMBER_EIGHT_SHORT_PRELUDES_WRONG_GUIDE_BODY | ⚠ FLAMINIO_GUIDE_BWV556_BODY_AND_HTML_TITLE_ARE_BWV540_NOT_BWV556 |
| 3801 | 555 | BWV555_MEMBER_EIGHT_SHORT_PRELUDES_NON_JSB_PROBABLE | — |
| 3802 | 554 | BWV554_MEMBER_EIGHT_SHORT_PRELUDES_NON_JSB_PROBABLE | — |

## Riscontri critici

1. **Carl Philipp Emanuel Bach H. 484.1 / Wq 22, riga 1152:** l'edizione critica CPEB:CW distingue **versione per flauto (H 484.1)** e **versione per tastiera (H 425)**; sulla base di nuove fonti e degli estratti dei *Solfeggi* di Quantz, reputa probabile che il concerto per flauto sia la versione **antecedente**, non un arrangiamento posteriore per flauto come riportava Flaminio. L'attribuzione a C. P. E. Bach ha riscontro critico elevato, ma la cronologia è probabile, non certa. Fonti: https://cpebach.org/toc/III-4-1 e https://cpebach.org/pdfs/introductions/III-9-7-Intro.pdf .
2. **BWV 209, riga 2660:** dibattito autentico: la guida Flaminio e Bachipedia ricordano i dubbi sull'autenticità; Klaus Hofmann in *Bach-Jahrbuch* sostiene la paternità di J. S. Bach. Non imporre Hasse né Wilhelm Friedemann come autore alternativo. Fonte: https://bjb.publia.org/bjb/article/view/1871 . **HOLD**.
3. **BWV 587, riga 2854:** sorgente musicale **François Couperin, `Les Nations`, `L'Impériale`** (movimento), trascrizione per organo; dubbia l'identità del **trascrittore**, non il compositore della fonte musicale. Kerstin Delang, *Bach-Jahrbuch*: https://bjb.publia.org/bjb/article/view/2212 . Vietato `J. S. Bach compone L'Impériale`; relazione derivativa candidata da validare.
4. **BWV 597, riga 3097:** organo da concerto di altro autore **ignoto**, arrangiatore non riscontrato. Distinguere identità della trascrizione dall'ipotetica fonte. https://imslp.org/wiki/Organ_Concerto_in_E-flat_major%2C_BWV_597_%28Bach%2C_Johann_Sebastian%29 .
5. **BWV 713a, riga 3384:** variante di BWV 713, ma possibile differenza di testimone/manoscritto, autenticità della variante da controllare specificamente. Nessuna fusione automatica dei due ID.
6. **BWV 763, riga 3450:** autore del corale per organo incerto; melodia tradizionalmente attribuita a **Philipp Nicolai**, ruolo diverso dall'autore dell'elaborazione organistica. https://bwv.info/en/bwv/763/ .
7. **BWV 230, riga 3593:** la Nederlandse Bachvereniging riferisce la posizione prevalente contro una paternità certa di J. S. Bach; fonte antica riferisce genericamente 'Signor Bach'. Non inventare un Bach alternativo: autore da mantenere **non identificato**. https://www.bachvereniging.nl/en/bwv/bwv-230 .
8. **BWV 1027a, riga 3667:** trascrizione per organo del **IV movimento (Allegro moderato)** della Sonata BWV 1027. Il testo Flaminio parla di 'Andante' e di 'ultimo tempo' contemporaneamente: incongruenza redazionale. L'arrangiatore potrebbe essere J. S. Bach o Johann Peter Kellner; il copista Mempel non certifica che ne fosse autore. https://imslp.org/wiki/Trio_in_G_major%2C_BWV_1027a_%28Bach%2C_Johann_Sebastian%29 .
9. **BWV 921 e 922, righe 3712 e 3713:** due casi distinti; BWV921 nelle copie *Andreas-Bach-Buch* suscita dubbi filologici. Per BWV922 Flaminio parla di opera spuria, mentre la Nederlandse Bachvereniging la propone nel repertorio bachiano: nessuna affermazione definitiva senza confronto delle fonti critiche. https://www.bachvereniging.nl/en/bwv/bwv-922 .
10. **BWV 561, riga 3778:** attribuzione controversa, nessun compositore alternativo dimostrato; inoltre il titolo HTML Flaminio reca **BWV 583** ma l'intestazione della pagina e il link Excel sono **BWV 561**. Segnalare errore d'intestazione senza trasformare il record in BWV583. https://www.cambridge.org/core/books/abs/organ-music-of-j-s-bach/miscellaneous-pieces-bwv-561591/82839036118D33033554D0E7E35413F6 .
11. **BWV 571, riga 3783:** autenticità difficilmente accertabile; anche la Nederlandse Bachvereniging spiega i dubbi, pur presentando un'esecuzione. Non trasformare l'etichetta Flaminio 'attribuzione errata' in prova di un autore specifico. https://www.bachvereniging.nl/en/bwv/bwv-571 .
12. **BWV 576, riga 3791:** il *Grove* riportato in IMSLP considera spuria la paternità di J. S. Bach, non identifica tuttavia un altro compositore; bloccare `compone` per J. S. Bach. https://imslp.org/wiki/Fugue_in_G_major%2C_BWV_576_%28Bach%2C_Johann_Sebastian%29 .
13. **BWV 553, 554, 555, 556 (righe 3798–3802):** **quattro membri distinti** degli *Otto piccoli preludi e fughe*, BWV 553–560; forte consenso critico contro paternità di J. S. Bach, attribuzioni proposte a Tobias/Ludwig Krebs e altri senza prova conclusiva. Non assegnarli tutti a Krebs. Fonti: https://www.cambridge.org/core/books/abs/organ-music-of-j-s-bach/eight-short-preludes-and-fugues-bwv-553560/21C4572BD7AF2286E7ACD3035E57BE14 e https://imslp.org/wiki/8_Kleine_Pr%C3%A4ludien_und_Fugen%2C_BWV_553-560_%28Bach%2C_Johann_Sebastian%29 .

### ANOMALIA GRAVE — Flaminio BWV 556 (riga Excel 3799)

La URL originale https://www.flaminioonline.it/Guide/Bach/Bach-Preludio556.html rende un documento con titolo HTML, intestazione e analisi della **Toccata e fuga in fa maggiore**, che è la **BWV 540**, non la BWV 556. L'analisi del canone sopra il pedale prolungato, dei soli di pedale e della fuga a due soggetti è compatibile con il BWV540; verificabile con https://www.flaminioonline.it/Guide/Bach/Bach-Toccata540.html e https://www.bachs-orgelwerke.de/index.php/werkverzeichnis/29-bwv540. La riga Excel e la sua URL originale sono **conservate**; guida etichettata `BLOCKED_WRONG_WORK_PAGE` e vietata come prova dell'opera BWV556. Non trasformare quel link in una nuova scheda BWV540 senza nuova identificazione e controllo di eventuale duplicazione.

## Materiali e collaudi effettivamente pubblicati

- `CHECKPOINT_LOTTO01_17_ATTRIBUZIONI_AUDIT_2026-11-13.json` — 17 riscontri individuali, fonti, stati e gate; 3 anomalie pagina (BWV1027a, BWV561, BWV556). Commit `ccd894bde4f7db2baa75fda0faed461b78060316`.
- `OVERLAY_AUDIT_ATTRIBUZIONI_17_LOTTO01_2026-11-13.json` — **17 nodi soltanto di audit** + **17 archi documentari record→audit**; zero nuove opere certificate, zero archi autore→opera. Commit `c9d4180f3c7444af1d807d73707822c5b8c113fe`.
- `VISTA_GRAFO_FONTE_FLAMINIO_LOTTO01_ATTRIBUZIONI_17_2026-11-13.html` — preview audit separata, integra quattro layer senza sostituire la precedente. Commit `42c691da92bfc95d3b1cae25d75a22111d050521`.
- `REGRESSIONE_LOTTO01_17_ATTRIBUZIONI_2026-11-13.json` — controllo dei file reali **500 schede / 628 nodi / 1.092 archi / zero duplicati e orfani / 17/17 link fonte corretti / JS sintatticamente valido**. Filtro `BACH, Johann Sebastian`: 16 audit; `BACH, Carl Philipp Emanuel`: 1 audit; filtro Beethoven preserva le 15 identità precedenti senza perdere autonomia. Stato `PASS_STRUCTURAL_AND_JS_SYNTAX_ONLY`. Commit `1ca80b8fcf14c123a933239b384212365c0b0967`.

**NON CERTIFICATO:** nessun test browser/Canvas/WebGL reale eseguito; nessuna promozione nel grafo storico canonico; non verificati criticamente e visualmente tutti i 500 record. Restano differenze filologiche, autori incerti e collegamenti di versioni da confrontare con tutti i manifesti. Questo checkpoint chiude il *triage documentario preliminare* delle 17 vecchie segnalazioni, **non i gate definitivi dei singoli casi**.

**Prossimo:** controllare per tutte le 500 righe la correttezza dei link e la distinzione opera/raccolta/parte/versione, eseguire crosswalk globale degli ID, quindi render browser reale e accettazione 500/500 prima di aprire Lotto02. `musurgia-atlantis/grafo.json` e `index.html` restano invariati.
