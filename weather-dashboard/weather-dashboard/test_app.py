import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_home(client):
    """Test the home endpoint"""
    response = client.get('/')
    assert response.status_code == 200
    assert b'Weather Dashboard' in response.data

def test_health(client):
    """Test the health check endpoint"""
    response = client.get('/health')
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['status'] == 'ok'

def test_weather_missing_params(client):
    """Test weather endpoint without parameters"""
    response = client.get('/weather')
    assert response.status_code == 400
    json_data = response.get_json()
    assert 'error' in json_data

def test_weather_valid_params(client):
    """Test weather endpoint with valid coordinates"""
    response = client.get('/weather?lat=-37.81&lon=144.96')
    assert response.status_code == 200
    json_data = response.get_json()
    assert 'hourly' in json_data  # Open-Meteo returns hourly data