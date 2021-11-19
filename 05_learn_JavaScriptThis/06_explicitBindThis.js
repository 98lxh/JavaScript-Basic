// function foo(){
//     console.log("函数被调用")
// }
// // foo直接调用指向的是全局对象window

// foo();
// var obj = {
//     name: "obj"
// }
// foo.call(obj);  // -> obj


function foo(){
    console.log(this);
}

var fn = foo.bind("aaa");
fn();//'aaa'
fn();//'aaa'
fn();//'aaa'
