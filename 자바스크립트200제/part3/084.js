//concat

const preList = [1,2,3];
const currentList = [4,5,6];
const nextList = [7,8,9];

console.log(preList.concat(currentList));
console.log(currentList.concat(nextList,preList));

console.log(['배열'].concat(['합치기']));
console.log(['배열'].concat(['합치기'],['Javascript200']));

