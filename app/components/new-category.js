import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('category')
      };
      // The line below throws an error that doesn't affect the save process
      // but it looks bad
      this.set('category', '');
      this.sendAction('saveCategory', params);
    }
  }
});
