'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

it('should respond with a 500', () => {
  return mockRequest
    .get('/person')
    .then(results => {
      expect(results.status).toBe(500);
    }).catch(console.error);
});
it('should respond with a 200', () => {
  return mockRequest
    .get('/person?name=fred')
    // .send({ name: 'Fred' })
    .then(results => {
      expect(results.status).toBe(200);
    }).catch(console.error);
});