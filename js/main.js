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
    name: 'Relaxing Massage Oil',
    price: '£18.00',
    desc: 'A soothing, uplifting blend of lavender, roman chamomile and tea tree oil. Use gentle massage strokes, particularly along the back, neck and spine, to refresh and relax.',
    ingredients: 'Lavender, roman chamomile, tea tree oil.',
    benefits: 'Evening self-massage, easing tension, refreshing and relaxing the body and mind.',
    imageFile: 'lav_oil.png'
  },
  'ginger-sesame': {
    category: 'Healing Oil',
    name: 'Sinus Oil',
    price: '£12.00',
    desc: 'Traditionally used for nasal congestion, blocked sinuses and frontal headaches. Put 2 drops in each nostril and sniff, once or twice a day. Do not use if allergic to any of the ingredients.',
    ingredients: 'Mustard oil, sesame oil, blackseed oil (Kolonji oil).',
    benefits: 'Nasal congestion, blocked sinuses, frontal headache relief.',
    imageFile: 'sinus_oil.png'
  },
  'marma-ritual': {
    category: 'Massage Oil',
    name: 'Joint Support Oil',
    price: '£25.00',
    desc: 'A blend of natural oils formulated for use on inflammation of the muscles, ligaments and joints. Not tested on animals.',
    ingredients: 'Sesamum indicum (sesame seed oil), Brassica alba (mustard seed oil), Nigella sativa (black seed oil), Syzygium aromaticum (clove oil), Mahanarayan oil.',
    benefits: 'Muscle, ligament and joint inflammation, easing stiffness and discomfort.',
    imageFile: 'jo_oil.png'
  },
  'sprouted-classic': {
    category: 'Breakfast Muesli',
    name: "Nizam's Breakfast Mewa",
    price: '£45.00',
    desc: "A handcrafted superfood of ancient India. Add one cup of mewa to one cup of milk, mix thoroughly, then heat for 7 minutes over a gas hob. Contains gluten and nuts.",
    ingredients: 'Oats, almonds, sliced pistachios, green raisins, barberries, dried orange peels, saffron.',
    benefits: 'Sustained morning energy, easy digestion, a nourishing start to the day.',
    imageFile: 'br_mewa.png'
  },
  'digestive-balance': {
    category: 'Health Food',
    name: 'Detox Powder',
    price: '£30.00',
    desc: 'A blend of time-tested traditional ingredients, made into a detox tea for detoxification and gut health. Soak half a teaspoon in a cup of hot water and leave overnight. Strain the tea and drink on an empty stomach in the morning.',
    ingredients: 'Kadu (Swertia chirayata), Kariatu (Enicostemma littorale), Neem (Azadirachta indica), Amla (Emblica officinalis).',
    benefits: 'Detoxification, gut health, a gentle morning cleansing ritual.',
    imageFile: 'detox.png'
  },
  'berry-antioxidant': {
    category: 'Health Food',
    name: 'Gut Cleansing Gel',
    price: '£45.00',
    desc: 'A blend of psyllium husk and basil seeds to cleanse the gut, meet dietary fibre needs, and relieve constipation. Take 2 tablespoons mixed in a glass of water, stir for 1 minute and drink before bedtime.',
    ingredients: 'Psyllium husk, basil seeds.',
    benefits: 'Gut cleansing, dietary fibre support, constipation relief.',
    imageFile: 'gcgel.png'
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

  // Resolve the assets folder correctly whether the overlay is opened from
  // the homepage (assets/...) or a page inside /pages/ (../assets/...).
  const assetsBase = location.pathname.includes('/pages/') ? '../assets/' : 'assets/';

  function openProduct(id) {
    const p = PRODUCTS[id];
    if (!p) return;
    overlayIcon.innerHTML = `<img src="${assetsBase}${p.imageFile}" alt="${p.name}">`;
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
