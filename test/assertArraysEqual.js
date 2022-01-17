const assertArraysEqual = require('../assertArraysEqual');
// TEST CODE
assertArraysEqual([1,1],[1,'1']); // => fail
assertArraysEqual([1,1],[1,1]); // => fail