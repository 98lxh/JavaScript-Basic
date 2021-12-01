## js原型链
+ 在实现继承之前，首先理解一个非常重要的概念:原型链.
  - 从一个对象上获取属性,如果在当前对象中没有获取到就会去它的原型上获取
### Object的原型
  - 事实上Object的原型就已经是顶层的原型了
  - 从Object直接创建出来的对象原型都是[Object:null prototype]{}
+ [Object:null prototype]{}的特殊点
  - 1.这个对象有原型属性，但是他的原型属性已经指向null了，也就是顶层原型
  - 2.这个对象上有很多默认的属性和方法(toString、valueOf)
