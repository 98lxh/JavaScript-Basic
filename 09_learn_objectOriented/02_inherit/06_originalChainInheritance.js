//原型链继承


//父类:公共属性和方法
function Person(){
    this.name = 'xiao su',
    this.friends = []
}

Person.prototype.eating = function(){
    console.log(this.name + 'eating')
}


//子类:特有的属性和方法
function Student(){
    this.sNo = 1
}


var p = new Person();
Student.prototype = p

Person.prototype.studying = function(){
    console.log(this.name + 'studying')
}

// 看不到继承的属性
// 创建两个stu对象
var stu1 = new Student()
var stu2 = new Student()

//直接修改对象属性，是给本对象添加了一个新属性 所以不会影响
stu1.name = 'xiao su'

//获取引用 修改引用中的值 会互相影响
stu1.friends.push('kobe')

console.log(stu1.friends,stu2.friends)

console.log(stu1) // Person { sNo: 1 }