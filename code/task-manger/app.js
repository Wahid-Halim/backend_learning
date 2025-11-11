const express = require("express");
const app = express();



app.get("/hello", (req, res) => {
  res.send("task manger app!");
});


const port = 3000;
app.listen(port, () => {
  console.log("Server is running on port 5000");
});
