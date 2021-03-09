const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1,
      seconds = turns / (turnsSpeed / 3600);

  return {
      turns,
      seconds: Math.floor(seconds)
  };
}
