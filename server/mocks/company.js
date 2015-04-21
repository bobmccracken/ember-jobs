module.exports = function(app) {
  var express = require('express');
  var companyRouter = express.Router();

  companyRouter.get('/', function(req, res) {
    res.send({
      'company': [
        {
          id: 1,
          name: 'aeturnum',
          jobs: [1]
        },
        {
          id:2,
          name:'leapset',
          jobs: [2]
        },
        {
          id:3,
          name:'wso2',
          jobs: [1]
        }
      ]
    });
  });

  companyRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  companyRouter.get('/:id', function(req, res) {
    res.send({
      'company': {
        id: req.params.id
      }
    });
  });

  companyRouter.put('/:id', function(req, res) {
    res.send({
      'company': {
        id: req.params.id
      }
    });
  });

  companyRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/companies', companyRouter);
};
