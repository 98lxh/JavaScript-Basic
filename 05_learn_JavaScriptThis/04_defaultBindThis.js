//独立函数调用 默认绑定
//1
function foo(){
    console.log(this) //window
}

function foo1(){
    console.log(this) //window
    foo()
}

function foo2(){
    console.log(this) //window
    foo1()
}
foo2()

//2
var obj = {
    name:'小苏',
    foo:function(){
        console.log(this);
    }
}
var bar = obj.foo;
bar() //window


//3
function foo4(){
    console.log(this);
}
var obj1 = {
    name:'小苏',
    foo4
}
var bar1 = obj.foo;
bar1() //window

//4
function foo(){
    return function(){
        console.log(this)
    }
}

var fn = foo()
fn() //window