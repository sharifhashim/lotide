const middle = function(arr) {
  let newArr = []
  if (arr.length <= 2) {
    return newArr
  } else if (arr.length % 2 !== 0) {
    let mid = Math.floor(arr.length / 2)
    newArr.push(arr[mid])
    return newArr
  } else if (arr.length % 2 === 0) {
    let middleTwo = arr.length / 2
    newArr.push(arr[middleTwo - 1]) 
    newArr.push(arr[middleTwo])
    return newArr
  }
}


module.exports = middle;