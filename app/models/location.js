import DS from 'ember-data';

export default DS.Model.extend({
  
  address:    DS.attr('string'),
  company:  DS.belongsTo('company', { async: true }),
  city: DS.attr('string'),
  state:     DS.attr('string'),
 zipcode: DS.attr('string'),
  

}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            address: "105/b",
            city: "nittambuwa",
            state:"gampaha",
            zipcode:"11880",
            company: 1,
            
        }
    ]
});
