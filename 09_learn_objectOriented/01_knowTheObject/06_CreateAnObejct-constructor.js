function Person(name,age,height,address){
    this.name = name
    this.age = age
    this.height = height
    this.address = address
    this.running = function(){
        console.log(this.name + '在跑步')
    }
}

var p1 = new Person('张三',18,1.88,'广州市');
var p2 = new Person('李四',20,2.88,'北京市');
console.log(p1,p2)