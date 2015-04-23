import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ember-jobs/tests/helpers/start-app';

var application;

module('Acceptance: New job test1', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});



test('posting a new job', async function test(assert) {
  server.get('/jobs',      json(200, { jobs:      [] }));
  server.get('/companies', json(200, { companies: [] }));
  server.get('/locations', json(200, { locations: [] }));
  
  var locationObj = {
    address: 'test address',
    city: 'test city',
    state: 'test state',
    zipcode: 'test zip code'
  }
  
  var companyObj = {
    name: 'test company name',
    logo: 'test logo',
    url: 'test url'
   
  }

  
  var jobObj = {
    live: true,
    title: 'test title',
    type: 'test type',
    description: 'test description',
    applyURL:'jkfnvd/vdfnjisvn',
    postedAt:'2015/04/22'
    
  }


  server.post('/jobs', function(request) {
    var requestLocation = JSON.parse(request.requestBody).jobs;
    
    assert.equal(requestLocation.title, jobObj.title);
    assert.equal(requestLocation.type, locationObj.type);
    assert.equal(requestLocation.description, locationObj.description);
    
    
    return [201, {"Content-Type": "application/json"}, JSON.stringify(jobObj)];
  });

  await visit('/');
  await click('#post-job');
  isVisible(assert, '.new-job-modal');
  
  await fillIn('input#title', locationObj.title);
  await fillIn('input#type', locationObj.type); 
  await fillIn('input#description', locationObj.description);
 

  await click('#save');
  
  isNotVisible(assert, '.new-job-modal');

});