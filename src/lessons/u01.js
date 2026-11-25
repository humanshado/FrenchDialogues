// Unité 1 · Et vous ? (book pp. 19–32)
// Situations: faire connaissance dans un train · rencontrer des francophones · échanger ses coordonnées
// Grammar: adjectifs de nationalité · le, la, l', les · à / au / en / aux + villes et pays · la négation · avoir, s'appeler, être
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u01", rubrique: 1, num: 1,
  title: "And you?",
  titleFr: "Et vous ?",
  pages: "Book pp. 19–32",
  opener: { fr: "Vous êtes français ? Non, je suis suédois, et vous ?", en: "Are you French? No, I'm Swedish, and you?" },
  hero: { scene: "train", people: { "Julia": "f5", "Oskar": "m6", "Daniela": "f4", "Adelina": "k2" } },
  situations: [
    ["🚄", "Présentations dans le TGV", "name, nationality, age: [[Je m'appelle Oskar, je suis suédois, j'ai 52 ans.]]"],
    ["🎾", "Qu'est-ce que vous aimez ?", "hobbies with [[le]], [[la]], [[l']], [[les]]: [[J'aime la danse et le cinéma.]]"],
    ["🌍", "Les volontaires de la Francophonie", "where you live and were born: [[J'habite au Niger.]] [[Je suis née en Haïti.]]"],
    ["📱", "C'est quoi, ton numéro ?", "phone numbers and e-mail addresses, numbers up to 100"]
  ],
  goals: [
    "Introduce yourself: name, nationality, age: [[Je suis italienne, j'ai 43 ans.]]",
    "Ask someone about themselves: [[Vous êtes anglais ?]] · [[Tu as quel âge ?]]",
    "Make nationalities agree: [[il est italien]] / [[elle est italienne]]",
    "Talk about what you like with [[le]], [[la]], [[l']], [[les]]: [[J'aime le tennis et la lecture.]]",
    "Say where you live and were born: [[à Paris]], [[au Mexique]], [[en Belgique]], [[aux Comores]]",
    "Say what is <i>not</i> true: [[Je ne suis pas français.]] · [[Je n'aime pas le sport.]]",
    "Give your phone number and e-mail, and count up to 100"
  ],
  glance: [
    ["🗣️", "Communication", "introducing yourself and others, personal information, contact details"],
    ["🧩", "Grammaire", "nationality adjectives · definite articles · prepositions with towns and countries · negation · être, avoir, s'appeler"],
    ["🗂️", "Vocabulaire", "people · hobbies · countries and nationalities · identity · numbers 32–100"],
    ["🔊", "Phonétique", "saying a sentence without pauses · rhythm groups and the stress on the last syllable"],
    ["⭐", "The phrase to learn first", "[[Je m'appelle…, je suis…, j'ai… ans. Et vous ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Introductions on the TGV", titleFr: "Présentations dans le TGV",
      note: "Four passengers going to Paris start talking. Listen for three pieces of information: <b>name</b>, <b>nationality</b>, <b>age</b>.",
      scene: "train", people: { "Julia": "f5", "Oskar": "m6", "Daniela": "f4", "Adelina": "k2" },
      lines: [
        ["Oskar", "Pardon, madame, c'est la place 34 ?", "Excuse me, is this seat 34?"],
        ["Julia", "Oui, c'est ici. Vous êtes français ?", "Yes, it's here. Are you French?"],
        ["Oskar", "Non, je ne suis pas français, je suis suédois. Je m'appelle Oskar. Et vous ?", "No, I'm not French, I'm Swedish. My name is Oskar. And you?"],
        ["Julia", "Moi, c'est Julia. Je suis italienne, de Naples.", "I'm Julia. I'm Italian, from Naples."],
        ["Daniela", "Bonjour ! Moi, je m'appelle Daniela, je suis mexicaine. Et voici ma fille, Adelina.", "Hello! My name's Daniela, I'm Mexican. And this is my daughter, Adelina."],
        ["Adelina", "Bonjour ! J'ai huit ans !", "Hello! I'm eight!"],
        ["Julia", "Huit ans ! Bravo ! Tu parles très bien français !", "Eight! Well done! You speak French very well!"],
        ["Adelina", "Oui, j'habite à Lyon avec maman. Et toi, tu as quel âge ?", "Yes, I live in Lyon with Mum. And how old are you?"],
        ["Daniela", "Adelina ! On dit « vous » ! Excusez-la, madame.", "Adelina! We say “vous”! Excuse her."],
        ["Julia", "Ce n'est pas grave ! J'ai quarante-trois ans. Et monsieur, il a… cinquante ans ?", "It doesn't matter! I'm forty-three. And this gentleman is… fifty?"],
        ["Oskar", "Cinquante-deux ! Mais chut, c'est un secret !", "Fifty-two! But shh, it's a secret!"]
      ],
      glossary: [["Vous êtes français ?", "are you French?"], ["Je ne suis pas…", "I'm not…"], ["Voici ma fille.", "this is my daughter"], ["Tu as quel âge ?", "how old are you?"]]
    },
    {
      id: "d2", n: 2, title: "French speakers in London", titleFr: "Les francophones de Londres · Qu'est-ce que vous aimez ?",
      note: "Sara and Daniel meet at the London French speakers' club. Notice the article before each hobby: [[le cinéma]], [[la natation]], [[l'athlétisme]].",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m3", "Sara": "f3", "Daniel": "m1" }, sit: ["Sara"],
      lines: [
        ["Daniel", "Salut ! Tu es nouvelle au club ? Moi, c'est Daniel.", "Hi! Are you new at the club? I'm Daniel."],
        ["Sara", "Salut Daniel ! Oui, je m'appelle Sara. Je suis suisse, de Genève. Et toi, tu es français ?", "Hi Daniel! Yes, I'm Sara. I'm Swiss, from Geneva. And you, are you French?"],
        ["Daniel", "Non, je suis canadien, de Montréal. J'ai vingt-quatre ans, je suis étudiant ici.", "No, I'm Canadian, from Montreal. I'm twenty-four, I'm a student here."],
        ["Sara", "Et qu'est-ce que tu aimes ?", "And what do you like?"],
        ["Daniel", "J'aime le cinéma, surtout les films d'action, et la musique. Et toi ?", "I like cinema, especially action films, and music. What about you?"],
        ["Sara", "Moi, j'aime le tennis et la natation. J'aime aussi la peinture.", "I like tennis and swimming. I also like painting."],
        ["Daniel", "Et l'athlétisme ? Il y a une équipe au club !", "And athletics? There's a team at the club!"],
        ["Sara", "Ah non, je n'aime pas l'athlétisme. Mais la danse, oui !", "Oh no, I don't like athletics. But dance, yes!"],
        ["Le serveur", "Bonjour ! Qu'est-ce que vous prenez ?", "Hello! What will you have?"],
        ["Sara", "Deux cafés, s'il vous plaît !", "Two coffees, please!"]
      ],
      glossary: [["Qu'est-ce que tu aimes ?", "what do you like?"], ["surtout", "especially"], ["la natation", "swimming"], ["la peinture", "painting"]]
    },
    {
      id: "d3", n: 3, title: "A meeting of Francophonie volunteers", titleFr: "Rencontre de volontaires · J'habite au Niger",
      note: "Léonie runs a meeting of international volunteers. Everyone says where they live, where they were born and which languages they speak. Listen for [[à]], [[au]], [[en]], [[aux]].",
      scene: "classe", staff: "Léonie", people: { "Léonie": "f1", "Abel": "m3", "Maria": "f8", "Lien": "f7" },
      lines: [
        ["Léonie", "Bonjour à tous et bienvenue ! On fait un tour de table. Abel, tu commences ?", "Hello everyone and welcome! Let's go round the table. Abel, will you start?"],
        ["Abel", "Bonjour ! Je m'appelle Abel, j'ai vingt-neuf ans. Je suis né à Lomé, au Togo, et j'habite au Niger, à Niamey.", "Hello! My name's Abel, I'm twenty-nine. I was born in Lomé, in Togo, and I live in Niger, in Niamey."],
        ["Léonie", "Et tu parles quelles langues ?", "And which languages do you speak?"],
        ["Abel", "Je parle français, anglais et éwé.", "I speak French, English and Ewe."],
        ["Maria", "Moi, c'est Maria. Je suis née en Haïti, à Port-au-Prince, mais je vis aux Comores. Je parle français, créole et espagnol.", "I'm Maria. I was born in Haiti, in Port-au-Prince, but I live in the Comoros. I speak French, Creole and Spanish."],
        ["Lien", "Et moi, je m'appelle Lien. Je suis vietnamienne, je suis née au Vietnam, à Hanoï. J'habite en Belgique, à Bruxelles.", "And I'm Lien. I'm Vietnamese, I was born in Vietnam, in Hanoi. I live in Belgium, in Brussels."],
        ["Léonie", "Merci ! Et toi, Lien, tu parles flamand ?", "Thank you! And Lien, do you speak Flemish?"],
        ["Lien", "Non, je ne parle pas flamand ! Je parle vietnamien, français et un peu anglais.", "No, I don't speak Flemish! I speak Vietnamese, French and a bit of English."]
      ],
      glossary: [["un tour de table", "going round the table"], ["Je suis né(e) à…", "I was born in…"], ["Je vis aux Comores.", "I live in the Comoros."], ["un peu", "a little"]]
    },
    {
      id: "d4", n: 4, title: "What's your number?", titleFr: "C'est quoi, ton numéro ?",
      note: "After the meeting, Abel and Maria exchange contact details. French phone numbers are read in <b>pairs</b>: <i>06 12 75 98 33</i> = <i>zéro six, douze, soixante-quinze…</i> In an e-mail, <b>@</b> is [[arobase]] and <b>.</b> is [[point]].",
      scene: "ville", people: { "Abel": "m3", "Maria": "f8" }, phone: ["Maria"],
      lines: [
        ["Abel", "Maria, on reste en contact ? C'est quoi, ton numéro ?", "Maria, shall we stay in touch? What's your number?"],
        ["Maria", "Mon portable, c'est le 06 12 75 98 33.", "My mobile is 06 12 75 98 33."],
        ["Abel", "Zéro six, douze, soixante-quinze, quatre-vingt-dix-huit, trente-trois. C'est ça ?", "Zero six, twelve, seventy-five, ninety-eight, thirty-three. Is that right?"],
        ["Maria", "Oui, c'est ça ! Et toi, tu as un numéro en France ?", "Yes, that's it! And do you have a French number?"],
        ["Abel", "Non, je n'ai pas de numéro français. Mon numéro, c'est le +227 90 81 74 66.", "No, I don't have a French number. My number is +227 90 81 74 66."],
        ["Maria", "Plus deux cent vingt-sept… C'est l'indicatif du Niger ?", "Plus two two seven… Is that the code for Niger?"],
        ["Abel", "Exactement. Et ton adresse mail ?", "Exactly. And your e-mail address?"],
        ["Maria", "C'est maria.lopes@edito.fr : maria, point, lopes, arobase, edito, point, f, r.", "It's maria.lopes@edito.fr: maria, dot, lopes, at, edito, dot, f, r."],
        ["Abel", "Super, merci ! À bientôt, Maria !", "Great, thanks! See you soon, Maria!"]
      ],
      glossary: [["le portable", "the mobile phone"], ["l'indicatif", "the country code"], ["l'adresse mail", "the e-mail address"], ["arobase", "@ (at)"]]
    }
  ],

  vocab: [
    { t: "un homme", en: "a man", pic: "👨", cat: "Les personnes", g: "m", pr: "un-NOM (liaison)" },
    { t: "une femme", en: "a woman; a wife", pic: "👩", cat: "Les personnes", g: "f", pr: "FAM (like 'femme' = fam)" },
    { t: "un garçon", en: "a boy", pic: "👦", cat: "Les personnes", g: "m" },
    { t: "une fille", en: "a girl; a daughter", pic: "👧", cat: "Les personnes", g: "f", pr: "FEE-y" },
    { t: "un enfant", en: "a child", pic: "🧒", cat: "Les personnes", g: "m" },
    { t: "le cinéma", en: "cinema, films", pic: "🎬", cat: "Les loisirs", g: "m" },
    { t: "la musique", en: "music", pic: "🎵", cat: "Les loisirs", g: "f" },
    { t: "la danse", en: "dance", pic: "💃", cat: "Les loisirs", g: "f" },
    { t: "la natation", en: "swimming", pic: "🏊", cat: "Les loisirs", g: "f" },
    { t: "le tennis", en: "tennis", pic: "🎾", cat: "Les loisirs", g: "m", pr: "te-NEESS" },
    { t: "la lecture", en: "reading", pic: "📖", cat: "Les loisirs", g: "f" },
    { t: "la peinture", en: "painting", pic: "🎨", cat: "Les loisirs", g: "f" },
    { t: "l'athlétisme", en: "athletics", pic: "🏃", cat: "Les loisirs", g: "m" },
    { t: "l'escalade", en: "climbing", pic: "🧗", cat: "Les loisirs", g: "f" },
    { t: "la boxe", en: "boxing", pic: "🥊", cat: "Les loisirs", g: "f" },
    { t: "le basket", en: "basketball", pic: "🏀", cat: "Les loisirs", g: "m" },
    { t: "le football", en: "football, soccer", pic: "⚽", cat: "Les loisirs", g: "m", pr: "le foot" },
    { t: "les films", en: "films, movies", pic: "🎞️", cat: "Les loisirs", g: "pl" },
    { t: "les livres", en: "books", pic: "📚", cat: "Les loisirs", g: "pl" },
    { t: "les disques", en: "records, albums", pic: "💿", cat: "Les loisirs", g: "pl" },
    { t: "les émissions", en: "(TV / radio) programmes", pic: "📻", cat: "Les loisirs", g: "pl" },
    { t: "aimer", en: "to like, to love", pic: "❤️", cat: "Les verbes" },
    { t: "parler", en: "to speak", pic: "🗣️", cat: "Les verbes" },
    { t: "habiter", en: "to live (somewhere)", pic: "🏠", cat: "Les verbes", note: "[[J'habite à Lyon.]]" },
    { t: "vivre", en: "to live", pic: "🌱", cat: "Les verbes", note: "[[Je vis à Mexico.]]" },
    { t: "être né(e)", en: "to be born", pic: "👶", cat: "Les verbes", note: "[[Je suis née à Toronto.]]" },
    { t: "venir de", en: "to come from", pic: "🧳", cat: "Les verbes", note: "[[Je viens de Moroni.]]" },
    { t: "la France · français(e)", en: "France · French", pic: "🇫🇷", cat: "Pays et nationalités" },
    { t: "la Belgique · belge", en: "Belgium · Belgian", pic: "🇧🇪", cat: "Pays et nationalités" },
    { t: "la Suisse · suisse", en: "Switzerland · Swiss", pic: "🇨🇭", cat: "Pays et nationalités" },
    { t: "le Canada · canadien(ne)", en: "Canada · Canadian", pic: "🇨🇦", cat: "Pays et nationalités" },
    { t: "l'Italie · italien(ne)", en: "Italy · Italian", pic: "🇮🇹", cat: "Pays et nationalités" },
    { t: "l'Espagne · espagnol(e)", en: "Spain · Spanish", pic: "🇪🇸", cat: "Pays et nationalités" },
    { t: "l'Allemagne · allemand(e)", en: "Germany · German", pic: "🇩🇪", cat: "Pays et nationalités" },
    { t: "le Mexique · mexicain(e)", en: "Mexico · Mexican", pic: "🇲🇽", cat: "Pays et nationalités" },
    { t: "le Brésil · brésilien(ne)", en: "Brazil · Brazilian", pic: "🇧🇷", cat: "Pays et nationalités" },
    { t: "la Chine · chinois(e)", en: "China · Chinese", pic: "🇨🇳", cat: "Pays et nationalités" },
    { t: "la Russie · russe", en: "Russia · Russian", pic: "🇷🇺", cat: "Pays et nationalités" },
    { t: "le Sénégal · sénégalais(e)", en: "Senegal · Senegalese", pic: "🇸🇳", cat: "Pays et nationalités" },
    { t: "le Maroc · marocain(e)", en: "Morocco · Moroccan", pic: "🇲🇦", cat: "Pays et nationalités" },
    { t: "les États-Unis · américain(e)", en: "the USA · American", pic: "🇺🇸", cat: "Pays et nationalités" },
    { t: "les Comores · comorien(ne)", en: "the Comoros · Comorian", pic: "🏝️", cat: "Pays et nationalités" },
    { t: "le Vietnam · vietnamien(ne)", en: "Vietnam · Vietnamese", pic: "🇻🇳", cat: "Pays et nationalités" },
    { t: "la Suède · suédois(e)", en: "Sweden · Swedish", pic: "🇸🇪", cat: "Pays et nationalités" },
    { t: "le nom", en: "surname", pic: "📛", cat: "L'identité", g: "m" },
    { t: "le prénom", en: "first name", pic: "🪪", cat: "L'identité", g: "m" },
    { t: "la date de naissance", en: "date of birth", pic: "🎂", cat: "L'identité", g: "f" },
    { t: "le lieu de naissance", en: "place of birth", pic: "📍", cat: "L'identité", g: "m" },
    { t: "la nationalité", en: "nationality", pic: "🏳️", cat: "L'identité", g: "f" },
    { t: "l'âge", en: "age", pic: "🔢", cat: "L'identité", g: "m" },
    { t: "la profession", en: "occupation, job", pic: "💼", cat: "L'identité", g: "f" },
    { t: "la carte d'identité", en: "identity card", pic: "🪪", cat: "L'identité", g: "f" },
    { t: "le numéro de téléphone", en: "phone number", pic: "☎️", cat: "Les coordonnées", g: "m" },
    { t: "le portable", en: "mobile phone", pic: "📱", cat: "Les coordonnées", g: "m" },
    { t: "le téléphone fixe", en: "landline", pic: "☎️", cat: "Les coordonnées", g: "m" },
    { t: "l'indicatif du pays", en: "country code (+33)", pic: "➕", cat: "Les coordonnées", g: "m" },
    { t: "l'adresse mail", en: "e-mail address (= le mail, le courriel)", pic: "📧", cat: "Les coordonnées", g: "f" },
    { t: "arobase", en: "@ (at)", pic: "＠", cat: "Les coordonnées", noDict: true },
    { t: "un avocat, une avocate", en: "a lawyer", pic: "⚖️", cat: "Les professions" },
    { t: "un / une architecte", en: "an architect", pic: "📐", cat: "Les professions" },
    { t: "un / une médecin", en: "a doctor", pic: "🩺", cat: "Les professions" },
    { t: "un / une pilote", en: "a pilot", pic: "✈️", cat: "Les professions" },
    { t: "un chanteur, une chanteuse", en: "a singer", pic: "🎤", cat: "Les professions" },
    { t: "un acteur, une actrice", en: "an actor, an actress", pic: "🎭", cat: "Les professions" },
    { t: "un écrivain, une écrivaine", en: "a writer", pic: "✒️", cat: "Les professions" },
    { t: "un / une journaliste", en: "a journalist", pic: "📰", cat: "Les professions" },
    { t: "un étudiant, une étudiante", en: "a student", pic: "🎓", cat: "Les professions" }
  ],

  grammar: [
    {
      id: "g-etre",
      title: "Three key verbs: [[être]], [[avoir]], [[s'appeler]]",
      body: [
        "To introduce yourself you need three verbs. [[être]] (to be) for nationality and job: [[Je suis italienne.]] [[avoir]] (to have) for age: [[J'ai 43 ans.]] And [[s'appeler]] for your name: [[Je m'appelle Julia.]]",
        "⚠️ Age uses <b>avoir</b>, not <i>être</i>: French says <i>I have 43 years</i>. And don't forget the word [[ans]]: [[J'ai vingt ans.]] To ask: [[Vous avez quel âge ?]] · [[Tu as quel âge ?]]"
      ],
      info: [
        { type: "conj", title: "🔁 The three verbs of introductions (tap a form, then 🎯 Quiz me)", verbs: [
          { inf: "être", en: "to be", forms: ["je suis", "tu es", "il / elle est", "nous sommes", "vous êtes", "ils / elles sont"] },
          { inf: "avoir", en: "to have", forms: ["j'ai", "tu as", "il / elle a", "nous avons", "vous avez", "ils / elles ont"] },
          { inf: "s'appeler", en: "to be called", forms: ["je m'app|elle", "tu t'app|elles", "il / elle s'app|elle", "nous nous app|elons", "vous vous app|elez", "ils / elles s'app|ellent"] }
        ], note: "Listen to the liaison: [[vous_êtes]] = <i>vou-z-êtes</i>, [[nous avons]] = <i>nou-z-avons</i>, [[ils ont]] = <i>il-z-ont</i> (but [[ils sont]] with an <b>s</b> sound!)." },
        { type: "form", caption: "🪪 One person, three verbs", style: "badge", title: "TGV · VOITURE 12 · PLACE 34", photo: "m6", fields: [["Je m'appelle", "Oskar Lindqvist", "Je m'appelle Oskar Lindqvist."], ["Je suis", "suédois", "Je suis suédois."], ["J'ai", "52 ans", "J'ai cinquante-deux ans."], ["Je parle", "suédois, anglais, français", "Je parle suédois, anglais et français."]] }
      ]
    },
    {
      id: "g-nat",
      title: "Nationalities: [[il est italien]] · [[elle est italienne]]",
      body: [
        "A nationality is an adjective: it <b>agrees</b> with the person. For a woman, add <b>-e</b>: [[français]] → [[française]], [[allemand]] → [[allemande]], [[mexicain]] → [[mexicaine]].",
        "Adjectives ending in <b>-ien</b> or <b>-éen</b> double the n: [[italien]] → [[italienne]], [[coréen]] → [[coréenne]]. Adjectives already ending in <b>-e</b> don't change: [[russe]], [[belge]], [[suisse]]. One special one: [[grec]] → [[grecque]].",
        "No capital letter for the adjective: [[Elle est française.]] (but <i>les Français</i> = the French people, with a capital)."
      ],
      info: [
        { type: "gender", title: "🎨 One nationality, two forms", cols: [
          { g: "m", badge: "il est…", head: "Masculin", items: ["français", "allemand", "mexicain", "italien", "canadien", "russe", "suisse"], note: "Final consonant <b>silent</b>: franç<s>ai</s>s, alleman<s>d</s>." },
          { g: "f", badge: "elle est…", head: "Féminin", items: ["français|e", "allemand|e", "mexicain|e", "italien|ne", "canadien|ne", "russe", "suisse"], note: "With <b>-e</b> you now <b>hear</b> the consonant: françai<b>s</b>e [z], allеman<b>d</b>e [d], and -ienne loses its nasal sound." }
        ] },
        { type: "flags", title: "🌍 Tap a flag · nationality (masculine / feminine)", items: [
          { c: "fr", country: "la France", nat: "français · française", say: "français, française" }, { c: "it", country: "l'Italie", nat: "italien · italienne", say: "italien, italienne" },
          { c: "de", country: "l'Allemagne", nat: "allemand · allemande", say: "allemand, allemande" }, { c: "es", country: "l'Espagne", nat: "espagnol · espagnole", say: "espagnol, espagnole" },
          { c: "mx", country: "le Mexique", nat: "mexicain · mexicaine", say: "mexicain, mexicaine" }, { c: "br", country: "le Brésil", nat: "brésilien · brésilienne", say: "brésilien, brésilienne" },
          { c: "ca", country: "le Canada", nat: "canadien · canadienne", say: "canadien, canadienne" }, { c: "se", country: "la Suède", nat: "suédois · suédoise", say: "suédois, suédoise" },
          { c: "ru", country: "la Russie", nat: "russe · russe", say: "russe" }, { c: "ch", country: "la Suisse", nat: "suisse · suisse", say: "suisse" },
          { c: "be", country: "la Belgique", nat: "belge · belge", say: "belge" }, { c: "sn", country: "le Sénégal", nat: "sénégalais · sénégalaise", say: "sénégalais, sénégalaise" },
          { c: "ma", country: "le Maroc", nat: "marocain · marocaine", say: "marocain, marocaine" }, { c: "cn", country: "la Chine", nat: "chinois · chinoise", say: "chinois, chinoise" },
          { c: "kr", country: "la Corée", nat: "coréen · coréenne", say: "coréen, coréenne" }, { c: "gr", country: "la Grèce", nat: "grec · grecque", say: "grec, grecque" }
        ] }
      ],
      widget: [
        { type: "combo", label: "Il ou elle ? · build the sentence",
          rows: [{ k: "il", label: "👨 il" }, { k: "elle", label: "👩 elle" }, { k: "ils", label: "👨‍👨 ils" }, { k: "elles", label: "👩‍👩 elles" }],
          cols: [{ k: "it", label: "🇮🇹 Italie" }, { k: "mx", label: "🇲🇽 Mexique" }, { k: "fr", label: "🇫🇷 France" }, { k: "be", label: "🇧🇪 Belgique" }],
          out: {
            "il|it": ["Il est italien.", "He's Italian."], "elle|it": ["Elle est italienne.", "She's Italian.", "-ien → -ienne"], "ils|it": ["Ils sont italiens.", "They're Italian.", "plural: + s (silent)"], "elles|it": ["Elles sont italiennes.", "They're Italian (f)."],
            "il|mx": ["Il est mexicain.", "He's Mexican."], "elle|mx": ["Elle est mexicaine.", "She's Mexican.", "+ e: you now hear the n"], "ils|mx": ["Ils sont mexicains.", "They're Mexican."], "elles|mx": ["Elles sont mexicaines.", "They're Mexican (f)."],
            "il|fr": ["Il est français.", "He's French.", "final s silent"], "elle|fr": ["Elle est française.", "She's French.", "+ e: the s sounds like z"], "ils|fr": ["Ils sont français.", "They're French.", "-s already: no change"], "elles|fr": ["Elles sont françaises.", "They're French (f)."],
            "il|be": ["Il est belge.", "He's Belgian."], "elle|be": ["Elle est belge.", "She's Belgian.", "ends in -e: no change"], "ils|be": ["Ils sont belges.", "They're Belgian."], "elles|be": ["Elles sont belges.", "They're Belgian (f)."]
          } },
        { type: "sort", label: "Listen: is the feminine pronounced differently? Tap a word to hear it",
          cols: [{ k: "same", label: "🔊 = same sound", color: "#2f8a4f" }, { k: "diff", label: "🔊 ≠ different sound", color: "#e0474f" }],
          items: [
            { t: "russe / russe", k: "same", say: "russe, russe" }, { t: "espagnol / espagnole", k: "same", say: "espagnol, espagnole" }, { t: "belge / belge", k: "same", say: "belge, belge" },
            { t: "français / française", k: "diff", say: "français, française" }, { t: "italien / italienne", k: "diff", say: "italien, italienne" }, { t: "allemand / allemande", k: "diff", say: "allemand, allemande" },
            { t: "suisse / suisse", k: "same", say: "suisse, suisse" }, { t: "chinois / chinoise", k: "diff", say: "chinois, chinoise" }, { t: "coréen / coréenne", k: "diff", say: "coréen, coréenne" }
          ] }
      ]
    },
    {
      id: "g-articles",
      title: "Talking about what you like: [[le]], [[la]], [[l']], [[les]]",
      body: [
        "After [[aimer]], [[adorer]], [[détester]], French always uses <b>the</b> (the definite article), because you talk about something <i>in general</i>: [[J'aime le tennis.]] = I like tennis. [[J'aime les films d'action.]] = I like action films.",
        "[[le]] for masculine, [[la]] for feminine, [[les]] for plural. Before a vowel or a silent h, <b>le</b> and <b>la</b> become [[l']]: [[l'athlétisme]], [[l'escalade]].",
        "Countries also take an article: [[la France]], [[le Mexique]], [[l'Italie]], [[les États-Unis]]. Countries ending in <b>-e</b> are usually feminine ([[la Chine]]), except [[le Mexique]], [[le Mozambique]], [[le Cambodge]], [[le Zimbabwe]]. Countries ending in <b>-s</b> are plural: [[les Pays-Bas]]."
      ],
      info: [
        { type: "gender", title: "🎾 Les loisirs · the article tells you the gender", cols: [
          { g: "m", badge: "le · l'", head: "Masculin", items: ["le tennis", "le cinéma", "le basket", "l'athlétisme", "le Brésil", "le Mexique"] },
          { g: "f", badge: "la · l'", head: "Féminin", items: ["la danse", "la musique", "la natation", "l'escalade", "la France", "l'Italie"] },
          { g: "pl", badge: "les", head: "Pluriel", items: ["les films", "les livres", "les disques", "les émissions", "les États-Unis", "les Comores"], note: "Liaison: [[les_émissions]] = <i>lé-z-émissions</i>." }
        ] },
        { type: "pics", title: "🖼️ Les loisirs · picture dictionary", from: ["Les loisirs"] }
      ],
      widget: {
        type: "sort", label: "le, la, l' or les? Sort the hobbies and countries",
        cols: [{ k: "le", label: "le", color: "var(--m)" }, { k: "la", label: "la", color: "var(--f)" }, { k: "l", label: "l'", color: "#e0a526" }, { k: "les", label: "les", color: "var(--pl)" }],
        items: [
          { t: "tennis", k: "le", pic: "🎾", say: "le tennis" }, { t: "danse", k: "la", pic: "💃", say: "la danse" }, { t: "escalade", k: "l", pic: "🧗", say: "l'escalade" }, { t: "livres", k: "les", pic: "📚", say: "les livres" },
          { t: "Chine", k: "la", pic: "🇨🇳", say: "la Chine" }, { t: "Mexique", k: "le", pic: "🇲🇽", say: "le Mexique" }, { t: "Italie", k: "l", pic: "🇮🇹", say: "l'Italie" }, { t: "États-Unis", k: "les", pic: "🇺🇸", say: "les États-Unis" },
          { t: "boxe", k: "la", pic: "🥊", say: "la boxe" }, { t: "basket", k: "le", pic: "🏀", say: "le basket" }, { t: "athlétisme", k: "l", pic: "🏃", say: "l'athlétisme" }, { t: "Comores", k: "les", pic: "🏝️", say: "les Comores" }
        ]
      }
    },
    {
      id: "g-prep",
      title: "Where you live: [[à Paris]] · [[au Sénégal]] · [[en Belgique]] · [[aux Pays-Bas]]",
      body: [
        "With [[j'habite]], [[je vis]], [[je suis né(e)]], [[je travaille]], the little word before a place depends on what it is:",
        "<b>à</b> + a town: [[à Toulouse]], [[à Dakar]] · <b>au</b> + a masculine country: [[au Sénégal]], [[au Canada]] · <b>en</b> + a feminine country or a country starting with a vowel: [[en France]], [[en Iran]] · <b>aux</b> + a plural country: [[aux États-Unis]], [[aux Comores]].",
        "<b>au</b> is <b>à + le</b> fused together, and <b>aux</b> is <b>à + les</b>: le Mexique → [[au Mexique]]."
      ],
      info: [
        { type: "merge", title: "⚗️ Why au and aux? à + the article", rows: [
          { a: "à", b: "Paris", g: "x", r: "à Paris", ex: "J'habite à Paris.", en: "a town: no article", no: true },
          { a: "à", b: "le", g: "m", r: "au", ex: "Je vis au Canada.", en: "le Canada" },
          { a: "à", b: "la", g: "f", r: "en", ex: "J'habite en Belgique.", en: "la Belgique → en", no: true },
          { a: "à", b: "l'", g: "x", r: "en", ex: "Je suis née en Italie.", en: "l'Italie (vowel) → en", no: true },
          { a: "à", b: "les", g: "pl", r: "aux", ex: "Je travaille aux États-Unis.", en: "les États-Unis" }
        ], note: "Liaison with <b>aux</b> + vowel: [[aux États-Unis]] = <i>o-z-États-Unis</i>. And with <b>en</b>: [[en Italie]] = <i>an-n-Italie</i>." },
        { type: "flags", title: "📍 Tap a flag · J'habite…", items: [
          { c: "fr", country: "la France", prep: "en France", g: "f", say: "J'habite en France." }, { c: "be", country: "la Belgique", prep: "en Belgique", g: "f", say: "J'habite en Belgique." },
          { c: "it", country: "l'Italie", prep: "en Italie", g: "v", say: "J'habite en Italie." }, { c: "ht", country: "Haïti", prep: "en Haïti", g: "v", say: "Je suis née en Haïti." },
          { c: "ca", country: "le Canada", prep: "au Canada", g: "m", say: "J'habite au Canada." }, { c: "sn", country: "le Sénégal", prep: "au Sénégal", g: "m", say: "J'habite au Sénégal." },
          { c: "mx", country: "le Mexique", prep: "au Mexique", g: "m", say: "Je vis au Mexique." }, { c: "ne", country: "le Niger", prep: "au Niger", g: "m", say: "J'habite au Niger." },
          { c: "us", country: "les États-Unis", prep: "aux États-Unis", g: "pl", say: "Je travaille aux États-Unis." }, { c: "km", country: "les Comores", prep: "aux Comores", g: "pl", say: "Je vis aux Comores." },
          { c: "nl", country: "les Pays-Bas", prep: "aux Pays-Bas", g: "pl", say: "Je suis né aux Pays-Bas." }, { c: "pe", country: "Lima (ville)", prep: "à Lima", say: "J'habite à Lima." }
        ], note: "Colours: <span class='g-m'>masculine → au</span> · <span class='g-f'>feminine → en</span> · <b style='color:#b5791d'>vowel → en</b> · <span class='g-pl'>plural → aux</span>." }
      ],
      widget: {
        type: "sort", label: "à, au, en or aux? Sort the places",
        cols: [{ k: "a", label: "à (ville)", color: "#5b6b7c" }, { k: "au", label: "au", color: "var(--m)" }, { k: "en", label: "en", color: "var(--f)" }, { k: "aux", label: "aux", color: "var(--pl)" }],
        items: [
          { t: "Pérou", k: "au", pic: "🇵🇪", say: "au Pérou" }, { t: "Lima", k: "a", pic: "🏙️", say: "à Lima" }, { t: "Pays-Bas", k: "aux", pic: "🇳🇱", say: "aux Pays-Bas" }, { t: "Toronto", k: "a", pic: "🏙️", say: "à Toronto" },
          { t: "Uruguay", k: "en", pic: "🇺🇾", say: "en Uruguay" }, { t: "Italie", k: "en", pic: "🇮🇹", say: "en Italie" }, { t: "Brésil", k: "au", pic: "🇧🇷", say: "au Brésil" }, { t: "Pologne", k: "en", pic: "🇵🇱", say: "en Pologne" },
          { t: "Bamako", k: "a", pic: "🏙️", say: "à Bamako" }, { t: "Maroc", k: "au", pic: "🇲🇦", say: "au Maroc" }, { t: "États-Unis", k: "aux", pic: "🇺🇸", say: "aux États-Unis" }, { t: "Roumanie", k: "en", pic: "🇷🇴", say: "en Roumanie" }
        ]
      },
      after: ["⚠️ <b>Uruguay</b> is masculine but starts with a vowel, so it's [[en Uruguay]] (same for [[en Iran]], [[en Angola]])."]
    },
    {
      id: "g-neg",
      title: "Saying no: [[ne]] + verb + [[pas]]",
      body: [
        "The French negative has <b>two parts</b> that sit around the verb like bread around a sandwich filling: [[Je ne suis pas italien.]] · [[Il ne parle pas chinois.]]",
        "Before a vowel or a silent h, <b>ne</b> becomes <b>n'</b>: [[Je n'aime pas le sport.]] · [[Elle n'habite pas à Paris.]]",
        "After a negative, <b>un / une / des</b> become <b>de</b> (or <b>d'</b>): [[J'ai un portable.]] → [[Je n'ai pas de portable.]] In casual speech the <i>ne</i> often disappears ([[Je sais pas !]]) but always write it."
      ],
      info: { type: "pattern", title: "🥪 The negative sandwich", rows: [
        ["Je", { opts: ["ne", "n'"] }, { opts: ["suis", "aime", "habite", "parle"] }, "pas", { opts: ["français.", "le sport.", "à Paris.", "chinois."] }],
        ["Tu", "n'", "as", "pas", "de", { opts: ["portable ?", "numéro français ?", "adresse mail ?"] }]
      ], note: "The <b>pas</b> always comes straight after the conjugated verb. Tap the parts to hear them." },
      widget: {
        type: "combo", label: "Make it negative · pick a sentence",
        rows: [{ k: "pos", label: "✅ affirmative" }, { k: "neg", label: "❌ negative" }],
        cols: [{ k: "it", label: "italien" }, { k: "aime", label: "le sport" }, { k: "hab", label: "à Paris" }, { k: "num", label: "un numéro" }, { k: "be", label: "belges" }],
        out: {
          "pos|it": ["Je suis italien.", "I'm Italian."], "neg|it": ["Je ne suis pas italien.", "I'm not Italian.", "ne + suis + pas"],
          "pos|aime": ["J'aime le sport.", "I like sport."], "neg|aime": ["Je n'aime pas le sport.", "I don't like sport.", "ne → n' before a vowel"],
          "pos|hab": ["J'habite à Paris.", "I live in Paris."], "neg|hab": ["Je n'habite pas à Paris.", "I don't live in Paris.", "n' + habite (silent h)"],
          "pos|num": ["Paul a le numéro de Marie.", "Paul has Marie's number."], "neg|num": ["Paul n'a pas le numéro de Marie.", "Paul doesn't have Marie's number.", "le stays le (only un/une/des change)"],
          "pos|be": ["Nous sommes belges.", "We're Belgian."], "neg|be": ["Nous ne sommes pas belges.", "We're not Belgian."]
        }
      }
    },
    {
      id: "g-nombres",
      title: "Numbers from 32 to 100: French maths!",
      body: [
        "Up to 69 it's regular: [[trente-deux]], [[quarante]], [[cinquante et un]], [[soixante-neuf]].",
        "Then French counts in twenties. <b>70</b> = 60 + 10: [[soixante-dix]], 71 = [[soixante et onze]], 79 = [[soixante-dix-neuf]]. <b>80</b> = 4 × 20: [[quatre-vingts]] (with an <b>s</b>), 81 = [[quatre-vingt-un]] (no <i>et</i>, no <i>s</i>). <b>90</b> = 4 × 20 + 10: [[quatre-vingt-dix]], 99 = [[quatre-vingt-dix-neuf]]. 100 = [[cent]].",
        "In Belgium and Switzerland it's simpler: <b>septante</b> (70), <b>nonante</b> (90), and in parts of Switzerland <b>huitante</b> (80)."
      ],
      info: [
        { type: "numbers", title: "🔢 Tap a number · the tricky ones are highlighted", list: [32, 40, 41, 50, 51, 60, 61, 69, 70, 71, 72, 77, 79, 80, 81, 85, 90, 91, 95, 99, 100], hl: [70, 71, 80, 81, 90, 91], math: { 70: "60 + 10", 71: "60 + 11", 72: "60 + 12", 77: "60 + 17", 79: "60 + 19", 80: "4 × 20", 81: "4 × 20 + 1", 85: "4 × 20 + 5", 90: "4 × 20 + 10", 91: "4 × 20 + 11", 95: "4 × 20 + 15", 99: "4 × 20 + 19" } },
        { type: "form", caption: "📇 Contact details · tap each line to hear how it's read", style: "fiche", title: "COORDONNÉES · MARIA LOPES", photo: "f8", fields: [["Portable", "06 12 75 98 33", "zéro six, douze, soixante-quinze, quatre-vingt-dix-huit, trente-trois"], ["Fixe", "01 47 80 91 22", "zéro un, quarante-sept, quatre-vingts, quatre-vingt-onze, vingt-deux"], ["Indicatif", "+33 (France)", "plus trente-trois"], ["Mail", "maria.lopes@edito.fr", "maria, point, lopes, arobase, edito, point, f, r"]], note: "French phone numbers have 10 digits, read in <b>pairs</b>. Mobile numbers start with <b>06</b> or <b>07</b>." }
      ],
      widget: { type: "numbers", min: 32, max: 100, label: "Numbers 32–100 · hear it, read it, write it" }
    }
  ],

  expressions: [
    { fn: "Pour se présenter", fnEn: "introducing yourself", icon: "🙋", items: [
      ["Je m'appelle Patrick. / Moi, c'est Patrick.", "My name is Patrick. / I'm Patrick.", "std", true],
      ["Je suis anglais. J'ai 23 ans.", "I'm English. I'm 23.", "std", true],
      ["Je suis étudiant(e) / architecte.", "I'm a student / an architect.", "std"]
    ] },
    { fn: "Pour demander à quelqu'un de se présenter", fnEn: "asking questions", icon: "❓", items: [
      ["Comment vous vous appelez ? / Comment tu t'appelles ?", "What's your name?", "std", true],
      ["Vous êtes anglais(e) ? / Tu es anglais(e) ?", "Are you English?", "std", true],
      ["Vous avez quel âge ? / Tu as quel âge ?", "How old are you?", "std", true],
      ["Qu'est-ce que vous aimez ?", "What do you like?", "std"]
    ], reply: ["Oui.", "Non, je suis français(e).", "J'ai 30 ans."] },
    { fn: "Pour présenter quelqu'un", fnEn: "introducing someone", icon: "👉", items: [
      ["Voici Pauline !", "This is Pauline!", "std", true],
      ["Voilà mon ami Théo.", "Here's my friend Théo.", "std"],
      ["Il s'appelle Boris, il est russe.", "His name is Boris, he's Russian.", "std"]
    ] },
    { fn: "Pour donner des informations personnelles", fnEn: "where you live, languages", icon: "🌍", items: [
      ["J'habite aux Comores.", "I live in the Comoros.", "std", true],
      ["Je vis à Mexico.", "I live in Mexico City.", "std"],
      ["Je viens de Moroni.", "I come from Moroni.", "std"],
      ["Je suis né(e) à Toronto.", "I was born in Toronto.", "std", true],
      ["Je parle français et anglais.", "I speak French and English.", "std", true]
    ] },
    { fn: "Pour demander et donner des coordonnées", fnEn: "phone and e-mail", icon: "📱", items: [
      ["Quel est ton numéro ? / Ton numéro, c'est quoi ?", "What's your number?", "fam", true],
      ["Mon numéro, c'est le 06 12 75 98 33.", "My number is…", "std", true],
      ["Ton adresse mail, c'est quoi ?", "What's your e-mail?", "fam"],
      ["Tu as mon mail ?", "Do you have my e-mail?", "fam"],
      ["Quelle est votre adresse mail ?", "What is your e-mail address?", "poli"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · getting to know someone", lanes: ["Julia", "Oskar"], av: ["f5", "m6"], steps: [
    { s: 0, fr: "Bonjour ! Vous êtes français ?", en: "Hello! Are you French?" },
    { s: 1, fr: "Non, je suis suédois. Je m'appelle Oskar. Et vous ?", en: "No, I'm Swedish. I'm Oskar. And you?" },
    { s: 0, fr: "Moi, c'est Julia. Je suis italienne.", en: "I'm Julia. I'm Italian." },
    { s: 1, fr: "Vous habitez en Italie ?", en: "Do you live in Italy?" },
    { s: 0, fr: "Non, j'habite à Lyon. Et vous ?", en: "No, I live in Lyon. And you?" },
    { s: 1, fr: "J'habite à Stockholm. Je parle un peu français !", en: "I live in Stockholm. I speak a little French!" },
    { s: 0, fr: "On reste en contact ? C'est quoi, votre mail ?", en: "Shall we stay in touch? What's your e-mail?", alt: ["Quel est votre numéro ?"] }
  ] },

  sounds: {
    intro: "Two big secrets of French rhythm: you <b>don't pause between words</b> (they flow together), and the stress always falls on the <b>last syllable</b> of each rhythm group.",
    letters: [
      { l: "———", name: "one sentence = one long word", tip: "Say [[Je m'appelle Francesco.]] as if it were a single word: <i>jemapelfrancesco</i>. No pause between <i>je</i>, <i>m'appelle</i> and the name.", ex: ["Je m'appelle Francesco.", "Je suis italienne.", "J'ai trente ans."] },
      { l: "/ … ˈ", name: "rhythm groups + final stress", tip: "A longer sentence is cut into <b>groupes rythmiques</b> (one per piece of information). Each group is stressed on its <b>last syllable</b>, a little longer: <i>Je m'appelle Arthur / je suis journaliste / j'habite en Russie.</i>", ex: ["Je m'appelle Arthur, je suis journaliste.", "Hans est allemand, il a quarante ans, il aime le tennis.", "J'habite en Pologne, je parle anglais."] },
      { l: "z", name: "liaison [z]", tip: "A silent s links to the next vowel as a <b>z</b>: [[vous_êtes]], [[nous avons]], [[les États-Unis]], [[ils ont]].", ex: ["vous êtes", "nous avons", "ils ont", "les enfants"] },
      { l: "-ien / -ienne", name: "[jɛ̃] / [jɛn]", tip: "Masculine <b>-ien</b> is nasal (no n sound): [[italien]]. Feminine <b>-ienne</b> is not nasal and you hear the <b>n</b>: [[italienne]].", ex: ["italien", "italienne", "canadien", "canadienne"] }
    ],
    pairs: [
      { a: ["ils ont", "they have"], b: ["ils sont", "they are"], note: "[z] liaison / [s]" },
      { a: ["italien", "Italian (m)"], b: ["italienne", "Italian (f)"], note: "nasal / n heard" },
      { a: ["français", "French (m)"], b: ["française", "French (f)"], note: "silent s / [z]" },
      { a: ["allemand", "German (m)"], b: ["allemande", "German (f)"], note: "silent d / [d]" },
      { a: ["soixante", "sixty"], b: ["soixante-dix", "seventy"], note: "60 / 70" },
      { a: ["quatre-vingts", "eighty"], b: ["quatre-vingt-dix", "ninety"], note: "80 / 90" }
    ]
  },
  classify: {
    label: "⚥ Il ou elle ?", q: "You hear a nationality. Is it about a man, a woman, or can't you tell?",
    options: ["un homme (il)", "une femme (elle)", "on ne sait pas (same sound)"],
    items: [
      { say: "française", a: 1 }, { say: "allemand", a: 0 }, { say: "russe", a: 2 }, { say: "italienne", a: 1 }, { say: "canadien", a: 0 },
      { say: "belge", a: 2 }, { say: "mexicaine", a: 1 }, { say: "chinois", a: 0 }, { say: "espagnol", a: 2, en: "espagnol and espagnole sound the same" }, { say: "suisse", a: 2 }, { say: "sénégalaise", a: 1 }, { say: "marocain", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Oskar est français.", ok: false, explain: "[[Je ne suis pas français, je suis suédois.]]" },
    { type: "tf", tag: "Dialogue 1", s: "Julia a quarante-trois ans.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Adelina est la fille de Daniela.", ok: true, explain: "[[Voici ma fille, Adelina.]]" },
    { type: "tf", tag: "Dialogue 2", s: "Sara est canadienne.", ok: false, explain: "Sara est suisse; Daniel est canadien." },
    { type: "tf", tag: "Dialogue 2", s: "Sara n'aime pas l'athlétisme.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Abel habite au Togo.", ok: false, explain: "He was born in Togo; he lives [[au Niger]]." },
    { type: "tf", tag: "Dialogue 3", s: "Lien habite en Belgique.", ok: true, explain: "[[J'habite en Belgique, à Bruxelles.]]" },
    { type: "tf", tag: "Dialogue 4", s: "Abel a un numéro français.", ok: false, explain: "[[Je n'ai pas de numéro français.]]" },
    { type: "fill", tag: "Nationalités", sentence: "Elle est ___ .", options: ["indien", "indiene", "indienne"], answer: 2, explain: "-ien → [[indienne]]" },
    { type: "fill", tag: "Nationalités", sentence: "Tu es ___, Paula ?", options: ["coréen", "coréenne", "coréene"], answer: 1, explain: "Paula is a woman: [[coréenne]]" },
    { type: "fill", tag: "Nationalités", sentence: "Angela est ___ .", options: ["allemand", "allemande", "allemanne"], answer: 1, explain: "[[allemande]]" },
    { type: "fill", tag: "Nationalités", sentence: "Madame Mukete est ___ .", options: ["sénégalais", "sénégalaise", "sénégalaisse"], answer: 1, explain: "[[sénégalaise]]" },
    { type: "fill", tag: "Nationalités", sentence: "Tao est un garçon ___ .", options: ["chinois", "chinoise", "chinoisse"], answer: 0, explain: "a boy: masculine [[chinois]]" },
    { type: "fill", tag: "Être / avoir", sentence: "J'___ trente ans.", options: ["ai", "suis", "a"], answer: 0, explain: "Age = [[avoir]]: [[J'ai trente ans.]]" },
    { type: "fill", tag: "Être / avoir", sentence: "Vous ___ quel âge ?", options: ["êtes", "avez", "avons"], answer: 1 },
    { type: "fill", tag: "Être / avoir", sentence: "Nous ___ brésiliens.", options: ["avons", "sommes", "sont"], answer: 1 },
    { type: "fill", tag: "le, la, l', les", sentence: "J'aime ___ escalade et ___ boxe.", options: ["l' … la", "le … la", "la … le"], answer: 0, explain: "[[l'escalade]], [[la boxe]]" },
    { type: "fill", tag: "le, la, l', les", sentence: "Julia aime ___ basket.", options: ["la", "le", "les"], answer: 1 },
    { type: "fill", tag: "le, la, l', les", sentence: "Tu aimes ___ France ?", options: ["le", "la", "l'"], answer: 1 },
    { type: "fill", tag: "le, la, l', les", sentence: "J'aime ___ Comores, ___ Brésil et ___ Chine.", options: ["les … le … la", "la … le … la", "les … la … le"], answer: 0 },
    { type: "fill", tag: "à / au / en / aux", sentence: "J'habite ___ Pérou, à Lima.", options: ["à", "au", "en", "aux"], answer: 1 },
    { type: "fill", tag: "à / au / en / aux", sentence: "Je suis né à Amsterdam, ___ Pays-Bas.", options: ["au", "en", "aux"], answer: 2 },
    { type: "fill", tag: "à / au / en / aux", sentence: "Vous habitez ___ Toronto ?", options: ["à", "au", "en"], answer: 0 },
    { type: "fill", tag: "à / au / en / aux", sentence: "Tu es née ___ Italie ?", options: ["au", "en", "à"], answer: 1 },
    { type: "fill", tag: "à / au / en / aux", sentence: "Je suis suisse et j'habite ___ Pologne.", options: ["au", "en", "aux"], answer: 1 },
    { type: "type", tag: "La négation", q: "Make it negative: « J'aime le sport. »", answers: ["Je n'aime pas le sport.", "Je n'aime pas le sport"], explain: "ne → n' before a vowel." },
    { type: "type", tag: "La négation", q: "Make it negative: « Elle est chanteuse. »", answers: ["Elle n'est pas chanteuse.", "Elle n'est pas chanteuse"] },
    { type: "type", tag: "La négation", q: "Make it negative: « Je vis à Hong-Kong. »", answers: ["Je ne vis pas à Hong-Kong.", "Je ne vis pas à Hong Kong."] },
    { type: "order", tag: "La négation", en: "I don't like music.", words: ["Je", "n'", "aime", "pas", "la", "musique."] },
    { type: "order", tag: "La négation", en: "You don't speak Chinese.", words: ["Tu", "ne", "parles", "pas", "chinois."] },
    { type: "listen", tag: "Les nombres", q: "How old is she?", say: "Elle a soixante-dix-huit ans.", options: ["68", "78", "98"], answer: 1 },
    { type: "listen", tag: "Les nombres", q: "Which number do you hear?", say: "quatre-vingt-quinze", options: ["75", "85", "95"], answer: 2 },
    { type: "listen", tag: "Les nombres", q: "Which phone number do you hear?", say: "zéro six, quarante-quatre, quatre-vingts, soixante et onze, douze", options: ["06 44 80 71 12", "06 44 20 61 12", "06 24 80 71 02"], answer: 0 },
    { type: "type", tag: "Les nombres", q: "Write 71 in words.", answers: ["soixante et onze", "soixante-et-onze"], explain: "60 + 11 = [[soixante et onze]]" },
    { type: "mcq", tag: "Coordonnées", q: "How do you read “@” in an e-mail address?", options: ["arobase", "à", "point"], answer: 0, sayAnswer: true },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous avez quel âge ?", options: ["J'ai trente-cinq ans.", "Je suis trente-cinq ans.", "Je m'appelle trente-cinq."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu es anglaise ?", options: ["Non, je suis irlandaise.", "Non, j'ai irlandaise.", "Oui, j'habite anglaise."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce que tu aimes ?", options: ["J'aime la lecture et le cinéma.", "J'ai la lecture.", "Je suis le cinéma."], answer: 0 }
  ],

  roleplays: [
    { title: "🚄 Dans le train", brief: "You're on the TGV to Paris. Your neighbour starts a conversation. Give your name, nationality, age and city (invent if you like!).", memo: ["Je m'appelle…", "Je suis…", "J'ai… ans", "J'habite à…"], partner: "f5", you: "m1",
      turns: [
        { them: "Bonjour ! Vous êtes français ?", themEn: "Hello! Are you French?", hint: "Say no, and give your nationality.", you: "Bonjour ! Non, je ne suis pas français, je suis anglais.", youEn: "Hello! No, I'm not French, I'm English." },
        { them: "Ah ! Et comment vous vous appelez ?", themEn: "Ah! And what's your name?", hint: "Say your name and ask hers (polite).", you: "Je m'appelle Tom. Et vous ?", youEn: "My name's Tom. And you?" },
        { them: "Moi, c'est Julia. Vous habitez à Paris ?", themEn: "I'm Julia. Do you live in Paris?", hint: "Say where you live: [[à]] + town.", you: "Non, j'habite à Londres.", youEn: "No, I live in London." },
        { them: "Et vous avez quel âge ? Vingt-cinq ans ?", themEn: "And how old are you? 25?", hint: "Give your age with [[avoir]].", you: "Non, j'ai trente et un ans !", youEn: "No, I'm 31!" }
      ] },
    { title: "🌍 Réunion des volontaires", brief: "You're at a Francophonie volunteers' meeting. Léonie asks you to introduce yourself: where you were born, where you live, which languages you speak.", memo: ["Je suis né(e) à… / au… / en…", "J'habite…", "Je parle…"], partner: "f1", you: "m3",
      turns: [
        { them: "Bienvenue ! Vous pouvez vous présenter ?", themEn: "Welcome! Can you introduce yourself?", hint: "Name and age.", you: "Bonjour ! Je m'appelle Kofi, j'ai vingt-six ans.", youEn: "Hello! I'm Kofi, I'm 26." },
        { them: "Vous êtes né où ?", themEn: "Where were you born?", hint: "Born in a town and a country (e.g. Accra, le Ghana).", you: "Je suis né à Accra, au Ghana.", youEn: "I was born in Accra, in Ghana." },
        { them: "Et vous habitez où maintenant ?", themEn: "And where do you live now?", hint: "Live in a feminine country (e.g. la France).", you: "J'habite en France, à Marseille.", youEn: "I live in France, in Marseille." },
        { them: "Vous parlez quelles langues ?", themEn: "Which languages do you speak?", hint: "List two or three languages.", you: "Je parle anglais, twi et français.", youEn: "I speak English, Twi and French." }
      ] },
    { title: "📱 On reste en contact ?", brief: "Exchange phone numbers and e-mails with a new friend. Read numbers in pairs!", memo: ["06 …", "arobase", "point"], partner: "f8", you: "m3",
      turns: [
        { them: "C'est quoi, ton numéro ?", themEn: "What's your number?", hint: "Give a mobile number: 07 81 92 64 15.", you: "C'est le 07 81 92 64 15.", youEn: "It's 07 81 92 64 15." },
        { them: "Et ton adresse mail ?", themEn: "And your e-mail?", hint: "Spell it with [[arobase]] and [[point]]: kofi.mensah@mail.com", you: "C'est kofi point mensah arobase mail point com.", youEn: "It's kofi.mensah@mail.com." },
        { them: "Super ! Moi, c'est le 06 70 18 99 03.", themEn: "Great! Mine is 06 70 18 99 03.", hint: "Repeat it in pairs to check.", you: "Zéro six, soixante-dix, dix-huit, quatre-vingt-dix-neuf, zéro trois. C'est ça ?", youEn: "06 70 18 99 03. Is that right?" }
      ] }
  ],

  ateliers: [
    { title: "Réaliser une fiche d'identité", intro: "In small groups, make the identity card of a French-speaking celebrity (an artist, an actor, an athlete…) and present it.",
      steps: [["Préparation", ["Choose a celebrity and find a few facts about them.", "Collect: name, nationality, profession, date and place of birth, city, languages."]], ["Réalisation", ["Write the card on a sheet (or a slide), with a photo.", "Use the words from the <b>Vocabulaire</b> tab: [[nationalité]], [[profession]], [[né(e) à]]…"]], ["Présentation", ["Show the card. Your classmates ask: [[Comment il s'appelle ?]] [[Il a quel âge ?]] [[Il parle anglais ?]]", "Put all the cards on the classroom wall."]]],
      phrases: ["Il / Elle s'appelle…", "Il / Elle est belge.", "Il / Elle est né(e) à…", "Il / Elle habite à…"],
      model: { type: "form", style: "id", title: "FICHE D'IDENTITÉ", flag: "be", photo: "m7", fields: [["Nom d'artiste", "Stromae", "Stromae"], ["Nationalité", "belge", "belge"], ["Profession", "chanteur", "chanteur"], ["Date de naissance", "12 mars 1985", "le douze mars mille neuf cent quatre-vingt-cinq"], ["Né à", "Etterbeek (Belgique)", "né à Etterbeek, en Belgique"], ["Habite à", "Bruxelles", "Il habite à Bruxelles."], ["Langues", "français, néerlandais", "Il parle français et néerlandais."]] } },
    { title: "Faire une vidéo de présentation", tech: true, intro: "Record a short video to introduce yourself on a social network (Instagram, TikTok…).",
      steps: [["Préparation", ["Prepare three parts: <b>greet</b>, <b>introduce yourself</b> (name, nationality, age, city, languages, what you like), <b>end</b> the video.", "Practise the rhythm: a short pause between groups, stress on the last syllable."]], ["Réalisation", ["Film it with your phone: 30 seconds maximum.", "Add subtitles in French if you can."]], ["Présentation", ["Show the videos in class.", "Vote for the best one: [[J'aime la vidéo de…]]"]]],
      phrases: ["Salut tout le monde !", "Je m'appelle…, j'ai… ans.", "J'adore…", "Bisous, à bientôt !"] }
  ],
  delf: {
    skill: "Production écrite", title: "Complétez une fiche de renseignements",
    about: "In the DELF A1 written exam, the first exercise is often a form to fill in. Here you are <b>Lucia Romero</b>. Read her card, then fill in the registration form for the volunteers' meeting, one box at a time.",
    tips: ["Read every heading on the form before you write.", "Nationality agrees: Lucia is a woman → <b>espagnole</b>.", "Dates: day + month + year, e.g. <i>14/07/1995</i> or <i>14 juillet 1995</i>.", "Check capital letters on names, and no capitals on nationalities."],
    docs: [{ type: "form", style: "web", title: "PROFIL · LUCIA ROMERO", photo: "f5", flag: "es", fields: [["Ville", "née à Séville le 3 mai 1996"], ["Habite à", "Montpellier, depuis 2022"], ["Langues", "espagnol, anglais, français"], ["Travail", "infirmière"], ["Contact", "lucia.romero@mail.es · 06 58 71 30 94"]] }],
    items: [
      { type: "type", q: "VOLONTARIAT · Nom : ___", answers: ["Romero", "ROMERO"] },
      { type: "type", q: "VOLONTARIAT · Nationalité : ___", answers: ["espagnole"], explain: "A woman: espagnol → [[espagnole]]." },
      { type: "type", q: "VOLONTARIAT · Âge (en chiffres) : ___ (in 2026)", answers: ["30", "30 ans"] },
      { type: "type", q: "VOLONTARIAT · Pays où elle habite : ___", answers: ["la France", "France", "en France"] },
      { type: "type", q: "VOLONTARIAT · Lieu de naissance : ___", answers: ["Séville", "Séville, Espagne", "Séville (Espagne)", "à Séville"] },
      { type: "mcq", q: "Profession :", options: ["infirmière", "infirmier", "étudiante"], answer: 0 },
      { type: "mcq", q: "Which sentence is correct for Lucia?", options: ["Je suis née en Espagne et j'habite en France.", "Je suis né au Espagne et j'habite à France.", "Je suis née à Espagne et j'habite au France."], answer: 0, sayAnswer: true },
      { type: "listen", q: "Lucia reads her phone number. Which one is it?", say: "zéro six, cinquante-huit, soixante et onze, trente, quatre-vingt-quatorze", options: ["06 58 71 30 94", "06 48 61 30 84", "06 58 71 13 94"], answer: 0 }
    ]
  },
  detente: {
    title: "Trouvez la célébrité !",
    intro: "Read the clues and guess the French-speaking celebrity. (They are all real people.)",
    items: [
      { type: "mcq", q: "Il est belge, il est chanteur, il est né en 1985 à Etterbeek. C'est…", options: ["Stromae", "Xavier Dolan", "Teddy Riner"], answer: 0 },
      { type: "mcq", q: "Elle est franco-argentine, elle est actrice, elle est née à Buenos Aires en 1976. C'est…", options: ["Bérénice Bejo", "Fatou Diome", "Zaz"], answer: 0 },
      { type: "mcq", q: "Elle est sénégalaise, elle est écrivaine, elle est née à Niodior en 1968. C'est…", options: ["Mariam Doumbia", "Fatou Diome", "Charline Vanhoenacker"], answer: 1 },
      { type: "mcq", q: "Il est français, il est sportif (judo), il est né à Pointe-à-Pitre en 1989. C'est…", options: ["Teddy Riner", "Stromae", "Tahar Ben Jelloun"], answer: 0 },
      { type: "mcq", q: "Il est québécois, il est réalisateur et acteur. Son film : « Mommy ». C'est…", options: ["Xavier Dolan", "Philippe Geluck", "Youssou N'Dour"], answer: 0 },
      { type: "mcq", q: "Il est marocain, il est écrivain. Son livre : « La Nuit sacrée ». C'est…", options: ["Tahar Ben Jelloun", "Xavier Dolan", "Stromae"], answer: 0 },
      { type: "mcq", q: "Elle est malienne, elle est chanteuse (avec Amadou). Un disque : « Dimanche à Bamako ». C'est…", options: ["Mariam Doumbia", "Fatou Diome", "Bérénice Bejo"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🌐 Le français dans le monde (OIF, chiffres cités par le livre pour 2014)", unit: " M", items: [
      { fr: "personnes parlent français", en: "French speakers worldwide", v: 274, pic: "🗣️" },
      { fr: "personnes apprennent le français", en: "learners of French as a foreign language", v: 49, pic: "📚" },
      { fr: "pays membres de l'OIF (environ)", en: "countries in the OIF (approx.)", v: 54, pic: "🌍" }
    ], note: "Numbers in millions, except the last line (countries). The OIF has grown since: check its website for today's figures." }
  ],
  culture: [
    { icon: "🎬", kind: "Civilisation", t: "Vive les artistes francophones !", d: "French is spoken by artists all over the world: the Québécois film-maker <b>Xavier Dolan</b> (<i>Mommy</i>), the Moroccan writer <b>Tahar Ben Jelloun</b> (<i>La Nuit sacrée</i>), the Malian singer <b>Mariam Doumbia</b> (<i>Dimanche à Bamako</i>, with Amadou), the Belgian journalist <b>Charline Vanhoenacker</b> (radio show <i>Si tu écoutes, j'annule tout</i>)." },
    { icon: "🗣️", kind: "Oh, le cliché !", t: "« Les Français parlent… français. »", d: "It's true that the French are not champions of foreign languages, and when they speak English, Spanish or German they often keep a strong French accent! But more and more young people study abroad and speak two or three languages. And in your country?" },
    { icon: "🌍", kind: "Francophonie", t: "L'OIF", d: "The <b>Organisation internationale de la Francophonie</b> brings together dozens of countries where French is used. French is an official language in Canada, Belgium, Switzerland, Mali, Senegal and many more." },
    { icon: "🤝", kind: "Francophonie", t: "Le Volontariat international de la Francophonie", d: "Young French speakers aged <b>21 to 34</b> can do voluntary work for a year in another French-speaking country: education, health, environment, culture…" },
    { icon: "🔢", kind: "Francophonie", t: "[[septante]], [[nonante]], [[huitante]]", d: "In Belgium and Switzerland: <b>septante</b> = 70, <b>nonante</b> = 90. In some Swiss cantons, <b>huitante</b> = 80. Much easier than <i>quatre-vingt-dix-neuf</i>!" },
    { icon: "📧", kind: "Au fait !", t: "[[mail]] or [[courriel]]?", d: "The official French word is <b>courriel</b> (very common in Québec). In France people usually just say <b>un mail</b>." },
    { icon: "🪪", kind: "Civilisation", t: "La carte d'identité", d: "French citizens have a <b>carte nationale d'identité</b> with their <i>nom, prénom(s), sexe, date et lieu de naissance</i> and nationality. You'll often be asked for a <i>pièce d'identité</i> (ID)." }
  ],
  tips: [
    { icon: "🧮", t: "Learn the numbers by the twenties", d: "Think of 70–99 as two blocks: <b>60 + 10…19</b> and <b>4 × 20 + 0…19</b>. Practise with phone numbers: read every number you see in pairs." },
    { icon: "🎨", t: "Countries have genders too", d: "Learn them with their article: [[la France]], [[le Brésil]]. Then the preposition is automatic: la → en, le → au, les → aux." },
    { icon: "🥪", t: "The negative sandwich", d: "Visualise <b>ne</b> and <b>pas</b> as two slices of bread around the verb: [[Je ne parle pas chinois.]]" }
  ],
  mistakes: [
    ["Je suis 30 ans.", "J'ai 30 ans.", "age = avoir"],
    ["Elle est italien.", "Elle est italienne.", "agreement"],
    ["Je suis Français.", "Je suis français.", "no capital for the adjective"],
    ["J'aime tennis.", "J'aime le tennis.", "article needed"],
    ["J'habite à France.", "J'habite en France.", "en + feminine country"],
    ["J'habite en Canada.", "J'habite au Canada.", "au + masculine country"],
    ["Je ne aime pas…", "Je n'aime pas…", "n' before a vowel"],
    ["Je n'ai pas un portable.", "Je n'ai pas de portable.", "un → de after a negative"]
  ]
});
