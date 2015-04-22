import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import json from '../helpers/json';
import text from '../helpers/text';
import { module, test } from 'qunit';
import { stubResolver } from '../helpers/container';

var application, server;

module('Acceptance: NewLocation', {
  beforeEach() {
    server = new Pretender();
    application = startApp({ }, function(app) {
      stubResolver(app, 'adapter:application', DS.RESTAdapter);
    });
  },

  afterEach() {
    server.shutdown();

    Ember.run(application, 'destroy');
  }
});

function isVisible(assert, selector) {
  assert.ok($(selector).is(':visible'), 'expected `' + selector + '` to be visible');
}

function isNotVisible(assert, selector) {
  assert.ok(!$(selector).is(':visible'), 'expected `' + selector + '` to NOT be visible');
}

test('visiting / and opening/closing the  new job modal', async function test(assert) {
  server.get('/jobs',      json(200, { jobs:      [] }));
  server.get('/companies', json(200, { companies: [] }));
  server.get('/locations', json(200, { locations: [] }));

  await visit('/');
  await click('#create-location');

  isVisible(assert, '.new-location-modal');

  await click('.our-modal');

  isNotVisible(assert, '.new-job-modal');
});

test('form data is successfully passed to server', async function test(assert) {
  server.get('/jobs',      json(200, { jobs:      [] }));
  server.get('/companies', json(200, { companies: [] }));
  server.get('/locations', json(200, { locations: [] }));
  
  var locationObj = {
    address: 'test address',
    city: 'test city',
    state: 'test state',
    zipcode: 'test zip'
  }

  server.post('/locations', function(request) {
    var requestLocation = JSON.parse(request.requestBody).location;
    
    assert.equal(requestLocation.address, locationObj.address);
    assert.equal(requestLocation.city, locationObj.city);
    assert.equal(requestLocation.state, locationObj.state);
    assert.equal(requestLocation.zipcode, locationObj.zipcode);
    
    return [201, {"Content-Type": "application/json"}, JSON.stringify(locationObj)];
  });

  await visit('/');
  await click('#create-location');
  isVisible(assert, '.new-location-modal');
  
  await fillIn('input#address', locationObj.address);
  await fillIn('input#city', locationObj.city); // you mis-named the id on this input. Why 'location'? It should be 'city'
  await fillIn('input#state', locationObj.state);
  await fillIn('input#zipcode', locationObj.zipcode); // you mis-named this id as well. Also the value.

  await click('#save');
  
  isNotVisible(assert, '.new-job-modal');

});
