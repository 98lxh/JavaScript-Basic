function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.running = function(){
    console.log(this.name + 'running~~~~')
}

var P1 = new Person('xiao su',18)

console.log(Person.prototype) // {}

console.log(Person.prototype.__proto__) //[Object: null prototype] {}
console.log(Person.prototype.__proto__.__proto__) //null