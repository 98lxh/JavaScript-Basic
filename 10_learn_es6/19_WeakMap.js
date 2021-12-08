const obj = {name:'xiao liu'}

//区别二：map的key对对象是强引用而weakMap是弱引用
const map = new Map()
map.set(obj,'aaa')


const weakMap = new WeakMap()
weakMap.set(obj,'aaa')

//应用场景(vue3响应式原理)
const obj1 = {
    name:'xiao su',
    age: 18
}

/***
 * <template>
 *   <div>{{name}}</div>
 *   <h2>{{age}}</h2>  -> render函数
 * </template> 
 */

const obj2 = {
    height:1.88,
    address:'北京市'
}

function obj1NameFn1(){
    console.log('obj1NameFn1执行')
}
function obj1NameFn2(){
    console.log('obj1NameFn1执行')
}
function obj1AgeFn1(){
    console.log('obj1AgeFn1')
}
function obj1AgeFn2(){
    console.log('obj1AgeFn2')
}

const weakMap = new WeakMap()
const obj1Map = new Map()
obj1Map.set('name',[obj1NameFn1,obj1NameFn2])
obj1Map.set('age',[obj1AgeFn1,obj1AgeFn2])
weakMap(obj1,obj1Map)

//如果obj1.name改变 
obj1.name = 'xiao su'

const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(item => item())