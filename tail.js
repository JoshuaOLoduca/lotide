//Excludes the first element of array and passes the result back
const tail = function(array) {
  let tailArr = [];

  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }

  return tailArr;
};

module.exports = tail;