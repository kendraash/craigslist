import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    },
    destroyCategory(category) {
      var listings = category.get('listings').then(function(listings) {
        listings.forEach(function(listing) {
          listing.destroyRecord();
        });
      });
      category.destroyRecord();
      this.transitionTo('admin');
    },
  }
});
