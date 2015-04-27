import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  init() {
    this._super(...arguments);
    this.set('company', {});
  },
  selectedCompany:null,
  actions: {
    async save() {
      var companyAttributes = this.get('company');
      
      this.set('isSaving', true);

      try {
        await this.store.createRecord('company', companyAttributes).save();
      } finally {
        this.set('isSaving', false);
        this.sendAction('companyCreated');
      }
    }
  }                                    
});
