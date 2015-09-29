import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      newListing.save();
      params.category.save();
      this.transitionTo('category', params.category)
    },
    destroyListing(listing) {
      var category = listing.get('category').get('id');
      listing.destroyRecord();
      this.transitionTo('admin-category', category);
    }
  }
});
