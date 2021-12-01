function createPerson(name,age,height,address){
    return {
        name,
        age,
        height,
        address,
        eatting(){
            console.log(this.name + '在吃饭...')
        },
        running(){
            console.log(this.name + '在跑步...')
        }
    }
}

var p1 = createPerson('张三',18,1.88,'北京')
var p2 = createPerson('李四',20,1.98,'杭州')

//工厂模式缺点
//获取不到对象真实的类型
console.log(p1,p2)