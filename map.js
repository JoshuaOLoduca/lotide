const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results
};

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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length - 1]);
const results3 = map(words, word => word[Math.floor((word.length - 1) / 2)]);
// console.log(results1);


// TEST CODE
assertArraysEqual(results1,['g','c','t','m','t']); // => pass
assertArraysEqual(results2,['d','l','o','r','m']); // => fail
assertArraysEqual(results3,['o','t','t','j','o']); // => fail