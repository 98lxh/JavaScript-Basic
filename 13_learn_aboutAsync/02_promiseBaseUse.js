

class _Promise{
    constructor(callback){
        this.reslove = function(){

        }
        this.reject = function(){

        }
        callback(this.reslove,this.reject)
    }
}

function foo(){
    //传入的函数被称之为 executor
    return new Promise((resolve,reject)=>{
        console.log('promise传入的函数被执行')
       //成功回调resolve
        // resolve('成功')
        reject('失败')
    })
}

const fooPromise = foo()


//then方法会在传入回调函数 会在Promise执行resolve函数时被回调

//then方法传入两个回调函数
// -> 第一个回调函数，会在Promise执行resolve函数时，被回调
// -> 第二个回调函数，会在Promise执行reject函数时，被回调
fooPromise.then((res)=>{
    console.log(res)
},(err)=>{
    console.log(err)
})


