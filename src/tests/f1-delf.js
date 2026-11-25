// DELF A1 · Épreuve blanche (book p. 187 format) · original mock exam covering the whole course (Unités 0–12).
// Four parts like the real exam: compréhension de l'oral, compréhension des écrits, production écrite (form-filling), production orale (preparation).
window.TEST = {
  id: "f1-delf",
  rubrique: 6,
  after: 12,
  title: "DELF A1 practice exam",
  titleFr: "DELF A1 · Épreuve blanche",
  covers: ["u00", "u01", "u02", "u03", "u04", "u05", "u06", "u07", "u08", "u09", "u10", "u11", "u12"],
  pages: "Unités 0–12 · the whole course",
  intro: "A full mock DELF A1 in four parts, like the real exam (compréhension de l'oral, compréhension des écrits, production écrite, production orale). Real DELF A1: about 1 h 20 of written papers + 5–7 min oral, 100 points, pass mark 50/100 with at least 5/25 in each part. Here, each part is out of 20 so you can see your balance. Play each recording twice, as in the exam.",
  sections: [
    {
      id: "co", type: "listen", marks: 20,
      instr: "1 · Compréhension de l'oral",
      instrEn: "Listening: you hear short everyday messages and dialogues. Play each one twice, then answer.",
      items: [
        { say: "Bonjour, c'est Anne ! Demain matin, je vais au marché. Tu viens avec moi ? Rendez-vous à neuf heures et demie devant la boulangerie. Après, on peut prendre un café !", q: "Anne va aller…", o: ["au marché", "à la piscine", "à l'université"], a: 0, lesson: "u03" },
        { say: "Bonjour, c'est Anne ! Demain matin, je vais au marché. Tu viens avec moi ? Rendez-vous à neuf heures et demie devant la boulangerie. Après, on peut prendre un café !", q: "Le rendez-vous est à…", o: ["9 h 30", "10 h 30", "9 h"], a: 0, lesson: "u05" },
        { say: "Bonjour, c'est Anne ! Demain matin, je vais au marché. Tu viens avec moi ? Rendez-vous à neuf heures et demie devant la boulangerie. Après, on peut prendre un café !", q: "Anne vous propose aussi…", o: ["de prendre un café", "d'aller au cinéma", "de venir manger chez elle"], a: 0, lesson: "u05" },
        { say: "Bonjour, ici monsieur Moreau, de l'agence Voyages Plus. J'ai deux places pour un concert à Strasbourg samedi soir. Rappelez-moi au zéro trois, quatre-vingt-huit, douze, quarante-cinq, soixante, avant dix-huit heures.", q: "Monsieur Moreau travaille…", o: ["dans une agence de voyage", "à l'aéroport", "dans un hôtel"], a: 0, lesson: "u08" },
        { say: "Bonjour, ici monsieur Moreau, de l'agence Voyages Plus. J'ai deux places pour un concert à Strasbourg samedi soir. Rappelez-moi au zéro trois, quatre-vingt-huit, douze, quarante-cinq, soixante, avant dix-huit heures.", q: "Il vous propose deux places pour…", o: ["un concert", "un match de basket", "un opéra"], a: 0, lesson: "u05" },
        { say: "Bonjour, ici monsieur Moreau, de l'agence Voyages Plus. J'ai deux places pour un concert à Strasbourg samedi soir. Rappelez-moi au zéro trois, quatre-vingt-huit, douze, quarante-cinq, soixante, avant dix-huit heures.", q: "Le numéro à rappeler :", o: ["03 88 12 45 60", "03 98 12 45 60", "03 88 02 45 70"], a: 0, lesson: "u01" },
        { say: "Bonjour, je voudrais un kilo de tomates et une barquette de fraises, s'il vous plaît. — Voilà. Ça fait six euros vingt.", q: "Où sont ces personnes ?", o: ["au marché", "à la pharmacie", "à la poste"], a: 0, lesson: "u03" },
        { say: "Pardon, monsieur, la gare, s'il vous plaît ? — Prenez la première rue à droite, puis allez tout droit. C'est à cinq minutes.", q: "La personne demande…", o: ["le chemin", "l'heure", "un prix"], a: 0, lesson: "u02" },
        { say: "Qu'est-ce qui ne va pas ? — J'ai mal à la gorge et j'ai de la fièvre depuis hier.", q: "La personne est…", o: ["malade", "en vacances", "en retard"], a: 0, lesson: "u09" },
        { say: "Il est grand, brun, il porte des lunettes et une veste bleue. C'est mon frère !", q: "On décrit…", o: ["une personne", "un appartement", "un magazine"], a: 0, lesson: "u06" }
      ]
    },
    {
      id: "ce", type: "tf", marks: 20,
      instr: "2 · Compréhension des écrits",
      instrEn: "Reading: you arrive at friends' house in France. Nobody's there, but there's a note on the door. Read it, then answer true or false.",
      doc: { type: "card", style: "board", title: "MOT SUR LA PORTE", sub: "pour Lenie", rows: [
        ["Bonjour Lenie !", "Jean n'est pas encore rentré : il a une réunion importante. Il va arriver vers 19 h."],
        ["Moi…", "je dois aller chercher les enfants à l'école."],
        ["Tu peux… ?", "aller à la boulangerie acheter une baguette et des pains au chocolat pour les enfants ?"],
        ["Où ?", "rue des Lilas, juste derrière la maison, à côté de la pharmacie."],
        ["La clé", "est sous le pot de fleurs, à droite de la porte."]
      ], foot: "Merci ! À tout à l'heure (vers 17 h 30). Bises, Claire" },
      items: [
        { s: "Jean est au travail.", ok: true, why: "il a une réunion importante", lesson: "u05" },
        { s: "Jean va rentrer vers 19 heures.", ok: true, lesson: "u05" },
        { s: "Claire est à la boulangerie.", ok: false, why: "Elle va chercher les enfants à l'école.", lesson: "u05" },
        { s: "Lenie doit acheter du pain.", ok: true, lesson: "u03" },
        { s: "La boulangerie est loin de la maison.", ok: false, why: "juste derrière la maison", lesson: "u02" },
        { s: "La boulangerie est à côté de la pharmacie.", ok: true, lesson: "u07" },
        { s: "Les pains au chocolat sont pour Jean.", ok: false, why: "pour les enfants", lesson: "u03" },
        { s: "La clé est sous le pot de fleurs.", ok: true, lesson: "u07" },
        { s: "Claire va rentrer vers 17 h 30.", ok: true, lesson: "u05" },
        { s: "Le message est formel.", ok: false, why: "Bises: it's a friendly note.", lesson: "u08" }
      ]
    },
    {
      id: "pe", type: "type", marks: 20,
      instr: "3 · Production écrite · Compléter une fiche",
      instrEn: "Writing, part 1: you are Lucas Moreira, Brazilian, 24, born 12 March 2002 in São Paulo, a computing student, living at 15 rue Victor-Hugo, 69002 Lyon. You enrol at a sports club (you like swimming and hiking, free on Saturdays). Fill in the form: type one word or number per gap.",
      items: [
        { p: "Nom : ___", a: "Moreira", lesson: "u01" },
        { p: "Prénom : ___", a: "Lucas", lesson: "u01" },
        { p: "Nationalité : ___", a: "brésilienne|brésilien|Brésilienne|Brésilien", lesson: "u01" },
        { p: "Âge : ___ ans", a: "24|vingt-quatre", lesson: "u01" },
        { p: "Date de naissance : 12 ___ 2002", a: "mars", lesson: "u00" },
        { p: "Ville de naissance : ___", a: "São Paulo|Sao Paulo", lesson: "u01" },
        { p: "Profession : ___", a: "étudiant", lesson: "u02" },
        { p: "Code postal : ___", a: "69002", lesson: "u01" },
        { p: "Ville : ___", a: "Lyon", lesson: "u01" },
        { p: "Sports préférés : la natation et la ___", a: "randonnée", lesson: "u11" },
        { p: "Jour libre : le ___", a: "samedi", lesson: "u05" },
        { p: "Message (part 2) · Je suis ___ en informatique. (student, m.)", a: "étudiant", lesson: "u10" },
        { p: "Message · J'___ la natation. (to love)", a: "adore|aime", lesson: "u01" },
        { p: "Message · L'été dernier, je ___ allé au Portugal.", a: "suis", lesson: "u08" },
        { p: "Message · Le week-end, je fais ___ randonnée.", a: "de la", lesson: "u11" },
        { p: "Message · Je voudrais ___ des cours le samedi. (prendre)", a: "prendre", lesson: "u05" },
        { p: "Message · Vous ___ m'appeler au 06 12 34 56 78. (pouvoir)", a: "pouvez", lesson: "u05" },
        { p: "Message · ___ vous intéresse, j'ai aussi fait du football. (si + ça)", a: "Si ça|si ça", lesson: "u10" },
        { p: "Message · Merci ___ votre réponse.", a: "pour|d'avance pour", lesson: "u08" },
        { p: "Message · Formal sign-off: ___,", a: "Cordialement|cordialement", lesson: "u08" }
      ]
    },
    {
      id: "po", type: "choose", marks: 20,
      instr: "4 · Production orale · Préparation",
      instrEn: "Speaking (5–7 min): entretien dirigé, échange d'informations, dialogue simulé. Choose the best thing to say. Then practise saying each answer aloud!",
      items: [
        { s: "Entretien · « Comment vous vous appelez ? »", o: ["Je m'appelle Lucas Moreira.", "Je suis appelle Lucas.", "Lucas, merci."], a: 0, lesson: "u01" },
        { s: "Entretien · « Vous habitez où ? »", o: ["J'habite à Lyon, rue Victor-Hugo.", "J'habite en Lyon.", "Je suis Lyon."], a: 0, lesson: "u01" },
        { s: "Entretien · « Parlez-moi de votre famille. »", o: ["J'ai un frère et une sœur. Mon père est médecin.", "J'ai famille.", "Ma famille, c'est faux."], a: 0, lesson: "u06" },
        { s: "Entretien · « Qu'est-ce que vous faites le week-end ? »", o: ["Je fais de la randonnée et je vais au cinéma.", "Je fais du randonnée.", "Week-end, samedi."], a: 0, lesson: "u05" },
        { s: "Entretien · « Pourquoi vous apprenez le français ? »", o: ["Pour travailler au Canada.", "Pour je travaille au Canada.", "Depuis le Canada."], a: 0, lesson: "u10" },
        { s: "Entretien · « Vous avez des projets ? »", o: ["Je compte voyager au Québec l'été prochain.", "J'ai voyagé.", "Projets, oui."], a: 0, lesson: "u12" },
        { s: "Échange · card « vacances »", o: ["Où est-ce que vous partez en vacances ?", "Vacances ?", "Je pars en vacances."], a: 0, lesson: "u08" },
        { s: "Échange · card « sport »", o: ["Est-ce que vous faites du sport ?", "Sport, s'il vous plaît.", "Je suis sportif."], a: 0, lesson: "u05" },
        { s: "Échange · card « cuisine »", o: ["Quel est votre plat préféré ?", "Cuisine !", "J'aime la cuisine."], a: 0, lesson: "u03" },
        { s: "Échange · card « logement »", o: ["Vous habitez dans une maison ou un appartement ?", "Logement ?", "J'habite."], a: 0, lesson: "u07" },
        { s: "Échange · card « travail »", o: ["Qu'est-ce que vous faites comme travail ?", "Travail, combien ?", "Je travaille trop."], a: 0, lesson: "u10" },
        { s: "Échange · card « famille »", o: ["Vous avez des enfants ?", "Enfants !", "Ma famille est grande."], a: 0, lesson: "u06" },
        { s: "Dialogue simulé · at a clothes shop: start", o: ["Bonjour, je voudrais essayer ce pantalon en 40, s'il vous plaît.", "Pantalon !", "Donnez pantalon."], a: 0, lesson: "u04" },
        { s: "Dialogue simulé · ask the price", o: ["Il coûte combien ?", "Il coûte où ?", "Combien il est ?"], a: 0, lesson: "u04" },
        { s: "Dialogue simulé · it's too small", o: ["Il est trop petit. Vous avez la taille au-dessus ?", "Il est beaucoup petit.", "Petit, merci."], a: 0, lesson: "u04" },
        { s: "Dialogue simulé · decide", o: ["Je le prends.", "Je lui prends.", "Je prends il."], a: 0, lesson: "u12" },
        { s: "Dialogue simulé · pay", o: ["Je peux payer par carte ?", "Je paye carte où ?", "Carte, oui ?"], a: 0, lesson: "u03" },
        { s: "Dialogue simulé · finish", o: ["Merci, au revoir, bonne journée !", "Salut !", "C'est fini."], a: 0, lesson: "u00" },
        { s: "You didn't understand the examiner.", o: ["Pardon, vous pouvez répéter, s'il vous plaît ?", "Quoi ?", "Je ne suis pas d'accord."], a: 0, lesson: "u00" },
        { s: "You need a word you don't know.", o: ["Comment on dit « ... » en français ?", "Je ne sais pas, au revoir.", "Silence."], a: 0, lesson: "u00" }
      ]
    }
  ],
  selfCheck: [
    ["Comprendre des messages simples (répondeur, annonces)", "understand simple recorded messages"],
    ["Comprendre un mot, un mail, une annonce", "understand a note, an e-mail, an ad"],
    ["Remplir une fiche avec mes informations personnelles", "fill in a form with my personal details"],
    ["Écrire un message simple (carte postale, mail)", "write a simple message"],
    ["Me présenter et répondre à des questions sur moi", "introduce myself and answer questions about me"],
    ["Poser des questions à partir d'un mot", "ask questions from a keyword"],
    ["Acheter quelque chose et payer dans un magasin", "buy something and pay in a shop"]
  ]
};
