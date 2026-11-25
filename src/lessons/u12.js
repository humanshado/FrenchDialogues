// Unité 12 · C'était bien ? (book pp. 173–186)
// Situations: la soirée polyglotte · parler de ses progrès et de ses difficultés · des célébrités qui parlent français · l'horoscope et les projets · au kiosque à journaux
// Grammar: les pronoms COD et COI (me, te, nous, vous) · les indicateurs de temps (rappel) · les temps (rappel) · les pronoms compléments (rappel)
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U12_TABLE = [["me / m'", "me / m'", "Il me corrige. · Il me parle."], ["te / t'", "te / t'", "Je t'écoute. · Ça te plaît ?"], ["le / la / l'", "lui", "Je la lis. · Je lui écris."], ["nous", "nous", "Le prof nous interroge."], ["vous", "vous", "Nous vous donnons un badge."], ["les", "leur", "Je les achète. · Je leur offre un magazine."]];
LESSONS.push({
  id: "u12", rubrique: 6, num: 12,
  title: "Was it good?",
  titleFr: "C'était bien ?",
  pages: "Book pp. 173–186",
  opener: { fr: "Courage, vas-y ! Tu te débrouilles bien !", en: "Come on, go for it! You're doing well!" },
  hero: { scene: "cafe", staff: "L'organisateur", people: { "L'organisateur": "m4", "Maryam": "f4", "Tom": "m3" } },
  situations: [
    ["🗣️", "La soirée polyglotte", "practising languages with people from all over the world: [[Nous vous donnons un badge.]]"],
    ["😳", "Mes difficultés", "[[J'ai peur de prendre la parole.]] · [[J'ai du mal à m'exprimer.]] → [[Ne t'inquiète pas, ça va aller !]]"],
    ["⭐", "Des stars qui parlent français", "when and how long: [[il y a dix ans]], [[pendant six mois]], [[de 2010 à 2015]], [[en 2007]]"],
    ["🔮", "L'horoscope et mes projets", "[[Je compte passer le DELF.]] · [[Je suis d'accord.]] · [[Mais non, pas du tout !]]"],
    ["📰", "Au kiosque", "the press: [[La rubrique « Cuisine » m'intéresse : je la lis pour les recettes.]]"]
  ],
  goals: [
    "Talk about your difficulties: [[J'ai peur de…]], [[Je suis timide.]], [[J'ai du mal à…]], [[J'ai des difficultés à / pour…]]",
    "Encourage and reassure: [[Courage !]], [[Vas-y !]], [[Tu te débrouilles bien !]], [[Tu as un bon niveau.]]",
    "Use [[me]], [[te]], [[nous]], [[vous]] as direct or indirect objects: [[Il me corrige.]] · [[Il me parle.]]",
    "Place an event in time: [[il y a]], [[pendant]], [[depuis]], [[de … à]], [[en]], [[dans]]",
    "Talk about a project: [[J'ai un projet de vacances.]] · [[Je compte / Je pense voyager.]] · [[Je vais passer le DELF.]]",
    "Agree and disagree: [[Tu as raison.]], [[Je suis d'accord.]] ≠ [[C'est faux.]], [[Je ne suis pas d'accord.]]",
    "Express interest: [[Vraiment ?]], [[Intéressant !]], [[Ça m'intéresse.]]",
    "Review the tenses: passé composé, présent, futur proche, impératif"
  ],
  glance: [
    ["🗣️", "Communication", "learning languages · difficulties and encouragement · projects · agreement · interest · the press"],
    ["🧩", "Grammaire", "me, te, nous, vous (COD / COI) · time expressions · the four tenses · all object pronouns"],
    ["🗂️", "Vocabulaire", "speaking a language · learning strategies · the press: newspapers, magazines, sections"],
    ["🔊", "Phonétique", "[j] / [w] / [ɥ] (hier, oui, huit) · the silent e"],
    ["⭐", "The phrase to learn first", "[[Ne t'inquiète pas, ça va aller !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "The polyglot evening", titleFr: "Au café · La soirée polyglotte",
      note: "Maryam arrives at a language-exchange evening. Listen to [[vous]] and [[nous]] as object pronouns, and to how the organiser reassures her.",
      scene: "cafe", staff: "L'organisateur", people: { "L'organisateur": "m4", "Maryam": "f4" },
      lines: [
        ["L'organisateur", "Bonsoir ! Bienvenue à la soirée polyglotte. Nous vous donnons un badge : écrivez votre prénom et les langues que vous parlez.", "Good evening! Welcome to the polyglot evening. We give you a badge: write your first name and the languages you speak."],
        ["Maryam", "D'accord. Je parle arabe, anglais… et un peu français. Je suis débutante.", "OK. I speak Arabic, English… and a bit of French. I'm a beginner."],
        ["L'organisateur", "Pas de problème ! Vous voyez les drapeaux ? Ils indiquent les langues parlées à chaque table.", "No problem! Do you see the flags? They show the languages spoken at each table."],
        ["Maryam", "Je voudrais pratiquer mon français, mais je suis timide. J'ai peur de prendre la parole.", "I'd like to practise my French, but I'm shy. I'm afraid of speaking up."],
        ["L'organisateur", "Courage, allez-y ! Ici, les gens vous écoutent et ils vous aident.", "Come on, go for it! Here people listen to you and help you."],
        ["Maryam", "Et si je fais des erreurs ?", "And if I make mistakes?"],
        ["L'organisateur", "On vous corrige gentiment ! L'entrée coûte cinq euros, avec une boisson. Ne vous inquiétez pas, ça va aller !", "We'll correct you kindly! Entry is five euros, with a drink. Don't worry, it'll be fine!"]
      ],
      glossary: [["un(e) polyglotte", "someone who speaks several languages"], ["débutant(e)", "beginner"], ["prendre la parole", "to speak up"], ["Ne vous inquiétez pas !", "Don't worry!"]]
    },
    {
      id: "d2", n: 2, title: "How's your French going?", titleFr: "Au téléphone · Mes progrès en français",
      note: "Maryam calls her French friend Léa after a few months of classes. Listen to [[me]] / [[te]] and to the expressions for difficulties and encouragement.",
      scene: "appartement", people: { "Léa": "f3", "Maryam": "f4" }, phone: ["Léa", "Maryam"],
      lines: [
        ["Léa", "Alors, Maryam, tes cours de français, ça te plaît ?", "So, Maryam, do you like your French classes?"],
        ["Maryam", "Oui, beaucoup ! Je progresse. Mais j'ai encore du mal à m'exprimer à l'oral.", "Yes, a lot! I'm making progress. But I still find it hard to express myself orally."],
        ["Léa", "Et la compréhension ?", "And understanding?"],
        ["Maryam", "Ça va mieux. Le professeur nous parle lentement et il nous interroge tous les jours. Il me corrige quand je fais des erreurs.", "It's getting better. The teacher speaks slowly to us and asks us questions every day. He corrects me when I make mistakes."],
        ["Léa", "Tu as un bon niveau, tu sais ! Tu te débrouilles bien.", "You've got a good level, you know! You're doing well."],
        ["Maryam", "Merci ! J'ai aussi un échange linguistique avec un étudiant français. Je lui parle arabe, il me parle français.", "Thanks! I also have a language exchange with a French student. I speak Arabic to him, he speaks French to me."],
        ["Léa", "Super idée ! Et regarde des films en version originale. Je t'envoie une liste ?", "Great idea! And watch films in the original language. Shall I send you a list?"],
        ["Maryam", "Oui, envoie-la-moi ! Merci, Léa.", "Yes, send it to me! Thanks, Léa."]
      ],
      glossary: [["avoir du mal à + infinitif", "to find it hard to"], ["progresser", "to make progress"], ["l'échange linguistique", "the language exchange"], ["en version originale (VO)", "in the original language"]]
    },
    {
      id: "d3", n: 3, title: "Stars who speak French", titleFr: "À la bibliothèque · Des stars francophiles",
      note: "Tom and Kim read a magazine article about (imaginary) international stars who speak French. Listen to the time expressions.",
      scene: "classe", people: { "Tom": "m3", "Kim": "f7" },
      lines: [
        ["Kim", "Regarde cet article : des célébrités qui parlent français !", "Look at this article: celebrities who speak French!"],
        ["Tom", "Ah oui ? Qui ?", "Oh yes? Who?"],
        ["Kim", "Le chanteur Sam Rivers : il a étudié le français il y a dix ans, mais il a des difficultés à s'exprimer aujourd'hui.", "The singer Sam Rivers: he studied French ten years ago, but he has difficulty expressing himself today."],
        ["Tom", "Et l'actrice, là, sur la photo ?", "And the actress there, in the photo?"],
        ["Kim", "C'est Ana Duarte. Pendant ses études, elle a vécu dans une famille d'accueil à Aix-en-Provence pendant six mois.", "That's Ana Duarte. During her studies, she lived with a host family in Aix-en-Provence for six months."],
        ["Tom", "Et lui ?", "And him?"],
        ["Kim", "Il a habité à Paris de 2008 à 2015. En 2012, il a acheté un appartement à Montmartre.", "He lived in Paris from 2008 to 2015. In 2012, he bought a flat in Montmartre."],
        ["Tom", "Intéressant ! Et nous, dans deux ans, on va parler aussi bien qu'eux !", "Interesting! And in two years' time, we'll speak as well as they do!"]
      ],
      glossary: [["il y a dix ans", "ten years ago"], ["pendant six mois", "for six months"], ["de 2008 à 2015", "from 2008 to 2015"], ["dans deux ans", "in two years' time"]]
    },
    {
      id: "d4", n: 4, title: "Do you believe in horoscopes?", titleFr: "En pause · Tu veux connaître ton futur ?",
      note: "Claudio reads Hani's horoscope. Listen to how they agree and disagree, and talk about their plans.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Claudio": "m6", "Hani": "f8" },
      lines: [
        ["Claudio", "Hani, tu veux connaître ton futur ? Tu es de quel signe ?", "Hani, do you want to know your future? What's your sign?"],
        ["Hani", "Je suis Taureau. Mais je n'y crois pas, aux horoscopes !", "I'm a Taurus. But I don't believe in horoscopes!"],
        ["Claudio", "Écoute : « C'est bientôt l'été, partez en voyage ! Vous allez faire des rencontres. »", "Listen: “Summer is coming soon, go travelling! You're going to meet people.”"],
        ["Hani", "C'est vrai, j'ai un projet de vacances : je compte partir au Sénégal en juillet.", "True, I have a holiday plan: I'm planning to go to Senegal in July."],
        ["Claudio", "Tu vois ! L'horoscope a raison.", "You see! The horoscope is right."],
        ["Hani", "Mais non, pas du tout ! C'est un hasard. Et toi, tes projets ?", "No, not at all! It's a coincidence. And you, your plans?"],
        ["Claudio", "Je vais passer le DELF dans trois jours. Mon horoscope dit : « Ce n'est pas le bon moment. »", "I'm taking the DELF in three days. My horoscope says: “It's not the right time.”"],
        ["Hani", "Je ne suis pas d'accord ! Tu as bien préparé l'examen. Tu vas réussir !", "I don't agree! You've prepared well for the exam. You're going to pass!"]
      ],
      glossary: [["le signe astrologique", "the star sign"], ["Je compte / Je pense + infinitif", "I'm planning to…"], ["Tu as raison.", "You're right."], ["Je ne suis pas d'accord.", "I don't agree."]]
    },
    {
      id: "d5", n: 5, title: "At the newsstand", titleFr: "Au kiosque · La presse, ça m'intéresse !",
      note: "Victoria buys magazines for her family. Listen to the object pronouns: [[la]], [[les]], [[lui]], [[leur]], [[m']], [[vous]].",
      scene: "kiosque", staff: "Le vendeur", people: { "Le vendeur": "m5", "Victoria": "f5" },
      lines: [
        ["Victoria", "Bonjour ! Vous avez le dernier numéro de Jardin facile ?", "Hello! Do you have the latest issue of Jardin facile?"],
        ["Le vendeur", "Oui, le voilà. C'est pour vous ?", "Yes, here it is. Is it for you?"],
        ["Victoria", "Non, c'est pour mon mari. Je le lui offre pour son anniversaire. Moi, je préfère les magazines culturels.", "No, it's for my husband. I'm giving it to him for his birthday. I prefer cultural magazines."],
        ["Le vendeur", "Vous lisez quelles rubriques ?", "Which sections do you read?"],
        ["Victoria", "La rubrique « Cinéma » m'intéresse beaucoup. Je la lis toutes les semaines. Et la rubrique « Cuisine », pour les recettes.", "The “Cinema” section interests me a lot. I read it every week. And the “Cooking” section, for the recipes."],
        ["Le vendeur", "Et pour vos enfants ? Je vous conseille ce journal pour les enfants. Ils vont l'adorer !", "And for your children? I recommend this newspaper for children. They'll love it!"],
        ["Victoria", "Vraiment ? D'accord, je le prends. Je leur lis souvent des articles le soir.", "Really? OK, I'll take it. I often read them articles in the evening."],
        ["Le vendeur", "Ça fait onze euros vingt, s'il vous plaît.", "That's eleven euros twenty, please."]
      ],
      glossary: [["le kiosque à journaux", "the newsstand"], ["le numéro", "the issue"], ["la rubrique", "the section (of a magazine)"], ["Ça m'intéresse.", "It interests me."]]
    }
  ],

  vocab: [
    { t: "la langue maternelle", en: "the mother tongue", pic: "👶", cat: "Parler une langue", g: "f" },
    { t: "être polyglotte", en: "to speak several languages", pic: "🗣️", cat: "Parler une langue" },
    { t: "l'accent", en: "the accent", pic: "🎙️", cat: "Parler une langue", g: "m" },
    { t: "le niveau de langue", en: "the language level", pic: "📶", cat: "Parler une langue", g: "m" },
    { t: "débutant(e)", en: "beginner", pic: "🐣", cat: "Parler une langue" },
    { t: "la compréhension (orale, écrite)", en: "understanding (listening, reading)", pic: "👂", cat: "Parler une langue", g: "f" },
    { t: "l'expression, s'exprimer", en: "expression, to express oneself", pic: "💬", cat: "Parler une langue", g: "f" },
    { t: "communiquer", en: "to communicate", pic: "📞", cat: "Parler une langue" },
    { t: "prendre la parole", en: "to speak up", pic: "🙋", cat: "Parler une langue" },
    { t: "suivre des cours", en: "to take classes", pic: "🏫", cat: "Parler une langue" },
    { t: "progresser, s'améliorer", en: "to make progress, to improve", pic: "📈", cat: "Parler une langue" },
    { t: "corriger", en: "to correct", pic: "✏️", cat: "Les stratégies" },
    { t: "pratiquer", en: "to practise", pic: "🔁", cat: "Les stratégies" },
    { t: "l'échange linguistique", en: "the language exchange", pic: "🔄", cat: "Les stratégies", g: "m" },
    { t: "le programme d'échange", en: "the exchange programme", pic: "✈️", cat: "Les stratégies", g: "m" },
    { t: "la famille d'accueil", en: "the host family", pic: "🏠", cat: "Les stratégies", g: "f" },
    { t: "faire un séjour", en: "to stay (abroad)", pic: "🧳", cat: "Les stratégies" },
    { t: "la soirée polyglotte", en: "the language-exchange evening", pic: "🌍", cat: "Les stratégies", g: "f" },
    { t: "un film en version originale", en: "a film in the original language", pic: "🎬", cat: "Les stratégies", g: "m" },
    { t: "la lecture", en: "reading", pic: "📖", cat: "Les stratégies", g: "f" },
    { t: "timide", en: "shy", pic: "😳", cat: "Les difficultés" },
    { t: "bloqué(e)", en: "stuck, blocked", pic: "🧱", cat: "Les difficultés" },
    { t: "avoir peur de", en: "to be afraid of", pic: "😨", cat: "Les difficultés" },
    { t: "avoir du mal à", en: "to find it hard to", pic: "😓", cat: "Les difficultés" },
    { t: "se débrouiller", en: "to manage, get by", pic: "👍", cat: "Les difficultés" },
    { t: "s'inquiéter", en: "to worry", pic: "😟", cat: "Les difficultés" },
    { t: "l'horoscope", en: "the horoscope", pic: "🔮", cat: "Les projets", g: "m" },
    { t: "le signe astrologique", en: "the star sign", pic: "♉", cat: "Les projets", g: "m" },
    { t: "la chance", en: "luck", pic: "🍀", cat: "Les projets", g: "f" },
    { t: "compter + infinitif", en: "to plan to", pic: "🗓️", cat: "Les projets", note: "[[Je compte voyager.]]" },
    { t: "avoir raison ≠ avoir tort", en: "to be right ≠ to be wrong", pic: "⚖️", cat: "Les projets" },
    { t: "être d'accord", en: "to agree", pic: "🤝", cat: "Les projets" },
    { t: "le journal", en: "the newspaper", pic: "🗞️", cat: "La presse", g: "m", note: "pl. les journaux" },
    { t: "le magazine", en: "the magazine", pic: "📔", cat: "La presse", g: "m" },
    { t: "le kiosque à journaux", en: "the newsstand", pic: "🏪", cat: "La presse", g: "m" },
    { t: "le vendeur de journaux", en: "the newsagent", pic: "🧑‍💼", cat: "La presse", g: "m" },
    { t: "le numéro", en: "the issue", pic: "#️⃣", cat: "La presse", g: "m" },
    { t: "l'article", en: "the article", pic: "📄", cat: "La presse", g: "m" },
    { t: "la rubrique", en: "the section", pic: "🗂️", cat: "La presse", g: "f" },
    { t: "l'actualité", en: "the news, current affairs", pic: "🌐", cat: "La presse", g: "f" },
    { t: "le magazine d'actualité", en: "the news magazine", pic: "📰", cat: "La presse", g: "m" },
    { t: "le magazine culturel", en: "the arts magazine", pic: "🎭", cat: "La presse", g: "m" },
    { t: "le magazine sportif", en: "the sports magazine", pic: "⚽", cat: "La presse", g: "m" },
    { t: "le magazine féminin", en: "the women's magazine", pic: "💄", cat: "La presse", g: "m" },
    { t: "la politique", en: "politics", pic: "🏛️", cat: "Les rubriques", g: "f" },
    { t: "l'économie (rubrique)", en: "business / economy section", pic: "📈", cat: "Les rubriques", g: "f" },
    { t: "la société", en: "society", pic: "👥", cat: "Les rubriques", g: "f" },
    { t: "la cuisine", en: "cooking", pic: "🍳", cat: "Les rubriques", g: "f" },
    { t: "le cinéma", en: "cinema", pic: "🎬", cat: "Les rubriques", g: "m" },
    { t: "la littérature", en: "literature", pic: "📚", cat: "Les rubriques", g: "f" }
  ],

  grammar: [
    {
      id: "g-difficultes",
      title: "Talking about difficulties · encouraging",
      body: [
        "Difficulties: [[J'ai peur de prendre la parole.]] · [[Je suis timide.]] · [[Je suis bloqué(e).]] · [[J'ai du mal à m'exprimer.]] · [[J'ai des difficultés à lire.]] / [[pour lire]]",
        "Encouraging, reassuring: [[Courage !]] · [[Vas-y !]] / [[Allez-y !]] · [[Tu te débrouilles bien !]] · [[Tu as un bon niveau.]] · [[Ne t'inquiète pas, ça va aller !]] / [[Ne vous inquiétez pas !]]"
      ],
      info: { type: "compare", title: "😳 → 💪 Problem and answer", cols: [
        { head: "Les difficultés", en: "the learner says", color: "#e86a2e", lines: [["J'ai peur de prendre la parole.", "I'm afraid to speak up."], ["J'ai du mal à comprendre.", "I find it hard to understand."], ["Je suis bloquée.", "I'm stuck."]] },
        { head: "Les encouragements", en: "the friend answers", color: "#2f9c8a", lines: [["Courage, vas-y !", "Come on, go for it!"], ["Tu te débrouilles bien !", "You're doing well!"], ["Ne t'inquiète pas, ça va aller !", "Don't worry, it'll be fine!"]] }
      ] },
      widget: {
        type: "combo", label: "Say what's hard · pick an expression and a skill",
        rows: [{ k: "mal", label: "J'ai du mal à…" }, { k: "peur", label: "J'ai peur de…" }, { k: "diff", label: "J'ai des difficultés pour…" }],
        cols: [{ k: "parler", label: "🗣️ parler en public" }, { k: "comp", label: "👂 comprendre les films" }, { k: "ecrire", label: "✍️ écrire des mails" }],
        out: {
          "mal|parler": ["J'ai du mal à parler en public.", "I find it hard to speak in public."], "peur|parler": ["J'ai peur de parler en public.", "I'm afraid of speaking in public."], "diff|parler": ["J'ai des difficultés pour parler en public.", "I have difficulty speaking in public."],
          "mal|comp": ["J'ai du mal à comprendre les films.", "I find it hard to understand films."], "peur|comp": ["J'ai peur de ne pas comprendre les films.", "I'm afraid of not understanding films.", "ne pas + infinitive"], "diff|comp": ["J'ai des difficultés pour comprendre les films.", "I have difficulty understanding films."],
          "mal|ecrire": ["J'ai du mal à écrire des mails.", "I find it hard to write e-mails."], "peur|ecrire": ["J'ai peur d'écrire des mails.", "I'm afraid of writing e-mails.", "de → d' before a vowel"], "diff|ecrire": ["J'ai des difficultés pour écrire des mails.", "I have difficulty writing e-mails."]
        }
      }
    },
    {
      id: "g-me-te",
      title: "[[me]], [[te]], [[nous]], [[vous]]: direct and indirect objects",
      body: [
        "[[me]], [[te]], [[nous]], [[vous]] have the <b>same form</b> as direct objects (COD: answer <i>qui ?</i>) and indirect objects (COI: answer <i>à qui ?</i>): [[Il vous encourage]] (encourager quelqu'un) · [[Il me parle de ses difficultés]] (parler à quelqu'un).",
        "Direct verbs: [[écouter]], [[corriger]], [[interroger]], [[aider]], [[encourager]] quelqu'un. Indirect verbs: [[parler]], [[plaire]], [[téléphoner]], [[répondre]] à quelqu'un. Both: [[donner]], [[envoyer]], [[offrir]] quelque chose à quelqu'un.",
        "Before the verb: [[Les gens m'écoutent et me corrigent.]] · Negative: [[Il ne nous parle pas.]] · [[me]] / [[te]] → [[m']] / [[t']] before a vowel."
      ],
      info: { type: "pattern", title: "🎯 Who does it to whom?", rows: [
        ["Le professeur", { opts: ["me", "te", "nous", "vous"] }, { opts: ["corrige.", "écoute.", "parle.", "répond."] }]
      ], note: "Tap through the boxes: any combination works, because me / te / nous / vous are the same for COD and COI." },
      widget: {
        type: "sort", label: "Direct (quelqu'un) or indirect (à quelqu'un)?",
        cols: [{ k: "cod", label: "COD · qui ?", color: "#3a6fd8" }, { k: "coi", label: "COI · à qui ?", color: "#9b4fb0" }],
        items: [
          { t: "Le professeur nous interroge.", k: "cod", say: "Le professeur nous interroge." }, { t: "Ça te plaît ?", k: "coi", say: "Ça te plaît ?" }, { t: "Les gens m'écoutent.", k: "cod", say: "Les gens m'écoutent." },
          { t: "Il me parle en français.", k: "coi", say: "Il me parle en français." }, { t: "Je vous aide ?", k: "cod", say: "Je vous aide ?" }, { t: "Elle nous téléphone.", k: "coi", say: "Elle nous téléphone." }
        ]
      }
    },
    {
      id: "g-indicateurs",
      title: "Time expressions (reminder): [[il y a]], [[pendant]], [[de … à]], [[en]], [[dans]]",
      body: [
        "A <b>moment</b>: [[il y a dix ans]] (in the past) · [[en 2012]], [[en juillet]] · [[dans deux ans]] (in the future, from now).",
        "A <b>length of time</b>: [[pendant six mois]] (limited) · [[depuis trois ans]] (still going) · [[de 2008 à 2015]] (from … to) · [[longtemps]]."
      ],
      info: { type: "timeline", title: "⭐ A star's life in French", ends: ["passé", "aujourd'hui", "futur"], items: [
        { x: 8, fr: "Il y a dix ans, il a étudié le français.", en: "Ten years ago, he studied French.", pic: "📚" },
        { x: 26, fr: "Il a habité à Paris de 2008 à 2015.", en: "He lived in Paris from 2008 to 2015.", pic: "🗼" },
        { x: 40, fr: "En 2012, il a acheté un appartement.", en: "In 2012, he bought a flat.", pic: "🏠" },
        { x: 62, fr: "Il parle français depuis dix ans.", en: "He has spoken French for ten years.", pic: "🗣️" },
        { x: 88, fr: "Dans deux ans, il va tourner un film en France.", en: "In two years, he'll shoot a film in France.", pic: "🎬" }
      ] },
      widget: {
        type: "sort", label: "A moment or a length of time?",
        cols: [{ k: "moment", label: "un moment", color: "#e0a526" }, { k: "duree", label: "une durée", color: "#2f9c8a" }],
        items: [
          { t: "il y a dix ans", k: "moment", say: "il y a dix ans" }, { t: "pendant six mois", k: "duree", say: "pendant six mois" }, { t: "en 2007", k: "moment", say: "en deux mille sept" },
          { t: "de 1998 à 2012", k: "duree", say: "de mille neuf cent quatre-vingt-dix-huit à deux mille douze" }, { t: "dans trois jours", k: "moment", say: "dans trois jours" }, { t: "depuis septembre", k: "duree", say: "depuis septembre" }
        ]
      }
    },
    {
      id: "g-temps",
      title: "The tenses (reminder) · talking about plans",
      body: [
        "<b>Passé composé</b>: a past action: [[Vous avez fait trop de sport.]] · <b>Présent</b>: now, or a near future: [[Vous vous sentez seul.]] · [[C'est bientôt l'été.]] · [[Je passe le DELF dans trois jours.]]",
        "<b>Futur proche</b>: a plan, a future event: [[Vous allez faire des rencontres.]] · <b>Impératif</b>: advice, instructions: [[Partez en voyage !]] · [[Invitez des amis !]]",
        "Plans: [[J'ai un projet de vacances.]] · [[Je compte voyager.]] · [[Je pense partir au Sénégal.]] Agreement: [[C'est vrai.]] · [[Tu as raison.]] · [[Je suis d'accord (avec vous).]] ≠ [[C'est faux.]] · [[Mais non, pas du tout !]] · [[Je ne suis pas d'accord.]]"
      ],
      info: { type: "card", style: "board", caption: "🔮 L'horoscope de la semaine · tap a sign", title: "HOROSCOPE DE LA SEMAINE", sub: "4 temps, 4 usages", rows: [
        ["♈ Bélier", "La semaine dernière a été difficile, mais la chance va revenir.", "La semaine dernière a été difficile, mais la chance va revenir."],
        ["♉ Taureau", "C'est bientôt l'été : partez en voyage ! Vous allez faire des rencontres.", "C'est bientôt l'été : partez en voyage ! Vous allez faire des rencontres."],
        ["♋ Cancer", "Vous avez un projet sérieux. Réalisez-le !", "Vous avez un projet sérieux. Réalisez-le !"],
        ["♌ Lion", "Vous avez oublié vos amis : appelez-les !", "Vous avez oublié vos amis : appelez-les !"],
        ["♒ Verseau", "Vous êtes fatigué : vous avez fait trop de sport.", "Vous êtes fatigué : vous avez fait trop de sport."]
      ], foot: "passé composé · présent · futur proche · impératif" },
      widget: {
        type: "combo", label: "One verb, four tenses · pick a tense and a verb",
        rows: [{ k: "pc", label: "passé composé" }, { k: "pr", label: "présent" }, { k: "fp", label: "futur proche" }, { k: "imp", label: "impératif" }],
        cols: [{ k: "voy", label: "✈️ voyager (vous)" }, { k: "inv", label: "👥 inviter des amis (tu)" }, { k: "part", label: "🧳 partir (nous)" }],
        out: {
          "pc|voy": ["Vous avez voyagé.", "You travelled."], "pr|voy": ["Vous voyagez.", "You are travelling."], "fp|voy": ["Vous allez voyager.", "You're going to travel."], "imp|voy": ["Voyagez !", "Travel!"],
          "pc|inv": ["Tu as invité des amis.", "You invited friends."], "pr|inv": ["Tu invites des amis.", "You're inviting friends."], "fp|inv": ["Tu vas inviter des amis.", "You're going to invite friends."], "imp|inv": ["Invite des amis !", "Invite some friends!", "-er verbs: no s in the tu imperative"],
          "pc|part": ["Nous sommes partis.", "We left.", "partir → être"], "pr|part": ["Nous partons.", "We're leaving."], "fp|part": ["Nous allons partir.", "We're going to leave."], "imp|part": ["Partons !", "Let's go!"]
        }
      }
    },
    {
      id: "g-pronoms",
      title: "All the object pronouns (reminder) · showing interest",
      body: [
        "Direct (COD): [[me]], [[te]], [[le / la / l']], [[nous]], [[vous]], [[les]], with [[aimer]], [[appeler]], [[écouter]], [[lire]], [[voir]] quelque chose / quelqu'un: [[La rubrique « Cuisine » ? Je la lis pour les recettes.]]",
        "Indirect (COI, à + person): [[me]], [[te]], [[lui]], [[nous]], [[vous]], [[leur]], with [[parler]], [[plaire]], [[répondre]], [[téléphoner]] à quelqu'un: [[Il leur parle de foot.]] · [[Ça me plaît bien.]]",
        "Double construction: [[demander]], [[dire]], [[donner]], [[écrire]], [[offrir]] quelque chose à quelqu'un: [[J'offre un magazine à mes parents.]] → [[Je leur offre un magazine.]] Showing interest: [[Vraiment ?]] · [[C'est vrai ?]] · [[Intéressant !]] · [[Ça m'intéresse.]]"
      ],
      info: { type: "card", style: "board", caption: "📋 The pronoun table · tap a row", title: "COD · COI", sub: "le / la / les ≠ lui / leur", rows: U12_TABLE.map(([a, b, ex]) => [a + "  |  " + b, ex, ex]), foot: "Only the 3rd person changes: le, la, les (COD) ≠ lui, leur (COI)" },
      widget: {
        type: "sort", label: "le / la / les or lui / leur? Replace the underlined words",
        cols: [{ k: "cod", label: "le / la / les", color: "#3a6fd8" }, { k: "coi", label: "lui / leur", color: "#9b4fb0" }],
        items: [
          { t: "Je lis ce magazine.", k: "cod", say: "Je le lis." }, { t: "Je parle à la journaliste.", k: "coi", say: "Je lui parle." }, { t: "J'achète les journaux.", k: "cod", say: "Je les achète." },
          { t: "J'offre un livre à mes parents.", k: "coi", say: "Je leur offre un livre." }, { t: "Tu regardes la rubrique sport ?", k: "cod", say: "Tu la regardes ?" }, { t: "Elle répond au vendeur.", k: "coi", say: "Elle lui répond." }
        ]
      }
    }
  ],

  expressions: [
    { fn: "Pour parler de ses difficultés", fnEn: "difficulties", icon: "😳", items: [
      ["J'ai peur de prendre la parole.", "I'm afraid of speaking up.", "std", true],
      ["Je suis timide. Je suis bloqué(e).", "I'm shy. I'm stuck.", "std"],
      ["J'ai du mal à m'exprimer.", "I find it hard to express myself.", "std", true],
      ["J'ai des difficultés à / pour lire.", "I have difficulty reading.", "std"]
    ] },
    { fn: "Pour encourager ou rassurer", fnEn: "encouraging", icon: "💪", items: [
      ["Courage ! Vas-y ! / Allez-y !", "Come on! Go for it!", "std", true],
      ["Tu te débrouilles bien !", "You're doing well!", "std", true],
      ["Tu as un bon niveau.", "You have a good level.", "std"],
      ["Ne t'inquiète pas, ça va aller !", "Don't worry, it'll be fine!", "std", true]
    ] },
    { fn: "Pour parler d'un projet", fnEn: "plans", icon: "🗓️", items: [
      ["J'ai un projet de vacances.", "I have a holiday plan.", "std"],
      ["Je vais passer le DELF dans trois jours.", "I'm taking the DELF in three days.", "std", true],
      ["Je compte / Je pense voyager.", "I'm planning to travel.", "std", true]
    ] },
    { fn: "Pour dire son accord ou son désaccord", fnEn: "agreeing", icon: "🤝", items: [
      ["C'est vrai. Tu as raison.", "That's true. You're right.", "std", true],
      ["Je suis d'accord (avec vous).", "I agree (with you).", "std", true],
      ["C'est faux.", "That's wrong.", "std"],
      ["Mais non, pas du tout !", "No, not at all!", "std"],
      ["Je ne suis pas d'accord.", "I don't agree.", "std", true]
    ] },
    { fn: "Pour exprimer son intérêt", fnEn: "interest", icon: "🤩", items: [
      ["Vraiment ? C'est vrai ?", "Really? Is that true?", "std"],
      ["Intéressant ! Je trouve ça intéressant.", "Interesting! I find that interesting.", "std", true],
      ["La rubrique « Cuisine » m'intéresse.", "The cooking section interests me.", "std", true]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · reassuring a learner", lanes: ["Léa", "Maryam"], av: ["f3", "f4"], steps: [
    { s: 0, fr: "Alors, tes cours de français, ça te plaît ?", en: "So, do you like your French classes?" },
    { s: 1, fr: "Oui, mais j'ai du mal à m'exprimer.", en: "Yes, but I find it hard to express myself." },
    { s: 0, fr: "Ne t'inquiète pas ! Tu te débrouilles bien.", en: "Don't worry! You're doing well." },
    { s: 1, fr: "J'ai peur de faire des erreurs.", en: "I'm afraid of making mistakes." },
    { s: 0, fr: "Courage, vas-y ! Les gens vont te corriger gentiment.", en: "Come on, go for it! People will correct you kindly." },
    { s: 1, fr: "Tu as raison. Merci !", en: "You're right. Thanks!" }
  ] },

  sounds: {
    intro: "Three “semi-vowels”: [j] as in [[hier]], [w] as in [[oui]], [ɥ] as in [[huit]]: each one glides quickly into the next vowel. And the French e: often silent ([[samedi]] → sam'di), but pronounced after two consonants ([[surprenant]]).",
    letters: [
      { l: "i + voyelle · y · -ill", name: "[j] · hier", tip: "A quick “y” sound: [[hier]], [[bien]], [[le voyage]], [[la famille]], [[le travail]].", ex: ["hier", "bien", "le voyage", "la famille"] },
      { l: "ou + voyelle · oi · oin", name: "[w] · oui", tip: "A quick “w”: [[oui]], [[moi]], [[loin]], [[la soirée]]. <b>oi</b> = [wa].", ex: ["oui", "moi", "loin", "la soirée"] },
      { l: "u + voyelle", name: "[ɥ] · huit", tip: "Round your lips for [y] (as in tu) and glide: [[huit]], [[la nuit]], [[je suis]], [[aujourd'hui]].", ex: ["huit", "la nuit", "je suis", "aujourd'hui"] },
      { l: "e", name: "e prononcé ou non ?", tip: "Final e is silent: [[magazine]]. Between two single consonants it often drops: [[samedi]] → sam'di, [[je regarde]] → j'regarde. After two consonants, keep it: [[surprenant]], [[vendredi]].", ex: ["samedi", "vendredi", "Je regarde un film.", "surprenant"] }
    ],
    pairs: [
      { a: ["oui", "yes"], b: ["huit", "eight"], note: "[w] / [ɥ]" },
      { a: ["Louis", "Louis"], b: ["lui", "him"], note: "[w] / [ɥ]" },
      { a: ["hier", "yesterday"], b: ["huile", "oil"], note: "[j] / [ɥ]" },
      { a: ["samedi", "Saturday"], b: ["vendredi", "Friday"], note: "e silent / e pronounced" },
      { a: ["je le lis", "I read it"], b: ["je lui lis", "I read to him/her"], note: "le / lui" },
      { a: ["Tu as raison.", "You're right."], b: ["C'est faux.", "That's wrong."], note: "accord / désaccord" }
    ]
  },
  classify: {
    label: "🔊 [j], [w] ou [ɥ] ?", q: "Listen: which glide do you hear?",
    options: ["[j] hier", "[w] oui", "[ɥ] huit"],
    items: [
      { say: "bien", a: 0 }, { say: "moi", a: 1 }, { say: "la nuit", a: 2 }, { say: "le voyage", a: 0 },
      { say: "loin", a: 1 }, { say: "je suis", a: 2 }, { say: "la famille", a: 0 }, { say: "la soirée", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Maryam est débutante en français.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "L'entrée de la soirée est gratuite.", ok: false, explain: "Five euros, with a drink." },
    { type: "mcq", tag: "Dialogue 1", q: "Les drapeaux indiquent…", options: ["les langues parlées à chaque table", "la nationalité de l'organisateur", "le prix des boissons"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Maryam a du mal à s'exprimer à l'oral.", ok: true },
    { type: "mcq", tag: "Dialogue 2", q: "Léa conseille à Maryam de…", options: ["regarder des films en version originale", "arrêter les cours", "parler arabe"], answer: 0 },
    { type: "mcq", tag: "Dialogue 3", q: "Ana Duarte a vécu à Aix-en-Provence…", options: ["pendant six mois", "depuis dix ans", "en 2012"], answer: 0 },
    { type: "tf", tag: "Dialogue 4", s: "Hani croit aux horoscopes.", ok: false, explain: "« Je n'y crois pas. »" },
    { type: "mcq", tag: "Dialogue 4", q: "Quand Claudio passe le DELF ?", options: ["dans trois jours", "il y a trois jours", "en juillet"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Victoria achète Jardin facile pour son mari.", ok: true },
    { type: "fill", tag: "Difficultés", sentence: "J'ai du mal ___ m'exprimer.", options: ["à", "de", "pour le"], answer: 0 },
    { type: "fill", tag: "Difficultés", sentence: "J'ai peur ___ prendre la parole.", options: ["de", "à", "pour"], answer: 0 },
    { type: "fill", tag: "Encourager", sentence: "Ne t'___, ça va aller !", options: ["inquiète", "inquiètes", "inquiéter"], answer: 0 },
    { type: "fill", tag: "me, te, nous, vous", sentence: "Les gens ___ écoutent et me corrigent.", options: ["m'", "me", "moi"], answer: 0 },
    { type: "fill", tag: "me, te, nous, vous", sentence: "Ce film, il ___ plaît ? (to you, tu)", options: ["te", "toi", "tu"], answer: 0 },
    { type: "fill", tag: "me, te, nous, vous", sentence: "Le professeur ___ parle lentement. (to us)", options: ["nous", "leur", "les"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Il a étudié le français ___ dix ans.", options: ["il y a", "dans", "depuis"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Elle a vécu en France ___ 1998 à 2012.", options: ["de", "en", "pendant"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Je pars au Canada ___ deux semaines. (future)", options: ["dans", "il y a", "en"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "___ juin 2011, je suis parti en Australie.", options: ["En", "Dans", "Pendant"], answer: 0 },
    { type: "fill", tag: "Les temps", sentence: "La semaine dernière, vous ___ trop de sport.", options: ["avez fait", "allez faire", "faites"], answer: 0 },
    { type: "fill", tag: "Les temps", sentence: "Demain, je ___ passer le DELF.", options: ["vais", "suis", "ai"], answer: 0 },
    { type: "fill", tag: "Les temps", sentence: "Vous êtes seul ? ___ des amis !", options: ["Invitez", "Vous invitez", "Avez invité"], answer: 0 },
    { type: "fill", tag: "Pronoms", sentence: "La rubrique cinéma ? Je ___ lis toutes les semaines.", options: ["la", "lui", "leur"], answer: 0 },
    { type: "fill", tag: "Pronoms", sentence: "Mes enfants ? Je ___ lis des articles le soir.", options: ["leur", "les", "lui"], answer: 0 },
    { type: "fill", tag: "Pronoms", sentence: "Le vendeur ? Je ___ demande le prix.", options: ["lui", "le", "y"], answer: 0 },
    { type: "type", tag: "Pronoms", q: "Replace with a pronoun: « J'offre un magazine à mes parents. »", answers: ["Je leur offre un magazine.", "Je leur offre un magazine"] },
    { type: "reply", tag: "Que répondre ?", prompt: "J'ai peur de parler en français…", options: ["Courage, vas-y ! Tu te débrouilles bien.", "C'est faux.", "Il y a dix ans."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Les horoscopes disent toujours la vérité !", options: ["Mais non, pas du tout ! Je ne suis pas d'accord.", "Ça me plaît, la rubrique.", "Dans trois jours."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il existe un roman sans la lettre e.", options: ["Vraiment ? C'est intéressant !", "Je lui lis.", "Ne t'inquiète pas."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Un lieu pour acheter des journaux :", options: ["un kiosque", "une rubrique", "un article"], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la rubrique", "l'article", "le numéro", "l'accent"], answer: 3, explain: "l'accent is about speaking; the others are about the press." },
    { type: "order", tag: "Construisez", en: "Don't worry, it'll be fine!", words: ["Ne", "t'inquiète", "pas,", "ça", "va", "aller", "!"] },
    { type: "listen", tag: "Écoute", q: "What is the speaker planning?", say: "Je compte partir au Sénégal en juillet.", options: ["to go to Senegal in July", "to study in Senegal for a year", "to come back from Senegal"], answer: 0 }
  ],

  roleplays: [
    { title: "🗣️ À la soirée polyglotte", brief: "You arrive at a language-exchange evening. Introduce yourself, say your languages and your difficulties.", memo: ["Je parle…", "Je suis débutant(e).", "J'ai du mal à…"], partner: "m4", you: "f7",
      turns: [
        { them: "Bonsoir ! Vous parlez quelles langues ?", themEn: "Good evening! Which languages do you speak?", hint: "Korean, English and a little French.", you: "Je parle coréen, anglais et un peu français.", youEn: "I speak Korean, English and a little French." },
        { them: "Vous voulez pratiquer quelle langue ce soir ?", themEn: "Which language do you want to practise tonight?", hint: "French; you're a beginner and you find it hard to speak.", you: "Le français. Je suis débutante et j'ai du mal à parler.", youEn: "French. I'm a beginner and I find it hard to speak." },
        { them: "Ne vous inquiétez pas ! Ici, tout le monde vous aide.", themEn: "Don't worry! Everyone here helps you.", hint: "Thank him; ask if people correct you.", you: "Merci ! Et les gens me corrigent ?", youEn: "Thanks! And do people correct me?" }
      ] },
    { title: "💪 Encourage un ami", brief: "A friend is discouraged about learning French. Reassure them and give advice.", memo: ["Courage !", "Tu te débrouilles bien.", "Regarde… / Lis…"], partner: "m3", you: "f3",
      turns: [
        { them: "Je n'y arrive pas… J'ai peur de prendre la parole en classe.", themEn: "I can't do it… I'm afraid to speak up in class.", hint: "Encourage him: he's doing well.", you: "Courage ! Tu te débrouilles bien, tu sais.", youEn: "Come on! You're doing well, you know." },
        { them: "Mais je ne comprends pas les films.", themEn: "But I don't understand films.", hint: "Advise films in VO with subtitles (impératif).", you: "Regarde des films en version originale avec des sous-titres !", youEn: "Watch films in the original language with subtitles!" },
        { them: "Tu crois que je vais progresser ?", themEn: "Do you think I'll make progress?", hint: "Reassure him.", you: "Oui ! Ne t'inquiète pas, ça va aller !", youEn: "Yes! Don't worry, it'll be fine!" }
      ] },
    { title: "📰 Chez le marchand de journaux (DELF)", brief: "A French friend gave you 20 euros to buy him newspapers and magazines. He likes cinema and economics. Ask, choose and pay.", memo: ["Je voudrais…", "Vous avez… ?", "Il coûte combien ?", "Je le prends."], partner: "m5", you: "m6",
      turns: [
        { them: "Bonjour ! Je peux vous aider ?", themEn: "Hello! Can I help you?", hint: "Say you're looking for a cinema magazine.", you: "Bonjour, je cherche un magazine de cinéma, s'il vous plaît.", youEn: "Hello, I'm looking for a cinema magazine, please." },
        { them: "Nous avons celui-ci, à six euros.", themEn: "We have this one, at six euros.", hint: "Take it; ask for a newspaper with an economy section.", you: "Je le prends. Et vous avez un journal avec une rubrique économie ?", youEn: "I'll take it. And do you have a newspaper with a business section?" },
        { them: "Oui, ce journal-là : deux euros cinquante.", themEn: "Yes, that one: two euros fifty.", hint: "Take it and ask how much in total.", you: "Parfait, je le prends aussi. Ça fait combien ?", youEn: "Perfect, I'll take it too. How much is that?" },
        { them: "Huit euros cinquante.", themEn: "Eight euros fifty.", hint: "Pay with a 20-euro note.", you: "Voilà vingt euros. Merci, au revoir !", youEn: "Here's twenty euros. Thank you, goodbye!" }
      ] }
  ],

  ateliers: [
    { title: "Créer l'horoscope de la classe", intro: "In groups, write a horoscope for the class with invented signs.",
      steps: [["Préparation", ["As a class, invent star signs from a theme: animals, plants, food… (e.g. [[le Croissant]], [[la Tulipe]]).", "List horoscope themes: friends, health, work, love, money. Each group picks two signs."]], ["Réalisation", ["For each sign, say what happened this week (passé composé), the present situation, the forecast (futur proche) and some advice (impératif).", "Example: [[La semaine dernière, vous n'avez pas été en forme. Cette semaine, vous allez avoir de la chance. Jouez au loto !]]"]], ["Présentation", ["Read your texts to the class and put the full horoscope on the wall."]]],
      phrases: ["Vous avez eu…", "Vous allez…", "Attention !", "Offrez… / Invitez…"] },
    { title: "Réaliser un kiosque à journaux numérique", tech: true, intro: "Invent magazine titles and present them in an online newsstand.",
      steps: [["Préparation", ["Decide which kinds of magazines your newsstand will sell: news, culture, travel, sport…", "Look at real magazines online for inspiration. Each group chooses a type."]], ["Réalisation", ["Create a cover: a title (e.g. [[Musique Mag]], [[Foot !]], [[Le Monde des fleurs]]), a photo and a headline for the main article, a few sections."]], ["Présentation", ["Put all the covers on a shared online board: your class newsstand!", "Which magazines interest you? Why? [[Ça m'intéresse parce que…]]"]]],
      phrases: ["La rubrique… m'intéresse.", "Je trouve ça intéressant.", "Je le lis pour…"],
      model: { type: "card", style: "menu", title: "KIOSQUE DE LA CLASSE", sub: "nos magazines", rows: [["Musique Mag · rubriques : concerts, interviews", "4,50 €", "Musique Mag, quatre euros cinquante. Rubriques : concerts et interviews."], ["Foot ! · rubriques : matchs, joueurs", "3 €", "Foot !, trois euros."], ["Le Monde des fleurs · rubriques : jardinage, saisons", "5,90 €", "Le Monde des fleurs, cinq euros quatre-vingt-dix."], ["L'Actu des jeunes · rubriques : société, cinéma", "2,50 €", "L'Actu des jeunes, deux euros cinquante."]], foot: "Bonne lecture !" } }
  ],
  delf: {
    skill: "Production orale", title: "Part 3 · Dialogue simulé: at the newsagent's",
    about: "In the DELF A1 role-play (about 2 minutes), the examiner plays a shopkeeper and you are the customer, often with pretend money. Example from the book: <i>a French friend gives you 20 euros to buy newspapers and magazines; he likes cinema and economics.</i> You must greet, ask for information and prices, choose, pay and say goodbye.",
    tips: ["Greet and say what you want: [[Bonjour, je voudrais…]] / [[Je cherche…]]", "Ask: [[Vous avez… ?]] · [[Il coûte combien ?]] · [[Ça fait combien ?]]", "Choose with a pronoun: [[Je le prends.]] · [[Je les prends.]]", "Check your budget: 20 € is the maximum!", "Finish politely: [[Merci, au revoir !]]"],
    items: [
      { type: "mcq", q: "Your friend likes cinema. You ask:", options: ["Vous avez un magazine de cinéma ?", "Vous aimez le cinéma ?", "Le cinéma est fermé ?"], answer: 0 },
      { type: "mcq", q: "You want to know the price:", options: ["Il coûte combien ?", "Il est où ?", "Il est quel numéro ?"], answer: 0 },
      { type: "mcq", q: "You decide to buy the magazine:", options: ["Je le prends.", "Je lui prends.", "Je prends lui."], answer: 0 },
      { type: "mcq", q: "Magazine 6 € + newspaper 2,50 € + magazine 9 €. Can you buy them all with 20 €?", options: ["Oui : ça fait 17,50 €.", "Non : ça fait 21 €.", "Non : ça fait 25 €."], answer: 0 },
      { type: "mcq", q: "Your friend likes economics. You ask:", options: ["Vous avez un journal avec une rubrique économie ?", "L'économie, c'est combien ?", "Je suis économie."], answer: 0 },
      { type: "mcq", q: "You don't understand the price. You say:", options: ["Pardon, vous pouvez répéter, s'il vous plaît ?", "C'est faux !", "Je ne suis pas d'accord."], answer: 0 }
    ]
  },
  detente: {
    title: "Le jeu des clichés",
    intro: "A humorous French song quoted in the book plays with clichés about the French: food, elegance, love of complaining, strikes. Which clichés are these?",
    items: [
      { type: "mcq", q: "« Les Français mangent des grenouilles et des escargots. » C'est un cliché sur…", options: ["la gastronomie", "le travail", "la mode"], answer: 0 },
      { type: "mcq", q: "« Les Français portent un béret et sont très chics. » C'est un cliché sur…", options: ["l'élégance", "le sport", "la politique"], answer: 0 },
      { type: "mcq", q: "Un Français « râleur », c'est quelqu'un qui…", options: ["se plaint souvent", "chante souvent", "mange beaucoup"], answer: 0 },
      { type: "mcq", q: "Être « chauvin », c'est…", options: ["penser que son pays est le meilleur", "parler plusieurs langues", "aimer la campagne"], answer: 0 },
      { type: "mcq", q: "« Avoir un appétit d'oiseau », c'est manger…", options: ["peu", "beaucoup", "des graines"], answer: 0 },
      { type: "mcq", q: "Qui chante aussi en français ?", options: ["les Québécois, les Belges, les Suisses, les Sénégalais…", "seulement les Parisiens", "personne"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "board", caption: "🌍 La soirée polyglotte · tap a line", title: "SOIRÉE POLYGLOTTE", sub: "tous les mardis à 20 h · au café", rows: [["Qui ?", "tout le monde, débutants bienvenus !", "Tout le monde peut venir. Les débutants sont les bienvenus !"], ["Comment ?", "un badge avec votre prénom et vos langues", "À votre arrivée, on vous donne un badge avec votre prénom et vos langues."], ["Où parler ?", "des drapeaux indiquent la langue de chaque table", "Des drapeaux indiquent la langue de chaque table."], ["Pourquoi ?", "pratiquer, progresser, rencontrer des gens", "Pour pratiquer, progresser et rencontrer des gens du monde entier."]], foot: "Un(e) polyglotte = une personne qui parle plusieurs langues." }
  ],
  culture: [
    { icon: "🎶", kind: "Civilisation", t: "Les Français en chanson", d: "The book's civilisation page uses a humorous song in which a Frenchman lists the clichés about himself: frogs' legs and snails, the beret and elegance, being <i>râleur</i> (a complainer), strikes… and then sings with his French-speaking friends from Québec, Belgium, Switzerland and Senegal." },
    { icon: "📖", kind: "Au fait !", t: "Un roman sans e", d: "In <i>La Disparition</i> (1969), Georges Perec wrote a whole novel without a single letter <b>e</b>, the most common letter in French!" },
    { icon: "🗣️", kind: "Francophonie", t: "Apprendre le français en francophonie", d: "Host families, exchange programmes, language-exchange evenings… You can practise French in France, but also in Québec, Belgium, Switzerland, Senegal, Morocco and many other French-speaking places." },
    { icon: "📰", kind: "Civilisation", t: "Le kiosque à journaux", d: "The green Paris <b>kiosques</b> have sold newspapers and magazines since the 19th century. French readers love magazines: news, culture, cooking, gardening, sport, TV…" },
    { icon: "🔮", kind: "Au fait !", t: "L'horoscope", d: "Many French magazines have a weekly <b>horoscope</b>: a perfect text to review the tenses (past, present, futur proche, imperative)!" },
    { icon: "⭐", kind: "Langue", t: "Francophile ou francophone ?", d: "A <b>francophone</b> speaks French. A <b>francophile</b> loves France and its culture: like the international stars who give interviews in French." }
  ],
  tips: [
    { icon: "🎯", t: "me, te, nous, vous: no choice to make", d: "They're the same for COD and COI. Only the 3rd person changes: le / la / les ≠ lui / leur." },
    { icon: "⏳", t: "il y a ≠ dans", d: "[[il y a deux ans]] = two years ago. [[dans deux ans]] = two years from now." },
    { icon: "🔇", t: "Drop the e", d: "In everyday speech: [[je ne sais pas]] → j'n'sais pas, [[samedi]] → sam'di." }
  ],
  mistakes: [
    ["J'ai du mal de parler.", "J'ai du mal à parler.", "avoir du mal à"],
    ["Il parle à moi.", "Il me parle.", "pronoun before the verb"],
    ["Je les parle.", "Je leur parle.", "parler à → COI leur"],
    ["Je lui lis. (le journal)", "Je le lis.", "lire quelque chose → COD"],
    ["Je suis d'accord avec toi pas.", "Je ne suis pas d'accord avec toi.", "ne … pas around the verb"],
    ["Je pars il y a deux semaines.", "Je pars dans deux semaines.", "future → dans"],
    ["J'ai vécu en France depuis 1998 à 2012.", "J'ai vécu en France de 1998 à 2012.", "de … à"],
    ["Invites des amis !", "Invite des amis !", "-er verbs: no s in the tu imperative"]
  ]
});
