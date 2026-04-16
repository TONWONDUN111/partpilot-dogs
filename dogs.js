const DOG_NETWORKS_KEY = "partpilot-dog-networks";
const DOG_ADMIN_KEY = "partpilot-dog-admin";

const DEFAULT_DOG_NETWORKS = [
  {
    id: "ebay",
    name: "eBay Partner Network",
    rate: 0.05,
    region: "Global",
    note: "Covers new, used, and clearance pet items. Pairs with your eBay Store for full control over listings and commissions.",
    signupUrl: "https://partnernetwork.ebay.com/",
    catalogUrl: "https://www.ebay.com/b/Pet-Supplies/1281/bn_2307059",
    affiliateUrl: "",
    approval: "approved",
    status: "Approved",
  },
  {
    id: "chewy",
    name: "Chewy Affiliate Program",
    rate: 0.06,
    region: "US / Canada",
    note: "Dedicated pet retailer. High conversion rate on food and medication. 15-day cookie window.",
    signupUrl: "https://www.chewy.com/app/content/affiliates",
    catalogUrl: "https://www.chewy.com/b/dog-315",
    affiliateUrl: "",
    approval: "not-applied",
    status: "Need approval",
  },
  {
    id: "petsmart",
    name: "PetSmart Affiliate (CJ)",
    rate: 0.04,
    region: "US",
    note: "Commission Junction program. 30-day cookie. Good for apparel, beds, and grooming tools.",
    signupUrl: "https://www.cj.com/advertiser/petsmart",
    catalogUrl: "https://www.petsmart.com/dog/",
    affiliateUrl: "",
    approval: "not-applied",
    status: "Need approval",
  },
  {
    id: "petco",
    name: "Petco Affiliate (Rakuten)",
    rate: 0.03,
    region: "US",
    note: "Rakuten Advertising program. Strong brand recognition. Carries vet-diet foods and premium accessories.",
    signupUrl: "https://rakutenadvertising.com/affiliate-programs/",
    catalogUrl: "https://www.petco.com/shop/en/petcostore/category/dog",
    affiliateUrl: "",
    approval: "not-applied",
    status: "Need approval",
  },
];

const DOG_BRANDS = [
  { name: "KONG", query: "KONG", line: "Toys and chewers", domain: "kongcompany.com" },
  { name: "Blue Buffalo", query: "Blue Buffalo", line: "Food and treats", domain: "bluebuffalo.com" },
  { name: "Ruffwear", query: "Ruffwear", line: "Harnesses and jackets", domain: "ruffwear.com" },
  { name: "FURminator", query: "FURminator", line: "Grooming tools", domain: "furminator.com" },
  { name: "PetSafe", query: "PetSafe", line: "Training gear", domain: "petsafe.com" },
  { name: "Royal Canin", query: "Royal Canin", line: "Breed nutrition", domain: "royalcanin.com" },
  { name: "Hurtta", query: "Hurtta", line: "Outdoor apparel", domain: "hurtta.com" },
  { name: "Frontline", query: "Frontline", line: "Health support", domain: "frontline.com" },
];

const DOG_CATEGORY_ICONS = {
  Toys: "🦴",
  Food: "🥣",
  Apparel: "🧥",
  Beds: "🛏️",
  Grooming: "✂️",
  Training: "🦮",
  Health: "💊",
};

