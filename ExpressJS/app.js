const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// middleware own / express /third party

// app.use([logger, authorize]);
// app.use(express.static('./public'));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
