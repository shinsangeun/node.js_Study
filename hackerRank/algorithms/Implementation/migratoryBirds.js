function migratoryBirds(arr) {
    let map = {}, maxCount = 0, output = [];
    for (let i = 0; i < arr.length; i++) {
        console.log("1==>", map[arr[i]]);

        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }

        // getting max count
        if (map[arr[i]] > maxCount) {
            console.log("2==>", map[arr[i]], maxCount);
            maxCount = map[arr[i]];
        }
    }


    for (let j = 0; j < arr.length; j++) {
        console.log("3==>", map[arr[j]], maxCount);
        if (map[arr[j]] === maxCount) {
            output.push(arr[j]);
            console.log("4==>", output);
        }
    }

    console.log("5==>", output);
    return Math.min(...output);
}

//migratoryBirds([ 1,2 ,2, 5, 2 ,5 ,5 ,5 ,2 ,5 ,5 ,5 ,5 ,2 ,5 ,1 ,5 ,2 ,5 ,5 ,2 ,2 ,5 ,5 ,2 ,5 ,2 ,5 ,5 ,2 ,2 ,2 ,2 ,2 ,2 ,5,2 ,1 ,2 ,2, 5, 2 ,5 ,5 ,5 ,2 ,5 ,5 ,5 ,5 ,2 ,5 ,1 ,5 ,2 ,5 ,5 ,2 ,2 ,5 ,5 ,2 ,5 ,2 ,5 ,5 ,2 ,2 ,2 ,2 ,2 ,2 ,5,2,1, 2 ,2, 5, 2 ,5 ,5 ,5 ,2 ,5 ,5 ,5 ,5 ,2 ,5 ,1 ,5 ,2 ,5 ,5 ,2 ,2 ,5 ,5 ,2 ,5 ,2 ,5 ,5 ,2 ,2 ,2 ,2 ,2 ,2 ,5,2 ]);
migratoryBirds([1,4,4,4,5,3 ]);