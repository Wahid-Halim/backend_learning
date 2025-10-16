const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    await writeFile("./content/second.txt", `That's awesome: ${first}`);
    console.log(first);
  } catch (err) {
    console.log(err.message);
  }
};
start();

// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, res) => {
//       if (err) reject(err);
//       else resolve(res);
//     });
//   });
// };
