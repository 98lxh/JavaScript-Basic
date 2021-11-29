"use strict"
//1.禁止意外创建全局变量
// message = "Hello world"
// console.log(message)

//2.不允许函数有相同的参数名称
// function foo(x,y,x){
//     console.log(x,y,x)
// }
// foo(30,20,30)

//3.静默错误(严格模式抛出错误)
// true.name = 'abc'

// NaN = 123 

// var obj = {
//     name:'xiaosu'
// }

// Object.defineProperty(obj,"name",{
//     writable:false
// })
// obj.name = 'bubu'
// delete obj.name

//4.不允许使用八进制格式
// var num = 0721 //报错

//es6后
// var num2 = 0o123;   //8进制
// var num3 = 0x123; //16进制
// var num3 = 0b110 //2进制
// console.log(num)

//5.with语句不能使用

//6.eval不会向上引用变量
// var jsString = 'var message = "hello word";console.log(message)'
// eval(jsString)

// console.log(message) // message not defined

//7.严格模式下的this
// 自执行函数指向undefined
// function foo(){
//     console.log(this)  // -> undefined
// }

//8. 禁止var声明提升
// console.log(name)
// var name = aaa


//严格模式下setTimeout this
//普通函数
setTimeout(function(){
    console.log(this);
}) // -> setTimeout(黑盒:看不到内部实现) -> fn.apply(window,params)
//箭头函数
setTimeout(()=>{
    console.log(this);
}) // -> window