const DOG_PRODUCTS = [
  // TOYS
  {
    id: 1,
    name: "KONG Classic – Large",
    fitment: "All breeds, heavy chewers",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 16.49,
    featured: 1,
    link: "#",
    badge: "#1 best seller",
  },
  {
    id: 2,
    name: "Outward Hound Puzzle Feeder – Intermediate",
    fitment: "All dogs, mental stimulation",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 14.99,
    featured: 2,
    link: "#",
    badge: "Vet recommended",
  },
  {
    id: 3,
    name: "Chuckit! Ultra Ball – 2-pack (Large)",
    fitment: "Medium to large dogs",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 12.79,
    featured: 3,
    link: "#",
    badge: "Fetch favorite",
  },
  {
    id: 4,
    name: "Tug-of-war rope toy set – 6-pack",
    fitment: "All sizes",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 18.95,
    featured: 4,
    link: "#",
    badge: "Bundle deal",
  },
  {
    id: 5,
    name: "Snuffle mat – slow feeding + enrichment",
    fitment: "All dogs",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 22.99,
    featured: 5,
    link: "#",
    badge: "Anxiety relief",
  },
  {
    id: 6,
    name: "Squeaky plush crinkle fox – 3-pack",
    fitment: "Small to medium dogs",
    category: "Toys",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 11.49,
    featured: 6,
    link: "#",
    badge: "Top gifted",
  },
  // FOOD & TREATS
  {
    id: 7,
    name: "Blue Buffalo Life Protection – 30 lb",
    fitment: "Adult dogs, all breeds",
    category: "Food",
    source: "Chewy Affiliate Program",
    networkId: "chewy",
    price: 69.99,
    featured: 7,
    link: "#",
    badge: "Top brand",
  },
  {
    id: 8,
    name: "Royal Canin Breed Health – Labrador 30 lb",
    fitment: "Labrador Retrievers adult",
    category: "Food",
    source: "Chewy Affiliate Program",
    networkId: "chewy",
    price: 84.99,
    featured: 8,
    link: "#",
    badge: "Breed specific",
  },
  {
    id: 9,
    name: "Hill's Science Diet – Small Paws 15.5 lb",
    fitment: "Small breeds under 25 lb",
    category: "Food",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 54.99,
    featured: 9,
    link: "#",
    badge: "Vet approved",
  },
  {
    id: 10,
    name: "Zuke's Mini Naturals training treats – 16 oz",
    fitment: "All dogs, training use",
    category: "Food",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 13.99,
    featured: 10,
    link: "#",
    badge: "High volume",
  },
  {
    id: 11,
    name: "Milk-Bone Original biscuits – 7 lb",
    fitment: "All adult dogs",
    category: "Food",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 11.99,
    featured: 11,
    link: "#",
    badge: "American classic",
  },
  {
    id: 12,
    name: "Wellness CORE grain-free chicken 26 lb",
    fitment: "Active adult dogs",
    category: "Food",
    source: "Chewy Affiliate Program",
    networkId: "chewy",
    price: 89.99,
    featured: 12,
    link: "#",
    badge: "Grain free",
  },
  // CLOTHES & APPAREL
  {
    id: 13,
    name: "Ruffwear Overcoat Fuse – winter jacket + harness",
    fitment: "Medium dogs (18–27 in girth)",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 149.95,
    featured: 13,
    link: "#",
    badge: "Premium pick",
  },
  {
    id: 14,
    name: "Hurtta rain blocker jacket – waterproof",
    fitment: "Large dogs",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 74.0,
    featured: 14,
    link: "#",
    badge: "Nordic brand",
  },
  {
    id: 15,
    name: "Canada Pooch puffer vest",
    fitment: "Small breeds",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 44.99,
    featured: 15,
    link: "#",
    badge: "Best cold weather",
  },
  {
    id: 16,
    name: "Pawz rubber waterproof dog boots – 12-pack",
    fitment: "All sizes (XS–XL)",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 18.99,
    featured: 16,
    link: "#",
    badge: "Disposable",
  },
  {
    id: 17,
    name: "Pet holiday sweater – ugly Christmas knit",
    fitment: "Small to medium dogs",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 12.5,
    featured: 17,
    link: "#",
    badge: "Seasonal top seller",
  },
  // BEDS & REST
  {
    id: 18,
    name: "Furhaven orthopedic sofa bed – XL",
    fitment: "Large dogs up to 95 lb",
    category: "Beds",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 59.99,
    featured: 18,
    link: "#",
    badge: "Top rated beds",
  },
  {
    id: 19,
    name: "K9 Ballistics tough elevated dog cot – Large",
    fitment: "Dogs 50–80 lb",
    category: "Beds",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 119.95,
    featured: 19,
    link: "#",
    badge: "Chew proof",
  },
  {
    id: 20,
    name: "Self-cooling gel mat – no electricity needed",
    fitment: "All dogs, summer use",
    category: "Beds",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 34.99,
    featured: 20,
    link: "#",
    badge: "Summer essential",
  },
  // GROOMING
  {
    id: 21,
    name: "FURminator deshedding tool – Large short hair",
    fitment: "Large dogs, short double coat",
    category: "Grooming",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 38.99,
    featured: 21,
    link: "#",
    badge: "Best seller",
  },
  {
    id: 22,
    name: "Wahl dog clippers – pet pro cordless",
    fitment: "All coat types",
    category: "Grooming",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 49.99,
    featured: 22,
    link: "#",
    badge: "Pro grade",
  },
  {
    id: 23,
    name: "Burt's Bees tearless puppy shampoo – 16 oz",
    fitment: "Puppies and sensitive skin",
    category: "Grooming",
    source: "Chewy Affiliate Program",
    networkId: "chewy",
    price: 10.49,
    featured: 23,
    link: "#",
    badge: "Natural formula",
  },
  {
    id: 24,
    name: "Dremel 7300-PT dog nail grinder",
    fitment: "All breeds",
    category: "Grooming",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 29.97,
    featured: 24,
    link: "#",
    badge: "Vet tool",
  },
  // TRAINING & GEAR
  {
    id: 25,
    name: "Ruffwear Front Range harness – no-pull",
    fitment: "Medium dogs",
    category: "Training",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 54.95,
    featured: 25,
    link: "#",
    badge: "Trail & everyday",
  },
  {
    id: 26,
    name: "PetSafe Easy Walk harness – front clip",
    fitment: "All sizes",
    category: "Training",
    source: "PetSmart Affiliate (CJ)",
    networkId: "petsmart",
    price: 27.99,
    featured: 26,
    link: "#",
    badge: "Anti-pull",
  },
  {
    id: 27,
    name: "Training pads XL - 100 count",
    fitment: "Puppies and senior dogs",
    category: "Training",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 34.99,
    featured: 27,
    link: "#",
    badge: "Bulk value",
  },
  {
    id: 28,
    name: "SportDOG SD-425 remote trainer – 500 yd",
    fitment: "All breeds, outdoor training",
    category: "Training",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 159.95,
    featured: 28,
    link: "#",
    badge: "High ticket",
  },
  // HEALTH & SUPPLEMENTS
  {
    id: 29,
    name: "Frontline Plus flea & tick – 6-month Large",
    fitment: "Dogs 45–88 lb",
    category: "Health",
    source: "Chewy Affiliate Program",
    networkId: "chewy",
    price: 59.99,
    featured: 29,
    link: "#",
    badge: "Vet recommended",
  },
  {
    id: 30,
    name: "Cosequin joint supplement – 250 chews",
    fitment: "Adult and senior dogs",
    category: "Health",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 47.99,
    featured: 30,
    link: "#",
    badge: "#1 vet brand",
  },
  {
    id: 31,
    name: "Zesty Paws omega-3 fish oil – 180 softgels",
    fitment: "All dogs, coat and joint support",
    category: "Health",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 29.99,
    featured: 31,
    link: "#",
    badge: "Coat health",
  },
  {
    id: 32,
    name: "Adaptil calming collar – 30-day Large",
    fitment: "Anxious dogs, large breeds",
    category: "Health",
    source: "Petco Affiliate (Rakuten)",
    networkId: "petco",
    price: 24.99,
    featured: 32,
    link: "#",
    badge: "Anxiety relief",
  },
  {
    id: 33,
    name: "Dog goggles UV protection (Rex Specs style)",
    fitment: "Medium and large breeds",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 32.99,
    featured: 33,
    link: "#",
    badge: "Stylish pick",
  },
  {
    id: 34,
    name: "Designer rhinestone dog necklace + charm",
    fitment: "Small to medium dogs",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 19.95,
    featured: 34,
    link: "#",
    badge: "Jewelry trend",
  },
  {
    id: 35,
    name: "Waterproof winter dog boots with anti-slip sole",
    fitment: "All sizes (S-XL)",
    category: "Apparel",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 27.99,
    featured: 35,
    link: "#",
    badge: "Street style",
  },
  {
    id: 36,
    name: "Blue Buffalo Wilderness grain-free wet food variety pack",
    fitment: "Adult dogs all breeds",
    category: "Food",
    source: "eBay Partner Network",
    networkId: "ebay",
    price: 42.0,
    featured: 36,
    link: "#",
    badge: "Top food seller",
  },
];

