/**
 * 返回值：
 *      异步函数一定返回一个promise
 */
async function foo(){
    console.log('foo function start~~')
    console.log('foo function end~~')
    return {
        then(resolve){
            resolve(123)
        }
    }
}
const promise = foo()
promise.then(res => {
    console.log(res) //按async函数的最后返回值决定 没有返回值默认返回 undefined
})