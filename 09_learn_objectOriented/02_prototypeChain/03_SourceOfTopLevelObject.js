//顶层对象来自哪里?

//字面量相当于new Object的语法糖
var obj = {} //创建一个对象
var obj = new Object() //创建一个对象 //new Object -> this.__proto__ = Object.prototype

//Object.prototype
console.log(obj.__proto__)
console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype)  //true
console.log(Object) //[Function: Object] 本质是一个构造函数
function Person(){

}

//1.内存中创建一个对象
//2.this指向创建的对象
//3.将Person函数的显示原型prototype赋值给创建对象的隐式原型(this.__proto__ = Person.prototype)
//4.返回对象
var p = new Person()


