const eqArrays = require('./eqArrays');

const eqObjects = function(firstObj, secondObj) {
  let areEqual = false;
  let haveSameKeys = sameKeys(firstObj, secondObj);
  let haveSameValue = sameValues(firstObj, secondObj);

  areEqual = haveSameKeys && haveSameValue;

  return areEqual;
};

const sameValues = function(firstObj, secondObj) {
  let valuesAreSame = true;

  for (let key in firstObj) {
    if (typeof(firstObj[key]) === "object") {
      if (Array.isArray(firstObj[key])) {
        if (eqArrays(firstObj[key], secondObj[key])) continue;
      } else if (sameValues(firstObj[key], secondObj[key])) continue;
    } else if (firstObj[key] === secondObj[key]) continue;

    valuesAreSame = false;
    break;
  }

  return valuesAreSame;
};

const sameKeys = function(firstObj, secondObj) {
  let haveSameKeys = false;
  let firstObjKeys = Object.keys(firstObj);
  let secondObjKeys = Object.keys(secondObj);
  let haveSameKeyLength = firstObjKeys.length === secondObjKeys.length;


  if (haveSameKeyLength) {
    for (let key1 of firstObjKeys) {

      for (let key2 of secondObjKeys) {
        if (key1 === key2) {
          haveSameKeys = true;
          break;
        }
        haveSameKeys = false;
      }

      if (!haveSameKeys) break;
    }
  }
  return haveSameKeys;
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// console.log(eqObjects(
//   { a: { z: 1 }, b: 2 },
//   { a: { z: 1 }, b: 2 })); // => true

// console.log(eqObjects(
//   { a: { y: 0, z: 1 }, b: 2 },
//   { a: { z: 1}, b: 2 })); // => false
// console.log(eqObjects(
//   { a: { y: 0, z: 1 }, b: 2 },
//   { a: 1, b: 2 })); // => false