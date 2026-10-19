window.ROMANCE = {
kicker:'Sheehan Academy · Adult course 2 · v2', short:'Romance Systems',
title:'Romance Systems: Spanish at the core, with Latin, Italian, Portuguese and French',
pitch:'An adult refresher built on systems instead of memorizing. Each rule is shown in Spanish, traced back to Latin, and compared with Italian, Portuguese and French, so exceptions make sense and you learn it well enough to teach it. Bite-size cards, tap to answer, instant feedback.',
cliff:[
 'Spanish, Italian, Portuguese and French are Latin that changed in regular, predictable ways. Learn the rule and you get four languages for the price of one.',
 'Exceptions usually have a reason: very common words kept old forms, sound changes moved the stress, or a word came from Greek or street Latin.',
 'Latin used word endings to show who did what. Romance dropped those endings, so word order and little words like a and de took over the job.',
 'Verbs work like a code: stem + tense marker + person ending. The Spanish future is just the infinitive + haber.',
 'Cognates and sound shifts let you guess thousands of words: -tion becomes -ción, Latin f- becomes Spanish h-, Latin -ct- becomes Spanish ch.',
 'Every module ends with a How to teach this card and a checkpoint. The Think-faster drill trains speed on the exact spots that trip people up.'
],
drillModule:8,
modules:[
/* ---------------- 1 ---------------- */
{sys:'FOUNDATIONS', title:'The Family Tree: Why Systems Beat Memorizing', time:'8 min', tile:'Latin to Spanish, Italian, Portuguese and French. Find the odd one out, starting with the word for rabbit.',
cliffs:['Romance = spoken Latin, changed by region','Italian keeps the most Latin sounds','French changed the most in sound','Odd ones out have a story'],
cards:[
{k:'learn', t:'One parent language, four children', h:'<p>Everyday spoken Latin, sometimes called Vulgar Latin, spread across the Roman Empire. As the regions drifted apart, it slowly changed into <b>Spanish, Portuguese, Italian, French</b> (plus Catalan, Romanian and others).</p><p>Those changes were <b>regular</b>: each sound shifted the same way in thousands of words. That is why systems work better than lists.</p><p class="muted">Rule of thumb: Italian keeps the most Latin sounds. Spanish and Portuguese are the closest pair. French spelling remembers what French speech forgot.</p>'},
{k:'cmp', t:'Rabbit: find the odd one out', cols:['rabbit'], la:['cuniculus'], es:['conejo'], it:['coniglio'], pt:['coelho'], fr:['lapin'], odd:['fr'],
 note:'<b>Why French is odd:</b> Old French did have the Latin word, <i>conil</i> or <i>connin</i>. It was replaced by <i>lapin</i>, which grew out of <i>lapereau</i> ("young rabbit") and may come from a pre-Roman Iberian root. A common explanation is that <i>conil</i> started to sound too much like a vulgar word. The other three line up with Latin: <i>cuniculus → conejo / coniglio / coelho</i>.'},
{k:'tap', q:'Spanish <i>conejo</i>, Italian <i>coniglio</i>, Portuguese <i>coelho</i>. What does that tell you?', a:['They all come from Latin cuniculus by regular sound changes','They are three unrelated words','Spanish borrowed it from Italian'], c:0, why:'Same Latin root. Each language changed the middle (-cul-) in its own regular way: Spanish j, Italian gli, Portuguese lh.'},
{k:'cmp', t:'Horse and eat: when the street word wins', cols:['horse','to eat'], la:['equus (caballus)','edere (comedere)'], es:['caballo','comer'], it:['cavallo','mangiare'], pt:['cavalo','comer'], fr:['cheval','manger'], odd:['la','it,fr'],
 note:'Formal Latin said <i>equus</i>, but ordinary people said <i>caballus</i>, roughly "nag," and that is the word all four children kept. <i>Equus</i> survives in English "equestrian" and in Spanish <i>yegua</i> (mare, from <i>equa</i>). For "eat," Spain and Portugal kept <i>comedere</i> ("eat up"), while Italy and France used <i>manducare</i> ("chew, munch").'},
{k:'tap', q:'Where does Spanish <i>yegua</i> (mare) come from?', a:['Latin equa, the feminine of equus','Latin caballa','Arabic'], c:0, why:'The literary word for horse survived in the word for a female horse, even though caballo won for horse in general.'},
{k:'learn', t:'How this course works', h:'<ul><li><b>Cards:</b> one idea per card. Tap Next, or answer a quick check to move on.</li><li><b>Comparison tables:</b> Spanish row in green. ★ marks the odd one out, with the reason underneath.</li><li><b>How to teach this:</b> every module ends with a short teaching plan. Explaining a rule is the fastest way to own it.</li><li><b>Checkpoint:</b> about 3 questions. Get two-thirds right and the module is marked done.</li><li><b>Think-faster drill (Module 8):</b> 60-second timed rounds on conjugations, irregulars, cognates and sound shifts.</li></ul><p class="muted">Progress saves on this device. To memorize exceptions, put them in Anki (free) and review a few minutes a day.</p>'}
],
teach:'<p><b>Hook (2 minutes):</b> put the rabbit table on the board with the French cell covered. Ask "Which one will be different?" Then reveal <i>lapin</i> and tell the story.</p><p><b>Point to make:</b> every odd one out has a reason, and finding it is detective work, not memorizing.</p><p><b>Check:</b> have learners guess the Spanish for Latin <i>caballus</i> before you show it.</p>',
cp:[
{q:'Which language usually keeps Latin sounds closest?', a:['Italian','French','Portuguese'], c:0, why:'Italian changed the fewest sounds, for example notte and latte.'},
{q:'Why do caballo, cavallo, cavalo and cheval not look like Latin equus?', a:['They come from everyday Latin caballus, not formal equus','They were borrowed from Greek','Equus is from French'], c:0, why:'The everyday word won out over the formal one.'},
{q:'French lapin is the odd one out because…', a:['It replaced the older Latin-based word conil','French never had rabbits','It comes from Italian'], c:0, why:'Old French conil was replaced by lapin.'}
],
res:[['Romance languages (Wikipedia)','https://en.wikipedia.org/wiki/Romance_languages','Overview with comparison tables.'],['Vulgar Latin (Wikipedia)','https://en.wikipedia.org/wiki/Vulgar_Latin','The spoken Latin the Romance languages grew from.'],['Wiktionary: cuniculus','https://en.wiktionary.org/wiki/cuniculus','Every Wiktionary entry lists its descendants. Great for odd-one-out hunting.']]},

/* ---------------- 2 ---------------- */
{sys:'NOUNS', title:'Noun Gender and Endings', time:'10 min', tile:'Why Latin had three genders and Romance has two, which endings predict gender, and the famous rebels: el problema, la mano, el agua.',
cliffs:['Latin m/f/n → Romance m/f','-s plural comes from the Latin accusative','Greek -ma words are masculine','el agua is still feminine'],
cards:[
{k:'learn', t:'Three genders became two', h:'<p>Latin had masculine, feminine and <b>neuter</b> nouns. Romance dropped the neuter. Most neuter nouns became masculine: <i>tempus → el tiempo</i>.</p><p>Here is the twist. Neuter <b>plurals</b> ended in <i>-a</i>, so some of them were heard as feminine singulars. <i>folia</i> ("leaves," plural of <i>folium</i>) became <b>la hoja</b>, <i>la foglia</i>, <i>a folha</i>, <i>la feuille</i>: one feminine leaf in all four languages.</p>'},
{k:'cmp', t:'Friend: the endings system', cols:['friend (m)','friend (f)','friends (m)','friends (f)'], la:['amicus','amica','amicī / amicōs','amicae / amicās'], es:['amigo','amiga','amigos','amigas'], it:['amico','amica','amici','amiche'], pt:['amigo','amiga','amigos','amigas'], fr:['ami','amie','amis','amies'], odd:[null,null,'it','it'],
 note:'<b>Why Italian is odd:</b> Latin had two plurals, a subject form (<i>amicī</i>) and an object form (<i>amicōs</i>). Spanish, Portuguese and French built their plurals on the object form, so they end in <b>-s</b>. Italian built its plural on the subject form, so it ends in <b>-i / -e</b>. French still spells the -s and the -e, even though you usually cannot hear them.'},
{k:'tap', q:'Where does the Spanish plural -s come from?', a:['The Latin object (accusative) plural, -os / -as','English','The Latin genitive'], c:0, why:'amicos → amigos. Italian took the subject plural instead: amici.'},
{k:'learn', t:'Endings that predict gender in Spanish', h:'<table class="t"><tr><th>Ending</th><th>Gender</th><th>Reliability</th></tr><tr><td>-o</td><td>masc.</td><td>very high (rebels: la mano, la foto, la moto, la radio)</td></tr><tr><td>-a</td><td>fem.</td><td>high (rebels: Greek -ma words, el día, el mapa, el planeta)</td></tr><tr><td>-ción, -sión</td><td>fem.</td><td>almost 100%</td></tr><tr><td>-dad, -tad, -tud, -umbre</td><td>fem.</td><td>almost 100%</td></tr><tr><td>-aje, -or</td><td>masc.</td><td>high (la flor, la labor)</td></tr><tr><td>-e, other consonants</td><td>either</td><td>learn the noun with its article</td></tr></table>'},
{k:'cmp', t:'The famous rebels and their reasons', cols:['problem','day','hand','sea'], la:['problema (n.)','diēs','manus (f.)','mare (n.)'], es:['el problema','el día','la mano','el mar'], it:['il problema','il giorno','la mano','il mare'], pt:['o problema','o dia','a mão','o mar'], fr:['le problème','le jour','la main','la mer'], odd:[null,'it,fr',null,'fr'],
 note:'<b>problema:</b> a Greek neuter word, so it is masculine everywhere (also el sistema, el tema, el idioma, el programa, el clima). <b>mano:</b> Latin <i>manus</i> was a feminine noun even though it ends in -us, and every Romance language kept that. <b>día:</b> Italian and French use a different root, <i>diurnum</i> (giorno, jour). <b>mar:</b> Latin neuter. Most languages made it masculine, but French made it feminine. Spanish poets also say <i>la mar</i>.'},
{k:'tap', q:'Which is correct?', a:['el agua fría','la agua fría','el agua frío'], c:0, why:'Feminine nouns that start with a stressed a- take el in the singular, just so the sound flows better. The noun is still feminine, so the adjective is fría, and the plural is las aguas. Same pattern: el águila, el hacha, el alma.'},
{k:'tap', q:'Gender of <i>la ciudad</i>, <i>la verdad</i>, <i>la libertad</i>?', a:['Feminine: -dad/-tad come from Latin -tas, -tatem, which were feminine','Masculine','It depends on the region'], c:0, why:'civitatem → ciudad, veritatem → verdad. The gender came along with the ending.'}
],
teach:'<p><b>Sort game:</b> hand out noun cards and have learners sort them into an el pile and a la pile using only the endings.</p><p><b>Then reveal the rebels</b> one at a time, each with its backstory: Greek -ma, feminine manus, el agua for sound. Exceptions with a story stick; exceptions without one get forgotten.</p><p><b>Bonus:</b> show the friend table and ask why Italian is different. Let them discover the subject vs object plural.</p>',
cp:[
{q:'Why is it <i>el problema</i>?', a:['Greek neuter -ma words became masculine','It is a mistake people got used to','All -a words are masculine'], c:0, why:'Same with el sistema, el tema, el idioma.'},
{q:'<i>Las hojas</i> (the leaves) is feminine because…', a:['Latin neuter plural folia was heard as a feminine singular','Leaves are feminine in nature','French influence'], c:0, why:'The -a ending of the neuter plural made it sound feminine.'},
{q:'Which noun is masculine?', a:['el idioma','la canción','la mano'], c:0, why:'idioma is a Greek -ma word. canción ends in -ción, and mano is a feminine rebel.'}
],
res:[['SpanishDict','https://www.spanishdict.com/','Gender and examples for every noun.'],['Real Academia Española','https://www.rae.es/','The official dictionary; marks gender and usage.'],['Wiktionary','https://en.wiktionary.org/wiki/lapin','Etymology and descendants in every entry.']]},

/* ---------------- 3 ---------------- */
{sys:'SYNTAX', title:'Latin Cases vs Spanish Word Order', time:'10 min', tile:'In Latin, endings show who did what, so word order is free. Spanish uses word order and a, de instead, and old cases survive in the pronouns.',
cliffs:['Endings mark roles in Latin','Word order + prepositions in Romance','personal a = a mini case marker','lo vs le = Latin accusative vs dative'],
cards:[
{k:'learn', t:'Latin: the ending tells you who does what', h:'<p>These all mean <b>"The girl sees the dog":</b></p><p><i>Puella canem videt.</i><br><i>Canem puella videt.</i><br><i>Videt puella canem.</i></p><p><i>puella</i> (nominative case) marks the subject. <i>canem</i> (accusative case) marks the object. Swap the endings and the meaning flips: <i>Canis puellam videt</i> = "The dog sees the girl."</p><table class="t"><tr><th>Case</th><th>Job</th><th>Romance replacement</th></tr><tr><td>Nominative</td><td>subject</td><td>word order (before the verb)</td></tr><tr><td>Accusative</td><td>direct object</td><td>word order (after the verb), personal a</td></tr><tr><td>Genitive</td><td>of / whose</td><td>de</td></tr><tr><td>Dative</td><td>to / for</td><td>a, plus pronouns le / les</td></tr><tr><td>Ablative</td><td>by / with / from</td><td>con, por, de</td></tr></table>'},
{k:'tap', q:'<i>Canem puella videt</i> means…', a:['The girl sees the dog','The dog sees the girl','The girls see dogs'], c:0, why:'canem has the object ending, so the dog is the one being seen, wherever it sits in the sentence.'},
{k:'learn', t:'Why Romance switched to word order', h:'<p>In everyday speech the endings wore away. Final <i>-m</i> went silent, and vowels blurred together, so <i>puellam</i> and <i>puella</i> started to sound alike. Once the endings stopped showing who did what, <b>word order</b> (subject, verb, object) and <b>prepositions</b> took over that job.</p><p><i>La niña ve <b>al</b> perro.</i> Spanish marks a human or pet direct object with the <b>personal a</b>, which works like a tiny accusative marker.</p><p>Most Romance nouns come from the Latin <b>accusative</b> with the -m dropped: <i>civitatem → ciudad</i>, <i>noctem → noche</i>.</p>'},
{k:'cmp', t:"Mark's house: genitive becomes de", cols:["Mark's house"], la:['domus Marcī'], es:['la casa de Marcos'], it:['la casa di Marco'], pt:['a casa de Marcos'], fr:['la maison de Marc'], odd:['fr'],
 note:'The Latin genitive ending (<i>-ī</i>) is replaced by <b>de / di</b>. Also notice <i>casa</i>: in Latin it meant "hut, cottage," and Spanish, Italian and Portuguese promoted it to "house." French used <i>mansionem</i> ("a stopping place"), which gave <i>maison</i>. English "mansion" comes from the same word.'},
{k:'cmp', t:'Cases survive in the pronouns', cols:['I (subject)','me (object)','to him (dative)','him (direct obj.)'], la:['ego','mē','illī','illum'], es:['yo','me','le','lo'], it:['io','mi','gli','lo'], pt:['eu','me','lhe','o'], fr:['je','me','lui','le'],
 note:'Choosing between <b>lo and le</b> is really a choice between the Latin accusative (<i>illum</i>) and dative (<i>illī</i>). <i>Lo veo</i> = I see him (direct object). <i>Le doy el libro</i> = I give the book <b>to</b> him (indirect object). After a preposition Spanish uses <i>mí</i>, from the Latin dative <i>mihi</i>: <i>para mí</i>.'},
{k:'tap', q:'In <i>Le doy el libro</i>, <i>le</i> is…', a:['Indirect object ("to him"), from the Latin dative illī','Direct object, from illum','The subject'], c:0, why:'He is the receiver, so Spanish uses the dative form, le.'},
{k:'learn', t:'The word-order freedom Spanish kept', h:'<ul><li><b>You can drop the subject:</b> the verb ending already shows the person. <i>Hablo</i> = I speak.</li><li><b>The subject can follow the verb</b> in questions and for emphasis: <i>¿Llegó Juan?</i> <i>Lo hizo ella.</i></li><li><b>Object pronouns</b> go before a conjugated verb but attach to the end of an infinitive, a gerund or a positive command: <i>lo veo · quiero verlo · viéndolo · ¡dímelo!</i></li></ul><p>French is the opposite case. Its endings went silent (<i>chante, chantes, chantent</i> all sound the same), so French <b>must</b> say the subject: <i>je chante</i>.</p>'},
{k:'tap', q:'Why can Spanish drop <i>yo</i> but French must say <i>je</i>?', a:['Spanish verb endings are still audible; French ones went silent','French is more polite','Spanish has no pronouns'], c:0, why:'When you can hear the ending, it carries the person. French lost that, so the pronoun has to do the work.'}
],
teach:'<p><b>Human sentence:</b> give three people cards: PUELLA, CANEM, VIDET. Have them shuffle places. The meaning stays the same. Then do it in Spanish (LA NIÑA / VE / AL PERRO) and show how moving the words changes or breaks the meaning.</p><p><b>Then:</b> pronouns are a "case fossil." Put yo / me / mí next to ego / mē / mihi.</p><p><b>Exit question:</b> "Why does Spanish need the personal a?"</p>',
cp:[
{q:'Romance languages rely on word order mainly because…', a:['The Latin case endings wore away in speech','The Church required it','Latin had no endings'], c:0, why:'Once the endings blurred, word order took over their job.'},
{q:'The Latin genitive (<i>domus Marcī</i>) is replaced in Spanish by…', a:['de: la casa de Marcos','a','the personal a'], c:0, why:'Genitive becomes de / di.'},
{q:'Correct placement:', a:['Quiero verlo','Quiero lo ver','Lo quiero ver lo'], c:0, why:'Pronouns attach to the end of an infinitive. Lo quiero ver is also correct, but the other options are not.'}
],
res:[['Perseus Digital Library','https://www.perseus.tufts.edu/hopper/','Latin texts with word-by-word grammatical breakdowns.'],['The Latin Library','https://www.thelatinlibrary.com/','Free Latin texts to read.'],['Dickinson Latin core vocabulary','https://dcc.dickinson.edu/latin-core-list1','The 1,000 most common Latin words.']]},

/* ---------------- 4 ---------------- */
{sys:'VERBS', title:'The Conjugation Code: Persons and Tenses', time:'12 min', tile:'Stem + tense marker + person ending. The person code is the same across tenses, and the future is just the infinitive + haber.',
cliffs:['-s you, -mos we, -n they','imperfect -aba / -ía','future = infinitive + he, has, ha','subjunctive = opposite vowel, built on the yo form'],
cards:[
{k:'learn', t:'Every verb form is three pieces', h:'<p><b>stem + tense/mood marker + person ending</b></p><p><i>habl</i> + <i>a</i> + <i>mos</i> = hablamos<br><i>habl</i> + <i>aba</i> + <i>mos</i> = hablábamos<br><i>habl</i> + <i>ar</i>-<i>é</i> = hablaré</p><table class="t"><tr><th>Person</th><th>Ending</th><th>Watch out</th></tr><tr><td>yo</td><td>-o (present)</td><td>-é / -í in the preterite</td></tr><tr><td>tú</td><td>-s</td><td>preterite -ste has <b>no</b> s: hablaste</td></tr><tr><td>él / usted</td><td>(none)</td><td></td></tr><tr><td>nosotros</td><td>-mos</td><td>every tense</td></tr><tr><td>vosotros</td><td>-is</td><td>Spain only</td></tr><tr><td>ellos / ustedes</td><td>-n</td><td>every tense</td></tr></table>'},
{k:'cmp', t:'Present tense of "sing" in all five', cols:['yo','tú','él','nosotros','vosotros','ellos'], la:['cantō','cantās','cantat','cantāmus','cantātis','cantant'], es:['canto','cantas','canta','cantamos','cantáis','cantan'], it:['canto','canti','canta','cantiamo','cantate','cantano'], pt:['canto','cantas','canta','cantamos','cantais','cantam'], fr:['chante','chantes','chante','chantons','chantez','chantent'], odd:[null,'it',null,'it,fr',null,null],
 note:'Spanish and Portuguese are almost word-for-word Latin with the final -t dropped. Italian replaced the tú -s with <b>-i</b> and uses <b>-iamo</b> for "we." French <b>-ons</b> has a debated origin; one theory traces it to <i>sumus</i>, "we are." Scroll the table sideways on a phone.'},
{k:'tap', q:'Latin <i>cantāmus</i> → Spanish?', a:['cantamos','cantemos','cantábamos'], c:0, why:'-mus became -mos. Cantemos is the subjunctive, and cantábamos is the imperfect.'},
{k:'learn', t:'The tense map (hablar)', h:'<div class="tw"><table class="t"><tr><th>Tense</th><th>yo</th><th>marker</th></tr><tr><td>Present</td><td>hablo</td><td>(none)</td></tr><tr><td>Preterite</td><td>hablé</td><td>stressed ending</td></tr><tr><td>Imperfect</td><td>hablaba</td><td>-aba / -ía</td></tr><tr><td>Future</td><td>hablaré</td><td>infinitive + é</td></tr><tr><td>Conditional</td><td>hablaría</td><td>infinitive + ía</td></tr><tr><td>Present subj.</td><td>hable</td><td>opposite vowel</td></tr><tr><td>Imperfect subj.</td><td>hablara</td><td>from ellos hablaron</td></tr></table></div><p class="muted">Imperfect: only three irregular verbs in all of Spanish: <b>ser (era), ir (iba), ver (veía)</b>.</p>'},
{k:'cmp', t:'Trick: the future is "infinitive + have"', cols:['I will sing','I have (the helper)'], la:['cantābō (lost)','habeō'], es:['cantaré','he'], it:['canterò','ho'], pt:['cantarei','hei'], fr:['chanterai','ai'], odd:['la',null],
 note:'Spoken Latin dropped <i>cantābō</i> and said <i>cantare habeo</i>, "I have to sing." The two words fused. That is why the Spanish future endings <b>-é, -ás, -á, -emos, -éis, -án</b> look exactly like <b>he, has, ha, hemos, habéis, han</b>. The conditional works the same way with <i>(hab)ía</i>: cantaría.'},
{k:'tap', q:'<i>comerán</i> is which tense?', a:['Future: comer + (h)an','Imperfect','Present subjunctive'], c:0, why:'You can see the whole infinitive comer, plus the ending -án.'},
{k:'learn', t:'Trick: the subjunctive uses the opposite vowel, built on the yo form', h:'<p>-ar verbs switch to <b>e</b>, and -er / -ir verbs switch to <b>a</b>:</p><p>hablar → habl<b>e</b> · comer → com<b>a</b> · vivir → viv<b>a</b></p><p>Start from the <b>yo present</b> and the "irregular" subjunctives become regular:</p><p>tengo → teng<b>a</b> · hago → hag<b>a</b> · conozco → conozc<b>a</b> · digo → dig<b>a</b> · pienso → piens<b>e</b></p><p class="muted">Only six don\'t follow it, because their yo form doesn\'t end in -o: sea, vaya, sepa, haya, dé, esté.</p>'},
{k:'tap', q:'Subjunctive of <i>poner</i> (yo pongo)?', a:['ponga','pone','pona'], c:0, why:'Take yo pongo, drop the -o, and add the opposite vowel -a: ponga.'},
{k:'tap', q:'Preterite <i>tú</i> of hablar?', a:['hablaste','hablastes','hablabas'], c:0, why:'The preterite tú form ends in -ste with no s. Hablastes is a very common slip.'}
],
teach:'<p><b>Person-code grid:</b> write -o, -s, (none), -mos, -is, -n on the board once. Then make up a verb, <i>glorpar</i>, and have learners conjugate it in five tenses. If they can do it with a fake verb, they know the system.</p><p><b>Future reveal:</b> write he, has, ha, hemos, han under cantaré, cantarás... and let them notice the match.</p><p><b>Exit ticket:</b> one form per tense of a new verb.</p>',
cp:[
{q:'Which ending marks <i>nosotros</i> in every Spanish tense?', a:['-mos','-n','-s'], c:0, why:'hablamos, hablábamos, hablaremos, hablemos.'},
{q:'Where does the Spanish future come from?', a:['Infinitive + forms of haber','Latin cantabo','French'], c:0, why:'cantar + he = cantaré.'},
{q:'Subjunctive of <i>conocer</i>?', a:['conozca','conoca','conozco'], c:0, why:'yo conozco → conozca.'}
],
res:[['SpanishDict conjugation','https://www.spanishdict.com/conjugation','Full tables for any Spanish verb.'],['Reverso conjugator','https://conjugator.reverso.net/conjugation-spanish.html','Tables for Spanish, Italian, Portuguese and French.'],['WordReference conjugator','https://www.wordreference.com/conj/esverbs.aspx','Fast tables plus forum discussions.']]},

/* ---------------- 5 ---------------- */
{sys:'IRREGULARS', title:'Irregular Verbs, Grouped by Why', time:'14 min', tile:'Five reasons verbs go irregular. Learn the reason and the whole family follows: boot verbs, -go verbs, strong preterites, shortened futures, and the wild four.',
cliffs:['Stress causes the stem change (e→ie, o→ue)','yo -go / -zco carries into the subjunctive','Strong preterites have no accent','Futures drop a vowel or add a d','ir and ser share fui'],
cards:[
{k:'learn', t:'Five reasons verbs go irregular', h:'<ol><li><b>Stress-driven sound change:</b> stressed short Latin e and o became ie and ue, which gives the "boot verbs."</li><li><b>-ir verbs that raise e→i</b> (pedir → pido).</li><li><b>Extra consonant in the yo form:</b> tengo, conozco.</li><li><b>Old Latin "strong" past tenses</b> that kept their stress on the stem: tuve, hice, dije.</li><li><b>Shortened futures:</b> tendré, haré.</li></ol><p>And then there are the <b>wild four</b> (ser, ir, estar, haber). They are so common that they kept their old, mixed-up forms.</p>'},
{k:'learn', t:'Family 1: boot verbs (stress causes the stem change)', h:'<p>Latin short <b>e → ie</b> and short <b>o → ue</b>, but <b>only when stressed</b>. That is the same change that turned <i>petra → piedra</i> and <i>porta → puerta</i>.</p><table class="t"><tr><th>querer</th><th>poder</th></tr><tr><td><b>quie</b>ro</td><td><b>pue</b>do</td></tr><tr><td><b>quie</b>res</td><td><b>pue</b>des</td></tr><tr><td><b>quie</b>re</td><td><b>pue</b>de</td></tr><tr><td>queremos</td><td>podemos</td></tr><tr><td>queréis</td><td>podéis</td></tr><tr><td><b>quie</b>ren</td><td><b>pue</b>den</td></tr></table><p class="muted">Nosotros and vosotros put the stress on the ending, so the stem stays plain. Shade the changed forms and they make a boot shape.</p>'},
{k:'cmp', t:'Boot verbs across the family', cols:['you want','you can','you come'], la:['vīs (velle)','potes','venīs'], es:['quieres','puedes','vienes'], it:['vuoi','puoi','vieni'], pt:['queres','podes','vens'], fr:['veux','peux','viens'], odd:[null,'pt','pt'],
 note:'Spanish, Italian and French all break the stressed vowel into two sounds (ie / uo / eu). <b>Portuguese doesn\'t</b>, which is why its verbs look "regular" here. Italian and French "want" (<i>vuoi, veux</i>) come from Latin <i>velle</i>. Spanish <i>querer</i> comes from <i>quaerere</i>, "to seek."'},
{k:'tap', q:'Why <i>puedo</i> but <i>podemos</i>?', a:['The stress is on the stem in puedo and on the ending in podemos','podemos is a different verb','Random exception'], c:0, why:'The ue only appears in syllables that are stressed.'},
{k:'learn', t:'Family 2 and 3: e→i verbs and the yo-go / -zco group', h:'<p><b>-ir verbs that raise e→i:</b> pedir → pido, servir → sirvo, repetir → repito, seguir → sigo, vestir → visto. These also raise the stem in the él / ellos preterite and the gerund: <i>pidió, pidieron, pidiendo</i>. The same goes for o→u in dormir and morir: <i>durmió, murió, durmiendo</i>.</p><p><b>yo -go:</b> tengo, vengo, pongo, salgo, valgo, hago, digo, traigo, caigo, oigo.</p><p><b>yo -zco:</b> verbs ending in a vowel + -cer / -cir: conozco, parezco, ofrezco, conduzco, traduzco.</p><p>Both groups carry their yo form into the entire present subjunctive: <i>tenga, conozca</i>.</p>'},
{k:'tap', q:'<i>pedir</i>, él, preterite?', a:['pidió','pedió','pidó'], c:0, why:'-ir stem-changers raise e→i in the third person preterite.'},
{k:'learn', t:'Family 4: strong preterites (stem stress, no accent)', h:'<p>These come from Latin perfects that were stressed on the stem. They share one set of endings with <b>no accent marks</b>: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>.</p><table class="t"><tr><th>u-stem</th><th>i-stem</th><th>j-stem (ellos -eron)</th></tr><tr><td>tener → tuve</td><td>hacer → hice (hizo)</td><td>decir → dije</td></tr><tr><td>estar → estuve</td><td>querer → quise</td><td>traer → traje</td></tr><tr><td>poder → pude</td><td>venir → vine</td><td>conducir → conduje</td></tr><tr><td>poner → puse</td><td></td><td></td></tr><tr><td>saber → supe</td><td></td><td></td></tr><tr><td>andar → anduve</td><td></td><td></td></tr></table><p>Latin roots: <i>fēcī → hice, vēnī → vine, dīxī → dije, potuī → pude, posuī → puse, sapuī → supe</i>.</p><p class="muted">j-stems: ellos <b>dijeron</b>, never "dijieron."</p>'},
{k:'cmp', t:'Strong preterites line up across the family', cols:['I did/made','I came','I said'], la:['fēcī','vēnī','dīxī'], es:['hice','vine','dije'], it:['feci','venni','dissi'], pt:['fiz','vim','disse'], fr:['je fis','je vins','je dis'],
 note:'Italian <i>feci</i> is still the Latin word, letter for letter. Spanish turned Latin f- into h- (Module 7), so <i>feci</i> became <i>hice</i>. The French forms are the literary past tense, the passé simple.'},
{k:'tap', q:'ellos, preterite of <i>decir</i>?', a:['dijeron','dijieron','decieron'], c:0, why:'After the j, the -ieron ending drops its i: dijeron, trajeron, condujeron.'},
{k:'learn', t:'Family 5: shortened futures (and conditionals)', h:'<p>The future is the infinitive + he (Module 4). In very common verbs, the infinitive got squeezed:</p><ul><li><b>Drop a vowel:</b> poder → podré, saber → sabré, haber → habré, querer → querré, caber → cabré</li><li><b>Drop a vowel and add a d to smooth the sound:</b> tener → tendré, poner → pondré, venir → vendré, salir → saldré, valer → valdré</li><li><b>Ancient short forms:</b> hacer → haré, decir → diré</li></ul><p>The conditional uses the same stems: tendría, haría, diría. Italian does the same thing: avrò, potrò, saprò, verrò.</p>'},
{k:'learn', t:'The wild four: ser, ir, estar, haber', h:'<p>Very common verbs resist being made regular, because people use them too often for the old forms to fade.</p><ul><li><b>ser</b> blends Latin <i>esse</i> (es, era, fui) with <i>sedere</i>, "to sit," which supplied the infinitive <i>ser</i> and the subjunctive <i>sea</i>.</li><li><b>ir</b> blends <i>īre</i> (ir, iba) with <i>vādere</i>, "to go" (voy, vas, va, vaya). It also borrowed the past tense of <i>esse</i>. That is why <b>fui</b> means both "I was" and "I went."</li><li><b>estar</b> comes from <i>stāre</i>, "to stand." Hence estuve, which follows the andar pattern.</li><li><b>haber</b> comes from <i>habēre</i>: he, has, ha, hay, hube.</li></ul>'},
{k:'tap', q:'Why does <i>fui</i> mean both "I was" and "I went"?', a:['ir borrowed its past tense from Latin esse, the same source as ser','It is a typo that stuck','Arabic influence'], c:0, why:'Context tells you which one: fui a la tienda (I went to the store) vs. fui feliz (I was happy).'}
],
teach:'<p><b>Families, not lists:</b> teach one family per session and tell its "why" first. Then give learners a mystery verb (e.g. <i>contar, mentir, traducir, proponer</i>) and ask which family it joins and what its forms will be. <i>Proponer</i> works exactly like poner: propuse, propondré, proponga.</p><p><b>Boot drawing:</b> shade the stem-changed forms on a 6-box grid so the boot shape shows up.</p><p><b>Exceptions wall:</b> keep a poster of the strong preterites grouped by u / i / j.</p>',
cp:[
{q:'tener, yo, preterite?', a:['tuve','tení','tuvo'], c:0, why:'u-stem strong preterite, with the -e ending and no accent. Tuvo is the él form.'},
{q:'decir, future, yo?', a:['diré','deciré','dicré'], c:0, why:'An ancient shortened future, like haré.'},
{q:'Which verb follows the same irregular pattern as <i>poner</i>?', a:['proponer: propuse, propondré','ponderar','pagar'], c:0, why:'Verbs built on poner (componer, suponer, proponer) inherit all of its irregularities.'}
],
res:[['SpanishDict conjugation','https://www.spanishdict.com/conjugation','Check any irregular verb.'],['History of the Spanish language (Wikipedia)','https://en.wikipedia.org/wiki/History_of_the_Spanish_language','Sound changes and verb history.'],['Anki','https://apps.ankiweb.net/','Put the strong preterites and futures on cards.']]},

/* ---------------- 6 ---------------- */
{sys:'VOCABULARY', title:'Cognate Rules: Thousands of Free Words', time:'9 min', tile:'English got much of its vocabulary through Latin and French. Swap the suffix and you have the word: -tion → -ción / -zione / -ção / -tion.',
cliffs:['-tion → -ción','-ty → -dad','-ly → -mente','-ous → -oso','false friends: embarazada'],
cards:[
{k:'cmp', t:'The suffix machine', cols:['nation','city','rapidly','famous','possible'], la:['nātiō','cīvitās','rapidā mente','fāmōsus','possibilis'], es:['nación','ciudad','rápidamente','famoso','posible'], it:['nazione','città','rapidamente','famoso','possibile'], pt:['nação','cidade','rapidamente','famoso','possível'], fr:['nation','cité','rapidement','fameux','possible'],
 note:'Nouns came from the Latin accusative form: <i>nātiōnem</i> and <i>cīvitātem</i>. The adverb ending <b>-mente</b> is Latin <i>mente</i>, "with a ___ mind." That is why the adjective in front of it is feminine: rápid<b>a</b>mente, clar<b>a</b>mente.'},
{k:'learn', t:'English → Spanish suffix rules', h:'<table class="t"><tr><th>English</th><th>Spanish</th><th>Example</th></tr><tr><td>-tion</td><td>-ción</td><td>information → información</td></tr><tr><td>-sion</td><td>-sión</td><td>decision → decisión</td></tr><tr><td>-ty</td><td>-dad / -tad</td><td>university → universidad</td></tr><tr><td>-ly</td><td>-mente</td><td>finally → finalmente</td></tr><tr><td>-ous</td><td>-oso</td><td>delicious → delicioso</td></tr><tr><td>-ble</td><td>-ble</td><td>probable → probable</td></tr><tr><td>-ive</td><td>-ivo</td><td>creative → creativo</td></tr><tr><td>-ic / -ical</td><td>-ico</td><td>classic → clásico</td></tr><tr><td>-ist / -ism</td><td>-ista / -ismo</td><td>tourist → turista</td></tr><tr><td>-ary</td><td>-ario</td><td>necessary → necesario</td></tr><tr><td>-ent / -ant</td><td>-ente / -ante</td><td>important → importante</td></tr><tr><td>-ure</td><td>-ura</td><td>culture → cultura</td></tr></table><p class="muted">Add the s+consonant rule from Module 7: station → <b>e</b>stación, student → <b>e</b>studiante.</p>'},
{k:'tap', q:'"opportunity" in Spanish?', a:['oportunidad','oportunación','oportunemente'], c:0, why:'-ty → -dad.'},
{k:'tap', q:'"situation" in Italian?', a:['situazione','situación','situação'], c:0, why:'Italian -zione. Situación is Spanish and situação is Portuguese.'},
{k:'tap', q:'"seriously" in Spanish?', a:['seriamente','seriosamente','serioso'], c:0, why:'feminine adjective seria + -mente.'},
{k:'learn', t:'False friends: the rule gives you the root, context checks the meaning', h:'<table class="t"><tr><th>Spanish</th><th>Means</th><th>Not</th></tr><tr><td>embarazada</td><td>pregnant</td><td>embarrassed (avergonzado)</td></tr><tr><td>actual</td><td>current</td><td>actual (real)</td></tr><tr><td>éxito</td><td>success</td><td>exit (salida)</td></tr><tr><td>librería</td><td>bookstore</td><td>library (biblioteca)</td></tr><tr><td>constipado</td><td>stuffed up, has a cold</td><td>constipated</td></tr><tr><td>carpeta</td><td>folder</td><td>carpet (alfombra)</td></tr><tr><td>realizar</td><td>carry out, do</td><td>realize (darse cuenta)</td></tr><tr><td>asistir</td><td>attend</td><td>assist (ayudar)</td></tr></table>'},
{k:'tap', q:'<i>Estoy muy embarazada</i> means…', a:['I\'m very pregnant','I\'m very embarrassed','I\'m very busy'], c:0, why:'The classic false friend. "Embarrassed" is avergonzado/a, or me da vergüenza.'}
],
teach:'<p><b>Suffix relay:</b> call out an English word ending in -tion, -ty, -ly or -ous. Teams have 3 seconds to say the Spanish. Bonus points for the Italian or Portuguese.</p><p><b>Then a false-friend trap round:</b> mix in embarazada and éxito, and reward anyone who catches the trap.</p><p><b>Takeaway:</b> about half of the advanced vocabulary is already in your head.</p>',
cp:[
{q:'"nation" in Portuguese?', a:['nação','nazione','nación'], c:0, why:'Portuguese -ção.'},
{q:'"curious" in Spanish?', a:['curioso','curiosidad','curiomente'], c:0, why:'-ous → -oso.'},
{q:'<i>librería</i> means…', a:['bookstore','library','bookshelf'], c:0, why:'Library is biblioteca.'}
],
res:[['WordReference','https://www.wordreference.com/','Check cognates and false friends.'],['Coffee Break Italian','https://coffeebreaklanguages.com/coffeebreakitalian/','Free Italian podcast for Spanish speakers ready to branch out.'],['Coffee Break French','https://coffeebreaklanguages.com/coffeebreakfrench/','Free French podcast.'],['Practice Portuguese','https://www.practiceportuguese.com/','European Portuguese lessons and audio.']]},

/* ---------------- 7 ---------------- */
{sys:'SOUNDS', title:'Sound-Shift Rules: Predict the Word', time:'12 min', tile:'Latin f- became Spanish h-, stressed e and o became ie and ue, cl/pl/fl became ll, and -ct- became ch. Apply the rules like a recipe.',
cliffs:['f- → h- (silent)','stressed e → ie, o → ue','cl / pl / fl → ll','-ct- → ch','p t k → b d g between vowels'],
cards:[
{k:'cmp', t:'Latin f- becomes Spanish h- (silent)', cols:['son','to do/make','leaf','iron','flour'], la:['fīlius','facere','folia','ferrum','farīna'], es:['hijo','hacer','hoja','hierro','harina'], it:['figlio','fare','foglia','ferro','farina'], pt:['filho','fazer','folha','ferro','farinha'], fr:['fils','faire','feuille','fer','farine'], odd:['es','es','es','es','es'],
 note:'Spanish is the odd one out every time. In medieval Castile the f- softened to a breathy h-, and later went silent. <b>It doesn\'t happen before ue or r</b>: fuego, fuerte, frío, fruta. Borrowed learned words also keep f-: fábula, fama. Hablar comes from <i>fābulārī</i> too, while Portuguese kept <i>falar</i>.'},
{k:'cmp', t:'Stressed e → ie, o → ue', cols:['stone','door','fire','good'], la:['petra','porta','focus','bonus'], es:['piedra','puerta','fuego','bueno'], it:['pietra','porta','fuoco','buono'], pt:['pedra','porta','fogo','bom'], fr:['pierre','porte','feu','bon'], odd:['es','es','es','es'],
 note:'This is the same rule that creates the boot verbs (Module 5). Italian breaks the vowel only in open syllables, as in pietra and fuoco but not porta. Portuguese never breaks it.'},
{k:'tap', q:'Latin <i>tempus</i> (stressed short e) → Spanish?', a:['tiempo','tempo','tiampo'], c:0, why:'Stressed e → ie. Compare Italian and Portuguese tempo, French temps.'},
{k:'cmp', t:'cl- pl- fl- → Spanish ll-', cols:['key','rain','flame','full'], la:['clāvis','pluvia','flamma','plēnus'], es:['llave','lluvia','llama','lleno'], it:['chiave','pioggia','fiamma','pieno'], pt:['chave','chuva','chama','cheio'], fr:['clé','pluie','flamme','plein'],
 note:'Spanish → ll, Italian → chi / pi / fi, Portuguese → ch, French keeps the Latin cluster. Spanish <i>llamar</i> comes from <i>clāmāre</i>, "to call out." English "claim" and "clamor" come from it too.'},
{k:'cmp', t:'-ct- → Spanish ch', cols:['night','milk','eight','done/made'], la:['noctem','lactem','octō','factum'], es:['noche','leche','ocho','hecho'], it:['notte','latte','otto','fatto'], pt:['noite','leite','oito','feito'], fr:['nuit','lait','huit','fait'],
 note:'Spanish ch · Italian tt · Portuguese and French -it-. <i>Hecho</i> uses two rules at once: f → h and ct → ch.'},
{k:'tap', q:'Latin <i>pectus</i> (chest) → Spanish?', a:['pecho','peto','pieto'], c:0, why:'-ct- → ch. Compare Italian petto and Portuguese peito.'},
{k:'cmp', t:'Softening between vowels: p t k → b d g', cols:['wolf','life','friend'], la:['lupus','vīta','amīcus'], es:['lobo','vida','amigo'], it:['lupo','vita','amico'], pt:['lobo','vida','amigo'], fr:['loup','vie','ami'], odd:[null,null,null],
 note:'Spanish and Portuguese soften the consonant, Italian keeps the Latin sound, and French usually drops it completely. Wiktionary entries show the full descendant tree for any Latin word.'},
{k:'learn', t:'Four bonus shifts', h:'<ul><li><b>s + consonant at the start gets an e-</b> in Spanish, Portuguese and French: <i>schola → escuela / escola / école</i> (Italian <i>scuola</i>), <i>stella → estrella / estrela / étoile</i>.</li><li><b>-li- and -c\'l- → j</b> in Spanish: <i>fīlia → hija, oculus → ojo</i>. Italian has gli / cchi, Portuguese lh, French -ill-: <i>figlia, filha, fille</i>.</li><li><b>au → o:</b> <i>aurum → oro, causa → cosa</i>. Portuguese keeps <i>ou</i>: ouro, coisa. French: or, chose.</li><li><b>Portuguese drops l and n between vowels:</b> <i>lūna → lua, colōrem → cor</i>.</li></ul>'},
{k:'tap', q:'Latin <i>clāmāre</i> (to call) → Spanish?', a:['llamar','clamar','chamar'], c:0, why:'cl- → ll-. Chamar is the Portuguese form.'}
],
teach:'<p><b>Time machine:</b> give a Latin word and have learners apply the rules in order, like a recipe, to predict the Spanish, then check. <i>fōcus → fuego</i> works. <i>fortis → fuerte</i> shows the f-before-ue exception.</p><p><b>Celebrate interesting wrong answers.</b> "Why didn\'t fortis become huerte?" is exactly the question that makes the rule stick.</p><p><b>Bonus round:</b> predict the Portuguese and Italian too.</p>',
cp:[
{q:'Latin <i>fābulārī</i> (to chat) → Spanish?', a:['hablar','fablar','falar'], c:0, why:'f- → h-, which gives hablar. Portuguese kept falar.'},
{q:'Latin <i>noctem</i> → Portuguese?', a:['noite','noche','notte'], c:0, why:'Portuguese -it-. Noche is Spanish and notte is Italian.'},
{q:'Latin <i>mortem</i> → Spanish?', a:['muerte','morte','mierte'], c:0, why:'Stressed short o → ue.'}
],
res:[['History of the Spanish language (Wikipedia)','https://en.wikipedia.org/wiki/History_of_the_Spanish_language','The sound changes in detail.'],['Wiktionary: cuniculus','https://en.wiktionary.org/wiki/cuniculus','Descendant trees show how each language changed a word.'],['Forvo','https://forvo.com/','Hear the same word in all five languages.']]},

/* ---------------- 8 ---------------- */
{sys:'SPEED', title:'Think Faster: Timed Recall Drill', time:'5 min a round', tile:'60-second rounds on conjugations, irregulars, cognates and sound shifts, aimed at the exact spots that trip you up. Beat your best score.',
cliffs:['Speed comes from retrieval, not rereading','Answer before translating','Misses become your Anki cards','Short daily rounds'],
cards:[
{k:'learn', t:'Why speed drills work', h:'<p>Recognizing a form when you read it is not the same as producing it in conversation. Speed comes from <b>retrieval practice</b>: pulling the answer out of memory under light time pressure, over and over.</p><ul><li>Rounds are 60 seconds. Accuracy first, then speed.</li><li>Try to <b>answer before you translate</b> in your head.</li><li>Every miss is shown at the end. Turn your top 5 misses into Anki cards.</li><li>Two rounds a day beats one long session a week.</li></ul>'},
{k:'drill'}
],
teach:'<p><b>Classroom version:</b> put the drill on a screen and split the room into two teams that alternate questions. Announce the streak out loud; that energy is the point.</p><p><b>Refresher learners:</b> start with the Irregulars pool, because that is where adults who already "know" Spanish lose speed.</p><p><b>Track it:</b> keep a weekly best score on the board.</p>',
cp:[],
res:[['Anki','https://apps.ankiweb.net/','Turn your misses into spaced-repetition cards.'],['Reverso conjugator','https://conjugator.reverso.net/conjugation-spanish.html','Check any form you missed.']]},

/* ---------------- 9 ---------------- */
{sys:'TEACHING', title:'Teach It: The 30-Minute Lesson Kit', time:'8 min', tile:'A repeatable lesson structure, how to explain exceptions, and how to adapt the same systems for adults, homeschool teens and kids.',
cliffs:['Hook → rule → practice → game → exit ticket','Exceptions always come with a why','Every lesson reviews the last one','Use the same system for every level'],
cards:[
{k:'learn', t:'The 30-minute lesson template', h:'<table class="t"><tr><th>Min</th><th>Step</th><th>Example</th></tr><tr><td>3</td><td>Hook: odd one out</td><td>rabbit table with French hidden</td></tr><tr><td>7</td><td>One system</td><td>f- → h-, with 5 examples</td></tr><tr><td>8</td><td>Guided practice</td><td>learners predict 5 words, then check</td></tr><tr><td>7</td><td>Game</td><td>Think-faster drill, teams</td></tr><tr><td>5</td><td>Exit ticket</td><td>3 questions; misses go into next lesson\'s review</td></tr></table>'},
{k:'learn', t:'How to explain an exception', h:'<ol><li>State the rule and show it working 3 times.</li><li>Show the exception.</li><li>Give the <b>why</b>: a different root, frequency, a sound rule, or a borrowing.</li><li>Name the <b>family</b> it belongs to, so it stops being a one-off.</li><li>Add it to the exceptions wall and to Anki.</li></ol><p class="muted">"Because that\'s how it is" is the explanation of last resort. Most of the time there is a real story.</p>'},
{k:'tap', q:'A learner asks why it\'s <i>el día</i>. Best answer?', a:['It comes from Latin diēs, which was usually masculine, so the gender came with it even though it ends in -a','Just memorize it','It is feminine, really'], c:0, why:'Give the reason, then file it with the other -a rebels such as el mapa and el planeta.'},
{k:'learn', t:'Same systems, three levels', h:'<ul><li><b>Adults / refresher:</b> lead with Latin and the comparison tables. They enjoy the "why."</li><li><b>Homeschool teens:</b> use the cognate and sound-shift games, plus a Latin root of the week. These skills pay off on vocabulary tests and the SAT.</li><li><b>Kids:</b> skip the grammar. Use sounds, animals, songs and short chunks, with the other languages shown as a fun "same word, different country" moment.</li></ul>'},
{k:'learn', t:'Keep learners improving between lessons', h:'<ul><li>Anki deck of the week\'s exceptions (5 minutes a day).</li><li>Listening: Dreaming Spanish or Coffee Break podcasts.</li><li>One speaking task: say 5 sentences using today\'s system.</li><li>Start each lesson by reviewing the previous lesson\'s exit-ticket misses.</li></ul>'},
{k:'tap', q:'What should every lesson start with after the first one?', a:['A quick review of last lesson\'s misses','A brand-new topic','A long lecture'], c:0, why:'Spaced review is what makes a system stick.'}
],
teach:'<p><b>Your assignment:</b> pick any module, and teach it to one person in 15 minutes using the template. Note where they got confused; that is where your own understanding still has gaps.</p><p><b>Founding beta:</b> send your notes, and the best ones become the instructor guide.</p>',
cp:[
{q:'The template\'s first step is…', a:['A hook, such as an odd-one-out table','A grammar lecture','A test'], c:0, why:'Curiosity first.'},
{q:'Best way to make an exception stick?', a:['Give its reason and its family','Repeat it 50 times','Skip it'], c:0, why:'A reason plus a family turns a one-off into a pattern.'},
{q:'For kids, lead with…', a:['Sounds, animals and short phrases','Latin cases','The subjunctive'], c:0, why:'Save the systems for when they are ready.'}
],
res:[['Dreaming Spanish','https://www.dreamingspanish.com/','Listening practice between lessons.'],['Coffee Break Spanish','https://coffeebreaklanguages.com/coffeebreakspanish/','Free podcast.'],['Language method guide (v1)','method/','Our original method course: frequency words, spaced repetition, input.'],['Anki','https://apps.ankiweb.net/','Spaced-repetition flashcards.']]}
],
/* ---------------- DRILL POOLS: [prompt, answer, wrong1, wrong2, wrong3] ---------------- */
drill:{
all:{label:'Mixed: everything', items:[]},
verbs:{label:'Conjugation code', items:[
['hablar · nosotros · present','hablamos','hablemos','hablábamos','hablaremos'],
['comer · tú · imperfect','comías','comes','comiste','comerías'],
['vivir · ellos · future','vivirán','vivían','vivieron','vivan'],
['hablar · tú · preterite','hablaste','hablastes','hablabas','hablarás'],
['comer · yo · conditional','comería','comía','comeré','coma'],
['cantar · yo · present subjunctive','cante','canto','canta','cantara'],
['vivir · él · present subjunctive','viva','vive','vivía','vivió'],
['escribir · nosotros · preterite','escribimos','escribemos','escribíamos','escribamos'],
['trabajar · ellos · imperfect','trabajaban','trabajaron','trabajarán','trabajen'],
['ser · yo · imperfect','era','fui','sería','sea'],
['ir · nosotros · imperfect','íbamos','fuimos','vamos','iríamos'],
['ver · él · imperfect','veía','vio','vía','verá'],
['Latin cantat → Spanish','canta','canto','cantan','cantas'],
['Italian "noi cantiamo" → Spanish','cantamos','cantemos','cantáis','cantaban']
]},
irregular:{label:'Irregulars', items:[
['tener · yo · preterite','tuve','tení','tuvo','tenía'],
['hacer · él · preterite','hizo','hació','hice','hacía'],
['decir · ellos · preterite','dijeron','dijieron','decieron','dirían'],
['traer · ellos · preterite','trajeron','trajieron','traieron','traían'],
['poner · yo · preterite','puse','poní','puso','pondré'],
['saber · yo · present','sé','sabo','sepa','supe'],
['querer · nosotros · present','queremos','quieremos','queramos','quisimos'],
['poder · ellos · present','pueden','poden','pudieron','puedan'],
['pedir · él · preterite','pidió','pedió','pide','pidiera'],
['dormir · ellos · preterite','durmieron','dormieron','duermieron','dormían'],
['tener · yo · future','tendré','teneré','tenré','tuve'],
['salir · nosotros · future','saldremos','saliremos','salremos','salimos'],
['hacer · yo · future','haré','haceré','hacré','hice'],
['conocer · yo · present','conozco','conoco','conosco','conoce'],
['poner · ella · present subjunctive','ponga','pone','pona','puso'],
['ir · tú · present subjunctive','vayas','vas','irás','fueras'],
['ir · yo · preterite','fui','iba','fue','vaya'],
['venir · yo · preterite','vine','viní','vino','vendré'],
['estar · nosotros · preterite','estuvimos','estamos','estábamos','estemos'],
['caber · yo · present','quepo','cabo','cupo','quepa']
]},
cognates:{label:'Cognates', items:[
['"information" → Spanish','información','informazione','informação','informatión'],
['"university" → Spanish','universidad','universitad','università','universidade'],
['"finally" → Spanish','finalmente','finalamente','finalmento','finalidad'],
['"delicious" → Spanish','delicioso','deliciosa mente','delicidad','delicio'],
['"nation" → Portuguese','nação','nación','nazione','natião'],
['"city" → Italian','città','ciudad','cidade','cité'],
['"possible" → Portuguese','possível','posible','possibile','possivelo'],
['"famous" → French','fameux','famoso','famosé','famosité'],
['"station" → Spanish','estación','stación','estasión','stazione'],
['"necessary" → Spanish','necesario','necesorio','necesitario','necessario'],
['embarazada means','pregnant','embarrassed','busy','tired'],
['éxito means','success','exit','excited','exact'],
['actual means','current','actual / real','active','actor'],
['librería means','bookstore','library','free','bookshelf']
]},
sounds:{label:'Sound shifts', items:[
['Latin fīlius → Spanish','hijo','filio','fijo','figlio'],
['Latin facere → Spanish','hacer','facer','fazer','fare'],
['Latin farīna → Spanish','harina','farina','farinha','arina'],
['Latin petra → Spanish','piedra','pedra','pietra','petra'],
['Latin porta → Spanish','puerta','porta','pierta','porte'],
['Latin focus → Spanish','fuego','huego','fogo','fuoco'],
['Latin clāvis → Spanish','llave','clave','chave','chiave'],
['Latin pluvia → Portuguese','chuva','lluvia','pioggia','pluie'],
['Latin noctem → Italian','notte','noche','noite','nuit'],
['Latin lactem → Spanish','leche','latte','leite','lacte'],
['Latin octō → Portuguese','oito','ocho','otto','huit'],
['Latin lupus → Spanish','lobo','lupo','loup','lopo'],
['Latin schola → Spanish','escuela','scuola','escola','école'],
['Latin oculus → Spanish','ojo','occhio','olho','oclo'],
['Latin aurum → Spanish','oro','ouro','auro','or'],
['Latin lūna → Portuguese','lua','luna','lune','lunha'],
['Latin mortem → Spanish','muerte','morte','mierte','mort'],
['Latin plēnus → Spanish','lleno','pleno','cheio','pieno']
]}
}
};
