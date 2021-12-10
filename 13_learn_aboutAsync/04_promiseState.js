//Promise状态一但确定 那么就是不能更改的(锁死)
const promise = new Promise((resolve,reject)=>{
    //pedding 等待状态       
    // resolve('res') //fulfilled -> resolved (成功)
    reject('err')  //rejected(拒绝)
}).then(res => {
    console.log(res) 
},err => {
    console.log(err)    
})
