import Ember from 'ember';

export function currencyFormat(params) {
  
  let value=  params[0],
   dollars=  Math.floor(value),
   cents=  (value % 1)*100,

   sign=  '$';

  if(cents.toString().length=== 1) {
    cents = cents + '0';
  }
  return (sign + dollars + '.' + cents);

}

export default Ember.Helper.helper(currencyFormat);
