function requestData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url === 'xs') {
                const names = [1,2,3]
                resolve(names)
            }else {
                const message = 'request error'
                reject(message)
            }
        },3000)
    })
}

const p = requestData('x')

p.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})