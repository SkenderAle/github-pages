# Audit tecnico dei collegamenti esterni — 4 novembre 2026

Una risposta HTTP 200 non prova che la pagina contenga davvero il documento descritto; una risposta 403, 429, 5xx o un timeout non prova un collegamento rotto.
Il lettore dei Quadri è stato collaudato dall'utente su Android. Questo audit non sostituisce la sua verifica.

Destinazioni HTTP distinte: **245**.

## Risultati HTTP

| Categoria | Occorrenze |
|---|---:|
| candidate_404 | 1 |
| connection_problem | 7 |
| covered_elsewhere | 23 |
| restricted | 31 |
| server_responds | 183 |

## 404 o 410 da verificare manualmente

| Codice | URL | Redirect / risposta |
|---:|---|---|
| 404 | https://i.ytimg.com/vi/vO6Yvi-jKgU/hqdefault.jpg | https://i.ytimg.com/vi/vO6Yvi-jKgU/hqdefault.jpg |

## Controllo dei file e ancoraggi locali

| File | Collegamento | Nota |
|---|---|---|
| - | - | Nessuna assenza rilevata |

## Riferimenti ai nodi dell'Atlante 3D

Controllo preliminare della presenza come stringa esatta nel database. L'esistenza della stringa non garantisce l'apertura corretta del nodo.

| Nodo | Presente come stringa esatta |
|---|---|
| compositore-scott-joplin | SI |
| persona-bessie-smith | SI |
| persona-ma-rainey | SI |
| compositore-louis-armstrong | SI |
| compositore-duke-ellington | SI |
| compositore-mary-lou-williams | SI |
| compositore-astor-piazzolla | SI |
| compositore-hanns-eisler | SI |
| compositore-heinrich-kaminski | SI |
| persona-gunild-keetman | SI |
| compositore-giacinto-sallustio | SI |
| persona-paul-claudel | SI |
| persona-ingeborg-bachmann | SI |
| persona-peter-sellars | SI |
| persona-mark-morris | SI |

## Risultato per ogni URL

