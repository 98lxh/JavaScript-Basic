## js的面向对象
+ js其实支持多中编程范式，包含函数式编程和面向对象编程：
 - js的对象被设计成一组属性和无序集合，像是一个hash表，有key和value
 - key是一个标识符名称，value是任意类型，也可以是其他对象或者函数名称
 - 如果值是一个函数，那么我们可以诚挚为是对象的方法
+ 如果想要一个属性进行比较精准的操作，那么可以使用属性的符
 - 通过属性描述符可以精准的添加或修改对象的属性
 - 属性描述符需要通过Object.defineProperty来对属性进行添加或者修改
## Object.defineProperty
+ Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
  - Object.defineProperty(object,prop,descriptor)
+ 属性描述符的类型有两种:
  - 数据属性(Date Properties)描述符(Descriptor)
  - 存储属性(Accessor访问器 Properties) 描述符(Descriptor)
## 对象方法
+ 获取对象的属性描述符
 - getOwnPropertyDescriptior
 - getOwnPropertyDescriptiors
## 创建对象的方式
+ 字面量
+ new Object
+ 工厂模式
  - 工厂模式是一只常见的设计模式
  - 通常我们会有一个工厂方法，通过改工厂方法产生想要的对象
+ 构造函数
 - 构造函数也被称为构造器(constructor),通常是创建对象时会调用的函数
 - 再其它面向对象的编程语言里面，构造函数是存在与类中的一个方法，称为构造方法
 - 如果一个函数被new操作符调用了，那么这个函数就是一个构造函数
## new 操作符调用的作用
+ 如果函数通过new操作符调用了，那么会执行如下步骤
 - 1.在内存中创建一个新对象
 - 2.这个对象内部的\[\[prototype\]\]属性赋值为该构造函数的prototype
 - 3.构造函数内部的this指向创建出来的新对象
 - 4.执行函数的内部代码
 - 5.如果构造函数没有返回非空对象，则返回创建出来的对象