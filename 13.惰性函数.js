function foo() {
  var t = new Date();
  foo = function () {
    return t;
  };
  return foo();
}

console.log(foo());

setTimeout(console.log, 1000, foo());

// IIFE的函数无法进行赋值（内部机制，类似const定义的常量）
// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b);
// })();
// b = 20;
// console.log(b);
