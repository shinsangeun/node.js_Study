//from
//Array.from(배열로 변환 될값, 반환될 배열 내부 요소에 대한 callback 함수)
const str = '123456789';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);
