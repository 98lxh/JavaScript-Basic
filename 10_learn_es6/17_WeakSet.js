//WeakSet的基本使用
const weakSet = new WeakSet()

//1.区别
// weakSet.add(10)报错 weakset不能存放基本数据类型

//2.区别：对对象是一个弱引用
let obj = {
    name:'xiao su',
}
//弱引用 Weak reference
//弱引用通过弱引用取值但是对于GC来说这个引用会被无视 
weakSet.add(obj)


obj = null


//3.WeakSet应用场景
const personSet = new WeakSet()
class Person{
    constructor(){
        personSet.add(this)    
    }

    running(){
        if(!personSet.has(this)){
            throw new Error('不能通过非构造方法创建出来的对象调用running方法')
        }
        console.log('running~~~',this)
    }
}

const p = new Person()
p.running()
p.running.call({name:'xiao su'})