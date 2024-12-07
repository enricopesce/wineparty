let map;
const countdownElement = document.getElementById("countdown");
const mapElement = document.getElementById("map");

const markerColors = {
  bianco: "#FFD700", // Oro per i vini bianchi
  spumante: "#87CEEB", // Azzurro per gli spumanti
  spirits: "#9370DB", // Viola per gli spirits
};

const characteristicColors = {
  // Aromatici/Floreali
  floreale: "#9B6B9E", // Viola chiaro
  aromatico: "#9B6B9E",

  // Fruttati/Agrumati
  fruttato: "#E9967A", // Pesca
  agrumato: "#FFB347", // Arancione

  // Struttura/Corpo
  strutturato: "#8B4513", // Marrone
  cremoso: "#DEB887", // Beige

  // Minerali/Freschi
  minerale: "#87CEEB", // Azzurro
  fresco: "#20B2AA", // Turchese

  // Speziati/Complessi
  speziato: "#CD853F", // Terra di Siena
  marino: "#4682B4", // Blu acciaio

  // Altro
  mandorlato: "#DEB887", // Beige
  "crosta di pane": "#D2691E", // Marrone chiaro
};

const getTasteDescription = {
  // Wine characteristics
  dolcezza: (value) => ({
    label: "Dolcezza",
    left: "Secco",
    right: "Dolce",
    value: value * 20,
  }),
  acidità: (value) => ({
    label: "Acidità",
    left: "Morbido",
    right: "Fresco",
    value: value * 20,
  }),
  corpo: (value) => ({
    label: "Corpo",
    left: "Leggero",
    right: "Strutturato",
    value: value * 20,
  }),
  persistenza: (value) => ({
    label: "Persistenza",
    left: "Breve",
    right: "Lunga",
    value: value * 20,
  }),
  // Spirits characteristics
  sapidità: (value) => ({
    label: "Sapidità",
    left: "Delicato",
    right: "Intenso",
    value: value * 20,
  }),
  intensità: (value) => ({
    label: "Intensità",
    left: "Leggera",
    right: "Forte",
    value: value * 20,
  }),
};

function getCharacteristicColor(characteristic) {
  return characteristicColors[characteristic] || "#722F37"; // Colore default se non mappato
}

function initViewToggle() {
  document.body.insertAdjacentHTML('beforeend', `
    <button class="view-toggle" onclick="toggleView()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
      <span>Passa alla Lista</span>
    </button>
  `);
}


function toggleView() {
  const map = document.getElementById("map");
  const list = document.querySelector(".product-list");
  const button = document.querySelector(".view-toggle");
  const span = button.querySelector("span");

  if (map.style.display !== "none") {
    map.style.display = "none";
    list.style.width = "100%";
    list.classList.add("open");
    span.textContent = "Passa alla Mappa";
  } else {
    map.style.display = "block";
    list.style.width = "300px";
    list.classList.remove("open");
    span.textContent = "Passa alla Lista";
  }
}

function toggleProductList() {
  const list = document.querySelector(".product-list");
  const map = document.getElementById("map");
  
  list.classList.toggle("open");
  
  // Adjust map position when menu is open on mobile
  if (window.innerWidth < 1024) {
    if (list.classList.contains("open")) {
      map.style.transform = "translateX(300px)";
    } else {
      map.style.transform = "translateX(0)";
    }
  }
}

// Add resize handler to reset styles on window resize
window.addEventListener('resize', () => {
  const list = document.querySelector(".product-list");
  const map = document.getElementById("map");
  
  if (window.innerWidth >= 1024) {
    map.style.transform = "";
    list.classList.remove("open");
  } else {
    if (list.classList.contains("open")) {
      map.style.transform = "translateX(300px)";
    } else {
      map.style.transform = "translateX(0)";
    }
  }
});

function filterProducts() {
  const searchTerm = document.querySelector(".search-input").value.toLowerCase();
  const typeFilter = document.querySelector(".filter-select").value;
  const characteristicFilter = document.querySelectorAll(".filter-select")[1].value;

  const filtered = wineries.filter((winery) => {
    const matchesSearch =
      winery.name.toLowerCase().includes(searchTerm) ||
      winery.wine.toLowerCase().includes(searchTerm);
    const matchesType = typeFilter === "all" || winery.type === typeFilter;
    const matchesCharacteristic = characteristicFilter === "all" || 
      winery.characteristics.primary.includes(characteristicFilter) ||
      winery.characteristics.secondary.includes(characteristicFilter);

    return matchesSearch && matchesType && matchesCharacteristic;
  });

  // Sort by characteristic intensity if a characteristic is selected
  if (characteristicFilter !== "all") {
    filtered.sort((a, b) => {
      const scoreA = getCharacteristicScore(a, characteristicFilter);
      const scoreB = getCharacteristicScore(b, characteristicFilter);
      return scoreB - scoreA; // Descending order
    });
  }

  renderProducts(filtered);
}

