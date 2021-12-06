function foo(foo){
    console.log(foo.getArea)
}

var obj = {
    name:'xiaosu',
    getArea(){
        return 100
    }
}

class Person{
    getArea(){
        return 200
    }
}
var p = new Person()
foo(p)
foo(obj)

function sum(m,n){
    console.log(m + n)
}

sum(1,2)//3
sum('1','2') //'12'
