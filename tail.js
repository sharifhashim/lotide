const assertEqual = require('./assertEqual')

const tail = function(arr) {
  let newArr = [];
  arr.shift();
  newArr = arr;
  return newArr;
};

module.exports = tail;