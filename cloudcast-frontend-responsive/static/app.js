// CloudCast frontend logic
const form = document.getElementById('weatherForm');
const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');
const resultEl = document.getElementById('result');
const statusEl = document.getElementById('status');
const geoBtn = document.getElementById('useGeo');

function setStatus(msg) {
  statusEl.textContent = msg || '';
}

function renderResult(data) {
  const temp = data?.current_weather?.temperature ?? 'N/A';
  const wind = data?.current_weather?.windspeed ?? 'N/A';
  const time = data?.current_weather?.time ?? 'N/A';

  resultEl.innerHTML = `
    <div class="grid">
      <div class="cardlet">
        <div class="metric">${temp}°C</div>
        <div class="meta">Temperature</div>
      </div>
      <div class="cardlet">
        <div class="metric">${wind} km/h</div>
        <div class="meta">Wind Speed</div>
      </div>
      <div class="cardlet">
        <div class="metric">${time}</div>
        <div class="meta">Time (UTC)</div>
      </div>
    </div>
  `;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const lat = latEl.value.trim();
  const lon = lonEl.value.trim();
  if (!lat || !lon) return;

  setStatus('Loading...');
  resultEl.innerHTML = '';
  try {
    const res = await fetch(`/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`);
    const data = await res.json();
    if (data.error) {
      setStatus(data.error);
      return;
    }
    setStatus('');
    renderResult(data);
  } catch (err) {
    setStatus('Unable to fetch weather data.');
  }
});

// Use browser geolocation to auto-fill coords
geoBtn?.addEventListener('click', () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation not supported by this browser.');
    return;
  }
  setStatus('Getting your location...');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      latEl.value = latitude.toFixed(4);
      lonEl.value = longitude.toFixed(4);
      setStatus('Coordinates filled from your location.');
    },
    () => setStatus('Could not get your location. Please enter coords.')
  );
});

// City presets
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    latEl.value = chip.dataset.lat;
    lonEl.value = chip.dataset.lon;
    setStatus(`Using preset: ${chip.textContent}`);
  });
});
