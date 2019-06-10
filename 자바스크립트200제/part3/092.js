//sort
const numArr1 = [2,0,4,3,1];
const numArr2 = [2,0,4,3,1];
const objArr = [
    {id:2, name:'Leo'},
    {id:0, name:'Ash'},
    {id:3, name:'Chloe'},
    {id:1, name:'Chloe'},
    {id:4, name:'Dean'}
];

numArr1.sort(function (a,b) {return a-b});
numArr2.sort(function (a,b) {return b-a});
objArr.sort(function (a,b) {
    if(a.name> b.name) return 1;
    else if(b.name>a.name) return -1;
    else return 0;
});

console.log(`오름차순: ${numArr1}`);
console.log(`내림차순: ${numArr2}`);
console.log(objArr);


//reverse-배열 순서를 반대로 나열
const str = 'abcdefghijklmnop';
const arr = str.split('');
arr.reverse();

console.log(arr.join(''));
