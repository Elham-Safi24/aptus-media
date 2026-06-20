// ── NAV ──
function renderNav(active, root) {
  const base = root || '..';
  const pages = [
    {key:'home',    label:'Home',              href: root === '.' ? 'index.html' : '../index.html'},
    {key:'portfolio',label:'Portfolio',        href: base+'/pages/portfolio.html'},
    {key:'services', label:'Services',         href: base+'/pages/services.html'},
    {key:'contact',  label:'Contact',          href: base+'/pages/contact.html'},
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.key===active?'active':''}">${p.label}</a>`
  ).join('');

  const logoSrc = root === '.' ? 'images/logo.png' : '../images/logo.png';

  document.getElementById('nav-ph').innerHTML = `
    <nav class="nav" id="main-nav">
      <a href="${root==='.'?'index.html':'../index.html'}" class="nav-logo">
        <img src="${logoSrc}" alt="Aptus Media"/>
      </a>
      <div class="nav-links">
        ${links}
        <a href="${base}/pages/contact.html" class="nav-cta">Book a Shoot</a>
      </div>
      <div class="nav-hamburger" id="hbg" aria-label="Menu">
        <span></span><span></span><span></span>
      </div>
    </nav>`;

  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
  document.getElementById('hbg').addEventListener('click', () => nav.classList.toggle('mobile-open'));
}

// ── FOOTER ──
function renderFooter(root) {
  const base = root || '..';
  const logoSrc = root === '.' ? 'images/logo.png' : '../images/logo.png';
  document.getElementById('footer-ph').innerHTML = `
    <footer>
      <div class="footer-top">
        <div>
          <div class="footer-logo"><img src="${logoSrc}" alt="Aptus Media"/></div>
          <p class="footer-desc">Professional real estate photography across Fort Worth and the full DFW metroplex.</p>
        </div>
        <div class="footer-links">
          <div class="fcol">
            <div class="fcol-title">Pages</div>
            <a href="${root==='.'?'index.html':'../index.html'}">Home</a>
            <a href="${base}/pages/portfolio.html">Portfolio</a>
            <a href="${base}/pages/services.html">Services & Pricing</a>
            <a href="${base}/pages/contact.html">Contact</a>
          </div>
          <div class="fcol">
            <div class="fcol-title">Contact</div>
            <a href="mailto:hello@aptusmedia.net">hello@aptusmedia.net</a>
            <a href="#">Fort Worth, TX</a>
            <a href="${base}/pages/contact.html">Book a Shoot →</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Aptus Media. All rights reserved.</span>
        <span>Fort Worth · Dallas · DFW Metroplex</span>
      </div>
    </footer>`;
}

// ── SCROLL ANIMATIONS ──
function initAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.06, rootMargin: '0px 0px -20px 0px'});
  document.querySelectorAll('.photo-item,.portfolio-item,.process-card,.fade-up').forEach(el => obs.observe(el));
}
