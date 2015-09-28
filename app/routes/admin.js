import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  actions: {
    saveCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      params.category.save();
      // change the route below later.
      this.transitionTo('admin');
    }
  }
});
