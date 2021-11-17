function foo(){
  var a = b = 100;
  // var a = 100
  // b = 100 
}
foo()
console.log(b)  //100
console.log(a) //报错



var a = 100
function foo(){
 console.log(a);
 /**
  * 编译阶段不管return 
 */
 return 
 var a = 200
}
foo() //undefined