/* La misura e la rivoluzione — dati musicali.
   Le misure sono la base analitica stabile; i secondi vengono calibrati sulla
   registrazione scelta. "provisional" indica che il sincronismo va ancora
   verificato all'ascolto prima della pubblicazione didattica definitiva. */
window.CLASSICISMO_LISTENINGS = {
  "mozart-k466-1": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Concerto in re minore K.466 · I movimento",
    videoId:"_y6ZpoQrZzc",
    purpose:"Pubblico, attesa orchestrale e ingresso del solista",
    layers:["organico"],
    events:[]
  },

  "mozart-k545-1": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Sonata in do maggiore K.545 · I movimento",
    videoId:"1vDxlnJVvW8",
    purpose:"Melodia/accompagnamento, frase, cadenza e geografia tonale",
    layers:["tessitura","tonalita","forma"],
    provisional:true,
    visualization:{
      type:"texture",
      lanes:[
        {label:"MELODIA",detail:"mano destra",from:0,to:68},
        {label:"ACCOMPAGNAMENTO",detail:"basso albertino",from:0,to:68}
      ]
    },
    scoreMap:[
      {bars:"1–12", form:"Tema iniziale", key:"Do maggiore", note:"Melodia chiarissima sopra basso albertino; la tonica funziona come casa."},
      {bars:"13–28", form:"Area secondaria e chiusa", key:"verso Sol maggiore", note:"La nuova stabilità è la dominante; la codetta conferma Sol."},
      {bars:"29–41", form:"Sviluppo", key:"Sol minore → Re minore → La minore → Fa", note:"Materiale già udito perde stabilità e attraversa una sequenza di regioni."},
      {bars:"42–57", form:"Inizio della ripresa", key:"Fa maggiore → Do maggiore", note:"Il tema ritorna, ma non nella tonica: ritorno tematico e ritorno tonale non coincidono."},
      {bars:"58–73", form:"Area secondaria ricomposta", key:"Do maggiore", note:"La seconda area viene ricondotta alla tonica e chiude il viaggio."}
    ],
    events:[
      {from:0,to:20,layer:"tessitura",label:"MELODIA sopra BASSO ALBERTINO"},
      {from:0,to:31,layer:"tonalita",label:"CASA · Do maggiore"},
      {from:31,to:69,layer:"tonalita",label:"ALTROVE · Sol maggiore"},
      {from:69,to:101,layer:"forma",label:"SVILUPPO · stabilità mobile"},
      {from:101,to:130,layer:"tonalita",label:"IL TEMA RITORNA · Fa maggiore"},
      {from:130,to:176,layer:"tonalita",label:"RITORNO TONALE · Do maggiore"}
    ]
  },

  "mozart-k525-1": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Eine kleine Nachtmusik K.525 · I movimento",
    videoId:"hymFgSljttg",
    purpose:"Mappa tonale intuitiva e successiva rivelazione della forma-sonata",
    layers:["tonalita","forma"],
    provisional:true,
    scoreMap:[
      {bars:"1–18", form:"Primo gruppo", key:"Sol maggiore", note:"La casa viene stabilita con estrema evidenza."},
      {bars:"19–55", form:"Transizione, secondo gruppo e codette", key:"Sol → Re maggiore", note:"La dominante diventa una nuova regione sufficientemente stabile da sembrare un altrove."},
      {bars:"56–75", form:"Sviluppo", key:"Re → aree minori → preparazione di Sol", note:"Il materiale noto attraversa una zona meno stabile e prepara il ritorno."},
      {bars:"76–fine", form:"Ripresa e coda", key:"Sol maggiore", note:"Il materiale secondario viene ricondotto alla casa."}
    ],
    conceptualMap:[
      {label:"CASA",detail:"Sol maggiore"},
      {label:"ALTROVE",detail:"Re maggiore"},
      {label:"INSTABILITÀ",detail:"sviluppo"},
      {label:"CASA",detail:"Sol maggiore"}
    ],
    visualization:{
      type:"journey",
      stages:[
        {label:"CASA",detail:"Sol maggiore",from:0,to:39},
        {label:"ALTROVE",detail:"Re maggiore",from:39,to:188},
        {label:"INSTABILITÀ",detail:"sviluppo",from:188,to:223},
        {label:"CASA",detail:"Sol maggiore",from:223,to:9999}
      ]
    },
    events:[
      {from:0,to:39,layer:"tonalita",label:"CASA · Sol maggiore"},
      {from:39,to:96,layer:"tonalita",label:"ALTROVE · verso Re maggiore"},
      {from:96,to:188,layer:"forma",label:"RIPETIZIONE DELL'ESPOSIZIONE · memoria del viaggio"},
      {from:188,to:223,layer:"forma",label:"INSTABILITÀ · sviluppo"},
      {from:223,to:328,layer:"tonalita",label:"CASA · Sol maggiore · ripresa"}
    ]
  },

  "haydn-104-1": {
    composer:"Joseph Haydn",
    title:"Sinfonia n.104 «London» · I movimento",
    videoId:"N1FUw5whO-4",
    purpose:"Lo stesso materiale può assumere una nuova funzione quando cambia il luogo tonale",
    layers:["tema","tonalita"],
    provisional:true,
    scoreMap:[
      {bars:"Adagio introduttivo",form:"Introduzione",key:"Re minore → dominante",note:"Prima dell’Allegro, Haydn oscura la tonica e costruisce una soglia solenne."},
      {bars:"Allegro · primo gruppo",form:"Esposizione",key:"Re maggiore",note:"Il materiale principale stabilisce con decisione la casa."},
      {bars:"Area secondaria",form:"Esposizione",key:"La maggiore",note:"La dominante diventa nuova stabilità, ma il materiale resta strettamente imparentato con ciò che abbiamo già ascoltato."},
      {bars:"Sviluppo",form:"Instabilità",key:"regioni mobili",note:"Il materiale viene frammentato e ricombinato mentre la stabilità tonale si indebolisce."},
      {bars:"Ripresa",form:"Ritorno",key:"Re maggiore",note:"Il materiale secondario viene ricondotto alla tonica: è la funzione tonale, non il numero dei temi, a organizzare il ritorno."}
    ],
    events:[]
  },

  "mozart-k488-1": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Concerto in la maggiore K.488 · I movimento",
    videoId:"9pwbg37Ha64",
    purpose:"La forma-sonata incontra il principio concertante e conserva nella cadenza uno spazio di invenzione",
    layers:["organico","forma","cadenza"],
    provisional:true,
    scoreMap:[
      {bars:"Apertura orchestrale",form:"Presentazione del mondo orchestrale",key:"La maggiore",note:"L’orchestra presenta e ordina il materiale prima che il solista entri."},
      {bars:"Ingresso del pianoforte",form:"Nuovo attraversamento",key:"La maggiore → Mi maggiore",note:"Il solista non si limita a ripetere: rilegge il materiale e conduce la forma verso la nuova stabilità."},
      {bars:"Sviluppo",form:"Conflitto e dialogo",key:"regioni mobili",note:"La forma-sonata e l’alternanza concertante diventano inseparabili."},
      {bars:"Ripresa",form:"Ritorno",key:"La maggiore",note:"La geografia tonale viene ricomposta mentre orchestra e pianoforte continuano a negoziare il protagonismo."},
      {bars:"Cadenza",form:"Sospensione dell’orchestra",key:"dominante → tonica",note:"L’orchestra si arresta e lascia al solista uno spazio derivato dalla tradizione improvvisativa."}
    ],
    events:[]
  },

  "haydn-op33-2": {
    composer:"Joseph Haydn",
    title:"Quartetto op.33 n.2 «Lo scherzo»",
    videoId:"NGzd11FB2o0",
    startSeconds:829,
    purpose:"Circolazione delle funzioni e aspettativa nel Finale",
    layers:["aspettativa"],
    provisional:true,
    scoreMap:[
      {bars:"Finale, ritornello iniziale", form:"A", key:"Mi bemolle maggiore", note:"Il refrain rende molto forte la memoria di ciò che dovrebbe tornare."},
      {bars:"episodi e ritorni", form:"A–B–A–C–A", key:"regioni contrastanti → tonica", note:"Il rondò educa l'orecchio ad attendere il refrain."},
      {bars:"ultime battute", form:"refrain frammentato", key:"Mi bemolle maggiore", note:"Pause sempre più destabilizzanti trasformano la conclusione in una domanda."}
    ],
    events:[
      {from:829,to:965,layer:"aspettativa",label:"IL RITORNELLO COSTRUISCE MEMORIA"},
      {from:965,to:1005,layer:"aspettativa",label:"RITORNA? · il finale comincia a giocare con l'attesa"},
      {from:1005,to:1030,layer:"aspettativa",label:"È FINITO? · pause e frammenti"},
      {from:1030,to:1055,layer:"aspettativa",label:"ADESSO? · Haydn lascia l'ascoltatore senza una conferma immediata"}
    ]
  },

  "mozart-k465": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Quartetto K.465 · Introduzione e ingresso dell’Allegro",
    videoId:"kcfDxgfHs64",
    purpose:"Quattro voci costruiscono un territorio armonicamente ambiguo prima che il Do maggiore diventi inequivocabile",
    layers:["voci","tonalita"],
    provisional:true,
    visualization:{
      type:"quartet",
      lanes:[
        {label:"Violino I",events:[{from:24,to:45}]},
        {label:"Violino II",events:[{from:18,to:40}]},
        {label:"Viola",events:[{from:12,to:34}]},
        {label:"Violoncello",events:[{from:6,to:28}]}
      ]
    },
    scoreMap:[
      {bars:"1–4",form:"Entrate successive",key:"centro tonale oscurato",note:"Violoncello, viola e violini entrano uno dopo l’altro; l’accordo percepito cambia continuamente sotto le note tenute."},
      {bars:"5–12",form:"Espansione cromatica",key:"aree instabili",note:"Semitoni, ritardi e false piste impediscono alla tonica di funzionare subito come casa."},
      {bars:"13–22",form:"Preparazione",key:"verso Do maggiore",note:"La tensione dell’Adagio prepara senza ancora banalizzare la chiarificazione successiva."},
      {bars:"23 →",form:"Allegro",key:"Do maggiore",note:"La casa diventa improvvisamente leggibile; l’ambiguità precedente acquista senso per contrasto."}
    ],
    events:[
      {from:6,to:28,layer:"voci",label:"LE VOCI ENTRANO UNA ALLA VOLTA"},
      {from:6,to:92,layer:"tonalita",label:"DOV’È CASA? · centro tonale sfocato"},
      {from:92,to:125,layer:"tonalita",label:"DO MAGGIORE · la casa si mette a fuoco"}
    ]
  },

  "mozart-k498": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Trio K.498",
    videoId:"841jxlKeAgI",
    purpose:"Pianoforte, clarinetto e viola: funzioni mobili",
    layers:["voci"],
    events:[]
  },

  "mozart-k452": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Quintetto K.452",
    videoId:"yQ_z_tMK6Bo",
    purpose:"Distribuzione della responsabilità musicale fra cinque timbri",
    layers:["voci"],
    events:[]
  },

  "beethoven-eroica-1": {
    composer:"Ludwig van Beethoven",
    title:"Sinfonia n.3 «Eroica» · I movimento",
    videoId:"pTArJBycP4Y",
    purpose:"La forma-sonata sotto pressione: sviluppo e coda dilatati",
    layers:["motivo","forma"],
    provisional:true,
    visualization:{
      type:"proportions",
      stages:[
        {label:"ESPOSIZIONE",weight:151,from:45,to:260},
        {label:"SVILUPPO",weight:243,from:260,to:650},
        {label:"RIPRESA",weight:157,from:650,to:885},
        {label:"CODA",weight:140,from:885,to:9999}
      ]
    },
    scoreMap:[
      {bars:"1–151", form:"Esposizione", key:"Mi bemolle maggiore → Si bemolle", note:"La casa è immediata, ma il Do diesis del tema incrina presto la sua stabilità."},
      {bars:"152–394 circa", form:"Sviluppo", key:"ampia mobilità tonale", note:"La zona di instabilità assume dimensioni eccezionali e introduce anche nuovo materiale."},
      {bars:"intorno a 394", form:"Soglia della ripresa", key:"dominante → Mi bemolle", note:"Il celebre ingresso del corno anticipa apparentemente il ritorno prima della piena ripresa orchestrale."},
      {bars:"395–551 circa", form:"Ripresa", key:"Mi bemolle maggiore", note:"Il ritorno ricompone la geografia ma non annulla il conflitto precedente."},
      {bars:"552–691", form:"Coda", key:"Mi bemolle maggiore con nuova elaborazione", note:"La coda è talmente estesa da assumere quasi la funzione di un ulteriore sviluppo."}
    ],
    events:[
      {from:0,to:18,layer:"motivo",label:"DUE ACCORDI · MI♭ MAGGIORE"},
      {from:18,to:45,layer:"motivo",label:"TEMA DEI VIOLONCELLI · il Do♯ incrina la casa"},
      {from:45,to:260,layer:"forma",label:"ESPOSIZIONE"},
      {from:260,to:650,layer:"forma",label:"SVILUPPO · la forma si dilata"},
      {from:650,to:885,layer:"forma",label:"RIPRESA"},
      {from:885,to:1015,layer:"forma",label:"CODA · la conclusione continua a sviluppare"}
    ]
  },

  "beethoven-5-34": {
    composer:"Ludwig van Beethoven",
    title:"Sinfonia n.5 · raccordo III–IV",
    videoId:"dhI_qDV5LwI",
    startSeconds:1220,
    purpose:"Il confine fra due movimenti si dissolve e il ciclo diventa processo continuo",
    layers:["ciclo","tonalita"],
    provisional:true,
    visualization:{
      type:"journey",
      stages:[
        {label:"III MOVIMENTO",detail:"Do minore · si svuota",from:1220,to:1270},
        {label:"PONTE",detail:"nessuna cesura",from:1270,to:1316},
        {label:"IV MOVIMENTO",detail:"Do maggiore",from:1316,to:9999}
      ]
    },
    scoreMap:[
      {bars:"III mov., ripresa finale",form:"Svuotamento",key:"Do minore",note:"Lo Scherzo perde progressivamente peso e la conclusione attesa viene rinviata."},
      {bars:"ultime battute del III",form:"Ponte",key:"dominante di Do",note:"Timpani e frammenti orchestrali mantengono il tempo in sospensione invece di chiudere."},
      {bars:"IV mov., attacco",form:"Esplosione del Finale",key:"Do maggiore",note:"La nuova tonalità irrompe senza vera cesura, con un’orchestrazione ampliata."}
    ],
    events:[
      {from:1220,to:1270,layer:"ciclo",label:"IL III MOVIMENTO SI SVUOTA · nessuna vera chiusura"},
      {from:1270,to:1316,layer:"ciclo",label:"LA LINEA DI CONFINE SI DISSOLVE"},
      {from:1270,to:1316,layer:"tonalita",label:"SOSPENSIONE · la dominante prepara il salto"},
      {from:1316,to:1355,layer:"ciclo",label:"IV MOVIMENTO · il ciclo continua senza fermarsi"},
      {from:1316,to:1355,layer:"tonalita",label:"DO MAGGIORE · luce improvvisa"}
    ]
  },

  "martines-sinfonia": {
    composer: "Marianna Martines",
    title: "Sinfonia in do maggiore",
    videoId: "EzwrrqS1638",
    purpose: "Collocare Martines dentro il linguaggio sinfonico del Classicismo, non ai margini come curiosità biografica",
    layers: ["forma"],
    events: [
      {from:0,to:320,layer:"forma",label:"I · Allegro con spirito"},
      {from:320,to:520,layer:"forma",label:"II · Andante ma non troppo"},
      {from:520,to:760,layer:"forma",label:"III · Allegro spiritoso"}
    ]
  },

  "cristofori-1720": {
    composer:"Bartolomeo Cristofori",
    title:"Pianoforte del 1720 · Metropolitan Museum",
    videoId:"S1qDC1cjm4E",
    purpose:"Vedere la differenza meccanica fra corda pizzicata e corda percossa",
    layers:["meccanica"],
    visualization:{
      type:"mechanism",
      items:[
        {label:"CLAVICEMBALO",steps:["tasto","plettro","corda pizzicata"]},
        {label:"PIANOFORTE",steps:["tasto","martelletto","corda percossa"]}
      ]
    },
    events:[]
  },

  "mozart-k622-basset": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Concerto per clarinetto K.622 · clarinetto di bassetto",
    videoId:"rvN3YDkjAjY",
    purpose:"Il registro grave aggiunto entra direttamente nella scrittura mozartiana",
    layers:["registro"],
    visualization:{
      type:"register",
      normal:["MI","FA","SOL","LA","SI","DO","RE","MI"],
      extension:["MI♭","RE","DO♯","DO"]
    },
    events:[]
  },

  "mozart-k495-horn": {
    composer:"Wolfgang Amadeus Mozart",
    title:"Concerto per corno K.495 · corno naturale",
    videoId:"aCTPve9ZGsg",
    purpose:"Serie armonica, note aperte e tecnica della mano nella campana",
    layers:["armonici"],
    visualization:{
      type:"harmonics",
      partials:["1","2","3","4","5","6","7","8","9","10","11","12"],
      message:"Il corno naturale non è un corno moderno incompleto: costruisce il proprio linguaggio dentro la serie armonica e la tecnica della mano."
    },
    events:[]
  },

  "stamitz-mannheim": {
    composer:"Johann Stamitz",
    title:"Sinfonia in mi bemolle op.11 n.3",
    videoId:"X9iC55nN_lI",
    purpose:"L’orchestra come organismo: dinamica collettiva, gesto ascendente e distribuzione fra famiglie",
    layers:["dinamica","gesto","famiglie"],
    provisional:true,
    visualization:{
      type:"orchestra",
      families:["ARCHI","OBOI","CORNI","FAGOTTI"],
      gestures:["p","crescendo","f","↗ Mannheim rocket"]
    },
    scoreMap:[
      {bars:"ascolto 1",form:"Crescendo collettivo",key:"—",note:"Non aumentano semplicemente gli strumenti: lo stesso organismo modifica insieme il proprio peso sonoro."},
      {bars:"ascolto 2",form:"Gesto ascendente",key:"—",note:"Il cosiddetto Mannheim rocket rende percepibile una direzione orchestrale, non soltanto un ornamento."},
      {bars:"ascolto 3",form:"Famiglie orchestrali",key:"—",note:"I fiati acquistano progressivamente una funzione più autonoma rispetto al corpo degli archi."}
    ],
    events:[]
  },

  "beethoven-9-4": {
    composer:"Ludwig van Beethoven",
    title:"Sinfonia n.9 · IV movimento",
    videoId:"fx827bYPBNw",
    purpose:"Il tema della Gioia passa dalla nudità strumentale alla comunità vocale",
    layers:["orchestrazione","testo"],
    provisional:true,
    visualization:{
      type:"growth",
      stages:[
        {label:"CERCA",count:1,from:0,to:175},
        {label:"UNO",count:1,from:175,to:230},
        {label:"POCHI",count:4,from:230,to:355},
        {label:"ORCHESTRA",count:10,from:355,to:410},
        {label:"VOCE",count:14,from:410,to:465},
        {label:"CORO",count:22,from:465,to:9999}
      ]
    },
    scoreMap:[
      {bars:"inizio del Finale",form:"Fanfara e recitativo strumentale",key:"Re minore / instabilità",note:"Violoncelli e contrabbassi respingono i richiami ai movimenti precedenti: il Finale sembra cercare il proprio materiale."},
      {bars:"tema della Gioia",form:"Presentazione strumentale",key:"Re maggiore",note:"Il tema nasce nei registri gravi e viene ripreso da gruppi sempre più ampi dell’orchestra."},
      {bars:"variazioni orchestrali",form:"Crescita della comunità sonora",key:"Re maggiore",note:"La melodia rimane riconoscibile mentre cambiano densità, registro e partecipazione."},
      {bars:"ingresso del baritono",form:"Recitativo vocale",key:"nuova soglia",note:"La voce umana interrompe la sola strumentalità della sinfonia e introduce Schiller."},
      {bars:"coro",form:"Ode alla gioia",key:"Re maggiore e sviluppi successivi",note:"Il tema che era stato dell’orchestra diventa parola condivisa."}
    ],
    events:[
      {from:0,to:175,layer:"orchestrazione",label:"CERCA UN NUOVO INIZIO · recitativo strumentale"},
      {from:175,to:355,layer:"orchestrazione",label:"IL TEMA NASCE · prima pochi strumenti, poi sempre di più"},
      {from:355,to:410,layer:"orchestrazione",label:"LA COMUNITÀ SONORA SI ALLARGA"},
      {from:410,to:465,layer:"testo",label:"ENTRA LA VOCE · «O Freunde…»"},
      {from:465,to:620,layer:"testo",label:"FRATELLANZA · il tema diventa parola e coro"}
    ]
  }
};