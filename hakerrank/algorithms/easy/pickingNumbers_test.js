function pickingNumbers(a) {
//solution 1
     a = [1,2,2,3,1,2];
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
            console.log(maxCount,count);
            maxCount = Math.max(maxCount, count);
        }
    }
    console.log("result = >" +maxCount);
    return maxCount;
}

pickingNumbers([4,6,5,3,3,1]);



function pickingNumber2(a) {
//solution 2
    a = [1,2,2,3,1,2];
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
            console.log(maxCount,count);
            maxCount = Math.max(maxCount, count);
        }
    }
    console.log("result = >" +maxCount);
    return maxCount;
}

pickingNumber2([4,6,5,3,3,1]);

