# Audit classificatorio delle 133 relazioni persona e 4 rimandi opera — 24 novembre 2026

**Ambito:** SkenderAle/github-pages `main`, esclusivamente staging `musurgia-atlantis/audit-integrazione/`.
**Stato:** inventario e proposta di trattamento, NON promozione automatica e NON collaudo del frontend. Lotto 2 Flaminio BLOCKED; grafi pubblici invariati.

## Provenienza e metodo

- Registro storico: `REGRESSIONE_RICONCILIAZIONE_531_PERSONE_2026-11-21.json`, blob `1c59051f0097e50c2eb670d8d39d39fae7eb5be2` (704 occorrenze).
- Recuperi già convalidati in vista: `REGRESSIONE_AUTORI_OPERE_RADICATI_2026-11-23.json`, blob `5bd9af601507577077e9837148701a729d5e11b0` (16 ID di archi).
- Selezione riproducibile: record con `other_category=persone`, `in_mundi_382=false`, esclusi i 16 `unified_edge_id` già recuperati; restano **133**. Gli archi verso opere (`other_category=opere`) sono **4**.
- La presente classificazione eredita la preclassificazione del registro, non è una nuova verifica filologica delle fonti esterne. Le relazioni non sono state modificate.

## Esito per classe

| Classe | Occorrenze | Regola di trattamento |
|---|---:|---|
| Ruoli testuali / libretti | 8 | Conservare il predicato; candidata vista contestuale dalla singola opera, senza attribuzione della musica |
| Ruoli scenici e storici | 15 | Conservare il predicato; candidata vista contestuale solo dalla specifica opera/produzione, senza fusione composizione/allestimento |
| Relazioni storiche specifiche | 13 | Valutare come contesto storico esplicito, senza creare opere né inferire repertori |
| Pratiche e repertori di genere | 89 | Verificare provenienza e possibile duplicazione canonica; eventuale navigazione autore–genere, mai attribuzione di una singola opera |
| Navigazione derivata | 8 | Mantenere come accesso editoriale separato dalla fonte storica; non promuovere ad arco musicologico attestato |

## Quattro rimandi verso opere

| Radice | Opera | ID arco | Predicato e qualità | Decisione preliminare |
|---|---|---|---|---|
| Il Canto degli Italiani | Inno popolare «Suona la tromba» (1848) | `atlantis::grafo::L04-A05` | `sviluppa_o_illumina`, `confronto_non_causale` | ARCHIVIO contestuale: confronto non causale, non trasformare in relazione di appartenenza o attribuzione |
| Ballet d'action e pantomima | Les Petits Riens (1778) | `atlantis::grafo::L02-A25` | `sviluppa_o_illumina`, `confronto_non_causale` | ARCHIVIO contestuale: confronto non causale, non trasformare in relazione di appartenenza o attribuzione |
| Riuso di una partitura da concerto nella danza | Prélude à l’après-midi d’un faune (1894) | `atlantis::grafo::L05-A018` | `sviluppa_o_illumina`, `confronto_non_causale` | ARCHIVIO contestuale: confronto non causale, non trasformare in relazione di appartenenza o attribuzione |
| Sonata strumentale tardocinquecentesca | Giovanni Gabrieli, Sonata pian e forte (1597) | `atlantis::grafo::L07-A050` | `esemplifica_sonata_strumentale_tardocinquecentesca`, `riscontro_storico_indipendente` | CANDIDATO a navigazione mirata come esempio storico, subordinato a test di direzione, focus e filtri |

## Registro completo delle 133 relazioni persona

La colonna «Trattamento» è una proposta per il prossimo gate UI, non un esito PASS. I predicati originali sono mantenuti letteralmente.

