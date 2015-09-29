import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name')
      };
      this.set('name', '');
      this.sendAction('saveCategory', params);
    }
  }
});
