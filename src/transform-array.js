const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'Error';
  }
  
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
        i++;
        
    } else if (arr[i] == '--discard-prev') {
        if (arr[i - 2] != '--discard-next' ) {
            newArr.pop();
        } else {
            continue;
        }

    } else if (arr[i] == '--double-next') {
        if (arr[i + 1] !== undefined){
            newArr.push(arr[i + 1])
        } else {
            continue;
        }

    } else if (arr[i] == '--double-prev') {
        if (arr[i - 1] && arr[i - 2] != '--discard-next' ) {
            newArr.push(arr[i - 1])
        } else {
            continue;
        }

    } else {
        newArr.push(arr[i]);
    }
  }

  return newArr;

  console.log(newArr)

};
