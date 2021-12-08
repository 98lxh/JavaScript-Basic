const nums = [10,20,[2,9],[[30,20],[50,60]],78]
// const flat = (arr) => {
//     const newArr = []
//     for(let i = 0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             newArr.push(...flatArr(arr[i]))
//         }else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(flat(nums))

//默认为1
// console.log(nums.flat()) //[ 10, 20, 2, 9, [ 30, 20 ], [ 50, 60 ], 78 ]
// console.log(nums.flat(2)) //[10, 20,  2,  9, 30,20, 50, 60, 78]

const newNums = nums.flatMap(item=>item * 2)


const message = ['Hello World','my name is xiao su','i am coder']
const words = message.flatMap(item => item.split(' '))
console.log(words)
