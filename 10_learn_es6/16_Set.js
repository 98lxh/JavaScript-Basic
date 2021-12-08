//创建set结构
const set = new Set();
set.add(10)
//不能重复只能添加一个
set.add(10)
set.add(20)
set.add(30)
set.add({})
//引用类型是不同的地址
set.add({})
const obj = {}
set.add(obj)
//这时存放的是一个对象 因为是一个地址
set.add(obj)
console.log(set)

//对数组去重(去除重复的元素)
const arr = [10,20,30,10,30]
console.log([...new Set(arr)])
//