| # | Radice | Persona | ID arco | Predicato | Qualità | Classe / trattamento |
|---:|---|---|---|---|---|---|
| 1 | An die ferne Geliebte, op. 98 | Alois Jeitteles | `atlantis::grafo::L03-A41` | `scrive_testi_poetici` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 2 | Boléro (Ravel, 1928) | Ida Rubinstein | `atlantis::grafo::L05-A049` | `commissiona` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 3 | Don Juan ou Le Festin de pierre (1761) | Gasparo Angiolini | `atlantis::grafo::L02-A02` | `crea_coreografia_di` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 4 | Il Canto degli Italiani | Goffredo Mameli | `atlantis::grafo::E0872` | `scrive_il_testo_di` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 5 | La Valse (Ravel, 1920) | Sergej Diaghilev | `atlantis::grafo::L05-A052` | `commissiona_ma_non_mette_in_scena` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 6 | Johann Sebastian Bach | Georg Philipp Telemann | `mundi::relazioni-specialistiche::lotto02-infl-telemann-bach-concerto` | `ricezione-composizione-copiata` | `documentato` | Relazioni storiche specifiche |
| 7 | Johann Sebastian Bach | Johann Kuhnau | `mundi::relazioni-specialistiche::audit26-kuhnau-bach-precedente-lipsia` | `precedente-thomaskantorat-e-cantata-lipsia` | `documentato` | Relazioni storiche specifiche |
| 8 | La Valse · allestimento Rubinstein/Nižinskaja (1929) | Bronislava Nižinskaja | `atlantis::grafo::L05-A055` | `firma_coreografia` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 9 | La Valse · allestimento Rubinstein/Nižinskaja (1929) | Ida Rubinstein | `atlantis::grafo::L05-A054` | `produce` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 10 | La sagra della primavera · Pina Bausch (1975) | Pina Bausch | `atlantis::grafo::L05-A037` | `firma_coreografia` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 11 | La sagra della primavera · prima coreografia (1913) | Marie Rambert | `atlantis::grafo::L05-A033` | `assiste_documenta_coreografia` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 12 | La sagra della primavera · prima coreografia (1913) | Nikolaj Roerich | `atlantis::grafo::L05-A032` | `cura_scene_e_costumi` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 13 | La sagra della primavera · prima coreografia (1913) | Pierre Monteux | `atlantis::grafo::L05-A035` | `dirige_prima` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 14 | La sagra della primavera · prima coreografia (1913) | Sergej Diaghilev | `atlantis::grafo::L05-A034` | `produce` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 15 | La sagra della primavera · prima coreografia (1913) | Vaclav Nižinskij | `atlantis::grafo::L05-A031` | `firma_coreografia` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 16 | Ballet d'action e pantomima | Franz Anton Hilverding | `atlantis::grafo::L02-A20` | `contribuisce_alle_prime_riforme_del_balletto_pantomimico` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 17 | Comédie-ballet | Jean-Baptiste Lully | `atlantis::grafo::L02-A30` | `compone_musiche_per_la_comedie_ballet` | `riscontro_storico_indipendente` | Pratiche e repertori di genere |
| 18 | Comédie-ballet | Molière (Jean-Baptiste Poquelin) | `atlantis::grafo::L02-A31` | `scrive_testi_per_la_comedie_ballet` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 19 | Madrigale | Adriano Willaert | `mundi::relazioni-specialistiche::audit8f-madrigale-willaert` | `musica-nova-e-madrigale-colto` | `documentato` | Relazioni storiche specifiche |
| 20 | Madrigale | Barbara Strozzi | `mundi::relazioni-specialistiche::audit8f-madrigale-barbara-strozzi` | `primo-libro-di-madrigali-1644` | `documentato` | Relazioni storiche specifiche |
| 21 | Madrigale | Carlo Gesualdo | `mundi::relazioni-specialistiche::audit8f-madrigale-gesualdo` | `cromatismo-madrigalistico-tardo-cinquecento` | `documentato` | Relazioni storiche specifiche |
| 22 | Madrigale | Cipriano de Rore | `mundi::relazioni-specialistiche::audit8f-madrigale-rore` | `madrigale-cromatico-cinquecentesco` | `documentato` | Relazioni storiche specifiche |
| 23 | Madrigale | Claudio Monteverdi | `mundi::relazioni-specialistiche::audit8f-madrigale-monteverdi` | `trasformazione-madrigale-tra-cinque-e-seicento` | `documentato` | Relazioni storiche specifiche |
| 24 | Madrigale | Costanzo Festa | `mundi::relazioni-specialistiche::audit8g-festa-madrigale-primo-cinquecento` | `madrigali-cinquecenteschi-prima-generazione` | `documentato` | Relazioni storiche specifiche |
| 25 | Madrigale | Giovanni da Cascia | `mundi::raccordo-tassonomico::13` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 26 | Madrigale | Luca Marenzio | `mundi::relazioni-specialistiche::audit8f-madrigale-marenzio` | `perfezionamento-madrigale-polifonico` | `documentato` | Relazioni storiche specifiche |
| 27 | Madrigale | Maddalena Casulana | `mundi::relazioni-specialistiche::audit8f-madrigale-casulana` | `primo-libro-madrigali-femminili-1568` | `documentato` | Relazioni storiche specifiche |
| 28 | Madrigale | Orlando di Lasso | `mundi::relazioni-specialistiche::audit8f-madrigale-lasso` | `madrigale-europeo-del-cinquecento` | `documentato` | Relazioni storiche specifiche |
| 29 | Madrigale | Vittoria Aleotti | `mundi::relazioni-specialistiche::audit8f-madrigale-vittoria-aleotti` | `madrigali-pubblicati-1593` | `documentato` | Relazioni storiche specifiche |
| 30 | Musical | George Gershwin | `mundi::grafo::2061` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 31 | Musical | George Gershwin | `mundi_extension::relazioni::10` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 32 | Musical | Jeanine Tesori | `mundi::raccordo-tassonomico::15` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 33 | Musical | Jerome Kern | `mundi_extension::relazioni::6` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 34 | Musical | Kurt Weill | `mundi::grafo::2060` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 35 | Musical | Leonard Bernstein | `mundi::grafo::2062` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 36 | Musical | Leonard Bernstein | `mundi_extension::relazioni::8` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 37 | Musical | Richard Rodgers | `mundi::grafo::2059` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 38 | Musical | Richard Rodgers | `mundi_extension::relazioni::7` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 39 | Musical | Stephen Sondheim | `mundi::grafo::2058` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 40 | Musical | Stephen Sondheim | `mundi_extension::relazioni::9` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 41 | Opéra-ballet | Jean-Philippe Rameau | `atlantis::grafo::L02-A34` | `compone_nel_genere_opera_ballet` | `riscontro_storico_indipendente` | Pratiche e repertori di genere |
| 42 | Operetta | Arthur Sullivan | `mundi_extension::relazioni::3` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 43 | Operetta | Emmerich Kálmán | `mundi_extension::relazioni::13` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 44 | Operetta | Franz Lehár | `mundi_extension::relazioni::4` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 45 | Operetta | Franz von Suppé | `mundi_extension::relazioni::12` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 46 | Operetta | Hervé (Florimond Ronger) | `mundi_extension::relazioni::11` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 47 | Operetta | Jacques Offenbach | `mundi_extension::relazioni::1` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 48 | Operetta | Johann Strauss figlio | `mundi_extension::relazioni::2` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 49 | Operetta | Rudolf Friml | `mundi_extension::relazioni::14` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 50 | Operetta | Sigmund Romberg | `mundi_extension::relazioni::15` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 51 | Operetta | Victor Herbert | `mundi_extension::relazioni::5` | `pratica-di-genere` | `fonte_originale_non_ricertificata` | Pratiche e repertori di genere |
| 52 | Ricercare | Girolamo Frescobaldi | `atlantis::grafo::L07-A071` | `compone_e_pubblica_ricercari` | `riscontro_storico_indipendente` | Pratiche e repertori di genere |
| 53 | Ricercare | Johann Sebastian Bach | `atlantis::grafo::L07-A072` | `compone_ricercari_nell_offerta_musicale` | `riscontro_storico_indipendente` | Pratiche e repertori di genere |
| 54 | Ricercare | Andrea Gabrieli | `mundi::grafo::1874` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 55 | Ricercare | Claudio Merulo | `mundi::grafo::1876` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 56 | Ricercare | Giovanni Gabrieli | `mundi::grafo::1875` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 57 | Ricercare | Girolamo Frescobaldi | `mundi::grafo::1878` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 58 | Ricercare | Johann Jakob Froberger | `mundi::grafo::1879` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 59 | Ricercare | Johann Sebastian Bach | `mundi::grafo::1880` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 60 | Ricercare | Luzzasco Luzzaschi | `mundi::grafo::1877` | `forma-o-pratica-documentata` | `opera-verificata-in-catalogo` | Pratiche e repertori di genere |
| 61 | Sinfonia | Alexander Glazunov | `mundi::raccordo-tassonomico::5` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 62 | Sinfonia | Reinhold Glière | `mundi::raccordo-tassonomico::10` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 63 | Quis dabit capiti meo aquam? (Isaac, 1492) | Angelo Poliziano | `atlantis::grafo::L165-A02` | `scrive_testo_poetico_per` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 64 | Quis dabit capiti meo aquam? (Isaac, 1492) | Lorenzo de’ Medici | `atlantis::grafo::L165-A03` | `commemora_morte_del_1492` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 65 | Messiah, HWV 56 (Händel, 1741; prima 1742) | Charles Jennens | `atlantis::grafo::L169-A02` | `compila_libretto_biblico` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 66 | Officium defunctorum (Victoria, ed. 1605) | Maria d’Austria (imperatrice, 1528–1603) | `atlantis::grafo::L174-A02` | `composto_per_esequie_imperatrice_1603` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 67 | Die Schöpfung / La Creazione (Haydn, 1798) | Gottfried van Swieten | `atlantis::grafo::L181-A02` | `cura_libretto_bilingue_e_sua_revisione` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 68 | Missa solemnis in re maggiore, op. 123 (Beethoven, 1819–1823) | Rodolfo d'Asburgo-Lorena, arciduca d'Austria (1788–1831) | `atlantis::grafo::L182-A02` | `destinata_inizialmente_a_insediamento_1820` | `riscontro_storico_indipendente` | Ruoli scenici e storici |
| 69 | Erlkönig, D 328, op. 1 (Schubert, 1815; stampa 1821) | Johann Wolfgang von Goethe | `atlantis::grafo::L183-A02` | `autore_della_ballata_poetica_messa_in_musica` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 70 | War Requiem, op. 66 (Britten, prima 1962) | Wilfred Owen | `atlantis::grafo::L205-A02` | `autore_poesie_inserite_accanto_testo_liturgico` | `riscontro_storico_indipendente` | Ruoli testuali / libretti |
| 71 | Toccata organistica del secondo Cinquecento | Claudio Merulo | `mundi::grafo::1980` | `forma-o-pratica-documentata` | `fonte-segnalata-nella-voce` | Pratiche e repertori di genere |
| 72 | Toccata organistica del secondo Cinquecento | Claudio Merulo | `mundi::relazioni-specialistiche::audit8g-merulo-toccata-organo` | `toccate-organistiche-stampate` | `documentato` | Relazioni storiche specifiche |
| 73 | Suite orchestrale novecentesca | Gustav Holst | `mundi::grafo::1120` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 74 | Fuga | César Franck | `mundi::grafo::1833` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 75 | Fuga | Dietrich Buxtehude | `mundi::grafo::1838` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 76 | Fuga | Dmitrij Šostakovič | `mundi::grafo::1835` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 77 | Fuga | Felix Mendelssohn | `mundi::grafo::1831` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 78 | Fuga | Ferruccio Busoni | `mundi::grafo::1837` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 79 | Fuga | Friedrich Wilhelm Zachow | `mundi::grafo::2200` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 80 | Fuga | Georg Friedrich Händel | `mundi::grafo::1827` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 81 | Fuga | Johann Georg Albrechtsberger | `mundi::grafo::1359` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 82 | Fuga | Johann Pachelbel | `mundi::grafo::1326` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 83 | Fuga | Johann Sebastian Bach | `mundi::grafo::1316` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 84 | Fuga | Johannes Brahms | `mundi::grafo::1830` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 85 | Fuga | Ludwig van Beethoven | `mundi::grafo::1829` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 86 | Fuga | Max Reger | `mundi::grafo::1834` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 87 | Fuga | Paul Hindemith | `mundi::grafo::1836` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 88 | Fuga | Robert Schumann | `mundi::grafo::1832` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 89 | Fuga | Simon Sechter | `mundi::grafo::2178` | `repertorio-formale-documentato` | `riferimento-biografico-o-istituzionale-specifico` | Pratiche e repertori di genere |
| 90 | Fuga | Wolfgang Amadeus Mozart | `mundi::grafo::1828` | `forma-o-pratica-documentata` | `non_certificato` | Pratiche e repertori di genere |
| 91 | Variazioni | Dietrich Buxtehude | `mundi::raccordo-tassonomico::22` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 92 | Variazioni | Girolamo Frescobaldi | `mundi::raccordo-tassonomico::21` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 93 | Variazioni | Jean-Baptiste Lully | `mundi::raccordo-tassonomico::23` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 94 | Toccata | Claudio Merulo | `mundi::grafo::2008` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 95 | Toccata | Francesco Durante | `mundi::grafo::2320` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 96 | Toccata | Girolamo Frescobaldi | `mundi::grafo::2009` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 97 | Toccata | Jan Pieterszoon Sweelinck | `mundi::grafo::2098` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 98 | Toccata | Johann Sebastian Bach | `mundi::grafo::2010` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 99 | Toccata | Maurice Ravel | `mundi::grafo::2011` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 100 | Toccata | René Leibowitz | `mundi::grafo::2330` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 101 | Toccata | Samuel Scheidt | `mundi::grafo::2300` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 102 | Preludio | Claude Debussy | `mundi::grafo::2014` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 103 | Preludio | Fryderyk Chopin | `mundi::grafo::2013` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 104 | Preludio | Giacinto Scelsi | `mundi::grafo::2274` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 105 | Preludio | Giuseppe Verdi | `mundi::grafo::2015` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 106 | Preludio | Johann Sebastian Bach | `mundi::grafo::2012` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 107 | Preludio | Richard Wagner | `mundi::grafo::2016` | `forma-o-pratica-documentata` | `fonte-lessicografica-e-repertoriale` | Pratiche e repertori di genere |
| 108 | Preludio | Rosario Scalero | `mundi::grafo::2218` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 109 | Rapsodia | Antonín Dvořák | `mundi::grafo::2032` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 110 | Rapsodia | Emmanuel Chabrier | `mundi::grafo::2035` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 111 | Rapsodia | Franz Liszt | `mundi::grafo::2030` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 112 | Rapsodia | George Gershwin | `mundi::grafo::2034` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 113 | Rapsodia | Johannes Brahms | `mundi::grafo::2031` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 114 | Rapsodia | Maurice Ravel | `mundi::grafo::2033` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 115 | Rapsodia | René Leibowitz | `mundi::grafo::2332` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 116 | Rapsodia | Rubin Goldmark | `mundi::grafo::2232` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 117 | Chanson | Claudin de Sermisy | `mundi::grafo::2039` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 118 | Chanson | Gilles Binchois | `mundi::grafo::2037` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 119 | Chanson | Guillaume de Machaut | `mundi::raccordo-tassonomico::19` | `accesso_indiretto_alla_famiglia` | `DERIVED_NAVIGATION_NOT_DIRECT` | Navigazione derivata |
| 120 | Chanson | Guillaume Du Fay | `mundi::grafo::2036` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 121 | Chanson | Josquin des Prez | `mundi::grafo::2038` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 122 | Ciaccona e passacaglia | Dietrich Buxtehude | `mundi::grafo::2046` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 123 | Ciaccona e passacaglia | Girolamo Frescobaldi | `mundi::grafo::2045` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 124 | Ciaccona e passacaglia | Jean-Baptiste Lully | `mundi::grafo::2048` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 125 | Ciaccona e passacaglia | Johann Sebastian Bach | `mundi::grafo::2047` | `repertorio-formale-documentato` | `fonti-indicate` | Pratiche e repertori di genere |
| 126 | Notturno | Claude Debussy | `mundi::grafo::2070` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 127 | Notturno | Felix Mendelssohn | `mundi::grafo::2069` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 128 | Notturno | Fryderyk Chopin | `mundi::grafo::2067` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 129 | Notturno | Gabriel Fauré | `mundi::grafo::2068` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 130 | Notturno | Giuseppe Verdi | `mundi::grafo::2072` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 131 | Notturno | John Field | `mundi::grafo::2066` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |
| 132 | Notturno | Lili Boulanger | `mundi::grafo::2338` | `repertorio-formale-documentato` | `fonte-biografica-catalografica-specifica` | Pratiche e repertori di genere |
| 133 | Notturno | Robert Schumann | `mundi::grafo::2071` | `repertorio-formale-documentato` | `non_certificato` | Pratiche e repertori di genere |

## Gate prima di chiudere Lotto 1

1. Per `L07-A050`, verificare direttamente nell'HTML la proiezione Sonata e la visibilità con radice, profondità, filtro Opere e focus; non trattare il presente inventario come test superato.
2. Per i 23 ruoli letterari/scenici, consentire eventualmente visibilità contestuale dalla specifica opera/produzione senza trasformare poeta, coreografo, committente o direttore in compositore.
3. Per le 89 pratiche/repertori e 13 relazioni storiche, controllare i predicati e i duplicati canonici prima di eventuali nuovi percorsi.
4. Per gli 8 accessi derivati, mantenere separata la navigazione editoriale dalle relazioni musicologiche.
5. Eseguire Node CLI e browser/WebGL/Canvas/Android, confermare integrità 17 sorgenti/500 schede e blocco del Lotto 2.

**Nessun nuovo nodo, arco, redirect o cambio di visibilità in questo gate documentario.**
