var x= 5;   //number
var y = 'five';     //string
var isTrue = true;  //boolean
var empty = null;       //null
var nothing; //undefined
var sym = Symbol('me');     //Symbol

var item = {
    price: 5000,
    count: 10
};  //object

var fruits = ['apple', 'banana',' kiwi'];    //array   
var addFruit = function (fruit) {
    fruits.push(fruit);
}   //function
addFruit('watermelon');
console.log(fruits);