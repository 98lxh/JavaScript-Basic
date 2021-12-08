const info = {
    name:'xiao su',
    friend:{
        name:'Li Lei',
        girlFriend:{
            name:'Han MeiMei'
        }
    }
}

console.log(info.friend.girlFriend.name) //Han MeiMei

const info2 = {
    name:'xiao su',
}

// console.log(info2.friend.girlFriend.name) //Cannot read property 'girlFriend' of undefined
console.log(info2.friend?.girlFriend?.name)