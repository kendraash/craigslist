import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('category')
      };
      this.sendAction('saveCategory', params);
    }
  }
});
