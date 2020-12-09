'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server',  () => {
  it('should respond with a 404 on bad route', () => {
    return mockRequest
      .get('/bananas')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });
  it('respond with a 404 on bad method', () => {
    return mockRequest
      .post('/person')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });

});