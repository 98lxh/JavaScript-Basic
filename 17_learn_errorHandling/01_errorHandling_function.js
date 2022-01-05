// function sum(num1, num2) {
//   if (typeof num1 === "number" || typeof num2 === "number") {
//     throw "parameters is error type";
//   }
//   return num1 + num2;
// }

// //如果没有处理错误程序会终止
// sum(1, "2");

//
function foo() {
  throw new Error("xxxxx");
}
function bar() {
  foo();
}

function test() {
  bar();
}
function demo() {
  test();
}

//1.不处理 那么会异常进一步抛出 知道顶层调用
// 如果最顶层也没对这个异常进行处理，那么我们的程序会终止执行，并且报错

//2.try catch捕获异常
try {
  demo();
} catch (e) {
  console.log("xxxxxxxx");
} finally {
  //不管是否发生异常 都会执行
  console.log("finally执行");
}
