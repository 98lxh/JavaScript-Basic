//在大多数情况下 this都是出线在函数中
//在全局作用域下
//浏览器:window
//Node:{}  module -> 加载 -> 编译 -> 放到一个函数中 -> 执行这个函数.apply({})
console.log(this);