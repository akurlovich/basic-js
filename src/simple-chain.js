const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.length;
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this._checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this._deleteChain();
        throw new CustomError('Not implemented');
      }
      let index = position - 1;
      this.currChain.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new CustomError('Not implemented');
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    let chain = this._getChain();
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currChain.length = 0;
  },
  _checkIntegerNumber(num) {
    return typeof num === 'number' && num ^ 0 === num;
  },
  _getChain() {
    return this.currChain.join('~~');
  }
};

module.exports = chainMaker;
