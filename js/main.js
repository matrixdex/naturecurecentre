// ── Scroll: sticky nav ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile nav toggle ──
const toggle = document.getElementById('navToggle');
const closeBtn = document.getElementById('navClose');
const links = document.getElementById('navLinks');
if (toggle && links) {
  function openMenu() {
    links.classList.add('open');
    if (closeBtn) closeBtn.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    links.classList.remove('open');
    if (closeBtn) closeBtn.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', () => {
    links.classList.contains('open') ? closeMenu() : openMenu();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) closeMenu();
  });
}

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Product data & detail overlay ──
const PRODUCTS = {
  'lavender-calm': {
    category: 'Massage Oil',
    name: 'Lavender Calm',
    price: '£18.00',
    desc: 'A gently soothing blend of lavender, jojoba and sweet almond oil, formulated to ease tension, calm the nervous system and prepare the body for restful sleep.',
    ingredients: 'Sweet almond oil, jojoba oil, organic lavender essential oil, vitamin E.',
    benefits: 'Evening self-massage, stress relief, unwinding before bed.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <linearGradient id="bgLavender" x1="0%" y1="0%" x2="100%" y2="100%">    <stop offset="0%" stop-color="#3a5c3e"/>    <stop offset="100%" stop-color="#1a2e1f"/>   </linearGradient>  </defs>  <rect width="400" height="300" fill="url(#bgLavender)"/>  <g opacity="0.9">   <path d="M56,120 Q50,95 60,72" stroke="#bdd9bf" stroke-width="2.5" fill="none" stroke-linecap="round"/>   <circle cx="60" cy="72" r="6" fill="#90bf94"/>   <circle cx="52" cy="82" r="5" fill="#90bf94"/>   <circle cx="68" cy="84" r="5" fill="#90bf94"/>   <path d="M84,130 Q80,100 88,78" stroke="#bdd9bf" stroke-width="2.5" fill="none" stroke-linecap="round"/>   <circle cx="88" cy="78" r="6" fill="#90bf94"/>   <circle cx="80" cy="88" r="5" fill="#90bf94"/>   <circle cx="96" cy="90" r="5" fill="#90bf94"/>  </g>  <g>   <rect x="180" y="46" width="40" height="16" rx="4" fill="#3d3528"/>   <path d="M186,62 L186,90 Q186,98 178,104 L178,120 L222,120 L222,104 Q214,98 214,90 L214,62 Z" fill="#fdfaf5"/>   <path d="M178,120 Q160,130 160,155 L160,235 Q160,258 185,258 L215,258 Q240,258 240,235 L240,155 Q240,130 222,120 Z" fill="#fdfaf5"/>   <rect x="172" y="175" width="56" height="46" rx="3" fill="#deeede"/>   <line x1="180" y1="188" x2="220" y2="188" stroke="#3a5c3e" stroke-width="2"/>   <line x1="180" y1="198" x2="212" y2="198" stroke="#3a5c3e" stroke-width="2"/>   <line x1="180" y1="208" x2="216" y2="208" stroke="#3a5c3e" stroke-width="1.5" opacity="0.6"/>  </g>  <g opacity="0.9">   <path d="M344,120 Q350,95 340,72" stroke="#bdd9bf" stroke-width="2.5" fill="none" stroke-linecap="round"/>   <circle cx="340" cy="72" r="6" fill="#90bf94"/>   <circle cx="348" cy="82" r="5" fill="#90bf94"/>   <circle cx="332" cy="84" r="5" fill="#90bf94"/>   <path d="M316,130 Q320,100 312,78" stroke="#bdd9bf" stroke-width="2.5" fill="none" stroke-linecap="round"/>   <circle cx="312" cy="78" r="6" fill="#90bf94"/>   <circle cx="320" cy="88" r="5" fill="#90bf94"/>   <circle cx="304" cy="90" r="5" fill="#90bf94"/>  </g>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#deeede" opacity="0.5" font-style="italic">Placeholder — Lavender Calm</text> </svg>`
  },
  'ginger-sesame': {
    category: 'Massage Oil',
    name: 'Warming Ginger & Sesame',
    price: '£19.50',
    desc: 'Cold-pressed sesame oil infused with ginger and black pepper to generate gentle warmth, easing stiffness and supporting circulation after exertion or in colder months.',
    ingredients: 'Cold-pressed sesame oil, ginger extract, black pepper oil, sweet orange oil.',
    benefits: 'Muscle stiffness, post-exercise recovery, cold-weather massage.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <linearGradient id="bgGinger" x1="0%" y1="0%" x2="100%" y2="100%">    <stop offset="0%" stop-color="#9a8768"/>    <stop offset="100%" stop-color="#3a5c3e"/>   </linearGradient>  </defs>  <rect width="400" height="300" fill="url(#bgGinger)"/>  <g stroke="#f8f4ec" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round">   <path d="M150,70 Q145,55 152,42 Q159,55 154,70"/>   <path d="M250,70 Q255,55 248,42 Q241,55 246,70"/>   <path d="M200,58 Q195,42 202,28 Q209,42 204,58"/>  </g>  <g>   <rect x="180" y="46" width="40" height="16" rx="4" fill="#3d3528"/>   <path d="M186,62 L186,90 Q186,98 178,104 L178,120 L222,120 L222,104 Q214,98 214,90 L214,62 Z" fill="#fdfaf5"/>   <path d="M178,120 Q160,130 160,155 L160,235 Q160,258 185,258 L215,258 Q240,258 240,235 L240,155 Q240,130 222,120 Z" fill="#fdfaf5"/>   <rect x="172" y="175" width="56" height="46" rx="3" fill="#e0d4bc"/>   <line x1="180" y1="188" x2="220" y2="188" stroke="#5c4f3a" stroke-width="2"/>   <line x1="180" y1="198" x2="212" y2="198" stroke="#5c4f3a" stroke-width="2"/>   <line x1="180" y1="208" x2="216" y2="208" stroke="#5c4f3a" stroke-width="1.5" opacity="0.6"/>  </g>  <g fill="#5c4f3a" opacity="0.65">   <ellipse cx="80" cy="220" rx="26" ry="16" transform="rotate(-20 80 220)"/>   <ellipse cx="58" cy="235" rx="20" ry="13" transform="rotate(10 58 235)"/>   <ellipse cx="320" cy="220" rx="26" ry="16" transform="rotate(20 320 220)"/>   <ellipse cx="342" cy="235" rx="20" ry="13" transform="rotate(-10 342 235)"/>  </g>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#f8f4ec" opacity="0.55" font-style="italic">Placeholder — Warming Ginger &amp; Sesame</text> </svg>`
  },
  'marma-ritual': {
    category: 'Massage Oil',
    name: 'Marma Point Ritual Oil',
    price: '£22.00',
    desc: 'A grounding sesame oil base with sandalwood and vetiver, blended to complement Marma therapy and daily self-massage rituals that restore balance between body and mind.',
    ingredients: 'Sesame oil, sandalwood oil, vetiver oil, sweet almond oil.',
    benefits: 'Marma point self-massage, grounding rituals, deep relaxation.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <radialGradient id="bgMarma" cx="50%" cy="45%" r="75%">    <stop offset="0%" stop-color="#3a5c3e"/>    <stop offset="100%" stop-color="#1a2e1f"/>   </radialGradient>  </defs>  <rect width="400" height="300" fill="url(#bgMarma)"/>  <g fill="#90bf94" opacity="0.55">   <circle cx="90" cy="150" r="4"/>   <circle cx="70" cy="130" r="3"/>   <circle cx="70" cy="170" r="3"/>   <circle cx="50" cy="150" r="3"/>   <circle cx="105" cy="120" r="2.5"/>   <circle cx="105" cy="180" r="2.5"/>   <circle cx="310" cy="150" r="4"/>   <circle cx="330" cy="130" r="3"/>   <circle cx="330" cy="170" r="3"/>   <circle cx="350" cy="150" r="3"/>   <circle cx="295" cy="120" r="2.5"/>   <circle cx="295" cy="180" r="2.5"/>  </g>  <circle cx="90" cy="150" r="20" fill="none" stroke="#90bf94" stroke-width="1" opacity="0.3"/>  <circle cx="310" cy="150" r="20" fill="none" stroke="#90bf94" stroke-width="1" opacity="0.3"/>  <g>   <rect x="180" y="46" width="40" height="16" rx="4" fill="#3d3528"/>   <path d="M186,62 L186,90 Q186,98 178,104 L178,120 L222,120 L222,104 Q214,98 214,90 L214,62 Z" fill="#fdfaf5"/>   <path d="M178,120 Q160,130 160,155 L160,235 Q160,258 185,258 L215,258 Q240,258 240,235 L240,155 Q240,130 222,120 Z" fill="#fdfaf5"/>   <rect x="172" y="175" width="56" height="46" rx="3" fill="#deeede"/>   <circle cx="200" cy="192" r="8" fill="none" stroke="#3a5c3e" stroke-width="1.5"/>   <circle cx="200" cy="192" r="3" fill="#3a5c3e"/>   <line x1="180" y1="210" x2="220" y2="210" stroke="#3a5c3e" stroke-width="1.5" opacity="0.6"/>  </g>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#deeede" opacity="0.5" font-style="italic">Placeholder — Marma Point Ritual Oil</text> </svg>`
  },
  'sprouted-classic': {
    category: 'Breakfast Muesli',
    name: 'Classic Sprouted Muesli',
    price: '£9.50',
    desc: 'Sprouted oats, seeds and toasted nuts, gently prepared using traditional soaking methods for easier digestion, natural sweetness and sustained morning energy.',
    ingredients: 'Sprouted oats, sunflower seeds, pumpkin seeds, toasted almonds, dried apple.',
    benefits: 'Everyday breakfast, sustained energy, easy digestion.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <linearGradient id="bgSprouted" x1="0%" y1="0%" x2="100%" y2="100%">    <stop offset="0%" stop-color="#ede5d4"/>    <stop offset="100%" stop-color="#cfc0a0"/>   </linearGradient>  </defs>  <rect width="400" height="300" fill="url(#bgSprouted)"/>  <g>   <path d="M110,168 Q114,150 130,150 L270,150 Q286,150 290,168 L290,170 Q290,235 200,235 Q110,235 110,170 Z" fill="#2e4a32"/>   <ellipse cx="200" cy="150" rx="90" ry="16" fill="#3a5c3e"/>   <ellipse cx="200" cy="142" rx="78" ry="20" fill="#9a8768"/>  </g>  <g fill="#5c4f3a" opacity="0.7">   <circle cx="160" cy="135" r="4"/>   <circle cx="180" cy="128" r="4"/>   <circle cx="200" cy="133" r="4"/>   <circle cx="220" cy="127" r="4"/>   <circle cx="240" cy="134" r="4"/>   <circle cx="170" cy="140" r="3"/>   <circle cx="210" cy="140" r="3"/>  </g>  <g transform="translate(120,100)">   <path d="M0,20 Q-10,5 0,-8 Q10,5 0,20Z" fill="#4e7a52"/>   <path d="M0,-8 Q3,-16 10,-18" stroke="#3a5c3e" stroke-width="2" fill="none" stroke-linecap="round"/>  </g>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#3d3528" opacity="0.5" font-style="italic">Placeholder — Classic Sprouted Muesli</text> </svg>`
  },
  'digestive-balance': {
    category: 'Breakfast Muesli',
    name: 'Digestive Balance',
    price: '£10.00',
    desc: 'Fennel, flaxseed and a touch of ginger folded through oats and millet — a gentle blend chosen for their traditional digestive and soothing properties.',
    ingredients: 'Rolled oats, millet, flaxseed, fennel seed, ginger, dried fig.',
    benefits: 'Sensitive digestion, morning bloating, gentle nutrition.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <linearGradient id="bgDigestive" x1="0%" y1="0%" x2="100%" y2="100%">    <stop offset="0%" stop-color="#deeede"/>    <stop offset="100%" stop-color="#e0d4bc"/>   </linearGradient>  </defs>  <rect width="400" height="300" fill="url(#bgDigestive)"/>  <g>   <path d="M110,168 Q114,150 130,150 L270,150 Q286,150 290,168 L290,170 Q290,235 200,235 Q110,235 110,170 Z" fill="#243828"/>   <ellipse cx="200" cy="150" rx="90" ry="16" fill="#2e4a32"/>   <ellipse cx="200" cy="142" rx="78" ry="20" fill="#b8a480"/>  </g>  <g stroke="#4e7a52" stroke-width="2" fill="none" opacity="0.75" stroke-linecap="round">   <path d="M90,120 Q86,100 94,84"/>   <path d="M94,84 Q100,90 108,86"/>   <path d="M94,84 Q88,90 80,86"/>   <path d="M310,120 Q314,100 306,84"/>   <path d="M306,84 Q300,90 292,86"/>   <path d="M306,84 Q312,90 320,86"/>  </g>  <ellipse cx="150" cy="132" rx="8" ry="6" fill="#7a6a50" opacity="0.8"/>  <ellipse cx="250" cy="130" rx="8" ry="6" fill="#7a6a50" opacity="0.8"/>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#243828" opacity="0.5" font-style="italic">Placeholder — Digestive Balance</text> </svg>`
  },
  'berry-antioxidant': {
    category: 'Breakfast Muesli',
    name: 'Antioxidant Berry',
    price: '£10.50',
    desc: 'Sun-dried berries, pumpkin seeds and rolled oats combined for a naturally sweet start to the day, rich in antioxidants and gentle on the palate.',
    ingredients: 'Rolled oats, dried blueberries, dried cranberries, pumpkin seeds, chia seeds.',
    benefits: 'Antioxidant support, naturally sweet breakfast, on-the-go nutrition.',
    image: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">  <defs>   <linearGradient id="bgBerry" x1="0%" y1="0%" x2="100%" y2="100%">    <stop offset="0%" stop-color="#f3ece0"/>    <stop offset="100%" stop-color="#cfc0a0"/>   </linearGradient>  </defs>  <rect width="400" height="300" fill="url(#bgBerry)"/>  <g>   <path d="M110,168 Q114,150 130,150 L270,150 Q286,150 290,168 L290,170 Q290,235 200,235 Q110,235 110,170 Z" fill="#2e4a32"/>   <ellipse cx="200" cy="150" rx="90" ry="16" fill="#3a5c3e"/>   <ellipse cx="200" cy="142" rx="78" ry="20" fill="#cfc0a0"/>  </g>  <g opacity="0.85">   <circle cx="165" cy="130" r="7" fill="#4e7a52"/>   <circle cx="185" cy="124" r="6" fill="#6a9e6e"/>   <circle cx="205" cy="131" r="7" fill="#4e7a52"/>   <circle cx="225" cy="123" r="6" fill="#6a9e6e"/>   <circle cx="240" cy="132" r="6" fill="#4e7a52"/>   <circle cx="175" cy="138" r="5" fill="#9a8768"/>   <circle cx="215" cy="139" r="5" fill="#9a8768"/>  </g>  <text x="200" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#3d3528" opacity="0.5" font-style="italic">Placeholder — Antioxidant Berry</text> </svg>`
  }
};

