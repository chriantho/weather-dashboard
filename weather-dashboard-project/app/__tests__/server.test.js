
const request = require('supertest');
const express = require('express');

// Create a small app for testing
const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok' }));

describe('Health endpoint', () => {
  it('should return ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
