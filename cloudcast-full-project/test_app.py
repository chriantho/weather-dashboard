from app import app

def test_health_ok():
    client = app.test_client()
    res = client.get('/health')
    assert res.status_code == 200
    assert res.json['status'] == 'ok'