const productOverlay = document.getElementById('productOverlay');
if (productOverlay) {
  const overlayIcon = document.getElementById('productOverlayIcon');
  const overlayCategory = document.getElementById('productOverlayCategory');
  const overlayTitle = document.getElementById('productOverlayTitle');
  const overlayPrice = document.getElementById('productOverlayPrice');
  const overlayDesc = document.getElementById('productOverlayDesc');
  const overlayIngredients = document.getElementById('productOverlayIngredients');
  const overlayBenefits = document.getElementById('productOverlayBenefits');
  let lastFocused = null;

  function openProduct(id) {
    const p = PRODUCTS[id];
    if (!p) return;
    overlayIcon.innerHTML = p.image;
    overlayCategory.textContent = p.category;
    overlayTitle.textContent = p.name;
    overlayPrice.textContent = p.price;
    overlayDesc.textContent = p.desc;
    overlayIngredients.textContent = p.ingredients;
    overlayBenefits.textContent = p.benefits;
    lastFocused = document.activeElement;
    productOverlay.classList.add('open');
    productOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('overlay-open');
    const closeBtn = productOverlay.querySelector('.product-overlay-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeProduct() {
    productOverlay.classList.remove('open');
    productOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('overlay-open');
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-product]');
    if (!trigger) return;
    e.preventDefault();
    openProduct(trigger.getAttribute('data-product'));
  });

  productOverlay.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeProduct);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productOverlay.classList.contains('open')) closeProduct();
  });
}

// ── Products page: category filter tabs ──
const productTabs = document.querySelectorAll('.products-tab');
if (productTabs.length) {
  const productCards = document.querySelectorAll('.product-card[data-category]');
  productTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      productTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const filter = tab.getAttribute('data-filter');
      productCards.forEach(card => {
        const show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.setAttribute('data-hidden', show ? 'false' : 'true');
      });
    });
  });
}

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
if (sections.length && navAnchors.length) {
  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => secObserver.observe(s));
}
