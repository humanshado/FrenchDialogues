// Unité 2 · On va où ? (book pp. 33–46)
// Situations: présenter une ville (Bordeaux, Paris, Montréal) · demander / indiquer le chemin (Strasbourg) · se déplacer en métro et en bus (Lille)
// Grammar: articles définis et indéfinis · verbes en -er au présent · quel · masculin / féminin des professions · aller, prendre, descendre
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U02_PLAN = {
  streets: [
    { p: [[20, 60], [385, 60]], name: "rue des Bœufs", dy: -10, dx: 60 },
    { p: [[20, 130], [385, 130]], name: "rue du Marché", dy: -10, dx: -62 },
    { p: [[20, 200], [385, 200]], name: "rue des Arcades", dy: -10, dx: 60 },
    { p: [[80, 15], [80, 222]], name: "rue Vauban", dx: -12, dy: 60 },
    { p: [[200, 15], [200, 222]], name: "rue du Dôme", dx: -12, dy: 64 },
    { p: [[320, 15], [320, 222]], name: "rue Mercière", dx: -12, dy: 64 }
  ],
  river: [[0, 242], [120, 236], [260, 244], [400, 238]],
  parks: [[218, 214, 84, 16]],
  places: [
    { id: "cath", x: 352, y: 34, pic: "⛪", name: "la cathédrale", c: "#9b4fb0" },
    { id: "ot", x: 238, y: 90, pic: "ℹ️", name: "l'office de tourisme", c: "#2b59c3" },
    { id: "mairie", x: 290, y: 222, pic: "🏛️", name: "la mairie", c: "#e0474f" },
    { id: "gare", x: 40, y: 104, pic: "🚉", name: "la gare", c: "#5b6b7c" },
    { id: "biblio", x: 120, y: 34, pic: "📚", name: "la bibliothèque", c: "#2f9c8a" },
    { id: "police", x: 115, y: 166, pic: "🚓", name: "la police", c: "#1f2a44" },
    { id: "musee", x: 362, y: 166, pic: "🖼️", name: "le musée", c: "#e86a2e" }
  ],
  route: [[200, 130], [200, 60], [320, 60], [336, 46]],
  here: [200, 130]
};
LESSONS.push({
  id: "u02", rubrique: 1, num: 2,
  title: "Where are we going?",
  titleFr: "On va où ?",
  pages: "Book pp. 33–46",
  opener: { fr: "Excusez-moi, je suis perdue. La cathédrale, s'il vous plaît ?", en: "Excuse me, I'm lost. The cathedral, please?" },
  hero: { scene: "ville", people: { "La guide": "f3", "Kenji": "m6", "Paula": "f5" }, wave: ["La guide"] },
  situations: [
    ["🏛️", "Bienvenue à Bordeaux", "present a town: [[Ici, c'est la place de la Bourse. Et là-bas, il y a le fleuve.]]"],
    ["🧭", "Strasbourg et son centre-ville", "ask and give directions: [[Vous prenez la première rue à droite.]]"],
    ["🚇", "Se déplacer à Lille", "metro and bus: [[Tu prends la ligne 2, tu changes à…, tu descends à…]]"],
    ["🚲", "À pied ou en bus ?", "how people get around, and their jobs: [[Elle est coiffeuse, elle va au travail à vélo.]]"]
  ],
  goals: [
    "Present a town and its sights: [[Voici la cathédrale.]] · [[C'est près d'ici.]]",
    "Choose [[un]] / [[une]] / [[des]] or [[le]] / [[la]] / [[les]]",
    "Ask the way: [[Excusez-moi, je cherche la rue des Bœufs.]] · [[Où est la gare, s'il vous plaît ?]]",
    "Give directions: [[tout droit]], [[à gauche]], [[à droite]], [[la première rue]], [[traverser]]",
    "Conjugate regular <b>-er</b> verbs and [[aller]], [[prendre]], [[descendre]]",
    "Take the metro and the bus, and ask [[Quelle ligne ?]] · [[Quel arrêt ?]]",
    "Say people's jobs in the masculine and feminine: [[un coiffeur]] / [[une coiffeuse]]",
    "Read and say big numbers: [[mille]], [[un million]], [[un milliard]]"
  ],
  glance: [
    ["🗣️", "Communication", "presenting a town · asking for and giving directions · getting around by metro and bus"],
    ["🧩", "Grammaire", "un / le · -er verbs in the present · quel, quelle · jobs in the masculine and feminine"],
    ["🗂️", "Vocabulaire", "the town: streets, places, monuments · transport · jobs · numbers 100 to 1 000 000 000"],
    ["🔊", "Phonétique", "rising and falling intonation · pronouncing -er verbs"],
    ["⭐", "The phrase to learn first", "[[Excusez-moi, où est…, s'il vous plaît ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Guided tour of Bordeaux", titleFr: "Bienvenue à Bordeaux · C'est parti pour la visite !",
      note: "A tour guide presents the old town. Listen for the phrases that <b>point</b> at things: [[ici]], [[là-bas]], [[Vous voyez… ?]], [[Ça, c'est…]], [[Voici… et voilà…]]",
      scene: "ville", people: { "La guide": "f3", "Kenji": "m6", "Paula": "f5" }, wave: ["La guide"],
      lines: [
        ["La guide", "Bonjour à tous et bienvenue à Bordeaux ! Nous sommes ici, place de la Bourse.", "Hello everyone and welcome to Bordeaux! We're here, on the place de la Bourse."],
        ["La guide", "Et là-bas, vous voyez le fleuve ? C'est la Garonne. Et ça, devant nous, c'est le miroir d'eau.", "And over there, can you see the river? That's the Garonne. And this, in front of us, is the water mirror."],
        ["Paula", "C'est magnifique ! Il y a un musée près d'ici ?", "It's magnificent! Is there a museum near here?"],
        ["La guide", "Oui, il y a des musées dans le centre-ville. Le CAPC, le musée d'art contemporain, est près d'ici.", "Yes, there are museums in the town centre. The CAPC, the contemporary art museum, is near here."],
        ["Kenji", "Excusez-moi, j'ai une question. La cathédrale, c'est loin ?", "Excuse me, I have a question. Is the cathedral far?"],
        ["La guide", "Non, c'est à dix minutes à pied. Maintenant, nous visitons le quartier Saint-Pierre : c'est un quartier historique, avec des rues commerçantes.", "No, it's ten minutes on foot. Now we're visiting the Saint-Pierre district: it's a historic district, with shopping streets."],
        ["Paula", "Et le jardin public ?", "And the public garden?"],
        ["La guide", "Le jardin public, c'est pour demain ! Allez, on y va !", "The public garden is for tomorrow! Come on, let's go!"]
      ],
      glossary: [["Nous sommes ici.", "we are here"], ["là-bas", "over there"], ["C'est près d'ici.", "it's near here"], ["C'est loin ?", "is it far?"]]
    },
    {
      id: "d2", n: 2, title: "Lost in Strasbourg", titleFr: "Strasbourg · Excusez-moi, je suis perdue !",
      note: "Chloé is on the place Kléber and can't find the cathedral. Follow the directions on the plan in the <b>Grammaire</b> tab.",
      scene: "rue", people: { "Chloé": "f7", "Un passant": "m2" }, hold: { "Chloé": "🗺️" },
      lines: [
        ["Chloé", "Excusez-moi, monsieur ! Je suis perdue. Où est la cathédrale, s'il vous plaît ?", "Excuse me, sir! I'm lost. Where's the cathedral, please?"],
        ["Un passant", "La cathédrale ? C'est facile. Vous êtes place Kléber. Vous prenez la rue du Dôme, là, et vous allez tout droit.", "The cathedral? It's easy. You're on the place Kléber. You take the rue du Dôme, there, and go straight on."],
        ["Chloé", "Tout droit… d'accord.", "Straight on… OK."],
        ["Un passant", "Au carrefour, vous tournez à droite, dans la rue des Bœufs. Vous continuez jusqu'à la rue Mercière, et la cathédrale est à gauche.", "At the crossroads, you turn right into the rue des Bœufs. You carry on as far as the rue Mercière, and the cathedral is on the left."],
        ["Chloé", "C'est loin ?", "Is it far?"],
        ["Un passant", "Non, non, c'est à cinq minutes à pied.", "No, no, it's five minutes' walk."],
        ["Chloé", "Et l'office de tourisme ? Je cherche aussi l'office de tourisme.", "And the tourist office? I'm also looking for the tourist office."],
        ["Un passant", "Il est dans la rue du Dôme, à droite. Vous passez devant !", "It's in the rue du Dôme, on the right. You go past it!"],
        ["Chloé", "Merci beaucoup, monsieur. Bonne journée !", "Thank you very much. Have a nice day!"]
      ],
      glossary: [["Je suis perdu(e).", "I'm lost"], ["tout droit", "straight on"], ["au carrefour", "at the crossroads"], ["jusqu'à", "as far as"]]
    },
    {
      id: "d3", n: 3, title: "Which line? In the Lille metro", titleFr: "Lille · C'est quelle ligne ?",
      note: "Fabien arrives at Lille-Europe station for the Braderie and asks a metro agent the way to his friend's house. Notice [[quel]] / [[quelle]] in the questions.",
      scene: "metro", people: { "Fabien": "m5", "L'agent": "f2" },
      lines: [
        ["Fabien", "Bonjour, madame. Je vais rue Saint-André. Je prends quelle ligne ?", "Hello. I'm going to rue Saint-André. Which line do I take?"],
        ["L'agent", "Vous prenez la ligne 2, direction Saint-Philibert.", "You take line 2, towards Saint-Philibert."],
        ["Fabien", "Et je descends à quelle station ?", "And which station do I get off at?"],
        ["L'agent", "Vous descendez à Gare Lille-Flandres, c'est le premier arrêt. Là, vous changez : vous prenez le bus 10, direction Hegel.", "You get off at Gare Lille-Flandres, it's the first stop. There, you change: you take the number 10 bus towards Hegel."],
        ["Fabien", "Le bus 10… et je descends à quel arrêt ?", "The 10 bus… and which stop do I get off at?"],
        ["L'agent", "À l'arrêt Voltaire. La rue Saint-André est à deux minutes.", "At the Voltaire stop. The rue Saint-André is two minutes away."],
        ["Fabien", "Merci ! Et le ticket, il coûte combien ?", "Thanks! And how much is a ticket?"],
        ["L'agent", "Un euro soixante-dix. Le même ticket marche pour le métro et pour le bus.", "One euro seventy. The same ticket works for the metro and the bus."]
      ],
      glossary: [["la ligne", "the line"], ["direction…", "towards…"], ["changer", "to change"], ["descendre à", "to get off at"]]
    },
    {
      id: "d4", n: 4, title: "2 a.m. at the Braderie", titleFr: "La Braderie de Lille · Les bus roulent toute la nuit",
      note: "It's very late after the Braderie. Fabien phones Luc: how can he get back? Listen to [[toute la nuit]] and [[jusqu'à]].",
      scene: "arret", people: { "Fabien": "m5", "Luc": "m1" }, phone: ["Fabien", "Luc"],
      lines: [
        ["Fabien", "Allô, Luc ? C'est Fabien. Il est deux heures du matin et il n'y a pas de métro ! Comment je rentre ?", "Hello, Luc? It's Fabien. It's two in the morning and there's no metro! How do I get back?"],
        ["Luc", "Pas de problème ! Pendant la Braderie, les bus L1 et L12 roulent toute la nuit.", "No problem! During the Braderie, the L1 and L12 buses run all night."],
        ["Fabien", "Super ! Et je prends quel bus ?", "Great! And which bus do I take?"],
        ["Luc", "Tu es où ?", "Where are you?"],
        ["Fabien", "Place de la République.", "On the place de la République."],
        ["Luc", "Alors tu prends le L1, et tu descends à l'arrêt Voltaire. C'est devant la maison.", "Then take the L1 and get off at Voltaire. It's in front of the house."],
        ["Fabien", "Et il passe jusqu'à quelle heure ?", "And until what time does it run?"],
        ["Luc", "Jusqu'à trois heures ! Dépêche-toi !", "Until three o'clock! Hurry up!"]
      ],
      glossary: [["toute la nuit", "all night"], ["rouler", "to run (vehicles), to drive"], ["jusqu'à quelle heure ?", "until what time?"], ["Dépêche-toi !", "hurry up!"]]
    },
    {
      id: "d5", n: 5, title: "Vox pop: how do you get to work?", titleFr: "Micro-trottoir · À pied ou en bus ?",
      note: "A radio reporter asks people at a bus stop how they travel in the morning. Notice the jobs in the masculine and feminine, and [[en bus]] but [[à vélo]].",
      scene: "arret", staff: "Le journaliste", people: { "Le journaliste": "m4", "Sabrina": "f8", "Christophe": "m2", "Émilie": "f1" },
      lines: [
        ["Le journaliste", "Bonjour, madame ! Radio Ville, une question : comment vous allez au travail ?", "Hello! Radio Ville, one question: how do you get to work?"],
        ["Sabrina", "Moi, je m'appelle Sabrina, je suis coiffeuse. Je vais au travail à vélo, bien sûr ! Mais le week-end, je prends le métro.", "I'm Sabrina, I'm a hairdresser. I go to work by bike, of course! But at the weekend I take the metro."],
        ["Le journaliste", "Et vous, monsieur ?", "And you, sir?"],
        ["Christophe", "Je suis pharmacien. Tous les jours, je prends le bus, et j'aime beaucoup le tramway aussi.", "I'm a pharmacist. Every day I take the bus, and I like the tram a lot too."],
        ["Le journaliste", "Et vous, madame ? Vous attendez le bus ?", "And you, madam? Are you waiting for the bus?"],
        ["Émilie", "Non, j'attends mes élèves ! Je suis professeure. Le matin, je vais à l'école à pied, comme les enfants.", "No, I'm waiting for my pupils! I'm a teacher. In the morning I walk to school, like the children."],
        ["Le journaliste", "Merci à tous ! Et vous, chers auditeurs, vous allez au travail en voiture, en bus ou à pied ?", "Thank you all! And you, dear listeners, do you go to work by car, by bus or on foot?"]
      ],
      glossary: [["un micro-trottoir", "a vox pop"], ["à vélo", "by bike"], ["tous les jours", "every day"], ["à pied", "on foot"]]
    }
  ],

  vocab: [
    { t: "la rue", en: "the street", pic: "🛣️", cat: "Les voies", g: "f", note: "abbreviated <b>r.</b>" },
    { t: "l'avenue", en: "the avenue", pic: "🌳", cat: "Les voies", g: "f", note: "abbreviated <b>av.</b>" },
    { t: "le boulevard", en: "the boulevard", pic: "🚗", cat: "Les voies", g: "m", note: "abbreviated <b>bd</b> or <b>boul.</b>" },
    { t: "la place", en: "the square", pic: "⛲", cat: "Les voies", g: "f" },
    { t: "le carrefour", en: "the crossroads", pic: "✚", cat: "Les voies", g: "m" },
    { t: "le pont", en: "the bridge", pic: "🌉", cat: "Les voies", g: "m" },
    { t: "le quai", en: "the quay, the embankment; the platform", pic: "⚓", cat: "Les voies", g: "m", pr: "KAY" },
    { t: "le fleuve", en: "the (big) river (flows into the sea)", pic: "🌊", cat: "Les voies", g: "m" },
    { t: "la rivière", en: "the river (flows into another river)", pic: "🏞️", cat: "Les voies", g: "f" },
    { t: "le centre-ville", en: "the town centre", pic: "🏙️", cat: "Les lieux", g: "m" },
    { t: "le quartier", en: "the district, the neighbourhood", pic: "🏘️", cat: "Les lieux", g: "m", pr: "kar-TYAY" },
    { t: "la mairie", en: "the town hall", pic: "🏛️", cat: "Les lieux", g: "f" },
    { t: "la gare", en: "the railway station", pic: "🚉", cat: "Les lieux", g: "f" },
    { t: "la banque", en: "the bank", pic: "🏦", cat: "Les lieux", g: "f" },
    { t: "la poste", en: "the post office", pic: "📮", cat: "Les lieux", g: "f" },
    { t: "la police", en: "the police (station)", pic: "🚓", cat: "Les lieux", g: "f" },
    { t: "l'école", en: "the school", pic: "🏫", cat: "Les lieux", g: "f" },
    { t: "la bibliothèque", en: "the library", pic: "📚", cat: "Les lieux", g: "f" },
    { t: "l'office de tourisme", en: "the tourist office", pic: "ℹ️", cat: "Les lieux", g: "m" },
    { t: "le jardin public", en: "the public garden, the park", pic: "🌷", cat: "Les lieux", g: "m" },
    { t: "le musée", en: "the museum", pic: "🖼️", cat: "Les monuments", g: "m" },
    { t: "la cathédrale", en: "the cathedral", pic: "⛪", cat: "Les monuments", g: "f" },
    { t: "l'église", en: "the church", pic: "⛪", cat: "Les monuments", g: "f" },
    { t: "le théâtre", en: "the theatre", pic: "🎭", cat: "Les monuments", g: "m" },
    { t: "la tour", en: "the tower", pic: "🗼", cat: "Les monuments", g: "f", note: "[[la tour Eiffel]]" },
    { t: "un monument", en: "a monument", pic: "🗿", cat: "Les monuments", g: "m" },
    { t: "tout droit", en: "straight on", pic: "⬆️", cat: "Le chemin" },
    { t: "à gauche", en: "on / to the left", pic: "⬅️", cat: "Le chemin" },
    { t: "à droite", en: "on / to the right", pic: "➡️", cat: "Le chemin" },
    { t: "la première rue", en: "the first street", pic: "1️⃣", cat: "Le chemin", g: "f" },
    { t: "la deuxième rue", en: "the second street", pic: "2️⃣", cat: "Le chemin", g: "f" },
    { t: "tourner", en: "to turn", pic: "↪️", cat: "Le chemin" },
    { t: "traverser", en: "to cross", pic: "🚸", cat: "Le chemin" },
    { t: "continuer", en: "to carry on", pic: "⏩", cat: "Le chemin" },
    { t: "chercher", en: "to look for", pic: "🔍", cat: "Le chemin" },
    { t: "près d'ici", en: "near here", pic: "📍", cat: "Le chemin" },
    { t: "loin d'ici", en: "far from here", pic: "🔭", cat: "Le chemin" },
    { t: "en bus", en: "by bus", pic: "🚌", cat: "Les transports" },
    { t: "en métro", en: "by underground", pic: "🚇", cat: "Les transports" },
    { t: "en tramway", en: "by tram", pic: "🚋", cat: "Les transports" },
    { t: "en train", en: "by train", pic: "🚆", cat: "Les transports" },
    { t: "en voiture", en: "by car", pic: "🚗", cat: "Les transports" },
    { t: "en taxi", en: "by taxi", pic: "🚕", cat: "Les transports" },
    { t: "en scooter", en: "by scooter", pic: "🛵", cat: "Les transports" },
    { t: "à moto", en: "by motorbike (also en moto)", pic: "🏍️", cat: "Les transports" },
    { t: "à vélo", en: "by bike", pic: "🚲", cat: "Les transports" },
    { t: "à pied", en: "on foot", pic: "🚶", cat: "Les transports" },
    { t: "la ligne", en: "the (metro / bus) line", pic: "〰️", cat: "Les transports", g: "f" },
    { t: "la station", en: "the (metro) station", pic: "Ⓜ️", cat: "Les transports", g: "f" },
    { t: "l'arrêt", en: "the (bus) stop", pic: "🚏", cat: "Les transports", g: "m" },
    { t: "un ticket", en: "a ticket", pic: "🎫", cat: "Les transports", g: "m" },
    { t: "l'autopartage", en: "car sharing", pic: "🚘", cat: "Les transports", g: "m" },
    { t: "un coiffeur, une coiffeuse", en: "a hairdresser", pic: "💇", cat: "Les professions" },
    { t: "un infirmier, une infirmière", en: "a nurse", pic: "🧑‍⚕️", cat: "Les professions" },
    { t: "un pharmacien, une pharmacienne", en: "a pharmacist", pic: "💊", cat: "Les professions" },
    { t: "un professeur, une professeure", en: "a teacher", pic: "🧑‍🏫", cat: "Les professions" },
    { t: "un / une médecin", en: "a doctor", pic: "🩺", cat: "Les professions" },
    { t: "un facteur, une factrice", en: "a postman / postwoman", pic: "📬", cat: "Les professions" },
    { t: "un traducteur, une traductrice", en: "a translator", pic: "🌐", cat: "Les professions" },
    { t: "un serveur, une serveuse", en: "a waiter / waitress", pic: "🍽️", cat: "Les professions" },
    { t: "un musicien, une musicienne", en: "a musician", pic: "🎻", cat: "Les professions" },
    { t: "un ingénieur, une ingénieure", en: "an engineer", pic: "⚙️", cat: "Les professions" },
    { t: "un informaticien, une informaticienne", en: "an IT specialist", pic: "💻", cat: "Les professions" },
    { t: "un / une photographe", en: "a photographer", pic: "📷", cat: "Les professions" },
    { t: "un / une journaliste", en: "a journalist", pic: "🎙️", cat: "Les professions" },
    { t: "cent", en: "a hundred", pic: "💯", cat: "Les grands nombres" },
    { t: "mille", en: "a thousand", pic: "🔢", cat: "Les grands nombres", note: "never takes an s: [[deux mille]]" },
    { t: "un million", en: "a million", pic: "💰", cat: "Les grands nombres", g: "m" },
    { t: "un milliard", en: "a billion", pic: "🌍", cat: "Les grands nombres", g: "m" }
  ],

  grammar: [
    {
      id: "g-articles",
      title: "[[un]] or [[le]]? Indefinite and definite articles",
      body: [
        "Use [[un]], [[une]], [[des]] (<i>a, some</i>) when you <b>can't identify</b> the thing yet: [[Il y a un musée près d'ici ?]] — any museum.",
        "Use [[le]], [[la]], [[l']], [[les]] (<i>the</i>) when you <b>can identify</b> it: it's unique, already mentioned, or named: [[Le musée d'art contemporain est près d'ici.]] · [[La tour Eiffel est à Paris.]]",
        "Often you go from one to the other: [[Il y a un quartier historique : c'est le quartier Saint-Pierre.]]"
      ],
      info: [
        { type: "compare", title: "🔍 Any one, or that one?", cols: [
          { head: "un · une · des", en: "not identified: “a, some”", color: "#e0a526", pic: "❓🏛️", lines: [["Il y a un musée ici ?", "Is there a museum here?"], ["C'est une cathédrale magnifique.", "It's a magnificent cathedral."], ["Je visite des villes en Suisse.", "I'm visiting towns in Switzerland."]] },
          { head: "le · la · l' · les", en: "identified: “the”", color: "#2b59c3", pic: "👉🏛️", lines: [["Le CAPC est un musée.", "The CAPC is a museum."], ["La tour Eiffel est à Paris.", "The Eiffel Tower is in Paris."], ["Voici les quais de la Garonne.", "Here are the quays of the Garonne."]] }
        ] },
        { type: "gender", title: "📋 The two families of articles", cols: [
          { g: "m", badge: "masc.", head: "un · le", items: ["un musée → le musée", "un quartier → le quartier", "un hôtel → l'hôtel"] },
          { g: "f", badge: "fém.", head: "une · la", items: ["une place → la place", "une rue → la rue", "une église → l'église"] },
          { g: "pl", badge: "plur.", head: "des · les", items: ["des monuments → les monuments", "des rues → les rues", "des écoles → les écoles"] }
        ] }
      ],
      widget: {
        type: "combo", label: "un or le? · pick a place and a situation",
        rows: [{ k: "un", label: "❓ any one (un / une)" }, { k: "le", label: "👉 that one (le / la / l')" }],
        cols: [{ k: "musee", label: "🖼️ musée" }, { k: "place", label: "⛲ place" }, { k: "opera", label: "🎭 opéra" }, { k: "eglise", label: "⛪ église" }],
        out: {
          "un|musee": ["Il y a un musée près d'ici ?", "Is there a museum near here?"], "le|musee": ["Le musée du Louvre est à Paris.", "The Louvre museum is in Paris.", "named → le"],
          "un|place": ["C'est une place magnifique !", "It's a magnificent square!"], "le|place": ["La place de la Bourse est ici.", "The place de la Bourse is here.", "named → la"],
          "un|opera": ["Il y a un opéra dans la ville ?", "Is there an opera house in the town?"], "le|opera": ["Ici, vous avez l'opéra Garnier.", "Here you have the Garnier opera house.", "le → l' before a vowel"],
          "un|eglise": ["Je cherche une église.", "I'm looking for a church."], "le|eglise": ["L'église Saint-Pierre est près d'ici.", "Saint-Pierre's church is near here.", "la → l' before a vowel"]
        }
      }
    },
    {
      id: "g-chemin",
      title: "Asking and giving directions on a town plan",
      body: [
        "To ask: [[Excusez-moi, je cherche la rue des Bœufs.]] · [[Où est la cathédrale, s'il vous plaît ?]] · [[Pour aller à la gare, s'il vous plaît ?]]",
        "To answer, use [[vous]] + the verb: [[Vous allez tout droit.]] · [[Vous tournez à gauche.]] · [[Vous prenez la première rue à droite.]] · [[Vous traversez la place.]] · [[Vous continuez jusqu'à…]] Order words: [[la première]] (1<sup>re</sup>), [[la deuxième]] (2<sup>e</sup>), [[la troisième]] (3<sup>e</sup>).",
        "On the plan below, you are on the <b>place Kléber</b> (red dot), facing north. Tap a step to hear it, then play <b>🎧 Où est-ce que j'arrive ?</b>: listen to directions and tap the place where you end up."
      ],
      info: [
        { type: "minis", title: "🧭 The direction words", items: [
          { mini: "toutdroit", fr: "tout droit", en: "straight on" }, { mini: "gauche", fr: "à gauche", en: "left" }, { mini: "droite", fr: "à droite", en: "right" },
          { mini: "premiere", fr: "la première rue à droite", en: "the first street on the right" }, { mini: "traverser", fr: "traverser", en: "to cross" }, { mini: "pres", fr: "c'est près", en: "it's near" }, { mini: "loin", fr: "c'est loin", en: "it's far" }
        ] },
        { type: "map", title: "🗺️ Plan du centre-ville · from place Kléber to the cathedral", map: U02_PLAN,
          steps: [
            { mini: "toutdroit", fr: "Vous prenez la rue du Dôme et vous allez tout droit.", en: "Take the rue du Dôme and go straight on." },
            { mini: "droite", fr: "Au carrefour, vous tournez à droite, dans la rue des Bœufs.", en: "At the crossroads, turn right into the rue des Bœufs." },
            { mini: "toutdroit", fr: "Vous continuez jusqu'à la rue Mercière.", en: "Carry on as far as the rue Mercière." },
            { mini: "gauche", fr: "La cathédrale est là, à gauche !", en: "The cathedral is there, on the left!" }
          ],
          quiz: [
            { say: "Vous allez tout droit dans la rue du Dôme. C'est à droite, avant le carrefour.", answer: "ot", en: "Straight on up the rue du Dôme. It's on the right, before the crossroads." },
            { say: "Vous prenez la rue du Marché à gauche. Vous allez tout droit. C'est au bout de la rue, à droite.", answer: "gare", en: "Take the rue du Marché to the left. Straight on. It's at the end of the street, on the right." },
            { say: "Vous prenez la rue du Marché à droite. Vous continuez tout droit, vous traversez la rue Mercière. C'est à droite.", answer: "musee", en: "Take the rue du Marché to the right. Carry on, cross the rue Mercière. It's on the right." },
            { say: "Vous allez tout droit dans la rue du Dôme. Au carrefour, vous tournez à gauche. C'est à droite.", answer: "biblio", en: "Straight on up the rue du Dôme. At the crossroads, turn left. It's on the right." },
            { say: "Vous prenez la rue du Marché à gauche, puis la première rue à gauche, la rue Vauban. C'est à gauche.", answer: "police", en: "Take the rue du Marché to the left, then the first street on the left, the rue Vauban. It's on the left." },
            { say: "Vous descendez la rue du Dôme jusqu'à la rue des Arcades. Vous tournez à gauche. C'est à droite, près de la rivière.", answer: "mairie", en: "Go down the rue du Dôme to the rue des Arcades. Turn left. It's on the right, near the river." },
            { say: "Vous allez tout droit, vous tournez à droite dans la rue des Bœufs, et vous continuez jusqu'à la rue Mercière. C'est à gauche.", answer: "cath", en: "Straight on, right into the rue des Bœufs, carry on to the rue Mercière. It's on the left." }
          ], note: "Directions are given as if you walk out of the place Kléber facing north (the top of the plan). “Au bout de la rue” = at the end of the street." }
      ]
    },
    {
      id: "g-er",
      title: "Regular <b>-er</b> verbs in the present · and [[aller]]",
      body: [
        "Most French verbs end in <b>-er</b>: [[chercher]], [[tourner]], [[continuer]], [[traverser]], [[visiter]], [[habiter]], [[parler]]… They all work the same way: take off <b>-er</b> to get the stem (<i>continu-</i>), then add the ending: <b>-e, -es, -e, -ons, -ez, -ent</b>.",
        "Great news for your ears: <b>je, tu, il/elle, ils/elles</b> all <b>sound the same</b> ([[je continue]], [[tu continues]], [[ils continuent]]: the -es and -ent are silent!). Only [[nous continuons]] and [[vous continuez]] sound different.",
        "⚠️ [[aller]] (to go) ends in -er but is <b>irregular</b>: [[je vais]], [[tu vas]], [[il va]], [[nous allons]], [[vous allez]], [[ils vont]]. [[On va où ?]] = Where are we going?"
      ],
      info: [
        { type: "conj", title: "🔁 Same pattern, every -er verb", verbs: [
          { inf: "continuer", en: "to carry on", forms: ["je continu|e", "tu continu|es", "il / elle continu|e", "nous continu|ons", "vous continu|ez", "ils / elles continu|ent"] },
          { inf: "chercher", en: "to look for", forms: ["je cherch|e", "tu cherch|es", "il / elle cherch|e", "nous cherch|ons", "vous cherch|ez", "ils / elles cherch|ent"] },
          { inf: "aller", en: "to go (irregular!)", forms: ["je vais", "tu vas", "il / elle va", "nous allons", "vous allez", "ils / elles vont"] }
        ], note: "Before a vowel: [[j'habite]], [[j'aime]], and liaison [[nous_habitons]], [[ils_habitent]] (z sound)." },
        { type: "compare", title: "👂 Written ≠ heard: the “boot” of -er verbs", cols: [
          { head: "Same sound [tuʁn]", en: "4 forms, 1 sound", color: "#2f8a4f", lines: ["je tourne", "tu tournes", "il tourne", "elles tournent"] },
          { head: "Different sounds", en: "nous & vous", color: "#e0474f", lines: [["nous tournons", "[tuʁnɔ̃]"], ["vous tournez", "[tuʁne]"]] }
        ] }
      ]
    },
    {
      id: "g-transport",
      title: "Getting around: [[en bus]], [[à vélo]] · [[prendre]], [[descendre]]",
      body: [
        "Use [[en]] for transport you get <b>inside</b>: [[en bus]], [[en métro]], [[en train]], [[en voiture]], [[en taxi]]. Use [[à]] when you're <b>on top</b> of it or it's your own feet: [[à vélo]], [[à pied]], [[à moto]] (you also hear <i>en moto</i>, <i>en vélo</i>).",
        "Or use [[prendre]] + the vehicle with an article: [[Je prends le bus.]] · [[Tu prends la ligne 2.]] Then [[changer à]] (change at) and [[descendre à]] (get off at): [[Tu descends à l'arrêt Voltaire.]]"
      ],
      info: [
        { type: "bars", title: "📊 How do the French travel in the morning? (survey quoted in the book, 2015)", unit: " %", source: "Source cited by the book: OpinionWay pour Le Sofinscope, septembre 2015 (several answers possible).", items: [
          { fr: "en voiture", en: "by car", v: 71, pic: "🚗" }, { fr: "à pied", en: "on foot", v: 39, pic: "🚶" }, { fr: "en bus", en: "by bus", v: 13, pic: "🚌" }, { fr: "à vélo", en: "by bike", v: 13, pic: "🚲" },
          { fr: "en métro", en: "by metro", v: 12, pic: "🚇" }, { fr: "en train", en: "by train", v: 6, pic: "🚆" }, { fr: "en scooter, à moto", en: "by scooter or motorbike", v: 3, pic: "🛵" }
        ] },
        { type: "metro", title: "🚇 Fabien's route in Lille (simplified plan)", metro: { lines: [{ name: "Métro 2", color: "#e0474f", stations: ["Gare Lille-Europe", "Gare Lille-Flandres", "Mairie de Lille", "Saint-Philibert"], dir: "Saint-Philibert" }, { name: "Bus 10", color: "#2b59c3", stations: ["Gare Lille-Flandres", "Solférino", "Voltaire", "Hegel"], dir: "Hegel" }], from: "Gare Lille-Europe", change: "Gare Lille-Flandres", path: ["Gare Lille-Europe", "Gare Lille-Flandres", "Solférino", "Voltaire"] },
          steps: [
            { pic: "🚇", fr: "Tu prends le métro ligne 2, direction Saint-Philibert.", en: "Take metro line 2, towards Saint-Philibert." },
            { pic: "🔁", fr: "Tu changes à la station Gare Lille-Flandres.", en: "Change at Gare Lille-Flandres station." },
            { pic: "🚌", fr: "Là, tu prends le bus 10, direction Hegel.", en: "There, take the number 10 bus towards Hegel." },
            { pic: "🚏", fr: "Tu descends à l'arrêt Voltaire. Mon adresse, c'est 15, rue Saint-André.", en: "Get off at the Voltaire stop. My address is 15 rue Saint-André." }
          ] },
        { type: "sms", title: "💬 Fabien and Luc's text messages", with: "Luc 🏠", msgs: [
          { me: true, t: "Salut Luc ! C'est ok pour la braderie samedi ! Quelle est ton adresse ? Je prends quelle ligne de métro à la gare Lille-Europe ?", en: "Hi Luc! Saturday's fine for the Braderie! What's your address? Which metro line do I take at Lille-Europe?" },
          { t: "Super ! Tu prends la ligne 2 direction Saint-Philibert et tu changes à Gare Lille-Flandres. Là, tu prends le bus 10 direction Hegel.", en: "Great! Take line 2 towards Saint-Philibert and change at Lille-Flandres. There, take bus 10 towards Hegel." },
          { me: true, t: "Et je descends à quel arrêt ?", en: "And which stop do I get off at?" },
          { t: "À l'arrêt Voltaire. C'est au 15, rue Saint-André. À samedi !", en: "At Voltaire. It's at 15 rue Saint-André. See you Saturday!" }
        ] },
        { type: "conj", title: "🔁 prendre and descendre", verbs: [
          { inf: "prendre", en: "to take", forms: ["je prends", "tu prends", "il / elle prend", "nous prenons", "vous prenez", "ils / elles prennent"] },
          { inf: "descendre", en: "to get off, to go down", forms: ["je descends", "tu descends", "il / elle descend", "nous descendons", "vous descendez", "ils / elles descendent"] }
        ], note: "In both verbs the <b>d</b> and <b>s</b> at the end of je/tu/il are silent: [[je prends]] = <i>je pran</i>, [[il descend]] = <i>il dé-san</i>." }
      ],
      widget: {
        type: "sort", label: "en or à? Sort the means of transport",
        cols: [{ k: "en", label: "en (inside)", color: "#2b59c3" }, { k: "a", label: "à (on top / on foot)", color: "#e86a2e" }],
        items: [
          { t: "bus", k: "en", pic: "🚌", say: "en bus" }, { t: "pied", k: "a", pic: "🚶", say: "à pied" }, { t: "métro", k: "en", pic: "🚇", say: "en métro" }, { t: "vélo", k: "a", pic: "🚲", say: "à vélo" },
          { t: "voiture", k: "en", pic: "🚗", say: "en voiture" }, { t: "train", k: "en", pic: "🚆", say: "en train" }, { t: "taxi", k: "en", pic: "🚕", say: "en taxi" }, { t: "tramway", k: "en", pic: "🚋", say: "en tramway" }
        ]
      }
    },
    {
      id: "g-quel",
      title: "Asking “which?”: [[quel]], [[quelle]], [[quels]], [[quelles]]",
      body: [
        "[[quel]] is an adjective: it agrees with the noun it goes with, but all four forms <b>sound the same</b>: [[Quel arrêt ?]] · [[Quelle ligne ?]] · [[Quels bus ?]] · [[Quelles rues ?]]",
        "It can go before the noun ([[Je descends à quel arrêt ?]]) or before [[est]] / [[sont]] ([[Quelle est la ligne ?]] · [[Quels sont les quartiers sympas ?]])."
      ],
      info: { type: "gender", title: "🎯 quel agrees · sounds always [kɛl]", cols: [
        { g: "m", badge: "masc. sing.", head: "quel", items: ["Quel arrêt ?", "Quel métro ?", "Quel est ton numéro ?"] },
        { g: "f", badge: "fém. sing.", head: "quelle", items: ["Quelle ligne ?", "Quelle heure ?", "Quelle est ton adresse ?"] },
        { g: "pl", badge: "pluriel", head: "quels · quelles", items: ["Quels bus ?", "Quelles rues ?", "Quels sont les quartiers sympas ?"] }
      ] },
      widget: {
        type: "agree", label: "Make quel agree · pick a noun and singular / plural",
        words: [{ f: { ms: "quel", fs: "quelle", mp: "quels", fp: "quelles" }, pos: "det", en: "which" }],
        nouns: [{ t: "arrêt", g: "m", pic: "🚏" }, { t: "ligne", g: "f", pic: "〰️" }, { t: "bus", g: "m", pic: "🚌", pl: "bus" }, { t: "rue", g: "f", pic: "🛣️" }, { t: "quartier", g: "m", pic: "🏘️" }, { t: "station", g: "f", pic: "Ⓜ️" }, { t: "musée", g: "m", pic: "🖼️" }]
      }
    },
    {
      id: "g-prof",
      title: "Jobs in the masculine and feminine",
      body: [
        "Most job names have a feminine form. The ending tells you how to make it:",
        "<b>-e</b> → no change: [[un / une journaliste]] · <b>-eur</b> → <b>-euse</b>: [[coiffeur]] → [[coiffeuse]] · <b>-teur</b> → <b>-trice</b>: [[traducteur]] → [[traductrice]], [[acteur]] → [[actrice]] · <b>-ier</b> → <b>-ière</b>: [[infirmier]] → [[infirmière]] · <b>-ien</b> → <b>-ienne</b>: [[pharmacien]] → [[pharmacienne]]. Some just add <b>-e</b>: [[professeur]] → [[professeure]], [[ingénieur]] → [[ingénieure]].",
        "No article after [[être]] for a job: [[Elle est coiffeuse.]] (not <s>une coiffeuse</s>). But: [[C'est une coiffeuse.]]"
      ],
      info: { type: "merge", title: "⚙️ From masculine to feminine", rows: [
        { a: "journaliste", b: "—", g: "x", r: "journaliste", ex: "Elle est journaliste.", no: true },
        { a: "coiffeur", b: "-eur", g: "f", r: "coiffeuse", ex: "Elle est coiffeuse." },
        { a: "traducteur", b: "-teur", g: "f", r: "traductrice", ex: "Elle est traductrice." },
        { a: "infirmier", b: "-ier", g: "f", r: "infirmière", ex: "Elle est infirmière." },
        { a: "pharmacien", b: "-ien", g: "f", r: "pharmacienne", ex: "Elle est pharmacienne." },
        { a: "professeur", b: "+e", g: "f", r: "professeure", ex: "Elle est professeure.", en: "same sound" }
      ] },
      widget: {
        type: "sort", label: "Which feminine ending? Sort the jobs",
        cols: [{ k: "same", label: "= same", color: "#5b6b7c" }, { k: "euse", label: "-euse", color: "#c2508e" }, { k: "trice", label: "-trice", color: "#9b4fb0" }, { k: "iere", label: "-ière", color: "#e86a2e" }, { k: "ienne", label: "-ienne", color: "#2f9c8a" }],
        items: [
          { t: "serveur", k: "euse", say: "un serveur, une serveuse" }, { t: "acteur", k: "trice", say: "un acteur, une actrice" }, { t: "photographe", k: "same", say: "un photographe, une photographe" },
          { t: "musicien", k: "ienne", say: "un musicien, une musicienne" }, { t: "facteur", k: "trice", say: "un facteur, une factrice" }, { t: "infirmier", k: "iere", say: "un infirmier, une infirmière" },
          { t: "animateur", k: "trice", say: "un animateur, une animatrice" }, { t: "informaticien", k: "ienne", say: "un informaticien, une informaticienne" }, { t: "architecte", k: "same", say: "un architecte, une architecte" },
          { t: "vendeur", k: "euse", say: "un vendeur, une vendeuse" }, { t: "boulanger", k: "iere", say: "un boulanger, une boulangère" }
        ]
      },
      after: ["⚠️ [[boulanger]] → [[boulangère]]: same idea as -ier → -ière (-er → -ère)."]
    },
    {
      id: "g-nombres",
      title: "Big numbers: [[cent]], [[mille]], [[un million]], [[un milliard]]",
      body: [
        "[[cent]] takes an <b>s</b> only when it's multiplied and ends the number: [[deux cents]], but [[deux cent trois]]. [[mille]] never changes: [[cinq mille]].",
        "[[un million]] and [[un milliard]] are nouns: [[deux millions]], [[huit milliards]], and you add [[de]] before a noun: [[un million de visiteurs]].",
        "In writing, French separates thousands with a <b>space</b> (2 000 000), and uses a comma for decimals (2,5 millions)."
      ],
      info: { type: "numbers", title: "🔢 Tap a number", list: [100, 200, 203, 463, 1000, 2000, 5000, [1000000, "un million"], [2000000, "deux millions"], [2200000, "deux millions deux cent mille"], [1000000000, "un milliard"], [8000000000, "huit milliards"]], hl: [200, 1000000], math: { 200: "s!", 203: "no s", 2000: "mille: no s" } },
      widget: { type: "numbers", min: 100, max: 9999, label: "Numbers 100–9 999 · hear it, read it, write it" }
    }
  ],

  expressions: [
    { fn: "Pour présenter une ville", fnEn: "pointing things out", icon: "🏛️", items: [
      ["Nous sommes ici.", "We are here.", "std", true],
      ["Ici, c'est la place. Et là(-bas), il y a le fleuve.", "Here is the square. And over there is the river.", "std", true],
      ["Vous voyez… ? Ça, c'est…", "Can you see…? That's…", "std"],
      ["Voici… et voilà…", "Here is… and there is…", "std"],
      ["C'est près d'ici. ≠ C'est loin d'ici.", "It's near here. ≠ It's far from here.", "std", true]
    ] },
    { fn: "Pour demander le chemin", fnEn: "asking the way", icon: "🙋", items: [
      ["Excusez-moi, je cherche la rue des Bœufs.", "Excuse me, I'm looking for the rue des Bœufs.", "poli", true],
      ["Où est la cathédrale, s'il vous plaît ?", "Where's the cathedral, please?", "poli", true],
      ["Pour aller à la gare, s'il vous plaît ?", "How do I get to the station, please?", "poli"],
      ["Je suis perdu(e).", "I'm lost.", "std"],
      ["C'est loin ?", "Is it far?", "std"]
    ] },
    { fn: "Pour indiquer le chemin", fnEn: "giving directions", icon: "🧭", items: [
      ["Vous allez tout droit.", "You go straight on.", "std", true],
      ["Vous tournez à gauche / à droite.", "You turn left / right.", "std", true],
      ["Vous prenez la première rue à droite.", "You take the first street on the right.", "std", true],
      ["Vous traversez la place.", "You cross the square.", "std"],
      ["Vous continuez jusqu'à la poste.", "You carry on as far as the post office.", "std"],
      ["C'est au bout de la rue, en face de la banque.", "It's at the end of the street, opposite the bank.", "std"]
    ] },
    { fn: "Pour se déplacer en métro ou en bus", fnEn: "metro and bus", icon: "🚇", items: [
      ["Pour aller à…, tu prends la ligne 10 jusqu'à…", "To get to…, take line 10 as far as…", "std", true],
      ["Tu prends le bus 10, direction Hegel.", "Take bus 10 towards Hegel.", "std", true],
      ["Tu changes à la station Gare Lille-Flandres.", "Change at Gare Lille-Flandres.", "std"],
      ["Tu descends à l'arrêt Voltaire.", "Get off at the Voltaire stop.", "std", true],
      ["Je prends quelle ligne ? / Quelle est la direction ?", "Which line do I take? / Which direction?", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · asking the way in the street", lanes: ["Le / la touriste", "Le passant"], av: ["f7", "m2"], steps: [
    { s: 0, fr: "Excusez-moi, monsieur. Où est la gare, s'il vous plaît ?", en: "Excuse me. Where's the station, please?", alt: ["Je cherche la gare.", "Pour aller à la gare ?"] },
    { s: 1, fr: "La gare ? Vous allez tout droit…", en: "The station? You go straight on…" },
    { s: 1, fr: "… et vous prenez la deuxième rue à gauche.", en: "… and you take the second street on the left." },
    { s: 0, fr: "La deuxième à gauche. C'est loin ?", en: "Second on the left. Is it far?" },
    { s: 1, fr: "Non, c'est à cinq minutes à pied.", en: "No, it's five minutes' walk.", alt: ["C'est tout près !"] },
    { s: 0, fr: "Merci beaucoup ! Bonne journée !", en: "Thanks a lot! Have a nice day!" }
  ] },

  sounds: {
    intro: "In French, your <b>voice</b> can turn a statement into a question: it goes <b>up ↗</b> at the end of a question and <b>down ↘</b> at the end of a statement. And -er verbs are much easier to say than to write.",
    letters: [
      { l: "↗", name: "rising intonation (question)", tip: "On the last word, your voice goes up: [[Vous allez à la poste ?]] ↗ · [[C'est loin ?]] ↗ · [[Tu prends le bus ?]] ↗", ex: ["Vous allez à la poste ?", "C'est loin ?", "Tu prends le métro ?"] },
      { l: "↘", name: "falling intonation (statement)", tip: "On the last word, your voice goes down: [[Vous allez à la poste.]] ↘ · [[C'est loin.]] ↘", ex: ["Vous allez à la poste.", "C'est loin.", "Je prends le métro."] },
      { l: "-e -es -ent", name: "silent verb endings", tip: "In <b>je travaille, tu travailles, il travaille, ils travaillent</b>, the endings are all silent: four spellings, one sound.", ex: ["je travaille", "tu travailles", "ils travaillent", "elles tournent"] },
      { l: "-ons -ez", name: "nous and vous: you hear the ending", tip: "[[nous travaillons]] ends in a nasal <i>on</i>; [[vous travaillez]] ends in <i>é</i>.", ex: ["nous travaillons", "vous travaillez", "nous continuons", "vous continuez"] },
      { l: "eu / œu", name: "[ø] / [œ]", tip: "Round your lips and say “é”: [[deux]], [[le fleuve]], [[la rue des Bœufs]] (singular <i>bœuf</i> = [bœf], plural <i>bœufs</i> = [bø]).", ex: ["le fleuve", "deux", "les bœufs", "neuf"] }
    ],
    pairs: [
      { a: ["Vous allez à la poste ?", "Are you going to the post office?"], b: ["Vous allez à la poste.", "You're going to the post office."], note: "↗ question / ↘ statement" },
      { a: ["il continue", "he carries on"], b: ["ils continuent", "they carry on"], note: "same sound!" },
      { a: ["tu tournes", "you turn"], b: ["vous tournez", "you turn (pl.)"], note: "silent / [e]" },
      { a: ["quel arrêt", "which stop"], b: ["quelle ligne", "which line"], note: "same sound [kɛl]" },
      { a: ["la rue", "the street"], b: ["la roue", "the wheel"], note: "u [y] / ou [u]" },
      { a: ["deux cents", "200"], b: ["douze cents", "1 200"], note: "eu / ou" }
    ]
  },
  classify: {
    label: "↗ Question ou ↘ affirmation ?", q: "Listen to the intonation. Is it a question or a statement?",
    options: ["↗ une question", "↘ une affirmation"],
    items: [
      { say: "Vous allez à la poste ?", a: 0 }, { say: "Vous allez à la poste.", a: 1 }, { say: "C'est loin ?", a: 0 }, { say: "C'est près d'ici.", a: 1 },
      { say: "Tu prends le bus ?", a: 0 }, { say: "Je prends le métro.", a: 1 }, { say: "Il y a un musée ici ?", a: 0 }, { say: "Le musée est à droite.", a: 1 },
      { say: "Elle va au travail à pied ?", a: 0 }, { say: "Nous visitons la cathédrale.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Les touristes sont à Bordeaux.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "La cathédrale est loin : à une heure à pied.", ok: false, explain: "[[C'est à dix minutes à pied.]]" },
    { type: "tf", tag: "Dialogue 2", s: "Chloé cherche la gare.", ok: false, explain: "She's looking for la cathédrale (and l'office de tourisme)." },
    { type: "tf", tag: "Dialogue 2", s: "Au carrefour, Chloé tourne à droite.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Fabien change à la station Gare Lille-Flandres.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Il faut deux tickets : un pour le métro et un pour le bus.", ok: false, explain: "[[Le même ticket marche pour le métro et pour le bus.]]" },
    { type: "tf", tag: "Dialogue 4", s: "Pendant la Braderie, les bus roulent toute la nuit.", ok: true },
    { type: "tf", tag: "Dialogue 5", s: "Christophe est pharmacien et il prend le bus.", ok: true },
    { type: "mcq", tag: "Dialogue 5", q: "Comment Émilie va-t-elle à l'école ?", options: ["à vélo", "à pied", "en bus"], answer: 1, sayAnswer: true },
    { type: "fill", tag: "un ou le ?", sentence: "Dans le quartier historique, il y a ___ musée.", options: ["un", "le"], answer: 0, explain: "any museum: [[un]]" },
    { type: "fill", tag: "un ou le ?", sentence: "___ tour Eiffel est à Paris.", options: ["Une", "La"], answer: 1, explain: "there's only one: [[la tour Eiffel]]" },
    { type: "fill", tag: "un ou le ?", sentence: "Ici, vous avez ___ opéra Garnier.", options: ["un", "l'"], answer: 1 },
    { type: "fill", tag: "un ou le ?", sentence: "C'est ___ cathédrale magnifique.", options: ["une", "la"], answer: 0 },
    { type: "fill", tag: "un ou le ?", sentence: "___ Canada est ___ grand pays.", options: ["Le … un", "Un … le", "Le … le"], answer: 0 },
    { type: "fill", tag: "Verbes en -er", sentence: "Elle ___ des questions.", options: ["pose", "poses", "posent"], answer: 0 },
    { type: "fill", tag: "Verbes en -er", sentence: "Nous ___ la ville.", options: ["visitez", "visitons", "visitent"], answer: 1 },
    { type: "fill", tag: "Verbes en -er", sentence: "Vous ___ la cathédrale.", options: ["regardez", "regardons", "regarde"], answer: 0 },
    { type: "fill", tag: "Verbes en -er", sentence: "Ils ___ la rue Voltaire.", options: ["cherche", "cherchent", "cherchez"], answer: 1 },
    { type: "type", tag: "Verbes en -er", q: "Conjugate: Tu (travailler) rue de la République ?", answers: ["Tu travailles rue de la République ?", "travailles"], explain: "tu → -es (silent)." },
    { type: "fill", tag: "aller", sentence: "Je ___ au travail en bus.", options: ["vais", "va", "allons"], answer: 0 },
    { type: "fill", tag: "aller", sentence: "Ils ___ à la braderie samedi.", options: ["allent", "vont", "vas"], answer: 1, explain: "irregular: [[ils vont]]" },
    { type: "fill", tag: "prendre / descendre", sentence: "Vous ___ la ligne 2.", options: ["prenez", "prendez", "prennent"], answer: 0 },
    { type: "fill", tag: "prendre / descendre", sentence: "Nous ___ à l'arrêt Voltaire.", options: ["descendons", "descendez", "descends"], answer: 0 },
    { type: "fill", tag: "quel", sentence: "Il y a ___ ligne de bus ici ?", options: ["quel", "quelle", "quels"], answer: 1 },
    { type: "fill", tag: "quel", sentence: "Il y a ___ bus ici ?", options: ["quels", "quelles", "quelle"], answer: 0 },
    { type: "fill", tag: "quel", sentence: "C'est dans ___ rue ?", options: ["quel", "quelle", "quels"], answer: 1 },
    { type: "fill", tag: "quel", sentence: "___ sont les quartiers sympas de la ville ?", options: ["Quelles", "Quels", "Quel"], answer: 1 },
    { type: "fill", tag: "en ou à ?", sentence: "Je vais au travail ___ vélo.", options: ["en", "à"], answer: 1 },
    { type: "fill", tag: "en ou à ?", sentence: "Nous allons à Lyon ___ train.", options: ["en", "à"], answer: 0 },
    { type: "fill", tag: "Professions", sentence: "Élodie est musicienne. Léo est ___ .", options: ["musicien", "musicienne", "musiceur"], answer: 0 },
    { type: "fill", tag: "Professions", sentence: "Alexandre est ingénieur. Julie est ___ .", options: ["ingénieuse", "ingénieure", "ingénieurice"], answer: 1 },
    { type: "fill", tag: "Professions", sentence: "François est animateur. Margot est ___ .", options: ["animateuse", "animatrice", "animatière"], answer: 1 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la cathédrale", "la gare", "le pont", "la banque"], answer: 2, explain: "le pont is a way across a river (une voie); the others are buildings." },
    { type: "mcq", tag: "Vocabulaire", q: "Un facteur…", options: ["distribue les lettres", "travaille dans un hôpital", "fait de la musique"], answer: 0 },
    { type: "listen", tag: "Le chemin", q: "Where does the person tell you to go?", say: "Vous prenez la deuxième rue à gauche.", options: ["2nd street on the left", "1st street on the right", "2nd street on the right"], answer: 0 },
    { type: "listen", tag: "Les nombres", q: "How many visitors?", say: "Il y a deux millions de visiteurs.", options: ["200 000", "2 000 000", "2 000"], answer: 1 },
    { type: "order", tag: "Construisez", en: "Excuse me, where is the town hall, please?", words: ["Excusez-moi,", "où", "est", "la", "mairie,", "s'il", "vous", "plaît", "?"] },
    { type: "order", tag: "Construisez", en: "You take the first street on the right.", words: ["Vous", "prenez", "la", "première", "rue", "à", "droite."] },
    { type: "reply", tag: "Que répondre ?", prompt: "Excusez-moi, la poste, c'est loin ?", options: ["Non, c'est tout près : la première rue à droite.", "Oui, je suis postier.", "Non, je prends le bus 10."], answer: 0 }
  ],

  roleplays: [
    { title: "🧭 Le / la touriste perdu(e)", brief: "You're on the place Kléber (see the plan in Grammaire). Ask a passer-by the way to the tourist office, then to the town hall.", memo: ["Excusez-moi…", "Où est… ?", "C'est loin ?", "Merci !"], partner: "m2", you: "f7",
      turns: [
        { them: "Oui ? Je peux vous aider ?", themEn: "Yes? Can I help you?", hint: "Say you're lost and ask where the tourist office is.", you: "Oui, merci ! Je suis perdue. Où est l'office de tourisme, s'il vous plaît ?", youEn: "Yes, thanks! I'm lost. Where's the tourist office, please?" },
        { them: "Vous allez tout droit dans la rue du Dôme. C'est à droite.", themEn: "Go straight up the rue du Dôme. It's on the right.", hint: "Repeat to check, and ask if it's far.", you: "Tout droit, à droite. C'est loin ?", youEn: "Straight on, on the right. Is it far?" },
        { them: "Non, c'est à deux minutes !", themEn: "No, it's two minutes away!", hint: "Ask for the town hall too ([[Et la mairie ?]]).", you: "Et la mairie, s'il vous plaît ?", youEn: "And the town hall, please?" },
        { them: "La mairie ? Vous descendez la rue du Dôme et vous tournez à gauche, dans la rue des Arcades.", themEn: "The town hall? Go down the rue du Dôme and turn left into the rue des Arcades.", hint: "Thank him and wish him a nice day.", you: "Merci beaucoup, monsieur ! Bonne journée !", youEn: "Thank you very much! Have a nice day!" }
      ] },
    { title: "🚇 Explique-moi le trajet !", brief: "A friend phones: they're at Gare Lille-Europe and want to come to your place (Voltaire stop). Give them the route with [[tu]].", memo: ["ligne 2 → Saint-Philibert", "changer: Gare Lille-Flandres", "bus 10 → Hegel", "arrêt Voltaire"], partner: "m5", you: "m1",
      turns: [
        { them: "Allô ? Je suis à la gare Lille-Europe ! Je prends quelle ligne ?", themEn: "Hello? I'm at Lille-Europe station! Which line do I take?", hint: "Line 2, direction Saint-Philibert.", you: "Tu prends la ligne 2, direction Saint-Philibert.", youEn: "Take line 2, towards Saint-Philibert." },
        { them: "D'accord. Et après ?", themEn: "OK. And then?", hint: "Change at Gare Lille-Flandres and take the 10 bus.", you: "Tu changes à Gare Lille-Flandres et tu prends le bus 10, direction Hegel.", youEn: "Change at Gare Lille-Flandres and take bus 10 towards Hegel." },
        { them: "Et je descends à quel arrêt ?", themEn: "And which stop do I get off at?", hint: "At the Voltaire stop.", you: "Tu descends à l'arrêt Voltaire. À tout à l'heure !", youEn: "Get off at Voltaire. See you soon!" }
      ] },
    { title: "🏛️ Guide d'un jour", brief: "You're a tour guide in your own town. Present three places to a group of tourists.", memo: ["Nous sommes ici…", "Là-bas, il y a…", "C'est près / loin"], partner: "m6", you: "f3",
      turns: [
        { them: "Bonjour ! On commence où ?", themEn: "Hello! Where do we start?", hint: "Say where we are (a square in your town).", you: "Bonjour à tous ! Nous sommes ici, sur la place du marché.", youEn: "Hello everyone! We're here, on the market square." },
        { them: "Et ça, c'est quoi ?", themEn: "And what's that?", hint: "Present a monument: [[Ça, c'est…]]", you: "Ça, c'est la mairie. Elle est magnifique, non ?", youEn: "That's the town hall. It's magnificent, isn't it?" },
        { them: "Il y a un musée dans la ville ?", themEn: "Is there a museum in the town?", hint: "Say yes, and that it's near here, over there.", you: "Oui, le musée d'histoire est près d'ici, là-bas, à gauche.", youEn: "Yes, the history museum is near here, over there, on the left." }
      ] }
  ],

  ateliers: [
    { title: "Réaliser un questionnaire sur la vie dans un quartier", intro: "In groups, write five questions about life in a neighbourhood, interview another group, and present the results.",
      steps: [["Préparation", ["Write 5 questions, e.g. [[Dans votre quartier, quel est votre lieu préféré ?]] [[Il y a une bibliothèque ?]] [[Vous allez au travail en bus ?]]", "Use [[quel]], [[il y a]], [[en / à]] + transport."]], ["Réalisation", ["Ask your questions to another group and note the answers.", "Compare: any points in common? Make a short written summary (or a bar chart!)."]], ["Présentation", ["Present the results to the class: [[Trois personnes sur cinq vont au travail à pied.]]"]]],
      phrases: ["Quel est votre lieu préféré ?", "Il y a un marché dans votre quartier ?", "Vous allez au travail comment ?"] },
    { title: "Réaliser un reportage-photos dans la ville", tech: true, intro: "Plan a three-step walk around your town, follow another group's route and post photos with captions.",
      steps: [["Préparation", ["Imagine a route in 3 stages starting from your school.", "Note the 3 places and the transport used, and swap notes with another group."]], ["Réalisation", ["Follow the other group's route and take photos: places, transport, funny details…", "Post them on a social network with short captions: [[Ici, c'est la place…]]"]], ["Présentation", ["Show your photos and your route to the class."]]],
      phrases: ["Première étape : la gare.", "Ensuite, nous prenons le tram.", "Voici le pont !"] }
  ],
  delf: {
    skill: "Compréhension des écrits", title: "Exercise 2 · read a notice in a station",
    about: "In the DELF A1 reading paper (30 minutes, 4 or 5 everyday documents), exercise 2 asks you to understand a short public notice and follow information to get somewhere. Read this original notice, then answer.",
    tips: ["Read the instructions (la consigne) first.", "Look at the whole document: title, dates, pictures, small print.", "Read the questions <b>before</b> reading the text in detail.", "Check your answers against the document at the end."],
    docs: [{ type: "card", style: "board", title: "⚠️ INFO TRAFIC · TRAM B", sub: "Travaux sur la ligne B", rows: [["Quand ?", "samedi 12 et dimanche 13 octobre"], ["Où ?", "entre Gare Centrale et Université"], ["Horaires", "de 6 h à 22 h"], ["À la place", "bus B+ toutes les 10 minutes"], ["Arrêts du bus B+", "devant chaque station de tram"], ["Le lundi 14", "trafic normal"]], foot: "Infos : www.tram-ville.fr · Merci de votre compréhension" }],
    items: [
      { type: "mcq", q: "Ce document annonce…", options: ["des travaux sur la ligne de tram B", "une nouvelle ligne de bus", "la fermeture de la gare"], answer: 0 },
      { type: "mcq", q: "Les travaux ont lieu…", options: ["le week-end du 12 et 13 octobre", "tous les jours en octobre", "le lundi 14 octobre"], answer: 0 },
      { type: "mcq", q: "Pendant les travaux, pour aller de la Gare Centrale à l'Université, vous prenez…", options: ["le bus B+", "le tram B", "le métro"], answer: 0 },
      { type: "mcq", q: "Le bus B+ passe…", options: ["toutes les 10 minutes", "toutes les heures", "une fois le matin"], answer: 0 },
      { type: "mcq", q: "Où est l'arrêt du bus B+ ?", options: ["devant chaque station de tram", "à la gare seulement", "à l'université seulement"], answer: 0 },
      { type: "tf", s: "Le lundi 14 octobre, le tram B roule normalement.", ok: true }
    ]
  },
  detente: {
    title: "Villes francophones · Associez la ville et le pays",
    intro: "A quick game from the book's Francophonie box: which country is each French-speaking city in?",
    items: [
      { type: "mcq", q: "Dakar", options: ["le Sénégal", "le Mali", "la Belgique"], answer: 0 },
      { type: "mcq", q: "Bruxelles", options: ["la Suisse", "la Belgique", "le Canada"], answer: 1 },
      { type: "mcq", q: "Québec", options: ["le Canada", "le Sénégal", "la France"], answer: 0 },
      { type: "mcq", q: "Bamako", options: ["le Niger", "le Mali", "le Maroc"], answer: 1 },
      { type: "mcq", q: "Genève", options: ["la Belgique", "la Suisse", "le Luxembourg"], answer: 1 },
      { type: "mcq", q: "Montréal", options: ["le Canada", "la Suisse", "Haïti"], answer: 0 },
      { type: "mcq", q: "Rabat", options: ["la Tunisie", "le Maroc", "l'Algérie"], answer: 1 }
    ]
  },

  cultureInfo: [
    { type: "compare", title: "🏙️ Deux villes à découvrir · Paris et Montréal", cols: [
      { head: "Paris", en: "France · capitale", color: "#2b59c3", pic: "🗼", lines: [["la tour Eiffel", "Gustave Eiffel, opened in 1889"], ["les Champs-Élysées", "the famous avenue"], ["la cathédrale Notre-Dame", "built from 1163 to about 1272"], ["le Louvre", "about 9 million visitors a year"]] },
      { head: "Montréal", en: "Québec · Canada", color: "#e0474f", pic: "🍁", lines: [["le parc du Mont-Royal", "the mountain in the city"], ["le Vieux-Montréal", "the old town by the river"], ["la rue Sainte-Catherine", "the shopping street"], ["Jacques Cartier", "the French explorer arrives in 1534 (not Gustave Eiffel!)"]] }
    ] }
  ],
  culture: [
    { icon: "😊", kind: "Oh, le cliché !", t: "« Les Français sont désagréables avec les touristes. »", d: "A survey quoted by the book says <b>85 %</b> of tourists were satisfied with how the French welcomed them, and <b>72 %</b> found it easy to talk with the French in a foreign language. The secret? Always start with [[Bonjour !]]" },
    { icon: "🛍️", kind: "Au fait !", t: "La Braderie de Lille", d: "The biggest flea market in Europe, on the first weekend of September: two to three million visitors, and the city eats tonnes of <i>moules-frites</i> (mussels and chips)! Some buses run all night." },
    { icon: "🚘", kind: "Francophonie", t: "Circuler à Montréal", d: "In Montréal people get around by bus, metro, bike (the <b>BIXI</b> bikes), on foot… and by <b>autopartage</b> (car sharing). Québec French says [[une auto]] for a car and [[le char]] colloquially." },
    { icon: "🌊", kind: "Langue", t: "[[fleuve]] or [[rivière]]?", d: "A <b>fleuve</b> flows into the sea (la Seine, la Garonne, le Saint-Laurent). A <b>rivière</b> flows into another river (la Dordogne, l'Ill in Strasbourg)." },
    { icon: "🔤", kind: "Au fait !", t: "Abbreviations on a plan", d: "<b>r.</b> = rue · <b>av.</b> = avenue · <b>bd</b> / <b>boul.</b> (Canada) = boulevard · <b>pl.</b> = place. And addresses put the number first: <i>15, rue Saint-André</i>." },
    { icon: "🏛️", kind: "Civilisation", t: "Bordeaux and Strasbourg", d: "Bordeaux's riverside, with the place de la Bourse and its <i>miroir d'eau</i>, is a UNESCO World Heritage site. Strasbourg's Grande Île, with its cathedral and the place Kléber, is too." }
  ],
  tips: [
    { icon: "🗺️", t: "Practise with a real map", d: "Open a map of a French town, pick a starting point and give yourself directions out loud: [[Je vais tout droit, je tourne à gauche…]]" },
    { icon: "👢", t: "The -er verb “boot”", d: "Draw the six forms in a table: je, tu, il, ils (the same sound) form a boot shape; nous and vous stick out." },
    { icon: "🚌", t: "In or on?", d: "<b>en</b> = you're inside (bus, car, train). <b>à</b> = you're on top or on your feet (vélo, pied)." }
  ],
  mistakes: [
    ["Où est le gare ?", "Où est la gare ?", "gare is feminine"],
    ["Je vais en pied.", "Je vais à pied.", "à pied"],
    ["Je vais en vélo.", "Je vais à vélo.", "à vélo is the standard form"],
    ["Vous tournez à la droite.", "Vous tournez à droite.", "no article"],
    ["Ils allent au musée.", "Ils vont au musée.", "aller is irregular"],
    ["Quel ligne ?", "Quelle ligne ?", "ligne is feminine"],
    ["Elle est une coiffeuse.", "Elle est coiffeuse.", "no article after être + job"],
    ["deux milles", "deux mille", "mille never takes an s"]
  ]
});
