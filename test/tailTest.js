const { expect } = require('chai');
const tail = require('../tail');

describe("#tail", () => {

  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = tail(input);
    const expected = ["Lighthouse", "Labs"];

    expect(output).to.deep.equal(expected);
  });

  it('result should start with "Lighthouse" when passed ["Hello", "Lighthouse", "Labs"]', () => {
    
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = tail(input)[0];
    const expected = "Lighthouse";

    expect(output).to.equal(expected);
  });

  it("should NOT modify original array", () => {
    
    const input = ["Hello", "Lighthouse", "Labs"];
    const expected = [...input];
    tail(input);

    expect(input).to.deep.equal(expected);
  });

});