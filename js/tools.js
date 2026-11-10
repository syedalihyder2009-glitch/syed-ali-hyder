/* ToolHub — all 20 tools. Everything runs in the browser; nothing is uploaded. */
(function () {
  'use strict';

  /* ---------- Tool list (order = order on the home page) ---------- */
  window.TOOL_META = [
    { id: 'wordcount',   slug: 'word-counter',           icon: '📝', cat: 'text' },
    { id: 'password',    slug: 'password-generator',     icon: '🔐', cat: 'dev' },
    { id: 'qr',          slug: 'qr-code-generator',      icon: '🔳', cat: 'utility', libs: ['https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'] },
    { id: 'age',         slug: 'age-calculator',         icon: '🎂', cat: 'utility' },
    { id: 'emi',         slug: 'emi-calculator',         icon: '🏦', cat: 'finance' },
    { id: 'gst',         slug: 'gst-calculator',         icon: '🧾', cat: 'finance' },
    { id: 'percent',     slug: 'percentage-calculator',  icon: '％', cat: 'finance' },
    { id: 'bmi',         slug: 'bmi-calculator',         icon: '⚖️', cat: 'health' },
    { id: 'case',        slug: 'text-case-converter',    icon: '🔤', cat: 'text' },
    { id: 'json',        slug: 'json-formatter',         icon: '🧩', cat: 'dev' },
    { id: 'base64',      slug: 'base64-encoder-decoder', icon: '🔁', cat: 'dev' },
    { id: 'unit',        slug: 'unit-converter',         icon: '📏', cat: 'utility' },
    { id: 'color',       slug: 'color-picker',           icon: '🎨', cat: 'dev' },
    { id: 'imgcompress', slug: 'image-compressor',       icon: '🗜️', cat: 'image' },
    { id: 'imgresize',   slug: 'image-resizer',          icon: '🖼️', cat: 'image' },
    { id: 'lorem',       slug: 'lorem-ipsum-generator',  icon: '📄', cat: 'text' },
    { id: 'random',      slug: 'random-number-generator',icon: '🎲', cat: 'utility' },
    { id: 'countdown',   slug: 'countdown-timer',        icon: '⏱️', cat: 'utility' },
    { id: 'urlenc',      slug: 'url-encoder-decoder',    icon: '🔗', cat: 'dev' },
    { id: 'pdfmerge',    slug: 'pdf-merge',              icon: '📚', cat: 'image', libs: ['https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'] }
  ];

  /* ---------- Helpers ---------- */
  const $ = (root, sel) => root.querySelector(sel);
  const num = (v) => { const n = parseFloat(v); return isFinite(n) ? n : NaN; };
  const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const fmt = (n, d = 2) => Number(n.toFixed(d)).toLocaleString('en-IN', { maximumFractionDigits: d });
  const kv = (label, value) => `<div class="kv"><span>${label}</span><b>${value}</b></div>`;
  const bytesFmt = (b) => b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  const popIn = (node) => { node.classList.remove('pop'); void node.offsetWidth; node.classList.add('pop'); };

  function randInt(n) { // unbiased random integer in [0, n)
    if (n > 4294967296) return Math.floor(Math.random() * n);
    const lim = Math.floor(4294967296 / n) * n, a = new Uint32Array(1);
    do { crypto.getRandomValues(a); } while (a[0] >= lim);
    return a[0] % n;
  }

  async function writeClipboard(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand('copy'); ta.remove(); return ok;
      } catch (e2) { return false; }
    }
  }
  function wireCopy(TH, btn, getText) {
    btn.addEventListener('click', async () => {
      const txt = getText();
      if (!txt) return;
      if (await writeClipboard(txt)) {
        btn.textContent = TH.t('copied');
        clearTimeout(btn._t);
        btn._t = setTimeout(() => { btn.textContent = TH.t(btn.dataset.i18n); }, 1400);
      }
    });
  }
  function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }
  function fileBase(name) { return (name || 'file').replace(/\.[^.]+$/, ''); }

  const TOOLS = {};
  window.TOOLS = TOOLS;

  /* =============== 1. WORD COUNTER =============== */
  TOOLS.wordcount = function (el, TH) {
    el.innerHTML = `
      <textarea id="wc" data-ph="typeHere" aria-label="text"></textarea>
      <div class="stats">
        <div><b id="s_w">0</b><span data-i18n="words"></span></div>
        <div><b id="s_c">0</b><span data-i18n="chars"></span></div>
        <div><b id="s_n">0</b><span data-i18n="charsNoSpace"></span></div>
        <div><b id="s_s">0</b><span data-i18n="sentences"></span></div>
        <div><b id="s_p">0</b><span data-i18n="paragraphs"></span></div>
        <div><b id="s_r">0</b><span data-i18n="readTime"></span></div>
      </div>
      <div class="row"><button class="ghost" id="clr" data-i18n="clear"></button></div>`;
    TH.apply(el);
    const ta = $(el, '#wc');
    const upd = () => {
      const v = ta.value, t = v.trim();
      const w = t ? t.split(/\s+/).length : 0;
      const sent = (t.match(/[^.!?।؟\n]+[.!?।؟]*/g) || []).filter(s => s.trim()).length;
      const para = t ? t.split(/\n\s*\n|\n/).filter(p => p.trim()).length : 0;
      $(el, '#s_w').textContent = w;
      $(el, '#s_c').textContent = v.length;
      $(el, '#s_n').textContent = v.replace(/\s/g, '').length;
      $(el, '#s_s').textContent = sent;
      $(el, '#s_p').textContent = para;
      $(el, '#s_r').textContent = (w ? Math.max(1, Math.ceil(w / 200)) : 0) + ' ' + TH.t('minShort');
    };
    ta.addEventListener('input', upd);
    $(el, '#clr').addEventListener('click', () => { ta.value = ''; upd(); ta.focus(); });
    TH.onLang(upd); upd();
  };

  /* =============== 2. PASSWORD GENERATOR =============== */
  TOOLS.password = function (el, TH) {
    el.innerHTML = `
      <label><span data-i18n="length"></span>: <b id="lenv">16</b></label>
      <input type="range" id="len" min="8" max="64" value="16">
      <label class="check"><input type="checkbox" id="o_u" checked><span data-i18n="upper"></span></label>
      <label class="check"><input type="checkbox" id="o_l" checked><span data-i18n="lower"></span></label>
      <label class="check"><input type="checkbox" id="o_n" checked><span data-i18n="numbers"></span></label>
      <label class="check"><input type="checkbox" id="o_s" checked><span data-i18n="symbols"></span></label>
      <div class="pw-box" id="pw" style="margin-top:18px">—</div>
      <div class="meter"><i id="meter"></i></div>
      <div style="margin-top:6px;color:var(--muted);font-size:.85rem"><span data-i18n="strength"></span>: <b id="sl" style="color:var(--text)"></b></div>
      <div class="row">
        <button id="gen" data-i18n="generate"></button>
        <button class="ghost" id="cp" data-i18n="copy"></button>
      </div>`;
    TH.apply(el);
    const sets = { u: 'ABCDEFGHJKLMNPQRSTUVWXYZ', l: 'abcdefghijkmnopqrstuvwxyz', n: '23456789', s: '!@#$%^&*?+-_=' };
    const len = $(el, '#len'), out = $(el, '#pw');
    let strengthKey = 'sStrong';
    const label = () => { $(el, '#sl').textContent = TH.t(strengthKey); };
    function gen() {
      let pools = ['u', 'l', 'n', 's'].filter(k => $(el, '#o_' + k).checked).map(k => sets[k]);
      if (!pools.length) { $(el, '#o_l').checked = true; pools = [sets.l]; }
      const all = pools.join(''), n = parseInt(len.value, 10);
      const chars = pools.map(p => p[randInt(p.length)]);
      while (chars.length < n) chars.push(all[randInt(all.length)]);
      for (let i = chars.length - 1; i > 0; i--) { const j = randInt(i + 1); [chars[i], chars[j]] = [chars[j], chars[i]]; }
      out.textContent = chars.join('');
      popIn(out);
      const bits = n * Math.log2(all.length);
      const m = $(el, '#meter');
      let color = 'var(--bad)'; strengthKey = 'sWeak';
      if (bits >= 80) { color = 'var(--ok)'; strengthKey = 'sVeryStrong'; }
      else if (bits >= 60) { color = 'var(--accent3)'; strengthKey = 'sStrong'; }
      else if (bits >= 40) { color = 'var(--warn)'; strengthKey = 'sMedium'; }
      m.style.width = Math.min(100, bits).toFixed(0) + '%'; m.style.background = color;
      label();
    }
    len.addEventListener('input', () => { $(el, '#lenv').textContent = len.value; gen(); });
    el.querySelectorAll('input[type=checkbox]').forEach(c => c.addEventListener('change', gen));
    $(el, '#gen').addEventListener('click', gen);
    wireCopy(TH, $(el, '#cp'), () => out.textContent === '—' ? '' : out.textContent);
    TH.onLang(label); gen();
  };

  /* =============== 3. QR CODE GENERATOR =============== */
  TOOLS.qr = function (el, TH) {
    el.innerHTML = `
      <label data-i18n="qrText"></label>
      <textarea id="q" data-ph="qrPh" style="min-height:90px" dir="ltr"></textarea>
      <label><span data-i18n="qrSize"></span>: <b id="szv">240</b></label>
      <input type="range" id="sz" min="128" max="512" step="16" value="240">
      <div style="text-align:center"><div class="qr-box" id="box" style="display:none"></div></div>
      <div class="err" id="msg" style="text-align:center;margin-top:10px"></div>
      <div class="row"><button id="dl" data-i18n="download" disabled></button></div>`;
    TH.apply(el);
    const q = $(el, '#q'), box = $(el, '#box'), dl = $(el, '#dl'), msg = $(el, '#msg'), sz = $(el, '#sz');
    let timer;
    function render() {
      const v = q.value.trim();
      box.innerHTML = ''; msg.textContent = '';
      if (!v) { box.style.display = 'none'; dl.disabled = true; return; }
      if (typeof QRCode === 'undefined') { msg.textContent = TH.t('libError'); dl.disabled = true; return; }
      const s = parseInt(sz.value, 10);
      box.style.display = 'inline-block';
      new QRCode(box, { text: v, width: s, height: s, correctLevel: QRCode.CorrectLevel.M });
      dl.disabled = false;
    }
    q.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(render, 250); });
    sz.addEventListener('input', () => { $(el, '#szv').textContent = sz.value; clearTimeout(timer); timer = setTimeout(render, 150); });
    dl.addEventListener('click', () => {
      const c = box.querySelector('canvas'), im = box.querySelector('img');
      const href = c ? c.toDataURL('image/png') : (im ? im.src : '');
      if (!href) return;
      const a = document.createElement('a'); a.href = href; a.download = 'qr-code.png';
      document.body.appendChild(a); a.click(); a.remove();
    });
    TH.onLang(() => { if (msg.textContent) render(); });
  };

  /* =============== 4. AGE CALCULATOR =============== */
  TOOLS.age = function (el, TH) {
    const today = new Date();
    const iso = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="dob"></label><input type="date" id="dob" max="${iso(today)}"></div>
        <div><label data-i18n="asOn"></label><input type="date" id="on" value="${iso(today)}"></div>
      </div>
      <div class="out" id="out"></div>`;
    TH.apply(el);
    const parse = (v) => { if (!v) return null; const [Y, M, D] = v.split('-').map(Number); return new Date(Y, M - 1, D); };
    const upd = () => {
      const b = parse($(el, '#dob').value), n = parse($(el, '#on').value), out = $(el, '#out');
      if (!b || !n || b > n) { out.innerHTML = ''; return; }
      let y = n.getFullYear() - b.getFullYear(), m = n.getMonth() - b.getMonth(), d = n.getDate() - b.getDate();
      if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
      if (m < 0) { y--; m += 12; }
      const total = Math.round((Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) / 86400000);
      let nb = new Date(n.getFullYear(), b.getMonth(), b.getDate());
      if (nb < n) nb = new Date(n.getFullYear() + 1, b.getMonth(), b.getDate());
      const toNext = Math.round((Date.UTC(nb.getFullYear(), nb.getMonth(), nb.getDate()) - Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())) / 86400000);
      out.innerHTML =
        `<div style="font-size:1.6rem;font-weight:800;margin-bottom:8px"><b>${y}</b> ${TH.t('yearsU')}, <b>${m}</b> ${TH.t('monthsU')}, <b>${d}</b> ${TH.t('daysU')}</div>` +
        kv(TH.t('totalDays'), total.toLocaleString('en-IN')) +
        kv(TH.t('nextBday'), toNext + ' ' + TH.t('daysLeft'));
      popIn(out);
    };
    el.addEventListener('input', upd);
    TH.onLang(upd);
  };

  /* =============== 5. EMI CALCULATOR =============== */
  TOOLS.emi = function (el, TH) {
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="amount"></label><input type="number" id="p" value="500000" min="0" inputmode="decimal"></div>
        <div><label data-i18n="rate"></label><input type="number" id="r" value="9" min="0" step="0.1" inputmode="decimal"></div>
        <div><label data-i18n="years"></label><input type="number" id="y" value="5" min="0.5" step="0.5" inputmode="decimal"></div>
      </div>
      <div class="out" id="out"></div>`;
    TH.apply(el);
    const upd = () => {
      const P = num($(el, '#p').value), ann = num($(el, '#r').value), n = Math.round(num($(el, '#y').value) * 12), out = $(el, '#out');
      if (!(P > 0) || !(n > 0) || !(ann >= 0)) { out.innerHTML = ''; return; }
      const r = ann / 1200;
      const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
      const total = emi * n, interest = total - P, pPct = (P / total * 100).toFixed(1);
      out.innerHTML =
        `<div style="text-align:center;margin-bottom:10px"><span style="color:var(--muted);font-size:.9rem">${TH.t('monthlyEmi')}</span><div style="font-size:2rem;font-weight:800"><b>${inr(emi)}</b></div></div>` +
        kv(TH.t('principal'), inr(P)) + kv(TH.t('totalInterest'), inr(interest)) + kv(TH.t('totalPayment'), inr(total)) +
        `<div class="bar"><i class="p1" style="width:${pPct}%"></i><i class="p2" style="width:${(100 - pPct).toFixed(1)}%"></i></div>` +
        `<div class="legend"><span>${TH.t('principal')} ${pPct}%</span><span>${TH.t('interest')} ${(100 - pPct).toFixed(1)}%</span></div>`;
    };
    el.addEventListener('input', upd);
    TH.onLang(upd); upd();
  };

  /* =============== 6. GST CALCULATOR =============== */
  TOOLS.gst = function (el, TH) {
    el.innerHTML = `
      <label data-i18n="amount"></label>
      <input type="number" id="a" value="1000" min="0" inputmode="decimal">
      <label data-i18n="gstRate"></label>
      <div class="chiprow" id="rates"></div>
      <input type="number" id="cr" min="0" step="0.01" placeholder="%" style="margin-top:10px;max-width:160px" inputmode="decimal">
      <div class="chiprow" id="modes" style="margin-top:14px">
        <button class="pill on" data-m="add" data-i18n="gstAdd"></button>
        <button class="pill" data-m="remove" data-i18n="gstRemove"></button>
      </div>
      <div class="out" id="out"></div>`;
    TH.apply(el);
    let rate = 18, mode = 'add';
    const rates = [3, 5, 18, 40];
    const rbox = $(el, '#rates');
    rbox.innerHTML = rates.map(r => `<button class="pill${r === rate ? ' on' : ''}" data-r="${r}">${r}%</button>`).join('');
    const upd = () => {
      const a = num($(el, '#a').value), out = $(el, '#out');
      if (!(a >= 0) || !(rate >= 0)) { out.innerHTML = ''; return; }
      let net, gst, total;
      if (mode === 'add') { net = a; gst = a * rate / 100; total = a + gst; }
      else { total = a; net = a * 100 / (100 + rate); gst = total - net; }
      out.innerHTML =
        kv(TH.t('netAmount'), '₹' + fmt(net)) + kv(TH.t('gstAmount') + ' (' + rate + '%)', '₹' + fmt(gst)) +
        kv(TH.t('cgst') + ' (' + fmt(rate / 2) + '%)', '₹' + fmt(gst / 2)) + kv(TH.t('sgst') + ' (' + fmt(rate / 2) + '%)', '₹' + fmt(gst / 2)) +
        `<div class="kv" style="font-size:1.2rem"><span>${TH.t('grossAmount')}</span><b>₹${fmt(total)}</b></div>`;
    };
    rbox.addEventListener('click', (e) => {
      const b = e.target.closest('[data-r]'); if (!b) return;
      rate = parseFloat(b.dataset.r); $(el, '#cr').value = '';
      rbox.querySelectorAll('.pill').forEach(x => x.classList.toggle('on', x === b)); upd();
    });
    $(el, '#cr').addEventListener('input', (e) => {
      const v = num(e.target.value);
      if (v >= 0) { rate = v; rbox.querySelectorAll('.pill').forEach(x => x.classList.remove('on')); upd(); }
    });
    $(el, '#modes').addEventListener('click', (e) => {
      const b = e.target.closest('[data-m]'); if (!b) return;
      mode = b.dataset.m; el.querySelectorAll('#modes .pill').forEach(x => x.classList.toggle('on', x === b)); upd();
    });
    $(el, '#a').addEventListener('input', upd);
    TH.onLang(upd); upd();
  };

  /* =============== 7. PERCENTAGE CALCULATOR =============== */
  TOOLS.percent = function (el, TH) {
    el.innerHTML = `
      <div class="pcrow"><input type="number" id="a1" value="15" inputmode="decimal"><span data-i18n="pctOf"></span><input type="number" id="b1" value="2400" inputmode="decimal"><span>=</span><b class="res" id="r1"></b></div>
      <div class="pcrow"><input type="number" id="a2" value="30" inputmode="decimal"><span data-i18n="pctIsWhat"></span><input type="number" id="b2" value="120" inputmode="decimal"><span>=</span><b class="res" id="r2"></b></div>
      <div class="pcrow"><span data-i18n="pctChange"></span><input type="number" id="a3" value="80" inputmode="decimal"><span data-i18n="pctTo"></span><input type="number" id="b3" value="100" inputmode="decimal"><span>=</span><b class="res" id="r3"></b></div>`;
    TH.apply(el);
    const upd = () => {
      const g = (id) => num($(el, id).value);
      const a1 = g('#a1'), b1 = g('#b1'), a2 = g('#a2'), b2 = g('#b2'), a3 = g('#a3'), b3 = g('#b3');
      $(el, '#r1').textContent = isNaN(a1 + b1) ? '—' : fmt(a1 * b1 / 100, 4);
      $(el, '#r2').textContent = (isNaN(a2 + b2) || b2 === 0) ? '—' : fmt(a2 / b2 * 100, 4) + '%';
      if (isNaN(a3 + b3) || a3 === 0) $(el, '#r3').textContent = '—';
      else { const c = (b3 - a3) / Math.abs(a3) * 100; $(el, '#r3').textContent = (c > 0 ? '▲ +' : c < 0 ? '▼ ' : '') + fmt(c, 4) + '%'; $(el, '#r3').style.color = c > 0 ? 'var(--ok)' : c < 0 ? 'var(--bad)' : ''; }
    };
    el.addEventListener('input', upd); upd();
  };

  /* =============== 8. BMI CALCULATOR =============== */
  TOOLS.bmi = function (el, TH) {
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="height"></label><input type="number" id="h" value="170" min="50" max="260" inputmode="decimal"></div>
        <div><label data-i18n="weight"></label><input type="number" id="w" value="70" min="10" max="400" inputmode="decimal"></div>
      </div>
      <div class="out" id="out" style="text-align:center"></div>
      <div class="note" style="padding:0;margin-top:12px" data-i18n="bmiNote"></div>`;
    TH.apply(el);
    const upd = () => {
      const h = num($(el, '#h').value) / 100, w = num($(el, '#w').value), out = $(el, '#out');
      if (!(h > 0.5) || !(w > 0)) { out.innerHTML = ''; return; }
      const b = w / (h * h);
      let key = 'bmiObese', color = 'var(--bad)';
      if (b < 18.5) { key = 'bmiUnder'; color = '#4aa3ff'; }
      else if (b < 25) { key = 'bmiNormal'; color = 'var(--ok)'; }
      else if (b < 30) { key = 'bmiOver'; color = 'var(--warn)'; }
      const pos = Math.max(0, Math.min(100, (b - 12) / (40 - 12) * 100));
      out.innerHTML = `<span style="color:var(--muted);font-size:.9rem">${TH.t('bmiLabel')}</span>
        <div style="font-size:2.6rem;font-weight:800;color:${color}">${b.toFixed(1)}</div>
        <div style="font-weight:700;color:${color}">${TH.t(key)}</div>
        <div class="scale"><i style="left:${pos}%"></i></div>
        <div class="legend" style="justify-content:space-between;margin-top:10px"><span style="--c:#4aa3ff">&lt;18.5</span><span>18.5–24.9</span><span>25–29.9</span><span>30+</span></div>`;
    };
    el.addEventListener('input', upd);
    TH.onLang(upd); upd();
  };

  /* =============== 9. TEXT CASE CONVERTER =============== */
  TOOLS.case = function (el, TH) {
    el.innerHTML = `
      <textarea id="i" data-ph="typeHere"></textarea>
      <div class="chiprow" id="btns" style="margin-top:12px">
        <button class="pill" data-c="upper" data-i18n="caseUpper"></button>
        <button class="pill" data-c="lower" data-i18n="caseLower"></button>
        <button class="pill" data-c="title" data-i18n="caseTitle"></button>
        <button class="pill" data-c="sentence" data-i18n="caseSentence"></button>
        <button class="pill" data-c="camel" data-i18n="caseCamel"></button>
        <button class="pill" data-c="snake" data-i18n="caseSnake"></button>
        <button class="pill" data-c="kebab" data-i18n="caseKebab"></button>
      </div>
      <label data-i18n="output" style="margin-top:18px"></label>
      <textarea id="o" readonly></textarea>
      <div class="row"><button id="cp" data-i18n="copy"></button><button class="ghost" id="clr" data-i18n="clear"></button></div>`;
    TH.apply(el);
    const words = (s) => s.trim().toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
    const cap = (w) => w.charAt(0).toUpperCase() + w.slice(1);
    const conv = {
      upper: (s) => s.toUpperCase(),
      lower: (s) => s.toLowerCase(),
      title: (s) => s.toLowerCase().replace(/(^|[\s\-_])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()),
      sentence: (s) => s.toLowerCase().replace(/(^\s*|[.!?।؟]\s+|\n\s*)(\p{L})/gu, (m, a, b) => a + b.toUpperCase()),
      camel: (s) => words(s).map((w, i) => i ? cap(w) : w).join(''),
      snake: (s) => words(s).join('_'),
      kebab: (s) => words(s).join('-')
    };
    $(el, '#btns').addEventListener('click', (e) => {
      const b = e.target.closest('[data-c]'); if (!b) return;
      $(el, '#o').value = conv[b.dataset.c]($(el, '#i').value);
      el.querySelectorAll('#btns .pill').forEach(x => x.classList.toggle('on', x === b));
    });
    wireCopy(TH, $(el, '#cp'), () => $(el, '#o').value);
    $(el, '#clr').addEventListener('click', () => { $(el, '#i').value = ''; $(el, '#o').value = ''; });
  };

  /* =============== 10. JSON FORMATTER =============== */
  TOOLS.json = function (el, TH) {
    el.innerHTML = `
      <textarea id="i" class="mono" dir="ltr" spellcheck="false" placeholder='{"name":"ToolHub","tools":20}'></textarea>
      <div class="row">
        <button id="f" data-i18n="jsonFormat"></button>
        <button class="ghost" id="m" data-i18n="jsonMinify"></button>
        <button class="ghost" id="v" data-i18n="jsonValidate"></button>
        <button class="ghost" id="clr" data-i18n="clear"></button>
      </div>
      <div id="st" style="margin-top:14px;min-height:24px"></div>
      <label data-i18n="output"></label>
      <textarea id="o" class="mono" dir="ltr" readonly spellcheck="false"></textarea>
      <div class="row"><button id="cp" data-i18n="copy"></button></div>`;
    TH.apply(el);
    const st = $(el, '#st'), inp = $(el, '#i'), out = $(el, '#o');
    function run(kind) {
      const v = inp.value.trim();
      if (!v) { st.innerHTML = ''; out.value = ''; return; }
      try {
        const obj = JSON.parse(v);
        if (kind === 'format') out.value = JSON.stringify(obj, null, 2);
        else if (kind === 'minify') out.value = JSON.stringify(obj);
        st.innerHTML = '<span class="okc">✔ ' + TH.t('jsonValid') + '</span>';
      } catch (e) {
        st.innerHTML = '<span class="err">✖ ' + TH.t('jsonInvalid') + ': </span><span class="mono" dir="ltr"></span>';
        st.lastChild.textContent = e.message;
      }
    }
    $(el, '#f').addEventListener('click', () => run('format'));
    $(el, '#m').addEventListener('click', () => run('minify'));
    $(el, '#v').addEventListener('click', () => run('validate'));
    $(el, '#clr').addEventListener('click', () => { inp.value = ''; out.value = ''; st.innerHTML = ''; });
    wireCopy(TH, $(el, '#cp'), () => out.value);
  };

  /* =============== 11. BASE64 =============== */
  TOOLS.base64 = function (el, TH) {
    el.innerHTML = `
      <textarea id="i" data-ph="typeHere" dir="ltr"></textarea>
      <div class="row">
        <button id="e" data-i18n="b64Encode"></button>
        <button class="ghost" id="d" data-i18n="b64Decode"></button>
        <button class="ghost" id="clr" data-i18n="clear"></button>
      </div>
      <div id="st" class="err" style="margin-top:12px;min-height:22px"></div>
      <label data-i18n="output"></label>
      <textarea id="o" class="mono" dir="ltr" readonly></textarea>
      <div class="row"><button id="cp" data-i18n="copy"></button></div>`;
    TH.apply(el);
    const enc = (s) => { let bin = ''; new TextEncoder().encode(s).forEach(b => { bin += String.fromCharCode(b); }); return btoa(bin); };
    const dec = (s) => {
      let t = s.trim().replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
      while (t.length % 4) t += '=';
      const bin = atob(t);
      return new TextDecoder('utf-8', { fatal: true }).decode(Uint8Array.from(bin, c => c.charCodeAt(0)));
    };
    const st = $(el, '#st'), out = $(el, '#o');
    $(el, '#e').addEventListener('click', () => { st.textContent = ''; out.value = enc($(el, '#i').value); });
    $(el, '#d').addEventListener('click', () => {
      st.textContent = '';
      try { out.value = dec($(el, '#i').value); } catch (e) { out.value = ''; st.textContent = TH.t('b64Err'); }
    });
    $(el, '#clr').addEventListener('click', () => { $(el, '#i').value = ''; out.value = ''; st.textContent = ''; });
    wireCopy(TH, $(el, '#cp'), () => out.value);
  };

  /* =============== 12. UNIT CONVERTER =============== */
  TOOLS.unit = function (el, TH) {
    const D = {
      length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254 },
      mass: { kg: 1, g: 0.001, mg: 0.000001, t: 1000, lb: 0.45359237, oz: 0.028349523125 },
      speed: { 'm/s': 1, 'km/h': 1 / 3.6, mph: 0.44704, kn: 1852 / 3600 },
      area: { 'm²': 1, 'km²': 1e6, 'cm²': 1e-4, ha: 1e4, acre: 4046.8564224, 'ft²': 0.09290304, 'yd²': 0.83612736 },
      temp: { '°C': 1, '°F': 1, K: 1 }
    };
    const catKey = { length: 'uc_length', mass: 'uc_mass', temp: 'uc_temp', speed: 'uc_speed', area: 'uc_area' };
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="uCategory"></label><select id="c"></select></div>
        <div><label data-i18n="uValue"></label><input type="number" id="v" value="1" inputmode="decimal"></div>
      </div>
      <div class="cols">
        <div><label data-i18n="uFrom"></label><select id="f"></select></div>
        <div><label data-i18n="uTo"></label><select id="t"></select></div>
      </div>
      <div class="row"><button class="ghost small" id="sw">⇄</button></div>
      <div class="out big" id="out" dir="ltr"></div>`;
    TH.apply(el);
    const c = $(el, '#c'), f = $(el, '#f'), t = $(el, '#t');
    const fillCats = () => { const cur = c.value || 'length'; c.innerHTML = Object.keys(D).map(k => `<option value="${k}">${TH.t(catKey[k])}</option>`).join(''); c.value = cur; };
    const fillUnits = () => {
      const u = Object.keys(D[c.value]);
      f.innerHTML = t.innerHTML = u.map(x => `<option>${x}</option>`).join('');
      f.selectedIndex = 0; t.selectedIndex = Math.min(1, u.length - 1);
    };
    const toC = (v, u) => u === '°C' ? v : u === '°F' ? (v - 32) * 5 / 9 : v - 273.15;
    const fromC = (v, u) => u === '°C' ? v : u === '°F' ? v * 9 / 5 + 32 : v + 273.15;
    const upd = () => {
      const v = num($(el, '#v').value), out = $(el, '#out');
      if (isNaN(v)) { out.textContent = ''; return; }
      const cat = c.value; let r;
      if (cat === 'temp') r = fromC(toC(v, f.value), t.value);
      else r = v * D[cat][f.value] / D[cat][t.value];
      out.textContent = v.toLocaleString('en-US', { maximumFractionDigits: 8 }) + ' ' + f.value + ' = ' + Number(r.toPrecision(12)).toLocaleString('en-US', { maximumFractionDigits: 8 }) + ' ' + t.value;
    };
    fillCats(); fillUnits(); upd();
    c.addEventListener('change', () => { fillUnits(); upd(); });
    [f, t, $(el, '#v')].forEach(x => x.addEventListener('input', upd));
    $(el, '#sw').addEventListener('click', () => { const a = f.value; f.value = t.value; t.value = a; upd(); });
    TH.onLang(() => { fillCats(); upd(); });
  };

  /* =============== 13. COLOUR PICKER =============== */
  TOOLS.color = function (el, TH) {
    el.innerHTML = `
      <label data-i18n="colPick"></label>
      <div class="cols"><input type="color" id="p" value="#6c8cff"><input type="text" id="hx" class="mono" dir="ltr" maxlength="7" value="#6c8cff"></div>
      <div class="color-preview" id="pv"></div>
      <div id="vals" style="margin-top:14px"></div>
      <label data-i18n="colShades"></label>
      <div class="swatches" id="sw"></div>`;
    TH.apply(el);
    const clamp = (x) => Math.max(0, Math.min(255, Math.round(x)));
    const toHex = (r, g, b) => '#' + [r, g, b].map(x => clamp(x).toString(16).padStart(2, '0')).join('');
    const parseHex = (s) => {
      s = s.trim().replace('#', '');
      if (/^[0-9a-f]{3}$/i.test(s)) s = s.split('').map(c => c + c).join('');
      return /^[0-9a-f]{6}$/i.test(s) ? [0, 2, 4].map(i => parseInt(s.substr(i, 2), 16)) : null;
    };
    const toHsl = (r, g, b) => {
      r /= 255; g /= 255; b /= 255;
      const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; let h = 0, s = 0;
      if (mx !== mn) {
        const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn);
        h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60;
      }
      return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
    };
    const hslToRgb = (h, s, l) => {
      s /= 100; l /= 100; const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [f(0) * 255, f(8) * 255, f(4) * 255];
    };
    function set(rgb) {
      const [r, g, b] = rgb.map(clamp), hex = toHex(r, g, b), [h, s, l] = toHsl(r, g, b);
      $(el, '#p').value = hex; $(el, '#hx').value = hex;
      const pv = $(el, '#pv'); pv.style.background = hex;
      pv.style.color = (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#111' : '#fff'; pv.textContent = hex.toUpperCase();
      const rows = [['HEX', hex.toUpperCase()], ['RGB', `rgb(${r}, ${g}, ${b})`], ['HSL', `hsl(${h}, ${s}%, ${l}%)`]];
      $(el, '#vals').innerHTML = rows.map((x, i) => `<div class="kv"><span>${x[0]}</span><b class="mono" dir="ltr">${x[1]}</b><button class="small ghost" data-i="${i}" data-i18n="copy">${TH.t('copy')}</button></div>`).join('');
      el.querySelectorAll('#vals button').forEach(btn => wireCopy(TH, btn, () => rows[btn.dataset.i][1]));
      const ls = [93, 82, 68, l, 36, 24, 13];
      $(el, '#sw').innerHTML = ls.map((L, i) => { const c = toHex(...hslToRgb(h, s, L)); return `<button style="background:${c}" data-c="${c}" title="${c}" aria-label="${c}"></button>`; }).join('');
    }
    $(el, '#p').addEventListener('input', (e) => set(parseHex(e.target.value)));
    $(el, '#hx').addEventListener('input', (e) => { const r = parseHex(e.target.value); if (r) set(r); });
    $(el, '#sw').addEventListener('click', (e) => { const b = e.target.closest('[data-c]'); if (b) set(parseHex(b.dataset.c)); });
    set([108, 140, 255]);
  };

  /* ---------- shared: load an image from a File ---------- */
  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file), im = new Image();
      im.onload = () => resolve({ im, url });
      im.onerror = () => { URL.revokeObjectURL(url); reject(new Error('load')); };
      im.src = url;
    });
  }
  function dropZone(zone, input, onFile) {
    zone.addEventListener('click', () => input.click());
    zone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
    ['dragenter', 'dragover'].forEach(ev => zone.addEventListener(ev, (e) => { e.preventDefault(); zone.classList.add('over'); }));
    ['dragleave', 'drop'].forEach(ev => zone.addEventListener(ev, (e) => { e.preventDefault(); zone.classList.remove('over'); }));
    zone.addEventListener('drop', (e) => { const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f) onFile(f); });
    input.addEventListener('change', () => { if (input.files[0]) onFile(input.files[0]); });
  }

  /* =============== 14. IMAGE COMPRESSOR =============== */
  TOOLS.imgcompress = function (el, TH) {
    el.innerHTML = `
      <div class="drop" id="dz" tabindex="0" role="button"><div style="font-size:2rem">🖼️</div><div data-i18n="imgDrop"></div></div>
      <input type="file" id="fi" accept="image/*" hidden>
      <div id="ctl" style="display:none">
        <div class="cols">
          <div><label><span data-i18n="imgQuality"></span>: <b id="qv">70</b>%</label><input type="range" id="q" min="10" max="100" value="70"></div>
          <div><label data-i18n="imgFormat"></label><select id="fm"><option value="image/jpeg">JPEG</option><option value="image/webp">WebP</option></select></div>
          <div><label data-i18n="imgMaxW"></label><input type="number" id="mw" min="16" placeholder="1920" inputmode="numeric"></div>
        </div>
        <div class="stats">
          <div><b id="so">–</b><span data-i18n="imgOrig"></span></div>
          <div><b id="sn">–</b><span data-i18n="imgNew"></span></div>
          <div><b id="sv">–</b><span data-i18n="imgSaved"></span></div>
        </div>
        <div class="preview"><img id="pv" alt="preview"></div>
        <div class="row" style="justify-content:center"><button id="dl" data-i18n="download"></button></div>
      </div>`;
    TH.apply(el);
    let src = null, file = null, outBlob = null, outUrl = null, timer;
    async function process() {
      if (!src) return;
      const q = parseInt($(el, '#q').value, 10) / 100, mime = $(el, '#fm').value, mw = parseInt($(el, '#mw').value, 10);
      let w = src.im.naturalWidth, h = src.im.naturalHeight;
      if (mw > 0 && w > mw) { h = Math.round(h * mw / w); w = mw; }
      const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
      const ctx = cv.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); ctx.drawImage(src.im, 0, 0, w, h);
      cv.toBlob((blob) => {
        if (!blob) return;
        if (outUrl) URL.revokeObjectURL(outUrl);
        outBlob = blob; outUrl = URL.createObjectURL(blob);
        $(el, '#pv').src = outUrl;
        $(el, '#so').textContent = bytesFmt(file.size);
        $(el, '#sn').textContent = bytesFmt(blob.size);
        const sv = (1 - blob.size / file.size) * 100;
        $(el, '#sv').textContent = (sv >= 0 ? sv.toFixed(0) : '0') + '%';
      }, mime, q);
    }
    const queue = () => { clearTimeout(timer); timer = setTimeout(process, 180); };
    async function onFile(f) {
      if (!f.type.startsWith('image/')) return;
      try {
        if (src) URL.revokeObjectURL(src.url);
        src = await loadImage(f); file = f;
        $(el, '#ctl').style.display = 'block'; process();
      } catch (e) { /* unreadable image */ }
    }
    dropZone($(el, '#dz'), $(el, '#fi'), onFile);
    $(el, '#q').addEventListener('input', () => { $(el, '#qv').textContent = $(el, '#q').value; queue(); });
    $(el, '#fm').addEventListener('change', queue);
    $(el, '#mw').addEventListener('input', queue);
    $(el, '#dl').addEventListener('click', () => {
      if (!outBlob) return;
      const ext = outBlob.type === 'image/webp' ? 'webp' : 'jpg';
      downloadBlob(outBlob, fileBase(file.name) + '-compressed.' + ext);
    });
  };

  /* =============== 15. IMAGE RESIZER =============== */
  TOOLS.imgresize = function (el, TH) {
    el.innerHTML = `
      <div class="drop" id="dz" tabindex="0" role="button"><div style="font-size:2rem">🖼️</div><div data-i18n="imgDrop"></div></div>
      <input type="file" id="fi" accept="image/*" hidden>
      <div id="ctl" style="display:none">
        <div class="cols">
          <div><label data-i18n="imgWidth"></label><input type="number" id="w" min="1" max="8000" inputmode="numeric"></div>
          <div><label data-i18n="imgHeight"></label><input type="number" id="h" min="1" max="8000" inputmode="numeric"></div>
          <div><label data-i18n="imgFormat"></label><select id="fm"><option value="image/png">PNG</option><option value="image/jpeg">JPEG</option><option value="image/webp">WebP</option></select></div>
        </div>
        <label class="check"><input type="checkbox" id="kr" checked><span data-i18n="imgKeep"></span></label>
        <div class="chiprow" id="pct" style="margin-top:12px">
          <button class="pill" data-p="25">25%</button><button class="pill" data-p="50">50%</button><button class="pill" data-p="75">75%</button><button class="pill" data-p="100">100%</button>
        </div>
        <div class="row"><button id="go" data-i18n="imgResize"></button></div>
        <div id="res" style="display:none">
          <div class="stats"><div><b id="dim">–</b><span data-i18n="imgSize"></span></div><div><b id="sz">–</b><span data-i18n="imgNew"></span></div></div>
          <div class="preview"><img id="pv" alt="preview"></div>
          <div class="row" style="justify-content:center"><button id="dl" data-i18n="download"></button></div>
        </div>
      </div>`;
    TH.apply(el);
    let src = null, file = null, outBlob = null, outUrl = null, ratio = 1;
    const W = $(el, '#w'), H = $(el, '#h');
    async function onFile(f) {
      if (!f.type.startsWith('image/')) return;
      try {
        if (src) URL.revokeObjectURL(src.url);
        src = await loadImage(f); file = f;
        W.value = src.im.naturalWidth; H.value = src.im.naturalHeight; ratio = src.im.naturalWidth / src.im.naturalHeight;
        $(el, '#ctl').style.display = 'block'; $(el, '#res').style.display = 'none';
      } catch (e) { /* unreadable image */ }
    }
    dropZone($(el, '#dz'), $(el, '#fi'), onFile);
    W.addEventListener('input', () => { if ($(el, '#kr').checked && W.value) H.value = Math.max(1, Math.round(W.value / ratio)); });
    H.addEventListener('input', () => { if ($(el, '#kr').checked && H.value) W.value = Math.max(1, Math.round(H.value * ratio)); });
    $(el, '#pct').addEventListener('click', (e) => {
      const b = e.target.closest('[data-p]'); if (!b || !src) return;
      const p = parseInt(b.dataset.p, 10) / 100;
      W.value = Math.max(1, Math.round(src.im.naturalWidth * p)); H.value = Math.max(1, Math.round(src.im.naturalHeight * p));
    });
    $(el, '#go').addEventListener('click', () => {
      if (!src) return;
      const w = Math.min(8000, Math.max(1, parseInt(W.value, 10) || 0)), h = Math.min(8000, Math.max(1, parseInt(H.value, 10) || 0));
      if (!w || !h) return;
      const mime = $(el, '#fm').value, cv = document.createElement('canvas'); cv.width = w; cv.height = h;
      const ctx = cv.getContext('2d'); ctx.imageSmoothingQuality = 'high';
      if (mime === 'image/jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
      ctx.drawImage(src.im, 0, 0, w, h);
      cv.toBlob((blob) => {
        if (!blob) return;
        if (outUrl) URL.revokeObjectURL(outUrl);
        outBlob = blob; outUrl = URL.createObjectURL(blob);
        $(el, '#pv').src = outUrl; $(el, '#dim').textContent = w + ' × ' + h; $(el, '#sz').textContent = bytesFmt(blob.size);
        $(el, '#res').style.display = 'block';
      }, mime, 0.92);
    });
    $(el, '#dl').addEventListener('click', () => {
      if (!outBlob) return;
      const ext = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' }[outBlob.type] || 'png';
      downloadBlob(outBlob, fileBase(file.name) + '-resized.' + ext);
    });
  };

  /* =============== 16. LOREM IPSUM =============== */
  TOOLS.lorem = function (el, TH) {
    el.innerHTML = `
      <div class="cols">
        <div><label><span data-i18n="loremParas"></span>: <b id="nv">3</b></label><input type="range" id="n" min="1" max="12" value="3"></div>
      </div>
      <label class="check"><input type="checkbox" id="st" checked><span data-i18n="loremStart"></span></label>
      <textarea id="o" readonly style="margin-top:16px;min-height:220px"></textarea>
      <div class="row"><button id="gen" data-i18n="generate"></button><button class="ghost" id="cp" data-i18n="copy"></button></div>`;
    TH.apply(el);
    const W = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(' ');
    const pick = () => W[randInt(W.length)];
    const sentence = () => {
      const n = 8 + randInt(9), w = []; for (let i = 0; i < n; i++) w.push(pick());
      w[0] = w[0][0].toUpperCase() + w[0].slice(1);
      if (n > 10) w[4 + randInt(3)] += ',';
      return w.join(' ') + '.';
    };
    const gen = () => {
      const n = parseInt($(el, '#n').value, 10), paras = [];
      for (let p = 0; p < n; p++) {
        const k = 4 + randInt(3), s = []; for (let i = 0; i < k; i++) s.push(sentence());
        paras.push(s.join(' '));
      }
      if ($(el, '#st').checked) paras[0] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + paras[0].split('. ').slice(1).join('. ');
      $(el, '#o').value = paras.join('\n\n');
    };
    $(el, '#n').addEventListener('input', () => { $(el, '#nv').textContent = $(el, '#n').value; gen(); });
    $(el, '#st').addEventListener('change', gen);
    $(el, '#gen').addEventListener('click', gen);
    wireCopy(TH, $(el, '#cp'), () => $(el, '#o').value);
    gen();
  };

  /* =============== 17. RANDOM NUMBER GENERATOR =============== */
  TOOLS.random = function (el, TH) {
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="rndMin"></label><input type="number" id="a" value="1" inputmode="numeric"></div>
        <div><label data-i18n="rndMax"></label><input type="number" id="b" value="100" inputmode="numeric"></div>
        <div><label data-i18n="rndCount"></label><input type="number" id="c" value="5" min="1" max="1000" inputmode="numeric"></div>
      </div>
      <label class="check"><input type="checkbox" id="u"><span data-i18n="rndUnique"></span></label>
      <div class="row"><button id="gen" data-i18n="generate"></button><button class="ghost" id="cp" data-i18n="copy"></button></div>
      <div id="err" class="err" style="margin-top:12px"></div>
      <div class="numchips" id="out" dir="ltr"></div>`;
    TH.apply(el);
    let last = [];
    let errShown = false;
    const gen = () => {
      const err = $(el, '#err'), out = $(el, '#out'); err.textContent = ''; errShown = false;
      let a = Math.floor(num($(el, '#a').value)), b = Math.floor(num($(el, '#b').value)), c = Math.floor(num($(el, '#c').value));
      if ([a, b, c].some(isNaN) || c < 1) return;
      if (a > b) [a, b] = [b, a];
      c = Math.min(c, 1000);
      const range = b - a + 1;
      const uniq = $(el, '#u').checked;
      if (uniq && c > range) { err.textContent = TH.t('rndErr'); errShown = true; out.innerHTML = ''; last = []; return; }
      const res = [];
      if (uniq) { const s = new Set(); while (s.size < c) s.add(a + randInt(range)); res.push(...s); }
      else for (let i = 0; i < c; i++) res.push(a + randInt(range));
      last = res;
      out.innerHTML = res.map(n => `<span>${n.toLocaleString('en-US')}</span>`).join('');
    };
    $(el, '#gen').addEventListener('click', gen);
    wireCopy(TH, $(el, '#cp'), () => last.join(', '));
    TH.onLang(() => { if (errShown) gen(); });
    gen();
  };

  /* =============== 18. COUNTDOWN TIMER =============== */
  TOOLS.countdown = function (el, TH) {
    el.innerHTML = `
      <div class="cols">
        <div><label data-i18n="tmH"></label><input type="number" id="h" value="0" min="0" max="99" inputmode="numeric"></div>
        <div><label data-i18n="tmM"></label><input type="number" id="m" value="5" min="0" max="999" inputmode="numeric"></div>
        <div><label data-i18n="tmS"></label><input type="number" id="s" value="0" min="0" max="59" inputmode="numeric"></div>
      </div>
      <div class="chiprow" id="pre">
        <button class="pill" data-m="1">1</button><button class="pill" data-m="5">5</button><button class="pill" data-m="10">10</button><button class="pill" data-m="25">25</button><button class="pill" data-m="60">60</button>
      </div>
      <div class="timer-digits" id="dg">00:05:00</div>
      <div class="bar"><i class="p1" id="pb" style="width:100%"></i></div>
      <div class="row" style="justify-content:center"><button id="go" data-i18n="tmStart"></button><button class="ghost" id="rs" data-i18n="reset"></button></div>
      <div id="done" style="text-align:center;margin-top:14px;font-weight:700;color:var(--ok);min-height:24px"></div>`;
    TH.apply(el);
    el.querySelectorAll('#pre .pill').forEach(b => { b.textContent = b.dataset.m + ' ' + TH.t('minShort'); });
    const ID = (s) => $(el, s);
    let total = 0, remain = 0, endAt = 0, mode = 'idle', iv = null, doneShown = false;
    const pad = (n) => String(n).padStart(2, '0');
    const show = (ms) => {
      const s = Math.ceil(ms / 1000);
      ID('#dg').textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60);
      ID('#pb').style.width = (total ? ms / total * 100 : 0) + '%';
    };
    const readInputs = () => (Math.max(0, parseInt(ID('#h').value, 10) || 0) * 3600 + Math.max(0, parseInt(ID('#m').value, 10) || 0) * 60 + Math.max(0, parseInt(ID('#s').value, 10) || 0)) * 1000;
    const label = () => { ID('#go').textContent = TH.t(mode === 'running' ? 'tmPause' : mode === 'paused' ? 'tmResume' : 'tmStart'); };
    function beep() {
      try {
        const AC = window.AudioContext || window.webkitAudioContext, ac = new AC();
        [0, 0.35, 0.7].forEach((d) => {
          const o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.value = 880;
          o.connect(g); g.connect(ac.destination);
          const t0 = ac.currentTime + d; g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.3, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.3);
          o.start(t0); o.stop(t0 + 0.32);
        });
        setTimeout(() => ac.close(), 1500);
      } catch (e) { /* audio not available */ }
    }
    const originalTitle = document.title;
    function stop() { clearInterval(iv); iv = null; }
    function tick() {
      remain = Math.max(0, endAt - Date.now()); show(remain);
      document.title = ID('#dg').textContent + ' · ' + originalTitle;
      if (remain <= 0) {
        stop(); mode = 'idle'; label(); doneShown = true;
        ID('#dg').classList.add('done'); ID('#done').textContent = '✔ ' + TH.t('tmDone'); beep();
        document.title = originalTitle;
      }
    }
    function reset() {
      stop(); mode = 'idle'; doneShown = false; total = readInputs(); remain = total; show(total);
      ID('#dg').classList.remove('done'); ID('#done').textContent = ''; document.title = originalTitle; label();
    }
    ID('#go').addEventListener('click', () => {
      if (mode === 'running') { remain = Math.max(0, endAt - Date.now()); stop(); mode = 'paused'; label(); return; }
      if (mode === 'idle') { total = readInputs(); remain = total; if (!total) return; ID('#dg').classList.remove('done'); ID('#done').textContent = ''; doneShown = false; }
      endAt = Date.now() + remain; mode = 'running'; label(); stop(); iv = setInterval(tick, 200); tick();
    });
    ID('#rs').addEventListener('click', reset);
    ['#h', '#m', '#s'].forEach(s => ID(s).addEventListener('input', () => { if (mode === 'idle') reset(); }));
    ID('#pre').addEventListener('click', (e) => {
      const b = e.target.closest('[data-m]'); if (!b) return;
      const m = parseInt(b.dataset.m, 10);
      ID('#h').value = Math.floor(m / 60); ID('#m').value = m % 60; ID('#s').value = 0; reset();
    });
    TH.onLang(() => {
      label(); if (doneShown) ID('#done').textContent = '✔ ' + TH.t('tmDone');
      el.querySelectorAll('#pre .pill').forEach(b => { b.textContent = b.dataset.m + ' ' + TH.t('minShort'); });
    });
    reset();
  };

  /* =============== 19. URL ENCODER / DECODER =============== */
  TOOLS.urlenc = function (el, TH) {
    el.innerHTML = `
      <textarea id="i" class="mono" dir="ltr" data-ph="typeHere" spellcheck="false"></textarea>
      <label data-i18n="urlMode"></label>
      <select id="md"><option value="c" data-i18n="urlComp"></option><option value="f" data-i18n="urlFull"></option></select>
      <div class="row"><button id="e" data-i18n="urlEncode"></button><button class="ghost" id="d" data-i18n="urlDecode"></button><button class="ghost" id="clr" data-i18n="clear"></button></div>
      <div id="st" class="err" style="margin-top:12px;min-height:22px"></div>
      <label data-i18n="output"></label>
      <textarea id="o" class="mono" dir="ltr" readonly></textarea>
      <div class="row"><button id="cp" data-i18n="copy"></button></div>`;
    TH.apply(el);
    const st = $(el, '#st'), out = $(el, '#o');
    const full = () => $(el, '#md').value === 'f';
    $(el, '#e').addEventListener('click', () => { st.textContent = ''; out.value = full() ? encodeURI($(el, '#i').value) : encodeURIComponent($(el, '#i').value); });
    $(el, '#d').addEventListener('click', () => {
      st.textContent = '';
      try { out.value = full() ? decodeURI($(el, '#i').value) : decodeURIComponent($(el, '#i').value); }
      catch (e) { out.value = ''; st.textContent = TH.t('urlErr'); }
    });
    $(el, '#clr').addEventListener('click', () => { $(el, '#i').value = ''; out.value = ''; st.textContent = ''; });
    wireCopy(TH, $(el, '#cp'), () => out.value);
  };

  /* =============== 20. PDF MERGE =============== */
  TOOLS.pdfmerge = function (el, TH) {
    el.innerHTML = `
      <div class="drop" id="dz" tabindex="0" role="button"><div style="font-size:2rem">📚</div><div data-i18n="pdfDrop"></div></div>
      <input type="file" id="fi" accept="application/pdf,.pdf" multiple hidden>
      <ul class="filelist" id="list"></ul>
      <div id="st" style="margin-top:12px;min-height:22px"></div>
      <div class="row"><button id="go" data-i18n="pdfMerge" disabled></button></div>`;
    TH.apply(el);
    let files = [], busy = false, stKey = '', stCls = '';
    const list = $(el, '#list'), st = $(el, '#st'), go = $(el, '#go');
    const setSt = (key, cls) => { stKey = key; stCls = cls || ''; st.innerHTML = key ? `<span class="${stCls}">${TH.t(key)}</span>` : ''; };
    function draw() {
      list.innerHTML = '';
      files.forEach((f, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="nm"></span><span class="sz">${bytesFmt(f.size)}</span>
          <button class="small ghost" data-a="up" data-i="${i}" title="${TH.t('pdfUp')}" aria-label="${TH.t('pdfUp')}">↑</button>
          <button class="small ghost" data-a="dn" data-i="${i}" title="${TH.t('pdfDown')}" aria-label="${TH.t('pdfDown')}">↓</button>
          <button class="small ghost" data-a="rm" data-i="${i}" title="${TH.t('pdfRemove')}" aria-label="${TH.t('pdfRemove')}">✕</button>`;
        li.firstChild.textContent = (i + 1) + '. ' + f.name;
        list.appendChild(li);
      });
      go.disabled = files.length < 2 || busy;
    }
    function add(fileList) {
      Array.from(fileList).forEach(f => { if (/pdf$/i.test(f.type) || /\.pdf$/i.test(f.name)) files.push(f); });
      setSt(''); draw();
    }
    dropZone($(el, '#dz'), $(el, '#fi'), () => { add($(el, '#fi').files); $(el, '#fi').value = ''; });
    $(el, '#dz').addEventListener('drop', (e) => { if (e.dataTransfer.files.length) add(e.dataTransfer.files); });
    list.addEventListener('click', (e) => {
      const b = e.target.closest('[data-a]'); if (!b) return;
      const i = parseInt(b.dataset.i, 10), a = b.dataset.a;
      if (a === 'rm') files.splice(i, 1);
      else if (a === 'up' && i > 0) [files[i - 1], files[i]] = [files[i], files[i - 1]];
      else if (a === 'dn' && i < files.length - 1) [files[i + 1], files[i]] = [files[i], files[i + 1]];
      draw();
    });
    go.addEventListener('click', async () => {
      if (files.length < 2) { setSt('pdfNeed2', 'err'); return; }
      if (typeof PDFLib === 'undefined') { setSt('libError', 'err'); return; }
      busy = true; go.disabled = true; setSt('pdfBusy');
      try {
        const out = await PDFLib.PDFDocument.create();
        for (const f of files) {
          const doc = await PDFLib.PDFDocument.load(await f.arrayBuffer());
          const pages = await out.copyPages(doc, doc.getPageIndices());
          pages.forEach(p => out.addPage(p));
        }
        const bytes = await out.save();
        downloadBlob(new Blob([bytes], { type: 'application/pdf' }), 'merged.pdf');
        setSt('');
      } catch (err) { setSt('pdfErr', 'err'); }
      busy = false; draw();
    });
    TH.onLang(() => { setSt(stKey, stCls); draw(); });
    draw();
  };

})();
