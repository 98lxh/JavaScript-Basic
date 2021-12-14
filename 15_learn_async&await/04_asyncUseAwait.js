//1.await 表达式
function requestData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(222)
        }, 2000)
    })
}
// async function foo(){
//     //await 表达式(promise)
//     // 拿到resolve的结果
//     const res = await requestData()
//     console.log('-------',res)
//     const res2 = await requestData()

// }
// foo()

//2.普通值
// async function foo(){
//     // const res1 = await 123
//     // console.log('res1',res1)
//     const res1 = await {
//         then:function(resolve,reject){
//             resolve('abc')
//         }
//     }
//         console.log('res1',res1)

// }

// foo()


//3.reject
async function foo(){
    try{
        const res = await requestData()
    }catch(err){
        console.log('err1:',err)
    }
}

//错误处理一:
// foo().catch(err => {
//     console.log('err1:',err)
// })

foo() //try catch处理