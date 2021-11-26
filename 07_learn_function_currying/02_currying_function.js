// function sum(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }
// console.log(sum(1)(2)(3))

//柯里化:单一职责
function add1(x,y,z){
    x = x + 2
    y = y * 2
    z = z ^ 2
    return x + y + z
}
function add2(x){
    x = x + 2 
    return function(y){
        y = y * 2 
        return function(z){
            z = z * z 
            return x + y + z 
        }
    }
}
console.log(add2(10)(20)(30))


//柯里化 逻辑复用 01
function sum(m,n){
    return m + n
}
console.log(sum(5,10))
console.log(sum(5,12))
//假设一直需要5和其他数字相加
function makeAdder(count){
    return function(num){
        return count + num
    }
}
const add5 = makeAdder(5)
console.log(add5(10));
const add10 = makeAdder(10)
console.log(add10(10))

//逻辑复用02
function log(date,type,message){
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)
}
log(new Date(),'error','输出了一条日志')
//柯里化
var log2 = date => (type,message) => {console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`)}
const nowLog = log2(new Date())
nowLog('FIX','解决轮播图问题');
nowLog('FEAT','添加主页');


//柯里化函数实现
function currying(fn){
    return function curried(...args){
        //1.当传入的参数大于等于已经接受的参数时，执行函数
        if(args.length >= fn.length){
            //判断接受参数的个数 函数本身需要接受的参数是否达到了一致
            return fn.apply(this,args)
        }else{
            //2.没有达到 返回一个新函数，继续接受函数
            return function(...args2){
                //3.递归调用curried
                return curried.apply(this,[...args,...args2])
            }
        }
    }
}

function add3(a,b){
    return a + b
}

const curryAdd = currying(add3)
console.log(curryAdd(1)(2))