const obj = {
    name:'lxh',
    age:18
}

const proxy = new Proxy(obj,{
    /**
     * @function 获取值捕获器
     * @param {object} target 代理对象
     * @param {string} key 访问的key
    */
    get(target,key){
        console.log(`监听到${key}的访问`)
        return target[key]
    },
    /**
     * @function 设置值捕获器
     * @param {object} target 代理对象
     * @param {string} key 设置的属性key值
     * @param {*} newValue 设置的新值
    */
    set(target,key,newValue){
        console.log(`监听到${key}的设置`)
        target[key] = newValue
    },
    /**
     * @function 监听in操作符号
     * @param {object} target 代理对象
     * @param {string} key 设置的属性key值
    */
    has(target,key){
        console.log(`监听到${key}的in操作`)
    },
     /**
     * @function 监听delete操作符
     * @param {object} target 代理对象
     * @param {string} key 设置的属性key值
    */
   deleteProperty(target,key){
        console.log(`监听到${key}的delete操作`)
   }
})

console.log(proxy.name)
console.log(proxy.age)


// in 操作符号
console.log('name' in proxy)