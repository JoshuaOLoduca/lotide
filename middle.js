// FUNCTION IMPLEMENTATION
const middle = function(list) {
  let middleOfList = [];
  let length = list.length;

  if (length <= 2) return middle;

  if (isEven(length)) {
    let start = length / 2 - 1;
    let end = start + 2;
    middleOfList = list.slice(start,end);
  } else {
    middleOfList.push(list[Math.floor(length / 2)]);
  }

  return middleOfList;
};

const isEven = function(num) {
  return num % 2 === 0;
};

const assertArraysEqual = function(arrayOne, arrayTwo, expectedResult) {

  assertEqual(eqArrays(arrayOne, arrayTwo), expectedResult);
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
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3], true); // => true
assertArraysEqual(middle([1, 2, 3]),[2], true); // => true
assertArraysEqual(middle([1, 2, 3, 4]),[2,3], true); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4], true); // => true