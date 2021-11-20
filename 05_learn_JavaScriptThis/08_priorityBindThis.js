//this绑定的优先级
var obj = {
    name:'xiaosu',
    foo:function(){
        console.log(this)
    }
}

obj.foo(); // obj 隐式绑定
obj.foo.call("abc") // String{"abc"} 显式绑定高于隐式绑定

function foo(){
    console.log(this)
}

var obj = {
    name:"obj",
    foo:foo.bind("aaa")
}

obj.foo() //String{"aaa"}

// new绑定高于隐式绑定
var obj = {
    name:"obj",
    foo:function(){
        console.log(this)
    }
}

var f = new obj.foo(); // foo{}

// new高于显式绑定
// new不能和apply/call一起使用

function foo(){
    console.log(this)
}
var bar = foo.bind("aaa");
var obj = new bar(); // foo{}