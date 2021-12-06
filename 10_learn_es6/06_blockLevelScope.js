//代码块
//es6代码块针对let/const/class/function声明变
{
    let foo = 'xiao su'
    function demo(){
        console.log('demo')
    }
    class Person{}
}

//不同的浏览器有不同的实现 大部分浏览器为了兼容以前的代码
//让function是没有块作用域的
// demo() //'demo'

// console.log(foo) //foo is not defined
// var p = new Person() //Person is not defiend

if(true){
    //也会形成作用域
    var foo = 'foo'//外部可以访问
    let bar = 'bar'//外部不能访问
}

var color = 'red'

switch(color){
    //也是块级作用域
}

//for也是块
for(let i = 0;i < 10;i++){
    console.log(i)
}

// console.log(i)//i is not defined