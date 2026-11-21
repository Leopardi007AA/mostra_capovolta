/* Scene animate (SVG) pilotate dallo scorrimento. Ogni scena: build(svg) -> update(p) con p da 0 a 1.
   Nessuna libreria. I colori sono nelle classi CSS (.s-*), modificabili in style.css. */
window.SCENES = (function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) { n.setAttribute(k, attrs[k]); }
    if (parent) { parent.appendChild(n); }
    return n;
  }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function seg(p, a, b) { return clamp((p - a) / (b - a), 0, 1); }
  function ease(t) { return t * t * (3 - 2 * t); }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function txt(parent, x, y, s, cls, anchor) {
    var t = el('text', { x: x, y: y, 'class': cls || 's-label', 'text-anchor': anchor || 'middle' }, parent);
    t.textContent = s; return t;
  }

  var S = {};

  /* Sala 0: ogni quadratino = circa 4.123 visitatori */
  S.contesto = function (svg) {
    var cells = [];
    for (var i = 0; i < 100; i++) {
      cells.push(el('rect', { x: 40 + (i % 10) * 32, y: 36 + Math.floor(i / 10) * 20, width: 26, height: 14, rx: 2, 'class': 's-cell' }, svg));
    }
    var num = txt(svg, 200, 268, '0', 's-big');
    txt(svg, 200, 290, 'visitatori · 1 quadratino ≈ 4.123 persone', 's-label');
    return function (p) {
      var n = Math.round(ease(p) * 100);
      cells.forEach(function (c, i) { c.setAttribute('class', i < n ? 's-cell on' : 's-cell'); });
      num.textContent = Math.round(ease(p) * 412300).toLocaleString('it-IT');
    };
  };

  /* Sala 1: noi / loro */
  S['noi-loro'] = function (svg) {
    var dots = [];
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 10; c++) {
        var x = 46 + c * 31, y = 52 + r * 31, loro = c >= 7;
        var g = el('g', {}, svg);
        var ring = el('circle', { cx: 0, cy: 0, r: 13, 'class': 's-ring' }, g);
        var dot = el('circle', { cx: 0, cy: 0, r: 8, 'class': 's-dot' }, g);
        dots.push({ g: g, x: x, y: y, loro: loro, ring: ring, dot: dot, k: (r * 7 + c * 3) % 5 });
      }
    }
    var line = el('line', { x1: 251, y1: 30, x2: 251, y2: 30, 'class': 's-line' }, svg);
    var tn = txt(svg, 120, 274, 'noi', 's-label'), tl = txt(svg, 330, 274, 'loro', 's-label');
    return function (p) {
      var a = seg(p, 0.15, 0.45), b = ease(seg(p, 0.3, 0.8));
      line.setAttribute('y2', 30 + a * 220);
      dots.forEach(function (d) {
        var dx = d.loro ? b * 46 : -b * 6;
        var dy = d.loro ? (d.k - 2) * b * 4 : 0;
        d.g.setAttribute('transform', 'translate(' + (d.x + dx) + ',' + (d.y + dy) + ')');
        d.dot.setAttribute('class', d.loro && b > 0.05 ? 's-dot lock' : 's-dot');
        d.ring.setAttribute('opacity', d.loro ? b : 0);
      });
      tn.setAttribute('opacity', seg(p, 0.5, 0.7)); tl.setAttribute('opacity', seg(p, 0.6, 0.8));
    };
  };

  /* Sala 2: i volti diventano tutti uguali */
  S.volti = function (svg) {
    var names = ['Rosa', 'Dario', 'Mina', 'Elio', 'Lia', 'Nino', 'Sara', 'Ugo'];
    var fig = [];
    names.forEach(function (n, i) {
      var cx = 42 + i * 44;
      var u = el('g', {}, svg), v = el('g', {}, svg);
      var hr = 8 + (i * 5) % 6, bh = 44 + ((i * 7) % 5) * 7, bw = 18 + (i % 3) * 3;
      el('circle', { cx: cx, cy: 130 - bh / 2 - hr, r: hr, 'class': 's-h' + (i % 4) }, u);
      el('rect', { x: cx - bw / 2, y: 130 - bh / 2, width: bw, height: bh, rx: 6, 'class': 's-h' + (i % 4) }, u);
      var nm = txt(u, cx, 188, n, 's-name');
      el('circle', { cx: cx, cy: 100, r: 9, 'class': 's-grey' }, v);
      el('rect', { x: cx - 10, y: 111, width: 20, height: 46, rx: 4, 'class': 's-grey' }, v);
      fig.push({ u: u, v: v, nm: nm });
    });
    var tipo = txt(svg, 200, 240, '«quelli lì»', 's-quote');
    var sub = txt(svg, 200, 266, 'nome, età, storia: tutto cancellato', 's-label');
    return function (p) {
      fig.forEach(function (f, i) {
        var t = ease(seg(p, 0.1 + i * 0.05, 0.55 + i * 0.05));
        f.u.setAttribute('opacity', 1 - t); f.v.setAttribute('opacity', t);
      });
      tipo.setAttribute('opacity', seg(p, 0.6, 0.85)); sub.setAttribute('opacity', seg(p, 0.7, 0.95));
    };
  };

  /* Sala 3: cinque linguaggi in un solo messaggio */
  S.linguaggi = function (svg) {
    var labs = ['scienza', 'giornale', 'scuola', 'immagine', 'cinema'];
    var bars = labs.map(function (l, i) {
      var g = el('g', {}, svg);
      var r = el('rect', { x: 70, y: 0, width: 260, height: 22, rx: 4, 'class': 's-bar b' + i }, g);
      var t = txt(g, 200, 0, l, 's-barlab');
      return { g: g, r: r, t: t, y0: 36 + i * 48 };
    });
    var one = txt(svg, 200, 158, 'UN SOLO MESSAGGIO', 's-one');
    return function (p) {
      var t = ease(seg(p, 0.15, 0.75));
      bars.forEach(function (b) {
        var y = lerp(b.y0, 138, t);
        b.r.setAttribute('y', y); b.t.setAttribute('y', y + 15);
        b.g.setAttribute('opacity', lerp(1, 0.55, t));
        b.t.setAttribute('opacity', 1 - seg(p, 0.45, 0.7));
      });
      one.setAttribute('opacity', seg(p, 0.7, 0.95));
    };
  };

  /* Sala 4: la soglia dello scandalo scende */
  S.soglia = function (svg) {
    var rows = [];
    for (var i = 0; i < 8; i++) {
      var g = el('g', {}, svg);
      el('rect', { x: 36, y: 28 + i * 30, width: 250, height: 22, rx: 4, 'class': 's-row' }, g);
      var hot = el('rect', { x: 36, y: 28 + i * 30, width: 250, height: 22, rx: 4, 'class': 's-hot' }, g);
      rows.push(hot);
    }
    var excl = txt(svg, 311, 50, '!', 's-excl');
    el('rect', { x: 336, y: 28, width: 24, height: 218, rx: 4, 'class': 's-row' }, svg);
    var meter = el('rect', { x: 336, y: 28, width: 24, height: 218, rx: 4, 'class': 's-meter' }, svg);
    txt(svg, 348, 264, 'scandalo', 's-label');
    var rep = txt(svg, 150, 272, 'ripetizioni: 1', 's-label');
    return function (p) {
      var t = ease(seg(p, 0.05, 0.9));
      rows.forEach(function (r, i) { r.setAttribute('opacity', clamp(t * 9 - i, 0, 1) * 0.85); });
      var h = lerp(218, 18, t);
      meter.setAttribute('y', 28 + 218 - h); meter.setAttribute('height', h);
      excl.setAttribute('opacity', 1 - seg(p, 0.1, 0.5));
      rep.textContent = 'ripetizioni: ' + Math.max(1, Math.round(t * t * 500));
    };
  };

  /* Sala 5: un messaggio, quattro toni */
  S.pubblici = function (svg) {
    var toni = [['rude', 'per chi grida'], ['tecnico', 'per chi cita dati'], ['ragionevole', 'per chi dubita'], ['scherzoso', 'per chi ride']];
    var ang = [-135, -45, 135, 45];
    var sat = toni.map(function (t, i) {
      var l = el('line', { x1: 200, y1: 150, x2: 200, y2: 150, 'class': 's-line' }, svg);
      var g = el('g', {}, svg);
      el('rect', { x: -52, y: -24, width: 104, height: 48, rx: 8, 'class': 's-card c' + i }, g);
      txt(g, 0, -3, t[0], 's-cardt'); txt(g, 0, 14, t[1], 's-cards');
      return { l: l, g: g, a: ang[i] * Math.PI / 180 };
    });
    el('circle', { cx: 200, cy: 150, r: 30, 'class': 's-core' }, svg);
    txt(svg, 200, 154, 'messaggio', 's-corelab');
    return function (p) {
      var t = ease(seg(p, 0.1, 0.7));
      sat.forEach(function (s, i) {
        var tt = ease(seg(p, 0.1 + i * 0.06, 0.7 + i * 0.05));
        var x = 200 + Math.cos(s.a) * 118 * tt, y = 150 + Math.sin(s.a) * 98 * tt;
        s.l.setAttribute('x2', x); s.l.setAttribute('y2', y);
        s.g.setAttribute('transform', 'translate(' + x + ',' + y + ')'); s.g.setAttribute('opacity', tt);
      });
    };
  };

  return S;
})();
