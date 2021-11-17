var name = 'why';

foo();
function foo(num){
    var m = 10;
    var n = 20;
    console.log('foo');
}


var GlobalObject = {
    String:'class',
    Date:'class',
    setTimeout:'function',
    window:GlobalObject, //window.window.window.window.window .....
    name:undefined,
    foo:Oxa00
}