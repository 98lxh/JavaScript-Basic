Function.prototype._bind = function(context,...argArray){
    //获取真实调用的函数
    var fn = this;
    //绑定this
    context = (context !==null && context !== undefined) ? Object(context) : window
    return function proxyFn(...args){
        context[Symbol.for('fn')] = fn
        var result = context[Symbol.for('fn')](...[...argArray,...args]);
        delete context[Symbol.for('fn')]
        return result
    }
}

function foo(a,b,c,d){
    console.log(this,a,b,c,d);
}

var bar = foo._bind('123','a','b')
bar('c','d')
bar('c','d')