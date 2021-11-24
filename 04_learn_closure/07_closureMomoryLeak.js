function createFnArray () {
    // 占4M
    var arr = new Array(1024 * 1024).fill(1);
    return function(){
        console.log(arr.length);
    }
}

var arrFuns = []
for(var i = 0;i<100;i++){
    arrFuns.push(createFnArray());
}
setTimeout(()=>{
    //销毁
    arrFuns = null
},2000)
