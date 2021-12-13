//promise 类方法 resolve


// function foo(){
//     const obj = {
//         name:'xiao su'
//     }
//    return new Promise(resolve=>{
//        resolve(obj)
//    })
// }

// foo().then(res=>{
//     console.log(res)
// })

const promise = Promise.resolve({name:'xiao su'})
promise.then(res=>{
    console.log(res)
})
//相当于
new Promise(resolve=>{
    resolve({name:'xiaosu'})
})