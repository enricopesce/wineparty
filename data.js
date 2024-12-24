const unlockDate = new Date('2024-11-01T00:00:00');

const wineries = [
  {
    name: "Franz Haas",
    wine: "Vigneti delle Dolomiti IGT Manna",
    location: "Alto Adige",
    city: "Montagna, BZ",
    coordinates: [46.4102, 11.3548],
    description: "Un vino di straordinaria eleganza che rappresenta l'apice dell'enologia altoatesina. Al naso si presenta con un bouquet ampio e stratificato: le note floreali di tiglio e biancospino si intrecciano con sentori di pesca bianca, litchi e pompelmo. La componente minerale, tipica dei terreni dolomitici, emerge con eleganti note di pietra focaia e grafite. L'affinamento in barrique conferisce al Chardonnay e al Sauvignon complessità aromatica con delicate note vanigliate e di pan brioche, mentre la vinificazione in acciaio di Riesling e Traminer preserva la verticalità e la tensione aromatica. Al palato mostra una struttura monumentale ma perfettamente equilibrata, sostenuta da una freschezza vibrante e una sapidità pronunciata. Il finale, estremamente persistente, rivela un'elegante progressione di agrumi canditi, spezie dolci e sensazioni salmastre. La temperatura di servizio ideale è 10-12°C, preferibilmente in calici ampi tipo Borgogna per apprezzarne la complessa evoluzione aromatica.",
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
        speziato: 3
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 4,
      persistenza: 5,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 5
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "95/100 Wine Advocate",
      "94/100 James Suckling"
    ],
    grapes: ["Riesling", "Chardonnay", "Traminer Aromatico", "Sauvignon Blanc"],
    aging: "10 mesi sui lieviti",
    food_pairing: {
      ideale: [
        "Risotto agli asparagi",
        "Pesce al forno con erbe aromatiche",
        "Carni bianche delicate"
      ],
      consigliato: [
        "Formaggi freschi di malga",
        "Crostacei alla griglia",
        "Primi piatti con funghi porcini"
      ],
      temperatura_servizio: "10-12°C",
      calice_consigliato: "Borgogna grande"
    }
  },
  {
    name: "Villa Bucci",
    wine: "Verdicchio dei Castelli di Jesi",
    location: "Marche",
    city: "Ostra Vetere, AN",
    coordinates: [43.4724, 13.2463],
    description: "Un Verdicchio che rappresenta la quintessenza del terroir marchigiano, frutto di viticoltura biologica e di una profonda comprensione del vitigno. Al naso si sviluppa con maestosa complessità: il bouquet si apre con note di pesca gialla, albicocca matura e mandorla fresca, evolvendosi verso sentori di camomilla, finocchio selvatico e timo. La componente minerale, derivata dai suoli calcareo-argillosi, si esprime attraverso intense note di pietra bagnata e iodio. L'attacco al palato è di straordinaria freschezza, bilanciata da una struttura glicerica importante e una sapidità marina che conferisce profondità. La persistenza è notevole, caratterizzata dal tipico finale ammandorlato del Verdicchio, arricchito da ritorni agrumati e speziati. L'evoluzione nel bicchiere rivela continuamente nuove sfaccettature aromatiche. Temperatura di servizio consigliata 12-14°C in calici ampi per permettere la piena espressione aromatica.",
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
        floreale: 4
      }
    },
    taste_profile: {
      dolcezza: 1,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "93/100 Wine Enthusiast",
      "Corona Vinibuoni d'Italia"
    ],
    grapes: ["Verdicchio"],
    aging: "6 mesi in acciaio",
    food_pairing: {
      ideale: [
        "Brodetto di pesce all'anconetana",
        "Baccalà in potacchio",
        "Coniglio in porchetta"
      ],
      consigliato: [
        "Olive all'ascolana",
        "Frutti di mare gratinati",
        "Formaggi di media stagionatura"
      ],
      temperatura_servizio: "12-14°C",
      calice_consigliato: "Borgogna medio"
    }
  },
  {
    name: "Masciarelli",
    wine: "Trebbiano d'Abruzzo",
    location: "Abruzzo",
    city: "San Martino sulla Marrucina, CH",
    coordinates: [42.3500, 14.1500],
    description: "Un'interpretazione moderna e raffinata del Trebbiano d'Abruzzo, che sfida gli stereotipi di questo vitigno. Al naso offre un bouquet fresco e invitante di agrumi, pera williams e fiori di campo, con sottili note minerali che richiamano la pietra bagnata. La vinificazione in acciaio esalta la purezza del frutto e la tipicità varietale. Al palato si distingue per una notevole freschezza acidula, ben bilanciata da una struttura media e una piacevole sapidità. Perfetto con i piatti della cucina abruzzese come gli spaghetti alla chitarra con pallottine, ma anche con pesci azzurri alla griglia, fritture di paranza e formaggi freschi. Ha ricevuto le Quattro Viti dell'Associazione Italiana Sommelier, 91/100 da Wine Spectator e i Due Bicchieri del Gambero Rosso.",
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
        agrumato: 5
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 3,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 4
    },
    awards: [
      "Quattro Viti Associazione Italiana Sommelier",
      "91/100 Wine Spectator",
      "Due Bicchieri Gambero Rosso"
    ],
    grapes: ["Trebbiano"],
    aging: "Acciaio e bottiglia"
  },
  {
    name: "Cantina di Santadi",
    wine: "Vermentino di Sardegna",
    location: "Sardegna",
    city: "Santadi, SU",
    coordinates: [39.0833, 8.7167],
    description: "Il Cala Silente è un perfetto ambasciatore del Vermentino sardo. L'affinamento sui lieviti in vasche di cemento conferisce al vino complessità e rotondità, mantenendo intatta la tipicità varietale. Al naso si presenta con intense note di agrumi mediterranei, erbe aromatiche e fiori di macchia mediterranea, con un sottofondo salino che richiama la brezza marina. Al palato è fresco e sapido, con una struttura media e un perfetto equilibrio. Eccellente con la cucina di mare sarda, come la fregola ai frutti di mare, bottarga di muggine grattugiata e arselle alla marinara. Ottimo anche con pesci alla griglia e crostacei. Medaglia d'Oro al Concours Mondial de Bruxelles, 92/100 Falstaff e Due Bicchieri del Gambero Rosso.",
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
        fruttato: 4
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4
    },
    awards: [
      "Medaglia d'Oro Concours Mondial Bruxelles",
      "92/100 Falstaff",
      "Due Bicchieri Gambero Rosso"
    ],
    grapes: ["Vermentino"],
    aging: "Cemento sui lieviti"
  },
  {
    name: "Pieropan",
    wine: "Soave Classico",
    location: "Veneto",
    city: "Soave, VR",
    coordinates: [45.4219, 11.2266],
    description: "Il Calvarino di Pieropan è l'espressione più pura e tradizionale del Soave Classico. La maturazione in cemento per un anno conferisce al vino complessità preservando la freschezza. Al naso si apre con eleganti note di fiori bianchi, mandorla fresca e frutta a polpa bianca, arricchite da sottili sfumature minerali che richiamano la pietra vulcanica. Ideale con i primi piatti della tradizione veneta come il risotto all'isolana, ma anche con pesce d'acqua dolce al forno, carni bianche delicate e formaggi freschi locali. Tre Bicchieri del Gambero Rosso 2023, 94/100 da Decanter e 95/100 da James Suckling.",
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
        mandorlato: 3
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 4,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 0,
      sapidità: 4,
      equilibrio: 5
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "94/100 Decanter",
      "95/100 James Suckling"
    ],
    grapes: ["Garganega", "Trebbiano di Soave"],
    aging: "12 mesi in cemento"
  },
  {
    name: "Vigneti Massa",
    wine: "Derthona",
    location: "Piemonte",
    city: "Monleale, AL",
    coordinates: [44.8833, 8.9667],
    description: "Il Derthona di Walter Massa è un vino che ha riscoperto e valorizzato il vitigno Timorasso. La breve macerazione sulle bucce e l'affinamento in acciaio e cemento donano al vino complessità e longevità. Al naso presenta un bouquet articolato di frutti bianchi maturi, erbe aromatiche e intense note minerali, con sfumature di idrocarburi che ricordano il Riesling. Si sposa perfettamente con piatti strutturati come agnolotti al sugo d'arrosto, vitello tonnato e formaggi stagionati. Ottimo anche con pesci grassi come il salmone e piatti a base di tartufo. Tre Bicchieri del Gambero Rosso 2023, 93/100 Wine Advocate e Corona Vinibuoni d'Italia.",
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
        speziato: 3
      }
    },
    taste_profile: {
      dolcezza: 1,
      acidità: 4,
      corpo: 4,
      persistenza: 5,
      tannicità: 1,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 5
    },
    awards: [
      "Tre Bicchieri Gambero Rosso 2023",
      "93/100 Wine Advocate",
      "Corona Vinibuoni d'Italia"
    ],
    grapes: ["Timorasso"],
    aging: "Acciaio e cemento, 6 mesi in bottiglia"
  },
  {
    name: "Arianna Occhipinti",
    wine: "Terre Siciliane",
    location: "Sicilia",
    city: "Vittoria, RG",
    coordinates: [36.9253, 14.7519],
    description: "Un vino naturale che esprime l'essenza della Sicilia sud-orientale. La fermentazione spontanea e l'affinamento in cemento preservano la purezza delle uve Albanello e Moscato. Al naso si presenta con un bouquet complesso di agrumi mediterranei, erbe aromatiche e fiori bianchi, con note minerali che richiamano la pietra calcarea. Perfetto con la cucina siciliana di mare, come pasta con le sarde, pesce spada alla ghiotta e caponata. Ottimo anche con formaggi freschi e primi piatti con le verdure. 5 Grappoli Bibenda, 95/100 Vinous e inserito nella Top 100 di Wine Enthusiast.",
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
        agrumato: 4
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 1,
      effervescenza: 0,
      sapidità: 5,
      equilibrio: 4
    },
    awards: [
      "5 Grappoli Bibenda",
      "95/100 Vinous",
      "Top 100 Wine Enthusiast"
    ],
    grapes: ["Albanello", "Moscato d'Alessandria"],
    aging: "7 mesi in cemento"
  },
  {
    name: "Oltrenero",
    wine: "Oltrepò Pavese",
    location: "Lombardia",
    city: "Casteggio, PV",
    coordinates: [44.9833, 9.1500],
    description: "Un metodo classico rosé che rappresenta l'eccellenza dell'Oltrepò Pavese. I 36 mesi sui lieviti conferiscono grande complessità. Al naso offre un bouquet elegante di piccoli frutti rossi, crosta di pane e delicate note floreali. Il perlage è fine e persistente. Ideale come aperitivo, si abbina perfettamente con antipasti di pesce crudo, risotto alla milanese e salumi delicati. Ottimo anche con crostacei e pesci grassi. 4 Sfere Sparkle, 90/100 Wine Spectator e Corona Vinibuoni d'Italia.",
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
        "crosta di pane": 5
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 5,
      sapidità: 3,
      equilibrio: 5
    },
    awards: [
      "4 Sfere Sparkle",
      "90/100 Wine Spectator",
      "Corona Vinibuoni d'Italia"
    ],
    grapes: ["Pinot Nero"],
    aging: "36 mesi sui lieviti",
    food_pairing: {
      ideale: [
        "Ostriche crude",
        "Carpaccio di capesante",
        "Salmone affumicato scozzese"
      ],
      consigliato: [
        "Finger food di pesce",
        "Formaggi freschi caprini",
        "Ceviche di pesce bianco"
      ],
      temperatura_servizio: "8-10°C",
      calice_consigliato: "Coppa cocktail ghiacciata"
    }
  },
  {
    name: "Puiatti",
    wine: "Vino Spumante Ribolla Gialla",
    location: "Friuli Venezia Giulia",
    city: "Romans d'Isonzo, GO",
    coordinates: [45.9500, 13.4167],
    description: "Uno spumante metodo classico che valorizza la Ribolla Gialla friulana. L'affinamento sui lieviti per oltre 20 mesi dona eleganza e complessità. Al naso presenta note fresche di fiori bianchi, mela verde e agrumi, con delicate sfumature di crosta di pane. Il perlage è fine e persistente. Perfetto con il prosciutto San Daniele, ottimo con antipasti di pesce, risotti delicati e fritture di pesce dell'Adriatico. Ideale anche come aperitivo. Due Bicchieri Gambero Rosso, 91/100 Wine Enthusiast e 4 Sfere Sparkle.",
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
        "crosta di pane": 3
      }
    },
    taste_profile: {
      dolcezza: 2,
      acidità: 4,
      corpo: 3,
      persistenza: 4,
      tannicità: 0,
      effervescenza: 5,
      sapidità: 4,
      equilibrio: 4
    },
    awards: [
      "Due Bicchieri Gambero Rosso",
      "91/100 Wine Enthusiast",
      "4 Sfere Sparkle"
    ],
    grapes: ["Ribolla Gialla"],
    aging: "20-24 mesi sui lieviti"
  },
  {
    name: "Isle of Harris",
    wine: "Gin",
    location: "Isole Ebridi, Scozia",
    city: "Tarbert, Isle of Harris",
    coordinates: [57.9914, -6.8583],
    description: "Un gin artigianale eccezionale che incarna l'anima selvaggia delle Ebridi scozzesi. La botanica distintiva del Sugar Kelp, raccolta sostenibilmente dalle acque cristalline dell'isola, conferisce un carattere marino unico e inconfondibile. Al naso si sviluppa un'armoniosa sinfonia di ginepro fresco e agrumi succosi, accompagnata da intriganti note marine e delicate sfumature floreali che evocano la brezza costiera. Il palato rivela strati complessi di sapori: il ginepro domina inizialmente, seguito da note agrumate vivaci e un'elegante mineralità marina. Perfetto per gin tonic premium con guarnizioni di agrumi freschi e rametti di rosmarino locale. Eccelle in cocktail raffinati come il Martini dry con twist di limone o il Negroni contemporaneo. Si sposa magnificamente con frutti di mare crudi, in particolare ostriche e carpacci. La distillazione in piccoli lotti in alambicchi di rame tradizionali garantisce un controllo qualitativo eccezionale.",
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
        erbaceo: 3
      }
    },
    taste_profile: {
      dolcezza: 1,
      sapidità: 5,
      intensità: 4,
      persistenza: 5,
      complessità: 4
    },
    awards: [
      "Double Gold San Francisco World Spirits Competition 2023",
      "Best Scottish Gin - World Gin Awards",
      "Gold - International Wine & Spirit Competition",
      "Master Medal - The Gin Masters 2023"
    ],
    botanicals: [
      "Sugar Kelp delle Ebridi",
      "Ginepro selezionato",
      "Coriandolo biologico",
      "Angelica",
      "Scorza d'arancia siciliana",
      "Scorza di lime",
      "Cubebe indonesiano",
      "Cassia",
      "Radice di iris toscano"
    ],
    distillation: "Alambicco tradizionale in rame, distillazione in piccoli lotti",
    sustainability: "Raccolta sostenibile delle alghe, packaging eco-friendly, energia rinnovabile",
    food_pairing: {
      ideale: [
        "Ostriche crude",
        "Carpaccio di capesante",
        "Salmone affumicato scozzese"
      ],
      consigliato: [
        "Finger food di pesce",
        "Formaggi freschi caprini",
        "Ceviche di pesce bianco"
      ],
      temperatura_servizio: "8-10°C",
      calice_consigliato: "Coppa cocktail ghiacciata"
    }
  }
];