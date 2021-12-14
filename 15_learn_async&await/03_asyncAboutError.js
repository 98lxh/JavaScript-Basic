/**
 * 异步函数的异常作为promise的reject的值
*/
async function foo(){
    throw new Error('error messsage')
}

foo().catch(err => {

})

console.log('后续代码')