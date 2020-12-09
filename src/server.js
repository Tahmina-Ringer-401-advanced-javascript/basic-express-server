'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
//log a request
const logRequest = require('./middleware/logger');
//validate a request
const validator = require('./middleware/validator');

//body parser - accepts json
app.use(express.json());
// express works by saying 'use this function as a piece of middleware'
// this will apply to ALL routes
app.use(logRequest);
app.use(validator);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

//query
app.get('/person', validator, (req, res) => {
  res.status(200).json(req.query);
  console.log('testing validator _____________');
});

app.use(errorHandler);
app.use('*', notFoundHandler);

function start(PORT){
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start,
};