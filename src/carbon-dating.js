const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string') return false;
    sampleActivity = +sampleActivity

    if (sampleActivity == false 
    || Number.isNaN(sampleActivity)
    || sampleActivity <= 0
    || sampleActivity > MODERN_ACTIVITY)  {
        return false;
    }
 
    let k = 0,
        t = 0;

    k = 0.693 / HALF_LIFE_PERIOD;
    t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

    return t;
};
 