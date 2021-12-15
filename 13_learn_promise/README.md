## Promise的基本使用
### 什么是Promise
+ Promise是一个类，可以翻译成 承诺、许诺 、期约;
+ 当我们需要给予调用者一个承诺:待会儿我会给你回调数据时，就可以创建一个Promise的对象;
+ 通过new创建Promise对象时，我们需要传入一个回调函数，我们称之为executor
    - 这个回调函数会被立即执行，并且给传入另外两个回调函数resolve，reject
    - 当我们调用resolve回调函数时，会执行Promise对象的then方法传入回调函数
    - 当我们调用reject回调函数时，会执行Promise对象的catch方法传入回调函数
+ 通常我们会在Executor中确定我们的Promise状态:
    - 通过resolve，可以兑现(fulfilled)Promise的状态，我们也可以称之为已决议(resolved);
    - 通过reject，可以拒绝(reject)Promise的状态;
+ 这里需要注意:一旦状态被确定下来，Promise的状态会被 锁死，该Promise的状态是不可更改的
    - 在我们调用resolve的时候，如果resolve传入的值本身不是一个Promise，那么会将该Promise的状态变成兑
现(fulfilled);
    - 在之后我们去调用reject时，已经不会有任何的响应了(并不是这行代码不会执行，而是无法改变Promise状态);
+ resolve不同值的区别
    - 情况一:resolve了一个普通对象，那么这个对象作为then方法回调的参数
    - 情况二:resolve了一个Promise，那么这个新的Promise将决定原Promise的状态
    - 情况三:resolve了传入了一个对象，并且这个对象实现了then方法，name会执行这个对象的then方法，并且根据then方法结果决定promise的状态
### then方法
+ then方法是Promise对象上的方法:它其实是放在Promise原型上的：Promise.prototype.then
+ then方法接受两个参数:
    - fulfilled的回调函数:当状态变成fulfilled时会回调的函数;
    - reject的回调函数:当状态变成reject时会回调的函数;
### then方法多次调用
+ 一个Promise的then方法是可以被多次调用的:
    - 每次调用我们都可以传入对应的fulfilled回调;
    - 当Promise的状态变成fulfilled的时候，这些回调函数都会被执行;
### then方法的返回值
+ then方法本身是有返回值的，它的返回值是一个Promise，所以我们可以进行如下的链式调用:
    - 但是then方法返回的Promise到底处于什么样的状态呢?
+  Promise有三种状态，那么这个Promise处于什么状态呢?
    - 当then方法中的回调函数本身在执行的时候，那么它处于pending状态;
    - 当then方法中的回调函数返回一个结果时，那么它处于fulfilled状态，并且会将结果作为resolve的参数;
        - 情况一:返回一个普通的值;
        - 情况二:返回一个Promise;
        - 情况三:返回一个thenable值;
+ 当then方法抛出一个异常时，那么它处于reject状态;
### catch方法多次调用
+ catch方法也是Promise对象上的一个方法:它也是放在Promise的原型上的 Promise.prototype.catch
+ 一个Promise的catch方法是可以被多次调用的
    - 每次调用我们都可以传入对应的reject回调;
    - 当Promise的状态变为reject的时候，这些回调都会被执行
### catch方法的返回值
+ 事实上catch方法也会返回一个Promise对象，所以catch方法后面同样可以继续调用then方法或者catch方法
    - 下面的代码，后续是catch中的err2打印还是在then的res中打印?
    ```javascript
    promise.catch(err1=>{
        console.log(err1)
    }).catch(err2=>{
        console.log(err2)
    }).then(res=>{
        console.log(res)
    })
    ```
    - 答案是在res打印，这是因为catch传入的回调在执行完成后，默认状态仍然是fulfilled的
+ 如果我们希望后续继续执行catch 那么需要抛出一个异常
    ```javascript
    promise.catch(err=>{
        console.log(err)
        throw new Error('error message')
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
    ```
### finally方法
+ finally是在ES9(ES2018)中新增的一个特性:表示无论Promise对象无论变成fulfilled还是reject状态，最终都会被执行的代码。
+ finally方法是不接收参数的，因为无论前面是fulfilled状态，还是reject状态，它都会执行。
### resolve方法
+ 前面我们学习的then、catch、finally方法都属于Promise的实例方法，都是存放在Promise的prototype上的。
+ 有时候我们已经有一个现成的内容了，希望将其转成Promise来使用，这个时候我们可以使用 Promise.resolve方法来完成。
### reject方法
+ reject方法类似于resolve方法，只是会将Promise对象的状态设置为reject状态。
+ Promise.reject的用法相当于new Promise，只是会调用reject:
### all方法
+ 另外一个类方法是Promise.all:
    -  它的作用是将多个Promise包裹在一起形成一个新的Promise;
    - 新的Promise状态由包裹的所有Promise共同决定:
### allSettled方法
+ all方法有一个缺陷:当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态。 
    - 那么对于resolved的，
    - 以及依然处于pending状态的Promise，我们是获取不到对应的结果的;
+ 在ES11(ES2020)中，添加了新的API Promise.allSettled:
    - 该方法会在所有的Promise都有结果(settled)，无论是fulfilled，还是reject时，才会有最终的状态; 
    - 并且这个Promise的结果一定是fulfilled的;
### race方法
+ 如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法:
    - race是竞技、竞赛的意思，表示多个Promise相互竞争，谁先有结果，那么就使用谁的结果;
### any方法
+ any方法是ES12中新增的方法，和race方法是类似的:
    - any方法会等到一个fulfilled状态，才会决定新Promise的状态;
    -  如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态
### 手写promise总结
+ Promise规范:
    - Promise A+
+ Promise类设计
    - class _Promise{}
+ 构造函数的规划
- ```javascript
    class _Promise{
        constructor(executor){
            //定义状态
            //定义resolve reject回调
            //resolve:执行微任务队列 改变状态  获取value then传入执行成功回调
            //reject:执行微任务队列 改变状态  获取reason then传入执行拒绝回调
            executor(resolve,reject)
        }
    }
    ```
+ then方法的实现
- ```javascript
    class _Promise{
        then(onFulfilled,onRejected){
            //this.onFulfilled = onFulfilled
            //this.onRejected = onRejected
            //1. 判断onFulfilled onRejected 没有值会给默认值
            //2. 返回 Promise resolve reject
            //3. 判断之前的promise状态是否确定
            // onFulfilled onRejected 直接执行(捕获异常)
            //4. 添加到数组push(()=>{
            // 执行onFulfilled onRjected直接执行代码   
            //})
        }
    }
  ```
+ catch方法的实现
- ```javascript
    class _Promise{
        catch(onRejected){
            return this.then(undefined,onRejected)
        }
    }
  ```
+ finally方法
- ```javascript
    class _Promise{
        catch(onFinally){
            return this.then(()=>{
                onFinally()
            },()=>{
                onFinally()
            })  
        }
    }
  ```


  

