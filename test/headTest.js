const { expect } = require('chai');
const head   = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expected = 1;
    expect(head(input)).to.equal(expected);
  });

  it("returns '5' for ['5']", () => {
    const input = ['5'];
    const expected = '5';
    expect(head(input)).to.equal(expected);
  });

  it("returns undefined for [,1,1]", () => {
    const input = [,1,1];
    const expected = undefined;
    expect(head(input)).to.equal(expected);
  });

});