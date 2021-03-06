const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';

  let toString = {}.toString;
  if (!(toString.call(date) == '[object Date]' )) throw 'Error';
  
  let month = date.getMonth();

  if (month >= 2 && month <= 4) return 'spring';
  else if (month >= 5 && month <= 7) return 'summer';
  else if (month >= 8 && month <= 10) return 'autumn';
  else return 'winter';
};
