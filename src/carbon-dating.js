const { match } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === 'no-value') return false;
  if (typeof sampleActivity !== 'string') return false;
  let numeric = parseFloat(sampleActivity);
  if (isNaN(numeric)) return false;
  if (numeric > MODERN_ACTIVITY) return false;
  if (numeric === 0 || numeric < 0) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / numeric) / k);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
