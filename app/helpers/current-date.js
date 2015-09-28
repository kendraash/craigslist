import Ember from 'ember';

export function currentDate(params) {
  var date = params[0];
  return moment(date).format('LL');
}

export default Ember.Helper.helper(currentDate);
