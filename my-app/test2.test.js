const request = require('supertest');
const app = require('./index.js');

function add(a, b) {
    return a + b;
  }
  
  test('GET / should return "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('HelloWorld');
  });