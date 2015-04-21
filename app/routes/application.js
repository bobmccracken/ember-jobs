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

    closeModal() {
      this.disconnectOutlet({
        parentView: 'application',
        outlet: 'modal'
      });
    }
  }
});
