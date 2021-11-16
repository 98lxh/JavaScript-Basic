## 浏览器中Javascript是如何执行的？
### 浏览器的内核
> 当前主流的浏览器分为 Firefox的Gecko IE的Trident(edge转向blink) 
> Safari chrome的webkit和webkit 的分支Blink

 事实上浏览器的内核又被成为浏览器的排版引擎

> 排版引擎(layout engine),也被成为```浏览器引擎```(browser engine)、```页面渲染引擎```(rendering engine)
> 或者```样板引擎```

``执行流程1:depend/complie-1.png``

## 浏览器渲染流程
> 当HTML解析过程中遇到了JavaScript标签，浏览器会停止解析HTML，而去加载JavaScript代码

 ```执行流程2:depend/complie-2.png```

## javascript引擎
### 为什么需要js引擎？
> cpu只认识自己的指令集，实际上是机器预言，才能被cpu执行
> 所有我们需要js引擎将js代码翻译成cpu指令才能执行
### 浏览器内核和js引擎的关系
以webkit为例，webkit由两部分组成：
> WebCore:负责HTML解析、布局、渲染等等工作;
> JavaScriptCore:解析、执行JavaScript;
> 在小程序中辨析的JavaScript就是被JScore执行的
## V8引擎
V8是用C++编写的Google开源高性能JavaScript和WebAssenbly引擎，他用于Chrome和Node.js等
V8可以独立运行，也可以嵌入到C++应用程序中

```V8引擎：depend/V8.png```

> js代码由Parse模块转换成AST(抽象语法树)
> Ignition是一个解释器，会将AST转换成ByteCode字节码
> TurboFun是一个编译器，可以将机器吗编译成CPU可以直接执行的机器码

