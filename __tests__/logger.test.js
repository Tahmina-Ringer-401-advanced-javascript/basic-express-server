'use strict';

const loggerMiddleware = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {}; 
  let next = jest.fn();

  beforeEach(() => {
    // attach to the console
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    //puts the console back
    consoleSpy.mockRestore();
  });
  
  it('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
});