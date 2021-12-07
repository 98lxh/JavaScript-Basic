//函数的剩余参数
function foo(m,n,...args){
    console.log(m,n,args) //1 2 [ 3, 4, 5, 6 ]
    console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
}
foo(1,2,3,4,5,6)   