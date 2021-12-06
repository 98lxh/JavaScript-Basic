//let
var foo = 'foo'
let bar = 'bar'


const name = 'abc'
name = 'cba'



//但是如果传递的是一个引用 通过引用找到对应的对象 修改对象内部的属性，这个是可以的
const obj = {
    foo:'foo'
}


// obj = {} 报错

obj.foo = 'bar'

//let const不能声明同名变量
let a = 1
let a = 2 //报错\
