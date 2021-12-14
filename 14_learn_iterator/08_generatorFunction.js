function* foo(){
    console.log('函数开始执行')
    const value1 = 100
    console.log(value1)
    yield
    const value2 = 200
    console.log(value2)
    yield
    const value3 = 300
    console.log(value3)
    yield
    console.log('函数执行结束')
}

//调用生成器函数 返回一个生成器对象
const generator = foo()


//执行第一段
generator.next()
//执行第二段
generator.next()
//执行第三段
generator.next()
//执行第四段
generator.next()
