var condition = 5 > 10;
condition ? console.log('left') : console.log('right');

var result = condition ? (
    console.log("삼항 연산자의 첫번째 표현식"),
    "표현식1"
) : (
    console.log("삼항 연산자의 두번째 표현식"),
    "표현식2"
);
console.log(result);
