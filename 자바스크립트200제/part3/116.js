const testStringfy = {
    stringifiedNum: JSON.stringify(13, 1),
    stringifiedNum: JSON.stringify('Kiss Carnival'),
    stringifiedNum: JSON.stringify(false),
    stringifiedNum: JSON.stringify([2003, 2018])
};

for(let key in testStringfy){
    console.log(`------${key}------`);
    console.log(typeof testStringfy[key]);
    console.log(testStringfy[key]);
}

console.log(`-------stringifyObj-------`);
const obj = {
    drama: 'PET',
    season: 2019,
    casting: ['koyuki', 'Jun'],
    character: ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drama', 'season']));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key, val) => {
    if(key === 'season') return 2004;
    return val;
},4));