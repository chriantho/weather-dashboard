
# DevOps Pipeline Demo (3‑Person Team)

A minimal, semester‑friendly DevOps project demonstrating:
- Git repo
- CI (Jenkins or GitHub Actions)
- Test stage (Jest)
- Container image (Docker)
- Deploy to production VM (e.g., AWS EC2)
- Basic monitoring/health endpoint

## Quick Start (Local)
```bash
cd app
npm install
npm test
npm run start
# open http://localhost:3000
```

## Docker (Local)
```bash
docker compose up --build
```

## Pipeline Options
- **Jenkins**: use `Jenkinsfile`
- **GitHub Actions**: use `.github/workflows/ci.yml`

## Deployment
- See `infra/deploy.sh` and `infra/README.md`
- Exposes a `/health` endpoint for uptime checks and basic monitoring.
