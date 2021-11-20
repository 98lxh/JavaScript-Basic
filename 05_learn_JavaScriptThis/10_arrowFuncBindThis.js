var name = "xiao su"
var foo = () => {
    console.log(this);
}
//不能绑定this
foo.call("abc"); //window

//应用场景

var obj = {
    data:[],
    getData:function(){
        // var that = this;
        //在箭头函数之前
        // setTimeout(function(){
        //     var result = [1,2,3];
        //     利用闭包保存外层作用域的this
        //     that.data = result
        // })
        //箭头函数
        setTimeout(()=>{
            var result = [1,2,3];
            this.data = result
        })
    }
}
obj.getData()
