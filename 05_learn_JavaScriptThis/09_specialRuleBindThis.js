//特殊的this绑定
//1.忽略显示绑定
function foo(){
    console.log(this);
}
// apply/call/bind 当传入undefined和null的时候 this指向window
foo.apply(undefined); //window
foo.apply(null); //window
const f = foo.bind(undefined); //window
f() //window

//2.间接函数引用
var obj = {
    name:"obj1",
    foo:function(){
        console.log(this)
    }
}

var obj2 = {
    name:"obj2"
};

// obj2.bar = obj1.foo
// obj2.bar() //obj2

//独立函数调用
(obj2.bar = obj1.foo)() //window