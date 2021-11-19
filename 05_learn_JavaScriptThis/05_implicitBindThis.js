// 2.隐式绑定(object.fn())
//object对象会被js引擎绑定到fn函数中
//1.
// function foo(){
//     console.log(this);
// }

// var obj = {
//     name:"why",
//     foo:foo
// }

// obj.foo() //obj对象

//2.
var obj = {
    name:"xiao su",
    eating:function(){
        console.log(this.name + '在吃东西')
    },
    running:function(){
        console.log(this.name + '在跑步')
    }
}

obj.eating() // -> obj
obj.running() // -> obj

var fn = obj.eating
fn() // -> window

//3.
var obj1 = {
    name:'obj1',
    foo:function(){
        console.log(this)
    }
}

var obj2 = {
    name:'obj2',
    bar:obj1.foo
}
obj2.bar() // -> obj2