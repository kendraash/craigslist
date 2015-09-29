import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('listing');
  },
  actions: {
    searchDB(searchItem) {
      model.title.map(function(title) {
        if (title === searchItem) {
          alert("found the term");
        }
      })
    }
  }
});
