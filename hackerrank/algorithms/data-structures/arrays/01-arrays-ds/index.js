/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray (arr) {
  const reversedArr = []

  for (let i = arr.length; i > 0; i--) {
    reversedArr.push(arr[i - 1])
  }

  return reversedArr
}

const result = reverseArray([1, 2, 3, 4])

console.log(result) // [4, 3, 2, 1]
