// Calculate number of inversions in array
// [4, 3, 2, 1] =>  6 inversions: 4 and 3, 4 and 2, 4 and 1, 3 and 2, 3 and 1, 2 and 1

function countInversions (array, index = 0, inversions = 0) {
  if (index < array.length) {
    for (let i = index + 1; i < array.length; i++) {
      if (array[index] > array[i]) {
        inversions++
      }
    }
    return countInversions(array, index + 1, inversions)
  } else {
    return inversions
  }
}

function countInversionsSecondSolution (array) {
  var numInversions = 0

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      numInversions += array[i] > array[j]
    }
  }

  return numInversions
}

function countInversionsThirdSolution (arr) {
  return arr
    .map((x, i) => arr.slice(i + 1).filter(y => y < x).length)
    .reduce((a, b) => a + b, 0)
}

console.log(countInversions([4, 3, 2, 1])) // 6

console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1])) //  30
