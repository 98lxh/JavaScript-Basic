## 初始化全局对象
### js引擎会在执行代码之前,在堆内存中创建一个全局对象:Global Object(GO)
- 该对象所有的作用域(scope)都可以访问
- 里面会有包含Date、Array、String、Number、setTimeout等等
- 其中还有一个window对象指向自己
## 执行上下文栈(调用栈)
+ js引擎内部有一个执行上下文栈(Execution Context Stack，简称ECS)，它是用于执行代码的调用栈。
 - 全局的代码块为了执行会构建一个 Global Execution Context(GEC);
 - GEC会 被放入到ECS中 执行;
+ GEC被放入到ECS中里面包含两部分内容:
 - 第一部分:在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到GlobalObject中，但是并不会赋值(这个过程也称之为变量的作用域提升(hoisting));
 - 第二部分：在代码执行中，对变量赋值，或者执行其他的函数;
 ## 函数如何执行
+ 在执行的过程中执行到一个函数时，就会根据函数体创建一个函数执行上下文(Functional Execution Context，
简称FEC)，并且压入到EC Stack中。
+ FEC中包含三部分内容:
 - 第一部分:在解析函数成为AST树结构时，会创建一个Activation Object(AO):
    AO中包含形参、arguments、函数定义和指向函数对象、定义的变量
 - 第二部分:作用域链:由VO(在函数中就是AO对象)和父级VO组成，查找时会一层层查找;
 - 第三部分: this绑定的值
## 变量环境和记录
+ 以上都是基于早期的ECM的版本规范:
  > 每一个执行上下文会关联到一个变量环境(variable object, VO),在源代码中的变量和函数声明会被作为属性
  > 添加到VO中。对于函数来说，参数也会被添加到VO中
+ 在最新的ECMA的版本规范中，对于一些词汇进行了修改
  > 每一个执行上下文会关联到一个变量环境(variableEnvironment)中，在执行代码中变量和函数的声明会作为环境记录
  > (Environment Record)添加到变量环境中
  > 对于函数而言，参数也会被作为环境记录添加到变量环境 