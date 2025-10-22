# CloudCast – Weather Dashboard (Flask + DevOps)

A small Flask app that shows real-time weather using the **Open-Meteo** API and a clean, responsive UI.

## Endpoints
- `/` – front-end dashboard (templates/index.html)
- `/health` – service health check (used by monitors/CI)
- `/weather?lat=-37.81&lon=144.96` – weather JSON

## Run locally
```bash
pip install -r requirements.txt
python app.py
# http://127.0.0.1:5000
```

## Run with Docker
```bash
docker build -t cloudcast-app .
docker run -p 5000:5000 cloudcast-app
# or
docker compose up --build
```

## CI (GitHub Actions)
On each push, CI installs deps, runs tests, and performs a Docker build smoke step.
See `.github/workflows/ci.yml`.
