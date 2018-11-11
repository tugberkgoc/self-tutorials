'use strict';

const fs = require('fs');

var inputString = '';

fs.readFile("/diagonal-difference/input/input00.txt", 'utf8', function(err, contents) {
    console.log(contents);
    inputString = contents
});

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    console.log(arr);
}

function main() {
    const ws = fs.createWriteStream("/diagonal-difference/output/output00.txt"); // process.env.OUTPUT_PATH

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
