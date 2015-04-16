module.exports = function(app) {
  var express = require('express');
  var locationRouter = express.Router();

  locationRouter.get('/', function(req, res) {
    res.send({
      'location': [
        {
            id: 1,
            address: "197",
            city: "nugegoda",
            state:"colombo",
            zipcode:"11880",
            company: 1,
            jobs: [1],
        },
          {
            id: 2,
            address: "976",
            city: "ethulkotte",
            state:"colombo",
            zipcode:"12222",
            company: 2,
            jobs: [2],
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
