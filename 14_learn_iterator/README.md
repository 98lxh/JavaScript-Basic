### 什么是迭代器
+ 是确使用户可在容器对象(container，例如链表或数组)上遍访的对象，使用该接口无需关心对象的内部实现细节。
    -  其行为像数据库中的光标，迭代器最早出现在1974年设计的CLU编程语言中;
    - 在各种编程语言的实现中，迭代器的实现方式各不相同，但是基本都有迭代器，比如Java、Python等;
+ JavaScript中，迭代器也是一个具体的对象，这个对象需要符合迭代器协议(iterator protocol):
    - 迭代器协议定义了产生一系列值(无论是有限还是无限个)的标准方式;
    - 那么在js中这个标准就是一个特定的next方法;
+ next方法有如下的要求:
    - 一个无参数或者一个参数的函数，返回一个应当拥有以下两个属性的对象:
    -  done(boolean)
        * 如果迭代器可以产生序列中的下一个值，则为 false。(这等价于没有指定 done 这个属性。)
        * 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。
    - value
        * 迭代器返回的任何 JavaScript 值。done 为 true 时可省略。
### 原生的迭代器对象
+ 事实上平时创建的原生对象已经实现了可迭代协议，会生成一个迭代器对象:
    - String、Array、Map、Set、arguments对象、NodeList集合;
### 可迭代对象的应用
+ 那么这些东西可以被用在哪里呢?
    - JavaScript中语法:for ...of、展开语法(spread syntax)、yield*(后面讲)、解构赋值(Destructuring_assignment)
    - 创建一些对象时:new Map([Iterable])、new WeakMap([iterable])、new Set([iterable])、new WeakSet([iterable]);
    -  一些方法的调用:Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable);
### 什么是生成器?
+ 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。
+ 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。
+ 生成器函数也是一个函数，但是和普通的函数有一些区别:
    - 首先，生成器函数需要在function的后面加一个符号:*
    - 其次，生成器函数可以通过yield关键字来控制函数的执行流程:
    - 最后，生成器函数的返回值是一个Generator(生成器):
### 生成器替代迭代器
+ 我们发现生成器是一种特殊的迭代器，那么在某些情况下我们可以使用生成器来替代迭代器:
+ 事实上我们还可以使用yield*来生产一个可迭代对象:
    - 这个时候相当于是一种yield的语法糖，只不过会依次迭代这个可迭代对象，每次迭代其中的一个值;
### 异步函数 async function
+ async关键字声明一个异步函数
    - async是asynchronous单词的缩写 异步非同步
    - sync是synchronous单词的缩写 同步同时


    

