# Musurgia Atlantis — Fase 2M, Lotto 10

**9 novembre 2026 · Audit storico-semantico non esecutivo · branch `main`**

## Perimetro verificato

Sono state riesaminate **53 coppie sorgente–target**, relative a **50 concetti legacy distinti**, tutte presenti nel crosswalk reale del Lotto 08 e **non già riesaminate nel Lotto 09**. Il precedente Lotto 09 contava 27 coppie. Queste revisioni non costituiscono validazione di tutti i 344 concetti, né certificazione degli archi, né autorizzano merge.

## Distinzioni filologiche e semantiche

1. **Opera vs genere/formazione:** Concerto ≠ concerto di Mendelssohn; Sinfonia ≠ Eroica; Jazz ≠ film *The Jazz Singer*; Suite ≠ suite ricavata da un balletto; *La bella pescatrice* ≠ l'intero genere opera buffa.
2. **Istituzione vs scuola/pratica/epoca:** la Scuola di Notre-Dame non è riducibile alla sola istituzione-cattedrale; la Sing-Akademie non coincide con ogni pratica della sua tradizione corale; la Cappella pontificia nel Cinquecento è una fase storica.
3. **Ambito vs sottotipo:** musica elettroacustica vs musica concreta; teatro musicale novecentesco vs teatro afroamericano; concerto in generale vs concerto grosso; operetta in generale vs una sua tradizione nazionale.
4. **Entità singola vs scheda contestuale:** *Gesang der Jünglinge*, *Officium Defunctorum* 1605 e *Má vlast* hanno un'identità catalografica specifica; le schede legacy contengono anche interpretazioni, ruolo, contesto o rapporto con generi e fonti e perciò non vanno sostituite automaticamente con il solo nodo-opera.
5. **Falsi positivi lessicali:** epico brechtiano ≠ teatro afroamericano; la Sinfonia di Berio ≠ Terza di Górecki o Settima di Šostakovič; la famiglia delle forme non è la singola opera Webern op. 1.

## Riscontri indipendenti di questo lotto

- Notre-Dame: Mary E. Wolinski, *Oxford Bibliographies in Medieval Studies*, 23 maggio 2024: https://academic.oup.com/reference/62384/reference-article-abstract/555063369
- Kronos Quartet: documentazione ufficiale su formazione, collaborazioni e commissioni: https://kronosquartet.org/kronosquartet/
- Stockhausen, *Gesang der Jünglinge*, 1955–56: scheda IRCAM https://brahms.ircam.fr/en/work/gesang-der-junglinge
- Victoria, *Officium Defunctorum*, stampa del 1605: https://victoria.uma.es/ediciones_antiguas.html
- Smetana, *Má vlast*, ciclo in sei parti, catalogo museale: https://bedrichsmetana.nm.cz/en/work/detail/my-country/133
Le restanti decisioni sono **triage semantici delle etichette e delle categorie**, non verifiche complete di metadata storici, cronologie o archi.

## Prototipo reversibile delle relazioni

Nel medesimo JSON sono preservati **20 record campione**: 12 specialistici, 4 base e 4 estensione, con ID sorgente/target, payload integrale originale, testo bidirezionale ove presente, note e fonti. Sono stati eseguiti controlli locali di roundtrip del payload, senza perdita. Gli archi base continuano a richiedere il porting **letterale** del renderer JS originario con le tre ridefinizioni; il campione NON pretende di avere già riprodotto le frasi finali. Nessuna relazione pubblicata.

## Controlli eseguiti

- PASS — `source_target_all_present_in_lotto08`
- PASS — `unique_review_pairs`
- PASS — `no_repeat_lotto09`
- PASS — `all_original_payloads_roundtrip`
- PASS — `all_public_merges_blocked`
- PASS — `all_sample_ui_publication_blocked`
- PASS — `sample_has_all_3_layers`
- PASS — `staging_samples_count_20`

## Stato e prossima ripresa

**Produzione invariata.** Nessun intervento su `musurgia-atlantis/grafo.json`, `index.html`, `atlante3d/database/*`, renderer o pagine pubbliche. Nessun arco storico è certificato, nessuna identità è fusa, nessuna prova WebGL o Android è stata eseguita.

Proseguire il crosswalk ancora non riesaminato, verificare catalograficamente le proposte di identità di opere e sottotipi, portare la resa completa `relationSentence` con tutti gli override, valutare il filtro di pertinenza radicata nel prototipo con profondità per tipo e pivot individuale, e poi eseguire test Node `--live`, browser e Android. Tutelare integralmente 210 lotti filologici, 3.856 archi legacy, 1.718 archi Atlantis, 115 media/207 associazioni e 537 ancore senza deduplicazione cieca.
