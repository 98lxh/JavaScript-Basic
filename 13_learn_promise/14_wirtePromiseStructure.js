const PROMISE_STATUS = {
    PEADDING:'padding',
    FULFILLED:'fulfilled',
    REJECTED:'rejected'
}

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
        this.value = ''
        this.reason = ''
        this.status = PROMISE_STATUS.PEADDING
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value) => {
           if(this.status === PROMISE_STATUS.PEADDING){
               queueMicrotask(()=>{
                    if(this.status !== PROMISE_STATUS.PEADDING) return
                    this.status = PROMISE_STATUS.FULFILLED;
                    this.value = value;
                    this.onFulfilledCallbacks.forEach(cb => {
                        cb()
                    })
               });
           }
        }
        const reject = (reason) => {
            if(this.status === PROMISE_STATUS.PEADDING){
                queueMicrotask(()=>{
                    //promise 1 -> pending
                    if(this.status !== PROMISE_STATUS.PEADDING) return
                    this.status = PROMISE_STATUS.REJECTED;
                    this.reason = reason;
                    this.onRejectedCallbacks.forEach(cb => {
                        cb()
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
     * @param {cb} onFulfilled promise状态为成功执行的回调
     * @param {cb} onRejected promise状态为失败执行的回调
     * @returns
    */
    then(onFulfilled,onRejected){
      const defaultOnRejected = err => {throw err}
      const defaultOnFulfilled = value => {return value}
      onRejected = onRejected || defaultOnRejected
      onFulfilled = onFulfilled || defaultOnFulfilled
      return new _Promise((resolve,reject) => {
        if(this.status !== PROMISE_STATUS.PEADDING && onFulfilled){
            execFunctionWithCatchError(onFulfilled,this.value,resolve,reject)
        }
        if(this.status !== PROMISE_STATUS.PEADDING && onRejected){
            execFunctionWithCatchError(onRejected,this.reason,resolve,reject)           
        }
        if(this.status === PROMISE_STATUS.PEADDING){
            onFulfilled && this.onFulfilledCallbacks.push(() => {
                 execFunctionWithCatchError(onFulfilled,this.value,resolve,reject)
            })
            onRejected && this.onRejectedCallbacks.push(() => {
                 execFunctionWithCatchError(onRejected,this.reason,resolve,reject) 
            })
        }
      })
    }
    /**
     * @description catch方法
     * @param {cb} 失败的回调
    */
    catch(onRejected){
       return this.then(undefined,onRejected)
    }

    /**
     * @description finally方法
     * @param {cb} onFinally 最终执行的回调
    */
   finally(onFinally){
     this.then(() => {
        onFinally()
     },()=>{
        onFinally()
     })
   }

   /**
    * @description resolve静态方法
    * @param {*} value
   */
   static resolve(value){
       return new _Promise(resolve => resolve(value))
   }

   /**
    * @description reject静态方法
    * @param {*} value
   */
    static reject(reason){
        return new _Promise((resolve,reject) => reject(reason))
    }

    /**
     * @description all静态方法
     * @param {array} promise实例
    */
    static all(promises){
        return new _Promise((resolve,reject) => {
            const values = []
            promises.forEach(promise => {
                promise.then(res => {
                    values.push(res)
                    if(values.length === promises.length){
                        resolve(values)
                    }
                },err => {
                    reject(err)
                })
            })
        })
    }

     /**
     * @description allSettled静态方法
     * @param {array} promise实例
    */
      static allSettled(promises){
        return new _Promise((resolve,reject) => {
            const resluts = []
            promises.forEach(promise => {
                promise.then(res => {
                    resluts.push({
                        status:PROMISE_STATUS.FULFILLED,
                        value:res
                    })
                    if(resluts.length === promises.length){
                        resolve(resluts)
                    }
                },err => {
                    resluts.push({
                        status:PROMISE_STATUS.REJECTED,
                        value:err
                    })
                    if(resluts.length === promises.length){
                        resolve(resluts)
                    }
                })
            })
        })
    }

    /**
     * @description race静态方法
     * @param {array} promises 
    */
    static race(promises){
        return new _Promise((resolve,reject) => {
            promises.forEach(promise => {
                promise.then(resolve,reject)
            })
        })
    }

    /**
     * @description any静态方法
     * @param {array} promises 
    */
     static any(promises){
        return new _Promise((resolve,reject) => {
            const reasons = []
            promises.forEach(promise => {
                promise.then(res => {
                    resolve(res)
                },err => {
                    reasons.push(err)
                    if(reasons.length === promises.length){
                        reject(new AggregateError(reasons))
                    }
                })
            })
        })
    }
}


const p1 = new _Promise((resolve,reject) => {
    setTimeout(()=>{reject(111) },1000)
})

const p2 = new _Promise((resolve,reject) => {
    setTimeout(()=>{reject(222) },2000)
})

const p3 = new _Promise((resolve,reject) => {
    setTimeout(()=>{reject(333) },3000)
})


_Promise.any([p1,p2,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err.errors)
})
