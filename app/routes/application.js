import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    postJob() {
      this.render('modals/new-job', {
        into: 'application',
        outlet: 'modal'
      });
    },
    
    createLocation() {
      this.render('modals/new-location', {
        into: 'application',
        outlet: 'modal'
      });
    },
      
    createCompany() {
      this.render('modals/new-company', {
        into: 'application',
        outlet: 'modal'
      });
    },
    listLocation() {
      this.render('modals/list-location', {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal() {
      this.disconnectOutlet({
        parentView: 'application',
        outlet: 'modal'
      });
    }
  }
});
