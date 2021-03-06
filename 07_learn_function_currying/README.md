## 函数式编程（编程范式）
### 理解纯函数
+ 在react开发中纯函数是多次提及的
+ react的组件被要求是像一个纯函数(非class组件),redux中有一个reducer的概念，也就是必须是一个纯函数(Pure Function)
+ 所以掌握纯函数对于理解很多框架的设计是有帮助的
### 纯函数的定义
+ 函数在相同的值输入时，需要产生相同的输出
+ 函数的输出和输入值以外的其他隐藏信息或状态无关，也和有I/O设备产生的外部输出无关
+ 函数不能有予以上可观察的函数副作用，诸如"触发事件",是输出设备输出,或更改输出值以外物件的内容等
+ 总结:
    - 确定的输入 一定会产生确定的输出
    - 函数执行过程中不能产生副作用
### 副作用的理解
 + 副作用(side effect)表示执行一个函数时，除了返回函数值之外，还对调用的函数产生了附加的影响
   比如:修改了全局的变量，修改参数或改变外部的存储
 + 纯函数在执行过程中是不能产生这样的副作用：
    - 副作用往往是产生bug的温床
### 纯函数的优势
+ 可以安心编写和安心使用
+ 在写的时候回保证了函数的纯度,只是单纯实现自己的业务逻辑即可，不需要关心传入的内容是如何获取，或者依赖其他的外部变量是否已经发生了改变
+ 使用的时候，确定输入内容不会被任意修改，并且确定的输入，一定有确定的输出
+ React中就要求无论函数还是class声明一个组件，这个组件都必须想纯函数一样，保护他的props不被修改
## 函数柯里化
### 什么是柯里化
+ 在计算机科学，柯里化(currying)，又称为卡瑞化，加里化
+ 指接受多个参数的函数变成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数，而且返回结果的新函数的技术
+ 柯里话声称"如果你固定某些参数，将得到接受余下参数的一个函数"
+ 总结:
    - 只传入函数一部分参数来调用他，让他返回一个函数去处理剩余的参数
    - 这个过程就叫柯里化
### 为什么要使用柯里化
+  在函数式编程中，我们其实往往希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理;
+  那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果;
## 组合函数
+ 比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的;
+ 那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复;
+ 对函数的组合，我们称之为 组合函数(Compose Function);




