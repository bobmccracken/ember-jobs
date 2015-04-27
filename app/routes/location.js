import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    // even though we do this in the application route, it should get cached, so
    // it won't actually duplicate any work.
    var locations = await this.store.find('location');

    return locations;
  }
});
