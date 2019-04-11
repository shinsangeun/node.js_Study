hello();
function hello() {
    console.log('hello');
}

//let
if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);
console.log(blockScopeValue);

let value = 5;
if (true) {
    console.log(value);
    let value = 3;
}

//const
const CONST_USER = {name: 'key', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'key2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'key3'}