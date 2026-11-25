// Unité 4 · Les soldes, c'est parti ! (book pp. 61–74)
// Situations: faire des achats dans un grand magasin · la météo et les vêtements · les objets technologiques · le service des objets trouvés
// Grammar: genre et nombre des adjectifs · place des adjectifs · futur proche et passé récent · l'adjectif démonstratif · venir
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u04", rubrique: 2, num: 4,
  title: "The sales are on!",
  titleFr: "Les soldes, c'est parti !",
  pages: "Book pp. 61–74",
  opener: { fr: "C'est super, ce sont les soldes ! Je vais faire de bonnes affaires !", en: "It's great, the sales are on! I'm going to get some bargains!" },
  hero: { scene: "grandmagasin", staff: "La vendeuse", people: { "La vendeuse": "f2", "Camille": "f3", "Victor": "m5" } },
  situations: [
    ["👗", "La mode ? J'adore !", "clothes, colours, materials: [[une veste en cuir noire]] · [[Je trouve ça joli !]]"],
    ["🌦️", "Qu'est-ce que je mets aujourd'hui ?", "the weather: [[Il fait froid, il pleut, il fait 5 degrés.]]"],
    ["🏷️", "Vive les soldes !", "sizes and prices: [[Je fais du 38.]] [[Ça coûte combien ?]]"],
    ["📱", "Les objets connectés", "[[Je vais acheter…]] / [[Je viens d'acheter…]] · [[Ça sert à quoi ?]]"],
    ["🎒", "Au service des objets trouvés", "describe an object: [[Ce sac est grand, noir et lourd.]]"]
  ],
  goals: [
    "Say when in the year: [[en hiver]], [[en janvier]], [[début septembre]], [[fin juillet]]",
    "Name clothes, accessories, colours and materials: [[un pull en laine gris]]",
    "Make adjectives agree and put them in the right place: [[une belle robe noire]]",
    "Give your opinion on clothes: [[Je trouve ça joli.]] · [[Ça ne me plaît pas.]] · [[Quelle horreur !]]",
    "Talk about the weather: [[Il fait beau.]] [[Il pleut.]] [[Il fait 18 degrés.]]",
    "Ask for and give your size: [[Quelle est votre taille ?]] · [[Je chausse du 40.]]",
    "Talk about the near future and the recent past: [[Je vais acheter…]] · [[Je viens d'acheter…]]",
    "Describe an object and say what it's for: [[C'est petit, rond et léger. Ça sert à…]]"
  ],
  glance: [
    ["🗣️", "Communication", "times of the year · opinions on clothes · the weather · sizes · prices · describing objects"],
    ["🧩", "Grammaire", "adjective agreement and position · futur proche · passé récent · ce, cet, cette, ces · venir"],
    ["🗂️", "Vocabulaire", "clothes, accessories, colours, materials · weather and temperatures · tech and everyday objects · shape, size, weight"],
    ["🔊", "Phonétique", "elision (j', c', l', n', d') · liaison in [z] and [n]"],
    ["⭐", "The phrase to learn first", "[[Je peux essayer ? Je fais du 38.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "In the department store", titleFr: "Au grand magasin · Je peux l'essayer ?",
      note: "Camille is looking for a dress in the sales. Listen for colours, size and how she gives her opinion: [[Je trouve ça joli]], [[Ça ne me plaît pas]].",
      scene: "grandmagasin", staff: "La vendeuse", people: { "La vendeuse": "f2", "Camille": "f3" },
      lines: [
        ["La vendeuse", "Bonjour, madame. Je peux vous aider ?", "Hello. Can I help you?"],
        ["Camille", "Oui, je cherche une robe pour l'été. Une petite robe légère.", "Yes, I'm looking for a dress for the summer. A light little dress."],
        ["La vendeuse", "Quelle est votre taille ?", "What's your size?"],
        ["Camille", "Je fais du 38.", "I'm a 38."],
        ["La vendeuse", "Nous avons cette robe en coton, en bleu ou en blanc. Elle est très à la mode.", "We have this cotton dress, in blue or in white. It's very fashionable."],
        ["Camille", "Hmm, le blanc, ça ne me plaît pas beaucoup. Je trouve ça triste. Vous avez des couleurs vives ?", "Hmm, I don't really like the white. I find it dull. Do you have bright colours?"],
        ["La vendeuse", "Oui, voilà la même en rouge, avec de grandes fleurs jaunes.", "Yes, here's the same one in red, with big yellow flowers."],
        ["Camille", "Ah oui, je trouve ça joli ! Je peux l'essayer ?", "Oh yes, I like that! Can I try it on?"],
        ["La vendeuse", "Bien sûr. Les cabines sont au fond, à droite.", "Of course. The fitting rooms are at the back, on the right."],
        ["Camille", "… Elle est parfaite ! Elle coûte combien ?", "… It's perfect! How much is it?"],
        ["La vendeuse", "Elle est à quarante-neuf euros, moins trente pour cent. Ça fait trente-quatre euros trente. C'est une bonne affaire !", "It's forty-nine euros, minus thirty per cent. That makes thirty-four euros thirty. It's a bargain!"]
      ],
      glossary: [["Je fais du 38.", "I'm a size 38"], ["Ça ne me plaît pas.", "I don't like it"], ["essayer", "to try on"], ["une bonne affaire", "a bargain"]]
    },
    {
      id: "d2", n: 2, title: "What shall I wear today?", titleFr: "Qu'est-ce que je mets aujourd'hui ?",
      note: "Victor checks the weather app before getting dressed. Listen to the weather phrases: [[Il fait froid.]] [[Il pleut.]] [[Il y a du vent.]]",
      scene: "maison", people: { "Victor": "m5", "Léa": "f8" }, phone: ["Victor"],
      lines: [
        ["Victor", "Léa, il fait quel temps aujourd'hui ?", "Léa, what's the weather like today?"],
        ["Léa", "Regarde ton appli ! Moi, je pense qu'il fait froid.", "Look at your app! I think it's cold."],
        ["Victor", "Alors… Ce matin, il fait trois degrés et il y a du vent. Cet après-midi, il pleut.", "So… This morning it's three degrees and windy. This afternoon it's raining."],
        ["Léa", "Brrr ! Mets ton manteau gris et ton écharpe en laine.", "Brrr! Put on your grey coat and your wool scarf."],
        ["Victor", "Et mes baskets blanches ?", "And my white trainers?"],
        ["Léa", "Non, il pleut ! Prends tes bottes. Et un parapluie !", "No, it's raining! Take your boots. And an umbrella!"],
        ["Victor", "Et demain ?", "And tomorrow?"],
        ["Léa", "Demain, il fait beau mais il fait froid. Il y a du soleil et il fait cinq degrés.", "Tomorrow it's nice but cold. There's sunshine and it's five degrees."]
      ],
      glossary: [["Il fait quel temps ?", "what's the weather like?"], ["Il y a du vent.", "it's windy"], ["Il pleut.", "it's raining"], ["mettre", "to put on (clothes)"]]
    },
    {
      id: "d3", n: 3, title: "In the shoe shop", titleFr: "Au magasin de chaussures · Vous chaussez du combien ?",
      note: "For shoes, French says [[la pointure]], not <i>la taille</i>, and [[je chausse du…]]. Listen for the demonstratives [[ces]] and [[cette]].",
      scene: "chaussures", staff: "Le vendeur", people: { "Le vendeur": "m3", "Victor": "m5" },
      lines: [
        ["Victor", "Bonjour ! Ces bottes en cuir, elles sont en solde ?", "Hello! Are these leather boots in the sale?"],
        ["Le vendeur", "Oui, moins cinquante pour cent. Vous chaussez du combien ?", "Yes, fifty per cent off. What's your shoe size?"],
        ["Victor", "Je fais du 43.", "I'm a 43."],
        ["Le vendeur", "Je regarde… Désolé, en 43, nous n'avons pas cette couleur. Nous avons du 42 ou du 44.", "Let me look… Sorry, in 43 we don't have this colour. We have 42 or 44."],
        ["Victor", "Je peux essayer le 44 ?", "Can I try the 44?"],
        ["Le vendeur", "Voilà. Ça va ?", "Here you are. How are they?"],
        ["Victor", "Elles sont un peu grandes, mais elles sont très confortables. Et elles coûtent combien ?", "They're a bit big, but very comfortable. And how much are they?"],
        ["Le vendeur", "Quatre-vingt-dix euros au lieu de cent quatre-vingts.", "Ninety euros instead of a hundred and eighty."],
        ["Victor", "Ce n'est pas cher ! Je les prends.", "That's not expensive! I'll take them."]
      ],
      glossary: [["la pointure", "shoe size"], ["Je chausse du 43.", "I take a size 43 (shoes)"], ["au lieu de", "instead of"], ["Je les prends.", "I'll take them"]]
    },
    {
      id: "d4", n: 4, title: "Special offers on connected objects", titleFr: "Promotion sur les objets connectés",
      note: "A father and his son in the electronics department. Listen to the near future ([[je vais…]]), the recent past ([[je viens de…]]) and [[Ça sert à quoi ?]]",
      scene: "grandmagasin", people: { "Le père": "m4", "Hugo": "m7" },
      lines: [
        ["Hugo", "Allez, viens, papa ! Le rayon informatique, c'est là ! Moins cinquante pour cent sur les ordinateurs !", "Come on, Dad! The computer department is here! Fifty per cent off computers!"],
        ["Le père", "Hmm… Nous allons dépenser beaucoup d'argent…", "Hmm… We're going to spend a lot of money…"],
        ["Hugo", "Mais non, nous allons faire de bonnes affaires ! Regarde, je viens de voir cet ordinateur : il est léger et il a un grand écran.", "No, we're going to get bargains! Look, I've just seen this computer: it's light and it has a big screen."],
        ["Le père", "Et combien ça coûte ?", "And how much does it cost?"],
        ["Hugo", "Quatre cent quarante-neuf euros, au lieu de huit cent quatre-vingt-dix-huit.", "Four hundred and forty-nine euros, instead of eight hundred and ninety-eight."],
        ["Le père", "Ce n'est pas cher. Et ça, qu'est-ce que c'est ? Ça sert à quoi ?", "That's not expensive. And what's that? What's it for?"],
        ["Hugo", "C'est une liseuse numérique. Avec ça, on peut lire des livres sans papier.", "It's an e-reader. With that, you can read books without paper."],
        ["Le père", "Bon, d'accord, je prends l'ordinateur pour toi et la liseuse pour moi !", "All right, I'll take the computer for you and the e-reader for me!"],
        ["Hugo", "Merci, papa ! Tu viens de faire de bonnes affaires !", "Thanks, Dad! You've just got some bargains!"]
      ],
      glossary: [["dépenser", "to spend"], ["je viens de voir", "I've just seen"], ["Ça sert à quoi ?", "what's it for?"], ["une liseuse", "an e-reader"]]
    },
    {
      id: "d5", n: 5, title: "At the lost property office", titleFr: "Au service des objets trouvés",
      note: "Marc lost his rucksack on the train. The agent asks him to describe it: size, colour, material, what's inside. Listen to [[ce]], [[cet]], [[cette]], [[ces]].",
      scene: "objets", staff: "L'agente", people: { "L'agente": "f6", "Marc": "m2" },
      lines: [
        ["Marc", "Bonjour, madame. Je viens de perdre mon sac à dos dans le train de Lyon.", "Hello. I've just lost my rucksack on the Lyon train."],
        ["L'agente", "Il est comment, votre sac ? Il est de quelle couleur ?", "What's your bag like? What colour is it?"],
        ["Marc", "Il est noir et vert, en tissu. Il est assez grand et un peu lourd.", "It's black and green, made of fabric. It's quite big and a bit heavy."],
        ["L'agente", "Qu'est-ce qu'il y a dedans ?", "What's inside?"],
        ["Marc", "Un portefeuille en cuir marron, un ordinateur portable, deux livres et mes lunettes de soleil.", "A brown leather wallet, a laptop, two books and my sunglasses."],
        ["L'agente", "Attendez, je vais regarder… Alors, ce sac à dos, ce portefeuille, cet ordinateur et ces lunettes, ils sont à vous ?", "Wait, I'll have a look… So, this rucksack, this wallet, this computer and these glasses, are they yours?"],
        ["Marc", "Oui ! Super ! Et cette écharpe rose, ce n'est pas à moi.", "Yes! Great! And this pink scarf isn't mine."],
        ["L'agente", "Très bien. Vous allez signer ici, s'il vous plaît. Et voilà votre sac !", "Fine. You're going to sign here, please. And here's your bag!"]
      ],
      glossary: [["perdre", "to lose"], ["Il est comment ?", "what's it like?"], ["lourd ≠ léger", "heavy ≠ light"], ["C'est à vous ?", "is it yours?"]]
    }
  ],

  vocab: [
    { t: "un pantalon", en: "trousers", pic: "👖", cat: "Les vêtements", g: "m" },
    { t: "un jean", en: "jeans", pic: "👖", cat: "Les vêtements", g: "m", pr: "DJEEN" },
    { t: "une robe", en: "a dress", pic: "👗", cat: "Les vêtements", g: "f" },
    { t: "une jupe", en: "a skirt", pic: "👗", cat: "Les vêtements", g: "f" },
    { t: "une chemise", en: "a shirt", pic: "👔", cat: "Les vêtements", g: "f" },
    { t: "un tee-shirt", en: "a T-shirt", pic: "👕", cat: "Les vêtements", g: "m" },
    { t: "un pull", en: "a jumper", pic: "🧶", cat: "Les vêtements", g: "m" },
    { t: "une veste", en: "a jacket", pic: "🧥", cat: "Les vêtements", g: "f" },
    { t: "un manteau", en: "a coat", pic: "🧥", cat: "Les vêtements", g: "m" },
    { t: "un costume", en: "a suit", pic: "🤵", cat: "Les vêtements", g: "m" },
    { t: "un maillot de bain", en: "a swimsuit", pic: "🩱", cat: "Les vêtements", g: "m" },
    { t: "des chaussures", en: "shoes", pic: "👞", cat: "Les vêtements", g: "pl" },
    { t: "des baskets", en: "trainers, sneakers", pic: "👟", cat: "Les vêtements", g: "pl" },
    { t: "des bottes", en: "boots", pic: "👢", cat: "Les vêtements", g: "pl" },
    { t: "un sac à main", en: "a handbag", pic: "👜", cat: "Les accessoires", g: "m" },
    { t: "une ceinture", en: "a belt", pic: "🪢", cat: "Les accessoires", g: "f" },
    { t: "une écharpe", en: "a scarf", pic: "🧣", cat: "Les accessoires", g: "f" },
    { t: "un chapeau", en: "a hat", pic: "👒", cat: "Les accessoires", g: "m" },
    { t: "des lunettes de soleil", en: "sunglasses", pic: "🕶️", cat: "Les accessoires", g: "pl" },
    { t: "un bijou, des bijoux", en: "a piece of jewellery", pic: "💍", cat: "Les accessoires" },
    { t: "une montre", en: "a watch", pic: "⌚", cat: "Les accessoires", g: "f" },
    { t: "rouge", en: "red", pic: "🔴", cat: "Les couleurs" },
    { t: "orange", en: "orange (never changes)", pic: "🟠", cat: "Les couleurs" },
    { t: "jaune", en: "yellow", pic: "🟡", cat: "Les couleurs" },
    { t: "vert, verte", en: "green", pic: "🟢", cat: "Les couleurs" },
    { t: "bleu, bleue", en: "blue", pic: "🔵", cat: "Les couleurs" },
    { t: "violet, violette", en: "purple", pic: "🟣", cat: "Les couleurs" },
    { t: "rose", en: "pink", pic: "🌸", cat: "Les couleurs" },
    { t: "noir, noire", en: "black", pic: "⚫", cat: "Les couleurs" },
    { t: "blanc, blanche", en: "white", pic: "⚪", cat: "Les couleurs" },
    { t: "gris, grise", en: "grey", pic: "🩶", cat: "Les couleurs" },
    { t: "marron", en: "brown (never changes)", pic: "🟤", cat: "Les couleurs" },
    { t: "en coton", en: "(made of) cotton", pic: "☁️", cat: "Les matières" },
    { t: "en laine", en: "(made of) wool", pic: "🐑", cat: "Les matières" },
    { t: "en cuir", en: "(made of) leather", pic: "🐄", cat: "Les matières" },
    { t: "en soie", en: "(made of) silk", pic: "🎀", cat: "Les matières" },
    { t: "en jean", en: "(made of) denim", pic: "👖", cat: "Les matières" },
    { t: "à rayures", en: "striped", pic: "🦓", cat: "Les matières" },
    { t: "la taille", en: "size (clothes)", pic: "📏", cat: "Acheter", g: "f" },
    { t: "la pointure", en: "shoe size", pic: "👣", cat: "Acheter", g: "f" },
    { t: "la cabine d'essayage", en: "the fitting room", pic: "🚪", cat: "Acheter", g: "f" },
    { t: "essayer", en: "to try on", pic: "🪞", cat: "Acheter" },
    { t: "les soldes", en: "the sales", pic: "🏷️", cat: "Acheter", g: "pl" },
    { t: "une promotion", en: "a special offer", pic: "📢", cat: "Acheter", g: "f" },
    { t: "cher, chère", en: "expensive", pic: "💸", cat: "Acheter" },
    { t: "une bonne affaire", en: "a bargain", pic: "🤑", cat: "Acheter", g: "f" },
    { t: "Il fait beau.", en: "The weather's nice.", pic: "🌤️", cat: "La météo" },
    { t: "Il y a du soleil.", en: "It's sunny.", pic: "☀️", cat: "La météo" },
    { t: "Il pleut.", en: "It's raining.", pic: "🌧️", cat: "La météo" },
    { t: "Il neige.", en: "It's snowing.", pic: "❄️", cat: "La météo" },
    { t: "Il y a du vent.", en: "It's windy.", pic: "💨", cat: "La météo" },
    { t: "Il y a des nuages.", en: "It's cloudy.", pic: "☁️", cat: "La météo" },
    { t: "Il y a un orage.", en: "There's a storm.", pic: "⛈️", cat: "La météo" },
    { t: "Il fait chaud.", en: "It's hot.", pic: "🥵", cat: "La météo" },
    { t: "Il fait froid.", en: "It's cold.", pic: "🥶", cat: "La météo" },
    { t: "Il fait 18 degrés.", en: "It's 18 degrees.", pic: "🌡️", cat: "La météo", noDict: true },
    { t: "un ordinateur portable", en: "a laptop", pic: "💻", cat: "Les objets technologiques", g: "m" },
    { t: "une tablette", en: "a tablet", pic: "📱", cat: "Les objets technologiques", g: "f" },
    { t: "un smartphone", en: "a smartphone", pic: "📱", cat: "Les objets technologiques", g: "m" },
    { t: "une liseuse", en: "an e-reader", pic: "📖", cat: "Les objets technologiques", g: "f" },
    { t: "un appareil photo", en: "a camera", pic: "📷", cat: "Les objets technologiques", g: "m" },
    { t: "des écouteurs", en: "earphones", pic: "🎧", cat: "Les objets technologiques", g: "pl" },
    { t: "un objet connecté", en: "a connected (smart) object", pic: "⌚", cat: "Les objets technologiques", g: "m" },
    { t: "un sac à dos", en: "a rucksack", pic: "🎒", cat: "Les objets du quotidien", g: "m" },
    { t: "un portefeuille", en: "a wallet", pic: "👛", cat: "Les objets du quotidien", g: "m" },
    { t: "des clés", en: "keys", pic: "🔑", cat: "Les objets du quotidien", g: "pl" },
    { t: "un parapluie", en: "an umbrella", pic: "☂️", cat: "Les objets du quotidien", g: "m" },
    { t: "une valise", en: "a suitcase", pic: "🧳", cat: "Les objets du quotidien", g: "f" },
    { t: "grand ≠ petit", en: "big ≠ small", pic: "📐", cat: "Décrire un objet" },
    { t: "lourd ≠ léger", en: "heavy ≠ light", pic: "🏋️", cat: "Décrire un objet" },
    { t: "carré", en: "square", pic: "⬛", cat: "Décrire un objet" },
    { t: "rond", en: "round", pic: "⚪", cat: "Décrire un objet" },
    { t: "rectangulaire", en: "rectangular", pic: "▬", cat: "Décrire un objet" },
    { t: "Ça sert à quoi ?", en: "What's it for?", pic: "❓", cat: "Décrire un objet" }
  ],

  grammar: [
    {
      id: "g-annee",
      title: "When in the year: [[en hiver]], [[en janvier]], [[début septembre]]",
      body: [
        "Seasons: [[en hiver]], [[en été]], [[en automne]] but [[au printemps]]. Months: [[en janvier]], [[en juillet]] (or [[au mois de juillet]]).",
        "To be more precise: [[début septembre]] (early), [[mi-septembre]] (mid), [[fin septembre]] (late). No article and no preposition!",
        "The French sales (<b>les soldes</b>) happen twice a year: <b>en hiver</b> (from early or mid-January) and <b>en été</b> (from late June), for about four weeks."
      ],
      info: [
        { type: "scale", title: "🗓️ Début, mi-, fin… · one month", colors: ["#e6f5d8", "#7d9a2e"], items: [
          { v: 6, fr: "début septembre", en: "early September (1st–10th)", pic: "🌱" }, { v: 50, fr: "mi-septembre", en: "mid-September (around the 15th)", pic: "🌿" }, { v: 94, fr: "fin septembre", en: "late September (20th–30th)", pic: "🍂" }
        ], ends: ["le 1er", "le 30"] },
        { type: "calendar", title: "📅 Les saisons et les soldes", note: "🏷️ <b>Soldes d'hiver</b>: January–February · <b>Soldes d'été</b>: late June–July." }
      ]
    },
    {
      id: "g-adj",
      title: "Adjectives agree: [[un pull noir]] · [[une veste noire]] · [[des chaussures noires]]",
      body: [
        "An adjective takes the gender and number of its noun. <b>Feminine</b>: add <b>-e</b> ([[petit]] → [[petite]]). Adjectives already ending in <b>-e</b> don't change ([[rouge]], [[jaune]], [[rose]], [[utile]]). Some double their last consonant: [[bon]] → [[bonne]], [[violet]] → [[violette]], [[naturel]] → [[naturelle]].",
        "<b>Plural</b>: add <b>-s</b> (silent): [[noirs]], [[noires]]. Adjectives ending in <b>-s</b> or <b>-x</b> don't change: [[gris]], [[un pull gris → des pulls gris]].",
        "Irregular ones to learn: [[blanc / blanche]], [[cher / chère]], [[léger / légère]], [[long / longue]], [[beau / belle / beaux / belles]], [[nouveau / nouvelle / nouveaux]]. And [[orange]], [[marron]] never change at all!"
      ],
      info: [
        { type: "merge", title: "⚗️ From masculine to feminine", rows: [
          { a: "petit", b: "+ e", g: "f", r: "petite", ex: "une petite robe" },
          { a: "rouge", b: "—", g: "x", r: "rouge", ex: "une robe rouge", no: true },
          { a: "bon", b: "+ ne", g: "f", r: "bonne", ex: "une bonne affaire" },
          { a: "cher", b: "-er → -ère", g: "f", r: "chère", ex: "une veste chère" },
          { a: "blanc", b: "→ -che", g: "f", r: "blanche", ex: "une chemise blanche" },
          { a: "beau", b: "!", g: "f", r: "belle", ex: "une belle robe" }
        ] },
        { type: "pics", title: "🎨 Les couleurs · masculine / feminine", items: [
          { t: "rouge", pic: "🔴", en: "same" }, { t: "jaune", pic: "🟡", en: "same" }, { t: "rose", pic: "🌸", en: "same" }, { t: "orange", pic: "🟠", en: "never changes" }, { t: "marron", pic: "🟤", en: "never changes" },
          { t: "vert, verte", pic: "🟢", en: "+e" }, { t: "bleu, bleue", pic: "🔵", en: "+e" }, { t: "noir, noire", pic: "⚫", en: "+e" }, { t: "gris, grise", pic: "🩶", en: "+e" }, { t: "violet, violette", pic: "🟣", en: "+te" }, { t: "blanc, blanche", pic: "⚪", en: "irregular" }
        ] }
      ],
      widget: {
        type: "agree", label: "Dress the model · pick a clothing item, an adjective, singular / plural",
        words: [
          { f: { ms: "noir", fs: "noire", mp: "noirs", fp: "noires" }, pos: "after", en: "black" },
          { f: { ms: "blanc", fs: "blanche", mp: "blancs", fp: "blanches" }, pos: "after", en: "white" },
          { f: { ms: "gris", fs: "grise", mp: "gris", fp: "grises" }, pos: "after", en: "grey" },
          { f: { ms: "rouge", fs: "rouge", mp: "rouges", fp: "rouges" }, pos: "after", en: "red" },
          { f: { ms: "violet", fs: "violette", mp: "violets", fp: "violettes" }, pos: "after", en: "purple" },
          { f: { ms: "cher", fs: "chère", mp: "chers", fp: "chères" }, pos: "after", en: "expensive" },
          { f: { ms: "petit", fs: "petite", mp: "petits", fp: "petites" }, pos: "before", en: "small" },
          { f: { ms: "beau", msv: "bel", fs: "belle", mp: "beaux", fp: "belles" }, pos: "before", en: "beautiful" },
          { f: { ms: "nouveau", msv: "nouvel", fs: "nouvelle", mp: "nouveaux", fp: "nouvelles" }, pos: "before", en: "new" }
        ],
        nouns: [{ t: "pantalon", g: "m", pic: "👖" }, { t: "robe", g: "f", pic: "👗" }, { t: "manteau", g: "m", pic: "🧥" }, { t: "veste", g: "f", pic: "🧥" }, { t: "chemise", g: "f", pic: "👔" }, { t: "pull", g: "m", pic: "🧶" }, { t: "anorak", g: "m", v: true, pic: "🧥" }, { t: "écharpe", g: "f", v: true, pic: "🧣" }]
      }
    },
    {
      id: "g-place",
      title: "Where does the adjective go? Usually <b>after</b> the noun",
      body: [
        "Most adjectives go <b>after</b> the noun, always colours, nationalities and shapes: [[une veste noire]], [[un sac rond]], [[un vin italien]].",
        "A few short, very common adjectives go <b>before</b>: [[petit]], [[grand]], [[beau]], [[joli]], [[bon]], [[mauvais]], [[nouveau]], [[jeune]], [[vieux]]: [[une petite robe]], [[un grand écran]], [[une jolie veste]].",
        "You can have one of each: [[une petite robe noire]], [[un grand sac rouge]]. Before a plural adjective, [[des]] becomes [[de]]: [[de belles robes]], [[de bonnes affaires]]."
      ],
      info: { type: "pattern", title: "📐 The adjective sandwich", rows: [
        [{ opts: ["un", "une"] }, { opts: ["petit(e)", "grand(e)", "joli(e)", "nouveau / nouvelle", "beau / belle"] }, { opts: ["sac", "robe", "manteau", "veste"] }, { opts: ["noir(e)", "rouge", "en cuir", "à rayures", "italien(ne)"] }]
      ], note: "BAGS before the noun: <b>B</b>eauty (beau, joli) · <b>A</b>ge (jeune, vieux, nouveau) · <b>G</b>ood/bad (bon, mauvais) · <b>S</b>ize (petit, grand). Everything else after!" }
    },
    {
      id: "g-avis",
      title: "Giving your opinion on clothes",
      body: ["To like it: [[Je trouve ça joli.]] · [[Ça me plaît.]] · [[C'est à la mode.]] · [[J'adore !]] To dislike it: [[Ça ne me plaît pas.]] · [[C'est moche.]] · [[Quelle horreur !]] Use [[trop]] for “too much”: [[C'est trop cher.]] · [[Elle est trop petite.]]"],
      info: { type: "scale", title: "😍 → 😱 From love to horror", colors: ["#2f8a4f", "#e0474f"], items: [
        { v: 4, fr: "J'adore !", en: "I love it!", pic: "😍" }, { v: 28, fr: "Je trouve ça joli.", en: "I think it's pretty.", pic: "🙂" }, { v: 52, fr: "Bof…", en: "meh…", pic: "😐" }, { v: 74, fr: "Ça ne me plaît pas.", en: "I don't like it.", pic: "🙁" }, { v: 96, fr: "Quelle horreur !", en: "How awful!", pic: "😱" }
      ], ends: ["+ + +", "− − −"] }
    },
    {
      id: "g-meteo",
      title: "The weather: [[Il fait beau.]] · [[Il pleut.]] · [[Il fait 18 degrés.]]",
      body: [
        "French uses three structures for the weather: [[Il fait]] + adjective / temperature ([[Il fait beau.]] [[Il fait froid.]] [[Il fait 18 degrés.]]), [[Il y a]] + du / de la / des ([[Il y a du soleil.]] [[Il y a des nuages.]]) and a verb ([[Il pleut.]] [[Il neige.]]).",
        "Below zero: [[Il fait moins cinq.]] (−5 °C). To ask: [[Il fait quel temps ?]] · [[Quel temps fait-il ?]] · [[Il fait combien ?]] Use [[mais]] for contrast: [[Il fait beau mais il fait froid.]]"
      ],
      info: [
        { type: "pics", title: "🌦️ La météo · tap to hear", from: ["La météo"] },
        { type: "scale", title: "🌡️ What shall I wear? From −5 °C to 35 °C", colors: ["#5aa9e6", "#f0c419", "#e0474f"], items: [
          { v: 6, fr: "−5 °C : un manteau", en: "Il fait moins cinq.", pic: "🧥🧣" }, { v: 28, fr: "5 °C : un pull", en: "Il fait cinq degrés.", pic: "🧶👢" },
          { v: 50, fr: "15 °C : une veste", en: "Il fait quinze degrés.", pic: "🧥" }, { v: 72, fr: "25 °C : un tee-shirt", en: "Il fait vingt-cinq degrés.", pic: "👕" }, { v: 94, fr: "35 °C : un maillot de bain", en: "Il fait trente-cinq degrés !", pic: "🩱🕶️" }
        ], ends: ["−5 °C", "35 °C"] },
        { type: "card", style: "board", caption: "📱 The weather app · tap a line", title: "MÉTÉO · LILLE", sub: "aujourd'hui et demain", rows: [["Ce matin 🌬️", "3 °C · du vent", "Ce matin, il fait trois degrés et il y a du vent."], ["Cet après-midi 🌧️", "6 °C · pluie", "Cet après-midi, il pleut et il fait six degrés."], ["Ce soir ☁️", "2 °C · nuages", "Ce soir, il y a des nuages et il fait deux degrés."], ["Demain ☀️", "5 °C · soleil", "Demain, il fait beau mais il fait froid : cinq degrés."]] }
      ]
    },
    {
      id: "g-taille",
      title: "Sizes and prices: [[Je fais du 38.]] · [[Ça coûte combien ?]]",
      body: [
        "Clothes: [[Quelle est votre taille ?]] · [[Vous faites du combien ?]] → [[Je fais du 38.]] (or [[du M]]). Shoes: [[Quelle est votre pointure ?]] → [[Je chausse du 40.]] / [[Je fais du 40.]]",
        "Prices: [[Ça coûte combien ?]] · [[Combien coûte cette veste ?]] · [[Combien coûtent ces bottes ?]] → [[Ça coûte 149 euros.]] Then: [[C'est cher !]] · [[Ce n'est pas cher.]] · [[C'est une bonne affaire !]] With a discount: [[moins trente pour cent]] (−30 %)."
      ],
      info: { type: "card", style: "label", caption: "🏷️ A sales label · tap a line", title: "SOLDES −30 %", sub: "Robe en coton · rouge à fleurs", rows: [["Taille", "36 · 38 · 40 · 42", "tailles trente-six, trente-huit, quarante, quarante-deux"], ["Prix", "49,00 €", "quarante-neuf euros"], ["Remise", "−30 %", "moins trente pour cent"], ["Prix soldé", "34,30 €", "trente-quatre euros trente"]], foot: "100 % coton · lavage à 30 °C" },
      widget: { type: "prices", label: "Sale prices · hear it, read it, write it", prices: [9.99, 14.5, 19.9, 24, 34.3, 39.99, 49, 59.5, 75, 89.9, 99, 149, 199.99] }
    },
    {
      id: "g-temps",
      title: "Near future and recent past: [[je vais acheter]] · [[je viens d'acheter]]",
      body: [
        "<b>Futur proche</b> (going to): [[aller]] in the present + infinitive: [[Je vais trouver un ordinateur pas cher.]] · [[Demain, nous allons faire les soldes.]] Often with [[demain]], [[ce soir]], [[lundi matin]], [[la semaine prochaine]].",
        "<b>Passé récent</b> (have just): [[venir]] in the present + [[de]] + infinitive: [[Je viens de dépenser beaucoup d'argent !]] · [[Nous venons de vendre la voiture.]] <b>de</b> becomes <b>d'</b> before a vowel: [[Il vient d'acheter une tablette.]]",
        "In the negative, the <b>ne… pas</b> goes around <i>aller</i> or <i>venir</i>: [[Je ne vais pas acheter ce manteau.]]"
      ],
      info: [
        { type: "timeline", title: "⏱️ Just before, now, just after", ends: ["passé récent", "présent", "futur proche"], items: [
          { x: 12, fr: "Je viens d'acheter une tablette.", en: "I've just bought a tablet.", pic: "🛍️" },
          { x: 30, fr: "Il vient de faire les soldes.", en: "He's just been to the sales.", pic: "🏷️" },
          { x: 50, fr: "J'utilise ma tablette.", en: "I'm using my tablet.", pic: "📱" },
          { x: 70, fr: "Nous allons faire de bonnes affaires !", en: "We're going to get bargains!", pic: "🤑" },
          { x: 88, fr: "Je vais acheter une liseuse.", en: "I'm going to buy an e-reader.", pic: "📖" }
        ] },
        { type: "conj", title: "🔁 aller (futur proche) and venir (passé récent)", verbs: [
          { inf: "aller", en: "to go → + infinitive", forms: ["je vais", "tu vas", "il / elle va", "nous allons", "vous allez", "ils / elles vont"] },
          { inf: "venir", en: "to come → de + infinitive", forms: ["je viens", "tu viens", "il / elle vient", "nous venons", "vous venez", "ils / elles viennent"] }
        ] }
      ],
      widget: {
        type: "combo", label: "Past, present or future? Pick a time and an action",
        rows: [{ k: "pr", label: "⬅️ just now (venir de)" }, { k: "pres", label: "⏺️ now (présent)" }, { k: "fp", label: "➡️ soon (aller)" }],
        cols: [{ k: "ordi", label: "💻 acheter un ordinateur" }, { k: "soldes", label: "🏷️ faire les soldes" }, { k: "argent", label: "💸 dépenser beaucoup" }, { k: "essayer", label: "🪞 essayer la robe" }],
        out: {
          "pr|ordi": ["Je viens d'acheter un ordinateur.", "I've just bought a computer.", "de → d' before a vowel"], "pres|ordi": ["J'achète un ordinateur.", "I'm buying a computer."], "fp|ordi": ["Je vais acheter un ordinateur.", "I'm going to buy a computer."],
          "pr|soldes": ["Nous venons de faire les soldes.", "We've just been to the sales."], "pres|soldes": ["Nous faisons les soldes.", "We're doing the sales."], "fp|soldes": ["Demain, nous allons faire les soldes.", "Tomorrow we're going to the sales."],
          "pr|argent": ["Tu viens de dépenser beaucoup d'argent !", "You've just spent a lot of money!"], "pres|argent": ["Tu dépenses beaucoup d'argent !", "You spend a lot of money!"], "fp|argent": ["Tu vas dépenser beaucoup d'argent !", "You're going to spend a lot of money!"],
          "pr|essayer": ["Elle vient d'essayer la robe.", "She's just tried on the dress."], "pres|essayer": ["Elle essaie la robe.", "She's trying on the dress."], "fp|essayer": ["Elle va essayer la robe.", "She's going to try on the dress."]
        }
      }
    },
    {
      id: "g-demo",
      title: "Pointing at things: [[ce]], [[cet]], [[cette]], [[ces]]",
      body: [
        "The demonstrative adjective means <i>this / that / these / those</i>. It shows an object or refers to one already mentioned: [[Je cherche un sac à dos. — Ce sac à dos est de quelle couleur ?]]",
        "[[ce]] + masculine ([[ce sac]]) · [[cet]] + masculine starting with a vowel or silent h ([[cet ordinateur]], [[cet homme]], [[cet hiver]]) · [[cette]] + feminine ([[cette valise]], [[cette écharpe]]) · [[ces]] + plural ([[ces lunettes]], [[ces livres]])."
      ],
      info: { type: "gender", title: "👉 ce · cet · cette · ces", cols: [
        { g: "m", badge: "masc.", head: "ce · cet", items: ["ce sac", "ce portefeuille", "cet ordinateur", "cet anorak", "cet hiver"], note: "<b>cet</b> before a vowel or silent h: you hear the t → <i>cè-t-ordinateur</i>." },
        { g: "f", badge: "fém.", head: "cette", items: ["cette valise", "cette écharpe", "cette robe", "cette tablette"], note: "cet and cette sound the same!" },
        { g: "pl", badge: "plur.", head: "ces", items: ["ces lunettes", "ces livres", "ces écouteurs"], note: "Liaison: [[ces_écharpes]] = <i>cé-z-écharpes</i>." }
      ] },
      widget: {
        type: "agree", label: "Point at it · pick an object and singular / plural",
        words: [{ f: { ms: "ce", msv: "cet", fs: "cette", mp: "ces", fp: "ces" }, pos: "det", en: "this / these" }],
        nouns: [{ t: "sac", g: "m", pic: "🎒" }, { t: "ordinateur", g: "m", v: true, pic: "💻" }, { t: "valise", g: "f", pic: "🧳" }, { t: "écharpe", g: "f", v: true, pic: "🧣" }, { t: "portefeuille", g: "m", pic: "👛" }, { t: "appareil photo", g: "m", v: true, pic: "📷", pl: "appareils photo" }, { t: "montre", g: "f", pic: "⌚" }]
      }
    },
    {
      id: "g-objet",
      title: "Describing an object and saying what it's for",
      body: [
        "Size: [[grand(e)]] ≠ [[petit(e)]] · shape: [[carré(e)]], [[rond(e)]], [[rectangulaire]] · weight: [[lourd(e)]] ≠ [[léger, légère]] · colour and material: [[C'est un pull vert et bleu, en laine.]]",
        "To ask what it's for: [[Ça sert à quoi ?]] → [[Ça sert à lire.]] · [[Avec ça, on peut écouter de la musique.]] · [[C'est pour prendre des photos.]]"
      ],
      info: { type: "form", style: "fiche", caption: "📝 The lost property form · tap a line", title: "SNCF · OBJETS TROUVÉS · DÉCLARATION DE PERTE", fields: [["Objet", "sac à dos", "un sac à dos"], ["Couleur", "noir et vert", "Il est noir et vert."], ["Matière", "en tissu", "Il est en tissu."], ["Taille", "assez grand", "Il est assez grand."], ["Poids", "un peu lourd", "Il est un peu lourd."], ["Contenu", "portefeuille, ordinateur, livres, lunettes", "Il y a un portefeuille, un ordinateur portable, deux livres et des lunettes de soleil."], ["Lieu", "train Paris → Lyon", "dans le train de Paris à Lyon"]] }
    }
  ],

  expressions: [
    { fn: "Pour situer un moment dans l'année", fnEn: "when?", icon: "🗓️", items: [
      ["En hiver, au printemps, en été, en automne.", "In winter, spring, summer, autumn.", "std", true],
      ["En janvier, en avril, en juillet…", "In January, April, July…", "std"],
      ["Début septembre, mi-septembre, fin septembre.", "Early, mid-, late September.", "std", true]
    ] },
    { fn: "Pour donner une appréciation", fnEn: "your opinion", icon: "👍", items: [
      ["Je trouve ça joli. / Ça me plaît.", "I think it's pretty. / I like it.", "std", true],
      ["C'est à la mode !", "It's fashionable!", "std"],
      ["Ça ne me plaît pas.", "I don't like it.", "std", true],
      ["C'est moche ! Quelle horreur !", "It's ugly! How awful!", "fam"]
    ] },
    { fn: "Pour parler de la météo", fnEn: "the weather", icon: "🌦️", items: [
      ["Il fait quel temps ?", "What's the weather like?", "std", true],
      ["Il fait beau. / Il y a du soleil.", "It's nice. / It's sunny.", "std", true],
      ["Il pleut. / Il y a de la pluie.", "It's raining.", "std"],
      ["Il fait 18 °C. / Il fait −5 °C.", "It's 18 / minus 5 degrees.", "std"],
      ["Il fait beau mais il fait froid.", "It's nice but cold.", "std"]
    ] },
    { fn: "Pour demander / dire la taille et la pointure", fnEn: "sizes", icon: "📏", items: [
      ["Quelle est votre taille ?", "What's your size?", "poli", true],
      ["Vous faites du combien ?", "What size are you?", "std"],
      ["Je fais du 38.", "I'm a 38.", "std", true],
      ["Quelle est votre pointure ? — Je chausse du 40.", "What's your shoe size? — I take a 40.", "std"],
      ["Je peux essayer ?", "Can I try it on?", "std", true]
    ] },
    { fn: "Pour demander / dire un prix", fnEn: "prices", icon: "💶", items: [
      ["Ça coûte combien ? / Combien ça coûte ?", "How much is it?", "std", true],
      ["Combien coûte ce manteau ?", "How much is this coat?", "std"],
      ["Ça coûte 149 €.", "It costs €149.", "std"],
      ["C'est cher ! / Ce n'est pas cher.", "It's expensive! / It's not expensive.", "std", true],
      ["C'est une bonne affaire !", "It's a bargain!", "std"]
    ] },
    { fn: "Pour décrire un objet", fnEn: "describing", icon: "🎒", items: [
      ["C'est un pull vert et bleu.", "It's a green and blue jumper.", "std"],
      ["Le sac est carré / rond / rectangulaire.", "The bag is square / round / rectangular.", "std"],
      ["C'est lourd. ≠ C'est léger.", "It's heavy. ≠ It's light.", "std", true],
      ["Ça sert à quoi ? — Avec ça, on peut lire.", "What's it for? — You can read with it.", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · buying clothes", lanes: ["La vendeuse", "Le client"], av: ["f2", "m5"], steps: [
    { s: 0, fr: "Bonjour ! Je peux vous aider ?", en: "Hello! Can I help you?" },
    { s: 1, fr: "Oui, je cherche un pull en laine.", en: "Yes, I'm looking for a wool jumper.", alt: ["Non merci, je regarde."] },
    { s: 0, fr: "Quelle est votre taille ?", en: "What's your size?" },
    { s: 1, fr: "Je fais du M. Vous l'avez en bleu ?", en: "I'm a medium. Do you have it in blue?" },
    { s: 0, fr: "Oui, voilà. Les cabines sont au fond.", en: "Yes, here you are. The fitting rooms are at the back." },
    { s: 1, fr: "Il me plaît ! Ça coûte combien ?", en: "I like it! How much is it?" },
    { s: 0, fr: "Trente-neuf euros, moins cinquante pour cent.", en: "€39, minus fifty per cent." },
    { s: 1, fr: "C'est une bonne affaire ! Je le prends.", en: "It's a bargain! I'll take it." }
  ] },

  sounds: {
    intro: "French hates two vowels in a row: it either <b>drops</b> one (elision) or <b>links</b> words with a sound (liaison).",
    letters: [
      { l: "j' c' l' n' d'", name: "l'élision", tip: "<b>je, ce, le, la, ne, de</b> lose their vowel before a vowel or a silent h: [[j'adore]], [[c'est]], [[l'hiver]], [[il n'y a pas]], [[d'acheter]]. Before a consonant they stay: [[je trouve]], [[la mode]].", ex: ["j'adore", "l'hiver", "il n'y a pas", "c'est cher"] },
      { l: "_z", name: "liaison [z]", tip: "<b>les, des, ces, deux, trois</b> + vowel: the final s / x is said <b>z</b>: [[les_accessoires]], [[des_achats]], [[ces_écharpes]], [[deux_ans]], [[trois_heures]]. Before a consonant: no sound ([[les DVD]]).", ex: ["les accessoires", "des achats", "ces écharpes", "trois heures"] },
      { l: "_n", name: "liaison [n]", tip: "<b>un</b> + vowel: you hear the n: [[un_euro]], [[un_hiver]], [[un_ordinateur]]. Before a consonant: just the nasal ([[un portefeuille]]).", ex: ["un euro", "un hiver", "un ordinateur", "un ancien modèle"] },
      { l: "ce n'est pas", name: "c'est → ce n'est pas", tip: "In the negative, <b>c'est</b> opens up again: [[C'est cher.]] → [[Ce n'est pas cher.]]", ex: ["C'est cher.", "Ce n'est pas cher.", "C'est à vous ?", "Ce n'est pas à moi."] }
    ],
    pairs: [
      { a: ["les DVD", "the DVDs"], b: ["les écouteurs", "the earphones"], note: "no liaison / [z]" },
      { a: ["un portefeuille", "a wallet"], b: ["un ordinateur", "a computer"], note: "nasal / [n] liaison" },
      { a: ["deux sacs", "two bags"], b: ["deux ans", "two years"], note: "no sound / [z]" },
      { a: ["ce sac", "this bag"], b: ["cet ordinateur", "this computer"], note: "ce / cet" },
      { a: ["il vient", "he comes"], b: ["ils viennent", "they come"], note: "nasal [ɛ̃] / [ɛn]" },
      { a: ["un pull blanc", "a white jumper"], b: ["une robe blanche", "a white dress"], note: "[blɑ̃] / [blɑ̃ʃ]" }
    ]
  },
  classify: {
    label: "⏱️ Passé récent, présent ou futur proche ?", q: "When does it happen?",
    options: ["⬅️ just happened (venir de)", "⏺️ now (présent)", "➡️ going to happen (aller)"],
    items: [
      { say: "Je viens d'acheter une tablette.", a: 0 }, { say: "Je vais acheter une liseuse.", a: 2 }, { say: "J'achète un ordinateur.", a: 1 },
      { say: "Nous venons de faire les soldes.", a: 0 }, { say: "Demain, ils vont faire les soldes.", a: 2 }, { say: "Elle essaie la robe.", a: 1 },
      { say: "Tu vas dépenser beaucoup d'argent !", a: 2 }, { say: "Il vient de perdre son sac.", a: 0 }, { say: "Vous allez signer ici.", a: 2 }, { say: "Il fait froid.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Camille cherche une robe pour l'hiver.", ok: false, explain: "[[une robe pour l'été]]" },
    { type: "tf", tag: "Dialogue 1", s: "Camille fait du 38.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Elle aime beaucoup la robe blanche.", ok: false, explain: "[[Le blanc, ça ne me plaît pas beaucoup.]]" },
    { type: "tf", tag: "Dialogue 2", s: "Cet après-midi, il pleut.", ok: true },
    { type: "mcq", tag: "Dialogue 2", q: "Qu'est-ce que Victor va mettre ?", options: ["un manteau, une écharpe et des bottes", "un tee-shirt et des baskets", "un maillot de bain"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Victor chausse du 43, mais il prend du 44.", ok: true },
    { type: "tf", tag: "Dialogue 4", s: "Le père achète une liseuse pour Hugo.", ok: false, explain: "The computer is for Hugo; the e-reader is for him." },
    { type: "mcq", tag: "Dialogue 5", q: "Marc décrit son sac. Il est…", options: ["noir et vert, assez grand", "rose et petit", "marron et en cuir"], answer: 0 },
    { type: "fill", tag: "Accord", sentence: "La ceinture de Victor est ___ .", options: ["cher", "chère", "chers"], answer: 1 },
    { type: "fill", tag: "Accord", sentence: "Les vestes ___ sont très à la mode.", options: ["noir", "noires", "noirs"], answer: 1 },
    { type: "fill", tag: "Accord", sentence: "Les lunettes de soleil sont ___ .", options: ["utile", "utiles", "utilles"], answer: 1 },
    { type: "fill", tag: "Accord", sentence: "Elle porte une chemise ___ .", options: ["blanc", "blanche", "blance"], answer: 1 },
    { type: "fill", tag: "Accord", sentence: "J'ai deux pulls ___ .", options: ["gris", "grises", "griss"], answer: 0, explain: "-s: no change in the plural" },
    { type: "fill", tag: "Accord", sentence: "Il a des chaussures ___ .", options: ["marron", "marrons", "marronnes"], answer: 0, explain: "[[marron]] never changes" },
    { type: "mcq", tag: "Place", q: "Which is correct?", options: ["une robe petite noire", "une petite robe noire", "une noire petite robe"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Place", q: "Which is correct?", options: ["Victor a un beau pantalon.", "Victor a un pantalon beau.", "Victor a un bel pantalon."], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Place", q: "Which is correct?", options: ["Elle porte toujours un manteau gris.", "Elle porte toujours un gris manteau.", "Elle porte toujours un manteau grise."], answer: 0, sayAnswer: true },
    { type: "fill", tag: "Météo", sentence: "Il ___ beau mais il fait froid.", options: ["fait", "est", "y a"], answer: 0 },
    { type: "fill", tag: "Météo", sentence: "Il y a ___ vent.", options: ["du", "de la", "le"], answer: 0 },
    { type: "fill", tag: "Météo", sentence: "En hiver, il ___ souvent à la montagne.", options: ["neige", "fait neige", "y a neige"], answer: 0 },
    { type: "fill", tag: "Futur proche", sentence: "Demain, mes amis et moi, nous ___ faire les soldes.", options: ["allons", "venons", "vont"], answer: 0 },
    { type: "fill", tag: "Futur proche", sentence: "En vacances, tu ___ utiliser ton appareil photo.", options: ["vas", "viens de", "va"], answer: 0 },
    { type: "fill", tag: "Passé récent", sentence: "Je viens ___ lire ce livre.", options: ["de", "à", "d'"], answer: 0 },
    { type: "fill", tag: "Passé récent", sentence: "Il vient ___ acheter une liseuse.", options: ["de", "d'", "à"], answer: 1, explain: "de → d' before a vowel" },
    { type: "type", tag: "Passé récent", q: "Passé récent: « Nous (vendre) la voiture. » → Nous …", answers: ["Nous venons de vendre la voiture.", "venons de vendre", "Nous venons de vendre la voiture"] },
    { type: "type", tag: "Futur proche", q: "Futur proche: « Vous (trouver) les DVD au premier étage. » → Vous …", answers: ["Vous allez trouver les DVD au premier étage.", "allez trouver", "Vous allez trouver les DVD au premier étage"] },
    { type: "fill", tag: "Démonstratifs", sentence: "___ hiver, je vais porter des pulls chauds.", options: ["Ce", "Cet", "Cette"], answer: 1, explain: "masculine + vowel / silent h → [[cet hiver]]" },
    { type: "fill", tag: "Démonstratifs", sentence: "___ veste grise est trop petite pour moi.", options: ["Ce", "Cet", "Cette"], answer: 2 },
    { type: "fill", tag: "Démonstratifs", sentence: "___ lunettes sont à vous ?", options: ["Ces", "Cette", "Ce"], answer: 0 },
    { type: "fill", tag: "Démonstratifs", sentence: "Combien coûte ___ ordinateur ?", options: ["ce", "cet", "cette"], answer: 1 },
    { type: "fill", tag: "venir", sentence: "Ils ___ de Montréal.", options: ["viennent", "venent", "vient"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["une écharpe", "un manteau", "une liseuse", "un pull"], answer: 2, explain: "une liseuse is a tech object, not clothing." },
    { type: "mcq", tag: "Vocabulaire", q: "Pour les chaussures, on demande…", options: ["la pointure", "la taille", "la mode"], answer: 0, sayAnswer: true },
    { type: "reply", tag: "Que répondre ?", prompt: "Quelle est votre taille ?", options: ["Je fais du 40.", "Il fait 40 degrés.", "Ça coûte 40 euros."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ça sert à quoi ?", options: ["Avec ça, on peut écouter de la musique.", "C'est rond et léger.", "Ça coûte cinquante euros."], answer: 0 },
    { type: "listen", tag: "Écoute", q: "What's the weather like?", say: "Aujourd'hui, il y a des nuages et il fait douze degrés.", options: ["cloudy, 12 °C", "sunny, 12 °C", "rainy, 2 °C"], answer: 0 },
    { type: "order", tag: "Construisez", en: "Can I try on this black jacket?", words: ["Je", "peux", "essayer", "cette", "veste", "noire", "?"] }
  ],

  roleplays: [
    { title: "👗 Au grand magasin", brief: "It's the sales! Buy a jumper: give your size, choose a colour, try it on, ask the price.", memo: ["un pull", "taille M", "bleu ?", "le prix ?"], partner: "f2", you: "m5",
      turns: [
        { them: "Bonjour ! Je peux vous aider ?", themEn: "Hello! Can I help you?", hint: "Say you're looking for a wool jumper.", you: "Oui, je cherche un pull en laine.", youEn: "Yes, I'm looking for a wool jumper." },
        { them: "Vous faites quelle taille ?", themEn: "What size are you?", hint: "Medium.", you: "Je fais du M.", youEn: "I'm a medium." },
        { them: "Voilà ce pull, en gris ou en jaune.", themEn: "Here's this jumper, in grey or yellow.", hint: "You don't like yellow; ask for blue.", you: "Le jaune ne me plaît pas. Vous l'avez en bleu ?", youEn: "I don't like the yellow. Do you have it in blue?" },
        { them: "Oui, voilà ! Il est à quarante euros, moins cinquante pour cent.", themEn: "Yes, here you are! It's €40, minus 50 per cent.", hint: "React: it's a bargain, you'll take it.", you: "Vingt euros ? C'est une bonne affaire ! Je le prends.", youEn: "Twenty euros? It's a bargain! I'll take it." }
      ] },
    { title: "🎒 Aux objets trouvés", brief: "You've just lost your bag at the station. Describe it to the agent.", memo: ["sac rouge, petit, en cuir", "dedans: clés, portefeuille, tablette"], partner: "f6", you: "f3",
      turns: [
        { them: "Bonjour, madame. Je vous écoute.", themEn: "Hello. How can I help?", hint: "Say you've just lost your bag (passé récent).", you: "Bonjour. Je viens de perdre mon sac à la gare.", youEn: "Hello. I've just lost my bag at the station." },
        { them: "Il est comment, votre sac ?", themEn: "What's your bag like?", hint: "Small, red, leather.", you: "C'est un petit sac rouge, en cuir.", youEn: "It's a small red leather bag." },
        { them: "Qu'est-ce qu'il y a dedans ?", themEn: "What's in it?", hint: "Keys, a wallet and a tablet.", you: "Il y a des clés, un portefeuille et une tablette.", youEn: "There are keys, a wallet and a tablet." },
        { them: "Ce sac, c'est à vous ?", themEn: "Is this bag yours?", hint: "Yes! Thank her.", you: "Oui, c'est mon sac ! Merci beaucoup, madame !", youEn: "Yes, it's my bag! Thank you so much!" }
      ] },
    { title: "📱 Au rayon multimédia", brief: "Ask a sales assistant about an object: what it is, what it's for and how much it costs.", memo: ["Qu'est-ce que c'est ?", "Ça sert à quoi ?", "Ça coûte combien ?"], partner: "m3", you: "m4",
      turns: [
        { them: "Bonjour ! Vous cherchez quelque chose ?", themEn: "Hello! Are you looking for something?", hint: "Point at an object and ask what it is.", you: "Oui. Qu'est-ce que c'est, cet objet ?", youEn: "Yes. What's this object?" },
        { them: "C'est une montre connectée.", themEn: "It's a smartwatch.", hint: "Ask what it's for.", you: "Ça sert à quoi ?", youEn: "What's it for?" },
        { them: "Avec ça, on peut lire ses messages et compter ses pas.", themEn: "With it you can read your messages and count your steps.", hint: "Ask the price.", you: "Et ça coûte combien ?", youEn: "And how much does it cost?" },
        { them: "Cent quarante-neuf euros, moins trente pour cent.", themEn: "€149, minus 30 per cent.", hint: "Say you're going to think about it, or you'll take it.", you: "Ce n'est pas cher ! Je vais la prendre.", youEn: "That's not expensive! I'm going to take it." }
      ] }
  ],

  ateliers: [
    { title: "Créer un objet", intro: "You're inventors! In groups, imagine an object, draw it and describe it without naming it. The class must match descriptions and drawings.",
      steps: [["Préparation", ["Imagine your object: what is it? How much does it cost? Where can you buy it?", "Give it a name, e.g. <i>les lunettes pour la pluie</i>."]], ["Réalisation", ["Draw the object and write its name.", "On another sheet, describe it <b>without its name</b>: colour, size, shape, weight, what it's for: [[L'objet est noir, petit, rond et léger. Il sert à voir quand il pleut.]]"]], ["Présentation", ["Put the drawings on the wall and the descriptions on a table.", "Match each description to a drawing.", "Sort them: indispensable, useful, gadget. Vote for the most useful and the craziest!"]]],
      phrases: ["Il est petit et rond.", "Il sert à…", "Avec cet objet, on peut…", "Il coûte… euros."] },
    { title: "Utiliser une application pour choisir des vêtements", tech: true, intro: "Use a French-language shopping site or app to dress an avatar on a budget.",
      steps: [["Préparation", ["Find a French-language clothing website or app.", "Create an account or an avatar for someone in your group."]], ["Réalisation", ["Decide your budget (e.g. 100 €) and the occasion: a party, an interview, a holiday.", "Choose an outfit: [[un pantalon noir, une chemise blanche…]] and add up the prices."]], ["Présentation", ["Present the outfit: [[Combien coûte cette tenue ?]] [[Je trouve ça joli !]]", "Vote for the best look."]]],
      phrases: ["Combien coûte cette tenue ?", "Je trouve ça très élégant.", "C'est trop cher pour notre budget !"] }
  ],
  delf: {
    skill: "Compréhension de l'oral", title: "Exercise 2 · understand a radio advert",
    about: "In the DELF A1 listening paper (about 20 minutes, 4 exercises) you hear short everyday recordings <b>twice</b>: a phone message, a public announcement, a radio advert, short dialogues. Here, listen to three original recordings (press ▶ as many times as you need, but try to answer after two listens).",
    tips: ["Read the questions <b>before</b> you listen: they tell you what to listen for.", "First listen: who is speaking, where, why?", "Second listen: the details (dates, prices, places).", "Don't panic if you don't understand every word."],
    items: [
      { type: "listen", q: "🔊 Radio advert. What is it about?", say: "Les Galeries du Centre vous annoncent les soldes d'hiver ! À partir du mercredi huit janvier, moins cinquante pour cent sur les manteaux et moins trente pour cent sur les chaussures. Ouvert tous les jours de neuf heures à vingt heures.", options: ["the winter sales", "a new restaurant", "a weather forecast"], answer: 0 },
      { type: "listen", q: "🔊 When do the sales start?", say: "Les Galeries du Centre vous annoncent les soldes d'hiver ! À partir du mercredi huit janvier, moins cinquante pour cent sur les manteaux et moins trente pour cent sur les chaussures.", options: ["Wednesday 8 January", "Monday 18 January", "Wednesday 1 January"], answer: 0 },
      { type: "listen", q: "🔊 What is −50 %?", say: "À partir du mercredi huit janvier, moins cinquante pour cent sur les manteaux et moins trente pour cent sur les chaussures.", options: ["coats", "shoes", "computers"], answer: 0 },
      { type: "listen", q: "🔊 Station announcement. What happened?", say: "Votre attention, s'il vous plaît. Un voyageur vient de perdre un sac à dos noir et vert dans le train de Lyon. Merci de le rapporter au service des objets trouvés, à côté du guichet numéro trois.", options: ["Someone lost a rucksack.", "A train is late.", "The station is closing."], answer: 0 },
      { type: "listen", q: "🔊 Where is the lost property office?", say: "Merci de le rapporter au service des objets trouvés, à côté du guichet numéro trois.", options: ["next to ticket desk 3", "on platform 3", "at the exit"], answer: 0 },
      { type: "listen", q: "🔊 Phone message from Léa. What does she ask?", say: "Salut, c'est Léa ! Demain, il va faire très froid : moins cinq degrés. Tu peux prendre mon écharpe en laine pour moi ? Merci, à demain !", options: ["to bring her wool scarf", "to buy a coat", "to go to the sales"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "timeline", title: "⚓ La marinière, un vêtement à succès", ends: ["1858", "", "aujourd'hui"], items: [
      { x: 6, fr: "1858 : l'uniforme des marins", en: "becomes the official uniform of French Navy sailors", pic: "⚓" },
      { x: 36, fr: "Années 1910 : Coco Chanel", en: "the designer makes it fashionable for women", pic: "👒" },
      { x: 66, fr: "Les créateurs : Jean Paul Gaultier", en: "the striped top becomes a fashion icon", pic: "👕" },
      { x: 94, fr: "Aujourd'hui : un symbole de la France", en: "a classic, made in Brittany and copied everywhere", pic: "🇫🇷" }
    ] }
  ],
  culture: [
    { icon: "👕", kind: "Civilisation", t: "La marinière", d: "The famous white top with blue stripes (<i>à rayures</i>) was first the uniform of French Navy sailors (<i>les marins</i>, hence the name). Coco Chanel adopted it, then designers like Jean Paul Gaultier made it an icon. Today it's a symbol of France, often made in Brittany." },
    { icon: "🕴️", kind: "Oh, le cliché !", t: "« Les Français sont élégants. »", d: "In everyday life, French people mostly dress simply: jeans are everywhere! The “French elegance” trick is classic cuts, few colours (lots of black, navy, grey and white) and one good accessory: a scarf, a bag, sunglasses." },
    { icon: "🏷️", kind: "Au fait !", t: "Les soldes", d: "In France, sales dates are set by law: twice a year, in winter (January) and in summer (late June), for four weeks. Outside these dates shops can only make <i>promotions</i>." },
    { icon: "🧣", kind: "Francophonie", t: "Quelques noms de vêtements au Québec", d: "In Québec: <b>une tuque</b> (= un bonnet, a woolly hat), <b>un chandail</b> (= un pull), <b>des bas</b> (= des chaussettes, socks), <b>des espadrilles</b> (= des baskets) and you <b>magasines</b> (= tu fais du shopping)!" },
    { icon: "🌡️", kind: "Au fait !", t: "Degrees Celsius", d: "The weather is given in °C: 0 °C = water freezes, 20 °C = pleasant, 30 °C = hot. To convert roughly from °F: subtract 30 and divide by 2." },
    { icon: "📏", kind: "Au fait !", t: "Sizes", d: "French women's sizes: 36 ≈ UK 8 / US 4, 38 ≈ UK 10 / US 6, 40 ≈ UK 12 / US 8. Shoe size 40 ≈ UK 6.5. Always try them on!" }
  ],
  tips: [
    { icon: "🎒", t: "BAGS before the noun", d: "Beauty, Age, Good/bad, Size go before: [[une jolie robe]], [[un vieux sac]], [[un bon prix]], [[un petit pull]]. Colours always after." },
    { icon: "⏩", t: "aller + infinitive = easy future", d: "With [[je vais]] + infinitive you can talk about any future plan without learning a new tense: [[Je vais acheter]], [[Je vais essayer]]." },
    { icon: "🔗", t: "Mark the liaisons", d: "When you write new words, draw a little ‿ between [[les‿accessoires]] or [[un‿euro]] to remember to link them." }
  ],
  mistakes: [
    ["une robe noir", "une robe noire", "agreement"],
    ["des chaussures marrons", "des chaussures marron", "marron never changes"],
    ["une noire veste", "une veste noire", "colours go after"],
    ["Il est froid. (weather)", "Il fait froid.", "weather → il fait"],
    ["Je fais 38.", "Je fais du 38.", "du + size"],
    ["Je viens acheter… (= I've just bought)", "Je viens d'acheter…", "venir de + infinitive"],
    ["ce ordinateur", "cet ordinateur", "cet before a vowel"],
    ["C'est ne pas cher.", "Ce n'est pas cher.", "ce n'est pas"]
  ]
});
