//reduce-배열 내 값 누적 시키기

/*
배열.reduce(누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열)=>{
    return 반환 값
}, 초기값);
 */

const numArr = [1,2,3,4,5];

const result = numArr.reduce((acc, el)=> {
    return acc+el
},0);

console.log(result);

//reduce-중첩된 배열을 단일하게 만들기
const arr = [1, [2,3], [4,5,6],['배열','나열'],'javascript'];
const result2 = arr.reduce((acc, el) =>{
    return acc.concat(el);
}, []);

console.log(result2);
