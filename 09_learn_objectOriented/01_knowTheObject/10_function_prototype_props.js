function Person(){

}

//constructor
// console.log(Person.prototype)
// console.log(Object.getOwnPropertyDescriptors(Person.prototype)) //constructor: {} -> 可枚举false

//Person.constructor -> 构造函数本身
// console.log(Person.prototype.constructor)
// Object.defineProperty(Person.prototype,"constructor",{
//     enumerable:true,
//     configurable:true,
//     writable:true,
//     value:'111'
// })
// console.log(Person.prototype)

//2.添加自己的属性
// Person.prototype.name = "xiao su"
// Person.prototype.age = 18
// var f1 = new foo();
// console.log(f1.name,f1.age)

//3.直接修改整个prototype对象
// Person.prototype = {
//     name:'xiao su',
//     age:18,
//     height:1.88
// }
// Object.defineProperty(Person.prototype,"constructor",{
//     value:Person,
//     writable:true,
//     configurable:true,
//     enumerable:false
// })
// var p1 = new Person();
// console.log(Person.prototype.constructor)
// console.log(p1.name,p1.age,p1.height)


function Person2(name){
    this.name = name
}
Person2.prototype.running = function(){
    console.log(this.name + 'running.....')
}

var p1 = new Person2('bubu')
var p2 = new Person2('xiao su')