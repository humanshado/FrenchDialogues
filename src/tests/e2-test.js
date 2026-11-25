// Étape 2 · Bilan « Consommer » (Unités 3–4, book pp. 47–74)
// Original test, DELF A1 style: one point per item, answers explained. Covers u03, u04.
window.TEST = {
  id: "e2-test",
  rubrique: 2,
  after: 4,
  title: "Étape 2 test · Food and shopping",
  titleFr: "Bilan · Consommer",
  covers: ["u03", "u04"],
  pages: "Unités 3–4 · book pp. 47–74",
  intro: "Do the whole test without looking anything up, then check each section. Section 6 is a DELF A1-style reading task. Your results list the units to revise before Étape 3.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "At the market, the stallholder asks who's next. It's you.", o: ["C'est à moi !", "C'est à qui ?", "C'est tout."], a: 0, lesson: "u03" },
        { s: "You want to know the price of the grapes.", o: ["Combien coûte le raisin ?", "Vous payez comment ?", "Qu'est-ce que je vous sers ?"], a: 0, lesson: "u03" },
        { s: "You've finished your meal and want to pay.", o: ["La carte, s'il vous plaît !", "L'addition, s'il vous plaît !", "Le pourboire, s'il vous plaît !"], a: 1, lesson: "u03" },
        { s: "You want free tap water in a restaurant.", o: ["Une bouteille d'eau minérale.", "Une carafe d'eau, s'il vous plaît.", "Un verre de sirop."], a: 1, lesson: "u03" },
        { s: "The shop assistant asks your size.", o: ["Je fais du 40.", "Je chausse le 40.", "J'ai 40."], a: 0, lesson: "u04" },
        { s: "You don't like the colour of the jacket.", o: ["Je trouve ça joli.", "Cette couleur ne me plaît pas.", "C'est une bonne affaire."], a: 1, lesson: "u04" },
        { s: "You want to know what an object is for.", o: ["Ça coûte combien ?", "Ça sert à quoi ?", "C'est à qui ?"], a: 1, lesson: "u04" },
        { s: "It's −3 °C and there's snow.", o: ["Il fait chaud et il pleut.", "Il fait froid et il neige.", "Il est froid et il y a neige."], a: 1, lesson: "u04" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): du, de la, de l', des, de, au, à la, aux, chez le, en, ce, cet, cette, ces…",
      items: [
        { p: "Je bois ___ café le matin.", a: "du", lesson: "u03" },
        { p: "Il n'y a pas ___ sel dans la soupe.", a: "de", lesson: "u03" },
        { p: "Tu peux acheter ___ eau, s'il te plaît ?", a: "de l'", lesson: "u03" },
        { p: "un kilo ___ tomates", a: "de", lesson: "u03" },
        { p: "Je vais ___ boucher.", a: "chez le", lesson: "u03" },
        { p: "Je paie ___ caisses.", a: "aux", lesson: "u03" },
        { p: "Du sucre ? Non merci, je n'___ veux pas.", a: "en", lesson: "u03" },
        { p: "___ ordinateur est léger.", a: "Cet|cet", lesson: "u04" },
        { p: "___ lunettes sont à vous ?", a: "Ces|ces", lesson: "u04" },
        { p: "Elle porte une chemise (blanc) ___ .", a: "blanche", lesson: "u04" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["Le serveur", "Qu'est-ce que vous prenez ?"], ["La cliente", "___"]], o: ["Pour moi, la formule à quinze euros.", "Je prends l'addition.", "C'est à moi."], a: 0, lesson: "u03" },
        { lines: [["Le marchand", "Vous payez comment ?"], ["Le client", "___"]], o: ["En espèces.", "Un kilo.", "Ce sera tout."], a: 0, lesson: "u03" },
        { lines: [["A", "Vous avez des tartes aux fraises ?"], ["B", "___"]], o: ["Oui, nous en avons.", "Oui, nous les en avons.", "Oui, nous avons en."], a: 0, lesson: "u03" },
        { lines: [["A", "Il fait quel temps ?"], ["B", "___"]], o: ["Il fait beau, il y a du soleil.", "Il est beau, il a du soleil.", "C'est beau temps."], a: 0, lesson: "u04" },
        { lines: [["A", "Tu as fait les soldes ?"], ["B", "___"]], o: ["Oui, je viens d'acheter un manteau.", "Oui, je vais d'acheter un manteau.", "Oui, je viens acheter de un manteau."], a: 0, lesson: "u04" },
        { lines: [["A", "Il est comment, votre sac ?"], ["B", "___"]], o: ["Il est petit, rouge et en cuir.", "Il est à la gare.", "Il coûte vingt euros."], a: 0, lesson: "u04" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "une barquette", b: "a punnet", lesson: "u03" }, { a: "le pourboire", b: "the tip", lesson: "u03" }, { a: "les espèces", b: "cash", lesson: "u03" },
        { a: "la pointure", b: "shoe size", lesson: "u04" }, { a: "une écharpe", b: "a scarf", lesson: "u04" }, { a: "léger", b: "light (not heavy)", lesson: "u04" }
      ]
    },
    {
      id: "s5", type: "choose", marks: 5,
      instr: "Choisissez la bonne phrase.",
      instrEn: "Which sentence is correct?",
      items: [
        { s: "Adjectives", o: ["une petite robe rouge", "une rouge petite robe", "une robe petite rouge"], a: 0, lesson: "u04" },
        { s: "Futur proche", o: ["Demain, je vais faire les courses.", "Demain, je viens faire les courses.", "Demain, je vais de faire les courses."], a: 0, lesson: "u04" },
        { s: "Verbs", o: ["Nous mangeons au restaurant.", "Nous mangons au restaurant.", "Nous mangez au restaurant."], a: 0, lesson: "u03" },
        { s: "Partitive", o: ["Je voudrais de la confiture.", "Je voudrais du confiture.", "Je voudrais de confiture."], a: 0, lesson: "u03" },
        { s: "Colours", o: ["des chaussures marron", "des chaussures marrons", "des chaussures marronnes"], a: 0, lesson: "u04" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 5,
      instr: "DELF A1 · Compréhension des écrits. Lisez l'affiche et répondez.",
      instrEn: "Read the poster in a shopping street, then decide: true or false?",
      doc: { type: "card", style: "board", title: "LES GALERIES DU CENTRE", sub: "Soldes d'hiver !", rows: [["Dates", "du mercredi 8 janvier au mardi 4 février"], ["Mode", "−50 % sur les manteaux · −30 % sur les chaussures"], ["Multimédia (2e étage)", "−30 % sur les tablettes et les liseuses"], ["Horaires", "lundi → samedi 9 h – 20 h · dimanche 10 h – 19 h"], ["Restaurant (3e étage)", "formule plat + dessert : 12 €"]], foot: "Paiement par carte ou en espèces · Service des objets trouvés à l'accueil" },
      items: [
        { s: "Les soldes durent quatre semaines.", ok: true, why: "8 January → 4 February", lesson: "u04" },
        { s: "Les manteaux sont moins chers que d'habitude : −30 %.", ok: false, why: "−50 % on coats", lesson: "u04" },
        { s: "Le dimanche, le magasin ouvre à 10 heures.", ok: true, lesson: "u03" },
        { s: "On trouve les liseuses au 3e étage.", ok: false, why: "multimédia = 2e étage; the restaurant is on the 3rd", lesson: "u04" },
        { s: "Au restaurant, une formule plat + dessert coûte 12 euros.", ok: true, lesson: "u03" }
      ]
    }
  ],
  selfCheck: [
    ["Comprendre des horaires d'ouverture", "understand opening hours"],
    ["Acheter au marché et payer", "buy at the market and pay"],
    ["Commander au restaurant et demander l'addition", "order in a restaurant and ask for the bill"],
    ["Dire ce que j'aime et ce que je déteste", "say what I like and hate"],
    ["Décrire des vêtements et donner mon avis", "describe clothes and give my opinion"],
    ["Parler de la météo", "talk about the weather"],
    ["Décrire un objet perdu", "describe a lost object"]
  ]
};
