import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';
import json from '../helpers/json';
import text from '../helpers/text';
import {
    module, test
}
from 'qunit';
import {
    stubResolver
}
from '../helpers/container';

var application, server;

module('Acceptance: NewCompany', {
    beforeEach() {
            server = new Pretender();
            application = startApp({}, function (app) {
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
  await click('#create-company');

  isVisible(assert, '.new-company-modal');

  await click('.our-modal');

  isNotVisible(assert, '.new-company-modal');
});

test('form data is successfully passed to server', async function test(assert) {
  server.get('/jobs',      json(200, { jobs:      [{ id: 1, live: true, type: 'UI Engineer',descripetion:'dflkvmdl',applyURL:'fvdscvds'  }] }));
  server.get('/companies', json(200, { companies: [] }));
  server.get('/locations', json(200, { locations: [] }));


        var companyObj = {
            name: 'test company',
            logo:'',
            url:'bcs@uor'

        }

        server.post('/companies', function (request) {
            var requestLocation = JSON.parse(request.requestBody).company;

            assert.equal(requestLocation.name, companyObj.name);
            assert.equal(requestLocation.logo, companyObj.logo);
            assert.equal(requestLocation.url, companyObj.url);


            return [201, {
                "Content-Type": "application/json"
            }, JSON.stringify(companyObj)];
        });

        await visit('/');
        await click('#create-company');
        //isVisible(assert, '.new-company-modal');
        var bgimage=window.location.pathname;
        //alert(bgimage);
        await fillIn('input#name', companyObj.name);
        await fillIn('input#logo', bgimage.pathname);
        await fillIn('input#url', companyObj.url);
        await click('#save');
        isVisible(assert, '.new-company-modal');
        isNotVisible(assert, '.new-company-modal');

    });

