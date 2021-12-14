//面试题 1   

/***
 * macrotaskQueue -> 
 * microtaskQueue-> 
 * log:
 *  promise1
 *  2
 *  then1
 *  queueMicrotask1
 *  then3
 *  setTimeout1
 *  then2
 *  then4
 *  setTimeout2
*/

// (() => {
//     setTimeout(() => {
//         console.log('setTimeout 1')
//         new Promise(function(resolve){
//             resolve()
//         }).then(function(){
//             new Promise(function(resolve){
//                 resolve()
//             }).then(function(){
//                 console.log('then 4')
//             })
//             console.log('then 2')
//         })
//     })
    
//     new Promise(function (resolve){
//         console.log('promise1')
//         resolve()
//     }).then(function (){
//         console.log('then1')
//     })

//     setTimeout(function(){
//         console.log('setTimeout2')
//     })
//     console.log(2)
//     queueMicrotask(() => {
//         console.log('queueMicrotask1')
//     })

//     new Promise(function(resolve){
//         resolve()
//     }).then(function(){
//         console.log('then 3')
//     })
// })()


//面试题2
/**
 * macrotaskQueue: 
 * microtaskQueue: 
 * log:
 *  script start
 *  async1 start1
 *  async2
 *  promise1
 *  script end
 *  async1 end
 *  promise2
 *  setTimeout
*/
// (() => {
// async function async1(){
//     console.log('async1 start1')
//     await async2();
//     console.log('async1 end')
// }

// async function async2(){
//     console.log('async2')
// }

// console.log('script start')
// setTimeout(() => {
//     console.log('setTimeout')
// },0)
// async1()
// new Promise(function(resolve){
//     console.log('promise1')
//     resolve()
// }).then(function(){
//     console.log('promise2')
// })
// console.log('script end')
// })()


/**
 * promise面试题
*/
/**
 * microtask :
 * log :
 *   0
 *   1
 *   4
 *   2
 *   3
 *   5
 *   6
*/
//1.
Promise.resolve().then(() => {
    console.log(0)
    // return Promise.resolve(4)
    return 4
}).then(res => {
    console.log(res)
})


Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() => {
    console.log(6)
})