//indexOf

const str = 'Carpe diem, seize the day';
console.log(`"e"는 ${str.indexOf('e')}번째 인덱스`);
console.log(`문자열 ", se"는 ${str.indexOf(', se')}번째 인덱스`);

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1 )count++;
    });
    return count++;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개`);