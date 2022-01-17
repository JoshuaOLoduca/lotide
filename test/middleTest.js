const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3], true); // => true
assertArraysEqual(middle([1, 2, 3]),[2], true); // => true
assertArraysEqual(middle([1, 2, 3, 4]),[2,3], true); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4], true); // => true