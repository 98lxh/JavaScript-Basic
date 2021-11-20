## 为什么需要this?
+ this在全局作用域下指向什么?
 - 浏览器中全局指向window
+ 但是在开发中不会在全局使用this，通常是在函数中使用
 - 所有的函数在调用时，都会创建一个执行上下文
 - 这个上下文栈记录这函数的调用栈、AO对象等等
 - this也是其中的一条记录
+ this的绑定规则
 - 1:隐式绑定 ```05_implicitBindThis.js```
    * 必须在调用的对象内部有一个对函数的引用
    * 如果没有这样的引用，在进行调用时，会报找不到该函数的错误
    * 正式通过这个引用间接的将this绑定到了这个对象上
 - 2:默认绑定 ```04_defaultBindThis.js```
    * 独立函数调用 
 - 3:显示绑定 ```06_explicitBindThis.js```
    * JavaScript中所有函数都可以使用call是apply方法(与Prototype有关)
    * 这两个函数的第一个参数都要求是个对象，这个对象的作用就是调用这个函数时，会将this绑定到这个传入的对象上
 - 4:new绑定 
+ 优先级
   - 显示绑定的优先级最低
   - 显式绑定高于隐式绑定
   - new高于隐式绑定
   - new高于显示绑定
+ 绑定规则之外
   - 忽略显示绑定
     * apply/call/bind 当传入undefined和null的时候 this指向window
   - 间接函数引用
   - 箭头函数(arrow function)
      * 箭头函数不会绑定this、arguments属性
      * 箭头函数不能作为构造函数使用




