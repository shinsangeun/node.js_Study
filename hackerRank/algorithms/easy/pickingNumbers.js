'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function pickingNumbers(a) {

    //solution 1
    var map = new Map();
    var maxCount = 0;
    for (var i = 0; i < a.length; i++) {
        var count = 0;
        if (!map.has(a[i])) {
            map.set(a[i]);
            for (var j = 0; j < a.length; j++) {
                if (a[j] == a[i] || a[j] == a[i] + 1) {
                    count++;
                }
            }
            maxCount = Math.max(maxCount, count);
        }
    }
    return maxCount;

    //solution 2
    var array = new Array;
    var maxCount = 0;
    for (var i = 0; i < a.length; i++) {
        var count = 0;
        if (array.indexOf(a[i]) == -1) {
            array.push(a[i]);
            for (var j = 0; j < a.length; j++) {
                if (a[j] == a[i] || a[j] == a[i] + 1) {
                    count++;
                }
            }
            maxCount = Math.max(maxCount, count);
        }
    }
    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
