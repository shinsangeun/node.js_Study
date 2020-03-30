// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let arrSort = ar.sort();
    let count=[];
    let rankSet = new Set(arrSort);
    let rankArray = Array.from(rankSet);

    for (let i = 0; i < rankArray.length; i++) {
        let num = 0;
        for (let j = 0; j < arrSort.length; j++) {
            if (rankArray[i] === arrSort[j]){
                num++;
            }
        }
        count.push(num);
    }
    return count.reduce((acc, cur) => acc + Math.floor(cur / 2),0);
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);

// [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
// [1, 1, 1, 1, 2, 3, 3, 3, 3, 3]
// [1, 2, 3]