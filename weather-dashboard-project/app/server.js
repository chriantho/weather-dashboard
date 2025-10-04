
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Weather Dashboard</h1><p>Try /weather?lat=-37.81&lon=144.96</p>');
});

// Weather route
app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) {
    return res.status(400).json({ error: "Please provide lat & lon parameters" });
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Weather API request failed" });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
