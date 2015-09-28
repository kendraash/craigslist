import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      params.category.save();
      this.transitionTo('category', params.category)
    }
  }

});
