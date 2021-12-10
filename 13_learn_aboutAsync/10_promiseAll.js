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

//需求：所有的promise变成fulfilled时在拿到结果
Promise.all([p1,p2,p3,'aaa']).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
