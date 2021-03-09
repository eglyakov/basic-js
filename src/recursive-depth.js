const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 0,
        count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {

            count = this.calculateDepth(arr[i]);

            if (count > result) result = count;              
        }
    }

    return result + 1;
  }
}; 