//Set 객체-add, delete, has
const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s.has('one'));
s.delete('one');
console.log(s.has('two'));
console.log(s.has('one'));