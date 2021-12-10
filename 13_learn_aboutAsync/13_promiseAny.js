const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(111)
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(222)
    },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(333)
    },3000)
})


//any必须等待一个resolve的结果，如果全是reject的话 会走catch抛出错误


//gregateError: All promises were rejected
Promise.any([p1,p2,p3]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
