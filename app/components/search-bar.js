import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchItem() {
      var params = {
        searchItem: this.get('searchThing'),
      }
      this.transitionTo('searchResult', params.searchItem);
    }
  }
});
