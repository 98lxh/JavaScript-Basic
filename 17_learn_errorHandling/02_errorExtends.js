class BaseError {
  constructor(errorCode, errorMsg) {
    this.errorCode = errorCode;
    this.errorMsg = errorMsg;
  }
}
function foo(type) {
  console.log("foo 函数开始执行");
  if (type === 0) {
    //抛出一个对象类型
    // throw {
    //   errorCode: -1001,
    //   errorMessage: "",
    // };

    //创建类
    // throw new BaseError(-1001, "不能为0");

    //内置Error类
    // throw new Error("不能为0");

    //类型错误
    throw new TypeError("类型错误");
    //如果抛出异常 后续的代码都不会执行

    console.log("foo后续");
  }
  console.log("foo 函数结束执行");
}
foo(0);
