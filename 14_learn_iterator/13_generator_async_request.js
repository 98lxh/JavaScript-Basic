function requestData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve(url)
        },1000)
    })
}

//需求
// 1. -> url -> res:'res'
// 2. res + 'aaa' -> res:'xsaaa' 
// 3. res + 'bbb' -> res:'xsaaabbb'

//第一种:回调地域
// requestData('xs').then(res => {
//     requestData(res + 'aaa').then(res => {
//         requestData(res + 'bbb').then(res => {
//             console.log(res)
//         })
//     })
// })

//第二种:promise then的返回值
// requestData('xs')
// .then(res => requestData(res + 'aaa'))
// .then(res => requestData(res + 'bbb'))
// .then(res => {console.log(res)})

//第三种:  Promise + generator
// function* getData(){
//     const res1 = yield requestData('xs')
//     const res2 = yield requestData(res1 + 'aaa')
//     const res3 = yield requestData(res2 + 'bbb')
//     const res4 = yield requestData(res3 + 'ccc')
//     console.log(res4)
// }


//手动执行
// const generator = getData()
// generator.next().value.then(res => {
//     generator.next(res).value.then(res => {
//         generator.next(res).value.then(res => {
//             console.log(res)
//         })
//     })
// })

// function execGenerator(genFn){
//     const generator = genFn()
//     function exec(res){
//         const result = generator.next(res)
//         if(result.done) return result.value
//         result.value.then(res => {
//             exec(res)
//         })
//     }
//     exec()
// }

// execGenerator(getData)
// co 函数



//async await
async function getData(){
    const res1 = await requestData('xs')
    const res2 = await requestData(res1 + 'aaa')
    const res3 = await requestData(res2 + 'bbb')
    const res4 = await requestData(res3 + 'ccc')
    console.log(res4)
}
getData()