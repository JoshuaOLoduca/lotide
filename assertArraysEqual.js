const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) console.log(
    `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertArraysEqual;