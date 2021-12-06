//必须有继承(多态的前提)
//必须有重写
//必须有父类引用指向子对象
class Shape{
    getArea(){

    }
}

class Reactangle extends Shape{
    getArea(){
        return 100
    }
}

class Circle extends Shape{
    getArea(){
        return 200
    }
}

var r1 = new Reactangle()
var c1 = new Circle()


//多态：当对不同数据类型执行同一个操作时，如果表现出来的行为不一样就是多态的表现
function calcArea(shape:Shape){
    console.log(shape.getArea())
}

calcArea(r1)
calcArea(c1)
