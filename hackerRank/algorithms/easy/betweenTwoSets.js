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

function getTotalX(a, b) {
    var validCount = 0;

    for(var x = 1; x <= 100; x++){
        if(a.every(int => (x % int ==0))){
            if (b.every(int => (int %x == 0))){
                validCount++;
            }
        }
    }
    console.log(validCount);
    return validCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}

