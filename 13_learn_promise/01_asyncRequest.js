//模拟异步请求
//request.js
/**
 * 这种回调的方式有很多弊端:
 *  >1.如果是自己封装的requestData，那么在封装时必须使用自己设计好的callback名称
 *  >2.如果使用的是别人的封装的requestData或一些第三方的库，那么必须去看别人的源码或者文档才能知道这个函数需要什么获得结果
 * 
*/
function requestData(url,successCallback,failtureCallback){
    setTimeout(()=>{
        //请求结果
        //传入xs为成功否则失败
        if(url === 'xs'){
            //成功
            let names = [1,2,3]
            successCallback(names)
        }else{
            //失败
            let errorMsg = '请求错误'
            failtureCallback(errorMsg)
        }
    },3000)
}

//main.js
requestData('xs1',(res)=>{
    console.log(res)
},(err)=>{
    console.log(err)
})


//更好的方案 -> 承诺(规范好了所以代码编写逻辑)
function requestData2(){
    return 'Promise'
}

const promise = requestData2()