function getCharacteristicScore(winery, characteristic) {
  let score = 0;
  
  // Add points for primary characteristics
  if (winery.characteristics.primary.includes(characteristic)) {
    score += 3;
  }
  
  // Add points for secondary characteristics
  if (winery.characteristics.secondary.includes(characteristic)) {
    score += 1;
  }
  
  // Add intensity value if available
  if (winery.characteristics.intensity[characteristic]) {
    score += winery.characteristics.intensity[characteristic];
  }
  
  return score;
}

function renderProducts(products) {
  const container = document.querySelector(".products-container");
  container.innerHTML = products
    .map(
      (winery) => `
    <div class="product-item" onclick="selectProduct('${winery.name}')">
      <img src="${winery.image}" alt="${winery.wine}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${winery.name}</h3>
        <p class="product-wine">${winery.wine}</p>
        <p class="product-location">${winery.location}</p>
      </div>
    </div>
  `
    )
    .join("");
}

function selectProduct(name) {
  const winery = wineries.find((w) => w.name === name);
  if (winery) {
    showDetails(winery);
    map.setView(winery.coordinates, 10);
  }
}

function initProductList() {
  document.body.insertAdjacentHTML('beforeend', `
    <button class="toggle-list" onclick="toggleProductList()">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 3v18M3 12h18"></path>
      </svg>
    </button>
    <div class="product-list">
      <div class="filters">
        <input type="text" class="search-input" placeholder="Cerca prodotto..." onkeyup="filterProducts()">
        <select class="filter-select" onchange="filterProducts()">
          <option value="all">Tutti i prodotti</option>
          <option value="bianco">Vini Bianchi</option>
          <option value="spumante">Spumanti</option>
          <option value="spirits">Distillati</option>
        </select>
        <select class="filter-select" onchange="filterProducts()">
          <option value="all">Tutte le caratteristiche</option>
          ${getAllCharacteristics().map(char => 
            `<option value="${char}">${char}</option>`
          ).join('')}
        </select>
      </div>
      <div class="products-container"></div>
    </div>
  `);

  renderProducts(wineries);
}

