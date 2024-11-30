let map;
let currentChart = null;
const countdownElement = document.getElementById('countdown');
const mapElement = document.getElementById('map');

const markerColors = {
  bianco: '#FFD700',     // Oro per i vini bianchi
  spumante: '#87CEEB',   // Azzurro per gli spumanti
  spirits: '#9370DB'     // Viola per gli spirits
};



function updateMarkers() {
  console.log("updateMarkers called");
  if (!map) {
    console.error("Map not initialized!");
    return;
  }

  console.log("Current wineries:", wineries);  // Verifica che wineries esista e contenga dati

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  wineries.forEach(winery => {
    console.log("Creating marker for:", winery.name, "at coordinates:", winery.coordinates);
    
    const marker = L.marker(winery.coordinates, {
      icon: createCustomIcon(winery.type)
    });
    
    marker.bindTooltip(winery.name, {
      permanent: false,
      direction: 'top'
    });
    
    marker.on('click', () => showDetails(winery));
    marker.addTo(map);
  });
}

function createCustomIcon(type) {
  console.log("Creating icon for type:", type, "with color:", markerColors[type]);
  
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      position: absolute;
      background-color: ${markerColors[type]};
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 4px rgba(0,0,0,0.5);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      "></div>`,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
}

function initMap() {
  console.log("initMap called");
  map = L.map('map', {
    zoomControl: false,
    dragging: !L.Browser.mobile
  }).setView([42.8333, 12.8333], 6);

  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  console.log("Calling updateMarkers");
  updateMarkers();
}


function updateCountdown() {
  const now = new Date();
  const diff = unlockDate - now;

  if (diff <= 0) {
    countdownElement.style.display = 'none';
    mapElement.style.display = 'block';
    initMap();
    return true;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  // Modifica qui: seleziona solo il div interno per il timer
  const timerDiv = countdownElement.querySelector('div');
  timerDiv.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return false;
}



function getAllCharacteristics() {
  const characteristicsSet = new Set();
  
  wineries.forEach(winery => {
    // Add primary characteristics
    winery.characteristics.primary.forEach(char => characteristicsSet.add(char));
    // Add secondary characteristics
    winery.characteristics.secondary.forEach(char => characteristicsSet.add(char));
  });
  
  // Convert Set to sorted array
  return Array.from(characteristicsSet).sort();
}


function showDetails(winery) {
  const panel = document.getElementById('detailsPanel');
  const content = document.getElementById('detailsContent');
  
  const allCharacteristics = [...winery.characteristics.primary, ...winery.characteristics.secondary];
  const characteristicsTags = allCharacteristics.map(c => `<span class="characteristic-tag">${c}</span>`).join('');
  
  content.innerHTML = `
    <div class="wine-header">
      <div class="wine-image-container">
        <img src="${winery.image}" alt="${winery.wine}" class="details-image">
      </div>
      <div class="wine-info">
        <h1 class="details-title">${winery.name}</h1>
        <h2 class="details-subtitle">${winery.wine}</h2>
        <div class="wine-location">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          ${winery.location} - ${winery.city}
        </div>
        
        <div class="characteristics-section">
          <h3 class="section-title">Caratteristiche</h3>
          <div class="characteristics-list">
            ${characteristicsTags}
          </div>
        </div>
      </div>
    </div>

    <div class="charts-container">
      <div class="chart-wrapper">
        <h3>Profilo Aromatico</h3>
        <canvas id="characteristicsChart"></canvas>
      </div>
      <div class="chart-wrapper">
        <h3>Profilo Gustativo</h3>
        <canvas id="tasteChart"></canvas>
      </div>
    </div>

    <div class="additional-info">
      <p><strong>Vitigni:</strong> ${winery.grapes.join(', ')}</p>
      <p><strong>Affinamento:</strong> ${winery.aging}</p>
      ${winery.awards.length > 0 ? `
        <p><strong>Riconoscimenti:</strong></p>
        <ul class="awards-list">
          ${winery.awards.map(award => `<li>${award}</li>`).join('')}
        </ul>
      ` : ''}
    </div>

    <div class="details-description">
      ${winery.description}
    </div>
  `;

  // Distruggi i grafici esistenti se presenti
  if (currentChart) {
    currentChart.destroy();
  }
  
  // Grafico delle caratteristiche
  const ctxChar = document.getElementById('characteristicsChart');
  new Chart(ctxChar, {
    type: 'radar',
    data: {
      labels: ['Fruttato', 'Agrumato', 'Minerale', 'Floreale'],
      datasets: [{
        label: 'Intensità',
        data: [
          winery.characteristics.intensity.fruttato || 0,
          winery.characteristics.intensity.agrumato || 0,
          winery.characteristics.intensity.minerale || 0,
          winery.characteristics.intensity.floreale || 0
        ],
        fill: true,
        backgroundColor: 'rgba(114, 47, 55, 0.2)',
        borderColor: '#722F37',
        pointBackgroundColor: '#722F37',
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 5,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  // Grafico del profilo gustativo
  const ctxTaste = document.getElementById('tasteChart');
  new Chart(ctxTaste, {
    type: 'radar',
    data: {
      labels: ['Dolcezza', 'Acidità', 'Corpo', 'Persistenza'],
      datasets: [{
        label: 'Profilo',
        data: [
          winery.taste_profile.dolcezza,
          winery.taste_profile.acidità,
          winery.taste_profile.corpo,
          winery.taste_profile.persistenza
        ],
        fill: true,
        backgroundColor: 'rgba(47, 114, 55, 0.2)',
        borderColor: '#2F7237',
        pointBackgroundColor: '#2F7237',
      }]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 5,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  panel.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeDetails() {
  const panel = document.getElementById('detailsPanel');
  panel.style.display = 'none';
  document.body.style.overflow = 'auto';
  if (currentChart) {
    currentChart.destroy();
    currentChart = null;
  }
}

if (!updateCountdown()) {
  const interval = setInterval(() => {
    if (updateCountdown()) {
      clearInterval(interval);
    }
  }, 1000);
}

