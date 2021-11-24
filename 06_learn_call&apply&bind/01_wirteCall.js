Function.prototype._call = function(context,...rest){
    //指向调用的函数
    context = context || context === 0 ? Object(context) : window
    context.fn=this; //保存传入对象的上下文
    var result = context.fn(...rest); //eval执行
    delete context.fn; //删除用于保存上下文的对象
    return result; //返回执行结果
}

function foo(age,name){
    console.log(this,age,name)
}
console.log(foo._call(0,18,'bubu'));