#!/usr/bin/env python3
"""Build the Édito A1 interactive course: one self-contained HTML page per unit and test, plus the course home page.

    python3 build.py              -> docs/  (GitHub Pages site)
    python3 build.py --standalone -> dist/  (pages with no link back to the course home)

Each unit lives in src/lessons/uNN.js and calls LESSONS.push({...}).
Each étape test lives in src/tests/eN-test.js and sets window.TEST = {...}.
"""
import json, sys, html, pathlib, subprocess

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
standalone = "--standalone" in sys.argv
OUT = ROOT / ("dist" if standalone else "docs")
OUT.mkdir(exist_ok=True)

css = (SRC / "style.css").read_text(encoding="utf-8")
art = (SRC / "art.js").read_text(encoding="utf-8")
engine = (SRC / "engine.js").read_text(encoding="utf-8")

# units are grouped in "étapes" of two (the book puts a DELF page after every second unit)
ETAPES = {1: ("Premiers contacts", "First contacts", [0, 1, 2]), 2: ("Consommer", "Food and shopping", [3, 4]), 3: ("Le quotidien", "Daily life and family", [5, 6]),
          4: ("Chez soi, en voyage", "Home and travel", [7, 8]), 5: ("Santé, études, travail", "Health, study, work", [9, 10]), 6: ("Nature et projets", "Nature and plans", [11, 12])}
UCOL = ["#c2508e", "#4f9d4f", "#9b4fb0", "#7d9a2e", "#e0474f", "#2f9c8a", "#e86a2e", "#4f9d4f", "#9b4fb0", "#7d9a2e", "#e0474f", "#2f9c8a", "#e86a2e"]
# the book's table of contents: (unit, French title, English title, situations, communication, grammar, pages, DELF page after it)
TOC = [
    (0, "Bienvenue !", "Welcome!", "Découverte du français · Premiers contacts · La langue de la classe", "saluer, épeler, compter, dire la date", "les pronoms sujets · tu / vous", "pp. 12–18", None),
    (1, "Et vous ?", "And you?", "Faire connaissance dans un train · Rencontrer des francophones", "se présenter · informations personnelles · coordonnées", "adjectifs de nationalité · le, la, l', les · à / au / en / aux · la négation · avoir, s'appeler, être", "pp. 19–32", None),
    (2, "On va où ?", "Where are we going?", "Présenter une ville · Se déplacer dans la ville", "demander / indiquer le chemin · métro, bus", "articles définis et indéfinis · verbes en -er · quel · professions · aller, prendre, descendre", "pp. 33–46", "Compréhension des écrits"),
    (3, "Qu'est-ce qu'on mange ?", "What are we eating?", "Faire des courses au marché, au supermarché · Commander au restaurant", "horaires · faire les courses · commander · goûts", "pluriel des noms · prépositions de lieu · partitifs · le pronom en · payer, acheter, faire, manger", "pp. 47–60", None),
    (4, "Les soldes, c'est parti !", "The sales are on!", "Faire des achats dans un grand magasin · Le service des objets trouvés", "vêtements · météo · décrire un objet · prix", "adjectifs · futur proche · passé récent · démonstratifs · venir", "pp. 61–74", "Compréhension de l'oral"),
    (5, "C'est quoi le programme ?", "What's the plan?", "Raconter sa journée · Sortir entre amis", "activités quotidiennes · l'heure · proposer, accepter, refuser", "verbes pronominaux · fréquence · impératif · pouvoir, vouloir", "pp. 75–88", None),
    (6, "Félicitations !", "Congratulations!", "Parler de sa famille · Raconter une rencontre", "arbre généalogique · féliciter · décrire une personne", "possessifs · passé composé (avoir) · c'est / il est", "pp. 89–102", "Production écrite"),
    (7, "Chez moi", "At home", "Emménager dans un appartement · Contacter un professionnel", "état des lieux · règlement · problème domestique", "pronoms COD · prépositions de lieu · obligation / interdiction · y", "pp. 103–116", None),
    (8, "Bonnes vacances !", "Happy holidays!", "Organiser un voyage · Parler de ses vacances", "réserver en ligne · préférence · carte postale · émotions", "comparaison · verbes en -ir · passé composé (être) · c'était, il y avait", "pp. 117–130", "Production écrite"),
    (9, "Pas de chance !", "Bad luck!", "Raconter des événements · Santé et urgences", "se plaindre · expliquer · dire comment on se sent", "passé composé pronominal · falloir, devoir · lui / leur · le conseil", "pp. 131–144", None),
    (10, "Beau travail !", "Good work!", "L'université et l'entreprise · Études et emploi", "expérience · but · souhait · compétences", "si + présent · durée · qui / que · intensité", "pp. 145–158", "Production orale"),
    (11, "Au grand air", "In the open air", "La ville et la campagne · Changer de vie", "insatisfaction · choix de vie · mode de vie", "comparaison (2, 3) · y · articles contractés", "pp. 159–172", None),
    (12, "C'était bien ?", "Was it good?", "Parler de ses difficultés · Projets", "encourager · accord / désaccord · intérêt", "COD / COI · les temps (rappel)", "pp. 173–186", "Épreuve blanche"),
]


