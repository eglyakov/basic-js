const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, o) {
  let result = '',
      addRes = '';
  
  o.repeatTimes === undefined ? o.repeatTimes = 1 : o.repeatTimes;
  o.separator === undefined ? o.separator = '+' : o.separator;
  o.addition === undefined ? o.addition = '' : o.addition;
  o.additionRepeatTimes === undefined ? o.additionRepeatTimes = 1 : o.additionRepeatTimes;
  o.additionSeparator === undefined ? o.additionSeparator = '|' : o.additionSeparator;

  for (let i = 1; i <= o.additionRepeatTimes; i++ ) {
    if(i == o.additionRepeatTimes) {
        addRes += o.addition;
    } else {
        addRes += o.addition + o.additionSeparator;    
    }
  }

  for (let i = 1; i <= o.repeatTimes; i++) {
    if (i == o.repeatTimes) {
        result += str + addRes;
    } else {
        result += str + addRes + o.separator;
    }
  }

  return result;
};
  