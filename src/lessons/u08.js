// Unité 8 · Bonnes vacances ! (book pp. 117–130)
// Situations: réserver en ligne (hôtel, chambre d'hôtes) · préparer sa valise · à l'aéroport · raconter ses vacances · carte postale · réclamation
// Grammar: la comparaison (1) · les verbes en -ir au présent · le passé composé (2) avec être · l'imparfait des verbes impersonnels (c'était, il y avait, il faisait)
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u08", rubrique: 4, num: 8,
  title: "Happy holidays!",
  titleFr: "Bonnes vacances !",
  pages: "Book pp. 117–130",
  opener: { fr: "Prêts pour les vacances ? Destination : le soleil !", en: "Ready for the holidays? Destination: the sun!" },
  hero: { scene: "plage", people: { "Louise": "k2", "Léa": "f3", "Marc": "m1" }, wave: ["Louise"] },
  situations: [
    ["🛏️", "Hôtel ou chambre d'hôtes ?", "booking online, comparing, hesitating: [[C'est moins cher que l'hôtel.]] [[J'hésite…]]"],
    ["🧳", "Ta valise est prête ?", "reminders and -ir verbs: [[Tu n'as pas oublié ton passeport ?]] [[Je choisis…]]"],
    ["✈️", "À l'aéroport", "check-in, boarding, delays: [[Embarquement porte 12.]]"],
    ["💌", "Une carte postale", "telling about your holiday: [[Nous sommes allés au souk. C'était génial !]]"],
    ["😮", "Ce n'est pas possible !", "a formal e-mail and a complaint: [[Madame, Monsieur…]] [[Cordialement]]"]
  ],
  goals: [
    "Understand a booking website and say which you prefer: [[Je préfère dormir dans une chambre d'hôtes.]]",
    "Hesitate: [[Euh… attends.]] · [[Je ne sais pas trop.]] · [[J'hésite.]]",
    "Compare: [[plus / moins / aussi + adjectif + que]], and [[meilleur]]",
    "Conjugate -ir verbs: [[je choisis]], [[nous finissons]], [[je pars]], [[nous sortons]]",
    "Remind someone: [[N'oubliez pas de prendre des pulls.]] · [[Tu as pensé à… ?]]",
    "Tell about your holidays with the passé composé with [[être]]: [[Je suis partie]], [[nous sommes allés]]",
    "Describe how it was: [[C'était génial.]] · [[Il faisait chaud.]] · [[Il y avait du monde.]]",
    "Write a postcard and a short formal e-mail; express surprise and sensations"
  ],
  glance: [
    ["🗣️", "Communication", "booking · preferences · hesitating · reminders · postcards · formal e-mails · sensations and surprise"],
    ["🧩", "Grammaire", "comparison · -ir verbs · passé composé with être · c'était, il y avait, il faisait"],
    ["🗂️", "Vocabulaire", "travel: accommodation, transport, services, holiday objects · at the airport · sensations and emotions"],
    ["🔊", "Phonétique", "[wa] / [wɛ̃] and [k] / [g]"],
    ["⭐", "The phrase to learn first", "[[C'était génial ! Il faisait beau et nous sommes allés à la plage.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Hotel or bed and breakfast?", titleFr: "Sur un site de réservation · Hôtel ou chambre d'hôtes ?",
      note: "Léa and Marc are booking a weekend in Brittany. Listen to how they compare and hesitate: [[moins cher que]], [[aussi confortable que]], [[J'hésite…]]",
      scene: "maison", people: { "Léa": "f3", "Marc": "m1" }, hold: { "Marc": "💻" },
      lines: [
        ["Léa", "Bon, on réserve où, pour le week-end à Brest ? À l'hôtel ?", "Right, where shall we book for the weekend in Brest? A hotel?"],
        ["Marc", "Euh… attends. Regarde cette chambre d'hôtes, « Le Clos fleuri » : elle est moins chère que l'hôtel.", "Er… wait. Look at this B&B, “Le Clos fleuri”: it's cheaper than the hotel."],
        ["Léa", "Oui, mais elle est aussi confortable ?", "Yes, but is it as comfortable?"],
        ["Marc", "Aussi confortable que l'hôtel, et plus calme : il y a un grand jardin. Et le petit déjeuner est compris !", "As comfortable as the hotel, and quieter: there's a big garden. And breakfast is included!"],
        ["Léa", "Hmm… je ne sais pas trop. J'hésite. L'hôtel est plus près de la mer.", "Hmm… I'm not sure. I can't decide. The hotel is closer to the sea."],
        ["Marc", "C'est vrai, mais je préfère loger chez l'habitant. C'est plus sympa, et le petit déjeuner est meilleur : crêpes maison !", "True, but I prefer staying with locals. It's nicer, and the breakfast is better: homemade crêpes!"],
        ["Léa", "Des crêpes ? Bon, d'accord, c'est mieux ! On réserve « Le Clos fleuri ».", "Crêpes? OK, fine, that's better! Let's book “Le Clos fleuri”."]
      ],
      glossary: [["une chambre d'hôtes", "a B&B"], ["moins / aussi / plus… que", "less / as / more… than"], ["J'hésite.", "I can't decide"], ["meilleur", "better"]]
    },
    {
      id: "d2", n: 2, title: "Is your suitcase ready?", titleFr: "À la maison · Ta valise est prête ?",
      note: "The night before leaving for Marrakech, Léa checks Marc has everything. Listen to the reminders and the -ir verbs: [[je choisis]], [[nous partons]], [[tu finis]].",
      scene: "appartement", people: { "Léa": "f3", "Marc": "m1" }, hold: { "Marc": "🧳" },
      lines: [
        ["Léa", "Marc, nous partons demain à six heures ! Tu finis ta valise ?", "Marc, we leave tomorrow at six! Are you finishing your suitcase?"],
        ["Marc", "Oui, oui… Je choisis mes vêtements : des tee-shirts, des shorts, un maillot de bain…", "Yes, yes… I'm choosing my clothes: T-shirts, shorts, a swimsuit…"],
        ["Léa", "N'oublie pas de prendre un pull : le soir, dans le désert, il fait froid.", "Don't forget to take a jumper: in the desert, it's cold at night."],
        ["Marc", "D'accord. Et la crème solaire, tu l'as ?", "OK. And have you got the sun cream?"],
        ["Léa", "Oui, dans ma trousse de toilette. Et toi, tu n'as pas oublié ton passeport ?", "Yes, in my toilet bag. And you, you haven't forgotten your passport?"],
        ["Marc", "Non, il est dans mon sac à dos, avec les billets d'avion.", "No, it's in my rucksack, with the plane tickets."],
        ["Léa", "Tu as pensé à l'adaptateur pour ton téléphone ?", "Did you think of the adapter for your phone?"],
        ["Marc", "Euh… non ! Merci, Léa ! Tu réfléchis à tout !", "Er… no! Thanks, Léa! You think of everything!"]
      ],
      glossary: [["N'oublie pas de…", "don't forget to…"], ["la crème solaire", "sun cream"], ["Tu as pensé à… ?", "did you think of…?"], ["réfléchir", "to think, to reflect"]]
    },
    {
      id: "d3", n: 3, title: "At the airport", titleFr: "À l'aéroport · Embarquement immédiat",
      note: "Check-in for the Marrakech flight. Listen to the airport words: [[l'enregistrement]], [[le bagage]], [[la carte d'embarquement]], [[la porte]].",
      scene: "aeroport", staff: "L'hôtesse", people: { "L'hôtesse": "f2", "Léa": "f3", "Marc": "m1" },
      lines: [
        ["L'hôtesse", "Bonjour ! Vos passeports, s'il vous plaît. Vous partez à Marrakech ?", "Hello! Your passports, please. You're flying to Marrakech?"],
        ["Léa", "Oui, sur le vol de dix heures trente-cinq. Nous avons deux bagages.", "Yes, on the 10.35 flight. We have two bags."],
        ["L'hôtesse", "Merci. Votre valise fait vingt-cinq kilos : c'est plus lourd que la limite. La limite, c'est vingt-trois kilos.", "Thank you. Your suitcase weighs twenty-five kilos: that's heavier than the limit. The limit is twenty-three kilos."],
        ["Marc", "Ce n'est pas possible ! Euh… je prends mes livres dans mon sac.", "That's not possible! Er… I'll take my books in my bag."],
        ["L'hôtesse", "Parfait, vingt-deux kilos. Voici vos cartes d'embarquement. L'embarquement commence à dix heures, porte douze.", "Perfect, twenty-two kilos. Here are your boarding passes. Boarding starts at ten, gate twelve."],
        ["Léa", "Le vol est à l'heure ?", "Is the flight on time?"],
        ["L'hôtesse", "Oui. Bon voyage !", "Yes. Have a good trip!"],
        ["Marc", "Merci ! Allez, on y va : les vacances commencent !", "Thanks! Come on, let's go: the holidays are starting!"]
      ],
      glossary: [["le vol", "the flight"], ["la carte d'embarquement", "the boarding pass"], ["la porte", "the gate"], ["Bon voyage !", "have a good trip!"]]
    },
    {
      id: "d4", n: 4, title: "Back from holiday", titleFr: "Au retour · C'était comment, le Maroc ?",
      note: "Léa tells her colleague about her trip. Listen to the passé composé with [[être]] ([[nous sommes allés]], [[je suis partie]]) and how she describes it: [[c'était]], [[il faisait]], [[il y avait]].",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Inès": "f2", "Léa": "f3" },
      lines: [
        ["Inès", "Alors, Léa, c'était comment, le Maroc ?", "So, Léa, how was Morocco?"],
        ["Léa", "C'était génial ! Nous sommes arrivés à Marrakech samedi. Il faisait très chaud, trente-cinq degrés !", "It was great! We arrived in Marrakech on Saturday. It was very hot, thirty-five degrees!"],
        ["Inès", "Et qu'est-ce que vous avez fait ?", "And what did you do?"],
        ["Léa", "Nous sommes allés au souk : il y avait beaucoup de monde, et ça sentait bon les épices. J'ai mangé une tanjia, un plat de viande délicieux.", "We went to the souk: there were lots of people, and it smelled of spices. I ate a tanjia, a delicious meat dish."],
        ["Inès", "Et le désert ?", "And the desert?"],
        ["Léa", "Mardi, nous sommes partis dans le désert. Nous avons fait une promenade à dos de chameau. C'était magnifique, et très silencieux. La nuit, il faisait froid !", "On Tuesday we went off into the desert. We went for a camel ride. It was magnificent, and very quiet. At night it was cold!"],
        ["Inès", "Et Marc ?", "And Marc?"],
        ["Léa", "Marc est tombé du chameau ! Mais il n'a pas eu mal. Nous sommes rentrés hier : je suis déjà triste !", "Marc fell off the camel! But he wasn't hurt. We got back yesterday: I'm already sad!"]
      ],
      glossary: [["C'était comment ?", "how was it?"], ["Il faisait chaud.", "it was hot"], ["Il y avait du monde.", "there were lots of people"], ["Nous sommes partis.", "we left / went off"]]
    },
    {
      id: "d5", n: 5, title: "A complaint", titleFr: "Au téléphone · Ce n'est pas possible !",
      note: "Monsieur Tellier phones the agency about his holiday flat. Listen to how he expresses surprise and how the agent calms him down.",
      scene: "hotel", staff: "L'agente", people: { "L'agente": "f6", "M. Tellier": "m4" },
      lines: [
        ["L'agente", "Agence Soleil Voyages, bonjour !", "Soleil Voyages agency, hello!"],
        ["M. Tellier", "Bonjour, madame. Je suis monsieur Tellier. Je suis arrivé hier à Saint-Malo et… ce n'est pas possible ! L'appartement n'a pas de vue sur la mer !", "Hello. I'm Mr Tellier. I arrived in Saint-Malo yesterday and… it's not possible! The flat has no sea view!"],
        ["L'agente", "C'est vrai ? Je ne comprends pas… Je regarde votre réservation.", "Really? I don't understand… I'll look at your booking."],
        ["M. Tellier", "Et il n'y avait pas de draps, la télévision ne marche pas, et il y a beaucoup de bruit !", "And there were no sheets, the TV doesn't work, and there's a lot of noise!"],
        ["L'agente", "Je suis désolée, monsieur. Il y a une erreur : vous êtes au numéro 12, pas au numéro 21. Nous pouvons vous proposer une réduction de trente pour cent.", "I'm sorry, sir. There's a mistake: you're at number 12, not number 21. We can offer you a thirty per cent discount."],
        ["M. Tellier", "Trente pour cent ? Hmm… D'accord, j'accepte. Mais envoyez-moi un mail de confirmation, s'il vous plaît.", "Thirty per cent? Hmm… OK, I accept. But send me a confirmation e-mail, please."],
        ["L'agente", "Bien sûr. Je vous l'envoie tout de suite. Bonnes vacances, monsieur !", "Of course. I'll send it straight away. Enjoy your holiday!"]
      ],
      glossary: [["Ce n'est pas possible !", "that can't be right!"], ["C'est vrai ?", "really?"], ["une réduction", "a discount"], ["un mail de confirmation", "a confirmation e-mail"]]
    }
  ],

  vocab: [
    { t: "l'hôtel", en: "the hotel", pic: "🏨", cat: "L'hébergement", g: "m" },
    { t: "la chambre d'hôtes", en: "the B&B", pic: "🏡", cat: "L'hébergement", g: "f" },
    { t: "le camping", en: "the campsite", pic: "⛺", cat: "L'hébergement", g: "m" },
    { t: "l'auberge de jeunesse", en: "the youth hostel", pic: "🛏️", cat: "L'hébergement", g: "f" },
    { t: "la location", en: "the holiday rental", pic: "🔑", cat: "L'hébergement", g: "f" },
    { t: "loger chez l'habitant", en: "to stay with locals", pic: "🏘️", cat: "L'hébergement" },
    { t: "réserver", en: "to book", pic: "💻", cat: "L'hébergement" },
    { t: "le petit déjeuner compris", en: "breakfast included", pic: "🥐", cat: "Les services" },
    { t: "le wifi gratuit", en: "free wifi", pic: "📶", cat: "Les services" },
    { t: "la piscine", en: "the swimming pool", pic: "🏊", cat: "Les services", g: "f" },
    { t: "le parking", en: "the car park", pic: "🅿️", cat: "Les services", g: "m" },
    { t: "la vue sur la mer", en: "the sea view", pic: "🌊", cat: "Les services", g: "f" },
    { t: "l'avion", en: "the plane", pic: "✈️", cat: "Le transport", g: "m" },
    { t: "le vol", en: "the flight", pic: "🛫", cat: "Le transport", g: "m" },
    { t: "le billet", en: "the ticket", pic: "🎫", cat: "Le transport", g: "m" },
    { t: "un aller simple", en: "a one-way ticket", pic: "➡️", cat: "Le transport", g: "m" },
    { t: "un aller-retour", en: "a return ticket", pic: "🔁", cat: "Le transport", g: "m" },
    { t: "l'aéroport", en: "the airport", pic: "🛬", cat: "À l'aéroport", g: "m" },
    { t: "l'enregistrement", en: "check-in", pic: "🛂", cat: "À l'aéroport", g: "m" },
    { t: "le bagage", en: "the piece of luggage", pic: "🧳", cat: "À l'aéroport", g: "m" },
    { t: "la carte d'embarquement", en: "the boarding pass", pic: "🎟️", cat: "À l'aéroport", g: "f" },
    { t: "la porte", en: "the gate", pic: "🚪", cat: "À l'aéroport", g: "f" },
    { t: "l'embarquement", en: "boarding", pic: "🚶", cat: "À l'aéroport", g: "m" },
    { t: "à l'heure ≠ retardé", en: "on time ≠ delayed", pic: "⏱️", cat: "À l'aéroport" },
    { t: "la valise", en: "the suitcase", pic: "🧳", cat: "Les objets de vacances", g: "f" },
    { t: "le passeport", en: "the passport", pic: "🛂", cat: "Les objets de vacances", g: "m" },
    { t: "la crème solaire", en: "sun cream", pic: "🧴", cat: "Les objets de vacances", g: "f" },
    { t: "les lunettes de soleil", en: "sunglasses", pic: "🕶️", cat: "Les objets de vacances", g: "pl" },
    { t: "le maillot de bain", en: "the swimsuit", pic: "🩱", cat: "Les objets de vacances", g: "m" },
    { t: "la trousse de toilette", en: "the toilet bag", pic: "🪥", cat: "Les objets de vacances", g: "f" },
    { t: "l'adaptateur", en: "the plug adapter", pic: "🔌", cat: "Les objets de vacances", g: "m" },
    { t: "le chapeau", en: "the hat", pic: "👒", cat: "Les objets de vacances", g: "m" },
    { t: "choisir", en: "to choose", pic: "👉", cat: "Les verbes en -ir" },
    { t: "finir", en: "to finish", pic: "🏁", cat: "Les verbes en -ir" },
    { t: "réfléchir", en: "to think, reflect", pic: "🤔", cat: "Les verbes en -ir" },
    { t: "partir", en: "to leave, go away", pic: "🛫", cat: "Les verbes en -ir" },
    { t: "sortir", en: "to go out", pic: "🚪", cat: "Les verbes en -ir" },
    { t: "dormir", en: "to sleep", pic: "😴", cat: "Les verbes en -ir" },
    { t: "J'ai chaud. ≠ J'ai froid.", en: "I'm hot. ≠ I'm cold.", pic: "🥵", cat: "Les sensations" },
    { t: "Ça sent bon !", en: "It smells good!", pic: "👃", cat: "Les sensations" },
    { t: "C'est doux.", en: "It's soft.", pic: "🧸", cat: "Les sensations" },
    { t: "C'est silencieux.", en: "It's quiet.", pic: "🤫", cat: "Les sensations" },
    { t: "C'est coloré.", en: "It's colourful.", pic: "🌈", cat: "Les sensations" },
    { t: "C'est délicieux !", en: "It's delicious!", pic: "😋", cat: "Les sensations" },
    { t: "L'air est sec.", en: "The air is dry.", pic: "🏜️", cat: "Les sensations" },
    { t: "content(e), ravi(e)", en: "happy, delighted", pic: "😊", cat: "Les émotions" },
    { t: "triste", en: "sad", pic: "😢", cat: "Les émotions" },
    { t: "surpris(e)", en: "surprised", pic: "😮", cat: "Les émotions" },
    { t: "la joie", en: "joy", pic: "🥳", cat: "Les émotions", g: "f" },
    { t: "la décontraction", en: "relaxation", pic: "😌", cat: "Les émotions", g: "f" }
  ],

  grammar: [
    {
      id: "g-pref",
      title: "Preferring and hesitating",
      body: [
        "To give a preference: [[Je préfère dormir à l'hôtel.]] · [[J'aime mieux partir à la mer.]] · [[C'est mieux.]] · [[Je choisis toujours l'hôtel.]]",
        "To hesitate: [[Euh… attends.]] · [[Je ne sais pas trop.]] · [[J'hésite.]] · [[Je vais réfléchir.]]"
      ],
      info: { type: "compare", title: "🏨 Compare three ways to stay (one night for two, invented prices)", cols: [
        { head: "L'hôtel ★★★", en: "95 € · near the sea", color: "#2b59c3", pic: "🏨", lines: [["plus cher", "more expensive"], ["plus près de la mer", "closer to the sea"], ["très confortable", "very comfortable"]] },
        { head: "La chambre d'hôtes", en: "70 € · breakfast included", color: "#2f9c8a", pic: "🏡", lines: [["moins chère que l'hôtel", "cheaper than the hotel"], ["aussi confortable", "as comfortable"], ["plus calme, plus sympa", "quieter, friendlier"]] },
        { head: "Le camping", en: "25 € · tent pitch", color: "#e0a526", pic: "⛺", lines: [["le moins cher", "the cheapest"], ["moins confortable", "less comfortable"], ["plus proche de la nature", "closer to nature"]] }
      ] }
    },
    {
      id: "g-comp",
      title: "Comparing: [[plus… que]], [[moins… que]], [[aussi… que]]",
      body: [
        "To compare two things: [[plus]] (+), [[aussi]] (=), [[moins]] (−) + adjective + [[que]]: [[Le camping est moins cher que l'hôtel.]] · [[La chambre d'hôtes est aussi confortable que l'hôtel.]] · [[L'hôtel est plus près de la mer.]]",
        "The adjective still agrees: [[La chambre est plus chère.]] [[Les petits déjeuners sont meilleurs.]] Before a vowel, <b>que</b> becomes <b>qu'</b>: [[plus calme qu'à Paris]].",
        "⚠️ [[bon]] has its own comparative: <b>plus bon</b> → [[meilleur(e)(s)]]: [[Le petit déjeuner est meilleur.]] (And for the adverb <i>bien</i>: [[C'est mieux.]])"
      ],
      info: { type: "scale", title: "⚖️ The comparison scale", colors: ["#e0474f", "#e0a526", "#2f8a4f"], items: [
        { v: 10, fr: "moins cher que", en: "less expensive than", pic: "−" }, { v: 50, fr: "aussi cher que", en: "as expensive as", pic: "=" }, { v: 90, fr: "plus cher que", en: "more expensive than", pic: "+" }
      ], ends: ["−", "+"] },
      widget: {
        type: "combo", label: "Compare · pick + / = / − and an adjective",
        rows: [{ k: "plus", label: "➕ plus" }, { k: "aussi", label: "🟰 aussi" }, { k: "moins", label: "➖ moins" }],
        cols: [{ k: "cher", label: "💶 cher (le camping / l'hôtel)" }, { k: "conf", label: "🛏️ confortable (la chambre d'hôtes / l'hôtel)" }, { k: "chaud", label: "🌡️ chaud (le Maroc / la Bretagne)" }, { k: "bon", label: "🥐 bon (le petit déjeuner)" }],
        out: {
          "plus|cher": ["L'hôtel est plus cher que le camping.", "The hotel is more expensive than the campsite."], "aussi|cher": ["La location est aussi chère que l'hôtel.", "The rental is as expensive as the hotel.", "chère: agrees with location (f)"], "moins|cher": ["Le camping est moins cher que l'hôtel.", "The campsite is cheaper than the hotel."],
          "plus|conf": ["L'hôtel est plus confortable que le camping.", "The hotel is more comfortable than the campsite."], "aussi|conf": ["La chambre d'hôtes est aussi confortable que l'hôtel.", "The B&B is as comfortable as the hotel."], "moins|conf": ["Le camping est moins confortable que l'hôtel.", "The campsite is less comfortable than the hotel."],
          "plus|chaud": ["Au Maroc, il fait plus chaud qu'en Bretagne.", "It's hotter in Morocco than in Brittany.", "que → qu' before a vowel"], "aussi|chaud": ["En juillet, il fait aussi chaud à Lyon qu'à Marseille ?", "In July is it as hot in Lyon as in Marseille?"], "moins|chaud": ["En Bretagne, il fait moins chaud qu'au Maroc.", "It's less hot in Brittany than in Morocco."],
          "plus|bon": ["Ici, le petit déjeuner est meilleur qu'à l'hôtel !", "Here breakfast is better than at the hotel!", "plus bon → meilleur"], "aussi|bon": ["Le petit déjeuner est aussi bon qu'à la maison.", "Breakfast is as good as at home."], "moins|bon": ["Le café est moins bon qu'en Italie.", "The coffee is not as good as in Italy."]
        }
      }
    },
    {
      id: "g-ir",
      title: "-ir verbs: [[je choisis]] · [[je pars]]",
      body: [
        "There are two families of -ir verbs. <b>Family 1</b> ([[choisir]], [[finir]], [[réfléchir]], [[remplir]]) adds <b>-iss-</b> in the plural: [[je choisis]], [[nous choisissons]], [[ils choisissent]].",
        "<b>Family 2</b> ([[partir]], [[sortir]], [[dormir]]) drops the last consonant of the stem in the singular: [[je pars]], [[tu dors]], [[il sort]], but [[nous partons]], [[nous dormons]], [[ils sortent]].",
        "To remind someone: [[Tu as pensé à éteindre la lumière ?]] · [[Vous n'avez pas oublié votre passeport ?]] · [[N'oubliez pas de prendre des pulls.]] · [[Est-ce que vous avez vérifié vos vaccins ?]]"
      ],
      info: [
        { type: "conj", title: "🔁 choisir (-iss-) and partir", verbs: [
          { inf: "choisir", en: "to choose", forms: ["je chois|is", "tu chois|is", "il / elle / on chois|it", "nous chois|issons", "vous chois|issez", "ils / elles chois|issent"] },
          { inf: "finir", en: "to finish", forms: ["je fin|is", "tu fin|is", "il / elle / on fin|it", "nous fin|issons", "vous fin|issez", "ils / elles fin|issent"] },
          { inf: "partir", en: "to leave", forms: ["je par|s", "tu par|s", "il / elle / on par|t", "nous part|ons", "vous part|ez", "ils / elles part|ent"] }
        ], note: "[[sortir]] and [[dormir]] work like partir: [[je sors]], [[nous sortons]] · [[je dors]], [[nous dormons]]." },
        { type: "pics", title: "🧳 Ma valise · tap to hear", from: ["Les objets de vacances"] }
      ],
      widget: {
        type: "sort", label: "Which family? -iss- (like choisir) or not (like partir)",
        cols: [{ k: "iss", label: "nous …issons", color: "#2f9c8a" }, { k: "no", label: "nous …ons", color: "#e86a2e" }],
        items: [{ t: "finir", k: "iss", say: "nous finissons" }, { t: "partir", k: "no", say: "nous partons" }, { t: "réfléchir", k: "iss", say: "nous réfléchissons" }, { t: "dormir", k: "no", say: "nous dormons" }, { t: "choisir", k: "iss", say: "nous choisissons" }, { t: "sortir", k: "no", say: "nous sortons" }, { t: "remplir", k: "iss", say: "nous remplissons" }]
      }
    },
    {
      id: "g-pc-etre",
      title: "The past with [[être]]: [[je suis allé(e)]], [[nous sommes partis]]",
      body: [
        "About 15 verbs (mostly verbs of movement) and all reflexive verbs form the passé composé with [[être]] instead of avoir: [[Je suis allée au souk.]] · [[Nous sommes partis mardi.]] · [[Marc est tombé.]] They live in <b>la maison d'être</b> below.",
        "With <b>être</b>, the past participle <b>agrees with the subject</b>, like an adjective: [[il est parti]], [[elle est partie]], [[ils sont partis]], [[elles sont parties]]. (With <b>avoir</b>, no agreement: [[elle a mangé]].)",
        "Careful: [[Nous sommes allés]] (mixed group) but [[Nous sommes allées]] (only women). You usually can't hear the agreement, but you must write it!"
      ],
      info: [
        { type: "etrehouse", note: "Tap a verb to hear it. Moving <b>in</b> and <b>out</b>, <b>up</b> and <b>down</b>, <b>coming</b> and <b>going</b>, <b>born</b> and <b>dying</b>, <b>staying</b> and <b>falling</b>: all take <b>être</b>. Their opposites help you remember them in pairs." },
        { type: "merge", title: "🧩 The participle agrees with the subject (être)", rows: [
          { a: "il", b: "parti", g: "m", r: "il est parti", ex: "Marc est parti dans le désert.", no: true },
          { a: "elle", b: "+ e", g: "f", r: "elle est partie", ex: "Léa est partie en avion." },
          { a: "ils", b: "+ s", g: "pl", r: "ils sont partis", ex: "Léa et Marc sont partis mardi." },
          { a: "elles", b: "+ es", g: "pl", r: "elles sont parties", ex: "Marie et Louise sont parties à la plage." }
        ] }
      ],
      widget: {
        type: "combo", label: "Tell the trip · pick a person and a verb",
        rows: [{ k: "je_m", label: "je (Marc)" }, { k: "je_f", label: "je (Léa)" }, { k: "elle", label: "elle" }, { k: "nous", label: "nous (Léa + Marc)" }, { k: "elles", label: "elles" }],
        cols: [{ k: "aller", label: "aller au souk" }, { k: "partir", label: "partir mardi" }, { k: "arriver", label: "arriver à Marrakech" }, { k: "manger", label: "manger une tanjia (avoir!)" }],
        out: {
          "je_m|aller": ["Je suis allé au souk.", "I went to the souk."], "je_f|aller": ["Je suis allée au souk.", "I went to the souk.", "Léa: + e"], "elle|aller": ["Elle est allée au souk.", "She went to the souk."], "nous|aller": ["Nous sommes allés au souk.", "We went to the souk.", "mixed group: + s"], "elles|aller": ["Elles sont allées au souk.", "They went to the souk.", "women only: + es"],
          "je_m|partir": ["Je suis parti mardi.", "I left on Tuesday."], "je_f|partir": ["Je suis partie mardi.", "I left on Tuesday."], "elle|partir": ["Elle est partie mardi.", "She left on Tuesday."], "nous|partir": ["Nous sommes partis mardi.", "We left on Tuesday."], "elles|partir": ["Elles sont parties mardi.", "They left on Tuesday."],
          "je_m|arriver": ["Je suis arrivé à Marrakech.", "I arrived in Marrakech."], "je_f|arriver": ["Je suis arrivée à Marrakech.", "I arrived in Marrakech."], "elle|arriver": ["Elle est arrivée à Marrakech.", "She arrived in Marrakech."], "nous|arriver": ["Nous sommes arrivés à Marrakech.", "We arrived in Marrakech."], "elles|arriver": ["Elles sont arrivées à Marrakech.", "They arrived in Marrakech."],
          "je_m|manger": ["J'ai mangé une tanjia.", "I ate a tanjia.", "avoir: no agreement"], "je_f|manger": ["J'ai mangé une tanjia.", "I ate a tanjia.", "avoir: no agreement"], "elle|manger": ["Elle a mangé une tanjia.", "She ate a tanjia."], "nous|manger": ["Nous avons mangé une tanjia.", "We ate a tanjia."], "elles|manger": ["Elles ont mangé une tanjia.", "They ate a tanjia."]
        }
      }
    },
    {
      id: "g-imparfait",
      title: "How was it? [[C'était]], [[il y avait]], [[il faisait]]",
      body: [
        "To describe the <b>background</b> of a past event (the weather, the atmosphere, your impression), French uses the <b>imparfait</b>. At A1 you just need three forms: [[c'est]] → [[c'était]] · [[il y a]] → [[il y avait]] · [[il fait]] → [[il faisait]].",
        "The passé composé tells <b>what happened</b>; the imparfait describes <b>how it was</b>: [[Nous sommes allés à la plage. Il faisait beau et il y avait beaucoup de monde. C'était super !]]"
      ],
      info: { type: "compare", title: "🔄 Now → then", cols: [
        { head: "Présent", en: "now", color: "#5b6b7c", lines: ["C'est génial !", "Il y a beaucoup de monde.", "Il fait très chaud.", "Il n'y a pas de draps."] },
        { head: "Imparfait", en: "back then (a description)", color: "#9b4fb0", lines: [["C'était génial !", "it was great"], ["Il y avait beaucoup de monde.", "there were lots of people"], ["Il faisait très chaud.", "it was very hot"], ["Il n'y avait pas de draps.", "there were no sheets"]] }
      ] },
      widget: {
        type: "combo", label: "Describe the holiday · pick a place and a description",
        rows: [{ k: "cetait", label: "C'était…" }, { k: "ilfaisait", label: "Il faisait…" }, { k: "ilyavait", label: "Il y avait…" }],
        cols: [{ k: "souk", label: "🛍️ le souk" }, { k: "desert", label: "🐪 le désert" }, { k: "plage", label: "🏖️ la plage à Saint-Malo" }],
        out: {
          "cetait|souk": ["Le souk, c'était très coloré !", "The souk was very colourful!"], "ilfaisait|souk": ["Au souk, il faisait très chaud.", "In the souk it was very hot."], "ilyavait|souk": ["Il y avait beaucoup de monde et ça sentait bon les épices.", "There were lots of people and it smelled of spices."],
          "cetait|desert": ["Le désert, c'était magnifique et silencieux.", "The desert was magnificent and quiet."], "ilfaisait|desert": ["La nuit, il faisait froid.", "At night it was cold."], "ilyavait|desert": ["Il y avait des millions d'étoiles !", "There were millions of stars!"],
          "cetait|plage": ["La plage, c'était calme.", "The beach was quiet."], "ilfaisait|plage": ["Il faisait beau, mais l'eau était froide !", "The weather was nice, but the water was cold!"], "ilyavait|plage": ["Il n'y avait pas de touristes.", "There were no tourists."]
        }
      }
    },
    {
      id: "g-ecrire",
      title: "Writing a postcard and a formal e-mail",
      body: [
        "<b>A postcard</b> (to family or friends): [[Ma chère Louise,]] / [[Chère mamie,]] · [[Je t'écris de Saint-Jean-de-Luz.]] · tell what you did (passé composé) and how it was (c'était, il faisait) · [[Je t'embrasse.]] / [[Gros bisous !]]",
        "<b>A formal e-mail</b> (to a hotel, an agency): [[Madame, Monsieur,]] (or [[Bonjour,]]) · state your request clearly · end with [[Cordialement,]] or [[Bien à vous,]] + your full name.",
        "Expressing surprise: [[C'est vrai ?]] · [[Je ne comprends pas.]] · [[Ce n'est pas possible !]] · and sensations: [[Ça me plaît.]] · [[J'ai chaud / froid.]] · [[C'est coloré, silencieux, délicieux.]]"
      ],
      info: [
        { type: "postcard", caption: "💌 Louise's postcard from Marrakech · tap a line", pic: "🐪", place: "MARRAKECH · MAROC", stamp: "🇲🇦", to: ["Madame Marie Dubois", "12, rue du Port", "64500 Saint-Jean-de-Luz", "FRANCE"], lines: [
          ["Chère mamie,", "Dear Granny,"], ["Nous passons de super vacances avec papa, maman et Léa.", "We're having a great holiday with Dad, Mum and Léa."], ["Il fait très chaud et l'air est sec. Ça me plaît !", "It's very hot and the air is dry. I like it!"],
          ["Nous sommes allés au souk : ça sent bon les épices. J'ai mangé une tanjia, délicieux !", "We went to the souk: it smells of spices. I ate a tanjia, delicious!"], ["Hier, nous avons fait une promenade en chameau : c'est doux !", "Yesterday we went on a camel ride: it's soft!"], ["Gros bisous et à bientôt, Louise", "Big kisses, see you soon, Louise"]
        ] },
        { type: "card", style: "form", caption: "📧 A formal e-mail · tap a line", title: "✉️ Nouveau message", sub: "À : contact@clos-fleuri.fr · Objet : réservation du 14 au 16 juin", rows: [["Madame, Monsieur,", "", "Madame, Monsieur,"], ["Je voudrais réserver une chambre double", "du 14 au 16 juin", "Je voudrais réserver une chambre double du 14 au 16 juin."], ["Est-ce que le petit déjeuner est compris ?", "", "Est-ce que le petit déjeuner est compris ?"], ["Merci de me confirmer la réservation.", "", "Merci de me confirmer la réservation."], ["Cordialement,", "Marc Dubois", "Cordialement, Marc Dubois"]] }
      ]
    }
  ],

  expressions: [
    { fn: "Pour exprimer la préférence", fnEn: "preferring", icon: "👍", items: [
      ["Je préfère dormir à l'hôtel.", "I prefer sleeping in a hotel.", "std", true],
      ["J'aime mieux partir à la montagne.", "I'd rather go to the mountains.", "std"],
      ["C'est mieux.", "It's better.", "std", true]
    ] },
    { fn: "Pour hésiter", fnEn: "hesitating", icon: "🤔", items: [
      ["Euh… attends.", "Er… wait.", "fam", true],
      ["Je ne sais pas trop.", "I'm not really sure.", "std", true],
      ["J'hésite.", "I can't decide.", "std"]
    ] },
    { fn: "Pour rappeler quelque chose à quelqu'un", fnEn: "reminders", icon: "📌", items: [
      ["Tu as pensé à éteindre la lumière ?", "Did you remember to switch off the light?", "fam", true],
      ["Vous n'avez pas oublié votre passeport ?", "You haven't forgotten your passport?", "poli", true],
      ["N'oubliez pas de prendre des pulls.", "Don't forget to take jumpers.", "std", true],
      ["Est-ce que vous avez vérifié vos vaccins ?", "Have you checked your vaccinations?", "poli"]
    ] },
    { fn: "Pour écrire un mail formel / une carte postale", fnEn: "writing", icon: "✉️", items: [
      ["Madame, Monsieur, … Cordialement.", "Dear Sir or Madam, … Kind regards.", "sout", true],
      ["Bonjour, … Bien à vous.", "Hello, … Best wishes.", "poli"],
      ["Ma chère Louise, je t'écris de Saint-Jean-de-Luz.", "Dear Louise, I'm writing from Saint-Jean-de-Luz.", "std", true],
      ["Je t'embrasse. / Gros bisous !", "Love / Big kisses!", "fam"]
    ] },
    { fn: "Pour exprimer des sensations, une émotion positive", fnEn: "sensations", icon: "🌞", items: [
      ["Ça me plaît. C'est génial !", "I like it. It's great!", "std", true],
      ["J'ai chaud. ≠ J'ai froid.", "I'm hot. ≠ I'm cold.", "std", true],
      ["L'air est sec.", "The air is dry.", "std"],
      ["C'est coloré, silencieux, délicieux.", "It's colourful, quiet, delicious.", "std"]
    ] },
    { fn: "Pour exprimer la surprise", fnEn: "surprise", icon: "😮", items: [
      ["C'est vrai ?", "Really?", "std", true],
      ["Je ne comprends pas.", "I don't understand.", "std"],
      ["Ce n'est pas possible !", "That can't be!", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · telling about your holiday", lanes: ["Inès", "Léa"], av: ["f2", "f3"], steps: [
    { s: 0, fr: "Alors, c'était comment, tes vacances ?", en: "So, how was your holiday?" },
    { s: 1, fr: "C'était génial !", en: "It was great!", alt: ["C'était super !", "Bof, c'était nul."] },
    { s: 0, fr: "Tu es allée où ?", en: "Where did you go?" },
    { s: 1, fr: "Je suis allée au Maroc avec Marc. Il faisait très chaud !", en: "I went to Morocco with Marc. It was very hot!" },
    { s: 0, fr: "Et qu'est-ce que vous avez fait ?", en: "And what did you do?" },
    { s: 1, fr: "Nous avons visité Marrakech et nous sommes partis dans le désert.", en: "We visited Marrakech and went off into the desert." },
    { s: 0, fr: "Ça a l'air génial ! Tu as des photos ?", en: "Sounds great! Do you have any photos?" }
  ] },

  sounds: {
    intro: "Two pairs to practise: the glides [wa] (moi) and [wɛ̃] (loin), and the consonants [k] (no vibration) and [g] (with vibration).",
    letters: [
      { l: "oi · oy", name: "[wa]", tip: "Always “wa”: [[voyage]], [[la joie]], [[le soir]], [[la voiture]], [[trois]].", ex: ["le voyage", "la joie", "le soir", "choisir"] },
      { l: "oin", name: "[wɛ̃]", tip: "“w” + the nasal [ɛ̃]: [[loin]], [[moins]], [[le besoin]], [[le coin]].", ex: ["loin", "moins cher", "un coin calme", "le besoin"] },
      { l: "c · qu · k", name: "[k] · no vibration", tip: "<b>c</b> + a, o, u, or a consonant; <b>qu</b>; <b>k</b>: [[le camping]], [[le kilo]], [[quel]], [[la crème]].", ex: ["le camping", "quel voyage", "le kilo", "la crème"] },
      { l: "g · gu", name: "[g] · vibration", tip: "<b>g</b> + a, o, u, or a consonant; <b>gu</b> + e, i: [[la gare]], [[le bagage]], [[la guide]], [[grand]]. (But <b>g</b> + e, i = [ʒ]: [[la plage]].)", ex: ["la gare", "le bagage", "la guide", "grand"] }
    ],
    pairs: [
      { a: ["moi", "me"], b: ["moins", "less"], note: "[wa] / [wɛ̃]" },
      { a: ["le quai", "the platform"], b: ["le gué", "the ford"], note: "[k] / [g]" },
      { a: ["la classe", "the class"], b: ["la glace", "the ice cream"], note: "[k] / [g]" },
      { a: ["le car", "the coach"], b: ["la gare", "the station"], note: "[k] / [g]" },
      { a: ["il est parti", "he left"], b: ["elle est partie", "she left"], note: "same sound! (written agreement)" },
      { a: ["il a fait", "he did"], b: ["il faisait", "it was (weather)"], note: "passé composé / imparfait" }
    ]
  },
  classify: {
    label: "🏠 Être ou avoir ?", q: "Which auxiliary does this past sentence use?",
    options: ["être (je suis…)", "avoir (j'ai…)"],
    items: [
      { say: "Nous sommes allés au souk.", a: 0 }, { say: "J'ai mangé une tanjia.", a: 1 }, { say: "Marc est tombé du chameau.", a: 0 }, { say: "Nous avons fait une promenade.", a: 1 },
      { say: "Elle est partie en avion.", a: 0 }, { say: "Ils ont réservé une chambre d'hôtes.", a: 1 }, { say: "Je suis arrivée samedi.", a: 0 }, { say: "Tu as choisi l'hôtel ?", a: 1 },
      { say: "Nous sommes rentrés hier.", a: 0 }, { say: "Elle est restée trois jours.", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "La chambre d'hôtes est moins chère que l'hôtel.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "L'hôtel est plus près de la mer.", ok: true },
    { type: "mcq", tag: "Dialogue 1", q: "Pourquoi Léa choisit-elle la chambre d'hôtes ?", options: ["pour les crêpes du petit déjeuner", "pour la piscine", "parce qu'elle est près de la mer"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Marc a oublié son passeport.", ok: false, explain: "He forgot the adapter; his passport is in his rucksack." },
    { type: "tf", tag: "Dialogue 3", s: "La valise de Marc est trop lourde.", ok: true, explain: "25 kg; the limit is 23 kg." },
    { type: "mcq", tag: "Dialogue 3", q: "L'embarquement est…", options: ["à 10 h, porte 12", "à 10 h 35, porte 2", "à 12 h, porte 10"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "Au Maroc, il faisait froid le jour.", ok: false, explain: "[[Il faisait très chaud]] by day; cold at night in the desert." },
    { type: "tf", tag: "Dialogue 5", s: "Monsieur Tellier accepte la réduction de 30 %.", ok: true },
    { type: "fill", tag: "Comparaison", sentence: "Le camping est ___ cher que l'hôtel.", options: ["moins", "aussi", "meilleur"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "Les chambres d'hôtes sont ___ confortables que les hôtels.", options: ["aussi", "autant", "même"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "Dans cette location, le petit déjeuner est ___ . (bon, +)", options: ["plus bon", "meilleur", "mieux"], answer: 1 },
    { type: "fill", tag: "Comparaison", sentence: "Il fait plus chaud ___ en Bretagne.", options: ["qu'", "que", "de"], answer: 0, explain: "que → qu' before a vowel" },
    { type: "type", tag: "Comparaison", q: "Compare (−): les auberges de jeunesse / les hôtels (cher). → Les auberges de jeunesse sont …", answers: ["Les auberges de jeunesse sont moins chères que les hôtels.", "moins chères que les hôtels"], explain: "auberges: feminine plural → chères" },
    { type: "fill", tag: "Verbes en -ir", sentence: "Tu ___ des vêtements chauds.", options: ["choisis", "choisit", "choisissez"], answer: 0 },
    { type: "fill", tag: "Verbes en -ir", sentence: "Vous ___ de déjeuner et nous partons.", options: ["finissez", "finez", "finisez"], answer: 0 },
    { type: "fill", tag: "Verbes en -ir", sentence: "Nous ___ demain matin.", options: ["partons", "partissons", "pars"], answer: 0 },
    { type: "fill", tag: "Verbes en -ir", sentence: "Ils ___ très bien à l'hôtel.", options: ["dorment", "dormissent", "dors"], answer: 0 },
    { type: "fill", tag: "Passé composé (être)", sentence: "Mon voisin ___ parti au Mexique.", options: ["est", "a", "sont"], answer: 0 },
    { type: "fill", tag: "Passé composé (être)", sentence: "Clara est ___ à la gare.", options: ["arrivé", "arrivée", "arrivés"], answer: 1, explain: "être → agreement: Clara (f) → arrivée" },
    { type: "fill", tag: "Passé composé (être)", sentence: "Nous ___ allées à la plage.", options: ["avons", "sommes", "êtes"], answer: 1 },
    { type: "type", tag: "Passé composé (être)", q: "Passé composé: « Marc, tu (aller) à Ouarzazate ? »", answers: ["Marc, tu es allé à Ouarzazate ?", "tu es allé", "es allé"] },
    { type: "type", tag: "Passé composé (être)", q: "Passé composé: « Elle (partir) en avion. »", answers: ["Elle est partie en avion.", "est partie", "Elle est partie en avion"] },
    { type: "type", tag: "Passé composé (être)", q: "Passé composé: « Mon amie (venir) chez moi en vacances. »", answers: ["Mon amie est venue chez moi en vacances.", "est venue"] },
    { type: "fill", tag: "C'était…", sentence: "Les vacances à Saint-Malo, ___ bien !", options: ["c'était", "il faisait", "il y avait"], answer: 0 },
    { type: "fill", tag: "C'était…", sentence: "___ très beau : trente degrés !", options: ["Il faisait", "C'était", "Il y avait"], answer: 0 },
    { type: "fill", tag: "C'était…", sentence: "___ beaucoup de monde dans les rues.", options: ["Il y avait", "Il faisait", "C'était"], answer: 0 },
    { type: "mcq", tag: "Écrire", q: "How do you end a formal e-mail to a hotel?", options: ["Cordialement, Marc Dubois", "Gros bisous !", "À plus !"], answer: 0 },
    { type: "mcq", tag: "Écrire", q: "How do you start a postcard to your grandmother?", options: ["Chère mamie,", "Madame, Monsieur,", "Cordialement,"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu n'as pas oublié ton passeport ?", options: ["Non, il est dans mon sac.", "Si, je suis partie.", "C'était génial !"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "C'était comment, tes vacances ?", options: ["Super ! Il faisait beau tous les jours.", "Je vais partir en juillet.", "Je préfère l'hôtel."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il n'y a pas de chambre à votre nom, monsieur.", options: ["Ce n'est pas possible ! J'ai réservé !", "Avec plaisir !", "Bon voyage !"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la carte d'embarquement", "la porte", "l'enregistrement", "la crème solaire"], answer: 3, explain: "la crème solaire is a holiday object; the others are airport words." },
    { type: "order", tag: "Construisez", en: "We went to the souk and it was great!", words: ["Nous", "sommes", "allés", "au", "souk", "et", "c'était", "génial", "!"] }
  ],

  roleplays: [
    { title: "🛏️ Choisir un hébergement", brief: "With a friend, choose between a hotel and a campsite for a weekend. Compare and hesitate before deciding.", memo: ["moins cher", "plus confortable", "J'hésite…", "Je préfère…"], partner: "f3", you: "m1",
      turns: [
        { them: "On réserve l'hôtel ou le camping ?", themEn: "Shall we book the hotel or the campsite?", hint: "Hesitate.", you: "Euh… je ne sais pas trop. J'hésite.", youEn: "Er… I'm not sure. I can't decide." },
        { them: "Le camping est moins cher.", themEn: "The campsite is cheaper.", hint: "Say yes, but the hotel is more comfortable.", you: "Oui, mais l'hôtel est plus confortable que le camping.", youEn: "Yes, but the hotel is more comfortable than the campsite." },
        { them: "Et le camping a une piscine !", themEn: "And the campsite has a pool!", hint: "Change your mind: you prefer the campsite then.", you: "Une piscine ? Alors je préfère le camping, c'est mieux !", youEn: "A pool? Then I prefer the campsite, that's better!" }
      ] },
    { title: "✈️ À l'enregistrement", brief: "You check in for a flight to Dakar. Answer the agent and ask about boarding.", memo: ["passeport", "1 bagage", "porte ?", "à l'heure ?"], partner: "f2", you: "m3",
      turns: [
        { them: "Bonjour ! Votre passeport, s'il vous plaît. Vous partez où ?", themEn: "Hello! Your passport, please. Where are you flying to?", hint: "Give your passport, say Dakar.", you: "Bonjour, voilà mon passeport. Je pars à Dakar.", youEn: "Hello, here's my passport. I'm going to Dakar." },
        { them: "Vous avez des bagages ?", themEn: "Do you have any luggage?", hint: "One suitcase.", you: "Oui, une valise.", youEn: "Yes, one suitcase." },
        { them: "Voici votre carte d'embarquement.", themEn: "Here's your boarding pass.", hint: "Ask which gate, and if the flight is on time.", you: "Merci. C'est quelle porte ? Et le vol est à l'heure ?", youEn: "Thank you. Which gate is it? And is the flight on time?" },
        { them: "Porte 8. Il est retardé de trente minutes.", themEn: "Gate 8. It's delayed by thirty minutes.", hint: "Express surprise.", you: "C'est vrai ? Trente minutes ! Bon, merci.", youEn: "Really? Thirty minutes! Oh well, thanks." }
      ] },
    { title: "💌 Raconte tes vacances", brief: "A friend asks about your last holiday. Use the passé composé (être and avoir) and c'était / il faisait / il y avait.", memo: ["je suis allé(e)", "c'était…", "il faisait…", "il y avait…"], partner: "f2", you: "f3",
      turns: [
        { them: "Tu es partie où, cet été ?", themEn: "Where did you go this summer?", hint: "Say where you went, and with whom.", you: "Je suis allée en Grèce avec ma sœur.", youEn: "I went to Greece with my sister." },
        { them: "C'était comment ?", themEn: "How was it?", hint: "Great; describe the weather.", you: "C'était génial ! Il faisait très beau.", youEn: "It was great! The weather was beautiful." },
        { them: "Qu'est-ce que vous avez fait ?", themEn: "What did you do?", hint: "Two activities (one with être, one with avoir).", you: "Nous sommes allées à la plage tous les jours et nous avons visité des îles.", youEn: "We went to the beach every day and visited some islands." },
        { them: "Il y avait beaucoup de touristes ?", themEn: "Were there lots of tourists?", hint: "Answer with il y avait.", you: "Oui, il y avait beaucoup de monde en août !", youEn: "Yes, it was very crowded in August!" }
      ] }
  ],

  ateliers: [
    { title: "Écrire une liste de voyage", intro: "In groups, choose a destination, write a packing list, then swap lists: can the other groups guess where you're going?",
      steps: [["Préparation", ["As a class, write holiday destinations on the board.", "In groups, choose one secretly and ask yourselves: What's the weather like? What will we do?"]], ["Réalisation", ["Write your list (without naming the destination): [[deux pulls]], [[une crème solaire]], [[un adaptateur]]…", "Swap lists with another group."]], ["Présentation", ["Guess their destination: [[Des vêtements chauds et des skis ? Vous partez à la montagne !]]", "Compare the lists as a class."]]],
      phrases: ["N'oublie pas…", "Il faut prendre…", "Vous partez au / en / à… ?"] },
    { title: "Réserver un voyage sur un site", tech: true, intro: "Plan a holiday for another group: they say what they want, you find two trips on a French-language travel website, and they choose.",
      steps: [["Préparation", ["In groups, decide your holiday project: destination, dates, budget, type of accommodation, activities.", "Write your choices on a sheet and swap with another group."]], ["Réalisation", ["Read their project and find two possible trips on a travel website.", "Present the two trips to them."]], ["Présentation", ["They compare the two trips ([[plus cher]], [[moins loin]], [[aussi confortable]]) and choose.", "In front of the class, say which trip you chose and why."]]],
      phrases: ["Le premier voyage est moins cher que le deuxième.", "Je préfère…", "J'hésite…"] }
  ],
  delf: {
    skill: "Production écrite", title: "Entraînement · write a postcard (about 40 words)",
    about: "A typical DELF A1 writing task: <i>You are on holiday. You write a postcard to a French friend: say where you are, what you did, what the weather is like and what you like.</i> Read Louise's model card in the Grammaire tab, then check your knowledge of the conventions.",
    tips: ["Answer every point of the instruction: where, what you did, the weather, your impressions.", "Use the passé composé for what you did (with être or avoir!), c'était / il faisait for descriptions.", "Begin and end like a real card: <i>Cher Paul, … Je t'embrasse / Bisous.</i>", "Aim for about 40 words: not 15, not 100."],
    docs: [{ type: "postcard", pic: "🏔️", place: "CHAMONIX · FRANCE", stamp: "🇫🇷", to: ["Paul Martin", "8, rue de la Paix", "69002 Lyon"], lines: [["Cher Paul,", ""], ["Je t'écris de Chamonix ! Je suis arrivée samedi.", ""], ["Il fait froid mais il fait beau.", ""], ["Hier, j'ai fait du ski et je suis tombée trois fois !", ""], ["C'est magnifique ici, ça me plaît beaucoup.", ""], ["Je t'embrasse, Anna", ""]] }],
    items: [
      { type: "mcq", q: "Where is Anna?", options: ["à Chamonix, à la montagne", "à Lyon", "à la plage"], answer: 0 },
      { type: "mcq", q: "Which instruction point is in her card?", options: ["what she did and the weather", "the price of her hotel", "her phone number"], answer: 0 },
      { type: "mcq", q: "« je suis tombée » : why tombée with -e?", options: ["Anna is a woman, and tomber takes être", "because of « trois fois »", "it's a mistake"], answer: 0 },
      { type: "mcq", q: "Which sentence is correct for your own card?", options: ["Nous sommes allés au musée et nous avons mangé une fondue.", "Nous avons allés au musée.", "Nous sommes mangé une fondue."], answer: 0 },
      { type: "mcq", q: "Which is a good description sentence?", options: ["C'était très beau et il faisait chaud.", "C'est été très beau.", "Il était chaud."], answer: 0 },
      { type: "mcq", q: "Which is NOT a good ending for a card to a friend?", options: ["Cordialement, Anna Dupont", "Je t'embrasse !", "Gros bisous, à bientôt !"], answer: 0, explain: "Cordialement is for formal e-mails." }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🌍 « Les Français n'aiment pas voyager à l'étranger » ? (figures quoted in the book)", unit: " %", items: [
      { fr: "restent en Europe", en: "of trips abroad stay in Europe (favourite: Spain)", v: 74, pic: "🇪🇺" },
      { fr: "vont en Afrique", en: "go to Africa", v: 11.5, pic: "🌍" },
      { fr: "vont en Amérique", en: "go to the Americas", v: 8.3, pic: "🌎" },
      { fr: "vont en Asie", en: "go to Asia", v: 5.5, pic: "🌏" }
    ], note: "The book quotes 21.7 million French people travelling abroad each year: about 33 % of the population." }
  ],
  culture: [
    { icon: "🧳", kind: "Oh, le cliché !", t: "« Les Français n'aiment pas voyager à l'étranger. »", d: "Partly true: most French holidays are in France! But according to the figures in the book, 21.7 million French people (a third of the population) go abroad every year, mostly in Europe, and their favourite destination is Spain." },
    { icon: "🏡", kind: "Civilisation", t: "Culture voyage : les chambres d'hôtes", d: "A <b>chambre d'hôtes</b> is a room in a private house, with breakfast, run by the owners: a friendly way to discover a region and its food (crêpes in Brittany!)." },
    { icon: "🎨", kind: "Civilisation", t: "Le voyage extraordinaire de Delacroix", d: "In 1832 the painter <b>Eugène Delacroix</b> travelled to Morocco. He filled notebooks with drawings of the colours and the light, which inspired his “orientalist” paintings for the rest of his life." },
    { icon: "✍️", kind: "Francophonie", t: "Écrivains voyageurs", d: "French-language travel writers: <b>Alexandra David-Néel</b> (the first European woman in Lhasa, 1924), <b>Blaise Cendrars</b>, <b>Joseph Kessel</b>, and the Swiss <b>Nicolas Bouvier</b>, whose <i>L'Usage du monde</i> (1963) tells his road trip from Geneva to Afghanistan." },
    { icon: "🔌", kind: "Au fait !", t: "Plugs", d: "The electric current and plugs are not the same everywhere! In continental Europe you need a two-pin plug (230 V); in the UK, North America or Asia, take an <b>adaptateur</b>." },
    { icon: "🏖️", kind: "Au fait !", t: "Les grandes vacances", d: "In France, the long summer holidays last about two months (July–August). On the first weekends of July and August the roads are jammed: <i>les grands départs</i>!" }
  ],
  tips: [
    { icon: "🏠", t: "Draw the maison d'être", d: "Draw a house and put the être verbs around it in pairs: arriver / partir, entrer / sortir, monter / descendre, naître / mourir, aller / venir, rester, tomber, retourner, passer." },
    { icon: "🎭", t: "Passé composé vs imparfait", d: "Think of a film: the passé composé is the <b>action</b> (Nous sommes allés…), the imparfait is the <b>scenery</b> (Il faisait beau, il y avait du monde)." },
    { icon: "⚖️", t: "bon → meilleur", d: "Never say <s>plus bon</s>: [[meilleur]]. And for actions: [[mieux]]: [[Il cuisine mieux que moi.]]" }
  ],
  mistakes: [
    ["Le camping est moins cher de l'hôtel.", "Le camping est moins cher que l'hôtel.", "comparison + que"],
    ["Le petit déjeuner est plus bon.", "Le petit déjeuner est meilleur.", "bon → meilleur"],
    ["Nous choisons l'hôtel.", "Nous choisissons l'hôtel.", "-iss- in the plural"],
    ["Je partis demain.", "Je pars demain.", "partir: je pars"],
    ["J'ai allé au Maroc.", "Je suis allé(e) au Maroc.", "aller takes être"],
    ["Elle est parti.", "Elle est partie.", "agreement with être"],
    ["C'est était génial.", "C'était génial.", "c'était"],
    ["Cordialement, gros bisous !", "Cordialement, Marc Dubois", "formal ending, no kisses!"]
  ]
});
