const PROMISE_STATUS_PEDDING = 'pedding'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

function execFunctionWithCatchError(execFn,value,resolve,reject){
    try{
        const result = execFn(value)
        resolve(result)
    }catch(err){
        reject(err)
    }
}

class _Promise{
    constructor(executor){
        this.status = PROMISE_STATUS_PEDDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        /**
         * @function
         * @param {*} value 传递参数
        */
        const resolve = (value) => {
            if(this.status === PROMISE_STATUS_PEDDING){
               queueMicrotask(()=>{
                  if(this.status !== PROMISE_STATUS_PEDDING) return
                  this.status = PROMISE_STATUS_FULFILLED
                  this.value = value
                  //then传递来的第一个回调函数
                  this.onFulfilledCallbacks.forEach(fn => {
                      fn(this.value)
                  })
               })
            }
        }

         /**
         * @function
         * @param {*} reason 拒绝的理由
        */
        const reject = (reason) => {
            if(this.status === PROMISE_STATUS_PEDDING){
                queueMicrotask(()=>{
                     if(this.status !== PROMISE_STATUS_PEDDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    //then传入的第二个回调
                    this.onRejectedCallbacks.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }

        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
    }
    /**
     * @function then方法
     * @param {function} onFulfilled 状态为fulfilled时执行的回调
     * @param {function} onRejected 状态为rejected时执行的回调
     * @returns {object} Promise实例
    */
   then(onFulfilled,onRejected){
       onRejected = onRejected || (err => {throw err})
       return new _Promise((resolve,reject) => {
            //如果有异步的任务 在之后resolve/reject之后执行then 可以直接做执行
            if(this.status === PROMISE_STATUS_FULFILLED && onFulfilled){
                execFunctionWithCatchError(onFulfilled,this.value,resolve,reject)
            }
            if(this.status === PROMISE_STATUS_REJECTED && onRejected){
                execFunctionWithCatchError(onRejected,this.reason,resolve,reject)
            }
            //状态为pedding时才加入到数组
            if(this.status === PROMISE_STATUS_PEDDING){
                 onFulfilled && this.onFulfilledCallbacks.push(()=>{
                    execFunctionWithCatchError(onFulfilled,this.value,resolve,reject)
                 })
                 onRejected && this.onRejectedCallbacks.push(()=>{
                    execFunctionWithCatchError(onRejected,this.reason,resolve,reject)
                 })
            }
       })
   }

   /**
    * @function catch方法
    * @param {function} onRejected 失败的回调
    * @returns {obejct} Promise实例
   */
   catch(onRejected){
       this.then(undefined,onRejected)
   }
}

const promise = new _Promise((resolve,reject)=>{
    reject(111)
})

promise.then(res => {
    console.log('res1:',res)
}).catch(res=>{
    console.log('err2',res)
})