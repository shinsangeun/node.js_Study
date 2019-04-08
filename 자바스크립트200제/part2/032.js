/*
비구조화 할당
*/
var obj = {a: 1, b:2, c:30, d:44, e:50};

var {a,c} = obj;
console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

//a 값이 있으면 a로 할당, undefined 일때는 10으로 저장
var {a:newA=10, f:newF=5} = obj;
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);

var arr = [1,2, 30, 44, 50];

var[b,c, ... rest] = arr;
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1];
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a,f] = [f,a];
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr() {
    return [1,2,3,4,5,6];
}
[a,,,,,f] = getArr();
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);
