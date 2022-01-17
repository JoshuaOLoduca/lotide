const { expect } = require('chai');
const middle = require('../middle');

describe("#middle", () => {

  it('should return 1 element of odd array', () => {
    
    const input = [1, 2, 3, 4, 5];
    const output = middle(input).length;
    const expected = 1;

    expect(output).to.equal(expected);
  });

  it('should return middle([3]) when passsed [1, 2, 3, 4, 5]', () => {
    
    const input = [1, 2, 3, 4, 5];
    const output = middle(input);
    const expected = [3];

    expect(output).to.deep.equal(expected);
  });

  it('should return 2 elements of even array', () => {
    
    const input = [1, 2, 3, 4];
    const output = middle(input).length;
    const expected = 2;

    expect(output).to.equal(expected);
  });

  it('should return middle([2,3]) when passsed [1, 2, 3, 4, 5]', () => {
    
    const input = [1, 2, 3, 4];
    const output = middle(input);
    const expected = [2,3];

    expect(output).to.deep.equal(expected);
  });

});