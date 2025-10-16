const { createReadStream } = require("fs");

const readableStream = createReadStream("./content/big.txt");

readableStream.on("data", (chunk) => {
  console.log("Received a chunk of data:");
  console.log(chunk);
});

// Listen for 'end' event — when reading is finished
readableStream.on("end", () => {
  console.log("Finished reading the file.");
});
