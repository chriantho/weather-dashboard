
# Monitoring Options (Pick One)

## 1) Simple Uptime/Health (Fast)
- Poll `http://<server>:3000/health` from:
  - UptimeRobot / Healthchecks.io / GitHub Actions cron
- Alert on non-200.

## 2) Node Exporter + Prometheus + Grafana (Richer)
- Install Prometheus Node Exporter on the VM (CPU, RAM, disk metrics).
- Run Prometheus & Grafana via Docker compose and add a dashboard.

## 3) Cloud Provider
- If using AWS, enable CloudWatch agent on the VM for system metrics and logs.

For the assignment, option **1** is sufficient to satisfy Level 2. Option **2** earns bonus depth.
