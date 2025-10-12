const { readFileSync, writeFileSync } = require("fs");

const osModule = readFileSync("./3-os-module.js", "utf8");
const first = readFileSync("./content/first.txt", "utf8");

console.log(first);

writeFileSync(
  "./content/result-sync.txt",
  `This is the result of writeFileSync method: ${osModule}`
);

writeFileSync("./content/result-sync.txt", first, { flag: "a" });
