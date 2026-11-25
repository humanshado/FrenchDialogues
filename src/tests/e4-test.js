// Étape 4 · Bilan « Chez soi, en voyage » (Unités 7–8, book pp. 103–130)
// Original test, DELF A1 style: one point per item, answers explained. Covers u07, u08.
window.TEST = {
  id: "e4-test",
  rubrique: 4,
  after: 8,
  title: "Étape 4 test · Home and travel",
  titleFr: "Bilan · Chez soi, en voyage",
  covers: ["u07", "u08"],
  pages: "Unités 7–8 · book pp. 103–130",
  intro: "Do the whole test without looking anything up, then check each section. Section 6 is a DELF A1-style task on a postcard. Your results list the units to revise before Étape 5.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "You want to know the size of a flat.", o: ["Quelle est la superficie ?", "Il est à quel étage ?", "Il y a un ascenseur ?"], a: 0, lesson: "u07" },
        { s: "You write a notice: no smoking.", o: ["Défense de fumer.", "Merci de fumer.", "Il faut fumer."], a: 0, lesson: "u07" },
        { s: "You apologise to neighbours for a party.", o: ["Veuillez nous excuser pour le bruit.", "Défense de faire du bruit.", "Bonne soirée !"], a: 0, lesson: "u07" },
        { s: "Water is coming out of the tap everywhere.", o: ["Il y a une fuite d'eau !", "La serrure est cassée.", "Il n'y a pas de lumière."], a: 0, lesson: "u07" },
        { s: "You can't decide between two hotels.", o: ["J'hésite.", "C'est mieux.", "Je préfère."], a: 0, lesson: "u08" },
        { s: "You remind a friend about her passport.", o: ["Tu n'as pas oublié ton passeport ?", "Tu as perdu ton passeport.", "C'est ton passeport ?"], a: 0, lesson: "u08" },
        { s: "You end a formal e-mail to a hotel.", o: ["Cordialement,", "Gros bisous !", "À plus !"], a: 0, lesson: "u08" },
        { s: "Your friend says the hotel has no room for you.", o: ["Ce n'est pas possible !", "Bon voyage !", "Avec plaisir !"], a: 0, lesson: "u08" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): pronoun, preposition, comparative, auxiliary, participle…",
      items: [
        { p: "Mes clés ? Je ___ cherche partout !", a: "les", lesson: "u07" },
        { p: "Cet appartement ? Je ___'adore !", a: "l", why: "le → l' before a vowel", lesson: "u07" },
        { p: "Le fauteuil est à côté ___ canapé.", a: "du", lesson: "u07" },
        { p: "Le supermarché ? J'___ vais demain.", a: "y", lesson: "u07" },
        { p: "Il est interdit ___ courir.", a: "de", lesson: "u07" },
        { p: "Le camping est ___ cher que l'hôtel. (−)", a: "moins", lesson: "u08" },
        { p: "Le petit déjeuner est ___ qu'à l'hôtel. (bon, +)", a: "meilleur", lesson: "u08" },
        { p: "Nous (choisir) ___ la chambre d'hôtes.", a: "choisissons", lesson: "u08" },
        { p: "Léa ___ partie mardi.", a: "est", lesson: "u08" },
        { p: "Elles sont (arriver) ___ samedi.", a: "arrivées", lesson: "u08" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Il est meublé, le studio ?"], ["B", "___"]], o: ["Oui, il y a un lit, une table et deux chaises.", "Oui, il est au cinquième étage.", "Oui, il fait 28 m²."], a: 0, lesson: "u07" },
        { lines: [["A", "Où sont mes lunettes ?"], ["B", "___"]], o: ["Sur la table, à côté de la lampe.", "Sur la table, à côté du lampe.", "Sur la table, à côté la lampe."], a: 0, lesson: "u07" },
        { lines: [["A", "Le robinet fuit !"], ["B", "___"]], o: ["Il faut appeler un plombier.", "Il faut appeler un serrurier.", "Il faut appeler un électricien."], a: 0, lesson: "u07" },
        { lines: [["A", "Tu préfères l'hôtel ou le camping ?"], ["B", "___"]], o: ["L'hôtel : c'est plus confortable.", "L'hôtel : c'est plus bon.", "L'hôtel : c'est moins de confortable."], a: 0, lesson: "u08" },
        { lines: [["A", "Qu'est-ce que vous avez fait à Marrakech ?"], ["B", "___"]], o: ["Nous sommes allés au souk.", "Nous avons allés au souk.", "Nous allons au souk hier."], a: 0, lesson: "u08" },
        { lines: [["A", "C'était comment, la plage ?"], ["B", "___"]], o: ["Super ! Il faisait beau.", "Super ! Il fait beau demain.", "Super ! C'est était beau."], a: 0, lesson: "u08" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "le locataire", b: "the tenant", lesson: "u07" }, { a: "l'armoire", b: "the wardrobe", lesson: "u07" }, { a: "le rez-de-chaussée", b: "the ground floor", lesson: "u07" },
        { a: "la carte d'embarquement", b: "the boarding pass", lesson: "u08" }, { a: "la chambre d'hôtes", b: "the B&B", lesson: "u08" }, { a: "la crème solaire", b: "sun cream", lesson: "u08" }
      ]
    },
    {
      id: "s5", type: "tf", marks: 5,
      instr: "Lisez le règlement et répondez.",
      instrEn: "Read the youth hostel rules, then decide: true or false?",
      doc: { type: "signs", title: "🛏️ Auberge de jeunesse « Les Mouettes » · Règlement", items: [
        { type: "no", pic: "🚬", fr: "Il est interdit de fumer dans les chambres.", en: "" },
        { type: "no", pic: "🔊", fr: "Défense de faire du bruit après 23 heures.", en: "" },
        { type: "yes", pic: "🔑", fr: "Merci de rendre la clé à l'accueil avant 10 heures.", en: "" },
        { type: "yes", pic: "🍳", fr: "Lavez votre vaisselle après le repas.", en: "" },
        { type: "no", pic: "🐶", fr: "Animaux interdits.", en: "" }
      ] },
      items: [
        { s: "On peut fumer dans les chambres.", ok: false, lesson: "u07" },
        { s: "On peut écouter de la musique forte à minuit.", ok: false, why: "no noise after 11 p.m.", lesson: "u07" },
        { s: "Il faut rendre la clé avant 10 heures.", ok: true, lesson: "u07" },
        { s: "Les clients font la vaisselle.", ok: true, lesson: "u07" },
        { s: "Votre chien peut dormir avec vous.", ok: false, lesson: "u07" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 5,
      instr: "DELF A1 · Compréhension des écrits. Lisez la carte postale de Tom et répondez.",
      instrEn: "Read Tom's postcard, then decide: true or false?",
      doc: { type: "postcard", pic: "🏰", place: "BUDAPEST · HONGRIE", stamp: "🇭🇺", to: ["Chloé Martin", "3, rue Victor-Hugo", "35000 Rennes"], lines: [["Chère Chloé,", ""], ["Je suis arrivé à Budapest lundi avec mon frère. Nous sommes logés dans une auberge de jeunesse : c'est moins cher que l'hôtel et plus sympa !", ""], ["Hier, nous sommes allés aux bains : c'était génial. Il faisait froid dehors, mais l'eau était chaude !", ""], ["Vendredi, retour à Paris. Je t'embrasse, Tom", ""]] },
      items: [
        { s: "Tom est en vacances avec sa sœur.", ok: false, why: "avec mon frère", lesson: "u08" },
        { s: "L'auberge de jeunesse est moins chère que l'hôtel.", ok: true, lesson: "u08" },
        { s: "Hier, Tom est allé aux bains.", ok: true, lesson: "u08" },
        { s: "Il faisait chaud dehors.", ok: false, why: "Il faisait froid dehors.", lesson: "u08" },
        { s: "Tom rentre à Paris vendredi.", ok: true, lesson: "u08" }
      ]
    },
    {
      id: "s7", type: "listen", marks: 5,
      instr: "Écoutez et répondez.",
      instrEn: "Listening: play each recording (twice if you like), then choose. The transcript appears after you check.",
      items: [
        { say: "L'appartement fait cinquante mètres carrés. Il y a deux chambres, une cuisine et une salle de bains. Le loyer est de six cents euros.", q: "Combien de chambres ?", o: ["deux", "trois", "une"], a: 0, lesson: "u07" },
        { say: "L'appartement fait cinquante mètres carrés. Il y a deux chambres, une cuisine et une salle de bains. Le loyer est de six cents euros.", q: "Le loyer est de…", o: ["600 €", "500 €", "650 €"], a: 0, lesson: "u07" },
        { say: "Allô, monsieur ? Il y a une fuite d'eau dans la cuisine ! Vous pouvez venir aujourd'hui ?", q: "Le problème est…", o: ["une fuite d'eau", "une panne d'électricité", "une porte cassée"], a: 0, lesson: "u07" },
        { say: "Nous sommes partis en Bretagne pendant une semaine. Nous avons fait du vélo et nous sommes allés à la plage. C'était génial !", q: "Ils sont restés…", o: ["une semaine", "un mois", "un week-end"], a: 0, lesson: "u08" },
        { say: "Bonjour, je voudrais réserver une chambre double pour deux nuits, du dix au douze août.", q: "La personne réserve…", o: ["une chambre double", "une chambre simple", "un appartement"], a: 0, lesson: "u08" }
      ]
    }
  ],
  selfCheck: [
    ["Poser des questions sur un logement", "ask questions about accommodation"],
    ["Décrire une pièce et dire où sont les objets", "describe a room and say where things are"],
    ["Comprendre et écrire un règlement", "understand and write rules"],
    ["Expliquer un problème à la maison", "explain a household problem"],
    ["Comparer deux hébergements et dire ma préférence", "compare two places to stay and give my preference"],
    ["Raconter mes vacances au passé", "tell about my holidays in the past"],
    ["Écrire une carte postale et un mail formel", "write a postcard and a formal e-mail"]
  ]
};
