var obj = {
    name:'xiao su',
    age:18
}

var info = Object.create(obj,{
    address:{
        value:'北京',
        enumerable:true
    }
})


//hasOwnProperty 属性是不是在自己身上
// console.log(info.hasOwnProperty('address')) //true
// console.log(info.hasOwnProperty('name')) //false


//in 操作符 :不管在当前对象还是在原型上找到了都返回true
// console.log('address' in info) //true
// console.log('name' in info) //true

for(var key in info){
    //原型上的属性也会被拷贝
    // console.log(key)
}


//instanceof 检测某一个构造函数原型 是否出现某一个对象的原型链上

function instanceOf(SubType,SuperType){
    let p = SubType.__proto__
    while(p){
        if(p === SuperType.prototype) return true
        p = p.__proto__
    }
    return false
}


console.log(instanceOf([], Array))

//isPrototypeOf
console.log(Object.prototype.isPrototypeOf({})) //true
