function simpleArraySum(ar) {
    // Write your code here
    let result = 0;
    for(let i = 0; i < ar.length; i++){
        result = result + parseInt(ar[i])
    }
    return result;
}

simpleArraySum([1,2,3])