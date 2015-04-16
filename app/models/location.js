import DS from 'ember-data';

export default DS.Model.extend({
  
  address:    DS.attr('string'),
  company:  DS.belongsTo('company', { async: true }),
  jobs: DS.hasMany('job', {async:true}),
  city: DS.attr('string'),
  state:     DS.attr('string'),
  zipcode: DS.attr('string'),
  

});
