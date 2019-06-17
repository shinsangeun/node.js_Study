//keys-객체에서 키만 추출
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const arr = Object.keys(obj);

console.log(arr);

//values-객체에서 값만 추출
const obj2 = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const arr2 = Object.values(obj2);

console.log(arr2);

//entries-객체를 배열로 변환
const obj3 = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const modifiedObj = Object.entries(obj3);

console.log(modifiedObj);