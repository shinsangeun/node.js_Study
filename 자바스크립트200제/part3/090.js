//indexOf-배열의 특정 요소 위치 확인
const arr = ['spring', 'summer', 'fall','winter','is','down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter',4)}`);

//forEach
const arr2 = [
    {id:0, name:'혜림', age:5},
    {id:1, name:'현일', age:3},
    {id:2, name:'현아', age:4},
    {id:3, name:'우림', age:2}
];

arr2.forEach((el)=> {
    console.log(el.name);
});
