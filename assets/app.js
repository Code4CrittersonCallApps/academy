/* Sheehan Academy course renderer: tiles -> module -> lessons, exercise, quiz, resources */
(function(){
  const C = window.COURSE; if(!C) return;
  const app = document.getElementById('app');
  const KEY = 'academy-progress-' + C.id;
  let prog = {};
  try { prog = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch(e) { prog = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(prog)); } catch(e) {} };
  const BETA = 'mailto:sheehanhomestead@gmail.com?subject=' + encodeURIComponent('Founding beta: ' + C.title) +
    '&body=' + encodeURIComponent("Hi Mike,\n\nI'd like to beta test the " + C.title + " course.\n\nName:\nWhat I want to be able to do after this course:\nHow many minutes a day I can give it:\n\nThanks!");

  function resList(res){
    return '<ul class="res">' + res.map(r => '<li><a href="'+r[1]+'" target="_blank" rel="noopener">'+r[0]+' ↗</a><small>'+r[2]+'</small></li>').join('') + '</ul>';
  }
  function overview(){
    const done = C.modules.filter((m,i)=>prog['m'+(i+1)]).length;
    const pct = Math.round(100*done/C.modules.length);
    let h = '<section class="hero"><div class="kicker">'+C.kicker+'</div><h1>'+C.title+'</h1><p>'+C.pitch+'</p>' +
      '<p class="muted">'+C.modules.length+' modules · '+C.hours+' · free, self-paced, phone friendly</p>' +
      '<div class="bar" aria-label="progress"><i style="width:'+pct+'%"></i></div><p class="muted" style="font-size:13px">'+done+' of '+C.modules.length+' modules complete on this device</p>' +
      '<div class="row"><a class="btn" href="#m1">Start module 1</a><a class="btn ghost" href="#resources">All free resources</a><a class="btn ghost" href="'+BETA+'">Join the founding beta</a></div></section>';
    h += '<div class="card cliff"><b class="lbl">Cliff notes for the whole course</b><ul>' + C.cliff.map(x=>'<li>'+x+'</li>').join('') + '</ul></div>';
    h += '<h2>Module map</h2><div class="grid">';
    C.modules.forEach((m,i)=>{
      h += '<a class="tile'+(prog['m'+(i+1)]?' done':'')+'" href="#m'+(i+1)+'"><div class="num">MODULE '+(i+1)+'</div><h3>'+m.title+'</h3><p>'+m.tile+'</p><div class="meta"><span>'+m.lessons.length+' lessons · exercise · quiz</span><span>'+m.time+'</span></div></a>';
    });
    h += '<a class="tile" href="#resources"><div class="num">LIBRARY</div><h3>Every free resource</h3><p>All the links from every module in one list.</p><div class="meta"><span>'+allRes().length+' links</span><span>browse</span></div></a>';
    h += '</div>';
    if (C.extra) h += C.extra;
    app.innerHTML = h;
  }
  function allRes(){
    const seen = {}, out = [];
    C.modules.forEach((m,i)=>m.res.forEach(r=>{ if(!seen[r[1]]){ seen[r[1]]=1; out.push([r[0], r[1], 'Module '+(i+1)+': '+r[2]]); } }));
    return out;
  }
  function resources(){
    app.innerHTML = '<div class="crumb"><a href="#">'+C.title+'</a> › Free resources</div><section class="hero"><div class="kicker">Library</div><h1>Every free resource</h1><p>Curated so you don\'t have to search. Start with the first link in each module.</p></section><div class="card">'+resList(allRes())+'</div><div class="pnav"><a class="btn ghost" href="#">← Module map</a></div>';
  }
  function module(n){
    const m = C.modules[n-1]; if(!m){ overview(); return; }
    let h = '<div class="crumb"><a href="#">'+C.title+'</a> › Module '+n+'</div>';
    h += '<section class="hero"><div class="kicker">Module '+n+' of '+C.modules.length+' · '+m.time+'</div><h1>'+m.title+'</h1><p>'+m.tile+'</p></section>';
    h += '<div class="card cliff"><b class="lbl">Cliff notes</b><ul>'+m.cliff.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
    h += '<h2>Lessons</h2>';
    m.lessons.forEach((l,i)=>{
      h += '<details class="lesson"'+(i===0?' open':'')+'><summary><span class="ln">'+n+'.'+(i+1)+'</span><span>'+l.t+'</span></summary><div class="body">'+l.b+(l.key?'<div class="key"><b>Remember:</b> '+l.key+'</div>':'')+'</div></details>';
    });
    h += '<h2>Hands-on exercise</h2><div class="card ex"><b class="lbl">Do this · '+m.ex.time+'</b><h3 style="margin:4px 0">'+m.ex.t+'</h3><ol>'+m.ex.steps.map(s=>'<li>'+s+'</li>').join('')+'</ol><p><b>Done when:</b> '+m.ex.done+'</p></div>';
    h += '<h2>Checkpoint quiz</h2><form class="card quiz" id="quiz">';
    m.quiz.forEach((q,qi)=>{
      h += '<div class="q" data-c="'+q.c+'"><p>'+(qi+1)+'. '+q.q+'</p>' + q.a.map((a,ai)=>'<label><input type="radio" name="q'+qi+'" value="'+ai+'"> <span>'+a+'</span></label>').join('') + '<div class="why">'+q.why+'</div></div>';
    });
    h += '<div class="row"><button class="btn" type="submit">Check my answers</button><span class="score" id="score"></span></div></form>';
    h += '<h2>Free resources</h2><div class="card">'+resList(m.res)+'</div>';
    h += '<div class="pnav">' + (n>1?'<a class="btn ghost" href="#m'+(n-1)+'">← Module '+(n-1)+'</a>':'<a class="btn ghost" href="#">← Module map</a>') +
      (n<C.modules.length?'<a class="btn" href="#m'+(n+1)+'">Module '+(n+1)+' →</a>':'<a class="btn" href="'+BETA+'">Finished! Tell us how it went</a>') + '</div>';
    app.innerHTML = h;
    const f = document.getElementById('quiz');
    f.addEventListener('submit', e=>{
      e.preventDefault(); let right = 0;
      f.querySelectorAll('.q').forEach((q,qi)=>{
        const c = +q.dataset.c; const sel = f.querySelector('input[name="q'+qi+'"]:checked');
        q.querySelectorAll('label').forEach((lb,ai)=>{ lb.classList.remove('right','wrong'); if(ai===c) lb.classList.add('right'); else if(sel && +sel.value===ai) lb.classList.add('wrong'); });
        if(sel && +sel.value===c) right++;
      });
      f.classList.add('checked');
      const pass = right >= Math.ceil(m.quiz.length*0.75);
      document.getElementById('score').textContent = right+' / '+m.quiz.length + (pass?' · passed, module marked done ✓':' · review the lessons and try again');
      if(pass){ prog['m'+n] = 1; save(); }
    });
  }
  function route(){
    const h = location.hash.replace('#','');
    document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('on', a.dataset.route===(h||'map')));
    if(h==='resources') resources();
    else if(/^m\d+$/.test(h)) module(+h.slice(1));
    else overview();
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route); route();
})();
