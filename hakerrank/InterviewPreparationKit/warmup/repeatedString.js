// Complete the repeatedString function below.
function repeatedString(s, n) {
  //  var s ='aba';
    var result = s.length * 3;

    console.log(result);

    if (result % s ==0) {
        console.log(result*2);
        return n*2;
    } else {
        console.log(result*2+1);
        return n*2+1;
    }

}

repeatedString('aba',10);