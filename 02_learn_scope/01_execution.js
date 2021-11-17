var name = 'why';
var num1 = 20;
var num2 = 30;
var result = num1 + num2;


/**
 * 1.代码被解析,v8内部会创建一个对象(GlobalObject)
 * 2.运行代码
 *   2.1 v8引擎为了执行代码,内部会先创建一个执行上下文栈(Execution Context stack ECStack ECS)(函数调用栈)
 *   2.2 执行的是全局代码，需要创建代码能正常执行，需要创建全局执行上下文(Global Execution Context GEC)
*/

//GlobalObject -> go  伪代码
var GlobalObject = {
    String:'class',
    Date:'class',
    setTimeout:'function',
    window:GlobalObject, //window.window.window.window.window .....
    name:undefined,
    num1:undefined,
    num2:undefined,
    result:undefined
}