//块级作用域补充
const names = [1,2,3]
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }


// //可不可以使用const
// {
//     let i = 0;
//     console.log(names[i])
// }

// {
//     //上面的i++ = result
//     let i = result //不同i 不同的块里分别定义了i
//     console.log(names[i])
// }


//可迭代对象
for(const name of names){
    console.log(name)
}

{
    const name = 1
    console.log(name)
}

{
    const name = 2
    console.log(name)
}