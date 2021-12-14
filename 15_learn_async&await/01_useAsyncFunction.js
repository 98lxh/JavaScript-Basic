//1.声明方式
async function foo(){}
const foo2 = async () => {

}
class Person{
    async foo(){

    }
}
//2.执行流程
async function foo3(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
}

//普通函数的执行流程一样
console.log(0)
foo3()
console.log(5)