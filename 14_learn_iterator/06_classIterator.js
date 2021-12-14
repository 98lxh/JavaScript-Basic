class ClassRoom{
    constructor(address,name,students){
        this.address = address;
        this.name = name;
        this.students = students
    }

    entry(newStudent){
        this.students.push(newStudent)
    }

    [Symbol.iterator](){
        let index = 0;
        return {
            next: () => {
                if(index < this.students.length){
                    return {done:false,value:this.students[index++]}
                }else{
                    return {done:true,value:undefined}
                }
            },
            return:()=>{
                console.log('迭代器终止')
                return {
                    done:true,
                    value:undefined
                }
            }
        }
    }
}

const classRoom = new ClassRoom('bj','bubu',[1,2,3,4])
classRoom.entry(5)


for(const item of classRoom){
    console.log(item)
    if(item === 3) break
}