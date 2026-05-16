/* =========================================================
   GEA DIGITAL HUB — JavaScript principal
   ========================================================= */

// Toggle meniu mobil
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Animații fade-in la scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============ MAPARE CATEGORII -> SLUG CSS (pentru culori) ============
// Slug-urile fără diacritice, pentru a fi folosite ca data-cat în CSS
const CATEGORY_SLUGS = {
  'Agricultură':        'agricultura',
  'Beauty':             'beauty',
  'Calculatoare':       'calculatoare',
  'Construcții':        'constructii',
  'Diaspora':           'diaspora',
  'Freelancing':        'freelancing',
  'Marketing':          'marketing',
  'Microîntreprindere': 'micro',
  'PFA':                'pfa',
  'Programare IT':      'it',
  'Strategie':          'strategie',
  'Transport':          'transport',
  'Turism':             'turism'
};

function catSlug(name) {
  return CATEGORY_SLUGS[name] || name.toLowerCase().replace(/\s+/g, '-');
}

// ============ DATE PRODUSE — INLINE (fallback pentru file://) ============
// Aceleași date ca în data/produse.json. Sincronizate manual când editezi JSON-ul.
const PRODUSE_INLINE = {
  "categorii": [
    "Agricultură", "Beauty", "Calculatoare", "Construcții", "Diaspora",
    "Freelancing", "Marketing", "Microîntreprindere", "PFA",
    "Programare IT", "Strategie", "Transport", "Turism"
  ],
  "produse": [
    {
      "id": "ghid-it-freelancing",
      "titlu": "Ghid Cheltuieli Deductibile — IT, Freelancing, Programare Digital",
      "tagline": "Optimizare fiscală completă pentru programatori PFA și microîntreprinderi. 27 pagini.",
      "descriere": "Ghid complet pentru profesioniștii IT din România — programatori, dezvoltatori, freelanceri digitali. 27 de pagini cu toate cheltuielile deductibile permise de ANAF în 2026, exemple practice cu sume reale, comparație PFA vs microîntreprindere pentru veniturile IT, și soluții pentru clienții internaționali.",
      "categorii": ["Programare IT", "Freelancing", "PFA", "Microîntreprindere"],
      "icon": "💻",
      "linkuri": { "payhip": "https://payhip.com/b/ye5VC", "gumroad": null, "etsy": null },
      "nou": false, "vizibil": true,
      "puncteCheie": ["27 pagini, actualizat 2026", "Echipament, software, training deductibil", "Comparație PFA vs Micro pentru IT", "Soluții clienți internaționali"]
    },
    {
      "id": "ghid-beauty",
      "titlu": "Ghid Cheltuieli Deductibile — Cosmetică, Coafură, Beauty",
      "tagline": "Optimizare fiscală pentru cosmeticiene, coafeze, esteticiene PFA. 22 pagini.",
      "descriere": "Ghid specializat pentru profesioniștii din industria beauty din România — 22 de pagini. Acoperă cheltuieli deductibile specifice (produse, instrumente, echipamente), reguli de TVA pentru salon, și diferențele între PFA și microîntreprindere pentru acest domeniu.",
      "categorii": ["Beauty", "PFA", "Microîntreprindere"],
      "icon": "✨",
      "linkuri": { "payhip": "https://payhip.com/b/JOiPa", "gumroad": null, "etsy": null },
      "nou": false, "vizibil": true,
      "puncteCheie": ["22 pagini specializate beauty", "TVA pentru saloane și cabinete", "Echipamente și produse deductibile", "Optimizare PFA vs Micro"]
    },
    {
      "id": "ghid-transport",
      "titlu": "Ghid Cheltuieli Deductibile — Transport, Uber, Bolt, Ridesharing, Curierat",
      "tagline": "Optimizare fiscală pentru șoferi PFA în transport și curierat.",
      "descriere": "Ghid complet pentru șoferii Uber, Bolt, taximetriști și curieri. Include reguli de TVA pentru transport, deductibilitatea combustibilului, întreținerii și amortizării vehiculului, precum și strategii fiscale pentru creșterea profitului net.",
      "categorii": ["Transport", "PFA", "Microîntreprindere"],
      "icon": "🚗",
      "linkuri": { "payhip": "https://payhip.com/b/NU7qK", "gumroad": null, "etsy": null },
      "nou": false, "vizibil": true,
      "puncteCheie": ["Deductibilitate combustibil și auto", "TVA pentru transport persoane", "Amortizare vehicul", "Strategii profit net Uber/Bolt"]
    },
    {
      "id": "ghid-constructii",
      "titlu": "Ghid Cheltuieli Deductibile — Instalații, Construcții, Meșteșuguri",
      "tagline": "Optimizare fiscală pentru meseriași PFA în construcții. 26 pagini.",
      "descriere": "Ghid dedicat instalatorilor, zugravilor, tâmplarilor, fierarilor și altor meseriași din construcții — 26 de pagini. Acoperă materialele consumabile, sculele, echipamentele de protecție, precum și particularitățile fiscale pentru contracte de servicii și manoperă.",
      "categorii": ["Construcții", "PFA", "Microîntreprindere"],
      "icon": "🔨",
      "linkuri": { "payhip": "https://payhip.com/b/kdXDt", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["26 pagini pentru meseriași", "Materiale și consumabile deductibile", "Scule și echipamente de lucru", "Contracte servicii vs manoperă"]
    },
    {
      "id": "ghid-agricultura",
      "titlu": "Ghid Cheltuieli Deductibile — Agricultură, Apicultură, Horticultură",
      "tagline": "Optimizare fiscală pentru fermieri și apicultori PFA. 29 pagini.",
      "descriere": "Ghid pentru fermierii agricoli, apicultori și horticultori — 29 de pagini. Include normele de venit ANAF, deducerile pentru semințe, îngrășăminte, furaje, echipamente agricole, precum și subvențiile APIA și impactul lor fiscal.",
      "categorii": ["Agricultură", "PFA", "Microîntreprindere"],
      "icon": "🌾",
      "linkuri": { "payhip": "https://payhip.com/b/cMrOd", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["29 pagini agricultură + apicultură", "Norme venit ANAF agricol", "Deduceri semințe, furaje, îngrășăminte", "Subvenții APIA — impact fiscal"]
    },
    {
      "id": "calculator-pfa-micro-2026",
      "titlu": "Calculator Interactiv PFA & Microîntreprindere 2026 — HTML",
      "tagline": "Calculator HTML interactiv pentru optimizare fiscală PFA vs Micro.",
      "descriere": "Calculator HTML interactiv care îți arată exact câți bani rămân net între PFA și microîntreprindere. Introduce venitul, calculează automat impozitele, CAS, CASS și îți dă rezultatul comparativ. Actualizat conform OUG 89/2025 și legislației 2026. Funcționează direct în browser, fără software.",
      "categorii": ["Calculatoare", "PFA", "Microîntreprindere"],
      "icon": "📊",
      "linkuri": { "payhip": "https://payhip.com/b/Vcq3m", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["Comparație PFA vs Micro în timp real", "Calcul impozite, CAS, CASS 2026", "Conform OUG 89/2025", "Interactiv HTML, fără software"]
    },
    {
      "id": "calculator-roi-marketing",
      "titlu": "Calculator ROI Marketing 2026 — Meta, Google, TikTok, Email",
      "tagline": "Calculator HTML interactiv pentru ROI campanii marketing digital.",
      "descriere": "Calculator interactiv HTML pentru măsurarea ROI-ului campaniilor de marketing digital. Suportă Meta Ads, Google Ads, TikTok Ads și Email Marketing. Introduce cheltuielile și conversiile, primește instant ROI, ROAS, CAC, LTV și recomandări de optimizare bugetară.",
      "categorii": ["Marketing", "Calculatoare"],
      "icon": "📈",
      "linkuri": { "payhip": "https://payhip.com/b/QBD2p", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["Meta, Google, TikTok, Email", "ROI, ROAS, CAC, LTV automat", "Recomandări optimizare buget", "HTML interactiv, fără software"]
    },
    {
      "id": "voyagecalc-premium",
      "titlu": "VoyageCalc Premium — Planificator Buget Călătorie",
      "tagline": "6 limbi, 5 valute, Export PDF, Comparator călătorii.",
      "descriere": "Planificator complet de buget pentru călătorii — suport pentru 6 limbi (RO, EN, FR, IT, ES, DE) și 5 valute. Export PDF pentru itinerar și buget, comparator între destinații, calcul automat cazare, transport, mâncare și activități. Ideal pentru călători frecvenți și familii.",
      "categorii": ["Turism", "Calculatoare"],
      "icon": "🌍",
      "linkuri": { "payhip": "https://payhip.com/b/NVH3Z", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["6 limbi: RO, EN, FR, IT, ES, DE", "5 valute cu conversie automată", "Export PDF itinerar + buget", "Comparator călătorii"]
    },
    {
      "id": "tripplanner-pro",
      "titlu": "TripPlanner Pro — Planificator Interactiv Itinerarii",
      "tagline": "Planificator HTML interactiv călătorii, 6 limbi.",
      "descriere": "Instrument HTML interactiv pentru planificarea detaliată a itinerariilor de călătorie. Disponibil în 6 limbi (RO, EN, FR, IT, ES, DE). Planifică zi cu zi activitățile, atracțiile, restaurantele și transportul. Salvează, exportă și partajează planul cu familia sau prietenii.",
      "categorii": ["Turism"],
      "icon": "🗺️",
      "linkuri": { "payhip": "https://payhip.com/b/cofRF", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["6 limbi disponibile", "Planificare zi cu zi", "Activități, restaurante, transport", "HTML interactiv, fără software"]
    },
    {
      "id": "planificator-buget-marketing",
      "titlu": "Planificator Buget Marketing 2026 — Excel Premium",
      "tagline": "Șablon Excel Premium pentru planificare buget marketing anual.",
      "descriere": "Șablon Excel Premium pentru planificarea și monitorizarea bugetului de marketing pe 2026. Include defalcare pe canale (Meta, Google, TikTok, Email, Influencer, SEO), prognoze lunare, rapoarte trimestriale și grafice automate. Ideal pentru antreprenori, PFA, agenții și echipe de marketing.",
      "categorii": ["Marketing", "Calculatoare"],
      "icon": "📋",
      "linkuri": { "payhip": "https://payhip.com/b/eEZkw", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["Defalcare pe canale marketing", "Prognoze lunare + trimestriale", "Grafice automate", "Excel Premium 2026"]
    },
    {
      "id": "planificator-promotii-reduceri",
      "titlu": "Planificator Promoții și Reduceri 2026 — Excel Premium",
      "tagline": "Șablon Excel Premium pentru campanii promoționale anuale.",
      "descriere": "Șablon Excel Premium pentru planificarea campaniilor promoționale și a reducerilor pe tot parcursul anului 2026. Include calendar promoțional, calcul marje, analiză profit, comparație campanii și KPI automați. Soluție profesională pentru retail, e-commerce și servicii.",
      "categorii": ["Marketing", "Calculatoare"],
      "icon": "🏷️",
      "linkuri": { "payhip": "https://payhip.com/b/wxvQd", "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["Calendar promoțional anual", "Calcul marje + analiză profit", "Comparație campanii", "KPI automați"]
    },
    {
      "id": "swot-personal-3d",
      "titlu": "SWOT 3D Interactiv — Ediția Personală & Carieră",
      "tagline": "Template HTML interactiv pentru analiză SWOT personală și decizii de carieră.",
      "descriere": "Template SWOT 3D interactiv HTML pentru analiză personală, carieră și freelancing. Cadrane animate cu efect 3D pentru Strengths, Weaknesses, Opportunities, Threats. Adaugă, editezi și ștergi puncte direct în browser, exporți rezultatul ca PDF sau imagine. Ideal pentru reorientare profesională, planificare de carieră sau auto-evaluare freelancer.",
      "categorii": ["Strategie", "Freelancing", "Diaspora"],
      "icon": "🧭",
      "linkuri": { "payhip": null, "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["4 cadrane 3D animate interactive", "Editare + adăugare puncte live", "Export PDF / imagine", "Carieră, freelance, decizii personale"],
      "statusLink": "in_curand"
    },
    {
      "id": "swot-business-3d",
      "titlu": "SWOT 3D Interactiv — Ediția Business & Antreprenori",
      "tagline": "Template HTML interactiv SWOT pentru PFA, microîntreprinderi și startup-uri.",
      "descriere": "Template SWOT 3D interactiv HTML dedicat analizei strategice de business. Optimizat pentru PFA, microîntreprinderi, startup-uri și antreprenori. Conține câmpuri suplimentare pentru concurență, piață, parteneri, plus comparator de scenarii (înainte/după strategie). Ideal pentru planuri de afaceri, pivotări, pitch-uri investitori.",
      "categorii": ["Strategie", "PFA", "Microîntreprindere", "Marketing"],
      "icon": "🎯",
      "linkuri": { "payhip": null, "gumroad": null, "etsy": null },
      "nou": true, "vizibil": true,
      "puncteCheie": ["4 cadrane SWOT 3D animate", "Comparator scenarii înainte/după", "Câmpuri concurență + piață", "Export PDF pentru pitch / plan"],
      "statusLink": "in_curand"
    }
  ],
  "platforme": {
    "payhip":  { "nume": "Payhip",  "activ": true,  "culoare": "#FFD700" },
    "gumroad": { "nume": "Gumroad", "activ": false, "culoare": "#FF90E8" },
    "etsy":    { "nume": "Etsy",    "activ": false, "culoare": "#F1641E" }
  }
};

// ============ ÎNCĂRCARE PRODUSE ============

async function loadProducts() {
  const grid = document.getElementById('productsGrid');
  const filtersContainer = document.getElementById('categoryFilters');

  if (!grid) return;

  let data = null;

  // Încearcă fetch (funcționează pe server / GitHub Pages)
  try {
    const response = await fetch('data/produse.json');
    if (response.ok) {
      data = await response.json();
    }
  } catch (e) {
    // Pe file:// fetch eșuează — folosim datele inline
  }

  // Fallback pentru file:// sau erori
  if (!data) {
    data = PRODUSE_INLINE;
  }

  const produseVizibile = data.produse.filter(p => p.vizibil);
  const categorii = data.categorii;

  renderFilters(filtersContainer, categorii);
  renderProducts(grid, produseVizibile, data.platforme);
  setupCardFlip();
  setupFilters(produseVizibile, data.platforme);
}

function renderFilters(container, categorii) {
  if (!container) return;

  let html = '<button class="filter-btn active" data-filter="toate">Toate</button>';
  categorii.forEach(cat => {
    html += `<button class="filter-btn" data-filter="${cat}" data-cat="${catSlug(cat)}">${cat}</button>`;
  });
  container.innerHTML = html;
}

function renderProducts(grid, produse, platforme) {
  if (produse.length === 0) {
    grid.innerHTML = '<p style="text-align:center; color:var(--text-muted); grid-column: 1/-1;">Nu există produse în această categorie.</p>';
    return;
  }

  grid.innerHTML = produse.map(produs => {
    const categoriiAttr = produs.categorii.join(',');
    const primaCategorie = produs.categorii[0];
    const slug = catSlug(primaCategorie);

    return `
      <div class="product-card" data-categorii="${categoriiAttr}" data-cat="${slug}">
        <!-- FAȚĂ -->
        <div class="card-face card-front">
          <div class="card-cover universal" data-cat="${slug}">
            <div class="card-cover-pattern"></div>
            <div class="card-cover-content">
              <div class="card-cover-icon">${produs.icon}</div>
              <h3>${produs.titlu}</h3>
            </div>
          </div>
          <div class="card-info">
            <div>
              <div class="card-meta">
                <span class="card-category" data-cat="${slug}">${primaCategorie}</span>
                ${produs.nou ? '<span class="card-badge-new">NEW</span>' : ''}
              </div>
              <p class="card-tagline">${produs.tagline}</p>
            </div>
            <div class="flip-hint">
              <span>Detalii</span>
              <span>→</span>
            </div>
          </div>
        </div>

        <!-- VERSO -->
        <div class="card-face card-back">
          <div class="card-back-eyebrow" data-cat="${slug}">${primaCategorie}</div>
          <h3>${produs.titlu}</h3>
          <p class="card-description">${produs.descriere}</p>
          <ul class="card-features">
            ${produs.puncteCheie.map(p => `<li>${p}</li>`).join('')}
          </ul>
          <div class="card-buttons">
            ${renderBuyButtons(produs.linkuri, platforme)}
            <button class="btn-buy btn-flip-back" onclick="flipCard(this)">← Înapoi</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderBuyButtons(linkuri, platforme) {
  let html = '';

  // Payhip — link real activ
  if (linkuri.payhip && platforme.payhip.activ) {
    html += `<a href="${linkuri.payhip}" target="_blank" rel="noopener" class="btn-buy payhip btn-cta">
      <span class="btn-cta-text">Cumpără acum</span>
      <span class="btn-cta-arrow">→</span>
      <span class="btn-cta-platform">via Payhip</span>
    </a>`;
  } else if (!linkuri.payhip && platforme.payhip.activ) {
    // Produs viitor — Payhip activ, dar lipsește link-ul = "în curând"
    html += `<span class="btn-buy soon btn-cta">
      <span class="soon-pulse"></span>
      <span class="btn-cta-text">Cumpără în curând</span>
      <span class="btn-cta-platform">pe Payhip</span>
    </span>`;
  }

  if (platforme.gumroad.activ === false) {
    html += `<span class="btn-buy disabled">Gumroad <span class="soon-tag">în curând</span></span>`;
  } else if (linkuri.gumroad) {
    html += `<a href="${linkuri.gumroad}" target="_blank" rel="noopener" class="btn-buy gumroad btn-cta">
      <span class="btn-cta-text">Cumpără acum</span>
      <span class="btn-cta-arrow">→</span>
      <span class="btn-cta-platform">via Gumroad</span>
    </a>`;
  }

  if (platforme.etsy.activ === false) {
    html += `<span class="btn-buy disabled">Etsy <span class="soon-tag">în curând</span></span>`;
  } else if (linkuri.etsy) {
    html += `<a href="${linkuri.etsy}" target="_blank" rel="noopener" class="btn-buy etsy btn-cta">
      <span class="btn-cta-text">Cumpără acum</span>
      <span class="btn-cta-arrow">→</span>
      <span class="btn-cta-platform">via Etsy</span>
    </a>`;
  }

  return html;
}

// ============ FLIP CARDURI ============

function setupCardFlip() {
  document.querySelectorAll('.product-card').forEach(card => {
    const front = card.querySelector('.card-front');
    if (front) {
      front.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        card.classList.add('flipped');
      });
    }
  });
}

function flipCard(btn) {
  const card = btn.closest('.product-card');
  if (card) card.classList.remove('flipped');
}

// ============ FILTRARE PE CATEGORII ============

function setupFilters(toateProdusele, platforme) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('productsGrid');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const filtrate = filter === 'toate'
        ? toateProdusele
        : toateProdusele.filter(p => p.categorii.includes(filter));

      grid.style.opacity = '0';
      setTimeout(() => {
        renderProducts(grid, filtrate, platforme);
        setupCardFlip();
        grid.style.opacity = '1';
      }, 200);
    });
  });

  grid.style.transition = 'opacity 0.3s';
}

// ============ NEWSLETTER ============

document.addEventListener('submit', (e) => {
  if (e.target.classList.contains('newsletter-form')) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (email) {
      alert(`Mulțumim! Vei primi noutățile pe ${email}.\n\n(Integrarea cu sistemul de email va fi activată în curând.)`);
      input.value = '';
    }
  }
});

// ============ BUTON „SUS ↑" — apare la scroll ============

const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
  // Apare după ce userul a depășit ~60% din înălțimea hero-ului
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============ INIȚIALIZARE ============

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
});
