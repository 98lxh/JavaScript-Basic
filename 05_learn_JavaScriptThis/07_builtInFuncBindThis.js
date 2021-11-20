//内置函数的this绑定
//1.setTimeout
setTimeout(function(){
 console.log(this); //window
},2000);
//2.DOM元素监听事件
const target = document.querySelector("#target");
target.onclick = function(){
    console.log(this);
    //target.onclick() -> this -> target
}
target.addEventListener('click',function(){
    console.log(this);
    //fn.call(target) -> this -> target
})
//3.数组方法
var names = ['a','b','c'];
var bindThis={
    name:'OBJ'
}
names.forEach(function(){
    console.log(this); //window
})
names.forEach(function(){
    console.log(this); //bindThis
},bindThis)

