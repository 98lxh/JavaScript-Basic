//寄生组合式继承
function Person(name,age,friends){
    this.name = name;
    this.age = age;
    this.friends = friends;
}

Person.prototype.running = function(){
    console.log('running')
}


// function createObject(o){
//     function Fn(){}
//     Fn.prototype = 0
//     return new Fn()
// }

function inheritPrototype(SubType,SuperType){
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype,'constructor',{
    value:SubType,
    writable:true,
    configurable:true,
    enumerable:false
    })
}

function Student(name,age,friends,sNo,score){
    Person.call(this,name,age,friends);
    this.sNo = sNo;
    this.score = score
}

inheritPrototype(Student,Person)

Student.prototype.studying = function(){
    console.log('studying')
}

var stu = new Student('xl',18,[1],1,1)
console.log(stu)