class Person{

}

class Runner{
    running(){

    }
}

function minxinRunner(baseClass){
    return class newClass extends baseClass{
        running(){
            console.log('running')
        }
    }
}

function mixinEater(baseClass){
    return class extends baseClass{
        eatting(){
            console.log('eatting')
        }
    }
}

//js继承只能有一个父类:单继承
class Student extends Person{

}

var NewStudent = minxinRunner(mixinEater(Student))
var ns = new NewStudent();

ns.running()
ns.eatting()
