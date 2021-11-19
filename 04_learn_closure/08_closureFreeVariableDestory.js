function foo(){
    var name = "why";
    var age = 18; //一般js引擎会回收这个变量的内存
    return function bar(){
        console.log(name);
    }
}

var fn = foo();
fn();