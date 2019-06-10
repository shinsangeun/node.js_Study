//some-배열의 특정 조건 만족 하는지 확인
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 4},
    {id: 3, name: '우림', age: 2},
];

const isHyunAHere = arr.some(el=> el.name == '현아');
const olderThanSix = arr.some(el => el.age >6);

console.log(isHyunAHere);
console.log(olderThanSix);


//every-모든 배열 요소가 특정 조건을 만족하는지 확인
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 4},
    {id: 3, name: '우림', age: 2},
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevneAll = arr.every(el => el.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevneAll);


//filter-배열의 특정 조건을 기준으로 필터링
const arr = [1,2,3,4,5,6,7,8,9,10];

const filteredTwo = arr.filter(a =>{
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2==0;
});
console.log(filteredTwo);

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);


//find-배열의 특정 조건을 충족하는 요소 찾기
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 4, name: '탄이', age: 30},
    {id: 2, name: '현아', age: 4},
    {id: 3, name: '우림', age: 2},
];

const myFriend = arr.find(a => a.age === 30);
console.log(myFriend);