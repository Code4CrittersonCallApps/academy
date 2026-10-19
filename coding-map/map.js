/* Coding: Lay of the Land — content. Code uses [[t:text]] markers: v variable, f function, l loop, c conditional, d data shape, k keyword, n comment. */
function L(name, o){ // a language card
  return {k:'learn', t:name, tok:o.tok, h:'<div class="facts"><b>For</b><span>'+o.forr+'</span><b>Who</b><span>'+o.who+'</span><b>Runs</b><span>'+o.runs+'</span></div>', code:o.code, h2:o.after?'<p class="muted">'+o.after+'</p>':''};
}
window.DECK = {
storeKey:'academy-coding-map-v1', short:'Coding: Lay of the Land',
kicker:'Sheehan Academy · Start here before Code to Ship',
title:'Coding: Lay of the Land',
pitch:'A big-picture map before the hands-on work. Which language does which job, which tool to pick for what you want to build, how the pieces fit together, and how to read any code in 30 seconds the way you read a chart: zoom out first, then spot the patterns.',
cliff:[
 'Every language is a tool for a job. HTML/CSS/JS run the web, Python does data and automation, SQL asks databases questions, Kotlin and Swift build phone apps, Solidity runs on blockchains, Bash drives servers.',
 'Choose by the goal: "If you want to build X, use Y." Start with the simplest tool that ships, and upgrade only when you hit a wall.',
 'The tool stack has the same layers everywhere: an editor, Git/GitHub, hosting, a database, APIs that speak JSON, and AI assistants that write the first draft.',
 'All code is made of five shapes: variables, functions, loops, conditionals and data shapes. Spot them and you can read code you could never write.',
 'Reading code is like reading a chart. Zoom out (names, inputs, outputs), then find the repetition (loops) and the decision rules (ifs).',
 'Then go hands-on with a roadmap of free courses: freeCodeCamp, DataCamp\'s free tier, CS50, MDN and SQLBolt.'
],
drillModule:9, drillLabel:'⚡ 30-second read drill', drillTitle:'30-second read', drillHint:'Glance at the code, name what you see, and tap fast. Wrong answers flash the right one. Speed comes from recognizing the shapes, not from reading every character.',
extras:'<a class="tile" href="../coding/"><div class="num">NEXT</div><h3>Code to Ship (hands-on)</h3><p>12 build-it modules: booking form, spin wheel, mini game, Python chores, APIs.</p></a>',
modules:[
/* 1 */
{sys:'LANGUAGES', title:'The Map, Part 1: Web and Data Languages', time:'10 min', tile:'HTML/CSS, JavaScript/TypeScript, Python and SQL: what each is for, what it looks like (labeled), and who uses it.',
cliffs:['HTML = structure, CSS = style','JS = behavior in the browser','TS = JS with type labels','Python = data + automation','SQL = ask the database'],
cards:[
{k:'learn', t:'How to read the labeled snippets', h:'<p>Every snippet in this course is color-coded by its <b>job</b>. You don\'t need to know the syntax:</p><div class="legend"><span class="tv">variable</span><span class="tf">function</span><span class="tl">loop</span><span class="tc">conditional</span><span class="td">data shape</span><span class="tk">keyword</span><span class="tn">comment</span></div><p>Some cards relabel the colors for that language. In HTML, for example, keyword means tag. Each card\'s legend tells you what the colors mean there.</p><p class="muted">Snippets scroll sideways on a phone.</p>'},
L('HTML + CSS: the structure and the paint', {forr:'The structure (HTML) and look (CSS) of every web page and web app.', who:'Everyone who builds for the web: designers, marketers, developers.', runs:'In the browser. No install needed.', tok:{k:'tag',v:'attribute',d:'CSS style rule'},
 code:`<[[k:section]] [[v:class]]="card">
  <[[k:h2]]>Book a farm visit</[[k:h2]]>
  <[[k:a]] [[v:href]]="tel:+19045550100">Call us</[[k:a]]>
</[[k:section]]>
[[d:.card { padding: 12px; border-radius: 12px; }]]`, after:'Tags open and close around content. Attributes add settings. A CSS rule picks elements by name or class and styles them.'}),
L('JavaScript: the behavior', {forr:'Making pages respond: buttons, games, forms, live data. Also servers (Node.js) and apps.', who:'Web developers. It is the most-used language on GitHub.', runs:'Every browser, plus servers through Node.js.',
 code:`[[k:const]] [[v:price]] = [[d:{ base: 300, extraHour: 100 }]];

[[k:function]] [[f:quote]](hours) {
  [[c:if (hours < 1) return 0;]]
  return [[v:price]].base + (hours - 1) * [[v:price]].extraHour;
}`, after:'A variable holds a data shape (an object with two prices). A function takes hours and returns a quote. A conditional guards against bad input.'}),
L('TypeScript: JavaScript with labels on the boxes', {forr:'The same jobs as JavaScript, but types catch mistakes before the code runs. It is standard on larger teams.', who:'Professional web and app teams (React, Next.js, Node).', runs:'It gets compiled (translated) to plain JavaScript first.', tok:{d:'type (data shape)'},
 code:`[[k:type]] [[d:Booking = { name: string; kids: number }]];

[[k:function]] [[f:deposit]]([[v:b]]: Booking): number {
  return [[v:b]].kids * 12 * 0.25;
}`, after:'": number" and "Booking" are type labels. Pass in text where a number belongs and the editor flags it right away.'}),
L('Python: data and automation', {forr:'Data analysis, automation scripts, AI and machine learning, back ends, trading bots.', who:'Analysts, data scientists, AI engineers, scientists, and anyone automating chores.', runs:'Your computer, servers, Google Colab, Jupyter notebooks.',
 code:`[[k:import]] csv
[[v:total]] = 0
[[l:for row in]] csv.DictReader(open("sales.csv")):
    [[c:if row["status"] == "Paid":]]
        [[v:total]] += float(row["amount"])
[[f:print]]("Paid:", [[v:total]])`, after:'Reads a spreadsheet export, loops over each row, adds up only the paid ones, and prints the total. Indentation shows what is inside the loop.'}),
L('SQL: questions for a database', {forr:'Asking questions of data stored in tables: counts, totals, filters, joins. You describe the answer you want, not the steps to get it.', who:'Analysts, back-end developers, finance and ops people. It is a top skill on DataCamp-style tracks.', runs:'Inside databases: SQLite, Postgres, MySQL, BigQuery, Supabase.', tok:{k:'clause',d:'table',f:'aggregate',c:'filter',v:'column name'},
 code:`[[k:SELECT]] town, [[f:COUNT(*)]] [[k:AS]] [[v:bookings]]
[[k:FROM]] [[d:visits]]
[[c:WHERE visit_date >= '2026-01-01']]
[[k:GROUP BY]] town
[[k:ORDER BY]] [[v:bookings]] [[k:DESC]];`, after:'In plain English: "for 2026 visits, count bookings per town, biggest first." Clauses always come in the same order: SELECT, FROM, WHERE, GROUP BY, ORDER BY.'}),
{k:'tap', q:'You want to total paid invoices from 5,000 rows stored in a database. Which language asks the question most directly?', a:['SQL','HTML','CSS'], c:0, why:'SELECT SUM(amount) FROM invoices WHERE status = \'Paid\'. One line.'},
{k:'tap', q:'What does TypeScript add on top of JavaScript?', a:['Type labels that catch mistakes before the code runs','A different browser','Database storage'], c:0, why:'It compiles to plain JavaScript; the types are a safety net.'}
],
teach:'<p><b>One analogy per language:</b> HTML is the frame of the house, CSS the paint, JavaScript the wiring and switches, Python the robot in the garage, SQL the filing clerk who answers questions.</p><p><b>Then show the same job in two languages,</b> like a total in Python vs SQL, so learners see that languages are tools, not religions.</p>',
cp:[
{q:'Which language runs natively in every web browser?', a:['JavaScript','Python','Swift'], c:0, why:'Browsers run JavaScript (plus HTML and CSS).'},
{q:'In the SQL snippet, which clause filters the rows?', a:['WHERE','SELECT','ORDER BY'], c:0, why:'WHERE keeps only rows that match.'},
{q:'In Python, what shows that a line is inside a loop?', a:['Indentation','Curly braces','A semicolon'], c:0, why:'Python uses spaces to group lines.'}
],
res:[['MDN Web Docs','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide','The reference for HTML, CSS and JavaScript.'],['TypeScript handbook','https://www.typescriptlang.org/docs/handbook/intro.html','Official intro.'],['Python tutorial','https://docs.python.org/3/tutorial/','Official.'],['SQLBolt','https://sqlbolt.com/','Free interactive SQL lessons in the browser.']]},

/* 2 */
{sys:'LANGUAGES', title:'The Map, Part 2: Apps, Systems, Blockchain and Shell', time:'12 min', tile:'Java/Kotlin/Swift for phone apps, C#/C++/Rust/Go for games and systems, Solidity for smart contracts, and Bash for running computers.',
cliffs:['Kotlin = Android, Swift = iOS','C# = Unity games and business apps','C++/Rust = speed','Go = cloud servers','Solidity = smart contracts','Bash = command line'],
cards:[
L('Kotlin (and Java): Android apps', {forr:'Native Android apps. Java is the older language: lots of business software and older Android code.', who:'Android developers and enterprise teams (banks, big companies).', runs:'Android phones, servers (the JVM).', tok:{d:'data class'},
 code:`[[k:data class]] [[d:Animal(val name: String, val kind: String)]]

[[k:fun]] [[f:label]]([[v:a]]: Animal): String =
    [[c:if (a.kind == "goat")]] "Meet " + a.name + " the goat"
    [[c:else]] a.name`, after:'Google recommends Kotlin for new Android apps. A data class is a ready-made record, like one row in a sheet.'}),
L('Swift: iPhone and Mac apps', {forr:'Native iOS, iPadOS and Mac apps (with SwiftUI for screens).', who:'Apple-platform developers.', runs:'Apple devices. Building requires a Mac with Xcode.',
 code:`[[k:struct]] [[d:Animal]] { [[k:let]] [[v:name]]: String; [[k:let]] [[v:age]]: Int }

[[k:func]] [[f:isBaby]](_ a: Animal) -> Bool {
    [[c:if a.age < 1 { return true }]]
    [[k:return]] false
}`, after:'Very similar in style to Kotlin. Learn one and the other reads easily. Publishing on the App Store costs $99 a year.'}),
L('Java: the enterprise workhorse', {forr:'Large business systems, older Android apps, back ends.', who:'Corporate IT, banks, older Android projects.', runs:'Anywhere the Java Virtual Machine runs.', tok:{d:'class'},
 code:`[[k:public class]] [[d:Ticket]] {
    [[k:private int]] [[v:price]] = 25;
    [[k:public int]] [[f:total]]([[k:int]] [[v:qty]]) {
        [[k:return]] [[v:price]] * [[v:qty]];
    }
}`, after:'Wordier than Kotlin, but you will see this shape (class, fields, methods) in C# and many other languages.'}),
L('C#: Unity games and Windows/business apps', {forr:'Unity games (2D and 3D, mobile and console), Windows apps, business back ends on .NET.', who:'Game developers, Microsoft-shop IT teams.', runs:'Windows, servers, and every platform Unity ships to.',
 code:`[[k:public class]] [[d:Player]] : MonoBehaviour {
    [[k:public float]] [[v:speed]] = 5f;
    [[k:void]] [[f:Update]]() {
        transform.Translate([[v:speed]] * Time.deltaTime, 0, 0);
    }
}`, after:'Unity calls Update() every frame. That is the game loop from Code to Ship Module 8, handled for you.'}),
L('C++ and Rust: when speed is everything', {forr:'Game engines, browsers, trading engines, devices, operating systems. Rust is the modern, memory-safe choice, popular in crypto (Solana programs are written in Rust).', who:'Systems and performance engineers.', runs:'Compiled to machine code: very fast.', tok:{d:'type'},
 code:`[[n:// Rust]]
[[k:fn]] [[f:average]]([[v:prices]]: &[f64]) -> [[d:f64]] {
    [[k:let]] [[v:sum]]: f64 = [[v:prices]].iter().sum();
    [[v:sum]] / [[v:prices]].len() [[k:as]] f64
}`, after:'Rarely the first language for a business owner, but good to recognize: if a crypto project says "written in Rust," it is built for speed and safety.'}),
L('Go: simple, fast cloud servers', {forr:'Web servers, APIs, cloud tools (Docker and Kubernetes are written in Go).', who:'Back-end and infrastructure teams.', runs:'Servers, compiled to a single file.',
 code:`[[k:func]] [[f:handler]]([[v:w]] http.ResponseWriter, [[v:r]] *http.Request) {
    [[c:if r.Method != "GET" {]]
        http.Error(w, "not allowed", 405); [[k:return]]
    [[c:}]]
    fmt.Fprintln(w, "the farm is open")
}`, after:'This answers a web request. Every website\'s back end has some version of this: receive a request, check it, send a response.'}),
L('Solidity: smart contracts on Ethereum-style chains', {forr:'Programs that live on a blockchain and hold or move value: tokens, NFTs, sales, DeFi. Once deployed they are hard or impossible to change.', who:'Smart-contract developers and auditors.', runs:'On the Ethereum Virtual Machine (Ethereum, Base, Arbitrum, Polygon, Flare and others).', tok:{d:'contract / mapping',c:'rule (require)'},
 code:`[[k:contract]] [[d:Tickets]] {
    [[d:mapping(address => uint)]] [[k:public]] [[v:owned]];
    [[k:function]] [[f:buy]]() [[k:external payable]] {
        [[c:require(msg.value == 0.01 ether, "wrong price");]]
        [[v:owned]][msg.sender] += 1;
    }
}`, after:'A mapping is a ledger from wallet address to ticket count. require is a rule that undoes the whole transaction if it fails. Bugs here cost real money, so contracts get tested on a testnet and audited.'}),
L('Bash: talking to the computer directly', {forr:'Running commands, moving files, scheduling jobs, deploying sites. It is the glue on every server and Mac/Linux machine.', who:'Developers, IT, data engineers, and AI coding agents (they run Bash constantly).', runs:'Terminals on Mac and Linux; Windows through WSL or Git Bash.',
 code:`[[n:# back up today's photos, then publish the site]]
[[v:DAY]]=$(date +%F)
[[l:for f in photos/*.jpg; do]] cp "$f" "backup/$DAY-$(basename "$f")"; [[l:done]]
[[c:if git diff --quiet; then]] echo "nothing to publish"
[[c:else]] git commit -am "update $DAY" && git push; [[c:fi]]`, after:'When an AI agent says "I ran a command," it usually means Bash.'}),
{k:'tap', q:'You want an app in the Google Play Store, built the "official" native way. Which language?', a:['Kotlin','Swift','Solidity'], c:0, why:'Kotlin is Google\'s recommended language for Android. Swift is Apple\'s.'},
{k:'tap', q:'In the Solidity snippet, what happens if someone sends the wrong amount?', a:['require fails and the whole transaction is undone','They get a free ticket','The contract deletes itself'], c:0, why:'require is a rule that undoes everything if it is not met.'}
],
teach:'<p><b>Map it on a whiteboard:</b> draw columns for Web, Phone, Data, Games, Systems, Blockchain and Server glue, and drop each language into its column. Learners remember the map, not the syntax.</p><p><b>Shape spotting:</b> show the Java, C# and Kotlin snippets side by side and ask what is the same. Class, fields, function, return: it is the same skeleton in different clothes.</p>',
cp:[
{q:'Which language does Unity use for game scripts?', a:['C#','Go','Bash'], c:0, why:'Unity scripts are C#.'},
{q:'Solana programs and many speed-critical tools are written in…', a:['Rust','HTML','SQL'], c:0, why:'Rust is fast and memory-safe.'},
{q:'"for f in photos/*.jpg; do … done" is a ___ in Bash.', a:['loop','conditional','data shape'], c:0, why:'It repeats for each matching file.'}
],
res:[['Kotlin: getting started','https://kotlinlang.org/docs/getting-started.html','Official.'],['Android Basics with Compose','https://developer.android.com/courses/android-basics-compose/course','Google\'s free Android course.'],['Swift','https://developer.apple.com/swift/','Apple\'s Swift resources.'],['Learn C# / .NET','https://dotnet.microsoft.com/en-us/learn','Microsoft\'s free learning hub.'],['The Rust Book','https://doc.rust-lang.org/book/','Free official book.'],['A Tour of Go','https://go.dev/tour/','Interactive intro.'],['Solidity docs','https://docs.soliditylang.org/','Official.'],['CryptoZombies','https://cryptozombies.io/','Learn Solidity by building a game.'],['LinuxCommand.org','https://linuxcommand.org/','Free guide to the command line and Bash.']]},

/* 3 */
{sys:'DECISIONS', title:'If You Want to Build X, Use Y', time:'10 min', tile:'Decision cards for 8 goals: website, phone app, game, data dashboard, automation, AI chatbot, crypto bot or smart contract, and an internal business tool.',
cliffs:['Simplest tool that ships wins','Web first, app store later','Sheets before databases','Keys never in the browser','Test crypto on testnets'],
cards:[
{k:'learn', t:'Website and phone app', h:'<div class="decide"><b>Build: a website or landing page</b><div class="pick">HTML/CSS/JS → GitHub Pages</div><p>This is exactly what the academy, Gold and Critters Play run on: free, fast, no server. Move up to a framework (React/Next.js) on Vercel or Netlify when you need logins, many dynamic pages or server code. No-code options: Carrd, Wix, Squarespace.</p></div><div class="decide"><b>Build: an Android or iPhone app</b><div class="pick">Step 1: a web app (PWA) · Step 2: Flutter or React Native (Expo) · Native: Kotlin / Swift</div><p>A PWA is your web app installed to the home screen, with no store needed. When you need the stores, one cross-platform codebase covers both. Google Play has a one-time $25 developer fee, and new personal accounts must run a closed test with real testers first (12 testers for 14 days as of the current policy; check before you start). Apple charges $99 a year.</p></div>'},
{k:'tap', q:'Fastest way to get the Gold app onto parents\' home screens without an app store?', a:['Make it an installable web app (PWA)','Rewrite it in C++','Put it on a blockchain'], c:0, why:'It reuses the HTML/JS you already have.'},
{k:'learn', t:'Game and data dashboard', h:'<div class="decide"><b>Build: a game</b><div class="pick">Browser: JavaScript + Canvas (or Phaser) · Bigger 2D/3D: Godot (free) or Unity (C#)</div><p>Pyrenees Guard and Barn Cat are browser canvas games. Godot is free and open source. Unity is the industry standard for mobile and 3D.</p></div><div class="decide"><b>Build: data analysis or a dashboard</b><div class="pick">SQL to pull the data · Python + pandas to analyze it · Sheets / Looker Studio or Streamlit to show it</div><p>This is the DataCamp track: SQL and Python. Streamlit turns a Python script into a web dashboard in a few lines.</p></div>'},
{k:'learn', t:'Automation and AI chatbot', h:'<div class="decide"><b>Build: an automation</b><div class="pick">No-code glue: Zapier / Make · Google Apps Script (Sheets, Gmail, Calendar) · Python scripts · Bash on servers</div><p>Rule: if it connects two apps, try Zapier or Apps Script first. If it crunches files or data, use Python.</p></div><div class="decide"><b>Build: an AI chatbot or assistant</b><div class="pick">Python or JavaScript calling an AI model\'s API (xAI, OpenAI, Anthropic)</div><p>The API key must stay on a server, never in a public web page. Low-code route: assistant builders inside the AI platforms, or Zapier\'s AI steps.</p></div>'},
{k:'learn', t:'Crypto bot, smart contract, internal tool', h:'<div class="decide"><b>Build: a crypto trading or alert bot</b><div class="pick">Python + the ccxt library (talks to 100+ exchange APIs)</div><p>Start read-only (prices, alerts), then paper-trade. Give API keys trade-only permission with withdrawals OFF.</p></div><div class="decide"><b>Build: a smart contract or token</b><div class="pick">Solidity, tested in Remix on a testnet first</div><p>Deployed code is hard to change and holds real money: audit it before mainnet. A meme-coin launchpad is a product, not code you write.</p></div><div class="decide"><b>Build: an internal business tool</b><div class="pick">Google Sheets + Apps Script → Glide (app from a sheet) → Supabase / Retool when you outgrow sheets</div><p>Booking trackers, helper schedules and inventory almost always start as a sheet.</p></div>'},
{k:'tap', q:'You want a bot that texts you when INJ crosses $8.60. Simplest real-code route?', a:['Python + ccxt reading prices, with an alert step','Solidity smart contract','A Unity game'], c:0, why:'Read-only price checks plus a notification. No trading permissions needed.'},
{k:'tap', q:'Where does an AI API key belong?', a:['On a server or in a secrets setting, never in public web code','In your HTML','In a GitHub Pages file'], c:0, why:'Anything in a public page is readable by anyone.'}
],
teach:'<p><b>Run it as a game show:</b> read out a goal ("a waiver form parents sign on a phone") and have teams shout the stack. Then argue about it. The arguing is the learning, because there is usually more than one good answer.</p><p><b>Always ask:</b> "What\'s the simplest version that works this week?"</p>',
cp:[
{q:'Best first stack for an internal booking tracker?', a:['Google Sheets + Apps Script (or Glide)','A Rust server','Solidity'], c:0, why:'Start with a sheet and upgrade when it hurts.'},
{q:'A data dashboard from sales data most naturally uses…', a:['SQL + Python, shown in Sheets/Looker Studio or Streamlit','Swift','Bash only'], c:0, why:'Pull with SQL, analyze with Python, then display.'},
{q:'Before deploying a smart contract with real money you should…', a:['Test on a testnet and get it reviewed or audited','Deploy and see what happens','Put the key in the contract'], c:0, why:'Mistakes on the main chain are expensive and often permanent.'}
],
res:[['Expo (React Native)','https://expo.dev/','Build iOS and Android apps with JavaScript.'],['Flutter','https://flutter.dev/','One codebase for iOS and Android.'],['Godot','https://godotengine.org/','Free open-source game engine.'],['Unity Learn','https://learn.unity.com/','Free Unity courses.'],['Streamlit','https://streamlit.io/','Python to web dashboard.'],['ccxt','https://github.com/ccxt/ccxt','Library for crypto exchange APIs.'],['Remix IDE','https://remix.ethereum.org/','Write and test Solidity in the browser.'],['Zapier','https://zapier.com/','No-code app automation.'],['Make','https://www.make.com/','Visual automation.'],['Glide','https://www.glideapps.com/','Apps from spreadsheets.'],['Retool','https://retool.com/','Internal tools on top of databases.']]},

/* 4 */
{sys:'TOOLS', title:'The Tool Stack, Part 1: Editors, Git/GitHub, Hosting', time:'9 min', tile:'Where code is written (VS Code, Cursor), saved with history (Git/GitHub), and put online (GitHub Pages, Vercel, Netlify).',
cliffs:['Editor = where you write','Git = save points','GitHub = Git online + teamwork','Static vs dynamic hosting'],
cards:[
{k:'learn', t:'Editors: VS Code and Cursor', h:'<p><b>VS Code</b> (free, Microsoft) is the most-used code editor: files on the left, code in the middle, a terminal at the bottom, and extensions for every language.</p><p><b>Cursor</b> is built on VS Code with AI throughout: chat about your files, edit many files at once, and let an agent run commands. Same layout, so skills transfer.</p><p class="muted">Also good to recognize: JetBrains IDEs (IntelliJ, PyCharm), Xcode (Apple apps), Android Studio (Android apps).</p>'},
{k:'learn', t:'Git and GitHub: save points and teamwork', h:'<table class="t"><tr><th>Word</th><th>Means</th></tr><tr><td>repository (repo)</td><td>a project folder with full history</td></tr><tr><td>commit</td><td>a save point with a note</td></tr><tr><td>branch</td><td>a parallel copy to try something safely</td></tr><tr><td>pull request (PR)</td><td>"please review and merge my branch"</td></tr><tr><td>push / pull</td><td>send your commits up / bring others\' down</td></tr><tr><td>clone / fork</td><td>copy a repo to your machine / to your account</td></tr></table><p>Git is the tool; GitHub is the website that hosts Git repos. Your org (Code4CrittersonCallApps) holds gold, critters-play, market-universe and academy.</p>'},
{k:'tap', q:'A commit is best described as…', a:['A save point with a note you can return to','A paid upgrade','A web host'], c:0, why:'It is like a dated snapshot of the project.'},
{k:'learn', t:'Hosting: static vs dynamic', h:'<p><b>Static hosting</b> serves files exactly as they are: HTML, CSS, JS, images. Any "smarts" run in the visitor\'s browser. It is free, fast and nearly unbreakable. <b>GitHub Pages</b> is static, which is why your sites are free.</p><p><b>Dynamic hosting</b> runs code on a server for each request: logins, payments, private data. <b>Vercel</b> and <b>Netlify</b> host static sites <i>and</i> small server functions, with preview links for every change, on free tiers.</p><table class="t"><tr><th>Need</th><th>Pick</th></tr><tr><td>Brochure, course, game</td><td>GitHub Pages</td></tr><tr><td>Form that emails you, a hidden API key</td><td>Netlify/Vercel functions</td></tr><tr><td>Accounts, database, payments</td><td>Vercel/Netlify + Supabase/Firebase + Stripe</td></tr></table>'},
{k:'tap', q:'You need to hide an API key and still keep the site cheap. Best fit?', a:['A Netlify or Vercel serverless function','Put it in the GitHub Pages HTML','Email it to users'], c:0, why:'The function runs on the server, so the key never reaches the browser.'}
],
teach:'<p><b>Live demo:</b> change one word on a GitHub Pages site, commit, and refresh a minute later in front of the class. Seeing "edit → live" removes the mystery.</p><p><b>Analogy:</b> Git is Track Changes for whole folders. GitHub is Google Drive for those folders.</p>',
cp:[
{q:'GitHub Pages is…', a:['Static hosting: serves files, no server code','A database','An editor'], c:0, why:'That is why it is free and simple.'},
{q:'Cursor is…', a:['A VS Code-based editor with AI built in','A hosting company','A database'], c:0, why:'Same layout as VS Code, plus AI.'},
{q:'"Please review and merge my changes" is a…', a:['pull request','clone','commit'], c:0, why:'PRs are how teams review code.'}
],
res:[['VS Code docs','https://code.visualstudio.com/docs','Official.'],['Cursor','https://cursor.com/','AI code editor.'],['GitHub Hello World','https://docs.github.com/en/get-started/start-your-journey/hello-world','Repos, branches, PRs in 10 minutes.'],['Vercel docs','https://vercel.com/docs','Hosting + functions.'],['Netlify docs','https://docs.netlify.com/','Hosting + functions + forms.']]},

/* 5 */
{sys:'TOOLS', title:'The Tool Stack, Part 2: Databases, APIs/JSON, No-Code, AI Assistants', time:'11 min', tile:'Where data lives (SQLite, Postgres, Supabase, Firebase), how programs talk (APIs and JSON), the no-code shortcuts (Zapier, Glide, Bubble), and AI coding help.',
cliffs:['SQLite = one file','Postgres = the standard','Supabase = hosted Postgres + logins','Firebase = Google documents','JSON = the shape of API data'],
cards:[
{k:'learn', t:'Databases: four you will hear about', h:'<table class="t"><tr><th>Database</th><th>What it is</th><th>Use when</th></tr><tr><td><b>SQLite</b></td><td>a whole database in one file; built into phones and Python</td><td>local apps, prototypes, scripts</td></tr><tr><td><b>Postgres</b></td><td>the standard open-source SQL server database</td><td>real products with many users</td></tr><tr><td><b>Supabase</b></td><td>hosted Postgres plus logins, file storage and an instant API</td><td>you want a back end without running servers</td></tr><tr><td><b>Firebase</b></td><td>Google\'s document (NoSQL) database plus auth and real-time sync</td><td>mobile apps, chat, live updates</td></tr></table><p class="muted">SQL databases store tables (rows and columns, like Sheets). Document databases store JSON-like records.</p>'},
{k:'learn', t:'APIs and JSON: how programs talk', h:'<p>An <b>API</b> is a menu another program offers: send a request to a URL, get data back. Most answers come as <b>JSON</b>: objects in <code>{ }</code>, lists in <code>[ ]</code>.</p>', tok:{d:'object { }',l:'list [ ]',v:'key'},
 code:`[[d:{]]
  [[v:"product"]]: "BTC-USD",
  [[v:"price"]]: 82583.12,
  [[v:"candles"]]: [[l:[ [1760832000, 82100, 83050], [1760835600, 82950, 82580] ]]]
[[d:}]]`, h2:'<p>That is the shape market-universe pulls from the Coinbase API: an object with keys, and a list of candles where each candle is itself a small list.</p>'},
{k:'tap', q:'In JSON, square brackets [ ] hold…', a:['A list (ordered items)','A function','A comment'], c:0, why:'{ } is an object (keys and values); [ ] is a list.'},
{k:'learn', t:'No-code and low-code: when not to code', h:'<ul><li><b>Zapier / Make:</b> "when X happens in app A, do Y in app B." Form submitted → add Sheet row → text me.</li><li><b>Glide:</b> turns a Google Sheet into a phone-friendly app in an afternoon.</li><li><b>Bubble:</b> visual builder for full web apps with a database and logins.</li><li><b>Google Apps Script:</b> the low-code bridge: a little JavaScript inside Sheets and Gmail.</li></ul><p class="muted">Trade-off: fast to start, monthly fees, harder to move off later. Great for testing whether anyone wants the thing.</p>'},
{k:'learn', t:'AI coding assistants: three levels', h:'<table class="t"><tr><th>Level</th><th>Examples</th><th>Good for</th></tr><tr><td>Chat</td><td>Grok, ChatGPT, Claude, Gemini</td><td>explain code, write a single file, debug an error</td></tr><tr><td>In-editor</td><td>GitHub Copilot, Cursor</td><td>autocomplete, edits across your project</td></tr><tr><td>Agents</td><td>coding agents that run commands, test and publish</td><td>multi-step builds like these academy sites</td></tr></table><p>Your edge as the human: knowing the map, so you can say what to build, which tool to use, and spot when the result is wrong.</p>'},
{k:'tap', q:'Booking form → new row in Google Sheets → text to your phone, no code. Which tool?', a:['Zapier (or Make)','Postgres','Rust'], c:0, why:'That is exactly the "when this, do that" glue they are built for.'}
],
teach:'<p><b>Show a real API live:</b> paste a public API URL into the browser (the Open-Meteo weather link from Code to Ship works) and read the JSON together. Name each object and list out loud.</p><p><b>Then ask:</b> "Where would this data live if we saved it: a sheet, SQLite, or Supabase?"</p>',
cp:[
{q:'A whole database stored in one file, built into Python and phones:', a:['SQLite','Firebase','Zapier'], c:0, why:'Perfect for local tools and prototypes.'},
{q:'Supabase gives you…', a:['Hosted Postgres plus logins and an instant API','A code editor','A smart-contract chain'], c:0, why:'A back end without running servers.'},
{q:'API answers usually come back as…', a:['JSON','PDF','MP3'], c:0, why:'Objects { } and lists [ ].'}
],
res:[['SQLite','https://www.sqlite.org/','Official site.'],['PostgreSQL docs','https://www.postgresql.org/docs/','Official.'],['Supabase docs','https://supabase.com/docs','Hosted Postgres back end.'],['Firebase docs','https://firebase.google.com/docs','Google\'s app back end.'],['JSON.org','https://www.json.org/','The JSON format on one page.'],['JSONPlaceholder','https://jsonplaceholder.typicode.com/','Free fake API to practice with.'],['Bubble','https://bubble.io/','Visual web app builder.']]},

/* 6 */
{sys:'ARCHITECTURE', title:'How the Pieces Fit: Front End, Back End, Database, API', time:'8 min', tile:'What happens when someone taps your link, where each kind of code runs, and why your sites are front-end only (and when you will need a back end).',
cliffs:['Front end = what users see','Back end = server logic','Database = memory','API = the waiter between them'],
cards:[
{k:'learn', t:'The restaurant model', h:'<table class="t"><tr><th>Piece</th><th>Restaurant</th><th>Tech</th></tr><tr><td>Front end</td><td>dining room and menu</td><td>HTML/CSS/JS in the browser or app</td></tr><tr><td>API</td><td>the waiter</td><td>URLs that take requests and return JSON</td></tr><tr><td>Back end</td><td>kitchen</td><td>server code: Python, JS (Node), Go, Java, C#</td></tr><tr><td>Database</td><td>pantry and recipe book</td><td>Postgres, SQLite, Firebase</td></tr></table>'},
{k:'learn', t:'What happens when someone taps your link', h:'<ol><li>The phone looks up the domain (DNS): "where is code4crittersoncallapps.github.io?"</li><li>The server sends back HTML, then CSS, JS and images.</li><li>The browser builds the page and runs the JavaScript.</li><li>The JavaScript may call an API (Coinbase prices, weather) and draw the results.</li><li>Clicks and taps run more JavaScript, which might save to localStorage or send to a server.</li></ol><p>DevTools → Network shows every step of this as it happens.</p>'},
{k:'learn', t:'Your repos on the map', h:'<table class="t"><tr><th>Repo</th><th>Front end</th><th>API calls</th><th>Back end / DB</th></tr><tr><td>academy</td><td>✓</td><td>weather example</td><td>none (localStorage)</td></tr><tr><td>gold</td><td>✓</td><td>none</td><td>none</td></tr><tr><td>critters-play</td><td>✓ canvas games</td><td>none</td><td>none (scores in localStorage)</td></tr><tr><td>market-universe</td><td>✓ charts</td><td>Coinbase, CoinGecko</td><td>build scripts run separately in Python</td></tr></table><p><b>When you will need a back end:</b> real logins, payments, emailing people automatically, prize claims that can\'t be faked, shared leaderboards.</p>'},
{k:'tap', q:'Critters Play stores high scores in localStorage. What is the catch?', a:['Scores live only on that one device and can be edited, so no shared or tamper-proof leaderboard','They are public to everyone','They cost money'], c:0, why:'Shared, trusted scores need a back end and a database.'},
{k:'tap', q:'In the restaurant model, the API is…', a:['the waiter','the pantry','the dining room'], c:0, why:'It carries requests to the kitchen and brings back results.'}
],
teach:'<p><b>Act it out:</b> one person is the browser, one the API, one the database. Pass a sticky-note "request" along the line and back. Then add a fake login and ask who has to check the password. (The back end, never the browser.)</p>',
cp:[
{q:'Which piece should check a password?', a:['The back end','The front end JavaScript','The CSS'], c:0, why:'Anything in the browser can be read or bypassed.'},
{q:'What does DevTools → Network show?', a:['Every file and API call the page loads','Your bank balance','The database schema'], c:0, why:'It is the live request log.'},
{q:'Which need forces you to add a back end?', a:['Taking payments and real logins','Changing a color','Adding a picture'], c:0, why:'Secrets and trusted actions need a server.'}
],
res:[['MDN: How the web works','https://developer.mozilla.org/en-US/docs/Learn_web_development','Start with Getting Started.'],['Chrome DevTools','https://developer.chrome.com/docs/devtools','Network and Console tabs.'],['roadmap.sh','https://roadmap.sh/','Visual maps for front end, back end and more.']]},

/* 7 */
{sys:'READING', title:'Read Code Like a Chart: The Five Shapes', time:'10 min', tile:'Variables, functions, loops, conditionals and data shapes. A 30-second scan routine: zoom out to the names, then find the repetition and the rules.',
cliffs:['Variables = levels you mark','Functions = indicators','Loops = scanning every candle','Ifs = your trade rules','Data shapes = OHLC records'],
cards:[
{k:'learn', t:'The chart analogy', h:'<table class="t"><tr><th>Code shape</th><th>On a chart</th><th>Looks like</th></tr><tr><td><span class="tv">variable</span></td><td>a level you mark and name</td><td><code>stop = 7.75</code></td></tr><tr><td><span class="tf">function</span></td><td>an indicator: prices in, number out</td><td><code>rsi(prices, 14)</code></td></tr><tr><td><span class="tl">loop</span></td><td>scanning every candle</td><td><code>for … / forEach / while</code></td></tr><tr><td><span class="tc">conditional</span></td><td>your trade rule</td><td><code>if close &gt; level …</code></td></tr><tr><td><span class="td">data shape</span></td><td>a candle record, a series</td><td><code>{ open, high, low, close }</code>, <code>[ … ]</code></td></tr></table>'},
{k:'learn', t:'The 30-second scan (zoom out, then in)', h:'<ol><li><b>Timeframe = names (5s):</b> read the file and function names. What is this about?</li><li><b>Inputs and outputs (5s):</b> what goes in (parameters, fetch, form fields) and what comes out (return, text on screen, saved data)?</li><li><b>Repetition (5s):</b> find the loops. What is being scanned?</li><li><b>Rules (10s):</b> find the ifs. What decisions get made?</li><li><b>Shape of the data (5s):</b> objects { } and lists [ ]. What does one record look like?</li></ol><p class="muted">Skip the punctuation. Like candles, the shape matters more than every tick.</p>'},
{k:'tap', q:'Spot the shape: what is the highlighted part?', code:`[[l:for (const candle of candles)]] {
  if (candle.close > level) breakouts++;
}`, a:['A loop: it scans every candle','A conditional','A data shape'], c:0, why:'"for … of" repeats once per item.'},
{k:'tap', q:'Spot the shape:', code:`[[c:if (rsi(closes, 14) < 30 && close > ema21)]] {
  signal = "buy the reclaim";
}`, a:['A conditional (a trade rule)','A loop','A function definition'], c:0, why:'if (…) runs the block only when the rule is true. && means AND.'},
{k:'tap', q:'What is the data shape of <code>c</code>?', code:`const [[v:c]] = [[d:{ time: 1760832000, open: 82100, high: 83050, low: 81900, close: 82580 }]];`, a:['An object: one candle with named fields','A list of candles','A function'], c:0, why:'Curly braces with name: value pairs make an object.'},
{k:'learn', t:'Same shapes, any language', h:'<p>The punctuation changes but the five shapes stay the same:</p><table class="t"><tr><th>Shape</th><th>JavaScript</th><th>Python</th><th>SQL</th></tr><tr><td>loop</td><td>for / forEach</td><td>for x in</td><td>(implicit: runs over every row)</td></tr><tr><td>conditional</td><td>if (…) { }</td><td>if …:</td><td>WHERE / CASE WHEN</td></tr><tr><td>function</td><td>function f() / () =&gt;</td><td>def f():</td><td>COUNT(), SUM()</td></tr><tr><td>data</td><td>{ } [ ]</td><td>{ } [ ]</td><td>tables</td></tr></table>'}
],
teach:'<p><b>Highlighter drill:</b> print a snippet and give learners five colored highlighters, one per shape. Time them for 30 seconds. Compare results; disagreements start the best discussions.</p><p><b>Chart people:</b> lead with the analogy table. Traders already think in loops and rules.</p>',
cp:[
{q:'In the chart analogy, a function is like…', a:['An indicator: data in, number out','A trendline drawing','The chart background'], c:0, why:'rsi(prices) takes a series and returns a value.'},
{q:'First step of the 30-second scan?', a:['Read the names to see what it is about','Read every symbol','Run it'], c:0, why:'Zoom out first, just like on a chart.'},
{q:'In SQL, the conditional shape usually shows up as…', a:['WHERE (or CASE WHEN)','SELECT','FROM'], c:0, why:'WHERE filters rows by a rule.'}
],
res:[['javascript.info','https://javascript.info/','Clear explanations of each shape in JavaScript.'],['Python tutorial: control flow','https://docs.python.org/3/tutorial/','Loops and ifs in Python.'],['W3Schools SQL','https://www.w3schools.com/sql/','Quick SQL lookups.']]},

/* 8 */
{sys:'READING', title:'Read Your Own Repos: Real Snippets', time:'12 min', tile:'Practice the scan on real code from gold, critters-play, market-universe and academy. Find the loops, rules and data shapes in code you already use.',
cliffs:['gold: config as a data list','critters-play: nested loops + scoring rules','market-universe: an RSI indicator','academy: weighted random'],
cards:[
{k:'learn', t:'gold: the games are a data list', h:'<p>From <code>gold/js/gold-config.js</code> (trimmed). The page reads this list and draws a tile for each game, so changing games means editing data, not code.</p>',
 code:`[[n:/* 3 core games plus 1 swap-in slot. To fill the slot,
   give it an href and set status:"live". */]]
[[v:window.GOLD_GAMES]] = [[d:[]]
  [[d:{ id: "pyrenees", title: "Pyrenees Guard", problem: "Earn game",
    href: "pyrenees-guard.html", status: "live" },]]
  [[d:{ id: "barn-cat", title: "Barncat Defender", problem: "Calm-down game",
    href: "barn-cat.html?calm=1", status: "live" },]]
  [[d:{ id: "swap", title: "Coming soon", href: null, status: "soon" }]]
[[d:];]]`},
{k:'tap', q:'What is the data shape of <code>GOLD_GAMES</code>?', a:['A list [ ] of objects { }, one per game','A single function','A loop'], c:0, why:'Square brackets hold the list; each { } is one game record.'},
{k:'tap', q:'Per the comment, how do you turn on the swap-in slot?', a:['Give it an href and set status: "live"','Delete the file','Rename the repo'], c:0, why:'Data-driven design: change values, not logic.'},
{k:'learn', t:'critters-play: building the barn holes', h:'<p>From <code>critters-play/js/barn-cat.js</code>. Two loops, one inside the other, lay out a grid of holes, like scanning rows and columns of a heatmap.</p>',
 code:`[[k:function]] [[f:makeHoles]]() {
  [[k:var]] [[v:holes]] = [[d:[]]];
  [[k:var]] [[v:startX]] = W / 2 - 56;
  [[l:for (var row = 0; row < ROWS; row++) {]]
    [[l:for (var col = 0; col < COLS; col++) {]]
      [[v:holes]].push([[d:{ x: startX + col * 56, y: 118 + row * 78,
        pest: null, rise: 0, rising: false, life: 0, hit: 0 }]]);
    [[l:}]]
  [[l:}]]
  [[k:return]] [[v:holes]];
}`},
{k:'tap', q:'If ROWS = 3 and COLS = 3, how many holes does makeHoles() return?', a:['9','6','3'], c:0, why:'The inner loop runs 3 times for each of 3 rows: 3 × 3.'},
{k:'tap', q:'critters-play barn-cat.js, the scoring rule. A snake hit with combo = 2 in wave 1 scores…', code:`[[k:var]] [[v:pts]] = ([[c:o.pest === "snake" ? 150 : 50]]) + state.combo * 10 + state.wave * 5;`, a:['175','155','70'], c:0, why:'Snake = 150, plus combo 2 × 10 = 20, plus wave 1 × 5 = 5. "a ? b : c" is a one-line if/else.'},
{k:'tap', q:'critters-play scores.js: what does getBest return if nothing has been saved yet?', code:`[[k:function]] [[f:getBest]]([[v:key]]) {
  [[k:try]] {
    [[k:var]] [[v:v]] = parseInt(localStorage.getItem(key), 10);
    [[k:return]] [[c:isNaN(v) ? 0 : v]];
  } [[k:catch]] (e) {
    [[k:return]] 0;
  }
}`, a:['0','null','It crashes'], c:0, why:'An empty value parses to NaN, and the rule returns 0. try/catch covers browsers that block storage.'},
{k:'learn', t:'market-universe: an RSI indicator in code', h:'<p>From <code>market-universe/hub/app.js</code>, reformatted for reading. This is the Wilder RSI you already read on charts.</p>',
 code:`[[k:function]] [[f:rsi]]([[v:a]], [[v:n]] = 14) {
  [[k:let]] [[v:g]] = 0, [[v:l]] = 0;
  [[l:for (let i = 1; i <= n; i++) {]]
    [[k:const]] [[v:d]] = a[i] - a[i - 1];
    [[c:d > 0 ? g += d : l -= d;]]
  [[l:}]]
  g /= n; l /= n;
  [[l:for (let i = n + 1; i < a.length; i++) {]]
    [[k:const]] [[v:d]] = a[i] - a[i - 1];
    g = (g * (n - 1) + Math.max(d, 0)) / n;
    l = (l * (n - 1) + Math.max(-d, 0)) / n;
  [[l:}]]
  [[k:return]] 100 - 100 / (1 + g / (l || 1e-9));
}`},
{k:'tap', q:'What does <code>n = 14</code> in the parameters mean?', a:['A default: 14-period RSI unless you pass another number','It loops 14 times only','It is the price'], c:0, why:'Default parameters fill in when the caller does not specify.'},
{k:'tap', q:'What does the first loop do?', a:['Adds up the gains and losses over the first 14 changes, to seed the averages','Draws the chart','Fetches prices'], c:0, why:'Then g and l are divided by n, and the second loop smooths them forward (Wilder smoothing).'},
{k:'tap', q:'market-universe getJ: what does HTTP status 429 mean here?', code:`[[k:async function]] [[f:getJ]]([[v:u]]) {
  [[k:const]] [[v:r]] = [[k:await]] fetch(u);
  [[c:if (r.status === 429) throw new Error('rate-limited');]]
  [[c:if (!r.ok) throw new Error(r.status);]]
  [[k:return]] r.json();
}`, a:['Too many requests: the API is rate-limiting you','Success','Page not found'], c:0, why:'429 = slow down. That is why the hub caches results in localStorage.'},
{k:'tap', q:'academy coding/examples/wheel.html: what makes "Free visit" rare?', code:`[[k:const]] [[v:prizes]] = [[d:[ {name:"Sticker", weight:40}, {name:"Free visit", weight:5} ]]];
[[k:function]] [[f:pick]]() {
  [[k:let]] [[v:r]] = Math.random() * TOTAL;
  [[l:for (let i = 0; i < prizes.length; i++) {]] r -= prizes[i].weight; [[c:if (r < 0) return i;]] [[l:}]]
}`, a:['Its small weight: 5 out of the total','Its position in the list','The color of its slice'], c:0, why:'A random number is spent down by each weight. Bigger weights catch it more often.'}
],
teach:'<p><b>Use the learners\' own world:</b> code from a game they played or a chart they use reads ten times easier than textbook code.</p><p><b>Prediction first:</b> before revealing an answer (like 175 points), have everyone commit to a guess. Prediction plus feedback is how chart reading was learned too.</p>',
cp:[
{q:'Two loops nested inside each other usually mean…', a:['A grid or table: every row × every column','An error','Two separate programs'], c:0, why:'Like makeHoles: rows × columns.'},
{q:'"a ? b : c" means…', a:['If a is true then b, otherwise c','Loop a, b, c times','Call function a'], c:0, why:'It is the one-line conditional (ternary).'},
{q:'Changing which games Gold shows mainly means editing…', a:['The GOLD_GAMES data list','The CSS','The RSI function'], c:0, why:'The page renders whatever the list says.'}
],
res:[['gold repo','https://github.com/Code4CrittersonCallApps/gold','Browse gold-config.js.'],['critters-play repo','https://github.com/Code4CrittersonCallApps/critters-play','Browse js/barn-cat.js and js/scores.js.'],['market-universe repo','https://github.com/Code4CrittersonCallApps/market-universe','Browse hub/app.js.'],['academy repo','https://github.com/Code4CrittersonCallApps/academy','This course\'s own code.']]},

/* 9 */
{sys:'SPEED', title:'30-Second Read: Timed Drill', time:'5 min a round', tile:'60-second rounds: spot the shape, name the language, predict the output, pick the tool. Speed comes from recognizing patterns, like reading a chart at a glance.',
cliffs:['Recognize, don\'t read','Shapes first','Misses become study items','Two rounds a day'],
cards:[
{k:'learn', t:'How the drill works', h:'<ul><li>Pick a pool, or Mixed for everything.</li><li>60 seconds. Tap fast. A wrong answer flashes the right one and you keep going.</li><li>Your misses are listed at the end. Each one points to a module to revisit.</li><li>Best scores save on this device. Beat yesterday.</li></ul>'},
{k:'drill'}
],
teach:'<p><b>Classroom:</b> project the drill and have teams alternate. Shout the streak.</p><p><b>Self-study:</b> one round before each hands-on session (DataCamp, freeCodeCamp) warms up the pattern-reading part of your brain.</p>',
cp:[],
res:[['freeCodeCamp','https://www.freecodecamp.org/learn','Hands-on practice after the drill.']]},

/* 10 */
{sys:'ROADMAP', title:'Roadmap: What to Learn Next (Free)', time:'8 min', tile:'A 12-week path from map to hands-on: pick a track (web, data, automation, apps or crypto) and the free courses for each: freeCodeCamp, DataCamp free tier, CS50, MDN, SQLBolt.',
cliffs:['Pick ONE track for 12 weeks','Build something each week','Data track: SQLBolt → DataCamp → CS50 SQL','Web track: freeCodeCamp + MDN','Fundamentals: CS50x'],
cards:[
{k:'learn', t:'The 12-week shape', h:'<table class="t"><tr><th>Weeks</th><th>Do</th></tr><tr><td>1–2</td><td>This map + Code to Ship modules 1–6 (ship one live page)</td></tr><tr><td>3–8</td><td>One track below, about 30 minutes a day, building something small each week</td></tr><tr><td>9–12</td><td>A capstone tool for the business + the next course in your track</td></tr></table><p class="muted">One track at a time. Switching every week is the most common way to stall.</p>'},
{k:'learn', t:'Tracks and the free courses for each', h:'<div class="decide"><b>Data (SQL + Python): best fit for dashboards and the DataCamp style</b><div class="pick">SQLBolt → DataCamp free tier (intro SQL / Python) → CS50 SQL → Kaggle Learn</div></div><div class="decide"><b>Web (sites, tools, games)</b><div class="pick">freeCodeCamp Responsive Web Design + JavaScript → MDN as reference → Code to Ship 7–12</div></div><div class="decide"><b>Automation (Python chores, Sheets)</b><div class="pick">CS50P (Python) → Automate the Boring Stuff → Apps Script</div></div><div class="decide"><b>Apps (Android first)</b><div class="pick">Android Basics with Compose (Kotlin), or Expo for JavaScript people</div></div><div class="decide"><b>Crypto (bots and contracts)</b><div class="pick">Python + ccxt read-only bot → CryptoZombies → Solidity docs + Remix on a testnet</div></div><p><b>Fundamentals for any track:</b> CS50x (Harvard, free) when you want to understand how computers really work.</p>'},
{k:'tap', q:'Your goal is a booking and revenue dashboard. Which track first?', a:['Data: SQL + Python','Apps: Swift','Crypto: Solidity'], c:0, why:'Dashboards are queries plus analysis.'},
{k:'learn', t:'How to use DataCamp-style courses well', h:'<ul><li>Before each lesson, do one 30-second-read round (Module 9).</li><li>When an exercise passes, explain the code back in one sentence using the five shapes.</li><li>Every week, redo one exercise on your own data (bookings, PayPal export, BTC candles).</li><li>DataCamp\'s free tier opens the first chapter of many courses. That is enough to sample a track before paying.</li></ul>'},
{k:'tap', q:'Most common way adult learners stall?', a:['Switching tracks every week','Building small things','Practicing 30 minutes a day'], c:0, why:'Depth in one track beats sampling five.'}
],
teach:'<p><b>Have each learner write a one-line plan:</b> "In 12 weeks I will have built ___ using ___, with ___ as my main course." Pair them up for weekly check-ins.</p><p><b>Founding beta:</b> send us your plan. We\'ll use them to shape the hands-on modules.</p>',
cp:[
{q:'SQLBolt is best for…', a:['Learning SQL interactively in the browser','Building iPhone apps','Hosting'], c:0, why:'Short, interactive SQL lessons.'},
{q:'The broad fundamentals course from Harvard is…', a:['CS50x','SQLBolt','Glide'], c:0, why:'CS50x covers how computing works, free.'},
{q:'Best structure for the 12 weeks?', a:['One track, a small build each week, a capstone at the end','Five tracks at once','Watch videos only'], c:0, why:'Depth plus shipping.'}
],
res:[['freeCodeCamp','https://www.freecodecamp.org/learn','Free web and Python certifications.'],['DataCamp','https://www.datacamp.com/','Interactive SQL/Python/data courses; free tier available.'],['SQLBolt','https://sqlbolt.com/','Free interactive SQL.'],['CS50x','https://cs50.harvard.edu/x/','Harvard\'s free intro to computer science.'],['CS50 Python (CS50P)','https://cs50.harvard.edu/python/','Free Python course.'],['CS50 SQL','https://cs50.harvard.edu/sql/','Free databases and SQL course.'],['MDN Web Docs','https://developer.mozilla.org/en-US/docs/Learn_web_development','The web reference.'],['Kaggle Learn','https://www.kaggle.com/learn','Short free data and ML courses.'],['Automate the Boring Stuff','https://automatetheboringstuff.com/','Free Python automation book.'],['roadmap.sh','https://roadmap.sh/','Visual learning roadmaps.']]}
],
/* Drill pools: [prompt, answer, wrong1, wrong2, wrong3, code?] */
drill:{
all:{label:'Mixed: everything', items:[]},
shape:{label:'Spot the shape', items:[
['What is this?','loop','conditional','function','data shape','for (const c of candles) { … }'],
['What is this?','conditional','loop','variable','data shape','if (close > level) { alert(); }'],
['What is this?','data shape','loop','conditional','function','{ open: 82100, close: 82580 }'],
['What is this?','function','loop','conditional','data shape','function quote(hours) { return 300 + hours * 100; }'],
['What is this?','variable','function','loop','conditional','const stop = 7.75;'],
['What is this?','loop','conditional','variable','function','for row in rows:'],
['What is this?','conditional','loop','data shape','function','WHERE status = \'Paid\''],
['What is this?','function','variable','loop','data shape','def clean(email):'],
['What is this?','data shape','function','conditional','loop','[ "goat", "pony", "bunny" ]'],
['What is this?','conditional','function','loop','variable','score > best ? score : best'],
['What is this?','loop','function','conditional','data shape','holes.forEach(h => draw(h));'],
['What is this?','function','conditional','data shape','variable','const pick = () => Math.random();']
]},
lang:{label:'Name the language', items:[
['Which language?','Python','JavaScript','SQL','Bash','for row in rows:\n    total += row["amount"]'],
['Which language?','SQL','Python','HTML','Go','SELECT town, COUNT(*) FROM visits GROUP BY town;'],
['Which language?','HTML','CSS','JavaScript','Swift','<a href="tel:+19045550100">Call us</a>'],
['Which language?','CSS','HTML','Python','SQL','.card { padding: 12px; }'],
['Which language?','JavaScript','Python','Kotlin','Rust','document.querySelector("#btn").addEventListener("click", go);'],
['Which language?','Solidity','Java','Go','C#','function buy() external payable { require(msg.value > 0); }'],
['Which language?','Bash','Python','SQL','HTML','for f in *.jpg; do cp "$f" backup/; done'],
['Which language?','Kotlin','Swift','Python','JavaScript','fun label(a: Animal): String = a.name'],
['Which language?','Swift','Kotlin','Go','Rust','func isBaby(_ a: Animal) -> Bool { a.age < 1 }'],
['Which language?','TypeScript','Python','SQL','Bash','function deposit(b: Booking): number { return 25; }'],
['Which language?','Go','Rust','Python','Solidity','func main() { fmt.Println("open") }'],
['Which language?','C#','Python','Bash','SQL','public float speed = 5f; void Update() { }']
]},
output:{label:'Predict the output', items:[
['What prints?','6','3','123','undefined','let t = 0;\nfor (const x of [1, 2, 3]) t += x;\nconsole.log(t);'],
['What prints?','"22"','4','"4"','22','console.log("2" + "2");'],
['What is returned?','0','null','NaN','error','getBest("never-saved")   // see Module 8'],
['What prints?','big','small','nothing','error','const kids = 40;\nif (kids > 30) console.log("big"); else console.log("small");'],
['How many items?','9','6','3','12','// ROWS = 3, COLS = 3\nfor rows { for cols { holes.push(...) } }'],
['What prints?','175','150','70','205','pts = 150 + 2 * 10 + 1 * 5'],
['Value of x?','10','5','15','2','x = 5\nx = x * 2'],
['How many rows come back?','Only rows where status is Paid','All rows','One row','None','SELECT * FROM invoices WHERE status = \'Paid\';']
]},
tool:{label:'Pick the tool', items:[
['Free hosting for a static course site','GitHub Pages','Postgres','Unity','Solidity'],
['A database in one file, for a script','SQLite','Firebase','Vercel','Zapier'],
['Form → Sheet row → text me, no code','Zapier','Rust','Swift','SQLite'],
['Sheet into a phone app in an afternoon','Glide','C++','Go','Remix'],
['Hide an API key cheaply','Serverless function (Vercel/Netlify)','GitHub Pages HTML','localStorage','CSS'],
['Hosted Postgres with logins built in','Supabase','SQLBolt','Glide','Bash'],
['Test a smart contract in the browser','Remix (testnet)','Excel','Godot','Zapier'],
['Native Android app','Kotlin','Swift','SQL','Bash'],
['3D mobile game','Unity (C#)','SQL','HTML only','Zapier'],
['Exchange price bot','Python + ccxt','CSS','Glide','SQLite only'],
['VS Code with AI built in','Cursor','Netlify','Postgres','Firebase'],
['Learn SQL interactively, free','SQLBolt','Swift','Unity','Bubble']
]}
}
};
