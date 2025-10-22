from flask import Flask, request, jsonify
import os, requests

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>CloudCast – Weather Dashboard</h1><p>Try /weather?lat=-37.81&lon=144.96</p><p>Health: /health</p>'

@app.route('/health')
def health():
    return jsonify({'status': 'ok'})

@app.route('/weather')
def weather():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    if not lat or not lon:
        return jsonify({'error': 'Please provide lat and lon'}), 400
    url = (f'https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}'
           '&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&current_weather=true')
    try:
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        return jsonify(r.json())
    except requests.RequestException as e:
        return jsonify({'error': 'Failed to fetch weather', 'details': str(e)}), 502

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
