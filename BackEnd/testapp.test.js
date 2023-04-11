const request = require('supertest');

const app = require('./index.js');
const jwt = require('jsonwebtoken');


test('GET / should return "Hello Qler"', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello Qler');
});

const secretKeys = '12345';

describe('GET /createToken/:admin', () => {
  test('should return a JWT token', async () => {
    const res = await request(app).get('/createToken/Qler').expect(200);
    // expect(response.statusCode).toBe(200);
    console.log(res.text);
    const decoded = jwt.verify(res.text, secretKeys)
    expect(decoded.admin).toBe('Qler');
  });
});

test('Querry', async()=>{
  const response = await request(app).get('/bisection');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('[{\"idBisection\":1,\"Equation\":\"x-13^(1/4)\",\"XL\":1.5,\"XR\":2},{\"idBisection\":2,\"Equation\":\"x^3-x-2\",\"XL\":1,\"XR\":2},{\"idBisection\":3,\"Equation\":\"x^4-x-10\",\"XL\":2,\"XR\":5},{\"idBisection\":4,\"Equation\":\"y^4+1+2\",\"XL\":4,\"XR\":5}]');

})