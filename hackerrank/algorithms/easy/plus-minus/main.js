'use strict'

const fs = require('fs')

let inputString = fs.readFileSync('input/input01.txt', 'utf8')

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

function plusMinus(arr) {
  console.log(
    (arr.filter(i => i > 0).length / arr.length).toFixed(6) + '\n' +
    (arr.filter(i => i < 0).length / arr.length).toFixed(6) + '\n' +
    (arr.filter(i => i === 0).length / arr.length).toFixed(6)
  )
}

function main() {
  const n = parseInt(readLine(), 10)
  console.log(n)

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))

  plusMinus(arr)
}
