// Étape 6 · Bilan « Nature et projets » (Unités 11–12, book pp. 159–186)
// Original test, DELF A1 style: one point per item, answers explained. Covers u11, u12.
window.TEST = {
  id: "e6-test",
  rubrique: 6,
  after: 12,
  title: "Étape 6 test · Nature and plans",
  titleFr: "Bilan · Nature et projets",
  covers: ["u11", "u12"],
  pages: "Unités 11–12 · book pp. 159–186",
  intro: "Do the whole test without looking anything up, then check each section. Section 5 is a listening task, section 6 a DELF A1-style reading task on a magazine page. After this, try the full DELF A1 practice exam.",
  sections: [
    {
      id: "s1", type: "choose", marks: 8,
      instr: "Que dites-vous ?",
      instrEn: "What do you say in each situation? Choose a, b or c.",
      items: [
        { s: "You're fed up with traffic jams.", o: ["J'en ai marre des bouchons !", "J'ai marre les bouchons !", "Les bouchons, c'est mon truc."], a: 0, lesson: "u11" },
        { s: "You explain your life choice.", o: ["J'ai décidé de vivre à la campagne.", "J'ai décidé vivre à la campagne.", "Je décide à la campagne."], a: 0, lesson: "u11" },
        { s: "You describe your days on the farm.", o: ["Je passe mes journées à m'occuper des animaux.", "Je passe mes journées de les animaux.", "J'occupe les animaux journées."], a: 0, lesson: "u11" },
        { s: "You say two trees are identical.", o: ["Ils sont pareils.", "Ils sont différents.", "Ils sont plus grands."], a: 0, lesson: "u11" },
        { s: "You tell someone what's hard for you.", o: ["J'ai du mal à m'exprimer.", "J'ai mal à m'exprimer.", "J'ai du mal de m'exprimer."], a: 0, lesson: "u12" },
        { s: "Your friend is afraid to speak. You reassure her.", o: ["Ne t'inquiète pas, ça va aller !", "C'est faux.", "Je ne suis pas d'accord."], a: 0, lesson: "u12" },
        { s: "You disagree strongly.", o: ["Mais non, pas du tout !", "Tu as raison.", "C'est vrai."], a: 0, lesson: "u12" },
        { s: "Something interests you.", o: ["Vraiment ? C'est intéressant !", "Ça suffit !", "Je n'en peux plus !"], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s2", type: "type", marks: 10,
      instr: "Complétez.",
      instrEn: "Type the missing word(s): comparison, pronoun, article, time expression, tense…",
      items: [
        { p: "À la campagne, il y a ___ arbres qu'en ville. (+)", a: "plus d'", lesson: "u11" },
        { p: "En ville, on a ___ temps libre. (−)", a: "moins de", lesson: "u11" },
        { p: "Tu crois au changement ? Oui, j'___ crois !", a: "y", lesson: "u11" },
        { p: "L'hiver, on fait ___ ski.", a: "du", lesson: "u11" },
        { p: "Les enfants jouent ___ cartes.", a: "aux", lesson: "u11" },
        { p: "Ces arbres ont ___ même taille.", a: "la", lesson: "u11" },
        { p: "Le professeur ___ corrige. (moi)", a: "me", lesson: "u12" },
        { p: "Mes parents ? Je ___ offre un magazine.", a: "leur", lesson: "u12" },
        { p: "Il a étudié le français ___ dix ans. (= ten years ago)", a: "il y a", lesson: "u12" },
        { p: "Je pars au Sénégal ___ trois jours. (future)", a: "dans", lesson: "u12" }
      ]
    },
    {
      id: "s3", type: "dialogue", marks: 6,
      instr: "Complétez les dialogues.",
      instrEn: "Choose the line that completes each mini-dialogue.",
      items: [
        { lines: [["A", "Pourquoi tu as quitté Paris ?"], ["B", "___"]], o: ["J'en avais assez du bruit et de la pollution.", "J'y vais demain.", "Elle est aussi grande que moi."], a: 0, lesson: "u11" },
        { lines: [["A", "Vous pensez encore à votre vie d'avant ?"], ["B", "___"]], o: ["Non, je n'y pense plus.", "Non, je ne lui pense plus.", "Non, je pense moins de."], a: 0, lesson: "u11" },
        { lines: [["A", "Qu'est-ce que tu cultives ?"], ["B", "___"]], o: ["Des tomates et des fleurs.", "Du ski et de la voile.", "Le centre-ville."], a: 0, lesson: "u11" },
        { lines: [["A", "Tu as des projets pour l'été ?"], ["B", "___"]], o: ["Oui, je compte partir au Québec.", "Oui, j'ai eu des projets.", "Oui, c'est faux."], a: 0, lesson: "u12" },
        { lines: [["A", "Tu lis la rubrique cinéma ?"], ["B", "___"]], o: ["Oui, je la lis toutes les semaines.", "Oui, je lui lis.", "Oui, j'y lis."], a: 0, lesson: "u12" },
        { lines: [["A", "Les horoscopes, c'est génial !"], ["B", "___"]], o: ["Je ne suis pas d'accord, je n'y crois pas.", "Courage, vas-y !", "Il y a dix ans."], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s4", type: "match", marks: 6,
      instr: "Associez.",
      instrEn: "Match each French word with its meaning.",
      items: [
        { a: "le bouchon", b: "the traffic jam", lesson: "u11" }, { a: "arroser", b: "to water", lesson: "u11" }, { a: "le berger", b: "the shepherd", lesson: "u11" },
        { a: "la rubrique", b: "the section (of a magazine)", lesson: "u12" }, { a: "la famille d'accueil", b: "the host family", lesson: "u12" }, { a: "prendre la parole", b: "to speak up", lesson: "u12" }
      ]
    },
    {
      id: "s5", type: "listen", marks: 5,
      instr: "Écoutez et répondez.",
      instrEn: "Listen to each message (twice if you like), then choose the answer. The transcript appears after you check.",
      items: [
        { say: "Salut, c'est Margot ! Samedi, on fait un pique-nique au bord du lac. Tu viens ? On se retrouve à midi devant le parc.", q: "Où est le pique-nique ?", o: ["au bord du lac", "à la plage", "dans le jardin"], a: 0, lesson: "u11" },
        { say: "Salut, c'est Margot ! Samedi, on fait un pique-nique au bord du lac. Tu viens ? On se retrouve à midi devant le parc.", q: "À quelle heure est le rendez-vous ?", o: ["à midi", "à dix heures", "à quatorze heures"], a: 0, lesson: "u11" },
        { say: "Bonjour, ici le jardin partagé du quartier. Nous cherchons des jardiniers pour planter des tomates et des courgettes. Venez mercredi après-midi !", q: "Le jardin cherche…", o: ["des jardiniers", "des cuisiniers", "des vendeurs"], a: 0, lesson: "u11" },
        { say: "Soirée polyglotte tous les mardis à vingt heures au café de la gare. L'entrée coûte trois euros avec une boisson.", q: "La soirée polyglotte a lieu…", o: ["le mardi à 20 h", "le mercredi à 20 h", "le mardi à 18 h"], a: 0, lesson: "u12" },
        { say: "Soirée polyglotte tous les mardis à vingt heures au café de la gare. L'entrée coûte trois euros avec une boisson.", q: "Combien coûte l'entrée ?", o: ["3 €", "13 €", "gratuit"], a: 0, lesson: "u12" }
      ]
    },
    {
      id: "s6", type: "tf", marks: 5,
      instr: "DELF A1 · Compréhension des écrits. Lisez l'article et répondez.",
      instrEn: "Read the magazine portrait, then decide: true or false?",
      doc: { type: "card", style: "board", title: "UNE ANNÉE AVEC… TANIA ET KARIM", sub: "magazine Vivre au vert · rubrique « Société »", rows: [
        ["Où ?", "au bord de la mer, en Bretagne, depuis 2019"],
        ["Avant", "ils habitaient à Paris : « On en avait marre des bouchons ! »"],
        ["Métier", "maraîchers : ils cultivent des légumes et ils les vendent au marché"],
        ["Loisirs", "l'été, ils font de la voile ; l'hiver, ils restent à la maison"],
        ["Projet", "« Dans deux ans, nous allons ouvrir un petit restaurant. »"]
      ], foot: "« On ne regrette pas notre choix ! »" },
      items: [
        { s: "Tania et Karim habitent à la montagne.", ok: false, why: "au bord de la mer, en Bretagne", lesson: "u11" },
        { s: "Avant, ils vivaient à Paris.", ok: true, lesson: "u11" },
        { s: "Ils vendent leurs légumes au marché.", ok: true, lesson: "u11" },
        { s: "L'hiver, ils font de la voile.", ok: false, why: "L'été, ils font de la voile.", lesson: "u11" },
        { s: "Ils ont un projet de restaurant.", ok: true, lesson: "u12" }
      ]
    }
  ],
  selfCheck: [
    ["Exprimer mon insatisfaction", "express dissatisfaction"],
    ["Raconter un changement de vie", "tell about a change of life"],
    ["Comparer des quantités et dire que c'est pareil", "compare quantities and say things are the same"],
    ["Décrire mon mode de vie et mes loisirs de plein air", "describe my lifestyle and outdoor activities"],
    ["Parler de mes difficultés et encourager quelqu'un", "talk about my difficulties and encourage someone"],
    ["Parler d'un projet et dire si je suis d'accord", "talk about a plan and agree or disagree"],
    ["Acheter des journaux et dire ce qui m'intéresse", "buy newspapers and say what interests me"]
  ]
};
