/* ============================================================
   Aiira — Birthday Site
   You shouldn't need to edit this file. Everything you'd want
   to change lives in config.js.
   ============================================================ */
(function () {
  'use strict';

  const $  = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const C  = window.CONFIG || {};
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================
     0.  TEXT INJECTION
     ========================================================== */
  function setText(sel, val) { const el = $(sel); if (el && val != null) el.textContent = val; }

  document.title = C.pageTitle || `Happy Birthday, ${C.herName || ''} 💗`;

  const hero = C.hero || {};
  setText('#heroSmall', hero.smallText);
  setText('#heroName',  hero.bigText || C.herName);
  setText('#heroSub',   hero.subText);
  setText('#celTitle',  hero.celebrationText || `Happy Birthday, ${C.herName || ''}!`);
  setText('#celSub',    hero.celebrationSub);

  // Hero photo — hide the frame gracefully if the file isn't there yet
  const heroImg = $('#heroPhoto');
  if (heroImg) {
    heroImg.alt = C.herName || '';
    if (hero.photo) {
      heroImg.src = hero.photo;
      heroImg.onerror = () => {
        heroImg.removeAttribute('src');
        heroImg.style.background = 'linear-gradient(135deg,#FCDDE6,#F5B7CB)';
      };
    }
  }

  /* ---------- Letter ---------- */
  const L = C.letter || {};
  setText('#letterTitle', L.title);
  const letterCard = $('#letterCard');
  if (letterCard && Array.isArray(L.paragraphs)) {
    L.paragraphs.forEach(t => {
      const p = document.createElement('p');
      p.textContent = t;
      letterCard.appendChild(p);
    });
    const sign = document.createElement('div');
    sign.className = 'letter-sign';
    sign.innerHTML = `${escapeHTML(L.signOff || 'With love,')}<span class="name">${escapeHTML(C.yourName || '')}</span>`;
    letterCard.appendChild(sign);
  }

  /* ---------- Something I need to say ---------- */
  const S = C.saying || {};
  setText('#sayTitle', S.title);
  setText('#saySub',   S.subtitle);
  setText('#beliefTitle', S.beliefTitle);

  const sayCard = $('#sayApology');
  if (sayCard && Array.isArray(S.apology)) {
    S.apology.forEach(t => {
      const p = document.createElement('p');
      p.textContent = t;
      sayCard.appendChild(p);
    });
  }
  const beliefBody = $('#beliefBody');
  if (beliefBody && Array.isArray(S.belief)) {
    S.belief.forEach(t => {
      const p = document.createElement('p');
      p.textContent = t;
      beliefBody.appendChild(p);
    });
  }
  // Hide the whole section if it's been emptied out in config
  if (!S.apology?.length && !S.belief?.length) {
    const sec = document.getElementById('saying');
    if (sec) sec.style.display = 'none';
  }

  /* ---------- Reasons ---------- */
  const R = C.reasons || {};
  setText('#reasonsTitle', R.title);
  setText('#reasonsSub',   R.subtitle);
  const rGrid = $('#reasonsGrid');
  if (rGrid && Array.isArray(R.items)) {
    R.items.forEach((it, i) => {
      const d = document.createElement('div');
      d.className = `reason reveal d${(i % 6) + 1}`;
      d.innerHTML = `<div class="emo">${escapeHTML(it.emoji || '💗')}</div>
                     <div class="txt">${escapeHTML(it.text || '')}</div>`;
      rGrid.appendChild(d);
    });
  }

  /* ---------- Timeline ---------- */
  const T = C.timeline || {};
  setText('#tlTitle', T.title);
  setText('#tlSub',   T.subtitle);
  const tl = $('#timeline');
  if (tl && Array.isArray(T.items)) {
    T.items.forEach(it => {
      const d = document.createElement('div');
      d.className = 'tl-item reveal';
      d.innerHTML = `<div class="tl-dot"></div>
        <div class="tl-card">
          <div class="tl-date">${escapeHTML(it.date || '')}</div>
          <h3 class="tl-head">${escapeHTML(it.heading || '')}</h3>
          <p class="tl-text">${escapeHTML(it.text || '')}</p>
        </div>`;
      tl.appendChild(d);
    });
  }

  /* ---------- Gift / proposal ---------- */
  const G = C.gift || {};
  setText('#giftTitle', G.title);
  setText('#giftSub',   G.subtitle);
  setText('#giftBtn',   G.buttonText || 'Open Me');
  setText('#forgiveLine', G.forgiveLine);
  setText('#leadIn',      G.leadIn);
  setText('#question',    G.question);
  setText('#afterText',   G.afterText);
  setText('#giftRevealSmall', G.revealSmall);
  // Drop any line that's been emptied out in config
  ['#forgiveLine', '#leadIn', '#question', '#afterText', '#giftRevealSmall'].forEach(sel => {
    const el = $(sel);
    if (el && !el.textContent.trim()) el.style.display = 'none';
  });

  /* ---------- Footer ---------- */
  setText('#footerText', C.footer);
  setText('#footerName', C.yourName ? `— ${C.yourName}` : '');

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }


  /* ==========================================================
     1.  COUNTDOWN
     ========================================================== */
  const target = new Date(C.birthday || '2026-07-31T00:00:00').getTime();
  const cd = { D: $('#cdD'), H: $('#cdH'), M: $('#cdM'), S: $('#cdS') };
  const cap = $('#cdCaption');
  let partyStarted = false;
  const pad = n => String(n).padStart(2, '0');

  function updateNum(el, val) {
    if (!el) return;
    const s = pad(val);
    if (el.textContent !== s) {
      el.textContent = s;
      if (!reduceMotion) {
        el.classList.remove('cd-tick');
        void el.offsetWidth;
        el.classList.add('cd-tick');
      }
    }
  }

  function tick() {
    const diff = target - Date.now();

    if (diff <= 0) {
      if (!partyStarted) startParty();
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;

    updateNum(cd.D, d); updateNum(cd.H, h);
    updateNum(cd.M, m); updateNum(cd.S, s);

    if (cap) {
      const name = C.herName || 'you';
      cap.textContent = d > 1
        ? `${d} days until the best day of the year.`
        : d === 1
          ? `Just one more sleep, ${name}.`
          : h >= 1
            ? `Almost midnight. Almost your day.`
            : `Any moment now…`;
    }
  }

  function startParty() {
    partyStarted = true;
    document.body.classList.add('party');
    if (!reduceMotion) confettiBurst(220);
    setTimeout(() => !reduceMotion && confettiBurst(140), 900);
    setTimeout(() => !reduceMotion && confettiBurst(140), 1800);
  }

  tick();
  setInterval(tick, 1000);

  // Secret preview: add ?preview to the URL to see the celebration state early
  if (/[?&]preview/.test(location.search)) startParty();


  /* ==========================================================
     1b.  MIDNIGHT LOCK
     Keeps the whole site sealed until her birthday, then opens
     itself with no refresh needed.
     Add ?key to the URL to bypass it (that's your preview link).
     ========================================================== */
  const LK = C.lock || {};
  const lockEl = $('#lockScreen');
  const bypass = /[?&](key|preview)/.test(location.search);
  let locked = false;

  if (LK.enabled && lockEl && !bypass && Date.now() < target) {
    locked = true;
    lockEl.hidden = false;
    document.body.classList.add('is-locked');

    setText('#lockSmall', LK.smallText);
    setText('#lockTitle', LK.title);
    setText('#lockMsg',   LK.message);
    setText('#lockHint',  LK.hint);

    const lk = { D: $('#lkD'), H: $('#lkH'), M: $('#lkM'), S: $('#lkS') };

    const lockTick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { openTheGate(); return; }
      updateNum(lk.D, Math.floor(diff / 86400000));
      updateNum(lk.H, Math.floor(diff / 3600000) % 24);
      updateNum(lk.M, Math.floor(diff / 60000) % 60);
      updateNum(lk.S, Math.floor(diff / 1000) % 60);
    };
    lockTick();
    const lockTimer = setInterval(lockTick, 1000);

    function openTheGate() {
      clearInterval(lockTimer);
      if (!locked) return;
      locked = false;
      setText('#lockTitle', LK.unlockText || "It's midnight.");
      const cdEl = $('#lockCountdown'), hintEl = $('#lockHint');
      if (cdEl)   cdEl.style.display = 'none';
      if (hintEl) hintEl.style.display = 'none';
      if (!reduceMotion) confettiBurst(200);
      setTimeout(() => {
        lockEl.classList.add('opening');
        document.body.classList.remove('is-locked');
        startParty();
        setTimeout(() => { lockEl.hidden = true; }, 1000);
      }, 1500);
    }

    // If the tab was asleep past midnight, catch up the moment it wakes
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && Date.now() >= target) openTheGate();
    });
  }


  /* ==========================================================
     2.  CONFETTI
     ========================================================== */
  function confettiBurst(count) {
    const colors = ['#EE93B2', '#E2648F', '#F5B7CB', '#DDB39F', '#B76E79', '#FFF1F5', '#F7D6C4'];
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      const size = 6 + Math.random() * 8;
      const round = Math.random() > .6;
      Object.assign(el.style, {
        position: 'fixed',
        left: Math.random() * 100 + 'vw',
        top: '-16px',
        width: size + 'px',
        height: (round ? size : size * 1.7) + 'px',
        background: colors[(Math.random() * colors.length) | 0],
        borderRadius: round ? '50%' : '2px',
        zIndex: 900,
        pointerEvents: 'none',
        opacity: '0.95',
      });
      frag.appendChild(el);

      const dur  = 3200 + Math.random() * 2600;
      const driftX = (Math.random() - .5) * 320;
      const spin = (Math.random() - .5) * 1400;

      el.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${driftX}px, ${window.innerHeight + 80}px) rotate(${spin}deg)`, opacity: .2 }
      ], { duration: dur, easing: 'cubic-bezier(.25,.6,.4,1)' })
        .onfinish = () => el.remove();
    }
    document.body.appendChild(frag);
  }


  /* ==========================================================
     3.  FLOATING PETALS / HEARTS
     ========================================================== */
  (function petals() {
    if (reduceMotion) return;
    const cv = $('#petals');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let w, h, parts = [];

    function resize() {
      w = cv.width  = window.innerWidth;
      h = cv.height = window.innerHeight;
      const n = w < 640 ? 16 : 30;
      parts = Array.from({ length: n }, mk);
    }
    function mk() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: 4 + Math.random() * 7,
        sp: .25 + Math.random() * .65,
        dr: (Math.random() - .5) * .5,
        a: Math.random() * Math.PI * 2,
        va: (Math.random() - .5) * .022,
        o: .18 + Math.random() * .35,
        c: ['#F5B7CB', '#EE93B2', '#FCDDE6', '#DDB39F'][(Math.random() * 4) | 0],
      };
    }
    function heart(x, y, s, rot, color, alpha) {
      ctx.save();
      ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s / 16, s / 16);
      ctx.globalAlpha = alpha; ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, 4);
      ctx.bezierCurveTo(0, -2, -9, -2, -9, 4);
      ctx.bezierCurveTo(-9, 10, 0, 14, 0, 18);
      ctx.bezierCurveTo(0, 14, 9, 10, 9, 4);
      ctx.bezierCurveTo(9, -2, 0, -2, 0, 4);
      ctx.fill();
      ctx.restore();
    }
    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y += p.sp; p.x += p.dr + Math.sin(p.y / 60) * .35; p.a += p.va;
        if (p.y - 20 > h) { p.y = -20; p.x = Math.random() * w; }
        if (p.x < -30) p.x = w + 20;
        if (p.x > w + 30) p.x = -20;
        heart(p.x, p.y, p.r * 2, p.a, p.c, p.o);
      }
      requestAnimationFrame(loop);
    }
    resize();
    window.addEventListener('resize', resize);
    loop();
  })();


  /* ==========================================================
     4.  GALLERY  (auto-hides photos that don't exist)
     ========================================================== */
  const Gal = C.gallery || {};
  setText('#galTitle', Gal.title);
  setText('#galSub',   Gal.subtitle);

  const grid  = $('#galleryGrid');
  const empty = $('#galleryEmpty');

  // Each photo is checked first. Files that don't exist are skipped silently,
  // so you can add as many or as few photos as you like without editing code
  // and the gallery never shows a broken or empty box.
  if (grid && Array.isArray(Gal.photos)) {
    const list = Gal.photos.filter(p => p && p.src);

    if (list.length === 0) {
      if (empty) empty.style.display = 'block';
    } else {
      const results = new Array(list.length).fill(null);
      let pending = list.length;

      list.forEach((ph, i) => {
        const probe = new Image();
        probe.decoding = 'async';
        probe.alt = ph.caption || 'A photo of us';
        probe.addEventListener('load',  () => { results[i] = probe; settle(); });
        probe.addEventListener('error', () => { results[i] = false; settle(); });
        probe.src = ph.src;
      });

      function settle() {
        if (--pending > 0) return;

        // Render in the original config order, skipping missing files
        results.forEach((img, i) => {
          if (!img) return;
          const ph = list[i];
          const fig = document.createElement('figure');
          fig.className = 'g-item reveal';
          fig.appendChild(img);
          if (ph.caption) {
            const cap = document.createElement('figcaption');
            cap.className = 'g-cap';
            cap.textContent = ph.caption;
            fig.appendChild(cap);
          }
          fig.addEventListener('click', () => openLB(fig));
          grid.appendChild(fig);
          observeOne(fig);
        });

        if (grid.children.length === 0 && empty) empty.style.display = 'block';
      }
    }
  }

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount');
  let live = [], lbIndex = 0;

  // Build the list fresh each time, from whatever actually survived on the page
  function collect() {
    live = $$('#galleryGrid .g-item').map(fig => ({
      el: fig,
      src: fig.querySelector('img').currentSrc || fig.querySelector('img').src,
      caption: (fig.querySelector('.g-cap') || {}).textContent || '',
    }));
  }

  function openLB(fig) {
    collect();
    const i = live.findIndex(p => p.el === fig);
    if (i < 0) return;
    lbIndex = i;
    render();
    lb.classList.add('open');
    document.body.classList.add('locked');
  }
  function render() {
    const p = live[lbIndex];
    if (!p) return;
    lbImg.src = p.src;
    lbImg.alt = p.caption || 'Photo';
    lbCap.textContent = p.caption || '';
    lbCount.textContent = `${lbIndex + 1} / ${live.length}`;
  }
  function closeLB() { lb.classList.remove('open'); document.body.classList.remove('locked'); }
  function move(step) { lbIndex = (lbIndex + step + live.length) % live.length; render(); }

  if (lb) {
    $('#lbClose').addEventListener('click', closeLB);
    $('#lbPrev').addEventListener('click', e => { e.stopPropagation(); move(-1); });
    $('#lbNext').addEventListener('click', e => { e.stopPropagation(); move(1);  });
    lb.addEventListener('click', e => { if (e.target === lb || e.target === lbImg) closeLB(); });

    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLB();
      if (e.key === 'ArrowLeft')  move(-1);
      if (e.key === 'ArrowRight') move(1);
    });

    // Swipe on mobile
    let sx = 0, sy = 0;
    lb.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
    }, { passive: true });
  }


  /* ==========================================================
     5.  GIFT BOX
     ========================================================== */
  const box = $('#giftBox'), gBtn = $('#giftBtn'), gRev = $('#giftReveal');
  let opened = false;
  function openGift() {
    if (opened) return;
    opened = true;
    box.classList.remove('shake');
    box.classList.add('opened');
    gBtn.classList.add('hide');
    if (!reduceMotion) confettiBurst(160);
    setTimeout(() => gRev.classList.add('show'), 480);
  }
  if (box)  { box.addEventListener('click', openGift);
              box.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGift(); } }); }
  if (gBtn) gBtn.addEventListener('click', openGift);


  /* ==========================================================
     6.  MUSIC
     ========================================================== */
  const M = C.music || {};
  const audio = $('#audio'), mBtn = $('#musicBtn'), mTip = $('#musicTip');

  if (M.enabled && M.file && audio && mBtn) {
    // Check the file actually exists before showing the button, so she never
    // taps a "Play our song" button that does nothing.
    fetch(M.file, { method: 'HEAD' })
      .then(res => { if (res.ok) enableMusic(); })
      .catch(() => { /* no song file yet - button stays hidden */ });
  }

  function enableMusic() {
    audio.src = M.file;
    audio.addEventListener('error', () => { mBtn.hidden = true; if (mTip) mTip.classList.remove('show'); });

    mBtn.hidden = false;
    if (mTip) {
      mTip.textContent = M.label || 'Play our song';
      setTimeout(() => mTip.classList.add('show'), 2600);
      setTimeout(() => mTip.classList.remove('show'), 8600);
    }

    let fadeTimer = null;
    mBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.volume = 0;
        audio.play().then(() => {
          mBtn.classList.add('playing');
          mBtn.setAttribute('aria-label', 'Pause music');
          if (mTip) mTip.classList.remove('show');
          clearInterval(fadeTimer);
          let v = 0;
          fadeTimer = setInterval(() => {           // gentle fade in
            v = Math.min(v + 0.04, 0.7);
            audio.volume = v;
            if (v >= 0.7) clearInterval(fadeTimer);
          }, 90);
        }).catch(() => { mBtn.hidden = true; });
      } else {
        clearInterval(fadeTimer);
        audio.pause();
        mBtn.classList.remove('playing');
        mBtn.setAttribute('aria-label', 'Play music');
      }
    });
  }

  /* ==========================================================
     7.  SCROLL REVEAL
     ========================================================== */
  let io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    $$('.reveal').forEach(el => io.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('in'));
  }
  function observeOne(el) { io ? io.observe(el) : el.classList.add('in'); }


  /* ==========================================================
     8.  PRELOADER OUT
     ========================================================== */
  function hidePre() {
    const pre = $('#preloader');
    if (!pre) return;
    setTimeout(() => {
      pre.classList.add('gone');
      // don't release scroll if the midnight lock is still up
      if (!document.body.classList.contains('is-locked')) {
        document.body.classList.remove('locked');
      }
      // re-check reveals now that the page is visible
      $$('.reveal').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.92) el.classList.add('in');
      });
    }, 700);
  }
  window.addEventListener('load', hidePre);
  setTimeout(hidePre, 3500); // safety net if an asset stalls

})();
