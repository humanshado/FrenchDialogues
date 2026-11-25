// Étape 3 · Bilan « Le quotidien » (Unités 5–6, book pp. 75–102)
// Original test, DELF A1 style: one point per item, answers explained. Covers u05, u06.
window.TEST = {
  id: "e3-test",
  rubrique: 3,
  after: 6,
  title: "Étape 3 test · Daily life and family",
  titleFr: "Bilan · Le quotidien",
  covers: ["u05", "u06"],
  pages: "Unités 5–6 · book pp. 75–102",
  intro: "Do the whole test without looking anything up, then check each section. Section 6 is a DELF A1-style task on a written invitation. Your results list the units to revise before Étape 4.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "You want to know the time from a stranger.", o: ["Vous avez l'heure, s'il vous plaît ?", "Vous êtes à l'heure ?", "Quel temps fait-il ?"], a: 0, lesson: "u05" },
        { s: "It's 8:45. You say…", o: ["Il est neuf heures moins le quart.", "Il est huit heures moins le quart.", "Il est neuf heures et quart."], a: 0, lesson: "u05" },
        { s: "You suggest going to a concert.", o: ["On pourrait aller au concert. Ça te dit ?", "Je suis allé au concert.", "Je ne peux pas aller au concert."], a: 0, lesson: "u05" },
        { s: "You refuse an invitation politely.", o: ["Désolé, je ne peux pas, je ne suis pas libre.", "Non, je ne veux jamais.", "Avec plaisir !"], a: 0, lesson: "u05" },
        { s: "Your friend tells you she's getting married.", o: ["Félicitations ! Tous mes vœux de bonheur !", "Bonne année !", "Quel dommage !"], a: 0, lesson: "u06" },
        { s: "It's 1 January.", o: ["Joyeux Noël !", "Bonne année !", "Bon anniversaire !"], a: 1, lesson: "u06" },
        { s: "You say you have no brothers or sisters.", o: ["Je suis fils / fille unique.", "Je suis célibataire.", "Je suis neveu."], a: 0, lesson: "u06" },
        { s: "You want to know what someone looks like.", o: ["Il est comment ?", "Il est où ?", "Il est quelle heure ?"], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): pronoun, possessive, auxiliary, past participle, imperative…",
      items: [
        { p: "Je ___ lève à sept heures.", a: "me", lesson: "u05" },
        { p: "Nous nous (habiller) ___ vite.", a: "habillons", lesson: "u05" },
        { p: "Il ne ___ couche pas tard.", a: "se", lesson: "u05" },
        { p: "(tu, réserver) ___ les places, s'il te plaît !", a: "Réserve|réserve", lesson: "u05" },
        { p: "(vous, être) ___ à l'heure !", a: "Soyez|soyez", lesson: "u05" },
        { p: "Koffi habite avec ___ femme.", a: "sa", lesson: "u06" },
        { p: "Je vous présente ___ amie Inès.", a: "mon", lesson: "u06" },
        { p: "Ils habitent avec ___ enfants.", a: "leurs", lesson: "u06" },
        { p: "Hier, nous ___ dîné au restaurant.", a: "avons", lesson: "u06" },
        { p: "J'ai (prendre) ___ son numéro.", a: "pris", lesson: "u06" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Tu es libre samedi soir ?"], ["B", "___"]], o: ["Oui ! Pourquoi ?", "Oui, il est samedi.", "J'ai été libre."], a: 0, lesson: "u05" },
        { lines: [["A", "On se retrouve à quelle heure ?"], ["B", "___"]], o: ["À huit heures et demie, devant le cinéma.", "Au cinéma, avec plaisir.", "Il est huit heures."], a: 0, lesson: "u05" },
        { lines: [["A", "Tu fais souvent la vaisselle ?"], ["B", "___"]], o: ["Non, je ne fais jamais la vaisselle !", "Non, je fais jamais pas la vaisselle.", "Oui, je ne la fais jamais."], a: 0, lesson: "u05" },
        { lines: [["A", "C'est qui ?"], ["B", "___"]], o: ["C'est mon cousin Bobby.", "Il est mon cousin Bobby.", "Il est cousin."], a: 0, lesson: "u06" },
        { lines: [["A", "Qu'est-ce que tu as fait hier ?"], ["B", "___"]], o: ["J'ai téléphoné à ma grand-mère.", "Je vais téléphoner à ma grand-mère.", "Je téléphone demain."], a: 0, lesson: "u06" },
        { lines: [["A", "Quand est-ce que tu as rencontré Lola ?"], ["B", "___"]], o: ["Il y a un mois.", "Dans un mois.", "Le mois prochain."], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "se coucher", b: "to go to bed", lesson: "u05" }, { a: "faire la vaisselle", b: "to do the washing-up", lesson: "u05" }, { a: "en avance", b: "early", lesson: "u05" },
        { a: "le neveu", b: "the nephew", lesson: "u06" }, { a: "drôle", b: "funny", lesson: "u06" }, { a: "le faire-part", b: "the announcement card", lesson: "u06" }
      ]
    },
    {
      id: "s5", type: "tf", marks: 5,
      instr: "Lisez l'agenda de Lucie et répondez.",
      instrEn: "Read Lucie's diary page, then decide: true or false?",
      doc: { type: "agenda", title: "📒 L'agenda de Lucie · samedi", items: [
        { h: 8, m: 30, pic: "🏃", fr: "Courir au parc avec Inès", en: "run in the park" },
        { h: 11, m: 0, pic: "🛒", fr: "Courses au marché", en: "market shopping" },
        { h: 13, m: 0, pic: "👵", fr: "Déjeuner chez mamie (ses 80 ans !)", en: "lunch at Granny's (80th birthday)" },
        { h: 20, m: 45, pic: "🎭", fr: "Théâtre avec Marc · dîner après le spectacle", en: "theatre with Marc, dinner after the show" }
      ] },
      items: [
        { s: "Lucie fait du sport le matin.", ok: true, lesson: "u05" },
        { s: "Elle déjeune avec sa grand-mère à une heure.", ok: true, lesson: "u05" },
        { s: "C'est l'anniversaire de sa grand-mère.", ok: true, lesson: "u06" },
        { s: "Le spectacle commence à neuf heures moins le quart du soir.", ok: true, why: "20 h 45 = neuf heures moins le quart", lesson: "u05" },
        { s: "Lucie et Marc dînent avant le spectacle.", ok: false, why: "dîner après le spectacle", lesson: "u05" }
      ]
    },
    {
      id: "s6", type: "choose", marks: 5,
      instr: "DELF A1 · Production écrite. Vous répondez à l'invitation de Hyacinthe.",
      instrEn: "Read Hyacinthe's invitation, then choose the best sentence for each part of your reply.",
      doc: { type: "sms", with: "Hyacinthe 💍", msgs: [{ t: "Salut ! Florent et moi, nous allons nous marier le samedi 14 juin à 15 h, à la mairie de Lyon. Ensuite, il y a une fête chez mes parents. Tu viens ? Réponds-moi avant le 1er mai ! Bisous, Hyacinthe" }] },
      items: [
        { s: "1. Start your message", o: ["Chère Hyacinthe,", "Madame la directrice,", "À bientôt !"], a: 0, lesson: "u06" },
        { s: "2. React to the news", o: ["Quelle bonne nouvelle ! Félicitations à vous deux !", "Bonne année à vous deux !", "Quel dommage !"], a: 0, lesson: "u06" },
        { s: "3. Accept the invitation", o: ["Avec plaisir, je viens à la mairie et à la fête !", "Désolée, je suis à l'heure.", "Je suis venue hier."], a: 0, lesson: "u05" },
        { s: "4. Ask a question", o: ["Qu'est-ce que je peux apporter ?", "Tu as quel âge ?", "Il est quelle heure ?"], a: 0, lesson: "u05" },
        { s: "5. End your message", o: ["Je t'embrasse, Inès", "Salutations distinguées.", "Bonjour, Inès"], a: 0, lesson: "u06" }
      ]
    }
  ],
  selfCheck: [
    ["Raconter ma journée", "describe my daily routine"],
    ["Dire l'heure (officielle et courante)", "tell the time (official and everyday)"],
    ["Proposer une sortie, accepter, refuser", "suggest an outing, accept, refuse"],
    ["Réserver par téléphone", "book by phone"],
    ["Présenter ma famille", "present my family"],
    ["Féliciter et adresser un souhait", "congratulate and give wishes"],
    ["Décrire une personne", "describe a person"],
    ["Raconter une rencontre au passé", "tell about a meeting in the past"]
  ]
};
