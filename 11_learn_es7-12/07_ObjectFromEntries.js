const obj = {
    name:'xiao su',
    age:18,
    height:1.88
}

const entries = Object.entries(obj)
console.log(entries) //[ [ 'name', 'xiao su' ], [ 'age', 18 ], [ 'height', 1.88 ] ]

const newObj = {}

//in 拿到的是数组的索引
for(const [key,value] of entries){
    newObj[key] = value
}
console.log(newObj) //{ name: 'xiao su', age: 18, height: 1.88 }

//es10 Object.fromEntires
const newObj2 = Object.fromEntries(entries)
console.log(newObj2) //{ name: 'xiao su', age: 18, height: 1.88 }


//应用场景
const queryString = 'name=xiaosu&age=18'
const queryParams = new URLSearchParams(queryString)
for(const [key,value] of queryParams){
    console.log(key,value)
}