// ── Shared utilities ──
function dogCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function brandImage(label, sublabel, start, end) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="${escapeHtml(label)}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" rx="36" fill="url(#g)" />
      <circle cx="500" cy="86" r="94" fill="rgba(255,255,255,0.11)" />
      <circle cx="128" cy="292" r="120" fill="rgba(255,255,255,0.08)" />
      <text x="44" y="166" fill="#ffffff" font-family="Arial, sans-serif" font-size="56" font-weight="700">${escapeHtml(label)}</text>
      <text x="46" y="222" fill="rgba(255,255,255,0.86)" font-family="Arial, sans-serif" font-size="26">${escapeHtml(sublabel)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?sz=256&domain_url=https://${domain}`;
}

function productIllustration(emoji, category, badge, start, end) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" role="img" aria-label="${escapeHtml(category)}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" rx="36" fill="url(#g)" />
      <circle cx="502" cy="84" r="92" fill="rgba(255,255,255,0.12)" />
      <circle cx="122" cy="298" r="120" fill="rgba(255,255,255,0.08)" />
      <rect x="72" y="82" width="456" height="196" rx="28" fill="rgba(255,255,255,0.14)" />
      <circle cx="202" cy="182" r="64" fill="rgba(255,255,255,0.16)" />
      <rect x="288" y="132" width="154" height="96" rx="24" fill="rgba(255,255,255,0.15)" />
      <text x="146" y="214" font-size="96">${emoji}</text>
      <rect x="82" y="286" width="146" height="36" rx="18" fill="rgba(255,255,255,0.16)" />
      <text x="104" y="311" fill="#ffffff" font-family="Arial, sans-serif" font-size="18" font-weight="700">${escapeHtml(category)}</text>
      <rect x="244" y="286" width="214" height="36" rx="18" fill="rgba(255,255,255,0.12)" />
      <text x="266" y="311" fill="rgba(255,255,255,0.9)" font-family="Arial, sans-serif" font-size="18">${escapeHtml(badge)}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function dogBrandLogo(brand) {
  if (brand?.domain) {
    return faviconUrl(brand.domain);
  }
  return brandImage(brand?.name || "Brand", brand?.line || "", "#168aad", "#5bb8d6");
}

function dogBrandName(product) {
  const match = DOG_BRANDS.find((brand) => product.name.toLowerCase().includes(brand.query.toLowerCase()));
  return match?.name || product.category;
}

function dogBrandInfo(product) {
  return DOG_BRANDS.find((brand) => product.name.toLowerCase().includes(brand.query.toLowerCase())) || null;
}

function dogArtwork(product) {
  const emoji = DOG_CATEGORY_ICONS[product.category] || "🐶";
  return productIllustration(emoji, product.category, product.badge, "#168aad", "#0a4f64");
}

function approvalLabel(value) {
  if (value === "approved") return "Approved";
  if (value === "pending") return "Pending";
  return "Not applied";
}

function statusClass(value) {
  if (value === "approved") return "status-approved";
  if (value === "pending") return "status-pending";
  return "status-not-applied";
}

// ── Storage ──
function loadDogNetworks() {
  const saved = localStorage.getItem(DOG_NETWORKS_KEY);
  if (!saved) return DEFAULT_DOG_NETWORKS;
  try {
    const parsed = JSON.parse(saved);
    return DEFAULT_DOG_NETWORKS.map((n) => {
      const match = parsed.find((item) => item.id === n.id);
      return match ? { ...n, ...match } : n;
    });
  } catch {
    return DEFAULT_DOG_NETWORKS;
  }
}

function saveDogNetworks(networks) {
  localStorage.setItem(DOG_NETWORKS_KEY, JSON.stringify(networks));
}

function dogAdminEnabled() {
  return sessionStorage.getItem(DOG_ADMIN_KEY) === "true";
}

function setDogAdmin(value) {
  sessionStorage.setItem(DOG_ADMIN_KEY, value ? "true" : "false");
}

function getDogNetworkMap(networks) {
  return Object.fromEntries(networks.map((n) => [n.id, n]));
}

function dogDestUrl(product, networkMap) {
  const n = networkMap[product.networkId];
  if (!n) return "#";
  if (product.link && product.link !== "#") return product.link;

  const query = encodeURIComponent(`${product.name} ${product.fitment}`);

  if (n.affiliateUrl) {
    if (n.affiliateUrl.includes("{query}")) {
      return n.affiliateUrl.replace("{query}", query);
    }
    return n.affiliateUrl;
  }

  if (product.networkId === "ebay") {
    return `https://www.ebay.com/sch/i.html?_nkw=${query}`;
  }
  if (product.networkId === "chewy") {
    return `https://www.chewy.com/s?query=${query}`;
  }
  if (product.networkId === "petsmart") {
    return `https://www.petsmart.com/search/?q=${query}`;
  }
  if (product.networkId === "petco") {
    return `https://www.petco.com/shop/en/petcostore/search?query=${query}`;
  }

  return n.catalogUrl || n.signupUrl || "#";
}

function dogCtaLabel(product, networkMap) {
  const n = networkMap[product.networkId];
  if (!n) return "Open link";
  if (n.approval === "approved" && n.affiliateUrl) return "Buy through affiliate link";
  if (n.approval === "approved") return "View matching product";
  if (n.signupUrl) return "Apply now";
  return "Open catalog";
}

function dogPayout(product, networkMap) {
  const rate = networkMap[product.networkId]?.rate || 0;
  return product.price * rate;
}

// ── Rendering ──
function renderDogAdminVisibility() {
  const enabled = dogAdminEnabled();
  const toggle = document.querySelector("#dog-admin-toggle");
  document.querySelectorAll(".admin-only-dogs").forEach((el) => {
    if (enabled) {
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "");
    }
  });
  if (toggle) {
    toggle.textContent = enabled ? "Hide affiliate panel" : "Open private affiliate panel";
    toggle.classList.toggle("button-active", enabled);
  }
}

