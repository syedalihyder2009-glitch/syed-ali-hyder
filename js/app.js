/* ToolHub — app shell: header, footer, language, theme, search, page rendering */
(function () {
  'use strict';

  /* ===== EDIT THESE TWO LINES BEFORE YOU PUBLISH ===== */
  const CONFIG = {
    siteName: 'ToolHub',
    contactEmail: 'bunnytheeagle042@gmail.com'
  };

  const body = document.body;
  const base = body.dataset.base || '';
  const root = document.documentElement;
  const listeners = [];
  const store = {
    get(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  let lang = store.get('th_lang', null);
  if (!lang) { lang = (navigator.language || 'en').slice(0, 2); }
  if (!window.I18N[lang]) lang = 'en';

  const TH = window.TH = {
    get lang() { return lang; },
    t(key) {
      const d = window.I18N[lang];
      return (d && d[key] !== undefined) ? d[key] : (window.I18N.en[key] !== undefined ? window.I18N.en[key] : key);
    },
    apply(scope) {
      (scope || document).querySelectorAll('[data-i18n]').forEach(n => { n.textContent = TH.t(n.dataset.i18n); });
      (scope || document).querySelectorAll('[data-ph]').forEach(n => { n.placeholder = TH.t(n.dataset.ph); });
      (scope || document).querySelectorAll('[data-i18n-label]').forEach(n => { const v = TH.t(n.dataset.i18nLabel); n.setAttribute('aria-label', v); n.title = v; });
    },
    onLang(fn) { listeners.push(fn); }
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const toolUrl = (m) => base + 'tools/' + m.slug + '.html';
  const toolName = (m) => TH.t('t_' + m.id + '_n');

  /* ===== Theme ===== */
  function setTheme(th) { root.dataset.theme = th; store.set('th_theme', th); const b = document.getElementById('themeBtn'); if (b) b.textContent = th === 'dark' ? '☀️' : '🌙'; }
  setTheme(store.get('th_theme', (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark'));

  /* ===== Header / footer ===== */
  const page = body.dataset.page || (body.dataset.tool ? 'tool' : 'home');
  function buildChrome() {
    const bg = document.createElement('div');
    bg.className = 'bg'; bg.setAttribute('aria-hidden', 'true');
    bg.innerHTML = '<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>';
    body.prepend(bg);

    const skip = document.createElement('a');
    skip.className = 'skip'; skip.href = '#main'; skip.textContent = 'Skip to content';
    body.prepend(skip);

    const hd = document.createElement('header');
    hd.className = 'site-header';
    const link = (href, key, pg) => `<a href="${href}" data-i18n="${key}" class="${page === pg ? 'active' : ''}"></a>`;
    hd.innerHTML = `
      <div class="nav">
        <a class="logo" href="${base}index.html" aria-label="${CONFIG.siteName}">
          <span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/></svg></span>
          <span>Tool<em>Hub</em></span>
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Main">
          ${link(base + 'index.html#tools', 'navTools', 'home')}
          ${link(base + 'about.html', 'navAbout', 'about')}
          ${link(base + 'help.html', 'navHelp', 'help')}
          ${link(base + 'contact.html', 'navContact', 'contact')}
        </nav>
        <div class="nav-spacer"></div>
        <div class="nav-tools">
          <select class="lang-select" id="langSel" aria-label="Language">${window.LANGS.map(l => `<option value="${l.code}">${l.label}</option>`).join('')}</select>
          <button class="icon-btn" id="themeBtn" data-i18n-label="theme" type="button"></button>
          <button class="icon-btn burger" id="burger" data-i18n-label="menu" type="button" aria-expanded="false">☰</button>
        </div>
      </div>`;
    body.insertBefore(hd, skip.nextSibling);

    const popular = ['emi', 'pdfmerge', 'imgcompress', 'qr', 'wordcount', 'age'].map(id => window.TOOL_META.find(m => m.id === id));
    const ft = document.createElement('footer');
    ft.className = 'site-footer';
    ft.innerHTML = `
      <div class="foot">
        <div>
          <a class="logo" href="${base}index.html"><span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/></svg></span><span>Tool<em>Hub</em></span></a>
          <p data-i18n="ftTagline"></p>
        </div>
        <div><h4 data-i18n="ftTools"></h4>${popular.map(m => `<a href="${toolUrl(m)}" data-tn="${m.id}"></a>`).join('')}</div>
        <div><h4 data-i18n="ftCompany"></h4>
          <a href="${base}about.html" data-i18n="navAbout"></a><a href="${base}help.html" data-i18n="navHelp"></a><a href="${base}contact.html" data-i18n="navContact"></a>
          <a href="${base}privacy.html" data-i18n="navPrivacy"></a><a href="${base}terms.html" data-i18n="navTerms"></a></div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} ${CONFIG.siteName}. <span data-i18n="ftRights"></span></div>`;
    body.appendChild(ft);

    const up = document.createElement('button');
    up.id = 'toTop'; up.type = 'button'; up.className = 'icon-btn'; up.textContent = '↑'; up.setAttribute('data-i18n-label', 'backTop');
    body.appendChild(up);
    up.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => up.classList.toggle('show', window.scrollY > 500), { passive: true });

    document.getElementById('themeBtn').addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
    const nav = document.getElementById('navLinks'), burger = document.getElementById('burger');
    burger.addEventListener('click', () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
    nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') nav.classList.remove('open'); });
    document.getElementById('langSel').addEventListener('change', (e) => setLang(e.target.value));
  }

  /* ===== Language ===== */
  function renderPage() {
    const P = (window.I18N[lang].pages || {})[page];
    if (!P) return;
    const mount = document.getElementById('pageBody'); if (!mount) return;
    const T = document.getElementById('pgTitle'); if (T) T.textContent = P.title;
    const Ld = document.getElementById('pgLead'); if (Ld) Ld.textContent = P.lead;
    const U = document.getElementById('pgUpdated'); if (U) U.textContent = P.updated || '';
    document.title = P.title + ' – ' + CONFIG.siteName;
    if (page === 'help') {
      mount.innerHTML = P.s.map(x => `<details class="faq"><summary>${esc(x.q)}</summary><div class="ans">${esc(x.a)}</div></details>`).join('');
    } else {
      mount.innerHTML = P.s.map(x => `<section class="sec reveal show"><h2>${esc(x.h)}</h2><p>${esc(x.p)}</p></section>`).join('');
    }
  }
  function renderTool() {
    const id = body.dataset.tool, m = window.TOOL_META.find(x => x.id === id);
    if (!m) return;
    document.title = toolName(m) + ' – ' + CONFIG.siteName;
    const h = document.getElementById('toolTitle'); if (h) h.textContent = toolName(m);
    const d = document.getElementById('toolDesc'); if (d) d.textContent = TH.t('t_' + id + '_d');
    const bc = document.getElementById('crumbName'); if (bc) bc.textContent = toolName(m);
    document.querySelectorAll('[data-tn]').forEach(a => { a.textContent = TH.t('t_' + a.dataset.tn + '_n'); });
    const rel = document.getElementById('relGrid');
    if (rel) {
      const same = window.TOOL_META.filter(x => x.cat === m.cat && x.id !== id);
      const others = window.TOOL_META.filter(x => x.cat !== m.cat && x.id !== id);
      rel.innerHTML = same.concat(others).slice(0, 4).map(x => `<a class="tcard show" href="${toolUrl(x)}"><div class="t-ico">${x.icon}</div><h3>${esc(toolName(x))}</h3></a>`).join('');
    }
  }
  function renderHome() {
    const grid = document.getElementById('grid'); if (!grid) return;
    const q = (document.getElementById('search').value || '').trim().toLowerCase();
    const cat = grid.dataset.cat || 'all';
    const items = window.TOOL_META.filter(m => (cat === 'all' || m.cat === cat) &&
      (!q || (toolName(m) + ' ' + TH.t('t_' + m.id + '_d')).toLowerCase().includes(q) || m.slug.includes(q)));
    grid.innerHTML = items.length ? items.map((m, i) => `
      <a class="tcard" href="${toolUrl(m)}" style="--i:${i}">
        <div class="t-ico">${m.icon}</div>
        <h3>${esc(toolName(m))}</h3>
        <p>${esc(TH.t('t_' + m.id + '_d'))}</p>
        <span class="open">${esc(TH.t('openTool'))}</span>
      </a>`).join('') : `<div class="empty">${esc(TH.t('noResults'))}</div>`;
    observeCards();
  }
  function renderChips() {
    const wrap = document.getElementById('chips'); if (!wrap) return;
    const grid = document.getElementById('grid'), cur = grid.dataset.cat || 'all';
    const cats = ['all', 'text', 'finance', 'health', 'dev', 'image', 'utility'];
    wrap.innerHTML = cats.map(c => `<button type="button" class="chip${c === cur ? ' on' : ''}" data-c="${c}">${esc(TH.t('cat_' + c))}</button>`).join('');
  }

  function setLang(l) {
    if (!window.I18N[l]) l = 'en';
    lang = l; store.set('th_lang', l);
    root.lang = l;
    root.dir = window.RTL_LANGS.includes(l) ? 'rtl' : 'ltr';
    const sel = document.getElementById('langSel'); if (sel) sel.value = l;
    TH.apply(document);
    document.querySelectorAll('[data-tn]').forEach(a => { a.textContent = TH.t('t_' + a.dataset.tn + '_n'); });
    const s = document.getElementById('search'); if (s) s.placeholder = TH.t('searchPh');
    if (body.dataset.tool) renderTool();
    if (document.getElementById('grid')) { renderChips(); renderHome(); }
    renderPage();
    renderContact();
    listeners.forEach(fn => { try { fn(); } catch (e) { /* tool refresh failed */ } });
  }

  /* ===== Home interactions ===== */
  let io;
  function observeCards() {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.tcard,.reveal').forEach(c => c.classList.add('show')); return; }
    if (!io) io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.tcard:not(.show),.reveal:not(.show)').forEach(c => io.observe(c));
  }
  function countUp() {
    document.querySelectorAll('[data-count]').forEach(n => {
      const target = parseInt(n.dataset.count, 10), start = performance.now(), dur = 1100;
      const step = (now) => { const p = Math.min(1, (now - start) / dur); n.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }
  function initHome() {
    const grid = document.getElementById('grid'); if (!grid) return;
    document.getElementById('search').addEventListener('input', renderHome);
    document.getElementById('chips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-c]'); if (!b) return;
      grid.dataset.cat = b.dataset.c; renderChips(); renderHome();
    });
    grid.addEventListener('pointermove', (e) => {
      const c = e.target.closest('.tcard'); if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    countUp();
  }

  /* ===== Contact form (opens the visitor's email app; nothing is stored) ===== */
  function renderContact() {
    const f = document.getElementById('contactForm'); if (!f || f.dataset.ready) return;
    f.dataset.ready = '1';
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (n) => f.elements[n].value.trim();
      const subject = v('subject') || 'ToolHub message';
      const text = v('message') + '\n\n— ' + v('name') + (v('email') ? ' (' + v('email') + ')' : '');
      window.location.href = 'mailto:' + CONFIG.contactEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
      const ok = document.getElementById('formOk'); if (ok) { ok.textContent = TH.t('cOk'); popIn(ok); }
    });
  }
  function popIn(n) { n.classList.remove('pop'); void n.offsetWidth; n.classList.add('pop'); }

  /* ===== Button ripple ===== */
  document.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('button:not(.icon-btn):not(.pill):not(.chip)');
    if (!b || b.disabled) return;
    const r = b.getBoundingClientRect(), size = Math.max(r.width, r.height), s = document.createElement('span');
    s.className = 'ripple'; s.style.width = s.style.height = size + 'px';
    s.style.left = (e.clientX - r.left - size / 2) + 'px'; s.style.top = (e.clientY - r.top - size / 2) + 'px';
    b.appendChild(s); setTimeout(() => s.remove(), 650);
  });

  /* ===== Start ===== */
  buildChrome();
  setTheme(root.dataset.theme || 'dark');
  if (body.dataset.tool) {
    const m = window.TOOL_META.find(x => x.id === body.dataset.tool);
    const mount = document.getElementById('toolMount');
    if (m && mount) window.TOOLS[m.id](mount, TH);
  }
  initHome();
  setLang(lang);
  observeCards();
})();
