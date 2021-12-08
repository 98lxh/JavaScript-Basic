let finalRegistry = new FinalizationRegistry(()=>{
    console.log('有对象被销毁了~~')
})
let obj = {name:'xiao su'};
// let info = obj //强引用 这里obj null后对象不会被销毁
let info = new WeakRef(obj) //弱引用 会被回收
finalRegistry.register(obj)
finalRegistry.register(info)

obj = null