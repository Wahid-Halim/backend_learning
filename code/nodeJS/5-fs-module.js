const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

const osModule = readFileSync("./3-os-module.js", "utf8");
const first = readFileSync("./content/first.txt", "utf8");

// console.log(first);

// fs-module sync
writeFileSync(
  "./content/result-sync.txt",
  `This is the result of writeFileSync method: ${osModule}`
);

writeFileSync("./content/result-sync.txt", first, { flag: "a" });

// fs (async)

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) throw err;
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) throw err;
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `${first}:${second}`,
      (err, result) => {
        if (err) throw err;
        console.log("File written successfully");
      }
    );
  });
});
