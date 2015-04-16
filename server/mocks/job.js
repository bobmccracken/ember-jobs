module.exports = function(app) {
  var express = require('express');
  var jobRouter = express.Router();

  jobRouter.get('/', function(req, res) {
    res.send({
      'job': [
        {
          id: 1,
          live: true,
          title: '.NET Developer', 
          company: 1,
          location: 'bla',
          type: 'IT',
          description: 'immediate'
        },
          {
              id:2,
              live:true,
              title:'Java Developer',
              comapany:2,
              location:'bla',
              type:'IT/QA',
              descripetion:'Strong OOP'
          }
              
      ]
    });
  });

  jobRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  jobRouter.get('/:id', function(req, res) {
    res.send({
      'job': {
        id: req.params.id
      }
    });
  });

  jobRouter.put('/:id', function(req, res) {
    res.send({
      'job': {
        id: req.params.id
      }
    });
  });

  jobRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/jobs', jobRouter);
};