function adjustColor(color, amount) {
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function formatTasteProfile(tasteProfile) {
  return Object.entries(tasteProfile)
    .filter(([characteristic]) => characteristic in getTasteDescription) // Only process known characteristics
    .map(([characteristic, value]) => {
      const description = getTasteDescription[characteristic](value);
      return `
        <div class="taste-characteristic">
          <div class="taste-header">
            <span class="taste-label">${description.label}</span>
          </div>
          <div class="taste-bar-container">
            <span class="taste-label-left">${description.left}</span>
            <div class="taste-bar-wrapper">
              <div class="taste-bar" style="width: ${description.value}%">
                <div class="taste-bar-indicator"></div>
              </div>
            </div>
            <span class="taste-label-right">${description.right}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function updateMarkers() {
  if (!map) {
    console.error("Map not initialized!");
    return;
  }

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  wineries.forEach((winery) => {
    const marker = L.marker(winery.coordinates, {
      icon: createCustomIcon(winery.type, winery.image)
    });

    marker.bindTooltip(winery.name, {
      permanent: false,
      direction: "top",
      offset: [0, -60]
    });

    marker.on("click", () => showDetails(winery));
    marker.addTo(map);
  });
}

function createCustomIcon(type, imageUrl) {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        width: 60px;
        height: 80px;
      ">
        <img src="${imageUrl}" style="
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          background-color: white;
          object-fit: cover;
        ">
        <div style="
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: ${markerColors[type]};
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        "></div>
      </div>`,
    iconSize: [60, 80],
    iconAnchor: [30, 80],
    popupAnchor: [0, -70]
  });
}

function initMap() {
  console.log("initMap called");
  map = L.map("map", {
    zoomControl: false,
    dragging: true, // Enable dragging on all devices
    tap: true, // Enable tap for touch devices
    touchZoom: true, // Enable touch zoom
    scrollWheelZoom: true, // Enable scroll wheel zoom
  }).setView([42.8333, 12.8333], 6);

  L.control
    .zoom({
      position: "topright",
    })
    .addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  console.log("Calling updateMarkers");
  updateMarkers();
}

function updateCountdown() {
  const now = new Date();
  const diff = unlockDate - now;

  if (diff <= 0) {
    countdownElement.style.display = "none";
    mapElement.style.display = "block";
    initMap();
    initProductList();
    return true;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const timerDiv = countdownElement.querySelector("div");
  timerDiv.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return false;
}

function getAllCharacteristics() {
  const characteristicsSet = new Set();

  wineries.forEach((winery) => {
    winery.characteristics.primary.forEach((char) =>
      characteristicsSet.add(char)
    );
    winery.characteristics.secondary.forEach((char) =>
      characteristicsSet.add(char)
    );
  });

  return Array.from(characteristicsSet).sort();
}

function calculateCharacteristicsPredominance(winery) {
  // Creiamo un oggetto per tenere traccia dei punteggi totali
  let scores = {};
  let totalScore = 0;

  // Assegniamo pesi alle caratteristiche primarie e secondarie
  winery.characteristics.primary.forEach((char) => {
    scores[char] = scores[char] || 0;
    scores[char] += 3; // Peso maggiore per caratteristiche primarie
    totalScore += 3;
  });

  winery.characteristics.secondary.forEach((char) => {
    scores[char] = scores[char] || 0;
    scores[char] += 1; // Peso minore per caratteristiche secondarie
    totalScore += 1;
  });

  // Aggiungiamo i valori di intensità quando disponibili
  Object.entries(winery.characteristics.intensity).forEach(
    ([char, intensity]) => {
      if (scores[char]) {
        scores[char] += intensity; // Aggiungiamo l'intensità al punteggio
        totalScore += intensity;
      }
    }
  );

  // Calcoliamo le percentuali e ordiniamo per predominanza
  const percentages = Object.entries(scores)
    .map(([char, score]) => ({
      characteristic: char,
      percentage: Math.round((score / totalScore) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  return percentages;
}

function formatCharacteristicTags(characteristics, winery) {
  const predominance = calculateCharacteristicsPredominance(winery);

  return predominance
    .map(
      ({ characteristic, percentage }) =>
        `<span class="characteristic-tag" 
           style="background: linear-gradient(135deg, 
                                           ${getCharacteristicColor(
                                             characteristic
                                           )}, 
                                           ${adjustColor(
                                             getCharacteristicColor(
                                               characteristic
                                             ),
                                             -20
                                           )})">
      ${characteristic}
      <span class="percentage">${percentage}%</span>
     </span>`
    )
    .join("");
}

function showDetails(winery) {
  const panel = document.getElementById("detailsPanel");
  const content = document.getElementById("detailsContent");

  // Calcoliamo la predominanza
  const predominance = calculateCharacteristicsPredominance(winery);
  const characteristicsTags = predominance
    .map(({ characteristic, percentage }) => {
      const color = getCharacteristicColor(characteristic);
      const darkColor = adjustColor(color, -20);
      return `
        <span class="characteristic-tag" 
              style="background: linear-gradient(135deg, ${color}, ${darkColor})"
              data-predominance="${
                percentage >= 30 ? "high" : percentage >= 20 ? "medium" : "low"
              }">
          ${characteristic}
          <span class="percentage">${percentage}%</span>
        </span>`;
    })
    .join("");

  // Handle ingredients display based on type
  const ingredientsTitle = winery.type === "spirits" ? "Botaniche" : "Vitigni";
  const ingredients =
    winery.type === "spirits" ? winery.botanicals : winery.grapes;

  content.innerHTML = `
    <div class="wine-header">
      <div class="wine-image-container">
        <img src="${winery.image}" alt="${winery.wine}" class="details-image">
      </div>
      <div class="wine-info">
        <h1 class="details-title">${winery.name}</h1>
        <h2 class="details-subtitle">${winery.wine}</h2>
        <h2 class="details-subtitle"></h2>
        <div class="wine-location">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          ${winery.location} - ${winery.city}
        </div>
        
        <!-- Aggiunto il link al sito web -->
        <div class="wine-website">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          <a href="https://${
            winery.website
          }" target="_blank" rel="noopener noreferrer">${winery.website}</a>
        </div>
        
        <div class="characteristics-section">
          <h3 class="section-title">Caratteristiche</h3>
          <div class="characteristics-list">
            ${characteristicsTags}
          </div>
        </div>
      </div>
    </div>
    <div class="taste-profile-section">
      <h3 class="section-title">Profilo ${
        winery.type === "spirits" ? "Organolettico" : "Gustativo"
      }</h3>
      <div class="taste-profile-grid">
        ${formatTasteProfile(winery.taste_profile)}
      </div>
    </div>

    <div class="additional-info">
      <p><strong>${ingredientsTitle}:</strong> ${ingredients.join(", ")}</p>
      ${
        winery.aging
          ? `<p><strong>${
              winery.type === "spirits" ? "Distillazione" : "Affinamento"
            }:</strong> ${winery.aging}</p>`
          : ""
      }
      ${
        winery.awards && winery.awards.length > 0
          ? `
        <p><strong>Riconoscimenti:</strong></p>
        <ul class="awards-list">
          ${winery.awards.map((award) => `<li>${award}</li>`).join("")}
        </ul>
      `
          : ""
      }
    </div>

    <div class="details-description">
      ${winery.description}
    </div>
  `;

  panel.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetails() {
  const panel = document.getElementById("detailsPanel");
  panel.classList.remove("open");
  document.body.style.overflow = "auto";
}

if (!updateCountdown()) {
  const interval = setInterval(() => {
    if (updateCountdown()) {
      clearInterval(interval);
    }
  }, 1000);
}
