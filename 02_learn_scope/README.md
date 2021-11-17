## 初始化全局对象
### js引擎会在执行代码之前,在堆内存中创建一个全局对象:Global Object(GO)
- 该对象所有的作用域(scope)都可以访问
- 里面会有包含Date、Array、String、Number、setTimeout等等
- 其中还有一个window对象指向自己