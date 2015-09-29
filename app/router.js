import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('category', {path: '/category/:category_id'});
  this.route('listing', {path: '/listing/:listing_id'});
  // this.route('aplication')
  this.route('admin-category', {path: '/admin-category/:category_id'});
  this.route('searchResult', {path: '/search-results/:searchItem'});
});

export default Router;
