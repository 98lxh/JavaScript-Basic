let finalRegistry = new FinalizationRegistry(()=>{
    console.log('有对象被销毁了~~')
})
let obj = {name:'xiao su'};
let info = {age:18}
finalRegistry.register(obj)
finalRegistry.register(info)

obj = null
info = null