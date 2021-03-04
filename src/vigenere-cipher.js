const CustomError = require("../extensions/custom-error");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const tabulaRecta = [

];

const START_POSITION_CHARCODE = 65;

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }
  
  // encrypt() {
  //   throw new CustomError('Not implemented');
  //   // remove line with error and write your code here
  // }    
  // decrypt() {
  //   throw new CustomError('Not implemented');
  //   // remove line with error and write your code here
  // }
}

module.exports = VigenereCipheringMachine;
