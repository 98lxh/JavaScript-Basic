const { collapseTextChangeRangesAcrossMultipleVersions } = require("typescript");

//认识可迭代对象
const itetatorObj = {
    names:[1,2,3],
    [Symbol.iterator]:function(){
        let index = 0;
        return {
            next:() => {
                if(index < this.names.length){
                    return {done:false,value:this.names[index++]}
                }else{
                    return {done:true,value:undefined}
                }
            }
        }
    }
}


const iterator = itetatorObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


//for ... of 必须遍历可以迭代对象
for(const item of itetatorObj){
    console.log(item)
}