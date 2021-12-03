var obj = {
    name: 'xiao su',
    age: 18,
    friedns:[1,2,3]
}

function createObject1(obj){
    var newObj = {};
    Object.setPrototypeOf(newObj,obj)
    return newObj
}

function createObject2(obj){
    function Fn(){}
    Fn.prototype = obj
    var newObj = new Fn()
    return newObj
}

var p1 = Object.create(obj)
var p2 = Object.create(obj)

p1.friedns.push(1)

console.log(p1.friedns,p2.friedns)