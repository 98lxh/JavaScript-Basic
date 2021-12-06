//数组解构
var names = [1,2,3];
//对数组的解构 []
var [a,b,c] = names
console.log(a,b,c)

//只解构后两个元素
var [,b,c] = names;

//解构一个元素，后面元素放入新数组
var [item1,...newNames] = names;
console.log(newNames)


//对象解构
var obj = {
    name: '小苏',
    age:18,
    address:'北京'
}

//对象解构 {}
var {name,age,address} = obj
console.log(name,age,address)

var {name:newName} = obj
console.log(newName)

//默认值
var {address = '广州'} = obj
console.log(address)


function foo(info){
    console.log(info.name,info.age)
}
foo(obj)

function bar({name,age}){
    console.log(name,age)
}
bar(obj)