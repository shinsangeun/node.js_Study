function Person(name, ages) {
    this.name = name;
    this.ages = ages;
}

Person.prototype.walk = function (speed) {
    console.log(speed + 'km 속도로 걸어 갑니다.');
}

var person01 = new Person('사람1',20);
var person02 = new Person('사람2', 30);

console.log(person01.name + '객체의 walk(10)을 호출::');
person01.walk(10);

//console.log(A+B);

var person = {
    age: 26,
    name: 'sse',
    add : function (a,b) {
        return a+b;
    }
};

console.log('더하기:%d' , person.add(10,10));
// person['age']=25;
// person['name']='sse';
//
// person.add= function add(a,b) {
//     return a+b;
//     //a+b;
// };
//
// //var result = add(10,10);
// console.log( person.add(10+10));
