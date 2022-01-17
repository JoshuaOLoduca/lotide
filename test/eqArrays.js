const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// // TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true

// // Failed
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true

// // Failed
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));// => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false