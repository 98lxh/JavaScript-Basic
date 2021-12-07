//symbol的基本使用


//es6之前对象的属性名(key)
var obj = {
    name :'xiaosu',
    friends:{name:'xiaoliu'}
}


obj['name'] = 'james'
console.log(obj)
//es6 symbol的使用
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2)


const s3 = Symbol('aaa')
//es10 Symbol的描述
console.log(s3.description)

//3.Symbol值作为key
const obj1 = {
    [s1]:'abc',
    [s2]:'cba'
}

console.log(obj1[s1])

//新增属性
obj[s3] = 'nba'
console.log(obj1)


const s4 = Symbol()
//Obejct.defineProperty
Object.defineProperty(obj1,s4,{
    value:"mba"
})
console.log(obj1)
//无法通过点语法获取
console.log(obj1[s4])

//使用Symbol作为key 遍历是获取不到这些值
console.log(Object.keys(obj1))
console.log(Object.getOwnPropertySymbols(obj1))
//symbol遍历
const keys = Object.getOwnPropertySymbols(obj1)
for(let key of keys){
    console.log(obj1[key])
}

//
const sa = Symbol.for('aaa');
const sb = Symbol.for('aaa');
console.log(sa === sb) //true

const sc = Symbol.keyFor(sa)
console.log(obj1[sc])
