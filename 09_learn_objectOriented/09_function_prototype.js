function foo(){
    // this = {}
    // this.__proto__ = foo.prototype
}

//函数也是一个对象
console.log(foo.__proto__) //函数作为对象来说，也有[[prototype]]隐式原型
//函数也会多出来一个显示原型
console.log(foo.prototype)

var fn1 = new foo();
var fn2 = new foo();
console.log(fn1.__proto__ === foo.prototype) //true