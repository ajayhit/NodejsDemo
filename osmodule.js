const os=require('os')

const user=os.userInfo()

console.log(user)


console.log(os.uptime())

const currentchk={
    name:os.type(),
    relase:os.release(),
    totalmem:os.totalmem(),
    frem:os.freemem()

}

console.log(currentchk)