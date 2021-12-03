//对象 函数原型间的关系

var obj = {
    name:'xiaosu'
}


//对象存在一个__proto__:隐式原型对象
console.log(obj.__proto__ === Object.prototype)

//Foo是一个函数:显示原型对象Foo.prototype
//Foo.prototype->创建函数 Foo.prototype = {constructor:Foo}
//Foo是一个对象，那么他就是有一个隐式原型对象 Foo.__proto__
//Foo.__proto__ -> new Function -> Foo.__proto__ = Function.prototype
//Function.prototype = { constructor:Function }
function Foo(){}

console.log(Foo.__proto__.constructor , Foo.prototype.constructor)

var foo1 = new Foo()

var obj1 = {} // -> new Object