// Data
const works = [
  { src: "assets/work-1.jpg", brand: "AMG · GT Coupé", tag: "Interior · Detail" },
  { src: "assets/work-2.jpg", brand: "M4 Competition", tag: "Architecture · Studio" },
  { src: "assets/work-3.jpg", brand: "Forged Gold Wheels", tag: "Product · Studio" },
  { src: "assets/work-4.jpg", brand: "BMW M4 Comp.", tag: "Underground · BTS" },
  { src: "assets/work-5.jpg", brand: "Porsche 911", tag: "Coastal Drive · Motion" },
  { src: "assets/work-6.jpg", brand: "Night Series", tag: "Key Shot · Cinematic" },
];

const services = [
  { n: "01", title: "Rolling & Static Shots", desc: "Cinematic exterior films — rolling shots, tracking pulls, and hero statics that make the car the star." },
  { n: "02", title: "Detail & Product", desc: "Wheels, badges, stitching, paint. Macro-level detail work for tuners, detailers, and aftermarket brands." },
  { n: "03", title: "POV Lifestyle UGC", desc: "First-person driving stories, key-fob unlocks, and daily-driver content that feels native to the feed." },
  { n: "04", title: "Dealership & Launch Retainers", desc: "Monthly packages for dealerships and auto brands: 10–25 assets, edited vertical for Reels, TikTok & Shorts." },
];

// Render work grid
const workGrid = document.getElementById("workGrid");
workGrid.innerHTML = works.map((w, i) => `
  <a href="#contact" class="card">
    <div class="card__ratio">
      <img src="${w.src}" alt="${w.brand} — ${w.tag}" width="900" height="1200" loading="lazy" />
    </div>
    <div class="card__overlay"></div>
    <span class="card__num">0${i + 1}</span>
    <div class="card__meta">
      <div>
        <p class="mono">${w.tag}</p>
        <p class="display">${w.brand}</p>
      </div>
      <span class="card__arrow">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
      </span>
    </div>
  </a>
`).join("");

// Render services list
const servicesList = document.getElementById("servicesList");
servicesList.innerHTML = services.map(s => `
  <li class="service">
    <span class="service__n">${s.n}</span>
    <div class="service__body">
      <h3 class="service__title">${s.title}</h3>
      <p class="service__desc">${s.desc}</p>
    </div>
  </li>
`).join("");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
