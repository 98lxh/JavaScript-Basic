//迭代器对象
// const iterator = {
//     next:function(){
//         return {done:true,value:123}
//     }
// }

//数组
const names = ['abc','cba','nba']

//创建一个迭代器对象访问数组
let index  = 0
const namesIterator = {
    next:function(){
        if(index < names.length){
            return {done:false,value:names[index++]}
        }else {
            return {done:true,value:undefined}
        }
    }
}

// const iterator = names[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())