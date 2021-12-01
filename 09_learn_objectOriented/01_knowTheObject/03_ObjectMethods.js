//对象的限制方法
var obj = {
    name:'xiaosu',
    age:18
}

//1.禁止对象添加属性
Object.preventExtensions(obj)
obj.address = '杭州市'
console.log(obj)

//2.禁止对象配置/删除属性
Object.seal(obj)

//3.属性不可修改
Object.freeze(obj)
obj.name = 'bubu'
console.log(obj)

