// Modules
// Encapsulated code

const greeting = require("./utils");
const { john, peter } = require("./names");

greeting(john);
greeting(peter);
greeting("wahid");
