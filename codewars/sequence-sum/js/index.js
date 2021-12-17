// inputs: start, end, step
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  if (begin <= end) {
    return begin + sequenceSum(begin + step, end, step)
  }
  return 0
}

const sequenceSumSecondSolution = (begin, end, step) => {
  // May the Force be with you
  let result = []

  for (let i = begin; i <= end; i = i + step) {
    result.push(i)
  }

  return result.reduce((a, e) => (a += e), 0)
}

console.log(sequenceSum(2, 6, 2)) // 12

console.log(sequenceSumSecondSolution(2, 6, 2)) // 12
