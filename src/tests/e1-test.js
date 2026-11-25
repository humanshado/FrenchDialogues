// Étape 1 · Bilan « Premiers contacts » (Unités 0–2, book pp. 12–46)
// Original test, DELF A1 style: one point per item, answers explained. Covers u00, u01, u02.
window.TEST = {
  id: "e1-test",
  rubrique: 1,
  after: 2,
  title: "Étape 1 test · First contacts",
  titleFr: "Bilan · Premiers contacts",
  covers: ["u00", "u01", "u02"],
  pages: "Unités 0–2 · book pp. 12–46",
  intro: "Do the whole test without looking anything up, then check each section. Section 6 is a DELF A1-style reading task. Your results list the units to revise before you start Étape 2.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "You meet your teacher in the street at 9 a.m.", o: ["Salut ! Ça va ?", "Bonjour, madame. Vous allez bien ?", "Bonsoir ! Et toi ?"], a: 1, why: "polite: bonjour + vous", lesson: "u00" },
        { s: "You didn't understand what the teacher said.", o: ["Je suis en retard.", "Vous pouvez répéter, s'il vous plaît ?", "Comment ça s'écrit ?"], a: 1, lesson: "u00" },
        { s: "You want to know how to spell someone's surname.", o: ["Comment ça s'écrit ?", "Comment tu t'appelles ?", "Comment ça va ?"], a: 0, lesson: "u00" },
        { s: "You want to know someone's age (politely).", o: ["Vous êtes quel âge ?", "Vous avez quel âge ?", "Vous faites quel âge ?"], a: 1, why: "age = avoir", lesson: "u01" },
        { s: "You want to stay in touch with a new friend.", o: ["C'est quoi, ton numéro ?", "C'est quelle ligne ?", "C'est loin ?"], a: 0, lesson: "u01" },
        { s: "You're lost and looking for the station.", o: ["Excusez-moi, où est la gare, s'il vous plaît ?", "Excusez-moi, je suis en retard.", "Vous allez tout droit."], a: 0, lesson: "u02" },
        { s: "You want to know which metro stop to get off at.", o: ["Je descends à quel arrêt ?", "Je prends quelle rue ?", "C'est quel numéro ?"], a: 0, lesson: "u02" },
        { s: "You say goodbye to a friend until later today.", o: ["À ce soir !", "Bonne nuit !", "Enchanté !"], a: 0, lesson: "u00" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez avec le bon petit mot.",
      instrEn: "Type the missing word: article, preposition, or the right form of the verb in brackets.",
      items: [
        { p: "Elle est (italien) ___ .", a: "italienne", lesson: "u01" },
        { p: "J'___ vingt-cinq ans. (avoir)", a: "ai", lesson: "u01" },
        { p: "J'aime ___ cinéma et la danse.", a: "le", lesson: "u01" },
        { p: "J'habite ___ Canada, à Québec.", a: "au", lesson: "u01" },
        { p: "Je suis née ___ Italie.", a: "en", lesson: "u01" },
        { p: "Il vit ___ États-Unis.", a: "aux", lesson: "u01" },
        { p: "Je ___ parle pas chinois.", a: "ne", lesson: "u01" },
        { p: "Nous (chercher) ___ la cathédrale.", a: "cherchons", lesson: "u02" },
        { p: "Ils (aller) ___ à la braderie.", a: "vont", lesson: "u02" },
        { p: "Vous (prendre) ___ la ligne 2.", a: "prenez", lesson: "u02" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Salut ! Tu vas bien ?"], ["B", "___"]], o: ["Ça va, et toi ?", "Très bien, et vous, madame ?", "Je m'appelle Léo."], a: 0, lesson: "u00" },
        { lines: [["A", "Vous êtes français ?"], ["B", "___"]], o: ["Non, je ne suis pas français, je suis belge.", "Non, j'ai belge.", "Oui, j'habite France."], a: 0, lesson: "u01" },
        { lines: [["A", "Qu'est-ce que tu aimes ?"], ["B", "___"]], o: ["J'aime la natation et la lecture.", "J'aime natation.", "Je suis la lecture."], a: 0, lesson: "u01" },
        { lines: [["A", "Où est la poste, s'il vous plaît ?"], ["B", "___"]], o: ["Vous prenez la deuxième rue à gauche.", "Vous êtes à la poste.", "Je prends le bus."], a: 0, lesson: "u02" },
        { lines: [["A", "Vous allez au travail comment ?"], ["B", "___"]], o: ["À vélo.", "En vélo pied.", "Au métro."], a: 0, lesson: "u02" },
        { lines: [["A", "Il y a un musée près d'ici ?"], ["B", "___"]], o: ["Oui, le musée d'art contemporain est là-bas.", "Oui, un musée d'art contemporain est là-bas.", "Oui, la musée est là-bas."], a: 0, why: "identified → le musée", lesson: "u02" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "le carrefour", b: "the crossroads", lesson: "u02" }, { a: "l'arrêt", b: "the bus stop", lesson: "u02" },
        { a: "le prénom", b: "the first name", lesson: "u01" }, { a: "le portable", b: "the mobile phone", lesson: "u01" },
        { a: "l'automne", b: "autumn", lesson: "u00" }, { a: "une coiffeuse", b: "a hairdresser", lesson: "u02" }
      ]
    },
    {
      id: "s5", type: "type", marks: 5,
      instr: "Écrivez les nombres en lettres.",
      instrEn: "Write these numbers in words.",
      items: [
        { p: "16 = ___", a: "seize", lesson: "u00" },
        { p: "21 = ___", a: "vingt et un|vingt-et-un", lesson: "u00" },
        { p: "70 = ___", a: "soixante-dix|soixante dix", lesson: "u01" },
        { p: "80 = ___", a: "quatre-vingts|quatre vingts", lesson: "u01" },
        { p: "1 000 = ___", a: "mille", lesson: "u02" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 5,
      instr: "DELF A1 · Compréhension des écrits. Lisez le message de Luc et répondez.",
      instrEn: "Read Luc's text message, then decide: true or false?",
      doc: { type: "sms", with: "Luc 🏠", msgs: [{ t: "Salut Inès ! Rendez-vous samedi chez moi, 8 rue Voltaire, à 19 h. De la gare, tu prends le tram A, direction Université, et tu descends à l'arrêt Opéra. Là, tu tournes à droite : c'est la deuxième rue à gauche. Apporte ton maillot de bain : il y a une piscine dans le quartier ! Luc" }] },
      items: [
        { s: "Le rendez-vous est samedi à 19 heures.", ok: true, lesson: "u02" },
        { s: "Inès prend le métro.", ok: false, why: "le tram A", lesson: "u02" },
        { s: "Elle descend à l'arrêt Université.", ok: false, why: "direction Université, but she gets off at Opéra", lesson: "u02" },
        { s: "La rue Voltaire est la deuxième rue à gauche.", ok: true, lesson: "u02" },
        { s: "Inès apporte un maillot de bain.", ok: true, lesson: "u02" }
      ]
    }
  ],
  selfCheck: [
    ["Saluer et prendre congé (tu / vous)", "greet and say goodbye, choosing tu or vous"],
    ["Épeler mon nom", "spell my name"],
    ["Dire mon âge, ma nationalité, où j'habite", "say my age, nationality and where I live"],
    ["Donner mon numéro de téléphone et mon mail", "give my phone number and e-mail"],
    ["Demander et indiquer le chemin", "ask for and give directions"],
    ["Expliquer un trajet en métro ou en bus", "explain a metro or bus route"]
  ]
};
