// var result =0;
//
// console.time('duration_sum');
//
// for(i=0;i<1000; i++){
//     result += i;
// }
//
// console.timeEnd('duration_sum');
//
// console.log("result:" + result);
// console.log("file path:" +__filename);
// console.log("dir path:" + __dirname);
//
// console.log('argv 파라미터 속성수:' + process.argv.length);
// console.dir(process.argv);
//
// if (process.argv.length > 2){
//     console.log('세번째 파라미터의 값:', process.argv[2]);
// }
//
// process.argv.forEach(function (item, index) {
//     console.log(index+ ':', item);
// })
//
// console.dir(process.env);
//
// console.log('환경변수의 값:' + process.env['OS']);

var a = 0;
var b= 1;
console.log(a,b);

function add(add, a,b) {
    return a+b;
    add = a+b;
  //  console.log("결과:"+ return);
  //   if( return ==0 ){
  //       console.log('맞았다');
  //   }else{
  //       console.log('땡');
  //       return -1;
   // }
}
module.exports.add = function (a,b) {
   console.log("결과", a+b);
    return 0;
};

var calc = require('./ch02_test1');
console.log(calc.add(1,2));