function renderDogNetworkEditor(networks, rerender) {
  const container = document.querySelector("#dog-network-editor");
  if (!container) return;
  container.innerHTML = "";
  networks.forEach((n) => {
    const row = document.createElement("div");
    row.className = "network-row";
    row.innerHTML = `
      <div>
        <strong>${n.name}</strong>
        <p>${n.note}</p>
        <div class="network-row-actions">
          <a class="button button-tertiary" href="${n.signupUrl}" target="_blank" rel="noreferrer">Official signup</a>
          <a class="button button-secondary" href="${n.catalogUrl}" target="_blank" rel="noreferrer">Catalog</a>
        </div>
      </div>
      <div class="network-fields">
        <label>Rate %<input type="number" min="0" max="100" step="0.1" value="${(n.rate * 100).toFixed(1)}" data-dog-rate="${n.id}"></label>
        <label>Approval status
          <select data-dog-approval="${n.id}">
            <option value="not-applied" ${n.approval === "not-applied" ? "selected" : ""}>Not applied</option>
            <option value="pending" ${n.approval === "pending" ? "selected" : ""}>Pending</option>
            <option value="approved" ${n.approval === "approved" ? "selected" : ""}>Approved</option>
          </select>
        </label>
        <label>Affiliate or destination URL
          <input class="network-link-input" type="url" placeholder="Paste approved affiliate link" value="${n.affiliateUrl || ""}" data-dog-affiliate="${n.id}">
        </label>
      </div>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll("[data-dog-rate]").forEach((input) => {
    input.addEventListener("input", (e) => {
      const n = networks.find((x) => x.id === e.currentTarget.dataset.dogRate);
      const v = Number(e.currentTarget.value) / 100;
      if (!n || Number.isNaN(v)) return;
      n.rate = Math.max(0, v);
      saveDogNetworks(networks);
      rerender();
    });
  });

  container.querySelectorAll("[data-dog-approval]").forEach((select) => {
    select.addEventListener("change", (e) => {
      const n = networks.find((x) => x.id === e.currentTarget.dataset.dogApproval);
      if (!n) return;
      n.approval = e.currentTarget.value;
      n.status = approvalLabel(e.currentTarget.value);
      saveDogNetworks(networks);
      rerender();
    });
  });

  container.querySelectorAll("[data-dog-affiliate]").forEach((input) => {
    input.addEventListener("change", (e) => {
      const n = networks.find((x) => x.id === e.currentTarget.dataset.dogAffiliate);
      if (!n) return;
      n.affiliateUrl = e.currentTarget.value.trim();
      saveDogNetworks(networks);
      rerender();
    });
  });
}

function renderDogNetworkCards(networks) {
  const container = document.querySelector("#dog-network-cards");
  if (!container) return;
  container.innerHTML = networks.map((n) => `
    <article class="network-card">
      <span class="pill">${n.region}</span>
      <h3>${n.name}</h3>
      <p>${n.note}</p>
      <div class="meta-row">
        <span class="meta-chip">Rate ${(n.rate * 100).toFixed(1)}%</span>
        <span class="meta-chip ${statusClass(n.approval)}">${n.status}</span>
      </div>
      <div class="meta-row">
        <a class="text-link" href="${n.signupUrl}" target="_blank" rel="noreferrer">Signup</a>
        <a class="text-link" href="${n.catalogUrl}" target="_blank" rel="noreferrer">Catalog</a>
      </div>
    </article>
  `).join("");
}

function renderDogApprovalSummary(networks) {
  const container = document.querySelector("#dog-approval-summary");
  if (!container) return;
  const approved = networks.filter((n) => n.approval === "approved");
  const pending = networks.filter((n) => n.approval === "pending");
  const ready = networks.filter((n) => n.approval === "approved" && n.affiliateUrl);
  container.innerHTML = `
    <div class="summary-card">
      <span class="stat-label">Approved networks</span>
      <strong>${approved.length} / ${networks.length}</strong>
    </div>
    <div class="summary-card">
      <span class="stat-label">Pending applications</span>
      <strong>${pending.length}</strong>
    </div>
    <div class="summary-card">
      <span class="stat-label">Live affiliate links</span>
      <strong>${ready.length}</strong>
    </div>
  `;
}

function renderDogBrandGrid() {
  const container = document.querySelector("#dog-brand-grid");
  const searchInput = document.querySelector("#dog-search");
  if (!container || !searchInput) return;

  container.innerHTML = DOG_BRANDS.map((brand) => `
    <button class="logo-card" type="button" data-dog-brand="${brand.query}">
      <img src="${dogBrandLogo(brand)}" alt="${brand.name} brand logo" onerror="this.onerror=null;this.src='${brandImage(brand.name, brand.line, "#168aad", "#5bb8d6")}';">
      <strong>${brand.name}</strong>
      <span>${brand.line}</span>
    </button>
  `).join("");

  container.querySelectorAll("[data-dog-brand]").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = button.dataset.dogBrand || "";
      container.querySelectorAll(".logo-card").forEach((card) => card.classList.remove("is-active"));
      button.classList.add("is-active");
      searchInput.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });
}

function buildDogSelectOptions(select, values, allLabel) {
  select.innerHTML = "";
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = allLabel;
  select.appendChild(all);
  values.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}

function renderDogProducts(products, networkMap, hasActiveSearch) {
  const container = document.querySelector("#dog-parts-grid");
  if (!container) return;
  if (!hasActiveSearch) {
    container.innerHTML = `
      <div class="search-empty">
        <h3>Start with a dog brand or category</h3>
        <p>Use the brand tiles or search box to reveal matching products. This keeps the storefront visual and clean before the shopper starts browsing.</p>
      </div>
    `;
    return;
  }
  if (products.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>No products match your filters.</p></div>`;
    return;
  }
  container.innerHTML = products.map((p) => {
    const payout = dogPayout(p, networkMap);
    const url = dogDestUrl(p, networkMap);
    const cta = dogCtaLabel(p, networkMap);
    return `
      <article class="part-card">
        <div class="card-media">
          <img src="${dogArtwork(p)}" alt="${dogBrandName(p)} ${p.category} product tile">
          <span class="media-badge">
            <img src="${dogBrandLogo(dogBrandInfo(p))}" alt="${dogBrandName(p)} logo" onerror="this.onerror=null;this.src='${brandImage(dogBrandName(p), p.category, "#168aad", "#5bb8d6")}';">
          </span>
        </div>
        <header>
          <div>
            <span class="pill">${p.category}</span>
            <h3>${p.name}</h3>
          </div>
          ${p.badge ? `<span class="badge badge-dog">${p.badge}</span>` : ""}
        </header>
        <p class="part-fitment">${p.fitment}</p>
        <div class="part-meta">
          <span class="part-price">${dogCurrency(p.price)}</span>
          <a class="part-source text-link" href="${url}" target="${url === "#" ? "_self" : "_blank"}" rel="noreferrer">Retailer: ${networkMap[p.networkId]?.name || p.source}</a>
        </div>
        <p class="part-payout">Est. payout: <strong>${dogCurrency(payout)}</strong></p>
        <a class="button button-dogs-primary" href="${url}" target="${url === "#" ? "_self" : "_blank"}" rel="noreferrer">${cta}</a>
      </article>
    `;
  }).join("");
}

function renderDogStats(products, networks, networkMap) {
  const categories = [...new Set(products.map((p) => p.category))];
  const payouts = products.map((p) => dogPayout(p, networkMap));
  const topPayout = payouts.length ? Math.max(...payouts) : 0;
  const approved = networks.filter((n) => n.approval === "approved").length;

  const listingCount = document.querySelector("#dog-listing-count");
  const categoryCount = document.querySelector("#dog-category-count");
  const topPayoutEl = document.querySelector("#dog-top-payout");
  const approvedCount = document.querySelector("#dog-approved-count");

  if (listingCount) listingCount.textContent = products.length;
  if (categoryCount) categoryCount.textContent = categories.length;
  if (topPayoutEl) topPayoutEl.textContent = dogCurrency(topPayout);
  if (approvedCount) approvedCount.textContent = approved;
}

async function renderDogContentFeed() {
  const container = document.querySelector("#dog-content-feed");
  if (!container) return;

  try {
    const response = await fetch("content_feed.json", { cache: "no-store" });
    if (!response.ok) throw new Error("feed unavailable");
    const items = await response.json();

    if (!Array.isArray(items) || !items.length) {
      container.innerHTML = '<div class="empty-state"><p>No guides published yet.</p></div>';
      return;
    }

    container.innerHTML = items.slice(0, 6).map((item) => `
      <article class="part-card">
        <header>
          <div>
            <span class="pill">Guide</span>
            <h3>${item.title}</h3>
          </div>
          <span class="meta-chip">${item.published}</span>
        </header>
        <p>${item.summary || "Auto-published buying guide."}</p>
        <a class="button button-dogs-primary" href="${item.url}">Read guide</a>
      </article>
    `).join("");
  } catch {
    container.innerHTML = '<div class="empty-state"><p>Guide feed not available yet.</p></div>';
  }
}

async function renderPetVideosPreview() {
  const container = document.querySelector("#pet-videos-preview");
  if (!container) return;

  try {
    const response = await fetch("pet_videos_feed.json", { cache: "no-store" });
    if (!response.ok) throw new Error("videos unavailable");
    const items = await response.json();

    if (!Array.isArray(items) || !items.length) {
      container.innerHTML = '<div class="empty-state"><p>No pet videos picked yet.</p></div>';
      return;
    }

    container.innerHTML = items.slice(0, 3).map((item) => `
      <article class="part-card">
        <header>
          <div>
            <span class="pill">${item.category || "Trending"}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="meta-chip">${item.published}</span>
        </header>
        <p>${item.summary || "Trending pet videos from public platforms."}</p>
        <a class="button button-dogs-primary" href="${item.watchUrl}" target="_blank" rel="noreferrer">Watch clip list</a>
      </article>
    `).join("");
  } catch {
    container.innerHTML = '<div class="empty-state"><p>Pet video preview unavailable.</p></div>';
  }
}

// ── Main ──
(function init() {
  const networks = loadDogNetworks();
  const networkMap = getDogNetworkMap(networks);

  // Populate filters
  const sources = [...new Set(DOG_PRODUCTS.map((p) => p.source))].sort();
  const categories = [...new Set(DOG_PRODUCTS.map((p) => p.category))].sort();

  const searchInput = document.querySelector("#dog-search");
  const sourceFilter = document.querySelector("#dog-source-filter");
  const categoryFilter = document.querySelector("#dog-category-filter");
  const sortFilter = document.querySelector("#dog-sort-filter");

  if (sourceFilter) buildDogSelectOptions(sourceFilter, sources, "All sources");
  if (categoryFilter) buildDogSelectOptions(categoryFilter, categories, "All categories");
  renderDogBrandGrid();

  function getFiltered() {
    const search = searchInput?.value.toLowerCase() || "";
    const source = sourceFilter?.value || "all";
    const category = categoryFilter?.value || "all";
    const sort = sortFilter?.value || "featured";

    let results = DOG_PRODUCTS.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search) && !p.fitment.toLowerCase().includes(search)) return false;
      if (source !== "all" && p.source !== source) return false;
      if (category !== "all" && p.category !== category) return false;
      return true;
    });

    const nm = getDogNetworkMap(loadDogNetworks());
    if (sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);
    else if (sort === "payout-desc") results = [...results].sort((a, b) => dogPayout(b, nm) - dogPayout(a, nm));
    else results = [...results].sort((a, b) => a.featured - b.featured);

    return results;
  }

  function rerender() {
    const nets = loadDogNetworks();
    const nm = getDogNetworkMap(nets);
    const hasActiveSearch = Boolean(
      (searchInput?.value || "").trim() ||
      (sourceFilter?.value || "all") !== "all" ||
      (categoryFilter?.value || "all") !== "all"
    );
    renderDogNetworkCards(nets);
    renderDogNetworkEditor(nets, rerender);
    renderDogApprovalSummary(nets);
    renderDogProducts(getFiltered(), nm, hasActiveSearch);
    renderDogStats(DOG_PRODUCTS, nets, nm);
  }

  // Event listeners
  [searchInput, sourceFilter, categoryFilter, sortFilter].forEach((el) => {
    if (el) el.addEventListener("input", rerender);
  });

  const toggle = document.querySelector("#dog-admin-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      setDogAdmin(!dogAdminEnabled());
      renderDogAdminVisibility();
    });
  }

  // Initial render
  renderDogAdminVisibility();
  rerender();
  renderDogContentFeed();
  renderPetVideosPreview();
})();
