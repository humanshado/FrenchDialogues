// Unité 3 · Qu'est-ce qu'on mange ? (book pp. 47–60)
// Situations: faire des courses au marché, au supermarché · commander au restaurant, au café · exprimer ses goûts
// Grammar: singulier / pluriel des noms · à / chez (prépositions de lieu 1) · la quantité non définie (du, de la, de l', des, un peu de, beaucoup de) · le pronom en · payer, acheter, faire, manger
// Dialogues and activities are original, built on the book's themes, communication goals, grammar and vocabulary.
const U03_SHOP = {
  streets: [
    { p: [[30, 70], [370, 70]] }, { p: [[30, 140], [370, 140]] }, { p: [[30, 210], [370, 210]] },
    { p: [[30, 20], [30, 235]] }, { p: [[200, 20], [200, 235]] }, { p: [[370, 20], [370, 235]] }
  ],
  places: [
    { id: "fruits", x: 115, y: 105, pic: "🍎", name: "fruits et légumes", c: "#4f9d4f" },
    { id: "boulang", x: 285, y: 175, pic: "🥖", name: "boulangerie", c: "#b5652b" },
    { id: "laitiers", x: 115, y: 35, pic: "🧀", name: "produits laitiers", c: "#e0a526" },
    { id: "boucher", x: 285, y: 35, pic: "🥩", name: "boucherie", c: "#e0474f" },
    { id: "poisson", x: 115, y: 175, pic: "🐟", name: "poissonnerie", c: "#2b59c3" },
    { id: "boissons", x: 285, y: 105, pic: "🧃", name: "boissons", c: "#9b4fb0" },
    { id: "caisses", x: 330, y: 238, pic: "💳", name: "les caisses", c: "#1f2a44" }
  ],
  route: [[200, 238], [200, 210], [262, 210], [272, 194]],
  here: [200, 238]
};
LESSONS.push({
  id: "u03", rubrique: 2, num: 3,
  title: "What are we eating?",
  titleFr: "Qu'est-ce qu'on mange ?",
  pages: "Book pp. 47–60",
  opener: { fr: "Bonjour ! Qu'est-ce que je vous sers ?", en: "Hello! What can I get you?" },
  hero: { scene: "marche", staff: "Le marchand", people: { "Le marchand": "m2", "Madame Petit": "f6", "Lucas": "m1" } },
  situations: [
    ["🧺", "Au marché", "opening hours, buying fruit and veg, paying: [[Vous payez comment ?]]"],
    ["🛒", "Au supermarché", "the aisles: [[au rayon des produits laitiers]], [[chez le boucher]]"],
    ["🍽️", "À table !", "ordering in a restaurant or a café: [[Pour moi, la formule à 15 euros.]]"],
    ["😋", "J'en veux !", "likes and dislikes, reviews: [[J'adore !]] [[Je déteste.]] [[Quelle terrasse !]]"]
  ],
  goals: [
    "Understand and give opening hours: [[Le marché est ouvert de 8 heures à 13 heures.]]",
    "Buy food at the market and in shops: [[Je voudrais un kilo de pommes.]] · [[C'est combien ?]]",
    "Say where you shop: [[à la boulangerie]] but [[chez le boulanger]]",
    "Talk about quantities: [[du pain]], [[de la crème]], [[de l'eau]], [[des œufs]], [[un peu de sel]], [[beaucoup de fraises]]",
    "Avoid repeating a noun with [[en]]: [[Du sucre ? Oui, j'en veux.]]",
    "Order in a restaurant or a café, ask for the bill and pay",
    "Say what you like and don't like: [[J'aime bien]], [[J'adore]], [[Je n'aime pas]], [[Je déteste]]"
  ],
  glance: [
    ["🗣️", "Communication", "opening hours · shopping · ordering at a restaurant or café · tastes"],
    ["🧩", "Grammaire", "singular / plural nouns · à and chez · du, de la, des, un peu de, beaucoup de · the pronoun en · payer, acheter, faire, manger"],
    ["🗂️", "Vocabulaire", "shops and shopkeepers · food · quantities · ways of paying · the restaurant: dishes, drinks, tableware"],
    ["🔊", "Phonétique", "silent final e and spoken final é · silent final consonants"],
    ["⭐", "The phrase to learn first", "[[Je voudrais…, s'il vous plaît. C'est combien ?]]"]
  ],

  dialogues: [
    {
      id: "d1", n: 1, title: "At the market", titleFr: "Au marché · Qu'est-ce que je vous sers ?",
      note: "Saturday morning at the town-centre market. The stallholder leads the conversation: [[C'est à qui ?]] [[Qu'est-ce que je vous sers ?]] [[Vous payez comment ?]]",
      scene: "marche", staff: "Le marchand", people: { "Le marchand": "m2", "Madame Petit": "f6" }, hold: { "Madame Petit": "🧺" },
      lines: [
        ["Le marchand", "Bonjour ! C'est à qui ?", "Hello! Who's next?"],
        ["Madame Petit", "C'est à moi ! Bonjour, monsieur.", "It's me! Hello."],
        ["Le marchand", "Qu'est-ce que je vous sers ?", "What can I get you?"],
        ["Madame Petit", "Je voudrais un kilo de tomates et deux barquettes de fraises, s'il vous plaît. Elles sont belles !", "I'd like a kilo of tomatoes and two punnets of strawberries, please. They look lovely!"],
        ["Le marchand", "Ce sont des fraises de la région ! Et avec ça ?", "They're local strawberries! Anything else?"],
        ["Madame Petit", "Combien coûte le raisin ?", "How much are the grapes?"],
        ["Le marchand", "Trois euros cinquante le kilo.", "Three fifty a kilo."],
        ["Madame Petit", "Alors un kilo de raisin, et une salade. Ce sera tout.", "Then a kilo of grapes, and a lettuce. That'll be all."],
        ["Le marchand", "Ça fait douze euros quarante. Vous payez comment ? En espèces ou par carte ?", "That's twelve forty. How are you paying? Cash or card?"],
        ["Madame Petit", "Par carte bancaire. Vous êtes ouvert dimanche ?", "By card. Are you open on Sunday?"],
        ["Le marchand", "Oui, le marché est ouvert le vendredi, le samedi et le dimanche, de huit heures à treize heures.", "Yes, the market is open on Friday, Saturday and Sunday, from 8 till 1."]
      ],
      glossary: [["C'est à qui ?", "who's next?"], ["Qu'est-ce que je vous sers ?", "what can I get you?"], ["une barquette", "a punnet, a small tray"], ["en espèces", "in cash"]]
    },
    {
      id: "d2", n: 2, title: "At the supermarket", titleFr: "Au supermarché · Où sont les œufs ?",
      note: "Lucas has a shopping list but can't find anything. Notice [[au rayon…]], [[à l'entrée]], [[aux caisses]] and [[chez le boucher]].",
      scene: "supermarche", staff: "L'employée", people: { "L'employée": "f8", "Lucas": "m1" }, hold: { "Lucas": "📝" },
      lines: [
        ["Lucas", "Excusez-moi, madame, je cherche les œufs.", "Excuse me, I'm looking for the eggs."],
        ["L'employée", "Les œufs sont au rayon des produits laitiers, au fond du magasin, à gauche.", "The eggs are in the dairy aisle, at the back of the shop, on the left."],
        ["Lucas", "Merci. Et la viande ? Il y a un boucher ?", "Thanks. And meat? Is there a butcher?"],
        ["L'employée", "Oui, chez le boucher, à côté de la poissonnerie. Aujourd'hui, il y a des promotions sur le poulet !", "Yes, at the butcher's counter, next to the fish counter. Today there are special offers on chicken!"],
        ["Lucas", "Super. Et le pain, c'est où ?", "Great. And where's the bread?"],
        ["L'employée", "À la boulangerie, à l'entrée du magasin.", "At the bakery, at the entrance of the shop."],
        ["Lucas", "Et je paie où ?", "And where do I pay?"],
        ["L'employée", "Aux caisses, là-bas. Vous pouvez payer par carte, en espèces ou par chèque.", "At the checkouts, over there. You can pay by card, in cash or by cheque."]
      ],
      glossary: [["le rayon", "the aisle, the section"], ["au fond", "at the back"], ["chez le boucher", "at the butcher's"], ["les caisses", "the checkouts"]]
    },
    {
      id: "d3", n: 3, title: "At the bistro: a set menu", titleFr: "Au restaurant · La formule, s'il vous plaît !",
      note: "Inès and Paul have lunch in a bistro. Listen to the waiter's questions and the menu words: [[l'entrée]], [[le plat du jour]], [[le dessert]], [[la formule]], [[l'addition]].",
      scene: "restaurant", staff: "Le serveur", people: { "Le serveur": "m7", "Inès": "f2", "Paul": "m5" },
      lines: [
        ["Le serveur", "Bonjour ! Vous avez choisi ? Je peux prendre la commande ?", "Hello! Have you chosen? Can I take your order?"],
        ["Inès", "Oui. Qu'est-ce que c'est, le plat du jour ?", "Yes. What's the dish of the day?"],
        ["Le serveur", "Aujourd'hui, c'est du poulet avec des frites. Il change tous les jours, c'est pour ça qu'il s'appelle « plat du jour » !", "Today it's chicken with chips. It changes every day, that's why it's called the “dish of the day”!"],
        ["Inès", "Alors pour moi, la formule entrée-plat à quinze euros : une soupe de légumes et le plat du jour.", "Then for me, the starter and main course set menu at fifteen euros: a vegetable soup and the dish of the day."],
        ["Paul", "Moi, je prends un gazpacho. Et comme plat, le steak-frites, bien cuit, s'il vous plaît.", "I'll have a gazpacho. And as a main, the steak and chips, well done, please."],
        ["Le serveur", "Très bien. Et comme boisson ?", "Very good. And to drink?"],
        ["Paul", "Une carafe d'eau, s'il vous plaît.", "A jug of water, please."],
        ["Inès", "… Garçon, s'il vous plaît ! Un café et l'addition !", "… Waiter, please! A coffee and the bill!"],
        ["Le serveur", "Voilà : deux formules, trente euros, plus un café, deux euros. Ça fait trente-deux euros.", "Here you are: two set menus, thirty euros, plus a coffee, two euros. That's thirty-two euros."],
        ["Paul", "Voilà trente-cinq euros. Gardez la monnaie !", "Here's thirty-five euros. Keep the change!"]
      ],
      glossary: [["la commande", "the order"], ["la formule", "the set menu"], ["une carafe d'eau", "a jug of (tap) water"], ["l'addition", "the bill"]]
    },
    {
      id: "d4", n: 4, title: "At the café: do you have any…?", titleFr: "Au café · J'en veux !",
      note: "Clémentine is greedy and very curious. Listen for the little word [[en]], which replaces the food so you don't repeat it.",
      scene: "cafe", staff: "La serveuse", people: { "La serveuse": "f1", "Clémentine": "f7" },
      lines: [
        ["Clémentine", "Bonjour ! Vous avez de la mousse au chocolat ?", "Hello! Do you have any chocolate mousse?"],
        ["La serveuse", "Ah non, désolée, nous n'en avons pas aujourd'hui. Mais nous avons des tartes aux fraises.", "Oh no, sorry, we haven't got any today. But we have strawberry tarts."],
        ["Clémentine", "Des tartes aux fraises ? J'adore ! J'en veux !", "Strawberry tarts? I love them! I want some!"],
        ["La serveuse", "Vous en voulez combien ?", "How many do you want?"],
        ["Clémentine", "Une part, s'il vous plaît. Et un café crème : du café et beaucoup de lait.", "One slice, please. And a white coffee: coffee and lots of milk."],
        ["La serveuse", "Vous voulez du sucre ?", "Do you want sugar?"],
        ["Clémentine", "Non merci, je n'en veux pas. Il y a déjà du sucre dans la tarte !", "No thanks, I don't want any. There's already sugar in the tart!"],
        ["La serveuse", "C'est vrai ! Vous êtes en terrasse ?", "That's true! Are you sitting on the terrace?"],
        ["Clémentine", "Oui ! Quelle terrasse, c'est génial ici !", "Yes! What a terrace, it's great here!"]
      ],
      glossary: [["J'en veux !", "I want some!"], ["Vous en voulez combien ?", "how many / how much do you want?"], ["un café crème", "a white coffee"], ["en terrasse", "on the terrace"]]
    },
    {
      id: "d5", n: 5, title: "Québec or France? Favourite dishes", titleFr: "Entre amis · Qu'est-ce que tu manges ?",
      note: "Simon from Québec and Juliette from France compare their favourite food. Listen for [[j'aime bien]], [[j'adore]], [[je n'aime pas]], [[je déteste]].",
      scene: "maison", people: { "Juliette": "f3", "Simon": "m6" },
      lines: [
        ["Juliette", "Simon, qu'est-ce que vous mangez au Québec ? De la poutine ?", "Simon, what do you eat in Québec? Poutine?"],
        ["Simon", "Oui, j'adore la poutine ! Ce sont des frites, du fromage et de la sauce.", "Yes, I love poutine! It's chips, cheese and gravy."],
        ["Juliette", "Hmm… beaucoup de frites et beaucoup de fromage !", "Hmm… lots of chips and lots of cheese!"],
        ["Simon", "Et en hiver, on mange de la tire d'érable : du sirop d'érable chaud sur de la neige. C'est délicieux !", "And in winter we eat maple taffy: hot maple syrup on snow. It's delicious!"],
        ["Juliette", "Moi, j'aime bien la cuisine de ma grand-mère : la tarte Tatin, avec des pommes, du beurre et du sucre.", "I really like my grandmother's cooking: tarte Tatin, with apples, butter and sugar."],
        ["Simon", "Et les escargots ? Tu en manges ?", "And snails? Do you eat them?"],
        ["Juliette", "Ah non ! Je déteste les escargots ! Je n'en mange pas.", "Oh no! I hate snails! I don't eat them."]
      ],
      glossary: [["la poutine", "chips + cheese curds + gravy (Québec)"], ["la tire d'érable", "maple taffy"], ["J'aime bien…", "I quite like…"], ["Je déteste…", "I hate…"]]
    }
  ],

  vocab: [
    { t: "le marché", en: "the market", pic: "🧺", cat: "Les commerces", g: "m" },
    { t: "le supermarché", en: "the supermarket", pic: "🛒", cat: "Les commerces", g: "m" },
    { t: "la boulangerie · le boulanger", en: "the bakery · the baker", pic: "🥖", cat: "Les commerces", g: "f" },
    { t: "la boucherie · le boucher", en: "the butcher's · the butcher", pic: "🥩", cat: "Les commerces", g: "f" },
    { t: "la fromagerie · le fromager", en: "the cheese shop · the cheesemonger", pic: "🧀", cat: "Les commerces", g: "f" },
    { t: "la poissonnerie · le poissonnier", en: "the fish shop · the fishmonger", pic: "🐟", cat: "Les commerces", g: "f" },
    { t: "le primeur", en: "the greengrocer", pic: "🥕", cat: "Les commerces", g: "m" },
    { t: "le marchand, la marchande", en: "the stallholder", pic: "🧑‍🌾", cat: "Les commerces" },
    { t: "le rayon", en: "the aisle, the department", pic: "🗄️", cat: "Les commerces", g: "m" },
    { t: "les caisses", en: "the checkouts", pic: "💳", cat: "Les commerces", g: "pl" },
    { t: "une pomme", en: "an apple", pic: "🍎", cat: "Les fruits", g: "f" },
    { t: "une poire", en: "a pear", pic: "🍐", cat: "Les fruits", g: "f" },
    { t: "une banane", en: "a banana", pic: "🍌", cat: "Les fruits", g: "f" },
    { t: "une orange", en: "an orange", pic: "🍊", cat: "Les fruits", g: "f" },
    { t: "un citron", en: "a lemon", pic: "🍋", cat: "Les fruits", g: "m" },
    { t: "une fraise", en: "a strawberry", pic: "🍓", cat: "Les fruits", g: "f" },
    { t: "une pêche", en: "a peach", pic: "🍑", cat: "Les fruits", g: "f" },
    { t: "le raisin", en: "grapes", pic: "🍇", cat: "Les fruits", g: "m", note: "singular in French: [[du raisin]]" },
    { t: "un ananas", en: "a pineapple", pic: "🍍", cat: "Les fruits", g: "m", pr: "a-na-NA(S)" },
    { t: "une tomate", en: "a tomato", pic: "🍅", cat: "Les légumes", g: "f" },
    { t: "une carotte", en: "a carrot", pic: "🥕", cat: "Les légumes", g: "f" },
    { t: "un poivron", en: "a pepper", pic: "🫑", cat: "Les légumes", g: "m" },
    { t: "une salade", en: "a lettuce; a salad", pic: "🥬", cat: "Les légumes", g: "f" },
    { t: "un oignon", en: "an onion", pic: "🧅", cat: "Les légumes", g: "m", pr: "o-NYON" },
    { t: "une pomme de terre", en: "a potato", pic: "🥔", cat: "Les légumes", g: "f" },
    { t: "un poireau", en: "a leek", pic: "🥬", cat: "Les légumes", g: "m" },
    { t: "le pain", en: "bread", pic: "🍞", cat: "Les aliments", g: "m" },
    { t: "le beurre", en: "butter", pic: "🧈", cat: "Les aliments", g: "m" },
    { t: "le fromage", en: "cheese", pic: "🧀", cat: "Les aliments", g: "m" },
    { t: "le lait", en: "milk", pic: "🥛", cat: "Les aliments", g: "m" },
    { t: "le yaourt", en: "yoghurt", pic: "🥣", cat: "Les aliments", g: "m", pr: "ya-OURT" },
    { t: "la crème", en: "cream", pic: "🍶", cat: "Les aliments", g: "f" },
    { t: "un œuf, des œufs", en: "an egg, eggs", pic: "🥚", cat: "Les aliments", note: "[[un œuf]] = <i>un-NŒF</i>, [[des œufs]] = <i>dé-ZEU</i> (f silent!)" },
    { t: "la viande", en: "meat", pic: "🍖", cat: "Les aliments", g: "f" },
    { t: "le poulet", en: "chicken", pic: "🍗", cat: "Les aliments", g: "m" },
    { t: "le poisson", en: "fish", pic: "🐟", cat: "Les aliments", g: "m" },
    { t: "les fruits de mer", en: "seafood", pic: "🦐", cat: "Les aliments", g: "pl" },
    { t: "le sucre", en: "sugar", pic: "🍬", cat: "Les aliments", g: "m" },
    { t: "le sel", en: "salt", pic: "🧂", cat: "Les aliments", g: "m", pr: "SEL (the l is heard)" },
    { t: "l'huile", en: "oil", pic: "🫒", cat: "Les aliments", g: "f", pr: "LWEEL" },
    { t: "un kilo de…", en: "a kilo of…", pic: "⚖️", cat: "Les quantités" },
    { t: "une barquette de…", en: "a punnet / tray of…", pic: "🧺", cat: "Les quantités" },
    { t: "une bouteille de…", en: "a bottle of…", pic: "🍾", cat: "Les quantités" },
    { t: "un morceau de…", en: "a piece of…", pic: "🧀", cat: "Les quantités" },
    { t: "une part de…", en: "a slice / portion of (cake)…", pic: "🍰", cat: "Les quantités" },
    { t: "une tranche de…", en: "a slice of (ham, bread)…", pic: "🥓", cat: "Les quantités" },
    { t: "un peu de…", en: "a little…", pic: "🤏", cat: "Les quantités" },
    { t: "beaucoup de…", en: "a lot of…", pic: "🙌", cat: "Les quantités" },
    { t: "la carte bancaire", en: "bank card (= la carte bleue)", pic: "💳", cat: "Payer", g: "f" },
    { t: "les espèces", en: "cash", pic: "💶", cat: "Payer", g: "pl" },
    { t: "un billet", en: "a banknote", pic: "💵", cat: "Payer", g: "m", pr: "bee-YAY" },
    { t: "une pièce", en: "a coin", pic: "🪙", cat: "Payer", g: "f" },
    { t: "un chèque", en: "a cheque", pic: "🧾", cat: "Payer", g: "m" },
    { t: "la carte, le menu", en: "the menu", pic: "📜", cat: "Au restaurant", g: "f", note: "<b>la carte</b> = the whole menu; <b>le menu</b> often = a set menu" },
    { t: "l'entrée", en: "the starter", pic: "🥗", cat: "Au restaurant", g: "f" },
    { t: "le plat", en: "the main course; the dish", pic: "🍲", cat: "Au restaurant", g: "m" },
    { t: "le plat du jour", en: "the dish of the day", pic: "📅", cat: "Au restaurant", g: "m" },
    { t: "le dessert", en: "the dessert", pic: "🍮", cat: "Au restaurant", g: "m" },
    { t: "la formule", en: "the set menu", pic: "🧾", cat: "Au restaurant", g: "f" },
    { t: "la commande", en: "the order", pic: "📝", cat: "Au restaurant", g: "f" },
    { t: "l'addition", en: "the bill", pic: "🧾", cat: "Au restaurant", g: "f" },
    { t: "le pourboire", en: "the tip", pic: "🪙", cat: "Au restaurant", g: "m" },
    { t: "le steak-frites", en: "steak and chips", pic: "🥩", cat: "Au restaurant", g: "m" },
    { t: "la mousse au chocolat", en: "chocolate mousse", pic: "🍫", cat: "Au restaurant", g: "f" },
    { t: "une assiette", en: "a plate", pic: "🍽️", cat: "La vaisselle", g: "f" },
    { t: "un verre", en: "a glass", pic: "🥛", cat: "La vaisselle", g: "m" },
    { t: "une tasse", en: "a cup", pic: "☕", cat: "La vaisselle", g: "f" },
    { t: "une carafe", en: "a jug", pic: "🫗", cat: "La vaisselle", g: "f" },
    { t: "une fourchette", en: "a fork", pic: "🍴", cat: "La vaisselle", g: "f" },
    { t: "un couteau", en: "a knife", pic: "🔪", cat: "La vaisselle", g: "m" },
    { t: "une cuillère", en: "a spoon", pic: "🥄", cat: "La vaisselle", g: "f", pr: "kwee-YAIR" },
    { t: "le café", en: "coffee", pic: "☕", cat: "Les boissons", g: "m" },
    { t: "le thé", en: "tea", pic: "🍵", cat: "Les boissons", g: "m" },
    { t: "l'eau", en: "water", pic: "💧", cat: "Les boissons", g: "f" },
    { t: "le jus de fruits", en: "fruit juice", pic: "🧃", cat: "Les boissons", g: "m", pr: "zhu (s silent)" },
    { t: "le sirop", en: "cordial", pic: "🥤", cat: "Les boissons", g: "m", pr: "see-RO" },
    { t: "agréable ≠ désagréable", en: "pleasant ≠ unpleasant", pic: "😊", cat: "Les avis" },
    { t: "bon, bonne ≠ mauvais, mauvaise", en: "good ≠ bad", pic: "👍", cat: "Les avis" },
    { t: "joli ≠ moche", en: "pretty ≠ ugly (casual)", pic: "🌸", cat: "Les avis" },
    { t: "poli ≠ malpoli", en: "polite ≠ rude", pic: "🙇", cat: "Les avis" },
    { t: "sympa ≠ pas sympa", en: "nice, friendly ≠ not nice", pic: "🤗", cat: "Les avis" }
  ],

  grammar: [
    {
      id: "g-horaires",
      title: "Opening hours: [[C'est ouvert de 8 heures à 13 heures.]]",
      body: [
        "To give opening hours: [[Le marché ouvre à 8 heures.]] · [[Il ferme à 13 heures.]] · [[C'est ouvert de 8 heures à 13 heures.]] For days, use [[le]] + the day for something regular: [[le samedi]] = every Saturday.",
        "Official times use the 24-hour clock: [[13 h]] = [[treize heures]], [[20 h]] = [[vingt heures]]. Tap through the clock below."
      ],
      info: { type: "card", style: "board", caption: "📋 Read the poster · tap a line", title: "MARCHÉ DU CENTRE-VILLE", sub: "30 marchands à votre service !", rows: [["Ouvert", "vendredi, samedi, dimanche", "Le marché est ouvert le vendredi, le samedi et le dimanche."], ["Horaires", "8 h – 13 h", "de huit heures à treize heures"], ["Fermé", "lundi → jeudi", "Il est fermé du lundi au jeudi."], ["Paiement", "espèces · carte", "en espèces ou par carte"], ["Infos", "04 78 12 30 60", "zéro quatre, soixante-dix-huit, douze, trente, soixante"]], foot: "Toute l'année · fruits, légumes, fromages, poissons" },
      widget: { type: "clock", label: "Opening times · the 24-hour clock", times: [[8, 0, "the market opens"], [9, 30, "the bakery opens"], [12, 30, "lunch time"], [13, 0, "the market closes"], [14, 0, "shops reopen after lunch"], [19, 30, "the supermarket closes"], [20, 0, "the restaurant opens"], [22, 45, "last orders"]] }
    },
    {
      id: "g-pluriel",
      title: "Singular and plural nouns · and quantities",
      body: [
        "To make a noun plural, add <b>-s</b>, which you <b>don't hear</b>: [[un citron]] → [[des citrons]]. So listen to the <b>article</b> to know if it's plural: [[le citron]] / [[les citrons]].",
        "Special cases: <b>-eau → -eaux</b> ([[un gâteau]] → [[des gâteaux]]), <b>-al → -aux</b> ([[un journal]] → [[des journaux]]). Nouns ending in <b>-s, -x, -z</b> don't change: [[un ananas]] → [[des ananas]], [[le prix]] → [[les prix]].",
        "With a quantity, use [[de]] (or [[d']]) and no article: [[un kilo de pommes]], [[une bouteille d'eau]], [[deux barquettes de fraises]]."
      ],
      info: [
        { type: "compare", title: "➕ One or more?", cols: [
          { head: "Singulier", en: "one", color: "#2b59c3", lines: [["un citron", ""], ["une pomme", ""], ["un gâteau", ""], ["un ananas", ""]] },
          { head: "Pluriel", en: "+ s (silent)", color: "#7b4fb5", lines: [["des citron|s", "+ s"], ["des pomme|s", "+ s"], ["des gâteau|x", "-eau → -eaux"], ["des ananas", "-s: no change"]] }
        ] },
        { type: "pics", title: "⚖️ Les quantités · tap to hear", items: [
          { t: "un kilo de pommes", pic: "🍎⚖️", en: "a kilo of apples" }, { t: "une barquette de fraises", pic: "🍓🧺", en: "a punnet of strawberries" }, { t: "une bouteille de lait", pic: "🥛🍾", en: "a bottle of milk" },
          { t: "un morceau de fromage", pic: "🧀", en: "a piece of cheese" }, { t: "une part de tarte", pic: "🍰", en: "a slice of tart" }, { t: "une tranche de jambon", pic: "🥓", en: "a slice of ham" },
          { t: "un verre d'eau", pic: "💧🥛", en: "a glass of water" }, { t: "une tasse de café", pic: "☕", en: "a cup of coffee" }, { t: "une carafe d'eau", pic: "🫗", en: "a jug of water" }
        ] }
      ],
      widget: {
        type: "sort", label: "Singular or plural? Listen to the article (tap a word to hear it)",
        cols: [{ k: "s", label: "singulier", color: "#2b59c3" }, { k: "p", label: "pluriel", color: "#7b4fb5" }],
        items: [
          { t: "le citron", k: "s", say: "le citron" }, { t: "les citrons", k: "p", say: "les citrons" }, { t: "la fraise", k: "s", say: "la fraise" }, { t: "des fraises", k: "p", say: "des fraises" },
          { t: "un ananas", k: "s", say: "un ananas" }, { t: "des ananas", k: "p", say: "des ananas" }, { t: "le gâteau", k: "s", say: "le gâteau" }, { t: "les gâteaux", k: "p", say: "les gâteaux" }
        ]
      }
    },
    {
      id: "g-chez",
      title: "Where you shop: [[à la boulangerie]] · [[chez le boulanger]]",
      body: [
        "Use [[à]] with a <b>place</b>, and [[chez]] with a <b>person</b>: [[Je vais à la poissonnerie.]] = [[Je vais chez le poissonnier.]] · [[Je vais chez Paula.]] (to Paula's house).",
        "Remember the fusions: <b>à + le = au</b> ([[au rayon fruits]]), <b>à + les = aux</b> ([[aux caisses]]); <b>à la</b> and <b>à l'</b> don't change ([[à la boucherie]], [[à l'entrée]]). <b>chez</b> never fuses: [[chez le boucher]].",
        "To say where you <b>come from</b>, use [[de]]: [[Je viens du marché.]] · [[Je viens de la boulangerie.]]",
        "On the plan below, you're at the entrance (red dot). Tap a step, then play <b>🎧 Où est-ce que j'arrive ?</b>"
      ],
      info: [
        { type: "merge", title: "🏪 à + a place · chez + a person", rows: [
          { a: "à", b: "le rayon", g: "m", r: "au", ex: "Je suis au rayon fruits.", en: "the fruit aisle" },
          { a: "à", b: "la poissonnerie", g: "f", r: "à la", ex: "Je vais à la poissonnerie.", no: true },
          { a: "à", b: "l'entrée", g: "x", r: "à l'", ex: "Le pain est à l'entrée.", no: true },
          { a: "à", b: "les caisses", g: "pl", r: "aux", ex: "Je paie aux caisses." },
          { a: "chez", b: "le boucher", g: "m", r: "chez le", ex: "Je vais chez le boucher.", en: "a person: no fusion", no: true }
        ] },
        { type: "map", title: "🛒 Plan du supermarché · from the entrance to the bakery", map: U03_SHOP,
          steps: [
            { mini: "toutdroit", fr: "Vous entrez et vous prenez l'allée centrale.", en: "Come in and take the central aisle." },
            { mini: "droite", fr: "Au premier carrefour, vous tournez à droite.", en: "At the first crossing, turn right." },
            { mini: "gauche", fr: "La boulangerie est là, à gauche, près de l'entrée.", en: "The bakery is there, on the left, near the entrance." }
          ],
          quiz: [
            { say: "Le lait et les œufs ? Au rayon des produits laitiers, au fond du magasin, à gauche.", answer: "laitiers", en: "Milk and eggs? In the dairy aisle, at the back of the shop, on the left." },
            { say: "Le poisson ? À la poissonnerie, à gauche, près de l'entrée.", answer: "poisson", en: "Fish? At the fish counter, on the left, near the entrance." },
            { say: "Le poulet ? Chez le boucher, au fond du magasin, à droite.", answer: "boucher", en: "Chicken? At the butcher's, at the back on the right." },
            { say: "Les jus de fruits ? Au rayon boissons, au milieu du magasin, à droite.", answer: "boissons", en: "Fruit juice? In the drinks aisle, in the middle of the shop, on the right." },
            { say: "Les tomates ? Au rayon fruits et légumes, au milieu du magasin, à gauche.", answer: "fruits", en: "Tomatoes? In fruit and veg, in the middle of the shop, on the left." },
            { say: "Pour payer ? Aux caisses, à droite de l'entrée.", answer: "caisses", en: "To pay? At the checkouts, to the right of the entrance." }
          ], note: "The entrance is at the bottom of the plan; “au fond” = at the back (the top of the plan)." }
      ],
      widget: {
        type: "sort", label: "à or chez? Sort the places and the people",
        cols: [{ k: "a", label: "à (un lieu)", color: "#2b59c3" }, { k: "chez", label: "chez (une personne)", color: "#e86a2e" }],
        items: [
          { t: "… la boulangerie", k: "a", say: "à la boulangerie" }, { t: "… le boulanger", k: "chez", say: "chez le boulanger" }, { t: "… marché", k: "a", say: "au marché" },
          { t: "… le fromager", k: "chez", say: "chez le fromager" }, { t: "… caisses", k: "a", say: "aux caisses" }, { t: "… Paula", k: "chez", say: "chez Paula" },
          { t: "… l'entrée", k: "a", say: "à l'entrée" }, { t: "… le médecin", k: "chez", say: "chez le médecin" }
        ]
      }
    },
    {
      id: "g-partitif",
      title: "Some, a little, a lot: [[du]], [[de la]], [[de l']], [[des]] · [[un peu de]], [[beaucoup de]]",
      body: [
        "When you can't count something (or don't want to), French uses the <b>partitive</b> article: [[du café]] (de + le), [[de la crème]], [[de l'eau]], [[des céréales]] (de + les). English often says <i>some</i> or nothing at all: [[Je bois du café.]] = I drink coffee.",
        "For a vague quantity: [[un peu de sel]] (a little), [[beaucoup de fraises]] (a lot). After these, just <b>de / d'</b>, no article.",
        "In the negative, everything becomes [[pas de]] / [[pas d']]: [[Il n'y a pas de sel et il n'y a pas d'huile dans la salade.]]"
      ],
      info: [
        { type: "merge", title: "⚗️ The partitive fusions", rows: [
          { a: "de", b: "le", g: "m", r: "du", ex: "du café", en: "(some) coffee" },
          { a: "de", b: "la", g: "f", r: "de la", ex: "de la mousse au chocolat", en: "(some) chocolate mousse", no: true },
          { a: "de", b: "l'", g: "x", r: "de l'", ex: "de l'huile", en: "(some) oil", no: true },
          { a: "de", b: "les", g: "pl", r: "des", ex: "des céréales", en: "(some) cereal" }
        ], note: "Negative: [[Je ne bois pas de café.]] · [[Il n'y a pas d'eau.]]" },
        { type: "scale", title: "🤏 → 🙌 How much?", colors: ["#fbe3de", "#0f7b6c"], items: [
          { v: 4, fr: "pas de sel", en: "no salt", pic: "🚫" }, { v: 30, fr: "un peu de sel", en: "a little salt", pic: "🧂" }, { v: 58, fr: "du sel", en: "(some) salt", pic: "🧂🧂" }, { v: 92, fr: "beaucoup de sel", en: "a lot of salt", pic: "🧂🧂🧂" }
        ], ends: ["rien", "beaucoup"] },
        { type: "card", style: "receipt", caption: "🎬 The video recipe: la tarte provençale (tap an ingredient)", title: "Tarte provençale", sub: "Pour 6 personnes · four à 200 °C · 35 minutes", rows: [["1 pâte", "", "une pâte"], ["2 courgettes · 2 tomates", "", "deux courgettes et deux tomates"], ["2 cuillères de moutarde", "", "deux cuillères de moutarde"], ["200 g de thon", "", "deux cents grammes de thon"], ["3 œufs", "", "trois œufs"], ["20 cl de crème fraîche", "", "vingt centilitres de crème fraîche"], ["20 g de fromage râpé", "", "vingt grammes de fromage râpé"]], foot: "g = gramme · cl = centilitre · °C = degré Celsius", note: "Recipe verbs: [[couper]] (to cut), [[mélanger]] (to mix), [[préchauffer]] (to preheat), [[faire bouillir]] (to boil), [[étaler]] (to spread). And with quantities: [[un peu de fromage]], [[beaucoup de crème]]." }
      ],
      widget: {
        type: "contract", label: "Breakfast order · « Je voudrais… » + a partitive (tap ➕ plural for things you count)",
        preps: [{ p: "de", label: "Je voudrais… (de)", frame: "Je voudrais" }, { p: "de", label: "Il y a… (de)", frame: "Il y a" }],
        nouns: [{ t: "café", g: "m", pic: "☕" }, { t: "thé", g: "m", pic: "🍵" }, { t: "lait", g: "m", pic: "🥛" }, { t: "confiture", g: "f", pic: "🍓" }, { t: "crème", g: "f", pic: "🍶" }, { t: "eau", g: "f", v: true, pic: "💧" }, { t: "huile", g: "f", v: true, pic: "🫒" }, { t: "croissant", g: "m", pic: "🥐" }, { t: "céréale", g: "f", pic: "🥣" }]
      }
    },
    {
      id: "g-en",
      title: "The pronoun [[en]]: [[Du sucre ? Oui, j'en veux.]]",
      body: [
        "[[en]] replaces a noun introduced by <b>du, de la, de l', des</b>, <b>un peu de</b>, <b>beaucoup de</b> or a number, so you don't repeat it: [[Vous voulez des tartes ? Oui, j'en veux.]]",
        "It goes <b>before the verb</b>: [[J'en mange beaucoup.]] In the negative: [[Je n'en veux pas.]] With a number, keep the number at the end: [[Vous en voulez combien ? J'en veux deux.]]"
      ],
      info: { type: "pattern", title: "🧩 Where does en go?", rows: [
        ["Tu veux", { opts: ["du sucre", "des tartes", "de l'eau"] }, "?"],
        ["Oui,", "j'", "en", "veux", "."],
        ["Non,", "je", "n'", "en", "veux", "pas", "."],
        ["J'", "en", "veux", { opts: ["deux", "un peu", "beaucoup"] }, "."]
      ], note: "en sits right before the verb, inside the negative sandwich: <b>je n'en veux pas</b>." },
      widget: {
        type: "combo", label: "Answer with en · pick a question and yes / no",
        rows: [{ k: "oui", label: "✅ oui" }, { k: "non", label: "❌ non" }, { k: "num", label: "🔢 a quantity" }],
        cols: [{ k: "sucre", label: "🍬 du sucre ?" }, { k: "jus", label: "🧃 du jus d'orange ?" }, { k: "tarte", label: "🍰 des tartes ?" }, { k: "salle", label: "🚪 une salle privée ?" }],
        out: {
          "oui|sucre": ["Oui, j'en veux.", "Yes, I want some.", "en = du sucre"], "non|sucre": ["Non, je n'en veux pas.", "No, I don't want any.", "n' + en + veux + pas"], "num|sucre": ["J'en veux deux morceaux.", "I want two lumps."],
          "oui|jus": ["Oui, j'en commande.", "Yes, I'm ordering some."], "non|jus": ["Non, je n'en commande pas.", "No, I'm not ordering any."], "num|jus": ["J'en commande un verre.", "I'm ordering a glass of it."],
          "oui|tarte": ["Oui, j'en veux !", "Yes, I want some!"], "non|tarte": ["Non merci, je n'en veux pas.", "No thanks, I don't want any."], "num|tarte": ["J'en veux dix, cent !", "I want ten, a hundred!"],
          "oui|salle": ["Oui, on en a une.", "Yes, we have one.", "with un/une: keep the number"], "non|salle": ["Non, on n'en a pas.", "No, we haven't got one."], "num|salle": ["On en a deux.", "We have two."]
        }
      }
    },
    {
      id: "g-verbes",
      title: "Four useful verbs: [[payer]], [[acheter]], [[faire]], [[manger]]",
      body: [
        "[[payer]] has two possible spellings: [[je paie]] or [[je paye]]. [[acheter]] takes an accent when the ending is silent: [[j'achète]] but [[nous achetons]]. [[manger]] keeps an <b>e</b> in [[nous mangeons]] so the g stays soft. And [[faire]] is irregular: [[nous faisons]], [[vous faites]], [[ils font]].",
        "[[faire les courses]] = to do the shopping · [[faire la cuisine]] = to cook."
      ],
      info: { type: "conj", title: "🔁 payer · acheter · faire · manger", verbs: [
        { inf: "payer", en: "to pay", forms: ["je paie / paye", "tu paies / payes", "il / elle paie / paye", "nous payons", "vous payez", "ils / elles paient / payent"] },
        { inf: "acheter", en: "to buy", forms: ["j'achète", "tu achètes", "il / elle achète", "nous achetons", "vous achetez", "ils / elles achètent"] },
        { inf: "faire", en: "to do, to make", forms: ["je fais", "tu fais", "il / elle fait", "nous faisons", "vous faites", "ils / elles font"] },
        { inf: "manger", en: "to eat", forms: ["je mange", "tu manges", "il / elle mange", "nous mangeons", "vous mangez", "ils / elles mangent"] }
      ], note: "[[nous faisons]] is pronounced <i>nou fe-ZON</i>, like a short <b>e</b>." }
    }
  ],

  expressions: [
    { fn: "Pour donner des horaires d'ouverture", fnEn: "opening hours", icon: "🕗", items: [
      ["Le marché ouvre à 9 heures.", "The market opens at 9.", "std", true],
      ["Le marché ferme à 20 heures.", "The market closes at 8 p.m.", "std"],
      ["C'est ouvert de 9 à 20 heures.", "It's open from 9 a.m. to 8 p.m.", "std", true],
      ["Vous êtes ouvert dimanche ?", "Are you open on Sunday?", "std"]
    ] },
    { fn: "Pour faire des courses · le marchand", fnEn: "what the stallholder says", icon: "🧑‍🌾", items: [
      ["C'est à qui ?", "Who's next?", "std", true],
      ["Qu'est-ce que je vous sers ?", "What can I get you?", "poli", true],
      ["Et avec ça ?", "Anything else?", "std"],
      ["Vous payez comment ?", "How are you paying?", "std", true]
    ], reply: ["C'est à moi !", "Par carte.", "En espèces."] },
    { fn: "Pour faire des courses · le client", fnEn: "what you say", icon: "🛒", items: [
      ["Des pommes, s'il vous plaît.", "Some apples, please.", "std"],
      ["Je voudrais un kilo de tomates.", "I'd like a kilo of tomatoes.", "poli", true],
      ["Est-ce que vous avez des fraises ?", "Do you have strawberries?", "std"],
      ["Combien coûte le raisin ?", "How much are the grapes?", "std", true],
      ["Ce sera tout.", "That'll be all.", "std"]
    ] },
    { fn: "Pour commander au restaurant, au café", fnEn: "ordering", icon: "🍽️", items: [
      ["Qu'est-ce que vous prenez ?", "What will you have? (waiter)", "std", true],
      ["Je peux prendre la commande ?", "Can I take your order? (waiter)", "poli"],
      ["Je voudrais un café et un verre d'eau.", "I'd like a coffee and a glass of water.", "poli", true],
      ["Pour moi, une formule.", "For me, a set menu.", "std"],
      ["Je prends un gazpacho. Et comme plat, le steak-frites.", "I'll have a gazpacho. And as a main, steak and chips.", "std"],
      ["Garçon, s'il vous plaît ! / Monsieur, s'il vous plaît !", "Waiter, please!", "std"],
      ["L'addition, s'il vous plaît !", "The bill, please!", "poli", true]
    ] },
    { fn: "Pour exprimer ses goûts", fnEn: "likes and dislikes", icon: "😋", items: [
      ["J'adore ! (++)", "I love it!", "std", true],
      ["J'aime bien. (+)", "I quite like it.", "std", true],
      ["Je n'aime pas. (−)", "I don't like it.", "std"],
      ["Je déteste. (−−)", "I hate it.", "std"],
      ["Quelle terrasse ! Génial !", "What a terrace! Great!", "fam"],
      ["Il est sympa ! C'est moche.", "He's nice! It's ugly.", "fam"]
    ] }
  ],
  flow: { type: "flow", title: "🗺️ Conversation map · at the market", lanes: ["Le marchand", "Le client"], av: ["m2", "f6"], steps: [
    { s: 0, fr: "Bonjour ! C'est à qui ?", en: "Hello! Who's next?" },
    { s: 1, fr: "C'est à moi ! Bonjour.", en: "It's me! Hello." },
    { s: 0, fr: "Qu'est-ce que je vous sers ?", en: "What can I get you?" },
    { s: 1, fr: "Je voudrais un kilo de pommes, s'il vous plaît.", en: "I'd like a kilo of apples, please.", alt: ["Des fraises, s'il vous plaît."] },
    { s: 0, fr: "Voilà. Et avec ça ?", en: "Here you are. Anything else?" },
    { s: 1, fr: "Ce sera tout. Ça fait combien ?", en: "That's all. How much is it?" },
    { s: 0, fr: "Trois euros vingt. Vous payez comment ?", en: "€3.20. How are you paying?" },
    { s: 1, fr: "En espèces. Voilà !", en: "Cash. Here you are!", alt: ["Par carte."] }
  ] },

  sounds: {
    intro: "French spelling has many letters you don't hear at the end of words. Learn which ones are silent and which ones you say.",
    letters: [
      { l: "-e", name: "final e: silent", tip: "A final <b>e</b> without an accent is not pronounced: [[dimanche]], [[pâtisserie]], [[chèque]]. But it makes you <b>hear</b> the consonant before it: <i>chinoi<b>s</b>e</i>.", ex: ["dimanche", "une pâtisserie", "un chèque", "la viande"] },
      { l: "-é", name: "final é: pronounced", tip: "With an accent, the final <b>é</b> is always said: [[surgelé]], [[supermarché]], [[café]], [[thé]].", ex: ["un supermarché", "surgelé", "le café", "le thé"] },
      { l: "-t -s -x -p -d", name: "silent final consonants", tip: "Usually silent: [[le lait]], [[le repas]], [[le prix]], [[le sirop]], [[le plat]].", ex: ["le repas", "le plat", "le prix", "le sirop"] },
      { l: "c r f l", name: "careful: often pronounced", tip: "Remember the English word <b>CaReFuL</b>: final <b>c, r, f, l</b> are usually heard: [[le Québec]], [[le serveur]], [[du bœuf]], [[du sel]]. (Except -er verbs and words: [[boulanger]].)", ex: ["le Québec", "le serveur", "du bœuf", "du sel"] },
      { l: "-er -et -ez", name: "= [e]", tip: "At the end of a word, <b>-er, -et, -ez</b> all sound like <b>é</b>: [[boulanger]], [[un billet]], [[vous payez]].", ex: ["le boulanger", "un billet", "vous payez", "le poulet"] }
    ],
    pairs: [
      { a: ["un œuf", "an egg"], b: ["des œufs", "eggs"], note: "[œf] / [ø]: the f disappears!" },
      { a: ["le citron", "the lemon"], b: ["les citrons", "the lemons"], note: "only the article changes" },
      { a: ["du café", "coffee"], b: ["de la crème", "cream"], note: "du / de la" },
      { a: ["le poisson", "fish"], b: ["le poison", "poison"], note: "ss [s] / s [z]" },
      { a: ["j'achète", "I buy"], b: ["nous achetons", "we buy"], note: "è / e" },
      { a: ["le dessert", "dessert"], b: ["le désert", "the desert"], note: "[s] / [z]" }
    ]
  },
  classify: {
    label: "🧑‍🌾 Marchand ou client ?", q: "Who says this: the shopkeeper / waiter, or the customer?",
    options: ["le marchand / le serveur", "le client / la cliente"],
    items: [
      { say: "Qu'est-ce que je vous sers ?", a: 0 }, { say: "C'est à qui ?", a: 0 }, { say: "Je voudrais un kilo de tomates.", a: 1 }, { say: "Vous payez comment ?", a: 0 },
      { say: "Combien coûte le raisin ?", a: 1 }, { say: "Ce sera tout.", a: 1 }, { say: "Je peux prendre la commande ?", a: 0 }, { say: "L'addition, s'il vous plaît !", a: 1 },
      { say: "Et comme boisson ?", a: 0 }, { say: "Pour moi, la formule à quinze euros.", a: 1 }, { say: "Vous en voulez combien ?", a: 0 }, { say: "Gardez la monnaie !", a: 1 }
    ]
  },

  practice: [
    { type: "tf", tag: "Dialogue 1", s: "Madame Petit achète des fraises.", ok: true, explain: "[[deux barquettes de fraises]]" },
    { type: "tf", tag: "Dialogue 1", s: "Elle paie en espèces.", ok: false, explain: "[[Par carte bancaire.]]" },
    { type: "tf", tag: "Dialogue 1", s: "Le marché est ouvert le lundi.", ok: false, explain: "vendredi, samedi, dimanche" },
    { type: "tf", tag: "Dialogue 2", s: "Les œufs sont au rayon des produits laitiers.", ok: true },
    { type: "tf", tag: "Dialogue 2", s: "Le pain est au fond du magasin.", ok: false, explain: "[[À la boulangerie, à l'entrée du magasin.]]" },
    { type: "mcq", tag: "Dialogue 3", q: "Qu'est-ce que c'est, le plat du jour ?", options: ["du poulet avec des frites", "un steak-frites", "une soupe de légumes"], answer: 0 },
    { type: "mcq", tag: "Dialogue 3", q: "Combien coûte le repas au total ?", options: ["30 €", "32 €", "35 €"], answer: 1, explain: "2 × 15 € + 2 € = 32 €. Paul leaves 3 € as a tip." },
    { type: "tf", tag: "Dialogue 4", s: "Il y a de la mousse au chocolat aujourd'hui.", ok: false, explain: "[[nous n'en avons pas aujourd'hui]]" },
    { type: "tf", tag: "Dialogue 5", s: "Juliette adore les escargots.", ok: false, explain: "[[Je déteste les escargots !]]" },
    { type: "fill", tag: "à / chez", sentence: "Julien va ___ boulangerie.", options: ["au", "à la", "chez la"], answer: 1 },
    { type: "fill", tag: "à / chez", sentence: "Je vais ___ boucher pour la viande.", options: ["au", "à le", "chez le"], answer: 2, explain: "a person → [[chez le boucher]]" },
    { type: "fill", tag: "à / chez", sentence: "J'achète les fruits ___ marché.", options: ["au", "à la", "chez le"], answer: 0 },
    { type: "fill", tag: "à / chez", sentence: "Je vais ___ caisses pour payer.", options: ["à les", "aux", "au"], answer: 1 },
    { type: "fill", tag: "à / chez", sentence: "Les fruits sont ___ entrée du magasin.", options: ["à l'", "au", "à la"], answer: 0 },
    { type: "fill", tag: "Partitifs", sentence: "Un café crème, c'est ___ café et ___ lait.", options: ["du … du", "de la … du", "des … de"], answer: 0 },
    { type: "fill", tag: "Partitifs", sentence: "Ce midi, on mange ___ poisson et ___ frites !", options: ["du … des", "de la … du", "du … de la"], answer: 0 },
    { type: "fill", tag: "Partitifs", sentence: "Tu vas acheter ___ viande ?", options: ["du", "de la", "des"], answer: 1 },
    { type: "fill", tag: "Partitifs", sentence: "Tu peux acheter ___ huile, s'il te plaît ?", options: ["du", "de la", "de l'"], answer: 2 },
    { type: "fill", tag: "Partitifs", sentence: "Il n'y a pas ___ sel dans la salade.", options: ["de", "du", "le"], answer: 0, explain: "negative → [[pas de]]" },
    { type: "fill", tag: "Partitifs", sentence: "Dans le gazpacho, il y a beaucoup ___ tomates.", options: ["des", "de", "les"], answer: 1, explain: "[[beaucoup de]] + noun, no article" },
    { type: "fill", tag: "Quantités", sentence: "Je voudrais une ___ de lait.", options: ["bouteille", "barquette", "tranche"], answer: 0 },
    { type: "fill", tag: "Quantités", sentence: "Une ___ de gâteau, s'il vous plaît.", options: ["part", "kilo", "bouteille"], answer: 0 },
    { type: "type", tag: "Le pronom en", q: "Answer with en: « Tu veux du sucre ? » — Non, …", answers: ["Non, je n'en veux pas.", "je n'en veux pas", "Non, je n'en veux pas"], explain: "[[Je n'en veux pas.]]" },
    { type: "type", tag: "Le pronom en", q: "Answer with en: « Tu commandes du jus d'orange ? » — Oui, …", answers: ["Oui, j'en commande.", "j'en commande", "Oui, j'en commande"] },
    { type: "type", tag: "Le pronom en", q: "Answer with en: « Vous voulez du café ? » — Oui, …", answers: ["Oui, j'en veux.", "j'en veux", "Oui, nous en voulons.", "Oui, j'en veux"] },
    { type: "order", tag: "Le pronom en", en: "I eat a lot of it.", words: ["J'", "en", "mange", "beaucoup."] },
    { type: "fill", tag: "Verbes", sentence: "Nous ___ les courses le samedi.", options: ["faisons", "faites", "font"], answer: 0 },
    { type: "fill", tag: "Verbes", sentence: "Ils ___ par carte.", options: ["paient", "payez", "paie"], answer: 0 },
    { type: "fill", tag: "Verbes", sentence: "Nous ___ au restaurant ce soir.", options: ["mangons", "mangeons", "mangez"], answer: 1 },
    { type: "fill", tag: "Verbes", sentence: "J'___ du pain tous les jours.", options: ["achete", "achète", "achetons"], answer: 1 },
    { type: "mcq", tag: "Vocabulaire", q: "Trouvez l'intrus :", options: ["un verre", "une fourchette", "une assiette", "un pourboire"], answer: 3, explain: "un pourboire is money for the waiter; the rest is la vaisselle." },
    { type: "mcq", tag: "Vocabulaire", q: "Le contraire de « poli », c'est…", options: ["malpoli", "moche", "mauvais"], answer: 0, sayAnswer: true },
    { type: "mcq", tag: "Vocabulaire", q: "Le pourboire, c'est…", options: ["de l'argent pour le serveur", "une boisson", "le plat du jour"], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Qu'est-ce que je vous sers ?", options: ["Un kilo de pommes, s'il vous plaît.", "C'est à moi.", "Gardez la monnaie."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Vous payez comment ?", options: ["Par carte bancaire.", "Très bien, merci.", "Le samedi."], answer: 0 },
    { type: "reply", tag: "Que répondre ?", prompt: "Et comme boisson ?", options: ["Une carafe d'eau, s'il vous plaît.", "La formule à quinze euros.", "L'addition !"], answer: 0 },
    { type: "listen", tag: "Écoute", q: "When is it open?", say: "C'est ouvert de neuf heures à vingt heures.", options: ["9 h – 20 h", "9 h – 12 h", "8 h – 20 h"], answer: 0 }
  ],

  roleplays: [
    { title: "🧺 Au marché", brief: "Buy the things on your list from the stallholder, ask a price and pay.", memo: ["5 pommes", "3 poivrons", "2 salades", "1 bouteille de lait"], partner: "m2", you: "f6",
      turns: [
        { them: "Bonjour ! C'est à qui ?", themEn: "Hello! Who's next?", hint: "Say it's your turn, and hello.", you: "C'est à moi ! Bonjour, monsieur.", youEn: "It's me! Hello." },
        { them: "Qu'est-ce que je vous sers ?", themEn: "What can I get you?", hint: "Ask for 5 apples and 3 peppers.", you: "Je voudrais cinq pommes et trois poivrons, s'il vous plaît.", youEn: "I'd like five apples and three peppers, please." },
        { them: "Voilà. Et avec ça ?", themEn: "There you are. Anything else?", hint: "Ask for 2 lettuces and ask the price of the milk.", you: "Deux salades. Et combien coûte la bouteille de lait ?", youEn: "Two lettuces. And how much is the bottle of milk?" },
        { them: "Un euro vingt. Vous payez comment ?", themEn: "€1.20. How are you paying?", hint: "Take one, and pay in cash.", you: "J'en prends une. En espèces, voilà !", youEn: "I'll take one. Cash, here you are!" }
      ] },
    { title: "🍽️ Au restaurant", brief: "Have lunch in a bistro: choose a set menu, order a drink, then ask for the bill.", memo: ["formule entrée + plat 15 €", "plat du jour ?", "carafe d'eau", "l'addition"], partner: "m7", you: "f2",
      turns: [
        { them: "Bonjour ! Vous avez choisi ?", themEn: "Hello! Have you chosen?", hint: "Ask what the dish of the day is.", you: "Oui. Qu'est-ce que c'est, le plat du jour ?", youEn: "Yes. What's the dish of the day?" },
        { them: "C'est du poisson avec du riz.", themEn: "It's fish with rice.", hint: "Take the set menu (starter + main) with the dish of the day.", you: "Alors pour moi, la formule entrée-plat avec le plat du jour.", youEn: "Then for me, the starter and main set menu with the dish of the day." },
        { them: "Et comme boisson ?", themEn: "And to drink?", hint: "A jug of water.", you: "Une carafe d'eau, s'il vous plaît.", youEn: "A jug of water, please." },
        { them: "… Vous désirez autre chose ?", themEn: "… Anything else?", hint: "No thanks: ask for the bill.", you: "Non merci. L'addition, s'il vous plaît !", youEn: "No thanks. The bill, please!" }
      ] },
    { title: "☕ Au café · J'en veux !", brief: "Ask the waitress what they have, and answer her questions with [[en]].", memo: ["de la mousse ?", "des tartes ?", "du sucre ? → en"], partner: "f1", you: "f7",
      turns: [
        { them: "Bonjour ! Qu'est-ce que vous prenez ?", themEn: "Hello! What will you have?", hint: "Ask if they have chocolate mousse.", you: "Bonjour ! Vous avez de la mousse au chocolat ?", youEn: "Hello! Do you have chocolate mousse?" },
        { them: "Oui ! Vous en voulez une ?", themEn: "Yes! Do you want one?", hint: "Yes, you want one, with [[en]].", you: "Oui, j'en veux une, s'il vous plaît.", youEn: "Yes, I'd like one, please." },
        { them: "Et un café ? Avec du sucre ?", themEn: "And a coffee? With sugar?", hint: "Yes to coffee, no to sugar (with [[en]]).", you: "Un café, oui, mais je n'en veux pas, merci.", youEn: "A coffee, yes, but I don't want any sugar, thanks." }
      ] }
  ],

  ateliers: [
    { title: "Créer la carte d'un bar à jus", intro: "In groups, invent fruit or vegetable juice recipes, put them on a menu, then turn the class into a juice bar.",
      steps: [["Préparation", ["Choose ingredients for a juice: [[des pommes]], [[des poires]], [[du gingembre]]…", "Give your recipe a name: <i>Le jus de l'été !</i>"]], ["Réalisation", ["Write the ingredients with quantities: [[deux pommes, trois poires, cent grammes de sucre]].", "Explain the steps with infinitives: [[Couper les pommes.]] [[Mélanger.]]"]], ["Présentation", ["Put all the recipes on one menu with prices.", "Role-play: 2 or 3 waiters, the others are customers. Ask questions, order, choose how to pay.", "Don't forget the politeness formulas!"]]],
      phrases: ["Qu'est-ce qu'il y a dans… ?", "Je voudrais un jus de l'été.", "Vous payez comment ?"],
      model: { type: "card", style: "menu", title: "Le Bar à Jus", sub: "fait maison · 100 % fruits", rows: [["Le jus de l'été · fraises, orange, citron", "4,50 €", "Le jus de l'été : des fraises, une orange, un citron. Quatre euros cinquante."], ["Le Vert · pomme, concombre, menthe", "4 €", "Le Vert : une pomme, du concombre, de la menthe."], ["Le Tropical · ananas, banane, mangue", "5 €", "Le Tropical : de l'ananas, de la banane, de la mangue."], ["Le Doux · carotte, orange, gingembre", "4 €", "Le Doux : des carottes, une orange, un peu de gingembre."]], foot: "Carte bancaire acceptée · Paiement en espèces" } },
    { title: "Créer un album de selfies avec des commerçants", tech: true, intro: "Make an online photo album of the shopkeepers in your neighbourhood.",
      steps: [["Préparation", ["Take selfies in front of the shops you usually go to.", "Ask the shopkeepers if they'd like to be in the photo: [[On peut faire une photo ensemble ?]]"]], ["Réalisation", ["Put the photos in an online album.", "Write a short caption: where you are, what you buy, what you like: [[Ici, je suis chez le fromager. J'adore le comté !]]"]], ["Présentation", ["Vote for the best photos!"]]],
      phrases: ["On peut faire une photo ?", "Je suis chez…", "J'achète du / de la…"] }
  ],
  detente: {
    title: "Les spécialités régionales · Which region?",
    intro: "Every French region has its speciality. Find where each dish comes from.",
    items: [
      { type: "mcq", q: "la quiche lorraine", options: ["la Lorraine", "la Provence", "la Bretagne"], answer: 0 },
      { type: "mcq", q: "la choucroute", options: ["l'Alsace", "la Savoie", "la Provence"], answer: 0 },
      { type: "mcq", q: "la ratatouille", options: ["la Provence", "la Bretagne", "l'Alsace"], answer: 0 },
      { type: "mcq", q: "la fondue et la raclette", options: ["la Savoie", "la Lorraine", "la Bretagne"], answer: 0 },
      { type: "mcq", q: "les crêpes et les galettes", options: ["la Bretagne", "la Provence", "la Savoie"], answer: 0 },
      { type: "mcq", q: "les escargots", options: ["la Bourgogne", "la Bretagne", "l'Alsace"], answer: 0 },
      { type: "mcq", q: "la poutine", options: ["le Québec", "la Belgique", "la Suisse"], answer: 0, explain: "Not French at all: it's from Québec!" }
    ]
  },

  cultureInfo: [
    { type: "compare", title: "🍽️ Qu'est-ce que vous mangez ? France et Québec", cols: [
      { head: "France", en: "spécialités", color: "#2b59c3", pic: "🥐", lines: [["la tarte Tatin", "des pommes, du beurre, du sucre"], ["les escargots de Bourgogne", "des escargots, de l'ail, du persil"], ["la quiche lorraine", "des œufs, de la crème, des lardons"]] },
      { head: "Québec", en: "spécialités", color: "#e0474f", pic: "🍁", lines: [["la tire d'érable", "du sirop d'érable chaud sur la neige"], ["la poutine", "des frites, du fromage en grains, de la sauce"], ["le pouding chômeur", "un gâteau au sirop d'érable"]] }
    ] },
    { type: "bars", title: "⏱️ Les Français à table (figures quoted in the book)", items: [
      { fr: "minutes à table par jour (Insee, 2012)", en: "about 2 h 22 min a day at the table", v: 142, pic: "🍽️" },
      { fr: "% mangent un sandwich au travail à midi", en: "eat a sandwich at work at lunchtime", v: 70, pic: "🥪" }
    ] }
  ],
  culture: [
    { icon: "🍷", kind: "Oh, le cliché !", t: "« En France, les repas sont importants ! »", d: "True: the French spend about <b>2 hours 22 minutes</b> a day at the table (Insee, 2012), and the long Sunday lunch with the family is a tradition. But <b>70 %</b> of French people also eat a quick sandwich at lunchtime at work!" },
    { icon: "💧", kind: "Au fait !", t: "[[Une carafe d'eau, s'il vous plaît !]]", d: "In French cafés, bars and restaurants, a jug of tap water is <b>free</b>. Just ask for it." },
    { icon: "🪙", kind: "Civilisation", t: "Le pourboire", d: "In France, service is included in the price (<i>service compris</i>). A tip is not compulsory: people leave a few coins if they're happy. In Québec, a tip of about 15 % or more is expected." },
    { icon: "🍁", kind: "Francophonie", t: "Des spécialités québécoises", d: "<b>La poutine</b> (chips, cheese curds and gravy), <b>la tourtière</b> (meat pie), <b>le pouding chômeur</b> and <b>la tire d'érable</b>: hot maple syrup poured on snow and rolled on a stick, at the <i>cabane à sucre</i> in spring." },
    { icon: "🏷️", kind: "Au fait !", t: "Reading a label", d: "On a food label you'll find the name of the product, the price per kilo (<i>prix €/kg</i>), the price to pay (<i>prix à payer</i>) and the use-by date: <b>à consommer jusqu'au…</b>" },
    { icon: "🧺", kind: "Civilisation", t: "Le marché", d: "Almost every French town has an open-air market once or twice a week, often in the morning only. You can talk to the producers, taste, and buy local seasonal products." },
    { icon: "🌡️", kind: "Au fait !", t: "°C or °F?", d: "France measures oven and weather temperatures in degrees Celsius (°C). In a Québec recipe you may also find degrees Fahrenheit (°F)." }
  ],
  tips: [
    { icon: "🧮", t: "Can you count it?", d: "If you can count it, use un / une / des: [[une pomme]], [[des œufs]]. If you can't, use du / de la / de l': [[du sel]], [[de l'eau]]." },
    { icon: "🔁", t: "en saves time", d: "Whenever you hear <i>du, de la, des</i> in a question, answer with en: [[Du pain ? J'en ai.]]" },
    { icon: "🎵", t: "The CaReFuL rule", d: "Final c, r, f, l are usually pronounced: <i>avec, le serveur, neuf, le sel</i>. Most other final consonants are silent." }
  ],
  mistakes: [
    ["Je voudrais un kilo des pommes.", "Je voudrais un kilo de pommes.", "quantity + de"],
    ["Je vais à le boucher.", "Je vais chez le boucher.", "a person → chez"],
    ["Je bois café.", "Je bois du café.", "partitive needed"],
    ["Il n'y a pas du sel.", "Il n'y a pas de sel.", "negative → pas de"],
    ["J'ai beaucoup des fraises.", "J'ai beaucoup de fraises.", "beaucoup de"],
    ["Je veux en.", "J'en veux.", "en before the verb"],
    ["Nous mangons.", "Nous mangeons.", "keep the e"],
    ["L'addition, s'il te plaît ! (to the waiter)", "L'addition, s'il vous plaît !", "vous with the waiter"]
  ]
});
