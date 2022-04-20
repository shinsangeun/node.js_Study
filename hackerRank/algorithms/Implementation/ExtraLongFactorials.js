function extraLongFactorials(n) {
    let result = 1;
    for(let i = 0; i <= n-1 ; i++){
        result *= (n-i);
    }
    console.log("result2==>", BigInt(result).toString());
    return BigInt(result).toString()
}

extraLongFactorials(25);