import DS from 'ember-data';

export default DS.Model.extend({
  live:     DS.attr('boolean'),
  title:    DS.attr('string'),
  company:  DS.belongsTo('company', { async: true }),
  location: DS.belongsTo('location', {async: true}),
  type:     DS.attr('string'),
  description: DS.attr('string'),
  postedAt: DS.attr('date'),
  applyURL: DS.attr('string')
});
