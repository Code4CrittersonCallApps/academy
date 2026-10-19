/* Romance Systems card engine: bite-size cards, tap to answer, instant feedback, checkpoint, timed drill. */
(function(){
const C = window.ROMANCE, app = document.getElementById('app');
const KEY = 'academy-romance-v2';
let P = {}; try { P = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(e) { P = {}; }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch(e) {} };
const LN = {la:'Latin', es:'Spanish', it:'Italian', pt:'Portuguese', fr:'French'};
const ORDER = ['la','es','it','pt','fr'];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const BETA = 'mailto:sheehanhomestead@gmail.com?subject=' + encodeURIComponent('Founding beta: Romance Systems course') + '&body=' + encodeURIComponent("Hi Mike,\n\nI'd like to beta test the Romance Systems (Spanish + Latin, Italian, Portuguese, French) course.\n\nName:\nLanguages I already know a bit of:\nMinutes a day I can give it:\n\nThanks!");

function deckOf(m){ // learning cards, then the teach note, then the checkpoint, then a summary
  const d = m.cards.slice();
  d.push({k:'teach', h:m.teach});
  (m.cp||[]).forEach((q,i)=>d.push(Object.assign({k:'tap', cp:true, n:i+1, of:m.cp.length}, q)));
  d.push({k:'end'});
  return d;
}
function cmpTable(c){
  let h = '<div class="cmp"><table><tr><th></th>' + c.cols.map(x=>'<th>'+esc(x)+'</th>').join('') + '</tr>';
  ORDER.forEach(l=>{ if(!c[l]) return;
    h += '<tr class="'+l+'"><td class="lg">'+LN[l]+'</td>' + c[l].map((w,i)=>'<td'+((c.odd && c.odd[i] && c.odd[i].split(',').indexOf(l)>=0)?' class="odd"':'')+'>'+esc(w)+'</td>').join('') + '</tr>';
  });
  return h + '</table></div>' + (c.note ? '<div class="note">'+c.note+'</div>' : '');
}
function home(){
  const mods = C.modules; let done = 0; mods.forEach((m,i)=>{ if(P['m'+(i+1)] && P['m'+(i+1)].done) done++; });
  let h = '<section class="hero"><div class="kicker">'+C.kicker+'</div><h1>'+C.title+'</h1><p>'+C.pitch+'</p>' +
    '<p class="muted">'+mods.length+' modules · bite-size cards · tap to answer · progress saves on this device</p>' +
    '<div class="bar"><i style="width:'+Math.round(100*done/mods.length)+'%"></i></div><p class="muted" style="font-size:13px">'+done+' of '+mods.length+' modules complete</p>' +
    '<div class="row"><a class="btn" href="#m'+nextUp()+'">'+(done?'Continue':'Start')+'</a><a class="btn ghost" href="#m'+C.drillModule+'">⚡ Think-faster drill</a><a class="btn ghost" href="'+BETA+'">Join the founding beta</a></div></section>';
  h += '<div class="card cliff"><b class="lbl">Cliff notes</b><ul>'+C.cliff.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
  h += '<h2>Systems map</h2><div class="grid">';
  mods.forEach((m,i)=>{ const p = P['m'+(i+1)] || {}; const n = deckOf(m).length; const pct = p.done ? 100 : Math.round(100*(p.i||0)/n);
    h += '<a class="tile'+(p.done?' done':'')+'" href="#m'+(i+1)+'"><div class="num">MODULE '+(i+1)+' · '+m.sys+'</div><h3>'+m.title+'</h3><p>'+m.tile+'</p><div class="meta"><span>'+m.cards.length+' cards · checkpoint'+(p.best!=null?' · best '+p.best+'/'+(m.cp||[]).length:'')+'</span><span>'+m.time+'</span></div><div class="pbar"><i style="width:'+pct+'%"></i></div></a>';
  });
  h += '</div><h2>Extras</h2><div class="grid">' +
    '<a class="tile" href="#resources"><div class="num">LIBRARY</div><h3>Free resources</h3><p>Dictionaries, conjugators, etymology and listening for all five languages.</p></a>' +
    '<a class="tile" href="spanish-starter-deck.csv" download><div class="num">DOWNLOAD</div><h3>Spanish starter deck (CSV)</h3><p>116 high-frequency words and phrases for Anki.</p></a>' +
    '<a class="tile" href="method/"><div class="num">GUIDE</div><h3>Language method guide (v1)</h3><p>The original method course: frequency words, spaced repetition, input, speaking early.</p></a>' +
    '<a class="tile" href="#" id="reset"><div class="num">SETTINGS</div><h3>Reset my progress</h3><p>Clears saved progress on this device.</p></a></div>';
  app.innerHTML = h;
  document.getElementById('reset').onclick = e => { e.preventDefault(); if(confirm('Reset all progress on this device?')){ P = {}; save(); home(); } };
}
function nextUp(){ for(let i=0;i<C.modules.length;i++){ const p=P['m'+(i+1)]; if(!p||!p.done) return i+1; } return 1; }
function resources(){
  const seen={}, out=[]; C.modules.forEach(m=>(m.res||[]).forEach(r=>{ if(!seen[r[1]]){ seen[r[1]]=1; out.push(r);} }));
  app.innerHTML = '<div class="crumb"><a href="#">'+C.short+'</a> › Resources</div><section class="hero"><div class="kicker">Library</div><h1>Free resources</h1></section><div class="card"><ul class="res">'+out.map(r=>'<li><a href="'+r[1]+'" target="_blank" rel="noopener">'+r[0]+' ↗</a><small>'+r[2]+'</small></li>').join('')+'</ul></div><div class="pnav"><a class="btn ghost" href="#">← Systems map</a></div>';
}
function play(n){
  const m = C.modules[n-1]; if(!m) return home();
  const deck = deckOf(m); const key = 'm'+n;
  const p = P[key] = P[key] || {i:0};
  if (p.i >= deck.length) p.i = 0;
  let answered = {}, cpScore = 0, perm = {};
  function render(){
    const c = deck[p.i]; save();
    const pct = Math.round(100*p.i/(deck.length-1));
    let h = '<div class="deck"><div class="topbar"><a class="xbtn" href="#" aria-label="Back to map">✕</a><div class="bar"><i style="width:'+pct+'%"></i></div><span class="cnt">'+(p.i+1)+'/'+deck.length+'</span></div>';
    h += '<div class="qcard">';
    if (c.k==='learn' || c.k==='cmp') {
      h += '<div class="kind">Module '+n+' · '+m.sys+'</div><h2>'+c.t+'</h2>' + (c.h||'') + (c.k==='cmp'?cmpTable(c):'');
    } else if (c.k==='tap') {
      h += '<div class="kind'+(c.cp?' cp':'')+'">'+(c.cp?'Checkpoint '+c.n+' of '+c.of:'Quick check')+'</div><h2>'+c.q+'</h2>' + (c.h||'') + '<div class="opts">' + (perm[p.i] = perm[p.i] || shuffle(c.a.map((_,i)=>i))).map(i=>'<button class="opt" data-i="'+i+'">'+c.a[i]+'</button>').join('') + '</div><div class="fb" id="fb"></div>';
    } else if (c.k==='teach') {
      h += '<div class="kind teach">How to teach this</div><h2>Teach it to lock it in</h2><div class="teachbox">'+c.h+'</div>';
    } else if (c.k==='drill') {
      h += '<div id="drill"></div>';
    } else if (c.k==='end') {
      const total = (m.cp||[]).length, pass = total ? cpScore >= Math.ceil(total*0.67) : true;
      if (pass) p.done = true;
      if (total && (p.best==null || cpScore > p.best)) p.best = cpScore;
      save();
      h += '<div class="kind">Module '+n+' complete'+(pass?' ✓':'')+'</div><h2>'+(total?'Checkpoint: '+cpScore+' / '+total:'Nice work')+'</h2><p>'+(pass?'Module marked done. The cards stay here whenever you want a refresher.':'Almost. Review the cards and run the checkpoint again; you need '+Math.ceil(total*0.67)+' of '+total+'.')+'</p><div class="sumrow">'+m.cliffs.map(x=>'<span class="pill">'+x+'</span>').join('')+'</div>' +
        '<h3>Free resources</h3><ul class="res">'+(m.res||[]).map(r=>'<li><a href="'+r[1]+'" target="_blank" rel="noopener">'+r[0]+' ↗</a><small>'+r[2]+'</small></li>').join('')+'</ul>';
    }
    h += '</div><div class="nav2"><button class="btn ghost" id="prev"'+(p.i===0?' disabled':'')+'>← Back</button>';
    if (c.k==='end') h += (n<C.modules.length?'<a class="btn" href="#m'+(n+1)+'">Module '+(n+1)+' →</a>':'<a class="btn" href="#">Systems map</a>');
    else h += '<button class="btn" id="next"'+(c.k==='tap' && answered[p.i]==null ? ' disabled':'')+'>'+(c.k==='tap'?'Continue':'Next')+' →</button>';
    h += '</div></div>';
    app.innerHTML = h;
    const prev = document.getElementById('prev'); if (prev) prev.onclick = () => { if(p.i>0){ p.i--; render(); } };
    const next = document.getElementById('next'); if (next) next.onclick = () => { p.i++; render(); };
    function show(i){
      const ok = i===c.c;
      app.querySelectorAll('.opt').forEach(x=>{ const j = +x.dataset.i; x.disabled = true; if(j===c.c) x.classList.add('right'); else if(j===i) x.classList.add('wrong'); });
      const fb = document.getElementById('fb'); fb.className = 'fb show ' + (ok?'ok':'no');
      fb.innerHTML = '<b>'+(ok?'Correct!':'Not quite.')+'</b>'+c.why;
      document.getElementById('next').disabled = false;
    }
    if (c.k==='tap') {
      if (answered[p.i] != null) show(answered[p.i]);
      else app.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        if (answered[p.i] != null) return;
        const i = +b.dataset.i; answered[p.i] = i;
        if (c.cp && i===c.c) cpScore++;
        show(i);
      });
    }
    if (c.k==='drill') drill(document.getElementById('drill'), () => { document.getElementById('next').disabled = false; });
    window.scrollTo(0,0);
  }
  // A checkpoint retake starts fresh: entering the first checkpoint card resets the score.
  const firstCp = deck.findIndex(x=>x.cp);
  const origRender = render;
  render = function(){ if (p.i===firstCp) { cpScore = 0; Object.keys(answered).forEach(k=>{ if(+k>=firstCp) delete answered[k]; }); } origRender(); };
  if (p.i > firstCp && firstCp>=0 && deck[p.i].k!=='end') p.i = firstCp; // resume a checkpoint from its start
  if (deck[p.i].k==='end') p.i = 0;
  render();
}
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function drill(el, onDone){
  const pools = C.drill; let pool = P.drillPool || 'all';
  function menu(){
    const best = P.drillBest || {};
    el.innerHTML = '<div class="kind">⚡ Think faster · 60-second round</div><h2>Pick a pool, then answer as fast as you can</h2><p class="muted">Wrong answers flash the right one and you keep going. Aim to beat your best, then try to answer before you translate in your head.</p><div class="pools">' +
      Object.keys(pools).map(k=>'<button class="opt'+(k===pool?' sel':'')+'" data-p="'+k+'">'+pools[k].label+'<br><small class="muted">best '+(best[k]||0)+'</small></button>').join('') + '</div><button class="btn" id="go" style="width:100%">Start 60 seconds</button>';
    el.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>{ pool=b.dataset.p; P.drillPool=pool; save(); menu(); });
    el.querySelector('#go').onclick = run;
  }
  function run(){
    const items = shuffle(pool==='all' ? [].concat(...Object.keys(pools).filter(k=>k!=='all').map(k=>pools[k].items)) : pools[pool].items);
    let k = 0, score = 0, streak = 0, bestStreak = 0, misses = [], t = 60, lock = false;
    const end = Date.now() + 60000;
    function q(){
      if (k >= items.length) k = 0;
      const it = items[k];
      const opts = shuffle([it[1], it[2], it[3], it[4]]);
      el.innerHTML = '<div class="drillhead"><span>✓ '+score+' · 🔥 '+streak+'</span><span class="t" id="tm">'+t+'</span></div><div class="prompt">'+it[0]+'</div><div class="opts">'+opts.map(o=>'<button class="opt">'+o+'</button>').join('')+'</div>';
      el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
        if (lock) return; lock = true;
        const ok = b.textContent === it[1];
        el.querySelectorAll('.opt').forEach(x=>{ if(x.textContent===it[1]) x.classList.add('right'); else if(x===b) x.classList.add('wrong'); });
        if (ok) { score++; streak++; bestStreak = Math.max(bestStreak, streak); } else { streak = 0; misses.push(it[0]+' → <b>'+it[1]+'</b>'); }
        setTimeout(()=>{ lock=false; k++; if (Date.now() < end) q(); }, ok ? 250 : 900);
      });
    }
    const timer = setInterval(()=>{
      t = Math.max(0, Math.ceil((end-Date.now())/1000)); const tm = document.getElementById('tm'); if (tm) tm.textContent = t;
      if (!document.body.contains(el)) { clearInterval(timer); return; }
      if (t <= 0) { clearInterval(timer); finish(); }
    }, 200);
    function finish(){
      P.drillBest = P.drillBest || {}; const prev = P.drillBest[pool] || 0; if (score > prev) P.drillBest[pool] = score;
      P.drillRounds = (P.drillRounds||0) + 1; save();
      el.innerHTML = '<div class="kind">Round over</div><h2>'+score+' correct'+(score>prev?' · new best!':'')+'</h2><p>Best streak: '+bestStreak+'. '+(misses.length?'Review these:':'Clean round!')+'</p>' + misses.slice(0,12).map(x=>'<div class="miss">• '+x+'</div>').join('') + '<div class="row"><button class="btn" id="again">Go again</button><button class="btn ghost" id="pools">Change pool</button></div>';
      el.querySelector('#again').onclick = run; el.querySelector('#pools').onclick = menu;
      onDone && onDone();
    }
    q();
  }
  menu();
}
function route(){
  const h = location.hash.replace('#','');
  if (h==='resources') resources(); else if (/^m\d+$/.test(h)) play(+h.slice(1)); else home();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange', route); route();
})();
