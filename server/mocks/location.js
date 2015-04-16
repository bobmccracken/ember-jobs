module.exports = function(app) {
  var express = require('express');
  var locationRouter = express.Router();

  locationRouter.get('/', function(req, res) {
    res.send({
      'location': [
        {
            id: 1,
            address: "105/b",
            city: "nittambuwa",
            state:"gampaha",
            zipcode:"11880",
            company: 1,
            jobs: [1],
        }
      ]
    });
  });

  locationRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  locationRouter.get('/:id', function(req, res) {
    res.send({
      'location': {
        id: req.params.id
      }
    });
  });

  locationRouter.put('/:id', function(req, res) {
    res.send({
      'location': {
        id: req.params.id
      }
    });
  });

  locationRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/locations', locationRouter);
};
