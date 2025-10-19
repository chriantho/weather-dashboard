from flask import Flask, request, jsonify, render_template  
import requests, os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/weather")
def weather():
    lat = request.args.get("lat")
    lon = request.args.get("lon")
    if not lat or not lon:
        return jsonify({"error": "Please provide lat & lon"}), 400
    
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&hourly=temperature_2m"
    r = requests.get(url)
    return r.json()

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
