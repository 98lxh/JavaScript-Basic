//js内部运行函数内部定义函数
//函数作为返回值
function foo(){
    function bar(){
        console.log("bar");
    }
    return bar
}

var fn = foo();
fn()



//高阶函数
function makeAdder(count){
    return function add(num){
        return count + num
    }
}

var add5 = makeAdder(5)
add(6)
add(10)