//展开语法的使用

const nums = [1,2,3]
const num = 4
const str = 'sss'
//函数调用时
function foo(x,y,z){
    console.log(x,y,z)
}
foo(...nums)
foo(...str)


//构造数组时
const newNames = [...nums,...str]
console.log(newNames)


//es2018 -> es9
const info = {name:'xiao su',age:18}
const newInfo = {...info,address:'北京市'}
console.log(newInfo)
//展开运算符 其实是进行了一个浅拷贝

const userInfo = {
    name:'xiao su',
    friends:{name:'xiao liu'}
}
const obj = {...userInfo}
obj.name = 'xxx'
obj.friends.name = 'xxx'
console.log(obj,userInfo)