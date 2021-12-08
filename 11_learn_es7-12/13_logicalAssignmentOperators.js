//1. ||= 逻辑或运算符
let message = undefined
// message = message || 'default value'
message ||= 'default value'
//2. &&= 逻辑与运算符
const obj = {
    foo:undefined,
    bar:undefined
}
obj.foo && obj.foo()
obj = obj && obj.bar
obj&&=obj.bar
//3. ??= 逻辑空运算符
message ??= 'default value'