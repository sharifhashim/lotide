const eqArrays = function(arr1, arr2) {
  let x = 0;
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let value1 = arr1[i];
    do {
      let value2 = arr2[x];
      if (value1 !== value2) {
        return false;
      } else if (value1 === value2) {
        x = x + 1;
        break;
      }
    }
    while (x < arr2.length);
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed`)
  } else {
    console.log(`✅✅✅ Assertion Passed`)
  }
}


assertArraysEqual([1,2,3], [1,2,3])
assertArraysEqual([3,2,1], [1,2,3])
assertArraysEqual([1,2,3], [1,2,1])