def page(title, body, lang="en"):
    return f"""<!DOCTYPE html>
<html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(title)}</title><style>{css}</style></head>
<body>{body}</body></html>
"""


def node_json(js):
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)


def lesson_meta(path):
    js = (f"global.window=global;global.LESSONS=[];{path.read_text(encoding='utf-8')};const l=LESSONS[0];const h=l.hero||l.dialogues[0];"
          "console.log(JSON.stringify({id:l.id,rubrique:l.rubrique,num:l.num,title:l.title,titleFr:l.titleFr,pages:l.pages,"
          "scene:{scene:h.scene,people:h.people,staff:h.staff,wave:h.wave,sit:h.sit,title:l.titleFr},"
          "nv:l.vocab.length,nq:l.practice.length,nd:l.dialogues.length}))")
    return node_json(js)


def test_meta(path):
    js = f"global.window={{}};{path.read_text(encoding='utf-8')};const t=window.TEST;console.log(JSON.stringify({{id:t.id,rubrique:t.rubrique,after:t.after,title:t.title,titleFr:t.titleFr,pages:t.pages,covers:t.covers}}))"
    return node_json(js)


home = "" if standalone else 'window.COURSE_HOME="index.html";'
lessons, lesson_files = {}, {f.stem: f for f in (SRC / "lessons").glob("*.js")}
for f in sorted(lesson_files.values()):
    m = lesson_meta(f); lessons[m["num"]] = m
    scripts = f"<script>window.LESSONS=[];{home}</script><script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{m['id']}.html").write_text(page(f"Unité {m['num']} · {m['titleFr']} · Édito A1", scripts), encoding="utf-8")
    print("built", OUT / f"{m['id']}.html")

# Révisions page: every unit's vocabulary, grammar, expressions and common mistakes, searchable and printable
if not standalone:
    allu = "".join(f"<script>{f.read_text(encoding='utf-8')}</script>" for f in sorted(lesson_files.values()))
    rev = (SRC / "revision.js").read_text(encoding="utf-8")
    (OUT / "revision.html").write_text(page("Révisions · Édito A1", f"<script>window.LESSONS=[];{home}window.UCOL={json.dumps(UCOL)};</script>{allu}<script>{rev}</script>"), encoding="utf-8")
    print("built", OUT / "revision.html")

tests = []
for f in sorted((SRC / "tests").glob("*.js")) if (SRC / "tests").exists() else []:
    t = test_meta(f); tests.append(t)
    covered = "".join(f"<script>{lesson_files[c].read_text(encoding='utf-8')}</script>" for c in t["covers"])
    scripts = f"<script>window.LESSONS=[];{home}</script>{covered}<script>{f.read_text(encoding='utf-8')}</script><script>{art}</script><script>{engine}</script>"
    (OUT / f"{t['id']}.html").write_text(page(f"{t['title']} · Édito A1", scripts), encoding="utf-8")
    print("built", OUT / f"{t['id']}.html")

