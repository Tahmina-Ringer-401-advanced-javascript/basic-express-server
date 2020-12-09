'use strict';

function validator(req, res, next) {
  if(req.query.name) {
    next();
  } else {
    next('Req does not contain a name');
  }
}

module.exports = validator;