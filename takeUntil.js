const takeUntil = function(array, callback) {
  let slice = [];

  for (let item of array) {
    if (callback(item)) break;
    slice.push(item);
  }

  return slice;
};

module.exports = takeUntil;
// TEST DATA
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// // console.log(results1);

// // console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// // console.log(results2);


// // TEST CODE
// assertArraysEqual(results1,[1,2,5,7,2]); // => pass
// assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]); // => pass


