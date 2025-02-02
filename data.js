const unlockDate = new Date("2024-11-01T00:00:00");

const wineries = [
  {
    name: "Franz Haas",
    wine: "Vigneti delle Dolomiti IGT Manna",
    location: "Alto Adige",
    city: "Montagna, BZ",
    coordinates: [46.4102, 11.3548],
    description:
      "Un vino di straordinaria eleganza che rappresenta l'apice dell'enologia altoatesina. Al naso si presenta con un bouquet ampio e stratificato: le note floreali di tiglio e biancospino si intrecciano con sentori di pesca bianca, litchi e pompelmo. La componente minerale, tipica dei terreni dolomitici, emerge con eleganti note di pietra focaia e grafite. L'affinamento in barrique conferisce al Chardonnay e al Sauvignon complessità aromatica con delicate note vanigliate e di pan brioche, mentre la vinificazione in acciaio di Riesling e Traminer preserva la verticalità e la tensione aromatica. Al palato mostra una struttura monumentale ma perfettamente equilibrata, sostenuta da una freschezza vibrante e una sapidità pronunciata. Esame visivo: giallo paglierino brillante con riflessi verdolini, consistenza ricca e setosa. Il finale, estremamente persistente, rivela un'elegante progressione di agrumi canditi, spezie dolci e sensazioni salmastre.",
    image: "imgs/Franz Haas.jpg",
    type: "bianco",
    website: "www.franz-haas.it",
    characteristics: {
      primary: ["floreale", "minerale"],
      secondary: ["fruttato", "speziato"],
      intensity: {
        floreale: 5,
        minerale: 4,
        fruttato: 4,
        speziato: 3,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 4,
      persistenza: 5,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 5,
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "95/100 Wine Advocate",
      "94/100 James Suckling",
    ],
    grapes: ["Riesling", "Chardonnay", "Traminer Aromatico", "Sauvignon Blanc"],
    aging:
      "10 mesi sui lieviti con bâtonnage periodici, Chardonnay e Sauvignon in barrique, Riesling e Traminer in acciaio",
    food_pairing: {
      ideale: [
        "Risotto agli asparagi",
        "Pesce al forno con erbe aromatiche",
        "Carni bianche delicate",
      ],
      consigliato: [
        "Formaggi freschi di malga",
        "Crostacei alla griglia",
        "Primi piatti con funghi porcini",
      ],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Borgogna grande",
    },
  },
  {
    name: "Villa Bucci",
    wine: "Verdicchio dei Castelli di Jesi Classico Superiore DOCG",
    location: "Marche",
    city: "Ostra Vetere, AN",
    coordinates: [43.4724, 13.2463],
    description:
      "Un Verdicchio che rappresenta la quintessenza del terroir marchigiano, frutto di viticoltura biologica e di una profonda comprensione del vitigno. Al naso si sviluppa con maestosa complessità: il bouquet si apre con note di pesca gialla, albicocca matura e mandorla fresca, evolvendosi verso sentori di camomilla, finocchio selvatico e timo. La componente minerale, derivata dai suoli calcareo-argillosi, si esprime attraverso intense note di pietra bagnata e iodio. L'attacco al palato è di straordinaria freschezza, bilanciata da una struttura glicerica importante e una sapidità marina che conferisce profondità. Esame visivo: giallo paglierino carico con riflessi dorati, consistenza densa e vellutata. La persistenza è notevole, caratterizzata dal tipico finale ammandorlato del Verdicchio, arricchito da ritorni agrumati e speziati.",
    image: "imgs/Villa Bucci.jpg",
    type: "bianco",
    website: "www.villabucci.com",
    characteristics: {
      primary: ["fruttato", "minerale"],
      secondary: ["mandorlato", "floreale"],
      intensity: {
        fruttato: 5,
        minerale: 5,
        mandorlato: 3,
        floreale: 4,
      },
    },
    taste_profile: {
      dolcezza: 1,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4,
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "93/100 Wine Enthusiast",
      "Corona Vinibuoni d'Italia",
    ],
    grapes: ["Verdicchio 100% da vigneti biologici"],
    aging: "6 mesi in acciaio sulle fecce fini con bâtonnage settimanali",
    food_pairing: {
      ideale: [
        "Brodetto di pesce all'anconetana",
        "Baccalà in potacchio",
        "Coniglio in porchetta",
      ],
      consigliato: [
        "Olive all'ascolana",
        "Frutti di mare gratinati",
        "Formaggi di media stagionatura",
      ],
      temperatura_servizio: "12-14°C",
      calice_consigliato: "Borgogna medio",
    },
  },
  {
    name: "Masciarelli",
    wine: "Trebbiano d'Abruzzo DOC",
    location: "Abruzzo",
    city: "San Martino sulla Marrucina, CH",
    coordinates: [42.35, 14.15],
    description:
      "Un'interpretazione moderna e raffinata del Trebbiano d'Abruzzo, che sfida gli stereotipi di questo vitigno. Al naso offre un bouquet fresco e invitante di agrumi, pera williams e fiori di campo, con sottili note minerali che richiamano la pietra bagnata. La vinificazione in acciaio esalta la purezza del frutto e la tipicità varietale. Al palato si distingue per una notevole freschezza acidula, ben bilanciata da una struttura media e una piacevole sapidità. Esame visivo: giallo paglierino tenue con riflessi verdolini, consistenza fluida e brillante. Il finale rivela una persistenza media con piacevoli ritorni fruttati e una delicata nota ammandorlata tipica del vitigno.",
    image: "imgs/Masciarelli.jpg",
    type: "bianco",
    website: "www.masciarelli.it",
    characteristics: {
      primary: ["fruttato", "minerale"],
      secondary: ["floreale", "agrumato"],
      intensity: {
        fruttato: 4,
        minerale: 4,
        floreale: 3,
        agrumato: 5,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 3,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 4,
    },
    awards: [
      "Quattro Viti Associazione Italiana Sommelier",
      "91/100 Wine Spectator",
      "Due Bicchieri Gambero Rosso",
    ],
    grapes: ["Trebbiano d'Abruzzo 100%"],
    aging: "6 mesi in acciaio con periodici bâtonnage, 3 mesi in bottiglia",
    food_pairing: {
      ideale: [
        "Spaghetti alla chitarra con pallottine",
        "Frittura di paranza",
        "Pesce azzurro alla griglia",
      ],
      consigliato: ["Formaggi freschi", "Antipasti di mare", "Zuppe di legumi"],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Tulipano medio",
    },
  },
  {
    name: "Cantina di Santadi",
    wine: "Cala Silente - Vermentino di Sardegna DOC",
    location: "Sardegna",
    city: "Santadi, SU",
    coordinates: [39.0833, 8.7167],
    description:
      "Il Cala Silente è un perfetto ambasciatore del Vermentino sardo. L'affinamento sui lieviti in vasche di cemento conferisce al vino complessità e rotondità, mantenendo intatta la tipicità varietale. Al naso si presenta con intense note di agrumi mediterranei, erbe aromatiche e fiori di macchia mediterranea, con un sottofondo salino che richiama la brezza marina. Al palato è fresco e sapido, con una struttura media e un perfetto equilibrio. Esame visivo: giallo paglierino luminoso con riflessi verdolini, consistenza fluida ed elegante. Il finale è persistente con un elegante ritorno delle note agrumate e minerali caratteristiche del territorio costiero.",
    image: "imgs/Cantina di Santadi.jpg",
    type: "bianco",
    website: "www.cantinadisantadi.it",
    characteristics: {
      primary: ["agrumato", "minerale"],
      secondary: ["floreale", "fruttato"],
      intensity: {
        agrumato: 5,
        minerale: 4,
        floreale: 3,
        fruttato: 4,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4,
    },
    awards: [
      "Medaglia d'Oro Concours Mondial Bruxelles",
      "92/100 Falstaff",
      "Due Bicchieri Gambero Rosso",
    ],
    grapes: ["Vermentino 100%"],
    aging:
      "4 mesi sui lieviti in vasche di cemento, 2 mesi di affinamento in bottiglia",
    food_pairing: {
      ideale: [
        "Fregola ai frutti di mare",
        "Bottarga di muggine grattugiata",
        "Arselle alla marinara",
      ],
      consigliato: ["Pesci alla griglia", "Crostacei", "Antipasti di mare"],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Tulipano medio",
    },
  },
  {
    name: "Pieropan",
    wine: "Calvarino - Soave Classico DOC",
    location: "Veneto",
    city: "Soave, VR",
    coordinates: [45.4219, 11.2266],
    description:
      "Il Calvarino di Pieropan è l'espressione più pura e tradizionale del Soave Classico. La maturazione in cemento per un anno conferisce al vino complessità preservando la freschezza. Al naso si apre con eleganti note di fiori bianchi, mandorla fresca e frutta a polpa bianca, arricchite da sottili sfumature minerali che richiamano la pietra vulcanica. Al palato esprime una perfetta armonia tra freschezza e struttura, con una sapidità ben integrata. Esame visivo: giallo paglierino brillante con riflessi verdolini, consistenza scorrevole e fine. Il finale è lungo e persistente, con un caratteristico ritorno di mandorla dolce e note minerali.",
    image: "imgs/Pieropan.jpg",
    type: "bianco",
    website: "www.pieropan.it",
    characteristics: {
      primary: ["floreale", "minerale"],
      secondary: ["fruttato", "mandorlato"],
      intensity: {
        floreale: 5,
        minerale: 4,
        fruttato: 4,
        mandorlato: 3,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 4,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 5,
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "94/100 Decanter",
      "95/100 James Suckling",
    ],
    grapes: ["Garganega 70%", "Trebbiano di Soave 30%"],
    aging: "12 mesi in cemento con periodici bâtonnage",
    food_pairing: {
      ideale: [
        "Risotto all'isolana",
        "Pesce d'acqua dolce al forno",
        "Carni bianche delicate",
      ],
      consigliato: [
        "Formaggi freschi locali",
        "Zuppe di verdure",
        "Primi piatti con asparagi",
      ],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Renano medio",
    },
  },
  {
    name: "Vigneti Massa",
    wine: "Derthona - Timorasso Colli Tortonesi DOC",
    location: "Piemonte",
    city: "Monleale, AL",
    coordinates: [44.8833, 8.9667],
    description:
      "Il Derthona di Walter Massa è un vino che ha riscoperto e valorizzato il vitigno Timorasso. La breve macerazione sulle bucce e l'affinamento in acciaio e cemento donano al vino complessità e longevità. Al naso presenta un bouquet articolato di frutti bianchi maturi, erbe aromatiche e intense note minerali, con sfumature di idrocarburi che ricordano il Riesling. Esame visivo: giallo paglierino intenso con riflessi dorati, consistenza densa e glicerica. Al palato emerge una struttura importante sostenuta da una fresca acidità e una marcata componente minerale. Il finale è molto lungo con persistenti note di frutta matura e ritorni minerali.",
    image: "imgs/Vigneti Massa.jpg",
    type: "bianco",
    website: "vignetimassa.com",
    characteristics: {
      primary: ["minerale", "fruttato"],
      secondary: ["agrumato", "speziato"],
      intensity: {
        minerale: 5,
        fruttato: 4,
        agrumato: 3,
        speziato: 3,
      },
    },
    taste_profile: {
      dolcezza: 1,
      acidità: 4,
      corpo: 4,
      persistenza: 5,
      tannicità: 1,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 5,
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "93/100 Wine Advocate",
      "Corona Vinibuoni d'Italia",
    ],
    grapes: ["Timorasso 100%"],
    aging:
      "12 mesi tra acciaio e cemento, seguito da 6 mesi di affinamento in bottiglia",
    food_pairing: {
      ideale: [
        "Agnolotti al sugo d'arrosto",
        "Vitello tonnato",
        "Formaggi stagionati",
      ],
      consigliato: [
        "Pesci grassi",
        "Piatti al tartufo",
        "Carni bianche arrosto",
      ],
      temperatura_servizio: "12-14°C",
      calice_consigliato: "Borgogna medio",
    },
  },
  {
    name: "Arianna Occhipinti",
    wine: "SP68 Bianco - Terre Siciliane IGT",
    location: "Sicilia",
    city: "Vittoria, RG",
    coordinates: [36.9253, 14.7519],
    description:
      "Un vino naturale che esprime l'essenza della Sicilia sud-orientale. La fermentazione spontanea e l'affinamento in cemento preservano la purezza delle uve Albanello e Moscato. Al naso si presenta con un bouquet complesso di agrumi mediterranei, erbe aromatiche e fiori bianchi, con note minerali che richiamano la pietra calcarea. Esame visivo: giallo dorato brillante con leggera velatura, consistenza morbida. Al palato è secco ma avvolgente, con una freschezza ben bilanciata e una sapidità intrigante. Il finale è lungo e complesso, con un ritorno delle note aromatiche e minerali.",
    image: "imgs/Arianna Occhipinti.jpg",
    type: "bianco",
    website: "www.agricolaocchipinti.it",
    characteristics: {
      primary: ["minerale", "aromatico"],
      secondary: ["floreale", "agrumato"],
      intensity: {
        minerale: 5,
        aromatico: 4,
        floreale: 3,
        agrumato: 4,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 1,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4,
    },
    awards: ["5 Grappoli Bibenda", "95/100 Vinous", "Top 100 Wine Enthusiast"],
    grapes: ["Albanello 60%", "Moscato d'Alessandria 40%"],
    aging: "7 mesi in cemento con periodici bâtonnage",
    food_pairing: {
      ideale: ["Pasta con le sarde", "Pesce spada alla ghiotta", "Caponata"],
      consigliato: [
        "Formaggi freschi",
        "Primi piatti con verdure",
        "Pesce azzurro alla griglia",
      ],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Renano medio",
    },
  },
  {
    name: "Oltrenero",
    wine: "Cruasé - Oltrepò Pavese Metodo Classico DOCG",
    location: "Lombardia",
    city: "Casteggio, PV",
    coordinates: [44.9833, 9.15],
    description:
      "Un metodo classico rosé che rappresenta l'eccellenza dell'Oltrepò Pavese. I 36 mesi sui lieviti conferiscono grande complessità. Al naso offre un bouquet elegante di piccoli frutti rossi, crosta di pane e delicate note floreali. Esame visivo: rosa tenue brillante con riflessi ramati, perlage fine e persistente. Al palato è cremoso e avvolgente, con una freschezza ben bilanciata e una struttura elegante. Il finale è lungo e persistente, con un raffinato ritorno delle note fruttate e una delicata sensazione di lieviti.",
    image: "imgs/Oltrenero.jpg",
    type: "spumante",
    website: "www.oltrenero.it",
    characteristics: {
      primary: ["fruttato", "cremoso"],
      secondary: ["floreale", "crosta di pane"],
      intensity: {
        fruttato: 4,
        cremoso: 5,
        floreale: 3,
        "crosta di pane": 5,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 5,
      sapidità: 3,
      equilibrio: 5,
    },
    awards: [
      "4 Sfere Sparkle",
      "90/100 Wine Spectator",
      "Corona Vinibuoni d'Italia",
    ],
    grapes: ["Pinot Nero 100%"],
    aging:
      "36 mesi sui lieviti, sboccatura con liqueur d'expédition della casa",
    food_pairing: {
      ideale: [
        "Ostriche crude",
        "Carpaccio di capesante",
        "Salmone affumicato scozzese",
      ],
      consigliato: [
        "Finger food di pesce",
        "Formaggi freschi caprini",
        "Ceviche di pesce bianco",
      ],
      temperatura_servizio: "8-10°C",
      calice_consigliato: "Flûte ghiacciato",
    },
  },
  {
    name: "Puiatti",
    wine: "Ribolla Gialla Metodo Classico Brut",
    location: "Friuli Venezia Giulia",
    city: "Romans d'Isonzo, GO",
    coordinates: [45.95, 13.4167],
    description:
      "Uno spumante metodo classico che valorizza la Ribolla Gialla friulana. L'affinamento sui lieviti per oltre 20 mesi dona eleganza e complessità. Al naso presenta note fresche di fiori bianchi, mela verde e agrumi, con delicate sfumature di crosta di pane. Esame visivo: giallo paglierino brillante con riflessi verdolini, perlage fine e persistente. Al palato è fresco e dinamico, con una struttura raffinata e una sapidità ben integrata. Il finale è lungo e armonico, con un elegante ritorno delle note fruttate e minerali.",
    image: "imgs/Puiatti.jpg",
    type: "spumante",
    website: "www.puiatti.com",
    characteristics: {
      primary: ["floreale", "fresco"],
      secondary: ["fruttato", "crosta di pane"],
      intensity: {
        floreale: 4,
        fresco: 5,
        fruttato: 4,
        "crosta di pane": 3,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 5,
      sapidità: 4,
      equilibrio: 4,
    },
    awards: [
      "Due Bicchieri Gambero Rosso",
      "91/100 Wine Enthusiast",
      "4 Sfere Sparkle",
    ],
    grapes: ["Ribolla Gialla 100%"],
    aging: "20-24 mesi sui lieviti, sboccatura con dosaggio minimo",
    food_pairing: {
      ideale: [
        "Prosciutto San Daniele",
        "Antipasti di pesce crudo",
        "Risotti di mare",
      ],
      consigliato: [
        "Fritture di pesce dell'Adriatico",
        "Formaggi freschi",
        "Crostacei alla griglia",
      ],
      temperatura_servizio: "6-8°C",
      calice_consigliato: "Flûte",
    },
  },
  {
    name: "Isle of Harris",
    wine: "Gin",
    location: "Isole Ebridi, Scozia",
    city: "Tarbert, Isle of Harris",
    coordinates: [57.9914, -6.8583],
    description:
      "Un gin artigianale eccezionale che incarna l'anima selvaggia delle Ebridi scozzesi. La botanica distintiva del Sugar Kelp, raccolta sostenibilmente dalle acque cristalline dell'isola, conferisce un carattere marino unico. Al naso si sviluppa un'armoniosa sinfonia di ginepro fresco e agrumi succosi, accompagnata da intriganti note marine e delicate sfumature floreali. Esame visivo: cristallino e brillante con ottima viscosità. Al palato rivela strati complessi: il ginepro domina inizialmente, seguito da note agrumate vivaci e un'elegante mineralità marina. Il finale è lungo e persistente con un caratteristico ritorno delle note marine e speziate.",
    image: "imgs/Isle of Harris.jpg",
    type: "spirits",
    website: "www.harrisdistillery.com",
    characteristics: {
      primary: ["agrumato", "marino"],
      secondary: ["speziato", "floreale", "erbaceo"],
      intensity: {
        agrumato: 5,
        marino: 4,
        speziato: 3,
        floreale: 2,
        erbaceo: 3,
      },
    },
    taste_profile: {
      dolcezza: 1,
      acidità: 0,
      corpo: 4,
      persistenza: 5,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 5,
    },
    awards: [
      "Double Gold San Francisco World Spirits Competition 2023",
      "Best Scottish Gin - World Gin Awards",
      "Gold - International Wine & Spirit Competition",
    ],
    grapes: [],
    aging:
      "Nessun invecchiamento, distillazione in alambicco tradizionale in rame",
    food_pairing: {
      ideale: [
        "Gin Tonic Premium con agrumi freschi",
        "Gin Martini con twist di limone",
        "Negroni contemporaneo",
      ],
      consigliato: ["Ostriche", "Salmone affumicato", "Frutti di mare crudi"],
      temperatura_servizio: "8-10°C",
      calice_consigliato: "Coppa gin balloon ghiacciata",
    },
  },
  {
    name: "Serafini & Vidotto",
    wine: "Bollicine di Prosecco Extra Dry DOC",
    location: "Veneto",
    city: "Nervesa della Battaglia, TV",
    coordinates: [45.8333, 12.1833],
    description:
      "Un Prosecco che esprime con finezza l'eleganza del territorio di Nervesa della Battaglia. Al naso presenta un bouquet fresco e invitante di fiori bianchi, in particolare glicine e acacia, seguito da note di mela golden, pera williams e delicati sentori di agrumi. Esame visivo: giallo paglierino brillante con riflessi verdolini, perlage fine e persistente che forma una corona cremosa. Al palato si distingue per la sua freschezza vivace e una piacevole morbidezza, ben equilibrata da una sapidità delicata. Il finale è pulito e armonioso, con un elegante ritorno delle note fruttate e floreali che ne caratterizzano il profilo aromatico.",
    image: "imgs/Serafini & Vidotto.jpg",
    type: "spumante",
    website: "www.serafinievidotto.com",
    characteristics: {
      primary: ["floreale", "fruttato"],
      secondary: ["agrumato", "minerale"],
      intensity: {
        floreale: 4,
        fruttato: 4,
        agrumato: 3,
        minerale: 2,
      },
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 3,
      tannicità: 0,
      effervescenza: 4,
      sapidità: 3,
      equilibrio: 4,
    },
    awards: [
      "Due Bicchieri Gambero Rosso",
      "90/100 Wine Enthusiast",
      "Corona Vinibuoni d'Italia",
    ],
    grapes: ["Glera 85%", "Chardonnay 15%"],
    aging: "3 mesi sui lieviti in autoclave (metodo Martinotti-Charmat)",
    food_pairing: {
      ideale: [
        "Gamberi in tempura",
        "Baccalà mantecato",
        "Risotto alle erbe aromatiche",
      ],
      consigliato: [
        "Antipasti leggeri di pesce",
        "Formaggi freschi",
        "Fritture di verdure",
      ],
      temperatura_servizio: "6-8°C",
      calice_consigliato: "Flûte",
    },
  },
];
