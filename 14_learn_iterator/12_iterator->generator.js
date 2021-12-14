/**
 * 1.生成器替代迭代器
*/
function* createArrayIterator(arr){
    // let index = 0;
    // for(let i = 0; i < arr.length; i++){
    //     yield arr[index ++]
    // }

    // yield*
    yield* arr
}

const iterator = createArrayIterator([1,2,3,4,5])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


//创建一个函数迭代一个范围内的数字
// 10 20
function* createRangeIterator(start,end){
    // let index = start
    // return {
    //     next: () => {
    //         if(index < end){
    //             return {done:false,value:index++}
    //         }else{
    //             return {done:true,value:undefined}
    //         }
    //     }
    // }
    let index = start
    while(index++ < end){
        yield index
    }
}

const rangeIterator =  createRangeIterator(10,20)
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())
console.log(rangeIterator.next())


//3.classRoom
class ClassRoom{
    constructor(address,name,students){
        this.address = address;
        this.name = name;
        this.students = students
    }

    entry(newStudent){
        this.students.push(newStudent)
    }

    *[Symbol.iterator](){
        yield* this.students
        // let index = 0
        // while(index < this.students.length){
        //     yield this.students[index ++]
        // }
    }
}
const c = new ClassRoom(1,2,[1,2,3])
for(const item of c){
    console.log(item)
}