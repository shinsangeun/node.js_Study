function migratoryBirds(arr) {
    let number = [];

    arr.sort(function(a,b) {
        return a-b;
    });

    for(let i = 0; i < arr.length;i++){
        if(arr[i] == arr[i+1]){
            number.push(arr[i]);
            if((number.length ==2) && (number[0] == number[1])){
                return Math.min(...number);
            }
        }else{
            continue;
        }

    }

    let test = [];
    number.find(function (element) {
        if(number[element] == number[element +1]){
            test.push(number[element]);
        }else{
            return;
        }
    });
    return test[0];
}

migratoryBirds([1, 4,4,4,5,3]);