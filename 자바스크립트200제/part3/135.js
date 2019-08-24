const s = new Set();

s.add('one');
s.add('two');

console.log('키 정보 출력');
for(let key of s.keys()){
     console.log(key);
}

console.log('값 정보 출력');
for(let value of s.values()){
    console.log(value);
}

console.log('[for..of, entries] 키,값 정보 동시 출력');
for(let [key, value] of s.entries()){
    console.log(`키는 ${key}, 값은 ${value}`);
}

console.log('[forEach] 키,값 정보 동시 출력');
s.forEach((value, key)=>{
    console.log(`키는 ${key}, 값은 ${value}`);
})