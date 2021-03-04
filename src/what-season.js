const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = 'no-value') {
  if (date === 'no-value') return 'Unable to determine the time of year!';
  if (date instanceof Date) {
    // if (Object.prototype.toString.call(data) !== '[object Data]') throw new Error('Caught fake data!');
    
    let season = '',
        month = date.getMonth();
    // console.log(month);
    if (month >= 11 || month <= 1) {season = 'winter'}
      else if (month <= 4) {season = 'spring'}
        else if (month <= 7) {season = 'summer'}
          else season = 'autumn';
    return season;

    // let season = '';
    // if (typeof date == 'undefined') {
    //   let message = 'Unable to determine the time of year!';
    //   return message;
    // } 
    // // else if (isNaN(Date.parse(date)))
    // else if (!(date instanceof Date)) 
    // {
    //   throw new CustomError('Not implemented');
    //       // return false;
    //     } else {
    //     month = date.getMonth();
    //     // console.log(month);
    //     if (month >= 11 || month <= 1) {season = 'winter'}
    //       else if (month <= 4) {season = 'spring'}
    //         else if (month <= 7) {season = 'summer'}
    //           else season = 'autumn';
    //             // else season = 'error';
    //     // throw new CustomError('Not implemented');
    //     // remove line with error and write your code here
    //   };
    //   return season;
  }
  throw new Error('Wrong argument passed!');
};
// const date = new Date(2020, 15, 31)
// getSeason(date);