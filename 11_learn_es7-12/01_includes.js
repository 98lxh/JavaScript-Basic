const nums = [1,2,3,4,5,NaN]
console.log(nums.indexOf(1)) //0
console.log(nums.includes(1)) //true

//includes可以查找到NaN，indexof不行
console.log(nums.indexOf(NaN)) //-1
console.log(nums.includes(NaN)) //true