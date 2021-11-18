function foo(fn){
    fn();
};
function bar(){
    console.log('bar');
};
//函数可以作为参数被传递
foo(bar); // 'bar'
function calc(num1,num2,calcFn){
    calcFn(num1,num2);
}
function add(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1 - num2
}

var m = 20;
var n = 30;
calc(m,n,add);
calc(m,n,sub);