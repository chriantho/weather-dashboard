# CloudCast – Weather Dashboard (Flask + DevOps)

Simple Flask app that fetches live weather from **Open-Meteo**.
Endpoints:
- `/` – landing page
- `/health` – health check
- `/weather?lat=-37.81&lon=144.96` – weather JSON

## Run locally
pip install -r requirements.txt
python app.py

## Docker
docker build -t cloudcast-app .
docker run -p 5000:5000 cloudcast-app

## CI (GitHub Actions)
See `.github/workflows/ci.yml`.
