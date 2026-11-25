# Édito A1: interactive course

Interactive lessons for **Édito A1, méthode de français** (Didier, 2016): 13 units (0–12), each built around a theme with its communication goals, grammar, vocabulary, pronunciation and civilisation pages, from *Bonjour !* to the DELF A1.

The book's themes, situations, grammar points and vocabulary are followed unit by unit. The dialogues, explanations, illustrations and activities are original, so the book's text, recordings and answer key are not reproduced.

## What's in each unit

| Tab | What you do |
|---|---|
| 🏠 Aperçu | The unit's opening phrase, its situations, goals, an at-a-glance card and your progress |
| 💬 Dialogues | Illustrated scenes (the speaker animates as each line plays), with audio and translations. **▶ Play** · **🔁 Shadow** (pauses so you can repeat) · **🎭 Be…** (take one role: the course plays the other part and waits for you) · **🙈 Hide text** (listening test) |
| 🗂️ Vocabulaire | A colour-coded **picture dictionary** (blue masculine, pink feminine, purple plural), a list with say-it hints, and flashcards in both directions with spaced repetition |
| 🧩 Grammaire | Rules with **infographics** (gender columns, fusion equations, conjugation grids with quiz-me, drawn flags with prepositions, interactive **street plans** with an animated route and a *“where do I arrive?”* listening game, a **transit diagram**, survey **bar charts**, number tiles, the alphabet, a season calendar, a past–present–future timeline, scales, SMS threads, ID cards and forms, receipts, menus and labels) and **builders** (sorting games, sentence combos, agreement builder, partitive builder, number / price / date / clock trainers, a spelling machine) |
| 🗨️ Pour communiquer | The book's *Pour…* boxes: key phrases grouped by function, with register badges (poli / courant / familier / soutenu), plus a two-lane **conversation map** |
| 🗣️ Prononciation | Sound cards, minimal pairs, a "which did you hear?" game and a recorder |
| 🎧 Écoute | Listening quizzes on words and dialogue lines, *masculin ou féminin ?*, a unit-specific ear game, and dictation |
| ✍️ Activités | Book-style activities: vrai ou faux, complétez, choisissez, trouvez la question, remettez dans l'ordre, associez, typed answers (with é è ê à ç… buttons; missing accents are accepted but flagged) |
| 🎭 Jeu de rôle | Guided role-plays with memo notes and model answers |
| 🛠️ Ateliers & DELF | The unit's two **ateliers** (projects, including the *atelier tech'*), a **DELF A1** practice task with strategies, and the **détente** game |
| 🇫🇷 Civilisation | The civilisation page, **Oh, le cliché !**, **Francophonie** and **Au fait !** notes, memory tips and a *ne dites pas… dites* list |
| 🔁 Révision | Progress, and the words due for review |

The chips at the top of every page show or hide the English and the say-it hints, switch the gender colours on and off, and change the audio speed. Audio comes from the browser's French text-to-speech voice. Progress is saved in your browser's localStorage.

Every two units, an **étape test** has a 📘 **Bilan** (fixed 40-point test with a DELF-style reading task and explanations), a 🎯 **Mastery test** (about 30 new randomised questions each time) and 📈 **Résultats** (history, best scores, units to revise).

## Use it

Enable **GitHub Pages**: Settings → Pages → Deploy from a branch → `main`, folder `/docs`.
Then open `https://humanshado.github.io/FrenchDialogues/`. You can also open `docs/index.html` locally.

## Structure

```
src/engine.js          lesson engine (all tabs, quizzes, widgets, infographics, tests)
src/art.js             SVG illustration library: characters (adults and children), 25 scene backdrops,
                       drawn flags, street plans with routes, transit diagrams, mini-diagrams, clock, money
src/style.css          shared styles
src/lessons/u00.js     unit content (one file per unit)
src/tests/e1-test.js   étape tests (e1 = units 0–2, e2 = units 3–4…)
tools/check.js         content checker (answer indexes, missing fields, map quiz targets, duplicates…)
build.py               builds docs/ (site + course home) or dist/ (--standalone pages)
docs/                  built site served by GitHub Pages
```

## Add a unit

1. Copy `src/lessons/u04.js` to `src/lessons/u05.js` and replace the content: `dialogues` (each with a `scene` from `art.js`, `people` and an optional `staff`), `vocab` (with `g: "m" | "f" | "pl"` for nouns), `grammar` (`body`, `info` infographics, `widget` builders), `expressions`, `flow`, `sounds`, `classify`, `practice`, `roleplays`, `ateliers`, `delf`, `detente`, `culture`, `cultureInfo`, `tips`, `mistakes`.
2. Run `node tools/check.js`, then `python3 build.py`. The unit replaces its "coming soon" card on the course home.

Scenes in `art.js`: appartement, aeroport, plage, fete, spectacle, classe, train, ville, rue, metro, arret, montreal, marche, supermarche, restaurant, cafe, boulangerie, epicerie, poissonnerie, fleuriste, grandmagasin, vetements, chaussures, objets, poste, gare, hotel, maison, bureau, papeterie. Infographic types: `gender`, `merge`, `conj`, `pics`, `compare`, `card`, `minis`, `pattern`, `scale`, `ladder`, `flow`, `map`, `metro`, `bars`, `numbers`, `alphabet`, `calendar`, `timeline`, `flags`, `sms`, `form`, `tree` (family tree), `agenda` (day planner with clocks), `floorplan` (flat plan with a find-the-object game), `signs` (rule pictograms), `postcard`, `etrehouse` (la maison d'être). Widgets: `sort`, `combo`, `agree`, `contract`, `numbers`, `prices`, `clock`, `date`, `spell`, `clock12` (everyday time: *moins le quart*).

## Progress

- [x] Étape 1 · Premiers contacts: Unité 0 *Bienvenue !*, Unité 1 *Et vous ?*, Unité 2 *On va où ?* (book pp. 12–46) + bilan
- [x] Étape 2 · Consommer: Unité 3 *Qu'est-ce qu'on mange ?*, Unité 4 *Les soldes, c'est parti !* (book pp. 47–74) + bilan
- [x] Étape 3 · Le quotidien: Unité 5 *C'est quoi le programme ?*, Unité 6 *Félicitations !* (book pp. 75–102) + bilan
- [x] Étape 4 · Chez soi, en voyage: Unité 7 *Chez moi*, Unité 8 *Bonnes vacances !* (book pp. 103–130) + bilan
- [ ] Étape 5 · Santé, études, travail: Unités 9–10
- [ ] Étape 6 · Nature et projets: Unités 11–12

So far: 44 dialogues, 597 words, 323 activities, 4 étape tests.

## Notes

Figures quoted from the book (survey percentages, OIF numbers) are given with their source and date; some have changed since 2016.
