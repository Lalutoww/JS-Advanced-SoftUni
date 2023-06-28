const expect = require('chai').expect;
const isOddOrEven = require('../02-evenorodd');

describe("Test Even or Odd functionality", function () {
    it("Test for undefined", function () {
      expect(isOddOrEven(1)).to.equal(undefined);
    });
  
    it("Test for even", function () {
      expect(isOddOrEven("abcd")).to.equal("even");
    });
  
    it("Test for odd", function () {
      expect(isOddOrEven("abc")).to.equal("odd");
    });
  });
