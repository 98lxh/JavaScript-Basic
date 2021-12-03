var obj = {name:'xiaosu'}


console.log(obj.address)

//找到了哪一层对象停止查找
//字面量obj的原型是[Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型
console.log(obj.__proto__)

//null
console.log(obj.__proto__.__proto__)


