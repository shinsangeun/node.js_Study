//substr
const sentences = 'The sun will shine on us again';
console.log(sentences.substr(8));
console.log(sentences.substr(8, 7));
console.log(sentences.substr(0));
console.log(sentences.substr(-10));
console.log(sentences.substr(0, -3));   //x
console.log(sentences.substr(30));      //x
console.log(sentences.substr(0, 30));