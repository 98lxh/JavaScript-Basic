//对象都有一个[[prototype]] 这个属性是对象的隐式原型
var obj = {} // [[prototype]]
var info = {} // [[prototype]]


//早期ECMA没有规范如何查看原型对象[[prototype]]
//提供了一个属性可以查看原型对象(浏览器提供)
//__proto__
console.log(obj.__proto__) // [Object: null prototype] {}
// var obj = {name:'xiaosu',__proto__:{}}


//es获取对象原型
console.log(Object.getPrototypeOf(obj)) // [Object: null prototype] {}

//2.原型的用处
// 当从一个中获取某一个属性时，它会触发[[get]]操作
// 1.在当前对象中查找对应的属性
// 2.如果找到就直接使用，如果没有找到就会沿着原型链查找
console.log(obj.age) // undefined