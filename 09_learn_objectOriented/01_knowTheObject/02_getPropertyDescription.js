var info = {
    name: 'xiao su',
    _age: 18,
    _address:'北京市',
}
Object.defineProperties(info,{
    name:{
        writable:true
    },
    age:{
        configurable:true
    }
})

//获取某个特定属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(info,'name'))  //{value: 'xiao su',writable: true,enumerable: true,configurable: true}
//获取对象所以的属性描述符
console.log(Object.getOwnPropertyDescriptors(info))