import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    this.set('job', {});
  },
  selectedCompany:null,
  actions: {
    async save() {
      var jobAttributes = this.get('job');
      
      this.set('isSaving', true);

      try {
        await this.store.createRecord('job', jobAttributes).save();
//        await this.store.createRecord('company', companyAttributes).save();
//        await this.store.createRecord('location', locationAttributes).save();
      } finally {
        this.set('isSaving', false);
        this.sendAction('jobCreated');
      }
    }
  }
  ,
  location:function(){
      return this.store.findAll('location');                              
  }.property(),
      
      company:function(){
          return this.store.findAll('company');
      }.property()                                    
});
