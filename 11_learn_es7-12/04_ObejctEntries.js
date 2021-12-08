const obj = {
    name:'xxx',
    age:18
}

//获得一个数组 每个item也是一个数组存放key，value
const objEntries = Object.entries(obj)
console.log(objEntries) //[ [ 'name', 'xxx' ], [ 'age', 18 ] ]

for(const [key,value] of objEntries){
    console.log(key,value)
}
