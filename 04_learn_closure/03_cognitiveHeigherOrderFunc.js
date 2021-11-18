/**
 * cognitiveHeigherOrderFunc.drawio
*/
function foo(){
    return function bar(){
        console.log('bar');
    }
}

var fn = foo();
fn();