// Étape 5 · Bilan « Santé, études et travail » (Unités 9–10, book pp. 131–158)
// Original test, DELF A1 style: one point per item, answers explained. Covers u09, u10.
window.TEST = {
  id: "e5-test",
  rubrique: 5,
  after: 10,
  title: "Étape 5 test · Health, studies and work",
  titleFr: "Bilan · Santé, études et travail",
  covers: ["u09", "u10"],
  pages: "Unités 9–10 · book pp. 131–158",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a DELF A1-style reading task on a job ad; section 6 prepares the DELF speaking test. Your results list the units to revise before Étape 6.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "Your head hurts.", o: ["J'ai mal à la tête.", "J'ai mal au tête.", "Je suis la tête."], a: 0, lesson: "u09" },
        { s: "You give advice to a friend with a cold.", o: ["Tu devrais rester au lit.", "Tu as dû rester au lit.", "Tu restes au lit hier."], a: 0, lesson: "u09" },
        { s: "You tell what happened first in your bad day.", o: ["D'abord, j'ai raté le bus.", "Enfin, je rate le bus.", "Ensuite, je vais rater le bus."], a: 0, lesson: "u09" },
        { s: "You say what is necessary.", o: ["Il faut prendre ce médicament.", "Il fait prendre ce médicament.", "Il faut de prendre ce médicament."], a: 0, lesson: "u09" },
        { s: "You tell someone about your studies.", o: ["Je suis en deuxième année de licence.", "J'ai deux ans de licence passés.", "Je suis licence."], a: 0, lesson: "u10" },
        { s: "You describe your Erasmus year.", o: ["C'était une expérience géniale !", "C'est un défaut.", "Je suis trop fatigué."], a: 0, lesson: "u10" },
        { s: "You talk about your dream job.", o: ["Je rêve d'être architecte.", "Je sais d'être architecte.", "Je connais architecte."], a: 0, lesson: "u10" },
        { s: "The interviewer asks for your strengths. You say:", o: ["Je suis sérieux et très organisé.", "Je suis beaucoup organisé.", "Je travaille très."], a: 0, lesson: "u10" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word: pronoun, preposition, relative, time word, intensity…",
      items: [
        { p: "Tu as téléphoné à ta mère ? Oui, je ___ ai téléphoné.", a: "lui", lesson: "u09" },
        { p: "Le médecin parle à ses patients : il ___ donne des conseils.", a: "leur", lesson: "u09" },
        { p: "J'ai mal ___ dents.", a: "aux", lesson: "u09" },
        { p: "Tu as de la fièvre ? Tu ___ aller chez le médecin. (devoir)", a: "dois", lesson: "u09" },
        { p: "___ tu es malade, reste au lit ! (condition)", a: "Si", lesson: "u10" },
        { p: "J'habite à Lyon ___ 2020.", a: "depuis", lesson: "u10" },
        { p: "J'ai eu mon bac ___ trois ans.", a: "il y a", lesson: "u10" },
        { p: "C'est un concours ___ est très difficile.", a: "qui", lesson: "u10" },
        { p: "C'est un métier ___ j'adore.", a: "que", lesson: "u10" },
        { p: "Tu as sommeil : tu travailles ___ ! (= too much)", a: "trop", lesson: "u10" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Qu'est-ce qui ne va pas ?"], ["B", "___"]], o: ["J'ai mal à la gorge et j'ai de la fièvre.", "Je suis en master.", "Depuis 1934."], a: 0, lesson: "u09" },
        { lines: [["A", "Vous avez une ordonnance ?"], ["B", "___"]], o: ["Oui, la voici.", "Oui, j'ai mal au dos.", "Non, je suis doué."], a: 0, lesson: "u09" },
        { lines: [["A", "Qu'est-ce qui t'est arrivé ?"], ["B", "___"]], o: ["Je suis tombé dans l'escalier !", "Je vais tomber demain.", "Je tombe toujours bien."], a: 0, lesson: "u09" },
        { lines: [["A", "Vous travaillez ici depuis longtemps ?"], ["B", "___"]], o: ["Depuis cinq ans.", "Il y a cinq ans.", "Pendant demain."], a: 0, lesson: "u10" },
        { lines: [["A", "Pourquoi tu apprends l'anglais ?"], ["B", "___"]], o: ["Pour travailler à Londres.", "Pour je travaille à Londres.", "Depuis Londres."], a: 0, lesson: "u10" },
        { lines: [["A", "Vous parlez espagnol ?"], ["B", "___"]], o: ["Oui, assez bien.", "Oui, beaucoup bien.", "Oui, trop."], a: 0, lesson: "u10" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "l'ordonnance", b: "the prescription", lesson: "u09" }, { a: "le genou", b: "the knee", lesson: "u09" }, { a: "la dépanneuse", b: "the tow truck", lesson: "u09" },
        { a: "la bourse", b: "the grant", lesson: "u10" }, { a: "le stage", b: "the internship", lesson: "u10" }, { a: "l'entretien d'embauche", b: "the job interview", lesson: "u10" }
      ]
    },
    {
      id: "s5", type: "tf", marks: 5,
      instr: "DELF A1 · Compréhension des écrits. Lisez l'annonce et répondez.",
      instrEn: "Read the job ad, then decide: true or false?",
      doc: { type: "card", style: "board", title: "OFFRE D'EMPLOI · LIBRAIRIE « LA PAGE »", sub: "Bordeaux, centre-ville", rows: [
        ["Poste", "vendeur / vendeuse, à temps partiel (20 h par semaine)"],
        ["Horaires", "le mercredi et le samedi, de 9 h à 19 h"],
        ["Profil", "étudiant(e), vous aimez beaucoup les livres, vous êtes organisé(e) et souriant(e)"],
        ["Langues", "anglais assez bien"],
        ["Candidature", "envoyez votre CV avant le 10 mars à contact@lapage.fr"]
      ], foot: "Si vous êtes intéressé(e), n'attendez pas !" },
      items: [
        { s: "C'est un poste à temps plein.", ok: false, why: "à temps partiel, 20 heures par semaine", lesson: "u10" },
        { s: "On travaille le mercredi et le samedi.", ok: true, lesson: "u10" },
        { s: "Le poste est pour des étudiants.", ok: true, lesson: "u10" },
        { s: "Il faut parler très bien anglais.", ok: false, why: "assez bien", lesson: "u10" },
        { s: "On peut envoyer son CV jusqu'au 10 mars.", ok: true, lesson: "u10" }
      ]
    },
    {
      id: "s6", type: "choose", marks: 5,
      instr: "DELF A1 · Production orale. Choisissez la meilleure réponse.",
      instrEn: "Speaking test practice: choose the best thing to say in each part.",
      items: [
        { s: "Part 1 (entretien dirigé). « Parlez-moi de vous. »", o: ["Je m'appelle Ana, j'ai 22 ans, je suis étudiante en droit.", "Oui, merci.", "Je ne parle pas de vous."], a: 0, lesson: "u10" },
        { s: "Part 1. « Qu'est-ce que vous voulez faire plus tard ? »", o: ["Je voudrais être médecin, parce que j'aime aider les gens.", "Plus tard, il est 10 heures.", "Je fais du médecin."], a: 0, lesson: "u10" },
        { s: "Part 2 (échange d'informations). Your card says « études ».", o: ["Qu'est-ce que vous avez étudié ?", "Études, s'il vous plaît.", "J'étudie."], a: 0, lesson: "u10" },
        { s: "Part 2. Your card says « santé ».", o: ["Vous faites du sport pour être en forme ?", "Santé !", "J'ai mal."], a: 0, lesson: "u09" },
        { s: "Part 3 (dialogue simulé). You're at the pharmacy with a sore throat.", o: ["Bonjour, j'ai mal à la gorge. Qu'est-ce que vous me conseillez ?", "Bonjour, je suis la gorge.", "Donnez-moi tout, merci."], a: 0, lesson: "u09" }
      ]
    }
  ],
  selfCheck: [
    ["Raconter une suite d'événements au passé", "tell a series of past events"],
    ["Dire où j'ai mal et expliquer mes symptômes", "say where it hurts and explain symptoms"],
    ["Exprimer l'obligation et donner un conseil", "express obligation and give advice"],
    ["Parler de mes études et d'une expérience positive", "talk about my studies and a good experience"],
    ["Exprimer une condition, un but, une durée", "express a condition, a goal, a length of time"],
    ["Parler de mon projet professionnel et de mes compétences", "talk about my career plans and skills"],
    ["Me présenter dans un entretien d'embauche", "present myself in a job interview"]
  ]
};
