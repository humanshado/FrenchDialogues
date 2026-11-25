// Unité 6 · Félicitations ! (book pp. 89–102)
// Situations: présenter sa famille · annoncer un événement familial et féliciter · les fêtes · décrire quelqu'un · raconter une rencontre
// Grammar: adjectifs possessifs · passé composé (1) avec avoir · c'est un(e) / il, elle est · indicateurs de temps du passé et du futur
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u06", rubrique: 3, num: 6,
  title: "Congratulations!",
  titleFr: "Félicitations !",
  pages: "Book pp. 89–102",
  opener: { fr: "Quelle bonne nouvelle ! Félicitations !", en: "What good news! Congratulations!" },
  hero: { scene: "fete", people: { "Mamie": "f6", "Hyacinthe": "f8", "Yao": "k1", "Papa": "m3" }, wave: ["Hyacinthe"] },
  situations: [
    ["👨‍👩‍👧", "Ma famille", "present your family: [[J'ai un petit frère et une petite sœur.]] · [[Je suis fille unique.]]"],
    ["👶", "Félicitations !", "announce news and congratulate: [[Nous avons reçu votre faire-part !]]"],
    ["🎉", "Les fêtes", "wishes: [[Joyeux anniversaire !]] [[Bonne année !]] [[Meilleurs vœux !]]"],
    ["🕵️", "Qui est-ce ?", "describe someone: [[C'est un acteur belge. Il est grand et brun.]]"],
    ["💌", "Une belle rencontre", "tell a story: [[Hier, nous avons dîné ensemble. Demain, on va au cinéma.]]"]
  ],
  goals: [
    "Understand a family tree and present your family: [[mes parents]], [[mon oncle]], [[ma cousine]]",
    "Use possessives: [[mon]], [[ma]], [[mes]], [[son]], [[sa]], [[ses]], [[notre]], [[leur]]…",
    "Announce an event and congratulate: [[Bravo !]] [[Félicitations !]] [[Tous nos vœux de bonheur !]]",
    "Talk about the past with the passé composé: [[J'ai téléphoné.]] · [[Nous avons reçu ton message.]]",
    "Wish people well on special days: [[Joyeux Noël !]] · [[Bonne année !]]",
    "Describe someone's looks and character: [[Elle est grande, elle a les yeux bleus, elle est drôle.]]",
    "Choose [[C'est un…]] or [[Il est…]]",
    "Place events in the past or future: [[hier]], [[il y a un mois]], [[la semaine prochaine]], [[dans trois jours]]"
  ],
  glance: [
    ["🗣️", "Communication", "family · congratulations and wishes · describing people · telling about a meeting"],
    ["🧩", "Grammaire", "possessive adjectives · passé composé with avoir · c'est / il est · time markers"],
    ["🗂️", "Vocabulaire", "family and the people around you · marital status · life events · appearance and character · holidays"],
    ["🔊", "Phonétique", "nasal vowels [ɑ̃] / [ɔ̃] and [ɑ̃] / [ɛ̃]"],
    ["⭐", "The phrase to learn first", "[[Félicitations ! Quelle bonne nouvelle !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "My family in Abidjan", titleFr: "Ma famille à Abidjan",
      note: "Hyacinthe shows her friend Marie photos of her family in Côte d'Ivoire. Listen to the possessives: [[mon]], [[ma]], [[mes]], [[son]], [[leur]].",
      scene: "maison", people: { "Marie": "f3", "Hyacinthe": "f8" }, hold: { "Hyacinthe": "📱" },
      lines: [
        ["Marie", "C'est qui, sur la photo ?", "Who's in the photo?"],
        ["Hyacinthe", "C'est ma famille, à Abidjan ! Chez moi, nous sommes cinq : mes parents, mon petit frère, ma petite sœur et moi.", "It's my family, in Abidjan! At home there are five of us: my parents, my little brother, my little sister and me."],
        ["Marie", "Ton frère, il s'appelle comment ?", "What's your brother's name?"],
        ["Hyacinthe", "Il s'appelle Yao. Il a douze ans. Et ma sœur, c'est Rita : elle a neuf ans.", "He's called Yao. He's twelve. And my sister is Rita: she's nine."],
        ["Marie", "Et ce monsieur avec la dame, ce sont tes grands-parents ?", "And this man with the lady, are they your grandparents?"],
        ["Hyacinthe", "Non, c'est mon oncle Koffi et sa femme, ma tante Alphonsine. Leur fils, Bobby, c'est mon cousin préféré !", "No, that's my uncle Koffi and his wife, my aunt Alphonsine. Their son Bobby is my favourite cousin!"],
        ["Marie", "Tu as une grande famille ! Moi, je suis fille unique : je n'ai pas de frère et sœur.", "You have a big family! I'm an only child: I have no brothers or sisters."],
        ["Hyacinthe", "Alors viens à Abidjan ! Avec mes cousins et nos voisins, tu vas avoir beaucoup de frères et sœurs !", "Then come to Abidjan! With my cousins and our neighbours, you'll have lots of brothers and sisters!"]
      ],
      glossary: [["Nous sommes cinq.", "there are five of us"], ["mon oncle, ma tante", "my uncle, my aunt"], ["leur fils", "their son"], ["fille unique", "only child (girl)"]]
    },
    {
      id: "d2", n: 2, title: "A baby is born!", titleFr: "Une naissance · Félicitations !",
      note: "Stéphanie has had a baby. Her mother phones her. Listen to the passé composé: [[nous avons reçu]], [[j'ai téléphoné]], [[ton père a acheté]].",
      scene: "maison", people: { "Stéphanie": "f5", "Maman": "f6" }, phone: ["Stéphanie", "Maman"],
      lines: [
        ["Maman", "Allô, Stéphanie ? C'est maman ! Nous avons reçu ton faire-part ce matin. Il est très joli !", "Hello, Stéphanie? It's Mum! We got your birth announcement this morning. It's lovely!"],
        ["Stéphanie", "Merci, maman ! Tu as vu la photo de Léon ?", "Thanks, Mum! Did you see Léon's photo?"],
        ["Maman", "Oui, il est magnifique ! Félicitations, ma chérie ! Ton père est très fier.", "Yes, he's beautiful! Congratulations, darling! Your father is very proud."],
        ["Stéphanie", "Et toi, tu es contente d'être grand-mère ?", "And you, are you happy to be a grandmother?"],
        ["Maman", "Très contente ! J'ai téléphoné à tante Odile et à oncle Bernard : ils t'embrassent. Et ton père a acheté un cadeau pour le bébé.", "Very happy! I phoned aunt Odile and uncle Bernard: they send their love. And your father has bought a present for the baby."],
        ["Stéphanie", "Oh, c'est gentil ! Vous venez quand ?", "Oh, that's kind! When are you coming?"],
        ["Maman", "Dans trois jours ! Je n'ai pas pu venir cette semaine, je suis désolée.", "In three days! I couldn't come this week, I'm sorry."],
        ["Stéphanie", "Ce n'est pas grave. À samedi, maman ! Je t'embrasse.", "It doesn't matter. See you Saturday, Mum! Love you."]
      ],
      glossary: [["un faire-part", "an announcement card (birth, wedding…)"], ["fier, fière", "proud"], ["Je n'ai pas pu…", "I couldn't…"], ["Je t'embrasse.", "love (to end a call or letter)"]]
    },
    {
      id: "d3", n: 3, title: "A family party", titleFr: "Une fête de famille · Joyeux anniversaire !",
      note: "It's Mamie's 80th birthday, and Hyacinthe has news. Listen to the wishes and the congratulations.",
      scene: "fete", people: { "Mamie": "f6", "Hyacinthe": "f8", "Yao": "k1", "Papa": "m3" }, wave: ["Hyacinthe"],
      lines: [
        ["Yao", "Joyeux anniversaire, mamie ! Quatre-vingts ans !", "Happy birthday, Granny! Eighty!"],
        ["Mamie", "Merci, mon chéri ! Oh, le beau gâteau !", "Thank you, darling! Oh, what a lovely cake!"],
        ["Papa", "Bon anniversaire, maman ! Et maintenant, Hyacinthe a une nouvelle à annoncer…", "Happy birthday, Mum! And now Hyacinthe has some news to announce…"],
        ["Hyacinthe", "Oui… Florent et moi, nous allons nous marier ! Le mariage, c'est en juin.", "Yes… Florent and I are going to get married! The wedding is in June."],
        ["Mamie", "Quelle bonne nouvelle ! Félicitations, ma chérie !", "What good news! Congratulations, darling!"],
        ["Papa", "Bravo ! Tous nos vœux de bonheur !", "Well done! All our best wishes for your happiness!"],
        ["Yao", "Super ! Moi, je vais être le témoin !", "Great! I'm going to be the witness!"],
        ["Hyacinthe", "Tu as douze ans, Yao ! Mais tu vas porter les alliances, d'accord ?", "You're twelve, Yao! But you'll carry the rings, OK?"]
      ],
      glossary: [["Joyeux anniversaire !", "happy birthday!"], ["se marier", "to get married"], ["Tous nos vœux de bonheur !", "all our best wishes!"], ["les alliances", "the wedding rings"]]
    },
    {
      id: "d4", n: 4, title: "Who is it? A guessing game", titleFr: "Qui est-ce ? · C'est un acteur belge",
      note: "Two friends play a guessing game about a famous person. Listen for [[C'est…]] (to identify) and [[Il est… / Il a…]] (to describe).",
      scene: "cafe", staff: "La serveuse", people: { "La serveuse": "f1", "Léa": "f7", "Tom": "m6" },
      lines: [
        ["Léa", "Je pense à une personne. C'est un acteur belge.", "I'm thinking of someone. He's a Belgian actor."],
        ["Tom", "Il est comment ? Il est grand ?", "What does he look like? Is he tall?"],
        ["Léa", "Il est assez grand, il est brun et un peu gros. Il a les yeux marron.", "He's quite tall, dark-haired and a bit plump. He has brown eyes."],
        ["Tom", "Il a une barbe ? Des lunettes ?", "Does he have a beard? Glasses?"],
        ["Léa", "Non. Il a l'air sérieux, mais il est très drôle ! Dans ses films, il est souvent agriculteur ou homme d'affaires.", "No. He looks serious, but he's very funny! In his films, he's often a farmer or a businessman."],
        ["Tom", "C'est François Damiens ?", "Is it François Damiens?"],
        ["Léa", "Non ! Lui aussi, il est belge et drôle, mais c'est Benoît Poelvoorde !", "No! He's Belgian and funny too, but it's Benoît Poelvoorde!"],
        ["Tom", "Ah, j'adore Benoît Poelvoorde ! C'est mon acteur préféré !", "Oh, I love Benoît Poelvoorde! He's my favourite actor!"]
      ],
      glossary: [["Il est comment ?", "what does he look like?"], ["les yeux marron", "brown eyes"], ["Il a l'air sérieux.", "he looks serious"], ["drôle", "funny"]]
    },
    {
      id: "d5", n: 5, title: "Love at first sight?", titleFr: "Une belle rencontre",
      note: "Florent tells his friend Stéphane about Lola, whom he met at Stéphane's wedding. Listen for the past (passé composé + [[hier]], [[la semaine dernière]]) and the future ([[demain]], [[la semaine prochaine]]).",
      scene: "ville", people: { "Stéphane": "m1", "Florent": "m3" },
      lines: [
        ["Stéphane", "Alors, Florent, tu as l'air très content !", "So, Florent, you look very happy!"],
        ["Florent", "Oui ! À ton mariage, il y a un mois, j'ai rencontré ta cousine Lola.", "Yes! At your wedding, a month ago, I met your cousin Lola."],
        ["Stéphane", "Lola ? Elle est sympa, mais elle est un peu timide, non ?", "Lola? She's nice, but she's a bit shy, isn't she?"],
        ["Florent", "Elle a l'air timide, mais en fait elle est très drôle et gentille ! Nous avons beaucoup ri. J'ai pris son numéro de téléphone.", "She looks shy, but in fact she's very funny and kind! We laughed a lot. I got her phone number."],
        ["Stéphane", "Et après ?", "And then?"],
        ["Florent", "La semaine dernière, nous avons bu un café ensemble. Et hier, nous avons dîné au restaurant.", "Last week we had a coffee together. And yesterday we had dinner at a restaurant."],
        ["Stéphane", "Et demain ?", "And tomorrow?"],
        ["Florent", "Demain, on va au cinéma ! Et la semaine prochaine, je vais lui présenter mes parents. Je suis amoureux, je crois !", "Tomorrow we're going to the cinema! And next week I'm going to introduce her to my parents. I think I'm in love!"]
      ],
      glossary: [["il y a un mois", "a month ago"], ["Nous avons beaucoup ri.", "we laughed a lot"], ["la semaine dernière ≠ prochaine", "last week ≠ next week"], ["amoureux, amoureuse", "in love"]]
    }
  ],

  vocab: [
    { t: "les parents", en: "parents; relatives", pic: "👫", cat: "La famille", g: "pl" },
    { t: "le père", en: "the father", pic: "👨", cat: "La famille", g: "m" },
    { t: "la mère", en: "the mother", pic: "👩", cat: "La famille", g: "f" },
    { t: "le fils", en: "the son", pic: "👦", cat: "La famille", g: "m", pr: "FEESS (l silent!)" },
    { t: "la fille", en: "the daughter", pic: "👧", cat: "La famille", g: "f" },
    { t: "le frère", en: "the brother", pic: "🧑", cat: "La famille", g: "m" },
    { t: "la sœur", en: "the sister", pic: "👩", cat: "La famille", g: "f" },
    { t: "le grand-père", en: "the grandfather", pic: "👴", cat: "La famille", g: "m", note: "familiar: [[papi]], [[pépé]]" },
    { t: "la grand-mère", en: "the grandmother", pic: "👵", cat: "La famille", g: "f", note: "familiar: [[mamie]], [[mémé]]" },
    { t: "les grands-parents", en: "the grandparents", pic: "👴👵", cat: "La famille", g: "pl" },
    { t: "le petit-fils, la petite-fille", en: "the grandson, granddaughter", pic: "🧒", cat: "La famille" },
    { t: "l'oncle", en: "the uncle", pic: "🧔", cat: "La famille", g: "m" },
    { t: "la tante", en: "the aunt", pic: "👩", cat: "La famille", g: "f" },
    { t: "le cousin, la cousine", en: "the cousin", pic: "🧑‍🤝‍🧑", cat: "La famille" },
    { t: "le neveu, la nièce", en: "the nephew, the niece", pic: "👶", cat: "La famille" },
    { t: "le mari", en: "the husband", pic: "🤵", cat: "La famille", g: "m" },
    { t: "la femme", en: "the wife; the woman", pic: "👰", cat: "La famille", g: "f" },
    { t: "le / la fils / fille unique", en: "only child", pic: "1️⃣", cat: "La famille" },
    { t: "le voisin, la voisine", en: "the neighbour", pic: "🏘️", cat: "L'entourage" },
    { t: "le / la collègue", en: "the colleague", pic: "💼", cat: "L'entourage" },
    { t: "le copain, la copine", en: "the friend (casual); boyfriend / girlfriend", pic: "🤙", cat: "L'entourage" },
    { t: "le / la meilleur(e) ami(e)", en: "best friend", pic: "💛", cat: "L'entourage" },
    { t: "célibataire", en: "single", pic: "🙋", cat: "La situation familiale" },
    { t: "en couple", en: "in a relationship", pic: "💑", cat: "La situation familiale" },
    { t: "marié(e)", en: "married", pic: "💍", cat: "La situation familiale" },
    { t: "pacsé(e)", en: "in a civil partnership (PACS)", pic: "📜", cat: "La situation familiale" },
    { t: "divorcé(e)", en: "divorced", pic: "💔", cat: "La situation familiale" },
    { t: "veuf, veuve", en: "widowed", pic: "🖤", cat: "La situation familiale" },
    { t: "la naissance", en: "birth", pic: "👶", cat: "Les événements de la vie", g: "f" },
    { t: "le mariage", en: "wedding; marriage", pic: "💒", cat: "Les événements de la vie", g: "m" },
    { t: "l'anniversaire", en: "birthday", pic: "🎂", cat: "Les événements de la vie", g: "m" },
    { t: "le faire-part", en: "announcement card", pic: "💌", cat: "Les événements de la vie", g: "m" },
    { t: "se marier", en: "to get married", pic: "💍", cat: "Les événements de la vie" },
    { t: "naître", en: "to be born", pic: "🍼", cat: "Les événements de la vie" },
    { t: "le décès", en: "death", pic: "🕯️", cat: "Les événements de la vie", g: "m" },
    { t: "Noël", en: "Christmas", pic: "🎄", cat: "Les fêtes", g: "m" },
    { t: "le jour de l'An", en: "New Year's Day", pic: "🎆", cat: "Les fêtes", g: "m" },
    { t: "la Saint-Valentin", en: "Valentine's Day", pic: "💝", cat: "Les fêtes", g: "f" },
    { t: "Pâques", en: "Easter", pic: "🥚", cat: "Les fêtes" },
    { t: "la fête du Travail", en: "Labour Day (1 May)", pic: "🌼", cat: "Les fêtes", g: "f" },
    { t: "la fête de la Musique", en: "Music Day (21 June)", pic: "🎶", cat: "Les fêtes", g: "f" },
    { t: "grand(e) ≠ petit(e)", en: "tall ≠ short", pic: "📏", cat: "Le physique" },
    { t: "mince ≠ gros(se)", en: "slim ≠ fat", pic: "⚖️", cat: "Le physique" },
    { t: "jeune ≠ âgé(e)", en: "young ≠ old", pic: "🧓", cat: "Le physique" },
    { t: "blond(e), brun(e), roux, rousse", en: "blond, dark-haired, red-haired", pic: "💇", cat: "Le physique" },
    { t: "les cheveux courts / longs", en: "short / long hair", pic: "💇‍♀️", cat: "Le physique", g: "pl" },
    { t: "les cheveux frisés / raides", en: "curly / straight hair", pic: "👩‍🦱", cat: "Le physique", g: "pl" },
    { t: "les yeux bleus / verts / marron", en: "blue / green / brown eyes", pic: "👀", cat: "Le physique", g: "pl" },
    { t: "une barbe, une moustache", en: "a beard, a moustache", pic: "🧔", cat: "Le physique" },
    { t: "avoir l'air…", en: "to look… (seem)", pic: "🤔", cat: "Le physique" },
    { t: "sympathique, sympa", en: "nice, friendly", pic: "😊", cat: "Le caractère" },
    { t: "gentil, gentille", en: "kind", pic: "🤗", cat: "Le caractère" },
    { t: "drôle", en: "funny", pic: "😂", cat: "Le caractère" },
    { t: "calme", en: "calm", pic: "😌", cat: "Le caractère" },
    { t: "timide", en: "shy", pic: "🙈", cat: "Le caractère" },
    { t: "intelligent(e)", en: "clever", pic: "🧠", cat: "Le caractère" },
    { t: "généreux, généreuse", en: "generous", pic: "🎁", cat: "Le caractère" },
    { t: "sérieux, sérieuse", en: "serious", pic: "🧐", cat: "Le caractère" },
    { t: "méchant(e)", en: "nasty, mean", pic: "😠", cat: "Le caractère" },
    { t: "amoureux, amoureuse", en: "in love", pic: "😍", cat: "Le caractère" }
  ],

  grammar: [
    {
      id: "g-famille",
      title: "The family tree · [[Chez moi, nous sommes cinq.]]",
      body: [
        "To present your family: [[J'ai une grande famille !]] · [[Chez moi, nous sommes trois.]] · [[J'ai un petit frère et une petite sœur.]] · [[Je n'ai pas de frère et sœur : je suis fils / fille unique.]]",
        "Hyacinthe's family tree: tap a person. The label under each name is their relation <b>to Hyacinthe</b> (highlighted in yellow)."
      ],
      info: { type: "tree", title: "🌳 L'arbre généalogique de Hyacinthe", rows: [
        [[{ n: "Joseph", k: "m4", rel: "son grand-père", say: "Joseph, son grand-père" }, { n: "Awa", k: "f6", rel: "sa grand-mère", say: "Awa, sa grand-mère" }]],
        [[{ n: "Jean", k: "m3", rel: "son père", say: "Jean, son père" }, { n: "Adjoua", k: "f4", rel: "sa mère", say: "Adjoua, sa mère" }], [{ n: "Koffi", k: "m2", rel: "son oncle", say: "Koffi, son oncle" }, { n: "Alphonsine", k: "f2", rel: "sa tante", say: "Alphonsine, sa tante" }]],
        [[{ n: "Hyacinthe", k: "f8", me: true, rel: "elle !", say: "Moi, c'est Hyacinthe." }], [{ n: "Yao", k: "k1", rel: "son petit frère", say: "Yao, son petit frère" }], [{ n: "Rita", k: "k2", rel: "sa petite sœur", say: "Rita, sa petite sœur" }], [{ n: "Bobby", k: "m7", rel: "son cousin", say: "Bobby, son cousin" }]]
      ], note: "Joseph and Awa are the <b>grands-parents</b>; Hyacinthe, Yao and Rita are their <b>petits-enfants</b>. For Jean, Bobby is his <b>neveu</b>; for Koffi, Rita is his <b>nièce</b>." },
      widget: {
        type: "sort", label: "Masculine or feminine? Sort the family",
        cols: [{ k: "m", label: "masculin", color: "var(--m)" }, { k: "f", label: "féminin", color: "var(--f)" }],
        items: [{ t: "oncle", k: "m", pic: "🧔", say: "l'oncle" }, { t: "tante", k: "f", pic: "👩", say: "la tante" }, { t: "neveu", k: "m", pic: "👦", say: "le neveu" }, { t: "nièce", k: "f", pic: "👧", say: "la nièce" }, { t: "mari", k: "m", pic: "🤵", say: "le mari" }, { t: "femme", k: "f", pic: "👰", say: "la femme" }, { t: "petit-fils", k: "m", pic: "🧒", say: "le petit-fils" }, { t: "grand-mère", k: "f", pic: "👵", say: "la grand-mère" }]
      }
    },
    {
      id: "g-possessifs",
      title: "Possessives: [[mon]], [[ma]], [[mes]] · [[notre]], [[votre]], [[leur]]",
      body: [
        "The possessive agrees with the <b>thing owned</b>, not with the owner: [[son frère]] = his <i>or</i> her brother, [[sa sœur]] = his <i>or</i> her sister. [[Koffi et sa femme]] = Koffi and his wife.",
        "Before a feminine noun starting with a vowel or silent h, use the masculine form to avoid two vowels: [[mon amie]], [[ton école]], [[son histoire]] (not <s>ma amie</s>).",
        "For several owners: [[notre / nos]], [[votre / vos]], [[leur / leurs]]: [[Nous habitons avec nos parents.]] · [[Leur fils s'appelle Bobby.]]"
      ],
      info: { type: "gender", title: "👪 One owner or several · masculine, feminine, plural", cols: [
        { g: "m", badge: "masc. sing.", head: "mon · ton · son", items: ["mon père", "ton frère", "son oncle", "notre fils", "votre cousin", "leur neveu"], note: "+ feminine before a vowel: [[mon amie]], [[son école]]" },
        { g: "f", badge: "fém. sing.", head: "ma · ta · sa", items: ["ma mère", "ta sœur", "sa tante", "notre fille", "votre cousine", "leur nièce"] },
        { g: "pl", badge: "pluriel", head: "mes · tes · ses", items: ["mes parents", "tes frères", "ses cousins", "nos voisins", "vos enfants", "leurs amis"], note: "Liaison: [[mes_amis]], [[nos_enfants]] (z)." }
      ] },
      widget: {
        type: "combo", label: "Whose is it? · pick an owner and a family member",
        rows: [{ k: "je", label: "🙋 je" }, { k: "tu", label: "👉 tu" }, { k: "il", label: "👤 il / elle" }, { k: "nous", label: "👥 nous" }, { k: "vous", label: "🫵 vous" }, { k: "ils", label: "👪 ils / elles" }],
        cols: [{ k: "pere", label: "👨 père" }, { k: "mere", label: "👩 mère" }, { k: "amie", label: "👭 amie" }, { k: "parents", label: "👫 parents" }],
        out: {
          "je|pere": ["mon père", "my father"], "je|mere": ["ma mère", "my mother"], "je|amie": ["mon amie", "my (female) friend", "vowel → mon, even for a feminine noun"], "je|parents": ["mes parents", "my parents"],
          "tu|pere": ["ton père", "your father"], "tu|mere": ["ta mère", "your mother"], "tu|amie": ["ton amie", "your friend", "vowel → ton"], "tu|parents": ["tes parents", "your parents"],
          "il|pere": ["son père", "his / her father", "son = his OR her"], "il|mere": ["sa mère", "his / her mother", "sa = his OR her"], "il|amie": ["son amie", "his / her friend"], "il|parents": ["ses parents", "his / her parents"],
          "nous|pere": ["notre père", "our father"], "nous|mere": ["notre mère", "our mother", "same form m / f"], "nous|amie": ["notre amie", "our friend"], "nous|parents": ["nos parents", "our parents"],
          "vous|pere": ["votre père", "your father"], "vous|mere": ["votre mère", "your mother"], "vous|amie": ["votre amie", "your friend"], "vous|parents": ["vos parents", "your parents"],
          "ils|pere": ["leur père", "their father"], "ils|mere": ["leur mère", "their mother"], "ils|amie": ["leur amie", "their friend"], "ils|parents": ["leurs parents", "their parents", "leur + s in the plural"]
        }
      }
    },
    {
      id: "g-pc",
      title: "The past: passé composé with [[avoir]] · [[J'ai téléphoné.]]",
      body: [
        "The passé composé tells about a <b>finished action</b> in the past. It has two parts: [[avoir]] in the present + the <b>past participle</b>: [[J'ai téléphoné.]] · [[Nous avons reçu ton faire-part.]]",
        "Past participles of <b>-er verbs</b> end in <b>-é</b> (same sound as the infinitive!): [[téléphoner]] → [[téléphoné]], [[acheter]] → [[acheté]], [[dîner]] → [[dîné]]. Others must be learned: [[avoir]] → [[eu]], [[être]] → [[été]], [[faire]] → [[fait]], [[prendre]] → [[pris]], [[boire]] → [[bu]], [[voir]] → [[vu]], [[lire]] → [[lu]], [[recevoir]] → [[reçu]], [[pouvoir]] → [[pu]], [[rire]] → [[ri]].",
        "Negative: <b>ne… pas</b> goes around <b>avoir</b>: [[Je n'ai pas pu venir.]] · [[Nous n'avons pas dîné.]]"
      ],
      info: [
        { type: "conj", title: "🔁 téléphoner in the passé composé", verbs: [
          { inf: "téléphoner", en: "to phone → avoir + téléphoné", forms: ["j'ai téléphon|é", "tu as téléphon|é", "il / elle a téléphon|é", "nous avons téléphon|é", "vous avez téléphon|é", "ils / elles ont téléphon|é"] },
          { inf: "prendre", en: "to take → avoir + pris", forms: ["j'ai pris", "tu as pris", "il / elle a pris", "nous avons pris", "vous avez pris", "ils / elles ont pris"] }
        ] },
        { type: "merge", title: "⚙️ Infinitive → past participle", rows: [
          { a: "dîner", b: "-er", g: "x", r: "dîné", ex: "Hier, nous avons dîné ensemble.", en: "-er → -é" },
          { a: "faire", b: "!", g: "f", r: "fait", ex: "Ils ont fait la cuisine." },
          { a: "prendre", b: "!", g: "f", r: "pris", ex: "J'ai pris son numéro." },
          { a: "boire", b: "!", g: "f", r: "bu", ex: "Nous avons bu un café." },
          { a: "voir", b: "!", g: "f", r: "vu", ex: "Tu as vu la photo ?" },
          { a: "recevoir", b: "!", g: "f", r: "reçu", ex: "Nous avons reçu le faire-part." },
          { a: "pouvoir", b: "!", g: "f", r: "pu", ex: "Je n'ai pas pu venir." },
          { a: "rire", b: "!", g: "f", r: "ri", ex: "Nous avons beaucoup ri." }
        ] }
      ],
      widget: {
        type: "combo", label: "Tell the story · pick a person and an action",
        rows: [{ k: "je", label: "j'" }, { k: "il", label: "il / elle" }, { k: "nous", label: "nous" }, { k: "ils", label: "ils" }, { k: "neg", label: "❌ je (negative)" }],
        cols: [{ k: "tel", label: "☎️ téléphoner" }, { k: "cadeau", label: "🎁 acheter un cadeau" }, { k: "voir", label: "👀 voir la photo" }, { k: "cafe", label: "☕ boire un café" }],
        out: {
          "je|tel": ["J'ai téléphoné à ma tante.", "I phoned my aunt."], "il|tel": ["Elle a téléphoné à sa mère.", "She phoned her mother."], "nous|tel": ["Nous avons téléphoné à nos parents.", "We phoned our parents."], "ils|tel": ["Ils ont téléphoné à leur fils.", "They phoned their son.", "liaison: ils_ont (z)"], "neg|tel": ["Je n'ai pas téléphoné.", "I didn't phone.", "n' + ai + pas + participle"],
          "je|cadeau": ["J'ai acheté un cadeau.", "I bought a present."], "il|cadeau": ["Il a acheté un cadeau pour le bébé.", "He bought a present for the baby."], "nous|cadeau": ["Nous avons acheté un cadeau.", "We bought a present."], "ils|cadeau": ["Ils ont acheté un cadeau.", "They bought a present."], "neg|cadeau": ["Je n'ai pas acheté de cadeau.", "I didn't buy a present.", "un → de after a negative"],
          "je|voir": ["J'ai vu la photo.", "I saw the photo.", "voir → vu"], "il|voir": ["Elle a vu la photo de Léon.", "She saw Léon's photo."], "nous|voir": ["Nous avons vu la photo.", "We saw the photo."], "ils|voir": ["Ils ont vu la photo.", "They saw the photo."], "neg|voir": ["Je n'ai pas vu la photo.", "I didn't see the photo."],
          "je|cafe": ["J'ai bu un café.", "I had a coffee.", "boire → bu"], "il|cafe": ["Il a bu un café avec Lola.", "He had a coffee with Lola."], "nous|cafe": ["Nous avons bu un café ensemble.", "We had a coffee together."], "ils|cafe": ["Ils ont bu un café.", "They had a coffee."], "neg|cafe": ["Je n'ai pas bu de café.", "I didn't have any coffee."]
        }
      }
    },
    {
      id: "g-temps",
      title: "When? [[hier]], [[il y a un mois]] · [[demain]], [[dans trois jours]]",
      body: [
        "Past markers go with the passé composé: [[hier]], [[la semaine dernière]], [[le mois dernier]], [[il y a trois jours]] (three days ago). Future markers go with the futur proche or the present: [[demain]], [[la semaine prochaine]], [[dans trois jours]] (in three days' time).",
        "⚠️ [[il y a]] + a length of time = <i>ago</i> (past); [[dans]] + a length of time = <i>in</i> (future)."
      ],
      info: { type: "timeline", title: "🗓️ Florent and Lola's story", ends: ["passé", "aujourd'hui", "futur"], items: [
        { x: 8, fr: "Il y a un mois, j'ai rencontré Lola.", en: "A month ago, I met Lola.", pic: "💒" },
        { x: 26, fr: "La semaine dernière, nous avons bu un café.", en: "Last week we had a coffee.", pic: "☕" },
        { x: 42, fr: "Hier, nous avons dîné au restaurant.", en: "Yesterday we had dinner out.", pic: "🍽️" },
        { x: 62, fr: "Demain, on va au cinéma.", en: "Tomorrow we're going to the cinema.", pic: "🎬" },
        { x: 80, fr: "La semaine prochaine, je vais lui présenter mes parents.", en: "Next week I'll introduce her to my parents.", pic: "👪" },
        { x: 95, fr: "Dans trois mois…", en: "In three months…?", pic: "💍" }
      ] },
      widget: {
        type: "sort", label: "Past or future? Sort the time markers",
        cols: [{ k: "p", label: "⬅️ passé", color: "#5b6b7c" }, { k: "f", label: "futur ➡️", color: "#e86a2e" }],
        items: [{ t: "hier", k: "p" }, { t: "demain", k: "f" }, { t: "il y a deux jours", k: "p" }, { t: "dans deux jours", k: "f" }, { t: "la semaine dernière", k: "p" }, { t: "la semaine prochaine", k: "f" }, { t: "le mois dernier", k: "p" }, { t: "l'année prochaine", k: "f" }]
      }
    },
    {
      id: "g-cest",
      title: "Identify or describe? [[C'est un acteur]] · [[Il est acteur]]",
      body: [
        "To <b>identify</b> someone, use [[C'est]] + a name or [[C'est]] + <b>un / une / mon…</b> + noun: [[C'est Benoît Poelvoorde.]] · [[C'est un acteur belge.]] · [[C'est mon acteur préféré.]] Plural: [[Ce sont mes cousins.]]",
        "To <b>describe</b> someone, use [[Il / Elle est]] (or [[Ils / Elles sont]]) + an adjective, or a job with <b>no article</b>: [[Il est brun et un peu gros.]] · [[Elle est médecin.]] · [[Il est belge.]]",
        "Both are possible for a job, but not mixed: [[Il est agriculteur.]] = [[C'est un agriculteur.]] (never <s>il est un agriculteur</s>)."
      ],
      info: [
        { type: "compare", title: "🔎 C'est… or Il est… ?", cols: [
          { head: "C'est / Ce sont", en: "+ name, or + article + noun", color: "#9b4fb0", lines: [["C'est Benoît Poelvoorde.", "name"], ["C'est un acteur belge.", "un + noun (+ adjective)"], ["C'est mon acteur préféré.", "mon + noun"], ["Ce sont mes cousins.", "plural"]] },
          { head: "Il / Elle est", en: "+ adjective or job (no article)", color: "#2f9c8a", lines: [["Il est grand et brun.", "adjectives"], ["Elle est médecin.", "job, no article"], ["Il est belge.", "nationality"], ["Elles sont minces.", "plural"]] }
        ] },
        { type: "pics", title: "🧑 Describing someone · tap to hear", items: [
          { t: "Il est grand.", pic: "🧍‍♂️⬆️", en: "He's tall." }, { t: "Elle est petite.", pic: "🧍‍♀️⬇️", en: "She's short." }, { t: "Elle est blonde.", pic: "👱‍♀️", en: "She's blonde." }, { t: "Il est brun.", pic: "🧑🏻", en: "He's dark-haired." },
          { t: "Elle est rousse.", pic: "👩‍🦰", en: "She's red-haired." }, { t: "Elle a les cheveux frisés.", pic: "👩‍🦱", en: "She has curly hair." }, { t: "Il a une barbe.", pic: "🧔", en: "He has a beard." }, { t: "Il a les yeux bleus.", pic: "👀", en: "He has blue eyes." },
          { t: "Il porte des lunettes.", pic: "🤓", en: "He wears glasses." }, { t: "Elle a l'air stressée.", pic: "😰", en: "She looks stressed." }
        ] }
      ],
      widget: {
        type: "sort", label: "C'est or Il / Elle est? Sort the endings",
        cols: [{ k: "c", label: "C'est…", color: "#9b4fb0" }, { k: "i", label: "Il / Elle est…", color: "#2f9c8a" }],
        items: [{ t: "… un acteur belge.", k: "c", say: "C'est un acteur belge." }, { t: "… très drôle.", k: "i", say: "Il est très drôle." }, { t: "… Lola.", k: "c", say: "C'est Lola." }, { t: "… médecin.", k: "i", say: "Elle est médecin." }, { t: "… ma meilleure amie.", k: "c", say: "C'est ma meilleure amie." }, { t: "… grande et mince.", k: "i", say: "Elle est grande et mince." }, { t: "… française.", k: "i", say: "Elle est française." }, { t: "… une fille sympathique.", k: "c", say: "C'est une fille sympathique." }]
      }
    },
    {
      id: "g-voeux",
      title: "Congratulations and wishes",
      body: [
        "To congratulate: [[Bravo !]] · [[Félicitations !]] · [[Quelle bonne nouvelle !]] · [[Je te / vous félicite !]] · for a wedding: [[Tous nos vœux de bonheur !]]",
        "To wish someone well: [[Joyeux Noël !]] · [[Bonne année !]] · [[Meilleurs vœux !]] · [[Joyeux anniversaire !]] / [[Bon anniversaire !]] · [[Bonne fête !]] (name day, or Mother's Day…)."
      ],
      info: { type: "pics", title: "🎉 Le calendrier des fêtes · tap to hear the wish", items: [
        { t: "Bonne année !", pic: "🎆", en: "1 January · le jour de l'An" }, { t: "Joyeuse Saint-Valentin !", pic: "💝", en: "14 February" }, { t: "Joyeuses Pâques !", pic: "🥚", en: "Easter (March / April)" }, { t: "Bonne fête du Travail !", pic: "🌼", en: "1 May · people give lily of the valley" },
        { t: "C'est la fête de la Musique !", pic: "🎶", en: "21 June · free concerts everywhere" }, { t: "Bonne fête nationale !", pic: "🇫🇷", en: "14 July" }, { t: "Joyeux Noël !", pic: "🎄", en: "25 December" }, { t: "Joyeux anniversaire !", pic: "🎂", en: "your birthday" }
      ] }
    }
  ],

  expressions: [
    { fn: "Pour présenter sa famille", fnEn: "your family", icon: "👪", items: [
      ["J'ai une grande famille !", "I have a big family!", "std", true],
      ["Chez moi, nous sommes trois.", "There are three of us at home.", "std", true],
      ["J'ai un petit frère et une petite sœur.", "I have a younger brother and a younger sister.", "std"],
      ["Je n'ai pas de frère et sœur : je suis fils / fille unique.", "I have no brothers or sisters: I'm an only child.", "std", true],
      ["Je suis marié(e), j'ai deux enfants.", "I'm married, I have two children.", "std"]
    ] },
    { fn: "Pour féliciter", fnEn: "congratulating", icon: "👏", items: [
      ["Bravo ! Félicitations !", "Well done! Congratulations!", "std", true],
      ["Quelle bonne nouvelle !", "What good news!", "std", true],
      ["Je te félicite ! / Je vous félicite !", "Congratulations to you!", "std"],
      ["Tous nos vœux de bonheur !", "All our best wishes! (wedding)", "sout"]
    ] },
    { fn: "Pour adresser un souhait", fnEn: "wishes", icon: "🎉", items: [
      ["Joyeux Noël !", "Merry Christmas!", "std", true],
      ["Bonne année ! Meilleurs vœux !", "Happy New Year! Best wishes!", "std", true],
      ["Joyeux anniversaire ! / Bon anniversaire !", "Happy birthday!", "std", true],
      ["Bonne fête !", "Happy name day / Mother's Day…", "std"]
    ] },
    { fn: "Pour décrire quelqu'un", fnEn: "appearance", icon: "🧑", items: [
      ["Il / Elle est petit(e) ≠ grand(e).", "He / she is short ≠ tall.", "std", true],
      ["Il / Elle est mince ≠ gros(se).", "He / she is slim ≠ fat.", "std"],
      ["Elle a les yeux bleus.", "She has blue eyes.", "std", true],
      ["Il / Elle est blond(e).", "He / she is blond.", "std"],
      ["Il / Elle a les cheveux courts et frisés.", "He / she has short curly hair.", "std"],
      ["Il / Elle a l'air stressé(e).", "He / she looks stressed.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · announcing good news", lanes: ["Hyacinthe", "Mamie"], av: ["f8", "f6"], steps: [
    { s: 0, fr: "Mamie, j'ai une nouvelle à t'annoncer !", en: "Granny, I have some news to tell you!" },
    { s: 1, fr: "Ah bon ? Qu'est-ce que c'est ?", en: "Really? What is it?" },
    { s: 0, fr: "Florent et moi, nous allons nous marier !", en: "Florent and I are getting married!", alt: ["J'ai eu un bébé !", "J'ai trouvé un travail !"] },
    { s: 1, fr: "Quelle bonne nouvelle ! Félicitations !", en: "What good news! Congratulations!", alt: ["Bravo !", "Je te félicite !"] },
    { s: 0, fr: "Merci ! Le mariage, c'est en juin.", en: "Thank you! The wedding is in June." },
    { s: 1, fr: "Tous mes vœux de bonheur, ma chérie !", en: "All my best wishes, darling!" }
  ] },

  sounds: {
    intro: "French has three nasal vowels at A1 level. The air goes through your nose, and you don't pronounce the n or m.",
    letters: [
      { l: "an · en · am · em", name: "[ɑ̃]", tip: "Mouth wide open, like “ah” through the nose: [[la tante]], [[les parents]], [[la chambre]], [[ensemble]]. <b>m</b> replaces <b>n</b> before b and p.", ex: ["la tante", "les parents", "ensemble", "un enfant"] },
      { l: "on · om", name: "[ɔ̃]", tip: "Lips rounded, like “oh” through the nose: [[mon oncle]], [[le prénom]], [[le nom]], [[bonjour]].", ex: ["mon oncle", "le prénom", "son garçon", "nous avons"] },
      { l: "in · ain · ein · im · ym", name: "[ɛ̃]", tip: "Mouth spread, like the “a” of “bang” through the nose: [[le matin]], [[le copain]], [[plein]], [[impossible]], [[olympique]].", ex: ["le matin", "mon copain", "demain", "intelligent"] },
      { l: "-on / -onne", name: "nasal → oral", tip: "With a double n or an e after, the vowel is <b>no longer nasal</b> and you hear the n: [[bon]] / [[bonne]], [[mignon]] / [[mignonne]], [[cousin]] / [[cousine]].", ex: ["bon, bonne", "cousin, cousine", "américain, américaine", "brun, brune"] }
    ],
    pairs: [
      { a: ["la tante", "the aunt"], b: ["le temps", "the time"], note: "[t] at the end / silent" },
      { a: ["blanc", "white"], b: ["blond", "blond"], note: "[ɑ̃] / [ɔ̃]" },
      { a: ["les parents", "the parents"], b: ["le pain", "the bread"], note: "[ɑ̃] / [ɛ̃]" },
      { a: ["son", "his / her"], b: ["sans", "without"], note: "[ɔ̃] / [ɑ̃]" },
      { a: ["mon cousin", "my cousin (m)"], b: ["ma cousine", "my cousin (f)"], note: "nasal / n heard" },
      { a: ["ils ont", "they have"], b: ["ils sont", "they are"], note: "[z] / [s]" }
    ]
  },
  classify: {
    label: "⏱️ Passé ou futur ?", q: "Is the person talking about the past or the future?",
    options: ["⬅️ passé", "futur ➡️"],
    items: [
      { say: "Hier, nous avons dîné au restaurant.", a: 0 }, { say: "Demain, on va au cinéma.", a: 1 }, { say: "J'ai rencontré Lola il y a un mois.", a: 0 },
      { say: "La semaine prochaine, je vais présenter mes parents.", a: 1 }, { say: "Nous avons reçu ton faire-part.", a: 0 }, { say: "Nous venons dans trois jours.", a: 1 },
      { say: "Ton père a acheté un cadeau.", a: 0 }, { say: "Le mariage, c'est en juin prochain.", a: 1 }, { say: "La semaine dernière, nous avons bu un café.", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Chez Hyacinthe, ils sont cinq.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Bobby est le frère de Hyacinthe.", ok: false, explain: "Bobby is her [[cousin]], the son of Koffi and Alphonsine." },
    { type: "tf", tag: "Dialogue 1", s: "Marie est fille unique.", ok: true },
    { type: "tf", tag: "Dialogue 2", s: "Stéphanie a eu un bébé.", ok: true, explain: "a boy called Léon" },
    { type: "tf", tag: "Dialogue 2", s: "Les parents de Stéphanie viennent demain.", ok: false, explain: "[[Dans trois jours !]]" },
    { type: "mcq", tag: "Dialogue 3", q: "Quelle est la nouvelle de Hyacinthe ?", options: ["Elle va se marier.", "Elle a eu un bébé.", "Elle a quatre-vingts ans."], answer: 0 },
    { type: "mcq", tag: "Dialogue 4", q: "Benoît Poelvoorde est…", options: ["grand, brun et drôle", "petit, blond et timide", "roux avec une barbe"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Florent et Lola ont dîné ensemble hier.", ok: true },
    { type: "fill", tag: "Possessifs", sentence: "Chez moi, il y a ___ parents, mon frère et ma sœur.", options: ["mes", "ses", "mon"], answer: 0 },
    { type: "fill", tag: "Possessifs", sentence: "Koffi et ___ femme Alphonsine.", options: ["son", "sa", "leur"], answer: 1, explain: "femme is feminine → [[sa]] (his wife)" },
    { type: "fill", tag: "Possessifs", sentence: "Elle habite avec ___ amie Inès.", options: ["sa", "son", "ses"], answer: 1, explain: "vowel → [[son amie]]" },
    { type: "fill", tag: "Possessifs", sentence: "Nous habitons avec ___ parents.", options: ["notre", "nos", "leurs"], answer: 1 },
    { type: "fill", tag: "Possessifs", sentence: "Ils habitent à Abidjan, et ___ enfants habitent à Paris.", options: ["son", "leur", "leurs"], answer: 2 },
    { type: "fill", tag: "Possessifs", sentence: "Hervé ! Tu me présentes ___ cousine ?", options: ["ta", "son", "votre"], answer: 0 },
    { type: "type", tag: "Possessifs", q: "« J'ai un chien. » → C'est ___ chien.", answers: ["mon", "C'est mon chien."] },
    { type: "type", tag: "Possessifs", q: "« Nous avons une maison. » → C'est ___ maison.", answers: ["notre", "C'est notre maison."] },
    { type: "fill", tag: "Passé composé", sentence: "Ils ___ appelé leur grand-mère.", options: ["ont", "sont", "a"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "J'ai ___ son numéro de téléphone.", options: ["prendu", "pris", "prenu"], answer: 1 },
    { type: "fill", tag: "Passé composé", sentence: "Nous avons ___ le faire-part.", options: ["reçu", "recevé", "reçé"], answer: 0 },
    { type: "fill", tag: "Passé composé", sentence: "Ils ont ___ la cuisine le week-end dernier.", options: ["fait", "faité", "faisé"], answer: 0 },
    { type: "type", tag: "Passé composé", q: "Passé composé: « Nous (danser) au bal hier soir. » → Nous …", answers: ["Nous avons dansé au bal hier soir.", "avons dansé", "Nous avons dansé au bal hier soir"] },
    { type: "type", tag: "Passé composé", q: "Negative: « J'ai pu venir. » → …", answers: ["Je n'ai pas pu venir.", "Je n'ai pas pu venir"] },
    { type: "fill", tag: "Indicateurs de temps", sentence: "___, j'ai vu ma cousine.", options: ["Hier", "Demain"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "J'ai rencontré Florent ___ un mois.", options: ["il y a", "dans"], answer: 0 },
    { type: "fill", tag: "Indicateurs de temps", sentence: "Mes parents arrivent ___ trois jours.", options: ["il y a", "dans"], answer: 1 },
    { type: "fill", tag: "C'est / Il est", sentence: "___ un acteur belge.", options: ["C'est", "Il est"], answer: 0 },
    { type: "fill", tag: "C'est / Il est", sentence: "___ brun et un peu gros.", options: ["C'est", "Il est"], answer: 1 },
    { type: "fill", tag: "C'est / Il est", sentence: "Elle ___ chanteuse.", options: ["est", "est une"], answer: 0, explain: "job after il / elle est: no article" },
    { type: "fill", tag: "C'est / Il est", sentence: "___ ma meilleure amie.", options: ["C'est", "Elle est"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Nous allons nous marier !", options: ["Félicitations ! Tous nos vœux de bonheur !", "Joyeux Noël !", "Je n'ai pas pu venir."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Il est comment, ton copain ?", options: ["Il est grand, il a les yeux verts et il est très gentil.", "C'est un copain.", "Il est à Paris."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Le fils de mon frère, c'est mon…", options: ["neveu", "cousin", "oncle"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Vocabulaire", q: "La mère de ma mère, c'est ma…", options: ["tante", "grand-mère", "nièce"], answer: 1, sayAnswer: true },
    { type: "mcq", tag: "Vocabulaire", q: "On dit « Bonne année ! »…", options: ["le 1er janvier", "le 25 décembre", "le 14 juillet"], answer: 0 },
    { type: "order", tag: "Construisez", en: "Yesterday we had dinner together.", words: ["Hier,", "nous", "avons", "dîné", "ensemble."] }
  ],

  roleplays: [
    { title: "👪 Présente ta famille", brief: "A new friend asks about your family. Use possessives (invent if you like!).", memo: ["nous sommes…", "mon / ma / mes", "il / elle s'appelle…, il / elle a… ans"], partner: "f3", you: "f8",
      turns: [
        { them: "Tu as une grande famille ?", themEn: "Do you have a big family?", hint: "Say how many you are at home.", you: "Oui ! Chez moi, nous sommes cinq : mes parents, mes deux frères et moi.", youEn: "Yes! There are five of us at home: my parents, my two brothers and me." },
        { them: "Tes frères, ils ont quel âge ?", themEn: "How old are your brothers?", hint: "Give their names and ages.", you: "Mon grand frère s'appelle Paul, il a vingt-cinq ans. Mon petit frère, Léo, a quinze ans.", youEn: "My older brother is Paul, he's 25. My little brother Léo is 15." },
        { them: "Et tes grands-parents ?", themEn: "And your grandparents?", hint: "Say where they live.", you: "Mes grands-parents habitent à la campagne. Leur maison est très grande !", youEn: "My grandparents live in the country. Their house is very big!" }
      ] },
    { title: "👶 Une bonne nouvelle", brief: "Your colleague tells you she's just had a baby. Congratulate her and ask questions.", memo: ["Félicitations !", "C'est une fille ou un garçon ?", "Il / Elle s'appelle comment ?"], partner: "f5", you: "m1",
      turns: [
        { them: "J'ai une grande nouvelle : j'ai eu un bébé !", themEn: "I have big news: I've had a baby!", hint: "React with enthusiasm and congratulate her.", you: "Quelle bonne nouvelle ! Félicitations !", youEn: "What good news! Congratulations!" },
        { them: "Merci ! C'est un petit garçon.", themEn: "Thank you! It's a little boy.", hint: "Ask his name.", you: "Il s'appelle comment ?", youEn: "What's his name?" },
        { them: "Il s'appelle Léon. Regarde la photo !", themEn: "His name is Léon. Look at the photo!", hint: "Describe the baby: he looks… / he has… eyes.", you: "Oh, il est magnifique ! Il a les yeux bleus, comme toi !", youEn: "Oh, he's beautiful! He has blue eyes, like you!" }
      ] },
    { title: "💌 Raconte ta rencontre", brief: "Tell a friend about someone you met: when, where, what you did, and what's next.", memo: ["il y a…", "j'ai rencontré…", "hier / la semaine dernière", "demain / la semaine prochaine"], partner: "m1", you: "m3",
      turns: [
        { them: "Tu as l'air content ! Qu'est-ce qui se passe ?", themEn: "You look happy! What's going on?", hint: "Say you met someone two weeks ago, at a party.", you: "Il y a deux semaines, j'ai rencontré une fille super à une fête !", youEn: "Two weeks ago I met a great girl at a party!" },
        { them: "Elle est comment ?", themEn: "What's she like?", hint: "Describe her looks and character.", you: "Elle est grande, elle a les cheveux frisés, et elle est très drôle et intelligente.", youEn: "She's tall, she has curly hair, and she's very funny and clever." },
        { them: "Et vous avez fait quoi ?", themEn: "And what did you do?", hint: "Say what you did yesterday (passé composé).", you: "Hier, nous avons dîné au restaurant et nous avons beaucoup ri.", youEn: "Yesterday we had dinner at a restaurant and laughed a lot." },
        { them: "Et après ?", themEn: "And next?", hint: "Say what you're going to do tomorrow.", you: "Demain, on va voir un concert !", youEn: "Tomorrow we're going to see a concert!" }
      ] }
  ],

  ateliers: [
    { title: "Créer les personnages d'une famille pour un film", intro: "You're screenwriters! In groups, invent the family at the heart of a film: comedy, thriller, drama…",
      steps: [["Préparation", ["Choose the type of film and give it a title.", "Decide who is in the family: grandparents, parents, children, an eccentric uncle…"]], ["Réalisation", ["Make a card for each character: name, age, job, nationality, appearance, character, family link.", "Example: [[C'est Jacques Merinos. C'est un gangster belge. Il a 37 ans. Il est blond et moustachu. Il est méchant mais très intelligent. C'est le frère d'Alexia.]]"]], ["Présentation", ["Each group presents its family to the class with a family tree.", "Vote: the funniest family, the most serious, the most mysterious…"]]],
      phrases: ["C'est le père de…", "Il est grand et brun.", "Elle a l'air gentille, mais…"],
      model: { type: "form", style: "fiche", title: "PERSONNAGE · « LA FAMILLE MERINOS »", photo: "m5", fields: [["Nom", "Jacques Merinos"], ["Âge", "37 ans", "trente-sept ans"], ["Profession", "gangster (!)"], ["Nationalité", "belge"], ["Physique", "blond, moustachu, yeux bleus, lunettes", "Il est blond et moustachu, il a les yeux bleus et des lunettes."], ["Caractère", "méchant mais très intelligent", "Il est méchant mais très intelligent."], ["Famille", "le frère d'Alexia Merinos"]] } },
    { title: "Créer une affiche pour une fête", tech: true, intro: "Design a poster (with a word processor or a design app) to invite people to a party you organise.",
      steps: [["Préparation", ["Choose the event: a birthday, a wedding, New Year, Music Day…", "Define your party: theme, fancy dress (<i>il faut se déguiser ?</i>), food, music."]], ["Réalisation", ["Choose the date, time and place.", "Find illustrations and design the poster with all the information."]], ["Présentation", ["Print or project your poster and present your party to the class.", "Vote for your favourite poster!"]]],
      phrases: ["Venez fêter…", "Rendez-vous le… à…", "Il faut se déguiser !"],
      model: { type: "card", style: "board", title: "🎉 FÊTE DE LA MUSIQUE 🎶", sub: "Venez jouer, chanter, danser !", rows: [["Quand ?", "samedi 21 juin, à partir de 19 h"], ["Où ?", "dans le jardin de la résidence"], ["Apportez", "un instrument et un plat à partager"], ["Thème", "années 80 · déguisement conseillé !"]], foot: "Réponse avant le 15 juin · fete.residence@mail.fr" } }
  ],
  delf: {
    skill: "Production écrite", title: "Exercise 2 · write a short message (about 40 words)",
    about: "In the DELF A1 written paper (30 minutes), exercise 2 asks you to write a short personal message: an invitation, a reply to an invitation, a note to your neighbours, a card. Read the model, then test yourself on the conventions.",
    tips: ["Read the instruction carefully: who are you writing to, and why?", "Take time for exercise 2: it's worth more points than the form.", "Start and end like a real message: <i>Salut ! / Bonjour / Cher Cédric,</i> … <i>Bisous ! / À bientôt ! / Je t'embrasse.</i>", "Answer every point of the instruction (date, time, place, what to bring…) and count your words."],
    docs: [{ type: "sms", title: "✉️ A model answer: Stéphanie invites her friends", with: "À : Inès, Marc, Julie", msgs: [{ me: true, t: "Salut à tous ! Léon est né le 3 mai : nous organisons une petite fête pour vous présenter notre bébé ! C'est samedi 17 mai, à 16 h, chez nous, 12 rue des Lilas. Apportez un gâteau si vous voulez ! Vous êtes libres ? Je vous embrasse, Stéphanie" }] }],
    items: [
      { type: "mcq", q: "You write to a friend. Which opening is right?", options: ["Salut Marc !", "Monsieur,", "Madame, Monsieur,"], answer: 0 },
      { type: "mcq", q: "Which ending is right for a message to friends?", options: ["Bisous !", "Veuillez agréer mes salutations distinguées.", "Bonne nuit, monsieur."], answer: 0 },
      { type: "mcq", q: "In Stéphanie's invitation, which information is missing?", options: ["nothing: what, when, where and why are all there", "the time", "the address"], answer: 0 },
      { type: "mcq", q: "You reply to accept. Which sentence works?", options: ["Avec plaisir, je viens samedi ! J'apporte une tarte.", "Je suis né le 3 mai.", "Désolé, il pleut."], answer: 0 },
      { type: "mcq", q: "You reply to refuse politely. Which sentence works?", options: ["Désolée, je ne peux pas venir : je travaille samedi. Félicitations pour Léon !", "Non.", "Je ne veux pas, bisous."], answer: 0 },
      { type: "mcq", q: "« Je t'embrasse » at the end of a message means…", options: ["love / best wishes (friendly)", "I'm kissing you right now", "see you tomorrow"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "💝 « Les Français, romantiques ? » (survey quoted by the book)", unit: " %", items: [
      { fr: "des couples français fêtent la Saint-Valentin", en: "of French couples celebrate Valentine's Day", v: 51, pic: "🇫🇷" },
      { fr: "des couples anglais fêtent la Saint-Valentin", en: "of English couples do", v: 61, pic: "🇬🇧" },
      { fr: "dînent au restaurant", en: "go out for dinner", v: 37, pic: "🍽️" },
      { fr: "offrent un bouquet de fleurs", en: "give a bunch of flowers", v: 25, pic: "💐" },
      { fr: "offrent un parfum", en: "give perfume", v: 22, pic: "🌸" }
    ], note: "The last three lines are the most popular gifts or plans of the couples who celebrate." }
  ],
  culture: [
    { icon: "💝", kind: "Oh, le cliché !", t: "« Les Français, romantiques ? »", d: "Only about half of French couples (51 %) celebrate Valentine's Day, fewer than in England (61 %)! Those who do mostly go out for dinner, or give flowers, perfume or jewellery. And you: are these romantic presents?" },
    { icon: "🎄", kind: "Civilisation", t: "Les fêtes en France", d: "<b>Le jour de l'An</b> (with a big dinner on 31 December, <i>le réveillon</i>), <b>Pâques</b> (chocolate eggs in the garden), <b>le 1er mai</b> (Labour Day: workers march and people give lily of the valley, <i>du muguet</i>), <b>la fête de la Musique</b> (21 June), <b>le 14 juillet</b> and <b>Noël</b>." },
    { icon: "💌", kind: "Au fait !", t: "Le faire-part", d: "For a birth, a wedding or a death, French families send a printed <b>faire-part</b> (announcement card). Friends answer with a card or a message: [[Félicitations !]] [[Tous nos vœux de bonheur !]]" },
    { icon: "📜", kind: "Au fait !", t: "Le PACS", d: "Besides marriage, French couples can sign a <b>PACS</b> (<i>pacte civil de solidarité</i>), a civil partnership. You say [[Ils sont pacsés.]]" },
    { icon: "🌺", kind: "Francophonie", t: "Quelques fêtes", d: "In Tahiti, the <b>Heiva</b> festival every July celebrates Polynesian song and dance. In Québec, the <b>Saint-Jean-Baptiste</b> (24 June) is the national holiday. In Belgium, many towns have huge <b>carnivals</b>, like the Carnaval de Binche." },
    { icon: "🎬", kind: "Francophonie", t: "Des acteurs belges", d: "Belgium has many famous French-speaking actors: <b>Benoît Poelvoorde</b>, <b>François Damiens</b>, <b>Cécile de France</b>, <b>Virginie Efira</b>… often in comedies." },
    { icon: "👵", kind: "Langue", t: "[[papi]], [[mamie]]", d: "Children call their grandparents <b>papi</b> / <b>papy</b> and <b>mamie</b> (or <i>pépé</i>, <i>mémé</i>), and their parents <b>papa</b> and <b>maman</b>." }
  ],
  tips: [
    { icon: "🎯", t: "son / sa: look at the noun!", d: "[[son frère]] can be his brother or her brother. The possessive agrees with what is owned, never with the owner." },
    { icon: "🌳", t: "Draw your own family tree", d: "Draw your family with French labels ([[ma tante]], [[mon cousin]]) and describe each person in one sentence." },
    { icon: "🎵", t: "-er verbs: free past participles", d: "For all -er verbs, the past participle sounds exactly like the infinitive: [[dîner]] → [[j'ai dîné]]. Only the spelling changes." }
  ],
  mistakes: [
    ["ma amie", "mon amie", "vowel → mon"],
    ["Paul et son femme", "Paul et sa femme", "femme is feminine"],
    ["leur enfants", "leurs enfants", "plural → leurs"],
    ["J'ai prendu son numéro.", "J'ai pris son numéro.", "prendre → pris"],
    ["Je n'ai pu pas venir.", "Je n'ai pas pu venir.", "ne… pas around avoir"],
    ["Il est un acteur.", "C'est un acteur. / Il est acteur.", "c'est + un"],
    ["J'ai vu ma cousine dans trois jours.", "J'ai vu ma cousine il y a trois jours.", "il y a = ago"],
    ["Bon anniversaire Noël !", "Joyeux Noël !", "joyeux Noël"]
  ]
});
