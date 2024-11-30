let map;
let currentChart = null;
const countdownElement = document.getElementById('countdown');
const mapElement = document.getElementById('map');

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
  countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return false;
}

function initMap() {
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

  updateMarkers();
}


function updateMarkers() {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  const selectedTypes = [...document.querySelectorAll('input[name="type"]:checked')]
    .map(cb => cb.value);
  const selectedCharacteristics = [...document.querySelectorAll('input[name="characteristic"]:checked')]
    .map(cb => cb.value);

  wineries.forEach(winery => {
    // Combiniamo caratteristiche primarie e secondarie per il filtro
    const allCharacteristics = [...winery.characteristics.primary, ...winery.characteristics.secondary];
    
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(winery.type);
    const characteristicMatch = selectedCharacteristics.length === 0 || 
      selectedCharacteristics.some(c => allCharacteristics.includes(c));

    if (typeMatch && characteristicMatch) {
      const marker = L.marker(winery.coordinates);
      marker.on('click', () => {
        showDetails(winery);
      });
      marker.addTo(map);
    }
  });
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

function toggleFilters() {
  const menu = document.getElementById('filterMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('filterMenu');
  const button = document.querySelector('.filter-button');
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.style.display = 'none';
  }
});

if (!updateCountdown()) {
  const interval = setInterval(() => {
    if (updateCountdown()) {
      clearInterval(interval);
    }
  }, 1000);
}