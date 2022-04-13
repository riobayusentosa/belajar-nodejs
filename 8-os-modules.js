const { log } = require('console')
const OS = require('os')

//info about current user
const user = OS.userInfo()

// method return the system uptime in seconds
console.log(`The System Uptime is ${OS.uptime} seconds`);

const currentOS = {
    name: OS.type(),
    release : OS.release(),
    totalmem : OS.totalmem(),
    fremem : OS.freemem(),
}
console.log(currentOS);