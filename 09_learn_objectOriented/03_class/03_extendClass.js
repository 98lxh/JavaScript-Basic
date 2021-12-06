class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  eatting(){
    console.log(this.name + 'eatting ~~~~~')
  }

  running(){
    console.log(this.name + 'running ~~~~~')
  }

  personMethod(){
    console.log(1)
    console.log(2)
    console.log(3)
  }

  static staticMethods(){
    console.log('staticMethod person')
  }
}

//Students派生类
class Student extends Person{
    constructor(name,age,sNo){
        super(name,age);
        this.sNo = sNo;
    }

    studying(){
      console.log(this.name + 'studying ~~~~~~')
    }

    //方法重写
    running(){
      console.log(this.name + 'student' + 'running~~~~')
    }
    
    //重写personMethod
    personMethod(){
      //调用父类方法
      super.personMethod();
      console.log(4)
      console.log(5)
      console.log(6)
    }
    static staticMethods(){
      super.staticMethods()
      console.log('staticMethod student')
    }
}
Student.staticMethods()
const stu1 = new Student('xs',18,'001')
stu1.running()
stu1.personMethod()
console.log(Object.getOwnPropertyDescriptors(stu1.__proto__))

