import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked() {
      this.sendAction('postJob');
    },
    locationButtonClicked() {
      this.sendAction('createLocation');
    },
    companyButtonClicked() {
      this.sendAction('createCompany');
    },
     locationlistButtonClicked() {
      this.sendAction('listLocation');
    }
  }
});
