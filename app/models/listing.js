import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  price: DS.attr(),
  dateListed: DS.attr(),
  category: DS.belongsTo('category', { async: true})
});
