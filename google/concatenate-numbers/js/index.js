// (2-4), (4-5), (4-5) <- input
const listOfRanges = [
  { start: 2, end: 4 },
  { start: 4, end: 5 },
  { start: 4, end: 5 }
]

// 244, 245, 254, 255, 344, 345, 354, 355, 444, 445, 454, 455 <-  output
const findConcatenateNumbers = (listOfRanges, index = 0, temp = '') => {
  if (index < listOfRanges.length) {
    let { start, end } = listOfRanges[index]

    for (let i = start; i <= end; i++) {
      const newTemp = temp + i
      findConcatenateNumbers(listOfRanges, index + 1, newTemp.toString())
    }
  } else {
    console.log(temp)
  }
}

findConcatenateNumbers(listOfRanges)

console.log('================================')

// 244, 245, x254x, 255, 344, 345, x354x, 355, 444, 445, x454x, 455 <- output
const findConcatenateNumbersIncreasingOrder = (
  listOfRanges,
  index = 0,
  temp = '',
  min
) => {
  if (index < listOfRanges.length) {
    let { start, end } = listOfRanges[index]

    for (let i = start; i <= end; i++) {
      if (min && min > i) {
        i = min
      }

      const newTemp = temp + i
      findConcatenateNumbersIncreasingOrder(
        listOfRanges,
        index + 1,
        newTemp.toString(),
        (min = i)
      )
    }
  } else {
    console.log(temp)
  }
}

findConcatenateNumbersIncreasingOrder(listOfRanges)
