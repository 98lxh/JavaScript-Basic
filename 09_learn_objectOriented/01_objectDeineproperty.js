var info = {
    name: 'xiao su',
    //私有属性(js里是没有严格意义的私有属性)
    _age: 18,
    _address:'北京市',
    // set age(){

    // },
    // get age(){

    // }
}

//1.定义单个属性描述符
// var newInfo = Object.defineProperty(info,'address',{
// //   value:'北京市',//属性值
// //   writable:false, //是否可写
//   configurable:false, //是否可配置
//   enumerable:false, //是否可以被枚举
//   get(){
//     foo();
//     return this._address
//   },
//   set(newVal){
//     this._address = newVal
//   }
// })
// info.address

// function foo(){
//     console.log('获取了address的值')
// }

//2.定义多个属性描述符
Object.defineProperties(info,{
    name:{
        writable:true,
        enumerable:true,
    },
    age:{
        configurable:true,
        enumerable:false,
        get(){
            return this._age
        },
        set(newVal){
            this._age = newVal
        }
    }
})