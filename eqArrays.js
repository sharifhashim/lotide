const eqArrays = function(arr1, arr2) {
  let x = 0;if (arr1.length !== arr2.length) {
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


module.exports = eqArrays;