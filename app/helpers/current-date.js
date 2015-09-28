import Ember from 'ember';

export function currentDate(params/*, hash*/) {
  return moment().format('LL');
}

export default Ember.Helper.helper(currentDate);
