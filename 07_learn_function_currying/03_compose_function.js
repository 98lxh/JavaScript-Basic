function double(num){
    return num * 2
}

function square(num){
    return num ** 2
}

var count = 10

var result = square(double(count))
console.log(result)

function composeFn(m , n) {
    return function(count) {
       return n(m(count))
    }
}


var newFn1 = composeFn(double,square)
console.log(newFn1(10))

//组合函数
function myCompose(...fns) {
    var len = fns.length
    for(var i = 0; i < len; i++) {
        if(typeof fns[i] !== 'function'){
           throw new TypeError('Expected arguments are function')
        }
    }
    return function(...args) {
        var index = 0;
        var result = len ? fns[index].apply(this,args) : args
        while(++index < len){
            result = fns[index].call(this,result)
        }
        return result
    }
}

var newFn = myCompose(double,square)
console.log(newFn(10))