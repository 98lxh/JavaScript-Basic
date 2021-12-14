const names = [1,2,3]
console.log(names[Symbol.iterator])
const iterator = names[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for(const item of names){
    console.log(item)
}


const set = new Set()
set.add(10)
set.add(100)
set.add(1000)
for(const key of set){
    console.log(key)
}
