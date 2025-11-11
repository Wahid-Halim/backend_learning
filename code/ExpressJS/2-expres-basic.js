const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found 404");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to this page");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
