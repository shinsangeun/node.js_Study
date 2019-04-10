function sum() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOfto3 = sum(1,2,3);
console.log(sumOfto3);

function testArg() {
    var newArray = Array.prototype.slice.call(arguments);
    console.log(newArray);
    console.log(newArray.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a','b');