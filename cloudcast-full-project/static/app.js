const form = document.getElementById('weatherForm');
const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');
const resultEl = document.getElementById('result');
const statusEl = document.getElementById('status');
const geoBtn = document.getElementById('useGeo');

function setStatus(msg){ statusEl.textContent = msg || ''; }

function renderResult(data){
  const temp = data?.current_weather?.temperature ?? 'N/A';
  const wind = data?.current_weather?.windspeed ?? 'N/A';
  const time = data?.current_weather?.time ?? 'N/A';
  resultEl.innerHTML = `
    <div class="grid">
      <div class="cardlet"><div class="metric">${temp}°C</div><div class="meta">Temperature</div></div>
      <div class="cardlet"><div class="metric">${wind} km/h</div><div class="meta">Wind Speed</div></div>
      <div class="cardlet"><div class="metric">${time}</div><div class="meta">Time (UTC)</div></div>
    </div>`;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const lat = latEl.value.trim();
  const lon = lonEl.value.trim();
  if(!lat || !lon) return;
  setStatus('Loading...'); resultEl.innerHTML = '';
  try{
    const res = await fetch(`/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`);
    const data = await res.json();
    if(data.error){ setStatus(data.error); return; }
    setStatus(''); renderResult(data);
  }catch{ setStatus('Unable to fetch weather data.'); }
});

geoBtn?.addEventListener('click', () => {
  if(!navigator.geolocation){ setStatus('Geolocation not supported.'); return; }
  setStatus('Getting your location...');
  navigator.geolocation.getCurrentPosition(
    (pos) => { latEl.value = pos.coords.latitude.toFixed(4); lonEl.value = pos.coords.longitude.toFixed(4); setStatus('Coordinates filled.'); },
    () => setStatus('Could not get your location.')
  );
});

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    latEl.value = chip.dataset.lat;
    lonEl.value = chip.dataset.lon;
    setStatus(`Using preset: ${chip.textContent}`);
  });
});
