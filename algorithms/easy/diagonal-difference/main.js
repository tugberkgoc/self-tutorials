'use strict'

const fs = require('fs')

let inputString = fs.readFileSync('input/input00.txt', 'utf8')

let currentLine = 0

function start() {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''))

  main()
}

start()

function readLine() {
  return inputString[currentLine++]
}

function diagonalDifference(arr) {
  let primaryDiag = 0
  let secondDiag = 0
  let length = arr.length

  for (var i = 0, indexLength = length - 1; i < length; i++) {
    primaryDiag += arr[i][i]
    secondDiag += arr[i][indexLength]
    indexLength -= 1
  }

  console.log(Math.abs(primaryDiag - secondDiag))
  return Math.abs(primaryDiag - secondDiag)
}

function main() {
  const ws = fs.createWriteStream("output/output00.txt")

  const n = parseInt(readLine(), 10)

  let arr = Array(n)

  for (let i = 0; i < n; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  const result = diagonalDifference(arr)

  ws.write(result + '\n')

  ws.end()
}
