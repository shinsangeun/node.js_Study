//push(배열 뒤에 요소 추가)

const festa = ['mang'];
festa.push('chimmy');
festa.push('rara');
festa.push('kiki');
festa.push('shooky');

festa.forEach(name => {
    console.log(name);
});


//unshift-push와 반대(배열 앞에 요소 추가)

const festa2 = ['mang'];
festa2.unshift('chimmy');
festa2.unshift('rara');
festa2.unshift('kiki');
festa2.unshift('shooky');
festa2.unshift('test');

festa2.forEach(name2 => {
    console.log(name2);
});