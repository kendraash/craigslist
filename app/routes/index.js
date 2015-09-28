import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },
  action: {
    saveAnswer(params) {
      var newCategory = this.storecreateRecord('category', params);
      newCategory.save();
      params.category.save();
      // change the route below later.
      this.transitionTo('index');
    }
  }
});
