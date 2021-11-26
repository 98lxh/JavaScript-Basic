var names = [1,2,3,4];

//slice 只要给他一个start/end 对于同一个数组来说返回的是确定的
//slice 不会修改原函数
//所以是一个纯函数
var newNames1 = names.slice(0,3);
console.log(newNames1)


//splice 会修改原数组
//所以不是纯函数
var newNames2 = names.splice(0,3);
console.log(newNames2)


//这是一个纯函数
//1.执行输入一定产生相同的输出
//2.执行过程中不会产生副作用
function foo(num1,num2){
    return num1 + num2
}

//不是纯函数
//1.修改了外界变量
var name = 'a'
function bar(){
    name = 'b'
}

//不是纯函数
//修改了传入的参数
function baz(info){
    info.age = 100
}
var obj = {
    name:'xiaosu',
    age:18
}
baz(obj)
console.log(obj)

//是纯函数
//相同输入有相同的输出
function test(info){
    return {
        ...info,
        age:100
    }
}

test({name:'小苏'})


//reducer 的写法
var info = {}
function foo(obj){
    return {...obj,name:'小苏'}
}
info = foo(info)