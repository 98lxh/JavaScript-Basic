var foo = 'foo'

// if(true){
    // 块中，使用let const声明变量
    // 暂时性死区
    // console.log(foo) //Cannot access 'foo' before initialization
    // let foo = 'abc'
// }

function bar(){
    console.log(foo) //Cannot access 'foo' before initialization
    let foo = 'abc'
}
bar()