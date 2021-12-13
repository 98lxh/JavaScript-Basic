/**
 * resolve(参数)
 *  > 普通值或者对象
 *  > 如果传入一个Promise
 *      - 那么当前的promise有传入的promise决定
 *  > 如果传入一个对象，并且这个对象有实现then方法，
 *      那么也会执行then方法状态也由于then方法实现
*/
// 1.传入promise的特殊情况
// const newPromise = new Promise((resolve,reject)=>{
//     resolve('这是一个传入的promise')
// }) 

// new Promise((resolve,reject)=>{
//     // resolve({name:'lxh'})
//     //pedding -> fulfilled 如果传入的是个promise
//     resolve(newPromise)
// }).then(res=>{
//     console.log(res)
// },err=>{

// })


//2.传入对象 对象有then方法

new Promise((resolve,reject)=>{
    // resolve({name:'lxh'})
    //pedding -> fulfilled 如果传入的是个promise
    const obj = {
        then(resolve,reject){
            resolve('resolve message')
        }
    }

    resolve(obj)
}).then(res=>{
    console.log(res)
},err=>{

})