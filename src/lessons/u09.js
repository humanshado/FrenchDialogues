// Unité 9 · Pas de chance ! (book pp. 131–144)
// Situations: raconter une journée difficile · se plaindre, expliquer · une panne sur la route · chez le médecin · à la pharmacie · les superstitions
// Grammar: passé composé des verbes pronominaux · l'obligation et l'interdiction (2): il faut, devoir · les pronoms COI lui, leur · le conseil
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
LESSONS.push({
  id: "u09", rubrique: 5, num: 9,
  title: "Bad luck!",
  titleFr: "Pas de chance !",
  pages: "Book pp. 131–144",
  opener: { fr: "Quelle journée ! Je me suis réveillée en retard et tout est allé de travers.", en: "What a day! I woke up late and everything went wrong." },
  hero: { scene: "medecin", staff: "La médecin", people: { "La médecin": "f3", "Théo": "m5" } },
  situations: [
    ["😩", "Quelle journée !", "a series of bad events: [[D'abord…, ensuite…, puis…, enfin…]] · [[Quelle galère !]]"],
    ["🤷", "Pourquoi ?", "explanations and negative emotions: [[Parce que j'ai oublié !]] · [[Ça m'énerve !]]"],
    ["🚗", "En panne !", "road safety rules: [[Il faut mettre le gilet jaune.]] · [[Vous ne devez pas rester dans la voiture.]]"],
    ["🩺", "Chez le médecin", "symptoms: [[J'ai mal à la gorge.]] [[J'ai de la fièvre depuis deux jours.]]"],
    ["💊", "À la pharmacie", "medicines and advice: [[Je lui explique ton problème.]] · [[Buvez beaucoup d'eau.]]"]
  ],
  goals: [
    "Tell a series of events: [[d'abord]], [[ensuite]], [[puis]], [[après]], [[enfin]]",
    "Complain and sympathise: [[Quelle journée !]] · [[Mon pauvre !]] · [[Quel dommage !]]",
    "Ask why and explain: [[Pourquoi… ?]] · [[Parce que…]]",
    "Use reflexive verbs in the past: [[Je me suis réveillée en retard.]] · [[Tu t'es amusé ?]]",
    "Express negative emotions: [[Je suis inquiet.]] · [[Ça me stresse !]] · [[J'ai des soucis.]]",
    "Express obligation and prohibition with [[il faut]] and [[devoir]]",
    "Talk about your health and body: [[J'ai mal au dos.]] · [[Je me sens fatigué.]]",
    "Use [[lui]] and [[leur]] and give advice: [[Tu peux prendre une aspirine.]] · [[Reposez-vous !]]"
  ],
  glance: [
    ["🗣️", "Communication", "telling a bad day · complaining · explaining · health · advice"],
    ["🧩", "Grammaire", "passé composé of reflexive verbs · il faut / devoir · lui, leur · giving advice"],
    ["🗂️", "Vocabulaire", "everyday problems · negative emotions · the body and health · at the doctor's and the pharmacy"],
    ["🔊", "Phonétique", "[ʃ] / [ʒ] · linking consonants to the next vowel"],
    ["⭐", "The phrase to learn first", "[[J'ai mal à la tête depuis deux jours.]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "What a day!", titleFr: "Quelle journée ! · Sandra raconte",
      note: "Sandra phones her mother after a disastrous day. Listen to the sequence words ([[d'abord]], [[ensuite]], [[puis]], [[enfin]]) and the reflexive verbs in the past: [[je me suis réveillée]].",
      scene: "maison", people: { "Sandra": "f7", "Sa mère": "f6" }, phone: ["Sandra", "Sa mère"],
      lines: [
        ["Sa mère", "Allô, Sandra ? Alors, ton voyage à Paris ? Qu'est-ce qui s'est passé ?", "Hello, Sandra? So, your trip to Paris? What happened?"],
        ["Sandra", "Oh, maman, quelle journée ! D'abord, je me suis réveillée en retard : mon réveil n'a pas sonné.", "Oh, Mum, what a day! First, I woke up late: my alarm didn't go off."],
        ["Sa mère", "Ma pauvre !", "You poor thing!"],
        ["Sandra", "Ensuite, je me suis dépêchée, mais j'ai raté mon train. Puis j'ai perdu mon billet dans le métro !", "Then I hurried, but I missed my train. Then I lost my ticket on the metro!"],
        ["Sa mère", "Quelle galère ! Et après ?", "What a nightmare! And then?"],
        ["Sandra", "Après, j'ai dû acheter un nouveau billet, très cher. Et enfin, il a commencé à pleuvoir… et je n'avais pas de parapluie !", "After that, I had to buy a new ticket, very expensive. And finally it started to rain… and I had no umbrella!"],
        ["Sa mère", "Quel dommage ! Mais le soir, tu t'es amusée avec Luc ?", "What a shame! But in the evening, did you have fun with Luc?"],
        ["Sandra", "Non… Luc n'est pas venu. Nous ne nous sommes pas vus !", "No… Luc didn't come. We didn't see each other!"]
      ],
      glossary: [["Quelle journée !", "what a day!"], ["Je me suis réveillée.", "I woke up (f)"], ["rater", "to miss (a train)"], ["Quelle galère !", "what a nightmare! (casual)"]]
    },
    {
      id: "d2", n: 2, title: "Why didn't you come?", titleFr: "Au café · Pourquoi tu n'es pas venu ?",
      note: "The next day Sandra meets Luc. Listen to [[Pourquoi… ?]] / [[Parce que…]] and the negative emotions: [[ça m'énerve]], [[j'étais inquiète]].",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Sandra": "f7", "Luc": "m1" },
      lines: [
        ["Sandra", "Luc ! Pourquoi tu n'es pas venu hier soir ? Je t'ai attendu une heure !", "Luc! Why didn't you come last night? I waited an hour for you!"],
        ["Luc", "Je suis désolé, Sandra… Parce que j'ai oublié le rendez-vous !", "I'm so sorry, Sandra… Because I forgot our date!"],
        ["Sandra", "Tu as oublié ? Ça m'énerve ! J'étais inquiète, et tu n'as pas répondu au téléphone.", "You forgot? That makes me so annoyed! I was worried, and you didn't answer the phone."],
        ["Luc", "Mon portable est tombé dans l'eau… Et je me suis endormi devant la télé.", "My phone fell in the water… And I fell asleep in front of the TV."],
        ["Sandra", "Tu t'es endormi ! Et moi, j'ai eu une journée horrible.", "You fell asleep! And I had a horrible day."],
        ["Luc", "Je sais, tu me manques… Ce soir, je t'invite au restaurant. D'accord ?", "I know, I miss you… Tonight I'm taking you out to dinner. OK?"],
        ["Sandra", "D'accord… mais mets ton réveil !", "OK… but set your alarm!"]
      ],
      glossary: [["Pourquoi… ? — Parce que…", "why…? — because…"], ["Ça m'énerve !", "that annoys me!"], ["inquiet, inquiète", "worried"], ["Tu me manques.", "I miss you"]]
    },
    {
      id: "d3", n: 3, title: "Broken down on the road", titleFr: "Sur la route · Ma voiture est en panne !",
      note: "Marc's car breaks down on the motorway. He phones the breakdown service. Listen to the safety rules with [[il faut]] and [[devoir]].",
      scene: "route", people: { "Marc": "m2", "La dépanneuse": "f8" }, phone: ["Marc", "La dépanneuse"],
      lines: [
        ["Marc", "Allô ? Bonjour, ma voiture est en panne sur l'autoroute A7, près de Valence. Il y a de la fumée !", "Hello? Hello, my car has broken down on the A7 motorway, near Valence. There's smoke!"],
        ["La dépanneuse", "D'accord, monsieur. D'abord, votre voiture ne doit pas rester sur la route. Il faut la garer sur le côté.", "OK, sir. First, your car mustn't stay on the road. You must park it at the side."],
        ["Marc", "C'est fait.", "Done."],
        ["La dépanneuse", "Ensuite, vous devez mettre le gilet jaune et poser le triangle à trente mètres de la voiture.", "Next, you must put on the yellow vest and place the triangle thirty metres from the car."],
        ["Marc", "Et mes passagers ? Ils peuvent rester dans la voiture ? Il pleut…", "And my passengers? Can they stay in the car? It's raining…"],
        ["La dépanneuse", "Non ! Il ne faut pas rester dans la voiture. Les passagers doivent sortir par la droite et attendre derrière la glissière de sécurité.", "No! You mustn't stay in the car. The passengers must get out on the right and wait behind the safety barrier."],
        ["Marc", "Très bien. Vous arrivez quand ?", "Fine. When will you get here?"],
        ["La dépanneuse", "Dans vingt minutes. Ne vous inquiétez pas !", "In twenty minutes. Don't worry!"]
      ],
      glossary: [["en panne", "broken down"], ["Il faut + infinitif", "you must…"], ["devoir", "must, to have to"], ["le gilet jaune", "the high-visibility vest"]]
    },
    {
      id: "d4", n: 4, title: "At the doctor's", titleFr: "Chez le médecin · Qu'est-ce qui vous arrive ?",
      note: "Théo is ill. Listen to the doctor's questions and his symptoms: [[J'ai mal à…]], [[J'ai de la fièvre depuis…]], and the prescription.",
      scene: "medecin", staff: "La médecin", people: { "La médecin": "f3", "Théo": "m5" },
      lines: [
        ["La médecin", "Bonjour, monsieur. Qu'est-ce qui vous arrive ?", "Hello. What's the matter?"],
        ["Théo", "Je suis malade, docteur. J'ai mal à la gorge et à la tête, et je tousse beaucoup.", "I'm ill, doctor. I've got a sore throat and a headache, and I'm coughing a lot."],
        ["La médecin", "Vous avez de la fièvre ?", "Do you have a temperature?"],
        ["Théo", "Oui, trente-neuf, depuis deux jours. Je me sens très fatigué.", "Yes, thirty-nine, for two days. I feel very tired."],
        ["La médecin", "Je vais vous examiner. Quel est votre poids ? Et votre taille ?", "I'm going to examine you. What's your weight? And your height?"],
        ["Théo", "Je pèse soixante-treize kilos et je mesure un mètre soixante-douze.", "I weigh seventy-three kilos and I'm one metre seventy-two."],
        ["La médecin", "Bon, c'est une grippe. Je vous fais une ordonnance : vous prenez ces comprimés trois fois par jour, pendant cinq jours. Et il faut vous reposer !", "Right, it's flu. I'll write you a prescription: take these tablets three times a day, for five days. And you must rest!"],
        ["Théo", "Je peux aller travailler ?", "Can I go to work?"],
        ["La médecin", "Non, vous devez rester au lit trois jours. Je vous fais un arrêt de travail.", "No, you must stay in bed for three days. I'll give you a sick note."]
      ],
      glossary: [["Qu'est-ce qui vous arrive ?", "what's the matter?"], ["J'ai mal à la gorge.", "I have a sore throat"], ["l'ordonnance", "the prescription"], ["un arrêt de travail", "a sick note"]]
    },
    {
      id: "d5", n: 5, title: "At the pharmacy", titleFr: "À la pharmacie · Vous pouvez me conseiller ?",
      note: "Théo's sister Éloïse goes to the pharmacy for him. Listen to [[lui]] (to him / her) and [[leur]] (to them), and the pharmacist's advice.",
      scene: "pharmacie", staff: "Le pharmacien", people: { "Le pharmacien": "m4", "Éloïse": "f2" }, hold: { "Éloïse": "📋" },
      lines: [
        ["Éloïse", "Bonjour, monsieur. Voici l'ordonnance de mon frère. Il a la grippe : le médecin lui a donné ces médicaments.", "Hello. Here's my brother's prescription. He has the flu: the doctor gave him these medicines."],
        ["Le pharmacien", "Très bien. Voilà les comprimés. Vous lui dites : trois par jour, pendant les repas.", "Very good. Here are the tablets. Tell him: three a day, with meals."],
        ["Éloïse", "D'accord. Et il tousse beaucoup. Vous avez quelque chose ?", "OK. And he's coughing a lot. Do you have anything?"],
        ["Le pharmacien", "Je vous conseille ce sirop pour la toux. Il doit aussi boire beaucoup d'eau et dormir.", "I recommend this cough syrup. He must also drink a lot of water and sleep."],
        ["Éloïse", "Merci. Et mes parents ont mal au dos depuis le déménagement… Qu'est-ce que je leur achète ?", "Thanks. And my parents have had backache since the house move… What shall I buy them?"],
        ["Le pharmacien", "Vous pouvez leur donner cette crème pour les muscles. Mais s'ils ont toujours mal, ils doivent aller chez le médecin.", "You can give them this cream for the muscles. But if they still hurt, they must see a doctor."],
        ["Éloïse", "Parfait. Ça fait combien ?", "Perfect. How much is it?"],
        ["Le pharmacien", "Douze euros quarante. Et dites à votre frère : bon rétablissement !", "Twelve forty. And tell your brother: get well soon!"]
      ],
      glossary: [["le médecin lui a donné…", "the doctor gave him…"], ["Je vous conseille…", "I recommend…"], ["le sirop pour la toux", "cough syrup"], ["Bon rétablissement !", "get well soon!"]]
    }
  ],

  vocab: [
    { t: "rater le train", en: "to miss the train", pic: "🚆", cat: "Les petits problèmes" },
    { t: "perdre", en: "to lose", pic: "❓", cat: "Les petits problèmes" },
    { t: "oublier", en: "to forget", pic: "🤦", cat: "Les petits problèmes" },
    { t: "être en retard", en: "to be late", pic: "⏰", cat: "Les petits problèmes" },
    { t: "tomber en panne", en: "to break down", pic: "🚗", cat: "Les petits problèmes" },
    { t: "se tromper", en: "to make a mistake", pic: "❌", cat: "Les petits problèmes" },
    { t: "le réveil", en: "the alarm clock", pic: "⏰", cat: "Les petits problèmes", g: "m" },
    { t: "Quelle journée !", en: "What a day!", pic: "😩", cat: "Se plaindre" },
    { t: "Quelle galère !", en: "What a nightmare! (casual)", pic: "😫", cat: "Se plaindre" },
    { t: "Quel dommage !", en: "What a shame!", pic: "😞", cat: "Se plaindre" },
    { t: "Mon pauvre ! / Ma pauvre !", en: "You poor thing!", pic: "🫂", cat: "Se plaindre" },
    { t: "Pas de chance !", en: "Bad luck!", pic: "🍀", cat: "Se plaindre" },
    { t: "triste", en: "sad", pic: "😢", cat: "Les émotions négatives" },
    { t: "inquiet, inquiète", en: "worried", pic: "😟", cat: "Les émotions négatives" },
    { t: "étonné(e)", en: "astonished", pic: "😲", cat: "Les émotions négatives" },
    { t: "stressé(e)", en: "stressed", pic: "😰", cat: "Les émotions négatives" },
    { t: "énervé(e)", en: "annoyed, irritated", pic: "😠", cat: "Les émotions négatives" },
    { t: "Ça m'énerve !", en: "That annoys me!", pic: "💢", cat: "Les émotions négatives" },
    { t: "Ça me stresse !", en: "That stresses me out!", pic: "😵", cat: "Les émotions négatives" },
    { t: "J'ai des soucis.", en: "I have worries.", pic: "🌧️", cat: "Les émotions négatives" },
    { t: "la panique", en: "panic", pic: "😱", cat: "Les émotions négatives", g: "f" },
    { t: "la déception", en: "disappointment", pic: "😔", cat: "Les émotions négatives", g: "f" },
    { t: "la tête", en: "the head", pic: "🙂", cat: "Le corps", g: "f" },
    { t: "les yeux (un œil)", en: "the eyes (an eye)", pic: "👀", cat: "Le corps", g: "pl" },
    { t: "le nez", en: "the nose", pic: "👃", cat: "Le corps", g: "m" },
    { t: "la bouche", en: "the mouth", pic: "👄", cat: "Le corps", g: "f" },
    { t: "les dents", en: "the teeth", pic: "🦷", cat: "Le corps", g: "pl" },
    { t: "l'oreille", en: "the ear", pic: "👂", cat: "Le corps", g: "f" },
    { t: "la gorge", en: "the throat", pic: "🗣️", cat: "Le corps", g: "f" },
    { t: "le cou", en: "the neck", pic: "🦒", cat: "Le corps", g: "m" },
    { t: "l'épaule", en: "the shoulder", pic: "🤷", cat: "Le corps", g: "f" },
    { t: "le bras", en: "the arm", pic: "💪", cat: "Le corps", g: "m" },
    { t: "la main", en: "the hand", pic: "✋", cat: "Le corps", g: "f" },
    { t: "le dos", en: "the back", pic: "🔙", cat: "Le corps", g: "m" },
    { t: "le ventre", en: "the stomach, the belly", pic: "🫃", cat: "Le corps", g: "m" },
    { t: "la jambe", en: "the leg", pic: "🦵", cat: "Le corps", g: "f" },
    { t: "le genou", en: "the knee", pic: "🦵", cat: "Le corps", g: "m" },
    { t: "le pied", en: "the foot", pic: "🦶", cat: "Le corps", g: "m" },
    { t: "malade", en: "ill, sick", pic: "🤒", cat: "La santé" },
    { t: "avoir mal à…", en: "to have a pain in…", pic: "🤕", cat: "La santé", note: "[[mal à la tête]], [[au dos]], [[aux dents]]" },
    { t: "avoir de la fièvre", en: "to have a temperature", pic: "🌡️", cat: "La santé" },
    { t: "tousser", en: "to cough", pic: "😷", cat: "La santé" },
    { t: "la grippe", en: "the flu", pic: "🤧", cat: "La santé", g: "f" },
    { t: "le rhume", en: "a cold", pic: "🤧", cat: "La santé", g: "m" },
    { t: "se sentir (bien / mal)", en: "to feel (well / ill)", pic: "🙂", cat: "La santé" },
    { t: "être en forme", en: "to be fit, in good shape", pic: "💪", cat: "La santé" },
    { t: "fatigué(e)", en: "tired", pic: "🥱", cat: "La santé" },
    { t: "peser", en: "to weigh", pic: "⚖️", cat: "La santé", note: "[[Je pèse 73 kilos.]]" },
    { t: "mesurer", en: "to measure (height)", pic: "📏", cat: "La santé", note: "[[Je mesure 1,72 m.]]" },
    { t: "le médecin, le docteur", en: "the doctor", pic: "🩺", cat: "Chez le médecin", g: "m" },
    { t: "le rendez-vous", en: "the appointment", pic: "📅", cat: "Chez le médecin", g: "m" },
    { t: "examiner", en: "to examine", pic: "🔍", cat: "Chez le médecin" },
    { t: "l'ordonnance", en: "the prescription", pic: "📋", cat: "Chez le médecin", g: "f" },
    { t: "la pharmacie", en: "the pharmacy, chemist's", pic: "✚", cat: "À la pharmacie", g: "f" },
    { t: "le médicament", en: "the medicine", pic: "💊", cat: "À la pharmacie", g: "m" },
    { t: "le comprimé", en: "the tablet", pic: "💊", cat: "À la pharmacie", g: "m" },
    { t: "le sirop", en: "the syrup", pic: "🍯", cat: "À la pharmacie", g: "m" },
    { t: "la crème", en: "the cream", pic: "🧴", cat: "À la pharmacie", g: "f" },
    { t: "le pansement", en: "the plaster, the dressing", pic: "🩹", cat: "À la pharmacie", g: "m" },
    { t: "Bon rétablissement !", en: "Get well soon!", pic: "💐", cat: "À la pharmacie" },
    { t: "le porte-bonheur", en: "the lucky charm", pic: "🍀", cat: "Les superstitions", g: "m" },
    { t: "le trèfle à quatre feuilles", en: "the four-leaf clover", pic: "🍀", cat: "Les superstitions", g: "m" },
    { t: "le fer à cheval", en: "the horseshoe", pic: "🧲", cat: "Les superstitions", g: "m" },
    { t: "le chat noir", en: "the black cat", pic: "🐈‍⬛", cat: "Les superstitions", g: "m" }
  ],

  grammar: [
    {
      id: "g-succession",
      title: "Telling a series of events · complaining and sympathising",
      body: [
        "To tell events in order: [[D'abord]] (first), [[ensuite]] / [[puis]] / [[après]] (then), [[enfin]] (finally): [[D'abord, j'ai raté le train. Ensuite, j'ai perdu mon billet. Enfin, il a plu !]]",
        "To complain: [[Quelle journée !]] · [[Quelle galère !]] (casual) · [[Pas de chance !]] To sympathise: [[Mon pauvre ! / Ma pauvre !]] · [[Quel dommage !]] · [[C'est nul !]] (casual).",
        "To ask why and explain: [[Pourquoi tu n'es pas venu ?]] → [[Parce que j'ai oublié le rendez-vous.]]"
      ],
      info: { type: "agenda", title: "😩 Sandra's terrible day", items: [
        { h: 7, m: 45, pic: "⏰", fr: "D'abord, je me suis réveillée en retard.", en: "First, I woke up late." },
        { h: 8, m: 30, pic: "🚆", fr: "Ensuite, j'ai raté mon train.", en: "Then I missed my train." },
        { h: 10, m: 15, pic: "🎫", fr: "Puis j'ai perdu mon billet dans le métro.", en: "Then I lost my ticket on the metro." },
        { h: 11, m: 0, pic: "💸", fr: "Après, j'ai dû acheter un nouveau billet.", en: "After that I had to buy a new ticket." },
        { h: 18, m: 0, pic: "🌧️", fr: "Enfin, il a commencé à pleuvoir !", en: "Finally, it started to rain!" },
        { h: 20, m: 0, pic: "💔", fr: "Et Luc n'est pas venu. Quelle journée !", en: "And Luc didn't come. What a day!" }
      ] }
    },
    {
      id: "g-pc-pron",
      title: "Reflexive verbs in the past: [[je me suis réveillé(e)]]",
      body: [
        "All reflexive verbs take [[être]] in the passé composé: [[je me suis réveillé]], [[tu t'es amusé]], [[il s'est endormi]]. The pronoun stays before être.",
        "Like other être verbs, the participle usually <b>agrees with the subject</b>: [[elle s'est amusée]], [[ils se sont amusés]], [[elles se sont amusées]].",
        "Negative: <b>ne</b> before the pronoun, <b>pas</b> after être: [[Nous ne nous sommes pas vus.]] · [[Je ne me suis pas réveillé.]]"
      ],
      info: [
        { type: "conj", title: "🔁 s'amuser in the passé composé", verbs: [
          { inf: "s'amuser", en: "to have fun", forms: ["je me suis amusé(e)", "tu t'es amusé(e)", "il s'est amusé · elle s'est amusée", "nous nous sommes amusé(e)s", "vous vous êtes amusé(e)(s)", "ils se sont amusés · elles se sont amusées"] }
        ] },
        { type: "pattern", title: "🥪 The negative sandwich (reflexive + past)", rows: [
          ["Je", "ne", "me", "suis", "pas", { opts: ["réveillé(e).", "dépêché(e).", "endormi(e)."] }],
          ["Nous", "ne", "nous", "sommes", "pas", "vus", "."]
        ], note: "ne + pronoun + être + pas + participle." }
      ],
      widget: {
        type: "combo", label: "Tell what happened · pick a person and a verb",
        rows: [{ k: "je_m", label: "je (Luc)" }, { k: "je_f", label: "je (Sandra)" }, { k: "il", label: "il" }, { k: "elles", label: "elles" }, { k: "neg", label: "❌ je (negative)" }],
        cols: [{ k: "rev", label: "⏰ se réveiller tard" }, { k: "dep", label: "🏃 se dépêcher" }, { k: "amu", label: "🎉 s'amuser" }, { k: "end", label: "😴 s'endormir" }],
        out: {
          "je_m|rev": ["Je me suis réveillé tard.", "I woke up late."], "je_f|rev": ["Je me suis réveillée tard.", "I woke up late.", "Sandra: + e"], "il|rev": ["Il s'est réveillé tard.", "He woke up late."], "elles|rev": ["Elles se sont réveillées tard.", "They woke up late.", "+ es"], "neg|rev": ["Je ne me suis pas réveillé.", "I didn't wake up."],
          "je_m|dep": ["Je me suis dépêché.", "I hurried."], "je_f|dep": ["Je me suis dépêchée.", "I hurried."], "il|dep": ["Il s'est dépêché.", "He hurried."], "elles|dep": ["Elles se sont dépêchées.", "They hurried."], "neg|dep": ["Je ne me suis pas dépêché.", "I didn't hurry."],
          "je_m|amu": ["Je me suis bien amusé !", "I had a great time!"], "je_f|amu": ["Je me suis bien amusée !", "I had a great time!"], "il|amu": ["Il s'est amusé.", "He had fun."], "elles|amu": ["Elles se sont amusées.", "They had fun."], "neg|amu": ["Je ne me suis pas amusé.", "I didn't have fun."],
          "je_m|end": ["Je me suis endormi devant la télé.", "I fell asleep in front of the TV."], "je_f|end": ["Je me suis endormie devant la télé.", "I fell asleep in front of the TV."], "il|end": ["Il s'est endormi.", "He fell asleep."], "elles|end": ["Elles se sont endormies.", "They fell asleep."], "neg|end": ["Je ne me suis pas endormi.", "I didn't fall asleep."]
        }
      }
    },
    {
      id: "g-falloir",
      title: "Obligation and prohibition: [[il faut]] and [[devoir]]",
      body: [
        "To express an obligation: [[il faut]] + infinitive (general, impersonal) or [[devoir]] + infinitive (for a specific person): [[Il faut respecter les règles de sécurité.]] · [[Vous devez mettre le gilet jaune.]]",
        "In the negative, they express a <b>prohibition</b>: [[Il ne faut pas rouler vite.]] · [[Tu ne dois pas téléphoner sur la route.]]",
        "[[devoir]] is irregular: [[je dois]], [[tu dois]], [[il doit]], [[nous devons]], [[vous devez]], [[ils doivent]]. Past: [[j'ai dû]] (I had to)."
      ],
      info: [
        { type: "signs", title: "🚗 En cas de panne sur l'autoroute", items: [
          { type: "yes", pic: "🦺", fr: "Il faut mettre le gilet jaune.", en: "You must wear the yellow vest." },
          { type: "yes", pic: "⚠️", fr: "Vous devez poser le triangle à trente mètres.", en: "Place the triangle 30 m away." },
          { type: "yes", pic: "📞", fr: "Il faut appeler un dépanneur.", en: "Call a breakdown service." },
          { type: "no", pic: "🚗", fr: "Il ne faut pas rester dans la voiture.", en: "Do not stay in the car." },
          { type: "no", pic: "⬅️", fr: "Ne sortez pas de la voiture par la gauche.", en: "Don't get out on the traffic side." },
          { type: "no", pic: "🛣️", fr: "Votre voiture ne doit pas rester sur la route.", en: "Your car must not stay on the road." }
        ], note: "Blue = obligation (<b>il faut</b>, <b>devoir</b>). Red = prohibition (<b>il ne faut pas</b>, <b>ne pas devoir</b>)." },
        { type: "conj", title: "🔁 devoir", verbs: [{ inf: "devoir", en: "must, to have to", forms: ["je dois", "tu dois", "il / elle / on doit", "nous devons", "vous devez", "ils / elles doivent"] }] }
      ],
      widget: {
        type: "combo", label: "Write the rule · pick a structure and a situation",
        rows: [{ k: "faut", label: "✅ Il faut…" }, { k: "nefaut", label: "🚫 Il ne faut pas…" }, { k: "devez", label: "✅ Vous devez…" }, { k: "nedevez", label: "🚫 Vous ne devez pas…" }],
        cols: [{ k: "gilet", label: "🦺 le gilet jaune" }, { k: "tel", label: "📱 téléphoner en conduisant" }, { k: "lumiere", label: "🚲 une lumière la nuit (vélo)" }, { k: "vite", label: "💨 rouler vite" }],
        out: {
          "faut|gilet": ["Il faut toujours avoir le gilet jaune.", "You must always have the yellow vest."], "nefaut|gilet": ["Il ne faut pas oublier le gilet jaune.", "Don't forget the yellow vest."], "devez|gilet": ["Vous devez mettre le gilet jaune.", "You must put on the yellow vest."], "nedevez|gilet": ["Vous ne devez pas oublier le gilet jaune.", "You must not forget the yellow vest."],
          "faut|tel": ["Il faut s'arrêter pour téléphoner.", "You must stop to phone."], "nefaut|tel": ["Il ne faut pas téléphoner en conduisant.", "You mustn't phone while driving."], "devez|tel": ["Vous devez vous arrêter pour téléphoner.", "You must stop to phone."], "nedevez|tel": ["Vous ne devez pas téléphoner en conduisant.", "You mustn't phone while driving."],
          "faut|lumiere": ["La nuit, il faut utiliser une lumière.", "At night you must use a light."], "nefaut|lumiere": ["Il ne faut pas rouler sans lumière la nuit.", "You mustn't ride without a light at night."], "devez|lumiere": ["Les cyclistes doivent utiliser une lumière la nuit.", "Cyclists must use a light at night.", "ils → doivent"], "nedevez|lumiere": ["Vous ne devez pas rouler sans lumière.", "You mustn't ride without a light."],
          "faut|vite": ["Il faut respecter les limites de vitesse.", "You must respect speed limits."], "nefaut|vite": ["Il ne faut pas rouler vite.", "You mustn't drive fast."], "devez|vite": ["Vous devez ralentir.", "You must slow down."], "nedevez|vite": ["Vous ne devez pas rouler vite.", "You mustn't drive fast."]
        }
      }
    },
    {
      id: "g-sante",
      title: "Talking about your health: [[J'ai mal à…]]",
      body: [
        "[[avoir mal]] + [[à]] + the body part, with the right fusion: [[J'ai mal à la tête.]] · [[J'ai mal à l'oreille.]] · [[J'ai mal au dos.]] (à + le) · [[J'ai mal aux dents.]] (à + les).",
        "Other symptoms: [[J'ai de la fièvre.]] · [[Je tousse.]] · [[Je suis malade.]] · [[Je suis au lit, je ne peux pas me lever.]] Use [[depuis]] for how long: [[J'ai de la fièvre depuis deux jours.]]",
        "How you feel: [[Tu es fatigué(e) ?]] · [[Je ne me sens pas bien.]] · [[Je suis en forme !]] The doctor asks: [[Qu'est-ce qui vous arrive ?]] · [[Vous avez mal où ?]] · weight and height: [[Je pèse 73 kilos.]] · [[Je mesure 1,72 m.]]",
        "Tap the body parts below, then play <b>🎧 J'ai mal où ?</b>"
      ],
      info: [
        { type: "body", note: "Remember the fusions: <b>à + le = au</b> (au dos, au ventre, au pied), <b>à + les = aux</b> (aux yeux, aux dents), but <b>à la</b> and <b>à l'</b> stay." },
        { type: "card", style: "receipt", caption: "📋 Théo's prescription · tap a line", title: "Docteur A. Martin", sub: "Médecin généraliste · 12 avenue Victor-Hugo, Lyon", rows: [["M. Théo Girard", "le 25 novembre", "Monsieur Théo Girard, le vingt-cinq novembre"], ["Comprimés · 3 par jour", "pendant 5 jours", "des comprimés, trois par jour, pendant cinq jours"], ["Sirop pour la toux", "matin et soir", "un sirop pour la toux, matin et soir"], ["Repos · arrêt de travail", "3 jours", "trois jours de repos"]], foot: "Bon rétablissement !" }
      ],
      widget: {
        type: "contract", label: "J'ai mal… · à + the article (tap ➕ for plural parts)",
        preps: [{ p: "à", label: "J'ai mal… (à)", frame: "J'ai mal" }],
        nouns: [{ t: "tête", g: "f", pic: "🤕" }, { t: "dos", g: "m", pic: "🔙" }, { t: "ventre", g: "m", pic: "🫃" }, { t: "oreille", g: "f", v: true, pic: "👂" }, { t: "dent", g: "f", pic: "🦷" }, { t: "pied", g: "m", pic: "🦶" }, { t: "gorge", g: "f", pic: "🗣️" }, { t: "œil", g: "m", v: true, pic: "👁️", pl: "yeux" }]
      }
    },
    {
      id: "g-coi",
      title: "[[lui]] and [[leur]]: to him, to her, to them",
      body: [
        "[[lui]] (singular, him <i>or</i> her) and [[leur]] (plural) replace <b>à + a person</b>, with verbs like [[parler à]], [[téléphoner à]], [[donner à]], [[dire à]], [[demander à]], [[acheter à]]: [[Je parle au médecin.]] → [[Je lui parle.]] · [[J'achète des médicaments à mes parents.]] → [[Je leur achète des médicaments.]]",
        "Like le / la / les, they go <b>before the verb</b>: [[Je lui envoie un message.]] · negative [[Je ne lui demande pas d'argent.]] · past [[Le médecin lui a donné des médicaments.]]",
        "⚠️ [[leur]] the pronoun never takes an s (but [[leurs]] the possessive does: [[leurs enfants]])."
      ],
      info: { type: "compare", title: "👤 à + person → lui / leur", cols: [
        { head: "lui", en: "à + one person (m or f)", color: "#c2508e", lines: [["On pose des questions au professeur. → On lui pose des questions.", ""], ["Je téléphone à ma sœur. → Je lui téléphone.", ""], ["Le médecin a parlé à Théo. → Il lui a parlé.", ""]] },
        { head: "leur", en: "à + several people", color: "#7b4fb5", lines: [["J'achète une crème à mes parents. → Je leur achète une crème.", ""], ["On annonce la nouvelle aux amis. → On leur annonce la nouvelle.", ""], ["Je ne parle pas aux voisins. → Je ne leur parle pas.", ""]] }
      ] },
      widget: {
        type: "sort", label: "Devinettes · lui or leur? (who is it?)",
        cols: [{ k: "lui", label: "lui", color: "#c2508e" }, { k: "leur", label: "leur", color: "#7b4fb5" }],
        items: [
          { t: "On … parle de ses problèmes de santé. (le médecin)", k: "lui", say: "On lui parle de ses problèmes de santé." },
          { t: "On … achète des médicaments. (la pharmacienne)", k: "lui", say: "On lui achète des médicaments." },
          { t: "On … annonce les bonnes nouvelles. (les amies)", k: "leur", say: "On leur annonce les bonnes nouvelles." },
          { t: "On … demande de sortir de la voiture. (les passagers)", k: "leur", say: "On leur demande de sortir de la voiture." },
          { t: "On … téléphone pour la voiture en panne. (le dépanneur)", k: "lui", say: "On lui téléphone pour la voiture en panne." },
          { t: "Je … raconte ma vie. (mon meilleur ami)", k: "lui", say: "Je lui raconte ma vie." }
        ]
      }
    },
    {
      id: "g-conseil",
      title: "Giving advice",
      body: [
        "Three ways to advise someone: the <b>imperative</b> [[Prenez des vacances !]] · [[Reposez-vous !]] · [[il faut]] + infinitive [[Il faut prendre des vacances.]] · [[pouvoir]] + infinitive (softer) [[Tu peux prendre une aspirine.]] Or: [[Mon conseil : …]] · [[Je vous conseille de…]]"
      ],
      info: { type: "ladder", title: "🪜 From gentle to firm advice", levels: [
        { name: "Suggestion", en: "soft", color: "#2f8a4f", ex: ["Tu peux prendre une aspirine.", "Je te conseille de dormir."] },
        { name: "Conseil", en: "clear", color: "#e0a526", ex: ["Mon conseil : bois beaucoup d'eau.", "Mange des légumes !"] },
        { name: "Obligation", en: "firm", color: "#e0474f", ex: ["Il faut te reposer.", "Vous devez rester au lit."] }
      ] },
      widget: {
        type: "combo", label: "Advise a friend · pick a problem and a structure",
        rows: [{ k: "pouvoir", label: "🙂 Tu peux…" }, { k: "imp", label: "📣 impératif" }, { k: "faut", label: "❗ Il faut…" }],
        cols: [{ k: "tete", label: "🤕 J'ai mal à la tête." }, { k: "ventre", label: "🫃 J'ai mal au ventre." }, { k: "fatigue", label: "🥱 Je suis fatigué." }, { k: "dos", label: "🔙 J'ai mal au dos." }],
        out: {
          "pouvoir|tete": ["Tu peux prendre une aspirine.", "You can take an aspirin."], "imp|tete": ["Prends une aspirine et repose-toi !", "Take an aspirin and rest!"], "faut|tete": ["Il faut boire de l'eau et dormir.", "You must drink water and sleep."],
          "pouvoir|ventre": ["Tu peux manger des légumes.", "You can eat vegetables."], "imp|ventre": ["Ne mange pas trop de chocolat !", "Don't eat too much chocolate!"], "faut|ventre": ["Il faut aller chez le médecin.", "You must see a doctor."],
          "pouvoir|fatigue": ["Tu peux prendre quatre ou cinq jours de vacances.", "You can take four or five days off."], "imp|fatigue": ["Couche-toi plus tôt !", "Go to bed earlier!"], "faut|fatigue": ["Il faut sortir de Paris !", "You need to get out of Paris!"],
          "pouvoir|dos": ["Tu peux mettre cette crème.", "You can put on this cream."], "imp|dos": ["Fais du yoga !", "Do some yoga!"], "faut|dos": ["Il faut faire du sport.", "You must do some exercise."]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour se plaindre / plaindre quelqu'un", fnEn: "complaining", icon: "😩", items: [
      ["Quelle journée !", "What a day!", "std", true],
      ["Quelle galère !", "What a nightmare!", "fam"],
      ["Mon pauvre ! / Ma pauvre !", "You poor thing!", "std", true],
      ["Quel dommage ! / C'est nul !", "What a shame! / It's rubbish!", "std"]
    ] },
    { fn: "Pour raconter une succession d'événements", fnEn: "sequencing", icon: "➡️", items: [
      ["D'abord, je me suis réveillée en retard.", "First, I woke up late.", "std", true],
      ["Ensuite / Puis / Après, j'ai raté le train.", "Then I missed the train.", "std", true],
      ["Enfin, il a commencé à pleuvoir.", "Finally, it started to rain.", "std"]
    ] },
    { fn: "Pour donner une explication", fnEn: "explaining", icon: "🤷", items: [
      ["Pourquoi tu n'es pas venu ?", "Why didn't you come?", "std", true],
      ["Parce que j'ai oublié le rendez-vous !", "Because I forgot the appointment!", "std", true]
    ] },
    { fn: "Pour exprimer une émotion négative", fnEn: "negative emotions", icon: "😟", items: [
      ["Je suis triste, inquiet / inquiète, étonné(e).", "I'm sad, worried, astonished.", "std", true],
      ["Ça me stresse !", "It stresses me out!", "fam"],
      ["Ça m'énerve !", "It annoys me!", "fam", true],
      ["J'ai des soucis.", "I have worries.", "std"]
    ] },
    { fn: "Pour parler de l'état de santé", fnEn: "health", icon: "🩺", items: [
      ["Qu'est-ce qui vous arrive ? · Vous avez mal où ?", "What's wrong? · Where does it hurt? (doctor)", "poli", true],
      ["Je suis malade. J'ai mal à la gorge.", "I'm ill. I have a sore throat.", "std", true],
      ["J'ai de la fièvre depuis deux jours.", "I've had a temperature for two days.", "std", true],
      ["Vous prenez trois comprimés par jour, pendant cinq jours.", "Take three tablets a day, for five days. (doctor)", "std"],
      ["Je pèse 73 kg. · Je mesure 1,72 m.", "I weigh 73 kg. · I'm 1.72 m tall.", "std"]
    ] },
    { fn: "Pour demander / dire comment on se sent", fnEn: "how are you feeling?", icon: "🙂", items: [
      ["Tu es fatigué(e) ? · Tu (n')es (pas) en forme ?", "Are you tired? · Are(n't) you feeling fit?", "fam", true],
      ["Je (ne) me sens (pas) bien.", "I (don't) feel well.", "std", true]
    ] },
    { fn: "Pour donner un conseil", fnEn: "advice", icon: "💡", items: [
      ["Prenez des vacances !", "Take a holiday!", "std", true],
      ["Il faut prendre des vacances.", "You need to take a holiday.", "std"],
      ["Tu peux prendre une aspirine.", "You can take an aspirin.", "std", true],
      ["Mon conseil : achète un nouveau réveil !", "My advice: buy a new alarm clock!", "fam"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · at the doctor's", lanes: ["La médecin", "Le patient"], av: ["f3", "m5"], steps: [
    { s: 0, fr: "Bonjour ! Qu'est-ce qui vous arrive ?", en: "Hello! What's the matter?" },
    { s: 1, fr: "Je ne me sens pas bien. J'ai mal à la tête et à la gorge.", en: "I don't feel well. I have a headache and a sore throat." },
    { s: 0, fr: "Depuis quand ?", en: "Since when?" },
    { s: 1, fr: "Depuis deux jours. Et j'ai de la fièvre.", en: "For two days. And I have a temperature." },
    { s: 0, fr: "C'est une grippe. Prenez ces comprimés trois fois par jour.", en: "It's flu. Take these tablets three times a day." },
    { s: 1, fr: "Je dois rester au lit ?", en: "Must I stay in bed?" },
    { s: 0, fr: "Oui, il faut vous reposer. Bon rétablissement !", en: "Yes, you must rest. Get well soon!" }
  ] },

  sounds: {
    intro: "[ʃ] and [ʒ] are made in the same place (lips rounded and pushed forward); [ʒ] adds a vibration. And French links a final pronounced consonant to the next vowel: <i>elle a mal</i> → <i>e-lla-mal</i>.",
    letters: [
      { l: "ch · sh", name: "[ʃ] · no vibration", tip: "Like “sh” in English: [[le chat noir]], [[la chance]], [[le shampoing]].", ex: ["le chat noir", "pas de chance", "je cherche", "la bouche"] },
      { l: "j · g(e/i) · ge(a/o)", name: "[ʒ] · vibration", tip: "Like the “s” in “pleasure”: [[le genou]], [[la jambe]], [[le gilet jaune]], [[nous mangeons]].", ex: ["le genou", "la jambe", "le gilet jaune", "j'ai mal"] },
      { l: "‿", name: "l'enchaînement consonantique", tip: "A final consonant you pronounce joins the next vowel: [[elle a mal]] = <i>e-lla-mal</i> · [[votre ami peut vous aider]] = <i>vo-tra-mi</i>.", ex: ["elle a mal", "il a de la fièvre", "votre ami", "une aspirine"] }
    ],
    pairs: [
      { a: ["le chou", "the cabbage"], b: ["la joue", "the cheek"], note: "[ʃ] / [ʒ]" },
      { a: ["le chant", "the song"], b: ["les gens", "the people"], note: "[ʃ] / [ʒ]" },
      { a: ["la bouche", "the mouth"], b: ["ça bouge", "it moves"], note: "[ʃ] / [ʒ]" },
      { a: ["au dos", "in the back"], b: ["aux dents", "in the teeth"], note: "au / aux" },
      { a: ["je lui parle", "I talk to him"], b: ["je leur parle", "I talk to them"], note: "lui / leur" },
      { a: ["il s'est amusé", "he had fun"], b: ["elle s'est amusée", "she had fun"], note: "same sound!" }
    ]
  },
  classify: {
    label: "🤕 Qui parle : le médecin ou le patient ?", q: "Who says this at the doctor's?",
    options: ["la médecin", "le patient"],
    items: [
      { say: "Qu'est-ce qui vous arrive ?", a: 0 }, { say: "J'ai mal au ventre.", a: 1 }, { say: "Vous avez mal où ?", a: 0 }, { say: "J'ai de la fièvre depuis hier.", a: 1 },
      { say: "Je vais vous examiner.", a: 0 }, { say: "Je ne me sens pas bien.", a: 1 }, { say: "Prenez trois comprimés par jour.", a: 0 }, { say: "Je dois rester au lit ?", a: 1 }, { say: "Il faut vous reposer.", a: 0 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Le réveil de Sandra n'a pas sonné.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Sandra a pris son train à l'heure.", ok: false, explain: "[[j'ai raté mon train]]" },
    { type: "mcq", tag: "Dialogue 1", q: "Qu'est-ce que Sandra a perdu ?", options: ["son billet", "son parapluie", "son portable"], answer: 0 },
    { type: "mcq", tag: "Dialogue 2", q: "Pourquoi Luc n'est pas venu ?", options: ["Parce qu'il a oublié le rendez-vous.", "Parce qu'il était malade.", "Parce qu'il a raté le train."], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "Les passagers doivent rester dans la voiture.", ok: false, explain: "[[Il ne faut pas rester dans la voiture.]]" },
    { type: "tf", tag: "Dialogue 3", s: "Il faut poser le triangle à trente mètres.", ok: true },
    { type: "tf", tag: "Dialogue 4", s: "Théo a de la fièvre depuis deux jours.", ok: true },
    { type: "mcq", tag: "Dialogue 4", q: "Combien de comprimés par jour ?", options: ["trois", "cinq", "un"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Les parents d'Éloïse ont mal au dos.", ok: true },
    { type: "fill", tag: "Passé composé pronominal", sentence: "Ils ___ sont amusés à la fête.", options: ["se", "s'", "ont"], answer: 0 },
    { type: "fill", tag: "Passé composé pronominal", sentence: "Sandra s'est ___ en retard.", options: ["réveillé", "réveillée", "réveillés"], answer: 1 },
    { type: "fill", tag: "Passé composé pronominal", sentence: "Tu t'___ amusée ?", options: ["es", "as", "est"], answer: 0 },
    { type: "type", tag: "Passé composé pronominal", q: "Passé composé: « Je (s'amuser) à l'anniversaire de Sacha. » (Je = Luc)", answers: ["Je me suis amusé à l'anniversaire de Sacha.", "me suis amusé", "Je me suis amusé"] },
    { type: "type", tag: "Passé composé pronominal", q: "Negative: « Nous nous sommes vus. » → …", answers: ["Nous ne nous sommes pas vus.", "Nous ne nous sommes pas vus"] },
    { type: "fill", tag: "il faut / devoir", sentence: "Les passagers ___ sortir du véhicule.", options: ["doivent", "devons", "doit"], answer: 0 },
    { type: "fill", tag: "il faut / devoir", sentence: "Il ne ___ pas rester dans la voiture.", options: ["faut", "doit", "dois"], answer: 0 },
    { type: "fill", tag: "il faut / devoir", sentence: "Tu ne ___ pas téléphoner sur la route.", options: ["dois", "doit", "faut"], answer: 0 },
    { type: "fill", tag: "La santé", sentence: "J'ai mal ___ dos.", options: ["au", "à la", "aux"], answer: 0 },
    { type: "fill", tag: "La santé", sentence: "J'ai mal ___ dents.", options: ["au", "aux", "à les"], answer: 1 },
    { type: "fill", tag: "La santé", sentence: "J'ai mal ___ oreille.", options: ["à l'", "au", "à la"], answer: 0 },
    { type: "fill", tag: "La santé", sentence: "J'ai de la fièvre ___ deux jours.", options: ["depuis", "pendant", "il y a"], answer: 0 },
    { type: "listen", tag: "La santé", q: "Where does it hurt?", say: "J'ai très mal au genou.", options: ["the knee", "the neck", "the stomach"], answer: 0 },
    { type: "fill", tag: "lui / leur", sentence: "Je vais chez M. et Mme Butel. Je ___ explique ton problème.", options: ["lui", "leur", "les"], answer: 1 },
    { type: "fill", tag: "lui / leur", sentence: "M. Butel est très gentil. Je ___ parle souvent.", options: ["lui", "leur", "le"], answer: 0 },
    { type: "type", tag: "lui / leur", q: "Replace: « Je téléphone à ma sœur. » → …", answers: ["Je lui téléphone.", "Je lui téléphone"] },
    { type: "type", tag: "lui / leur", q: "Replace: « Le médecin a donné des médicaments aux enfants. » → Le médecin …", answers: ["Le médecin leur a donné des médicaments.", "leur a donné des médicaments"] },
    { type: "fill", tag: "Conseil", sentence: "J'ai mal à la tête. — Tu ___ prendre une aspirine.", options: ["peux", "dois pas", "faut"], answer: 0 },
    { type: "mcq", tag: "Conseil", q: "Which sentence is NOT advice?", options: ["J'ai mal au ventre.", "Mange des légumes !", "Il faut te reposer."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "J'ai raté mon train et j'ai perdu mon billet !", options: ["Ma pauvre ! Quelle galère !", "Félicitations !", "Bon appétit !"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Pourquoi tu es en retard ?", options: ["Parce que mon réveil n'a pas sonné.", "Pourquoi pas ?", "Je suis en avance."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce qui vous arrive ?", options: ["J'ai mal à la gorge et je tousse.", "Il est neuf heures.", "Je m'appelle Théo."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le comprimé", "le sirop", "la crème", "le genou"], answer: 3, explain: "le genou is a body part; the others are medicines." },
    { type: "mcq", tag: "Vocabulaire", q: "En France, le 15, c'est…", options: ["le SAMU (urgences médicales)", "la police", "les pompiers"], answer: 0 },
    { type: "order", tag: "Construisez", en: "First I woke up late, then I missed the train.", words: ["D'abord,", "je", "me", "suis", "réveillé", "en", "retard,", "ensuite", "j'ai", "raté", "le", "train."] }
  ],

  roleplays: [
    { title: "😩 Raconte ta mauvaise journée", brief: "A friend asks about your day. Tell three things that went wrong, in order.", memo: ["d'abord", "ensuite", "enfin", "se réveiller, rater, perdre"], partner: "f6", you: "f7",
      turns: [
        { them: "Ça va ? Tu as l'air fatiguée.", themEn: "Are you OK? You look tired.", hint: "Complain about your day.", you: "Non, ça ne va pas. Quelle journée !", youEn: "No, I'm not OK. What a day!" },
        { them: "Qu'est-ce qui s'est passé ?", themEn: "What happened?", hint: "First you woke up late, then you missed the bus.", you: "D'abord, je me suis réveillée en retard. Ensuite, j'ai raté le bus.", youEn: "First, I woke up late. Then I missed the bus." },
        { them: "Ma pauvre ! Et après ?", themEn: "You poor thing! And then?", hint: "Finally, you lost your keys.", you: "Enfin, j'ai perdu mes clés ! Ça m'énerve !", youEn: "Finally, I lost my keys! It's so annoying!" }
      ] },
    { title: "🩺 Chez le médecin", brief: "You've had a stomach ache and a temperature for three days. See the doctor.", memo: ["mal au ventre", "fièvre", "depuis trois jours", "Je dois… ?"], partner: "f3", you: "m5",
      turns: [
        { them: "Bonjour ! Qu'est-ce qui vous arrive ?", themEn: "Hello! What's the matter?", hint: "Say you don't feel well and have a stomach ache.", you: "Bonjour, docteur. Je ne me sens pas bien, j'ai mal au ventre.", youEn: "Hello, doctor. I don't feel well, I have a stomach ache." },
        { them: "Depuis quand ?", themEn: "Since when?", hint: "For three days, with a temperature.", you: "Depuis trois jours. Et j'ai de la fièvre.", youEn: "For three days. And I have a temperature." },
        { them: "Je vais vous faire une ordonnance. Deux comprimés par jour.", themEn: "I'll write you a prescription. Two tablets a day.", hint: "Ask if you must stay at home.", you: "Je dois rester à la maison ?", youEn: "Must I stay at home?" },
        { them: "Oui, deux jours. Et il faut manger des légumes et du riz.", themEn: "Yes, two days. And you must eat vegetables and rice.", hint: "Thank her.", you: "D'accord. Merci, docteur. Au revoir !", youEn: "OK. Thank you, doctor. Goodbye!" }
      ] },
    { title: "💊 À la pharmacie", brief: "Ask the pharmacist for something for your friend's cough, and advice. Use lui.", memo: ["il tousse", "un sirop ?", "qu'est-ce que je lui donne ?"], partner: "m4", you: "f2",
      turns: [
        { them: "Bonjour, madame. Je peux vous aider ?", themEn: "Hello. Can I help you?", hint: "Say your friend has a bad cough.", you: "Bonjour. Mon ami tousse beaucoup depuis hier.", youEn: "Hello. My friend has been coughing a lot since yesterday." },
        { them: "Il a de la fièvre ?", themEn: "Does he have a temperature?", hint: "No. Ask what you can give him (lui).", you: "Non. Qu'est-ce que je peux lui donner ?", youEn: "No. What can I give him?" },
        { them: "Ce sirop, matin et soir. Et il doit boire beaucoup d'eau.", themEn: "This syrup, morning and evening. And he must drink lots of water.", hint: "Ask the price.", you: "Merci. Ça fait combien ?", youEn: "Thank you. How much is it?" }
      ] }
  ],

  ateliers: [
    { title: "Créer un calendrier de la santé", intro: "In groups, make a health calendar for the whole year with a piece of advice for each month.",
      steps: [["Préparation", ["For each month, think of an unpleasant health problem and an explanation: [[En janvier : mal au ventre, parce que vous avez trop mangé pour le nouvel an !]]", "Imagine a solution for each problem."]], ["Réalisation", ["Write one piece of advice per month, using all the structures: imperative, [[il faut]], [[tu peux]], [[il ne faut pas]].", "Illustrate each month."]], ["Présentation", ["Present your calendar to the class.", "For each month, mime the advice: the class guesses!"]]],
      phrases: ["Il faut boire beaucoup d'eau.", "Il ne faut pas…", "Mangez des légumes !"],
      model: { type: "card", style: "board", title: "📅 CALENDRIER DE LA SANTÉ", sub: "un conseil par mois", rows: [["Janvier", "mal au ventre (le nouvel an !) → mangez des légumes"], ["Avril", "le rhume → mettez une écharpe"], ["Juillet", "il fait très chaud → il faut boire beaucoup d'eau"], ["Octobre", "fatigué(e) → couchez-vous plus tôt"]], foot: "Prenez soin de vous !" } },
    { title: "Réaliser une mini-série « Pas de chance ! »", tech: true, intro: "Film a short comic mini-series about a character who has a terrible day.",
      steps: [["Préparation", ["Imagine a character (man or woman, personality, tastes…).", "List the events that happen to them: their car breaks down, they lose their keys…"]], ["Réalisation", ["Share the roles (director, actors) and write the script with sequence words: [[d'abord, ensuite, enfin]].", "Choose a title, props and a set, then film the episodes."]], ["Présentation", ["The director introduces the series; the actors present their characters.", "Watch the videos together."]]],
      phrases: ["Quelle journée !", "Pas de chance !", "D'abord… ensuite… enfin…"] }
  ],
  detente: {
    title: "Le jeu des superstitions · Porte-bonheur ou porte-malheur ?",
    intro: "In France, some objects and actions are supposed to bring luck, others bad luck. Do you know which?",
    items: [
      { type: "mcq", q: "trouver un trèfle à quatre feuilles", options: ["porte-bonheur 🍀", "porte-malheur"], answer: 0 },
      { type: "mcq", q: "passer sous une échelle", options: ["porte-bonheur", "porte-malheur 🪜"], answer: 1 },
      { type: "mcq", q: "croiser un chat noir", options: ["porte-bonheur", "porte-malheur 🐈‍⬛"], answer: 1 },
      { type: "mcq", q: "accrocher un fer à cheval au-dessus de la porte", options: ["porte-bonheur 🧲", "porte-malheur"], answer: 0 },
      { type: "mcq", q: "être treize à table", options: ["porte-bonheur", "porte-malheur"], answer: 1 },
      { type: "mcq", q: "mettre le pain à l'envers sur la table", options: ["porte-bonheur", "porte-malheur 🥖"], answer: 1 },
      { type: "mcq", q: "une coccinelle se pose sur vous", options: ["porte-bonheur 🐞", "porte-malheur"], answer: 0 },
      { type: "mcq", q: "toucher du bois", options: ["porte-bonheur 🪵 (it protects you)", "porte-malheur"], answer: 0 },
      { type: "mcq", q: "offrir du muguet le 1er mai", options: ["porte-bonheur 🌼", "porte-malheur"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🍀 « Les Français sont superstitieux » ? (survey quoted by the book)", unit: " %", items: [
      { fr: "pensent qu'un trèfle à quatre feuilles apporte la chance", en: "think a four-leaf clover brings luck", v: 49, pic: "🍀" },
      { fr: "pensent qu'il faut de la chance pour être heureux", en: "think you need luck to be happy", v: 35, pic: "😊" },
      { fr: "se disent superstitieux", en: "say they are superstitious", v: 23, pic: "🔮" },
      { fr: "ont un porte-bonheur", en: "have a lucky charm", v: 16, pic: "🧿" }
    ] },
    { type: "pics", title: "🚑 Les numéros d'urgence en France", items: [
      { t: "le 15 : le SAMU", pic: "🚑", en: "medical emergencies" }, { t: "le 17 : la police", pic: "🚓", en: "police" },
      { t: "le 18 : les pompiers", pic: "🚒", en: "fire brigade" }, { t: "le 112 : l'urgence européenne", pic: "🇪🇺", en: "all emergencies, anywhere in the EU" }
    ] }
  ],
  culture: [
    { icon: "🍀", kind: "Oh, le cliché !", t: "« Les Français sont superstitieux. »", d: "Only <b>23 %</b> of French people call themselves superstitious, and 16 % have a lucky charm. But almost half believe a four-leaf clover brings luck, and many still avoid walking under a ladder or being 13 at the table!" },
    { icon: "🐈‍⬛", kind: "Civilisation", t: "Les superstitions en France", d: "Bad luck: <b>passer sous une échelle</b>, <b>croiser un chat noir</b>, being <b>13 at table</b>, putting bread <b>upside down</b>. Good luck: a <b>four-leaf clover</b>, a <b>horseshoe</b> above the door, a <b>ladybird</b> landing on you, <b>lily of the valley</b> on 1 May. And to avoid bad luck: <i>touchez du bois !</i>" },
    { icon: "🚑", kind: "Au fait !", t: "Les numéros d'urgence", d: "<b>15</b> = SAMU (medical), <b>17</b> = police, <b>18</b> = fire brigade (pompiers, who also help in many accidents), <b>112</b> = European emergency number, from any phone." },
    { icon: "💊", kind: "Civilisation", t: "La pharmacie", d: "French pharmacies (with a green cross ✚) sell medicines and give advice: many people ask the pharmacist before going to the doctor. On Sundays and at night, a <b>pharmacie de garde</b> (duty pharmacy) is always open." },
    { icon: "🦺", kind: "Au fait !", t: "Le gilet jaune et le triangle", d: "In France every car must carry a yellow high-visibility vest and a warning triangle. If you break down, put the vest on <i>before</i> getting out of the car." },
    { icon: "🍀", kind: "Francophonie", t: "Porte-bonheur du monde francophone", d: "In Québec, people <b>knock on wood</b> too; in West Africa, some wear <b>gris-gris</b> (amulets) for protection; in Belgium, touching the statue of <b>Everard 't Serclaes</b> in Brussels is said to bring luck." }
  ],
  tips: [
    { icon: "🎯", t: "à + person = lui / leur", d: "If the verb takes à + a person (parler à, téléphoner à, donner à…), use lui or leur. If there's no à (voir quelqu'un, aider quelqu'un), use le, la, les." },
    { icon: "🤕", t: "mal + au / à la / aux", d: "Learn body parts with their article: le dos → au dos, la tête → à la tête, les dents → aux dents." },
    { icon: "🪞", t: "Reflexive = être", d: "Every reflexive verb takes être in the past: [[je me suis…]], [[nous nous sommes…]]. Don't forget the agreement!" }
  ],
  mistakes: [
    ["Je me suis réveillé. (Sandra)", "Je me suis réveillée.", "agreement for a woman"],
    ["Je m'ai amusé.", "Je me suis amusé.", "reflexive → être"],
    ["Il faut de rester.", "Il faut rester.", "il faut + infinitive, no de"],
    ["J'ai mal à le dos.", "J'ai mal au dos.", "à + le = au"],
    ["Je parle lui.", "Je lui parle.", "pronoun before the verb"],
    ["Je leurs téléphone.", "Je leur téléphone.", "pronoun leur: no s"],
    ["Je les téléphone.", "Je leur téléphone.", "téléphoner à → leur"],
    ["J'ai fièvre.", "J'ai de la fièvre.", "de la fièvre"]
  ]
});