if not standalone:
    parts = []
    for e, (efr, een, units) in ETAPES.items():
        cards = []
        for (n, tfr, ten, sit, comm, gram, pages, delf) in [c for c in TOC if c[0] in units]:
            col = UCOL[n]
            if n in lessons:
                l = lessons[n]
                cards.append(f'<a class="card lesson-link" href="{l["id"]}.html" data-id="{l["id"]}" style="border-left:6px solid {col}"><span class="thumb" data-scene=\'{html.escape(json.dumps(l["scene"]), quote=True)}\'></span>'
                             f'<span style="flex:1;min-width:0"><span class="ubadge" style="background:{col}">Unité {n}</span> <span class="muted" style="font-size:12px">{pages}</span><br><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)}</span><br>'
                             f'<span class="muted" style="font-size:12px">{l["nd"]} dialogues · {l["nv"]} words · {l["nq"]} activities</span><br><span class="prog muted" style="font-size:12px"></span></span></a>')
            else:
                cards.append(f'<div class="card lesson-link soon" style="border-left:6px solid {col}"><span class="n" style="background:{col};color:#fff">{n}</span><span style="flex:1"><span class="frt">{html.escape(tfr)}</span><br>'
                             f'<span style="font-size:14px">{html.escape(ten)}</span><br><span class="muted" style="font-size:12px">{html.escape(sit)} · {html.escape(gram)} · {pages} · coming soon</span></span></div>')
            for t in [t for t in tests if t["after"] == n]:
                cards.append(f'<a class="card lesson-link test-link" href="{t["id"]}.html" data-test="{t["id"]}"><span class="n">📝</span><span style="flex:1"><span class="frt">{html.escape(t["titleFr"])}</span><br>'
                             f'<span style="font-size:14px">{html.escape(t["title"])}</span><br><span class="muted" style="font-size:12px">{html.escape(t["pages"])} · bilan + mastery test</span><br><span class="prog muted" style="font-size:12px"></span></span></a>')
            if delf and not [t for t in tests if t["after"] == n]:
                cards.append(f'<div class="card lesson-link soon"><span class="n">🎓</span><span style="flex:1"><span class="frt">DELF A1 · {html.escape(delf)}</span><br><span class="muted" style="font-size:12px">stratégies et entraînement · coming soon</span></span></div>')
        parts.append(f'<section class="rubrique"><h2><span class="rnum" style="background:{UCOL[units[-1]]}">{e}</span> Étape {e} · {html.escape(efr)} <span class="muted" style="font-size:16px;font-weight:400">· {html.escape(een)}</span></h2><div class="chapters">{"".join(cards)}</div></section>')
    built = len(lessons)
    nv = sum(l["nv"] for l in lessons.values()); nq = sum(l["nq"] for l in lessons.values()); nd = sum(l["nd"] for l in lessons.values())
    body = f"""<header class="top"><div class="top-inner"><div class="brand"><small>Interactive course · FrenchDialogues</small><b>Édito A1 · Méthode de français</b></div></div></header>
<main>
<div class="card home-hero"><div><h1>Édito A1</h1><p class="lead" style="margin-top:8px">An interactive course built on the 13 units of <i>Édito A1, méthode de français</i> (Didier). Each unit follows the book's themes, communication goals, grammar, vocabulary, pronunciation and civilisation pages, from <b>Bonjour !</b> to the DELF A1.</p>
<p style="font-size:14px">Every unit has illustrated dialogues with audio, a shadow mode and a role mode, a picture dictionary and flashcards, grammar infographics and builders, the <i>Pour communiquer</i> boxes, pronunciation, listening and dictation, book-style activities, role-plays, ateliers with DELF practice, and the civilisation and cliché pages.</p>
<p class="muted" style="font-size:13px">{built} of 13 units ready · {nd} dialogues · {nv} words · {nq} activities · progress is saved in this browser</p></div><div id="hero-scene"></div></div>
<a class="card lesson-link" href="revision.html" style="border-left:6px solid #2f9c8a"><span class="n" style="background:#2f9c8a;color:#fff">📚</span><span style="flex:1"><span class="frt">Révisions</span><br><span style="font-size:14px">Search and revise the whole course: all the vocabulary, grammar points, <i>Pour communiquer</i> expressions and common mistakes in one page. Printable, with a vocabulary export (CSV for Anki or a spreadsheet).</span></span></a>
<div class="card legend"><b>How each unit works</b><div class="lgrid">
<span>💬 <b>Dialogues</b> play, shadow, take a role</span><span>🗂️ <b>Vocabulaire</b> picture dictionary + flashcards</span><span>🧩 <b>Grammaire</b> infographics + builders</span><span>🗨️ <b>Pour communiquer</b> the key phrases</span>
<span>🗣️ <b>Prononciation</b> sounds + minimal pairs</span><span>🎧 <b>Écoute</b> listening + dictation</span><span>✍️ <b>Activités</b> book-style quiz</span><span>🛠️ <b>Ateliers & DELF</b> projects + exam practice</span></div></div>
{''.join(parts)}</main>
<footer>Themes, situations, grammar points and vocabulary follow <i>Édito A1</i> (Didier, 2016). Dialogues, explanations, illustrations and activities are original. Audio is your device's French text-to-speech voice.</footer>
<script>{art}</script>
<script>
document.getElementById("hero-scene").innerHTML=ART.scene({{scene:"train",people:{{"A":"f1","B":"m3","C":"f4","D":"m1"}}}});
document.querySelectorAll("[data-scene]").forEach(el=>{{try{{el.innerHTML=ART.scene(JSON.parse(el.dataset.scene));}}catch(e){{}}}});
try{{const S=JSON.parse(localStorage.getItem("french-edito-a1-v1")||"{{}}");
document.querySelectorAll("[data-id]").forEach(a=>{{const l=(S.lessons||{{}})[a.dataset.id];if(!l)return;const n=Object.keys(l.done||{{}}).length;
a.querySelector(".prog").textContent=(n>=10?"✓ ":"")+n+"/10 sections"+(l.best&&l.best.practice!=null?" · activités "+l.best.practice+"%":"");}});
document.querySelectorAll("[data-test]").forEach(a=>{{const t=(S.tests||{{}})[a.dataset.test];if(!t||!t.attempts.length)return;const b=m=>{{const x=t.attempts.filter(y=>y.mode===m);return x.length?Math.max(...x.map(y=>y.pct))+"%":"—"}};
a.querySelector(".prog").textContent="bilan "+b("book")+" · mastery "+b("mastery");}});}}catch(e){{}}
</script>"""
    (OUT / "index.html").write_text(page("Édito A1 · Interactive French course", body), encoding="utf-8")
    print("built", OUT / "index.html")
