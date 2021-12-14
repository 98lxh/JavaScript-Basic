//微任务和宏任务

setTimeout(() => {
 console.log('setTimeout')   
},1000)

queueMicrotask(() => {
    console.log('Microtask')   
})

Promise.resolve().then(() => {
    console.log('Promise Then')
})



//main script
function foo(){
    console.log('foo')
    bar()
}

function bar(){
    console.log('bar')
}


//执行任务宏任务之前都要保证微任务队列已经清空

//宏任务队列 macroTaskQueue:
/**
 * ajax dom ui rendering
*/
//微任务队列 microTaskQueue:
/**
 * queueMicrotask promise then Mutation_Observer
*/