//length
const arr = ['short', 'test', 'long sentences, is not appropriate'];

arr.forEach(str => {
    if (str.length < 10) console.log(str);
})
