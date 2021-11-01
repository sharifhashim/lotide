const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// console.log(middle([]))
// console.log(middle([1]))
// console.log(middle([1,2]))
// console.log(middle([1,2,3,4,5]))
// console.log(middle([1,2,3,4,5,6]))
// console.log(middle([1,2,3,4,5,6,7,8]))

assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [1,2,3,4,5,6,7,8])