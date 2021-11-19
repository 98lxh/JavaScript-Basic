//从某些角度来说，开发中可以不使用this
//但是不使用this代码代码会变得不方便
var obj = {
    name:"小苏",
    eating:function(){
        console.log(this.name + '在吃饭')
    },
    runing:function(){
        console.log(this.name + '在跑步')
    }
}