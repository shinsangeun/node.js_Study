const numRegExp = /[0-9]+/;
const phoneExp = /\d{3}-\d{3,4}-\d{4}$/;
const email = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2.3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneExp.test('010-3003-0046'));
console.log(phoneExp.test('02-9944-1234'));
console.log(email.test('test123@javascript.org'));
console.log(email.test('test-javascript'));