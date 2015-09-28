import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: true,
  actions: {
    save() {
      debugger;
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        price: this.get('price'),
        category: this.get('category'),
        // Come back to for saving date
        dateListed: new Date()
      }
      this.sendAction('saveListing', params);
    }
  }
});
