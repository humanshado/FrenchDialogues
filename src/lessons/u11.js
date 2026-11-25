// Unité 11 · Au grand air (book pp. 159–172)
// Situations: en avoir marre de la ville · changer de vie · vivre et travailler au vert · le jardin partagé · la vie à la montagne, à la mer, à la campagne · une balade nature
// Grammar: la comparaison des quantités (plus de, moins de) · le pronom y · les articles contractés (rappel) · l'équivalence (le même, aussi … que)
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u11", rubrique: 6, num: 11,
  title: "In the open air",
  titleFr: "Au grand air",
  pages: "Book pp. 159–172",
  opener: { fr: "J'en ai marre de la ville… Je pars à la campagne !", en: "I'm fed up with the city… I'm off to the countryside!" },
  hero: { scene: "campagne", people: { "Margot": "f3", "Hugo": "m2", "Zoé": "k1" } },
  situations: [
    ["😤", "J'en ai marre !", "complaining about city life: [[Les embouteillages, je n'en peux plus !]]"],
    ["🏡", "Changer de vie", "a life choice: [[J'ai décidé de quitter la ville.]] · [[J'y pense depuis longtemps.]]"],
    ["🌾", "Vivre au vert", "comparing quantities: [[À la campagne, il y a plus d'espace et moins de bruit.]]"],
    ["🌷", "Le jardin partagé", "gardening: [[Je plante des graines, je les arrose, je cueille les fleurs.]]"],
    ["⛰️", "Mon mode de vie", "outdoor life: [[On fait du ski, de la randonnée et de l'escalade.]] · [[On joue au foot.]]"]
  ],
  goals: [
    "Express dissatisfaction: [[J'en ai marre de…]], [[J'en ai assez !]], [[Ce n'est pas mon truc.]], [[Je n'en peux plus !]]",
    "Talk about a decision and a change of life: [[J'ai décidé de déménager.]] · [[J'ai choisi de vivre à la campagne.]]",
    "Compare quantities: [[plus de]] / [[moins de]] + noun (+ [[que]])",
    "Replace [[à]] + a thing or a place with [[y]]: [[Je crois au changement. J'y crois !]]",
    "Describe a way of life: [[Je passe mes journées à m'occuper des animaux.]]",
    "Use contracted articles: [[du ski]], [[de la voile]], [[au foot]], [[aux habitants]]",
    "Say two things are the same: [[la même taille]], [[aussi grand que]], [[pareil]] ≠ [[différent]]"
  ],
  glance: [
    ["🗣️", "Communication", "dissatisfaction · life choices · lifestyle · nature outings"],
    ["🧩", "Grammaire", "plus de / moins de · y · du, de la, au, aux (rappel) · le même, aussi … que"],
    ["🗂️", "Vocabulaire", "town and country · nature · farm animals · trees and flowers · gardening · outdoor activities · country jobs"],
    ["🔊", "Phonétique", "[p] / [b] · l'enchaînement vocalique (j'ai_eu, à_Albi)"],
    ["⭐", "The phrase to learn first", "[[J'en ai marre de la ville !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Fed up with the city", titleFr: "Dans le métro · J'en ai marre !",
      note: "Margot and Hugo are stuck in a packed metro after work. Listen to how they complain.",
      scene: "metro", people: { "Margot": "f3", "Hugo": "m2" },
      lines: [
        ["Margot", "Encore un métro en panne ! J'en ai marre !", "Another broken-down metro! I'm fed up!"],
        ["Hugo", "Moi aussi, j'en ai assez. Une heure et demie de transport par jour… je n'en peux plus !", "Me too, I've had enough. An hour and a half of commuting a day… I can't take it any more!"],
        ["Margot", "Et la grisaille, la pollution, le bruit… C'est trop déprimant.", "And the grey weather, the pollution, the noise… It's too depressing."],
        ["Hugo", "Et notre appartement : trente mètres carrés pour trois personnes ! Les loyers sont trop élevés à Paris.", "And our flat: thirty square metres for three people! Rents are too high in Paris."],
        ["Margot", "Tu sais, ma sœur habite à la campagne. Elle a plus d'espace, moins de stress, et un grand jardin.", "You know, my sister lives in the countryside. She has more space, less stress, and a big garden."],
        ["Hugo", "Et moins de transports en commun !", "And less public transport!"],
        ["Margot", "C'est vrai… Mais elle passe moins de temps dans les bouchons que nous !", "True… But she spends less time in traffic jams than we do!"],
        ["Hugo", "Bon… La vie en ville, ce n'est plus mon truc. On en parle ce soir ?", "Well… City life isn't my thing any more. Shall we talk about it tonight?"]
      ],
      glossary: [["J'en ai marre !", "I'm fed up! (casual)"], ["Je n'en peux plus !", "I can't take it any more!"], ["la grisaille", "the grey, gloomy weather"], ["le bouchon", "the traffic jam (casual) = l'embouteillage"]]
    },
    {
      id: "d2", n: 2, title: "We changed our life", titleFr: "Interview radio · Recommencer à zéro",
      note: "A year later, a radio journalist interviews Margot in her village. Listen to how she talks about her decision, and to the pronoun [[y]].",
      scene: "campagne", staff: "La journaliste", people: { "La journaliste": "f6", "Margot": "f3" },
      lines: [
        ["La journaliste", "Margot, vous avez quitté Paris l'année dernière. Pourquoi ?", "Margot, you left Paris last year. Why?"],
        ["Margot", "On en avait assez de la routine et du rythme de vie. Alors, on a décidé de déménager à la campagne.", "We'd had enough of the routine and the pace of life. So we decided to move to the countryside."],
        ["La journaliste", "C'était une décision difficile ?", "Was it a difficult decision?"],
        ["Margot", "Oui ! On y a beaucoup réfléchi. J'ai aussi changé de métier : maintenant, je suis maraîchère.", "Yes! We thought about it a lot. I also changed jobs: now I'm a market gardener."],
        ["La journaliste", "Et vous vous êtes adaptés à votre nouvelle vie ?", "And have you adapted to your new life?"],
        ["Margot", "Très bien ! Ma fille va à l'école à vélo et elle y va avec plaisir. On a rencontré beaucoup de gens sympas.", "Very well! My daughter cycles to school and she goes there happily. We've met lots of nice people."],
        ["La journaliste", "Vous pensez encore à Paris ?", "Do you still think about Paris?"],
        ["Margot", "Non, on n'y pense plus. Je crois au changement, j'y crois vraiment ! Je ne regrette pas notre choix.", "No, we don't think about it any more. I believe in change, I really believe in it! I don't regret our choice."]
      ],
      glossary: [["décider de + infinitif", "to decide to"], ["réfléchir à → y réfléchir", "to think about (it)"], ["s'adapter à", "to adapt to"], ["le maraîcher, la maraîchère", "the market gardener"]]
    },
    {
      id: "d3", n: 3, title: "At the 'Live and work in the green' fair", titleFr: "Au salon · Vivre et travailler au vert",
      note: "Paul and Inès visit a fair for city people who want to move to the country. Listen to the comparisons: [[plus de]], [[moins de]].",
      scene: "bureau", staff: "Le conseiller", people: { "Le conseiller": "m4", "Inès": "f2", "Paul": "m6" },
      lines: [
        ["Le conseiller", "Bonjour ! Vous voulez vous installer à la campagne ?", "Hello! Do you want to settle in the countryside?"],
        ["Inès", "Oui, avec nos deux enfants. On veut avoir plus d'espace et plus de temps libre.", "Yes, with our two children. We want more space and more free time."],
        ["Le conseiller", "Dans notre région, les maisons sont moins chères qu'en ville, et il y a plus de jardins.", "In our region, houses are cheaper than in town, and there are more gardens."],
        ["Paul", "Et le travail ? Il y a moins d'offres d'emploi qu'à Lyon, non ?", "And work? There are fewer job offers than in Lyon, aren't there?"],
        ["Le conseiller", "Un peu moins, c'est vrai. Mais on a des formations et des entreprises qui recrutent. Regardez ces offres.", "A bit fewer, true. But we have training courses and companies that are hiring. Look at these offers."],
        ["Inès", "Et pour les enfants ? Il y a des écoles ?", "And for the children? Are there schools?"],
        ["Le conseiller", "Bien sûr ! Les classes ont moins d'élèves qu'en ville. Venez visiter le village samedi !", "Of course! Classes have fewer pupils than in town. Come and visit the village on Saturday!"]
      ],
      glossary: [["au vert", "in the countryside, in the green"], ["plus de + nom", "more…"], ["moins de + nom", "less…, fewer…"], ["une offre d'emploi", "a job offer"]]
    },
    {
      id: "d4", n: 4, title: "The shared garden", titleFr: "En ville · Le jardin partagé",
      note: "Hugo's friend Karim shows him a shared garden in the middle of Lyon. Listen to the gardening verbs.",
      scene: "jardin", staff: "Karim", people: { "Karim": "m1", "Hugo": "m2" },
      lines: [
        ["Hugo", "Un jardin au centre-ville ? C'est génial !", "A garden in the city centre? That's brilliant!"],
        ["Karim", "Oui, c'est un jardin partagé. Chaque jardinier s'occupe d'un petit potager, et on partage les légumes.", "Yes, it's a shared garden. Each gardener looks after a small vegetable plot, and we share the vegetables."],
        ["Hugo", "Qu'est-ce que tu cultives ?", "What do you grow?"],
        ["Karim", "Des tomates, des courgettes et des fleurs : des roses et des tulipes. Regarde, ce sont des graines de courgettes.", "Tomatoes, courgettes and flowers: roses and tulips. Look, these are courgette seeds."],
        ["Hugo", "Et comment tu fais ?", "And how do you do it?"],
        ["Karim", "D'abord, je plante les graines dans la terre. Ensuite, je les arrose. Et en été, je récolte les légumes et je cueille les fleurs.", "First, I plant the seeds in the soil. Then I water them. And in summer, I harvest the vegetables and pick the flowers."],
        ["Hugo", "Tu y viens souvent ?", "Do you come here often?"],
        ["Karim", "J'y viens deux fois par semaine. Ce n'est pas obligatoire, mais j'adore : c'est reposant, et on échange des recettes !", "I come twice a week. It's not compulsory, but I love it: it's relaxing, and we swap recipes!"]
      ],
      glossary: [["le potager", "the vegetable plot"], ["planter / arroser", "to plant / to water"], ["récolter / cueillir", "to harvest / to pick"], ["la graine", "the seed"]]
    },
    {
      id: "d5", n: 5, title: "A life in the mountains", titleFr: "À la montagne · Mon mode de vie",
      note: "Franck, a shepherd, describes his life to a magazine. Listen to the contracted articles: [[du]], [[de la]], [[de l']], [[au]], [[aux]].",
      scene: "montagne", staff: "La journaliste", people: { "La journaliste": "f6", "Franck": "m5" },
      lines: [
        ["La journaliste", "Franck, comment est votre vie ici ?", "Franck, what is your life like here?"],
        ["Franck", "Je vis au grand air : je me sens très libre ! Je suis berger depuis dix ans.", "I live in the open air: I feel very free! I've been a shepherd for ten years."],
        ["La journaliste", "Qu'est-ce que vous faites dans la journée ?", "What do you do during the day?"],
        ["Franck", "Je passe mes journées à m'occuper des animaux. Ma femme est éleveuse de chèvres : elle fait du fromage, et on vend les œufs aux habitants du village.", "I spend my days looking after the animals. My wife is a goat farmer: she makes cheese, and we sell the eggs to the villagers."],
        ["La journaliste", "Et vos loisirs ?", "And your free time?"],
        ["Franck", "L'hiver, on fait du ski : c'est notre principale activité. L'été, on fait de la randonnée, du kayak sur la rivière ou de l'escalade.", "In winter, we ski: it's our main activity. In summer, we go hiking, kayaking on the river or climbing."],
        ["La journaliste", "Et les enfants ?", "And the children?"],
        ["Franck", "Ils vont à l'école du village et le week-end, ils jouent au foot ou aux cartes avec leurs copains.", "They go to the village school and at the weekend they play football or cards with their friends."]
      ],
      glossary: [["au grand air", "in the open air"], ["le berger, la bergère", "the shepherd"], ["l'éleveur, l'éleveuse", "the (livestock) farmer"], ["faire du / de la…", "to do (an activity)"]]
    },
    {
      id: "d6", n: 6, title: "A nature walk with Grandpa", titleFr: "Au parc · Le sentier découverte",
      note: "Zoé walks a nature trail in a big park with her grandfather. Listen to how they say things are the same: [[le même]], [[aussi … que]].",
      scene: "campagne", people: { "Le grand-père": "m7", "Zoé": "k1" },
      lines: [
        ["Zoé", "Papi, regarde ! Tous ces arbres sont pareils !", "Grandpa, look! All these trees are the same!"],
        ["Le grand-père", "Oui, ce sont des peupliers. Les hommes les ont plantés : ils ont la même forme et la même taille.", "Yes, they're poplars. People planted them: they have the same shape and the same height."],
        ["Zoé", "Et cette forêt, elle est grande ?", "And this forest, is it big?"],
        ["Le grand-père", "Elle est aussi grande que douze terrains de football !", "It's as big as twelve football pitches!"],
        ["Zoé", "Et le lac ? Il est naturel ?", "And the lake? Is it natural?"],
        ["Le grand-père", "Non, il a le même âge que ta maman : quarante ans ! Regarde, l'eau est aussi claire qu'un miroir.", "No, it's the same age as your mum: forty! Look, the water is as clear as a mirror."],
        ["Zoé", "Oh, des oiseaux ! Ils sont différents des oiseaux de la ville.", "Oh, birds! They're different from city birds."],
        ["Le grand-père", "Oui, on peut les observer. Viens, on fait un pique-nique au bord du lac !", "Yes, we can watch them. Come on, let's have a picnic by the lake!"]
      ],
      glossary: [["pareil(le)(s)", "the same, alike"], ["le / la / les même(s) + nom", "the same…"], ["aussi + adjectif + que", "as … as"], ["le peuplier", "the poplar"]]
    }
  ],

  vocab: [
    { t: "le centre-ville", en: "the town centre", pic: "🏙️", cat: "La ville et la campagne", g: "m" },
    { t: "le / la citadin(e)", en: "the city dweller", pic: "🧑‍💼", cat: "La ville et la campagne" },
    { t: "le / la Francilien(ne)", en: "inhabitant of Île-de-France (Paris region)", pic: "🗼", cat: "La ville et la campagne" },
    { t: "le village", en: "the village", pic: "🏘️", cat: "La ville et la campagne", g: "m" },
    { t: "la maison de campagne", en: "the country house", pic: "🏡", cat: "La ville et la campagne", g: "f" },
    { t: "le jardin", en: "the garden", pic: "🌳", cat: "La ville et la campagne", g: "m" },
    { t: "agréable", en: "pleasant", pic: "😊", cat: "L'ambiance d'un lieu" },
    { t: "calme", en: "quiet, calm", pic: "😌", cat: "L'ambiance d'un lieu" },
    { t: "reposant(e)", en: "relaxing", pic: "🛋️", cat: "L'ambiance d'un lieu" },
    { t: "stressant(e)", en: "stressful", pic: "😫", cat: "L'ambiance d'un lieu" },
    { t: "déprimant(e)", en: "depressing", pic: "😞", cat: "L'ambiance d'un lieu" },
    { t: "l'embouteillage, le bouchon", en: "the traffic jam", pic: "🚗", cat: "Les inconvénients de la ville", g: "m" },
    { t: "la grisaille", en: "grey, gloomy weather (casual)", pic: "🌫️", cat: "Les inconvénients de la ville", g: "f" },
    { t: "la pollution", en: "pollution", pic: "🏭", cat: "Les inconvénients de la ville", g: "f" },
    { t: "la routine", en: "routine", pic: "🔁", cat: "Les inconvénients de la ville", g: "f" },
    { t: "le rythme de vie", en: "the pace of life", pic: "⏱️", cat: "Les inconvénients de la ville", g: "m" },
    { t: "le temps de transport", en: "commuting time", pic: "🚇", cat: "Les inconvénients de la ville", g: "m" },
    { t: "les prix élevés", en: "high prices", pic: "💸", cat: "Les inconvénients de la ville", g: "pl" },
    { t: "décider de", en: "to decide to", pic: "✔️", cat: "Le changement de vie" },
    { t: "choisir de", en: "to choose to", pic: "👉", cat: "Le changement de vie" },
    { t: "quitter la ville", en: "to leave the city", pic: "🚪", cat: "Le changement de vie" },
    { t: "s'installer", en: "to settle", pic: "📦", cat: "Le changement de vie" },
    { t: "déménager", en: "to move house", pic: "🚚", cat: "Le changement de vie" },
    { t: "s'adapter", en: "to adapt", pic: "🦎", cat: "Le changement de vie" },
    { t: "la vie d'avant ≠ la nouvelle vie", en: "the old life ≠ the new life", pic: "🔄", cat: "Le changement de vie" },
    { t: "la campagne", en: "the countryside", pic: "🌾", cat: "La nature", g: "f" },
    { t: "la montagne", en: "the mountains", pic: "⛰️", cat: "La nature", g: "f" },
    { t: "la forêt", en: "the forest", pic: "🌲", cat: "La nature", g: "f" },
    { t: "le champ", en: "the field", pic: "🌾", cat: "La nature", g: "m" },
    { t: "le chemin", en: "the path", pic: "🥾", cat: "La nature", g: "m" },
    { t: "le lac", en: "the lake", pic: "🏞️", cat: "La nature", g: "m" },
    { t: "la rivière", en: "the river", pic: "🏞️", cat: "La nature", g: "f" },
    { t: "le ruisseau", en: "the stream", pic: "💧", cat: "La nature", g: "m" },
    { t: "le cheval", en: "the horse", pic: "🐴", cat: "Les animaux", g: "m", note: "pl. les chevaux" },
    { t: "la chèvre", en: "the goat", pic: "🐐", cat: "Les animaux", g: "f" },
    { t: "le mouton", en: "the sheep", pic: "🐑", cat: "Les animaux", g: "m" },
    { t: "la vache", en: "the cow", pic: "🐄", cat: "Les animaux", g: "f" },
    { t: "la poule", en: "the hen", pic: "🐔", cat: "Les animaux", g: "f" },
    { t: "le lapin", en: "the rabbit", pic: "🐇", cat: "Les animaux", g: "m" },
    { t: "l'oiseau", en: "the bird", pic: "🐦", cat: "Les animaux", g: "m", note: "pl. les oiseaux" },
    { t: "la rose", en: "the rose", pic: "🌹", cat: "Les arbres et les fleurs", g: "f" },
    { t: "la tulipe", en: "the tulip", pic: "🌷", cat: "Les arbres et les fleurs", g: "f" },
    { t: "la marguerite", en: "the daisy", pic: "🌼", cat: "Les arbres et les fleurs", g: "f" },
    { t: "le peuplier", en: "the poplar", pic: "🌳", cat: "Les arbres et les fleurs", g: "m" },
    { t: "le marronnier", en: "the chestnut tree", pic: "🌰", cat: "Les arbres et les fleurs", g: "m" },
    { t: "planter", en: "to plant", pic: "🌱", cat: "Le jardinage" },
    { t: "arroser", en: "to water", pic: "🚿", cat: "Le jardinage" },
    { t: "cueillir", en: "to pick (flowers, fruit)", pic: "💐", cat: "Le jardinage" },
    { t: "récolter", en: "to harvest", pic: "🧺", cat: "Le jardinage" },
    { t: "la graine", en: "the seed", pic: "🌰", cat: "Le jardinage", g: "f" },
    { t: "le potager", en: "the vegetable garden", pic: "🥕", cat: "Le jardinage", g: "m" },
    { t: "l'agriculteur, l'agricultrice", en: "the farmer", pic: "🚜", cat: "Les professions" },
    { t: "le berger, la bergère", en: "the shepherd", pic: "🐑", cat: "Les professions" },
    { t: "l'éleveur, l'éleveuse", en: "the livestock farmer", pic: "🐄", cat: "Les professions" },
    { t: "le maraîcher, la maraîchère", en: "the market gardener", pic: "🥬", cat: "Les professions" },
    { t: "faire de la randonnée", en: "to go hiking", pic: "🥾", cat: "Les loisirs de plein air" },
    { t: "faire du cheval", en: "to go horse riding", pic: "🏇", cat: "Les loisirs de plein air" },
    { t: "faire de l'escalade", en: "to go climbing", pic: "🧗", cat: "Les loisirs de plein air" },
    { t: "faire de la voile", en: "to go sailing", pic: "⛵", cat: "Les loisirs de plein air" },
    { t: "faire du kayak", en: "to go kayaking", pic: "🛶", cat: "Les loisirs de plein air" },
    { t: "pêcher, la pêche", en: "to fish, fishing", pic: "🎣", cat: "Les loisirs de plein air" },
    { t: "camper, le camping", en: "to camp, camping", pic: "⛺", cat: "Les loisirs de plein air" },
    { t: "se baigner, la baignade", en: "to swim, swimming (outdoors)", pic: "🏊", cat: "Les loisirs de plein air" },
    { t: "pique-niquer, le pique-nique", en: "to have a picnic, the picnic", pic: "🧺", cat: "Les loisirs de plein air" }
  ],

  grammar: [
    {
      id: "g-insatisf",
      title: "Complaining: [[J'en ai marre !]]",
      body: [
        "To express dissatisfaction: [[Ce n'est pas mon truc.]] · [[Je me sens mal, triste.]] · [[C'est trop déprimant, stressant.]] · [[J'en ai assez de la ville !]] · [[J'en ai marre !]] · [[Ça suffit !]] · [[Je n'en peux plus !]]",
        "[[en avoir assez de]] / [[en avoir marre de]] (casual) + a noun or an infinitive: [[J'en ai marre des bouchons.]] · [[J'en ai assez d'attendre le bus !]] Note the <b>de</b> + article: [[de la pollution]], [[du bruit]], [[des embouteillages]]."
      ],
      info: { type: "ladder", title: "😤 From fed up (top) to mildly annoyed (bottom)", levels: [
        { name: "Je n'en peux plus !", en: "I can't take it any more!", color: "#e0474f", ex: ["Une heure de bus par jour, je n'en peux plus !"] },
        { name: "J'en ai marre ! · Ça suffit !", en: "I'm fed up! · Enough! (casual)", color: "#e86a2e", ex: ["J'en ai marre de la grisaille !"] },
        { name: "J'en ai assez de…", en: "I've had enough of…", color: "#e0a526", ex: ["J'en ai assez de la routine."] },
        { name: "C'est trop stressant.", en: "It's too stressful.", color: "#7d9a2e", ex: ["La ville, c'est trop stressant."] },
        { name: "Ce n'est pas mon truc.", en: "It's not my thing.", color: "#2f9c8a", ex: ["Le métro, ce n'est pas mon truc."] }
      ] },
      widget: {
        type: "combo", label: "Complain · pick an expression and a problem",
        rows: [{ k: "assez", label: "J'en ai assez de…" }, { k: "marre", label: "J'en ai marre de…" }, { k: "truc", label: "… ce n'est pas mon truc." }],
        cols: [{ k: "bouchons", label: "🚗 les bouchons" }, { k: "pollution", label: "🏭 la pollution" }, { k: "bruit", label: "🔊 le bruit" }, { k: "attendre", label: "⏳ attendre le bus" }],
        out: {
          "assez|bouchons": ["J'en ai assez des bouchons !", "I've had enough of traffic jams!", "de + les → des"], "marre|bouchons": ["J'en ai marre des bouchons !", "I'm fed up with traffic jams!"], "truc|bouchons": ["Les bouchons, ce n'est pas mon truc.", "Traffic jams aren't my thing."],
          "assez|pollution": ["J'en ai assez de la pollution !", "I've had enough of pollution!"], "marre|pollution": ["J'en ai marre de la pollution !", "I'm fed up with pollution!"], "truc|pollution": ["La pollution, ce n'est pas mon truc.", "Pollution isn't my thing."],
          "assez|bruit": ["J'en ai assez du bruit !", "I've had enough of the noise!", "de + le → du"], "marre|bruit": ["J'en ai marre du bruit !", "I'm fed up with the noise!"], "truc|bruit": ["Le bruit, ce n'est pas mon truc.", "Noise isn't my thing."],
          "assez|attendre": ["J'en ai assez d'attendre le bus !", "I've had enough of waiting for the bus!", "de → d' before a vowel"], "marre|attendre": ["J'en ai marre d'attendre le bus !", "I'm fed up with waiting for the bus!"], "truc|attendre": ["Attendre le bus, ce n'est pas mon truc.", "Waiting for the bus isn't my thing."]
        }
      }
    },
    {
      id: "g-quantite",
      title: "Comparing quantities: [[plus de]], [[moins de]] (+ [[que]])",
      body: [
        "To compare <b>quantities</b>: [[plus de]] / [[moins de]] + a noun (+ [[que]]): [[À la campagne, il y a plus d'arbres qu'en ville.]] · [[On passe moins de temps dans la voiture.]] No article after [[de]]: <s>plus de les arbres</s>.",
        "Reminder: to compare <b>qualities</b>, [[plus]] / [[moins]] / [[aussi]] + adjective + [[que]]: [[La campagne est moins polluée que la ville.]] And for a verb: [[On travaille plus.]]"
      ],
      info: [
        { type: "compare", title: "🏙️ La ville ou 🌾 la campagne ?", cols: [
          { head: "En ville", en: "in town", color: "#5b6b7c", lines: [["Il y a plus de transports en commun.", "more public transport"], ["Il y a plus de bruit et de pollution.", "more noise and pollution"], ["On a moins d'espace.", "less space"]] },
          { head: "À la campagne", en: "in the country", color: "#7d9a2e", lines: [["Il y a plus d'arbres et de jardins.", "more trees and gardens"], ["On a moins de stress.", "less stress"], ["Il y a moins d'offres d'emploi.", "fewer job offers"]] }
        ] },
        { type: "bars", title: "🗺️ Oh, le cliché ! « Les Français vivent à la campagne » (Insee 2010, quoted by the book)", unit: " %", items: [
          { fr: "de la population vit en ville", en: "of the population lives in towns", v: 78, pic: "🏙️" },
          { fr: "du territoire est occupé par les villes", en: "of the land is covered by towns", v: 22, pic: "🗺️" }
        ] }
      ],
      widget: {
        type: "combo", label: "More or less? · pick a word and a noun",
        rows: [{ k: "plus", label: "plus de (+)" }, { k: "moins", label: "moins de (−)" }],
        cols: [{ k: "arbres", label: "🌳 arbres" }, { k: "bruit", label: "🔊 bruit" }, { k: "temps", label: "⏱️ temps libre" }, { k: "habitants", label: "👥 habitants" }],
        out: {
          "plus|arbres": ["À la campagne, il y a plus d'arbres qu'en ville.", "In the country there are more trees than in town.", "de → d' before a vowel"], "moins|arbres": ["En ville, il y a moins d'arbres qu'à la campagne.", "In town there are fewer trees than in the country."],
          "plus|bruit": ["En ville, il y a plus de bruit.", "In town there's more noise."], "moins|bruit": ["À la campagne, il y a moins de bruit qu'en ville.", "In the country there's less noise than in town."],
          "plus|temps": ["Je veux avoir plus de temps libre.", "I want more free time."], "moins|temps": ["En ville, j'ai moins de temps libre.", "In town I have less free time."],
          "plus|habitants": ["Ton village a plus d'habitants que mon village.", "Your village has more inhabitants than mine."], "moins|habitants": ["Mon village a moins d'habitants que le tien.", "My village has fewer inhabitants than yours."]
        }
      }
    },
    {
      id: "g-y",
      title: "The pronoun [[y]]: [[à]] + a thing, an idea, a place",
      body: [
        "[[y]] replaces [[à]] + a <b>thing</b> or an <b>idea</b> with verbs like [[croire à]], [[penser à]], [[réfléchir à]], [[s'adapter à]]: [[Je crois au changement. J'y crois !]] · [[Vous pensez encore à Paris ? Non, on n'y pense plus.]]",
        "You already know [[y]] for a <b>place</b>: [[Tu vas au jardin ? Oui, j'y vais.]] · [[Elle va à l'école à vélo : elle y va avec plaisir.]] For a <b>person</b>, use [[lui]] / [[leur]] instead: [[Je pense à ma sœur. Je pense à elle.]]",
        "Position: before the verb, or before the infinitive: [[J'y crois.]] · [[Je n'y pense pas.]] · [[On y a réfléchi.]] · [[Je vais y aller.]]"
      ],
      info: { type: "pattern", title: "🔁 à + thing / place → y", rows: [
        ["Je crois", "au changement.", "→", "J'y crois."],
        ["On pense", "à la ville.", "→", "On n'y pense plus."],
        ["Nous avons réfléchi", "à ce projet.", "→", "Nous y avons réfléchi."],
        ["Il va", { opts: ["au jardin.", "à la plage.", "à Lyon."] }, "→", "Il y va."]
      ], note: "y = to it, about it, there. Never for people: [[penser à quelqu'un]] → [[penser à lui / à elle]]." },
      widget: {
        type: "sort", label: "y or not? Which can be replaced by y?",
        cols: [{ k: "y", label: "→ y (thing, idea, place)", color: "#2f9c8a" }, { k: "lui", label: "→ lui / leur / à elle (person)", color: "#9b4fb0" }],
        items: [
          { t: "Je pense à mon projet.", k: "y", say: "J'y pense." }, { t: "Je pense à ma mère.", k: "lui", say: "Je pense à elle." }, { t: "Il croit au changement.", k: "y", say: "Il y croit." },
          { t: "Elle parle à ses voisins.", k: "lui", say: "Elle leur parle." }, { t: "On va au marché.", k: "y", say: "On y va." }, { t: "Tu t'adaptes à ta nouvelle vie ?", k: "y", say: "Tu t'y adaptes ?" },
          { t: "Je téléphone à Karim.", k: "lui", say: "Je lui téléphone." }
        ]
      }
    },
    {
      id: "g-articles",
      title: "Contracted articles (reminder): [[du]], [[au]], [[des]], [[aux]]",
      body: [
        "[[de]] and [[à]] merge with [[le]] and [[les]], never with [[la]] or [[l']]: [[faire du kayak]], [[faire de la voile]], [[faire de l'escalade]], [[s'occuper des animaux]] · [[jouer au foot]], [[aller à la plage]], [[aller à l'école]], [[vendre aux habitants]].",
        "Sports and activities: [[faire de]] + activity ([[Je fais du vélo.]]) · [[jouer à]] + game or sport ([[On joue aux cartes.]]). Music: [[jouer de]] + instrument ([[Il joue du piano.]])."
      ],
      info: [
        { type: "merge", title: "⚗️ de / à + the article", rows: [
          { a: "de", b: "le", g: "m", r: "du", ex: "On fait du kayak.", en: "du ski, du cheval" },
          { a: "de", b: "la", g: "f", r: "de la", ex: "Je fais de la voile.", en: "no change", no: true },
          { a: "de", b: "l'", g: "x", r: "de l'", ex: "Ils font de l'escalade.", en: "no change", no: true },
          { a: "de", b: "les", g: "pl", r: "des", ex: "Je m'occupe des animaux.", en: "" },
          { a: "à", b: "le", g: "m", r: "au", ex: "On joue au foot.", en: "au village" },
          { a: "à", b: "la", g: "f", r: "à la", ex: "On va à la plage.", en: "no change", no: true },
          { a: "à", b: "l'", g: "x", r: "à l'", ex: "Ils vont à l'école.", en: "no change", no: true },
          { a: "à", b: "les", g: "pl", r: "aux", ex: "On vend les œufs aux habitants.", en: "" }
        ] },
        { type: "pics", title: "⛺ Les loisirs de plein air · tap to hear", from: ["Les loisirs de plein air"] }
      ],
      widget: {
        type: "sort", label: "du, de la, de l' or des?",
        cols: [{ k: "du", label: "du", color: "#3a6fd8" }, { k: "dela", label: "de la", color: "#e0474f" }, { k: "del", label: "de l'", color: "#e0a526" }, { k: "des", label: "des", color: "#7d9a2e" }],
        items: [
          { t: "faire … ski", k: "du", say: "faire du ski" }, { t: "faire … randonnée", k: "dela", say: "faire de la randonnée" }, { t: "faire … escalade", k: "del", say: "faire de l'escalade" },
          { t: "s'occuper … animaux", k: "des", say: "s'occuper des animaux" }, { t: "faire … cheval", k: "du", say: "faire du cheval" }, { t: "faire … voile", k: "dela", say: "faire de la voile" },
          { t: "jouer … piano", k: "du", say: "jouer du piano" }, { t: "faire … jeux de société", k: "des", say: "faire des jeux de société" }
        ]
      }
    },
    {
      id: "g-egalite",
      title: "Saying it's the same: [[le même]], [[aussi … que]], [[pareil]]",
      body: [
        "To compare things that are <b>equal</b>: [[le / la / les même(s)]] + noun: [[Les arbres ont la même forme, la même taille.]] · [[Le lac a le même âge que ta maman.]]",
        "[[aussi]] + adjective + [[que]]: [[Cette forêt est aussi grande que douze terrains de foot !]] · [[L'eau est aussi claire qu'un miroir.]]",
        "And: [[Les arbres sont pareils.]] (=) ≠ [[Les arbres sont différents.]] (≠)"
      ],
      info: { type: "compare", title: "🌳 = or ≠ ?", cols: [
        { head: "= pareil", en: "the same", color: "#2f9c8a", lines: [["Ils ont la même taille.", "the same height"], ["Mon jardin est aussi grand que ce champ.", "as big as"], ["Nous avons les mêmes fleurs.", "the same flowers"]] },
        { head: "≠ différent", en: "different", color: "#e86a2e", lines: [["Ces oiseaux sont différents.", "different"], ["La forêt est plus grande que le parc.", "bigger than"], ["Le lac est moins profond que la mer.", "less deep than"]] }
      ] },
      widget: {
        type: "sort", label: "le même, la même or les mêmes?",
        cols: [{ k: "le", label: "le même", color: "#3a6fd8" }, { k: "la", label: "la même", color: "#e0474f" }, { k: "les", label: "les mêmes", color: "#7d9a2e" }],
        items: [
          { t: "… âge", k: "le", say: "le même âge" }, { t: "… taille", k: "la", say: "la même taille" }, { t: "… goûts", k: "les", say: "les mêmes goûts" },
          { t: "… forme", k: "la", say: "la même forme" }, { t: "… village", k: "le", say: "le même village" }, { t: "… fleurs", k: "les", say: "les mêmes fleurs" }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour exprimer son insatisfaction", fnEn: "dissatisfaction", icon: "😤", items: [
      ["J'en ai marre de la ville !", "I'm fed up with the city!", "fam", true],
      ["J'en ai assez de la routine.", "I've had enough of the routine.", "std", true],
      ["C'est trop déprimant, stressant.", "It's too depressing, stressful.", "std"],
      ["Ce n'est pas mon truc.", "It's not my thing.", "fam"],
      ["Ça suffit !", "That's enough!", "std"],
      ["Je n'en peux plus !", "I can't take it any more!", "std", true]
    ] },
    { fn: "Pour exprimer une décision, un choix de vie", fnEn: "life choices", icon: "🏡", items: [
      ["J'ai décidé de déménager.", "I decided to move.", "std", true],
      ["J'ai choisi de vivre à la campagne.", "I chose to live in the country.", "std", true],
      ["J'ai recommencé à zéro.", "I started again from scratch.", "std"],
      ["Je ne regrette pas mon choix.", "I don't regret my choice.", "std"]
    ] },
    { fn: "Pour décrire son mode de vie", fnEn: "way of life", icon: "⛰️", items: [
      ["J'habite à la montagne avec ma famille.", "I live in the mountains with my family.", "std"],
      ["Vivre à la mer, c'est agréable.", "Living by the sea is pleasant.", "std", true],
      ["Je passe mes journées à m'occuper des animaux.", "I spend my days looking after the animals.", "std", true],
      ["Ma principale activité, c'est le ski.", "My main activity is skiing.", "std"],
      ["L'été, je fais de la voile.", "In summer I go sailing.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · explaining a change of life", lanes: ["La journaliste", "Margot"], av: ["f6", "f3"], steps: [
    { s: 0, fr: "Pourquoi vous avez quitté la ville ?", en: "Why did you leave the city?" },
    { s: 1, fr: "J'en avais assez du bruit et de la routine.", en: "I'd had enough of the noise and the routine." },
    { s: 0, fr: "Qu'est-ce que vous avez décidé ?", en: "What did you decide?" },
    { s: 1, fr: "J'ai décidé de m'installer à la campagne et de changer de métier.", en: "I decided to settle in the country and change jobs." },
    { s: 0, fr: "Vous pensez encore à votre vie d'avant ?", en: "Do you still think about your old life?" },
    { s: 1, fr: "Non, je n'y pense plus. Ici, il y a plus d'espace et moins de stress !", en: "No, I don't think about it any more. Here there's more space and less stress!" }
  ] },

  sounds: {
    intro: "[p] and [b] are made with the lips closed, then opened. Put your hand on your throat: [b] vibrates, [p] doesn't. And when a word ending in a vowel sound meets a word starting with a vowel, French glides from one to the other with no pause: the enchaînement vocalique.",
    letters: [
      { l: "p · pp", name: "[p] · no vibration", tip: "No puff of air as in English “pin”: [[la peau]], [[le peuplier]], [[apporter]]. ⚠️ Silent p in [[le temps]], [[beaucoup]]. And [[ph]] = [f]: [[la photo]].", ex: ["la peau", "le peuplier", "la pollution", "la photo"] },
      { l: "b", name: "[b] · vibration", tip: "Same lips, with the voice on: [[beau]], [[le bouchon]], [[la bergère]].", ex: ["beau", "le bouchon", "le berger", "le bruit"] },
      { l: "voyelle_voyelle", name: "l'enchaînement vocalique", tip: "Two vowel sounds side by side: two syllables but <b>no pause</b>, no glottal stop: [[j'ai eu]], [[à Albi]], [[Je me suis installé ici.]] Also after a nasal with no liaison: [[mon voisin et moi]].", ex: ["j'ai eu", "à Albi", "Je me suis installé ici.", "Il a habité à Avignon."] }
    ],
    pairs: [
      { a: ["la peau", "the skin"], b: ["beau", "beautiful"], note: "[p] / [b]" },
      { a: ["le pain", "bread"], b: ["le bain", "the bath"], note: "[p] / [b]" },
      { a: ["la pierre", "the stone"], b: ["la bière", "beer"], note: "[p] / [b]" },
      { a: ["le port", "the harbour"], b: ["le bord", "the edge"], note: "[p] / [b]" },
      { a: ["plus de temps", "more time"], b: ["moins de temps", "less time"], note: "plus / moins" },
      { a: ["j'y vais", "I'm going there"], b: ["j'ai vu", "I saw"], note: "y / ai" }
    ]
  },
  classify: {
    label: "👄 [p] ou [b] ?", q: "Listen: do you hear [p] or [b] at the start?",
    options: ["[p]", "[b]"],
    items: [
      { say: "le pain", a: 0 }, { say: "le bain", a: 1 }, { say: "la poule", a: 0 }, { say: "la boule", a: 1 },
      { say: "le bouchon", a: 1 }, { say: "la pollution", a: 0 }, { say: "le berger", a: 1 }, { say: "le peuplier", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Margot et Hugo sont contents de leur vie à Paris.", ok: false, explain: "They're fed up: transport, pollution, small flat." },
    { type: "mcq", tag: "Dialogue 1", q: "Combien de temps de transport par jour pour Hugo ?", options: ["une heure et demie", "dix minutes", "trois heures"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Margot a changé de métier.", ok: true },
    { type: "tf", tag: "Dialogue 2", s: "Margot regrette Paris.", ok: false, explain: "« Je ne regrette pas notre choix. »" },
    { type: "mcq", tag: "Dialogue 3", q: "Dans la région, les maisons sont…", options: ["moins chères qu'en ville", "plus chères qu'en ville", "aussi chères qu'en ville"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "Dans un jardin partagé, on partage les légumes.", ok: true },
    { type: "tf", tag: "Dialogue 4", s: "Karim est obligé de venir tous les jours.", ok: false, explain: "He comes twice a week; it's not compulsory." },
    { type: "mcq", tag: "Dialogue 5", q: "Que fait la famille de Franck l'hiver ?", options: ["du ski", "de la voile", "du kayak"], answer: 0 },
    { type: "tf", tag: "Dialogue 6", s: "Le lac du parc est naturel.", ok: false, explain: "It's forty years old: people made it." },
    { type: "fill", tag: "Insatisfaction", sentence: "J'en ai marre ___ bruit !", options: ["du", "de la", "au"], answer: 0 },
    { type: "fill", tag: "Insatisfaction", sentence: "J'en ai assez ___ attendre le bus.", options: ["d'", "de l'", "à"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "À la campagne, il y a ___ arbres qu'en ville. (+)", options: ["plus d'", "plus des", "plus"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "On passe ___ temps dans la voiture. (−)", options: ["moins de", "moins du", "moins"], answer: 0 },
    { type: "fill", tag: "Comparaison", sentence: "La campagne est ___ polluée que la ville.", options: ["moins", "moins de", "moins du"], answer: 0, explain: "adjective → moins (no de)" },
    { type: "type", tag: "Comparaison", q: "Write: In the country there is less noise than in town.", answers: ["À la campagne, il y a moins de bruit qu'en ville.", "A la campagne, il y a moins de bruit qu'en ville.", "À la campagne il y a moins de bruit qu'en ville."] },
    { type: "fill", tag: "Le pronom y", sentence: "Tu crois au changement ? Oui, j'___ crois !", options: ["y", "en", "lui"], answer: 0 },
    { type: "fill", tag: "Le pronom y", sentence: "Vous pensez à votre vie d'avant ? Non, je n'___ pense plus.", options: ["y", "lui", "le"], answer: 0 },
    { type: "fill", tag: "Le pronom y", sentence: "Tu penses à ta grand-mère ? Oui, je pense ___.", options: ["à elle", "y", "lui"], answer: 0, explain: "a person → à elle" },
    { type: "type", tag: "Le pronom y", q: "Answer with y: « Vous allez au jardin samedi ? » (yes)", answers: ["Oui, j'y vais samedi.", "Oui, nous y allons samedi.", "Oui, on y va samedi.", "Oui, j'y vais.", "Oui, nous y allons.", "Oui, on y va."] },
    { type: "fill", tag: "Articles contractés", sentence: "L'été, on fait ___ voile.", options: ["de la", "du", "des"], answer: 0 },
    { type: "fill", tag: "Articles contractés", sentence: "Les enfants jouent ___ foot.", options: ["au", "à la", "du"], answer: 0 },
    { type: "fill", tag: "Articles contractés", sentence: "On vend les œufs ___ habitants du village.", options: ["aux", "des", "à les"], answer: 0 },
    { type: "fill", tag: "Articles contractés", sentence: "Ils font ___ escalade.", options: ["de l'", "du", "de la"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Ces arbres ont ___ forme.", options: ["la même", "le même", "les mêmes"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Mon jardin est ___ grand que ce champ.", options: ["aussi", "même", "autant"], answer: 0 },
    { type: "fill", tag: "Équivalence", sentence: "Nous avons ___ goûts !", options: ["les mêmes", "la même", "aussi"], answer: 0 },
    { type: "fill", tag: "Jardinage", sentence: "Je mets les graines dans la terre : je les ___.", options: ["plante", "cueille", "récolte"], answer: 0 },
    { type: "fill", tag: "Jardinage", sentence: "Il ne pleut pas : j'___ les fleurs.", options: ["arrose", "plante", "quitte"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Pourquoi vous avez quitté la ville ?", options: ["J'en avais assez de la pollution.", "J'y vais demain.", "Elle est aussi grande que le parc."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous pensez encore à Paris ?", options: ["Non, je n'y pense plus.", "Non, je ne lui pense plus.", "Non, je pense plus de Paris."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la vache", "la chèvre", "le mouton", "le peuplier"], answer: 3, explain: "le peuplier is a tree; the others are farm animals." },
    { type: "mcq", tag: "Vocabulaire", q: "Le synonyme de « embouteillage » :", options: ["le bouchon", "la pollution", "la grisaille"], answer: 0 },
    { type: "order", tag: "Construisez", en: "I'm fed up with the city!", words: ["J'en", "ai", "marre", "de", "la", "ville", "!"] },
    { type: "listen", tag: "Écoute", q: "What does the speaker say about the countryside?", say: "À la campagne, il y a plus d'espace et moins de stress.", options: ["more space, less stress", "less space, more stress", "the same space"], answer: 0 }
  ],

  roleplays: [
    { title: "😤 J'en ai marre !", brief: "Your friend asks how you are. Complain about city life.", memo: ["J'en ai marre de…", "Je n'en peux plus !", "C'est trop…"], partner: "f3", you: "m2",
      turns: [
        { them: "Ça va ? Tu as l'air fatigué.", themEn: "Are you OK? You look tired.", hint: "Say you're fed up with traffic jams.", you: "Non, ça ne va pas. J'en ai marre des bouchons !", youEn: "No, I'm not OK. I'm fed up with traffic jams!" },
        { them: "Tu passes combien de temps dans la voiture ?", themEn: "How long do you spend in the car?", hint: "Two hours a day; you can't take it any more.", you: "Deux heures par jour. Je n'en peux plus !", youEn: "Two hours a day. I can't take it any more!" },
        { them: "Et ton appartement ?", themEn: "And your flat?", hint: "Too small and too expensive. The city isn't your thing.", you: "Il est trop petit et trop cher. La ville, ce n'est pas mon truc !", youEn: "It's too small and too expensive. The city isn't my thing!" }
      ] },
    { title: "🏡 J'ai changé de vie", brief: "A journalist interviews you about your move to the countryside.", memo: ["J'ai décidé de…", "plus de / moins de", "Je n'y pense plus."], partner: "f6", you: "f3",
      turns: [
        { them: "Pourquoi vous avez quitté Lyon ?", themEn: "Why did you leave Lyon?", hint: "You'd had enough of the noise. You decided to move.", you: "J'en avais assez du bruit, alors j'ai décidé de déménager.", youEn: "I'd had enough of the noise, so I decided to move." },
        { them: "Qu'est-ce qui a changé ?", themEn: "What has changed?", hint: "More space, less stress.", you: "J'ai plus d'espace et moins de stress.", youEn: "I have more space and less stress." },
        { them: "Vous pensez encore à la ville ?", themEn: "Do you still think about the city?", hint: "No, not any more (y).", you: "Non, je n'y pense plus !", youEn: "No, I don't think about it any more!" }
      ] },
    { title: "⛰️ Mon mode de vie", brief: "Describe your life and activities in the mountains to a visitor.", memo: ["Je passe mes journées à…", "faire du / de la / de l'…", "jouer au…"], partner: "f6", you: "m5",
      turns: [
        { them: "Qu'est-ce que vous faites comme travail ?", themEn: "What do you do for work?", hint: "You're a shepherd; you look after the animals all day.", you: "Je suis berger. Je passe mes journées à m'occuper des animaux.", youEn: "I'm a shepherd. I spend my days looking after the animals." },
        { them: "Et l'hiver ?", themEn: "And in winter?", hint: "Skiing is your main activity.", you: "L'hiver, on fait du ski : c'est notre principale activité.", youEn: "In winter we ski: it's our main activity." },
        { them: "Et l'été ?", themEn: "And in summer?", hint: "Hiking and climbing.", you: "L'été, on fait de la randonnée et de l'escalade.", youEn: "In summer we go hiking and climbing." }
      ] }
  ],

  ateliers: [
    { title: "Créer un calendrier du jardinier", intro: "In groups, make a seasonal calendar of fruit and vegetables.",
      steps: [["Préparation", ["Each person lists 10 favourite fruits and vegetables.", "Put the lists together and find out when you plant and harvest each one: [[Courgettes : plantation au printemps, récolte de mai à septembre.]]"]], ["Réalisation", ["Draw 4 columns: [[le printemps]], [[l'été]], [[l'automne]], [[l'hiver]].", "Write each fruit or vegetable in its season with its planting date, and add pictures."]], ["Présentation", ["Present your calendar: what can we eat in each season? What dishes can we make?", "Compare the calendars: which fruits and vegetables are the most grown?"]]],
      phrases: ["On plante les tomates au printemps.", "On récolte les pommes en automne.", "En été, on peut faire une ratatouille !"],
      model: { type: "card", style: "board", caption: "🌱 Exemple · tap a line", title: "CALENDRIER DU JARDINIER", sub: "plantation → récolte", rows: [["🌸 Printemps", "on plante : tomates, courgettes, salades", "Au printemps, on plante les tomates et les courgettes."], ["☀️ Été", "on récolte : tomates, courgettes, fraises", "En été, on récolte les tomates et les fraises."], ["🍂 Automne", "on récolte : pommes, poireaux, potirons", "En automne, on récolte les pommes."], ["❄️ Hiver", "on mange : choux, poireaux, carottes", "En hiver, on mange des poireaux et des choux."]], foot: "Bon jardinage !" } },
    { title: "Créer une fiche « sortie nature »", tech: true, intro: "Prepare a nature day out for the weekend and present it as a slideshow.",
      steps: [["Préparation", ["Choose your outing: a park, a forest, a day at the beach, a mountain hike…", "Find a place (e.g. on the website of the French regional nature parks) and list the activities: picnic, castle visit, lake…"]], ["Réalisation", ["Write the day's programme in the futur proche: [[Le matin, nous allons prendre la voiture pour aller au parc.]]", "Find photos and build a slideshow with a presentation tool."]], ["Présentation", ["Show your slideshow: where you're going, the programme and why you chose this place."]]],
      phrases: ["Nous allons faire une randonnée.", "À midi, on va pique-niquer au bord du lac.", "On a choisi ce lieu parce que…"] }
  ],
  delf: {
    skill: "Production orale", title: "Talking about an important decision",
    about: "A typical A1 speaking prompt: <i>« Vous avez pris une décision importante (travail, déménagement, projet…). Racontez. »</i> Say what you decided, when, why, and how it went, in the passé composé, with simple linking words.",
    tips: ["Start with the decision: [[J'ai décidé de…]] / [[J'ai choisi de…]]", "Give a reason with [[parce que]] or [[J'en avais assez de…]]", "Order your story: [[d'abord]], [[ensuite]], [[après]], [[maintenant]]", "End with how you feel: [[Je ne regrette pas.]] · [[Je suis content(e).]]"],
    items: [
      { type: "mcq", q: "Which sentence states a decision?", options: ["J'ai décidé de changer de métier.", "Je change de métier.", "Je vais au travail."], answer: 0 },
      { type: "mcq", q: "Which sentence gives a reason?", options: ["Parce que j'en avais assez de la routine.", "Et après, je suis parti.", "Je ne regrette pas."], answer: 0 },
      { type: "mcq", q: "Which word introduces the second step?", options: ["ensuite", "parce que", "mais"], answer: 0 },
      { type: "mcq", q: "Which sentence is in the passé composé?", options: ["Je me suis installé à Nantes.", "Je m'installe à Nantes.", "Je vais m'installer à Nantes."], answer: 0 },
      { type: "mcq", q: "A good conclusion:", options: ["Maintenant, je suis très heureux et je ne regrette pas mon choix.", "Bonjour.", "Je décide."], answer: 0 }
    ]
  },
  detente: {
    title: "Des sites classés à l'UNESCO",
    intro: "Where are these UNESCO World Heritage sites? (The 1972 UNESCO Convention protects cultural and natural sites of outstanding universal value.)",
    items: [
      { type: "mcq", q: "La vallée des Baleines (Wadi Al-Hitan) est…", options: ["en Égypte", "au Canada", "en Tunisie"], answer: 0 },
      { type: "mcq", q: "Les palais royaux d'Abomey sont…", options: ["au Bénin", "en France", "en Nouvelle-Calédonie"], answer: 0 },
      { type: "mcq", q: "Le parc national du Gros-Morne est…", options: ["au Canada", "en Égypte", "au Bénin"], answer: 0 },
      { type: "mcq", q: "La médina de Sousse est…", options: ["en Tunisie", "au Canada", "en Suisse"], answer: 0 },
      { type: "mcq", q: "Les lagons classés de l'océan Pacifique sont en…", options: ["Nouvelle-Calédonie", "Tunisie", "Égypte"], answer: 0 },
      { type: "mcq", q: "La grotte Chauvet-Pont-d'Arc, avec ses peintures préhistoriques, est…", options: ["en Ardèche, en France", "au Québec", "au Bénin"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "board", caption: "🌷 Le jardin partagé · tap a line", title: "JARDIN PARTAGÉ DU QUARTIER", sub: "ouvert à tous les habitants", rows: [["Quoi ?", "un potager collectif en ville", "C'est un potager collectif en ville."], ["Qui ?", "les habitants du quartier", "Les habitants du quartier s'en occupent."], ["On y fait quoi ?", "planter, arroser, récolter, partager", "On plante, on arrose, on récolte et on partage."], ["Quand ?", "quand vous voulez : ce n'est pas obligatoire", "Vous venez quand vous voulez."], ["Et aussi…", "on échange des recettes et des graines", "On échange des recettes et des graines."]], foot: "Montréal (1975) · Lausanne (1995) · Paris, Lyon…" }
  ],
  culture: [
    { icon: "🏙️", kind: "Oh, le cliché !", t: "« Les Français vivent à la campagne dans des petits villages. »", d: "Not really: according to the Insee figures quoted by the book (2010), towns cover only about <b>22 %</b> of France, but <b>78 %</b> of the population lives in them." },
    { icon: "🌷", kind: "Francophonie", t: "Les jardins partagés", d: "Shared gardens exist in big cities all over the world. In <b>Montréal</b>, the community garden programme started in <b>1975</b>; the book counts 97 gardens with soil, seeds, water and tools. In Europe, <b>Switzerland</b> was a pioneer, with its <i>plantages</i> in <b>Lausanne</b> from 1995." },
    { icon: "🗼", kind: "Au fait !", t: "Les Franciliens", d: "<b>Franciliens</b> are the inhabitants of <b>Île-de-France</b>, the region around Paris. Many of them dream of leaving the capital for a calmer life (a theme of surveys and of the comic book <i>Le Retour à la terre</i> by Ferri and Larcenet)." },
    { icon: "🌿", kind: "Civilisation", t: "Le « néo-rural »", d: "A <i>néo-rural</i> is a city person who moves to the countryside, often to change jobs (market gardener, craftsperson, teleworker). Fairs like « Vivre et travailler au vert » help them find a house and a job." },
    { icon: "🏞️", kind: "Au fait !", t: "Les parcs naturels régionaux", d: "France has dozens of <b>parcs naturels régionaux</b> (regional nature parks) where people live, farm and protect nature: perfect for a <i>sortie nature</i> with hiking trails and picnic spots." },
    { icon: "🏛️", kind: "Civilisation", t: "Le patrimoine mondial de l'UNESCO", d: "The 1972 UNESCO Convention protects cultural and natural sites of outstanding value. French-speaking countries have many: the lagoons of New Caledonia, the royal palaces of Abomey (Benin), Gros-Morne (Canada), the Chauvet cave (France)…" }
  ],
  tips: [
    { icon: "⚖️", t: "plus de + noun, plus + adjective", d: "Quantities: [[plus de temps]]. Qualities: [[plus calme]]. No article after de: <s>plus de le temps</s>." },
    { icon: "📍", t: "y = à + thing", d: "[[J'y pense]] = I think about it. For a person: [[je pense à elle]]." },
    { icon: "🔗", t: "Glide, don't stop", d: "In [[j'ai eu]] or [[à Albi]], go straight from vowel to vowel, no pause." }
  ],
  mistakes: [
    ["J'en ai marre de le bruit.", "J'en ai marre du bruit.", "de + le = du"],
    ["Il y a plus des arbres.", "Il y a plus d'arbres.", "plus de + noun, no article"],
    ["La campagne est moins de polluée.", "La campagne est moins polluée.", "adjective → moins (no de)"],
    ["Je pense à mon projet. Je lui pense.", "J'y pense.", "a thing → y"],
    ["Je pense à ma mère. J'y pense.", "Je pense à elle.", "a person → à elle"],
    ["On joue à le foot.", "On joue au foot.", "à + le = au"],
    ["Ils ont le même taille.", "Ils ont la même taille.", "la taille (f.) → la même"],
    ["Il est aussi grand comme toi.", "Il est aussi grand que toi.", "aussi … que"]
  ]
});
