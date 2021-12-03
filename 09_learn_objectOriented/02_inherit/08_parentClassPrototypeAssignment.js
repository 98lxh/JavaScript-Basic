//父类:公共属性和方法
function Person(name,age,friends){
    this.name = name,
    this.age = age
    this.friends = friends
}

Person.prototype.eating = function(){
    console.log(this.name + 'eating')
}

//子类:特有的属性和方法
function Student(name,age,friends,sNo){
    Person.call(this,name,age,friends)
    this.sNo = sNo
}

Student.prototype = Person.prototype

var stu1 = new Student("xiao su",18,[1],1)

console.log(stu1)