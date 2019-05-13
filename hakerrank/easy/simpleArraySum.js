'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

main();
});

function readLine() {
    return inputString[currentLine++];
}

////배열의 합 구하기
function simpleArraySum(ar) {
    var num = new Array(1, 2, 3, 4, 10.11);
    var result = 0.0;

    for (var i = 0; i < ar.length; i++)
        result += ar[i];
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arCount = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = simpleArraySum(ar);
    ws.write(result + "\n");
    ws.end();
}
