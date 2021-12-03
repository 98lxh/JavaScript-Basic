var obj = {
	name:'XIAO SU',
	age:18
}

//get操作
//1.在当前对象中查找
//2.如果没有找到，回去原型__proto__对象上查找
//3.找到顶层的对象 有则使用这个属性 没有就返回undefined

obj.__proto__ = {
	address:'BEI JING'
}

console.log(obj.address) 