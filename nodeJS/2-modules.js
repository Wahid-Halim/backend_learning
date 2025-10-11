// Modules
// Encapsulated code

const greeting = require("./utils");
const { john, peter } = require("./names");
require("./mindGrenade");
// greeting(john);
// greeting(peter);
// greeting("wahid");

const os = require('os');
const { log } = require("console");

const user = os.userInfo();
const osMethods = {
    name: os.type(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime()
}

console.log(osMethods)


