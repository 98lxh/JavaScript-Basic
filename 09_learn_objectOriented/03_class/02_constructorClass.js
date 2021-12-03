//类的声明
class Person{
    //构造函数(构造方法)
    //一个类只能有一个构造函数
    //1.在内存中创建一个对象
    //2.将类的原型赋值给创建出来的对象
    //3.this指向新创建对象
    //4.执行函数代码
    //5.自动返回创建出来的对象
    constructor(name,age){
        this.name = name;
        this.age = age;
        this._address = '北京市'
    }

    //普通的实例方法 创建出来的对象进行访问的
    eatting(){
        console.log(this.name + 'eatting____')
    }

    //类的访问器方法
    get address(){
        return this._address
    }
    set address(newAddress){
        this._address = newAddress
    }

    //类的静态方法
    //类名访问
    static randomPerson(){
        var names = ['xiao su','xiao liu']
        return new Person(Math.floor(Math.random() * names.length),Math.floor(Math.random() * names.length))
    }
}


var p1 = new Person('xiao su',18)
var p2 = new Person('xiao liu',23)
var p3 = Person.randomPerson()
p1.eatting()
console.log(p1,p2,p3)