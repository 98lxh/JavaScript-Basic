function* foo(num){
    console.log('函数开始执行')
    const value1 = 100 * num
    const n = yield value1

    const value2 = 200 * n
    const m = yield value2
    
    const value3 = 300 * m
    yield value3
    
    console.log('函数执行结束')
}

const generator = foo(5)

console.log(generator.next())

//第二段代码 第二次调用next执行
console.log(generator.next(10))
console.log(generator.next(25))