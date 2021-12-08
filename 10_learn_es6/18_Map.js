//js中对象是不能作为对象的key
const obj1 = {name:'xiao liu'}
const obj2 = {name:'xiao su'}

//Map允许对象作为key
const map = new Map()
map.set(obj1,'a')
map.set(obj2,'b')
console.log(map)


// entries
const map2 = new Map([[obj1,'aaa'],[obj2,'bbb']])
console.log(map2)


//属性和方法
console.log(map2.size)
//set
map.set('0','1')
//get(key)
console.log(map.get('0'))
//has(key)
console.log(map.has('0'))
//delete(key)
console.log(map.delete('0'))
//clear
map.clear()


//遍历map对象
map2.forEach((item,key) => {console.log(item,key)})

//for..of遍历
for(const [key,value] of map2){
    console.log(key,value)
}