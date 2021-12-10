const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(111)
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(111)
    },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(111)
    },3000)
})

Promise.allSettled([p1,p2,p3,'aaa']).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