| Esito | HTTP | Indirizzo | Destinazione o errore |
|---|---:|---|---|
| restricted | 403 | https://academic.oup.com/book/27878/chapter-abstract/203293971 | https://academic.oup.com/book/27878/chapter-abstract/203293971 |
| restricted | 403 | https://academic.oup.com/edited-volume/28297/chapter-abstract/214518438 | https://academic.oup.com/edited-volume/28297/chapter-abstract/214518438 |
| server_responds | 200 | https://archive.org/details/MussorgskyPicturesAtAnExhibitionorch.Ravel | https://archive.org/details/MussorgskyPicturesAtAnExhibitionorch.Ravel |
| server_responds | 200 | https://archiviostorico.operaroma.it/opera/il-prigioniero/ | https://archiviostorico.operaroma.it/opera/il-prigioniero/ |
| server_responds | 200 | https://archiwumcyfrowe.polmic.pl/pub/material?id=785&lang=en | https://archiwumcyfrowe.polmic.pl/pub/material?id=785&lang=en |
| server_responds | 200 | https://artsandculture.google.com/asset/bild-viii-promenade-bild-ix-kuchlein-painting-viii-promenade-tableau-ix-kuchlein-vassily-kandinsky/yQF4GRWUpwunmA | https://artsandculture.google.com/asset/bild-viii-promenade-bild-ix-kuchlein-painting-viii-promenade-tableau-ix-kuchlein-vassily-kandinsky/yQF4GRWUpwunmA |
| restricted | 429 | https://blogs.loc.gov/copyright/2023/05/1927-works-in-the-public-domain/ | https://blogs.loc.gov/copyright/2023/05/1927-works-in-the-public-domain/ |
| server_responds | 200 | https://blogs.loc.gov/loc/2024/11/scott-joplin-the-magical-maple-leaf-rag/ | https://blogs.loc.gov/loc/2024/11/scott-joplin-the-magical-maple-leaf-rag/ |
| server_responds | 200 | https://brahms.ircam.fr/en/composer/giacinto-scelsi/biography | https://brahms.ircam.fr/en/composer/giacinto-scelsi/biography |
| server_responds | 200 | https://brahms.ircam.fr/en/work/triadic-memories | https://brahms.ircam.fr/en/work/triadic-memories |
| server_responds | 200 | https://brahms.ircam.fr/en/works/work/12507 | https://brahms.ircam.fr/en/works/work/12507 |
| server_responds | 200 | https://brahms.ircam.fr/en/works/work/9439/ | https://brahms.ircam.fr/en/works/work/9439/ |
| server_responds | 200 | https://brahms4.ircam.fr/en/work/octandre-1980-01-01 | https://brahms4.ircam.fr/en/work/octandre-1980-01-01 |
| server_responds | 200 | https://catalogue.bnf.fr/ark:/12148/cb13918662g.public | https://catalogue.bnf.fr/ark:/12148/cb13918662g.public |
| server_responds | 200 | https://catalogue.bnf.fr/ark:/12148/cb397469566 | https://catalogue.bnf.fr/ark:/12148/cb397469566 |
| server_responds | 200 | https://catalogue.bnf.fr/ark:/12148/cb41337018h | https://catalogue.bnf.fr/ark:/12148/cb41337018h |
| server_responds | 200 | https://centrostudidallapiccola.it/cronologia/ | https://centrostudidallapiccola.it/cronologia/ |
| server_responds | 200 | https://collection.sciencemuseumgroup.org.uk/objects/co8188395/oramics-machine | https://collection.sciencemuseumgroup.org.uk/objects/co8188395/oramics-machine |
| connection_problem | - | https://comitehistoire.bnf.fr/node/2306 | HTTPSConnectionPool(host='comitehistoire.bnf.fr', port=443): Max retries exceeded with url: /node/2306 (Caused by ConnectTimeoutError(<HTTPS |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Charles_Ives_grad_photo.jpg | https://commons.wikimedia.org/wiki/File:Charles_Ives_grad_photo.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Daphne%20Oram's%20Oramics%20Machine.jpg | https://commons.wikimedia.org/wiki/File:Daphne_Oram%27s_Oramics_Machine.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Edgard_Var%C3%A8se_in_1915.jpg | https://commons.wikimedia.org/wiki/File:Edgard_Var%C3%A8se_in_1915.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Erick_Satie_par_Henri_Manuel.jpg | https://commons.wikimedia.org/wiki/File:Erick_Satie_par_Henri_Manuel.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:FerruccioBusoni1913.jpg | https://commons.wikimedia.org/wiki/File:FerruccioBusoni1913.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Immagine-Umberto%20boccioni%20la%20citt%C3%A0%20che%20sale.jpg | https://commons.wikimedia.org/wiki/File:Immagine-Umberto_boccioni_la_citt%C3%A0_che_sale.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Luigi%20Russolo%20and%20assistant%20Ugo%20Piatti%20in%20their%20Milan%20studio%20with%20Intonarumori%2C%20L%E2%80%99Arte%20dei%20rumori%20(The%20Art%20of%20Noises)%2C%201913.jpg | https://commons.wikimedia.org/wiki/File:Luigi_Russolo_and_assistant_Ugo_Piatti_in_their_Milan_studio_with_Intonarumori,_L%E2%80%99Arte_dei_rumori_(The_Art_of_Noises),_1913.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Meredith%20Monk.jpg | https://commons.wikimedia.org/wiki/File:Meredith_Monk.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Oramics%20-%20Two%20waveform%20slides%20painted%20by%20Daphne%20Oram%2C%201965-80.jpg | https://commons.wikimedia.org/wiki/File:Oramics_-_Two_waveform_slides_painted_by_Daphne_Oram,_1965-80.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Pauline%20Oliveros%20-SonicActs%20-SonicActs2012.jpg | https://commons.wikimedia.org/wiki/File:Pauline_Oliveros_-SonicActs_-SonicActs2012.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Persconferentie%20componist%20Morton%20Feldman%20in%20concertgebouw%20Amsterdam%20in%20verband%20m%2C%20Bestanddeelnr%20928-6143.jpg | https://commons.wikimedia.org/wiki/File:Persconferentie_componist_Morton_Feldman_in_concertgebouw_Amsterdam_in_verband_m,_Bestanddeelnr_928-6143.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Scriabin_1909_Cropped.jpg | https://commons.wikimedia.org/wiki/File:Scriabin_1909_Cropped.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Studio_di_fonologia_del_1955_della_sede_Rai_di_Milano_-_Museo_degli_strumenti_musicali_del_castello_sforzesco_-_Milano.JPG | https://commons.wikimedia.org/wiki/File:Studio_di_fonologia_del_1955_della_sede_Rai_di_Milano_-_Museo_degli_strumenti_musicali_del_castello_sforzesco_-_Milano.JPG |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:The_City_Rises_by_Umberto_Boccioni_1910.jpg | https://commons.wikimedia.org/wiki/File:The_City_Rises_by_Umberto_Boccioni_1910.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/File:Wassily%20Kandinsky%20-%20Impression%20III%20(Concert)%20-%20Google%20Art%20Project.jpg | https://commons.wikimedia.org/wiki/File:Wassily_Kandinsky_-_Impression_III_(Concert)_-_Google_Art_Project.jpg |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Charles_Ives_grad_photo.jpg?width=420 | https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Charles_Ives_grad_photo.jpg/500px-Charles_Ives_grad_photo.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_conte |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Daphne%20Oram's%20Oramics%20Machine.jpg?width=480 | https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Daphne_Oram%27s_Oramics_Machine.jpg/500px-Daphne_Oram%27s_Oramics_Machine.jpg?utm_source=commons.wikimedia.org&utm_campaign |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Edgard_Var%C3%A8se_in_1915.jpg?width=420 | https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Edgard_Var%C3%A8se_in_1915.jpg/500px-Edgard_Var%C3%A8se_in_1915.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Erick_Satie_par_Henri_Manuel.jpg?width=440 | https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Erick_Satie_par_Henri_Manuel.jpg/500px-Erick_Satie_par_Henri_Manuel.jpg?utm_source=commons.wikimedia.org&utm_campaign=index |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/FerruccioBusoni1913.jpg?width=420 | https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/FerruccioBusoni1913.jpg/500px-FerruccioBusoni1913.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumb |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Immagine-Umberto%20boccioni%20la%20citt%C3%A0%20che%20sale.jpg?width=600 | https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Immagine-Umberto_boccioni_la_citt%C3%A0_che_sale.jpg/960px-Immagine-Umberto_boccioni_la_citt%C3%A0_che_sale.jpg?utm_source= |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Luigi%20Russolo%20and%20assistant%20Ugo%20Piatti%20in%20their%20Milan%20studio%20with%20Intonarumori%2C%20L%E2%80%99Arte%20dei%20rumori%20(The%20Art%20of%20Noises)%2C%201913.jpg?width=600 | https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Luigi_Russolo_and_assistant_Ugo_Piatti_in_their_Milan_studio_with_Intonarumori%2C_L%E2%80%99Arte_dei_rumori_%28The_Art_of_N |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Meredith%20Monk.jpg?width=480 | https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Meredith_Monk.jpg/500px-Meredith_Monk.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Oramics%20-%20Two%20waveform%20slides%20painted%20by%20Daphne%20Oram%2C%201965-80.jpg?width=480 | https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Oramics_-_Two_waveform_slides_painted_by_Daphne_Oram%2C_1965-80.jpg/500px-Oramics_-_Two_waveform_slides_painted_by_Daphne_O |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Pauline%20Oliveros%20-SonicActs%20-SonicActs2012.jpg?width=480 | https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Pauline_Oliveros_-SonicActs_-SonicActs2012.jpg/500px-Pauline_Oliveros_-SonicActs_-SonicActs2012.jpg?utm_source=commons.wiki |
| server_responds | 200 | https://commons.wikimedia.org/wiki/Special:FilePath/Persconferentie%20componist%20Morton%20Feldman%20in%20concertgebouw%20Amsterdam%20in%20verband%20m%2C%20Bestanddeelnr%20928-6143.jpg?width=480 | https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Persconferentie_componist_Morton_Feldman_in_concertgebouw_Amsterdam_in_verband_m%2C_Bestanddeelnr_928-6143.jpg/500px-Persco |
| server_responds | 200 | https://core.musicfinland.fi/composers/jean-sibelius | https://core.musicfinland.fi/composers/jean-sibelius |
| server_responds | 200 | https://creativecommons.org/licenses/by-sa/3.0/ | https://creativecommons.org/licenses/by-sa/3.0/ |
| server_responds | 200 | https://creativecommons.org/licenses/by/2.0/ | https://creativecommons.org/licenses/by/2.0/ |
| server_responds | 200 | https://creativecommons.org/licenses/by/3.0/ | https://creativecommons.org/licenses/by/3.0/ |
| server_responds | 200 | https://creativecommons.org/publicdomain/zero/1.0/ | https://creativecommons.org/publicdomain/zero/1.0/ |
| connection_problem | - | https://data-johncage.org/pp/John-Cage-Work-Detail.cfm?work_ID=188 | HTTPSConnectionPool(host='data-johncage.org', port=443): Max retries exceeded with url: /pp/John-Cage-Work-Detail.cfm?work_ID=188 (Caused by |
| server_responds | 200 | https://ecmrecords.com/product/turtle-dreams-meredith-monk/ | https://ecmrecords.com/product/turtle-dreams-meredith-monk/ |
| server_responds | 200 | https://encyclopedia.ushmm.org/content/en/article/theresienstadt | https://encyclopedia.ushmm.org/content/en/article/theresienstadt |
| server_responds | 200 | https://encyclopedia.ushmm.org/content/en/article/theresienstadt-as-a-tool-of-nazi-propaganda-the-1944-film | https://encyclopedia.ushmm.org/content/en/article/theresienstadt-as-a-tool-of-nazi-propaganda-the-1944-film |
| server_responds | 200 | https://encyclopedia.ushmm.org/content/en/article/theresienstadt-cultural-life | https://encyclopedia.ushmm.org/content/en/article/theresienstadt-cultural-life |
| server_responds | 200 | https://folkways-media.si.edu/docs/folkways/artwork/SFW40820.pdf | https://folkways-media.si.edu/docs/folkways/artwork/SFW40820.pdf |
| restricted | 403 | https://folkways.si.edu/blending-african-and-irish-sensibilities-in-virginias-music/music/tools-for-teaching/smithsonian | https://folkways.si.edu/blending-african-and-irish-sensibilities-in-virginias-music/music/tools-for-teaching/smithsonian |
| server_responds | 200 | https://fonologia.lim.di.unimi.it/brani_scheda.php?id=394 | https://fonologia.lim.di.unimi.it/brani_scheda.php?id=394 |
| server_responds | 200 | https://fonologia.lim.di.unimi.it/introduzione.php | https://fonologia.lim.di.unimi.it/introduzione.php |
| server_responds | 200 | https://fresques.ina.fr/artsonores/parcours/0002/musiques-electroacoustiques-sur-support.html | https://fresques.ina.fr/artsonores/parcours/0002/musiques-electroacoustiques-sur-support.html |
| server_responds | 200 | https://germanhistorydocs.org/en/nazi-germany-1933-1945/ghdi:image-2082 | https://germanhistorydocs.org/en/nazi-germany-1933-1945/ghdi:image-2082 |
| server_responds | 200 | https://hanns-eisler.de/en/hanns-eisler/ | https://hanns-eisler.de/en/hanns-eisler/ |
| server_responds | 200 | https://hdl.handle.net/1802/16710 | https://urresearch.rochester.edu/institutionalPublicationPublicView.action?institutionalItemId=16276&versionNumber=1 |
| server_responds | 200 | https://history.state.gov/historicaldocuments/frus1948v04/d538 | https://history.state.gov/historicaldocuments/frus1948v04/d538 |
| server_responds | 200 | https://i.ytimg.com/vi/LSV7PzmO5xY/hqdefault.jpg | https://i.ytimg.com/vi/LSV7PzmO5xY/hqdefault.jpg |
| server_responds | 200 | https://i.ytimg.com/vi/RldKXmy00Iw/hqdefault.jpg | https://i.ytimg.com/vi/RldKXmy00Iw/hqdefault.jpg |
| server_responds | 200 | https://i.ytimg.com/vi/V3B7uQ5K0IU/hqdefault.jpg | https://i.ytimg.com/vi/V3B7uQ5K0IU/hqdefault.jpg |
| server_responds | 200 | https://i.ytimg.com/vi/YB_PTA4dGws/hqdefault.jpg | https://i.ytimg.com/vi/YB_PTA4dGws/hqdefault.jpg |
| candidate_404 | 404 | https://i.ytimg.com/vi/vO6Yvi-jKgU/hqdefault.jpg | https://i.ytimg.com/vi/vO6Yvi-jKgU/hqdefault.jpg |
| server_responds | 200 | https://i.ytimg.com/vi/wClwaBuFOJA/hqdefault.jpg | https://i.ytimg.com/vi/wClwaBuFOJA/hqdefault.jpg |
| server_responds | 200 | https://iam.pl/en/node/10419 | https://iam.pl/en/node/10419 |
| covered_elsewhere | - | https://imslp.org/wiki/5_Pieces_for_Orchestra%2C_Op.10_%28Webern%2C_Anton%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Fantasia_contrappuntistica_%28Busoni%2C_Ferruccio%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Jeux_d%27eau_%28Ravel%2C_Maurice%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Maple_Leaf_Rag_%28Joplin%2C_Scott%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Miroirs_%28Ravel%2C_Maurice%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Music_for_Strings%2C_Percussion_and_Celesta_%28Bart%C3%B3k%2C_B%C3%A9la%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Octandre_(Var%C3%A8se,_Edgard) | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Piano_Sonatina_No.2%2C_KiV_259_%28Busoni%2C_Ferruccio%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Pierrot_Lunaire%2C_Op.21_%28Schoenberg%2C_Arnold%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Pr%C3%A9lude_%C3%A0_l%27Apr%C3%A8s-midi_d%27Un_Faune_%28Debussy%2C_Claude%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Pr%C3%A9ludes%2C_Livre_1_%28Debussy%2C_Claude%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Romanian_Folk_Dances_%28Bart%C3%B3k%2C_B%C3%A9la%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Suite%2C_Op.25_%28Schoenberg%2C_Arnold%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/The_Rite_of_Spring_%28Stravinsky%2C_Igor%29 | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/The_Unanswered_Question,_S.50_(Ives,_Charles) | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://imslp.org/wiki/Violin_Concerto_%28Berg%2C_Alban%29 | Video or IMSLP: documented in a separate report |
| server_responds | 200 | https://info.bmc.hu/en/compositions/1112891006-roman-nepi-tancok-bb-68 | https://info.bmc.hu/en/compositions/1112891006-roman-nepi-tancok-bb-68 |
| server_responds | 200 | https://internationales-musikinstitut.de/de/imd/stories/nono/ | https://internationales-musikinstitut.de/de/imd/stories/nono/ |
| server_responds | 200 | https://internationales-musikinstitut.de/en/ferienkurse/ueber/info/ | https://internationales-musikinstitut.de/en/ferienkurse/ueber/info/ |
| server_responds | 200 | https://internationales-musikinstitut.de/en/imd/ueber/profil/ | https://internationales-musikinstitut.de/en/imd/ueber/profil/ |
| server_responds | 200 | https://liberliber.it/autori/autori-m/modest-petrovic-musorgskij/quadri-di-unesposizione-kartinki-s-vystavki-orchestrazione-di-maurice-ravel/ | https://liberliber.it/autori/autori-m/modest-petrovic-musorgskij/quadri-di-unesposizione-kartinki-s-vystavki-orchestrazione-di-maurice-ravel/ |
| server_responds | 200 | https://medias.ircam.fr/en/work/dolmen-music | https://medias.ircam.fr/en/work/dolmen-music |
| server_responds | 200 | https://medias.ircam.fr/en/work/musica-su-due-dimensioni | https://medias.ircam.fr/en/work/musica-su-due-dimensioni |
| server_responds | 200 | https://medias.ircam.fr/en/work/the-rothko-chapel | https://medias.ircam.fr/en/work/the-rothko-chapel |
| restricted | 403 | https://music.si.edu/spotlight/banjos-smithsonian | https://music.si.edu/spotlight/banjos-smithsonian |
| restricted | 403 | https://music.si.edu/story/jazz | https://music.si.edu/story/jazz |
| server_responds | 200 | https://musikverein-duesseldorf.de/stadtgeschichte-91/ | https://musikverein-duesseldorf.de/stadtgeschichte-91/ |
| server_responds | 200 | https://news.yale.edu/2010/09/13/watch-online-poem-fire-performance-woolsey | https://news.yale.edu/2010/09/13/watch-online-poem-fire-performance-woolsey |
| restricted | 403 | https://nmaahc.si.edu/explore/publications/musical-crossroads | https://nmaahc.si.edu/explore/publications/musical-crossroads |
| connection_problem | - | https://old-digitalcollections.nypl.org/items/e26fe8e0-86be-0136-4e27-17aa65f88985 | HTTPSConnectionPool(host='old-digitalcollections.nypl.org', port=443): Read timed out. (read timeout=11) |
| server_responds | 200 | https://paulineoliveros.us/compositions.html | https://paulineoliveros.us/compositions.html |
| server_responds | 200 | https://philipglass.com/compositions/einstein_on_the_beach/ | https://philipglass.com/compositions/einstein_on_the_beach/ |
| server_responds | 200 | https://philipglass.com/compositions/music_in_twelve_parts/ | https://philipglass.com/compositions/music_in_twelve_parts/ |
| server_responds | 200 | https://pierreboulez.org/Default/doc/SYRACUSE/14/structures-premier-livre-for-two-pianos?_lg=en-US | https://pierreboulez.org/Default/doc/SYRACUSE/14/structures-premier-livre-for-two-pianos?_lg=en-US |
| server_responds | 200 | https://pierreboulez.org/Default/doc/SYRACUSE/17/le-marteau-sans-maitre-pour-voix-d-alto-et-six-instruments?_lg=en-US | https://pierreboulez.org/Default/doc/SYRACUSE/17/le-marteau-sans-maitre-pour-voix-d-alto-et-six-instruments?_lg=en-US |
| server_responds | 200 | https://polmic.pl/en/encyclopedia/subject-entries/p/penderecki-krzysztof-en | https://polmic.pl/en/encyclopedia/subject-entries/p/penderecki-krzysztof-en |
| server_responds | 200 | https://pop.culture.gouv.fr/notice/joconde/50430001920 | https://pop.culture.gouv.fr/notice/joconde/50430001920 |
| server_responds | 200 | https://ppeam.zhdk.ch/song/musica-su-due-dimensioni/ | https://ppeam.zhdk.ch/song/musica-su-due-dimensioni/ |
| server_responds | 200 | https://publish.iupress.indiana.edu/read/bartok-for-piano/section/5e4c785c-1bd9-48a9-afd3-1aaf09f10b50 | https://publish.iupress.indiana.edu/read/bartok-for-piano/section/5e4c785c-1bd9-48a9-afd3-1aaf09f10b50 |
| server_responds | 200 | https://publish.iupress.indiana.edu/read/music-and-musical-life-in-soviet-russia-enlarged-edition-1917-1981/section/4f918b71-3f2b-4af3-b522-d30e7eaff536 | https://publish.iupress.indiana.edu/read/music-and-musical-life-in-soviet-russia-enlarged-edition-1917-1981/section/4f918b71-3f2b-4af3-b522-d30e7eaff536 |
| server_responds | 200 | https://puccini.it/opera/madama-butterfly/ | https://puccini.it/opera/madama-butterfly/ |
| server_responds | 200 | https://research.lib.buffalo.edu/eastman/external | https://research.lib.buffalo.edu/eastman/external |
| server_responds | 200 | https://researchinnovation.kingston.ac.uk/en/publications/erik-saties-musique-dameublement-and-max-jacobs-ruffian-toujours--2/ | https://researchinnovation.kingston.ac.uk/en/publications/erik-saties-musique-dameublement-and-max-jacobs-ruffian-toujours--2/ |
| server_responds | 200 | https://resources.ircam.fr/en/composer/iannis-xenakis/biography | https://resources.ircam.fr/en/composer/iannis-xenakis/biography |
| server_responds | 200 | https://resources.ircam.fr/fr/work/concert-de-bruits | https://resources.ircam.fr/fr/work/concert-de-bruits |
| server_responds | 200 | https://ressources.ircam.fr/en/composer/gerard-grisey/workcourse | https://ressources.ircam.fr/en/composer/gerard-grisey/workcourse |
| server_responds | 200 | https://ressources.ircam.fr/en/composer/hanns-eisler/biography | https://ressources.ircam.fr/en/composer/hanns-eisler/biography |
| server_responds | 200 | https://ressources.ircam.fr/en/composer/terry-riley/workcourse | https://ressources.ircam.fr/en/composer/terry-riley/workcourse |
| server_responds | 200 | https://ressources.ircam.fr/en/composer/tristan-murail/biography | https://ressources.ircam.fr/en/composer/tristan-murail/biography |
| server_responds | 200 | https://ressources.ircam.fr/en/work/concert-champetre | https://ressources.ircam.fr/en/work/concert-champetre |
| server_responds | 200 | https://ressources.ircam.fr/en/work/gondwana | https://ressources.ircam.fr/en/work/gondwana |
| server_responds | 200 | https://ressources.ircam.fr/en/work/octuor-2 | https://ressources.ircam.fr/en/work/octuor-2 |
| server_responds | 200 | https://ressources.ircam.fr/en/works/work/10053 | https://ressources.ircam.fr/en/works/work/10053 |
| server_responds | 200 | https://ressources.ircam.fr/fr/composer/gyorgy-ligeti/worksbydate | https://ressources.ircam.fr/fr/composer/gyorgy-ligeti/worksbydate |
| server_responds | 200 | https://ressources.ircam.fr/fr/work/etude-n-2-imposee-ou-etude-aux-chemins-de-fer | https://ressources.ircam.fr/fr/work/etude-n-2-imposee-ou-etude-aux-chemins-de-fer |
| server_responds | 200 | https://ressources.ircam.fr/fr/work/lux-aeterna-1 | https://ressources.ircam.fr/fr/work/lux-aeterna-1 |
| server_responds | 200 | https://ressources.ircam.fr/fr/work/mode-de-valeurs-et-d%27intensites | https://ressources.ircam.fr/fr/work/mode-de-valeurs-et-d%27intensites |
| server_responds | 200 | https://ressources.ircam.fr/fr/work/partiels | https://ressources.ircam.fr/fr/work/partiels |
| server_responds | 200 | https://ressources.ircam.fr/fr/work/poeme-electronique | https://ressources.ircam.fr/fr/work/poeme-electronique |
| server_responds | 200 | https://sites.gold.ac.uk/electronic-music-studios/archive/daphne-oram/ | https://sites.gold.ac.uk/electronic-music-studios/archive/daphne-oram/ |
| server_responds | 200 | https://sites.inagrm.com/parcours/co/Boucle_revelation_exploration.html | https://sites.inagrm.com/parcours/co/Boucle_revelation_exploration.html |
| server_responds | 200 | https://societe.paul-claudel.net/oeuvre/jeanne-darc-au-bucher/ | https://societe.paul-claudel.net/oeuvre/jeanne-darc-au-bucher/ |
| restricted | 403 | https://stevereich.com/composition/its-gonna-rain/ | https://stevereich.com/composition/its-gonna-rain/ |
| restricted | 403 | https://stevereich.com/composition/music-for-18-musicians/ | https://stevereich.com/composition/music-for-18-musicians/ |
| restricted | 403 | https://stevereich.com/composition/piano-phase/ | https://stevereich.com/composition/piano-phase/ |
| server_responds | 200 | https://thedoors.com/music | https://thedoors.com/music |
| restricted | 429 | https://tile.loc.gov/storage-services/service/pnp/van/5a52000/5a52600/5a52643r.jpg | https://tile.loc.gov/storage-services/service/pnp/van/5a52000/5a52600/5a52643r.jpg |
| server_responds | 200 | https://upload.wikimedia.org/wikipedia/commons/4/44/Scriabin_1909_Cropped.jpg | https://upload.wikimedia.org/wikipedia/commons/4/44/Scriabin_1909_Cropped.jpg |
| server_responds | 200 | https://upload.wikimedia.org/wikipedia/commons/c/c0/Studio_di_fonologia_del_1955_della_sede_Rai_di_Milano_-_Museo_degli_strumenti_musicali_del_castello_sforzesco_-_Milano.JPG | https://upload.wikimedia.org/wikipedia/commons/c/c0/Studio_di_fonologia_del_1955_della_sede_Rai_di_Milano_-_Museo_degli_strumenti_musicali_del_castello_sforzesco_-_Milano.JPG |
| server_responds | 200 | https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=2965 | https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=2965 |
| server_responds | 200 | https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=3471 | https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=3471 |
| server_responds | 200 | https://www.bpb.de/themen/erster-weltkrieg-weimar/weimarer-republik/275840/zwischen-festigung-und-gefaehrdung-1924-1929/ | https://www.bpb.de/themen/erster-weltkrieg-weimar/weimarer-republik/275840/zwischen-festigung-und-gefaehrdung-1924-1929/ |
| server_responds | 200 | https://www.bso.org/works/pictures-at-an-exhibition | https://www.bso.org/works/pictures-at-an-exhibition |
| server_responds | 200 | https://www.busoni-mahler.eu/competition/it/ferruccio-busoni/ | https://www.busoni-mahler.eu/competition/it/ferruccio-busoni/ |
| server_responds | 200 | https://www.busoni-nachlass.org/en/Writings/E010004/D0200001.html | https://www.busoni-nachlass.org/en/Writings/E010004/D0200001.html |
| server_responds | 200 | https://www.cambridge.org/core/books/abs/cambridge-history-of-music-criticism/music-criticism-in-the-ussr-from-asafyev-to-cherednichenko/674F2AC5105970CA68F0ECC67EFAEF80 | https://www.cambridge.org/core/books/abs/cambridge-history-of-music-criticism/music-criticism-in-the-ussr-from-asafyev-to-cherednichenko/674F2AC5105970CA68F0ECC67EFAEF80 |
| server_responds | 200 | https://www.carnegiehall.org/uploadedFiles/Resources_and_Components/PDF/Press/Carnegie_Hall_Media_Kit.pdf | https://www.carnegiehall.org/uploadedFiles/Resources_and_Components/PDF/Press/Carnegie_Hall_Media_Kit.pdf |
| server_responds | 200 | https://www.catalog.puccini.it/works | https://www.catalog.puccini.it/works |
| server_responds | 200 | https://www.centrepompidou.fr/en/ressources/oeuvre/c4rzdBa | https://www.centrepompidou.fr/en/ressources/oeuvre/c4rzdBa |
| server_responds | 200 | https://www.centrepompidou.fr/en/ressources/oeuvre/carLXa | https://www.centrepompidou.fr/en/ressources/oeuvre/carLXa |
| server_responds | 200 | https://www.conservatoiredeparis.fr/fr/tempo-et-texture-dans-quelques-interpretations-enregistrees-de-ionisation-de-varese | https://www.conservatoiredeparis.fr/fr/tempo-et-texture-dans-quelques-interpretations-enregistrees-de-ionisation-de-varese |
| server_responds | 200 | https://www.daphneoram.org/aboutoram/ | https://www.daphneoram.org/aboutoram/ |
| server_responds | 200 | https://www.davidbowie.com/blog/2019/12/19/alabama-song-40th-anniversary-picture-disc | https://www.davidbowie.com/blog/2019/12/19/alabama-song-40th-anniversary-picture-disc |
| connection_problem | - | https://www.deeplistening.rpi.edu/deep-listening/ | HTTPSConnectionPool(host='www.deeplistening.rpi.edu', port=443): Max retries exceeded with url: /deep-listening/ (Caused by SSLError(SSLCert |
| restricted | 403 | https://www.earbox.com/work/nixon-in-china/ | https://www.earbox.com/work/nixon-in-china/ |
| server_responds | 200 | https://www.flaminioonline.it/Guide/Hindemith/Hindemith-Kammermusik24-1.html | https://www.flaminioonline.it/Guide/Hindemith/Hindemith-Kammermusik24-1.html |
| server_responds | 200 | https://www.fondationlecorbusier.fr/oeuvre-architecture/realisations-pavillon-philips-exposition-internationale-de-1958-bruxelles-belgique-1957-1958/ | https://www.fondationlecorbusier.fr/oeuvre-architecture/realisations-pavillon-philips-exposition-internationale-de-1958-bruxelles-belgique-1957-1958/ |
| restricted | 403 | https://www.fondazionebonotto.org/it/collection/fluxus/cagejohnmiltonjr/7/475.html | https://www.fondazionebonotto.org/it/collection/fluxus/cagejohnmiltonjr/7/475.html |
| server_responds | 200 | https://www.france-memoire.fr/les-cinq-vies-musicales-derik-satie/ | https://www.france-memoire.fr/les-cinq-vies-musicales-derik-satie/ |
| server_responds | 200 | https://www.getty.edu/publications/scores/02/ | https://www.getty.edu/publications/scores/02/ |
| server_responds | 200 | https://www.gutenberg.org/files/31799/31799-h/31799-h.htm | https://www.gutenberg.org/files/31799/31799-h/31799-h.htm |
| server_responds | 200 | https://www.hans-werner-henze-stiftung.de/en/hans-werner-henze/list-of-works/detail/the-prince-of-homburg | https://www.hans-werner-henze-stiftung.de/en/hans-werner-henze/list-of-works/detail/the-prince-of-homburg |
| server_responds | 200 | https://www.iannis-xenakis.org/en/ruled-surfaces/ | https://www.iannis-xenakis.org/en/ruled-surfaces/ |
| server_responds | 200 | https://www.iannis-xenakis.org/en/stochastic-music/ | https://www.iannis-xenakis.org/en/stochastic-music/ |
| server_responds | 200 | https://www.indianapolissymphony.org/backstage/program-notes/stravinsky-the-rite-of-spring/ | https://www.indianapolissymphony.org/backstage/program-notes/stravinsky-the-rite-of-spring/ |
| server_responds | 200 | https://www.kwf.org/kurt-weill/biography-of-kurt-weill/ | https://www.kwf.org/kurt-weill/biography-of-kurt-weill/ |
| server_responds | 200 | https://www.kwf.org/research-center/elisabeth-hauptmann-chronology/ | https://www.kwf.org/research-center/elisabeth-hauptmann-chronology/ |
| server_responds | 200 | https://www.kwf.org/works/alabama-song-2/ | https://www.kwf.org/works/alabama-song-2/ |
| server_responds | 200 | https://www.kwf.org/works/aufstieg-und-fall-der-stadt-mahagonny/ | https://www.kwf.org/works/aufstieg-und-fall-der-stadt-mahagonny/ |
| server_responds | 200 | https://www.kwf.org/works/die-dreigroschenoper/ | https://www.kwf.org/works/die-dreigroschenoper/ |
| server_responds | 200 | https://www.kwf.org/works/mahagonny-songspiel/ | https://www.kwf.org/works/mahagonny-songspiel/ |
| server_responds | 200 | https://www.laphil.com/works/central-park-in-the-dark | https://www.laphil.com/works/central-park-in-the-dark |
| server_responds | 200 | https://www.laphil.com/works/music-for-strings-percussion-and-celesta | https://www.laphil.com/works/music-for-strings-percussion-and-celesta |
| server_responds | 200 | https://www.laphil.com/works/prometheus-poem-of-fire-op-60-scriabin | https://www.laphil.com/works/prometheus-poem-of-fire-op-60-scriabin |
| server_responds | 200 | https://www.laphil.com/works/the-unanswered-question | https://www.laphil.com/works/the-unanswered-question |
| server_responds | 200 | https://www.larousse.fr/encyclopedie/musdico/musique_s%C3%A9rielle/168153 | https://www.larousse.fr/encyclopedie/musdico/musique_s%C3%A9rielle/168153 |
| connection_problem | - | https://www.lenbachhaus.de/digital/sammlung-online/detail/impression-iii-konzert-30012206 | HTTPSConnectionPool(host='www.lenbachhaus.de', port=443): Read timed out. (read timeout=11) |
| server_responds | 200 | https://www.liberliber.eu/mediateca/musica/m/musorgskij/quadri_di_un_esposizione/mp3/musorgskij_quadri_rf_01_prome.mp3 | https://www.liberliber.eu/mediateca/musica/m/musorgskij/quadri_di_un_esposizione/mp3/musorgskij_quadri_rf_01_prome.mp3 |
| restricted | 403 | https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/ | https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ethnic/african-american-song/ |
| restricted | 403 | https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ritual-and-worship/spirituals/ | https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/ritual-and-worship/spirituals/ |
| restricted | 403 | https://www.loc.gov/item/06011580/ | https://www.loc.gov/item/06011580/ |
| restricted | 403 | https://www.loc.gov/item/2021667099/ | https://www.loc.gov/item/2021667099/ |
| restricted | 403 | https://www.loc.gov/item/jukebox-670189/ | https://www.loc.gov/item/jukebox-670189/ |
| restricted | 403 | https://www.loc.gov/pictures/item/2004663573/ | https://www.loc.gov/pictures/item/2004663573/ |
| restricted | 403 | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/women-on-the-recording-registry/ | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/descriptions-and-essays/women-on-the-recording-registry/ |
| restricted | 403 | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/listen-to-registry-titles/ | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/listen-to-registry-titles/ |
| restricted | 403 | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/registry-by-induction-years/2002/ | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/registry-by-induction-years/2002/ |
| restricted | 403 | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/registry-by-induction-years/2009/ | https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/registry-by-induction-years/2009/ |
| server_responds | 200 | https://www.lucianoberio.org/nota-di-programma-op/sequenza-iii-nota-dellautore/ | https://www.lucianoberio.org/nota-di-programma-op/sequenza-iii-nota-dellautore/ |
| server_responds | 200 | https://www.lucianoberio.org/opera/omaggio-a-joyce-documenti-sulla-qualita-onomatopeica-del-linguaggio-poetico/ | https://www.lucianoberio.org/opera/omaggio-a-joyce-documenti-sulla-qualita-onomatopeica-del-linguaggio-poetico/ |
| server_responds | 200 | https://www.lucianoberio.org/opera/sequenza-iii/ | https://www.lucianoberio.org/opera/sequenza-iii/ |
| server_responds | 200 | https://www.lucianoberio.org/opera/thema-omaggio-a-joyce/ | https://www.lucianoberio.org/opera/thema-omaggio-a-joyce/ |
| server_responds | 200 | https://www.luiginono.it/opere/il-canto-sospeso/ | https://www.luiginono.it/opere/il-canto-sospeso/ |
| server_responds | 200 | https://www.luiginono.it/opere/la-fabbrica-illuminata/ | https://www.luiginono.it/opere/la-fabbrica-illuminata/ |
| connection_problem | - | https://www.mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-history/ | HTTPSConnectionPool(host='www.mahlerfoundation.org', port=443): Read timed out. (read timeout=11) |
| connection_problem | - | https://www.mahlerfoundation.org/mahler/compositions/symphony-no-4/ | HTTPSConnectionPool(host='www.mahlerfoundation.org', port=443): Read timed out. (read timeout=11) |
| server_responds | 200 | https://www.meredithmonk.org/about/chronology | https://www.meredithmonk.org/about/chronology |
| restricted | 429 | https://www.metmuseum.org/art/collection/search/752609 | https://www.metmuseum.org/art/collection/search/752609 |
| restricted | 403 | https://www.milanocastello.it/it/i-musei/museo-degli-strumenti-musicali/highlights/studio-di-fonologia-della-rai-di-milano | https://www.milanocastello.it/it/i-musei/museo-degli-strumenti-musicali/highlights/studio-di-fonologia-della-rai-di-milano |
| restricted | 403 | https://www.moma.org/collection/works/163616 | https://www.moma.org/collection/works/163616 |
| restricted | 403 | https://www.moma.org/interactives/exhibitions/2009/futurism/ | https://www.moma.org/interactives/exhibitions/2009/futurism/ |
| server_responds | 200 | https://www.moma.org/interactives/exhibitions/2012/inventingabstraction/inventingabstractionchecklist.pdf | https://www.moma.org/interactives/exhibitions/2012/inventingabstraction/inventingabstractionchecklist.pdf |
| server_responds | 200 | https://www.mtosmt.org/issues/mto.12.18.2/mto.12.18.2.gawboy_townsend.html | https://www.mtosmt.org/issues/mto.12.18.2/mto.12.18.2.gawboy_townsend.html |
| restricted | 403 | https://www.nationalgalleries.org/art-and-artists/101750 | https://www.nationalgalleries.org/art-and-artists/101750 |
| server_responds | 200 | https://www.ninasimone.com/live-sessions/ | https://www.ninasimone.com/live-sessions/ |
| server_responds | 200 | https://www.nps.gov/jazz/learn/historyculture/history_early.htm | https://www.nps.gov/jazz/learn/historyculture/history_early.htm |
| server_responds | 200 | https://www.nps.gov/jazz/learn/historyculture/jazz_history.htm | https://www.nps.gov/jazz/learn/historyculture/jazz_history.htm |
| server_responds | 200 | https://www.nps.gov/subjects/africanamericanheritage/enslavement.htm | https://www.nps.gov/subjects/africanamericanheritage/enslavement.htm |
| server_responds | 200 | https://www.orff-zentrum.de/forschung_dokumentation/orff_br/index.html | https://www.orff-zentrum.de/forschung_dokumentation/orff_br/index.html |
| server_responds | 200 | https://www.orff-zentrum.de/meta/informationen_englisch/biographical-sketch/index.html | https://www.orff-zentrum.de/meta/informationen_englisch/biographical-sketch/index.html |
| server_responds | 200 | https://www.orff-zentrum.de/orff/werke/paedagogisch/index.html | https://www.orff-zentrum.de/orff/werke/paedagogisch/index.html |
| server_responds | 200 | https://www.orsymphony.org/productions/2526/pictures-at-an-exhibition | https://www.orsymphony.org/productions/2526/pictures-at-an-exhibition |
| server_responds | 200 | https://www.parismuseescollections.paris.fr/en/node/524351 | https://www.parismuseescollections.paris.fr/en/node/524351 |
| server_responds | 200 | https://www.richardstrauss.at/biography.html | https://www.richardstrauss.at/biography.html |
| server_responds | 200 | https://www.ricordi.com/it-IT/Critical-Editions/Puccini-Giacomo-Critical-Editions/Puccini-Tosca-1900.aspx | https://www.ricordi.com/it-IT/Critical-Editions/Puccini-Giacomo-Critical-Editions/Puccini-Tosca-1900.aspx |
| server_responds | 200 | https://www.royalholloway.ac.uk/research-and-education/subjects/music/about-us/teacherhubmusic/stravinsky-the-rite-of-spring-and-new-directions/ | https://www.royalholloway.ac.uk/research-and-education/subjects/music/about-us/teacherhubmusic/stravinsky-the-rite-of-spring-and-new-directions/ |
| server_responds | 200 | https://www.scelsi.it/it/biografia/ | https://www.scelsi.it/it/biografia/ |
| server_responds | 200 | https://www.scelsi.it/it/quattro-pezzi-per-orchestra-%28ciascuno-su-una-nota-sola%29/ | https://www.scelsi.it/it/quattro-pezzi-per-orchestra-%28ciascuno-su-una-nota-sola%29/ |
| restricted | 403 | https://www.schott-music.com/en/threnos-no159063.html | https://www.schott-music.com/en/threnos-no159063.html |
| server_responds | 200 | https://www.slavevoyages.org/assessment/estimates | https://www.slavevoyages.org/assessment/estimates |
| restricted | 403 | https://www.themorgan.org/music-manuscripts-and-printed-music/110186 | https://www.themorgan.org/music-manuscripts-and-printed-music/110186 |
| server_responds | 200 | https://www.treccani.it/enciclopedia/alfredo-casella_%28Dizionario-Biografico%29/ | https://www.treccani.it/enciclopedia/alfredo-casella_%28Dizionario-Biografico%29/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/astor-piazzolla/ | https://www.treccani.it/enciclopedia/astor-piazzolla/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/eol-ullmann-viktor/ | https://www.treccani.it/enciclopedia/eol-ullmann-viktor/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/giacinto-scelsi_%28Enciclopedia-Italiana%29/ | https://www.treccani.it/enciclopedia/giacinto-scelsi_%28Enciclopedia-Italiana%29/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/gian-francesco-malipiero/ | https://www.treccani.it/enciclopedia/gian-francesco-malipiero/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/ | https://www.treccani.it/enciclopedia/goffredo-petrassi_%28Dizionario-Biografico%29/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/gruppo-dei-sei/ | https://www.treccani.it/enciclopedia/gruppo-dei-sei/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/hanns-eisler_%28Enciclopedia-del-Cinema%29/ | https://www.treccani.it/enciclopedia/hanns-eisler_%28Enciclopedia-del-Cinema%29/ |
| server_responds | 200 | https://www.treccani.it/enciclopedia/serie-e-struttura-dodecafonia_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/ | https://www.treccani.it/enciclopedia/serie-e-struttura-dodecafonia_%28Storia-della-civilt%C3%A0-europea-a-cura-di-Umberto-Eco%29/ |
| restricted | 403 | https://www.universaledition.com/en/Triadic-Memories/P0357971 | https://www.universaledition.com/en/Triadic-Memories/P0357971 |
| server_responds | 200 | https://www.wassilykandinsky.net/pictures.php | https://www.wassilykandinsky.net/pictures.php |
| server_responds | 200 | https://www.wisemusicclassical.com/work/43912/ | https://www.wisemusicclassical.com/work/43912/ |
| server_responds | 200 | https://www.wisemusicclassical.com/work/46356/ | https://www.wisemusicclassical.com/work/46356/ |
| server_responds | 200 | https://www.wisemusicclassical.com/work/57875/ | https://www.wisemusicclassical.com/work/57875/ |
| server_responds | 200 | https://www.wisemusicclassical.com/work/67214/Music-of-Changes--John-Cage/ | https://www.wisemusicclassical.com/work/67214/Music-of-Changes--John-Cage/ |
| covered_elsewhere | - | https://www.youtube.com/watch?v=LSV7PzmO5xY | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=RldKXmy00Iw | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=V3B7uQ5K0IU | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=YB_PTA4dGws | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=vO6Yvi-jKgU | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=wClwaBuFOJA | Video or IMSLP: documented in a separate report |
| covered_elsewhere | - | https://www.youtube.com/watch?v=yoAbXwr3qkg | Video or IMSLP: documented in a separate report |
| server_responds | 200 | https://zti.abtk.hu/en/ba/bartok-compositions/manuscripts | https://zti.abtk.hu/en/ba/bartok-compositions/manuscripts |

## Limiti

- Le richieste sono state effettuate da GitHub Actions, non dallo smartphone dell'utente.
- 403/429 e timeout possono essere protezioni contro le richieste automatizzate.
- Il programma non modifica alcuna URL, non riproduce audio o video e non scarica le opere.
- Per i 7 video YouTube e le 16 pagine IMSLP fa riferimento all'audit documentario già pubblicato.
- Verificare manualmente ogni apparente 404 prima di rimuovere o sostituire la fonte.
