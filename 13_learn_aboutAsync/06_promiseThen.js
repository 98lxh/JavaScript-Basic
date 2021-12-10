// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))

// class _Promise{
//     constructor(executor){
//         this.resolve = () => {
//             this.callback()
//         }
//         this.reject = () => {

//         }
//         executor(this.resolve,this.reject)
//     }

//     then(callback){
//         callback
//     }
// }


//同一promise可以多次调用then方法
//当我们resolve方法被回调时，所有的then方法传入的回调函数都会被调用
const promise = new Promise((resolve,reject)=>{
    resolve('res')
})

promise.then(res=>{
    console.log('res1: ' + res)
})

promise.then(res=>{
    console.log('res2: ' + res)
})

//2.then方法可以有返回值
// then方法本身也是有返回值的，他的返回值是一个promise
//没有返回值 -> undefined

// - 1.返回的是普通值(基本数据类型和普通对象),那么这个普通值会被作为一个新的promise的resolve值
promise.then(res => {
    //相当于:
    // return new Promise((resolve)=>{
    //     resolve('res3:' + res)
    // })
})
// - 2.返回的是一个Promise
promise.then(res => new Promise(resolve=>{
    setTimeout(()=>{
        resolve('res4:' + res)
    },3000)
})).then(res=>{
    console.log(res)
})


//- 3.返回了对象，且对象实现了thenable
promise.then(res=>{
    const obj = {
        then:function(resolve,reject){
            resolve('res5: ' + res)
        }
    }
    return obj
}).then(res=>{
    console.log(res)
})