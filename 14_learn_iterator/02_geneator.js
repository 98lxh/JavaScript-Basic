const names = ['xiao su','xiao liu','xiao han']
const nums = [1,2,3,4,5]

function createArrayIterator(arr) {
    let index = 0
    return {
        next:function() {
            if (index < arr.length) {
                return {done: false, value: arr[index++]}
            } else {
                return {done: true, value: undefined}
            }
        }
    }
}
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())


//无限的迭代器
function createNumberIterator(){
    let index = 0;
    return {
        next:function(){
            return {done:false,value:index++}
        }
    }
}

