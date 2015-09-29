import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    searchItem() {
      var searchItem = this.get('search');
      transitionTo('searchResult' searchItem);
    }
  }
});

//
// model() {
//   return this.store.findAll('listing');
// },
// actions: {
//   searchItem() {
//     var params = this.get('search');
//     debugger;
//     model.title.map(function(title) {
//       if (title === params) {
//         alert("found the term");
//       }
//     })
//   }
// }
