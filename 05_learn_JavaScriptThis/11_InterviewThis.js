//1.
(()=>{
    var name = "window";
    var person = {
        name:"person",
        sayName:function(){
            console.log(this.name)
        }
    }
    
    function sayName(){
        var sss = person.sayName;
        sss(); //window
        person.sayName(); //person 隐式绑定
        (person.sayName)(); // person 隐式绑定
        (p = person.sayName)() //window 赋值表达式 独立函数调用
    }
    sayName()
})();
//2.
(()=>{
    var name = "window";
    var person1 = {
        name:"person1",
        foo1:function(){
            console.log(this.name);
        },
        foo2:()=>console.log(this.name),
        foo3:function(){
            return function(){
                console.log(this.name)
            }
        },
        foo4:function(){
            return ()=>{
                console.log(this.name)
            }
        }
    }
    var person2 = {name:'person2'};
    person1.foo1() //person1 隐式绑定
    person1.foo1.call(person2) //person2 显式绑定

    person1.foo2() //window
    person1.foo2.call(person2) //箭头函数无法改变this window

    person1.foo3()() //window 独立函数调用
    person1.foo3.call(person2)() //window 独立函数调用
    person1.foo3().call(person2) //person2 返回函数显式绑定

    person1.foo4()() //person1 箭头函数引用外层this
    person1.foo4.call(person2)() //person2 箭头函数引用外层this
    person1.foo4().call(person2) //person1
})

//3.
(()=>{
    var name = 'window';
    function Person(name){
        this.name = name;
        this.foo1 = function(){
            console.log(this.name)
        };
        this.foo2 = () => console.log(this.name);
        this.foo3 = function(){
            return function(){
                console.log(this.name)
            }
        }
        this.foo4 = function(){
            return () => {
                console.log(this.name)
            }
        }
    }
    var person1 = new Person('person1');
    var person2 = new Person('person2');
    person1.foo1() //person1{}
    person1.foo1.call(person2) //person2{}

    person1.foo2()() //person1 
    person1.foo2.call(person2) //person1 

    person1.foo3()() //window 独立函数调用
    person1.foo3.call(person2)() //window独立函数调用
    person1.foo3().call(person2) //person2

    person1.foo4()() //person1
    person1.foo4.call(person2)() //person2
    person1.foo4().call(person2)  //person1
})()

//4.
(()=>{
var name = 'window';
function Person(name){
    this.name = name;
    this.obj = {
        name:'obj',
        foo1:function(){
            return function(){
                console.log(this.name)
            }
        },
        foo2:function(){
            return ()=>{
                console.log(this.name)
            }
        }
    }
}
var person1 = new Person('person1');
var person2 = new Person('person2');
person1.obj.foo1()() //window
person1.obj.foo1.call(person2)() //window
person1.obj.foo1().call(person2) //person2

person1.obj.foo2()() //obj
person1.obj.foo2.call(person2)() //person2
person1.obj.foo2().call(person2) //obj
})()