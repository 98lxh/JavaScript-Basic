//借用构造函数继承
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


var stu1 = new Student('xiao su',18,[1,2,3],1);
var stu2 = new Student('xiao su',18,[1,2,3],1);
stu1.friends.push(4)
console.log(stu1.friends,stu2.friends)
//借用构造函数也是有弊端的
// 1.该方法实例出的对象可以拿到父类父属性值，父类原型对象中一旦存在父类自己定义的方法子类将无法继承
