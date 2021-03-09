const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arr: [],

    getLength() {
        
    },

    addLink(value) {
        if (value === undefined) return this;

        this.arr.push(`( ${value} )`);
        return this;
    },

    removeLink(position) {
        if (position < 1 || position > this.arr.length || position === String(position)) {
          this.arr = [];
          throw new Error;
        }

        this.arr.splice((position - 1), 1)
        return this;
    },

    reverseChain() {
        this.arr.reverse();
        return this;
    },

    finishChain() {
        let res = this.arr.join('~~');
        this.arr = [];
        return res;
    }
};

module.exports = chainMaker;
