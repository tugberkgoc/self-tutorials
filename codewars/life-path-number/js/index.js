// year  :  1 + 8 + 7 + 9 = 25  -->  2 + 5 = 7
// month :  0 + 3 = 3
// day   :  1 + 4 = 5
// result:  7 + 3 + 5 = 15  -->  1 + 5 = 6

function lifePathNumber (dateOfBirth) {
  dateOfBirth = dateOfBirth
    .replace(/-/g, '')
    .split('')
    .map(Number)
    .reduce((pre, val) => pre + val, 0)
  if (dateOfBirth.toString().length === 1) {
    return dateOfBirth
  }
  return lifePathNumber(dateOfBirth.toString())
}

function lifePathNumberSecondSolution (dateOfBirth) {
  return dateOfBirth.replace(/\D/g, '') % 9 || 9
}

console.log(lifePathNumber('1879-03-14')) // 6

console.log(lifePathNumberSecondSolution('1879-03-14')) // 6
