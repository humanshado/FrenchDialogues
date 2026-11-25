// Unité 5 · C'est quoi le programme ? (book pp. 75–88)
// Situations: raconter sa journée · l'heure · les tâches ménagères · proposer une sortie · réserver par téléphone
// Grammar: verbes pronominaux au présent · la fréquence · l'impératif · l'antériorité et la postériorité (avant / après) · pouvoir, vouloir
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u05", rubrique: 3, num: 5,
  title: "What's the plan?",
  titleFr: "C'est quoi le programme ?",
  pages: "Book pp. 75–88",
  opener: { fr: "Ce soir, on sort ? Ça te dit ?", en: "Shall we go out tonight? Do you fancy it?" },
  hero: { scene: "bureau", staff: "Lorraine", people: { "Lorraine": "f3", "Rémi": "m5", "Sophie": "f8" } },
  situations: [
    ["⏰", "Ma journée", "your daily routine: [[Je me réveille à 7 heures, je me prépare…]]"],
    ["🕘", "Je suis en retard !", "asking and telling the time: [[Il est neuf heures moins le quart.]]"],
    ["🧺", "Qui fait quoi à la maison ?", "housework and how often: [[Je ne repasse jamais !]]"],
    ["🏖️", "Ça te dit ?", "suggesting an outing, accepting, refusing: [[On pourrait se baigner !]]"],
    ["☎️", "Allô, je voudrais réserver…", "booking by phone: [[Il y a des places pour samedi ?]]"]
  ],
  goals: [
    "Talk about your day with reflexive verbs: [[je me lève]], [[je m'habille]], [[je me couche]]",
    "Ask and tell the time, officially and in everyday French: [[Il est 20 h 45.]] / [[Il est neuf heures moins le quart.]]",
    "Say how often you do things: [[jamais]], [[de temps en temps]], [[souvent]], [[toujours]], [[tous les jours]]",
    "Talk about housework: [[faire la vaisselle]], [[faire les courses]], [[passer l'aspirateur]]",
    "Suggest an outing and fix a time: [[Ça te dit ?]] · [[On se retrouve à quelle heure ?]]",
    "Accept or refuse: [[Avec plaisir !]] · [[Désolé, je ne peux pas.]] (with [[pouvoir]] and [[vouloir]])",
    "Give instructions with the imperative: [[Réserve les places !]] · [[Venez vers 11 h !]]",
    "Place events in time: [[avant le spectacle]], [[après le dîner]]"
  ],
  glance: [
    ["🗣️", "Communication", "daily routine · the time · housework · invitations · booking by phone"],
    ["🧩", "Grammaire", "pronominal verbs · frequency · the imperative · avant / après · pouvoir, vouloir"],
    ["🗂️", "Vocabulaire", "the time · daily activities · housework · free time · outings and culture"],
    ["🔊", "Phonétique", "the sounds [i] / [y] and [y] / [u]"],
    ["⭐", "The phrase to learn first", "[[On se retrouve à quelle heure ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "A day in the life of an architect", titleFr: "Ma journée · Lorraine raconte",
      note: "A magazine is interviewing Lorraine, an architect, about her typical day. Listen to the reflexive verbs: [[je me réveille]], [[je me prépare]], [[on s'installe]].",
      scene: "bureau", staff: "Lorraine", people: { "Lorraine": "f3", "Le journaliste": "m4" },
      lines: [
        ["Le journaliste", "Lorraine, racontez-nous votre journée. Vous vous levez à quelle heure ?", "Lorraine, tell us about your day. What time do you get up?"],
        ["Lorraine", "Je me réveille à sept heures et je me lève tout de suite. Je prends une douche rapide et je m'habille.", "I wake up at seven and I get up straight away. I take a quick shower and get dressed."],
        ["Le journaliste", "Et vous prenez le petit déjeuner ?", "And do you have breakfast?"],
        ["Lorraine", "Toujours ! Un café et des tartines. À huit heures et quart, je pars travailler à vélo.", "Always! A coffee and some bread and butter. At quarter past eight, I cycle to work."],
        ["Le journaliste", "Et au bureau ?", "And at the office?"],
        ["Lorraine", "Vers neuf heures, j'arrive à l'agence. Mon collègue Rémi et moi, nous nous retrouvons pour préparer la journée. À midi, on s'installe dans le jardin pour déjeuner.", "Around nine I get to the agency. My colleague Rémi and I meet to plan the day. At noon, we sit in the garden to have lunch."],
        ["Le journaliste", "Et le soir ?", "And in the evening?"],
        ["Lorraine", "Je pars du bureau à dix-huit heures trente. Je sors souvent avec mes amis, mais je me couche de bonne heure. Je m'endors en trois minutes !", "I leave the office at six thirty. I often go out with my friends, but I go to bed early. I fall asleep in three minutes!"]
      ],
      glossary: [["se réveiller", "to wake up"], ["se lever", "to get up"], ["s'habiller", "to get dressed"], ["se coucher", "to go to bed"]]
    },
    {
      id: "d2", n: 2, title: "Do you have the time?", titleFr: "Dans la rue · Vous avez l'heure ?",
      note: "Rémi is rushing to a meeting. Listen to everyday time: [[moins le quart]], [[et quart]], [[et demie]].",
      scene: "rue", people: { "Rémi": "m5", "Une passante": "f6" },
      lines: [
        ["Rémi", "Pardon, madame, vous avez l'heure, s'il vous plaît ?", "Excuse me, do you have the time, please?"],
        ["Une passante", "Oui, il est neuf heures moins le quart.", "Yes, it's quarter to nine."],
        ["Rémi", "Neuf heures moins le quart ? Oh non, je suis en retard ! Mon rendez-vous est à huit heures et demie !", "Quarter to nine? Oh no, I'm late! My appointment is at half past eight!"],
        ["Une passante", "Ah… Vous êtes en retard d'un quart d'heure.", "Oh… You're a quarter of an hour late."],
        ["Rémi", "Je me dépêche ! Merci, madame !", "I'll hurry! Thank you!"],
        ["Une passante", "Attendez ! Ma montre avance de vingt minutes ! En fait, il est huit heures vingt-cinq.", "Wait! My watch is twenty minutes fast! Actually, it's twenty-five past eight."],
        ["Rémi", "Ah, super ! Je suis en avance, alors !", "Oh, great! Then I'm early!"]
      ],
      glossary: [["Vous avez l'heure ?", "do you have the time?"], ["en retard ≠ en avance", "late ≠ early"], ["à l'heure", "on time"], ["se dépêcher", "to hurry"]]
    },
    {
      id: "d3", n: 3, title: "Who does what at home?", titleFr: "À la maison · Qui fait quoi ?",
      note: "Fred and Paul share the housework. Listen for frequency words: [[souvent]], [[jamais]], [[tous les week-ends]], [[de temps en temps]].",
      scene: "maison", people: { "Fred": "m2", "Paul": "m1" },
      lines: [
        ["Fred", "Bon, on fait le planning des tâches ménagères ? Moi, je fais souvent la vaisselle.", "Right, shall we do the housework rota? I often do the washing-up."],
        ["Paul", "C'est vrai. Mais la lessive, c'est moi ! Je m'occupe du linge tous les week-ends.", "True. But the laundry is me! I deal with the washing every weekend."],
        ["Fred", "Et le repassage ?", "And the ironing?"],
        ["Paul", "On ne repasse jamais ! Les chemises, on les met directement.", "We never iron! We just wear the shirts as they are."],
        ["Fred", "D'accord. Et les courses, on les fait ensemble, le samedi matin ?", "OK. And shall we do the shopping together on Saturday mornings?"],
        ["Paul", "Oui. Et toi, tu vas chercher les enfants à l'école tous les jours ?", "Yes. And will you pick up the kids from school every day?"],
        ["Fred", "Pas tous les jours : le lundi et le jeudi. Toi, tu passes l'aspirateur de temps en temps ?", "Not every day: Mondays and Thursdays. Will you vacuum now and then?"],
        ["Paul", "De temps en temps… Disons une fois par semaine !", "Now and then… Let's say once a week!"]
      ],
      glossary: [["les tâches ménagères", "the housework"], ["faire la vaisselle", "to do the washing-up"], ["la lessive", "the laundry"], ["passer l'aspirateur", "to vacuum"]]
    },
    {
      id: "d4", n: 4, title: "Fancy a day at the beach?", titleFr: "Ça te dit ? · Une sortie à la plage",
      note: "Sophie suggests a day out to Pascal. Listen to how they suggest, accept and fix the details, and to the imperatives: [[Réserve…]], [[Apporte…]], [[Sois à l'heure !]]",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Sophie": "f8", "Pascal": "m3" },
      lines: [
        ["Sophie", "Pascal, tu es libre samedi ? Il y a un festival de musique sur la plage. Ça te dit ?", "Pascal, are you free on Saturday? There's a music festival on the beach. Do you fancy it?"],
        ["Pascal", "Avec plaisir ! On peut aussi se baigner ?", "I'd love to! Can we go swimming too?"],
        ["Sophie", "Bien sûr ! On pourrait aussi visiter le musée de la marine le matin.", "Of course! We could also visit the maritime museum in the morning."],
        ["Pascal", "Bof, le musée… Je veux bien faire une balade en bateau, plutôt.", "Meh, the museum… I'd rather go on a boat trip."],
        ["Sophie", "D'accord ! On se retrouve à quelle heure ?", "OK! What time shall we meet?"],
        ["Pascal", "À huit heures et demie, à la gare. Le train part à neuf heures moins dix.", "At half past eight at the station. The train leaves at ten to nine."],
        ["Sophie", "Parfait. Réserve les billets de train, s'il te plaît. Et apporte un maillot de bain !", "Perfect. Book the train tickets, please. And bring a swimsuit!"],
        ["Pascal", "Et toi, sois à l'heure ! Tu es toujours en retard !", "And you, be on time! You're always late!"],
        ["Sophie", "Moi ? Jamais !", "Me? Never!"]
      ],
      glossary: [["Ça te dit ?", "do you fancy it?"], ["Avec plaisir !", "I'd love to!"], ["On pourrait…", "we could…"], ["Sois à l'heure !", "be on time!"]]
    },
    {
      id: "d5", n: 5, title: "Booking a concert and dinner", titleFr: "Au téléphone · Je voudrais réserver",
      note: "Pascal calls a concert venue for his friend's birthday. Listen for [[avant]] / [[après]] and how to book: [[Il y a des places pour… ?]]",
      scene: "spectacle", staff: "L'employée", people: { "L'employée": "f2", "Pascal": "m3" },
      lines: [
        ["L'employée", "Court-Circuit, bonsoir !", "Court-Circuit, good evening!"],
        ["Pascal", "Bonsoir, madame. Je voudrais avoir des informations. Il y a des places pour le concert de samedi soir ?", "Good evening. I'd like some information. Are there any seats for Saturday night's concert?"],
        ["L'employée", "Oui, il reste des places. Le concert commence à vingt et une heures.", "Yes, there are some seats left. The concert starts at 9 p.m."],
        ["Pascal", "Et c'est possible de dîner avant le spectacle ?", "And is it possible to have dinner before the show?"],
        ["L'employée", "Oui, le restaurant ouvre à dix-neuf heures trente. Vous pouvez aussi prendre un dessert après le concert.", "Yes, the restaurant opens at 7.30 p.m. You can also have dessert after the concert."],
        ["Pascal", "Super ! Alors je voudrais réserver deux places de concert et une table pour deux, à dix-neuf heures trente.", "Great! Then I'd like to book two concert seats and a table for two, at 7.30."],
        ["L'employée", "C'est noté. Payez vos places avant le jour du concert, sur notre site, s'il vous plaît.", "That's booked. Please pay for your seats before the day of the concert, on our website."],
        ["Pascal", "Parfait, merci beaucoup ! Bonne soirée !", "Perfect, thank you very much! Have a nice evening!"]
      ],
      glossary: [["Il y a des places ?", "are there any seats?"], ["il reste", "there are … left"], ["avant ≠ après", "before ≠ after"], ["C'est noté.", "that's noted / booked"]]
    }
  ],

  vocab: [
    { t: "se réveiller", en: "to wake up", pic: "⏰", cat: "Les activités quotidiennes" },
    { t: "se lever", en: "to get up", pic: "🛏️", cat: "Les activités quotidiennes", note: "[[je me lève]], [[nous nous levons]]" },
    { t: "se doucher", en: "to shower", pic: "🚿", cat: "Les activités quotidiennes" },
    { t: "prendre une douche", en: "to have a shower", pic: "🚿", cat: "Les activités quotidiennes" },
    { t: "se brosser les dents", en: "to brush your teeth", pic: "🪥", cat: "Les activités quotidiennes" },
    { t: "s'habiller", en: "to get dressed", pic: "👕", cat: "Les activités quotidiennes" },
    { t: "se préparer", en: "to get ready", pic: "🪞", cat: "Les activités quotidiennes" },
    { t: "se raser", en: "to shave", pic: "🪒", cat: "Les activités quotidiennes" },
    { t: "se maquiller", en: "to put on make-up", pic: "💄", cat: "Les activités quotidiennes" },
    { t: "prendre le petit déjeuner", en: "to have breakfast", pic: "🥐", cat: "Les activités quotidiennes" },
    { t: "déjeuner", en: "to have lunch", pic: "🍽️", cat: "Les activités quotidiennes" },
    { t: "dîner", en: "to have dinner", pic: "🍲", cat: "Les activités quotidiennes" },
    { t: "partir travailler", en: "to leave for work", pic: "🚲", cat: "Les activités quotidiennes" },
    { t: "se dépêcher", en: "to hurry", pic: "🏃", cat: "Les activités quotidiennes" },
    { t: "se reposer", en: "to rest", pic: "🛋️", cat: "Les activités quotidiennes" },
    { t: "se coucher", en: "to go to bed", pic: "🌙", cat: "Les activités quotidiennes" },
    { t: "s'endormir", en: "to fall asleep", pic: "😴", cat: "Les activités quotidiennes" },
    { t: "faire la vaisselle", en: "to do the washing-up", pic: "🍽️", cat: "Les tâches ménagères" },
    { t: "faire la lessive", en: "to do the laundry", pic: "🧺", cat: "Les tâches ménagères" },
    { t: "repasser", en: "to iron", pic: "👔", cat: "Les tâches ménagères" },
    { t: "faire le ménage", en: "to do the cleaning", pic: "🧹", cat: "Les tâches ménagères" },
    { t: "passer l'aspirateur", en: "to vacuum", pic: "🧹", cat: "Les tâches ménagères" },
    { t: "faire les courses", en: "to do the shopping", pic: "🛒", cat: "Les tâches ménagères" },
    { t: "faire la cuisine", en: "to cook", pic: "🍳", cat: "Les tâches ménagères" },
    { t: "s'occuper des enfants", en: "to look after the children", pic: "👧", cat: "Les tâches ménagères" },
    { t: "l'heure", en: "the time, the hour", pic: "🕐", cat: "L'heure", g: "f" },
    { t: "Il est neuf heures.", en: "It's nine o'clock.", pic: "🕘", cat: "L'heure" },
    { t: "et quart", en: "quarter past", pic: "🕒", cat: "L'heure" },
    { t: "et demie", en: "half past", pic: "🕧", cat: "L'heure" },
    { t: "moins le quart", en: "quarter to", pic: "🕤", cat: "L'heure" },
    { t: "midi", en: "noon, midday", pic: "☀️", cat: "L'heure", g: "m" },
    { t: "minuit", en: "midnight", pic: "🌑", cat: "L'heure", g: "m" },
    { t: "le matin", en: "the morning", pic: "🌅", cat: "L'heure", g: "m" },
    { t: "l'après-midi", en: "the afternoon", pic: "🌤️", cat: "L'heure", g: "m" },
    { t: "le soir", en: "the evening", pic: "🌆", cat: "L'heure", g: "m" },
    { t: "à l'heure", en: "on time", pic: "✅", cat: "L'heure" },
    { t: "en retard", en: "late", pic: "🐢", cat: "L'heure" },
    { t: "en avance", en: "early", pic: "🐇", cat: "L'heure" },
    { t: "jamais", en: "never", pic: "0️⃣", cat: "La fréquence" },
    { t: "de temps en temps", en: "from time to time", pic: "🔂", cat: "La fréquence" },
    { t: "souvent", en: "often", pic: "🔁", cat: "La fréquence" },
    { t: "tous les jours", en: "every day", pic: "📅", cat: "La fréquence" },
    { t: "tout le temps", en: "all the time", pic: "♾️", cat: "La fréquence" },
    { t: "toujours", en: "always", pic: "💯", cat: "La fréquence" },
    { t: "une fois par semaine", en: "once a week", pic: "1️⃣", cat: "La fréquence" },
    { t: "le temps libre", en: "free time", pic: "🎈", cat: "Les loisirs", g: "m" },
    { t: "faire du sport", en: "to do sport", pic: "🏋️", cat: "Les loisirs" },
    { t: "courir", en: "to run", pic: "🏃", cat: "Les loisirs" },
    { t: "lire", en: "to read", pic: "📖", cat: "Les loisirs" },
    { t: "regarder la télé", en: "to watch TV", pic: "📺", cat: "Les loisirs" },
    { t: "surfer sur Internet", en: "to surf the Internet", pic: "💻", cat: "Les loisirs" },
    { t: "jouer aux jeux vidéo", en: "to play video games", pic: "🎮", cat: "Les loisirs" },
    { t: "sortir", en: "to go out", pic: "🚪", cat: "Les sorties" },
    { t: "une sortie", en: "an outing", pic: "🎟️", cat: "Les sorties", g: "f" },
    { t: "un concert", en: "a concert", pic: "🎸", cat: "Les sorties", g: "m" },
    { t: "un spectacle", en: "a show", pic: "🎭", cat: "Les sorties", g: "m" },
    { t: "une pièce de théâtre", en: "a play", pic: "🎭", cat: "Les sorties", g: "f" },
    { t: "une exposition", en: "an exhibition", pic: "🖼️", cat: "Les sorties", g: "f" },
    { t: "un festival", en: "a festival", pic: "🎪", cat: "Les sorties", g: "m" },
    { t: "une balade", en: "a walk, a ride, an outing", pic: "🚶", cat: "Les sorties", g: "f" },
    { t: "se baigner", en: "to go swimming (sea, lake)", pic: "🏊", cat: "Les sorties" },
    { t: "réserver", en: "to book", pic: "📞", cat: "Les sorties" },
    { t: "une place", en: "a seat; a ticket", pic: "💺", cat: "Les sorties", g: "f" },
    { t: "un rendez-vous", en: "a meeting, a date, an appointment", pic: "📍", cat: "Les sorties", g: "m" },
    { t: "se retrouver", en: "to meet up", pic: "🤝", cat: "Les sorties" },
    { t: "Ça te dit ?", en: "Do you fancy it?", pic: "😉", cat: "Les sorties" },
    { t: "Avec plaisir !", en: "I'd love to!", pic: "😄", cat: "Les sorties" },
    { t: "Je ne suis pas libre.", en: "I'm not free.", pic: "📵", cat: "Les sorties" }
  ],

  grammar: [
    {
      id: "g-heure",
      title: "Telling the time: [[Quelle heure est-il ?]]",
      body: [
        "To ask: [[Quelle heure est-il ?]] (formal) · [[Il est quelle heure ?]] · [[Vous avez l'heure ?]] The answer always starts with [[Il est…]]",
        "<b>Official time</b> (timetables, radio, shops) uses the 24-hour clock and adds the minutes: [[Il est vingt heures quarante-cinq.]] <b>Everyday time</b> uses 1–12 with [[et quart]] (:15), [[et demie]] (:30), [[moins le quart]] (:45) and [[moins]] + minutes after half past: [[Il est neuf heures moins dix.]] (8:50).",
        "[[midi]] (12 p.m.) and [[minuit]] (12 a.m.) replace twelve: [[midi et demi]]. To be precise, add [[du matin]], [[de l'après-midi]], [[du soir]]: [[deux heures de l'après-midi]] = 14 h."
      ],
      info: { type: "compare", title: "🕘 One time, two ways of saying it", cols: [
        { head: "Heure officielle", en: "24 h · timetables", color: "#2b59c3", lines: [["Il est huit heures quinze.", "8:15"], ["Il est vingt heures trente.", "20:30"], ["Il est vingt heures quarante-cinq.", "20:45"], ["Il est quatorze heures cinquante.", "14:50"]] },
        { head: "Heure courante", en: "12 h · everyday", color: "#e86a2e", lines: [["Il est huit heures et quart.", "8:15"], ["Il est huit heures et demie (du soir).", "20:30"], ["Il est neuf heures moins le quart.", "20:45"], ["Il est trois heures moins dix.", "14:50"]] }
      ] },
      widget: { type: "clock12", label: "Quelle heure est-il ? · everyday time (and the official version)" }
    },
    {
      id: "g-pronominaux",
      title: "Reflexive (pronominal) verbs: [[je me lève]], [[tu te prépares]]",
      body: [
        "Many daily-routine verbs have an extra pronoun that refers back to the subject: [[se lever]] (to get <i>oneself</i> up). The pronoun changes with the person: [[je me]], [[tu te]], [[il / elle / on se]], [[nous nous]], [[vous vous]], [[ils / elles se]].",
        "Before a vowel or a silent h, <b>me, te, se</b> become <b>m', t', s'</b>: [[je m'habille]], [[il s'occupe]]. In the negative, <b>ne… pas</b> goes around the pronoun and the verb: [[Je ne me réveille pas.]] · [[Je ne me lève pas tard.]]",
        "In speech, French very often uses [[on]] instead of <b>nous</b>, with the il/elle form: [[À midi, on s'installe.]] = [[Nous nous installons.]]"
      ],
      info: [
        { type: "conj", title: "🔁 Two pronominal verbs", verbs: [
          { inf: "se préparer", en: "to get ready", forms: ["je me prépare", "tu te prépares", "il / elle / on se prépare", "nous nous préparons", "vous vous préparez", "ils / elles se préparent"] },
          { inf: "s'occuper (de)", en: "to take care of", forms: ["je m'occupe", "tu t'occupes", "il / elle / on s'occupe", "nous nous occupons", "vous vous occupez", "ils / elles s'occupent"] },
          { inf: "se lever", en: "to get up", forms: ["je me lève", "tu te lèves", "il / elle / on se lève", "nous nous levons", "vous vous levez", "ils / elles se lèvent"] }
        ], note: "<b>se lever</b> takes a grave accent when the ending is silent: [[je me lève]] but [[nous nous levons]] (like <i>acheter</i>)." },
        { type: "agenda", title: "📆 Lorraine's day · tap a line", items: [
          { h: 7, m: 0, pic: "⏰", fr: "Je me réveille et je me lève.", en: "I wake up and get up." },
          { h: 7, m: 15, pic: "🚿", fr: "Je prends une douche et je m'habille.", en: "I shower and get dressed." },
          { h: 8, m: 15, pic: "🚲", fr: "Je pars travailler à vélo.", en: "I cycle to work." },
          { h: 9, m: 0, pic: "🏢", fr: "J'arrive à l'agence. Rémi et moi, nous nous retrouvons.", en: "I get to the agency. Rémi and I meet." },
          { h: 12, m: 30, pic: "🥗", fr: "On s'installe dans le jardin pour déjeuner.", en: "We sit in the garden for lunch." },
          { h: 18, m: 30, pic: "🚪", fr: "Je pars du bureau.", en: "I leave the office." },
          { h: 22, m: 30, pic: "😴", fr: "Je me couche et je m'endors en trois minutes !", en: "I go to bed and fall asleep in three minutes!" }
        ] }
      ],
      widget: {
        type: "combo", label: "Conjugate · pick a person and a verb",
        rows: [{ k: "je", label: "je" }, { k: "tu", label: "tu" }, { k: "il", label: "il / on" }, { k: "nous", label: "nous" }, { k: "vous", label: "vous" }, { k: "ils", label: "ils" }],
        cols: [{ k: "lever", label: "⏰ se lever" }, { k: "hab", label: "👕 s'habiller" }, { k: "brosser", label: "🪥 se brosser les dents" }, { k: "neg", label: "❌ ne pas se coucher tard" }],
        out: {
          "je|lever": ["Je me lève à sept heures.", "I get up at seven."], "tu|lever": ["Tu te lèves tôt !", "You get up early!"], "il|lever": ["On se lève tard le dimanche.", "We get up late on Sundays.", "on = nous, with the il form"], "nous|lever": ["Nous nous levons à six heures.", "We get up at six.", "no accent: you hear the ending"], "vous|lever": ["Vous vous levez à quelle heure ?", "What time do you get up?"], "ils|lever": ["Ils se lèvent tôt.", "They get up early."],
          "je|hab": ["Je m'habille vite.", "I get dressed quickly.", "me → m' before a vowel"], "tu|hab": ["Tu t'habilles, s'il te plaît ?", "Can you get dressed, please?"], "il|hab": ["Il s'habille en noir.", "He dresses in black."], "nous|hab": ["Nous nous habillons.", "We get dressed."], "vous|hab": ["Vous vous habillez comment ?", "How do you dress?"], "ils|hab": ["Ils s'habillent pour la fête.", "They dress up for the party."],
          "je|brosser": ["Je me brosse les dents.", "I brush my teeth."], "tu|brosser": ["Tu te brosses les dents ?", "Are you brushing your teeth?"], "il|brosser": ["Il se brosse les dents.", "He brushes his teeth."], "nous|brosser": ["Nous nous brossons les dents tous les soirs.", "We brush our teeth every evening."], "vous|brosser": ["Vous vous brossez les dents.", "You brush your teeth."], "ils|brosser": ["Ils se brossent les dents.", "They brush their teeth."],
          "je|neg": ["Je ne me couche pas tard.", "I don't go to bed late.", "ne + me + verb + pas"], "tu|neg": ["Tu ne te couches pas tard.", "You don't go to bed late."], "il|neg": ["Il ne se couche pas tard.", "He doesn't go to bed late."], "nous|neg": ["Nous ne nous couchons pas tard.", "We don't go to bed late."], "vous|neg": ["Vous ne vous couchez pas tard.", "You don't go to bed late."], "ils|neg": ["Ils ne se couchent pas tard.", "They don't go to bed late."]
        }
      }
    },
    {
      id: "g-freq",
      title: "How often? [[jamais]], [[souvent]], [[toujours]]…",
      body: [
        "Frequency words usually come <b>right after the verb</b>: [[Fred va souvent chercher les enfants.]] · [[Paul lit tout le temps.]] Longer expressions can go at the end or the beginning: [[On fait les courses tous les week-ends.]] · [[De temps en temps, je cours.]]",
        "[[jamais]] (never) is only used in the negative: [[On ne repasse jamais.]] (ne + verb + jamais, like ne… pas)."
      ],
      info: { type: "scale", title: "📊 From never to always", colors: ["#fbe3de", "#7d9a2e"], items: [
        { v: 4, fr: "ne… jamais", en: "never", pic: "0️⃣" }, { v: 28, fr: "de temps en temps", en: "now and then", pic: "🔂" }, { v: 52, fr: "souvent", en: "often", pic: "🔁" }, { v: 76, fr: "tous les jours", en: "every day", pic: "📅" }, { v: 96, fr: "toujours · tout le temps", en: "always · all the time", pic: "💯" }
      ], ends: ["jamais", "toujours"] },
      widget: {
        type: "sort", label: "How often does Fred do it? (from the dialogue)",
        cols: [{ k: "j", label: "jamais", color: "#e0474f" }, { k: "tt", label: "de temps en temps", color: "#e0a526" }, { k: "s", label: "souvent / tous les…", color: "#2f9c8a" }],
        items: [{ t: "repasser", k: "j", pic: "👔", say: "On ne repasse jamais." }, { t: "la vaisselle (Fred)", k: "s", pic: "🍽️", say: "Je fais souvent la vaisselle." }, { t: "l'aspirateur (Paul)", k: "tt", pic: "🧹", say: "Je passe l'aspirateur de temps en temps." }, { t: "la lessive (Paul)", k: "s", pic: "🧺", say: "Je m'occupe du linge tous les week-ends." }, { t: "les courses", k: "s", pic: "🛒", say: "On fait les courses tous les samedis." }]
      }
    },
    {
      id: "g-sortie",
      title: "Suggesting, accepting, refusing · [[pouvoir]] and [[vouloir]]",
      body: [
        "To suggest: [[Tu veux te baigner ?]] · [[On pourrait aller au cinéma.]] · [[Ça te dit ?]] · [[Ça te va ?]] To fix it: [[Tu es libre quand ?]] · [[On se retrouve à quelle heure ?]] · [[On se retrouve où ?]]",
        "To accept: [[D'accord !]] · [[Avec plaisir !]] · [[Pourquoi pas ?]] To refuse politely: [[Désolé(e), je ne peux pas.]] · [[Ce n'est pas possible.]] · [[Je ne suis pas libre.]]",
        "[[pouvoir]] (can) and [[vouloir]] (want) are irregular and are followed by an infinitive: [[Je peux venir.]] · [[Tu veux sortir ?]] · [[Je veux bien.]] (= yes, gladly)."
      ],
      info: [
        { type: "conj", title: "🔁 pouvoir and vouloir", verbs: [
          { inf: "pouvoir", en: "can, to be able", forms: ["je peux", "tu peux", "il / elle / on peut", "nous pouvons", "vous pouvez", "ils / elles peuvent"] },
          { inf: "vouloir", en: "to want", forms: ["je veux", "tu veux", "il / elle / on veut", "nous voulons", "vous voulez", "ils / elles veulent"] }
        ] },
        { type: "sms", title: "💬 Sophie organises Saturday", with: "Pascal 🏖️", msgs: [
          { me: true, t: "Samedi, festival sur la plage ! Ça te dit ? On pourrait se baigner 🏊", en: "Saturday, festival on the beach! Fancy it? We could go swimming" },
          { t: "Avec plaisir ! Le musée, bof, mais la balade en bateau, ok !", en: "I'd love to! The museum, meh, but the boat trip, OK!" },
          { me: true, t: "On se retrouve à 8 h 30 à la gare. Réserve les billets !", en: "Let's meet at 8.30 at the station. Book the tickets!" },
          { t: "Ok. Et toi, sois à l'heure 😉 À samedi ! Bisous", en: "OK. And you, be on time. See you Saturday! Love" }
        ] },
        { type: "ladder", title: "🪜 From yes to no", levels: [
          { name: "Oui !", en: "enthusiastic", color: "#2f8a4f", ex: ["Avec plaisir !", "Super, d'accord !"] },
          { name: "Oui…", en: "fine", color: "#7d9a2e", ex: ["Pourquoi pas ?", "Je veux bien."] },
          { name: "Bof", en: "not keen", color: "#e0a526", ex: ["Bof… Plutôt une balade ?"], note: "suggest something else with [[plutôt]]" },
          { name: "Non", en: "polite refusal", color: "#e0474f", ex: ["Désolé, je ne peux pas.", "Je ne suis pas libre.", "Ce n'est pas possible."] }
        ] }
      ]
    },
    {
      id: "g-imperatif",
      title: "Giving instructions: the imperative [[Réserve !]] · [[Réservons !]] · [[Réservez !]]",
      body: [
        "The imperative has only <b>three persons</b> (tu, nous, vous) and <b>no subject pronoun</b>. Take the present tense and drop the pronoun: [[Tu prends ton sac.]] → [[Prends ton sac !]] · [[Vous venez vers 11 h.]] → [[Venez vers 11 h !]]",
        "⚠️ For <b>-er verbs</b> (and [[aller]]), drop the <b>-s</b> of the tu form: [[Tu réserves.]] → [[Réserve !]] · [[Tu vas au concert.]] → [[Va au concert !]]",
        "Three irregular ones: [[être]] → [[Sois / Soyons / Soyez]] · [[avoir]] → [[Aie / Ayons / Ayez]]. And [[regarder]] is regular: [[Regarde ! Regardons ! Regardez !]] Negative: [[Ne sois pas en retard !]]"
      ],
      info: { type: "compare", title: "📣 Present → imperative", cols: [
        { head: "Présent", en: "a statement", color: "#5b6b7c", lines: ["Tu réserves les places.", "Tu apportes un maillot.", "Nous attendons la météo.", "Vous venez vers 11 h.", "Tu es à l'heure."] },
        { head: "Impératif", en: "an instruction", color: "#e86a2e", lines: [["Réserve les places !", "-er: no s"], ["Apporte un maillot !", "-er: no s"], ["Attendons la météo !", "let's…"], ["Venez vers 11 h !", ""], ["Sois à l'heure !", "être: irregular"]] }
      ] },
      widget: {
        type: "combo", label: "Give the instruction · pick a person and an action",
        rows: [{ k: "tu", label: "👉 tu" }, { k: "nous", label: "👥 nous (let's)" }, { k: "vous", label: "🫵 vous" }],
        cols: [{ k: "res", label: "📞 réserver les places" }, { k: "prendre", label: "🎒 prendre un pull" }, { k: "etre", label: "⏰ être à l'heure" }, { k: "aller", label: "🎸 aller au concert" }],
        out: {
          "tu|res": ["Réserve les places !", "Book the seats!", "tu réserves → réserve (no s)"], "nous|res": ["Réservons les places !", "Let's book the seats!"], "vous|res": ["Réservez les places !", "Book the seats!"],
          "tu|prendre": ["Prends un pull !", "Take a jumper!", "not an -er verb: keep the s"], "nous|prendre": ["Prenons un pull !", "Let's take a jumper!"], "vous|prendre": ["Prenez un pull !", "Take a jumper!"],
          "tu|etre": ["Sois à l'heure !", "Be on time!", "être → sois (irregular)"], "nous|etre": ["Soyons à l'heure !", "Let's be on time!"], "vous|etre": ["Soyez à l'heure !", "Be on time!"],
          "tu|aller": ["Va au concert !", "Go to the concert!", "tu vas → va (no s)"], "nous|aller": ["Allons au concert !", "Let's go to the concert!"], "vous|aller": ["Allez au concert !", "Go to the concert!"]
        }
      }
    },
    {
      id: "g-avant",
      title: "Before and after: [[avant le spectacle]] · [[après le dîner]]",
      body: [
        "[[avant]] (before) and [[après]] (after) + a noun place an event in time: [[avant le spectacle]], [[après les vacances]]. They also work with a date, a time or a length of time: [[avant septembre]], [[après lundi]], [[avant 11 h]], [[après une heure de lecture]].",
        "Booking by phone: [[Allô ? Je voudrais avoir des informations.]] · [[Il y a des places pour samedi soir ?]] · [[C'est possible de dîner ?]] · [[Je voudrais réserver pour le 24 juin à 22 h 30.]]"
      ],
      info: { type: "agenda", title: "🎟️ Pascal's Saturday evening", items: [
        { h: 18, m: 0, pic: "💳", fr: "Avant le concert, il paie les places sur le site.", en: "Before the concert, he pays for the seats online.", say: "Avant le concert, il paie les places sur le site." },
        { h: 19, m: 30, pic: "🍽️", fr: "Ils dînent avant le spectacle.", en: "They have dinner before the show." },
        { h: 21, m: 0, pic: "🎸", fr: "Le concert commence.", en: "The concert starts." },
        { h: 23, m: 0, pic: "🍰", fr: "Après le concert, ils prennent un dessert.", en: "After the concert, they have dessert." }
      ] }
    }
  ],

  expressions: [
    { fn: "Pour demander / dire l'heure", fnEn: "the time", icon: "🕘", items: [
      ["Vous avez l'heure, s'il vous plaît ?", "Do you have the time, please?", "poli", true],
      ["Quelle heure il est ? / Il est quelle heure ?", "What time is it?", "std", true],
      ["Il est 20 h. / Il est huit heures du soir.", "It's 8 p.m.", "std"],
      ["Il est neuf heures moins le quart.", "It's quarter to nine.", "std", true],
      ["Je suis en retard ! / Je suis à l'heure. / Je suis en avance.", "I'm late! / on time / early", "std"]
    ] },
    { fn: "Pour parler de ses activités quotidiennes", fnEn: "your routine", icon: "⏰", items: [
      ["Je me réveille à 7 h et je me lève tout de suite.", "I wake up at 7 and get up straight away.", "std", true],
      ["Je pars travailler à 8 h 15.", "I leave for work at 8.15.", "std"],
      ["À midi, on déjeune ensemble.", "At noon we have lunch together.", "std"],
      ["Je me couche de bonne heure.", "I go to bed early.", "std"]
    ] },
    { fn: "Pour proposer une sortie / fixer un rendez-vous", fnEn: "suggesting", icon: "🏖️", items: [
      ["Tu veux te baigner ?", "Do you want to go swimming?", "std", true],
      ["On pourrait se baigner.", "We could go swimming.", "std", true],
      ["Ça te dit ? / Ça te va ?", "Do you fancy it? / Does that suit you?", "fam", true],
      ["Tu es libre quand ?", "When are you free?", "fam"],
      ["On se retrouve à quelle heure ? Où ?", "What time / where shall we meet?", "std", true]
    ] },
    { fn: "Pour accepter / refuser", fnEn: "yes or no", icon: "👍", items: [
      ["D'accord. · Avec plaisir ! · Pourquoi pas.", "OK. · I'd love to! · Why not.", "std", true],
      ["Désolé(e), je ne peux pas.", "Sorry, I can't.", "poli", true],
      ["Ce n'est pas possible.", "It's not possible.", "std"],
      ["Je ne suis pas libre.", "I'm not free.", "std"]
    ] },
    { fn: "Pour réserver par téléphone", fnEn: "booking", icon: "☎️", items: [
      ["Allô ? Je voudrais avoir des informations.", "Hello? I'd like some information.", "poli", true],
      ["Il y a des places pour samedi soir ?", "Are there any seats for Saturday evening?", "std", true],
      ["C'est possible de dîner ?", "Is it possible to have dinner?", "std"],
      ["Je peux réserver pour le 24 juin à 22 h 30 ?", "Can I book for 24 June at 10.30 p.m.?", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · inviting a friend out", lanes: ["Sophie", "Pascal"], av: ["f8", "m3"], steps: [
    { s: 0, fr: "Tu es libre samedi ?", en: "Are you free on Saturday?" },
    { s: 1, fr: "Oui, pourquoi ?", en: "Yes, why?" },
    { s: 0, fr: "Il y a un concert sur la plage. Ça te dit ?", en: "There's a concert on the beach. Fancy it?", alt: ["On pourrait aller au concert."] },
    { s: 1, fr: "Avec plaisir ! On se retrouve à quelle heure ?", en: "I'd love to! What time shall we meet?", alt: ["Désolé, je ne peux pas."] },
    { s: 0, fr: "À huit heures et demie, à la gare.", en: "At half past eight, at the station." },
    { s: 1, fr: "D'accord ! Et réserve les billets !", en: "OK! And book the tickets!" }
  ] },

  sounds: {
    intro: "Three vowels that make a difference in meaning: [i] (lips spread), [y] (lips rounded, tongue forward) and [u] (lips rounded, tongue back).",
    letters: [
      { l: "i · y", name: "[i]", tip: "Lips spread in a smile: [[midi]], [[la vie]], [[le style]]. Spelled <b>i, î, y</b>.", ex: ["midi", "il lit", "la vie", "le style"] },
      { l: "u · û", name: "[y]", tip: "Say [i] and push your lips forward into a circle without moving your tongue: [[tu]], [[la rue]], [[sûr]]. Spelled <b>u, û</b>.", ex: ["tu", "la rue", "je suis sûr", "Rémi aime la musique"] },
      { l: "ou · où · oû", name: "[u]", tip: "Lips round and forward, tongue pulled back: [[tout]], [[le jour]], [[où]], [[août]].", ex: ["tout", "le jour", "où", "toujours"] }
    ],
    pairs: [
      { a: ["il lit", "he reads"], b: ["il lut", "he read (literary)"], note: "[i] / [y]" },
      { a: ["la vie", "life"], b: ["la vue", "the view"], note: "[i] / [y]" },
      { a: ["tu", "you"], b: ["tout", "all"], note: "[y] / [u]" },
      { a: ["la rue", "the street"], b: ["la roue", "the wheel"], note: "[y] / [u]" },
      { a: ["dessus", "on top"], b: ["dessous", "underneath"], note: "[y] / [u]" },
      { a: ["il est six heures et demie", "6:30"], b: ["il est dix heures et demie", "10:30"], note: "six / dix" }
    ]
  },
  classify: {
    label: "📊 Souvent ou jamais ?", q: "Does the person do it often (or always), or never?",
    options: ["souvent / toujours", "de temps en temps", "jamais"],
    items: [
      { say: "Je fais souvent la vaisselle.", a: 0 }, { say: "On ne repasse jamais.", a: 2 }, { say: "Je cours de temps en temps.", a: 1 },
      { say: "Il lit tout le temps.", a: 0 }, { say: "Elle n'arrive jamais à l'heure.", a: 2 }, { say: "Nous faisons les courses tous les samedis.", a: 0 },
      { say: "De temps en temps, je vais au théâtre.", a: 1 }, { say: "Tu n'es jamais en retard !", a: 2 }, { say: "Il prend toujours une douche au réveil.", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Lorraine se lève à sept heures.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Elle va au travail en bus.", ok: false, explain: "[[je pars travailler à vélo]]" },
    { type: "tf", tag: "Dialogue 1", s: "Elle se couche tard.", ok: false, explain: "[[je me couche de bonne heure]]" },
    { type: "mcq", tag: "Dialogue 2", q: "Finalement, il est quelle heure ?", options: ["8 h 25", "8 h 45", "9 h 05"], answer: 0, explain: "The watch is 20 minutes fast: 8:45 − 20 min = 8:25." },
    { type: "tf", tag: "Dialogue 3", s: "Fred et Paul ne repassent jamais.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Paul passe l'aspirateur tous les jours.", ok: false, explain: "[[De temps en temps… une fois par semaine !]]" },
    { type: "mcq", tag: "Dialogue 4", q: "Pascal ne veut pas…", options: ["visiter le musée", "se baigner", "faire une balade en bateau"], answer: 0 },
    { type: "mcq", tag: "Dialogue 5", q: "À quelle heure est le dîner ?", options: ["19 h 30", "21 h", "22 h 30"], answer: 0 },
    { type: "listen", tag: "L'heure", q: "What time is it?", say: "Il est neuf heures moins le quart.", options: ["8:45", "9:15", "9:45"], answer: 0 },
    { type: "listen", tag: "L'heure", q: "What time is it?", say: "Il est onze heures et demie.", options: ["11:30", "11:15", "12:30"], answer: 0 },
    { type: "listen", tag: "L'heure", q: "What time is it?", say: "Il est deux heures moins dix.", options: ["1:50", "2:10", "12:50"], answer: 0 },
    { type: "listen", tag: "L'heure", q: "What time does the film start?", say: "Le film commence à vingt heures quinze.", options: ["20:15", "22:15", "20:50"], answer: 0 },
    { type: "mcq", tag: "L'heure", q: "12:30 in everyday French is…", options: ["Il est midi et demi.", "Il est douze heures et demie.", "Il est midi trente heures."], answer: 0, sayAnswer: true },
    { type: "fill", tag: "Pronominaux", sentence: "Nous ___ brossons les dents tous les soirs.", options: ["nous", "se", "vous"], answer: 0 },
    { type: "fill", tag: "Pronominaux", sentence: "Tu ___ habilles, s'il te plaît ?", options: ["te", "t'", "se"], answer: 1, explain: "te → t' before a vowel" },
    { type: "fill", tag: "Pronominaux", sentence: "Rémi ___ occupe de mes clients.", options: ["s'", "se", "m'"], answer: 0 },
    { type: "fill", tag: "Pronominaux", sentence: "Vous ___ réveillez à quelle heure ?", options: ["vous", "se", "nous"], answer: 0 },
    { type: "type", tag: "Pronominaux", q: "Negative: « Je me lève tard. » → …", answers: ["Je ne me lève pas tard.", "Je ne me lève pas tard"], explain: "ne + me + lève + pas" },
    { type: "type", tag: "Pronominaux", q: "Conjugate: Ils (se dépêcher) → Ils …", answers: ["Ils se dépêchent", "se dépêchent", "Ils se dépêchent."] },
    { type: "order", tag: "Fréquence", en: "He never arrives at work on time.", words: ["Il", "n'", "arrive", "jamais", "à", "l'heure", "au", "travail."] },
    { type: "order", tag: "Fréquence", en: "He always takes a shower when he wakes up.", words: ["Il", "prend", "toujours", "une", "douche", "au", "réveil."] },
    { type: "mcq", tag: "Fréquence", q: "Which is correct?", options: ["Je repasse jamais.", "Je ne repasse jamais.", "Je ne jamais repasse."], answer: 1, sayAnswer: true },
    { type: "fill", tag: "pouvoir / vouloir", sentence: "Désolé, je ne ___ pas venir.", options: ["peux", "veux", "peut"], answer: 0 },
    { type: "fill", tag: "pouvoir / vouloir", sentence: "Vous ___ aller au cinéma ?", options: ["voulez", "voulons", "veulent"], answer: 0 },
    { type: "fill", tag: "pouvoir / vouloir", sentence: "Ils ___ réserver par téléphone.", options: ["peuvent", "pouvent", "peut"], answer: 0 },
    { type: "fill", tag: "Impératif", sentence: "Tu réserves les places. → ___ les places !", options: ["Réserve", "Réserves", "Tu réserve"], answer: 0, explain: "-er verbs drop the s" },
    { type: "fill", tag: "Impératif", sentence: "Tu prends ton sac. → ___ ton sac !", options: ["Prend", "Prends", "Prenez-tu"], answer: 1, explain: "not an -er verb: keep the s" },
    { type: "fill", tag: "Impératif", sentence: "Vous êtes à l'heure. → ___ à l'heure !", options: ["Êtes", "Soyez", "Soyons"], answer: 1 },
    { type: "type", tag: "Impératif", q: "Imperative (tu): « Tu écoutes le professeur. » → …", answers: ["Écoute le professeur !", "Écoute le professeur", "Ecoute le professeur !"] },
    { type: "type", tag: "Impératif", q: "Imperative (nous): « Nous répondons à nos mails. » → …", answers: ["Répondons à nos mails !", "Répondons à nos mails"] },
    { type: "fill", tag: "avant / après", sentence: "Nous allons dîner ___ le spectacle : il commence à 21 h et nous avons faim à 19 h !", options: ["avant", "après"], answer: 0 },
    { type: "fill", tag: "avant / après", sentence: "Payez vos places ___ 19 h 30, sinon elles sont vendues.", options: ["avant", "après"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Ce soir, on va au cinéma. Ça te dit ?", options: ["Avec plaisir ! À quelle heure ?", "Il est huit heures.", "Je me lève à sept heures."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Tu es libre samedi ?", options: ["Désolée, je ne suis pas libre.", "Oui, je suis en retard.", "Je fais la vaisselle tous les jours."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["faire la vaisselle", "passer l'aspirateur", "faire la lessive", "se baigner"], answer: 3, explain: "se baigner is a leisure activity, not housework." }
  ],

  roleplays: [
    { title: "📅 Ta journée", brief: "A friend asks about your typical day. Use reflexive verbs and times.", memo: ["se réveiller", "se lever", "partir", "se coucher"], partner: "f8", you: "m1",
      turns: [
        { them: "Tu te lèves à quelle heure le matin ?", themEn: "What time do you get up in the morning?", hint: "Say when you wake up and get up.", you: "Je me réveille à six heures et demie et je me lève à sept heures.", youEn: "I wake up at half past six and get up at seven." },
        { them: "Et tu pars à quelle heure ?", themEn: "And what time do you leave?", hint: "After breakfast and a shower, you leave at 8.", you: "Je prends une douche, je prends le petit déjeuner et je pars à huit heures.", youEn: "I shower, have breakfast and leave at eight." },
        { them: "Et le soir ?", themEn: "And in the evening?", hint: "Say what you do and when you go to bed.", you: "Je fais la cuisine, je lis un peu et je me couche à onze heures.", youEn: "I cook, read a little and go to bed at eleven." }
      ] },
    { title: "🎬 On sort ?", brief: "Invite a friend to the cinema on Friday. She can't on Friday, so find another day and fix the time and place.", memo: ["Ça te dit ?", "vendredi ✗ → samedi ✓", "20 h, devant le cinéma"], partner: "f3", you: "m5",
      turns: [
        { them: "Salut ! Quoi de neuf ?", themEn: "Hi! What's new?", hint: "Suggest the cinema on Friday evening.", you: "Salut ! Vendredi soir, on pourrait aller au cinéma. Ça te dit ?", youEn: "Hi! On Friday evening we could go to the cinema. Fancy it?" },
        { them: "Désolée, vendredi, je ne peux pas. Je travaille.", themEn: "Sorry, I can't on Friday. I'm working.", hint: "Ask when she's free.", you: "Dommage ! Tu es libre quand ?", youEn: "Shame! When are you free?" },
        { them: "Samedi soir, ça te va ?", themEn: "Saturday evening, is that OK for you?", hint: "Accept and suggest meeting at 8 in front of the cinema.", you: "Avec plaisir ! On se retrouve à vingt heures devant le cinéma ?", youEn: "I'd love to! Shall we meet at 8 p.m. in front of the cinema?" },
        { them: "Parfait ! Et tu réserves les places ?", themEn: "Perfect! And will you book the seats?", hint: "Say yes, and tell her to be on time (imperative).", you: "Oui, je réserve. Et toi, sois à l'heure !", youEn: "Yes, I'll book. And you, be on time!" }
      ] },
    { title: "☎️ Réserver un spectacle", brief: "Phone a theatre to book two seats for Saturday's play and ask if you can have dinner before.", memo: ["2 places", "samedi soir", "dîner avant ?"], partner: "f2", you: "f6",
      turns: [
        { them: "Théâtre du Port, bonjour !", themEn: "Théâtre du Port, hello!", hint: "Ask for information: are there seats for Saturday evening?", you: "Bonjour, madame. Il y a des places pour la pièce de samedi soir ?", youEn: "Hello. Are there seats for Saturday evening's play?" },
        { them: "Oui. Vous voulez combien de places ?", themEn: "Yes. How many seats do you want?", hint: "Two seats. Ask what time it starts.", you: "Deux places, s'il vous plaît. La pièce commence à quelle heure ?", youEn: "Two seats, please. What time does the play start?" },
        { them: "À vingt heures trente.", themEn: "At 8.30 p.m.", hint: "Ask if it's possible to have dinner before the show.", you: "C'est possible de dîner avant le spectacle ?", youEn: "Is it possible to have dinner before the show?" },
        { them: "Oui, notre bar propose des formules à partir de dix-neuf heures.", themEn: "Yes, our bar has set menus from 7 p.m.", hint: "Book a table for two at 7 p.m. and say thank you.", you: "Parfait, alors une table pour deux à dix-neuf heures. Merci beaucoup !", youEn: "Perfect, then a table for two at 7 p.m. Thank you very much!" }
      ] }
  ],

  ateliers: [
    { title: "Créer un mini-article sur un loisir", intro: "In groups, present a leisure activity you can do in your town, in a short magazine-style article with a slogan.",
      steps: [["Préparation", ["Choose a hobby: climbing, salsa, a book club, running…", "Find all the information: where? when? how much? how often?"]], ["Réalisation", ["Write a short article (60–80 words) with a title and a photo.", "Invent a slogan with an imperative: [[Venez danser le samedi !]] [[Essayez l'escalade !]]"]], ["Présentation", ["Read your article to the class; the others say if they'd like to try: [[Ça me dit !]] / [[Bof…]]"]]],
      phrases: ["On peut pratiquer… tous les samedis.", "Venez !", "C'est ouvert de… à…"],
      model: { type: "card", style: "board", title: "LE CLUB DE SALSA", sub: "« Venez danser avec nous ! »", rows: [["Quand ?", "tous les mercredis, 19 h – 21 h"], ["Où ?", "salle des fêtes, place du Marché"], ["Prix", "5 € la séance · 1re séance gratuite"], ["Niveau", "débutants bienvenus"]], foot: "Apportez de bonnes chaussures et votre bonne humeur !" } },
    { title: "Publier un guide virtuel sur votre ville", tech: true, intro: "Prepare an online guide to outings in your town: one group per category (concerts, exhibitions, sport, restaurants…).",
      steps: [["Préparation", ["Look at your town's what's-on website.", "Each group picks a category and a day of the week, then selects one outing."]], ["Réalisation", ["Note the details: What can you do? Where? How much? What time does it start? Do you need to book?", "Write a few lines about it."]], ["Présentation", ["Put the guide together and present it to the class.", "Post your seven favourites on a social network: « Notre semaine à… »"]]],
      phrases: ["Ça commence à…", "Il faut réserver.", "Notre coup de cœur :"] }
  ],
  detente: {
    title: "Une journée dans la Francophonie · Expressions imagées",
    intro: "French-speaking countries have colourful expressions about everyday life. Guess what each one means.",
    items: [
      { type: "mcq", q: "« avoir la journée dans le corps » (Canada)", options: ["to be tired after a hard day", "to get up early", "to party all night"], answer: 0 },
      { type: "mcq", q: "« faire son samedi » (Belgique)", options: ["to do the housework", "to go shopping", "to sleep late"], answer: 0 },
      { type: "mcq", q: "« ambiancer » (Afrique de l'Ouest)", options: ["to party, to go to a party", "to clean the house", "to go to bed"], answer: 0 },
      { type: "mcq", q: "« se réduire » (Suisse)", options: ["to go to bed", "to go on a diet", "to be late"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "card", style: "board", caption: "🕐 On change d'heure ! · tap a line", title: "HEURE D'ÉTÉ · HEURE D'HIVER", sub: "en France, depuis 1976", rows: [["Dernier dimanche de mars", "+1 h · heure d'été", "Le dernier dimanche de mars, on passe à l'heure d'été : on avance d'une heure."], ["Dernier dimanche d'octobre", "−1 h · heure d'hiver", "Le dernier dimanche d'octobre, on passe à l'heure d'hiver : on recule d'une heure."], ["En octobre", "on gagne une heure de sommeil", "En octobre, on gagne une heure de sommeil !"]], foot: "À 3 h du matin, il est 2 h : on dort une heure de plus." }
  ],
  culture: [
    { icon: "⏰", kind: "Oh, le cliché !", t: "« Les Français sont toujours en retard ! »", d: "At work, not really: in the survey quoted by the book, <b>63 %</b> of French people say they are always on time at work and only a small minority are very often late. With friends it's different: arriving 10–15 minutes after the time of a dinner invitation is normal politeness (<i>le quart d'heure de politesse</i>)." },
    { icon: "🕐", kind: "Civilisation", t: "On change d'heure !", d: "Twice a year France changes the clocks: <b>summer time</b> on the last Sunday of March (+1 h) and <b>winter time</b> on the last Sunday of October (−1 h, so you “win” an hour of sleep). The goal was to save energy." },
    { icon: "⚖️", kind: "Civilisation", t: "Qui fait quoi à la maison ?", d: "Surveys show that teenage girls and boys spend about the same time studying, sleeping and online, but women still do more of the housework than men. Is the difference a cliché, or a reality that is slowly changing?" },
    { icon: "🍽️", kind: "Au fait !", t: "Meal times", d: "In France: <b>le petit déjeuner</b> (7–8 h), <b>le déjeuner</b> (12–13 h 30, many restaurants stop serving at 14 h), <b>le goûter</b> for children (16 h 30) and <b>le dîner</b> (19 h 30–21 h). In Québec and Belgium, <i>déjeuner</i> = breakfast, <i>dîner</i> = lunch and <i>souper</i> = dinner!" },
    { icon: "🗓️", kind: "Au fait !", t: "[[on]] = nous", d: "In everyday speech the French almost always say <b>on</b> instead of <b>nous</b>: [[On se retrouve à 8 h ?]] It uses the same verb form as il / elle." },
    { icon: "🎉", kind: "Francophonie", t: "Expressions imagées", d: "Belgians <i>font leur samedi</i> (do the housework), West Africans <i>ambiancent</i> (party), the Swiss <i>se réduisent</i> (go to bed), and Canadians have <i>la journée dans le corps</i> (are worn out)." }
  ],
  tips: [
    { icon: "🕰️", t: "Read the clock out loud", d: "Every time you look at a clock today, say the time twice: officially ([[quatorze heures cinquante]]) and casually ([[trois heures moins dix]])." },
    { icon: "🪞", t: "The mirror pronoun", d: "Think of <b>me, te, se, nous, vous, se</b> as a mirror: the action comes back to the subject. [[Je me lave]] = I wash myself." },
    { icon: "📣", t: "-er verbs lose their s", d: "In the imperative, the tu form of -er verbs looks like the je form: [[je réserve]] → [[Réserve !]]" }
  ],
  mistakes: [
    ["Je lève à 7 h.", "Je me lève à 7 h.", "pronominal verb"],
    ["Je me ne lève pas.", "Je ne me lève pas.", "ne before the pronoun"],
    ["Je repasse jamais.", "Je ne repasse jamais.", "ne… jamais (in writing)"],
    ["Il est neuf heures quarante-cinq. (everyday)", "Il est dix heures moins le quart.", "moins le quart"],
    ["Il est douze heures et demie. (lunch)", "Il est midi et demi.", "midi"],
    ["Réserves les places !", "Réserve les places !", "-er imperative: no s"],
    ["Tu sois à l'heure !", "Sois à l'heure !", "no subject in the imperative"],
    ["Je peux pas. (in writing)", "Je ne peux pas.", "keep ne in writing"]
  ]
});
