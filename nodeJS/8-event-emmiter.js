const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.on("greet", (name) => {
  console.log(`Hi, my name is ${name}`);
});

myEvent.emit("greet", "Wahid");
