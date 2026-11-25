// Unité 7 · Chez moi (book pp. 103–116)
// Situations: emménager (état des lieux, équipement) · s'informer sur un logement · décrire un salon · le règlement de l'immeuble · un problème domestique
// Grammar: pronoms COD (le, la, l', les) · prépositions de lieu (2) · obligation et interdiction (1) · le pronom y
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U07_FLAT = {
  rooms: [
    { x: 10, y: 10, w: 220, h: 140, name: "le salon", m2: 22, c: "#fff8ec" },
    { x: 230, y: 10, w: 160, h: 100, name: "la cuisine", m2: 9, c: "#eef7ea" },
    { x: 230, y: 110, w: 160, h: 140, name: "la chambre", m2: 12, c: "#eef1fb" },
    { x: 10, y: 150, w: 110, h: 100, name: "la salle de bains", c: "#e8f5fb" },
    { x: 120, y: 150, w: 110, h: 100, name: "l'entrée", c: "#f7f2ea" }
  ],
  doors: [[150, 246, 40, 8], [226, 60, 8, 30], [226, 175, 8, 30], [116, 185, 8, 30], [150, 146, 40, 8]],
  windows: [[6, 50, 8, 50], [270, 6, 60, 8], [386, 150, 8, 60]],
  items: [
    { id: "tele", x: 120, y: 34, pic: "📺", name: "la télé" },
    { id: "table", x: 120, y: 76, pic: "🟫", name: "la table basse" },
    { id: "canape", x: 120, y: 118, pic: "🛋️", name: "le canapé" },
    { id: "plante", x: 58, y: 118, pic: "🪴", name: "la plante" },
    { id: "lampe", x: 182, y: 118, pic: "💡", name: "la lampe" },
    { id: "biblio", x: 46, y: 52, pic: "📚", name: "la bibliothèque" },
    { id: "frigo", x: 254, y: 44, pic: "🧊", name: "le frigo" },
    { id: "cuisiniere", x: 306, y: 74, pic: "🍳", name: "la cuisinière" },
    { id: "lavev", x: 358, y: 44, pic: "🍽️", name: "le lave-vaisselle" },
    { id: "lit", x: 318, y: 180, pic: "🛏️", name: "le lit" },
    { id: "tablenuit", x: 262, y: 160, pic: "🕯️", name: "la table de nuit" },
    { id: "armoire", x: 362, y: 228, pic: "🚪", name: "l'armoire" },
    { id: "douche", x: 42, y: 190, pic: "🚿", name: "la douche" },
    { id: "cles", x: 176, y: 196, pic: "🔑", name: "les clés" }
  ]
};
LESSONS.push({
  id: "u07", rubrique: 4, num: 7,
  title: "At home",
  titleFr: "Chez moi",
  pages: "Book pp. 103–116",
  opener: { fr: "Nouvel appartement, nouvelle vie !", en: "New flat, new life!" },
  hero: { scene: "appartement", staff: "Le propriétaire", people: { "Le propriétaire": "m4", "Nicolas": "m5", "Céline": "f1" } },
  situations: [
    ["📋", "Nouvel appartement, nouvelle vie !", "the check-in inventory: [[Le lave-vaisselle ? Je l'ai changé.]]"],
    ["🏠", "Je cherche un logement", "asking about a flat: [[Il y a combien de pièces ?]] [[Il est meublé ?]]"],
    ["🛋️", "Mon salon", "where things are: [[Entre le canapé et la télé, il y a une table basse.]]"],
    ["🚭", "C'est interdit ?", "the building rules: [[Il est interdit de fumer.]] [[Merci de fermer la porte.]]"],
    ["🔧", "Problèmes à la maison", "a leak, a broken lock: [[Il y a une fuite d'eau !]] [[J'y vais !]]"]
  ],
  goals: [
    "Understand a simple check-in inventory and describe a flat: [[un T2 de 45 m² au troisième étage]]",
    "Ask about accommodation: [[Quelle est la superficie ?]] · [[Il y a un ascenseur ?]]",
    "Name rooms, furniture and appliances",
    "Avoid repeating a noun with [[le]], [[la]], [[l']], [[les]]: [[Cet appartement ? Je l'adore !]]",
    "Say where things are: [[sur]], [[sous]], [[devant]], [[derrière]], [[entre]], [[à côté de]], [[en face de]]",
    "Understand and write rules: [[Défense de…]], [[Interdiction de…]], [[Merci de…]], [[Ne pas…]]",
    "Apologise in a note: [[Veuillez nous excuser pour le bruit.]]",
    "Explain a household problem and use [[y]] for a place: [[J'y vais !]]"
  ],
  glance: [
    ["🗣️", "Communication", "moving in · asking about accommodation · describing a room · building rules · household problems"],
    ["🧩", "Grammaire", "direct object pronouns · prepositions of place · obligation and prohibition · the pronoun y"],
    ["🗂️", "Vocabulaire", "housing, rooms, furniture, appliances · the building · repairs and tradespeople"],
    ["🔊", "Phonétique", "[f] / [v] and [b] / [v]"],
    ["⭐", "The phrase to learn first", "[[Il y a un problème : ça ne marche pas !]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "Moving in: the inventory", titleFr: "Nouvel appartement · L'état des lieux",
      note: "Nicolas and Céline are renting their first flat. With the owner, they check every room. Listen for the object pronouns [[le]], [[la]], [[l']], [[les]].",
      scene: "appartement", staff: "Le propriétaire", people: { "Le propriétaire": "m4", "Nicolas": "m5", "Céline": "f1" },
      lines: [
        ["Le propriétaire", "Bonjour ! Alors, on fait l'état des lieux. Voici le salon : vingt-deux mètres carrés, avec deux grandes fenêtres.", "Hello! So, let's do the inventory. Here's the living room: twenty-two square metres, with two big windows."],
        ["Céline", "Il est très lumineux ! Je l'adore !", "It's very bright! I love it!"],
        ["Nicolas", "Et la cuisine est équipée ?", "And is the kitchen equipped?"],
        ["Le propriétaire", "Oui : un frigo, une cuisinière et un lave-vaisselle. Le lave-vaisselle est neuf : je l'ai changé le mois dernier.", "Yes: a fridge, a cooker and a dishwasher. The dishwasher is new: I changed it last month."],
        ["Céline", "Et la salle de bains ? On peut la voir ?", "And the bathroom? Can we see it?"],
        ["Le propriétaire", "Bien sûr. Elle est petite, mais il y a une douche et une machine à laver.", "Of course. It's small, but there's a shower and a washing machine."],
        ["Nicolas", "Hmm… le robinet est un peu vieux.", "Hmm… the tap is a bit old."],
        ["Le propriétaire", "C'est vrai, je vais le changer. Je le note sur l'état des lieux. Voilà, vous signez ici, et voici les clés !", "That's true, I'll change it. I'll note it on the inventory. There, sign here, and here are the keys!"],
        ["Céline", "Merci ! Les clés, je les prends !", "Thanks! The keys, I'll take them!"]
      ],
      glossary: [["l'état des lieux", "check-in / check-out inventory"], ["vingt-deux mètres carrés", "22 m²"], ["équipé(e)", "equipped, fitted"], ["Je l'adore.", "I love it"]]
    },
    {
      id: "d2", n: 2, title: "Looking for a flat", titleFr: "À l'agence · Je cherche un appartement",
      note: "Inès phones an estate agency about an advert. Listen to the questions you ask about accommodation.",
      scene: "bureau", staff: "L'agent", people: { "L'agent": "m2", "Inès": "f2" }, phone: ["Inès"],
      lines: [
        ["L'agent", "Agence Bon Logis, bonjour !", "Bon Logis agency, hello!"],
        ["Inès", "Bonjour, monsieur. J'appelle pour l'annonce du studio, rue Jules-Ferry.", "Hello. I'm calling about the advert for the studio flat, rue Jules-Ferry."],
        ["L'agent", "Oui. C'est un joli studio, très calme.", "Yes. It's a nice studio, very quiet."],
        ["Inès", "Quelle est la superficie ?", "What's the floor area?"],
        ["L'agent", "Vingt-huit mètres carrés, avec une cuisine américaine et une salle d'eau.", "Twenty-eight square metres, with an open kitchen and a shower room."],
        ["Inès", "Il est meublé ?", "Is it furnished?"],
        ["L'agent", "Oui : il y a un lit, un bureau, une table et deux chaises.", "Yes: there's a bed, a desk, a table and two chairs."],
        ["Inès", "Et il est à quel étage ? Il y a un ascenseur ?", "And what floor is it on? Is there a lift?"],
        ["L'agent", "Au cinquième étage, sans ascenseur… Mais la vue est magnifique !", "On the fifth floor, without a lift… But the view is magnificent!"],
        ["Inès", "Cinq étages à pied ! Bon, je peux le visiter quand ?", "Five floors on foot! Well, when can I visit it?"]
      ],
      glossary: [["la superficie", "floor area"], ["meublé(e)", "furnished"], ["l'étage", "the floor, the storey"], ["l'ascenseur", "the lift"]]
    },
    {
      id: "d3", n: 3, title: "Decorating the living room", titleFr: "Mon salon · Qu'est-ce qu'il y a dans ton salon ?",
      note: "Céline describes her new living room to her friend Djamel on a video call. Follow on the floor plan in the <b>Grammaire</b> tab.",
      scene: "maison", people: { "Céline": "f1", "Djamel": "m7" }, phone: ["Céline", "Djamel"],
      lines: [
        ["Djamel", "Alors, ce salon ? Montre-le-moi !", "So, this living room? Show me!"],
        ["Céline", "Regarde : le canapé est ici, en face de la télé. Entre le canapé et la télé, il y a une table basse.", "Look: the sofa is here, opposite the TV. Between the sofa and the TV there's a coffee table."],
        ["Djamel", "Et la plante, à gauche du canapé, elle est jolie !", "And the plant, to the left of the sofa, it's pretty!"],
        ["Céline", "Oui, et à droite du canapé, il y a une lampe. La bibliothèque est à côté de la fenêtre.", "Yes, and to the right of the sofa there's a lamp. The bookcase is next to the window."],
        ["Djamel", "Et tes livres, ils sont où ?", "And your books, where are they?"],
        ["Céline", "Sur les étagères de la bibliothèque, bien sûr ! Et mes DVD sont sous la télé.", "On the bookcase shelves, of course! And my DVDs are under the TV."],
        ["Djamel", "Et ton chat ?", "And your cat?"],
        ["Céline", "Mon chat ? Il est derrière le canapé… Il a peur de la caméra !", "My cat? It's behind the sofa… It's scared of the camera!"]
      ],
      glossary: [["en face de", "opposite"], ["entre… et…", "between… and…"], ["à côté de", "next to"], ["les étagères", "the shelves"]]
    },
    {
      id: "d4", n: 4, title: "The building rules", titleFr: "Le règlement de l'immeuble · C'est interdit ?",
      note: "The caretaker welcomes Nicolas to the building and explains the rules. Listen for the ways of forbidding and asking: [[Il est interdit de…]], [[Merci de…]], [[Défense de…]].",
      scene: "rue", people: { "La gardienne": "f6", "Nicolas": "m5" },
      lines: [
        ["La gardienne", "Bienvenue dans l'immeuble ! Je suis la gardienne, madame Lopez. Voici le règlement intérieur.", "Welcome to the building! I'm the caretaker, Mrs Lopez. Here are the house rules."],
        ["Nicolas", "Merci, madame. Il y a beaucoup de règles ?", "Thank you. Are there many rules?"],
        ["La gardienne", "Non, quelques-unes. Il est interdit de fumer dans les parties communes : l'entrée, l'escalier, l'ascenseur.", "No, just a few. Smoking is forbidden in the common areas: the entrance, the stairs, the lift."],
        ["Nicolas", "Pas de problème, je ne fume pas.", "No problem, I don't smoke."],
        ["La gardienne", "Merci de mettre vos poubelles dans le local à poubelles, au rez-de-chaussée. Et défense de laisser les vélos dans l'entrée !", "Please put your bins in the bin room, on the ground floor. And no leaving bikes in the entrance!"],
        ["Nicolas", "Et le bruit ? Samedi, c'est la pendaison de crémaillère…", "And noise? On Saturday it's our housewarming party…"],
        ["La gardienne", "Après vingt-deux heures, il faut respecter le silence. Mettez un petit mot dans l'entrée pour prévenir les voisins.", "After 10 p.m. you must keep quiet. Put a little note in the entrance to warn the neighbours."],
        ["Nicolas", "D'accord : « Veuillez nous excuser pour le bruit. Merci de votre compréhension ! »", "OK: “Sorry in advance for the noise. Thank you for your understanding!”"]
      ],
      glossary: [["le règlement intérieur", "the house rules"], ["les parties communes", "the common areas"], ["le rez-de-chaussée", "the ground floor"], ["la pendaison de crémaillère", "housewarming party"]]
    },
    {
      id: "d5", n: 5, title: "A leak!", titleFr: "Problèmes à la maison · Il y a une fuite d'eau !",
      note: "Water on the bathroom floor! Nicolas calls a plumber. Listen to how he explains the problem, and to [[y]] (= there).",
      scene: "maison", people: { "Nicolas": "m5", "Le plombier": "m3" }, hold: { "Le plombier": "🔧" },
      lines: [
        ["Nicolas", "Bonjour, monsieur ! Merci d'être venu si vite. Il y a une fuite d'eau !", "Hello! Thanks for coming so quickly. There's a leak!"],
        ["Le plombier", "Elle est où, cette fuite ? Dans la cuisine ?", "Where's this leak? In the kitchen?"],
        ["Nicolas", "Non, dans la salle de bains. Le robinet de la douche fuit, et il y a de l'eau partout.", "No, in the bathroom. The shower tap is leaking, and there's water everywhere."],
        ["Le plombier", "D'accord, j'y vais. … Ah oui, le robinet est cassé. Je vais le changer.", "OK, I'll go and look. … Oh yes, the tap is broken. I'll change it."],
        ["Nicolas", "Et la lumière ne marche pas non plus dans la salle de bains. J'y prends mes douches dans le noir !", "And the light doesn't work in the bathroom either. I take my showers there in the dark!"],
        ["Le plombier", "Ça, ce n'est pas mon travail : il faut appeler un électricien.", "That's not my job: you need to call an electrician."],
        ["Nicolas", "Et la porte d'entrée ? C'est difficile d'ouvrir la serrure.", "And the front door? It's hard to open the lock."],
        ["Le plombier", "Alors il faut un serrurier ! Moi, je suis plombier, pas magicien !", "Then you need a locksmith! I'm a plumber, not a magician!"]
      ],
      glossary: [["une fuite d'eau", "a leak"], ["Ça fuit.", "it's leaking"], ["C'est cassé.", "it's broken"], ["J'y vais.", "I'm going (there)"]]
    }
  ],

  vocab: [
    { t: "le logement", en: "accommodation, housing", pic: "🏠", cat: "Le logement", g: "m" },
    { t: "l'appartement", en: "the flat", pic: "🏢", cat: "Le logement", g: "m" },
    { t: "la maison", en: "the house", pic: "🏡", cat: "Le logement", g: "f" },
    { t: "le studio", en: "the studio flat", pic: "🛏️", cat: "Le logement", g: "m" },
    { t: "la pièce", en: "the room", pic: "🚪", cat: "Le logement", g: "f", note: "[[un T2]] = 2 main rooms" },
    { t: "la superficie", en: "floor area (in m²)", pic: "📐", cat: "Le logement", g: "f" },
    { t: "l'étage", en: "the floor, storey", pic: "🔢", cat: "Le logement", g: "m" },
    { t: "le / la propriétaire", en: "the owner, landlord", pic: "🔑", cat: "Le logement" },
    { t: "le / la locataire", en: "the tenant", pic: "🧑", cat: "Le logement" },
    { t: "louer", en: "to rent", pic: "📝", cat: "Le logement" },
    { t: "meublé(e)", en: "furnished", pic: "🛋️", cat: "Le logement" },
    { t: "la fenêtre", en: "the window", pic: "🪟", cat: "Le logement", g: "f" },
    { t: "le mur", en: "the wall", pic: "🧱", cat: "Le logement", g: "m" },
    { t: "la cheminée", en: "the fireplace", pic: "🔥", cat: "Le logement", g: "f" },
    { t: "le salon", en: "the living room", pic: "🛋️", cat: "Les pièces", g: "m" },
    { t: "la cuisine", en: "the kitchen", pic: "🍳", cat: "Les pièces", g: "f" },
    { t: "la chambre", en: "the bedroom", pic: "🛏️", cat: "Les pièces", g: "f" },
    { t: "la salle de bains", en: "the bathroom", pic: "🛁", cat: "Les pièces", g: "f" },
    { t: "le bureau", en: "the study; the desk", pic: "🖥️", cat: "Les pièces", g: "m" },
    { t: "les toilettes", en: "the toilet", pic: "🚽", cat: "Les pièces", g: "pl" },
    { t: "le canapé", en: "the sofa", pic: "🛋️", cat: "Les meubles", g: "m" },
    { t: "le fauteuil", en: "the armchair", pic: "🪑", cat: "Les meubles", g: "m", pr: "fo-TUH-y" },
    { t: "la table basse", en: "the coffee table", pic: "🟫", cat: "Les meubles", g: "f" },
    { t: "la chaise", en: "the chair", pic: "🪑", cat: "Les meubles", g: "f" },
    { t: "le lit", en: "the bed", pic: "🛏️", cat: "Les meubles", g: "m" },
    { t: "l'armoire", en: "the wardrobe", pic: "🚪", cat: "Les meubles", g: "f" },
    { t: "la bibliothèque", en: "the bookcase; the library", pic: "📚", cat: "Les meubles", g: "f" },
    { t: "l'étagère", en: "the shelf", pic: "🗄️", cat: "Les meubles", g: "f" },
    { t: "la lampe", en: "the lamp", pic: "💡", cat: "Les meubles", g: "f" },
    { t: "le réfrigérateur, le frigo", en: "the fridge", pic: "🧊", cat: "L'électroménager", g: "m" },
    { t: "la cuisinière", en: "the cooker", pic: "🍳", cat: "L'électroménager", g: "f" },
    { t: "le four (à micro-ondes)", en: "the (microwave) oven", pic: "📟", cat: "L'électroménager", g: "m" },
    { t: "le lave-vaisselle", en: "the dishwasher", pic: "🍽️", cat: "L'électroménager", g: "m" },
    { t: "la machine à laver", en: "the washing machine", pic: "🧺", cat: "L'électroménager", g: "f" },
    { t: "l'immeuble", en: "the block of flats", pic: "🏢", cat: "L'immeuble", g: "m" },
    { t: "le rez-de-chaussée", en: "the ground floor", pic: "0️⃣", cat: "L'immeuble", g: "m" },
    { t: "l'escalier", en: "the stairs", pic: "🪜", cat: "L'immeuble", g: "m" },
    { t: "l'ascenseur", en: "the lift", pic: "🛗", cat: "L'immeuble", g: "m" },
    { t: "le couloir", en: "the corridor", pic: "🚶", cat: "L'immeuble", g: "m" },
    { t: "la porte d'entrée", en: "the front door", pic: "🚪", cat: "L'immeuble", g: "f" },
    { t: "le local à poubelles", en: "the bin room", pic: "🗑️", cat: "L'immeuble", g: "m" },
    { t: "le gardien, la gardienne", en: "the caretaker", pic: "🧹", cat: "L'immeuble" },
    { t: "le voisin, la voisine", en: "the neighbour", pic: "🏘️", cat: "L'immeuble" },
    { t: "la fuite d'eau", en: "the water leak", pic: "💧", cat: "Les réparations", g: "f" },
    { t: "le robinet", en: "the tap", pic: "🚰", cat: "Les réparations", g: "m" },
    { t: "la serrure", en: "the lock", pic: "🔒", cat: "Les réparations", g: "f" },
    { t: "la clé", en: "the key", pic: "🔑", cat: "Les réparations", g: "f" },
    { t: "la lumière", en: "the light", pic: "💡", cat: "Les réparations", g: "f" },
    { t: "cassé(e)", en: "broken", pic: "💥", cat: "Les réparations" },
    { t: "Ça ne marche pas.", en: "It doesn't work.", pic: "🚫", cat: "Les réparations" },
    { t: "le plombier", en: "the plumber", pic: "🔧", cat: "Les professionnels", g: "m" },
    { t: "l'électricien", en: "the electrician", pic: "⚡", cat: "Les professionnels", g: "m" },
    { t: "le serrurier", en: "the locksmith", pic: "🗝️", cat: "Les professionnels", g: "m" }
  ],

  grammar: [
    {
      id: "g-logement",
      title: "Asking about accommodation",
      body: [
        "To find out about a flat or a house: [[Quelle est la superficie ?]] · [[Il y a combien de pièces ?]] · [[Il est meublé ?]] · [[Il est à quel étage ?]] · [[Il y a un ascenseur ?]] · [[C'est combien, le loyer ?]]",
        "French ads count the main rooms (not the kitchen and bathroom): a <b>T2</b> or <b>F2</b> = a living room + one bedroom. A <b>studio</b> = one room."
      ],
      info: { type: "card", style: "label", caption: "📰 A small ad · tap a line", title: "À LOUER · T2 · 45 m²", sub: "Lyon 7e · rue Jules-Ferry", rows: [["Pièces", "salon + 1 chambre", "un salon et une chambre"], ["Étage", "3e avec ascenseur", "au troisième étage, avec ascenseur"], ["Cuisine", "équipée", "une cuisine équipée"], ["Meublé", "non", "Il n'est pas meublé."], ["Loyer", "650 € / mois + charges", "six cent cinquante euros par mois, plus les charges"]], foot: "Agence Bon Logis · 04 72 10 22 33" }
    },
    {
      id: "g-cod",
      title: "Object pronouns: [[le]], [[la]], [[l']], [[les]] · [[Je l'adore !]]",
      body: [
        "A direct object pronoun replaces a noun that comes straight after the verb (no preposition), so you don't repeat it: [[Tu vois la salle de bains ?]] → [[Tu la vois ?]] · [[Je prends les clés.]] → [[Je les prends.]]",
        "[[le]] (masculine), [[la]] (feminine), [[les]] (plural); [[le]] and [[la]] become [[l']] before a vowel or silent h: [[Cet appartement, je l'adore !]]",
        "The pronoun goes <b>before the verb</b>: [[Je le change.]] · in the negative [[Je ne le change pas.]] · with an infinitive, before the infinitive: [[Je vais le changer.]] · [[On peut la voir ?]]"
      ],
      info: [
        { type: "gender", title: "🔁 Replace the object", cols: [
          { g: "m", badge: "le · l'", head: "masculin", items: ["le robinet → je le change", "le salon → je l'adore", "le lave-vaisselle → nous l'utilisons"] },
          { g: "f", badge: "la · l'", head: "féminin", items: ["la maison → ils la visitent", "la salle de bains → on peut la voir ?", "l'annonce → je l'ai lue"] },
          { g: "pl", badge: "les", head: "pluriel", items: ["les clés → je les prends", "les voisins → je les vois", "les meubles → on va les changer"] }
        ] },
        { type: "pattern", title: "📍 Where does the pronoun go?", rows: [
          ["Je", { opts: ["le", "la", "l'", "les"] }, "vois", "."],
          ["Je", "ne", { opts: ["le", "la", "les"] }, "vois", "pas", "."],
          ["Je", "vais", { opts: ["le", "la", "les"] }, "changer", "."]
        ], note: "Always right before the verb it belongs to (the infinitive if there is one)." }
      ],
      widget: {
        type: "combo", label: "Replace the noun · pick a sentence and a form",
        rows: [{ k: "aff", label: "✅ present" }, { k: "neg", label: "❌ negative" }, { k: "inf", label: "➡️ aller + infinitive" }],
        cols: [{ k: "rob", label: "🚰 changer le robinet" }, { k: "sdb", label: "🛁 voir la salle de bains" }, { k: "cles", label: "🔑 prendre les clés" }, { k: "app", label: "🏢 visiter l'appartement" }],
        out: {
          "aff|rob": ["Je le change.", "I'm changing it.", "le robinet → le"], "neg|rob": ["Je ne le change pas.", "I'm not changing it."], "inf|rob": ["Je vais le changer.", "I'm going to change it.", "before the infinitive"],
          "aff|sdb": ["Je la vois.", "I can see it.", "la salle de bains → la"], "neg|sdb": ["Je ne la vois pas.", "I can't see it."], "inf|sdb": ["Je vais la voir.", "I'm going to see it."],
          "aff|cles": ["Je les prends.", "I'm taking them.", "les clés → les"], "neg|cles": ["Je ne les prends pas.", "I'm not taking them."], "inf|cles": ["Je vais les prendre.", "I'm going to take them."],
          "aff|app": ["Je le visite.", "I'm visiting it.", "l'appartement (m) → le, and l' before a vowel"], "neg|app": ["Je ne le visite pas.", "I'm not visiting it."], "inf|app": ["Je vais le visiter.", "I'm going to visit it."]
        }
      }
    },
    {
      id: "g-lieu",
      title: "Where is it? [[sur]], [[sous]], [[entre]], [[à côté de]], [[en face de]]…",
      body: [
        "Simple prepositions: [[dans]] (in), [[sur]] (on), [[sous]] (under), [[devant]] (in front of), [[derrière]] (behind), [[entre… et…]] (between).",
        "With <b>de</b>: [[à côté de]] (next to), [[en face de]] (opposite), [[à gauche de]], [[à droite de]], [[près de]], [[loin de]]. <b>de</b> fuses with le / les: [[à côté du canapé]], [[en face des étagères]], but [[à côté de la fenêtre]], [[à droite de l'armoire]].",
        "On the floor plan below, tap the furniture to hear it, then play <b>🎧 Qu'est-ce que c'est ?</b>: listen to where something is and tap it."
      ],
      info: [
        { type: "minis", title: "📦 The little red ball…", items: [
          { mini: "dans", fr: "dans la boîte", en: "in" }, { mini: "sur", fr: "sur la table", en: "on" }, { mini: "sous", fr: "sous la table", en: "under" },
          { mini: "devant", fr: "devant l'armoire", en: "in front of" }, { mini: "derriere", fr: "derrière l'armoire", en: "behind" }, { mini: "acote", fr: "à côté de l'armoire", en: "next to" }
        ] },
        { type: "floorplan", title: "🏠 Le plan de l'appartement de Céline et Nicolas", plan: U07_FLAT,
          quiz: [
            { say: "C'est entre le canapé et la télé.", answer: "table", en: "It's between the sofa and the TV." },
            { say: "C'est à gauche du canapé.", answer: "plante", en: "It's to the left of the sofa." },
            { say: "C'est à droite du canapé.", answer: "lampe", en: "It's to the right of the sofa." },
            { say: "C'est en face du canapé, derrière la table basse.", answer: "tele", en: "It's opposite the sofa, behind the coffee table." },
            { say: "C'est dans la cuisine, entre le frigo et le lave-vaisselle.", answer: "cuisiniere", en: "It's in the kitchen, between the fridge and the dishwasher." },
            { say: "C'est dans la chambre, à côté du lit.", answer: "tablenuit", en: "It's in the bedroom, next to the bed." },
            { say: "On y dort !", answer: "lit", en: "You sleep in it!" },
            { say: "On y range les vêtements. C'est dans la chambre.", answer: "armoire", en: "You put your clothes in it. It's in the bedroom." },
            { say: "Elles sont dans l'entrée, près de la porte.", answer: "cles", en: "They're in the entrance, near the door." },
            { say: "C'est dans le salon, à côté de la fenêtre.", answer: "biblio", en: "It's in the living room, next to the window." }
          ], note: "The windows are blue. “On y dort” = you sleep there (the pronoun y, see below)." }
      ],
      widget: {
        type: "sort", label: "du, de la, de l' or des? Sort the places",
        cols: [{ k: "du", label: "à côté du", color: "var(--m)" }, { k: "dela", label: "à côté de la", color: "var(--f)" }, { k: "del", label: "à côté de l'", color: "#e0a526" }, { k: "des", label: "à côté des", color: "var(--pl)" }],
        items: [{ t: "canapé", k: "du", pic: "🛋️", say: "à côté du canapé" }, { t: "fenêtre", k: "dela", pic: "🪟", say: "à côté de la fenêtre" }, { t: "armoire", k: "del", pic: "🚪", say: "à côté de l'armoire" }, { t: "étagères", k: "des", pic: "🗄️", say: "à côté des étagères" }, { t: "lit", k: "du", pic: "🛏️", say: "à côté du lit" }, { t: "porte", k: "dela", pic: "🚪", say: "à côté de la porte" }, { t: "escalier", k: "del", pic: "🪜", say: "à côté de l'escalier" }, { t: "toilettes", k: "des", pic: "🚽", say: "à côté des toilettes" }]
      }
    },
    {
      id: "g-regles",
      title: "Rules: obligation and prohibition",
      body: [
        "Notices often use the <b>infinitive</b>. To forbid: [[Défense de fumer.]] · [[Interdiction de laisser la porte ouverte.]] · [[Il est interdit de courir.]] · [[Ne pas bloquer les portes.]]",
        "To ask or oblige, politely or firmly: [[Merci de fermer la porte.]] · [[Prière de respecter le silence.]] · or the <b>imperative</b>: [[Fermez la porte !]] [[Ne fumez pas !]] · and [[Il faut]] + infinitive: [[Il faut respecter le silence après 22 heures.]]",
        "To apologise in a note: [[Veuillez nous excuser pour le bruit.]] · [[Veuillez m'excuser par avance.]] · [[Merci de votre compréhension.]]"
      ],
      info: [
        { type: "signs", title: "🚧 Le règlement de l'immeuble · tap a sign", items: [
          { type: "no", pic: "🚬", fr: "Il est interdit de fumer dans les parties communes.", en: "No smoking in the common areas." },
          { type: "no", pic: "🚲", fr: "Défense de laisser les vélos dans l'entrée.", en: "No leaving bikes in the entrance." },
          { type: "no", pic: "🚪", fr: "Interdiction de laisser la porte d'entrée ouverte.", en: "Do not leave the front door open." },
          { type: "no", pic: "🛗", fr: "Ne pas bloquer les portes de l'ascenseur.", en: "Do not block the lift doors." },
          { type: "yes", pic: "🗑️", fr: "Merci de mettre vos poubelles dans le local.", en: "Please put your bins in the bin room." },
          { type: "yes", pic: "🤫", fr: "Prière de respecter le silence après 22 heures.", en: "Please keep quiet after 10 p.m." }
        ], note: "Red = <b>interdiction</b> (Défense de… · Interdiction de… · Il est interdit de… · Ne pas…). Blue = <b>obligation / polite request</b> (Merci de… · Prière de… · imperative · Il faut…)." },
        { type: "sms", title: "📝 Nicolas's note in the entrance", with: "Hall de l'immeuble", msgs: [{ t: "Chers voisins, samedi soir, nous faisons notre pendaison de crémaillère (appartement 32). Veuillez nous excuser par avance pour le bruit ! Merci de votre compréhension. Nicolas et Céline", en: "Dear neighbours, on Saturday evening we're having our housewarming (flat 32). Sorry in advance for the noise! Thank you for your understanding." }] }
      ],
      widget: {
        type: "combo", label: "Make a notice · pick a style and an action",
        rows: [{ k: "def", label: "🚫 Défense de…" }, { k: "interdit", label: "🚫 Il est interdit de…" }, { k: "nepas", label: "🚫 Ne pas…" }, { k: "merci", label: "🙏 Merci de…" }, { k: "imp", label: "📣 impératif" }],
        cols: [{ k: "fumer", label: "🚬 fumer" }, { k: "porte", label: "🚪 laisser la porte ouverte" }, { k: "silence", label: "🤫 respecter le silence" }, { k: "courir", label: "🏃 courir dans les couloirs" }],
        out: {
          "def|fumer": ["Défense de fumer.", "No smoking."], "interdit|fumer": ["Il est interdit de fumer.", "Smoking is forbidden."], "nepas|fumer": ["Ne pas fumer.", "Do not smoke."], "merci|fumer": ["Merci de ne pas fumer.", "Please do not smoke.", "merci de + ne pas + infinitive"], "imp|fumer": ["Ne fumez pas !", "Don't smoke!"],
          "def|porte": ["Défense de laisser la porte ouverte.", "Do not leave the door open."], "interdit|porte": ["Il est interdit de laisser la porte ouverte.", "Leaving the door open is forbidden."], "nepas|porte": ["Ne pas laisser la porte ouverte.", "Do not leave the door open."], "merci|porte": ["Merci de fermer la porte.", "Please close the door."], "imp|porte": ["Fermez la porte !", "Close the door!"],
          "def|silence": ["Défense de faire du bruit.", "No noise."], "interdit|silence": ["Il est interdit de faire du bruit après 22 heures.", "Noise is forbidden after 10 p.m."], "nepas|silence": ["Ne pas faire de bruit.", "Do not make noise."], "merci|silence": ["Merci de respecter le silence.", "Please keep quiet."], "imp|silence": ["Respectez le silence !", "Keep quiet!"],
          "def|courir": ["Défense de courir dans les couloirs.", "No running in the corridors."], "interdit|courir": ["Il est interdit de courir dans les couloirs.", "Running in the corridors is forbidden."], "nepas|courir": ["Ne pas courir dans les couloirs.", "Do not run in the corridors."], "merci|courir": ["Merci de marcher dans les couloirs.", "Please walk in the corridors."], "imp|courir": ["Ne courez pas dans les couloirs !", "Don't run in the corridors!"]
        }
      }
    },
    {
      id: "g-y",
      title: "The pronoun [[y]]: [[J'y vais !]]",
      body: [
        "[[y]] replaces a <b>place</b> already mentioned (introduced by à, dans, chez, sur, en…): [[C'est dans la cuisine. J'y passe du temps.]] · [[Je vais chez moi chercher des outils : j'y vais !]]",
        "Like the other pronouns, it goes <b>before the verb</b>: [[On y va !]] · [[J'y achète des meubles.]] · negative: [[Je n'y vais pas.]] · with an infinitive: [[Je vais y aller.]]",
        "Two very common expressions: [[On y va !]] (let's go!) and [[Il y a…]] (there is / are)."
      ],
      info: { type: "compare", title: "📍 Replace the place with y", cols: [
        { head: "Sans y", en: "repetition", color: "#5b6b7c", lines: ["Tu vas au magasin ? Oui, je vais au magasin.", "Tu passes du temps dans ton bureau ? Oui, je passe du temps dans mon bureau.", "Vous habitez à Lyon ? Non, nous n'habitons pas à Lyon."] },
        { head: "Avec y", en: "shorter!", color: "#c2508e", lines: [["Oui, j'y vais.", "y = au magasin"], ["Oui, j'y passe du temps.", "y = dans mon bureau"], ["Non, nous n'y habitons pas.", "n' + y + verb + pas"]] }
      ] },
      widget: {
        type: "combo", label: "Answer with y · pick a question and yes / no",
        rows: [{ k: "oui", label: "✅ oui" }, { k: "non", label: "❌ non" }],
        cols: [{ k: "mag", label: "🏬 Tu vas au magasin ?" }, { k: "bur", label: "🖥️ Tu travailles dans ton bureau ?" }, { k: "lyon", label: "🏙️ Vous habitez à Lyon ?" }, { k: "sdb", label: "🛁 Il y a une fuite dans la salle de bains ?" }],
        out: {
          "oui|mag": ["Oui, j'y vais.", "Yes, I'm going there."], "non|mag": ["Non, je n'y vais pas.", "No, I'm not going (there)."],
          "oui|bur": ["Oui, j'y travaille.", "Yes, I work there."], "non|bur": ["Non, je n'y travaille pas.", "No, I don't work there."],
          "oui|lyon": ["Oui, nous y habitons.", "Yes, we live there."], "non|lyon": ["Non, nous n'y habitons pas.", "No, we don't live there."],
          "oui|sdb": ["Oui, il y en a une ! J'y vais.", "Yes, there is one! I'm going there.", "a bonus: il y en a une"], "non|sdb": ["Non, il n'y a pas de fuite.", "No, there's no leak."]
        }
      }
    },
    {
      id: "g-probleme",
      title: "Explaining a household problem",
      body: [
        "To explain: [[Il y a une fuite d'eau.]] / [[Ça fuit.]] · [[C'est cassé.]] · [[Ça ne marche pas.]] · [[Il n'y a pas de lumière.]] · [[C'est difficile d'ouvrir la porte.]] To react: [[Pas de problème, j'arrive !]] · [[Il faut appeler un électricien.]]"
      ],
      info: { type: "compare", title: "🧰 Who do you call?", cols: [
        { head: "le plombier", en: "water", color: "#2b59c3", pic: "🔧💧", lines: [["Il y a une fuite d'eau.", "a leak"], ["Le robinet est cassé.", "the tap is broken"]] },
        { head: "l'électricien", en: "electricity", color: "#e0a526", pic: "⚡💡", lines: [["La lumière ne marche pas.", "the light doesn't work"], ["Il n'y a pas de courant.", "there's no power"]] },
        { head: "le serrurier", en: "locks and keys", color: "#5b6b7c", pic: "🗝️🔒", lines: [["La serrure est cassée.", "the lock is broken"], ["J'ai perdu mes clés !", "I've lost my keys!"]] }
      ] }
    }
  ],

  expressions: [
    { fn: "Pour s'informer sur un logement", fnEn: "asking about a flat", icon: "🏠", items: [
      ["Quelle est la superficie ?", "What's the floor area?", "std", true],
      ["Il y a combien de pièces ?", "How many rooms are there?", "std", true],
      ["Il est meublé ?", "Is it furnished?", "std", true],
      ["Il est à quel étage ?", "What floor is it on?", "std"],
      ["Il y a un ascenseur ?", "Is there a lift?", "std"]
    ] },
    { fn: "Pour situer un objet", fnEn: "where things are", icon: "📍", items: [
      ["Entre le canapé et la télé, il y a une table basse.", "Between the sofa and the TV there's a coffee table.", "std", true],
      ["La plante est à gauche du canapé.", "The plant is to the left of the sofa.", "std", true],
      ["Mes DVD sont sous la télé.", "My DVDs are under the TV.", "std"],
      ["L'aquarium est en face de la fenêtre.", "The aquarium is opposite the window.", "std"]
    ] },
    { fn: "Pour exprimer une interdiction / une obligation", fnEn: "rules", icon: "🚫", items: [
      ["Il est interdit de fumer.", "Smoking is forbidden.", "sout", true],
      ["Défense de / Interdiction de bloquer les portes.", "Do not block the doors.", "sout"],
      ["Merci de mettre vos poubelles dans le local.", "Please put your bins in the bin room.", "poli", true],
      ["Ne pas laisser de déchets par terre.", "Do not leave rubbish on the ground.", "sout"],
      ["Il faut respecter le silence.", "You must keep quiet.", "std"]
    ] },
    { fn: "Pour s'excuser dans un message", fnEn: "apologising in a note", icon: "📝", items: [
      ["Veuillez nous excuser pour le bruit.", "Please excuse the noise.", "sout", true],
      ["Veuillez m'excuser par avance.", "Apologies in advance.", "sout"],
      ["Merci de votre compréhension.", "Thank you for your understanding.", "poli", true]
    ] },
    { fn: "Pour parler d'un problème", fnEn: "household problems", icon: "🔧", items: [
      ["C'est cassé.", "It's broken.", "std", true],
      ["Il y a une fuite d'eau. / Ça fuit.", "There's a leak. / It's leaking.", "std", true],
      ["Ça ne marche pas.", "It doesn't work.", "std", true],
      ["C'est difficile d'ouvrir la porte.", "It's hard to open the door.", "std"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · calling a tradesperson", lanes: ["Le locataire", "Le plombier"], av: ["m5", "m3"], steps: [
    { s: 0, fr: "Allô ? Bonjour, j'ai un problème : il y a une fuite d'eau !", en: "Hello? I have a problem: there's a leak!" },
    { s: 1, fr: "Elle est où, la fuite ?", en: "Where is the leak?" },
    { s: 0, fr: "Dans la salle de bains. Le robinet est cassé.", en: "In the bathroom. The tap is broken." },
    { s: 1, fr: "D'accord, j'y vais cet après-midi.", en: "OK, I'll come this afternoon.", alt: ["J'arrive tout de suite !"] },
    { s: 0, fr: "Merci ! Vous pouvez venir à quelle heure ?", en: "Thanks! What time can you come?" },
    { s: 1, fr: "Vers quinze heures. Je vais le changer.", en: "Around 3 p.m. I'll change it." }
  ] },

  sounds: {
    intro: "Put your hand on your throat: for [v] and [b] you feel a vibration (voiced), for [f] you don't (voiceless). [v] is made with the teeth on the lip; [b] with both lips.",
    letters: [
      { l: "f · ff · ph", name: "[f] · no vibration", tip: "Top teeth on the bottom lip, just air: [[le four]], [[la fenêtre]], [[le fauteuil]], [[la photo]].", ex: ["le four", "la fenêtre", "le fauteuil", "une photo"] },
      { l: "v · w", name: "[v] · vibration", tip: "Same position as [f], but your throat vibrates: [[le lave-vaisselle]], [[la télévision]], [[le salon de Victor]], [[un wagon]].", ex: ["le lave-vaisselle", "la télévision", "vous avez", "un wagon"] },
      { l: "b", name: "[b] · both lips", tip: "Close both lips, then open with a vibration: [[le bureau]], [[la bibliothèque]], [[la salle de bains]].", ex: ["le bureau", "la bibliothèque", "la salle de bains", "la table basse"] }
    ],
    pairs: [
      { a: ["un fer", "an iron"], b: ["un ver", "a worm"], note: "[f] / [v]" },
      { a: ["la fente", "the slot"], b: ["la vente", "the sale"], note: "[f] / [v]" },
      { a: ["neuf", "new; nine"], b: ["neuve", "new (f)"], note: "[f] / [v]" },
      { a: ["le bain", "the bath"], b: ["le vin", "the wine"], note: "[b] / [v]" },
      { a: ["boire", "to drink"], b: ["voir", "to see"], note: "[b] / [v]" },
      { a: ["la bise", "the cheek kiss"], b: ["la vis", "the screw"], note: "[b] / [v]" }
    ]
  },
  classify: {
    label: "🚫 Interdiction ou obligation ?", q: "Is it forbidding something, or asking / obliging you to do something?",
    options: ["🚫 interdiction", "✅ obligation / demande"],
    items: [
      { say: "Défense de fumer.", a: 0 }, { say: "Merci de fermer la porte.", a: 1 }, { say: "Il est interdit de courir.", a: 0 }, { say: "Prière de respecter le silence.", a: 1 },
      { say: "Ne pas bloquer les portes.", a: 0 }, { say: "Mettez vos poubelles dans le local.", a: 1 }, { say: "Interdiction de laisser les vélos dans l'entrée.", a: 0 }, { say: "Il faut fermer la porte à clé.", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Le salon fait vingt-deux mètres carrés.", ok: true },
    { type: "tf", tag: "Dialogue 1", s: "Le lave-vaisselle est vieux.", ok: false, explain: "[[Le lave-vaisselle est neuf.]]" },
    { type: "tf", tag: "Dialogue 1", s: "Le propriétaire va changer le robinet.", ok: true },
    { type: "mcq", tag: "Dialogue 2", q: "Le studio est…", options: ["meublé, au 5e étage sans ascenseur", "vide, au rez-de-chaussée", "meublé, au 3e avec ascenseur"], answer: 0 },
    { type: "tf", tag: "Dialogue 3", s: "La table basse est entre le canapé et la télé.", ok: true },
    { type: "tf", tag: "Dialogue 3", s: "Le chat est sous la table.", ok: false, explain: "[[Il est derrière le canapé.]]" },
    { type: "tf", tag: "Dialogue 4", s: "On peut fumer dans l'escalier.", ok: false, explain: "[[Il est interdit de fumer dans les parties communes.]]" },
    { type: "mcq", tag: "Dialogue 5", q: "Quels professionnels Nicolas doit-il appeler aussi ?", options: ["un électricien et un serrurier", "un médecin et un boulanger", "un architecte"], answer: 0 },
    { type: "fill", tag: "Pronoms COD", sentence: "Je cherche mes clés. Vous ___ voyez ?", options: ["le", "la", "les"], answer: 2 },
    { type: "fill", tag: "Pronoms COD", sentence: "Voici le numéro du propriétaire. Tu ___ appelles ?", options: ["l'", "le", "la"], answer: 0, explain: "le → l' before a vowel" },
    { type: "fill", tag: "Pronoms COD", sentence: "Ce sont des voisins agréables : je ___ aime bien.", options: ["l'", "les", "le"], answer: 1 },
    { type: "fill", tag: "Pronoms COD", sentence: "La salle de bains est bleue. Tu veux ___ voir ?", options: ["le", "la", "les"], answer: 1 },
    { type: "fill", tag: "Pronoms COD", sentence: "Mon amie ? Je ___ vois demain.", options: ["le", "la", "l'"], answer: 1 },
    { type: "fill", tag: "Pronoms COD", sentence: "Mes voisins ? Je ne ___ connais pas.", options: ["le", "les", "la"], answer: 1 },
    { type: "type", tag: "Pronoms COD", q: "Replace the object: « Je change le robinet. » → …", answers: ["Je le change.", "Je le change"] },
    { type: "type", tag: "Pronoms COD", q: "Replace the object: « Nous allons visiter la maison. » → …", answers: ["Nous allons la visiter.", "Nous allons la visiter"], explain: "before the infinitive" },
    { type: "fill", tag: "Prépositions", sentence: "La tasse de thé est ___ la table.", options: ["sur", "sous", "entre"], answer: 0 },
    { type: "fill", tag: "Prépositions", sentence: "Le chat a peur : il est ___ le lit !", options: ["sous", "sur", "en face"], answer: 0 },
    { type: "fill", tag: "Prépositions", sentence: "Le fauteuil est à côté ___ canapé.", options: ["du", "de le", "de la"], answer: 0 },
    { type: "fill", tag: "Prépositions", sentence: "La plante est devant ___ fenêtre.", options: ["la", "de la", "du"], answer: 0, explain: "devant: no de" },
    { type: "fill", tag: "Prépositions", sentence: "L'aquarium est en face ___ étagères.", options: ["des", "de les", "aux"], answer: 0 },
    { type: "fill", tag: "Interdiction", sentence: "___ de fumer.", options: ["Défense", "Merci", "Il faut"], answer: 0 },
    { type: "fill", tag: "Interdiction", sentence: "Il est interdit ___ courir dans les couloirs.", options: ["de", "à", "—"], answer: 0 },
    { type: "type", tag: "Interdiction", q: "Write a rule with « Interdiction de »: téléphoner dans le train.", answers: ["Interdiction de téléphoner dans le train.", "Interdiction de téléphoner dans le train"] },
    { type: "type", tag: "Obligation", q: "Write a polite request with « Merci de »: répondre avant le 10 janvier.", answers: ["Merci de répondre avant le 10 janvier.", "Merci de répondre avant le 10 janvier"] },
    { type: "fill", tag: "Le pronom y", sentence: "Ton bureau ? Tu ___ passes du temps ?", options: ["y", "en", "le"], answer: 0 },
    { type: "type", tag: "Le pronom y", q: "Answer with y: « Vous allez au supermarché ? » — Oui, …", answers: ["Oui, j'y vais.", "j'y vais", "Oui, nous y allons.", "Oui, j'y vais"] },
    { type: "type", tag: "Le pronom y", q: "Answer with y: « Tu habites à Paris ? » — Non, …", answers: ["Non, je n'y habite pas.", "je n'y habite pas", "Non, je n'y habite pas"] },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["le serrurier", "l'électricien", "le plombier", "le locataire"], answer: 3, explain: "le locataire rents the flat; the others are tradespeople." },
    { type: "mcq", tag: "Vocabulaire", q: "Cet appareil garde la nourriture au froid :", options: ["le frigo", "le four", "le lave-vaisselle"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Vocabulaire", q: "Le bas de l'immeuble, c'est…", options: ["le rez-de-chaussée", "le couloir", "l'ascenseur"], answer: 0, sayAnswer: true },
    { type: "reply", tag: "Que répondre ?", prompt: "Il y a combien de pièces ?", options: ["Trois : un salon et deux chambres.", "Cinquante mètres carrés.", "Au troisième étage."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Allô, j'ai une fuite d'eau dans la cuisine !", options: ["J'y vais tout de suite !", "Merci de votre compréhension.", "Il est interdit de fumer."], answer: 0 },
    { type: "order", tag: "Construisez", en: "Between the sofa and the TV there's a coffee table.", words: ["Entre", "le", "canapé", "et", "la", "télé,", "il", "y", "a", "une", "table", "basse."] }
  ],

  roleplays: [
    { title: "🏠 Visiter un appartement", brief: "You phone about a flat advert. Ask about size, rooms, furniture, floor and lift, then arrange a visit.", memo: ["superficie ?", "pièces ?", "meublé ?", "étage / ascenseur ?"], partner: "m2", you: "f2",
      turns: [
        { them: "Agence Bon Logis, bonjour !", themEn: "Bon Logis agency, hello!", hint: "Say you're calling about the flat on rue Voltaire, and ask the floor area.", you: "Bonjour, j'appelle pour l'appartement de la rue Voltaire. Quelle est la superficie ?", youEn: "Hello, I'm calling about the flat on rue Voltaire. What's the floor area?" },
        { them: "Cinquante mètres carrés.", themEn: "Fifty square metres.", hint: "Ask how many rooms, and if it's furnished.", you: "Il y a combien de pièces ? Il est meublé ?", youEn: "How many rooms are there? Is it furnished?" },
        { them: "Trois pièces, non meublé, au deuxième étage.", themEn: "Three rooms, unfurnished, on the second floor.", hint: "Ask if there's a lift.", you: "Il y a un ascenseur ?", youEn: "Is there a lift?" },
        { them: "Oui. Vous voulez le visiter ?", themEn: "Yes. Would you like to visit it?", hint: "Say yes, using [[le]], and suggest tomorrow.", you: "Oui, je voudrais le visiter demain, si possible.", youEn: "Yes, I'd like to visit it tomorrow, if possible." }
      ] },
    { title: "🛋️ Décris ta chambre", brief: "Describe your bedroom (real or imaginary) to a friend, using at least four prepositions of place.", memo: ["sur / sous", "à côté de", "en face de", "entre… et…"], partner: "m7", you: "f1",
      turns: [
        { them: "Elle est comment, ta chambre ?", themEn: "What's your bedroom like?", hint: "Say where the bed is.", you: "Elle est petite. Le lit est en face de la fenêtre.", youEn: "It's small. The bed is opposite the window." },
        { them: "Et ton bureau ?", themEn: "And your desk?", hint: "Next to the bed; a lamp on the desk.", you: "Mon bureau est à côté du lit, et il y a une lampe sur le bureau.", youEn: "My desk is next to the bed, and there's a lamp on the desk." },
        { them: "Et tes vêtements ?", themEn: "And your clothes?", hint: "In the wardrobe, between the door and the window.", you: "Ils sont dans l'armoire, entre la porte et la fenêtre.", youEn: "They're in the wardrobe, between the door and the window." }
      ] },
    { title: "🔧 Un problème à la maison", brief: "The light in your kitchen doesn't work and the tap is leaking. Phone the caretaker.", memo: ["la lumière ne marche pas", "ça fuit", "électricien ? plombier ?"], partner: "f6", you: "m5",
      turns: [
        { them: "Allô, madame Lopez, gardienne de l'immeuble.", themEn: "Hello, Mrs Lopez, building caretaker.", hint: "Say hello, your flat number (32), and that you have two problems.", you: "Bonjour, madame. C'est Nicolas, appartement 32. J'ai deux problèmes dans la cuisine.", youEn: "Hello. It's Nicolas, flat 32. I have two problems in the kitchen." },
        { them: "Qu'est-ce qui se passe ?", themEn: "What's happening?", hint: "The light doesn't work and the tap is leaking.", you: "La lumière ne marche pas, et le robinet fuit.", youEn: "The light doesn't work, and the tap is leaking." },
        { them: "Je vais appeler un électricien et un plombier.", themEn: "I'll call an electrician and a plumber.", hint: "Thank her and say you'll be at home all afternoon (use y: [[j'y suis]]).", you: "Merci beaucoup ! Je suis chez moi cet après-midi, j'y suis jusqu'à dix-huit heures.", youEn: "Thank you very much! I'm at home this afternoon, I'm there until 6 p.m." }
      ] }
  ],

  ateliers: [
    { title: "Écrire les règles d'un établissement", intro: "In groups, invent the ideal rules for a place (your school, a library, a youth hostel, a café…), illustrate them with pictograms, and make the class guess the place.",
      steps: [["Préparation", ["Choose a place and give it a name.", "Imagine its rules: what's forbidden, what's compulsory, what's welcome."]], ["Réalisation", ["Write 6–8 rules with different structures: [[Il est interdit de…]], [[Défense de…]], [[Merci de…]], [[Ne pas…]], imperatives.", "Draw a pictogram for each rule (red circle = forbidden, blue = compulsory)."]], ["Présentation", ["Read your rules without naming the place: the class guesses!"]]],
      phrases: ["Il est interdit de…", "Merci de…", "Ne pas…", "Prière de…"],
      model: { type: "signs", title: "🏫 Example: « La bibliothèque idéale »", items: [{ type: "no", pic: "📱", fr: "Interdiction de téléphoner.", en: "No phone calls." }, { type: "no", pic: "🍔", fr: "Ne pas manger entre les étagères.", en: "No eating between the shelves." }, { type: "yes", pic: "📚", fr: "Merci de remettre les livres à leur place.", en: "Please put books back." }, { type: "yes", pic: "☕", fr: "Prenez un café au salon de lecture !", en: "Have a coffee in the reading lounge!" }] } },
    { title: "Dessiner le plan d'un appartement", tech: true, intro: "Design a flat online with a free floor-plan website (for example a French site like archifacile.fr), furnish it, and present it.",
      steps: [["Préparation", ["Decide the rooms and their floor area: [[un salon de 25 m²]], [[deux chambres de 12 m²]]…", "Choose some furniture for each room."]], ["Réalisation", ["Draw the rooms, doors and windows on the site.", "Add the furniture (often in a section called <i>Aménager</i>) and save your project."]], ["Présentation", ["Present your flat: [[Dans le salon, le canapé est en face de la fenêtre…]]", "Vote for the best project."]]],
      phrases: ["L'appartement fait… m².", "Il y a… pièces.", "Le lit est à côté de…"] }
  ],
  detente: {
    title: "Le jeu des 7 erreurs · Vrai ou faux ?",
    intro: "Look carefully at Céline and Nicolas's floor plan. Seven sentences, but are they true? Find the mistakes!",
    docs: [{ type: "floorplan", title: "🏠 Le plan", plan: U07_FLAT }],
    items: [
      { type: "tf", s: "Dans le salon, la plante est à droite du canapé.", ok: false, explain: "It's on the left; the lamp is on the right." },
      { type: "tf", s: "La table basse est entre le canapé et la télé.", ok: true },
      { type: "tf", s: "Le frigo est dans la chambre.", ok: false, explain: "It's in the kitchen." },
      { type: "tf", s: "La table de nuit est à côté du lit.", ok: true },
      { type: "tf", s: "Les clés sont dans la salle de bains.", ok: false, explain: "They're in the entrance." },
      { type: "tf", s: "La cuisinière est entre le frigo et le lave-vaisselle.", ok: true },
      { type: "tf", s: "La bibliothèque est dans la cuisine.", ok: false, explain: "It's in the living room, next to the window." }
    ]
  },

  cultureInfo: [
    { type: "bars", title: "🏚️ « Les Français adorent acheter de vieilles maisons » ? (survey quoted by the book)", unit: " %", items: [
      { fr: "veulent faire construire un logement neuf", en: "want a new home built: personalised and practical", v: 60, pic: "🏗️" },
      { fr: "préfèrent acheter un logement déjà construit", en: "prefer to buy an existing home", v: 33, pic: "🏚️" }
    ] }
  ],
  culture: [
    { icon: "🏚️", kind: "Oh, le cliché !", t: "« Les Français adorent acheter de vieilles maisons. »", d: "Not so much! In the survey quoted by the book, <b>60 %</b> of French people would like to have a new home built (personalised and practical), and only a third prefer an existing one." },
    { icon: "📋", kind: "Au fait !", t: "L'état des lieux", d: "When you rent a flat in France, the tenant and the landlord check every room together at the start and at the end of the rental, and both sign the <b>état des lieux</b>. Note every scratch: it protects your deposit (<i>la caution</i>)!" },
    { icon: "🧹", kind: "Civilisation", t: "Le gardien, la gardienne", d: "Some buildings have a caretaker (often called <i>concierge</i> in Paris) who lives on the ground floor, receives parcels, cleans the common areas and helps residents with problems." },
    { icon: "🎉", kind: "Au fait !", t: "La pendaison de crémaillère", d: "The housewarming party: literally “hanging the pot-hook” above the fire, the last job when you moved into a house long ago. It's polite to warn your neighbours with a note in the entrance." },
    { icon: "🪑", kind: "Civilisation", t: "Profession : designers !", d: "<b>Matali Crasset</b> (born in France in 1965) designs houses, museums, furniture and objects all over the world. In Senegal, <b>Ousmane Mbaye</b> creates contemporary furniture from metal and recycled materials." },
    { icon: "🛋️", kind: "Francophonie", t: "Quelques meubles traditionnels", d: "The French <b>armoire normande</b> (a big carved wardrobe), the Moroccan low <b>table berbère</b> with cushions, and the Vietnamese carved wooden furniture inlaid with mother-of-pearl. And in your country?" },
    { icon: "🔢", kind: "Au fait !", t: "Floors", d: "In France the <b>rez-de-chaussée</b> is the ground floor; the <b>premier étage</b> is the floor above it (= US second floor). In Québec, the ground floor is often called <i>le premier étage</i>!" }
  ],
  tips: [
    { icon: "🎯", t: "Pronoun before the verb", d: "le, la, l', les, y and en all go just before the verb they belong to: [[Je le vois]], [[J'y vais]], [[J'en veux]], [[Je vais le voir]]." },
    { icon: "🚸", t: "Read the signs around you", d: "Next time you see a sign (No smoking, Keep off the grass…), say it in French: [[Défense de fumer]], [[Interdiction de marcher sur la pelouse]]." },
    { icon: "🏠", t: "Label your home", d: "Put sticky notes on your furniture with the French word and its article: [[le frigo]], [[la lampe]], [[l'armoire]]." }
  ],
  mistakes: [
    ["Je vois le.", "Je le vois.", "pronoun before the verb"],
    ["Je vais changer le.", "Je vais le changer.", "before the infinitive"],
    ["Je la adore.", "Je l'adore.", "la → l' before a vowel"],
    ["à côté de le canapé", "à côté du canapé", "de + le = du"],
    ["Défense à fumer.", "Défense de fumer.", "défense de + infinitive"],
    ["Merci de ne fumer pas.", "Merci de ne pas fumer.", "ne pas + infinitive"],
    ["Je vais y à la poste.", "Je vais à la poste. / J'y vais.", "y replaces the place"],
    ["Le robinet est cassée.", "Le robinet est cassé.", "robinet is masculine"]
  ]
});
