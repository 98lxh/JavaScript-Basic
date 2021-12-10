const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(111)
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(222)
    },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(333)
    },3000)
})


//只要有一个promise变成fulfilled状态那么这个结果作为promiseresolve的结果给then链式调用
Promise.race([p1,p2,p3]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
