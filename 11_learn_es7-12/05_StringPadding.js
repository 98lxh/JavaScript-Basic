const message = 'Hello World';
//padStrat
console.log(message.padStart(15)) //    Hello World
console.log(message.padStart(15,'*')) //****Hello World

//处理身份证

const cardNumber = '13118911188822222' 
const lastFourCard = cardNumber.slice(-4).padStart(15,'*')
console.log(lastFourCard)