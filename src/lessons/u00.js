// Unité 0 · Bienvenue ! (book pp. 12–18)
// Sections: C'est en français ! · Salut, ça va ? · L'alphabet · Je m'appelle… · Un, deux, trois… partez ! · Aujourd'hui, c'est le… · Dans la classe
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u00", rubrique: 1, num: 0,
  title: "Welcome!",
  titleFr: "Bienvenue !",
  pages: "Book pp. 12–18",
  opener: { fr: "Bonjour ! Vous parlez français ? Mais oui, un peu !", en: "Hello! Do you speak French? Yes, a little!" },
  hero: { scene: "classe", staff: "La professeure", people: { "La professeure": "f3", "Enzo": "m5", "Ana": "f4", "Hugo": "m7" }, wave: ["La professeure"] },
  situations: [
    ["🇫🇷", "C'est en français !", "French words you already know: [[un café]], [[un restaurant]], [[la télévision]]…"],
    ["👋", "Salut, ça va ?", "greet people, say goodbye, [[tu]] or [[vous]], la bise"],
    ["🔤", "L'alphabet · Je m'appelle…", "say your name and spell it: [[Comment ça s'écrit ?]]"],
    ["🔢", "Un, deux, trois… partez !", "numbers 0 to 31"],
    ["📅", "Aujourd'hui, c'est le…", "days, months, seasons and the date"],
    ["🏫", "Dans la classe", "[[Je ne comprends pas.]] [[Vous pouvez répéter ?]]"]
  ],
  goals: [
    "Greet people and say goodbye: [[Bonjour !]], [[Salut !]], [[Au revoir !]], [[À bientôt !]]",
    "Ask how someone is: [[Ça va ?]] · [[Vous allez bien ?]] · [[Tu vas bien ?]]",
    "Choose between [[tu]] and [[vous]], and between a handshake and [[la bise]]",
    "Say your name, ask someone's name and spell it: [[Je m'appelle…]] · [[Comment ça s'écrit ?]]",
    "Count from 0 to 31 and say the date: [[Aujourd'hui, c'est le premier mars.]]",
    "Survive in class: [[Je ne comprends pas.]] · [[Comment on dit… en français ?]]"
  ],
  glance: [
    ["🗣️", "Communication", "greeting, introducing yourself, spelling, counting, the date, classroom French"],
    ["🧩", "Grammaire", "subject pronouns (je, tu, il, elle…) and stressed pronouns (moi, toi…) · tu / vous"],
    ["🗂️", "Vocabulaire", "greetings · the alphabet · numbers 0–31 · days, months, seasons · the classroom"],
    ["⭐", "The phrase to learn first", "[[Bonjour, je m'appelle… Et vous ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "In the street: a polite hello", titleFr: "Dans la rue · Bonjour, madame !",
      note: "Two neighbours who don't know each other well use [[vous]] and [[madame]] / [[monsieur]]. They shake hands.",
      scene: "rue", people: { "Monsieur Delage": "m4", "Madame Dupuis": "f6" }, wave: ["Monsieur Delage"],
      lines: [
        ["Monsieur Delage", "Bonjour, madame Dupuis !", "Hello, Mrs Dupuis!"],
        ["Madame Dupuis", "Ah, bonjour, monsieur Delage. Vous allez bien ?", "Oh, hello, Mr Delage. Are you well?"],
        ["Monsieur Delage", "Très bien, merci. Et vous ?", "Very well, thank you. And you?"],
        ["Madame Dupuis", "Bien, merci. Il fait beau aujourd'hui !", "Fine, thanks. It's a lovely day today!"],
        ["Monsieur Delage", "Oui ! Bonne journée, madame.", "Yes! Have a nice day."],
        ["Madame Dupuis", "Merci, vous aussi. Au revoir, monsieur.", "Thank you, you too. Goodbye."]
      ],
      glossary: [["Vous allez bien ?", "are you well? (polite)"], ["Très bien, merci.", "very well, thanks"], ["Et vous ?", "and you?"], ["Bonne journée !", "have a nice day!"]]
    },
    {
      id: "d2", n: 2, title: "Two friends meet", titleFr: "Entre amies · Salut, ça va ?",
      note: "Manon and Alice are friends: they say [[salut]], use [[tu]] and give each other [[la bise]] (a kiss on each cheek).",
      scene: "ville", people: { "Manon": "f1", "Alice": "f8" }, wave: ["Manon"],
      lines: [
        ["Manon", "Salut Alice ! Tu vas bien ?", "Hi Alice! Are you OK?"],
        ["Alice", "Salut Manon ! Oui, ça va, et toi ?", "Hi Manon! Yes, I'm fine, and you?"],
        ["Manon", "Ça va, ça va. Je vais au cours de français !", "Fine, fine. I'm off to my French class!"],
        ["Alice", "Super ! Moi, je vais au travail. À plus !", "Great! I'm off to work. See you!"],
        ["Manon", "À plus ! Bonne journée !", "See you! Have a good day!"]
      ],
      glossary: [["Salut !", "hi! / bye! (casual)"], ["Tu vas bien ?", "are you OK? (casual)"], ["Ça va.", "I'm fine."], ["À plus !", "see you! (casual)"]]
    },
    {
      id: "d3", n: 3, title: "At home in the morning", titleFr: "À la maison · Bonne journée, les enfants !",
      note: "In the family everyone says [[tu]]. Listen to the different ways of saying goodbye: [[À ce soir !]] · [[Bonne journée !]]",
      scene: "maison", people: { "Maman": "f5", "Léo": "k1", "Lou": "k2" },
      lines: [
        ["Maman", "Allez, les enfants, c'est l'heure de l'école !", "Come on, kids, it's time for school!"],
        ["Léo", "Oui, maman ! Au revoir !", "Yes, Mum! Bye!"],
        ["Maman", "Bonne journée, les enfants ! Bonne journée, mon chéri !", "Have a good day, kids! Have a good day, darling!"],
        ["Lou", "Merci, maman. À ce soir !", "Thanks, Mum. See you tonight!"],
        ["Maman", "À ce soir, ma puce. Bisous !", "See you tonight, sweetie. Kisses!"]
      ],
      glossary: [["À ce soir !", "see you this evening!"], ["les enfants", "the children"], ["Bisous !", "kisses! (family, friends)"]]
    },
    {
      id: "d4", n: 4, title: "First day of class: names", titleFr: "Dans la classe · Je m'appelle…",
      note: "The teacher asks the students' names and how to spell them. Listen to [[deux L]] for a double letter.",
      scene: "classe", staff: "La professeure", people: { "La professeure": "f3", "Enzo": "m5", "Ana": "f4" },
      lines: [
        ["La professeure", "Bonjour à tous ! Je m'appelle Sophie Leroy. Je suis votre professeure de français.", "Hello everyone! My name is Sophie Leroy. I'm your French teacher."],
        ["Enzo", "Bonjour, madame !", "Hello, madam!"],
        ["La professeure", "Et vous, comment vous vous appelez ?", "And you, what's your name?"],
        ["Enzo", "Je m'appelle Enzo Tellier.", "My name is Enzo Tellier."],
        ["La professeure", "Tellier ? Comment ça s'écrit ?", "Tellier? How do you spell that?"],
        ["Enzo", "T, E, deux L, I, E, R.", "T, E, double L, I, E, R."],
        ["La professeure", "Merci, Enzo. Et vous, madame ?", "Thank you, Enzo. And you, madam?"],
        ["Ana", "Moi, je m'appelle Ana Silva. A, N, A. Et Silva : S, I, L, V, A.", "I'm Ana Silva. A, N, A. And Silva: S, I, L, V, A."],
        ["La professeure", "Enchantée, Ana ! Bienvenue à tous !", "Nice to meet you, Ana! Welcome, everyone!"]
      ],
      glossary: [["Comment vous vous appelez ?", "what's your name? (polite)"], ["Comment ça s'écrit ?", "how do you spell it?"], ["deux L", "double L"], ["Enchanté(e) !", "nice to meet you!"]]
    },
    {
      id: "d5", n: 5, title: "Classroom survival French", titleFr: "Dans la classe · Vous pouvez répéter ?",
      note: "Hugo arrives late and doesn't understand a word. Learn his phrases: you will use them every day!",
      scene: "classe", staff: "La professeure", people: { "La professeure": "f3", "Hugo": "m7" },
      lines: [
        ["Hugo", "Excusez-moi, je suis en retard !", "Sorry, I'm late!"],
        ["La professeure", "Ce n'est pas grave. Entrez, asseyez-vous. Ouvrez le livre page douze, s'il vous plaît.", "It's all right. Come in, sit down. Open the book at page twelve, please."],
        ["Hugo", "Pardon ? Je ne comprends pas. Vous pouvez répéter, s'il vous plaît ?", "Sorry? I don't understand. Could you repeat, please?"],
        ["La professeure", "Page douze. Un, deux : douze.", "Page twelve. One, two: twelve."],
        ["Hugo", "Ah, d'accord, merci ! Et… comment on dit « hello » en français ?", "Oh, OK, thanks! And… how do you say “hello” in French?"],
        ["La professeure", "On dit « bonjour » !", "You say “bonjour”!"],
        ["Hugo", "Bonjour, madame ! Et bonjour à tous !", "Hello, madam! And hello everyone!"]
      ],
      glossary: [["Je suis en retard.", "I'm late."], ["Je ne comprends pas.", "I don't understand."], ["Vous pouvez répéter ?", "could you repeat?"], ["Comment on dit… ?", "how do you say…?"]]
    }
  ],

  vocab: [
    { t: "Bonjour !", en: "Hello! Good morning!", pic: "☀️", cat: "Saluer", pr: "bon-ZHOOR" },
    { t: "Bonsoir !", en: "Good evening!", pic: "🌙", cat: "Saluer", pr: "bon-SWAR" },
    { t: "Salut !", en: "Hi! / Bye! (casual)", pic: "👋", cat: "Saluer", pr: "sa-LU" },
    { t: "Au revoir !", en: "Goodbye!", pic: "🚪", cat: "Saluer", pr: "o r-VWAR" },
    { t: "À bientôt !", en: "See you soon!", pic: "🔜", cat: "Saluer" },
    { t: "À plus !", en: "See you! (casual)", pic: "✌️", cat: "Saluer", pr: "a PLUS (the s is heard)" },
    { t: "À ce soir !", en: "See you tonight!", pic: "🌆", cat: "Saluer" },
    { t: "À demain !", en: "See you tomorrow!", pic: "📆", cat: "Saluer" },
    { t: "Bonne journée !", en: "Have a nice day!", pic: "🌞", cat: "Saluer" },
    { t: "Bonne soirée !", en: "Have a nice evening!", pic: "🌃", cat: "Saluer" },
    { t: "Ça va ?", en: "How are you? / OK?", pic: "🙂", cat: "Ça va ?" },
    { t: "Ça va, merci.", en: "I'm fine, thanks.", pic: "👍", cat: "Ça va ?" },
    { t: "Vous allez bien ?", en: "Are you well? (polite)", pic: "🤵", cat: "Ça va ?" },
    { t: "Tu vas bien ?", en: "Are you OK? (casual)", pic: "🧑", cat: "Ça va ?" },
    { t: "Très bien !", en: "Very well!", pic: "😄", cat: "Ça va ?" },
    { t: "Et vous ?", en: "And you? (polite)", pic: "🫵", cat: "Ça va ?" },
    { t: "Et toi ?", en: "And you? (casual)", pic: "👉", cat: "Ça va ?" },
    { t: "madame", en: "madam, Mrs", pic: "👩", cat: "Les personnes", g: "f" },
    { t: "monsieur", en: "sir, Mr", pic: "👨", cat: "Les personnes", g: "m", pr: "muh-SYUH" },
    { t: "un ami, une amie", en: "a friend (m / f)", pic: "🧑‍🤝‍🧑", cat: "Les personnes" },
    { t: "les enfants", en: "the children", pic: "👧", cat: "Les personnes", g: "pl", pr: "lay-zan-FAN (liaison)" },
    { t: "la famille", en: "the family", pic: "👨‍👩‍👧", cat: "Les personnes", g: "f", pr: "fa-MEE-y" },
    { t: "la bise", en: "the cheek kiss", pic: "😚", cat: "Les personnes", g: "f" },
    { t: "Je m'appelle…", en: "My name is…", pic: "🙋", cat: "Se présenter" },
    { t: "Comment vous vous appelez ?", en: "What's your name? (polite)", pic: "❓", cat: "Se présenter" },
    { t: "Comment tu t'appelles ?", en: "What's your name? (casual)", pic: "❔", cat: "Se présenter" },
    { t: "le prénom", en: "the first name", pic: "🪪", cat: "Se présenter", g: "m", pr: "pray-NON" },
    { t: "le nom", en: "the surname, the name", pic: "📛", cat: "Se présenter", g: "m" },
    { t: "Enchanté !", en: "Nice to meet you! (said by a man)", pic: "🤝", cat: "Se présenter", note: "a woman writes <b>Enchantée !</b> (same sound)" },
    { t: "Comment ça s'écrit ?", en: "How do you spell it?", pic: "✍️", cat: "Se présenter" },
    { t: "épeler", en: "to spell", pic: "🔤", cat: "Se présenter" },
    { t: "une lettre", en: "a letter (of the alphabet)", pic: "🅰️", cat: "L'alphabet", g: "f" },
    { t: "une voyelle", en: "a vowel", pic: "🔴", cat: "L'alphabet", g: "f", pr: "vwa-YEL" },
    { t: "une consonne", en: "a consonant", pic: "🔵", cat: "L'alphabet", g: "f" },
    { t: "un accent", en: "an accent (é, è, ê)", pic: "´", cat: "L'alphabet", g: "m", pr: "ak-SAN" },
    { t: "un sigle", en: "an acronym (SNCF, SMS…)", pic: "🔠", cat: "L'alphabet", g: "m" },
    { t: "lundi", en: "Monday", pic: "1️⃣", cat: "Les jours" },
    { t: "mardi", en: "Tuesday", pic: "2️⃣", cat: "Les jours" },
    { t: "mercredi", en: "Wednesday", pic: "3️⃣", cat: "Les jours" },
    { t: "jeudi", en: "Thursday", pic: "4️⃣", cat: "Les jours" },
    { t: "vendredi", en: "Friday", pic: "5️⃣", cat: "Les jours" },
    { t: "samedi", en: "Saturday", pic: "6️⃣", cat: "Les jours" },
    { t: "dimanche", en: "Sunday", pic: "7️⃣", cat: "Les jours" },
    { t: "aujourd'hui", en: "today", pic: "📍", cat: "Les jours" },
    { t: "demain", en: "tomorrow", pic: "➡️", cat: "Les jours" },
    { t: "janvier", en: "January", pic: "⛄", cat: "Les mois" },
    { t: "février", en: "February", pic: "❄️", cat: "Les mois" },
    { t: "mars", en: "March", pic: "🌱", cat: "Les mois", pr: "MARS (the s is heard)" },
    { t: "avril", en: "April", pic: "🌷", cat: "Les mois" },
    { t: "mai", en: "May", pic: "🌼", cat: "Les mois" },
    { t: "juin", en: "June", pic: "🍓", cat: "Les mois", pr: "zhwan" },
    { t: "juillet", en: "July", pic: "🎆", cat: "Les mois", pr: "zhwee-YAY" },
    { t: "août", en: "August", pic: "🏖️", cat: "Les mois", pr: "OOT or OO" },
    { t: "septembre", en: "September", pic: "🎒", cat: "Les mois" },
    { t: "octobre", en: "October", pic: "🍁", cat: "Les mois" },
    { t: "novembre", en: "November", pic: "🌧️", cat: "Les mois" },
    { t: "décembre", en: "December", pic: "🎄", cat: "Les mois" },
    { t: "le printemps", en: "spring", pic: "🌸", cat: "Les saisons", g: "m", pr: "pran-TAN" },
    { t: "l'été", en: "summer", pic: "☀️", cat: "Les saisons", g: "m" },
    { t: "l'automne", en: "autumn", pic: "🍂", cat: "Les saisons", g: "m", pr: "lo-TON (m silent)" },
    { t: "l'hiver", en: "winter", pic: "❄️", cat: "Les saisons", g: "m", pr: "lee-VAIR" },
    { t: "le livre", en: "the book", pic: "📕", cat: "La classe", g: "m" },
    { t: "le cahier", en: "the exercise book", pic: "📓", cat: "La classe", g: "m", pr: "ka-YAY" },
    { t: "le stylo", en: "the pen", pic: "🖊️", cat: "La classe", g: "m" },
    { t: "le tableau", en: "the board", pic: "🟩", cat: "La classe", g: "m" },
    { t: "la page", en: "the page", pic: "📄", cat: "La classe", g: "f" },
    { t: "le / la professeur(e)", en: "the teacher", pic: "🧑‍🏫", cat: "La classe" },
    { t: "un étudiant, une étudiante", en: "a student (m / f)", pic: "🧑‍🎓", cat: "La classe" },
    { t: "Je ne comprends pas.", en: "I don't understand.", pic: "🤷", cat: "La classe" },
    { t: "Vous pouvez répéter ?", en: "Could you repeat?", pic: "🔁", cat: "La classe" },
    { t: "Comment on dit… en français ?", en: "How do you say… in French?", pic: "💭", cat: "La classe", noDict: true },
    { t: "Excusez-moi.", en: "Excuse me. / Sorry.", pic: "🙇", cat: "La classe" },
    { t: "Je suis en retard.", en: "I'm late.", pic: "⏰", cat: "La classe" },
    { t: "s'il vous plaît", en: "please (polite)", pic: "🙏", cat: "La classe" },
    { t: "merci", en: "thank you", pic: "😊", cat: "La classe" }
  ],

  grammar: [
    {
      id: "g-tuvous",
      title: "[[tu]] or [[vous]]? Two ways of saying “you”",
      body: [
        "French has two words for <i>you</i>. Use [[tu]] with family, friends, children and people your age in a relaxed setting. Use [[vous]] with people you don't know, with older people, at work, in shops… and whenever you talk to <b>more than one</b> person.",
        "The choice changes the whole sentence: [[Tu vas bien ?]] / [[Vous allez bien ?]] · [[Et toi ?]] / [[Et vous ?]] · [[Comment tu t'appelles ?]] / [[Comment vous vous appelez ?]]",
        "When in doubt, say <b>vous</b>. A French speaker will tell you [[On peut se tutoyer !]] (we can say tu) when it's time to switch."
      ],
      info: [
        { type: "compare", title: "🤝 Tu or vous · handshake or bise?", cols: [
          { head: "TU", en: "casual · one person", color: "#e86a2e", mini: "bise", lines: [["Salut ! Tu vas bien ?", "Hi! Are you OK?"], ["Ça va, et toi ?", "Fine, and you?"], ["À plus !", "See you!"], "famille · amis · enfants"] },
          { head: "VOUS", en: "polite · or several people", color: "#2b59c3", mini: "main", lines: [["Bonjour, madame. Vous allez bien ?", "Hello. Are you well?"], ["Très bien, merci. Et vous ?", "Very well, thanks. And you?"], ["Au revoir, monsieur.", "Goodbye, sir."], "inconnus · travail · magasins"] }
        ], note: "Friends and family greet each other with <b>la bise</b>: a light kiss on each cheek (2 in Paris, 3 or even 4 in some regions!). With strangers and at work, people <b>shake hands</b> (<i>on se serre la main</i>)." }
      ],
      widget: {
        type: "sort", label: "Tu ou vous ? Tap each person, then the right column",
        cols: [{ k: "tu", label: "TU (+ la bise)", color: "#e86a2e" }, { k: "vous", label: "VOUS (+ la main)", color: "#2b59c3" }],
        items: [
          { t: "ma sœur", k: "tu", pic: "👧" }, { t: "un inconnu dans la rue", k: "vous", pic: "🧍" }, { t: "mon ami Paul", k: "tu", pic: "🧑" },
          { t: "le professeur", k: "vous", pic: "🧑‍🏫" }, { t: "un enfant", k: "tu", pic: "🧒" }, { t: "la boulangère", k: "vous", pic: "👩‍🍳" },
          { t: "ma grand-mère", k: "tu", pic: "👵" }, { t: "le directeur", k: "vous", pic: "🤵" }, { t: "deux amis ensemble", k: "vous", pic: "👬", say: "vous, deux amis" }
        ]
      },
      after: ["⚠️ The last one is a trap: [[vous]] is also the plural <i>you</i>. To two friends together you say [[Salut, vous allez bien ?]]"]
    },
    {
      id: "g-pronoms",
      title: "The subject pronouns: [[je]], [[tu]], [[il]], [[elle]]… and [[moi]], [[toi]]…",
      body: [
        "In French a verb always needs its little subject word: [[je]] (I), [[tu]] (you), [[il]] (he), [[elle]] (she), [[nous]] (we), [[vous]] (you), [[ils]] (they, m), [[elles]] (they, f). <b>Je</b> becomes <b>j'</b> before a vowel: [[j'aime]], [[j'habite]].",
        "To insist on <i>who</i>, French puts a <b>stressed pronoun</b> in front: [[Moi, je m'appelle Ana.]] · [[Et toi ?]] · [[Lui, il s'appelle Hugo.]] You can also use it alone: [[Et vous ?]] · [[Moi aussi !]]"
      ],
      info: [
        { type: "compare", title: "👥 Who's speaking? Subject and stressed pronouns", cols: [
          { head: "Singulier", en: "one person", color: "#c2508e", lines: [["Moi, je…", "I (me)"], ["Toi, tu…", "you (casual)"], ["Lui, il…", "he"], ["Elle, elle…", "she"]] },
          { head: "Pluriel", en: "several people", color: "#7b4fb5", lines: [["Nous, nous…", "we"], ["Vous, vous…", "you (polite or plural)"], ["Eux, ils…", "they (m or mixed)"], ["Elles, elles…", "they (all f)"]] }
        ], note: "[[ils]] is used for a group of men <b>or a mixed group</b>: one man and nine women = <b>ils</b>. Only an all-female group is <b>elles</b>." },
        { type: "conj", title: "🔁 s'appeler · to be called (the verb in “je m'appelle”)", verbs: [
          { inf: "s'appeler", en: "to be called", forms: ["je m'app|elle", "tu t'app|elles", "il / elle s'app|elle", "nous nous app|elons", "vous vous app|elez", "ils / elles s'app|ellent"] }
        ], note: "Double <b>ll</b> when the ending is silent (je m'appe<b>ll</b>e), single <b>l</b> when you hear the ending (nous nous appe<b>l</b>ons)." }
      ],
      widget: {
        type: "combo", label: "Introduce people · pick a person and a name",
        rows: [{ k: "je", label: "🙋 moi" }, { k: "tu", label: "👉 toi ?" }, { k: "il", label: "👨 lui" }, { k: "elle", label: "👩 elle" }, { k: "vous", label: "🫵 vous ?" }],
        cols: [{ k: "a", label: "Ana" }, { k: "h", label: "Hugo" }, { k: "q", label: "? (ask)" }],
        out: {
          "je|a": ["Moi, je m'appelle Ana.", "My name is Ana.", "moi + je"], "je|h": ["Moi, je m'appelle Hugo.", "My name is Hugo."], "je|q": ["Moi, comment je m'appelle ?", "What's my name? (a game!)"],
          "tu|a": ["Toi, tu t'appelles Ana ?", "Your name is Ana?", "voice rising ↗"], "tu|h": ["Toi, tu t'appelles Hugo ?", "Your name is Hugo?"], "tu|q": ["Et toi, comment tu t'appelles ?", "And you, what's your name?", "casual question"],
          "il|a": ["Lui, il s'appelle… non ! Ana, c'est une femme.", "He is called… no! Ana is a woman.", "Ana is a woman's name → elle"], "il|h": ["Lui, il s'appelle Hugo.", "He's called Hugo.", "lui + il"], "il|q": ["Et lui, comment il s'appelle ?", "And him, what's his name?"],
          "elle|a": ["Elle, elle s'appelle Ana.", "She's called Ana.", "elle + elle"], "elle|h": ["Elle s'appelle… non ! Hugo, c'est un homme.", "She's called… no! Hugo is a man.", "Hugo is a man's name → il"], "elle|q": ["Et elle, comment elle s'appelle ?", "And her, what's her name?"],
          "vous|a": ["Vous vous appelez Ana ?", "Is your name Ana?", "polite"], "vous|h": ["Vous vous appelez Hugo ?", "Is your name Hugo?"], "vous|q": ["Et vous, comment vous vous appelez ?", "And you, what's your name?", "polite question"]
        }
      }
    },
    {
      id: "g-alphabet",
      title: "The alphabet and spelling: [[Comment ça s'écrit ?]]",
      body: [
        "The French alphabet has the same 26 letters as English, but the names are different. Tap each letter. Watch out for <b>E</b> (like “uh”), <b>I</b> (like “ee”), <b>G</b> (zhay) and <b>J</b> (zhee): English speakers often swap them.",
        "To spell a double letter, say [[deux]]: <i>Tellier</i> = T, E, <b>deux L</b>, I, E, R. Accents count too: <b>é</b> = [[e accent aigu]], <b>è</b> = [[e accent grave]], <b>ç</b> = [[c cédille]]."
      ],
      info: [
        { type: "alphabet", accents: [["é", "accent aigu", "e accent aigu", "café"], ["è", "accent grave", "e accent grave", "mère"], ["ê", "accent circonflexe", "e accent circonflexe", "fête"], ["ç", "cédille", "c cédille", "français"], ["ë", "tréma", "e tréma", "Noël"]] },
        { type: "pics", title: "🔠 Les sigles · French says the letters", items: [
          { t: "la SNCF", pic: "🚄", en: "French railways" }, { t: "la RATP", pic: "🚇", en: "Paris metro & buses" }, { t: "un SMS", pic: "💬", en: "a text message" },
          { t: "une BD", pic: "📚", en: "a comic book (bande dessinée)" }, { t: "un PDG", pic: "🤵", en: "a CEO" }, { t: "le TGV", pic: "🚅", en: "the high-speed train" }, { t: "un CV", pic: "📄", en: "a CV, résumé" }, { t: "les USA", pic: "🗽", en: "the USA" }
        ] }
      ],
      widget: { type: "spell", label: "Épelez ! · hear a name spelled, then type it", words: ["Tellier", "Dupuis", "Martin", "Diallo", "Tremblay", "Leroy", "Garnier", "Rioux", "Huron", "Lardy", "Jeanneret", "Delage", "Manon", "Hugo", "Élodie", "François", "Chloé", "Zoé"] }
    },
    {
      id: "g-nombres",
      title: "Numbers from 0 to 31",
      body: [
        "Learn 0 to 16 by heart: they are all different words. From 17 to 19 you add: [[dix-sept]] (10 + 7), [[dix-huit]], [[dix-neuf]].",
        "From 20 the pattern is regular: [[vingt]], [[vingt-deux]], [[vingt-trois]]… with one exception: <b>21 and 31 take “et”</b>: [[vingt et un]], [[trente et un]]. No hyphen with <i>et</i>.",
        "Some final consonants change with the next word: [[six]] and [[dix]] say the <b>s</b> alone, but not before a consonant ([[six livres]] = <i>si livres</i>) and they become <b>z</b> before a vowel ([[six amis]] = <i>si-z-amis</i>)."
      ],
      info: { type: "numbers", title: "🔢 Tap a number to hear it", list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], hl: [17, 21, 31], math: { 17: "10 + 7", 18: "10 + 8", 19: "10 + 9", 21: "20 et 1", 31: "30 et 1" }, note: "Highlighted: the ones that follow a special rule." },
      widget: { type: "numbers", min: 0, max: 31, label: "Numbers 0–31 · hear it, read it, write it" }
    },
    {
      id: "g-date",
      title: "Days, months, seasons: [[Aujourd'hui, c'est le…]]",
      body: [
        "Days and months take <b>no capital letter</b> in French: [[lundi]], [[mars]]. To say today's day: [[Aujourd'hui, c'est mercredi.]] · [[Demain, c'est jeudi.]]",
        "For a date, say <b>le</b> + the number + the month: [[le 14 juillet]], [[le 25 décembre]]. Only the first of the month is different: <b>1<sup>er</sup></b> is [[premier]]: [[le premier mars]].",
        "Seasons: [[au printemps]] (in spring) but [[en été]], [[en automne]], [[en hiver]] (before a vowel sound)."
      ],
      info: [{ type: "calendar", note: "Le week-end = <b>samedi</b> and <b>dimanche</b>. The French week starts on <b>lundi</b>." }],
      widget: { type: "date" }
    }
  ],

  expressions: [
    { fn: "Pour saluer", fnEn: "saying hello", icon: "👋", items: [
      ["Bonjour, madame / monsieur.", "Hello (polite).", "poli", true],
      ["Bonsoir !", "Good evening! (after about 6 p.m.)", "std"],
      ["Salut !", "Hi!", "fam", true]
    ] },
    { fn: "Pour prendre congé", fnEn: "saying goodbye", icon: "🚪", items: [
      ["Au revoir, madame.", "Goodbye.", "poli", true],
      ["À bientôt ! · À demain ! · À ce soir !", "See you soon / tomorrow / tonight!", "std"],
      ["Bonne journée ! · Bonne soirée !", "Have a nice day / evening!", "std", true],
      ["Salut ! À plus ! Ciao !", "Bye! See you!", "fam"]
    ] },
    { fn: "Pour demander / dire comment ça va", fnEn: "how are you?", icon: "🙂", items: [
      ["Vous allez bien ?", "Are you well?", "poli", true],
      ["Tu vas bien ?", "Are you OK?", "fam"],
      ["Ça va ?", "How's it going?", "std", true],
      ["Très bien, merci. Et vous ?", "Very well, thanks. And you?", "poli"],
      ["Ça va, et toi ?", "Fine, and you?", "fam"]
    ] },
    { fn: "Pour se présenter", fnEn: "introducing yourself", icon: "🙋", items: [
      ["Je m'appelle Ana.", "My name is Ana.", "std", true],
      ["Comment vous vous appelez ?", "What's your name?", "poli", true],
      ["Comment tu t'appelles ?", "What's your name?", "fam"],
      ["Comment ça s'écrit ?", "How do you spell it?", "std", true],
      ["Enchanté(e) !", "Nice to meet you!", "std"]
    ] },
    { fn: "Pour demander, s'excuser (en classe)", fnEn: "classroom French", icon: "🏫", items: [
      ["Je ne comprends pas.", "I don't understand.", "std", true],
      ["Vous pouvez répéter, s'il vous plaît ?", "Could you repeat, please?", "poli", true],
      ["Comment on dit « book » en français ?", "How do you say 'book' in French?", "std", true],
      ["Pardon ? · Excusez-moi. · Excuse-moi.", "Sorry? · Excuse me (polite / casual).", "std"],
      ["Excusez-moi, je suis en retard.", "Sorry, I'm late.", "poli"]
    ], reply: ["Ce n'est pas grave.", "On dit « livre »."] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · meeting someone for the first time", lanes: ["Personne A", "Personne B"], av: ["f3", "m5"], steps: [
    { s: 0, fr: "Bonjour ! Je m'appelle Sophie.", en: "Hello! My name is Sophie.", alt: ["Salut ! Moi, c'est Sophie."] },
    { s: 1, fr: "Bonjour, Sophie. Moi, je m'appelle Enzo.", en: "Hello, Sophie. I'm Enzo." },
    { s: 0, fr: "Enzo ? Comment ça s'écrit ?", en: "Enzo? How do you spell it?" },
    { s: 1, fr: "E, N, Z, O.", en: "E, N, Z, O." },
    { s: 0, fr: "Enchantée, Enzo !", en: "Nice to meet you, Enzo!" },
    { s: 1, fr: "Enchanté ! Au revoir, à bientôt !", en: "Nice to meet you! Bye, see you soon!", alt: ["Bonne journée !"] }
  ] },

  sounds: {
    intro: "Your first French sounds: the vowels that surprise English speakers, the French <b>r</b>, and the letters you write but don't say.",
    letters: [
      { l: "u", name: "[y] · the French u", tip: "Say “ee” and round your lips as if to whistle, without moving your tongue. It is <b>not</b> “oo”. [[salut]], [[tu]], [[du]].", ex: ["salut", "tu", "une", "bienvenue"] },
      { l: "ou", name: "[u] · “oo”", tip: "Lips very round and forward: [[bonjour]], [[vous]], [[douze]]. Hear the difference with <b>u</b>: <i>tu / tout</i>.", ex: ["bonjour", "vous", "douze", "août"] },
      { l: "r", name: "[ʁ] · the French r", tip: "It's made at the <b>back</b> of the throat, like a soft gargle. Practise with [[merci]], [[au revoir]], [[très bien]].", ex: ["merci", "au revoir", "très bien", "trois"] },
      { l: "on / an / in", name: "nasal vowels", tip: "The air goes through the nose and the n is <b>not</b> pronounced: [[bonjour]] (on), [[enfant]] (an), [[vingt]] (in).", ex: ["bonjour", "les enfants", "vingt", "un"] },
      { l: "-s -t -x", name: "silent final letters", tip: "Most final consonants are silent: <i>Salu<s>t</s> ! Vou<s>s</s> alle<s>z</s> bien ?</i> Except in a few words like [[mars]], [[six]] or [[À plus !]].", ex: ["salut", "vous allez", "trois", "vingt"] },
      { l: "h", name: "the silent h", tip: "The French <b>h</b> is never pronounced: [[Hugo]] = <i>u-go</i>, [[l'hiver]] = <i>li-vair</i>.", ex: ["Hugo", "l'hiver", "huit", "Hélène"] }
    ],
    pairs: [
      { a: ["tu", "you"], b: ["tout", "all"], note: "u [y] / ou [u]" },
      { a: ["deux", "two"], b: ["douze", "twelve"], note: "eu [ø] / ou [u]" },
      { a: ["treize", "thirteen"], b: ["seize", "sixteen"], note: "tr / s" },
      { a: ["six", "six"], b: ["dix", "ten"], note: "s / d" },
      { a: ["quatre", "four"], b: ["quatorze", "fourteen"], note: "listen for the end" },
      { a: ["E", "the letter E"], b: ["I", "the letter I"], note: "[ə] uh / [i] ee" }
    ]
  },
  classify: {
    label: "🤝 Tu ou vous ?", q: "Is this person speaking casually (tu) or politely (vous)?",
    options: ["tu · casual", "vous · polite (or plural)"],
    items: [
      { say: "Salut ! Ça va ?", a: 0 }, { say: "Bonjour, madame. Vous allez bien ?", a: 1 }, { say: "Et toi ?", a: 0 }, { say: "Et vous ?", a: 1 },
      { say: "Comment tu t'appelles ?", a: 0 }, { say: "Comment vous vous appelez ?", a: 1 }, { say: "À plus !", a: 0 }, { say: "Vous pouvez répéter, s'il vous plaît ?", a: 1 },
      { say: "Excuse-moi !", a: 0 }, { say: "Excusez-moi, monsieur.", a: 1 }, { say: "Tu vas bien ?", a: 0 }, { say: "Bonne soirée, madame.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Monsieur Delage et madame Dupuis se disent « tu ».", ok: false, explain: "They use [[vous]]: [[Vous allez bien ?]]" },
    { type: "tf", tag: "Dialogue 2", s: "Manon et Alice sont amies.", ok: true, explain: "They say [[Salut !]] and [[tu]]." },
    { type: "tf", tag: "Dialogue 3", s: "Les enfants vont à l'école.", ok: true, explain: "[[C'est l'heure de l'école !]]" },
    { type: "tf", tag: "Dialogue 4", s: "Le nom de famille d'Enzo est Tellier.", ok: true, explain: "T, E, deux L, I, E, R." },
    { type: "tf", tag: "Dialogue 5", s: "Hugo comprend tout.", ok: false, explain: "[[Je ne comprends pas.]]" },
    { type: "reply", tag: "Que répondre ?", prompt: "Bonjour, madame ! Vous allez bien ?", options: ["Très bien, merci. Et vous ?", "Salut ! Et toi ?", "Au revoir !"], answer: 0, explain: "Answer with <b>vous</b> to a <b>vous</b> question." },
    { type: "reply", tag: "Que répondre ?", prompt: "Salut ! Ça va ?", options: ["Ça va, et toi ?", "Enchanté, madame.", "Je suis en retard."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Comment vous vous appelez ?", options: ["Je m'appelle Léa.", "Ça va bien.", "C'est lundi."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Comment ça s'écrit ?", options: ["L, É, A.", "Très bien, merci.", "Le premier mars."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Excusez-moi, je suis en retard !", options: ["Ce n'est pas grave. Entrez !", "Bonne soirée !", "Moi aussi, je m'appelle Hugo."], answer: 0 },
    { type: "mcq", tag: "Tu ou vous ?", q: "You meet your new boss. What do you say?", options: ["Salut ! Tu vas bien ?", "Bonjour, madame. Vous allez bien ?", "Coucou ! Ça va ?"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Tu ou vous ?", q: "You greet two friends together. What do you say?", options: ["Salut ! Tu vas bien ?", "Salut ! Vous allez bien ?", "Bonjour, monsieur."], answer: 1, sayAnswer: true, explain: "Two people = [[vous]], even friends." },
    { type: "mcq", tag: "Saluer", q: "It's 8 p.m. You walk into a restaurant. You say…", options: ["Bonjour !", "Bonsoir !", "Bonne journée !"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Saluer", q: "You leave a shop at 10 a.m. You say…", options: ["Bonne soirée !", "Bonne journée !", "Bonne nuit !"], answer: 1, sayAnswer: true },
    { type: "fill", tag: "Pronoms", sentence: "___, je m'appelle Ana.", options: ["Moi", "Toi", "Lui"], answer: 0, explain: "[[Moi, je…]]" },
    { type: "fill", tag: "Pronoms", sentence: "Et ___, comment tu t'appelles ?", options: ["moi", "toi", "vous"], answer: 1, explain: "[[toi]] goes with [[tu]]." },
    { type: "fill", tag: "Pronoms", sentence: "Et vous, comment ___ vous appelez ?", options: ["tu", "vous", "nous"], answer: 1, explain: "[[vous vous appelez]]: twice vous!" },
    { type: "fill", tag: "Pronoms", sentence: "Hugo ? ___ s'appelle Hugo Martin.", options: ["Il", "Elle", "Je"], answer: 0 },
    { type: "fill", tag: "Pronoms", sentence: "Léa et Zoé ? ___ sont étudiantes.", options: ["Ils", "Elles", "Nous"], answer: 1, explain: "Two women = [[elles]]." },
    { type: "fill", tag: "Pronoms", sentence: "Paul et Marie ? ___ sont français.", options: ["Ils", "Elles", "Vous"], answer: 0, explain: "A mixed group = [[ils]]." },
    { type: "mcq", tag: "L'alphabet", q: "How do you spell the name “Rioux”?", options: ["R, I, O, U, X", "R, E, O, U, X", "R, I, O, U, S"], answer: 0 },
    { type: "listen", tag: "L'alphabet", q: "Which name do you hear spelled?", say: "G, I, L, L, E, S", options: ["Gilles", "Jules", "Gillas"], answer: 0 },
    { type: "listen", tag: "L'alphabet", q: "Which acronym do you hear?", say: "S, N, C, F", options: ["SNCF", "SMCF", "ENCF"], answer: 0 },
    { type: "listen", tag: "Les nombres", q: "Which number do you hear?", say: "seize", options: ["6", "16", "13"], answer: 1 },
    { type: "listen", tag: "Les nombres", q: "Which number do you hear?", say: "douze", options: ["2", "12", "20"], answer: 1 },
    { type: "listen", tag: "Les nombres", q: "Which number do you hear?", say: "vingt et un", options: ["21", "25", "31"], answer: 0 },
    { type: "type", tag: "Les nombres", q: "Write 17 in words.", answers: ["dix-sept", "dix sept"], explain: "10 + 7 = [[dix-sept]]" },
    { type: "type", tag: "Les nombres", q: "Neuf + quatre = ? (write it in words)", answers: ["treize"], explain: "9 + 4 = [[treize]]" },
    { type: "mcq", tag: "La date", q: "How do you say “1st May”?", options: ["le un mai", "le premier mai", "le première mai"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "La date", q: "Le 14 juillet, c'est…", options: ["au printemps", "en été", "en hiver"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "La date", q: "Aujourd'hui, c'est vendredi. Demain, c'est…", options: ["jeudi", "samedi", "dimanche"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "La classe", q: "You didn't hear the teacher. You say…", options: ["Vous pouvez répéter, s'il vous plaît ?", "Je suis en retard.", "Au revoir !"], answer: 0, sayAnswer: true },
    { type: "order", tag: "Construisez", en: "How do you say “pen” in French?", words: ["Comment", "on", "dit", "« pen »", "en", "français", "?"] },
    { type: "order", tag: "Construisez", en: "Hello, my name is Hugo.", words: ["Bonjour,", "je", "m'appelle", "Hugo."] },
    { type: "order", tag: "Remettez dans l'ordre", lines: true, words: ["— Salut ! Ça va ?", "— Ça va, et toi ?", "— Très bien ! À plus !", "— Salut, à plus !"] }
  ],

  roleplays: [
    { title: "👋 Bonjour, voisin !", brief: "You meet your elderly neighbour, Madame Dupuis, in the street. Greet her politely, ask how she is, and say goodbye.", memo: ["vous", "madame", "Vous allez bien ?", "Bonne journée"], partner: "f6", you: "m1",
      turns: [
        { them: "Bonjour, monsieur !", themEn: "Hello!", hint: "Greet her with [[madame]].", you: "Bonjour, madame Dupuis !", youEn: "Hello, Mrs Dupuis!" },
        { them: "Vous allez bien ?", themEn: "Are you well?", hint: "Say you're very well, and ask her back (polite).", you: "Très bien, merci. Et vous ?", youEn: "Very well, thank you. And you?" },
        { them: "Bien, merci. Bon, je vais au marché.", themEn: "Fine, thanks. Right, I'm off to the market.", hint: "Wish her a nice day and say goodbye.", you: "Bonne journée, madame. Au revoir !", youEn: "Have a nice day. Goodbye!" }
      ] },
    { title: "🏫 Premier jour de cours", brief: "It's your first French class. The teacher asks your name and how to spell it. Use your own name!", memo: ["Je m'appelle…", "épeler", "Enchanté(e)"], partner: "f3", you: "f4",
      turns: [
        { them: "Bonjour ! Comment vous vous appelez ?", themEn: "Hello! What's your name?", hint: "Say your first name and surname.", you: "Bonjour, madame. Je m'appelle Ana Silva.", youEn: "Hello. My name is Ana Silva." },
        { them: "Silva ? Comment ça s'écrit ?", themEn: "Silva? How do you spell it?", hint: "Spell your surname letter by letter.", you: "S, I, L, V, A.", youEn: "S, I, L, V, A." },
        { them: "Merci ! Moi, je m'appelle Sophie. Bienvenue !", themEn: "Thank you! I'm Sophie. Welcome!", hint: "Say nice to meet you, and thank you.", you: "Enchantée ! Merci, madame.", youEn: "Nice to meet you! Thank you." },
        { them: "Ouvrez le livre page vingt-trois, s'il vous plaît.", themEn: "Open the book at page 23, please.", hint: "You didn't understand the number. Ask her to repeat.", you: "Pardon, vous pouvez répéter, s'il vous plaît ?", youEn: "Sorry, could you repeat, please?" }
      ] },
    { title: "😎 Salut, ça va ?", brief: "You bump into your friend Manon in town. Be casual: tu, salut, à plus!", memo: ["tu", "salut", "et toi ?", "à plus"], partner: "f1", you: "m5",
      turns: [
        { them: "Salut ! Tu vas bien ?", themEn: "Hi! Are you OK?", hint: "Say hi, you're fine, and ask her back.", you: "Salut Manon ! Ça va, et toi ?", youEn: "Hi Manon! Fine, and you?" },
        { them: "Ça va ! Je vais au cinéma.", themEn: "I'm fine! I'm going to the cinema.", hint: "Say bye, casually.", you: "Super ! À plus !", youEn: "Great! See you!" }
      ] }
  ],

  ateliers: [
    { title: "Créer le badge de la classe", intro: "Make a name badge to wear in your first French class, and introduce yourself with it.",
      steps: [["Préparation", ["Write your <b>prénom</b> and <b>nom</b> in big letters.", "Add the date of your birthday: [[le 3 mars]].", "Add one French word you like."]], ["Réalisation", ["Decorate it with colours or a flag.", "Practise spelling your name out loud with the alphabet."]], ["Présentation", ["Walk round the class: [[Bonjour, je m'appelle…]]", "Ask: [[Comment ça s'écrit ?]] and [[C'est quand, ton anniversaire ?]]"]]],
      phrases: ["Je m'appelle…", "Ça s'écrit…", "Mon anniversaire, c'est le…"],
      model: { type: "form", style: "badge", title: "COURS DE FRANÇAIS · A1", photo: "f4", fields: [["Prénom", "Ana", "Ana"], ["Nom", "SILVA", "S, I, L, V, A"], ["Anniversaire", "le 22 avril", "le vingt-deux avril"], ["Mon mot préféré", "bienvenue", "bienvenue"]] } },
    { title: "Le calendrier des anniversaires", tech: true, intro: "Build a shared class calendar (on paper or in a shared online document) with everyone's birthday and the season.",
      steps: [["Préparation", ["Draw 12 boxes, one per month, grouped by season.", "Ask each person: [[C'est quand, ton anniversaire ?]]"]], ["Réalisation", ["Write each name in the right month: [[Hugo : le 30 juin]].", "Colour the seasons: ❄️ 🌸 ☀️ 🍂"]], ["Présentation", ["Read it aloud: [[En janvier, il y a l'anniversaire de…]]", "Who's next? [[Le prochain anniversaire, c'est…]]"]]],
      phrases: ["C'est quand, ton anniversaire ?", "C'est le premier juin.", "C'est en été !"] }
  ],
  detente: {
    title: "C'est en français ! · Where does the word come from?",
    intro: "French has borrowed words from all over the world, and the world has borrowed thousands of French words. You already know lots! Guess where each French word comes from.",
    items: [
      { type: "mcq", q: "le week-end", options: ["anglais", "italien", "arabe"], answer: 0, explain: "From English, with French spelling and pronunciation." },
      { type: "mcq", q: "une orange", options: ["japonais", "arabe", "allemand"], answer: 1, explain: "Through Arabic <i>nāranj</i>, from Persian." },
      { type: "mcq", q: "un opéra", options: ["italien", "chinois", "espagnol"], answer: 0 },
      { type: "mcq", q: "une guitare", options: ["espagnol", "anglais", "hollandais"], answer: 0 },
      { type: "mcq", q: "un manga", options: ["chinois", "japonais", "italien"], answer: 1 },
      { type: "mcq", q: "le zéro", options: ["arabe", "allemand", "anglais"], answer: 0, explain: "Via Italian <i>zefiro</i>, from Arabic <i>ṣifr</i>." },
      { type: "mcq", q: "le kung-fu", options: ["chinois", "japonais", "arabe"], answer: 0 },
      { type: "mcq", q: "une paella", options: ["espagnol", "japonais", "allemand"], answer: 0 },
      { type: "mcq", q: "Which of these is a French word used in English?", options: ["un rendez-vous", "un kimono", "un sandwich"], answer: 0, explain: "Also: café, restaurant, menu, ballet, déjà vu…" }
    ]
  },

  cultureInfo: [
    { type: "pics", title: "🌍 French words the whole world knows", items: [{ t: "un café", pic: "☕" }, { t: "un restaurant", pic: "🍽️" }, { t: "un croissant", pic: "🥐" }, { t: "un menu", pic: "📜" }, { t: "un rendez-vous", pic: "📅" }, { t: "la télévision", pic: "📺" }, { t: "un hôtel", pic: "🏨" }, { t: "le ballet", pic: "🩰" }] }
  ],
  culture: [
    { icon: "😚", kind: "Civilisation", t: "[[la bise]] or a handshake?", d: "Friends and family kiss each other lightly on both cheeks: <b>la bise</b>. How many? Usually 2, but 3 in parts of the south and 4 in some northern regions! With strangers and at work, people shake hands. Children and adults also say [[Bisous !]] at the end of a message." },
    { icon: "🙋", kind: "Langue", t: "[[Bonjour]] or [[bonsoir]]?", d: "<b>Bonjour</b> works from morning until early evening. After about 6 p.m., say <b>bonsoir</b>. <b>Bonne nuit</b> is only for going to bed." },
    { icon: "🤔", kind: "Oh, le cliché !", t: "« Le français est une langue difficile. »", d: "Really? You already know hundreds of French words: <i>café, restaurant, menu, hôtel, ballet…</i> And French itself has borrowed words from English (<i>week-end, sandwich</i>), Arabic (<i>orange, zéro</i>), Chinese (<i>feng-shui, kung-fu</i>), Spanish (<i>paella, guitare</i>), Italian (<i>ciao, opéra</i>) and Japanese (<i>manga, zen</i>)." },
    { icon: "📛", kind: "Francophonie", t: "Common surnames in the French-speaking world", d: "The most common family names: <b>Martin</b> in France, <b>Peeters</b> in Belgium, <b>Tremblay</b> in Québec, <b>Diallo</b> in Senegal, <b>Jeanneret</b> or <b>Müller</b> in Switzerland." },
    { icon: "🔠", kind: "Au fait !", t: "Sigles everywhere", d: "French loves acronyms, read letter by letter: <b>SNCF</b> = <i>Société nationale des chemins de fer français</i>, <b>RATP</b> (Paris transport), <b>SMS</b>, <b>BD</b> (<i>bande dessinée</i>, comic), <b>PDG</b> (CEO)." },
    { icon: "📅", kind: "Au fait !", t: "No capital letters", d: "Days and months are written in small letters: <i>lundi 6 avril</i>. And the week starts on Monday." },
    { icon: "🎆", kind: "Civilisation", t: "[[le 14 juillet]]", d: "The French national day (Bastille Day) is in summer, with parades, balls and fireworks." }
  ],
  tips: [
    { icon: "🛟", t: "Your three survival phrases", d: "[[Je ne comprends pas.]] · [[Vous pouvez répéter ?]] · [[Comment on dit… en français ?]] Write them on a card and keep it with you." },
    { icon: "🔤", t: "Spell your own name every day", d: "Use the spelling machine in the grammar tab: type your name and listen. Then say it without help." },
    { icon: "🎵", t: "Count while you walk", d: "Count your steps in French up to 31. Then count backwards!" }
  ],
  mistakes: [
    ["Bonjour, monsieur. Tu vas bien ?", "Bonjour, monsieur. Vous allez bien ?", "monsieur → vous"],
    ["Je appelle Ana.", "Je m'appelle Ana.", "the verb is s'appeler"],
    ["vingt-et-un", "vingt et un", "no hyphens with et"],
    ["le un mars", "le premier mars", "1st = premier"],
    ["Lundi, le 3 Mars", "lundi 3 mars", "no capitals"],
    ["Bonne nuit ! (leaving a shop at 7 p.m.)", "Bonne soirée !", "bonne nuit = going to bed"]
  ]
});
