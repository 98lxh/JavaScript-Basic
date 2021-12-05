//es6
class Person{

}

// babel
"use strict";

function _classCallCheck(instance, Constructor) { 
    //不是new 调用报错
    if (!(instance instanceof Constructor)) { 
        throw new TypeError("Cannot call a class as a function");
    } }

var Person = function Person() {
  _classCallCheck(this, Person);
};

//es6
class Person{
  constructor(name,age){
      this.name = name;
      this.age = age;
  }
  eatting(){
      console.log(this.name + 'eatting~~~')
  }
}

//babel
"use strict";
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// /*#__PURE__*/ 纯函数 
// jsx -> babel -> createElement
// wabpack 压缩 tree-shaking
// 函数没有副作用
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "eatting",
      value: function eatting() {
        console.log(this.name + "eatting~~~");
      }
    }
  ]);

  return Person;
})();
