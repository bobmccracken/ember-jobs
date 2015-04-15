import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  logo: DS.attr('string'),
  url:  DS.attr('string'),
  jobs: DS.hasMany('job', { async: true }),
  location: DS.hasMany('location', { async: true }),
  
});
