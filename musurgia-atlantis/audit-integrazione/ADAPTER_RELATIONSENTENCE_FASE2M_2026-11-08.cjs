"use strict";
/**
 * Fase 2M — exact text renderer preserved from atlante3d/app-livelli.js
 * Original blob SHA: b7644154af527666d7b15bca8e31fe4f13924547
 * Snapshot blob SHA: d6ad7e194e70877b8d45b86575b322b280337c12
 * All lines between relationSentenceBase and dedupeEdges are verbatim.
 * STAGING ONLY: do not load this adapter in production or authorize historical edges.
 */
const SOURCE_BLOB_SHA="b7644154af527666d7b15bca8e31fe4f13924547";
const SNAPSHOT_BLOB_SHA="d6ad7e194e70877b8d45b86575b322b280337c12";
function createLegacyRelationSentenceAdapter(nodes=[]) {
 const byId=nodes instanceof Map?nodes:new Map(nodes.map(n=>[n.id,n]));
/* BEGIN EXACT SOURCE BLOCK — DO NOT MODIFY WITHOUT GOLDEN UPDATE */
function relationSentenceBase(e,perspectiveId=null){
 if(e.taxonomyDerived){
  const author=byId.get(e.source),family=byId.get(e.target);
  return (author?.label||e.source)+" si collega a «"+(family?.label||e.target)+"» attraverso "+e.via_labels.join(", ")+". È una risalita tassonomica, non un nuovo arco diretto del database.";
 }
 const a=e.a?.label||byId.get(e.source)?.label||e.source;
 const b=e.b?.label||byId.get(e.target)?.label||e.target;
 const reversed=perspectiveId!=null&&perspectiveId===e.target;
 const subject=reversed?b:a,object=reversed?a:b;
 const verb=reversed?e.reverse:e.forward;
 if(typeof verb==="string"&&verb.trim()){
  let fragment=verb.trim().replace(/^([A-ZÀ-ÖØ-Þ])/,c=>c.toLocaleLowerCase("it"));
  // Solo le scuole: la forma di intestazione non coincide sempre con la frase.
  // Le intestazioni delle categorie sono lemmi, non sempre sintagmi pronti per una frase.
  let spokenSubject=subject;
  if(e.group==="scuole"){
   if(subject==="Camerata fiorentina e ambiente di Corsi")spokenSubject="La Camerata fiorentina e l'ambiente di Corsi";
   else if(/^(?:Scuola\b|Seconda scuola\b|Tradizione\b|Musica\b)/i.test(subject))spokenSubject="La "+subject;
   else if(/^(?:Classicismo\b|Teatro musicale\b|Gruppo dei Cinque\b|Risorgimento\b|Lied romantico\b|Madrigalismo\b|Sinfonismo\b|Minimalismo\b)/i.test(subject))spokenSubject="Il "+subject;
   if(subject==="Les Six")spokenSubject="Il gruppo Les Six";
   if(subject==="Minimalismo")spokenSubject="Il minimalismo";
   if(subject==="Melodramma barocco")spokenSubject="Il melodramma barocco";
   if(subject==="Dodecafonia")spokenSubject="La dodecafonia";
   if(subject==="Seconda scuola di Vienna")spokenSubject="La seconda scuola di Vienna";
   if(subject==="Madrigalismo cinquecentesco")spokenSubject="Il madrigalismo cinquecentesco";
   if(/^Teatro musicale\b/.test(subject))spokenSubject="Il teatro musicale"+subject.slice("Teatro musicale".length);
   if(/^Sinfonismo\b/.test(subject))spokenSubject="Il sinfonismo"+subject.slice("Sinfonismo".length);
  }
  // Correzioni mirate ai titoli editoriali: nessuna modifica alle bolle.
  if(e.group==="scuole"&&subject==="Darmstadt: corsi e avanguardie"&&e.id.startsWith("scuola-darmstadt-")){
   if(e.id==="scuola-darmstadt-luciano-berio")return "I corsi estivi di Darmstadt furono un luogo di confronto frequentato da Luciano Berio.";
   return "I corsi estivi di Darmstadt "+fragment.replace(/^accolse/,"accolsero")+" "+object+".";
  }
  if(e.group==="scuole"&&object==="Darmstadt: corsi e avanguardie"&&e.id.startsWith("scuola-darmstadt-"))
   return subject+" "+fragment+" Darmstadt.";
  if(e.group==="scuole"&&e.id==="ponte-seconda-vienna-darmstadt")
   return reversed?"I corsi estivi di Darmstadt rielaborarono criticamente l'eredità seriale della seconda scuola di Vienna.":"La seconda scuola di Vienna fornì, soprattutto attraverso Webern, un repertorio critico di studio ai corsi estivi di Darmstadt.";
  if(e.group==="scuole"&&subject==="Ospedali musicali veneziani del Settecento")
   spokenSubject="Gli ospedali musicali veneziani del Settecento";
  if(e.group==="scuole"&&subject==="Opera seria")spokenSubject="L'opera seria";
  if(e.group==="scuole"&&subject==="Opera buffa")spokenSubject="L'opera buffa";
  // Distinzione storiografica: una scuola non è un teatro o una città.
  if(e.group==="scuole"&&e.id==="ponte-napoletana-opera-seria")
   return reversed?"L'opera seria si sviluppò in diversi centri italiani; la tradizione operistica napoletana contribuì alla definizione e alla diffusione dei suoi modelli.":"La tradizione operistica napoletana contribuì allo sviluppo dell'opera seria, insieme ad altri centri teatrali italiani.";
  if(e.group==="scuole"&&e.id==="ponte-napoletana-opera-buffa")
   return reversed?"L'opera buffa trovò nella Napoli settecentesca uno dei suoi importanti centri di sviluppo, accanto ad altre realtà teatrali italiane.":"La tradizione operistica napoletana contribuì allo sviluppo dell'opera buffa, anche attraverso i teatri della Napoli settecentesca.";
  // Partecipazione ai Ferienkurse: non equivale ad adesione a una scuola estetica.
  if(e.group==="scuole"&&e.id==="audit2-darmstadt-ligeti")
   return reversed?"György Ligeti partecipò ai corsi estivi di Darmstadt e vi svolse anche attività didattica.":"I corsi estivi di Darmstadt accolsero György Ligeti fra i partecipanti e i docenti.";
  if(e.group==="scuole"&&e.id==="audit8-henze-darmstadt")
   return reversed?"Hans Werner Henze frequentò i corsi estivi di Darmstadt e nel 1948 vi studiò con René Leibowitz.":"I corsi estivi di Darmstadt furono frequentati da Hans Werner Henze, che nel 1948 vi studiò con René Leibowitz.";
  // L'orchestra di Mannheim è l'ambiente formativo, non una scuola-persona.
  if(e.group==="scuole"&&e.id==="scuola-mannheim-carl-stamitz")
   return reversed?"Carl Stamitz si formò nell'orchestra di corte di Mannheim e contribuì a diffonderne la tradizione in Europa.":"La tradizione orchestrale di Mannheim si diffuse anche attraverso Carl Stamitz, formatosi nella locale orchestra di corte.";
  // Forme discorsive: etichette storiografiche e titoli editoriali.
  if(e.group==="scuole"&&subject==="Classicismo viennese (categoria storiografica)")spokenSubject="Il classicismo viennese";
  if(e.group==="scuole"&&object==="Classicismo viennese (categoria storiografica)"){
   if(e.id==="lotto02-sc-ditters-classic")return "Carl Ditters von Dittersdorf si colloca nel più ampio ambiente del classicismo viennese, senza appartenere alla triade canonica.";
   if(e.id==="scuola-viennese-classica-joseph-haydn"||e.id==="scuola-viennese-classica-wolfgang-amadeus-mozart"||e.id==="scuola-viennese-classica-ludwig-van-beethoven")
    return subject+" è annoverato dalla storiografia fra i protagonisti del classicismo viennese.";
   if(e.id==="lotto02-sc-martines-class")return "Marianna Martines partecipò alla cultura musicale viennese dell'età classica, soprattutto con la produzione vocale e tastieristica.";
   if(e.id==="audit21-vienna-hummel-tradizione")return "Johann Nepomuk Hummel si formò con diversi maestri, fra cui Mozart, nella cultura del classicismo viennese.";
  }
  if(e.group==="scuole"&&e.id==="audit6-scriabin-mosca")
   return reversed?"Aleksandr Skrjabin studiò e insegnò al Conservatorio di Mosca.":"Il Conservatorio di Mosca accolse Aleksandr Skrjabin prima come studente e poi come docente.";
  if(e.group==="scuole"&&e.id==="audit6-rachmaninov-mosca")
   return reversed?"Sergej Rachmaninov studiò e conseguì i diplomi al Conservatorio di Mosca.":"Il Conservatorio di Mosca annoverò Sergej Rachmaninov fra i propri diplomati.";
  if(e.group==="scuole"&&e.id==="audit7-taneev-mosca")
   return reversed?"Sergej Taneev studiò, insegnò e diresse il Conservatorio di Mosca.":"Il Conservatorio di Mosca ebbe Sergej Taneev fra gli allievi, i docenti e i direttori.";
  if(e.group==="scuole"&&subject==="Polifonia sacra spagnola del Cinquecento")
   spokenSubject="La tradizione della polifonia sacra spagnola del Cinquecento";
  if(e.group==="scuole"&&object==="Polifonia sacra spagnola del Cinquecento")
   return subject+" "+fragment+" tradizione della polifonia sacra spagnola del Cinquecento.";
  if(e.group==="scuole"&&subject==="Riforma operistica del Settecento")
   spokenSubject="La riforma operistica del Settecento";
  // Eccezioni editoriali documentate: la coppia conserva la prospettiva del nodo.
  if(e.group==="scuole"){
   const editorialPairs={"ponte-mannheim-classici":["La scuola di Mannheim offrì, anche a Mozart, modelli di prassi orchestrale che contribuirono al classicismo viennese.","Il classicismo viennese accolse, fra altre influenze, stimoli orchestrali provenienti dalla scuola di Mannheim."],"audit6-prokofiev-pietroburgo":["Il Conservatorio di San Pietroburgo annoverò Sergej Prokof'ev fra gli allievi di composizione e strumentazione.","Sergej Prokof'ev studiò e si diplomò al Conservatorio di San Pietroburgo."],"audit6-shostakovich-pietroburgo":["Il Conservatorio di Pietrogrado accolse Dmitrij Šostakovič come allievo.","Dmitrij Šostakovič studiò composizione al Conservatorio di Pietrogrado, oggi Conservatorio di San Pietroburgo."],"catalogo-accademia-degli-unisoni-barbara-strozzi":["L'Accademia degli Unisoni di Venezia ebbe Barbara Strozzi fra le protagoniste delle sue adunanze.","Barbara Strozzi partecipò alle adunanze dell'Accademia degli Unisoni di Venezia."],"audit5-messiaen-jeune-france":["Il gruppo La Jeune France fu cofondato nel 1936 da Olivier Messiaen.","Olivier Messiaen fu fra i fondatori del gruppo La Jeune France nel 1936."],"audit2-20261018-jeune-france-jolivet":["Il gruppo La Jeune France annoverò André Jolivet fra i quattro fondatori del 1936.","André Jolivet partecipò nel 1936 alla fondazione del gruppo La Jeune France."],"audit8-orff-gunther-schule":["La Günther-Schule di Monaco fu fondata nel 1924 da Carl Orff e Dorothee Günther.","Carl Orff fondò nel 1924 con Dorothee Günther la Günther-Schule di Monaco, dedicata a musica, danza e movimento."],"audit8-zemlinsky-vereinigung":["Alexander von Zemlinsky fu tra i fondatori della Vereinigung schaffender Tonkünstler a Vienna nel 1904.","Alexander von Zemlinsky contribuì nel 1904 alla fondazione della Vereinigung schaffender Tonkünstler insieme a Schönberg."],"audit8b-gedalge-parigi":["Il Conservatorio di Parigi annoverò André Gedalge fra i professori di contrappunto e fuga dal 1905.","André Gedalge insegnò contrappunto e fuga al Conservatorio di Parigi dal 1905."],"audit8c-kurtag-accademia-liszt":["L'Accademia musicale Franz Liszt di Budapest annoverò György Kurtág fra i docenti di pianoforte e musica da camera.","György Kurtág insegnò pianoforte e musica da camera all'Accademia musicale Franz Liszt di Budapest."],"audit8c-reiner-curtis":["Il Curtis Institute affidò a Fritz Reiner responsabilità didattiche nella direzione d'orchestra.","Fritz Reiner insegnò direzione d'orchestra al Curtis Institute."],"audit8c-goldmark-juilliard":["La Juilliard ebbe Rubin Goldmark come responsabile della composizione dal 1924.","Rubin Goldmark diresse dal 1924 il dipartimento di composizione della Juilliard."],"audit8b-ives-yale":["Lo Yale College accolse Charles Ives come studente di Horatio Parker.","Charles Ives studiò composizione con Horatio Parker allo Yale College."],"audit8g-victoria-collegio-germanico":["Il Collegio Germanico di Roma accolse Tomás Luis de Victoria come cantore e docente.","Tomás Luis de Victoria cantò e insegnò al Collegio Germanico di Roma."],"audit8g-legrenzi-mendicanti":["L'Ospedale dei Mendicanti di Venezia ebbe Giovanni Legrenzi fra i maestri di coro e, successivamente, di cappella.","Giovanni Legrenzi fu maestro di coro e in seguito di cappella all'Ospedale dei Mendicanti di Venezia."]};
   const pair=editorialPairs[e.id];
   if(pair)return pair[reversed?1:0];
  }
  // Titoli editoriali di nodi istituzionali e storiografici: frasi autonome nei due versi.
  if(e.group==="scuole"){
   const additionalPairs={"audit8-price-chicago-renaissance":["L'ambiente culturale del Black Chicago Renaissance annoverò Florence Price fra le compositrici attive a Chicago.","Florence Price partecipò alla vita musicale e culturale del Black Chicago Renaissance."],"audit8-elsner-varsavia":["La Scuola principale di musica di Varsavia ebbe Józef Elsner fra i suoi principali organizzatori e direttori.","Józef Elsner diresse la Scuola principale di musica di Varsavia e vi insegnò composizione."],"audit8-nardini-tartini-padova":["La tradizione violinistica di Tartini a Padova proseguì anche attraverso l'attività di Pietro Nardini.","Pietro Nardini studiò con Tartini e contribuì a trasmetterne il magistero violinistico."],"audit8-manfredi-tartini-padova":["La scuola violinistica di Tartini a Padova annoverò Filippo Manfredi fra gli allievi.","Filippo Manfredi si formò nell'ambiente violinistico padovano di Tartini."],"audit8-koechlin-smi":["La Société musicale indépendante di Parigi ebbe Charles Koechlin fra i fondatori e promotori.","Charles Koechlin contribuì alla fondazione e alle attività della Société musicale indépendante a Parigi."],"audit8-cowell-new-music-society":["La New Music Society of California fu fondata nel 1925 da Henry Cowell.","Henry Cowell fondò nel 1925 la New Music Society of California per promuovere la musica contemporanea."],"audit8-scelsi-nuova-consonanza":["L'associazione Nuova Consonanza, fondata a Roma nel 1961, promosse anche musiche e attività cui contribuì Giacinto Scelsi.","Giacinto Scelsi collaborò con l'ambiente dell'associazione romana Nuova Consonanza, distinta dal successivo Gruppo di Improvvisazione."],"audit8-varese-guild":["L'International Composers’ Guild di New York fu promossa e cofondata da Edgard Varèse.","Edgard Varèse contribuì a fondare e promuovere a New York l'International Composers’ Guild."],"audit8-colbran-san-carlo":["Il Teatro San Carlo di Napoli annoverò Isabella Colbran fra le sue principali interpreti del primo Ottocento.","Isabella Colbran cantò da protagonista al Teatro San Carlo di Napoli nei primi decenni dell'Ottocento."],"audit8-zelter-singakademie":["La Sing-Akademie zu Berlin fu diretta da Carl Friedrich Zelter a partire dal 1800.","Carl Friedrich Zelter assunse nel 1800 la direzione della Sing-Akademie zu Berlin."],"audit8b-chadwick-second-ne":["La Second New England School annovera retrospettivamente George Whitefield Chadwick fra i propri compositori.","George Whitefield Chadwick è associato dalla storiografia alla Second New England School."],"audit8b-fasch-zerbst":["La cappella di corte di Anhalt-Zerbst fu diretta dal 1722 da Johann Friedrich Fasch.","Johann Friedrich Fasch fu maestro di cappella ad Anhalt-Zerbst a partire dal 1722."],"audit8c-malerbi-lugo":["La cappella della collegiata di Lugo fu diretta da Giuseppe Malerbi a partire dal 1792.","Giuseppe Malerbi assunse nel 1792 la direzione della cappella della collegiata di Lugo."],"audit8c-jchristoph-ohrdruf":["La Michaeliskirche di Ohrdruf ebbe come organista Johann Christoph Bach (1671–1721).","Johann Christoph Bach (1671–1721) fu organista della Michaeliskirche di Ohrdruf."],"audit8c-kitzler-linz":["Il Teatro di Linz ebbe Otto Kitzler come direttore musicale nei primi anni Sessanta dell'Ottocento.","Otto Kitzler diresse il Teatro di Linz e, negli stessi anni, impartì lezioni ad Anton Bruckner."],"audit8h-giovanni-cascia-scaligeri":["La corte degli Scaligeri a Verona accolse l'attività musicale di Giovanni da Cascia.","Giovanni da Cascia svolse attività musicale presso l'ambiente cortigiano degli Scaligeri a Verona."],"audit8h-jacopo-scaligeri":["La corte degli Scaligeri a Verona sostenne anche l'attività musicale di Jacopo da Bologna.","Jacopo da Bologna fu associato al mecenatismo musicale della corte degli Scaligeri."],"audit8h-casella-festival-venezia-1930":["Il Festival internazionale di musica contemporanea di Venezia del 1930 vide Alfredo Casella impegnato nell'organizzazione.","Alfredo Casella contribuì all'organizzazione del Festival internazionale di musica contemporanea di Venezia del 1930."],"audit8h-bartok-ricerca-popolar-ungherese":["La ricerca sui canti popolari ungheresi comprende il lavoro di raccolta e analisi di Béla Bartók.","Béla Bartók raccolse, classificò e analizzò canti popolari ungheresi nell'ambito delle ricerche etnomusicologiche."],"audit8h-kodaly-ricerca-popolar-ungherese":["La ricerca sui canti popolari ungheresi comprende il lavoro scientifico di Zoltán Kodály.","Zoltán Kodály studiò il repertorio popolare ungherese e contribuì alla sua pubblicazione scientifica."],"audit8h-stockhausen-wdr-colonia":["Lo Studio di musica elettronica della WDR a Colonia ospitò la realizzazione di opere di Karlheinz Stockhausen.","Karlheinz Stockhausen realizzò presso lo Studio di musica elettronica della WDR a Colonia opere come Gesang der Jünglinge."],"daily01-grofe-rhapsody":["L'incontro fra jazz e sala da concerto negli anni Venti comprende anche l'orchestrazione di Rhapsody in Blue realizzata da Ferde Grofé per l'organico di Whiteman.","Ferde Grofé orchestrò Rhapsody in Blue di Gershwin per l'organico di Paul Whiteman."],"audit09-porpora-opera-nobility":["L'Opera of the Nobility, compagnia londinese attiva dal 1733, annoverò Nicola Porpora fra i compositori.","Nicola Porpora compose opere per la compagnia londinese Opera of the Nobility a partire dal 1733."],"audit22-parker-second-new-england-school":["La Second New England School annovera retrospettivamente Horatio W. Parker fra i compositori statunitensi di fine Ottocento.","Horatio W. Parker è associato dalla storiografia musicale alla Second New England School."],"integr20261018-beach-boston":["La Second New England School annovera retrospettivamente Amy Beach fra i propri compositori.","Amy Beach è associata dalla storiografia musicale alla Second New England School."]};
   const pair=additionalPairs[e.id];
   if(pair)return pair[reversed?1:0];
  }
  // Articoli e minuscole per nomi comuni di categorie: solo nella frase, non nelle bolle.
  if(e.group==="scuole"){
   if(/^(?:Cappella|Tradizione|Riforma|Polifonia|Sperimentazione|Musica|Scuola|Accademia)\b/.test(subject)&&spokenSubject===subject)
    spokenSubject="La "+subject.charAt(0).toLocaleLowerCase("it")+subject.slice(1);
   else if(/^Conservatorio\b/.test(subject)&&spokenSubject===subject)
    spokenSubject="Il "+subject.charAt(0).toLocaleLowerCase("it")+subject.slice(1);
   if(/^La (Scuola|Tradizione|Musica|Riforma)\b/.test(spokenSubject))
    spokenSubject=spokenSubject.replace(/^La ([A-ZÀ-ÖØ-Þ])/,(m,l)=>"La "+l.toLocaleLowerCase("it"));
  }
  if(e.group==="scuole"&&e.id==="lotto01-scuola-caccini")
   return reversed?"Francesca Caccini fu cantante e compositrice alla corte medicea, partecipando alle sue attività musicali e teatrali.":"Le attività musicali e teatrali della corte medicea videro Francesca Caccini fra le cantanti e compositrici.";
  if(e.group==="scuole"&&e.id==="ponte-veneziana-schutz")
   return reversed?"Heinrich Schütz studiò a Venezia con Giovanni Gabrieli e rielaborò poi quell'esperienza nella musica sacra luterana.":"La tradizione veneziana contribuì alla formazione di Heinrich Schütz attraverso l'insegnamento di Giovanni Gabrieli.";
  if(e.group==="scuole"&&e.id==="cat-scuole-stile-galante-e-sensibile-carl-philipp-emanuel-bach")
   return reversed?"Carl Philipp Emanuel Bach fu tra i principali esponenti dello stile sensibile (empfindsamer Stil), vicino ma non identico allo stile galante.":"La categoria dello stile galante e dello stile sensibile comprende Carl Philipp Emanuel Bach come protagonista dell'empfindsamer Stil.";
  if(e.group==="scuole"&&e.id==="cat-scuole-stile-galante-e-sensibile-johann-christian-bach")
   return reversed?"Johann Christian Bach fu fra i principali esponenti tedeschi dello stile galante.":"La categoria dello stile galante e dello stile sensibile comprende Johann Christian Bach soprattutto come esponente dello stile galante.";
  if(e.group==="scuole"&&e.id==="audit6-cage-indeterminazione")
   return reversed?"John Cage sperimentò processi aleatori nell'ambito della ricerca musicale americana sull'indeterminazione.":"La sperimentazione musicale americana sull'indeterminazione comprende anche le pratiche compositive aleatorie di John Cage.";
  // "di Scuola di Notre-Dame" manca della preposizione articolata.
  if(e.group==="scuole"&&reversed&&/^Scuola\b/i.test(object)&&/\bdi$/.test(fragment))
   fragment=fragment.replace(/\bdi$/,"della");
  // Prima il nome, poi la qualifica: conserva la caratterizzazione storica.
  // I testimoni medievali vanno nominati prima della lunga specificazione.
  if(e.group==="scuole"&&!reversed&&fragment==="riconosce nelle testimonianze medievali fra i maestri dell\'organum")
   return spokenSubject+" riconosce "+object+" fra i maestri dell\'organum attestati dalle testimonianze medievali.";
  // La voce di Bardi/Corsi riunisce DUE ambienti: nel verso inverso è un titolo citato.
  if(e.group==="scuole"&&object==="Camerata fiorentina e ambiente di Corsi"&&/\bnella voce$/.test(fragment))
   return spokenSubject+" "+fragment+" «"+object+"».";
  // La qualificazione di Berg e Webern segue il nome anziché precederlo.
  if(e.group==="scuole"&&!reversed&&fragment==="annoverò fra i suoi protagonisti, allievi di Schönberg")
   return spokenSubject+" annoverò "+object+" fra i suoi protagonisti, allievi di Schönberg.";
  if(e.group==="scuole"&&!reversed&&fragment==="annovera retrospettivamente fra i propri grandi protagonisti")
   return spokenSubject+" annovera retrospettivamente "+object+" fra i propri grandi protagonisti.";
  // Anticipa il nome anche quando il complemento contiene altri nomi propri.
  if(e.group==="scuole"&&!reversed){
   const reorder=[
    ["annoverarono fra i protagonisti della prima e della successiva cerchia","annoverarono", "fra i protagonisti della prima e della successiva cerchia"],
    ["annoverarono nel solo ambiente successivo di Corsi","annoverarono", "nel solo ambiente successivo di Corsi"],
    ["annoverarono fra i teorici della prima cerchia legata a Bardi","annoverarono","fra i teorici della prima cerchia legata a Bardi"],
    ["annovera fra i compositori formatisi con César Franck","annovera","fra i compositori formatisi con César Franck"],
    ["annovera fra gli allievi e continuatori del magistero di César Franck","annovera","fra gli allievi e continuatori del magistero di César Franck"],
    ["riconosce come principale riferimento didattico e compositivo","riconosce","come principale riferimento didattico e compositivo"],
    ["annoverò fra i compositori attivi a Londra dal 1733","annoverò","fra i compositori attivi a Londra dal 1733"]
   ];
   const matched=reorder.find(([pattern])=>fragment===pattern);
   if(matched)return spokenSubject+" "+matched[1]+" "+object+" "+matched[2]+".";
  }
  const pattern="annovera nella propria storia musicale come ";
  if(e.group==="scuole"&&!reversed&&fragment.startsWith(pattern))
   return spokenSubject+" annovera "+object+" nella propria storia musicale come "+fragment.slice(pattern.length)+".";
  // Le etichette dei nodi restano invariate: qui si usa solo la forma discorsiva.
  let spokenObject=object;
  if(e.group==="scuole"&&["Minimalismo","Melodramma barocco","Dodecafonia"].includes(object))spokenObject=object.charAt(0).toLocaleLowerCase("it")+object.slice(1);
  if(e.group==="scuole"&&/^(?:Teatro musicale|Sinfonismo)\b/.test(object))spokenObject=object.charAt(0).toLocaleLowerCase("it")+object.slice(1);
  if(e.group==="scuole" && /^(?:Scuola|Seconda scuola|Tradizione|Musica|Riforma|Avanguardie|Ospedali)\b/i.test(object))
   spokenObject=object.charAt(0).toLocaleLowerCase("it")+object.slice(1);
  if(e.group==="scuole" && !reversed && e.id==="ponte-darmstadt-avanguardie")
   return "I corsi estivi di Darmstadt furono un luogo di confronto fondamentale per le avanguardie.";
  if(e.group==="scuole" && !reversed && e.id==="audit8-siegfried-festival-bayreuth")
   return "Il Festival di Bayreuth fu diretto da Siegfried Wagner, che contribuì anche al rinnovamento delle pratiche di regia.";
  if(e.group==="scuole" && reversed && e.id==="ponte-darmstadt-avanguardie")
   return "Le avanguardie trovarono nei corsi estivi di Darmstadt un centro di studio e confronto.";
  if(e.group==="scuole" && reversed && e.id==="audit8-siegfried-festival-bayreuth")
   return "Siegfried Wagner assunse la guida del Festival di Bayreuth nel 1908 e contribuì alle pratiche di regia.";
  const separator=/['’]$/.test(fragment)?"":" ";
  return spokenSubject+" "+fragment+separator+spokenObject+".";
 }
 // Legami del grafo di base: etichette descrittive, non deduzioni biografiche.
 switch(e.kind){
  case "appartenenza":
  case "appartenenza-storica":
  case "appartenenza-tematica":
   return reversed?subject+" è un contesto storico o tematico a cui è collegato "+object+".":subject+" è collegato al contesto di "+object+".";
  case "ambito-geografico":
  case "origine-biografica":
   return reversed?subject+" è un riferimento geografico per "+object+".":subject+" è collegato geograficamente a "+object+".";
  case "inquadramento-storico":
  case "corrente-nel-periodo":
   return reversed?subject+" è il contesto storico nel quale si colloca "+object+".":subject+" si colloca nel contesto storico di "+object+".";
  case "relazione-storico-musicale":
  case "connessione-storico-artistica":
   return subject+" è collegato storicamente a "+object+".";
  case "maestro-allievo":
   return reversed?subject+" fu allievo di "+object+".":subject+" fu maestro di "+object+".";
  default:
   return subject+" e "+object+" sono collegati da una relazione di "+String(e.kind||"natura storica da approfondire").replace(/-/g," ")+".";
 }
}
// Il testo discorsivo omette qualificatori editoriali, non presenti nei nomi storici.
function relationSentence(e,perspectiveId=null){
 let sentence=relationSentenceBase(e,perspectiveId);
 if(e.group!=="scuole")return sentence;
 const names={"Conservatorio di Parigi e scuola di composizione":"Conservatorio di Parigi","Conservatorio di San Pietroburgo e sue trasformazioni":"Conservatorio di San Pietroburgo","Conservatorio viennese e insegnamento della composizione nell’Ottocento":"Conservatorio viennese","Cappella di corte e musica sacra di Salisburgo nel Settecento":"cappella di corte di Salisburgo","Cappella di Saint-Donatien a Bruges nel Rinascimento":"cappella di Saint-Donatien a Bruges","Cappella musicale del Duomo di Cremona nel Cinquecento":"cappella musicale del Duomo di Cremona","Cappella pontificia romana nel Cinquecento":"cappella pontificia romana","Cappella regia francese nel Quattrocento":"cappella regia francese","Cappella della cattedrale di Strasburgo nel Settecento":"cappella della cattedrale di Strasburgo","Cappella musicale della cattedrale di Siviglia nel Cinquecento":"cappella musicale della cattedrale di Siviglia","Cappella di corte di Innsbruck nel Seicento":"cappella di corte di Innsbruck","Cappella imperiale viennese del primo Settecento":"cappella imperiale viennese","Conservatorio di Milano nell’Ottocento":"Conservatorio di Milano","Cappella e teatro della corte elettorale di Bonn nel tardo Settecento":"cappella e teatro della corte elettorale di Bonn"};
 for(const [label,short] of Object.entries(names)){
  sentence=sentence.split(label).join(short);
  const lower=label.charAt(0).toLocaleLowerCase("it")+label.slice(1);
  if(lower!==label)sentence=sentence.split(lower).join(short);
 }
 sentence=sentence.replace(/nell'cappella/gi,"nella cappella");
 return sentence;
}
// Audit frasi Scuole: trasformazioni linguistiche circoscritte alle tradizioni.
const relationSentenceUnpolished=relationSentence;
relationSentence=function(e,perspectiveId=null){
 let s=relationSentenceUnpolished(e,perspectiveId);
 if(e.group!=="scuole")return s;
 const sourceLabel=e.a?.label||byId.get(e.source)?.label||e.source;
 const targetLabel=e.b?.label||byId.get(e.target)?.label||e.target;
 const reversed=perspectiveId!=null&&perspectiveId===e.target;
 const subject=reversed?targetLabel:sourceLabel;
 const object=reversed?sourceLabel:targetLabel;
 if(subject==="Ars nova francese")s=s.replace(/^Ars nova francese /,"L'ars nova francese ");
 if(subject==="Ars nova italiana")s=s.replace(/^Ars nova italiana /,"L'ars nova italiana ");
 if(subject==="Frottola delle corti italiane")s=s.replace(/^Frottola delle corti italiane /,"La tradizione della frottola nelle corti italiane ");
 if(subject==="Tradizioni inglesi elisabettiane")s=s.replace(/^Tradizioni inglesi elisabettiane /,"Le tradizioni musicali inglesi dell'età elisabettiana ").replace(/^Le tradizioni musicali inglesi dell'età elisabettiana annovera\b/,"Le tradizioni musicali inglesi dell'età elisabettiana annoverano");
 if(subject==="Tradizioni organistiche tedesche del Barocco")s=s.replace(/^Tradizioni organistiche tedesche del Barocco comprende /,"Le tradizioni organistiche tedesche del Barocco comprendono ");
 if(subject==="Stile galante ed empfindsamer Stil")s=s.replace(/^Stile galante ed empfindsamer Stil trova /,"Lo stile galante e l'empfindsamer Stil trovano ");
 if(object==="Tradizioni organistiche tedesche del Barocco")s=s.replace("nelle Tradizioni organistiche tedesche del Barocco","nell'ambito delle tradizioni organistiche tedesche del Barocco");
 if(object==="Tradizioni inglesi elisabettiane")s=s.replace("nelle Tradizioni inglesi elisabettiane","nelle tradizioni musicali inglesi dell'età elisabettiana");
 if(object==="Frottola delle corti italiane")s=s.replace("chiamata Frottola delle corti italiane","della frottola nelle corti italiane");
 if(object==="Stile galante ed empfindsamer Stil")s=s.replace("dello Stile galante ed empfindsamer Stil","dello stile galante o dello stile sensibile");
 if(object==="Madrigalismo cinquecentesco")s=s.replace("del Madrigalismo cinquecentesco","del madrigalismo cinquecentesco");
 return s;
};
// Audit integrale Scuole: forme discorsive senza alterare etichette e archi.
const schoolSentencePrior20261020=relationSentence;
const fullSchoolNames={"Modernità francese del primo Novecento":"La modernità francese del primo Novecento","Generazione italiana del 1880":"La generazione italiana del 1880","Avanguardie italiane del dopoguerra":"Le avanguardie italiane del dopoguerra","Virtuosismo e concerto romantico":"Il virtuosismo e il concerto romantico","Ripresa del contrappunto e neobarocco":"La ripresa del contrappunto e il neobarocco","Ricezione italiana della dodecafonia":"La ricezione italiana della dodecafonia","Tastiere italiane del primo Seicento":"Le pratiche tastieristiche italiane del primo Seicento","Pratiche musicali veneziane del Settecento":"Le pratiche musicali veneziane del Settecento","Oratorio inglese del Settecento":"L'oratorio inglese del Settecento","Collegium musicum di Lipsia":"Il Collegium musicum di Lipsia","Vita musicale viennese dell'Illuminismo":"La vita musicale viennese dell'Illuminismo","Futurismo":"Il futurismo","Nuova musica polacca dopo il 1956":"La nuova musica polacca dopo il 1956","Opera romantica tedesca":"L'opera romantica tedesca","Rinascita operistica inglese del Novecento":"La rinascita operistica inglese del Novecento","Pianismo e composizione romantica":"Il pianismo e la composizione romantica","Scapigliatura milanese":"La Scapigliatura milanese","Opéra-comique":"L'opéra-comique","Gruppo di Improvvisazione Nuova Consonanza":"Il Gruppo di Improvvisazione Nuova Consonanza","Ambiente musicale viennese del fin de siècle":"L'ambiente musicale viennese del fin de siècle","Jazz orchestrale e big band":"Il jazz orchestrale e le big band","Ricezione e insegnamento della dodecafonia in Francia dopo il 1945":"La ricezione e l'insegnamento della dodecafonia in Francia dopo il 1945","New England Conservatory di Boston":"Il New England Conservatory di Boston","Thomaskantorat di Lipsia nell’Ottocento":"Il Thomaskantorat di Lipsia nell’Ottocento","Thomaskantorat di Lipsia nel primo Seicento":"Il Thomaskantorat di Lipsia nel primo Seicento","Canti patriottici del Piemonte del 1847":"I canti patriottici del Piemonte del 1847","Chapel Royal inglese fra Elisabetta e gli Stuart":"La Chapel Royal inglese fra Elisabetta e gli Stuart","Abendmusiken della Marienkirche di Lubecca":"Le Abendmusiken della Marienkirche di Lubecca","Musica per il cinema del Novecento":"La musica per il cinema del Novecento","Musica afroamericana del Novecento":"La musica afroamericana del Novecento","Accademie domestiche musicali della Milano settecentesca":"Le accademie domestiche musicali della Milano settecentesca","Ambiente musicale dei Medici nella Firenze quattrocentesca":"L'ambiente musicale dei Medici nella Firenze quattrocentesca","Tradizioni organistiche tedesche del Barocco":"Le tradizioni organistiche tedesche del Barocco"};
const fullSchoolPlural=new Set(["Avanguardie italiane del dopoguerra","Virtuosismo e concerto romantico","Ripresa del contrappunto e neobarocco","Tastiere italiane del primo Seicento","Pianismo e composizione romantica","Jazz orchestrale e big band","Ricezione e insegnamento della dodecafonia in Francia dopo il 1945"]);
const fullSchoolCustom={"cat-scuole-tradizione-inglese-elisabettiana-orlando-gibbons":["La tradizione musicale inglese dell'età elisabettiana continuò sotto gli Stuart, quando operò Orlando Gibbons.","Orlando Gibbons operò soprattutto sotto i primi Stuart, proseguendo una tradizione musicale inglese precedente."],"catalogo-tradizione-cembalistica-iberica-domenico-scarlatti":["La tradizione cembalistica iberica comprende le sonate di Domenico Scarlatti composte negli ambienti delle corti portoghese e spagnola.","Domenico Scarlatti sviluppò la propria produzione per tastiera presso le corti portoghese e spagnola."],"catalogo-tradizione-cembalistica-iberica-antonio-soler":["La tradizione cembalistica iberica comprende le sonate per tastiera di Antonio Soler, attivo all'Escorial.","Antonio Soler compose sonate per tastiera nella tradizione iberica, assimilando anche l'esempio di Domenico Scarlatti."],"lotto01-scuola-frescobaldi":["Le pratiche tastieristiche italiane del primo Seicento annoverano Girolamo Frescobaldi fra i principali innovatori della toccata e del ricercare.","Girolamo Frescobaldi rinnovò toccata, ricercare e canzona per tastiera nel primo Seicento."],"lotto01-scuola-froberger":["Le pratiche tastieristiche italiane del primo Seicento raggiunsero l'Europa centrale attraverso Johann Jakob Froberger.","Johann Jakob Froberger assimilò a Roma la scrittura di Frescobaldi e la rielaborò poi nell'Europa centrale."],"lotto02-sc-handel-roma":["I circoli musicali romani accolsero Georg Friedrich Händel, autore di oratori e cantate sotto il patrocinio aristocratico.","Georg Friedrich Händel frequentò i circoli musicali di Ottoboni e Ruspoli durante il soggiorno romano."],"audit2-minimalismo-adams":["Il minimalismo fu una delle matrici del linguaggio postminimalista di John Adams.","John Adams rielaborò tecniche ripetitive minimaliste in un linguaggio compositivo personale."],"audit2-minimalismo-nyman":["Il minimalismo fu oggetto di riflessione critica e di pratica compositiva da parte di Michael Nyman.","Michael Nyman contribuì alla fortuna del termine «minimal music» e sviluppò un linguaggio compositivo personale."],"audit4-weber-opera-romantica":["L'opera romantica tedesca trovò in Der Freischütz di Carl Maria von Weber uno dei suoi modelli fondamentali.","Carl Maria von Weber contribuì allo sviluppo dell'opera romantica tedesca con Der Freischütz."],"audit4-wagner-opera-romantica":["Richard Wagner trasformò la tradizione dell'opera romantica tedesca elaborando una propria concezione del dramma musicale.","Richard Wagner rielaborò le convenzioni dell'opera romantica tedesca nel proprio progetto di dramma musicale."],"audit5-chopin-pianismo-romantico":["Il pianismo romantico fu profondamente trasformato dalla scrittura di Frédéric Chopin.","Frédéric Chopin rinnovò forme, sonorità e tecnica del pianoforte romantico."],"audit8-czerny-pianismo-romantico":["La didattica pianistica romantica trovò in Carl Czerny uno dei suoi artefici principali.","Carl Czerny sviluppò metodi e studi per pianoforte che influenzarono la formazione pianistica ottocentesca."],"audit09-zachow-marktkirche":["La Marktkirche di Halle ebbe Friedrich Wilhelm Zachow come organista e maestro del giovane Händel.","Friedrich Wilhelm Zachow fu organista alla Marktkirche di Halle e maestro del giovane Händel."],"audit8b-chadwick-nec":["Il New England Conservatory di Boston ebbe George Whitefield Chadwick fra i docenti e i direttori.","George Whitefield Chadwick insegnò e svolse incarichi direttivi al New England Conservatory di Boston."],"lotto02-sc-telemann-luther":["La tradizione della musica sacra luterana ad Amburgo si sviluppò anche attraverso l'attività di Georg Philipp Telemann.","Georg Philipp Telemann diresse la musica delle principali chiese di Amburgo nella tradizione sacra luterana."]};
relationSentence=function(e,perspectiveId=null){
 let s=schoolSentencePrior20261020(e,perspectiveId);if(e.group!=="scuole")return s;
 const reversed=perspectiveId!=null&&perspectiveId===e.target;
 const subject=(reversed?e.b?.label||byId.get(e.target)?.label:e.a?.label||byId.get(e.source)?.label)||"";
 const obj=(reversed?e.a?.label||byId.get(e.source)?.label:e.b?.label||byId.get(e.target)?.label)||"";
 if(fullSchoolCustom[e.id])return fullSchoolCustom[e.id][reversed?1:0];
 if(!reversed){
  if(fullSchoolNames[subject]&&s.startsWith(subject+" "))s=fullSchoolNames[subject]+s.slice(subject.length);
  if(fullSchoolPlural.has(subject))s=s.replace(" comprende "," comprendono ").replace(" si sviluppò "," si svilupparono ").replace(" ebbe "," ebbero ").replace(" fu "," furono ");
  if(subject==="Jazz orchestrale e big band")s=s.replace(" annovera "," annoverano ");
  if(subject==="Pratiche musicali veneziane del Settecento")s=s.replace(" vide "," videro ");
  if(subject==="Scuola luterana")s=s.replace(/^La scuola luterana/,"La tradizione musicale luterana");
 }else{
  if(obj==="Scuola luterana")s=s.replace("nella tradizione della scuola luterana","nella tradizione della musica sacra luterana");
  if(obj==="Generazione italiana del 1880")s=subject+" è ricondotto dalla storiografia alla cosiddetta generazione italiana del 1880.";
  if(obj==="Virtuosismo e concerto romantico")s=s.replace("nell'ambito di Virtuosismo e concerto romantico","nell'ambito del virtuosismo e del concerto romantico");
  if(obj==="Jazz orchestrale e big band")s=s.replace("del Jazz orchestrale e big band","del jazz orchestrale e delle big band").replace("di Jazz orchestrale e big band","del jazz orchestrale e delle big band");
  if(obj==="Modernità francese del primo Novecento")s=s.replace("Modernità francese del primo Novecento","modernità francese del primo Novecento");
  if(obj==="Avanguardie italiane del dopoguerra")s=s.replace("Avanguardie italiane del dopoguerra","avanguardie italiane del dopoguerra");
  if(obj==="Pratiche musicali veneziane del Settecento")s=s.replace("Pratiche musicali veneziane del Settecento","pratiche musicali veneziane del Settecento");
  if(obj==="Vita musicale viennese dell'Illuminismo")s=s.replace("Vita musicale viennese dell'Illuminismo","vita musicale viennese dell'Illuminismo");
  if(obj==="Musica per il cinema del Novecento")s=s.replace("Musica per il cinema del Novecento","musica per il cinema del Novecento");
  if(obj==="Musica afroamericana del Novecento")s=s.replace("Musica afroamericana del Novecento","musica afroamericana del Novecento");
  if(obj==="Opera romantica tedesca")s=s.replace("dell'Opera romantica tedesca","dell'opera romantica tedesca");
  if(obj==="Teatro musicale francese dell'Ottocento")s=s.replace("dell'teatro musicale","del teatro musicale");
  if(obj==="Futurismo")s=s.replace("del Futurismo","del futurismo");
  if(obj==="Nuova musica polacca dopo il 1956")s=s.replace("Nuova musica polacca dopo il 1956","nuova musica polacca dopo il 1956");
  if(obj==="Canti patriottici del Piemonte del 1847")s=s.replace("Canti patriottici del Piemonte del 1847","canti patriottici del Piemonte del 1847");
  if(obj==="Ambiente musicale dei Medici nella Firenze quattrocentesca")s=s.replace("nell'Ambiente musicale","nell'ambiente musicale");
 }return s;
};
// Eccezioni editoriali finali dopo la verifica bidirezionale delle 392 relazioni.
const schoolSentenceBeforeExceptions20261020=relationSentence;
const schoolAuditExceptionPairs={
 "scuola-luterana-johann-walter":["La tradizione musicale luterana si sviluppò anche grazie alle raccolte di canti e corali in tedesco curate da Johann Walter.","Johann Walter contribuì alla prima tradizione musicale luterana con raccolte di canti e corali in tedesco."],
 "scuola-luterana-michael-praetorius":["La tradizione musicale luterana fu arricchita dalle armonizzazioni e dalle composizioni corali di Michael Praetorius.","Michael Praetorius contribuì alla musica sacra luterana con composizioni vocali e rielaborazioni del corale."],
 "scuola-luterana-johann-hermann-schein":["La tradizione musicale luterana accolse, nelle opere di Johann Hermann Schein, elementi della scrittura italiana del primo Seicento.","Johann Hermann Schein adattò procedimenti della musica italiana alla propria produzione sacra luterana."],
 "scuola-luterana-samuel-scheidt":["La tradizione musicale luterana trovò in Samuel Scheidt un importante interprete delle pratiche organistiche e del corale.","Samuel Scheidt sviluppò musica organistica e rielaborazioni del corale nell'ambito della tradizione luterana."],
 "scuola-luterana-heinrich-schutz":["La tradizione musicale luterana accolse nelle opere sacre di Heinrich Schütz linguaggi concertanti maturati anche durante la sua formazione veneziana.","Heinrich Schütz rielaborò nella musica sacra luterana procedimenti italiani appresi durante la formazione a Venezia."],
 "scuola-luterana-johann-sebastian-bach":["La tradizione musicale luterana trovò nella produzione sacra di Johann Sebastian Bach una vasta sintesi di corale, cantata e Passione.","Johann Sebastian Bach rielaborò il corale e altre forme della musica sacra entro la tradizione luterana."],
 "cat-scuole-tradizione-inglese-elisabettiana-thomas-tallis":["Le tradizioni musicali inglesi fra Tudor e Stuart comprendono la produzione sacra di Thomas Tallis nell'Inghilterra Tudor.","Thomas Tallis fu una figura centrale della musica sacra inglese sotto i Tudor, precedente alla stagione dei primi Stuart."],
 "cat-scuole-tradizione-inglese-elisabettiana-william-byrd":["Le tradizioni musicali inglesi fra Tudor e Stuart comprendono l'opera vocale e strumentale di William Byrd, attivo soprattutto in età elisabettiana.","William Byrd contribuì alla musica inglese tardo-tudoriana con opere vocali e repertori per tastiera."],
 "cat-scuole-tradizione-inglese-elisabettiana-thomas-morley":["Le tradizioni musicali inglesi fra Tudor e Stuart comprendono l'opera madrigalistica di Thomas Morley, attivo sotto Elisabetta I.","Thomas Morley contribuì alla diffusione del madrigale inglese durante il regno di Elisabetta I."],
 "cat-scuole-tradizione-inglese-elisabettiana-john-dowland":["Le tradizioni musicali inglesi fra Tudor e Stuart comprendono la produzione per liuto e voce di John Dowland, attivo a cavallo dei due periodi.","John Dowland coltivò il repertorio per liuto e il canto accompagnato fra la tarda età Tudor e i primi Stuart."],
 "cat-scuole-tradizione-inglese-elisabettiana-orlando-gibbons":["Le tradizioni musicali inglesi fra Tudor e Stuart proseguirono nell'attività di Orlando Gibbons presso la Chapel Royal sotto Giacomo I.","Orlando Gibbons fu musicista della Chapel Royal sotto i primi Stuart, proseguendo tradizioni vocali e strumentali inglesi precedenti."],
 "catalogo-concerto-violinistico-italiano-benedetto-marcello":["La tradizione italiana del concerto per violino comprende i dodici Concerti a cinque, op. 1 (1708), di Benedetto Marcello, con violino solista e violoncello obbligato.","Benedetto Marcello pubblicò nel 1708 i dodici Concerti a cinque con violino solo e violoncello obbligato, op. 1, nella tradizione concertistica italiana."],
 "catalogo-neobarocco-novecento-igor-stravinskij":["La ripresa novecentesca di modelli barocchi si manifesta nel concerto neoclassico «Dumbarton Oaks» di Igor Stravinskij, ispirato ai Concerti brandeburghesi.","Igor Stravinskij riprese modelli del concerto barocco in «Dumbarton Oaks» (1938) durante la stagione neoclassica, senza per questo aderire a un'unica corrente neobarocca."],
"catalogo-tradizione-melodie-francese-gabriel-faure":["La tradizione francese della mélodie e della musica da camera annovera Gabriel Fauré fra i compositori più rappresentativi.","Gabriel Fauré contribuì allo sviluppo della mélodie francese e della musica da camera."],"catalogo-tradizione-melodie-francese-pauline-viardot":["La tradizione francese della mélodie annovera Pauline Viardot fra le sue protagoniste.","Pauline Viardot fu cantante e compositrice di liriche vocali nella cultura musicale francese dell'Ottocento."],"lotto01-scuola-hildegard":["La tradizione della monodia sacra medievale comprende le liriche spirituali e l'Ordo virtutum di Hildegard von Bingen.","Hildegard von Bingen compose liriche monodiche e l'Ordo virtutum nel contesto della vita religiosa medievale."],"lotto01-scuola-encina":["Il villancico profano e il teatro iberico fra Quattrocento e Cinquecento comprendono la produzione di Juan del Encina.","Juan del Encina compose villancicos e opere poetico-teatrali nella cultura iberica fra Quattrocento e Cinquecento."],"lotto01-scuola-caldara-roma":["I circoli aristocratici romani di oratorio e cantata accolsero Antonio Caldara, attivo al servizio dei Ruspoli.","Antonio Caldara compose oratori e cantate a Roma al servizio dei Ruspoli."],"lotto02-sc-handel-london":["L'oratorio inglese del Settecento trovò in Georg Friedrich Händel uno dei suoi principali artefici a Londra.","Georg Friedrich Händel sviluppò una propria forma di oratorio in inglese a Londra."],"lotto02-sc-telemann-stile":["Le ultime composizioni di Georg Philipp Telemann mostrano la transizione fra il tardo Barocco e nuovi gusti settecenteschi, compreso lo stile galante.","Georg Philipp Telemann accolse diversi linguaggi europei e contribuì alla transizione dal Barocco verso il gusto galante."],"lotto02-sc-ditters-galante":["Lo stile galante del tardo Settecento è riconoscibile anche in parte della produzione strumentale di Carl Ditters von Dittersdorf.","Carl Ditters von Dittersdorf coltivò tratti del gusto galante nella propria produzione strumentale."],"audit4-henry-musica-concreta":["La musica concreta annoverò Pierre Henry fra i pionieri, anche grazie alla sua collaborazione con Pierre Schaeffer.","Pierre Henry collaborò con Pierre Schaeffer e contribuì allo sviluppo della musica concreta."],"audit8-sarti-corte-russa":["La corte di Caterina II affidò incarichi e commissioni musicali a Giuseppe Sarti.","Giuseppe Sarti lavorò presso la corte di Caterina II come compositore di musica teatrale e sacra."],"audit8h-buxtehude-abendmusiken":["Le Abendmusiken della Marienkirche di Lubecca furono sviluppate e rese celebri da Dietrich Buxtehude.","Dietrich Buxtehude organizzò i concerti sacri serali delle Abendmusiken alla Marienkirche di Lubecca."],"integr20261018-cinema-korngold":["La musica per il cinema del Novecento comprende le colonne sonore di Erich Wolfgang Korngold, che vi trasferì esperienze operistiche e sinfoniche.","Erich Wolfgang Korngold trasferì nella musica cinematografica tecniche del repertorio operistico e concertistico."],"lotto02-sc-handel-halle":["Le tradizioni organistiche tedesche del Barocco contribuirono alla formazione di Georg Friedrich Händel, allievo di Zachow a Halle.","Georg Friedrich Händel studiò organo e contrappunto con Friedrich Wilhelm Zachow a Halle."]};
relationSentence=function(e,perspectiveId=null){
 let s=schoolSentenceBeforeExceptions20261020(e,perspectiveId);if(e.group!=="scuole")return s;
 const reversed=perspectiveId!=null&&perspectiveId===e.target;
 if(schoolAuditExceptionPairs[e.id])return schoolAuditExceptionPairs[e.id][reversed?1:0];
 const object=(reversed?e.a?.label||byId.get(e.source)?.label:e.b?.label||byId.get(e.target)?.label)||"";
 if(reversed){
  if(object==="Ripresa del contrappunto e neobarocco")s=s.replace("nella Ripresa del contrappunto e neobarocco","nella ripresa del contrappunto e nel neobarocco");
  if(object==="Tradizioni organistiche tedesche del Barocco")s=s.replace("Tradizioni organistiche tedesche del Barocco","tradizioni organistiche tedesche del Barocco");
  if(object==="Ricezione e insegnamento della dodecafonia in Francia dopo il 1945")s=s.replace("della Ricezione e insegnamento della dodecafonia in Francia dopo il 1945","della ricezione e dell'insegnamento della dodecafonia in Francia dopo il 1945");
 }
 return s;
};
/* END EXACT SOURCE BLOCK */
 return Object.freeze({
  render:(edge,perspectiveId=null)=>relationSentence(edge,perspectiveId),
  base:(edge,perspectiveId=null)=>relationSentenceBase(edge,perspectiveId)
 });
}
module.exports=Object.freeze({createLegacyRelationSentenceAdapter,SOURCE_BLOB_SHA,SNAPSHOT_BLOB_SHA});
