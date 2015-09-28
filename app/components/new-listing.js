import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    addNewListing() {
      this.set("addNewListing", true);
    },
    save() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        price: this.get('price'),
        category: this.get('category'),
        dateListed: new Date()
      }
      this.set("addNewListing", false);
      this.sendAction('saveListing', params);
    }
  }
});
