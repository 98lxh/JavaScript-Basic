const promise = new Promise((resolve,reject)=>{
    reject('resolve message')
})

promise.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log('err:',err)
}).finally(()=>{
    //一定执行
    console.log('finally ')
})