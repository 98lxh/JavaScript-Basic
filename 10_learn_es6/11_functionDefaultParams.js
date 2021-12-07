//函数默认值
function foo_es5(m,n){
    //es5参数默认值
    //缺点：写法麻烦 阅读性差
    //      有漏洞 比如foo(0,"")
    m = m || 'aaa'
   n = n || 'bbb'
    console.log(m,n)
}

function foo_es6(m = 'aaa',n = 'bbb'){
    console.log(m,n)
}
foo_es5()
foo_es6()

//对象参数默认值和解构
// function printInfo({name, age} = {name:'why',age:18}){
//     console.log(name)
//     console.log(age)
// }

// printInfo(
//     {
//         name:'xiao su',
//         age:18
//     }
// )

//第二种写法
function prinftInfo({name = 'xiao su', age = 18} = {}){
    console.log(name,age)
}
prinftInfo()
prinftInfo({name:'xiao liu',age:24})

//有默认值的参数最后放最后
function bar(x,y,z = 20){
    console.log(x,y,z)
}
//有默认值的参数不算在length之内
console.log(bar.length)