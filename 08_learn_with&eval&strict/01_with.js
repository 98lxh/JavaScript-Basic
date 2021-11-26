// "use strict" 严格模式不可用使用with
var message = 'Hello World';
console.log(message)


//with语句可以形成自己的作用域
var obj = {
    name:'why',
    message:'Hello Obj'
}

// obj -> bar -> foo -> globalObject
function foo(){
   function bar(){
    with(obj){
        console.log(message)
    }
   }
   bar()
}

foo()