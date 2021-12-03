class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

class Student extends Person{
    constructor(name,age,sNo){
        super(name,age);
        this.sNo = sNo;
    }
}

const stu1 = new Student('xs',18,'001')
console.log(stu1)