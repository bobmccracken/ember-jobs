import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    this.set('location', {});
  },
  actions: {
    async save() {
//      var jobAttributes = this.get('job');
//      
//      this.set('isSaving', true);
//
//      try {
//        await this.store.createRecord('job', jobAttributes).save();
//      } finally {
//        this.set('isSaving', false);
//        this.sendAction('jobCreated');
//      }
    }
  }                                   
});
