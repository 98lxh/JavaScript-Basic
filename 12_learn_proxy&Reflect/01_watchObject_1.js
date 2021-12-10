const obj = {
    name:'lxh',
    age:18
}

Object.keys(obj).forEach(key=>{
   const value = obj[key]
   Object.defineProperty(obj,key,{
       get(){
           console.log(`${key}被访问了`)
           return value
       },
       set(newVal){
        console.log(`${key}被设置了`)
        value = newVal
       }
   })
})

obj.name
obj.age