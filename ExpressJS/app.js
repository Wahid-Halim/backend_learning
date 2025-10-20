const express = require("express");

const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", logger, (req, res) => {
  res.send("about page");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
