const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[word.length - 1]);
// const results3 = map(words, word => word[Math.floor((word.length - 1) / 2)]);
// // console.log(results1);


// // TEST CODE
// assertArraysEqual(results1,['g','c','t','m','t']); // => pass
// assertArraysEqual(results2,['d','l','o','r','m']); // => fail
// assertArraysEqual(results3,['o','t','t','j','o']); // => fail