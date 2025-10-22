# weather-dashboard
DevOps project for SWE40006 – Weather Dashboard App

☁️ CloudCast – Real-Time Weather Dashboard

A Flask + DevOps demonstration project with responsive UI, CI/CD, and Docker deployment.

🌍 Overview

CloudCast is a lightweight, full-stack web application built using Flask that provides real-time weather updates using the Open-Meteo API.
It demonstrates clean software architecture, responsive front-end design, containerization, and continuous integration using GitHub Actions.

🧠 Features

🌦 Live Weather Data – Temperature, wind speed, and humidity via Open-Meteo API

📍 Geolocation Support – Automatically fetch your current coordinates

🏙️ City Presets – Quick-select for Melbourne, Sydney, Brisbane, and Adelaide

📱 Responsive Front-End – Mobile-friendly layout using adaptive CSS

🧩 Flask Backend – RESTful routes with JSON output

🐳 Dockerized – Run locally or deploy seamlessly to any Docker environment

🔁 CI/CD Ready – Built-in GitHub Actions workflow for automated testing and builds

⚙️ Installation (Local)

Clone the repository

git clone https://github.com/<your-username>/cloudcast.git
cd cloudcast


Install dependencies

pip install -r requirements.txt


Run the Flask app

python app.py


Then open http://127.0.0.1:5000
 in your browser.

🧪 Testing

A simple PyTest script (test_app.py) ensures the Flask server health endpoint works properly.

pytest -v

🐳 Docker Deployment
Build and run locally
docker build -t cloudcast-app .
docker run -p 5000:5000 cloudcast-app

Or use Docker Compose
docker compose up --build

🔄 CI/CD with GitHub Actions

This project includes a preconfigured GitHub Actions workflow (.github/workflows/ci.yml) that automatically:

Installs dependencies

Runs unit tests

Performs a Docker build smoke test

Every push or pull request triggers this workflow.

☁️ API Endpoint Summary
Endpoint	Method	Description
/	GET	Renders main weather dashboard
/weather?lat=<LAT>&lon=<LON>	GET	Returns JSON weather data
/health	GET	Simple service health check
🧭 Example Usage

Request:

GET /weather?lat=-37.81&lon=144.96


Response:

{
  "current_weather": {
    "temperature": 21.3,
    "windspeed": 8.5,
    "time": "2025-10-22T06:00"
  }
}

🚀 Deployment (AWS / Jenkins Ready)

CloudCast can be easily deployed to an AWS EC2 instance or a container orchestration platform like ECS or Kubernetes.
Integrate it with Jenkins for a full CI/CD pipeline:

Jenkinsfile for build + deploy automation

EC2 host with Docker installed

Nginx reverse proxy (optional)

🧑‍💻 Technologies Used
Category	Tools
Backend	Flask (Python)
Frontend	HTML5, CSS3, JavaScript
API	Open-Meteo
DevOps	Docker, GitHub Actions, CI/CD
Testing	PyTest
Version Control	Git + GitHub
💡 Future Improvements

Add a dark mode toggle

Integrate a city name search (using OpenCage API)

Include historical and forecast visualizations

Add user login + saved locations
