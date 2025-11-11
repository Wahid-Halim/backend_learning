const os = require("os");
const { log } = require("console");

const user = os.userInfo();
const currentOs = {
  name: os.type(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  uptime: os.uptime(),
};

console.log(currentOs);
