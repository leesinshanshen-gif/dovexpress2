(function () {
  var DESTINATIONS = [
    {
      id: "intramuros-manila",
      category: "local",
      categoryLabel: "01 / LOCAL CITY TOUR • HERITAGE WALK",
      vibe: "culture",
      title: "Intramuros & Old Manila Twilight Walk",
      region: "Manila, Philippines",
      weather: "28°C Golden Hour",
      airport: "MNL",
      coords: "14.5896° N, 120.9747° E • 45m drive",
      mapX: 332,
      mapY: 128,
      shortLabel: "INTRAMUROS",
      basePrice: 3200,
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
      desc: "Cobblestone courtyards, private horse-drawn kalesa ride, bamboo bike rampart tour, and rooftop heritage dinner.",
      itinerary: [
        "Day 1: Fort Santiago private courtyard walk & San Agustin museum",
        "Day 2: Bamboo bike along the Baluarte de San Diego walls & artisan coffee",
        "Day 3: Sunset rooftop degustacion overlooking Manila Bay"
      ]
    },
    {
      id: "antipolo-ridge",
      category: "local",
      categoryLabel: "01 / LOCAL CITY TOUR • HIGHLAND ART ESCAPE",
      vibe: "mountain",
      title: "Antipolo Cloud Ridge & Pinto Art Sanctuary",
      region: "Antipolo, Rizal",
      weather: "24°C Cool Ridge Mist",
      airport: "MNL",
      coords: "14.5842° N, 121.1763° E • 35m drive",
      mapX: 356,
      mapY: 122,
      shortLabel: "ANTIPOLO",
      basePrice: 3800,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
      desc: "Whitewashed hillside galleries, cashew & suman tasting, forest spa sanctuary, and panoramic skyline dining.",
      itinerary: [
        "Day 1: Private curator walk through Pinto Art Museum & garden cafe",
        "Day 2: Mount Purro nature reserve forest trail & river foot spa",
        "Day 3: Cloud 9 ridge sunrise breakfast & local artisan market"
      ]
    },
    {
      id: "binondo-culinary",
      category: "local",
      categoryLabel: "01 / LOCAL CITY TOUR • FOOD & NIGHTLIFE",
      vibe: "culinary",
      title: "Binondo Chinatown & Poblacion Night Trail",
      region: "Metro Manila, Philippines",
      weather: "27°C Evening Breeze",
      airport: "MNL",
      coords: "14.6010° N, 120.9749° E • 40m drive",
      mapX: 324,
      mapY: 142,
      shortLabel: "BINONDO",
      basePrice: 3600,
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
      desc: "World's oldest Chinatown dumpling & hand-pulled noodle crawl paired with hidden speakeasy cocktails.",
      itinerary: [
        "Day 1: Ongpin Street heritage dim sum & roast duck tasting",
        "Day 2: Escolta Art Deco architecture walk & specialty coffee lab",
        "Day 3: Poblacion rooftop tapas & craft cocktail pairing"
      ]
    },
    {
      id: "el-nido-palawan",
      category: "domestic",
      categoryLabel: "02 / DOMESTIC TOUR • ISLAND HIDEAWAY",
      vibe: "coastal",
      title: "El Nido Limestone & Lagoon Hideaway",
      region: "Palawan, Philippines",
      weather: "29°C Tropical Breeze",
      airport: "ENI",
      coords: "11.1956° N, 119.4169° E • 1h 25m flight",
      mapX: 235,
      mapY: 120,
      shortLabel: "EL NIDO",
      basePrice: 12800,
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
      desc: "Towering marble karst cliffs, hidden emerald lagoons, and private sunset paraw sailing tailored to your pace.",
      itinerary: [
        "Day 1: Big & Small Lagoon private kayak + Entalula Beach picnic",
        "Day 2: Secret Lagoon snorkeling, Snake Island sandbar & cliff sunset",
        "Day 3: Nacpan twin beach relaxation & seaside grilled seafood feast"
      ]
    },
    {
      id: "batanes-retreat",
      category: "domestic",
      categoryLabel: "02 / DOMESTIC TOUR • NORTHERN HIGHLANDS",
      vibe: "mountain",
      title: "Batanes Rolling Hills & Lighthouse Retreat",
      region: "Basco, Batanes",
      weather: "22°C Crisp Ocean Wind",
      airport: "BSO",
      coords: "20.4485° N, 121.9708° E • 1h 45m flight",
      mapX: 348,
      mapY: 52,
      shortLabel: "BATANES",
      basePrice: 16500,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
      desc: "Dramatic emerald pasture cliffs, centuries-old Ivatan stone houses, and quiet Pacific lighthouses.",
      itinerary: [
        "Day 1: Marlboro Hills sunrise, Vayang Rolling Hills & Basco Lighthouse",
        "Day 2: Sabtang Island faluwa boat crossing & Chavayan stone village",
        "Day 3: Valugan Boulder Beach & Honesty Coffee Shop heritage tour"
      ]
    },
    {
      id: "siargao-escape",
      category: "domestic",
      categoryLabel: "02 / DOMESTIC TOUR • SURF & PALM LAGOON",
      vibe: "coastal",
      title: "Siargao Sugba Lagoon & Palm Island Escape",
      region: "Siargao Island, Surigao",
      weather: "30°C Sunny Tradewinds",
      airport: "IAO",
      coords: "9.8482° N, 126.0458° E • 2h 05m flight",
      mapX: 412,
      mapY: 165,
      shortLabel: "SIARGAO",
      basePrice: 13400,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85",
      desc: "Coconut tree viewpoints, paddleboarding across jade lagoons, and island-hopping between Naked, Daku, and Guyam.",
      itinerary: [
        "Day 1: Cloud 9 boardwalk sunrise, Maasin River & Sugba Lagoon paddle",
        "Day 2: Three-island hopping (Guyam, Daku boodle lunch, Naked Island)",
        "Day 3: Magpupungko rock pools & south-island coastal farm dinner"
      ]
    },
    {
      id: "kyoto-sanctuary",
      category: "international",
      categoryLabel: "03 / INTERNATIONAL TOUR • CULTURAL SANCTUARY",
      vibe: "culture",
      title: "Kyoto Bamboo Grove & Ryokan Sanctuary",
      region: "Kyoto, Japan",
      weather: "17°C Autumn Maple Crisp",
      airport: "KIX",
      coords: "35.0116° N, 135.7681° E • 4h 15m flight",
      mapX: 495,
      mapY: 58,
      shortLabel: "KYOTO",
      basePrice: 46500,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      desc: "Lantern-lit Gion alleys, Arashiyama bamboo groves at dawn, private matcha ceremony, and cedar onsen ryokan stay.",
      itinerary: [
        "Day 1: Fushimi Inari mountain torii trail & traditional Uji tea house",
        "Day 2: Early-morning Arashiyama bamboo forest & Katsura river boat",
        "Day 3: Nishiki Market culinary walk & Gion kaiseki dinner"
      ]
    },
    {
      id: "amalfi-odyssey",
      category: "international",
      categoryLabel: "03 / INTERNATIONAL TOUR • MEDITERRANEAN COAST",
      vibe: "coastal",
      title: "Amalfi Coast & Positano Cliffside Odyssey",
      region: "Campania, Italy",
      weather: "23°C Mediterranean Sun",
      airport: "NAP",
      coords: "40.6333° N, 14.6029° E • 14h flight",
      mapX: 112,
      mapY: 82,
      shortLabel: "AMALFI",
      basePrice: 68000,
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=85",
      desc: "Pastel cliffside villages, lemon grove terraces in Ravello, and private Riva boat cruising to Capri.",
      itinerary: [
        "Day 1: Positano cliffside arrival & cliff terrace limoncello tasting",
        "Day 2: Private boat charter around Capri & the Blue Grotto",
        "Day 3: Path of the Gods coastal walk & Ravello Villa Cimbrone gardens"
      ]
    },
    {
      id: "swiss-alps",
      category: "international",
      categoryLabel: "03 / INTERNATIONAL TOUR • ALPINE EXPRESS",
      vibe: "mountain",
      title: "Swiss Alps Zermatt & Glacier Express",
      region: "Valais, Switzerland",
      weather: "9°C Clear Alpine Peak",
      airport: "ZRH",
      coords: "46.0207° N, 7.7491° E • 13h 30m flight",
      mapX: 155,
      mapY: 56,
      shortLabel: "SWISS ALPS",
      basePrice: 74000,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
      desc: "Panoramic glass-dome train across alpine viaducts, Matterhorn views, and cozy fondue chalet evenings.",
      itinerary: [
        "Day 1: Gornergrat cogwheel railway & Matterhorn glacier reflection lake",
        "Day 2: Panoramic Glacier Express first-class ride over Landwasser Viaduct",
        "Day 3: Alpine village cheese cellar & thermal mountain spa"
      ]
    }
  ];

  var state = {
    mode: "surprise",
    scope: "all",
    vibe: "all",
    placedDest: DESTINATIONS[3], // El Nido default
    date: "2026-11-15",
    days: 3,
    guests: 2,
    pace: "standard",
    addons: {
      hotel: true,
      assist: false,
      transport: false
    },
    currency: "PHP",
    usdRate: 56,
    payMethod: "card",
    tipPct: 5,
    customTip: 1000,
    promoCode: "",
    promoDiscount: 0,
    paymentPlan: "full",
    bookings: []
  };

  // Load saved bookings if available
  try {
    var saved = localStorage.getItem("dovexpress_bookings_v1");
    if (saved) {
      state.bookings = JSON.parse(saved);
    }
  } catch (e) {}

  if (!state.bookings || !state.bookings.length) {
    state.bookings = [
      {
        ref: "DOV-8492",
        destId: "el-nido-palawan",
        destTitle: "El Nido Limestone & Lagoon Hideaway",
        region: "Palawan, Philippines",
        airport: "ENI",
        coords: "11.1956° N, 119.4169° E",
        traveler: "Alex Rivera",
        date: "2026-11-15",
        guests: 2,
        days: 3,
        services: "Boutique Hotel Stay",
        tipLabel: "Priority Host (5% Tip Included)",
        method: "Visa •••• 8891",
        plan: "100% Full Payment",
        amountFormatted: "₱33,674",
        status: "CONFIRMED & PAID"
      }
    ];
  }

  function showToast(msg) {
    var t = document.getElementById("dov-toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    if (window._toastTimer) clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function () {
      t.classList.remove("show");
    }, 3200);
  }

  function formatMoney(phpAmount) {
    if (state.currency === "USD") {
      var usd = Math.round(phpAmount / state.usdRate);
      return "$" + usd.toLocaleString("en-US");
    }
    return "₱" + Math.round(phpAmount).toLocaleString("en-US");
  }

  function populateManualSelect() {
    var sel = document.getElementById("manual-destination");
    if (!sel) return;
    sel.innerHTML = "";
    DESTINATIONS.forEach(function (d) {
      var opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = d.title + " (" + d.region + " — ₱" + d.basePrice.toLocaleString("en-US") + ")";
      if (d.id === state.placedDest.id) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  function calculateTotals() {
    var d = state.placedDest;
    var paceMult = state.pace === "relaxed" ? 0.85 : (state.pace === "luxe" ? 1.35 : 1.0);
    var dayMult = state.days === 3 ? 1.0 : (state.days === 5 ? 1.55 : 2.05);
    var baseCost = Math.round(d.basePrice * state.guests * paceMult * dayMult);

    var addonsCost = 0;
    var addonNames = [];
    if (state.addons.hotel) {
      addonsCost += 4200 * (state.days === 3 ? 1 : (state.days === 5 ? 2 : 3));
      addonNames.push("Boutique Hotel Stay");
    }
    if (state.addons.assist) {
      addonsCost += 1600 * state.guests;
      addonNames.push("24/7 Travel Assistance");
    }
    if (state.addons.transport) {
      addonsCost += 2800;
      addonNames.push("Scenic Transport Rental");
    }

    var subtotal = baseCost + addonsCost;
    var tipCost = 0;
    var tipLabel = "No Tip Added";
    if (state.tipPct === "custom") {
      tipCost = Math.max(0, parseInt(document.getElementById("custom-tip-input").value || "0", 10));
      tipLabel = "Priority Host (" + formatMoney(tipCost) + " Tip)";
    } else {
      var pct = parseInt(state.tipPct, 10) || 0;
      tipCost = Math.round(subtotal * (pct / 100));
      if (pct > 0) tipLabel = "Priority Host (" + pct + "% Tip Included)";
    }

    var discount = 0;
    if (state.promoCode === "DOVWELCOME10") {
      discount = Math.round(subtotal * 0.10);
    } else if (state.promoCode === "SOMEWHERE1500") {
      discount = 1500;
    }

    var taxable = Math.max(0, subtotal - discount);
    var taxCost = Math.round(taxable * 0.08);
    var fullTotal = taxable + taxCost + tipCost;
    var dueNow = state.paymentPlan === "deposit" ? Math.round(fullTotal * 0.30) : fullTotal;

    return {
      baseCost: baseCost,
      addonsCost: addonsCost,
      addonNames: addonNames.length ? addonNames.join(", ") : "Standard Package",
      tipCost: tipCost,
      tipLabel: tipLabel,
      discount: discount,
      taxCost: taxCost,
      fullTotal: fullTotal,
      dueNow: dueNow
    };
  }

  function renderPlacementAndQuote() {
    var d = state.placedDest;
    var totals = calculateTotals();

    // Update SVG Map
    document.getElementById("map-status-label").textContent = "⌖ PLACED IN: " + d.title.toUpperCase();
    document.getElementById("map-coords-text").textContent = d.coords;
    var arc = document.getElementById("map-flight-arc");
    var midX = Math.round((340 + d.mapX) / 2);
    var midY = Math.min(35, Math.min(135, d.mapY) - 35);
    arc.setAttribute("d", "M340,135 Q" + midX + "," + midY + " " + d.mapX + "," + d.mapY);

    var pinOuter = document.getElementById("map-pin-outer");
    var pinInner = document.getElementById("map-pin-inner");
    var pinLabel = document.getElementById("map-pin-label");
    pinOuter.setAttribute("cx", d.mapX);
    pinOuter.setAttribute("cy", d.mapY);
    pinInner.setAttribute("cx", d.mapX);
    pinInner.setAttribute("cy", d.mapY);
    pinLabel.setAttribute("x", d.mapX);
    pinLabel.setAttribute("y", Math.max(22, d.mapY - 18));
    pinLabel.textContent = d.shortLabel;

    // Update Hero Card
    document.getElementById("placement-hero-bg").style.backgroundImage = "url('" + d.image + "')";
    document.getElementById("placed-category-badge").textContent = d.categoryLabel;
    document.getElementById("placed-title").textContent = d.title;
    document.getElementById("placed-region").textContent = "📍 " + d.region;
    document.getElementById("placed-weather").textContent = "☀ " + d.weather;
    document.getElementById("placed-code").textContent = "✈ Airport: " + d.airport;
    document.getElementById("placed-desc").textContent = d.desc;

    var itinWrap = document.getElementById("placed-itinerary");
    itinWrap.innerHTML = "";
    d.itinerary.forEach(function (line, idx) {
      var div = document.createElement("div");
      div.className = "itinerary-day";
      div.innerHTML = "<strong>DAY 0" + (idx + 1) + " ITINERARY</strong><span>" + line + "</span>";
      itinWrap.appendChild(div);
    });

    document.getElementById("preview-guest-count").textContent = state.guests + (state.guests === 1 ? " Guest, " : " Guests, ") + state.days + " Days";
    document.getElementById("placed-total-preview").textContent = formatMoney(totals.fullTotal);

    // Update Step 2 Summary
    document.getElementById("sum-dest-name").textContent = d.title;
    document.getElementById("sum-region").textContent = d.region + " (" + d.airport + ")";
    document.getElementById("sum-dates").textContent = state.date + " • " + state.days + " Days";
    var paceName = state.pace === "relaxed" ? "Relaxed Essential" : (state.pace === "luxe" ? "Private Luxe" : "Signature Curated");
    document.getElementById("sum-guests").textContent = state.guests + (state.guests === 1 ? " Guest • " : " Guests • ") + paceName;
    document.getElementById("sum-base-cost").textContent = formatMoney(totals.baseCost);
    document.getElementById("sum-addons-cost").textContent = formatMoney(totals.addonsCost);
    document.getElementById("sum-tip-cost").textContent = formatMoney(totals.tipCost);
    document.getElementById("sum-tax-cost").textContent = formatMoney(totals.taxCost);

    var discRow = document.getElementById("sum-discount-row");
    if (totals.discount > 0) {
      discRow.style.display = "flex";
      document.getElementById("sum-promo-code-label").textContent = state.promoCode;
      document.getElementById("sum-discount-amount").textContent = "-" + formatMoney(totals.discount);
    } else {
      discRow.style.display = "none";
    }

    document.getElementById("sum-due-label").textContent = state.paymentPlan === "deposit" ? "30% DEPOSIT DUE NOW" : "TOTAL AMOUNT DUE NOW";
    document.getElementById("sum-grand-total").textContent = formatMoney(totals.dueNow);
    var perGuest = Math.round(totals.dueNow / state.guests);
    document.getElementById("sum-per-person-label").textContent = formatMoney(perGuest) + " per traveler";

    // Sync Section 03 Service Cards
    var cardMap = [
      { id: "service-card-hotel", key: "hotel", price: "₱4,200" },
      { id: "service-card-assist", key: "assist", price: "₱1,600" },
      { id: "service-card-transport", key: "transport", price: "₱2,800" }
    ];
    cardMap.forEach(function (item) {
      var card = document.getElementById(item.id);
      if (!card) return;
      var pill = card.querySelector(".service-toggle-pill");
      if (state.addons[item.key]) {
        card.classList.add("selected-service");
        if (pill) pill.textContent = "✓ Added to Trip (+" + item.price + ")";
      } else {
        card.classList.remove("selected-service");
        if (pill) pill.textContent = "+ Add to Trip (+" + item.price + ")";
      }
    });
  }

  function placeUserSomewhere(forcedCategory) {
    if (forcedCategory) {
      state.scope = forcedCategory;
      document.getElementById("trip-scope").value = forcedCategory;
    }
    if (state.mode === "manual" && !forcedCategory) {
      var selId = document.getElementById("manual-destination").value;
      var found = DESTINATIONS.find(function (d) { return d.id === selId; });
      if (found) state.placedDest = found;
    } else {
      var pool = DESTINATIONS.filter(function (d) {
        var matchScope = state.scope === "all" || d.category === state.scope;
        var matchVibe = state.vibe === "all" || d.vibe === state.vibe;
        return matchScope && matchVibe;
      });
      if (!pool.length) {
        pool = DESTINATIONS.filter(function (d) {
          return state.scope === "all" || d.category === state.scope;
        });
      }
      if (!pool.length) pool = DESTINATIONS;
      var others = pool.filter(function (d) { return d.id !== state.placedDest.id; });
      var pickPool = others.length ? others : pool;
      state.placedDest = pickPool[Math.floor(Math.random() * pickPool.length)];
      var manualSel = document.getElementById("manual-destination");
      if (manualSel) manualSel.value = state.placedDest.id;
    }
    renderPlacementAndQuote();
    showToast("✦ Placed you in: " + state.placedDest.title + " (" + state.placedDest.region + ")!");
  }

  function switchStudioTab(stepNum) {
    [1, 2, 3].forEach(function (n) {
      var btn = document.getElementById("tab-btn-" + n);
      var panel = document.getElementById("studio-panel-" + n);
      var row = document.getElementById("step-row-" + n);
      if (btn) btn.classList.toggle("active", n === stepNum);
      if (panel) panel.classList.toggle("active", n === stepNum);
      if (row) row.classList.toggle("active-step-row", n === stepNum);
    });
  }

  function renderBookingsHistory() {
    var wrap = document.getElementById("saved-bookings-list");
    var sub = document.getElementById("tab-status-sub");
    if (sub) sub.textContent = state.bookings.length + (state.bookings.length === 1 ? " active placement" : " active placements");
    if (!wrap) return;
    wrap.innerHTML = "";
    state.bookings.forEach(function (b, idx) {
      var row = document.createElement("div");
      row.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);border-radius:3px;flex-wrap:wrap;gap:10px;";
      row.innerHTML =
        "<div>" +
        "<strong style='color:var(--yellow);font-family:monospace;margin-right:10px;'>" + b.ref + "</strong>" +
        "<strong style='color:#fff;'>" + b.destTitle + "</strong>" +
        "<span style='display:block;font-size:0.74rem;color:rgba(255,255,255,0.65);'>" + b.date + " • " + b.guests + " Guest(s) • " + b.method + " • " + b.amountFormatted + "</span>" +
        "</div>" +
        "<button type='button' class='btn-secondary-dark' data-view-booking='" + idx + "'>View Boarding Pass ↗</button>";
      wrap.appendChild(row);
    });

    wrap.querySelectorAll("[data-view-booking]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = parseInt(btn.getAttribute("data-view-booking"), 10);
        var b = state.bookings[i];
        if (b) displayBoardingPass(b);
      });
    });
  }

  function displayBoardingPass(b) {
    document.getElementById("bp-dest-title").textContent = b.destTitle;
    document.getElementById("bp-ref-code").textContent = "REF: " + b.ref;
    document.getElementById("bp-airport-code").textContent = b.airport;
    document.getElementById("bp-city-label").textContent = b.region;
    document.getElementById("bp-traveler-name").textContent = b.traveler;
    document.getElementById("bp-departure-date").textContent = b.date;
    document.getElementById("bp-party-info").textContent = b.guests + (b.guests === 1 ? " Guest • " : " Guests • ") + b.days + " Days";
    document.getElementById("bp-services-info").textContent = b.services;
    document.getElementById("bp-tip-info").textContent = b.tipLabel;
    document.getElementById("bp-coords-info").textContent = b.coords;
    document.getElementById("bp-pay-method").textContent = b.method;
    document.getElementById("bp-pay-plan").textContent = b.plan;
    document.getElementById("bp-amount-paid").textContent = b.amountFormatted;
  }

  // Wire Studio Tabs & Detail Rows
  document.querySelectorAll(".studio-tab").forEach(function (tabBtn) {
    tabBtn.addEventListener("click", function () {
      var n = parseInt(tabBtn.getAttribute("data-tab"), 10) || 1;
      switchStudioTab(n);
    });
  });
  document.querySelectorAll(".detail-row[data-step-target]").forEach(function (stepRow) {
    stepRow.addEventListener("click", function () {
      var n = parseInt(stepRow.getAttribute("data-step-target"), 10) || 1;
      switchStudioTab(n);
      document.getElementById("trip-studio").scrollIntoView({ behavior: "smooth" });
    });
  });

  // Hero & Booking CTAs
  document.getElementById("hero-surprise-btn").addEventListener("click", function () {
    state.mode = "surprise";
    document.getElementById("mode-surprise-btn").classList.add("active");
    document.getElementById("mode-manual-btn").classList.remove("active");
    document.getElementById("surprise-controls").style.display = "block";
    document.getElementById("manual-controls").style.display = "none";
    switchStudioTab(1);
    placeUserSomewhere();
    document.getElementById("trip-studio").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("book-a-trip-cta").addEventListener("click", function () {
    switchStudioTab(1);
    placeUserSomewhere();
    document.getElementById("trip-studio").scrollIntoView({ behavior: "smooth" });
  });

  // Category placement links
  document.querySelectorAll("[data-place-category], [data-tour-category]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var cat = el.getAttribute("data-place-category") || el.getAttribute("data-tour-category");
      if (cat && el.hasAttribute("data-place-category")) {
        e.preventDefault();
        switchStudioTab(1);
        placeUserSomewhere(cat);
        document.getElementById("trip-studio").scrollIntoView({ behavior: "smooth" });
      } else if (cat) {
        placeUserSomewhere(cat);
      }
    });
  });

  // Mode Toggle
  document.getElementById("mode-surprise-btn").addEventListener("click", function () {
    state.mode = "surprise";
    this.classList.add("active");
    document.getElementById("mode-manual-btn").classList.remove("active");
    document.getElementById("surprise-controls").style.display = "block";
    document.getElementById("manual-controls").style.display = "none";
  });
  document.getElementById("mode-manual-btn").addEventListener("click", function () {
    state.mode = "manual";
    this.classList.add("active");
    document.getElementById("mode-surprise-btn").classList.remove("active");
    document.getElementById("surprise-controls").style.display = "none";
    document.getElementById("manual-controls").style.display = "block";
  });

  document.getElementById("manual-destination").addEventListener("change", function () {
    var found = DESTINATIONS.find(function (d) { return d.id === this.value; }.bind(this));
    if (found) {
      state.placedDest = found;
      renderPlacementAndQuote();
      showToast("Selected destination: " + found.title);
    }
  });

  document.getElementById("trip-scope").addEventListener("change", function () {
    state.scope = this.value;
    placeUserSomewhere();
  });

  document.querySelectorAll("#vibe-chip-group .vibe-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll("#vibe-chip-group .vibe-chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      state.vibe = chip.getAttribute("data-vibe");
      placeUserSomewhere();
    });
  });

  ["trip-date", "trip-days", "trip-guests", "trip-pace"].forEach(function (id) {
    document.getElementById(id).addEventListener("change", function () {
      state.date = document.getElementById("trip-date").value || "2026-11-15";
      state.days = parseInt(document.getElementById("trip-days").value, 10) || 3;
      state.guests = parseInt(document.getElementById("trip-guests").value, 10) || 2;
      state.pace = document.getElementById("trip-pace").value || "standard";
      renderPlacementAndQuote();
    });
  });

  ["hotel", "assist", "transport"].forEach(function (key) {
    var cb = document.getElementById("addon-" + key);
    cb.addEventListener("change", function () {
      state.addons[key] = cb.checked;
      renderPlacementAndQuote();
    });
  });

  // Section 03 Service Cards toggle
  document.querySelectorAll(".service-card[data-addon-target]").forEach(function (card) {
    card.addEventListener("click", function () {
      var targetId = card.getAttribute("data-addon-target");
      var cb = document.getElementById(targetId);
      if (cb) {
        cb.checked = !cb.checked;
        var key = targetId.replace("addon-", "");
        state.addons[key] = cb.checked;
        renderPlacementAndQuote();
        showToast((cb.checked ? "Added " : "Removed ") + card.querySelector("h3").textContent + "!");
      }
    });
  });

  document.getElementById("make-trip-btn").addEventListener("click", function () {
    placeUserSomewhere();
  });
  document.getElementById("reroll-place-btn").addEventListener("click", function () {
    state.mode = "surprise";
    placeUserSomewhere();
  });
  document.getElementById("proceed-to-pay-btn").addEventListener("click", function () {
    switchStudioTab(2);
    document.getElementById("trip-studio").scrollIntoView({ behavior: "smooth" });
  });

  // Payment Methods
  document.querySelectorAll(".pay-method-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".pay-method-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      state.payMethod = btn.getAttribute("data-pay-method");
      document.getElementById("pay-box-card").style.display = state.payMethod === "card" ? "block" : "none";
      document.getElementById("pay-box-ewallet").style.display = state.payMethod === "ewallet" ? "block" : "none";
      document.getElementById("pay-box-bank").style.display = state.payMethod === "bank" ? "block" : "none";
    });
  });

  // Live Credit Card Formatting & Preview
  document.getElementById("payer-name").addEventListener("input", function () {
    document.getElementById("cc-preview-name").textContent = (this.value || "TRAVELER").toUpperCase();
  });
  document.getElementById("cc-number").addEventListener("input", function () {
    var digits = this.value.replace(/\D/g, "").slice(0, 16);
    var formatted = digits.replace(/(.{4})/g, "$1 ").trim();
    this.value = formatted;
    var last4 = digits.slice(-4) || "8891";
    var first4 = digits.slice(0, 4) || "4532";
    document.getElementById("cc-preview-num").textContent = first4 + " •••• •••• " + last4;
    document.getElementById("cc-brand-label").textContent = digits.startsWith("5") ? "MASTERCARD WORLD • DOVEXPRESS" : "VISA SIGNATURE • DOVEXPRESS";
  });
  document.getElementById("cc-expiry").addEventListener("input", function () {
    var v = this.value.replace(/\D/g, "").slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
    this.value = v;
    document.getElementById("cc-preview-exp").textContent = v || "08/29";
  });

  // Tip Selector
  document.querySelectorAll("#tip-selector-group .tip-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#tip-selector-group .tip-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var val = btn.getAttribute("data-tip-pct");
      state.tipPct = val === "custom" ? "custom" : parseInt(val, 10);
      document.getElementById("custom-tip-wrap").style.display = val === "custom" ? "block" : "none";
      renderPlacementAndQuote();
    });
  });
  document.getElementById("custom-tip-input").addEventListener("input", function () {
    renderPlacementAndQuote();
  });

  // Payment Plan & Currency
  document.getElementById("payment-plan").addEventListener("change", function () {
    state.paymentPlan = this.value;
    renderPlacementAndQuote();
  });
  document.getElementById("currency-toggle-btn").addEventListener("click", function () {
    state.currency = state.currency === "PHP" ? "USD" : "PHP";
    this.textContent = state.currency === "PHP" ? "Currency: PHP (₱)" : "Currency: USD ($)";
    renderPlacementAndQuote();
  });

  // Promo Code
  function applyPromo(code) {
    var clean = (code || "").trim().toUpperCase();
    if (clean === "DOVWELCOME10" || clean === "SOMEWHERE1500") {
      state.promoCode = clean;
      document.getElementById("promo-input").value = clean;
      renderPlacementAndQuote();
      showToast("✓ Promo code " + clean + " applied!");
    } else {
      state.promoCode = "";
      renderPlacementAndQuote();
      showToast("Try DOVWELCOME10 or SOMEWHERE1500 for instant savings.");
    }
  }
  document.getElementById("apply-promo-btn").addEventListener("click", function () {
    applyPromo(document.getElementById("promo-input").value);
  });
  document.querySelectorAll(".promo-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      applyPromo(chip.getAttribute("data-promo"));
    });
  });

  // Authorize Payment & Issue Boarding Pass
  document.getElementById("submit-payment-btn").addEventListener("click", function () {
    var btn = this;
    var textSpan = document.getElementById("submit-payment-text");
    var payerName = (document.getElementById("payer-name").value || "").trim() || "Alex Rivera";
    btn.disabled = true;
    textSpan.textContent = "⏳ Processing Payment & Locking Placement...";

    setTimeout(function () {
      var totals = calculateTotals();
      var d = state.placedDest;
      var refCode = "DOV-" + Math.floor(1000 + Math.random() * 9000);
      var methodSummary = "Visa •••• 8891";
      if (state.payMethod === "card") {
        var rawDigits = document.getElementById("cc-number").value.replace(/\D/g, "");
        var last4 = rawDigits.slice(-4) || "8891";
        var brand = rawDigits.startsWith("5") ? "Mastercard" : "Visa";
        methodSummary = brand + " •••• " + last4;
      } else if (state.payMethod === "ewallet") {
        methodSummary = document.getElementById("ewallet-provider").value + " Verified";
      } else {
        methodSummary = document.getElementById("bank-name").value;
      }

      var newBooking = {
        ref: refCode,
        destId: d.id,
        destTitle: d.title,
        region: d.region,
        airport: d.airport,
        coords: d.coords.split("•")[0].trim(),
        traveler: payerName,
        date: state.date,
        guests: state.guests,
        days: state.days,
        services: totals.addonNames,
        tipLabel: totals.tipLabel,
        method: methodSummary,
        plan: state.paymentPlan === "deposit" ? "30% Deposit Paid" : "100% Full Payment",
        amountFormatted: formatMoney(totals.dueNow),
        status: "CONFIRMED & PAID"
      };

      state.bookings.unshift(newBooking);
      try {
        localStorage.setItem("dovexpress_bookings_v1", JSON.stringify(state.bookings));
      } catch (e) {}

      displayBoardingPass(newBooking);
      renderBookingsHistory();
      btn.disabled = false;
      textSpan.textContent = "🔒 Authorize Payment & Issue Boarding Pass";
      switchStudioTab(3);
      showToast("🎉 Payment confirmed! Boarding pass " + refCode + " issued for " + d.title + ".");
    }, 650);
  });

  // Boarding Pass Actions
  document.getElementById("print-pass-btn").addEventListener("click", function () {
    window.print();
  });
  document.getElementById("copy-ref-btn").addEventListener("click", function () {
    var refText = document.getElementById("bp-ref-code").textContent.replace("REF: ", "");
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(refText);
      } else {
        var temp = document.createElement("textarea");
        temp.value = refText;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
    } catch (e) {}
    showToast("✓ Copied booking reference " + refText + " to clipboard!");
  });
  document.getElementById("plan-another-trip-btn").addEventListener("click", function () {
    switchStudioTab(1);
    placeUserSomewhere();
  });

  // Contact Modals (FAQ, Office, Inquiry)
  var modalBackdrop = document.getElementById("contact-modal-backdrop");
  var modalTitle = document.getElementById("contact-modal-title");
  var modalBody = document.getElementById("contact-modal-body");

  function openContactModal(type) {
    modalBackdrop.classList.add("open");
    if (type === "faq") {
      modalTitle.textContent = "Frequently Asked Questions";
      modalBody.innerHTML =
        "<div style='display:grid;gap:14px;font-size:0.86rem;'>" +
        "<div><strong>How does 'Make a Trip & Place Me Somewhere' work?</strong><p style='color:var(--muted);margin:4px 0 0;'>Pick your tour scope and travel vibe, or choose Surprise Me. We immediately match and place you at a curated destination with a complete 3-day itinerary and flight path.</p></div>" +
        "<div><strong>What payment methods are accepted?</strong><p style='color:var(--muted);margin:4px 0 0;'>We accept Visa, Mastercard, GCash, Maya QR Ph, PayPal, and instant bank transfers (BPI, BDO, UnionBank), with either 100% full payment or a 30% reservation deposit.</p></div>" +
        "<div><strong>Can I include a tip for my local tour guide?</strong><p style='color:var(--muted);margin:4px 0 0;'>Yes! During checkout in Step 02, you can add a 5%, 10%, 15%, or custom tip that goes 100% to your assigned local guide and boat/transport crew.</p></div>" +
        "</div>";
    } else if (type === "office") {
      modalTitle.textContent = "DovExpress Travel Studio";
      modalBody.innerHTML =
        "<p style='font-size:0.88rem;color:var(--muted);'>Visit our travel lounge for coffee and personal itinerary planning:</p>" +
        "<div style='background:var(--cream);padding:16px;border-left:3px solid var(--yellow);font-size:0.85rem;margin-bottom:14px;'>" +
        "<strong>Antipolo &amp; Metro Manila Flagship Lounge</strong><br>" +
        "Sumulong Highway Cloud Ridge Arcade, Antipolo, Calabarzon<br>" +
        "Open Monday – Saturday • 9:00 AM to 6:30 PM<br>" +
        "Concierge Hotline: +63 (02) 8555-0194" +
        "</div>";
    } else {
      modalTitle.textContent = "Send a Travel Inquiry";
      modalBody.innerHTML =
        "<form id='modal-inquiry-form' style='display:grid;gap:12px;'>" +
        "<label style='font-size:0.75rem;font-weight:700;'>YOUR NAME<input type='text' required value='Alex Rivera' style='width:100%;padding:10px;margin-top:4px;border:1px solid var(--line);'></label>" +
        "<label style='font-size:0.75rem;font-weight:700;'>EMAIL ADDRESS<input type='email' required value='alex.rivera@example.com' style='width:100%;padding:10px;margin-top:4px;border:1px solid var(--line);'></label>" +
        "<label style='font-size:0.75rem;font-weight:700;'>MESSAGE OR CUSTOM REQUEST<textarea rows='3' required style='width:100%;padding:10px;margin-top:4px;border:1px solid var(--line);'>Hi DovExpress team! I would love help customizing our upcoming placement.</textarea></label>" +
        "<button type='submit' class='button button-yellow' style='border:none;cursor:pointer;justify-content:center;'>Send Message to Concierge ↗</button>" +
        "</form>";
      var form = document.getElementById("modal-inquiry-form");
      if (form) {
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          modalBackdrop.classList.remove("open");
          showToast("✉ Inquiry sent! Our travel concierge will reply within 2 hours.");
        });
      }
    }
  }

  document.querySelectorAll("[data-contact-modal]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openContactModal(el.getAttribute("data-contact-modal"));
    });
  });
  document.getElementById("close-modal-btn").addEventListener("click", function () {
    modalBackdrop.classList.remove("open");
  });
  modalBackdrop.addEventListener("click", function (e) {
    if (e.target === modalBackdrop) modalBackdrop.classList.remove("open");
  });

  // Initial Render
  populateManualSelect();
  renderPlacementAndQuote();
  displayBoardingPass(state.bookings[0]);
  renderBookingsHistory();
})();
