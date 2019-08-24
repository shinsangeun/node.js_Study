//set 객체-array 중복요소 없애기
const arr = ['one','two', 'three','four','five','one'];
const s = new Set(arr);
console.log([...s]);