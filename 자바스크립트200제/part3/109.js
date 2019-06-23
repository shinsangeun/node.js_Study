//Math.random(랜덤값)
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i =0;i<5;i++){
    console.log(generateRandom(1, 10));
}

for (let i=0; i<5; i++){
    console.log(generateRandom(10, 100));
}


//Math.round(특정 자리수 반올림)
const val = 573.96;

console.log(Math.round(val));
console.log(Math.round(val * 10)/10);
console.log(Math.round(val * 100)/100);
console.log(Math.round(val / 10) * 10);
console.log(Math.round(val / 100) *100);


//Math.ceil(특정 자리수 올림)
const positiveNum = 93.54;
const negativeNum = -39.57;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(negativeNum));
console.log(Math.ceil(positiveNum * 10)/10);
console.log(Math.ceil(positiveNum / 10) * 10);
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum / 10)*10);


//Math.floor(특정 자리수 내림)
const positiveNum2 = 93.54;
const negativeNum2 = -39.57;

console.log(Math.floor(positiveNum2));
console.log(Math.floor(negativeNum2));
console.log(Math.floor(positiveNum2 * 10)/10);
console.log(Math.floor(positiveNum2 / 10) * 10);
console.log(Math.floor(negativeNum2 * 10) / 10);
console.log(Math.floor(negativeNum2 / 10)*10);