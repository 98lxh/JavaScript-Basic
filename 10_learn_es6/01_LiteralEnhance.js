var name = 'xiao su'
var age = 18
var obj = {
    //property shorthand(属性简写)
    name,
    age,

    foo:function(){

    },
    //method shorthand
    bar(){

    },
    //箭头函数写法 与方法简写无关
    baz:()=>{
        console.log(this) // -> window
    },
    //computed property name(计算属性名)
    [age + 10]:111
}


console.log(obj[obj.age + 10])