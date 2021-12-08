//es11之前
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt) //9007199254740991
console.log(maxInt + 1) //9007199254740992
console.log(maxInt + 2) //9007199254740992


//ES11
const bigInt = 9007199254740991n
console.log(bigInt)
console.log(bigInt + 1n) //9007199254740992n
console.log(bigInt + 10n)//9007199254741001n