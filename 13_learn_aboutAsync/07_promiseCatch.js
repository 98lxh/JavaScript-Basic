// const promise = new Promise((resolve,reject)=>{
//     // reject('rejected stataus')
//     resolve('aaa')
//     // throw new Error('reject status~~~') 也会进入then的第二个回调
// })


//当executor抛出异常时，也是会调用错误(拒绝)捕获的回调函数
// promise.then(undefined,err=>{
    // console.log('err:',err)
// })


//2.通过catch方法来传入错误(拒绝)捕获的回调函数
// promise a+ 规范
// promise.then(res=>{
//     return new Promise((resolve,reject)=>{
//         reject('then rejected status')
//     })
// }).catch(err => {
//     console.log(err)
// })


//3.拒绝捕获的问题
// const promise = new Promise((_,reject)=>{
//     reject(1111)
// })
// promise.then(res=>{
//  //没有捕获问题
// },err=>{
//     console.log(err)
// })

// promise.catch(err=>{
//     console.log(err)
// })


//4.catch的返回值
const promise = new Promise((_,reject)=>{
    reject(1111)
})

promise.catch(err=>{
    console.log(err)
    return 'catch return value'
}).then(res=>{
    console.log('resolve:',res)
}).catch(err=>{
    console.log(err)
})