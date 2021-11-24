Function.prototype._apply = function (context,args){
    context = (context !==null && context !== undefined) ? Object(context): window ;
    context[Symbol.for('fn')] = this;
    const result = context[Symbol.for('fn')](...args);
    delete context.fn;
    return result
}

function testApply(name,age){
    console.log(this,name,age)
}

testApply._apply({fn:0},['bubu',18])