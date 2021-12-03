//声明类
class Person{

}


console.log(Person.prototype) //Person
console.log(Person.prototype.__proto__) //Obejct
console.log(Person.prototype.constructor) //Person
console.log(typeof Person) //function


var p = new Person();
console.log(p.__proto__ === Person.prototype) //true
