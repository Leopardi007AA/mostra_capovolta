/* La mostra capovolta - logica. Nessuna libreria, nessuna richiesta di rete. */
(function () {
  'use strict';
  var C = window.CONTENT, SC = window.SCENES;
  var main = document.getElementById('main');
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { root.classList.add('reduced'); }
  var state = { keys: {}, found: {}, quick: false };
  /* Nessuna persistenza: a ogni ricarica il percorso riparte da zero. */
  try { sessionStorage.removeItem('mc2'); } catch (e) {}
  try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } if (location.hash) { history.replaceState(null, '', location.pathname + location.search); } } catch (e) {}
  function save() {}

  function esc(t) { return String(t == null ? '' : t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function plain(m) { return m.replace(/\{\{\w+\|([^}]+)\}\}/g, '$1'); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function src(s) { return s ? '<span class="src">[' + esc(s) + ']</span>' : ''; }
  function words(text) { return esc(text).split(/\s+/).map(function (w) { return '<span>' + w + '</span>'; }).join(' '); }
  function labelsHTML(l) { var h = '<dl class="labels">'; for (var k in l) { h += '<div><dt>' + esc(k) + '</dt><dd>' + esc(l[k]) + '</dd></div>'; } return h + '</dl>'; }
  function factsHTML(f) { return '<ul class="facts">' + f.map(function (x) { return '<li>' + esc(x.text) + '</li>'; }).join('') + '</ul>'; }

  function figHTML(f) {
    if (!f || !f.img) { return ''; }
    return '<figure class="fig reveal"><img src="' + esc(f.img) + '" alt="' + esc(f.alt || '') + '" loading="lazy"><figcaption>' + esc(f.caption || '') + (f.credit ? ' <span class="src">Credito: ' + esc(f.credit) + '</span>' : '') + '</figcaption></figure>';
  }
  function classeHTML(t) { return t ? '<blockquote class="classe reveal"><span class="kick">La voce della classe</span><p>' + esc(t) + '</p></blockquote>' : ''; }
  function memHTML(m) {
    if (!m) { return ''; }
    return '<aside class="memoria reveal"><p class="kick">' + esc(m.kick) + '</p><p>' + esc(m.text) + ' ' + src(m.src) + '</p>' + (m.invito ? '<p class="inv-m">' + esc(m.invito) + '</p>' : '') + '</aside>';
  }
  var secs = [];   /* {id,label} per l'indice */
  var chapters = []; /* {el, update} */
  var html = '';

  /* ---------- HERO ---------- */
  var h = C.hero, hall = '';
  for (var i = 0; i < 9; i++) { hall += '<i style="--h:' + ((i * 5) % 7) + ';--d:' + (0.6 + (i % 4) * 0.25) + '"></i>'; }
  html += '<section id="hero" aria-label="Ingresso"><div class="hero-in"><div class="hero-bg"></div><div class="hall" aria-hidden="true">' + hall + '</div>' +
    '<div class="wall l" aria-hidden="true"></div><div class="wall r" aria-hidden="true"></div>' +
    '<div class="hero-front"><p class="kick">' + esc(h.kick) + '</p><h1 tabindex="-1">' + esc(h.title) + '</h1><p class="deck">' + esc(h.deck) + '</p><p class="school">' + esc(C.meta.school) + '</p>' +
    '<a class="door" href="#stanza" aria-label="Uscita: entra nella Stanza 2027">' + esc(h.door) + '</a><span class="door-hint">' + esc(h.doorHint) + '</span></div>' +
    '<p class="hero-intro" id="heroIntro">' + words(h.intro) + '</p><div class="scrollcue" aria-hidden="true">Scorri</div></div></section>';
  secs.push({ id: 'hero', label: 'Ingresso' });

  /* ---------- Tre inversioni + avvertenza ---------- */
  html += '<section class="sec" id="inversioni" aria-label="Le tre inversioni"><div class="wrap"><p class="kick reveal">Come funziona questo sito</p>' +
    '<h2 class="reveal col">Tre inversioni rispetto a una mostra di propaganda</h2><div class="inv">' +
    C.inversioni.map(function (x) { return '<div class="reveal"><b>' + esc(x.n) + '</b><strong>' + esc(x.t) + '</strong><p>' + esc(x.d) + '</p></div>'; }).join('') +
    '</div><p class="note reveal col">' + esc(C.meta.note) + '</p>' +
    '<details class="giuria reveal"><summary>' + esc(C.giuria.title) + ' · <span>' + esc(C.giuria.summary) + '</span></summary><dl>' + C.giuria.items.map(function (x) { return '<div><dt>' + esc(x.t) + '</dt><dd>' + esc(x.d) + '</dd></div>'; }).join('') + '</dl></details></div></section>';

  /* ---------- Stanza 2027 ---------- */
  var st = C.stanza;
  html += '<section class="sec" id="stanza" aria-label="Stanza 2027"><div class="wrap"><p class="kick reveal">' + esc(st.kick) + '</p><h2 class="reveal col">' + esc(st.title) + '</h2>' +
    '<p class="lead col words" data-w>' + esc(st.lead) + '</p>' + figHTML(st.figure) + classeHTML(st.classe) + '<p class="reveal"><span class="sim-badge">' + esc(st.badge) + '</span></p><div class="msgs" id="msgs"></div></div></section>';
  secs.push({ id: 'stanza', label: 'Stanza 2027' });

  /* ---------- Sala 0 ---------- */
  var s0 = C.sala0;
  html += '<section class="chapter" id="sala0" aria-label="Sala 0" data-scene="contesto"><div class="stage"><div class="stage-in"><svg viewBox="0 0 400 300" role="img" aria-label="Cento quadratini che si riempiono fino a rappresentare 412.300 visitatori"></svg><p class="stage-cap">' + esc(s0.counter.label) + ' · ' + esc(s0.counter.note) + '</p></div></div>' +
    '<div class="flow"><header class="ch-head reveal"><p class="kick">' + esc(s0.kick) + '</p><h2 tabindex="-1">' + esc(s0.title) + '</h2><p class="lead">' + esc(s0.lead) + '</p></header>' +
    '<p class="story words" data-w>' + esc(s0.story) + '</p>' + classeHTML(s0.classe) + '<div class="reveal">' + factsHTML(s0.facts) + '</div><div class="reveal"><h3>Cosa fa questa mostra</h3>' + labelsHTML(s0.labels) + '</div></div></section>';
  secs.push({ id: 'sala0', label: 'Sala 0 · 1937' });

  /* ---------- Sale 1-5 ---------- */
  C.rooms.forEach(function (r) {
    var total = (r.message.match(/\{\{/g) || []).length;
    var msg = r.message.split(/(\{\{\w+\|[^}]+\}\})/).map(function (part) {
      var m = part.match(/^\{\{(\w+)\|([^}]+)\}\}$/);
      return m ? '<button type="button" class="hl" data-room="' + r.key + '" data-id="' + m[1] + '">' + esc(m[2]) + '</button>' : esc(part);
    }).join('');
    html += '<section class="chapter" id="sala' + r.key + '" aria-label="Sala ' + r.key + '" data-scene="' + esc(r.scene) + '" data-total="' + total + '"><div class="stage"><div class="stage-in"><svg viewBox="0 0 400 300" role="img" aria-label="Animazione: ' + esc(r.caption) + '"></svg><p class="stage-cap">' + esc(r.caption) + '</p></div></div>' +
      '<div class="flow"><header class="ch-head reveal"><p class="kick">Sala ' + r.key + ' di ' + C.rooms.length + '</p><h2 tabindex="-1">' + esc(r.title) + '</h2><p class="lead">' + esc(r.lead) + '</p></header>' +
      '<p class="story words" data-w>' + esc(r.story) + '</p>' + classeHTML(r.classe) + figHTML(r.figure) + '<div class="reveal">' + factsHTML(r.facts) + '</div>' + memHTML(r.memoria) + '<div class="reveal"><h3>Ruolo · linguaggio · strumento · finalità</h3>' + labelsHTML(r.labels) + '</div>' +
      '<div class="decoder reveal"><h3>Smaschera il messaggio</h3><p class="help">Clicca le frasi sottolineate del messaggio simulato: scopri il meccanismo e da dove viene.</p>' +
      '<span class="sim-badge">Simulazione didattica · gruppo inventato</span><p class="msg">' + msg + '</p><p class="progress" id="prog' + r.key + '" aria-live="polite"></p><div class="reveals" id="rev' + r.key + '"></div><div id="kb' + r.key + '"></div></div>' +
      '<p class="then reveal"><b>1937.</b> ' + esc(r.then) + '<br><b>2027.</b> ' + esc(r.diff) + '</p></div></section>';
    secs.push({ id: 'sala' + r.key, label: 'Sala ' + r.key + ' · ' + r.title });
  });

  /* ---------- Cronologia ---------- */
  var tl = C.timeline;
  html += '<section class="sec" id="cronologia" aria-label="Cronologia"><div class="wrap"><p class="kick reveal">' + esc(tl.kick) + '</p><h2 class="reveal col">' + esc(tl.title) + '</h2><p class="lead col reveal">' + esc(tl.lead) + '</p>' +
    '<ol class="tl" id="tl"><li class="tl-fill" aria-hidden="true"></li>' + tl.items.map(function (x) { return '<li class="reveal"><time>' + esc(x.d) + '</time><p>' + esc(x.t) + ' ' + src(x.s) + '</p></li>'; }).join('') + '</ol></div></section>';
  secs.push({ id: 'cronologia', label: 'Cronologia 1937-1944' });

  /* ---------- Sala 6 ---------- */
  var s6 = C.sala6;
  html += '<section class="sec" id="sala6" aria-label="Sala 6"><div class="wrap"><p class="kick reveal">' + esc(s6.kick) + '</p><h2 class="reveal col">' + esc(s6.title) + '</h2><p class="lead col words" data-w>' + esc(s6.lead) + '</p>' +
    '<p class="col words" data-w>' + esc(s6.story) + '</p>' + classeHTML(s6.classe) + '<p class="reveal"><label><input type="checkbox" id="stackToggle"> Vista affiancata (senza cursore)</label></p>';
  C.rooms.forEach(function (r) {
    html += '<div class="cmpblock reveal"><h3>' + esc(r.title) + '</h3><div class="cmp" data-cmp="' + r.key + '" style="--x:50%"><div class="a"><span class="tag">1937</span>' + esc(r.then) + '</div><div class="b"><span class="tag">2027 · simulazione</span>' + esc(plain(r.message)) + '</div></div>' +
      '<input class="rng" type="range" min="0" max="100" value="50" data-rng="' + r.key + '" aria-label="Confronto 1937 e 2027: ' + esc(r.title) + '"><p class="diff">' + esc(r.diff) + '</p></div>';
  });
  html += '<h3 class="reveal">Cosa NON è uguale</h3><div class="grid reveal">' + s6.notEqual.map(function (x) { return '<div class="card"><h3>' + esc(x.t) + '</h3><p>' + esc(x.d) + '</p></div>'; }).join('') + '</div>' +
    '<p class="kick reveal" style="margin-top:3rem">' + esc(s6.fakesKick) + '</p><h3 class="reveal">' + esc(s6.fakesTitle) + '</h3><p class="col reveal">' + esc(s6.fakesLead) + '</p><div class="grid">' +
    s6.fakes.map(function (f, i) { return '<div class="card fake reveal"><span class="fk">Post ' + (i + 1) + ' di ' + s6.fakes.length + '</span><p class="post">' + esc(f.post) + '</p><p class="ask">Con quello che vedi, puoi verificare che sia vero?</p><div class="row"><button type="button" data-fake="' + i + '" data-ans="yes">Sì, posso verificarlo</button><button type="button" data-fake="' + i + '" data-ans="no">No, non posso</button></div><p class="fb" id="fb' + i + '" aria-live="polite"></p></div>'; }).join('') +
    '</div></div></section>';
  secs.push({ id: 'sala6', label: 'Sala 6 · 1937 ↔ 2027' });

  /* ---------- Uscita ---------- */
  var u = C.uscita;
  html += '<section class="sec" id="uscita" aria-label="Uscita"><div class="wrap"><div class="pause"><p class="kick">' + esc(u.kick) + '</p><h2>' + esc(u.title) + '</h2><p class="lead">' + esc(u.lead) + '</p>' + figHTML(u.figure) + classeHTML(u.classe) +
    '<button type="button" class="primary" id="pauseBtn">Fai la Pausa (10 secondi)</button><div class="count" id="count" aria-live="polite" hidden></div>' +
    '<ul class="qs" id="qs" hidden>' + u.questions.map(function (q) { return '<li><label><input type="checkbox"><span>' + esc(q) + '</span></label></li>'; }).join('') + '</ul></div>' +
    '<h3 class="reveal">L\'impegno della classe</h3><p class="col reveal">' + esc(u.pledge) + '</p><h3 class="reveal">Crediti</h3><p class="col reveal">' + esc(u.credits) + '</p></div></section>';
  secs.push({ id: 'uscita', label: 'Uscita · La Pausa' });

  /* ---------- Sala 7 (facoltativa) ---------- */
  if (C.territorio && C.territorio.enabled) {
    var t = C.territorio;
    html += '<section class="sec" id="territorio" aria-label="Sala 7"><div class="wrap"><p class="kick reveal">' + esc(t.kick) + '</p><h2 class="reveal col">' + esc(t.title) + '</h2><p class="lead col reveal">' + esc(t.lead) + '</p>' + t.body.map(function (b) { return '<p class="col reveal">' + esc(b) + '</p>'; }).join('') + classeHTML(t.classe) + (t.invito ? '<p class="note reveal col">' + esc(t.invito) + '</p>' : '') + '</div></section>';
    secs.push({ id: 'territorio', label: 'Sala 7 · Territorio' });
  }

  /* ---------- Fonti e piè di pagina ---------- */
  html += '<section class="sec" id="fonti" aria-label="Fonti"><div class="wrap"><p class="kick">Fonti</p><h2>Fonti e bibliografia</h2><p class="col">Ogni dato rimanda a una di queste fonti, tra parentesi come S1, S2… Controllate sempre sulla fonte originale.</p><ol class="srcs col">' +
    C.sources.map(function (s) { return '<li><strong>' + esc(s.id) + '</strong> <em class="tipo">' + esc(s.tipo || '') + '</em> · ' + esc(s.text) + (s.url ? ' <a href="' + esc(s.url) + '" rel="noopener noreferrer" target="_blank">apri</a>' : '') + '</li>'; }).join('') + '</ol></div></section>' +
    '<footer><div class="wrap"><p class="col">' + esc(C.meta.footer) + '</p></div></footer>';
  secs.push({ id: 'fonti', label: 'Fonti' });

  main.innerHTML = html;

  /* ---------- indice ---------- */
  var idx = document.getElementById('idx'), idxBtn = document.getElementById('idxBtn');
  idx.innerHTML = secs.map(function (s) { return '<a href="#' + s.id + '" data-id="' + s.id + '">' + esc(s.label) + '</a>'; }).join('');
  idxBtn.addEventListener('click', function () { var o = idx.hidden; idx.hidden = !o; idxBtn.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  idx.addEventListener('click', function () { idx.hidden = true; idxBtn.setAttribute('aria-expanded', 'false'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !idx.hidden) { idx.hidden = true; idxBtn.setAttribute('aria-expanded', 'false'); idxBtn.focus(); } });

  /* ---------- scene ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.chapter'), function (ch) {
    var name = ch.getAttribute('data-scene'), svg = ch.querySelector('svg');
    if (SC[name] && svg) { chapters.push({ el: ch, update: SC[name](svg) }); }
  });

  /* ---------- Stanza 2027 ---------- */
  var msgs = document.getElementById('msgs');
  function renderMsgs() {
    msgs.innerHTML = C.rooms.map(function (r) {
      var open = !!state.keys[r.key];
      return '<article class="mcard ' + (open ? 'open' : 'locked') + '"><span class="tag">Messaggio ' + r.key + '</span><p class="txt"' + (open ? '' : ' aria-hidden="true"') + '>' + esc(plain(r.message)) + '</p>' +
        (open ? '<p class="lockmsg">Decodificato: ' + esc(r.title) + '</p>' : '<p class="lockmsg"><span class="sr">Messaggio bloccato. </span>Bloccato: trova la chiave nella <a href="#sala' + r.key + '">Sala ' + r.key + '</a>.</p>') + '</article>';
    }).join('');
  }
  function keysCount() { var n = 0; for (var k in state.keys) { if (state.keys[k]) { n++; } } return n; }
  function updateKeys() {
    var out = '', n = keysCount();
    for (var i = 1; i <= C.rooms.length; i++) { out += '<i class="k' + (state.keys[i] ? ' on' : '') + '"></i>'; }
    var el = document.getElementById('keys');
    el.innerHTML = '<span class="sr">Chiavi trovate: ' + n + ' su ' + C.rooms.length + '</span><span class="kl" aria-hidden="true">Chiavi</span>' + out;
  }
  var toastEl = document.getElementById('toast');
  function toast(m) { toastEl.textContent = m; toastEl.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { toastEl.hidden = true; }, 3000); }

  /* ---------- decodificatore ---------- */
  function refreshRoom(r) {
    var f = state.found[r.key] || {}, n = 0, k;
    for (k in f) { if (f[k]) { n++; } }
    var sec = document.getElementById('sala' + r.key), total = parseInt(sec.getAttribute('data-total'), 10);
    document.getElementById('prog' + r.key).textContent = n + ' di ' + total + ' meccanismi trovati';
    var rev = '';
    Object.keys(r.reveals).forEach(function (id) { if (f[id]) { rev += '<div class="reveal-box">' + esc(r.reveals[id]) + '</div>'; } });
    document.getElementById('rev' + r.key).innerHTML = rev;
    Array.prototype.forEach.call(sec.querySelectorAll('button.hl'), function (b) { if (f[b.getAttribute('data-id')]) { b.classList.add('found'); } });
    document.getElementById('kb' + r.key).innerHTML = state.keys[r.key] ? '<div class="keybox">Chiave ' + r.key + ' ottenuta: il messaggio ' + r.key + ' della Stanza 2027 è ora leggibile.</div>' : '';
  }
  function onHL(btn) {
    var key = parseInt(btn.getAttribute('data-room'), 10), id = btn.getAttribute('data-id'), r = C.rooms[key - 1];
    state.found[key] = state.found[key] || {}; state.found[key][id] = true;
    var total = parseInt(document.getElementById('sala' + key).getAttribute('data-total'), 10), n = 0;
    for (var k in state.found[key]) { if (state.found[key][k]) { n++; } }
    if (n >= total && !state.keys[key]) { state.keys[key] = true; toast('Chiave ' + key + ' ottenuta'); renderMsgs(); updateKeys(); }
    save(); refreshRoom(r);
  }

  /* ---------- eventi ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('button.hl,[data-fake]') : null;
    if (!t) { return; }
    if (t.classList.contains('hl')) { onHL(t); return; }
    var i = parseInt(t.getAttribute('data-fake'), 10), f = C.sala6.fakes[i], fb = document.getElementById('fb' + i);
    var ok = (t.getAttribute('data-ans') === 'no') === !!f.isFake;
    fb.className = 'fb ' + (ok ? 'ok' : 'no'); fb.innerHTML = '<strong>' + (ok ? 'Esatto.' : 'Non proprio.') + '</strong> ' + esc(f.explain);
    Array.prototype.forEach.call(t.parentNode.children, function (b) { b.classList.remove('sel'); b.setAttribute('aria-pressed', 'false'); });
    t.classList.add('sel'); t.setAttribute('aria-pressed', 'true');
  });
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches && t.matches('[data-rng]')) { var b = document.querySelector('[data-cmp="' + t.getAttribute('data-rng') + '"]'); if (b) { b.style.setProperty('--x', t.value + '%'); } }
    if (t.id === 'stackToggle') {
      Array.prototype.forEach.call(document.querySelectorAll('.cmp'), function (c) { c.classList.toggle('stacked', t.checked); });
      Array.prototype.forEach.call(document.querySelectorAll('.rng'), function (r) { r.style.display = t.checked ? 'none' : ''; });
    }
  });
  var timer = null;
  document.getElementById('pauseBtn').addEventListener('click', function () {
    var cnt = document.getElementById('count'), qs = document.getElementById('qs'), n = 10;
    cnt.hidden = false; qs.hidden = true; cnt.textContent = n; clearInterval(timer);
    timer = setInterval(function () { n--; cnt.textContent = n; if (n <= 0) { clearInterval(timer); cnt.hidden = true; qs.hidden = false; qs.querySelector('input').focus(); } }, 1000);
  });

  /* ---------- lettura rapida ---------- */
  var quickBtn = document.getElementById('quick');
  function setQuick(on) {
    state.quick = on; document.body.classList.toggle('quick', on); quickBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on) {
      C.rooms.forEach(function (r) {
        state.keys[r.key] = true; state.found[r.key] = {};
        (r.message.match(/\{\{(\w+)\|/g) || []).forEach(function (m) { state.found[r.key][m.replace(/\{\{|\|/g, '')] = true; });
        refreshRoom(r);
      });
      renderMsgs(); updateKeys(); toast('Lettura rapida: tutto sbloccato e visibile');
    }
    save(); onScroll();
  }
  quickBtn.addEventListener('click', function () { setQuick(!state.quick); });

  /* ---------- voce: solo i passaggi più forti (C.voce), voce registrata se presente, altrimenti sintesi del browser ---------- */
  var listenBtn = document.getElementById('listen'), narrOn = false, narrTimer = null, voice = null, narrSec = '', audioEl = null, token = 0;
  var synth = window.speechSynthesis, hasTTS = !!(synth && window.SpeechSynthesisUtterance);
  function pickVoice() {
    if (!hasTTS) { return; }
    var vs = synth.getVoices().filter(function (v) { return /^it/i.test(v.lang); });
    function score(v) {
      var n = v.name + ' ', sc = 0;
      if (/natural|neural|online|premium|enhanced|wavenet|studio/i.test(n)) { sc += 10; }
      if (/elsa|isabella|diego|giorgio|luca|cosimo|paola|alice|federica|google/i.test(n)) { sc += 4; }
      if (/compact|espeak|robot/i.test(n)) { sc -= 8; }
      if (!v.localService) { sc += 2; }
      return sc;
    }
    vs.sort(function (a, b) { return score(b) - score(a); });
    voice = vs[0] || null;
  }
  function stopVoice() {
    token++; clearTimeout(narrTimer);
    if (hasTTS) { synth.cancel(); }
    if (audioEl) { try { audioEl.pause(); } catch (e) {} audioEl = null; }
  }
  function speakTTS(text, my) {
    var parts = text.match(/[^.!?]+[.!?]*/g) || [text], i = 0;
    (function next() {
      if (my !== token || !narrOn || i >= parts.length) { return; }
      var u = new SpeechSynthesisUtterance(parts[i++].trim());
      u.lang = 'it-IT'; if (voice) { u.voice = voice; } u.pitch = 0.8; u.rate = 0.88; u.volume = 1;
      u.onend = function () { setTimeout(next, 380); }; u.onerror = function () { setTimeout(next, 80); };
      synth.speak(u);
    })();
  }
  function speak(sec) {
    var text = C.voce && C.voce[sec.id];
    stopVoice(); narrSec = sec.id; if (!text) { return; }
    var my = token;
    try {
      var a = new Audio('assets/audio/' + sec.id + '.mp3'); a.preload = 'auto'; audioEl = a; var started = false;
      a.addEventListener('playing', function () { started = true; });
      a.addEventListener('error', function () { if (my === token && !started) { audioEl = null; if (hasTTS) { speakTTS(text, my); } } });
      var pr = a.play(); if (pr && pr.catch) { pr.catch(function () { if (my === token && !started && hasTTS) { audioEl = null; speakTTS(text, my); } }); }
    } catch (e) { if (hasTTS) { speakTTS(text, my); } }
  }
  function narrFollow(sec) { if (!narrOn || !sec || sec.id === narrSec) { return; } clearTimeout(narrTimer); narrTimer = setTimeout(function () { var c = currentSection(); if (narrOn && c) { speak(c); } }, 1100); }
  listenBtn.hidden = false; pickVoice();
  if (hasTTS && synth.addEventListener) { synth.addEventListener('voiceschanged', pickVoice); }
  listenBtn.addEventListener('click', function () {
    narrOn = !narrOn; listenBtn.setAttribute('aria-pressed', narrOn ? 'true' : 'false');
    if (narrOn) { pickVoice(); var c = currentSection(); if (c) { speak(c); } toast('Voce attiva: ti accompagna nei passaggi principali'); }
    else { stopVoice(); narrSec = ''; }
  });

  /* ---------- scorrimento ---------- */
  var heroEl = document.getElementById('hero'), heroIn = heroEl.querySelector('.hero-in');
  var heroWords = Array.prototype.slice.call(document.querySelectorAll('#heroIntro span'));
  var wordEls = Array.prototype.map.call(document.querySelectorAll('[data-w]'), function (el) { return { el: el, spans: Array.prototype.slice.call(el.querySelectorAll('span')), on: -1 }; });
  wordEls.forEach(function (w) { if (!w.spans.length) { w.el.innerHTML = words(w.el.textContent); w.spans = Array.prototype.slice.call(w.el.querySelectorAll('span')); } });
  var sections = secs.map(function (s) { return document.getElementById(s.id); });
  var hereEl = document.getElementById('here'), bar = document.querySelector('#bar i'), current = '';

  function currentSection() {
    var vh = window.innerHeight, best = null;
    sections.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top <= vh * 0.4) { best = s; } });
    return best;
  }
  function onScroll() {
    var vh = window.innerHeight, doc = document.documentElement, calm = reduce || state.quick;
    bar.style.width = (clamp(window.scrollY / Math.max(1, doc.scrollHeight - vh), 0, 1) * 100) + '%';
    var hr = heroEl.getBoundingClientRect(), hp = calm ? 1 : clamp(-hr.top / Math.max(1, hr.height - vh), 0, 1);
    heroIn.style.setProperty('--p', hp);
    var hn = Math.round(seg(hp, 0.45, 0.95) * heroWords.length);
    heroWords.forEach(function (w, i) { w.classList.toggle('on', calm || i < hn); });
    chapters.forEach(function (c) {
      var r = c.el.getBoundingClientRect();
      if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) { return; }
      c.update(calm ? 1 : clamp(-r.top / Math.max(1, r.height - vh), 0, 1));
    });
    wordEls.forEach(function (w) {
      var r = w.el.getBoundingClientRect();
      var q = calm ? 1 : clamp((vh * 0.88 - r.top) / (vh * 0.88 - vh * 0.38 + r.height * 0.6), 0, 1);
      var n = Math.round(q * w.spans.length);
      if (n !== w.on) { w.spans.forEach(function (s, i) { s.classList.toggle('on', i < n); }); w.on = n; }
    });
    var tlEl = document.getElementById('tl');
    if (tlEl) { var tr = tlEl.getBoundingClientRect(); tlEl.style.setProperty('--fill', (calm ? 1 : clamp((vh * 0.65 - tr.top) / Math.max(1, tr.height), 0, 1)) * 100 + '%'); }
    var cur = currentSection();
    if (cur && cur.id !== current) {
      current = cur.id; narrFollow(cur);
      var lab = secs.filter(function (s) { return s.id === current; })[0];
      hereEl.textContent = lab ? lab.label : '';
      Array.prototype.forEach.call(idx.querySelectorAll('a'), function (a) { if (a.getAttribute('data-id') === current) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); } });
    }
  }
  var ticking = false;
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); } }, { passive: true });
  window.addEventListener('resize', onScroll);

  /* comparsa dei blocchi */
  var revs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(revs, function (r) { io.observe(r); });
  } else { Array.prototype.forEach.call(revs, function (r) { r.classList.add('in'); }); }

  renderMsgs(); updateKeys(); C.rooms.forEach(refreshRoom);
  window.scrollTo(0, 0);
  if (state.quick) { setQuick(true); } else { onScroll(); }
})();
