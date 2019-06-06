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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the squares function below.
function squares(a, b) {
    //solution1
    var q;
    var arr = new Array;
    var count=0;

    for(var i = a; i<=b; i++){
        arr.push(i);
       // console.log("arr=>" + arr);
    }

    for(var k = 1; k<=arr.length; k++){
        pow = Math.pow(k,2);
        console.log(k, pow);
        if(arr.indexOf(pow) !== -1 ){
            count++;
            console.log("count==>" + Math.max(count));
        }
    }
    return count;
    console.log(count);

    //solution2
    console.log(Math.floor(Math.sqrt(b))-Math.ceil(Math.sqrt(a))+1);
}

//squares(59,999999922);
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const ab = readLine().split(' ');

        const a = parseInt(ab[0], 10);

        const b = parseInt(ab[1], 10);

        let result = squares(a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
