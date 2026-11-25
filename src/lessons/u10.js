// Unité 10 · Beau travail ! (book pp. 145–158)
// Situations: partir étudier à l'étranger (Erasmus+) · parler de ses études · le campus et le FacLab · les projets professionnels · l'entretien d'embauche
// Grammar: la condition avec si · le but (pour) · la durée et la continuation (depuis, pendant, il y a, toujours) · les pronoms relatifs qui et que · l'intensité
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U10_CAMPUS = {
  streets: [
    { p: [[20, 130], [385, 130]], name: "allée centrale", dy: -10, dx: 90 },
    { p: [[200, 15], [200, 245]], name: "allée des Sciences", dx: -12, dy: 60 },
    { p: [[80, 40], [80, 220]] }, { p: [[320, 40], [320, 220]] }
  ],
  parks: [[220, 150, 80, 60], [100, 20, 80, 40]],
  places: [
    { id: "amphi", x: 140, y: 100, pic: "🎓", name: "l'amphithéâtre", c: "#3a4f8a" },
    { id: "bu", x: 260, y: 100, pic: "📚", name: "la bibliothèque", c: "#2f9c8a" },
    { id: "ru", x: 140, y: 172, pic: "🍽️", name: "le restaurant universitaire", c: "#e86a2e" },
    { id: "gym", x: 360, y: 172, pic: "🏀", name: "le gymnase", c: "#e0474f" },
    { id: "labo", x: 360, y: 92, pic: "🔬", name: "le laboratoire", c: "#9b4fb0" },
    { id: "faclab", x: 40, y: 172, pic: "🛠️", name: "le FacLab", c: "#7d9a2e" },
    { id: "secr", x: 40, y: 92, pic: "📝", name: "le secrétariat", c: "#5b6b7c" }
  ],
  route: [[200, 245], [200, 130], [262, 130], [262, 116]],
  here: [200, 245]
};
LESSONS.push({
  id: "u10", rubrique: 5, num: 10,
  title: "Good work!",
  titleFr: "Beau travail !",
  pages: "Book pp. 145–158",
  opener: { fr: "Si tu es motivé, tu vas réussir !", en: "If you're motivated, you'll succeed!" },
  hero: { scene: "amphi", staff: "La professeure", people: { "La professeure": "f6", "Ana": "f4", "Malik": "m3", "Kim": "f7" } },
  situations: [
    ["🌍", "Partir avec Erasmus+", "studying abroad: [[Si vous êtes inscrit dans une université partenaire, vous pouvez partir.]]"],
    ["🎓", "Mes études", "your studies and a positive experience: [[Je suis en troisième année de licence.]]"],
    ["🛠️", "Le campus et le FacLab", "how long: [[L'université existe depuis 1934.]] · [[J'ai étudié l'arabe pendant deux ans.]]"],
    ["💼", "Mon projet professionnel", "wishes and skills: [[Je rêve d'être architecte.]] · [[Je sais dessiner.]]"],
    ["🤝", "L'entretien d'embauche", "the job interview: [[un métier qui me plaît]] · [[un travail que j'adore]] · [[très]], [[trop]]"]
  ],
  goals: [
    "Understand information about studying abroad and use [[si]] + present: [[Si tu étudies, tu réussis.]]",
    "Talk about your studies: [[Je suis étudiant(e) en master d'économie.]]",
    "Describe a positive experience: [[C'était une expérience géniale, j'ai appris beaucoup de choses.]]",
    "Say why with [[pour]]: [[J'apprends l'anglais pour le travail / pour travailler.]]",
    "Talk about length of time: [[depuis]], [[pendant]], [[il y a]], [[longtemps]], [[toujours]]",
    "Express a wish and a skill: [[J'espère que…]], [[J'ai envie de…]], [[Je sais…]], [[Je suis doué(e) pour…]]",
    "Link sentences with [[qui]] and [[que]]: [[un concours qui est difficile]], [[un métier que j'aime]]",
    "Express intensity: [[un peu]], [[assez]], [[très]], [[trop]], [[beaucoup]]"
  ],
  glance: [
    ["🗣️", "Communication", "studies abroad · university life · goals · skills and wishes · work and job interviews"],
    ["🧩", "Grammaire", "si + présent · pour (goal) · depuis, pendant, il y a · qui, que · intensity adverbs"],
    ["🗂️", "Vocabulaire", "university: campus, people, degrees, subjects · the company: people, working conditions, tasks, skills"],
    ["🔊", "Phonétique", "the French [ʁ] · [t] / [d]"],
    ["⭐", "The phrase to learn first", "[[Je rêve d'être… et je suis motivé(e) !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Studying abroad with Erasmus+", titleFr: "Au bureau des relations internationales · Partir avec Erasmus+",
      note: "Malik wants to study abroad. Listen to the conditions with [[si]] + present.",
      scene: "bureau", staff: "La conseillère", people: { "La conseillère": "f2", "Malik": "m3" },
      lines: [
        ["Malik", "Bonjour, madame. Je voudrais partir étudier à l'étranger l'année prochaine. Comment ça marche ?", "Hello. I'd like to study abroad next year. How does it work?"],
        ["La conseillère", "Avec le programme Erasmus+, c'est possible. Vous êtes en quelle année ?", "With the Erasmus+ programme, it's possible. Which year are you in?"],
        ["Malik", "Je suis en deuxième année de licence d'économie.", "I'm in the second year of an economics degree."],
        ["La conseillère", "Parfait. Si vous êtes inscrit dans notre université, vous pouvez partir dans une université partenaire, pendant un semestre ou une année.", "Perfect. If you're enrolled at our university, you can go to a partner university for a semester or a year."],
        ["Malik", "Et si je pars en Espagne, je dois payer l'université espagnole ?", "And if I go to Spain, do I have to pay the Spanish university?"],
        ["La conseillère", "Non ! Si vous participez à Erasmus+, vous payez seulement les frais d'inscription ici. Et vous pouvez avoir une bourse.", "No! If you take part in Erasmus+, you only pay the enrolment fees here. And you can get a grant."],
        ["Malik", "Super ! Qu'est-ce que je dois faire ?", "Great! What do I have to do?"],
        ["La conseillère", "Vous remplissez ce dossier et vous me l'envoyez avec votre CV avant le 15 février. Bonne chance !", "Fill in this form and send it to me with your CV before 15 February. Good luck!"]
      ],
      glossary: [["être inscrit(e)", "to be enrolled"], ["la licence", "bachelor's degree"], ["une bourse", "a grant, a scholarship"], ["le dossier", "the application file"]]
    },
    {
      id: "d2", n: 2, title: "Back from Erasmus", titleFr: "À la cafétéria · Mon année Erasmus",
      note: "Ana tells Kim about her Erasmus year in Montréal. Listen to how she describes a positive experience and her studies.",
      scene: "cafe", staff: "Le serveur", people: { "Le serveur": "m7", "Kim": "f7", "Ana": "f4" },
      lines: [
        ["Kim", "Alors, Ana, ton année à Montréal ?", "So, Ana, your year in Montréal?"],
        ["Ana", "C'était une expérience géniale ! J'ai appris beaucoup de choses et je me suis fait des amis du monde entier.", "It was a great experience! I learned lots of things and made friends from all over the world."],
        ["Kim", "Tu as étudié quoi là-bas ?", "What did you study there?"],
        ["Ana", "Le droit international. Maintenant, je suis en master 1 de droit, ici.", "International law. Now I'm in the first year of a master's in law, here."],
        ["Kim", "Et le français du Québec, tu as compris ?", "And Québec French, did you understand it?"],
        ["Ana", "Au début, un peu… Mais après, j'ai adoré ! Et j'ai fait un stage pour travailler avec des avocats.", "At first, a bit… But afterwards I loved it! And I did an internship to work with lawyers."],
        ["Kim", "Moi aussi, je voudrais partir, pour améliorer mon anglais.", "I'd like to go too, to improve my English."],
        ["Ana", "Alors, vas-y ! Ça change la vie !", "Then go for it! It changes your life!"]
      ],
      glossary: [["C'était une expérience géniale.", "it was a great experience"], ["le droit", "law"], ["un stage", "an internship"], ["pour + infinitif", "(in order) to…"]]
    },
    {
      id: "d3", n: 3, title: "A visit to the FacLab", titleFr: "Sur le campus · Le FacLab",
      note: "Professor Durand shows new students the campus and its FacLab (a digital fabrication workshop). Listen for [[depuis]], [[pendant]], [[il y a]].",
      scene: "classe", staff: "Le professeur", people: { "Le professeur": "m4", "Kim": "f7", "Malik": "m3" },
      lines: [
        ["Le professeur", "Bienvenue sur le campus ! Notre université existe depuis 1934. Elle a cinq départements et plus de cent salles de cours.", "Welcome to the campus! Our university has existed since 1934. It has five departments and over a hundred classrooms."],
        ["Kim", "Et le FacLab, qu'est-ce que c'est ?", "And the FacLab, what's that?"],
        ["Le professeur", "C'est un atelier de fabrication numérique. Il a ouvert il y a trois ans. On peut y fabriquer des objets avec des imprimantes 3D.", "It's a digital fabrication workshop. It opened three years ago. You can make objects there with 3D printers."],
        ["Malik", "C'est ouvert à tout le monde ?", "Is it open to everyone?"],
        ["Le professeur", "Oui, aux étudiants et aux habitants du quartier. Mais on doit d'abord être formé, pendant deux heures.", "Yes, to students and local residents. But you have to be trained first, for two hours."],
        ["Kim", "Vous travaillez ici depuis longtemps ?", "Have you worked here for a long time?"],
        ["Le professeur", "Depuis dix ans. Avant, j'ai travaillé pendant cinq ans au Canada. Et j'ai toujours aimé fabriquer des objets !", "For ten years. Before that, I worked in Canada for five years. And I've always loved making things!"]
      ],
      glossary: [["depuis 1934", "since 1934"], ["il y a trois ans", "three years ago"], ["pendant deux heures", "for two hours"], ["depuis longtemps", "for a long time"]]
    },
    {
      id: "d4", n: 4, title: "My career plans", titleFr: "Entre amis · Mon projet professionnel",
      note: "Three friends talk about what they want to do. Listen to wishes ([[Je rêve de…]], [[J'espère que…]]), skills ([[Je sais…]], [[Je suis doué pour…]]) and [[qui]] / [[que]].",
      scene: "ville", people: { "Kim": "f7", "Malik": "m3", "Léo": "m5" },
      lines: [
        ["Kim", "Moi, je rêve d'être architecte. Je sais dessiner et je suis douée pour les maths.", "I dream of being an architect. I can draw and I'm good at maths."],
        ["Malik", "Moi, j'ai envie de défendre les gens. Je veux devenir avocat. Je dois passer un concours qui est très difficile.", "I want to defend people. I want to become a lawyer. I have to pass an exam which is very difficult."],
        ["Léo", "Et moi, ça me plairait de travailler dehors. Je voudrais être jardinier.", "And I'd love to work outdoors. I'd like to be a gardener."],
        ["Kim", "Jardinier ? C'est un métier que tu connais ?", "A gardener? Is it a job you know?"],
        ["Léo", "Oui, mon oncle est jardinier. Je connais bien les plantes, et je peux porter des objets lourds !", "Yes, my uncle is a gardener. I know plants well, and I can carry heavy things!"],
        ["Malik", "C'est un projet qui te va bien !", "It's a plan that suits you!"],
        ["Léo", "J'espère que je vais réussir. Je suis motivé !", "I hope I'll succeed. I'm motivated!"]
      ],
      glossary: [["Je rêve d'être…", "I dream of being…"], ["J'ai envie de…", "I want to…"], ["doué(e) pour", "good at"], ["un concours", "a competitive exam"]]
    },
    {
      id: "d5", n: 5, title: "A job interview", titleFr: "L'entretien d'embauche · Parlez-moi de vous",
      note: "Ana has a job interview for an assistant post in a law firm. Listen to the intensity words: [[très]], [[assez]], [[trop]], [[beaucoup]].",
      scene: "bureau", staff: "La directrice", people: { "La directrice": "f5", "Ana": "f4" },
      lines: [
        ["La directrice", "Bonjour, mademoiselle. Asseyez-vous. Parlez-moi de vous.", "Hello. Take a seat. Tell me about yourself."],
        ["Ana", "Je suis en master de droit et j'ai fait un stage au Canada. J'aime beaucoup le travail en équipe.", "I'm doing a master's in law and I did an internship in Canada. I really like teamwork."],
        ["La directrice", "Vous parlez quelles langues ?", "Which languages do you speak?"],
        ["Ana", "Je parle très bien portugais et assez bien anglais.", "I speak Portuguese very well and English fairly well."],
        ["La directrice", "Le poste est un temps partiel : vingt heures par semaine. Ce n'est pas trop pour vos études ?", "The post is part-time: twenty hours a week. Isn't it too much with your studies?"],
        ["Ana", "Non, je suis très organisée. Je rends toujours mes dossiers à l'heure !", "No, I'm very organised. I always hand in my files on time!"],
        ["La directrice", "Parfait. Quelles sont vos qualités ?", "Perfect. What are your strengths?"],
        ["Ana", "Je suis sérieuse, curieuse… et un peu trop perfectionniste !", "I'm serious, curious… and a bit too much of a perfectionist!"],
        ["La directrice", "Ce n'est pas un défaut ici ! Vous pouvez commencer lundi ?", "That's not a fault here! Can you start on Monday?"]
      ],
      glossary: [["un entretien d'embauche", "a job interview"], ["un temps partiel", "a part-time job"], ["très / assez / trop", "very / fairly / too"], ["une qualité ≠ un défaut", "a strength ≠ a fault"]]
    }
  ],

  vocab: [
    { t: "l'université, la fac", en: "the university", pic: "🏛️", cat: "L'université", g: "f" },
    { t: "le campus", en: "the campus", pic: "🌳", cat: "L'université", g: "m" },
    { t: "l'amphithéâtre, l'amphi", en: "the lecture theatre", pic: "🎓", cat: "L'université", g: "m" },
    { t: "la salle de cours", en: "the classroom", pic: "🏫", cat: "L'université", g: "f" },
    { t: "la bibliothèque universitaire", en: "the university library", pic: "📚", cat: "L'université", g: "f" },
    { t: "le restaurant universitaire, le RU", en: "the university canteen", pic: "🍽️", cat: "L'université", g: "m" },
    { t: "le laboratoire", en: "the laboratory", pic: "🔬", cat: "L'université", g: "m" },
    { t: "la résidence universitaire", en: "the hall of residence", pic: "🏢", cat: "L'université", g: "f" },
    { t: "l'étudiant(e)", en: "the student", pic: "🧑‍🎓", cat: "Les personnes" },
    { t: "le / la professeur(e)", en: "the lecturer", pic: "🧑‍🏫", cat: "Les personnes" },
    { t: "le directeur, la directrice", en: "the director, the head", pic: "🧑‍💼", cat: "Les personnes" },
    { t: "le / la collègue", en: "the colleague", pic: "🤝", cat: "Les personnes" },
    { t: "le / la stagiaire", en: "the intern", pic: "🧑‍💻", cat: "Les personnes" },
    { t: "s'inscrire", en: "to enrol", pic: "📝", cat: "Les études" },
    { t: "le diplôme", en: "the degree, the diploma", pic: "📜", cat: "Les études", g: "m" },
    { t: "la licence", en: "the bachelor's degree (3 years)", pic: "🎓", cat: "Les études", g: "f" },
    { t: "le master", en: "the master's degree (2 years)", pic: "🎓", cat: "Les études", g: "m" },
    { t: "le doctorat", en: "the PhD", pic: "🧪", cat: "Les études", g: "m" },
    { t: "le semestre", en: "the semester", pic: "📆", cat: "Les études", g: "m" },
    { t: "l'examen", en: "the exam", pic: "📝", cat: "Les études", g: "m" },
    { t: "le concours", en: "the competitive exam", pic: "🏆", cat: "Les études", g: "m" },
    { t: "réussir", en: "to succeed, to pass", pic: "✅", cat: "Les études" },
    { t: "échouer", en: "to fail", pic: "❌", cat: "Les études" },
    { t: "la bourse", en: "the grant, scholarship", pic: "💶", cat: "Les études", g: "f" },
    { t: "le stage", en: "the internship", pic: "💼", cat: "Les études", g: "m" },
    { t: "le droit", en: "law", pic: "⚖️", cat: "Les matières", g: "m" },
    { t: "l'économie", en: "economics", pic: "📈", cat: "Les matières", g: "f" },
    { t: "la biologie", en: "biology", pic: "🧬", cat: "Les matières", g: "f" },
    { t: "l'informatique", en: "computer science", pic: "💻", cat: "Les matières", g: "f" },
    { t: "les mathématiques, les maths", en: "maths", pic: "➗", cat: "Les matières", g: "pl" },
    { t: "les langues", en: "languages", pic: "🗣️", cat: "Les matières", g: "pl" },
    { t: "la médecine", en: "medicine", pic: "🩺", cat: "Les matières", g: "f" },
    { t: "l'entreprise", en: "the company", pic: "🏢", cat: "L'entreprise", g: "f" },
    { t: "le poste", en: "the job, the post", pic: "🪑", cat: "L'entreprise", g: "m" },
    { t: "le CV", en: "the CV", pic: "📄", cat: "L'entreprise", g: "m" },
    { t: "l'entretien d'embauche", en: "the job interview", pic: "🤝", cat: "L'entreprise", g: "m" },
    { t: "le salaire", en: "the salary", pic: "💰", cat: "L'entreprise", g: "m" },
    { t: "à temps plein ≠ à temps partiel", en: "full-time ≠ part-time", pic: "⏳", cat: "L'entreprise" },
    { t: "les horaires", en: "working hours", pic: "🕘", cat: "L'entreprise", g: "pl" },
    { t: "la réunion", en: "the meeting", pic: "👥", cat: "L'entreprise", g: "f" },
    { t: "le dossier", en: "the file, the case", pic: "📁", cat: "L'entreprise", g: "m" },
    { t: "le travail en équipe", en: "teamwork", pic: "🤜🤛", cat: "L'entreprise", g: "m" },
    { t: "organisé(e)", en: "organised", pic: "🗂️", cat: "Les compétences" },
    { t: "sérieux, sérieuse", en: "serious, reliable", pic: "🧐", cat: "Les compétences" },
    { t: "curieux, curieuse", en: "curious", pic: "🔍", cat: "Les compétences" },
    { t: "motivé(e)", en: "motivated", pic: "🔥", cat: "Les compétences" },
    { t: "doué(e) pour", en: "good at, gifted for", pic: "⭐", cat: "Les compétences" },
    { t: "savoir + infinitif", en: "to know how to", pic: "🧠", cat: "Les compétences", note: "[[Je sais dessiner.]]" },
    { t: "connaître", en: "to know (a person, a place, a subject)", pic: "📖", cat: "Les compétences", note: "[[Je connais bien les plantes.]]" },
    { t: "un défaut", en: "a fault, weakness", pic: "⚠️", cat: "Les compétences", g: "m" },
    { t: "une qualité", en: "a quality, strength", pic: "💎", cat: "Les compétences", g: "f" }
  ],

  grammar: [
    {
      id: "g-si",
      title: "Conditions: [[si]] + present → present / future / imperative",
      body: [
        "To give a condition and its result: [[si]] + present, then a present, a futur proche or an imperative: [[Si vous êtes inscrit dans une université partenaire, vous pouvez partir.]] · [[Si tu étudies, tu vas réussir.]] · [[Si vous êtes intéressé, envoyez votre CV !]]",
        "[[si]] becomes [[s']] before <b>il</b> and <b>ils</b> only: [[s'il pleut]], [[s'ils viennent]], but [[si elle]], [[si on]]."
      ],
      info: { type: "card", style: "board", caption: "🌍 Erasmus+ · tap a line", title: "ERASMUS+ : QU'EST-CE QUE C'EST ?", sub: "un programme européen de mobilité", rows: [["Qui ?", "les étudiants inscrits dans l'enseignement supérieur", "Si vous êtes étudiant, vous pouvez participer."], ["Où ?", "dans une université partenaire, en Europe et dans le monde", "Vous partez dans une université partenaire."], ["Combien de temps ?", "de 3 mois à 1 an (études ou stage)", "de trois mois à un an"], ["Combien ?", "frais d'inscription payés seulement dans votre université", "Si vous participez, vous payez seulement les frais d'inscription chez vous."], ["Comment ?", "un dossier + un CV avant la date limite", "Envoyez votre dossier avec votre CV avant la date limite !"]], foot: "CV = curriculum vitae" },
      widget: {
        type: "combo", label: "If…, then… · pick a condition and a result type",
        rows: [{ k: "pres", label: "→ présent" }, { k: "fp", label: "→ futur proche" }, { k: "imp", label: "→ impératif" }],
        cols: [{ k: "etud", label: "🎓 tu es étudiant" }, { k: "lic", label: "📜 elle obtient sa licence" }, { k: "pleut", label: "🌧️ il pleut" }, { k: "int", label: "💼 vous êtes intéressé(e)" }],
        out: {
          "pres|etud": ["Si tu es étudiant, tu peux étudier à l'étranger.", "If you're a student, you can study abroad."], "fp|etud": ["Si tu es étudiant, tu vas avoir une réduction.", "If you're a student, you'll get a discount."], "imp|etud": ["Si tu es étudiant, demande une bourse !", "If you're a student, apply for a grant!"],
          "pres|lic": ["Si elle obtient sa licence, elle peut s'inscrire en master.", "If she gets her degree, she can enrol in a master's."], "fp|lic": ["Si elle obtient sa licence, elle va partir au Canada.", "If she gets her degree, she'll go to Canada."], "imp|lic": ["Si elle obtient sa licence, invitons-la au restaurant !", "If she gets her degree, let's take her out to dinner!"],
          "pres|pleut": ["S'il pleut, on reste à la bibliothèque.", "If it rains, we stay in the library.", "si + il → s'il"], "fp|pleut": ["S'il pleut, je vais prendre le bus.", "If it rains, I'll take the bus."], "imp|pleut": ["S'il pleut, prends ton parapluie !", "If it rains, take your umbrella!"],
          "pres|int": ["Si vous êtes intéressé, vous pouvez m'appeler.", "If you're interested, you can call me."], "fp|int": ["Si vous êtes intéressé, je vais vous envoyer le dossier.", "If you're interested, I'll send you the file."], "imp|int": ["Si vous êtes intéressé, envoyez votre CV !", "If you're interested, send your CV!"]
        }
      }
    },
    {
      id: "g-etudes",
      title: "Talking about your studies · and why: [[pour]]",
      body: [
        "Your studies: [[Je suis étudiant(e) en master 1 d'économie.]] · [[Je suis en troisième année de licence.]] · [[Je prépare un doctorat.]] A positive experience: [[C'était une expérience géniale !]] · [[J'ai appris beaucoup de choses.]] · [[J'ai adoré !]]",
        "The goal (why): [[pour]] + a noun or [[pour]] + an infinitive: [[J'apprends l'anglais pour le travail.]] · [[J'apprends l'anglais pour travailler au Canada.]]",
        "The French system: <b>licence</b> (3 years after the baccalauréat), <b>master</b> (2 more years), <b>doctorat</b> (about 3 more): the “LMD” system, the same as in many European countries."
      ],
      info: [
        { type: "ladder", title: "🎓 Le système LMD (licence, master, doctorat)", levels: [
          { name: "Doctorat", en: "bac + 8", color: "#3a4f8a", ex: ["Je prépare un doctorat en biologie."] },
          { name: "Master", en: "bac + 5 (M1, M2)", color: "#2f9c8a", ex: ["Je suis en master 1 de droit."] },
          { name: "Licence", en: "bac + 3 (L1, L2, L3)", color: "#e0a526", ex: ["Je suis en troisième année de licence."] },
          { name: "Baccalauréat", en: "end of secondary school", color: "#e86a2e", ex: ["J'ai eu mon bac en 2024."] }
        ] },
        { type: "map", title: "🗺️ Le plan du campus · from the main gate to the library", map: U10_CAMPUS,
          steps: [
            { mini: "toutdroit", fr: "Vous entrez sur le campus et vous prenez l'allée des Sciences, tout droit.", en: "Enter the campus and take the allée des Sciences, straight on." },
            { mini: "droite", fr: "Au carrefour avec l'allée centrale, vous tournez à droite.", en: "At the crossing with the central path, turn right." },
            { mini: "gauche", fr: "La bibliothèque est là, à gauche.", en: "The library is there, on the left." }
          ],
          quiz: [
            { say: "Vous allez tout droit, et au carrefour, vous tournez à gauche. C'est à droite, en face de la bibliothèque.", answer: "amphi", en: "Straight on; at the crossing, left. It's on the right, opposite the library." },
            { say: "Vous allez tout droit, vous tournez à droite et vous allez jusqu'au bout de l'allée centrale. C'est à gauche.", answer: "labo", en: "Straight on, right, to the end of the central path. It's on the left." },
            { say: "C'est à gauche de l'allée des Sciences, avant le carrefour. On y mange à midi !", answer: "ru", en: "Left of the allée des Sciences, before the crossing. You eat there at lunchtime!" },
            { say: "Vous tournez à gauche dans l'allée centrale et vous allez jusqu'au bout. C'est à gauche, au nord.", answer: "secr", en: "Left along the central path to the end. It's on the left, to the north." },
            { say: "Vous tournez à droite dans l'allée centrale, jusqu'au bout. C'est à droite. On y fait du sport.", answer: "gym", en: "Right along the central path, to the end. It's on the right. You do sport there." },
            { say: "Vous tournez à gauche dans l'allée centrale, jusqu'au bout. C'est à droite. On y fabrique des objets.", answer: "faclab", en: "Left along the central path, to the end. It's on the right. You make things there." }
          ], note: "You start at the main gate (bottom), facing north." }
      ]
    },
    {
      id: "g-duree",
      title: "How long? [[depuis]], [[pendant]], [[il y a]]",
      body: [
        "[[depuis]] + a date or a length of time: the action <b>started in the past and continues now</b> (present tense): [[Notre université existe depuis 1934.]] · [[Je travaille ici depuis dix ans.]]",
        "[[pendant]] + a length of time: the action lasted a <b>limited period</b> (often finished): [[J'ai étudié l'arabe pendant deux ans.]] Also [[longtemps]]: [[J'ai habité longtemps à Montréal.]]",
        "[[il y a]] + a length of time: <b>when</b> a finished action happened (= ago): [[Le FacLab a ouvert il y a trois ans.]] And [[toujours]] for an action that continues: [[J'ai toujours aimé fabriquer des objets.]]"
      ],
      info: { type: "timeline", title: "⏳ Professor Durand's career", ends: ["passé", "aujourd'hui", "futur"], items: [
        { x: 8, fr: "Il a travaillé au Canada pendant cinq ans.", en: "He worked in Canada for five years.", pic: "🍁" },
        { x: 30, fr: "Il travaille ici depuis dix ans.", en: "He has worked here for ten years.", pic: "🏛️" },
        { x: 44, fr: "Le FacLab a ouvert il y a trois ans.", en: "The FacLab opened three years ago.", pic: "🛠️" },
        { x: 60, fr: "Il a toujours aimé fabriquer des objets.", en: "He has always loved making things.", pic: "❤️" },
        { x: 86, fr: "Dans deux ans, il va prendre sa retraite.", en: "In two years, he'll retire.", pic: "🏖️" }
      ] },
      widget: {
        type: "sort", label: "depuis, pendant or il y a?",
        cols: [{ k: "depuis", label: "depuis (still going)", color: "#2f9c8a" }, { k: "pendant", label: "pendant (limited)", color: "#e0a526" }, { k: "ilya", label: "il y a (= ago)", color: "#9b4fb0" }],
        items: [
          { t: "J'habite à Lyon … 2020.", k: "depuis", say: "J'habite à Lyon depuis 2020." }, { t: "J'ai étudié l'italien … un an.", k: "pendant", say: "J'ai étudié l'italien pendant un an." }, { t: "J'ai eu mon bac … cinq ans.", k: "ilya", say: "J'ai eu mon bac il y a cinq ans." },
          { t: "Elle est en master … septembre.", k: "depuis", say: "Elle est en master depuis septembre." }, { t: "Nous avons travaillé … tout l'été.", k: "pendant", say: "Nous avons travaillé pendant tout l'été." }, { t: "Il est parti au Canada … deux semaines.", k: "ilya", say: "Il est parti au Canada il y a deux semaines." }
        ]
      }
    },
    {
      id: "g-projet",
      title: "Wishes and skills · your professional project",
      body: [
        "A wish: [[J'espère que je vais réussir.]] · [[J'ai envie de défendre les gens.]] · [[Je rêve d'être architecte.]] · [[Ça me plairait de travailler dehors.]] · [[Je suis motivé(e) pour passer le concours.]] · [[C'est mon projet professionnel.]]",
        "A skill: [[Je sais dessiner.]] ([[savoir]] + infinitive) · [[Je peux porter des objets lourds.]] · [[Je connais bien les fleurs.]] ([[connaître]] + noun) · [[Je suis doué(e) pour la peinture.]]"
      ],
      info: { type: "compare", title: "🧠 savoir or connaître?", cols: [
        { head: "savoir", en: "+ infinitive: a skill you have learned", color: "#2f9c8a", lines: [["Je sais dessiner.", "I can draw."], ["Tu sais nager ?", "Can you swim?"], ["Elle sait parler trois langues.", "She can speak three languages."]] },
        { head: "connaître", en: "+ noun: a person, a place, a subject", color: "#9b4fb0", lines: [["Je connais bien les plantes.", "I know plants well."], ["Tu connais Montréal ?", "Do you know Montréal?"], ["Je connais un bon avocat.", "I know a good lawyer."]] }
      ] }
    },
    {
      id: "g-relatifs",
      title: "Linking sentences: [[qui]] and [[que]]",
      body: [
        "[[qui]] and [[que]] replace a noun and join two sentences. [[qui]] is the <b>subject</b> of the next verb (it's followed by a verb): [[Je dois passer un concours. Le concours est difficile.]] → [[Je dois passer un concours qui est difficile.]]",
        "[[que]] is the <b>object</b> (it's followed by a subject + verb): [[Je fais un métier. J'aime ce métier.]] → [[Je fais un métier que j'aime.]] [[que]] becomes [[qu']] before a vowel: [[le diplôme qu'il prépare]]."
      ],
      info: { type: "pattern", title: "🔗 qui + verb · que + subject + verb", rows: [
        ["un concours", "qui", { opts: ["est difficile", "dure trois heures", "me fait peur"] }],
        ["un métier", "que", { opts: ["j'aime", "tu connais", "mon oncle fait"] }],
        ["le diplôme", "qu'", { opts: ["il prépare", "elle a obtenu"] }]
      ], note: "Quick test: is there a subject (je, tu, il, Marie…) right after? → <b>que</b>. A verb right after? → <b>qui</b>." },
      widget: {
        type: "sort", label: "qui, que or qu'? Sort the endings",
        cols: [{ k: "qui", label: "qui", color: "#2f9c8a" }, { k: "que", label: "que", color: "#9b4fb0" }, { k: "qu", label: "qu'", color: "#e0a526" }],
        items: [
          { t: "Je connais un avocat … est excellent.", k: "qui", say: "Je connais un avocat qui est excellent." }, { t: "Jeanne travaille dans un quartier … j'adore.", k: "que", say: "Jeanne travaille dans un quartier que j'adore." },
          { t: "Le diplôme … il prépare permet d'être dentiste.", k: "qu", say: "Le diplôme qu'il prépare permet d'être dentiste." }, { t: "Je prépare les dossiers … sont urgents.", k: "qui", say: "Je prépare les dossiers qui sont urgents." },
          { t: "Je dois connaître les fleurs … je plante.", k: "que", say: "Je dois connaître les fleurs que je plante." }, { t: "Les commandes … elle reçoit sont importantes.", k: "qu", say: "Les commandes qu'elle reçoit sont importantes." }
        ]
      }
    },
    {
      id: "g-intensite",
      title: "Intensity: [[un peu]], [[assez]], [[très]], [[trop]], [[beaucoup]]",
      body: [
        "Before an <b>adjective</b> or an adverb: [[un peu]], [[assez]], [[très]], [[trop]]: [[C'est très gentil !]] · [[Mon bureau est trop petit.]] · [[Je parle assez bien anglais.]]",
        "After a <b>verb</b>: [[un peu]], [[assez]], [[beaucoup]], [[trop]]: [[Tu travailles trop !]] · [[J'aime beaucoup le travail en équipe.]] · [[Tu ne dors pas assez.]]",
        "⚠️ Never <s>beaucoup</s> before an adjective (<s>beaucoup sympathique</s> → [[très sympathique]]), and never <s>très</s> after a verb (<s>j'aime très</s> → [[j'aime beaucoup]]). [[trop]] = too much (negative!), not “very”."
      ],
      info: { type: "scale", title: "📶 How much? (+ adjective)", colors: ["#e6f5d8", "#e0474f"], items: [
        { v: 8, fr: "un peu fatigué", en: "a bit tired", pic: "🙂" }, { v: 36, fr: "assez fatigué", en: "fairly tired", pic: "😐" }, { v: 64, fr: "très fatigué", en: "very tired", pic: "😩" }, { v: 94, fr: "trop fatigué", en: "too tired (to work!)", pic: "😵" }
      ], ends: ["−", "+ + +"] },
      widget: {
        type: "combo", label: "Choose the intensity · pick a word and a sentence",
        rows: [{ k: "peu", label: "un peu" }, { k: "assez", label: "assez" }, { k: "tres", label: "très / beaucoup" }, { k: "trop", label: "trop" }],
        cols: [{ k: "dir", label: "🧑‍💼 le directeur / sympathique" }, { k: "bur", label: "🪑 mon bureau / petit" }, { k: "trav", label: "💼 tu / travailler" }, { k: "reu", label: "👥 j'aime / les réunions" }],
        out: {
          "peu|dir": ["Le directeur est un peu sympathique.", "The director is a bit nice."], "assez|dir": ["Le directeur est assez sympathique.", "The director is fairly nice."], "tres|dir": ["Le directeur est très sympathique.", "The director is very nice.", "adjective → très (not beaucoup)"], "trop|dir": ["Le directeur est trop sympathique !", "The director is too nice!"],
          "peu|bur": ["Mon bureau est un peu petit.", "My office is a bit small."], "assez|bur": ["Mon bureau est assez petit.", "My office is fairly small."], "tres|bur": ["Mon bureau est très petit.", "My office is very small."], "trop|bur": ["Mon bureau est trop petit.", "My office is too small."],
          "peu|trav": ["Tu travailles un peu.", "You work a bit."], "assez|trav": ["Tu travailles assez.", "You work enough."], "tres|trav": ["Tu travailles beaucoup.", "You work a lot.", "verb → beaucoup (not très)"], "trop|trav": ["Tu travailles trop !", "You work too much!"],
          "peu|reu": ["J'aime un peu les réunions.", "I like meetings a little."], "assez|reu": ["J'aime assez les réunions.", "I quite like meetings."], "tres|reu": ["J'aime beaucoup les réunions.", "I like meetings a lot."], "trop|reu": ["Je n'aime pas beaucoup les réunions.", "I don't like meetings much.", "you don't say “j'aime trop” in standard French"]
        }
      }
    }
  ],

  expressions: [
    { fn: "Pour parler de ses études", fnEn: "your studies", icon: "🎓", items: [
      ["Je suis étudiant(e) en master 1 d'économie.", "I'm in the first year of a master's in economics.", "std", true],
      ["Je suis en troisième année de licence.", "I'm in the third year of my degree.", "std", true],
      ["Je prépare un concours.", "I'm preparing for a competitive exam.", "std"]
    ] },
    { fn: "Pour décrire une expérience positive", fnEn: "a good experience", icon: "🌟", items: [
      ["C'était une expérience géniale !", "It was a great experience!", "std", true],
      ["J'ai appris beaucoup de choses.", "I learned lots of things.", "std", true],
      ["Ça change la vie !", "It changes your life!", "fam"]
    ] },
    { fn: "Pour exprimer le but", fnEn: "purpose", icon: "🎯", items: [
      ["J'apprends l'anglais pour le travail.", "I'm learning English for work.", "std", true],
      ["Je pars au Canada pour faire un stage.", "I'm going to Canada to do an internship.", "std", true]
    ] },
    { fn: "Pour exprimer un souhait", fnEn: "wishes", icon: "🌠", items: [
      ["J'espère que je vais réussir.", "I hope I'll succeed.", "std", true],
      ["J'ai envie de défendre les gens.", "I want to defend people.", "std"],
      ["Je rêve d'être architecte.", "I dream of being an architect.", "std", true],
      ["Ça me plairait de travailler dehors.", "I'd love to work outdoors.", "std"],
      ["Je suis motivé(e) pour passer le concours.", "I'm motivated to take the exam.", "std"]
    ] },
    { fn: "Pour exprimer une capacité, une compétence", fnEn: "skills", icon: "💪", items: [
      ["Je sais dessiner.", "I can draw.", "std", true],
      ["Je peux porter des objets lourds.", "I can carry heavy objects.", "std"],
      ["Je connais (bien) les fleurs.", "I know flowers (well).", "std"],
      ["Je suis doué(e) pour la peinture.", "I'm good at painting.", "std", true]
    ] },
    { fn: "Pour un entretien d'embauche", fnEn: "job interview", icon: "🤝", items: [
      ["Parlez-moi de vous.", "Tell me about yourself. (interviewer)", "poli", true],
      ["Quelles sont vos qualités ? Et vos défauts ?", "What are your strengths? And your weaknesses?", "poli"],
      ["J'aime beaucoup le travail en équipe.", "I really like teamwork.", "std", true],
      ["Je suis très organisé(e) et sérieux / sérieuse.", "I'm very organised and reliable.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · a job interview", lanes: ["La directrice", "La candidate"], av: ["f5", "f4"], steps: [
    { s: 0, fr: "Bonjour. Asseyez-vous. Parlez-moi de vous.", en: "Hello. Take a seat. Tell me about yourself." },
    { s: 1, fr: "Je suis en master de droit et j'ai fait un stage au Canada.", en: "I'm doing a master's in law and did an internship in Canada." },
    { s: 0, fr: "Pourquoi ce poste vous intéresse ?", en: "Why does this job interest you?" },
    { s: 1, fr: "Parce que c'est un travail qui me plaît et que je veux devenir avocate.", en: "Because it's work I like and I want to become a lawyer." },
    { s: 0, fr: "Quelles sont vos qualités ?", en: "What are your strengths?" },
    { s: 1, fr: "Je suis très organisée et j'aime beaucoup le travail en équipe.", en: "I'm very organised and I really like teamwork." },
    { s: 0, fr: "Parfait. Vous pouvez commencer lundi ?", en: "Perfect. Can you start on Monday?" }
  ] },

  sounds: {
    intro: "The French [ʁ] is made at the back of the throat. And [t] / [d]: same position (tongue behind the top teeth), but [d] vibrates.",
    letters: [
      { l: "r · rr", name: "[ʁ]", tip: "A soft friction at the back of the throat, like gargling gently: [[Paris]], [[la carrière]], [[travailler]]. A final <b>r</b> is usually pronounced ([[le directeur]], [[le cours]] has a silent s but…) — except in <b>-er</b> verbs and many <b>-er</b> nouns: [[étudier]], [[le métier]].", ex: ["Paris", "la carrière", "le directeur", "je travaille"] },
      { l: "t · tt · th", name: "[t] · no vibration", tip: "Tongue behind the top teeth, no puff of air like English: [[le stage]], [[attendre]], [[le théâtre]].", ex: ["le stage", "le théâtre", "attendre", "très"] },
      { l: "d · dd", name: "[d] · vibration", tip: "Same position as [t], with vibration: [[le dossier]], [[le droit]], [[le doctorat]].", ex: ["le dossier", "le droit", "le doctorat", "dessiner"] }
    ],
    pairs: [
      { a: ["tout", "all"], b: ["doux", "soft"], note: "[t] / [d]" },
      { a: ["le thé", "tea"], b: ["le dé", "the dice"], note: "[t] / [d]" },
      { a: ["la tente", "the tent"], b: ["la dent", "the tooth"], note: "[t] / [d]" },
      { a: ["étudier", "to study"], b: ["le directeur", "the director"], note: "silent r / [ʁ]" },
      { a: ["un concours qui…", "an exam which…"], b: ["un métier que…", "a job that…"], note: "qui / que" },
      { a: ["très bien", "very well"], b: ["trop bien", "too good / brilliant (casual)"], note: "très / trop" }
    ]
  },
  classify: {
    label: "⏳ depuis, pendant ou il y a ?", q: "Listen: which time expression do you hear?",
    options: ["depuis", "pendant", "il y a"],
    items: [
      { say: "Je travaille ici depuis dix ans.", a: 0 }, { say: "J'ai étudié l'arabe pendant deux ans.", a: 1 }, { say: "Le FacLab a ouvert il y a trois ans.", a: 2 },
      { say: "L'université existe depuis 1934.", a: 0 }, { say: "On doit être formé pendant deux heures.", a: 1 }, { say: "Je suis rentrée du Canada il y a un mois.", a: 2 },
      { say: "Elle est en master depuis septembre.", a: 0 }, { say: "Il a habité à Montréal pendant un an.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Malik est en deuxième année de licence.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Avec Erasmus+, Malik doit payer l'université espagnole.", ok: false, explain: "He only pays the enrolment fees at his own university." },
    { type: "mcq", tag: "Dialogue 1", q: "Malik doit envoyer son dossier…", options: ["avant le 15 février, avec son CV", "après le 15 février", "sans CV"], answer: 0 },
    { type: "tf", tag: "Dialogue 2", s: "Ana a passé une année à Montréal.", ok: true },
    { type: "mcq", tag: "Dialogue 2", q: "Ana étudie…", options: ["le droit", "l'économie", "la biologie"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "L'université existe depuis 1934.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Le FacLab est réservé aux professeurs.", ok: false, explain: "It's open to students and local residents." },
    { type: "mcq", tag: "Dialogue 4", q: "Qui veut devenir jardinier ?", options: ["Léo", "Kim", "Malik"], answer: 0 },
    { type: "tf", tag: "Dialogue 5", s: "Ana parle très bien portugais.", ok: true },
    { type: "fill", tag: "La condition", sentence: "Si tu ___ étudiant, tu peux étudier à l'étranger.", options: ["es", "seras", "être"], answer: 0 },
    { type: "fill", tag: "La condition", sentence: "___ il pleut, on reste à la bibliothèque.", options: ["S'", "Si", "Se"], answer: 0, explain: "si + il → s'il" },
    { type: "fill", tag: "La condition", sentence: "Si vous êtes intéressé, ___ votre CV !", options: ["envoyez", "envoyer", "envoyiez"], answer: 0 },
    { type: "type", tag: "La condition", q: "Join with si: « Elle obtient sa licence. Elle peut s'inscrire en master. »", answers: ["Si elle obtient sa licence, elle peut s'inscrire en master.", "Si elle obtient sa licence elle peut s'inscrire en master."] },
    { type: "fill", tag: "Le but", sentence: "J'apprends l'anglais ___ travailler au Canada.", options: ["pour", "depuis", "parce que"], answer: 0 },
    { type: "fill", tag: "La durée", sentence: "Je travaille ici ___ dix ans.", options: ["depuis", "pendant", "il y a"], answer: 0 },
    { type: "fill", tag: "La durée", sentence: "J'ai étudié l'italien ___ deux ans, à l'université.", options: ["depuis", "pendant", "il y a"], answer: 1 },
    { type: "fill", tag: "La durée", sentence: "J'ai eu mon diplôme ___ trois ans.", options: ["il y a", "depuis", "pendant"], answer: 0 },
    { type: "fill", tag: "La durée", sentence: "J'ai ___ aimé les langues.", options: ["toujours", "longtemps", "pendant"], answer: 0 },
    { type: "fill", tag: "qui / que", sentence: "Je connais un médecin ___ travaille à l'hôpital.", options: ["qui", "que", "qu'"], answer: 0 },
    { type: "fill", tag: "qui / que", sentence: "Kim étudie un livre ___ j'ai déjà lu.", options: ["qui", "que", "qu'"], answer: 1 },
    { type: "fill", tag: "qui / que", sentence: "Le diplôme ___ elle prépare est difficile.", options: ["qui", "que", "qu'"], answer: 2 },
    { type: "fill", tag: "qui / que", sentence: "L'ordinateur ___ le service technique vient d'installer est très rapide.", options: ["qui", "que", "qu'"], answer: 1 },
    { type: "type", tag: "qui / que", q: "Join with que: « Je fais un métier. J'aime ce métier. »", answers: ["Je fais un métier que j'aime.", "Je fais un métier que j'aime"] },
    { type: "fill", tag: "Intensité", sentence: "Le directeur est ___ sympathique.", options: ["très", "beaucoup"], answer: 0 },
    { type: "fill", tag: "Intensité", sentence: "Mon bureau est ___ petit : je ne peux pas travailler !", options: ["trop", "beaucoup"], answer: 0 },
    { type: "fill", tag: "Intensité", sentence: "Tu as sommeil : tu ne dors pas ___ .", options: ["assez", "très"], answer: 0 },
    { type: "fill", tag: "Intensité", sentence: "Je n'aime pas ___ les réunions.", options: ["beaucoup", "très"], answer: 0 },
    { type: "fill", tag: "savoir / connaître", sentence: "Je ___ dessiner.", options: ["sais", "connais"], answer: 0 },
    { type: "fill", tag: "savoir / connaître", sentence: "Tu ___ Montréal ?", options: ["sais", "connais"], answer: 1 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous êtes en quelle année ?", options: ["Je suis en troisième année de licence.", "Je suis né en 2005.", "Depuis trois ans."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Quel est ton projet professionnel ?", options: ["Je rêve d'être architecte.", "Je suis très fatigué.", "C'était une expérience géniale."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Quelles sont vos qualités ?", options: ["Je suis sérieuse et très organisée.", "J'ai mal au dos.", "Je travaille trop."], answer: 0 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["la licence", "le master", "le doctorat", "le salaire"], answer: 3, explain: "le salaire is money for work; the others are degrees." },
    { type: "order", tag: "Construisez", en: "If you are interested, send your CV!", words: ["Si", "vous", "êtes", "intéressé,", "envoyez", "votre", "CV", "!"] }
  ],

  roleplays: [
    { title: "🌍 Au bureau Erasmus+", brief: "You want to spend a semester abroad. Ask the adviser about the conditions.", memo: ["Je voudrais partir…", "Je suis en… année", "Si je pars…, je dois… ?"], partner: "f2", you: "f7",
      turns: [
        { them: "Bonjour ! Je peux vous aider ?", themEn: "Hello! Can I help you?", hint: "Say you'd like to study abroad for a semester.", you: "Bonjour. Je voudrais partir étudier à l'étranger pendant un semestre.", youEn: "Hello. I'd like to study abroad for a semester." },
        { them: "Vous êtes en quelle année ?", themEn: "Which year are you in?", hint: "Second year of a degree in languages.", you: "Je suis en deuxième année de licence de langues.", youEn: "I'm in the second year of a languages degree." },
        { them: "Vous voulez partir où ?", themEn: "Where do you want to go?", hint: "Belgium, to improve your French. Ask if you need to pay.", you: "En Belgique, pour améliorer mon français. Si je pars, je dois payer l'université belge ?", youEn: "To Belgium, to improve my French. If I go, do I have to pay the Belgian university?" },
        { them: "Non, vous payez seulement l'inscription ici.", themEn: "No, you only pay enrolment here.", hint: "Ask what you must do.", you: "Super ! Qu'est-ce que je dois faire ?", youEn: "Great! What do I have to do?" }
      ] },
    { title: "💼 Mon projet professionnel", brief: "A friend asks about your career plans. Express a wish, two skills and a hope.", memo: ["Je rêve de…", "Je sais…", "Je suis doué(e) pour…", "J'espère que…"], partner: "f7", you: "m5",
      turns: [
        { them: "Tu veux faire quoi après tes études ?", themEn: "What do you want to do after your studies?", hint: "Say your dream job.", you: "Je rêve d'être journaliste.", youEn: "I dream of being a journalist." },
        { them: "Pourquoi ?", themEn: "Why?", hint: "Give two skills.", you: "Parce que je sais bien écrire et je suis doué pour les langues.", youEn: "Because I write well and I'm good at languages." },
        { them: "C'est difficile ?", themEn: "Is it difficult?", hint: "Say there's an exam which is very hard, but you hope you'll pass.", you: "Oui, il y a un concours qui est très difficile, mais j'espère que je vais réussir !", youEn: "Yes, there's an exam which is very hard, but I hope I'll pass!" }
      ] },
    { title: "🤝 L'entretien d'embauche", brief: "A job interview for a part-time job in a bookshop. Present yourself, your skills and qualities.", memo: ["mes études", "mes langues", "mes qualités", "très / assez / beaucoup"], partner: "f5", you: "f4",
      turns: [
        { them: "Bonjour. Parlez-moi de vous.", themEn: "Hello. Tell me about yourself.", hint: "Your studies and an experience.", you: "Je suis en licence de lettres et j'ai fait un stage dans une bibliothèque.", youEn: "I'm doing a literature degree and I did an internship in a library." },
        { them: "Vous parlez quelles langues ?", themEn: "Which languages do you speak?", hint: "Very well / fairly well.", you: "Je parle très bien espagnol et assez bien anglais.", youEn: "I speak Spanish very well and English fairly well." },
        { them: "Quelles sont vos qualités ?", themEn: "What are your strengths?", hint: "Two qualities, and you love books (beaucoup).", you: "Je suis curieuse et organisée, et j'aime beaucoup les livres !", youEn: "I'm curious and organised, and I love books!" },
        { them: "Et vos défauts ?", themEn: "And your weaknesses?", hint: "A little too… (un peu trop).", you: "Je suis un peu trop bavarde !", youEn: "I'm a bit too chatty!" }
      ] }
  ],

  ateliers: [
    { title: "Réaliser un quiz sur les métiers", intro: "In groups, create a quiz “Quel métier est fait pour vous ?” and test it on another group.",
      steps: [["Préparation", ["Choose five jobs.", "For each one, prepare a card: tasks, place, working hours, skills needed, qualities: [[Il faut savoir dessiner.]]"]], ["Réalisation", ["Write 6–8 multiple-choice questions based on your cards: [[Vous aimez travailler dehors ?]]", "Link each answer to a job card."]], ["Présentation", ["Swap quizzes with another group, do the quiz and discover your results!"]]],
      phrases: ["Vous savez… ?", "Vous êtes doué(e) pour… ?", "Ce métier est fait pour vous !"] },
    { title: "Réaliser un CV vidéo", tech: true, intro: "Film a 1-minute video CV for a job you'd like.",
      steps: [["Préparation", ["Choose a job ad (real or invented).", "Write your text: who you are, your studies, your experience, your skills, your qualities, why this job."]], ["Réalisation", ["One person plays the job seeker; film the CV. Add music or subtitles if you like.", "Use [[qui]] / [[que]], [[depuis]] / [[pendant]], and intensity words."]], ["Présentation", ["Show your films to the other groups, in class or on a sharing tool.", "Which candidate would you hire? Why?"]]],
      phrases: ["Je m'appelle… et je suis…", "J'ai travaillé pendant…", "Je suis très motivé(e) !"],
      model: { type: "form", style: "fiche", title: "CURRICULUM VITAE", photo: "f4", fields: [["Nom", "Ana Silva"], ["Formation", "Master 1 de droit (en cours) · Licence de droit 2025", "Je suis en master un de droit."], ["Expérience", "Stage chez des avocats, Montréal (6 mois)", "J'ai fait un stage de six mois à Montréal."], ["Langues", "portugais (très bien), français, anglais (assez bien)"], ["Compétences", "travail en équipe, organisation", "Je suis très organisée et j'aime le travail en équipe."], ["Loisirs", "la lecture, le volley-ball"]] } }
  ],
  delf: {
    skill: "Production orale", title: "The DELF A1 speaking test: three parts",
    about: "The DELF A1 oral (5–7 minutes, after 10 minutes' preparation for parts 2 and 3) has three parts: <b>1. Entretien dirigé</b> (about 1 min): the examiner asks about you (name, family, studies, tastes). <b>2. Échange d'informations</b> (about 2 min): with cards showing words (e.g. <i>travail</i>, <i>sport</i>), you ask the examiner questions. <b>3. Dialogue simulé</b> (about 2 min): a role-play, e.g. buying something with pretend money.",
    tips: ["If you don't understand, ask: [[Vous pouvez répéter, s'il vous plaît ?]]", "Use politeness formulas: [[Bonjour]], [[s'il vous plaît]], [[merci]], [[au revoir]].", "In part 2, use question words: [[Est-ce que… ?]], [[Qu'est-ce que… ?]], [[Où ?]], [[Quand ?]], [[Combien ?]]", "Link your ideas with [[et]], [[mais]], [[parce que]], [[après]]."],
    items: [
      { type: "mcq", q: "Part 1. The examiner asks: « Parlez-moi de vous. » A good start:", options: ["Je m'appelle Kim, j'ai vingt ans, je suis étudiante en architecture.", "Oui.", "Parlez-moi de vous aussi."], answer: 0 },
      { type: "mcq", q: "Part 2. Your card says « travail ». A good question to ask the examiner:", options: ["Qu'est-ce que vous faites comme travail ?", "Travail ?", "Je travaille beaucoup."], answer: 0 },
      { type: "mcq", q: "Part 2. Your card says « week-end ». A good question:", options: ["Qu'est-ce que vous faites le week-end ?", "Le week-end, c'est samedi.", "Week-end, s'il vous plaît."], answer: 0 },
      { type: "mcq", q: "You didn't understand the examiner's question. You say:", options: ["Pardon, vous pouvez répéter, s'il vous plaît ?", "Je ne sais pas.", "Silence…"], answer: 0 },
      { type: "mcq", q: "Part 3. You're buying a T-shirt. Which sentence is useful?", options: ["Bonjour, je voudrais ce tee-shirt en bleu. Il coûte combien ?", "Bonjour, je suis un tee-shirt.", "Je n'aime pas les questions."], answer: 0 },
      { type: "mcq", q: "Which word links two ideas?", options: ["parce que", "bonjour", "merci"], answer: 0 }
    ]
  },
  detente: {
    title: "Quel métier ? Devinettes",
    intro: "Read the description and guess the job.",
    items: [
      { type: "mcq", q: "Je sais dessiner, je suis doué pour les maths et j'imagine des maisons.", options: ["architecte", "jardinier", "avocat"], answer: 0 },
      { type: "mcq", q: "Je défends les gens au tribunal. J'ai étudié le droit pendant cinq ans.", options: ["avocat", "médecin", "journaliste"], answer: 0 },
      { type: "mcq", q: "Je travaille dehors, je connais bien les plantes et les fleurs.", options: ["jardinier", "pharmacien", "informaticien"], answer: 0 },
      { type: "mcq", q: "Je soigne les malades. J'ai fait des études qui sont très longues.", options: ["médecin", "coiffeur", "facteur"], answer: 0 },
      { type: "mcq", q: "Je sais écrire, je pose des questions et je travaille pour un journal.", options: ["journaliste", "boulanger", "pilote"], answer: 0 },
      { type: "mcq", q: "Je crée des programmes et des sites internet.", options: ["informaticien", "jardinier", "serveur"], answer: 0 }
    ]
  },

  cultureInfo: [
    { type: "map", title: "🏛️ Le campus · tap a building", map: U10_CAMPUS }
  ],
  culture: [
    { icon: "🏆", kind: "Oh, le cliché !", t: "« Le système éducatif français est un des meilleurs du monde. »", d: "Not according to the rankings quoted by the book: in the Times Higher Education ranking for 2015, only one French institution, the <b>École normale supérieure</b> in Paris (54th), was in the world top 100. But France has excellent research, the <i>grandes écoles</i>, and almost free public universities." },
    { icon: "🛠️", kind: "Au fait !", t: "Les fablabs", d: "<b>Fablabs</b> (<i>fabrication laboratories</i>) were born at the end of the 1990s at MIT in the USA. Today many French universities (Bordeaux, Le Havre…) and French-speaking ones (Lausanne, Laval, Rabat, Tunis…) have one, often open to the public." },
    { icon: "🌍", kind: "Francophonie", t: "L'Agence universitaire de la Francophonie", d: "The <b>AUF</b> (auf.org) is a network of universities that teach in French around the world. It offers students mobility grants and online courses (FOAD, MOOC)." },
    { icon: "🎓", kind: "Civilisation", t: "Le système LMD", d: "French higher education follows the European <b>Licence</b> (3 years) – <b>Master</b> (2 years) – <b>Doctorat</b> (3 years) system. Public university fees are low; students can live in a <i>résidence universitaire</i> and eat at the <i>RU</i> for a few euros." },
    { icon: "📄", kind: "Au fait !", t: "Le CV et la lettre de motivation", d: "To apply for a job in France you usually send a one-page <b>CV</b> and a <b>lettre de motivation</b> (cover letter). <b>CV</b> = <i>curriculum vitae</i>." },
    { icon: "🇪🇺", kind: "Civilisation", t: "Erasmus+", d: "Since 1987, millions of European students have spent a semester or a year abroad with Erasmus. In France, people talk about the “génération Erasmus”, and the film <i>L'Auberge espagnole</i> (2002) made it famous." }
  ],
  tips: [
    { icon: "🔗", t: "qui or que?", d: "Look at the word right after the gap: a verb → <b>qui</b>; a subject (je, tu, Marie…) → <b>que</b>." },
    { icon: "📶", t: "très before, beaucoup after", d: "très + adjective ([[très gentil]]), verb + beaucoup ([[j'aime beaucoup]]). And trop is always “too much”." },
    { icon: "⏳", t: "depuis = still true", d: "If it's still going on, use depuis with the present: [[J'habite ici depuis 2020.]] English says “I have lived”, French says “I live”." }
  ],
  mistakes: [
    ["Si il pleut…", "S'il pleut…", "si + il = s'il"],
    ["J'habite ici pendant 2020.", "J'habite ici depuis 2020.", "depuis + a date"],
    ["Je travaille ici depuis dix ans passés.", "J'ai travaillé ici pendant dix ans. / Je travaille ici depuis dix ans.", "pendant (finished) / depuis (ongoing)"],
    ["un concours que est difficile", "un concours qui est difficile", "qui + verb"],
    ["le métier qui j'aime", "le métier que j'aime", "que + subject"],
    ["Il est beaucoup sympathique.", "Il est très sympathique.", "très + adjective"],
    ["Je connais nager.", "Je sais nager.", "savoir + infinitive"],
    ["J'apprends l'anglais pour je travaille.", "J'apprends l'anglais pour travailler.", "pour + infinitive"]
  ]
});
