/* =========================================================
   LME Building Contractors — interactions (multi-page build)
   Reveals, count-up, header state, drawer, FAQ, cookies, forms.
   Content is rendered at build time by Astro — no routing here.
   ========================================================= */
(function () {
  'use strict';
  function el(id) { return document.getElementById(id); }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- count-up numbers ---------- */
  function countUp(node) {
    if (node.dataset.done) return;
    node.dataset.done = '1';
    var target = parseFloat(node.getAttribute('data-count')) || 0;
    var dec = parseInt(node.getAttribute('data-dec') || '0', 10);
    var dur = 1600, start = null;
    function fmt(v) { return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-GB'); }
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick); else node.textContent = fmt(target);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- scroll reveals ---------- */
  var io = null;
  function observeReveals() {
    var nodes = document.querySelectorAll('.reveal:not(.in), .hin:not(.in)');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) {
        n.classList.add('in');
        var num = n.querySelector && n.querySelector('.num[data-count]');
        if (num) countUp(num);
      });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
            var num = en.target.querySelector && en.target.querySelector('.num[data-count]');
            if (num) countUp(num);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    nodes.forEach(function (n) {
      if (n.classList.contains('reveal') && !n.dataset.stag && n.parentNode) {
        var sibs = n.parentNode.querySelectorAll(':scope > .reveal');
        var idx = Array.prototype.indexOf.call(sibs, n);
        if (idx > 0) n.style.transitionDelay = (Math.min(idx, 6) * 0.075) + 's';
        n.dataset.stag = '1';
      }
      io.observe(n);
    });
  }

  /* ---------- scroll progress bar ---------- */
  var progress = el('progress');
  function updateProgress() {
    if (!progress) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    progress.style.width = (pct * 100) + '%';
  }

  /* ---------- premium header: transparent over hero -> solid on scroll ---------- */
  var header = el('siteHeader');
  var menu = el('mobileMenu');
  function hasHero() { return !!document.querySelector('.hero'); }
  function updateHeader() {
    if (!header) return;
    var y = window.scrollY || document.documentElement.scrollTop || 0;
    var overHero = hasHero() && y < 24;
    if (menu && menu.classList.contains('open')) overHero = false;
    header.classList.toggle('over-hero', overHero);
    header.classList.toggle('scrolled', y > 10 && !overHero);
  }

  /* ---------- hero parallax ---------- */
  function parallax() {
    if (reduceMotion) return;
    var img = document.querySelector('.hero-home .img-slot.fill img');
    if (img) {
      var y = window.scrollY || 0;
      img.style.transform = 'translate3d(0,' + (y * 0.15) + 'px,0) scale(1.12)';
    }
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () { updateProgress(); updateHeader(); parallax(); ticking = false; });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { updateProgress(); updateHeader(); });

  /* ---------- mobile menu ---------- */
  var burger = el('burger');
  var backdrop = el('navBackdrop');
  var drawerClose = el('drawerClose');
  function setMenu(open) {
    if (menu) menu.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    if (burger) { burger.classList.toggle('open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    document.body.style.overflow = open ? 'hidden' : '';
    updateHeader();
  }
  function closeMenu() { setMenu(false); }
  if (burger) burger.addEventListener('click', function () { setMenu(!(menu && menu.classList.contains('open'))); });
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  if (drawerClose) drawerClose.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- FAQ accordion ---------- */
  document.addEventListener('click', function (e) {
    var q = e.target.closest('.faq-q');
    if (!q) return;
    var item = q.closest('.faq-item');
    var ans = item.querySelector('.faq-a');
    var open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open ? 'true' : 'false');
    ans.style.maxHeight = open ? (ans.scrollHeight + 'px') : '';
  });

  /* ---------- contact form (mailto until Formspree is wired) ---------- */
  var form = el('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      function g(k) { return (d.get(k) || '').toString().trim(); }
      var subject = 'Quote request — ' + (g('type') || 'Project') + (g('location') ? ' in ' + g('location') : '');
      var body = [
        'Name: ' + g('name'), 'Email: ' + g('email'), 'Phone: ' + g('phone'),
        'Location: ' + g('location'), 'Project type: ' + g('type'), 'Project size: ' + g('size'),
        'Budget: ' + g('budget'), 'Preferred date: ' + g('date'), 'Preferred time: ' + g('time'),
        '', 'Details:', g('message')
      ].join('\n');
      try {
        window.location.href = 'mailto:Lmebuildingcontractors@hotmail.com?subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      } catch (err) { /* ignore */ }
      form.style.display = 'none';
      var thanks = el('contact-thanks');
      if (thanks) thanks.style.display = 'block';
    });
  }

  /* ---------- homepage hero estimate form ---------- */
  var heroForm = el('hero-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(heroForm);
      function g(k) { return (d.get(k) || '').toString().trim(); }
      var subject = 'Free estimate request' + (g('type') ? ' — ' + g('type') : '');
      var body = ['Name: ' + g('name'), 'Phone/email: ' + g('contact'), 'Project: ' + g('type'), '', '(Sent from the homepage estimate form)'].join('\n');
      try {
        window.location.href = 'mailto:Lmebuildingcontractors@hotmail.com?subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      } catch (err) { /* ignore */ }
      heroForm.style.display = 'none';
      var t = el('hero-thanks'); if (t) t.style.display = 'block';
    });
  }

  /* ---------- cookie consent ---------- */
  var COOKIE_KEY = 'lme-cookie-consent';
  var banner = el('cookie-banner');
  function setConsent(val) {
    try { localStorage.setItem(COOKIE_KEY, val); } catch (e) {}
    if (banner) banner.style.display = 'none';
  }
  (function initCookies() {
    var stored = null;
    try { stored = localStorage.getItem(COOKIE_KEY); } catch (e) {}
    if (!stored && banner) banner.style.display = 'block';
  })();
  if (el('cookie-accept')) el('cookie-accept').addEventListener('click', function () { setConsent('all'); });
  if (el('cookie-reject')) el('cookie-reject').addEventListener('click', function () { setConsent('essential'); });

  /* ---------- forms (Formspree, AJAX so we stay on-site) ---------- */
  function initForms() {
    var forms = document.querySelectorAll('form[data-formspree]');
    for (var i = 0; i < forms.length; i++) {
      (function (form) {
        var endpoint = form.getAttribute('action') || form.getAttribute('data-formspree');
        var thanks = document.getElementById(form.getAttribute('data-thanks') || '');
        var btn = form.querySelector('[type="submit"]');
        form.addEventListener('submit', function (e) {
          if (!endpoint) return; // no endpoint set -> let the browser handle it
          e.preventDefault();
          var label = btn ? btn.textContent : '';
          if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
          fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
            .then(function (res) {
              if (res.ok) {
                form.style.display = 'none';
                if (thanks) { thanks.style.display = 'block'; thanks.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
                form.reset();
                return;
              }
              return res.json().then(function (j) {
                throw new Error((j && j.errors && j.errors.map(function (x) { return x.message; }).join(', ')) || 'Bad response');
              });
            })
            .catch(function () {
              if (btn) { btn.disabled = false; btn.textContent = label; }
              alert('Sorry — something went wrong sending your enquiry. Please call us on 07592 278032 or email Lmebuildingcontractors@hotmail.com and we’ll get straight back to you.');
            });
        });
      })(forms[i]);
    }
  }
  initForms();

  /* ---------- init ---------- */
  var yr = el('year'); if (yr) yr.textContent = String(new Date().getFullYear());
  observeReveals();
  updateProgress();
  updateHeader();
  parallax();
})();
