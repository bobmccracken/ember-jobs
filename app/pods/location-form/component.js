import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    this.set('location', {});
  },
  actions: {
    async save() {
      var locationAttributes = this.get('location');
      
      this.set('isSaving', true);

      try {
        await this.store.createRecord('location', locationAttributes).save();
      } finally {
        this.set('isSaving', false);
        this.sendAction('locationCreated');
      }
    }
  }                                   
});
