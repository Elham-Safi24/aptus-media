// ── NAV LOGO SVG ──
const logoSVG = `
<svg viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg">
  <line x1="4" y1="100" x2="45" y2="10" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <line x1="45" y1="10" x2="86" y2="100" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <line x1="20" y1="70" x2="70" y2="70" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="86" y1="100" x2="86" y2="10" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <line x1="86" y1="10" x2="126" y2="100" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
  <line x1="62" y1="38" x2="86" y2="10" stroke="#4da6ff" stroke-width="3" stroke-linecap="round"/>
  <line x1="86" y1="10" x2="110" y2="38" stroke="#4da6ff" stroke-width="3" stroke-linecap="round"/>
  <line x1="86" y1="10" x2="86" y2="2" stroke="#4da6ff" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="58" y1="38" x2="114" y2="38" stroke="#4da6ff" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="86" cy="56" r="7" fill="none" stroke="#4da6ff" stroke-width="2.2"/>
  <circle cx="86" cy="56" r="2.2" fill="#4da6ff"/>
</svg>`;

// ── NAV HTML ──
function renderNav(activePage) {
  const pages = [
    { href: '../index.html', label: 'Home', key: 'home' },
    { href: 'portfolio.html', label: 'Portfolio', key: 'portfolio' },
    { href: 'services.html', label: 'Services', key: 'services' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav" id="main-nav">
      <a href="../index.html" class="nav-logo">
        ${logoSVG}
        <div class="nav-logo-text">
          <div class="nav-logo-name">Aptus<span>Media</span></div>
          <div class="nav-logo-tag">Real-Estate Photography</div>
        </div>
      </a>
      <div class="nav-links">
        ${links}
        <a href="contact.html" class="nav-cta">Book a Shoot</a>
      </div>
      <div class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </div>
    </nav>`;

  // Scroll effect
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
}

// ── NAV HTML (for index.html which is one level up) ──
function renderNavIndex(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'pages/portfolio.html', label: 'Portfolio', key: 'portfolio' },
    { href: 'pages/services.html', label: 'Services', key: 'services' },
    { href: 'pages/contact.html', label: 'Contact', key: 'contact' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.key === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav" id="main-nav">
      <a href="index.html" class="nav-logo">
        ${logoSVG}
        <div class="nav-logo-text">
          <div class="nav-logo-name">Aptus<span>Media</span></div>
          <div class="nav-logo-tag">Real-Estate Photography</div>
        </div>
      </a>
      <div class="nav-links">
        ${links}
        <a href="pages/contact.html" class="nav-cta">Book a Shoot</a>
      </div>
      <div class="nav-hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </div>
    </nav>`;

  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
}

// ── FOOTER HTML ──
function renderFooter(root = '..') {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="nav-logo" style="margin-bottom:0;">
            <div style="width:32px; height:32px;">${logoSVG}</div>
            <div class="nav-logo-text">
              <div class="nav-logo-name" style="font-size:14px;">Aptus<span style="color:#4da6ff;">Media</span></div>
              <div class="nav-logo-tag">Real-Estate Photography</div>
            </div>
          </div>
          <p>Professional real estate photography for agents, brokers, and property managers across the DFW area. Delivering images that make listings sell faster.</p>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Navigation</div>
          <a href="${root}/index.html">Home</a>
          <a href="${root}/pages/portfolio.html">Portfolio</a>
          <a href="${root}/pages/services.html">Services & Pricing</a>
          <a href="${root}/pages/contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Contact</div>
          <a href="mailto:hello@aptusmedia.com">hello@aptusmedia.com</a>
          <a href="tel:+18175550000">Fort Worth, TX</a>
          <a href="${root}/pages/contact.html">Book a Shoot →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Aptus Media LLC. All rights reserved.</span>
        <span>Fort Worth · Dallas · DFW Metroplex</span>
      </div>
    </footer>`;
}

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
