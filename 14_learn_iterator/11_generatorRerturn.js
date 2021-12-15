function* foo(num){
    console.log('函数开始执行')
    const value1 = 100 * num
   try{
     yield value1
   }catch(e){
       console.log('捕获到异常',e)
       yield 'abc'
   }

    const value2 = 200 
    const m = yield value2
    
    const value3 = 300 * m
    yield value3
    
    console.log('函数执行结束')
}


const generator = foo(10)
console.log(generator.next(10))
//相当于在第二段代码后添加上了return 就会提前终止生成器函数
// console.log(generator.return(20))

//相当于在第二段后添加了throw了error -> 如果捕获了异常可以继续执行
console.log(generator.throw(20))

