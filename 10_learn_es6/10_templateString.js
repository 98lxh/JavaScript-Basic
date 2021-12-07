const name = 'xiao su'
const age = 18
const height = '1.50m'


console.log('my name is ' + name + ' today ' + age + 'year`s old' + ' my height is ' + height)
console.log(`my name is ${name} today ${age} year's old my height is ${height}`)

function foo(m,n){
    console.log(m,n)
}

//标签模板字符串
foo`` //[ '' ] undefined

foo`Hello World` // [ 'Hello World' ] undefined

//第一个参数 模板字符串 只是是被切成多块放入一个数组 第二个参数是模板字符串中的第一个${}
foo `Hello${name}Wor${age}ld` // [ 'Hello', 'Wor', 'ld' ] xiao su
