//pop-배열 마지막 요소 추출
const arr = [1,2,3];
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

//shift-배열 맨 앞 요소 추출
const arr2 = [4,5,6];
console.log(arr2.shift());
console.log(arr2.shift());
console.log(arr2.shift());
console.log(arr2.shift());

//slice-배열 특정 위치 요소 추출
const arr3 = ['melon', 'source', 'lemon','grape','apple','juice'];
console.log(`과일이 아닌 요소는 ${arr3.slice(1,2)}와 ${arr3.slice(5,6)} 입니다.`);
console.log(arr3.slice(0,10));

//splice-배열 인덱스로 특정 요소 수정
const fruits = ['melon','lemon', 'apple','kiwi'];
fruits.splice(3,1);
fruits.splice(3,0,'grape');
fruits.splice(2,1,'magarin','strawberry','watermelon');
console.log(fruits);