//空值操作符 ??

const foo = ''

//逻辑或的问题 "" 或者 0 这类的返回false的表达式存在问题
const bar = foo || 'default value'

//空值操作只会在undefined和null时候使用默认值
const baz = foo ?? 'default value'
console.log(foo) //undefined
console.log(bar) 
console.log(baz) 