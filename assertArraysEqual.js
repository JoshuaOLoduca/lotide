// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) console.log(
    `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) console.log(
    `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  else console.log(
    `⛑️⛑️⛑️ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(firstList, secondList) {
  let areSame = false;

  if (areSameLength(firstList, secondList)) {
    areSame = haveSameContents(firstList, secondList);
  }
  return areSame;
};

const haveSameContents = function(firstList, secondList) {
  let listLength = firstList.length;
  let areSame = false;

  for (let i = 0; i <= listLength; i++) {
    if (firstList[i] !== secondList[i]) {
      areSame = false;
      break;
    } else areSame = true;
  }

  return areSame;
};


const areSameLength = function(firstItem, secondItem) {
  let sameLength = true;
  if (firstItem.length !== secondItem.length) sameLength =  false;

  return sameLength;
};

// TEST CODE
assertArraysEqual([1,1],[1,'1']); // => fail
assertArraysEqual([1,1],[1,1]); // => fail